import type { InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-4.js';
import type { CreateLocationRequestInput } from '../declarations/types-8.js';
import type { Location } from '../declarations/types-30.js';
import type {
    LocationListResponse,
    LocationResponse,
    LocationsCreateInput,
    LocationsGetInput,
    LocationsListInput,
    LocationsRemoveInput,
    LocationsUpdateInput
} from '../declarations/types-31.js';
import type { RequestOptions } from '../declarations/types-42.js';
import type { SdkResponse } from '../declarations/types-46.js';
import type { UpdateLocationRequestInput } from '../declarations/types-51.js';
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
export type { CreateLocationRequestInput } from '../declarations/types-8.js';
export type { RequestOptions, ResponseMeta } from '../declarations/types-42.js';
export type { Location, LocationCoordinate } from '../declarations/types-30.js';
export type { SdkResponse } from '../declarations/types-46.js';
export type {
    LocationResponse,
    LocationListResponse,
    LocationsCreateInput,
    LocationsRemoveInput,
    LocationsGetInput,
    LocationsListInput,
    LocationsUpdateInput,
    LocationCoordinateRequestRequestInput
} from '../declarations/types-31.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-65.js';
export type { UpdateLocationRequestInput } from '../declarations/types-51.js';
export type { ClientOptions } from '../declarations/types-4.js';
export type { AddressRequestInput, AuthMode, Address, AddressRequest } from '../declarations/types-0.js';
export type { MetadataRequestInput, MetadataMap, MetadataPatchRequestInput, MetadataPatchRequest } from '../declarations/types-32.js';
export type { Credentials } from '../declarations/types-11.js';
export type { ResponseWarning } from '../declarations/types-43.js';
export type { NextAction, NextActionMerchantAccountSession, MoneyValue } from '../declarations/types-33.js';
export { makeAddressRequest } from '../declarations/types-65.js';
export { makeCreateLocationRequest } from '../declarations/types-67.js';
export { makeLocationCoordinateRequestRequest, makeMetadataPatchRequest, makeMetadataRequest } from '../declarations/types-72.js';
export { makeMoneyValue } from '../declarations/types-73.js';
export { makeUpdateLocationRequest } from '../declarations/types-77.js';
export interface LocationsResource {
    /**
 * Create a Location. Sending inventory_allocation_enabled also requires
 * commerce.inventory.allocation.write. Omitted inventory_allocation_enabled defaults to false.
 * Every Location can hold stock. Idempotency is scoped to the authenticated merchant, environment,
 * and endpoint. Its fingerprint includes the canonical request body.
 * @see reference/locations.md#locationscreate
 * POST /v1/locations
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.locations.create({address: {city: "Springfield", country: "US", line1: "100 Example
 * Street", postal_code: "62701", state: "IL"}, name: "Main Street", timezone: "America/Chicago"},
 * { idempotencyKey: idempotencyKey })
 */
    create(params: (InputValue<CreateLocationRequestInput>) & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<Location>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/locations.md#locationscreate
     */
    createWithResponse(params: (InputValue<CreateLocationRequestInput>) & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<LocationResponse>>;
    /**
 * Retire a Location. Preserves the archived resource for direct reads.
 * @see reference/locations.md#locationsremove
 * DELETE /v1/locations/{location_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.locations.remove("example", {}, { idempotencyKey: idempotencyKey })
 */
    remove(location_id: InputValue<string>, params?: {
        "expected_version"?: InputValue<`${bigint}` | bigint>;
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<Location>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/locations.md#locationsremove
     */
    removeWithResponse(location_id: InputValue<string>, params?: {
        "expected_version"?: InputValue<`${bigint}` | bigint>;
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<LocationResponse>>;
    /**
 * Get location.
 * @see reference/locations.md#locationsget
 * GET /v1/locations/{location_id}
 * @example
 * client.locations.get("example")
 */
    get(location_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<Location>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/locations.md#locationsget
     */
    getWithResponse(location_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<SdkResponse<LocationResponse>>;
    /**
 * List Locations. inventory_allocation_enabled is always included and can be filtered with the
 * Location read scope. The false filter includes Locations without an inventory allocation
 * configuration. Default order: location_id ascending; this key uniquely orders the results.
 * @see reference/locations.md#locationslist
 * GET /v1/locations
 * @example
 * client.locations.list()
 */
    list(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "status"?: InputValue<Array<"active" | "inactive" | "archived">>;
        "inventory_allocation_enabled"?: InputValue<boolean>;
        "external_reference_id"?: InputValue<string>;
        "query"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<LocationListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/locations.md#locationslist
     */
    listWithResponse(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "status"?: InputValue<Array<"active" | "inactive" | "archived">>;
        "inventory_allocation_enabled"?: InputValue<boolean>;
        "external_reference_id"?: InputValue<string>;
        "query"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<SdkResponse<LocationListResponse>>;
    /** Iterate pages lazily.
     * @see reference/locations.md#locationslist
     */
    listPages(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "status"?: InputValue<Array<"active" | "inactive" | "archived">>;
        "inventory_allocation_enabled"?: InputValue<boolean>;
        "external_reference_id"?: InputValue<string>;
        "query"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<LocationListResponse>;
    /** Iterate complete page bodies with HTTP metadata.
     * @see reference/locations.md#locationslist
     */
    listPagesWithResponse(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "status"?: InputValue<Array<"active" | "inactive" | "archived">>;
        "inventory_allocation_enabled"?: InputValue<boolean>;
        "external_reference_id"?: InputValue<string>;
        "query"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<SdkResponse<LocationListResponse>>;
    /** Iterate items lazily.
     * @see reference/locations.md#locationslist
     */
    listItems(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "status"?: InputValue<Array<"active" | "inactive" | "archived">>;
        "inventory_allocation_enabled"?: InputValue<boolean>;
        "external_reference_id"?: InputValue<string>;
        "query"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<Location>;
    /**
 * Update a Location's profile, availability, geography, and inventory allocation in one call.
 * Sending inventory_allocation_enabled also requires commerce.inventory.allocation.write. The
 * version advances on every change. expected_version is optional and compared with version when
 * sent. Idempotency is scoped to the authenticated merchant, environment, and endpoint. Its
 * fingerprint includes the canonical request body.
 * @see reference/locations.md#locationsupdate
 * PATCH /v1/locations/{location_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.locations.update("example", {}, { idempotencyKey: idempotencyKey })
 */
    update(location_id: InputValue<string>, params: (InputValue<UpdateLocationRequestInput>) & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<Location>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/locations.md#locationsupdate
     */
    updateWithResponse(location_id: InputValue<string>, params: (InputValue<UpdateLocationRequestInput>) & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<LocationResponse>>;
    /**
 * Update a Location's profile, availability, geography, and inventory allocation in one call.
 * Sending inventory_allocation_enabled also requires commerce.inventory.allocation.write. The
 * version advances on every change. expected_version is optional and compared with version when
 * sent. Idempotency is scoped to the authenticated merchant, environment, and endpoint. Its
 * fingerprint includes the canonical request body.
 * @see reference/locations.md#locationsupdate
 * PATCH /v1/locations/{location_id}
 * @deprecated Use locations.update; HTTP behavior is unchanged.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.locations.publishGeography("example", {}, { idempotencyKey: idempotencyKey })
 */
    publishGeography(location_id: InputValue<string>, params: (InputValue<UpdateLocationRequestInput>) & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<Location>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/locations.md#locationsupdate
     */
    publishGeographyWithResponse(location_id: InputValue<string>, params: (InputValue<UpdateLocationRequestInput>) & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<LocationResponse>>;
    /**
 * Update a Location's profile, availability, geography, and inventory allocation in one call.
 * Sending inventory_allocation_enabled also requires commerce.inventory.allocation.write. The
 * version advances on every change. expected_version is optional and compared with version when
 * sent. Idempotency is scoped to the authenticated merchant, environment, and endpoint. Its
 * fingerprint includes the canonical request body.
 * @see reference/locations.md#locationsupdate
 * PATCH /v1/locations/{location_id}
 * @deprecated Use locations.update; HTTP behavior is unchanged.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.locations.updateInventory("example", {}, { idempotencyKey: idempotencyKey })
 */
    updateInventory(location_id: InputValue<string>, params: (InputValue<UpdateLocationRequestInput>) & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<Location>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/locations.md#locationsupdate
     */
    updateInventoryWithResponse(location_id: InputValue<string>, params: (InputValue<UpdateLocationRequestInput>) & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<LocationResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly locations: LocationsResource;
}
