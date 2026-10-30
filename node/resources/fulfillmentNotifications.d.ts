import type { WithResponseInfo, InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-5.js';
import type {
    FulfillmentNotification,
    FulfillmentNotificationListResponse,
    FulfillmentNotificationResponse,
    FulfillmentNotificationsGetParams,
    FulfillmentNotificationsListParams
} from '../declarations/types-22.js';
import type { RequestOptions } from '../declarations/types-47.js';
import type { _SdkWithoutIdempotency } from '../declarations/types-61.js';
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
    FulfillmentNotificationListResponse,
    FulfillmentEventsGetParams
} from '../declarations/types-22.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-61.js';
export type { RequestOptions } from '../declarations/types-47.js';
export type { ClientOptions } from '../declarations/types-5.js';
export type { AuthMode } from '../declarations/types-0.js';
export type { Credentials } from '../declarations/types-12.js';
export type { MetadataMap } from '../declarations/types-34.js';
export type { ExpandedOrderSummary } from '../declarations/types-21.js';
export type { CheckoutBuyerContact } from '../declarations/types-4.js';
export type { PricingAmounts } from '../declarations/types-43.js';
export type { MoneyValue, NextAction } from '../declarations/types-35.js';
export type { SettlementAmounts } from '../declarations/types-53.js';
export type { ResponseMeta, ResponseWarning } from '../declarations/types-48.js';
export type { ReadinessMerchantAccountSession } from '../declarations/types-46.js';
export { makeMoneyValue } from '../declarations/types-69.js';
export interface FulfillmentNotificationsResource {
    /**
 * Retrieves one fulfillment notification audit record by ID.
 *
 * `GET /v1/fulfillment-notifications/{fulfillment_notification_id}`
 * @param fulfillment_notification_id Flint fulfillment notification ID.
 * @see https://developers.withflintpay.com/docs/api/fulfillment#getFulfillmentNotification
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.fulfillmentNotifications.get("fnt_01ARZ3NDEKTSV4RRFFQ69G5FAV")
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
