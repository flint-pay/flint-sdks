import type {
    GiftCardNotification,
    GiftCardCustomAmountBounds,
    GiftCardCustomAmountBoundsRequestInput,
    GiftCard,
    GiftCardFundingSource
} from './types-25.js';
import type { ResponseMeta, ResourceReference } from './types-51.js';
import type { MerchantWebhookEnvelope } from './types-36.js';
import type { PartnerWebhookEnvelope } from './types-42.js';
import type { InputValue } from '../runtime.js';
import type { CancelGiftCardNotificationRequestInput, CashOutGiftCardRequestInput } from './types-4.js';
import type {
    CreateGiftCardNotificationRequestInput,
    CreateGiftCardRedemptionRequestInput,
    CreateGiftCardRequestInput
} from './types-9.js';
import type { DisputesAcceptParams } from './types-22.js';
import type { MoneyValue, MoneyValueInput } from './types-37.js';
import type { AdjustGiftCardBalanceRequestInput } from './types-0.js';
import type { CloseGiftCardRequestInput } from './types-6.js';
import type { FreezeGiftCardRequestInput } from './types-24.js';
/**
 * Delivery history of a gift card notification email: its send attempts and delivery events, and
 * whether more of each exist.
 */
export type GiftCardNotificationDelivery = {
    /**
     * Recent delivery attempts for the notification. maxItems: 20. [] (Value): {@link
     * GiftCardNotificationDeliveryAttempt}. One attempt to send a gift card notification email,
     * with its attempt number, status, and start and completion times.
     */
    "attempts": Array<GiftCardNotificationDeliveryAttempt>;
    /**
     * Recent delivery events for the notification. maxItems: 50. [] (Value): {@link
     * GiftCardNotificationDeliveryEvent}. A delivery event for a gift card notification email,
     * such as accepted, delivered, bounced, or dropped, with when it occurred and was received.
     */
    "events": Array<GiftCardNotificationDeliveryEvent>;
    /** Whether the notification has more attempts than `attempts` lists. */
    "has_more_attempts": boolean;
    /** Whether the notification has more events than `events` lists. */
    "has_more_events": boolean;
};
/**
 * One attempt to send a gift card notification email, with its attempt number, status, and start
 * and completion times.
 */
export type GiftCardNotificationDeliveryAttempt = {
    /** Which attempt this is for the notification, starting at 1. Format: int64. */
    "attempt_number": number;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "completed_at"?: string;
    /** ID of this delivery attempt. Example: "edat_01KEZF7C00AX45366QP3FMY6VH". */
    "delivery_attempt_id": string;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "started_at": string;
    /**
     * Where this delivery attempt stands. Value enum: "pending", "sent", "failed", "unconfirmed".
     */
    "status": "pending" | "sent" | "failed" | "unconfirmed" | (string & {});
};
/**
 * A delivery event for a gift card notification email, such as accepted, delivered, bounced, or
 * dropped, with when it occurred and was received.
 */
export type GiftCardNotificationDeliveryEvent = {
    /**
     * ID of the delivery attempt the event belongs to. Example: "edat_01KEZF7C00AX45366QP3FMY6VH".
     */
    "delivery_attempt_id": string;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "occurred_at": string;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "received_at": string;
    /**
     * accepted means Flint's email service accepted the message for delivery; delivered means it
     * reached the recipient's mail server; bounced means delivery failed; dropped means the
     * message was not sent. Value enum: "accepted", "delivered", "bounced", "dropped".
     */
    "type": "accepted" | "delivered" | "bounced" | "dropped" | (string & {});
};
/** A page of `GiftCardNotification` objects. */
export type GiftCardNotificationListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * GiftCardNotification}. A message sent to a gift card recipient.
     */
    "data": Array<GiftCardNotification>;
    /**
     * Additional information about this response. Metadata returned with a response: the
     * `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Opaque token to send as `page_token` to retrieve the next page. Omitted when there is no
     * next page.
     */
    "next_page_token"?: string;
    /**
     * Identifier of this API request, used to correlate logs and support requests. maxLength: 128.
     * pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example: "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/**
 * Who receives a gift card notification: their `email`, optional `name` and `message`, and an
 * optional `send_at` time.
 */
export type GiftCardNotificationRecipientInput = {
    /**
     * Email address the notification is sent to. Format: email. minLength: 1. maxLength: 254.
     * Example: "buyer@example.com".
     */
    "email": string;
    /** Message included in the notification. minLength: 1. maxLength: 200. */
    "message"?: string;
    /** Name of the person the notification is addressed to. minLength: 1. maxLength: 255. */
    "name"?: string;
    /**
     * Optional whole-second send time between now and 90 days from now. Format: date-time.
     * minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "send_at"?: string | globalThis.Date;
};
/** A response containing `GiftCardNotification` data. */
export type GiftCardNotificationResponse = {
    /**
     * Resource, collection, or operation result returned by this request. A message sent to a gift
     * card recipient.
     */
    "data": GiftCardNotification;
    /**
     * Additional information about this response. Metadata returned with a response: the
     * `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Identifier of this API request, used to correlate logs and support requests. maxLength: 128.
     * pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example: "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
export type GiftCardNotificationUpdatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "created_at": string;
            "delivery"?: GiftCardNotificationDelivery;
            "gift_card_id": string;
            "gift_card_notification_id": string;
            "recipient": GiftCardPurchaseRecipient;
            "resend_of_notification_id"?: string;
            "sent_at"?: string;
            "status": "scheduled" | "pending" | "sent" | "failed" | "unconfirmed" | "canceled" | (string & {});
            "status_reason": "credential_rotated" | null | (string & {}) | null;
            "supported_actions": Array<"cancel" | (string & {})>;
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: Partial<GiftCardNotification>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "gift_card_notification.updated";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "created_at": string;
            "delivery"?: GiftCardNotificationDelivery;
            "gift_card_id": string;
            "gift_card_notification_id": string;
            "recipient": GiftCardPurchaseRecipient;
            "resend_of_notification_id"?: string;
            "sent_at"?: string;
            "status": "scheduled" | "pending" | "sent" | "failed" | "unconfirmed" | "canceled" | (string & {});
            "status_reason": "credential_rotated" | null | (string & {}) | null;
            "supported_actions": Array<"cancel" | (string & {})>;
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: Partial<GiftCardNotification>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "gift_card_notification.updated";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "gift_card_notification.updated";
});
/**
 * The `gift_card_notification.updated` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type GiftCardNotificationUpdatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.created_at (Required): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.delivery (Optional): {@link
     * GiftCardNotificationDelivery}. Included on notification retrieval. Contains the most recent
     * sending attempts and delivery events, newest first. A failed attempt describes the send
     * call; use notification.status to determine whether acceptance remains unconfirmed. Delivery
     * history of a gift card notification email: its send attempts and delivery events, and
     * whether more of each exist. object.gift_card_id (Required): string. ID of the gift card the
     * notification is about. Example: "gc_01KEZF7C00RT1618WYBM1Y94CG".
     * object.gift_card_notification_id (Required): string. Unique identifier for this gift card
     * notification, prefixed `gcn_`. Example: "gcn_01KEZF7C0023FN0HF9GH34RZA1". object.recipient
     * (Required): {@link GiftCardPurchaseRecipient}. Who the notification is sent to. Who receives
     * a gift card notification: their `email`, optional `name` and `message`, and an optional
     * `send_at` time. object.resend_of_notification_id (Optional): string. ID of the earlier
     * notification this one sends again. Example: "ntf_01KEZF7C00X0DP9KT950FYXHQ1". object.sent_at
     * (Optional): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.status (Required): string. Where sending the notification stands. Read `delivery` for
     * the attempts and email events behind it. Value enum: "scheduled", "pending", "sent",
     * "failed", "unconfirmed", "canceled". object.status_reason (Required): string or null. Why
     * the notification has its current status. credential_rotated means code rotation canceled an
     * unsent notification for the previous code. Null when no reason applies. Value enum:
     * "credential_rotated", null. object.supported_actions (Required): Array of string. Lifecycle
     * actions accepted for this notification's stored state, independent of the caller's
     * credentials. Empty when none are available. [] enum: "cancel". object.supported_actions[]
     * (Value): string. Value enum: "cancel". object.updated_at (Required): string. RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.version (Required):
     * integer. Current version of this resource's owned state. Send it as `expected_version` when
     * changing the resource to reject a stale write. Format: int64. previous_attributes
     * (Optional): object. Previous values of changed top-level fields in data.object, at this
     * delivery's API version. Nested changes include the whole previous top-level value. A value
     * is null when the field was absent before the change. Omitted when Flint did not record the
     * previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * created_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". delivery (Optional): {@link GiftCardNotificationDelivery}.
         * Included on notification retrieval. Contains the most recent sending attempts and
         * delivery events, newest first. A failed attempt describes the send call; use
         * notification.status to determine whether acceptance remains unconfirmed. Delivery
         * history of a gift card notification email: its send attempts and delivery events, and
         * whether more of each exist. gift_card_id (Required): string. ID of the gift card the
         * notification is about. Example: "gc_01KEZF7C00RT1618WYBM1Y94CG".
         * gift_card_notification_id (Required): string. Unique identifier for this gift card
         * notification, prefixed `gcn_`. Example: "gcn_01KEZF7C0023FN0HF9GH34RZA1". recipient
         * (Required): {@link GiftCardPurchaseRecipient}. Who the notification is sent to. Who
         * receives a gift card notification: their `email`, optional `name` and `message`, and an
         * optional `send_at` time. resend_of_notification_id (Optional): string. ID of the earlier
         * notification this one sends again. Example: "ntf_01KEZF7C00X0DP9KT950FYXHQ1". sent_at
         * (Optional): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". status (Required): string. Where sending the notification
         * stands. Read `delivery` for the attempts and email events behind it. Value enum:
         * "scheduled", "pending", "sent", "failed", "unconfirmed", "canceled". status_reason
         * (Required): string or null. Why the notification has its current status.
         * credential_rotated means code rotation canceled an unsent notification for the previous
         * code. Null when no reason applies. Value enum: "credential_rotated", null.
         * supported_actions (Required): Array of string. Lifecycle actions accepted for this
         * notification's stored state, independent of the caller's credentials. Empty when none
         * are available. [] enum: "cancel". supported_actions[] (Value): string. Value enum:
         * "cancel". updated_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". version (Required): integer. Current version of this resource's
         * owned state. Send it as `expected_version` when changing the resource to reject a stale
         * write. Format: int64.
         */
        "object": {
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Included on notification retrieval. Contains the most recent sending attempts and
             * delivery events, newest first. A failed attempt describes the send call; use
             * notification.status to determine whether acceptance remains unconfirmed. Delivery
             * history of a gift card notification email: its send attempts and delivery events,
             * and whether more of each exist.
             */
            "delivery"?: GiftCardNotificationDelivery;
            /**
             * ID of the gift card the notification is about. Example:
             * "gc_01KEZF7C00RT1618WYBM1Y94CG".
             */
            "gift_card_id": string;
            /**
             * Unique identifier for this gift card notification, prefixed `gcn_`. Example:
             * "gcn_01KEZF7C0023FN0HF9GH34RZA1".
             */
            "gift_card_notification_id": string;
            /**
             * Who the notification is sent to. Who receives a gift card notification: their
             * `email`, optional `name` and `message`, and an optional `send_at` time.
             */
            "recipient": GiftCardPurchaseRecipient;
            /**
             * ID of the earlier notification this one sends again. Example:
             * "ntf_01KEZF7C00X0DP9KT950FYXHQ1".
             */
            "resend_of_notification_id"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "sent_at"?: string;
            /**
             * Where sending the notification stands. Read `delivery` for the attempts and email
             * events behind it. Value enum: "scheduled", "pending", "sent", "failed",
             * "unconfirmed", "canceled".
             */
            "status": "scheduled" | "pending" | "sent" | "failed" | "unconfirmed" | "canceled" | (string & {});
            /**
             * Why the notification has its current status. credential_rotated means code rotation
             * canceled an unsent notification for the previous code. Null when no reason applies.
             * Value enum: "credential_rotated", null.
             */
            "status_reason": "credential_rotated" | null | (string & {}) | null;
            /**
             * Lifecycle actions accepted for this notification's stored state, independent of the
             * caller's credentials. Empty when none are available. [] enum: "cancel". [] (Value):
             * string. Value enum: "cancel".
             */
            "supported_actions": Array<"cancel" | (string & {})>;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Current version of this resource's owned state. Send it as `expected_version` when
             * changing the resource to reject a stale write. Format: int64.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<GiftCardNotification>;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "gift_card_notification.updated". */
    "event_type"?: "gift_card_notification.updated";
    /**
     *  environment_grant_id (Required): string. The grant authorizing delivery from this merchant
     * environment. Example: "egrt_01KEZF7C00MQQDDB7YWGXV3MXY". merchant_id (Required): string. The
     * merchant the event concerns. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". mode (Required):
     * string. Whether the installed merchant event came from live mode or a sandbox. Value enum:
     * "test", "live". partner_app_install_id (Required): string. The install connecting the
     * merchant to the partner app. Example: "pinst_01KEZF7C003HVKZR3GZAW6AFAZ". sandbox_id
     * (Optional): string. The sandbox the event came from, present only in test mode. Example:
     * "test_01KEZF7C00JC77HTMTB2XHNPE0".
     */
    "source"?: ({
        /**
         * The grant authorizing delivery from this merchant environment. Example:
         * "egrt_01KEZF7C00MQQDDB7YWGXV3MXY".
         */
        "environment_grant_id": string;
        /** The merchant the event concerns. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
        "merchant_id": string;
        /**
         * Whether the installed merchant event came from live mode or a sandbox. Value enum:
         * "test", "live".
         */
        "mode": "test" | "live" | (string & {});
        /**
         * The install connecting the merchant to the partner app. Example:
         * "pinst_01KEZF7C003HVKZR3GZAW6AFAZ".
         */
        "partner_app_install_id": string;
        /**
         * The sandbox the event came from, present only in test mode. Example:
         * "test_01KEZF7C00JC77HTMTB2XHNPE0".
         */
        "sandbox_id"?: string;
    });
});
/**
 * The `gift_card_notification.updated` webhook payload for the `merchant` event source. Fields
 * shared by merchant webhook payloads.
 */
export type GiftCardNotificationUpdatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.created_at (Required): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.delivery (Optional): {@link
     * GiftCardNotificationDelivery}. Included on notification retrieval. Contains the most recent
     * sending attempts and delivery events, newest first. A failed attempt describes the send
     * call; use notification.status to determine whether acceptance remains unconfirmed. Delivery
     * history of a gift card notification email: its send attempts and delivery events, and
     * whether more of each exist. object.gift_card_id (Required): string. ID of the gift card the
     * notification is about. Example: "gc_01KEZF7C00RT1618WYBM1Y94CG".
     * object.gift_card_notification_id (Required): string. Unique identifier for this gift card
     * notification, prefixed `gcn_`. Example: "gcn_01KEZF7C0023FN0HF9GH34RZA1". object.recipient
     * (Required): {@link GiftCardPurchaseRecipient}. Who the notification is sent to. Who receives
     * a gift card notification: their `email`, optional `name` and `message`, and an optional
     * `send_at` time. object.resend_of_notification_id (Optional): string. ID of the earlier
     * notification this one sends again. Example: "ntf_01KEZF7C00X0DP9KT950FYXHQ1". object.sent_at
     * (Optional): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.status (Required): string. Where sending the notification stands. Read `delivery` for
     * the attempts and email events behind it. Value enum: "scheduled", "pending", "sent",
     * "failed", "unconfirmed", "canceled". object.status_reason (Required): string or null. Why
     * the notification has its current status. credential_rotated means code rotation canceled an
     * unsent notification for the previous code. Null when no reason applies. Value enum:
     * "credential_rotated", null. object.supported_actions (Required): Array of string. Lifecycle
     * actions accepted for this notification's stored state, independent of the caller's
     * credentials. Empty when none are available. [] enum: "cancel". object.supported_actions[]
     * (Value): string. Value enum: "cancel". object.updated_at (Required): string. RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.version (Required):
     * integer. Current version of this resource's owned state. Send it as `expected_version` when
     * changing the resource to reject a stale write. Format: int64. previous_attributes
     * (Optional): object. Previous values of changed top-level fields in data.object, at this
     * delivery's API version. Nested changes include the whole previous top-level value. A value
     * is null when the field was absent before the change. Omitted when Flint did not record the
     * previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * created_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". delivery (Optional): {@link GiftCardNotificationDelivery}.
         * Included on notification retrieval. Contains the most recent sending attempts and
         * delivery events, newest first. A failed attempt describes the send call; use
         * notification.status to determine whether acceptance remains unconfirmed. Delivery
         * history of a gift card notification email: its send attempts and delivery events, and
         * whether more of each exist. gift_card_id (Required): string. ID of the gift card the
         * notification is about. Example: "gc_01KEZF7C00RT1618WYBM1Y94CG".
         * gift_card_notification_id (Required): string. Unique identifier for this gift card
         * notification, prefixed `gcn_`. Example: "gcn_01KEZF7C0023FN0HF9GH34RZA1". recipient
         * (Required): {@link GiftCardPurchaseRecipient}. Who the notification is sent to. Who
         * receives a gift card notification: their `email`, optional `name` and `message`, and an
         * optional `send_at` time. resend_of_notification_id (Optional): string. ID of the earlier
         * notification this one sends again. Example: "ntf_01KEZF7C00X0DP9KT950FYXHQ1". sent_at
         * (Optional): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". status (Required): string. Where sending the notification
         * stands. Read `delivery` for the attempts and email events behind it. Value enum:
         * "scheduled", "pending", "sent", "failed", "unconfirmed", "canceled". status_reason
         * (Required): string or null. Why the notification has its current status.
         * credential_rotated means code rotation canceled an unsent notification for the previous
         * code. Null when no reason applies. Value enum: "credential_rotated", null.
         * supported_actions (Required): Array of string. Lifecycle actions accepted for this
         * notification's stored state, independent of the caller's credentials. Empty when none
         * are available. [] enum: "cancel". supported_actions[] (Value): string. Value enum:
         * "cancel". updated_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". version (Required): integer. Current version of this resource's
         * owned state. Send it as `expected_version` when changing the resource to reject a stale
         * write. Format: int64.
         */
        "object": {
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Included on notification retrieval. Contains the most recent sending attempts and
             * delivery events, newest first. A failed attempt describes the send call; use
             * notification.status to determine whether acceptance remains unconfirmed. Delivery
             * history of a gift card notification email: its send attempts and delivery events,
             * and whether more of each exist.
             */
            "delivery"?: GiftCardNotificationDelivery;
            /**
             * ID of the gift card the notification is about. Example:
             * "gc_01KEZF7C00RT1618WYBM1Y94CG".
             */
            "gift_card_id": string;
            /**
             * Unique identifier for this gift card notification, prefixed `gcn_`. Example:
             * "gcn_01KEZF7C0023FN0HF9GH34RZA1".
             */
            "gift_card_notification_id": string;
            /**
             * Who the notification is sent to. Who receives a gift card notification: their
             * `email`, optional `name` and `message`, and an optional `send_at` time.
             */
            "recipient": GiftCardPurchaseRecipient;
            /**
             * ID of the earlier notification this one sends again. Example:
             * "ntf_01KEZF7C00X0DP9KT950FYXHQ1".
             */
            "resend_of_notification_id"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "sent_at"?: string;
            /**
             * Where sending the notification stands. Read `delivery` for the attempts and email
             * events behind it. Value enum: "scheduled", "pending", "sent", "failed",
             * "unconfirmed", "canceled".
             */
            "status": "scheduled" | "pending" | "sent" | "failed" | "unconfirmed" | "canceled" | (string & {});
            /**
             * Why the notification has its current status. credential_rotated means code rotation
             * canceled an unsent notification for the previous code. Null when no reason applies.
             * Value enum: "credential_rotated", null.
             */
            "status_reason": "credential_rotated" | null | (string & {}) | null;
            /**
             * Lifecycle actions accepted for this notification's stored state, independent of the
             * caller's credentials. Empty when none are available. [] enum: "cancel". [] (Value):
             * string. Value enum: "cancel".
             */
            "supported_actions": Array<"cancel" | (string & {})>;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Current version of this resource's owned state. Send it as `expected_version` when
             * changing the resource to reject a stale write. Format: int64.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<GiftCardNotification>;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "gift_card_notification.updated". */
    "event_type"?: "gift_card_notification.updated";
});
export type GiftCardNotificationsCancelParams = (InputValue<CancelGiftCardNotificationRequestInput> | {})
    & {
    /**
     * Merchant this request acts for. Required with an app-level partner app token; optional with
     * a merchant-bound one, which it must match. Other credentials may send it only with their own
     * merchant. pattern: ^mer_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Merchant-Id"?: InputValue<string>;
    /**
     * Mode of the request context, live or test. Optional; it must match the credential's mode.
     * Value enum: "test", "live".
     */
    "Flint-Mode"?: InputValue<"test" | "live">;
    /**
     * Sandbox of the request context in test mode. Optional; with a partner app token it must name
     * the sandbox the merchant granted the app, and a live token can't send it. Send it in test
     * mode so a grant moved to another sandbox can't silently change where you write. pattern:
     * ^test_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Sandbox-Id"?: InputValue<string>;
};
export type GiftCardNotificationsCreateParams = (InputValue<CreateGiftCardNotificationRequestInput>)
    & {
    /**
     * Merchant this request acts for. Required with an app-level partner app token; optional with
     * a merchant-bound one, which it must match. Other credentials may send it only with their own
     * merchant. pattern: ^mer_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Merchant-Id"?: InputValue<string>;
    /**
     * Mode of the request context, live or test. Optional; it must match the credential's mode.
     * Value enum: "test", "live".
     */
    "Flint-Mode"?: InputValue<"test" | "live">;
    /**
     * Sandbox of the request context in test mode. Optional; with a partner app token it must name
     * the sandbox the merchant granted the app, and a live token can't send it. Send it in test
     * mode so a grant moved to another sandbox can't silently change where you write. pattern:
     * ^test_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Sandbox-Id"?: InputValue<string>;
};
export type GiftCardNotificationsGetParams = DisputesAcceptParams;
export type GiftCardNotificationsListParams = {
    /** Inclusive lower bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
    /** Exact, case-sensitive filter. maxLength: 255. Example: "gc_01KEZF7C00RT1618WYBM1Y94CG". */
    "gift_card_id"?: InputValue<string>;
    /**
     * Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: 1. maximum:
     * 100. Default: 20.
     */
    "page_size"?: InputValue<number>;
    /**
     * Opaque, signed next_page_token from the previous response, bound to the list and caller.
     * Omit on the first request. You may change `page_size` between pages. Reuse it with the same
     * endpoint, filters, sort, and request context. Do not parse or construct tokens. An altered,
     * invalid, expired, or mismatched token returns a validation error.
     */
    "page_token"?: InputValue<string>;
    /**
     * Exact, case-sensitive filter. Values are trimmed and deduplicated in first-seen order; empty
     * or unknown entries are rejected. Values within this filter are ORed; separate filters are
     * ANDed. [] enum: "canceled", "failed", "pending", "scheduled", "sent", "unconfirmed". Value
     * enum: "canceled", "failed", "pending", "scheduled", "sent", "unconfirmed". anyOf[1] (Value):
     * Array of string. minItems: 1. [] enum: "canceled", "failed", "pending", "scheduled", "sent",
     * "unconfirmed". anyOf[1][] (Value): string. maxLength: 255. Value enum: "canceled", "failed",
     * "pending", "scheduled", "sent", "unconfirmed". anyOf[2] (Value): string. maxLength: 255.
     * Value enum: "canceled", "failed", "pending", "scheduled", "sent", "unconfirmed".
     */
    "status"?: InputValue<("canceled" | "failed" | "pending" | "scheduled" | "sent" | "unconfirmed")
        | readonly ("canceled" | "failed" | "pending" | "scheduled" | "sent" | "unconfirmed")[]>;
    /**
     * Merchant this request acts for. Required with an app-level partner app token; optional with
     * a merchant-bound one, which it must match. Other credentials may send it only with their own
     * merchant. pattern: ^mer_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Merchant-Id"?: InputValue<string>;
    /**
     * Mode of the request context, live or test. Optional; it must match the credential's mode.
     * Value enum: "test", "live".
     */
    "Flint-Mode"?: InputValue<"test" | "live">;
    /**
     * Sandbox of the request context in test mode. Optional; with a partner app token it must name
     * the sandbox the merchant granted the app, and a live token can't send it. Send it in test
     * mode so a grant moved to another sandbox can't silently change where you write. pattern:
     * ^test_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Sandbox-Id"?: InputValue<string>;
};
/**
 * Gift card settings on a product variant: its `face_value_money`, price mode (face value or
 * discounted), and bounds for custom amounts.
 */
export type GiftCardProductConfiguration = {
    /**
     * Minimum and maximum gift card values buyers can choose. Omit for a fixed denomination. The
     * minimum and maximum amounts a buyer can choose when buying a gift card with a custom amount.
     */
    "custom_amount_bounds"?: GiftCardCustomAmountBounds;
    /**
     * Gift card value issued for one unit of this variant, in the same currency as its unit price.
     * Currency must be USD. Amount must be between 1 and 200000 minor units, inclusive. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "face_value_money": MoneyValue;
    /**
     * Whether the gift card is sold at its face value or at a discounted price. Value enum:
     * "face_value", "discounted".
     */
    "price_mode": "face_value" | "discounted" | (string & {});
};
/**
 * Gift card settings on a product variant: its `face_value_money`, price mode (face value or
 * discounted), and bounds for custom amounts.
 */
export type GiftCardProductConfigurationRequestInput = {
    /**
     * Minimum and maximum gift card values buyers can choose. Omit for a fixed denomination. The
     * minimum and maximum amounts a buyer can choose when buying a gift card with a custom amount.
     */
    "custom_amount_bounds"?: GiftCardCustomAmountBoundsRequestInput;
    /**
     * Gift card value issued for one unit of this variant, in the same currency as its unit price.
     * Currency must be USD. Amount must be between 1 and 200000 minor units, inclusive. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "face_value_money": MoneyValueInput;
    /**
     * Whether the gift card is sold at its face value or at a discounted price. Value enum:
     * "face_value", "discounted".
     */
    "price_mode": "face_value" | "discounted";
};
/**
 * Gift card details you supply for an order line item: the `face_value_money` and the `recipient`
 * who receives the card.
 */
export type GiftCardPurchaseDetailsRequestInput = {
    /**
     * Buyer-selected face value within the gift card offer's limits. Currency must be USD. Amount
     * must be between 1 and 200000 minor units, inclusive. The amount and every computed order
     * amount must not exceed 99999999 minor units ($999,999.99 USD). Flint rejects an input or
     * calculation above this ceiling with INVALID_REQUEST and detail INVALID_VALUE at the
     * responsible input field. Lower payment option limits can apply. Monetary amount represented
     * as integer minor units plus an ISO 4217 currency code.
     */
    "face_value_money"?: MoneyValueInput;
    /**
     * Who receives the gift card. `null` when no recipient was set. Recipient of a gift card
     * purchase that you supply: `email`, optional `name` and `message`, and an optional `send_at`
     * time.
     */
    "recipient"?: GiftCardPurchaseRecipientRequestInput;
};
/**
 * The recipient of a purchased gift card: `email`, optional `name` and `message`, and an optional
 * `send_at` time.
 */
export type GiftCardPurchaseRecipient = {
    /**
     * Email address the gift card is delivered to. Format: email. minLength: 1. maxLength: 254.
     * Example: "buyer@example.com".
     */
    "email": string;
    /** Personal message included with the gift card. maxLength: 200. */
    "message"?: string;
    /** Name of the person receiving the gift card. maxLength: 255. */
    "name"?: string;
    /**
     * Optional send time between now and 90 days from now. Omission requests immediate recipient
     * notification after funding. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "send_at"?: string;
};
/**
 * Changes to the recipient of a gift card purchase when updating a line item. Send null for `name`
 * or `message` to clear it.
 */
export type GiftCardPurchaseRecipientPatchRequest = {
    /**
     * Email address the gift card is delivered to. Format: email. minLength: 1. maxLength: 254.
     * Example: "buyer@example.com".
     */
    "email": string;
    /** Send null to clear it. minLength: 1. maxLength: 200. */
    "message"?: string | null;
    /** Send null to clear it. minLength: 1. maxLength: 255. */
    "name"?: string | null;
    /**
     * Optional send time between now and 90 days from now. Omission requests immediate recipient
     * notification after funding. Format: date-time. minLength: 1. Example:
     * "2026-08-02T16:00:00Z".
     */
    "send_at"?: string;
};
/**
 * Changes to the recipient of a gift card purchase when updating a line item. Send null for `name`
 * or `message` to clear it.
 */
export type GiftCardPurchaseRecipientPatchRequestInput = {
    /**
     * Email address the gift card is delivered to. Format: email. minLength: 1. maxLength: 254.
     * Example: "buyer@example.com".
     */
    "email": string;
    /** Send null to clear it. minLength: 1. maxLength: 200. */
    "message"?: string | null;
    /** Send null to clear it. minLength: 1. maxLength: 255. */
    "name"?: string | null;
    /**
     * Optional send time between now and 90 days from now. Omission requests immediate recipient
     * notification after funding. Format: date-time. minLength: 1. Example:
     * "2026-08-02T16:00:00Z".
     */
    "send_at"?: string | globalThis.Date;
};
/**
 * Recipient of a gift card purchase that you supply: `email`, optional `name` and `message`, and
 * an optional `send_at` time.
 */
export type GiftCardPurchaseRecipientRequestInput = {
    /**
     * Email address the gift card is delivered to. Format: email. minLength: 1. maxLength: 254.
     * Example: "buyer@example.com".
     */
    "email": string;
    /** Personal message included with the gift card. minLength: 1. maxLength: 200. */
    "message"?: string;
    /** Name of the person receiving the gift card. minLength: 1. maxLength: 255. */
    "name"?: string;
    /**
     * Optional send time between now and 90 days from now. Omission requests immediate recipient
     * notification after funding. Format: date-time. minLength: 1. Example:
     * "2026-08-02T16:00:00Z".
     */
    "send_at"?: string | globalThis.Date;
};
/** An entry in a gift card load's purchase refunds. */
export type GiftCardPurchaseRefundAllocation = {
    /**
     * The part of the amount the buyer paid that this refund or reversal returns. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "consideration_money": MoneyValue;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /**
     * ID of the manual payment reversal. Set when this entry reverses a manual payment instead of
     * refunding a payment. Example: "omp_01KEZF7C007J18203RBJKB9TYE".
     */
    "order_manual_reversal_id"?: string;
    /**
     * ID of this entry in the load's purchase refunds. Example:
     * "gcpra_01KEZF7C00HJZ2YP6AENMZK5KA".
     */
    "purchase_refund_allocation_id": string;
    /**
     * How the value was restored after the refund failed. `null` when no recovery happened.
     * Records how value was recovered for a gift card purchase refund, on the original or a
     * replacement card, with the destinations that received it.
     */
    "recovery"?: GiftCardPurchaseRefundRecovery;
    /**
     * ID of the refund. `null` when the entry reverses a manual payment, which has no refund.
     * Example: "ref_01KEZF7C003DTD59WKYHEXYQ1K".
     */
    "refund_id": string | null;
    /**
     * Whether the refund has succeeded, failed, or is still pending. Value enum: "pending",
     * "succeeded", "failed".
     */
    "status": "pending" | "succeeded" | "failed" | (string & {});
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "updated_at": string;
    /**
     * Actual value lots reserved or reversed for this original cash refund. Omitted when all value
     * remains on the original load. [] (Value): {@link GiftCardPurchaseRefundValueAllocation}. A
     * gift card load and amount reserved or reversed for a gift card purchase refund.
     */
    "value_allocations"?: Array<GiftCardPurchaseRefundValueAllocation>;
    /**
     * The unspent face value this entry removes from the load. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "value_money": MoneyValue;
    /**
     * Current version of this resource's owned state. Send it as `expected_version` when changing
     * the resource to reject a stale write. Format: int64.
     */
    "version": number;
};
/**
 * Records how value was recovered for a gift card purchase refund, on the original or a
 * replacement card, with the destinations that received it.
 */
export type GiftCardPurchaseRefundRecovery = {
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /** Where the restored value went. Value enum: "original", "replacement". */
    "destination": "original" | "replacement" | (string & {});
    /**
     * The cards and loads that received the restored value. [] (Value): {@link
     * GiftCardPurchaseRefundRecoveryDestination}. A gift card and load that received recovered
     * value in a gift card purchase refund recovery, with the amount.
     */
    "destinations": Array<GiftCardPurchaseRefundRecoveryDestination>;
};
/**
 * A gift card and load that received recovered value in a gift card purchase refund recovery, with
 * the amount.
 */
export type GiftCardPurchaseRefundRecoveryDestination = {
    /** ID of the gift card that received the value. Example: "gc_01KEZF7C00RT1618WYBM1Y94CG". */
    "gift_card_id": string;
    /** ID of the load that holds the value. Example: "gcl_01KEZF7C00YJED2857SE0J6KWC". */
    "gift_card_load_id": string;
    /**
     * The value restored to the card. Monetary amount represented as integer minor units plus an
     * ISO 4217 currency code.
     */
    "value_money": MoneyValue;
};
/** A gift card load and amount reserved or reversed for a gift card purchase refund. */
export type GiftCardPurchaseRefundValueAllocation = {
    /**
     * The value allocated to the card. Monetary amount represented as integer minor units plus an
     * ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
    /** ID of the gift card that received the value. Example: "gc_01KEZF7C00RT1618WYBM1Y94CG". */
    "gift_card_id": string;
    /** ID of the load that holds the value. Example: "gcl_01KEZF7C00YJED2857SE0J6KWC". */
    "gift_card_load_id": string;
};
/**
 * Gift card value held back by a purchase refund, with the refund, the root gift card and load,
 * and the amount held.
 */
export type GiftCardPurchaseRefundValueHold = {
    /**
     * ID of the pending purchase refund entry that holds the value. Example:
     * "gcpra_01KEZF7C00HJZ2YP6AENMZK5KA".
     */
    "purchase_refund_allocation_id": string;
    /** ID of the pending refund that holds the value. Example: "ref_01KEZF7C003DTD59WKYHEXYQ1K". */
    "refund_id": string;
    /**
     * ID of the original card whose purchase is being refunded. Example:
     * "gc_01KEZF7C00RT1618WYBM1Y94CG".
     */
    "root_gift_card_id": string;
    /**
     * ID of the original funding load that is being refunded. Example:
     * "gcl_01KEZF7C00YJED2857SE0J6KWC".
     */
    "root_gift_card_load_id": string;
    /**
     * The unspent value held. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "value_money": MoneyValue;
};
/**
 * Gift card details for an order line item: the `face_value_money` and the `recipient` who
 * receives the card.
 */
export type GiftCardPurchaseRequest = {
    /**
     * Buyer-selected face value within the gift card offer's limits. Currency must be USD. Amount
     * must be between 1 and 200000 minor units, inclusive. The amount and every computed order
     * amount must not exceed 99999999 minor units ($999,999.99 USD). Flint rejects an input or
     * calculation above this ceiling with INVALID_REQUEST and detail INVALID_VALUE at the
     * responsible input field. Lower payment option limits can apply. Monetary amount represented
     * as integer minor units plus an ISO 4217 currency code.
     */
    "face_value_money"?: MoneyValue;
    /**
     * Who receives the gift card. `null` when no recipient was set. The recipient of a purchased
     * gift card: `email`, optional `name` and `message`, and an optional `send_at` time.
     */
    "recipient"?: GiftCardPurchaseRecipient;
};
/**
 * Links a gift card load to the original card and load it restores value to after a purchase
 * refund, for one unit of an order line item.
 */
export type GiftCardPurchaseRestoration = {
    /**
     * ID of the order line item that sold the gift card. Example: "li_01KEZF7C008YPRCK7VDKTGWR31".
     */
    "order_line_item_id": string;
    /**
     * ID of the gift card the purchase first issued, whose value a purchase refund or reversal
     * removed. Example: "gc_01KEZF7C00RT1618WYBM1Y94CG".
     */
    "original_gift_card_id": string;
    /**
     * ID of the load on the original card that the refund or reversal removed value from. Example:
     * "gcl_01KEZF7C00YJED2857SE0J6KWC".
     */
    "original_gift_card_load_id": string;
    /**
     * ID of the purchase refund entry on the original load whose removed value this load restores.
     * Example: "gcpra_01KEZF7C00HJZ2YP6AENMZK5KA".
     */
    "purchase_refund_allocation_id": string;
    /**
     * Which unit of the line item's quantity the card was issued for, starting at 1. Format:
     * int64.
     */
    "unit_ordinal": number;
};
/**
 * The gift card purchase details saved on an order line item: configuration, face value, price
 * paid, and recipient.
 */
export type GiftCardPurchaseSnapshot = {
    /**
     * The gift card offer's terms as they were when the line was added: price mode, face value,
     * and any custom amount bounds. anyOf[1] (Value): {@link GiftCardProductConfiguration}. Gift
     * card settings on a product variant: its `face_value_money`, price mode (face value or
     * discounted), and bounds for custom amounts. anyOf[2] (Value): null.
     */
    "configuration": ((GiftCardProductConfiguration) | (null));
    /**
     * Price paid per unit for this gift card purchase. Currency must be USD. Amount must be
     * between 1 and 200000 minor units, inclusive. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code.
     */
    "consideration_money": MoneyValue;
    /**
     * Gift card value issued per unit for this purchase. Currency must be USD. Amount must be
     * between 1 and 200000 minor units, inclusive. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code.
     */
    "face_value_money": MoneyValue;
    /**
     * Who receives the gift card. `null` when no recipient was set. The recipient of a purchased
     * gift card: `email`, optional `name` and `message`, and an optional `send_at` time.
     */
    "recipient"?: GiftCardPurchaseRecipient;
    /**
     * Reference price per unit from the frozen gift card offer. Currency must be USD. Amount must
     * be between 1 and 200000 minor units, inclusive. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code.
     */
    "reference_price_money": MoneyValue;
};
/**
 * Independent redemption resource. Operational reservations are separate from immutable posted
 * transactions. Refund captured value with `POST /v1/refunds`, using a `tender_allocations` entry
 * with `tender_type` `gift_card_redemption` and this redemption's ID. Refunds keep the redemption
 * `succeeded` and increase `refunded_money`.
 */
export type GiftCardRedemption = {
    /**
     * Whether the redemption spends the value now or reserves it to capture later. Value enum:
     * "automatic", "manual".
     */
    "capture_mode": "automatic" | "manual" | (string & {});
    /**
     * The value captured from the card so far. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "captured_money": MoneyValue;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /**
     * When an uncaptured manual reservation expires. `null` when `capture_mode` is `automatic`,
     * which posts immediately. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "expires_at": string | null;
    /** ID of the gift card the value is spent from. Example: "gc_01KEZF7C00RT1618WYBM1Y94CG". */
    "gift_card_id": string;
    /**
     * Unique identifier for this gift card redemption, prefixed `gcr_`. Example:
     * "gcr_01KEZF7C002YD2G2J734RRZTWT".
     */
    "gift_card_redemption_id": string;
    /**
     * Your Idempotency-Key for the command that created this record. `null` when Flint created it
     * or no key was sent.
     */
    "idempotency_key": string | null;
    /**
     * ID of the Flint order the redemption pays for. `null` when `source_type` is `external`.
     * Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id": string | null;
    /**
     * The order payment attempt the redemption belongs to. Set for source_type flint_order. `null`
     * when `source_type` is `external`. Example: "opat_01KEZF7C00B5PW9F2R8A4YSH5D".
     */
    "order_payment_attempt_id": string | null;
    /**
     * Total refunded against this redemption across all refunds. Each refund lists its share in
     * `tender_allocations`. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "refunded_money": MoneyValue;
    /**
     * Captured value not yet refunded. A refund allocation to this redemption can be at most this
     * amount. Zero while the redemption is reserved, canceled, or expired. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "remaining_refundable_money": MoneyValue;
    /**
     * The amount requested when the redemption was created. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "requested_money": MoneyValue;
    /**
     * The value held on the card for this redemption while it is reserved. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "reserved_money": MoneyValue;
    /**
     * Your reference for the sale the redemption pays for. Set for source_type external. `null`
     * when `source_type` is `flint_order`. maxLength: 255.
     */
    "sale_reference": string | null;
    /**
     * What the redemption pays for: a sale you record, or a Flint order's payment. Value enum:
     * "external", "flint_order".
     */
    "source_type": "external" | "flint_order" | (string & {});
    /**
     * Where the redemption is in its lifecycle. Value enum: "reserved", "succeeded", "canceled",
     * "expired".
     */
    "status": "reserved" | "succeeded" | "canceled" | "expired" | (string & {});
    /**
     * Lifecycle actions accepted for the stored redemption, independent of the caller's
     * credentials. capture is available only before expires_at; cancel remains available until the
     * reservation is resolved. Reservations for Flint orders are resolved through their payment
     * attempt and list no actions. [] enum: "capture", "cancel". [] (Value): string. Value enum:
     * "capture", "cancel".
     */
    "supported_actions": Array<"capture" | "cancel" | (string & {})>;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "updated_at": string;
    /**
     * Current version of this resource's owned state. Send it as `expected_version` when changing
     * the resource to reject a stale write. Format: int64.
     */
    "version": number;
};
export type GiftCardRedemptionCreatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "capture_mode": "automatic" | "manual" | (string & {});
            "captured_money": MoneyValue;
            "created_at": string;
            "expires_at": string | null;
            "gift_card_id": string;
            "gift_card_redemption_id": string;
            "idempotency_key": string | null;
            "order_id": string | null;
            "order_payment_attempt_id": string | null;
            "refunded_money": MoneyValue;
            "remaining_refundable_money": MoneyValue;
            "requested_money": MoneyValue;
            "reserved_money": MoneyValue;
            "sale_reference": string | null;
            "source_type": "external" | "flint_order" | (string & {});
            "status": "reserved" | "succeeded" | "canceled" | "expired" | (string & {});
            "supported_actions": Array<"capture" | "cancel" | (string & {})>;
            "updated_at": string;
            "version": number;
        };
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "gift_card_redemption.created";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "capture_mode": "automatic" | "manual" | (string & {});
            "captured_money": MoneyValue;
            "created_at": string;
            "expires_at": string | null;
            "gift_card_id": string;
            "gift_card_redemption_id": string;
            "idempotency_key": string | null;
            "order_id": string | null;
            "order_payment_attempt_id": string | null;
            "refunded_money": MoneyValue;
            "remaining_refundable_money": MoneyValue;
            "requested_money": MoneyValue;
            "reserved_money": MoneyValue;
            "sale_reference": string | null;
            "source_type": "external" | "flint_order" | (string & {});
            "status": "reserved" | "succeeded" | "canceled" | "expired" | (string & {});
            "supported_actions": Array<"capture" | "cancel" | (string & {})>;
            "updated_at": string;
            "version": number;
        };
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "gift_card_redemption.created";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "gift_card_redemption.created";
});
/**
 * The `gift_card_redemption.created` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type GiftCardRedemptionCreatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.capture_mode (Required): string. Whether the redemption spends the
     * value now or reserves it to capture later. Value enum: "automatic", "manual".
     * object.captured_money (Required): {@link MoneyValue}. The value captured from the card so
     * far. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * object.created_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.expires_at (Required): string or null. When an uncaptured
     * manual reservation expires. `null` when `capture_mode` is `automatic`, which posts
     * immediately. Format: date-time. Example: "2026-08-02T16:00:00Z". object.gift_card_id
     * (Required): string. ID of the gift card the value is spent from. Example:
     * "gc_01KEZF7C00RT1618WYBM1Y94CG". object.gift_card_redemption_id (Required): string. Unique
     * identifier for this gift card redemption, prefixed `gcr_`. Example:
     * "gcr_01KEZF7C002YD2G2J734RRZTWT". object.idempotency_key (Required): string or null. Your
     * Idempotency-Key for the command that created this record. `null` when Flint created it or no
     * key was sent. object.order_id (Required): string or null. ID of the Flint order the
     * redemption pays for. `null` when `source_type` is `external`. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A". object.order_payment_attempt_id (Required): string or
     * null. The order payment attempt the redemption belongs to. Set for source_type flint_order.
     * `null` when `source_type` is `external`. Example: "opat_01KEZF7C00B5PW9F2R8A4YSH5D".
     * object.refunded_money (Required): {@link MoneyValue}. Total refunded against this redemption
     * across all refunds. Each refund lists its share in `tender_allocations`. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     * object.remaining_refundable_money (Required): {@link MoneyValue}. Captured value not yet
     * refunded. A refund allocation to this redemption can be at most this amount. Zero while the
     * redemption is reserved, canceled, or expired. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code. object.requested_money (Required): {@link MoneyValue}.
     * The amount requested when the redemption was created. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code. object.reserved_money (Required): {@link
     * MoneyValue}. The value held on the card for this redemption while it is reserved. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     * object.sale_reference (Required): string or null. Your reference for the sale the redemption
     * pays for. Set for source_type external. `null` when `source_type` is `flint_order`.
     * maxLength: 255. object.source_type (Required): string. What the redemption pays for: a sale
     * you record, or a Flint order's payment. Value enum: "external", "flint_order". object.status
     * (Required): string. Where the redemption is in its lifecycle. Value enum: "reserved",
     * "succeeded", "canceled", "expired". object.supported_actions (Required): Array of string.
     * Lifecycle actions accepted for the stored redemption, independent of the caller's
     * credentials. capture is available only before expires_at; cancel remains available until the
     * reservation is resolved. Reservations for Flint orders are resolved through their payment
     * attempt and list no actions. [] enum: "capture", "cancel". object.supported_actions[]
     * (Value): string. Value enum: "capture", "cancel". object.updated_at (Required): string.
     * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.version
     * (Required): integer. Current version of this resource's owned state. Send it as
     * `expected_version` when changing the resource to reject a stale write. Format: int64.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * capture_mode (Required): string. Whether the redemption spends the value now or reserves
         * it to capture later. Value enum: "automatic", "manual". captured_money (Required):
         * {@link MoneyValue}. The value captured from the card so far. Monetary amount represented
         * as integer minor units plus an ISO 4217 currency code. created_at (Required): string.
         * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". expires_at
         * (Required): string or null. When an uncaptured manual reservation expires. `null` when
         * `capture_mode` is `automatic`, which posts immediately. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". gift_card_id (Required): string. ID of the gift card the value
         * is spent from. Example: "gc_01KEZF7C00RT1618WYBM1Y94CG". gift_card_redemption_id
         * (Required): string. Unique identifier for this gift card redemption, prefixed `gcr_`.
         * Example: "gcr_01KEZF7C002YD2G2J734RRZTWT". idempotency_key (Required): string or null.
         * Your Idempotency-Key for the command that created this record. `null` when Flint created
         * it or no key was sent. order_id (Required): string or null. ID of the Flint order the
         * redemption pays for. `null` when `source_type` is `external`. Example:
         * "ord_01KEZF7C0054GQKJ142A8X367A". order_payment_attempt_id (Required): string or null.
         * The order payment attempt the redemption belongs to. Set for source_type flint_order.
         * `null` when `source_type` is `external`. Example: "opat_01KEZF7C00B5PW9F2R8A4YSH5D".
         * refunded_money (Required): {@link MoneyValue}. Total refunded against this redemption
         * across all refunds. Each refund lists its share in `tender_allocations`. Monetary amount
         * represented as integer minor units plus an ISO 4217 currency code.
         * remaining_refundable_money (Required): {@link MoneyValue}. Captured value not yet
         * refunded. A refund allocation to this redemption can be at most this amount. Zero while
         * the redemption is reserved, canceled, or expired. Monetary amount represented as integer
         * minor units plus an ISO 4217 currency code. requested_money (Required): {@link
         * MoneyValue}. The amount requested when the redemption was created. Monetary amount
         * represented as integer minor units plus an ISO 4217 currency code. reserved_money
         * (Required): {@link MoneyValue}. The value held on the card for this redemption while it
         * is reserved. Monetary amount represented as integer minor units plus an ISO 4217
         * currency code. sale_reference (Required): string or null. Your reference for the sale
         * the redemption pays for. Set for source_type external. `null` when `source_type` is
         * `flint_order`. maxLength: 255. source_type (Required): string. What the redemption pays
         * for: a sale you record, or a Flint order's payment. Value enum: "external",
         * "flint_order". status (Required): string. Where the redemption is in its lifecycle.
         * Value enum: "reserved", "succeeded", "canceled", "expired". supported_actions
         * (Required): Array of string. Lifecycle actions accepted for the stored redemption,
         * independent of the caller's credentials. capture is available only before expires_at;
         * cancel remains available until the reservation is resolved. Reservations for Flint
         * orders are resolved through their payment attempt and list no actions. [] enum:
         * "capture", "cancel". supported_actions[] (Value): string. Value enum: "capture",
         * "cancel". updated_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". version (Required): integer. Current version of this resource's
         * owned state. Send it as `expected_version` when changing the resource to reject a stale
         * write. Format: int64.
         */
        "object": {
            /**
             * Whether the redemption spends the value now or reserves it to capture later. Value
             * enum: "automatic", "manual".
             */
            "capture_mode": "automatic" | "manual" | (string & {});
            /**
             * The value captured from the card so far. Monetary amount represented as integer
             * minor units plus an ISO 4217 currency code.
             */
            "captured_money": MoneyValue;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * When an uncaptured manual reservation expires. `null` when `capture_mode` is
             * `automatic`, which posts immediately. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "expires_at": string | null;
            /**
             * ID of the gift card the value is spent from. Example:
             * "gc_01KEZF7C00RT1618WYBM1Y94CG".
             */
            "gift_card_id": string;
            /**
             * Unique identifier for this gift card redemption, prefixed `gcr_`. Example:
             * "gcr_01KEZF7C002YD2G2J734RRZTWT".
             */
            "gift_card_redemption_id": string;
            /**
             * Your Idempotency-Key for the command that created this record. `null` when Flint
             * created it or no key was sent.
             */
            "idempotency_key": string | null;
            /**
             * ID of the Flint order the redemption pays for. `null` when `source_type` is
             * `external`. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
             */
            "order_id": string | null;
            /**
             * The order payment attempt the redemption belongs to. Set for source_type
             * flint_order. `null` when `source_type` is `external`. Example:
             * "opat_01KEZF7C00B5PW9F2R8A4YSH5D".
             */
            "order_payment_attempt_id": string | null;
            /**
             * Total refunded against this redemption across all refunds. Each refund lists its
             * share in `tender_allocations`. Monetary amount represented as integer minor units
             * plus an ISO 4217 currency code.
             */
            "refunded_money": MoneyValue;
            /**
             * Captured value not yet refunded. A refund allocation to this redemption can be at
             * most this amount. Zero while the redemption is reserved, canceled, or expired.
             * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
             */
            "remaining_refundable_money": MoneyValue;
            /**
             * The amount requested when the redemption was created. Monetary amount represented as
             * integer minor units plus an ISO 4217 currency code.
             */
            "requested_money": MoneyValue;
            /**
             * The value held on the card for this redemption while it is reserved. Monetary amount
             * represented as integer minor units plus an ISO 4217 currency code.
             */
            "reserved_money": MoneyValue;
            /**
             * Your reference for the sale the redemption pays for. Set for source_type external.
             * `null` when `source_type` is `flint_order`. maxLength: 255.
             */
            "sale_reference": string | null;
            /**
             * What the redemption pays for: a sale you record, or a Flint order's payment. Value
             * enum: "external", "flint_order".
             */
            "source_type": "external" | "flint_order" | (string & {});
            /**
             * Where the redemption is in its lifecycle. Value enum: "reserved", "succeeded",
             * "canceled", "expired".
             */
            "status": "reserved" | "succeeded" | "canceled" | "expired" | (string & {});
            /**
             * Lifecycle actions accepted for the stored redemption, independent of the caller's
             * credentials. capture is available only before expires_at; cancel remains available
             * until the reservation is resolved. Reservations for Flint orders are resolved
             * through their payment attempt and list no actions. [] enum: "capture", "cancel". []
             * (Value): string. Value enum: "capture", "cancel".
             */
            "supported_actions": Array<"capture" | "cancel" | (string & {})>;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Current version of this resource's owned state. Send it as `expected_version` when
             * changing the resource to reject a stale write. Format: int64.
             */
            "version": number;
        };
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "gift_card_redemption.created". */
    "event_type"?: "gift_card_redemption.created";
    /**
     *  environment_grant_id (Required): string. The grant authorizing delivery from this merchant
     * environment. Example: "egrt_01KEZF7C00MQQDDB7YWGXV3MXY". merchant_id (Required): string. The
     * merchant the event concerns. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". mode (Required):
     * string. Whether the installed merchant event came from live mode or a sandbox. Value enum:
     * "test", "live". partner_app_install_id (Required): string. The install connecting the
     * merchant to the partner app. Example: "pinst_01KEZF7C003HVKZR3GZAW6AFAZ". sandbox_id
     * (Optional): string. The sandbox the event came from, present only in test mode. Example:
     * "test_01KEZF7C00JC77HTMTB2XHNPE0".
     */
    "source"?: ({
        /**
         * The grant authorizing delivery from this merchant environment. Example:
         * "egrt_01KEZF7C00MQQDDB7YWGXV3MXY".
         */
        "environment_grant_id": string;
        /** The merchant the event concerns. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
        "merchant_id": string;
        /**
         * Whether the installed merchant event came from live mode or a sandbox. Value enum:
         * "test", "live".
         */
        "mode": "test" | "live" | (string & {});
        /**
         * The install connecting the merchant to the partner app. Example:
         * "pinst_01KEZF7C003HVKZR3GZAW6AFAZ".
         */
        "partner_app_install_id": string;
        /**
         * The sandbox the event came from, present only in test mode. Example:
         * "test_01KEZF7C00JC77HTMTB2XHNPE0".
         */
        "sandbox_id"?: string;
    });
});
/**
 * The `gift_card_redemption.created` webhook payload for the `merchant` event source. Fields
 * shared by merchant webhook payloads.
 */
export type GiftCardRedemptionCreatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.capture_mode (Required): string. Whether the redemption spends the
     * value now or reserves it to capture later. Value enum: "automatic", "manual".
     * object.captured_money (Required): {@link MoneyValue}. The value captured from the card so
     * far. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * object.created_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.expires_at (Required): string or null. When an uncaptured
     * manual reservation expires. `null` when `capture_mode` is `automatic`, which posts
     * immediately. Format: date-time. Example: "2026-08-02T16:00:00Z". object.gift_card_id
     * (Required): string. ID of the gift card the value is spent from. Example:
     * "gc_01KEZF7C00RT1618WYBM1Y94CG". object.gift_card_redemption_id (Required): string. Unique
     * identifier for this gift card redemption, prefixed `gcr_`. Example:
     * "gcr_01KEZF7C002YD2G2J734RRZTWT". object.idempotency_key (Required): string or null. Your
     * Idempotency-Key for the command that created this record. `null` when Flint created it or no
     * key was sent. object.order_id (Required): string or null. ID of the Flint order the
     * redemption pays for. `null` when `source_type` is `external`. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A". object.order_payment_attempt_id (Required): string or
     * null. The order payment attempt the redemption belongs to. Set for source_type flint_order.
     * `null` when `source_type` is `external`. Example: "opat_01KEZF7C00B5PW9F2R8A4YSH5D".
     * object.refunded_money (Required): {@link MoneyValue}. Total refunded against this redemption
     * across all refunds. Each refund lists its share in `tender_allocations`. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     * object.remaining_refundable_money (Required): {@link MoneyValue}. Captured value not yet
     * refunded. A refund allocation to this redemption can be at most this amount. Zero while the
     * redemption is reserved, canceled, or expired. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code. object.requested_money (Required): {@link MoneyValue}.
     * The amount requested when the redemption was created. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code. object.reserved_money (Required): {@link
     * MoneyValue}. The value held on the card for this redemption while it is reserved. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     * object.sale_reference (Required): string or null. Your reference for the sale the redemption
     * pays for. Set for source_type external. `null` when `source_type` is `flint_order`.
     * maxLength: 255. object.source_type (Required): string. What the redemption pays for: a sale
     * you record, or a Flint order's payment. Value enum: "external", "flint_order". object.status
     * (Required): string. Where the redemption is in its lifecycle. Value enum: "reserved",
     * "succeeded", "canceled", "expired". object.supported_actions (Required): Array of string.
     * Lifecycle actions accepted for the stored redemption, independent of the caller's
     * credentials. capture is available only before expires_at; cancel remains available until the
     * reservation is resolved. Reservations for Flint orders are resolved through their payment
     * attempt and list no actions. [] enum: "capture", "cancel". object.supported_actions[]
     * (Value): string. Value enum: "capture", "cancel". object.updated_at (Required): string.
     * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.version
     * (Required): integer. Current version of this resource's owned state. Send it as
     * `expected_version` when changing the resource to reject a stale write. Format: int64.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * capture_mode (Required): string. Whether the redemption spends the value now or reserves
         * it to capture later. Value enum: "automatic", "manual". captured_money (Required):
         * {@link MoneyValue}. The value captured from the card so far. Monetary amount represented
         * as integer minor units plus an ISO 4217 currency code. created_at (Required): string.
         * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". expires_at
         * (Required): string or null. When an uncaptured manual reservation expires. `null` when
         * `capture_mode` is `automatic`, which posts immediately. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". gift_card_id (Required): string. ID of the gift card the value
         * is spent from. Example: "gc_01KEZF7C00RT1618WYBM1Y94CG". gift_card_redemption_id
         * (Required): string. Unique identifier for this gift card redemption, prefixed `gcr_`.
         * Example: "gcr_01KEZF7C002YD2G2J734RRZTWT". idempotency_key (Required): string or null.
         * Your Idempotency-Key for the command that created this record. `null` when Flint created
         * it or no key was sent. order_id (Required): string or null. ID of the Flint order the
         * redemption pays for. `null` when `source_type` is `external`. Example:
         * "ord_01KEZF7C0054GQKJ142A8X367A". order_payment_attempt_id (Required): string or null.
         * The order payment attempt the redemption belongs to. Set for source_type flint_order.
         * `null` when `source_type` is `external`. Example: "opat_01KEZF7C00B5PW9F2R8A4YSH5D".
         * refunded_money (Required): {@link MoneyValue}. Total refunded against this redemption
         * across all refunds. Each refund lists its share in `tender_allocations`. Monetary amount
         * represented as integer minor units plus an ISO 4217 currency code.
         * remaining_refundable_money (Required): {@link MoneyValue}. Captured value not yet
         * refunded. A refund allocation to this redemption can be at most this amount. Zero while
         * the redemption is reserved, canceled, or expired. Monetary amount represented as integer
         * minor units plus an ISO 4217 currency code. requested_money (Required): {@link
         * MoneyValue}. The amount requested when the redemption was created. Monetary amount
         * represented as integer minor units plus an ISO 4217 currency code. reserved_money
         * (Required): {@link MoneyValue}. The value held on the card for this redemption while it
         * is reserved. Monetary amount represented as integer minor units plus an ISO 4217
         * currency code. sale_reference (Required): string or null. Your reference for the sale
         * the redemption pays for. Set for source_type external. `null` when `source_type` is
         * `flint_order`. maxLength: 255. source_type (Required): string. What the redemption pays
         * for: a sale you record, or a Flint order's payment. Value enum: "external",
         * "flint_order". status (Required): string. Where the redemption is in its lifecycle.
         * Value enum: "reserved", "succeeded", "canceled", "expired". supported_actions
         * (Required): Array of string. Lifecycle actions accepted for the stored redemption,
         * independent of the caller's credentials. capture is available only before expires_at;
         * cancel remains available until the reservation is resolved. Reservations for Flint
         * orders are resolved through their payment attempt and list no actions. [] enum:
         * "capture", "cancel". supported_actions[] (Value): string. Value enum: "capture",
         * "cancel". updated_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". version (Required): integer. Current version of this resource's
         * owned state. Send it as `expected_version` when changing the resource to reject a stale
         * write. Format: int64.
         */
        "object": {
            /**
             * Whether the redemption spends the value now or reserves it to capture later. Value
             * enum: "automatic", "manual".
             */
            "capture_mode": "automatic" | "manual" | (string & {});
            /**
             * The value captured from the card so far. Monetary amount represented as integer
             * minor units plus an ISO 4217 currency code.
             */
            "captured_money": MoneyValue;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * When an uncaptured manual reservation expires. `null` when `capture_mode` is
             * `automatic`, which posts immediately. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "expires_at": string | null;
            /**
             * ID of the gift card the value is spent from. Example:
             * "gc_01KEZF7C00RT1618WYBM1Y94CG".
             */
            "gift_card_id": string;
            /**
             * Unique identifier for this gift card redemption, prefixed `gcr_`. Example:
             * "gcr_01KEZF7C002YD2G2J734RRZTWT".
             */
            "gift_card_redemption_id": string;
            /**
             * Your Idempotency-Key for the command that created this record. `null` when Flint
             * created it or no key was sent.
             */
            "idempotency_key": string | null;
            /**
             * ID of the Flint order the redemption pays for. `null` when `source_type` is
             * `external`. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
             */
            "order_id": string | null;
            /**
             * The order payment attempt the redemption belongs to. Set for source_type
             * flint_order. `null` when `source_type` is `external`. Example:
             * "opat_01KEZF7C00B5PW9F2R8A4YSH5D".
             */
            "order_payment_attempt_id": string | null;
            /**
             * Total refunded against this redemption across all refunds. Each refund lists its
             * share in `tender_allocations`. Monetary amount represented as integer minor units
             * plus an ISO 4217 currency code.
             */
            "refunded_money": MoneyValue;
            /**
             * Captured value not yet refunded. A refund allocation to this redemption can be at
             * most this amount. Zero while the redemption is reserved, canceled, or expired.
             * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
             */
            "remaining_refundable_money": MoneyValue;
            /**
             * The amount requested when the redemption was created. Monetary amount represented as
             * integer minor units plus an ISO 4217 currency code.
             */
            "requested_money": MoneyValue;
            /**
             * The value held on the card for this redemption while it is reserved. Monetary amount
             * represented as integer minor units plus an ISO 4217 currency code.
             */
            "reserved_money": MoneyValue;
            /**
             * Your reference for the sale the redemption pays for. Set for source_type external.
             * `null` when `source_type` is `flint_order`. maxLength: 255.
             */
            "sale_reference": string | null;
            /**
             * What the redemption pays for: a sale you record, or a Flint order's payment. Value
             * enum: "external", "flint_order".
             */
            "source_type": "external" | "flint_order" | (string & {});
            /**
             * Where the redemption is in its lifecycle. Value enum: "reserved", "succeeded",
             * "canceled", "expired".
             */
            "status": "reserved" | "succeeded" | "canceled" | "expired" | (string & {});
            /**
             * Lifecycle actions accepted for the stored redemption, independent of the caller's
             * credentials. capture is available only before expires_at; cancel remains available
             * until the reservation is resolved. Reservations for Flint orders are resolved
             * through their payment attempt and list no actions. [] enum: "capture", "cancel". []
             * (Value): string. Value enum: "capture", "cancel".
             */
            "supported_actions": Array<"capture" | "cancel" | (string & {})>;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Current version of this resource's owned state. Send it as `expected_version` when
             * changing the resource to reject a stale write. Format: int64.
             */
            "version": number;
        };
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "gift_card_redemption.created". */
    "event_type"?: "gift_card_redemption.created";
});
/** A page of `GiftCardRedemption` objects. */
export type GiftCardRedemptionListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * GiftCardRedemption}. Independent redemption resource. Operational reservations are separate
     * from immutable posted transactions. Refund captured value with `POST /v1/refunds`, using a
     * `tender_allocations` entry with `tender_type` `gift_card_redemption` and this redemption's
     * ID. Refunds keep the redemption `succeeded` and increase `refunded_money`.
     */
    "data": Array<GiftCardRedemption>;
    /**
     * Additional information about this response. Metadata returned with a response: the
     * `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Opaque token to send as `page_token` to retrieve the next page. Omitted when there is no
     * next page.
     */
    "next_page_token"?: string;
    /**
     * Identifier of this API request, used to correlate logs and support requests. maxLength: 128.
     * pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example: "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/** A response containing `GiftCardRedemption` data. */
export type GiftCardRedemptionResponse = {
    /**
     * Resource, collection, or operation result returned by this request. Independent redemption
     * resource. Operational reservations are separate from immutable posted transactions. Refund
     * captured value with `POST /v1/refunds`, using a `tender_allocations` entry with
     * `tender_type` `gift_card_redemption` and this redemption's ID. Refunds keep the redemption
     * `succeeded` and increase `refunded_money`.
     */
    "data": GiftCardRedemption;
    /**
     * Additional information about this response. Metadata returned with a response: the
     * `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Identifier of this API request, used to correlate logs and support requests. maxLength: 128.
     * pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example: "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/**
 * Result of redeeming a gift card: the updated gift card, the redemption, and the resulting
 * transactions.
 */
export type GiftCardRedemptionResult = {
    /**
     * The gift card after the command. Merchant-issued purchased gift card. Posted balance
     * includes reserved value; available value is balance minus reservations. Frozen value remains
     * part of outstanding liability. Gift cards are independent resources and cannot be
     * transferred across merchants or currencies.
     */
    "gift_card": GiftCard;
    /**
     * The redemption the command created or changed. Independent redemption resource. Operational
     * reservations are separate from immutable posted transactions. Refund captured value with
     * `POST /v1/refunds`, using a `tender_allocations` entry with `tender_type`
     * `gift_card_redemption` and this redemption's ID. Refunds keep the redemption `succeeded` and
     * increase `refunded_money`.
     */
    "gift_card_redemption": GiftCardRedemption;
    /**
     * The transactions the command posted to the card. [] (Value): {@link GiftCardTransaction}.
     * Immutable posted financial movement with signed amount, per-card sequence, merchant sequence
     * and balance snapshots. Corrections create new transactions.
     */
    "gift_card_transactions": Array<GiftCardTransaction>;
};
/** A response containing `GiftCardRedemptionResult` data. */
export type GiftCardRedemptionResultResponse = {
    /**
     * Resource, collection, or operation result returned by this request. Result of redeeming a
     * gift card: the updated gift card, the redemption, and the resulting transactions.
     */
    "data": GiftCardRedemptionResult;
    /**
     * Additional information about this response. Metadata returned with a response: the
     * `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Identifier of this API request, used to correlate logs and support requests. maxLength: 128.
     * pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example: "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
export type GiftCardRedemptionUpdatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "capture_mode": "automatic" | "manual" | (string & {});
            "captured_money": MoneyValue;
            "created_at": string;
            "expires_at": string | null;
            "gift_card_id": string;
            "gift_card_redemption_id": string;
            "idempotency_key": string | null;
            "order_id": string | null;
            "order_payment_attempt_id": string | null;
            "refunded_money": MoneyValue;
            "remaining_refundable_money": MoneyValue;
            "requested_money": MoneyValue;
            "reserved_money": MoneyValue;
            "sale_reference": string | null;
            "source_type": "external" | "flint_order" | (string & {});
            "status": "reserved" | "succeeded" | "canceled" | "expired" | (string & {});
            "supported_actions": Array<"capture" | "cancel" | (string & {})>;
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: Partial<GiftCardRedemption>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "gift_card_redemption.updated";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "capture_mode": "automatic" | "manual" | (string & {});
            "captured_money": MoneyValue;
            "created_at": string;
            "expires_at": string | null;
            "gift_card_id": string;
            "gift_card_redemption_id": string;
            "idempotency_key": string | null;
            "order_id": string | null;
            "order_payment_attempt_id": string | null;
            "refunded_money": MoneyValue;
            "remaining_refundable_money": MoneyValue;
            "requested_money": MoneyValue;
            "reserved_money": MoneyValue;
            "sale_reference": string | null;
            "source_type": "external" | "flint_order" | (string & {});
            "status": "reserved" | "succeeded" | "canceled" | "expired" | (string & {});
            "supported_actions": Array<"capture" | "cancel" | (string & {})>;
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: Partial<GiftCardRedemption>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "gift_card_redemption.updated";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "gift_card_redemption.updated";
});
/**
 * The `gift_card_redemption.updated` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type GiftCardRedemptionUpdatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.capture_mode (Required): string. Whether the redemption spends the
     * value now or reserves it to capture later. Value enum: "automatic", "manual".
     * object.captured_money (Required): {@link MoneyValue}. The value captured from the card so
     * far. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * object.created_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.expires_at (Required): string or null. When an uncaptured
     * manual reservation expires. `null` when `capture_mode` is `automatic`, which posts
     * immediately. Format: date-time. Example: "2026-08-02T16:00:00Z". object.gift_card_id
     * (Required): string. ID of the gift card the value is spent from. Example:
     * "gc_01KEZF7C00RT1618WYBM1Y94CG". object.gift_card_redemption_id (Required): string. Unique
     * identifier for this gift card redemption, prefixed `gcr_`. Example:
     * "gcr_01KEZF7C002YD2G2J734RRZTWT". object.idempotency_key (Required): string or null. Your
     * Idempotency-Key for the command that created this record. `null` when Flint created it or no
     * key was sent. object.order_id (Required): string or null. ID of the Flint order the
     * redemption pays for. `null` when `source_type` is `external`. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A". object.order_payment_attempt_id (Required): string or
     * null. The order payment attempt the redemption belongs to. Set for source_type flint_order.
     * `null` when `source_type` is `external`. Example: "opat_01KEZF7C00B5PW9F2R8A4YSH5D".
     * object.refunded_money (Required): {@link MoneyValue}. Total refunded against this redemption
     * across all refunds. Each refund lists its share in `tender_allocations`. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     * object.remaining_refundable_money (Required): {@link MoneyValue}. Captured value not yet
     * refunded. A refund allocation to this redemption can be at most this amount. Zero while the
     * redemption is reserved, canceled, or expired. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code. object.requested_money (Required): {@link MoneyValue}.
     * The amount requested when the redemption was created. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code. object.reserved_money (Required): {@link
     * MoneyValue}. The value held on the card for this redemption while it is reserved. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     * object.sale_reference (Required): string or null. Your reference for the sale the redemption
     * pays for. Set for source_type external. `null` when `source_type` is `flint_order`.
     * maxLength: 255. object.source_type (Required): string. What the redemption pays for: a sale
     * you record, or a Flint order's payment. Value enum: "external", "flint_order". object.status
     * (Required): string. Where the redemption is in its lifecycle. Value enum: "reserved",
     * "succeeded", "canceled", "expired". object.supported_actions (Required): Array of string.
     * Lifecycle actions accepted for the stored redemption, independent of the caller's
     * credentials. capture is available only before expires_at; cancel remains available until the
     * reservation is resolved. Reservations for Flint orders are resolved through their payment
     * attempt and list no actions. [] enum: "capture", "cancel". object.supported_actions[]
     * (Value): string. Value enum: "capture", "cancel". object.updated_at (Required): string.
     * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.version
     * (Required): integer. Current version of this resource's owned state. Send it as
     * `expected_version` when changing the resource to reject a stale write. Format: int64.
     * previous_attributes (Optional): object. Previous values of changed top-level fields in
     * data.object, at this delivery's API version. Nested changes include the whole previous
     * top-level value. A value is null when the field was absent before the change. Omitted when
     * Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * capture_mode (Required): string. Whether the redemption spends the value now or reserves
         * it to capture later. Value enum: "automatic", "manual". captured_money (Required):
         * {@link MoneyValue}. The value captured from the card so far. Monetary amount represented
         * as integer minor units plus an ISO 4217 currency code. created_at (Required): string.
         * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". expires_at
         * (Required): string or null. When an uncaptured manual reservation expires. `null` when
         * `capture_mode` is `automatic`, which posts immediately. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". gift_card_id (Required): string. ID of the gift card the value
         * is spent from. Example: "gc_01KEZF7C00RT1618WYBM1Y94CG". gift_card_redemption_id
         * (Required): string. Unique identifier for this gift card redemption, prefixed `gcr_`.
         * Example: "gcr_01KEZF7C002YD2G2J734RRZTWT". idempotency_key (Required): string or null.
         * Your Idempotency-Key for the command that created this record. `null` when Flint created
         * it or no key was sent. order_id (Required): string or null. ID of the Flint order the
         * redemption pays for. `null` when `source_type` is `external`. Example:
         * "ord_01KEZF7C0054GQKJ142A8X367A". order_payment_attempt_id (Required): string or null.
         * The order payment attempt the redemption belongs to. Set for source_type flint_order.
         * `null` when `source_type` is `external`. Example: "opat_01KEZF7C00B5PW9F2R8A4YSH5D".
         * refunded_money (Required): {@link MoneyValue}. Total refunded against this redemption
         * across all refunds. Each refund lists its share in `tender_allocations`. Monetary amount
         * represented as integer minor units plus an ISO 4217 currency code.
         * remaining_refundable_money (Required): {@link MoneyValue}. Captured value not yet
         * refunded. A refund allocation to this redemption can be at most this amount. Zero while
         * the redemption is reserved, canceled, or expired. Monetary amount represented as integer
         * minor units plus an ISO 4217 currency code. requested_money (Required): {@link
         * MoneyValue}. The amount requested when the redemption was created. Monetary amount
         * represented as integer minor units plus an ISO 4217 currency code. reserved_money
         * (Required): {@link MoneyValue}. The value held on the card for this redemption while it
         * is reserved. Monetary amount represented as integer minor units plus an ISO 4217
         * currency code. sale_reference (Required): string or null. Your reference for the sale
         * the redemption pays for. Set for source_type external. `null` when `source_type` is
         * `flint_order`. maxLength: 255. source_type (Required): string. What the redemption pays
         * for: a sale you record, or a Flint order's payment. Value enum: "external",
         * "flint_order". status (Required): string. Where the redemption is in its lifecycle.
         * Value enum: "reserved", "succeeded", "canceled", "expired". supported_actions
         * (Required): Array of string. Lifecycle actions accepted for the stored redemption,
         * independent of the caller's credentials. capture is available only before expires_at;
         * cancel remains available until the reservation is resolved. Reservations for Flint
         * orders are resolved through their payment attempt and list no actions. [] enum:
         * "capture", "cancel". supported_actions[] (Value): string. Value enum: "capture",
         * "cancel". updated_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". version (Required): integer. Current version of this resource's
         * owned state. Send it as `expected_version` when changing the resource to reject a stale
         * write. Format: int64.
         */
        "object": {
            /**
             * Whether the redemption spends the value now or reserves it to capture later. Value
             * enum: "automatic", "manual".
             */
            "capture_mode": "automatic" | "manual" | (string & {});
            /**
             * The value captured from the card so far. Monetary amount represented as integer
             * minor units plus an ISO 4217 currency code.
             */
            "captured_money": MoneyValue;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * When an uncaptured manual reservation expires. `null` when `capture_mode` is
             * `automatic`, which posts immediately. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "expires_at": string | null;
            /**
             * ID of the gift card the value is spent from. Example:
             * "gc_01KEZF7C00RT1618WYBM1Y94CG".
             */
            "gift_card_id": string;
            /**
             * Unique identifier for this gift card redemption, prefixed `gcr_`. Example:
             * "gcr_01KEZF7C002YD2G2J734RRZTWT".
             */
            "gift_card_redemption_id": string;
            /**
             * Your Idempotency-Key for the command that created this record. `null` when Flint
             * created it or no key was sent.
             */
            "idempotency_key": string | null;
            /**
             * ID of the Flint order the redemption pays for. `null` when `source_type` is
             * `external`. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
             */
            "order_id": string | null;
            /**
             * The order payment attempt the redemption belongs to. Set for source_type
             * flint_order. `null` when `source_type` is `external`. Example:
             * "opat_01KEZF7C00B5PW9F2R8A4YSH5D".
             */
            "order_payment_attempt_id": string | null;
            /**
             * Total refunded against this redemption across all refunds. Each refund lists its
             * share in `tender_allocations`. Monetary amount represented as integer minor units
             * plus an ISO 4217 currency code.
             */
            "refunded_money": MoneyValue;
            /**
             * Captured value not yet refunded. A refund allocation to this redemption can be at
             * most this amount. Zero while the redemption is reserved, canceled, or expired.
             * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
             */
            "remaining_refundable_money": MoneyValue;
            /**
             * The amount requested when the redemption was created. Monetary amount represented as
             * integer minor units plus an ISO 4217 currency code.
             */
            "requested_money": MoneyValue;
            /**
             * The value held on the card for this redemption while it is reserved. Monetary amount
             * represented as integer minor units plus an ISO 4217 currency code.
             */
            "reserved_money": MoneyValue;
            /**
             * Your reference for the sale the redemption pays for. Set for source_type external.
             * `null` when `source_type` is `flint_order`. maxLength: 255.
             */
            "sale_reference": string | null;
            /**
             * What the redemption pays for: a sale you record, or a Flint order's payment. Value
             * enum: "external", "flint_order".
             */
            "source_type": "external" | "flint_order" | (string & {});
            /**
             * Where the redemption is in its lifecycle. Value enum: "reserved", "succeeded",
             * "canceled", "expired".
             */
            "status": "reserved" | "succeeded" | "canceled" | "expired" | (string & {});
            /**
             * Lifecycle actions accepted for the stored redemption, independent of the caller's
             * credentials. capture is available only before expires_at; cancel remains available
             * until the reservation is resolved. Reservations for Flint orders are resolved
             * through their payment attempt and list no actions. [] enum: "capture", "cancel". []
             * (Value): string. Value enum: "capture", "cancel".
             */
            "supported_actions": Array<"capture" | "cancel" | (string & {})>;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Current version of this resource's owned state. Send it as `expected_version` when
             * changing the resource to reject a stale write. Format: int64.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<GiftCardRedemption>;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "gift_card_redemption.updated". */
    "event_type"?: "gift_card_redemption.updated";
    /**
     *  environment_grant_id (Required): string. The grant authorizing delivery from this merchant
     * environment. Example: "egrt_01KEZF7C00MQQDDB7YWGXV3MXY". merchant_id (Required): string. The
     * merchant the event concerns. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". mode (Required):
     * string. Whether the installed merchant event came from live mode or a sandbox. Value enum:
     * "test", "live". partner_app_install_id (Required): string. The install connecting the
     * merchant to the partner app. Example: "pinst_01KEZF7C003HVKZR3GZAW6AFAZ". sandbox_id
     * (Optional): string. The sandbox the event came from, present only in test mode. Example:
     * "test_01KEZF7C00JC77HTMTB2XHNPE0".
     */
    "source"?: ({
        /**
         * The grant authorizing delivery from this merchant environment. Example:
         * "egrt_01KEZF7C00MQQDDB7YWGXV3MXY".
         */
        "environment_grant_id": string;
        /** The merchant the event concerns. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
        "merchant_id": string;
        /**
         * Whether the installed merchant event came from live mode or a sandbox. Value enum:
         * "test", "live".
         */
        "mode": "test" | "live" | (string & {});
        /**
         * The install connecting the merchant to the partner app. Example:
         * "pinst_01KEZF7C003HVKZR3GZAW6AFAZ".
         */
        "partner_app_install_id": string;
        /**
         * The sandbox the event came from, present only in test mode. Example:
         * "test_01KEZF7C00JC77HTMTB2XHNPE0".
         */
        "sandbox_id"?: string;
    });
});
/**
 * The `gift_card_redemption.updated` webhook payload for the `merchant` event source. Fields
 * shared by merchant webhook payloads.
 */
export type GiftCardRedemptionUpdatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.capture_mode (Required): string. Whether the redemption spends the
     * value now or reserves it to capture later. Value enum: "automatic", "manual".
     * object.captured_money (Required): {@link MoneyValue}. The value captured from the card so
     * far. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * object.created_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.expires_at (Required): string or null. When an uncaptured
     * manual reservation expires. `null` when `capture_mode` is `automatic`, which posts
     * immediately. Format: date-time. Example: "2026-08-02T16:00:00Z". object.gift_card_id
     * (Required): string. ID of the gift card the value is spent from. Example:
     * "gc_01KEZF7C00RT1618WYBM1Y94CG". object.gift_card_redemption_id (Required): string. Unique
     * identifier for this gift card redemption, prefixed `gcr_`. Example:
     * "gcr_01KEZF7C002YD2G2J734RRZTWT". object.idempotency_key (Required): string or null. Your
     * Idempotency-Key for the command that created this record. `null` when Flint created it or no
     * key was sent. object.order_id (Required): string or null. ID of the Flint order the
     * redemption pays for. `null` when `source_type` is `external`. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A". object.order_payment_attempt_id (Required): string or
     * null. The order payment attempt the redemption belongs to. Set for source_type flint_order.
     * `null` when `source_type` is `external`. Example: "opat_01KEZF7C00B5PW9F2R8A4YSH5D".
     * object.refunded_money (Required): {@link MoneyValue}. Total refunded against this redemption
     * across all refunds. Each refund lists its share in `tender_allocations`. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     * object.remaining_refundable_money (Required): {@link MoneyValue}. Captured value not yet
     * refunded. A refund allocation to this redemption can be at most this amount. Zero while the
     * redemption is reserved, canceled, or expired. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code. object.requested_money (Required): {@link MoneyValue}.
     * The amount requested when the redemption was created. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code. object.reserved_money (Required): {@link
     * MoneyValue}. The value held on the card for this redemption while it is reserved. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     * object.sale_reference (Required): string or null. Your reference for the sale the redemption
     * pays for. Set for source_type external. `null` when `source_type` is `flint_order`.
     * maxLength: 255. object.source_type (Required): string. What the redemption pays for: a sale
     * you record, or a Flint order's payment. Value enum: "external", "flint_order". object.status
     * (Required): string. Where the redemption is in its lifecycle. Value enum: "reserved",
     * "succeeded", "canceled", "expired". object.supported_actions (Required): Array of string.
     * Lifecycle actions accepted for the stored redemption, independent of the caller's
     * credentials. capture is available only before expires_at; cancel remains available until the
     * reservation is resolved. Reservations for Flint orders are resolved through their payment
     * attempt and list no actions. [] enum: "capture", "cancel". object.supported_actions[]
     * (Value): string. Value enum: "capture", "cancel". object.updated_at (Required): string.
     * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.version
     * (Required): integer. Current version of this resource's owned state. Send it as
     * `expected_version` when changing the resource to reject a stale write. Format: int64.
     * previous_attributes (Optional): object. Previous values of changed top-level fields in
     * data.object, at this delivery's API version. Nested changes include the whole previous
     * top-level value. A value is null when the field was absent before the change. Omitted when
     * Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * capture_mode (Required): string. Whether the redemption spends the value now or reserves
         * it to capture later. Value enum: "automatic", "manual". captured_money (Required):
         * {@link MoneyValue}. The value captured from the card so far. Monetary amount represented
         * as integer minor units plus an ISO 4217 currency code. created_at (Required): string.
         * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". expires_at
         * (Required): string or null. When an uncaptured manual reservation expires. `null` when
         * `capture_mode` is `automatic`, which posts immediately. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". gift_card_id (Required): string. ID of the gift card the value
         * is spent from. Example: "gc_01KEZF7C00RT1618WYBM1Y94CG". gift_card_redemption_id
         * (Required): string. Unique identifier for this gift card redemption, prefixed `gcr_`.
         * Example: "gcr_01KEZF7C002YD2G2J734RRZTWT". idempotency_key (Required): string or null.
         * Your Idempotency-Key for the command that created this record. `null` when Flint created
         * it or no key was sent. order_id (Required): string or null. ID of the Flint order the
         * redemption pays for. `null` when `source_type` is `external`. Example:
         * "ord_01KEZF7C0054GQKJ142A8X367A". order_payment_attempt_id (Required): string or null.
         * The order payment attempt the redemption belongs to. Set for source_type flint_order.
         * `null` when `source_type` is `external`. Example: "opat_01KEZF7C00B5PW9F2R8A4YSH5D".
         * refunded_money (Required): {@link MoneyValue}. Total refunded against this redemption
         * across all refunds. Each refund lists its share in `tender_allocations`. Monetary amount
         * represented as integer minor units plus an ISO 4217 currency code.
         * remaining_refundable_money (Required): {@link MoneyValue}. Captured value not yet
         * refunded. A refund allocation to this redemption can be at most this amount. Zero while
         * the redemption is reserved, canceled, or expired. Monetary amount represented as integer
         * minor units plus an ISO 4217 currency code. requested_money (Required): {@link
         * MoneyValue}. The amount requested when the redemption was created. Monetary amount
         * represented as integer minor units plus an ISO 4217 currency code. reserved_money
         * (Required): {@link MoneyValue}. The value held on the card for this redemption while it
         * is reserved. Monetary amount represented as integer minor units plus an ISO 4217
         * currency code. sale_reference (Required): string or null. Your reference for the sale
         * the redemption pays for. Set for source_type external. `null` when `source_type` is
         * `flint_order`. maxLength: 255. source_type (Required): string. What the redemption pays
         * for: a sale you record, or a Flint order's payment. Value enum: "external",
         * "flint_order". status (Required): string. Where the redemption is in its lifecycle.
         * Value enum: "reserved", "succeeded", "canceled", "expired". supported_actions
         * (Required): Array of string. Lifecycle actions accepted for the stored redemption,
         * independent of the caller's credentials. capture is available only before expires_at;
         * cancel remains available until the reservation is resolved. Reservations for Flint
         * orders are resolved through their payment attempt and list no actions. [] enum:
         * "capture", "cancel". supported_actions[] (Value): string. Value enum: "capture",
         * "cancel". updated_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". version (Required): integer. Current version of this resource's
         * owned state. Send it as `expected_version` when changing the resource to reject a stale
         * write. Format: int64.
         */
        "object": {
            /**
             * Whether the redemption spends the value now or reserves it to capture later. Value
             * enum: "automatic", "manual".
             */
            "capture_mode": "automatic" | "manual" | (string & {});
            /**
             * The value captured from the card so far. Monetary amount represented as integer
             * minor units plus an ISO 4217 currency code.
             */
            "captured_money": MoneyValue;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * When an uncaptured manual reservation expires. `null` when `capture_mode` is
             * `automatic`, which posts immediately. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "expires_at": string | null;
            /**
             * ID of the gift card the value is spent from. Example:
             * "gc_01KEZF7C00RT1618WYBM1Y94CG".
             */
            "gift_card_id": string;
            /**
             * Unique identifier for this gift card redemption, prefixed `gcr_`. Example:
             * "gcr_01KEZF7C002YD2G2J734RRZTWT".
             */
            "gift_card_redemption_id": string;
            /**
             * Your Idempotency-Key for the command that created this record. `null` when Flint
             * created it or no key was sent.
             */
            "idempotency_key": string | null;
            /**
             * ID of the Flint order the redemption pays for. `null` when `source_type` is
             * `external`. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
             */
            "order_id": string | null;
            /**
             * The order payment attempt the redemption belongs to. Set for source_type
             * flint_order. `null` when `source_type` is `external`. Example:
             * "opat_01KEZF7C00B5PW9F2R8A4YSH5D".
             */
            "order_payment_attempt_id": string | null;
            /**
             * Total refunded against this redemption across all refunds. Each refund lists its
             * share in `tender_allocations`. Monetary amount represented as integer minor units
             * plus an ISO 4217 currency code.
             */
            "refunded_money": MoneyValue;
            /**
             * Captured value not yet refunded. A refund allocation to this redemption can be at
             * most this amount. Zero while the redemption is reserved, canceled, or expired.
             * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
             */
            "remaining_refundable_money": MoneyValue;
            /**
             * The amount requested when the redemption was created. Monetary amount represented as
             * integer minor units plus an ISO 4217 currency code.
             */
            "requested_money": MoneyValue;
            /**
             * The value held on the card for this redemption while it is reserved. Monetary amount
             * represented as integer minor units plus an ISO 4217 currency code.
             */
            "reserved_money": MoneyValue;
            /**
             * Your reference for the sale the redemption pays for. Set for source_type external.
             * `null` when `source_type` is `flint_order`. maxLength: 255.
             */
            "sale_reference": string | null;
            /**
             * What the redemption pays for: a sale you record, or a Flint order's payment. Value
             * enum: "external", "flint_order".
             */
            "source_type": "external" | "flint_order" | (string & {});
            /**
             * Where the redemption is in its lifecycle. Value enum: "reserved", "succeeded",
             * "canceled", "expired".
             */
            "status": "reserved" | "succeeded" | "canceled" | "expired" | (string & {});
            /**
             * Lifecycle actions accepted for the stored redemption, independent of the caller's
             * credentials. capture is available only before expires_at; cancel remains available
             * until the reservation is resolved. Reservations for Flint orders are resolved
             * through their payment attempt and list no actions. [] enum: "capture", "cancel". []
             * (Value): string. Value enum: "capture", "cancel".
             */
            "supported_actions": Array<"capture" | "cancel" | (string & {})>;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Current version of this resource's owned state. Send it as `expected_version` when
             * changing the resource to reject a stale write. Format: int64.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<GiftCardRedemption>;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "gift_card_redemption.updated". */
    "event_type"?: "gift_card_redemption.updated";
});
export type GiftCardRedemptionsCancelParams = (InputValue<GiftCardVersionRequestInput> | {
    "expected_version"?: never;
})
    & {
    /**
     * Merchant this request acts for. Required with an app-level partner app token; optional with
     * a merchant-bound one, which it must match. Other credentials may send it only with their own
     * merchant. pattern: ^mer_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Merchant-Id"?: InputValue<string>;
    /**
     * Mode of the request context, live or test. Optional; it must match the credential's mode.
     * Value enum: "test", "live".
     */
    "Flint-Mode"?: InputValue<"test" | "live">;
    /**
     * Sandbox of the request context in test mode. Optional; with a partner app token it must name
     * the sandbox the merchant granted the app, and a live token can't send it. Send it in test
     * mode so a grant moved to another sandbox can't silently change where you write. pattern:
     * ^test_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Sandbox-Id"?: InputValue<string>;
};
export type GiftCardRedemptionsCaptureParams = GiftCardRedemptionsCancelParams;
export type GiftCardRedemptionsCreateParams = (CreateGiftCardRedemptionRequestInput)
    & {
    /**
     * Merchant this request acts for. Required with an app-level partner app token; optional with
     * a merchant-bound one, which it must match. Other credentials may send it only with their own
     * merchant. pattern: ^mer_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Merchant-Id"?: InputValue<string>;
    /**
     * Mode of the request context, live or test. Optional; it must match the credential's mode.
     * Value enum: "test", "live".
     */
    "Flint-Mode"?: InputValue<"test" | "live">;
    /**
     * Sandbox of the request context in test mode. Optional; with a partner app token it must name
     * the sandbox the merchant granted the app, and a live token can't send it. Send it in test
     * mode so a grant moved to another sandbox can't silently change where you write. pattern:
     * ^test_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Sandbox-Id"?: InputValue<string>;
};
export type GiftCardRedemptionsGetParams = DisputesAcceptParams;
export type GiftCardRedemptionsListParams = {
    /** Inclusive lower bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
    /** Exact, case-sensitive filter. maxLength: 255. Example: "gc_01KEZF7C00RT1618WYBM1Y94CG". */
    "gift_card_id"?: InputValue<string>;
    /**
     * Filter by the original Idempotency-Key, after trimming surrounding whitespace. Matching is
     * exact and case-sensitive. Returns current authorized resources, not the recorded response. A
     * pending resource does not prove that the operation succeeded, and an empty list does not
     * prove that it had no effect. minLength: 1. maxLength: 255.
     */
    "idempotency_key"?: InputValue<string>;
    /** Exact, case-sensitive filter. maxLength: 255. Example: "ord_01KEZF7C0054GQKJ142A8X367A". */
    "order_id"?: InputValue<string>;
    /**
     * Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: 1. maximum:
     * 100. Default: 20.
     */
    "page_size"?: InputValue<number>;
    /**
     * Opaque, signed next_page_token from the previous response, bound to the list and caller.
     * Omit on the first request. You may change `page_size` between pages. Reuse it with the same
     * endpoint, filters, sort, and request context. Do not parse or construct tokens. An altered,
     * invalid, expired, or mismatched token returns a validation error.
     */
    "page_token"?: InputValue<string>;
    /**
     * Exact, case-sensitive filter on your reference for the sale. Matches only external
     * redemptions. minLength: 1. maxLength: 255.
     */
    "sale_reference"?: InputValue<string>;
    /**
     * Exact, case-sensitive filter. Values are trimmed and deduplicated in first-seen order; empty
     * or unknown entries are rejected. Values within this filter are ORed; separate filters are
     * ANDed. [] enum: "external", "flint_order". Value enum: "external", "flint_order". anyOf[1]
     * (Value): Array of string. minItems: 1. [] enum: "external", "flint_order". anyOf[1][]
     * (Value): string. maxLength: 255. Value enum: "external", "flint_order". anyOf[2] (Value):
     * string. maxLength: 255. Value enum: "external", "flint_order".
     */
    "source_type"?: InputValue<("external" | "flint_order") | readonly ("external" | "flint_order")[]>;
    /**
     * Exact, case-sensitive filter. Values are trimmed and deduplicated in first-seen order; empty
     * or unknown entries are rejected. Values within this filter are ORed; separate filters are
     * ANDed. [] enum: "canceled", "expired", "reserved", "succeeded". Value enum: "canceled",
     * "expired", "reserved", "succeeded". anyOf[1] (Value): Array of string. minItems: 1. [] enum:
     * "canceled", "expired", "reserved", "succeeded". anyOf[1][] (Value): string. maxLength: 255.
     * Value enum: "canceled", "expired", "reserved", "succeeded". anyOf[2] (Value): string.
     * maxLength: 255. Value enum: "canceled", "expired", "reserved", "succeeded".
     */
    "status"?: InputValue<("canceled" | "expired" | "reserved" | "succeeded")
        | readonly ("canceled" | "expired" | "reserved" | "succeeded")[]>;
    /**
     * Merchant this request acts for. Required with an app-level partner app token; optional with
     * a merchant-bound one, which it must match. Other credentials may send it only with their own
     * merchant. pattern: ^mer_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Merchant-Id"?: InputValue<string>;
    /**
     * Mode of the request context, live or test. Optional; it must match the credential's mode.
     * Value enum: "test", "live".
     */
    "Flint-Mode"?: InputValue<"test" | "live">;
    /**
     * Sandbox of the request context in test mode. Optional; with a partner app token it must name
     * the sandbox the merchant granted the app, and a live token can't send it. Send it in test
     * mode so a grant moved to another sandbox can't silently change where you write. pattern:
     * ^test_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Sandbox-Id"?: InputValue<string>;
};
/**
 * Traces a gift card load made by a refund back to its original funding source, root gift card and
 * load, and source refund.
 */
export type GiftCardRefundProvenance = {
    /**
     * What the buyer paid for the original funding load. It describes that load, never a new
     * payment. `null` when no payment amount was recorded. anyOf[1] (Value): {@link MoneyValue}.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code. anyOf[2]
     * (Value): null.
     */
    "original_consideration_money": ((MoneyValue) | (null));
    /**
     * When the original funding load was created. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "original_created_at": string;
    /**
     * Where the original funding value came from. Where the value of a gift card load came from,
     * such as an external payment, a Flint payment, an import, or an adjustment, with your
     * reference for it. funding_source_type (Required): string. Where the value came from. Value
     * enum: "external_payment", "flint_payment", "flint_manual_payment", "import", "adjustment",
     * "store_credit". customer_id (Optional): string. ID of the customer the funding is attributed
     * to. Required for `external_payment` and `flint_manual_payment`; optional for `import`.
     * minLength: 1. maxLength: 255. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     * external_reference_id (Required): string. Your reference for the payment or import record
     * that funded this value, such as a POS sale ID. Required; 1 to 255 characters. minLength: 1.
     * maxLength: 255. Example: "warehouse-1842". order_id (Optional): string. ID of the order that
     * funded the value. Required for `flint_manual_payment` and `store_credit`; not accepted for
     * `external_payment` or `import`. minLength: 1. maxLength: 255. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A". order_manual_payment_id (Optional): string. ID of the
     * manual payment on the order that funded the value. Required for `flint_manual_payment`.
     * minLength: 1. maxLength: 255. Example: "omp_01KEZF7C007J18203RBJKB9TYE". payment_intent_id
     * (Optional): string. The original payment for flint_payment or store_credit value. For
     * standalone paid funding, use a captured payment intent without an order_id. Order-linked
     * payments fund purchased cards or store credit through their order. minLength: 1. maxLength:
     * 255. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". refund_id (Optional): string. Refund that
     * issued this value. Present only when funding_source_type is store_credit. minLength: 1.
     * Example: "ref_01KEZF7C003DTD59WKYHEXYQ1K". oneOf[1] (Value): {@link
     * GiftCardFundingSourceExternalPayment}. The `external_payment` variant of
     * `GiftCardFundingSource`. oneOf[2] (Value): {@link GiftCardFundingSourceFlintPayment}. The
     * `flint_payment` variant of `GiftCardFundingSource`. oneOf[3] (Value): {@link
     * GiftCardFundingSourceFlintManualPayment}. The `flint_manual_payment` variant of
     * `GiftCardFundingSource`. oneOf[4] (Value): {@link GiftCardFundingSourceImport}. The `import`
     * variant of `GiftCardFundingSource`. oneOf[5] (Value): {@link
     * GiftCardFundingSourceAdjustment}. The `adjustment` variant of `GiftCardFundingSource`.
     * oneOf[6] (Value): {@link GiftCardFundingSourceGiftCardRefund}. The `gift_card_refund`
     * variant of `GiftCardFundingSource`. oneOf[7] (Value): {@link
     * GiftCardFundingSourceGiftCardPurchaseRefundRecovery}. The
     * `gift_card_purchase_refund_recovery` variant of `GiftCardFundingSource`. oneOf[8] (Value):
     * {@link GiftCardFundingSourceStoreCredit}. The `store_credit` variant of
     * `GiftCardFundingSource`.
     */
    "original_source": ({
        /**
         * Value enum: "external_payment", "flint_payment", "flint_manual_payment", "import",
         * "adjustment", "store_credit".
         */
        "funding_source_type"?: unknown;
    })
        & (Exclude<GiftCardFundingSource & object, readonly unknown[]>);
    /**
     * When the original funding value was received, as recorded on that load. `null` when no
     * source time was recorded. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "original_source_created_at": string | null;
    /**
     * ID of the refund tender allocation that created this load. Empty when a failed gift card
     * purchase refund created it. Example: "rta_01KEZF7C00KQJTFKK6C47RSMB8".
     */
    "refund_allocation_id": string;
    /**
     * ID of the gift card that holds the original funding load. It stays the same through any
     * number of replacement refunds. Example: "gc_01KEZF7C00RT1618WYBM1Y94CG".
     */
    "root_gift_card_id": string;
    /**
     * ID of the original funding load. It stays the same through any number of replacement
     * refunds. Example: "gcl_01KEZF7C00YJED2857SE0J6KWC".
     */
    "root_gift_card_load_id": string;
    /**
     * ID of the gift card the refunded value came from. Example: "gc_01KEZF7C00RT1618WYBM1Y94CG".
     */
    "source_gift_card_id": string;
    /**
     * ID of the redemption whose refund created this load. Empty when a failed gift card purchase
     * refund created it. Example: "gcr_01KEZF7C002YD2G2J734RRZTWT".
     */
    "source_gift_card_redemption_id": string;
    /**
     * ID of the gift card purchase refund allocation whose failure created this load. Present only
     * then. Example: "gcpra_01KEZF7C00HJZ2YP6AENMZK5KA".
     */
    "source_purchase_refund_allocation_id"?: string;
    /**
     * ID of the refund whose failure created this load. Present only when a failed gift card
     * purchase refund created it. Example: "ref_01KEZF7C003DTD59WKYHEXYQ1K".
     */
    "source_refund_id"?: string;
};
/** A response containing `GiftCard` data. */
export type GiftCardResponse = {
    /**
     * Resource, collection, or operation result returned by this request. Merchant-issued
     * purchased gift card. Posted balance includes reserved value; available value is balance
     * minus reservations. Frozen value remains part of outstanding liability. Gift cards are
     * independent resources and cannot be transferred across merchants or currencies.
     */
    "data": GiftCard;
    /**
     * Additional information about this response. Metadata returned with a response: the
     * `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Identifier of this API request, used to correlate logs and support requests. maxLength: 128.
     * pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example: "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/**
 * A restriction on a gift card, either a merchant freeze or a funding dispute, with its reason or
 * dispute details.
 */
export type GiftCardRestriction = {
    /**
     * Present only for type funding_dispute. The dispute on the payment that funded value on this
     * card. pattern: ^du_[0-9A-HJKMNP-TV-Z]{26}$. Example: "du_01KEZF7C00DEJSF1KTXRT4BBQD".
     */
    "dispute_id"?: string;
    /**
     * Present only for type funding_dispute. A copy of the funding dispute's current state. lost
     * means the loss must be honored with a gift card funding disposition before the card can be
     * spent. Value enum: "open", "lost".
     */
    "dispute_status"?: "open" | "lost" | (string & {});
    /**
     * Present only for type merchant_freeze. The merchant's freeze reason. Value enum:
     * "suspicious_activity", "customer_request", "support_issue".
     */
    "reason"?: "suspicious_activity" | "customer_request" | "support_issue" | (string & {});
    /**
     * The kind of restriction. merchant_freeze is a freeze requested by the merchant.
     * funding_dispute is a dispute on the payment that funded value on this card. Value enum:
     * "merchant_freeze", "funding_dispute".
     */
    "type": "merchant_freeze" | "funding_dispute" | (string & {});
};
/**
 * Immutable posted financial movement with signed amount, per-card sequence, merchant sequence and
 * balance snapshots. Corrections create new transactions.
 */
export type GiftCardTransaction = {
    /**
     * Signed change to the card's balance: positive amounts add value and negative amounts remove
     * it. balance_after_money is balance_before_money plus this amount; funding_loss_accepted
     * records a decision and moves 0. Signed monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
    /**
     * The card's balance immediately after this transaction. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "balance_after_money": MoneyValue;
    /**
     * The card's balance immediately before this transaction. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "balance_before_money": MoneyValue;
    /**
     * Your reference for the cash you paid the buyer outside Flint. `null` when the transaction is
     * not a cash_out. maxLength: 255.
     */
    "cash_out_reference": string | null;
    /**
     * Gift card whose balance this transaction changed. Example: "gc_01KEZF7C00RT1618WYBM1Y94CG".
     */
    "gift_card_id": string;
    /** Stable identifier of the transaction. Example: "gct_01KEZF7C006Q1VC3M2DXJ6T936". */
    "gift_card_transaction_id": string;
    /**
     * Your Idempotency-Key for the command that created this record. `null` when Flint created it
     * or no key was sent.
     */
    "idempotency_key": string | null;
    /**
     * Position of this transaction among all of your gift card transactions in this environment.
     * It increases by one with each posted transaction, and the transaction list is ordered by it.
     * Format: int64.
     */
    "merchant_sequence": number;
    /**
     * Order this transaction belongs to, when there is one. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id"?: string;
    /**
     * When the transaction was posted to the card. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "posted_at": string;
    /**
     * Your adjustment reason on adjustment transactions, and customer_request on cash_out. `null`
     * when the transaction is any other type. Value enum: "complimentary",
     * "balance_accidentally_decreased", "support_issue", "suspicious_activity",
     * "balance_accidentally_increased", "customer_request", null.
     */
    "reason": "complimentary"
        | "balance_accidentally_decreased"
        | "support_issue"
        | "suspicious_activity"
        | "balance_accidentally_increased"
        | "customer_request"
        | null
        | (string & {})
        | null;
    /**
     * Position of this transaction in the card's history. It increases by one with each
     * transaction posted to the card. Format: int64.
     */
    "sequence": number;
    /**
     * The resource that caused this transaction, such as a gift_card_load, gift_card_redemption,
     * refund, or gift_card_funding_disposition. `null` when the cause has no public resource.
     * anyOf[1] (Value): {@link ResourceReference}. A reference to another resource by
     * `resource_type` and `resource_id`. anyOf[2] (Value): null.
     */
    "source": ((ResourceReference) | (null));
    /**
     * Kind of movement, such as load, redeem, refund, adjustment, or cash_out. Value enum: "load",
     * "import", "redeem", "refund", "refund_transfer", "adjustment", "cash_out",
     * "purchase_reversal", "funding_loss_accepted", "purchase_refund_recovery",
     * "purchase_refund_recovery_transfer".
     */
    "transaction_type": "load"
        | "import"
        | "redeem"
        | "refund"
        | "refund_transfer"
        | "adjustment"
        | "cash_out"
        | "purchase_reversal"
        | "funding_loss_accepted"
        | "purchase_refund_recovery"
        | "purchase_refund_recovery_transfer"
        | (string & {});
};
export type GiftCardTransactionCreatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "amount_money": MoneyValue;
            "balance_after_money": MoneyValue;
            "balance_before_money": MoneyValue;
            "cash_out_reference": string | null;
            "gift_card_id": string;
            "gift_card_transaction_id": string;
            "idempotency_key": string | null;
            "merchant_sequence": number;
            "order_id"?: string;
            "posted_at": string;
            "reason": "complimentary"
                | "balance_accidentally_decreased"
                | "support_issue"
                | "suspicious_activity"
                | "balance_accidentally_increased"
                | "customer_request"
                | null
                | (string & {})
                | null;
            "sequence": number;
            "source": ((ResourceReference) | (null));
            "transaction_type": "load"
                | "import"
                | "redeem"
                | "refund"
                | "refund_transfer"
                | "adjustment"
                | "cash_out"
                | "purchase_reversal"
                | "funding_loss_accepted"
                | "purchase_refund_recovery"
                | "purchase_refund_recovery_transfer"
                | (string & {});
        };
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "gift_card_transaction.created";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "amount_money": MoneyValue;
            "balance_after_money": MoneyValue;
            "balance_before_money": MoneyValue;
            "cash_out_reference": string | null;
            "gift_card_id": string;
            "gift_card_transaction_id": string;
            "idempotency_key": string | null;
            "merchant_sequence": number;
            "order_id"?: string;
            "posted_at": string;
            "reason": "complimentary"
                | "balance_accidentally_decreased"
                | "support_issue"
                | "suspicious_activity"
                | "balance_accidentally_increased"
                | "customer_request"
                | null
                | (string & {})
                | null;
            "sequence": number;
            "source": ((ResourceReference) | (null));
            "transaction_type": "load"
                | "import"
                | "redeem"
                | "refund"
                | "refund_transfer"
                | "adjustment"
                | "cash_out"
                | "purchase_reversal"
                | "funding_loss_accepted"
                | "purchase_refund_recovery"
                | "purchase_refund_recovery_transfer"
                | (string & {});
        };
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "gift_card_transaction.created";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "gift_card_transaction.created";
});
/**
 * The `gift_card_transaction.created` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type GiftCardTransactionCreatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.amount_money (Required): {@link MoneyValue}. Signed change to the
     * card's balance: positive amounts add value and negative amounts remove it.
     * balance_after_money is balance_before_money plus this amount; funding_loss_accepted records
     * a decision and moves 0. Signed monetary amount represented as integer minor units plus an
     * ISO 4217 currency code. object.balance_after_money (Required): {@link MoneyValue}. The
     * card's balance immediately after this transaction. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code. object.balance_before_money (Required): {@link
     * MoneyValue}. The card's balance immediately before this transaction. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code. object.cash_out_reference
     * (Required): string or null. Your reference for the cash you paid the buyer outside Flint.
     * `null` when the transaction is not a cash_out. maxLength: 255. object.gift_card_id
     * (Required): string. Gift card whose balance this transaction changed. Example:
     * "gc_01KEZF7C00RT1618WYBM1Y94CG". object.gift_card_transaction_id (Required): string. Stable
     * identifier of the transaction. Example: "gct_01KEZF7C006Q1VC3M2DXJ6T936".
     * object.idempotency_key (Required): string or null. Your Idempotency-Key for the command that
     * created this record. `null` when Flint created it or no key was sent.
     * object.merchant_sequence (Required): integer. Position of this transaction among all of your
     * gift card transactions in this environment. It increases by one with each posted
     * transaction, and the transaction list is ordered by it. Format: int64. object.order_id
     * (Optional): string. Order this transaction belongs to, when there is one. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A". object.posted_at (Required): string. When the transaction
     * was posted to the card. Format: date-time. Example: "2026-08-02T16:00:00Z". object.reason
     * (Required): string or null. Your adjustment reason on adjustment transactions, and
     * customer_request on cash_out. `null` when the transaction is any other type. Value enum:
     * "complimentary", "balance_accidentally_decreased", "support_issue", "suspicious_activity",
     * "balance_accidentally_increased", "customer_request", null. object.sequence (Required):
     * integer. Position of this transaction in the card's history. It increases by one with each
     * transaction posted to the card. Format: int64. object.source (Required): {@link
     * ResourceReference} or null. The resource that caused this transaction, such as a
     * gift_card_load, gift_card_redemption, refund, or gift_card_funding_disposition. `null` when
     * the cause has no public resource. object.source.anyOf[1] (Value): {@link ResourceReference}.
     * A reference to another resource by `resource_type` and `resource_id`. object.source.anyOf[2]
     * (Value): null. object.transaction_type (Required): string. Kind of movement, such as load,
     * redeem, refund, adjustment, or cash_out. Value enum: "load", "import", "redeem", "refund",
     * "refund_transfer", "adjustment", "cash_out", "purchase_reversal", "funding_loss_accepted",
     * "purchase_refund_recovery", "purchase_refund_recovery_transfer".
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * amount_money (Required): {@link MoneyValue}. Signed change to the card's balance:
         * positive amounts add value and negative amounts remove it. balance_after_money is
         * balance_before_money plus this amount; funding_loss_accepted records a decision and
         * moves 0. Signed monetary amount represented as integer minor units plus an ISO 4217
         * currency code. balance_after_money (Required): {@link MoneyValue}. The card's balance
         * immediately after this transaction. Monetary amount represented as integer minor units
         * plus an ISO 4217 currency code. balance_before_money (Required): {@link MoneyValue}. The
         * card's balance immediately before this transaction. Monetary amount represented as
         * integer minor units plus an ISO 4217 currency code. cash_out_reference (Required):
         * string or null. Your reference for the cash you paid the buyer outside Flint. `null`
         * when the transaction is not a cash_out. maxLength: 255. gift_card_id (Required): string.
         * Gift card whose balance this transaction changed. Example:
         * "gc_01KEZF7C00RT1618WYBM1Y94CG". gift_card_transaction_id (Required): string. Stable
         * identifier of the transaction. Example: "gct_01KEZF7C006Q1VC3M2DXJ6T936".
         * idempotency_key (Required): string or null. Your Idempotency-Key for the command that
         * created this record. `null` when Flint created it or no key was sent. merchant_sequence
         * (Required): integer. Position of this transaction among all of your gift card
         * transactions in this environment. It increases by one with each posted transaction, and
         * the transaction list is ordered by it. Format: int64. order_id (Optional): string. Order
         * this transaction belongs to, when there is one. Example:
         * "ord_01KEZF7C0054GQKJ142A8X367A". posted_at (Required): string. When the transaction was
         * posted to the card. Format: date-time. Example: "2026-08-02T16:00:00Z". reason
         * (Required): string or null. Your adjustment reason on adjustment transactions, and
         * customer_request on cash_out. `null` when the transaction is any other type. Value enum:
         * "complimentary", "balance_accidentally_decreased", "support_issue",
         * "suspicious_activity", "balance_accidentally_increased", "customer_request", null.
         * sequence (Required): integer. Position of this transaction in the card's history. It
         * increases by one with each transaction posted to the card. Format: int64. source
         * (Required): {@link ResourceReference} or null. The resource that caused this
         * transaction, such as a gift_card_load, gift_card_redemption, refund, or
         * gift_card_funding_disposition. `null` when the cause has no public resource.
         * source.anyOf[1] (Value): {@link ResourceReference}. A reference to another resource by
         * `resource_type` and `resource_id`. source.anyOf[2] (Value): null. transaction_type
         * (Required): string. Kind of movement, such as load, redeem, refund, adjustment, or
         * cash_out. Value enum: "load", "import", "redeem", "refund", "refund_transfer",
         * "adjustment", "cash_out", "purchase_reversal", "funding_loss_accepted",
         * "purchase_refund_recovery", "purchase_refund_recovery_transfer".
         */
        "object": {
            /**
             * Signed change to the card's balance: positive amounts add value and negative amounts
             * remove it. balance_after_money is balance_before_money plus this amount;
             * funding_loss_accepted records a decision and moves 0. Signed monetary amount
             * represented as integer minor units plus an ISO 4217 currency code.
             */
            "amount_money": MoneyValue;
            /**
             * The card's balance immediately after this transaction. Monetary amount represented
             * as integer minor units plus an ISO 4217 currency code.
             */
            "balance_after_money": MoneyValue;
            /**
             * The card's balance immediately before this transaction. Monetary amount represented
             * as integer minor units plus an ISO 4217 currency code.
             */
            "balance_before_money": MoneyValue;
            /**
             * Your reference for the cash you paid the buyer outside Flint. `null` when the
             * transaction is not a cash_out. maxLength: 255.
             */
            "cash_out_reference": string | null;
            /**
             * Gift card whose balance this transaction changed. Example:
             * "gc_01KEZF7C00RT1618WYBM1Y94CG".
             */
            "gift_card_id": string;
            /** Stable identifier of the transaction. Example: "gct_01KEZF7C006Q1VC3M2DXJ6T936". */
            "gift_card_transaction_id": string;
            /**
             * Your Idempotency-Key for the command that created this record. `null` when Flint
             * created it or no key was sent.
             */
            "idempotency_key": string | null;
            /**
             * Position of this transaction among all of your gift card transactions in this
             * environment. It increases by one with each posted transaction, and the transaction
             * list is ordered by it. Format: int64.
             */
            "merchant_sequence": number;
            /**
             * Order this transaction belongs to, when there is one. Example:
             * "ord_01KEZF7C0054GQKJ142A8X367A".
             */
            "order_id"?: string;
            /**
             * When the transaction was posted to the card. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "posted_at": string;
            /**
             * Your adjustment reason on adjustment transactions, and customer_request on cash_out.
             * `null` when the transaction is any other type. Value enum: "complimentary",
             * "balance_accidentally_decreased", "support_issue", "suspicious_activity",
             * "balance_accidentally_increased", "customer_request", null.
             */
            "reason": "complimentary"
                | "balance_accidentally_decreased"
                | "support_issue"
                | "suspicious_activity"
                | "balance_accidentally_increased"
                | "customer_request"
                | null
                | (string & {})
                | null;
            /**
             * Position of this transaction in the card's history. It increases by one with each
             * transaction posted to the card. Format: int64.
             */
            "sequence": number;
            /**
             * The resource that caused this transaction, such as a gift_card_load,
             * gift_card_redemption, refund, or gift_card_funding_disposition. `null` when the
             * cause has no public resource. anyOf[1] (Value): {@link ResourceReference}. A
             * reference to another resource by `resource_type` and `resource_id`. anyOf[2]
             * (Value): null.
             */
            "source": ((ResourceReference) | (null));
            /**
             * Kind of movement, such as load, redeem, refund, adjustment, or cash_out. Value enum:
             * "load", "import", "redeem", "refund", "refund_transfer", "adjustment", "cash_out",
             * "purchase_reversal", "funding_loss_accepted", "purchase_refund_recovery",
             * "purchase_refund_recovery_transfer".
             */
            "transaction_type": "load"
                | "import"
                | "redeem"
                | "refund"
                | "refund_transfer"
                | "adjustment"
                | "cash_out"
                | "purchase_reversal"
                | "funding_loss_accepted"
                | "purchase_refund_recovery"
                | "purchase_refund_recovery_transfer"
                | (string & {});
        };
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "gift_card_transaction.created". */
    "event_type"?: "gift_card_transaction.created";
    /**
     *  environment_grant_id (Required): string. The grant authorizing delivery from this merchant
     * environment. Example: "egrt_01KEZF7C00MQQDDB7YWGXV3MXY". merchant_id (Required): string. The
     * merchant the event concerns. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". mode (Required):
     * string. Whether the installed merchant event came from live mode or a sandbox. Value enum:
     * "test", "live". partner_app_install_id (Required): string. The install connecting the
     * merchant to the partner app. Example: "pinst_01KEZF7C003HVKZR3GZAW6AFAZ". sandbox_id
     * (Optional): string. The sandbox the event came from, present only in test mode. Example:
     * "test_01KEZF7C00JC77HTMTB2XHNPE0".
     */
    "source"?: ({
        /**
         * The grant authorizing delivery from this merchant environment. Example:
         * "egrt_01KEZF7C00MQQDDB7YWGXV3MXY".
         */
        "environment_grant_id": string;
        /** The merchant the event concerns. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
        "merchant_id": string;
        /**
         * Whether the installed merchant event came from live mode or a sandbox. Value enum:
         * "test", "live".
         */
        "mode": "test" | "live" | (string & {});
        /**
         * The install connecting the merchant to the partner app. Example:
         * "pinst_01KEZF7C003HVKZR3GZAW6AFAZ".
         */
        "partner_app_install_id": string;
        /**
         * The sandbox the event came from, present only in test mode. Example:
         * "test_01KEZF7C00JC77HTMTB2XHNPE0".
         */
        "sandbox_id"?: string;
    });
});
/**
 * The `gift_card_transaction.created` webhook payload for the `merchant` event source. Fields
 * shared by merchant webhook payloads.
 */
export type GiftCardTransactionCreatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.amount_money (Required): {@link MoneyValue}. Signed change to the
     * card's balance: positive amounts add value and negative amounts remove it.
     * balance_after_money is balance_before_money plus this amount; funding_loss_accepted records
     * a decision and moves 0. Signed monetary amount represented as integer minor units plus an
     * ISO 4217 currency code. object.balance_after_money (Required): {@link MoneyValue}. The
     * card's balance immediately after this transaction. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code. object.balance_before_money (Required): {@link
     * MoneyValue}. The card's balance immediately before this transaction. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code. object.cash_out_reference
     * (Required): string or null. Your reference for the cash you paid the buyer outside Flint.
     * `null` when the transaction is not a cash_out. maxLength: 255. object.gift_card_id
     * (Required): string. Gift card whose balance this transaction changed. Example:
     * "gc_01KEZF7C00RT1618WYBM1Y94CG". object.gift_card_transaction_id (Required): string. Stable
     * identifier of the transaction. Example: "gct_01KEZF7C006Q1VC3M2DXJ6T936".
     * object.idempotency_key (Required): string or null. Your Idempotency-Key for the command that
     * created this record. `null` when Flint created it or no key was sent.
     * object.merchant_sequence (Required): integer. Position of this transaction among all of your
     * gift card transactions in this environment. It increases by one with each posted
     * transaction, and the transaction list is ordered by it. Format: int64. object.order_id
     * (Optional): string. Order this transaction belongs to, when there is one. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A". object.posted_at (Required): string. When the transaction
     * was posted to the card. Format: date-time. Example: "2026-08-02T16:00:00Z". object.reason
     * (Required): string or null. Your adjustment reason on adjustment transactions, and
     * customer_request on cash_out. `null` when the transaction is any other type. Value enum:
     * "complimentary", "balance_accidentally_decreased", "support_issue", "suspicious_activity",
     * "balance_accidentally_increased", "customer_request", null. object.sequence (Required):
     * integer. Position of this transaction in the card's history. It increases by one with each
     * transaction posted to the card. Format: int64. object.source (Required): {@link
     * ResourceReference} or null. The resource that caused this transaction, such as a
     * gift_card_load, gift_card_redemption, refund, or gift_card_funding_disposition. `null` when
     * the cause has no public resource. object.source.anyOf[1] (Value): {@link ResourceReference}.
     * A reference to another resource by `resource_type` and `resource_id`. object.source.anyOf[2]
     * (Value): null. object.transaction_type (Required): string. Kind of movement, such as load,
     * redeem, refund, adjustment, or cash_out. Value enum: "load", "import", "redeem", "refund",
     * "refund_transfer", "adjustment", "cash_out", "purchase_reversal", "funding_loss_accepted",
     * "purchase_refund_recovery", "purchase_refund_recovery_transfer".
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * amount_money (Required): {@link MoneyValue}. Signed change to the card's balance:
         * positive amounts add value and negative amounts remove it. balance_after_money is
         * balance_before_money plus this amount; funding_loss_accepted records a decision and
         * moves 0. Signed monetary amount represented as integer minor units plus an ISO 4217
         * currency code. balance_after_money (Required): {@link MoneyValue}. The card's balance
         * immediately after this transaction. Monetary amount represented as integer minor units
         * plus an ISO 4217 currency code. balance_before_money (Required): {@link MoneyValue}. The
         * card's balance immediately before this transaction. Monetary amount represented as
         * integer minor units plus an ISO 4217 currency code. cash_out_reference (Required):
         * string or null. Your reference for the cash you paid the buyer outside Flint. `null`
         * when the transaction is not a cash_out. maxLength: 255. gift_card_id (Required): string.
         * Gift card whose balance this transaction changed. Example:
         * "gc_01KEZF7C00RT1618WYBM1Y94CG". gift_card_transaction_id (Required): string. Stable
         * identifier of the transaction. Example: "gct_01KEZF7C006Q1VC3M2DXJ6T936".
         * idempotency_key (Required): string or null. Your Idempotency-Key for the command that
         * created this record. `null` when Flint created it or no key was sent. merchant_sequence
         * (Required): integer. Position of this transaction among all of your gift card
         * transactions in this environment. It increases by one with each posted transaction, and
         * the transaction list is ordered by it. Format: int64. order_id (Optional): string. Order
         * this transaction belongs to, when there is one. Example:
         * "ord_01KEZF7C0054GQKJ142A8X367A". posted_at (Required): string. When the transaction was
         * posted to the card. Format: date-time. Example: "2026-08-02T16:00:00Z". reason
         * (Required): string or null. Your adjustment reason on adjustment transactions, and
         * customer_request on cash_out. `null` when the transaction is any other type. Value enum:
         * "complimentary", "balance_accidentally_decreased", "support_issue",
         * "suspicious_activity", "balance_accidentally_increased", "customer_request", null.
         * sequence (Required): integer. Position of this transaction in the card's history. It
         * increases by one with each transaction posted to the card. Format: int64. source
         * (Required): {@link ResourceReference} or null. The resource that caused this
         * transaction, such as a gift_card_load, gift_card_redemption, refund, or
         * gift_card_funding_disposition. `null` when the cause has no public resource.
         * source.anyOf[1] (Value): {@link ResourceReference}. A reference to another resource by
         * `resource_type` and `resource_id`. source.anyOf[2] (Value): null. transaction_type
         * (Required): string. Kind of movement, such as load, redeem, refund, adjustment, or
         * cash_out. Value enum: "load", "import", "redeem", "refund", "refund_transfer",
         * "adjustment", "cash_out", "purchase_reversal", "funding_loss_accepted",
         * "purchase_refund_recovery", "purchase_refund_recovery_transfer".
         */
        "object": {
            /**
             * Signed change to the card's balance: positive amounts add value and negative amounts
             * remove it. balance_after_money is balance_before_money plus this amount;
             * funding_loss_accepted records a decision and moves 0. Signed monetary amount
             * represented as integer minor units plus an ISO 4217 currency code.
             */
            "amount_money": MoneyValue;
            /**
             * The card's balance immediately after this transaction. Monetary amount represented
             * as integer minor units plus an ISO 4217 currency code.
             */
            "balance_after_money": MoneyValue;
            /**
             * The card's balance immediately before this transaction. Monetary amount represented
             * as integer minor units plus an ISO 4217 currency code.
             */
            "balance_before_money": MoneyValue;
            /**
             * Your reference for the cash you paid the buyer outside Flint. `null` when the
             * transaction is not a cash_out. maxLength: 255.
             */
            "cash_out_reference": string | null;
            /**
             * Gift card whose balance this transaction changed. Example:
             * "gc_01KEZF7C00RT1618WYBM1Y94CG".
             */
            "gift_card_id": string;
            /** Stable identifier of the transaction. Example: "gct_01KEZF7C006Q1VC3M2DXJ6T936". */
            "gift_card_transaction_id": string;
            /**
             * Your Idempotency-Key for the command that created this record. `null` when Flint
             * created it or no key was sent.
             */
            "idempotency_key": string | null;
            /**
             * Position of this transaction among all of your gift card transactions in this
             * environment. It increases by one with each posted transaction, and the transaction
             * list is ordered by it. Format: int64.
             */
            "merchant_sequence": number;
            /**
             * Order this transaction belongs to, when there is one. Example:
             * "ord_01KEZF7C0054GQKJ142A8X367A".
             */
            "order_id"?: string;
            /**
             * When the transaction was posted to the card. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "posted_at": string;
            /**
             * Your adjustment reason on adjustment transactions, and customer_request on cash_out.
             * `null` when the transaction is any other type. Value enum: "complimentary",
             * "balance_accidentally_decreased", "support_issue", "suspicious_activity",
             * "balance_accidentally_increased", "customer_request", null.
             */
            "reason": "complimentary"
                | "balance_accidentally_decreased"
                | "support_issue"
                | "suspicious_activity"
                | "balance_accidentally_increased"
                | "customer_request"
                | null
                | (string & {})
                | null;
            /**
             * Position of this transaction in the card's history. It increases by one with each
             * transaction posted to the card. Format: int64.
             */
            "sequence": number;
            /**
             * The resource that caused this transaction, such as a gift_card_load,
             * gift_card_redemption, refund, or gift_card_funding_disposition. `null` when the
             * cause has no public resource. anyOf[1] (Value): {@link ResourceReference}. A
             * reference to another resource by `resource_type` and `resource_id`. anyOf[2]
             * (Value): null.
             */
            "source": ((ResourceReference) | (null));
            /**
             * Kind of movement, such as load, redeem, refund, adjustment, or cash_out. Value enum:
             * "load", "import", "redeem", "refund", "refund_transfer", "adjustment", "cash_out",
             * "purchase_reversal", "funding_loss_accepted", "purchase_refund_recovery",
             * "purchase_refund_recovery_transfer".
             */
            "transaction_type": "load"
                | "import"
                | "redeem"
                | "refund"
                | "refund_transfer"
                | "adjustment"
                | "cash_out"
                | "purchase_reversal"
                | "funding_loss_accepted"
                | "purchase_refund_recovery"
                | "purchase_refund_recovery_transfer"
                | (string & {});
        };
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "gift_card_transaction.created". */
    "event_type"?: "gift_card_transaction.created";
});
/** A page of `GiftCardTransaction` objects. */
export type GiftCardTransactionListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * GiftCardTransaction}. Immutable posted financial movement with signed amount, per-card
     * sequence, merchant sequence and balance snapshots. Corrections create new transactions.
     */
    "data": Array<GiftCardTransaction>;
    /**
     * Additional information about this response. Metadata returned with a response: the
     * `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Opaque token to send as `page_token` to retrieve the next page. Omitted when there is no
     * next page.
     */
    "next_page_token"?: string;
    /**
     * Identifier of this API request, used to correlate logs and support requests. maxLength: 128.
     * pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example: "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
export type GiftCardTransactionsListParams = {
    /**
     * Exact, case-sensitive filter on your reference for the cash paid to the buyer outside Flint.
     * Matches only cash_out transactions. minLength: 1. maxLength: 255.
     */
    "cash_out_reference"?: InputValue<string>;
    /** Exact, case-sensitive filter. maxLength: 255. Example: "gc_01KEZF7C00RT1618WYBM1Y94CG". */
    "gift_card_id"?: InputValue<string>;
    /**
     * Filter by the original Idempotency-Key, after trimming surrounding whitespace. Matching is
     * exact and case-sensitive. Returns current authorized resources, not the recorded response. A
     * pending resource does not prove that the operation succeeded, and an empty list does not
     * prove that it had no effect. minLength: 1. maxLength: 255.
     */
    "idempotency_key"?: InputValue<string>;
    /** Exact, case-sensitive filter. maxLength: 255. Example: "ord_01KEZF7C0054GQKJ142A8X367A". */
    "order_id"?: InputValue<string>;
    /**
     * Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: 1. maximum:
     * 100. Default: 20.
     */
    "page_size"?: InputValue<number>;
    /**
     * Opaque, signed next_page_token from the previous response, bound to the list and caller.
     * Omit on the first request. You may change `page_size` between pages. Reuse it with the same
     * endpoint, filters, sort, and request context. Do not parse or construct tokens. An altered,
     * invalid, expired, or mismatched token returns a validation error.
     */
    "page_token"?: InputValue<string>;
    /** Inclusive lower bound on posted_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "posted_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on posted_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "posted_before"?: InputValue<string | globalThis.Date>;
    /** Exact, case-sensitive filter. maxLength: 255. Example: "pos-sale-1842". */
    "source_id"?: InputValue<string>;
    /**
     * Exact, case-sensitive filter. Values are trimmed and deduplicated in first-seen order; empty
     * or unknown entries are rejected. Values within this filter are ORed; separate filters are
     * ANDed. [] enum: "gift_card_funding_disposition", "gift_card_load", "gift_card_redemption",
     * "purchase_refund_allocation", "refund", "refund_allocation". Value enum:
     * "gift_card_funding_disposition", "gift_card_load", "gift_card_redemption",
     * "purchase_refund_allocation", "refund", "refund_allocation". anyOf[1] (Value): Array of
     * string. minItems: 1. [] enum: "gift_card_funding_disposition", "gift_card_load",
     * "gift_card_redemption", "purchase_refund_allocation", "refund", "refund_allocation".
     * anyOf[1][] (Value): string. maxLength: 255. Value enum: "gift_card_funding_disposition",
     * "gift_card_load", "gift_card_redemption", "purchase_refund_allocation", "refund",
     * "refund_allocation". anyOf[2] (Value): string. maxLength: 255. Value enum:
     * "gift_card_funding_disposition", "gift_card_load", "gift_card_redemption",
     * "purchase_refund_allocation", "refund", "refund_allocation".
     */
    "source_type"?: InputValue<("gift_card_funding_disposition"
        | "gift_card_load"
        | "gift_card_redemption"
        | "purchase_refund_allocation"
        | "refund"
        | "refund_allocation")
        | readonly ("gift_card_funding_disposition"
        | "gift_card_load"
        | "gift_card_redemption"
        | "purchase_refund_allocation"
        | "refund"
        | "refund_allocation")[]>;
    /**
     * Filter by transaction_type. Values are trimmed and deduplicated in first-seen order; empty
     * or unknown entries are rejected. Values within this filter are ORed; separate filters are
     * ANDed. [] enum: "load", "import", "redeem", "refund", "refund_transfer", "adjustment",
     * "cash_out", "purchase_reversal", "funding_loss_accepted", "purchase_refund_recovery",
     * "purchase_refund_recovery_transfer". Value enum: "load", "import", "redeem", "refund",
     * "refund_transfer", "adjustment", "cash_out", "purchase_reversal", "funding_loss_accepted",
     * "purchase_refund_recovery", "purchase_refund_recovery_transfer". anyOf[1] (Value): Array of
     * string. minItems: 1. [] enum: "load", "import", "redeem", "refund", "refund_transfer",
     * "adjustment", "cash_out", "purchase_reversal", "funding_loss_accepted",
     * "purchase_refund_recovery", "purchase_refund_recovery_transfer". anyOf[1][] (Value): string.
     * Value enum: "load", "import", "redeem", "refund", "refund_transfer", "adjustment",
     * "cash_out", "purchase_reversal", "funding_loss_accepted", "purchase_refund_recovery",
     * "purchase_refund_recovery_transfer". anyOf[2] (Value): string. Value enum: "load", "import",
     * "redeem", "refund", "refund_transfer", "adjustment", "cash_out", "purchase_reversal",
     * "funding_loss_accepted", "purchase_refund_recovery", "purchase_refund_recovery_transfer".
     */
    "transaction_type"?: InputValue<("load"
        | "import"
        | "redeem"
        | "refund"
        | "refund_transfer"
        | "adjustment"
        | "cash_out"
        | "purchase_reversal"
        | "funding_loss_accepted"
        | "purchase_refund_recovery"
        | "purchase_refund_recovery_transfer")
        | readonly ("load"
        | "import"
        | "redeem"
        | "refund"
        | "refund_transfer"
        | "adjustment"
        | "cash_out"
        | "purchase_reversal"
        | "funding_loss_accepted"
        | "purchase_refund_recovery"
        | "purchase_refund_recovery_transfer")[]>;
    /**
     * Merchant this request acts for. Required with an app-level partner app token; optional with
     * a merchant-bound one, which it must match. Other credentials may send it only with their own
     * merchant. pattern: ^mer_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Merchant-Id"?: InputValue<string>;
    /**
     * Mode of the request context, live or test. Optional; it must match the credential's mode.
     * Value enum: "test", "live".
     */
    "Flint-Mode"?: InputValue<"test" | "live">;
    /**
     * Sandbox of the request context in test mode. Optional; with a partner app token it must name
     * the sandbox the merchant granted the app, and a live token can't send it. Send it in test
     * mode so a grant moved to another sandbox can't silently change where you write. pattern:
     * ^test_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Sandbox-Id"?: InputValue<string>;
};
export type GiftCardUpdatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "available_money": MoneyValue;
            "balance_money": MoneyValue;
            "code_source": "generated" | "imported" | (string & {});
            "created_at": string;
            "currency": "USD" | (string & {});
            "customer_id": string | null;
            "external_reference_id": string | null;
            "gift_card_id": string;
            "last_loaded_at": string | null;
            "last_redeemed_at": string | null;
            "last4": string;
            "merchant_id": string;
            "reserved_money": MoneyValue;
            "restrictions": Array<GiftCardRestriction>;
            "status": "pending" | "active" | "frozen" | "closed" | (string & {});
            "supported_actions": Array<"adjust_balance" | "cash_out" | "close" | "freeze" | "unfreeze" | (string & {})>;
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: Partial<GiftCard>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "gift_card.updated";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "available_money": MoneyValue;
            "balance_money": MoneyValue;
            "code_source": "generated" | "imported" | (string & {});
            "created_at": string;
            "currency": "USD" | (string & {});
            "customer_id": string | null;
            "external_reference_id": string | null;
            "gift_card_id": string;
            "last_loaded_at": string | null;
            "last_redeemed_at": string | null;
            "last4": string;
            "merchant_id": string;
            "reserved_money": MoneyValue;
            "restrictions": Array<GiftCardRestriction>;
            "status": "pending" | "active" | "frozen" | "closed" | (string & {});
            "supported_actions": Array<"adjust_balance" | "cash_out" | "close" | "freeze" | "unfreeze" | (string & {})>;
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: Partial<GiftCard>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "gift_card.updated";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "gift_card.updated";
});
/**
 * The `gift_card.updated` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type GiftCardUpdatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.available_money (Required): {@link MoneyValue}. The balance minus
     * reserved value: what can be spent now. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code. object.balance_money (Required): {@link MoneyValue}. The
     * posted balance, including value reserved for redemptions in progress. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code. object.code_source
     * (Required): string. Origin of the current code: generated means Flint issued a random code;
     * imported means the merchant supplied an existing code during import. Rotating the code
     * resets this to generated. Value enum: "generated", "imported". object.created_at (Required):
     * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.currency (Required): string. ISO 4217 currency code. minLength: 3. maxLength: 3.
     * pattern: ^[A-Z]{3}$. Example: "USD". Value enum: "USD". object.customer_id (Required):
     * string or null. ID of the customer associated with the card. `null` when no customer is
     * associated. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". object.external_reference_id
     * (Required): string or null. Caller-owned identifier for this resource in an external system.
     * `null` when none is set. minLength: 1. maxLength: 255. Example: "warehouse-1842".
     * object.gift_card_id (Required): string. Unique identifier for this gift card, prefixed
     * `gc_`. Example: "gc_01KEZF7C00RT1618WYBM1Y94CG". object.last_loaded_at (Required): string or
     * null. RFC3339 timestamp. `null` when no value has been loaded onto the card. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.last_redeemed_at (Required): string or
     * null. RFC3339 timestamp. `null` when the card has never been redeemed. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.last4 (Required): string. Last four characters of
     * the card's current code. minLength: 4. maxLength: 4. object.merchant_id (Required): string.
     * ID of the merchant this resource belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     * object.reserved_money (Required): {@link MoneyValue}. Value held for redemptions in
     * progress. It isn't available to other payments until the redemption succeeds or is released.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * object.restrictions (Required): Array of {@link GiftCardRestriction}. The restrictions that
     * keep the card frozen. unfreeze is supported only when every restriction is merchant_freeze.
     * A funding_dispute with dispute_status lost needs a gift card funding disposition.
     * object.restrictions[] (Value): {@link GiftCardRestriction}. A restriction on a gift card,
     * either a merchant freeze or a funding dispute, with its reason or dispute details.
     * object.status (Required): string. Where the card is in its lifecycle. Only an `active` card
     * can be spent. Value enum: "pending", "active", "frozen", "closed". object.supported_actions
     * (Required): Array of string. Lifecycle actions accepted for the stored card state,
     * independent of the caller's credentials. Empty when no action is available. [] enum:
     * "adjust_balance", "cash_out", "close", "freeze", "unfreeze". object.supported_actions[]
     * (Value): string. Value enum: "adjust_balance", "cash_out", "close", "freeze", "unfreeze".
     * object.updated_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.version (Required): integer. Current version of this
     * resource's owned state. Send it as `expected_version` when changing the resource to reject a
     * stale write. Format: int64. previous_attributes (Optional): object. Previous values of
     * changed top-level fields in data.object, at this delivery's API version. Nested changes
     * include the whole previous top-level value. A value is null when the field was absent before
     * the change. Omitted when Flint did not record the previous state, including synthetic test
     * events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * available_money (Required): {@link MoneyValue}. The balance minus reserved value: what
         * can be spent now. Monetary amount represented as integer minor units plus an ISO 4217
         * currency code. balance_money (Required): {@link MoneyValue}. The posted balance,
         * including value reserved for redemptions in progress. Monetary amount represented as
         * integer minor units plus an ISO 4217 currency code. code_source (Required): string.
         * Origin of the current code: generated means Flint issued a random code; imported means
         * the merchant supplied an existing code during import. Rotating the code resets this to
         * generated. Value enum: "generated", "imported". created_at (Required): string. RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". currency (Required):
         * string. ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
         * Example: "USD". Value enum: "USD". customer_id (Required): string or null. ID of the
         * customer associated with the card. `null` when no customer is associated. Example:
         * "cus_01KEZF7C006X9JK6NZNA2SM9XD". external_reference_id (Required): string or null.
         * Caller-owned identifier for this resource in an external system. `null` when none is
         * set. minLength: 1. maxLength: 255. Example: "warehouse-1842". gift_card_id (Required):
         * string. Unique identifier for this gift card, prefixed `gc_`. Example:
         * "gc_01KEZF7C00RT1618WYBM1Y94CG". last_loaded_at (Required): string or null. RFC3339
         * timestamp. `null` when no value has been loaded onto the card. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". last_redeemed_at (Required): string or null. RFC3339
         * timestamp. `null` when the card has never been redeemed. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". last4 (Required): string. Last four characters of the card's
         * current code. minLength: 4. maxLength: 4. merchant_id (Required): string. ID of the
         * merchant this resource belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
         * reserved_money (Required): {@link MoneyValue}. Value held for redemptions in progress.
         * It isn't available to other payments until the redemption succeeds or is released.
         * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
         * restrictions (Required): Array of {@link GiftCardRestriction}. The restrictions that
         * keep the card frozen. unfreeze is supported only when every restriction is
         * merchant_freeze. A funding_dispute with dispute_status lost needs a gift card funding
         * disposition. restrictions[] (Value): {@link GiftCardRestriction}. A restriction on a
         * gift card, either a merchant freeze or a funding dispute, with its reason or dispute
         * details. status (Required): string. Where the card is in its lifecycle. Only an `active`
         * card can be spent. Value enum: "pending", "active", "frozen", "closed".
         * supported_actions (Required): Array of string. Lifecycle actions accepted for the stored
         * card state, independent of the caller's credentials. Empty when no action is available.
         * [] enum: "adjust_balance", "cash_out", "close", "freeze", "unfreeze".
         * supported_actions[] (Value): string. Value enum: "adjust_balance", "cash_out", "close",
         * "freeze", "unfreeze". updated_at (Required): string. RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". version (Required): integer. Current version
         * of this resource's owned state. Send it as `expected_version` when changing the resource
         * to reject a stale write. Format: int64.
         */
        "object": {
            /**
             * The balance minus reserved value: what can be spent now. Monetary amount represented
             * as integer minor units plus an ISO 4217 currency code.
             */
            "available_money": MoneyValue;
            /**
             * The posted balance, including value reserved for redemptions in progress. Monetary
             * amount represented as integer minor units plus an ISO 4217 currency code.
             */
            "balance_money": MoneyValue;
            /**
             * Origin of the current code: generated means Flint issued a random code; imported
             * means the merchant supplied an existing code during import. Rotating the code resets
             * this to generated. Value enum: "generated", "imported".
             */
            "code_source": "generated" | "imported" | (string & {});
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example:
             * "USD". Value enum: "USD".
             */
            "currency": "USD" | (string & {});
            /**
             * ID of the customer associated with the card. `null` when no customer is associated.
             * Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
             */
            "customer_id": string | null;
            /**
             * Caller-owned identifier for this resource in an external system. `null` when none is
             * set. minLength: 1. maxLength: 255. Example: "warehouse-1842".
             */
            "external_reference_id": string | null;
            /**
             * Unique identifier for this gift card, prefixed `gc_`. Example:
             * "gc_01KEZF7C00RT1618WYBM1Y94CG".
             */
            "gift_card_id": string;
            /**
             * RFC3339 timestamp. `null` when no value has been loaded onto the card. Format:
             * date-time. Example: "2026-08-02T16:00:00Z".
             */
            "last_loaded_at": string | null;
            /**
             * RFC3339 timestamp. `null` when the card has never been redeemed. Format: date-time.
             * Example: "2026-08-02T16:00:00Z".
             */
            "last_redeemed_at": string | null;
            /** Last four characters of the card's current code. minLength: 4. maxLength: 4. */
            "last4": string;
            /**
             * ID of the merchant this resource belongs to. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id": string;
            /**
             * Value held for redemptions in progress. It isn't available to other payments until
             * the redemption succeeds or is released. Monetary amount represented as integer minor
             * units plus an ISO 4217 currency code.
             */
            "reserved_money": MoneyValue;
            /**
             * The restrictions that keep the card frozen. unfreeze is supported only when every
             * restriction is merchant_freeze. A funding_dispute with dispute_status lost needs a
             * gift card funding disposition. [] (Value): {@link GiftCardRestriction}. A
             * restriction on a gift card, either a merchant freeze or a funding dispute, with its
             * reason or dispute details.
             */
            "restrictions": Array<GiftCardRestriction>;
            /**
             * Where the card is in its lifecycle. Only an `active` card can be spent. Value enum:
             * "pending", "active", "frozen", "closed".
             */
            "status": "pending" | "active" | "frozen" | "closed" | (string & {});
            /**
             * Lifecycle actions accepted for the stored card state, independent of the caller's
             * credentials. Empty when no action is available. [] enum: "adjust_balance",
             * "cash_out", "close", "freeze", "unfreeze". [] (Value): string. Value enum:
             * "adjust_balance", "cash_out", "close", "freeze", "unfreeze".
             */
            "supported_actions": Array<"adjust_balance" | "cash_out" | "close" | "freeze" | "unfreeze" | (string & {})>;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Current version of this resource's owned state. Send it as `expected_version` when
             * changing the resource to reject a stale write. Format: int64.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<GiftCard>;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "gift_card.updated". */
    "event_type"?: "gift_card.updated";
    /**
     *  environment_grant_id (Required): string. The grant authorizing delivery from this merchant
     * environment. Example: "egrt_01KEZF7C00MQQDDB7YWGXV3MXY". merchant_id (Required): string. The
     * merchant the event concerns. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". mode (Required):
     * string. Whether the installed merchant event came from live mode or a sandbox. Value enum:
     * "test", "live". partner_app_install_id (Required): string. The install connecting the
     * merchant to the partner app. Example: "pinst_01KEZF7C003HVKZR3GZAW6AFAZ". sandbox_id
     * (Optional): string. The sandbox the event came from, present only in test mode. Example:
     * "test_01KEZF7C00JC77HTMTB2XHNPE0".
     */
    "source"?: ({
        /**
         * The grant authorizing delivery from this merchant environment. Example:
         * "egrt_01KEZF7C00MQQDDB7YWGXV3MXY".
         */
        "environment_grant_id": string;
        /** The merchant the event concerns. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
        "merchant_id": string;
        /**
         * Whether the installed merchant event came from live mode or a sandbox. Value enum:
         * "test", "live".
         */
        "mode": "test" | "live" | (string & {});
        /**
         * The install connecting the merchant to the partner app. Example:
         * "pinst_01KEZF7C003HVKZR3GZAW6AFAZ".
         */
        "partner_app_install_id": string;
        /**
         * The sandbox the event came from, present only in test mode. Example:
         * "test_01KEZF7C00JC77HTMTB2XHNPE0".
         */
        "sandbox_id"?: string;
    });
});
/**
 * The `gift_card.updated` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type GiftCardUpdatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.available_money (Required): {@link MoneyValue}. The balance minus
     * reserved value: what can be spent now. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code. object.balance_money (Required): {@link MoneyValue}. The
     * posted balance, including value reserved for redemptions in progress. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code. object.code_source
     * (Required): string. Origin of the current code: generated means Flint issued a random code;
     * imported means the merchant supplied an existing code during import. Rotating the code
     * resets this to generated. Value enum: "generated", "imported". object.created_at (Required):
     * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.currency (Required): string. ISO 4217 currency code. minLength: 3. maxLength: 3.
     * pattern: ^[A-Z]{3}$. Example: "USD". Value enum: "USD". object.customer_id (Required):
     * string or null. ID of the customer associated with the card. `null` when no customer is
     * associated. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". object.external_reference_id
     * (Required): string or null. Caller-owned identifier for this resource in an external system.
     * `null` when none is set. minLength: 1. maxLength: 255. Example: "warehouse-1842".
     * object.gift_card_id (Required): string. Unique identifier for this gift card, prefixed
     * `gc_`. Example: "gc_01KEZF7C00RT1618WYBM1Y94CG". object.last_loaded_at (Required): string or
     * null. RFC3339 timestamp. `null` when no value has been loaded onto the card. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.last_redeemed_at (Required): string or
     * null. RFC3339 timestamp. `null` when the card has never been redeemed. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.last4 (Required): string. Last four characters of
     * the card's current code. minLength: 4. maxLength: 4. object.merchant_id (Required): string.
     * ID of the merchant this resource belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     * object.reserved_money (Required): {@link MoneyValue}. Value held for redemptions in
     * progress. It isn't available to other payments until the redemption succeeds or is released.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * object.restrictions (Required): Array of {@link GiftCardRestriction}. The restrictions that
     * keep the card frozen. unfreeze is supported only when every restriction is merchant_freeze.
     * A funding_dispute with dispute_status lost needs a gift card funding disposition.
     * object.restrictions[] (Value): {@link GiftCardRestriction}. A restriction on a gift card,
     * either a merchant freeze or a funding dispute, with its reason or dispute details.
     * object.status (Required): string. Where the card is in its lifecycle. Only an `active` card
     * can be spent. Value enum: "pending", "active", "frozen", "closed". object.supported_actions
     * (Required): Array of string. Lifecycle actions accepted for the stored card state,
     * independent of the caller's credentials. Empty when no action is available. [] enum:
     * "adjust_balance", "cash_out", "close", "freeze", "unfreeze". object.supported_actions[]
     * (Value): string. Value enum: "adjust_balance", "cash_out", "close", "freeze", "unfreeze".
     * object.updated_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.version (Required): integer. Current version of this
     * resource's owned state. Send it as `expected_version` when changing the resource to reject a
     * stale write. Format: int64. previous_attributes (Optional): object. Previous values of
     * changed top-level fields in data.object, at this delivery's API version. Nested changes
     * include the whole previous top-level value. A value is null when the field was absent before
     * the change. Omitted when Flint did not record the previous state, including synthetic test
     * events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * available_money (Required): {@link MoneyValue}. The balance minus reserved value: what
         * can be spent now. Monetary amount represented as integer minor units plus an ISO 4217
         * currency code. balance_money (Required): {@link MoneyValue}. The posted balance,
         * including value reserved for redemptions in progress. Monetary amount represented as
         * integer minor units plus an ISO 4217 currency code. code_source (Required): string.
         * Origin of the current code: generated means Flint issued a random code; imported means
         * the merchant supplied an existing code during import. Rotating the code resets this to
         * generated. Value enum: "generated", "imported". created_at (Required): string. RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". currency (Required):
         * string. ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
         * Example: "USD". Value enum: "USD". customer_id (Required): string or null. ID of the
         * customer associated with the card. `null` when no customer is associated. Example:
         * "cus_01KEZF7C006X9JK6NZNA2SM9XD". external_reference_id (Required): string or null.
         * Caller-owned identifier for this resource in an external system. `null` when none is
         * set. minLength: 1. maxLength: 255. Example: "warehouse-1842". gift_card_id (Required):
         * string. Unique identifier for this gift card, prefixed `gc_`. Example:
         * "gc_01KEZF7C00RT1618WYBM1Y94CG". last_loaded_at (Required): string or null. RFC3339
         * timestamp. `null` when no value has been loaded onto the card. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". last_redeemed_at (Required): string or null. RFC3339
         * timestamp. `null` when the card has never been redeemed. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". last4 (Required): string. Last four characters of the card's
         * current code. minLength: 4. maxLength: 4. merchant_id (Required): string. ID of the
         * merchant this resource belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
         * reserved_money (Required): {@link MoneyValue}. Value held for redemptions in progress.
         * It isn't available to other payments until the redemption succeeds or is released.
         * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
         * restrictions (Required): Array of {@link GiftCardRestriction}. The restrictions that
         * keep the card frozen. unfreeze is supported only when every restriction is
         * merchant_freeze. A funding_dispute with dispute_status lost needs a gift card funding
         * disposition. restrictions[] (Value): {@link GiftCardRestriction}. A restriction on a
         * gift card, either a merchant freeze or a funding dispute, with its reason or dispute
         * details. status (Required): string. Where the card is in its lifecycle. Only an `active`
         * card can be spent. Value enum: "pending", "active", "frozen", "closed".
         * supported_actions (Required): Array of string. Lifecycle actions accepted for the stored
         * card state, independent of the caller's credentials. Empty when no action is available.
         * [] enum: "adjust_balance", "cash_out", "close", "freeze", "unfreeze".
         * supported_actions[] (Value): string. Value enum: "adjust_balance", "cash_out", "close",
         * "freeze", "unfreeze". updated_at (Required): string. RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". version (Required): integer. Current version
         * of this resource's owned state. Send it as `expected_version` when changing the resource
         * to reject a stale write. Format: int64.
         */
        "object": {
            /**
             * The balance minus reserved value: what can be spent now. Monetary amount represented
             * as integer minor units plus an ISO 4217 currency code.
             */
            "available_money": MoneyValue;
            /**
             * The posted balance, including value reserved for redemptions in progress. Monetary
             * amount represented as integer minor units plus an ISO 4217 currency code.
             */
            "balance_money": MoneyValue;
            /**
             * Origin of the current code: generated means Flint issued a random code; imported
             * means the merchant supplied an existing code during import. Rotating the code resets
             * this to generated. Value enum: "generated", "imported".
             */
            "code_source": "generated" | "imported" | (string & {});
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example:
             * "USD". Value enum: "USD".
             */
            "currency": "USD" | (string & {});
            /**
             * ID of the customer associated with the card. `null` when no customer is associated.
             * Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
             */
            "customer_id": string | null;
            /**
             * Caller-owned identifier for this resource in an external system. `null` when none is
             * set. minLength: 1. maxLength: 255. Example: "warehouse-1842".
             */
            "external_reference_id": string | null;
            /**
             * Unique identifier for this gift card, prefixed `gc_`. Example:
             * "gc_01KEZF7C00RT1618WYBM1Y94CG".
             */
            "gift_card_id": string;
            /**
             * RFC3339 timestamp. `null` when no value has been loaded onto the card. Format:
             * date-time. Example: "2026-08-02T16:00:00Z".
             */
            "last_loaded_at": string | null;
            /**
             * RFC3339 timestamp. `null` when the card has never been redeemed. Format: date-time.
             * Example: "2026-08-02T16:00:00Z".
             */
            "last_redeemed_at": string | null;
            /** Last four characters of the card's current code. minLength: 4. maxLength: 4. */
            "last4": string;
            /**
             * ID of the merchant this resource belongs to. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id": string;
            /**
             * Value held for redemptions in progress. It isn't available to other payments until
             * the redemption succeeds or is released. Monetary amount represented as integer minor
             * units plus an ISO 4217 currency code.
             */
            "reserved_money": MoneyValue;
            /**
             * The restrictions that keep the card frozen. unfreeze is supported only when every
             * restriction is merchant_freeze. A funding_dispute with dispute_status lost needs a
             * gift card funding disposition. [] (Value): {@link GiftCardRestriction}. A
             * restriction on a gift card, either a merchant freeze or a funding dispute, with its
             * reason or dispute details.
             */
            "restrictions": Array<GiftCardRestriction>;
            /**
             * Where the card is in its lifecycle. Only an `active` card can be spent. Value enum:
             * "pending", "active", "frozen", "closed".
             */
            "status": "pending" | "active" | "frozen" | "closed" | (string & {});
            /**
             * Lifecycle actions accepted for the stored card state, independent of the caller's
             * credentials. Empty when no action is available. [] enum: "adjust_balance",
             * "cash_out", "close", "freeze", "unfreeze". [] (Value): string. Value enum:
             * "adjust_balance", "cash_out", "close", "freeze", "unfreeze".
             */
            "supported_actions": Array<"adjust_balance" | "cash_out" | "close" | "freeze" | "unfreeze" | (string & {})>;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Current version of this resource's owned state. Send it as `expected_version` when
             * changing the resource to reject a stale write. Format: int64.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<GiftCard>;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "gift_card.updated". */
    "event_type"?: "gift_card.updated";
});
/** Optional version fence for the redemption being captured or canceled. */
export type GiftCardVersionRequestInput = {
    /**
     * The redemption version last read. Capture or cancel changes the redemption only when its
     * current version matches. Format: int64. minimum: 1.
     */
    "expected_version"?: number;
};
export type GiftCardsAdjustBalanceParams = (InputValue<AdjustGiftCardBalanceRequestInput>)
    & {
    /**
     * Merchant this request acts for. Required with an app-level partner app token; optional with
     * a merchant-bound one, which it must match. Other credentials may send it only with their own
     * merchant. pattern: ^mer_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Merchant-Id"?: InputValue<string>;
    /**
     * Mode of the request context, live or test. Optional; it must match the credential's mode.
     * Value enum: "test", "live".
     */
    "Flint-Mode"?: InputValue<"test" | "live">;
    /**
     * Sandbox of the request context in test mode. Optional; with a partner app token it must name
     * the sandbox the merchant granted the app, and a live token can't send it. Send it in test
     * mode so a grant moved to another sandbox can't silently change where you write. pattern:
     * ^test_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Sandbox-Id"?: InputValue<string>;
};
export type GiftCardsCashOutParams = (InputValue<CashOutGiftCardRequestInput>)
    & {
    /**
     * Merchant this request acts for. Required with an app-level partner app token; optional with
     * a merchant-bound one, which it must match. Other credentials may send it only with their own
     * merchant. pattern: ^mer_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Merchant-Id"?: InputValue<string>;
    /**
     * Mode of the request context, live or test. Optional; it must match the credential's mode.
     * Value enum: "test", "live".
     */
    "Flint-Mode"?: InputValue<"test" | "live">;
    /**
     * Sandbox of the request context in test mode. Optional; with a partner app token it must name
     * the sandbox the merchant granted the app, and a live token can't send it. Send it in test
     * mode so a grant moved to another sandbox can't silently change where you write. pattern:
     * ^test_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Sandbox-Id"?: InputValue<string>;
};
export type GiftCardsCloseParams = (InputValue<CloseGiftCardRequestInput> | {
    "expected_version"?: never;
})
    & {
    /**
     * Merchant this request acts for. Required with an app-level partner app token; optional with
     * a merchant-bound one, which it must match. Other credentials may send it only with their own
     * merchant. pattern: ^mer_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Merchant-Id"?: InputValue<string>;
    /**
     * Mode of the request context, live or test. Optional; it must match the credential's mode.
     * Value enum: "test", "live".
     */
    "Flint-Mode"?: InputValue<"test" | "live">;
    /**
     * Sandbox of the request context in test mode. Optional; with a partner app token it must name
     * the sandbox the merchant granted the app, and a live token can't send it. Send it in test
     * mode so a grant moved to another sandbox can't silently change where you write. pattern:
     * ^test_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Sandbox-Id"?: InputValue<string>;
};
export type GiftCardsCreateParams = (InputValue<CreateGiftCardRequestInput>)
    & {
    /**
     * Merchant this request acts for. Required with an app-level partner app token; optional with
     * a merchant-bound one, which it must match. Other credentials may send it only with their own
     * merchant. pattern: ^mer_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Merchant-Id"?: InputValue<string>;
    /**
     * Mode of the request context, live or test. Optional; it must match the credential's mode.
     * Value enum: "test", "live".
     */
    "Flint-Mode"?: InputValue<"test" | "live">;
    /**
     * Sandbox of the request context in test mode. Optional; with a partner app token it must name
     * the sandbox the merchant granted the app, and a live token can't send it. Send it in test
     * mode so a grant moved to another sandbox can't silently change where you write. pattern:
     * ^test_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Sandbox-Id"?: InputValue<string>;
};
export type GiftCardsFreezeParams = (InputValue<FreezeGiftCardRequestInput>)
    & {
    /**
     * Merchant this request acts for. Required with an app-level partner app token; optional with
     * a merchant-bound one, which it must match. Other credentials may send it only with their own
     * merchant. pattern: ^mer_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Merchant-Id"?: InputValue<string>;
    /**
     * Mode of the request context, live or test. Optional; it must match the credential's mode.
     * Value enum: "test", "live".
     */
    "Flint-Mode"?: InputValue<"test" | "live">;
    /**
     * Sandbox of the request context in test mode. Optional; with a partner app token it must name
     * the sandbox the merchant granted the app, and a live token can't send it. Send it in test
     * mode so a grant moved to another sandbox can't silently change where you write. pattern:
     * ^test_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Sandbox-Id"?: InputValue<string>;
};
export type GiftCardsGetParams = DisputesAcceptParams;
export type GiftCardsListParams = {
    /** Inclusive lower bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
    /**
     * Exact, case-sensitive filter on the customer stored on the gift card. An unknown customer
     * returns an empty page. pattern: ^cus_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     */
    "customer_id"?: InputValue<string>;
    /** Exact, case-sensitive filter. minLength: 1. maxLength: 255. Example: "warehouse-1842". */
    "external_reference_id"?: InputValue<string>;
    /**
     * Filter by the original Idempotency-Key, after trimming surrounding whitespace. Matching is
     * exact and case-sensitive. Returns current authorized resources, not the recorded response. A
     * pending resource does not prove that the operation succeeded, and an empty list does not
     * prove that it had no effect. minLength: 1. maxLength: 255.
     */
    "idempotency_key"?: InputValue<string>;
    /**
     * Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: 1. maximum:
     * 100. Default: 20.
     */
    "page_size"?: InputValue<number>;
    /**
     * Opaque, signed next_page_token from the previous response, bound to the list and caller.
     * Omit on the first request. You may change `page_size` between pages. Reuse it with the same
     * endpoint, filters, sort, and request context. Do not parse or construct tokens. An altered,
     * invalid, expired, or mismatched token returns a validation error.
     */
    "page_token"?: InputValue<string>;
    /**
     * Exact, case-sensitive filter. Values are trimmed and deduplicated in first-seen order; empty
     * or unknown entries are rejected. Values within this filter are ORed; separate filters are
     * ANDed. [] enum: "active", "closed", "frozen", "pending". Value enum: "active", "closed",
     * "frozen", "pending". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "active",
     * "closed", "frozen", "pending". anyOf[1][] (Value): string. maxLength: 255. Value enum:
     * "active", "closed", "frozen", "pending". anyOf[2] (Value): string. maxLength: 255. Value
     * enum: "active", "closed", "frozen", "pending".
     */
    "status"?: InputValue<("active" | "closed" | "frozen" | "pending")
        | readonly ("active" | "closed" | "frozen" | "pending")[]>;
    /**
     * Merchant this request acts for. Required with an app-level partner app token; optional with
     * a merchant-bound one, which it must match. Other credentials may send it only with their own
     * merchant. pattern: ^mer_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Merchant-Id"?: InputValue<string>;
    /**
     * Mode of the request context, live or test. Optional; it must match the credential's mode.
     * Value enum: "test", "live".
     */
    "Flint-Mode"?: InputValue<"test" | "live">;
    /**
     * Sandbox of the request context in test mode. Optional; with a partner app token it must name
     * the sandbox the merchant granted the app, and a live token can't send it. Send it in test
     * mode so a grant moved to another sandbox can't silently change where you write. pattern:
     * ^test_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Sandbox-Id"?: InputValue<string>;
};
