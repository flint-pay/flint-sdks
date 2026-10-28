import type { MoneyValue } from './types-33.js';
import type { GiftCardProductConfiguration, GiftCard, GiftCardFundingSource } from './types-20.js';
import type { ResponseMeta, ResourceReference } from './types-42.js';
import type { InputValue } from '../runtime.js';
import type { CreateGiftCardRedemptionRequestInput, CreateGiftCardRequestInput } from './types-7.js';
import type { LookupGiftCardRequestInput } from './types-31.js';
import type { RotateGiftCardCodeRequestInput } from './types-46.js';
import type { TransitionGiftCardRequestInput } from './types-50.js';
import type { UpdateGiftCardRequestInput } from './types-51.js';
import type { Webhook_payment_review_reopened_installed_merchants, Webhook_payment_review_reopened_merchant } from './types-63.js';
import type {
    Webhook_dispute_prevented_merchant,
    Webhook_environment_grant_created_partner_app,
    Webhook_delivery_rate_callback_created_installed_merchants,
    Webhook_delivery_rate_callback_created_merchant
} from './types-59.js';
import type {
    Webhook_inventory_reservation_committed_installed_merchants,
    Webhook_inventory_reservation_committed_merchant,
    Webhook_gift_card_transaction_created_installed_merchants,
    Webhook_gift_card_transaction_created_merchant,
    Webhook_gift_card_redemption_updated_installed_merchants,
    Webhook_gift_card_redemption_updated_merchant
} from './types-60.js';
import type {
    Webhook_payment_intent_requires_action_installed_merchants,
    Webhook_payment_intent_requires_action_merchant,
    Webhook_payment_method_activated_installed_merchants,
    Webhook_payment_method_activated_merchant,
    Webhook_order_updated_installed_merchants,
    Webhook_order_updated_merchant
} from './types-62.js';
import type {
    Webhook_invoice_payment_attempt_settled_installed_merchants,
    Webhook_invoice_payment_attempt_settled_merchant
} from './types-61.js';
import type {
    Webhook_credit_note_allocation_reversed_installed_merchants,
    Webhook_credit_note_allocation_reversed_merchant,
    Webhook_checkout_session_created_installed_merchants,
    Webhook_checkout_session_created_merchant
} from './types-58.js';
/**
 * Shape $ (Value): {@link GiftCardPurchaseRecipient}. The recipient of a purchased gift card:
 * `email`, optional `name` and `message`, and an optional `send_at` time.
 */
export type GiftCardPurchaseRecipient = {
    /** Shape $ (Value): string. Format: email. minLength: 1. maxLength: 254. */
    "email": string;
    /** Shape $ (Value): string. maxLength: 200. */
    "message"?: string;
    /** Shape $ (Value): string. maxLength: 255. */
    "name"?: string;
    /**
     * Shape $ (Value): string. Optional send time between now and 90 days from now. Omission
     * requests immediate recipient notification after funding. Format: date-time.
     */
    "send_at"?: string;
};
/**
 * Shape $ (Value): {@link GiftCardPurchaseRecipientPatchRequest}. Changes to the recipient of a
 * gift card purchase when updating a line item. Send null for `name` or `message` to clear it.
 */
export type GiftCardPurchaseRecipientPatchRequest = {
    /** Shape $ (Value): string. Format: email. minLength: 1. maxLength: 254. */
    "email": string;
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1. maxLength: 200. */
    "message"?: string | null;
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1. maxLength: 255. */
    "name"?: string | null;
    /**
     * Shape $ (Value): string. Optional send time between now and 90 days from now. Omission
     * requests immediate recipient notification after funding. Format: date-time. minLength: 1.
     */
    "send_at"?: string;
};
/**
 * Shape $ (Value): {@link GiftCardPurchaseRecipientPatchRequestInput}. Changes to the recipient of
 * a gift card purchase when updating a line item. Send null for `name` or `message` to clear it.
 */
export type GiftCardPurchaseRecipientPatchRequestInput = {
    /** Shape $ (Value): string. Format: email. minLength: 1. maxLength: 254. */
    "email": string;
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1. maxLength: 200. */
    "message"?: string | null;
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1. maxLength: 255. */
    "name"?: string | null;
    /**
     * Shape $ (Value): string. Optional send time between now and 90 days from now. Omission
     * requests immediate recipient notification after funding. Format: date-time. minLength: 1.
     */
    "send_at"?: string | globalThis.Date;
};
/**
 * Shape $ (Value): {@link GiftCardPurchaseRecipientRequestInput}. Recipient of a gift card
 * purchase that you supply: `email`, optional `name` and `message`, and an optional `send_at`
 * time.
 */
export type GiftCardPurchaseRecipientRequestInput = {
    /** Shape $ (Value): string. Format: email. minLength: 1. maxLength: 254. */
    "email": string;
    /** Shape $ (Value): string. minLength: 1. maxLength: 200. */
    "message"?: string;
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "name"?: string;
    /**
     * Shape $ (Value): string. Optional send time between now and 90 days from now. Omission
     * requests immediate recipient notification after funding. Format: date-time. minLength: 1.
     */
    "send_at"?: string | globalThis.Date;
};
/**
 * Shape $ (Value): {@link GiftCardPurchaseRefundAllocation}. An entry in a gift card load's
 * purchase refunds.
 */
export type GiftCardPurchaseRefundAllocation = {
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "consideration_money": MoneyValue;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "created_at": string;
    /** Shape $ (Value): string. */
    "order_manual_reversal_id"?: string;
    /** Shape $ (Value): string. */
    "purchase_refund_allocation_id": string;
    /**
     * Shape $ (Value): {@link GiftCardPurchaseRefundRecovery}. Records how value was recovered for
     * a gift card purchase refund, on the original or a replacement card, with the destinations
     * that received it.
     */
    "recovery"?: GiftCardPurchaseRefundRecovery;
    /** Shape $ (Value): string or null. */
    "refund_id": string | null;
    /** Shape $ (Value): string.  Value enum: "pending", "succeeded", "failed". */
    "status": "pending" | "succeeded" | "failed" | (string & {});
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "updated_at": string;
    /**
     * Shape $ (Value): Array of {@link GiftCardPurchaseRefundValueAllocation}. Actual value lots
     * reserved or reversed for this original cash refund. Omitted when all value remains on the
     * original load. Shape $[] (Value): {@link GiftCardPurchaseRefundValueAllocation}. A gift card
     * load and amount reserved or reversed for a gift card purchase refund.
     */
    "value_allocations"?: Array<GiftCardPurchaseRefundValueAllocation>;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "value_money": MoneyValue;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64.
     */
    "version": `${bigint}`;
};
/**
 * Shape $ (Value): {@link GiftCardPurchaseRefundRecovery}. Records how value was recovered for a
 * gift card purchase refund, on the original or a replacement card, with the destinations that
 * received it.
 */
export type GiftCardPurchaseRefundRecovery = {
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "created_at": string;
    /** Shape $ (Value): string.  Value enum: "original", "replacement". */
    "destination": "original" | "replacement" | (string & {});
    /**
     * Shape $ (Value): Array of {@link GiftCardPurchaseRefundRecoveryDestination}. Shape $[]
     * (Value): {@link GiftCardPurchaseRefundRecoveryDestination}. A gift card and load that
     * received recovered value in a gift card purchase refund recovery, with the amount.
     */
    "destinations": Array<GiftCardPurchaseRefundRecoveryDestination>;
};
/**
 * Shape $ (Value): {@link GiftCardPurchaseRefundRecoveryDestination}. A gift card and load that
 * received recovered value in a gift card purchase refund recovery, with the amount.
 */
export type GiftCardPurchaseRefundRecoveryDestination = {
    /** Shape $ (Value): string. */
    "gift_card_id": string;
    /** Shape $ (Value): string. */
    "gift_card_load_id": string;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "value_money": MoneyValue;
};
/**
 * Shape $ (Value): {@link GiftCardPurchaseRefundValueAllocation}. A gift card load and amount
 * reserved or reversed for a gift card purchase refund.
 */
export type GiftCardPurchaseRefundValueAllocation = {
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
    /** Shape $ (Value): string. */
    "gift_card_id": string;
    /** Shape $ (Value): string. */
    "gift_card_load_id": string;
};
/**
 * Shape $ (Value): {@link GiftCardPurchaseRefundValueHold}. Gift card value held back by a
 * purchase refund, with the refund, the root gift card and load, and the amount held.
 */
export type GiftCardPurchaseRefundValueHold = {
    /** Shape $ (Value): string. */
    "purchase_refund_allocation_id": string;
    /** Shape $ (Value): string. */
    "refund_id": string;
    /** Shape $ (Value): string. */
    "root_gift_card_id": string;
    /** Shape $ (Value): string. */
    "root_gift_card_load_id": string;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "value_money": MoneyValue;
};
/**
 * Shape $ (Value): {@link GiftCardPurchaseRequest}. Gift card details for an order line item: the
 * `face_value_money` and the `recipient` who receives the card.
 */
export type GiftCardPurchaseRequest = {
    /**
     * Shape $ (Value): object. Shape $.amount (Required): integer string. Amount in the currency's
     * smallest unit, such as cents for USD. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 1. maximum: 200000. Shape $.currency
     * (Required): string. Three-letter ISO 4217 currency code. Value enum: "USD".
     */
    "face_value_money"?: {
        /**
         * Shape $ (Value): integer string. Amount in the currency's smallest unit, such as cents
         * for USD. Use an integer string (decimal digits), not a floating-point number. Format:
         * int64. minimum: 1. maximum: 200000.
         */
        "amount": `${bigint}`;
        /** Shape $ (Value): string. Three-letter ISO 4217 currency code. Value enum: "USD". */
        "currency": "USD" | (string & {});
    };
    /**
     * Shape $ (Value): {@link GiftCardPurchaseRecipient}. The recipient of a purchased gift card:
     * `email`, optional `name` and `message`, and an optional `send_at` time.
     */
    "recipient"?: GiftCardPurchaseRecipient;
};
/**
 * Shape $ (Value): {@link GiftCardPurchaseRestoration}. Links a gift card load to the original
 * card and load it restores value to after a purchase refund, for one unit of an order line item.
 */
export type GiftCardPurchaseRestoration = {
    /** Shape $ (Value): string. */
    "order_line_item_id": string;
    /** Shape $ (Value): string. */
    "original_gift_card_id": string;
    /** Shape $ (Value): string. */
    "original_gift_card_load_id": string;
    /** Shape $ (Value): string. */
    "purchase_refund_allocation_id": string;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64.
     */
    "unit_ordinal": `${bigint}`;
};
/**
 * Shape $ (Value): {@link GiftCardPurchaseSnapshot}. The gift card purchase details saved on an
 * order line item: configuration, face value, price paid, and recipient.
 */
export type GiftCardPurchaseSnapshot = {
    /**
     * Shape $ (Value): {@link GiftCardProductConfiguration} or null. Shape $.anyOf[1] (Value):
     * {@link GiftCardProductConfiguration}. Gift card settings on a product variant: its
     * `face_value_money`, price mode (face value or discounted), and bounds for custom amounts.
     * Shape $.anyOf[2] (Value): null.
     */
    "configuration": ((GiftCardProductConfiguration) | (null));
    /**
     * Shape $ (Value): object. Shape $.amount (Required): integer string. Amount in the currency's
     * smallest unit, such as cents for USD. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 1. maximum: 200000. Shape $.currency
     * (Required): string. Three-letter ISO 4217 currency code. Value enum: "USD".
     */
    "consideration_money": {
        /**
         * Shape $ (Value): integer string. Amount in the currency's smallest unit, such as cents
         * for USD. Use an integer string (decimal digits), not a floating-point number. Format:
         * int64. minimum: 1. maximum: 200000.
         */
        "amount": `${bigint}`;
        /** Shape $ (Value): string. Three-letter ISO 4217 currency code. Value enum: "USD". */
        "currency": "USD" | (string & {});
    };
    /**
     * Shape $ (Value): object. Shape $.amount (Required): integer string. Amount in the currency's
     * smallest unit, such as cents for USD. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 1. maximum: 200000. Shape $.currency
     * (Required): string. Three-letter ISO 4217 currency code. Value enum: "USD".
     */
    "face_value_money": {
        /**
         * Shape $ (Value): integer string. Amount in the currency's smallest unit, such as cents
         * for USD. Use an integer string (decimal digits), not a floating-point number. Format:
         * int64. minimum: 1. maximum: 200000.
         */
        "amount": `${bigint}`;
        /** Shape $ (Value): string. Three-letter ISO 4217 currency code. Value enum: "USD". */
        "currency": "USD" | (string & {});
    };
    /**
     * Shape $ (Value): {@link GiftCardPurchaseRecipient}. The recipient of a purchased gift card:
     * `email`, optional `name` and `message`, and an optional `send_at` time.
     */
    "recipient"?: GiftCardPurchaseRecipient;
    /**
     * Shape $ (Value): object. Shape $.amount (Required): integer string. Amount in the currency's
     * smallest unit, such as cents for USD. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 1. maximum: 200000. Shape $.currency
     * (Required): string. Three-letter ISO 4217 currency code. Value enum: "USD".
     */
    "reference_price_money": {
        /**
         * Shape $ (Value): integer string. Amount in the currency's smallest unit, such as cents
         * for USD. Use an integer string (decimal digits), not a floating-point number. Format:
         * int64. minimum: 1. maximum: 200000.
         */
        "amount": `${bigint}`;
        /** Shape $ (Value): string. Three-letter ISO 4217 currency code. Value enum: "USD". */
        "currency": "USD" | (string & {});
    };
};
/**
 * Shape $ (Value): {@link GiftCardRedemption}. Independent redemption resource. Operational
 * reservations are separate from immutable posted transactions. Refund captured value with `POST
 * /v1/refunds`, using a `tender_allocations` entry with `tender_type` `gift_card_redemption` and
 * this redemption's ID. Refunds keep the redemption `captured` and increase `refunded_money`.
 */
export type GiftCardRedemption = {
    /** Shape $ (Value): string.  Value enum: "automatic", "manual". */
    "capture_mode": "automatic" | "manual" | (string & {});
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "captured_money": MoneyValue;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "created_at": string;
    /**
     * Shape $ (Value): string or null. When an uncaptured manual reservation expires. null for
     * automatic capture, which posts immediately. Format: date-time.
     */
    "expires_at": string | null;
    /** Shape $ (Value): string. */
    "gift_card_id": string;
    /** Shape $ (Value): string. */
    "gift_card_redemption_id": string;
    /**
     * Shape $ (Value): string or null. Your Idempotency-Key for the command that created this
     * record. null when Flint created it or no key was sent.
     */
    "idempotency_key": string | null;
    /** Shape $ (Value): string or null. */
    "order_id": string | null;
    /**
     * Shape $ (Value): string or null. The order payment attempt the redemption belongs to. Set
     * for source_type flint_order; null for external.
     */
    "order_payment_attempt_id": string | null;
    /**
     * Shape $ (Value): {@link MoneyValue}. Total refunded against this redemption across all
     * refunds. Each refund lists its share in `tender_allocations`. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "refunded_money": MoneyValue;
    /**
     * Shape $ (Value): {@link MoneyValue}. Captured value not yet refunded. A refund allocation to
     * this redemption can be at most this amount. Zero while the redemption is reserved, canceled,
     * or expired. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code.
     */
    "remaining_refundable_money": MoneyValue;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "requested_money": MoneyValue;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "reserved_money": MoneyValue;
    /**
     * Shape $ (Value): string or null. Your reference for the sale the redemption pays for. Set
     * for source_type external; null for flint_order. maxLength: 255.
     */
    "sale_reference": string | null;
    /** Shape $ (Value): string.  Value enum: "external", "flint_order". */
    "source_type": "external" | "flint_order" | (string & {});
    /** Shape $ (Value): string.  Value enum: "reserved", "captured", "canceled", "expired". */
    "status": "reserved" | "captured" | "canceled" | "expired" | (string & {});
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "updated_at": string;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64.
     */
    "version": `${bigint}`;
};
/**
 * Shape $ (Value): {@link GiftCardRedemptionListResponse}. A page of `GiftCardRedemption` objects.
 */
export type GiftCardRedemptionListResponse = {
    /**
     * Shape $ (Value): Array of {@link GiftCardRedemption}. Shape $[] (Value): {@link
     * GiftCardRedemption}. Independent redemption resource. Operational reservations are separate
     * from immutable posted transactions. Refund captured value with `POST /v1/refunds`, using a
     * `tender_allocations` entry with `tender_type` `gift_card_redemption` and this redemption's
     * ID. Refunds keep the redemption `captured` and increase `refunded_money`.
     */
    "data": Array<GiftCardRedemption>;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Metadata returned with a response: the `api_version`,
     * `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /** Shape $ (Value): string. */
    "next_page_token"?: string;
    /**
     * Shape $ (Value): string. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/**
 * Shape $ (Value): {@link GiftCardRedemptionResponse}. A response containing `GiftCardRedemption`
 * data.
 */
export type GiftCardRedemptionResponse = {
    /**
     * Shape $ (Value): {@link GiftCardRedemption}. Independent redemption resource. Operational
     * reservations are separate from immutable posted transactions. Refund captured value with
     * `POST /v1/refunds`, using a `tender_allocations` entry with `tender_type`
     * `gift_card_redemption` and this redemption's ID. Refunds keep the redemption `captured` and
     * increase `refunded_money`.
     */
    "data": GiftCardRedemption;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Metadata returned with a response: the `api_version`,
     * `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Shape $ (Value): string. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/**
 * Shape $ (Value): {@link GiftCardRedemptionResult}. Result of redeeming a gift card: the updated
 * gift card, the redemption, and the resulting transactions.
 */
export type GiftCardRedemptionResult = {
    /**
     * Shape $ (Value): {@link GiftCard}. Merchant-issued purchased gift card. Posted balance
     * includes reserved value; available value is balance minus reservations. Frozen value remains
     * part of outstanding liability. Gift cards are independent resources and cannot be
     * transferred across merchants or currencies.
     */
    "gift_card": GiftCard;
    /**
     * Shape $ (Value): {@link GiftCardRedemption}. Independent redemption resource. Operational
     * reservations are separate from immutable posted transactions. Refund captured value with
     * `POST /v1/refunds`, using a `tender_allocations` entry with `tender_type`
     * `gift_card_redemption` and this redemption's ID. Refunds keep the redemption `captured` and
     * increase `refunded_money`.
     */
    "gift_card_redemption": GiftCardRedemption;
    /**
     * Shape $ (Value): Array of {@link GiftCardTransaction}. Shape $[] (Value): {@link
     * GiftCardTransaction}. Immutable posted financial movement with signed amount, per-card
     * sequence, merchant sequence and balance snapshots. Corrections create new transactions.
     */
    "gift_card_transactions": Array<GiftCardTransaction>;
};
/**
 * Shape $ (Value): {@link GiftCardRedemptionResultResponse}. A response containing
 * `GiftCardRedemptionResult` data.
 */
export type GiftCardRedemptionResultResponse = {
    /**
     * Shape $ (Value): {@link GiftCardRedemptionResult}. Result of redeeming a gift card: the
     * updated gift card, the redemption, and the resulting transactions.
     */
    "data": GiftCardRedemptionResult;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Metadata returned with a response: the `api_version`,
     * `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Shape $ (Value): string. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
export type GiftCardRedemptionsCancelInput = {
    /** Shape $ (Value): string. */
    "gift_card_redemption_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link GiftCardVersionRequestInput}. Optional version fence for the
     * redemption being captured or canceled.
     */
    "body"?: InputValue<GiftCardVersionRequestInput>;
};
export type GiftCardRedemptionsCaptureInput = GiftCardRedemptionsCancelInput;
export type GiftCardRedemptionsCreateInput = {
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link CreateGiftCardRedemptionRequestInput}. The request body for: Redeem
     * gift card value.
     */
    "body": InputValue<CreateGiftCardRedemptionRequestInput>;
};
export type GiftCardRedemptionsGetInput = {
    /** Shape $ (Value): string. */
    "gift_card_redemption_id": InputValue<string>;
};
export type GiftCardRedemptionsListInput = {
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. maxLength: 255. */
    "gift_card_id"?: InputValue<string>;
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "idempotency_key"?: InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "order_id"?: InputValue<string>;
    /** Shape $ (Value): integer. minimum: 1. maximum: 100. Default: 20. */
    "page_size"?: InputValue<number>;
    /** Shape $ (Value): string. */
    "page_token"?: InputValue<string>;
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "sale_reference"?: InputValue<string>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "external", "flint_order". Shape $[]
     * (Value): string. maxLength: 255. Value enum: "external", "flint_order".
     */
    "source_type"?: InputValue<Array<"external" | "flint_order">>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "canceled", "captured", "expired",
     * "reserved". Shape $[] (Value): string. maxLength: 255. Value enum: "canceled", "captured",
     * "expired", "reserved".
     */
    "status"?: InputValue<Array<"canceled" | "captured" | "expired" | "reserved">>;
};
/**
 * Shape $ (Value): {@link GiftCardRefundProvenance}. Traces a gift card load made by a refund back
 * to its original funding source, root gift card and load, and source refund.
 */
export type GiftCardRefundProvenance = {
    /**
     * Shape $ (Value): {@link MoneyValue} or null. Shape $.anyOf[1] (Value): {@link MoneyValue}.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code. Shape
     * $.anyOf[2] (Value): null.
     */
    "original_consideration_money": ((MoneyValue) | (null));
    /** Shape $ (Value): string. Format: date-time. */
    "original_created_at": string;
    /**
     * Shape $ (Value): {@link GiftCardFundingSource}. Where the value of a gift card load came
     * from, such as an external payment, a Flint payment, an import, or an adjustment, with your
     * reference for it. Shape $.funding_source_type (Required): string. Value enum:
     * "external_payment", "flint_payment", "flint_manual_payment", "import", "adjustment",
     * "store_credit". Shape $.customer_id (Optional): string. minLength: 1. maxLength: 255. Shape
     * $.external_reference_id (Required): string. Your reference for the payment or import record
     * that funded this value, such as a POS sale ID. Required; 1 to 255 characters. minLength: 1.
     * maxLength: 255. Shape $.order_id (Optional): string. minLength: 1. maxLength: 255. Shape
     * $.order_manual_payment_id (Optional): string. minLength: 1. maxLength: 255. Shape
     * $.payment_intent_id (Optional): string. The original payment for flint_payment or
     * store_credit value. For standalone paid funding, use a captured payment intent without an
     * order_id. Order-linked payments fund purchased cards or store credit through their order.
     * minLength: 1. maxLength: 255. Shape $.refund_id (Optional): string. Refund that issued this
     * value. Present only when funding_source_type is store_credit. minLength: 1. Shape $.oneOf[1]
     * (Value): {@link GiftCardFundingSourceExternalPayment}. The `external_payment` variant of
     * `GiftCardFundingSource`. Shape $.oneOf[2] (Value): {@link
     * GiftCardFundingSourceFlintPayment}. The `flint_payment` variant of `GiftCardFundingSource`.
     * Shape $.oneOf[3] (Value): {@link GiftCardFundingSourceFlintManualPayment}. The
     * `flint_manual_payment` variant of `GiftCardFundingSource`. Shape $.oneOf[4] (Value): {@link
     * GiftCardFundingSourceImport}. The `import` variant of `GiftCardFundingSource`. Shape
     * $.oneOf[5] (Value): {@link GiftCardFundingSourceAdjustment}. The `adjustment` variant of
     * `GiftCardFundingSource`. Shape $.oneOf[6] (Value): {@link
     * GiftCardFundingSourceGiftCardRefund}. The `gift_card_refund` variant of
     * `GiftCardFundingSource`. Shape $.oneOf[7] (Value): {@link
     * GiftCardFundingSourceGiftCardPurchaseRefundRecovery}. The
     * `gift_card_purchase_refund_recovery` variant of `GiftCardFundingSource`. Shape $.oneOf[8]
     * (Value): {@link GiftCardFundingSourceStoreCredit}. The `store_credit` variant of
     * `GiftCardFundingSource`.
     */
    "original_source": ({
        /**
         * Shape $ (Value): any. Value enum: "external_payment", "flint_payment",
         * "flint_manual_payment", "import", "adjustment", "store_credit".
         */
        "funding_source_type"?: unknown;
    })
        & (Exclude<GiftCardFundingSource & object, readonly unknown[]>);
    /** Shape $ (Value): string or null. Format: date-time. */
    "original_source_created_at": string | null;
    /** Shape $ (Value): string. */
    "refund_allocation_id": string;
    /** Shape $ (Value): string. */
    "root_gift_card_id": string;
    /** Shape $ (Value): string. */
    "root_gift_card_load_id": string;
    /** Shape $ (Value): string. */
    "source_gift_card_id": string;
    /** Shape $ (Value): string. */
    "source_gift_card_redemption_id": string;
    /** Shape $ (Value): string. */
    "source_purchase_refund_allocation_id"?: string;
    /** Shape $ (Value): string. */
    "source_refund_id"?: string;
};
/** Shape $ (Value): {@link GiftCardResponse}. A response containing `GiftCard` data. */
export type GiftCardResponse = {
    /**
     * Shape $ (Value): {@link GiftCard}. Merchant-issued purchased gift card. Posted balance
     * includes reserved value; available value is balance minus reservations. Frozen value remains
     * part of outstanding liability. Gift cards are independent resources and cannot be
     * transferred across merchants or currencies.
     */
    "data": GiftCard;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Metadata returned with a response: the `api_version`,
     * `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Shape $ (Value): string. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/**
 * Shape $ (Value): {@link GiftCardRestriction}. A restriction on a gift card, either a merchant
 * freeze or a funding dispute, with its reason or dispute details.
 */
export type GiftCardRestriction = {
    /**
     * Shape $ (Value): string. Present only for type funding_dispute. The dispute on the payment
     * that funded value on this card. pattern: ^du_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "dispute_id"?: string;
    /**
     * Shape $ (Value): string. Present only for type funding_dispute. A copy of the funding
     * dispute's current state. lost means the loss must be honored with a gift card funding
     * disposition before the card can be spent. Value enum: "open", "lost".
     */
    "dispute_status"?: "open" | "lost" | (string & {});
    /**
     * Shape $ (Value): string. Present only for type merchant_freeze. The merchant's freeze
     * reason. Value enum: "suspicious_activity", "customer_request", "support_issue".
     */
    "reason"?: "suspicious_activity" | "customer_request" | "support_issue" | (string & {});
    /**
     * Shape $ (Value): string. The kind of restriction. merchant_freeze is a freeze requested by
     * the merchant. funding_dispute is a dispute on the payment that funded value on this card.
     * Value enum: "merchant_freeze", "funding_dispute".
     */
    "type": "merchant_freeze" | "funding_dispute" | (string & {});
};
/**
 * Shape $ (Value): {@link GiftCardTransaction}. Immutable posted financial movement with signed
 * amount, per-card sequence, merchant sequence and balance snapshots. Corrections create new
 * transactions.
 */
export type GiftCardTransaction = {
    /**
     * Shape $ (Value): {@link MoneyValue}. Signed change to the card's balance: positive amounts
     * add value and negative amounts remove it. balance_after_money is balance_before_money plus
     * this amount; funding_loss_accepted records a decision and moves 0. Signed monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
    /**
     * Shape $ (Value): {@link MoneyValue}. The card's balance immediately after this transaction.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "balance_after_money": MoneyValue;
    /**
     * Shape $ (Value): {@link MoneyValue}. The card's balance immediately before this transaction.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "balance_before_money": MoneyValue;
    /**
     * Shape $ (Value): string or null. Your reference for the cash you paid the buyer outside
     * Flint. Set only on cash_out transactions; null for other transactions. maxLength: 255.
     */
    "cash_out_reference": string | null;
    /** Shape $ (Value): string. Gift card whose balance this transaction changed. */
    "gift_card_id": string;
    /** Shape $ (Value): string. Stable identifier of the transaction. */
    "gift_card_transaction_id": string;
    /**
     * Shape $ (Value): string or null. Your Idempotency-Key for the command that created this
     * record. null when Flint created it or no key was sent.
     */
    "idempotency_key": string | null;
    /**
     * Shape $ (Value): integer string. Position of this transaction among all of your gift card
     * transactions in this environment. It increases by one with each posted transaction, and the
     * transaction list is ordered by it. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64.
     */
    "merchant_sequence": `${bigint}`;
    /** Shape $ (Value): string. Order this transaction belongs to, when there is one. */
    "order_id"?: string;
    /** Shape $ (Value): string. When the transaction was posted to the card. Format: date-time. */
    "posted_at": string;
    /**
     * Shape $ (Value): string or null. Your adjustment reason on adjustment transactions;
     * customer_request on cash_out; null on all other transaction types. Value enum:
     * "complimentary", "balance_accidentally_decreased", "support_issue", "suspicious_activity",
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
     * Shape $ (Value): integer string. Position of this transaction in the card's history. It
     * increases by one with each transaction posted to the card. Use an integer string (decimal
     * digits), not a floating-point number. Format: int64.
     */
    "sequence": `${bigint}`;
    /**
     * Shape $ (Value): {@link ResourceReference} or null. The resource that caused this
     * transaction, such as a gift_card_load, gift_card_redemption, refund, or
     * gift_card_funding_disposition. null when the cause has no public resource. Shape $.anyOf[1]
     * (Value): {@link ResourceReference}. A reference to another resource by `resource_type` and
     * `resource_id`. Shape $.anyOf[2] (Value): null.
     */
    "source": ((ResourceReference) | (null));
    /**
     * Shape $ (Value): string. Kind of movement, such as load, redeem, refund, adjustment, or
     * cash_out. Value enum: "load", "import", "redeem", "refund", "refund_transfer", "adjustment",
     * "cash_out", "purchase_reversal", "funding_loss_accepted", "purchase_refund_recovery",
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
/**
 * Shape $ (Value): {@link GiftCardTransactionListResponse}. A page of `GiftCardTransaction`
 * objects.
 */
export type GiftCardTransactionListResponse = {
    /**
     * Shape $ (Value): Array of {@link GiftCardTransaction}. Shape $[] (Value): {@link
     * GiftCardTransaction}. Immutable posted financial movement with signed amount, per-card
     * sequence, merchant sequence and balance snapshots. Corrections create new transactions.
     */
    "data": Array<GiftCardTransaction>;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Metadata returned with a response: the `api_version`,
     * `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /** Shape $ (Value): string. */
    "next_page_token"?: string;
    /**
     * Shape $ (Value): string. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
export type GiftCardTransactionsListInput = {
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "cash_out_reference"?: InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "gift_card_id"?: InputValue<string>;
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "idempotency_key"?: InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "order_id"?: InputValue<string>;
    /** Shape $ (Value): integer. minimum: 1. maximum: 100. Default: 20. */
    "page_size"?: InputValue<number>;
    /** Shape $ (Value): string. */
    "page_token"?: InputValue<string>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "posted_after"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "posted_before"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. maxLength: 255. */
    "source_id"?: InputValue<string>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "gift_card_funding_disposition",
     * "gift_card_load", "gift_card_redemption", "purchase_refund_allocation", "refund",
     * "refund_allocation". Shape $[] (Value): string. maxLength: 255. Value enum:
     * "gift_card_funding_disposition", "gift_card_load", "gift_card_redemption",
     * "purchase_refund_allocation", "refund", "refund_allocation".
     */
    "source_type"?: InputValue<Array<"gift_card_funding_disposition"
        | "gift_card_load"
        | "gift_card_redemption"
        | "purchase_refund_allocation"
        | "refund"
        | "refund_allocation">>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "load", "import", "redeem",
     * "refund", "refund_transfer", "adjustment", "cash_out", "purchase_reversal",
     * "funding_loss_accepted", "purchase_refund_recovery", "purchase_refund_recovery_transfer".
     * Shape $[] (Value): string. Value enum: "load", "import", "redeem", "refund",
     * "refund_transfer", "adjustment", "cash_out", "purchase_reversal", "funding_loss_accepted",
     * "purchase_refund_recovery", "purchase_refund_recovery_transfer".
     */
    "transaction_type"?: InputValue<Array<"load"
        | "import"
        | "redeem"
        | "refund"
        | "refund_transfer"
        | "adjustment"
        | "cash_out"
        | "purchase_reversal"
        | "funding_loss_accepted"
        | "purchase_refund_recovery"
        | "purchase_refund_recovery_transfer">>;
};
/**
 * Shape $ (Value): {@link GiftCardVersionRequest}. Optional version fence for the redemption being
 * captured or canceled.
 */
export type GiftCardVersionRequest = {
    /**
     * Shape $ (Value): integer string. The redemption version last read. Capture or cancel changes
     * the redemption only when its current version matches. Use an integer string (decimal
     * digits), not a floating-point number. Format: int64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
};
/**
 * Shape $ (Value): {@link GiftCardVersionRequestInput}. Optional version fence for the redemption
 * being captured or canceled.
 */
export type GiftCardVersionRequestInput = {
    /**
     * Shape $ (Value): integer string. The redemption version last read. Capture or cancel changes
     * the redemption only when its current version matches. Use an integer string (decimal
     * digits), not a floating-point number. Format: int64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
};
export type GiftCardsCreateInput = {
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link CreateGiftCardRequestInput}. The request body for: Create a gift
     * card.
     */
    "body": InputValue<CreateGiftCardRequestInput>;
};
export type GiftCardsGetInput = {
    /** Shape $ (Value): string. */
    "gift_card_id": InputValue<string>;
};
export type GiftCardsListInput = {
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. pattern: ^cus_[0-9A-HJKMNP-TV-Z]{26}$. */
    "customer_id"?: InputValue<string>;
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "external_reference_id"?: InputValue<string>;
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "idempotency_key"?: InputValue<string>;
    /** Shape $ (Value): integer. minimum: 1. maximum: 100. Default: 20. */
    "page_size"?: InputValue<number>;
    /** Shape $ (Value): string. */
    "page_token"?: InputValue<string>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "active", "closed", "frozen",
     * "pending". Shape $[] (Value): string. maxLength: 255. Value enum: "active", "closed",
     * "frozen", "pending".
     */
    "status"?: InputValue<Array<"active" | "closed" | "frozen" | "pending">>;
};
export type GiftCardsLookupInput = {
    /**
     * Shape $ (Value): {@link LookupGiftCardRequestInput}. The request body for: Look up a gift
     * card code.
     */
    "body": InputValue<LookupGiftCardRequestInput>;
};
export type GiftCardsRotateCodeInput = {
    /** Shape $ (Value): string. */
    "gift_card_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link RotateGiftCardCodeRequestInput}. The request body for: Replace a
     * gift card code.
     */
    "body": InputValue<RotateGiftCardCodeRequestInput>;
};
export type GiftCardsTransitionInput = {
    /** Shape $ (Value): string. */
    "gift_card_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link TransitionGiftCardRequestInput}. The request body for: Transition a
     * gift card.
     */
    "body": InputValue<TransitionGiftCardRequestInput>;
};
export type GiftCardsUpdateInput = {
    /** Shape $ (Value): string. */
    "gift_card_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link UpdateGiftCardRequestInput}. The request body for: Update a gift
     * card.
     */
    "body": InputValue<UpdateGiftCardRequestInput>;
};
/**
 * Shape $ (Value): {@link GrantOrganizationMembershipRequest}. The request body for: Grant
 * organization membership.
 */
export type GrantOrganizationMembershipRequest = {
    /** Shape $ (Value): string.  Value enum: "admin", "operator", "viewer". */
    "role": "admin" | "operator" | "viewer" | (string & {});
    /** Shape $ (Value): string. minLength: 1. */
    "user_id": string;
};
/**
 * Shape $ (Value): {@link GrantOrganizationMembershipRequestInput}. The request body for: Grant
 * organization membership.
 */
export type GrantOrganizationMembershipRequestInput = {
    /** Shape $ (Value): string.  Value enum: "admin", "operator", "viewer". */
    "role": "admin" | "operator" | "viewer";
    /** Shape $ (Value): string. minLength: 1. */
    "user_id": string;
};
/**
 * Shape $ (Value): {@link GuestPurchaseLink}. Result of linking a guest's purchases to a customer,
 * with the customer, the email, and the number of orders linked.
 */
export type GuestPurchaseLink = {
    /** Shape $ (Value): string. */
    "customer_id": string;
    /** Shape $ (Value): string. */
    "email": string;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "linked_at": string;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64.
     */
    "linked_order_count": `${bigint}`;
};
/**
 * Shape $ (Value): {@link GuestPurchaseLinkResponse}. A response containing `GuestPurchaseLink`
 * data.
 */
export type GuestPurchaseLinkResponse = {
    /**
     * Shape $ (Value): {@link GuestPurchaseLink}. Result of linking a guest's purchases to a
     * customer, with the customer, the email, and the number of orders linked.
     */
    "data": GuestPurchaseLink;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Metadata returned with a response: the `api_version`,
     * `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Shape $ (Value): string. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/**
 * Shape $ (Value): {@link Image}. An image with its `url`, `width`, and `height`, and optional
 * `alt` text.
 */
export type Image = {
    /** Shape $ (Value): string. Alternative text describing the image for accessibility. */
    "alt"?: string;
    /** Shape $ (Value): integer. Image height in pixels, when known. Format: int32. */
    "height": number;
    /** Shape $ (Value): string. URL of the image. */
    "url": string;
    /** Shape $ (Value): integer. Image width in pixels, when known. Format: int32. */
    "width": number;
};
/**
 * Shape $ (Value): {@link ImageAttachment}. An image attached to a resource, with its display
 * properties and attachment metadata.
 */
export type ImageAttachment = {
    /** Shape $ (Value): string. Alternative text describing the image for accessibility. */
    "alt"?: string;
    /** Shape $ (Value): string. Identifier of the file attached as this image. */
    "file_id"?: string;
    /** Shape $ (Value): integer. Image height in pixels, when known. Format: int32. */
    "height": number;
    /**
     * Shape $ (Value): string. Caller-owned reference identifying this attachment within its
     * gallery. minLength: 1. maxLength: 255.
     */
    "source_reference"?: string;
    /** Shape $ (Value): string. URL of the image. */
    "url": string;
    /** Shape $ (Value): integer. Image width in pixels, when known. Format: int32. */
    "width": number;
};
/** Shape $ (Value): {@link ImageInputFile}. The `File` variant of `ImageInput`. */
export type ImageInputFile = ({
    /**
     * Shape $ (Value): string. Alternative text describing the image for accessibility. minLength:
     * 1. maxLength: 512.
     */
    "alt"?: string;
    /**
     * Shape $ (Value): string. The ID of a ready file uploaded with POST /v1/files. Send exactly
     * one of source_url or file_id. minLength: 1. pattern: ^file_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "file_id": string;
    /**
     * Shape $ (Value): string. An opaque reference for this attachment, unique within its gallery.
     * Whitespace and case are preserved. minLength: 1. maxLength: 255.
     */
    "source_reference"?: string;
    /**
     * Shape $ (Value): string. A public image URL for Flint to fetch, or an untransformed
     * canonical image.url returned by Flint. Send exactly one of source_url or file_id. Canonical
     * Flint URLs attach without another fetch. Flint doesn't download a source_url again while the
     * image it produced is still in this field. minLength: 1. maxLength: 8192.
     */
    "source_url"?: string;
});
/** Shape $ (Value): {@link ImageInputFileInput}. The `File` variant of `ImageInput`. */
export type ImageInputFileInput = ({
    /**
     * Shape $ (Value): string. Alternative text describing the image for accessibility. minLength:
     * 1. maxLength: 512.
     */
    "alt"?: string;
    /**
     * Shape $ (Value): string. The ID of a ready file uploaded with POST /v1/files. Send exactly
     * one of source_url or file_id. minLength: 1. pattern: ^file_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "file_id": string;
    /**
     * Shape $ (Value): string. An opaque reference for this attachment, unique within its gallery.
     * Whitespace and case are preserved. minLength: 1. maxLength: 255.
     */
    "source_reference"?: string;
    /**
     * Shape $ (Value): string. A public image URL for Flint to fetch, or an untransformed
     * canonical image.url returned by Flint. Send exactly one of source_url or file_id. Canonical
     * Flint URLs attach without another fetch. Flint doesn't download a source_url again while the
     * image it produced is still in this field. minLength: 1. maxLength: 8192.
     */
    "source_url"?: string;
})
    & (({
    "source_url"?: never;
}));
/** Shape $ (Value): {@link ImageInputSourceURL}. The `Source URL` variant of `ImageInput`. */
export type ImageInputSourceURL = ({
    /**
     * Shape $ (Value): string. Alternative text describing the image for accessibility. minLength:
     * 1. maxLength: 512.
     */
    "alt"?: string;
    /**
     * Shape $ (Value): string. The ID of a ready file uploaded with POST /v1/files. Send exactly
     * one of source_url or file_id. minLength: 1. pattern: ^file_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "file_id"?: string;
    /**
     * Shape $ (Value): string. An opaque reference for this attachment, unique within its gallery.
     * Whitespace and case are preserved. minLength: 1. maxLength: 255.
     */
    "source_reference"?: string;
    /**
     * Shape $ (Value): string. A public image URL for Flint to fetch, or an untransformed
     * canonical image.url returned by Flint. Send exactly one of source_url or file_id. Canonical
     * Flint URLs attach without another fetch. Flint doesn't download a source_url again while the
     * image it produced is still in this field. minLength: 1. maxLength: 8192.
     */
    "source_url": string;
});
/** Shape $ (Value): {@link ImageInputSourceURLInput}. The `Source URL` variant of `ImageInput`. */
export type ImageInputSourceURLInput = ({
    /**
     * Shape $ (Value): string. Alternative text describing the image for accessibility. minLength:
     * 1. maxLength: 512.
     */
    "alt"?: string;
    /**
     * Shape $ (Value): string. The ID of a ready file uploaded with POST /v1/files. Send exactly
     * one of source_url or file_id. minLength: 1. pattern: ^file_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "file_id"?: string;
    /**
     * Shape $ (Value): string. An opaque reference for this attachment, unique within its gallery.
     * Whitespace and case are preserved. minLength: 1. maxLength: 255.
     */
    "source_reference"?: string;
    /**
     * Shape $ (Value): string. A public image URL for Flint to fetch, or an untransformed
     * canonical image.url returned by Flint. Send exactly one of source_url or file_id. Canonical
     * Flint URLs attach without another fetch. Flint doesn't download a source_url again while the
     * image it produced is still in this field. minLength: 1. maxLength: 8192.
     */
    "source_url": string;
})
    & (({
    "file_id"?: never;
}));
/**
 * Shape $ (Value): {@link ImageReferenceRequest}. A reference to an image by `url`, with optional
 * `alt` text, used on an order line item.
 */
export type ImageReferenceRequest = {
    /**
     * Shape $ (Value): string. Alternative text describing the image for accessibility. minLength:
     * 1.
     */
    "alt"?: string;
    /** Shape $ (Value): string. URL of the image. minLength: 1. */
    "url": string;
};
/**
 * Shape $ (Value): {@link ImageReferenceRequestInput}. A reference to an image by `url`, with
 * optional `alt` text, used on an order line item.
 */
export type ImageReferenceRequestInput = ImageReferenceRequest;
/**
 * Shape $ (Value): {@link ImageRequest}. An image you supply by `source_url`, with optional `alt`
 * text and external reference.
 */
export type ImageRequest = ({
    /**
     * Shape $ (Value): string. Alternative text describing the image for accessibility. minLength:
     * 1. maxLength: 512.
     */
    "alt"?: string;
    /**
     * Shape $ (Value): string. The ID of a ready file uploaded with POST /v1/files. Send exactly
     * one of source_url or file_id. minLength: 1. pattern: ^file_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "file_id"?: string;
    /**
     * Shape $ (Value): string. An opaque reference for this attachment, unique within its gallery.
     * Whitespace and case are preserved. minLength: 1. maxLength: 255.
     */
    "source_reference"?: string;
    /**
     * Shape $ (Value): string. A public image URL for Flint to fetch, or an untransformed
     * canonical image.url returned by Flint. Send exactly one of source_url or file_id. Canonical
     * Flint URLs attach without another fetch. Flint doesn't download a source_url again while the
     * image it produced is still in this field. minLength: 1. maxLength: 8192.
     */
    "source_url"?: string;
})
    & ((Exclude<ImageInputSourceURL & object, readonly unknown[]>)
    | (Exclude<ImageInputFile & object, readonly unknown[]>)
    | (Record<string, unknown>));
/**
 * Shape $ (Value): {@link ImageRequestInput}. An image you supply by `source_url`, with optional
 * `alt` text and external reference.
 */
export type ImageRequestInput = ({
    /**
     * Shape $ (Value): string. Alternative text describing the image for accessibility. minLength:
     * 1. maxLength: 512.
     */
    "alt"?: string;
    /**
     * Shape $ (Value): string. The ID of a ready file uploaded with POST /v1/files. Send exactly
     * one of source_url or file_id. minLength: 1. pattern: ^file_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "file_id"?: string;
    /**
     * Shape $ (Value): string. An opaque reference for this attachment, unique within its gallery.
     * Whitespace and case are preserved. minLength: 1. maxLength: 255.
     */
    "source_reference"?: string;
    /**
     * Shape $ (Value): string. A public image URL for Flint to fetch, or an untransformed
     * canonical image.url returned by Flint. Send exactly one of source_url or file_id. Canonical
     * Flint URLs attach without another fetch. Flint doesn't download a source_url again while the
     * image it produced is still in this field. minLength: 1. maxLength: 8192.
     */
    "source_url"?: string;
})
    & ((Exclude<ImageInputSourceURLInput & object, readonly unknown[]>)
    | (Exclude<ImageInputFileInput & object, readonly unknown[]>));
/** Shape $ (Value): {@link IncomingWebhook019a504a3353Payload}. */
export type IncomingWebhook019a504a3353Payload = ((Webhook_payment_review_reopened_merchant)
    | (Webhook_payment_review_reopened_installed_merchants)
    | (unknown));
/**
 * Shape $ (Value): {@link Webhook_dispute_prevented_merchant}. The `dispute.prevented` webhook
 * payload for the `merchant` event source. Fields shared by merchant webhook payloads.
 */
export type IncomingWebhook04494e8bd1b3Payload = Webhook_dispute_prevented_merchant;
/** Shape $ (Value): {@link IncomingWebhook0452cf0e91f7Payload}. */
export type IncomingWebhook0452cf0e91f7Payload = ((Webhook_inventory_reservation_committed_merchant)
    | (Webhook_inventory_reservation_committed_installed_merchants)
    | (unknown));
/** Shape $ (Value): {@link IncomingWebhook0480be55a902Payload}. */
export type IncomingWebhook0480be55a902Payload = ((Webhook_payment_intent_requires_action_merchant)
    | (Webhook_payment_intent_requires_action_installed_merchants)
    | (unknown));
/** Shape $ (Value): {@link IncomingWebhook05f1b45d6cf6Payload}. */
export type IncomingWebhook05f1b45d6cf6Payload = ((Webhook_invoice_payment_attempt_settled_merchant)
    | (Webhook_invoice_payment_attempt_settled_installed_merchants)
    | (unknown));
/** Shape $ (Value): {@link IncomingWebhook062843b7e875Payload}. */
export type IncomingWebhook062843b7e875Payload = ((Webhook_credit_note_allocation_reversed_merchant)
    | (Webhook_credit_note_allocation_reversed_installed_merchants)
    | (unknown));
/** Shape $ (Value): {@link IncomingWebhook067bab7c655aPayload}. */
export type IncomingWebhook067bab7c655aPayload = ((Webhook_gift_card_transaction_created_merchant)
    | (Webhook_gift_card_transaction_created_installed_merchants)
    | (unknown));
/**
 * Shape $ (Value): {@link Webhook_environment_grant_created_partner_app}. The
 * `environment_grant.created` webhook payload for the `partner_app` event source. Fields shared by
 * partner webhook payloads.
 */
export type IncomingWebhook078273f39700Payload = Webhook_environment_grant_created_partner_app;
/** Shape $ (Value): {@link IncomingWebhook08302bc1b414Payload}. */
export type IncomingWebhook08302bc1b414Payload = ((Webhook_payment_method_activated_merchant)
    | (Webhook_payment_method_activated_installed_merchants)
    | (unknown));
/** Shape $ (Value): {@link IncomingWebhook08a3ab8065ffPayload}. */
export type IncomingWebhook08a3ab8065ffPayload = ((Webhook_checkout_session_created_merchant)
    | (Webhook_checkout_session_created_installed_merchants)
    | (unknown));
/** Shape $ (Value): {@link IncomingWebhook0caa82ed1aafPayload}. */
export type IncomingWebhook0caa82ed1aafPayload = ((Webhook_delivery_rate_callback_created_merchant)
    | (Webhook_delivery_rate_callback_created_installed_merchants)
    | (unknown));
/** Shape $ (Value): {@link IncomingWebhook0d891c599afbPayload}. */
export type IncomingWebhook0d891c599afbPayload = ((Webhook_order_updated_merchant) | (Webhook_order_updated_installed_merchants) | (unknown));
/** Shape $ (Value): {@link IncomingWebhook0ed7a866163aPayload}. */
export type IncomingWebhook0ed7a866163aPayload = ((Webhook_gift_card_redemption_updated_merchant)
    | (Webhook_gift_card_redemption_updated_installed_merchants)
    | (unknown));
