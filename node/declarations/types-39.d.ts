import type { InputValue } from '../runtime.js';
import type { MeRemovePaymentMethodInput, MetadataMap } from './types-32.js';
import type { SavePaymentMethodRequestInput } from './types-46.js';
import type {
    ExpandedPaymentIntentSummary,
    ExpandedCustomerSummary,
    ExpandedOrderSummary,
    ExpandedPayoutDestinationSummary,
    ExpandedPayoutSummary
} from './types-18.js';
import type { MoneyValue, MoneyMovementListMeta, MoneyMovementBlockedReason, NextAction, ModifierSet } from './types-33.js';
import type { ResourceReference, ResponseMeta } from './types-42.js';
import type { UpdatePayoutSettingsRequestInput, UpdatePayoutDestinationRequestInput } from './types-52.js';
import type { CancelPayoutRequestInput, CategoryReference } from './types-3.js';
import type { CreatePayoutRequestInput } from './types-9.js';
import type { PaymentClientAction } from './types-37.js';
import type { Address } from './types-0.js';
import type {
    ReturnProcessDecision,
    ReturnProcessDispositionRequest,
    ReturnProcessInspectionRequest,
    ReturnProcessResolutionRequest,
    ReturnProcessDecisionInput,
    ReturnProcessDispositionRequestInput,
    ReturnProcessInspectionRequestInput,
    ReturnProcessResolutionRequestInput,
    ReturnProcessReceiptRequest,
    ReturnProcessReceiptRequestInput,
    ReturnProcessResult
} from './types-44.js';
import type { ImageAttachment } from './types-21.js';
import type { ProductVariantMatch } from './types-40.js';
import type { Dimensions } from './types-17.js';
import type { GiftCardProductConfiguration } from './types-20.js';
import type { SelectedProductOption } from './types-47.js';
import type { Weight } from './types-65.js';
export type PaymentMethodsRemoveInput = MeRemovePaymentMethodInput;
export type PaymentMethodsSaveInput = {
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link SavePaymentMethodRequestInput}. The request body for: Create a
     * payment method.
     */
    "body": InputValue<SavePaymentMethodRequestInput>;
};
/**
 * Shape $ (Value): {@link PaymentRefund}. The part of a refund returned through one payment, with
 * the amount, tip, status, and any failure reason.
 */
export type PaymentRefund = {
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
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
    /**
     * Shape $ (Value): {@link ExpandedPaymentIntentSummary} or null. Shape $.anyOf[1] (Value):
     * {@link ExpandedPaymentIntentSummary}. A payment intent's summary fields, including amount,
     * status, and capture method, returned when the payment intent is expanded. Shape $.anyOf[2]
     * (Value): null.
     */
    "payment_intent"?: ((ExpandedPaymentIntentSummary) | (null));
    /** Shape $ (Value): string. */
    "payment_intent_id"?: string;
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
};
/** Shape $ (Value): {@link PaymentReview}. A payment review requiring a merchant decision. */
export type PaymentReview = {
    /** Shape $ (Value): string or null. RFC3339 timestamp. Format: date-time. */
    "closed_at": string | null;
    /**
     * Shape $ (Value): {@link ResourceReference} or null. The credential that closed this payment
     * review. Null when Flint closed it. Shape $.anyOf[1] (Value): {@link ResourceReference}. A
     * reference to another resource by `resource_type` and `resource_id`. Shape $.anyOf[2]
     * (Value): null.
     */
    "closed_by": ((ResourceReference) | (null));
    /**
     * Shape $ (Value): string or null. Value enum: "approved", "declined", "refunded", "disputed",
     * "payment_canceled", "expired", null.
     */
    "closed_reason": "approved"
        | "declined"
        | "refunded"
        | "disputed"
        | "payment_canceled"
        | "expired"
        | null
        | (string & {})
        | null;
    /**
     * Shape $ (Value): {@link ExpandedCustomerSummary} or null. Shape $.anyOf[1] (Value): {@link
     * ExpandedCustomerSummary}. A customer's summary fields, returned in place of a customer ID
     * when the customer is expanded. Shape $.anyOf[2] (Value): null.
     */
    "customer"?: ((ExpandedCustomerSummary) | (null));
    /** Shape $ (Value): string or null. */
    "customer_id": string | null;
    /** Shape $ (Value): string or null. */
    "ip_address": string | null;
    /**
     * Shape $ (Value): {@link PaymentReviewResolutionFailure} or null. The most recent resolution
     * attempt that failed. Set when a decline's refund failed and the review reopened. Null when
     * no attempt has failed. Shape $.anyOf[1] (Value): {@link PaymentReviewResolutionFailure}. A
     * failed attempt to resolve a review by refund, with the `refund_id` and when it failed. Shape
     * $.anyOf[2] (Value): null.
     */
    "last_resolution_failure": ((PaymentReviewResolutionFailure) | (null));
    /** Shape $ (Value): string or null. */
    "matched_risk_rule_id": string | null;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "opened_at": string;
    /** Shape $ (Value): string.  Value enum: "rule". */
    "opened_reason": "rule" | (string & {});
    /**
     * Shape $ (Value): {@link ExpandedOrderSummary} or null. Shape $.anyOf[1] (Value): {@link
     * ExpandedOrderSummary}. An order's summary fields, including status, payment and refund
     * status, and pricing and settlement amounts, returned when the order is expanded. Shape
     * $.anyOf[2] (Value): null.
     */
    "order"?: ((ExpandedOrderSummary) | (null));
    /** Shape $ (Value): string or null. */
    "order_id": string | null;
    /**
     * Shape $ (Value): string. Value enum: "checkout", "payment_link", "invoice",
     * "subscription_initial", "subscription_renewal", "virtual_terminal", "api".
     */
    "payment_flow": "checkout"
        | "payment_link"
        | "invoice"
        | "subscription_initial"
        | "subscription_renewal"
        | "virtual_terminal"
        | "api"
        | (string & {});
    /**
     * Shape $ (Value): {@link ExpandedPaymentIntentSummary} or null. Shape $.anyOf[1] (Value):
     * {@link ExpandedPaymentIntentSummary}. A payment intent's summary fields, including amount,
     * status, and capture method, returned when the payment intent is expanded. Shape $.anyOf[2]
     * (Value): null.
     */
    "payment_intent"?: ((ExpandedPaymentIntentSummary) | (null));
    /** Shape $ (Value): string. */
    "payment_intent_id": string;
    /** Shape $ (Value): string. */
    "payment_review_id": string;
    /**
     * Shape $ (Value): {@link PaymentReviewPaymentSummary}. The payment details shown on a review:
     * amount, capture method, authorization expiry, card brand and last four digits, and buyer
     * email.
     */
    "payment_summary": PaymentReviewPaymentSummary;
    /** Shape $ (Value): string or null.  Value enum: "approve", "decline", "expire", null. */
    "pending_action": "approve" | "decline" | "expire" | null | (string & {}) | null;
    /** Shape $ (Value): string or null. The refund that closed this review. Null otherwise. */
    "refund_id": string | null;
    /**
     * Shape $ (Value): {@link MoneyValue} or null. Refunded amount for this review. Null when no
     * refund is recorded. Shape $.anyOf[1] (Value): {@link MoneyValue}. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code. Shape $.anyOf[2] (Value):
     * null.
     */
    "refunded_money": ((MoneyValue) | (null));
    /** Shape $ (Value): string or null. RFC3339 timestamp. Format: date-time. */
    "resolution_started_at": string | null;
    /**
     * Shape $ (Value): {@link ResourceReference} or null. The credential that started resolving
     * this payment review. Null when Flint started it. Shape $.anyOf[1] (Value): {@link
     * ResourceReference}. A reference to another resource by `resource_type` and `resource_id`.
     * Shape $.anyOf[2] (Value): null.
     */
    "resolution_started_by": ((ResourceReference) | (null));
    /**
     * Shape $ (Value): {@link PaymentReviewRisk}. The risk assessment shown on a review: a `level`
     * and, when available, a numeric `score`.
     */
    "risk": PaymentReviewRisk;
    /** Shape $ (Value): string.  Value enum: "open", "resolving", "closed". */
    "status": "open" | "resolving" | "closed" | (string & {});
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "updated_at": string;
};
/** Shape $ (Value): {@link PaymentReviewListResponse}. A page of `PaymentReview` objects. */
export type PaymentReviewListResponse = {
    /**
     * Shape $ (Value): Array of {@link PaymentReview}. Shape $[] (Value): {@link PaymentReview}. A
     * payment review requiring a merchant decision.
     */
    "data": Array<PaymentReview>;
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
 * Shape $ (Value): {@link PaymentReviewPaymentSummary}. The payment details shown on a review:
 * amount, capture method, authorization expiry, card brand and last four digits, and buyer email.
 */
export type PaymentReviewPaymentSummary = {
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
    /** Shape $ (Value): string or null. RFC3339 timestamp. Format: date-time. */
    "authorization_expires_at": string | null;
    /** Shape $ (Value): string.  Value enum: "automatic", "manual". */
    "capture_method": "automatic" | "manual" | (string & {});
    /** Shape $ (Value): string. */
    "email": string;
    /** Shape $ (Value): string. */
    "last4": string;
    /**
     * Shape $ (Value): string. Value enum: "amex", "discover", "diners", "jcb", "mastercard",
     * "unionpay", "visa", "unknown".
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
/**
 * Shape $ (Value): {@link PaymentReviewResolutionFailure}. A failed attempt to resolve a review by
 * refund, with the `refund_id` and when it failed.
 */
export type PaymentReviewResolutionFailure = {
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "failed_at": string;
    /** Shape $ (Value): string. */
    "refund_id": string;
};
/** Shape $ (Value): {@link PaymentReviewResponse}. A response containing `PaymentReview` data. */
export type PaymentReviewResponse = {
    /** Shape $ (Value): {@link PaymentReview}. A payment review requiring a merchant decision. */
    "data": PaymentReview;
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
 * Shape $ (Value): {@link PaymentReviewRisk}. The risk assessment shown on a review: a `level`
 * and, when available, a numeric `score`.
 */
export type PaymentReviewRisk = {
    /** Shape $ (Value): string.  Value enum: "normal", "elevated", "highest", "not_assessed". */
    "level": "normal" | "elevated" | "highest" | "not_assessed" | (string & {});
    /**
     * Shape $ (Value): integer. Fraud score from the card processor's screening, from 0 to 99.
     * Higher means riskier. Absent when no score is available, which isn't a score of 0. Format:
     * int32. minimum: 0. maximum: 99.
     */
    "score"?: number;
};
/**
 * Shape $ (Value): {@link PaymentRisk}. The risk assessment for a payment intent, with its risk
 * level, score, outcome, and any matched rule or review.
 */
export type PaymentRisk = {
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "evaluated_at": string;
    /** Shape $ (Value): string.  Value enum: "normal", "elevated", "highest", "not_assessed". */
    "level": "normal" | "elevated" | "highest" | "not_assessed" | (string & {});
    /** Shape $ (Value): string. */
    "matched_risk_rule_id"?: string;
    /**
     * Shape $ (Value): string or null. Value enum: "authorized", "manual_review", "blocked",
     * "issuer_declined", "invalid", null.
     */
    "outcome"?: "authorized"
        | "manual_review"
        | "blocked"
        | "issuer_declined"
        | "invalid"
        | null
        | (string & {})
        | null;
    /**
     * Shape $ (Value): string or null. Value enum: "highest_risk", "elevated_risk",
     * "low_authorization_probability", "risk_rule", "risk_policy", null.
     */
    "outcome_reason"?: "highest_risk"
        | "elevated_risk"
        | "low_authorization_probability"
        | "risk_rule"
        | "risk_policy"
        | null
        | (string & {})
        | null;
    /** Shape $ (Value): string. */
    "payment_review_id"?: string;
    /**
     * Shape $ (Value): integer. Fraud score from the card processor's screening, from 0 to 99.
     * Higher means riskier. Absent when no score is available, which isn't a score of 0. Format:
     * int32. minimum: 0. maximum: 99.
     */
    "score"?: number;
    /** Shape $ (Value): string. */
    "statement": string;
};
/**
 * Shape $ (Value): {@link PaymentSourceAchDebitSummary}. Display details for a bank account
 * payment source: account type, bank name, and last four digits.
 */
export type PaymentSourceAchDebitSummary = {
    /** Shape $ (Value): string.  Value enum: "checking", "savings", "other". */
    "account_type"?: "checking" | "savings" | "other" | (string & {});
    /** Shape $ (Value): string. */
    "bank_name"?: string;
    /** Shape $ (Value): string. */
    "last4"?: string;
};
/**
 * Shape $ (Value): {@link PaymentSourceCardSummary}. Display details for a card payment source:
 * brand, last four digits, and payment method ID.
 */
export type PaymentSourceCardSummary = {
    /**
     * Shape $ (Value): string. Value enum: "visa", "mastercard", "amex", "discover", "diners",
     * "jcb", "unionpay".
     */
    "brand"?: "visa" | "mastercard" | "amex" | "discover" | "diners" | "jcb" | "unionpay" | (string & {});
    /** Shape $ (Value): string. */
    "last4"?: string;
    /** Shape $ (Value): string. */
    "payment_method_id"?: string;
};
/**
 * Shape $ (Value): {@link PaymentSourceCredential}. The credential you provide to pay an order: a
 * payment source token, a saved payment method ID, or a Stripe confirmation token.
 */
export type PaymentSourceCredential = ((PaymentSourceCredentialToken)
    | (PaymentSourceCredentialPaymentMethod)
    | (PaymentSourceCredentialStripeConfirmationToken)
    | (Record<string, unknown>));
/**
 * Shape $ (Value): {@link PaymentSourceCredentialInput}. The credential you provide to pay an
 * order: a payment source token, a saved payment method ID, or a Stripe confirmation token.
 */
export type PaymentSourceCredentialInput = ((PaymentSourceCredentialTokenInput)
    | (PaymentSourceCredentialPaymentMethodInput)
    | (PaymentSourceCredentialStripeConfirmationTokenInput));
/**
 * Shape $ (Value): {@link PaymentSourceCredentialPaymentMethod}. The `payment_method` variant of
 * `PaymentSourceCredential`.
 */
export type PaymentSourceCredentialPaymentMethod = {
    /** Shape $ (Value): string.  Value enum: "payment_method". */
    "credential_type": "payment_method" | (string & {});
    /**
     * Shape $ (Value): string. Saved Flint payment method ID belonging to the customer making this
     * payment. minLength: 1.
     */
    "payment_method_id": string;
};
/**
 * Shape $ (Value): {@link PaymentSourceCredentialPaymentMethodInput}. The `payment_method` variant
 * of `PaymentSourceCredential`.
 */
export type PaymentSourceCredentialPaymentMethodInput = {
    /** Shape $ (Value): string.  Value enum: "payment_method". */
    "credential_type": "payment_method";
    /**
     * Shape $ (Value): string. Saved Flint payment method ID belonging to the customer making this
     * payment. minLength: 1.
     */
    "payment_method_id": string;
};
/**
 * Shape $ (Value): {@link PaymentSourceCredentialStripeConfirmationToken}. The
 * `stripe_confirmation_token` variant of `PaymentSourceCredential`.
 */
export type PaymentSourceCredentialStripeConfirmationToken = {
    /** Shape $ (Value): string.  Value enum: "stripe_confirmation_token". */
    "credential_type": "stripe_confirmation_token" | (string & {});
    /**
     * Shape $ (Value): object. Stripe credential collected for this payment. Shape
     * $.confirmation_token (Required): string. Stripe confirmation token you created with
     * Stripe.js from `payment_collection.stripe`. minLength: 1.
     */
    "stripe": {
        /**
         * Shape $ (Value): string. Stripe confirmation token you created with Stripe.js from
         * `payment_collection.stripe`. minLength: 1.
         */
        "confirmation_token": string;
    };
};
/**
 * Shape $ (Value): {@link PaymentSourceCredentialStripeConfirmationTokenInput}. The
 * `stripe_confirmation_token` variant of `PaymentSourceCredential`.
 */
export type PaymentSourceCredentialStripeConfirmationTokenInput = {
    /** Shape $ (Value): string.  Value enum: "stripe_confirmation_token". */
    "credential_type": "stripe_confirmation_token";
    /**
     * Shape $ (Value): object. Stripe credential collected for this payment. Shape
     * $.confirmation_token (Required): string. Stripe confirmation token you created with
     * Stripe.js from `payment_collection.stripe`. minLength: 1.
     */
    "stripe": {
        /**
         * Shape $ (Value): string. Stripe confirmation token you created with Stripe.js from
         * `payment_collection.stripe`. minLength: 1.
         */
        "confirmation_token": string;
    };
};
/**
 * Shape $ (Value): {@link PaymentSourceCredentialToken}. The `token` variant of
 * `PaymentSourceCredential`.
 */
export type PaymentSourceCredentialToken = {
    /** Shape $ (Value): string.  Value enum: "token". */
    "credential_type": "token" | (string & {});
    /** Shape $ (Value): string. Opaque processor or browser payment source token. minLength: 1. */
    "token": string;
};
/**
 * Shape $ (Value): {@link PaymentSourceCredentialTokenInput}. The `token` variant of
 * `PaymentSourceCredential`.
 */
export type PaymentSourceCredentialTokenInput = {
    /** Shape $ (Value): string.  Value enum: "token". */
    "credential_type": "token";
    /** Shape $ (Value): string. Opaque processor or browser payment source token. minLength: 1. */
    "token": string;
};
/**
 * Shape $ (Value): {@link PaymentSourceSummary}. A summary of the payment source used for a
 * payment, by funding-method family, with card or bank account display details.
 */
export type PaymentSourceSummary = {
    /**
     * Shape $ (Value): {@link PaymentSourceAchDebitSummary}. Display details for a bank account
     * payment source: account type, bank name, and last four digits.
     */
    "ach_debit"?: PaymentSourceAchDebitSummary;
    /**
     * Shape $ (Value): {@link PaymentSourceCardSummary}. Display details for a card payment
     * source: brand, last four digits, and payment method ID.
     */
    "card"?: PaymentSourceCardSummary;
    /**
     * Shape $ (Value): string. Funding-method family. Wallet payment options use card because
     * their underlying funding source is a card. Value enum: "card", "ach_debit", "affirm".
     */
    "type": "card" | "ach_debit" | "affirm" | (string & {});
};
/**
 * Shape $ (Value): {@link PaymentVolumeBucket}. The half-open period [period_start_at,
 * period_end_at) includes its start and excludes its end. Amounts and payments_count use currency;
 * customer and subscription counts span currencies.
 */
export type PaymentVolumeBucket = {
    /**
     * Shape $ (Value): integer string. Succeeded payments selected by payment created_at within
     * this bucket, restricted to the response currency. The half-open period [period_start_at,
     * period_end_at) includes its start and excludes its end. Amounts and payments_count use
     * currency; customer and subscription counts span currencies. Use an integer string (decimal
     * digits), not a floating-point number. Format: int64.
     */
    "payments_count": `${bigint}`;
    /**
     * Shape $ (Value): string. Exclusive bucket end instant, clipped to the resolved period. The
     * half-open period [period_start_at, period_end_at) includes its start and excludes its end.
     * Amounts and payments_count use currency; customer and subscription counts span currencies.
     * Format: date-time.
     */
    "period_end_at": string;
    /**
     * Shape $ (Value): string. Inclusive start instant. The half-open period [period_start_at,
     * period_end_at) includes its start and excludes its end. Amounts and payments_count use
     * currency; customer and subscription counts span currencies. Format: date-time.
     */
    "period_start_at": string;
    /**
     * Shape $ (Value): {@link MoneyValue}. Succeeded payment amounts selected by payment
     * created_at within this bucket, in the response currency. The half-open period
     * [period_start_at, period_end_at) includes its start and excludes its end. Amounts and
     * payments_count use currency; customer and subscription counts span currencies. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "volume_money": MoneyValue;
};
/**
 * Shape $ (Value): {@link PaymentVolumeTimeseries}. The half-open period [period_start_at,
 * period_end_at) includes its start and excludes its end. Amounts and payments_count use currency;
 * customer and subscription counts span currencies.
 */
export type PaymentVolumeTimeseries = {
    /**
     * Shape $ (Value): Array of {@link PaymentVolumeBucket}. Payment created_at buckets clipped to
     * the period, including empty buckets. Repeated local hours produce two buckets; skipped hours
     * and days produce none. The half-open period [period_start_at, period_end_at) includes its
     * start and excludes its end. Amounts and payments_count use currency; customer and
     * subscription counts span currencies. Shape $[] (Value): {@link PaymentVolumeBucket}. The
     * half-open period [period_start_at, period_end_at) includes its start and excludes its end.
     * Amounts and payments_count use currency; customer and subscription counts span currencies.
     */
    "buckets": Array<PaymentVolumeBucket>;
    /**
     * Shape $ (Value): Array of string. Currencies of succeeded payments selected by payment
     * created_at or counted refunds selected by refund created_at in the period, regardless of the
     * currency filter. Empty when neither has rows. The half-open period [period_start_at,
     * period_end_at) includes its start and excludes its end. Amounts and payments_count use
     * currency; customer and subscription counts span currencies. Shape $[] (Value): string.
     */
    "currencies": Array<string>;
    /**
     * Shape $ (Value): string. ISO 4217 currency for amounts and payment counts. Defaults to the
     * merchant's default currency. The half-open period [period_start_at, period_end_at) includes
     * its start and excludes its end. Amounts and payments_count use currency; customer and
     * subscription counts span currencies. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
     * Example: "USD".
     */
    "currency": string;
    /**
     * Shape $ (Value): string. Local bucket size: hour, day, week starting Monday, or month.
     * Defaults to day. The half-open period [period_start_at, period_end_at) includes its start
     * and excludes its end. Amounts and payments_count use currency; customer and subscription
     * counts span currencies. Value enum: "hour", "day", "week", "month".
     */
    "granularity": "hour" | "day" | "week" | "month" | (string & {});
    /**
     * Shape $ (Value): string. Exclusive resolved end instant. Omitted or future request ends
     * resolve to the request time truncated to the second. The half-open period [period_start_at,
     * period_end_at) includes its start and excludes its end. Amounts and payments_count use
     * currency; customer and subscription counts span currencies. Format: date-time.
     */
    "period_end_at": string;
    /**
     * Shape $ (Value): string. Inclusive start instant. The half-open period [period_start_at,
     * period_end_at) includes its start and excludes its end. Amounts and payments_count use
     * currency; customer and subscription counts span currencies. Format: date-time.
     */
    "period_start_at": string;
    /**
     * Shape $ (Value): string. IANA timezone used only for local bucket boundaries. Defaults to
     * UTC. The half-open period [period_start_at, period_end_at) includes its start and excludes
     * its end. Amounts and payments_count use currency; customer and subscription counts span
     * currencies.
     */
    "timezone": string;
};
/**
 * Shape $ (Value): {@link PaymentVolumeTimeseriesResponse}. A response containing
 * `PaymentVolumeTimeseries` data.
 */
export type PaymentVolumeTimeseriesResponse = {
    /**
     * Shape $ (Value): {@link PaymentVolumeTimeseries}. The half-open period [period_start_at,
     * period_end_at) includes its start and excludes its end. Amounts and payments_count use
     * currency; customer and subscription counts span currencies.
     */
    "data": PaymentVolumeTimeseries;
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
/** Shape $ (Value): {@link Payout}. Funds sent from a merchant balance to a payout destination. */
export type Payout = {
    /**
     * Shape $ (Value): {@link MoneyValue}. Amount sent to your bank. Always positive. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
    /**
     * Shape $ (Value): string. Calendar date the bank is expected to receive the funds, in
     * YYYY-MM-DD format using the UTC date of the expected arrival. Format: date.
     */
    "arrival_date"?: string;
    /**
     * Shape $ (Value): string. Balance source this payout draws from. Flint chooses the source
     * when balance_source_type is omitted at create. Clients must accept source types added in
     * future releases. Value enum: "card", "bank_account".
     */
    "balance_source_type": "card" | "bank_account" | (string & {});
    /** Shape $ (Value): string. When the payout was created. Format: date-time. */
    "created_at": string;
    /**
     * Shape $ (Value): string. ISO 4217 currency code. minLength: 3. maxLength: 3. pattern:
     * ^[A-Z]{3}$. Example: "USD".
     */
    "currency": string;
    /**
     * Shape $ (Value): string. Description sent when the payout was created. Absent when there is
     * none.
     */
    "description"?: string;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): string. Flint-normalized payout failure code. Unknown provider values are
     * returned as payout_failed. Value enum: "account_closed", "account_frozen",
     * "bank_account_restricted", "bank_ownership_changed", "could_not_process",
     * "debit_not_authorized", "declined", "insufficient_funds", "invalid_account_number",
     * "incorrect_account_holder_name", "incorrect_account_holder_address",
     * "incorrect_account_holder_tax_id", "invalid_currency", "no_account", "unsupported_card",
     * "payout_failed".
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
     * Shape $ (Value): string. Flint-authored payout failure message. This is stable explanatory
     * text, not a raw provider message.
     */
    "failure_message"?: string;
    /**
     * Shape $ (Value): string. Whether the payout fee is estimated or final. not_applicable means
     * no applicable fee status is known, including unmapped fee states. Value enum: "estimated",
     * "final", "not_applicable".
     */
    "fee_amount_status": "estimated" | "final" | "not_applicable" | (string & {});
    /**
     * Shape $ (Value): {@link MoneyValue} or null. Fee for this payout, never negative. Payouts
     * carry no fee, so this is 0 once your processor records the payout, and null until then.
     * Shape $.anyOf[1] (Value): {@link MoneyValue}. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code. Shape $.anyOf[2] (Value): null.
     */
    "fee_money": ((MoneyValue) | (null));
    /**
     * Shape $ (Value): string. What started the payout. A payout imported from your processor
     * follows the processor: scheduled when it sent the payout automatically, otherwise manual.
     * Only scheduled payouts list their balance transactions through GET
     * /v1/balance-transactions?payout_id=; other payouts return 409 with reason not_itemized.
     * Unmapped sources are returned as other. Value enum: "manual", "scheduled", "platform",
     * "other".
     */
    "initiated_by": "manual" | "scheduled" | "platform" | "other" | (string & {});
    /** Shape $ (Value): string. Merchant receiving the payout. */
    "merchant_id": string;
    /**
     * Shape $ (Value): {@link MetadataMap}. Caller-owned metadata. Values can't be empty strings.
     * Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written
     * through the public API. Caller-owned key-value data stored on a resource. Keys starting with
     * flint_ are reserved for Flint and are not returned. Writes follow the limits on
     * MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them.
     */
    "metadata"?: MetadataMap;
    /**
     * Shape $ (Value): string. Payout method. instant can appear on imported payouts; unmapped
     * methods are returned as other. Value enum: "standard", "instant", "other".
     */
    "method": "standard" | "instant" | "other" | (string & {});
    /**
     * Shape $ (Value): {@link MoneyValue} or null. Signed effect of this payout on your Flint
     * balance. It is negative because the payout takes money out: a 25000 payout with no fee has
     * net_money -25000. Null until your processor records the payout. Shape $.anyOf[1] (Value):
     * {@link MoneyValue}. Signed monetary amount represented as integer minor units plus an ISO
     * 4217 currency code. Shape $.anyOf[2] (Value): null.
     */
    "net_money": ((MoneyValue) | (null));
    /**
     * Shape $ (Value): {@link ExpandedPayoutSummary} or null. The payout this one reverses,
     * inlined when you request expand=original_payout. null when expanded and original_payout_id
     * is absent. Shape $.anyOf[1] (Value): {@link ExpandedPayoutSummary}. A payout's summary
     * fields, including amount, method, status, and arrival date, returned when the payout is
     * expanded. Shape $.anyOf[2] (Value): null.
     */
    "original_payout"?: ((ExpandedPayoutSummary) | (null));
    /**
     * Shape $ (Value): string. On a payout that reverses another payout, the payout it reverses.
     * Present only when Flint has the matching original payout. A payout has at most one of
     * original_payout_id and reversed_by_payout_id.
     */
    "original_payout_id"?: string;
    /**
     * Shape $ (Value): {@link ExpandedPayoutDestinationSummary} or null. The payout destination,
     * inlined when you request expand=payout_destination. null when expanded and
     * payout_destination_id is absent. Shape $.anyOf[1] (Value): {@link
     * ExpandedPayoutDestinationSummary}. A payout destination's summary fields, such as type, bank
     * name, last four digits, and status, returned when the destination is expanded. Shape
     * $.anyOf[2] (Value): null.
     */
    "payout_destination"?: ((ExpandedPayoutDestinationSummary) | (null));
    /**
     * Shape $ (Value): string. Bank account or debit card receiving the payout. Absent when Flint
     * can't match your processor's destination to a payout destination.
     */
    "payout_destination_id"?: string;
    /** Shape $ (Value): string. Stable identifier of the payout. */
    "payout_id": string;
    /**
     * Shape $ (Value): string. Whether Flint has pulled a paid payout back from your bank: none
     * until the reversal completes, then reversed. A payout_reversal balance transaction returns
     * the money, and status stays paid. Value enum: "none", "reversed".
     */
    "reversal_status": "none" | "reversed" | (string & {});
    /**
     * Shape $ (Value): {@link ExpandedPayoutSummary} or null. The payout reversing this one,
     * inlined when you request expand=reversed_by_payout. null when expanded and
     * reversed_by_payout_id is absent. Shape $.anyOf[1] (Value): {@link ExpandedPayoutSummary}. A
     * payout's summary fields, including amount, method, status, and arrival date, returned when
     * the payout is expanded. Shape $.anyOf[2] (Value): null.
     */
    "reversed_by_payout"?: ((ExpandedPayoutSummary) | (null));
    /**
     * Shape $ (Value): string. The separate payout reversing this one, when Flint has the matching
     * payout. Its presence does not mean the reversal has completed; read reversal_status. A
     * payout has at most one of original_payout_id and reversed_by_payout_id.
     */
    "reversed_by_payout_id"?: string;
    /**
     * Shape $ (Value): string. Text shown on your bank statement for the deposit, when one was
     * set.
     */
    "statement_descriptor"?: string;
    /**
     * Shape $ (Value): string. Where the payout is: pending until it is sent, in_transit on its
     * way to your bank, then paid or failed. A paid payout can still become failed if the bank
     * returns the deposit, and canceled means a manual payout was canceled while pending. Value
     * enum: "pending", "in_transit", "paid", "failed", "canceled".
     */
    "status": "pending" | "in_transit" | "paid" | "failed" | "canceled" | (string & {});
    /**
     * Shape $ (Value): {@link PayoutTraceID}. The bank's trace number for the deposit, which your
     * bank can use to locate a late deposit. Its status says whether the number is pending,
     * available, or unsupported, and value holds the number when Flint has it. Absent when Flint
     * has no trace information. A payout's bank trace ID, with whether it is pending, available,
     * or unsupported.
     */
    "trace_id"?: PayoutTraceID;
    /** Shape $ (Value): string. When the payout last changed. Format: date-time. */
    "updated_at": string;
};
/** Shape $ (Value): {@link PayoutDestination}. The account that receives merchant payouts. */
export type PayoutDestination = {
    /**
     * Shape $ (Value): Array of string. Payout methods available through Flint for this
     * destination. Only standard is currently available. [] enum: "standard". Shape $[] (Value):
     * string. Value enum: "standard".
     */
    "available_payout_methods": Array<"standard" | (string & {})>;
    /** Shape $ (Value): string. Name of the bank, when your processor reports it. */
    "bank_name"?: string;
    /**
     * Shape $ (Value): string. ISO 3166-1 alpha-2 country code. minLength: 2. maxLength: 2.
     * pattern: ^[A-Z]{2}$. Example: "US".
     */
    "country"?: string;
    /** Shape $ (Value): string. When the destination was added. Format: date-time. */
    "created_at": string;
    /**
     * Shape $ (Value): string. ISO 4217 currency code. minLength: 3. maxLength: 3. pattern:
     * ^[A-Z]{3}$. Example: "USD".
     */
    "currency": string;
    /**
     * Shape $ (Value): boolean. Whether this is the default destination for its currency.
     * Scheduled payouts, and payouts created without payout_destination_id, go to the default, and
     * only an active destination can be it.
     */
    "default_for_currency": boolean;
    /**
     * Shape $ (Value): string. When the destination was last disabled or archived. Absent if it
     * never was. Format: date-time.
     */
    "disabled_at"?: string;
    /**
     * Shape $ (Value): string. Flint-normalized reason the payout destination cannot currently be
     * used. Unknown provider/backend values are returned as destination_unavailable. Value enum:
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
    /** Shape $ (Value): string. Last four digits of the account or card number. */
    "last4"?: string;
    /** Shape $ (Value): string. Merchant that owns the destination. */
    "merchant_id": string;
    /**
     * Shape $ (Value): {@link MetadataMap}. Caller-owned metadata. Values can't be empty strings.
     * Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written
     * through the public API. Caller-owned key-value data stored on a resource. Keys starting with
     * flint_ are reserved for Flint and are not returned. Writes follow the limits on
     * MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them.
     */
    "metadata"?: MetadataMap;
    /** Shape $ (Value): string. Stable identifier of the payout destination. */
    "payout_destination_id": string;
    /**
     * Shape $ (Value): string. Current status. Archived: deleted, and still readable by ID. Value
     * enum: "pending", "active", "verification_required", "disabled", "archived", "failed".
     */
    "status": "pending" | "active" | "verification_required" | "disabled" | "archived" | "failed" | (string & {});
    /**
     * Shape $ (Value): string. When Flint last recorded the destination's status. Format:
     * date-time.
     */
    "status_updated_at"?: string;
    /**
     * Shape $ (Value): string. Destination type. Unmapped destination types are returned as other.
     * Value enum: "bank_account", "debit_card", "other".
     */
    "type": "bank_account" | "debit_card" | "other" | (string & {});
    /** Shape $ (Value): string. When the destination last changed. Format: date-time. */
    "updated_at": string;
    /**
     * Shape $ (Value): integer string. Persisted version of this resource's owned state. Expanded
     * resources and external observations can change independently. Use an integer string (decimal
     * digits), not a floating-point number. Format: uint64. minimum: 1.
     */
    "version": `${bigint}`;
};
/**
 * Shape $ (Value): {@link PayoutDestinationListResponse}. A page of `PayoutDestination` objects.
 */
export type PayoutDestinationListResponse = {
    /**
     * Shape $ (Value): Array of {@link PayoutDestination}. Shape $[] (Value): {@link
     * PayoutDestination}. The account that receives merchant payouts.
     */
    "data": Array<PayoutDestination>;
    /**
     * Shape $ (Value): {@link MoneyMovementListMeta}. Response metadata for money movement lists,
     * including request and trace IDs, warnings, and the state of the available history.
     */
    "meta"?: MoneyMovementListMeta;
    /** Shape $ (Value): string. */
    "next_page_token"?: string;
    /**
     * Shape $ (Value): string. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/**
 * Shape $ (Value): {@link PayoutDestinationResponse}. A response containing `PayoutDestination`
 * data.
 */
export type PayoutDestinationResponse = {
    /** Shape $ (Value): {@link PayoutDestination}. The account that receives merchant payouts. */
    "data": PayoutDestination;
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
/** Shape $ (Value): {@link PayoutListResponse}. A page of `Payout` objects. */
export type PayoutListResponse = {
    /**
     * Shape $ (Value): Array of {@link Payout}. Shape $[] (Value): {@link Payout}. Funds sent from
     * a merchant balance to a payout destination.
     */
    "data": Array<Payout>;
    /**
     * Shape $ (Value): {@link MoneyMovementListMeta}. Response metadata for money movement lists,
     * including request and trace IDs, warnings, and the state of the available history.
     */
    "meta"?: MoneyMovementListMeta;
    /** Shape $ (Value): string. */
    "next_page_token"?: string;
    /**
     * Shape $ (Value): string. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/** Shape $ (Value): {@link PayoutResponse}. A response containing `Payout` data. */
export type PayoutResponse = {
    /**
     * Shape $ (Value): {@link Payout}. Funds sent from a merchant balance to a payout destination.
     */
    "data": Payout;
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
/** Shape $ (Value): {@link PayoutSettings}. The merchant's payout schedule and preferences. */
export type PayoutSettings = {
    /**
     * Shape $ (Value): Array of {@link MoneyMovementBlockedReason}. Why payouts can't run. Empty
     * when nothing blocks them. Shape $[] (Value): {@link MoneyMovementBlockedReason}. Why a money
     * movement action is blocked, with an error code, a message, next steps, and who can resolve
     * it.
     */
    "blocked_reasons": Array<MoneyMovementBlockedReason>;
    /**
     * Shape $ (Value): string or null. When Flint stored the payout settings record, as an RFC
     * 3339 UTC instant at second precision. Null when no stored settings record exists. Format:
     * date-time.
     */
    "created_at": string | null;
    /**
     * Shape $ (Value): Map of string. Default payout destination for each currency, as a map from
     * currency code to payout_destination_id. Read-only: change defaults in the payouts embedded
     * component. Shape $.* (Value): string.
     */
    "default_payout_destinations"?: Record<string, string>;
    /**
     * Shape $ (Value): integer. Days a payment stays pending before its funds become available to
     * pay out. Format: int32.
     */
    "delay_days": number;
    /**
     * Shape $ (Value): integer. Delay in days you set in place of the account's default, 0 through
     * 31. Absent when none is set. Format: int32.
     */
    "delay_days_override"?: number;
    /**
     * Shape $ (Value): string. Payout schedule interval. Unmapped intervals are returned as other.
     * Value enum: "manual", "daily", "weekly", "monthly", "other".
     */
    "interval": "manual" | "daily" | "weekly" | "monthly" | "other" | (string & {});
    /** Shape $ (Value): string. Merchant these settings belong to. */
    "merchant_id": string;
    /**
     * Shape $ (Value): Map of {@link MoneyValue}. Amount kept in your balance instead of paid out,
     * keyed by currency code. Absent when no minimum is set. Shape $.* (Value): {@link
     * MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code.
     */
    "minimum_balance_by_currency"?: Record<string, MoneyValue>;
    /**
     * Shape $ (Value): Array of integer. Days of the month, 1 through 31, on which monthly payouts
     * are sent. Shape $[] (Value): integer. Format: int32.
     */
    "monthly_payout_days": Array<number>;
    /**
     * Shape $ (Value): Array of {@link NextAction}. Steps that would let payouts run, when Flint
     * has one to suggest. Empty otherwise. Shape $[] (Value): {@link NextAction}. A suggested next
     * step for resolving an error, warning, or blocked state, such as the API operation to call or
     * the scope it needs.
     */
    "next_actions": Array<NextAction>;
    /** Shape $ (Value): string. Stable identifier of your payout settings. */
    "payout_settings_id": string;
    /**
     * Shape $ (Value): string. Text shown on your bank statement for payouts. Absent when none is
     * set.
     */
    "statement_descriptor"?: string;
    /**
     * Shape $ (Value): string. Whether payouts can run: enabled, disabled, blocked, or pending.
     * When it isn't enabled, blocked_reasons says why and next_actions lists any steps Flint can
     * suggest. Value enum: "enabled", "disabled", "blocked", "pending".
     */
    "status": "enabled" | "disabled" | "blocked" | "pending" | (string & {});
    /**
     * Shape $ (Value): string or null. When the stored payout settings record was last updated, as
     * an RFC 3339 UTC instant at second precision. Without a stored record, this is the provider's
     * update time when supplied, otherwise null. Format: date-time.
     */
    "updated_at": string | null;
    /**
     * Shape $ (Value): integer string. Persisted version of this resource's owned state. Expanded
     * resources and external observations can change independently. Use an integer string (decimal
     * digits), not a floating-point number. Format: uint64. minimum: 1.
     */
    "version": `${bigint}`;
    /**
     * Shape $ (Value): Array of string. Days of the week weekly payouts are sent. Accounts set up
     * outside Flint can report saturday or sunday; when you change the schedule, Flint accepts
     * monday through friday. [] enum: "monday", "tuesday", "wednesday", "thursday", "friday",
     * "saturday", "sunday". Shape $[] (Value): string. Value enum: "monday", "tuesday",
     * "wednesday", "thursday", "friday", "saturday", "sunday".
     */
    "weekly_payout_days": Array<"monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday" | "sunday" | (string & {})>;
};
export type PayoutSettingsDeletePayoutDestinationInput = {
    /** Shape $ (Value): string. */
    "payout_destination_id": InputValue<string>;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: InputValue<`${bigint}` | bigint>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
};
export type PayoutSettingsGetInput = {};
export type PayoutSettingsGetPayoutDestinationInput = {
    /** Shape $ (Value): string. */
    "payout_destination_id": InputValue<string>;
};
export type PayoutSettingsListPayoutDestinationsInput = {
    /**
     * Shape $ (Value): string. ISO 4217 currency code. minLength: 3. maxLength: 3. pattern:
     * ^[A-Z]{3}$. Example: "USD".
     */
    "currency"?: InputValue<string>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "bank_account", "debit_card". Shape
     * $[] (Value): string. Value enum: "bank_account", "debit_card".
     */
    "type"?: InputValue<Array<"bank_account" | "debit_card">>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "pending", "active",
     * "verification_required", "disabled", "archived", "failed". Shape $[] (Value): string. Value
     * enum: "pending", "active", "verification_required", "disabled", "archived", "failed".
     */
    "status"?: InputValue<Array<"pending" | "active" | "verification_required" | "disabled" | "archived" | "failed">>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "standard". Shape $[] (Value):
     * string. Value enum: "standard".
     */
    "available_payout_methods"?: InputValue<Array<"standard">>;
    /** Shape $ (Value): boolean. */
    "default_for_currency"?: InputValue<boolean>;
    /** Shape $ (Value): integer. minimum: 1. maximum: 100. Default: 20. */
    "page_size"?: InputValue<number>;
    /** Shape $ (Value): string. */
    "page_token"?: InputValue<string>;
};
/** Shape $ (Value): {@link PayoutSettingsResponse}. A response containing `PayoutSettings` data. */
export type PayoutSettingsResponse = {
    /** Shape $ (Value): {@link PayoutSettings}. The merchant's payout schedule and preferences. */
    "data": PayoutSettings;
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
export type PayoutSettingsUpdateInput = {
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link UpdatePayoutSettingsRequestInput}. The request body for: Update
     * payout settings.
     */
    "body": InputValue<UpdatePayoutSettingsRequestInput>;
};
export type PayoutSettingsUpdatePayoutDestinationInput = {
    /** Shape $ (Value): string. */
    "payout_destination_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link UpdatePayoutDestinationRequestInput}. The request body for: Update
     * payout destination metadata.
     */
    "body": InputValue<UpdatePayoutDestinationRequestInput>;
};
/**
 * Shape $ (Value): {@link PayoutTraceID}. A payout's bank trace ID, with whether it is pending,
 * available, or unsupported.
 */
export type PayoutTraceID = {
    /**
     * Shape $ (Value): string. Whether a bank trace ID is available. Unmapped trace states are
     * returned as unsupported. Value enum: "pending", "available", "unsupported".
     */
    "status": "pending" | "available" | "unsupported" | (string & {});
    /** Shape $ (Value): string. The bank's trace number for the deposit, when Flint has it. */
    "value"?: string;
};
export type PayoutsCancelInput = {
    /** Shape $ (Value): string. */
    "payout_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /** Shape $ (Value): {@link CancelPayoutRequestInput}. The request body for: Cancel a payout. */
    "body"?: InputValue<CancelPayoutRequestInput>;
};
export type PayoutsCreateInput = {
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /** Shape $ (Value): {@link CreatePayoutRequestInput}. The request body for: Create a payout. */
    "body": InputValue<CreatePayoutRequestInput>;
};
export type PayoutsGetInput = {
    /** Shape $ (Value): string. */
    "payout_id": InputValue<string>;
    /**
     * Shape $ (Value): Array of string. [] enum: "original_payout", "payout_destination",
     * "reversed_by_payout". Shape $[] (Value): string. Value enum: "original_payout",
     * "payout_destination", "reversed_by_payout".
     */
    "expand"?: InputValue<Array<"original_payout" | "payout_destination" | "reversed_by_payout">>;
};
export type PayoutsListInput = {
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "idempotency_key"?: InputValue<string>;
    /**
     * Shape $ (Value): string. ISO 4217 currency code. minLength: 3. maxLength: 3. pattern:
     * ^[A-Z]{3}$. Example: "USD".
     */
    "currency"?: InputValue<string>;
    /**
     * Shape $ (Value): Array of string. [] enum: "original_payout", "payout_destination",
     * "reversed_by_payout". Shape $[] (Value): string. Value enum: "original_payout",
     * "payout_destination", "reversed_by_payout".
     */
    "expand"?: InputValue<Array<"original_payout" | "payout_destination" | "reversed_by_payout">>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "standard", "instant", "other".
     * Shape $[] (Value): string. Value enum: "standard", "instant", "other".
     */
    "method"?: InputValue<Array<"standard" | "instant" | "other">>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "card", "bank_account". Shape $[]
     * (Value): string. Value enum: "card", "bank_account".
     */
    "balance_source_type"?: InputValue<Array<"card" | "bank_account">>;
    /** Shape $ (Value): string. */
    "payout_destination_id"?: InputValue<string>;
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "external_reference_id"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "query"?: InputValue<string>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "pending", "in_transit", "paid",
     * "failed", "canceled". Shape $[] (Value): string. Value enum: "pending", "in_transit",
     * "paid", "failed", "canceled".
     */
    "status"?: InputValue<Array<"pending" | "in_transit" | "paid" | "failed" | "canceled">>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date. */
    "arrival_date_from"?: InputValue<string>;
    /** Shape $ (Value): string. Format: date. */
    "arrival_date_to"?: InputValue<string>;
    /** Shape $ (Value): integer. minimum: 1. maximum: 100. Default: 20. */
    "page_size"?: InputValue<number>;
    /** Shape $ (Value): string. */
    "page_token"?: InputValue<string>;
};
/**
 * Shape $ (Value): {@link PendingPaymentAction}. Client-side action required before continuing a
 * payment. Resume an order through PayOrder with order_payment_attempt_id, or continue a
 * standalone PaymentIntent through its confirm endpoint without a replacement credential.
 */
export type PendingPaymentAction = {
    /**
     * Shape $ (Value): string. Product-level action type. payment_authentication applies to a
     * payment leg; payment_method_authentication applies to saving a future-billing payment
     * method. Value enum: "payment_authentication", "payment_method_authentication".
     */
    "action_type": "payment_authentication" | "payment_method_authentication" | (string & {});
    /**
     * Shape $ (Value): {@link PaymentClientAction}. Direct browser authority required to finish
     * this action before continuing through Flint. Unlike collection guidance, this payload
     * includes a client secret. Typed provider-specific browser action payload. Execute the
     * selected provider action before continuing the owning payment through Flint.
     */
    "client_action": PaymentClientAction;
    /**
     * Shape $ (Value): string. Stable Flint action ID. Use this to deduplicate a repeated action
     * projection while resuming an attempt.
     */
    "pending_action_id": string;
    /**
     * Shape $ (Value): {@link PendingPaymentActionSubject}. The attempt subject that requires
     * browser action. Exactly one of payment_intent or setup_payment_source is present. Typed
     * subject for a pending order payment action. Exactly one subject is present.
     */
    "subject": PendingPaymentActionSubject;
};
/**
 * Shape $ (Value): {@link PendingPaymentActionPaymentIntentSubject}. The payment intent that needs
 * buyer authentication in a pending payment action.
 */
export type PendingPaymentActionPaymentIntentSubject = {
    /** Shape $ (Value): string. */
    "payment_intent_id": string;
};
/**
 * Shape $ (Value): {@link PendingPaymentActionSetupPaymentSourceSubject}. The payment method setup
 * that needs buyer authentication in a pending payment action.
 */
export type PendingPaymentActionSetupPaymentSourceSubject = {
    /** Shape $ (Value): string. */
    "payment_method_id": string;
};
/**
 * Shape $ (Value): {@link PendingPaymentActionSubject}. Typed subject for a pending order payment
 * action. Exactly one subject is present.
 */
export type PendingPaymentActionSubject = {
    /**
     * Shape $ (Value): {@link PendingPaymentActionPaymentIntentSubject}. PaymentIntent that
     * requires buyer authentication. It can be a standalone intent or an order-owned payment leg.
     * The payment intent that needs buyer authentication in a pending payment action.
     */
    "payment_intent"?: PendingPaymentActionPaymentIntentSubject;
    /**
     * Shape $ (Value): {@link PendingPaymentActionSetupPaymentSourceSubject}. Future-billing
     * payment method setup that requires buyer authentication. The payment method setup that needs
     * buyer authentication in a pending payment action.
     */
    "setup_payment_source"?: PendingPaymentActionSetupPaymentSourceSubject;
};
/**
 * Shape $ (Value): {@link PickupFulfillmentDetails}. Pickup details. For a pickup that checkout
 * creates, location_name, address, and instructions name the store the buyer chose and the
 * delivery method's pickup instructions. The note the buyer left for the store is in
 * recipient.instructions.
 */
export type PickupFulfillmentDetails = {
    /**
     * Shape $ (Value): {@link Address}. Address where the buyer collects the order. A postal
     * address. Every address has country. Addresses Flint checked as complete (customer and saved
     * addresses, merchant, location, invoice, order delivery destination, tax identity,
     * fulfillment recipient and pickup addresses) always have line1 and city, and US ones always
     * have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax
     * locations hold only what was provided, such as postal_code and country.
     */
    "address"?: Address;
    /** Shape $ (Value): string. Instructions specific to curbside handoff. maxLength: 2048. */
    "curbside_instructions"?: string;
    /**
     * Shape $ (Value): string. Buyer-reported arrival time for curbside or counter pickup. Format:
     * date-time.
     */
    "customer_arrived_at"?: string;
    /**
     * Shape $ (Value): string. Deadline after which an uncollected pickup should enter merchant
     * review. Format: date-time.
     */
    "expires_at"?: string;
    /**
     * Shape $ (Value): string. Pickup instructions for the buyer, such as where to go on arrival.
     */
    "instructions"?: string;
    /** Shape $ (Value): string. Name of the store or place where the buyer collects the order. */
    "location_name"?: string;
    /**
     * Shape $ (Value): string. When the recipient collected the items, in RFC3339 format. Format:
     * date-time.
     */
    "picked_up_at"?: string;
    /**
     * Shape $ (Value): string. How the buyer collects the items, such as in store or curbside.
     * Value enum: "in_store", "curbside", "locker", "other".
     */
    "pickup_mode"?: "in_store" | "curbside" | "locker" | "other" | (string & {});
    /**
     * Shape $ (Value): integer string. Width of the promised pickup window, from 0 to 86400
     * seconds. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * minimum: 0. maximum: 86400.
     */
    "pickup_window_duration_seconds"?: `${bigint}`;
    /**
     * Shape $ (Value): integer string. Expected preparation time for restaurant and made-to-order
     * pickup, from 0 to 86400 seconds. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 0. maximum: 86400.
     */
    "prep_time_duration_seconds"?: `${bigint}`;
    /**
     * Shape $ (Value): string. When the items became ready for pickup, in RFC3339 format. Format:
     * date-time.
     */
    "ready_at"?: string;
    /** Shape $ (Value): string. Timezone used to display the pickup window. */
    "timezone"?: string;
    /**
     * Shape $ (Value): string. Buyer vehicle description used for curbside handoff. Omitted for a
     * checkout session credential that doesn't act for the customer the buyer verified. maxLength:
     * 500.
     */
    "vehicle_description"?: string;
    /**
     * Shape $ (Value): string. End of the promised pickup window, in RFC3339 format. Format:
     * date-time.
     */
    "window_end_at"?: string;
    /**
     * Shape $ (Value): string. Start of the promised pickup window, in RFC3339 format. Format:
     * date-time.
     */
    "window_start_at"?: string;
};
/**
 * Shape $ (Value): {@link PricingAmounts}. The money totals for an order or invoice: subtotal,
 * discounts, charges, tax, requested tip, and total.
 */
export type PricingAmounts = {
    /**
     * Shape $ (Value): {@link MoneyValue}. Tax added on top of prices, included in total_money.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "additive_tax_money": MoneyValue;
    /**
     * Shape $ (Value): {@link MoneyValue}. Total of the order's service charges after
     * service-charge discounts. Monetary amount represented as integer minor units plus an ISO
     * 4217 currency code.
     */
    "charge_money": MoneyValue;
    /**
     * Shape $ (Value): {@link MoneyValue}. Total of order and line-item discounts. Service-charge
     * discounts, such as free shipping, are not included; they reduce charge_money. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "discount_money": MoneyValue;
    /**
     * Shape $ (Value): {@link MoneyValue}. Tax already included in subtotal_money and
     * charge_money. Informational; it is not added again to total_money. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "inclusive_tax_money": MoneyValue;
    /**
     * Shape $ (Value): {@link MoneyValue}. Tip money in the total: the requested tip before
     * payment, and settled tips net of refunds after. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code.
     */
    "requested_tip_money": MoneyValue;
    /**
     * Shape $ (Value): {@link MoneyValue}. Sum of the line items' subtotal_money: prices with
     * modifiers, before discounts. Lines with tax-inclusive prices include their tax here.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "subtotal_money": MoneyValue;
    /**
     * Shape $ (Value): {@link MoneyValue}. Total tax, equal to additive_tax_money +
     * inclusive_tax_money. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "tax_money": MoneyValue;
    /**
     * Shape $ (Value): {@link MoneyValue}. subtotal_money - discount_money + charge_money +
     * additive_tax_money + requested_tip_money, never below zero. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "total_money": MoneyValue;
};
/**
 * Shape $ (Value): {@link ProcessExistingReturnLineItemRequest}. How to process one line of an
 * existing return: the received quantity, inspection, decision, disposition, and resolution.
 */
export type ProcessExistingReturnLineItemRequest = {
    /**
     * Shape $ (Value): {@link ReturnProcessDecision}. Start from the pinned policy proposal
     * recomputed for approved_quantity when the line has a policy evaluation and the proposal can
     * be built. Otherwise start with return_required_quantity equal to approved_quantity,
     * allowed_resolution_types containing refund, exchange, replacement, no_monetary_action, and
     * store_credit in that order regardless of whether the original payment is refundable, no
     * automatic_resolution_type, is_inspection_required false, and no receiving_location_id. Each
     * supplied field replaces its starting value; allowed_resolution_types replaces the whole
     * list. Omit automatic_resolution_type to keep its starting value, or send null to resolve
     * manually. Then fill an omitted release_timing with after_inspection when merchandise is
     * required and inspection is required, after_receipt when merchandise is required without
     * inspection, or after_approval when no merchandise is required. Validate the merged decision
     * for quantity bounds, allowed resolution types, and reachable timing and inspection
     * requirements. A pinned policy always requires override_reason when approved_quantity exceeds
     * evaluated eligible_quantity, even when no proposal can be built. With a pinned policy but no
     * proposal, other decision fields use these defaults and override_reason is otherwise
     * optional. Example:
     * {"approved_quantity":1,"receiving_location_id":"loc_01KEZF7C005QW6QDMVP0P473FZ"}.
     */
    "decision"?: ReturnProcessDecision;
    /**
     * Shape $ (Value): {@link ReturnProcessDispositionRequest}. What was done with a returned
     * item, such as restocked as sellable or sent for repair, supplied when processing an existing
     * return.
     */
    "disposition"?: ReturnProcessDispositionRequest;
    /**
     * Shape $ (Value): {@link ReturnProcessInspectionRequest}. An inspection result for a returned
     * item, supplied when processing an existing return.
     */
    "inspection"?: ReturnProcessInspectionRequest;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "received_quantity"?: `${bigint}`;
    /**
     * Shape $ (Value): {@link ReturnProcessResolutionRequest}. The resolution to apply to a
     * returned item, such as refund or exchange, with the quantity and any replacement items.
     */
    "resolution"?: ReturnProcessResolutionRequest;
    /** Shape $ (Value): string. minLength: 1. */
    "return_line_item_id": string;
};
/**
 * Shape $ (Value): {@link ProcessExistingReturnLineItemRequestInput}. How to process one line of
 * an existing return: the received quantity, inspection, decision, disposition, and resolution.
 */
export type ProcessExistingReturnLineItemRequestInput = {
    /**
     * Shape $ (Value): {@link ReturnProcessDecisionInput}. Start from the pinned policy proposal
     * recomputed for approved_quantity when the line has a policy evaluation and the proposal can
     * be built. Otherwise start with return_required_quantity equal to approved_quantity,
     * allowed_resolution_types containing refund, exchange, replacement, no_monetary_action, and
     * store_credit in that order regardless of whether the original payment is refundable, no
     * automatic_resolution_type, is_inspection_required false, and no receiving_location_id. Each
     * supplied field replaces its starting value; allowed_resolution_types replaces the whole
     * list. Omit automatic_resolution_type to keep its starting value, or send null to resolve
     * manually. Then fill an omitted release_timing with after_inspection when merchandise is
     * required and inspection is required, after_receipt when merchandise is required without
     * inspection, or after_approval when no merchandise is required. Validate the merged decision
     * for quantity bounds, allowed resolution types, and reachable timing and inspection
     * requirements. A pinned policy always requires override_reason when approved_quantity exceeds
     * evaluated eligible_quantity, even when no proposal can be built. With a pinned policy but no
     * proposal, other decision fields use these defaults and override_reason is otherwise
     * optional. Example:
     * {"approved_quantity":1,"receiving_location_id":"loc_01KEZF7C005QW6QDMVP0P473FZ"}.
     */
    "decision"?: ReturnProcessDecisionInput;
    /**
     * Shape $ (Value): {@link ReturnProcessDispositionRequestInput}. What was done with a returned
     * item, such as restocked as sellable or sent for repair, supplied when processing an existing
     * return.
     */
    "disposition"?: ReturnProcessDispositionRequestInput;
    /**
     * Shape $ (Value): {@link ReturnProcessInspectionRequestInput}. An inspection result for a
     * returned item, supplied when processing an existing return.
     */
    "inspection"?: ReturnProcessInspectionRequestInput;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "received_quantity"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): {@link ReturnProcessResolutionRequestInput}. The resolution to apply to a
     * returned item, such as refund or exchange, with the quantity and any replacement items.
     */
    "resolution"?: ReturnProcessResolutionRequestInput;
    /** Shape $ (Value): string. minLength: 1. */
    "return_line_item_id": string;
};
/**
 * Shape $ (Value): {@link ProcessExistingReturnRequest}. The request body for: Process existing
 * return.
 */
export type ProcessExistingReturnRequest = {
    /**
     * Shape $ (Value): string. Omit to use the mode shared by all pinned policies that set
     * completion_mode, or automatic when no pinned policy sets one. Conflicting pinned policy
     * modes return 400 naming completion_mode only when completion_mode is omitted. An explicit
     * manual or automatic value is used as sent. On an open Return, omit to keep its committed
     * mode. Sending that mode is accepted; a different mode returns 409 ACTION_NOT_ALLOWED with
     * reason field_locked and param completion_mode. Value enum: "manual", "automatic".
     */
    "completion_mode"?: "manual" | "automatic" | (string & {});
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /**
     * Shape $ (Value): Array of {@link ProcessExistingReturnLineItemRequest}. minItems: 1. Shape
     * $[] (Value): {@link ProcessExistingReturnLineItemRequest}. How to process one line of an
     * existing return: the received quantity, inspection, decision, disposition, and resolution.
     */
    "line_items": Array<ProcessExistingReturnLineItemRequest>;
    /**
     * Shape $ (Value): {@link ReturnProcessReceiptRequest}. The receipt of returned merchandise,
     * with when and where it was received, supplied when processing an existing return.
     */
    "receipt"?: ReturnProcessReceiptRequest;
};
/**
 * Shape $ (Value): {@link ProcessExistingReturnRequestInput}. The request body for: Process
 * existing return.
 */
export type ProcessExistingReturnRequestInput = {
    /**
     * Shape $ (Value): string. Omit to use the mode shared by all pinned policies that set
     * completion_mode, or automatic when no pinned policy sets one. Conflicting pinned policy
     * modes return 400 naming completion_mode only when completion_mode is omitted. An explicit
     * manual or automatic value is used as sent. On an open Return, omit to keep its committed
     * mode. Sending that mode is accepted; a different mode returns 409 ACTION_NOT_ALLOWED with
     * reason field_locked and param completion_mode. Value enum: "manual", "automatic".
     */
    "completion_mode"?: "manual" | "automatic";
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): Array of {@link ProcessExistingReturnLineItemRequestInput}. minItems: 1.
     * Shape $[] (Value): {@link ProcessExistingReturnLineItemRequestInput}. How to process one
     * line of an existing return: the received quantity, inspection, decision, disposition, and
     * resolution.
     */
    "line_items": Array<ProcessExistingReturnLineItemRequestInput>;
    /**
     * Shape $ (Value): {@link ReturnProcessReceiptRequestInput}. The receipt of returned
     * merchandise, with when and where it was received, supplied when processing an existing
     * return.
     */
    "receipt"?: ReturnProcessReceiptRequestInput;
};
/**
 * Shape $ (Value): {@link ProcessExistingReturnResponse}. A response containing
 * `ReturnProcessResult` data.
 */
export type ProcessExistingReturnResponse = {
    /**
     * Shape $ (Value): {@link ReturnProcessResult}. The return is the primary resource and
     * expected_version target; the other resources report the processing effects.
     */
    "data": ReturnProcessResult;
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
/** Shape $ (Value): {@link Product}. An item offered in the merchant's catalog. */
export type Product = {
    /**
     * Shape $ (Value): integer. Number of active variants belonging to the product. Format: int32.
     */
    "active_variant_count"?: number;
    /**
     * Shape $ (Value): boolean. Whether the product is active and has at least one active variant.
     */
    "available_for_sale"?: boolean;
    /**
     * Shape $ (Value): Array of {@link CategoryReference}. Always present. Empty collections are
     * returned as []. Shape $[] (Value): {@link CategoryReference}. A reference to a product
     * category by ID, handle, and name.
     */
    "categories": Array<CategoryReference>;
    /**
     * Shape $ (Value): string. When this resource was created, as an RFC3339 timestamp. Format:
     * date-time.
     */
    "created_at"?: string;
    /**
     * Shape $ (Value): {@link ProductVariant}. The product's default variant, when one is set. A
     * specific purchasable version of a product.
     */
    "default_variant"?: ProductVariant;
    /**
     * Shape $ (Value): string. Identifier of the variant chosen as this product's default, when
     * one is set.
     */
    "default_variant_id"?: string;
    /**
     * Shape $ (Value): string. Delivery readiness aggregated across the product's non-archived
     * variants. Value enum: "configured", "action_required", "not_applicable".
     */
    "delivery_configuration_status": "configured" | "action_required" | "not_applicable" | (string & {});
    /** Shape $ (Value): string. Description of the product shown to buyers. */
    "description"?: string;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): Array of {@link ImageAttachment}. Images attached to this resource, in
     * display order. The first image is primary. Shape $[] (Value): {@link ImageAttachment}. An
     * image attached to a resource, with its display properties and attachment metadata.
     */
    "images": Array<ImageAttachment>;
    /**
     * Shape $ (Value): {@link ProductVariantMatch}. On product list rows, the first non-archived
     * variant by position, then variant_id, that matches all exact variant filters. Without exact
     * variant filters, identifies the first variant whose SKU matches query. Omitted when no
     * variant matches; a product name or description match alone does not set it. Page the
     * product's variants to find all matches. A single variant witness on product list rows only.
     * With exact variant filters, the first variant by position, then variant_id, satisfying every
     * exact predicate. Otherwise, the first variant in that order whose SKU matches query. Use the
     * paginated nested variant list to enumerate every match.
     */
    "matched_variant"?: ProductVariantMatch;
    /** Shape $ (Value): string. Identifier of the merchant that owns this resource. */
    "merchant_id"?: string;
    /**
     * Shape $ (Value): {@link MetadataMap}. Caller-owned metadata stored on this resource.
     * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for
     * Flint and are not returned. Writes follow the limits on MetadataInput and
     * MetadataPatchInput; maps written before those limits may not satisfy them.
     */
    "metadata"?: MetadataMap;
    /**
     * Shape $ (Value): {@link ModifierSet} or null. Attached modifier set, included when
     * expand=modifier_set is requested. Requires commerce.catalog.read in addition to the
     * resource's read scope. Shape $.anyOf[1] (Value): {@link ModifierSet}. A reusable collection
     * of customization groups. Shape $.anyOf[2] (Value): null.
     */
    "modifier_set"?: ((ModifierSet) | (null));
    /** Shape $ (Value): string or null. Attached modifier set. Send null on update to remove it. */
    "modifier_set_id": string | null;
    /** Shape $ (Value): string. Product name shown to buyers. */
    "name": string;
    /**
     * Shape $ (Value): integer. Number of active options belonging to the product. Format: int32.
     */
    "option_count"?: number;
    /**
     * Shape $ (Value): Array of {@link ProductOption}. Product options and their non-archived
     * values. Empty when the product has no options. Shape $[] (Value): {@link ProductOption}. A
     * choice that defines a product's variants.
     */
    "options": Array<ProductOption>;
    /**
     * Shape $ (Value): {@link ProductPriceRange}. Lowest and highest unit prices among active
     * variants. Omitted when there are no active variants or their currencies differ. The lowest
     * and highest unit prices across a product's variants.
     */
    "price_range"?: ProductPriceRange;
    /** Shape $ (Value): string. Stable identifier of the product. */
    "product_id": string;
    /**
     * Shape $ (Value): string. Kind of goods or service this product represents. Value enum:
     * "physical", "service", "fee", "digital", "gift_card".
     */
    "product_type": "physical" | "service" | "fee" | "digital" | "gift_card" | (string & {});
    /**
     * Shape $ (Value): string. Product lifecycle status. Archived products remain readable and
     * cannot be edited. Value enum: "active", "inactive", "archived".
     */
    "status": "active" | "inactive" | "archived" | (string & {});
    /**
     * Shape $ (Value): string. When this resource last changed, as an RFC3339 timestamp. Format:
     * date-time.
     */
    "updated_at"?: string;
    /**
     * Shape $ (Value): integer. Number of non-archived variants belonging to the product. Format:
     * int32.
     */
    "variant_count"?: number;
    /**
     * Shape $ (Value): Array of {@link ProductVariant}. The variants this request created, ordered
     * by `position` and then `variant_id`. Present only on the `POST /v1/products` response. Read
     * variants later with `GET /v1/products/{product_id}/variants`. Shape $[] (Value): {@link
     * ProductVariant}. A specific purchasable version of a product.
     */
    "variants"?: Array<ProductVariant>;
    /**
     * Shape $ (Value): integer string. Current resource version. Send it as expected_version to
     * reject a write if the resource has changed. Use an integer string (decimal digits), not a
     * floating-point number. Format: uint64. minimum: 0.
     */
    "version": `${bigint}`;
};
/** Shape $ (Value): {@link ProductListResponse}. A page of `Product` objects. */
export type ProductListResponse = {
    /**
     * Shape $ (Value): Array of {@link Product}. The requested product data. Shape $[] (Value):
     * {@link Product}. An item offered in the merchant's catalog.
     */
    "data": Array<Product>;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Additional information about this response. Metadata
     * returned with a response: the `api_version`, `trace_id`, whether an idempotent request was
     * replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /** Shape $ (Value): string. Token for the next page. Omitted when there are no more results. */
    "next_page_token"?: string;
    /**
     * Shape $ (Value): string. Identifier of this API request, useful when contacting support.
     * maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/** Shape $ (Value): {@link ProductOption}. A choice that defines a product's variants. */
export type ProductOption = {
    /**
     * Shape $ (Value): string. When this resource was created, as an RFC3339 timestamp. Format:
     * date-time.
     */
    "created_at"?: string;
    /**
     * Shape $ (Value): {@link MetadataMap}. Caller-owned metadata stored on this resource.
     * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for
     * Flint and are not returned. Writes follow the limits on MetadataInput and
     * MetadataPatchInput; maps written before those limits may not satisfy them.
     */
    "metadata"?: MetadataMap;
    /** Shape $ (Value): string. Option name, such as Size or Color. */
    "name": string;
    /** Shape $ (Value): string. Stable identifier of the product option. */
    "option_id": string;
    /**
     * Shape $ (Value): integer. Display order among the product's options, starting at zero.
     * Format: int32.
     */
    "position": number;
    /** Shape $ (Value): string. Identifier of the product this option belongs to. */
    "product_id": string;
    /**
     * Shape $ (Value): string. Option lifecycle status. Every active variant must select an active
     * value for each active option. Value enum: "active", "inactive", "archived".
     */
    "status": "active" | "inactive" | "archived" | (string & {});
    /**
     * Shape $ (Value): string. When this resource last changed, as an RFC3339 timestamp. Format:
     * date-time.
     */
    "updated_at"?: string;
    /**
     * Shape $ (Value): Array of {@link ProductOptionValue}. Values offered for this option, such
     * as Small, Medium, and Large for Size. Shape $[] (Value): {@link ProductOptionValue}. One
     * value of a product option, such as a size or color, with its position and status.
     */
    "values"?: Array<ProductOptionValue>;
};
/** Shape $ (Value): {@link ProductOptionListResponse}. A page of `ProductOption` objects. */
export type ProductOptionListResponse = {
    /**
     * Shape $ (Value): Array of {@link ProductOption}. The requested product option data. Shape
     * $[] (Value): {@link ProductOption}. A choice that defines a product's variants.
     */
    "data": Array<ProductOption>;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Additional information about this response. Metadata
     * returned with a response: the `api_version`, `trace_id`, whether an idempotent request was
     * replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /** Shape $ (Value): string. Token for the next page. Omitted when there are no more results. */
    "next_page_token"?: string;
    /**
     * Shape $ (Value): string. Identifier of this API request, useful when contacting support.
     * maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/** Shape $ (Value): {@link ProductOptionResponse}. A response containing `ProductOption` data. */
export type ProductOptionResponse = {
    /**
     * Shape $ (Value): {@link ProductOption}. The requested product option data. A choice that
     * defines a product's variants.
     */
    "data": ProductOption;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Additional information about this response. Metadata
     * returned with a response: the `api_version`, `trace_id`, whether an idempotent request was
     * replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Shape $ (Value): string. Identifier of this API request, useful when contacting support.
     * maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/**
 * Shape $ (Value): {@link ProductOptionValue}. One value of a product option, such as a size or
 * color, with its position and status.
 */
export type ProductOptionValue = {
    /**
     * Shape $ (Value): string. When this resource was created, as an RFC3339 timestamp. Format:
     * date-time.
     */
    "created_at"?: string;
    /**
     * Shape $ (Value): {@link MetadataMap}. Caller-owned metadata stored on this resource.
     * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for
     * Flint and are not returned. Writes follow the limits on MetadataInput and
     * MetadataPatchInput; maps written before those limits may not satisfy them.
     */
    "metadata"?: MetadataMap;
    /** Shape $ (Value): string. Stable identifier of the option value. */
    "option_value_id": string;
    /**
     * Shape $ (Value): integer. Display order among the option's values, starting at zero. Format:
     * int32.
     */
    "position": number;
    /**
     * Shape $ (Value): string. Option value lifecycle status. Only active values can be newly
     * selected by active variants. Value enum: "active", "inactive", "archived".
     */
    "status"?: "active" | "inactive" | "archived" | (string & {});
    /**
     * Shape $ (Value): string. When this resource last changed, as an RFC3339 timestamp. Format:
     * date-time.
     */
    "updated_at"?: string;
    /** Shape $ (Value): string. Option value shown to buyers, such as Medium. */
    "value": string;
};
/**
 * Shape $ (Value): {@link ProductPriceRange}. The lowest and highest unit prices across a
 * product's variants.
 */
export type ProductPriceRange = {
    /**
     * Shape $ (Value): {@link MoneyValue}. Highest unit price among the product's active variants.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "max_unit_price_money": MoneyValue;
    /**
     * Shape $ (Value): {@link MoneyValue}. Lowest unit price among the product's active variants.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "min_unit_price_money": MoneyValue;
};
/** Shape $ (Value): {@link ProductResponse}. A response containing `Product` data. */
export type ProductResponse = {
    /**
     * Shape $ (Value): {@link Product}. The requested product data. An item offered in the
     * merchant's catalog.
     */
    "data": Product;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Additional information about this response. Metadata
     * returned with a response: the `api_version`, `trace_id`, whether an idempotent request was
     * replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Shape $ (Value): string. Identifier of this API request, useful when contacting support.
     * maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/** Shape $ (Value): {@link ProductVariant}. A specific purchasable version of a product. */
export type ProductVariant = {
    /** Shape $ (Value): boolean. Whether the variant and its product are both active. */
    "available_for_sale": boolean;
    /** Shape $ (Value): string. Barcode assigned to this sellable item. */
    "barcode"?: string;
    /**
     * Shape $ (Value): string. When this resource was created, as an RFC3339 timestamp. Format:
     * date-time.
     */
    "created_at"?: string;
    /**
     * Shape $ (Value): string. Reason the variant's delivery configuration needs attention. Value
     * enum: "delivery_profile_missing", "delivery_profile_inactive".
     */
    "delivery_configuration_reason"?: "delivery_profile_missing" | "delivery_profile_inactive" | (string & {});
    /**
     * Shape $ (Value): string. Whether the variant's delivery configuration is ready, needs
     * attention, or does not apply. Value enum: "configured", "action_required", "not_applicable".
     */
    "delivery_configuration_status": "configured" | "action_required" | "not_applicable" | (string & {});
    /** Shape $ (Value): string. Identifier of the delivery profile assigned to this variant. */
    "delivery_profile_id"?: string;
    /**
     * Shape $ (Value): Array of {@link ImageAttachment}. Images shown for the variant: its own
     * gallery when nonempty, otherwise the product's gallery. Shape $[] (Value): {@link
     * ImageAttachment}. An image attached to a resource, with its display properties and
     * attachment metadata.
     */
    "effective_images": Array<ImageAttachment>;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): {@link GiftCardProductConfiguration}. Gift card issuance terms.
     * face_value_money is the reference denomination; unit_price_money is its price. Custom
     * amounts use that price-to-value ratio, rounded to the nearest cent with ties up. Gift card
     * settings on a product variant: its `face_value_money`, price mode (face value or
     * discounted), and bounds for custom amounts.
     */
    "gift_card_configuration"?: GiftCardProductConfiguration;
    /**
     * Shape $ (Value): Array of {@link ImageAttachment}. The variant's own images in display
     * order. An empty gallery inherits the product's images. Shape $[] (Value): {@link
     * ImageAttachment}. An image attached to a resource, with its display properties and
     * attachment metadata.
     */
    "images": Array<ImageAttachment>;
    /**
     * Shape $ (Value): boolean. Whether effective_images comes from the product's gallery because
     * this variant's gallery is empty.
     */
    "images_inherited": boolean;
    /**
     * Shape $ (Value): string. The inventory item this variant consumes. Present exactly when
     * inventory_tracking is tracked. Several variants may share one inventory item.
     */
    "inventory_item_id"?: string;
    /**
     * Shape $ (Value): string. Whether sales of this variant consume an inventory item. Value
     * enum: "not_tracked", "tracked".
     */
    "inventory_tracking": "not_tracked" | "tracked" | (string & {});
    /**
     * Shape $ (Value): string. Flint line-item tax category. Value enum: "general",
     * "physical_goods", "digital_goods", "software", "saas", "services", "professional_services",
     * "food", "prepared_food", "clothing", "medical_goods", "admission".
     */
    "line_item_tax_category"?: "general"
        | "physical_goods"
        | "digital_goods"
        | "software"
        | "saas"
        | "services"
        | "professional_services"
        | "food"
        | "prepared_food"
        | "clothing"
        | "medical_goods"
        | "admission"
        | (string & {});
    /** Shape $ (Value): string. Identifier of the merchant that owns this resource. */
    "merchant_id"?: string;
    /**
     * Shape $ (Value): {@link MetadataMap}. Caller-owned metadata stored on this resource.
     * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for
     * Flint and are not returned. Writes follow the limits on MetadataInput and
     * MetadataPatchInput; maps written before those limits may not satisfy them.
     */
    "metadata"?: MetadataMap;
    /**
     * Shape $ (Value): {@link ModifierSet} or null. Attached modifier set, included when
     * expand=modifier_set is requested. Requires commerce.catalog.read in addition to the
     * resource's read scope. Shape $.anyOf[1] (Value): {@link ModifierSet}. A reusable collection
     * of customization groups. Shape $.anyOf[2] (Value): null.
     */
    "modifier_set"?: ((ModifierSet) | (null));
    /** Shape $ (Value): string or null. Attached modifier set. Send null on update to remove it. */
    "modifier_set_id": string | null;
    /**
     * Shape $ (Value): string. Variant name that distinguishes it from the product's other
     * variants.
     */
    "name"?: string;
    /**
     * Shape $ (Value): integer. Display order among the product's variants, starting at zero.
     * Format: int32.
     */
    "position": number;
    /** Shape $ (Value): string. Identifier of the product this variant belongs to. */
    "product_id": string;
    /**
     * Shape $ (Value): Array of {@link SelectedProductOption}. Always present. Empty collections
     * are returned as []. Shape $[] (Value): {@link SelectedProductOption}. An option and value
     * chosen for a product variant, such as size Large.
     */
    "selected_options": Array<SelectedProductOption>;
    /** Shape $ (Value): string. Stock keeping unit assigned to this sellable item. */
    "sku"?: string;
    /**
     * Shape $ (Value): string. Variant lifecycle status. Archived variants remain readable and
     * cannot be edited. Value enum: "active", "inactive", "archived".
     */
    "status": "active" | "inactive" | "archived" | (string & {});
    /** Shape $ (Value): boolean. Whether this item is subject to tax. */
    "taxable"?: boolean;
    /**
     * Shape $ (Value): {@link Dimensions}. Per-unit measurement. Omitted when unknown. Package or
     * item dimensions as `length`, `width`, and `height` in the given `unit`.
     */
    "unit_dimensions"?: Dimensions;
    /**
     * Shape $ (Value): {@link MoneyValue}. Price charged for one unit, in the currency's smallest
     * unit. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "unit_price_money": MoneyValue;
    /**
     * Shape $ (Value): {@link Weight}. Per-unit measurement. Omitted when unknown. A weight value
     * in grams, kilograms, ounces, or pounds, used in delivery profile configuration.
     */
    "unit_weight"?: Weight;
    /**
     * Shape $ (Value): string. When this resource last changed, as an RFC3339 timestamp. Format:
     * date-time.
     */
    "updated_at"?: string;
    /** Shape $ (Value): string. Stable identifier of the product variant. */
    "variant_id": string;
    /**
     * Shape $ (Value): integer string. Current resource version. Send it as expected_version to
     * reject a write if the resource has changed. Use an integer string (decimal digits), not a
     * floating-point number. Format: uint64. minimum: 0.
     */
    "version": `${bigint}`;
};
/** Shape $ (Value): {@link ProductVariantListResponse}. A page of `ProductVariant` objects. */
export type ProductVariantListResponse = {
    /**
     * Shape $ (Value): Array of {@link ProductVariant}. The requested product variant data. Shape
     * $[] (Value): {@link ProductVariant}. A specific purchasable version of a product.
     */
    "data": Array<ProductVariant>;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Additional information about this response. Metadata
     * returned with a response: the `api_version`, `trace_id`, whether an idempotent request was
     * replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /** Shape $ (Value): string. Token for the next page. Omitted when there are no more results. */
    "next_page_token"?: string;
    /**
     * Shape $ (Value): string. Identifier of this API request, useful when contacting support.
     * maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
