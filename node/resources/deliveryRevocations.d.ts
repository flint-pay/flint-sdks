import type { WithResponseInfo, InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-5.js';
import type {
    DeliveryRevocation,
    DeliveryRevocationListResponse,
    DeliveryRevocationResponse,
    DeliveryRevocationsCreateParams,
    DeliveryRevocationsGetParams,
    DeliveryRevocationsListParams
} from '../declarations/types-19.js';
import type { RequestOptions } from '../declarations/types-47.js';
import type { _SdkWithoutIdempotency } from '../declarations/types-61.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
export type {
    Result,
    ResponseInfo,
    WithResponseInfo,
    DiagnosticEvent,
    InputValue,
    CredentialProvider,
    ServerSentEvent,
    SdkErrorCode,
    SdkErrorDetails,
    WorkloadIdentityOptions,
    WorkloadIdentitySource
} from '../runtime.js';
export type {
    DeliveryRevocationsGetParams,
    DeliveryRevocation,
    DeliveryRevocationResponse,
    DeliveryRevocationsListParams,
    DeliveryRevocationListResponse,
    DeliveryRevocationsCreateParams,
    DeliveryRevocationImpact,
    DeliveryRevocationTarget,
    DeliveryRevocationTargetLocationGeography,
    DeliveryRevocationTargetDeliveryRateCallbackSigningKey,
    DeliveryRevocationTargetDeliveryRateCallback,
    DeliveryRevocationTargetDeliveryRateCallbackRevision,
    DeliveryRevocationTargetDeliveryMethod,
    DeliveryRevocationTargetDeliveryMethodRevision
} from '../declarations/types-19.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-61.js';
export type { RequestOptions } from '../declarations/types-47.js';
export type { ClientOptions } from '../declarations/types-5.js';
export type { AuthMode } from '../declarations/types-0.js';
export type { Credentials } from '../declarations/types-12.js';
export type { ResponseMeta, ResponseWarning } from '../declarations/types-48.js';
export type { NextAction, MoneyValue } from '../declarations/types-35.js';
export type { ReadinessMerchantAccountSession } from '../declarations/types-46.js';
export type {
    RevokeDeliveryDependencyRequestInput,
    RevokeDeliveryDependencyTargetInput,
    RevokeDeliveryDependencyTargetLocationGeographyInput,
    RevokeDeliveryDependencyTargetDeliveryRateCallbackSigningKeyInput,
    RevokeDeliveryDependencyTargetDeliveryRateCallbackInput,
    RevokeDeliveryDependencyTargetDeliveryRateCallbackRevisionInput,
    RevokeDeliveryDependencyTargetDeliveryMethodInput,
    RevokeDeliveryDependencyTargetDeliveryMethodRevisionInput
} from '../declarations/types-51.js';
export { makeMoneyValue } from '../declarations/types-69.js';
export {
    makeRevokeDeliveryDependencyRequest,
    makeRevokeDeliveryDependencyTarget,
    makeRevokeDeliveryDependencyTargetDeliveryMethod,
    makeRevokeDeliveryDependencyTargetDeliveryMethodRevision,
    makeRevokeDeliveryDependencyTargetDeliveryRateCallback,
    makeRevokeDeliveryDependencyTargetDeliveryRateCallbackRevision,
    makeRevokeDeliveryDependencyTargetDeliveryRateCallbackSigningKey,
    makeRevokeDeliveryDependencyTargetLocationGeography
} from '../declarations/types-72.js';
export interface DeliveryRevocationsResource {
    /**
 * Returns one permanent delivery revocation and its estimated impact at creation time.
 *
 * `GET /v1/delivery-revocations/{delivery_revocation_id}`
 * @param delivery_revocation_id Flint delivery revocation ID.
 * @see https://developers.withflintpay.com/docs/api/delivery-revocations#getDeliveryRevocation
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.deliveryRevocations.get("drev_01ARZ3NDEKTSV4RRFFQ69G5FAV")
 */
    get(delivery_revocation_id: InputValue<string>, params?: DeliveryRevocationsGetParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<DeliveryRevocation, DeliveryRevocationResponse>>;
    /**
 * Returns permanent delivery revocations, newest first by created_at and delivery_revocation_id.
 * Default order: created_at descending, then delivery_revocation_id descending.
 *
 * `GET /v1/delivery-revocations`
 * @see https://developers.withflintpay.com/docs/api/delivery-revocations#listDeliveryRevocations
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.deliveryRevocations.list()
 */
    list(params?: DeliveryRevocationsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<DeliveryRevocationListResponse, DeliveryRevocationListResponse>>;
    /** Iterate pages lazily.
     * @see
     * https://developers.withflintpay.com/docs/api/delivery-revocations#listDeliveryRevocations
     */
    listPages(params?: DeliveryRevocationsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<WithResponseInfo<DeliveryRevocationListResponse, DeliveryRevocationListResponse>>;
    /** Iterate items lazily.
     * @see
     * https://developers.withflintpay.com/docs/api/delivery-revocations#listDeliveryRevocations
     */
    listItems(params?: DeliveryRevocationsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<DeliveryRevocation>;
    /**
 * Permanently fences one exact method, endpoint, signing key, revision, or Location geography
 * version. Issued quotes are revoked immediately. Current selections are released the next time
 * they are read. Stable method and callback-endpoint targets require expected_version so a
 * concurrent publication cannot broaden the revocation.
 *
 * `POST /v1/delivery-revocations`
 * @see https://developers.withflintpay.com/docs/api/delivery-revocations#revokeDeliveryDependency
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.deliveryRevocations.create({reason: "unsafe_configuration", target:
 * {location_geography_version: 1, location_id: "loc_01K1P6G4M7H2N8Q9R3S5T6V7WX", target_type:
 * "location_geography"}}, { idempotencyKey: idempotencyKey })
 */
    create(params: DeliveryRevocationsCreateParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<DeliveryRevocation, DeliveryRevocationResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly deliveryRevocations: DeliveryRevocationsResource;
}
