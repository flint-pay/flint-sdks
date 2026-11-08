import type { MerchantWebhookEnvelope, MoneyValue, MetadataMap, MoneyMovementListMeta } from './types-35.js';
import type { PartnerWebhookEnvelope } from './types-40.js';
import type { PaymentMethod } from './types-42.js';
import type { ResponseMeta, ResourceReference } from './types-48.js';
import type { InputValue } from '../runtime.js';
import type { CreatePaymentMethodDomainRequestInput } from './types-9.js';
import type { UpdatePaymentMethodDomainRequestInput } from './types-59.js';
import type { StripeClientSetup } from './types-54.js';
import type { SavePaymentMethodRequestInput } from './types-53.js';
import type {
    ExpandedPaymentIntentSummary,
    ExpandedCustomerSummary,
    ExpandedOrderSummary,
    ExpandedPayoutDestinationSummary,
    ExpandedPayoutSummary
} from './types-21.js';
import type { DeclinePaymentReviewRequestInput } from './types-14.js';
import type { PayoutTraceID } from './types-44.js';
export type PaymentMethodArchivedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": PaymentMethod;
    };
    "event_type"?: "payment_method.archived";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": PaymentMethod;
    };
    "event_type"?: "payment_method.archived";
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
    "event_type": "payment_method.archived";
});
/**
 * The `payment_method.archived` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type PaymentMethodArchivedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link PaymentMethod}. A customer's saved payment details. */
    "data"?: {
        /** A customer's saved payment details. */
        "object": PaymentMethod;
    };
    /** Value enum: "payment_method.archived". */
    "event_type"?: "payment_method.archived";
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
 * The `payment_method.archived` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type PaymentMethodArchivedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link PaymentMethod}. A customer's saved payment details. */
    "data"?: {
        /** A customer's saved payment details. */
        "object": PaymentMethod;
    };
    /** Value enum: "payment_method.archived". */
    "event_type"?: "payment_method.archived";
});
/** A domain registered for browser payment methods. */
export type PaymentMethodDomain = {
    /** RFC3339 timestamp. Format: date-time. */
    "created_at": string;
    /**
     * The registered hostname, trimmed and lowercased. ASCII only, at least two labels, each up to
     * 63 characters, 253 characters in total; no scheme, path, port, IP address, or wildcard.
     */
    "domain_name": string;
    /** Flint payment method domain ID, starting with pmdom_. */
    "payment_method_domain_id": string;
    /**
     * Availability and validation status of each payment option on this domain. [] (Value): {@link
     * PaymentMethodDomainPaymentOptionStatus}. Whether a wallet payment option, Apple Pay or
     * Google Pay, is active, inactive, or unavailable for a payment method domain.
     */
    "payment_option_statuses": Array<PaymentMethodDomainPaymentOptionStatus>;
    /** Value enum: "active", "inactive". */
    "status": "active" | "inactive" | (string & {});
    /** RFC3339 timestamp. Format: date-time. */
    "updated_at": string;
    /** Value enum: "active", "action_required", "unavailable". */
    "validation_status": "active" | "action_required" | "unavailable" | (string & {});
    /**
     * Persisted version of this resource's owned state. Expanded resources and external
     * observations can change independently. Format: uint64. minimum: 1.
     */
    "version": number;
};
/** A page of `PaymentMethodDomain` objects. */
export type PaymentMethodDomainListResponse = {
    /**
     *  [] (Value): {@link PaymentMethodDomain}. A domain registered for browser payment methods.
     */
    "data": Array<PaymentMethodDomain>;
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
 * Whether a wallet payment option, Apple Pay or Google Pay, is active, inactive, or unavailable
 * for a payment method domain.
 */
export type PaymentMethodDomainPaymentOptionStatus = {
    /** Value enum: "apple_pay", "google_pay". */
    "payment_option": "apple_pay" | "google_pay" | (string & {});
    /** Value enum: "active", "inactive", "unavailable". */
    "status": "active" | "inactive" | "unavailable" | (string & {});
};
/** A response containing `PaymentMethodDomain` data. */
export type PaymentMethodDomainResponse = {
    /** A domain registered for browser payment methods. */
    "data": PaymentMethodDomain;
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
export type PaymentMethodDomainsCreateParams = (InputValue<CreatePaymentMethodDomainRequestInput>);
export type PaymentMethodDomainsGetParams = {};
export type PaymentMethodDomainsListParams = {
    /**
     * Filter by status. Accepts repeated keys, comma-separated values, or mixtures. Values are
     * trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values
     * within this filter are ORed; separate filters are ANDed. [] enum: "active", "inactive".
     * Value enum: "active", "inactive". anyOf[1] (Value): Array of string. minItems: 1. [] enum:
     * "active", "inactive". anyOf[1][] (Value): string. Value enum: "active", "inactive". anyOf[2]
     * (Value): string. Value enum: "active", "inactive".
     */
    "status"?: InputValue<("active" | "inactive") | readonly ("active" | "inactive")[]>;
    /**
     * Exact hostname filter after trimming whitespace and converting to lowercase. Accepts an
     * ASCII fully-qualified hostname without a URL, port, wildcard, or IP address. Matches the
     * entire stored domain name. minLength: 1. maxLength: 253.
     */
    "domain_name"?: InputValue<string>;
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
export type PaymentMethodDomainsUpdateParams = (InputValue<UpdatePaymentMethodDomainRequestInput>);
export type PaymentMethodFailedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": PaymentMethod;
    };
    "event_type"?: "payment_method.failed";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": PaymentMethod;
    };
    "event_type"?: "payment_method.failed";
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
    "event_type": "payment_method.failed";
});
/**
 * The `payment_method.failed` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type PaymentMethodFailedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link PaymentMethod}. A customer's saved payment details. */
    "data"?: {
        /** A customer's saved payment details. */
        "object": PaymentMethod;
    };
    /** Value enum: "payment_method.failed". */
    "event_type"?: "payment_method.failed";
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
 * The `payment_method.failed` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type PaymentMethodFailedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link PaymentMethod}. A customer's saved payment details. */
    "data"?: {
        /** A customer's saved payment details. */
        "object": PaymentMethod;
    };
    /** Value enum: "payment_method.failed". */
    "event_type"?: "payment_method.failed";
});
/** A page of `PaymentMethod` objects. */
export type PaymentMethodListResponse = {
    /**  [] (Value): {@link PaymentMethod}. A customer's saved payment details. */
    "data": Array<PaymentMethod>;
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
/** A response containing `PaymentMethod` data. */
export type PaymentMethodResponse = {
    /** A customer's saved payment details. */
    "data": PaymentMethod;
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
 * The saved payment method, with `client_setup` when the buyer must still complete processor setup
 * before the payment method can be used. A customer's saved payment details.
 */
export type PaymentMethodWithSetup = (Exclude<PaymentMethod & object, readonly unknown[]>)
    & ({
    /**
     * Present when the buyer must complete processor setup before using this payment method.
     * Stripe.js setup authority returned while saving a payment method. Follow its stripe_js_call
     * now. setup_collection is guidance instead and never carries a secret.
     */
    "client_setup"?: StripeClientSetup;
});
export type PaymentMethodsCreateParams = (InputValue<SavePaymentMethodRequestInput>);
export type PaymentMethodsDeleteParams = {};
export type PaymentMethodsGetParams = {
    /**
     * Supported expansions: customer. Expansion requires payments.payment_methods.read plus
     * customers.read. Limits: at most 10 unique expand paths per request. Pass expand=customer. []
     * enum: "customer". Value enum: "customer". anyOf[1] (Value): Array of string. [] enum:
     * "customer". anyOf[1][] (Value): string. Value enum: "customer". anyOf[2] (Value): string.
     * Value enum: "customer".
     */
    "expand"?: InputValue<("customer") | readonly ("customer")[]>;
};
export type PaymentMethodsListParams = {
    /** Optional Flint customer ID filter. Example: "cus_01ARZ3NDEKTSV4RRFFQ69G5FAV". */
    "customer_id"?: InputValue<string>;
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
     * Filter by payment method type. Accepts repeated keys, comma-separated values, or mixtures.
     * Values are trimmed and deduplicated in first-seen order; empty or unknown entries are
     * rejected. Values within this filter are ORed; separate filters are ANDed. [] enum: "card".
     * Value enum: "card". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "card".
     * anyOf[1][] (Value): string. Value enum: "card". anyOf[2] (Value): string. Value enum:
     * "card".
     */
    "type"?: InputValue<("card") | readonly ("card")[]>;
    /**
     * Filter by status. Repeat the parameter or send comma-separated values to match any of
     * several. Omitted, the list leaves out archived rows; name archived to include them. Accepts
     * repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in
     * first-seen order; empty or unknown entries are rejected. Values within this filter are ORed;
     * separate filters are ANDed. [] enum: "active", "pending", "expired", "archived", "failed".
     * Value enum: "active", "pending", "expired", "archived", "failed". anyOf[1] (Value): Array of
     * string. minItems: 1. [] enum: "active", "pending", "expired", "archived", "failed".
     * anyOf[1][] (Value): string. Value enum: "active", "pending", "expired", "archived",
     * "failed". anyOf[2] (Value): string. Value enum: "active", "pending", "expired", "archived",
     * "failed".
     */
    "status"?: InputValue<("active" | "pending" | "expired" | "archived" | "failed")
        | readonly ("active" | "pending" | "expired" | "archived" | "failed")[]>;
    /**
     * Filter by usage: off_session payment methods can be charged without the buyer; on_session
     * ones were saved by buyers for faster checkout. Accepts repeated keys, comma-separated
     * values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or
     * unknown entries are rejected. Values within this filter are ORed; separate filters are
     * ANDed. [] enum: "on_session", "off_session". Value enum: "on_session", "off_session".
     * anyOf[1] (Value): Array of string. minItems: 1. [] enum: "on_session", "off_session".
     * anyOf[1][] (Value): string. Value enum: "on_session", "off_session". anyOf[2] (Value):
     * string. Value enum: "on_session", "off_session".
     */
    "usage"?: InputValue<("on_session" | "off_session") | readonly ("on_session" | "off_session")[]>;
    /** Inclusive lower bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
    /**
     * Supported expansions: customer. Include the requested related resources using scoped batch
     * reads for this page. Each relationship requires its existing target read scopes. Expansion
     * changes the representation without changing pagination tokens. Limits: at most 10 unique
     * expand paths per request. Pass expand=customer. [] enum: "customer". Value enum: "customer".
     * anyOf[1] (Value): Array of string. [] enum: "customer". anyOf[1][] (Value): string. Value
     * enum: "customer". anyOf[2] (Value): string. Value enum: "customer".
     */
    "expand"?: InputValue<("customer") | readonly ("customer")[]>;
};
/**
 * The part of a refund returned through one payment, with the amount, tip, status, and any failure
 * reason.
 */
export type PaymentRefund = {
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "amount_money": MoneyValue;
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
    /**
     * Present only when `expand` includes `payment_refunds.payment_intent`; `null` when expanded
     * and there is no related payment intent. anyOf[1] (Value): {@link
     * ExpandedPaymentIntentSummary}. A payment intent's summary fields, including amount, status,
     * and capture method, returned when the payment intent is expanded. anyOf[2] (Value): null.
     */
    "payment_intent"?: ((ExpandedPaymentIntentSummary) | (null));
    "payment_intent_id"?: string;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "refunded_tip_money": MoneyValue;
    /**
     * Status of this payment refund or tender allocation. A succeeded refund can still fail after
     * a bank rejection. Parent status transitions send refund.succeeded,
     * refund.partially_succeeded, or refund.failed; other public changes send refund.updated.
     * Value enum: "pending", "requires_action", "succeeded", "failed", "canceled".
     */
    "status": "pending" | "requires_action" | "succeeded" | "failed" | "canceled" | (string & {});
};
/** A payment review requiring a merchant decision. */
export type PaymentReview = {
    /** RFC3339 timestamp. Format: date-time. */
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
    "customer_id": string | null;
    "ip_address": string | null;
    /**
     * The most recent resolution attempt that failed. Set when a decline's refund failed and the
     * review reopened. Null when no attempt has failed. anyOf[1] (Value): {@link
     * PaymentReviewResolutionFailure}. A failed attempt to resolve a review by refund, with the
     * `refund_id` and when it failed. anyOf[2] (Value): null.
     */
    "last_resolution_failure": ((PaymentReviewResolutionFailure) | (null));
    "matched_risk_rule_id": string | null;
    /** RFC3339 timestamp. Format: date-time. */
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
    "payment_intent_id": string;
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
    /** The refund that closed this review. Null otherwise. */
    "refund_id": string | null;
    /**
     * Refunded amount for this review. Null when no refund is recorded. anyOf[1] (Value): {@link
     * MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code. anyOf[2] (Value): null.
     */
    "refunded_money": ((MoneyValue) | (null));
    /** RFC3339 timestamp. Format: date-time. */
    "resolution_started_at": string | null;
    /**
     * The credential that started resolving this payment review. Null when Flint started it.
     * anyOf[1] (Value): {@link ResourceReference}. A reference to another resource by
     * `resource_type` and `resource_id`. anyOf[2] (Value): null.
     */
    "resolution_started_by": ((ResourceReference) | (null));
    /** The risk assessment shown on a review: a `level` and, when available, a numeric `score`. */
    "risk": PaymentReviewRisk;
    /** Value enum: "open", "resolving", "closed". */
    "status": "open" | "resolving" | "closed" | (string & {});
    /** RFC3339 timestamp. Format: date-time. */
    "updated_at": string;
};
export type PaymentReviewClosedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": PaymentReview;
    };
    "event_type"?: "payment_review.closed";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": PaymentReview;
    };
    "event_type"?: "payment_review.closed";
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
    "event_type": "payment_review.closed";
});
/**
 * The `payment_review.closed` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type PaymentReviewClosedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link PaymentReview}. A payment review requiring a merchant decision.
     */
    "data"?: {
        /** A payment review requiring a merchant decision. */
        "object": PaymentReview;
    };
    /** Value enum: "payment_review.closed". */
    "event_type"?: "payment_review.closed";
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
 * The `payment_review.closed` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type PaymentReviewClosedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link PaymentReview}. A payment review requiring a merchant decision.
     */
    "data"?: {
        /** A payment review requiring a merchant decision. */
        "object": PaymentReview;
    };
    /** Value enum: "payment_review.closed". */
    "event_type"?: "payment_review.closed";
});
/** A page of `PaymentReview` objects. */
export type PaymentReviewListResponse = {
    /**  [] (Value): {@link PaymentReview}. A payment review requiring a merchant decision. */
    "data": Array<PaymentReview>;
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
export type PaymentReviewOpenedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": PaymentReview;
    };
    "event_type"?: "payment_review.opened";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": PaymentReview;
    };
    "event_type"?: "payment_review.opened";
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
    "event_type": "payment_review.opened";
});
/**
 * The `payment_review.opened` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type PaymentReviewOpenedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
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
