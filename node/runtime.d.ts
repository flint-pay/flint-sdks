import { type TypeCertificate } from './type-certificate.js';
import type { RequestOptionValues } from './request-options.js';
import { DescriptorSource } from './descriptor-source.js';
import type { DefaultCredentials, Schema } from './contract.js';
import { type RuntimeContract, type CompiledRuntimePlan } from './runtime-plan.js';
import { type CodecPlan } from './codec-plan.js';
export type { RuntimeContract } from './runtime-plan.js';
export type { Operation, Schema } from './contract.js';
export { directionalSchema } from './codec-plan.js';
declare const inspectCustom: unique symbol;
type InternalErrorKind = 'transport'
    | 'timeout'
    | 'authentication'
    | 'validation'
    | 'rate_limit'
    | 'not_found'
    | 'server'
    | 'api'
    | 'conflict'
    | 'protocol'
    | 'cancelled'
    | 'deadline'
    | 'destination'
    | 'webhook';
export interface ResponseInfo<Body = unknown> {
    status: number;
    headers: Record<string, string>;
    requestId?: string;
    requestIds: string[];
    idempotencyKey?: string;
    attempts: number;
    durationMs: number;
    body: Body;
}
export type WithResponseInfo<T, Body> = T & {
    readonly lastResponse: ResponseInfo<Body>;
};
interface Metadata {
    status: number;
    headers: Record<string, string>;
    requestId?: string;
    idempotencyKey?: string;
    attempts: number;
    durationMs: number;
    url?: string;
    requestIds?: string[];
}
export interface Result<T> {
    data: T;
    readonly lastResponse: ResponseInfo<T>;
    raw: T extends Uint8Array ? Uint8Array : string;
}
export interface SdkErrorInit {
    code?: string;
    param?: string;
    operation?: string;
    outcome?: 'unknown' | 'response' | 'not_sent';
    retryAllowed?: boolean;
    status?: number;
    requestId?: string;
    requestIds?: string[];
    idempotencyKey?: string;
    attempts?: number;
    durationMs?: number;
    retryAfterMs?: number;
    headers?: Record<string, string>;
    raw?: string;
    cause?: unknown;
}
export type ErrorRetry = 'same_request' | 'after_refresh' | 'none';
export interface ErrorRemediation {
    retry?: ErrorRetry;
    next_steps?: readonly string[];
    next_actions?: readonly unknown[];
    [key: string]: unknown;
}
export interface ApiErrorInit extends SdkErrorInit {
    details?: unknown;
    type?: "authentication_error"
        | "authorization_error"
        | "validation_error"
        | "not_found_error"
        | "conflict_error"
        | "rate_limit_error"
        | "external_service_error"
        | "timeout_error"
        | "unavailable_error"
        | "internal_error"
        | "protocol_error"
        | (string & {});
    errorSource?: "caller" | "merchant" | "merchant_endpoint" | "flint" | "integration" | (string & {});
    docUrl?: string;
    requestLogUrl?: string;
    remediation?: SdkErrorRemediation;
    body?: unknown;
}
/** SDK failure with flattened call context. */
export declare class SdkError extends Error {
    code: SdkErrorCode;
    param?: string;
    operation?: string;
    outcome: 'unknown' | 'response' | 'not_sent';
    retryAllowed: boolean;
    status?: number;
    requestId?: string;
    requestIds: string[];
    idempotencyKey?: string;
    attempts: number;
    durationMs?: number;
    retryAfterMs?: number;
    headers: Record<string, string>;
    raw?: string;
    constructor(message: string, init?: SdkErrorInit);
    toJSON(): {
        cause: {
            name: string;
            code: string | null;
        } | null;
        stack: string | null;
        nextPageToken?: unknown;
        pages?: number;
        details?: readonly unknown[];
        type?: string | null;
        param?: string | null;
        errorSource?: string | null;
        docUrl?: string | null;
        remediation?: ErrorRemediation | null;
        operation: string | null;
        outcome: "response" | "unknown" | "not_sent";
        retryAllowed: boolean;
        status: number | null;
        requestId: string | null;
        requestIds: string[];
        idempotencyKey: string | null;
        attempts: number;
        retryAfterMs: number | null;
        name: string;
        message: string;
        code: SdkErrorCode;
    };
    [inspectCustom](): {
        cause: {
            name: string;
            code: string | null;
        } | null;
        stack: string | null;
        nextPageToken?: unknown;
        pages?: number;
        details?: readonly unknown[];
        type?: string | null;
        param?: string | null;
        errorSource?: string | null;
        docUrl?: string | null;
        remediation?: ErrorRemediation | null;
        operation: string | null;
        outcome: "response" | "unknown" | "not_sent";
        retryAllowed: boolean;
        status: number | null;
        requestId: string | null;
        requestIds: string[];
        idempotencyKey: string | null;
        attempts: number;
        retryAfterMs: number | null;
        name: string;
        message: string;
        code: SdkErrorCode;
    };
}
declare const BaseSdkError: typeof import("./runtime.js").SdkError;
type BaseSdkError = SdkError;
export declare namespace errors {
    const SdkError: typeof import("./runtime.js").SdkError;
    type SdkError = BaseSdkError;
    class ApiError extends BaseSdkError {
        details: SdkErrorDetails;
        type?: "authentication_error"
            | "authorization_error"
            | "validation_error"
            | "not_found_error"
            | "conflict_error"
            | "rate_limit_error"
            | "external_service_error"
            | "timeout_error"
            | "unavailable_error"
            | "internal_error"
            | "protocol_error"
            | (string & {});
        errorSource?: "caller" | "merchant" | "merchant_endpoint" | "flint" | "integration" | (string & {});
        docUrl?: string;
        requestLogUrl?: string;
        remediation?: SdkErrorRemediation;
        body?: unknown;
        constructor(message: string, init?: ApiErrorInit);
    }
    class InvalidRequestError extends ApiError {
    }
    class AuthenticationError extends ApiError {
    }
    class PermissionError extends ApiError {
    }
    class NotFoundError extends ApiError {
    }
    class ConflictError extends ApiError {
    }
    class RateLimitError extends ApiError {
    }
    class ServerError extends ApiError {
    }
    class ConnectionError extends BaseSdkError {
    }
    class TimeoutError extends ConnectionError {
    }
    class InvalidInputError extends BaseSdkError {
        details: readonly {
            code: 'REQUIRED' | 'INVALID_VALUE' | 'UNKNOWN_FIELD' | 'NOT_ALLOWED';
            param: string;
        }[];
        constructor(message: string, init?: SdkErrorInit & {
            details?: unknown;
        });
    }
    class ConfigurationError extends BaseSdkError {
        workloadIdentity?: unknown;
        constructor(message: string, init?: SdkErrorInit);
    }
    class CancelledError extends BaseSdkError {
    }
    class UnexpectedResponseError extends BaseSdkError {
        event?: {
            id: string;
            position: number;
        };
    }
    class WebhookVerificationError extends BaseSdkError {
    }
    class PaginationLimitError extends BaseSdkError {
        nextPageToken: unknown;
        pages: number;
        constructor(message: string, init?: SdkErrorInit & {
            nextPageToken?: unknown;
            pages?: number;
        });
    }
}
/** Internal migration adapter. Remove kind routing when the call sites migrate. */
export declare function createSdkError(kind: InternalErrorKind, message: string, outcome?: SdkError['outcome'], retryAllowed?: boolean, meta?: Metadata, code?: string, details?: unknown, options?: ErrorOptions, raw?: string): SdkError;
export interface DiagnosticEvent {
    operation: string;
    attempt: number;
    status?: number;
    requestId?: string;
    durationMs: number;
    errorName?: string;
    errorCode?: string;
}
/** Incoming Node/Express headers or Fetch Headers; only signing headers are inspected. */
export type WebhookHeaders = Headers | Readonly<Record<string, string | readonly string[] | undefined>>;
export interface CredentialProvider {
    getCredential(): Promise<{
        value: string;
        expiresAt?: Date;
    }>;
    invalidate?(): void;
}
export type WorkloadIdentitySource = 'auto' | 'none' | 'token' | 'token_file' | 'github_actions';
export interface WorkloadIdentityOptions {
    workloadIdentityId: string;
    source?: WorkloadIdentitySource;
    audience?: string;
    scope?: string;
}
/** Generated package wrappers supply provider configuration; no provider names live here. */
export declare function configuredDefaultCredentials(config: DefaultCredentials, baseUrl?: string): CredentialProvider;
export declare function configuredWorkloadIdentityCredentials(config: DefaultCredentials, options: WorkloadIdentityOptions, baseUrl?: string): CredentialProvider;
/** Per-call overrides; pass as the final method argument. See RUNTIME.md#requestoptions. */
export interface RequestOptions extends RequestOptionValues {
    streamIdleTimeoutMs?: number;
    streamLifetimeMs?: number;
    authMode?: string;
    credentials?: Record<string, string | CredentialProvider>;
    headers?: Record<string, string>;
    idempotencyKey?: string;
    ifMatch?: string;
    timeoutMs?: number;
    deadlineMs?: number;
    maxAttempts?: number;
    signal?: AbortSignal;
    maxPages?: number;
    maxItems?: number;
}
/** Client environment, credentials and transport defaults. See RUNTIME.md#clientoptions. */
export interface ClientOptions {
    appInfo?: {
        name: string;
        version?: string;
        url?: string;
    };
    ambientCredentials?: boolean;
    baseUrl?: string;
    token?: string | CredentialProvider;
    authMode?: string;
    credentials?: Record<string, Record<string, string | CredentialProvider>>;
    allowedOrigins?: string[];
    allowInsecureHttp?: boolean;
    timeoutMs?: number;
    deadlineMs?: number;
    maxAttempts?: number;
    transport?: typeof fetch;
    diagnostics?: (event: DiagnosticEvent) => void;
    redactFields?: string[];
}
export interface ServerSentEvent {
    event: string;
    id: string;
    data: unknown;
    rawData: string;
    retry?: number;
}
/** A single-consumer stream. Breaking iteration releases the response connection. */
export declare class EventStream implements AsyncIterable<ServerSentEvent> {
    #private;
    private readonly reader;
    private readonly settings;
    private readonly decodeEvent;
    private readonly released;
    private closed;
    private started;
    private failure;
    private lifetime;
    private unconsumed;
    private readonly abort;
    constructor(reader: ReadableStreamDefaultReader<Uint8Array>, meta: Metadata, settings: {
        idleTimeoutMs: number;
        maxEventBytes: number;
        lifetimeMs?: number;
        signal?: AbortSignal;
        retainConnection?: () => void;
    }, decodeEvent?: (event: string, data: string) => unknown, released?: () => void);
    close(): Promise<void>;
    get lastResponse(): ResponseInfo<EventStream>;
    [inspectCustom](): {
        lastResponse: {
            status: number;
            requestId: string | undefined;
            idempotencyKey: string | undefined;
            attempts: number;
            durationMs: number;
        };
        closed: boolean;
    };
    [Symbol.asyncIterator](): AsyncGenerator<ServerSentEvent>;
}
declare class ParsedNumber {
    readonly value: string;
    constructor(value: string);
}
/** An explicit JSON number for inputs whose schema also permits JSON strings. */
export declare class ExactNumber extends ParsedNumber {
    constructor(value: string);
}
/**
 * Parse JSON without rounding integers or decimal tokens. Unknown numeric tokens remain exact
 * strings.
 */
export declare function parseExact(text: string): unknown;
export declare function normalize(value: unknown, s: Schema, path?: string, response?: boolean, redactFields?: string[], matching?: boolean, definitions?: Record<string, Schema>, depth?: number, validateConstraints?: boolean, allowUnknownResponseFields?: boolean): any;
type CodecMode = {
    mode: 'request' | 'response';
    direction?: never;
}
    | {
    mode: 'match';
    direction: 'request' | 'response';
};
export type CodecContext = CodecMode
    & {
    path?: string;
    sensitive?: boolean;
    redactFields?: string[];
    definitions?: Readonly<Record<string, CodecPlan>>;
    depth?: number;
    validateConstraints?: boolean;
    allowUnknownResponseFields?: boolean;
};
/** Internal descriptor entry point. Raw schemas are accepted only by the adapter above. */
export declare function executeCodec(value: unknown, s: CodecPlan, context: CodecContext): unknown;
export declare function serialize(value: unknown, schema: Schema): string;
export declare function isKnownVariant(value: unknown, schema: Schema): boolean;
export declare function isKnownCodec(value: unknown, codec: CodecPlan, certificate?: TypeCertificate): boolean;
export declare function redact(value: unknown, schema?: Schema, fields?: string[], definitions?: Record<string, Schema>, depth?: number): unknown;
export declare function redactCodec(value: unknown, schema?: CodecPlan, fields?: string[], definitions?: Readonly<Record<string, CodecPlan>>, depth?: number): unknown;
/** Plain inputs and validated model factories may be composed at any depth. */
export type InputValue<T> = [
    T
] extends [
    undefined
] ? T : T
    | Model<T>
    | (T extends Date ? never : T extends readonly (infer Item)[] ? InputValue<Item>[] : T extends object ? {
    [Key in keyof T]: InputValue<T[Key]>;
} : never);
declare class CompiledModel<T = unknown> {
    private readonly dynamicCodec?;
    private readonly value;
    private readonly codec;
    constructor(value: InputValue<T>, codec: CodecPlan, dynamicCodec?: (() => CodecPlan) | undefined);
    toJSON(): T;
    [inspectCustom](): unknown;
}
/** Public schema adapter; compiled factories use the same model executor. */
export declare class Model<T = unknown> extends CompiledModel<T> {
    constructor(value: InputValue<T>, schema: Schema);
    static [Symbol.hasInstance](value: unknown): boolean;
}
export declare function isModel(value: unknown): value is Model;
/** Internal input copy for argument adapters; not exported by the SDK entrypoint. */
export declare function modelInputValue(model: Model): unknown;
/** Internal factory; does not expand the public Model class method surface. */
export declare function modelFromCodec<T>(value: InputValue<T>, codec: CodecPlan): Model<T>;
export type WebhookVerification = {
    known: true;
    event: unknown;
}
    | {
    known: false;
    event: unknown;
    reason: 'unknown_event' | 'unmatched_envelope';
};
export interface WebhookVerificationOptions {
    endpointIds?: string | string[];
    secrets?: string | string[];
    jwks?: {
        keys: object[];
    };
    baseUrl?: string;
    fetch?: typeof fetch;
    nowSeconds?: number;
}
/** JWT takes precedence whenever the caller supplies endpoint IDs and a bearer token. */
export declare function verifyWebhookAsyncFromPlan(source: DescriptorSource | CompiledRuntimePlan, rawBody: Uint8Array | ArrayBuffer, headers: WebhookHeaders, options: WebhookVerificationOptions, redactFields?: string[]): Promise<WebhookVerification & {
    signingMethod: 'jwt' | 'hmac';
}>;
/** Verify compiled webhook descriptors without constructing an HTTP runtime. */
export declare function verifyWebhookFromPlan(source: DescriptorSource | CompiledRuntimePlan, rawBody: Uint8Array | ArrayBuffer, headers: WebhookHeaders, secrets: string | readonly string[], nowSeconds?: number, redactFields?: string[]): WebhookVerification;
declare class CompiledRuntime {
    private readonly dynamicPlan?;
    private readonly streams;
    close(): Promise<void>;
    private readonly options;
    private readonly base;
    private readonly allowed;
    private readonly compiledContract;
    private readonly descriptors;
    private operation;
    private definitions;
    private get contract();
    constructor(compiled: CompiledRuntimePlan | DescriptorSource, options: ClientOptions, dynamicPlan?: (() => CompiledRuntimePlan) | undefined);
    [inspectCustom](): {
        baseUrl: string;
        credentials: string;
    };
    private decode;
    private decodeProjection;
    decodePayload(id: string, result: Result<unknown>, path: string[]): unknown;
    private validateHeaderValue;
    private checkUrl;
    request<T = unknown>(id: string, input?: Record<string, unknown>, options?: RequestOptions, continuation?: string): Promise<Result<T>>;
    private executeRequest;
    pages<T = unknown>(id: string, input?: Record<string, unknown>, options?: RequestOptions): AsyncGenerator<Result<T>>;
    items<T = unknown>(id: string, input?: Record<string, unknown>, options?: RequestOptions): AsyncGenerator<T>;
    wait<T = unknown>(id: string, input: Record<string, unknown>, options?: RequestOptions): Promise<Result<T>>;
    verifyWebhook(rawBody: Uint8Array | ArrayBuffer, headers: WebhookHeaders, secrets: string | readonly string[], nowSeconds?: number): WebhookVerification;
    verifyWebhookAsync(rawBody: Uint8Array | ArrayBuffer, headers: WebhookHeaders, options: WebhookVerificationOptions): Promise<WebhookVerification & {
        signingMethod: 'jwt' | 'hmac';
    }>;
    money(currency: string, major: string): {
        currency: string;
        amount: string;
    };
}
/** Public dynamic-contract adapter; generated clients never retain this compiler path. */
export declare class Runtime extends CompiledRuntime {
    static [Symbol.hasInstance](value: unknown): boolean;
    constructor(contract: RuntimeContract, options: ClientOptions);
}
/** Internal factory for generated clients; public Runtime construction remains schema-based. */
export declare function runtimeFromPlan(contract: CompiledRuntimePlan | DescriptorSource, options: ClientOptions): Runtime;
export type SdkErrorCode = ("ACTION_NOT_ALLOWED"
    | "ALREADY_EXISTS"
    | "API_VERSION_RETIRED"
    | "AUTHENTICATION_REQUIRED"
    | "CONCURRENT_MODIFICATION"
    | "DELIVERY_REQUOTE_REQUIRED"
    | "EXTERNAL_SERVICE_ERROR"
    | "FORBIDDEN"
    | "GIFT_CARD_CHALLENGE_REQUIRED"
    | "IDEMPOTENCY_KEY_IN_PROGRESS"
    | "IDEMPOTENCY_KEY_REUSED"
    | "IDEMPOTENCY_RECOVERY_REQUIRED"
    | "IDENTITY_VERIFICATION_REQUIRED"
    | "INSUFFICIENT_SCOPE"
    | "INTERNAL_ERROR"
    | "INVALID_CREDENTIAL"
    | "INVALID_REQUEST"
    | "INVALID_VALUE"
    | "INVENTORY_INSUFFICIENT"
    | "LIMIT_EXCEEDED"
    | "LIMIT_REACHED"
    | "MERCHANT_NOT_READY"
    | "METHOD_NOT_ALLOWED"
    | "NOT_ALLOWED"
    | "OPERATION_IN_PROGRESS"
    | "PAYMENT_ATTEMPT_ACTIVE"
    | "PAYMENT_OPTION_UNAVAILABLE"
    | "PAYMENT_PROCESSING_UNAVAILABLE"
    | "PAYMENT_PROCESSOR_REJECTED"
    | "PAYMENT_REVIEW_OPEN"
    | "PROMOTION_DECLINED"
    | "RATE_LIMIT_EXCEEDED"
    | "REQUEST_BODY_TOO_LARGE"
    | "REQUEST_CANCELED"
    | "REQUEST_TIMEOUT"
    | "REQUIRED"
    | "RESOURCE_IN_USE"
    | "RESOURCE_NOT_FOUND"
    | "ROUTE_NOT_FOUND"
    | "SERVICE_UNAVAILABLE"
    | "UNKNOWN_FIELD"
    | "UNSUPPORTED_CONTENT_TYPE"
    | "VERSION_CONFLICT"
    | (string & {}))
    & string;
export type SdkErrorDetails = ReadonlyArray<import("./declarations/types-21.js").ErrorDetail>;
export type SdkErrorRemediation = (((import("./declarations/types-21.js").ErrorRemediation) | (null))) & {
    retry?: ErrorRetry;
};
