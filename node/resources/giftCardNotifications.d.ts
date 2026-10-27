import type { InputValue } from '../runtime.js';
import type { CancelGiftCardNotificationRequestInput } from '../declarations/types-3.js';
import type { ClientOptions } from '../declarations/types-4.js';
import type { CreateGiftCardNotificationRequestInput } from '../declarations/types-6.js';
import type {
    GiftCardNotification,
    GiftCardNotificationListResponse,
    GiftCardNotificationResponse,
    GiftCardNotificationsCancelInput,
    GiftCardNotificationsCreateInput,
    GiftCardNotificationsGetInput,
    GiftCardNotificationsListInput
} from '../declarations/types-19.js';
import type { RequestOptions } from '../declarations/types-40.js';
import type { SdkResponse } from '../declarations/types-44.js';
import type { _SdkWithoutIdempotency } from '../declarations/types-62.js';
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
export type { CancelGiftCardNotificationRequestInput } from '../declarations/types-3.js';
export type { RequestOptions, ResponseMeta, ResponseWarning } from '../declarations/types-40.js';
export type {
    GiftCardNotification,
    GiftCardNotificationResponse,
    GiftCardNotificationListResponse,
    GiftCardNotificationsCancelInput,
    GiftCardNotificationsCreateInput,
    GiftCardNotificationsGetInput,
    GiftCardNotificationsListInput,
    GiftCardNotificationDelivery,
    GiftCardNotificationDeliveryAttempt,
    GiftCardNotificationDeliveryEvent,
    GiftCardPurchaseRecipient,
    GiftCardNotificationRecipientInput
} from '../declarations/types-19.js';
export type { SdkResponse } from '../declarations/types-44.js';
export type { CreateGiftCardNotificationRequestInput } from '../declarations/types-6.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-62.js';
export type { ClientOptions } from '../declarations/types-4.js';
export type { AuthMode } from '../declarations/types-0.js';
export type { Credentials } from '../declarations/types-9.js';
export type { NextAction, NextActionMerchantAccountSession, MoneyValue } from '../declarations/types-31.js';
export { makeCancelGiftCardNotificationRequest } from '../declarations/types-62.js';
export { makeCreateGiftCardNotificationRequest } from '../declarations/types-63.js';
export { makeGiftCardNotificationRecipient } from '../declarations/types-67.js';
export { makeMoneyValue } from '../declarations/types-68.js';
export interface GiftCardNotificationsResource {
    /**
 * Cancels a notification before sending starts or after confirmed failure. A sending or
 * unconfirmed notification cannot be canceled. Gift card value is preserved.
 * @see reference/giftCardNotifications.md#giftcardnotificationscancel
 * POST /v1/gift-card-notifications/{gift_card_notification_id}/cancel
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.giftCardNotifications.cancel("example", undefined, { idempotencyKey: idempotencyKey })
 */
    cancel(gift_card_notification_id: InputValue<string>, params?: (InputValue<CancelGiftCardNotificationRequestInput> | {})
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<GiftCardNotification>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/giftCardNotifications.md#giftcardnotificationscancel
     */
    cancelWithResponse(gift_card_notification_id: InputValue<string>, params?: (InputValue<CancelGiftCardNotificationRequestInput> | {})
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<GiftCardNotificationResponse>>;
    /**
 * Creates a recipient email notification, immediately or up to 90 days from now. A resend creates
 * a new resource with resend_of_notification_id. An unconfirmed send must be resolved before
 * another send is requested. Sending does not change gift card value or order fulfillment.
 * @see reference/giftCardNotifications.md#giftcardnotificationscreate
 * POST /v1/gift-card-notifications
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.giftCardNotifications.create({gift_card_id: "example", recipient: {email:
 * "example@example.invalid"}}, { idempotencyKey: idempotencyKey })
 */
    create(params: (InputValue<CreateGiftCardNotificationRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<GiftCardNotification>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/giftCardNotifications.md#giftcardnotificationscreate
     */
    createWithResponse(params: (InputValue<CreateGiftCardNotificationRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<GiftCardNotificationResponse>>;
    /**
 * Retrieves a notification and its sending outcome. Sent means the sending provider accepted the
 * message; it does not mean the recipient read it.
 * @see reference/giftCardNotifications.md#giftcardnotificationsget
 * GET /v1/gift-card-notifications/{gift_card_notification_id}
 * @example
 * client.giftCardNotifications.get("example")
 */
    get(gift_card_notification_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<GiftCardNotification>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/giftCardNotifications.md#giftcardnotificationsget
     */
    getWithResponse(gift_card_notification_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<SdkResponse<GiftCardNotificationResponse>>;
    /**
 * Lists recipient notification identities, schedules and delivery outcomes. No redemption codes or
 * recipient access tokens are returned.
 * @see reference/giftCardNotifications.md#giftcardnotificationslist
 * GET /v1/gift-card-notifications
 * @example
 * client.giftCardNotifications.list()
 */
    list(params?: {
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "gift_card_id"?: InputValue<string>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "status"?: InputValue<Array<"bounced" | "canceled" | "failed" | "queued" | "scheduled" | "sending" | "sent" | "unconfirmed">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<GiftCardNotificationListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/giftCardNotifications.md#giftcardnotificationslist
     */
    listWithResponse(params?: {
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "gift_card_id"?: InputValue<string>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "status"?: InputValue<Array<"bounced" | "canceled" | "failed" | "queued" | "scheduled" | "sending" | "sent" | "unconfirmed">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<SdkResponse<GiftCardNotificationListResponse>>;
    /** Iterate pages lazily.
     * @see reference/giftCardNotifications.md#giftcardnotificationslist
     */
    listPages(params?: {
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "gift_card_id"?: InputValue<string>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "status"?: InputValue<Array<"bounced" | "canceled" | "failed" | "queued" | "scheduled" | "sending" | "sent" | "unconfirmed">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<GiftCardNotificationListResponse>;
    /** Iterate complete page bodies with HTTP metadata.
     * @see reference/giftCardNotifications.md#giftcardnotificationslist
     */
    listPagesWithResponse(params?: {
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "gift_card_id"?: InputValue<string>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "status"?: InputValue<Array<"bounced" | "canceled" | "failed" | "queued" | "scheduled" | "sending" | "sent" | "unconfirmed">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<SdkResponse<GiftCardNotificationListResponse>>;
    /** Iterate items lazily.
     * @see reference/giftCardNotifications.md#giftcardnotificationslist
     */
    listItems(params?: {
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "gift_card_id"?: InputValue<string>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "status"?: InputValue<Array<"bounced" | "canceled" | "failed" | "queued" | "scheduled" | "sending" | "sent" | "unconfirmed">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<GiftCardNotification>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly giftCardNotifications: GiftCardNotificationsResource;
}
