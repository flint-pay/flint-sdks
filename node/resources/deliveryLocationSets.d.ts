export { SdkError, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
export type { Result, Metadata, ErrorKind, DiagnosticEvent, InputValue, ServerSentEvent } from '../runtime.js';
import type { InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/ClientOptions.js';
import type { DeliveryLocationSet } from '../declarations/DeliveryLocationSet.js';
import type { DeliveryLocationSetConfigurationInput } from '../declarations/DeliveryLocationSetConfigurationInput.js';
import type { DeliveryLocationSetListResponse } from '../declarations/DeliveryLocationSetListResponse.js';
import type { DeliveryLocationSetResponse } from '../declarations/DeliveryLocationSetResponse.js';
import type { DeliveryLocationSetsCreateInput } from '../declarations/DeliveryLocationSetsCreateInput.js';
import type { DeliveryLocationSetsCreateResponse } from '../declarations/DeliveryLocationSetsCreateResponse.js';
import type { DeliveryLocationSetsGetInput } from '../declarations/DeliveryLocationSetsGetInput.js';
import type { DeliveryLocationSetsGetResponse } from '../declarations/DeliveryLocationSetsGetResponse.js';
import type { DeliveryLocationSetsListInput } from '../declarations/DeliveryLocationSetsListInput.js';
import type { DeliveryLocationSetsListResponse } from '../declarations/DeliveryLocationSetsListResponse.js';
import type { DeliveryLocationSetsRemoveInput } from '../declarations/DeliveryLocationSetsRemoveInput.js';
import type { DeliveryLocationSetsRemoveResponse } from '../declarations/DeliveryLocationSetsRemoveResponse.js';
import type { DeliveryLocationSetsUpdateInput } from '../declarations/DeliveryLocationSetsUpdateInput.js';
import type { DeliveryLocationSetsUpdateResponse } from '../declarations/DeliveryLocationSetsUpdateResponse.js';
import type { RequestOptions } from '../declarations/RequestOptions.js';
import type { SdkResponse } from '../declarations/SdkResponse.js';
import type { _SdkPayloadAt } from '../declarations/_SdkPayloadAt.js';
import type { _SdkWithoutIdempotency } from '../declarations/_SdkWithoutIdempotency.js';
export interface DeliveryLocationSetsResource {
    /**
 * Delivery location sets pin reusable sets of Locations for allocation or buyer pickup. Creation publishes immutable revision 1. It starts active.
 * POST /v1/delivery-location-sets
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.deliveryLocationSets.create({name: "example", configuration: {location_ids: []}, "Idempotency-Key": idempotencyKey})
 */
    create(params: (InputValue<{ "configuration": DeliveryLocationSetConfigurationInput; "external_reference_id"?: string; "metadata"?: Record<string, string>; "name": string; }>) & { "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<DeliveryLocationSetResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    createWithResponse(params: (InputValue<{ "configuration": DeliveryLocationSetConfigurationInput; "external_reference_id"?: string; "metadata"?: Record<string, string>; "name": string; }>) & { "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<DeliveryLocationSetsCreateResponse>>;
    /**
 * Retires the delivery location set after checking current dependencies. The retired resource remains available by ID for historical records.
 * DELETE /v1/delivery-location-sets/{delivery_location_set_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.deliveryLocationSets.remove("example", {"Idempotency-Key": idempotencyKey})
 */
    remove(delivery_location_set_id: InputValue<string>, params?: { "expected_version"?: InputValue<string>; "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<DeliveryLocationSetResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    removeWithResponse(delivery_location_set_id: InputValue<string>, params?: { "expected_version"?: InputValue<string>; "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<DeliveryLocationSetsRemoveResponse>>;
    /**
 * Returns the current revision and lifecycle state for one delivery location set.
 * GET /v1/delivery-location-sets/{delivery_location_set_id}
 * @example
 * client.deliveryLocationSets.get("example", {})
 */
    get(delivery_location_set_id: InputValue<string>, params?: { "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<_SdkPayloadAt<DeliveryLocationSetResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    getWithResponse(delivery_location_set_id: InputValue<string>, params?: { "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<DeliveryLocationSetsGetResponse>>;
    /**
 * Returns delivery location sets in a stable, cursor-paginated order.
 * GET /v1/delivery-location-sets
 * @example
 * client.deliveryLocationSets.list({})
 */
    list(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "query"?: InputValue<string>; "external_reference_id"?: InputValue<string>; "status"?: InputValue<"inactive" | "active" | "archived" | "revoked">; "delivery_method_id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<DeliveryLocationSetListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    listWithResponse(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "query"?: InputValue<string>; "external_reference_id"?: InputValue<string>; "status"?: InputValue<"inactive" | "active" | "archived" | "revoked">; "delivery_method_id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<DeliveryLocationSetsListResponse>>;
    listPages(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "query"?: InputValue<string>; "external_reference_id"?: InputValue<string>; "status"?: InputValue<"inactive" | "active" | "archived" | "revoked">; "delivery_method_id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<DeliveryLocationSetListResponse>;
    listPagesWithResponse(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "query"?: InputValue<string>; "external_reference_id"?: InputValue<string>; "status"?: InputValue<"inactive" | "active" | "archived" | "revoked">; "delivery_method_id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<SdkResponse<DeliveryLocationSetsListResponse>>;
    listItems(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "query"?: InputValue<string>; "external_reference_id"?: InputValue<string>; "status"?: InputValue<"inactive" | "active" | "archived" | "revoked">; "delivery_method_id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<DeliveryLocationSet>;
    /**
 * Sparsely updates mutable fields. A change to pinned configuration publishes a new immutable revision and requires expected_version.
 * PATCH /v1/delivery-location-sets/{delivery_location_set_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.deliveryLocationSets.update("example", {name: "example", "Idempotency-Key": idempotencyKey})
 */
    update(delivery_location_set_id: InputValue<string>, params: (InputValue<({ "configuration"?: DeliveryLocationSetConfigurationInput; "expected_version"?: string; "external_reference_id"?: string | null; "metadata"?: Record<string, string | null> | null; "name"?: string; }) & (((({ "configuration"?: never })) | ({ "expected_version": unknown; }))) & (({ "name": unknown; }) | ({ "external_reference_id": unknown; }) | ({ "configuration": unknown; }) | ({ "metadata": unknown; }))>) & { "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<DeliveryLocationSetResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    updateWithResponse(delivery_location_set_id: InputValue<string>, params: (InputValue<({ "configuration"?: DeliveryLocationSetConfigurationInput; "expected_version"?: string; "external_reference_id"?: string | null; "metadata"?: Record<string, string | null> | null; "name"?: string; }) & (((({ "configuration"?: never })) | ({ "expected_version": unknown; }))) & (({ "name": unknown; }) | ({ "external_reference_id": unknown; }) | ({ "configuration": unknown; }) | ({ "metadata": unknown; }))>) & { "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<DeliveryLocationSetsUpdateResponse>>;
  }
export declare class Client {

  constructor(options?: ClientOptions);

  close(): Promise<void>;
readonly deliveryLocationSets: DeliveryLocationSetsResource;
}
export type { DeliveryLocationSetConfigurationInput } from '../declarations/DeliveryLocationSetConfigurationInput.js';
export type { RequestOptions } from '../declarations/RequestOptions.js';
export type { _SdkPayloadAt } from '../declarations/_SdkPayloadAt.js';
export type { DeliveryLocationSetResponse } from '../declarations/DeliveryLocationSetResponse.js';
export type { SdkResponse } from '../declarations/SdkResponse.js';
export type { DeliveryLocationSetsCreateResponse } from '../declarations/DeliveryLocationSetsCreateResponse.js';
export type { DeliveryLocationSetsRemoveResponse } from '../declarations/DeliveryLocationSetsRemoveResponse.js';
export type { _SdkWithoutIdempotency } from '../declarations/_SdkWithoutIdempotency.js';
export type { DeliveryLocationSetsGetResponse } from '../declarations/DeliveryLocationSetsGetResponse.js';
export type { DeliveryLocationSetListResponse } from '../declarations/DeliveryLocationSetListResponse.js';
export type { DeliveryLocationSetsListResponse } from '../declarations/DeliveryLocationSetsListResponse.js';
export type { DeliveryLocationSet } from '../declarations/DeliveryLocationSet.js';
export type { DeliveryLocationSetsUpdateResponse } from '../declarations/DeliveryLocationSetsUpdateResponse.js';
export type { DeliveryLocationSetsCreateInput } from '../declarations/DeliveryLocationSetsCreateInput.js';
export type { DeliveryLocationSetsRemoveInput } from '../declarations/DeliveryLocationSetsRemoveInput.js';
export type { DeliveryLocationSetsGetInput } from '../declarations/DeliveryLocationSetsGetInput.js';
export type { DeliveryLocationSetsListInput } from '../declarations/DeliveryLocationSetsListInput.js';
export type { DeliveryLocationSetsUpdateInput } from '../declarations/DeliveryLocationSetsUpdateInput.js';
export type { ClientOptions } from '../declarations/ClientOptions.js';
export type { AuthMode } from '../declarations/AuthMode.js';
export type { Credentials } from '../declarations/Credentials.js';
export type { ResponseMeta } from '../declarations/ResponseMeta.js';
export type { ResponseWarning } from '../declarations/ResponseWarning.js';
export type { NextAction } from '../declarations/NextAction.js';
export type { CreateDeliveryLocationSetRequestInput } from '../declarations/CreateDeliveryLocationSetRequestInput.js';
export type { UpdateDeliveryLocationSetRequestInput } from '../declarations/UpdateDeliveryLocationSetRequestInput.js';
export { makeDeliveryLocationSetResponse } from '../declarations/makeDeliveryLocationSetResponse.js';
export { makeDeliveryLocationSetListResponse } from '../declarations/makeDeliveryLocationSetListResponse.js';
export { makeDeliveryLocationSet } from '../declarations/makeDeliveryLocationSet.js';
export { makeResponseMeta } from '../declarations/makeResponseMeta.js';
export { makeResponseWarning } from '../declarations/makeResponseWarning.js';
export { makeNextAction } from '../declarations/makeNextAction.js';
