export { SdkError, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
export type { Result, Metadata, ErrorKind, DiagnosticEvent, InputValue, ServerSentEvent } from '../runtime.js';
import type { InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/ClientOptions.js';
import type { Location } from '../declarations/Location.js';
import type { LocationAddressInput } from '../declarations/LocationAddressInput.js';
import type { LocationCoordinateInput } from '../declarations/LocationCoordinateInput.js';
import type { LocationInventoryRequestInput } from '../declarations/LocationInventoryRequestInput.js';
import type { LocationInventoryResponse } from '../declarations/LocationInventoryResponse.js';
import type { LocationListResponse } from '../declarations/LocationListResponse.js';
import type { LocationResponse } from '../declarations/LocationResponse.js';
import type { LocationsCreateInput } from '../declarations/LocationsCreateInput.js';
import type { LocationsCreateResponse } from '../declarations/LocationsCreateResponse.js';
import type { LocationsGetInput } from '../declarations/LocationsGetInput.js';
import type { LocationsGetResponse } from '../declarations/LocationsGetResponse.js';
import type { LocationsListInput } from '../declarations/LocationsListInput.js';
import type { LocationsListResponse } from '../declarations/LocationsListResponse.js';
import type { LocationsPublishGeographyInput } from '../declarations/LocationsPublishGeographyInput.js';
import type { LocationsPublishGeographyResponse } from '../declarations/LocationsPublishGeographyResponse.js';
import type { LocationsRemoveInput } from '../declarations/LocationsRemoveInput.js';
import type { LocationsRemoveResponse } from '../declarations/LocationsRemoveResponse.js';
import type { LocationsUpdateInput } from '../declarations/LocationsUpdateInput.js';
import type { LocationsUpdateInventoryInput } from '../declarations/LocationsUpdateInventoryInput.js';
import type { LocationsUpdateInventoryResponse } from '../declarations/LocationsUpdateInventoryResponse.js';
import type { LocationsUpdateResponse } from '../declarations/LocationsUpdateResponse.js';
import type { RequestOptions } from '../declarations/RequestOptions.js';
import type { SdkResponse } from '../declarations/SdkResponse.js';
import type { _SdkPayloadAt } from '../declarations/_SdkPayloadAt.js';
import type { _SdkWithoutIdempotency } from '../declarations/_SdkWithoutIdempotency.js';
export interface LocationsResource {
    /**
 * Create a Location. Including the inventory block also requires commerce.inventory_locations.write.
 * POST /v1/locations
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.locations.create({address: {}, name: "example", timezone: "example"}, { idempotencyKey: idempotencyKey })
 */
    create(params: (InputValue<{ "address": LocationAddressInput; "coordinate"?: LocationCoordinateInput; "coordinate_source"?: "merchant_supplied" | "geocoded" | null; "external_reference_id"?: string; "inventory"?: LocationInventoryRequestInput; "metadata"?: Record<string, string>; "name": string; "status"?: "active" | "inactive"; "timezone": string; }>) & { "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<LocationResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    createWithResponse(params: (InputValue<{ "address": LocationAddressInput; "coordinate"?: LocationCoordinateInput; "coordinate_source"?: "merchant_supplied" | "geocoded" | null; "external_reference_id"?: string; "inventory"?: LocationInventoryRequestInput; "metadata"?: Record<string, string>; "name": string; "status"?: "active" | "inactive"; "timezone": string; }>) & { "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<LocationsCreateResponse>>;
    /**
 * Retire a Location. Preserves the archived resource for direct reads.
 * DELETE /v1/locations/{location_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.locations.remove("example", {}, { idempotencyKey: idempotencyKey })
 */
    remove(location_id: InputValue<string>, params?: { "expected_version"?: InputValue<number>; "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<LocationResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    removeWithResponse(location_id: InputValue<string>, params?: { "expected_version"?: InputValue<number>; "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<LocationsRemoveResponse>>;
    /**
 * Get location.
 * GET /v1/locations/{location_id}
 * @example
 * client.locations.get("example")
 */
    get(location_id: InputValue<string>, params?: { "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<_SdkPayloadAt<LocationResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    getWithResponse(location_id: InputValue<string>, params?: { "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<LocationsGetResponse>>;
    /**
 * List Locations. Filtering by inventory_allocation_status requires commerce.inventory.read; the inventory block is omitted entirely when the caller lacks inventory read authority.
 * GET /v1/locations
 * @example
 * client.locations.list()
 */
    list(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "status"?: InputValue<"active" | "inactive" | "archived">; "inventory_allocation_status"?: InputValue<"active" | "inactive">; "external_reference_id"?: InputValue<string>; "query"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<LocationListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    listWithResponse(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "status"?: InputValue<"active" | "inactive" | "archived">; "inventory_allocation_status"?: InputValue<"active" | "inactive">; "external_reference_id"?: InputValue<string>; "query"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<LocationsListResponse>>;
    listPages(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "status"?: InputValue<"active" | "inactive" | "archived">; "inventory_allocation_status"?: InputValue<"active" | "inactive">; "external_reference_id"?: InputValue<string>; "query"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<LocationListResponse>;
    listPagesWithResponse(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "status"?: InputValue<"active" | "inactive" | "archived">; "inventory_allocation_status"?: InputValue<"active" | "inactive">; "external_reference_id"?: InputValue<string>; "query"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<SdkResponse<LocationsListResponse>>;
    listItems(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "status"?: InputValue<"active" | "inactive" | "archived">; "inventory_allocation_status"?: InputValue<"active" | "inactive">; "external_reference_id"?: InputValue<string>; "query"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<Location>;
    /**
 * Publishes the location geography atomically. Supply the complete address and timezone; omitted coordinates are cleared. This PATCH does not merge nested address fields. Requires expected_geography_revision, independently of the location version used for metadata edits.
 * PATCH /v1/locations/{location_id}/geography
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.locations.publishGeography("example", {address: {}, expected_geography_revision: "0", timezone: "example"}, { idempotencyKey: idempotencyKey })
 */
    publishGeography(location_id: InputValue<string>, params: (InputValue<{ "address": LocationAddressInput; "coordinate"?: LocationCoordinateInput; "coordinate_source"?: "merchant_supplied" | "geocoded" | null; "expected_geography_revision": string; "timezone": string; }>) & { "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<LocationResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    publishGeographyWithResponse(location_id: InputValue<string>, params: (InputValue<{ "address": LocationAddressInput; "coordinate"?: LocationCoordinateInput; "coordinate_source"?: "merchant_supplied" | "geocoded" | null; "expected_geography_revision": string; "timezone": string; }>) & { "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<LocationsPublishGeographyResponse>>;
    /**
 * Update a Location's profile or availability. Accepts status active or inactive.
 * PATCH /v1/locations/{location_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.locations.update("example", {}, { idempotencyKey: idempotencyKey })
 */
    update(location_id: InputValue<string>, params: (InputValue<{ "expected_version"?: string; "external_reference_id"?: string | null; "metadata"?: Record<string, string | null> | null; "name"?: string; "status"?: "active" | "inactive"; }>) & { "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<LocationResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    updateWithResponse(location_id: InputValue<string>, params: (InputValue<{ "expected_version"?: string; "external_reference_id"?: string | null; "metadata"?: Record<string, string | null> | null; "name"?: string; "status"?: "active" | "inactive"; }>) & { "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<LocationsUpdateResponse>>;
    /**
 * Enable or disable inventory allocation at a Location. Omit expected_inventory_revision when enabling inventory for the first time; otherwise send the current inventory_revision.
 * PATCH /v1/locations/{location_id}/inventory
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.locations.updateInventory("example", {allocation_status: "active"}, { idempotencyKey: idempotencyKey })
 */
    updateInventory(location_id: InputValue<string>, params: (InputValue<{ "allocation_status": "active" | "inactive"; "expected_inventory_revision"?: string; }>) & { "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<LocationInventoryResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    updateInventoryWithResponse(location_id: InputValue<string>, params: (InputValue<{ "allocation_status": "active" | "inactive"; "expected_inventory_revision"?: string; }>) & { "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<LocationsUpdateInventoryResponse>>;
  }
export declare class Client {

  constructor(options?: ClientOptions);

  close(): Promise<void>;
readonly locations: LocationsResource;
}
export type { LocationAddressInput } from '../declarations/LocationAddressInput.js';
export type { LocationCoordinateInput } from '../declarations/LocationCoordinateInput.js';
export type { LocationInventoryRequestInput } from '../declarations/LocationInventoryRequestInput.js';
export type { RequestOptions } from '../declarations/RequestOptions.js';
export type { _SdkPayloadAt } from '../declarations/_SdkPayloadAt.js';
export type { LocationResponse } from '../declarations/LocationResponse.js';
export type { SdkResponse } from '../declarations/SdkResponse.js';
export type { LocationsCreateResponse } from '../declarations/LocationsCreateResponse.js';
export type { LocationsRemoveResponse } from '../declarations/LocationsRemoveResponse.js';
export type { _SdkWithoutIdempotency } from '../declarations/_SdkWithoutIdempotency.js';
export type { LocationsGetResponse } from '../declarations/LocationsGetResponse.js';
export type { LocationListResponse } from '../declarations/LocationListResponse.js';
export type { LocationsListResponse } from '../declarations/LocationsListResponse.js';
export type { Location } from '../declarations/Location.js';
export type { LocationsPublishGeographyResponse } from '../declarations/LocationsPublishGeographyResponse.js';
export type { LocationsUpdateResponse } from '../declarations/LocationsUpdateResponse.js';
export type { LocationInventoryResponse } from '../declarations/LocationInventoryResponse.js';
export type { LocationsUpdateInventoryResponse } from '../declarations/LocationsUpdateInventoryResponse.js';
export type { LocationsCreateInput } from '../declarations/LocationsCreateInput.js';
export type { LocationsRemoveInput } from '../declarations/LocationsRemoveInput.js';
export type { LocationsGetInput } from '../declarations/LocationsGetInput.js';
export type { LocationsListInput } from '../declarations/LocationsListInput.js';
export type { LocationsPublishGeographyInput } from '../declarations/LocationsPublishGeographyInput.js';
export type { LocationsUpdateInput } from '../declarations/LocationsUpdateInput.js';
export type { LocationsUpdateInventoryInput } from '../declarations/LocationsUpdateInventoryInput.js';
export type { ClientOptions } from '../declarations/ClientOptions.js';
export type { AuthMode } from '../declarations/AuthMode.js';
export type { Credentials } from '../declarations/Credentials.js';
export type { ResponseMeta } from '../declarations/ResponseMeta.js';
export type { ResponseWarning } from '../declarations/ResponseWarning.js';
export type { NextAction } from '../declarations/NextAction.js';
export type { LocationInventory } from '../declarations/LocationInventory.js';
export type { CreateLocationRequestInput } from '../declarations/CreateLocationRequestInput.js';
export type { PublishLocationGeographyRequestInput } from '../declarations/PublishLocationGeographyRequestInput.js';
export type { UpdateLocationRequestInput } from '../declarations/UpdateLocationRequestInput.js';
export type { UpdateLocationInventoryRequestInput } from '../declarations/UpdateLocationInventoryRequestInput.js';
export { makeLocationResponse } from '../declarations/makeLocationResponse.js';
export { makeLocationListResponse } from '../declarations/makeLocationListResponse.js';
export { makeLocation } from '../declarations/makeLocation.js';
export { makeLocationInventoryResponse } from '../declarations/makeLocationInventoryResponse.js';
export { makeResponseMeta } from '../declarations/makeResponseMeta.js';
export { makeResponseWarning } from '../declarations/makeResponseWarning.js';
export { makeNextAction } from '../declarations/makeNextAction.js';
export { makeLocationInventory } from '../declarations/makeLocationInventory.js';
