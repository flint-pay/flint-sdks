import type { WithResponseInfo, InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-5.js';
import type { Location } from '../declarations/types-32.js';
import type {
    LocationListResponse,
    LocationResponse,
    LocationsCreateParams,
    LocationsDeleteParams,
    LocationsGetParams,
    LocationsListParams,
    LocationsUpdateParams
} from '../declarations/types-33.js';
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
    LocationsCreateParams,
    LocationResponse,
    LocationsDeleteParams,
    LocationsGetParams,
    LocationsListParams,
    LocationListResponse,
    LocationsUpdateParams,
    LocationCoordinateRequestInput
} from '../declarations/types-33.js';
export type { RequestOptions } from '../declarations/types-47.js';
export type { Location, LocationCoordinate } from '../declarations/types-32.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-61.js';
export type { ClientOptions } from '../declarations/types-5.js';
export type { CreateLocationRequestInput } from '../declarations/types-8.js';
export type { AddressRequestInput, AuthMode, Address, AddressRequest } from '../declarations/types-0.js';
export type { MetadataRequestInput, MetadataMap, MetadataPatchRequestInput, MetadataPatchRequest } from '../declarations/types-34.js';
export type { Credentials } from '../declarations/types-12.js';
export type { ResponseMeta, ResponseWarning } from '../declarations/types-48.js';
export type { NextAction, MoneyValue } from '../declarations/types-35.js';
export type { ReadinessMerchantAccountSession } from '../declarations/types-46.js';
export type { UpdateLocationRequestInput } from '../declarations/types-58.js';
export type { InventoryAllocationPoliciesDeleteParams } from '../declarations/types-25.js';
export { makeAddressRequest } from '../declarations/types-61.js';
export { makeCreateLocationRequest } from '../declarations/types-64.js';
export { makeLocationCoordinateRequest, makeMetadataPatchRequest, makeMetadataRequest, makeMoneyValue } from '../declarations/types-69.js';
export { makeUpdateLocationRequest } from '../declarations/types-74.js';
export interface LocationsResource {
    /**
 * Create a Location. Sending inventory_allocation_enabled also requires
 * commerce.inventory.allocation.write. Omitted inventory_allocation_enabled defaults to false.
 * Every Location can hold stock. Idempotency is scoped to the authenticated merchant, environment,
 * and endpoint. Its fingerprint includes the canonical request body.
 *
 * `POST /v1/locations`
 * @see https://developers.withflintpay.com/docs/api/locations#createLocation
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.locations.create({address: {city: "Springfield", country: "US", line1: "100 Example
 * Street", postal_code: "62701", state: "IL"}, name: "Main Street", timezone: "America/Chicago"},
 * { idempotencyKey: idempotencyKey })
 */
    create(params: LocationsCreateParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<Location, LocationResponse>>;
    /**
 * Retire a Location. Preserves the archived resource for direct reads.
 *
 * `DELETE /v1/locations/{location_id}`
 * @param location_id Flint Location ID.
 * @see https://developers.withflintpay.com/docs/api/locations#deleteLocation
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.locations.delete("loc_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, { idempotencyKey: idempotencyKey })
 */
    delete(location_id: InputValue<string>, params?: LocationsDeleteParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<Location, LocationResponse>>;
    /**
 * Get location.
 *
 * `GET /v1/locations/{location_id}`
 * @param location_id Flint Location ID.
 * @see https://developers.withflintpay.com/docs/api/locations#getLocation
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.locations.get("loc_01ARZ3NDEKTSV4RRFFQ69G5FAV")
 */
    get(location_id: InputValue<string>, params?: LocationsGetParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<Location, LocationResponse>>;
    /**
 * List Locations. inventory_allocation_enabled is always included and can be filtered with the
 * Location read scope. The false filter includes Locations without an inventory allocation
 * configuration. Default order: location_id ascending; this key uniquely orders the results.
 *
 * `GET /v1/locations`
 * @see https://developers.withflintpay.com/docs/api/locations#listLocations
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.locations.list()
 */
    list(params?: LocationsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<LocationListResponse, LocationListResponse>>;
    /** Iterate pages lazily.
     * @see https://developers.withflintpay.com/docs/api/locations#listLocations
     */
    listPages(params?: LocationsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<WithResponseInfo<LocationListResponse, LocationListResponse>>;
    /** Iterate items lazily.
     * @see https://developers.withflintpay.com/docs/api/locations#listLocations
     */
    listItems(params?: LocationsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<Location>;
    /**
 * Update a Location's profile, availability, geography, and inventory allocation in one call.
 * Sending inventory_allocation_enabled also requires commerce.inventory.allocation.write. The
 * version advances on every change. expected_version is optional and compared with version when
 * sent. Idempotency is scoped to the authenticated merchant, environment, and endpoint. Its
 * fingerprint includes the canonical request body.
 *
 * `PATCH /v1/locations/{location_id}`
 * @param location_id Flint Location ID.
 * @see https://developers.withflintpay.com/docs/api/locations#updateLocation
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.locations.update("loc_01ARZ3NDEKTSV4RRFFQ69G5FAV", {name: "Main warehouse"}, {
 * idempotencyKey: idempotencyKey })
 */
    update(location_id: InputValue<string>, params: LocationsUpdateParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<Location, LocationResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly locations: LocationsResource;
}
