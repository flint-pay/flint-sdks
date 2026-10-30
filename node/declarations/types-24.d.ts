import type {
    GiftCardLoad,
    GiftCardCustomAmountBounds,
    GiftCardCustomAmountBoundsRequestInput,
    GiftCard,
    GiftCardFundingSource
} from './types-23.js';
import type { ResponseMeta } from './types-48.js';
import type { MerchantWebhookEnvelope } from './types-34.js';
import type { PartnerWebhookEnvelope } from './types-40.js';
import type { InputValue } from '../runtime.js';
import type { CancelGiftCardNotificationRequestInput } from './types-3.js';
import type { CreateGiftCardNotificationRequestInput, CreateGiftCardRedemptionRequestInput } from './types-8.js';
import type { MoneyValue } from './types-35.js';
import type { GiftCardVersionRequestInput } from './types-25.js';
import type { ResourceReference } from './types-47.js';
/** A response containing `GiftCardLoad` data. */
export type GiftCardLoadResponse = {
    /**
     * Independent funding resource. Value and consideration are separate. External funding and
     * import provenance are merchant-attested; no payment is collected by recording them.
     * Replacement refund lots retain original funding provenance and do not represent new paid
     * funding.
     */
    "data": GiftCardLoad;
    /**
     * Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent
     * request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
export type GiftCardLoadUpdatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": GiftCardLoad;
    };
    "event_type"?: "gift_card_load.updated";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": GiftCardLoad;
    };
    "event_type"?: "gift_card_load.updated";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        "type": "installed_merchants" | (string & {});
    });
})))
    & {
    "event_type": "gift_card_load.updated";
});
/**
 * The `gift_card_load.updated` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type GiftCardLoadUpdatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link GiftCardLoad}. Independent funding resource. Value and
     * consideration are separate. External funding and import provenance are merchant-attested; no
     * payment is collected by recording them. Replacement refund lots retain original funding
     * provenance and do not represent new paid funding.
     */
    "data"?: {
        /**
         * Independent funding resource. Value and consideration are separate. External funding and
         * import provenance are merchant-attested; no payment is collected by recording them.
         * Replacement refund lots retain original funding provenance and do not represent new paid
         * funding.
         */
        "object": GiftCardLoad;
    };
    /** Value enum: "gift_card_load.updated". */
    "event_type"?: "gift_card_load.updated";
    /**
     *  environment_grant_id (Required): string. merchant_id (Required): string. mode (Required):
     * string. Value enum: "test", "live". partner_app_install_id (Required): string. sandbox_id
     * (Optional): string. type (Required): string. Value enum: "installed_merchants".
     */
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        /** Value enum: "test", "live". */
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        /** Value enum: "installed_merchants". */
        "type": "installed_merchants" | (string & {});
    });
});
/**
 * The `gift_card_load.updated` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type GiftCardLoadUpdatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link GiftCardLoad}. Independent funding resource. Value and
     * consideration are separate. External funding and import provenance are merchant-attested; no
     * payment is collected by recording them. Replacement refund lots retain original funding
     * provenance and do not represent new paid funding.
     */
    "data"?: {
        /**
         * Independent funding resource. Value and consideration are separate. External funding and
         * import provenance are merchant-attested; no payment is collected by recording them.
         * Replacement refund lots retain original funding provenance and do not represent new paid
         * funding.
         */
        "object": GiftCardLoad;
    };
    /** Value enum: "gift_card_load.updated". */
    "event_type"?: "gift_card_load.updated";
});
export type GiftCardLoadsGetParams = {};
export type GiftCardLoadsListParams = {
    /** Inclusive lower bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
    /**
     * Exact, case-sensitive filter. Accepts repeated keys, comma-separated values, or mixtures.
     * Values are trimmed and deduplicated in first-seen order; empty or unknown entries are
     * rejected. Values within this filter are ORed; separate filters are ANDed. [] enum:
     * "adjustment", "external_payment", "flint_manual_payment", "flint_payment",
     * "gift_card_purchase_refund_recovery", "gift_card_refund", "import", "store_credit". Value
     * enum: "adjustment", "external_payment", "flint_manual_payment", "flint_payment",
     * "gift_card_purchase_refund_recovery", "gift_card_refund", "import", "store_credit". anyOf[1]
     * (Value): Array of string. minItems: 1. [] enum: "adjustment", "external_payment",
     * "flint_manual_payment", "flint_payment", "gift_card_purchase_refund_recovery",
     * "gift_card_refund", "import", "store_credit". anyOf[1][] (Value): string. maxLength: 255.
     * Value enum: "adjustment", "external_payment", "flint_manual_payment", "flint_payment",
     * "gift_card_purchase_refund_recovery", "gift_card_refund", "import", "store_credit". anyOf[2]
     * (Value): string. maxLength: 255. Value enum: "adjustment", "external_payment",
     * "flint_manual_payment", "flint_payment", "gift_card_purchase_refund_recovery",
     * "gift_card_refund", "import", "store_credit".
     */
    "funding_source_type"?: InputValue<("adjustment"
        | "external_payment"
        | "flint_manual_payment"
        | "flint_payment"
        | "gift_card_purchase_refund_recovery"
        | "gift_card_refund"
        | "import"
        | "store_credit")
        | readonly ("adjustment"
        | "external_payment"
        | "flint_manual_payment"
        | "flint_payment"
        | "gift_card_purchase_refund_recovery"
        | "gift_card_refund"
        | "import"
        | "store_credit")[]>;
    /** Exact, case-sensitive filter. maxLength: 255. Example: "gc_01ARZ3NDEKTSV4RRFFQ69G5FAV". */
    "gift_card_id"?: InputValue<string>;
    /**
     * Filter by the original Idempotency-Key, after trimming surrounding whitespace. Matching is
     * exact and case-sensitive. Returns current authorized resources, not the recorded response. A
     * pending resource does not prove that the operation succeeded, and an empty list does not
     * prove that it had no effect. minLength: 1. maxLength: 255.
     */
    "idempotency_key"?: InputValue<string>;
    /** Exact, case-sensitive filter. maxLength: 255. Example: "ord_01ARZ3NDEKTSV4RRFFQ69G5FAV". */
    "order_id"?: InputValue<string>;
    /**
     * Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: 1. maximum:
     * 100. Default: 20.
     */
    "page_size"?: InputValue<number>;
    /**
     * Opaque next_page_token from the previous response. Omit on the first request. You may change
     * `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request
     * context. Do not parse or construct tokens. An invalid, expired, or mismatched token returns
     * a validation error.
     */
    "page_token"?: InputValue<string>;
    /**
     * Exact, case-sensitive reference for the payment or import record that funded this value.
     * minLength: 1. maxLength: 255.
     */
    "source_external_reference_id"?: InputValue<string>;
};
/** A message sent to a gift card recipient. */
export type GiftCardNotification = {
    /** RFC3339 timestamp. Format: date-time. */
    "created_at": string;
    /**
     * Included on notification retrieval. Contains the most recent sending attempts and delivery
     * events, newest first. A failed attempt describes the send call; use notification.status to
     * determine whether acceptance remains unconfirmed. Delivery history of a gift card
     * notification email: its send attempts and delivery events, and whether more of each exist.
     */
    "delivery"?: GiftCardNotificationDelivery;
    "gift_card_id": string;
    "gift_card_notification_id": string;
    /**
     * Who receives a gift card notification: their `email`, optional `name` and `message`, and an
     * optional `send_at` time.
     */
    "recipient": GiftCardPurchaseRecipient;
    "resend_of_notification_id"?: string;
    /** RFC3339 timestamp. Format: date-time. */
    "sent_at"?: string;
    /**
     * Value enum: "scheduled", "queued", "sending", "sent", "failed", "unconfirmed", "bounced",
     * "canceled".
     */
    "status": "scheduled"
        | "queued"
        | "sending"
        | "sent"
        | "failed"
        | "unconfirmed"
        | "bounced"
        | "canceled"
        | (string & {});
    /** RFC3339 timestamp. Format: date-time. */
    "updated_at": string;
    /** Format: int64. */
    "version": number;
};
export type GiftCardNotificationCreatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": GiftCardNotification;
    };
    "event_type"?: "gift_card_notification.created";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": GiftCardNotification;
    };
    "event_type"?: "gift_card_notification.created";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        "type": "installed_merchants" | (string & {});
    });
})))
    & {
    "event_type": "gift_card_notification.created";
});
/**
 * The `gift_card_notification.created` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type GiftCardNotificationCreatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link GiftCardNotification}. A message sent to a gift card recipient.
     */
    "data"?: {
        /** A message sent to a gift card recipient. */
        "object": GiftCardNotification;
    };
    /** Value enum: "gift_card_notification.created". */
    "event_type"?: "gift_card_notification.created";
    /**
     *  environment_grant_id (Required): string. merchant_id (Required): string. mode (Required):
     * string. Value enum: "test", "live". partner_app_install_id (Required): string. sandbox_id
     * (Optional): string. type (Required): string. Value enum: "installed_merchants".
     */
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        /** Value enum: "test", "live". */
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        /** Value enum: "installed_merchants". */
        "type": "installed_merchants" | (string & {});
    });
});
/**
 * The `gift_card_notification.created` webhook payload for the `merchant` event source. Fields
 * shared by merchant webhook payloads.
 */
export type GiftCardNotificationCreatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link GiftCardNotification}. A message sent to a gift card recipient.
     */
    "data"?: {
        /** A message sent to a gift card recipient. */
        "object": GiftCardNotification;
    };
    /** Value enum: "gift_card_notification.created". */
    "event_type"?: "gift_card_notification.created";
});
/**
 * Delivery history of a gift card notification email: its send attempts and delivery events, and
 * whether more of each exist.
 */
export type GiftCardNotificationDelivery = {
    /**
     * maxItems: 20. [] (Value): {@link GiftCardNotificationDeliveryAttempt}. One attempt to send a
     * gift card notification email, with its attempt number, status, and start and completion
     * times.
     */
    "attempts": Array<GiftCardNotificationDeliveryAttempt>;
    /**
     * maxItems: 50. [] (Value): {@link GiftCardNotificationDeliveryEvent}. A delivery event for a
     * gift card notification email, such as accepted, delivered, bounced, or dropped, with when it
     * occurred and was received.
     */
    "events": Array<GiftCardNotificationDeliveryEvent>;
    "has_more_attempts": boolean;
    "has_more_events": boolean;
};
/**
 * One attempt to send a gift card notification email, with its attempt number, status, and start
 * and completion times.
 */
export type GiftCardNotificationDeliveryAttempt = {
    /** Format: int64. */
    "attempt_number": number;
    /** RFC3339 timestamp. Format: date-time. */
    "completed_at"?: string;
    "delivery_attempt_id": string;
    /** RFC3339 timestamp. Format: date-time. */
    "started_at": string;
    /** Value enum: "started", "sent", "failed", "abandoned". */
    "status": "started" | "sent" | "failed" | "abandoned" | (string & {});
};
/**
 * A delivery event for a gift card notification email, such as accepted, delivered, bounced, or
 * dropped, with when it occurred and was received.
 */
export type GiftCardNotificationDeliveryEvent = {
    "delivery_attempt_id": string;
    /** RFC3339 timestamp. Format: date-time. */
    "occurred_at": string;
    /** RFC3339 timestamp. Format: date-time. */
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
    /**  [] (Value): {@link GiftCardNotification}. A message sent to a gift card recipient. */
    "data": Array<GiftCardNotification>;
    /**
     * Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent
     * request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    "next_page_token"?: string;
    /**
     * maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/**
 * Who receives a gift card notification: their `email`, optional `name` and `message`, and an
 * optional `send_at` time.
 */
export type GiftCardNotificationRecipientInput = {
    /** Format: email. minLength: 1. maxLength: 254. */
    "email": string;
    /** minLength: 1. maxLength: 200. */
    "message"?: string;
    /** minLength: 1. maxLength: 255. */
    "name"?: string;
    /**
     * Optional whole-second send time between now and 90 days from now. Format: date-time.
     * minLength: 1.
     */
    "send_at"?: string | globalThis.Date;
};
/** A response containing `GiftCardNotification` data. */
export type GiftCardNotificationResponse = {
    /** A message sent to a gift card recipient. */
    "data": GiftCardNotification;
    /**
     * Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent
     * request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
export type GiftCardNotificationUpdatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": GiftCardNotification;
    };
    "event_type"?: "gift_card_notification.updated";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": GiftCardNotification;
    };
    "event_type"?: "gift_card_notification.updated";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        "type": "installed_merchants" | (string & {});
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
     *  object (Required): {@link GiftCardNotification}. A message sent to a gift card recipient.
     */
    "data"?: {
        /** A message sent to a gift card recipient. */
        "object": GiftCardNotification;
    };
    /** Value enum: "gift_card_notification.updated". */
    "event_type"?: "gift_card_notification.updated";
    /**
     *  environment_grant_id (Required): string. merchant_id (Required): string. mode (Required):
     * string. Value enum: "test", "live". partner_app_install_id (Required): string. sandbox_id
     * (Optional): string. type (Required): string. Value enum: "installed_merchants".
     */
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        /** Value enum: "test", "live". */
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        /** Value enum: "installed_merchants". */
        "type": "installed_merchants" | (string & {});
    });
});
/**
 * The `gift_card_notification.updated` webhook payload for the `merchant` event source. Fields
 * shared by merchant webhook payloads.
 */
export type GiftCardNotificationUpdatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link GiftCardNotification}. A message sent to a gift card recipient.
     */
    "data"?: {
        /** A message sent to a gift card recipient. */
        "object": GiftCardNotification;
    };
    /** Value enum: "gift_card_notification.updated". */
    "event_type"?: "gift_card_notification.updated";
});
export type GiftCardNotificationsCancelParams = (InputValue<CancelGiftCardNotificationRequestInput>);
export type GiftCardNotificationsCreateParams = (InputValue<CreateGiftCardNotificationRequestInput>);
export type GiftCardNotificationsGetParams = {};
export type GiftCardNotificationsListParams = {
    /** Inclusive lower bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
    /** Exact, case-sensitive filter. maxLength: 255. Example: "gc_01ARZ3NDEKTSV4RRFFQ69G5FAV". */
    "gift_card_id"?: InputValue<string>;
    /**
     * Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: 1. maximum:
     * 100. Default: 20.
     */
    "page_size"?: InputValue<number>;
    /**
     * Opaque next_page_token from the previous response. Omit on the first request. You may change
     * `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request
     * context. Do not parse or construct tokens. An invalid, expired, or mismatched token returns
     * a validation error.
     */
    "page_token"?: InputValue<string>;
    /**
     * Exact, case-sensitive filter. Accepts repeated keys, comma-separated values, or mixtures.
     * Values are trimmed and deduplicated in first-seen order; empty or unknown entries are
     * rejected. Values within this filter are ORed; separate filters are ANDed. [] enum:
     * "bounced", "canceled", "failed", "queued", "scheduled", "sending", "sent", "unconfirmed".
     * Value enum: "bounced", "canceled", "failed", "queued", "scheduled", "sending", "sent",
     * "unconfirmed". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "bounced",
     * "canceled", "failed", "queued", "scheduled", "sending", "sent", "unconfirmed". anyOf[1][]
     * (Value): string. maxLength: 255. Value enum: "bounced", "canceled", "failed", "queued",
     * "scheduled", "sending", "sent", "unconfirmed". anyOf[2] (Value): string. maxLength: 255.
     * Value enum: "bounced", "canceled", "failed", "queued", "scheduled", "sending", "sent",
     * "unconfirmed".
     */
    "status"?: InputValue<("bounced" | "canceled" | "failed" | "queued" | "scheduled" | "sending" | "sent" | "unconfirmed")
        | readonly ("bounced" | "canceled" | "failed" | "queued" | "scheduled" | "sending" | "sent" | "unconfirmed")[]>;
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
     * amount (Required): integer string. Amount in the currency's smallest unit, such as cents for
     * USD. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * minimum: 1. maximum: 200000. currency (Required): string. Three-letter ISO 4217 currency
     * code. Value enum: "USD".
     */
    "face_value_money": {
        /**
         * Amount in the currency's smallest unit, such as cents for USD. Use an integer string
         * (decimal digits), not a floating-point number. Format: int64. minimum: 1. maximum:
         * 200000.
         */
        "amount": `${bigint}`;
        /** Three-letter ISO 4217 currency code. Value enum: "USD". */
        "currency": "USD" | (string & {});
    };
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
     * amount (Required): integer string. Amount in the currency's smallest unit, such as cents for
     * USD. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * minimum: 1. maximum: 200000. currency (Required): string. Three-letter ISO 4217 currency
     * code. Value enum: "USD".
     */
    "face_value_money": {
        /**
         * Amount in the currency's smallest unit, such as cents for USD. Use an integer string
         * (decimal digits), not a floating-point number. Format: int64. minimum: 1. maximum:
         * 200000.
         */
        "amount": `${bigint}` | bigint;
        /** Three-letter ISO 4217 currency code. Value enum: "USD". */
        "currency": "USD";
    };
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
     * Buyer-selected face value within the gift card offer's limits. The amount and every computed
     * order amount must not exceed 99999999 minor units ($999,999.99 USD). Flint rejects an input
     * or calculation above this ceiling with INVALID_REQUEST and detail INVALID_VALUE at the
     * responsible input field. Lower payment option limits can apply. amount (Required): integer
     * string. Amount in the currency's smallest unit, such as cents for USD. Use an integer string
     * (decimal digits), not a floating-point number. Format: int64. minimum: 1. maximum: 200000.
     * currency (Required): string. Three-letter ISO 4217 currency code. Value enum: "USD".
     */
    "face_value_money"?: {
        /**
         * Amount in the currency's smallest unit, such as cents for USD. Use an integer string
         * (decimal digits), not a floating-point number. Format: int64. minimum: 1. maximum:
         * 200000.
         */
        "amount": `${bigint}` | bigint;
        /** Three-letter ISO 4217 currency code. Value enum: "USD". */
        "currency": "USD";
    };
    /**
     * Recipient of a gift card purchase that you supply: `email`, optional `name` and `message`,
     * and an optional `send_at` time.
     */
    "recipient"?: GiftCardPurchaseRecipientRequestInput;
};
/**
 * The recipient of a purchased gift card: `email`, optional `name` and `message`, and an optional
 * `send_at` time.
 */
export type GiftCardPurchaseRecipient = {
    /** Format: email. minLength: 1. maxLength: 254. */
    "email": string;
    /** maxLength: 200. */
    "message"?: string;
    /** maxLength: 255. */
    "name"?: string;
    /**
     * Optional send time between now and 90 days from now. Omission requests immediate recipient
     * notification after funding. Format: date-time.
     */
    "send_at"?: string;
};
/**
 * Changes to the recipient of a gift card purchase when updating a line item. Send null for `name`
 * or `message` to clear it.
 */
export type GiftCardPurchaseRecipientPatchRequest = {
    /** Format: email. minLength: 1. maxLength: 254. */
    "email": string;
    /** Send null to clear it. minLength: 1. maxLength: 200. */
    "message"?: string | null;
    /** Send null to clear it. minLength: 1. maxLength: 255. */
    "name"?: string | null;
    /**
     * Optional send time between now and 90 days from now. Omission requests immediate recipient
     * notification after funding. Format: date-time. minLength: 1.
     */
    "send_at"?: string;
};
/**
 * Changes to the recipient of a gift card purchase when updating a line item. Send null for `name`
 * or `message` to clear it.
 */
export type GiftCardPurchaseRecipientPatchRequestInput = {
    /** Format: email. minLength: 1. maxLength: 254. */
    "email": string;
    /** Send null to clear it. minLength: 1. maxLength: 200. */
    "message"?: string | null;
    /** Send null to clear it. minLength: 1. maxLength: 255. */
    "name"?: string | null;
    /**
     * Optional send time between now and 90 days from now. Omission requests immediate recipient
     * notification after funding. Format: date-time. minLength: 1.
     */
    "send_at"?: string | globalThis.Date;
};
/**
 * Recipient of a gift card purchase that you supply: `email`, optional `name` and `message`, and
 * an optional `send_at` time.
 */
export type GiftCardPurchaseRecipientRequestInput = {
    /** Format: email. minLength: 1. maxLength: 254. */
    "email": string;
    /** minLength: 1. maxLength: 200. */
    "message"?: string;
    /** minLength: 1. maxLength: 255. */
    "name"?: string;
    /**
     * Optional send time between now and 90 days from now. Omission requests immediate recipient
     * notification after funding. Format: date-time. minLength: 1.
     */
    "send_at"?: string | globalThis.Date;
};
/** An entry in a gift card load's purchase refunds. */
export type GiftCardPurchaseRefundAllocation = {
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "consideration_money": MoneyValue;
    /** RFC3339 timestamp. Format: date-time. */
    "created_at": string;
    "order_manual_reversal_id"?: string;
    "purchase_refund_allocation_id": string;
    /**
     * Records how value was recovered for a gift card purchase refund, on the original or a
     * replacement card, with the destinations that received it.
     */
    "recovery"?: GiftCardPurchaseRefundRecovery;
    "refund_id": string | null;
    /** Value enum: "pending", "succeeded", "failed". */
    "status": "pending" | "succeeded" | "failed" | (string & {});
    /** RFC3339 timestamp. Format: date-time. */
    "updated_at": string;
    /**
     * Actual value lots reserved or reversed for this original cash refund. Omitted when all value
     * remains on the original load. [] (Value): {@link GiftCardPurchaseRefundValueAllocation}. A
     * gift card load and amount reserved or reversed for a gift card purchase refund.
     */
    "value_allocations"?: Array<GiftCardPurchaseRefundValueAllocation>;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "value_money": MoneyValue;
    /** Format: int64. */
    "version": number;
};
/**
 * Records how value was recovered for a gift card purchase refund, on the original or a
 * replacement card, with the destinations that received it.
 */
export type GiftCardPurchaseRefundRecovery = {
    /** RFC3339 timestamp. Format: date-time. */
    "created_at": string;
    /** Value enum: "original", "replacement". */
    "destination": "original" | "replacement" | (string & {});
    /**
     *  [] (Value): {@link GiftCardPurchaseRefundRecoveryDestination}. A gift card and load that
     * received recovered value in a gift card purchase refund recovery, with the amount.
     */
    "destinations": Array<GiftCardPurchaseRefundRecoveryDestination>;
};
/**
 * A gift card and load that received recovered value in a gift card purchase refund recovery, with
 * the amount.
 */
export type GiftCardPurchaseRefundRecoveryDestination = {
    "gift_card_id": string;
    "gift_card_load_id": string;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "value_money": MoneyValue;
};
/** A gift card load and amount reserved or reversed for a gift card purchase refund. */
export type GiftCardPurchaseRefundValueAllocation = {
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "amount_money": MoneyValue;
    "gift_card_id": string;
    "gift_card_load_id": string;
};
/**
 * Gift card value held back by a purchase refund, with the refund, the root gift card and load,
 * and the amount held.
 */
export type GiftCardPurchaseRefundValueHold = {
    "purchase_refund_allocation_id": string;
    "refund_id": string;
    "root_gift_card_id": string;
    "root_gift_card_load_id": string;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "value_money": MoneyValue;
};
/**
 * Gift card details for an order line item: the `face_value_money` and the `recipient` who
 * receives the card.
 */
export type GiftCardPurchaseRequest = {
    /**
     * Buyer-selected face value within the gift card offer's limits. The amount and every computed
     * order amount must not exceed 99999999 minor units ($999,999.99 USD). Flint rejects an input
     * or calculation above this ceiling with INVALID_REQUEST and detail INVALID_VALUE at the
     * responsible input field. Lower payment option limits can apply. amount (Required): integer
     * string. Amount in the currency's smallest unit, such as cents for USD. Use an integer string
     * (decimal digits), not a floating-point number. Format: int64. minimum: 1. maximum: 200000.
     * currency (Required): string. Three-letter ISO 4217 currency code. Value enum: "USD".
     */
    "face_value_money"?: {
        /**
         * Amount in the currency's smallest unit, such as cents for USD. Use an integer string
         * (decimal digits), not a floating-point number. Format: int64. minimum: 1. maximum:
         * 200000.
         */
        "amount": `${bigint}`;
        /** Three-letter ISO 4217 currency code. Value enum: "USD". */
        "currency": "USD" | (string & {});
    };
    /**
     * The recipient of a purchased gift card: `email`, optional `name` and `message`, and an
     * optional `send_at` time.
     */
    "recipient"?: GiftCardPurchaseRecipient;
};
/**
 * Links a gift card load to the original card and load it restores value to after a purchase
 * refund, for one unit of an order line item.
 */
export type GiftCardPurchaseRestoration = {
    "order_line_item_id": string;
    "original_gift_card_id": string;
    "original_gift_card_load_id": string;
    "purchase_refund_allocation_id": string;
    /** Format: int64. */
    "unit_ordinal": number;
};
/**
 * The gift card purchase details saved on an order line item: configuration, face value, price
 * paid, and recipient.
 */
export type GiftCardPurchaseSnapshot = {
    /**
     *  anyOf[1] (Value): {@link GiftCardProductConfiguration}. Gift card settings on a product
     * variant: its `face_value_money`, price mode (face value or discounted), and bounds for
     * custom amounts. anyOf[2] (Value): null.
     */
    "configuration": ((GiftCardProductConfiguration) | (null));
    /**
     *  amount (Required): integer string. Amount in the currency's smallest unit, such as cents
     * for USD. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * minimum: 1. maximum: 200000. currency (Required): string. Three-letter ISO 4217 currency
     * code. Value enum: "USD".
     */
    "consideration_money": {
        /**
         * Amount in the currency's smallest unit, such as cents for USD. Use an integer string
         * (decimal digits), not a floating-point number. Format: int64. minimum: 1. maximum:
         * 200000.
         */
        "amount": `${bigint}`;
        /** Three-letter ISO 4217 currency code. Value enum: "USD". */
        "currency": "USD" | (string & {});
    };
    /**
     *  amount (Required): integer string. Amount in the currency's smallest unit, such as cents
     * for USD. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * minimum: 1. maximum: 200000. currency (Required): string. Three-letter ISO 4217 currency
     * code. Value enum: "USD".
     */
    "face_value_money": {
        /**
         * Amount in the currency's smallest unit, such as cents for USD. Use an integer string
         * (decimal digits), not a floating-point number. Format: int64. minimum: 1. maximum:
         * 200000.
         */
        "amount": `${bigint}`;
        /** Three-letter ISO 4217 currency code. Value enum: "USD". */
        "currency": "USD" | (string & {});
    };
    /**
     * The recipient of a purchased gift card: `email`, optional `name` and `message`, and an
     * optional `send_at` time.
     */
    "recipient"?: GiftCardPurchaseRecipient;
    /**
     *  amount (Required): integer string. Amount in the currency's smallest unit, such as cents
     * for USD. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * minimum: 1. maximum: 200000. currency (Required): string. Three-letter ISO 4217 currency
     * code. Value enum: "USD".
     */
    "reference_price_money": {
        /**
         * Amount in the currency's smallest unit, such as cents for USD. Use an integer string
         * (decimal digits), not a floating-point number. Format: int64. minimum: 1. maximum:
         * 200000.
         */
        "amount": `${bigint}`;
        /** Three-letter ISO 4217 currency code. Value enum: "USD". */
        "currency": "USD" | (string & {});
    };
};
/**
 * Independent redemption resource. Operational reservations are separate from immutable posted
 * transactions. Refund captured value with `POST /v1/refunds`, using a `tender_allocations` entry
 * with `tender_type` `gift_card_redemption` and this redemption's ID. Refunds keep the redemption
 * `captured` and increase `refunded_money`.
 */
export type GiftCardRedemption = {
    /** Value enum: "automatic", "manual". */
    "capture_mode": "automatic" | "manual" | (string & {});
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "captured_money": MoneyValue;
    /** RFC3339 timestamp. Format: date-time. */
    "created_at": string;
    /**
     * When an uncaptured manual reservation expires. null for automatic capture, which posts
     * immediately. Format: date-time.
     */
    "expires_at": string | null;
    "gift_card_id": string;
    "gift_card_redemption_id": string;
    /**
     * Your Idempotency-Key for the command that created this record. null when Flint created it or
     * no key was sent.
     */
    "idempotency_key": string | null;
    "order_id": string | null;
    /**
     * The order payment attempt the redemption belongs to. Set for source_type flint_order; null
     * for external.
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
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "requested_money": MoneyValue;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "reserved_money": MoneyValue;
    /**
     * Your reference for the sale the redemption pays for. Set for source_type external; null for
     * flint_order. maxLength: 255.
     */
    "sale_reference": string | null;
    /** Value enum: "external", "flint_order". */
    "source_type": "external" | "flint_order" | (string & {});
    /** Value enum: "reserved", "captured", "canceled", "expired". */
    "status": "reserved" | "captured" | "canceled" | "expired" | (string & {});
    /** RFC3339 timestamp. Format: date-time. */
    "updated_at": string;
    /** Format: int64. */
    "version": number;
};
export type GiftCardRedemptionCreatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": GiftCardRedemption;
    };
    "event_type"?: "gift_card_redemption.created";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": GiftCardRedemption;
    };
    "event_type"?: "gift_card_redemption.created";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        "type": "installed_merchants" | (string & {});
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
     *  object (Required): {@link GiftCardRedemption}. Independent redemption resource. Operational
     * reservations are separate from immutable posted transactions. Refund captured value with
     * `POST /v1/refunds`, using a `tender_allocations` entry with `tender_type`
     * `gift_card_redemption` and this redemption's ID. Refunds keep the redemption `captured` and
     * increase `refunded_money`.
     */
    "data"?: {
        /**
         * Independent redemption resource. Operational reservations are separate from immutable
         * posted transactions. Refund captured value with `POST /v1/refunds`, using a
         * `tender_allocations` entry with `tender_type` `gift_card_redemption` and this
         * redemption's ID. Refunds keep the redemption `captured` and increase `refunded_money`.
         */
        "object": GiftCardRedemption;
    };
    /** Value enum: "gift_card_redemption.created". */
    "event_type"?: "gift_card_redemption.created";
    /**
     *  environment_grant_id (Required): string. merchant_id (Required): string. mode (Required):
     * string. Value enum: "test", "live". partner_app_install_id (Required): string. sandbox_id
     * (Optional): string. type (Required): string. Value enum: "installed_merchants".
     */
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        /** Value enum: "test", "live". */
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        /** Value enum: "installed_merchants". */
        "type": "installed_merchants" | (string & {});
    });
});
/**
 * The `gift_card_redemption.created` webhook payload for the `merchant` event source. Fields
 * shared by merchant webhook payloads.
 */
export type GiftCardRedemptionCreatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link GiftCardRedemption}. Independent redemption resource. Operational
     * reservations are separate from immutable posted transactions. Refund captured value with
     * `POST /v1/refunds`, using a `tender_allocations` entry with `tender_type`
     * `gift_card_redemption` and this redemption's ID. Refunds keep the redemption `captured` and
     * increase `refunded_money`.
     */
    "data"?: {
        /**
         * Independent redemption resource. Operational reservations are separate from immutable
         * posted transactions. Refund captured value with `POST /v1/refunds`, using a
         * `tender_allocations` entry with `tender_type` `gift_card_redemption` and this
         * redemption's ID. Refunds keep the redemption `captured` and increase `refunded_money`.
         */
        "object": GiftCardRedemption;
    };
    /** Value enum: "gift_card_redemption.created". */
    "event_type"?: "gift_card_redemption.created";
});
/** A page of `GiftCardRedemption` objects. */
export type GiftCardRedemptionListResponse = {
    /**
     *  [] (Value): {@link GiftCardRedemption}. Independent redemption resource. Operational
     * reservations are separate from immutable posted transactions. Refund captured value with
     * `POST /v1/refunds`, using a `tender_allocations` entry with `tender_type`
     * `gift_card_redemption` and this redemption's ID. Refunds keep the redemption `captured` and
     * increase `refunded_money`.
     */
    "data": Array<GiftCardRedemption>;
    /**
     * Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent
     * request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    "next_page_token"?: string;
    /**
     * maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/** A response containing `GiftCardRedemption` data. */
export type GiftCardRedemptionResponse = {
    /**
     * Independent redemption resource. Operational reservations are separate from immutable posted
     * transactions. Refund captured value with `POST /v1/refunds`, using a `tender_allocations`
     * entry with `tender_type` `gift_card_redemption` and this redemption's ID. Refunds keep the
     * redemption `captured` and increase `refunded_money`.
     */
    "data": GiftCardRedemption;
    /**
     * Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent
     * request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/**
 * Result of redeeming a gift card: the updated gift card, the redemption, and the resulting
 * transactions.
 */
export type GiftCardRedemptionResult = {
    /**
     * Merchant-issued purchased gift card. Posted balance includes reserved value; available value
     * is balance minus reservations. Frozen value remains part of outstanding liability. Gift
     * cards are independent resources and cannot be transferred across merchants or currencies.
     */
    "gift_card": GiftCard;
    /**
     * Independent redemption resource. Operational reservations are separate from immutable posted
     * transactions. Refund captured value with `POST /v1/refunds`, using a `tender_allocations`
     * entry with `tender_type` `gift_card_redemption` and this redemption's ID. Refunds keep the
     * redemption `captured` and increase `refunded_money`.
     */
    "gift_card_redemption": GiftCardRedemption;
    /**
     *  [] (Value): {@link GiftCardTransaction}. Immutable posted financial movement with signed
     * amount, per-card sequence, merchant sequence and balance snapshots. Corrections create new
     * transactions.
     */
    "gift_card_transactions": Array<GiftCardTransaction>;
};
/** A response containing `GiftCardRedemptionResult` data. */
export type GiftCardRedemptionResultResponse = {
    /**
     * Result of redeeming a gift card: the updated gift card, the redemption, and the resulting
     * transactions.
     */
    "data": GiftCardRedemptionResult;
    /**
     * Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent
     * request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
export type GiftCardRedemptionUpdatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": GiftCardRedemption;
    };
    "event_type"?: "gift_card_redemption.updated";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": GiftCardRedemption;
    };
    "event_type"?: "gift_card_redemption.updated";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        "type": "installed_merchants" | (string & {});
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
     *  object (Required): {@link GiftCardRedemption}. Independent redemption resource. Operational
     * reservations are separate from immutable posted transactions. Refund captured value with
     * `POST /v1/refunds`, using a `tender_allocations` entry with `tender_type`
     * `gift_card_redemption` and this redemption's ID. Refunds keep the redemption `captured` and
     * increase `refunded_money`.
     */
    "data"?: {
        /**
         * Independent redemption resource. Operational reservations are separate from immutable
         * posted transactions. Refund captured value with `POST /v1/refunds`, using a
         * `tender_allocations` entry with `tender_type` `gift_card_redemption` and this
         * redemption's ID. Refunds keep the redemption `captured` and increase `refunded_money`.
         */
        "object": GiftCardRedemption;
    };
    /** Value enum: "gift_card_redemption.updated". */
    "event_type"?: "gift_card_redemption.updated";
    /**
     *  environment_grant_id (Required): string. merchant_id (Required): string. mode (Required):
     * string. Value enum: "test", "live". partner_app_install_id (Required): string. sandbox_id
     * (Optional): string. type (Required): string. Value enum: "installed_merchants".
     */
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        /** Value enum: "test", "live". */
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        /** Value enum: "installed_merchants". */
        "type": "installed_merchants" | (string & {});
    });
});
/**
 * The `gift_card_redemption.updated` webhook payload for the `merchant` event source. Fields
 * shared by merchant webhook payloads.
 */
export type GiftCardRedemptionUpdatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link GiftCardRedemption}. Independent redemption resource. Operational
     * reservations are separate from immutable posted transactions. Refund captured value with
     * `POST /v1/refunds`, using a `tender_allocations` entry with `tender_type`
     * `gift_card_redemption` and this redemption's ID. Refunds keep the redemption `captured` and
     * increase `refunded_money`.
     */
    "data"?: {
        /**
         * Independent redemption resource. Operational reservations are separate from immutable
         * posted transactions. Refund captured value with `POST /v1/refunds`, using a
         * `tender_allocations` entry with `tender_type` `gift_card_redemption` and this
         * redemption's ID. Refunds keep the redemption `captured` and increase `refunded_money`.
         */
        "object": GiftCardRedemption;
    };
    /** Value enum: "gift_card_redemption.updated". */
    "event_type"?: "gift_card_redemption.updated";
});
export type GiftCardRedemptionsCancelParams = (InputValue<GiftCardVersionRequestInput>);
export type GiftCardRedemptionsCaptureParams = GiftCardRedemptionsCancelParams;
export type GiftCardRedemptionsCreateParams = (CreateGiftCardRedemptionRequestInput);
export type GiftCardRedemptionsGetParams = {};
export type GiftCardRedemptionsListParams = {
    /** Inclusive lower bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
    /** Exact, case-sensitive filter. maxLength: 255. Example: "gc_01ARZ3NDEKTSV4RRFFQ69G5FAV". */
    "gift_card_id"?: InputValue<string>;
    /**
     * Filter by the original Idempotency-Key, after trimming surrounding whitespace. Matching is
     * exact and case-sensitive. Returns current authorized resources, not the recorded response. A
     * pending resource does not prove that the operation succeeded, and an empty list does not
     * prove that it had no effect. minLength: 1. maxLength: 255.
     */
    "idempotency_key"?: InputValue<string>;
    /** Exact, case-sensitive filter. maxLength: 255. Example: "ord_01ARZ3NDEKTSV4RRFFQ69G5FAV". */
    "order_id"?: InputValue<string>;
    /**
     * Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: 1. maximum:
     * 100. Default: 20.
     */
    "page_size"?: InputValue<number>;
    /**
     * Opaque next_page_token from the previous response. Omit on the first request. You may change
     * `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request
     * context. Do not parse or construct tokens. An invalid, expired, or mismatched token returns
     * a validation error.
     */
    "page_token"?: InputValue<string>;
    /**
     * Exact, case-sensitive filter on your reference for the sale. Matches only external
     * redemptions. minLength: 1. maxLength: 255.
     */
    "sale_reference"?: InputValue<string>;
    /**
     * Exact, case-sensitive filter. Accepts repeated keys, comma-separated values, or mixtures.
     * Values are trimmed and deduplicated in first-seen order; empty or unknown entries are
     * rejected. Values within this filter are ORed; separate filters are ANDed. [] enum:
     * "external", "flint_order". Value enum: "external", "flint_order". anyOf[1] (Value): Array of
     * string. minItems: 1. [] enum: "external", "flint_order". anyOf[1][] (Value): string.
     * maxLength: 255. Value enum: "external", "flint_order". anyOf[2] (Value): string. maxLength:
     * 255. Value enum: "external", "flint_order".
     */
    "source_type"?: InputValue<("external" | "flint_order") | readonly ("external" | "flint_order")[]>;
    /**
     * Exact, case-sensitive filter. Accepts repeated keys, comma-separated values, or mixtures.
     * Values are trimmed and deduplicated in first-seen order; empty or unknown entries are
     * rejected. Values within this filter are ORed; separate filters are ANDed. [] enum:
     * "canceled", "captured", "expired", "reserved". Value enum: "canceled", "captured",
     * "expired", "reserved". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "canceled",
     * "captured", "expired", "reserved". anyOf[1][] (Value): string. maxLength: 255. Value enum:
     * "canceled", "captured", "expired", "reserved". anyOf[2] (Value): string. maxLength: 255.
     * Value enum: "canceled", "captured", "expired", "reserved".
     */
    "status"?: InputValue<("canceled" | "captured" | "expired" | "reserved")
        | readonly ("canceled" | "captured" | "expired" | "reserved")[]>;
};
/**
 * Traces a gift card load made by a refund back to its original funding source, root gift card and
 * load, and source refund.
 */
export type GiftCardRefundProvenance = {
    /**
     *  anyOf[1] (Value): {@link MoneyValue}. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code. anyOf[2] (Value): null.
     */
    "original_consideration_money": ((MoneyValue) | (null));
    /** Format: date-time. */
    "original_created_at": string;
    /**
     * Where the value of a gift card load came from, such as an external payment, a Flint payment,
     * an import, or an adjustment, with your reference for it. funding_source_type (Required):
     * string. Value enum: "external_payment", "flint_payment", "flint_manual_payment", "import",
     * "adjustment", "store_credit". customer_id (Optional): string. minLength: 1. maxLength: 255.
     * external_reference_id (Required): string. Your reference for the payment or import record
     * that funded this value, such as a POS sale ID. Required; 1 to 255 characters. minLength: 1.
     * maxLength: 255. order_id (Optional): string. minLength: 1. maxLength: 255.
     * order_manual_payment_id (Optional): string. minLength: 1. maxLength: 255. payment_intent_id
     * (Optional): string. The original payment for flint_payment or store_credit value. For
     * standalone paid funding, use a captured payment intent without an order_id. Order-linked
     * payments fund purchased cards or store credit through their order. minLength: 1. maxLength:
     * 255. refund_id (Optional): string. Refund that issued this value. Present only when
     * funding_source_type is store_credit. minLength: 1. oneOf[1] (Value): {@link
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
    /** Format: date-time. */
    "original_source_created_at": string | null;
    "refund_allocation_id": string;
    "root_gift_card_id": string;
    "root_gift_card_load_id": string;
    "source_gift_card_id": string;
    "source_gift_card_redemption_id": string;
    "source_purchase_refund_allocation_id"?: string;
    "source_refund_id"?: string;
};
/** A response containing `GiftCard` data. */
export type GiftCardResponse = {
    /**
     * Merchant-issued purchased gift card. Posted balance includes reserved value; available value
     * is balance minus reservations. Frozen value remains part of outstanding liability. Gift
     * cards are independent resources and cannot be transferred across merchants or currencies.
     */
    "data": GiftCard;
    /**
     * Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent
     * request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
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
     * card. pattern: ^du_[0-9A-HJKMNP-TV-Z]{26}$.
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
     * Your reference for the cash you paid the buyer outside Flint. Set only on cash_out
     * transactions; null for other transactions. maxLength: 255.
     */
    "cash_out_reference": string | null;
    /** Gift card whose balance this transaction changed. */
    "gift_card_id": string;
    /** Stable identifier of the transaction. */
    "gift_card_transaction_id": string;
    /**
     * Your Idempotency-Key for the command that created this record. null when Flint created it or
     * no key was sent.
     */
    "idempotency_key": string | null;
    /**
     * Position of this transaction among all of your gift card transactions in this environment.
     * It increases by one with each posted transaction, and the transaction list is ordered by it.
     * Format: int64.
     */
    "merchant_sequence": number;
    /** Order this transaction belongs to, when there is one. */
    "order_id"?: string;
    /** When the transaction was posted to the card. Format: date-time. */
    "posted_at": string;
    /**
     * Your adjustment reason on adjustment transactions; customer_request on cash_out; null on all
     * other transaction types. Value enum: "complimentary", "balance_accidentally_decreased",
     * "support_issue", "suspicious_activity", "balance_accidentally_increased",
     * "customer_request", null.
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
     * refund, or gift_card_funding_disposition. null when the cause has no public resource.
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
        "object": GiftCardTransaction;
    };
    "event_type"?: "gift_card_transaction.created";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": GiftCardTransaction;
    };
    "event_type"?: "gift_card_transaction.created";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        "type": "installed_merchants" | (string & {});
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
     *  object (Required): {@link GiftCardTransaction}. Immutable posted financial movement with
     * signed amount, per-card sequence, merchant sequence and balance snapshots. Corrections
     * create new transactions.
     */
    "data"?: {
        /**
         * Immutable posted financial movement with signed amount, per-card sequence, merchant
         * sequence and balance snapshots. Corrections create new transactions.
         */
        "object": GiftCardTransaction;
    };
    /** Value enum: "gift_card_transaction.created". */
    "event_type"?: "gift_card_transaction.created";
    /**
     *  environment_grant_id (Required): string. merchant_id (Required): string. mode (Required):
     * string. Value enum: "test", "live". partner_app_install_id (Required): string. sandbox_id
     * (Optional): string. type (Required): string. Value enum: "installed_merchants".
     */
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        /** Value enum: "test", "live". */
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        /** Value enum: "installed_merchants". */
        "type": "installed_merchants" | (string & {});
    });
});
/**
 * The `gift_card_transaction.created` webhook payload for the `merchant` event source. Fields
 * shared by merchant webhook payloads.
 */
export type GiftCardTransactionCreatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link GiftCardTransaction}. Immutable posted financial movement with
     * signed amount, per-card sequence, merchant sequence and balance snapshots. Corrections
     * create new transactions.
     */
    "data"?: {
        /**
         * Immutable posted financial movement with signed amount, per-card sequence, merchant
         * sequence and balance snapshots. Corrections create new transactions.
         */
        "object": GiftCardTransaction;
    };
    /** Value enum: "gift_card_transaction.created". */
    "event_type"?: "gift_card_transaction.created";
});
/** A page of `GiftCardTransaction` objects. */
export type GiftCardTransactionListResponse = {
    /**
     *  [] (Value): {@link GiftCardTransaction}. Immutable posted financial movement with signed
     * amount, per-card sequence, merchant sequence and balance snapshots. Corrections create new
     * transactions.
     */
    "data": Array<GiftCardTransaction>;
    /**
     * Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent
     * request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    "next_page_token"?: string;
    /**
     * maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
export type GiftCardTransactionsListParams = {
    /**
     * Exact, case-sensitive filter on your reference for the cash paid to the buyer outside Flint.
     * Matches only cash_out transactions. minLength: 1. maxLength: 255.
     */
    "cash_out_reference"?: InputValue<string>;
    /** Exact, case-sensitive filter. maxLength: 255. Example: "gc_01ARZ3NDEKTSV4RRFFQ69G5FAV". */
    "gift_card_id"?: InputValue<string>;
    /**
     * Filter by the original Idempotency-Key, after trimming surrounding whitespace. Matching is
     * exact and case-sensitive. Returns current authorized resources, not the recorded response. A
     * pending resource does not prove that the operation succeeded, and an empty list does not
     * prove that it had no effect. minLength: 1. maxLength: 255.
     */
    "idempotency_key"?: InputValue<string>;
    /** Exact, case-sensitive filter. maxLength: 255. Example: "ord_01ARZ3NDEKTSV4RRFFQ69G5FAV". */
    "order_id"?: InputValue<string>;
    /**
     * Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: 1. maximum:
     * 100. Default: 20.
     */
    "page_size"?: InputValue<number>;
    /**
     * Opaque next_page_token from the previous response. Omit on the first request. You may change
     * `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request
     * context. Do not parse or construct tokens. An invalid, expired, or mismatched token returns
     * a validation error.
     */
    "page_token"?: InputValue<string>;
    /** Inclusive lower bound on posted_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "posted_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on posted_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "posted_before"?: InputValue<string | globalThis.Date>;
    /** Exact, case-sensitive filter. maxLength: 255. */
    "source_id"?: InputValue<string>;
    /**
     * Exact, case-sensitive filter. Accepts repeated keys, comma-separated values, or mixtures.
     * Values are trimmed and deduplicated in first-seen order; empty or unknown entries are
     * rejected. Values within this filter are ORed; separate filters are ANDed. [] enum:
     * "gift_card_funding_disposition", "gift_card_load", "gift_card_redemption",
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
     * Filter by transaction_type. Repeat the parameter or send a comma-separated list to match any
     * of several values. Accepts repeated keys, comma-separated values, or mixtures. Values are
     * trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values
     * within this filter are ORed; separate filters are ANDed. [] enum: "load", "import",
     * "redeem", "refund", "refund_transfer", "adjustment", "cash_out", "purchase_reversal",
     * "funding_loss_accepted", "purchase_refund_recovery", "purchase_refund_recovery_transfer".
     * Value enum: "load", "import", "redeem", "refund", "refund_transfer", "adjustment",
     * "cash_out", "purchase_reversal", "funding_loss_accepted", "purchase_refund_recovery",
     * "purchase_refund_recovery_transfer". anyOf[1] (Value): Array of string. minItems: 1. []
     * enum: "load", "import", "redeem", "refund", "refund_transfer", "adjustment", "cash_out",
     * "purchase_reversal", "funding_loss_accepted", "purchase_refund_recovery",
     * "purchase_refund_recovery_transfer". anyOf[1][] (Value): string. Value enum: "load",
     * "import", "redeem", "refund", "refund_transfer", "adjustment", "cash_out",
     * "purchase_reversal", "funding_loss_accepted", "purchase_refund_recovery",
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
};
export type GiftCardUpdatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": GiftCard;
    };
    "event_type"?: "gift_card.updated";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": GiftCard;
    };
    "event_type"?: "gift_card.updated";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        "type": "installed_merchants" | (string & {});
    });
})))
    & {
    "event_type": "gift_card.updated";
});
