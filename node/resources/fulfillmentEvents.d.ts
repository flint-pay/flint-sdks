export { SdkError, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
export type { Result, Metadata, ErrorKind, DiagnosticEvent, InputValue, ServerSentEvent } from '../runtime.js';
import type { InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/ClientOptions.js';
import type { FulfillmentEvent } from '../declarations/FulfillmentEvent.js';
import type { FulfillmentEventListResponse } from '../declarations/FulfillmentEventListResponse.js';
import type { FulfillmentEventResourceResponse } from '../declarations/FulfillmentEventResourceResponse.js';
import type { FulfillmentEventsGetInput } from '../declarations/FulfillmentEventsGetInput.js';
import type { FulfillmentEventsGetResponse } from '../declarations/FulfillmentEventsGetResponse.js';
import type { FulfillmentEventsListInput } from '../declarations/FulfillmentEventsListInput.js';
import type { FulfillmentEventsListResponse } from '../declarations/FulfillmentEventsListResponse.js';
import type { RequestOptions } from '../declarations/RequestOptions.js';
import type { SdkResponse } from '../declarations/SdkResponse.js';
import type { _SdkPayloadAt } from '../declarations/_SdkPayloadAt.js';
import type { _SdkWithoutIdempotency } from '../declarations/_SdkWithoutIdempotency.js';
export interface FulfillmentEventsResource {
    /**
 * Retrieves one provider-neutral fulfillment event by ID.
 * GET /v1/fulfillment-events/{fulfillment_event_id}
 * @example
 * client.fulfillmentEvents.get("example")
 */
    get(fulfillment_event_id: InputValue<string>, params?: { "expand"?: InputValue<Array<"order">>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<_SdkPayloadAt<FulfillmentEventResourceResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    getWithResponse(fulfillment_event_id: InputValue<string>, params?: { "expand"?: InputValue<Array<"order">>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<FulfillmentEventsGetResponse>>;
    /**
 * Lists provider-neutral fulfillment events. Results default to newest received first.
 * GET /v1/fulfillment-events
 * @example
 * client.fulfillmentEvents.list()
 */
    list(params?: { "fulfillment_id"?: InputValue<string>; "shipment_id"?: InputValue<string>; "package_id"?: InputValue<string>; "order_id"?: InputValue<string>; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "event_type"?: InputValue<"accepted" | "preparing" | "picked" | "packed" | "ready" | "shipped" | "dispatched" | "in_transit" | "out_for_delivery" | "delivered" | "delivery_attempted" | "tracking_updated" | "exception" | "returned" | "completed" | "canceled" | "failed" | "no_show" | "custom">; "external_system"?: InputValue<string>; "external_event_id"?: InputValue<string>; "occurred_after"?: InputValue<string | globalThis.Date>; "occurred_before"?: InputValue<string | globalThis.Date>; "sort_by"?: InputValue<"received_at" | "occurred_at">; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<FulfillmentEventListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    listWithResponse(params?: { "fulfillment_id"?: InputValue<string>; "shipment_id"?: InputValue<string>; "package_id"?: InputValue<string>; "order_id"?: InputValue<string>; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "event_type"?: InputValue<"accepted" | "preparing" | "picked" | "packed" | "ready" | "shipped" | "dispatched" | "in_transit" | "out_for_delivery" | "delivered" | "delivery_attempted" | "tracking_updated" | "exception" | "returned" | "completed" | "canceled" | "failed" | "no_show" | "custom">; "external_system"?: InputValue<string>; "external_event_id"?: InputValue<string>; "occurred_after"?: InputValue<string | globalThis.Date>; "occurred_before"?: InputValue<string | globalThis.Date>; "sort_by"?: InputValue<"received_at" | "occurred_at">; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<FulfillmentEventsListResponse>>;
    listPages(params?: { "fulfillment_id"?: InputValue<string>; "shipment_id"?: InputValue<string>; "package_id"?: InputValue<string>; "order_id"?: InputValue<string>; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "event_type"?: InputValue<"accepted" | "preparing" | "picked" | "packed" | "ready" | "shipped" | "dispatched" | "in_transit" | "out_for_delivery" | "delivered" | "delivery_attempted" | "tracking_updated" | "exception" | "returned" | "completed" | "canceled" | "failed" | "no_show" | "custom">; "external_system"?: InputValue<string>; "external_event_id"?: InputValue<string>; "occurred_after"?: InputValue<string | globalThis.Date>; "occurred_before"?: InputValue<string | globalThis.Date>; "sort_by"?: InputValue<"received_at" | "occurred_at">; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<FulfillmentEventListResponse>;
    listPagesWithResponse(params?: { "fulfillment_id"?: InputValue<string>; "shipment_id"?: InputValue<string>; "package_id"?: InputValue<string>; "order_id"?: InputValue<string>; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "event_type"?: InputValue<"accepted" | "preparing" | "picked" | "packed" | "ready" | "shipped" | "dispatched" | "in_transit" | "out_for_delivery" | "delivered" | "delivery_attempted" | "tracking_updated" | "exception" | "returned" | "completed" | "canceled" | "failed" | "no_show" | "custom">; "external_system"?: InputValue<string>; "external_event_id"?: InputValue<string>; "occurred_after"?: InputValue<string | globalThis.Date>; "occurred_before"?: InputValue<string | globalThis.Date>; "sort_by"?: InputValue<"received_at" | "occurred_at">; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<SdkResponse<FulfillmentEventsListResponse>>;
    listItems(params?: { "fulfillment_id"?: InputValue<string>; "shipment_id"?: InputValue<string>; "package_id"?: InputValue<string>; "order_id"?: InputValue<string>; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "event_type"?: InputValue<"accepted" | "preparing" | "picked" | "packed" | "ready" | "shipped" | "dispatched" | "in_transit" | "out_for_delivery" | "delivered" | "delivery_attempted" | "tracking_updated" | "exception" | "returned" | "completed" | "canceled" | "failed" | "no_show" | "custom">; "external_system"?: InputValue<string>; "external_event_id"?: InputValue<string>; "occurred_after"?: InputValue<string | globalThis.Date>; "occurred_before"?: InputValue<string | globalThis.Date>; "sort_by"?: InputValue<"received_at" | "occurred_at">; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<FulfillmentEvent>;
  }
export declare class Client {

  constructor(options?: ClientOptions);

  close(): Promise<void>;
readonly fulfillmentEvents: FulfillmentEventsResource;
}
export type { _SdkWithoutIdempotency } from '../declarations/_SdkWithoutIdempotency.js';
export type { RequestOptions } from '../declarations/RequestOptions.js';
export type { _SdkPayloadAt } from '../declarations/_SdkPayloadAt.js';
export type { FulfillmentEventResourceResponse } from '../declarations/FulfillmentEventResourceResponse.js';
export type { SdkResponse } from '../declarations/SdkResponse.js';
export type { FulfillmentEventsGetResponse } from '../declarations/FulfillmentEventsGetResponse.js';
export type { FulfillmentEventListResponse } from '../declarations/FulfillmentEventListResponse.js';
export type { FulfillmentEventsListResponse } from '../declarations/FulfillmentEventsListResponse.js';
export type { FulfillmentEvent } from '../declarations/FulfillmentEvent.js';
export type { FulfillmentEventsGetInput } from '../declarations/FulfillmentEventsGetInput.js';
export type { FulfillmentEventsListInput } from '../declarations/FulfillmentEventsListInput.js';
export type { ClientOptions } from '../declarations/ClientOptions.js';
export type { AuthMode } from '../declarations/AuthMode.js';
export type { Credentials } from '../declarations/Credentials.js';
export type { ResponseMeta } from '../declarations/ResponseMeta.js';
export type { ResponseWarning } from '../declarations/ResponseWarning.js';
export type { NextAction } from '../declarations/NextAction.js';
export type { PricingAmounts } from '../declarations/PricingAmounts.js';
export type { MoneyValue } from '../declarations/MoneyValue.js';
export type { SettlementAmounts } from '../declarations/SettlementAmounts.js';
export type { SignedMoney } from '../declarations/SignedMoney.js';
export { makeFulfillmentEventResourceResponse } from '../declarations/makeFulfillmentEventResourceResponse.js';
export { makeFulfillmentEventListResponse } from '../declarations/makeFulfillmentEventListResponse.js';
export { makeFulfillmentEvent } from '../declarations/makeFulfillmentEvent.js';
export { makeResponseMeta } from '../declarations/makeResponseMeta.js';
export { makeResponseWarning } from '../declarations/makeResponseWarning.js';
export { makeNextAction } from '../declarations/makeNextAction.js';
export { makePricingAmounts } from '../declarations/makePricingAmounts.js';
export { makeMoneyValue } from '../declarations/makeMoneyValue.js';
export { makeSettlementAmounts } from '../declarations/makeSettlementAmounts.js';
export { makeSignedMoney } from '../declarations/makeSignedMoney.js';
