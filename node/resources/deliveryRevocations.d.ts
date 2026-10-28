import type { InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-4.js';
import type {
    DeliveryRevocation,
    DeliveryRevocationListResponse,
    DeliveryRevocationResponse,
    DeliveryRevocationsGetInput,
    DeliveryRevocationsListInput,
    DeliveryRevocationsRevokeDeliveryDependencyInput
} from '../declarations/types-16.js';
import type { RequestOptions } from '../declarations/types-42.js';
import type { RevokeDeliveryDependencyRequestInput } from '../declarations/types-45.js';
import type { SdkResponse } from '../declarations/types-46.js';
import type { _SdkWithoutIdempotency } from '../declarations/types-65.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
export type {
    Result,
    Metadata,
    ErrorKind,
    DiagnosticEvent,
    InputValue,
    CredentialProvider,
    ServerSentEvent,
    SdkErrorCode,
    SdkErrorDetails,
    WorkloadIdentityOptions,
    WorkloadIdentitySource
} from '../runtime.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-65.js';
export type { RequestOptions, ResponseMeta } from '../declarations/types-42.js';
export type {
    DeliveryRevocation,
    DeliveryRevocationResponse,
    DeliveryRevocationListResponse,
    DeliveryRevocationsGetInput,
    DeliveryRevocationsListInput,
    DeliveryRevocationsRevokeDeliveryDependencyInput,
    DeliveryRevocationImpact,
    DeliveryRevocationTarget,
    DeliveryRevocationTargetLocationGeography,
    DeliveryRevocationTargetDeliveryRateCallbackSigningKey,
    DeliveryRevocationTargetDeliveryRateCallback,
    DeliveryRevocationTargetDeliveryRateCallbackRevision,
    DeliveryRevocationTargetDeliveryMethod,
    DeliveryRevocationTargetDeliveryMethodRevision
} from '../declarations/types-16.js';
export type { SdkResponse } from '../declarations/types-46.js';
export type {
    RevokeDeliveryDependencyRequestInput,
    RevokeDeliveryDependencyTargetInput,
    RevokeDeliveryDependencyTargetLocationGeographyInput,
    RevokeDeliveryDependencyTargetDeliveryRateCallbackSigningKeyInput,
    RevokeDeliveryDependencyTargetDeliveryRateCallbackInput,
    RevokeDeliveryDependencyTargetDeliveryRateCallbackRevisionInput,
    RevokeDeliveryDependencyTargetDeliveryMethodInput,
    RevokeDeliveryDependencyTargetDeliveryMethodRevisionInput
} from '../declarations/types-45.js';
export type { ClientOptions } from '../declarations/types-4.js';
export type { AuthMode } from '../declarations/types-0.js';
export type { Credentials } from '../declarations/types-11.js';
export type { ResponseWarning } from '../declarations/types-43.js';
export type { NextAction, NextActionMerchantAccountSession, MoneyValue } from '../declarations/types-33.js';
export { makeMoneyValue } from '../declarations/types-73.js';
export {
    makeRevokeDeliveryDependencyRequest,
    makeRevokeDeliveryDependencyTarget,
    makeRevokeDeliveryDependencyTargetDeliveryMethod,
    makeRevokeDeliveryDependencyTargetDeliveryMethodRevision,
    makeRevokeDeliveryDependencyTargetDeliveryRateCallback,
    makeRevokeDeliveryDependencyTargetDeliveryRateCallbackRevision
} from '../declarations/types-75.js';
export {
    makeRevokeDeliveryDependencyTargetDeliveryRateCallbackSigningKey,
    makeRevokeDeliveryDependencyTargetLocationGeography
} from '../declarations/types-76.js';
export interface DeliveryRevocationsResource {
    /**
 * Returns one permanent delivery revocation and its estimated impact at creation time.
 * @see reference/deliveryRevocations.md#deliveryrevocationsget
 * GET /v1/delivery-revocations/{delivery_revocation_id}
 * @example
 * client.deliveryRevocations.get("example")
 */
    get(delivery_revocation_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<DeliveryRevocation>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/deliveryRevocations.md#deliveryrevocationsget
     */
    getWithResponse(delivery_revocation_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<SdkResponse<DeliveryRevocationResponse>>;
    /**
 * Returns permanent delivery revocations, newest first by created_at and delivery_revocation_id.
 * Default order: created_at descending, then delivery_revocation_id descending.
 * @see reference/deliveryRevocations.md#deliveryrevocationslist
 * GET /v1/delivery-revocations
 * @example
 * client.deliveryRevocations.list()
 */
    list(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "target_type"?: InputValue<Array<"location_geography"
            | "delivery_rate_callback_signing_key"
            | "delivery_rate_callback"
            | "delivery_rate_callback_revision"
            | "delivery_method"
            | "delivery_method_revision">>;
        "reason"?: InputValue<Array<"unsafe_configuration"
            | "location_unavailable"
            | "credential_compromise"
            | "legal_requirement"
            | "other">>;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<DeliveryRevocationListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/deliveryRevocations.md#deliveryrevocationslist
     */
    listWithResponse(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "target_type"?: InputValue<Array<"location_geography"
            | "delivery_rate_callback_signing_key"
            | "delivery_rate_callback"
            | "delivery_rate_callback_revision"
            | "delivery_method"
            | "delivery_method_revision">>;
        "reason"?: InputValue<Array<"unsafe_configuration"
            | "location_unavailable"
            | "credential_compromise"
            | "legal_requirement"
            | "other">>;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<SdkResponse<DeliveryRevocationListResponse>>;
    /** Iterate pages lazily.
     * @see reference/deliveryRevocations.md#deliveryrevocationslist
     */
    listPages(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "target_type"?: InputValue<Array<"location_geography"
            | "delivery_rate_callback_signing_key"
            | "delivery_rate_callback"
            | "delivery_rate_callback_revision"
            | "delivery_method"
            | "delivery_method_revision">>;
        "reason"?: InputValue<Array<"unsafe_configuration"
            | "location_unavailable"
            | "credential_compromise"
            | "legal_requirement"
            | "other">>;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<DeliveryRevocationListResponse>;
    /** Iterate complete page bodies with HTTP metadata.
     * @see reference/deliveryRevocations.md#deliveryrevocationslist
     */
    listPagesWithResponse(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "target_type"?: InputValue<Array<"location_geography"
            | "delivery_rate_callback_signing_key"
            | "delivery_rate_callback"
            | "delivery_rate_callback_revision"
            | "delivery_method"
            | "delivery_method_revision">>;
        "reason"?: InputValue<Array<"unsafe_configuration"
            | "location_unavailable"
            | "credential_compromise"
            | "legal_requirement"
            | "other">>;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<SdkResponse<DeliveryRevocationListResponse>>;
    /** Iterate items lazily.
     * @see reference/deliveryRevocations.md#deliveryrevocationslist
     */
    listItems(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "target_type"?: InputValue<Array<"location_geography"
            | "delivery_rate_callback_signing_key"
            | "delivery_rate_callback"
            | "delivery_rate_callback_revision"
            | "delivery_method"
            | "delivery_method_revision">>;
        "reason"?: InputValue<Array<"unsafe_configuration"
            | "location_unavailable"
            | "credential_compromise"
            | "legal_requirement"
            | "other">>;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<DeliveryRevocation>;
    /**
 * Permanently fences one exact method, endpoint, signing key, revision, or Location geography
 * version. Issued quotes are revoked immediately. Current selections are released the next time
 * they are read. Stable method and callback-endpoint targets require expected_version so a
 * concurrent publication cannot broaden the revocation.
 * @see reference/deliveryRevocations.md#deliveryrevocationsrevokedeliverydependency
 * POST /v1/delivery-revocations
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.deliveryRevocations.revokeDeliveryDependency({reason: "unsafe_configuration", target:
 * {target_type: "location_geography", location_id: "example", location_geography_version: "1"}}, {
 * idempotencyKey: idempotencyKey })
 */
    revokeDeliveryDependency(params: (InputValue<RevokeDeliveryDependencyRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<DeliveryRevocation>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/deliveryRevocations.md#deliveryrevocationsrevokedeliverydependency
     */
    revokeDeliveryDependencyWithResponse(params: (InputValue<RevokeDeliveryDependencyRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<DeliveryRevocationResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly deliveryRevocations: DeliveryRevocationsResource;
}
