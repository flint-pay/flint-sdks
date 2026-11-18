import type { WithResponseInfo, InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-7.js';
import type {
    DeliveryRevocation,
    DeliveryRevocationListResponse,
    DeliveryRevocationResponse,
    DeliveryRevocationsCreateParams,
    DeliveryRevocationsGetParams
} from '../declarations/types-23.js';
import type { DeliveryRevocationsListParams } from '../declarations/types-24.js';
import type { RequestOptions } from '../declarations/types-61.js';
import type { _SdkWithoutIdempotency } from '../declarations/types-79.js';
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
    DeliveryRevocationsCreateParams,
    DeliveryRevocation,
    DeliveryRevocationResponse,
    DeliveryRevocationsGetParams,
    DeliveryRevocationListResponse,
    DeliveryRevocationImpact,
    DeliveryRevocationTarget,
    DeliveryRevocationTargetLocationGeography,
    DeliveryRevocationTargetDeliveryRateCallbackSigningKey,
    DeliveryRevocationTargetDeliveryRateCallbackRevision,
    DeliveryRevocationTargetDeliveryMethodRevision
} from '../declarations/types-23.js';
export type { RequestOptions } from '../declarations/types-61.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-79.js';
export type { DeliveryRevocationsListParams } from '../declarations/types-24.js';
export type { ClientOptions } from '../declarations/types-7.js';
export type {
    CreateDeliveryRevocationRequestInput,
    CreateDeliveryRevocationTargetInput,
    CreateDeliveryRevocationTargetLocationGeographyInput,
    CreateDeliveryRevocationTargetDeliveryRateCallbackSigningKeyInput,
    CreateDeliveryRevocationTargetDeliveryRateCallbackRevisionInput,
    CreateDeliveryRevocationTargetDeliveryMethodRevisionInput
} from '../declarations/types-9.js';
export type { AuthMode } from '../declarations/types-1.js';
export type { Credentials } from '../declarations/types-15.js';
export type { ResponseMeta, ResponseWarning, ResourceReference } from '../declarations/types-62.js';
export type { NextAction, MoneyValue } from '../declarations/types-44.js';
export type { ReadinessMerchantAccountSession } from '../declarations/types-60.js';
export type { DisputesAcceptParams } from '../declarations/types-26.js';
export {
    makeCreateDeliveryRevocationRequest,
    makeCreateDeliveryRevocationTarget,
    makeCreateDeliveryRevocationTargetDeliveryMethodRevision
} from '../declarations/types-81.js';
export {
    makeCreateDeliveryRevocationTargetDeliveryRateCallbackRevision,
    makeCreateDeliveryRevocationTargetDeliveryRateCallbackSigningKey,
    makeCreateDeliveryRevocationTargetLocationGeography
} from '../declarations/types-82.js';
export { makeMoneyValue } from '../declarations/types-88.js';
export interface DeliveryRevocationsResource {
    /**
 * Permanently fences one exact delivery method revision, rate callback revision, callback HMAC
 * signing key, or recorded Location geography version. Name both the parent and the exact child.
 * Unknown targets return RESOURCE_NOT_FOUND without effects; a duplicate returns ALREADY_EXISTS
 * with the existing revocation. Issued quotes are revoked immediately. Provisional selections are
 * released before they can be used again.
 *
 * `POST /v1/delivery-revocations`
 * @see https://developers.withflintpay.com/docs/api/delivery-revocations#createDeliveryRevocation
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.deliveryRevocations.create({reason: "unsafe_configuration", target:
 * {location_geography_version: 1, location_id: "loc_01K1P6G4M7H2N8Q9R3S5T6V7WX", target_type:
 * "location_geography"}}, { idempotencyKey: idempotencyKey })
 */
    create(params: DeliveryRevocationsCreateParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<DeliveryRevocation, DeliveryRevocationResponse>>;
    /**
 * Returns one permanent delivery revocation and its estimated impact at creation time.
 *
 * `GET /v1/delivery-revocations/{delivery_revocation_id}`
 * @param delivery_revocation_id Flint delivery revocation ID. Must be a valid ID with prefix
 * drev_. Malformed IDs return 400 INVALID_REQUEST with detail INVALID_VALUE; well-formed IDs that
 * do not exist return 404 RESOURCE_NOT_FOUND.
 * @see https://developers.withflintpay.com/docs/api/delivery-revocations#getDeliveryRevocation
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.deliveryRevocations.get("drev_01KEZF7C007Q141XJ28YAAC87B")
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
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly deliveryRevocations: DeliveryRevocationsResource;
}
