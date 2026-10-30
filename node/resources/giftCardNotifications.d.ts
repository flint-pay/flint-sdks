import type { WithResponseInfo, InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-5.js';
import type {
    GiftCardNotification,
    GiftCardNotificationListResponse,
    GiftCardNotificationResponse,
    GiftCardNotificationsCancelParams,
    GiftCardNotificationsCreateParams,
    GiftCardNotificationsGetParams,
    GiftCardNotificationsListParams
} from '../declarations/types-24.js';
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
} from '../declarations/types-24.js';
export type { RequestOptions } from '../declarations/types-47.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-61.js';
export type { ClientOptions } from '../declarations/types-5.js';
export type { CancelGiftCardNotificationRequestInput } from '../declarations/types-3.js';
export type { AuthMode } from '../declarations/types-0.js';
export type { Credentials } from '../declarations/types-12.js';
export type { ResponseMeta, ResponseWarning } from '../declarations/types-48.js';
export type { NextAction, MoneyValue } from '../declarations/types-35.js';
export type { ReadinessMerchantAccountSession } from '../declarations/types-46.js';
export type { CreateGiftCardNotificationRequestInput } from '../declarations/types-8.js';
export { makeCancelGiftCardNotificationRequest } from '../declarations/types-62.js';
export { makeCreateGiftCardNotificationRequest } from '../declarations/types-63.js';
export { makeGiftCardNotificationRecipient } from '../declarations/types-67.js';
export { makeMoneyValue } from '../declarations/types-69.js';
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
 * client.giftCardNotifications.cancel("gcn_01ARZ3NDEKTSV4RRFFQ69G5FAV", undefined, {
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
 * client.giftCardNotifications.create({gift_card_id: "gc_01ARZ3NDEKTSV4RRFFQ69G5FAV", recipient:
 * {email: "example@example.invalid"}}, { idempotencyKey: idempotencyKey })
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
 * client.giftCardNotifications.get("gcn_01ARZ3NDEKTSV4RRFFQ69G5FAV")
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
