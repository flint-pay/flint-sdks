import type { BundleComponent } from './types-1.js';
import type { CategoryReference } from './types-4.js';
import type { Image, ImageAttachment } from './types-25.js';
import type { MoneyValue, MoneyValueInput } from './types-35.js';
import type {
    OrderLineItemModifier,
    OrderPaymentAttempt,
    OrderLineItemTax,
    OrderLineItemModifierRequest,
    OrderLineItemModifierRequestInput,
    OrderLineItemTaxInput
} from './types-37.js';
import type { SelectedProductOption, Subscription } from './types-53.js';
import type { ResponseMeta } from './types-48.js';
import type { MetadataMap, MerchantWebhookEnvelope } from './types-34.js';
import type { SubscriptionIntervalOption, SubscriptionDeliveryMethodCounts } from './types-54.js';
import type { InputValue } from '../runtime.js';
import type { CreateSubscriptionOfferRequestInput, CreateSubscriptionPlanRequestInput } from './types-11.js';
import type { UpdateSubscriptionOfferRequestInput } from './types-60.js';
import type { PartnerWebhookEnvelope, PaymentErrorSummary } from './types-40.js';
import type { InventoryRoutingSource } from './types-27.js';
import type { SubscriptionRenewalEstimate } from './types-56.js';
import type { Order } from './types-36.js';
/** A billing interval, such as every 2 months, offered by a subscription plan. */
export type SubscriptionIntervalOptionInput = {
    /** Value enum: "daily", "weekly", "monthly", "yearly". */
    "billing_interval": "daily" | "weekly" | "monthly" | "yearly";
    /** Format: int32. minimum: 1. maximum: 365. */
    "billing_interval_count": number;
};
/**
 * Shows that a subscription renewal is waiting for inventory, with the order and invoice involved
 * and when the wait started.
 */
export type SubscriptionInventoryWait = {
    "invoice_id": string;
    "order_id": string;
    /** RFC3339 timestamp. Format: date-time. */
    "started_at": string;
};
/** An item included in a customer's recurring purchase. */
export type SubscriptionLineItem = {
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "base_subtotal_money": MoneyValue;
    /**  [] (Value): {@link BundleComponent}. An item included in a bundle. */
    "bundle_components"?: Array<BundleComponent>;
    "bundle_id"?: string;
    /**
     *  [] (Value): {@link CategoryReference}. A reference to a product category by ID, handle, and
     * name.
     */
    "categories"?: Array<CategoryReference>;
    "description"?: string;
    /** An image with its `url`, `width`, and `height`, and optional `alt` text. */
    "image"?: Image;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "modifier_total_money": MoneyValue;
    /**
     *  [] (Value): {@link OrderLineItemModifier}. A modifier selected on an order line item, with
     * its quantity, price change, total, and display flags.
     */
    "modifiers"?: Array<OrderLineItemModifier>;
    "name": string;
    "product_id"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "quantity": number;
    /**
     *  [] (Value): {@link SelectedProductOption}. An option and value chosen for a product
     * variant, such as size Large.
     */
    "selected_options"?: Array<SelectedProductOption>;
    "sku"?: string;
    /** Value enum: "variant", "bundle". */
    "source_type"?: "variant" | "bundle" | (string & {});
    "subscription_line_item_id"?: string;
    "subscription_offer_id"?: string;
    "subscription_plan_line_item_id"?: string;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "subtotal_money": MoneyValue;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "unit_price_money": MoneyValue;
    "variant_id"?: string;
};
/** A page of `Subscription` objects. */
export type SubscriptionListResponse = {
    /**  [] (Value): {@link Subscription}. A customer's recurring purchase. */
    "data": Array<Subscription>;
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
 * Recurring terms offered on catalog products or variants. Updates affect new signups; existing
 * subscriptions keep their paid signup terms.
 */
export type SubscriptionOffer = {
    /**
     * minItems: 1. maxItems: 12. uniqueItems: true. [] (Value): {@link
     * SubscriptionIntervalOption}. A billing interval, such as every 2 months, offered by a
     * subscription plan.
     */
    "billing_interval_options": Array<SubscriptionIntervalOption>;
    /** RFC3339 timestamp. Format: date-time. */
    "created_at": string;
    /** Caller-owned identifier for this resource in an external system. maxLength: 255. */
    "external_reference_id"?: string;
    /**
     * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for
     * Flint and are not returned. Writes follow the limits on MetadataInput and
     * MetadataPatchInput; maps written before those limits may not satisfy them.
     */
    "metadata": MetadataMap;
    /** minLength: 1. maxLength: 255. */
    "name": string;
    /**
     * Catalog targets for new signups. At least one product or variant is required. maxItems: 100.
     * uniqueItems: true. [] (Value): string.
     */
    "product_ids": Array<string>;
    /**
     * An active promotion with forever recurrence. On PATCH, null removes the discount for new
     * signups; omission keeps it.
     */
    "promotion_id": string | null;
    /** Value enum: "active", "inactive", "archived". */
    "status": "active" | "inactive" | "archived" | (string & {});
    /**
     * Delivery methods offered at signup. An empty array uses the store's checkout defaults.
     * Existing subscriptions keep their selected method. maxItems: 25. uniqueItems: true. []
     * (Value): string.
     */
    "subscription_delivery_method_ids": Array<string>;
    "subscription_offer_id": string;
    /** RFC3339 timestamp. Format: date-time. */
    "updated_at": string;
    /**
     * Catalog targets for new signups. At least one product or variant is required. maxItems: 100.
     * uniqueItems: true. [] (Value): string.
     */
    "variant_ids": Array<string>;
    /** Format: uint64. minimum: 0. */
    "version": number;
};
/** A subscription offer and variant to include in subscription offer terms. */
export type SubscriptionOfferLineItemRequest = {
    /**
     * Whole-number quantity; fractional quantities are not supported. Format: int32. minimum: 1.
     * maximum: 9999. Default: 1.
     */
    "quantity"?: number;
    /** minLength: 1. */
    "subscription_offer_id": string;
    /** minLength: 1. */
    "variant_id": string;
};
/** A subscription offer and variant to include in subscription offer terms. */
export type SubscriptionOfferLineItemRequestInput = SubscriptionOfferLineItemRequest;
/** A page of `SubscriptionOffer` objects. */
export type SubscriptionOfferListResponse = {
    /**
     *  [] (Value): {@link SubscriptionOffer}. Recurring terms offered on catalog products or
     * variants. Updates affect new signups; existing subscriptions keep their paid signup terms.
     */
    "data": Array<SubscriptionOffer>;
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
/** A response containing `SubscriptionOffer` data. */
export type SubscriptionOfferResponse = {
    /**
     * Recurring terms offered on catalog products or variants. Updates affect new signups;
     * existing subscriptions keep their paid signup terms.
     */
    "data": SubscriptionOffer;
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
/** The `subscription_offer` variant of `SubscriptionTermsInput`. */
export type SubscriptionOfferTermsRequest = {
    /** Value enum: "daily", "weekly", "monthly", "yearly". */
    "billing_interval": "daily" | "weekly" | "monthly" | "yearly" | (string & {});
    /** Format: int32. minimum: 1. maximum: 365. */
    "billing_interval_count": number;
    /**
     * minItems: 1. [] (Value): {@link SubscriptionOfferLineItemRequest}. A subscription offer and
     * variant to include in subscription offer terms.
     */
    "line_items": Array<SubscriptionOfferLineItemRequest>;
    /** Value enum: "subscription_offer". */
    "type": "subscription_offer" | (string & {});
};
/** The `subscription_offer` variant of `SubscriptionTermsInput`. */
export type SubscriptionOfferTermsRequestInput = {
    /** Value enum: "daily", "weekly", "monthly", "yearly". */
    "billing_interval": "daily" | "weekly" | "monthly" | "yearly";
    /** Format: int32. minimum: 1. maximum: 365. */
    "billing_interval_count": number;
    /**
     * minItems: 1. [] (Value): {@link SubscriptionOfferLineItemRequestInput}. A subscription offer
     * and variant to include in subscription offer terms.
     */
    "line_items": Array<SubscriptionOfferLineItemRequestInput>;
    /** Value enum: "subscription_offer". */
    "type": "subscription_offer";
};
export type SubscriptionOffersCreateParams = (InputValue<CreateSubscriptionOfferRequestInput>);
export type SubscriptionOffersDeleteParams = {
    /**
     * Resource version last read by the caller. Refuses the deletion if the offer has changed.
     * Format: uint64. minimum: 1.
     */
    "expected_version"?: InputValue<number>;
};
export type SubscriptionOffersGetParams = {};
export type SubscriptionOffersListParams = {
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
    /** Filter by Flint product ID. Example: "prod_01ARZ3NDEKTSV4RRFFQ69G5FAV". */
    "product_id"?: InputValue<string>;
    /** Filter by Flint variant ID. Example: "var_01ARZ3NDEKTSV4RRFFQ69G5FAV". */
    "variant_id"?: InputValue<string>;
    /** Case-insensitive search over name, subscription_offer_id, and external_reference_id. */
    "query"?: InputValue<string>;
    /**
     * Exact-match filter on the caller-owned external reference ID. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: InputValue<string>;
    /** Inclusive lower bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
    /** Inclusive lower bound on updated_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on updated_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_before"?: InputValue<string | globalThis.Date>;
    /**
     * Field to sort by. Defaults to created_at; ties are broken by subscription_offer_id. Default:
     * "created_at". Value enum: "created_at", "updated_at", "name".
     */
    "sort_by"?: InputValue<"created_at" | "updated_at" | "name">;
    /** Sort direction. Defaults to desc. Default: "desc". Value enum: "asc", "desc". */
    "sort_direction"?: InputValue<"asc" | "desc">;
};
export type SubscriptionOffersUpdateParams = (InputValue<UpdateSubscriptionOfferRequestInput>);
export type SubscriptionPastDueEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Subscription;
    };
    "event_type"?: "subscription.past_due";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Subscription;
    };
    "event_type"?: "subscription.past_due";
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
    "event_type": "subscription.past_due";
});
/**
 * The `subscription.past_due` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type SubscriptionPastDueInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link Subscription}. A customer's recurring purchase. */
    "data"?: {
        /** A customer's recurring purchase. */
        "object": Subscription;
    };
    /** Value enum: "subscription.past_due". */
    "event_type"?: "subscription.past_due";
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
 * The `subscription.past_due` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type SubscriptionPastDueMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link Subscription}. A customer's recurring purchase. */
    "data"?: {
        /** A customer's recurring purchase. */
        "object": Subscription;
    };
    /** Value enum: "subscription.past_due". */
    "event_type"?: "subscription.past_due";
});
export type SubscriptionPausedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Subscription;
    };
    "event_type"?: "subscription.paused";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Subscription;
    };
    "event_type"?: "subscription.paused";
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
    "event_type": "subscription.paused";
});
/**
 * The `subscription.paused` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type SubscriptionPausedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link Subscription}. A customer's recurring purchase. */
    "data"?: {
        /** A customer's recurring purchase. */
        "object": Subscription;
    };
    /** Value enum: "subscription.paused". */
    "event_type"?: "subscription.paused";
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
 * The `subscription.paused` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type SubscriptionPausedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link Subscription}. A customer's recurring purchase. */
    "data"?: {
        /** A customer's recurring purchase. */
        "object": Subscription;
    };
    /** Value enum: "subscription.paused". */
    "event_type"?: "subscription.paused";
});
/** An attempt to collect a subscription's overdue payment. */
export type SubscriptionPaymentRetry = {
    /** RFC3339 timestamp. Format: date-time. */
    "completed_at"?: string;
    /** RFC3339 timestamp. Format: date-time. */
    "created_at": string;
    "idempotency_key": string;
    /**
     * A summary of why a payment attempt failed, with a normalized error code, a message, the
     * failure time, and remediation.
     */
    "last_payment_error"?: PaymentErrorSummary;
    "order_id"?: string;
    "order_payment_attempt_id"?: string;
    /** RFC3339 timestamp. Format: date-time. */
    "started_at"?: string;
    /** Value enum: "pending", "processing", "succeeded", "failed". */
    "status": "pending" | "processing" | "succeeded" | "failed" | (string & {});
    "subscription_id": string;
    "subscription_payment_retry_id": string;
    /** RFC3339 timestamp. Format: date-time. */
    "updated_at": string;
};
export type SubscriptionPaymentRetryCreatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": SubscriptionPaymentRetry;
    };
    "event_type"?: "subscription_payment_retry.created";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": SubscriptionPaymentRetry;
    };
    "event_type"?: "subscription_payment_retry.created";
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
    "event_type": "subscription_payment_retry.created";
});
/**
 * The `subscription_payment_retry.created` webhook payload for the `installed_merchants` event
 * source. Fields shared by partner webhook payloads.
 */
export type SubscriptionPaymentRetryCreatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link SubscriptionPaymentRetry}. An attempt to collect a subscription's
     * overdue payment.
     */
    "data"?: {
        /** An attempt to collect a subscription's overdue payment. */
        "object": SubscriptionPaymentRetry;
    };
    /** Value enum: "subscription_payment_retry.created". */
    "event_type"?: "subscription_payment_retry.created";
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
 * The `subscription_payment_retry.created` webhook payload for the `merchant` event source. Fields
 * shared by merchant webhook payloads.
 */
export type SubscriptionPaymentRetryCreatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link SubscriptionPaymentRetry}. An attempt to collect a subscription's
     * overdue payment.
     */
    "data"?: {
        /** An attempt to collect a subscription's overdue payment. */
        "object": SubscriptionPaymentRetry;
    };
    /** Value enum: "subscription_payment_retry.created". */
    "event_type"?: "subscription_payment_retry.created";
});
export type SubscriptionPaymentRetryFailedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": SubscriptionPaymentRetry;
    };
    "event_type"?: "subscription_payment_retry.failed";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": SubscriptionPaymentRetry;
    };
    "event_type"?: "subscription_payment_retry.failed";
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
    "event_type": "subscription_payment_retry.failed";
});
/**
 * The `subscription_payment_retry.failed` webhook payload for the `installed_merchants` event
 * source. Fields shared by partner webhook payloads.
 */
export type SubscriptionPaymentRetryFailedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link SubscriptionPaymentRetry}. An attempt to collect a subscription's
     * overdue payment.
     */
    "data"?: {
        /** An attempt to collect a subscription's overdue payment. */
        "object": SubscriptionPaymentRetry;
    };
    /** Value enum: "subscription_payment_retry.failed". */
    "event_type"?: "subscription_payment_retry.failed";
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
 * The `subscription_payment_retry.failed` webhook payload for the `merchant` event source. Fields
 * shared by merchant webhook payloads.
 */
export type SubscriptionPaymentRetryFailedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link SubscriptionPaymentRetry}. An attempt to collect a subscription's
     * overdue payment.
     */
    "data"?: {
        /** An attempt to collect a subscription's overdue payment. */
        "object": SubscriptionPaymentRetry;
    };
    /** Value enum: "subscription_payment_retry.failed". */
    "event_type"?: "subscription_payment_retry.failed";
});
/** A page of `SubscriptionPaymentRetry` objects. */
export type SubscriptionPaymentRetryListResponse = {
    /**
     *  [] (Value): {@link SubscriptionPaymentRetry}. An attempt to collect a subscription's
     * overdue payment.
     */
    "data": Array<SubscriptionPaymentRetry>;
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
/** A response containing `SubscriptionPaymentRetry` data. */
export type SubscriptionPaymentRetryResponse = {
    /** An attempt to collect a subscription's overdue payment. */
    "data": SubscriptionPaymentRetry;
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
export type SubscriptionPaymentRetrySucceededEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": SubscriptionPaymentRetry;
    };
    "event_type"?: "subscription_payment_retry.succeeded";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": SubscriptionPaymentRetry;
    };
    "event_type"?: "subscription_payment_retry.succeeded";
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
    "event_type": "subscription_payment_retry.succeeded";
});
/**
 * The `subscription_payment_retry.succeeded` webhook payload for the `installed_merchants` event
 * source. Fields shared by partner webhook payloads.
 */
export type SubscriptionPaymentRetrySucceededInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link SubscriptionPaymentRetry}. An attempt to collect a subscription's
     * overdue payment.
     */
    "data"?: {
        /** An attempt to collect a subscription's overdue payment. */
        "object": SubscriptionPaymentRetry;
    };
    /** Value enum: "subscription_payment_retry.succeeded". */
    "event_type"?: "subscription_payment_retry.succeeded";
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
 * The `subscription_payment_retry.succeeded` webhook payload for the `merchant` event source.
 * Fields shared by merchant webhook payloads.
 */
export type SubscriptionPaymentRetrySucceededMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link SubscriptionPaymentRetry}. An attempt to collect a subscription's
     * overdue payment.
     */
    "data"?: {
        /** An attempt to collect a subscription's overdue payment. */
        "object": SubscriptionPaymentRetry;
    };
    /** Value enum: "subscription_payment_retry.succeeded". */
    "event_type"?: "subscription_payment_retry.succeeded";
});
export type SubscriptionPaymentSucceededEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Subscription;
    };
    "event_type"?: "subscription.payment_succeeded";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Subscription;
    };
    "event_type"?: "subscription.payment_succeeded";
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
    "event_type": "subscription.payment_succeeded";
});
/**
 * The `subscription.payment_succeeded` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type SubscriptionPaymentSucceededInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link Subscription}. A customer's recurring purchase. */
    "data"?: {
        /** A customer's recurring purchase. */
        "object": Subscription;
    };
    /** Value enum: "subscription.payment_succeeded". */
    "event_type"?: "subscription.payment_succeeded";
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
 * The `subscription.payment_succeeded` webhook payload for the `merchant` event source. Fields
 * shared by merchant webhook payloads.
 */
export type SubscriptionPaymentSucceededMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link Subscription}. A customer's recurring purchase. */
    "data"?: {
        /** A customer's recurring purchase. */
        "object": Subscription;
    };
    /** Value enum: "subscription.payment_succeeded". */
    "event_type"?: "subscription.payment_succeeded";
});
/** The recurring price and billing terms offered to customers. */
export type SubscriptionPlan = {
    /** Value enum: "daily", "weekly", "monthly", "yearly". */
    "billing_interval": "daily" | "weekly" | "monthly" | "yearly" | (string & {});
    /** Format: int32. */
    "billing_interval_count": number;
    /**
     * maxItems: 12. uniqueItems: true. [] (Value): {@link SubscriptionIntervalOption}. A billing
     * interval, such as every 2 months, offered by a subscription plan.
     */
    "billing_interval_options": Array<SubscriptionIntervalOption>;
    /**
     * A commitment period you agree with the buyer, 1 to 120 months. Flint shows it at checkout
     * and records it on each new subscription (contract_start_at, contract_end_at). Flint does not
     * stop the buyer from canceling earlier. Format: int32. minimum: 1. maximum: 120.
     */
    "contract_term_months"?: number;
    /** RFC3339 timestamp. Format: date-time. */
    "created_at"?: string;
    /** ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD". */
    "currency": string;
    /**
     *  [] (Value): {@link SubscriptionDeliveryMethodCounts}. Subscription counts by status for one
     * delivery method.
     */
    "delivery_method_subscription_counts": Array<SubscriptionDeliveryMethodCounts>;
    "delivery_required": boolean;
    "description"?: string;
    /**
     * A fee you agree the buyer owes for canceling before the contract term ends. Flint shows it
     * at checkout and records it on each new subscription, but never charges it. To collect it,
     * charge the buyer yourself, for example with an order on their saved payment method. Requires
     * contract_term_months. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "early_termination_fee_money"?: MoneyValue;
    /** Caller-owned identifier for this resource in an external system. maxLength: 255. */
    "external_reference_id"?: string;
    /**
     *  [] (Value): {@link ImageAttachment}. An image attached to a resource, with its display
     * properties and attachment metadata.
     */
    "images": Array<ImageAttachment>;
    /**
     * Where tracked demand from this plan is routed. New subscriptions and payment links for the
     * plan copy it. Absent when the plan has no source. Where an order, payment link, or
     * reservation routes inventory from: a fixed Location, an inventory allocation policy, or one
     * policy revision.
     */
    "inventory_routing_source"?: InventoryRoutingSource;
    /**
     *  [] (Value): {@link SubscriptionPlanLineItem}. A line item on a subscription plan, from a
     * variant or bundle, with its quantity, price, and variants a subscriber can swap to.
     */
    "line_items"?: Array<SubscriptionPlanLineItem>;
    "merchant_id"?: string;
    /**
     * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for
     * Flint and are not returned. Writes follow the limits on MetadataInput and
     * MetadataPatchInput; maps written before those limits may not satisfy them.
     */
    "metadata"?: MetadataMap;
    "name": string;
    /** maxItems: 10. uniqueItems: true. [] (Value): integer. minimum: 1. maximum: 100. */
    "quantity_options": Array<number>;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "setup_fee_money"?: MoneyValue;
    /**
     * Active plans accept new signups. Inactive plans refuse new signups with ACTION_NOT_ALLOWED
     * while existing subscriptions keep renewing. Archived plans are read-only and their status is
     * set only by DELETE /v1/subscription-plans/{subscription_plan_id}. Value enum: "active",
     * "inactive", "archived".
     */
    "status": "active" | "inactive" | "archived" | (string & {});
    /**  [] (Value): string. */
    "subscription_delivery_method_ids": Array<string>;
    "subscription_plan_id": string;
    /** Format: int32. */
    "trial_period_days"?: number;
    /** RFC3339 timestamp. Format: date-time. */
    "updated_at"?: string;
    /** Format: uint64. minimum: 0. */
    "version": number;
};
/** Quantity override for a line in the target subscription plan. */
export type SubscriptionPlanChangeLineItemRequest = {
    /**
     * Quantity of this target line. Whole-number quantity; fractional quantities are not
     * supported. minimum: 1. maximum: 9999.
     */
    "quantity": number;
    /**
     * A line in the target subscription plan. minLength: 1. pattern:
     * ^spli_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "subscription_plan_line_item_id": string;
};
/** Quantity override for a line in the target subscription plan. */
export type SubscriptionPlanChangeLineItemRequestInput = SubscriptionPlanChangeLineItemRequest;
/**
 * Estimated pricing for a subscription plan change, including the recurring item subtotal and
 * renewal amounts.
 */
export type SubscriptionPlanChangePreview = {
    /** Value enum: "daily", "weekly", "monthly", "yearly". */
    "billing_interval": "daily" | "weekly" | "monthly" | "yearly" | (string & {});
    /** Format: int32. */
    "billing_interval_count": number;
    /** Value enum: "now", "next_renewal". */
    "billing_starts": "now" | "next_renewal" | (string & {});
    /**
     * Unused paid item time credited when billing_starts is now; null for next_renewal. anyOf[1]
     * (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus an ISO
     * 4217 currency code. anyOf[2] (Value): null.
     */
    "credit_money": ((MoneyValue) | (null));
    /** Value enum: "plan_change". */
    "mode": "plan_change" | (string & {});
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "quantity": number;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "recurring_subtotal_money": MoneyValue;
    /**
     * Estimated pricing and billing time for a subscription's next renewal, including items,
     * discounts, shipping, and tax.
     */
    "renewal": SubscriptionRenewalEstimate;
    "subscription_id": string;
    "subscription_plan_id": string;
};
/**
 * The result of changing a subscription plan, including the subscription and any order and payment
 * attempt created for immediate billing.
 */
export type SubscriptionPlanChangeResult = {
    /**
     * The new period's order when billing_starts is now, including a canceled order when payment
     * fails. Null for next_renewal. anyOf[1] (Value): {@link Order}. A customer's purchase and its
     * payment and fulfillment progress. anyOf[2] (Value): null.
     */
    "order": ((Order) | (null));
    /**
     * The recorded payment attempt when billing_starts is now, including declines. Null for
     * next_renewal. anyOf[1] (Value): {@link OrderPaymentAttempt}. An attempt to pay an order.
     * anyOf[2] (Value): null.
     */
    "order_payment_attempt": ((OrderPaymentAttempt) | (null));
    /** A customer's recurring purchase. */
    "subscription": Subscription;
};
/** A response containing `SubscriptionPlanChangeResult` data. */
export type SubscriptionPlanChangeResultResponse = {
    /**
     * The result of changing a subscription plan, including the subscription and any order and
     * payment attempt created for immediate billing.
     */
    "data": SubscriptionPlanChangeResult;
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
export type SubscriptionPlanChangedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Subscription;
    };
    "event_type"?: "subscription.plan_changed";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Subscription;
    };
    "event_type"?: "subscription.plan_changed";
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
    "event_type": "subscription.plan_changed";
});
/**
 * The `subscription.plan_changed` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type SubscriptionPlanChangedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link Subscription}. A customer's recurring purchase. */
    "data"?: {
        /** A customer's recurring purchase. */
        "object": Subscription;
    };
    /** Value enum: "subscription.plan_changed". */
    "event_type"?: "subscription.plan_changed";
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
 * The `subscription.plan_changed` webhook payload for the `merchant` event source. Fields shared
 * by merchant webhook payloads.
 */
export type SubscriptionPlanChangedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link Subscription}. A customer's recurring purchase. */
    "data"?: {
        /** A customer's recurring purchase. */
        "object": Subscription;
    };
    /** Value enum: "subscription.plan_changed". */
    "event_type"?: "subscription.plan_changed";
});
/**
 * A line item on a subscription plan, from a variant or bundle, with its quantity, price, and
 * variants a subscriber can swap to.
 */
export type SubscriptionPlanLineItem = ({
    /**  [] (Value): {@link BundleComponent}. An item included in a bundle. */
    "bundle_components"?: Array<BundleComponent>;
    "bundle_id"?: string;
    /**
     *  [] (Value): {@link CategoryReference}. A reference to a product category by ID, handle, and
     * name.
     */
    "categories"?: Array<CategoryReference>;
    "description"?: string;
    /** An image with its `url`, `width`, and `height`, and optional `alt` text. */
    "image"?: Image;
    /**
     *  [] (Value): {@link OrderLineItemModifier}. A modifier selected on an order line item, with
     * its quantity, price change, total, and display flags.
     */
    "modifiers"?: Array<OrderLineItemModifier>;
    "name"?: string;
    "product_id"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "quantity": number;
    /**
     *  [] (Value): {@link SelectedProductOption}. An option and value chosen for a product
     * variant, such as size Large.
     */
    "selected_options"?: Array<SelectedProductOption>;
    "sku"?: string;
    "subscription_plan_line_item_id": string;
    /**
     * maxItems: 25. uniqueItems: true. [] (Value): string. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "swap_variant_ids": Array<string>;
    /**
     * Current sellable alternatives in swap_variant_ids order, excluding the line's own variant
     * and variants priced in a different currency. Present on variant lines, including an empty
     * array. maxItems: 25. [] (Value): {@link SubscriptionPlanSwapVariant}. A variant a subscriber
     * can swap to on a plan line, with its name, options, and price.
     */
    "swap_variants"?: Array<SubscriptionPlanSwapVariant>;
    /** A line item's tax category and whether it is taxable. */
    "tax"?: OrderLineItemTax;
    /** Value enum: "variant", "bundle", "custom". */
    "type": "variant" | "bundle" | "custom" | (string & {});
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "unit_price_money"?: MoneyValue;
    "variant_id"?: string;
})
    & ((Exclude<SubscriptionPlanLineItemVariant & object, readonly unknown[]>)
    | (Exclude<SubscriptionPlanLineItemBundle & object, readonly unknown[]>)
    | (Exclude<SubscriptionPlanLineItemCustom & object, readonly unknown[]>)
    | (Record<string, unknown>));
/** The `bundle` variant of `SubscriptionPlanLineItem`. */
export type SubscriptionPlanLineItemBundle = ({
    /**  [] (Value): {@link BundleComponent}. An item included in a bundle. */
    "bundle_components"?: Array<BundleComponent>;
    "bundle_id": string;
    /**
     *  [] (Value): {@link CategoryReference}. A reference to a product category by ID, handle, and
     * name.
     */
    "categories"?: Array<CategoryReference>;
    "description"?: string;
    /** An image with its `url`, `width`, and `height`, and optional `alt` text. */
    "image"?: Image;
    /**
     *  [] (Value): {@link OrderLineItemModifier}. A modifier selected on an order line item, with
     * its quantity, price change, total, and display flags.
     */
    "modifiers"?: Array<OrderLineItemModifier>;
    "name"?: string;
    "product_id"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "quantity": number;
    /**
     *  [] (Value): {@link SelectedProductOption}. An option and value chosen for a product
     * variant, such as size Large.
     */
    "selected_options"?: Array<SelectedProductOption>;
    "sku"?: string;
    "subscription_plan_line_item_id": string;
    /**
     * maxItems: 25. uniqueItems: true. [] (Value): string. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "swap_variant_ids": Array<string>;
    /**
     * Current sellable alternatives in swap_variant_ids order, excluding the line's own variant
     * and variants priced in a different currency. Present on variant lines, including an empty
     * array. maxItems: 25. [] (Value): {@link SubscriptionPlanSwapVariant}. A variant a subscriber
     * can swap to on a plan line, with its name, options, and price.
     */
    "swap_variants"?: Array<SubscriptionPlanSwapVariant>;
    /** A line item's tax category and whether it is taxable. */
    "tax"?: OrderLineItemTax;
    /** Value enum: "bundle". */
    "type": "bundle" | (string & {});
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "unit_price_money"?: MoneyValue;
    "variant_id"?: string;
})
    & (({
    /** Value enum: "bundle". */
    "type": "bundle" | (string & {});
    "bundle_id": string;
}));
/** The `custom` variant of `SubscriptionPlanLineItem`. */
export type SubscriptionPlanLineItemCustom = ({
    /**  [] (Value): {@link BundleComponent}. An item included in a bundle. */
    "bundle_components"?: Array<BundleComponent>;
    "bundle_id"?: string;
    /**
     *  [] (Value): {@link CategoryReference}. A reference to a product category by ID, handle, and
     * name.
     */
    "categories"?: Array<CategoryReference>;
    "description"?: string;
    /** An image with its `url`, `width`, and `height`, and optional `alt` text. */
    "image"?: Image;
    /**
     *  [] (Value): {@link OrderLineItemModifier}. A modifier selected on an order line item, with
     * its quantity, price change, total, and display flags.
     */
    "modifiers"?: Array<OrderLineItemModifier>;
    "name": string;
    "product_id"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "quantity": number;
    /**
     *  [] (Value): {@link SelectedProductOption}. An option and value chosen for a product
     * variant, such as size Large.
     */
    "selected_options"?: Array<SelectedProductOption>;
    "sku"?: string;
    "subscription_plan_line_item_id": string;
    /**
     * maxItems: 25. uniqueItems: true. [] (Value): string. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "swap_variant_ids": Array<string>;
    /**
     * Current sellable alternatives in swap_variant_ids order, excluding the line's own variant
     * and variants priced in a different currency. Present on variant lines, including an empty
     * array. maxItems: 25. [] (Value): {@link SubscriptionPlanSwapVariant}. A variant a subscriber
     * can swap to on a plan line, with its name, options, and price.
     */
    "swap_variants"?: Array<SubscriptionPlanSwapVariant>;
    /** A line item's tax category and whether it is taxable. */
    "tax"?: OrderLineItemTax;
    /** Value enum: "custom". */
    "type": "custom" | (string & {});
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "unit_price_money": MoneyValue;
    "variant_id"?: string;
})
    & (({
    /** Value enum: "custom". */
    "type": "custom" | (string & {});
    "name": string;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "unit_price_money": MoneyValue;
}));
/** The `bundle` variant of `SubscriptionPlanLineItemInput`. */
export type SubscriptionPlanLineItemInputBundle = ({
    /** minLength: 1. */
    "bundle_id": string;
    /** minLength: 1. */
    "description"?: string;
    /**
     *  [] (Value): {@link OrderLineItemModifierRequest}. A modifier selection you supply on a line
     * item: a catalog modifier by ID or a text modifier, with a quantity. [].metadata (Optional):
     * {@link MetadataMap}. Caller-owned key-value data for a new or replaced map. Omit it for no
     * metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to
     * 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't
     * be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: 50.
     * [].modifier_id (Optional): string. ID of the existing modifier. Treated as an opaque
     * resource reference; accepted spellings follow resource ID validation. Its resolved price and
     * the resulting line subtotal must satisfy the order money ceiling. The amount and every
     * computed order amount must not exceed 99999999 minor units ($999,999.99 USD). Flint rejects
     * an input or calculation above this ceiling with INVALID_REQUEST and detail INVALID_VALUE at
     * the responsible input field. Lower payment option limits can apply. minLength: 1.
     * [].order_line_item_modifier_id (Optional): string. Existing selection ID to retain during
     * replacement. minLength: 1. pattern: ^olim_[0-9A-HJKMNP-TV-Z]{26}$. [].quantity (Optional):
     * integer. Whole-number quantity; fractional quantities are not supported. Format: int64.
     * [].text (Optional): {@link TextModifierRequest}. Text a buyer entered for a text modifier
     * group on an order line item. [].type (Required): string. Selects the type branch. Value
     * enum: "catalog", "text". [].oneOf[1] (Value): {@link OrderLineItemModifierInputCatalog}. The
     * `catalog` variant of `OrderLineItemModifierInput`. [].oneOf[2] (Value): {@link
     * OrderLineItemModifierInputText}. The `text` variant of `OrderLineItemModifierInput`.
     */
    "modifiers"?: Array<(Exclude<OrderLineItemModifierRequest & object, readonly unknown[]>)>;
    /** minLength: 1. */
    "name"?: string;
    /**
     * Whole-number quantity; fractional quantities are not supported. Format: int32. Default: 1.
     */
    "quantity"?: number;
    /**
     * maxItems: 25. uniqueItems: true. [] (Value): string. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "swap_variant_ids"?: Array<string>;
    /** A line item's tax category and whether it is taxable. */
    "tax"?: OrderLineItemTax;
    /** Value enum: "bundle". */
    "type": "bundle" | (string & {});
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "unit_price_money"?: MoneyValue;
    /** minLength: 1. */
    "variant_id"?: string;
})
    & (({
    /** Value enum: "bundle". */
    "type": "bundle" | (string & {});
    /** minLength: 1. */
    "bundle_id": string;
}));
/** The `bundle` variant of `SubscriptionPlanLineItemInput`. */
export type SubscriptionPlanLineItemInputBundleInput = ({
    /** minLength: 1. */
    "bundle_id": string;
    /** minLength: 1. */
    "description"?: string;
    /**
     *  [] (Value): {@link OrderLineItemModifierRequestInput}. A modifier selection you supply on a
     * line item: a catalog modifier by ID or a text modifier, with a quantity. [].metadata
     * (Optional): {@link MetadataRequestInput}. Caller-owned key-value data for a new or replaced
     * map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code
     * points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768
     * UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for
     * Flint. maxProperties: 50. [].modifier_id (Optional): string. ID of the existing modifier.
     * Treated as an opaque resource reference; accepted spellings follow resource ID validation.
     * Its resolved price and the resulting line subtotal must satisfy the order money ceiling. The
     * amount and every computed order amount must not exceed 99999999 minor units ($999,999.99
     * USD). Flint rejects an input or calculation above this ceiling with INVALID_REQUEST and
     * detail INVALID_VALUE at the responsible input field. Lower payment option limits can apply.
     * minLength: 1. [].order_line_item_modifier_id (Optional): string. Existing selection ID to
     * retain during replacement. minLength: 1. pattern: ^olim_[0-9A-HJKMNP-TV-Z]{26}$. [].quantity
     * (Optional): integer. Whole-number quantity; fractional quantities are not supported. Format:
     * int64. [].text (Optional): {@link TextModifierRequestInput}. Text a buyer entered for a text
     * modifier group on an order line item. [].type (Required): string. Selects the type branch.
     * Value enum: "catalog", "text". [].oneOf[1] (Value): {@link
     * OrderLineItemModifierInputCatalogInput}. The `catalog` variant of
     * `OrderLineItemModifierInput`. [].oneOf[2] (Value): {@link
     * OrderLineItemModifierInputTextInput}. The `text` variant of `OrderLineItemModifierInput`.
     */
    "modifiers"?: Array<(Exclude<OrderLineItemModifierRequestInput & object, readonly unknown[]>)
        & (({
        "order_line_item_modifier_id"?: never;
    }))>;
    /** minLength: 1. */
    "name"?: string;
    /**
     * Whole-number quantity; fractional quantities are not supported. Format: int32. Default: 1.
     */
    "quantity"?: number;
    /**
     * maxItems: 25. uniqueItems: true. [] (Value): string. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "swap_variant_ids"?: Array<string>;
    /** A line item's tax category and whether it is taxable. */
    "tax"?: OrderLineItemTaxInput;
    /** Value enum: "bundle". */
    "type": "bundle";
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "unit_price_money"?: MoneyValueInput;
    /** minLength: 1. */
    "variant_id"?: string;
})
    & (({
    /** Value enum: "bundle". */
    "type": ("bundle") & ("bundle");
    /** minLength: 1. */
    "bundle_id": string;
})
    & (({
    "variant_id"?: never;
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
})));
/** The `custom` variant of `SubscriptionPlanLineItemInput`. */
export type SubscriptionPlanLineItemInputCustom = ({
    /** minLength: 1. */
    "bundle_id"?: string;
    /** minLength: 1. */
    "description"?: string;
    /**
     *  [] (Value): {@link OrderLineItemModifierRequest}. A modifier selection you supply on a line
     * item: a catalog modifier by ID or a text modifier, with a quantity. [].metadata (Optional):
     * {@link MetadataMap}. Caller-owned key-value data for a new or replaced map. Omit it for no
     * metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to
     * 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't
     * be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: 50.
     * [].modifier_id (Optional): string. ID of the existing modifier. Treated as an opaque
     * resource reference; accepted spellings follow resource ID validation. Its resolved price and
     * the resulting line subtotal must satisfy the order money ceiling. The amount and every
     * computed order amount must not exceed 99999999 minor units ($999,999.99 USD). Flint rejects
     * an input or calculation above this ceiling with INVALID_REQUEST and detail INVALID_VALUE at
     * the responsible input field. Lower payment option limits can apply. minLength: 1.
     * [].order_line_item_modifier_id (Optional): string. Existing selection ID to retain during
     * replacement. minLength: 1. pattern: ^olim_[0-9A-HJKMNP-TV-Z]{26}$. [].quantity (Optional):
     * integer. Whole-number quantity; fractional quantities are not supported. Format: int64.
     * [].text (Optional): {@link TextModifierRequest}. Text a buyer entered for a text modifier
     * group on an order line item. [].type (Required): string. Selects the type branch. Value
     * enum: "catalog", "text". [].oneOf[1] (Value): {@link OrderLineItemModifierInputCatalog}. The
     * `catalog` variant of `OrderLineItemModifierInput`. [].oneOf[2] (Value): {@link
     * OrderLineItemModifierInputText}. The `text` variant of `OrderLineItemModifierInput`.
     */
    "modifiers"?: Array<(Exclude<OrderLineItemModifierRequest & object, readonly unknown[]>)>;
    /** minLength: 1. */
    "name": string;
    /**
     * Whole-number quantity; fractional quantities are not supported. Format: int32. Default: 1.
     */
    "quantity"?: number;
    /**
     * maxItems: 25. uniqueItems: true. [] (Value): string. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "swap_variant_ids"?: Array<string>;
    /** A line item's tax category and whether it is taxable. */
    "tax"?: OrderLineItemTax;
    /** Value enum: "custom". */
    "type": "custom" | (string & {});
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "unit_price_money": MoneyValue;
    /** minLength: 1. */
    "variant_id"?: string;
})
    & (({
    /** Value enum: "custom". */
    "type": "custom" | (string & {});
    /** minLength: 1. */
    "name": string;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "unit_price_money": MoneyValue;
}));
/** The `custom` variant of `SubscriptionPlanLineItemInput`. */
export type SubscriptionPlanLineItemInputCustomInput = ({
    /** minLength: 1. */
    "bundle_id"?: string;
    /** minLength: 1. */
    "description"?: string;
    /**
     *  [] (Value): {@link OrderLineItemModifierRequestInput}. A modifier selection you supply on a
     * line item: a catalog modifier by ID or a text modifier, with a quantity. [].metadata
     * (Optional): {@link MetadataRequestInput}. Caller-owned key-value data for a new or replaced
     * map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code
     * points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768
     * UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for
     * Flint. maxProperties: 50. [].modifier_id (Optional): string. ID of the existing modifier.
     * Treated as an opaque resource reference; accepted spellings follow resource ID validation.
     * Its resolved price and the resulting line subtotal must satisfy the order money ceiling. The
     * amount and every computed order amount must not exceed 99999999 minor units ($999,999.99
     * USD). Flint rejects an input or calculation above this ceiling with INVALID_REQUEST and
     * detail INVALID_VALUE at the responsible input field. Lower payment option limits can apply.
     * minLength: 1. [].order_line_item_modifier_id (Optional): string. Existing selection ID to
     * retain during replacement. minLength: 1. pattern: ^olim_[0-9A-HJKMNP-TV-Z]{26}$. [].quantity
     * (Optional): integer. Whole-number quantity; fractional quantities are not supported. Format:
     * int64. [].text (Optional): {@link TextModifierRequestInput}. Text a buyer entered for a text
     * modifier group on an order line item. [].type (Required): string. Selects the type branch.
     * Value enum: "catalog", "text". [].oneOf[1] (Value): {@link
     * OrderLineItemModifierInputCatalogInput}. The `catalog` variant of
     * `OrderLineItemModifierInput`. [].oneOf[2] (Value): {@link
     * OrderLineItemModifierInputTextInput}. The `text` variant of `OrderLineItemModifierInput`.
     */
    "modifiers"?: Array<(Exclude<OrderLineItemModifierRequestInput & object, readonly unknown[]>)
        & (({
        "order_line_item_modifier_id"?: never;
    }))>;
    /** minLength: 1. */
    "name": string;
    /**
     * Whole-number quantity; fractional quantities are not supported. Format: int32. Default: 1.
     */
    "quantity"?: number;
    /**
     * maxItems: 25. uniqueItems: true. [] (Value): string. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "swap_variant_ids"?: Array<string>;
    /** A line item's tax category and whether it is taxable. */
    "tax"?: OrderLineItemTaxInput;
    /** Value enum: "custom". */
    "type": "custom";
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "unit_price_money": MoneyValueInput;
    /** minLength: 1. */
    "variant_id"?: string;
})
    & (({
    /** Value enum: "custom". */
    "type": ("custom") & ("custom");
    /** minLength: 1. */
    "name": string;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "unit_price_money": MoneyValueInput;
})
    & (({
    "variant_id"?: never;
}) & ({
    "bundle_id"?: never;
})));
/** The `variant` variant of `SubscriptionPlanLineItemInput`. */
export type SubscriptionPlanLineItemInputVariant = ({
    /** minLength: 1. */
    "bundle_id"?: string;
    /** minLength: 1. */
    "description"?: string;
    /**
     *  [] (Value): {@link OrderLineItemModifierRequest}. A modifier selection you supply on a line
     * item: a catalog modifier by ID or a text modifier, with a quantity. [].metadata (Optional):
     * {@link MetadataMap}. Caller-owned key-value data for a new or replaced map. Omit it for no
     * metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to
     * 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't
     * be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: 50.
     * [].modifier_id (Optional): string. ID of the existing modifier. Treated as an opaque
     * resource reference; accepted spellings follow resource ID validation. Its resolved price and
     * the resulting line subtotal must satisfy the order money ceiling. The amount and every
     * computed order amount must not exceed 99999999 minor units ($999,999.99 USD). Flint rejects
     * an input or calculation above this ceiling with INVALID_REQUEST and detail INVALID_VALUE at
     * the responsible input field. Lower payment option limits can apply. minLength: 1.
     * [].order_line_item_modifier_id (Optional): string. Existing selection ID to retain during
     * replacement. minLength: 1. pattern: ^olim_[0-9A-HJKMNP-TV-Z]{26}$. [].quantity (Optional):
     * integer. Whole-number quantity; fractional quantities are not supported. Format: int64.
     * [].text (Optional): {@link TextModifierRequest}. Text a buyer entered for a text modifier
     * group on an order line item. [].type (Required): string. Selects the type branch. Value
     * enum: "catalog", "text". [].oneOf[1] (Value): {@link OrderLineItemModifierInputCatalog}. The
     * `catalog` variant of `OrderLineItemModifierInput`. [].oneOf[2] (Value): {@link
     * OrderLineItemModifierInputText}. The `text` variant of `OrderLineItemModifierInput`.
     */
    "modifiers"?: Array<(Exclude<OrderLineItemModifierRequest & object, readonly unknown[]>)>;
    /** minLength: 1. */
    "name"?: string;
    /**
     * Whole-number quantity; fractional quantities are not supported. Format: int32. Default: 1.
     */
    "quantity"?: number;
    /**
     * maxItems: 25. uniqueItems: true. [] (Value): string. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "swap_variant_ids"?: Array<string>;
    /** A line item's tax category and whether it is taxable. */
    "tax"?: OrderLineItemTax;
    /** Value enum: "variant". */
    "type": "variant" | (string & {});
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "unit_price_money"?: MoneyValue;
    /** minLength: 1. */
    "variant_id": string;
})
    & (({
    /** Value enum: "variant". */
    "type": "variant" | (string & {});
    /** minLength: 1. */
    "variant_id": string;
}));
/** The `variant` variant of `SubscriptionPlanLineItemInput`. */
export type SubscriptionPlanLineItemInputVariantInput = ({
    /** minLength: 1. */
    "bundle_id"?: string;
    /** minLength: 1. */
    "description"?: string;
    /**
     *  [] (Value): {@link OrderLineItemModifierRequestInput}. A modifier selection you supply on a
     * line item: a catalog modifier by ID or a text modifier, with a quantity. [].metadata
     * (Optional): {@link MetadataRequestInput}. Caller-owned key-value data for a new or replaced
     * map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code
     * points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768
     * UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for
     * Flint. maxProperties: 50. [].modifier_id (Optional): string. ID of the existing modifier.
     * Treated as an opaque resource reference; accepted spellings follow resource ID validation.
     * Its resolved price and the resulting line subtotal must satisfy the order money ceiling. The
     * amount and every computed order amount must not exceed 99999999 minor units ($999,999.99
     * USD). Flint rejects an input or calculation above this ceiling with INVALID_REQUEST and
     * detail INVALID_VALUE at the responsible input field. Lower payment option limits can apply.
     * minLength: 1. [].order_line_item_modifier_id (Optional): string. Existing selection ID to
     * retain during replacement. minLength: 1. pattern: ^olim_[0-9A-HJKMNP-TV-Z]{26}$. [].quantity
     * (Optional): integer. Whole-number quantity; fractional quantities are not supported. Format:
     * int64. [].text (Optional): {@link TextModifierRequestInput}. Text a buyer entered for a text
     * modifier group on an order line item. [].type (Required): string. Selects the type branch.
     * Value enum: "catalog", "text". [].oneOf[1] (Value): {@link
     * OrderLineItemModifierInputCatalogInput}. The `catalog` variant of
     * `OrderLineItemModifierInput`. [].oneOf[2] (Value): {@link
     * OrderLineItemModifierInputTextInput}. The `text` variant of `OrderLineItemModifierInput`.
     */
    "modifiers"?: Array<(Exclude<OrderLineItemModifierRequestInput & object, readonly unknown[]>)
        & (({
        "order_line_item_modifier_id"?: never;
    }))>;
    /** minLength: 1. */
    "name"?: string;
    /**
     * Whole-number quantity; fractional quantities are not supported. Format: int32. Default: 1.
     */
    "quantity"?: number;
    /**
     * maxItems: 25. uniqueItems: true. [] (Value): string. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "swap_variant_ids"?: Array<string>;
    /** A line item's tax category and whether it is taxable. */
    "tax"?: OrderLineItemTaxInput;
    /** Value enum: "variant". */
    "type": "variant";
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "unit_price_money"?: MoneyValueInput;
    /** minLength: 1. */
    "variant_id": string;
})
    & (({
    /** Value enum: "variant". */
    "type": ("variant") & ("variant");
    /** minLength: 1. */
    "variant_id": string;
})
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
})));
/**
 * A line item to put on a new subscription plan, from a variant, a bundle, or a custom name and
 * price.
 */
export type SubscriptionPlanLineItemRequest = ({
    /** minLength: 1. */
    "bundle_id"?: string;
    /** minLength: 1. */
    "description"?: string;
    /**
     *  [] (Value): {@link OrderLineItemModifierRequest}. A modifier selection you supply on a line
     * item: a catalog modifier by ID or a text modifier, with a quantity. [].metadata (Optional):
     * {@link MetadataMap}. Caller-owned key-value data for a new or replaced map. Omit it for no
     * metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to
     * 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't
     * be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: 50.
     * [].modifier_id (Optional): string. ID of the existing modifier. Treated as an opaque
     * resource reference; accepted spellings follow resource ID validation. Its resolved price and
     * the resulting line subtotal must satisfy the order money ceiling. The amount and every
     * computed order amount must not exceed 99999999 minor units ($999,999.99 USD). Flint rejects
     * an input or calculation above this ceiling with INVALID_REQUEST and detail INVALID_VALUE at
     * the responsible input field. Lower payment option limits can apply. minLength: 1.
     * [].order_line_item_modifier_id (Optional): string. Existing selection ID to retain during
     * replacement. minLength: 1. pattern: ^olim_[0-9A-HJKMNP-TV-Z]{26}$. [].quantity (Optional):
     * integer. Whole-number quantity; fractional quantities are not supported. Format: int64.
     * [].text (Optional): {@link TextModifierRequest}. Text a buyer entered for a text modifier
     * group on an order line item. [].type (Required): string. Selects the type branch. Value
     * enum: "catalog", "text". [].oneOf[1] (Value): {@link OrderLineItemModifierInputCatalog}. The
     * `catalog` variant of `OrderLineItemModifierInput`. [].oneOf[2] (Value): {@link
     * OrderLineItemModifierInputText}. The `text` variant of `OrderLineItemModifierInput`.
     */
    "modifiers"?: Array<(Exclude<OrderLineItemModifierRequest & object, readonly unknown[]>)>;
    /** minLength: 1. */
    "name"?: string;
    /**
     * Whole-number quantity; fractional quantities are not supported. Format: int32. Default: 1.
     */
    "quantity"?: number;
    /**
     * maxItems: 25. uniqueItems: true. [] (Value): string. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "swap_variant_ids"?: Array<string>;
    /** A line item's tax category and whether it is taxable. */
    "tax"?: OrderLineItemTax;
    /** Value enum: "variant", "bundle", "custom". */
    "type": "variant" | "bundle" | "custom" | (string & {});
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "unit_price_money"?: MoneyValue;
    /** minLength: 1. */
    "variant_id"?: string;
})
    & ((Exclude<SubscriptionPlanLineItemInputVariant & object, readonly unknown[]>)
    | (Exclude<SubscriptionPlanLineItemInputBundle & object, readonly unknown[]>)
    | (Exclude<SubscriptionPlanLineItemInputCustom & object, readonly unknown[]>)
    | (Record<string, unknown>));
/**
 * A line item to put on a new subscription plan, from a variant, a bundle, or a custom name and
 * price.
 */
export type SubscriptionPlanLineItemRequestInput = ({
    /** minLength: 1. */
    "bundle_id"?: string;
    /** minLength: 1. */
    "description"?: string;
    /**
     *  [] (Value): {@link OrderLineItemModifierRequestInput}. A modifier selection you supply on a
     * line item: a catalog modifier by ID or a text modifier, with a quantity. [].metadata
     * (Optional): {@link MetadataRequestInput}. Caller-owned key-value data for a new or replaced
     * map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code
     * points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768
     * UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for
     * Flint. maxProperties: 50. [].modifier_id (Optional): string. ID of the existing modifier.
     * Treated as an opaque resource reference; accepted spellings follow resource ID validation.
     * Its resolved price and the resulting line subtotal must satisfy the order money ceiling. The
     * amount and every computed order amount must not exceed 99999999 minor units ($999,999.99
     * USD). Flint rejects an input or calculation above this ceiling with INVALID_REQUEST and
     * detail INVALID_VALUE at the responsible input field. Lower payment option limits can apply.
     * minLength: 1. [].order_line_item_modifier_id (Optional): string. Existing selection ID to
     * retain during replacement. minLength: 1. pattern: ^olim_[0-9A-HJKMNP-TV-Z]{26}$. [].quantity
     * (Optional): integer. Whole-number quantity; fractional quantities are not supported. Format:
     * int64. [].text (Optional): {@link TextModifierRequestInput}. Text a buyer entered for a text
     * modifier group on an order line item. [].type (Required): string. Selects the type branch.
     * Value enum: "catalog", "text". [].oneOf[1] (Value): {@link
     * OrderLineItemModifierInputCatalogInput}. The `catalog` variant of
     * `OrderLineItemModifierInput`. [].oneOf[2] (Value): {@link
     * OrderLineItemModifierInputTextInput}. The `text` variant of `OrderLineItemModifierInput`.
     */
    "modifiers"?: Array<(Exclude<OrderLineItemModifierRequestInput & object, readonly unknown[]>)
        & (({
        "order_line_item_modifier_id"?: never;
    }))>;
    /** minLength: 1. */
    "name"?: string;
    /**
     * Whole-number quantity; fractional quantities are not supported. Format: int32. Default: 1.
     */
    "quantity"?: number;
    /**
     * maxItems: 25. uniqueItems: true. [] (Value): string. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "swap_variant_ids"?: Array<string>;
    /** A line item's tax category and whether it is taxable. */
    "tax"?: OrderLineItemTaxInput;
    /** Value enum: "variant", "bundle", "custom". */
    "type": "variant" | "bundle" | "custom";
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "unit_price_money"?: MoneyValueInput;
    /** minLength: 1. */
    "variant_id"?: string;
})
    & ((Exclude<SubscriptionPlanLineItemInputVariantInput & object, readonly unknown[]>)
    | (Exclude<SubscriptionPlanLineItemInputBundleInput & object, readonly unknown[]>)
    | (Exclude<SubscriptionPlanLineItemInputCustomInput & object, readonly unknown[]>));
/** The `variant` variant of `SubscriptionPlanLineItem`. */
export type SubscriptionPlanLineItemVariant = ({
    /**  [] (Value): {@link BundleComponent}. An item included in a bundle. */
    "bundle_components"?: Array<BundleComponent>;
    "bundle_id"?: string;
    /**
     *  [] (Value): {@link CategoryReference}. A reference to a product category by ID, handle, and
     * name.
     */
    "categories"?: Array<CategoryReference>;
    "description"?: string;
    /** An image with its `url`, `width`, and `height`, and optional `alt` text. */
    "image"?: Image;
    /**
     *  [] (Value): {@link OrderLineItemModifier}. A modifier selected on an order line item, with
     * its quantity, price change, total, and display flags.
     */
    "modifiers"?: Array<OrderLineItemModifier>;
    "name"?: string;
    "product_id"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "quantity": number;
    /**
     *  [] (Value): {@link SelectedProductOption}. An option and value chosen for a product
     * variant, such as size Large.
     */
    "selected_options"?: Array<SelectedProductOption>;
    "sku"?: string;
    "subscription_plan_line_item_id": string;
    /**
     * maxItems: 25. uniqueItems: true. [] (Value): string. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "swap_variant_ids": Array<string>;
    /**
     * Current sellable alternatives in swap_variant_ids order, excluding the line's own variant
     * and variants priced in a different currency. Present on variant lines, including an empty
     * array. maxItems: 25. [] (Value): {@link SubscriptionPlanSwapVariant}. A variant a subscriber
     * can swap to on a plan line, with its name, options, and price.
     */
    "swap_variants"?: Array<SubscriptionPlanSwapVariant>;
    /** A line item's tax category and whether it is taxable. */
    "tax"?: OrderLineItemTax;
    /** Value enum: "variant". */
    "type": "variant" | (string & {});
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "unit_price_money"?: MoneyValue;
    "variant_id": string;
})
    & (({
    /** Value enum: "variant". */
    "type": "variant" | (string & {});
    "variant_id": string;
}));
/** A page of `SubscriptionPlan` objects. */
export type SubscriptionPlanListResponse = {
    /**
     *  [] (Value): {@link SubscriptionPlan}. The recurring price and billing terms offered to
     * customers.
     */
    "data": Array<SubscriptionPlan>;
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
/** A response containing `SubscriptionPlan` data. */
export type SubscriptionPlanResponse = {
    /** The recurring price and billing terms offered to customers. */
    "data": SubscriptionPlan;
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
/** A variant a subscriber can swap to on a plan line, with its name, options, and price. */
export type SubscriptionPlanSwapVariant = {
    /** An image with its `url`, `width`, and `height`, and optional `alt` text. */
    "image"?: Image;
    "name": string;
    /**
     *  [] (Value): {@link SelectedProductOption}. An option and value chosen for a product
     * variant, such as size Large.
     */
    "selected_options": Array<SelectedProductOption>;
    "sku"?: string;
    /**
     *  anyOf[1] (Value): {@link MoneyValue}. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code. anyOf[2] (Value): null.
     */
    "unit_price_money": ((MoneyValue) | (null));
    /** pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$. */
    "variant_id": string;
};
/** The `subscription_plan` variant of `SubscriptionTermsInput`. */
export type SubscriptionPlanTermsRequest = ({
    /** Value enum: "daily", "weekly", "monthly", "yearly". */
    "billing_interval"?: "daily" | "weekly" | "monthly" | "yearly" | (string & {});
    /** Format: int32. minimum: 1. maximum: 365. */
    "billing_interval_count"?: number;
    /**
     * Whole-number quantity; fractional quantities are not supported. Format: int32. minimum: 1.
     * maximum: 100. Default: 1.
     */
    "quantity"?: number;
    /** minLength: 1. */
    "subscription_plan_id": string;
    /** Value enum: "subscription_plan". */
    "type": "subscription_plan" | (string & {});
});
/** The `subscription_plan` variant of `SubscriptionTermsInput`. */
export type SubscriptionPlanTermsRequestInput = ({
    /** Value enum: "daily", "weekly", "monthly", "yearly". */
    "billing_interval"?: "daily" | "weekly" | "monthly" | "yearly";
    /** Format: int32. minimum: 1. maximum: 365. */
    "billing_interval_count"?: number;
    /**
     * Whole-number quantity; fractional quantities are not supported. Format: int32. minimum: 1.
     * maximum: 100. Default: 1.
     */
    "quantity"?: number;
    /** minLength: 1. */
    "subscription_plan_id": string;
    /** Value enum: "subscription_plan". */
    "type": "subscription_plan";
});
export type SubscriptionPlansCreateParams = (InputValue<CreateSubscriptionPlanRequestInput>);
