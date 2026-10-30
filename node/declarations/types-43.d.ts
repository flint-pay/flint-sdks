import type { MerchantWebhookEnvelope, MetadataMap } from './types-34.js';
import type { PaymentReview } from './types-42.js';
import type { MoneyValue, MoneyMovementListMeta, MoneyMovementBlockedReason, NextAction } from './types-35.js';
import type { PartnerWebhookEnvelope, PaymentClientAction } from './types-40.js';
import type { ResponseMeta } from './types-48.js';
import type { InputValue } from '../runtime.js';
import type { DeclinePaymentReviewRequestInput } from './types-14.js';
import type { ExpandedPayoutDestinationSummary, ExpandedPayoutSummary } from './types-21.js';
import type { UpdatePayoutDestinationRequestInput, UpdatePayoutSettingsRequestInput } from './types-59.js';
import type { CancelPayoutRequestInput } from './types-3.js';
import type { CreatePayoutRequestInput } from './types-9.js';
import type { Address } from './types-0.js';
import type {
    ReturnProcessDecision,
    ReturnProcessDispositionRequest,
    ReturnProcessInspectionRequest,
    ReturnProcessResolutionRequest
} from './types-49.js';
/**
 * The `payment_review.opened` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type PaymentReviewOpenedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link PaymentReview}. A payment review requiring a merchant decision.
     */
    "data"?: {
        /** A payment review requiring a merchant decision. */
        "object": PaymentReview;
    };
    /** Value enum: "payment_review.opened". */
    "event_type"?: "payment_review.opened";
});
/**
 * The payment details shown on a review: amount, capture method, authorization expiry, card brand
 * and last four digits, and buyer email.
 */
export type PaymentReviewPaymentSummary = {
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "amount_money": MoneyValue;
    /** RFC3339 timestamp. Format: date-time. */
    "authorization_expires_at": string | null;
    /** Value enum: "automatic", "manual". */
    "capture_method": "automatic" | "manual" | (string & {});
    "email": string;
    "last4": string;
    /**
     * Value enum: "amex", "discover", "diners", "jcb", "mastercard", "unionpay", "visa",
     * "unknown".
     */
    "payment_method_brand": "amex"
        | "discover"
        | "diners"
        | "jcb"
        | "mastercard"
        | "unionpay"
        | "visa"
        | "unknown"
        | (string & {});
};
export type PaymentReviewReopenedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": PaymentReview;
    };
    "event_type"?: "payment_review.reopened";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": PaymentReview;
    };
    "event_type"?: "payment_review.reopened";
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
    "event_type": "payment_review.reopened";
});
/**
 * The `payment_review.reopened` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type PaymentReviewReopenedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link PaymentReview}. A payment review requiring a merchant decision.
     */
    "data"?: {
        /** A payment review requiring a merchant decision. */
        "object": PaymentReview;
    };
    /** Value enum: "payment_review.reopened". */
    "event_type"?: "payment_review.reopened";
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
 * The `payment_review.reopened` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type PaymentReviewReopenedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link PaymentReview}. A payment review requiring a merchant decision.
     */
    "data"?: {
        /** A payment review requiring a merchant decision. */
        "object": PaymentReview;
    };
    /** Value enum: "payment_review.reopened". */
    "event_type"?: "payment_review.reopened";
});
/** A failed attempt to resolve a review by refund, with the `refund_id` and when it failed. */
export type PaymentReviewResolutionFailure = {
    /** RFC3339 timestamp. Format: date-time. */
    "failed_at": string;
    "refund_id": string;
};
/** A response containing `PaymentReview` data. */
export type PaymentReviewResponse = {
    /** A payment review requiring a merchant decision. */
    "data": PaymentReview;
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
/** The risk assessment shown on a review: a `level` and, when available, a numeric `score`. */
export type PaymentReviewRisk = {
    /** Value enum: "normal", "elevated", "highest", "not_assessed". */
    "level": "normal" | "elevated" | "highest" | "not_assessed" | (string & {});
    /**
     * Fraud score from the card processor's screening, from 0 to 99. Higher means riskier. Absent
     * when no score is available, which isn't a score of 0. Format: int32. minimum: 0. maximum:
     * 99.
     */
    "score"?: number;
};
export type PaymentReviewsApproveParams = {};
export type PaymentReviewsDeclineParams = (InputValue<DeclinePaymentReviewRequestInput>);
export type PaymentReviewsGetParams = {
    /**
     * Supported expansions: customer, order, payment_intent. Expansion requires risk.read plus the
     * read scope for each expanded resource. Limits: at most 10 unique expand paths per request.
     * Repeat expand, for example expand=customer&expand=order, or pass one comma-separated value.
     * [] enum: "customer", "order", "payment_intent". Value enum: "customer", "order",
     * "payment_intent". anyOf[1] (Value): Array of string. [] enum: "customer", "order",
     * "payment_intent". anyOf[1][] (Value): string. Value enum: "customer", "order",
     * "payment_intent". anyOf[2] (Value): string. Value enum: "customer", "order",
     * "payment_intent".
     */
    "expand"?: InputValue<("customer" | "order" | "payment_intent") | readonly ("customer" | "order" | "payment_intent")[]>;
};
export type PaymentReviewsListParams = {
    /**
     * Filter by review status. Repeat or comma-separate values. Accepts repeated keys,
     * comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen
     * order; empty or unknown entries are rejected. Values within this filter are ORed; separate
     * filters are ANDed. [] enum: "open", "resolving", "closed". Value enum: "open", "resolving",
     * "closed". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "open", "resolving",
     * "closed". anyOf[1][] (Value): string. Value enum: "open", "resolving", "closed". anyOf[2]
     * (Value): string. Value enum: "open", "resolving", "closed".
     */
    "status"?: InputValue<("open" | "resolving" | "closed") | readonly ("open" | "resolving" | "closed")[]>;
    /**
     * Filter by immutable review risk level. Repeat or comma-separate values. Accepts repeated
     * keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen
     * order; empty or unknown entries are rejected. Values within this filter are ORed; separate
     * filters are ANDed. [] enum: "normal", "elevated", "highest", "not_assessed". Value enum:
     * "normal", "elevated", "highest", "not_assessed". anyOf[1] (Value): Array of string.
     * minItems: 1. [] enum: "normal", "elevated", "highest", "not_assessed". anyOf[1][] (Value):
     * string. Value enum: "normal", "elevated", "highest", "not_assessed". anyOf[2] (Value):
     * string. Value enum: "normal", "elevated", "highest", "not_assessed".
     */
    "risk_level"?: InputValue<("normal" | "elevated" | "highest" | "not_assessed")
        | readonly ("normal" | "elevated" | "highest" | "not_assessed")[]>;
    /**
     * Filter by immutable payment flow. Repeat or comma-separate values. Accepts repeated keys,
     * comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen
     * order; empty or unknown entries are rejected. Values within this filter are ORed; separate
     * filters are ANDed. [] enum: "checkout", "payment_link", "invoice", "subscription_initial",
     * "subscription_renewal", "virtual_terminal", "api". Value enum: "checkout", "payment_link",
     * "invoice", "subscription_initial", "subscription_renewal", "virtual_terminal", "api".
     * anyOf[1] (Value): Array of string. minItems: 1. [] enum: "checkout", "payment_link",
     * "invoice", "subscription_initial", "subscription_renewal", "virtual_terminal", "api".
     * anyOf[1][] (Value): string. Value enum: "checkout", "payment_link", "invoice",
     * "subscription_initial", "subscription_renewal", "virtual_terminal", "api". anyOf[2] (Value):
     * string. Value enum: "checkout", "payment_link", "invoice", "subscription_initial",
     * "subscription_renewal", "virtual_terminal", "api".
     */
    "payment_flow"?: InputValue<("checkout"
        | "payment_link"
        | "invoice"
        | "subscription_initial"
        | "subscription_renewal"
        | "virtual_terminal"
        | "api")
        | readonly ("checkout"
        | "payment_link"
        | "invoice"
        | "subscription_initial"
        | "subscription_renewal"
        | "virtual_terminal"
        | "api")[]>;
    /** Filter by Flint payment intent ID. Example: "pi_01ARZ3NDEKTSV4RRFFQ69G5FAV". */
    "payment_intent_id"?: InputValue<string>;
    /** Filter by Flint order ID. Example: "ord_01ARZ3NDEKTSV4RRFFQ69G5FAV". */
    "order_id"?: InputValue<string>;
    /** Filter by Flint customer ID. Example: "cus_01ARZ3NDEKTSV4RRFFQ69G5FAV". */
    "customer_id"?: InputValue<string>;
    /** Inclusive lower bound on opened_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "opened_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on opened_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "opened_before"?: InputValue<string | globalThis.Date>;
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
/**
 * The risk assessment for a payment intent, with its risk level, score, outcome, and any matched
 * rule or review.
 */
export type PaymentRisk = {
    /** RFC3339 timestamp. Format: date-time. */
    "evaluated_at": string;
    /** Value enum: "normal", "elevated", "highest", "not_assessed". */
    "level": "normal" | "elevated" | "highest" | "not_assessed" | (string & {});
    "matched_risk_rule_id"?: string;
    /** Value enum: "authorized", "manual_review", "blocked", "issuer_declined", "invalid", null. */
    "outcome"?: "authorized"
        | "manual_review"
        | "blocked"
        | "issuer_declined"
        | "invalid"
        | null
        | (string & {})
        | null;
    /**
     * Value enum: "highest_risk", "elevated_risk", "low_authorization_probability", "risk_rule",
     * "risk_policy", null.
     */
    "outcome_reason"?: "highest_risk"
        | "elevated_risk"
        | "low_authorization_probability"
        | "risk_rule"
        | "risk_policy"
        | null
        | (string & {})
        | null;
    "payment_review_id"?: string;
    /**
     * Fraud score from the card processor's screening, from 0 to 99. Higher means riskier. Absent
     * when no score is available, which isn't a score of 0. Format: int32. minimum: 0. maximum:
     * 99.
     */
    "score"?: number;
    "statement": string;
};
/**
 * Display details for a bank account payment source: account type, bank name, and last four
 * digits.
 */
export type PaymentSourceAchDebitSummary = {
    /** Value enum: "checking", "savings", "other". */
    "account_type"?: "checking" | "savings" | "other" | (string & {});
    "bank_name"?: string;
    "last4"?: string;
};
/** Display details for a card payment source: brand, last four digits, and payment method ID. */
export type PaymentSourceCardSummary = {
    /** Value enum: "visa", "mastercard", "amex", "discover", "diners", "jcb", "unionpay". */
    "brand"?: "visa" | "mastercard" | "amex" | "discover" | "diners" | "jcb" | "unionpay" | (string & {});
    "last4"?: string;
    "payment_method_id"?: string;
};
/**
 * The credential you provide to pay an order: a payment source token, a saved payment method ID,
 * or a Stripe confirmation token.
 */
export type PaymentSourceCredential = ((PaymentSourceCredentialToken)
    | (PaymentSourceCredentialPaymentMethod)
    | (PaymentSourceCredentialStripeConfirmationToken)
    | (Record<string, unknown>));
/**
 * The credential you provide to pay an order: a payment source token, a saved payment method ID,
 * or a Stripe confirmation token.
 */
export type PaymentSourceCredentialInput = ((PaymentSourceCredentialTokenInput)
    | (PaymentSourceCredentialPaymentMethodInput)
    | (PaymentSourceCredentialStripeConfirmationTokenInput));
/** The `payment_method` variant of `PaymentSourceCredential`. */
export type PaymentSourceCredentialPaymentMethod = {
    /** Value enum: "payment_method". */
    "credential_type": "payment_method" | (string & {});
    /**
     * Saved Flint payment method ID belonging to the customer making this payment. minLength: 1.
     */
    "payment_method_id": string;
};
/** The `payment_method` variant of `PaymentSourceCredential`. */
export type PaymentSourceCredentialPaymentMethodInput = {
    /** Value enum: "payment_method". */
    "credential_type": "payment_method";
    /**
     * Saved Flint payment method ID belonging to the customer making this payment. minLength: 1.
     */
    "payment_method_id": string;
};
/** The `stripe_confirmation_token` variant of `PaymentSourceCredential`. */
export type PaymentSourceCredentialStripeConfirmationToken = {
    /** Value enum: "stripe_confirmation_token". */
    "credential_type": "stripe_confirmation_token" | (string & {});
    /**
     * Stripe credential collected for this payment. confirmation_token (Required): string. Stripe
     * confirmation token you created with Stripe.js from `payment_collection.stripe`. minLength:
     * 1.
     */
    "stripe": {
        /**
         * Stripe confirmation token you created with Stripe.js from `payment_collection.stripe`.
         * minLength: 1.
         */
        "confirmation_token": string;
    };
};
/** The `stripe_confirmation_token` variant of `PaymentSourceCredential`. */
export type PaymentSourceCredentialStripeConfirmationTokenInput = {
    /** Value enum: "stripe_confirmation_token". */
    "credential_type": "stripe_confirmation_token";
    /**
     * Stripe credential collected for this payment. confirmation_token (Required): string. Stripe
     * confirmation token you created with Stripe.js from `payment_collection.stripe`. minLength:
     * 1.
     */
    "stripe": {
        /**
         * Stripe confirmation token you created with Stripe.js from `payment_collection.stripe`.
         * minLength: 1.
         */
        "confirmation_token": string;
    };
};
/** The `token` variant of `PaymentSourceCredential`. */
export type PaymentSourceCredentialToken = {
    /** Value enum: "token". */
    "credential_type": "token" | (string & {});
    /** Opaque processor or browser payment source token. minLength: 1. */
    "token": string;
};
/** The `token` variant of `PaymentSourceCredential`. */
export type PaymentSourceCredentialTokenInput = {
    /** Value enum: "token". */
    "credential_type": "token";
    /** Opaque processor or browser payment source token. minLength: 1. */
    "token": string;
};
/**
 * A summary of the payment source used for a payment, by funding-method family, with card or bank
 * account display details.
 */
export type PaymentSourceSummary = {
    /**
     * Display details for a bank account payment source: account type, bank name, and last four
     * digits.
     */
    "ach_debit"?: PaymentSourceAchDebitSummary;
    /**
     * Display details for a card payment source: brand, last four digits, and payment method ID.
     */
    "card"?: PaymentSourceCardSummary;
    /**
     * Funding-method family. Wallet payment options use card because their underlying funding
     * source is a card. Value enum: "card", "ach_debit", "affirm".
     */
    "type": "card" | "ach_debit" | "affirm" | (string & {});
};
/**
 * The half-open period [period_start_at, period_end_at) includes its start and excludes its end.
 * Amounts and payments_count use currency; customer and subscription counts span currencies.
 */
export type PaymentVolumeBucket = {
    /**
     * Succeeded payments selected by payment created_at within this bucket, restricted to the
     * response currency. The half-open period [period_start_at, period_end_at) includes its start
     * and excludes its end. Amounts and payments_count use currency; customer and subscription
     * counts span currencies. Format: int64.
     */
    "payments_count": number;
    /**
     * Exclusive bucket end instant, clipped to the resolved period. The half-open period
     * [period_start_at, period_end_at) includes its start and excludes its end. Amounts and
     * payments_count use currency; customer and subscription counts span currencies. Format:
     * date-time.
     */
    "period_end_at": string;
    /**
     * Inclusive start instant. The half-open period [period_start_at, period_end_at) includes its
     * start and excludes its end. Amounts and payments_count use currency; customer and
     * subscription counts span currencies. Format: date-time.
     */
    "period_start_at": string;
    /**
     * Succeeded payment amounts selected by payment created_at within this bucket, in the response
     * currency. The half-open period [period_start_at, period_end_at) includes its start and
     * excludes its end. Amounts and payments_count use currency; customer and subscription counts
     * span currencies. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "volume_money": MoneyValue;
};
/**
 * The half-open period [period_start_at, period_end_at) includes its start and excludes its end.
 * Amounts and payments_count use currency; customer and subscription counts span currencies.
 */
export type PaymentVolumeTimeseries = {
    /**
     * Payment created_at buckets clipped to the period, including empty buckets. Repeated local
     * hours produce two buckets; skipped hours and days produce none. The half-open period
     * [period_start_at, period_end_at) includes its start and excludes its end. Amounts and
     * payments_count use currency; customer and subscription counts span currencies. [] (Value):
     * {@link PaymentVolumeBucket}. The half-open period [period_start_at, period_end_at) includes
     * its start and excludes its end. Amounts and payments_count use currency; customer and
     * subscription counts span currencies.
     */
    "buckets": Array<PaymentVolumeBucket>;
    /**
     * Currencies of succeeded payments selected by payment created_at or counted refunds selected
     * by refund created_at in the period, regardless of the currency filter. Empty when neither
     * has rows. The half-open period [period_start_at, period_end_at) includes its start and
     * excludes its end. Amounts and payments_count use currency; customer and subscription counts
     * span currencies. [] (Value): string.
     */
    "currencies": Array<string>;
    /**
     * ISO 4217 currency for amounts and payment counts. Defaults to the merchant's default
     * currency. The half-open period [period_start_at, period_end_at) includes its start and
     * excludes its end. Amounts and payments_count use currency; customer and subscription counts
     * span currencies. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
     */
    "currency": string;
    /**
     * Local bucket size: hour, day, week starting Monday, or month. Defaults to day. The half-open
     * period [period_start_at, period_end_at) includes its start and excludes its end. Amounts and
     * payments_count use currency; customer and subscription counts span currencies. Value enum:
     * "hour", "day", "week", "month".
     */
    "granularity": "hour" | "day" | "week" | "month" | (string & {});
    /**
     * Exclusive resolved end instant. Omitted or future request ends resolve to the request time
     * truncated to the second. The half-open period [period_start_at, period_end_at) includes its
     * start and excludes its end. Amounts and payments_count use currency; customer and
     * subscription counts span currencies. Format: date-time.
     */
    "period_end_at": string;
    /**
     * Inclusive start instant. The half-open period [period_start_at, period_end_at) includes its
     * start and excludes its end. Amounts and payments_count use currency; customer and
     * subscription counts span currencies. Format: date-time.
     */
    "period_start_at": string;
    /**
     * IANA timezone used only for local bucket boundaries. Defaults to UTC. The half-open period
     * [period_start_at, period_end_at) includes its start and excludes its end. Amounts and
     * payments_count use currency; customer and subscription counts span currencies.
     */
    "timezone": string;
};
/** A response containing `PaymentVolumeTimeseries` data. */
export type PaymentVolumeTimeseriesResponse = {
    /**
     * The half-open period [period_start_at, period_end_at) includes its start and excludes its
     * end. Amounts and payments_count use currency; customer and subscription counts span
     * currencies.
     */
    "data": PaymentVolumeTimeseries;
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
/** Funds sent from a merchant balance to a payout destination. */
export type Payout = {
    /**
     * Amount sent to your bank. Always positive. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
    /**
     * Calendar date the bank is expected to receive the funds, in YYYY-MM-DD format using the UTC
     * date of the expected arrival. Format: date.
     */
    "arrival_date"?: string;
    /**
     * Balance source this payout draws from. Flint chooses the source when balance_source_type is
     * omitted at create. Clients must accept source types added in future releases. Value enum:
     * "card", "bank_account".
     */
    "balance_source_type": "card" | "bank_account" | (string & {});
    /** When the payout was created. Format: date-time. */
    "created_at": string;
    /** ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD". */
    "currency": string;
    /** Description sent when the payout was created. Absent when there is none. */
    "description"?: string;
    /** Caller-owned identifier for this resource in an external system. maxLength: 255. */
    "external_reference_id"?: string;
    /**
     * Flint-normalized payout failure code. Unknown provider values are returned as payout_failed.
     * Value enum: "account_closed", "account_frozen", "bank_account_restricted",
     * "bank_ownership_changed", "could_not_process", "debit_not_authorized", "declined",
     * "insufficient_funds", "invalid_account_number", "incorrect_account_holder_name",
     * "incorrect_account_holder_address", "incorrect_account_holder_tax_id", "invalid_currency",
     * "no_account", "unsupported_card", "payout_failed".
     */
    "failure_code"?: "account_closed"
        | "account_frozen"
        | "bank_account_restricted"
        | "bank_ownership_changed"
        | "could_not_process"
        | "debit_not_authorized"
        | "declined"
        | "insufficient_funds"
        | "invalid_account_number"
        | "incorrect_account_holder_name"
        | "incorrect_account_holder_address"
        | "incorrect_account_holder_tax_id"
        | "invalid_currency"
        | "no_account"
        | "unsupported_card"
        | "payout_failed"
        | (string & {});
    /**
     * Flint-authored payout failure message. This is stable explanatory text, not a raw provider
     * message.
     */
    "failure_message"?: string;
    /**
     * Whether the payout fee is estimated or final. not_applicable means no applicable fee status
     * is known, including unmapped fee states. Value enum: "estimated", "final", "not_applicable".
     */
    "fee_amount_status": "estimated" | "final" | "not_applicable" | (string & {});
    /**
     * Fee for this payout, never negative. Payouts carry no fee, so this is 0 once your processor
     * records the payout, and null until then. anyOf[1] (Value): {@link MoneyValue}. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code. anyOf[2] (Value):
     * null.
     */
    "fee_money": ((MoneyValue) | (null));
    /**
     * What started the payout. A payout imported from your processor follows the processor:
     * scheduled when it sent the payout automatically, otherwise manual. Only scheduled payouts
     * list their balance transactions through GET /v1/balance-transactions?payout_id=; other
     * payouts return 409 with reason not_itemized. Unmapped sources are returned as other. Value
     * enum: "manual", "scheduled", "platform", "other".
     */
    "initiated_by": "manual" | "scheduled" | "platform" | "other" | (string & {});
    /** Merchant receiving the payout. */
    "merchant_id": string;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and
     * are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps
     * written before those limits may not satisfy them.
     */
    "metadata"?: MetadataMap;
    /**
     * Payout method. instant can appear on imported payouts; unmapped methods are returned as
     * other. Value enum: "standard", "instant", "other".
     */
    "method": "standard" | "instant" | "other" | (string & {});
    /**
     * Signed effect of this payout on your Flint balance. It is negative because the payout takes
     * money out: a 25000 payout with no fee has net_money -25000. Null until your processor
     * records the payout. anyOf[1] (Value): {@link MoneyValue}. Signed monetary amount represented
     * as integer minor units plus an ISO 4217 currency code. anyOf[2] (Value): null.
     */
    "net_money": ((MoneyValue) | (null));
    /**
     * The payout this one reverses, inlined when you request expand=original_payout. null when
     * expanded and original_payout_id is absent. Present only when `expand` includes
     * `original_payout`; `null` when expanded and there is no related payout. anyOf[1] (Value):
     * {@link ExpandedPayoutSummary}. A payout's summary fields, including amount, method, status,
     * and arrival date, returned when the payout is expanded. anyOf[2] (Value): null.
     */
    "original_payout"?: ((ExpandedPayoutSummary) | (null));
    /**
     * On a payout that reverses another payout, the payout it reverses. Present only when Flint
     * has the matching original payout. A payout has at most one of original_payout_id and
     * reversed_by_payout_id.
     */
    "original_payout_id"?: string;
    /**
     * The payout destination, inlined when you request expand=payout_destination. null when
     * expanded and payout_destination_id is absent. Present only when `expand` includes
     * `payout_destination`; `null` when expanded and there is no related payout destination.
     * anyOf[1] (Value): {@link ExpandedPayoutDestinationSummary}. A payout destination's summary
     * fields, such as type, bank name, last four digits, and status, returned when the destination
     * is expanded. anyOf[2] (Value): null.
     */
    "payout_destination"?: ((ExpandedPayoutDestinationSummary) | (null));
    /**
     * Bank account or debit card receiving the payout. Absent when Flint can't match your
     * processor's destination to a payout destination.
     */
    "payout_destination_id"?: string;
    /** Stable identifier of the payout. */
    "payout_id": string;
    /**
     * Whether Flint has pulled a paid payout back from your bank: none until the reversal
     * completes, then reversed. A payout_reversal balance transaction returns the money, and
     * status stays paid. Value enum: "none", "reversed".
     */
    "reversal_status": "none" | "reversed" | (string & {});
    /**
     * The payout reversing this one, inlined when you request expand=reversed_by_payout. null when
     * expanded and reversed_by_payout_id is absent. Present only when `expand` includes
     * `reversed_by_payout`; `null` when expanded and there is no related payout. anyOf[1] (Value):
     * {@link ExpandedPayoutSummary}. A payout's summary fields, including amount, method, status,
     * and arrival date, returned when the payout is expanded. anyOf[2] (Value): null.
     */
    "reversed_by_payout"?: ((ExpandedPayoutSummary) | (null));
    /**
     * The separate payout reversing this one, when Flint has the matching payout. Its presence
     * does not mean the reversal has completed; read reversal_status. A payout has at most one of
     * original_payout_id and reversed_by_payout_id.
     */
    "reversed_by_payout_id"?: string;
    /** Text shown on your bank statement for the deposit, when one was set. */
    "statement_descriptor"?: string;
    /**
     * Where the payout is: pending until it is sent, in_transit on its way to your bank, then paid
     * or failed. A paid payout can still become failed if the bank returns the deposit, and
     * canceled means a manual payout was canceled while pending. Value enum: "pending",
     * "in_transit", "paid", "failed", "canceled".
     */
    "status": "pending" | "in_transit" | "paid" | "failed" | "canceled" | (string & {});
    /**
     * The bank's trace number for the deposit, which your bank can use to locate a late deposit.
     * Its status says whether the number is pending, available, or unsupported, and value holds
     * the number when Flint has it. Absent when Flint has no trace information. A payout's bank
     * trace ID, with whether it is pending, available, or unsupported.
     */
    "trace_id"?: PayoutTraceID;
    /** When the payout last changed. Format: date-time. */
    "updated_at": string;
};
export type PayoutCanceledEvent = ((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Payout;
    };
    "event_type"?: "payout.canceled";
})
    & {
    "event_type": "payout.canceled";
});
export type PayoutCreatedEvent = ((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Payout;
    };
    "event_type"?: "payout.created";
})
    & {
    "event_type": "payout.created";
});
/** The account that receives merchant payouts. */
export type PayoutDestination = {
    /**
     * Payout methods available through Flint for this destination. Only standard is currently
     * available. [] enum: "standard". [] (Value): string. Value enum: "standard".
     */
    "available_payout_methods": Array<"standard" | (string & {})>;
    /** Name of the bank, when your processor reports it. */
    "bank_name"?: string;
    /**
     * ISO 3166-1 alpha-2 country code. minLength: 2. maxLength: 2. pattern: ^[A-Z]{2}$. Example:
     * "US".
     */
    "country"?: string;
    /** When the destination was added. Format: date-time. */
    "created_at": string;
    /** ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD". */
    "currency": string;
    /**
     * Whether this is the default destination for its currency. Scheduled payouts, and payouts
     * created without payout_destination_id, go to the default, and only an active destination can
     * be it.
     */
    "default_for_currency": boolean;
    /**
     * When the destination was last disabled or archived. Absent if it never was. Format:
     * date-time.
     */
    "disabled_at"?: string;
    /**
     * Flint-normalized reason the payout destination cannot currently be used. Unknown
     * provider/backend values are returned as destination_unavailable. Value enum:
     * "destination_disabled", "destination_removed", "destination_unavailable",
     * "destination_rejected", "destination_under_review", "disabled_by_merchant_request",
     * "requirements_past_due", "requirements_pending_verification",
     * "superseded_destination_session_completed".
     */
    "disabled_reason"?: "destination_disabled"
        | "destination_removed"
        | "destination_unavailable"
        | "destination_rejected"
        | "destination_under_review"
        | "disabled_by_merchant_request"
        | "requirements_past_due"
        | "requirements_pending_verification"
        | "superseded_destination_session_completed"
        | (string & {});
    /** Last four digits of the account or card number. */
    "last4"?: string;
    /** Merchant that owns the destination. */
    "merchant_id": string;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and
     * are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps
     * written before those limits may not satisfy them.
     */
    "metadata"?: MetadataMap;
    /** Stable identifier of the payout destination. */
    "payout_destination_id": string;
    /**
     * Current status. Archived: deleted, and still readable by ID. Value enum: "pending",
     * "active", "verification_required", "disabled", "archived", "failed".
     */
    "status": "pending" | "active" | "verification_required" | "disabled" | "archived" | "failed" | (string & {});
    /** When Flint last recorded the destination's status. Format: date-time. */
    "status_updated_at"?: string;
    /**
     * Destination type. Unmapped destination types are returned as other. Value enum:
     * "bank_account", "debit_card", "other".
     */
    "type": "bank_account" | "debit_card" | "other" | (string & {});
    /** When the destination last changed. Format: date-time. */
    "updated_at": string;
    /**
     * Persisted version of this resource's owned state. Expanded resources and external
     * observations can change independently. Format: uint64. minimum: 1.
     */
    "version": number;
};
export type PayoutDestinationArchivedEvent = ((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": PayoutDestination;
    };
    "event_type"?: "payout_destination.archived";
})
    & {
    "event_type": "payout_destination.archived";
});
export type PayoutDestinationCreatedEvent = ((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": PayoutDestination;
    };
    "event_type"?: "payout_destination.created";
})
    & {
    "event_type": "payout_destination.created";
});
export type PayoutDestinationDisabledEvent = ((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": PayoutDestination;
    };
    "event_type"?: "payout_destination.disabled";
})
    & {
    "event_type": "payout_destination.disabled";
});
/** A page of `PayoutDestination` objects. */
export type PayoutDestinationListResponse = {
    /**  [] (Value): {@link PayoutDestination}. The account that receives merchant payouts. */
    "data": Array<PayoutDestination>;
    /**
     * Response metadata for money movement lists, including request and trace IDs, warnings, and
     * the state of the available history.
     */
    "meta"?: MoneyMovementListMeta;
    "next_page_token"?: string;
    /**
     * maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/** A response containing `PayoutDestination` data. */
export type PayoutDestinationResponse = {
    /** The account that receives merchant payouts. */
    "data": PayoutDestination;
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
export type PayoutDestinationUpdatedEvent = ((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": PayoutDestination;
    };
    "event_type"?: "payout_destination.updated";
})
    & {
    "event_type": "payout_destination.updated";
});
export type PayoutDestinationsDeleteParams = {
    /** Format: uint64. minimum: 1. */
    "expected_version"?: InputValue<number>;
};
export type PayoutDestinationsGetParams = {};
export type PayoutDestinationsListParams = {
    /** ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD". */
    "currency"?: InputValue<string>;
    /**
     * Optional payout destination type filter. Accepts repeated keys, comma-separated values, or
     * mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries
     * are rejected. Values within this filter are ORed; separate filters are ANDed. [] enum:
     * "bank_account", "debit_card". Value enum: "bank_account", "debit_card". anyOf[1] (Value):
     * Array of string. minItems: 1. [] enum: "bank_account", "debit_card". anyOf[1][] (Value):
     * string. Value enum: "bank_account", "debit_card". anyOf[2] (Value): string. Value enum:
     * "bank_account", "debit_card".
     */
    "type"?: InputValue<("bank_account" | "debit_card") | readonly ("bank_account" | "debit_card")[]>;
    /**
     * Filter by status. Repeat the parameter or send comma-separated values to match any of
     * several. Omitted, the list leaves out archived rows; name archived to include them. Accepts
     * repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in
     * first-seen order; empty or unknown entries are rejected. Values within this filter are ORed;
     * separate filters are ANDed. [] enum: "pending", "active", "verification_required",
     * "disabled", "archived", "failed". Value enum: "pending", "active", "verification_required",
     * "disabled", "archived", "failed". anyOf[1] (Value): Array of string. minItems: 1. [] enum:
     * "pending", "active", "verification_required", "disabled", "archived", "failed". anyOf[1][]
     * (Value): string. Value enum: "pending", "active", "verification_required", "disabled",
     * "archived", "failed". anyOf[2] (Value): string. Value enum: "pending", "active",
     * "verification_required", "disabled", "archived", "failed".
     */
    "status"?: InputValue<("pending" | "active" | "verification_required" | "disabled" | "archived" | "failed")
        | readonly ("pending" | "active" | "verification_required" | "disabled" | "archived" | "failed")[]>;
    /**
     * Optional available payout method filter. Accepts repeated keys, comma-separated values, or
     * mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries
     * are rejected. Values within this filter are ORed; separate filters are ANDed. [] enum:
     * "standard". Value enum: "standard". anyOf[1] (Value): Array of string. minItems: 1. [] enum:
     * "standard". anyOf[1][] (Value): string. Value enum: "standard". anyOf[2] (Value): string.
     * Value enum: "standard".
     */
    "available_payout_methods"?: InputValue<("standard") | readonly ("standard")[]>;
    /** Whether to return only destinations that are the default for their currency. */
    "default_for_currency"?: InputValue<boolean>;
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
};
export type PayoutDestinationsUpdateParams = (InputValue<UpdatePayoutDestinationRequestInput>);
export type PayoutFailedEvent = ((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Payout;
    };
    "event_type"?: "payout.failed";
})
    & {
    "event_type": "payout.failed";
});
/** A page of `Payout` objects. */
export type PayoutListResponse = {
    /**  [] (Value): {@link Payout}. Funds sent from a merchant balance to a payout destination. */
    "data": Array<Payout>;
    /**
     * Response metadata for money movement lists, including request and trace IDs, warnings, and
     * the state of the available history.
     */
    "meta"?: MoneyMovementListMeta;
    "next_page_token"?: string;
    /**
     * maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
export type PayoutPaidEvent = ((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Payout;
    };
    "event_type"?: "payout.paid";
})
    & {
    "event_type": "payout.paid";
});
/** A response containing `Payout` data. */
export type PayoutResponse = {
    /** Funds sent from a merchant balance to a payout destination. */
    "data": Payout;
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
export type PayoutReversedEvent = ((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Payout;
    };
    "event_type"?: "payout.reversed";
})
    & {
    "event_type": "payout.reversed";
});
/** The merchant's payout schedule and preferences. */
export type PayoutSettings = {
    /**
     * Why payouts can't run. Empty when nothing blocks them. [] (Value): {@link
     * MoneyMovementBlockedReason}. Why a money movement action is blocked, with an error code, a
     * message, next steps, and who can resolve it.
     */
    "blocked_reasons": Array<MoneyMovementBlockedReason>;
    /**
     * When Flint stored the payout settings record, as an RFC 3339 UTC instant at second
     * precision. Null when no stored settings record exists. Format: date-time.
     */
    "created_at": string | null;
    /**
     * Default payout destination for each currency, as a map from currency code to
     * payout_destination_id. Read-only: change defaults in the payouts embedded component. *
     * (Value): string.
     */
    "default_payout_destinations"?: Record<string, string>;
    /** Days a payment stays pending before its funds become available to pay out. Format: int32. */
    "delay_days": number;
    /**
     * Delay in days you set in place of the account's default, 0 through 31. Absent when none is
     * set. Format: int32.
     */
    "delay_days_override"?: number;
    /**
     * Payout schedule interval. Unmapped intervals are returned as other. Value enum: "manual",
     * "daily", "weekly", "monthly", "other".
     */
    "interval": "manual" | "daily" | "weekly" | "monthly" | "other" | (string & {});
    /** Merchant these settings belong to. */
    "merchant_id": string;
    /**
     * Amount kept in your balance instead of paid out, keyed by currency code. Absent when no
     * minimum is set. * (Value): {@link MoneyValue}. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code.
     */
    "minimum_balance_by_currency"?: Record<string, MoneyValue>;
    /**
     * Days of the month, 1 through 31, on which monthly payouts are sent. [] (Value): integer.
     * Format: int32.
     */
    "monthly_payout_days": Array<number>;
    /**
     * Steps that would let payouts run, when Flint has one to suggest. Empty otherwise. []
     * (Value): {@link NextAction}. A suggested next step for resolving an error, warning, or
     * blocked state, such as the API operation to call or the scope it needs.
     */
    "next_actions": Array<NextAction>;
    /** Stable identifier of your payout settings. */
    "payout_settings_id": string;
    /** Text shown on your bank statement for payouts. Absent when none is set. */
    "statement_descriptor"?: string;
    /**
     * Whether payouts can run: enabled, disabled, blocked, or pending. When it isn't enabled,
     * blocked_reasons says why and next_actions lists any steps Flint can suggest. Value enum:
     * "enabled", "disabled", "blocked", "pending".
     */
    "status": "enabled" | "disabled" | "blocked" | "pending" | (string & {});
    /**
     * When the stored payout settings record was last updated, as an RFC 3339 UTC instant at
     * second precision. Without a stored record, this is the provider's update time when supplied,
     * otherwise null. Format: date-time.
     */
    "updated_at": string | null;
    /**
     * Persisted version of this resource's owned state. Expanded resources and external
     * observations can change independently. Format: uint64. minimum: 1.
     */
    "version": number;
    /**
     * Days of the week weekly payouts are sent. Accounts set up outside Flint can report saturday
     * or sunday; when you change the schedule, Flint accepts monday through friday. [] enum:
     * "monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday". [] (Value):
     * string. Value enum: "monday", "tuesday", "wednesday", "thursday", "friday", "saturday",
     * "sunday".
     */
    "weekly_payout_days": Array<"monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday" | "sunday" | (string & {})>;
};
export type PayoutSettingsGetParams = {};
/** A response containing `PayoutSettings` data. */
export type PayoutSettingsResponse = {
    /** The merchant's payout schedule and preferences. */
    "data": PayoutSettings;
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
export type PayoutSettingsUpdateParams = (InputValue<UpdatePayoutSettingsRequestInput>);
export type PayoutSettingsUpdatedEvent = ((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": PayoutSettings;
    };
    "event_type"?: "payout_settings.updated";
})
    & {
    "event_type": "payout_settings.updated";
});
/** A payout's bank trace ID, with whether it is pending, available, or unsupported. */
export type PayoutTraceID = {
    /**
     * Whether a bank trace ID is available. Unmapped trace states are returned as unsupported.
     * Value enum: "pending", "available", "unsupported".
     */
    "status": "pending" | "available" | "unsupported" | (string & {});
    /** The bank's trace number for the deposit, when Flint has it. */
    "value"?: string;
};
export type PayoutUpdatedEvent = ((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Payout;
    };
    "event_type"?: "payout.updated";
})
    & {
    "event_type": "payout.updated";
});
export type PayoutsCancelParams = (InputValue<CancelPayoutRequestInput>);
export type PayoutsCreateParams = (InputValue<CreatePayoutRequestInput>);
export type PayoutsGetParams = {
    /**
     * Supported expansions: original_payout, payout_destination, reversed_by_payout. Expansion
     * requires money_movement.payouts.read plus the read scope for each expanded resource. Limits:
     * at most 10 unique expand paths per request. Repeat expand, for example
     * expand=original_payout&expand=payout_destination, or pass one comma-separated value. []
     * enum: "original_payout", "payout_destination", "reversed_by_payout". Value enum:
     * "original_payout", "payout_destination", "reversed_by_payout". anyOf[1] (Value): Array of
     * string. [] enum: "original_payout", "payout_destination", "reversed_by_payout". anyOf[1][]
     * (Value): string. Value enum: "original_payout", "payout_destination", "reversed_by_payout".
     * anyOf[2] (Value): string. Value enum: "original_payout", "payout_destination",
     * "reversed_by_payout".
     */
    "expand"?: InputValue<("original_payout" | "payout_destination" | "reversed_by_payout")
        | readonly ("original_payout" | "payout_destination" | "reversed_by_payout")[]>;
};
export type PayoutsListParams = {
    /**
     * Filter by the original Idempotency-Key, after trimming surrounding whitespace. Matching is
     * exact and case-sensitive. Returns current authorized resources, not the recorded response. A
     * pending resource does not prove that the operation succeeded, and an empty list does not
     * prove that it had no effect. minLength: 1. maxLength: 255.
     */
    "idempotency_key"?: InputValue<string>;
    /** ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD". */
    "currency"?: InputValue<string>;
    /**
     * Supported expansions: original_payout, payout_destination, reversed_by_payout. Include the
     * requested related resources using scoped batch reads for this page. Each relationship
     * requires its existing target read scopes. Expansion changes the representation without
     * changing pagination tokens. Limits: at most 10 unique expand paths per request. Repeat
     * expand, for example expand=original_payout&expand=payout_destination, or pass one
     * comma-separated value. [] enum: "original_payout", "payout_destination",
     * "reversed_by_payout". Value enum: "original_payout", "payout_destination",
     * "reversed_by_payout". anyOf[1] (Value): Array of string. [] enum: "original_payout",
     * "payout_destination", "reversed_by_payout". anyOf[1][] (Value): string. Value enum:
     * "original_payout", "payout_destination", "reversed_by_payout". anyOf[2] (Value): string.
     * Value enum: "original_payout", "payout_destination", "reversed_by_payout".
     */
    "expand"?: InputValue<("original_payout" | "payout_destination" | "reversed_by_payout")
        | readonly ("original_payout" | "payout_destination" | "reversed_by_payout")[]>;
    /**
     * Optional payout method filter. Accepts repeated keys, comma-separated values, or mixtures.
     * Values are trimmed and deduplicated in first-seen order; empty or unknown entries are
     * rejected. Values within this filter are ORed; separate filters are ANDed. [] enum:
     * "standard", "instant", "other". Value enum: "standard", "instant", "other". anyOf[1]
     * (Value): Array of string. minItems: 1. [] enum: "standard", "instant", "other". anyOf[1][]
     * (Value): string. Value enum: "standard", "instant", "other". anyOf[2] (Value): string. Value
     * enum: "standard", "instant", "other".
     */
    "method"?: InputValue<("standard" | "instant" | "other") | readonly ("standard" | "instant" | "other")[]>;
    /**
     * Optional Flint balance source type filter. Accepts repeated keys, comma-separated values, or
     * mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries
     * are rejected. Values within this filter are ORed; separate filters are ANDed. [] enum:
     * "card", "bank_account". Value enum: "card", "bank_account". anyOf[1] (Value): Array of
     * string. minItems: 1. [] enum: "card", "bank_account". anyOf[1][] (Value): string. Value
     * enum: "card", "bank_account". anyOf[2] (Value): string. Value enum: "card", "bank_account".
     */
    "balance_source_type"?: InputValue<("card" | "bank_account") | readonly ("card" | "bank_account")[]>;
    /** Optional payout destination ID filter. Example: "pdest_01ARZ3NDEKTSV4RRFFQ69G5FAV". */
    "payout_destination_id"?: InputValue<string>;
    /**
     * Exact-match filter on the caller-owned external reference ID. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: InputValue<string>;
    /**
     * Search across payout ID, external reference ID, description, and statement descriptor. Text
     * fields match any part of the value, and %, _ and \ are ordinary characters, not wildcards.
     * IDs match from the start and need the type prefix, such as po_01.
     */
    "query"?: InputValue<string>;
    /**
     * Optional payout status filter. Accepts repeated keys, comma-separated values, or mixtures.
     * Values are trimmed and deduplicated in first-seen order; empty or unknown entries are
     * rejected. Values within this filter are ORed; separate filters are ANDed. [] enum:
     * "pending", "in_transit", "paid", "failed", "canceled". Value enum: "pending", "in_transit",
     * "paid", "failed", "canceled". anyOf[1] (Value): Array of string. minItems: 1. [] enum:
     * "pending", "in_transit", "paid", "failed", "canceled". anyOf[1][] (Value): string. Value
     * enum: "pending", "in_transit", "paid", "failed", "canceled". anyOf[2] (Value): string. Value
     * enum: "pending", "in_transit", "paid", "failed", "canceled".
     */
    "status"?: InputValue<("pending" | "in_transit" | "paid" | "failed" | "canceled")
        | readonly ("pending" | "in_transit" | "paid" | "failed" | "canceled")[]>;
    /** Inclusive lower bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
    /** Inclusive lower bound on arrival_date at midnight UTC. Use YYYY-MM-DD. Format: date. */
    "arrival_date_from"?: InputValue<string>;
    /** Exclusive upper bound on arrival_date at midnight UTC. Use YYYY-MM-DD. Format: date. */
    "arrival_date_to"?: InputValue<string>;
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
};
/**
 * Client-side action required before continuing a payment. Resume an order through PayOrder with
 * order_payment_attempt_id, or continue a standalone PaymentIntent through its confirm endpoint
 * without a replacement credential.
 */
export type PendingPaymentAction = {
    /**
     * Product-level action type. payment_authentication applies to a payment leg;
     * payment_method_authentication applies to saving a future-billing payment method. Value enum:
     * "payment_authentication", "payment_method_authentication".
     */
    "action_type": "payment_authentication" | "payment_method_authentication" | (string & {});
    /**
     * Direct browser authority required to finish this action before continuing through Flint.
     * Unlike collection guidance, this payload includes a client secret. Typed provider-specific
     * browser action payload. Execute the selected provider action before continuing the owning
     * payment through Flint.
     */
    "client_action": PaymentClientAction;
    /**
     * Stable Flint action ID. Use this to deduplicate a repeated action projection while resuming
     * an attempt.
     */
    "pending_action_id": string;
    /**
     * The attempt subject that requires browser action. Exactly one of payment_intent or
     * setup_payment_source is present. Typed subject for a pending order payment action. Exactly
     * one subject is present.
     */
    "subject": PendingPaymentActionSubject;
};
/** The payment intent that needs buyer authentication in a pending payment action. */
export type PendingPaymentActionPaymentIntentSubject = {
    "payment_intent_id": string;
};
/** The payment method setup that needs buyer authentication in a pending payment action. */
export type PendingPaymentActionSetupPaymentSourceSubject = {
    "payment_method_id": string;
};
/** Typed subject for a pending order payment action. Exactly one subject is present. */
export type PendingPaymentActionSubject = {
    /**
     * PaymentIntent that requires buyer authentication. It can be a standalone intent or an
     * order-owned payment leg. The payment intent that needs buyer authentication in a pending
     * payment action.
     */
    "payment_intent"?: PendingPaymentActionPaymentIntentSubject;
    /**
     * Future-billing payment method setup that requires buyer authentication. The payment method
     * setup that needs buyer authentication in a pending payment action.
     */
    "setup_payment_source"?: PendingPaymentActionSetupPaymentSourceSubject;
};
/**
 * Pickup details. For a pickup that checkout creates, location_name, address, and instructions
 * name the store the buyer chose and the delivery method's pickup instructions. The note the buyer
 * left for the store is in recipient.instructions.
 */
export type PickupFulfillmentDetails = {
    /**
     * Address where the buyer collects the order. A postal address. Every address has country.
     * Addresses Flint checked as complete (customer and saved addresses, merchant, location,
     * invoice, order delivery destination, tax identity, fulfillment recipient and pickup
     * addresses) always have line1 and city, and US ones always have state and postal_code.
     * Delivery quote destinations, buyer locations and postal-code tax locations hold only what
     * was provided, such as postal_code and country.
     */
    "address"?: Address;
    /** Instructions specific to curbside handoff. maxLength: 2048. */
    "curbside_instructions"?: string;
    /** Buyer-reported arrival time for curbside or counter pickup. Format: date-time. */
    "customer_arrived_at"?: string;
    /**
     * Deadline after which an uncollected pickup should enter merchant review. Format: date-time.
     */
    "expires_at"?: string;
    /** Pickup instructions for the buyer, such as where to go on arrival. */
    "instructions"?: string;
    /** Name of the store or place where the buyer collects the order. */
    "location_name"?: string;
    /** When the recipient collected the items, in RFC3339 format. Format: date-time. */
    "picked_up_at"?: string;
    /**
     * How the buyer collects the items, such as in store or curbside. Value enum: "in_store",
     * "curbside", "locker", "other".
     */
    "pickup_mode"?: "in_store" | "curbside" | "locker" | "other" | (string & {});
    /**
     * Width of the promised pickup window, from 0 to 86400 seconds. Format: int64. minimum: 0.
     * maximum: 86400.
     */
    "pickup_window_duration_seconds"?: number;
    /**
     * Expected preparation time for restaurant and made-to-order pickup, from 0 to 86400 seconds.
     * Format: int64. minimum: 0. maximum: 86400.
     */
    "prep_time_duration_seconds"?: number;
    /** When the items became ready for pickup, in RFC3339 format. Format: date-time. */
    "ready_at"?: string;
    /** Timezone used to display the pickup window. */
    "timezone"?: string;
    /**
     * Buyer vehicle description used for curbside handoff. Omitted for a checkout session
     * credential that doesn't act for the customer the buyer verified. maxLength: 500.
     */
    "vehicle_description"?: string;
    /** End of the promised pickup window, in RFC3339 format. Format: date-time. */
    "window_end_at"?: string;
    /** Start of the promised pickup window, in RFC3339 format. Format: date-time. */
    "window_start_at"?: string;
};
/**
 * The money totals for an order or invoice: subtotal, discounts, charges, tax, requested tip, and
 * total.
 */
export type PricingAmounts = {
    /**
     * Tax added on top of prices, included in total_money. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "additive_tax_money": MoneyValue;
    /**
     * Total of the order's service charges after service-charge discounts. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "charge_money": MoneyValue;
    /**
     * Total of order and line-item discounts. Service-charge discounts, such as free shipping, are
     * not included; they reduce charge_money. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "discount_money": MoneyValue;
    /**
     * Tax already included in subtotal_money and charge_money. Informational; it is not added
     * again to total_money. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "inclusive_tax_money": MoneyValue;
    /**
     * Tip money in the total: the requested tip before payment, and settled tips net of refunds
     * after. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "requested_tip_money": MoneyValue;
    /**
     * Sum of the line items' subtotal_money: prices with modifiers, before discounts. Lines with
     * tax-inclusive prices include their tax here. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code.
     */
    "subtotal_money": MoneyValue;
    /**
     * Total tax, equal to additive_tax_money + inclusive_tax_money. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "tax_money": MoneyValue;
    /**
     * subtotal_money - discount_money + charge_money + additive_tax_money + requested_tip_money,
     * never below zero. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "total_money": MoneyValue;
};
/**
 * How to process one line of an existing return: the received quantity, inspection, decision,
 * disposition, and resolution.
 */
export type ProcessExistingReturnLineItemRequest = {
    /**
     * Start from the pinned policy proposal recomputed for approved_quantity when the line has a
     * policy evaluation and the proposal can be built. Otherwise start with
     * return_required_quantity equal to approved_quantity, allowed_resolution_types containing
     * refund, exchange, replacement, no_monetary_action, and store_credit in that order regardless
     * of whether the original payment is refundable, no automatic_resolution_type,
     * is_inspection_required false, and no receiving_location_id. Each supplied field replaces its
     * starting value; allowed_resolution_types replaces the whole list. Omit
     * automatic_resolution_type to keep its starting value, or send null to resolve manually. Then
     * fill an omitted release_timing with after_inspection when merchandise is required and
     * inspection is required, after_receipt when merchandise is required without inspection, or
     * after_approval when no merchandise is required. Validate the merged decision for quantity
     * bounds, allowed resolution types, and reachable timing and inspection requirements. A pinned
     * policy always requires override_reason when approved_quantity exceeds evaluated
     * eligible_quantity, even when no proposal can be built. With a pinned policy but no proposal,
     * other decision fields use these defaults and override_reason is otherwise optional. Example:
     * {"approved_quantity":1,"receiving_location_id":"loc_01KEZF7C005QW6QDMVP0P473FZ"}.
     */
    "decision"?: ReturnProcessDecision;
    /**
     * What was done with a returned item, such as restocked as sellable or sent for repair,
     * supplied when processing an existing return.
     */
    "disposition"?: ReturnProcessDispositionRequest;
    /** An inspection result for a returned item, supplied when processing an existing return. */
    "inspection"?: ReturnProcessInspectionRequest;
    /**
     * Whole number of units received. It must equal the line's committed return_required_quantity;
     * fractional quantities are not supported. Format: int64.
     */
    "received_quantity"?: number;
    /**
     * The resolution to apply to a returned item, such as refund or exchange, with the quantity
     * and any replacement items.
     */
    "resolution"?: ReturnProcessResolutionRequest;
    /** minLength: 1. */
    "return_line_item_id": string;
};
