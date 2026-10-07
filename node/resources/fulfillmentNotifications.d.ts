export { SdkError, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
export type { Result, Metadata, ErrorKind, DiagnosticEvent, InputValue, ServerSentEvent } from '../runtime.js';
import type { InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/ClientOptions.js';
import type { FulfillmentNotification } from '../declarations/FulfillmentNotification.js';
import type { FulfillmentNotificationListResponse } from '../declarations/FulfillmentNotificationListResponse.js';
import type { FulfillmentNotificationResponse } from '../declarations/FulfillmentNotificationResponse.js';
import type { FulfillmentNotificationsGetInput } from '../declarations/FulfillmentNotificationsGetInput.js';
import type { FulfillmentNotificationsGetResponse } from '../declarations/FulfillmentNotificationsGetResponse.js';
import type { FulfillmentNotificationsListInput } from '../declarations/FulfillmentNotificationsListInput.js';
import type { FulfillmentNotificationsListResponse } from '../declarations/FulfillmentNotificationsListResponse.js';
import type { RequestOptions } from '../declarations/RequestOptions.js';
import type { SdkResponse } from '../declarations/SdkResponse.js';
import type { _SdkPayloadAt } from '../declarations/_SdkPayloadAt.js';
import type { _SdkWithoutIdempotency } from '../declarations/_SdkWithoutIdempotency.js';
export interface FulfillmentNotificationsResource {
    /**
 * Retrieves one fulfillment notification audit record by ID.
 * GET /v1/fulfillment-notifications/{fulfillment_notification_id}
 * @example
 * client.fulfillmentNotifications.get("example")
 */
    get(fulfillment_notification_id: InputValue<string>, params?: { "expand"?: InputValue<Array<"order">>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<_SdkPayloadAt<FulfillmentNotificationResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    getWithResponse(fulfillment_notification_id: InputValue<string>, params?: { "expand"?: InputValue<Array<"order">>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<FulfillmentNotificationsGetResponse>>;
    /**
 * Returns persisted fulfillment notification audit records. Results default to newest created first.
 * GET /v1/fulfillment-notifications
 * @example
 * client.fulfillmentNotifications.list()
 */
    list(params?: { "fulfillment_id"?: InputValue<string>; "order_id"?: InputValue<string>; "fulfillment_event_id"?: InputValue<string>; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "channel"?: InputValue<"email">; "status"?: InputValue<"pending" | "sent" | "failed" | "suppressed">; "notification_type"?: InputValue<"fulfillment_canceled" | "fulfillment_completed" | "fulfillment_delivered" | "fulfillment_delivery_attempted" | "fulfillment_dispatched" | "fulfillment_exception" | "fulfillment_failed" | "fulfillment_in_transit" | "fulfillment_no_show" | "fulfillment_out_for_delivery" | "fulfillment_ready" | "fulfillment_returned" | "fulfillment_shipped" | "shipment_delivered" | "shipment_delivery_attempted" | "shipment_exception" | "shipment_in_transit" | "shipment_out_for_delivery" | "shipment_returned" | "shipment_shipped" | "tracking_updated">; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<FulfillmentNotificationListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    listWithResponse(params?: { "fulfillment_id"?: InputValue<string>; "order_id"?: InputValue<string>; "fulfillment_event_id"?: InputValue<string>; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "channel"?: InputValue<"email">; "status"?: InputValue<"pending" | "sent" | "failed" | "suppressed">; "notification_type"?: InputValue<"fulfillment_canceled" | "fulfillment_completed" | "fulfillment_delivered" | "fulfillment_delivery_attempted" | "fulfillment_dispatched" | "fulfillment_exception" | "fulfillment_failed" | "fulfillment_in_transit" | "fulfillment_no_show" | "fulfillment_out_for_delivery" | "fulfillment_ready" | "fulfillment_returned" | "fulfillment_shipped" | "shipment_delivered" | "shipment_delivery_attempted" | "shipment_exception" | "shipment_in_transit" | "shipment_out_for_delivery" | "shipment_returned" | "shipment_shipped" | "tracking_updated">; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<FulfillmentNotificationsListResponse>>;
    listPages(params?: { "fulfillment_id"?: InputValue<string>; "order_id"?: InputValue<string>; "fulfillment_event_id"?: InputValue<string>; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "channel"?: InputValue<"email">; "status"?: InputValue<"pending" | "sent" | "failed" | "suppressed">; "notification_type"?: InputValue<"fulfillment_canceled" | "fulfillment_completed" | "fulfillment_delivered" | "fulfillment_delivery_attempted" | "fulfillment_dispatched" | "fulfillment_exception" | "fulfillment_failed" | "fulfillment_in_transit" | "fulfillment_no_show" | "fulfillment_out_for_delivery" | "fulfillment_ready" | "fulfillment_returned" | "fulfillment_shipped" | "shipment_delivered" | "shipment_delivery_attempted" | "shipment_exception" | "shipment_in_transit" | "shipment_out_for_delivery" | "shipment_returned" | "shipment_shipped" | "tracking_updated">; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<FulfillmentNotificationListResponse>;
    listPagesWithResponse(params?: { "fulfillment_id"?: InputValue<string>; "order_id"?: InputValue<string>; "fulfillment_event_id"?: InputValue<string>; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "channel"?: InputValue<"email">; "status"?: InputValue<"pending" | "sent" | "failed" | "suppressed">; "notification_type"?: InputValue<"fulfillment_canceled" | "fulfillment_completed" | "fulfillment_delivered" | "fulfillment_delivery_attempted" | "fulfillment_dispatched" | "fulfillment_exception" | "fulfillment_failed" | "fulfillment_in_transit" | "fulfillment_no_show" | "fulfillment_out_for_delivery" | "fulfillment_ready" | "fulfillment_returned" | "fulfillment_shipped" | "shipment_delivered" | "shipment_delivery_attempted" | "shipment_exception" | "shipment_in_transit" | "shipment_out_for_delivery" | "shipment_returned" | "shipment_shipped" | "tracking_updated">; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<SdkResponse<FulfillmentNotificationsListResponse>>;
    listItems(params?: { "fulfillment_id"?: InputValue<string>; "order_id"?: InputValue<string>; "fulfillment_event_id"?: InputValue<string>; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "channel"?: InputValue<"email">; "status"?: InputValue<"pending" | "sent" | "failed" | "suppressed">; "notification_type"?: InputValue<"fulfillment_canceled" | "fulfillment_completed" | "fulfillment_delivered" | "fulfillment_delivery_attempted" | "fulfillment_dispatched" | "fulfillment_exception" | "fulfillment_failed" | "fulfillment_in_transit" | "fulfillment_no_show" | "fulfillment_out_for_delivery" | "fulfillment_ready" | "fulfillment_returned" | "fulfillment_shipped" | "shipment_delivered" | "shipment_delivery_attempted" | "shipment_exception" | "shipment_in_transit" | "shipment_out_for_delivery" | "shipment_returned" | "shipment_shipped" | "tracking_updated">; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<FulfillmentNotification>;
  }
export declare class Client {

  constructor(options?: ClientOptions);

  close(): Promise<void>;
readonly fulfillmentNotifications: FulfillmentNotificationsResource;
}
export type { _SdkWithoutIdempotency } from '../declarations/_SdkWithoutIdempotency.js';
export type { RequestOptions } from '../declarations/RequestOptions.js';
export type { _SdkPayloadAt } from '../declarations/_SdkPayloadAt.js';
export type { FulfillmentNotificationResponse } from '../declarations/FulfillmentNotificationResponse.js';
export type { SdkResponse } from '../declarations/SdkResponse.js';
export type { FulfillmentNotificationsGetResponse } from '../declarations/FulfillmentNotificationsGetResponse.js';
export type { FulfillmentNotificationListResponse } from '../declarations/FulfillmentNotificationListResponse.js';
export type { FulfillmentNotificationsListResponse } from '../declarations/FulfillmentNotificationsListResponse.js';
export type { FulfillmentNotification } from '../declarations/FulfillmentNotification.js';
export type { FulfillmentNotificationsGetInput } from '../declarations/FulfillmentNotificationsGetInput.js';
export type { FulfillmentNotificationsListInput } from '../declarations/FulfillmentNotificationsListInput.js';
export type { ClientOptions } from '../declarations/ClientOptions.js';
export type { AuthMode } from '../declarations/AuthMode.js';
export type { Credentials } from '../declarations/Credentials.js';
export type { ResponseMeta } from '../declarations/ResponseMeta.js';
export type { ResponseWarning } from '../declarations/ResponseWarning.js';
export type { NextAction } from '../declarations/NextAction.js';
export type { NextActionMerchantAccountSession } from '../declarations/NextActionMerchantAccountSession.js';
export type { MoneyValue } from '../declarations/MoneyValue.js';
export type { PricingAmounts } from '../declarations/PricingAmounts.js';
export type { SettlementAmounts } from '../declarations/SettlementAmounts.js';
export type { SignedMoney } from '../declarations/SignedMoney.js';
export { makeFulfillmentNotificationResponse } from '../declarations/makeFulfillmentNotificationResponse.js';
export { makeFulfillmentNotificationListResponse } from '../declarations/makeFulfillmentNotificationListResponse.js';
export { makeFulfillmentNotification } from '../declarations/makeFulfillmentNotification.js';
export { makeResponseMeta } from '../declarations/makeResponseMeta.js';
export { makeResponseWarning } from '../declarations/makeResponseWarning.js';
export { makeNextAction } from '../declarations/makeNextAction.js';
export { makeNextActionMerchantAccountSession } from '../declarations/makeNextActionMerchantAccountSession.js';
export { makeMoneyValue } from '../declarations/makeMoneyValue.js';
export { makePricingAmounts } from '../declarations/makePricingAmounts.js';
export { makeSettlementAmounts } from '../declarations/makeSettlementAmounts.js';
export { makeSignedMoney } from '../declarations/makeSignedMoney.js';
