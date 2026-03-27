export type FlintErrorType =
  | "authentication"
  | "authorization"
  | "validation"
  | "not_found"
  | "conflict"
  | "rate_limit"
  | "internal"
  | "external_service"
  | "timeout"
  | "unavailable";

export type FlintRemediation = {
  retryable?: boolean;
  retryAfterMs?: number;
  suggestedNextMethod?: string;
  requiresHumanConfirmation?: boolean;
  missingOrInvalidFields?: string[];
};

export class FlintError extends Error {
  readonly type: FlintErrorType;
  readonly code: string;
  readonly httpStatus: number;
  readonly field?: string;
  readonly requestId?: string;
  readonly remediation?: FlintRemediation;

  constructor(params: {
    type: FlintErrorType;
    code: string;
    message: string;
    httpStatus: number;
    field?: string;
    requestId?: string;
    remediation?: FlintRemediation;
  }) {
    super(params.message);
    this.name = "FlintError";
    this.type = params.type;
    this.code = params.code;
    this.httpStatus = params.httpStatus;
    this.field = params.field;
    this.requestId = params.requestId;
    this.remediation = params.remediation;
  }
}

const ERROR_TYPE_MAP: Record<number, FlintErrorType> = {
  1: "authentication",
  2: "authorization",
  3: "validation",
  4: "not_found",
  5: "conflict",
  6: "rate_limit",
  7: "internal",
  8: "external_service",
  9: "timeout",
  10: "unavailable",
};

/**
 * Parse an HTTP error response into a FlintError.
 * The server returns Connect RPC JSON error responses with structured error details.
 */
export const parseHttpError = (status: number, body: string): FlintError => {
  try {
    const parsed = JSON.parse(body) as Record<string, unknown>;

    // Connect RPC error format: { code: "not_found", message: "...", details: [...] }
    if (parsed["code"] && parsed["message"]) {
      return parseConnectJsonError(status, parsed);
    }

    // Flint ErrorResponse format: { errors: [...], meta: {...} }
    if (Array.isArray(parsed["errors"]) && parsed["errors"].length > 0) {
      const first = parsed["errors"][0] as Record<string, unknown>;
      return parseFlintErrorDetail(status, first);
    }
  } catch {
    // Not JSON
  }

  // Fallback for non-JSON responses
  return new FlintError({
    type: inferTypeFromStatus(status),
    code: `HTTP_${status}`,
    message: body || `HTTP ${status}`,
    httpStatus: status,
  });
};

const parseConnectJsonError = (
  httpStatus: number,
  parsed: Record<string, unknown>
): FlintError => {
  const connectCode = parsed["code"] as string;
  const message = parsed["message"] as string;
  const details = parsed["details"] as Array<Record<string, unknown>> | undefined;

  // Try to extract structured Flint error from details
  if (details && details.length > 0) {
    for (const detail of details) {
      const detailType = detail["type"] as string | undefined;
      if (detailType === "flint.v1.ErrorResponse" || detailType === "flint.v1.Error") {
        const value = detail["value"] as Record<string, unknown> | undefined;
        const debug = detail["debug"] as Record<string, unknown> | undefined;
        const errorData = debug ?? value;
        if (errorData) {
          // ErrorResponse wrapping
          if (Array.isArray(errorData["errors"]) && errorData["errors"].length > 0) {
            return parseFlintErrorDetail(httpStatus, errorData["errors"][0] as Record<string, unknown>);
          }
          // Direct Error
          if (errorData["code"]) {
            return parseFlintErrorDetail(httpStatus, errorData);
          }
        }
      }
    }
  }

  // Fallback: infer from Connect error code string
  return new FlintError({
    type: inferTypeFromConnectCode(connectCode),
    code: connectCode.toUpperCase(),
    message,
    httpStatus,
  });
};

const parseFlintErrorDetail = (
  fallbackHttpStatus: number,
  detail: Record<string, unknown>
): FlintError => {
  const typeNum = detail["type"] as number | undefined;
  const type: FlintErrorType =
    (typeNum != null ? ERROR_TYPE_MAP[typeNum] : undefined) ?? inferTypeFromStatus(fallbackHttpStatus);
  const remediation = detail["remediation"] as Record<string, unknown> | undefined;

  return new FlintError({
    type,
    code: (detail["code"] as string) ?? "UNKNOWN",
    message: (detail["message"] as string) ?? "An unknown error occurred",
    httpStatus: (detail["httpStatusCode"] as number) ?? fallbackHttpStatus,
    field: detail["field"] as string | undefined,
    requestId: detail["requestId"] as string | undefined,
    remediation: remediation
      ? {
          retryable: remediation["retryable"] as boolean | undefined,
          retryAfterMs: remediation["retryAfterMs"] as number | undefined,
          suggestedNextMethod: remediation["suggestedNextMethod"] as string | undefined,
          requiresHumanConfirmation: remediation["requiresHumanConfirmation"] as boolean | undefined,
          missingOrInvalidFields: remediation["missingOrInvalidFields"] as string[] | undefined,
        }
      : undefined,
  });
};

const inferTypeFromStatus = (status: number): FlintErrorType => {
  if (status === 401) return "authentication";
  if (status === 403) return "authorization";
  if (status === 400) return "validation";
  if (status === 404) return "not_found";
  if (status === 409) return "conflict";
  if (status === 429) return "rate_limit";
  if (status === 504) return "timeout";
  if (status === 503) return "unavailable";
  if (status === 502) return "external_service";
  return "internal";
};

const inferTypeFromConnectCode = (code: string): FlintErrorType => {
  switch (code) {
    case "unauthenticated": return "authentication";
    case "permission_denied": return "authorization";
    case "invalid_argument":
    case "failed_precondition":
    case "out_of_range": return "validation";
    case "not_found": return "not_found";
    case "already_exists":
    case "aborted": return "conflict";
    case "resource_exhausted": return "rate_limit";
    case "deadline_exceeded": return "timeout";
    case "unavailable": return "unavailable";
    default: return "internal";
  }
};
