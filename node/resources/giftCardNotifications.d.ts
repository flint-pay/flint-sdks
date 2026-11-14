import type { WithResponseInfo, InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-6.js';
import type {
    GiftCardNotification,
    GiftCardNotificationListResponse,
    GiftCardNotificationResponse,
    GiftCardNotificationsCancelParams,
    GiftCardNotificationsCreateParams,
    GiftCardNotificationsGetParams,
    GiftCardNotificationsListParams
} from '../declarations/types-27.js';
import type { RequestOptions } from '../declarations/types-54.js';
import type { _SdkWithoutIdempotency } from '../declarations/types-70.js';
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
    GiftCardNotificationsCancelParams,
    GiftCardNotification,
    GiftCardNotificationResponse,
    GiftCardNotificationsCreateParams,
    GiftCardNotificationsGetParams,
    GiftCardNotificationsListParams,
    GiftCardNotificationListResponse,
    GiftCardNotificationDelivery,
    GiftCardNotificationDeliveryAttempt,
    GiftCardNotificationDeliveryEvent,
    GiftCardPurchaseRecipient,
    GiftCardNotificationRecipientInput
} from '../declarations/types-27.js';
export type { RequestOptions, ResponseMeta, ResponseWarning, ResourceReference } from '../declarations/types-54.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-70.js';
export type { ClientOptions } from '../declarations/types-6.js';
export type { CancelGiftCardNotificationRequestInput } from '../declarations/types-4.js';
export type { AuthMode } from '../declarations/types-1.js';
export type { Credentials } from '../declarations/types-14.js';
export type { NextAction, MoneyValue } from '../declarations/types-39.js';
export type { ReadinessMerchantAccountSession } from '../declarations/types-52.js';
export type { CreateGiftCardNotificationRequestInput } from '../declarations/types-9.js';
export type { DisputesAcceptParams } from '../declarations/types-24.js';
export { makeCancelGiftCardNotificationRequest } from '../declarations/types-71.js';
export { makeCreateGiftCardNotificationRequest } from '../declarations/types-73.js';
export { makeGiftCardNotificationRecipient } from '../declarations/types-77.js';
export { makeMoneyValue } from '../declarations/types-78.js';
export interface GiftCardNotificationsResource {
    /**
 * Cancels a notification before sending starts or after confirmed failure. A sending or
 * unconfirmed notification cannot be canceled. Gift card value is preserved.
 *
 * `POST /v1/gift-card-notifications/{gift_card_notification_id}/cancel`
 * @param gift_card_notification_id Flint resource ID.
 * @see https://developers.withflintpay.com/docs/api/gift-cards#cancelGiftCardNotification
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.giftCardNotifications.cancel("gcn_01KEZF7C0023FN0HF9GH34RZA1", undefined, {
 * idempotencyKey: idempotencyKey })
 */
    cancel(gift_card_notification_id: InputValue<string>, params?: GiftCardNotificationsCancelParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<GiftCardNotification, GiftCardNotificationResponse>>;
    /**
 * Creates a recipient email notification, immediately or up to 90 days from now. A resend creates
 * a new resource with resend_of_notification_id. An unconfirmed send must be resolved before
 * another send is requested. Sending does not change gift card value or order fulfillment.
 *
 * `POST /v1/gift-card-notifications`
 * @see https://developers.withflintpay.com/docs/api/gift-cards#createGiftCardNotification
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.giftCardNotifications.create({gift_card_id: "gc_01KEZF7C00Z8CQGX4BKKBJ3B5S", recipient:
 * {email: "alex@example.com", name: "Alex Morgan"}}, { idempotencyKey: idempotencyKey })
 */
    create(params: GiftCardNotificationsCreateParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<GiftCardNotification, GiftCardNotificationResponse>>;
    /**
 * Retrieves a notification and its sending outcome. Sent means the sending provider accepted the
 * message; it does not mean the recipient read it.
 *
 * `GET /v1/gift-card-notifications/{gift_card_notification_id}`
 * @param gift_card_notification_id Flint resource ID.
 * @see https://developers.withflintpay.com/docs/api/gift-cards#getGiftCardNotification
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.giftCardNotifications.get("gcn_01KEZF7C0023FN0HF9GH34RZA1")
 */
    get(gift_card_notification_id: InputValue<string>, params?: GiftCardNotificationsGetParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<GiftCardNotification, GiftCardNotificationResponse>>;
    /**
 * Lists recipient notification identities, schedules and delivery outcomes. No redemption codes or
 * recipient access tokens are returned. Default order: gift_card_notification_id descending; this
 * key uniquely orders the results.
 *
 * `GET /v1/gift-card-notifications`
 * @see https://developers.withflintpay.com/docs/api/gift-cards#listGiftCardNotifications
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.giftCardNotifications.list()
 */
    list(params?: GiftCardNotificationsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<GiftCardNotificationListResponse, GiftCardNotificationListResponse>>;
    /** Iterate pages lazily.
     * @see https://developers.withflintpay.com/docs/api/gift-cards#listGiftCardNotifications
     */
    listPages(params?: GiftCardNotificationsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<WithResponseInfo<GiftCardNotificationListResponse, GiftCardNotificationListResponse>>;
    /** Iterate items lazily.
     * @see https://developers.withflintpay.com/docs/api/gift-cards#listGiftCardNotifications
     */
    listItems(params?: GiftCardNotificationsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<GiftCardNotification>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly giftCardNotifications: GiftCardNotificationsResource;
}
