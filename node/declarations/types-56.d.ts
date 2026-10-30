import type { InputValue } from '../runtime.js';
import type {
    UpdateSubscriptionPlanRequestInput,
    UpdateSubscriptionLineItemRequestInput,
    UpdateSubscriptionRequestInput
} from './types-60.js';
import type { Address, AddressRequest } from './types-0.js';
import type { SubscriptionAddressVerification, Subscription, SkipSubscriptionCycleRequestInput } from './types-53.js';
import type {
    SubscriptionDeliveryOption,
    SubscriptionDeliveryMethodImpact,
    SubscriptionDeliveryDestinationInputAddressInput
} from './types-54.js';
import type { ErrorDetail } from './types-21.js';
import type { ResponseMeta } from './types-48.js';
import type {
    SubscriptionPlanChangePreview,
    SubscriptionOfferTermsRequest,
    SubscriptionPlanTermsRequest,
    SubscriptionOfferTermsRequestInput,
    SubscriptionPlanTermsRequestInput
} from './types-55.js';
import type {
    CreateSubscriptionPreviewRequestInput,
    CreateSubscriptionAccessLinkRequestInput,
    CreateSubscriptionLineItemRequestInput,
    CreateSubscriptionRequestInput
} from './types-11.js';
import type { PromotionRecurrence } from './types-45.js';
import type { MerchantWebhookEnvelope, MePauseSubscriptionParams, MeRenewSubscriptionParams } from './types-34.js';
import type { PartnerWebhookEnvelope } from './types-40.js';
import type { MoneyValue } from './types-35.js';
import type { Order } from './types-36.js';
import type { OrderPaymentAttempt } from './types-37.js';
import type { MeCancelSubscriptionParams } from './types-33.js';
import type { ChangeSubscriptionPlanRequestInput } from './types-4.js';
import type { CreditNotesListAllocationsParams } from './types-12.js';
import type { InvoicesMarkUncollectibleParams } from './types-32.js';
import type { TaxBreakdownFlatAmount, TaxBreakdownPercentage, TaxJurisdiction } from './types-57.js';
export type SubscriptionPlansDeleteParams = {
    /** Optional subscription plan version last read by the caller. Format: uint64. minimum: 1. */
    "expected_version"?: InputValue<number>;
};
export type SubscriptionPlansGetParams = {};
export type SubscriptionPlansListParams = {
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
     * Filter by status. Repeat the parameter or send comma-separated values to match any of
     * several. Omitted, the list leaves out archived rows; name archived to include them. Accepts
     * repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in
     * first-seen order; empty or unknown entries are rejected. Values within this filter are ORed;
     * separate filters are ANDed. [] enum: "active", "inactive", "archived". Value enum: "active",
     * "inactive", "archived". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "active",
     * "inactive", "archived". anyOf[1][] (Value): string. Value enum: "active", "inactive",
     * "archived". anyOf[2] (Value): string. Value enum: "active", "inactive", "archived".
     */
    "status"?: InputValue<("active" | "inactive" | "archived") | readonly ("active" | "inactive" | "archived")[]>;
    /**
     * Exact-match filter on the caller-owned external reference ID. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: InputValue<string>;
    /**
     * Search across subscription plan ID, external reference ID, name, and description. Text
     * fields match any part of the value, and %, _ and \ are ordinary characters, not wildcards.
     * IDs match from the start and need the type prefix, such as plan_01.
     */
    "query"?: InputValue<string>;
    /**
     * Field to sort by. Defaults to created_at; ties are broken by subscription_plan_id. Default:
     * "created_at". Value enum: "name", "created_at", "updated_at".
     */
    "sort_by"?: InputValue<"name" | "created_at" | "updated_at">;
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
};
export type SubscriptionPlansUpdateParams = (InputValue<UpdateSubscriptionPlanRequestInput>);
/**
 * A preview of a subscription. In `create` mode it reports validity and errors; in
 * `delivery_options` mode it lists delivery methods.
 */
export type SubscriptionPreview = {
    /**
     * The verification state of a subscription's delivery address: `verified`, `unverified`,
     * `needs_review`, or `unverifiable`.
     */
    "address_verification"?: SubscriptionAddressVerification;
    /** ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD". */
    "currency"?: string;
    /**
     * Present in delivery_options mode ([] when no method applies); absent in create mode. []
     * (Value): {@link SubscriptionDeliveryOption}. A delivery method offered for a subscription,
     * with its availability, price, and the reason it is unavailable if it is.
     */
    "delivery_methods"?: Array<SubscriptionDeliveryOption>;
    /**
     * A postal address. Every address has country. Addresses Flint checked as complete (customer
     * and saved addresses, merchant, location, invoice, order delivery destination, tax identity,
     * fulfillment recipient and pickup addresses) always have line1 and city, and US ones always
     * have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax
     * locations hold only what was provided, such as postal_code and country.
     */
    "destination_address"?: Address;
    /**
     * Present in create mode ([] when the subscription is valid); absent in delivery_options mode.
     * [] (Value): {@link SubscriptionPreviewError}. An error found while previewing a
     * subscription, with a `code`, message, and the parameter at fault.
     */
    "errors"?: Array<SubscriptionPreviewError>;
    /** Present in create mode; absent in delivery_options mode. */
    "is_valid"?: boolean;
    /** Value enum: "create", "delivery_options". */
    "mode": "create" | "delivery_options" | (string & {});
    "subscription_id"?: string;
};
/**
 * An error found while previewing a subscription, with a `code`, message, and the parameter at
 * fault.
 */
export type SubscriptionPreviewError = {
    "code": string;
    /**
     *  [] (Value): {@link ErrorDetail}. One specific failure within an error, with a `code` and
     * `message` plus fields that depend on the code, such as the `param`, resource, quantity, or
     * amount involved.
     */
    "details"?: Array<ErrorDetail>;
    "message": string;
    "param"?: string;
};
/** The response for: Preview subscription. */
export type SubscriptionPreviewResponse = {
    /**
     *  oneOf[1] (Value): {@link SubscriptionPreview}. A preview of a subscription. In `create`
     * mode it reports validity and errors; in `delivery_options` mode it lists delivery methods.
     * oneOf[2] (Value): {@link SubscriptionDeliveryMethodImpact}. How a delivery method change
     * affects subscriptions: current counts and how many would no longer be eligible. oneOf[3]
     * (Value): {@link SubscriptionRenewalPreview}. A preview of a subscription's next renewal and
     * its estimated pricing. oneOf[4] (Value): {@link SubscriptionPlanChangePreview}. Estimated
     * pricing for a subscription plan change, including the recurring item subtotal and renewal
     * amounts.
     */
    "data": ((SubscriptionPreview)
        | (SubscriptionDeliveryMethodImpact)
        | (SubscriptionRenewalPreview)
        | (SubscriptionPlanChangePreview)
        | (Record<string, unknown>));
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
export type SubscriptionPreviewsCreateParams = (CreateSubscriptionPreviewRequestInput);
/**
 * A recurring promotion applied to a subscription, including its recurrence and remaining
 * discounted cycles.
 */
export type SubscriptionPromotion = {
    "name": string;
    /** The attached promotion code ID; null when no promotion code was used. */
    "promotion_code_id": string | null;
    "promotion_id": string;
    /**
     * How often a promotion's discount repeats on a subscription: once, for a number of charged
     * payments, or forever.
     */
    "recurrence": PromotionRecurrence;
    /**
     * Charged cycles remaining for a repeating promotion, including the next cycle; null for a
     * promotion that lasts forever. Format: int64.
     */
    "remaining_cycles": number | null;
};
export type SubscriptionReactivatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Subscription;
    };
    "event_type"?: "subscription.reactivated";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Subscription;
    };
    "event_type"?: "subscription.reactivated";
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
    "event_type": "subscription.reactivated";
});
/**
 * The `subscription.reactivated` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type SubscriptionReactivatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link Subscription}. A customer's recurring purchase. */
    "data"?: {
        /** A customer's recurring purchase. */
        "object": Subscription;
    };
    /** Value enum: "subscription.reactivated". */
    "event_type"?: "subscription.reactivated";
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
 * The `subscription.reactivated` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type SubscriptionReactivatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link Subscription}. A customer's recurring purchase. */
    "data"?: {
        /** A customer's recurring purchase. */
        "object": Subscription;
    };
    /** Value enum: "subscription.reactivated". */
    "event_type"?: "subscription.reactivated";
});
/**
 * Estimated pricing and billing time for a subscription's next renewal, including items,
 * discounts, shipping, and tax.
 */
export type SubscriptionRenewalEstimate = {
    /** Expected billing time, or null when billing is not scheduled. Format: date-time. */
    "billing_at": string | null;
    /** ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD". */
    "currency": string;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "discount_money": MoneyValue;
    /**
     *  [] (Value): {@link SubscriptionRenewalEstimateDiscount}. An estimated renewal discount from
     * a promotion or credit for a subscription plan change.
     */
    "discounts": Array<SubscriptionRenewalEstimateDiscount>;
    /**
     *  [] (Value): {@link SubscriptionRenewalEstimateLineItem}. A subscription item's quantity,
     * subtotal, and discount in an estimated renewal.
     */
    "line_items": Array<SubscriptionRenewalEstimateLineItem>;
    /**
     * Estimated shipping; null for a digital subscription. anyOf[1] (Value): {@link MoneyValue}.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code. anyOf[2]
     * (Value): null.
     */
    "shipping_money": ((MoneyValue) | (null));
    /** Format: uint64. minimum: 0. */
    "subscription_cycle": number;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "subtotal_money": MoneyValue;
    /**
     * Estimated tax; null when no tax address is available. anyOf[1] (Value): {@link MoneyValue}.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code. anyOf[2]
     * (Value): null.
     */
    "tax_money": ((MoneyValue) | (null));
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "total_money": MoneyValue;
};
/** An estimated renewal discount from a promotion or credit for a subscription plan change. */
export type SubscriptionRenewalEstimateDiscount = {
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "discount_money": MoneyValue;
    "name": string;
    /** Promotion ID for a promotion discount; null for unused-time credit. */
    "promotion_id": string | null;
    /** Value enum: "promotion", "plan_change_credit". */
    "source": "promotion" | "plan_change_credit" | (string & {});
};
/** A subscription item's quantity, subtotal, and discount in an estimated renewal. */
export type SubscriptionRenewalEstimateLineItem = {
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "discount_money": MoneyValue;
    "name": string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "quantity": number;
    /** The saved subscription line ID; null when previewing replacement plan lines. */
    "subscription_line_item_id": string | null;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "subtotal_money": MoneyValue;
};
/** A preview of a subscription's next renewal and its estimated pricing. */
export type SubscriptionRenewalPreview = {
    /** Value enum: "next_renewal". */
    "mode": "next_renewal" | (string & {});
    /**
     * Estimated pricing and billing time for a subscription's next renewal, including items,
     * discounts, shipping, and tax.
     */
    "renewal": SubscriptionRenewalEstimate;
    "subscription_id": string;
};
/**
 * The subscription is the primary resource and expected_version target; order and
 * order_payment_attempt report the renewal outcome.
 */
export type SubscriptionRenewalResult = {
    /** A customer's purchase and its payment and fulfillment progress. */
    "order": Order;
    /**
     *  anyOf[1] (Value): {@link OrderPaymentAttempt}. An attempt to pay an order. anyOf[2]
     * (Value): null.
     */
    "order_payment_attempt": ((OrderPaymentAttempt) | (null));
    /** A customer's recurring purchase. */
    "subscription": Subscription;
};
/** A response containing `SubscriptionRenewalResult` data. */
export type SubscriptionRenewalResultResponse = {
    /**
     * The subscription is the primary resource and expected_version target; order and
     * order_payment_attempt report the renewal outcome.
     */
    "data": SubscriptionRenewalResult;
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
export type SubscriptionRenewalUpcomingEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Subscription;
    };
    "event_type"?: "subscription.renewal_upcoming";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Subscription;
    };
    "event_type"?: "subscription.renewal_upcoming";
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
    "event_type": "subscription.renewal_upcoming";
});
/**
 * The `subscription.renewal_upcoming` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type SubscriptionRenewalUpcomingInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link Subscription}. A customer's recurring purchase. */
    "data"?: {
        /** A customer's recurring purchase. */
        "object": Subscription;
    };
    /** Value enum: "subscription.renewal_upcoming". */
    "event_type"?: "subscription.renewal_upcoming";
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
 * The `subscription.renewal_upcoming` webhook payload for the `merchant` event source. Fields
 * shared by merchant webhook payloads.
 */
export type SubscriptionRenewalUpcomingMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link Subscription}. A customer's recurring purchase. */
    "data"?: {
        /** A customer's recurring purchase. */
        "object": Subscription;
    };
    /** Value enum: "subscription.renewal_upcoming". */
    "event_type"?: "subscription.renewal_upcoming";
});
/** A response containing `Subscription` data. */
export type SubscriptionResponse = {
    /** A customer's recurring purchase. */
    "data": Subscription;
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
export type SubscriptionResumedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Subscription;
    };
    "event_type"?: "subscription.resumed";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Subscription;
    };
    "event_type"?: "subscription.resumed";
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
    "event_type": "subscription.resumed";
});
/**
 * The `subscription.resumed` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type SubscriptionResumedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link Subscription}. A customer's recurring purchase. */
    "data"?: {
        /** A customer's recurring purchase. */
        "object": Subscription;
    };
    /** Value enum: "subscription.resumed". */
    "event_type"?: "subscription.resumed";
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
 * The `subscription.resumed` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type SubscriptionResumedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link Subscription}. A customer's recurring purchase. */
    "data"?: {
        /** A customer's recurring purchase. */
        "object": Subscription;
    };
    /** Value enum: "subscription.resumed". */
    "event_type"?: "subscription.resumed";
});
/**
 * The address where a subscription's service is delivered, with the saved customer address it came
 * from.
 */
export type SubscriptionServiceLocation = {
    /**
     * A postal address. Every address has country. Addresses Flint checked as complete (customer
     * and saved addresses, merchant, location, invoice, order delivery destination, tax identity,
     * fulfillment recipient and pickup addresses) always have line1 and city, and US ones always
     * have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax
     * locations hold only what was provided, such as postal_code and country.
     */
    "address"?: Address;
    "customer_address_id"?: string;
};
/** The `address` variant of `SubscriptionServiceLocationInput`. */
export type SubscriptionServiceLocationInputAddress = {
    /**
     * A complete postal address. State and postal_code are required for US addresses and optional
     * for other countries. Send null or omit line2, state, and postal_code when the address has
     * none.
     */
    "address": AddressRequest;
    /** Value enum: "address". */
    "type": "address" | (string & {});
};
/** The `address` variant of `SubscriptionServiceLocationInput`. */
export type SubscriptionServiceLocationInputAddressInput = SubscriptionDeliveryDestinationInputAddressInput;
/** The `customer_address` variant of `SubscriptionServiceLocationInput`. */
export type SubscriptionServiceLocationInputCustomerAddress = {
    /** minLength: 1. */
    "customer_address_id": string;
    /** Value enum: "customer_address". */
    "type": "customer_address" | (string & {});
};
/** The `customer_address` variant of `SubscriptionServiceLocationInput`. */
export type SubscriptionServiceLocationInputCustomerAddressInput = {
    /** minLength: 1. */
    "customer_address_id": string;
    /** Value enum: "customer_address". */
    "type": "customer_address";
};
/**
 * Where a subscription's service is delivered: a saved customer address by ID, or a new address.
 */
export type SubscriptionServiceLocationRequest = ((SubscriptionServiceLocationInputCustomerAddress)
    | (SubscriptionServiceLocationInputAddress)
    | (Record<string, unknown>));
/**
 * Where a subscription's service is delivered: a saved customer address by ID, or a new address.
 */
export type SubscriptionServiceLocationRequestInput = ((SubscriptionServiceLocationInputCustomerAddressInput)
    | (SubscriptionServiceLocationInputAddressInput));
/**
 * Subscription settings: the default billing schedule owner, dunning retry days and end action,
 * and the backorder email.
 */
export type SubscriptionSettings = {
    /** Value enum: "flint", "external". */
    "default_billing_schedule_owner"?: "flint" | "external" | (string & {});
    /** Value enum: "cancel", "pause", "notify_only". */
    "dunning_end_action"?: "cancel" | "pause" | "notify_only" | (string & {});
    /** Format: int32. */
    "dunning_retry_days"?: number;
    /** Value enum: "cancel", "pause", "notify_only". */
    "external_dunning_end_action"?: "cancel" | "pause" | "notify_only" | (string & {});
    "send_backordered_email"?: boolean;
};
/**
 * Subscription settings: the default billing schedule owner, dunning retry days and end action,
 * and the backorder email.
 */
export type SubscriptionSettingsRequestInput = {
    /** Value enum: "flint", "external". */
    "default_billing_schedule_owner"?: "flint" | "external";
    /** Value enum: "cancel", "pause", "notify_only". */
    "dunning_end_action"?: "cancel" | "pause" | "notify_only";
    /** Format: int32. */
    "dunning_retry_days"?: number;
    /** Value enum: "cancel", "pause", "notify_only". */
    "external_dunning_end_action"?: "cancel" | "pause" | "notify_only";
    "send_backordered_email"?: boolean;
};
/**
 * The half-open period [period_start_at, period_end_at) includes its start and excludes its end.
 * Amounts and payments_count use currency; customer and subscription counts span currencies.
 */
export type SubscriptionSnapshotMetrics = {
    /**
     * Current mrr_money multiplied by 12, in currency; independent of the requested period. The
     * half-open period [period_start_at, period_end_at) includes its start and excludes its end.
     * Amounts and payments_count use currency; customer and subscription counts span currencies.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "arr_money": MoneyValue;
    /**
     * Monthly recurring revenue from current billing snapshots of active and past_due
     * subscriptions, restricted to currency. Each subscription is normalized and rounded
     * separately; independent of the requested period. The half-open period [period_start_at,
     * period_end_at) includes its start and excludes its end. Amounts and payments_count use
     * currency; customer and subscription counts span currencies. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "mrr_money": MoneyValue;
    /**
     * Current subscription counts by status across currencies; independent of the requested
     * period. The half-open period [period_start_at, period_end_at) includes its start and
     * excludes its end. Amounts and payments_count use currency; customer and subscription counts
     * span currencies. Counts of current subscriptions by status, across currencies.
     */
    "status_counts": SubscriptionStatusCounts;
};
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
