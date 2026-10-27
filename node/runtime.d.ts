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
export type WorkloadIdentitySource = 'auto' | 'none' | 'token' | 'token_file';
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
export type SdkErrorCode = ("ACCESS_LINK_CUSTOMER_REQUIRED"
    | "ACCESS_LINK_MERCHANT_HOSTED"
    | "ACCOUNT_SETUP_CONFIGURATION_CONFLICT"
    | "ACCOUNT_SETUP_REPAIR_REQUIRED"
    | "ACCOUNT_SETUP_UNAVAILABLE"
    | "ACH_TRANSACTION_PURPOSE_UNRESOLVED"
    | "ACTION_NOT_ALLOWED"
    | "ACTIVE_DEMO_SESSION_EXISTS"
    | "ACTIVE_LINE_ITEM_SOURCE_CHANGE"
    | "ACTIVE_OPTION_SELECTOR_COLLAPSE"
    | "AFFIRM_REFUND_RETRY_NOT_ALLOWED"
    | "ALREADY_EXISTS"
    | "AMOUNT_EXCEEDS_BALANCE"
    | "AMOUNT_EXCEEDS_REFUNDABLE"
    | "AMOUNT_MISMATCH"
    | "AMOUNT_NOT_ADJUSTABLE"
    | "API_KEY_ALREADY_REVOKED"
    | "API_KEY_CHANGED"
    | "API_VERSION_RETIRED"
    | "AUTHENTICATION_REQUIRED"
    | "AUTOMATIC_PAYOUT_NOT_CANCELABLE"
    | "AUTOMATIC_PROMOTIONS_DISABLED"
    | "AUTOMATIC_TAX_CONNECTION_REQUIRED"
    | "AUTOMATIC_TAX_ORIGIN_ADDRESS_REQUIRED"
    | "AUTOMATIC_TAX_UNAVAILABLE"
    | "BILLING_INTERVAL_CHANGE_NOT_ALLOWED"
    | "BUNDLE_COMPONENT_PRODUCT_NOT_ACTIVE"
    | "BUNDLE_COMPONENT_VARIANT_NOT_ACTIVE"
    | "BUNDLE_NOT_SELLABLE"
    | "CANCEL_IMMEDIATELY_NOT_ALLOWED"
    | "CAPABILITIES_IMMUTABLE"
    | "CAPABILITY_NOT_REQUESTED"
    | "CAPTURE_AMOUNT_EXCEEDS_CAPTURABLE"
    | "CATALOG_INVENTORY_RELATIONSHIP_INVALID"
    | "CATALOG_LINE_ITEM_CURRENCY_CHANGED"
    | "CATALOG_LINE_ITEM_SOURCE_CHANGED"
    | "CHECKOUT_CREDENTIAL_CHANGED"
    | "CHECKOUT_CUSTOMER_ALREADY_AUTHORIZED"
    | "CHECKOUT_CUSTOMER_CHANGED"
    | "CHECKOUT_SESSION_CURRENT_CHANGED"
    | "CHECKOUT_SESSION_EXPIRED"
    | "CHECKOUT_SESSION_MODIFIERS_READ_ONLY"
    | "CHECKOUT_SESSION_NOT_OPEN"
    | "CHECKOUT_SESSION_SCOPE_MISMATCH"
    | "CHECKOUT_SPLIT_PAYMENT_UNSUPPORTED"
    | "CHECKOUT_SURFACE_CHANGE_NOT_ALLOWED"
    | "CHECKOUT_TAX_CALCULATION_LIMIT_REACHED"
    | "CONCURRENT_MODIFICATION"
    | "CONFIRMATION_TOKEN_ALREADY_USED"
    | "CONFIRMATION_TOKEN_EXPIRED"
    | "COUNTRY_IMMUTABLE"
    | "CREDIT_NOTE_ALLOCATION_ALREADY_REVERSED"
    | "CREDIT_NOTE_ALLOCATION_EXCEEDS_BALANCE"
    | "CREDIT_NOTE_AMOUNT_EXCEEDS_CREDITABLE"
    | "CREDIT_NOTE_ISSUE_IN_PROGRESS"
    | "CREDIT_NOTE_NOT_DRAFT"
    | "CREDIT_NOTE_NOT_ISSUED"
    | "CREDIT_NOTE_REFUND_EXCEEDS_BALANCE"
    | "CUSTOMER_DELETION_ALREADY_APPROVED"
    | "CUSTOMER_DELETION_BLOCKED"
    | "CUSTOMER_DELETION_PROCESSING"
    | "CUSTOMER_DELETION_REQUEST_NOT_PENDING"
    | "CUSTOMER_DELETION_STATE_CHANGED"
    | "CUSTOMER_EMAIL_BUYER_MANAGED"
    | "CUSTOMER_EMAIL_REQUIRED"
    | "CUSTOMER_PAYMENT_TERM_UNAVAILABLE"
    | "CUSTOMER_VERIFICATION_ALREADY_CONFIRMED"
    | "CUSTOMER_VERIFICATION_ATTEMPTS_EXHAUSTED"
    | "CUSTOMER_VERIFICATION_EMAIL_CHANGED"
    | "CUSTOMER_VERIFICATION_EXPIRED"
    | "CUSTOMER_VERIFICATION_LIMIT_REACHED"
    | "CUSTOMER_VERIFICATION_NOT_CONFIRMED"
    | "CUSTOMER_VERIFICATION_NOT_OFFERED"
    | "CUSTOMER_VERIFICATION_NOT_SENT"
    | "CUSTOMER_VERIFICATION_TEXT_UNAVAILABLE"
    | "CUSTOMER_VERIFICATION_USED"
    | "CUSTOM_DOMAIN_NOT_VERIFIED"
    | "CUSTOM_DOMAIN_SUBSCRIPTION_REQUIRED"
    | "CUSTOM_DOMAIN_UNAVAILABLE"
    | "DEFAULT_ENVIRONMENT_REQUIRED"
    | "DEFAULT_PAYMENT_METHOD_CONFLICT"
    | "DEFAULT_PAYOUT_DESTINATION_INVALID"
    | "DEFAULT_PAYOUT_DESTINATION_REPLACEMENT_REQUIRED"
    | "DEFAULT_PAYOUT_DESTINATION_REQUIRED"
    | "DEFAULT_SANDBOX_CANNOT_BE_ARCHIVED"
    | "DEFAULT_SANDBOX_CANNOT_BE_RESET"
    | "DELIVERY_CALCULATION_EXPIRED"
    | "DELIVERY_COMMERCE_TREATMENT_UNSUPPORTED"
    | "DELIVERY_DEPENDENCY_REVOKED"
    | "DELIVERY_DESTINATION_CONTROLLED_BY_SELECTION"
    | "DELIVERY_DESTINATION_FROZEN"
    | "DELIVERY_ELIGIBILITY_CONTEXT_CHANGED"
    | "DELIVERY_EXTERNAL_REFERENCE_REUSED"
    | "DELIVERY_GROUPING_UNSUPPORTED"
    | "DELIVERY_OPTION_ALREADY_SELECTED"
    | "DELIVERY_OPTION_EXPIRED"
    | "DELIVERY_PICKUP_AVAILABILITY_CHANGED"
    | "DELIVERY_PICKUP_LOCATION_UNAVAILABLE"
    | "DELIVERY_PREVIEW_REQUIRES_CHECKOUT"
    | "DELIVERY_QUOTE_BASIS_INVALID"
    | "DELIVERY_QUOTE_EXPIRED"
    | "DELIVERY_QUOTE_INCOMPLETE"
    | "DELIVERY_QUOTE_INPUT_CHANGED"
    | "DELIVERY_QUOTE_REVOKED"
    | "DELIVERY_QUOTE_STALE"
    | "DELIVERY_RATE_CALLBACK_SECRET_ROTATION_OVERLAP_ACTIVE"
    | "DELIVERY_REQUOTE_REQUIRED"
    | "DELIVERY_RESOURCE_VERSION_CONFLICT"
    | "DELIVERY_SELECTION_CHANGED"
    | "DELIVERY_SELECTION_EXPIRED"
    | "DELIVERY_SELECTION_NOT_MUTABLE_AFTER_PAYMENT"
    | "DELIVERY_SELECTION_REPLACEMENT_LIMIT_REACHED"
    | "DELIVERY_STATE_CONFLICT"
    | "DELIVERY_UPDATE_NOT_ALLOWED"
    | "DELIVERY_WINDOW_EXPIRED"
    | "DEMO_SESSION_NOT_CURRENT"
    | "DEMO_SESSION_SECRET_REPLAY_EXPIRED"
    | "DEVICE_ARCHIVED"
    | "DEVICE_LOCATION_MISMATCH"
    | "DISCOUNT_NOT_REMOVABLE"
    | "DUPLICATE_CODE"
    | "EMAIL_ALREADY_LINKED"
    | "EMAIL_CHANGE_ALREADY_CONFIRMED"
    | "EMAIL_CHANGE_ATTEMPTS_EXHAUSTED"
    | "EMAIL_CHANGE_CONFIRMATION_EXPIRED"
    | "EMAIL_CHANGE_SUPERSEDED"
    | "EMAIL_PREFERENCE_LINK_INVALID"
    | "EVENT_SOLD_OUT"
    | "EVENT_TICKETS_INSUFFICIENT"
    | "EXTERNAL_PAID_ORDER_ALLOWANCE_EXHAUSTED"
    | "EXTERNAL_SERVICE_ERROR"
    | "FILE_NOT_UPLOADED"
    | "FLAT_TAX_PAYMENT_ATTRIBUTION_UNAVAILABLE"
    | "FLAT_TAX_REFUND_STATE_INVALID"
    | "FORBIDDEN"
    | "FULFILLMENT_ACTIVE_SHIPMENT_EXECUTION"
    | "FULFILLMENT_APPROVAL_REQUIRED"
    | "FULFILLMENT_CHANGED"
    | "FULFILLMENT_COMPLETED"
    | "FULFILLMENT_COMPLETED_DETAILS_REPLACEMENT"
    | "FULFILLMENT_COMPLETION_TIMESTAMP_REQUIRES_COMPLETE"
    | "FULFILLMENT_CONFIGURATION_ACTION_REQUIRED"
    | "FULFILLMENT_EVENT_DEDUPE_CONFLICT"
    | "FULFILLMENT_EVENT_SUBJECT_INVALID"
    | "FULFILLMENT_INACTIVE"
    | "FULFILLMENT_METHOD_ASSIGNMENT_UNSATISFIABLE"
    | "FULFILLMENT_METHOD_UNAVAILABLE"
    | "FULFILLMENT_PROFILE_REVISION_UNUSABLE"
    | "FULFILLMENT_PROFILE_UNAVAILABLE"
    | "FULFILLMENT_QUANTITY_EXCEEDS_AVAILABLE"
    | "FULFILLMENT_QUANTITY_EXCEEDS_LINE_ITEM"
    | "FULFILLMENT_SELECTION_REQUIRED"
    | "FULFILLMENT_SHIPMENT_NOT_VOIDABLE"
    | "FULFILLMENT_STATUS_CONFLICT"
    | "GIFT_CARD_ALLOCATION_CHANGED"
    | "GIFT_CARD_BUYER_EMAIL_REQUIRED"
    | "GIFT_CARD_CHALLENGE_REQUIRED"
    | "GIFT_CARD_FUNDING_LIMIT_EXCEEDED"
    | "GIFT_CARD_INSUFFICIENT_VALUE"
    | "GIFT_CARD_PURCHASE_CONFLICT"
    | "GIFT_CARD_PURCHASE_LIMIT_EXCEEDED"
    | "GIFT_CARD_PURCHASE_REFUND_CONFLICT"
    | "GIFT_CARD_REFUND_DESTINATION_REQUIRED"
    | "GIFT_CARD_STATE_CONFLICT"
    | "IDEMPOTENCY_KEY_IN_PROGRESS"
    | "IDEMPOTENCY_KEY_REUSED"
    | "IDEMPOTENCY_RECOVERY_REQUIRED"
    | "IDENTITY_VERIFICATION_REQUIRED"
    | "IMAGE_ASSET_NOT_ATTACHABLE"
    | "IMAGE_INGESTION_EXPIRED"
    | "IMAGE_INGESTION_IN_PROGRESS"
    | "IMAGE_INGESTION_RESTART_REQUIRED"
    | "IMAGE_NOT_ATTACHABLE"
    | "IMAGE_OWNER_NOT_MUTABLE"
    | "IMAGE_PROCESSING_CAPACITY_EXCEEDED"
    | "IMAGE_PROCESSING_FAILED"
    | "IMAGE_PROCESSING_TIMEOUT"
    | "IMAGE_REVISION_MISMATCH"
    | "IMAGE_SOURCE_TIMEOUT"
    | "IMAGE_SOURCE_UNAVAILABLE"
    | "IMAGE_STORAGE_QUOTA_EXCEEDED"
    | "INITIAL_API_KEY_ALREADY_CREATED"
    | "INSTANT_PAYOUTS_UNAVAILABLE"
    | "INSUFFICIENT_AVAILABLE_BALANCE"
    | "INSUFFICIENT_SCOPE"
    | "INTERNAL_ERROR"
    | "INVALID_CREDENTIAL"
    | "INVALID_INVOICE_LATE_FEE_AMOUNT"
    | "INVALID_MERCHANT_SELECTION"
    | "INVALID_ORDER_STATUS"
    | "INVALID_REQUEST"
    | "INVALID_STATUS_TRANSITION"
    | "INVALID_VALUE"
    | "INVENTORY_COUNT_INCOMPLETE"
    | "INVENTORY_INSUFFICIENT"
    | "INVENTORY_ITEM_INACTIVE"
    | "INVENTORY_ITEM_UNAVAILABLE"
    | "INVENTORY_LOCATION_ALLOCATION_DISABLED"
    | "INVENTORY_LOCATION_INELIGIBLE"
    | "INVENTORY_POLICY_UNAVAILABLE"
    | "INVENTORY_QUANTITY_CONFLICT"
    | "INVENTORY_RECEIPT_CONFLICT"
    | "INVENTORY_ROUTING_LOCATION_LIMIT_EXCEEDED"
    | "INVENTORY_SHORTAGE"
    | "INVENTORY_SOURCE_SEQUENCE_CHANGED"
    | "INVENTORY_TRANSFER_LINE_CONFLICT"
    | "INVENTORY_UNAVAILABLE"
    | "INVOICE_AUTOPAY_PAYMENT_METHOD_REQUIRED"
    | "INVOICE_BALANCE_CHANGED"
    | "INVOICE_CHECKOUT_REPLACEMENT_NOT_ALLOWED"
    | "INVOICE_COLLECTION_BLOCKED"
    | "INVOICE_COLLECTION_CHANGED"
    | "INVOICE_COLLECTION_MODE_UNSUPPORTED"
    | "INVOICE_ISSUE_IN_PROGRESS"
    | "INVOICE_LATE_FEE_NOT_COLLECTIBLE"
    | "INVOICE_LATE_FEE_NOT_DUE"
    | "INVOICE_LATE_FEE_POLICY_REQUIRED"
    | "INVOICE_LINK_UNAVAILABLE"
    | "INVOICE_LOCKED_ORDER_FINANCIALS"
    | "INVOICE_NOT_COLLECTIBLE"
    | "INVOICE_NOT_CREDITABLE"
    | "INVOICE_NOT_DRAFT"
    | "INVOICE_NOT_ISSUED"
    | "INVOICE_NOT_MARKABLE_UNCOLLECTIBLE"
    | "INVOICE_NOT_REVERSIBLE"
    | "INVOICE_NOT_VOIDABLE"
    | "INVOICE_PAYMENT_ALREADY_SETTLED"
    | "INVOICE_PAYMENT_ATTEMPT_ACTIVE"
    | "INVOICE_PAYMENT_NOT_APPLIED"
    | "INVOICE_PAYMENT_PROCESSING"
    | "INVOICE_PAYMENT_RESOLVING"
    | "INVOICE_PAYMENT_TERM_CURRENCY_MISMATCH"
    | "INVOICE_PAYMENT_TERM_UNAVAILABLE"
    | "INVOICE_REMINDER_CHANGED"
    | "INVOICE_SCHEDULE_ENTRY_NOT_COLLECTIBLE"
    | "INVOICE_TAX_SNAPSHOT_MISSING"
    | "INVOICE_TAX_SNAPSHOT_STALE"
    | "ITEMS_REQUIRED"
    | "LIMIT_EXCEEDED"
    | "LIMIT_REACHED"
    | "LINE_ITEM_REFUND_QUANTITY_EXCEEDS_REFUNDABLE"
    | "LIST_RESERVED"
    | "LOCATION_NOT_ACTIVE"
    | "LOCATION_UNAVAILABLE"
    | "MAX_COMPLETIONS_BELOW_COMPLETED"
    | "MAX_TOTAL_QUANTITY_BELOW_SOLD"
    | "MERCHANT_ACCOUNT_DOMAIN_NOT_VERIFIED"
    | "MERCHANT_ACCOUNT_NOT_READY"
    | "MERCHANT_ACCOUNT_SESSION_ACCOUNT_SETUP_REPAIR_REQUIRED"
    | "MERCHANT_ACCOUNT_SESSION_ACCOUNT_SETUP_REQUIRED"
    | "MERCHANT_ACCOUNT_SESSION_ACCOUNT_SETUP_UNAVAILABLE"
    | "MERCHANT_ACCOUNT_SESSION_CONTROLLER_MISMATCH"
    | "MERCHANT_ACCOUNT_SESSION_INELIGIBLE"
    | "MERCHANT_ACCOUNT_SESSION_PROVIDER_GRANT_MISMATCH"
    | "MERCHANT_ACCOUNT_SESSION_TARGETED_REMEDIATION_UNAVAILABLE"
    | "MERCHANT_ACCOUNT_SESSION_UNMAPPABLE_REQUIREMENT_ID"
    | "MERCHANT_BILLING_SUSPENDED"
    | "MERCHANT_NOT_READY"
    | "MERCHANT_ONBOARDING_REQUIRED"
    | "MERCHANT_PROCESSING_RESTRICTED"
    | "MERCHANT_SELECTION_REQUIRED"
    | "MERCHANT_UNDER_REVIEW"
    | "METHOD_NOT_ALLOWED"
    | "MODIFIER_GROUP_UNAVAILABLE"
    | "MONEY_MOVEMENT_OPERATION_BLOCKED"
    | "MONEY_MOVEMENT_PROVIDER_NOT_CONFIGURED"
    | "MULTIPLE_IDENTITIES_FOUND"
    | "NEW_ACCOUNT_PAYOUT_TERMS_ACTIVE"
    | "NOTHING_TO_REFUND"
    | "NOTHING_TO_REFUND_FOR_CHARGE"
    | "NOTHING_TO_REFUND_FOR_LINE_ITEM"
    | "NOTHING_TO_REFUND_FOR_TAX_BREAKDOWN"
    | "NOT_ALLOWED"
    | "NO_DISCOUNTABLE_BALANCE"
    | "NO_PAYMENTS_FOR_ORDER"
    | "ONBOARDING_CONTROLLER_VERSION_UNSUPPORTED"
    | "ONBOARDING_PROFILE_PROVIDER_MANAGED"
    | "OPERATION_IN_PROGRESS"
    | "ORDER_ALREADY_HAS_ACTIVE_INVOICE"
    | "ORDER_ALREADY_HAS_PAYMENTS"
    | "ORDER_ALREADY_HAS_REFUNDS"
    | "ORDER_ALREADY_PAID"
    | "ORDER_CHANGED_REFRESH_REQUIRED"
    | "ORDER_CHECKOUT_SESSION_CHANGED"
    | "ORDER_COLLECTION_ALREADY_ACTIVE"
    | "ORDER_COLLECTION_IN_PROGRESS"
    | "ORDER_CONFLICT"
    | "ORDER_CUSTOMER_ALREADY_SET"
    | "ORDER_CUSTOMER_CHECKOUT_ACTIVE"
    | "ORDER_CUSTOMER_NOT_UPDATABLE_AFTER_PAYMENT"
    | "ORDER_DELIVERY_DESTINATION_REPRICE_REQUIRED"
    | "ORDER_FINANCIAL_MUTATION_NOT_ALLOWED"
    | "ORDER_HAS_ACTIVE_PAYMENT_INTENT"
    | "ORDER_HAS_COLLECTED_MONEY"
    | "ORDER_HAS_MANUAL_PAYMENTS"
    | "ORDER_HAS_NO_LINE_ITEMS"
    | "ORDER_HAS_NO_REFUNDABLE_CHARGES"
    | "ORDER_HAS_NO_REFUNDABLE_LINE_ITEMS"
    | "ORDER_HAS_OPEN_CHECKOUT"
    | "ORDER_INVENTORY_EXCEPTION_NOT_RESOLVABLE"
    | "ORDER_INVENTORY_EXCEPTION_UNRESOLVED"
    | "ORDER_NOT_FULFILLABLE"
    | "ORDER_NOT_OPEN"
    | "ORDER_PAYMENT_ATTEMPT_ACTIVE"
    | "ORDER_PAYMENT_CUSTOMER_MISMATCH"
    | "ORDER_PAYMENT_INTENT_CREATE_IN_PROGRESS"
    | "ORDER_PAYMENT_INTENT_CREATE_REQUIRES_REVIEW"
    | "ORDER_PAYMENT_LEG_ALREADY_SETTLED"
    | "ORDER_PAYMENT_LEG_CHECKOUT_ACTIVE"
    | "ORDER_RECEIPT_EMAIL_ON_FILE"
    | "ORDER_RECEIPT_EMAIL_UNAVAILABLE"
    | "ORDER_RECEIPT_MERCHANT_MANAGED"
    | "ORDER_RECEIPT_NOT_AVAILABLE"
    | "ORDER_RECEIPT_RECIPIENT_LIMIT_REACHED"
    | "ORDER_RECONCILIATION_REQUIRED"
    | "ORDER_TAX_NOT_READY"
    | "ORDER_TAX_NOT_UPDATABLE"
    | "ORDER_TOTALS_UNAVAILABLE"
    | "ORDER_TOTAL_BELOW_NET_COLLECTED"
    | "ORGANIZATION_CYCLE"
    | "ORGANIZATION_NOT_ACTIVE"
    | "PACKAGE_CHANGED"
    | "PACKAGE_PARENT_CHANGED"
    | "PAID_LINE_ITEM_MODIFIER_CHANGE_FORBIDDEN"
    | "PAID_LINE_ITEM_PRICE_CHANGE_FORBIDDEN"
    | "PAID_LINE_ITEM_QUANTITY_CHANGE_FORBIDDEN"
    | "PAID_LINE_ITEM_QUANTITY_DECREASE_FORBIDDEN"
    | "PAID_LINE_ITEM_REMOVAL_FORBIDDEN"
    | "PAID_LINE_ITEM_TAX_CHANGE_FORBIDDEN"
    | "PAUSE_NOT_ALLOWED"
    | "PAYMENT_ACTION_WINDOW_TOO_SHORT"
    | "PAYMENT_ALREADY_SETTLED"
    | "PAYMENT_AMOUNT_CHANGED"
    | "PAYMENT_ATTEMPT_ACTIVE"
    | "PAYMENT_ATTEMPT_MISMATCH"
    | "PAYMENT_ATTEMPT_NOT_CANCELABLE"
    | "PAYMENT_ATTEMPT_NOT_RESUMABLE"
    | "PAYMENT_ATTEMPT_REQUIRES_CAPTURE"
    | "PAYMENT_CONFIRMATION_STATE_CHANGED"
    | "PAYMENT_CONFIRM_IN_PROGRESS"
    | "PAYMENT_INTENT_DISPUTED"
    | "PAYMENT_INTENT_LIMIT_REACHED"
    | "PAYMENT_IN_PROGRESS"
    | "PAYMENT_LEG_SELECTION_REQUIRED"
    | "PAYMENT_LINK_CHANGED_RETRY"
    | "PAYMENT_LINK_FULFILLMENT_UNAVAILABLE"
    | "PAYMENT_LINK_INACTIVE"
    | "PAYMENT_LINK_MAX_COMPLETIONS_REACHED"
    | "PAYMENT_LINK_RESOLUTION_CONTEXT_REFRESH_REQUIRED"
    | "PAYMENT_LINK_RESOLUTION_REPLAY_UNAVAILABLE"
    | "PAYMENT_LINK_SALES_ENDED"
    | "PAYMENT_METHOD_CUSTOMER_MISMATCH"
    | "PAYMENT_METHOD_DOMAIN_OPERATION_IN_PROGRESS"
    | "PAYMENT_METHOD_HAS_ACTIVE_SUBSCRIPTIONS"
    | "PAYMENT_METHOD_NOT_ACTIVE"
    | "PAYMENT_METHOD_NOT_READY"
    | "PAYMENT_METHOD_ON_SESSION_ONLY"
    | "PAYMENT_METHOD_REQUIRED"
    | "PAYMENT_METHOD_SAVE_EMAIL_UNAVAILABLE"
    | "PAYMENT_METHOD_SAVE_NOT_PENDING"
    | "PAYMENT_METHOD_SAVE_NOT_READY"
    | "PAYMENT_NOT_REQUIRED"
    | "PAYMENT_OPERATION_IN_PROGRESS"
    | "PAYMENT_OPTION_LIMIT_EXCEEDED"
    | "PAYMENT_OPTION_NOT_READY"
    | "PAYMENT_OPTION_UNAVAILABLE"
    | "PAYMENT_PROCESSING_NOT_ENABLED"
    | "PAYMENT_PROCESSING_UNAVAILABLE"
    | "PAYMENT_PROCESSOR_REJECTED"
    | "PAYMENT_PROCESSOR_UNAVAILABLE"
    | "PAYMENT_REVIEW_OPEN"
    | "PAYMENT_SOURCE_UNAVAILABLE"
    | "PAYOUTS_NOT_ENABLED"
    | "PAYOUT_DELAY_PROVIDER_CONTROLLED"
    | "PAYOUT_DESTINATIONS_MANAGEMENT_UNAVAILABLE"
    | "PAYOUT_FEE_NOT_DETERMINABLE"
    | "PAYOUT_NOT_CANCELABLE"
    | "PAYOUT_SETTINGS_MANAGED_EXTERNALLY"
    | "PAYOUT_SETTINGS_MANAGEMENT_UNAVAILABLE"
    | "PAYOUT_STATUS_NOT_CANCELABLE"
    | "PLAN_NOT_ACTIVE"
    | "PROCESSING_FEE_PRICING_NOT_AUTHORIZED"
    | "PROCESSOR_NOT_CONFIGURED"
    | "PROFILE_UPDATE_STATUS_UNKNOWN"
    | "PROMOTION_CODES_DISABLED"
    | "PROMOTION_DECLINED"
    | "PROMOTION_HAS_ACTIVE_SUBSCRIPTION_OFFERS"
    | "PROMOTION_NOT_REDEEMABLE"
    | "PROMOTION_SHAPE_IMMUTABLE"
    | "PROVIDER_ACCOUNT_CLEANUP_REQUIRED"
    | "QUANTITY_CHANGE_NOT_ALLOWED"
    | "QUANTITY_NOT_ADJUSTABLE"
    | "RATE_LIMIT_EXCEEDED"
    | "REFUND_ADJUSTMENT_PAYMENT_INTENT_NOT_REFUNDABLE"
    | "REFUND_ADJUSTMENT_REFUND_EXCEEDS_PAYMENT_INTENT_REFUNDABLE"
    | "REFUND_ADJUSTMENT_REFUND_EXCEEDS_REMAINING"
    | "REFUND_SUBMISSION_DEADLINE_EXPIRED"
    | "REFUND_TENDER_CAPACITY_CONFLICT"
    | "REPORT_DOWNLOAD_EXPIRED"
    | "REQUEST_BLOCKED"
    | "REQUEST_BODY_TOO_LARGE"
    | "REQUEST_CANCELED"
    | "REQUEST_TIMEOUT"
    | "REQUIRED"
    | "RESOURCE_IN_USE"
    | "RESOURCE_NOT_FOUND"
    | "RETURN_CHECKOUT_REQUIRED"
    | "RETURN_COMPLETION_BLOCKED"
    | "RETURN_DISPOSITION_QUANTITY_EXCEEDED"
    | "RETURN_FULFILLMENT_ALLOCATION_AMBIGUOUS"
    | "RETURN_INSPECTION_QUANTITY_EXCEEDED"
    | "RETURN_LINE_CANCELLATION_CONFLICT"
    | "RETURN_POLICY_CONFLICT"
    | "RETURN_RECEIPT_QUANTITY_EXCEEDED"
    | "RETURN_SELF_SERVICE_NOT_ALLOWED"
    | "RETURN_SHIPMENT_QUANTITY_EXCEEDS_AVAILABLE"
    | "RETURN_VALUE_EXCEEDED"
    | "RETURN_VERSION_CONFLICT"
    | "RISK_ACTION_NOT_SUPPORTED_FOR_PAYMENT_FLOW"
    | "RISK_ACTION_NOT_SUPPORTED_FOR_PAYMENT_OPTION"
    | "RISK_RULE_LIMIT_REACHED"
    | "ROUTE_NOT_FOUND"
    | "RULE_RESERVED"
    | "SANDBOX_ARCHIVED"
    | "SANDBOX_INACTIVE"
    | "SAVE_PAYMENT_METHOD_CODE_LIMIT_REACHED"
    | "SAVE_PAYMENT_METHOD_NOT_OFFERED"
    | "SAVE_PAYMENT_METHOD_VERIFICATION_REQUIRED"
    | "SENSITIVE_IDEMPOTENCY_RESULT_INVALID"
    | "SERVICE_UNAVAILABLE"
    | "SETUP_SOURCE_NON_ZERO_ORDER"
    | "SHIPMENT_CHANGED"
    | "SHIPMENT_PACKAGE_ITEM_QUANTITY_EXCEEDS_FULFILLMENT"
    | "SHIPMENT_PACKAGE_NOT_VOIDABLE"
    | "SKIP_LIMIT_REACHED"
    | "SKIP_NOT_ALLOWED"
    | "STANDARD_PAYOUTS_UNAVAILABLE"
    | "STANDARD_PAYOUT_REQUIRES_MANUAL_SCHEDULE"
    | "SUBSCRIPTION_DELIVERY_LINES_NOT_COMBINABLE"
    | "SUBSCRIPTION_DELIVERY_MIGRATION_IN_PROGRESS"
    | "SUBSCRIPTION_DELIVERY_MIGRATION_TARGET_UNAVAILABLE"
    | "SUBSCRIPTION_DELIVERY_PROFILE_ACTION_REQUIRED"
    | "SUBSCRIPTION_DELIVERY_PROFILE_MISSING"
    | "SUBSCRIPTION_DELIVERY_UNAVAILABLE"
    | "SUBSCRIPTION_NEXT_BILLING_AT_BEFORE_PERIOD_START"
    | "SUBSCRIPTION_NEXT_BILLING_AT_TOO_FAR"
    | "SUBSCRIPTION_OFFER_ARCHIVED"
    | "SUBSCRIPTION_OFFER_NOT_ACTIVE"
    | "SUBSCRIPTION_OFFER_PROMOTION_UNAVAILABLE"
    | "SUBSCRIPTION_OFFER_TARGET_CONFLICT"
    | "SUBSCRIPTION_PAYMENT_RETRY_IN_PROGRESS"
    | "SUBSCRIPTION_PAYMENT_RETRY_LIMIT_REACHED"
    | "SUBSCRIPTION_START_OVERRIDE_NOT_ALLOWED"
    | "SWAP_NOT_ALLOWED"
    | "TAX_BREAKDOWN_REFUND_EXCEEDS_REMAINING"
    | "TAX_CATEGORY_REQUIRED"
    | "TEST_PROCESSOR_NOT_CONFIGURED"
    | "TICKET_PREFIX_LOCKED"
    | "TIP_ALLOCATION_CAPACITY_EXCEEDED"
    | "UNKNOWN_FIELD"
    | "UNSUPPORTED_CONTENT_TYPE"
    | "UNSUPPORTED_PROCESSOR"
    | "VARIANT_NOT_SELLABLE"
    | "VERSION_CONFLICT"
    | "WEBHOOK_DELIVERY_IN_FLIGHT"
    | "WEBHOOK_ENDPOINT_NOT_ACTIVE"
    | "WEBHOOK_ENDPOINT_NOT_SUBSCRIBED"
    | "WEBHOOK_EVENT_PAYLOAD_EXPIRED"
    | "WORKLOAD_IDENTITY_LIMIT_REACHED"
    | (string & {}))
    & string;
export type SdkErrorDetails = import("./declarations/types-16.js").ErrorObject
    | import("./declarations/types-26.js").InventoryTransferActionConflictErrorObject
    | {
    "code"?: (string);
}
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
