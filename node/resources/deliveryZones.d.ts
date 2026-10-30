import type { WithResponseInfo, InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-5.js';
import type { DeliveryZone } from '../declarations/types-19.js';
import type {
    DeliveryZoneListResponse,
    DeliveryZoneResponse,
    DeliveryZonesCreateParams,
    DeliveryZonesDeleteParams,
    DeliveryZonesGetParams,
    DeliveryZonesListParams,
    DeliveryZonesUpdateParams
} from '../declarations/types-20.js';
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
    DeliveryZonesCreateParams,
    DeliveryZoneResponse,
    DeliveryZonesDeleteParams,
    DeliveryZonesGetParams,
    DeliveryZonesListParams,
    DeliveryZoneListResponse,
    DeliveryZonesUpdateParams
} from '../declarations/types-20.js';
export type { RequestOptions } from '../declarations/types-47.js';
export type {
    DeliveryZone,
    DeliveryZoneConfigurationInput,
    DeliveryStateConditionInput,
    DeliveryZoneConfiguration,
    DeliveryStateCondition
} from '../declarations/types-19.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-61.js';
export type { ClientOptions } from '../declarations/types-5.js';
export type { CreateDeliveryZoneRequestInput } from '../declarations/types-7.js';
export type { DeliveryCountryConditionInput, DeliveryDistanceInput, DeliveryDistance } from '../declarations/types-14.js';
export type {
    DeliveryPostalCodeConditionInput,
    DeliveryPostalCodeValueInput,
    DeliveryPostalCodeCondition,
    DeliveryPostalCodeValue
} from '../declarations/types-16.js';
export type {
    DeliveryRadiusConditionInput,
    DeliveryRadiusOriginInput,
    DeliveryRadiusCondition,
    DeliveryRadiusOrigin
} from '../declarations/types-18.js';
export type { MetadataRequestInput, MetadataMap, MetadataPatchRequestInput, MetadataPatchRequest } from '../declarations/types-34.js';
export type { AuthMode } from '../declarations/types-0.js';
export type { Credentials } from '../declarations/types-12.js';
export type { ResponseMeta, ResponseWarning } from '../declarations/types-48.js';
export type { NextAction, MoneyValue } from '../declarations/types-35.js';
export type { ReadinessMerchantAccountSession } from '../declarations/types-46.js';
export type { UpdateDeliveryZoneRequestInput } from '../declarations/types-58.js';
export type { DeliveryLocationSetsDeleteParams } from '../declarations/types-15.js';
export { makeCreateDeliveryZoneRequest } from '../declarations/types-63.js';
export {
    makeDeliveryCountryCondition,
    makeDeliveryDistance,
    makeDeliveryPostalCodeCondition,
    makeDeliveryPostalCodeValue,
    makeDeliveryRadiusCondition,
    makeDeliveryRadiusOrigin
} from '../declarations/types-66.js';
export { makeDeliveryStateCondition, makeDeliveryZoneConfiguration } from '../declarations/types-67.js';
export { makeMetadataPatchRequest, makeMetadataRequest, makeMoneyValue } from '../declarations/types-69.js';
export { makeUpdateDeliveryZoneRequest } from '../declarations/types-73.js';
export interface DeliveryZonesResource {
    /**
 * Delivery zones define versioned geographic eligibility. Creation publishes immutable revision 1.
 * It starts active.
 *
 * `POST /v1/delivery-zones`
 * @see https://developers.withflintpay.com/docs/api/delivery-configuration#createDeliveryZone
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.deliveryZones.create({configuration: {country: {values: ["example"]}}, name: "Standard
 * delivery"}, { idempotencyKey: idempotencyKey })
 */
    create(params: DeliveryZonesCreateParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<DeliveryZone, DeliveryZoneResponse>>;
    /**
 * Retires the delivery zone after checking current dependencies. The retired resource remains
 * available by ID for historical records. Deleting an already archived resource returns it without
 * changing its version or repeating effects.
 *
 * `DELETE /v1/delivery-zones/{delivery_zone_id}`
 * @param delivery_zone_id Flint delivery zone ID.
 * @see https://developers.withflintpay.com/docs/api/delivery-configuration#deleteDeliveryZone
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.deliveryZones.delete("dzone_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, { idempotencyKey:
 * idempotencyKey })
 */
    delete(delivery_zone_id: InputValue<string>, params?: DeliveryZonesDeleteParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<DeliveryZone, DeliveryZoneResponse>>;
    /**
 * Returns the current revision and lifecycle state for one delivery zone.
 *
 * `GET /v1/delivery-zones/{delivery_zone_id}`
 * @param delivery_zone_id Flint delivery zone ID.
 * @see https://developers.withflintpay.com/docs/api/delivery-configuration#getDeliveryZone
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.deliveryZones.get("dzone_01ARZ3NDEKTSV4RRFFQ69G5FAV")
 */
    get(delivery_zone_id: InputValue<string>, params?: DeliveryZonesGetParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<DeliveryZone, DeliveryZoneResponse>>;
    /**
 * Returns delivery zones in a stable, cursor-paginated order. Archived resources are excluded by
 * default. Default order: created_at ascending, then delivery_zone_id ascending.
 *
 * `GET /v1/delivery-zones`
 * @see https://developers.withflintpay.com/docs/api/delivery-configuration#listDeliveryZones
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.deliveryZones.list()
 */
    list(params?: DeliveryZonesListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<DeliveryZoneListResponse, DeliveryZoneListResponse>>;
    /** Iterate pages lazily.
     * @see https://developers.withflintpay.com/docs/api/delivery-configuration#listDeliveryZones
     */
    listPages(params?: DeliveryZonesListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<WithResponseInfo<DeliveryZoneListResponse, DeliveryZoneListResponse>>;
    /** Iterate items lazily.
     * @see https://developers.withflintpay.com/docs/api/delivery-configuration#listDeliveryZones
     */
    listItems(params?: DeliveryZonesListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<DeliveryZone>;
    /**
 * Sparsely updates mutable fields. A change to pinned configuration publishes a new immutable
 * revision and requires expected_version. Archived resources can't be changed; create a new
 * resource instead.
 *
 * `PATCH /v1/delivery-zones/{delivery_zone_id}`
 * @param delivery_zone_id Flint delivery zone ID.
 * @see https://developers.withflintpay.com/docs/api/delivery-configuration#updateDeliveryZone
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.deliveryZones.update("dzone_01ARZ3NDEKTSV4RRFFQ69G5FAV", {name: "Standard delivery"}, {
 * idempotencyKey: idempotencyKey })
 */
    update(delivery_zone_id: InputValue<string>, params: DeliveryZonesUpdateParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<DeliveryZone, DeliveryZoneResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly deliveryZones: DeliveryZonesResource;
}
