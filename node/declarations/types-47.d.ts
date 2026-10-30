import type { PartnerWebhookEnvelope } from './types-40.js';
import type { Refund, PublicDownload } from './types-46.js';
import type { MerchantWebhookEnvelope } from './types-34.js';
import type { MoneyValue, MoneyValueInput } from './types-35.js';
import type { OrderGiftCardAllocation } from './types-36.js';
import type { CreateRefundRequestInput, CreateReportRequestInput } from './types-10.js';
import type { InputValue, RequestOptions as RuntimeRequestOptions, CredentialProvider } from '../runtime.js';
import type { UpdateRefundRequestInput } from './types-59.js';
import type { GetReturnResolutionResponse, GetReturnResponse } from './types-23.js';
import type { ConfigurationVersionRequestInput, CheckoutSessionWithSecret } from './types-5.js';
import type { ResponseMeta, ResourceType } from './types-48.js';
import type { AuthMode } from './types-0.js';
import type { Credentials } from './types-12.js';
import type { CreateDemoSessionRequestInput } from './types-7.js';
import type { TextModifierRequest } from './types-57.js';
/**
 * The `refund.succeeded` webhook payload for the `installed_merchants` event source. Fields shared
 * by partner webhook payloads.
 */
export type RefundSucceededInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link Refund}. Money returned against a collected payment. */
    "data"?: {
        /** Money returned against a collected payment. */
        "object": Refund;
    };
    /** Value enum: "refund.succeeded". */
    "event_type"?: "refund.succeeded";
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
 * The `refund.succeeded` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type RefundSucceededMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link Refund}. Money returned against a collected payment. */
    "data"?: {
        /** Money returned against a collected payment. */
        "object": Refund;
    };
    /** Value enum: "refund.succeeded". */
    "event_type"?: "refund.succeeded";
});
/** The tax refunded for one tax breakdown on an order. */
export type RefundTaxBreakdownRefund = {
    "order_charge_id"?: string;
    "tax_breakdown_id": string;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "tax_money": MoneyValue;
};
/**
 * The tax to refund for one tax breakdown, identified by `tax_breakdown_id`, when setting tax
 * refunds explicitly.
 */
export type RefundTaxBreakdownRefundIn = {
    /** minLength: 1. */
    "tax_breakdown_id": string;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "tax_money"?: MoneyValue;
};
/**
 * The tax to refund for one tax breakdown, identified by `tax_breakdown_id`, when setting tax
 * refunds explicitly.
 */
export type RefundTaxBreakdownRefundInInput = {
    /** minLength: 1. */
    "tax_breakdown_id": string;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "tax_money"?: MoneyValueInput;
};
/** One tender's share of a refund, listed in the refund's tender allocations. */
export type RefundTenderAllocation = {
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "amount_money": MoneyValue;
    /**
     * Where this allocation is refunded. original returns value to the tender that paid;
     * new_gift_card issues new Flint gift cards. Payment intent store credit requires a succeeded
     * USD card, Apple Pay, Google Pay, or Link payment that belongs to an order, with no open
     * chargeback. Affirm, ACH debit, other payment options, non-USD payments, and payments without
     * an order return INVALID_REQUEST with a NOT_ALLOWED detail. Payment chargebacks use the
     * existing dispute refusal. Gift card redemption destinations are unaffected by the payment
     * restrictions. Default: "original". Value enum: "original", "new_gift_card".
     */
    "destination"?: "original" | "new_gift_card" | (string & {});
    /**
     *  [] (Value): {@link OrderGiftCardAllocation}. A gift card that received part of a refund,
     * with the amount credited.
     */
    "destination_cards"?: Array<OrderGiftCardAllocation>;
    /**
     * Why a refund failed or a payment refund was canceled. Failed and canceled amounts become
     * refundable again. Fix the cause, then create a new refund with a new idempotency key.
     * Unknown provider values are returned as refund_failed. Value enum:
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
    "gift_card_id"?: string;
    "gift_card_redemption_id"?: string;
    "payment_intent_id"?: string;
    "refund_allocation_id": string;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "refunded_tip_money": MoneyValue;
    /**
     * Status of this payment refund or tender allocation. A succeeded refund can still fail after
     * a bank rejection. Parent status transitions send refund.succeeded,
     * refund.partially_succeeded, or refund.failed; other public changes send refund.updated.
     * Value enum: "pending", "requires_action", "succeeded", "failed", "canceled".
     */
    "status": "pending" | "requires_action" | "succeeded" | "failed" | "canceled" | (string & {});
    /** Value enum: "payment_intent", "gift_card_redemption". */
    "tender_type": "payment_intent" | "gift_card_redemption" | (string & {});
};
/** The `gift_card_redemption` variant of `RefundTenderAllocationInput`. */
export type RefundTenderAllocationInputGiftCardRedemption = ({
    /**
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code. amount
     * (Required): integer string. Use an integer string (decimal digits), not a floating-point
     * number. Format: int64. minimum: 1. Amount in the currency's minor unit, such as cents for
     * USD. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * minimum: 0. currency (Required): string. ISO 4217 currency code for this amount. minLength:
     * 3. maxLength: 3. pattern: ^[A-Z]{3}$.
     */
    "amount_money": ({
        /**
         * Use an integer string (decimal digits), not a floating-point number. Format: int64.
         * minimum: 1.
         */
        "amount"?: `${bigint}`;
    })
        & (Exclude<MoneyValue & object, readonly unknown[]>);
    /**
     * Where this allocation is refunded. original returns value to the tender that paid;
     * new_gift_card issues new Flint gift cards. Payment intent store credit requires a succeeded
     * USD card, Apple Pay, Google Pay, or Link payment that belongs to an order, with no open
     * chargeback. Affirm, ACH debit, other payment options, non-USD payments, and payments without
     * an order return INVALID_REQUEST with a NOT_ALLOWED detail. Payment chargebacks use the
     * existing dispute refusal. Gift card redemption destinations are unaffected by the payment
     * restrictions. Default: "original". Value enum: "original", "new_gift_card".
     */
    "destination"?: "original" | "new_gift_card" | (string & {});
    /**
     * The captured redemption to refund. Required for tender_type gift_card_redemption. minLength:
     * 1. pattern: ^gcr_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "gift_card_redemption_id": string;
    /**
     * The succeeded payment intent to refund. Required for tender_type payment_intent. minLength:
     * 1. pattern: ^pi_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "payment_intent_id"?: string;
    /** Value enum: "gift_card_redemption". */
    "tender_type": "gift_card_redemption" | (string & {});
})
    & (({
    /**  currency (Optional): any.  Value enum: "USD". */
    "amount_money"?: null
        | boolean
        | number
        | string
        | unknown[]
        | ({
        /** Value enum: "USD". */
        "currency"?: unknown;
    });
    /** Value enum: "gift_card_redemption". */
    "tender_type"?: unknown;
    /**
     * The captured redemption to refund. Required for tender_type gift_card_redemption. minLength:
     * 1. pattern: ^gcr_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "gift_card_redemption_id": string;
}));
/** The `gift_card_redemption` variant of `RefundTenderAllocationInput`. */
export type RefundTenderAllocationInputGiftCardRedemptionInput = ({
    /**
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code. amount
     * (Required): integer string. Use an integer string (decimal digits), not a floating-point
     * number. Format: int64. minimum: 1. Amount in the currency's minor unit, such as cents for
     * USD. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * minimum: 0. currency (Required): string. ISO 4217 currency code for this amount. minLength:
     * 3. maxLength: 3. pattern: ^[A-Z]{3}$.
     */
    "amount_money": ({
        /**
         * Use an integer string (decimal digits), not a floating-point number. Format: int64.
         * minimum: 1.
         */
        "amount"?: `${bigint}` | bigint;
    })
        & (Exclude<MoneyValueInput & object, readonly unknown[]>);
    /**
     * Where this allocation is refunded. original returns value to the tender that paid;
     * new_gift_card issues new Flint gift cards. Payment intent store credit requires a succeeded
     * USD card, Apple Pay, Google Pay, or Link payment that belongs to an order, with no open
     * chargeback. Affirm, ACH debit, other payment options, non-USD payments, and payments without
     * an order return INVALID_REQUEST with a NOT_ALLOWED detail. Payment chargebacks use the
     * existing dispute refusal. Gift card redemption destinations are unaffected by the payment
     * restrictions. Default: "original". Value enum: "original", "new_gift_card".
     */
    "destination"?: "original" | "new_gift_card";
    /**
     * The captured redemption to refund. Required for tender_type gift_card_redemption. minLength:
     * 1. pattern: ^gcr_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "gift_card_redemption_id": string;
    /**
     * The succeeded payment intent to refund. Required for tender_type payment_intent. minLength:
     * 1. pattern: ^pi_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "payment_intent_id"?: string;
    /** Value enum: "gift_card_redemption". */
    "tender_type": "gift_card_redemption";
})
    & (({
    /**  currency (Optional): any.  Value enum: "USD". */
    "amount_money"?: null
        | boolean
        | number
        | string
        | unknown[]
        | ({
        /** Value enum: "USD". */
        "currency"?: ("USD") & ("USD");
    });
    /** Value enum: "gift_card_redemption". */
    "tender_type"?: ("gift_card_redemption") & ("gift_card_redemption");
    /**
     * The captured redemption to refund. Required for tender_type gift_card_redemption. minLength:
     * 1. pattern: ^gcr_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "gift_card_redemption_id": string;
})
    & ({
    "payment_intent_id"?: never;
}));
/** The `payment_intent` variant of `RefundTenderAllocationInput`. */
export type RefundTenderAllocationInputPaymentIntent = ({
    /**
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code. amount
     * (Required): integer string. Use an integer string (decimal digits), not a floating-point
     * number. Format: int64. minimum: 1. Amount in the currency's minor unit, such as cents for
     * USD. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * minimum: 0. currency (Required): string. ISO 4217 currency code for this amount. minLength:
     * 3. maxLength: 3. pattern: ^[A-Z]{3}$.
     */
    "amount_money": ({
        /**
         * Use an integer string (decimal digits), not a floating-point number. Format: int64.
         * minimum: 1.
         */
        "amount"?: `${bigint}`;
    })
        & (Exclude<MoneyValue & object, readonly unknown[]>);
    /**
     * Where this allocation is refunded. original returns value to the tender that paid;
     * new_gift_card issues new Flint gift cards. Payment intent store credit requires a succeeded
     * USD card, Apple Pay, Google Pay, or Link payment that belongs to an order, with no open
     * chargeback. Affirm, ACH debit, other payment options, non-USD payments, and payments without
     * an order return INVALID_REQUEST with a NOT_ALLOWED detail. Payment chargebacks use the
     * existing dispute refusal. Gift card redemption destinations are unaffected by the payment
     * restrictions. Default: "original". Value enum: "original", "new_gift_card".
     */
    "destination"?: "original" | "new_gift_card" | (string & {});
    /**
     * The captured redemption to refund. Required for tender_type gift_card_redemption. minLength:
     * 1. pattern: ^gcr_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "gift_card_redemption_id"?: string;
    /**
     * The succeeded payment intent to refund. Required for tender_type payment_intent. minLength:
     * 1. pattern: ^pi_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "payment_intent_id": string;
    /** Value enum: "payment_intent". */
    "tender_type": "payment_intent" | (string & {});
})
    & (({
    /** Value enum: "payment_intent". */
    "tender_type"?: unknown;
    /**
     * The succeeded payment intent to refund. Required for tender_type payment_intent. minLength:
     * 1. pattern: ^pi_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "payment_intent_id": string;
}));
/** The `payment_intent` variant of `RefundTenderAllocationInput`. */
export type RefundTenderAllocationInputPaymentIntentInput = ({
    /**
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code. amount
     * (Required): integer string. Use an integer string (decimal digits), not a floating-point
     * number. Format: int64. minimum: 1. Amount in the currency's minor unit, such as cents for
     * USD. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * minimum: 0. currency (Required): string. ISO 4217 currency code for this amount. minLength:
     * 3. maxLength: 3. pattern: ^[A-Z]{3}$.
     */
    "amount_money": ({
        /**
         * Use an integer string (decimal digits), not a floating-point number. Format: int64.
         * minimum: 1.
         */
        "amount"?: `${bigint}` | bigint;
    })
        & (Exclude<MoneyValueInput & object, readonly unknown[]>);
    /**
     * Where this allocation is refunded. original returns value to the tender that paid;
     * new_gift_card issues new Flint gift cards. Payment intent store credit requires a succeeded
     * USD card, Apple Pay, Google Pay, or Link payment that belongs to an order, with no open
     * chargeback. Affirm, ACH debit, other payment options, non-USD payments, and payments without
     * an order return INVALID_REQUEST with a NOT_ALLOWED detail. Payment chargebacks use the
     * existing dispute refusal. Gift card redemption destinations are unaffected by the payment
     * restrictions. Default: "original". Value enum: "original", "new_gift_card".
     */
    "destination"?: "original" | "new_gift_card";
    /**
     * The captured redemption to refund. Required for tender_type gift_card_redemption. minLength:
     * 1. pattern: ^gcr_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "gift_card_redemption_id"?: string;
    /**
     * The succeeded payment intent to refund. Required for tender_type payment_intent. minLength:
     * 1. pattern: ^pi_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "payment_intent_id": string;
    /** Value enum: "payment_intent". */
    "tender_type": "payment_intent";
})
    & (({
    /** Value enum: "payment_intent". */
    "tender_type"?: ("payment_intent") & ("payment_intent");
    /**
     * The succeeded payment intent to refund. Required for tender_type payment_intent. minLength:
     * 1. pattern: ^pi_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "payment_intent_id": string;
})
    & ({
    "gift_card_redemption_id"?: never;
}));
/**
 * Where part of a refund goes: back to a payment intent or to a gift card redemption, with the
 * amount.
 */
export type RefundTenderAllocationRequest = ({
    /**
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code. amount
     * (Required): integer string. Use an integer string (decimal digits), not a floating-point
     * number. Format: int64. minimum: 1. Amount in the currency's minor unit, such as cents for
     * USD. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * minimum: 0. currency (Required): string. ISO 4217 currency code for this amount. minLength:
     * 3. maxLength: 3. pattern: ^[A-Z]{3}$.
     */
    "amount_money": ({
        /**
         * Use an integer string (decimal digits), not a floating-point number. Format: int64.
         * minimum: 1.
         */
        "amount"?: `${bigint}`;
    })
        & (Exclude<MoneyValue & object, readonly unknown[]>);
    /**
     * Where this allocation is refunded. original returns value to the tender that paid;
     * new_gift_card issues new Flint gift cards. Payment intent store credit requires a succeeded
     * USD card, Apple Pay, Google Pay, or Link payment that belongs to an order, with no open
     * chargeback. Affirm, ACH debit, other payment options, non-USD payments, and payments without
     * an order return INVALID_REQUEST with a NOT_ALLOWED detail. Payment chargebacks use the
     * existing dispute refusal. Gift card redemption destinations are unaffected by the payment
     * restrictions. Default: "original". Value enum: "original", "new_gift_card".
     */
    "destination"?: "original" | "new_gift_card" | (string & {});
    /**
     * The captured redemption to refund. Required for tender_type gift_card_redemption. minLength:
     * 1. pattern: ^gcr_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "gift_card_redemption_id"?: string;
    /**
     * The succeeded payment intent to refund. Required for tender_type payment_intent. minLength:
     * 1. pattern: ^pi_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "payment_intent_id"?: string;
    /** Value enum: "payment_intent", "gift_card_redemption". */
    "tender_type": "payment_intent" | "gift_card_redemption" | (string & {});
})
    & ((Exclude<RefundTenderAllocationInputPaymentIntent & object, readonly unknown[]>)
    | (Exclude<RefundTenderAllocationInputGiftCardRedemption & object, readonly unknown[]>)
    | (Record<string, unknown>));
/**
 * Where part of a refund goes: back to a payment intent or to a gift card redemption, with the
 * amount.
 */
export type RefundTenderAllocationRequestInput = ({
    /**
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code. amount
     * (Required): integer string. Use an integer string (decimal digits), not a floating-point
     * number. Format: int64. minimum: 1. Amount in the currency's minor unit, such as cents for
     * USD. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * minimum: 0. currency (Required): string. ISO 4217 currency code for this amount. minLength:
     * 3. maxLength: 3. pattern: ^[A-Z]{3}$.
     */
    "amount_money": ({
        /**
         * Use an integer string (decimal digits), not a floating-point number. Format: int64.
         * minimum: 1.
         */
        "amount"?: `${bigint}` | bigint;
    })
        & (Exclude<MoneyValueInput & object, readonly unknown[]>);
    /**
     * Where this allocation is refunded. original returns value to the tender that paid;
     * new_gift_card issues new Flint gift cards. Payment intent store credit requires a succeeded
     * USD card, Apple Pay, Google Pay, or Link payment that belongs to an order, with no open
     * chargeback. Affirm, ACH debit, other payment options, non-USD payments, and payments without
     * an order return INVALID_REQUEST with a NOT_ALLOWED detail. Payment chargebacks use the
     * existing dispute refusal. Gift card redemption destinations are unaffected by the payment
     * restrictions. Default: "original". Value enum: "original", "new_gift_card".
     */
    "destination"?: "original" | "new_gift_card";
    /**
     * The captured redemption to refund. Required for tender_type gift_card_redemption. minLength:
     * 1. pattern: ^gcr_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "gift_card_redemption_id"?: string;
    /**
     * The succeeded payment intent to refund. Required for tender_type payment_intent. minLength:
     * 1. pattern: ^pi_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "payment_intent_id"?: string;
    /** Value enum: "payment_intent", "gift_card_redemption". */
    "tender_type": "payment_intent" | "gift_card_redemption";
})
    & ((Exclude<RefundTenderAllocationInputPaymentIntentInput & object, readonly unknown[]>)
    | (Exclude<RefundTenderAllocationInputGiftCardRedemptionInput & object, readonly unknown[]>));
/**
 * Details of a gift card purchase refunded before the card was issued, including the amounts
 * recovered.
 */
export type RefundUnissuedGiftCardRecovery = {
    "order_id": string;
    "order_line_item_id": string;
    "payment_intent_id": string;
    "purchase_refund_allocation_id": string;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "returned_amount_money": MoneyValue;
    "settlement_allocation_id": string;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "source_pending_amount_money": MoneyValue;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "source_remaining_amount_money": MoneyValue;
};
export type RefundUpdatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Refund;
    };
    "event_type"?: "refund.updated";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Refund;
    };
    "event_type"?: "refund.updated";
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
    "event_type": "refund.updated";
});
/**
 * The `refund.updated` webhook payload for the `installed_merchants` event source. Fields shared
 * by partner webhook payloads.
 */
export type RefundUpdatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link Refund}. Money returned against a collected payment. */
    "data"?: {
        /** Money returned against a collected payment. */
        "object": Refund;
    };
    /** Value enum: "refund.updated". */
    "event_type"?: "refund.updated";
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
 * The `refund.updated` webhook payload for the `merchant` event source. Fields shared by merchant
 * webhook payloads.
 */
export type RefundUpdatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link Refund}. Money returned against a collected payment. */
    "data"?: {
        /** Money returned against a collected payment. */
        "object": Refund;
    };
    /** Value enum: "refund.updated". */
    "event_type"?: "refund.updated";
});
export type RefundsCreateParams = (CreateRefundRequestInput);
export type RefundsGetParams = {
    /**
     * Supported expansions: customer, order, payment_intent, payment_refunds.payment_intent.
     * Expansion requires commerce.refunds.read plus the read scope for each expanded resource.
     * Limits: at most 10 unique expand paths per request. To-many expansions are capped at 20
     * related objects per path. Repeat expand, for example expand=customer&expand=order, or pass
     * one comma-separated value. [] enum: "customer", "order", "payment_intent",
     * "payment_refunds.payment_intent". Value enum: "customer", "order", "payment_intent",
     * "payment_refunds.payment_intent". anyOf[1] (Value): Array of string. [] enum: "customer",
     * "order", "payment_intent", "payment_refunds.payment_intent". anyOf[1][] (Value): string.
     * Value enum: "customer", "order", "payment_intent", "payment_refunds.payment_intent".
     * anyOf[2] (Value): string. Value enum: "customer", "order", "payment_intent",
     * "payment_refunds.payment_intent".
     */
    "expand"?: InputValue<("customer" | "order" | "payment_intent" | "payment_refunds.payment_intent")
        | readonly ("customer" | "order" | "payment_intent" | "payment_refunds.payment_intent")[]>;
};
export type RefundsListParams = {
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
     * Opaque next_page_token from the previous response. Omit on the first request. You may change
     * `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request
     * context. Do not parse or construct tokens. An invalid, expired, or mismatched token returns
     * a validation error.
     */
    "page_token"?: InputValue<string>;
    /** Filter by order ID. Example: "ord_01ARZ3NDEKTSV4RRFFQ69G5FAV". */
    "order_id"?: InputValue<string>;
    /** Filter by payment intent ID. Example: "pi_01ARZ3NDEKTSV4RRFFQ69G5FAV". */
    "payment_intent_id"?: InputValue<string>;
    /** Filter by customer ID. Example: "cus_01ARZ3NDEKTSV4RRFFQ69G5FAV". */
    "customer_id"?: InputValue<string>;
    /**
     * Filter by refund status. Accepts repeated keys, comma-separated values, or mixtures. Values
     * are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected.
     * Values within this filter are ORed; separate filters are ANDed. [] enum: "pending",
     * "succeeded", "partially_succeeded", "failed". Value enum: "pending", "succeeded",
     * "partially_succeeded", "failed". anyOf[1] (Value): Array of string. minItems: 1. [] enum:
     * "pending", "succeeded", "partially_succeeded", "failed". anyOf[1][] (Value): string. Value
     * enum: "pending", "succeeded", "partially_succeeded", "failed". anyOf[2] (Value): string.
     * Value enum: "pending", "succeeded", "partially_succeeded", "failed".
     */
    "status"?: InputValue<("pending" | "succeeded" | "partially_succeeded" | "failed")
        | readonly ("pending" | "succeeded" | "partially_succeeded" | "failed")[]>;
    /**
     * Filter by refund reasons. Accepts comma-separated values or repeated parameters; empty
     * entries are rejected. Accepts repeated keys, comma-separated values, or mixtures. Values are
     * trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values
     * within this filter are ORed; separate filters are ANDed. [] enum: "duplicate", "fraudulent",
     * "requested_by_customer", "defective_product", "wrong_item_shipped", "never_received",
     * "not_as_described", "arrived_too_late", "customer_changed_mind", "better_price_found",
     * "accidental_order", "other". Value enum: "duplicate", "fraudulent", "requested_by_customer",
     * "defective_product", "wrong_item_shipped", "never_received", "not_as_described",
     * "arrived_too_late", "customer_changed_mind", "better_price_found", "accidental_order",
     * "other". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "duplicate", "fraudulent",
     * "requested_by_customer", "defective_product", "wrong_item_shipped", "never_received",
     * "not_as_described", "arrived_too_late", "customer_changed_mind", "better_price_found",
     * "accidental_order", "other". anyOf[1][] (Value): string. Value enum: "duplicate",
     * "fraudulent", "requested_by_customer", "defective_product", "wrong_item_shipped",
     * "never_received", "not_as_described", "arrived_too_late", "customer_changed_mind",
     * "better_price_found", "accidental_order", "other". anyOf[2] (Value): string. Value enum:
     * "duplicate", "fraudulent", "requested_by_customer", "defective_product",
     * "wrong_item_shipped", "never_received", "not_as_described", "arrived_too_late",
     * "customer_changed_mind", "better_price_found", "accidental_order", "other".
     */
    "reason"?: InputValue<("duplicate"
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
        | "other")
        | readonly ("duplicate"
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
        | "other")[]>;
    /**
     * Inclusive lower bound on amount_money.amount. Requires currency. Format: int64. minimum: 1.
     * Example: 500.
     */
    "min_amount"?: InputValue<number>;
    /**
     * Inclusive upper bound on amount_money.amount. Requires currency. Format: int64. minimum: 1.
     * Example: 500.
     */
    "max_amount"?: InputValue<number>;
    /** ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD". */
    "currency"?: InputValue<string>;
    /**
     * Exact-match filter on the caller-owned external reference ID. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: InputValue<string>;
    /** Filter by linked Return ID. Example: "ret_01ARZ3NDEKTSV4RRFFQ69G5FAV". */
    "return_id"?: InputValue<string>;
    /** Filter by linked ReturnResolution ID. Example: "retres_01ARZ3NDEKTSV4RRFFQ69G5FAV". */
    "return_resolution_id"?: InputValue<string>;
    /**
     * Search across refund_id, external_reference_id, and reason_message. Text fields match any
     * part of the value, and %, _ and \ are ordinary characters, not wildcards. IDs match from the
     * start and need the type prefix, such as ord_01.
     */
    "query"?: InputValue<string>;
    /**
     * Field to sort by. Defaults to created_at; ties are broken by refund_id. Default:
     * "created_at". Value enum: "created_at", "updated_at", "amount_money".
     */
    "sort_by"?: InputValue<"created_at" | "updated_at" | "amount_money">;
    /** Sort direction. Defaults to desc. Default: "desc". Value enum: "asc", "desc". */
    "sort_direction"?: InputValue<"asc" | "desc">;
    /** Inclusive lower bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
    /** Inclusive lower bound on updated_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on updated_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_before"?: InputValue<string | globalThis.Date>;
    /**
     * Supported expansions: customer, order, payment_intent. Include the requested related
     * resources using scoped batch reads for this page. Each relationship requires its existing
     * target read scopes. Expansion changes the representation without changing pagination tokens.
     * Limits: at most 10 unique expand paths per request. Repeat expand, for example
     * expand=customer&expand=order, or pass one comma-separated value. [] enum: "customer",
     * "order", "payment_intent". Value enum: "customer", "order", "payment_intent". anyOf[1]
     * (Value): Array of string. [] enum: "customer", "order", "payment_intent". anyOf[1][]
     * (Value): string. Value enum: "customer", "order", "payment_intent". anyOf[2] (Value):
     * string. Value enum: "customer", "order", "payment_intent".
     */
    "expand"?: InputValue<("customer" | "order" | "payment_intent") | readonly ("customer" | "order" | "payment_intent")[]>;
};
export type RefundsUpdateParams = (InputValue<UpdateRefundRequestInput>);
/** The request body for: Release return resolution. */
export type ReleaseReturnResolutionRequest = {
    /** Format: int64. minimum: 1. */
    "expected_version"?: number;
    /** Value enum: "merchant_approved", "exception_resolved", "other". */
    "reason": "merchant_approved" | "exception_resolved" | "other" | (string & {});
    /** minLength: 1. */
    "reason_message"?: string;
};
/** The request body for: Release return resolution. */
export type ReleaseReturnResolutionRequestInput = {
    /** Format: int64. minimum: 1. */
    "expected_version"?: number;
    /** Value enum: "merchant_approved", "exception_resolved", "other". */
    "reason": "merchant_approved" | "exception_resolved" | "other";
    /** minLength: 1. */
    "reason_message"?: string;
};
export type ReleaseReturnResolutionResponse = GetReturnResolutionResponse;
/** The request body for: Remove discounts. */
export type RemoveDiscountsRequest = {
    /**
     * Optional order version from the last order read. The mutation fails if the order changed.
     * Format: int64. minimum: 1.
     */
    "expected_version"?: number;
    /**  [] (Value): string. minLength: 1. */
    "order_discount_ids": Array<string>;
};
/** The request body for: Remove discounts. */
export type RemoveDiscountsRequestInput = RemoveDiscountsRequest;
/** The request body for: Renew subscription now. */
export type RenewSubscriptionRequestInput = ConfigurationVersionRequestInput;
/** The request body for: Reopen return. */
export type ReopenReturnRequest = {
    /** Format: int64. minimum: 1. */
    "expected_version"?: number;
    /**
     * Value enum: "linked_effect_changed", "correction_required",
     * "additional_merchandise_received", "merchant_request", "other".
     */
    "reason": "linked_effect_changed"
        | "correction_required"
        | "additional_merchandise_received"
        | "merchant_request"
        | "other"
        | (string & {});
    /** minLength: 1. */
    "reason_message"?: string;
};
/** The request body for: Reopen return. */
export type ReopenReturnRequestInput = {
    /** Format: int64. minimum: 1. */
    "expected_version"?: number;
    /**
     * Value enum: "linked_effect_changed", "correction_required",
     * "additional_merchandise_received", "merchant_request", "other".
     */
    "reason": "linked_effect_changed"
        | "correction_required"
        | "additional_merchandise_received"
        | "merchant_request"
        | "other";
    /** minLength: 1. */
    "reason_message"?: string;
};
export type ReopenReturnResponse = GetReturnResponse;
/** A report generated from the merchant's activity. */
export type Report = ({
    /** When the report was requested. Format: date-time. */
    "created_at": string;
    /**
     * Currency the report covers. A report never combines currencies. minLength: 3. maxLength: 3.
     * pattern: ^[A-Z]{3}$. Example: "USD".
     */
    "currency": string;
    /**
     * Link to download the generated report. Present only when status is succeeded. A temporary
     * link for downloading a generated report.
     */
    "download"?: PublicDownload;
    /**
     * Why the report failed. Present only when status is failed: limit_exceeded when the report
     * hit a size or time limit, data_unavailable when data it needs wasn't available yet, and
     * generation_failed for other errors. Treat an unknown value like generation_failed. Value
     * enum: "generation_failed", "data_unavailable", "limit_exceeded".
     */
    "failure_reason"?: "generation_failed" | "data_unavailable" | "limit_exceeded" | (string & {});
    /**
     * Exclusive interval end instant. Each report type matches its own occurrence time. Format:
     * date-time.
     */
    "interval_end_at": string;
    /**
     * Inclusive interval start instant. Each report type matches its own occurrence time. Format:
     * date-time.
     */
    "interval_start_at": string;
    /** Stable identifier of the report. pattern: ^rep_[0-9A-HJKMNP-TV-Z]{26}$. */
    "report_id": string;
    /**
     * The report's type and column version. See the Reports guide for its columns. Value enum:
     * "gift_card_liability_v1", "orders_itemized_v1", "orders_itemized_v2",
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
     * pending while Flint generates the report, then succeeded with a download or failed with a
     * failure_reason. Flint sends report.succeeded or report.failed when it finishes. Value enum:
     * "pending", "succeeded", "failed".
     */
    "status": "pending" | "succeeded" | "failed" | (string & {});
    /**
     * IANA timezone used for timestamps and date bucketing. A payout occurs at the start of its
     * arrival_date in this timezone.
     */
    "timezone": string;
})
    & ((Exclude<ReportPending & object, readonly unknown[]>)
    | (Exclude<ReportSucceeded & object, readonly unknown[]>)
    | (Exclude<ReportFailed & object, readonly unknown[]>)
    | (Record<string, unknown>));
export type ReportDownloadsGetParams = {};
export type ReportDownloadsGetResponse = {
    location?: string;
};
/** A report generated from the merchant's activity. */
export type ReportFailed = ({
    /** When the report was requested. Format: date-time. */
    "created_at": string;
    /**
     * Currency the report covers. A report never combines currencies. minLength: 3. maxLength: 3.
     * pattern: ^[A-Z]{3}$. Example: "USD".
     */
    "currency": string;
    /**
     * Link to download the generated report. Present only when status is succeeded. A temporary
     * link for downloading a generated report.
     */
    "download"?: PublicDownload;
    /**
     * Why the report failed. Present only when status is failed: limit_exceeded when the report
     * hit a size or time limit, data_unavailable when data it needs wasn't available yet, and
     * generation_failed for other errors. Treat an unknown value like generation_failed. Value
     * enum: "generation_failed", "data_unavailable", "limit_exceeded".
     */
    "failure_reason": "generation_failed" | "data_unavailable" | "limit_exceeded" | (string & {});
    /**
     * Exclusive interval end instant. Each report type matches its own occurrence time. Format:
     * date-time.
     */
    "interval_end_at": string;
    /**
     * Inclusive interval start instant. Each report type matches its own occurrence time. Format:
     * date-time.
     */
    "interval_start_at": string;
    /** Stable identifier of the report. pattern: ^rep_[0-9A-HJKMNP-TV-Z]{26}$. */
    "report_id": string;
    /**
     * The report's type and column version. See the Reports guide for its columns. Value enum:
     * "gift_card_liability_v1", "orders_itemized_v1", "orders_itemized_v2",
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
     * pending while Flint generates the report, then succeeded with a download or failed with a
     * failure_reason. Flint sends report.succeeded or report.failed when it finishes. Value enum:
     * "failed".
     */
    "status": "failed" | (string & {});
    /**
     * IANA timezone used for timestamps and date bucketing. A payout occurs at the start of its
     * arrival_date in this timezone.
     */
    "timezone": string;
})
    & (({
    /** Value enum: "failed". */
    "status"?: "failed" | (string & {});
    /**
     * Why the report failed. Present only when status is failed: limit_exceeded when the report
     * hit a size or time limit, data_unavailable when data it needs wasn't available yet, and
     * generation_failed for other errors. Treat an unknown value like generation_failed. Value
     * enum: "generation_failed", "data_unavailable", "limit_exceeded".
     */
    "failure_reason": "generation_failed" | "data_unavailable" | "limit_exceeded" | (string & {});
}));
export type ReportFailedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Report;
    };
    "event_type"?: "report.failed";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Report;
    };
    "event_type"?: "report.failed";
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
    "event_type": "report.failed";
});
/**
 * The `report.failed` webhook payload for the `installed_merchants` event source. Fields shared by
 * partner webhook payloads.
 */
export type ReportFailedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link Report}. A report generated from the merchant's activity. */
    "data"?: {
        /** A report generated from the merchant's activity. */
        "object": Report;
    };
    /** Value enum: "report.failed". */
    "event_type"?: "report.failed";
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
 * The `report.failed` webhook payload for the `merchant` event source. Fields shared by merchant
 * webhook payloads.
 */
export type ReportFailedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link Report}. A report generated from the merchant's activity. */
    "data"?: {
        /** A report generated from the merchant's activity. */
        "object": Report;
    };
    /** Value enum: "report.failed". */
    "event_type"?: "report.failed";
});
/** A page of `Report` objects. */
export type ReportListResponse = {
    /**  [] (Value): {@link Report}. A report generated from the merchant's activity. */
    "data": Array<Report>;
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
/** A report generated from the merchant's activity. */
export type ReportPending = ({
    /** When the report was requested. Format: date-time. */
    "created_at": string;
    /**
     * Currency the report covers. A report never combines currencies. minLength: 3. maxLength: 3.
     * pattern: ^[A-Z]{3}$. Example: "USD".
     */
    "currency": string;
    /**
     * Link to download the generated report. Present only when status is succeeded. A temporary
     * link for downloading a generated report.
     */
    "download"?: PublicDownload;
    /**
     * Why the report failed. Present only when status is failed: limit_exceeded when the report
     * hit a size or time limit, data_unavailable when data it needs wasn't available yet, and
     * generation_failed for other errors. Treat an unknown value like generation_failed. Value
     * enum: "generation_failed", "data_unavailable", "limit_exceeded".
     */
    "failure_reason"?: "generation_failed" | "data_unavailable" | "limit_exceeded" | (string & {});
    /**
     * Exclusive interval end instant. Each report type matches its own occurrence time. Format:
     * date-time.
     */
    "interval_end_at": string;
    /**
     * Inclusive interval start instant. Each report type matches its own occurrence time. Format:
     * date-time.
     */
    "interval_start_at": string;
    /** Stable identifier of the report. pattern: ^rep_[0-9A-HJKMNP-TV-Z]{26}$. */
    "report_id": string;
    /**
     * The report's type and column version. See the Reports guide for its columns. Value enum:
     * "gift_card_liability_v1", "orders_itemized_v1", "orders_itemized_v2",
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
     * pending while Flint generates the report, then succeeded with a download or failed with a
     * failure_reason. Flint sends report.succeeded or report.failed when it finishes. Value enum:
     * "pending".
     */
    "status": "pending" | (string & {});
    /**
     * IANA timezone used for timestamps and date bucketing. A payout occurs at the start of its
     * arrival_date in this timezone.
     */
    "timezone": string;
})
    & (({
    /** Value enum: "pending". */
    "status"?: "pending" | (string & {});
}));
/** A response containing `Report` data. */
export type ReportResponse = {
    /** A report generated from the merchant's activity. */
    "data": Report;
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
/** A report generated from the merchant's activity. */
export type ReportSucceeded = ({
    /** When the report was requested. Format: date-time. */
    "created_at": string;
    /**
     * Currency the report covers. A report never combines currencies. minLength: 3. maxLength: 3.
     * pattern: ^[A-Z]{3}$. Example: "USD".
     */
    "currency": string;
    /**
     * Link to download the generated report. Present only when status is succeeded. A temporary
     * link for downloading a generated report.
     */
    "download": PublicDownload;
    /**
     * Why the report failed. Present only when status is failed: limit_exceeded when the report
     * hit a size or time limit, data_unavailable when data it needs wasn't available yet, and
     * generation_failed for other errors. Treat an unknown value like generation_failed. Value
     * enum: "generation_failed", "data_unavailable", "limit_exceeded".
     */
    "failure_reason"?: "generation_failed" | "data_unavailable" | "limit_exceeded" | (string & {});
    /**
     * Exclusive interval end instant. Each report type matches its own occurrence time. Format:
     * date-time.
     */
    "interval_end_at": string;
    /**
     * Inclusive interval start instant. Each report type matches its own occurrence time. Format:
     * date-time.
     */
    "interval_start_at": string;
    /** Stable identifier of the report. pattern: ^rep_[0-9A-HJKMNP-TV-Z]{26}$. */
    "report_id": string;
    /**
     * The report's type and column version. See the Reports guide for its columns. Value enum:
     * "gift_card_liability_v1", "orders_itemized_v1", "orders_itemized_v2",
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
     * pending while Flint generates the report, then succeeded with a download or failed with a
     * failure_reason. Flint sends report.succeeded or report.failed when it finishes. Value enum:
     * "succeeded".
     */
    "status": "succeeded" | (string & {});
    /**
     * IANA timezone used for timestamps and date bucketing. A payout occurs at the start of its
     * arrival_date in this timezone.
     */
    "timezone": string;
})
    & (({
    /** Value enum: "succeeded". */
    "status"?: "succeeded" | (string & {});
    /**
     * Link to download the generated report. Present only when status is succeeded. A temporary
     * link for downloading a generated report.
     */
    "download": PublicDownload;
}));
export type ReportSucceededEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Report;
    };
    "event_type"?: "report.succeeded";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Report;
    };
    "event_type"?: "report.succeeded";
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
    "event_type": "report.succeeded";
});
/**
 * The `report.succeeded` webhook payload for the `installed_merchants` event source. Fields shared
 * by partner webhook payloads.
 */
export type ReportSucceededInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link Report}. A report generated from the merchant's activity. */
    "data"?: {
        /** A report generated from the merchant's activity. */
        "object": Report;
    };
    /** Value enum: "report.succeeded". */
    "event_type"?: "report.succeeded";
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
 * The `report.succeeded` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type ReportSucceededMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link Report}. A report generated from the merchant's activity. */
    "data"?: {
        /** A report generated from the merchant's activity. */
        "object": Report;
    };
    /** Value enum: "report.succeeded". */
    "event_type"?: "report.succeeded";
});
export type ReportsCreateParams = (InputValue<CreateReportRequestInput>);
export type ReportsGetParams = {};
export type ReportsListParams = {
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
     * Return reports with any of these report types. Accepts repeated keys, comma-separated
     * values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or
     * unknown entries are rejected. Values within this filter are ORed; separate filters are
     * ANDed. [] enum: "gift_card_liability_v1", "orders_itemized_v1", "orders_itemized_v2",
     * "payments_itemized_v1", "balance_transactions_itemized_v1", "payouts_itemized_v1",
     * "tax_itemized_v1", "tax_summarized_v1", "merchant_billing_itemized_v1",
     * "tax_transactions_itemized_v1". Value enum: "gift_card_liability_v1", "orders_itemized_v1",
     * "orders_itemized_v2", "payments_itemized_v1", "balance_transactions_itemized_v1",
     * "payouts_itemized_v1", "tax_itemized_v1", "tax_summarized_v1",
     * "merchant_billing_itemized_v1", "tax_transactions_itemized_v1". anyOf[1] (Value): Array of
     * string. minItems: 1. [] enum: "gift_card_liability_v1", "orders_itemized_v1",
     * "orders_itemized_v2", "payments_itemized_v1", "balance_transactions_itemized_v1",
     * "payouts_itemized_v1", "tax_itemized_v1", "tax_summarized_v1",
     * "merchant_billing_itemized_v1", "tax_transactions_itemized_v1". anyOf[1][] (Value): string.
     * Value enum: "gift_card_liability_v1", "orders_itemized_v1", "orders_itemized_v2",
     * "payments_itemized_v1", "balance_transactions_itemized_v1", "payouts_itemized_v1",
     * "tax_itemized_v1", "tax_summarized_v1", "merchant_billing_itemized_v1",
     * "tax_transactions_itemized_v1". anyOf[2] (Value): string. Value enum:
     * "gift_card_liability_v1", "orders_itemized_v1", "orders_itemized_v2",
     * "payments_itemized_v1", "balance_transactions_itemized_v1", "payouts_itemized_v1",
     * "tax_itemized_v1", "tax_summarized_v1", "merchant_billing_itemized_v1",
     * "tax_transactions_itemized_v1".
     */
    "report_type"?: InputValue<("gift_card_liability_v1"
        | "orders_itemized_v1"
        | "orders_itemized_v2"
        | "payments_itemized_v1"
        | "balance_transactions_itemized_v1"
        | "payouts_itemized_v1"
        | "tax_itemized_v1"
        | "tax_summarized_v1"
        | "merchant_billing_itemized_v1"
        | "tax_transactions_itemized_v1")
        | readonly ("gift_card_liability_v1"
        | "orders_itemized_v1"
        | "orders_itemized_v2"
        | "payments_itemized_v1"
        | "balance_transactions_itemized_v1"
        | "payouts_itemized_v1"
        | "tax_itemized_v1"
        | "tax_summarized_v1"
        | "merchant_billing_itemized_v1"
        | "tax_transactions_itemized_v1")[]>;
    /**
     * Return reports in any of these statuses. Accepts repeated keys, comma-separated values, or
     * mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries
     * are rejected. Values within this filter are ORed; separate filters are ANDed. [] enum:
     * "pending", "succeeded", "failed". Value enum: "pending", "succeeded", "failed". anyOf[1]
     * (Value): Array of string. minItems: 1. [] enum: "pending", "succeeded", "failed". anyOf[1][]
     * (Value): string. Value enum: "pending", "succeeded", "failed". anyOf[2] (Value): string.
     * Value enum: "pending", "succeeded", "failed".
     */
    "status"?: InputValue<("pending" | "succeeded" | "failed") | readonly ("pending" | "succeeded" | "failed")[]>;
};
/** The request body for: Reprice discounts. */
export type RepriceDiscountsRequestInput = {
    /**
     * Optional order version from the last order read. The mutation fails if the order changed.
     * Format: int64. minimum: 1.
     */
    "expected_version"?: number;
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
/** The request body for: Resend webhook delivery. */
export type ResendWebhookDeliveryRequest = {
    /** Your note explaining this action. minLength: 1. maxLength: 500. */
    "reason_message"?: string;
};
/** The request body for: Resend webhook delivery. */
export type ResendWebhookDeliveryRequestInput = ResendWebhookDeliveryRequest;
/** The request body for: Reset demo session. */
export type ResetDemoSessionRequest = {
    /**
     * Omit to use quickstart. An explicit empty or unsupported template is invalid. Default:
     * "quickstart". Value enum: "quickstart".
     */
    "template"?: "quickstart" | (string & {});
};
/** The request body for: Reset demo session. */
export type ResetDemoSessionRequestInput = CreateDemoSessionRequestInput;
/** The request body for: Resolve a customer deletion request. */
export type ResolveCustomerDeletionRequest = {
    /** Value enum: "approve", "reject". */
    "decision": "approve" | "reject" | (string & {});
};
/** The request body for: Resolve a customer deletion request. */
export type ResolveCustomerDeletionRequestInput = {
    /** Value enum: "approve", "reject". */
    "decision": "approve" | "reject";
};
/** The request body for: Resolve order inventory exception. */
export type ResolveOrderInventoryExceptionRequestInput = {
    /**
     * Your note explaining this action. Leading and trailing whitespace is removed; the remaining
     * note can contain at most 500 characters. minLength: 1.
     */
    "reason_message"?: string;
};
/**
 * A modifier selection for a payment link line item: a modifier option with a quantity, or a text
 * value.
 */
export type ResolvePaymentLinkLineItemModifierRequest = {
    /** minLength: 1. */
    "modifier_id"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity"?: number;
    /** The text a buyer entered for a text modifier group on a payment link line item. */
    "text"?: TextModifierRequest;
};
/**
 * A modifier selection for a payment link line item: a modifier option with a quantity, or a text
 * value.
 */
export type ResolvePaymentLinkLineItemModifierRequestInput = {
    /** minLength: 1. */
    "modifier_id"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity"?: number;
    /** The text a buyer entered for a text modifier group on a payment link line item. */
    "text"?: ResolvePaymentLinkTextModifierRequestInput;
};
/** The modifier selections for one payment link line item when resolving a payment link. */
export type ResolvePaymentLinkLineItemModifiers = {
    /**
     *  [] (Value): {@link ResolvePaymentLinkLineItemModifierRequest}. A modifier selection for a
     * payment link line item: a modifier option with a quantity, or a text value.
     */
    "modifiers"?: Array<ResolvePaymentLinkLineItemModifierRequest>;
};
/** The modifier selections for one payment link line item when resolving a payment link. */
export type ResolvePaymentLinkLineItemModifiersInput = {
    /**
     *  [] (Value): {@link ResolvePaymentLinkLineItemModifierRequestInput}. A modifier selection
     * for a payment link line item: a modifier option with a quantity, or a text value.
     */
    "modifiers"?: Array<ResolvePaymentLinkLineItemModifierRequestInput>;
};
/** The request body for: Resolve payment link. */
export type ResolvePaymentLinkRequest = {
    /**
     * Buyer answers keyed by custom field key. Checkbox answers must be exactly true or false as
     * strings. A required checkbox must be true. * (Value): string. minLength: 1.
     */
    "custom_field_values"?: Record<string, string>;
    /**
     * Modifier choices keyed by line item key, for catalog items. * (Value): {@link
     * ResolvePaymentLinkLineItemModifiers}. The modifier selections for one payment link line item
     * when resolving a payment link.
     */
    "modifiers"?: Record<string, ResolvePaymentLinkLineItemModifiers>;
    /**
     * Quantities keyed by line item key (line_items[].key), each within that item's min_quantity
     * and max_quantity. Event tiers accept 0. Whole-number quantities; fractional quantities are
     * not supported. * (Value): integer. Whole-number quantity value; fractional quantities are
     * not supported. Format: int32.
     */
    "quantity_overrides"?: Record<string, number>;
    /** minLength: 1. */
    "resolution_context": string;
    /**
     * Prices keyed by line item key, for items with allow_unit_price_adjustment, between
     * min_unit_price_money and max_unit_price_money. A donation link has one line item, keyed
     * donation. * (Value): {@link MoneyValue}. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "unit_price_overrides"?: Record<string, MoneyValue>;
    /**
     * Variant IDs keyed by line item key (line_items[].key), for lines with variant_ids. Each
     * selection must be offered by that line and priced in its current currency. Omit a key to use
     * default_variant_id; a line without a default requires a selection. Null is not accepted. *
     * (Value): string. minLength: 1. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "variant_selections"?: Record<string, string>;
};
/** The request body for: Resolve payment link. */
export type ResolvePaymentLinkRequestInput = {
    /**
     * Buyer answers keyed by custom field key. Checkbox answers must be exactly true or false as
     * strings. A required checkbox must be true. * (Value): string. minLength: 1.
     */
    "custom_field_values"?: Record<string, string>;
    /**
     * Modifier choices keyed by line item key, for catalog items. * (Value): {@link
     * ResolvePaymentLinkLineItemModifiersInput}. The modifier selections for one payment link line
     * item when resolving a payment link.
     */
    "modifiers"?: Record<string, ResolvePaymentLinkLineItemModifiersInput>;
    /**
     * Quantities keyed by line item key (line_items[].key), each within that item's min_quantity
     * and max_quantity. Event tiers accept 0. Whole-number quantities; fractional quantities are
     * not supported. * (Value): integer. Whole-number quantity value; fractional quantities are
     * not supported. Format: int32.
     */
    "quantity_overrides"?: Record<string, number>;
    /** minLength: 1. */
    "resolution_context": string;
    /**
     * Prices keyed by line item key, for items with allow_unit_price_adjustment, between
     * min_unit_price_money and max_unit_price_money. A donation link has one line item, keyed
     * donation. * (Value): {@link MoneyValueInput}. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code.
     */
    "unit_price_overrides"?: Record<string, MoneyValueInput>;
    /**
     * Variant IDs keyed by line item key (line_items[].key), for lines with variant_ids. Each
     * selection must be offered by that line and priced in its current currency. Omit a key to use
     * default_variant_id; a line without a default requires a selection. Null is not accepted. *
     * (Value): string. minLength: 1. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "variant_selections"?: Record<string, string>;
};
/** A response containing `CheckoutSessionWithSecret` data. */
export type ResolvePaymentLinkResponse = {
    /**
     * The checkout session with its checkout credential. For hosted checkout, send the buyer to
     * url. For embedded checkout, pass checkout_auth_token to your checkout client. A session in
     * which a buyer completes an order's payment.
     */
    "data": CheckoutSessionWithSecret;
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
/** The text a buyer entered for a text modifier group on a payment link line item. */
export type ResolvePaymentLinkTextModifierRequestInput = {
    /** minLength: 1. */
    "modifier_group_id": string;
    /** minLength: 1. */
    "value": string;
};
/** A reference to another resource by `resource_type` and `resource_id`. */
export type ResourceReference = {
    /** Public Flint ID of the referenced resource. */
    "resource_id": string;
    /**
     * Public resource type: the resource's ID field name without `_id`. Clients must accept values
     * added in future releases. Value enum: "api_key", "api_request_log", "balance",
     * "balance_transaction", "bundle", "bundle_component", "category", "checkout_session",
     * "checkout_session_customer_verification", "credit_note", "credit_note_allocation",
     * "custom_domain", "customer", "customer_address", "customer_deletion_request",
     * "customer_email_preferences", "customer_session", "customer_verification",
     * "delivery_location_set", "delivery_method", "delivery_profile", "delivery_quote",
     * "delivery_rate", "delivery_rate_callback", "delivery_revocation", "delivery_selection",
     * "delivery_zone", "demo_session", "device", "discount", "dispute", "email_change_request",
     * "environment_grant", "feedback_report", "file", "flint_wallet", "flint_wallet_card",
     * "fraud_warning", "fulfillment", "fulfillment_event", "fulfillment_notification",
     * "gift_card", "gift_card_funding_disposition", "gift_card_load", "gift_card_notification",
     * "gift_card_redemption", "gift_card_transaction", "image", "inventory_adjustment",
     * "inventory_allocation_policy", "inventory_allocation_policy_revision", "inventory_count",
     * "inventory_item", "inventory_level", "inventory_movement", "inventory_receipt",
     * "inventory_reservation", "inventory_reservation_line", "inventory_transfer",
     * "inventory_transfer_line", "invoice", "invoice_delivery_attempt", "invoice_late_fee",
     * "invoice_line_item", "invoice_manual_payment", "invoice_payment_attempt",
     * "invoice_payment_term", "location", "merchant", "merchant_billing_balance",
     * "merchant_billing_entry", "merchant_billing_invoice", "modifier", "modifier_group",
     * "modifier_set", "order", "order_charge", "order_line_item", "order_line_item_modifier",
     * "order_payment_attempt", "organization", "package", "package_item", "partner_app",
     * "partner_app_credential", "partner_app_install", "payment_intent", "payment_link",
     * "payment_link_custom_field", "payment_link_line_item", "payment_method",
     * "payment_method_domain", "payment_review", "payout", "payout_destination",
     * "payout_settings", "product", "product_option", "product_option_value", "product_variant",
     * "promotion", "promotion_code", "purchase_refund_allocation", "refund", "refund_allocation",
     * "refund_line_item_adjustment", "report", "report_download", "return", "return_activity",
     * "return_disposition", "return_inspection", "return_inspection_line_item",
     * "return_line_item", "return_policy", "return_policy_revision", "return_reason",
     * "return_receipt", "return_receipt_line_item", "return_resolution", "risk_list",
     * "risk_list_item", "risk_rule", "sandbox", "settings", "shipment", "subscription",
     * "subscription_delivery_migration", "subscription_line_item", "subscription_offer",
     * "subscription_payment_retry", "subscription_plan", "subscription_plan_line_item",
     * "tax_connection", "tax_registration", "test_clock", "user", "webhook_delivery",
     * "webhook_endpoint", "webhook_event", "workload_identity".
     */
    "resource_type": ResourceType;
};
