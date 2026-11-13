import type { WithResponseInfo, InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-6.js';
import type {
    DeliveryZone,
    DeliveryZoneListResponse,
    DeliveryZoneResponse,
    DeliveryZonesCreateParams,
    DeliveryZonesDeleteParams,
    DeliveryZonesGetParams,
    DeliveryZonesListParams,
    DeliveryZonesUpdateParams
} from '../declarations/types-22.js';
import type { RequestOptions } from '../declarations/types-53.js';
import type { _SdkWithoutIdempotency } from '../declarations/types-69.js';
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
    DeliveryZone,
    DeliveryZoneResponse,
    DeliveryZonesDeleteParams,
    DeliveryZonesGetParams,
    DeliveryZonesListParams,
    DeliveryZoneListResponse,
    DeliveryZonesUpdateParams,
    DeliveryZoneConfigurationRequestInput,
    DeliveryStateConditionRequestInput,
    DeliveryZoneConfiguration,
    DeliveryStateCondition
} from '../declarations/types-22.js';
export type { RequestOptions } from '../declarations/types-53.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-69.js';
export type { ClientOptions } from '../declarations/types-6.js';
export type { CreateDeliveryZoneRequestInput } from '../declarations/types-8.js';
export type {
    DeliveryCountryConditionRequestInput,
    DeliveryDistanceRequestInput,
    DeliveryDistance,
    DeliveryLocationSetsDeleteParams
} from '../declarations/types-17.js';
export type {
    DeliveryPostalCodeConditionRequestInput,
    DeliveryPostalCodeValueRequestInput,
    DeliveryPostalCodeValue
} from '../declarations/types-19.js';
export type {
    DeliveryRadiusConditionRequestInput,
    DeliveryRadiusOriginInput,
    DeliveryRadiusCondition,
    DeliveryRadiusOrigin
} from '../declarations/types-20.js';
export type { MetadataRequestInput, NextAction, MoneyValue } from '../declarations/types-38.js';
export type { AuthMode } from '../declarations/types-1.js';
export type { Credentials } from '../declarations/types-14.js';
export type { DeliveryPostalCodeCondition } from '../declarations/types-18.js';
export type { MetadataMap, MetadataPatchRequestInput, MetadataPatchRequest } from '../declarations/types-37.js';
export type { ResponseMeta, ResponseWarning, ResourceReference } from '../declarations/types-54.js';
export type { ReadinessMerchantAccountSession } from '../declarations/types-52.js';
export type { UpdateDeliveryZoneRequestInput } from '../declarations/types-66.js';
export type { DisputesAcceptParams } from '../declarations/types-23.js';
export { makeCreateDeliveryZoneRequest } from '../declarations/types-72.js';
export {
    makeDeliveryCountryConditionRequest,
    makeDeliveryDistanceRequest,
    makeDeliveryPostalCodeConditionRequest,
    makeDeliveryPostalCodeValueRequest,
    makeDeliveryRadiusConditionRequest,
    makeDeliveryRadiusOrigin
} from '../declarations/types-75.js';
export { makeDeliveryStateConditionRequest, makeDeliveryZoneConfigurationRequest } from '../declarations/types-76.js';
export { makeMetadataPatchRequest, makeMetadataRequest, makeMoneyValue } from '../declarations/types-78.js';
export { makeUpdateDeliveryZoneRequest } from '../declarations/types-83.js';
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
 * Retires the delivery zone. An active delivery method whose current revision still uses the zone
 * blocks deletion: the request returns 409 RESOURCE_IN_USE with the blocking methods. Remove the
 * zone from those methods first. The retired resource remains available by ID for historical
 * records. Deleting an already archived resource returns it without changing its version or
 * repeating effects.
 *
 * `DELETE /v1/delivery-zones/{delivery_zone_id}`
 * @param delivery_zone_id Flint delivery zone ID.
 * @see https://developers.withflintpay.com/docs/api/delivery-configuration#deleteDeliveryZone
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.deliveryZones.delete("dzone_01KEZF7C005RY7KGCN4M2CH5WP", {}, { idempotencyKey:
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
 * client.deliveryZones.get("dzone_01KEZF7C005RY7KGCN4M2CH5WP")
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
 * Sparsely updates mutable fields. A request that carries configuration publishes a new immutable
 * revision, even when its values are unchanged, and requires expected_version. Other fields
 * advance version and keep the current revision. Archived resources can't be changed; create a new
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
