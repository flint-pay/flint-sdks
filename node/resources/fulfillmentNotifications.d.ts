import type { InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-4.js';
import type {
    FulfillmentNotification,
    FulfillmentNotificationListResponse,
    FulfillmentNotificationResponse,
    FulfillmentNotificationsGetInput,
    FulfillmentNotificationsListInput
} from '../declarations/types-17.js';
import type { RequestOptions } from '../declarations/types-40.js';
import type { SdkResponse } from '../declarations/types-43.js';
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
export type { _SdkWithoutIdempotency } from '../declarations/types-61.js';
export type { RequestOptions, ResponseMeta, ResponseWarning } from '../declarations/types-40.js';
export type {
    FulfillmentNotification,
    FulfillmentNotificationResponse,
    FulfillmentNotificationListResponse,
    FulfillmentNotificationsGetInput,
    FulfillmentNotificationsListInput
} from '../declarations/types-17.js';
export type { SdkResponse } from '../declarations/types-43.js';
export type { ClientOptions } from '../declarations/types-4.js';
export type { AuthMode } from '../declarations/types-0.js';
export type { Credentials } from '../declarations/types-9.js';
export type { ExpandedOrderSummary } from '../declarations/types-16.js';
export type { CheckoutBuyerContact } from '../declarations/types-3.js';
export type { PricingAmounts } from '../declarations/types-37.js';
export type { MoneyValue, NextAction, NextActionMerchantAccountSession } from '../declarations/types-31.js';
export type { SettlementAmounts } from '../declarations/types-44.js';
export { makeMoneyValue } from '../declarations/types-68.js';
export interface FulfillmentNotificationsResource {
    /**
 * Retrieves one fulfillment notification audit record by ID.
 * @see reference/fulfillmentNotifications.md#fulfillmentnotificationsget
 * GET /v1/fulfillment-notifications/{fulfillment_notification_id}
 * @example
 * client.fulfillmentNotifications.get("example")
 */
    get(fulfillment_notification_id: InputValue<string>, params?: {
        "expand"?: InputValue<Array<"order">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<FulfillmentNotification>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/fulfillmentNotifications.md#fulfillmentnotificationsget
     */
    getWithResponse(fulfillment_notification_id: InputValue<string>, params?: {
        "expand"?: InputValue<Array<"order">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<FulfillmentNotificationResponse>>;
    /**
 * Returns persisted fulfillment notification audit records. Results default to newest created
 * first.
 * @see reference/fulfillmentNotifications.md#fulfillmentnotificationslist
 * GET /v1/fulfillment-notifications
 * @example
 * client.fulfillmentNotifications.list()
 */
    list(params?: {
        "fulfillment_id"?: InputValue<string>;
        "order_id"?: InputValue<string>;
        "fulfillment_event_id"?: InputValue<string>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "channel"?: InputValue<Array<"email">>;
        "status"?: InputValue<Array<"pending" | "sent" | "failed" | "suppressed">>;
        "notification_type"?: InputValue<Array<"fulfillment_canceled"
            | "fulfillment_completed"
            | "fulfillment_delivered"
            | "fulfillment_dispatched"
            | "fulfillment_failed"
            | "fulfillment_no_show"
            | "fulfillment_ready"
            | "fulfillment_shipped"
            | "shipment_delivered"
            | "shipment_delivery_attempted"
            | "shipment_exception"
            | "shipment_out_for_delivery"
            | "shipment_returned"
            | "shipment_shipped">>;
        "expand"?: InputValue<Array<"order">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<FulfillmentNotificationListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/fulfillmentNotifications.md#fulfillmentnotificationslist
     */
    listWithResponse(params?: {
        "fulfillment_id"?: InputValue<string>;
        "order_id"?: InputValue<string>;
        "fulfillment_event_id"?: InputValue<string>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "channel"?: InputValue<Array<"email">>;
        "status"?: InputValue<Array<"pending" | "sent" | "failed" | "suppressed">>;
        "notification_type"?: InputValue<Array<"fulfillment_canceled"
            | "fulfillment_completed"
            | "fulfillment_delivered"
            | "fulfillment_dispatched"
            | "fulfillment_failed"
            | "fulfillment_no_show"
            | "fulfillment_ready"
            | "fulfillment_shipped"
            | "shipment_delivered"
            | "shipment_delivery_attempted"
            | "shipment_exception"
            | "shipment_out_for_delivery"
            | "shipment_returned"
            | "shipment_shipped">>;
        "expand"?: InputValue<Array<"order">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<FulfillmentNotificationListResponse>>;
    /** Iterate pages lazily.
     * @see reference/fulfillmentNotifications.md#fulfillmentnotificationslist
     */
    listPages(params?: {
        "fulfillment_id"?: InputValue<string>;
        "order_id"?: InputValue<string>;
        "fulfillment_event_id"?: InputValue<string>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "channel"?: InputValue<Array<"email">>;
        "status"?: InputValue<Array<"pending" | "sent" | "failed" | "suppressed">>;
        "notification_type"?: InputValue<Array<"fulfillment_canceled"
            | "fulfillment_completed"
            | "fulfillment_delivered"
            | "fulfillment_dispatched"
            | "fulfillment_failed"
            | "fulfillment_no_show"
            | "fulfillment_ready"
            | "fulfillment_shipped"
            | "shipment_delivered"
            | "shipment_delivery_attempted"
            | "shipment_exception"
            | "shipment_out_for_delivery"
            | "shipment_returned"
            | "shipment_shipped">>;
        "expand"?: InputValue<Array<"order">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<FulfillmentNotificationListResponse>;
    /** Iterate complete page bodies with HTTP metadata.
     * @see reference/fulfillmentNotifications.md#fulfillmentnotificationslist
     */
    listPagesWithResponse(params?: {
        "fulfillment_id"?: InputValue<string>;
        "order_id"?: InputValue<string>;
        "fulfillment_event_id"?: InputValue<string>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "channel"?: InputValue<Array<"email">>;
        "status"?: InputValue<Array<"pending" | "sent" | "failed" | "suppressed">>;
        "notification_type"?: InputValue<Array<"fulfillment_canceled"
            | "fulfillment_completed"
            | "fulfillment_delivered"
            | "fulfillment_dispatched"
            | "fulfillment_failed"
            | "fulfillment_no_show"
            | "fulfillment_ready"
            | "fulfillment_shipped"
            | "shipment_delivered"
            | "shipment_delivery_attempted"
            | "shipment_exception"
            | "shipment_out_for_delivery"
            | "shipment_returned"
            | "shipment_shipped">>;
        "expand"?: InputValue<Array<"order">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<SdkResponse<FulfillmentNotificationListResponse>>;
    /** Iterate items lazily.
     * @see reference/fulfillmentNotifications.md#fulfillmentnotificationslist
     */
    listItems(params?: {
        "fulfillment_id"?: InputValue<string>;
        "order_id"?: InputValue<string>;
        "fulfillment_event_id"?: InputValue<string>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "channel"?: InputValue<Array<"email">>;
        "status"?: InputValue<Array<"pending" | "sent" | "failed" | "suppressed">>;
        "notification_type"?: InputValue<Array<"fulfillment_canceled"
            | "fulfillment_completed"
            | "fulfillment_delivered"
            | "fulfillment_dispatched"
            | "fulfillment_failed"
            | "fulfillment_no_show"
            | "fulfillment_ready"
            | "fulfillment_shipped"
            | "shipment_delivered"
            | "shipment_delivery_attempted"
            | "shipment_exception"
            | "shipment_out_for_delivery"
            | "shipment_returned"
            | "shipment_shipped">>;
        "expand"?: InputValue<Array<"order">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<FulfillmentNotification>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly fulfillmentNotifications: FulfillmentNotificationsResource;
}
