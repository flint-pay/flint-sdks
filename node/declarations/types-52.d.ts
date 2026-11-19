import type { PaymentIntentWithCollectionResponse } from './types-51.js';
import type { InputValue } from '../runtime.js';
import type { SendPaymentIntentReceiptRequestInput, SelectedProductOption } from './types-67.js';
import type { UpdatePaymentIntentRequestInput } from './types-76.js';
import type { MoneyValue, MoneyValuePreviousAttributes, MoneyValueInput } from './types-44.js';
import type {
    CheckoutBuyerFields,
    CheckoutCustomTextConfig,
    CheckoutPaymentConfig,
    CheckoutPromotionConfig,
    CheckoutRedirects
} from './types-6.js';
import type { CheckoutTaxConfig, CheckoutTipConfig } from './types-7.js';
import type { ExpandedSubscriptionPlanSummary } from './types-26.js';
import type { ImageAttachment, Image } from './types-31.js';
import type { InventoryRoutingSource } from './types-33.js';
import type { LegalSettings } from './types-38.js';
import type { MetadataMap, MerchantWebhookEnvelope } from './types-43.js';
import type { PaymentLinkSalesSummary } from './types-53.js';
import type { ThemeConfig } from './types-74.js';
import type { PublicResolvedModifierGroup, QuantityPriceBreak } from './types-59.js';
import type { PartnerWebhookEnvelope } from './types-50.js';
import type { OrderLineItemTax } from './types-46.js';
import type { ProductPriceRange, ProductPriceRangePreviousAttributes } from './types-57.js';
import type { OrderLineItemTaxPreviousAttributes, OrderLineItemTaxRequestInput } from './types-47.js';
import type { ResponseMeta } from './types-62.js';
export type PaymentIntentsCreateResponse = ({
    "data"?: {
        [key: string]: unknown;
    };
})
    & (Exclude<PaymentIntentWithCollectionResponse & object, readonly unknown[]>);
export type PaymentIntentsGetParams = {
    /**
     * Include related objects in the response. Supported expansions: customer, invoice, order.
     * Expansion requires payments.payment_intents.read plus the read scope for each expanded
     * resource. Limits: at most 10 unique expand paths per request. Checkout session credentials
     * cannot use expand on this route. [] enum: "customer", "invoice", "order". Value enum:
     * "customer", "invoice", "order". anyOf[1] (Value): Array of string. [] enum: "customer",
     * "invoice", "order". anyOf[1][] (Value): string. Value enum: "customer", "invoice", "order".
     * anyOf[2] (Value): string. Value enum: "customer", "invoice", "order".
     */
    "expand"?: InputValue<("customer" | "invoice" | "order") | readonly ("customer" | "invoice" | "order")[]>;
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
export type PaymentIntentsListActivitiesParams = {
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
    /** Sort direction. Defaults to desc. Default: "desc". Value enum: "asc", "desc". */
    "sort_direction"?: InputValue<"asc" | "desc">;
    /**
     * Filter by activity type. Values are trimmed and deduplicated in first-seen order; empty or
     * unknown entries are rejected. Values within this filter are ORed; separate filters are
     * ANDed. [] enum: "created", "updated", "status_changed", "failed", "canceled", "expired",
     * "refund_created", "refund_status_changed", "dispute_status_changed", "receipt_sent",
     * "receipt_queued", "receipt_delivery_failed". Value enum: "created", "updated",
     * "status_changed", "failed", "canceled", "expired", "refund_created",
     * "refund_status_changed", "dispute_status_changed", "receipt_sent", "receipt_queued",
     * "receipt_delivery_failed". anyOf[1] (Value): Array of string. minItems: 1. [] enum:
     * "created", "updated", "status_changed", "failed", "canceled", "expired", "refund_created",
     * "refund_status_changed", "dispute_status_changed", "receipt_sent", "receipt_queued",
     * "receipt_delivery_failed". anyOf[1][] (Value): string. Value enum: "created", "updated",
     * "status_changed", "failed", "canceled", "expired", "refund_created",
     * "refund_status_changed", "dispute_status_changed", "receipt_sent", "receipt_queued",
     * "receipt_delivery_failed". anyOf[2] (Value): string. Value enum: "created", "updated",
     * "status_changed", "failed", "canceled", "expired", "refund_created",
     * "refund_status_changed", "dispute_status_changed", "receipt_sent", "receipt_queued",
     * "receipt_delivery_failed".
     */
    "activity_type"?: InputValue<("created"
        | "updated"
        | "status_changed"
        | "failed"
        | "canceled"
        | "expired"
        | "refund_created"
        | "refund_status_changed"
        | "dispute_status_changed"
        | "receipt_sent"
        | "receipt_queued"
        | "receipt_delivery_failed")
        | readonly ("created"
        | "updated"
        | "status_changed"
        | "failed"
        | "canceled"
        | "expired"
        | "refund_created"
        | "refund_status_changed"
        | "dispute_status_changed"
        | "receipt_sent"
        | "receipt_queued"
        | "receipt_delivery_failed")[]>;
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
export type PaymentIntentsListParams = {
    /**
     * Filter by the original Idempotency-Key, after trimming surrounding whitespace. Matching is
     * exact and case-sensitive. Returns only resources created in your caller namespace, plus
     * resources created before caller scoping under the original key. Returns current authorized
     * resources, not the recorded response. A pending resource does not prove that the operation
     * succeeded, and an empty list does not prove that it had no effect. A match can show
     * `idempotency_key: null` when that request sent no key, Flint created the resource, the
     * reader isn't the caller that created it (another app install, a buyer, or the merchant
     * reading an app's or buyer's record), or the caller that created an older record is unknown.
     * minLength: 1. maxLength: 255. pattern: ^[^\x00\r\n]*[^\x00\t\n\v\f\r ][^\x00\r\n]*$.
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
     * Filter by order ID. pattern: ^ord_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id"?: InputValue<string>;
    /**
     * Filter by customer ID. pattern: ^cus_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     */
    "customer_id"?: InputValue<string>;
    /**
     * Filter to payment intents whose receipt_email or linked customer's email equals this
     * address, ignoring case and any whitespace stored around it, with accents preserved. Requires
     * one bare email address without surrounding whitespace. Format: email. Example:
     * "buyer@example.com".
     */
    "email"?: InputValue<string>;
    /**
     * Filter by invoice ID. pattern: ^inv_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "inv_01KEZF7C00A5GEBMWHEAJFSAR4".
     */
    "invoice_id"?: InputValue<string>;
    /**
     * Filter by whether the merchant must capture the payment or respond to a dispute. A dispute
     * requires action when its status is needs_response or inquiry_needs_response, evidence
     * responses are allowed, and its deadline is absent or has not passed. Omit to include both
     * groups.
     */
    "is_action_required"?: InputValue<boolean>;
    /**
     * Match any historical failed attempt, including successful retries. Combine with
     * status=requires_payment_method for payments still awaiting another method. Merchant
     * credentials only.
     */
    "has_failed_attempts"?: InputValue<boolean>;
    /**
     * Match payments from a checkout session created by this payment link. Merchant credentials
     * only. pattern: ^pl_[0-9A-HJKMNP-TV-Z]{26}$. Example: "pl_01KEZF7C007WDMA5P9BPZ8J2AM".
     */
    "payment_link_id"?: InputValue<string>;
    /**
     * Exact failed-attempt decline code. Evidence filters match the same failed attempt. Merchant
     * credentials only. maxLength: 100.
     */
    "decline_code"?: InputValue<string>;
    /**
     * Exact merchant/environment risk-list card fingerprint on a failed attempt. Merchant
     * credentials only. maxLength: 255.
     */
    "card_fingerprint"?: InputValue<string>;
    /** Exact canonical IP on a failed attempt. Merchant credentials only. */
    "buyer_ip_address"?: InputValue<string>;
    /**
     * Exact match on payment_source.card.last4 or a failed attempt snapshot. Send exactly four
     * digits. Payments without a card never match. Combined with card_brand or any other filter,
     * all filters must match. pattern: ^[0-9]{4}$.
     */
    "card_last4"?: InputValue<string>;
    /**
     * Exact match on payment_source.card.brand or a failed attempt snapshot. Repeat keys or
     * comma-separate values to match any selected brand. Payments without a card never match.
     * Values are trimmed and deduplicated in first-seen order; empty or unknown entries are
     * rejected. Values within this filter are ORed; separate filters are ANDed. [] enum: "visa",
     * "mastercard", "amex", "discover", "diners", "jcb", "unionpay". Value enum: "visa",
     * "mastercard", "amex", "discover", "diners", "jcb", "unionpay". anyOf[1] (Value): Array of
     * string. minItems: 1. [] enum: "visa", "mastercard", "amex", "discover", "diners", "jcb",
     * "unionpay". anyOf[1][] (Value): string. Value enum: "visa", "mastercard", "amex",
     * "discover", "diners", "jcb", "unionpay". anyOf[2] (Value): string. Value enum: "visa",
     * "mastercard", "amex", "discover", "diners", "jcb", "unionpay".
     */
    "card_brand"?: InputValue<("visa" | "mastercard" | "amex" | "discover" | "diners" | "jcb" | "unionpay")
        | readonly ("visa" | "mastercard" | "amex" | "discover" | "diners" | "jcb" | "unionpay")[]>;
    /**
     * Filter by payment intent status. Values are trimmed and deduplicated in first-seen order;
     * empty or unknown entries are rejected. Values within this filter are ORed; separate filters
     * are ANDed. [] enum: "requires_payment_method", "requires_confirmation", "requires_action",
     * "processing", "requires_capture", "canceled", "succeeded", "expired". Value enum:
     * "requires_payment_method", "requires_confirmation", "requires_action", "processing",
     * "requires_capture", "canceled", "succeeded", "expired". anyOf[1] (Value): Array of string.
     * minItems: 1. [] enum: "requires_payment_method", "requires_confirmation", "requires_action",
     * "processing", "requires_capture", "canceled", "succeeded", "expired". anyOf[1][] (Value):
     * string. Value enum: "requires_payment_method", "requires_confirmation", "requires_action",
     * "processing", "requires_capture", "canceled", "succeeded", "expired". anyOf[2] (Value):
     * string. Value enum: "requires_payment_method", "requires_confirmation", "requires_action",
     * "processing", "requires_capture", "canceled", "succeeded", "expired".
     */
    "status"?: InputValue<("requires_payment_method"
        | "requires_confirmation"
        | "requires_action"
        | "processing"
        | "requires_capture"
        | "canceled"
        | "succeeded"
        | "expired")
        | readonly ("requires_payment_method"
        | "requires_confirmation"
        | "requires_action"
        | "processing"
        | "requires_capture"
        | "canceled"
        | "succeeded"
        | "expired")[]>;
    /**
     * Filter by the latest completed risk assessment. Repeat or comma-separate values. Values are
     * trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values
     * within this filter are ORed; separate filters are ANDed. [] enum: "normal", "elevated",
     * "highest", "not_assessed". Value enum: "normal", "elevated", "highest", "not_assessed".
     * anyOf[1] (Value): Array of string. minItems: 1. [] enum: "normal", "elevated", "highest",
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
     * Exact-match filter on the caller-owned external reference ID. minLength: 1. maxLength: 255.
     * Example: "warehouse-1842".
     */
    "external_reference_id"?: InputValue<string>;
    /**
     * Filter by linked Return ID. pattern: ^ret_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "ret_01KEZF7C00PG93650ZKVQNGF7X".
     */
    "return_id"?: InputValue<string>;
    /**
     * Filter by linked ReturnResolution ID. pattern: ^retres_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "retres_01KEZF7C00C7RZJN31W9SGMEQ3".
     */
    "return_resolution_id"?: InputValue<string>;
    /**
     * Search across payment_intent_id, external_reference_id, and receipt_email. Use email or
     * customer_id to find a linked customer's payments. Text fields match any part of the value,
     * and %, _ and \ are ordinary characters, not wildcards. IDs match from the start and need the
     * type prefix, such as ord_01.
     */
    "query"?: InputValue<string>;
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
     * Exact match on refund_status. Repeat keys or comma-separate values to match any selected
     * status. Combined with dispute_status, both filters must match. Values are trimmed and
     * deduplicated in first-seen order; empty or unknown entries are rejected. Values within this
     * filter are ORed; separate filters are ANDed. [] enum: "none", "partially_refunded",
     * "refunded". Value enum: "none", "partially_refunded", "refunded". anyOf[1] (Value): Array of
     * string. minItems: 1. [] enum: "none", "partially_refunded", "refunded". anyOf[1][] (Value):
     * string. Value enum: "none", "partially_refunded", "refunded". anyOf[2] (Value): string.
     * Value enum: "none", "partially_refunded", "refunded".
     */
    "refund_status"?: InputValue<("none" | "partially_refunded" | "refunded")
        | readonly ("none" | "partially_refunded" | "refunded")[]>;
    /**
     * Exact match on dispute_status. Repeat keys or comma-separate values to match any selected
     * status. Combined with refund_status, both filters must match. Values are trimmed and
     * deduplicated in first-seen order; empty or unknown entries are rejected. Values within this
     * filter are ORed; separate filters are ANDed. [] enum: "none", "inquiry_needs_response",
     * "inquiry_under_review", "inquiry_closed", "needs_response", "under_review", "won", "lost",
     * "prevented", "other". Value enum: "none", "inquiry_needs_response", "inquiry_under_review",
     * "inquiry_closed", "needs_response", "under_review", "won", "lost", "prevented", "other".
     * anyOf[1] (Value): Array of string. minItems: 1. [] enum: "none", "inquiry_needs_response",
     * "inquiry_under_review", "inquiry_closed", "needs_response", "under_review", "won", "lost",
     * "prevented", "other". anyOf[1][] (Value): string. Value enum: "none",
     * "inquiry_needs_response", "inquiry_under_review", "inquiry_closed", "needs_response",
     * "under_review", "won", "lost", "prevented", "other". anyOf[2] (Value): string. Value enum:
     * "none", "inquiry_needs_response", "inquiry_under_review", "inquiry_closed",
     * "needs_response", "under_review", "won", "lost", "prevented", "other".
     */
    "dispute_status"?: InputValue<("none"
        | "inquiry_needs_response"
        | "inquiry_under_review"
        | "inquiry_closed"
        | "needs_response"
        | "under_review"
        | "won"
        | "lost"
        | "prevented"
        | "other")
        | readonly ("none"
        | "inquiry_needs_response"
        | "inquiry_under_review"
        | "inquiry_closed"
        | "needs_response"
        | "under_review"
        | "won"
        | "lost"
        | "prevented"
        | "other")[]>;
    /**
     * Field to sort by. Defaults to created_at; ties are broken by payment_intent_id. Default:
     * "created_at". Value enum: "created_at", "updated_at", "amount_money", "captured_money".
     */
    "sort_by"?: InputValue<"created_at" | "updated_at" | "amount_money" | "captured_money">;
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
    /** Inclusive lower bound on captured_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "captured_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on captured_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "captured_before"?: InputValue<string | globalThis.Date>;
    /**
     * Include related objects in the response. Supported expansions: customer, invoice, order.
     * Include the requested related resources using scoped batch reads for this page. Each
     * relationship requires its existing target read scopes. Expansion changes the representation
     * without changing pagination tokens. Limits: at most 10 unique expand paths per request. []
     * enum: "customer", "invoice", "order". Value enum: "customer", "invoice", "order". anyOf[1]
     * (Value): Array of string. [] enum: "customer", "invoice", "order". anyOf[1][] (Value):
     * string. Value enum: "customer", "invoice", "order". anyOf[2] (Value): string. Value enum:
     * "customer", "invoice", "order".
     */
    "expand"?: InputValue<("customer" | "invoice" | "order") | readonly ("customer" | "invoice" | "order")[]>;
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
export type PaymentIntentsSendReceiptParams = (InputValue<SendPaymentIntentReceiptRequestInput> | {
    "email"?: never;
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
export type PaymentIntentsUpdateParams = (InputValue<UpdatePaymentIntentRequestInput>)
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
/** Optional merchant limits that can lower Flint's payment-option and surface policy limits. */
export type PaymentLimitSettings = {
    /**
     * Enforced maximum USD amounts for every supported exact payment_option.surface selector. Only
     * returned by GET /v1/settings/effective. Includes merchant limits and Flint support
     * approvals; the approval map is private. * (Value): {@link MoneyValue}. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "effective_max_amounts"?: Record<string, MoneyValue>;
    /**
     * Enforced minimum USD amounts for every supported exact payment_option.surface selector. Only
     * returned by GET /v1/settings/effective. Includes merchant limits and Flint's payment-option
     * floors. * (Value): {@link MoneyValue}. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "effective_min_amounts"?: Record<string, MoneyValue>;
    /**
     * Maximum USD amounts keyed by default, surface, or an exact payment_option.surface selector.
     * Merchant settings cannot raise Flint's policy ceiling. * (Value): {@link MoneyValue}.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "max_amounts"?: Record<string, MoneyValue>;
    /**
     * Minimum USD amounts keyed by default, surface, or an exact payment_option.surface selector.
     * Merchant settings cannot lower Flint's payment-option floor. * (Value): {@link MoneyValue}.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "min_amounts"?: Record<string, MoneyValue>;
};
/**
 * Changes to a merchant's payment amount limits. Each map replaces the existing one, and null
 * clears it. minProperties: 1.
 */
export type PaymentLimitSettingsPatch = {
    /**
     * Map replaced as a whole: the keys you send become the full map. Replaces this merchant limit
     * map. Keys are default, a surface, payment_option.default, or payment_option.surface. Amounts
     * must satisfy Flint's existing selector bounds and effective minimum/maximum range. Send null
     * to clear this map; reads then omit it. minProperties: 1. * (Value): object. *.amount
     * (Required): integer string. The limit in the currency's minor unit, such as cents for USD.
     * Use an integer string (decimal digits), not a floating-point number. Format: int64. minimum:
     * 1. *.currency (Required): string. Currency of the limit. Only USD is accepted. Uses ISO 4217
     * currency codes. minLength: 1. Value enum: "USD".
     */
    "max_amounts"?: Record<string, {
        /**
         * The limit in the currency's minor unit, such as cents for USD. Use an integer string
         * (decimal digits), not a floating-point number. Format: int64. minimum: 1.
         */
        "amount": `${bigint}`;
        /**
         * Currency of the limit. Only USD is accepted. Uses ISO 4217 currency codes. minLength: 1.
         * Value enum: "USD".
         */
        "currency": "USD" | (string & {});
    }>
        | null;
    /**
     * Map replaced as a whole: the keys you send become the full map. Replaces this merchant limit
     * map. Keys are default, a surface, payment_option.default, or payment_option.surface. Amounts
     * must satisfy Flint's existing selector bounds and effective minimum/maximum range. Send null
     * to clear this map; reads then omit it. minProperties: 1. * (Value): object. *.amount
     * (Required): integer string. The limit in the currency's minor unit, such as cents for USD.
     * Use an integer string (decimal digits), not a floating-point number. Format: int64. minimum:
     * 1. *.currency (Required): string. Currency of the limit. Only USD is accepted. Uses ISO 4217
     * currency codes. minLength: 1. Value enum: "USD".
     */
    "min_amounts"?: Record<string, {
        /**
         * The limit in the currency's minor unit, such as cents for USD. Use an integer string
         * (decimal digits), not a floating-point number. Format: int64. minimum: 1.
         */
        "amount": `${bigint}`;
        /**
         * Currency of the limit. Only USD is accepted. Uses ISO 4217 currency codes. minLength: 1.
         * Value enum: "USD".
         */
        "currency": "USD" | (string & {});
    }>
        | null;
};
/**
 * Changes to a merchant's payment amount limits. Each map replaces the existing one, and null
 * clears it. minProperties: 1.
 */
export type PaymentLimitSettingsPatchInput = {
    /**
     * Map replaced as a whole: the keys you send become the full map. Replaces this merchant limit
     * map. Keys are default, a surface, payment_option.default, or payment_option.surface. Amounts
     * must satisfy Flint's existing selector bounds and effective minimum/maximum range. Send null
     * to clear this map; reads then omit it. minProperties: 1. * (Value): object. *.amount
     * (Required): integer string. The limit in the currency's minor unit, such as cents for USD.
     * Use an integer string (decimal digits), not a floating-point number. Format: int64. minimum:
     * 1. *.currency (Required): string. Currency of the limit. Only USD is accepted. Uses ISO 4217
     * currency codes. minLength: 1. Value enum: "USD".
     */
    "max_amounts"?: Record<string, {
        /**
         * The limit in the currency's minor unit, such as cents for USD. Use an integer string
         * (decimal digits), not a floating-point number. Format: int64. minimum: 1.
         */
        "amount": `${bigint}` | bigint;
        /**
         * Currency of the limit. Only USD is accepted. Uses ISO 4217 currency codes. minLength: 1.
         * Value enum: "USD".
         */
        "currency": "USD";
    }>
        | null;
    /**
     * Map replaced as a whole: the keys you send become the full map. Replaces this merchant limit
     * map. Keys are default, a surface, payment_option.default, or payment_option.surface. Amounts
     * must satisfy Flint's existing selector bounds and effective minimum/maximum range. Send null
     * to clear this map; reads then omit it. minProperties: 1. * (Value): object. *.amount
     * (Required): integer string. The limit in the currency's minor unit, such as cents for USD.
     * Use an integer string (decimal digits), not a floating-point number. Format: int64. minimum:
     * 1. *.currency (Required): string. Currency of the limit. Only USD is accepted. Uses ISO 4217
     * currency codes. minLength: 1. Value enum: "USD".
     */
    "min_amounts"?: Record<string, {
        /**
         * The limit in the currency's minor unit, such as cents for USD. Use an integer string
         * (decimal digits), not a floating-point number. Format: int64. minimum: 1.
         */
        "amount": `${bigint}` | bigint;
        /**
         * Currency of the limit. Only USD is accepted. Uses ISO 4217 currency codes. minLength: 1.
         * Value enum: "USD".
         */
        "currency": "USD";
    }>
        | null;
};
/** A reusable link that opens checkout. */
export type PaymentLink = {
    /** What checkout asks the buyer for. Each field you leave out uses your checkout settings. */
    "buyer_fields"?: CheckoutBuyerFields;
    /**
     * Seconds each checkout session the link starts stays open, from 60 to 86,400. Omit it to use
     * your checkout settings, or 24 hours. It doesn't end the link; use sales_end_at for that.
     * Format: int64. minimum: 60. maximum: 86400.
     */
    "checkout_session_expires_in_seconds"?: number;
    /** Number of paid checkout sessions started from this link. Format: int32. */
    "completed_count": number;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /**
     * Questions buyers answer before paying. Answers are recorded on the order and checkout
     * session in `custom_field_answers`. [] (Value): {@link PaymentLinkCustomField}. A custom
     * field on a payment link that collects an answer from the buyer.
     */
    "custom_fields"?: Array<PaymentLinkCustomField>;
    /**
     * Custom text for checkouts started from this link. Custom text shown in checkout: an order
     * summary message and a shipping address label.
     */
    "custom_text"?: CheckoutCustomTextConfig;
    /**
     * Delivery methods the link offers. Empty when the link has none, and then its checkouts offer
     * settings.checkout.default_delivery_method_ids when the order has items to deliver. []
     * (Value): string. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
     */
    "delivery_method_ids": Array<string>;
    /** Text about what the link sells, returned to buyers when they open it. */
    "description"?: string;
    /**
     * Largest amount a buyer can give on a donation link. Must be greater than zero and greater
     * than or equal to donation_min_amount_money. Omit on create for no maximum. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "donation_max_amount_money"?: MoneyValue;
    /**
     * Smallest amount a buyer can give on a donation link. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "donation_min_amount_money"?: MoneyValue;
    /**
     * Amounts a donation link offers as one-tap choices. [] (Value): {@link MoneyValue}. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "donation_suggested_amount_money_options"?: Array<MoneyValue>;
    /**
     * Event details for an `event` link: when and where it takes place and how many tickets it
     * sells. Event settings on an event payment link, such as its date, venue, ticket limit, and
     * ticket emails.
     */
    "event_config"?: PaymentLinkEventConfig;
    /**
     * Caller-owned identifier for this resource in an external system. maxLength: 255. Example:
     * "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Image shown to buyers with the link. An image attached to a resource, with its display
     * properties and attachment metadata.
     */
    "image"?: ImageAttachment;
    /** Message to show the buyer when the link is inactive. */
    "inactive_message"?: string;
    /**
     * The inventory location or routing policy that supplies stock for the link's catalog lines.
     * Absent when using the implicit single-Location fallback, which is evaluated again on use.
     * Where an order, payment link, or reservation routes inventory from: a fixed Location, an
     * inventory allocation policy, or one policy revision.
     */
    "inventory_routing_source"?: InventoryRoutingSource;
    /**
     * The terms and policy links checkouts started from this link show the buyer. Legal settings
     * for a checkout: whether buyers must accept terms, and links to the terms, refund policy,
     * shipping policy, and contract.
     */
    "legal"?: LegalSettings;
    /**
     * What the link sells. [] (Value): {@link PaymentLinkLineItem}. A line item on a payment link.
     */
    "line_items"?: Array<PaymentLinkLineItem>;
    /**
     * Most payments the link accepts, counted by `completed_count`. Absent means no limit. Once
     * the limit is reached, resolving the link fails with a request error. It can't be set below
     * `completed_count`. Format: int32.
     */
    "max_completions"?: number;
    /** ID of the merchant this resource belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
    "merchant_id": string;
    /**
     * Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules.
     * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for
     * Flint and are not returned. Writes follow the limits on MetadataInput and
     * MetadataPatchInput; maps written before those limits may not satisfy them.
     */
    "metadata"?: MetadataMap;
    /** Name of the payment link. */
    "name": string;
    /**
     * Unique identifier for this payment link, prefixed `pl_`. Example:
     * "pl_01KEZF7C007WDMA5P9BPZ8J2AM".
     */
    "payment_link_id": string;
    /** What kind of link this is. Value enum: "standard", "donation", "event". */
    "payment_link_type"?: "standard" | "donation" | "event" | (string & {});
    /**
     * Payment options for checkouts started from this link. Payment settings for a checkout: the
     * enabled payment options and a note shown with payment.
     */
    "payments"?: CheckoutPaymentConfig;
    /**
     * Whether automatic promotions apply to checkouts started from this link and whether buyers
     * can enter promotion codes. Promotion settings for a checkout: whether automatic promotions
     * apply and whether the buyer can apply promotion codes.
     */
    "promotion_config"?: CheckoutPromotionConfig;
    /**
     * Where checkout sessions started from this payment link send the buyer after payment,
     * cancellation, or expiration. Where hosted checkout sends the buyer. Not allowed when surface
     * is headless; use payment_return_url.
     */
    "redirects"?: CheckoutRedirects;
    /**
     * RFC3339 timestamp after which the link stops starting checkouts and resolve fails with
     * `ACTION_NOT_ALLOWED` and reason `not_offered`. Unset means sales do not end on their own,
     * except that an event link without sales_end_at stops selling at event_config.event_at. A
     * checkout opened before the end can still start payment for up to 15 minutes after it.
     * Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "sales_end_at"?: string;
    /**
     * RFC3339 timestamp when buyers can first start a checkout from this link. Stored to
     * nanosecond precision. Before it, resolve fails with ACTION_NOT_ALLOWED and reason
     * sales_not_started. Must be earlier than the link’s sales end, including the event start when
     * no explicit end is set. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "sales_start_at"?: string;
    /**
     * Present only with expand=sales_summary on GET /v1/payment-links or GET
     * /v1/payment-links/{payment_link_id}. Available to merchant callers, including dashboard
     * sessions and API keys with checkouts.payment_links.read. Uses the same paid-order definition
     * as the merchant sales summary. Paid-order sales totals for a payment link, computed on
     * request. Paid means the order's collection has completed. Fully and partially refunded
     * orders still count, and paid_totals reports the amount collected before refunds. Each order
     * counts once even if it has multiple checkout sessions.
     */
    "sales_summary"?: PaymentLinkSalesSummary;
    /** Whether the link can start new checkouts. Value enum: "active", "inactive". */
    "status": "active" | "inactive" | (string & {});
    /**
     * Present only when `expand` includes `subscription_plan`; `null` when expanded and there is
     * no related subscription plan. anyOf[1] (Value): {@link ExpandedSubscriptionPlanSummary}. A
     * subscription plan's summary fields, including name, billing interval, currency, and status,
     * returned when the plan is expanded. anyOf[2] (Value): null.
     */
    "subscription_plan"?: ((ExpandedSubscriptionPlanSummary) | (null));
    /**
     * ID of the subscription plan the link sells. Absent for a link that doesn't sell a
     * subscription. Example: "plan_01KEZF7C004CY5ZR33XST2AASV".
     */
    "subscription_plan_id"?: string;
    /**
     * Tax settings for checkouts started from this link. Whether tax is collected for a checkout
     * session or payment link.
     */
    "tax"?: CheckoutTaxConfig;
    /**
     * The title and colors for checkouts started from this link, over your branding settings.
     * Colors and title applied to a payment link's checkout page.
     */
    "theme"?: ThemeConfig;
    /**
     * Tip options for checkouts started from this link. Tip settings for a checkout: whether tips
     * are enabled, the percent or fixed amount options, the default tip, and custom tips.
     */
    "tip"?: CheckoutTipConfig;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "total_quantity_sold": number;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "updated_at": string;
    /** URL buyers open to use the link. */
    "url": string;
    /**
     * Current version of this resource's owned state. Send it as `expected_version` when changing
     * the resource to reject a stale write. Format: int64.
     */
    "version": number;
};
/**
 * A listed payment link variant that can be sold in the line currency, with its current price,
 * options, image, modifiers, and advisory stock state.
 */
export type PaymentLinkAvailableVariant = {
    /**
     * Modifier groups available for this variant's effective modifier set. Omitted when the
     * variant has none. [] (Value): {@link PublicResolvedModifierGroup}. A modifier group as
     * resolved for a payment link line item, with its selection limits, display flags, and options
     * or text settings.
     */
    "available_modifiers"?: Array<PublicResolvedModifierGroup>;
    /**
     * Current catalog reference unit price for sale display. Null when no variant compare-at price
     * is set. Does not affect the amount charged. anyOf[1] (Value): {@link MoneyValue}. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code. anyOf[2] (Value):
     * null.
     */
    "compare_at_price_money": ((MoneyValue) | (null));
    /**
     * Effective primary variant image, inherited from the product when the variant has none.
     * Omitted when neither has an image. An image with its URL, size, and alt text.
     */
    "image"?: Image;
    /**
     * True when tracked inventory cannot supply the line's starting quantity through the payment
     * link's inventory_routing_source. Uses min_quantity when quantity is adjustable, otherwise
     * quantity. Always false for untracked variants. Advisory only: no stock is held at read or
     * resolve time, and no stock counts are published.
     */
    "is_sold_out": boolean;
    /** Order line name for this variant: the product name plus the variant label. */
    "name": string;
    /**
     * Identifier of the product the offered variant belongs to. Example:
     * "prod_01KEZF7C00BVSHCNWVH528HB66".
     */
    "product_id": string;
    /**
     * Default variant quantity breaks. Use the largest minimum_quantity not above this line's own
     * quantity; an empty array uses the base price. [] (Value): {@link QuantityPriceBreak}. A net
     * unit price that applies when one catalog line reaches minimum_quantity.
     */
    "quantity_price_breaks": Array<QuantityPriceBreak>;
    /**
     * The variant's product option values, in product option position order. Empty when the
     * product has no options. [] (Value): {@link SelectedProductOption}. An option and value
     * chosen for a product variant, such as size Large.
     */
    "selected_options": Array<SelectedProductOption>;
    /**
     * Current catalog base unit price in the line currency. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "unit_price_money": MoneyValue;
    /** ID of the offered product variant. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX". */
    "variant_id": string;
};
export type PaymentLinkCreatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "buyer_fields"?: CheckoutBuyerFields;
            "checkout_session_expires_in_seconds"?: number;
            "completed_count": number;
            "created_at": string;
            "custom_fields"?: Array<PaymentLinkCustomField>;
            "custom_text"?: CheckoutCustomTextConfig;
            "delivery_method_ids": Array<string>;
            "description"?: string;
            "donation_max_amount_money"?: MoneyValue;
            "donation_min_amount_money"?: MoneyValue;
            "donation_suggested_amount_money_options"?: Array<MoneyValue>;
            "event_config"?: PaymentLinkEventConfig;
            "external_reference_id"?: string;
            "image"?: ImageAttachment;
            "inactive_message"?: string;
            "inventory_routing_source"?: InventoryRoutingSource;
            "legal"?: LegalSettings;
            "line_items"?: Array<PaymentLinkLineItem>;
            "max_completions"?: number;
            "merchant_id": string;
            "metadata"?: MetadataMap;
            "name": string;
            "payment_link_id": string;
            "payment_link_type"?: "standard" | "donation" | "event" | (string & {});
            "payments"?: CheckoutPaymentConfig;
            "promotion_config"?: CheckoutPromotionConfig;
            "redirects"?: CheckoutRedirects;
            "sales_end_at"?: string;
            "sales_start_at"?: string;
            "sales_summary"?: PaymentLinkSalesSummary;
            "status": "active" | "inactive" | (string & {});
            "subscription_plan"?: ((ExpandedSubscriptionPlanSummary) | (null));
            "subscription_plan_id"?: string;
            "tax"?: CheckoutTaxConfig;
            "theme"?: ThemeConfig;
            "tip"?: CheckoutTipConfig;
            "total_quantity_sold": number;
            "updated_at": string;
            "url": string;
            "version": number;
        };
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "payment_link.created";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "buyer_fields"?: CheckoutBuyerFields;
            "checkout_session_expires_in_seconds"?: number;
            "completed_count": number;
            "created_at": string;
            "custom_fields"?: Array<PaymentLinkCustomField>;
            "custom_text"?: CheckoutCustomTextConfig;
            "delivery_method_ids": Array<string>;
            "description"?: string;
            "donation_max_amount_money"?: MoneyValue;
            "donation_min_amount_money"?: MoneyValue;
            "donation_suggested_amount_money_options"?: Array<MoneyValue>;
            "event_config"?: PaymentLinkEventConfig;
            "external_reference_id"?: string;
            "image"?: ImageAttachment;
            "inactive_message"?: string;
            "inventory_routing_source"?: InventoryRoutingSource;
            "legal"?: LegalSettings;
            "line_items"?: Array<PaymentLinkLineItem>;
            "max_completions"?: number;
            "merchant_id": string;
            "metadata"?: MetadataMap;
            "name": string;
            "payment_link_id": string;
            "payment_link_type"?: "standard" | "donation" | "event" | (string & {});
            "payments"?: CheckoutPaymentConfig;
            "promotion_config"?: CheckoutPromotionConfig;
            "redirects"?: CheckoutRedirects;
            "sales_end_at"?: string;
            "sales_start_at"?: string;
            "sales_summary"?: PaymentLinkSalesSummary;
            "status": "active" | "inactive" | (string & {});
            "subscription_plan"?: ((ExpandedSubscriptionPlanSummary) | (null));
            "subscription_plan_id"?: string;
            "tax"?: CheckoutTaxConfig;
            "theme"?: ThemeConfig;
            "tip"?: CheckoutTipConfig;
            "total_quantity_sold": number;
            "updated_at": string;
            "url": string;
            "version": number;
        };
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "payment_link.created";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "payment_link.created";
});
/**
 * The `payment_link.created` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type PaymentLinkCreatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.buyer_fields (Optional): {@link CheckoutBuyerFields}. What
     * checkout asks the buyer for. Each field you leave out uses your checkout settings.
     * object.checkout_session_expires_in_seconds (Optional): integer. Seconds each checkout
     * session the link starts stays open, from 60 to 86,400. Omit it to use your checkout
     * settings, or 24 hours. It doesn't end the link; use sales_end_at for that. Format: int64.
     * minimum: 60. maximum: 86400. object.completed_count (Required): integer. Number of paid
     * checkout sessions started from this link. Format: int32. object.created_at (Required):
     * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.custom_fields (Optional): Array of {@link PaymentLinkCustomField}. Questions buyers
     * answer before paying. Answers are recorded on the order and checkout session in
     * `custom_field_answers`. object.custom_fields[] (Value): {@link PaymentLinkCustomField}. A
     * custom field on a payment link that collects an answer from the buyer. object.custom_text
     * (Optional): {@link CheckoutCustomTextConfig}. Custom text for checkouts started from this
     * link. Custom text shown in checkout: an order summary message and a shipping address label.
     * object.delivery_method_ids (Required): Array of string. Delivery methods the link offers.
     * Empty when the link has none, and then its checkouts offer
     * settings.checkout.default_delivery_method_ids when the order has items to deliver.
     * object.delivery_method_ids[] (Value): string. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
     * object.description (Optional): string. Text about what the link sells, returned to buyers
     * when they open it. object.donation_max_amount_money (Optional): {@link MoneyValue}. Largest
     * amount a buyer can give on a donation link. Must be greater than zero and greater than or
     * equal to donation_min_amount_money. Omit on create for no maximum. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     * object.donation_min_amount_money (Optional): {@link MoneyValue}. Smallest amount a buyer can
     * give on a donation link. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code. object.donation_suggested_amount_money_options (Optional): Array of {@link
     * MoneyValue}. Amounts a donation link offers as one-tap choices.
     * object.donation_suggested_amount_money_options[] (Value): {@link MoneyValue}. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     * object.event_config (Optional): {@link PaymentLinkEventConfig}. Event details for an `event`
     * link: when and where it takes place and how many tickets it sells. Event settings on an
     * event payment link, such as its date, venue, ticket limit, and ticket emails.
     * object.external_reference_id (Optional): string. Caller-owned identifier for this resource
     * in an external system. maxLength: 255. Example: "warehouse-1842". object.image (Optional):
     * {@link ImageAttachment}. Image shown to buyers with the link. An image attached to a
     * resource, with its display properties and attachment metadata. object.inactive_message
     * (Optional): string. Message to show the buyer when the link is inactive.
     * object.inventory_routing_source (Optional): {@link InventoryRoutingSource}. The inventory
     * location or routing policy that supplies stock for the link's catalog lines. Absent when
     * using the implicit single-Location fallback, which is evaluated again on use. Where an
     * order, payment link, or reservation routes inventory from: a fixed Location, an inventory
     * allocation policy, or one policy revision. object.legal (Optional): {@link LegalSettings}.
     * The terms and policy links checkouts started from this link show the buyer. Legal settings
     * for a checkout: whether buyers must accept terms, and links to the terms, refund policy,
     * shipping policy, and contract. object.line_items (Optional): Array of {@link
     * PaymentLinkLineItem}. What the link sells. object.line_items[] (Value): {@link
     * PaymentLinkLineItem}. A line item on a payment link. object.max_completions (Optional):
     * integer. Most payments the link accepts, counted by `completed_count`. Absent means no
     * limit. Once the limit is reached, resolving the link fails with a request error. It can't be
     * set below `completed_count`. Format: int32. object.merchant_id (Required): string. ID of the
     * merchant this resource belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     * object.metadata (Optional): {@link MetadataMap}. Stored caller-owned key-value data. See
     * `MetadataInput` for key, value, and size rules. Caller-owned key-value data stored on a
     * resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
     * follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits
     * may not satisfy them. object.name (Required): string. Name of the payment link.
     * object.payment_link_id (Required): string. Unique identifier for this payment link, prefixed
     * `pl_`. Example: "pl_01KEZF7C007WDMA5P9BPZ8J2AM". object.payment_link_type (Optional):
     * string. What kind of link this is. Value enum: "standard", "donation", "event".
     * object.payments (Optional): {@link CheckoutPaymentConfig}. Payment options for checkouts
     * started from this link. Payment settings for a checkout: the enabled payment options and a
     * note shown with payment. object.promotion_config (Optional): {@link
     * CheckoutPromotionConfig}. Whether automatic promotions apply to checkouts started from this
     * link and whether buyers can enter promotion codes. Promotion settings for a checkout:
     * whether automatic promotions apply and whether the buyer can apply promotion codes.
     * object.redirects (Optional): {@link CheckoutRedirects}. Where checkout sessions started from
     * this payment link send the buyer after payment, cancellation, or expiration. Where hosted
     * checkout sends the buyer. Not allowed when surface is headless; use payment_return_url.
     * object.sales_end_at (Optional): string. RFC3339 timestamp after which the link stops
     * starting checkouts and resolve fails with `ACTION_NOT_ALLOWED` and reason `not_offered`.
     * Unset means sales do not end on their own, except that an event link without sales_end_at
     * stops selling at event_config.event_at. A checkout opened before the end can still start
     * payment for up to 15 minutes after it. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.sales_start_at (Optional): string. RFC3339 timestamp when buyers can first start a
     * checkout from this link. Stored to nanosecond precision. Before it, resolve fails with
     * ACTION_NOT_ALLOWED and reason sales_not_started. Must be earlier than the link’s sales end,
     * including the event start when no explicit end is set. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.sales_summary (Optional): {@link PaymentLinkSalesSummary}.
     * Present only with expand=sales_summary on GET /v1/payment-links or GET
     * /v1/payment-links/{payment_link_id}. Available to merchant callers, including dashboard
     * sessions and API keys with checkouts.payment_links.read. Uses the same paid-order definition
     * as the merchant sales summary. Paid-order sales totals for a payment link, computed on
     * request. Paid means the order's collection has completed. Fully and partially refunded
     * orders still count, and paid_totals reports the amount collected before refunds. Each order
     * counts once even if it has multiple checkout sessions. object.status (Required): string.
     * Whether the link can start new checkouts. Value enum: "active", "inactive".
     * object.subscription_plan (Optional): {@link ExpandedSubscriptionPlanSummary} or null.
     * Present only when `expand` includes `subscription_plan`; `null` when expanded and there is
     * no related subscription plan. object.subscription_plan.anyOf[1] (Value): {@link
     * ExpandedSubscriptionPlanSummary}. A subscription plan's summary fields, including name,
     * billing interval, currency, and status, returned when the plan is expanded.
     * object.subscription_plan.anyOf[2] (Value): null. object.subscription_plan_id (Optional):
     * string. ID of the subscription plan the link sells. Absent for a link that doesn't sell a
     * subscription. Example: "plan_01KEZF7C004CY5ZR33XST2AASV". object.tax (Optional): {@link
     * CheckoutTaxConfig}. Tax settings for checkouts started from this link. Whether tax is
     * collected for a checkout session or payment link. object.theme (Optional): {@link
     * ThemeConfig}. The title and colors for checkouts started from this link, over your branding
     * settings. Colors and title applied to a payment link's checkout page. object.tip (Optional):
     * {@link CheckoutTipConfig}. Tip options for checkouts started from this link. Tip settings
     * for a checkout: whether tips are enabled, the percent or fixed amount options, the default
     * tip, and custom tips. object.total_quantity_sold (Required): integer. Whole-number quantity;
     * fractional quantities are not supported. Format: int32. object.updated_at (Required):
     * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.url
     * (Required): string. URL buyers open to use the link. object.version (Required): integer.
     * Current version of this resource's owned state. Send it as `expected_version` when changing
     * the resource to reject a stale write. Format: int64.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * buyer_fields (Optional): {@link CheckoutBuyerFields}. What checkout asks the buyer for.
         * Each field you leave out uses your checkout settings.
         * checkout_session_expires_in_seconds (Optional): integer. Seconds each checkout session
         * the link starts stays open, from 60 to 86,400. Omit it to use your checkout settings, or
         * 24 hours. It doesn't end the link; use sales_end_at for that. Format: int64. minimum:
         * 60. maximum: 86400. completed_count (Required): integer. Number of paid checkout
         * sessions started from this link. Format: int32. created_at (Required): string. RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". custom_fields (Optional):
         * Array of {@link PaymentLinkCustomField}. Questions buyers answer before paying. Answers
         * are recorded on the order and checkout session in `custom_field_answers`.
         * custom_fields[] (Value): {@link PaymentLinkCustomField}. A custom field on a payment
         * link that collects an answer from the buyer. custom_text (Optional): {@link
         * CheckoutCustomTextConfig}. Custom text for checkouts started from this link. Custom text
         * shown in checkout: an order summary message and a shipping address label.
         * delivery_method_ids (Required): Array of string. Delivery methods the link offers. Empty
         * when the link has none, and then its checkouts offer
         * settings.checkout.default_delivery_method_ids when the order has items to deliver.
         * delivery_method_ids[] (Value): string. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
         * description (Optional): string. Text about what the link sells, returned to buyers when
         * they open it. donation_max_amount_money (Optional): {@link MoneyValue}. Largest amount a
         * buyer can give on a donation link. Must be greater than zero and greater than or equal
         * to donation_min_amount_money. Omit on create for no maximum. Monetary amount represented
         * as integer minor units plus an ISO 4217 currency code. donation_min_amount_money
         * (Optional): {@link MoneyValue}. Smallest amount a buyer can give on a donation link.
         * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
         * donation_suggested_amount_money_options (Optional): Array of {@link MoneyValue}. Amounts
         * a donation link offers as one-tap choices. donation_suggested_amount_money_options[]
         * (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus an
         * ISO 4217 currency code. event_config (Optional): {@link PaymentLinkEventConfig}. Event
         * details for an `event` link: when and where it takes place and how many tickets it
         * sells. Event settings on an event payment link, such as its date, venue, ticket limit,
         * and ticket emails. external_reference_id (Optional): string. Caller-owned identifier for
         * this resource in an external system. maxLength: 255. Example: "warehouse-1842". image
         * (Optional): {@link ImageAttachment}. Image shown to buyers with the link. An image
         * attached to a resource, with its display properties and attachment metadata.
         * inactive_message (Optional): string. Message to show the buyer when the link is
         * inactive. inventory_routing_source (Optional): {@link InventoryRoutingSource}. The
         * inventory location or routing policy that supplies stock for the link's catalog lines.
         * Absent when using the implicit single-Location fallback, which is evaluated again on
         * use. Where an order, payment link, or reservation routes inventory from: a fixed
         * Location, an inventory allocation policy, or one policy revision. legal (Optional):
         * {@link LegalSettings}. The terms and policy links checkouts started from this link show
         * the buyer. Legal settings for a checkout: whether buyers must accept terms, and links to
         * the terms, refund policy, shipping policy, and contract. line_items (Optional): Array of
         * {@link PaymentLinkLineItem}. What the link sells. line_items[] (Value): {@link
         * PaymentLinkLineItem}. A line item on a payment link. max_completions (Optional):
         * integer. Most payments the link accepts, counted by `completed_count`. Absent means no
         * limit. Once the limit is reached, resolving the link fails with a request error. It
         * can't be set below `completed_count`. Format: int32. merchant_id (Required): string. ID
         * of the merchant this resource belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
         * metadata (Optional): {@link MetadataMap}. Stored caller-owned key-value data. See
         * `MetadataInput` for key, value, and size rules. Caller-owned key-value data stored on a
         * resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
         * follow the limits on MetadataInput and MetadataPatchInput; maps written before those
         * limits may not satisfy them. name (Required): string. Name of the payment link.
         * payment_link_id (Required): string. Unique identifier for this payment link, prefixed
         * `pl_`. Example: "pl_01KEZF7C007WDMA5P9BPZ8J2AM". payment_link_type (Optional): string.
         * What kind of link this is. Value enum: "standard", "donation", "event". payments
         * (Optional): {@link CheckoutPaymentConfig}. Payment options for checkouts started from
         * this link. Payment settings for a checkout: the enabled payment options and a note shown
         * with payment. promotion_config (Optional): {@link CheckoutPromotionConfig}. Whether
         * automatic promotions apply to checkouts started from this link and whether buyers can
         * enter promotion codes. Promotion settings for a checkout: whether automatic promotions
         * apply and whether the buyer can apply promotion codes. redirects (Optional): {@link
         * CheckoutRedirects}. Where checkout sessions started from this payment link send the
         * buyer after payment, cancellation, or expiration. Where hosted checkout sends the buyer.
         * Not allowed when surface is headless; use payment_return_url. sales_end_at (Optional):
         * string. RFC3339 timestamp after which the link stops starting checkouts and resolve
         * fails with `ACTION_NOT_ALLOWED` and reason `not_offered`. Unset means sales do not end
         * on their own, except that an event link without sales_end_at stops selling at
         * event_config.event_at. A checkout opened before the end can still start payment for up
         * to 15 minutes after it. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * sales_start_at (Optional): string. RFC3339 timestamp when buyers can first start a
         * checkout from this link. Stored to nanosecond precision. Before it, resolve fails with
         * ACTION_NOT_ALLOWED and reason sales_not_started. Must be earlier than the link’s sales
         * end, including the event start when no explicit end is set. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". sales_summary (Optional): {@link PaymentLinkSalesSummary}.
         * Present only with expand=sales_summary on GET /v1/payment-links or GET
         * /v1/payment-links/{payment_link_id}. Available to merchant callers, including dashboard
         * sessions and API keys with checkouts.payment_links.read. Uses the same paid-order
         * definition as the merchant sales summary. Paid-order sales totals for a payment link,
         * computed on request. Paid means the order's collection has completed. Fully and
         * partially refunded orders still count, and paid_totals reports the amount collected
         * before refunds. Each order counts once even if it has multiple checkout sessions. status
         * (Required): string. Whether the link can start new checkouts. Value enum: "active",
         * "inactive". subscription_plan (Optional): {@link ExpandedSubscriptionPlanSummary} or
         * null. Present only when `expand` includes `subscription_plan`; `null` when expanded and
         * there is no related subscription plan. subscription_plan.anyOf[1] (Value): {@link
         * ExpandedSubscriptionPlanSummary}. A subscription plan's summary fields, including name,
         * billing interval, currency, and status, returned when the plan is expanded.
         * subscription_plan.anyOf[2] (Value): null. subscription_plan_id (Optional): string. ID of
         * the subscription plan the link sells. Absent for a link that doesn't sell a
         * subscription. Example: "plan_01KEZF7C004CY5ZR33XST2AASV". tax (Optional): {@link
         * CheckoutTaxConfig}. Tax settings for checkouts started from this link. Whether tax is
         * collected for a checkout session or payment link. theme (Optional): {@link ThemeConfig}.
         * The title and colors for checkouts started from this link, over your branding settings.
         * Colors and title applied to a payment link's checkout page. tip (Optional): {@link
         * CheckoutTipConfig}. Tip options for checkouts started from this link. Tip settings for a
         * checkout: whether tips are enabled, the percent or fixed amount options, the default
         * tip, and custom tips. total_quantity_sold (Required): integer. Whole-number quantity;
         * fractional quantities are not supported. Format: int32. updated_at (Required): string.
         * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". url (Required):
         * string. URL buyers open to use the link. version (Required): integer. Current version of
         * this resource's owned state. Send it as `expected_version` when changing the resource to
         * reject a stale write. Format: int64.
         */
        "object": {
            /**
             * What checkout asks the buyer for. Each field you leave out uses your checkout
             * settings.
             */
            "buyer_fields"?: CheckoutBuyerFields;
            /**
             * Seconds each checkout session the link starts stays open, from 60 to 86,400. Omit it
             * to use your checkout settings, or 24 hours. It doesn't end the link; use
             * sales_end_at for that. Format: int64. minimum: 60. maximum: 86400.
             */
            "checkout_session_expires_in_seconds"?: number;
            /** Number of paid checkout sessions started from this link. Format: int32. */
            "completed_count": number;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Questions buyers answer before paying. Answers are recorded on the order and
             * checkout session in `custom_field_answers`. [] (Value): {@link
             * PaymentLinkCustomField}. A custom field on a payment link that collects an answer
             * from the buyer.
             */
            "custom_fields"?: Array<PaymentLinkCustomField>;
            /**
             * Custom text for checkouts started from this link. Custom text shown in checkout: an
             * order summary message and a shipping address label.
             */
            "custom_text"?: CheckoutCustomTextConfig;
            /**
             * Delivery methods the link offers. Empty when the link has none, and then its
             * checkouts offer settings.checkout.default_delivery_method_ids when the order has
             * items to deliver. [] (Value): string. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
             */
            "delivery_method_ids": Array<string>;
            /** Text about what the link sells, returned to buyers when they open it. */
            "description"?: string;
            /**
             * Largest amount a buyer can give on a donation link. Must be greater than zero and
             * greater than or equal to donation_min_amount_money. Omit on create for no maximum.
             * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
             */
            "donation_max_amount_money"?: MoneyValue;
            /**
             * Smallest amount a buyer can give on a donation link. Monetary amount represented as
             * integer minor units plus an ISO 4217 currency code.
             */
            "donation_min_amount_money"?: MoneyValue;
            /**
             * Amounts a donation link offers as one-tap choices. [] (Value): {@link MoneyValue}.
             * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
             */
            "donation_suggested_amount_money_options"?: Array<MoneyValue>;
            /**
             * Event details for an `event` link: when and where it takes place and how many
             * tickets it sells. Event settings on an event payment link, such as its date, venue,
             * ticket limit, and ticket emails.
             */
            "event_config"?: PaymentLinkEventConfig;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Image shown to buyers with the link. An image attached to a resource, with its
             * display properties and attachment metadata.
             */
            "image"?: ImageAttachment;
            /** Message to show the buyer when the link is inactive. */
            "inactive_message"?: string;
            /**
             * The inventory location or routing policy that supplies stock for the link's catalog
             * lines. Absent when using the implicit single-Location fallback, which is evaluated
             * again on use. Where an order, payment link, or reservation routes inventory from: a
             * fixed Location, an inventory allocation policy, or one policy revision.
             */
            "inventory_routing_source"?: InventoryRoutingSource;
            /**
             * The terms and policy links checkouts started from this link show the buyer. Legal
             * settings for a checkout: whether buyers must accept terms, and links to the terms,
             * refund policy, shipping policy, and contract.
             */
            "legal"?: LegalSettings;
            /**
             * What the link sells. [] (Value): {@link PaymentLinkLineItem}. A line item on a
             * payment link.
             */
            "line_items"?: Array<PaymentLinkLineItem>;
            /**
             * Most payments the link accepts, counted by `completed_count`. Absent means no limit.
             * Once the limit is reached, resolving the link fails with a request error. It can't
             * be set below `completed_count`. Format: int32.
             */
            "max_completions"?: number;
            /**
             * ID of the merchant this resource belongs to. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id": string;
            /**
             * Stored caller-owned key-value data. See `MetadataInput` for key, value, and size
             * rules. Caller-owned key-value data stored on a resource. Keys starting with flint_
             * are reserved for Flint and are not returned. Writes follow the limits on
             * MetadataInput and MetadataPatchInput; maps written before those limits may not
             * satisfy them.
             */
            "metadata"?: MetadataMap;
            /** Name of the payment link. */
            "name": string;
            /**
             * Unique identifier for this payment link, prefixed `pl_`. Example:
             * "pl_01KEZF7C007WDMA5P9BPZ8J2AM".
             */
            "payment_link_id": string;
            /** What kind of link this is. Value enum: "standard", "donation", "event". */
            "payment_link_type"?: "standard" | "donation" | "event" | (string & {});
            /**
             * Payment options for checkouts started from this link. Payment settings for a
             * checkout: the enabled payment options and a note shown with payment.
             */
            "payments"?: CheckoutPaymentConfig;
            /**
             * Whether automatic promotions apply to checkouts started from this link and whether
             * buyers can enter promotion codes. Promotion settings for a checkout: whether
             * automatic promotions apply and whether the buyer can apply promotion codes.
             */
            "promotion_config"?: CheckoutPromotionConfig;
            /**
             * Where checkout sessions started from this payment link send the buyer after payment,
             * cancellation, or expiration. Where hosted checkout sends the buyer. Not allowed when
             * surface is headless; use payment_return_url.
             */
            "redirects"?: CheckoutRedirects;
            /**
             * RFC3339 timestamp after which the link stops starting checkouts and resolve fails
             * with `ACTION_NOT_ALLOWED` and reason `not_offered`. Unset means sales do not end on
             * their own, except that an event link without sales_end_at stops selling at
             * event_config.event_at. A checkout opened before the end can still start payment for
             * up to 15 minutes after it. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "sales_end_at"?: string;
            /**
             * RFC3339 timestamp when buyers can first start a checkout from this link. Stored to
             * nanosecond precision. Before it, resolve fails with ACTION_NOT_ALLOWED and reason
             * sales_not_started. Must be earlier than the link’s sales end, including the event
             * start when no explicit end is set. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "sales_start_at"?: string;
            /**
             * Present only with expand=sales_summary on GET /v1/payment-links or GET
             * /v1/payment-links/{payment_link_id}. Available to merchant callers, including
             * dashboard sessions and API keys with checkouts.payment_links.read. Uses the same
             * paid-order definition as the merchant sales summary. Paid-order sales totals for a
             * payment link, computed on request. Paid means the order's collection has completed.
             * Fully and partially refunded orders still count, and paid_totals reports the amount
             * collected before refunds. Each order counts once even if it has multiple checkout
             * sessions.
             */
            "sales_summary"?: PaymentLinkSalesSummary;
            /** Whether the link can start new checkouts. Value enum: "active", "inactive". */
            "status": "active" | "inactive" | (string & {});
            /**
             * Present only when `expand` includes `subscription_plan`; `null` when expanded and
             * there is no related subscription plan. anyOf[1] (Value): {@link
             * ExpandedSubscriptionPlanSummary}. A subscription plan's summary fields, including
             * name, billing interval, currency, and status, returned when the plan is expanded.
             * anyOf[2] (Value): null.
             */
            "subscription_plan"?: ((ExpandedSubscriptionPlanSummary) | (null));
            /**
             * ID of the subscription plan the link sells. Absent for a link that doesn't sell a
             * subscription. Example: "plan_01KEZF7C004CY5ZR33XST2AASV".
             */
            "subscription_plan_id"?: string;
            /**
             * Tax settings for checkouts started from this link. Whether tax is collected for a
             * checkout session or payment link.
             */
            "tax"?: CheckoutTaxConfig;
            /**
             * The title and colors for checkouts started from this link, over your branding
             * settings. Colors and title applied to a payment link's checkout page.
             */
            "theme"?: ThemeConfig;
            /**
             * Tip options for checkouts started from this link. Tip settings for a checkout:
             * whether tips are enabled, the percent or fixed amount options, the default tip, and
             * custom tips.
             */
            "tip"?: CheckoutTipConfig;
            /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
            "total_quantity_sold": number;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /** URL buyers open to use the link. */
            "url": string;
            /**
             * Current version of this resource's owned state. Send it as `expected_version` when
             * changing the resource to reject a stale write. Format: int64.
             */
            "version": number;
        };
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "payment_link.created". */
    "event_type"?: "payment_link.created";
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
 * The `payment_link.created` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type PaymentLinkCreatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.buyer_fields (Optional): {@link CheckoutBuyerFields}. What
     * checkout asks the buyer for. Each field you leave out uses your checkout settings.
     * object.checkout_session_expires_in_seconds (Optional): integer. Seconds each checkout
     * session the link starts stays open, from 60 to 86,400. Omit it to use your checkout
     * settings, or 24 hours. It doesn't end the link; use sales_end_at for that. Format: int64.
     * minimum: 60. maximum: 86400. object.completed_count (Required): integer. Number of paid
     * checkout sessions started from this link. Format: int32. object.created_at (Required):
     * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.custom_fields (Optional): Array of {@link PaymentLinkCustomField}. Questions buyers
     * answer before paying. Answers are recorded on the order and checkout session in
     * `custom_field_answers`. object.custom_fields[] (Value): {@link PaymentLinkCustomField}. A
     * custom field on a payment link that collects an answer from the buyer. object.custom_text
     * (Optional): {@link CheckoutCustomTextConfig}. Custom text for checkouts started from this
     * link. Custom text shown in checkout: an order summary message and a shipping address label.
     * object.delivery_method_ids (Required): Array of string. Delivery methods the link offers.
     * Empty when the link has none, and then its checkouts offer
     * settings.checkout.default_delivery_method_ids when the order has items to deliver.
     * object.delivery_method_ids[] (Value): string. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
     * object.description (Optional): string. Text about what the link sells, returned to buyers
     * when they open it. object.donation_max_amount_money (Optional): {@link MoneyValue}. Largest
     * amount a buyer can give on a donation link. Must be greater than zero and greater than or
     * equal to donation_min_amount_money. Omit on create for no maximum. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     * object.donation_min_amount_money (Optional): {@link MoneyValue}. Smallest amount a buyer can
     * give on a donation link. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code. object.donation_suggested_amount_money_options (Optional): Array of {@link
     * MoneyValue}. Amounts a donation link offers as one-tap choices.
     * object.donation_suggested_amount_money_options[] (Value): {@link MoneyValue}. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     * object.event_config (Optional): {@link PaymentLinkEventConfig}. Event details for an `event`
     * link: when and where it takes place and how many tickets it sells. Event settings on an
     * event payment link, such as its date, venue, ticket limit, and ticket emails.
     * object.external_reference_id (Optional): string. Caller-owned identifier for this resource
     * in an external system. maxLength: 255. Example: "warehouse-1842". object.image (Optional):
     * {@link ImageAttachment}. Image shown to buyers with the link. An image attached to a
     * resource, with its display properties and attachment metadata. object.inactive_message
     * (Optional): string. Message to show the buyer when the link is inactive.
     * object.inventory_routing_source (Optional): {@link InventoryRoutingSource}. The inventory
     * location or routing policy that supplies stock for the link's catalog lines. Absent when
     * using the implicit single-Location fallback, which is evaluated again on use. Where an
     * order, payment link, or reservation routes inventory from: a fixed Location, an inventory
     * allocation policy, or one policy revision. object.legal (Optional): {@link LegalSettings}.
     * The terms and policy links checkouts started from this link show the buyer. Legal settings
     * for a checkout: whether buyers must accept terms, and links to the terms, refund policy,
     * shipping policy, and contract. object.line_items (Optional): Array of {@link
     * PaymentLinkLineItem}. What the link sells. object.line_items[] (Value): {@link
     * PaymentLinkLineItem}. A line item on a payment link. object.max_completions (Optional):
     * integer. Most payments the link accepts, counted by `completed_count`. Absent means no
     * limit. Once the limit is reached, resolving the link fails with a request error. It can't be
     * set below `completed_count`. Format: int32. object.merchant_id (Required): string. ID of the
     * merchant this resource belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     * object.metadata (Optional): {@link MetadataMap}. Stored caller-owned key-value data. See
     * `MetadataInput` for key, value, and size rules. Caller-owned key-value data stored on a
     * resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
     * follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits
     * may not satisfy them. object.name (Required): string. Name of the payment link.
     * object.payment_link_id (Required): string. Unique identifier for this payment link, prefixed
     * `pl_`. Example: "pl_01KEZF7C007WDMA5P9BPZ8J2AM". object.payment_link_type (Optional):
     * string. What kind of link this is. Value enum: "standard", "donation", "event".
     * object.payments (Optional): {@link CheckoutPaymentConfig}. Payment options for checkouts
     * started from this link. Payment settings for a checkout: the enabled payment options and a
     * note shown with payment. object.promotion_config (Optional): {@link
     * CheckoutPromotionConfig}. Whether automatic promotions apply to checkouts started from this
     * link and whether buyers can enter promotion codes. Promotion settings for a checkout:
     * whether automatic promotions apply and whether the buyer can apply promotion codes.
     * object.redirects (Optional): {@link CheckoutRedirects}. Where checkout sessions started from
     * this payment link send the buyer after payment, cancellation, or expiration. Where hosted
     * checkout sends the buyer. Not allowed when surface is headless; use payment_return_url.
     * object.sales_end_at (Optional): string. RFC3339 timestamp after which the link stops
     * starting checkouts and resolve fails with `ACTION_NOT_ALLOWED` and reason `not_offered`.
     * Unset means sales do not end on their own, except that an event link without sales_end_at
     * stops selling at event_config.event_at. A checkout opened before the end can still start
     * payment for up to 15 minutes after it. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.sales_start_at (Optional): string. RFC3339 timestamp when buyers can first start a
     * checkout from this link. Stored to nanosecond precision. Before it, resolve fails with
     * ACTION_NOT_ALLOWED and reason sales_not_started. Must be earlier than the link’s sales end,
     * including the event start when no explicit end is set. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.sales_summary (Optional): {@link PaymentLinkSalesSummary}.
     * Present only with expand=sales_summary on GET /v1/payment-links or GET
     * /v1/payment-links/{payment_link_id}. Available to merchant callers, including dashboard
     * sessions and API keys with checkouts.payment_links.read. Uses the same paid-order definition
     * as the merchant sales summary. Paid-order sales totals for a payment link, computed on
     * request. Paid means the order's collection has completed. Fully and partially refunded
     * orders still count, and paid_totals reports the amount collected before refunds. Each order
     * counts once even if it has multiple checkout sessions. object.status (Required): string.
     * Whether the link can start new checkouts. Value enum: "active", "inactive".
     * object.subscription_plan (Optional): {@link ExpandedSubscriptionPlanSummary} or null.
     * Present only when `expand` includes `subscription_plan`; `null` when expanded and there is
     * no related subscription plan. object.subscription_plan.anyOf[1] (Value): {@link
     * ExpandedSubscriptionPlanSummary}. A subscription plan's summary fields, including name,
     * billing interval, currency, and status, returned when the plan is expanded.
     * object.subscription_plan.anyOf[2] (Value): null. object.subscription_plan_id (Optional):
     * string. ID of the subscription plan the link sells. Absent for a link that doesn't sell a
     * subscription. Example: "plan_01KEZF7C004CY5ZR33XST2AASV". object.tax (Optional): {@link
     * CheckoutTaxConfig}. Tax settings for checkouts started from this link. Whether tax is
     * collected for a checkout session or payment link. object.theme (Optional): {@link
     * ThemeConfig}. The title and colors for checkouts started from this link, over your branding
     * settings. Colors and title applied to a payment link's checkout page. object.tip (Optional):
     * {@link CheckoutTipConfig}. Tip options for checkouts started from this link. Tip settings
     * for a checkout: whether tips are enabled, the percent or fixed amount options, the default
     * tip, and custom tips. object.total_quantity_sold (Required): integer. Whole-number quantity;
     * fractional quantities are not supported. Format: int32. object.updated_at (Required):
     * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.url
     * (Required): string. URL buyers open to use the link. object.version (Required): integer.
     * Current version of this resource's owned state. Send it as `expected_version` when changing
     * the resource to reject a stale write. Format: int64.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * buyer_fields (Optional): {@link CheckoutBuyerFields}. What checkout asks the buyer for.
         * Each field you leave out uses your checkout settings.
         * checkout_session_expires_in_seconds (Optional): integer. Seconds each checkout session
         * the link starts stays open, from 60 to 86,400. Omit it to use your checkout settings, or
         * 24 hours. It doesn't end the link; use sales_end_at for that. Format: int64. minimum:
         * 60. maximum: 86400. completed_count (Required): integer. Number of paid checkout
         * sessions started from this link. Format: int32. created_at (Required): string. RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". custom_fields (Optional):
         * Array of {@link PaymentLinkCustomField}. Questions buyers answer before paying. Answers
         * are recorded on the order and checkout session in `custom_field_answers`.
         * custom_fields[] (Value): {@link PaymentLinkCustomField}. A custom field on a payment
         * link that collects an answer from the buyer. custom_text (Optional): {@link
         * CheckoutCustomTextConfig}. Custom text for checkouts started from this link. Custom text
         * shown in checkout: an order summary message and a shipping address label.
         * delivery_method_ids (Required): Array of string. Delivery methods the link offers. Empty
         * when the link has none, and then its checkouts offer
         * settings.checkout.default_delivery_method_ids when the order has items to deliver.
         * delivery_method_ids[] (Value): string. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
         * description (Optional): string. Text about what the link sells, returned to buyers when
         * they open it. donation_max_amount_money (Optional): {@link MoneyValue}. Largest amount a
         * buyer can give on a donation link. Must be greater than zero and greater than or equal
         * to donation_min_amount_money. Omit on create for no maximum. Monetary amount represented
         * as integer minor units plus an ISO 4217 currency code. donation_min_amount_money
         * (Optional): {@link MoneyValue}. Smallest amount a buyer can give on a donation link.
         * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
         * donation_suggested_amount_money_options (Optional): Array of {@link MoneyValue}. Amounts
         * a donation link offers as one-tap choices. donation_suggested_amount_money_options[]
         * (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus an
         * ISO 4217 currency code. event_config (Optional): {@link PaymentLinkEventConfig}. Event
         * details for an `event` link: when and where it takes place and how many tickets it
         * sells. Event settings on an event payment link, such as its date, venue, ticket limit,
         * and ticket emails. external_reference_id (Optional): string. Caller-owned identifier for
         * this resource in an external system. maxLength: 255. Example: "warehouse-1842". image
         * (Optional): {@link ImageAttachment}. Image shown to buyers with the link. An image
         * attached to a resource, with its display properties and attachment metadata.
         * inactive_message (Optional): string. Message to show the buyer when the link is
         * inactive. inventory_routing_source (Optional): {@link InventoryRoutingSource}. The
         * inventory location or routing policy that supplies stock for the link's catalog lines.
         * Absent when using the implicit single-Location fallback, which is evaluated again on
         * use. Where an order, payment link, or reservation routes inventory from: a fixed
         * Location, an inventory allocation policy, or one policy revision. legal (Optional):
         * {@link LegalSettings}. The terms and policy links checkouts started from this link show
         * the buyer. Legal settings for a checkout: whether buyers must accept terms, and links to
         * the terms, refund policy, shipping policy, and contract. line_items (Optional): Array of
         * {@link PaymentLinkLineItem}. What the link sells. line_items[] (Value): {@link
         * PaymentLinkLineItem}. A line item on a payment link. max_completions (Optional):
         * integer. Most payments the link accepts, counted by `completed_count`. Absent means no
         * limit. Once the limit is reached, resolving the link fails with a request error. It
         * can't be set below `completed_count`. Format: int32. merchant_id (Required): string. ID
         * of the merchant this resource belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
         * metadata (Optional): {@link MetadataMap}. Stored caller-owned key-value data. See
         * `MetadataInput` for key, value, and size rules. Caller-owned key-value data stored on a
         * resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
         * follow the limits on MetadataInput and MetadataPatchInput; maps written before those
         * limits may not satisfy them. name (Required): string. Name of the payment link.
         * payment_link_id (Required): string. Unique identifier for this payment link, prefixed
         * `pl_`. Example: "pl_01KEZF7C007WDMA5P9BPZ8J2AM". payment_link_type (Optional): string.
         * What kind of link this is. Value enum: "standard", "donation", "event". payments
         * (Optional): {@link CheckoutPaymentConfig}. Payment options for checkouts started from
         * this link. Payment settings for a checkout: the enabled payment options and a note shown
         * with payment. promotion_config (Optional): {@link CheckoutPromotionConfig}. Whether
         * automatic promotions apply to checkouts started from this link and whether buyers can
         * enter promotion codes. Promotion settings for a checkout: whether automatic promotions
         * apply and whether the buyer can apply promotion codes. redirects (Optional): {@link
         * CheckoutRedirects}. Where checkout sessions started from this payment link send the
         * buyer after payment, cancellation, or expiration. Where hosted checkout sends the buyer.
         * Not allowed when surface is headless; use payment_return_url. sales_end_at (Optional):
         * string. RFC3339 timestamp after which the link stops starting checkouts and resolve
         * fails with `ACTION_NOT_ALLOWED` and reason `not_offered`. Unset means sales do not end
         * on their own, except that an event link without sales_end_at stops selling at
         * event_config.event_at. A checkout opened before the end can still start payment for up
         * to 15 minutes after it. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * sales_start_at (Optional): string. RFC3339 timestamp when buyers can first start a
         * checkout from this link. Stored to nanosecond precision. Before it, resolve fails with
         * ACTION_NOT_ALLOWED and reason sales_not_started. Must be earlier than the link’s sales
         * end, including the event start when no explicit end is set. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". sales_summary (Optional): {@link PaymentLinkSalesSummary}.
         * Present only with expand=sales_summary on GET /v1/payment-links or GET
         * /v1/payment-links/{payment_link_id}. Available to merchant callers, including dashboard
         * sessions and API keys with checkouts.payment_links.read. Uses the same paid-order
         * definition as the merchant sales summary. Paid-order sales totals for a payment link,
         * computed on request. Paid means the order's collection has completed. Fully and
         * partially refunded orders still count, and paid_totals reports the amount collected
         * before refunds. Each order counts once even if it has multiple checkout sessions. status
         * (Required): string. Whether the link can start new checkouts. Value enum: "active",
         * "inactive". subscription_plan (Optional): {@link ExpandedSubscriptionPlanSummary} or
         * null. Present only when `expand` includes `subscription_plan`; `null` when expanded and
         * there is no related subscription plan. subscription_plan.anyOf[1] (Value): {@link
         * ExpandedSubscriptionPlanSummary}. A subscription plan's summary fields, including name,
         * billing interval, currency, and status, returned when the plan is expanded.
         * subscription_plan.anyOf[2] (Value): null. subscription_plan_id (Optional): string. ID of
         * the subscription plan the link sells. Absent for a link that doesn't sell a
         * subscription. Example: "plan_01KEZF7C004CY5ZR33XST2AASV". tax (Optional): {@link
         * CheckoutTaxConfig}. Tax settings for checkouts started from this link. Whether tax is
         * collected for a checkout session or payment link. theme (Optional): {@link ThemeConfig}.
         * The title and colors for checkouts started from this link, over your branding settings.
         * Colors and title applied to a payment link's checkout page. tip (Optional): {@link
         * CheckoutTipConfig}. Tip options for checkouts started from this link. Tip settings for a
         * checkout: whether tips are enabled, the percent or fixed amount options, the default
         * tip, and custom tips. total_quantity_sold (Required): integer. Whole-number quantity;
         * fractional quantities are not supported. Format: int32. updated_at (Required): string.
         * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". url (Required):
         * string. URL buyers open to use the link. version (Required): integer. Current version of
         * this resource's owned state. Send it as `expected_version` when changing the resource to
         * reject a stale write. Format: int64.
         */
        "object": {
            /**
             * What checkout asks the buyer for. Each field you leave out uses your checkout
             * settings.
             */
            "buyer_fields"?: CheckoutBuyerFields;
            /**
             * Seconds each checkout session the link starts stays open, from 60 to 86,400. Omit it
             * to use your checkout settings, or 24 hours. It doesn't end the link; use
             * sales_end_at for that. Format: int64. minimum: 60. maximum: 86400.
             */
            "checkout_session_expires_in_seconds"?: number;
            /** Number of paid checkout sessions started from this link. Format: int32. */
            "completed_count": number;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Questions buyers answer before paying. Answers are recorded on the order and
             * checkout session in `custom_field_answers`. [] (Value): {@link
             * PaymentLinkCustomField}. A custom field on a payment link that collects an answer
             * from the buyer.
             */
            "custom_fields"?: Array<PaymentLinkCustomField>;
            /**
             * Custom text for checkouts started from this link. Custom text shown in checkout: an
             * order summary message and a shipping address label.
             */
            "custom_text"?: CheckoutCustomTextConfig;
            /**
             * Delivery methods the link offers. Empty when the link has none, and then its
             * checkouts offer settings.checkout.default_delivery_method_ids when the order has
             * items to deliver. [] (Value): string. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
             */
            "delivery_method_ids": Array<string>;
            /** Text about what the link sells, returned to buyers when they open it. */
            "description"?: string;
            /**
             * Largest amount a buyer can give on a donation link. Must be greater than zero and
             * greater than or equal to donation_min_amount_money. Omit on create for no maximum.
             * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
             */
            "donation_max_amount_money"?: MoneyValue;
            /**
             * Smallest amount a buyer can give on a donation link. Monetary amount represented as
             * integer minor units plus an ISO 4217 currency code.
             */
            "donation_min_amount_money"?: MoneyValue;
            /**
             * Amounts a donation link offers as one-tap choices. [] (Value): {@link MoneyValue}.
             * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
             */
            "donation_suggested_amount_money_options"?: Array<MoneyValue>;
            /**
             * Event details for an `event` link: when and where it takes place and how many
             * tickets it sells. Event settings on an event payment link, such as its date, venue,
             * ticket limit, and ticket emails.
             */
            "event_config"?: PaymentLinkEventConfig;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Image shown to buyers with the link. An image attached to a resource, with its
             * display properties and attachment metadata.
             */
            "image"?: ImageAttachment;
            /** Message to show the buyer when the link is inactive. */
            "inactive_message"?: string;
            /**
             * The inventory location or routing policy that supplies stock for the link's catalog
             * lines. Absent when using the implicit single-Location fallback, which is evaluated
             * again on use. Where an order, payment link, or reservation routes inventory from: a
             * fixed Location, an inventory allocation policy, or one policy revision.
             */
            "inventory_routing_source"?: InventoryRoutingSource;
            /**
             * The terms and policy links checkouts started from this link show the buyer. Legal
             * settings for a checkout: whether buyers must accept terms, and links to the terms,
             * refund policy, shipping policy, and contract.
             */
            "legal"?: LegalSettings;
            /**
             * What the link sells. [] (Value): {@link PaymentLinkLineItem}. A line item on a
             * payment link.
             */
            "line_items"?: Array<PaymentLinkLineItem>;
            /**
             * Most payments the link accepts, counted by `completed_count`. Absent means no limit.
             * Once the limit is reached, resolving the link fails with a request error. It can't
             * be set below `completed_count`. Format: int32.
             */
            "max_completions"?: number;
            /**
             * ID of the merchant this resource belongs to. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id": string;
            /**
             * Stored caller-owned key-value data. See `MetadataInput` for key, value, and size
             * rules. Caller-owned key-value data stored on a resource. Keys starting with flint_
             * are reserved for Flint and are not returned. Writes follow the limits on
             * MetadataInput and MetadataPatchInput; maps written before those limits may not
             * satisfy them.
             */
            "metadata"?: MetadataMap;
            /** Name of the payment link. */
            "name": string;
            /**
             * Unique identifier for this payment link, prefixed `pl_`. Example:
             * "pl_01KEZF7C007WDMA5P9BPZ8J2AM".
             */
            "payment_link_id": string;
            /** What kind of link this is. Value enum: "standard", "donation", "event". */
            "payment_link_type"?: "standard" | "donation" | "event" | (string & {});
            /**
             * Payment options for checkouts started from this link. Payment settings for a
             * checkout: the enabled payment options and a note shown with payment.
             */
            "payments"?: CheckoutPaymentConfig;
            /**
             * Whether automatic promotions apply to checkouts started from this link and whether
             * buyers can enter promotion codes. Promotion settings for a checkout: whether
             * automatic promotions apply and whether the buyer can apply promotion codes.
             */
            "promotion_config"?: CheckoutPromotionConfig;
            /**
             * Where checkout sessions started from this payment link send the buyer after payment,
             * cancellation, or expiration. Where hosted checkout sends the buyer. Not allowed when
             * surface is headless; use payment_return_url.
             */
            "redirects"?: CheckoutRedirects;
            /**
             * RFC3339 timestamp after which the link stops starting checkouts and resolve fails
             * with `ACTION_NOT_ALLOWED` and reason `not_offered`. Unset means sales do not end on
             * their own, except that an event link without sales_end_at stops selling at
             * event_config.event_at. A checkout opened before the end can still start payment for
             * up to 15 minutes after it. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "sales_end_at"?: string;
            /**
             * RFC3339 timestamp when buyers can first start a checkout from this link. Stored to
             * nanosecond precision. Before it, resolve fails with ACTION_NOT_ALLOWED and reason
             * sales_not_started. Must be earlier than the link’s sales end, including the event
             * start when no explicit end is set. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "sales_start_at"?: string;
            /**
             * Present only with expand=sales_summary on GET /v1/payment-links or GET
             * /v1/payment-links/{payment_link_id}. Available to merchant callers, including
             * dashboard sessions and API keys with checkouts.payment_links.read. Uses the same
             * paid-order definition as the merchant sales summary. Paid-order sales totals for a
             * payment link, computed on request. Paid means the order's collection has completed.
             * Fully and partially refunded orders still count, and paid_totals reports the amount
             * collected before refunds. Each order counts once even if it has multiple checkout
             * sessions.
             */
            "sales_summary"?: PaymentLinkSalesSummary;
            /** Whether the link can start new checkouts. Value enum: "active", "inactive". */
            "status": "active" | "inactive" | (string & {});
            /**
             * Present only when `expand` includes `subscription_plan`; `null` when expanded and
             * there is no related subscription plan. anyOf[1] (Value): {@link
             * ExpandedSubscriptionPlanSummary}. A subscription plan's summary fields, including
             * name, billing interval, currency, and status, returned when the plan is expanded.
             * anyOf[2] (Value): null.
             */
            "subscription_plan"?: ((ExpandedSubscriptionPlanSummary) | (null));
            /**
             * ID of the subscription plan the link sells. Absent for a link that doesn't sell a
             * subscription. Example: "plan_01KEZF7C004CY5ZR33XST2AASV".
             */
            "subscription_plan_id"?: string;
            /**
             * Tax settings for checkouts started from this link. Whether tax is collected for a
             * checkout session or payment link.
             */
            "tax"?: CheckoutTaxConfig;
            /**
             * The title and colors for checkouts started from this link, over your branding
             * settings. Colors and title applied to a payment link's checkout page.
             */
            "theme"?: ThemeConfig;
            /**
             * Tip options for checkouts started from this link. Tip settings for a checkout:
             * whether tips are enabled, the percent or fixed amount options, the default tip, and
             * custom tips.
             */
            "tip"?: CheckoutTipConfig;
            /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
            "total_quantity_sold": number;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /** URL buyers open to use the link. */
            "url": string;
            /**
             * Current version of this resource's owned state. Send it as `expected_version` when
             * changing the resource to reject a stale write. Format: int64.
             */
            "version": number;
        };
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "payment_link.created". */
    "event_type"?: "payment_link.created";
});
/** A custom field on a payment link that collects an answer from the buyer. */
export type PaymentLinkCustomField = {
    /**
     * What kind of answer the field collects. Value enum: "text", "dropdown", "checkbox",
     * "textarea".
     */
    "custom_field_type": "text" | "dropdown" | "checkbox" | "textarea" | (string & {});
    /**
     * Unique custom field key, without leading or trailing whitespace. Each answer records it as
     * `custom_field_answers[].key`. minLength: 1. maxLength: 243.
     */
    "key": string;
    /** Question shown to the buyer. */
    "label": string;
    /**
     * Maximum answer length for text and textarea fields, counted in Unicode code points. Defaults
     * to 255 for text and 1000 for textarea when omitted. Format: int32. minimum: 1. maximum:
     * 4096.
     */
    "max_length"?: number;
    /**
     * Dropdown choices. Dropdown fields require at least one option. Options must not have leading
     * or trailing whitespace. [] (Value): string. maxLength: 4096.
     */
    "options"?: Array<string>;
    /**
     * Unique identifier for this payment link custom field, prefixed `plcf_`. Example:
     * "plcf_01KEZF7C00JBQMP98WBXZA3RHS".
     */
    "payment_link_custom_field_id": string;
    /** Hint text shown inside the empty field. */
    "placeholder"?: string;
    /** Display order among the link's custom fields. Lower numbers come first. Format: int32. */
    "position"?: number;
    /** Whether the buyer must answer before paying. */
    "required"?: boolean;
};
/**
 * A custom field in a payment link update. Include its ID to change an existing field, or omit the
 * ID to add a new one.
 */
export type PaymentLinkCustomFieldPatchRequest = {
    /**
     * What kind of answer the field collects. Value enum: "text", "dropdown", "checkbox",
     * "textarea".
     */
    "custom_field_type": "text" | "dropdown" | "checkbox" | "textarea" | (string & {});
    /**
     * Unique custom field key, without leading or trailing whitespace. Each answer records it as
     * `custom_field_answers[].key`. minLength: 1. maxLength: 243.
     */
    "key": string;
    /** Question shown to the buyer. minLength: 1. maxLength: 255. */
    "label": string;
    /**
     * Maximum answer length for text and textarea fields, counted in Unicode code points. Defaults
     * to 255 for text and 1000 for textarea when omitted. Format: int32. minimum: 1. maximum:
     * 4096.
     */
    "max_length"?: number;
    /**
     * Dropdown choices. Dropdown fields require at least one option. Options must not have leading
     * or trailing whitespace. [] (Value): string. minLength: 1. maxLength: 4096.
     */
    "options"?: Array<string>;
    /**
     * Stable ID of an existing custom field. Omit it to create a new custom field. minLength: 1.
     * Example: "plcf_01KEZF7C00JBQMP98WBXZA3RHS".
     */
    "payment_link_custom_field_id"?: string;
    /** Hint text shown inside the empty field. minLength: 1. maxLength: 500. */
    "placeholder"?: string;
    /** Display order among the link's custom fields. Lower numbers come first. Format: int32. */
    "position"?: number;
    /** Whether the buyer must answer before paying. */
    "required"?: boolean;
};
/**
 * A custom field in a payment link update. Include its ID to change an existing field, or omit the
 * ID to add a new one.
 */
export type PaymentLinkCustomFieldPatchRequestInput = {
    /**
     * What kind of answer the field collects. Value enum: "text", "dropdown", "checkbox",
     * "textarea".
     */
    "custom_field_type": "text" | "dropdown" | "checkbox" | "textarea";
    /**
     * Unique custom field key, without leading or trailing whitespace. Each answer records it as
     * `custom_field_answers[].key`. minLength: 1. maxLength: 243.
     */
    "key": string;
    /** Question shown to the buyer. minLength: 1. maxLength: 255. */
    "label": string;
    /**
     * Maximum answer length for text and textarea fields, counted in Unicode code points. Defaults
     * to 255 for text and 1000 for textarea when omitted. Format: int32. minimum: 1. maximum:
     * 4096.
     */
    "max_length"?: number;
    /**
     * Dropdown choices. Dropdown fields require at least one option. Options must not have leading
     * or trailing whitespace. [] (Value): string. minLength: 1. maxLength: 4096.
     */
    "options"?: Array<string>;
    /**
     * Stable ID of an existing custom field. Omit it to create a new custom field. minLength: 1.
     * Example: "plcf_01KEZF7C00JBQMP98WBXZA3RHS".
     */
    "payment_link_custom_field_id"?: string;
    /** Hint text shown inside the empty field. minLength: 1. maxLength: 500. */
    "placeholder"?: string;
    /** Display order among the link's custom fields. Lower numbers come first. Format: int32. */
    "position"?: number;
    /** Whether the buyer must answer before paying. */
    "required"?: boolean;
};
export type PaymentLinkCustomFieldPreviousAttributes = {
    /**
     * What kind of answer the field collects. Value enum: "text", "dropdown", "checkbox",
     * "textarea". anyOf[1] (Value): string. What kind of answer the field collects. Value enum:
     * "text", "dropdown", "checkbox", "textarea". anyOf[2] (Value): null.
     */
    "custom_field_type"?: (("text" | "dropdown" | "checkbox" | "textarea" | (string & {})) | (null));
    /**
     * Unique custom field key, without leading or trailing whitespace. Each answer records it as
     * `custom_field_answers[].key`. anyOf[1] (Value): string. Unique custom field key, without
     * leading or trailing whitespace. Each answer records it as `custom_field_answers[].key`.
     * minLength: 1. maxLength: 243. anyOf[2] (Value): null.
     */
    "key"?: ((string) | (null));
    /**
     * Question shown to the buyer. anyOf[1] (Value): string. Question shown to the buyer. anyOf[2]
     * (Value): null.
     */
    "label"?: ((string) | (null));
    /**
     * Maximum answer length for text and textarea fields, counted in Unicode code points. Defaults
     * to 255 for text and 1000 for textarea when omitted. anyOf[1] (Value): integer. Maximum
     * answer length for text and textarea fields, counted in Unicode code points. Defaults to 255
     * for text and 1000 for textarea when omitted. Format: int32. minimum: 1. maximum: 4096.
     * anyOf[2] (Value): null.
     */
    "max_length"?: ((number) | (null));
    /**
     * Dropdown choices. Dropdown fields require at least one option. Options must not have leading
     * or trailing whitespace. anyOf[1] (Value): Array of string. Dropdown choices. Dropdown fields
     * require at least one option. Options must not have leading or trailing whitespace.
     * anyOf[1][] (Value): string. maxLength: 4096. anyOf[2] (Value): null.
     */
    "options"?: ((Array<string>) | (null));
    /**
     * Unique identifier for this payment link custom field, prefixed `plcf_`. anyOf[1] (Value):
     * string. Unique identifier for this payment link custom field, prefixed `plcf_`. Example:
     * "plcf_01KEZF7C00JBQMP98WBXZA3RHS". anyOf[2] (Value): null.
     */
    "payment_link_custom_field_id"?: ((string) | (null));
    /**
     * Hint text shown inside the empty field. anyOf[1] (Value): string. Hint text shown inside the
     * empty field. anyOf[2] (Value): null.
     */
    "placeholder"?: ((string) | (null));
    /**
     * Display order among the link's custom fields. Lower numbers come first. anyOf[1] (Value):
     * integer. Display order among the link's custom fields. Lower numbers come first. Format:
     * int32. anyOf[2] (Value): null.
     */
    "position"?: ((number) | (null));
    /**
     * Whether the buyer must answer before paying. anyOf[1] (Value): boolean. Whether the buyer
     * must answer before paying. anyOf[2] (Value): null.
     */
    "required"?: ((boolean) | (null));
};
/** A custom field you add to a payment link when creating it. */
export type PaymentLinkCustomFieldRequest = {
    /**
     * What kind of answer the field collects. Value enum: "text", "dropdown", "checkbox",
     * "textarea".
     */
    "custom_field_type": "text" | "dropdown" | "checkbox" | "textarea" | (string & {});
    /**
     * Unique custom field key, without leading or trailing whitespace. Each answer records it as
     * `custom_field_answers[].key`. minLength: 1. maxLength: 243.
     */
    "key": string;
    /** Question shown to the buyer. minLength: 1. maxLength: 255. */
    "label": string;
    /**
     * Maximum answer length for text and textarea fields, counted in Unicode code points. Defaults
     * to 255 for text and 1000 for textarea when omitted. Format: int32. minimum: 1. maximum:
     * 4096.
     */
    "max_length"?: number;
    /**
     * Dropdown choices. Dropdown fields require at least one option. Options must not have leading
     * or trailing whitespace. [] (Value): string. minLength: 1. maxLength: 4096.
     */
    "options"?: Array<string>;
    /** Hint text shown inside the empty field. minLength: 1. maxLength: 500. */
    "placeholder"?: string;
    /** Display order among the link's custom fields. Lower numbers come first. Format: int32. */
    "position"?: number;
    /** Whether the buyer must answer before paying. */
    "required"?: boolean;
};
/** A custom field you add to a payment link when creating it. */
export type PaymentLinkCustomFieldRequestInput = {
    /**
     * What kind of answer the field collects. Value enum: "text", "dropdown", "checkbox",
     * "textarea".
     */
    "custom_field_type": "text" | "dropdown" | "checkbox" | "textarea";
    /**
     * Unique custom field key, without leading or trailing whitespace. Each answer records it as
     * `custom_field_answers[].key`. minLength: 1. maxLength: 243.
     */
    "key": string;
    /** Question shown to the buyer. minLength: 1. maxLength: 255. */
    "label": string;
    /**
     * Maximum answer length for text and textarea fields, counted in Unicode code points. Defaults
     * to 255 for text and 1000 for textarea when omitted. Format: int32. minimum: 1. maximum:
     * 4096.
     */
    "max_length"?: number;
    /**
     * Dropdown choices. Dropdown fields require at least one option. Options must not have leading
     * or trailing whitespace. [] (Value): string. minLength: 1. maxLength: 4096.
     */
    "options"?: Array<string>;
    /** Hint text shown inside the empty field. minLength: 1. maxLength: 500. */
    "placeholder"?: string;
    /** Display order among the link's custom fields. Lower numbers come first. Format: int32. */
    "position"?: number;
    /** Whether the buyer must answer before paying. */
    "required"?: boolean;
};
/**
 * Custom text shown on a payment link's checkout, such as the order summary message and shipping
 * address label.
 */
export type PaymentLinkCustomTextConfigInput = {
    /** Message shown near the order summary in checkout. minLength: 1. maxLength: 2048. */
    "order_summary_message"?: string;
    /** Label shown for the shipping address in checkout. minLength: 1. maxLength: 255. */
    "shipping_address_label"?: string;
};
/** Changes to a payment link's custom checkout text. Send null to clear a field. */
export type PaymentLinkCustomTextPatchRequest = {
    /** Send null to clear it. minLength: 1. maxLength: 2048. */
    "order_summary_message"?: string | null;
    /** Send null to clear it. minLength: 1. maxLength: 255. */
    "shipping_address_label"?: string | null;
};
/** Changes to a payment link's custom checkout text. Send null to clear a field. */
export type PaymentLinkCustomTextPatchRequestInput = PaymentLinkCustomTextPatchRequest;
/**
 * Event settings on an event payment link, such as its date, venue, ticket limit, and ticket
 * emails.
 */
export type PaymentLinkEventConfig = {
    /**
     * Whether resolving the link requires `attendee_names`, one name per ticket. Flint copies the
     * names onto the tickets when the order is paid. Defaults to false.
     */
    "collect_attendee_names"?: boolean;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "event_at"?: string;
    /**
     * Most tickets the event sells across all orders. `null` when the event has no ticket limit.
     * On update, send null to remove the limit; a value below the tickets already sold or held by
     * payments in progress fails with `LIMIT_EXCEEDED`. Whole-number quantity; fractional
     * quantities are not supported. Format: int32.
     */
    "max_total_quantity"?: number | null;
    /** Whether Flint emails tickets to buyers after they pay. */
    "send_ticket_emails"?: boolean;
    /**
     * Prefix for ticket numbers, up to 5 characters. It cannot change after the event has issued
     * tickets. maxLength: 5.
     */
    "ticket_prefix"?: string;
    /** IANA time zone of the event venue, used to show `event_at` as venue time. */
    "timezone"?: string;
    /** Where the event takes place. maxLength: 500. */
    "venue"?: string;
};
/** Changes to an event payment link's settings. Send null on a nullable field to clear it. */
export type PaymentLinkEventConfigPatchRequest = {
    /**
     * Whether resolving the link requires `attendee_names`, one name per ticket. Flint copies the
     * names onto the tickets when the order is paid. Defaults to false.
     */
    "collect_attendee_names"?: boolean;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z". */
    "event_at"?: string;
    /**
     * Most tickets the event sells across all orders. `null` when the event has no ticket limit.
     * On update, send null to remove the limit; a value below the tickets already sold or held by
     * payments in progress fails with `LIMIT_EXCEEDED`. Whole-number quantity; fractional
     * quantities are not supported. Format: int32.
     */
    "max_total_quantity"?: number | null;
    /** Whether Flint emails tickets to buyers after they pay. */
    "send_ticket_emails"?: boolean;
    /**
     * Prefix for ticket numbers, up to 5 characters. It cannot change after the event has issued
     * tickets. Send null to clear it. minLength: 1. maxLength: 5.
     */
    "ticket_prefix"?: string | null;
    /** IANA time zone of the event venue, used to show `event_at` as venue time. minLength: 1. */
    "timezone"?: string;
    /** Send null to clear it. minLength: 1. maxLength: 500. */
    "venue"?: string | null;
};
/** Changes to an event payment link's settings. Send null on a nullable field to clear it. */
export type PaymentLinkEventConfigPatchRequestInput = {
    /**
     * Whether resolving the link requires `attendee_names`, one name per ticket. Flint copies the
     * names onto the tickets when the order is paid. Defaults to false.
     */
    "collect_attendee_names"?: boolean;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z". */
    "event_at"?: string | globalThis.Date;
    /**
     * Most tickets the event sells across all orders. `null` when the event has no ticket limit.
     * On update, send null to remove the limit; a value below the tickets already sold or held by
     * payments in progress fails with `LIMIT_EXCEEDED`. Whole-number quantity; fractional
     * quantities are not supported. Format: int32.
     */
    "max_total_quantity"?: number | null;
    /** Whether Flint emails tickets to buyers after they pay. */
    "send_ticket_emails"?: boolean;
    /**
     * Prefix for ticket numbers, up to 5 characters. It cannot change after the event has issued
     * tickets. Send null to clear it. minLength: 1. maxLength: 5.
     */
    "ticket_prefix"?: string | null;
    /** IANA time zone of the event venue, used to show `event_at` as venue time. minLength: 1. */
    "timezone"?: string;
    /** Send null to clear it. minLength: 1. maxLength: 500. */
    "venue"?: string | null;
};
export type PaymentLinkEventConfigPreviousAttributes = {
    /**
     * Whether resolving the link requires `attendee_names`, one name per ticket. Flint copies the
     * names onto the tickets when the order is paid. Defaults to false. anyOf[1] (Value): boolean.
     * Whether resolving the link requires `attendee_names`, one name per ticket. Flint copies the
     * names onto the tickets when the order is paid. Defaults to false. anyOf[2] (Value): null.
     */
    "collect_attendee_names"?: ((boolean) | (null));
    /**
     * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     */
    "event_at"?: ((string) | (null));
    /**
     * Most tickets the event sells across all orders. `null` when the event has no ticket limit.
     * On update, send null to remove the limit; a value below the tickets already sold or held by
     * payments in progress fails with `LIMIT_EXCEEDED`. Whole-number quantity; fractional
     * quantities are not supported. anyOf[1] (Value): integer. Most tickets the event sells across
     * all orders. `null` when the event has no ticket limit. On update, send null to remove the
     * limit; a value below the tickets already sold or held by payments in progress fails with
     * `LIMIT_EXCEEDED`. Whole-number quantity; fractional quantities are not supported. Format:
     * int32. anyOf[2] (Value): null.
     */
    "max_total_quantity"?: ((number) | (null));
    /**
     * Whether Flint emails tickets to buyers after they pay. anyOf[1] (Value): boolean. Whether
     * Flint emails tickets to buyers after they pay. anyOf[2] (Value): null.
     */
    "send_ticket_emails"?: ((boolean) | (null));
    /**
     * Prefix for ticket numbers, up to 5 characters. It cannot change after the event has issued
     * tickets. anyOf[1] (Value): string. Prefix for ticket numbers, up to 5 characters. It cannot
     * change after the event has issued tickets. maxLength: 5. anyOf[2] (Value): null.
     */
    "ticket_prefix"?: ((string) | (null));
    /**
     * IANA time zone of the event venue, used to show `event_at` as venue time. anyOf[1] (Value):
     * string. IANA time zone of the event venue, used to show `event_at` as venue time. anyOf[2]
     * (Value): null.
     */
    "timezone"?: ((string) | (null));
    /**
     * Where the event takes place. anyOf[1] (Value): string. Where the event takes place.
     * maxLength: 500. anyOf[2] (Value): null.
     */
    "venue"?: ((string) | (null));
};
/** Event settings you supply when creating an event payment link. */
export type PaymentLinkEventConfigRequest = {
    /**
     * Whether resolving the link requires `attendee_names`, one name per ticket. Flint copies the
     * names onto the tickets when the order is paid. Defaults to false.
     */
    "collect_attendee_names"?: boolean;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z". */
    "event_at": string;
    /**
     * Most tickets the event sells across all orders. `null` when the event has no ticket limit.
     * On update, send null to remove the limit; a value below the tickets already sold or held by
     * payments in progress fails with `LIMIT_EXCEEDED`. Whole-number quantity; fractional
     * quantities are not supported. Format: int32.
     */
    "max_total_quantity"?: number | null;
    /** Whether Flint emails tickets to buyers after they pay. */
    "send_ticket_emails"?: boolean;
    /**
     * Prefix for ticket numbers, up to 5 characters. It cannot change after the event has issued
     * tickets. minLength: 1. maxLength: 5.
     */
    "ticket_prefix"?: string;
    /** IANA time zone of the event venue, used to show `event_at` as venue time. minLength: 1. */
    "timezone": string;
    /** Where the event takes place. minLength: 1. maxLength: 500. */
    "venue"?: string;
};
/** Event settings you supply when creating an event payment link. */
export type PaymentLinkEventConfigRequestInput = {
    /**
     * Whether resolving the link requires `attendee_names`, one name per ticket. Flint copies the
     * names onto the tickets when the order is paid. Defaults to false.
     */
    "collect_attendee_names"?: boolean;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z". */
    "event_at": string | globalThis.Date;
    /**
     * Most tickets the event sells across all orders. `null` when the event has no ticket limit.
     * On update, send null to remove the limit; a value below the tickets already sold or held by
     * payments in progress fails with `LIMIT_EXCEEDED`. Whole-number quantity; fractional
     * quantities are not supported. Format: int32.
     */
    "max_total_quantity"?: number | null;
    /** Whether Flint emails tickets to buyers after they pay. */
    "send_ticket_emails"?: boolean;
    /**
     * Prefix for ticket numbers, up to 5 characters. It cannot change after the event has issued
     * tickets. minLength: 1. maxLength: 5.
     */
    "ticket_prefix"?: string;
    /** IANA time zone of the event venue, used to show `event_at` as venue time. minLength: 1. */
    "timezone": string;
    /** Where the event takes place. minLength: 1. maxLength: 500. */
    "venue"?: string;
};
/**
 * Legal links on a payment link: contract, refund policy, shipping policy, and terms of service
 * URLs, and whether buyers must accept the terms.
 */
export type PaymentLinkLegalConfigInput = {
    /**
     * An `https://` URL of the contract the buyer agrees to, linked in checkout. minLength: 1.
     * maxLength: 2048.
     */
    "contract_url"?: string;
    /**
     * An `https://` URL of your refund policy, linked in checkout. minLength: 1. maxLength: 2048.
     */
    "refund_policy_url"?: string;
    /** Whether the buyer must accept the terms of service before paying. */
    "require_terms_of_service"?: boolean;
    /**
     * An `https://` URL of your shipping policy, linked in checkout. minLength: 1. maxLength:
     * 2048.
     */
    "shipping_policy_url"?: string;
    /**
     * An `https://` URL of your terms of service, linked in checkout. minLength: 1. maxLength:
     * 2048.
     */
    "terms_of_service_url"?: string;
};
/** Changes to a payment link's legal links and terms setting. Send null on a URL to clear it. */
export type PaymentLinkLegalPatchRequestInput = {
    /** Send null to clear it. minLength: 1. maxLength: 2048. */
    "contract_url"?: string | null;
    /** Send null to clear it. minLength: 1. maxLength: 2048. */
    "refund_policy_url"?: string | null;
    /** Whether the buyer must accept the terms of service before paying. */
    "require_terms_of_service"?: boolean;
    /** Send null to clear it. minLength: 1. maxLength: 2048. */
    "shipping_policy_url"?: string | null;
    /** Send null to clear it. minLength: 1. maxLength: 2048. */
    "terms_of_service_url"?: string | null;
};
/** A line item on a payment link. */
export type PaymentLinkLineItem = ({
    /** Whether the buyer can change the quantity in checkout. */
    "allow_quantity_adjustment"?: boolean;
    /** Whether the buyer sets the unit price. Only `custom_variable` lines allow it. */
    "allow_unit_price_adjustment"?: boolean;
    /**
     * ID of the catalog bundle a `bundle` line sells. Example: "bun_01KEZF7C00TQ6S76Z6CVQF5SVN".
     */
    "bundle_id"?: string;
    /**
     * Variant selected when the page opens and used at resolve when the buyer omits a selection.
     * Must be in variant_ids. Omit it to require a buyer selection. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "default_variant_id"?: string;
    /** Description of an ad hoc line item. */
    "description"?: string;
    /**
     * True when the referenced variant or bundle cannot be sold, or no listed variant in
     * variant_ids can be sold in the line currency. Always false on ad hoc line items.
     */
    "is_catalog_item_unavailable": boolean;
    /** Public event read: true when the tier or event has no capacity left. */
    "is_sold_out"?: boolean;
    /**
     * Keys the resolve override maps. Stable line item key used in checkout overrides. Must not
     * have leading or trailing whitespace. Assigned as line_item_1, line_item_2, and so on when
     * omitted, skipping numbers already used by explicit keys; retained for an existing line item
     * when omitted on update.
     */
    "key"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "max_quantity"?: number;
    /**
     * Optional whole-number admission capacity across all orders for an event tier; fractional
     * quantities are not supported. Must be at least 1 and cannot exceed
     * event_config.max_total_quantity when the event is capped. Omit for no tier cap; omitting it
     * in a line_items replacement removes an existing cap. Format: int32. minimum: 1.
     */
    "max_total_quantity"?: number;
    /**
     * Highest unit price the buyer can enter when `allow_unit_price_adjustment` is true. Must be
     * greater than zero and greater than or equal to min_unit_price_money. Omit for no maximum.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "max_unit_price_money"?: MoneyValue;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "min_quantity"?: number;
    /**
     * Lowest unit price the buyer can enter when `allow_unit_price_adjustment` is true. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "min_unit_price_money"?: MoneyValue;
    /** Name of an ad hoc line item. Catalog lines take the catalog name. */
    "name"?: string;
    /**
     * Unique identifier for this payment link line item, prefixed `plli_`. Example:
     * "plli_01KEZF7C004V7GVCCNMYYCBAJS".
     */
    "payment_link_line_item_id": string;
    /**
     * Parent catalog context only. The product that the variants in variant_ids belong to. Present
     * only on buyer choice lines; refused on input. Example: "prod_01KEZF7C00BVSHCNWVH528HB66".
     */
    "product_id"?: string;
    /**
     * Classification configured on a custom line for ACH debit. Null when unclassified or
     * catalog-backed; catalog lines get their product classification when checkout starts. Value
     * enum: "physical", "service", "fee", "digital", "gift_card", null.
     */
    "product_type": "physical" | "service" | "fee" | "digital" | "gift_card" | null | (string & {}) | null;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "quantity": number;
    /**
     * Public event read: whole-number admissions left after sales and payment holds; fractional
     * quantities are not supported. This quantity is bounded by both the tier and event caps.
     * Omitted when neither is capped. Format: int32.
     */
    "remaining_quantity"?: number;
    /**
     * Current catalog name of the referenced variant or bundle, or the product name for
     * variant_ids lines. A variant reads as the product name, plus the variant name when the
     * variant is a named option combination. This is the catalog value at read time, not a stored
     * snapshot: checkout resolves it again when a buyer opens the link. Absent on ad-hoc line
     * items and when the catalog object no longer exists.
     */
    "resolved_name"?: string;
    /**
     * Current lowest and highest catalog unit prices among listed variants that can be sold in the
     * line currency. Computed at read time, not stored. Omitted when no listed variant can be
     * sold. The lowest and highest unit prices across a product's variants.
     */
    "resolved_price_range"?: ProductPriceRange;
    /**
     * Current catalog unit price of the referenced variant or bundle. For a fixed variant this is
     * the base price that applies below the first quantity price break. This is the catalog value
     * at read time, not a stored snapshot: checkout resolves the price again when a buyer opens
     * the link, so the amount a buyer pays can differ. Absent on ad-hoc line items, variant_ids
     * lines, and when the catalog object no longer exists. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "resolved_unit_price_money"?: MoneyValue;
    /**
     * Unit prices offered as one-tap choices when the buyer sets the price. [] (Value): {@link
     * MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code.
     */
    "suggested_unit_price_money_options"?: Array<MoneyValue>;
    /**
     * Tax settings for an ad hoc line item. Catalog lines use the catalog's. A line item's tax
     * category and whether it is taxable.
     */
    "tax"?: OrderLineItemTax;
    /**
     * How the line item is defined. Value enum: "variant", "bundle", "custom_fixed",
     * "custom_variable".
     */
    "type": "variant" | "bundle" | "custom_fixed" | "custom_variable" | (string & {});
    /**
     * Price of one unit of a `custom_fixed` line item. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "unit_price_money"?: MoneyValue;
    /**
     * ID of the catalog variant a `variant` line sells. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id"?: string;
    /**
     * Variant IDs buyers may choose from, in the order offered. Contains 1 to 100 unique, active,
     * sellable variants of one product in one currency. Available only on standard payment links.
     * Mutually exclusive with variant_id, bundle_id, and ad hoc line item fields. minItems: 1.
     * maxItems: 100. uniqueItems: true. [] (Value): string. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     * Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_ids"?: Array<string>;
})
    & ((Exclude<PaymentLinkLineItemVariant & object, readonly unknown[]>)
    | (Exclude<PaymentLinkLineItemBundle & object, readonly unknown[]>)
    | (Exclude<PaymentLinkLineItemCustomFixed & object, readonly unknown[]>)
    | (Exclude<PaymentLinkLineItemCustomVariable & object, readonly unknown[]>)
    | (Record<string, unknown>));
/** A line item on a payment link. */
export type PaymentLinkLineItemBundle = ({
    /** Whether the buyer can change the quantity in checkout. */
    "allow_quantity_adjustment"?: boolean;
    /** Whether the buyer sets the unit price. Only `custom_variable` lines allow it. */
    "allow_unit_price_adjustment"?: boolean;
    /**
     * ID of the catalog bundle a `bundle` line sells. Example: "bun_01KEZF7C00TQ6S76Z6CVQF5SVN".
     */
    "bundle_id": string;
    /**
     * Variant selected when the page opens and used at resolve when the buyer omits a selection.
     * Must be in variant_ids. Omit it to require a buyer selection. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "default_variant_id"?: string;
    /** Description of an ad hoc line item. */
    "description"?: string;
    /**
     * True when the referenced variant or bundle cannot be sold, or no listed variant in
     * variant_ids can be sold in the line currency. Always false on ad hoc line items.
     */
    "is_catalog_item_unavailable": boolean;
    /** Public event read: true when the tier or event has no capacity left. */
    "is_sold_out"?: boolean;
    /**
     * Keys the resolve override maps. Stable line item key used in checkout overrides. Must not
     * have leading or trailing whitespace. Assigned as line_item_1, line_item_2, and so on when
     * omitted, skipping numbers already used by explicit keys; retained for an existing line item
     * when omitted on update.
     */
    "key"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "max_quantity"?: number;
    /**
     * Optional whole-number admission capacity across all orders for an event tier; fractional
     * quantities are not supported. Must be at least 1 and cannot exceed
     * event_config.max_total_quantity when the event is capped. Omit for no tier cap; omitting it
     * in a line_items replacement removes an existing cap. Format: int32. minimum: 1.
     */
    "max_total_quantity"?: number;
    /**
     * Highest unit price the buyer can enter when `allow_unit_price_adjustment` is true. Must be
     * greater than zero and greater than or equal to min_unit_price_money. Omit for no maximum.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "max_unit_price_money"?: MoneyValue;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "min_quantity"?: number;
    /**
     * Lowest unit price the buyer can enter when `allow_unit_price_adjustment` is true. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "min_unit_price_money"?: MoneyValue;
    /** Name of an ad hoc line item. Catalog lines take the catalog name. */
    "name"?: string;
    /**
     * Unique identifier for this payment link line item, prefixed `plli_`. Example:
     * "plli_01KEZF7C004V7GVCCNMYYCBAJS".
     */
    "payment_link_line_item_id": string;
    /**
     * Parent catalog context only. The product that the variants in variant_ids belong to. Present
     * only on buyer choice lines; refused on input. Example: "prod_01KEZF7C00BVSHCNWVH528HB66".
     */
    "product_id"?: string;
    /**
     * Classification configured on a custom line for ACH debit. Null when unclassified or
     * catalog-backed; catalog lines get their product classification when checkout starts. Value
     * enum: "physical", "service", "fee", "digital", "gift_card", null.
     */
    "product_type": "physical" | "service" | "fee" | "digital" | "gift_card" | null | (string & {}) | null;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "quantity": number;
    /**
     * Public event read: whole-number admissions left after sales and payment holds; fractional
     * quantities are not supported. This quantity is bounded by both the tier and event caps.
     * Omitted when neither is capped. Format: int32.
     */
    "remaining_quantity"?: number;
    /**
     * Current catalog name of the referenced variant or bundle, or the product name for
     * variant_ids lines. A variant reads as the product name, plus the variant name when the
     * variant is a named option combination. This is the catalog value at read time, not a stored
     * snapshot: checkout resolves it again when a buyer opens the link. Absent on ad-hoc line
     * items and when the catalog object no longer exists.
     */
    "resolved_name"?: string;
    /**
     * Current lowest and highest catalog unit prices among listed variants that can be sold in the
     * line currency. Computed at read time, not stored. Omitted when no listed variant can be
     * sold. The lowest and highest unit prices across a product's variants.
     */
    "resolved_price_range"?: ProductPriceRange;
    /**
     * Current catalog unit price of the referenced variant or bundle. For a fixed variant this is
     * the base price that applies below the first quantity price break. This is the catalog value
     * at read time, not a stored snapshot: checkout resolves the price again when a buyer opens
     * the link, so the amount a buyer pays can differ. Absent on ad-hoc line items, variant_ids
     * lines, and when the catalog object no longer exists. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "resolved_unit_price_money"?: MoneyValue;
    /**
     * Unit prices offered as one-tap choices when the buyer sets the price. [] (Value): {@link
     * MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code.
     */
    "suggested_unit_price_money_options"?: Array<MoneyValue>;
    /**
     * Tax settings for an ad hoc line item. Catalog lines use the catalog's. A line item's tax
     * category and whether it is taxable.
     */
    "tax"?: OrderLineItemTax;
    /** How the line item is defined. Value enum: "bundle". */
    "type": "bundle" | (string & {});
    /**
     * Price of one unit of a `custom_fixed` line item. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "unit_price_money"?: MoneyValue;
    /**
     * ID of the catalog variant a `variant` line sells. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id"?: string;
    /**
     * Variant IDs buyers may choose from, in the order offered. Contains 1 to 100 unique, active,
     * sellable variants of one product in one currency. Available only on standard payment links.
     * Mutually exclusive with variant_id, bundle_id, and ad hoc line item fields. minItems: 1.
     * maxItems: 100. uniqueItems: true. [] (Value): string. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     * Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_ids"?: Array<string>;
})
    & (({
    /** Value enum: "bundle". */
    "type": "bundle" | (string & {});
    /**
     * ID of the catalog bundle a `bundle` line sells. Example: "bun_01KEZF7C00TQ6S76Z6CVQF5SVN".
     */
    "bundle_id": string;
}));
export type PaymentLinkLineItemBundlePreviousAttributes = ({
    /**
     * Whether the buyer can change the quantity in checkout. anyOf[1] (Value): boolean. Whether
     * the buyer can change the quantity in checkout. anyOf[2] (Value): null.
     */
    "allow_quantity_adjustment"?: ((boolean) | (null));
    /**
     * Whether the buyer sets the unit price. Only `custom_variable` lines allow it. anyOf[1]
     * (Value): boolean. Whether the buyer sets the unit price. Only `custom_variable` lines allow
     * it. anyOf[2] (Value): null.
     */
    "allow_unit_price_adjustment"?: ((boolean) | (null));
    /**
     * ID of the catalog bundle a `bundle` line sells. anyOf[1] (Value): string. ID of the catalog
     * bundle a `bundle` line sells. Example: "bun_01KEZF7C00TQ6S76Z6CVQF5SVN". anyOf[2] (Value):
     * null.
     */
    "bundle_id"?: ((string) | (null));
    /**
     * Variant selected when the page opens and used at resolve when the buyer omits a selection.
     * Must be in variant_ids. Omit it to require a buyer selection. anyOf[1] (Value): string.
     * Variant selected when the page opens and used at resolve when the buyer omits a selection.
     * Must be in variant_ids. Omit it to require a buyer selection. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX". anyOf[2] (Value):
     * null.
     */
    "default_variant_id"?: ((string) | (null));
    /**
     * Description of an ad hoc line item. anyOf[1] (Value): string. Description of an ad hoc line
     * item. anyOf[2] (Value): null.
     */
    "description"?: ((string) | (null));
    /**
     * True when the referenced variant or bundle cannot be sold, or no listed variant in
     * variant_ids can be sold in the line currency. Always false on ad hoc line items. anyOf[1]
     * (Value): boolean. True when the referenced variant or bundle cannot be sold, or no listed
     * variant in variant_ids can be sold in the line currency. Always false on ad hoc line items.
     * anyOf[2] (Value): null.
     */
    "is_catalog_item_unavailable"?: ((boolean) | (null));
    /**
     * Public event read: true when the tier or event has no capacity left. anyOf[1] (Value):
     * boolean. Public event read: true when the tier or event has no capacity left. anyOf[2]
     * (Value): null.
     */
    "is_sold_out"?: ((boolean) | (null));
    /**
     * Keys the resolve override maps. Stable line item key used in checkout overrides. Must not
     * have leading or trailing whitespace. Assigned as line_item_1, line_item_2, and so on when
     * omitted, skipping numbers already used by explicit keys; retained for an existing line item
     * when omitted on update. anyOf[1] (Value): string. Keys the resolve override maps. Stable
     * line item key used in checkout overrides. Must not have leading or trailing whitespace.
     * Assigned as line_item_1, line_item_2, and so on when omitted, skipping numbers already used
     * by explicit keys; retained for an existing line item when omitted on update. anyOf[2]
     * (Value): null.
     */
    "key"?: ((string) | (null));
    /**
     * Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer.
     * Whole-number quantity; fractional quantities are not supported. Format: int32. anyOf[2]
     * (Value): null.
     */
    "max_quantity"?: ((number) | (null));
    /**
     * Optional whole-number admission capacity across all orders for an event tier; fractional
     * quantities are not supported. Must be at least 1 and cannot exceed
     * event_config.max_total_quantity when the event is capped. Omit for no tier cap; omitting it
     * in a line_items replacement removes an existing cap. anyOf[1] (Value): integer. Optional
     * whole-number admission capacity across all orders for an event tier; fractional quantities
     * are not supported. Must be at least 1 and cannot exceed event_config.max_total_quantity when
     * the event is capped. Omit for no tier cap; omitting it in a line_items replacement removes
     * an existing cap. Format: int32. minimum: 1. anyOf[2] (Value): null.
     */
    "max_total_quantity"?: ((number) | (null));
    /**
     * Highest unit price the buyer can enter when `allow_unit_price_adjustment` is true. Must be
     * greater than zero and greater than or equal to min_unit_price_money. Omit for no maximum.
     * anyOf[1] (Value): {@link MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "max_unit_price_money"?: ((MoneyValuePreviousAttributes) | (null));
    /**
     * Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer.
     * Whole-number quantity; fractional quantities are not supported. Format: int32. anyOf[2]
     * (Value): null.
     */
    "min_quantity"?: ((number) | (null));
    /**
     * Lowest unit price the buyer can enter when `allow_unit_price_adjustment` is true. anyOf[1]
     * (Value): {@link MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "min_unit_price_money"?: ((MoneyValuePreviousAttributes) | (null));
    /**
     * Name of an ad hoc line item. Catalog lines take the catalog name. anyOf[1] (Value): string.
     * Name of an ad hoc line item. Catalog lines take the catalog name. anyOf[2] (Value): null.
     */
    "name"?: ((string) | (null));
    /**
     * Unique identifier for this payment link line item, prefixed `plli_`. anyOf[1] (Value):
     * string. Unique identifier for this payment link line item, prefixed `plli_`. Example:
     * "plli_01KEZF7C004V7GVCCNMYYCBAJS". anyOf[2] (Value): null.
     */
    "payment_link_line_item_id"?: ((string) | (null));
    /**
     * Parent catalog context only. The product that the variants in variant_ids belong to. Present
     * only on buyer choice lines; refused on input. anyOf[1] (Value): string. Parent catalog
     * context only. The product that the variants in variant_ids belong to. Present only on buyer
     * choice lines; refused on input. Example: "prod_01KEZF7C00BVSHCNWVH528HB66". anyOf[2]
     * (Value): null.
     */
    "product_id"?: ((string) | (null));
    /**
     * Classification configured on a custom line for ACH debit. Null when unclassified or
     * catalog-backed; catalog lines get their product classification when checkout starts. Value
     * enum: "physical", "service", "fee", "digital", "gift_card", null. anyOf[1] (Value): string.
     * Classification configured on a custom line for ACH debit. Null when unclassified or
     * catalog-backed; catalog lines get their product classification when checkout starts. Value
     * enum: "physical", "service", "fee", "digital", "gift_card", null. anyOf[2] (Value): null.
     */
    "product_type"?: (("physical" | "service" | "fee" | "digital" | "gift_card" | null | (string & {})) | (null));
    /**
     * Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer.
     * Whole-number quantity; fractional quantities are not supported. Format: int32. anyOf[2]
     * (Value): null.
     */
    "quantity"?: ((number) | (null));
    /**
     * Public event read: whole-number admissions left after sales and payment holds; fractional
     * quantities are not supported. This quantity is bounded by both the tier and event caps.
     * Omitted when neither is capped. anyOf[1] (Value): integer. Public event read: whole-number
     * admissions left after sales and payment holds; fractional quantities are not supported. This
     * quantity is bounded by both the tier and event caps. Omitted when neither is capped. Format:
     * int32. anyOf[2] (Value): null.
     */
    "remaining_quantity"?: ((number) | (null));
    /**
     * Current catalog name of the referenced variant or bundle, or the product name for
     * variant_ids lines. A variant reads as the product name, plus the variant name when the
     * variant is a named option combination. This is the catalog value at read time, not a stored
     * snapshot: checkout resolves it again when a buyer opens the link. Absent on ad-hoc line
     * items and when the catalog object no longer exists. anyOf[1] (Value): string. Current
     * catalog name of the referenced variant or bundle, or the product name for variant_ids lines.
     * A variant reads as the product name, plus the variant name when the variant is a named
     * option combination. This is the catalog value at read time, not a stored snapshot: checkout
     * resolves it again when a buyer opens the link. Absent on ad-hoc line items and when the
     * catalog object no longer exists. anyOf[2] (Value): null.
     */
    "resolved_name"?: ((string) | (null));
    /**
     * Current lowest and highest catalog unit prices among listed variants that can be sold in the
     * line currency. Computed at read time, not stored. Omitted when no listed variant can be
     * sold. anyOf[1] (Value): {@link ProductPriceRangePreviousAttributes}. anyOf[2] (Value): null.
     */
    "resolved_price_range"?: ((ProductPriceRangePreviousAttributes) | (null));
    /**
     * Current catalog unit price of the referenced variant or bundle. For a fixed variant this is
     * the base price that applies below the first quantity price break. This is the catalog value
     * at read time, not a stored snapshot: checkout resolves the price again when a buyer opens
     * the link, so the amount a buyer pays can differ. Absent on ad-hoc line items, variant_ids
     * lines, and when the catalog object no longer exists. anyOf[1] (Value): {@link
     * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "resolved_unit_price_money"?: ((MoneyValuePreviousAttributes) | (null));
    /**
     * Unit prices offered as one-tap choices when the buyer sets the price. anyOf[1] (Value):
     * Array of {@link MoneyValuePreviousAttributes}. Unit prices offered as one-tap choices when
     * the buyer sets the price. anyOf[1][] (Value): {@link MoneyValuePreviousAttributes}. anyOf[2]
     * (Value): null.
     */
    "suggested_unit_price_money_options"?: ((Array<MoneyValuePreviousAttributes>) | (null));
    /**
     * Tax settings for an ad hoc line item. Catalog lines use the catalog's. anyOf[1] (Value):
     * {@link OrderLineItemTaxPreviousAttributes}. anyOf[2] (Value): null.
     */
    "tax"?: ((OrderLineItemTaxPreviousAttributes) | (null));
    /**
     * How the line item is defined. Value enum: "bundle". anyOf[1] (Value): string. How the line
     * item is defined. Value enum: "bundle". anyOf[2] (Value): null.
     */
    "type"?: (("bundle" | (string & {})) | (null));
    /**
     * Price of one unit of a `custom_fixed` line item. anyOf[1] (Value): {@link
     * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "unit_price_money"?: ((MoneyValuePreviousAttributes) | (null));
    /**
     * ID of the catalog variant a `variant` line sells. anyOf[1] (Value): string. ID of the
     * catalog variant a `variant` line sells. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX". anyOf[2]
     * (Value): null.
     */
    "variant_id"?: ((string) | (null));
    /**
     * Variant IDs buyers may choose from, in the order offered. Contains 1 to 100 unique, active,
     * sellable variants of one product in one currency. Available only on standard payment links.
     * Mutually exclusive with variant_id, bundle_id, and ad hoc line item fields. anyOf[1]
     * (Value): Array of string. Variant IDs buyers may choose from, in the order offered. Contains
     * 1 to 100 unique, active, sellable variants of one product in one currency. Available only on
     * standard payment links. Mutually exclusive with variant_id, bundle_id, and ad hoc line item
     * fields. minItems: 1. maxItems: 100. uniqueItems: true. anyOf[1][] (Value): string. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX". anyOf[2] (Value):
     * null.
     */
    "variant_ids"?: ((Array<string>) | (null));
})
    & ({
    /**
     * Value enum: "bundle". anyOf[1] (Value): string. Value enum: "bundle". anyOf[2] (Value):
     * null.
     */
    "type"?: (("bundle" | (string & {})) | (null));
});
/** A line item on a payment link. */
export type PaymentLinkLineItemCustomFixed = ({
    /** Whether the buyer can change the quantity in checkout. */
    "allow_quantity_adjustment"?: boolean;
    /** Whether the buyer sets the unit price. Only `custom_variable` lines allow it. */
    "allow_unit_price_adjustment"?: boolean;
    /**
     * ID of the catalog bundle a `bundle` line sells. Example: "bun_01KEZF7C00TQ6S76Z6CVQF5SVN".
     */
    "bundle_id"?: string;
    /**
     * Variant selected when the page opens and used at resolve when the buyer omits a selection.
     * Must be in variant_ids. Omit it to require a buyer selection. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "default_variant_id"?: string;
    /** Description of an ad hoc line item. */
    "description"?: string;
    /**
     * True when the referenced variant or bundle cannot be sold, or no listed variant in
     * variant_ids can be sold in the line currency. Always false on ad hoc line items.
     */
    "is_catalog_item_unavailable": boolean;
    /** Public event read: true when the tier or event has no capacity left. */
    "is_sold_out"?: boolean;
    /**
     * Keys the resolve override maps. Stable line item key used in checkout overrides. Must not
     * have leading or trailing whitespace. Assigned as line_item_1, line_item_2, and so on when
     * omitted, skipping numbers already used by explicit keys; retained for an existing line item
     * when omitted on update.
     */
    "key"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "max_quantity"?: number;
    /**
     * Optional whole-number admission capacity across all orders for an event tier; fractional
     * quantities are not supported. Must be at least 1 and cannot exceed
     * event_config.max_total_quantity when the event is capped. Omit for no tier cap; omitting it
     * in a line_items replacement removes an existing cap. Format: int32. minimum: 1.
     */
    "max_total_quantity"?: number;
    /**
     * Highest unit price the buyer can enter when `allow_unit_price_adjustment` is true. Must be
     * greater than zero and greater than or equal to min_unit_price_money. Omit for no maximum.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "max_unit_price_money"?: MoneyValue;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "min_quantity"?: number;
    /**
     * Lowest unit price the buyer can enter when `allow_unit_price_adjustment` is true. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "min_unit_price_money"?: MoneyValue;
    /** Name of an ad hoc line item. Catalog lines take the catalog name. */
    "name": string;
    /**
     * Unique identifier for this payment link line item, prefixed `plli_`. Example:
     * "plli_01KEZF7C004V7GVCCNMYYCBAJS".
     */
    "payment_link_line_item_id": string;
    /**
     * Parent catalog context only. The product that the variants in variant_ids belong to. Present
     * only on buyer choice lines; refused on input. Example: "prod_01KEZF7C00BVSHCNWVH528HB66".
     */
    "product_id"?: string;
    /**
     * Classification configured on a custom line for ACH debit. Null when unclassified or
     * catalog-backed; catalog lines get their product classification when checkout starts. Value
     * enum: "physical", "service", "fee", "digital", "gift_card", null.
     */
    "product_type": "physical" | "service" | "fee" | "digital" | "gift_card" | null | (string & {}) | null;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "quantity": number;
    /**
     * Public event read: whole-number admissions left after sales and payment holds; fractional
     * quantities are not supported. This quantity is bounded by both the tier and event caps.
     * Omitted when neither is capped. Format: int32.
     */
    "remaining_quantity"?: number;
    /**
     * Current catalog name of the referenced variant or bundle, or the product name for
     * variant_ids lines. A variant reads as the product name, plus the variant name when the
     * variant is a named option combination. This is the catalog value at read time, not a stored
     * snapshot: checkout resolves it again when a buyer opens the link. Absent on ad-hoc line
     * items and when the catalog object no longer exists.
     */
    "resolved_name"?: string;
    /**
     * Current lowest and highest catalog unit prices among listed variants that can be sold in the
     * line currency. Computed at read time, not stored. Omitted when no listed variant can be
     * sold. The lowest and highest unit prices across a product's variants.
     */
    "resolved_price_range"?: ProductPriceRange;
    /**
     * Current catalog unit price of the referenced variant or bundle. For a fixed variant this is
     * the base price that applies below the first quantity price break. This is the catalog value
     * at read time, not a stored snapshot: checkout resolves the price again when a buyer opens
     * the link, so the amount a buyer pays can differ. Absent on ad-hoc line items, variant_ids
     * lines, and when the catalog object no longer exists. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "resolved_unit_price_money"?: MoneyValue;
    /**
     * Unit prices offered as one-tap choices when the buyer sets the price. [] (Value): {@link
     * MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code.
     */
    "suggested_unit_price_money_options"?: Array<MoneyValue>;
    /**
     * Tax settings for an ad hoc line item. Catalog lines use the catalog's. A line item's tax
     * category and whether it is taxable.
     */
    "tax"?: OrderLineItemTax;
    /** How the line item is defined. Value enum: "custom_fixed". */
    "type": "custom_fixed" | (string & {});
    /**
     * Price of one unit of a `custom_fixed` line item. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "unit_price_money": MoneyValue;
    /**
     * ID of the catalog variant a `variant` line sells. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id"?: string;
    /**
     * Variant IDs buyers may choose from, in the order offered. Contains 1 to 100 unique, active,
     * sellable variants of one product in one currency. Available only on standard payment links.
     * Mutually exclusive with variant_id, bundle_id, and ad hoc line item fields. minItems: 1.
     * maxItems: 100. uniqueItems: true. [] (Value): string. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     * Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_ids"?: Array<string>;
})
    & (({
    /** Value enum: false. */
    "allow_unit_price_adjustment"?: boolean;
    /** Value enum: "custom_fixed". */
    "type": "custom_fixed" | (string & {});
    /** Name of an ad hoc line item. Catalog lines take the catalog name. */
    "name": string;
    /**
     * Price of one unit of a `custom_fixed` line item. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "unit_price_money": MoneyValue;
}));
export type PaymentLinkLineItemCustomFixedPreviousAttributes = ({
    /**
     * Whether the buyer can change the quantity in checkout. anyOf[1] (Value): boolean. Whether
     * the buyer can change the quantity in checkout. anyOf[2] (Value): null.
     */
    "allow_quantity_adjustment"?: ((boolean) | (null));
    /**
     * Whether the buyer sets the unit price. Only `custom_variable` lines allow it. anyOf[1]
     * (Value): boolean. Whether the buyer sets the unit price. Only `custom_variable` lines allow
     * it. anyOf[2] (Value): null.
     */
    "allow_unit_price_adjustment"?: ((boolean) | (null));
    /**
     * ID of the catalog bundle a `bundle` line sells. anyOf[1] (Value): string. ID of the catalog
     * bundle a `bundle` line sells. Example: "bun_01KEZF7C00TQ6S76Z6CVQF5SVN". anyOf[2] (Value):
     * null.
     */
    "bundle_id"?: ((string) | (null));
    /**
     * Variant selected when the page opens and used at resolve when the buyer omits a selection.
     * Must be in variant_ids. Omit it to require a buyer selection. anyOf[1] (Value): string.
     * Variant selected when the page opens and used at resolve when the buyer omits a selection.
     * Must be in variant_ids. Omit it to require a buyer selection. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX". anyOf[2] (Value):
     * null.
     */
    "default_variant_id"?: ((string) | (null));
    /**
     * Description of an ad hoc line item. anyOf[1] (Value): string. Description of an ad hoc line
     * item. anyOf[2] (Value): null.
     */
    "description"?: ((string) | (null));
    /**
     * True when the referenced variant or bundle cannot be sold, or no listed variant in
     * variant_ids can be sold in the line currency. Always false on ad hoc line items. anyOf[1]
     * (Value): boolean. True when the referenced variant or bundle cannot be sold, or no listed
     * variant in variant_ids can be sold in the line currency. Always false on ad hoc line items.
     * anyOf[2] (Value): null.
     */
    "is_catalog_item_unavailable"?: ((boolean) | (null));
    /**
     * Public event read: true when the tier or event has no capacity left. anyOf[1] (Value):
     * boolean. Public event read: true when the tier or event has no capacity left. anyOf[2]
     * (Value): null.
     */
    "is_sold_out"?: ((boolean) | (null));
    /**
     * Keys the resolve override maps. Stable line item key used in checkout overrides. Must not
     * have leading or trailing whitespace. Assigned as line_item_1, line_item_2, and so on when
     * omitted, skipping numbers already used by explicit keys; retained for an existing line item
     * when omitted on update. anyOf[1] (Value): string. Keys the resolve override maps. Stable
     * line item key used in checkout overrides. Must not have leading or trailing whitespace.
     * Assigned as line_item_1, line_item_2, and so on when omitted, skipping numbers already used
     * by explicit keys; retained for an existing line item when omitted on update. anyOf[2]
     * (Value): null.
     */
    "key"?: ((string) | (null));
    /**
     * Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer.
     * Whole-number quantity; fractional quantities are not supported. Format: int32. anyOf[2]
     * (Value): null.
     */
    "max_quantity"?: ((number) | (null));
    /**
     * Optional whole-number admission capacity across all orders for an event tier; fractional
     * quantities are not supported. Must be at least 1 and cannot exceed
     * event_config.max_total_quantity when the event is capped. Omit for no tier cap; omitting it
     * in a line_items replacement removes an existing cap. anyOf[1] (Value): integer. Optional
     * whole-number admission capacity across all orders for an event tier; fractional quantities
     * are not supported. Must be at least 1 and cannot exceed event_config.max_total_quantity when
     * the event is capped. Omit for no tier cap; omitting it in a line_items replacement removes
     * an existing cap. Format: int32. minimum: 1. anyOf[2] (Value): null.
     */
    "max_total_quantity"?: ((number) | (null));
    /**
     * Highest unit price the buyer can enter when `allow_unit_price_adjustment` is true. Must be
     * greater than zero and greater than or equal to min_unit_price_money. Omit for no maximum.
     * anyOf[1] (Value): {@link MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "max_unit_price_money"?: ((MoneyValuePreviousAttributes) | (null));
    /**
     * Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer.
     * Whole-number quantity; fractional quantities are not supported. Format: int32. anyOf[2]
     * (Value): null.
     */
    "min_quantity"?: ((number) | (null));
    /**
     * Lowest unit price the buyer can enter when `allow_unit_price_adjustment` is true. anyOf[1]
     * (Value): {@link MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "min_unit_price_money"?: ((MoneyValuePreviousAttributes) | (null));
    /**
     * Name of an ad hoc line item. Catalog lines take the catalog name. anyOf[1] (Value): string.
     * Name of an ad hoc line item. Catalog lines take the catalog name. anyOf[2] (Value): null.
     */
    "name"?: ((string) | (null));
    /**
     * Unique identifier for this payment link line item, prefixed `plli_`. anyOf[1] (Value):
     * string. Unique identifier for this payment link line item, prefixed `plli_`. Example:
     * "plli_01KEZF7C004V7GVCCNMYYCBAJS". anyOf[2] (Value): null.
     */
    "payment_link_line_item_id"?: ((string) | (null));
    /**
     * Parent catalog context only. The product that the variants in variant_ids belong to. Present
     * only on buyer choice lines; refused on input. anyOf[1] (Value): string. Parent catalog
     * context only. The product that the variants in variant_ids belong to. Present only on buyer
     * choice lines; refused on input. Example: "prod_01KEZF7C00BVSHCNWVH528HB66". anyOf[2]
     * (Value): null.
     */
    "product_id"?: ((string) | (null));
    /**
     * Classification configured on a custom line for ACH debit. Null when unclassified or
     * catalog-backed; catalog lines get their product classification when checkout starts. Value
     * enum: "physical", "service", "fee", "digital", "gift_card", null. anyOf[1] (Value): string.
     * Classification configured on a custom line for ACH debit. Null when unclassified or
     * catalog-backed; catalog lines get their product classification when checkout starts. Value
     * enum: "physical", "service", "fee", "digital", "gift_card", null. anyOf[2] (Value): null.
     */
    "product_type"?: (("physical" | "service" | "fee" | "digital" | "gift_card" | null | (string & {})) | (null));
    /**
     * Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer.
     * Whole-number quantity; fractional quantities are not supported. Format: int32. anyOf[2]
     * (Value): null.
     */
    "quantity"?: ((number) | (null));
    /**
     * Public event read: whole-number admissions left after sales and payment holds; fractional
     * quantities are not supported. This quantity is bounded by both the tier and event caps.
     * Omitted when neither is capped. anyOf[1] (Value): integer. Public event read: whole-number
     * admissions left after sales and payment holds; fractional quantities are not supported. This
     * quantity is bounded by both the tier and event caps. Omitted when neither is capped. Format:
     * int32. anyOf[2] (Value): null.
     */
    "remaining_quantity"?: ((number) | (null));
    /**
     * Current catalog name of the referenced variant or bundle, or the product name for
     * variant_ids lines. A variant reads as the product name, plus the variant name when the
     * variant is a named option combination. This is the catalog value at read time, not a stored
     * snapshot: checkout resolves it again when a buyer opens the link. Absent on ad-hoc line
     * items and when the catalog object no longer exists. anyOf[1] (Value): string. Current
     * catalog name of the referenced variant or bundle, or the product name for variant_ids lines.
     * A variant reads as the product name, plus the variant name when the variant is a named
     * option combination. This is the catalog value at read time, not a stored snapshot: checkout
     * resolves it again when a buyer opens the link. Absent on ad-hoc line items and when the
     * catalog object no longer exists. anyOf[2] (Value): null.
     */
    "resolved_name"?: ((string) | (null));
    /**
     * Current lowest and highest catalog unit prices among listed variants that can be sold in the
     * line currency. Computed at read time, not stored. Omitted when no listed variant can be
     * sold. anyOf[1] (Value): {@link ProductPriceRangePreviousAttributes}. anyOf[2] (Value): null.
     */
    "resolved_price_range"?: ((ProductPriceRangePreviousAttributes) | (null));
    /**
     * Current catalog unit price of the referenced variant or bundle. For a fixed variant this is
     * the base price that applies below the first quantity price break. This is the catalog value
     * at read time, not a stored snapshot: checkout resolves the price again when a buyer opens
     * the link, so the amount a buyer pays can differ. Absent on ad-hoc line items, variant_ids
     * lines, and when the catalog object no longer exists. anyOf[1] (Value): {@link
     * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "resolved_unit_price_money"?: ((MoneyValuePreviousAttributes) | (null));
    /**
     * Unit prices offered as one-tap choices when the buyer sets the price. anyOf[1] (Value):
     * Array of {@link MoneyValuePreviousAttributes}. Unit prices offered as one-tap choices when
     * the buyer sets the price. anyOf[1][] (Value): {@link MoneyValuePreviousAttributes}. anyOf[2]
     * (Value): null.
     */
    "suggested_unit_price_money_options"?: ((Array<MoneyValuePreviousAttributes>) | (null));
    /**
     * Tax settings for an ad hoc line item. Catalog lines use the catalog's. anyOf[1] (Value):
     * {@link OrderLineItemTaxPreviousAttributes}. anyOf[2] (Value): null.
     */
    "tax"?: ((OrderLineItemTaxPreviousAttributes) | (null));
    /**
     * How the line item is defined. Value enum: "custom_fixed". anyOf[1] (Value): string. How the
     * line item is defined. Value enum: "custom_fixed". anyOf[2] (Value): null.
     */
    "type"?: (("custom_fixed" | (string & {})) | (null));
    /**
     * Price of one unit of a `custom_fixed` line item. anyOf[1] (Value): {@link
     * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "unit_price_money"?: ((MoneyValuePreviousAttributes) | (null));
    /**
     * ID of the catalog variant a `variant` line sells. anyOf[1] (Value): string. ID of the
     * catalog variant a `variant` line sells. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX". anyOf[2]
     * (Value): null.
     */
    "variant_id"?: ((string) | (null));
    /**
     * Variant IDs buyers may choose from, in the order offered. Contains 1 to 100 unique, active,
     * sellable variants of one product in one currency. Available only on standard payment links.
     * Mutually exclusive with variant_id, bundle_id, and ad hoc line item fields. anyOf[1]
     * (Value): Array of string. Variant IDs buyers may choose from, in the order offered. Contains
     * 1 to 100 unique, active, sellable variants of one product in one currency. Available only on
     * standard payment links. Mutually exclusive with variant_id, bundle_id, and ad hoc line item
     * fields. minItems: 1. maxItems: 100. uniqueItems: true. anyOf[1][] (Value): string. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX". anyOf[2] (Value):
     * null.
     */
    "variant_ids"?: ((Array<string>) | (null));
})
    & ({
    /** Value enum: false. anyOf[1] (Value): boolean.  Value enum: false. anyOf[2] (Value): null. */
    "allow_unit_price_adjustment"?: ((boolean) | (null));
    /**
     * Value enum: "custom_fixed". anyOf[1] (Value): string. Value enum: "custom_fixed". anyOf[2]
     * (Value): null.
     */
    "type"?: (("custom_fixed" | (string & {})) | (null));
});
/** A line item on a payment link. */
export type PaymentLinkLineItemCustomVariable = ({
    /** Whether the buyer can change the quantity in checkout. */
    "allow_quantity_adjustment"?: boolean;
    /** Whether the buyer sets the unit price. Only `custom_variable` lines allow it. */
    "allow_unit_price_adjustment": boolean;
    /**
     * ID of the catalog bundle a `bundle` line sells. Example: "bun_01KEZF7C00TQ6S76Z6CVQF5SVN".
     */
    "bundle_id"?: string;
    /**
     * Variant selected when the page opens and used at resolve when the buyer omits a selection.
     * Must be in variant_ids. Omit it to require a buyer selection. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "default_variant_id"?: string;
    /** Description of an ad hoc line item. */
    "description"?: string;
    /**
     * True when the referenced variant or bundle cannot be sold, or no listed variant in
     * variant_ids can be sold in the line currency. Always false on ad hoc line items.
     */
    "is_catalog_item_unavailable": boolean;
    /** Public event read: true when the tier or event has no capacity left. */
    "is_sold_out"?: boolean;
    /**
     * Keys the resolve override maps. Stable line item key used in checkout overrides. Must not
     * have leading or trailing whitespace. Assigned as line_item_1, line_item_2, and so on when
     * omitted, skipping numbers already used by explicit keys; retained for an existing line item
     * when omitted on update.
     */
    "key"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "max_quantity"?: number;
    /**
     * Optional whole-number admission capacity across all orders for an event tier; fractional
     * quantities are not supported. Must be at least 1 and cannot exceed
     * event_config.max_total_quantity when the event is capped. Omit for no tier cap; omitting it
     * in a line_items replacement removes an existing cap. Format: int32. minimum: 1.
     */
    "max_total_quantity"?: number;
    /**
     * Highest unit price the buyer can enter when `allow_unit_price_adjustment` is true. Must be
     * greater than zero and greater than or equal to min_unit_price_money. Omit for no maximum.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "max_unit_price_money"?: MoneyValue;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "min_quantity"?: number;
    /**
     * Lowest unit price the buyer can enter when `allow_unit_price_adjustment` is true. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "min_unit_price_money"?: MoneyValue;
    /** Name of an ad hoc line item. Catalog lines take the catalog name. */
    "name": string;
    /**
     * Unique identifier for this payment link line item, prefixed `plli_`. Example:
     * "plli_01KEZF7C004V7GVCCNMYYCBAJS".
     */
    "payment_link_line_item_id": string;
    /**
     * Parent catalog context only. The product that the variants in variant_ids belong to. Present
     * only on buyer choice lines; refused on input. Example: "prod_01KEZF7C00BVSHCNWVH528HB66".
     */
    "product_id"?: string;
    /**
     * Classification configured on a custom line for ACH debit. Null when unclassified or
     * catalog-backed; catalog lines get their product classification when checkout starts. Value
     * enum: "physical", "service", "fee", "digital", "gift_card", null.
     */
    "product_type": "physical" | "service" | "fee" | "digital" | "gift_card" | null | (string & {}) | null;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "quantity": number;
    /**
     * Public event read: whole-number admissions left after sales and payment holds; fractional
     * quantities are not supported. This quantity is bounded by both the tier and event caps.
     * Omitted when neither is capped. Format: int32.
     */
    "remaining_quantity"?: number;
    /**
     * Current catalog name of the referenced variant or bundle, or the product name for
     * variant_ids lines. A variant reads as the product name, plus the variant name when the
     * variant is a named option combination. This is the catalog value at read time, not a stored
     * snapshot: checkout resolves it again when a buyer opens the link. Absent on ad-hoc line
     * items and when the catalog object no longer exists.
     */
    "resolved_name"?: string;
    /**
     * Current lowest and highest catalog unit prices among listed variants that can be sold in the
     * line currency. Computed at read time, not stored. Omitted when no listed variant can be
     * sold. The lowest and highest unit prices across a product's variants.
     */
    "resolved_price_range"?: ProductPriceRange;
    /**
     * Current catalog unit price of the referenced variant or bundle. For a fixed variant this is
     * the base price that applies below the first quantity price break. This is the catalog value
     * at read time, not a stored snapshot: checkout resolves the price again when a buyer opens
     * the link, so the amount a buyer pays can differ. Absent on ad-hoc line items, variant_ids
     * lines, and when the catalog object no longer exists. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "resolved_unit_price_money"?: MoneyValue;
    /**
     * Unit prices offered as one-tap choices when the buyer sets the price. [] (Value): {@link
     * MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code.
     */
    "suggested_unit_price_money_options"?: Array<MoneyValue>;
    /**
     * Tax settings for an ad hoc line item. Catalog lines use the catalog's. A line item's tax
     * category and whether it is taxable.
     */
    "tax"?: OrderLineItemTax;
    /** How the line item is defined. Value enum: "custom_variable". */
    "type": "custom_variable" | (string & {});
    /**
     * Price of one unit of a `custom_fixed` line item. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "unit_price_money"?: MoneyValue;
    /**
     * ID of the catalog variant a `variant` line sells. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id"?: string;
    /**
     * Variant IDs buyers may choose from, in the order offered. Contains 1 to 100 unique, active,
     * sellable variants of one product in one currency. Available only on standard payment links.
     * Mutually exclusive with variant_id, bundle_id, and ad hoc line item fields. minItems: 1.
     * maxItems: 100. uniqueItems: true. [] (Value): string. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     * Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_ids"?: Array<string>;
})
    & (({
    /** Value enum: true. */
    "allow_unit_price_adjustment": boolean;
    /** Value enum: "custom_variable". */
    "type": "custom_variable" | (string & {});
    /** Name of an ad hoc line item. Catalog lines take the catalog name. */
    "name": string;
}));
export type PaymentLinkLineItemCustomVariablePreviousAttributes = ({
    /**
     * Whether the buyer can change the quantity in checkout. anyOf[1] (Value): boolean. Whether
     * the buyer can change the quantity in checkout. anyOf[2] (Value): null.
     */
    "allow_quantity_adjustment"?: ((boolean) | (null));
    /**
     * Whether the buyer sets the unit price. Only `custom_variable` lines allow it. anyOf[1]
     * (Value): boolean. Whether the buyer sets the unit price. Only `custom_variable` lines allow
     * it. anyOf[2] (Value): null.
     */
    "allow_unit_price_adjustment"?: ((boolean) | (null));
    /**
     * ID of the catalog bundle a `bundle` line sells. anyOf[1] (Value): string. ID of the catalog
     * bundle a `bundle` line sells. Example: "bun_01KEZF7C00TQ6S76Z6CVQF5SVN". anyOf[2] (Value):
     * null.
     */
    "bundle_id"?: ((string) | (null));
    /**
     * Variant selected when the page opens and used at resolve when the buyer omits a selection.
     * Must be in variant_ids. Omit it to require a buyer selection. anyOf[1] (Value): string.
     * Variant selected when the page opens and used at resolve when the buyer omits a selection.
     * Must be in variant_ids. Omit it to require a buyer selection. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX". anyOf[2] (Value):
     * null.
     */
    "default_variant_id"?: ((string) | (null));
    /**
     * Description of an ad hoc line item. anyOf[1] (Value): string. Description of an ad hoc line
     * item. anyOf[2] (Value): null.
     */
    "description"?: ((string) | (null));
    /**
     * True when the referenced variant or bundle cannot be sold, or no listed variant in
     * variant_ids can be sold in the line currency. Always false on ad hoc line items. anyOf[1]
     * (Value): boolean. True when the referenced variant or bundle cannot be sold, or no listed
     * variant in variant_ids can be sold in the line currency. Always false on ad hoc line items.
     * anyOf[2] (Value): null.
     */
    "is_catalog_item_unavailable"?: ((boolean) | (null));
    /**
     * Public event read: true when the tier or event has no capacity left. anyOf[1] (Value):
     * boolean. Public event read: true when the tier or event has no capacity left. anyOf[2]
     * (Value): null.
     */
    "is_sold_out"?: ((boolean) | (null));
    /**
     * Keys the resolve override maps. Stable line item key used in checkout overrides. Must not
     * have leading or trailing whitespace. Assigned as line_item_1, line_item_2, and so on when
     * omitted, skipping numbers already used by explicit keys; retained for an existing line item
     * when omitted on update. anyOf[1] (Value): string. Keys the resolve override maps. Stable
     * line item key used in checkout overrides. Must not have leading or trailing whitespace.
     * Assigned as line_item_1, line_item_2, and so on when omitted, skipping numbers already used
     * by explicit keys; retained for an existing line item when omitted on update. anyOf[2]
     * (Value): null.
     */
    "key"?: ((string) | (null));
    /**
     * Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer.
     * Whole-number quantity; fractional quantities are not supported. Format: int32. anyOf[2]
     * (Value): null.
     */
    "max_quantity"?: ((number) | (null));
    /**
     * Optional whole-number admission capacity across all orders for an event tier; fractional
     * quantities are not supported. Must be at least 1 and cannot exceed
     * event_config.max_total_quantity when the event is capped. Omit for no tier cap; omitting it
     * in a line_items replacement removes an existing cap. anyOf[1] (Value): integer. Optional
     * whole-number admission capacity across all orders for an event tier; fractional quantities
     * are not supported. Must be at least 1 and cannot exceed event_config.max_total_quantity when
     * the event is capped. Omit for no tier cap; omitting it in a line_items replacement removes
     * an existing cap. Format: int32. minimum: 1. anyOf[2] (Value): null.
     */
    "max_total_quantity"?: ((number) | (null));
    /**
     * Highest unit price the buyer can enter when `allow_unit_price_adjustment` is true. Must be
     * greater than zero and greater than or equal to min_unit_price_money. Omit for no maximum.
     * anyOf[1] (Value): {@link MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "max_unit_price_money"?: ((MoneyValuePreviousAttributes) | (null));
    /**
     * Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer.
     * Whole-number quantity; fractional quantities are not supported. Format: int32. anyOf[2]
     * (Value): null.
     */
    "min_quantity"?: ((number) | (null));
    /**
     * Lowest unit price the buyer can enter when `allow_unit_price_adjustment` is true. anyOf[1]
     * (Value): {@link MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "min_unit_price_money"?: ((MoneyValuePreviousAttributes) | (null));
    /**
     * Name of an ad hoc line item. Catalog lines take the catalog name. anyOf[1] (Value): string.
     * Name of an ad hoc line item. Catalog lines take the catalog name. anyOf[2] (Value): null.
     */
    "name"?: ((string) | (null));
    /**
     * Unique identifier for this payment link line item, prefixed `plli_`. anyOf[1] (Value):
     * string. Unique identifier for this payment link line item, prefixed `plli_`. Example:
     * "plli_01KEZF7C004V7GVCCNMYYCBAJS". anyOf[2] (Value): null.
     */
    "payment_link_line_item_id"?: ((string) | (null));
    /**
     * Parent catalog context only. The product that the variants in variant_ids belong to. Present
     * only on buyer choice lines; refused on input. anyOf[1] (Value): string. Parent catalog
     * context only. The product that the variants in variant_ids belong to. Present only on buyer
     * choice lines; refused on input. Example: "prod_01KEZF7C00BVSHCNWVH528HB66". anyOf[2]
     * (Value): null.
     */
    "product_id"?: ((string) | (null));
    /**
     * Classification configured on a custom line for ACH debit. Null when unclassified or
     * catalog-backed; catalog lines get their product classification when checkout starts. Value
     * enum: "physical", "service", "fee", "digital", "gift_card", null. anyOf[1] (Value): string.
     * Classification configured on a custom line for ACH debit. Null when unclassified or
     * catalog-backed; catalog lines get their product classification when checkout starts. Value
     * enum: "physical", "service", "fee", "digital", "gift_card", null. anyOf[2] (Value): null.
     */
    "product_type"?: (("physical" | "service" | "fee" | "digital" | "gift_card" | null | (string & {})) | (null));
    /**
     * Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer.
     * Whole-number quantity; fractional quantities are not supported. Format: int32. anyOf[2]
     * (Value): null.
     */
    "quantity"?: ((number) | (null));
    /**
     * Public event read: whole-number admissions left after sales and payment holds; fractional
     * quantities are not supported. This quantity is bounded by both the tier and event caps.
     * Omitted when neither is capped. anyOf[1] (Value): integer. Public event read: whole-number
     * admissions left after sales and payment holds; fractional quantities are not supported. This
     * quantity is bounded by both the tier and event caps. Omitted when neither is capped. Format:
     * int32. anyOf[2] (Value): null.
     */
    "remaining_quantity"?: ((number) | (null));
    /**
     * Current catalog name of the referenced variant or bundle, or the product name for
     * variant_ids lines. A variant reads as the product name, plus the variant name when the
     * variant is a named option combination. This is the catalog value at read time, not a stored
     * snapshot: checkout resolves it again when a buyer opens the link. Absent on ad-hoc line
     * items and when the catalog object no longer exists. anyOf[1] (Value): string. Current
     * catalog name of the referenced variant or bundle, or the product name for variant_ids lines.
     * A variant reads as the product name, plus the variant name when the variant is a named
     * option combination. This is the catalog value at read time, not a stored snapshot: checkout
     * resolves it again when a buyer opens the link. Absent on ad-hoc line items and when the
     * catalog object no longer exists. anyOf[2] (Value): null.
     */
    "resolved_name"?: ((string) | (null));
    /**
     * Current lowest and highest catalog unit prices among listed variants that can be sold in the
     * line currency. Computed at read time, not stored. Omitted when no listed variant can be
     * sold. anyOf[1] (Value): {@link ProductPriceRangePreviousAttributes}. anyOf[2] (Value): null.
     */
    "resolved_price_range"?: ((ProductPriceRangePreviousAttributes) | (null));
    /**
     * Current catalog unit price of the referenced variant or bundle. For a fixed variant this is
     * the base price that applies below the first quantity price break. This is the catalog value
     * at read time, not a stored snapshot: checkout resolves the price again when a buyer opens
     * the link, so the amount a buyer pays can differ. Absent on ad-hoc line items, variant_ids
     * lines, and when the catalog object no longer exists. anyOf[1] (Value): {@link
     * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "resolved_unit_price_money"?: ((MoneyValuePreviousAttributes) | (null));
    /**
     * Unit prices offered as one-tap choices when the buyer sets the price. anyOf[1] (Value):
     * Array of {@link MoneyValuePreviousAttributes}. Unit prices offered as one-tap choices when
     * the buyer sets the price. anyOf[1][] (Value): {@link MoneyValuePreviousAttributes}. anyOf[2]
     * (Value): null.
     */
    "suggested_unit_price_money_options"?: ((Array<MoneyValuePreviousAttributes>) | (null));
    /**
     * Tax settings for an ad hoc line item. Catalog lines use the catalog's. anyOf[1] (Value):
     * {@link OrderLineItemTaxPreviousAttributes}. anyOf[2] (Value): null.
     */
    "tax"?: ((OrderLineItemTaxPreviousAttributes) | (null));
    /**
     * How the line item is defined. Value enum: "custom_variable". anyOf[1] (Value): string. How
     * the line item is defined. Value enum: "custom_variable". anyOf[2] (Value): null.
     */
    "type"?: (("custom_variable" | (string & {})) | (null));
    /**
     * Price of one unit of a `custom_fixed` line item. anyOf[1] (Value): {@link
     * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "unit_price_money"?: ((MoneyValuePreviousAttributes) | (null));
    /**
     * ID of the catalog variant a `variant` line sells. anyOf[1] (Value): string. ID of the
     * catalog variant a `variant` line sells. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX". anyOf[2]
     * (Value): null.
     */
    "variant_id"?: ((string) | (null));
    /**
     * Variant IDs buyers may choose from, in the order offered. Contains 1 to 100 unique, active,
     * sellable variants of one product in one currency. Available only on standard payment links.
     * Mutually exclusive with variant_id, bundle_id, and ad hoc line item fields. anyOf[1]
     * (Value): Array of string. Variant IDs buyers may choose from, in the order offered. Contains
     * 1 to 100 unique, active, sellable variants of one product in one currency. Available only on
     * standard payment links. Mutually exclusive with variant_id, bundle_id, and ad hoc line item
     * fields. minItems: 1. maxItems: 100. uniqueItems: true. anyOf[1][] (Value): string. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX". anyOf[2] (Value):
     * null.
     */
    "variant_ids"?: ((Array<string>) | (null));
})
    & ({
    /** Value enum: true. anyOf[1] (Value): boolean.  Value enum: true. anyOf[2] (Value): null. */
    "allow_unit_price_adjustment"?: ((boolean) | (null));
    /**
     * Value enum: "custom_variable". anyOf[1] (Value): string. Value enum: "custom_variable".
     * anyOf[2] (Value): null.
     */
    "type"?: (("custom_variable" | (string & {})) | (null));
});
/** The `bundle` variant of `PaymentLinkLineItemInput`. */
export type PaymentLinkLineItemInputBundle = ({
    /** Whether the buyer can change the quantity in checkout. */
    "allow_quantity_adjustment"?: boolean;
    /** Whether the buyer sets the unit price. Only `custom_variable` lines allow it. */
    "allow_unit_price_adjustment"?: boolean;
    /**
     * ID of the catalog bundle a `bundle` line sells. minLength: 1. Example:
     * "bun_01KEZF7C00TQ6S76Z6CVQF5SVN".
     */
    "bundle_id": string;
    /**
     * Variant selected when the page opens and used at resolve when the buyer omits a selection.
     * Must be in variant_ids. Omit it to require a buyer selection. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "default_variant_id"?: string;
    /** Description of an ad hoc line item. minLength: 1. maxLength: 2048. */
    "description"?: string;
    /**
     * Keys the resolve override maps. Stable line item key used in checkout overrides. Must not
     * have leading or trailing whitespace. Assigned as line_item_1, line_item_2, and so on when
     * omitted, skipping numbers already used by explicit keys; retained for an existing line item
     * when omitted on update. minLength: 1. maxLength: 100.
     */
    "key"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "max_quantity"?: number;
    /**
     * Optional whole-number admission capacity across all orders for an event tier; fractional
     * quantities are not supported. Must be at least 1 and cannot exceed
     * event_config.max_total_quantity when the event is capped. Omit for no tier cap; omitting it
     * in a line_items replacement removes an existing cap. Format: int32. minimum: 1.
     */
    "max_total_quantity"?: number;
    /**
     * Highest unit price the buyer can enter when `allow_unit_price_adjustment` is true. Must be
     * greater than zero and greater than or equal to min_unit_price_money. Omit for no maximum.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "max_unit_price_money"?: MoneyValue;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "min_quantity"?: number;
    /**
     * Lowest unit price the buyer can enter when `allow_unit_price_adjustment` is true. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "min_unit_price_money"?: MoneyValue;
    /**
     * Name of an ad hoc line item. Catalog lines take the catalog name. Surrounding whitespace is
     * trimmed before length validation. A supplied value cannot be blank; use null where clearing
     * is supported. minLength: 1. maxLength: 255.
     */
    "name"?: string;
    /**
     * Classification of a custom line for ACH debit: physical, digital, service, or fee. Omit to
     * leave it unclassified; no default is inferred from fulfillment. Null is not accepted. Does
     * not change tax, delivery, or inventory. On an order line PATCH, omission preserves the
     * classification. Catalog lines use their product's type and reject this input. Value enum:
     * "physical", "service", "fee", "digital".
     */
    "product_type"?: "physical" | "service" | "fee" | "digital" | (string & {});
    /**
     * Whole-number default quantity; fractional quantities are not supported. Omission uses 1.
     * Must be at least 1 for standard links; event tiers also accept 0. Format: int32. Default: 1.
     */
    "quantity"?: number;
    /**
     * Unit prices offered as one-tap choices when the buyer sets the price. [] (Value): {@link
     * MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code.
     */
    "suggested_unit_price_money_options"?: Array<MoneyValue>;
    /**
     * Tax settings for an ad hoc line item. Catalog lines use the catalog's. A line item's tax
     * category and whether it is taxable.
     */
    "tax"?: OrderLineItemTax;
    /** How the line item is defined. Value enum: "bundle". */
    "type": "bundle" | (string & {});
    /**
     * Price of one unit of a `custom_fixed` line item. amount (Required): integer string. Positive
     * amount in the currency's minor unit, such as cents for USD. Use an integer string (decimal
     * digits), not a floating-point number. Format: int64. minimum: 1. currency (Required):
     * string. ISO 4217 currency code for this amount. minLength: 3. maxLength: 3. pattern:
     * ^[A-Z]{3}$. Example: "USD".
     */
    "unit_price_money"?: {
        /**
         * Positive amount in the currency's minor unit, such as cents for USD. Use an integer
         * string (decimal digits), not a floating-point number. Format: int64. minimum: 1.
         */
        "amount": `${bigint}`;
        /**
         * ISO 4217 currency code for this amount. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
         * Example: "USD".
         */
        "currency": string;
    };
    /**
     * ID of the catalog variant a `variant` line sells. minLength: 1. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id"?: string;
    /**
     * Variant IDs buyers may choose from, in the order offered. Contains 1 to 100 unique, active,
     * sellable variants of one product in one currency. Available only on standard payment links.
     * Mutually exclusive with variant_id, bundle_id, and ad hoc line item fields. minItems: 1.
     * maxItems: 100. uniqueItems: true. [] (Value): string. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_ids"?: Array<string>;
})
    & (({
    /** Value enum: "bundle". */
    "type": "bundle" | (string & {});
    /**
     * ID of the catalog bundle a `bundle` line sells. minLength: 1. Example:
     * "bun_01KEZF7C00TQ6S76Z6CVQF5SVN".
     */
    "bundle_id": string;
}));
/** The `bundle` variant of `PaymentLinkLineItemInput`. */
export type PaymentLinkLineItemInputBundleInput = ({
    /** Whether the buyer can change the quantity in checkout. */
    "allow_quantity_adjustment"?: boolean;
    /** Whether the buyer sets the unit price. Only `custom_variable` lines allow it. */
    "allow_unit_price_adjustment"?: boolean;
    /**
     * ID of the catalog bundle a `bundle` line sells. minLength: 1. Example:
     * "bun_01KEZF7C00TQ6S76Z6CVQF5SVN".
     */
    "bundle_id": string;
    /**
     * Variant selected when the page opens and used at resolve when the buyer omits a selection.
     * Must be in variant_ids. Omit it to require a buyer selection. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "default_variant_id"?: string;
    /** Description of an ad hoc line item. minLength: 1. maxLength: 2048. */
    "description"?: string;
    /**
     * Keys the resolve override maps. Stable line item key used in checkout overrides. Must not
     * have leading or trailing whitespace. Assigned as line_item_1, line_item_2, and so on when
     * omitted, skipping numbers already used by explicit keys; retained for an existing line item
     * when omitted on update. minLength: 1. maxLength: 100.
     */
    "key"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "max_quantity"?: number;
    /**
     * Optional whole-number admission capacity across all orders for an event tier; fractional
     * quantities are not supported. Must be at least 1 and cannot exceed
     * event_config.max_total_quantity when the event is capped. Omit for no tier cap; omitting it
     * in a line_items replacement removes an existing cap. Format: int32. minimum: 1.
     */
    "max_total_quantity"?: number;
    /**
     * Highest unit price the buyer can enter when `allow_unit_price_adjustment` is true. Must be
     * greater than zero and greater than or equal to min_unit_price_money. Omit for no maximum.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "max_unit_price_money"?: MoneyValueInput;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "min_quantity"?: number;
    /**
     * Lowest unit price the buyer can enter when `allow_unit_price_adjustment` is true. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "min_unit_price_money"?: MoneyValueInput;
    /**
     * Name of an ad hoc line item. Catalog lines take the catalog name. Surrounding whitespace is
     * trimmed before length validation. A supplied value cannot be blank; use null where clearing
     * is supported. minLength: 1. maxLength: 255.
     */
    "name"?: string;
    /**
     * Classification of a custom line for ACH debit: physical, digital, service, or fee. Omit to
     * leave it unclassified; no default is inferred from fulfillment. Null is not accepted. Does
     * not change tax, delivery, or inventory. On an order line PATCH, omission preserves the
     * classification. Catalog lines use their product's type and reject this input. Value enum:
     * "physical", "service", "fee", "digital".
     */
    "product_type"?: "physical" | "service" | "fee" | "digital";
    /**
     * Whole-number default quantity; fractional quantities are not supported. Omission uses 1.
     * Must be at least 1 for standard links; event tiers also accept 0. Format: int32. Default: 1.
     */
    "quantity"?: number;
    /**
     * Unit prices offered as one-tap choices when the buyer sets the price. [] (Value): {@link
     * MoneyValueInput}. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "suggested_unit_price_money_options"?: Array<MoneyValueInput>;
    /**
     * Tax settings for an ad hoc line item. Catalog lines use the catalog's. A line item's tax
     * category and whether it is taxable.
     */
    "tax"?: OrderLineItemTaxRequestInput;
    /** How the line item is defined. Value enum: "bundle". */
    "type": "bundle";
    /**
     * Price of one unit of a `custom_fixed` line item. amount (Required): integer string. Positive
     * amount in the currency's minor unit, such as cents for USD. Use an integer string (decimal
     * digits), not a floating-point number. Format: int64. minimum: 1. currency (Required):
     * string. ISO 4217 currency code for this amount. minLength: 3. maxLength: 3. pattern:
     * ^[A-Z]{3}$. Example: "USD".
     */
    "unit_price_money"?: {
        /**
         * Positive amount in the currency's minor unit, such as cents for USD. Use an integer
         * string (decimal digits), not a floating-point number. Format: int64. minimum: 1.
         */
        "amount": `${bigint}` | bigint;
        /**
         * ISO 4217 currency code for this amount. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
         * Example: "USD".
         */
        "currency": string;
    };
    /**
     * ID of the catalog variant a `variant` line sells. minLength: 1. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id"?: string;
    /**
     * Variant IDs buyers may choose from, in the order offered. Contains 1 to 100 unique, active,
     * sellable variants of one product in one currency. Available only on standard payment links.
     * Mutually exclusive with variant_id, bundle_id, and ad hoc line item fields. minItems: 1.
     * maxItems: 100. uniqueItems: true. [] (Value): string. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_ids"?: Array<string>;
})
    & (({
    /** Value enum: "bundle". */
    "type": ("bundle") & ("bundle");
    /**
     * ID of the catalog bundle a `bundle` line sells. minLength: 1. Example:
     * "bun_01KEZF7C00TQ6S76Z6CVQF5SVN".
     */
    "bundle_id": string;
})
    & (({
    "variant_id"?: never;
})
    & ({
    "variant_ids"?: never;
})
    & ({
    "default_variant_id"?: never;
})
    & ({
    "name"?: never;
})
    & ({
    "unit_price_money"?: never;
})
    & ({
    "description"?: never;
})
    & ({
    "tax"?: never;
})
    & ({
    "allow_unit_price_adjustment"?: never;
})
    & ({
    "min_unit_price_money"?: never;
})
    & ({
    "max_unit_price_money"?: never;
})
    & ({
    "suggested_unit_price_money_options"?: never;
})
    & ({
    "product_type"?: never;
})));
/** The `custom_fixed` variant of `PaymentLinkLineItemInput`. */
export type PaymentLinkLineItemInputCustomFixed = ({
    /** Whether the buyer can change the quantity in checkout. */
    "allow_quantity_adjustment"?: boolean;
    /** Whether the buyer sets the unit price. Only `custom_variable` lines allow it. */
    "allow_unit_price_adjustment"?: boolean;
    /**
     * ID of the catalog bundle a `bundle` line sells. minLength: 1. Example:
     * "bun_01KEZF7C00TQ6S76Z6CVQF5SVN".
     */
    "bundle_id"?: string;
    /**
     * Variant selected when the page opens and used at resolve when the buyer omits a selection.
     * Must be in variant_ids. Omit it to require a buyer selection. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "default_variant_id"?: string;
    /** Description of an ad hoc line item. minLength: 1. maxLength: 2048. */
    "description"?: string;
    /**
     * Keys the resolve override maps. Stable line item key used in checkout overrides. Must not
     * have leading or trailing whitespace. Assigned as line_item_1, line_item_2, and so on when
     * omitted, skipping numbers already used by explicit keys; retained for an existing line item
     * when omitted on update. minLength: 1. maxLength: 100.
     */
    "key"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "max_quantity"?: number;
    /**
     * Optional whole-number admission capacity across all orders for an event tier; fractional
     * quantities are not supported. Must be at least 1 and cannot exceed
     * event_config.max_total_quantity when the event is capped. Omit for no tier cap; omitting it
     * in a line_items replacement removes an existing cap. Format: int32. minimum: 1.
     */
    "max_total_quantity"?: number;
    /**
     * Highest unit price the buyer can enter when `allow_unit_price_adjustment` is true. Must be
     * greater than zero and greater than or equal to min_unit_price_money. Omit for no maximum.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "max_unit_price_money"?: MoneyValue;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "min_quantity"?: number;
    /**
     * Lowest unit price the buyer can enter when `allow_unit_price_adjustment` is true. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "min_unit_price_money"?: MoneyValue;
    /**
     * Name of an ad hoc line item. Catalog lines take the catalog name. Surrounding whitespace is
     * trimmed before length validation. A supplied value cannot be blank; use null where clearing
     * is supported. minLength: 1. maxLength: 255.
     */
    "name": string;
    /**
     * Classification of a custom line for ACH debit: physical, digital, service, or fee. Omit to
     * leave it unclassified; no default is inferred from fulfillment. Null is not accepted. Does
     * not change tax, delivery, or inventory. On an order line PATCH, omission preserves the
     * classification. Catalog lines use their product's type and reject this input. Value enum:
     * "physical", "service", "fee", "digital".
     */
    "product_type"?: "physical" | "service" | "fee" | "digital" | (string & {});
    /**
     * Whole-number default quantity; fractional quantities are not supported. Omission uses 1.
     * Must be at least 1 for standard links; event tiers also accept 0. Format: int32. Default: 1.
     */
    "quantity"?: number;
    /**
     * Unit prices offered as one-tap choices when the buyer sets the price. [] (Value): {@link
     * MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code.
     */
    "suggested_unit_price_money_options"?: Array<MoneyValue>;
    /**
     * Tax settings for an ad hoc line item. Catalog lines use the catalog's. A line item's tax
     * category and whether it is taxable.
     */
    "tax"?: OrderLineItemTax;
    /** How the line item is defined. Value enum: "custom_fixed". */
    "type": "custom_fixed" | (string & {});
    /**
     * Price of one unit of a `custom_fixed` line item. amount (Required): integer string. Positive
     * amount in the currency's minor unit, such as cents for USD. Use an integer string (decimal
     * digits), not a floating-point number. Format: int64. minimum: 1. currency (Required):
     * string. ISO 4217 currency code for this amount. minLength: 3. maxLength: 3. pattern:
     * ^[A-Z]{3}$. Example: "USD".
     */
    "unit_price_money": {
        /**
         * Positive amount in the currency's minor unit, such as cents for USD. Use an integer
         * string (decimal digits), not a floating-point number. Format: int64. minimum: 1.
         */
        "amount": `${bigint}`;
        /**
         * ISO 4217 currency code for this amount. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
         * Example: "USD".
         */
        "currency": string;
    };
    /**
     * ID of the catalog variant a `variant` line sells. minLength: 1. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id"?: string;
    /**
     * Variant IDs buyers may choose from, in the order offered. Contains 1 to 100 unique, active,
     * sellable variants of one product in one currency. Available only on standard payment links.
     * Mutually exclusive with variant_id, bundle_id, and ad hoc line item fields. minItems: 1.
     * maxItems: 100. uniqueItems: true. [] (Value): string. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_ids"?: Array<string>;
})
    & (({
    /** Value enum: false. */
    "allow_unit_price_adjustment"?: boolean;
    /** Value enum: "custom_fixed". */
    "type": "custom_fixed" | (string & {});
    /**
     * Name of an ad hoc line item. Catalog lines take the catalog name. Surrounding whitespace is
     * trimmed before length validation. A supplied value cannot be blank; use null where clearing
     * is supported. minLength: 1. maxLength: 255.
     */
    "name": string;
    /**
     * Price of one unit of a `custom_fixed` line item. amount (Required): integer string. Positive
     * amount in the currency's minor unit, such as cents for USD. Use an integer string (decimal
     * digits), not a floating-point number. Format: int64. minimum: 1. currency (Required):
     * string. ISO 4217 currency code for this amount. minLength: 3. maxLength: 3. pattern:
     * ^[A-Z]{3}$. Example: "USD".
     */
    "unit_price_money": {
        /**
         * Positive amount in the currency's minor unit, such as cents for USD. Use an integer
         * string (decimal digits), not a floating-point number. Format: int64. minimum: 1.
         */
        "amount": `${bigint}`;
        /**
         * ISO 4217 currency code for this amount. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
         * Example: "USD".
         */
        "currency": string;
    };
}));
/** The `custom_fixed` variant of `PaymentLinkLineItemInput`. */
export type PaymentLinkLineItemInputCustomFixedInput = ({
    /** Whether the buyer can change the quantity in checkout. */
    "allow_quantity_adjustment"?: boolean;
    /** Whether the buyer sets the unit price. Only `custom_variable` lines allow it. */
    "allow_unit_price_adjustment"?: boolean;
    /**
     * ID of the catalog bundle a `bundle` line sells. minLength: 1. Example:
     * "bun_01KEZF7C00TQ6S76Z6CVQF5SVN".
     */
    "bundle_id"?: string;
    /**
     * Variant selected when the page opens and used at resolve when the buyer omits a selection.
     * Must be in variant_ids. Omit it to require a buyer selection. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "default_variant_id"?: string;
    /** Description of an ad hoc line item. minLength: 1. maxLength: 2048. */
    "description"?: string;
    /**
     * Keys the resolve override maps. Stable line item key used in checkout overrides. Must not
     * have leading or trailing whitespace. Assigned as line_item_1, line_item_2, and so on when
     * omitted, skipping numbers already used by explicit keys; retained for an existing line item
     * when omitted on update. minLength: 1. maxLength: 100.
     */
    "key"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "max_quantity"?: number;
    /**
     * Optional whole-number admission capacity across all orders for an event tier; fractional
     * quantities are not supported. Must be at least 1 and cannot exceed
     * event_config.max_total_quantity when the event is capped. Omit for no tier cap; omitting it
     * in a line_items replacement removes an existing cap. Format: int32. minimum: 1.
     */
    "max_total_quantity"?: number;
    /**
     * Highest unit price the buyer can enter when `allow_unit_price_adjustment` is true. Must be
     * greater than zero and greater than or equal to min_unit_price_money. Omit for no maximum.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "max_unit_price_money"?: MoneyValueInput;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "min_quantity"?: number;
    /**
     * Lowest unit price the buyer can enter when `allow_unit_price_adjustment` is true. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "min_unit_price_money"?: MoneyValueInput;
    /**
     * Name of an ad hoc line item. Catalog lines take the catalog name. Surrounding whitespace is
     * trimmed before length validation. A supplied value cannot be blank; use null where clearing
     * is supported. minLength: 1. maxLength: 255.
     */
    "name": string;
    /**
     * Classification of a custom line for ACH debit: physical, digital, service, or fee. Omit to
     * leave it unclassified; no default is inferred from fulfillment. Null is not accepted. Does
     * not change tax, delivery, or inventory. On an order line PATCH, omission preserves the
     * classification. Catalog lines use their product's type and reject this input. Value enum:
     * "physical", "service", "fee", "digital".
     */
    "product_type"?: "physical" | "service" | "fee" | "digital";
    /**
     * Whole-number default quantity; fractional quantities are not supported. Omission uses 1.
     * Must be at least 1 for standard links; event tiers also accept 0. Format: int32. Default: 1.
     */
    "quantity"?: number;
    /**
     * Unit prices offered as one-tap choices when the buyer sets the price. [] (Value): {@link
     * MoneyValueInput}. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "suggested_unit_price_money_options"?: Array<MoneyValueInput>;
    /**
     * Tax settings for an ad hoc line item. Catalog lines use the catalog's. A line item's tax
     * category and whether it is taxable.
     */
    "tax"?: OrderLineItemTaxRequestInput;
    /** How the line item is defined. Value enum: "custom_fixed". */
    "type": "custom_fixed";
    /**
     * Price of one unit of a `custom_fixed` line item. amount (Required): integer string. Positive
     * amount in the currency's minor unit, such as cents for USD. Use an integer string (decimal
     * digits), not a floating-point number. Format: int64. minimum: 1. currency (Required):
     * string. ISO 4217 currency code for this amount. minLength: 3. maxLength: 3. pattern:
     * ^[A-Z]{3}$. Example: "USD".
     */
    "unit_price_money": {
        /**
         * Positive amount in the currency's minor unit, such as cents for USD. Use an integer
         * string (decimal digits), not a floating-point number. Format: int64. minimum: 1.
         */
        "amount": `${bigint}` | bigint;
        /**
         * ISO 4217 currency code for this amount. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
         * Example: "USD".
         */
        "currency": string;
    };
    /**
     * ID of the catalog variant a `variant` line sells. minLength: 1. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id"?: string;
    /**
     * Variant IDs buyers may choose from, in the order offered. Contains 1 to 100 unique, active,
     * sellable variants of one product in one currency. Available only on standard payment links.
     * Mutually exclusive with variant_id, bundle_id, and ad hoc line item fields. minItems: 1.
     * maxItems: 100. uniqueItems: true. [] (Value): string. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_ids"?: Array<string>;
})
    & (({
    /** Value enum: false. */
    "allow_unit_price_adjustment"?: false;
    /** Value enum: "custom_fixed". */
    "type": ("custom_fixed") & ("custom_fixed");
    /**
     * Name of an ad hoc line item. Catalog lines take the catalog name. Surrounding whitespace is
     * trimmed before length validation. A supplied value cannot be blank; use null where clearing
     * is supported. minLength: 1. maxLength: 255.
     */
    "name": string;
    /**
     * Price of one unit of a `custom_fixed` line item. amount (Required): integer string. Positive
     * amount in the currency's minor unit, such as cents for USD. Use an integer string (decimal
     * digits), not a floating-point number. Format: int64. minimum: 1. currency (Required):
     * string. ISO 4217 currency code for this amount. minLength: 3. maxLength: 3. pattern:
     * ^[A-Z]{3}$. Example: "USD".
     */
    "unit_price_money": {
        /**
         * Positive amount in the currency's minor unit, such as cents for USD. Use an integer
         * string (decimal digits), not a floating-point number. Format: int64. minimum: 1.
         */
        "amount": `${bigint}` | bigint;
        /**
         * ISO 4217 currency code for this amount. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
         * Example: "USD".
         */
        "currency": string;
    };
})
    & (({
    "variant_id"?: never;
})
    & ({
    "variant_ids"?: never;
})
    & ({
    "default_variant_id"?: never;
})
    & ({
    "bundle_id"?: never;
})));
/** The `custom_variable` variant of `PaymentLinkLineItemInput`. */
export type PaymentLinkLineItemInputCustomVariable = ({
    /** Whether the buyer can change the quantity in checkout. */
    "allow_quantity_adjustment"?: boolean;
    /** Whether the buyer sets the unit price. Only `custom_variable` lines allow it. */
    "allow_unit_price_adjustment": boolean;
    /**
     * ID of the catalog bundle a `bundle` line sells. minLength: 1. Example:
     * "bun_01KEZF7C00TQ6S76Z6CVQF5SVN".
     */
    "bundle_id"?: string;
    /**
     * Variant selected when the page opens and used at resolve when the buyer omits a selection.
     * Must be in variant_ids. Omit it to require a buyer selection. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "default_variant_id"?: string;
    /** Description of an ad hoc line item. minLength: 1. maxLength: 2048. */
    "description"?: string;
    /**
     * Keys the resolve override maps. Stable line item key used in checkout overrides. Must not
     * have leading or trailing whitespace. Assigned as line_item_1, line_item_2, and so on when
     * omitted, skipping numbers already used by explicit keys; retained for an existing line item
     * when omitted on update. minLength: 1. maxLength: 100.
     */
    "key"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "max_quantity"?: number;
    /**
     * Optional whole-number admission capacity across all orders for an event tier; fractional
     * quantities are not supported. Must be at least 1 and cannot exceed
     * event_config.max_total_quantity when the event is capped. Omit for no tier cap; omitting it
     * in a line_items replacement removes an existing cap. Format: int32. minimum: 1.
     */
    "max_total_quantity"?: number;
    /**
     * Highest unit price the buyer can enter when `allow_unit_price_adjustment` is true. Must be
     * greater than zero and greater than or equal to min_unit_price_money. Omit for no maximum.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "max_unit_price_money"?: MoneyValue;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "min_quantity"?: number;
    /**
     * Lowest unit price the buyer can enter when `allow_unit_price_adjustment` is true. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "min_unit_price_money"?: MoneyValue;
    /**
     * Name of an ad hoc line item. Catalog lines take the catalog name. Surrounding whitespace is
     * trimmed before length validation. A supplied value cannot be blank; use null where clearing
     * is supported. minLength: 1. maxLength: 255.
     */
    "name": string;
    /**
     * Classification of a custom line for ACH debit: physical, digital, service, or fee. Omit to
     * leave it unclassified; no default is inferred from fulfillment. Null is not accepted. Does
     * not change tax, delivery, or inventory. On an order line PATCH, omission preserves the
     * classification. Catalog lines use their product's type and reject this input. Value enum:
     * "physical", "service", "fee", "digital".
     */
    "product_type"?: "physical" | "service" | "fee" | "digital" | (string & {});
    /**
     * Whole-number default quantity; fractional quantities are not supported. Omission uses 1.
     * Must be at least 1 for standard links; event tiers also accept 0. Format: int32. Default: 1.
     */
    "quantity"?: number;
    /**
     * Unit prices offered as one-tap choices when the buyer sets the price. [] (Value): {@link
     * MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code.
     */
    "suggested_unit_price_money_options"?: Array<MoneyValue>;
    /**
     * Tax settings for an ad hoc line item. Catalog lines use the catalog's. A line item's tax
     * category and whether it is taxable.
     */
    "tax"?: OrderLineItemTax;
    /** How the line item is defined. Value enum: "custom_variable". */
    "type": "custom_variable" | (string & {});
    /**
     * Price of one unit of a `custom_fixed` line item. amount (Required): integer string. Positive
     * amount in the currency's minor unit, such as cents for USD. Use an integer string (decimal
     * digits), not a floating-point number. Format: int64. minimum: 1. currency (Required):
     * string. ISO 4217 currency code for this amount. minLength: 3. maxLength: 3. pattern:
     * ^[A-Z]{3}$. Example: "USD".
     */
    "unit_price_money"?: {
        /**
         * Positive amount in the currency's minor unit, such as cents for USD. Use an integer
         * string (decimal digits), not a floating-point number. Format: int64. minimum: 1.
         */
        "amount": `${bigint}`;
        /**
         * ISO 4217 currency code for this amount. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
         * Example: "USD".
         */
        "currency": string;
    };
    /**
     * ID of the catalog variant a `variant` line sells. minLength: 1. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id"?: string;
    /**
     * Variant IDs buyers may choose from, in the order offered. Contains 1 to 100 unique, active,
     * sellable variants of one product in one currency. Available only on standard payment links.
     * Mutually exclusive with variant_id, bundle_id, and ad hoc line item fields. minItems: 1.
     * maxItems: 100. uniqueItems: true. [] (Value): string. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_ids"?: Array<string>;
})
    & (({
    /** Value enum: true. */
    "allow_unit_price_adjustment": boolean;
    /** Value enum: "custom_variable". */
    "type": "custom_variable" | (string & {});
    /**
     * Name of an ad hoc line item. Catalog lines take the catalog name. Surrounding whitespace is
     * trimmed before length validation. A supplied value cannot be blank; use null where clearing
     * is supported. minLength: 1. maxLength: 255.
     */
    "name": string;
}));
/** The `custom_variable` variant of `PaymentLinkLineItemInput`. */
export type PaymentLinkLineItemInputCustomVariableInput = ({
    /** Whether the buyer can change the quantity in checkout. */
    "allow_quantity_adjustment"?: boolean;
    /** Whether the buyer sets the unit price. Only `custom_variable` lines allow it. */
    "allow_unit_price_adjustment": boolean;
    /**
     * ID of the catalog bundle a `bundle` line sells. minLength: 1. Example:
     * "bun_01KEZF7C00TQ6S76Z6CVQF5SVN".
     */
    "bundle_id"?: string;
    /**
     * Variant selected when the page opens and used at resolve when the buyer omits a selection.
     * Must be in variant_ids. Omit it to require a buyer selection. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "default_variant_id"?: string;
    /** Description of an ad hoc line item. minLength: 1. maxLength: 2048. */
    "description"?: string;
    /**
     * Keys the resolve override maps. Stable line item key used in checkout overrides. Must not
     * have leading or trailing whitespace. Assigned as line_item_1, line_item_2, and so on when
     * omitted, skipping numbers already used by explicit keys; retained for an existing line item
     * when omitted on update. minLength: 1. maxLength: 100.
     */
    "key"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "max_quantity"?: number;
    /**
     * Optional whole-number admission capacity across all orders for an event tier; fractional
     * quantities are not supported. Must be at least 1 and cannot exceed
     * event_config.max_total_quantity when the event is capped. Omit for no tier cap; omitting it
     * in a line_items replacement removes an existing cap. Format: int32. minimum: 1.
     */
    "max_total_quantity"?: number;
    /**
     * Highest unit price the buyer can enter when `allow_unit_price_adjustment` is true. Must be
     * greater than zero and greater than or equal to min_unit_price_money. Omit for no maximum.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "max_unit_price_money"?: MoneyValueInput;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "min_quantity"?: number;
    /**
     * Lowest unit price the buyer can enter when `allow_unit_price_adjustment` is true. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "min_unit_price_money"?: MoneyValueInput;
    /**
     * Name of an ad hoc line item. Catalog lines take the catalog name. Surrounding whitespace is
     * trimmed before length validation. A supplied value cannot be blank; use null where clearing
     * is supported. minLength: 1. maxLength: 255.
     */
    "name": string;
    /**
     * Classification of a custom line for ACH debit: physical, digital, service, or fee. Omit to
     * leave it unclassified; no default is inferred from fulfillment. Null is not accepted. Does
     * not change tax, delivery, or inventory. On an order line PATCH, omission preserves the
     * classification. Catalog lines use their product's type and reject this input. Value enum:
     * "physical", "service", "fee", "digital".
     */
    "product_type"?: "physical" | "service" | "fee" | "digital";
    /**
     * Whole-number default quantity; fractional quantities are not supported. Omission uses 1.
     * Must be at least 1 for standard links; event tiers also accept 0. Format: int32. Default: 1.
     */
    "quantity"?: number;
    /**
     * Unit prices offered as one-tap choices when the buyer sets the price. [] (Value): {@link
     * MoneyValueInput}. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "suggested_unit_price_money_options"?: Array<MoneyValueInput>;
    /**
     * Tax settings for an ad hoc line item. Catalog lines use the catalog's. A line item's tax
     * category and whether it is taxable.
     */
    "tax"?: OrderLineItemTaxRequestInput;
    /** How the line item is defined. Value enum: "custom_variable". */
    "type": "custom_variable";
    /**
     * Price of one unit of a `custom_fixed` line item. amount (Required): integer string. Positive
     * amount in the currency's minor unit, such as cents for USD. Use an integer string (decimal
     * digits), not a floating-point number. Format: int64. minimum: 1. currency (Required):
     * string. ISO 4217 currency code for this amount. minLength: 3. maxLength: 3. pattern:
     * ^[A-Z]{3}$. Example: "USD".
     */
    "unit_price_money"?: {
        /**
         * Positive amount in the currency's minor unit, such as cents for USD. Use an integer
         * string (decimal digits), not a floating-point number. Format: int64. minimum: 1.
         */
        "amount": `${bigint}` | bigint;
        /**
         * ISO 4217 currency code for this amount. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
         * Example: "USD".
         */
        "currency": string;
    };
    /**
     * ID of the catalog variant a `variant` line sells. minLength: 1. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id"?: string;
    /**
     * Variant IDs buyers may choose from, in the order offered. Contains 1 to 100 unique, active,
     * sellable variants of one product in one currency. Available only on standard payment links.
     * Mutually exclusive with variant_id, bundle_id, and ad hoc line item fields. minItems: 1.
     * maxItems: 100. uniqueItems: true. [] (Value): string. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_ids"?: Array<string>;
})
    & (({
    /** Value enum: true. */
    "allow_unit_price_adjustment": true;
    /** Value enum: "custom_variable". */
    "type": ("custom_variable") & ("custom_variable");
    /**
     * Name of an ad hoc line item. Catalog lines take the catalog name. Surrounding whitespace is
     * trimmed before length validation. A supplied value cannot be blank; use null where clearing
     * is supported. minLength: 1. maxLength: 255.
     */
    "name": string;
})
    & (({
    "variant_id"?: never;
})
    & ({
    "variant_ids"?: never;
})
    & ({
    "default_variant_id"?: never;
})
    & ({
    "bundle_id"?: never;
})));
/** The `variant` variant of `PaymentLinkLineItemInput`. */
export type PaymentLinkLineItemInputVariant = ({
    /** Whether the buyer can change the quantity in checkout. */
    "allow_quantity_adjustment"?: boolean;
    /** Whether the buyer sets the unit price. Only `custom_variable` lines allow it. */
    "allow_unit_price_adjustment"?: boolean;
    /**
     * ID of the catalog bundle a `bundle` line sells. minLength: 1. Example:
     * "bun_01KEZF7C00TQ6S76Z6CVQF5SVN".
     */
    "bundle_id"?: string;
    /**
     * Variant selected when the page opens and used at resolve when the buyer omits a selection.
     * Must be in variant_ids. Omit it to require a buyer selection. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "default_variant_id"?: string;
    /** Description of an ad hoc line item. minLength: 1. maxLength: 2048. */
    "description"?: string;
    /**
     * Keys the resolve override maps. Stable line item key used in checkout overrides. Must not
     * have leading or trailing whitespace. Assigned as line_item_1, line_item_2, and so on when
     * omitted, skipping numbers already used by explicit keys; retained for an existing line item
     * when omitted on update. minLength: 1. maxLength: 100.
     */
    "key"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "max_quantity"?: number;
    /**
     * Optional whole-number admission capacity across all orders for an event tier; fractional
     * quantities are not supported. Must be at least 1 and cannot exceed
     * event_config.max_total_quantity when the event is capped. Omit for no tier cap; omitting it
     * in a line_items replacement removes an existing cap. Format: int32. minimum: 1.
     */
    "max_total_quantity"?: number;
    /**
     * Highest unit price the buyer can enter when `allow_unit_price_adjustment` is true. Must be
     * greater than zero and greater than or equal to min_unit_price_money. Omit for no maximum.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "max_unit_price_money"?: MoneyValue;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "min_quantity"?: number;
    /**
     * Lowest unit price the buyer can enter when `allow_unit_price_adjustment` is true. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "min_unit_price_money"?: MoneyValue;
    /**
     * Name of an ad hoc line item. Catalog lines take the catalog name. Surrounding whitespace is
     * trimmed before length validation. A supplied value cannot be blank; use null where clearing
     * is supported. minLength: 1. maxLength: 255.
     */
    "name"?: string;
    /**
     * Classification of a custom line for ACH debit: physical, digital, service, or fee. Omit to
     * leave it unclassified; no default is inferred from fulfillment. Null is not accepted. Does
     * not change tax, delivery, or inventory. On an order line PATCH, omission preserves the
     * classification. Catalog lines use their product's type and reject this input. Value enum:
     * "physical", "service", "fee", "digital".
     */
    "product_type"?: "physical" | "service" | "fee" | "digital" | (string & {});
    /**
     * Whole-number default quantity; fractional quantities are not supported. Omission uses 1.
     * Must be at least 1 for standard links; event tiers also accept 0. Format: int32. Default: 1.
     */
    "quantity"?: number;
    /**
     * Unit prices offered as one-tap choices when the buyer sets the price. [] (Value): {@link
     * MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code.
     */
    "suggested_unit_price_money_options"?: Array<MoneyValue>;
    /**
     * Tax settings for an ad hoc line item. Catalog lines use the catalog's. A line item's tax
     * category and whether it is taxable.
     */
    "tax"?: OrderLineItemTax;
    /** How the line item is defined. Value enum: "variant". */
    "type": "variant" | (string & {});
    /**
     * Price of one unit of a `custom_fixed` line item. amount (Required): integer string. Positive
     * amount in the currency's minor unit, such as cents for USD. Use an integer string (decimal
     * digits), not a floating-point number. Format: int64. minimum: 1. currency (Required):
     * string. ISO 4217 currency code for this amount. minLength: 3. maxLength: 3. pattern:
     * ^[A-Z]{3}$. Example: "USD".
     */
    "unit_price_money"?: {
        /**
         * Positive amount in the currency's minor unit, such as cents for USD. Use an integer
         * string (decimal digits), not a floating-point number. Format: int64. minimum: 1.
         */
        "amount": `${bigint}`;
        /**
         * ISO 4217 currency code for this amount. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
         * Example: "USD".
         */
        "currency": string;
    };
    /**
     * ID of the catalog variant a `variant` line sells. minLength: 1. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id"?: string;
    /**
     * Variant IDs buyers may choose from, in the order offered. Contains 1 to 100 unique, active,
     * sellable variants of one product in one currency. Available only on standard payment links.
     * Mutually exclusive with variant_id, bundle_id, and ad hoc line item fields. minItems: 1.
     * maxItems: 100. uniqueItems: true. [] (Value): string. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_ids"?: Array<string>;
})
    & (({
    /** Value enum: "variant". */
    "type": "variant" | (string & {});
})
    & (({
    /**
     * ID of the catalog variant a `variant` line sells. minLength: 1. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id": string;
})
    | ({
    /**
     * Variant IDs buyers may choose from, in the order offered. Contains 1 to 100 unique, active,
     * sellable variants of one product in one currency. Available only on standard payment links.
     * Mutually exclusive with variant_id, bundle_id, and ad hoc line item fields. minItems: 1.
     * maxItems: 100. uniqueItems: true. [] (Value): string. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_ids": Array<string>;
})
    | (Record<string, unknown>)));
/** The `variant` variant of `PaymentLinkLineItemInput`. */
export type PaymentLinkLineItemInputVariantInput = ({
    /** Whether the buyer can change the quantity in checkout. */
    "allow_quantity_adjustment"?: boolean;
    /** Whether the buyer sets the unit price. Only `custom_variable` lines allow it. */
    "allow_unit_price_adjustment"?: boolean;
    /**
     * ID of the catalog bundle a `bundle` line sells. minLength: 1. Example:
     * "bun_01KEZF7C00TQ6S76Z6CVQF5SVN".
     */
    "bundle_id"?: string;
    /**
     * Variant selected when the page opens and used at resolve when the buyer omits a selection.
     * Must be in variant_ids. Omit it to require a buyer selection. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "default_variant_id"?: string;
    /** Description of an ad hoc line item. minLength: 1. maxLength: 2048. */
    "description"?: string;
    /**
     * Keys the resolve override maps. Stable line item key used in checkout overrides. Must not
     * have leading or trailing whitespace. Assigned as line_item_1, line_item_2, and so on when
     * omitted, skipping numbers already used by explicit keys; retained for an existing line item
     * when omitted on update. minLength: 1. maxLength: 100.
     */
    "key"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "max_quantity"?: number;
    /**
     * Optional whole-number admission capacity across all orders for an event tier; fractional
     * quantities are not supported. Must be at least 1 and cannot exceed
     * event_config.max_total_quantity when the event is capped. Omit for no tier cap; omitting it
     * in a line_items replacement removes an existing cap. Format: int32. minimum: 1.
     */
    "max_total_quantity"?: number;
    /**
     * Highest unit price the buyer can enter when `allow_unit_price_adjustment` is true. Must be
     * greater than zero and greater than or equal to min_unit_price_money. Omit for no maximum.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "max_unit_price_money"?: MoneyValueInput;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "min_quantity"?: number;
    /**
     * Lowest unit price the buyer can enter when `allow_unit_price_adjustment` is true. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "min_unit_price_money"?: MoneyValueInput;
    /**
     * Name of an ad hoc line item. Catalog lines take the catalog name. Surrounding whitespace is
     * trimmed before length validation. A supplied value cannot be blank; use null where clearing
     * is supported. minLength: 1. maxLength: 255.
     */
    "name"?: string;
    /**
     * Classification of a custom line for ACH debit: physical, digital, service, or fee. Omit to
     * leave it unclassified; no default is inferred from fulfillment. Null is not accepted. Does
     * not change tax, delivery, or inventory. On an order line PATCH, omission preserves the
     * classification. Catalog lines use their product's type and reject this input. Value enum:
     * "physical", "service", "fee", "digital".
     */
    "product_type"?: "physical" | "service" | "fee" | "digital";
    /**
     * Whole-number default quantity; fractional quantities are not supported. Omission uses 1.
     * Must be at least 1 for standard links; event tiers also accept 0. Format: int32. Default: 1.
     */
    "quantity"?: number;
    /**
     * Unit prices offered as one-tap choices when the buyer sets the price. [] (Value): {@link
     * MoneyValueInput}. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "suggested_unit_price_money_options"?: Array<MoneyValueInput>;
    /**
     * Tax settings for an ad hoc line item. Catalog lines use the catalog's. A line item's tax
     * category and whether it is taxable.
     */
    "tax"?: OrderLineItemTaxRequestInput;
    /** How the line item is defined. Value enum: "variant". */
    "type": "variant";
    /**
     * Price of one unit of a `custom_fixed` line item. amount (Required): integer string. Positive
     * amount in the currency's minor unit, such as cents for USD. Use an integer string (decimal
     * digits), not a floating-point number. Format: int64. minimum: 1. currency (Required):
     * string. ISO 4217 currency code for this amount. minLength: 3. maxLength: 3. pattern:
     * ^[A-Z]{3}$. Example: "USD".
     */
    "unit_price_money"?: {
        /**
         * Positive amount in the currency's minor unit, such as cents for USD. Use an integer
         * string (decimal digits), not a floating-point number. Format: int64. minimum: 1.
         */
        "amount": `${bigint}` | bigint;
        /**
         * ISO 4217 currency code for this amount. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
         * Example: "USD".
         */
        "currency": string;
    };
    /**
     * ID of the catalog variant a `variant` line sells. minLength: 1. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id"?: string;
    /**
     * Variant IDs buyers may choose from, in the order offered. Contains 1 to 100 unique, active,
     * sellable variants of one product in one currency. Available only on standard payment links.
     * Mutually exclusive with variant_id, bundle_id, and ad hoc line item fields. minItems: 1.
     * maxItems: 100. uniqueItems: true. [] (Value): string. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_ids"?: Array<string>;
})
    & (({
    /** Value enum: "variant". */
    "type": ("variant") & ("variant");
})
    & (({
    /**
     * ID of the catalog variant a `variant` line sells. minLength: 1. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id": string;
})
    | ({
    /**
     * Variant IDs buyers may choose from, in the order offered. Contains 1 to 100 unique, active,
     * sellable variants of one product in one currency. Available only on standard payment links.
     * Mutually exclusive with variant_id, bundle_id, and ad hoc line item fields. minItems: 1.
     * maxItems: 100. uniqueItems: true. [] (Value): string. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_ids": Array<string>;
}))
    & (({
    "bundle_id"?: never;
})
    & ({
    "name"?: never;
})
    & ({
    "unit_price_money"?: never;
})
    & ({
    "description"?: never;
})
    & ({
    "tax"?: never;
})
    & ({
    "allow_unit_price_adjustment"?: never;
})
    & ({
    "min_unit_price_money"?: never;
})
    & ({
    "max_unit_price_money"?: never;
})
    & ({
    "suggested_unit_price_money_options"?: never;
})
    & ({
    "product_type"?: never;
})
    & ({
    "variant_id"?: never;
} | {
    "variant_ids"?: never;
})));
/** The `bundle` variant of `PaymentLinkLineItemPatchInput`. */
export type PaymentLinkLineItemPatchInputBundle = ({
    /** Whether the buyer can change the quantity in checkout. */
    "allow_quantity_adjustment"?: boolean;
    /** Whether the buyer sets the unit price. Only `custom_variable` lines allow it. */
    "allow_unit_price_adjustment"?: boolean;
    /**
     * ID of the catalog bundle a `bundle` line sells. minLength: 1. Example:
     * "bun_01KEZF7C00TQ6S76Z6CVQF5SVN".
     */
    "bundle_id": string;
    /**
     * Variant selected when the page opens and used at resolve when the buyer omits a selection.
     * Must be in variant_ids. Omit it to require a buyer selection. Send null to clear it.
     * minLength: 1. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "default_variant_id"?: string | null;
    /** Description of an ad hoc line item. minLength: 1. maxLength: 2048. */
    "description"?: string;
    /**
     * Keys the resolve override maps. Stable line item key used in checkout overrides. Must not
     * have leading or trailing whitespace. Assigned as line_item_1, line_item_2, and so on when
     * omitted, skipping numbers already used by explicit keys; retained for an existing line item
     * when omitted on update. minLength: 1. maxLength: 100.
     */
    "key"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "max_quantity"?: number;
    /**
     * Optional whole-number admission capacity across all orders for an event tier; fractional
     * quantities are not supported. Must be at least 1 and cannot exceed
     * event_config.max_total_quantity when the event is capped. Omit for no tier cap; omitting it
     * in a line_items replacement removes an existing cap. Format: int32. minimum: 1.
     */
    "max_total_quantity"?: number;
    /**
     * Highest unit price the buyer can enter when `allow_unit_price_adjustment` is true. Must be
     * greater than zero and greater than or equal to min_unit_price_money. Omit for no maximum.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "max_unit_price_money"?: MoneyValue;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "min_quantity"?: number;
    /**
     * Lowest unit price the buyer can enter when `allow_unit_price_adjustment` is true. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "min_unit_price_money"?: MoneyValue;
    /**
     * Name of an ad hoc line item. Catalog lines take the catalog name. Surrounding whitespace is
     * trimmed before length validation. A supplied value cannot be blank; use null where clearing
     * is supported. minLength: 1. maxLength: 255.
     */
    "name"?: string;
    /**
     * Stable ID of an existing line item. Omit it to create a new line item. minLength: 1.
     * Example: "plli_01KEZF7C004V7GVCCNMYYCBAJS".
     */
    "payment_link_line_item_id"?: string;
    /**
     * Classification of a custom line for ACH debit: physical, digital, service, or fee. Omit to
     * leave it unclassified; no default is inferred from fulfillment. Null is not accepted. Does
     * not change tax, delivery, or inventory. On an order line PATCH, omission preserves the
     * classification. Catalog lines use their product's type and reject this input. Value enum:
     * "physical", "service", "fee", "digital".
     */
    "product_type"?: "physical" | "service" | "fee" | "digital" | (string & {});
    /**
     * Whole-number default quantity; fractional quantities are not supported. Omission uses 1.
     * Must be at least 1 for standard links; event tiers also accept 0. Format: int32. Default: 1.
     */
    "quantity"?: number;
    /**
     * Unit prices offered as one-tap choices when the buyer sets the price. [] (Value): {@link
     * MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code.
     */
    "suggested_unit_price_money_options"?: Array<MoneyValue>;
    /**
     * Tax settings for an ad hoc line item. Catalog lines use the catalog's. A line item's tax
     * category and whether it is taxable.
     */
    "tax"?: OrderLineItemTax;
    /** How the line item is defined. Value enum: "bundle". */
    "type": "bundle" | (string & {});
    /**
     * Price of one unit of a `custom_fixed` line item. amount (Required): integer string. Positive
     * amount in the currency's minor unit, such as cents for USD. Use an integer string (decimal
     * digits), not a floating-point number. Format: int64. minimum: 1. currency (Required):
     * string. ISO 4217 currency code for this amount. minLength: 3. maxLength: 3. pattern:
     * ^[A-Z]{3}$. Example: "USD".
     */
    "unit_price_money"?: {
        /**
         * Positive amount in the currency's minor unit, such as cents for USD. Use an integer
         * string (decimal digits), not a floating-point number. Format: int64. minimum: 1.
         */
        "amount": `${bigint}`;
        /**
         * ISO 4217 currency code for this amount. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
         * Example: "USD".
         */
        "currency": string;
    };
    /**
     * ID of the catalog variant a `variant` line sells. minLength: 1. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id"?: string;
    /**
     * Variant IDs buyers may choose from, in the order offered. Contains 1 to 100 unique, active,
     * sellable variants of one product in one currency. Available only on standard payment links.
     * Mutually exclusive with variant_id, bundle_id, and ad hoc line item fields. minItems: 1.
     * maxItems: 100. uniqueItems: true. [] (Value): string. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_ids"?: Array<string>;
})
    & (({
    /** Value enum: "bundle". */
    "type": "bundle" | (string & {});
    /**
     * ID of the catalog bundle a `bundle` line sells. minLength: 1. Example:
     * "bun_01KEZF7C00TQ6S76Z6CVQF5SVN".
     */
    "bundle_id": string;
}));
/** The `bundle` variant of `PaymentLinkLineItemPatchInput`. */
export type PaymentLinkLineItemPatchInputBundleInput = ({
    /** Whether the buyer can change the quantity in checkout. */
    "allow_quantity_adjustment"?: boolean;
    /** Whether the buyer sets the unit price. Only `custom_variable` lines allow it. */
    "allow_unit_price_adjustment"?: boolean;
    /**
     * ID of the catalog bundle a `bundle` line sells. minLength: 1. Example:
     * "bun_01KEZF7C00TQ6S76Z6CVQF5SVN".
     */
    "bundle_id": string;
    /**
     * Variant selected when the page opens and used at resolve when the buyer omits a selection.
     * Must be in variant_ids. Omit it to require a buyer selection. Send null to clear it.
     * minLength: 1. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "default_variant_id"?: string | null;
    /** Description of an ad hoc line item. minLength: 1. maxLength: 2048. */
    "description"?: string;
    /**
     * Keys the resolve override maps. Stable line item key used in checkout overrides. Must not
     * have leading or trailing whitespace. Assigned as line_item_1, line_item_2, and so on when
     * omitted, skipping numbers already used by explicit keys; retained for an existing line item
     * when omitted on update. minLength: 1. maxLength: 100.
     */
    "key"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "max_quantity"?: number;
    /**
     * Optional whole-number admission capacity across all orders for an event tier; fractional
     * quantities are not supported. Must be at least 1 and cannot exceed
     * event_config.max_total_quantity when the event is capped. Omit for no tier cap; omitting it
     * in a line_items replacement removes an existing cap. Format: int32. minimum: 1.
     */
    "max_total_quantity"?: number;
    /**
     * Highest unit price the buyer can enter when `allow_unit_price_adjustment` is true. Must be
     * greater than zero and greater than or equal to min_unit_price_money. Omit for no maximum.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "max_unit_price_money"?: MoneyValueInput;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "min_quantity"?: number;
    /**
     * Lowest unit price the buyer can enter when `allow_unit_price_adjustment` is true. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "min_unit_price_money"?: MoneyValueInput;
    /**
     * Name of an ad hoc line item. Catalog lines take the catalog name. Surrounding whitespace is
     * trimmed before length validation. A supplied value cannot be blank; use null where clearing
     * is supported. minLength: 1. maxLength: 255.
     */
    "name"?: string;
    /**
     * Stable ID of an existing line item. Omit it to create a new line item. minLength: 1.
     * Example: "plli_01KEZF7C004V7GVCCNMYYCBAJS".
     */
    "payment_link_line_item_id"?: string;
    /**
     * Classification of a custom line for ACH debit: physical, digital, service, or fee. Omit to
     * leave it unclassified; no default is inferred from fulfillment. Null is not accepted. Does
     * not change tax, delivery, or inventory. On an order line PATCH, omission preserves the
     * classification. Catalog lines use their product's type and reject this input. Value enum:
     * "physical", "service", "fee", "digital".
     */
    "product_type"?: "physical" | "service" | "fee" | "digital";
    /**
     * Whole-number default quantity; fractional quantities are not supported. Omission uses 1.
     * Must be at least 1 for standard links; event tiers also accept 0. Format: int32. Default: 1.
     */
    "quantity"?: number;
    /**
     * Unit prices offered as one-tap choices when the buyer sets the price. [] (Value): {@link
     * MoneyValueInput}. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "suggested_unit_price_money_options"?: Array<MoneyValueInput>;
    /**
     * Tax settings for an ad hoc line item. Catalog lines use the catalog's. A line item's tax
     * category and whether it is taxable.
     */
    "tax"?: OrderLineItemTaxRequestInput;
    /** How the line item is defined. Value enum: "bundle". */
    "type": "bundle";
    /**
     * Price of one unit of a `custom_fixed` line item. amount (Required): integer string. Positive
     * amount in the currency's minor unit, such as cents for USD. Use an integer string (decimal
     * digits), not a floating-point number. Format: int64. minimum: 1. currency (Required):
     * string. ISO 4217 currency code for this amount. minLength: 3. maxLength: 3. pattern:
     * ^[A-Z]{3}$. Example: "USD".
     */
    "unit_price_money"?: {
        /**
         * Positive amount in the currency's minor unit, such as cents for USD. Use an integer
         * string (decimal digits), not a floating-point number. Format: int64. minimum: 1.
         */
        "amount": `${bigint}` | bigint;
        /**
         * ISO 4217 currency code for this amount. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
         * Example: "USD".
         */
        "currency": string;
    };
    /**
     * ID of the catalog variant a `variant` line sells. minLength: 1. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id"?: string;
    /**
     * Variant IDs buyers may choose from, in the order offered. Contains 1 to 100 unique, active,
     * sellable variants of one product in one currency. Available only on standard payment links.
     * Mutually exclusive with variant_id, bundle_id, and ad hoc line item fields. minItems: 1.
     * maxItems: 100. uniqueItems: true. [] (Value): string. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_ids"?: Array<string>;
})
    & (({
    /** Value enum: "bundle". */
    "type": ("bundle") & ("bundle");
    /**
     * ID of the catalog bundle a `bundle` line sells. minLength: 1. Example:
     * "bun_01KEZF7C00TQ6S76Z6CVQF5SVN".
     */
    "bundle_id": string;
})
    & (({
    "variant_id"?: never;
})
    & ({
    "variant_ids"?: never;
})
    & ({
    "default_variant_id"?: never;
})
    & ({
    "name"?: never;
})
    & ({
    "unit_price_money"?: never;
})
    & ({
    "description"?: never;
})
    & ({
    "tax"?: never;
})
    & ({
    "allow_unit_price_adjustment"?: never;
})
    & ({
    "min_unit_price_money"?: never;
})
    & ({
    "max_unit_price_money"?: never;
})
    & ({
    "suggested_unit_price_money_options"?: never;
})
    & ({
    "product_type"?: never;
})));
/** The `custom_fixed` variant of `PaymentLinkLineItemPatchInput`. */
export type PaymentLinkLineItemPatchInputCustomFixed = ({
    /** Whether the buyer can change the quantity in checkout. */
    "allow_quantity_adjustment"?: boolean;
    /** Whether the buyer sets the unit price. Only `custom_variable` lines allow it. */
    "allow_unit_price_adjustment"?: boolean;
    /**
     * ID of the catalog bundle a `bundle` line sells. minLength: 1. Example:
     * "bun_01KEZF7C00TQ6S76Z6CVQF5SVN".
     */
    "bundle_id"?: string;
    /**
     * Variant selected when the page opens and used at resolve when the buyer omits a selection.
     * Must be in variant_ids. Omit it to require a buyer selection. Send null to clear it.
     * minLength: 1. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "default_variant_id"?: string | null;
    /** Description of an ad hoc line item. minLength: 1. maxLength: 2048. */
    "description"?: string;
    /**
     * Keys the resolve override maps. Stable line item key used in checkout overrides. Must not
     * have leading or trailing whitespace. Assigned as line_item_1, line_item_2, and so on when
     * omitted, skipping numbers already used by explicit keys; retained for an existing line item
     * when omitted on update. minLength: 1. maxLength: 100.
     */
    "key"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "max_quantity"?: number;
    /**
     * Optional whole-number admission capacity across all orders for an event tier; fractional
     * quantities are not supported. Must be at least 1 and cannot exceed
     * event_config.max_total_quantity when the event is capped. Omit for no tier cap; omitting it
     * in a line_items replacement removes an existing cap. Format: int32. minimum: 1.
     */
    "max_total_quantity"?: number;
    /**
     * Highest unit price the buyer can enter when `allow_unit_price_adjustment` is true. Must be
     * greater than zero and greater than or equal to min_unit_price_money. Omit for no maximum.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "max_unit_price_money"?: MoneyValue;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "min_quantity"?: number;
    /**
     * Lowest unit price the buyer can enter when `allow_unit_price_adjustment` is true. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "min_unit_price_money"?: MoneyValue;
    /**
     * Name of an ad hoc line item. Catalog lines take the catalog name. Surrounding whitespace is
     * trimmed before length validation. A supplied value cannot be blank; use null where clearing
     * is supported. minLength: 1. maxLength: 255.
     */
    "name": string;
    /**
     * Stable ID of an existing line item. Omit it to create a new line item. minLength: 1.
     * Example: "plli_01KEZF7C004V7GVCCNMYYCBAJS".
     */
    "payment_link_line_item_id"?: string;
    /**
     * Classification of a custom line for ACH debit: physical, digital, service, or fee. Omit to
     * leave it unclassified; no default is inferred from fulfillment. Null is not accepted. Does
     * not change tax, delivery, or inventory. On an order line PATCH, omission preserves the
     * classification. Catalog lines use their product's type and reject this input. Value enum:
     * "physical", "service", "fee", "digital".
     */
    "product_type"?: "physical" | "service" | "fee" | "digital" | (string & {});
    /**
     * Whole-number default quantity; fractional quantities are not supported. Omission uses 1.
     * Must be at least 1 for standard links; event tiers also accept 0. Format: int32. Default: 1.
     */
    "quantity"?: number;
    /**
     * Unit prices offered as one-tap choices when the buyer sets the price. [] (Value): {@link
     * MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code.
     */
    "suggested_unit_price_money_options"?: Array<MoneyValue>;
    /**
     * Tax settings for an ad hoc line item. Catalog lines use the catalog's. A line item's tax
     * category and whether it is taxable.
     */
    "tax"?: OrderLineItemTax;
    /** How the line item is defined. Value enum: "custom_fixed". */
    "type": "custom_fixed" | (string & {});
    /**
     * Price of one unit of a `custom_fixed` line item. amount (Required): integer string. Positive
     * amount in the currency's minor unit, such as cents for USD. Use an integer string (decimal
     * digits), not a floating-point number. Format: int64. minimum: 1. currency (Required):
     * string. ISO 4217 currency code for this amount. minLength: 3. maxLength: 3. pattern:
     * ^[A-Z]{3}$. Example: "USD".
     */
    "unit_price_money": {
        /**
         * Positive amount in the currency's minor unit, such as cents for USD. Use an integer
         * string (decimal digits), not a floating-point number. Format: int64. minimum: 1.
         */
        "amount": `${bigint}`;
        /**
         * ISO 4217 currency code for this amount. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
         * Example: "USD".
         */
        "currency": string;
    };
    /**
     * ID of the catalog variant a `variant` line sells. minLength: 1. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id"?: string;
    /**
     * Variant IDs buyers may choose from, in the order offered. Contains 1 to 100 unique, active,
     * sellable variants of one product in one currency. Available only on standard payment links.
     * Mutually exclusive with variant_id, bundle_id, and ad hoc line item fields. minItems: 1.
     * maxItems: 100. uniqueItems: true. [] (Value): string. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_ids"?: Array<string>;
})
    & (({
    /** Value enum: false. */
    "allow_unit_price_adjustment"?: boolean;
    /** Value enum: "custom_fixed". */
    "type": "custom_fixed" | (string & {});
    /**
     * Name of an ad hoc line item. Catalog lines take the catalog name. Surrounding whitespace is
     * trimmed before length validation. A supplied value cannot be blank; use null where clearing
     * is supported. minLength: 1. maxLength: 255.
     */
    "name": string;
    /**
     * Price of one unit of a `custom_fixed` line item. amount (Required): integer string. Positive
     * amount in the currency's minor unit, such as cents for USD. Use an integer string (decimal
     * digits), not a floating-point number. Format: int64. minimum: 1. currency (Required):
     * string. ISO 4217 currency code for this amount. minLength: 3. maxLength: 3. pattern:
     * ^[A-Z]{3}$. Example: "USD".
     */
    "unit_price_money": {
        /**
         * Positive amount in the currency's minor unit, such as cents for USD. Use an integer
         * string (decimal digits), not a floating-point number. Format: int64. minimum: 1.
         */
        "amount": `${bigint}`;
        /**
         * ISO 4217 currency code for this amount. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
         * Example: "USD".
         */
        "currency": string;
    };
}));
/** The `custom_fixed` variant of `PaymentLinkLineItemPatchInput`. */
export type PaymentLinkLineItemPatchInputCustomFixedInput = ({
    /** Whether the buyer can change the quantity in checkout. */
    "allow_quantity_adjustment"?: boolean;
    /** Whether the buyer sets the unit price. Only `custom_variable` lines allow it. */
    "allow_unit_price_adjustment"?: boolean;
    /**
     * ID of the catalog bundle a `bundle` line sells. minLength: 1. Example:
     * "bun_01KEZF7C00TQ6S76Z6CVQF5SVN".
     */
    "bundle_id"?: string;
    /**
     * Variant selected when the page opens and used at resolve when the buyer omits a selection.
     * Must be in variant_ids. Omit it to require a buyer selection. Send null to clear it.
     * minLength: 1. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "default_variant_id"?: string | null;
    /** Description of an ad hoc line item. minLength: 1. maxLength: 2048. */
    "description"?: string;
    /**
     * Keys the resolve override maps. Stable line item key used in checkout overrides. Must not
     * have leading or trailing whitespace. Assigned as line_item_1, line_item_2, and so on when
     * omitted, skipping numbers already used by explicit keys; retained for an existing line item
     * when omitted on update. minLength: 1. maxLength: 100.
     */
    "key"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "max_quantity"?: number;
    /**
     * Optional whole-number admission capacity across all orders for an event tier; fractional
     * quantities are not supported. Must be at least 1 and cannot exceed
     * event_config.max_total_quantity when the event is capped. Omit for no tier cap; omitting it
     * in a line_items replacement removes an existing cap. Format: int32. minimum: 1.
     */
    "max_total_quantity"?: number;
    /**
     * Highest unit price the buyer can enter when `allow_unit_price_adjustment` is true. Must be
     * greater than zero and greater than or equal to min_unit_price_money. Omit for no maximum.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "max_unit_price_money"?: MoneyValueInput;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "min_quantity"?: number;
    /**
     * Lowest unit price the buyer can enter when `allow_unit_price_adjustment` is true. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "min_unit_price_money"?: MoneyValueInput;
    /**
     * Name of an ad hoc line item. Catalog lines take the catalog name. Surrounding whitespace is
     * trimmed before length validation. A supplied value cannot be blank; use null where clearing
     * is supported. minLength: 1. maxLength: 255.
     */
    "name": string;
    /**
     * Stable ID of an existing line item. Omit it to create a new line item. minLength: 1.
     * Example: "plli_01KEZF7C004V7GVCCNMYYCBAJS".
     */
    "payment_link_line_item_id"?: string;
    /**
     * Classification of a custom line for ACH debit: physical, digital, service, or fee. Omit to
     * leave it unclassified; no default is inferred from fulfillment. Null is not accepted. Does
     * not change tax, delivery, or inventory. On an order line PATCH, omission preserves the
     * classification. Catalog lines use their product's type and reject this input. Value enum:
     * "physical", "service", "fee", "digital".
     */
    "product_type"?: "physical" | "service" | "fee" | "digital";
    /**
     * Whole-number default quantity; fractional quantities are not supported. Omission uses 1.
     * Must be at least 1 for standard links; event tiers also accept 0. Format: int32. Default: 1.
     */
    "quantity"?: number;
    /**
     * Unit prices offered as one-tap choices when the buyer sets the price. [] (Value): {@link
     * MoneyValueInput}. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "suggested_unit_price_money_options"?: Array<MoneyValueInput>;
    /**
     * Tax settings for an ad hoc line item. Catalog lines use the catalog's. A line item's tax
     * category and whether it is taxable.
     */
    "tax"?: OrderLineItemTaxRequestInput;
    /** How the line item is defined. Value enum: "custom_fixed". */
    "type": "custom_fixed";
    /**
     * Price of one unit of a `custom_fixed` line item. amount (Required): integer string. Positive
     * amount in the currency's minor unit, such as cents for USD. Use an integer string (decimal
     * digits), not a floating-point number. Format: int64. minimum: 1. currency (Required):
     * string. ISO 4217 currency code for this amount. minLength: 3. maxLength: 3. pattern:
     * ^[A-Z]{3}$. Example: "USD".
     */
    "unit_price_money": {
        /**
         * Positive amount in the currency's minor unit, such as cents for USD. Use an integer
         * string (decimal digits), not a floating-point number. Format: int64. minimum: 1.
         */
        "amount": `${bigint}` | bigint;
        /**
         * ISO 4217 currency code for this amount. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
         * Example: "USD".
         */
        "currency": string;
    };
    /**
     * ID of the catalog variant a `variant` line sells. minLength: 1. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id"?: string;
    /**
     * Variant IDs buyers may choose from, in the order offered. Contains 1 to 100 unique, active,
     * sellable variants of one product in one currency. Available only on standard payment links.
     * Mutually exclusive with variant_id, bundle_id, and ad hoc line item fields. minItems: 1.
     * maxItems: 100. uniqueItems: true. [] (Value): string. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_ids"?: Array<string>;
})
    & (({
    /** Value enum: false. */
    "allow_unit_price_adjustment"?: false;
    /** Value enum: "custom_fixed". */
    "type": ("custom_fixed") & ("custom_fixed");
    /**
     * Name of an ad hoc line item. Catalog lines take the catalog name. Surrounding whitespace is
     * trimmed before length validation. A supplied value cannot be blank; use null where clearing
     * is supported. minLength: 1. maxLength: 255.
     */
    "name": string;
    /**
     * Price of one unit of a `custom_fixed` line item. amount (Required): integer string. Positive
     * amount in the currency's minor unit, such as cents for USD. Use an integer string (decimal
     * digits), not a floating-point number. Format: int64. minimum: 1. currency (Required):
     * string. ISO 4217 currency code for this amount. minLength: 3. maxLength: 3. pattern:
     * ^[A-Z]{3}$. Example: "USD".
     */
    "unit_price_money": {
        /**
         * Positive amount in the currency's minor unit, such as cents for USD. Use an integer
         * string (decimal digits), not a floating-point number. Format: int64. minimum: 1.
         */
        "amount": `${bigint}` | bigint;
        /**
         * ISO 4217 currency code for this amount. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
         * Example: "USD".
         */
        "currency": string;
    };
})
    & (({
    "variant_id"?: never;
})
    & ({
    "variant_ids"?: never;
})
    & ({
    "default_variant_id"?: never;
})
    & ({
    "bundle_id"?: never;
})));
/** The `custom_variable` variant of `PaymentLinkLineItemPatchInput`. */
export type PaymentLinkLineItemPatchInputCustomVariable = ({
    /** Whether the buyer can change the quantity in checkout. */
    "allow_quantity_adjustment"?: boolean;
    /** Whether the buyer sets the unit price. Only `custom_variable` lines allow it. */
    "allow_unit_price_adjustment": boolean;
    /**
     * ID of the catalog bundle a `bundle` line sells. minLength: 1. Example:
     * "bun_01KEZF7C00TQ6S76Z6CVQF5SVN".
     */
    "bundle_id"?: string;
    /**
     * Variant selected when the page opens and used at resolve when the buyer omits a selection.
     * Must be in variant_ids. Omit it to require a buyer selection. Send null to clear it.
     * minLength: 1. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "default_variant_id"?: string | null;
    /** Description of an ad hoc line item. minLength: 1. maxLength: 2048. */
    "description"?: string;
    /**
     * Keys the resolve override maps. Stable line item key used in checkout overrides. Must not
     * have leading or trailing whitespace. Assigned as line_item_1, line_item_2, and so on when
     * omitted, skipping numbers already used by explicit keys; retained for an existing line item
     * when omitted on update. minLength: 1. maxLength: 100.
     */
    "key"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "max_quantity"?: number;
    /**
     * Optional whole-number admission capacity across all orders for an event tier; fractional
     * quantities are not supported. Must be at least 1 and cannot exceed
     * event_config.max_total_quantity when the event is capped. Omit for no tier cap; omitting it
     * in a line_items replacement removes an existing cap. Format: int32. minimum: 1.
     */
    "max_total_quantity"?: number;
    /**
     * Highest unit price the buyer can enter when `allow_unit_price_adjustment` is true. Must be
     * greater than zero and greater than or equal to min_unit_price_money. Omit for no maximum.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "max_unit_price_money"?: MoneyValue;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "min_quantity"?: number;
    /**
     * Lowest unit price the buyer can enter when `allow_unit_price_adjustment` is true. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "min_unit_price_money"?: MoneyValue;
    /**
     * Name of an ad hoc line item. Catalog lines take the catalog name. Surrounding whitespace is
     * trimmed before length validation. A supplied value cannot be blank; use null where clearing
     * is supported. minLength: 1. maxLength: 255.
     */
    "name": string;
    /**
     * Stable ID of an existing line item. Omit it to create a new line item. minLength: 1.
     * Example: "plli_01KEZF7C004V7GVCCNMYYCBAJS".
     */
    "payment_link_line_item_id"?: string;
    /**
     * Classification of a custom line for ACH debit: physical, digital, service, or fee. Omit to
     * leave it unclassified; no default is inferred from fulfillment. Null is not accepted. Does
     * not change tax, delivery, or inventory. On an order line PATCH, omission preserves the
     * classification. Catalog lines use their product's type and reject this input. Value enum:
     * "physical", "service", "fee", "digital".
     */
    "product_type"?: "physical" | "service" | "fee" | "digital" | (string & {});
    /**
     * Whole-number default quantity; fractional quantities are not supported. Omission uses 1.
     * Must be at least 1 for standard links; event tiers also accept 0. Format: int32. Default: 1.
     */
    "quantity"?: number;
    /**
     * Unit prices offered as one-tap choices when the buyer sets the price. [] (Value): {@link
     * MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code.
     */
    "suggested_unit_price_money_options"?: Array<MoneyValue>;
    /**
     * Tax settings for an ad hoc line item. Catalog lines use the catalog's. A line item's tax
     * category and whether it is taxable.
     */
    "tax"?: OrderLineItemTax;
    /** How the line item is defined. Value enum: "custom_variable". */
    "type": "custom_variable" | (string & {});
    /**
     * Price of one unit of a `custom_fixed` line item. amount (Required): integer string. Positive
     * amount in the currency's minor unit, such as cents for USD. Use an integer string (decimal
     * digits), not a floating-point number. Format: int64. minimum: 1. currency (Required):
     * string. ISO 4217 currency code for this amount. minLength: 3. maxLength: 3. pattern:
     * ^[A-Z]{3}$. Example: "USD".
     */
    "unit_price_money"?: {
        /**
         * Positive amount in the currency's minor unit, such as cents for USD. Use an integer
         * string (decimal digits), not a floating-point number. Format: int64. minimum: 1.
         */
        "amount": `${bigint}`;
        /**
         * ISO 4217 currency code for this amount. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
         * Example: "USD".
         */
        "currency": string;
    };
    /**
     * ID of the catalog variant a `variant` line sells. minLength: 1. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id"?: string;
    /**
     * Variant IDs buyers may choose from, in the order offered. Contains 1 to 100 unique, active,
     * sellable variants of one product in one currency. Available only on standard payment links.
     * Mutually exclusive with variant_id, bundle_id, and ad hoc line item fields. minItems: 1.
     * maxItems: 100. uniqueItems: true. [] (Value): string. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_ids"?: Array<string>;
})
    & (({
    /** Value enum: true. */
    "allow_unit_price_adjustment": boolean;
    /** Value enum: "custom_variable". */
    "type": "custom_variable" | (string & {});
    /**
     * Name of an ad hoc line item. Catalog lines take the catalog name. Surrounding whitespace is
     * trimmed before length validation. A supplied value cannot be blank; use null where clearing
     * is supported. minLength: 1. maxLength: 255.
     */
    "name": string;
}));
/** The `custom_variable` variant of `PaymentLinkLineItemPatchInput`. */
export type PaymentLinkLineItemPatchInputCustomVariableInput = ({
    /** Whether the buyer can change the quantity in checkout. */
    "allow_quantity_adjustment"?: boolean;
    /** Whether the buyer sets the unit price. Only `custom_variable` lines allow it. */
    "allow_unit_price_adjustment": boolean;
    /**
     * ID of the catalog bundle a `bundle` line sells. minLength: 1. Example:
     * "bun_01KEZF7C00TQ6S76Z6CVQF5SVN".
     */
    "bundle_id"?: string;
    /**
     * Variant selected when the page opens and used at resolve when the buyer omits a selection.
     * Must be in variant_ids. Omit it to require a buyer selection. Send null to clear it.
     * minLength: 1. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "default_variant_id"?: string | null;
    /** Description of an ad hoc line item. minLength: 1. maxLength: 2048. */
    "description"?: string;
    /**
     * Keys the resolve override maps. Stable line item key used in checkout overrides. Must not
     * have leading or trailing whitespace. Assigned as line_item_1, line_item_2, and so on when
     * omitted, skipping numbers already used by explicit keys; retained for an existing line item
     * when omitted on update. minLength: 1. maxLength: 100.
     */
    "key"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "max_quantity"?: number;
    /**
     * Optional whole-number admission capacity across all orders for an event tier; fractional
     * quantities are not supported. Must be at least 1 and cannot exceed
     * event_config.max_total_quantity when the event is capped. Omit for no tier cap; omitting it
     * in a line_items replacement removes an existing cap. Format: int32. minimum: 1.
     */
    "max_total_quantity"?: number;
    /**
     * Highest unit price the buyer can enter when `allow_unit_price_adjustment` is true. Must be
     * greater than zero and greater than or equal to min_unit_price_money. Omit for no maximum.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "max_unit_price_money"?: MoneyValueInput;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "min_quantity"?: number;
    /**
     * Lowest unit price the buyer can enter when `allow_unit_price_adjustment` is true. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "min_unit_price_money"?: MoneyValueInput;
    /**
     * Name of an ad hoc line item. Catalog lines take the catalog name. Surrounding whitespace is
     * trimmed before length validation. A supplied value cannot be blank; use null where clearing
     * is supported. minLength: 1. maxLength: 255.
     */
    "name": string;
    /**
     * Stable ID of an existing line item. Omit it to create a new line item. minLength: 1.
     * Example: "plli_01KEZF7C004V7GVCCNMYYCBAJS".
     */
    "payment_link_line_item_id"?: string;
    /**
     * Classification of a custom line for ACH debit: physical, digital, service, or fee. Omit to
     * leave it unclassified; no default is inferred from fulfillment. Null is not accepted. Does
     * not change tax, delivery, or inventory. On an order line PATCH, omission preserves the
     * classification. Catalog lines use their product's type and reject this input. Value enum:
     * "physical", "service", "fee", "digital".
     */
    "product_type"?: "physical" | "service" | "fee" | "digital";
    /**
     * Whole-number default quantity; fractional quantities are not supported. Omission uses 1.
     * Must be at least 1 for standard links; event tiers also accept 0. Format: int32. Default: 1.
     */
    "quantity"?: number;
    /**
     * Unit prices offered as one-tap choices when the buyer sets the price. [] (Value): {@link
     * MoneyValueInput}. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "suggested_unit_price_money_options"?: Array<MoneyValueInput>;
    /**
     * Tax settings for an ad hoc line item. Catalog lines use the catalog's. A line item's tax
     * category and whether it is taxable.
     */
    "tax"?: OrderLineItemTaxRequestInput;
    /** How the line item is defined. Value enum: "custom_variable". */
    "type": "custom_variable";
    /**
     * Price of one unit of a `custom_fixed` line item. amount (Required): integer string. Positive
     * amount in the currency's minor unit, such as cents for USD. Use an integer string (decimal
     * digits), not a floating-point number. Format: int64. minimum: 1. currency (Required):
     * string. ISO 4217 currency code for this amount. minLength: 3. maxLength: 3. pattern:
     * ^[A-Z]{3}$. Example: "USD".
     */
    "unit_price_money"?: {
        /**
         * Positive amount in the currency's minor unit, such as cents for USD. Use an integer
         * string (decimal digits), not a floating-point number. Format: int64. minimum: 1.
         */
        "amount": `${bigint}` | bigint;
        /**
         * ISO 4217 currency code for this amount. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
         * Example: "USD".
         */
        "currency": string;
    };
    /**
     * ID of the catalog variant a `variant` line sells. minLength: 1. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id"?: string;
    /**
     * Variant IDs buyers may choose from, in the order offered. Contains 1 to 100 unique, active,
     * sellable variants of one product in one currency. Available only on standard payment links.
     * Mutually exclusive with variant_id, bundle_id, and ad hoc line item fields. minItems: 1.
     * maxItems: 100. uniqueItems: true. [] (Value): string. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_ids"?: Array<string>;
})
    & (({
    /** Value enum: true. */
    "allow_unit_price_adjustment": true;
    /** Value enum: "custom_variable". */
    "type": ("custom_variable") & ("custom_variable");
    /**
     * Name of an ad hoc line item. Catalog lines take the catalog name. Surrounding whitespace is
     * trimmed before length validation. A supplied value cannot be blank; use null where clearing
     * is supported. minLength: 1. maxLength: 255.
     */
    "name": string;
})
    & (({
    "variant_id"?: never;
})
    & ({
    "variant_ids"?: never;
})
    & ({
    "default_variant_id"?: never;
})
    & ({
    "bundle_id"?: never;
})));
/** The `variant` variant of `PaymentLinkLineItemPatchInput`. */
export type PaymentLinkLineItemPatchInputVariant = ({
    /** Whether the buyer can change the quantity in checkout. */
    "allow_quantity_adjustment"?: boolean;
    /** Whether the buyer sets the unit price. Only `custom_variable` lines allow it. */
    "allow_unit_price_adjustment"?: boolean;
    /**
     * ID of the catalog bundle a `bundle` line sells. minLength: 1. Example:
     * "bun_01KEZF7C00TQ6S76Z6CVQF5SVN".
     */
    "bundle_id"?: string;
    /**
     * Variant selected when the page opens and used at resolve when the buyer omits a selection.
     * Must be in variant_ids. Omit it to require a buyer selection. Send null to clear it.
     * minLength: 1. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "default_variant_id"?: string | null;
    /** Description of an ad hoc line item. minLength: 1. maxLength: 2048. */
    "description"?: string;
    /**
     * Keys the resolve override maps. Stable line item key used in checkout overrides. Must not
     * have leading or trailing whitespace. Assigned as line_item_1, line_item_2, and so on when
     * omitted, skipping numbers already used by explicit keys; retained for an existing line item
     * when omitted on update. minLength: 1. maxLength: 100.
     */
    "key"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "max_quantity"?: number;
    /**
     * Optional whole-number admission capacity across all orders for an event tier; fractional
     * quantities are not supported. Must be at least 1 and cannot exceed
     * event_config.max_total_quantity when the event is capped. Omit for no tier cap; omitting it
     * in a line_items replacement removes an existing cap. Format: int32. minimum: 1.
     */
    "max_total_quantity"?: number;
    /**
     * Highest unit price the buyer can enter when `allow_unit_price_adjustment` is true. Must be
     * greater than zero and greater than or equal to min_unit_price_money. Omit for no maximum.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "max_unit_price_money"?: MoneyValue;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "min_quantity"?: number;
    /**
     * Lowest unit price the buyer can enter when `allow_unit_price_adjustment` is true. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "min_unit_price_money"?: MoneyValue;
    /**
     * Name of an ad hoc line item. Catalog lines take the catalog name. Surrounding whitespace is
     * trimmed before length validation. A supplied value cannot be blank; use null where clearing
     * is supported. minLength: 1. maxLength: 255.
     */
    "name"?: string;
    /**
     * Stable ID of an existing line item. Omit it to create a new line item. minLength: 1.
     * Example: "plli_01KEZF7C004V7GVCCNMYYCBAJS".
     */
    "payment_link_line_item_id"?: string;
    /**
     * Classification of a custom line for ACH debit: physical, digital, service, or fee. Omit to
     * leave it unclassified; no default is inferred from fulfillment. Null is not accepted. Does
     * not change tax, delivery, or inventory. On an order line PATCH, omission preserves the
     * classification. Catalog lines use their product's type and reject this input. Value enum:
     * "physical", "service", "fee", "digital".
     */
    "product_type"?: "physical" | "service" | "fee" | "digital" | (string & {});
    /**
     * Whole-number default quantity; fractional quantities are not supported. Omission uses 1.
     * Must be at least 1 for standard links; event tiers also accept 0. Format: int32. Default: 1.
     */
    "quantity"?: number;
    /**
     * Unit prices offered as one-tap choices when the buyer sets the price. [] (Value): {@link
     * MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code.
     */
    "suggested_unit_price_money_options"?: Array<MoneyValue>;
    /**
     * Tax settings for an ad hoc line item. Catalog lines use the catalog's. A line item's tax
     * category and whether it is taxable.
     */
    "tax"?: OrderLineItemTax;
    /** How the line item is defined. Value enum: "variant". */
    "type": "variant" | (string & {});
    /**
     * Price of one unit of a `custom_fixed` line item. amount (Required): integer string. Positive
     * amount in the currency's minor unit, such as cents for USD. Use an integer string (decimal
     * digits), not a floating-point number. Format: int64. minimum: 1. currency (Required):
     * string. ISO 4217 currency code for this amount. minLength: 3. maxLength: 3. pattern:
     * ^[A-Z]{3}$. Example: "USD".
     */
    "unit_price_money"?: {
        /**
         * Positive amount in the currency's minor unit, such as cents for USD. Use an integer
         * string (decimal digits), not a floating-point number. Format: int64. minimum: 1.
         */
        "amount": `${bigint}`;
        /**
         * ISO 4217 currency code for this amount. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
         * Example: "USD".
         */
        "currency": string;
    };
    /**
     * ID of the catalog variant a `variant` line sells. minLength: 1. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id"?: string;
    /**
     * Variant IDs buyers may choose from, in the order offered. Contains 1 to 100 unique, active,
     * sellable variants of one product in one currency. Available only on standard payment links.
     * Mutually exclusive with variant_id, bundle_id, and ad hoc line item fields. minItems: 1.
     * maxItems: 100. uniqueItems: true. [] (Value): string. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_ids"?: Array<string>;
})
    & (({
    /** Value enum: "variant". */
    "type": "variant" | (string & {});
})
    & (({
    /**
     * ID of the catalog variant a `variant` line sells. minLength: 1. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id": string;
})
    | ({
    /**
     * Variant IDs buyers may choose from, in the order offered. Contains 1 to 100 unique, active,
     * sellable variants of one product in one currency. Available only on standard payment links.
     * Mutually exclusive with variant_id, bundle_id, and ad hoc line item fields. minItems: 1.
     * maxItems: 100. uniqueItems: true. [] (Value): string. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_ids": Array<string>;
})
    | (Record<string, unknown>)));
/** The `variant` variant of `PaymentLinkLineItemPatchInput`. */
export type PaymentLinkLineItemPatchInputVariantInput = ({
    /** Whether the buyer can change the quantity in checkout. */
    "allow_quantity_adjustment"?: boolean;
    /** Whether the buyer sets the unit price. Only `custom_variable` lines allow it. */
    "allow_unit_price_adjustment"?: boolean;
    /**
     * ID of the catalog bundle a `bundle` line sells. minLength: 1. Example:
     * "bun_01KEZF7C00TQ6S76Z6CVQF5SVN".
     */
    "bundle_id"?: string;
    /**
     * Variant selected when the page opens and used at resolve when the buyer omits a selection.
     * Must be in variant_ids. Omit it to require a buyer selection. Send null to clear it.
     * minLength: 1. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "default_variant_id"?: string | null;
    /** Description of an ad hoc line item. minLength: 1. maxLength: 2048. */
    "description"?: string;
    /**
     * Keys the resolve override maps. Stable line item key used in checkout overrides. Must not
     * have leading or trailing whitespace. Assigned as line_item_1, line_item_2, and so on when
     * omitted, skipping numbers already used by explicit keys; retained for an existing line item
     * when omitted on update. minLength: 1. maxLength: 100.
     */
    "key"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "max_quantity"?: number;
    /**
     * Optional whole-number admission capacity across all orders for an event tier; fractional
     * quantities are not supported. Must be at least 1 and cannot exceed
     * event_config.max_total_quantity when the event is capped. Omit for no tier cap; omitting it
     * in a line_items replacement removes an existing cap. Format: int32. minimum: 1.
     */
    "max_total_quantity"?: number;
    /**
     * Highest unit price the buyer can enter when `allow_unit_price_adjustment` is true. Must be
     * greater than zero and greater than or equal to min_unit_price_money. Omit for no maximum.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "max_unit_price_money"?: MoneyValueInput;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "min_quantity"?: number;
    /**
     * Lowest unit price the buyer can enter when `allow_unit_price_adjustment` is true. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "min_unit_price_money"?: MoneyValueInput;
    /**
     * Name of an ad hoc line item. Catalog lines take the catalog name. Surrounding whitespace is
     * trimmed before length validation. A supplied value cannot be blank; use null where clearing
     * is supported. minLength: 1. maxLength: 255.
     */
    "name"?: string;
    /**
     * Stable ID of an existing line item. Omit it to create a new line item. minLength: 1.
     * Example: "plli_01KEZF7C004V7GVCCNMYYCBAJS".
     */
    "payment_link_line_item_id"?: string;
    /**
     * Classification of a custom line for ACH debit: physical, digital, service, or fee. Omit to
     * leave it unclassified; no default is inferred from fulfillment. Null is not accepted. Does
     * not change tax, delivery, or inventory. On an order line PATCH, omission preserves the
     * classification. Catalog lines use their product's type and reject this input. Value enum:
     * "physical", "service", "fee", "digital".
     */
    "product_type"?: "physical" | "service" | "fee" | "digital";
    /**
     * Whole-number default quantity; fractional quantities are not supported. Omission uses 1.
     * Must be at least 1 for standard links; event tiers also accept 0. Format: int32. Default: 1.
     */
    "quantity"?: number;
    /**
     * Unit prices offered as one-tap choices when the buyer sets the price. [] (Value): {@link
     * MoneyValueInput}. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "suggested_unit_price_money_options"?: Array<MoneyValueInput>;
    /**
     * Tax settings for an ad hoc line item. Catalog lines use the catalog's. A line item's tax
     * category and whether it is taxable.
     */
    "tax"?: OrderLineItemTaxRequestInput;
    /** How the line item is defined. Value enum: "variant". */
    "type": "variant";
    /**
     * Price of one unit of a `custom_fixed` line item. amount (Required): integer string. Positive
     * amount in the currency's minor unit, such as cents for USD. Use an integer string (decimal
     * digits), not a floating-point number. Format: int64. minimum: 1. currency (Required):
     * string. ISO 4217 currency code for this amount. minLength: 3. maxLength: 3. pattern:
     * ^[A-Z]{3}$. Example: "USD".
     */
    "unit_price_money"?: {
        /**
         * Positive amount in the currency's minor unit, such as cents for USD. Use an integer
         * string (decimal digits), not a floating-point number. Format: int64. minimum: 1.
         */
        "amount": `${bigint}` | bigint;
        /**
         * ISO 4217 currency code for this amount. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
         * Example: "USD".
         */
        "currency": string;
    };
    /**
     * ID of the catalog variant a `variant` line sells. minLength: 1. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id"?: string;
    /**
     * Variant IDs buyers may choose from, in the order offered. Contains 1 to 100 unique, active,
     * sellable variants of one product in one currency. Available only on standard payment links.
     * Mutually exclusive with variant_id, bundle_id, and ad hoc line item fields. minItems: 1.
     * maxItems: 100. uniqueItems: true. [] (Value): string. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_ids"?: Array<string>;
})
    & (({
    /** Value enum: "variant". */
    "type": ("variant") & ("variant");
})
    & (({
    /**
     * ID of the catalog variant a `variant` line sells. minLength: 1. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id": string;
})
    | ({
    /**
     * Variant IDs buyers may choose from, in the order offered. Contains 1 to 100 unique, active,
     * sellable variants of one product in one currency. Available only on standard payment links.
     * Mutually exclusive with variant_id, bundle_id, and ad hoc line item fields. minItems: 1.
     * maxItems: 100. uniqueItems: true. [] (Value): string. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_ids": Array<string>;
}))
    & (({
    "bundle_id"?: never;
})
    & ({
    "name"?: never;
})
    & ({
    "unit_price_money"?: never;
})
    & ({
    "description"?: never;
})
    & ({
    "tax"?: never;
})
    & ({
    "allow_unit_price_adjustment"?: never;
})
    & ({
    "min_unit_price_money"?: never;
})
    & ({
    "max_unit_price_money"?: never;
})
    & ({
    "suggested_unit_price_money_options"?: never;
})
    & ({
    "product_type"?: never;
})
    & ({
    "variant_id"?: never;
} | {
    "variant_ids"?: never;
})));
/**
 * A line item in a payment link update. Include its ID to change an existing line item, or omit
 * the ID to add a new one.
 */
export type PaymentLinkLineItemPatchRequest = ({
    /** Whether the buyer can change the quantity in checkout. */
    "allow_quantity_adjustment"?: boolean;
    /** Whether the buyer sets the unit price. Only `custom_variable` lines allow it. */
    "allow_unit_price_adjustment"?: boolean;
    /**
     * ID of the catalog bundle a `bundle` line sells. minLength: 1. Example:
     * "bun_01KEZF7C00TQ6S76Z6CVQF5SVN".
     */
    "bundle_id"?: string;
    /**
     * Variant selected when the page opens and used at resolve when the buyer omits a selection.
     * Must be in variant_ids. Omit it to require a buyer selection. Send null to clear it.
     * minLength: 1. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "default_variant_id"?: string | null;
    /** Description of an ad hoc line item. minLength: 1. maxLength: 2048. */
    "description"?: string;
    /**
     * Keys the resolve override maps. Stable line item key used in checkout overrides. Must not
     * have leading or trailing whitespace. Assigned as line_item_1, line_item_2, and so on when
     * omitted, skipping numbers already used by explicit keys; retained for an existing line item
     * when omitted on update. minLength: 1. maxLength: 100.
     */
    "key"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "max_quantity"?: number;
    /**
     * Optional whole-number admission capacity across all orders for an event tier; fractional
     * quantities are not supported. Must be at least 1 and cannot exceed
     * event_config.max_total_quantity when the event is capped. Omit for no tier cap; omitting it
     * in a line_items replacement removes an existing cap. Format: int32. minimum: 1.
     */
    "max_total_quantity"?: number;
    /**
     * Highest unit price the buyer can enter when `allow_unit_price_adjustment` is true. Must be
     * greater than zero and greater than or equal to min_unit_price_money. Omit for no maximum.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "max_unit_price_money"?: MoneyValue;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "min_quantity"?: number;
    /**
     * Lowest unit price the buyer can enter when `allow_unit_price_adjustment` is true. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "min_unit_price_money"?: MoneyValue;
    /**
     * Name of an ad hoc line item. Catalog lines take the catalog name. Surrounding whitespace is
     * trimmed before length validation. A supplied value cannot be blank; use null where clearing
     * is supported. minLength: 1. maxLength: 255.
     */
    "name"?: string;
    /**
     * Stable ID of an existing line item. Omit it to create a new line item. minLength: 1.
     * Example: "plli_01KEZF7C004V7GVCCNMYYCBAJS".
     */
    "payment_link_line_item_id"?: string;
    /**
     * Classification of a custom line for ACH debit: physical, digital, service, or fee. Omit to
     * leave it unclassified; no default is inferred from fulfillment. Null is not accepted. Does
     * not change tax, delivery, or inventory. On an order line PATCH, omission preserves the
     * classification. Catalog lines use their product's type and reject this input. Value enum:
     * "physical", "service", "fee", "digital".
     */
    "product_type"?: "physical" | "service" | "fee" | "digital" | (string & {});
    /**
     * Whole-number default quantity; fractional quantities are not supported. Omission uses 1.
     * Must be at least 1 for standard links; event tiers also accept 0. Format: int32. Default: 1.
     */
    "quantity"?: number;
    /**
     * Unit prices offered as one-tap choices when the buyer sets the price. [] (Value): {@link
     * MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code.
     */
    "suggested_unit_price_money_options"?: Array<MoneyValue>;
    /**
     * Tax settings for an ad hoc line item. Catalog lines use the catalog's. A line item's tax
     * category and whether it is taxable.
     */
    "tax"?: OrderLineItemTax;
    /**
     * How the line item is defined. Value enum: "variant", "bundle", "custom_fixed",
     * "custom_variable".
     */
    "type": "variant" | "bundle" | "custom_fixed" | "custom_variable" | (string & {});
    /**
     * Price of one unit of a `custom_fixed` line item. amount (Required): integer string. Positive
     * amount in the currency's minor unit, such as cents for USD. Use an integer string (decimal
     * digits), not a floating-point number. Format: int64. minimum: 1. currency (Required):
     * string. ISO 4217 currency code for this amount. minLength: 3. maxLength: 3. pattern:
     * ^[A-Z]{3}$. Example: "USD".
     */
    "unit_price_money"?: {
        /**
         * Positive amount in the currency's minor unit, such as cents for USD. Use an integer
         * string (decimal digits), not a floating-point number. Format: int64. minimum: 1.
         */
        "amount": `${bigint}`;
        /**
         * ISO 4217 currency code for this amount. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
         * Example: "USD".
         */
        "currency": string;
    };
    /**
     * ID of the catalog variant a `variant` line sells. minLength: 1. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id"?: string;
    /**
     * Variant IDs buyers may choose from, in the order offered. Contains 1 to 100 unique, active,
     * sellable variants of one product in one currency. Available only on standard payment links.
     * Mutually exclusive with variant_id, bundle_id, and ad hoc line item fields. minItems: 1.
     * maxItems: 100. uniqueItems: true. [] (Value): string. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_ids"?: Array<string>;
})
    & ((Exclude<PaymentLinkLineItemPatchInputVariant & object, readonly unknown[]>)
    | (Exclude<PaymentLinkLineItemPatchInputBundle & object, readonly unknown[]>)
    | (Exclude<PaymentLinkLineItemPatchInputCustomFixed & object, readonly unknown[]>)
    | (Exclude<PaymentLinkLineItemPatchInputCustomVariable & object, readonly unknown[]>)
    | (Record<string, unknown>));
/**
 * A line item in a payment link update. Include its ID to change an existing line item, or omit
 * the ID to add a new one.
 */
export type PaymentLinkLineItemPatchRequestInput = ({
    /** Whether the buyer can change the quantity in checkout. */
    "allow_quantity_adjustment"?: boolean;
    /** Whether the buyer sets the unit price. Only `custom_variable` lines allow it. */
    "allow_unit_price_adjustment"?: boolean;
    /**
     * ID of the catalog bundle a `bundle` line sells. minLength: 1. Example:
     * "bun_01KEZF7C00TQ6S76Z6CVQF5SVN".
     */
    "bundle_id"?: string;
    /**
     * Variant selected when the page opens and used at resolve when the buyer omits a selection.
     * Must be in variant_ids. Omit it to require a buyer selection. Send null to clear it.
     * minLength: 1. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "default_variant_id"?: string | null;
    /** Description of an ad hoc line item. minLength: 1. maxLength: 2048. */
    "description"?: string;
    /**
     * Keys the resolve override maps. Stable line item key used in checkout overrides. Must not
     * have leading or trailing whitespace. Assigned as line_item_1, line_item_2, and so on when
     * omitted, skipping numbers already used by explicit keys; retained for an existing line item
     * when omitted on update. minLength: 1. maxLength: 100.
     */
    "key"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "max_quantity"?: number;
    /**
     * Optional whole-number admission capacity across all orders for an event tier; fractional
     * quantities are not supported. Must be at least 1 and cannot exceed
     * event_config.max_total_quantity when the event is capped. Omit for no tier cap; omitting it
     * in a line_items replacement removes an existing cap. Format: int32. minimum: 1.
     */
    "max_total_quantity"?: number;
    /**
     * Highest unit price the buyer can enter when `allow_unit_price_adjustment` is true. Must be
     * greater than zero and greater than or equal to min_unit_price_money. Omit for no maximum.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "max_unit_price_money"?: MoneyValueInput;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "min_quantity"?: number;
    /**
     * Lowest unit price the buyer can enter when `allow_unit_price_adjustment` is true. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "min_unit_price_money"?: MoneyValueInput;
    /**
     * Name of an ad hoc line item. Catalog lines take the catalog name. Surrounding whitespace is
     * trimmed before length validation. A supplied value cannot be blank; use null where clearing
     * is supported. minLength: 1. maxLength: 255.
     */
    "name"?: string;
    /**
     * Stable ID of an existing line item. Omit it to create a new line item. minLength: 1.
     * Example: "plli_01KEZF7C004V7GVCCNMYYCBAJS".
     */
    "payment_link_line_item_id"?: string;
    /**
     * Classification of a custom line for ACH debit: physical, digital, service, or fee. Omit to
     * leave it unclassified; no default is inferred from fulfillment. Null is not accepted. Does
     * not change tax, delivery, or inventory. On an order line PATCH, omission preserves the
     * classification. Catalog lines use their product's type and reject this input. Value enum:
     * "physical", "service", "fee", "digital".
     */
    "product_type"?: "physical" | "service" | "fee" | "digital";
    /**
     * Whole-number default quantity; fractional quantities are not supported. Omission uses 1.
     * Must be at least 1 for standard links; event tiers also accept 0. Format: int32. Default: 1.
     */
    "quantity"?: number;
    /**
     * Unit prices offered as one-tap choices when the buyer sets the price. [] (Value): {@link
     * MoneyValueInput}. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "suggested_unit_price_money_options"?: Array<MoneyValueInput>;
    /**
     * Tax settings for an ad hoc line item. Catalog lines use the catalog's. A line item's tax
     * category and whether it is taxable.
     */
    "tax"?: OrderLineItemTaxRequestInput;
    /**
     * How the line item is defined. Value enum: "variant", "bundle", "custom_fixed",
     * "custom_variable".
     */
    "type": "variant" | "bundle" | "custom_fixed" | "custom_variable";
    /**
     * Price of one unit of a `custom_fixed` line item. amount (Required): integer string. Positive
     * amount in the currency's minor unit, such as cents for USD. Use an integer string (decimal
     * digits), not a floating-point number. Format: int64. minimum: 1. currency (Required):
     * string. ISO 4217 currency code for this amount. minLength: 3. maxLength: 3. pattern:
     * ^[A-Z]{3}$. Example: "USD".
     */
    "unit_price_money"?: {
        /**
         * Positive amount in the currency's minor unit, such as cents for USD. Use an integer
         * string (decimal digits), not a floating-point number. Format: int64. minimum: 1.
         */
        "amount": `${bigint}` | bigint;
        /**
         * ISO 4217 currency code for this amount. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
         * Example: "USD".
         */
        "currency": string;
    };
    /**
     * ID of the catalog variant a `variant` line sells. minLength: 1. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id"?: string;
    /**
     * Variant IDs buyers may choose from, in the order offered. Contains 1 to 100 unique, active,
     * sellable variants of one product in one currency. Available only on standard payment links.
     * Mutually exclusive with variant_id, bundle_id, and ad hoc line item fields. minItems: 1.
     * maxItems: 100. uniqueItems: true. [] (Value): string. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_ids"?: Array<string>;
})
    & ((Exclude<PaymentLinkLineItemPatchInputVariantInput & object, readonly unknown[]>)
    | (Exclude<PaymentLinkLineItemPatchInputBundleInput & object, readonly unknown[]>)
    | (Exclude<PaymentLinkLineItemPatchInputCustomFixedInput & object, readonly unknown[]>)
    | (Exclude<PaymentLinkLineItemPatchInputCustomVariableInput & object, readonly unknown[]>));
export type PaymentLinkLineItemPreviousAttributes = ({
    /**
     * Whether the buyer can change the quantity in checkout. anyOf[1] (Value): boolean. Whether
     * the buyer can change the quantity in checkout. anyOf[2] (Value): null.
     */
    "allow_quantity_adjustment"?: ((boolean) | (null));
    /**
     * Whether the buyer sets the unit price. Only `custom_variable` lines allow it. anyOf[1]
     * (Value): boolean. Whether the buyer sets the unit price. Only `custom_variable` lines allow
     * it. anyOf[2] (Value): null.
     */
    "allow_unit_price_adjustment"?: ((boolean) | (null));
    /**
     * ID of the catalog bundle a `bundle` line sells. anyOf[1] (Value): string. ID of the catalog
     * bundle a `bundle` line sells. Example: "bun_01KEZF7C00TQ6S76Z6CVQF5SVN". anyOf[2] (Value):
     * null.
     */
    "bundle_id"?: ((string) | (null));
    /**
     * Variant selected when the page opens and used at resolve when the buyer omits a selection.
     * Must be in variant_ids. Omit it to require a buyer selection. anyOf[1] (Value): string.
     * Variant selected when the page opens and used at resolve when the buyer omits a selection.
     * Must be in variant_ids. Omit it to require a buyer selection. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX". anyOf[2] (Value):
     * null.
     */
    "default_variant_id"?: ((string) | (null));
    /**
     * Description of an ad hoc line item. anyOf[1] (Value): string. Description of an ad hoc line
     * item. anyOf[2] (Value): null.
     */
    "description"?: ((string) | (null));
    /**
     * True when the referenced variant or bundle cannot be sold, or no listed variant in
     * variant_ids can be sold in the line currency. Always false on ad hoc line items. anyOf[1]
     * (Value): boolean. True when the referenced variant or bundle cannot be sold, or no listed
     * variant in variant_ids can be sold in the line currency. Always false on ad hoc line items.
     * anyOf[2] (Value): null.
     */
    "is_catalog_item_unavailable"?: ((boolean) | (null));
    /**
     * Public event read: true when the tier or event has no capacity left. anyOf[1] (Value):
     * boolean. Public event read: true when the tier or event has no capacity left. anyOf[2]
     * (Value): null.
     */
    "is_sold_out"?: ((boolean) | (null));
    /**
     * Keys the resolve override maps. Stable line item key used in checkout overrides. Must not
     * have leading or trailing whitespace. Assigned as line_item_1, line_item_2, and so on when
     * omitted, skipping numbers already used by explicit keys; retained for an existing line item
     * when omitted on update. anyOf[1] (Value): string. Keys the resolve override maps. Stable
     * line item key used in checkout overrides. Must not have leading or trailing whitespace.
     * Assigned as line_item_1, line_item_2, and so on when omitted, skipping numbers already used
     * by explicit keys; retained for an existing line item when omitted on update. anyOf[2]
     * (Value): null.
     */
    "key"?: ((string) | (null));
    /**
     * Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer.
     * Whole-number quantity; fractional quantities are not supported. Format: int32. anyOf[2]
     * (Value): null.
     */
    "max_quantity"?: ((number) | (null));
    /**
     * Optional whole-number admission capacity across all orders for an event tier; fractional
     * quantities are not supported. Must be at least 1 and cannot exceed
     * event_config.max_total_quantity when the event is capped. Omit for no tier cap; omitting it
     * in a line_items replacement removes an existing cap. anyOf[1] (Value): integer. Optional
     * whole-number admission capacity across all orders for an event tier; fractional quantities
     * are not supported. Must be at least 1 and cannot exceed event_config.max_total_quantity when
     * the event is capped. Omit for no tier cap; omitting it in a line_items replacement removes
     * an existing cap. Format: int32. minimum: 1. anyOf[2] (Value): null.
     */
    "max_total_quantity"?: ((number) | (null));
    /**
     * Highest unit price the buyer can enter when `allow_unit_price_adjustment` is true. Must be
     * greater than zero and greater than or equal to min_unit_price_money. Omit for no maximum.
     * anyOf[1] (Value): {@link MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "max_unit_price_money"?: ((MoneyValuePreviousAttributes) | (null));
    /**
     * Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer.
     * Whole-number quantity; fractional quantities are not supported. Format: int32. anyOf[2]
     * (Value): null.
     */
    "min_quantity"?: ((number) | (null));
    /**
     * Lowest unit price the buyer can enter when `allow_unit_price_adjustment` is true. anyOf[1]
     * (Value): {@link MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "min_unit_price_money"?: ((MoneyValuePreviousAttributes) | (null));
    /**
     * Name of an ad hoc line item. Catalog lines take the catalog name. anyOf[1] (Value): string.
     * Name of an ad hoc line item. Catalog lines take the catalog name. anyOf[2] (Value): null.
     */
    "name"?: ((string) | (null));
    /**
     * Unique identifier for this payment link line item, prefixed `plli_`. anyOf[1] (Value):
     * string. Unique identifier for this payment link line item, prefixed `plli_`. Example:
     * "plli_01KEZF7C004V7GVCCNMYYCBAJS". anyOf[2] (Value): null.
     */
    "payment_link_line_item_id"?: ((string) | (null));
    /**
     * Parent catalog context only. The product that the variants in variant_ids belong to. Present
     * only on buyer choice lines; refused on input. anyOf[1] (Value): string. Parent catalog
     * context only. The product that the variants in variant_ids belong to. Present only on buyer
     * choice lines; refused on input. Example: "prod_01KEZF7C00BVSHCNWVH528HB66". anyOf[2]
     * (Value): null.
     */
    "product_id"?: ((string) | (null));
    /**
     * Classification configured on a custom line for ACH debit. Null when unclassified or
     * catalog-backed; catalog lines get their product classification when checkout starts. Value
     * enum: "physical", "service", "fee", "digital", "gift_card", null. anyOf[1] (Value): string.
     * Classification configured on a custom line for ACH debit. Null when unclassified or
     * catalog-backed; catalog lines get their product classification when checkout starts. Value
     * enum: "physical", "service", "fee", "digital", "gift_card", null. anyOf[2] (Value): null.
     */
    "product_type"?: (("physical" | "service" | "fee" | "digital" | "gift_card" | null | (string & {})) | (null));
    /**
     * Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer.
     * Whole-number quantity; fractional quantities are not supported. Format: int32. anyOf[2]
     * (Value): null.
     */
    "quantity"?: ((number) | (null));
    /**
     * Public event read: whole-number admissions left after sales and payment holds; fractional
     * quantities are not supported. This quantity is bounded by both the tier and event caps.
     * Omitted when neither is capped. anyOf[1] (Value): integer. Public event read: whole-number
     * admissions left after sales and payment holds; fractional quantities are not supported. This
     * quantity is bounded by both the tier and event caps. Omitted when neither is capped. Format:
     * int32. anyOf[2] (Value): null.
     */
    "remaining_quantity"?: ((number) | (null));
    /**
     * Current catalog name of the referenced variant or bundle, or the product name for
     * variant_ids lines. A variant reads as the product name, plus the variant name when the
     * variant is a named option combination. This is the catalog value at read time, not a stored
     * snapshot: checkout resolves it again when a buyer opens the link. Absent on ad-hoc line
     * items and when the catalog object no longer exists. anyOf[1] (Value): string. Current
     * catalog name of the referenced variant or bundle, or the product name for variant_ids lines.
     * A variant reads as the product name, plus the variant name when the variant is a named
     * option combination. This is the catalog value at read time, not a stored snapshot: checkout
     * resolves it again when a buyer opens the link. Absent on ad-hoc line items and when the
     * catalog object no longer exists. anyOf[2] (Value): null.
     */
    "resolved_name"?: ((string) | (null));
    /**
     * Current lowest and highest catalog unit prices among listed variants that can be sold in the
     * line currency. Computed at read time, not stored. Omitted when no listed variant can be
     * sold. anyOf[1] (Value): {@link ProductPriceRangePreviousAttributes}. anyOf[2] (Value): null.
     */
    "resolved_price_range"?: ((ProductPriceRangePreviousAttributes) | (null));
    /**
     * Current catalog unit price of the referenced variant or bundle. For a fixed variant this is
     * the base price that applies below the first quantity price break. This is the catalog value
     * at read time, not a stored snapshot: checkout resolves the price again when a buyer opens
     * the link, so the amount a buyer pays can differ. Absent on ad-hoc line items, variant_ids
     * lines, and when the catalog object no longer exists. anyOf[1] (Value): {@link
     * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "resolved_unit_price_money"?: ((MoneyValuePreviousAttributes) | (null));
    /**
     * Unit prices offered as one-tap choices when the buyer sets the price. anyOf[1] (Value):
     * Array of {@link MoneyValuePreviousAttributes}. Unit prices offered as one-tap choices when
     * the buyer sets the price. anyOf[1][] (Value): {@link MoneyValuePreviousAttributes}. anyOf[2]
     * (Value): null.
     */
    "suggested_unit_price_money_options"?: ((Array<MoneyValuePreviousAttributes>) | (null));
    /**
     * Tax settings for an ad hoc line item. Catalog lines use the catalog's. anyOf[1] (Value):
     * {@link OrderLineItemTaxPreviousAttributes}. anyOf[2] (Value): null.
     */
    "tax"?: ((OrderLineItemTaxPreviousAttributes) | (null));
    /**
     * How the line item is defined. Value enum: "variant", "bundle", "custom_fixed",
     * "custom_variable". anyOf[1] (Value): string. How the line item is defined. Value enum:
     * "variant", "bundle", "custom_fixed", "custom_variable". anyOf[2] (Value): null.
     */
    "type"?: (("variant" | "bundle" | "custom_fixed" | "custom_variable" | (string & {})) | (null));
    /**
     * Price of one unit of a `custom_fixed` line item. anyOf[1] (Value): {@link
     * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "unit_price_money"?: ((MoneyValuePreviousAttributes) | (null));
    /**
     * ID of the catalog variant a `variant` line sells. anyOf[1] (Value): string. ID of the
     * catalog variant a `variant` line sells. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX". anyOf[2]
     * (Value): null.
     */
    "variant_id"?: ((string) | (null));
    /**
     * Variant IDs buyers may choose from, in the order offered. Contains 1 to 100 unique, active,
     * sellable variants of one product in one currency. Available only on standard payment links.
     * Mutually exclusive with variant_id, bundle_id, and ad hoc line item fields. anyOf[1]
     * (Value): Array of string. Variant IDs buyers may choose from, in the order offered. Contains
     * 1 to 100 unique, active, sellable variants of one product in one currency. Available only on
     * standard payment links. Mutually exclusive with variant_id, bundle_id, and ad hoc line item
     * fields. minItems: 1. maxItems: 100. uniqueItems: true. anyOf[1][] (Value): string. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX". anyOf[2] (Value):
     * null.
     */
    "variant_ids"?: ((Array<string>) | (null));
})
    & (((Exclude<PaymentLinkLineItemVariantPreviousAttributes & object, readonly unknown[]>)
    | (Exclude<PaymentLinkLineItemBundlePreviousAttributes & object, readonly unknown[]>)
    | (Exclude<PaymentLinkLineItemCustomFixedPreviousAttributes & object, readonly unknown[]>)
    | (Exclude<PaymentLinkLineItemCustomVariablePreviousAttributes & object, readonly unknown[]>)
    | (Record<string, unknown>)));
/**
 * A line item you add to a payment link when creating it, from a catalog variant, a bundle, or an
 * ad hoc name and price.
 */
export type PaymentLinkLineItemRequest = ({
    /** Whether the buyer can change the quantity in checkout. */
    "allow_quantity_adjustment"?: boolean;
    /** Whether the buyer sets the unit price. Only `custom_variable` lines allow it. */
    "allow_unit_price_adjustment"?: boolean;
    /**
     * ID of the catalog bundle a `bundle` line sells. minLength: 1. Example:
     * "bun_01KEZF7C00TQ6S76Z6CVQF5SVN".
     */
    "bundle_id"?: string;
    /**
     * Variant selected when the page opens and used at resolve when the buyer omits a selection.
     * Must be in variant_ids. Omit it to require a buyer selection. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "default_variant_id"?: string;
    /** Description of an ad hoc line item. minLength: 1. maxLength: 2048. */
    "description"?: string;
    /**
     * Keys the resolve override maps. Stable line item key used in checkout overrides. Must not
     * have leading or trailing whitespace. Assigned as line_item_1, line_item_2, and so on when
     * omitted, skipping numbers already used by explicit keys; retained for an existing line item
     * when omitted on update. minLength: 1. maxLength: 100.
     */
    "key"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "max_quantity"?: number;
    /**
     * Optional whole-number admission capacity across all orders for an event tier; fractional
     * quantities are not supported. Must be at least 1 and cannot exceed
     * event_config.max_total_quantity when the event is capped. Omit for no tier cap; omitting it
     * in a line_items replacement removes an existing cap. Format: int32. minimum: 1.
     */
    "max_total_quantity"?: number;
    /**
     * Highest unit price the buyer can enter when `allow_unit_price_adjustment` is true. Must be
     * greater than zero and greater than or equal to min_unit_price_money. Omit for no maximum.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "max_unit_price_money"?: MoneyValue;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "min_quantity"?: number;
    /**
     * Lowest unit price the buyer can enter when `allow_unit_price_adjustment` is true. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "min_unit_price_money"?: MoneyValue;
    /**
     * Name of an ad hoc line item. Catalog lines take the catalog name. Surrounding whitespace is
     * trimmed before length validation. A supplied value cannot be blank; use null where clearing
     * is supported. minLength: 1. maxLength: 255.
     */
    "name"?: string;
    /**
     * Classification of a custom line for ACH debit: physical, digital, service, or fee. Omit to
     * leave it unclassified; no default is inferred from fulfillment. Null is not accepted. Does
     * not change tax, delivery, or inventory. On an order line PATCH, omission preserves the
     * classification. Catalog lines use their product's type and reject this input. Value enum:
     * "physical", "service", "fee", "digital".
     */
    "product_type"?: "physical" | "service" | "fee" | "digital" | (string & {});
    /**
     * Whole-number default quantity; fractional quantities are not supported. Omission uses 1.
     * Must be at least 1 for standard links; event tiers also accept 0. Format: int32. Default: 1.
     */
    "quantity"?: number;
    /**
     * Unit prices offered as one-tap choices when the buyer sets the price. [] (Value): {@link
     * MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code.
     */
    "suggested_unit_price_money_options"?: Array<MoneyValue>;
    /**
     * Tax settings for an ad hoc line item. Catalog lines use the catalog's. A line item's tax
     * category and whether it is taxable.
     */
    "tax"?: OrderLineItemTax;
    /**
     * How the line item is defined. Value enum: "variant", "bundle", "custom_fixed",
     * "custom_variable".
     */
    "type": "variant" | "bundle" | "custom_fixed" | "custom_variable" | (string & {});
    /**
     * Price of one unit of a `custom_fixed` line item. amount (Required): integer string. Positive
     * amount in the currency's minor unit, such as cents for USD. Use an integer string (decimal
     * digits), not a floating-point number. Format: int64. minimum: 1. currency (Required):
     * string. ISO 4217 currency code for this amount. minLength: 3. maxLength: 3. pattern:
     * ^[A-Z]{3}$. Example: "USD".
     */
    "unit_price_money"?: {
        /**
         * Positive amount in the currency's minor unit, such as cents for USD. Use an integer
         * string (decimal digits), not a floating-point number. Format: int64. minimum: 1.
         */
        "amount": `${bigint}`;
        /**
         * ISO 4217 currency code for this amount. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
         * Example: "USD".
         */
        "currency": string;
    };
    /**
     * ID of the catalog variant a `variant` line sells. minLength: 1. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id"?: string;
    /**
     * Variant IDs buyers may choose from, in the order offered. Contains 1 to 100 unique, active,
     * sellable variants of one product in one currency. Available only on standard payment links.
     * Mutually exclusive with variant_id, bundle_id, and ad hoc line item fields. minItems: 1.
     * maxItems: 100. uniqueItems: true. [] (Value): string. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_ids"?: Array<string>;
})
    & ((Exclude<PaymentLinkLineItemInputVariant & object, readonly unknown[]>)
    | (Exclude<PaymentLinkLineItemInputBundle & object, readonly unknown[]>)
    | (Exclude<PaymentLinkLineItemInputCustomFixed & object, readonly unknown[]>)
    | (Exclude<PaymentLinkLineItemInputCustomVariable & object, readonly unknown[]>)
    | (Record<string, unknown>));
/**
 * A line item you add to a payment link when creating it, from a catalog variant, a bundle, or an
 * ad hoc name and price.
 */
export type PaymentLinkLineItemRequestInput = ({
    /** Whether the buyer can change the quantity in checkout. */
    "allow_quantity_adjustment"?: boolean;
    /** Whether the buyer sets the unit price. Only `custom_variable` lines allow it. */
    "allow_unit_price_adjustment"?: boolean;
    /**
     * ID of the catalog bundle a `bundle` line sells. minLength: 1. Example:
     * "bun_01KEZF7C00TQ6S76Z6CVQF5SVN".
     */
    "bundle_id"?: string;
    /**
     * Variant selected when the page opens and used at resolve when the buyer omits a selection.
     * Must be in variant_ids. Omit it to require a buyer selection. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "default_variant_id"?: string;
    /** Description of an ad hoc line item. minLength: 1. maxLength: 2048. */
    "description"?: string;
    /**
     * Keys the resolve override maps. Stable line item key used in checkout overrides. Must not
     * have leading or trailing whitespace. Assigned as line_item_1, line_item_2, and so on when
     * omitted, skipping numbers already used by explicit keys; retained for an existing line item
     * when omitted on update. minLength: 1. maxLength: 100.
     */
    "key"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "max_quantity"?: number;
    /**
     * Optional whole-number admission capacity across all orders for an event tier; fractional
     * quantities are not supported. Must be at least 1 and cannot exceed
     * event_config.max_total_quantity when the event is capped. Omit for no tier cap; omitting it
     * in a line_items replacement removes an existing cap. Format: int32. minimum: 1.
     */
    "max_total_quantity"?: number;
    /**
     * Highest unit price the buyer can enter when `allow_unit_price_adjustment` is true. Must be
     * greater than zero and greater than or equal to min_unit_price_money. Omit for no maximum.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "max_unit_price_money"?: MoneyValueInput;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "min_quantity"?: number;
    /**
     * Lowest unit price the buyer can enter when `allow_unit_price_adjustment` is true. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "min_unit_price_money"?: MoneyValueInput;
    /**
     * Name of an ad hoc line item. Catalog lines take the catalog name. Surrounding whitespace is
     * trimmed before length validation. A supplied value cannot be blank; use null where clearing
     * is supported. minLength: 1. maxLength: 255.
     */
    "name"?: string;
    /**
     * Classification of a custom line for ACH debit: physical, digital, service, or fee. Omit to
     * leave it unclassified; no default is inferred from fulfillment. Null is not accepted. Does
     * not change tax, delivery, or inventory. On an order line PATCH, omission preserves the
     * classification. Catalog lines use their product's type and reject this input. Value enum:
     * "physical", "service", "fee", "digital".
     */
    "product_type"?: "physical" | "service" | "fee" | "digital";
    /**
     * Whole-number default quantity; fractional quantities are not supported. Omission uses 1.
     * Must be at least 1 for standard links; event tiers also accept 0. Format: int32. Default: 1.
     */
    "quantity"?: number;
    /**
     * Unit prices offered as one-tap choices when the buyer sets the price. [] (Value): {@link
     * MoneyValueInput}. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "suggested_unit_price_money_options"?: Array<MoneyValueInput>;
    /**
     * Tax settings for an ad hoc line item. Catalog lines use the catalog's. A line item's tax
     * category and whether it is taxable.
     */
    "tax"?: OrderLineItemTaxRequestInput;
    /**
     * How the line item is defined. Value enum: "variant", "bundle", "custom_fixed",
     * "custom_variable".
     */
    "type": "variant" | "bundle" | "custom_fixed" | "custom_variable";
    /**
     * Price of one unit of a `custom_fixed` line item. amount (Required): integer string. Positive
     * amount in the currency's minor unit, such as cents for USD. Use an integer string (decimal
     * digits), not a floating-point number. Format: int64. minimum: 1. currency (Required):
     * string. ISO 4217 currency code for this amount. minLength: 3. maxLength: 3. pattern:
     * ^[A-Z]{3}$. Example: "USD".
     */
    "unit_price_money"?: {
        /**
         * Positive amount in the currency's minor unit, such as cents for USD. Use an integer
         * string (decimal digits), not a floating-point number. Format: int64. minimum: 1.
         */
        "amount": `${bigint}` | bigint;
        /**
         * ISO 4217 currency code for this amount. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
         * Example: "USD".
         */
        "currency": string;
    };
    /**
     * ID of the catalog variant a `variant` line sells. minLength: 1. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id"?: string;
    /**
     * Variant IDs buyers may choose from, in the order offered. Contains 1 to 100 unique, active,
     * sellable variants of one product in one currency. Available only on standard payment links.
     * Mutually exclusive with variant_id, bundle_id, and ad hoc line item fields. minItems: 1.
     * maxItems: 100. uniqueItems: true. [] (Value): string. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_ids"?: Array<string>;
})
    & ((Exclude<PaymentLinkLineItemInputVariantInput & object, readonly unknown[]>)
    | (Exclude<PaymentLinkLineItemInputBundleInput & object, readonly unknown[]>)
    | (Exclude<PaymentLinkLineItemInputCustomFixedInput & object, readonly unknown[]>)
    | (Exclude<PaymentLinkLineItemInputCustomVariableInput & object, readonly unknown[]>));
/** A line item on a payment link. */
export type PaymentLinkLineItemVariant = ({
    /** Whether the buyer can change the quantity in checkout. */
    "allow_quantity_adjustment"?: boolean;
    /** Whether the buyer sets the unit price. Only `custom_variable` lines allow it. */
    "allow_unit_price_adjustment"?: boolean;
    /**
     * ID of the catalog bundle a `bundle` line sells. Example: "bun_01KEZF7C00TQ6S76Z6CVQF5SVN".
     */
    "bundle_id"?: string;
    /**
     * Variant selected when the page opens and used at resolve when the buyer omits a selection.
     * Must be in variant_ids. Omit it to require a buyer selection. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "default_variant_id"?: string;
    /** Description of an ad hoc line item. */
    "description"?: string;
    /**
     * True when the referenced variant or bundle cannot be sold, or no listed variant in
     * variant_ids can be sold in the line currency. Always false on ad hoc line items.
     */
    "is_catalog_item_unavailable": boolean;
    /** Public event read: true when the tier or event has no capacity left. */
    "is_sold_out"?: boolean;
    /**
     * Keys the resolve override maps. Stable line item key used in checkout overrides. Must not
     * have leading or trailing whitespace. Assigned as line_item_1, line_item_2, and so on when
     * omitted, skipping numbers already used by explicit keys; retained for an existing line item
     * when omitted on update.
     */
    "key"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "max_quantity"?: number;
    /**
     * Optional whole-number admission capacity across all orders for an event tier; fractional
     * quantities are not supported. Must be at least 1 and cannot exceed
     * event_config.max_total_quantity when the event is capped. Omit for no tier cap; omitting it
     * in a line_items replacement removes an existing cap. Format: int32. minimum: 1.
     */
    "max_total_quantity"?: number;
    /**
     * Highest unit price the buyer can enter when `allow_unit_price_adjustment` is true. Must be
     * greater than zero and greater than or equal to min_unit_price_money. Omit for no maximum.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "max_unit_price_money"?: MoneyValue;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "min_quantity"?: number;
    /**
     * Lowest unit price the buyer can enter when `allow_unit_price_adjustment` is true. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "min_unit_price_money"?: MoneyValue;
    /** Name of an ad hoc line item. Catalog lines take the catalog name. */
    "name"?: string;
    /**
     * Unique identifier for this payment link line item, prefixed `plli_`. Example:
     * "plli_01KEZF7C004V7GVCCNMYYCBAJS".
     */
    "payment_link_line_item_id": string;
    /**
     * Parent catalog context only. The product that the variants in variant_ids belong to. Present
     * only on buyer choice lines; refused on input. Example: "prod_01KEZF7C00BVSHCNWVH528HB66".
     */
    "product_id"?: string;
    /**
     * Classification configured on a custom line for ACH debit. Null when unclassified or
     * catalog-backed; catalog lines get their product classification when checkout starts. Value
     * enum: "physical", "service", "fee", "digital", "gift_card", null.
     */
    "product_type": "physical" | "service" | "fee" | "digital" | "gift_card" | null | (string & {}) | null;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "quantity": number;
    /**
     * Public event read: whole-number admissions left after sales and payment holds; fractional
     * quantities are not supported. This quantity is bounded by both the tier and event caps.
     * Omitted when neither is capped. Format: int32.
     */
    "remaining_quantity"?: number;
    /**
     * Current catalog name of the referenced variant or bundle, or the product name for
     * variant_ids lines. A variant reads as the product name, plus the variant name when the
     * variant is a named option combination. This is the catalog value at read time, not a stored
     * snapshot: checkout resolves it again when a buyer opens the link. Absent on ad-hoc line
     * items and when the catalog object no longer exists.
     */
    "resolved_name"?: string;
    /**
     * Current lowest and highest catalog unit prices among listed variants that can be sold in the
     * line currency. Computed at read time, not stored. Omitted when no listed variant can be
     * sold. The lowest and highest unit prices across a product's variants.
     */
    "resolved_price_range"?: ProductPriceRange;
    /**
     * Current catalog unit price of the referenced variant or bundle. For a fixed variant this is
     * the base price that applies below the first quantity price break. This is the catalog value
     * at read time, not a stored snapshot: checkout resolves the price again when a buyer opens
     * the link, so the amount a buyer pays can differ. Absent on ad-hoc line items, variant_ids
     * lines, and when the catalog object no longer exists. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "resolved_unit_price_money"?: MoneyValue;
    /**
     * Unit prices offered as one-tap choices when the buyer sets the price. [] (Value): {@link
     * MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code.
     */
    "suggested_unit_price_money_options"?: Array<MoneyValue>;
    /**
     * Tax settings for an ad hoc line item. Catalog lines use the catalog's. A line item's tax
     * category and whether it is taxable.
     */
    "tax"?: OrderLineItemTax;
    /** How the line item is defined. Value enum: "variant". */
    "type": "variant" | (string & {});
    /**
     * Price of one unit of a `custom_fixed` line item. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "unit_price_money"?: MoneyValue;
    /**
     * ID of the catalog variant a `variant` line sells. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id"?: string;
    /**
     * Variant IDs buyers may choose from, in the order offered. Contains 1 to 100 unique, active,
     * sellable variants of one product in one currency. Available only on standard payment links.
     * Mutually exclusive with variant_id, bundle_id, and ad hoc line item fields. minItems: 1.
     * maxItems: 100. uniqueItems: true. [] (Value): string. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     * Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_ids"?: Array<string>;
})
    & (({
    /** Value enum: "variant". */
    "type": "variant" | (string & {});
})
    & (({
    /**
     * ID of the catalog variant a `variant` line sells. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id": string;
})
    | ({
    /**
     * Variant IDs buyers may choose from, in the order offered. Contains 1 to 100 unique, active,
     * sellable variants of one product in one currency. Available only on standard payment links.
     * Mutually exclusive with variant_id, bundle_id, and ad hoc line item fields. minItems: 1.
     * maxItems: 100. uniqueItems: true. [] (Value): string. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     * Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_ids": Array<string>;
})
    | (Record<string, unknown>)));
export type PaymentLinkLineItemVariantPreviousAttributes = ({
    /**
     * Whether the buyer can change the quantity in checkout. anyOf[1] (Value): boolean. Whether
     * the buyer can change the quantity in checkout. anyOf[2] (Value): null.
     */
    "allow_quantity_adjustment"?: ((boolean) | (null));
    /**
     * Whether the buyer sets the unit price. Only `custom_variable` lines allow it. anyOf[1]
     * (Value): boolean. Whether the buyer sets the unit price. Only `custom_variable` lines allow
     * it. anyOf[2] (Value): null.
     */
    "allow_unit_price_adjustment"?: ((boolean) | (null));
    /**
     * ID of the catalog bundle a `bundle` line sells. anyOf[1] (Value): string. ID of the catalog
     * bundle a `bundle` line sells. Example: "bun_01KEZF7C00TQ6S76Z6CVQF5SVN". anyOf[2] (Value):
     * null.
     */
    "bundle_id"?: ((string) | (null));
    /**
     * Variant selected when the page opens and used at resolve when the buyer omits a selection.
     * Must be in variant_ids. Omit it to require a buyer selection. anyOf[1] (Value): string.
     * Variant selected when the page opens and used at resolve when the buyer omits a selection.
     * Must be in variant_ids. Omit it to require a buyer selection. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX". anyOf[2] (Value):
     * null.
     */
    "default_variant_id"?: ((string) | (null));
    /**
     * Description of an ad hoc line item. anyOf[1] (Value): string. Description of an ad hoc line
     * item. anyOf[2] (Value): null.
     */
    "description"?: ((string) | (null));
    /**
     * True when the referenced variant or bundle cannot be sold, or no listed variant in
     * variant_ids can be sold in the line currency. Always false on ad hoc line items. anyOf[1]
     * (Value): boolean. True when the referenced variant or bundle cannot be sold, or no listed
     * variant in variant_ids can be sold in the line currency. Always false on ad hoc line items.
     * anyOf[2] (Value): null.
     */
    "is_catalog_item_unavailable"?: ((boolean) | (null));
    /**
     * Public event read: true when the tier or event has no capacity left. anyOf[1] (Value):
     * boolean. Public event read: true when the tier or event has no capacity left. anyOf[2]
     * (Value): null.
     */
    "is_sold_out"?: ((boolean) | (null));
    /**
     * Keys the resolve override maps. Stable line item key used in checkout overrides. Must not
     * have leading or trailing whitespace. Assigned as line_item_1, line_item_2, and so on when
     * omitted, skipping numbers already used by explicit keys; retained for an existing line item
     * when omitted on update. anyOf[1] (Value): string. Keys the resolve override maps. Stable
     * line item key used in checkout overrides. Must not have leading or trailing whitespace.
     * Assigned as line_item_1, line_item_2, and so on when omitted, skipping numbers already used
     * by explicit keys; retained for an existing line item when omitted on update. anyOf[2]
     * (Value): null.
     */
    "key"?: ((string) | (null));
    /**
     * Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer.
     * Whole-number quantity; fractional quantities are not supported. Format: int32. anyOf[2]
     * (Value): null.
     */
    "max_quantity"?: ((number) | (null));
    /**
     * Optional whole-number admission capacity across all orders for an event tier; fractional
     * quantities are not supported. Must be at least 1 and cannot exceed
     * event_config.max_total_quantity when the event is capped. Omit for no tier cap; omitting it
     * in a line_items replacement removes an existing cap. anyOf[1] (Value): integer. Optional
     * whole-number admission capacity across all orders for an event tier; fractional quantities
     * are not supported. Must be at least 1 and cannot exceed event_config.max_total_quantity when
     * the event is capped. Omit for no tier cap; omitting it in a line_items replacement removes
     * an existing cap. Format: int32. minimum: 1. anyOf[2] (Value): null.
     */
    "max_total_quantity"?: ((number) | (null));
    /**
     * Highest unit price the buyer can enter when `allow_unit_price_adjustment` is true. Must be
     * greater than zero and greater than or equal to min_unit_price_money. Omit for no maximum.
     * anyOf[1] (Value): {@link MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "max_unit_price_money"?: ((MoneyValuePreviousAttributes) | (null));
    /**
     * Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer.
     * Whole-number quantity; fractional quantities are not supported. Format: int32. anyOf[2]
     * (Value): null.
     */
    "min_quantity"?: ((number) | (null));
    /**
     * Lowest unit price the buyer can enter when `allow_unit_price_adjustment` is true. anyOf[1]
     * (Value): {@link MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "min_unit_price_money"?: ((MoneyValuePreviousAttributes) | (null));
    /**
     * Name of an ad hoc line item. Catalog lines take the catalog name. anyOf[1] (Value): string.
     * Name of an ad hoc line item. Catalog lines take the catalog name. anyOf[2] (Value): null.
     */
    "name"?: ((string) | (null));
    /**
     * Unique identifier for this payment link line item, prefixed `plli_`. anyOf[1] (Value):
     * string. Unique identifier for this payment link line item, prefixed `plli_`. Example:
     * "plli_01KEZF7C004V7GVCCNMYYCBAJS". anyOf[2] (Value): null.
     */
    "payment_link_line_item_id"?: ((string) | (null));
    /**
     * Parent catalog context only. The product that the variants in variant_ids belong to. Present
     * only on buyer choice lines; refused on input. anyOf[1] (Value): string. Parent catalog
     * context only. The product that the variants in variant_ids belong to. Present only on buyer
     * choice lines; refused on input. Example: "prod_01KEZF7C00BVSHCNWVH528HB66". anyOf[2]
     * (Value): null.
     */
    "product_id"?: ((string) | (null));
    /**
     * Classification configured on a custom line for ACH debit. Null when unclassified or
     * catalog-backed; catalog lines get their product classification when checkout starts. Value
     * enum: "physical", "service", "fee", "digital", "gift_card", null. anyOf[1] (Value): string.
     * Classification configured on a custom line for ACH debit. Null when unclassified or
     * catalog-backed; catalog lines get their product classification when checkout starts. Value
     * enum: "physical", "service", "fee", "digital", "gift_card", null. anyOf[2] (Value): null.
     */
    "product_type"?: (("physical" | "service" | "fee" | "digital" | "gift_card" | null | (string & {})) | (null));
    /**
     * Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer.
     * Whole-number quantity; fractional quantities are not supported. Format: int32. anyOf[2]
     * (Value): null.
     */
    "quantity"?: ((number) | (null));
    /**
     * Public event read: whole-number admissions left after sales and payment holds; fractional
     * quantities are not supported. This quantity is bounded by both the tier and event caps.
     * Omitted when neither is capped. anyOf[1] (Value): integer. Public event read: whole-number
     * admissions left after sales and payment holds; fractional quantities are not supported. This
     * quantity is bounded by both the tier and event caps. Omitted when neither is capped. Format:
     * int32. anyOf[2] (Value): null.
     */
    "remaining_quantity"?: ((number) | (null));
    /**
     * Current catalog name of the referenced variant or bundle, or the product name for
     * variant_ids lines. A variant reads as the product name, plus the variant name when the
     * variant is a named option combination. This is the catalog value at read time, not a stored
     * snapshot: checkout resolves it again when a buyer opens the link. Absent on ad-hoc line
     * items and when the catalog object no longer exists. anyOf[1] (Value): string. Current
     * catalog name of the referenced variant or bundle, or the product name for variant_ids lines.
     * A variant reads as the product name, plus the variant name when the variant is a named
     * option combination. This is the catalog value at read time, not a stored snapshot: checkout
     * resolves it again when a buyer opens the link. Absent on ad-hoc line items and when the
     * catalog object no longer exists. anyOf[2] (Value): null.
     */
    "resolved_name"?: ((string) | (null));
    /**
     * Current lowest and highest catalog unit prices among listed variants that can be sold in the
     * line currency. Computed at read time, not stored. Omitted when no listed variant can be
     * sold. anyOf[1] (Value): {@link ProductPriceRangePreviousAttributes}. anyOf[2] (Value): null.
     */
    "resolved_price_range"?: ((ProductPriceRangePreviousAttributes) | (null));
    /**
     * Current catalog unit price of the referenced variant or bundle. For a fixed variant this is
     * the base price that applies below the first quantity price break. This is the catalog value
     * at read time, not a stored snapshot: checkout resolves the price again when a buyer opens
     * the link, so the amount a buyer pays can differ. Absent on ad-hoc line items, variant_ids
     * lines, and when the catalog object no longer exists. anyOf[1] (Value): {@link
     * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "resolved_unit_price_money"?: ((MoneyValuePreviousAttributes) | (null));
    /**
     * Unit prices offered as one-tap choices when the buyer sets the price. anyOf[1] (Value):
     * Array of {@link MoneyValuePreviousAttributes}. Unit prices offered as one-tap choices when
     * the buyer sets the price. anyOf[1][] (Value): {@link MoneyValuePreviousAttributes}. anyOf[2]
     * (Value): null.
     */
    "suggested_unit_price_money_options"?: ((Array<MoneyValuePreviousAttributes>) | (null));
    /**
     * Tax settings for an ad hoc line item. Catalog lines use the catalog's. anyOf[1] (Value):
     * {@link OrderLineItemTaxPreviousAttributes}. anyOf[2] (Value): null.
     */
    "tax"?: ((OrderLineItemTaxPreviousAttributes) | (null));
    /**
     * How the line item is defined. Value enum: "variant". anyOf[1] (Value): string. How the line
     * item is defined. Value enum: "variant". anyOf[2] (Value): null.
     */
    "type"?: (("variant" | (string & {})) | (null));
    /**
     * Price of one unit of a `custom_fixed` line item. anyOf[1] (Value): {@link
     * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "unit_price_money"?: ((MoneyValuePreviousAttributes) | (null));
    /**
     * ID of the catalog variant a `variant` line sells. anyOf[1] (Value): string. ID of the
     * catalog variant a `variant` line sells. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX". anyOf[2]
     * (Value): null.
     */
    "variant_id"?: ((string) | (null));
    /**
     * Variant IDs buyers may choose from, in the order offered. Contains 1 to 100 unique, active,
     * sellable variants of one product in one currency. Available only on standard payment links.
     * Mutually exclusive with variant_id, bundle_id, and ad hoc line item fields. anyOf[1]
     * (Value): Array of string. Variant IDs buyers may choose from, in the order offered. Contains
     * 1 to 100 unique, active, sellable variants of one product in one currency. Available only on
     * standard payment links. Mutually exclusive with variant_id, bundle_id, and ad hoc line item
     * fields. minItems: 1. maxItems: 100. uniqueItems: true. anyOf[1][] (Value): string. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX". anyOf[2] (Value):
     * null.
     */
    "variant_ids"?: ((Array<string>) | (null));
})
    & (({
    /**
     * Value enum: "variant". anyOf[1] (Value): string. Value enum: "variant". anyOf[2] (Value):
     * null.
     */
    "type"?: (("variant" | (string & {})) | (null));
})
    & (((unknown) | (unknown) | (Record<string, unknown>))));
/** A page of `PaymentLink` objects. */
export type PaymentLinkListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * PaymentLink}. A reusable link that opens checkout.
     */
    "data": Array<PaymentLink>;
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
 * Payment settings on a payment link: the enabled payment options and a note shown with payment.
 */
export type PaymentLinkPaymentConfigInput = {
    /**
     * Payment options for this payment link. Checkout offers only the options that are also
     * enabled in settings.checkout.enabled_payment_options; omit the list to use that setting. []
     * enum: "card", "apple_pay", "google_pay", "affirm", "ach_debit". [] (Value): string. Value
     * enum: "card", "apple_pay", "google_pay", "affirm", "ach_debit".
     */
    "enabled_payment_options"?: Array<"card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit">;
    /** A note shown to the buyer with the payment options. minLength: 1. maxLength: 500. */
    "payment_note"?: string;
};
/** Changes to a payment link's payment settings. Send null on the payment note to clear it. */
export type PaymentLinkPaymentPatchRequest = {
    /**
     * Payment options for this payment link. Checkout offers only the options that are also
     * enabled in settings.checkout.enabled_payment_options; omit the list to use that setting. []
     * enum: "card", "apple_pay", "google_pay", "affirm", "ach_debit". [] (Value): string. Value
     * enum: "card", "apple_pay", "google_pay", "affirm", "ach_debit".
     */
    "enabled_payment_options"?: Array<"card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit" | (string & {})>;
    /** Send null to clear it. minLength: 1. maxLength: 500. */
    "payment_note"?: string | null;
};
