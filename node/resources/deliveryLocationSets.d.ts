import type { WithResponseInfo, InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-6.js';
import type {
    DeliveryLocationSet,
    DeliveryLocationSetListResponse,
    DeliveryLocationSetResponse,
    DeliveryLocationSetsCreateParams,
    DeliveryLocationSetsDeleteParams,
    DeliveryLocationSetsGetParams,
    DeliveryLocationSetsListParams,
    DeliveryLocationSetsUpdateParams
} from '../declarations/types-17.js';
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
    DeliveryLocationSetsCreateParams,
    DeliveryLocationSet,
    DeliveryLocationSetResponse,
    DeliveryLocationSetsDeleteParams,
    DeliveryLocationSetsGetParams,
    DeliveryLocationSetsListParams,
    DeliveryLocationSetListResponse,
    DeliveryLocationSetsUpdateParams,
    DeliveryLocationSetConfigurationInput,
    DeliveryLocationSetConfiguration
} from '../declarations/types-17.js';
export type { RequestOptions } from '../declarations/types-53.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-69.js';
export type { ClientOptions } from '../declarations/types-6.js';
export type { CreateDeliveryLocationSetRequestInput } from '../declarations/types-8.js';
export type { MetadataRequestInput, NextAction, MoneyValue } from '../declarations/types-38.js';
export type { AuthMode } from '../declarations/types-1.js';
export type { Credentials } from '../declarations/types-14.js';
export type { MetadataMap, MetadataPatchRequestInput, MetadataPatchRequest } from '../declarations/types-37.js';
export type { ResponseMeta, ResponseWarning, ResourceReference } from '../declarations/types-54.js';
export type { ReadinessMerchantAccountSession } from '../declarations/types-52.js';
export type { UpdateDeliveryLocationSetRequestInput } from '../declarations/types-66.js';
export type { DisputesAcceptParams } from '../declarations/types-23.js';
export { makeCreateDeliveryLocationSetRequest } from '../declarations/types-71.js';
export { makeDeliveryLocationSetConfiguration } from '../declarations/types-75.js';
export { makeMetadataPatchRequest, makeMetadataRequest, makeMoneyValue } from '../declarations/types-78.js';
export { makeUpdateDeliveryLocationSetRequest } from '../declarations/types-83.js';
export interface DeliveryLocationSetsResource {
    /**
 * Delivery location sets pin reusable sets of Locations for allocation or buyer pickup. Creation
 * publishes immutable revision 1. It starts active.
 *
 * `POST /v1/delivery-location-sets`
 * @see
 * https://developers.withflintpay.com/docs/api/delivery-configuration#createDeliveryLocationSet
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.deliveryLocationSets.create({name: "example", configuration: {location_ids: []}}, {
 * idempotencyKey: idempotencyKey })
 */
    create(params: DeliveryLocationSetsCreateParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<DeliveryLocationSet, DeliveryLocationSetResponse>>;
    /**
 * Retires the delivery location set. An active delivery method whose current revision still uses
 * the location set as its origin blocks deletion: the request returns 409 RESOURCE_IN_USE with the
 * blocking methods. Point those methods at another origin first. The retired resource remains
 * available by ID for historical records. Deleting an already archived resource returns it without
 * changing its version or repeating effects.
 *
 * `DELETE /v1/delivery-location-sets/{delivery_location_set_id}`
 * @param delivery_location_set_id Flint delivery location set ID.
 * @see
 * https://developers.withflintpay.com/docs/api/delivery-configuration#deleteDeliveryLocationSet
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.deliveryLocationSets.delete("dls_01KEZF7C00C4WWN7RYTRF55C4H", {}, { idempotencyKey:
 * idempotencyKey })
 */
    delete(delivery_location_set_id: InputValue<string>, params?: DeliveryLocationSetsDeleteParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<DeliveryLocationSet, DeliveryLocationSetResponse>>;
    /**
 * Returns the current revision and lifecycle state for one delivery location set.
 *
 * `GET /v1/delivery-location-sets/{delivery_location_set_id}`
 * @param delivery_location_set_id Flint delivery location set ID.
 * @see https://developers.withflintpay.com/docs/api/delivery-configuration#getDeliveryLocationSet
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.deliveryLocationSets.get("dls_01KEZF7C00C4WWN7RYTRF55C4H")
 */
    get(delivery_location_set_id: InputValue<string>, params?: DeliveryLocationSetsGetParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<DeliveryLocationSet, DeliveryLocationSetResponse>>;
    /**
 * Returns delivery location sets in a stable, cursor-paginated order. Archived resources are
 * excluded by default. Default order: created_at ascending, then delivery_location_set_id
 * ascending.
 *
 * `GET /v1/delivery-location-sets`
 * @see https://developers.withflintpay.com/docs/api/delivery-configuration#listDeliveryLocationSets
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.deliveryLocationSets.list()
 */
    list(params?: DeliveryLocationSetsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<DeliveryLocationSetListResponse, DeliveryLocationSetListResponse>>;
    /** Iterate pages lazily.
     * @see
     * https://developers.withflintpay.com/docs/api/delivery-configuration#listDeliveryLocationSets
     */
    listPages(params?: DeliveryLocationSetsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<WithResponseInfo<DeliveryLocationSetListResponse, DeliveryLocationSetListResponse>>;
    /** Iterate items lazily.
     * @see
     * https://developers.withflintpay.com/docs/api/delivery-configuration#listDeliveryLocationSets
     */
    listItems(params?: DeliveryLocationSetsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<DeliveryLocationSet>;
    /**
 * Sparsely updates mutable fields. A request that carries configuration publishes a new immutable
 * revision, even when its values are unchanged, and requires expected_version. Other fields
 * advance version and keep the current revision. Archived resources can't be changed; create a new
 * resource instead.
 *
 * `PATCH /v1/delivery-location-sets/{delivery_location_set_id}`
 * @param delivery_location_set_id Flint delivery location set ID.
 * @see
 * https://developers.withflintpay.com/docs/api/delivery-configuration#updateDeliveryLocationSet
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.deliveryLocationSets.update("dls_01ARZ3NDEKTSV4RRFFQ69G5FAV", {name: "Standard
 * delivery"}, { idempotencyKey: idempotencyKey })
 */
    update(delivery_location_set_id: InputValue<string>, params: DeliveryLocationSetsUpdateParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<DeliveryLocationSet, DeliveryLocationSetResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly deliveryLocationSets: DeliveryLocationSetsResource;
}
