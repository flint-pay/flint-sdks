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
export type ErrorKind = 'transport'
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
    | 'destination';
export interface Metadata {
    status: number;
    headers: Record<string, string>;
    requestId?: string;
    idempotencyKey?: string;
    attempts: number;
    durationMs: number;
    url?: string;
}
export interface Result<T> {
    data: T;
    meta: Metadata;
    raw: T extends Uint8Array ? Uint8Array : string;
}
export type RuntimeErrorDetails = {
    "transportCode": string | null;
}
    | {
    "eventId": string;
    "position": number;
}
    | {
    "reason": string;
    "source": string;
    "workloadIdentityId": string;
    "iss": string;
    "sub": string;
    "aud": string;
    "error_description": string;
};
/** SDK failure with outcome and recovery metadata. See RUNTIME.md#error-reference. */
export declare class SdkError extends Error {
    kind: ErrorKind;
    outcome: 'unknown' | 'response' | 'not_sent';
    retryAllowed: boolean;
    meta?: Metadata | undefined;
    code?: SdkErrorCode | undefined;
    details?: SdkErrorDetails | undefined;
    raw?: string | undefined;
    idempotencyKey?: string;
    retryAfterMs?: number;
    constructor(kind: ErrorKind, message: string, outcome?: 'unknown' | 'response' | 'not_sent', retryAllowed?: boolean, meta?: Metadata | undefined, code?: SdkErrorCode | undefined, details?: SdkErrorDetails | undefined, options?: ErrorOptions, raw?: string | undefined);
    get status(): number | undefined;
    toJSON(): {
        name: string;
        kind: ErrorKind;
        message: string;
        outcome: "unknown" | "response" | "not_sent";
        retryAllowed: boolean;
        requestId: string | undefined;
        status: number | undefined;
        code: SdkErrorCode | undefined;
        details: SdkErrorDetails | undefined;
        idempotencyKey: string | undefined;
        retryAfterMs: number | undefined;
        cause: {
            name: string;
            code: string | undefined;
        } | undefined;
        stack: string | undefined;
    };
    [inspectCustom](): {
        name: string;
        kind: ErrorKind;
        message: string;
        outcome: "unknown" | "response" | "not_sent";
        retryAllowed: boolean;
        requestId: string | undefined;
        status: number | undefined;
        code: SdkErrorCode | undefined;
        details: SdkErrorDetails | undefined;
        idempotencyKey: string | undefined;
        retryAfterMs: number | undefined;
        cause: {
            name: string;
            code: string | undefined;
        } | undefined;
        stack: string | undefined;
    };
}
declare const BaseSdkError: typeof import("./runtime.js").SdkError;
type BaseSdkError = SdkError;
export declare namespace errors {
    const SdkError: typeof import("./runtime.js").SdkError;
    type SdkError = BaseSdkError;
    class ConnectionError extends BaseSdkError {
    }
    class TimeoutError extends BaseSdkError {
    }
    class AuthenticationError extends BaseSdkError {
    }
    class ValidationError extends BaseSdkError {
    }
    class RateLimitError extends BaseSdkError {
    }
    class NotFoundError extends BaseSdkError {
    }
    class ConflictError extends BaseSdkError {
    }
    class ServerError extends BaseSdkError {
    }
    class ApiError extends BaseSdkError {
    }
    class ProtocolError extends BaseSdkError {
    }
    class CancelledError extends BaseSdkError {
    }
    class DeadlineError extends BaseSdkError {
    }
    class DestinationError extends BaseSdkError {
    }
}
/** Internal construction boundary; public constructors keep their existing arguments. */
export declare function createSdkError(...args: ConstructorParameters<typeof SdkError>): SdkError;
export interface DiagnosticEvent {
    operation: string;
    attempt: number;
    status?: number;
    requestId?: string;
    durationMs: number;
    errorKind?: ErrorKind;
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
    private readonly reader;
    readonly meta: Metadata;
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
    [inspectCustom](): {
        meta: {
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
export type SdkErrorDetails = import("./declarations/types-18.js").ErrorObject
    | ({
    "transportCode": string | null;
}
    | {
    "eventId": string;
    "position": number;
}
    | {
    "reason": string;
    "source": string;
    "workloadIdentityId": string;
    "iss": string;
    "sub": string;
    "aud": string;
    "error_description": string;
});
