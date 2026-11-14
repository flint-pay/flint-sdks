import type { WithResponseInfo, InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-6.js';
import type {
    Location,
    LocationListResponse,
    LocationResponse,
    LocationsCreateParams,
    LocationsDeleteParams,
    LocationsGetParams,
    LocationsListParams,
    LocationsUpdateParams
} from '../declarations/types-35.js';
import type { RequestOptions } from '../declarations/types-54.js';
import type { _SdkWithoutIdempotency } from '../declarations/types-70.js';
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
    Location,
    LocationResponse,
    LocationsDeleteParams,
    LocationsGetParams,
    LocationsListParams,
    LocationListResponse,
    LocationsUpdateParams,
    LocationCoordinateRequestInput,
    LocationCoordinate
} from '../declarations/types-35.js';
export type { RequestOptions, ResponseMeta, ResponseWarning, ResourceReference } from '../declarations/types-54.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-70.js';
export type { ClientOptions } from '../declarations/types-6.js';
export type { CreateLocationRequestInput } from '../declarations/types-10.js';
export type { AddressRequestInput, Address, AddressRequest } from '../declarations/types-0.js';
export type { MetadataRequestInput, MetadataMap, MetadataPatchRequestInput, MetadataPatchRequest } from '../declarations/types-38.js';
export type { AuthMode } from '../declarations/types-1.js';
export type { Credentials } from '../declarations/types-14.js';
export type { NextAction, MoneyValue } from '../declarations/types-39.js';
export type { ReadinessMerchantAccountSession } from '../declarations/types-52.js';
export type { UpdateLocationRequestInput } from '../declarations/types-67.js';
export type { InventoryAllocationPoliciesDeleteParams } from '../declarations/types-28.js';
export type { DisputesAcceptParams } from '../declarations/types-24.js';
export { makeAddressRequest } from '../declarations/types-70.js';
export { makeCreateLocationRequest } from '../declarations/types-73.js';
export { makeLocationCoordinateRequest } from '../declarations/types-78.js';
export { makeMetadataPatchRequest, makeMetadataRequest, makeMoneyValue } from '../declarations/types-79.js';
export { makeUpdateLocationRequest } from '../declarations/types-84.js';
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
 * Retire a Location. Preserves the archived resource for direct reads. Repeating DELETE returns
 * the archived Location without changing its version or timestamps. An explicitly supplied
 * expected_version must still match.
 *
 * `DELETE /v1/locations/{location_id}`
 * @param location_id Flint Location ID.
 * @see https://developers.withflintpay.com/docs/api/locations#deleteLocation
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.locations.delete("loc_01KEZF7C00CMHRRYA3MV996JB2", {}, { idempotencyKey: idempotencyKey })
 */
    delete(location_id: InputValue<string>, params?: LocationsDeleteParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<Location, LocationResponse>>;
    /**
 * Returns one location by ID, with its address, timezone, status, and whether it accepts inventory
 * allocation. Archived locations remain readable by ID.
 *
 * `GET /v1/locations/{location_id}`
 * @param location_id Flint Location ID.
 * @see https://developers.withflintpay.com/docs/api/locations#getLocation
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.locations.get("loc_01KEZF7C00CMHRRYA3MV996JB2")
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
 * fingerprint includes the canonical request body. An archived Location cannot be changed: the
 * request returns 409 ACTION_NOT_ALLOWED with reason archived and current_status archived.
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
