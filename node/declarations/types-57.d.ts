import type { SubscriptionOfferTermsRequest, SubscriptionOfferTermsRequestInput } from './types-55.js';
import type { SubscriptionPlanTermsRequest, SubscriptionPlanTermsRequestInput } from './types-56.js';
import type { MerchantWebhookEnvelope, MoneyValue, MoneyValueInput } from './types-35.js';
import type { PartnerWebhookEnvelope } from './types-40.js';
import type { Subscription, SkipSubscriptionCycleRequestInput } from './types-54.js';
import type { InputValue } from '../runtime.js';
import type { MeCancelSubscriptionParams } from './types-33.js';
import type { ChangeSubscriptionPlanRequestInput } from './types-4.js';
import type {
    CreateSubscriptionAccessLinkRequestInput,
    CreateSubscriptionLineItemRequestInput,
    CreateSubscriptionRequestInput,
    CreateTaxRegistrationRequestInput
} from './types-11.js';
import type { CreditNotesListAllocationsParams } from './types-12.js';
import type { MePauseSubscriptionParams, MeRenewSubscriptionParams } from './types-34.js';
import type { InvoicesMarkUncollectibleParams } from './types-32.js';
import type { UpdateSubscriptionLineItemRequestInput } from './types-60.js';
import type { UpdateSubscriptionRequestInput, UpdateTaxRegistrationRequestInput } from './types-61.js';
import type { Address, AddressRequest, AddressRequestInput } from './types-0.js';
import type { ConnectTaxConnectionRequestInput } from './types-6.js';
import type { DisconnectTaxConnectionRequestInput } from './types-20.js';
import type { ResponseMeta } from './types-48.js';
import type { DocumentTaxID, DocumentTaxIDRequestInput } from './types-21.js';
/** Counts of current subscriptions by status, across currencies. */
export type SubscriptionStatusCounts = {
    /**
     * Current subscriptions with this status, across currencies. Selected by current subscription
     * status, independent of the requested half-open period. Format: int64.
     */
    "active_count": number;
    /**
     * Current subscriptions with this status, across currencies. Selected by current subscription
     * status, independent of the requested half-open period. Format: int64.
     */
    "canceled_count": number;
    /**
     * Current subscriptions with this status, across currencies. Selected by current subscription
     * status, independent of the requested half-open period. Format: int64.
     */
    "incomplete_count": number;
    /**
     * Current subscriptions with this status, across currencies. Selected by current subscription
     * status, independent of the requested half-open period. Format: int64.
     */
    "past_due_count": number;
    /**
     * Current subscriptions with this status, across currencies. Selected by current subscription
     * status, independent of the requested half-open period. Format: int64.
     */
    "paused_count": number;
    /**
     * Current subscriptions with this status, across currencies. Selected by current subscription
     * status, independent of the requested half-open period. Format: int64.
     */
    "scheduled_count": number;
    /**
     * Current subscriptions with this status, across currencies. Selected by current subscription
     * status, independent of the requested half-open period. Format: int64.
     */
    "trialing_count": number;
};
/**
 * Subscription terms from either a subscription plan or subscription offers, selected by `type`.
 */
export type SubscriptionTermsRequest = ((SubscriptionPlanTermsRequest) | (SubscriptionOfferTermsRequest) | (Record<string, unknown>));
/**
 * Subscription terms from either a subscription plan or subscription offers, selected by `type`.
 */
export type SubscriptionTermsRequestInput = ((SubscriptionPlanTermsRequestInput) | (SubscriptionOfferTermsRequestInput));
export type SubscriptionTrialEndingEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Subscription;
    };
    "event_type"?: "subscription.trial_ending";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Subscription;
    };
    "event_type"?: "subscription.trial_ending";
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
    "event_type": "subscription.trial_ending";
});
/**
 * The `subscription.trial_ending` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type SubscriptionTrialEndingInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link Subscription}. A customer's recurring purchase. */
    "data"?: {
        /** A customer's recurring purchase. */
        "object": Subscription;
    };
    /** Value enum: "subscription.trial_ending". */
    "event_type"?: "subscription.trial_ending";
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
 * The `subscription.trial_ending` webhook payload for the `merchant` event source. Fields shared
 * by merchant webhook payloads.
 */
export type SubscriptionTrialEndingMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link Subscription}. A customer's recurring purchase. */
    "data"?: {
        /** A customer's recurring purchase. */
        "object": Subscription;
    };
    /** Value enum: "subscription.trial_ending". */
    "event_type"?: "subscription.trial_ending";
});
/**
 * A delivery problem detected for an upcoming renewal that will hold the subscription's delivery,
 * and who can fix it.
 */
export type SubscriptionUpcomingDeliveryHold = {
    /** RFC3339 timestamp. Format: date-time. */
    "detected_at": string;
    /** Value enum: "buyer", "merchant". */
    "fixable_by": "buyer" | "merchant" | (string & {});
    /** Value enum: "method_unavailable", "destination_not_served", "rate_unavailable". */
    "reason": "method_unavailable" | "destination_not_served" | "rate_unavailable" | (string & {});
    /** Time of the next renewal affected by this delivery issue. Format: date-time. */
    "renewal_at": string;
};
export type SubscriptionUpdatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Subscription;
    };
    "event_type"?: "subscription.updated";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Subscription;
    };
    "event_type"?: "subscription.updated";
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
    "event_type": "subscription.updated";
});
/**
 * The `subscription.updated` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type SubscriptionUpdatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link Subscription}. A customer's recurring purchase. */
    "data"?: {
        /** A customer's recurring purchase. */
        "object": Subscription;
    };
    /** Value enum: "subscription.updated". */
    "event_type"?: "subscription.updated";
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
 * The `subscription.updated` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type SubscriptionUpdatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link Subscription}. A customer's recurring purchase. */
    "data"?: {
        /** A customer's recurring purchase. */
        "object": Subscription;
    };
    /** Value enum: "subscription.updated". */
    "event_type"?: "subscription.updated";
});
/**
 * The half-open period [period_start_at, period_end_at) includes its start and excludes its end.
 * Amounts and payments_count use currency; customer and subscription counts span currencies.
 */
export type SubscriptionWindowMetrics = {
    /**
     * Subscriptions selected by canceled_at in the period, across currencies. The half-open period
     * [period_start_at, period_end_at) includes its start and excludes its end. Amounts and
     * payments_count use currency; customer and subscription counts span currencies. Format:
     * int64.
     */
    "canceled_subscriptions_count": number;
    /**
     * Subscription-sourced payment amounts with a succeeded payment activity selected by activity
     * created_at in the period, counted once per payment. Includes recurring charges and setup
     * fees, restricted to currency. The half-open period [period_start_at, period_end_at) includes
     * its start and excludes its end. Amounts and payments_count use currency; customer and
     * subscription counts span currencies. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "collected_money": MoneyValue;
    /**
     * Subscriptions selected by subscription created_at in the period whose current status is
     * trialing, active, paused, or past_due. Excludes incomplete and canceled subscriptions; past
     * counts can change with current status. Spans currencies. The half-open period
     * [period_start_at, period_end_at) includes its start and excludes its end. Amounts and
     * payments_count use currency; customer and subscription counts span currencies. Format:
     * int64.
     */
    "new_subscriptions_count": number;
};
export type SubscriptionsCancelParams = MeCancelSubscriptionParams;
export type SubscriptionsChangePlanParams = (InputValue<ChangeSubscriptionPlanRequestInput>);
export type SubscriptionsCreateAccessLinkParams = (InputValue<CreateSubscriptionAccessLinkRequestInput>);
export type SubscriptionsCreateLineItemParams = (CreateSubscriptionLineItemRequestInput);
export type SubscriptionsCreateParams = (InputValue<CreateSubscriptionRequestInput>);
export type SubscriptionsCreatePaymentRetryParams = (InputValue<{}>);
export type SubscriptionsDeleteLineItemParams = {
    /** Reject the deletion if the subscription version has changed. Format: uint64. minimum: 1. */
    "expected_version"?: InputValue<number>;
};
export type SubscriptionsGetParams = {
    /**
     * Supported expansions: customer, payment_method, subscription_plan. Expansion requires
     * commerce.subscriptions.read plus the read scope for each expanded resource. Limits: at most
     * 10 unique expand paths per request. Repeat expand, for example
     * expand=customer&expand=payment_method, or pass one comma-separated value. [] enum:
     * "customer", "payment_method", "subscription_plan". Value enum: "customer", "payment_method",
     * "subscription_plan". anyOf[1] (Value): Array of string. [] enum: "customer",
     * "payment_method", "subscription_plan". anyOf[1][] (Value): string. Value enum: "customer",
     * "payment_method", "subscription_plan". anyOf[2] (Value): string. Value enum: "customer",
     * "payment_method", "subscription_plan".
     */
    "expand"?: InputValue<("customer" | "payment_method" | "subscription_plan")
        | readonly ("customer" | "payment_method" | "subscription_plan")[]>;
};
export type SubscriptionsGetPaymentRetryParams = {};
export type SubscriptionsListParams = {
    /**
     * Filter by the original Idempotency-Key, after trimming surrounding whitespace. Matching is
     * exact and case-sensitive. Returns current authorized resources, not the recorded response. A
     * pending resource does not prove that the operation succeeded, and an empty list does not
     * prove that it had no effect. minLength: 1. maxLength: 255.
     */
    "idempotency_key"?: InputValue<string>;
    /**
     * Filter by where the subscription terms come from. Repeat the parameter or pass
     * comma-separated values to match either type. Accepts repeated keys, comma-separated values,
     * or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown
     * entries are rejected. Values within this filter are ORed; separate filters are ANDed. []
     * enum: "subscription_plan", "subscription_offer". Value enum: "subscription_plan",
     * "subscription_offer". anyOf[1] (Value): Array of string. minItems: 1. [] enum:
     * "subscription_plan", "subscription_offer". anyOf[1][] (Value): string. Value enum:
     * "subscription_plan", "subscription_offer". anyOf[2] (Value): string. Value enum:
     * "subscription_plan", "subscription_offer".
     */
    "terms_type"?: InputValue<("subscription_plan" | "subscription_offer")
        | readonly ("subscription_plan" | "subscription_offer")[]>;
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
     * Filter by subscription status. Repeat the parameter or pass comma-separated values to match
     * multiple statuses. Accepts repeated keys, comma-separated values, or mixtures. Values are
     * trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values
     * within this filter are ORed; separate filters are ANDed. [] enum: "trialing", "active",
     * "paused", "past_due", "canceled", "incomplete", "scheduled". Value enum: "trialing",
     * "active", "paused", "past_due", "canceled", "incomplete", "scheduled". anyOf[1] (Value):
     * Array of string. minItems: 1. [] enum: "trialing", "active", "paused", "past_due",
     * "canceled", "incomplete", "scheduled". anyOf[1][] (Value): string. Value enum: "trialing",
     * "active", "paused", "past_due", "canceled", "incomplete", "scheduled". anyOf[2] (Value):
     * string. Value enum: "trialing", "active", "paused", "past_due", "canceled", "incomplete",
     * "scheduled".
     */
    "status"?: InputValue<("trialing" | "active" | "paused" | "past_due" | "canceled" | "incomplete" | "scheduled")
        | readonly ("trialing" | "active" | "paused" | "past_due" | "canceled" | "incomplete" | "scheduled")[]>;
    /**
     * Filter by the system that supplies billing dates. Accepts repeated keys, comma-separated
     * values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or
     * unknown entries are rejected. Values within this filter are ORed; separate filters are
     * ANDed. [] enum: "flint", "external". Value enum: "flint", "external". anyOf[1] (Value):
     * Array of string. minItems: 1. [] enum: "flint", "external". anyOf[1][] (Value): string.
     * Value enum: "flint", "external". anyOf[2] (Value): string. Value enum: "flint", "external".
     */
    "billing_schedule_owner"?: InputValue<("flint" | "external") | readonly ("flint" | "external")[]>;
    /** Filter external schedules by whether they need another billing date. */
    "awaiting_billing_schedule"?: InputValue<boolean>;
    /**
     * When true, returns subscriptions scheduled to cancel at the end of the current period that
     * are not yet canceled. When false, returns every other subscription.
     */
    "cancel_at_period_end"?: InputValue<boolean>;
    /** Filter by Flint customer ID. Example: "cus_01ARZ3NDEKTSV4RRFFQ69G5FAV". */
    "customer_id"?: InputValue<string>;
    /**
     * Filter by the subscription's selected delivery method. Example:
     * "dmet_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     */
    "delivery_method_id"?: InputValue<string>;
    /**
     * Filter by the reason of the current delivery_hold. Does not match upcoming delivery issues.
     * Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and
     * deduplicated in first-seen order; empty or unknown entries are rejected. Values within this
     * filter are ORed; separate filters are ANDed. [] enum: "method_unavailable",
     * "destination_not_served", "rate_unavailable". Value enum: "method_unavailable",
     * "destination_not_served", "rate_unavailable". anyOf[1] (Value): Array of string. minItems:
     * 1. [] enum: "method_unavailable", "destination_not_served", "rate_unavailable". anyOf[1][]
     * (Value): string. Value enum: "method_unavailable", "destination_not_served",
     * "rate_unavailable". anyOf[2] (Value): string. Value enum: "method_unavailable",
     * "destination_not_served", "rate_unavailable".
     */
    "hold_reason"?: InputValue<("method_unavailable" | "destination_not_served" | "rate_unavailable")
        | readonly ("method_unavailable" | "destination_not_served" | "rate_unavailable")[]>;
    /** Filter by Flint subscription offer ID. Example: "soffer_01ARZ3NDEKTSV4RRFFQ69G5FAV". */
    "subscription_offer_id"?: InputValue<string>;
    /** Filter by Flint subscription plan ID. Example: "plan_01ARZ3NDEKTSV4RRFFQ69G5FAV". */
    "subscription_plan_id"?: InputValue<string>;
    /**
     * Exact-match filter on the caller-owned external reference ID. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: InputValue<string>;
    /**
     * Sandbox only. Exact-match filter on `test_clock_id`. A live credential gets `403 FORBIDDEN`
     * with reason `test_mode_required`. minLength: 1. pattern: ^tclk_[0-9A-HJKMNP-TV-Z]{26}$.
     * Example: "tclk_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     */
    "test_clock_id"?: InputValue<string>;
    /**
     * Search across subscription ID, external reference ID, customer, and plan. Text fields match
     * any part of the value, and %, _ and \ are ordinary characters, not wildcards. IDs match from
     * the start and need the type prefix, such as sub_01.
     */
    "query"?: InputValue<string>;
    /**
     * Field to sort by. Defaults to created_at; ties are broken by subscription_id. Default:
     * "created_at". Value enum: "created_at", "updated_at", "next_billing_at".
     */
    "sort_by"?: InputValue<"created_at" | "updated_at" | "next_billing_at">;
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
     * Inclusive lower bound on next_billing_at. Format: date-time. Example:
     * "2026-03-17T14:30:00Z".
     */
    "next_billing_after"?: InputValue<string | globalThis.Date>;
    /**
     * Exclusive upper bound on next_billing_at. Format: date-time. Example:
     * "2026-03-17T14:30:00Z".
     */
    "next_billing_before"?: InputValue<string | globalThis.Date>;
    /**
     * True matches subscriptions with a delivery hold, an upcoming delivery hold, an inventory
     * wait, or a delivery-action-required pause, plus past_due subscriptions and active or
     * incomplete subscriptions whose billing date passed more than 24 hours ago without payment.
     * False is the exact complement. Other filters still apply.
     */
    "needs_attention"?: InputValue<boolean>;
    /**
     * Supported expansions: customer, payment_method, subscription_plan. Include the requested
     * related resources using scoped batch reads for this page. Each relationship requires its
     * existing target read scopes. Expansion changes the representation without changing
     * pagination tokens. Limits: at most 10 unique expand paths per request. Repeat expand, for
     * example expand=customer&expand=payment_method, or pass one comma-separated value. [] enum:
     * "customer", "payment_method", "subscription_plan". Value enum: "customer", "payment_method",
     * "subscription_plan". anyOf[1] (Value): Array of string. [] enum: "customer",
     * "payment_method", "subscription_plan". anyOf[1][] (Value): string. Value enum: "customer",
     * "payment_method", "subscription_plan". anyOf[2] (Value): string. Value enum: "customer",
     * "payment_method", "subscription_plan".
     */
    "expand"?: InputValue<("customer" | "payment_method" | "subscription_plan")
        | readonly ("customer" | "payment_method" | "subscription_plan")[]>;
};
export type SubscriptionsListPaymentRetriesParams = CreditNotesListAllocationsParams;
export type SubscriptionsPauseParams = MePauseSubscriptionParams;
export type SubscriptionsRenewParams = MeRenewSubscriptionParams;
export type SubscriptionsResumeParams = InvoicesMarkUncollectibleParams;
export type SubscriptionsSkipCycleParams = (InputValue<SkipSubscriptionCycleRequestInput>);
export type SubscriptionsUpdateLineItemParams = (InputValue<UpdateSubscriptionLineItemRequestInput>);
export type SubscriptionsUpdateParams = (InputValue<UpdateSubscriptionRequestInput>);
/**
 * The tax calculated for one jurisdiction on an order, line item, or charge, with the taxable
 * amount, rate or flat amount, and tax.
 */
export type TaxBreakdown = ({
    /** Value enum: "percentage", "flat_amount". */
    "calculation_type": "percentage" | "flat_amount" | (string & {});
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "flat_money"?: MoneyValue;
    "fulfillment_choice_group_id"?: string;
    /** A taxing jurisdiction with its level, such as state or city, name, state, and country. */
    "jurisdiction": TaxJurisdiction;
    "location_id"?: string;
    "order_charge_id"?: string;
    "order_line_item_id"?: string;
    /** minimum: 0. maximum: 100. multipleOf: 0.0001. */
    "percent"?: number;
    /** Value enum: "additive", "inclusive". */
    "price_mode": "additive" | "inclusive" | (string & {});
    "tax_breakdown_id": string;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "tax_money": MoneyValue;
    /** Value enum: "sales_tax", "use_tax", "retail_delivery_fee". */
    "tax_type": "sales_tax" | "use_tax" | "retail_delivery_fee" | (string & {});
    /**
     * Value enum: "standard_rated", "not_taxable", "customer_exempt", "tax_disabled",
     * "location_required", "calculation_incomplete".
     */
    "taxability_reason": "standard_rated"
        | "not_taxable"
        | "customer_exempt"
        | "tax_disabled"
        | "location_required"
        | "calculation_incomplete"
        | (string & {});
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "taxable_money": MoneyValue;
})
    & ((Exclude<TaxBreakdownPercentage & object, readonly unknown[]>)
    | (Exclude<TaxBreakdownFlatAmount & object, readonly unknown[]>)
    | (Record<string, unknown>));
/** The `flat_amount` variant of `TaxBreakdown`. */
export type TaxBreakdownFlatAmount = ({
    /** Value enum: "flat_amount". */
    "calculation_type": "flat_amount" | (string & {});
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "flat_money": MoneyValue;
    "fulfillment_choice_group_id"?: string;
    /** A taxing jurisdiction with its level, such as state or city, name, state, and country. */
    "jurisdiction": TaxJurisdiction;
    "location_id"?: string;
    "order_charge_id"?: string;
    "order_line_item_id"?: string;
    /** minimum: 0. maximum: 100. multipleOf: 0.0001. */
    "percent"?: number;
    /** Value enum: "additive", "inclusive". */
    "price_mode": "additive" | "inclusive" | (string & {});
    "tax_breakdown_id": string;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "tax_money": MoneyValue;
    /** Value enum: "sales_tax", "use_tax", "retail_delivery_fee". */
    "tax_type": "sales_tax" | "use_tax" | "retail_delivery_fee" | (string & {});
    /**
     * Value enum: "standard_rated", "not_taxable", "customer_exempt", "tax_disabled",
     * "location_required", "calculation_incomplete".
     */
    "taxability_reason": "standard_rated"
        | "not_taxable"
        | "customer_exempt"
        | "tax_disabled"
        | "location_required"
        | "calculation_incomplete"
        | (string & {});
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "taxable_money": MoneyValue;
})
    & (({
    /** Value enum: "flat_amount". */
    "calculation_type"?: "flat_amount" | (string & {});
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "flat_money": MoneyValue;
}));
/** The `percentage` variant of `TaxBreakdown`. */
export type TaxBreakdownPercentage = ({
    /** Value enum: "percentage". */
    "calculation_type": "percentage" | (string & {});
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "flat_money"?: MoneyValue;
    "fulfillment_choice_group_id"?: string;
    /** A taxing jurisdiction with its level, such as state or city, name, state, and country. */
    "jurisdiction": TaxJurisdiction;
    "location_id"?: string;
    "order_charge_id"?: string;
    "order_line_item_id"?: string;
    /** minimum: 0. maximum: 100. multipleOf: 0.0001. */
    "percent": number;
    /** Value enum: "additive", "inclusive". */
    "price_mode": "additive" | "inclusive" | (string & {});
    "tax_breakdown_id": string;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "tax_money": MoneyValue;
    /** Value enum: "sales_tax", "use_tax", "retail_delivery_fee". */
    "tax_type": "sales_tax" | "use_tax" | "retail_delivery_fee" | (string & {});
    /**
     * Value enum: "standard_rated", "not_taxable", "customer_exempt", "tax_disabled",
     * "location_required", "calculation_incomplete".
     */
    "taxability_reason": "standard_rated"
        | "not_taxable"
        | "customer_exempt"
        | "tax_disabled"
        | "location_required"
        | "calculation_incomplete"
        | (string & {});
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "taxable_money": MoneyValue;
})
    & (({
    /** Value enum: "percentage". */
    "calculation_type"?: "percentage" | (string & {});
    /** minimum: 0. maximum: 100. multipleOf: 0.0001. */
    "percent": number;
}));
/**
 * Tax you calculated yourself for a line or charge: whether prices include tax, and the tax
 * components.
 */
export type TaxCalculationRequest = {
    /**
     * minItems: 1. [] (Value): {@link TaxComponentRequest}. One tax component in a
     * `TaxCalculationInput`: a jurisdiction, tax type, and percent.
     */
    "components": Array<TaxComponentRequest>;
    /** Value enum: "additive", "inclusive". */
    "price_mode": "additive" | "inclusive" | (string & {});
};
/**
 * Tax you calculated yourself for a line or charge: whether prices include tax, and the tax
 * components.
 */
export type TaxCalculationRequestInput = {
    /**
     * minItems: 1. [] (Value): {@link TaxComponentRequestInput}. One tax component in a
     * `TaxCalculationInput`: a jurisdiction, tax type, and percent.
     */
    "components": Array<TaxComponentRequestInput>;
    /** Value enum: "additive", "inclusive". */
    "price_mode": "additive" | "inclusive";
};
/**
 * Tax you calculated yourself for a line or charge: whether prices include tax, and the tax
 * components.
 */
export type TaxCalculationRequestModelInput = {
    /**
     * minItems: 1. [] (Value): {@link TaxComponentRequestModelInput}. One tax component in a
     * `TaxCalculationInput`: a jurisdiction, tax type, and percent.
     */
    "components": Array<TaxComponentRequestModelInput>;
    /** Value enum: "additive", "inclusive". */
    "price_mode": "additive" | "inclusive";
};
/** One tax component in a `TaxCalculationInput`: a jurisdiction, tax type, and percent. */
export type TaxComponentRequest = ({
    /** Value enum: "percentage". */
    "calculation_type"?: "percentage" | (string & {});
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "flat_money"?: MoneyValue;
    /** A taxing jurisdiction with its level, such as state or city, name, state, and country. */
    "jurisdiction": TaxJurisdiction;
    /** minimum: 0. maximum: 100. multipleOf: 0.0001. */
    "percent": number;
    /** Value enum: "sales_tax", "use_tax". */
    "tax_type": "sales_tax" | "use_tax" | (string & {});
});
/** One tax component in a `TaxCalculationInput`: a jurisdiction, tax type, and percent. */
export type TaxComponentRequestInput = ({
    /** Value enum: "percentage". */
    "calculation_type"?: "percentage";
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "flat_money"?: MoneyValueInput;
    /** A taxing jurisdiction with its level, such as state or city, name, state, and country. */
    "jurisdiction": TaxJurisdictionInput;
    /** minimum: 0. maximum: 100. multipleOf: 0.0001. */
    "percent": number;
    /** Value enum: "sales_tax", "use_tax". */
    "tax_type": "sales_tax" | "use_tax";
})
    & ({
    "flat_money"?: never;
});
/** One tax component in a `TaxCalculationInput`: a jurisdiction, tax type, and percent. */
export type TaxComponentRequestModelInput = ({
    /** Default: "percentage". Value enum: "percentage". */
    "calculation_type"?: "percentage";
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "flat_money"?: MoneyValueInput;
    /** A taxing jurisdiction with its level, such as state or city, name, state, and country. */
    "jurisdiction": TaxJurisdictionRequestInput;
    /** minimum: 0. maximum: 100. multipleOf: 0.0001. */
    "percent": number;
    /** Value enum: "sales_tax", "use_tax". */
    "tax_type": "sales_tax" | "use_tax";
})
    & ({
    "flat_money"?: never;
});
/**
 * The environment's automatic sales tax connection. Before a record exists, identity, version and
 * timestamps are omitted. Read-time business-detail changes and provider pauses do not advance
 * version or send webhooks. Status_reason and supported_actions can also change with the clock as
 * registrations end, without a version change or webhook.
 */
export type TaxConnection = {
    /**
     * Verified business address that connect will use as the tax origin, or the address copied to
     * the connected account. A postal address. Every address has country. Addresses Flint checked
     * as complete (customer and saved addresses, merchant, location, invoice, order delivery
     * destination, tax identity, fulfillment recipient and pickup addresses) always have line1 and
     * city, and US ones always have state and postal_code. Delivery quote destinations, buyer
     * locations and postal-code tax locations hold only what was provided, such as postal_code and
     * country.
     */
    "business_address"?: Address;
    /**
     * Verified legal business name that connect will use, or the name copied to the connected
     * account.
     */
    "business_name"?: string;
    /** When the connection record was created. Format: date-time. */
    "created_at"?: string;
    /**
     * Current statements the seller must agree to before connecting. Ordered seller disclosure
     * rendered with the merchant's effective automatic tax fee.
     */
    "disclosure": TaxConnectionDisclosure;
    /**
     * Recorded seller agreement, or null before a connect records one. anyOf[1] (Value): {@link
     * TaxConnectionSellerAttestation}. The disclosure the seller agreed to and when Flint recorded
     * that agreement. anyOf[2] (Value): null.
     */
    "seller_attestation": ((TaxConnectionSellerAttestation) | (null));
    /**
     * Whether automatic tax is connected and can calculate tax. Value enum: "not_connected",
     * "provisioning", "active", "attention_required", "disabled".
     */
    "status": "not_connected" | "provisioning" | "active" | "attention_required" | "disabled" | (string & {});
    /**
     * Machine-readable detail for not_connected or attention_required, or null when no reason
     * applies. Unknown reasons normalize to other. Value enum: "not_offered",
     * "onboarding_required", "tax_category_required", "registration_required",
     * "temporarily_unavailable", "setup_incomplete", "registration_rejected",
     * "business_details_changed", "support_required", "disconnected", "other", null.
     */
    "status_reason": "not_offered"
        | "onboarding_required"
        | "tax_category_required"
        | "registration_required"
        | "temporarily_unavailable"
        | "setup_incomplete"
        | "registration_rejected"
        | "business_details_changed"
        | "support_required"
        | "disconnected"
        | "other"
        | null
        | (string & {})
        | null;
    /**
     * Lists connect when setup can complete and disconnect when automatic tax can be turned off,
     * for credentials that can write settings; otherwise empty. Webhook snapshots describe the
     * connection state independently of a receiving credential. [] enum: "connect", "disconnect".
     * [] (Value): string. Value enum: "connect", "disconnect".
     */
    "supported_actions": Array<"connect" | "disconnect" | (string & {})>;
    /**
     * Flint tax connection ID. Present once the first registration or connection creates a record.
     */
    "tax_connection_id"?: string;
    /** When the connection record's public state last changed. Format: date-time. */
    "updated_at"?: string;
    /**
     * Current resource version. Send as expected_version to reject a write based on an older
     * version. Format: uint64. minimum: 1.
     */
    "version"?: number;
};
export type TaxConnectionConnectParams = (InputValue<ConnectTaxConnectionRequestInput>);
export type TaxConnectionCreateRegistrationParams = (InputValue<CreateTaxRegistrationRequestInput>);
export type TaxConnectionDeleteRegistrationParams = {
    /**
     * Registration version last read by the caller. Omit to delete the current registration.
     * Format: uint64. minimum: 1.
     */
    "expected_version"?: InputValue<number>;
};
/** Ordered seller disclosure rendered with the merchant's effective automatic tax fee. */
export type TaxConnectionDisclosure = {
    /**
     * Statements in display order. The seller must agree to every statement. [] (Value): {@link
     * TaxDisclosureStatement}. One statement of the seller disclosure.
     */
    "statements": Array<TaxDisclosureStatement>;
    /** Opaque version of the exact rendered statements. Do not parse it. */
    "version": string;
};
export type TaxConnectionDisconnectParams = (InputValue<DisconnectTaxConnectionRequestInput>);
export type TaxConnectionGetParams = {};
export type TaxConnectionGetRegistrationParams = {};
export type TaxConnectionListRegistrationsParams = {
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
     * Return registrations with these statuses. Removed registrations never list. Accepts repeated
     * keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen
     * order; empty or unknown entries are rejected. Values within this filter are ORed; separate
     * filters are ANDed. [] enum: "pending", "scheduled", "active", "ended", "rejected",
     * "removed". Value enum: "pending", "scheduled", "active", "ended", "rejected", "removed".
     * anyOf[1] (Value): Array of string. minItems: 1. [] enum: "pending", "scheduled", "active",
     * "ended", "rejected", "removed". anyOf[1][] (Value): string. Value enum: "pending",
     * "scheduled", "active", "ended", "rejected", "removed". anyOf[2] (Value): string. Value enum:
     * "pending", "scheduled", "active", "ended", "rejected", "removed".
     */
    "status"?: InputValue<("pending" | "scheduled" | "active" | "ended" | "rejected" | "removed")
        | readonly ("pending" | "scheduled" | "active" | "ended" | "rejected" | "removed")[]>;
    /**
     * Return registrations in these exact US postal states. Values match case-sensitively and
     * intersect the status filter. Accepts repeated keys, comma-separated values, or mixtures.
     * Values are trimmed and deduplicated in first-seen order; empty or unknown entries are
     * rejected. Values within this filter are ORed; separate filters are ANDed. [] enum: "AL",
     * "AK", "AZ", "AR", "CA", "CO", "CT", "DC", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS",
     * "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "NE", "NV", "NJ", "NM", "NY", "NC",
     * "ND", "OH", "OK", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI",
     * "WY". Value enum: "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DC", "FL", "GA", "HI", "ID",
     * "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "NE", "NV",
     * "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT",
     * "VA", "WA", "WV", "WI", "WY". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "AL",
     * "AK", "AZ", "AR", "CA", "CO", "CT", "DC", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS",
     * "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "NE", "NV", "NJ", "NM", "NY", "NC",
     * "ND", "OH", "OK", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI",
     * "WY". anyOf[1][] (Value): string. Value enum: "AL", "AK", "AZ", "AR", "CA", "CO", "CT",
     * "DC", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI",
     * "MN", "MS", "MO", "NE", "NV", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "PA", "RI", "SC",
     * "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY". anyOf[2] (Value): string. Value
     * enum: "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DC", "FL", "GA", "HI", "ID", "IL", "IN",
     * "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "NE", "NV", "NJ", "NM",
     * "NY", "NC", "ND", "OH", "OK", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA",
     * "WV", "WI", "WY".
     */
    "state"?: InputValue<("AL"
        | "AK"
        | "AZ"
        | "AR"
        | "CA"
        | "CO"
        | "CT"
        | "DC"
        | "FL"
        | "GA"
        | "HI"
        | "ID"
        | "IL"
        | "IN"
        | "IA"
        | "KS"
        | "KY"
        | "LA"
        | "ME"
        | "MD"
        | "MA"
        | "MI"
        | "MN"
        | "MS"
        | "MO"
        | "NE"
        | "NV"
        | "NJ"
        | "NM"
        | "NY"
        | "NC"
        | "ND"
        | "OH"
        | "OK"
        | "PA"
        | "RI"
        | "SC"
        | "SD"
        | "TN"
        | "TX"
        | "UT"
        | "VT"
        | "VA"
        | "WA"
        | "WV"
        | "WI"
        | "WY")
        | readonly ("AL"
        | "AK"
        | "AZ"
        | "AR"
        | "CA"
        | "CO"
        | "CT"
        | "DC"
        | "FL"
        | "GA"
        | "HI"
        | "ID"
        | "IL"
        | "IN"
        | "IA"
        | "KS"
        | "KY"
        | "LA"
        | "ME"
        | "MD"
        | "MA"
        | "MI"
        | "MN"
        | "MS"
        | "MO"
        | "NE"
        | "NV"
        | "NJ"
        | "NM"
        | "NY"
        | "NC"
        | "ND"
        | "OH"
        | "OK"
        | "PA"
        | "RI"
        | "SC"
        | "SD"
        | "TN"
        | "TX"
        | "UT"
        | "VT"
        | "VA"
        | "WA"
        | "WV"
        | "WI"
        | "WY")[]>;
};
/** A response containing `TaxConnection` data. */
export type TaxConnectionResponse = {
    /**
     * The environment's automatic sales tax connection. Before a record exists, identity, version
     * and timestamps are omitted. Read-time business-detail changes and provider pauses do not
     * advance version or send webhooks. Status_reason and supported_actions can also change with
     * the clock as registrations end, without a version change or webhook.
     */
    "data": TaxConnection;
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
/** The disclosure the seller agreed to and when Flint recorded that agreement. */
export type TaxConnectionSellerAttestation = {
    /** When Flint recorded the seller's agreement. Format: date-time. */
    "attested_at": string;
    /** Opaque version of the disclosure the seller agreed to. */
    "disclosure_version": string;
};
export type TaxConnectionUpdateRegistrationParams = (UpdateTaxRegistrationRequestInput);
export type TaxConnectionUpdatedEvent = ((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": TaxConnection;
    };
    "event_type"?: "tax_connection.updated";
})
    & {
    "event_type": "tax_connection.updated";
});
/** One statement of the seller disclosure. */
export type TaxDisclosureStatement = {
    /** Text to show the seller verbatim. */
    "text": string;
};
/**
 * Merchant-provided legal identity displayed on invoices and credit notes. Does not verify IDs or
 * change tax treatment. Tax IDs are an owned collection in display order; replacing the array
 * requires the parent's expected_version. Existing entries retain their document_tax_id; omit an
 * entry to remove it, or omit its ID to add one.
 */
export type TaxIdentity = {
    /** minLength: 1. maxLength: 255. */
    "legal_name": string | null;
    /**
     * Replaced as a whole: send every field you want to keep. anyOf[1] (Value): {@link Address}. A
     * postal address. Every address has country. Addresses Flint checked as complete (customer and
     * saved addresses, merchant, location, invoice, order delivery destination, tax identity,
     * fulfillment recipient and pickup addresses) always have line1 and city, and US ones always
     * have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax
     * locations hold only what was provided, such as postal_code and country. anyOf[2] (Value):
     * null.
     */
    "registered_address": ((Address) | (null));
    /**
     * maxItems: 20. [] (Value): {@link DocumentTaxID}. A tax identifier printed on documents, with
     * its country, optional region, identifier type, and value. Flint does not verify the value.
     */
    "tax_ids": Array<DocumentTaxID>;
};
/**
 * Merchant-provided legal identity displayed on invoices and credit notes. Does not verify IDs or
 * change tax treatment. Tax IDs are an owned collection in display order; replacing the array
 * requires the parent's expected_version. Existing entries retain their document_tax_id; omit an
 * entry to remove it, or omit its ID to add one.
 */
export type TaxIdentityPatch = {
    /** Send null to clear it. minLength: 1. maxLength: 255. */
    "legal_name"?: string | null;
    /**
     * Replaced as a whole: send every field you want to keep. anyOf[1] (Value): {@link
     * AddressRequest}. A complete postal address. State and postal_code are required for US
     * addresses and optional for other countries. Send null or omit line2, state, and postal_code
     * when the address has none. anyOf[2] (Value): null.
     */
    "registered_address"?: ((AddressRequest) | (null));
    /**
     * maxItems: 20. [] (Value): {@link DocumentTaxID}. A tax identifier printed on documents, with
     * its country, optional region, identifier type, and value. Flint does not verify the value.
     */
    "tax_ids"?: Array<DocumentTaxID>;
};
/**
 * Merchant-provided legal identity displayed on invoices and credit notes. Does not verify IDs or
 * change tax treatment. Tax IDs are an owned collection in display order; replacing the array
 * requires the parent's expected_version. Existing entries retain their document_tax_id; omit an
 * entry to remove it, or omit its ID to add one.
 */
export type TaxIdentityPatchInput = {
    /** Send null to clear it. minLength: 1. maxLength: 255. */
    "legal_name"?: string | null;
    /**
     * Replaced as a whole: send every field you want to keep. anyOf[1] (Value): {@link
     * AddressRequestInput}. A complete postal address. State and postal_code are required for US
     * addresses and optional for other countries. Send null or omit line2, state, and postal_code
     * when the address has none. anyOf[2] (Value): null.
     */
    "registered_address"?: ((AddressRequestInput) | (null));
    /**
     * maxItems: 20. [] (Value): {@link DocumentTaxIDRequestInput}. A tax identifier printed on
     * documents, with its country, optional region, identifier type, and value. Flint does not
     * verify the value.
     */
    "tax_ids"?: Array<DocumentTaxIDRequestInput>;
};
/**
 * Merchant-provided legal identity displayed on invoices and credit notes. Does not verify IDs or
 * change tax treatment. Tax IDs are an owned collection in display order; replacing the array
 * requires the parent's expected_version. Existing entries retain their document_tax_id; omit an
 * entry to remove it, or omit its ID to add one.
 */
export type TaxIdentityRequestInput = TaxIdentityPatchInput;
/** A taxing jurisdiction with its level, such as state or city, name, state, and country. */
export type TaxJurisdiction = {
    /** Stable opaque Flint jurisdiction key used for equality and report grouping. minLength: 1. */
    "code": string;
    /** ISO 3166-1 alpha-2 country code. minLength: 2. maxLength: 2. pattern: ^[A-Z]{2}$. */
    "country": string;
    /** Value enum: "state", "county", "city", "district". */
    "level": "state" | "county" | "city" | "district" | (string & {});
    /** minLength: 1. */
    "name": string;
    /** minLength: 1. */
    "state": string;
};
/** A taxing jurisdiction with its level, such as state or city, name, state, and country. */
export type TaxJurisdictionInput = {
    /** Stable opaque Flint jurisdiction key used for equality and report grouping. minLength: 1. */
    "code": string;
    /** ISO 3166-1 alpha-2 country code. minLength: 2. maxLength: 2. pattern: ^[A-Z]{2}$. */
    "country": string;
    /** Value enum: "state", "county", "city", "district". */
    "level": "state" | "county" | "city" | "district";
    /** minLength: 1. */
    "name": string;
    /** minLength: 1. */
    "state": string;
};
/** A taxing jurisdiction with its level, such as state or city, name, state, and country. */
export type TaxJurisdictionRequestInput = {
    /** Stable opaque Flint jurisdiction key used for equality and report grouping. minLength: 1. */
    "code": string;
    /**
     * ISO 3166-1 alpha-2 country code. minLength: 2. maxLength: 2. pattern: ^[A-Z]{2}$. Example:
     * "US".
     */
    "country": string;
    /** Value enum: "state", "county", "city", "district". */
    "level": "state" | "county" | "city" | "district";
    /** minLength: 1. */
    "name": string;
    /** minLength: 1. */
    "state": string;
};
/**
 * An independent registration for one US state and a non-overlapping date window. Scheduled and
 * ended are derived from the UTC date at read time without advancing version or sending a webhook.
 * Removed is a final DELETE snapshot and is never listed.
 */
export type TaxRegistration = {
    /**
     * Country of registration. Currently US. minLength: 2. maxLength: 2. pattern: ^[A-Z]{2}$.
     * Example: "US". Value enum: "US".
     */
    "country": "US" | (string & {});
    /** When this registration was saved. Format: date-time. */
    "created_at": string;
    /**
     * Last day the registration applies, inclusive. Flint checks it against each sale's local
     * date. Status and validation use the UTC date. Null means no end date. Format: date.
     */
    "end_date": string | null;
    /** Last four characters of the registration number. The complete number is never returned. */
    "registration_number_last4": string;
    /**
     * First day the registration applies, inclusive. Flint checks it against each sale's local
     * date. Status and validation use the UTC date. May be up to 365 days in the future. Format:
     * date.
     */
    "start_date": string;
    /**
     * US postal state code or DC. Registrations in the same state must have non-overlapping date
     * windows. Value enum: "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DC", "FL", "GA", "HI", "ID",
     * "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "NE", "NV",
     * "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT",
     * "VA", "WA", "WV", "WI", "WY".
     */
    "state": "AL"
        | "AK"
        | "AZ"
        | "AR"
        | "CA"
        | "CO"
        | "CT"
        | "DC"
        | "FL"
        | "GA"
        | "HI"
        | "ID"
        | "IL"
        | "IN"
        | "IA"
        | "KS"
        | "KY"
        | "LA"
        | "ME"
        | "MD"
        | "MA"
        | "MI"
        | "MN"
        | "MS"
        | "MO"
        | "NE"
        | "NV"
        | "NJ"
        | "NM"
        | "NY"
        | "NC"
        | "ND"
        | "OH"
        | "OK"
        | "PA"
        | "RI"
        | "SC"
        | "SD"
        | "TN"
        | "TX"
        | "UT"
        | "VT"
        | "VA"
        | "WA"
        | "WV"
        | "WI"
        | "WY"
        | (string & {});
    /**
     * Pending until confirmed; then scheduled before start_date, active within the inclusive date
     * window, and ended after end_date. Rejected when verification fails. Removed is returned only
     * by DELETE in its final snapshot. Value enum: "pending", "scheduled", "active", "ended",
     * "rejected", "removed".
     */
    "status": "pending" | "scheduled" | "active" | "ended" | "rejected" | "removed" | (string & {});
    /** Flint tax registration ID. */
    "tax_registration_id": string;
    /** When this registration last changed. Format: date-time. */
    "updated_at": string;
    /**
     * Current resource version. Send as expected_version to reject a write based on an older
     * version. Format: uint64. minimum: 1.
     */
    "version": number;
};
/** A page of `TaxRegistration` objects. */
export type TaxRegistrationListResponse = {
    /**
     *  [] (Value): {@link TaxRegistration}. An independent registration for one US state and a
     * non-overlapping date window. Scheduled and ended are derived from the UTC date at read time
     * without advancing version or sending a webhook. Removed is a final DELETE snapshot and is
     * never listed.
     */
    "data": Array<TaxRegistration>;
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
/** A response containing `TaxRegistration` data. */
export type TaxRegistrationResponse = {
    /**
     * An independent registration for one US state and a non-overlapping date window. Scheduled
     * and ended are derived from the UTC date at read time without advancing version or sending a
     * webhook. Removed is a final DELETE snapshot and is never listed.
     */
    "data": TaxRegistration;
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
 * Tax settings: whether tax is calculated by default and the default tax categories for line items
 * and delivery charges.
 */
export type TaxSettings = {
    /**
     * Charge category inherited by delivery methods that omit charge_tax_category. Null derives
     * the category from the method type. Value enum: "service_fee", "shipping", "delivery",
     * "handling", "surcharge", null.
     */
    "default_delivery_tax_category"?: "service_fee" | "shipping" | "delivery" | "handling" | "surcharge" | null | (string & {}) | null;
    /**
     * Taxability inherited by delivery methods that omit taxable. Defaults to true because Flint
     * cannot yet derive delivery-charge taxability from category and jurisdiction alone.
     */
    "default_delivery_taxable"?: boolean;
    /**
     * Whether new checkouts and orders calculate tax by default. This does not decide whether an
     * individual line item or delivery charge is taxable.
     */
    "default_enabled"?: boolean;
    /**
     * Flint line-item tax category. Value enum: "general", "physical_goods", "digital_goods",
     * "software", "saas", "services", "professional_services", "food", "prepared_food",
     * "clothing", "medical_goods", "admission".
     */
    "default_line_item_tax_category"?: "general"
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
};
/** Tax settings to change when updating settings. Send null for a category to clear it. */
export type TaxSettingsRequest = {
    /**
     * Charge category inherited by delivery methods that omit charge_tax_category. Null derives
     * the category from the method type. Send null to clear it. Value enum: "service_fee",
     * "shipping", "delivery", "handling", "surcharge", null.
     */
    "default_delivery_tax_category"?: "service_fee" | "shipping" | "delivery" | "handling" | "surcharge" | null | (string & {}) | null;
    /**
     * Taxability inherited by delivery methods that omit taxable. Defaults to true because Flint
     * cannot yet derive delivery-charge taxability from category and jurisdiction alone.
     */
    "default_delivery_taxable"?: boolean;
    /**
     * Whether new checkouts and orders calculate tax by default. This does not decide whether an
     * individual line item or delivery charge is taxable.
     */
    "default_enabled"?: boolean;
    /**
     * Flint line-item tax category. Send null to clear it. Value enum: "general",
     * "physical_goods", "digital_goods", "software", "saas", "services", "professional_services",
     * "food", "prepared_food", "clothing", "medical_goods", "admission", null.
     */
    "default_line_item_tax_category"?: "general"
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
        | null
        | (string & {})
        | null;
};
/** Tax settings to change when updating settings. Send null for a category to clear it. */
export type TaxSettingsRequestInput = {
    /**
     * Charge category inherited by delivery methods that omit charge_tax_category. Null derives
     * the category from the method type. Send null to clear it. Value enum: "service_fee",
     * "shipping", "delivery", "handling", "surcharge", null.
     */
    "default_delivery_tax_category"?: "service_fee" | "shipping" | "delivery" | "handling" | "surcharge" | null;
    /**
     * Taxability inherited by delivery methods that omit taxable. Defaults to true because Flint
     * cannot yet derive delivery-charge taxability from category and jurisdiction alone.
     */
    "default_delivery_taxable"?: boolean;
    /**
     * Whether new checkouts and orders calculate tax by default. This does not decide whether an
     * individual line item or delivery charge is taxable.
     */
    "default_enabled"?: boolean;
    /**
     * Flint line-item tax category. Send null to clear it. Value enum: "general",
     * "physical_goods", "digital_goods", "software", "saas", "services", "professional_services",
     * "food", "prepared_food", "clothing", "medical_goods", "admission", null.
     */
    "default_line_item_tax_category"?: "general"
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
        | null;
};
