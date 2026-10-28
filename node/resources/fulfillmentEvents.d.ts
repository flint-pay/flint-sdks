import type { InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-4.js';
import type {
    FulfillmentEvent,
    FulfillmentEventListResponse,
    FulfillmentEventResourceResponse,
    FulfillmentEventsGetInput,
    FulfillmentEventsListInput
} from '../declarations/types-19.js';
import type { RequestOptions } from '../declarations/types-42.js';
import type { SdkResponse } from '../declarations/types-46.js';
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
export type { _SdkWithoutIdempotency } from '../declarations/types-65.js';
export type { RequestOptions, ResponseMeta } from '../declarations/types-42.js';
export type {
    FulfillmentEvent,
    FulfillmentEventResourceResponse,
    FulfillmentEventListResponse,
    FulfillmentEventsGetInput,
    FulfillmentEventsListInput
} from '../declarations/types-19.js';
export type { SdkResponse } from '../declarations/types-46.js';
export type { ClientOptions, CheckoutBuyerContact } from '../declarations/types-4.js';
export type { AuthMode } from '../declarations/types-0.js';
export type { Credentials } from '../declarations/types-11.js';
export type { ExpandedOrderSummary } from '../declarations/types-18.js';
export type { PricingAmounts } from '../declarations/types-39.js';
export type { MoneyValue, NextAction, NextActionMerchantAccountSession } from '../declarations/types-33.js';
export type { SettlementAmounts } from '../declarations/types-47.js';
export type { ResponseWarning } from '../declarations/types-43.js';
export { makeMoneyValue } from '../declarations/types-73.js';
export interface FulfillmentEventsResource {
    /**
 * Retrieves one provider-neutral fulfillment event by ID.
 * @see reference/fulfillmentEvents.md#fulfillmenteventsget
 * GET /v1/fulfillment-events/{fulfillment_event_id}
 * @example
 * client.fulfillmentEvents.get("example")
 */
    get(fulfillment_event_id: InputValue<string>, params?: {
        "expand"?: InputValue<Array<"order">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<FulfillmentEvent>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/fulfillmentEvents.md#fulfillmenteventsget
     */
    getWithResponse(fulfillment_event_id: InputValue<string>, params?: {
        "expand"?: InputValue<Array<"order">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<SdkResponse<FulfillmentEventResourceResponse>>;
    /**
 * Lists provider-neutral fulfillment events. Results default to received_at descending, with
 * fulfillment_event_id descending as the tiebreaker. sort_direction applies to both the selected
 * timestamp and the ID tiebreaker. Default order: received_at descending, then
 * fulfillment_event_id descending.
 * @see reference/fulfillmentEvents.md#fulfillmenteventslist
 * GET /v1/fulfillment-events
 * @example
 * client.fulfillmentEvents.list()
 */
    list(params?: {
        "fulfillment_id"?: InputValue<string>;
        "shipment_id"?: InputValue<string>;
        "package_id"?: InputValue<string>;
        "order_id"?: InputValue<string>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "event_type"?: InputValue<Array<"carrier_scan"
            | "status_changed"
            | "shipped"
            | "in_transit"
            | "out_for_delivery"
            | "delivered"
            | "delivery_attempted"
            | "tracking_updated"
            | "exception"
            | "returned"
            | "custom">>;
        "external_system"?: InputValue<string>;
        "external_event_id"?: InputValue<string>;
        "occurred_after"?: InputValue<string | globalThis.Date>;
        "occurred_before"?: InputValue<string | globalThis.Date>;
        "sort_by"?: InputValue<"received_at" | "occurred_at">;
        "sort_direction"?: InputValue<"asc" | "desc">;
        "expand"?: InputValue<Array<"order">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<FulfillmentEventListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/fulfillmentEvents.md#fulfillmenteventslist
     */
    listWithResponse(params?: {
        "fulfillment_id"?: InputValue<string>;
        "shipment_id"?: InputValue<string>;
        "package_id"?: InputValue<string>;
        "order_id"?: InputValue<string>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "event_type"?: InputValue<Array<"carrier_scan"
            | "status_changed"
            | "shipped"
            | "in_transit"
            | "out_for_delivery"
            | "delivered"
            | "delivery_attempted"
            | "tracking_updated"
            | "exception"
            | "returned"
            | "custom">>;
        "external_system"?: InputValue<string>;
        "external_event_id"?: InputValue<string>;
        "occurred_after"?: InputValue<string | globalThis.Date>;
        "occurred_before"?: InputValue<string | globalThis.Date>;
        "sort_by"?: InputValue<"received_at" | "occurred_at">;
        "sort_direction"?: InputValue<"asc" | "desc">;
        "expand"?: InputValue<Array<"order">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<SdkResponse<FulfillmentEventListResponse>>;
    /** Iterate pages lazily.
     * @see reference/fulfillmentEvents.md#fulfillmenteventslist
     */
    listPages(params?: {
        "fulfillment_id"?: InputValue<string>;
        "shipment_id"?: InputValue<string>;
        "package_id"?: InputValue<string>;
        "order_id"?: InputValue<string>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "event_type"?: InputValue<Array<"carrier_scan"
            | "status_changed"
            | "shipped"
            | "in_transit"
            | "out_for_delivery"
            | "delivered"
            | "delivery_attempted"
            | "tracking_updated"
            | "exception"
            | "returned"
            | "custom">>;
        "external_system"?: InputValue<string>;
        "external_event_id"?: InputValue<string>;
        "occurred_after"?: InputValue<string | globalThis.Date>;
        "occurred_before"?: InputValue<string | globalThis.Date>;
        "sort_by"?: InputValue<"received_at" | "occurred_at">;
        "sort_direction"?: InputValue<"asc" | "desc">;
        "expand"?: InputValue<Array<"order">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<FulfillmentEventListResponse>;
    /** Iterate complete page bodies with HTTP metadata.
     * @see reference/fulfillmentEvents.md#fulfillmenteventslist
     */
    listPagesWithResponse(params?: {
        "fulfillment_id"?: InputValue<string>;
        "shipment_id"?: InputValue<string>;
        "package_id"?: InputValue<string>;
        "order_id"?: InputValue<string>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "event_type"?: InputValue<Array<"carrier_scan"
            | "status_changed"
            | "shipped"
            | "in_transit"
            | "out_for_delivery"
            | "delivered"
            | "delivery_attempted"
            | "tracking_updated"
            | "exception"
            | "returned"
            | "custom">>;
        "external_system"?: InputValue<string>;
        "external_event_id"?: InputValue<string>;
        "occurred_after"?: InputValue<string | globalThis.Date>;
        "occurred_before"?: InputValue<string | globalThis.Date>;
        "sort_by"?: InputValue<"received_at" | "occurred_at">;
        "sort_direction"?: InputValue<"asc" | "desc">;
        "expand"?: InputValue<Array<"order">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<SdkResponse<FulfillmentEventListResponse>>;
    /** Iterate items lazily.
     * @see reference/fulfillmentEvents.md#fulfillmenteventslist
     */
    listItems(params?: {
        "fulfillment_id"?: InputValue<string>;
        "shipment_id"?: InputValue<string>;
        "package_id"?: InputValue<string>;
        "order_id"?: InputValue<string>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "event_type"?: InputValue<Array<"carrier_scan"
            | "status_changed"
            | "shipped"
            | "in_transit"
            | "out_for_delivery"
            | "delivered"
            | "delivery_attempted"
            | "tracking_updated"
            | "exception"
            | "returned"
            | "custom">>;
        "external_system"?: InputValue<string>;
        "external_event_id"?: InputValue<string>;
        "occurred_after"?: InputValue<string | globalThis.Date>;
        "occurred_before"?: InputValue<string | globalThis.Date>;
        "sort_by"?: InputValue<"received_at" | "occurred_at">;
        "sort_direction"?: InputValue<"asc" | "desc">;
        "expand"?: InputValue<Array<"order">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<FulfillmentEvent>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly fulfillmentEvents: FulfillmentEventsResource;
}
