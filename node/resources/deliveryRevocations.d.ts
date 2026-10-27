import type { InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-4.js';
import type {
    DeliveryRevocation,
    DeliveryRevocationResponse,
    DeliveryRevocationsGetInput,
    DeliveryRevocationsRevokeDeliveryDependencyInput
} from '../declarations/types-14.js';
import type { RequestOptions } from '../declarations/types-40.js';
import type { RevokeDeliveryDependencyRequestInput } from '../declarations/types-43.js';
import type { SdkResponse } from '../declarations/types-44.js';
import type { _SdkWithoutIdempotency } from '../declarations/types-62.js';
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
    SdkErrorDetails
} from '../runtime.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-62.js';
export type { RequestOptions, ResponseMeta, ResponseWarning } from '../declarations/types-40.js';
export type {
    DeliveryRevocation,
    DeliveryRevocationResponse,
    DeliveryRevocationsGetInput,
    DeliveryRevocationsRevokeDeliveryDependencyInput,
    DeliveryRevocationImpact,
    DeliveryRevocationTarget,
    DeliveryRevocationTargetLocationGeography,
    DeliveryRevocationTargetDeliveryRateCallbackSigningKey,
    DeliveryRevocationTargetDeliveryRateCallback,
    DeliveryRevocationTargetDeliveryRateCallbackRevision,
    DeliveryRevocationTargetDeliveryMethod,
    DeliveryRevocationTargetDeliveryMethodRevision
} from '../declarations/types-14.js';
export type { SdkResponse } from '../declarations/types-44.js';
export type {
    RevokeDeliveryDependencyRequestInput,
    RevokeDeliveryDependencyTargetInput,
    RevokeDeliveryDependencyTargetLocationGeographyInput,
    RevokeDeliveryDependencyTargetDeliveryRateCallbackSigningKeyInput,
    RevokeDeliveryDependencyTargetDeliveryRateCallbackInput,
    RevokeDeliveryDependencyTargetDeliveryRateCallbackRevisionInput,
    RevokeDeliveryDependencyTargetDeliveryMethodInput,
    RevokeDeliveryDependencyTargetDeliveryMethodRevisionInput
} from '../declarations/types-43.js';
export type { ClientOptions } from '../declarations/types-4.js';
export type { AuthMode } from '../declarations/types-0.js';
export type { Credentials } from '../declarations/types-9.js';
export type { NextAction, NextActionMerchantAccountSession, MoneyValue } from '../declarations/types-31.js';
export { makeMoneyValue } from '../declarations/types-68.js';
export {
    makeRevokeDeliveryDependencyRequest,
    makeRevokeDeliveryDependencyTarget,
    makeRevokeDeliveryDependencyTargetDeliveryMethod,
    makeRevokeDeliveryDependencyTargetDeliveryMethodRevision,
    makeRevokeDeliveryDependencyTargetDeliveryRateCallback,
    makeRevokeDeliveryDependencyTargetDeliveryRateCallbackRevision,
    makeRevokeDeliveryDependencyTargetDeliveryRateCallbackSigningKey,
    makeRevokeDeliveryDependencyTargetLocationGeography
} from '../declarations/types-71.js';
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
