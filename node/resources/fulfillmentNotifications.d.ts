import type { WithResponseInfo, InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-7.js';
import type {
    FulfillmentNotification,
    FulfillmentNotificationListResponse,
    FulfillmentNotificationResponse,
    FulfillmentNotificationsGetParams,
    FulfillmentNotificationsListParams
} from '../declarations/types-28.js';
import type { RequestOptions } from '../declarations/types-62.js';
import type { _SdkWithoutIdempotency } from '../declarations/types-80.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
export type {
    Result,
    ResponseInfo,
    WithResponseInfo,
    DiagnosticEvent,
    InputValue,
    CredentialProvider,
    ServerSentEvent,
    SdkErrorCode,
    SdkErrorDetails,
    WorkloadIdentityOptions,
    WorkloadIdentitySource
} from '../runtime.js';
export type {
    FulfillmentNotificationsGetParams,
    FulfillmentNotification,
    FulfillmentNotificationResponse,
    FulfillmentNotificationsListParams,
    FulfillmentNotificationListResponse
} from '../declarations/types-28.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-80.js';
export type { RequestOptions, ResponseMeta, ResponseWarning, ResourceReference } from '../declarations/types-62.js';
export type { ClientOptions } from '../declarations/types-7.js';
export type { AuthMode } from '../declarations/types-1.js';
export type { Credentials } from '../declarations/types-15.js';
export type { MetadataMap } from '../declarations/types-43.js';
export type { ExpandedOrderSummary } from '../declarations/types-26.js';
export type { CheckoutBuyerContact } from '../declarations/types-6.js';
export type { DeferredPromotion } from '../declarations/types-17.js';
export type { PricingAmounts } from '../declarations/types-56.js';
export type { MoneyValue, NextAction } from '../declarations/types-44.js';
export type { OrderSettlementAmounts } from '../declarations/types-47.js';
export type { SettlementAmounts } from '../declarations/types-68.js';
export type { ReadinessMerchantAccountSession } from '../declarations/types-60.js';
export type { FulfillmentEventsGetParams } from '../declarations/types-27.js';
export { makeMetadataMap } from '../declarations/types-88.js';
export { makeMoneyValue } from '../declarations/types-89.js';
export interface FulfillmentNotificationsResource {
    /**
 * Retrieves one fulfillment notification audit record by ID.
 *
 * `GET /v1/fulfillment-notifications/{fulfillment_notification_id}`
 * @param fulfillment_notification_id Flint fulfillment notification ID. Must be a valid ID with
 * prefix fnt_. Malformed IDs return 400 INVALID_REQUEST with detail INVALID_VALUE; well-formed IDs
 * that do not exist return 404 RESOURCE_NOT_FOUND.
 * @see https://developers.withflintpay.com/docs/api/fulfillment#getFulfillmentNotification
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.fulfillmentNotifications.get("fnt_01KEZF7C00QD91RXQH2E7H9K5E")
 */
    get(fulfillment_notification_id: InputValue<string>, params?: FulfillmentNotificationsGetParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<FulfillmentNotification, FulfillmentNotificationResponse>>;
    /**
 * Returns persisted fulfillment notification audit records. Results default to newest created
 * first. Default order: created_at descending, then fulfillment_notification_id descending.
 *
 * `GET /v1/fulfillment-notifications`
 * @see https://developers.withflintpay.com/docs/api/fulfillment#listFulfillmentNotifications
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.fulfillmentNotifications.list()
 */
    list(params?: FulfillmentNotificationsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<FulfillmentNotificationListResponse, FulfillmentNotificationListResponse>>;
    /** Iterate pages lazily.
     * @see https://developers.withflintpay.com/docs/api/fulfillment#listFulfillmentNotifications
     */
    listPages(params?: FulfillmentNotificationsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<WithResponseInfo<FulfillmentNotificationListResponse, FulfillmentNotificationListResponse>>;
    /** Iterate items lazily.
     * @see https://developers.withflintpay.com/docs/api/fulfillment#listFulfillmentNotifications
     */
    listItems(params?: FulfillmentNotificationsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<FulfillmentNotification>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly fulfillmentNotifications: FulfillmentNotificationsResource;
}
