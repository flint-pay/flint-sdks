export { SdkError, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
export type { Result, Metadata, ErrorKind, DiagnosticEvent, InputValue, ServerSentEvent } from '../runtime.js';
import type { InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/ClientOptions.js';
import type { DeliveryCountryConditionInput } from '../declarations/DeliveryCountryConditionInput.js';
import type { DeliveryPostalCodeConditionInput } from '../declarations/DeliveryPostalCodeConditionInput.js';
import type { DeliveryRadiusConditionInput } from '../declarations/DeliveryRadiusConditionInput.js';
import type { DeliveryStateConditionInput } from '../declarations/DeliveryStateConditionInput.js';
import type { DeliveryZone } from '../declarations/DeliveryZone.js';
import type { DeliveryZoneConfigurationInput } from '../declarations/DeliveryZoneConfigurationInput.js';
import type { DeliveryZoneListResponse } from '../declarations/DeliveryZoneListResponse.js';
import type { DeliveryZoneResponse } from '../declarations/DeliveryZoneResponse.js';
import type { DeliveryZonesCreateInput } from '../declarations/DeliveryZonesCreateInput.js';
import type { DeliveryZonesCreateResponse } from '../declarations/DeliveryZonesCreateResponse.js';
import type { DeliveryZonesGetInput } from '../declarations/DeliveryZonesGetInput.js';
import type { DeliveryZonesGetResponse } from '../declarations/DeliveryZonesGetResponse.js';
import type { DeliveryZonesListInput } from '../declarations/DeliveryZonesListInput.js';
import type { DeliveryZonesListResponse } from '../declarations/DeliveryZonesListResponse.js';
import type { DeliveryZonesRemoveInput } from '../declarations/DeliveryZonesRemoveInput.js';
import type { DeliveryZonesRemoveResponse } from '../declarations/DeliveryZonesRemoveResponse.js';
import type { DeliveryZonesUpdateInput } from '../declarations/DeliveryZonesUpdateInput.js';
import type { DeliveryZonesUpdateResponse } from '../declarations/DeliveryZonesUpdateResponse.js';
import type { RequestOptions } from '../declarations/RequestOptions.js';
import type { SdkResponse } from '../declarations/SdkResponse.js';
import type { _SdkPayloadAt } from '../declarations/_SdkPayloadAt.js';
import type { _SdkWithoutIdempotency } from '../declarations/_SdkWithoutIdempotency.js';
export interface DeliveryZonesResource {
    /**
 * Delivery zones define versioned geographic eligibility. Creation publishes immutable revision 1. It starts active.
 * POST /v1/delivery-zones
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.deliveryZones.create({configuration: {country: {values: ["example"]}}, name: "Standard delivery"}, { idempotencyKey: idempotencyKey })
 */
    create(params: (InputValue<{ "configuration": ({ "all"?: Array<DeliveryZoneConfigurationInput>; "any"?: Array<DeliveryZoneConfigurationInput>; "country"?: DeliveryCountryConditionInput; "not"?: DeliveryZoneConfigurationInput; "postal_code"?: DeliveryPostalCodeConditionInput; "radius"?: DeliveryRadiusConditionInput; "state"?: DeliveryStateConditionInput; }) & (({ "all": unknown; }) | ({ "any": unknown; }) | ({ "not": unknown; }) | ({ "country": unknown; }) | ({ "state": unknown; }) | ({ "postal_code": unknown; }) | ({ "radius": unknown; })); "external_reference_id"?: string; "metadata"?: Record<string, string>; "name": string; }>) & { "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<DeliveryZoneResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    createWithResponse(params: (InputValue<{ "configuration": ({ "all"?: Array<DeliveryZoneConfigurationInput>; "any"?: Array<DeliveryZoneConfigurationInput>; "country"?: DeliveryCountryConditionInput; "not"?: DeliveryZoneConfigurationInput; "postal_code"?: DeliveryPostalCodeConditionInput; "radius"?: DeliveryRadiusConditionInput; "state"?: DeliveryStateConditionInput; }) & (({ "all": unknown; }) | ({ "any": unknown; }) | ({ "not": unknown; }) | ({ "country": unknown; }) | ({ "state": unknown; }) | ({ "postal_code": unknown; }) | ({ "radius": unknown; })); "external_reference_id"?: string; "metadata"?: Record<string, string>; "name": string; }>) & { "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<DeliveryZonesCreateResponse>>;
    /**
 * Retires the delivery zone after checking current dependencies. The retired resource remains available by ID for historical records.
 * DELETE /v1/delivery-zones/{delivery_zone_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.deliveryZones.remove("example", {}, { idempotencyKey: idempotencyKey })
 */
    remove(delivery_zone_id: InputValue<string>, params?: { "expected_version"?: InputValue<string>; "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<DeliveryZoneResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    removeWithResponse(delivery_zone_id: InputValue<string>, params?: { "expected_version"?: InputValue<string>; "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<DeliveryZonesRemoveResponse>>;
    /**
 * Returns the current revision and lifecycle state for one delivery zone.
 * GET /v1/delivery-zones/{delivery_zone_id}
 * @example
 * client.deliveryZones.get("example")
 */
    get(delivery_zone_id: InputValue<string>, params?: { "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<_SdkPayloadAt<DeliveryZoneResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    getWithResponse(delivery_zone_id: InputValue<string>, params?: { "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<DeliveryZonesGetResponse>>;
    /**
 * Returns delivery zones in a stable, cursor-paginated order.
 * GET /v1/delivery-zones
 * @example
 * client.deliveryZones.list()
 */
    list(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "query"?: InputValue<string>; "external_reference_id"?: InputValue<string>; "status"?: InputValue<"inactive" | "active" | "archived" | "revoked">; "delivery_method_id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<DeliveryZoneListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    listWithResponse(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "query"?: InputValue<string>; "external_reference_id"?: InputValue<string>; "status"?: InputValue<"inactive" | "active" | "archived" | "revoked">; "delivery_method_id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<DeliveryZonesListResponse>>;
    listPages(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "query"?: InputValue<string>; "external_reference_id"?: InputValue<string>; "status"?: InputValue<"inactive" | "active" | "archived" | "revoked">; "delivery_method_id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<DeliveryZoneListResponse>;
    listPagesWithResponse(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "query"?: InputValue<string>; "external_reference_id"?: InputValue<string>; "status"?: InputValue<"inactive" | "active" | "archived" | "revoked">; "delivery_method_id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<SdkResponse<DeliveryZonesListResponse>>;
    listItems(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "query"?: InputValue<string>; "external_reference_id"?: InputValue<string>; "status"?: InputValue<"inactive" | "active" | "archived" | "revoked">; "delivery_method_id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<DeliveryZone>;
    /**
 * Sparsely updates mutable fields. A change to pinned configuration publishes a new immutable revision and requires expected_version.
 * PATCH /v1/delivery-zones/{delivery_zone_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.deliveryZones.update("example", {name: "example"}, { idempotencyKey: idempotencyKey })
 */
    update(delivery_zone_id: InputValue<string>, params: (InputValue<({ "configuration"?: ({ "all"?: Array<DeliveryZoneConfigurationInput>; "any"?: Array<DeliveryZoneConfigurationInput>; "country"?: DeliveryCountryConditionInput; "not"?: DeliveryZoneConfigurationInput; "postal_code"?: DeliveryPostalCodeConditionInput; "radius"?: DeliveryRadiusConditionInput; "state"?: DeliveryStateConditionInput; }) & (({ "all": unknown; }) | ({ "any": unknown; }) | ({ "not": unknown; }) | ({ "country": unknown; }) | ({ "state": unknown; }) | ({ "postal_code": unknown; }) | ({ "radius": unknown; })); "expected_version"?: string; "external_reference_id"?: string | null; "metadata"?: Record<string, string | null> | null; "name"?: string; }) & (((({ "configuration"?: never })) | ({ "expected_version": unknown; }))) & (({ "name": unknown; }) | ({ "external_reference_id": unknown; }) | ({ "configuration": unknown; }) | ({ "metadata": unknown; }))>) & { "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<DeliveryZoneResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    updateWithResponse(delivery_zone_id: InputValue<string>, params: (InputValue<({ "configuration"?: ({ "all"?: Array<DeliveryZoneConfigurationInput>; "any"?: Array<DeliveryZoneConfigurationInput>; "country"?: DeliveryCountryConditionInput; "not"?: DeliveryZoneConfigurationInput; "postal_code"?: DeliveryPostalCodeConditionInput; "radius"?: DeliveryRadiusConditionInput; "state"?: DeliveryStateConditionInput; }) & (({ "all": unknown; }) | ({ "any": unknown; }) | ({ "not": unknown; }) | ({ "country": unknown; }) | ({ "state": unknown; }) | ({ "postal_code": unknown; }) | ({ "radius": unknown; })); "expected_version"?: string; "external_reference_id"?: string | null; "metadata"?: Record<string, string | null> | null; "name"?: string; }) & (((({ "configuration"?: never })) | ({ "expected_version": unknown; }))) & (({ "name": unknown; }) | ({ "external_reference_id": unknown; }) | ({ "configuration": unknown; }) | ({ "metadata": unknown; }))>) & { "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<DeliveryZonesUpdateResponse>>;
  }
export declare class Client {

  constructor(options?: ClientOptions);

  close(): Promise<void>;
readonly deliveryZones: DeliveryZonesResource;
}
export type { DeliveryZoneConfigurationInput } from '../declarations/DeliveryZoneConfigurationInput.js';
export type { DeliveryCountryConditionInput } from '../declarations/DeliveryCountryConditionInput.js';
export type { DeliveryPostalCodeConditionInput } from '../declarations/DeliveryPostalCodeConditionInput.js';
export type { DeliveryRadiusConditionInput } from '../declarations/DeliveryRadiusConditionInput.js';
export type { DeliveryStateConditionInput } from '../declarations/DeliveryStateConditionInput.js';
export type { RequestOptions } from '../declarations/RequestOptions.js';
export type { _SdkPayloadAt } from '../declarations/_SdkPayloadAt.js';
export type { DeliveryZoneResponse } from '../declarations/DeliveryZoneResponse.js';
export type { SdkResponse } from '../declarations/SdkResponse.js';
export type { DeliveryZonesCreateResponse } from '../declarations/DeliveryZonesCreateResponse.js';
export type { DeliveryZonesRemoveResponse } from '../declarations/DeliveryZonesRemoveResponse.js';
export type { _SdkWithoutIdempotency } from '../declarations/_SdkWithoutIdempotency.js';
export type { DeliveryZonesGetResponse } from '../declarations/DeliveryZonesGetResponse.js';
export type { DeliveryZoneListResponse } from '../declarations/DeliveryZoneListResponse.js';
export type { DeliveryZonesListResponse } from '../declarations/DeliveryZonesListResponse.js';
export type { DeliveryZone } from '../declarations/DeliveryZone.js';
export type { DeliveryZonesUpdateResponse } from '../declarations/DeliveryZonesUpdateResponse.js';
export type { DeliveryZonesCreateInput } from '../declarations/DeliveryZonesCreateInput.js';
export type { DeliveryZonesRemoveInput } from '../declarations/DeliveryZonesRemoveInput.js';
export type { DeliveryZonesGetInput } from '../declarations/DeliveryZonesGetInput.js';
export type { DeliveryZonesListInput } from '../declarations/DeliveryZonesListInput.js';
export type { DeliveryZonesUpdateInput } from '../declarations/DeliveryZonesUpdateInput.js';
export type { ClientOptions } from '../declarations/ClientOptions.js';
export type { DeliveryPostalCodeValueInput } from '../declarations/DeliveryPostalCodeValueInput.js';
export type { DeliveryDistanceInput } from '../declarations/DeliveryDistanceInput.js';
export type { DeliveryRadiusOriginInput } from '../declarations/DeliveryRadiusOriginInput.js';
export type { AuthMode } from '../declarations/AuthMode.js';
export type { Credentials } from '../declarations/Credentials.js';
export type { ResponseMeta } from '../declarations/ResponseMeta.js';
export type { ResponseWarning } from '../declarations/ResponseWarning.js';
export type { NextAction } from '../declarations/NextAction.js';
export type { DeliveryZoneConfiguration } from '../declarations/DeliveryZoneConfiguration.js';
export type { DeliveryCountryCondition } from '../declarations/DeliveryCountryCondition.js';
export type { DeliveryPostalCodeCondition } from '../declarations/DeliveryPostalCodeCondition.js';
export type { DeliveryPostalCodeValue } from '../declarations/DeliveryPostalCodeValue.js';
export type { DeliveryRadiusCondition } from '../declarations/DeliveryRadiusCondition.js';
export type { DeliveryDistance } from '../declarations/DeliveryDistance.js';
export type { DeliveryRadiusOrigin } from '../declarations/DeliveryRadiusOrigin.js';
export type { DeliveryStateCondition } from '../declarations/DeliveryStateCondition.js';
export type { CreateDeliveryZoneRequestInput } from '../declarations/CreateDeliveryZoneRequestInput.js';
export type { UpdateDeliveryZoneRequestInput } from '../declarations/UpdateDeliveryZoneRequestInput.js';
export { makeDeliveryZoneResponse } from '../declarations/makeDeliveryZoneResponse.js';
export { makeDeliveryZoneListResponse } from '../declarations/makeDeliveryZoneListResponse.js';
export { makeDeliveryZone } from '../declarations/makeDeliveryZone.js';
export { makeResponseMeta } from '../declarations/makeResponseMeta.js';
export { makeResponseWarning } from '../declarations/makeResponseWarning.js';
export { makeNextAction } from '../declarations/makeNextAction.js';
export { makeDeliveryZoneConfiguration } from '../declarations/makeDeliveryZoneConfiguration.js';
export { makeDeliveryCountryCondition } from '../declarations/makeDeliveryCountryCondition.js';
export { makeDeliveryPostalCodeCondition } from '../declarations/makeDeliveryPostalCodeCondition.js';
export { makeDeliveryPostalCodeValue } from '../declarations/makeDeliveryPostalCodeValue.js';
export { makeDeliveryRadiusCondition } from '../declarations/makeDeliveryRadiusCondition.js';
export { makeDeliveryDistance } from '../declarations/makeDeliveryDistance.js';
export { makeDeliveryRadiusOrigin } from '../declarations/makeDeliveryRadiusOrigin.js';
export { makeDeliveryStateCondition } from '../declarations/makeDeliveryStateCondition.js';
