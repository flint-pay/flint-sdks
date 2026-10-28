import type { InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-4.js';
import type { CreateDeliveryZoneRequestInput } from '../declarations/types-6.js';
import type {
    DeliveryZone,
    DeliveryZoneListResponse,
    DeliveryZoneResponse,
    DeliveryZonesCreateInput,
    DeliveryZonesGetInput,
    DeliveryZonesListInput,
    DeliveryZonesRemoveInput,
    DeliveryZonesUpdateInput
} from '../declarations/types-17.js';
import type { RequestOptions } from '../declarations/types-42.js';
import type { SdkResponse } from '../declarations/types-46.js';
import type { UpdateDeliveryZoneRequestInput } from '../declarations/types-51.js';
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
export type { CreateDeliveryZoneRequestInput } from '../declarations/types-6.js';
export type { RequestOptions, ResponseMeta } from '../declarations/types-42.js';
export type {
    DeliveryZone,
    DeliveryZoneResponse,
    DeliveryZoneListResponse,
    DeliveryZonesCreateInput,
    DeliveryZonesRemoveInput,
    DeliveryZonesGetInput,
    DeliveryZonesListInput,
    DeliveryZonesUpdateInput,
    DeliveryZoneConfigurationInput,
    DeliveryZoneConfiguration
} from '../declarations/types-17.js';
export type { SdkResponse } from '../declarations/types-46.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-65.js';
export type { UpdateDeliveryZoneRequestInput } from '../declarations/types-51.js';
export type { ClientOptions } from '../declarations/types-4.js';
export type {
    DeliveryCountryConditionInput,
    DeliveryDistanceInput,
    DeliveryDistance,
    DeliveryLocationSetsListInput
} from '../declarations/types-13.js';
export type {
    DeliveryPostalCodeConditionInput,
    DeliveryPostalCodeValueInput,
    DeliveryPostalCodeCondition,
    DeliveryPostalCodeValue
} from '../declarations/types-14.js';
export type {
    DeliveryRadiusConditionInput,
    DeliveryRadiusOriginInput,
    DeliveryRadiusCondition,
    DeliveryRadiusOrigin
} from '../declarations/types-15.js';
export type { DeliveryStateConditionInput, DeliveryStateCondition } from '../declarations/types-16.js';
export type { MetadataRequestInput, MetadataMap, MetadataPatchRequestInput, MetadataPatchRequest } from '../declarations/types-32.js';
export type { AuthMode } from '../declarations/types-0.js';
export type { Credentials } from '../declarations/types-11.js';
export type { ResponseWarning } from '../declarations/types-43.js';
export type { NextAction, NextActionMerchantAccountSession, MoneyValue } from '../declarations/types-33.js';
export { makeCreateDeliveryZoneRequest } from '../declarations/types-67.js';
export {
    makeDeliveryCountryCondition,
    makeDeliveryDistance,
    makeDeliveryPostalCodeCondition,
    makeDeliveryPostalCodeValue
} from '../declarations/types-69.js';
export {
    makeDeliveryRadiusCondition,
    makeDeliveryRadiusOrigin,
    makeDeliveryStateCondition,
    makeDeliveryZoneConfiguration
} from '../declarations/types-70.js';
export { makeMetadataPatchRequest, makeMetadataRequest } from '../declarations/types-72.js';
export { makeMoneyValue } from '../declarations/types-73.js';
export { makeUpdateDeliveryZoneRequest } from '../declarations/types-77.js';
export interface DeliveryZonesResource {
    /**
 * Delivery zones define versioned geographic eligibility. Creation publishes immutable revision 1.
 * It starts active.
 * @see reference/deliveryZones.md#deliveryzonescreate
 * POST /v1/delivery-zones
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.deliveryZones.create({configuration: {country: {values: ["example"]}}, name: "Standard
 * delivery"}, { idempotencyKey: idempotencyKey })
 */
    create(params: (InputValue<CreateDeliveryZoneRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<DeliveryZone>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/deliveryZones.md#deliveryzonescreate
     */
    createWithResponse(params: (InputValue<CreateDeliveryZoneRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<DeliveryZoneResponse>>;
    /**
 * Retires the delivery zone after checking current dependencies. The retired resource remains
 * available by ID for historical records. Deleting an already archived resource returns it without
 * changing its version or repeating effects.
 * @see reference/deliveryZones.md#deliveryzonesremove
 * DELETE /v1/delivery-zones/{delivery_zone_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.deliveryZones.remove("example", {}, { idempotencyKey: idempotencyKey })
 */
    remove(delivery_zone_id: InputValue<string>, params?: {
        "expected_version"?: InputValue<`${bigint}` | bigint>;
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<DeliveryZone>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/deliveryZones.md#deliveryzonesremove
     */
    removeWithResponse(delivery_zone_id: InputValue<string>, params?: {
        "expected_version"?: InputValue<`${bigint}` | bigint>;
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<DeliveryZoneResponse>>;
    /**
 * Returns the current revision and lifecycle state for one delivery zone.
 * @see reference/deliveryZones.md#deliveryzonesget
 * GET /v1/delivery-zones/{delivery_zone_id}
 * @example
 * client.deliveryZones.get("example")
 */
    get(delivery_zone_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<DeliveryZone>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/deliveryZones.md#deliveryzonesget
     */
    getWithResponse(delivery_zone_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<SdkResponse<DeliveryZoneResponse>>;
    /**
 * Returns delivery zones in a stable, cursor-paginated order. Archived resources are excluded by
 * default. Default order: created_at ascending, then delivery_zone_id ascending.
 * @see reference/deliveryZones.md#deliveryzoneslist
 * GET /v1/delivery-zones
 * @example
 * client.deliveryZones.list()
 */
    list(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "query"?: InputValue<string>;
        "external_reference_id"?: InputValue<string>;
        "status"?: InputValue<Array<"active" | "archived">>;
        "delivery_method_id"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<DeliveryZoneListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/deliveryZones.md#deliveryzoneslist
     */
    listWithResponse(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "query"?: InputValue<string>;
        "external_reference_id"?: InputValue<string>;
        "status"?: InputValue<Array<"active" | "archived">>;
        "delivery_method_id"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<SdkResponse<DeliveryZoneListResponse>>;
    /** Iterate pages lazily.
     * @see reference/deliveryZones.md#deliveryzoneslist
     */
    listPages(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "query"?: InputValue<string>;
        "external_reference_id"?: InputValue<string>;
        "status"?: InputValue<Array<"active" | "archived">>;
        "delivery_method_id"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<DeliveryZoneListResponse>;
    /** Iterate complete page bodies with HTTP metadata.
     * @see reference/deliveryZones.md#deliveryzoneslist
     */
    listPagesWithResponse(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "query"?: InputValue<string>;
        "external_reference_id"?: InputValue<string>;
        "status"?: InputValue<Array<"active" | "archived">>;
        "delivery_method_id"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<SdkResponse<DeliveryZoneListResponse>>;
    /** Iterate items lazily.
     * @see reference/deliveryZones.md#deliveryzoneslist
     */
    listItems(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "query"?: InputValue<string>;
        "external_reference_id"?: InputValue<string>;
        "status"?: InputValue<Array<"active" | "archived">>;
        "delivery_method_id"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<DeliveryZone>;
    /**
 * Sparsely updates mutable fields. A change to pinned configuration publishes a new immutable
 * revision and requires expected_version. Archived resources can't be changed; create a new
 * resource instead.
 * @see reference/deliveryZones.md#deliveryzonesupdate
 * PATCH /v1/delivery-zones/{delivery_zone_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.deliveryZones.update("example", {name: "example"}, { idempotencyKey: idempotencyKey })
 */
    update(delivery_zone_id: InputValue<string>, params: (InputValue<UpdateDeliveryZoneRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<DeliveryZone>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/deliveryZones.md#deliveryzonesupdate
     */
    updateWithResponse(delivery_zone_id: InputValue<string>, params: (InputValue<UpdateDeliveryZoneRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<DeliveryZoneResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly deliveryZones: DeliveryZonesResource;
}
