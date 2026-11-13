import type { InputValue } from '../runtime.js';
import type { DisputesAcceptParams } from './types-23.js';
import type {
    ExpandedPaymentIntentSummary,
    ExpandedCustomerSummary,
    ExpandedOrderSummary,
    ExpandedPayoutDestinationSummary,
    ExpandedPayoutSummary
} from './types-24.js';
import type { MoneyValue, MoneyValueInput } from './types-38.js';
import type { SplitReversalReference } from './types-59.js';
import type { ResourceReference, ResponseMeta } from './types-54.js';
import type { MerchantWebhookEnvelope, MetadataMap } from './types-37.js';
import type { PartnerWebhookEnvelope } from './types-44.js';
import type { DeclinePaymentReviewRequestInput } from './types-16.js';
import type { ReaderPaymentSourceTip, ReaderPaymentSourceTipInput } from './types-52.js';
import type { PayoutTraceID } from './types-48.js';
export type PaymentMethodsDeleteParams = DisputesAcceptParams;
export type PaymentMethodsGetParams = {
    /**
     * Include related objects in the response. Supported expansions: customer. Expansion requires
     * payments.payment_methods.read plus customers.read. Limits: at most 10 unique expand paths
     * per request. [] enum: "customer". Value enum: "customer". anyOf[1] (Value): Array of string.
     * [] enum: "customer". anyOf[1][] (Value): string. Value enum: "customer". anyOf[2] (Value):
     * string. Value enum: "customer".
     */
    "expand"?: InputValue<("customer") | readonly ("customer")[]>;
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
export type PaymentMethodsListParams = {
    /**
     * Optional Flint customer ID filter. pattern: ^cus_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     */
    "customer_id"?: InputValue<string>;
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
     * Filter by payment method type. Values are trimmed and deduplicated in first-seen order;
     * empty or unknown entries are rejected. Values within this filter are ORed; separate filters
     * are ANDed. [] enum: "card". Value enum: "card". anyOf[1] (Value): Array of string. minItems:
     * 1. [] enum: "card". anyOf[1][] (Value): string. Value enum: "card". anyOf[2] (Value):
     * string. Value enum: "card".
     */
    "type"?: InputValue<("card") | readonly ("card")[]>;
    /**
     * Filter by status. Omitted, the list leaves out archived rows; name archived to include them.
     * Values are trimmed and deduplicated in first-seen order; empty or unknown entries are
     * rejected. Values within this filter are ORed; separate filters are ANDed. [] enum: "active",
     * "pending", "expired", "archived", "failed". Value enum: "active", "pending", "expired",
     * "archived", "failed". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "active",
     * "pending", "expired", "archived", "failed". anyOf[1][] (Value): string. Value enum:
     * "active", "pending", "expired", "archived", "failed". anyOf[2] (Value): string. Value enum:
     * "active", "pending", "expired", "archived", "failed".
     */
    "status"?: InputValue<("active" | "pending" | "expired" | "archived" | "failed")
        | readonly ("active" | "pending" | "expired" | "archived" | "failed")[]>;
    /**
     * Filter by usage: off_session payment methods can be charged without the buyer; on_session
     * ones were saved by buyers for faster checkout. Values are trimmed and deduplicated in
     * first-seen order; empty or unknown entries are rejected. Values within this filter are ORed;
     * separate filters are ANDed. [] enum: "on_session", "off_session". Value enum: "on_session",
     * "off_session". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "on_session",
     * "off_session". anyOf[1][] (Value): string. Value enum: "on_session", "off_session". anyOf[2]
     * (Value): string. Value enum: "on_session", "off_session".
     */
    "usage"?: InputValue<("on_session" | "off_session") | readonly ("on_session" | "off_session")[]>;
    /** Inclusive lower bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
    /**
     * Include related objects in the response. Supported expansions: customer. Include the
     * requested related resources using scoped batch reads for this page. Each relationship
     * requires its existing target read scopes. Expansion changes the representation without
     * changing pagination tokens. Limits: at most 10 unique expand paths per request. [] enum:
     * "customer". Value enum: "customer". anyOf[1] (Value): Array of string. [] enum: "customer".
     * anyOf[1][] (Value): string. Value enum: "customer". anyOf[2] (Value): string. Value enum:
     * "customer".
     */
    "expand"?: InputValue<("customer") | readonly ("customer")[]>;
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
 * The part of a refund returned through one payment, with the amount, tip, status, and any failure
 * reason.
 */
export type PaymentRefund = {
    /**
     * Amount refunded through this payment, including `refunded_tip_money`. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
    /**
     * Why a refund failed or a payment refund was canceled. Failed and canceled amounts become
     * refundable again, except a refund with reason payment_returned that failed with
     * payment_disputed: the buyer won a dispute on the charge, so nothing is left to refund. Fix
     * the cause, then create a new refund with a new idempotency key. Unknown provider values are
     * returned as refund_failed. Value enum: "expired_or_canceled_card", "lost_or_stolen_card",
     * "insufficient_funds", "insufficient_available_balance", "declined", "merchant_request",
     * "payment_disputed", "payment_refund_failed", "payment_refund_not_attempted",
     * "refund_failed".
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
     * Present only when `expand` includes `payment_refunds.payment_intent`; `null` when expanded
     * and there is no related payment intent. anyOf[1] (Value): {@link
     * ExpandedPaymentIntentSummary}. A payment intent's summary fields, including amount, status,
     * and capture method, returned when the payment intent is expanded. anyOf[2] (Value): null.
     */
    "payment_intent"?: ((ExpandedPaymentIntentSummary) | (null));
    /**
     * The payment this part of the refund returned money through. Example:
     * "pi_01KEZF7C00G8H9D509YEV22P7R".
     */
    "payment_intent_id"?: string;
    /**
     * The platform fee this payment refund returns to you, present when the payment carries a
     * collected platform fee: its share when the refund was created with refund_platform_fee true,
     * 0 when the partner app keeps the fee. Flint returns it once this payment refund succeeds. If
     * this payment refund then fails, Flint doesn't take the returned fee back. See [Platform
     * fees](/docs/guides/platform-fees). Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "refunded_platform_fee_money"?: MoneyValue;
    /**
     * Share of `amount_money` that refunds tips. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code.
     */
    "refunded_tip_money": MoneyValue;
    /**
     * Fixed seller allocations on the payment, each naming its payment split and reversal. Present
     * only when the payment has splits; an empty array means no seller share was allocated. Read
     * PaymentSplit.reversals for status, shortfall, and reinstated amounts. [] (Value): {@link
     * SplitReversalReference}. A fixed allocation referencing a read-only reversal nested in a
     * payment split. This reference has no independent lifecycle or write routes.
     */
    "split_reversals"?: Array<SplitReversalReference>;
    /**
     * Status of this payment refund or tender allocation. A succeeded refund can still fail after
     * a bank rejection. Parent status transitions send refund.succeeded,
     * refund.partially_succeeded, or refund.failed; other public changes send refund.updated.
     * Value enum: "pending", "requires_action", "succeeded", "failed", "canceled".
     */
    "status": "pending" | "requires_action" | "succeeded" | "failed" | "canceled" | (string & {});
    /**
     * When this payment refund's `status` first became `succeeded`, as Flint recorded the
     * processor's outcome. It keeps that time if the part fails and later succeeds again. The
     * refund's `tender_allocations` entry for the same payment has the same value. Present only
     * while `status` is `succeeded`. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "succeeded_at"?: string;
};
/** A payment review requiring a merchant decision. */
export type PaymentReview = {
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "closed_at": string | null;
    /**
     * The credential that closed this payment review. Null when Flint closed it. anyOf[1] (Value):
     * {@link ResourceReference}. A reference to another resource by `resource_type` and
     * `resource_id`. anyOf[2] (Value): null.
     */
    "closed_by": ((ResourceReference) | (null));
    /**
     * Value enum: "approved", "declined", "refunded", "disputed", "payment_canceled", "expired",
     * null.
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
     * Present only when `expand` includes `customer`; `null` when expanded and there is no related
     * customer. anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's summary fields,
     * returned in place of a customer ID when the customer is expanded. anyOf[2] (Value): null.
     */
    "customer"?: ((ExpandedCustomerSummary) | (null));
    /** Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". */
    "customer_id": string | null;
    "ip_address": string | null;
    /**
     * The most recent resolution attempt that failed. Set when a decline's refund failed and the
     * review reopened. Null when no attempt has failed. anyOf[1] (Value): {@link
     * PaymentReviewResolutionFailure}. A failed attempt to resolve a review by refund, with the
     * `refund_id` and when it failed. anyOf[2] (Value): null.
     */
    "last_resolution_failure": ((PaymentReviewResolutionFailure) | (null));
    /** Example: "rule_01KEZF7C00FWGAQJXXA8CRA319". */
    "matched_risk_rule_id": string | null;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "opened_at": string;
    /** Value enum: "rule". */
    "opened_reason": "rule" | (string & {});
    /**
     * Present only when `expand` includes `order`; `null` when expanded and there is no related
     * order. anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary fields, including
     * status, payment and refund status, and pricing and settlement amounts, returned when the
     * order is expanded. anyOf[2] (Value): null.
     */
    "order"?: ((ExpandedOrderSummary) | (null));
    /** Example: "ord_01KEZF7C0054GQKJ142A8X367A". */
    "order_id": string | null;
    /**
     * Value enum: "checkout", "payment_link", "invoice", "subscription_initial",
     * "subscription_renewal", "virtual_terminal", "api".
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
     * Present only when `expand` includes `payment_intent`; `null` when expanded and there is no
     * related payment intent. anyOf[1] (Value): {@link ExpandedPaymentIntentSummary}. A payment
     * intent's summary fields, including amount, status, and capture method, returned when the
     * payment intent is expanded. anyOf[2] (Value): null.
     */
    "payment_intent"?: ((ExpandedPaymentIntentSummary) | (null));
    /** Example: "pi_01KEZF7C00G8H9D509YEV22P7R". */
    "payment_intent_id": string;
    /**
     * Unique identifier for this payment review, prefixed `rev_`. Example:
     * "rev_01KEZF7C00BVBQ00XDFNKB1EF6".
     */
    "payment_review_id": string;
    /**
     * The payment details shown on a review: amount, capture method, authorization expiry, card
     * brand and last four digits, and buyer email.
     */
    "payment_summary": PaymentReviewPaymentSummary;
    /**
     * The decision being carried out. `null` when status isn't resolving. Value enum: "approve",
     * "decline", "expire", null.
     */
    "pending_action": "approve" | "decline" | "expire" | null | (string & {}) | null;
    /**
     * The refund that closed this review. Null otherwise. Example:
     * "ref_01KEZF7C003DTD59WKYHEXYQ1K".
     */
    "refund_id": string | null;
    /**
     * Refunded amount for this review. Null when no refund is recorded. anyOf[1] (Value): {@link
     * MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code. anyOf[2] (Value): null.
     */
    "refunded_money": ((MoneyValue) | (null));
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "resolution_started_at": string | null;
    /**
     * The credential that started resolving this payment review, retained after closure. Null when
     * no resolution has started or Flint started it. anyOf[1] (Value): {@link ResourceReference}.
     * A reference to another resource by `resource_type` and `resource_id`. anyOf[2] (Value):
     * null.
     */
    "resolution_started_by": ((ResourceReference) | (null));
    /** The risk assessment shown on a review: a `level` and, when available, a numeric `score`. */
    "risk": PaymentReviewRisk;
    /** Value enum: "open", "resolving", "closed". */
    "status": "open" | "resolving" | "closed" | (string & {});
    /**
     * Lifecycle actions accepted in the current stored review state. An action remains listed
     * while it is processing or can be repeated without changing the result. [] enum: "approve",
     * "decline". [] (Value): string. Value enum: "approve", "decline".
     */
    "supported_actions": Array<"approve" | "decline" | (string & {})>;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "updated_at": string;
};
export type PaymentReviewClosedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "closed_at": string | null;
            "closed_by": ((ResourceReference) | (null));
            "closed_reason": "approved"
                | "declined"
                | "refunded"
                | "disputed"
                | "payment_canceled"
                | "expired"
                | null
                | (string & {})
                | null;
            "customer"?: ((ExpandedCustomerSummary) | (null));
            "customer_id": string | null;
            "ip_address": string | null;
            "last_resolution_failure": ((PaymentReviewResolutionFailure) | (null));
            "matched_risk_rule_id": string | null;
            "opened_at": string;
            "opened_reason": "rule" | (string & {});
            "order"?: ((ExpandedOrderSummary) | (null));
            "order_id": string | null;
            "payment_flow": "checkout"
                | "payment_link"
                | "invoice"
                | "subscription_initial"
                | "subscription_renewal"
                | "virtual_terminal"
                | "api"
                | (string & {});
            "payment_intent"?: ((ExpandedPaymentIntentSummary) | (null));
            "payment_intent_id": string;
            "payment_review_id": string;
            "payment_summary": PaymentReviewPaymentSummary;
            "pending_action": "approve" | "decline" | "expire" | null | (string & {}) | null;
            "refund_id": string | null;
            "refunded_money": ((MoneyValue) | (null));
            "resolution_started_at": string | null;
            "resolution_started_by": ((ResourceReference) | (null));
            "risk": PaymentReviewRisk;
            "status": "open" | "resolving" | "closed" | (string & {});
            "supported_actions": Array<"approve" | "decline" | (string & {})>;
            "updated_at": string;
        };
        "previous_attributes"?: Partial<PaymentReview>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "payment_review.closed";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "closed_at": string | null;
            "closed_by": ((ResourceReference) | (null));
            "closed_reason": "approved"
                | "declined"
                | "refunded"
                | "disputed"
                | "payment_canceled"
                | "expired"
                | null
                | (string & {})
                | null;
            "customer"?: ((ExpandedCustomerSummary) | (null));
            "customer_id": string | null;
            "ip_address": string | null;
            "last_resolution_failure": ((PaymentReviewResolutionFailure) | (null));
            "matched_risk_rule_id": string | null;
            "opened_at": string;
            "opened_reason": "rule" | (string & {});
            "order"?: ((ExpandedOrderSummary) | (null));
            "order_id": string | null;
            "payment_flow": "checkout"
                | "payment_link"
                | "invoice"
                | "subscription_initial"
                | "subscription_renewal"
                | "virtual_terminal"
                | "api"
                | (string & {});
            "payment_intent"?: ((ExpandedPaymentIntentSummary) | (null));
            "payment_intent_id": string;
            "payment_review_id": string;
            "payment_summary": PaymentReviewPaymentSummary;
            "pending_action": "approve" | "decline" | "expire" | null | (string & {}) | null;
            "refund_id": string | null;
            "refunded_money": ((MoneyValue) | (null));
            "resolution_started_at": string | null;
            "resolution_started_by": ((ResourceReference) | (null));
            "risk": PaymentReviewRisk;
            "status": "open" | "resolving" | "closed" | (string & {});
            "supported_actions": Array<"approve" | "decline" | (string & {})>;
            "updated_at": string;
        };
        "previous_attributes"?: Partial<PaymentReview>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "payment_review.closed";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "payment_review.closed";
});
/**
 * The `payment_review.closed` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type PaymentReviewClosedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.closed_at (Required): string or null. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.closed_by (Required): {@link
     * ResourceReference} or null. The credential that closed this payment review. Null when Flint
     * closed it. object.closed_by.anyOf[1] (Value): {@link ResourceReference}. A reference to
     * another resource by `resource_type` and `resource_id`. object.closed_by.anyOf[2] (Value):
     * null. object.closed_reason (Required): string or null. Value enum: "approved", "declined",
     * "refunded", "disputed", "payment_canceled", "expired", null. object.customer (Optional):
     * {@link ExpandedCustomerSummary} or null. Present only when `expand` includes `customer`;
     * `null` when expanded and there is no related customer. object.customer.anyOf[1] (Value):
     * {@link ExpandedCustomerSummary}. A customer's summary fields, returned in place of a
     * customer ID when the customer is expanded. object.customer.anyOf[2] (Value): null.
     * object.customer_id (Required): string or null. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     * object.ip_address (Required): string or null. object.last_resolution_failure (Required):
     * {@link PaymentReviewResolutionFailure} or null. The most recent resolution attempt that
     * failed. Set when a decline's refund failed and the review reopened. Null when no attempt has
     * failed. object.last_resolution_failure.anyOf[1] (Value): {@link
     * PaymentReviewResolutionFailure}. A failed attempt to resolve a review by refund, with the
     * `refund_id` and when it failed. object.last_resolution_failure.anyOf[2] (Value): null.
     * object.matched_risk_rule_id (Required): string or null. Example:
     * "rule_01KEZF7C00FWGAQJXXA8CRA319". object.opened_at (Required): string. RFC3339 timestamp.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". object.opened_reason (Required): string.
     * Value enum: "rule". object.order (Optional): {@link ExpandedOrderSummary} or null. Present
     * only when `expand` includes `order`; `null` when expanded and there is no related order.
     * object.order.anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary fields,
     * including status, payment and refund status, and pricing and settlement amounts, returned
     * when the order is expanded. object.order.anyOf[2] (Value): null. object.order_id (Required):
     * string or null. Example: "ord_01KEZF7C0054GQKJ142A8X367A". object.payment_flow (Required):
     * string. Value enum: "checkout", "payment_link", "invoice", "subscription_initial",
     * "subscription_renewal", "virtual_terminal", "api". object.payment_intent (Optional): {@link
     * ExpandedPaymentIntentSummary} or null. Present only when `expand` includes `payment_intent`;
     * `null` when expanded and there is no related payment intent. object.payment_intent.anyOf[1]
     * (Value): {@link ExpandedPaymentIntentSummary}. A payment intent's summary fields, including
     * amount, status, and capture method, returned when the payment intent is expanded.
     * object.payment_intent.anyOf[2] (Value): null. object.payment_intent_id (Required): string.
     * Example: "pi_01KEZF7C00G8H9D509YEV22P7R". object.payment_review_id (Required): string.
     * Unique identifier for this payment review, prefixed `rev_`. Example:
     * "rev_01KEZF7C00BVBQ00XDFNKB1EF6". object.payment_summary (Required): {@link
     * PaymentReviewPaymentSummary}. The payment details shown on a review: amount, capture method,
     * authorization expiry, card brand and last four digits, and buyer email.
     * object.pending_action (Required): string or null. The decision being carried out. `null`
     * when status isn't resolving. Value enum: "approve", "decline", "expire", null.
     * object.refund_id (Required): string or null. The refund that closed this review. Null
     * otherwise. Example: "ref_01KEZF7C003DTD59WKYHEXYQ1K". object.refunded_money (Required):
     * {@link MoneyValue} or null. Refunded amount for this review. Null when no refund is
     * recorded. object.refunded_money.anyOf[1] (Value): {@link MoneyValue}. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     * object.refunded_money.anyOf[2] (Value): null. object.resolution_started_at (Required):
     * string or null. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.resolution_started_by (Required): {@link ResourceReference} or null. The credential
     * that started resolving this payment review, retained after closure. Null when no resolution
     * has started or Flint started it. object.resolution_started_by.anyOf[1] (Value): {@link
     * ResourceReference}. A reference to another resource by `resource_type` and `resource_id`.
     * object.resolution_started_by.anyOf[2] (Value): null. object.risk (Required): {@link
     * PaymentReviewRisk}. The risk assessment shown on a review: a `level` and, when available, a
     * numeric `score`. object.status (Required): string. Value enum: "open", "resolving",
     * "closed". object.supported_actions (Required): Array of string. Lifecycle actions accepted
     * in the current stored review state. An action remains listed while it is processing or can
     * be repeated without changing the result. [] enum: "approve", "decline".
     * object.supported_actions[] (Value): string. Value enum: "approve", "decline".
     * object.updated_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". previous_attributes (Optional): object. Previous values of changed
     * top-level fields in data.object, at this delivery's API version. Nested changes include the
     * whole previous top-level value. A value is null when the field was absent before the change.
     * Omitted when Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields. closed_at
         * (Required): string or null. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". closed_by (Required): {@link ResourceReference} or null. The
         * credential that closed this payment review. Null when Flint closed it.
         * closed_by.anyOf[1] (Value): {@link ResourceReference}. A reference to another resource
         * by `resource_type` and `resource_id`. closed_by.anyOf[2] (Value): null. closed_reason
         * (Required): string or null. Value enum: "approved", "declined", "refunded", "disputed",
         * "payment_canceled", "expired", null. customer (Optional): {@link
         * ExpandedCustomerSummary} or null. Present only when `expand` includes `customer`; `null`
         * when expanded and there is no related customer. customer.anyOf[1] (Value): {@link
         * ExpandedCustomerSummary}. A customer's summary fields, returned in place of a customer
         * ID when the customer is expanded. customer.anyOf[2] (Value): null. customer_id
         * (Required): string or null. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". ip_address
         * (Required): string or null. last_resolution_failure (Required): {@link
         * PaymentReviewResolutionFailure} or null. The most recent resolution attempt that failed.
         * Set when a decline's refund failed and the review reopened. Null when no attempt has
         * failed. last_resolution_failure.anyOf[1] (Value): {@link
         * PaymentReviewResolutionFailure}. A failed attempt to resolve a review by refund, with
         * the `refund_id` and when it failed. last_resolution_failure.anyOf[2] (Value): null.
         * matched_risk_rule_id (Required): string or null. Example:
         * "rule_01KEZF7C00FWGAQJXXA8CRA319". opened_at (Required): string. RFC3339 timestamp.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". opened_reason (Required): string.
         * Value enum: "rule". order (Optional): {@link ExpandedOrderSummary} or null. Present only
         * when `expand` includes `order`; `null` when expanded and there is no related order.
         * order.anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary fields,
         * including status, payment and refund status, and pricing and settlement amounts,
         * returned when the order is expanded. order.anyOf[2] (Value): null. order_id (Required):
         * string or null. Example: "ord_01KEZF7C0054GQKJ142A8X367A". payment_flow (Required):
         * string. Value enum: "checkout", "payment_link", "invoice", "subscription_initial",
         * "subscription_renewal", "virtual_terminal", "api". payment_intent (Optional): {@link
         * ExpandedPaymentIntentSummary} or null. Present only when `expand` includes
         * `payment_intent`; `null` when expanded and there is no related payment intent.
         * payment_intent.anyOf[1] (Value): {@link ExpandedPaymentIntentSummary}. A payment
         * intent's summary fields, including amount, status, and capture method, returned when the
         * payment intent is expanded. payment_intent.anyOf[2] (Value): null. payment_intent_id
         * (Required): string. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". payment_review_id
         * (Required): string. Unique identifier for this payment review, prefixed `rev_`. Example:
         * "rev_01KEZF7C00BVBQ00XDFNKB1EF6". payment_summary (Required): {@link
         * PaymentReviewPaymentSummary}. The payment details shown on a review: amount, capture
         * method, authorization expiry, card brand and last four digits, and buyer email.
         * pending_action (Required): string or null. The decision being carried out. `null` when
         * status isn't resolving. Value enum: "approve", "decline", "expire", null. refund_id
         * (Required): string or null. The refund that closed this review. Null otherwise. Example:
         * "ref_01KEZF7C003DTD59WKYHEXYQ1K". refunded_money (Required): {@link MoneyValue} or null.
         * Refunded amount for this review. Null when no refund is recorded.
         * refunded_money.anyOf[1] (Value): {@link MoneyValue}. Monetary amount represented as
         * integer minor units plus an ISO 4217 currency code. refunded_money.anyOf[2] (Value):
         * null. resolution_started_at (Required): string or null. RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". resolution_started_by (Required): {@link
         * ResourceReference} or null. The credential that started resolving this payment review,
         * retained after closure. Null when no resolution has started or Flint started it.
         * resolution_started_by.anyOf[1] (Value): {@link ResourceReference}. A reference to
         * another resource by `resource_type` and `resource_id`. resolution_started_by.anyOf[2]
         * (Value): null. risk (Required): {@link PaymentReviewRisk}. The risk assessment shown on
         * a review: a `level` and, when available, a numeric `score`. status (Required): string.
         * Value enum: "open", "resolving", "closed". supported_actions (Required): Array of
         * string. Lifecycle actions accepted in the current stored review state. An action remains
         * listed while it is processing or can be repeated without changing the result. [] enum:
         * "approve", "decline". supported_actions[] (Value): string. Value enum: "approve",
         * "decline". updated_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z".
         */
        "object": {
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "closed_at": string | null;
            /**
             * The credential that closed this payment review. Null when Flint closed it. anyOf[1]
             * (Value): {@link ResourceReference}. A reference to another resource by
             * `resource_type` and `resource_id`. anyOf[2] (Value): null.
             */
            "closed_by": ((ResourceReference) | (null));
            /**
             * Value enum: "approved", "declined", "refunded", "disputed", "payment_canceled",
             * "expired", null.
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
             * Present only when `expand` includes `customer`; `null` when expanded and there is no
             * related customer. anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's
             * summary fields, returned in place of a customer ID when the customer is expanded.
             * anyOf[2] (Value): null.
             */
            "customer"?: ((ExpandedCustomerSummary) | (null));
            /** Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". */
            "customer_id": string | null;
            "ip_address": string | null;
            /**
             * The most recent resolution attempt that failed. Set when a decline's refund failed
             * and the review reopened. Null when no attempt has failed. anyOf[1] (Value): {@link
             * PaymentReviewResolutionFailure}. A failed attempt to resolve a review by refund,
             * with the `refund_id` and when it failed. anyOf[2] (Value): null.
             */
            "last_resolution_failure": ((PaymentReviewResolutionFailure) | (null));
            /** Example: "rule_01KEZF7C00FWGAQJXXA8CRA319". */
            "matched_risk_rule_id": string | null;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "opened_at": string;
            /** Value enum: "rule". */
            "opened_reason": "rule" | (string & {});
            /**
             * Present only when `expand` includes `order`; `null` when expanded and there is no
             * related order. anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary
             * fields, including status, payment and refund status, and pricing and settlement
             * amounts, returned when the order is expanded. anyOf[2] (Value): null.
             */
            "order"?: ((ExpandedOrderSummary) | (null));
            /** Example: "ord_01KEZF7C0054GQKJ142A8X367A". */
            "order_id": string | null;
            /**
             * Value enum: "checkout", "payment_link", "invoice", "subscription_initial",
             * "subscription_renewal", "virtual_terminal", "api".
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
             * Present only when `expand` includes `payment_intent`; `null` when expanded and there
             * is no related payment intent. anyOf[1] (Value): {@link
             * ExpandedPaymentIntentSummary}. A payment intent's summary fields, including amount,
             * status, and capture method, returned when the payment intent is expanded. anyOf[2]
             * (Value): null.
             */
            "payment_intent"?: ((ExpandedPaymentIntentSummary) | (null));
            /** Example: "pi_01KEZF7C00G8H9D509YEV22P7R". */
            "payment_intent_id": string;
            /**
             * Unique identifier for this payment review, prefixed `rev_`. Example:
             * "rev_01KEZF7C00BVBQ00XDFNKB1EF6".
             */
            "payment_review_id": string;
            /**
             * The payment details shown on a review: amount, capture method, authorization expiry,
             * card brand and last four digits, and buyer email.
             */
            "payment_summary": PaymentReviewPaymentSummary;
            /**
             * The decision being carried out. `null` when status isn't resolving. Value enum:
             * "approve", "decline", "expire", null.
             */
            "pending_action": "approve" | "decline" | "expire" | null | (string & {}) | null;
            /**
             * The refund that closed this review. Null otherwise. Example:
             * "ref_01KEZF7C003DTD59WKYHEXYQ1K".
             */
            "refund_id": string | null;
            /**
             * Refunded amount for this review. Null when no refund is recorded. anyOf[1] (Value):
             * {@link MoneyValue}. Monetary amount represented as integer minor units plus an ISO
             * 4217 currency code. anyOf[2] (Value): null.
             */
            "refunded_money": ((MoneyValue) | (null));
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "resolution_started_at": string | null;
            /**
             * The credential that started resolving this payment review, retained after closure.
             * Null when no resolution has started or Flint started it. anyOf[1] (Value): {@link
             * ResourceReference}. A reference to another resource by `resource_type` and
             * `resource_id`. anyOf[2] (Value): null.
             */
            "resolution_started_by": ((ResourceReference) | (null));
            /**
             * The risk assessment shown on a review: a `level` and, when available, a numeric
             * `score`.
             */
            "risk": PaymentReviewRisk;
            /** Value enum: "open", "resolving", "closed". */
            "status": "open" | "resolving" | "closed" | (string & {});
            /**
             * Lifecycle actions accepted in the current stored review state. An action remains
             * listed while it is processing or can be repeated without changing the result. []
             * enum: "approve", "decline". [] (Value): string. Value enum: "approve", "decline".
             */
            "supported_actions": Array<"approve" | "decline" | (string & {})>;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<PaymentReview>;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "payment_review.closed". */
    "event_type"?: "payment_review.closed";
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
 * The `payment_review.closed` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type PaymentReviewClosedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.closed_at (Required): string or null. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.closed_by (Required): {@link
     * ResourceReference} or null. The credential that closed this payment review. Null when Flint
     * closed it. object.closed_by.anyOf[1] (Value): {@link ResourceReference}. A reference to
     * another resource by `resource_type` and `resource_id`. object.closed_by.anyOf[2] (Value):
     * null. object.closed_reason (Required): string or null. Value enum: "approved", "declined",
     * "refunded", "disputed", "payment_canceled", "expired", null. object.customer (Optional):
     * {@link ExpandedCustomerSummary} or null. Present only when `expand` includes `customer`;
     * `null` when expanded and there is no related customer. object.customer.anyOf[1] (Value):
     * {@link ExpandedCustomerSummary}. A customer's summary fields, returned in place of a
     * customer ID when the customer is expanded. object.customer.anyOf[2] (Value): null.
     * object.customer_id (Required): string or null. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     * object.ip_address (Required): string or null. object.last_resolution_failure (Required):
     * {@link PaymentReviewResolutionFailure} or null. The most recent resolution attempt that
     * failed. Set when a decline's refund failed and the review reopened. Null when no attempt has
     * failed. object.last_resolution_failure.anyOf[1] (Value): {@link
     * PaymentReviewResolutionFailure}. A failed attempt to resolve a review by refund, with the
     * `refund_id` and when it failed. object.last_resolution_failure.anyOf[2] (Value): null.
     * object.matched_risk_rule_id (Required): string or null. Example:
     * "rule_01KEZF7C00FWGAQJXXA8CRA319". object.opened_at (Required): string. RFC3339 timestamp.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". object.opened_reason (Required): string.
     * Value enum: "rule". object.order (Optional): {@link ExpandedOrderSummary} or null. Present
     * only when `expand` includes `order`; `null` when expanded and there is no related order.
     * object.order.anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary fields,
     * including status, payment and refund status, and pricing and settlement amounts, returned
     * when the order is expanded. object.order.anyOf[2] (Value): null. object.order_id (Required):
     * string or null. Example: "ord_01KEZF7C0054GQKJ142A8X367A". object.payment_flow (Required):
     * string. Value enum: "checkout", "payment_link", "invoice", "subscription_initial",
     * "subscription_renewal", "virtual_terminal", "api". object.payment_intent (Optional): {@link
     * ExpandedPaymentIntentSummary} or null. Present only when `expand` includes `payment_intent`;
     * `null` when expanded and there is no related payment intent. object.payment_intent.anyOf[1]
     * (Value): {@link ExpandedPaymentIntentSummary}. A payment intent's summary fields, including
     * amount, status, and capture method, returned when the payment intent is expanded.
     * object.payment_intent.anyOf[2] (Value): null. object.payment_intent_id (Required): string.
     * Example: "pi_01KEZF7C00G8H9D509YEV22P7R". object.payment_review_id (Required): string.
     * Unique identifier for this payment review, prefixed `rev_`. Example:
     * "rev_01KEZF7C00BVBQ00XDFNKB1EF6". object.payment_summary (Required): {@link
     * PaymentReviewPaymentSummary}. The payment details shown on a review: amount, capture method,
     * authorization expiry, card brand and last four digits, and buyer email.
     * object.pending_action (Required): string or null. The decision being carried out. `null`
     * when status isn't resolving. Value enum: "approve", "decline", "expire", null.
     * object.refund_id (Required): string or null. The refund that closed this review. Null
     * otherwise. Example: "ref_01KEZF7C003DTD59WKYHEXYQ1K". object.refunded_money (Required):
     * {@link MoneyValue} or null. Refunded amount for this review. Null when no refund is
     * recorded. object.refunded_money.anyOf[1] (Value): {@link MoneyValue}. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     * object.refunded_money.anyOf[2] (Value): null. object.resolution_started_at (Required):
     * string or null. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.resolution_started_by (Required): {@link ResourceReference} or null. The credential
     * that started resolving this payment review, retained after closure. Null when no resolution
     * has started or Flint started it. object.resolution_started_by.anyOf[1] (Value): {@link
     * ResourceReference}. A reference to another resource by `resource_type` and `resource_id`.
     * object.resolution_started_by.anyOf[2] (Value): null. object.risk (Required): {@link
     * PaymentReviewRisk}. The risk assessment shown on a review: a `level` and, when available, a
     * numeric `score`. object.status (Required): string. Value enum: "open", "resolving",
     * "closed". object.supported_actions (Required): Array of string. Lifecycle actions accepted
     * in the current stored review state. An action remains listed while it is processing or can
     * be repeated without changing the result. [] enum: "approve", "decline".
     * object.supported_actions[] (Value): string. Value enum: "approve", "decline".
     * object.updated_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". previous_attributes (Optional): object. Previous values of changed
     * top-level fields in data.object, at this delivery's API version. Nested changes include the
     * whole previous top-level value. A value is null when the field was absent before the change.
     * Omitted when Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields. closed_at
         * (Required): string or null. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". closed_by (Required): {@link ResourceReference} or null. The
         * credential that closed this payment review. Null when Flint closed it.
         * closed_by.anyOf[1] (Value): {@link ResourceReference}. A reference to another resource
         * by `resource_type` and `resource_id`. closed_by.anyOf[2] (Value): null. closed_reason
         * (Required): string or null. Value enum: "approved", "declined", "refunded", "disputed",
         * "payment_canceled", "expired", null. customer (Optional): {@link
         * ExpandedCustomerSummary} or null. Present only when `expand` includes `customer`; `null`
         * when expanded and there is no related customer. customer.anyOf[1] (Value): {@link
         * ExpandedCustomerSummary}. A customer's summary fields, returned in place of a customer
         * ID when the customer is expanded. customer.anyOf[2] (Value): null. customer_id
         * (Required): string or null. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". ip_address
         * (Required): string or null. last_resolution_failure (Required): {@link
         * PaymentReviewResolutionFailure} or null. The most recent resolution attempt that failed.
         * Set when a decline's refund failed and the review reopened. Null when no attempt has
         * failed. last_resolution_failure.anyOf[1] (Value): {@link
         * PaymentReviewResolutionFailure}. A failed attempt to resolve a review by refund, with
         * the `refund_id` and when it failed. last_resolution_failure.anyOf[2] (Value): null.
         * matched_risk_rule_id (Required): string or null. Example:
         * "rule_01KEZF7C00FWGAQJXXA8CRA319". opened_at (Required): string. RFC3339 timestamp.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". opened_reason (Required): string.
         * Value enum: "rule". order (Optional): {@link ExpandedOrderSummary} or null. Present only
         * when `expand` includes `order`; `null` when expanded and there is no related order.
         * order.anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary fields,
         * including status, payment and refund status, and pricing and settlement amounts,
         * returned when the order is expanded. order.anyOf[2] (Value): null. order_id (Required):
         * string or null. Example: "ord_01KEZF7C0054GQKJ142A8X367A". payment_flow (Required):
         * string. Value enum: "checkout", "payment_link", "invoice", "subscription_initial",
         * "subscription_renewal", "virtual_terminal", "api". payment_intent (Optional): {@link
         * ExpandedPaymentIntentSummary} or null. Present only when `expand` includes
         * `payment_intent`; `null` when expanded and there is no related payment intent.
         * payment_intent.anyOf[1] (Value): {@link ExpandedPaymentIntentSummary}. A payment
         * intent's summary fields, including amount, status, and capture method, returned when the
         * payment intent is expanded. payment_intent.anyOf[2] (Value): null. payment_intent_id
         * (Required): string. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". payment_review_id
         * (Required): string. Unique identifier for this payment review, prefixed `rev_`. Example:
         * "rev_01KEZF7C00BVBQ00XDFNKB1EF6". payment_summary (Required): {@link
         * PaymentReviewPaymentSummary}. The payment details shown on a review: amount, capture
         * method, authorization expiry, card brand and last four digits, and buyer email.
         * pending_action (Required): string or null. The decision being carried out. `null` when
         * status isn't resolving. Value enum: "approve", "decline", "expire", null. refund_id
         * (Required): string or null. The refund that closed this review. Null otherwise. Example:
         * "ref_01KEZF7C003DTD59WKYHEXYQ1K". refunded_money (Required): {@link MoneyValue} or null.
         * Refunded amount for this review. Null when no refund is recorded.
         * refunded_money.anyOf[1] (Value): {@link MoneyValue}. Monetary amount represented as
         * integer minor units plus an ISO 4217 currency code. refunded_money.anyOf[2] (Value):
         * null. resolution_started_at (Required): string or null. RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". resolution_started_by (Required): {@link
         * ResourceReference} or null. The credential that started resolving this payment review,
         * retained after closure. Null when no resolution has started or Flint started it.
         * resolution_started_by.anyOf[1] (Value): {@link ResourceReference}. A reference to
         * another resource by `resource_type` and `resource_id`. resolution_started_by.anyOf[2]
         * (Value): null. risk (Required): {@link PaymentReviewRisk}. The risk assessment shown on
         * a review: a `level` and, when available, a numeric `score`. status (Required): string.
         * Value enum: "open", "resolving", "closed". supported_actions (Required): Array of
         * string. Lifecycle actions accepted in the current stored review state. An action remains
         * listed while it is processing or can be repeated without changing the result. [] enum:
         * "approve", "decline". supported_actions[] (Value): string. Value enum: "approve",
         * "decline". updated_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z".
         */
        "object": {
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "closed_at": string | null;
            /**
             * The credential that closed this payment review. Null when Flint closed it. anyOf[1]
             * (Value): {@link ResourceReference}. A reference to another resource by
             * `resource_type` and `resource_id`. anyOf[2] (Value): null.
             */
            "closed_by": ((ResourceReference) | (null));
            /**
             * Value enum: "approved", "declined", "refunded", "disputed", "payment_canceled",
             * "expired", null.
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
             * Present only when `expand` includes `customer`; `null` when expanded and there is no
             * related customer. anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's
             * summary fields, returned in place of a customer ID when the customer is expanded.
             * anyOf[2] (Value): null.
             */
            "customer"?: ((ExpandedCustomerSummary) | (null));
            /** Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". */
            "customer_id": string | null;
            "ip_address": string | null;
            /**
             * The most recent resolution attempt that failed. Set when a decline's refund failed
             * and the review reopened. Null when no attempt has failed. anyOf[1] (Value): {@link
             * PaymentReviewResolutionFailure}. A failed attempt to resolve a review by refund,
             * with the `refund_id` and when it failed. anyOf[2] (Value): null.
             */
            "last_resolution_failure": ((PaymentReviewResolutionFailure) | (null));
            /** Example: "rule_01KEZF7C00FWGAQJXXA8CRA319". */
            "matched_risk_rule_id": string | null;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "opened_at": string;
            /** Value enum: "rule". */
            "opened_reason": "rule" | (string & {});
            /**
             * Present only when `expand` includes `order`; `null` when expanded and there is no
             * related order. anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary
             * fields, including status, payment and refund status, and pricing and settlement
             * amounts, returned when the order is expanded. anyOf[2] (Value): null.
             */
            "order"?: ((ExpandedOrderSummary) | (null));
            /** Example: "ord_01KEZF7C0054GQKJ142A8X367A". */
            "order_id": string | null;
            /**
             * Value enum: "checkout", "payment_link", "invoice", "subscription_initial",
             * "subscription_renewal", "virtual_terminal", "api".
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
             * Present only when `expand` includes `payment_intent`; `null` when expanded and there
             * is no related payment intent. anyOf[1] (Value): {@link
             * ExpandedPaymentIntentSummary}. A payment intent's summary fields, including amount,
             * status, and capture method, returned when the payment intent is expanded. anyOf[2]
             * (Value): null.
             */
            "payment_intent"?: ((ExpandedPaymentIntentSummary) | (null));
            /** Example: "pi_01KEZF7C00G8H9D509YEV22P7R". */
            "payment_intent_id": string;
            /**
             * Unique identifier for this payment review, prefixed `rev_`. Example:
             * "rev_01KEZF7C00BVBQ00XDFNKB1EF6".
             */
            "payment_review_id": string;
            /**
             * The payment details shown on a review: amount, capture method, authorization expiry,
             * card brand and last four digits, and buyer email.
             */
            "payment_summary": PaymentReviewPaymentSummary;
            /**
             * The decision being carried out. `null` when status isn't resolving. Value enum:
             * "approve", "decline", "expire", null.
             */
            "pending_action": "approve" | "decline" | "expire" | null | (string & {}) | null;
            /**
             * The refund that closed this review. Null otherwise. Example:
             * "ref_01KEZF7C003DTD59WKYHEXYQ1K".
             */
            "refund_id": string | null;
            /**
             * Refunded amount for this review. Null when no refund is recorded. anyOf[1] (Value):
             * {@link MoneyValue}. Monetary amount represented as integer minor units plus an ISO
             * 4217 currency code. anyOf[2] (Value): null.
             */
            "refunded_money": ((MoneyValue) | (null));
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "resolution_started_at": string | null;
            /**
             * The credential that started resolving this payment review, retained after closure.
             * Null when no resolution has started or Flint started it. anyOf[1] (Value): {@link
             * ResourceReference}. A reference to another resource by `resource_type` and
             * `resource_id`. anyOf[2] (Value): null.
             */
            "resolution_started_by": ((ResourceReference) | (null));
            /**
             * The risk assessment shown on a review: a `level` and, when available, a numeric
             * `score`.
             */
            "risk": PaymentReviewRisk;
            /** Value enum: "open", "resolving", "closed". */
            "status": "open" | "resolving" | "closed" | (string & {});
            /**
             * Lifecycle actions accepted in the current stored review state. An action remains
             * listed while it is processing or can be repeated without changing the result. []
             * enum: "approve", "decline". [] (Value): string. Value enum: "approve", "decline".
             */
            "supported_actions": Array<"approve" | "decline" | (string & {})>;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<PaymentReview>;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "payment_review.closed". */
    "event_type"?: "payment_review.closed";
});
/** A page of `PaymentReview` objects. */
export type PaymentReviewListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * PaymentReview}. A payment review requiring a merchant decision.
     */
    "data": Array<PaymentReview>;
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
export type PaymentReviewOpenedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "closed_at": string | null;
            "closed_by": ((ResourceReference) | (null));
            "closed_reason": "approved"
                | "declined"
                | "refunded"
                | "disputed"
                | "payment_canceled"
                | "expired"
                | null
                | (string & {})
                | null;
            "customer"?: ((ExpandedCustomerSummary) | (null));
            "customer_id": string | null;
            "ip_address": string | null;
            "last_resolution_failure": ((PaymentReviewResolutionFailure) | (null));
            "matched_risk_rule_id": string | null;
            "opened_at": string;
            "opened_reason": "rule" | (string & {});
            "order"?: ((ExpandedOrderSummary) | (null));
            "order_id": string | null;
            "payment_flow": "checkout"
                | "payment_link"
                | "invoice"
                | "subscription_initial"
                | "subscription_renewal"
                | "virtual_terminal"
                | "api"
                | (string & {});
            "payment_intent"?: ((ExpandedPaymentIntentSummary) | (null));
            "payment_intent_id": string;
            "payment_review_id": string;
            "payment_summary": PaymentReviewPaymentSummary;
            "pending_action": "approve" | "decline" | "expire" | null | (string & {}) | null;
            "refund_id": string | null;
            "refunded_money": ((MoneyValue) | (null));
            "resolution_started_at": string | null;
            "resolution_started_by": ((ResourceReference) | (null));
            "risk": PaymentReviewRisk;
            "status": "open" | "resolving" | "closed" | (string & {});
            "supported_actions": Array<"approve" | "decline" | (string & {})>;
            "updated_at": string;
        };
        "previous_attributes"?: Partial<PaymentReview>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "payment_review.opened";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "closed_at": string | null;
            "closed_by": ((ResourceReference) | (null));
            "closed_reason": "approved"
                | "declined"
                | "refunded"
                | "disputed"
                | "payment_canceled"
                | "expired"
                | null
                | (string & {})
                | null;
            "customer"?: ((ExpandedCustomerSummary) | (null));
            "customer_id": string | null;
            "ip_address": string | null;
            "last_resolution_failure": ((PaymentReviewResolutionFailure) | (null));
            "matched_risk_rule_id": string | null;
            "opened_at": string;
            "opened_reason": "rule" | (string & {});
            "order"?: ((ExpandedOrderSummary) | (null));
            "order_id": string | null;
            "payment_flow": "checkout"
                | "payment_link"
                | "invoice"
                | "subscription_initial"
                | "subscription_renewal"
                | "virtual_terminal"
                | "api"
                | (string & {});
            "payment_intent"?: ((ExpandedPaymentIntentSummary) | (null));
            "payment_intent_id": string;
            "payment_review_id": string;
            "payment_summary": PaymentReviewPaymentSummary;
            "pending_action": "approve" | "decline" | "expire" | null | (string & {}) | null;
            "refund_id": string | null;
            "refunded_money": ((MoneyValue) | (null));
            "resolution_started_at": string | null;
            "resolution_started_by": ((ResourceReference) | (null));
            "risk": PaymentReviewRisk;
            "status": "open" | "resolving" | "closed" | (string & {});
            "supported_actions": Array<"approve" | "decline" | (string & {})>;
            "updated_at": string;
        };
        "previous_attributes"?: Partial<PaymentReview>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "payment_review.opened";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "payment_review.opened";
});
/**
 * The `payment_review.opened` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type PaymentReviewOpenedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.closed_at (Required): string or null. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.closed_by (Required): {@link
     * ResourceReference} or null. The credential that closed this payment review. Null when Flint
     * closed it. object.closed_by.anyOf[1] (Value): {@link ResourceReference}. A reference to
     * another resource by `resource_type` and `resource_id`. object.closed_by.anyOf[2] (Value):
     * null. object.closed_reason (Required): string or null. Value enum: "approved", "declined",
     * "refunded", "disputed", "payment_canceled", "expired", null. object.customer (Optional):
     * {@link ExpandedCustomerSummary} or null. Present only when `expand` includes `customer`;
     * `null` when expanded and there is no related customer. object.customer.anyOf[1] (Value):
     * {@link ExpandedCustomerSummary}. A customer's summary fields, returned in place of a
     * customer ID when the customer is expanded. object.customer.anyOf[2] (Value): null.
     * object.customer_id (Required): string or null. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     * object.ip_address (Required): string or null. object.last_resolution_failure (Required):
     * {@link PaymentReviewResolutionFailure} or null. The most recent resolution attempt that
     * failed. Set when a decline's refund failed and the review reopened. Null when no attempt has
     * failed. object.last_resolution_failure.anyOf[1] (Value): {@link
     * PaymentReviewResolutionFailure}. A failed attempt to resolve a review by refund, with the
     * `refund_id` and when it failed. object.last_resolution_failure.anyOf[2] (Value): null.
     * object.matched_risk_rule_id (Required): string or null. Example:
     * "rule_01KEZF7C00FWGAQJXXA8CRA319". object.opened_at (Required): string. RFC3339 timestamp.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". object.opened_reason (Required): string.
     * Value enum: "rule". object.order (Optional): {@link ExpandedOrderSummary} or null. Present
     * only when `expand` includes `order`; `null` when expanded and there is no related order.
     * object.order.anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary fields,
     * including status, payment and refund status, and pricing and settlement amounts, returned
     * when the order is expanded. object.order.anyOf[2] (Value): null. object.order_id (Required):
     * string or null. Example: "ord_01KEZF7C0054GQKJ142A8X367A". object.payment_flow (Required):
     * string. Value enum: "checkout", "payment_link", "invoice", "subscription_initial",
     * "subscription_renewal", "virtual_terminal", "api". object.payment_intent (Optional): {@link
     * ExpandedPaymentIntentSummary} or null. Present only when `expand` includes `payment_intent`;
     * `null` when expanded and there is no related payment intent. object.payment_intent.anyOf[1]
     * (Value): {@link ExpandedPaymentIntentSummary}. A payment intent's summary fields, including
     * amount, status, and capture method, returned when the payment intent is expanded.
     * object.payment_intent.anyOf[2] (Value): null. object.payment_intent_id (Required): string.
     * Example: "pi_01KEZF7C00G8H9D509YEV22P7R". object.payment_review_id (Required): string.
     * Unique identifier for this payment review, prefixed `rev_`. Example:
     * "rev_01KEZF7C00BVBQ00XDFNKB1EF6". object.payment_summary (Required): {@link
     * PaymentReviewPaymentSummary}. The payment details shown on a review: amount, capture method,
     * authorization expiry, card brand and last four digits, and buyer email.
     * object.pending_action (Required): string or null. The decision being carried out. `null`
     * when status isn't resolving. Value enum: "approve", "decline", "expire", null.
     * object.refund_id (Required): string or null. The refund that closed this review. Null
     * otherwise. Example: "ref_01KEZF7C003DTD59WKYHEXYQ1K". object.refunded_money (Required):
     * {@link MoneyValue} or null. Refunded amount for this review. Null when no refund is
     * recorded. object.refunded_money.anyOf[1] (Value): {@link MoneyValue}. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     * object.refunded_money.anyOf[2] (Value): null. object.resolution_started_at (Required):
     * string or null. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.resolution_started_by (Required): {@link ResourceReference} or null. The credential
     * that started resolving this payment review, retained after closure. Null when no resolution
     * has started or Flint started it. object.resolution_started_by.anyOf[1] (Value): {@link
     * ResourceReference}. A reference to another resource by `resource_type` and `resource_id`.
     * object.resolution_started_by.anyOf[2] (Value): null. object.risk (Required): {@link
     * PaymentReviewRisk}. The risk assessment shown on a review: a `level` and, when available, a
     * numeric `score`. object.status (Required): string. Value enum: "open", "resolving",
     * "closed". object.supported_actions (Required): Array of string. Lifecycle actions accepted
     * in the current stored review state. An action remains listed while it is processing or can
     * be repeated without changing the result. [] enum: "approve", "decline".
     * object.supported_actions[] (Value): string. Value enum: "approve", "decline".
     * object.updated_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". previous_attributes (Optional): object. Previous values of changed
     * top-level fields in data.object, at this delivery's API version. Nested changes include the
     * whole previous top-level value. A value is null when the field was absent before the change.
     * Omitted when Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields. closed_at
         * (Required): string or null. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". closed_by (Required): {@link ResourceReference} or null. The
         * credential that closed this payment review. Null when Flint closed it.
         * closed_by.anyOf[1] (Value): {@link ResourceReference}. A reference to another resource
         * by `resource_type` and `resource_id`. closed_by.anyOf[2] (Value): null. closed_reason
         * (Required): string or null. Value enum: "approved", "declined", "refunded", "disputed",
         * "payment_canceled", "expired", null. customer (Optional): {@link
         * ExpandedCustomerSummary} or null. Present only when `expand` includes `customer`; `null`
         * when expanded and there is no related customer. customer.anyOf[1] (Value): {@link
         * ExpandedCustomerSummary}. A customer's summary fields, returned in place of a customer
         * ID when the customer is expanded. customer.anyOf[2] (Value): null. customer_id
         * (Required): string or null. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". ip_address
         * (Required): string or null. last_resolution_failure (Required): {@link
         * PaymentReviewResolutionFailure} or null. The most recent resolution attempt that failed.
         * Set when a decline's refund failed and the review reopened. Null when no attempt has
         * failed. last_resolution_failure.anyOf[1] (Value): {@link
         * PaymentReviewResolutionFailure}. A failed attempt to resolve a review by refund, with
         * the `refund_id` and when it failed. last_resolution_failure.anyOf[2] (Value): null.
         * matched_risk_rule_id (Required): string or null. Example:
         * "rule_01KEZF7C00FWGAQJXXA8CRA319". opened_at (Required): string. RFC3339 timestamp.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". opened_reason (Required): string.
         * Value enum: "rule". order (Optional): {@link ExpandedOrderSummary} or null. Present only
         * when `expand` includes `order`; `null` when expanded and there is no related order.
         * order.anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary fields,
         * including status, payment and refund status, and pricing and settlement amounts,
         * returned when the order is expanded. order.anyOf[2] (Value): null. order_id (Required):
         * string or null. Example: "ord_01KEZF7C0054GQKJ142A8X367A". payment_flow (Required):
         * string. Value enum: "checkout", "payment_link", "invoice", "subscription_initial",
         * "subscription_renewal", "virtual_terminal", "api". payment_intent (Optional): {@link
         * ExpandedPaymentIntentSummary} or null. Present only when `expand` includes
         * `payment_intent`; `null` when expanded and there is no related payment intent.
         * payment_intent.anyOf[1] (Value): {@link ExpandedPaymentIntentSummary}. A payment
         * intent's summary fields, including amount, status, and capture method, returned when the
         * payment intent is expanded. payment_intent.anyOf[2] (Value): null. payment_intent_id
         * (Required): string. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". payment_review_id
         * (Required): string. Unique identifier for this payment review, prefixed `rev_`. Example:
         * "rev_01KEZF7C00BVBQ00XDFNKB1EF6". payment_summary (Required): {@link
         * PaymentReviewPaymentSummary}. The payment details shown on a review: amount, capture
         * method, authorization expiry, card brand and last four digits, and buyer email.
         * pending_action (Required): string or null. The decision being carried out. `null` when
         * status isn't resolving. Value enum: "approve", "decline", "expire", null. refund_id
         * (Required): string or null. The refund that closed this review. Null otherwise. Example:
         * "ref_01KEZF7C003DTD59WKYHEXYQ1K". refunded_money (Required): {@link MoneyValue} or null.
         * Refunded amount for this review. Null when no refund is recorded.
         * refunded_money.anyOf[1] (Value): {@link MoneyValue}. Monetary amount represented as
         * integer minor units plus an ISO 4217 currency code. refunded_money.anyOf[2] (Value):
         * null. resolution_started_at (Required): string or null. RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". resolution_started_by (Required): {@link
         * ResourceReference} or null. The credential that started resolving this payment review,
         * retained after closure. Null when no resolution has started or Flint started it.
         * resolution_started_by.anyOf[1] (Value): {@link ResourceReference}. A reference to
         * another resource by `resource_type` and `resource_id`. resolution_started_by.anyOf[2]
         * (Value): null. risk (Required): {@link PaymentReviewRisk}. The risk assessment shown on
         * a review: a `level` and, when available, a numeric `score`. status (Required): string.
         * Value enum: "open", "resolving", "closed". supported_actions (Required): Array of
         * string. Lifecycle actions accepted in the current stored review state. An action remains
         * listed while it is processing or can be repeated without changing the result. [] enum:
         * "approve", "decline". supported_actions[] (Value): string. Value enum: "approve",
         * "decline". updated_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z".
         */
        "object": {
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "closed_at": string | null;
            /**
             * The credential that closed this payment review. Null when Flint closed it. anyOf[1]
             * (Value): {@link ResourceReference}. A reference to another resource by
             * `resource_type` and `resource_id`. anyOf[2] (Value): null.
             */
            "closed_by": ((ResourceReference) | (null));
            /**
             * Value enum: "approved", "declined", "refunded", "disputed", "payment_canceled",
             * "expired", null.
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
             * Present only when `expand` includes `customer`; `null` when expanded and there is no
             * related customer. anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's
             * summary fields, returned in place of a customer ID when the customer is expanded.
             * anyOf[2] (Value): null.
             */
            "customer"?: ((ExpandedCustomerSummary) | (null));
            /** Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". */
            "customer_id": string | null;
            "ip_address": string | null;
            /**
             * The most recent resolution attempt that failed. Set when a decline's refund failed
             * and the review reopened. Null when no attempt has failed. anyOf[1] (Value): {@link
             * PaymentReviewResolutionFailure}. A failed attempt to resolve a review by refund,
             * with the `refund_id` and when it failed. anyOf[2] (Value): null.
             */
            "last_resolution_failure": ((PaymentReviewResolutionFailure) | (null));
            /** Example: "rule_01KEZF7C00FWGAQJXXA8CRA319". */
            "matched_risk_rule_id": string | null;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "opened_at": string;
            /** Value enum: "rule". */
            "opened_reason": "rule" | (string & {});
            /**
             * Present only when `expand` includes `order`; `null` when expanded and there is no
             * related order. anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary
             * fields, including status, payment and refund status, and pricing and settlement
             * amounts, returned when the order is expanded. anyOf[2] (Value): null.
             */
            "order"?: ((ExpandedOrderSummary) | (null));
            /** Example: "ord_01KEZF7C0054GQKJ142A8X367A". */
            "order_id": string | null;
            /**
             * Value enum: "checkout", "payment_link", "invoice", "subscription_initial",
             * "subscription_renewal", "virtual_terminal", "api".
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
             * Present only when `expand` includes `payment_intent`; `null` when expanded and there
             * is no related payment intent. anyOf[1] (Value): {@link
             * ExpandedPaymentIntentSummary}. A payment intent's summary fields, including amount,
             * status, and capture method, returned when the payment intent is expanded. anyOf[2]
             * (Value): null.
             */
            "payment_intent"?: ((ExpandedPaymentIntentSummary) | (null));
            /** Example: "pi_01KEZF7C00G8H9D509YEV22P7R". */
            "payment_intent_id": string;
            /**
             * Unique identifier for this payment review, prefixed `rev_`. Example:
             * "rev_01KEZF7C00BVBQ00XDFNKB1EF6".
             */
            "payment_review_id": string;
            /**
             * The payment details shown on a review: amount, capture method, authorization expiry,
             * card brand and last four digits, and buyer email.
             */
            "payment_summary": PaymentReviewPaymentSummary;
            /**
             * The decision being carried out. `null` when status isn't resolving. Value enum:
             * "approve", "decline", "expire", null.
             */
            "pending_action": "approve" | "decline" | "expire" | null | (string & {}) | null;
            /**
             * The refund that closed this review. Null otherwise. Example:
             * "ref_01KEZF7C003DTD59WKYHEXYQ1K".
             */
            "refund_id": string | null;
            /**
             * Refunded amount for this review. Null when no refund is recorded. anyOf[1] (Value):
             * {@link MoneyValue}. Monetary amount represented as integer minor units plus an ISO
             * 4217 currency code. anyOf[2] (Value): null.
             */
            "refunded_money": ((MoneyValue) | (null));
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "resolution_started_at": string | null;
            /**
             * The credential that started resolving this payment review, retained after closure.
             * Null when no resolution has started or Flint started it. anyOf[1] (Value): {@link
             * ResourceReference}. A reference to another resource by `resource_type` and
             * `resource_id`. anyOf[2] (Value): null.
             */
            "resolution_started_by": ((ResourceReference) | (null));
            /**
             * The risk assessment shown on a review: a `level` and, when available, a numeric
             * `score`.
             */
            "risk": PaymentReviewRisk;
            /** Value enum: "open", "resolving", "closed". */
            "status": "open" | "resolving" | "closed" | (string & {});
            /**
             * Lifecycle actions accepted in the current stored review state. An action remains
             * listed while it is processing or can be repeated without changing the result. []
             * enum: "approve", "decline". [] (Value): string. Value enum: "approve", "decline".
             */
            "supported_actions": Array<"approve" | "decline" | (string & {})>;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<PaymentReview>;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "payment_review.opened". */
    "event_type"?: "payment_review.opened";
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
 * The `payment_review.opened` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type PaymentReviewOpenedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.closed_at (Required): string or null. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.closed_by (Required): {@link
     * ResourceReference} or null. The credential that closed this payment review. Null when Flint
     * closed it. object.closed_by.anyOf[1] (Value): {@link ResourceReference}. A reference to
     * another resource by `resource_type` and `resource_id`. object.closed_by.anyOf[2] (Value):
     * null. object.closed_reason (Required): string or null. Value enum: "approved", "declined",
     * "refunded", "disputed", "payment_canceled", "expired", null. object.customer (Optional):
     * {@link ExpandedCustomerSummary} or null. Present only when `expand` includes `customer`;
     * `null` when expanded and there is no related customer. object.customer.anyOf[1] (Value):
     * {@link ExpandedCustomerSummary}. A customer's summary fields, returned in place of a
     * customer ID when the customer is expanded. object.customer.anyOf[2] (Value): null.
     * object.customer_id (Required): string or null. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     * object.ip_address (Required): string or null. object.last_resolution_failure (Required):
     * {@link PaymentReviewResolutionFailure} or null. The most recent resolution attempt that
     * failed. Set when a decline's refund failed and the review reopened. Null when no attempt has
     * failed. object.last_resolution_failure.anyOf[1] (Value): {@link
     * PaymentReviewResolutionFailure}. A failed attempt to resolve a review by refund, with the
     * `refund_id` and when it failed. object.last_resolution_failure.anyOf[2] (Value): null.
     * object.matched_risk_rule_id (Required): string or null. Example:
     * "rule_01KEZF7C00FWGAQJXXA8CRA319". object.opened_at (Required): string. RFC3339 timestamp.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". object.opened_reason (Required): string.
     * Value enum: "rule". object.order (Optional): {@link ExpandedOrderSummary} or null. Present
     * only when `expand` includes `order`; `null` when expanded and there is no related order.
     * object.order.anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary fields,
     * including status, payment and refund status, and pricing and settlement amounts, returned
     * when the order is expanded. object.order.anyOf[2] (Value): null. object.order_id (Required):
     * string or null. Example: "ord_01KEZF7C0054GQKJ142A8X367A". object.payment_flow (Required):
     * string. Value enum: "checkout", "payment_link", "invoice", "subscription_initial",
     * "subscription_renewal", "virtual_terminal", "api". object.payment_intent (Optional): {@link
     * ExpandedPaymentIntentSummary} or null. Present only when `expand` includes `payment_intent`;
     * `null` when expanded and there is no related payment intent. object.payment_intent.anyOf[1]
     * (Value): {@link ExpandedPaymentIntentSummary}. A payment intent's summary fields, including
     * amount, status, and capture method, returned when the payment intent is expanded.
     * object.payment_intent.anyOf[2] (Value): null. object.payment_intent_id (Required): string.
     * Example: "pi_01KEZF7C00G8H9D509YEV22P7R". object.payment_review_id (Required): string.
     * Unique identifier for this payment review, prefixed `rev_`. Example:
     * "rev_01KEZF7C00BVBQ00XDFNKB1EF6". object.payment_summary (Required): {@link
     * PaymentReviewPaymentSummary}. The payment details shown on a review: amount, capture method,
     * authorization expiry, card brand and last four digits, and buyer email.
     * object.pending_action (Required): string or null. The decision being carried out. `null`
     * when status isn't resolving. Value enum: "approve", "decline", "expire", null.
     * object.refund_id (Required): string or null. The refund that closed this review. Null
     * otherwise. Example: "ref_01KEZF7C003DTD59WKYHEXYQ1K". object.refunded_money (Required):
     * {@link MoneyValue} or null. Refunded amount for this review. Null when no refund is
     * recorded. object.refunded_money.anyOf[1] (Value): {@link MoneyValue}. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     * object.refunded_money.anyOf[2] (Value): null. object.resolution_started_at (Required):
     * string or null. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.resolution_started_by (Required): {@link ResourceReference} or null. The credential
     * that started resolving this payment review, retained after closure. Null when no resolution
     * has started or Flint started it. object.resolution_started_by.anyOf[1] (Value): {@link
     * ResourceReference}. A reference to another resource by `resource_type` and `resource_id`.
     * object.resolution_started_by.anyOf[2] (Value): null. object.risk (Required): {@link
     * PaymentReviewRisk}. The risk assessment shown on a review: a `level` and, when available, a
     * numeric `score`. object.status (Required): string. Value enum: "open", "resolving",
     * "closed". object.supported_actions (Required): Array of string. Lifecycle actions accepted
     * in the current stored review state. An action remains listed while it is processing or can
     * be repeated without changing the result. [] enum: "approve", "decline".
     * object.supported_actions[] (Value): string. Value enum: "approve", "decline".
     * object.updated_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". previous_attributes (Optional): object. Previous values of changed
     * top-level fields in data.object, at this delivery's API version. Nested changes include the
     * whole previous top-level value. A value is null when the field was absent before the change.
     * Omitted when Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields. closed_at
         * (Required): string or null. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". closed_by (Required): {@link ResourceReference} or null. The
         * credential that closed this payment review. Null when Flint closed it.
         * closed_by.anyOf[1] (Value): {@link ResourceReference}. A reference to another resource
         * by `resource_type` and `resource_id`. closed_by.anyOf[2] (Value): null. closed_reason
         * (Required): string or null. Value enum: "approved", "declined", "refunded", "disputed",
         * "payment_canceled", "expired", null. customer (Optional): {@link
         * ExpandedCustomerSummary} or null. Present only when `expand` includes `customer`; `null`
         * when expanded and there is no related customer. customer.anyOf[1] (Value): {@link
         * ExpandedCustomerSummary}. A customer's summary fields, returned in place of a customer
         * ID when the customer is expanded. customer.anyOf[2] (Value): null. customer_id
         * (Required): string or null. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". ip_address
         * (Required): string or null. last_resolution_failure (Required): {@link
         * PaymentReviewResolutionFailure} or null. The most recent resolution attempt that failed.
         * Set when a decline's refund failed and the review reopened. Null when no attempt has
         * failed. last_resolution_failure.anyOf[1] (Value): {@link
         * PaymentReviewResolutionFailure}. A failed attempt to resolve a review by refund, with
         * the `refund_id` and when it failed. last_resolution_failure.anyOf[2] (Value): null.
         * matched_risk_rule_id (Required): string or null. Example:
         * "rule_01KEZF7C00FWGAQJXXA8CRA319". opened_at (Required): string. RFC3339 timestamp.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". opened_reason (Required): string.
         * Value enum: "rule". order (Optional): {@link ExpandedOrderSummary} or null. Present only
         * when `expand` includes `order`; `null` when expanded and there is no related order.
         * order.anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary fields,
         * including status, payment and refund status, and pricing and settlement amounts,
         * returned when the order is expanded. order.anyOf[2] (Value): null. order_id (Required):
         * string or null. Example: "ord_01KEZF7C0054GQKJ142A8X367A". payment_flow (Required):
         * string. Value enum: "checkout", "payment_link", "invoice", "subscription_initial",
         * "subscription_renewal", "virtual_terminal", "api". payment_intent (Optional): {@link
         * ExpandedPaymentIntentSummary} or null. Present only when `expand` includes
         * `payment_intent`; `null` when expanded and there is no related payment intent.
         * payment_intent.anyOf[1] (Value): {@link ExpandedPaymentIntentSummary}. A payment
         * intent's summary fields, including amount, status, and capture method, returned when the
         * payment intent is expanded. payment_intent.anyOf[2] (Value): null. payment_intent_id
         * (Required): string. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". payment_review_id
         * (Required): string. Unique identifier for this payment review, prefixed `rev_`. Example:
         * "rev_01KEZF7C00BVBQ00XDFNKB1EF6". payment_summary (Required): {@link
         * PaymentReviewPaymentSummary}. The payment details shown on a review: amount, capture
         * method, authorization expiry, card brand and last four digits, and buyer email.
         * pending_action (Required): string or null. The decision being carried out. `null` when
         * status isn't resolving. Value enum: "approve", "decline", "expire", null. refund_id
         * (Required): string or null. The refund that closed this review. Null otherwise. Example:
         * "ref_01KEZF7C003DTD59WKYHEXYQ1K". refunded_money (Required): {@link MoneyValue} or null.
         * Refunded amount for this review. Null when no refund is recorded.
         * refunded_money.anyOf[1] (Value): {@link MoneyValue}. Monetary amount represented as
         * integer minor units plus an ISO 4217 currency code. refunded_money.anyOf[2] (Value):
         * null. resolution_started_at (Required): string or null. RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". resolution_started_by (Required): {@link
         * ResourceReference} or null. The credential that started resolving this payment review,
         * retained after closure. Null when no resolution has started or Flint started it.
         * resolution_started_by.anyOf[1] (Value): {@link ResourceReference}. A reference to
         * another resource by `resource_type` and `resource_id`. resolution_started_by.anyOf[2]
         * (Value): null. risk (Required): {@link PaymentReviewRisk}. The risk assessment shown on
         * a review: a `level` and, when available, a numeric `score`. status (Required): string.
         * Value enum: "open", "resolving", "closed". supported_actions (Required): Array of
         * string. Lifecycle actions accepted in the current stored review state. An action remains
         * listed while it is processing or can be repeated without changing the result. [] enum:
         * "approve", "decline". supported_actions[] (Value): string. Value enum: "approve",
         * "decline". updated_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z".
         */
        "object": {
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "closed_at": string | null;
            /**
             * The credential that closed this payment review. Null when Flint closed it. anyOf[1]
             * (Value): {@link ResourceReference}. A reference to another resource by
             * `resource_type` and `resource_id`. anyOf[2] (Value): null.
             */
            "closed_by": ((ResourceReference) | (null));
            /**
             * Value enum: "approved", "declined", "refunded", "disputed", "payment_canceled",
             * "expired", null.
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
             * Present only when `expand` includes `customer`; `null` when expanded and there is no
             * related customer. anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's
             * summary fields, returned in place of a customer ID when the customer is expanded.
             * anyOf[2] (Value): null.
             */
            "customer"?: ((ExpandedCustomerSummary) | (null));
            /** Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". */
            "customer_id": string | null;
            "ip_address": string | null;
            /**
             * The most recent resolution attempt that failed. Set when a decline's refund failed
             * and the review reopened. Null when no attempt has failed. anyOf[1] (Value): {@link
             * PaymentReviewResolutionFailure}. A failed attempt to resolve a review by refund,
             * with the `refund_id` and when it failed. anyOf[2] (Value): null.
             */
            "last_resolution_failure": ((PaymentReviewResolutionFailure) | (null));
            /** Example: "rule_01KEZF7C00FWGAQJXXA8CRA319". */
            "matched_risk_rule_id": string | null;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "opened_at": string;
            /** Value enum: "rule". */
            "opened_reason": "rule" | (string & {});
            /**
             * Present only when `expand` includes `order`; `null` when expanded and there is no
             * related order. anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary
             * fields, including status, payment and refund status, and pricing and settlement
             * amounts, returned when the order is expanded. anyOf[2] (Value): null.
             */
            "order"?: ((ExpandedOrderSummary) | (null));
            /** Example: "ord_01KEZF7C0054GQKJ142A8X367A". */
            "order_id": string | null;
            /**
             * Value enum: "checkout", "payment_link", "invoice", "subscription_initial",
             * "subscription_renewal", "virtual_terminal", "api".
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
             * Present only when `expand` includes `payment_intent`; `null` when expanded and there
             * is no related payment intent. anyOf[1] (Value): {@link
             * ExpandedPaymentIntentSummary}. A payment intent's summary fields, including amount,
             * status, and capture method, returned when the payment intent is expanded. anyOf[2]
             * (Value): null.
             */
            "payment_intent"?: ((ExpandedPaymentIntentSummary) | (null));
            /** Example: "pi_01KEZF7C00G8H9D509YEV22P7R". */
            "payment_intent_id": string;
            /**
             * Unique identifier for this payment review, prefixed `rev_`. Example:
             * "rev_01KEZF7C00BVBQ00XDFNKB1EF6".
             */
            "payment_review_id": string;
            /**
             * The payment details shown on a review: amount, capture method, authorization expiry,
             * card brand and last four digits, and buyer email.
             */
            "payment_summary": PaymentReviewPaymentSummary;
            /**
             * The decision being carried out. `null` when status isn't resolving. Value enum:
             * "approve", "decline", "expire", null.
             */
            "pending_action": "approve" | "decline" | "expire" | null | (string & {}) | null;
            /**
             * The refund that closed this review. Null otherwise. Example:
             * "ref_01KEZF7C003DTD59WKYHEXYQ1K".
             */
            "refund_id": string | null;
            /**
             * Refunded amount for this review. Null when no refund is recorded. anyOf[1] (Value):
             * {@link MoneyValue}. Monetary amount represented as integer minor units plus an ISO
             * 4217 currency code. anyOf[2] (Value): null.
             */
            "refunded_money": ((MoneyValue) | (null));
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "resolution_started_at": string | null;
            /**
             * The credential that started resolving this payment review, retained after closure.
             * Null when no resolution has started or Flint started it. anyOf[1] (Value): {@link
             * ResourceReference}. A reference to another resource by `resource_type` and
             * `resource_id`. anyOf[2] (Value): null.
             */
            "resolution_started_by": ((ResourceReference) | (null));
            /**
             * The risk assessment shown on a review: a `level` and, when available, a numeric
             * `score`.
             */
            "risk": PaymentReviewRisk;
            /** Value enum: "open", "resolving", "closed". */
            "status": "open" | "resolving" | "closed" | (string & {});
            /**
             * Lifecycle actions accepted in the current stored review state. An action remains
             * listed while it is processing or can be repeated without changing the result. []
             * enum: "approve", "decline". [] (Value): string. Value enum: "approve", "decline".
             */
            "supported_actions": Array<"approve" | "decline" | (string & {})>;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<PaymentReview>;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
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
    /**
     * Effective Flint capture deadline: the earlier of the provider capture deadline and any order
     * resource guarantee. `null` when the payment has no authorization deadline. Format:
     * date-time. Example: "2026-08-02T16:00:00Z".
     */
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
        "object": {
            "closed_at": string | null;
            "closed_by": ((ResourceReference) | (null));
            "closed_reason": "approved"
                | "declined"
                | "refunded"
                | "disputed"
                | "payment_canceled"
                | "expired"
                | null
                | (string & {})
                | null;
            "customer"?: ((ExpandedCustomerSummary) | (null));
            "customer_id": string | null;
            "ip_address": string | null;
            "last_resolution_failure": ((PaymentReviewResolutionFailure) | (null));
            "matched_risk_rule_id": string | null;
            "opened_at": string;
            "opened_reason": "rule" | (string & {});
            "order"?: ((ExpandedOrderSummary) | (null));
            "order_id": string | null;
            "payment_flow": "checkout"
                | "payment_link"
                | "invoice"
                | "subscription_initial"
                | "subscription_renewal"
                | "virtual_terminal"
                | "api"
                | (string & {});
            "payment_intent"?: ((ExpandedPaymentIntentSummary) | (null));
            "payment_intent_id": string;
            "payment_review_id": string;
            "payment_summary": PaymentReviewPaymentSummary;
            "pending_action": "approve" | "decline" | "expire" | null | (string & {}) | null;
            "refund_id": string | null;
            "refunded_money": ((MoneyValue) | (null));
            "resolution_started_at": string | null;
            "resolution_started_by": ((ResourceReference) | (null));
            "risk": PaymentReviewRisk;
            "status": "open" | "resolving" | "closed" | (string & {});
            "supported_actions": Array<"approve" | "decline" | (string & {})>;
            "updated_at": string;
        };
        "previous_attributes"?: Partial<PaymentReview>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "payment_review.reopened";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "closed_at": string | null;
            "closed_by": ((ResourceReference) | (null));
            "closed_reason": "approved"
                | "declined"
                | "refunded"
                | "disputed"
                | "payment_canceled"
                | "expired"
                | null
                | (string & {})
                | null;
            "customer"?: ((ExpandedCustomerSummary) | (null));
            "customer_id": string | null;
            "ip_address": string | null;
            "last_resolution_failure": ((PaymentReviewResolutionFailure) | (null));
            "matched_risk_rule_id": string | null;
            "opened_at": string;
            "opened_reason": "rule" | (string & {});
            "order"?: ((ExpandedOrderSummary) | (null));
            "order_id": string | null;
            "payment_flow": "checkout"
                | "payment_link"
                | "invoice"
                | "subscription_initial"
                | "subscription_renewal"
                | "virtual_terminal"
                | "api"
                | (string & {});
            "payment_intent"?: ((ExpandedPaymentIntentSummary) | (null));
            "payment_intent_id": string;
            "payment_review_id": string;
            "payment_summary": PaymentReviewPaymentSummary;
            "pending_action": "approve" | "decline" | "expire" | null | (string & {}) | null;
            "refund_id": string | null;
            "refunded_money": ((MoneyValue) | (null));
            "resolution_started_at": string | null;
            "resolution_started_by": ((ResourceReference) | (null));
            "risk": PaymentReviewRisk;
            "status": "open" | "resolving" | "closed" | (string & {});
            "supported_actions": Array<"approve" | "decline" | (string & {})>;
            "updated_at": string;
        };
        "previous_attributes"?: Partial<PaymentReview>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "payment_review.reopened";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
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
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.closed_at (Required): string or null. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.closed_by (Required): {@link
     * ResourceReference} or null. The credential that closed this payment review. Null when Flint
     * closed it. object.closed_by.anyOf[1] (Value): {@link ResourceReference}. A reference to
     * another resource by `resource_type` and `resource_id`. object.closed_by.anyOf[2] (Value):
     * null. object.closed_reason (Required): string or null. Value enum: "approved", "declined",
     * "refunded", "disputed", "payment_canceled", "expired", null. object.customer (Optional):
     * {@link ExpandedCustomerSummary} or null. Present only when `expand` includes `customer`;
     * `null` when expanded and there is no related customer. object.customer.anyOf[1] (Value):
     * {@link ExpandedCustomerSummary}. A customer's summary fields, returned in place of a
     * customer ID when the customer is expanded. object.customer.anyOf[2] (Value): null.
     * object.customer_id (Required): string or null. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     * object.ip_address (Required): string or null. object.last_resolution_failure (Required):
     * {@link PaymentReviewResolutionFailure} or null. The most recent resolution attempt that
     * failed. Set when a decline's refund failed and the review reopened. Null when no attempt has
     * failed. object.last_resolution_failure.anyOf[1] (Value): {@link
     * PaymentReviewResolutionFailure}. A failed attempt to resolve a review by refund, with the
     * `refund_id` and when it failed. object.last_resolution_failure.anyOf[2] (Value): null.
     * object.matched_risk_rule_id (Required): string or null. Example:
     * "rule_01KEZF7C00FWGAQJXXA8CRA319". object.opened_at (Required): string. RFC3339 timestamp.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". object.opened_reason (Required): string.
     * Value enum: "rule". object.order (Optional): {@link ExpandedOrderSummary} or null. Present
     * only when `expand` includes `order`; `null` when expanded and there is no related order.
     * object.order.anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary fields,
     * including status, payment and refund status, and pricing and settlement amounts, returned
     * when the order is expanded. object.order.anyOf[2] (Value): null. object.order_id (Required):
     * string or null. Example: "ord_01KEZF7C0054GQKJ142A8X367A". object.payment_flow (Required):
     * string. Value enum: "checkout", "payment_link", "invoice", "subscription_initial",
     * "subscription_renewal", "virtual_terminal", "api". object.payment_intent (Optional): {@link
     * ExpandedPaymentIntentSummary} or null. Present only when `expand` includes `payment_intent`;
     * `null` when expanded and there is no related payment intent. object.payment_intent.anyOf[1]
     * (Value): {@link ExpandedPaymentIntentSummary}. A payment intent's summary fields, including
     * amount, status, and capture method, returned when the payment intent is expanded.
     * object.payment_intent.anyOf[2] (Value): null. object.payment_intent_id (Required): string.
     * Example: "pi_01KEZF7C00G8H9D509YEV22P7R". object.payment_review_id (Required): string.
     * Unique identifier for this payment review, prefixed `rev_`. Example:
     * "rev_01KEZF7C00BVBQ00XDFNKB1EF6". object.payment_summary (Required): {@link
     * PaymentReviewPaymentSummary}. The payment details shown on a review: amount, capture method,
     * authorization expiry, card brand and last four digits, and buyer email.
     * object.pending_action (Required): string or null. The decision being carried out. `null`
     * when status isn't resolving. Value enum: "approve", "decline", "expire", null.
     * object.refund_id (Required): string or null. The refund that closed this review. Null
     * otherwise. Example: "ref_01KEZF7C003DTD59WKYHEXYQ1K". object.refunded_money (Required):
     * {@link MoneyValue} or null. Refunded amount for this review. Null when no refund is
     * recorded. object.refunded_money.anyOf[1] (Value): {@link MoneyValue}. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     * object.refunded_money.anyOf[2] (Value): null. object.resolution_started_at (Required):
     * string or null. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.resolution_started_by (Required): {@link ResourceReference} or null. The credential
     * that started resolving this payment review, retained after closure. Null when no resolution
     * has started or Flint started it. object.resolution_started_by.anyOf[1] (Value): {@link
     * ResourceReference}. A reference to another resource by `resource_type` and `resource_id`.
     * object.resolution_started_by.anyOf[2] (Value): null. object.risk (Required): {@link
     * PaymentReviewRisk}. The risk assessment shown on a review: a `level` and, when available, a
     * numeric `score`. object.status (Required): string. Value enum: "open", "resolving",
     * "closed". object.supported_actions (Required): Array of string. Lifecycle actions accepted
     * in the current stored review state. An action remains listed while it is processing or can
     * be repeated without changing the result. [] enum: "approve", "decline".
     * object.supported_actions[] (Value): string. Value enum: "approve", "decline".
     * object.updated_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". previous_attributes (Optional): object. Previous values of changed
     * top-level fields in data.object, at this delivery's API version. Nested changes include the
     * whole previous top-level value. A value is null when the field was absent before the change.
     * Omitted when Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields. closed_at
         * (Required): string or null. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". closed_by (Required): {@link ResourceReference} or null. The
         * credential that closed this payment review. Null when Flint closed it.
         * closed_by.anyOf[1] (Value): {@link ResourceReference}. A reference to another resource
         * by `resource_type` and `resource_id`. closed_by.anyOf[2] (Value): null. closed_reason
         * (Required): string or null. Value enum: "approved", "declined", "refunded", "disputed",
         * "payment_canceled", "expired", null. customer (Optional): {@link
         * ExpandedCustomerSummary} or null. Present only when `expand` includes `customer`; `null`
         * when expanded and there is no related customer. customer.anyOf[1] (Value): {@link
         * ExpandedCustomerSummary}. A customer's summary fields, returned in place of a customer
         * ID when the customer is expanded. customer.anyOf[2] (Value): null. customer_id
         * (Required): string or null. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". ip_address
         * (Required): string or null. last_resolution_failure (Required): {@link
         * PaymentReviewResolutionFailure} or null. The most recent resolution attempt that failed.
         * Set when a decline's refund failed and the review reopened. Null when no attempt has
         * failed. last_resolution_failure.anyOf[1] (Value): {@link
         * PaymentReviewResolutionFailure}. A failed attempt to resolve a review by refund, with
         * the `refund_id` and when it failed. last_resolution_failure.anyOf[2] (Value): null.
         * matched_risk_rule_id (Required): string or null. Example:
         * "rule_01KEZF7C00FWGAQJXXA8CRA319". opened_at (Required): string. RFC3339 timestamp.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". opened_reason (Required): string.
         * Value enum: "rule". order (Optional): {@link ExpandedOrderSummary} or null. Present only
         * when `expand` includes `order`; `null` when expanded and there is no related order.
         * order.anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary fields,
         * including status, payment and refund status, and pricing and settlement amounts,
         * returned when the order is expanded. order.anyOf[2] (Value): null. order_id (Required):
         * string or null. Example: "ord_01KEZF7C0054GQKJ142A8X367A". payment_flow (Required):
         * string. Value enum: "checkout", "payment_link", "invoice", "subscription_initial",
         * "subscription_renewal", "virtual_terminal", "api". payment_intent (Optional): {@link
         * ExpandedPaymentIntentSummary} or null. Present only when `expand` includes
         * `payment_intent`; `null` when expanded and there is no related payment intent.
         * payment_intent.anyOf[1] (Value): {@link ExpandedPaymentIntentSummary}. A payment
         * intent's summary fields, including amount, status, and capture method, returned when the
         * payment intent is expanded. payment_intent.anyOf[2] (Value): null. payment_intent_id
         * (Required): string. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". payment_review_id
         * (Required): string. Unique identifier for this payment review, prefixed `rev_`. Example:
         * "rev_01KEZF7C00BVBQ00XDFNKB1EF6". payment_summary (Required): {@link
         * PaymentReviewPaymentSummary}. The payment details shown on a review: amount, capture
         * method, authorization expiry, card brand and last four digits, and buyer email.
         * pending_action (Required): string or null. The decision being carried out. `null` when
         * status isn't resolving. Value enum: "approve", "decline", "expire", null. refund_id
         * (Required): string or null. The refund that closed this review. Null otherwise. Example:
         * "ref_01KEZF7C003DTD59WKYHEXYQ1K". refunded_money (Required): {@link MoneyValue} or null.
         * Refunded amount for this review. Null when no refund is recorded.
         * refunded_money.anyOf[1] (Value): {@link MoneyValue}. Monetary amount represented as
         * integer minor units plus an ISO 4217 currency code. refunded_money.anyOf[2] (Value):
         * null. resolution_started_at (Required): string or null. RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". resolution_started_by (Required): {@link
         * ResourceReference} or null. The credential that started resolving this payment review,
         * retained after closure. Null when no resolution has started or Flint started it.
         * resolution_started_by.anyOf[1] (Value): {@link ResourceReference}. A reference to
         * another resource by `resource_type` and `resource_id`. resolution_started_by.anyOf[2]
         * (Value): null. risk (Required): {@link PaymentReviewRisk}. The risk assessment shown on
         * a review: a `level` and, when available, a numeric `score`. status (Required): string.
         * Value enum: "open", "resolving", "closed". supported_actions (Required): Array of
         * string. Lifecycle actions accepted in the current stored review state. An action remains
         * listed while it is processing or can be repeated without changing the result. [] enum:
         * "approve", "decline". supported_actions[] (Value): string. Value enum: "approve",
         * "decline". updated_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z".
         */
        "object": {
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "closed_at": string | null;
            /**
             * The credential that closed this payment review. Null when Flint closed it. anyOf[1]
             * (Value): {@link ResourceReference}. A reference to another resource by
             * `resource_type` and `resource_id`. anyOf[2] (Value): null.
             */
            "closed_by": ((ResourceReference) | (null));
            /**
             * Value enum: "approved", "declined", "refunded", "disputed", "payment_canceled",
             * "expired", null.
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
             * Present only when `expand` includes `customer`; `null` when expanded and there is no
             * related customer. anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's
             * summary fields, returned in place of a customer ID when the customer is expanded.
             * anyOf[2] (Value): null.
             */
            "customer"?: ((ExpandedCustomerSummary) | (null));
            /** Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". */
            "customer_id": string | null;
            "ip_address": string | null;
            /**
             * The most recent resolution attempt that failed. Set when a decline's refund failed
             * and the review reopened. Null when no attempt has failed. anyOf[1] (Value): {@link
             * PaymentReviewResolutionFailure}. A failed attempt to resolve a review by refund,
             * with the `refund_id` and when it failed. anyOf[2] (Value): null.
             */
            "last_resolution_failure": ((PaymentReviewResolutionFailure) | (null));
            /** Example: "rule_01KEZF7C00FWGAQJXXA8CRA319". */
            "matched_risk_rule_id": string | null;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "opened_at": string;
            /** Value enum: "rule". */
            "opened_reason": "rule" | (string & {});
            /**
             * Present only when `expand` includes `order`; `null` when expanded and there is no
             * related order. anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary
             * fields, including status, payment and refund status, and pricing and settlement
             * amounts, returned when the order is expanded. anyOf[2] (Value): null.
             */
            "order"?: ((ExpandedOrderSummary) | (null));
            /** Example: "ord_01KEZF7C0054GQKJ142A8X367A". */
            "order_id": string | null;
            /**
             * Value enum: "checkout", "payment_link", "invoice", "subscription_initial",
             * "subscription_renewal", "virtual_terminal", "api".
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
             * Present only when `expand` includes `payment_intent`; `null` when expanded and there
             * is no related payment intent. anyOf[1] (Value): {@link
             * ExpandedPaymentIntentSummary}. A payment intent's summary fields, including amount,
             * status, and capture method, returned when the payment intent is expanded. anyOf[2]
             * (Value): null.
             */
            "payment_intent"?: ((ExpandedPaymentIntentSummary) | (null));
            /** Example: "pi_01KEZF7C00G8H9D509YEV22P7R". */
            "payment_intent_id": string;
            /**
             * Unique identifier for this payment review, prefixed `rev_`. Example:
             * "rev_01KEZF7C00BVBQ00XDFNKB1EF6".
             */
            "payment_review_id": string;
            /**
             * The payment details shown on a review: amount, capture method, authorization expiry,
             * card brand and last four digits, and buyer email.
             */
            "payment_summary": PaymentReviewPaymentSummary;
            /**
             * The decision being carried out. `null` when status isn't resolving. Value enum:
             * "approve", "decline", "expire", null.
             */
            "pending_action": "approve" | "decline" | "expire" | null | (string & {}) | null;
            /**
             * The refund that closed this review. Null otherwise. Example:
             * "ref_01KEZF7C003DTD59WKYHEXYQ1K".
             */
            "refund_id": string | null;
            /**
             * Refunded amount for this review. Null when no refund is recorded. anyOf[1] (Value):
             * {@link MoneyValue}. Monetary amount represented as integer minor units plus an ISO
             * 4217 currency code. anyOf[2] (Value): null.
             */
            "refunded_money": ((MoneyValue) | (null));
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "resolution_started_at": string | null;
            /**
             * The credential that started resolving this payment review, retained after closure.
             * Null when no resolution has started or Flint started it. anyOf[1] (Value): {@link
             * ResourceReference}. A reference to another resource by `resource_type` and
             * `resource_id`. anyOf[2] (Value): null.
             */
            "resolution_started_by": ((ResourceReference) | (null));
            /**
             * The risk assessment shown on a review: a `level` and, when available, a numeric
             * `score`.
             */
            "risk": PaymentReviewRisk;
            /** Value enum: "open", "resolving", "closed". */
            "status": "open" | "resolving" | "closed" | (string & {});
            /**
             * Lifecycle actions accepted in the current stored review state. An action remains
             * listed while it is processing or can be repeated without changing the result. []
             * enum: "approve", "decline". [] (Value): string. Value enum: "approve", "decline".
             */
            "supported_actions": Array<"approve" | "decline" | (string & {})>;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<PaymentReview>;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "payment_review.reopened". */
    "event_type"?: "payment_review.reopened";
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
 * The `payment_review.reopened` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type PaymentReviewReopenedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.closed_at (Required): string or null. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.closed_by (Required): {@link
     * ResourceReference} or null. The credential that closed this payment review. Null when Flint
     * closed it. object.closed_by.anyOf[1] (Value): {@link ResourceReference}. A reference to
     * another resource by `resource_type` and `resource_id`. object.closed_by.anyOf[2] (Value):
     * null. object.closed_reason (Required): string or null. Value enum: "approved", "declined",
     * "refunded", "disputed", "payment_canceled", "expired", null. object.customer (Optional):
     * {@link ExpandedCustomerSummary} or null. Present only when `expand` includes `customer`;
     * `null` when expanded and there is no related customer. object.customer.anyOf[1] (Value):
     * {@link ExpandedCustomerSummary}. A customer's summary fields, returned in place of a
     * customer ID when the customer is expanded. object.customer.anyOf[2] (Value): null.
     * object.customer_id (Required): string or null. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     * object.ip_address (Required): string or null. object.last_resolution_failure (Required):
     * {@link PaymentReviewResolutionFailure} or null. The most recent resolution attempt that
     * failed. Set when a decline's refund failed and the review reopened. Null when no attempt has
     * failed. object.last_resolution_failure.anyOf[1] (Value): {@link
     * PaymentReviewResolutionFailure}. A failed attempt to resolve a review by refund, with the
     * `refund_id` and when it failed. object.last_resolution_failure.anyOf[2] (Value): null.
     * object.matched_risk_rule_id (Required): string or null. Example:
     * "rule_01KEZF7C00FWGAQJXXA8CRA319". object.opened_at (Required): string. RFC3339 timestamp.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". object.opened_reason (Required): string.
     * Value enum: "rule". object.order (Optional): {@link ExpandedOrderSummary} or null. Present
     * only when `expand` includes `order`; `null` when expanded and there is no related order.
     * object.order.anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary fields,
     * including status, payment and refund status, and pricing and settlement amounts, returned
     * when the order is expanded. object.order.anyOf[2] (Value): null. object.order_id (Required):
     * string or null. Example: "ord_01KEZF7C0054GQKJ142A8X367A". object.payment_flow (Required):
     * string. Value enum: "checkout", "payment_link", "invoice", "subscription_initial",
     * "subscription_renewal", "virtual_terminal", "api". object.payment_intent (Optional): {@link
     * ExpandedPaymentIntentSummary} or null. Present only when `expand` includes `payment_intent`;
     * `null` when expanded and there is no related payment intent. object.payment_intent.anyOf[1]
     * (Value): {@link ExpandedPaymentIntentSummary}. A payment intent's summary fields, including
     * amount, status, and capture method, returned when the payment intent is expanded.
     * object.payment_intent.anyOf[2] (Value): null. object.payment_intent_id (Required): string.
     * Example: "pi_01KEZF7C00G8H9D509YEV22P7R". object.payment_review_id (Required): string.
     * Unique identifier for this payment review, prefixed `rev_`. Example:
     * "rev_01KEZF7C00BVBQ00XDFNKB1EF6". object.payment_summary (Required): {@link
     * PaymentReviewPaymentSummary}. The payment details shown on a review: amount, capture method,
     * authorization expiry, card brand and last four digits, and buyer email.
     * object.pending_action (Required): string or null. The decision being carried out. `null`
     * when status isn't resolving. Value enum: "approve", "decline", "expire", null.
     * object.refund_id (Required): string or null. The refund that closed this review. Null
     * otherwise. Example: "ref_01KEZF7C003DTD59WKYHEXYQ1K". object.refunded_money (Required):
     * {@link MoneyValue} or null. Refunded amount for this review. Null when no refund is
     * recorded. object.refunded_money.anyOf[1] (Value): {@link MoneyValue}. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     * object.refunded_money.anyOf[2] (Value): null. object.resolution_started_at (Required):
     * string or null. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.resolution_started_by (Required): {@link ResourceReference} or null. The credential
     * that started resolving this payment review, retained after closure. Null when no resolution
     * has started or Flint started it. object.resolution_started_by.anyOf[1] (Value): {@link
     * ResourceReference}. A reference to another resource by `resource_type` and `resource_id`.
     * object.resolution_started_by.anyOf[2] (Value): null. object.risk (Required): {@link
     * PaymentReviewRisk}. The risk assessment shown on a review: a `level` and, when available, a
     * numeric `score`. object.status (Required): string. Value enum: "open", "resolving",
     * "closed". object.supported_actions (Required): Array of string. Lifecycle actions accepted
     * in the current stored review state. An action remains listed while it is processing or can
     * be repeated without changing the result. [] enum: "approve", "decline".
     * object.supported_actions[] (Value): string. Value enum: "approve", "decline".
     * object.updated_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". previous_attributes (Optional): object. Previous values of changed
     * top-level fields in data.object, at this delivery's API version. Nested changes include the
     * whole previous top-level value. A value is null when the field was absent before the change.
     * Omitted when Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields. closed_at
         * (Required): string or null. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". closed_by (Required): {@link ResourceReference} or null. The
         * credential that closed this payment review. Null when Flint closed it.
         * closed_by.anyOf[1] (Value): {@link ResourceReference}. A reference to another resource
         * by `resource_type` and `resource_id`. closed_by.anyOf[2] (Value): null. closed_reason
         * (Required): string or null. Value enum: "approved", "declined", "refunded", "disputed",
         * "payment_canceled", "expired", null. customer (Optional): {@link
         * ExpandedCustomerSummary} or null. Present only when `expand` includes `customer`; `null`
         * when expanded and there is no related customer. customer.anyOf[1] (Value): {@link
         * ExpandedCustomerSummary}. A customer's summary fields, returned in place of a customer
         * ID when the customer is expanded. customer.anyOf[2] (Value): null. customer_id
         * (Required): string or null. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". ip_address
         * (Required): string or null. last_resolution_failure (Required): {@link
         * PaymentReviewResolutionFailure} or null. The most recent resolution attempt that failed.
         * Set when a decline's refund failed and the review reopened. Null when no attempt has
         * failed. last_resolution_failure.anyOf[1] (Value): {@link
         * PaymentReviewResolutionFailure}. A failed attempt to resolve a review by refund, with
         * the `refund_id` and when it failed. last_resolution_failure.anyOf[2] (Value): null.
         * matched_risk_rule_id (Required): string or null. Example:
         * "rule_01KEZF7C00FWGAQJXXA8CRA319". opened_at (Required): string. RFC3339 timestamp.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". opened_reason (Required): string.
         * Value enum: "rule". order (Optional): {@link ExpandedOrderSummary} or null. Present only
         * when `expand` includes `order`; `null` when expanded and there is no related order.
         * order.anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary fields,
         * including status, payment and refund status, and pricing and settlement amounts,
         * returned when the order is expanded. order.anyOf[2] (Value): null. order_id (Required):
         * string or null. Example: "ord_01KEZF7C0054GQKJ142A8X367A". payment_flow (Required):
         * string. Value enum: "checkout", "payment_link", "invoice", "subscription_initial",
         * "subscription_renewal", "virtual_terminal", "api". payment_intent (Optional): {@link
         * ExpandedPaymentIntentSummary} or null. Present only when `expand` includes
         * `payment_intent`; `null` when expanded and there is no related payment intent.
         * payment_intent.anyOf[1] (Value): {@link ExpandedPaymentIntentSummary}. A payment
         * intent's summary fields, including amount, status, and capture method, returned when the
         * payment intent is expanded. payment_intent.anyOf[2] (Value): null. payment_intent_id
         * (Required): string. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". payment_review_id
         * (Required): string. Unique identifier for this payment review, prefixed `rev_`. Example:
         * "rev_01KEZF7C00BVBQ00XDFNKB1EF6". payment_summary (Required): {@link
         * PaymentReviewPaymentSummary}. The payment details shown on a review: amount, capture
         * method, authorization expiry, card brand and last four digits, and buyer email.
         * pending_action (Required): string or null. The decision being carried out. `null` when
         * status isn't resolving. Value enum: "approve", "decline", "expire", null. refund_id
         * (Required): string or null. The refund that closed this review. Null otherwise. Example:
         * "ref_01KEZF7C003DTD59WKYHEXYQ1K". refunded_money (Required): {@link MoneyValue} or null.
         * Refunded amount for this review. Null when no refund is recorded.
         * refunded_money.anyOf[1] (Value): {@link MoneyValue}. Monetary amount represented as
         * integer minor units plus an ISO 4217 currency code. refunded_money.anyOf[2] (Value):
         * null. resolution_started_at (Required): string or null. RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". resolution_started_by (Required): {@link
         * ResourceReference} or null. The credential that started resolving this payment review,
         * retained after closure. Null when no resolution has started or Flint started it.
         * resolution_started_by.anyOf[1] (Value): {@link ResourceReference}. A reference to
         * another resource by `resource_type` and `resource_id`. resolution_started_by.anyOf[2]
         * (Value): null. risk (Required): {@link PaymentReviewRisk}. The risk assessment shown on
         * a review: a `level` and, when available, a numeric `score`. status (Required): string.
         * Value enum: "open", "resolving", "closed". supported_actions (Required): Array of
         * string. Lifecycle actions accepted in the current stored review state. An action remains
         * listed while it is processing or can be repeated without changing the result. [] enum:
         * "approve", "decline". supported_actions[] (Value): string. Value enum: "approve",
         * "decline". updated_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z".
         */
        "object": {
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "closed_at": string | null;
            /**
             * The credential that closed this payment review. Null when Flint closed it. anyOf[1]
             * (Value): {@link ResourceReference}. A reference to another resource by
             * `resource_type` and `resource_id`. anyOf[2] (Value): null.
             */
            "closed_by": ((ResourceReference) | (null));
            /**
             * Value enum: "approved", "declined", "refunded", "disputed", "payment_canceled",
             * "expired", null.
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
             * Present only when `expand` includes `customer`; `null` when expanded and there is no
             * related customer. anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's
             * summary fields, returned in place of a customer ID when the customer is expanded.
             * anyOf[2] (Value): null.
             */
            "customer"?: ((ExpandedCustomerSummary) | (null));
            /** Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". */
            "customer_id": string | null;
            "ip_address": string | null;
            /**
             * The most recent resolution attempt that failed. Set when a decline's refund failed
             * and the review reopened. Null when no attempt has failed. anyOf[1] (Value): {@link
             * PaymentReviewResolutionFailure}. A failed attempt to resolve a review by refund,
             * with the `refund_id` and when it failed. anyOf[2] (Value): null.
             */
            "last_resolution_failure": ((PaymentReviewResolutionFailure) | (null));
            /** Example: "rule_01KEZF7C00FWGAQJXXA8CRA319". */
            "matched_risk_rule_id": string | null;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "opened_at": string;
            /** Value enum: "rule". */
            "opened_reason": "rule" | (string & {});
            /**
             * Present only when `expand` includes `order`; `null` when expanded and there is no
             * related order. anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary
             * fields, including status, payment and refund status, and pricing and settlement
             * amounts, returned when the order is expanded. anyOf[2] (Value): null.
             */
            "order"?: ((ExpandedOrderSummary) | (null));
            /** Example: "ord_01KEZF7C0054GQKJ142A8X367A". */
            "order_id": string | null;
            /**
             * Value enum: "checkout", "payment_link", "invoice", "subscription_initial",
             * "subscription_renewal", "virtual_terminal", "api".
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
             * Present only when `expand` includes `payment_intent`; `null` when expanded and there
             * is no related payment intent. anyOf[1] (Value): {@link
             * ExpandedPaymentIntentSummary}. A payment intent's summary fields, including amount,
             * status, and capture method, returned when the payment intent is expanded. anyOf[2]
             * (Value): null.
             */
            "payment_intent"?: ((ExpandedPaymentIntentSummary) | (null));
            /** Example: "pi_01KEZF7C00G8H9D509YEV22P7R". */
            "payment_intent_id": string;
            /**
             * Unique identifier for this payment review, prefixed `rev_`. Example:
             * "rev_01KEZF7C00BVBQ00XDFNKB1EF6".
             */
            "payment_review_id": string;
            /**
             * The payment details shown on a review: amount, capture method, authorization expiry,
             * card brand and last four digits, and buyer email.
             */
            "payment_summary": PaymentReviewPaymentSummary;
            /**
             * The decision being carried out. `null` when status isn't resolving. Value enum:
             * "approve", "decline", "expire", null.
             */
            "pending_action": "approve" | "decline" | "expire" | null | (string & {}) | null;
            /**
             * The refund that closed this review. Null otherwise. Example:
             * "ref_01KEZF7C003DTD59WKYHEXYQ1K".
             */
            "refund_id": string | null;
            /**
             * Refunded amount for this review. Null when no refund is recorded. anyOf[1] (Value):
             * {@link MoneyValue}. Monetary amount represented as integer minor units plus an ISO
             * 4217 currency code. anyOf[2] (Value): null.
             */
            "refunded_money": ((MoneyValue) | (null));
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "resolution_started_at": string | null;
            /**
             * The credential that started resolving this payment review, retained after closure.
             * Null when no resolution has started or Flint started it. anyOf[1] (Value): {@link
             * ResourceReference}. A reference to another resource by `resource_type` and
             * `resource_id`. anyOf[2] (Value): null.
             */
            "resolution_started_by": ((ResourceReference) | (null));
            /**
             * The risk assessment shown on a review: a `level` and, when available, a numeric
             * `score`.
             */
            "risk": PaymentReviewRisk;
            /** Value enum: "open", "resolving", "closed". */
            "status": "open" | "resolving" | "closed" | (string & {});
            /**
             * Lifecycle actions accepted in the current stored review state. An action remains
             * listed while it is processing or can be repeated without changing the result. []
             * enum: "approve", "decline". [] (Value): string. Value enum: "approve", "decline".
             */
            "supported_actions": Array<"approve" | "decline" | (string & {})>;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<PaymentReview>;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "payment_review.reopened". */
    "event_type"?: "payment_review.reopened";
});
/** A failed attempt to resolve a review by refund, with the `refund_id` and when it failed. */
export type PaymentReviewResolutionFailure = {
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "failed_at": string;
    /** Example: "ref_01KEZF7C003DTD59WKYHEXYQ1K". */
    "refund_id": string;
};
/** A response containing `PaymentReview` data. */
export type PaymentReviewResponse = {
    /**
     * Resource, collection, or operation result returned by this request. A payment review
     * requiring a merchant decision.
     */
    "data": PaymentReview;
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
export type PaymentReviewsApproveParams = DisputesAcceptParams;
export type PaymentReviewsDeclineParams = (InputValue<DeclinePaymentReviewRequestInput> | {
    "add_to_block_lists"?: never;
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
export type PaymentReviewsGetParams = {
    /**
     * Include related objects in the response. Supported expansions: customer, order,
     * payment_intent. Expansion requires risk.read plus the read scope for each expanded resource.
     * Limits: at most 10 unique expand paths per request. [] enum: "customer", "order",
     * "payment_intent". Value enum: "customer", "order", "payment_intent". anyOf[1] (Value): Array
     * of string. [] enum: "customer", "order", "payment_intent". anyOf[1][] (Value): string. Value
     * enum: "customer", "order", "payment_intent". anyOf[2] (Value): string. Value enum:
     * "customer", "order", "payment_intent".
     */
    "expand"?: InputValue<("customer" | "order" | "payment_intent") | readonly ("customer" | "order" | "payment_intent")[]>;
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
export type PaymentReviewsListParams = {
    /**
     * Filter by review status. Repeat or comma-separate values. Values are trimmed and
     * deduplicated in first-seen order; empty or unknown entries are rejected. Values within this
     * filter are ORed; separate filters are ANDed. [] enum: "open", "resolving", "closed". Value
     * enum: "open", "resolving", "closed". anyOf[1] (Value): Array of string. minItems: 1. []
     * enum: "open", "resolving", "closed". anyOf[1][] (Value): string. Value enum: "open",
     * "resolving", "closed". anyOf[2] (Value): string. Value enum: "open", "resolving", "closed".
     */
    "status"?: InputValue<("open" | "resolving" | "closed") | readonly ("open" | "resolving" | "closed")[]>;
    /**
     * Filter by immutable review risk level. Repeat or comma-separate values. Values are trimmed
     * and deduplicated in first-seen order; empty or unknown entries are rejected. Values within
     * this filter are ORed; separate filters are ANDed. [] enum: "normal", "elevated", "highest",
     * "not_assessed". Value enum: "normal", "elevated", "highest", "not_assessed". anyOf[1]
     * (Value): Array of string. minItems: 1. [] enum: "normal", "elevated", "highest",
     * "not_assessed". anyOf[1][] (Value): string. Value enum: "normal", "elevated", "highest",
     * "not_assessed". anyOf[2] (Value): string. Value enum: "normal", "elevated", "highest",
     * "not_assessed".
     */
    "risk_level"?: InputValue<("normal" | "elevated" | "highest" | "not_assessed")
        | readonly ("normal" | "elevated" | "highest" | "not_assessed")[]>;
    /**
     * Filter by immutable payment flow. Repeat or comma-separate values. Values are trimmed and
     * deduplicated in first-seen order; empty or unknown entries are rejected. Values within this
     * filter are ORed; separate filters are ANDed. [] enum: "checkout", "payment_link", "invoice",
     * "subscription_initial", "subscription_renewal", "virtual_terminal", "api". Value enum:
     * "checkout", "payment_link", "invoice", "subscription_initial", "subscription_renewal",
     * "virtual_terminal", "api". anyOf[1] (Value): Array of string. minItems: 1. [] enum:
     * "checkout", "payment_link", "invoice", "subscription_initial", "subscription_renewal",
     * "virtual_terminal", "api". anyOf[1][] (Value): string. Value enum: "checkout",
     * "payment_link", "invoice", "subscription_initial", "subscription_renewal",
     * "virtual_terminal", "api". anyOf[2] (Value): string. Value enum: "checkout", "payment_link",
     * "invoice", "subscription_initial", "subscription_renewal", "virtual_terminal", "api".
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
    /**
     * Filter by Flint payment intent ID. pattern: ^pi_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "pi_01KEZF7C00G8H9D509YEV22P7R".
     */
    "payment_intent_id"?: InputValue<string>;
    /**
     * Filter by Flint order ID. pattern: ^ord_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id"?: InputValue<string>;
    /**
     * Filter by Flint customer ID. pattern: ^cus_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     */
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
     * Opaque, signed next_page_token from the previous response, bound to the list and caller.
     * Omit on the first request. You may change `page_size` between pages. Reuse it with the same
     * endpoint, filters, sort, and request context. Do not parse or construct tokens. An altered,
     * invalid, expired, or mismatched token returns a validation error.
     */
    "page_token"?: InputValue<string>;
    /**
     * Include related objects in the response. Supported expansions: customer, order,
     * payment_intent. Include the requested related resources using scoped batch reads for this
     * page. Each relationship requires its existing target read scopes. Expansion changes the
     * representation without changing pagination tokens. Limits: at most 10 unique expand paths
     * per request. [] enum: "customer", "order", "payment_intent". Value enum: "customer",
     * "order", "payment_intent". anyOf[1] (Value): Array of string. [] enum: "customer", "order",
     * "payment_intent". anyOf[1][] (Value): string. Value enum: "customer", "order",
     * "payment_intent". anyOf[2] (Value): string. Value enum: "customer", "order",
     * "payment_intent".
     */
    "expand"?: InputValue<("customer" | "order" | "payment_intent") | readonly ("customer" | "order" | "payment_intent")[]>;
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
 * The risk assessment for a payment intent, with its risk level, score, outcome, and any matched
 * rule or review.
 */
export type PaymentRisk = {
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "evaluated_at": string;
    /** Value enum: "normal", "elevated", "highest", "not_assessed". */
    "level": "normal" | "elevated" | "highest" | "not_assessed" | (string & {});
    /** Example: "rule_01KEZF7C00FWGAQJXXA8CRA319". */
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
    /** Example: "rev_01KEZF7C00BVBQ00XDFNKB1EF6". */
    "payment_review_id"?: string;
    /**
     * Fraud score from the card processor's screening, from 0 to 99. Higher means riskier. Absent
     * when no score is available, which isn't a score of 0. Format: int32. minimum: 0. maximum:
     * 99.
     */
    "score"?: number;
    "statement": string;
};
/** Settings for the statement text on new payments. */
export type PaymentSettings = {
    /**
     * Static text shown on buyers' statements for new payments. `null` when the provider default
     * is used. Changing it does not change past payments. Once this setting has been applied,
     * changes made directly in the processor are overwritten by Flint's applied value.
     */
    "statement_descriptor": string | null;
};
/** Changes to the statement text for new payments. */
export type PaymentSettingsPatch = {
    /**
     * Static text for new payments: 5 to 22 Latin characters, including at least one letter,
     * without < > \ ' " * or control characters. Omit to leave unchanged. Send null to restore the
     * provider default. minLength: 5. maxLength: 22.
     */
    "statement_descriptor"?: string | null;
};
/** Changes to the statement text for new payments. */
export type PaymentSettingsPatchInput = PaymentSettingsPatch;
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
/** Card and wallet details recorded when a payment is presented on a reader. */
export type PaymentSourceCardPresentDetails = {
    /**
     * EMV application identifier (AID). Null when absent or outside the supported shape. pattern:
     * ^[0-9A-F]{10,32}$. Example: "A0000000031010".
     */
    "application_id": string | null;
    /**
     * Card application's label, such as VISA CREDIT. Null when absent or outside the supported
     * shape. pattern: ^[ -~]{1,16}$.
     */
    "application_name": string | null;
    /**
     * Issuer's authorization code. Null when absent or outside the supported shape. pattern:
     * ^[0-9A-Za-z]{1,12}$.
     */
    "authorization_code": string | null;
    /**
     * How the buyer was verified. consumer_device means the phone verified the buyer. Unrecognized
     * methods are other. Value enum: "pin", "signature", "consumer_device", "none", "other".
     */
    "cardholder_verification": "pin" | "signature" | "consumer_device" | "none" | "other" | (string & {});
    /**
     * How the card was read. swipe_fallback means a swipe after a failed chip read. Unrecognized
     * methods are other. Value enum: "contactless", "chip", "swipe", "swipe_fallback", "other".
     */
    "read_method": "contactless" | "chip" | "swipe" | "swipe_fallback" | "other" | (string & {});
    /**
     * Wallet used on the reader. Absent when a card was used; unrecognized wallets are other.
     * Value enum: "apple_pay", "google_pay", "samsung_pay", "other".
     */
    "wallet"?: "apple_pay" | "google_pay" | "samsung_pay" | "other" | (string & {});
};
/** Display details for a card payment source: brand, last four digits, and payment method ID. */
export type PaymentSourceCardSummary = {
    /** Value enum: "visa", "mastercard", "amex", "discover", "diners", "jcb", "unionpay". */
    "brand"?: "visa" | "mastercard" | "amex" | "discover" | "diners" | "jcb" | "unionpay" | (string & {});
    /**
     * Details of a card read on a reader, present once the card was read. Card-present cards are
     * not saved, so payment_method_id is absent. Card and wallet details recorded when a payment
     * is presented on a reader.
     */
    "card_present"?: PaymentSourceCardPresentDetails;
    "last4"?: string;
    /** Example: "pm_01KEZF7C0034B248TXXE4NXYFZ". */
    "payment_method_id"?: string;
};
/**
 * The credential you provide to pay an order: a payment source token, a saved payment method ID,
 * or a Stripe confirmation token.
 */
export type PaymentSourceCredential = ((PaymentSourceCredentialToken)
    | (PaymentSourceCredentialPaymentMethod)
    | (PaymentSourceCredentialStripeConfirmationToken)
    | (PaymentSourceCredentialReader)
    | (Record<string, unknown>));
/**
 * The credential you provide to pay an order: a payment source token, a saved payment method ID,
 * or a Stripe confirmation token.
 */
export type PaymentSourceCredentialInput = ((PaymentSourceCredentialTokenInput)
    | (PaymentSourceCredentialPaymentMethodInput)
    | (PaymentSourceCredentialStripeConfirmationTokenInput)
    | (PaymentSourceCredentialReaderInput));
/** The `payment_method` variant of `PaymentSourceCredential`. */
export type PaymentSourceCredentialPaymentMethod = {
    /** Value enum: "payment_method". */
    "credential_type": "payment_method" | (string & {});
    /**
     * Whether the customer is present for this payment. Defaults to present. Send absent to charge
     * a saved card while the customer is away, such as for a no-show fee, damages, or a top-up.
     * Flint then sends the charge to the card network as merchant-initiated, using the card's
     * stored credential, so the bank can't ask the customer to authenticate. absent can be sent
     * only with an API key or partner token, and only for a saved card whose usage is off_session;
     * a card the customer saved for checkout only returns 409 ACTION_NOT_ALLOWED with reason
     * payment_method_not_reusable. If the bank still requires authentication, the payment fails
     * with status requires_payment_method and last_payment_error.code authentication_required. Ask
     * the customer to pay while present instead of retrying. Default: "present". Value enum:
     * "present", "absent".
     */
    "customer_presence"?: "present" | "absent" | (string & {});
    /**
     * Saved Flint payment method ID belonging to the customer making this payment. minLength: 1.
     * Example: "pm_01KEZF7C0034B248TXXE4NXYFZ".
     */
    "payment_method_id": string;
};
/** The `payment_method` variant of `PaymentSourceCredential`. */
export type PaymentSourceCredentialPaymentMethodInput = {
    /** Value enum: "payment_method". */
    "credential_type": "payment_method";
    /**
     * Whether the customer is present for this payment. Defaults to present. Send absent to charge
     * a saved card while the customer is away, such as for a no-show fee, damages, or a top-up.
     * Flint then sends the charge to the card network as merchant-initiated, using the card's
     * stored credential, so the bank can't ask the customer to authenticate. absent can be sent
     * only with an API key or partner token, and only for a saved card whose usage is off_session;
     * a card the customer saved for checkout only returns 409 ACTION_NOT_ALLOWED with reason
     * payment_method_not_reusable. If the bank still requires authentication, the payment fails
     * with status requires_payment_method and last_payment_error.code authentication_required. Ask
     * the customer to pay while present instead of retrying. Default: "present". Value enum:
     * "present", "absent".
     */
    "customer_presence"?: "present" | "absent";
    /**
     * Saved Flint payment method ID belonging to the customer making this payment. minLength: 1.
     * Example: "pm_01KEZF7C0034B248TXXE4NXYFZ".
     */
    "payment_method_id": string;
};
/** The `reader` variant of `PaymentSourceCredential`. */
export type PaymentSourceCredentialReader = {
    /** Selects payment collection on a reader. Value enum: "reader". */
    "credential_type": "reader" | (string & {});
    /**
     * Active reader in this merchant and environment. Requires payments.readers.write in addition
     * to this operation’s scopes. minLength: 1. pattern: ^rdr_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "rdr_01KEZF7C007JA0G24M7SD6P46C".
     */
    "reader_id": string;
    /**
     * Optional tip collection on a supported smart reader. Tip collection settings for a payment
     * presented on a smart reader.
     */
    "tip"?: ReaderPaymentSourceTip;
};
/** The `reader` variant of `PaymentSourceCredential`. */
export type PaymentSourceCredentialReaderInput = {
    /** Selects payment collection on a reader. Value enum: "reader". */
    "credential_type": "reader";
    /**
     * Active reader in this merchant and environment. Requires payments.readers.write in addition
     * to this operation’s scopes. minLength: 1. pattern: ^rdr_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "rdr_01KEZF7C007JA0G24M7SD6P46C".
     */
    "reader_id": string;
    /**
     * Optional tip collection on a supported smart reader. Tip collection settings for a payment
     * presented on a smart reader.
     */
    "tip"?: ReaderPaymentSourceTipInput;
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
 * A top-level child of a payment intent dividing the collecting merchant's payment funds with one
 * seller. Both parties read this same resource with their own credentials.
 */
export type PaymentSplit = {
    /**
     * The admitted amount, or its final amount set at capture. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
    /**
     * Present when status is canceled. Can gain values. Value enum: "payment_not_completed",
     * "install_revoked", "fully_reversed".
     */
    "canceled_reason"?: "payment_not_completed" | "install_revoked" | "fully_reversed" | (string & {});
    /**
     * The merchant of record that collected the payment. Example:
     * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     */
    "collecting_merchant_id": string;
    /**
     * When the payment's create recorded the split. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "created_at": string;
    /** The collecting merchant's description, shown to the seller. */
    "description"?: string;
    /**
     * Caller-owned identifier for this resource in an external system. Shown to the seller. Exact,
     * case-sensitive matching. maxLength: 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Present when status is failed. Can gain values; unknown reasons use split_failed. Value
     * enum: "seller_cannot_receive", "split_failed".
     */
    "failure_reason"?: "seller_cannot_receive" | "split_failed" | (string & {});
    /**
     * When the funds become available on Flint's balance. Null when Stripe has not reported it or
     * the payment never succeeded. Can move later after a won dispute; frozen at release. Format:
     * date-time. Example: "2026-08-02T16:00:00Z".
     */
    "funds_available_at": string | null;
    /** The collecting merchant's partner app. Example: "papp_01KEZF7C00Y8VMXYZ1GNPP3WHV". */
    "partner_app_id": string;
    /** The seller's install of the app. Example: "pinst_01KEZF7C003HVKZR3GZAW6AFAZ". */
    "partner_app_install_id": string;
    /**
     * The collecting merchant's payment. Sellers can read the split, but not the payment. Example:
     * "pi_01KEZF7C00G8H9D509YEV22P7R".
     */
    "payment_intent_id": string;
    /** Unique identifier for the split. Example: "psplit_01KEZF7C00Y5HA4Z8D4KRA07K8". */
    "payment_split_id": string;
    /**
     * Present when status is pending. Can gain values. Value enum: "awaiting_payment",
     * "dispute_open", "reversals_pending", "awaiting_funds".
     */
    "pending_reason"?: "awaiting_payment" | "dispute_open" | "reversals_pending" | "awaiting_funds" | (string & {});
    /**
     * Read-only nested children created by Flint, embedded whole. Empty when none. At most one per
     * refund and one per dispute. [] (Value): {@link PaymentSplitReversal}. A read-only nested
     * child of a payment split, created by Flint for a refund or dispute. Embedded whole in
     * PaymentSplit.reversals; no routes of its own.
     */
    "reversals": Array<PaymentSplitReversal>;
    /**
     * Reversals' total amount minus their reinstated amounts. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "reversed_money": MoneyValue;
    /** The merchant receiving the split. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
    "seller_merchant_id": string;
    /**
     * Reversed funds the collecting merchant covered for the seller, less reinstatements. The
     * seller's net is amount_money minus reversed_money plus shortfall_money. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "shortfall_money": MoneyValue;
    /**
     * The split lifecycle status. Value enum: "pending", "processing", "succeeded", "failed",
     * "canceled".
     */
    "status": "pending" | "processing" | "succeeded" | "failed" | "canceled" | (string & {});
    /**
     * When the split reached the seller's balance. Present when succeeded. Format: date-time.
     * Example: "2026-08-02T16:00:00Z".
     */
    "succeeded_at"?: string;
    /** When the split last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "updated_at": string;
    /**
     * Persisted version of this resource's owned state. Expanded resources and external
     * observations can change independently. Format: uint64. minimum: 1.
     */
    "version": number;
};
export type PaymentSplitCanceledEvent = ((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "amount_money": MoneyValue;
            "canceled_reason"?: "payment_not_completed" | "install_revoked" | "fully_reversed" | (string & {});
            "collecting_merchant_id": string;
            "created_at": string;
            "description"?: string;
            "external_reference_id"?: string;
            "failure_reason"?: "seller_cannot_receive" | "split_failed" | (string & {});
            "funds_available_at": string | null;
            "partner_app_id": string;
            "partner_app_install_id": string;
            "payment_intent_id": string;
            "payment_split_id": string;
            "pending_reason"?: "awaiting_payment" | "dispute_open" | "reversals_pending" | "awaiting_funds" | (string & {});
            "reversals": Array<PaymentSplitReversal>;
            "reversed_money": MoneyValue;
            "seller_merchant_id": string;
            "shortfall_money": MoneyValue;
            "status": "pending" | "processing" | "succeeded" | "failed" | "canceled" | (string & {});
            "succeeded_at"?: string;
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: Partial<PaymentSplit>;
    };
    "event_source"?: "merchant" | (string & {});
    "event_type"?: "payment_split.canceled";
})
    & {
    "event_type": "payment_split.canceled";
});
export type PaymentSplitCreatedEvent = ((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "amount_money": MoneyValue;
            "canceled_reason"?: "payment_not_completed" | "install_revoked" | "fully_reversed" | (string & {});
            "collecting_merchant_id": string;
            "created_at": string;
            "description"?: string;
            "external_reference_id"?: string;
            "failure_reason"?: "seller_cannot_receive" | "split_failed" | (string & {});
            "funds_available_at": string | null;
            "partner_app_id": string;
            "partner_app_install_id": string;
            "payment_intent_id": string;
            "payment_split_id": string;
            "pending_reason"?: "awaiting_payment" | "dispute_open" | "reversals_pending" | "awaiting_funds" | (string & {});
            "reversals": Array<PaymentSplitReversal>;
            "reversed_money": MoneyValue;
            "seller_merchant_id": string;
            "shortfall_money": MoneyValue;
            "status": "pending" | "processing" | "succeeded" | "failed" | "canceled" | (string & {});
            "succeeded_at"?: string;
            "updated_at": string;
            "version": number;
        };
    };
    "event_source"?: "merchant" | (string & {});
    "event_type"?: "payment_split.created";
})
    & {
    "event_type": "payment_split.created";
});
export type PaymentSplitFailedEvent = ((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "amount_money": MoneyValue;
            "canceled_reason"?: "payment_not_completed" | "install_revoked" | "fully_reversed" | (string & {});
            "collecting_merchant_id": string;
            "created_at": string;
            "description"?: string;
            "external_reference_id"?: string;
            "failure_reason"?: "seller_cannot_receive" | "split_failed" | (string & {});
            "funds_available_at": string | null;
            "partner_app_id": string;
            "partner_app_install_id": string;
            "payment_intent_id": string;
            "payment_split_id": string;
            "pending_reason"?: "awaiting_payment" | "dispute_open" | "reversals_pending" | "awaiting_funds" | (string & {});
            "reversals": Array<PaymentSplitReversal>;
            "reversed_money": MoneyValue;
            "seller_merchant_id": string;
            "shortfall_money": MoneyValue;
            "status": "pending" | "processing" | "succeeded" | "failed" | "canceled" | (string & {});
            "succeeded_at"?: string;
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: Partial<PaymentSplit>;
    };
    "event_source"?: "merchant" | (string & {});
    "event_type"?: "payment_split.failed";
})
    & {
    "event_type": "payment_split.failed";
});
/** A page of `PaymentSplit` objects. */
export type PaymentSplitListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * PaymentSplit}. A top-level child of a payment intent dividing the collecting merchant's
     * payment funds with one seller. Both parties read this same resource with their own
     * credentials.
     */
    "data": Array<PaymentSplit>;
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
 * A seller's fixed share of one payment, created with that payment. This divides the payment's
 * funds; split tender divides how the buyer pays.
 */
export type PaymentSplitRequest = {
    /**
     * Seller's share above zero, in the payment's currency. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code. amount (Required): integer string. Use an
     * integer string (decimal digits), not a floating-point number. Format: int64. minimum: 1.
     * Amount in the currency's minor unit, such as cents for USD. Use an integer string (decimal
     * digits), not a floating-point number. Format: int64. minimum: 0. currency (Required):
     * string. ISO 4217 currency code for this amount. minLength: 3. maxLength: 3. pattern:
     * ^[A-Z]{3}$.
     */
    "amount_money": ({
        /**
         * Use an integer string (decimal digits), not a floating-point number. Format: int64.
         * minimum: 1.
         */
        "amount"?: `${bigint}`;
    })
        & (Exclude<MoneyValue & object, readonly unknown[]>);
    /** Description shown to the seller, 1 to 500 characters. minLength: 1. maxLength: 500. */
    "description"?: string;
    /**
     * Caller-owned identifier for this resource in an external system. Shown to the seller. Exact,
     * case-sensitive matching. Must contain 1 to 255 characters (Unicode code points). minLength:
     * 1. maxLength: 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Seller install of the collecting merchant's partner app. At most one split per install.
     * minLength: 1. pattern: ^pinst_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "pinst_01KEZF7C003HVKZR3GZAW6AFAZ".
     */
    "partner_app_install_id": string;
};
/**
 * A seller's fixed share of one payment, created with that payment. This divides the payment's
 * funds; split tender divides how the buyer pays.
 */
export type PaymentSplitRequestInput = {
    /**
     * Seller's share above zero, in the payment's currency. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code. amount (Required): integer string. Use an
     * integer string (decimal digits), not a floating-point number. Format: int64. minimum: 1.
     * Amount in the currency's minor unit, such as cents for USD. Use an integer string (decimal
     * digits), not a floating-point number. Format: int64. minimum: 0. currency (Required):
     * string. ISO 4217 currency code for this amount. minLength: 3. maxLength: 3. pattern:
     * ^[A-Z]{3}$.
     */
    "amount_money": ({
        /**
         * Use an integer string (decimal digits), not a floating-point number. Format: int64.
         * minimum: 1.
         */
        "amount"?: `${bigint}` | bigint;
    })
        & (Exclude<MoneyValueInput & object, readonly unknown[]>);
    /** Description shown to the seller, 1 to 500 characters. minLength: 1. maxLength: 500. */
    "description"?: string;
    /**
     * Caller-owned identifier for this resource in an external system. Shown to the seller. Exact,
     * case-sensitive matching. Must contain 1 to 255 characters (Unicode code points). minLength:
     * 1. maxLength: 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Seller install of the collecting merchant's partner app. At most one split per install.
     * minLength: 1. pattern: ^pinst_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "pinst_01KEZF7C003HVKZR3GZAW6AFAZ".
     */
    "partner_app_install_id": string;
};
/** A response containing `PaymentSplit` data. */
export type PaymentSplitResponse = {
    /**
     * Resource, collection, or operation result returned by this request. A top-level child of a
     * payment intent dividing the collecting merchant's payment funds with one seller. Both
     * parties read this same resource with their own credentials.
     */
    "data": PaymentSplit;
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
 * A read-only nested child of a payment split, created by Flint for a refund or dispute. Embedded
 * whole in PaymentSplit.reversals; no routes of its own.
 */
export type PaymentSplitReversal = {
    /**
     * The split's share taken back. Monetary amount represented as integer minor units plus an ISO
     * 4217 currency code.
     */
    "amount_money": MoneyValue;
    /** When the reversal was recorded. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /** Unique identifier for the reversal. Example: "psrev_01KEZF7C00XC1HA7S8YCQJDBDM". */
    "payment_split_reversal_id": string;
    /** Why Flint created the reversal. Value enum: "refund", "dispute", "other". */
    "reason": "refund" | "dispute" | "other" | (string & {});
    /**
     * Funds returned to whoever funded the reversal, such as after a won dispute or failed refund.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "reinstated_money": MoneyValue;
    /**
     * The part the collecting merchant covered. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "shortfall_money": MoneyValue;
    /**
     * The refund or dispute behind the reversal. A reference to another resource by
     * `resource_type` and `resource_id`.
     */
    "source": ResourceReference;
    /** The reversal lifecycle status. Value enum: "pending", "succeeded", "canceled". */
    "status": "pending" | "succeeded" | "canceled" | (string & {});
    /**
     * When the split's share was recovered. Present when succeeded. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "succeeded_at"?: string;
};
export type PaymentSplitSucceededEvent = ((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "amount_money": MoneyValue;
            "canceled_reason"?: "payment_not_completed" | "install_revoked" | "fully_reversed" | (string & {});
            "collecting_merchant_id": string;
            "created_at": string;
            "description"?: string;
            "external_reference_id"?: string;
            "failure_reason"?: "seller_cannot_receive" | "split_failed" | (string & {});
            "funds_available_at": string | null;
            "partner_app_id": string;
            "partner_app_install_id": string;
            "payment_intent_id": string;
            "payment_split_id": string;
            "pending_reason"?: "awaiting_payment" | "dispute_open" | "reversals_pending" | "awaiting_funds" | (string & {});
            "reversals": Array<PaymentSplitReversal>;
            "reversed_money": MoneyValue;
            "seller_merchant_id": string;
            "shortfall_money": MoneyValue;
            "status": "pending" | "processing" | "succeeded" | "failed" | "canceled" | (string & {});
            "succeeded_at"?: string;
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: Partial<PaymentSplit>;
    };
    "event_source"?: "merchant" | (string & {});
    "event_type"?: "payment_split.succeeded";
})
    & {
    "event_type": "payment_split.succeeded";
});
export type PaymentSplitUpdatedEvent = ((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "amount_money": MoneyValue;
            "canceled_reason"?: "payment_not_completed" | "install_revoked" | "fully_reversed" | (string & {});
            "collecting_merchant_id": string;
            "created_at": string;
            "description"?: string;
            "external_reference_id"?: string;
            "failure_reason"?: "seller_cannot_receive" | "split_failed" | (string & {});
            "funds_available_at": string | null;
            "partner_app_id": string;
            "partner_app_install_id": string;
            "payment_intent_id": string;
            "payment_split_id": string;
            "pending_reason"?: "awaiting_payment" | "dispute_open" | "reversals_pending" | "awaiting_funds" | (string & {});
            "reversals": Array<PaymentSplitReversal>;
            "reversed_money": MoneyValue;
            "seller_merchant_id": string;
            "shortfall_money": MoneyValue;
            "status": "pending" | "processing" | "succeeded" | "failed" | "canceled" | (string & {});
            "succeeded_at"?: string;
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: Partial<PaymentSplit>;
    };
    "event_source"?: "merchant" | (string & {});
    "event_type"?: "payment_split.updated";
})
    & {
    "event_type": "payment_split.updated";
});
export type PaymentSplitsGetParams = {};
export type PaymentSplitsListParams = {
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
     * Exact match on the payment intent. pattern: ^pi_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "pi_01KEZF7C00G8H9D509YEV22P7R".
     */
    "payment_intent_id"?: InputValue<string>;
    /**
     * Exact match on the collecting merchant. pattern: ^mer_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     */
    "collecting_merchant_id"?: InputValue<string>;
    /**
     * Exact match on the seller. pattern: ^mer_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     */
    "seller_merchant_id"?: InputValue<string>;
    /**
     * Exact match on the partner app. pattern: ^papp_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "papp_01KEZF7C00Y8VMXYZ1GNPP3WHV".
     */
    "partner_app_id"?: InputValue<string>;
    /**
     * Exact match on the install. pattern: ^pinst_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "pinst_01KEZF7C003HVKZR3GZAW6AFAZ".
     */
    "partner_app_install_id"?: InputValue<string>;
    /**
     * Exact, case-sensitive match on the collecting merchant's external identifier. minLength: 1.
     * maxLength: 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: InputValue<string>;
    /**
     * Statuses to include. Omit to include all statuses. Values are trimmed and deduplicated in
     * first-seen order; empty or unknown entries are rejected. Values within this filter are ORed;
     * separate filters are ANDed. [] enum: "pending", "processing", "succeeded", "failed",
     * "canceled". Value enum: "pending", "processing", "succeeded", "failed", "canceled". anyOf[1]
     * (Value): Array of string. minItems: 1. [] enum: "pending", "processing", "succeeded",
     * "failed", "canceled". anyOf[1][] (Value): string. Value enum: "pending", "processing",
     * "succeeded", "failed", "canceled". anyOf[2] (Value): string. Value enum: "pending",
     * "processing", "succeeded", "failed", "canceled".
     */
    "status"?: InputValue<("pending" | "processing" | "succeeded" | "failed" | "canceled")
        | readonly ("pending" | "processing" | "succeeded" | "failed" | "canceled")[]>;
    /** Inclusive lower bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
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
     * date-time. Example: "2026-08-02T16:00:00Z".
     */
    "period_end_at": string;
    /**
     * Inclusive start instant. The half-open period [period_start_at, period_end_at) includes its
     * start and excludes its end. Amounts and payments_count use currency; customer and
     * subscription counts span currencies. Format: date-time. Example: "2026-08-02T16:00:00Z".
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
     * subscription counts span currencies. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "period_end_at": string;
    /**
     * Inclusive start instant. The half-open period [period_start_at, period_end_at) includes its
     * start and excludes its end. Amounts and payments_count use currency; customer and
     * subscription counts span currencies. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "period_start_at": string;
    /**
     * IANA timezone used only for local bucket boundaries. Defaults to the merchant's timezone,
     * then UTC. The half-open period [period_start_at, period_end_at) includes its start and
     * excludes its end. Amounts and payments_count use currency; customer and subscription counts
     * span currencies.
     */
    "timezone": string;
};
/** A response containing `PaymentVolumeTimeseries` data. */
export type PaymentVolumeTimeseriesResponse = {
    /**
     * Resource, collection, or operation result returned by this request. The half-open period
     * [period_start_at, period_end_at) includes its start and excludes its end. Amounts and
     * payments_count use currency; customer and subscription counts span currencies.
     */
    "data": PaymentVolumeTimeseries;
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
/** Funds sent from a merchant balance to a payout destination. */
export type Payout = {
    /**
     * Amount sent to your bank. Always positive. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
    /**
     * Calendar date the bank is expected to receive the funds, in YYYY-MM-DD format using the UTC
     * date of the expected arrival. Format: date. Example: "2026-08-02".
     */
    "arrival_date"?: string;
    /**
     * Balance source this payout draws from. Flint chooses the source when balance_source_type is
     * omitted at create. Clients must accept source types added in future releases. Value enum:
     * "card", "bank_account".
     */
    "balance_source_type": "card" | "bank_account" | (string & {});
    /** When the payout was created. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /** ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD". */
    "currency": string;
    /** Description sent when the payout was created. Absent when there is none. */
    "description"?: string;
    /**
     * Caller-owned identifier for this resource in an external system. maxLength: 255. Example:
     * "warehouse-1842".
     */
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
     * records the payout. `null` when your processor hasn't recorded the payout yet. anyOf[1]
     * (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus an ISO
     * 4217 currency code. anyOf[2] (Value): null.
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
    /** Merchant receiving the payout. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
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
     * Payouts Flint sends, by API, Dashboard or schedule, are always `standard`. `instant` appears
     * only on a payout Flint recorded from the processor that was sent outside Flint. `other` is a
     * method Flint doesn't map. Value enum: "standard", "instant", "other".
     */
    "method": "standard" | "instant" | "other" | (string & {});
    /**
     * Signed effect of this payout on your Flint balance. It is negative because the payout takes
     * money out: a 25000 payout with no fee has net_money -25000. `null` when your processor
     * hasn't recorded the payout yet. anyOf[1] (Value): {@link MoneyValue}. Signed monetary amount
     * represented as integer minor units plus an ISO 4217 currency code. anyOf[2] (Value): null.
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
     * reversed_by_payout_id. Example: "po_01KEZF7C00PXK8XREWJA6K4FGV".
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
     * processor's destination to a payout destination. Example:
     * "pdest_01KEZF7C00M55HZDZXZP6YVE6B".
     */
    "payout_destination_id"?: string;
    /** Stable identifier of the payout. Example: "po_01KEZF7C00PXK8XREWJA6K4FGV". */
    "payout_id": string;
    /**
     * Whether Flint has pulled a paid payout back from your bank: none until the reversal
     * completes, then reversed. A payout_reversal balance transaction returns the money, and
     * status stays succeeded. Value enum: "none", "reversed".
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
     * original_payout_id and reversed_by_payout_id. Example: "po_01KEZF7C00PXK8XREWJA6K4FGV".
     */
    "reversed_by_payout_id"?: string;
    /** Text shown on your bank statement for the deposit, when one was set. */
    "statement_descriptor"?: string;
    /**
     * Where the payout is: pending until it is sent, in_transit on its way to your bank, then
     * succeeded or failed. A succeeded payout can still become failed if the bank returns the
     * deposit, and canceled means a manual payout was canceled while pending. Value enum:
     * "pending", "in_transit", "succeeded", "failed", "canceled".
     */
    "status": "pending" | "in_transit" | "succeeded" | "failed" | "canceled" | (string & {});
    /**
     * Lifecycle actions Flint accepts now. cancel is offered while a payout is pending unless it
     * was scheduled automatically. [] enum: "cancel". [] (Value): string. Value enum: "cancel".
     */
    "supported_actions": Array<"cancel" | (string & {})>;
    /**
     * The bank's trace number for the deposit, which your bank can use to locate a late deposit.
     * Its status says whether the number is pending, available, or unsupported, and value holds
     * the number when Flint has it. Absent when Flint has no trace information. A payout's bank
     * trace ID, with whether it is pending, available, or unsupported.
     */
    "trace_id"?: PayoutTraceID;
    /** When the payout last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "updated_at": string;
};
export type PayoutCanceledEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "amount_money": MoneyValue;
            "arrival_date"?: string;
            "balance_source_type": "card" | "bank_account" | (string & {});
            "created_at": string;
            "currency": string;
            "description"?: string;
            "external_reference_id"?: string;
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
            "failure_message"?: string;
            "fee_amount_status": "estimated" | "final" | "not_applicable" | (string & {});
            "fee_money": ((MoneyValue) | (null));
            "initiated_by": "manual" | "scheduled" | "platform" | "other" | (string & {});
            "merchant_id": string;
            "metadata"?: MetadataMap;
            "method": "standard" | "instant" | "other" | (string & {});
            "net_money": ((MoneyValue) | (null));
            "original_payout"?: ((ExpandedPayoutSummary) | (null));
            "original_payout_id"?: string;
            "payout_destination"?: ((ExpandedPayoutDestinationSummary) | (null));
            "payout_destination_id"?: string;
            "payout_id": string;
            "reversal_status": "none" | "reversed" | (string & {});
            "reversed_by_payout"?: ((ExpandedPayoutSummary) | (null));
            "reversed_by_payout_id"?: string;
            "statement_descriptor"?: string;
            "status": "pending" | "in_transit" | "succeeded" | "failed" | "canceled" | (string & {});
            "supported_actions": Array<"cancel" | (string & {})>;
            "trace_id"?: PayoutTraceID;
            "updated_at": string;
        };
        "previous_attributes"?: Partial<Payout>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "payout.canceled";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "amount_money": MoneyValue;
            "arrival_date"?: string;
            "balance_source_type": "card" | "bank_account" | (string & {});
            "created_at": string;
            "currency": string;
            "description"?: string;
            "external_reference_id"?: string;
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
            "failure_message"?: string;
            "fee_amount_status": "estimated" | "final" | "not_applicable" | (string & {});
            "fee_money": ((MoneyValue) | (null));
            "initiated_by": "manual" | "scheduled" | "platform" | "other" | (string & {});
            "merchant_id": string;
            "metadata"?: MetadataMap;
            "method": "standard" | "instant" | "other" | (string & {});
            "net_money": ((MoneyValue) | (null));
            "original_payout"?: ((ExpandedPayoutSummary) | (null));
            "original_payout_id"?: string;
            "payout_destination"?: ((ExpandedPayoutDestinationSummary) | (null));
            "payout_destination_id"?: string;
            "payout_id": string;
            "reversal_status": "none" | "reversed" | (string & {});
            "reversed_by_payout"?: ((ExpandedPayoutSummary) | (null));
            "reversed_by_payout_id"?: string;
            "statement_descriptor"?: string;
            "status": "pending" | "in_transit" | "succeeded" | "failed" | "canceled" | (string & {});
            "supported_actions": Array<"cancel" | (string & {})>;
            "trace_id"?: PayoutTraceID;
            "updated_at": string;
        };
        "previous_attributes"?: Partial<Payout>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "payout.canceled";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "payout.canceled";
});
/**
 * The `payout.canceled` webhook payload for the `installed_merchants` event source. Fields shared
 * by partner webhook payloads.
 */
export type PayoutCanceledInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.amount_money (Required): {@link MoneyValue}. Amount sent to your
     * bank. Always positive. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code. object.arrival_date (Optional): string. Calendar date the bank is expected to
     * receive the funds, in YYYY-MM-DD format using the UTC date of the expected arrival. Format:
     * date. Example: "2026-08-02". object.balance_source_type (Required): string. Balance source
     * this payout draws from. Flint chooses the source when balance_source_type is omitted at
     * create. Clients must accept source types added in future releases. Value enum: "card",
     * "bank_account". object.created_at (Required): string. When the payout was created. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.currency (Required): string. ISO 4217
     * currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
     * object.description (Optional): string. Description sent when the payout was created. Absent
     * when there is none. object.external_reference_id (Optional): string. Caller-owned identifier
     * for this resource in an external system. maxLength: 255. Example: "warehouse-1842".
     * object.failure_code (Optional): string. Flint-normalized payout failure code. Unknown
     * provider values are returned as payout_failed. Value enum: "account_closed",
     * "account_frozen", "bank_account_restricted", "bank_ownership_changed", "could_not_process",
     * "debit_not_authorized", "declined", "insufficient_funds", "invalid_account_number",
     * "incorrect_account_holder_name", "incorrect_account_holder_address",
     * "incorrect_account_holder_tax_id", "invalid_currency", "no_account", "unsupported_card",
     * "payout_failed". object.failure_message (Optional): string. Flint-authored payout failure
     * message. This is stable explanatory text, not a raw provider message.
     * object.fee_amount_status (Required): string. Whether the payout fee is estimated or final.
     * not_applicable means no applicable fee status is known, including unmapped fee states. Value
     * enum: "estimated", "final", "not_applicable". object.fee_money (Required): {@link
     * MoneyValue} or null. Fee for this payout, never negative. Payouts carry no fee, so this is 0
     * once your processor records the payout. `null` when your processor hasn't recorded the
     * payout yet. object.fee_money.anyOf[1] (Value): {@link MoneyValue}. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code. object.fee_money.anyOf[2]
     * (Value): null. object.initiated_by (Required): string. What started the payout. A payout
     * imported from your processor follows the processor: scheduled when it sent the payout
     * automatically, otherwise manual. Only scheduled payouts list their balance transactions
     * through GET /v1/balance-transactions?payout_id=; other payouts return 409 with reason
     * not_itemized. Unmapped sources are returned as other. Value enum: "manual", "scheduled",
     * "platform", "other". object.merchant_id (Required): string. Merchant receiving the payout.
     * Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.metadata (Optional): {@link MetadataMap}.
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and
     * are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps
     * written before those limits may not satisfy them. object.method (Required): string. Payouts
     * Flint sends, by API, Dashboard or schedule, are always `standard`. `instant` appears only on
     * a payout Flint recorded from the processor that was sent outside Flint. `other` is a method
     * Flint doesn't map. Value enum: "standard", "instant", "other". object.net_money (Required):
     * {@link MoneyValue} or null. Signed effect of this payout on your Flint balance. It is
     * negative because the payout takes money out: a 25000 payout with no fee has net_money
     * -25000. `null` when your processor hasn't recorded the payout yet. object.net_money.anyOf[1]
     * (Value): {@link MoneyValue}. Signed monetary amount represented as integer minor units plus
     * an ISO 4217 currency code. object.net_money.anyOf[2] (Value): null. object.original_payout
     * (Optional): {@link ExpandedPayoutSummary} or null. The payout this one reverses, inlined
     * when you request expand=original_payout. null when expanded and original_payout_id is
     * absent. Present only when `expand` includes `original_payout`; `null` when expanded and
     * there is no related payout. object.original_payout.anyOf[1] (Value): {@link
     * ExpandedPayoutSummary}. A payout's summary fields, including amount, method, status, and
     * arrival date, returned when the payout is expanded. object.original_payout.anyOf[2] (Value):
     * null. object.original_payout_id (Optional): string. On a payout that reverses another
     * payout, the payout it reverses. Present only when Flint has the matching original payout. A
     * payout has at most one of original_payout_id and reversed_by_payout_id. Example:
     * "po_01KEZF7C00PXK8XREWJA6K4FGV". object.payout_destination (Optional): {@link
     * ExpandedPayoutDestinationSummary} or null. The payout destination, inlined when you request
     * expand=payout_destination. null when expanded and payout_destination_id is absent. Present
     * only when `expand` includes `payout_destination`; `null` when expanded and there is no
     * related payout destination. object.payout_destination.anyOf[1] (Value): {@link
     * ExpandedPayoutDestinationSummary}. A payout destination's summary fields, such as type, bank
     * name, last four digits, and status, returned when the destination is expanded.
     * object.payout_destination.anyOf[2] (Value): null. object.payout_destination_id (Optional):
     * string. Bank account or debit card receiving the payout. Absent when Flint can't match your
     * processor's destination to a payout destination. Example:
     * "pdest_01KEZF7C00M55HZDZXZP6YVE6B". object.payout_id (Required): string. Stable identifier
     * of the payout. Example: "po_01KEZF7C00PXK8XREWJA6K4FGV". object.reversal_status (Required):
     * string. Whether Flint has pulled a paid payout back from your bank: none until the reversal
     * completes, then reversed. A payout_reversal balance transaction returns the money, and
     * status stays succeeded. Value enum: "none", "reversed". object.reversed_by_payout
     * (Optional): {@link ExpandedPayoutSummary} or null. The payout reversing this one, inlined
     * when you request expand=reversed_by_payout. null when expanded and reversed_by_payout_id is
     * absent. Present only when `expand` includes `reversed_by_payout`; `null` when expanded and
     * there is no related payout. object.reversed_by_payout.anyOf[1] (Value): {@link
     * ExpandedPayoutSummary}. A payout's summary fields, including amount, method, status, and
     * arrival date, returned when the payout is expanded. object.reversed_by_payout.anyOf[2]
     * (Value): null. object.reversed_by_payout_id (Optional): string. The separate payout
     * reversing this one, when Flint has the matching payout. Its presence does not mean the
     * reversal has completed; read reversal_status. A payout has at most one of original_payout_id
     * and reversed_by_payout_id. Example: "po_01KEZF7C00PXK8XREWJA6K4FGV".
     * object.statement_descriptor (Optional): string. Text shown on your bank statement for the
     * deposit, when one was set. object.status (Required): string. Where the payout is: pending
     * until it is sent, in_transit on its way to your bank, then succeeded or failed. A succeeded
     * payout can still become failed if the bank returns the deposit, and canceled means a manual
     * payout was canceled while pending. Value enum: "pending", "in_transit", "succeeded",
     * "failed", "canceled". object.supported_actions (Required): Array of string. Lifecycle
     * actions Flint accepts now. cancel is offered while a payout is pending unless it was
     * scheduled automatically. [] enum: "cancel". object.supported_actions[] (Value): string.
     * Value enum: "cancel". object.trace_id (Optional): {@link PayoutTraceID}. The bank's trace
     * number for the deposit, which your bank can use to locate a late deposit. Its status says
     * whether the number is pending, available, or unsupported, and value holds the number when
     * Flint has it. Absent when Flint has no trace information. A payout's bank trace ID, with
     * whether it is pending, available, or unsupported. object.updated_at (Required): string. When
     * the payout last changed. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes (Optional): object. Previous values of changed top-level fields in
     * data.object, at this delivery's API version. Nested changes include the whole previous
     * top-level value. A value is null when the field was absent before the change. Omitted when
     * Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * amount_money (Required): {@link MoneyValue}. Amount sent to your bank. Always positive.
         * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
         * arrival_date (Optional): string. Calendar date the bank is expected to receive the
         * funds, in YYYY-MM-DD format using the UTC date of the expected arrival. Format: date.
         * Example: "2026-08-02". balance_source_type (Required): string. Balance source this
         * payout draws from. Flint chooses the source when balance_source_type is omitted at
         * create. Clients must accept source types added in future releases. Value enum: "card",
         * "bank_account". created_at (Required): string. When the payout was created. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". currency (Required): string. ISO 4217
         * currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
         * description (Optional): string. Description sent when the payout was created. Absent
         * when there is none. external_reference_id (Optional): string. Caller-owned identifier
         * for this resource in an external system. maxLength: 255. Example: "warehouse-1842".
         * failure_code (Optional): string. Flint-normalized payout failure code. Unknown provider
         * values are returned as payout_failed. Value enum: "account_closed", "account_frozen",
         * "bank_account_restricted", "bank_ownership_changed", "could_not_process",
         * "debit_not_authorized", "declined", "insufficient_funds", "invalid_account_number",
         * "incorrect_account_holder_name", "incorrect_account_holder_address",
         * "incorrect_account_holder_tax_id", "invalid_currency", "no_account", "unsupported_card",
         * "payout_failed". failure_message (Optional): string. Flint-authored payout failure
         * message. This is stable explanatory text, not a raw provider message. fee_amount_status
         * (Required): string. Whether the payout fee is estimated or final. not_applicable means
         * no applicable fee status is known, including unmapped fee states. Value enum:
         * "estimated", "final", "not_applicable". fee_money (Required): {@link MoneyValue} or
         * null. Fee for this payout, never negative. Payouts carry no fee, so this is 0 once your
         * processor records the payout. `null` when your processor hasn't recorded the payout yet.
         * fee_money.anyOf[1] (Value): {@link MoneyValue}. Monetary amount represented as integer
         * minor units plus an ISO 4217 currency code. fee_money.anyOf[2] (Value): null.
         * initiated_by (Required): string. What started the payout. A payout imported from your
         * processor follows the processor: scheduled when it sent the payout automatically,
         * otherwise manual. Only scheduled payouts list their balance transactions through GET
         * /v1/balance-transactions?payout_id=; other payouts return 409 with reason not_itemized.
         * Unmapped sources are returned as other. Value enum: "manual", "scheduled", "platform",
         * "other". merchant_id (Required): string. Merchant receiving the payout. Example:
         * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". metadata (Optional): {@link MetadataMap}. Caller-owned
         * metadata. Values can't be empty strings. Keys starting with flint_ are reserved for
         * Flint, are not returned, and cannot be written through the public API. Caller-owned
         * key-value data stored on a resource. Keys starting with flint_ are reserved for Flint
         * and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput;
         * maps written before those limits may not satisfy them. method (Required): string.
         * Payouts Flint sends, by API, Dashboard or schedule, are always `standard`. `instant`
         * appears only on a payout Flint recorded from the processor that was sent outside Flint.
         * `other` is a method Flint doesn't map. Value enum: "standard", "instant", "other".
         * net_money (Required): {@link MoneyValue} or null. Signed effect of this payout on your
         * Flint balance. It is negative because the payout takes money out: a 25000 payout with no
         * fee has net_money -25000. `null` when your processor hasn't recorded the payout yet.
         * net_money.anyOf[1] (Value): {@link MoneyValue}. Signed monetary amount represented as
         * integer minor units plus an ISO 4217 currency code. net_money.anyOf[2] (Value): null.
         * original_payout (Optional): {@link ExpandedPayoutSummary} or null. The payout this one
         * reverses, inlined when you request expand=original_payout. null when expanded and
         * original_payout_id is absent. Present only when `expand` includes `original_payout`;
         * `null` when expanded and there is no related payout. original_payout.anyOf[1] (Value):
         * {@link ExpandedPayoutSummary}. A payout's summary fields, including amount, method,
         * status, and arrival date, returned when the payout is expanded. original_payout.anyOf[2]
         * (Value): null. original_payout_id (Optional): string. On a payout that reverses another
         * payout, the payout it reverses. Present only when Flint has the matching original
         * payout. A payout has at most one of original_payout_id and reversed_by_payout_id.
         * Example: "po_01KEZF7C00PXK8XREWJA6K4FGV". payout_destination (Optional): {@link
         * ExpandedPayoutDestinationSummary} or null. The payout destination, inlined when you
         * request expand=payout_destination. null when expanded and payout_destination_id is
         * absent. Present only when `expand` includes `payout_destination`; `null` when expanded
         * and there is no related payout destination. payout_destination.anyOf[1] (Value): {@link
         * ExpandedPayoutDestinationSummary}. A payout destination's summary fields, such as type,
         * bank name, last four digits, and status, returned when the destination is expanded.
         * payout_destination.anyOf[2] (Value): null. payout_destination_id (Optional): string.
         * Bank account or debit card receiving the payout. Absent when Flint can't match your
         * processor's destination to a payout destination. Example:
         * "pdest_01KEZF7C00M55HZDZXZP6YVE6B". payout_id (Required): string. Stable identifier of
         * the payout. Example: "po_01KEZF7C00PXK8XREWJA6K4FGV". reversal_status (Required):
         * string. Whether Flint has pulled a paid payout back from your bank: none until the
         * reversal completes, then reversed. A payout_reversal balance transaction returns the
         * money, and status stays succeeded. Value enum: "none", "reversed". reversed_by_payout
         * (Optional): {@link ExpandedPayoutSummary} or null. The payout reversing this one,
         * inlined when you request expand=reversed_by_payout. null when expanded and
         * reversed_by_payout_id is absent. Present only when `expand` includes
         * `reversed_by_payout`; `null` when expanded and there is no related payout.
         * reversed_by_payout.anyOf[1] (Value): {@link ExpandedPayoutSummary}. A payout's summary
         * fields, including amount, method, status, and arrival date, returned when the payout is
         * expanded. reversed_by_payout.anyOf[2] (Value): null. reversed_by_payout_id (Optional):
         * string. The separate payout reversing this one, when Flint has the matching payout. Its
         * presence does not mean the reversal has completed; read reversal_status. A payout has at
         * most one of original_payout_id and reversed_by_payout_id. Example:
         * "po_01KEZF7C00PXK8XREWJA6K4FGV". statement_descriptor (Optional): string. Text shown on
         * your bank statement for the deposit, when one was set. status (Required): string. Where
         * the payout is: pending until it is sent, in_transit on its way to your bank, then
         * succeeded or failed. A succeeded payout can still become failed if the bank returns the
         * deposit, and canceled means a manual payout was canceled while pending. Value enum:
         * "pending", "in_transit", "succeeded", "failed", "canceled". supported_actions
         * (Required): Array of string. Lifecycle actions Flint accepts now. cancel is offered
         * while a payout is pending unless it was scheduled automatically. [] enum: "cancel".
         * supported_actions[] (Value): string. Value enum: "cancel". trace_id (Optional): {@link
         * PayoutTraceID}. The bank's trace number for the deposit, which your bank can use to
         * locate a late deposit. Its status says whether the number is pending, available, or
         * unsupported, and value holds the number when Flint has it. Absent when Flint has no
         * trace information. A payout's bank trace ID, with whether it is pending, available, or
         * unsupported. updated_at (Required): string. When the payout last changed. Format:
         * date-time. Example: "2026-08-02T16:00:00Z".
         */
        "object": {
            /**
             * Amount sent to your bank. Always positive. Monetary amount represented as integer
             * minor units plus an ISO 4217 currency code.
             */
            "amount_money": MoneyValue;
            /**
             * Calendar date the bank is expected to receive the funds, in YYYY-MM-DD format using
             * the UTC date of the expected arrival. Format: date. Example: "2026-08-02".
             */
            "arrival_date"?: string;
            /**
             * Balance source this payout draws from. Flint chooses the source when
             * balance_source_type is omitted at create. Clients must accept source types added in
             * future releases. Value enum: "card", "bank_account".
             */
            "balance_source_type": "card" | "bank_account" | (string & {});
            /** When the payout was created. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example:
             * "USD".
             */
            "currency": string;
            /** Description sent when the payout was created. Absent when there is none. */
            "description"?: string;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Flint-normalized payout failure code. Unknown provider values are returned as
             * payout_failed. Value enum: "account_closed", "account_frozen",
             * "bank_account_restricted", "bank_ownership_changed", "could_not_process",
             * "debit_not_authorized", "declined", "insufficient_funds", "invalid_account_number",
             * "incorrect_account_holder_name", "incorrect_account_holder_address",
             * "incorrect_account_holder_tax_id", "invalid_currency", "no_account",
             * "unsupported_card", "payout_failed".
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
             * Flint-authored payout failure message. This is stable explanatory text, not a raw
             * provider message.
             */
            "failure_message"?: string;
            /**
             * Whether the payout fee is estimated or final. not_applicable means no applicable fee
             * status is known, including unmapped fee states. Value enum: "estimated", "final",
             * "not_applicable".
             */
            "fee_amount_status": "estimated" | "final" | "not_applicable" | (string & {});
            /**
             * Fee for this payout, never negative. Payouts carry no fee, so this is 0 once your
             * processor records the payout. `null` when your processor hasn't recorded the payout
             * yet. anyOf[1] (Value): {@link MoneyValue}. Monetary amount represented as integer
             * minor units plus an ISO 4217 currency code. anyOf[2] (Value): null.
             */
            "fee_money": ((MoneyValue) | (null));
            /**
             * What started the payout. A payout imported from your processor follows the
             * processor: scheduled when it sent the payout automatically, otherwise manual. Only
             * scheduled payouts list their balance transactions through GET
             * /v1/balance-transactions?payout_id=; other payouts return 409 with reason
             * not_itemized. Unmapped sources are returned as other. Value enum: "manual",
             * "scheduled", "platform", "other".
             */
            "initiated_by": "manual" | "scheduled" | "platform" | "other" | (string & {});
            /** Merchant receiving the payout. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
            "merchant_id": string;
            /**
             * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are
             * reserved for Flint, are not returned, and cannot be written through the public API.
             * Caller-owned key-value data stored on a resource. Keys starting with flint_ are
             * reserved for Flint and are not returned. Writes follow the limits on MetadataInput
             * and MetadataPatchInput; maps written before those limits may not satisfy them.
             */
            "metadata"?: MetadataMap;
            /**
             * Payouts Flint sends, by API, Dashboard or schedule, are always `standard`. `instant`
             * appears only on a payout Flint recorded from the processor that was sent outside
             * Flint. `other` is a method Flint doesn't map. Value enum: "standard", "instant",
             * "other".
             */
            "method": "standard" | "instant" | "other" | (string & {});
            /**
             * Signed effect of this payout on your Flint balance. It is negative because the
             * payout takes money out: a 25000 payout with no fee has net_money -25000. `null` when
             * your processor hasn't recorded the payout yet. anyOf[1] (Value): {@link MoneyValue}.
             * Signed monetary amount represented as integer minor units plus an ISO 4217 currency
             * code. anyOf[2] (Value): null.
             */
            "net_money": ((MoneyValue) | (null));
            /**
             * The payout this one reverses, inlined when you request expand=original_payout. null
             * when expanded and original_payout_id is absent. Present only when `expand` includes
             * `original_payout`; `null` when expanded and there is no related payout. anyOf[1]
             * (Value): {@link ExpandedPayoutSummary}. A payout's summary fields, including amount,
             * method, status, and arrival date, returned when the payout is expanded. anyOf[2]
             * (Value): null.
             */
            "original_payout"?: ((ExpandedPayoutSummary) | (null));
            /**
             * On a payout that reverses another payout, the payout it reverses. Present only when
             * Flint has the matching original payout. A payout has at most one of
             * original_payout_id and reversed_by_payout_id. Example:
             * "po_01KEZF7C00PXK8XREWJA6K4FGV".
             */
            "original_payout_id"?: string;
            /**
             * The payout destination, inlined when you request expand=payout_destination. null
             * when expanded and payout_destination_id is absent. Present only when `expand`
             * includes `payout_destination`; `null` when expanded and there is no related payout
             * destination. anyOf[1] (Value): {@link ExpandedPayoutDestinationSummary}. A payout
             * destination's summary fields, such as type, bank name, last four digits, and status,
             * returned when the destination is expanded. anyOf[2] (Value): null.
             */
            "payout_destination"?: ((ExpandedPayoutDestinationSummary) | (null));
            /**
             * Bank account or debit card receiving the payout. Absent when Flint can't match your
             * processor's destination to a payout destination. Example:
             * "pdest_01KEZF7C00M55HZDZXZP6YVE6B".
             */
            "payout_destination_id"?: string;
            /** Stable identifier of the payout. Example: "po_01KEZF7C00PXK8XREWJA6K4FGV". */
            "payout_id": string;
            /**
             * Whether Flint has pulled a paid payout back from your bank: none until the reversal
             * completes, then reversed. A payout_reversal balance transaction returns the money,
             * and status stays succeeded. Value enum: "none", "reversed".
             */
            "reversal_status": "none" | "reversed" | (string & {});
            /**
             * The payout reversing this one, inlined when you request expand=reversed_by_payout.
             * null when expanded and reversed_by_payout_id is absent. Present only when `expand`
             * includes `reversed_by_payout`; `null` when expanded and there is no related payout.
             * anyOf[1] (Value): {@link ExpandedPayoutSummary}. A payout's summary fields,
             * including amount, method, status, and arrival date, returned when the payout is
             * expanded. anyOf[2] (Value): null.
             */
            "reversed_by_payout"?: ((ExpandedPayoutSummary) | (null));
            /**
             * The separate payout reversing this one, when Flint has the matching payout. Its
             * presence does not mean the reversal has completed; read reversal_status. A payout
             * has at most one of original_payout_id and reversed_by_payout_id. Example:
             * "po_01KEZF7C00PXK8XREWJA6K4FGV".
             */
            "reversed_by_payout_id"?: string;
            /** Text shown on your bank statement for the deposit, when one was set. */
            "statement_descriptor"?: string;
            /**
             * Where the payout is: pending until it is sent, in_transit on its way to your bank,
             * then succeeded or failed. A succeeded payout can still become failed if the bank
             * returns the deposit, and canceled means a manual payout was canceled while pending.
             * Value enum: "pending", "in_transit", "succeeded", "failed", "canceled".
             */
            "status": "pending" | "in_transit" | "succeeded" | "failed" | "canceled" | (string & {});
            /**
             * Lifecycle actions Flint accepts now. cancel is offered while a payout is pending
             * unless it was scheduled automatically. [] enum: "cancel". [] (Value): string. Value
             * enum: "cancel".
             */
            "supported_actions": Array<"cancel" | (string & {})>;
            /**
             * The bank's trace number for the deposit, which your bank can use to locate a late
             * deposit. Its status says whether the number is pending, available, or unsupported,
             * and value holds the number when Flint has it. Absent when Flint has no trace
             * information. A payout's bank trace ID, with whether it is pending, available, or
             * unsupported.
             */
            "trace_id"?: PayoutTraceID;
            /** When the payout last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<Payout>;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "payout.canceled". */
    "event_type"?: "payout.canceled";
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
 * The `payout.canceled` webhook payload for the `merchant` event source. Fields shared by merchant
 * webhook payloads.
 */
export type PayoutCanceledMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.amount_money (Required): {@link MoneyValue}. Amount sent to your
     * bank. Always positive. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code. object.arrival_date (Optional): string. Calendar date the bank is expected to
     * receive the funds, in YYYY-MM-DD format using the UTC date of the expected arrival. Format:
     * date. Example: "2026-08-02". object.balance_source_type (Required): string. Balance source
     * this payout draws from. Flint chooses the source when balance_source_type is omitted at
     * create. Clients must accept source types added in future releases. Value enum: "card",
     * "bank_account". object.created_at (Required): string. When the payout was created. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.currency (Required): string. ISO 4217
     * currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
     * object.description (Optional): string. Description sent when the payout was created. Absent
     * when there is none. object.external_reference_id (Optional): string. Caller-owned identifier
     * for this resource in an external system. maxLength: 255. Example: "warehouse-1842".
     * object.failure_code (Optional): string. Flint-normalized payout failure code. Unknown
     * provider values are returned as payout_failed. Value enum: "account_closed",
     * "account_frozen", "bank_account_restricted", "bank_ownership_changed", "could_not_process",
     * "debit_not_authorized", "declined", "insufficient_funds", "invalid_account_number",
     * "incorrect_account_holder_name", "incorrect_account_holder_address",
     * "incorrect_account_holder_tax_id", "invalid_currency", "no_account", "unsupported_card",
     * "payout_failed". object.failure_message (Optional): string. Flint-authored payout failure
     * message. This is stable explanatory text, not a raw provider message.
     * object.fee_amount_status (Required): string. Whether the payout fee is estimated or final.
     * not_applicable means no applicable fee status is known, including unmapped fee states. Value
     * enum: "estimated", "final", "not_applicable". object.fee_money (Required): {@link
     * MoneyValue} or null. Fee for this payout, never negative. Payouts carry no fee, so this is 0
     * once your processor records the payout. `null` when your processor hasn't recorded the
     * payout yet. object.fee_money.anyOf[1] (Value): {@link MoneyValue}. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code. object.fee_money.anyOf[2]
     * (Value): null. object.initiated_by (Required): string. What started the payout. A payout
     * imported from your processor follows the processor: scheduled when it sent the payout
     * automatically, otherwise manual. Only scheduled payouts list their balance transactions
     * through GET /v1/balance-transactions?payout_id=; other payouts return 409 with reason
     * not_itemized. Unmapped sources are returned as other. Value enum: "manual", "scheduled",
     * "platform", "other". object.merchant_id (Required): string. Merchant receiving the payout.
     * Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.metadata (Optional): {@link MetadataMap}.
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and
     * are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps
     * written before those limits may not satisfy them. object.method (Required): string. Payouts
     * Flint sends, by API, Dashboard or schedule, are always `standard`. `instant` appears only on
     * a payout Flint recorded from the processor that was sent outside Flint. `other` is a method
     * Flint doesn't map. Value enum: "standard", "instant", "other". object.net_money (Required):
     * {@link MoneyValue} or null. Signed effect of this payout on your Flint balance. It is
     * negative because the payout takes money out: a 25000 payout with no fee has net_money
     * -25000. `null` when your processor hasn't recorded the payout yet. object.net_money.anyOf[1]
     * (Value): {@link MoneyValue}. Signed monetary amount represented as integer minor units plus
     * an ISO 4217 currency code. object.net_money.anyOf[2] (Value): null. object.original_payout
     * (Optional): {@link ExpandedPayoutSummary} or null. The payout this one reverses, inlined
     * when you request expand=original_payout. null when expanded and original_payout_id is
     * absent. Present only when `expand` includes `original_payout`; `null` when expanded and
     * there is no related payout. object.original_payout.anyOf[1] (Value): {@link
     * ExpandedPayoutSummary}. A payout's summary fields, including amount, method, status, and
     * arrival date, returned when the payout is expanded. object.original_payout.anyOf[2] (Value):
     * null. object.original_payout_id (Optional): string. On a payout that reverses another
     * payout, the payout it reverses. Present only when Flint has the matching original payout. A
     * payout has at most one of original_payout_id and reversed_by_payout_id. Example:
     * "po_01KEZF7C00PXK8XREWJA6K4FGV". object.payout_destination (Optional): {@link
     * ExpandedPayoutDestinationSummary} or null. The payout destination, inlined when you request
     * expand=payout_destination. null when expanded and payout_destination_id is absent. Present
     * only when `expand` includes `payout_destination`; `null` when expanded and there is no
     * related payout destination. object.payout_destination.anyOf[1] (Value): {@link
     * ExpandedPayoutDestinationSummary}. A payout destination's summary fields, such as type, bank
     * name, last four digits, and status, returned when the destination is expanded.
     * object.payout_destination.anyOf[2] (Value): null. object.payout_destination_id (Optional):
     * string. Bank account or debit card receiving the payout. Absent when Flint can't match your
     * processor's destination to a payout destination. Example:
     * "pdest_01KEZF7C00M55HZDZXZP6YVE6B". object.payout_id (Required): string. Stable identifier
     * of the payout. Example: "po_01KEZF7C00PXK8XREWJA6K4FGV". object.reversal_status (Required):
     * string. Whether Flint has pulled a paid payout back from your bank: none until the reversal
     * completes, then reversed. A payout_reversal balance transaction returns the money, and
     * status stays succeeded. Value enum: "none", "reversed". object.reversed_by_payout
     * (Optional): {@link ExpandedPayoutSummary} or null. The payout reversing this one, inlined
     * when you request expand=reversed_by_payout. null when expanded and reversed_by_payout_id is
     * absent. Present only when `expand` includes `reversed_by_payout`; `null` when expanded and
     * there is no related payout. object.reversed_by_payout.anyOf[1] (Value): {@link
     * ExpandedPayoutSummary}. A payout's summary fields, including amount, method, status, and
     * arrival date, returned when the payout is expanded. object.reversed_by_payout.anyOf[2]
     * (Value): null. object.reversed_by_payout_id (Optional): string. The separate payout
     * reversing this one, when Flint has the matching payout. Its presence does not mean the
     * reversal has completed; read reversal_status. A payout has at most one of original_payout_id
     * and reversed_by_payout_id. Example: "po_01KEZF7C00PXK8XREWJA6K4FGV".
     * object.statement_descriptor (Optional): string. Text shown on your bank statement for the
     * deposit, when one was set. object.status (Required): string. Where the payout is: pending
     * until it is sent, in_transit on its way to your bank, then succeeded or failed. A succeeded
     * payout can still become failed if the bank returns the deposit, and canceled means a manual
     * payout was canceled while pending. Value enum: "pending", "in_transit", "succeeded",
     * "failed", "canceled". object.supported_actions (Required): Array of string. Lifecycle
     * actions Flint accepts now. cancel is offered while a payout is pending unless it was
     * scheduled automatically. [] enum: "cancel". object.supported_actions[] (Value): string.
     * Value enum: "cancel". object.trace_id (Optional): {@link PayoutTraceID}. The bank's trace
     * number for the deposit, which your bank can use to locate a late deposit. Its status says
     * whether the number is pending, available, or unsupported, and value holds the number when
     * Flint has it. Absent when Flint has no trace information. A payout's bank trace ID, with
     * whether it is pending, available, or unsupported. object.updated_at (Required): string. When
     * the payout last changed. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes (Optional): object. Previous values of changed top-level fields in
     * data.object, at this delivery's API version. Nested changes include the whole previous
     * top-level value. A value is null when the field was absent before the change. Omitted when
     * Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * amount_money (Required): {@link MoneyValue}. Amount sent to your bank. Always positive.
         * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
         * arrival_date (Optional): string. Calendar date the bank is expected to receive the
         * funds, in YYYY-MM-DD format using the UTC date of the expected arrival. Format: date.
         * Example: "2026-08-02". balance_source_type (Required): string. Balance source this
         * payout draws from. Flint chooses the source when balance_source_type is omitted at
         * create. Clients must accept source types added in future releases. Value enum: "card",
         * "bank_account". created_at (Required): string. When the payout was created. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". currency (Required): string. ISO 4217
         * currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
         * description (Optional): string. Description sent when the payout was created. Absent
         * when there is none. external_reference_id (Optional): string. Caller-owned identifier
         * for this resource in an external system. maxLength: 255. Example: "warehouse-1842".
         * failure_code (Optional): string. Flint-normalized payout failure code. Unknown provider
         * values are returned as payout_failed. Value enum: "account_closed", "account_frozen",
         * "bank_account_restricted", "bank_ownership_changed", "could_not_process",
         * "debit_not_authorized", "declined", "insufficient_funds", "invalid_account_number",
         * "incorrect_account_holder_name", "incorrect_account_holder_address",
         * "incorrect_account_holder_tax_id", "invalid_currency", "no_account", "unsupported_card",
         * "payout_failed". failure_message (Optional): string. Flint-authored payout failure
         * message. This is stable explanatory text, not a raw provider message. fee_amount_status
         * (Required): string. Whether the payout fee is estimated or final. not_applicable means
         * no applicable fee status is known, including unmapped fee states. Value enum:
         * "estimated", "final", "not_applicable". fee_money (Required): {@link MoneyValue} or
         * null. Fee for this payout, never negative. Payouts carry no fee, so this is 0 once your
         * processor records the payout. `null` when your processor hasn't recorded the payout yet.
         * fee_money.anyOf[1] (Value): {@link MoneyValue}. Monetary amount represented as integer
         * minor units plus an ISO 4217 currency code. fee_money.anyOf[2] (Value): null.
         * initiated_by (Required): string. What started the payout. A payout imported from your
         * processor follows the processor: scheduled when it sent the payout automatically,
         * otherwise manual. Only scheduled payouts list their balance transactions through GET
         * /v1/balance-transactions?payout_id=; other payouts return 409 with reason not_itemized.
         * Unmapped sources are returned as other. Value enum: "manual", "scheduled", "platform",
         * "other". merchant_id (Required): string. Merchant receiving the payout. Example:
         * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". metadata (Optional): {@link MetadataMap}. Caller-owned
         * metadata. Values can't be empty strings. Keys starting with flint_ are reserved for
         * Flint, are not returned, and cannot be written through the public API. Caller-owned
         * key-value data stored on a resource. Keys starting with flint_ are reserved for Flint
         * and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput;
         * maps written before those limits may not satisfy them. method (Required): string.
         * Payouts Flint sends, by API, Dashboard or schedule, are always `standard`. `instant`
         * appears only on a payout Flint recorded from the processor that was sent outside Flint.
         * `other` is a method Flint doesn't map. Value enum: "standard", "instant", "other".
         * net_money (Required): {@link MoneyValue} or null. Signed effect of this payout on your
         * Flint balance. It is negative because the payout takes money out: a 25000 payout with no
         * fee has net_money -25000. `null` when your processor hasn't recorded the payout yet.
         * net_money.anyOf[1] (Value): {@link MoneyValue}. Signed monetary amount represented as
         * integer minor units plus an ISO 4217 currency code. net_money.anyOf[2] (Value): null.
         * original_payout (Optional): {@link ExpandedPayoutSummary} or null. The payout this one
         * reverses, inlined when you request expand=original_payout. null when expanded and
         * original_payout_id is absent. Present only when `expand` includes `original_payout`;
         * `null` when expanded and there is no related payout. original_payout.anyOf[1] (Value):
         * {@link ExpandedPayoutSummary}. A payout's summary fields, including amount, method,
         * status, and arrival date, returned when the payout is expanded. original_payout.anyOf[2]
         * (Value): null. original_payout_id (Optional): string. On a payout that reverses another
         * payout, the payout it reverses. Present only when Flint has the matching original
         * payout. A payout has at most one of original_payout_id and reversed_by_payout_id.
         * Example: "po_01KEZF7C00PXK8XREWJA6K4FGV". payout_destination (Optional): {@link
         * ExpandedPayoutDestinationSummary} or null. The payout destination, inlined when you
         * request expand=payout_destination. null when expanded and payout_destination_id is
         * absent. Present only when `expand` includes `payout_destination`; `null` when expanded
         * and there is no related payout destination. payout_destination.anyOf[1] (Value): {@link
         * ExpandedPayoutDestinationSummary}. A payout destination's summary fields, such as type,
         * bank name, last four digits, and status, returned when the destination is expanded.
         * payout_destination.anyOf[2] (Value): null. payout_destination_id (Optional): string.
         * Bank account or debit card receiving the payout. Absent when Flint can't match your
         * processor's destination to a payout destination. Example:
         * "pdest_01KEZF7C00M55HZDZXZP6YVE6B". payout_id (Required): string. Stable identifier of
         * the payout. Example: "po_01KEZF7C00PXK8XREWJA6K4FGV". reversal_status (Required):
         * string. Whether Flint has pulled a paid payout back from your bank: none until the
         * reversal completes, then reversed. A payout_reversal balance transaction returns the
         * money, and status stays succeeded. Value enum: "none", "reversed". reversed_by_payout
         * (Optional): {@link ExpandedPayoutSummary} or null. The payout reversing this one,
         * inlined when you request expand=reversed_by_payout. null when expanded and
         * reversed_by_payout_id is absent. Present only when `expand` includes
         * `reversed_by_payout`; `null` when expanded and there is no related payout.
         * reversed_by_payout.anyOf[1] (Value): {@link ExpandedPayoutSummary}. A payout's summary
         * fields, including amount, method, status, and arrival date, returned when the payout is
         * expanded. reversed_by_payout.anyOf[2] (Value): null. reversed_by_payout_id (Optional):
         * string. The separate payout reversing this one, when Flint has the matching payout. Its
         * presence does not mean the reversal has completed; read reversal_status. A payout has at
         * most one of original_payout_id and reversed_by_payout_id. Example:
         * "po_01KEZF7C00PXK8XREWJA6K4FGV". statement_descriptor (Optional): string. Text shown on
         * your bank statement for the deposit, when one was set. status (Required): string. Where
         * the payout is: pending until it is sent, in_transit on its way to your bank, then
         * succeeded or failed. A succeeded payout can still become failed if the bank returns the
         * deposit, and canceled means a manual payout was canceled while pending. Value enum:
         * "pending", "in_transit", "succeeded", "failed", "canceled". supported_actions
         * (Required): Array of string. Lifecycle actions Flint accepts now. cancel is offered
         * while a payout is pending unless it was scheduled automatically. [] enum: "cancel".
         * supported_actions[] (Value): string. Value enum: "cancel". trace_id (Optional): {@link
         * PayoutTraceID}. The bank's trace number for the deposit, which your bank can use to
         * locate a late deposit. Its status says whether the number is pending, available, or
         * unsupported, and value holds the number when Flint has it. Absent when Flint has no
         * trace information. A payout's bank trace ID, with whether it is pending, available, or
         * unsupported. updated_at (Required): string. When the payout last changed. Format:
         * date-time. Example: "2026-08-02T16:00:00Z".
         */
        "object": {
            /**
             * Amount sent to your bank. Always positive. Monetary amount represented as integer
             * minor units plus an ISO 4217 currency code.
             */
            "amount_money": MoneyValue;
            /**
             * Calendar date the bank is expected to receive the funds, in YYYY-MM-DD format using
             * the UTC date of the expected arrival. Format: date. Example: "2026-08-02".
             */
            "arrival_date"?: string;
            /**
             * Balance source this payout draws from. Flint chooses the source when
             * balance_source_type is omitted at create. Clients must accept source types added in
             * future releases. Value enum: "card", "bank_account".
             */
            "balance_source_type": "card" | "bank_account" | (string & {});
            /** When the payout was created. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example:
             * "USD".
             */
            "currency": string;
            /** Description sent when the payout was created. Absent when there is none. */
            "description"?: string;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Flint-normalized payout failure code. Unknown provider values are returned as
             * payout_failed. Value enum: "account_closed", "account_frozen",
             * "bank_account_restricted", "bank_ownership_changed", "could_not_process",
             * "debit_not_authorized", "declined", "insufficient_funds", "invalid_account_number",
             * "incorrect_account_holder_name", "incorrect_account_holder_address",
             * "incorrect_account_holder_tax_id", "invalid_currency", "no_account",
             * "unsupported_card", "payout_failed".
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
             * Flint-authored payout failure message. This is stable explanatory text, not a raw
             * provider message.
             */
            "failure_message"?: string;
            /**
             * Whether the payout fee is estimated or final. not_applicable means no applicable fee
             * status is known, including unmapped fee states. Value enum: "estimated", "final",
             * "not_applicable".
             */
            "fee_amount_status": "estimated" | "final" | "not_applicable" | (string & {});
            /**
             * Fee for this payout, never negative. Payouts carry no fee, so this is 0 once your
             * processor records the payout. `null` when your processor hasn't recorded the payout
             * yet. anyOf[1] (Value): {@link MoneyValue}. Monetary amount represented as integer
             * minor units plus an ISO 4217 currency code. anyOf[2] (Value): null.
             */
            "fee_money": ((MoneyValue) | (null));
            /**
             * What started the payout. A payout imported from your processor follows the
             * processor: scheduled when it sent the payout automatically, otherwise manual. Only
             * scheduled payouts list their balance transactions through GET
             * /v1/balance-transactions?payout_id=; other payouts return 409 with reason
             * not_itemized. Unmapped sources are returned as other. Value enum: "manual",
             * "scheduled", "platform", "other".
             */
            "initiated_by": "manual" | "scheduled" | "platform" | "other" | (string & {});
            /** Merchant receiving the payout. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
            "merchant_id": string;
            /**
             * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are
             * reserved for Flint, are not returned, and cannot be written through the public API.
             * Caller-owned key-value data stored on a resource. Keys starting with flint_ are
             * reserved for Flint and are not returned. Writes follow the limits on MetadataInput
             * and MetadataPatchInput; maps written before those limits may not satisfy them.
             */
            "metadata"?: MetadataMap;
            /**
             * Payouts Flint sends, by API, Dashboard or schedule, are always `standard`. `instant`
             * appears only on a payout Flint recorded from the processor that was sent outside
             * Flint. `other` is a method Flint doesn't map. Value enum: "standard", "instant",
             * "other".
             */
            "method": "standard" | "instant" | "other" | (string & {});
            /**
             * Signed effect of this payout on your Flint balance. It is negative because the
             * payout takes money out: a 25000 payout with no fee has net_money -25000. `null` when
             * your processor hasn't recorded the payout yet. anyOf[1] (Value): {@link MoneyValue}.
             * Signed monetary amount represented as integer minor units plus an ISO 4217 currency
             * code. anyOf[2] (Value): null.
             */
            "net_money": ((MoneyValue) | (null));
            /**
             * The payout this one reverses, inlined when you request expand=original_payout. null
             * when expanded and original_payout_id is absent. Present only when `expand` includes
             * `original_payout`; `null` when expanded and there is no related payout. anyOf[1]
             * (Value): {@link ExpandedPayoutSummary}. A payout's summary fields, including amount,
             * method, status, and arrival date, returned when the payout is expanded. anyOf[2]
             * (Value): null.
             */
            "original_payout"?: ((ExpandedPayoutSummary) | (null));
            /**
             * On a payout that reverses another payout, the payout it reverses. Present only when
             * Flint has the matching original payout. A payout has at most one of
             * original_payout_id and reversed_by_payout_id. Example:
             * "po_01KEZF7C00PXK8XREWJA6K4FGV".
             */
            "original_payout_id"?: string;
            /**
             * The payout destination, inlined when you request expand=payout_destination. null
             * when expanded and payout_destination_id is absent. Present only when `expand`
             * includes `payout_destination`; `null` when expanded and there is no related payout
             * destination. anyOf[1] (Value): {@link ExpandedPayoutDestinationSummary}. A payout
             * destination's summary fields, such as type, bank name, last four digits, and status,
             * returned when the destination is expanded. anyOf[2] (Value): null.
             */
            "payout_destination"?: ((ExpandedPayoutDestinationSummary) | (null));
            /**
             * Bank account or debit card receiving the payout. Absent when Flint can't match your
             * processor's destination to a payout destination. Example:
             * "pdest_01KEZF7C00M55HZDZXZP6YVE6B".
             */
            "payout_destination_id"?: string;
            /** Stable identifier of the payout. Example: "po_01KEZF7C00PXK8XREWJA6K4FGV". */
            "payout_id": string;
            /**
             * Whether Flint has pulled a paid payout back from your bank: none until the reversal
             * completes, then reversed. A payout_reversal balance transaction returns the money,
             * and status stays succeeded. Value enum: "none", "reversed".
             */
            "reversal_status": "none" | "reversed" | (string & {});
            /**
             * The payout reversing this one, inlined when you request expand=reversed_by_payout.
             * null when expanded and reversed_by_payout_id is absent. Present only when `expand`
             * includes `reversed_by_payout`; `null` when expanded and there is no related payout.
             * anyOf[1] (Value): {@link ExpandedPayoutSummary}. A payout's summary fields,
             * including amount, method, status, and arrival date, returned when the payout is
             * expanded. anyOf[2] (Value): null.
             */
            "reversed_by_payout"?: ((ExpandedPayoutSummary) | (null));
            /**
             * The separate payout reversing this one, when Flint has the matching payout. Its
             * presence does not mean the reversal has completed; read reversal_status. A payout
             * has at most one of original_payout_id and reversed_by_payout_id. Example:
             * "po_01KEZF7C00PXK8XREWJA6K4FGV".
             */
            "reversed_by_payout_id"?: string;
            /** Text shown on your bank statement for the deposit, when one was set. */
            "statement_descriptor"?: string;
            /**
             * Where the payout is: pending until it is sent, in_transit on its way to your bank,
             * then succeeded or failed. A succeeded payout can still become failed if the bank
             * returns the deposit, and canceled means a manual payout was canceled while pending.
             * Value enum: "pending", "in_transit", "succeeded", "failed", "canceled".
             */
            "status": "pending" | "in_transit" | "succeeded" | "failed" | "canceled" | (string & {});
            /**
             * Lifecycle actions Flint accepts now. cancel is offered while a payout is pending
             * unless it was scheduled automatically. [] enum: "cancel". [] (Value): string. Value
             * enum: "cancel".
             */
            "supported_actions": Array<"cancel" | (string & {})>;
            /**
             * The bank's trace number for the deposit, which your bank can use to locate a late
             * deposit. Its status says whether the number is pending, available, or unsupported,
             * and value holds the number when Flint has it. Absent when Flint has no trace
             * information. A payout's bank trace ID, with whether it is pending, available, or
             * unsupported.
             */
            "trace_id"?: PayoutTraceID;
            /** When the payout last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<Payout>;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "payout.canceled". */
    "event_type"?: "payout.canceled";
});
export type PayoutCreatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "amount_money": MoneyValue;
            "arrival_date"?: string;
            "balance_source_type": "card" | "bank_account" | (string & {});
            "created_at": string;
            "currency": string;
            "description"?: string;
            "external_reference_id"?: string;
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
            "failure_message"?: string;
            "fee_amount_status": "estimated" | "final" | "not_applicable" | (string & {});
            "fee_money": ((MoneyValue) | (null));
            "initiated_by": "manual" | "scheduled" | "platform" | "other" | (string & {});
            "merchant_id": string;
            "metadata"?: MetadataMap;
            "method": "standard" | "instant" | "other" | (string & {});
            "net_money": ((MoneyValue) | (null));
            "original_payout"?: ((ExpandedPayoutSummary) | (null));
            "original_payout_id"?: string;
            "payout_destination"?: ((ExpandedPayoutDestinationSummary) | (null));
            "payout_destination_id"?: string;
            "payout_id": string;
            "reversal_status": "none" | "reversed" | (string & {});
            "reversed_by_payout"?: ((ExpandedPayoutSummary) | (null));
            "reversed_by_payout_id"?: string;
            "statement_descriptor"?: string;
            "status": "pending" | "in_transit" | "succeeded" | "failed" | "canceled" | (string & {});
            "supported_actions": Array<"cancel" | (string & {})>;
            "trace_id"?: PayoutTraceID;
            "updated_at": string;
        };
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "payout.created";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "amount_money": MoneyValue;
            "arrival_date"?: string;
            "balance_source_type": "card" | "bank_account" | (string & {});
            "created_at": string;
            "currency": string;
            "description"?: string;
            "external_reference_id"?: string;
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
            "failure_message"?: string;
            "fee_amount_status": "estimated" | "final" | "not_applicable" | (string & {});
            "fee_money": ((MoneyValue) | (null));
            "initiated_by": "manual" | "scheduled" | "platform" | "other" | (string & {});
            "merchant_id": string;
            "metadata"?: MetadataMap;
            "method": "standard" | "instant" | "other" | (string & {});
            "net_money": ((MoneyValue) | (null));
            "original_payout"?: ((ExpandedPayoutSummary) | (null));
            "original_payout_id"?: string;
            "payout_destination"?: ((ExpandedPayoutDestinationSummary) | (null));
            "payout_destination_id"?: string;
            "payout_id": string;
            "reversal_status": "none" | "reversed" | (string & {});
            "reversed_by_payout"?: ((ExpandedPayoutSummary) | (null));
            "reversed_by_payout_id"?: string;
            "statement_descriptor"?: string;
            "status": "pending" | "in_transit" | "succeeded" | "failed" | "canceled" | (string & {});
            "supported_actions": Array<"cancel" | (string & {})>;
            "trace_id"?: PayoutTraceID;
            "updated_at": string;
        };
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "payout.created";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "payout.created";
});
/**
 * The `payout.created` webhook payload for the `installed_merchants` event source. Fields shared
 * by partner webhook payloads.
 */
export type PayoutCreatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.amount_money (Required): {@link MoneyValue}. Amount sent to your
     * bank. Always positive. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code. object.arrival_date (Optional): string. Calendar date the bank is expected to
     * receive the funds, in YYYY-MM-DD format using the UTC date of the expected arrival. Format:
     * date. Example: "2026-08-02". object.balance_source_type (Required): string. Balance source
     * this payout draws from. Flint chooses the source when balance_source_type is omitted at
     * create. Clients must accept source types added in future releases. Value enum: "card",
     * "bank_account". object.created_at (Required): string. When the payout was created. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.currency (Required): string. ISO 4217
     * currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
     * object.description (Optional): string. Description sent when the payout was created. Absent
     * when there is none. object.external_reference_id (Optional): string. Caller-owned identifier
     * for this resource in an external system. maxLength: 255. Example: "warehouse-1842".
     * object.failure_code (Optional): string. Flint-normalized payout failure code. Unknown
     * provider values are returned as payout_failed. Value enum: "account_closed",
     * "account_frozen", "bank_account_restricted", "bank_ownership_changed", "could_not_process",
     * "debit_not_authorized", "declined", "insufficient_funds", "invalid_account_number",
     * "incorrect_account_holder_name", "incorrect_account_holder_address",
     * "incorrect_account_holder_tax_id", "invalid_currency", "no_account", "unsupported_card",
     * "payout_failed". object.failure_message (Optional): string. Flint-authored payout failure
     * message. This is stable explanatory text, not a raw provider message.
     * object.fee_amount_status (Required): string. Whether the payout fee is estimated or final.
     * not_applicable means no applicable fee status is known, including unmapped fee states. Value
     * enum: "estimated", "final", "not_applicable". object.fee_money (Required): {@link
     * MoneyValue} or null. Fee for this payout, never negative. Payouts carry no fee, so this is 0
     * once your processor records the payout. `null` when your processor hasn't recorded the
     * payout yet. object.fee_money.anyOf[1] (Value): {@link MoneyValue}. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code. object.fee_money.anyOf[2]
     * (Value): null. object.initiated_by (Required): string. What started the payout. A payout
     * imported from your processor follows the processor: scheduled when it sent the payout
     * automatically, otherwise manual. Only scheduled payouts list their balance transactions
     * through GET /v1/balance-transactions?payout_id=; other payouts return 409 with reason
     * not_itemized. Unmapped sources are returned as other. Value enum: "manual", "scheduled",
     * "platform", "other". object.merchant_id (Required): string. Merchant receiving the payout.
     * Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.metadata (Optional): {@link MetadataMap}.
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and
     * are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps
     * written before those limits may not satisfy them. object.method (Required): string. Payouts
     * Flint sends, by API, Dashboard or schedule, are always `standard`. `instant` appears only on
     * a payout Flint recorded from the processor that was sent outside Flint. `other` is a method
     * Flint doesn't map. Value enum: "standard", "instant", "other". object.net_money (Required):
     * {@link MoneyValue} or null. Signed effect of this payout on your Flint balance. It is
     * negative because the payout takes money out: a 25000 payout with no fee has net_money
     * -25000. `null` when your processor hasn't recorded the payout yet. object.net_money.anyOf[1]
     * (Value): {@link MoneyValue}. Signed monetary amount represented as integer minor units plus
     * an ISO 4217 currency code. object.net_money.anyOf[2] (Value): null. object.original_payout
     * (Optional): {@link ExpandedPayoutSummary} or null. The payout this one reverses, inlined
     * when you request expand=original_payout. null when expanded and original_payout_id is
     * absent. Present only when `expand` includes `original_payout`; `null` when expanded and
     * there is no related payout. object.original_payout.anyOf[1] (Value): {@link
     * ExpandedPayoutSummary}. A payout's summary fields, including amount, method, status, and
     * arrival date, returned when the payout is expanded. object.original_payout.anyOf[2] (Value):
     * null. object.original_payout_id (Optional): string. On a payout that reverses another
     * payout, the payout it reverses. Present only when Flint has the matching original payout. A
     * payout has at most one of original_payout_id and reversed_by_payout_id. Example:
     * "po_01KEZF7C00PXK8XREWJA6K4FGV". object.payout_destination (Optional): {@link
     * ExpandedPayoutDestinationSummary} or null. The payout destination, inlined when you request
     * expand=payout_destination. null when expanded and payout_destination_id is absent. Present
     * only when `expand` includes `payout_destination`; `null` when expanded and there is no
     * related payout destination. object.payout_destination.anyOf[1] (Value): {@link
     * ExpandedPayoutDestinationSummary}. A payout destination's summary fields, such as type, bank
     * name, last four digits, and status, returned when the destination is expanded.
     * object.payout_destination.anyOf[2] (Value): null. object.payout_destination_id (Optional):
     * string. Bank account or debit card receiving the payout. Absent when Flint can't match your
     * processor's destination to a payout destination. Example:
     * "pdest_01KEZF7C00M55HZDZXZP6YVE6B". object.payout_id (Required): string. Stable identifier
     * of the payout. Example: "po_01KEZF7C00PXK8XREWJA6K4FGV". object.reversal_status (Required):
     * string. Whether Flint has pulled a paid payout back from your bank: none until the reversal
     * completes, then reversed. A payout_reversal balance transaction returns the money, and
     * status stays succeeded. Value enum: "none", "reversed". object.reversed_by_payout
     * (Optional): {@link ExpandedPayoutSummary} or null. The payout reversing this one, inlined
     * when you request expand=reversed_by_payout. null when expanded and reversed_by_payout_id is
     * absent. Present only when `expand` includes `reversed_by_payout`; `null` when expanded and
     * there is no related payout. object.reversed_by_payout.anyOf[1] (Value): {@link
     * ExpandedPayoutSummary}. A payout's summary fields, including amount, method, status, and
     * arrival date, returned when the payout is expanded. object.reversed_by_payout.anyOf[2]
     * (Value): null. object.reversed_by_payout_id (Optional): string. The separate payout
     * reversing this one, when Flint has the matching payout. Its presence does not mean the
     * reversal has completed; read reversal_status. A payout has at most one of original_payout_id
     * and reversed_by_payout_id. Example: "po_01KEZF7C00PXK8XREWJA6K4FGV".
     * object.statement_descriptor (Optional): string. Text shown on your bank statement for the
     * deposit, when one was set. object.status (Required): string. Where the payout is: pending
     * until it is sent, in_transit on its way to your bank, then succeeded or failed. A succeeded
     * payout can still become failed if the bank returns the deposit, and canceled means a manual
     * payout was canceled while pending. Value enum: "pending", "in_transit", "succeeded",
     * "failed", "canceled". object.supported_actions (Required): Array of string. Lifecycle
     * actions Flint accepts now. cancel is offered while a payout is pending unless it was
     * scheduled automatically. [] enum: "cancel". object.supported_actions[] (Value): string.
     * Value enum: "cancel". object.trace_id (Optional): {@link PayoutTraceID}. The bank's trace
     * number for the deposit, which your bank can use to locate a late deposit. Its status says
     * whether the number is pending, available, or unsupported, and value holds the number when
     * Flint has it. Absent when Flint has no trace information. A payout's bank trace ID, with
     * whether it is pending, available, or unsupported. object.updated_at (Required): string. When
     * the payout last changed. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * amount_money (Required): {@link MoneyValue}. Amount sent to your bank. Always positive.
         * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
         * arrival_date (Optional): string. Calendar date the bank is expected to receive the
         * funds, in YYYY-MM-DD format using the UTC date of the expected arrival. Format: date.
         * Example: "2026-08-02". balance_source_type (Required): string. Balance source this
         * payout draws from. Flint chooses the source when balance_source_type is omitted at
         * create. Clients must accept source types added in future releases. Value enum: "card",
         * "bank_account". created_at (Required): string. When the payout was created. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". currency (Required): string. ISO 4217
         * currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
         * description (Optional): string. Description sent when the payout was created. Absent
         * when there is none. external_reference_id (Optional): string. Caller-owned identifier
         * for this resource in an external system. maxLength: 255. Example: "warehouse-1842".
         * failure_code (Optional): string. Flint-normalized payout failure code. Unknown provider
         * values are returned as payout_failed. Value enum: "account_closed", "account_frozen",
         * "bank_account_restricted", "bank_ownership_changed", "could_not_process",
         * "debit_not_authorized", "declined", "insufficient_funds", "invalid_account_number",
         * "incorrect_account_holder_name", "incorrect_account_holder_address",
         * "incorrect_account_holder_tax_id", "invalid_currency", "no_account", "unsupported_card",
         * "payout_failed". failure_message (Optional): string. Flint-authored payout failure
         * message. This is stable explanatory text, not a raw provider message. fee_amount_status
         * (Required): string. Whether the payout fee is estimated or final. not_applicable means
         * no applicable fee status is known, including unmapped fee states. Value enum:
         * "estimated", "final", "not_applicable". fee_money (Required): {@link MoneyValue} or
         * null. Fee for this payout, never negative. Payouts carry no fee, so this is 0 once your
         * processor records the payout. `null` when your processor hasn't recorded the payout yet.
         * fee_money.anyOf[1] (Value): {@link MoneyValue}. Monetary amount represented as integer
         * minor units plus an ISO 4217 currency code. fee_money.anyOf[2] (Value): null.
         * initiated_by (Required): string. What started the payout. A payout imported from your
         * processor follows the processor: scheduled when it sent the payout automatically,
         * otherwise manual. Only scheduled payouts list their balance transactions through GET
         * /v1/balance-transactions?payout_id=; other payouts return 409 with reason not_itemized.
         * Unmapped sources are returned as other. Value enum: "manual", "scheduled", "platform",
         * "other". merchant_id (Required): string. Merchant receiving the payout. Example:
         * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". metadata (Optional): {@link MetadataMap}. Caller-owned
         * metadata. Values can't be empty strings. Keys starting with flint_ are reserved for
         * Flint, are not returned, and cannot be written through the public API. Caller-owned
         * key-value data stored on a resource. Keys starting with flint_ are reserved for Flint
         * and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput;
         * maps written before those limits may not satisfy them. method (Required): string.
         * Payouts Flint sends, by API, Dashboard or schedule, are always `standard`. `instant`
         * appears only on a payout Flint recorded from the processor that was sent outside Flint.
         * `other` is a method Flint doesn't map. Value enum: "standard", "instant", "other".
         * net_money (Required): {@link MoneyValue} or null. Signed effect of this payout on your
         * Flint balance. It is negative because the payout takes money out: a 25000 payout with no
         * fee has net_money -25000. `null` when your processor hasn't recorded the payout yet.
         * net_money.anyOf[1] (Value): {@link MoneyValue}. Signed monetary amount represented as
         * integer minor units plus an ISO 4217 currency code. net_money.anyOf[2] (Value): null.
         * original_payout (Optional): {@link ExpandedPayoutSummary} or null. The payout this one
         * reverses, inlined when you request expand=original_payout. null when expanded and
         * original_payout_id is absent. Present only when `expand` includes `original_payout`;
         * `null` when expanded and there is no related payout. original_payout.anyOf[1] (Value):
         * {@link ExpandedPayoutSummary}. A payout's summary fields, including amount, method,
         * status, and arrival date, returned when the payout is expanded. original_payout.anyOf[2]
         * (Value): null. original_payout_id (Optional): string. On a payout that reverses another
         * payout, the payout it reverses. Present only when Flint has the matching original
         * payout. A payout has at most one of original_payout_id and reversed_by_payout_id.
         * Example: "po_01KEZF7C00PXK8XREWJA6K4FGV". payout_destination (Optional): {@link
         * ExpandedPayoutDestinationSummary} or null. The payout destination, inlined when you
         * request expand=payout_destination. null when expanded and payout_destination_id is
         * absent. Present only when `expand` includes `payout_destination`; `null` when expanded
         * and there is no related payout destination. payout_destination.anyOf[1] (Value): {@link
         * ExpandedPayoutDestinationSummary}. A payout destination's summary fields, such as type,
         * bank name, last four digits, and status, returned when the destination is expanded.
         * payout_destination.anyOf[2] (Value): null. payout_destination_id (Optional): string.
         * Bank account or debit card receiving the payout. Absent when Flint can't match your
         * processor's destination to a payout destination. Example:
         * "pdest_01KEZF7C00M55HZDZXZP6YVE6B". payout_id (Required): string. Stable identifier of
         * the payout. Example: "po_01KEZF7C00PXK8XREWJA6K4FGV". reversal_status (Required):
         * string. Whether Flint has pulled a paid payout back from your bank: none until the
         * reversal completes, then reversed. A payout_reversal balance transaction returns the
         * money, and status stays succeeded. Value enum: "none", "reversed". reversed_by_payout
         * (Optional): {@link ExpandedPayoutSummary} or null. The payout reversing this one,
         * inlined when you request expand=reversed_by_payout. null when expanded and
         * reversed_by_payout_id is absent. Present only when `expand` includes
         * `reversed_by_payout`; `null` when expanded and there is no related payout.
         * reversed_by_payout.anyOf[1] (Value): {@link ExpandedPayoutSummary}. A payout's summary
         * fields, including amount, method, status, and arrival date, returned when the payout is
         * expanded. reversed_by_payout.anyOf[2] (Value): null. reversed_by_payout_id (Optional):
         * string. The separate payout reversing this one, when Flint has the matching payout. Its
         * presence does not mean the reversal has completed; read reversal_status. A payout has at
         * most one of original_payout_id and reversed_by_payout_id. Example:
         * "po_01KEZF7C00PXK8XREWJA6K4FGV". statement_descriptor (Optional): string. Text shown on
         * your bank statement for the deposit, when one was set. status (Required): string. Where
         * the payout is: pending until it is sent, in_transit on its way to your bank, then
         * succeeded or failed. A succeeded payout can still become failed if the bank returns the
         * deposit, and canceled means a manual payout was canceled while pending. Value enum:
         * "pending", "in_transit", "succeeded", "failed", "canceled". supported_actions
         * (Required): Array of string. Lifecycle actions Flint accepts now. cancel is offered
         * while a payout is pending unless it was scheduled automatically. [] enum: "cancel".
         * supported_actions[] (Value): string. Value enum: "cancel". trace_id (Optional): {@link
         * PayoutTraceID}. The bank's trace number for the deposit, which your bank can use to
         * locate a late deposit. Its status says whether the number is pending, available, or
         * unsupported, and value holds the number when Flint has it. Absent when Flint has no
         * trace information. A payout's bank trace ID, with whether it is pending, available, or
         * unsupported. updated_at (Required): string. When the payout last changed. Format:
         * date-time. Example: "2026-08-02T16:00:00Z".
         */
        "object": {
            /**
             * Amount sent to your bank. Always positive. Monetary amount represented as integer
             * minor units plus an ISO 4217 currency code.
             */
            "amount_money": MoneyValue;
            /**
             * Calendar date the bank is expected to receive the funds, in YYYY-MM-DD format using
             * the UTC date of the expected arrival. Format: date. Example: "2026-08-02".
             */
            "arrival_date"?: string;
            /**
             * Balance source this payout draws from. Flint chooses the source when
             * balance_source_type is omitted at create. Clients must accept source types added in
             * future releases. Value enum: "card", "bank_account".
             */
            "balance_source_type": "card" | "bank_account" | (string & {});
            /** When the payout was created. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example:
             * "USD".
             */
            "currency": string;
            /** Description sent when the payout was created. Absent when there is none. */
            "description"?: string;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Flint-normalized payout failure code. Unknown provider values are returned as
             * payout_failed. Value enum: "account_closed", "account_frozen",
             * "bank_account_restricted", "bank_ownership_changed", "could_not_process",
             * "debit_not_authorized", "declined", "insufficient_funds", "invalid_account_number",
             * "incorrect_account_holder_name", "incorrect_account_holder_address",
             * "incorrect_account_holder_tax_id", "invalid_currency", "no_account",
             * "unsupported_card", "payout_failed".
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
             * Flint-authored payout failure message. This is stable explanatory text, not a raw
             * provider message.
             */
            "failure_message"?: string;
            /**
             * Whether the payout fee is estimated or final. not_applicable means no applicable fee
             * status is known, including unmapped fee states. Value enum: "estimated", "final",
             * "not_applicable".
             */
            "fee_amount_status": "estimated" | "final" | "not_applicable" | (string & {});
            /**
             * Fee for this payout, never negative. Payouts carry no fee, so this is 0 once your
             * processor records the payout. `null` when your processor hasn't recorded the payout
             * yet. anyOf[1] (Value): {@link MoneyValue}. Monetary amount represented as integer
             * minor units plus an ISO 4217 currency code. anyOf[2] (Value): null.
             */
            "fee_money": ((MoneyValue) | (null));
            /**
             * What started the payout. A payout imported from your processor follows the
             * processor: scheduled when it sent the payout automatically, otherwise manual. Only
             * scheduled payouts list their balance transactions through GET
             * /v1/balance-transactions?payout_id=; other payouts return 409 with reason
             * not_itemized. Unmapped sources are returned as other. Value enum: "manual",
             * "scheduled", "platform", "other".
             */
            "initiated_by": "manual" | "scheduled" | "platform" | "other" | (string & {});
            /** Merchant receiving the payout. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
            "merchant_id": string;
            /**
             * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are
             * reserved for Flint, are not returned, and cannot be written through the public API.
             * Caller-owned key-value data stored on a resource. Keys starting with flint_ are
             * reserved for Flint and are not returned. Writes follow the limits on MetadataInput
             * and MetadataPatchInput; maps written before those limits may not satisfy them.
             */
            "metadata"?: MetadataMap;
            /**
             * Payouts Flint sends, by API, Dashboard or schedule, are always `standard`. `instant`
             * appears only on a payout Flint recorded from the processor that was sent outside
             * Flint. `other` is a method Flint doesn't map. Value enum: "standard", "instant",
             * "other".
             */
            "method": "standard" | "instant" | "other" | (string & {});
            /**
             * Signed effect of this payout on your Flint balance. It is negative because the
             * payout takes money out: a 25000 payout with no fee has net_money -25000. `null` when
             * your processor hasn't recorded the payout yet. anyOf[1] (Value): {@link MoneyValue}.
             * Signed monetary amount represented as integer minor units plus an ISO 4217 currency
             * code. anyOf[2] (Value): null.
             */
            "net_money": ((MoneyValue) | (null));
            /**
             * The payout this one reverses, inlined when you request expand=original_payout. null
             * when expanded and original_payout_id is absent. Present only when `expand` includes
             * `original_payout`; `null` when expanded and there is no related payout. anyOf[1]
             * (Value): {@link ExpandedPayoutSummary}. A payout's summary fields, including amount,
             * method, status, and arrival date, returned when the payout is expanded. anyOf[2]
             * (Value): null.
             */
            "original_payout"?: ((ExpandedPayoutSummary) | (null));
            /**
             * On a payout that reverses another payout, the payout it reverses. Present only when
             * Flint has the matching original payout. A payout has at most one of
             * original_payout_id and reversed_by_payout_id. Example:
             * "po_01KEZF7C00PXK8XREWJA6K4FGV".
             */
            "original_payout_id"?: string;
            /**
             * The payout destination, inlined when you request expand=payout_destination. null
             * when expanded and payout_destination_id is absent. Present only when `expand`
             * includes `payout_destination`; `null` when expanded and there is no related payout
             * destination. anyOf[1] (Value): {@link ExpandedPayoutDestinationSummary}. A payout
             * destination's summary fields, such as type, bank name, last four digits, and status,
             * returned when the destination is expanded. anyOf[2] (Value): null.
             */
            "payout_destination"?: ((ExpandedPayoutDestinationSummary) | (null));
            /**
             * Bank account or debit card receiving the payout. Absent when Flint can't match your
             * processor's destination to a payout destination. Example:
             * "pdest_01KEZF7C00M55HZDZXZP6YVE6B".
             */
            "payout_destination_id"?: string;
            /** Stable identifier of the payout. Example: "po_01KEZF7C00PXK8XREWJA6K4FGV". */
            "payout_id": string;
            /**
             * Whether Flint has pulled a paid payout back from your bank: none until the reversal
             * completes, then reversed. A payout_reversal balance transaction returns the money,
             * and status stays succeeded. Value enum: "none", "reversed".
             */
            "reversal_status": "none" | "reversed" | (string & {});
            /**
             * The payout reversing this one, inlined when you request expand=reversed_by_payout.
             * null when expanded and reversed_by_payout_id is absent. Present only when `expand`
             * includes `reversed_by_payout`; `null` when expanded and there is no related payout.
             * anyOf[1] (Value): {@link ExpandedPayoutSummary}. A payout's summary fields,
             * including amount, method, status, and arrival date, returned when the payout is
             * expanded. anyOf[2] (Value): null.
             */
            "reversed_by_payout"?: ((ExpandedPayoutSummary) | (null));
            /**
             * The separate payout reversing this one, when Flint has the matching payout. Its
             * presence does not mean the reversal has completed; read reversal_status. A payout
             * has at most one of original_payout_id and reversed_by_payout_id. Example:
             * "po_01KEZF7C00PXK8XREWJA6K4FGV".
             */
            "reversed_by_payout_id"?: string;
            /** Text shown on your bank statement for the deposit, when one was set. */
            "statement_descriptor"?: string;
            /**
             * Where the payout is: pending until it is sent, in_transit on its way to your bank,
             * then succeeded or failed. A succeeded payout can still become failed if the bank
             * returns the deposit, and canceled means a manual payout was canceled while pending.
             * Value enum: "pending", "in_transit", "succeeded", "failed", "canceled".
             */
            "status": "pending" | "in_transit" | "succeeded" | "failed" | "canceled" | (string & {});
            /**
             * Lifecycle actions Flint accepts now. cancel is offered while a payout is pending
             * unless it was scheduled automatically. [] enum: "cancel". [] (Value): string. Value
             * enum: "cancel".
             */
            "supported_actions": Array<"cancel" | (string & {})>;
            /**
             * The bank's trace number for the deposit, which your bank can use to locate a late
             * deposit. Its status says whether the number is pending, available, or unsupported,
             * and value holds the number when Flint has it. Absent when Flint has no trace
             * information. A payout's bank trace ID, with whether it is pending, available, or
             * unsupported.
             */
            "trace_id"?: PayoutTraceID;
            /** When the payout last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
        };
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "payout.created". */
    "event_type"?: "payout.created";
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
 * The `payout.created` webhook payload for the `merchant` event source. Fields shared by merchant
 * webhook payloads.
 */
export type PayoutCreatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.amount_money (Required): {@link MoneyValue}. Amount sent to your
     * bank. Always positive. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code. object.arrival_date (Optional): string. Calendar date the bank is expected to
     * receive the funds, in YYYY-MM-DD format using the UTC date of the expected arrival. Format:
     * date. Example: "2026-08-02". object.balance_source_type (Required): string. Balance source
     * this payout draws from. Flint chooses the source when balance_source_type is omitted at
     * create. Clients must accept source types added in future releases. Value enum: "card",
     * "bank_account". object.created_at (Required): string. When the payout was created. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.currency (Required): string. ISO 4217
     * currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
     * object.description (Optional): string. Description sent when the payout was created. Absent
     * when there is none. object.external_reference_id (Optional): string. Caller-owned identifier
     * for this resource in an external system. maxLength: 255. Example: "warehouse-1842".
     * object.failure_code (Optional): string. Flint-normalized payout failure code. Unknown
     * provider values are returned as payout_failed. Value enum: "account_closed",
     * "account_frozen", "bank_account_restricted", "bank_ownership_changed", "could_not_process",
     * "debit_not_authorized", "declined", "insufficient_funds", "invalid_account_number",
     * "incorrect_account_holder_name", "incorrect_account_holder_address",
     * "incorrect_account_holder_tax_id", "invalid_currency", "no_account", "unsupported_card",
     * "payout_failed". object.failure_message (Optional): string. Flint-authored payout failure
     * message. This is stable explanatory text, not a raw provider message.
     * object.fee_amount_status (Required): string. Whether the payout fee is estimated or final.
     * not_applicable means no applicable fee status is known, including unmapped fee states. Value
     * enum: "estimated", "final", "not_applicable". object.fee_money (Required): {@link
     * MoneyValue} or null. Fee for this payout, never negative. Payouts carry no fee, so this is 0
     * once your processor records the payout. `null` when your processor hasn't recorded the
     * payout yet. object.fee_money.anyOf[1] (Value): {@link MoneyValue}. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code. object.fee_money.anyOf[2]
     * (Value): null. object.initiated_by (Required): string. What started the payout. A payout
     * imported from your processor follows the processor: scheduled when it sent the payout
     * automatically, otherwise manual. Only scheduled payouts list their balance transactions
     * through GET /v1/balance-transactions?payout_id=; other payouts return 409 with reason
     * not_itemized. Unmapped sources are returned as other. Value enum: "manual", "scheduled",
     * "platform", "other". object.merchant_id (Required): string. Merchant receiving the payout.
     * Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.metadata (Optional): {@link MetadataMap}.
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and
     * are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps
     * written before those limits may not satisfy them. object.method (Required): string. Payouts
     * Flint sends, by API, Dashboard or schedule, are always `standard`. `instant` appears only on
     * a payout Flint recorded from the processor that was sent outside Flint. `other` is a method
     * Flint doesn't map. Value enum: "standard", "instant", "other". object.net_money (Required):
     * {@link MoneyValue} or null. Signed effect of this payout on your Flint balance. It is
     * negative because the payout takes money out: a 25000 payout with no fee has net_money
     * -25000. `null` when your processor hasn't recorded the payout yet. object.net_money.anyOf[1]
     * (Value): {@link MoneyValue}. Signed monetary amount represented as integer minor units plus
     * an ISO 4217 currency code. object.net_money.anyOf[2] (Value): null. object.original_payout
     * (Optional): {@link ExpandedPayoutSummary} or null. The payout this one reverses, inlined
     * when you request expand=original_payout. null when expanded and original_payout_id is
     * absent. Present only when `expand` includes `original_payout`; `null` when expanded and
     * there is no related payout. object.original_payout.anyOf[1] (Value): {@link
     * ExpandedPayoutSummary}. A payout's summary fields, including amount, method, status, and
     * arrival date, returned when the payout is expanded. object.original_payout.anyOf[2] (Value):
     * null. object.original_payout_id (Optional): string. On a payout that reverses another
     * payout, the payout it reverses. Present only when Flint has the matching original payout. A
     * payout has at most one of original_payout_id and reversed_by_payout_id. Example:
     * "po_01KEZF7C00PXK8XREWJA6K4FGV". object.payout_destination (Optional): {@link
     * ExpandedPayoutDestinationSummary} or null. The payout destination, inlined when you request
     * expand=payout_destination. null when expanded and payout_destination_id is absent. Present
     * only when `expand` includes `payout_destination`; `null` when expanded and there is no
     * related payout destination. object.payout_destination.anyOf[1] (Value): {@link
     * ExpandedPayoutDestinationSummary}. A payout destination's summary fields, such as type, bank
     * name, last four digits, and status, returned when the destination is expanded.
     * object.payout_destination.anyOf[2] (Value): null. object.payout_destination_id (Optional):
     * string. Bank account or debit card receiving the payout. Absent when Flint can't match your
     * processor's destination to a payout destination. Example:
     * "pdest_01KEZF7C00M55HZDZXZP6YVE6B". object.payout_id (Required): string. Stable identifier
     * of the payout. Example: "po_01KEZF7C00PXK8XREWJA6K4FGV". object.reversal_status (Required):
     * string. Whether Flint has pulled a paid payout back from your bank: none until the reversal
     * completes, then reversed. A payout_reversal balance transaction returns the money, and
     * status stays succeeded. Value enum: "none", "reversed". object.reversed_by_payout
     * (Optional): {@link ExpandedPayoutSummary} or null. The payout reversing this one, inlined
     * when you request expand=reversed_by_payout. null when expanded and reversed_by_payout_id is
     * absent. Present only when `expand` includes `reversed_by_payout`; `null` when expanded and
     * there is no related payout. object.reversed_by_payout.anyOf[1] (Value): {@link
     * ExpandedPayoutSummary}. A payout's summary fields, including amount, method, status, and
     * arrival date, returned when the payout is expanded. object.reversed_by_payout.anyOf[2]
     * (Value): null. object.reversed_by_payout_id (Optional): string. The separate payout
     * reversing this one, when Flint has the matching payout. Its presence does not mean the
     * reversal has completed; read reversal_status. A payout has at most one of original_payout_id
     * and reversed_by_payout_id. Example: "po_01KEZF7C00PXK8XREWJA6K4FGV".
     * object.statement_descriptor (Optional): string. Text shown on your bank statement for the
     * deposit, when one was set. object.status (Required): string. Where the payout is: pending
     * until it is sent, in_transit on its way to your bank, then succeeded or failed. A succeeded
     * payout can still become failed if the bank returns the deposit, and canceled means a manual
     * payout was canceled while pending. Value enum: "pending", "in_transit", "succeeded",
     * "failed", "canceled". object.supported_actions (Required): Array of string. Lifecycle
     * actions Flint accepts now. cancel is offered while a payout is pending unless it was
     * scheduled automatically. [] enum: "cancel". object.supported_actions[] (Value): string.
     * Value enum: "cancel". object.trace_id (Optional): {@link PayoutTraceID}. The bank's trace
     * number for the deposit, which your bank can use to locate a late deposit. Its status says
     * whether the number is pending, available, or unsupported, and value holds the number when
     * Flint has it. Absent when Flint has no trace information. A payout's bank trace ID, with
     * whether it is pending, available, or unsupported. object.updated_at (Required): string. When
     * the payout last changed. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * amount_money (Required): {@link MoneyValue}. Amount sent to your bank. Always positive.
         * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
         * arrival_date (Optional): string. Calendar date the bank is expected to receive the
         * funds, in YYYY-MM-DD format using the UTC date of the expected arrival. Format: date.
         * Example: "2026-08-02". balance_source_type (Required): string. Balance source this
         * payout draws from. Flint chooses the source when balance_source_type is omitted at
         * create. Clients must accept source types added in future releases. Value enum: "card",
         * "bank_account". created_at (Required): string. When the payout was created. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". currency (Required): string. ISO 4217
         * currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
         * description (Optional): string. Description sent when the payout was created. Absent
         * when there is none. external_reference_id (Optional): string. Caller-owned identifier
         * for this resource in an external system. maxLength: 255. Example: "warehouse-1842".
         * failure_code (Optional): string. Flint-normalized payout failure code. Unknown provider
         * values are returned as payout_failed. Value enum: "account_closed", "account_frozen",
         * "bank_account_restricted", "bank_ownership_changed", "could_not_process",
         * "debit_not_authorized", "declined", "insufficient_funds", "invalid_account_number",
         * "incorrect_account_holder_name", "incorrect_account_holder_address",
         * "incorrect_account_holder_tax_id", "invalid_currency", "no_account", "unsupported_card",
         * "payout_failed". failure_message (Optional): string. Flint-authored payout failure
         * message. This is stable explanatory text, not a raw provider message. fee_amount_status
         * (Required): string. Whether the payout fee is estimated or final. not_applicable means
         * no applicable fee status is known, including unmapped fee states. Value enum:
         * "estimated", "final", "not_applicable". fee_money (Required): {@link MoneyValue} or
         * null. Fee for this payout, never negative. Payouts carry no fee, so this is 0 once your
         * processor records the payout. `null` when your processor hasn't recorded the payout yet.
         * fee_money.anyOf[1] (Value): {@link MoneyValue}. Monetary amount represented as integer
         * minor units plus an ISO 4217 currency code. fee_money.anyOf[2] (Value): null.
         * initiated_by (Required): string. What started the payout. A payout imported from your
         * processor follows the processor: scheduled when it sent the payout automatically,
         * otherwise manual. Only scheduled payouts list their balance transactions through GET
         * /v1/balance-transactions?payout_id=; other payouts return 409 with reason not_itemized.
         * Unmapped sources are returned as other. Value enum: "manual", "scheduled", "platform",
         * "other". merchant_id (Required): string. Merchant receiving the payout. Example:
         * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". metadata (Optional): {@link MetadataMap}. Caller-owned
         * metadata. Values can't be empty strings. Keys starting with flint_ are reserved for
         * Flint, are not returned, and cannot be written through the public API. Caller-owned
         * key-value data stored on a resource. Keys starting with flint_ are reserved for Flint
         * and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput;
         * maps written before those limits may not satisfy them. method (Required): string.
         * Payouts Flint sends, by API, Dashboard or schedule, are always `standard`. `instant`
         * appears only on a payout Flint recorded from the processor that was sent outside Flint.
         * `other` is a method Flint doesn't map. Value enum: "standard", "instant", "other".
         * net_money (Required): {@link MoneyValue} or null. Signed effect of this payout on your
         * Flint balance. It is negative because the payout takes money out: a 25000 payout with no
         * fee has net_money -25000. `null` when your processor hasn't recorded the payout yet.
         * net_money.anyOf[1] (Value): {@link MoneyValue}. Signed monetary amount represented as
         * integer minor units plus an ISO 4217 currency code. net_money.anyOf[2] (Value): null.
         * original_payout (Optional): {@link ExpandedPayoutSummary} or null. The payout this one
         * reverses, inlined when you request expand=original_payout. null when expanded and
         * original_payout_id is absent. Present only when `expand` includes `original_payout`;
         * `null` when expanded and there is no related payout. original_payout.anyOf[1] (Value):
         * {@link ExpandedPayoutSummary}. A payout's summary fields, including amount, method,
         * status, and arrival date, returned when the payout is expanded. original_payout.anyOf[2]
         * (Value): null. original_payout_id (Optional): string. On a payout that reverses another
         * payout, the payout it reverses. Present only when Flint has the matching original
         * payout. A payout has at most one of original_payout_id and reversed_by_payout_id.
         * Example: "po_01KEZF7C00PXK8XREWJA6K4FGV". payout_destination (Optional): {@link
         * ExpandedPayoutDestinationSummary} or null. The payout destination, inlined when you
         * request expand=payout_destination. null when expanded and payout_destination_id is
         * absent. Present only when `expand` includes `payout_destination`; `null` when expanded
         * and there is no related payout destination. payout_destination.anyOf[1] (Value): {@link
         * ExpandedPayoutDestinationSummary}. A payout destination's summary fields, such as type,
         * bank name, last four digits, and status, returned when the destination is expanded.
         * payout_destination.anyOf[2] (Value): null. payout_destination_id (Optional): string.
         * Bank account or debit card receiving the payout. Absent when Flint can't match your
         * processor's destination to a payout destination. Example:
         * "pdest_01KEZF7C00M55HZDZXZP6YVE6B". payout_id (Required): string. Stable identifier of
         * the payout. Example: "po_01KEZF7C00PXK8XREWJA6K4FGV". reversal_status (Required):
         * string. Whether Flint has pulled a paid payout back from your bank: none until the
         * reversal completes, then reversed. A payout_reversal balance transaction returns the
         * money, and status stays succeeded. Value enum: "none", "reversed". reversed_by_payout
         * (Optional): {@link ExpandedPayoutSummary} or null. The payout reversing this one,
         * inlined when you request expand=reversed_by_payout. null when expanded and
         * reversed_by_payout_id is absent. Present only when `expand` includes
         * `reversed_by_payout`; `null` when expanded and there is no related payout.
         * reversed_by_payout.anyOf[1] (Value): {@link ExpandedPayoutSummary}. A payout's summary
         * fields, including amount, method, status, and arrival date, returned when the payout is
         * expanded. reversed_by_payout.anyOf[2] (Value): null. reversed_by_payout_id (Optional):
         * string. The separate payout reversing this one, when Flint has the matching payout. Its
         * presence does not mean the reversal has completed; read reversal_status. A payout has at
         * most one of original_payout_id and reversed_by_payout_id. Example:
         * "po_01KEZF7C00PXK8XREWJA6K4FGV". statement_descriptor (Optional): string. Text shown on
         * your bank statement for the deposit, when one was set. status (Required): string. Where
         * the payout is: pending until it is sent, in_transit on its way to your bank, then
         * succeeded or failed. A succeeded payout can still become failed if the bank returns the
         * deposit, and canceled means a manual payout was canceled while pending. Value enum:
         * "pending", "in_transit", "succeeded", "failed", "canceled". supported_actions
         * (Required): Array of string. Lifecycle actions Flint accepts now. cancel is offered
         * while a payout is pending unless it was scheduled automatically. [] enum: "cancel".
         * supported_actions[] (Value): string. Value enum: "cancel". trace_id (Optional): {@link
         * PayoutTraceID}. The bank's trace number for the deposit, which your bank can use to
         * locate a late deposit. Its status says whether the number is pending, available, or
         * unsupported, and value holds the number when Flint has it. Absent when Flint has no
         * trace information. A payout's bank trace ID, with whether it is pending, available, or
         * unsupported. updated_at (Required): string. When the payout last changed. Format:
         * date-time. Example: "2026-08-02T16:00:00Z".
         */
        "object": {
            /**
             * Amount sent to your bank. Always positive. Monetary amount represented as integer
             * minor units plus an ISO 4217 currency code.
             */
            "amount_money": MoneyValue;
            /**
             * Calendar date the bank is expected to receive the funds, in YYYY-MM-DD format using
             * the UTC date of the expected arrival. Format: date. Example: "2026-08-02".
             */
            "arrival_date"?: string;
            /**
             * Balance source this payout draws from. Flint chooses the source when
             * balance_source_type is omitted at create. Clients must accept source types added in
             * future releases. Value enum: "card", "bank_account".
             */
            "balance_source_type": "card" | "bank_account" | (string & {});
            /** When the payout was created. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example:
             * "USD".
             */
            "currency": string;
            /** Description sent when the payout was created. Absent when there is none. */
            "description"?: string;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Flint-normalized payout failure code. Unknown provider values are returned as
             * payout_failed. Value enum: "account_closed", "account_frozen",
             * "bank_account_restricted", "bank_ownership_changed", "could_not_process",
             * "debit_not_authorized", "declined", "insufficient_funds", "invalid_account_number",
             * "incorrect_account_holder_name", "incorrect_account_holder_address",
             * "incorrect_account_holder_tax_id", "invalid_currency", "no_account",
             * "unsupported_card", "payout_failed".
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
             * Flint-authored payout failure message. This is stable explanatory text, not a raw
             * provider message.
             */
            "failure_message"?: string;
            /**
             * Whether the payout fee is estimated or final. not_applicable means no applicable fee
             * status is known, including unmapped fee states. Value enum: "estimated", "final",
             * "not_applicable".
             */
            "fee_amount_status": "estimated" | "final" | "not_applicable" | (string & {});
            /**
             * Fee for this payout, never negative. Payouts carry no fee, so this is 0 once your
             * processor records the payout. `null` when your processor hasn't recorded the payout
             * yet. anyOf[1] (Value): {@link MoneyValue}. Monetary amount represented as integer
             * minor units plus an ISO 4217 currency code. anyOf[2] (Value): null.
             */
            "fee_money": ((MoneyValue) | (null));
            /**
             * What started the payout. A payout imported from your processor follows the
             * processor: scheduled when it sent the payout automatically, otherwise manual. Only
             * scheduled payouts list their balance transactions through GET
             * /v1/balance-transactions?payout_id=; other payouts return 409 with reason
             * not_itemized. Unmapped sources are returned as other. Value enum: "manual",
             * "scheduled", "platform", "other".
             */
            "initiated_by": "manual" | "scheduled" | "platform" | "other" | (string & {});
            /** Merchant receiving the payout. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
            "merchant_id": string;
            /**
             * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are
             * reserved for Flint, are not returned, and cannot be written through the public API.
             * Caller-owned key-value data stored on a resource. Keys starting with flint_ are
             * reserved for Flint and are not returned. Writes follow the limits on MetadataInput
             * and MetadataPatchInput; maps written before those limits may not satisfy them.
             */
            "metadata"?: MetadataMap;
            /**
             * Payouts Flint sends, by API, Dashboard or schedule, are always `standard`. `instant`
             * appears only on a payout Flint recorded from the processor that was sent outside
             * Flint. `other` is a method Flint doesn't map. Value enum: "standard", "instant",
             * "other".
             */
            "method": "standard" | "instant" | "other" | (string & {});
            /**
             * Signed effect of this payout on your Flint balance. It is negative because the
             * payout takes money out: a 25000 payout with no fee has net_money -25000. `null` when
             * your processor hasn't recorded the payout yet. anyOf[1] (Value): {@link MoneyValue}.
             * Signed monetary amount represented as integer minor units plus an ISO 4217 currency
             * code. anyOf[2] (Value): null.
             */
            "net_money": ((MoneyValue) | (null));
            /**
             * The payout this one reverses, inlined when you request expand=original_payout. null
             * when expanded and original_payout_id is absent. Present only when `expand` includes
             * `original_payout`; `null` when expanded and there is no related payout. anyOf[1]
             * (Value): {@link ExpandedPayoutSummary}. A payout's summary fields, including amount,
             * method, status, and arrival date, returned when the payout is expanded. anyOf[2]
             * (Value): null.
             */
            "original_payout"?: ((ExpandedPayoutSummary) | (null));
            /**
             * On a payout that reverses another payout, the payout it reverses. Present only when
             * Flint has the matching original payout. A payout has at most one of
             * original_payout_id and reversed_by_payout_id. Example:
             * "po_01KEZF7C00PXK8XREWJA6K4FGV".
             */
            "original_payout_id"?: string;
            /**
             * The payout destination, inlined when you request expand=payout_destination. null
             * when expanded and payout_destination_id is absent. Present only when `expand`
             * includes `payout_destination`; `null` when expanded and there is no related payout
             * destination. anyOf[1] (Value): {@link ExpandedPayoutDestinationSummary}. A payout
             * destination's summary fields, such as type, bank name, last four digits, and status,
             * returned when the destination is expanded. anyOf[2] (Value): null.
             */
            "payout_destination"?: ((ExpandedPayoutDestinationSummary) | (null));
            /**
             * Bank account or debit card receiving the payout. Absent when Flint can't match your
             * processor's destination to a payout destination. Example:
             * "pdest_01KEZF7C00M55HZDZXZP6YVE6B".
             */
            "payout_destination_id"?: string;
            /** Stable identifier of the payout. Example: "po_01KEZF7C00PXK8XREWJA6K4FGV". */
            "payout_id": string;
            /**
             * Whether Flint has pulled a paid payout back from your bank: none until the reversal
             * completes, then reversed. A payout_reversal balance transaction returns the money,
             * and status stays succeeded. Value enum: "none", "reversed".
             */
            "reversal_status": "none" | "reversed" | (string & {});
            /**
             * The payout reversing this one, inlined when you request expand=reversed_by_payout.
             * null when expanded and reversed_by_payout_id is absent. Present only when `expand`
             * includes `reversed_by_payout`; `null` when expanded and there is no related payout.
             * anyOf[1] (Value): {@link ExpandedPayoutSummary}. A payout's summary fields,
             * including amount, method, status, and arrival date, returned when the payout is
             * expanded. anyOf[2] (Value): null.
             */
            "reversed_by_payout"?: ((ExpandedPayoutSummary) | (null));
            /**
             * The separate payout reversing this one, when Flint has the matching payout. Its
             * presence does not mean the reversal has completed; read reversal_status. A payout
             * has at most one of original_payout_id and reversed_by_payout_id. Example:
             * "po_01KEZF7C00PXK8XREWJA6K4FGV".
             */
            "reversed_by_payout_id"?: string;
            /** Text shown on your bank statement for the deposit, when one was set. */
            "statement_descriptor"?: string;
            /**
             * Where the payout is: pending until it is sent, in_transit on its way to your bank,
             * then succeeded or failed. A succeeded payout can still become failed if the bank
             * returns the deposit, and canceled means a manual payout was canceled while pending.
             * Value enum: "pending", "in_transit", "succeeded", "failed", "canceled".
             */
            "status": "pending" | "in_transit" | "succeeded" | "failed" | "canceled" | (string & {});
            /**
             * Lifecycle actions Flint accepts now. cancel is offered while a payout is pending
             * unless it was scheduled automatically. [] enum: "cancel". [] (Value): string. Value
             * enum: "cancel".
             */
            "supported_actions": Array<"cancel" | (string & {})>;
            /**
             * The bank's trace number for the deposit, which your bank can use to locate a late
             * deposit. Its status says whether the number is pending, available, or unsupported,
             * and value holds the number when Flint has it. Absent when Flint has no trace
             * information. A payout's bank trace ID, with whether it is pending, available, or
             * unsupported.
             */
            "trace_id"?: PayoutTraceID;
            /** When the payout last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
        };
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "payout.created". */
    "event_type"?: "payout.created";
});
