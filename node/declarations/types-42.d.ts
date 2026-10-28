import type { MoneyValue, MoneyValueInput } from './types-33.js';
import type { Refund, PublicDownload } from './types-41.js';
import type { OrderGiftCardAllocation } from './types-34.js';
import type { InputValue, RequestOptions as RuntimeRequestOptions, CredentialProvider } from '../runtime.js';
import type { CreateRefundRequestInput, CreateReportRequestInput } from './types-9.js';
import type { UpdateRefundRequestInput } from './types-52.js';
import type { ConfigurationVersionRequestInput, ConfirmReturnResolutionRequestInput } from './types-5.js';
import type { AuthMode } from './types-0.js';
import type { Credentials } from './types-11.js';
import type { CreateDemoSessionRequestInput } from './types-6.js';
import type { TextModifierRequest } from './types-50.js';
import type { CheckoutSessionWithSecret } from './types-4.js';
import type { ResponseWarning } from './types-43.js';
/**
 * Shape $ (Value): {@link RefundLineItemModifierAllocation}. The part of a line item refund that
 * applies to one modifier, by quantity or amount.
 */
export type RefundLineItemModifierAllocation = {
    /** Shape $ (Value): string.  Value enum: "quantity", "amount". */
    "allocation_basis": "quantity" | "amount" | (string & {});
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
    /** Shape $ (Value): string. */
    "modifier_group_name": string;
    /** Shape $ (Value): string. */
    "name": string;
    /** Shape $ (Value): string. */
    "order_line_item_modifier_id"?: string;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "quantity": `${bigint}`;
    /** Shape $ (Value): string. */
    "refund_line_item_modifier_allocation_id": string;
    /** Shape $ (Value): boolean. */
    "show_on_fulfillment": boolean;
    /** Shape $ (Value): boolean. */
    "show_on_receipt": boolean;
    /** Shape $ (Value): string.  Value enum: "catalog_modifier", "text". */
    "source_type": "catalog_modifier" | "text" | (string & {});
    /** Shape $ (Value): string. */
    "text_value"?: string;
};
/** Shape $ (Value): {@link RefundListResponse}. A page of `Refund` objects. */
export type RefundListResponse = {
    /**
     * Shape $ (Value): Array of {@link Refund}. Shape $[] (Value): {@link Refund}. Money returned
     * against a collected payment.
     */
    "data": Array<Refund>;
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
/** Shape $ (Value): {@link RefundResponse}. A response containing `Refund` data. */
export type RefundResponse = {
    /** Shape $ (Value): {@link Refund}. Money returned against a collected payment. */
    "data": Refund;
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
 * Shape $ (Value): {@link RefundTaxBreakdownRefund}. The tax refunded for one tax breakdown on an
 * order.
 */
export type RefundTaxBreakdownRefund = {
    /** Shape $ (Value): string. */
    "order_charge_id"?: string;
    /** Shape $ (Value): string. */
    "tax_breakdown_id": string;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "tax_money": MoneyValue;
};
/**
 * Shape $ (Value): {@link RefundTaxBreakdownRefundIn}. The tax to refund for one tax breakdown,
 * identified by `tax_breakdown_id`, when setting tax refunds explicitly.
 */
export type RefundTaxBreakdownRefundIn = {
    /** Shape $ (Value): string. minLength: 1. */
    "tax_breakdown_id": string;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "tax_money"?: MoneyValue;
};
/**
 * Shape $ (Value): {@link RefundTaxBreakdownRefundInInput}. The tax to refund for one tax
 * breakdown, identified by `tax_breakdown_id`, when setting tax refunds explicitly.
 */
export type RefundTaxBreakdownRefundInInput = {
    /** Shape $ (Value): string. minLength: 1. */
    "tax_breakdown_id": string;
    /**
     * Shape $ (Value): {@link MoneyValueInput}. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "tax_money"?: MoneyValueInput;
};
/**
 * Shape $ (Value): {@link RefundTenderAllocation}. One tender's share of a refund, listed in the
 * refund's tender allocations.
 */
export type RefundTenderAllocation = {
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
    /**
     * Shape $ (Value): string. Where this allocation is refunded. original returns value to the
     * tender that paid; new_gift_card issues new Flint gift cards. Payment intent store credit
     * requires a succeeded USD card, Apple Pay, Google Pay, or Link payment that belongs to an
     * order, with no open chargeback. Affirm, ACH debit, other payment options, non-USD payments,
     * and payments without an order return INVALID_REQUEST with a NOT_ALLOWED detail. Payment
     * chargebacks use the existing dispute refusal. Gift card redemption destinations are
     * unaffected by the payment restrictions. Default: "original". Value enum: "original",
     * "new_gift_card".
     */
    "destination"?: "original" | "new_gift_card" | (string & {});
    /**
     * Shape $ (Value): Array of {@link OrderGiftCardAllocation}. Shape $[] (Value): {@link
     * OrderGiftCardAllocation}. A gift card that received part of a refund, with the amount
     * credited.
     */
    "destination_cards"?: Array<OrderGiftCardAllocation>;
    /**
     * Shape $ (Value): string. Why a refund failed or a payment refund was canceled. Failed and
     * canceled amounts become refundable again. Fix the cause, then create a new refund with a new
     * idempotency key. Unknown provider values are returned as refund_failed. Value enum:
     * "expired_or_canceled_card", "lost_or_stolen_card", "insufficient_funds",
     * "insufficient_available_balance", "declined", "merchant_request", "payment_disputed",
     * "payment_refund_failed", "payment_refund_not_attempted", "refund_failed".
     */
    "failure_reason"?: "expired_or_canceled_card"
        | "lost_or_stolen_card"
        | "insufficient_funds"
        | "insufficient_available_balance"
        | "declined"
        | "merchant_request"
        | "payment_disputed"
        | "payment_refund_failed"
        | "payment_refund_not_attempted"
        | "refund_failed"
        | (string & {});
    /** Shape $ (Value): string. */
    "gift_card_id"?: string;
    /** Shape $ (Value): string. */
    "gift_card_redemption_id"?: string;
    /** Shape $ (Value): string. */
    "payment_intent_id"?: string;
    /** Shape $ (Value): string. */
    "refund_allocation_id": string;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "refunded_tip_money": MoneyValue;
    /**
     * Shape $ (Value): string. Status of this payment refund or tender allocation. A succeeded
     * refund can still fail after a bank rejection. Parent status transitions send
     * refund.succeeded, refund.partially_succeeded, or refund.failed; other public changes send
     * refund.updated. Value enum: "pending", "requires_action", "succeeded", "failed", "canceled".
     */
    "status": "pending" | "requires_action" | "succeeded" | "failed" | "canceled" | (string & {});
    /** Shape $ (Value): string.  Value enum: "payment_intent", "gift_card_redemption". */
    "tender_type": "payment_intent" | "gift_card_redemption" | (string & {});
};
/**
 * Shape $ (Value): {@link RefundTenderAllocationInputGiftCardRedemption}. The
 * `gift_card_redemption` variant of `RefundTenderAllocationInput`.
 */
export type RefundTenderAllocationInputGiftCardRedemption = ({
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code. Shape $.amount (Required): integer string. Use an integer string
     * (decimal digits), not a floating-point number. Format: int64. minimum: 1. Amount in the
     * currency's minor unit, such as cents for USD. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 0. Shape $.currency (Required): string. ISO
     * 4217 currency code for this amount. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
     */
    "amount_money": ({
        /**
         * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
         * floating-point number. Format: int64. minimum: 1.
         */
        "amount"?: `${bigint}`;
    })
        & (Exclude<MoneyValue & object, readonly unknown[]>);
    /**
     * Shape $ (Value): string. Where this allocation is refunded. original returns value to the
     * tender that paid; new_gift_card issues new Flint gift cards. Payment intent store credit
     * requires a succeeded USD card, Apple Pay, Google Pay, or Link payment that belongs to an
     * order, with no open chargeback. Affirm, ACH debit, other payment options, non-USD payments,
     * and payments without an order return INVALID_REQUEST with a NOT_ALLOWED detail. Payment
     * chargebacks use the existing dispute refusal. Gift card redemption destinations are
     * unaffected by the payment restrictions. Default: "original". Value enum: "original",
     * "new_gift_card".
     */
    "destination"?: "original" | "new_gift_card" | (string & {});
    /**
     * Shape $ (Value): string. The captured redemption to refund. Required for tender_type
     * gift_card_redemption. minLength: 1. pattern: ^gcr_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "gift_card_redemption_id": string;
    /**
     * Shape $ (Value): string. The succeeded payment intent to refund. Required for tender_type
     * payment_intent. minLength: 1. pattern: ^pi_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "payment_intent_id"?: string;
    /** Shape $ (Value): string.  Value enum: "gift_card_redemption". */
    "tender_type": "gift_card_redemption" | (string & {});
})
    & (({
    /** Shape $ (Value): any. Shape $.currency (Optional): any.  Value enum: "USD". */
    "amount_money"?: null
        | boolean
        | number
        | string
        | unknown[]
        | ({
        /** Shape $ (Value): any.  Value enum: "USD". */
        "currency"?: unknown;
    });
    /** Shape $ (Value): any.  Value enum: "gift_card_redemption". */
    "tender_type"?: unknown;
    /**
     * Shape $ (Value): string. The captured redemption to refund. Required for tender_type
     * gift_card_redemption. minLength: 1. pattern: ^gcr_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "gift_card_redemption_id": string;
}));
/**
 * Shape $ (Value): {@link RefundTenderAllocationInputGiftCardRedemptionInput}. The
 * `gift_card_redemption` variant of `RefundTenderAllocationInput`.
 */
export type RefundTenderAllocationInputGiftCardRedemptionInput = ({
    /**
     * Shape $ (Value): {@link MoneyValueInput}. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code. Shape $.amount (Required): integer string. Use an integer
     * string (decimal digits), not a floating-point number. Format: int64. minimum: 1. Amount in
     * the currency's minor unit, such as cents for USD. Use an integer string (decimal digits),
     * not a floating-point number. Format: int64. minimum: 0. Shape $.currency (Required): string.
     * ISO 4217 currency code for this amount. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
     */
    "amount_money": ({
        /**
         * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
         * floating-point number. Format: int64. minimum: 1.
         */
        "amount"?: `${bigint}` | bigint;
    })
        & (Exclude<MoneyValueInput & object, readonly unknown[]>);
    /**
     * Shape $ (Value): string. Where this allocation is refunded. original returns value to the
     * tender that paid; new_gift_card issues new Flint gift cards. Payment intent store credit
     * requires a succeeded USD card, Apple Pay, Google Pay, or Link payment that belongs to an
     * order, with no open chargeback. Affirm, ACH debit, other payment options, non-USD payments,
     * and payments without an order return INVALID_REQUEST with a NOT_ALLOWED detail. Payment
     * chargebacks use the existing dispute refusal. Gift card redemption destinations are
     * unaffected by the payment restrictions. Default: "original". Value enum: "original",
     * "new_gift_card".
     */
    "destination"?: "original" | "new_gift_card";
    /**
     * Shape $ (Value): string. The captured redemption to refund. Required for tender_type
     * gift_card_redemption. minLength: 1. pattern: ^gcr_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "gift_card_redemption_id": string;
    /**
     * Shape $ (Value): string. The succeeded payment intent to refund. Required for tender_type
     * payment_intent. minLength: 1. pattern: ^pi_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "payment_intent_id"?: string;
    /** Shape $ (Value): string.  Value enum: "gift_card_redemption". */
    "tender_type": "gift_card_redemption";
})
    & (({
    /** Shape $ (Value): any. Shape $.currency (Optional): any.  Value enum: "USD". */
    "amount_money"?: null
        | boolean
        | number
        | string
        | unknown[]
        | ({
        /** Shape $ (Value): any.  Value enum: "USD". */
        "currency"?: ("USD") & ("USD");
    });
    /** Shape $ (Value): any.  Value enum: "gift_card_redemption". */
    "tender_type"?: ("gift_card_redemption") & ("gift_card_redemption");
    /**
     * Shape $ (Value): string. The captured redemption to refund. Required for tender_type
     * gift_card_redemption. minLength: 1. pattern: ^gcr_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "gift_card_redemption_id": string;
})
    & ({
    "payment_intent_id"?: never;
}));
/**
 * Shape $ (Value): {@link RefundTenderAllocationInputPaymentIntent}. The `payment_intent` variant
 * of `RefundTenderAllocationInput`.
 */
export type RefundTenderAllocationInputPaymentIntent = ({
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code. Shape $.amount (Required): integer string. Use an integer string
     * (decimal digits), not a floating-point number. Format: int64. minimum: 1. Amount in the
     * currency's minor unit, such as cents for USD. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 0. Shape $.currency (Required): string. ISO
     * 4217 currency code for this amount. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
     */
    "amount_money": ({
        /**
         * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
         * floating-point number. Format: int64. minimum: 1.
         */
        "amount"?: `${bigint}`;
    })
        & (Exclude<MoneyValue & object, readonly unknown[]>);
    /**
     * Shape $ (Value): string. Where this allocation is refunded. original returns value to the
     * tender that paid; new_gift_card issues new Flint gift cards. Payment intent store credit
     * requires a succeeded USD card, Apple Pay, Google Pay, or Link payment that belongs to an
     * order, with no open chargeback. Affirm, ACH debit, other payment options, non-USD payments,
     * and payments without an order return INVALID_REQUEST with a NOT_ALLOWED detail. Payment
     * chargebacks use the existing dispute refusal. Gift card redemption destinations are
     * unaffected by the payment restrictions. Default: "original". Value enum: "original",
     * "new_gift_card".
     */
    "destination"?: "original" | "new_gift_card" | (string & {});
    /**
     * Shape $ (Value): string. The captured redemption to refund. Required for tender_type
     * gift_card_redemption. minLength: 1. pattern: ^gcr_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "gift_card_redemption_id"?: string;
    /**
     * Shape $ (Value): string. The succeeded payment intent to refund. Required for tender_type
     * payment_intent. minLength: 1. pattern: ^pi_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "payment_intent_id": string;
    /** Shape $ (Value): string.  Value enum: "payment_intent". */
    "tender_type": "payment_intent" | (string & {});
})
    & (({
    /** Shape $ (Value): any.  Value enum: "payment_intent". */
    "tender_type"?: unknown;
    /**
     * Shape $ (Value): string. The succeeded payment intent to refund. Required for tender_type
     * payment_intent. minLength: 1. pattern: ^pi_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "payment_intent_id": string;
}));
/**
 * Shape $ (Value): {@link RefundTenderAllocationInputPaymentIntentInput}. The `payment_intent`
 * variant of `RefundTenderAllocationInput`.
 */
export type RefundTenderAllocationInputPaymentIntentInput = ({
    /**
     * Shape $ (Value): {@link MoneyValueInput}. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code. Shape $.amount (Required): integer string. Use an integer
     * string (decimal digits), not a floating-point number. Format: int64. minimum: 1. Amount in
     * the currency's minor unit, such as cents for USD. Use an integer string (decimal digits),
     * not a floating-point number. Format: int64. minimum: 0. Shape $.currency (Required): string.
     * ISO 4217 currency code for this amount. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
     */
    "amount_money": ({
        /**
         * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
         * floating-point number. Format: int64. minimum: 1.
         */
        "amount"?: `${bigint}` | bigint;
    })
        & (Exclude<MoneyValueInput & object, readonly unknown[]>);
    /**
     * Shape $ (Value): string. Where this allocation is refunded. original returns value to the
     * tender that paid; new_gift_card issues new Flint gift cards. Payment intent store credit
     * requires a succeeded USD card, Apple Pay, Google Pay, or Link payment that belongs to an
     * order, with no open chargeback. Affirm, ACH debit, other payment options, non-USD payments,
     * and payments without an order return INVALID_REQUEST with a NOT_ALLOWED detail. Payment
     * chargebacks use the existing dispute refusal. Gift card redemption destinations are
     * unaffected by the payment restrictions. Default: "original". Value enum: "original",
     * "new_gift_card".
     */
    "destination"?: "original" | "new_gift_card";
    /**
     * Shape $ (Value): string. The captured redemption to refund. Required for tender_type
     * gift_card_redemption. minLength: 1. pattern: ^gcr_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "gift_card_redemption_id"?: string;
    /**
     * Shape $ (Value): string. The succeeded payment intent to refund. Required for tender_type
     * payment_intent. minLength: 1. pattern: ^pi_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "payment_intent_id": string;
    /** Shape $ (Value): string.  Value enum: "payment_intent". */
    "tender_type": "payment_intent";
})
    & (({
    /** Shape $ (Value): any.  Value enum: "payment_intent". */
    "tender_type"?: ("payment_intent") & ("payment_intent");
    /**
     * Shape $ (Value): string. The succeeded payment intent to refund. Required for tender_type
     * payment_intent. minLength: 1. pattern: ^pi_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "payment_intent_id": string;
})
    & ({
    "gift_card_redemption_id"?: never;
}));
/**
 * Shape $ (Value): {@link RefundTenderAllocationRequest}. Where part of a refund goes: back to a
 * payment intent or to a gift card redemption, with the amount.
 */
export type RefundTenderAllocationRequest = ({
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code. Shape $.amount (Required): integer string. Use an integer string
     * (decimal digits), not a floating-point number. Format: int64. minimum: 1. Amount in the
     * currency's minor unit, such as cents for USD. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 0. Shape $.currency (Required): string. ISO
     * 4217 currency code for this amount. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
     */
    "amount_money": ({
        /**
         * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
         * floating-point number. Format: int64. minimum: 1.
         */
        "amount"?: `${bigint}`;
    })
        & (Exclude<MoneyValue & object, readonly unknown[]>);
    /**
     * Shape $ (Value): string. Where this allocation is refunded. original returns value to the
     * tender that paid; new_gift_card issues new Flint gift cards. Payment intent store credit
     * requires a succeeded USD card, Apple Pay, Google Pay, or Link payment that belongs to an
     * order, with no open chargeback. Affirm, ACH debit, other payment options, non-USD payments,
     * and payments without an order return INVALID_REQUEST with a NOT_ALLOWED detail. Payment
     * chargebacks use the existing dispute refusal. Gift card redemption destinations are
     * unaffected by the payment restrictions. Default: "original". Value enum: "original",
     * "new_gift_card".
     */
    "destination"?: "original" | "new_gift_card" | (string & {});
    /**
     * Shape $ (Value): string. The captured redemption to refund. Required for tender_type
     * gift_card_redemption. minLength: 1. pattern: ^gcr_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "gift_card_redemption_id"?: string;
    /**
     * Shape $ (Value): string. The succeeded payment intent to refund. Required for tender_type
     * payment_intent. minLength: 1. pattern: ^pi_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "payment_intent_id"?: string;
    /** Shape $ (Value): string.  Value enum: "payment_intent", "gift_card_redemption". */
    "tender_type": "payment_intent" | "gift_card_redemption" | (string & {});
})
    & ((Exclude<RefundTenderAllocationInputPaymentIntent & object, readonly unknown[]>)
    | (Exclude<RefundTenderAllocationInputGiftCardRedemption & object, readonly unknown[]>)
    | (Record<string, unknown>));
/**
 * Shape $ (Value): {@link RefundTenderAllocationRequestInput}. Where part of a refund goes: back
 * to a payment intent or to a gift card redemption, with the amount.
 */
export type RefundTenderAllocationRequestInput = ({
    /**
     * Shape $ (Value): {@link MoneyValueInput}. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code. Shape $.amount (Required): integer string. Use an integer
     * string (decimal digits), not a floating-point number. Format: int64. minimum: 1. Amount in
     * the currency's minor unit, such as cents for USD. Use an integer string (decimal digits),
     * not a floating-point number. Format: int64. minimum: 0. Shape $.currency (Required): string.
     * ISO 4217 currency code for this amount. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
     */
    "amount_money": ({
        /**
         * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
         * floating-point number. Format: int64. minimum: 1.
         */
        "amount"?: `${bigint}` | bigint;
    })
        & (Exclude<MoneyValueInput & object, readonly unknown[]>);
    /**
     * Shape $ (Value): string. Where this allocation is refunded. original returns value to the
     * tender that paid; new_gift_card issues new Flint gift cards. Payment intent store credit
     * requires a succeeded USD card, Apple Pay, Google Pay, or Link payment that belongs to an
     * order, with no open chargeback. Affirm, ACH debit, other payment options, non-USD payments,
     * and payments without an order return INVALID_REQUEST with a NOT_ALLOWED detail. Payment
     * chargebacks use the existing dispute refusal. Gift card redemption destinations are
     * unaffected by the payment restrictions. Default: "original". Value enum: "original",
     * "new_gift_card".
     */
    "destination"?: "original" | "new_gift_card";
    /**
     * Shape $ (Value): string. The captured redemption to refund. Required for tender_type
     * gift_card_redemption. minLength: 1. pattern: ^gcr_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "gift_card_redemption_id"?: string;
    /**
     * Shape $ (Value): string. The succeeded payment intent to refund. Required for tender_type
     * payment_intent. minLength: 1. pattern: ^pi_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "payment_intent_id"?: string;
    /** Shape $ (Value): string.  Value enum: "payment_intent", "gift_card_redemption". */
    "tender_type": "payment_intent" | "gift_card_redemption";
})
    & ((Exclude<RefundTenderAllocationInputPaymentIntentInput & object, readonly unknown[]>)
    | (Exclude<RefundTenderAllocationInputGiftCardRedemptionInput & object, readonly unknown[]>));
/**
 * Shape $ (Value): {@link RefundUnissuedGiftCardRecovery}. Details of a gift card purchase
 * refunded before the card was issued, including the amounts recovered.
 */
export type RefundUnissuedGiftCardRecovery = {
    /** Shape $ (Value): string. */
    "order_id": string;
    /** Shape $ (Value): string. */
    "order_line_item_id": string;
    /** Shape $ (Value): string. */
    "payment_intent_id": string;
    /** Shape $ (Value): string. */
    "purchase_refund_allocation_id": string;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "returned_amount_money": MoneyValue;
    /** Shape $ (Value): string. */
    "settlement_allocation_id": string;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "source_pending_amount_money": MoneyValue;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "source_remaining_amount_money": MoneyValue;
};
export type RefundsCreateInput = {
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /** Shape $ (Value): {@link CreateRefundRequestInput}. The request body for: Create refund. */
    "body": InputValue<CreateRefundRequestInput>;
};
export type RefundsGetInput = {
    /** Shape $ (Value): string. */
    "refund_id": InputValue<string>;
    /**
     * Shape $ (Value): Array of string. [] enum: "customer", "order", "payment_intent",
     * "payment_refunds.payment_intent". Shape $[] (Value): string. Value enum: "customer",
     * "order", "payment_intent", "payment_refunds.payment_intent".
     */
    "expand"?: InputValue<Array<"customer" | "order" | "payment_intent" | "payment_refunds.payment_intent">>;
};
export type RefundsListInput = {
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "idempotency_key"?: InputValue<string>;
    /** Shape $ (Value): integer. minimum: 1. maximum: 100. Default: 20. */
    "page_size"?: InputValue<number>;
    /** Shape $ (Value): string. */
    "page_token"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "order_id"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "payment_intent_id"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "customer_id"?: InputValue<string>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "pending", "succeeded",
     * "partially_succeeded", "failed". Shape $[] (Value): string. Value enum: "pending",
     * "succeeded", "partially_succeeded", "failed".
     */
    "status"?: InputValue<Array<"pending" | "succeeded" | "partially_succeeded" | "failed">>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "duplicate", "fraudulent",
     * "requested_by_customer", "defective_product", "wrong_item_shipped", "never_received",
     * "not_as_described", "arrived_too_late", "customer_changed_mind", "better_price_found",
     * "accidental_order", "other". Shape $[] (Value): string. Value enum: "duplicate",
     * "fraudulent", "requested_by_customer", "defective_product", "wrong_item_shipped",
     * "never_received", "not_as_described", "arrived_too_late", "customer_changed_mind",
     * "better_price_found", "accidental_order", "other".
     */
    "reason"?: InputValue<Array<"duplicate"
        | "fraudulent"
        | "requested_by_customer"
        | "defective_product"
        | "wrong_item_shipped"
        | "never_received"
        | "not_as_described"
        | "arrived_too_late"
        | "customer_changed_mind"
        | "better_price_found"
        | "accidental_order"
        | "other">>;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 1. Example: "500".
     */
    "min_amount"?: InputValue<`${bigint}` | bigint>;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 1. Example: "500".
     */
    "max_amount"?: InputValue<`${bigint}` | bigint>;
    /**
     * Shape $ (Value): string. ISO 4217 currency code. minLength: 3. maxLength: 3. pattern:
     * ^[A-Z]{3}$. Example: "USD".
     */
    "currency"?: InputValue<string>;
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "external_reference_id"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "return_id"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "return_resolution_id"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "query"?: InputValue<string>;
    /**
     * Shape $ (Value): string. Default: "created_at". Value enum: "created_at", "updated_at",
     * "amount_money".
     */
    "sort_by"?: InputValue<"created_at" | "updated_at" | "amount_money">;
    /** Shape $ (Value): string. Default: "desc". Value enum: "asc", "desc". */
    "sort_direction"?: InputValue<"asc" | "desc">;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_after"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_before"?: InputValue<string | globalThis.Date>;
    /**
     * Shape $ (Value): Array of string. [] enum: "customer", "order", "payment_intent". Shape $[]
     * (Value): string. Value enum: "customer", "order", "payment_intent".
     */
    "expand"?: InputValue<Array<"customer" | "order" | "payment_intent">>;
};
export type RefundsUpdateInput = {
    /** Shape $ (Value): string. */
    "refund_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /** Shape $ (Value): {@link UpdateRefundRequestInput}. The request body for: Update refund. */
    "body": InputValue<UpdateRefundRequestInput>;
};
/**
 * Shape $ (Value): {@link ReleaseReturnResolutionRequest}. The request body for: Release return
 * resolution.
 */
export type ReleaseReturnResolutionRequest = {
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /** Shape $ (Value): string.  Value enum: "merchant_approved", "exception_resolved", "other". */
    "reason": "merchant_approved" | "exception_resolved" | "other" | (string & {});
    /** Shape $ (Value): string. minLength: 1. */
    "reason_message"?: string;
};
/**
 * Shape $ (Value): {@link ReleaseReturnResolutionRequestInput}. The request body for: Release
 * return resolution.
 */
export type ReleaseReturnResolutionRequestInput = {
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /** Shape $ (Value): string.  Value enum: "merchant_approved", "exception_resolved", "other". */
    "reason": "merchant_approved" | "exception_resolved" | "other";
    /** Shape $ (Value): string. minLength: 1. */
    "reason_message"?: string;
};
/** Shape $ (Value): {@link RemoveDiscountsRequest}. The request body for: Remove discounts. */
export type RemoveDiscountsRequest = {
    /**
     * Shape $ (Value): integer string. Optional order version from the last order read. The
     * mutation fails if the order changed. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /** Shape $ (Value): Array of string. Shape $[] (Value): string. minLength: 1. */
    "order_discount_ids": Array<string>;
};
/** Shape $ (Value): {@link RemoveDiscountsRequestInput}. The request body for: Remove discounts. */
export type RemoveDiscountsRequestInput = {
    /**
     * Shape $ (Value): integer string. Optional order version from the last order read. The
     * mutation fails if the order changed. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /** Shape $ (Value): Array of string. Shape $[] (Value): string. minLength: 1. */
    "order_discount_ids": Array<string>;
};
/**
 * Shape $ (Value): {@link RenewSubscriptionRequestInput}. The request body for: Renew subscription
 * now.
 */
export type RenewSubscriptionRequestInput = ConfigurationVersionRequestInput;
/** Shape $ (Value): {@link ReopenReturnRequest}. The request body for: Reopen return. */
export type ReopenReturnRequest = {
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /**
     * Shape $ (Value): string. Value enum: "linked_effect_changed", "correction_required",
     * "additional_merchandise_received", "merchant_request", "other".
     */
    "reason": "linked_effect_changed"
        | "correction_required"
        | "additional_merchandise_received"
        | "merchant_request"
        | "other"
        | (string & {});
    /** Shape $ (Value): string. minLength: 1. */
    "reason_message"?: string;
};
/** Shape $ (Value): {@link ReopenReturnRequestInput}. The request body for: Reopen return. */
export type ReopenReturnRequestInput = {
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): string. Value enum: "linked_effect_changed", "correction_required",
     * "additional_merchandise_received", "merchant_request", "other".
     */
    "reason": "linked_effect_changed"
        | "correction_required"
        | "additional_merchandise_received"
        | "merchant_request"
        | "other";
    /** Shape $ (Value): string. minLength: 1. */
    "reason_message"?: string;
};
/** Shape $ (Value): {@link Report}. A report generated from the merchant's activity. */
export type Report = ({
    /** Shape $ (Value): string. When the report was requested. Format: date-time. */
    "created_at": string;
    /**
     * Shape $ (Value): string. Currency the report covers. A report never combines currencies.
     * minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
     */
    "currency": string;
    /**
     * Shape $ (Value): {@link PublicDownload}. Link to download the generated report. Present only
     * when status is succeeded. A temporary link for downloading a generated report.
     */
    "download"?: PublicDownload;
    /**
     * Shape $ (Value): string. Why the report failed. Present only when status is failed:
     * limit_exceeded when the report hit a size or time limit, data_unavailable when data it needs
     * wasn't available yet, and generation_failed for other errors. Value enum:
     * "generation_failed", "data_unavailable", "limit_exceeded".
     */
    "failure_reason"?: "generation_failed" | "data_unavailable" | "limit_exceeded" | (string & {});
    /**
     * Shape $ (Value): string. Exclusive interval end instant. Each report type matches its own
     * occurrence time. Format: date-time.
     */
    "interval_end_at": string;
    /**
     * Shape $ (Value): string. Inclusive interval start instant. Each report type matches its own
     * occurrence time. Format: date-time.
     */
    "interval_start_at": string;
    /**
     * Shape $ (Value): string. Stable identifier of the report. pattern:
     * ^rep_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "report_id": string;
    /**
     * Shape $ (Value): string. The report's type and column version. See the Reports guide for its
     * columns. Value enum: "gift_card_liability_v1", "orders_itemized_v1", "orders_itemized_v2",
     * "payments_itemized_v1", "balance_transactions_itemized_v1", "payouts_itemized_v1",
     * "tax_itemized_v1", "tax_summarized_v1", "merchant_billing_itemized_v1",
     * "tax_transactions_itemized_v1".
     */
    "report_type": "gift_card_liability_v1"
        | "orders_itemized_v1"
        | "orders_itemized_v2"
        | "payments_itemized_v1"
        | "balance_transactions_itemized_v1"
        | "payouts_itemized_v1"
        | "tax_itemized_v1"
        | "tax_summarized_v1"
        | "merchant_billing_itemized_v1"
        | "tax_transactions_itemized_v1"
        | (string & {});
    /**
     * Shape $ (Value): string. pending while Flint generates the report, then succeeded with a
     * download or failed with a failure_reason. Flint sends report.succeeded or report.failed when
     * it finishes. Value enum: "pending", "succeeded", "failed".
     */
    "status": "pending" | "succeeded" | "failed" | (string & {});
    /**
     * Shape $ (Value): string. IANA timezone used for timestamps and date bucketing. A payout
     * occurs at the start of its arrival_date in this timezone.
     */
    "timezone": string;
})
    & ((Exclude<ReportPending & object, readonly unknown[]>)
    | (Exclude<ReportSucceeded & object, readonly unknown[]>)
    | (Exclude<ReportFailed & object, readonly unknown[]>)
    | (Record<string, unknown>));
export type ReportDownloadsGetInput = {
    /** Shape $ (Value): string. */
    "report_download_id": InputValue<string>;
};
export type ReportDownloadsGetResponse = {
    location?: string;
};
/** Shape $ (Value): {@link ReportFailed}. A report generated from the merchant's activity. */
export type ReportFailed = ({
    /** Shape $ (Value): string. When the report was requested. Format: date-time. */
    "created_at": string;
    /**
     * Shape $ (Value): string. Currency the report covers. A report never combines currencies.
     * minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
     */
    "currency": string;
    /**
     * Shape $ (Value): {@link PublicDownload}. Link to download the generated report. Present only
     * when status is succeeded. A temporary link for downloading a generated report.
     */
    "download"?: PublicDownload;
    /**
     * Shape $ (Value): string. Why the report failed. Present only when status is failed:
     * limit_exceeded when the report hit a size or time limit, data_unavailable when data it needs
     * wasn't available yet, and generation_failed for other errors. Value enum:
     * "generation_failed", "data_unavailable", "limit_exceeded".
     */
    "failure_reason": "generation_failed" | "data_unavailable" | "limit_exceeded" | (string & {});
    /**
     * Shape $ (Value): string. Exclusive interval end instant. Each report type matches its own
     * occurrence time. Format: date-time.
     */
    "interval_end_at": string;
    /**
     * Shape $ (Value): string. Inclusive interval start instant. Each report type matches its own
     * occurrence time. Format: date-time.
     */
    "interval_start_at": string;
    /**
     * Shape $ (Value): string. Stable identifier of the report. pattern:
     * ^rep_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "report_id": string;
    /**
     * Shape $ (Value): string. The report's type and column version. See the Reports guide for its
     * columns. Value enum: "gift_card_liability_v1", "orders_itemized_v1", "orders_itemized_v2",
     * "payments_itemized_v1", "balance_transactions_itemized_v1", "payouts_itemized_v1",
     * "tax_itemized_v1", "tax_summarized_v1", "merchant_billing_itemized_v1",
     * "tax_transactions_itemized_v1".
     */
    "report_type": "gift_card_liability_v1"
        | "orders_itemized_v1"
        | "orders_itemized_v2"
        | "payments_itemized_v1"
        | "balance_transactions_itemized_v1"
        | "payouts_itemized_v1"
        | "tax_itemized_v1"
        | "tax_summarized_v1"
        | "merchant_billing_itemized_v1"
        | "tax_transactions_itemized_v1"
        | (string & {});
    /**
     * Shape $ (Value): string. pending while Flint generates the report, then succeeded with a
     * download or failed with a failure_reason. Flint sends report.succeeded or report.failed when
     * it finishes. Value enum: "failed".
     */
    "status": "failed" | (string & {});
    /**
     * Shape $ (Value): string. IANA timezone used for timestamps and date bucketing. A payout
     * occurs at the start of its arrival_date in this timezone.
     */
    "timezone": string;
})
    & (({
    /** Shape $ (Value): string.  Value enum: "failed". */
    "status"?: "failed" | (string & {});
    /**
     * Shape $ (Value): string. Why the report failed. Present only when status is failed:
     * limit_exceeded when the report hit a size or time limit, data_unavailable when data it needs
     * wasn't available yet, and generation_failed for other errors. Value enum:
     * "generation_failed", "data_unavailable", "limit_exceeded".
     */
    "failure_reason": "generation_failed" | "data_unavailable" | "limit_exceeded" | (string & {});
}));
/** Shape $ (Value): {@link ReportListResponse}. A page of `Report` objects. */
export type ReportListResponse = {
    /**
     * Shape $ (Value): Array of {@link Report}. Shape $[] (Value): {@link Report}. A report
     * generated from the merchant's activity.
     */
    "data": Array<Report>;
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
/** Shape $ (Value): {@link ReportPending}. A report generated from the merchant's activity. */
export type ReportPending = ({
    /** Shape $ (Value): string. When the report was requested. Format: date-time. */
    "created_at": string;
    /**
     * Shape $ (Value): string. Currency the report covers. A report never combines currencies.
     * minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
     */
    "currency": string;
    /**
     * Shape $ (Value): {@link PublicDownload}. Link to download the generated report. Present only
     * when status is succeeded. A temporary link for downloading a generated report.
     */
    "download"?: PublicDownload;
    /**
     * Shape $ (Value): string. Why the report failed. Present only when status is failed:
     * limit_exceeded when the report hit a size or time limit, data_unavailable when data it needs
     * wasn't available yet, and generation_failed for other errors. Value enum:
     * "generation_failed", "data_unavailable", "limit_exceeded".
     */
    "failure_reason"?: "generation_failed" | "data_unavailable" | "limit_exceeded" | (string & {});
    /**
     * Shape $ (Value): string. Exclusive interval end instant. Each report type matches its own
     * occurrence time. Format: date-time.
     */
    "interval_end_at": string;
    /**
     * Shape $ (Value): string. Inclusive interval start instant. Each report type matches its own
     * occurrence time. Format: date-time.
     */
    "interval_start_at": string;
    /**
     * Shape $ (Value): string. Stable identifier of the report. pattern:
     * ^rep_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "report_id": string;
    /**
     * Shape $ (Value): string. The report's type and column version. See the Reports guide for its
     * columns. Value enum: "gift_card_liability_v1", "orders_itemized_v1", "orders_itemized_v2",
     * "payments_itemized_v1", "balance_transactions_itemized_v1", "payouts_itemized_v1",
     * "tax_itemized_v1", "tax_summarized_v1", "merchant_billing_itemized_v1",
     * "tax_transactions_itemized_v1".
     */
    "report_type": "gift_card_liability_v1"
        | "orders_itemized_v1"
        | "orders_itemized_v2"
        | "payments_itemized_v1"
        | "balance_transactions_itemized_v1"
        | "payouts_itemized_v1"
        | "tax_itemized_v1"
        | "tax_summarized_v1"
        | "merchant_billing_itemized_v1"
        | "tax_transactions_itemized_v1"
        | (string & {});
    /**
     * Shape $ (Value): string. pending while Flint generates the report, then succeeded with a
     * download or failed with a failure_reason. Flint sends report.succeeded or report.failed when
     * it finishes. Value enum: "pending".
     */
    "status": "pending" | (string & {});
    /**
     * Shape $ (Value): string. IANA timezone used for timestamps and date bucketing. A payout
     * occurs at the start of its arrival_date in this timezone.
     */
    "timezone": string;
})
    & (({
    /** Shape $ (Value): string.  Value enum: "pending". */
    "status"?: "pending" | (string & {});
}));
/** Shape $ (Value): {@link ReportResponse}. A response containing `Report` data. */
export type ReportResponse = {
    /** Shape $ (Value): {@link Report}. A report generated from the merchant's activity. */
    "data": Report;
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
/** Shape $ (Value): {@link ReportSucceeded}. A report generated from the merchant's activity. */
export type ReportSucceeded = ({
    /** Shape $ (Value): string. When the report was requested. Format: date-time. */
    "created_at": string;
    /**
     * Shape $ (Value): string. Currency the report covers. A report never combines currencies.
     * minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
     */
    "currency": string;
    /**
     * Shape $ (Value): {@link PublicDownload}. Link to download the generated report. Present only
     * when status is succeeded. A temporary link for downloading a generated report.
     */
    "download": PublicDownload;
    /**
     * Shape $ (Value): string. Why the report failed. Present only when status is failed:
     * limit_exceeded when the report hit a size or time limit, data_unavailable when data it needs
     * wasn't available yet, and generation_failed for other errors. Value enum:
     * "generation_failed", "data_unavailable", "limit_exceeded".
     */
    "failure_reason"?: "generation_failed" | "data_unavailable" | "limit_exceeded" | (string & {});
    /**
     * Shape $ (Value): string. Exclusive interval end instant. Each report type matches its own
     * occurrence time. Format: date-time.
     */
    "interval_end_at": string;
    /**
     * Shape $ (Value): string. Inclusive interval start instant. Each report type matches its own
     * occurrence time. Format: date-time.
     */
    "interval_start_at": string;
    /**
     * Shape $ (Value): string. Stable identifier of the report. pattern:
     * ^rep_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "report_id": string;
    /**
     * Shape $ (Value): string. The report's type and column version. See the Reports guide for its
     * columns. Value enum: "gift_card_liability_v1", "orders_itemized_v1", "orders_itemized_v2",
     * "payments_itemized_v1", "balance_transactions_itemized_v1", "payouts_itemized_v1",
     * "tax_itemized_v1", "tax_summarized_v1", "merchant_billing_itemized_v1",
     * "tax_transactions_itemized_v1".
     */
    "report_type": "gift_card_liability_v1"
        | "orders_itemized_v1"
        | "orders_itemized_v2"
        | "payments_itemized_v1"
        | "balance_transactions_itemized_v1"
        | "payouts_itemized_v1"
        | "tax_itemized_v1"
        | "tax_summarized_v1"
        | "merchant_billing_itemized_v1"
        | "tax_transactions_itemized_v1"
        | (string & {});
    /**
     * Shape $ (Value): string. pending while Flint generates the report, then succeeded with a
     * download or failed with a failure_reason. Flint sends report.succeeded or report.failed when
     * it finishes. Value enum: "succeeded".
     */
    "status": "succeeded" | (string & {});
    /**
     * Shape $ (Value): string. IANA timezone used for timestamps and date bucketing. A payout
     * occurs at the start of its arrival_date in this timezone.
     */
    "timezone": string;
})
    & (({
    /** Shape $ (Value): string.  Value enum: "succeeded". */
    "status"?: "succeeded" | (string & {});
    /**
     * Shape $ (Value): {@link PublicDownload}. Link to download the generated report. Present only
     * when status is succeeded. A temporary link for downloading a generated report.
     */
    "download": PublicDownload;
}));
export type ReportsCreateInput = {
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /** Shape $ (Value): {@link CreateReportRequestInput}. The request body for: Create a report. */
    "body": InputValue<CreateReportRequestInput>;
};
export type ReportsGetInput = {
    /** Shape $ (Value): string. */
    "report_id": InputValue<string>;
};
export type ReportsListInput = {
    /** Shape $ (Value): integer. minimum: 1. maximum: 100. Default: 20. */
    "page_size"?: InputValue<number>;
    /** Shape $ (Value): string. */
    "page_token"?: InputValue<string>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "gift_card_liability_v1",
     * "orders_itemized_v1", "orders_itemized_v2", "payments_itemized_v1",
     * "balance_transactions_itemized_v1", "payouts_itemized_v1", "tax_itemized_v1",
     * "tax_summarized_v1", "merchant_billing_itemized_v1", "tax_transactions_itemized_v1". Shape
     * $[] (Value): string. Value enum: "gift_card_liability_v1", "orders_itemized_v1",
     * "orders_itemized_v2", "payments_itemized_v1", "balance_transactions_itemized_v1",
     * "payouts_itemized_v1", "tax_itemized_v1", "tax_summarized_v1",
     * "merchant_billing_itemized_v1", "tax_transactions_itemized_v1".
     */
    "report_type"?: InputValue<Array<"gift_card_liability_v1"
        | "orders_itemized_v1"
        | "orders_itemized_v2"
        | "payments_itemized_v1"
        | "balance_transactions_itemized_v1"
        | "payouts_itemized_v1"
        | "tax_itemized_v1"
        | "tax_summarized_v1"
        | "merchant_billing_itemized_v1"
        | "tax_transactions_itemized_v1">>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "pending", "succeeded", "failed".
     * Shape $[] (Value): string. Value enum: "pending", "succeeded", "failed".
     */
    "status"?: InputValue<Array<"pending" | "succeeded" | "failed">>;
};
/**
 * Shape $ (Value): {@link RepriceDiscountsRequestInput}. The request body for: Reprice discounts.
 */
export type RepriceDiscountsRequestInput = {
    /**
     * Shape $ (Value): integer string. Optional order version from the last order read. The
     * mutation fails if the order changed. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
};
/** Per-call authentication and request overrides. See RUNTIME.md#requestoptions. */
export type RequestOptions<M extends AuthMode = AuthMode> = Omit<RuntimeRequestOptions, 'authMode' | 'credentials'>
    & {
    "apiKey"?: "merchant" extends M ? (string | CredentialProvider) : never;
    "checkoutToken"?: "checkout" extends M ? (string | CredentialProvider) : never;
    "customerToken"?: "customer" extends M ? (string | CredentialProvider) : never;
    "invoiceToken"?: "invoice" extends M ? (string | CredentialProvider) : never;
    "onboardingToken"?: "onboarding" extends M ? (string | CredentialProvider) : never;
    "token"?: "merchant" extends M ? (string | CredentialProvider) : never;
}
    & ({
    authMode?: undefined;
    credentials?: Credentials[M];
}
    | {
    [K in M]: {
        authMode: K;
        credentials?: Credentials[K];
    };
}[M]);
/**
 * Shape $ (Value): {@link ResendWebhookDeliveryRequest}. The request body for: Resend webhook
 * delivery.
 */
export type ResendWebhookDeliveryRequest = {
    /** Shape $ (Value): string. Your note explaining this action. minLength: 1. maxLength: 500. */
    "reason_message"?: string;
};
/**
 * Shape $ (Value): {@link ResendWebhookDeliveryRequestInput}. The request body for: Resend webhook
 * delivery.
 */
export type ResendWebhookDeliveryRequestInput = ResendWebhookDeliveryRequest;
/** Shape $ (Value): {@link ResetDemoSessionRequest}. The request body for: Reset demo session. */
export type ResetDemoSessionRequest = {
    /**
     * Shape $ (Value): string. Omit to use quickstart. An explicit empty or unsupported template
     * is invalid. Default: "quickstart". Value enum: "quickstart".
     */
    "template"?: "quickstart" | (string & {});
};
/**
 * Shape $ (Value): {@link ResetDemoSessionRequestInput}. The request body for: Reset demo session.
 */
export type ResetDemoSessionRequestInput = CreateDemoSessionRequestInput;
/**
 * Shape $ (Value): {@link ResolveCustomerDeletionRequest}. The request body for: Resolve a
 * customer deletion request.
 */
export type ResolveCustomerDeletionRequest = {
    /** Shape $ (Value): string.  Value enum: "approve", "reject". */
    "decision": "approve" | "reject" | (string & {});
};
/**
 * Shape $ (Value): {@link ResolveCustomerDeletionRequestInput}. The request body for: Resolve a
 * customer deletion request.
 */
export type ResolveCustomerDeletionRequestInput = {
    /** Shape $ (Value): string.  Value enum: "approve", "reject". */
    "decision": "approve" | "reject";
};
/**
 * Shape $ (Value): {@link ResolveOrderInventoryExceptionRequestInput}. The request body for:
 * Resolve order inventory exception.
 */
export type ResolveOrderInventoryExceptionRequestInput = {
    /** Shape $ (Value): string. Your note explaining this action. minLength: 1. */
    "reason_message"?: string;
};
/**
 * Shape $ (Value): {@link ResolvePaymentLinkLineItemModifierRequest}. A modifier selection for a
 * payment link line item: a modifier option with a quantity, or a text value.
 */
export type ResolvePaymentLinkLineItemModifierRequest = {
    /** Shape $ (Value): string. minLength: 1. */
    "modifier_id"?: string;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "quantity"?: `${bigint}`;
    /**
     * Shape $ (Value): {@link TextModifierRequest}. The text a buyer entered for a text modifier
     * group on a payment link line item.
     */
    "text"?: TextModifierRequest;
};
/**
 * Shape $ (Value): {@link ResolvePaymentLinkLineItemModifierRequestInput}. A modifier selection
 * for a payment link line item: a modifier option with a quantity, or a text value.
 */
export type ResolvePaymentLinkLineItemModifierRequestInput = {
    /** Shape $ (Value): string. minLength: 1. */
    "modifier_id"?: string;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "quantity"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): {@link ResolvePaymentLinkTextModifierRequestInput}. The text a buyer
     * entered for a text modifier group on a payment link line item.
     */
    "text"?: ResolvePaymentLinkTextModifierRequestInput;
};
/**
 * Shape $ (Value): {@link ResolvePaymentLinkLineItemModifiers}. The modifier selections for one
 * payment link line item when resolving a payment link.
 */
export type ResolvePaymentLinkLineItemModifiers = {
    /**
     * Shape $ (Value): Array of {@link ResolvePaymentLinkLineItemModifierRequest}. Shape $[]
     * (Value): {@link ResolvePaymentLinkLineItemModifierRequest}. A modifier selection for a
     * payment link line item: a modifier option with a quantity, or a text value.
     */
    "modifiers"?: Array<ResolvePaymentLinkLineItemModifierRequest>;
};
/**
 * Shape $ (Value): {@link ResolvePaymentLinkLineItemModifiersInput}. The modifier selections for
 * one payment link line item when resolving a payment link.
 */
export type ResolvePaymentLinkLineItemModifiersInput = {
    /**
     * Shape $ (Value): Array of {@link ResolvePaymentLinkLineItemModifierRequestInput}. Shape $[]
     * (Value): {@link ResolvePaymentLinkLineItemModifierRequestInput}. A modifier selection for a
     * payment link line item: a modifier option with a quantity, or a text value.
     */
    "modifiers"?: Array<ResolvePaymentLinkLineItemModifierRequestInput>;
};
/**
 * Shape $ (Value): {@link ResolvePaymentLinkRequest}. The request body for: Resolve payment link.
 */
export type ResolvePaymentLinkRequest = {
    /**
     * Shape $ (Value): Map of string. Buyer answers keyed by custom field key. Checkbox answers
     * must be exactly true or false as strings. A required checkbox must be true. Shape $.*
     * (Value): string. minLength: 1.
     */
    "custom_field_values"?: Record<string, string>;
    /**
     * Shape $ (Value): Map of {@link ResolvePaymentLinkLineItemModifiers}. Modifier choices keyed
     * by line item key, for catalog items. Shape $.* (Value): {@link
     * ResolvePaymentLinkLineItemModifiers}. The modifier selections for one payment link line item
     * when resolving a payment link.
     */
    "modifiers"?: Record<string, ResolvePaymentLinkLineItemModifiers>;
    /**
     * Shape $ (Value): Map of integer. Quantities keyed by line item key (line_items[].key), each
     * within that item's min_quantity and max_quantity. Event tiers accept 0. Whole-number
     * quantities; fractional quantities are not supported. Shape $.* (Value): integer.
     * Whole-number quantity value; fractional quantities are not supported. Format: int32.
     */
    "quantity_overrides"?: Record<string, number>;
    /** Shape $ (Value): string. minLength: 1. */
    "resolution_context": string;
    /**
     * Shape $ (Value): Map of {@link MoneyValue}. Prices keyed by line item key, for items with
     * allow_unit_price_adjustment, between min_unit_price_money and max_unit_price_money. A
     * donation link has one line item, keyed donation. Shape $.* (Value): {@link MoneyValue}.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "unit_price_overrides"?: Record<string, MoneyValue>;
    /**
     * Shape $ (Value): Map of string. Variant IDs keyed by line item key (line_items[].key), for
     * lines with variant_ids. Each selection must be offered by that line and priced in its
     * current currency. Omit a key to use default_variant_id; a line without a default requires a
     * selection. Null is not accepted. Shape $.* (Value): string. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "variant_selections"?: Record<string, string>;
};
/**
 * Shape $ (Value): {@link ResolvePaymentLinkRequestInput}. The request body for: Resolve payment
 * link.
 */
export type ResolvePaymentLinkRequestInput = {
    /**
     * Shape $ (Value): Map of string. Buyer answers keyed by custom field key. Checkbox answers
     * must be exactly true or false as strings. A required checkbox must be true. Shape $.*
     * (Value): string. minLength: 1.
     */
    "custom_field_values"?: Record<string, string>;
    /**
     * Shape $ (Value): Map of {@link ResolvePaymentLinkLineItemModifiersInput}. Modifier choices
     * keyed by line item key, for catalog items. Shape $.* (Value): {@link
     * ResolvePaymentLinkLineItemModifiersInput}. The modifier selections for one payment link line
     * item when resolving a payment link.
     */
    "modifiers"?: Record<string, ResolvePaymentLinkLineItemModifiersInput>;
    /**
     * Shape $ (Value): Map of integer. Quantities keyed by line item key (line_items[].key), each
     * within that item's min_quantity and max_quantity. Event tiers accept 0. Whole-number
     * quantities; fractional quantities are not supported. Shape $.* (Value): integer.
     * Whole-number quantity value; fractional quantities are not supported. Format: int32.
     */
    "quantity_overrides"?: Record<string, number>;
    /** Shape $ (Value): string. minLength: 1. */
    "resolution_context": string;
    /**
     * Shape $ (Value): Map of {@link MoneyValueInput}. Prices keyed by line item key, for items
     * with allow_unit_price_adjustment, between min_unit_price_money and max_unit_price_money. A
     * donation link has one line item, keyed donation. Shape $.* (Value): {@link MoneyValueInput}.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "unit_price_overrides"?: Record<string, MoneyValueInput>;
    /**
     * Shape $ (Value): Map of string. Variant IDs keyed by line item key (line_items[].key), for
     * lines with variant_ids. Each selection must be offered by that line and priced in its
     * current currency. Omit a key to use default_variant_id; a line without a default requires a
     * selection. Null is not accepted. Shape $.* (Value): string. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "variant_selections"?: Record<string, string>;
};
/**
 * Shape $ (Value): {@link ResolvePaymentLinkResponse}. A response containing
 * `CheckoutSessionWithSecret` data.
 */
export type ResolvePaymentLinkResponse = {
    /**
     * Shape $ (Value): {@link CheckoutSessionWithSecret}. The checkout session with its checkout
     * credential. For hosted checkout, send the buyer to url. For embedded checkout, pass
     * checkout_auth_token to your checkout client. A session in which a buyer completes an order's
     * payment.
     */
    "data": CheckoutSessionWithSecret;
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
 * Shape $ (Value): {@link ResolvePaymentLinkTextModifierRequestInput}. The text a buyer entered
 * for a text modifier group on a payment link line item.
 */
export type ResolvePaymentLinkTextModifierRequestInput = {
    /** Shape $ (Value): string. minLength: 1. */
    "modifier_group_id": string;
    /** Shape $ (Value): string. minLength: 1. */
    "value": string;
};
/**
 * Shape $ (Value): {@link ResourceReference}. A reference to another resource by `resource_type`
 * and `resource_id`.
 */
export type ResourceReference = {
    /** Shape $ (Value): string. Public Flint ID of the referenced resource. */
    "resource_id": string;
    /**
     * Shape $ (Value): {@link ResourceType}. Public resource type: the resource's ID field name
     * without `_id`. Clients must accept values added in future releases. Value enum: "api_key",
     * "api_request_log", "balance", "balance_transaction", "bundle", "bundle_component",
     * "category", "checkout_session", "checkout_session_customer_verification", "credit_note",
     * "credit_note_allocation", "custom_domain", "customer", "customer_address",
     * "customer_deletion_request", "customer_email_preferences", "customer_session",
     * "customer_verification", "delivery_location_set", "delivery_method", "delivery_profile",
     * "delivery_quote", "delivery_rate", "delivery_rate_callback", "delivery_revocation",
     * "delivery_selection", "delivery_zone", "demo_session", "device", "discount", "dispute",
     * "email_change_request", "environment_grant", "feedback_report", "file", "flint_wallet",
     * "flint_wallet_card", "fraud_warning", "fulfillment", "fulfillment_event",
     * "fulfillment_notification", "gift_card", "gift_card_funding_disposition", "gift_card_load",
     * "gift_card_notification", "gift_card_redemption", "gift_card_transaction", "image",
     * "inventory_adjustment", "inventory_allocation_policy",
     * "inventory_allocation_policy_revision", "inventory_count", "inventory_item",
     * "inventory_level", "inventory_movement", "inventory_receipt", "inventory_reservation",
     * "inventory_reservation_line", "inventory_transfer", "inventory_transfer_line", "invoice",
     * "invoice_delivery_attempt", "invoice_late_fee", "invoice_line_item",
     * "invoice_manual_payment", "invoice_payment_attempt", "invoice_payment_term", "location",
     * "merchant", "merchant_billing_balance", "merchant_billing_entry",
     * "merchant_billing_invoice", "modifier", "modifier_group", "modifier_set", "order",
     * "order_charge", "order_line_item", "order_line_item_modifier", "order_payment_attempt",
     * "organization", "package", "package_item", "partner_app", "partner_app_credential",
     * "partner_app_install", "payment_intent", "payment_link", "payment_link_custom_field",
     * "payment_link_line_item", "payment_method", "payment_method_domain", "payment_review",
     * "payout", "payout_destination", "payout_settings", "product", "product_option",
     * "product_option_value", "product_variant", "promotion", "promotion_code",
     * "purchase_refund_allocation", "refund", "refund_allocation", "refund_line_item_adjustment",
     * "report", "report_download", "return", "return_activity", "return_disposition",
     * "return_inspection", "return_inspection_line_item", "return_line_item", "return_policy",
     * "return_policy_revision", "return_reason", "return_receipt", "return_receipt_line_item",
     * "return_resolution", "risk_list", "risk_list_item", "risk_rule", "sandbox", "settings",
     * "shipment", "subscription", "subscription_delivery_migration", "subscription_line_item",
     * "subscription_offer", "subscription_payment_retry", "subscription_plan",
     * "subscription_plan_line_item", "tax_connection", "tax_registration", "user",
     * "webhook_delivery", "webhook_endpoint", "webhook_event", "workload_identity".
     */
    "resource_type": ResourceType;
};
/**
 * Shape $ (Value): {@link ResourceTimeline}. The activity timeline for one resource, such as API
 * requests, webhook events and deliveries, and image changes.
 */
export type ResourceTimeline = {
    /**
     * Shape $ (Value): Array of {@link ResourceTimelineEntry}. Shape $[] (Value): {@link
     * ResourceTimelineEntry}. One entry in a resource timeline. The `entry_type` selects which of
     * the request, webhook, or image fields are present.
     */
    "entries": Array<ResourceTimelineEntry>;
    /** Shape $ (Value): string. */
    "resource_id": string;
    /**
     * Shape $ (Value): {@link ResourceType}. Public resource type: the resource's ID field name
     * without `_id`. Clients must accept values added in future releases. Value enum: "api_key",
     * "api_request_log", "balance", "balance_transaction", "bundle", "bundle_component",
     * "category", "checkout_session", "checkout_session_customer_verification", "credit_note",
     * "credit_note_allocation", "custom_domain", "customer", "customer_address",
     * "customer_deletion_request", "customer_email_preferences", "customer_session",
     * "customer_verification", "delivery_location_set", "delivery_method", "delivery_profile",
     * "delivery_quote", "delivery_rate", "delivery_rate_callback", "delivery_revocation",
     * "delivery_selection", "delivery_zone", "demo_session", "device", "discount", "dispute",
     * "email_change_request", "environment_grant", "feedback_report", "file", "flint_wallet",
     * "flint_wallet_card", "fraud_warning", "fulfillment", "fulfillment_event",
     * "fulfillment_notification", "gift_card", "gift_card_funding_disposition", "gift_card_load",
     * "gift_card_notification", "gift_card_redemption", "gift_card_transaction", "image",
     * "inventory_adjustment", "inventory_allocation_policy",
     * "inventory_allocation_policy_revision", "inventory_count", "inventory_item",
     * "inventory_level", "inventory_movement", "inventory_receipt", "inventory_reservation",
     * "inventory_reservation_line", "inventory_transfer", "inventory_transfer_line", "invoice",
     * "invoice_delivery_attempt", "invoice_late_fee", "invoice_line_item",
     * "invoice_manual_payment", "invoice_payment_attempt", "invoice_payment_term", "location",
     * "merchant", "merchant_billing_balance", "merchant_billing_entry",
     * "merchant_billing_invoice", "modifier", "modifier_group", "modifier_set", "order",
     * "order_charge", "order_line_item", "order_line_item_modifier", "order_payment_attempt",
     * "organization", "package", "package_item", "partner_app", "partner_app_credential",
     * "partner_app_install", "payment_intent", "payment_link", "payment_link_custom_field",
     * "payment_link_line_item", "payment_method", "payment_method_domain", "payment_review",
     * "payout", "payout_destination", "payout_settings", "product", "product_option",
     * "product_option_value", "product_variant", "promotion", "promotion_code",
     * "purchase_refund_allocation", "refund", "refund_allocation", "refund_line_item_adjustment",
     * "report", "report_download", "return", "return_activity", "return_disposition",
     * "return_inspection", "return_inspection_line_item", "return_line_item", "return_policy",
     * "return_policy_revision", "return_reason", "return_receipt", "return_receipt_line_item",
     * "return_resolution", "risk_list", "risk_list_item", "risk_rule", "sandbox", "settings",
     * "shipment", "subscription", "subscription_delivery_migration", "subscription_line_item",
     * "subscription_offer", "subscription_payment_retry", "subscription_plan",
     * "subscription_plan_line_item", "tax_connection", "tax_registration", "user",
     * "webhook_delivery", "webhook_endpoint", "webhook_event", "workload_identity".
     */
    "resource_type": ResourceType;
    /** Shape $ (Value): boolean. */
    "test": boolean;
};
/**
 * Shape $ (Value): {@link ResourceTimelineAPIRequestEntry}. An API request recorded in this
 * resource's timeline.
 */
export type ResourceTimelineAPIRequestEntry = {
    /** Shape $ (Value): string. */
    "api_request_log_id": string;
    /**
     * Shape $ (Value): {@link ResourceReference}. The public resource that made this request.
     * Absent when Flint cannot attribute the caller. A reference to another resource by
     * `resource_type` and `resource_id`.
     */
    "caller"?: ResourceReference;
    /**
     * Shape $ (Value): string. The caller's X-Request-Id, matched exactly and case-sensitively.
     * Absent when the caller sent none. minLength: 1. maxLength: 128. pattern: ^[\x21-\x7E]+$.
     */
    "client_request_id"?: string;
    /**
     * Shape $ (Value): string. The trace ID from a valid W3C traceparent, for correlation with the
     * caller's tracing. Flint starts its own trace. Absent when no valid traceparent was sent.
     * pattern: ^[0-9a-f]{32}$.
     */
    "client_trace_id"?: string;
    /** Shape $ (Value): string.  Value enum: "api_request". */
    "entry_type": "api_request" | (string & {});
    /** Shape $ (Value): string. */
    "error_code"?: string;
    /**
     * Shape $ (Value): string. A short explanation of why the request failed. Absent for
     * successful requests.
     */
    "error_summary"?: string;
    /**
     * Shape $ (Value): string. The error envelope's `type` for this response. Value enum:
     * "authentication_error", "authorization_error", "validation_error", "not_found_error",
     * "conflict_error", "rate_limit_error", "external_service_error", "timeout_error",
     * "unavailable_error", "internal_error", "protocol_error".
     */
    "error_type"?: "authentication_error"
        | "authorization_error"
        | "validation_error"
        | "not_found_error"
        | "conflict_error"
        | "rate_limit_error"
        | "external_service_error"
        | "timeout_error"
        | "unavailable_error"
        | "internal_error"
        | "protocol_error"
        | (string & {});
    /** Shape $ (Value): string. */
    "http_method": string;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64.
     */
    "latency_milliseconds": `${bigint}`;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "occurred_at": string;
    /** Shape $ (Value): string. */
    "path": string;
    /**
     * Shape $ (Value): string. The next action to resolve the failure. Absent when no action
     * applies.
     */
    "recommended_action"?: string;
    /**
     * Shape $ (Value): string. A Flint guide that explains this failure. Absent when no guide
     * applies.
     */
    "reference_url"?: string;
    /**
     * Shape $ (Value): string. Records created before server-minted request IDs keep their
     * original ID. maxLength: 128. Example: "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
    /** Shape $ (Value): string. */
    "resource_timeline_entry_id": string;
    /**
     * Shape $ (Value): string. How to recover: same_request resends the identical request with the
     * same Idempotency-Key; after_refresh re-reads the resource and rebuilds the request with a
     * new key; none requires correcting the request or following next_steps or next_actions. Value
     * enum: "same_request", "after_refresh", "none".
     */
    "retry"?: "same_request" | "after_refresh" | "none" | (string & {});
    /** Shape $ (Value): string. */
    "route_pattern": string;
    /** Shape $ (Value): integer. Format: int32. */
    "status_code": number;
};
/**
 * Shape $ (Value): {@link ResourceTimelineEntry}. One entry in a resource timeline. The
 * `entry_type` selects which of the request, webhook, or image fields are present.
 */
export type ResourceTimelineEntry = ((ResourceTimelineAPIRequestEntry)
    | (ResourceTimelineWebhookEventEntry)
    | (ResourceTimelineWebhookDeliveryAttemptEntry)
    | (ResourceTimelineImageMutationEntry)
    | (Record<string, unknown>));
/**
 * Shape $ (Value): {@link ResourceTimelineImageMutationEntry}. A change to this resource's image
 * attachments recorded in its timeline.
 */
export type ResourceTimelineImageMutationEntry = {
    /** Shape $ (Value): string.  Value enum: "image_mutation". */
    "entry_type": "image_mutation" | (string & {});
    /**
     * Shape $ (Value): integer string. Version of the resource's image attachments after this
     * change. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     */
    "image_version": `${bigint}`;
    /**
     * Shape $ (Value): string. The change made to the resource's images. Value enum: "replaced".
     */
    "mutation_kind": "replaced" | (string & {});
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "occurred_at": string;
    /**
     * Shape $ (Value): string. Records created before server-minted request IDs keep their
     * original ID. maxLength: 128. Example: "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id"?: string;
    /** Shape $ (Value): string. */
    "resource_timeline_entry_id": string;
};
/**
 * Shape $ (Value): {@link ResourceTimelineResponse}. A response containing `ResourceTimeline`
 * data.
 */
export type ResourceTimelineResponse = {
    /**
     * Shape $ (Value): {@link ResourceTimeline}. The activity timeline for one resource, such as
     * API requests, webhook events and deliveries, and image changes.
     */
    "data": ResourceTimeline;
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
 * Shape $ (Value): {@link ResourceTimelineWebhookDeliveryAttemptEntry}. A webhook delivery attempt
 * recorded in this resource's timeline.
 */
export type ResourceTimelineWebhookDeliveryAttemptEntry = {
    /** Shape $ (Value): string. */
    "api_request_log_id"?: string;
    /** Shape $ (Value): integer. Format: int32. */
    "attempt_number": number;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "completed_at"?: string;
    /**
     * Shape $ (Value): string. Value enum: "automatic_delivery", "automatic_retry",
     * "manual_resend", "manual_delivery".
     */
    "delivery_trigger": "automatic_delivery" | "automatic_retry" | "manual_resend" | "manual_delivery" | (string & {});
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64.
     */
    "duration_milliseconds"?: `${bigint}`;
    /** Shape $ (Value): string.  Value enum: "webhook_delivery_attempt". */
    "entry_type": "webhook_delivery_attempt" | (string & {});
    /**
     * Shape $ (Value): string. The kind of failure on the most recent failed attempt. Absent
     * before any attempt, and when delivered or suppressed. Value enum: "webhook_timeout",
     * "webhook_dns", "webhook_tls", "webhook_connection", "webhook_blocked_target",
     * "webhook_request", "webhook_redirect", "webhook_http_4xx", "webhook_http_5xx",
     * "server_error", "webhook_delivery".
     */
    "error_category"?: "webhook_timeout"
        | "webhook_dns"
        | "webhook_tls"
        | "webhook_connection"
        | "webhook_blocked_target"
        | "webhook_request"
        | "webhook_redirect"
        | "webhook_http_4xx"
        | "webhook_http_5xx"
        | "server_error"
        | "webhook_delivery"
        | (string & {});
    /**
     * Shape $ (Value): string. A concise explanation of the failed attempt. Absent before any
     * attempt, and when delivered or suppressed.
     */
    "error_summary"?: string;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "occurred_at": string;
    /** Shape $ (Value): string. The note supplied when this action was requested. */
    "reason_message"?: string;
    /** Shape $ (Value): string. The next step to resolve the failed delivery attempt. */
    "recommended_action"?: string;
    /**
     * Shape $ (Value): string. Records created before server-minted request IDs keep their
     * original ID. maxLength: 128. Example: "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id"?: string;
    /** Shape $ (Value): string. */
    "resource_timeline_entry_id": string;
    /**
     * Shape $ (Value): boolean. Whether sending this delivery again without changing your endpoint
     * is likely to succeed. While the delivery is pending, Flint retries automatically either way.
     */
    "retryable"?: boolean;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "started_at"?: string;
    /**
     * Shape $ (Value): string. Value enum: "delivered", "failed", "pending", "queued", "sending".
     */
    "status": "delivered" | "failed" | "pending" | "queued" | "sending" | (string & {});
    /** Shape $ (Value): integer. Format: int32. */
    "status_code"?: number;
    /** Shape $ (Value): string. */
    "webhook_delivery_attempt_id": string;
    /** Shape $ (Value): string. */
    "webhook_delivery_id": string;
    /** Shape $ (Value): string. */
    "webhook_endpoint_id": string;
    /** Shape $ (Value): string. */
    "webhook_event_id": string;
};
/**
 * Shape $ (Value): {@link ResourceTimelineWebhookEventEntry}. A webhook event recorded in this
 * resource's timeline.
 */
export type ResourceTimelineWebhookEventEntry = {
    /** Shape $ (Value): string. */
    "api_request_log_id"?: string;
    /** Shape $ (Value): string.  Value enum: "webhook_event". */
    "entry_type": "webhook_event" | (string & {});
    /**
     * Shape $ (Value): string. Value enum: "balance.updated", "balance_transaction.created",
     * "balance_transaction.updated", "bundle.archived", "bundle.created", "bundle.updated",
     * "category.created", "category.deleted", "category.updated", "checkout_session.closed",
     * "checkout_session.created", "checkout_session.expired", "checkout_session.invalidated",
     * "checkout_session.paid", "checkout_session.partially_paid", "credit_note.created",
     * "credit_note.issued", "credit_note.updated", "credit_note.voided",
     * "credit_note_allocation.created", "credit_note_allocation.reversed",
     * "custom_domain.archived", "custom_domain.updated", "customer.created", "customer.deleted",
     * "customer.updated", "customer_deletion_request.completed",
     * "customer_deletion_request.created", "customer_deletion_request.failed",
     * "customer_deletion_request.processing", "customer_deletion_request.rejected",
     * "delivery_location_set.activated", "delivery_location_set.archived",
     * "delivery_location_set.created", "delivery_location_set.deactivated",
     * "delivery_location_set.updated", "delivery_method.activated", "delivery_method.archived",
     * "delivery_method.created", "delivery_method.deactivated", "delivery_method.updated",
     * "delivery_profile.activated", "delivery_profile.archived", "delivery_profile.created",
     * "delivery_profile.deactivated", "delivery_profile.updated",
     * "delivery_rate_callback.activated", "delivery_rate_callback.archived",
     * "delivery_rate_callback.created", "delivery_rate_callback.deactivated",
     * "delivery_rate_callback.updated", "delivery_revocation.created",
     * "delivery_selection.committed", "delivery_zone.activated", "delivery_zone.archived",
     * "delivery_zone.created", "delivery_zone.deactivated", "delivery_zone.updated",
     * "dispute.created", "dispute.inquiry_closed", "dispute.lost", "dispute.needs_response",
     * "dispute.prevented", "dispute.updated", "dispute.won", "environment_grant.created",
     * "environment_grant.revoked", "fraud_warning.created", "fraud_warning.updated",
     * "fulfillment.canceled", "fulfillment.completed", "fulfillment.created",
     * "fulfillment.failed", "fulfillment.updated", "fulfillment_event.created",
     * "gift_card.created", "gift_card.updated", "gift_card_load.created",
     * "gift_card_load.updated", "gift_card_notification.created",
     * "gift_card_notification.updated", "gift_card_redemption.created",
     * "gift_card_redemption.updated", "gift_card_transaction.created", "inventory_count.applied",
     * "inventory_level.shortage_detected", "inventory_level.updated", "inventory_receipt.created",
     * "inventory_reservation.action_required", "inventory_reservation.at_risk",
     * "inventory_reservation.closed", "inventory_reservation.committed",
     * "inventory_reservation.consumed", "inventory_reservation.created",
     * "inventory_reservation.hold_expired", "inventory_reservation.released",
     * "inventory_transfer.closed", "inventory_transfer.departed", "inventory_transfer.lost",
     * "inventory_transfer.received", "inventory_transfer.returned",
     * "invoice.collection_block_resolved", "invoice.collection_blocked", "invoice.created",
     * "invoice.credited", "invoice.issue_failed", "invoice.issued", "invoice.late_fee_assessed",
     * "invoice.late_fee_due", "invoice.late_fee_waived", "invoice.marked_uncollectible",
     * "invoice.overdue", "invoice.paid", "invoice.partially_paid", "invoice.partially_refunded",
     * "invoice.refunded", "invoice.reminder_due", "invoice.reopened", "invoice.sent",
     * "invoice.updated", "invoice.voided", "invoice_delivery_attempt.failed",
     * "invoice_delivery_attempt.sent", "invoice_delivery_attempt.suppressed",
     * "invoice_manual_payment.created", "invoice_manual_payment.reversed",
     * "invoice_payment_attempt.canceled", "invoice_payment_attempt.expired",
     * "invoice_payment_attempt.failed", "invoice_payment_attempt.processing",
     * "invoice_payment_attempt.settled", "merchant.readiness_updated", "merchant.updated",
     * "merchant_billing_balance.updated", "merchant_billing_invoice.issued",
     * "merchant_billing_invoice.updated", "modifier_group.archived", "modifier_group.created",
     * "modifier_group.updated", "modifier_set.archived", "modifier_set.created",
     * "modifier_set.updated", "order.closed", "order.created",
     * "order.inventory_exception_created", "order.inventory_exception_resolved", "order.paid",
     * "order.partially_paid", "order.partially_refunded", "order.refunded", "order.updated",
     * "package.created", "package.updated", "partner_app_install.created",
     * "partner_app_install.permissions_updated", "partner_app_install.revoked",
     * "partner_app_install.updated", "payment_intent.canceled", "payment_intent.created",
     * "payment_intent.expired", "payment_intent.fulfillment_hold_updated",
     * "payment_intent.payment_failed", "payment_intent.processing",
     * "payment_intent.requires_action", "payment_intent.requires_capture",
     * "payment_intent.succeeded", "payment_intent.updated", "payment_link.created",
     * "payment_link.updated", "payment_method.activated", "payment_method.archived",
     * "payment_method.failed", "payment_review.closed", "payment_review.opened",
     * "payment_review.reopened", "payout.canceled", "payout.created", "payout.failed",
     * "payout.paid", "payout.reversed", "payout.updated", "payout_destination.archived",
     * "payout_destination.created", "payout_destination.disabled", "payout_destination.updated",
     * "payout_settings.updated", "product.archived", "product.created", "product.updated",
     * "product_variant.archived", "product_variant.created", "product_variant.updated",
     * "promotion.archived", "promotion.created", "promotion.updated", "promotion_code.archived",
     * "promotion_code.created", "promotion_code.updated", "refund.created", "refund.failed",
     * "refund.partially_succeeded", "refund.succeeded", "refund.updated", "report.failed",
     * "report.succeeded", "return.canceled", "return.completed", "return.created",
     * "return.decision_recorded", "return.reopened", "return.updated",
     * "return_disposition.created", "return_disposition.updated",
     * "return_inspection.acceptance_decided", "return_inspection.created",
     * "return_inspection.superseded", "return_receipt.created", "return_receipt.superseded",
     * "return_receipt.verified", "return_resolution.created", "return_resolution.updated",
     * "shipment.created", "shipment.updated", "subscription.activated", "subscription.canceled",
     * "subscription.cancellation_scheduled", "subscription.created", "subscription.cycle_skipped",
     * "subscription.delivery_action_required", "subscription.delivery_pause_upcoming",
     * "subscription.delivery_updated", "subscription.dunning_exhausted", "subscription.past_due",
     * "subscription.paused", "subscription.payment_succeeded", "subscription.plan_changed",
     * "subscription.reactivated", "subscription.renewal_upcoming", "subscription.resumed",
     * "subscription.trial_ending", "subscription.updated",
     * "subscription_delivery_migration.completed", "subscription_payment_retry.created",
     * "subscription_payment_retry.failed", "subscription_payment_retry.succeeded",
     * "tax_connection.updated".
     */
    "event_type": "balance.updated"
        | "balance_transaction.created"
        | "balance_transaction.updated"
        | "bundle.archived"
        | "bundle.created"
        | "bundle.updated"
        | "category.created"
        | "category.deleted"
        | "category.updated"
        | "checkout_session.closed"
        | "checkout_session.created"
        | "checkout_session.expired"
        | "checkout_session.invalidated"
        | "checkout_session.paid"
        | "checkout_session.partially_paid"
        | "credit_note.created"
        | "credit_note.issued"
        | "credit_note.updated"
        | "credit_note.voided"
        | "credit_note_allocation.created"
        | "credit_note_allocation.reversed"
        | "custom_domain.archived"
        | "custom_domain.updated"
        | "customer.created"
        | "customer.deleted"
        | "customer.updated"
        | "customer_deletion_request.completed"
        | "customer_deletion_request.created"
        | "customer_deletion_request.failed"
        | "customer_deletion_request.processing"
        | "customer_deletion_request.rejected"
        | "delivery_location_set.activated"
        | "delivery_location_set.archived"
        | "delivery_location_set.created"
        | "delivery_location_set.deactivated"
        | "delivery_location_set.updated"
        | "delivery_method.activated"
        | "delivery_method.archived"
        | "delivery_method.created"
        | "delivery_method.deactivated"
        | "delivery_method.updated"
        | "delivery_profile.activated"
        | "delivery_profile.archived"
        | "delivery_profile.created"
        | "delivery_profile.deactivated"
        | "delivery_profile.updated"
        | "delivery_rate_callback.activated"
        | "delivery_rate_callback.archived"
        | "delivery_rate_callback.created"
        | "delivery_rate_callback.deactivated"
        | "delivery_rate_callback.updated"
        | "delivery_revocation.created"
        | "delivery_selection.committed"
        | "delivery_zone.activated"
        | "delivery_zone.archived"
        | "delivery_zone.created"
        | "delivery_zone.deactivated"
        | "delivery_zone.updated"
        | "dispute.created"
        | "dispute.inquiry_closed"
        | "dispute.lost"
        | "dispute.needs_response"
        | "dispute.prevented"
        | "dispute.updated"
        | "dispute.won"
        | "environment_grant.created"
        | "environment_grant.revoked"
        | "fraud_warning.created"
        | "fraud_warning.updated"
        | "fulfillment.canceled"
        | "fulfillment.completed"
        | "fulfillment.created"
        | "fulfillment.failed"
        | "fulfillment.updated"
        | "fulfillment_event.created"
        | "gift_card.created"
        | "gift_card.updated"
        | "gift_card_load.created"
        | "gift_card_load.updated"
        | "gift_card_notification.created"
        | "gift_card_notification.updated"
        | "gift_card_redemption.created"
        | "gift_card_redemption.updated"
        | "gift_card_transaction.created"
        | "inventory_count.applied"
        | "inventory_level.shortage_detected"
        | "inventory_level.updated"
        | "inventory_receipt.created"
        | "inventory_reservation.action_required"
        | "inventory_reservation.at_risk"
        | "inventory_reservation.closed"
        | "inventory_reservation.committed"
        | "inventory_reservation.consumed"
        | "inventory_reservation.created"
        | "inventory_reservation.hold_expired"
        | "inventory_reservation.released"
        | "inventory_transfer.closed"
        | "inventory_transfer.departed"
        | "inventory_transfer.lost"
        | "inventory_transfer.received"
        | "inventory_transfer.returned"
        | "invoice.collection_block_resolved"
        | "invoice.collection_blocked"
        | "invoice.created"
        | "invoice.credited"
        | "invoice.issue_failed"
        | "invoice.issued"
        | "invoice.late_fee_assessed"
        | "invoice.late_fee_due"
        | "invoice.late_fee_waived"
        | "invoice.marked_uncollectible"
        | "invoice.overdue"
        | "invoice.paid"
        | "invoice.partially_paid"
        | "invoice.partially_refunded"
        | "invoice.refunded"
        | "invoice.reminder_due"
        | "invoice.reopened"
        | "invoice.sent"
        | "invoice.updated"
        | "invoice.voided"
        | "invoice_delivery_attempt.failed"
        | "invoice_delivery_attempt.sent"
        | "invoice_delivery_attempt.suppressed"
        | "invoice_manual_payment.created"
        | "invoice_manual_payment.reversed"
        | "invoice_payment_attempt.canceled"
        | "invoice_payment_attempt.expired"
        | "invoice_payment_attempt.failed"
        | "invoice_payment_attempt.processing"
        | "invoice_payment_attempt.settled"
        | "merchant.readiness_updated"
        | "merchant.updated"
        | "merchant_billing_balance.updated"
        | "merchant_billing_invoice.issued"
        | "merchant_billing_invoice.updated"
        | "modifier_group.archived"
        | "modifier_group.created"
        | "modifier_group.updated"
        | "modifier_set.archived"
        | "modifier_set.created"
        | "modifier_set.updated"
        | "order.closed"
        | "order.created"
        | "order.inventory_exception_created"
        | "order.inventory_exception_resolved"
        | "order.paid"
        | "order.partially_paid"
        | "order.partially_refunded"
        | "order.refunded"
        | "order.updated"
        | "package.created"
        | "package.updated"
        | "partner_app_install.created"
        | "partner_app_install.permissions_updated"
        | "partner_app_install.revoked"
        | "partner_app_install.updated"
        | "payment_intent.canceled"
        | "payment_intent.created"
        | "payment_intent.expired"
        | "payment_intent.fulfillment_hold_updated"
        | "payment_intent.payment_failed"
        | "payment_intent.processing"
        | "payment_intent.requires_action"
        | "payment_intent.requires_capture"
        | "payment_intent.succeeded"
        | "payment_intent.updated"
        | "payment_link.created"
        | "payment_link.updated"
        | "payment_method.activated"
        | "payment_method.archived"
        | "payment_method.failed"
        | "payment_review.closed"
        | "payment_review.opened"
        | "payment_review.reopened"
        | "payout.canceled"
        | "payout.created"
        | "payout.failed"
        | "payout.paid"
        | "payout.reversed"
        | "payout.updated"
        | "payout_destination.archived"
        | "payout_destination.created"
        | "payout_destination.disabled"
        | "payout_destination.updated"
        | "payout_settings.updated"
        | "product.archived"
        | "product.created"
        | "product.updated"
        | "product_variant.archived"
        | "product_variant.created"
        | "product_variant.updated"
        | "promotion.archived"
        | "promotion.created"
        | "promotion.updated"
        | "promotion_code.archived"
        | "promotion_code.created"
        | "promotion_code.updated"
        | "refund.created"
        | "refund.failed"
        | "refund.partially_succeeded"
        | "refund.succeeded"
        | "refund.updated"
        | "report.failed"
        | "report.succeeded"
        | "return.canceled"
        | "return.completed"
        | "return.created"
        | "return.decision_recorded"
        | "return.reopened"
        | "return.updated"
        | "return_disposition.created"
        | "return_disposition.updated"
        | "return_inspection.acceptance_decided"
        | "return_inspection.created"
        | "return_inspection.superseded"
        | "return_receipt.created"
        | "return_receipt.superseded"
        | "return_receipt.verified"
        | "return_resolution.created"
        | "return_resolution.updated"
        | "shipment.created"
        | "shipment.updated"
        | "subscription.activated"
        | "subscription.canceled"
        | "subscription.cancellation_scheduled"
        | "subscription.created"
        | "subscription.cycle_skipped"
        | "subscription.delivery_action_required"
        | "subscription.delivery_pause_upcoming"
        | "subscription.delivery_updated"
        | "subscription.dunning_exhausted"
        | "subscription.past_due"
        | "subscription.paused"
        | "subscription.payment_succeeded"
        | "subscription.plan_changed"
        | "subscription.reactivated"
        | "subscription.renewal_upcoming"
        | "subscription.resumed"
        | "subscription.trial_ending"
        | "subscription.updated"
        | "subscription_delivery_migration.completed"
        | "subscription_payment_retry.created"
        | "subscription_payment_retry.failed"
        | "subscription_payment_retry.succeeded"
        | "tax_connection.updated"
        | (string & {});
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "occurred_at": string;
    /**
     * Shape $ (Value): string. Records created before server-minted request IDs keep their
     * original ID. maxLength: 128. Example: "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id"?: string;
    /** Shape $ (Value): string. */
    "resource_timeline_entry_id": string;
    /** Shape $ (Value): string. */
    "webhook_event_id": string;
};
/**
 * Shape $ (Value): {@link ResourceType}. Public resource type: the resource's ID field name
 * without `_id`. Clients must accept values added in future releases. Value enum: "api_key",
 * "api_request_log", "balance", "balance_transaction", "bundle", "bundle_component", "category",
 * "checkout_session", "checkout_session_customer_verification", "credit_note",
 * "credit_note_allocation", "custom_domain", "customer", "customer_address",
 * "customer_deletion_request", "customer_email_preferences", "customer_session",
 * "customer_verification", "delivery_location_set", "delivery_method", "delivery_profile",
 * "delivery_quote", "delivery_rate", "delivery_rate_callback", "delivery_revocation",
 * "delivery_selection", "delivery_zone", "demo_session", "device", "discount", "dispute",
 * "email_change_request", "environment_grant", "feedback_report", "file", "flint_wallet",
 * "flint_wallet_card", "fraud_warning", "fulfillment", "fulfillment_event",
 * "fulfillment_notification", "gift_card", "gift_card_funding_disposition", "gift_card_load",
 * "gift_card_notification", "gift_card_redemption", "gift_card_transaction", "image",
 * "inventory_adjustment", "inventory_allocation_policy", "inventory_allocation_policy_revision",
 * "inventory_count", "inventory_item", "inventory_level", "inventory_movement",
 * "inventory_receipt", "inventory_reservation", "inventory_reservation_line",
 * "inventory_transfer", "inventory_transfer_line", "invoice", "invoice_delivery_attempt",
 * "invoice_late_fee", "invoice_line_item", "invoice_manual_payment", "invoice_payment_attempt",
 * "invoice_payment_term", "location", "merchant", "merchant_billing_balance",
 * "merchant_billing_entry", "merchant_billing_invoice", "modifier", "modifier_group",
 * "modifier_set", "order", "order_charge", "order_line_item", "order_line_item_modifier",
 * "order_payment_attempt", "organization", "package", "package_item", "partner_app",
 * "partner_app_credential", "partner_app_install", "payment_intent", "payment_link",
 * "payment_link_custom_field", "payment_link_line_item", "payment_method",
 * "payment_method_domain", "payment_review", "payout", "payout_destination", "payout_settings",
 * "product", "product_option", "product_option_value", "product_variant", "promotion",
 * "promotion_code", "purchase_refund_allocation", "refund", "refund_allocation",
 * "refund_line_item_adjustment", "report", "report_download", "return", "return_activity",
 * "return_disposition", "return_inspection", "return_inspection_line_item", "return_line_item",
 * "return_policy", "return_policy_revision", "return_reason", "return_receipt",
 * "return_receipt_line_item", "return_resolution", "risk_list", "risk_list_item", "risk_rule",
 * "sandbox", "settings", "shipment", "subscription", "subscription_delivery_migration",
 * "subscription_line_item", "subscription_offer", "subscription_payment_retry",
 * "subscription_plan", "subscription_plan_line_item", "tax_connection", "tax_registration",
 * "user", "webhook_delivery", "webhook_endpoint", "webhook_event", "workload_identity".
 */
export type ResourceType = "api_key"
    | "api_request_log"
    | "balance"
    | "balance_transaction"
    | "bundle"
    | "bundle_component"
    | "category"
    | "checkout_session"
    | "checkout_session_customer_verification"
    | "credit_note"
    | "credit_note_allocation"
    | "custom_domain"
    | "customer"
    | "customer_address"
    | "customer_deletion_request"
    | "customer_email_preferences"
    | "customer_session"
    | "customer_verification"
    | "delivery_location_set"
    | "delivery_method"
    | "delivery_profile"
    | "delivery_quote"
    | "delivery_rate"
    | "delivery_rate_callback"
    | "delivery_revocation"
    | "delivery_selection"
    | "delivery_zone"
    | "demo_session"
    | "device"
    | "discount"
    | "dispute"
    | "email_change_request"
    | "environment_grant"
    | "feedback_report"
    | "file"
    | "flint_wallet"
    | "flint_wallet_card"
    | "fraud_warning"
    | "fulfillment"
    | "fulfillment_event"
    | "fulfillment_notification"
    | "gift_card"
    | "gift_card_funding_disposition"
    | "gift_card_load"
    | "gift_card_notification"
    | "gift_card_redemption"
    | "gift_card_transaction"
    | "image"
    | "inventory_adjustment"
    | "inventory_allocation_policy"
    | "inventory_allocation_policy_revision"
    | "inventory_count"
    | "inventory_item"
    | "inventory_level"
    | "inventory_movement"
    | "inventory_receipt"
    | "inventory_reservation"
    | "inventory_reservation_line"
    | "inventory_transfer"
    | "inventory_transfer_line"
    | "invoice"
    | "invoice_delivery_attempt"
    | "invoice_late_fee"
    | "invoice_line_item"
    | "invoice_manual_payment"
    | "invoice_payment_attempt"
    | "invoice_payment_term"
    | "location"
    | "merchant"
    | "merchant_billing_balance"
    | "merchant_billing_entry"
    | "merchant_billing_invoice"
    | "modifier"
    | "modifier_group"
    | "modifier_set"
    | "order"
    | "order_charge"
    | "order_line_item"
    | "order_line_item_modifier"
    | "order_payment_attempt"
    | "organization"
    | "package"
    | "package_item"
    | "partner_app"
    | "partner_app_credential"
    | "partner_app_install"
    | "payment_intent"
    | "payment_link"
    | "payment_link_custom_field"
    | "payment_link_line_item"
    | "payment_method"
    | "payment_method_domain"
    | "payment_review"
    | "payout"
    | "payout_destination"
    | "payout_settings"
    | "product"
    | "product_option"
    | "product_option_value"
    | "product_variant"
    | "promotion"
    | "promotion_code"
    | "purchase_refund_allocation"
    | "refund"
    | "refund_allocation"
    | "refund_line_item_adjustment"
    | "report"
    | "report_download"
    | "return"
    | "return_activity"
    | "return_disposition"
    | "return_inspection"
    | "return_inspection_line_item"
    | "return_line_item"
    | "return_policy"
    | "return_policy_revision"
    | "return_reason"
    | "return_receipt"
    | "return_receipt_line_item"
    | "return_resolution"
    | "risk_list"
    | "risk_list_item"
    | "risk_rule"
    | "sandbox"
    | "settings"
    | "shipment"
    | "subscription"
    | "subscription_delivery_migration"
    | "subscription_line_item"
    | "subscription_offer"
    | "subscription_payment_retry"
    | "subscription_plan"
    | "subscription_plan_line_item"
    | "tax_connection"
    | "tax_registration"
    | "user"
    | "webhook_delivery"
    | "webhook_endpoint"
    | "webhook_event"
    | "workload_identity"
    | (string & {});
/**
 * Shape $ (Value): {@link ResourceVersionRequestInput}. The request body for: Mark invoice
 * uncollectible; Regenerate invoice public link; Resume one of the current buyer's subscriptions;
 * Resume subscription; Reverse credit note allocation; Void credit note; Void invoice.
 */
export type ResourceVersionRequestInput = ConfirmReturnResolutionRequestInput;
/**
 * Shape $ (Value): {@link ResponseMeta}. Metadata returned with a response: the `api_version`,
 * `trace_id`, whether an idempotent request was replayed, and any warnings.
 */
export type ResponseMeta = {
    /** Shape $ (Value): string. API version used to produce this response. */
    "api_version"?: string;
    /**
     * Shape $ (Value): boolean. Whether this response replays a stored result for the supplied
     * Idempotency-Key.
     */
    "idempotency_replayed"?: boolean;
    /**
     * Shape $ (Value): string. Trace identifier to include when contacting Flint about this
     * request.
     */
    "trace_id"?: string;
    /**
     * Shape $ (Value): Array of {@link ResponseWarning}. Conditions that need attention even
     * though the request succeeded. Shape $[] (Value): {@link ResponseWarning}. A non-blocking
     * condition reported with a response. The `code` identifies the condition and `severity` says
     * how urgent it is.
     */
    "warnings"?: Array<ResponseWarning>;
};
