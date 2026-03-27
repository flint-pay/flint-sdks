import { FlintError, parseHttpError } from "../errors";
import type { FlintPage } from "../pagination";
import { createFlintList, type FlintList, type ListFetcher } from "../pagination";
import { SDK_VERSION } from "../version";

export type RequestConfig = {
  baseUrl: string;
  apiKey: string;
  maxRetries: number;
  timeoutMs: number;
  headers?: Record<string, string>;
};

/**
 * Base class for all Flint service wrappers.
 * Makes direct JSON POST requests to Connect RPC endpoints.
 */
export abstract class BaseService {
  protected readonly config: RequestConfig;

  constructor(config: RequestConfig) {
    this.config = config;
  }

  /**
   * Make an RPC call to a Connect endpoint.
   * Connect protocol: POST with JSON body, JSON response.
   */
  protected async rpc<TReq extends Record<string, unknown>, TRes>(
    service: string,
    method: string,
    request: TReq
  ): Promise<TRes> {
    const url = `${this.config.baseUrl}/${service}/${method}`;
    let lastError: unknown;

    for (let attempt = 0; attempt <= this.config.maxRetries; attempt++) {
      const controller = new AbortController();
      let didTimeout = false;
      const timeoutId = setTimeout(() => {
        didTimeout = true;
        controller.abort();
      }, this.config.timeoutMs);

      try {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${this.config.apiKey}`,
            "User-Agent": `flintpay-node/${SDK_VERSION}`,
            "X-Flint-Client": `node/${SDK_VERSION}`,
            "Connect-Protocol-Version": "1",
            ...this.config.headers,
          },
          signal: controller.signal,
          body: JSON.stringify(request),
        });

        if (!response.ok) {
          const body = await response.text();
          const error = parseHttpError(response.status, body);

          if (attempt < this.config.maxRetries && isRetryableStatus(response.status)) {
            const retryAfterMs = error.remediation?.retryAfterMs;
            const backoffMs = retryAfterMs ?? Math.min(1000 * 2 ** attempt, 30000);
            const jitter = backoffMs * (0.75 + Math.random() * 0.5);
            await sleep(jitter);
            lastError = error;
            continue;
          }

          throw error;
        }

        return (await response.json()) as TRes;
      } catch (err) {
        if (err instanceof FlintError) throw err;

        if (didTimeout || isAbortError(err)) {
          const timeoutError = new FlintError({
            type: "timeout",
            code: "REQUEST_TIMEOUT",
            message: `Request timed out after ${this.config.timeoutMs}ms`,
            httpStatus: 504,
            remediation: {
              retryable: true,
            },
          });

          lastError = timeoutError;
          if (attempt < this.config.maxRetries) {
            const backoffMs = Math.min(1000 * 2 ** attempt, 30000);
            const jitter = backoffMs * (0.75 + Math.random() * 0.5);
            await sleep(jitter);
            continue;
          }
          throw timeoutError;
        }

        lastError = err;
        if (attempt < this.config.maxRetries && isNetworkError(err)) {
          const backoffMs = Math.min(1000 * 2 ** attempt, 30000);
          const jitter = backoffMs * (0.75 + Math.random() * 0.5);
          await sleep(jitter);
          continue;
        }
        throw err;
      } finally {
        clearTimeout(timeoutId);
      }
    }

    throw lastError;
  }

  /**
   * Create a FlintList for paginated endpoints.
   */
  protected paginate<TItem>(fetcher: ListFetcher<TItem>): FlintList<TItem> {
    return createFlintList(fetcher);
  }

  /**
   * Helper to build a FlintPage from a list response.
   */
  protected toPage<TItem>(items: TItem[], nextPageToken: string | undefined): FlintPage<TItem> {
    return {
      data: items,
      nextPageToken: nextPageToken || undefined,
      hasMore: !!nextPageToken,
    };
  }

  /**
   * Convert a Date to an ISO 8601 string for protobuf Timestamp JSON encoding.
   */
  protected toTimestamp(date: Date | undefined): string | undefined {
    return date?.toISOString();
  }

  /**
   * Convert a protobuf Timestamp JSON string to a Date.
   */
  protected fromTimestamp(ts: string | undefined | null): Date | undefined {
    if (!ts) return undefined;
    return new Date(ts);
  }

  /**
   * Convert a FieldMask string array to the proto JSON format (comma-separated camelCase).
   */
  protected toFieldMask(paths: string[]): string {
    return paths.map((p) => snakeToCamel(p)).join(",");
  }

  /**
   * Generate an idempotency key if one isn't provided.
   */
  protected ensureIdempotencyKey(key: string | undefined): string {
    if (key) return key;
    const bytes = new Uint8Array(16);
    crypto.getRandomValues(bytes);
    bytes[6] = (bytes[6]! & 0x0f) | 0x40;
    bytes[8] = (bytes[8]! & 0x3f) | 0x80;
    const hex = Array.from(bytes, (b) => b.toString(16).padStart(2, "0")).join("");
    return `${hex.slice(0, 8)}-${hex.slice(8, 12)}-${hex.slice(12, 16)}-${hex.slice(16, 20)}-${hex.slice(20)}`;
  }
}

const isRetryableStatus = (status: number): boolean => {
  return status === 429 || status === 502 || status === 503 || status === 504;
};

const isNetworkError = (err: unknown): boolean => {
  if (err instanceof TypeError && err.message.includes("fetch")) return true;
  if (err && typeof err === "object" && "code" in err) {
    const code = (err as Record<string, unknown>)["code"];
    return code === "ECONNRESET" || code === "ECONNREFUSED" || code === "ETIMEDOUT";
  }
  return false;
};

const isAbortError = (err: unknown): boolean => {
  return err instanceof Error && err.name === "AbortError";
};

const sleep = (ms: number): Promise<void> => new Promise((r) => setTimeout(r, ms));

const snakeToCamel = (str: string): string => {
  return str.replace(/_([a-z])/g, (_, letter: string) => letter.toUpperCase());
};

/**
 * Resolve a protobuf enum value that may arrive as either:
 * - A number (e.g. 2) — standard proto3 JSON numeric encoding
 * - A proto enum name string (e.g. "ORDER_STATUS_CLOSED") — proto3 JSON string encoding
 *
 * The TO_PROTO map (sdk_value → number) is used to build a reverse lookup from
 * proto string names. Proto names follow the pattern: PREFIX_SDK_VALUE (uppercased).
 */
export function resolveEnum<T extends string>(
  raw: unknown,
  numMap: Record<number, T>,
  toProto: Record<string, number>,
): T | undefined {
  if (raw == null) return undefined;

  // Numeric value — direct lookup
  if (typeof raw === "number") {
    return numMap[raw];
  }

  // String value — proto enum name like "ORDER_STATUS_CLOSED"
  if (typeof raw === "string") {
    // Build reverse map: proto string name → SDK value
    // toProto is { "open": 1, "closed": 2, ... }
    // numMap is { 1: "open", 2: "closed", ... }
    // We need: "ORDER_STATUS_CLOSED" → "closed"
    // Strategy: for each sdk value, its proto number maps back to the sdk value.
    // The proto string is the uppercased SDK value with a prefix.
    // We just need to match the suffix after stripping the prefix.
    for (const [sdkValue, protoNum] of Object.entries(toProto)) {
      const protoName = raw.toUpperCase();
      const sdkUpper = sdkValue.toUpperCase();
      // Match if the proto name ends with _SDK_VALUE
      if (protoName === sdkUpper || protoName.endsWith(`_${sdkUpper}`)) {
        return numMap[protoNum];
      }
    }
  }

  return undefined;
}
