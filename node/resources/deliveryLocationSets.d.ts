import type { InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-4.js';
import type { CreateDeliveryLocationSetRequestInput } from '../declarations/types-5.js';
import type {
    DeliveryLocationSet,
    DeliveryLocationSetListResponse,
    DeliveryLocationSetResponse,
    DeliveryLocationSetsCreateInput,
    DeliveryLocationSetsGetInput,
    DeliveryLocationSetsListInput,
    DeliveryLocationSetsRemoveInput,
    DeliveryLocationSetsUpdateInput
} from '../declarations/types-12.js';
import type { RequestOptions } from '../declarations/types-40.js';
import type { SdkResponse } from '../declarations/types-43.js';
import type { UpdateDeliveryLocationSetRequestInput } from '../declarations/types-47.js';
import type { _SdkWithoutIdempotency } from '../declarations/types-61.js';
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
    SdkErrorDetails
} from '../runtime.js';
export type { CreateDeliveryLocationSetRequestInput } from '../declarations/types-5.js';
export type { RequestOptions, ResponseMeta, ResponseWarning } from '../declarations/types-40.js';
export type {
    DeliveryLocationSet,
    DeliveryLocationSetResponse,
    DeliveryLocationSetListResponse,
    DeliveryLocationSetsCreateInput,
    DeliveryLocationSetsRemoveInput,
    DeliveryLocationSetsGetInput,
    DeliveryLocationSetsListInput,
    DeliveryLocationSetsUpdateInput,
    DeliveryLocationSetConfigurationInput,
    DeliveryLocationSetConfiguration
} from '../declarations/types-12.js';
export type { SdkResponse } from '../declarations/types-43.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-61.js';
export type { UpdateDeliveryLocationSetRequestInput } from '../declarations/types-47.js';
export type { ClientOptions } from '../declarations/types-4.js';
export type { AuthMode } from '../declarations/types-0.js';
export type { Credentials } from '../declarations/types-9.js';
export type { NextAction, NextActionMerchantAccountSession, MoneyValue } from '../declarations/types-31.js';
export { makeCreateDeliveryLocationSetRequest } from '../declarations/types-63.js';
export { makeDeliveryLocationSetConfiguration } from '../declarations/types-65.js';
export { makeMoneyValue } from '../declarations/types-68.js';
export { makeUpdateDeliveryLocationSetRequest } from '../declarations/types-72.js';
export interface DeliveryLocationSetsResource {
    /**
 * Delivery location sets pin reusable sets of Locations for allocation or buyer pickup. Creation
 * publishes immutable revision 1. It starts active.
 * @see reference/deliveryLocationSets.md#deliverylocationsetscreate
 * POST /v1/delivery-location-sets
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.deliveryLocationSets.create({name: "example", configuration: {location_ids: []}}, {
 * idempotencyKey: idempotencyKey })
 */
    create(params: (InputValue<CreateDeliveryLocationSetRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<DeliveryLocationSet>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/deliveryLocationSets.md#deliverylocationsetscreate
     */
    createWithResponse(params: (InputValue<CreateDeliveryLocationSetRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<DeliveryLocationSetResponse>>;
    /**
 * Retires the delivery location set after checking current dependencies. The retired resource
 * remains available by ID for historical records. Deleting an already archived resource returns it
 * without changing its version or repeating effects.
 * @see reference/deliveryLocationSets.md#deliverylocationsetsremove
 * DELETE /v1/delivery-location-sets/{delivery_location_set_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.deliveryLocationSets.remove("example", {}, { idempotencyKey: idempotencyKey })
 */
    remove(delivery_location_set_id: InputValue<string>, params?: {
        "expected_version"?: InputValue<`${bigint}` | bigint>;
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<DeliveryLocationSet>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/deliveryLocationSets.md#deliverylocationsetsremove
     */
    removeWithResponse(delivery_location_set_id: InputValue<string>, params?: {
        "expected_version"?: InputValue<`${bigint}` | bigint>;
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<DeliveryLocationSetResponse>>;
    /**
 * Returns the current revision and lifecycle state for one delivery location set.
 * @see reference/deliveryLocationSets.md#deliverylocationsetsget
 * GET /v1/delivery-location-sets/{delivery_location_set_id}
 * @example
 * client.deliveryLocationSets.get("example")
 */
    get(delivery_location_set_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<DeliveryLocationSet>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/deliveryLocationSets.md#deliverylocationsetsget
     */
    getWithResponse(delivery_location_set_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<DeliveryLocationSetResponse>>;
    /**
 * Returns delivery location sets in a stable, cursor-paginated order. Archived resources are
 * excluded by default.
 * @see reference/deliveryLocationSets.md#deliverylocationsetslist
 * GET /v1/delivery-location-sets
 * @example
 * client.deliveryLocationSets.list()
 */
    list(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "query"?: InputValue<string>;
        "external_reference_id"?: InputValue<string>;
        "status"?: InputValue<Array<"active" | "archived">>;
        "delivery_method_id"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<DeliveryLocationSetListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/deliveryLocationSets.md#deliverylocationsetslist
     */
    listWithResponse(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "query"?: InputValue<string>;
        "external_reference_id"?: InputValue<string>;
        "status"?: InputValue<Array<"active" | "archived">>;
        "delivery_method_id"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<DeliveryLocationSetListResponse>>;
    /** Iterate pages lazily.
     * @see reference/deliveryLocationSets.md#deliverylocationsetslist
     */
    listPages(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "query"?: InputValue<string>;
        "external_reference_id"?: InputValue<string>;
        "status"?: InputValue<Array<"active" | "archived">>;
        "delivery_method_id"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<DeliveryLocationSetListResponse>;
    /** Iterate complete page bodies with HTTP metadata.
     * @see reference/deliveryLocationSets.md#deliverylocationsetslist
     */
    listPagesWithResponse(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "query"?: InputValue<string>;
        "external_reference_id"?: InputValue<string>;
        "status"?: InputValue<Array<"active" | "archived">>;
        "delivery_method_id"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<SdkResponse<DeliveryLocationSetListResponse>>;
    /** Iterate items lazily.
     * @see reference/deliveryLocationSets.md#deliverylocationsetslist
     */
    listItems(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "query"?: InputValue<string>;
        "external_reference_id"?: InputValue<string>;
        "status"?: InputValue<Array<"active" | "archived">>;
        "delivery_method_id"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<DeliveryLocationSet>;
    /**
 * Sparsely updates mutable fields. A change to pinned configuration publishes a new immutable
 * revision and requires expected_version. Archived resources can't be changed; create a new
 * resource instead.
 * @see reference/deliveryLocationSets.md#deliverylocationsetsupdate
 * PATCH /v1/delivery-location-sets/{delivery_location_set_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.deliveryLocationSets.update("example", {name: "example"}, { idempotencyKey:
 * idempotencyKey })
 */
    update(delivery_location_set_id: InputValue<string>, params: (InputValue<UpdateDeliveryLocationSetRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<DeliveryLocationSet>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/deliveryLocationSets.md#deliverylocationsetsupdate
     */
    updateWithResponse(delivery_location_set_id: InputValue<string>, params: (InputValue<UpdateDeliveryLocationSetRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<DeliveryLocationSetResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly deliveryLocationSets: DeliveryLocationSetsResource;
}
