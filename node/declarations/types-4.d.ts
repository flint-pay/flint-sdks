import type { CategoryReference, CapturePaymentSplitRequestInput } from './types-5.js';
import type { Image } from './types-27.js';
import type { MoneyValue, MoneyValueInput } from './types-38.js';
import type { OrderLineItemTax } from './types-40.js';
import type { SelectedProductOption } from './types-59.js';
import type { SubscriptionPlanSwapVariant, SubscriptionPlanChangePreview, SubscriptionPreview } from './types-62.js';
import type { ResponseMeta } from './types-54.js';
import type { SubscriptionQuantityChangePreview, SubscriptionRenewalPreview } from './types-63.js';
import type { BuyerOrder, BuyerOrderPaymentAttempt, BuyerExpandedSubscriptionPlanSummary } from './types-2.js';
import type { BuyerSubscription, BuyerSubscriptionLineItem } from './types-3.js';
import type { Address, AcceptFulfillmentRequestInput, ApplyInventoryCountRequestInput } from './types-0.js';
import type { TipPaymentIntentAllocation, TipValueSettlementAllocation } from './types-65.js';
import type { ContextSummary } from './types-7.js';
import type { DeliveryWindowRequest, DeliveryWindowRequestInput } from './types-22.js';
import type { InventoryProvenanceRequest, InventoryProvenanceRequestInput } from './types-29.js';
import type { PayOrderResponse } from './types-44.js';
import type { GetReturnDispositionResponse, GetReturnResolutionResponse } from './types-25.js';
import type { GetReturnResponse } from './types-26.js';
import type { ReadinessAction, ReadinessRequirements } from './types-52.js';
import type { PlatformFeeRequest, PlatformFeeRequestInput } from './types-49.js';
import type { SplitReversalRequest } from './types-60.js';
/** A line item on a subscription plan. */
export type BuyerSubscriptionPlanLineItemBundle = ({
    /**
     * Whether buyers may adjust this line quantity. Defaults to false. At most one line per plan
     * may allow adjustment. Default: false.
     */
    "allow_quantity_adjustment"?: boolean;
    /** Example: "bun_01KEZF7C00TQ6S76Z6CVQF5SVN". */
    "bundle_id": string;
    /**
     *  [] (Value): {@link CategoryReference}. A reference to a product category by ID, handle, and
     * name.
     */
    "categories"?: Array<CategoryReference>;
    "description"?: string;
    /** An image with its URL, size, and alt text. */
    "image"?: Image;
    /**
     * Maximum buyer quantity. Defaults to 9999. Merchants may set any line quantity from 1 to
     * 9999. Whole-number quantity; fractional quantities are not supported. Format: int32.
     * minimum: 1. maximum: 9999. Default: 9999.
     */
    "max_quantity"?: number;
    /**
     * Minimum buyer quantity. Defaults to 1. The bounds must enclose the plan line quantity.
     * Whole-number quantity; fractional quantities are not supported. Format: int32. minimum: 1.
     * maximum: 9999. Default: 1.
     */
    "min_quantity"?: number;
    "name"?: string;
    /** Example: "prod_01KEZF7C00BVSHCNWVH528HB66". */
    "product_id"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "quantity": number;
    /**
     *  [] (Value): {@link SelectedProductOption}. An option and value chosen for a product
     * variant, such as size Large.
     */
    "selected_options"?: Array<SelectedProductOption>;
    "sku"?: string;
    /**
     * Unique identifier for this subscription plan line item, prefixed `spli_`. Example:
     * "spli_01KEZF7C00H9FGC2KBRF82H87N".
     */
    "subscription_plan_line_item_id": string;
    /**
     * maxItems: 25. uniqueItems: true. [] (Value): string. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     * Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
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
    /** Example: "var_01KEZF7C004GSH2KT8CNYVMHGX". */
    "variant_id"?: string;
})
    & (({
    /** Value enum: "bundle". */
    "type": "bundle" | (string & {});
    /** Example: "bun_01KEZF7C00TQ6S76Z6CVQF5SVN". */
    "bundle_id": string;
}));
/** A line item on a subscription plan. */
export type BuyerSubscriptionPlanLineItemCustom = ({
    /**
     * Whether buyers may adjust this line quantity. Defaults to false. At most one line per plan
     * may allow adjustment. Default: false.
     */
    "allow_quantity_adjustment"?: boolean;
    /** Example: "bun_01KEZF7C00TQ6S76Z6CVQF5SVN". */
    "bundle_id"?: string;
    /**
     *  [] (Value): {@link CategoryReference}. A reference to a product category by ID, handle, and
     * name.
     */
    "categories"?: Array<CategoryReference>;
    "description"?: string;
    /** An image with its URL, size, and alt text. */
    "image"?: Image;
    /**
     * Maximum buyer quantity. Defaults to 9999. Merchants may set any line quantity from 1 to
     * 9999. Whole-number quantity; fractional quantities are not supported. Format: int32.
     * minimum: 1. maximum: 9999. Default: 9999.
     */
    "max_quantity"?: number;
    /**
     * Minimum buyer quantity. Defaults to 1. The bounds must enclose the plan line quantity.
     * Whole-number quantity; fractional quantities are not supported. Format: int32. minimum: 1.
     * maximum: 9999. Default: 1.
     */
    "min_quantity"?: number;
    "name": string;
    /** Example: "prod_01KEZF7C00BVSHCNWVH528HB66". */
    "product_id"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "quantity": number;
    /**
     *  [] (Value): {@link SelectedProductOption}. An option and value chosen for a product
     * variant, such as size Large.
     */
    "selected_options"?: Array<SelectedProductOption>;
    "sku"?: string;
    /**
     * Unique identifier for this subscription plan line item, prefixed `spli_`. Example:
     * "spli_01KEZF7C00H9FGC2KBRF82H87N".
     */
    "subscription_plan_line_item_id": string;
    /**
     * maxItems: 25. uniqueItems: true. [] (Value): string. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     * Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
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
    /** Example: "var_01KEZF7C004GSH2KT8CNYVMHGX". */
    "variant_id"?: string;
})
    & (({
    /** Value enum: "custom". */
    "type": "custom" | (string & {});
    "name": string;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "unit_price_money": MoneyValue;
}));
/** A line item on a subscription plan. */
export type BuyerSubscriptionPlanLineItemVariant = ({
    /**
     * Whether buyers may adjust this line quantity. Defaults to false. At most one line per plan
     * may allow adjustment. Default: false.
     */
    "allow_quantity_adjustment"?: boolean;
    /** Example: "bun_01KEZF7C00TQ6S76Z6CVQF5SVN". */
    "bundle_id"?: string;
    /**
     *  [] (Value): {@link CategoryReference}. A reference to a product category by ID, handle, and
     * name.
     */
    "categories"?: Array<CategoryReference>;
    "description"?: string;
    /** An image with its URL, size, and alt text. */
    "image"?: Image;
    /**
     * Maximum buyer quantity. Defaults to 9999. Merchants may set any line quantity from 1 to
     * 9999. Whole-number quantity; fractional quantities are not supported. Format: int32.
     * minimum: 1. maximum: 9999. Default: 9999.
     */
    "max_quantity"?: number;
    /**
     * Minimum buyer quantity. Defaults to 1. The bounds must enclose the plan line quantity.
     * Whole-number quantity; fractional quantities are not supported. Format: int32. minimum: 1.
     * maximum: 9999. Default: 1.
     */
    "min_quantity"?: number;
    "name"?: string;
    /** Example: "prod_01KEZF7C00BVSHCNWVH528HB66". */
    "product_id"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "quantity": number;
    /**
     *  [] (Value): {@link SelectedProductOption}. An option and value chosen for a product
     * variant, such as size Large.
     */
    "selected_options"?: Array<SelectedProductOption>;
    "sku"?: string;
    /**
     * Unique identifier for this subscription plan line item, prefixed `spli_`. Example:
     * "spli_01KEZF7C00H9FGC2KBRF82H87N".
     */
    "subscription_plan_line_item_id": string;
    /**
     * maxItems: 25. uniqueItems: true. [] (Value): string. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     * Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
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
    /** Example: "var_01KEZF7C004GSH2KT8CNYVMHGX". */
    "variant_id": string;
})
    & (({
    /** Value enum: "variant". */
    "type": "variant" | (string & {});
    /** Example: "var_01KEZF7C004GSH2KT8CNYVMHGX". */
    "variant_id": string;
}));
/** The response for: Preview subscription. */
export type BuyerSubscriptionPreviewResponse = {
    /**
     * Resource, collection, or operation result returned by this request. oneOf[1] (Value): {@link
     * SubscriptionPreview}. Available subscription delivery methods shown to the buyer. oneOf[2]
     * (Value): {@link SubscriptionRenewalPreview}. A preview of a subscription's next renewal and
     * its estimated pricing. oneOf[3] (Value): {@link SubscriptionPlanChangePreview}. Estimated
     * pricing for a subscription plan change, including the recurring item subtotal and renewal
     * amounts. oneOf[4] (Value): {@link SubscriptionQuantityChangePreview}. Estimated pricing for
     * a quantity change that keeps the billing period and anchor.
     */
    "data": ((SubscriptionPreview)
        | (SubscriptionRenewalPreview)
        | (SubscriptionPlanChangePreview)
        | (SubscriptionQuantityChangePreview)
        | (Record<string, unknown>));
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
 * The subscription and any immediate prorated billing outcome. A decline leaves the subscription
 * unchanged.
 */
export type BuyerSubscriptionQuantityChangeResult = {
    /**
     * The resolved billing timing for this quantity change. Value enum: "prorated_now",
     * "next_renewal", "period_end".
     */
    "billing_starts": "prorated_now" | "next_renewal" | "period_end" | (string & {});
    /**
     * The proration order, including a closed unpaid order on decline. Null when billing_starts is
     * next_renewal or period_end, or the net charge is zero. anyOf[1] (Value): {@link BuyerOrder}.
     * A customer's purchase and its payment and fulfillment progress. anyOf[2] (Value): null.
     */
    "order": ((BuyerOrder) | (null));
    /**
     * The payment attempt, including declines. Null when billing_starts is next_renewal or
     * period_end, or the net charge is zero. anyOf[1] (Value): {@link BuyerOrderPaymentAttempt}.
     * An attempt to pay an order. anyOf[2] (Value): null.
     */
    "order_payment_attempt": ((BuyerOrderPaymentAttempt) | (null));
    /**
     * The updated subscription, or the unchanged subscription when payment fails. A customer's
     * recurring purchase.
     */
    "subscription": BuyerSubscription;
};
/** A response containing `BuyerSubscriptionQuantityChangeResult` data. */
export type BuyerSubscriptionQuantityChangeResultResponse = {
    /**
     * Resource, collection, or operation result returned by this request. The subscription and any
     * immediate prorated billing outcome. A decline leaves the subscription unchanged.
     */
    "data": BuyerSubscriptionQuantityChangeResult;
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
 * The subscription is the primary resource and expected_version target; the result uses the same
 * subscription and order fields as the corresponding /v1/me reads.
 */
export type BuyerSubscriptionRenewalResult = {
    /** A customer's purchase and its payment and fulfillment progress. */
    "order": BuyerOrder;
    /**
     *  anyOf[1] (Value): {@link BuyerOrderPaymentAttempt}. An attempt to pay an order. anyOf[2]
     * (Value): null.
     */
    "order_payment_attempt": ((BuyerOrderPaymentAttempt) | (null));
    /** A customer's recurring purchase. */
    "subscription": BuyerSubscription;
};
/** A response containing `BuyerSubscriptionRenewalResult` data. */
export type BuyerSubscriptionRenewalResultResponse = {
    /**
     * Resource, collection, or operation result returned by this request. The subscription is the
     * primary resource and expected_version target; the result uses the same subscription and
     * order fields as the corresponding /v1/me reads.
     */
    "data": BuyerSubscriptionRenewalResult;
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
/** A response containing `BuyerSubscription` data. */
export type BuyerSubscriptionResponse = {
    /**
     * Resource, collection, or operation result returned by this request. A customer's recurring
     * purchase.
     */
    "data": BuyerSubscription;
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
/** Frozen target terms that apply at the next charged renewal. */
export type BuyerSubscriptionScheduledPlanChange = {
    /** The frozen target billing interval. Value enum: "daily", "weekly", "monthly", "yearly". */
    "billing_interval": "daily" | "weekly" | "monthly" | "yearly" | (string & {});
    /** Number of target billing_interval units between charges. Format: int32. */
    "billing_interval_count": number;
    /**
     * Expected boundary from the current billing schedule. Null when the subscription is paused
     * without a scheduled resume or is waiting for an external billing date. Format: date-time.
     * Example: "2026-08-02T16:00:00Z".
     */
    "effective_at": string | null;
    /**
     * Frozen target lines, including buyer quantity permissions and bounds. [] (Value): {@link
     * BuyerSubscriptionLineItem}. An item included in a customer's recurring purchase.
     */
    "line_items": Array<BuyerSubscriptionLineItem>;
    /**
     * The frozen target subscription quantity. Whole-number quantity; fractional quantities are
     * not supported. Format: int32.
     */
    "quantity": number;
    /**
     * Frozen item subtotal per target billing period, before discounts, shipping, and tax.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "recurring_subtotal_money": MoneyValue;
    /** Who scheduled the plan change. Value enum: "buyer", "merchant". */
    "requested_by": "buyer" | "merchant" | (string & {});
    /** When the plan change was scheduled. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "scheduled_at": string;
    /**
     * The scheduled target plan summary, including archived plans. A subscription plan expanded on
     * a buyer's order: billing interval, setup fee, trial length, status, and line items.
     */
    "subscription_plan": BuyerExpandedSubscriptionPlanSummary;
    /**
     * The scheduled target subscription plan. pattern: ^plan_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "plan_01KEZF7C004CY5ZR33XST2AASV".
     */
    "subscription_plan_id": string;
};
/** The customer address reference or address used as the buyer's subscription service location. */
export type BuyerSubscriptionServiceLocation = {
    /**
     * A postal address. Every address has country. Addresses Flint checked as complete (customer
     * and saved addresses, merchant, location, invoice, order delivery destination, tax identity,
     * fulfillment recipient and pickup addresses) always have line1 and city, and US ones always
     * have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax
     * locations hold only what was provided, such as postal_code and country.
     */
    "address"?: Address;
    /**
     * Customer that owns customer_address_id. Null when customer_address_id is absent or withheld
     * from the buyer projection. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     */
    "customer_id": string | null;
};
/** One of the buyer's event tickets, with the admission code its QR code holds. */
export type BuyerTicket = {
    /**
     * The 16-character Crockford base32 admission code to show as a QR code and print as
     * XXXX-XXXX-XXXX-XXXX. A bearer secret. Absent when the ticket is voided, on orders whose
     * buyer_email differs from the email Flint verified, and for sessions Flint didn't verify:
     * merchant access links, customer sessions created with an API key, links emailed to another
     * address, and checkout links a merchant reads or requests after payment. minLength: 16.
     * maxLength: 16.
     */
    "admission_code"?: string;
    /** Attendee name. Null when none was given. minLength: 1. maxLength: 200. */
    "attendee_name": string | null;
    /**
     * When the ticket was admitted. Null when the ticket is not checked in. Format: date-time.
     * Example: "2026-08-02T16:00:00Z".
     */
    "checked_in_at": string | null;
    /** When the ticket was issued. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /**
     * The event details the order captured at checkout. Absent when the order didn't record them.
     * Event details captured when the ticket's order was placed.
     */
    "event"?: BuyerTicketEvent;
    /** The buyer's order that purchased this ticket. Example: "ord_01KEZF7C0054GQKJ142A8X367A". */
    "order_id": string;
    /** The admission lifecycle. Value enum: "issued", "checked_in", "voided". */
    "status": "issued" | "checked_in" | "voided" | (string & {});
    /** Unique ticket identity with the tkt_ prefix. Example: "tkt_01KEZF7C00AWVKS6GAX8RMEBZ8". */
    "ticket_id": string;
    /** The event prefix and sequence, such as GAL001. It doesn't admit anyone on its own. */
    "ticket_number": string;
};
/** Event details captured when the ticket's order was placed. */
export type BuyerTicketEvent = {
    /** Where the event takes place. */
    "location"?: string;
    /** Event name when the order was placed. */
    "name": string;
    /**
     * When the event starts. RFC 3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "starts_at"?: string;
    /** IANA time zone Flint shows the event in. */
    "timezone"?: string;
};
/** A page of `BuyerTicket` objects. */
export type BuyerTicketListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * BuyerTicket}. One of the buyer's event tickets, with the admission code its QR code holds.
     */
    "data": Array<BuyerTicket>;
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
 * A tip on a buyer's order, with its requested, effective, settled, and refunded amounts and how
 * it was allocated to payments.
 */
export type BuyerTip = {
    /**
     * Fixed tip amount, when the tip is set as an amount. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "amount_money"?: MoneyValue;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /** Optional description that stays on the tip for your reporting. */
    "description"?: string;
    /**
     * The tip amount the order collects. For a percent tip, the resolved amount. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "effective_amount_money": MoneyValue;
    /** Optional name that stays on the tip for your reporting. */
    "name"?: string;
    /** Example: "tip_01KEZF7C00JRPYP11RTMB97MYH". */
    "order_tip_id": string;
    /**
     *  [] (Value): {@link TipPaymentIntentAllocation}. The part of a tip paid through one payment
     * intent.
     */
    "payment_intent_allocations": Array<TipPaymentIntentAllocation>;
    /**
     * Tip percentage in percentage points, such as `18` for 18%, when the tip is set as a percent.
     * multipleOf: 0.0001.
     */
    "percent"?: number;
    /**
     * How much of the tip has been refunded. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "refunded_money": MoneyValue;
    /**
     * How much of the tip has been paid. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "settled_amount_money": MoneyValue;
    /**
     * Whether the tip is awaiting payment, paid in full, refunded in part or in full, or canceled
     * before collection. Value enum: "requested", "paid", "partially_refunded", "refunded",
     * "canceled".
     */
    "status": "requested" | "paid" | "partially_refunded" | "refunded" | "canceled" | (string & {});
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "updated_at": string;
    /**
     *  [] (Value): {@link TipValueSettlementAllocation}. The part of a tip paid through one value
     * settlement.
     */
    "value_settlement_allocations": Array<TipValueSettlementAllocation>;
};
/** The request body for: List authorized CLI contexts. */
export type CLIContextsRequest = ({
    /** Example: "flint-cli". Value enum: "flint-cli". */
    "client_id": "flint-cli" | (string & {});
    "refresh_token": string;
});
/** The request body for: List authorized CLI contexts. */
export type CLIContextsRequestInput = ({
    /** Example: "flint-cli". Value enum: "flint-cli". */
    "client_id": "flint-cli";
    "refresh_token": string;
})
    & ({
    "client_secret"?: never;
});
/** The response for: List authorized CLI contexts. */
export type CLIContextsResponse = {
    /**
     * maxItems: 100. [] (Value): {@link ContextSummary}. A context the CLI is authorized to use: a
     * sandbox or live account, with its ID, merchant ID, and name.
     */
    "contexts": Array<ContextSummary>;
    /** Example: "session_aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa". */
    "oauth_session_id": string;
};
/** The request body for: Start CLI browser login. */
export type CLIDeviceRequest = ({
    /** Example: "flint-cli". Value enum: "flint-cli". */
    "client_id": "flint-cli" | (string & {});
    /**
     * Optional compatibility field for the computer name sent by released Flint CLI versions.
     * Accepted and ignored.
     */
    "device_name"?: string;
    /** ID of the merchant this resource belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
    "merchant_id"?: string;
    /** Environment used for this resource or request. Value enum: "test", "live". */
    "mode"?: "test" | "live" | (string & {});
    /**
     * Optional compatibility field for the operating system sent by released Flint CLI versions.
     * Accepted and ignored.
     */
    "platform"?: string;
    /** ID of the sandbox this resource belongs to. Example: "test_01KEZF7C00JC77HTMTB2XHNPE0". */
    "sandbox_id"?: string;
    /**
     * Required space-separated public API scope names. Only requested scopes approved in the
     * browser are granted. Request the scopes the CLI needs from x-flint-cli-allowed-scopes.
     * Unsupported scopes return invalid_scope. minLength: 1.
     */
    "scope": string;
    /**
     * Creates a session with selectable merchant and environment contexts. Defaults to contexts
     * when omitted. Default: "contexts". Value enum: "contexts".
     */
    "session_mode"?: "contexts" | (string & {});
});
/** The request body for: Start CLI browser login. */
export type CLIDeviceRequestInput = ({
    /** Example: "flint-cli". Value enum: "flint-cli". */
    "client_id": "flint-cli";
    /**
     * Optional compatibility field for the computer name sent by released Flint CLI versions.
     * Accepted and ignored.
     */
    "device_name"?: string;
    /** ID of the merchant this resource belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
    "merchant_id"?: string;
    /** Environment used for this resource or request. Value enum: "test", "live". */
    "mode"?: "test" | "live";
    /**
     * Optional compatibility field for the operating system sent by released Flint CLI versions.
     * Accepted and ignored.
     */
    "platform"?: string;
    /** ID of the sandbox this resource belongs to. Example: "test_01KEZF7C00JC77HTMTB2XHNPE0". */
    "sandbox_id"?: string;
    /**
     * Required space-separated public API scope names. Only requested scopes approved in the
     * browser are granted. Request the scopes the CLI needs from x-flint-cli-allowed-scopes.
     * Unsupported scopes return invalid_scope. minLength: 1.
     */
    "scope": string;
    /**
     * Creates a session with selectable merchant and environment contexts. Defaults to contexts
     * when omitted. Default: "contexts". Value enum: "contexts".
     */
    "session_mode"?: "contexts";
})
    & ({
    "client_secret"?: never;
});
/** The response for: Review CLI session consent; Start CLI browser login. */
export type CLIDeviceResponse = {
    /** minLength: 1. maxLength: 4096. */
    "device_code": string;
    /** minimum: 1. maximum: 1800. */
    "expires_in": number;
    /** minimum: 1. maximum: 60. */
    "interval": number;
    /** minLength: 4. maxLength: 32. pattern: ^[!-~]+$. */
    "user_code": string;
    "verification_uri": string;
    "verification_uri_complete": string;
};
/** Non-secret metadata for the calling credential, selected by auth_type. */
export type CLILoginAuthContext = ({
    /**
     * Access level; scoped tokens always have restricted access. Value enum: "full", "read_only",
     * "restricted".
     */
    "access": "full" | "read_only" | "restricted" | (string & {});
    /** Credential type that selects this object's fields. Value enum: "cli_login". */
    "auth_type": "cli_login" | (string & {});
    /**
     * ID of the selected CLI context. Example:
     * "ctx_bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb".
     */
    "context_id": string;
    /** Merchant the credential acts for. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
    "merchant_id": string;
    /** Whether the credential acts in test or live mode. Value enum: "test", "live". */
    "mode": "test" | "live" | (string & {});
    /** Name of the key, CLI context, or workload identity. */
    "name": string;
    /** ID of the CLI login grant. Example: "clg_01KEZF7C00F8Q8XM1TZ6Y1GB31". */
    "oauth_grant_id": string;
    /**
     * ID of the CLI session. Example:
     * "session_aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa".
     */
    "oauth_session_id": string;
    /**
     * Sandbox the credential is bound to, present only in test mode. Example:
     * "test_01KEZF7C00JC77HTMTB2XHNPE0".
     */
    "sandbox_id"?: string;
    /**
     * Current granted API scopes, resolved at request time for full and read_only keys. []
     * (Value): string.
     */
    "scopes": Array<string>;
    /** User the session acts for. Example: "usr_01KEZF7C00YC8757ZYP9727JM0". */
    "user_id": string;
})
    & ({
    /** Value enum: "restricted". */
    "access"?: unknown;
});
/** The request body for: Review CLI session consent. */
export type CLIReauthorizeRequest = ({
    /** Example: "flint-cli". Value enum: "flint-cli". */
    "client_id": "flint-cli" | (string & {});
    /**
     * minLength: 1. Example:
     * "ctx_bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb".
     */
    "context_id"?: string;
    /**
     * Optional compatibility field for the computer name sent by released Flint CLI versions.
     * Accepted and ignored.
     */
    "device_name"?: string;
    /** ID of the merchant this resource belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
    "merchant_id"?: string;
    /** Environment used for this resource or request. Value enum: "test", "live". */
    "mode"?: "test" | "live" | (string & {});
    /**
     * Optional compatibility field for the operating system sent by released Flint CLI versions.
     * Accepted and ignored.
     */
    "platform"?: string;
    "refresh_token": string;
    /** ID of the sandbox this resource belongs to. Example: "test_01KEZF7C00JC77HTMTB2XHNPE0". */
    "sandbox_id"?: string;
    /**
     * Required space-separated public API scope names. Only requested scopes approved in the
     * browser are granted. Request the scopes the CLI needs from x-flint-cli-allowed-scopes.
     * Unsupported scopes return invalid_scope. minLength: 1.
     */
    "scope": string;
    /** Value enum: "additive". */
    "scope_mode"?: "additive" | (string & {});
    /** Value enum: "contexts". */
    "session_mode": "contexts" | (string & {});
});
/** The request body for: Review CLI session consent. */
export type CLIReauthorizeRequestInput = ({
    /** Example: "flint-cli". Value enum: "flint-cli". */
    "client_id": "flint-cli";
    /**
     * minLength: 1. Example:
     * "ctx_bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb".
     */
    "context_id"?: string;
    /**
     * Optional compatibility field for the computer name sent by released Flint CLI versions.
     * Accepted and ignored.
     */
    "device_name"?: string;
    /** ID of the merchant this resource belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
    "merchant_id"?: string;
    /** Environment used for this resource or request. Value enum: "test", "live". */
    "mode"?: "test" | "live";
    /**
     * Optional compatibility field for the operating system sent by released Flint CLI versions.
     * Accepted and ignored.
     */
    "platform"?: string;
    "refresh_token": string;
    /** ID of the sandbox this resource belongs to. Example: "test_01KEZF7C00JC77HTMTB2XHNPE0". */
    "sandbox_id"?: string;
    /**
     * Required space-separated public API scope names. Only requested scopes approved in the
     * browser are granted. Request the scopes the CLI needs from x-flint-cli-allowed-scopes.
     * Unsupported scopes return invalid_scope. minLength: 1.
     */
    "scope": string;
    /** Value enum: "additive". */
    "scope_mode"?: "additive";
    /** Value enum: "contexts". */
    "session_mode": "contexts";
})
    & ({
    "client_secret"?: never;
});
/**
 * The rate result you supply for one delivery method and choice group when creating a delivery
 * quote with caller-supplied pricing.
 */
export type CallerSuppliedDeliveryMethodResultRequest = {
    /**
     * Choice group the outcome is for. minLength: 1. Example: "dcgrp_01KEZF7C00KYKJQ897HWM86AT8".
     */
    "delivery_choice_group_id": string;
    /**
     * Revision of the delivery method the outcome is for. minLength: 1. Example:
     * "dmetr_01KEZF7C001ZF9D92DY1G51GV9".
     */
    "delivery_method_revision_id": string;
    /**
     * Rate your integration supplies for this method and choice group. Your outcome for a
     * caller-priced delivery method, selected by `type`: available with a price and windows,
     * unavailable with a reason, or cannot calculate.
     */
    "outcome": CallerSuppliedDeliveryOutcomeRequest;
};
/**
 * The rate result you supply for one delivery method and choice group when creating a delivery
 * quote with caller-supplied pricing.
 */
export type CallerSuppliedDeliveryMethodResultRequestInput = {
    /**
     * Choice group the outcome is for. minLength: 1. Example: "dcgrp_01KEZF7C00KYKJQ897HWM86AT8".
     */
    "delivery_choice_group_id": string;
    /**
     * Revision of the delivery method the outcome is for. minLength: 1. Example:
     * "dmetr_01KEZF7C001ZF9D92DY1G51GV9".
     */
    "delivery_method_revision_id": string;
    /**
     * Rate your integration supplies for this method and choice group. Your outcome for a
     * caller-priced delivery method, selected by `type`: available with a price and windows,
     * unavailable with a reason, or cannot calculate.
     */
    "outcome": CallerSuppliedDeliveryOutcomeRequestInput;
};
/**
 * Your outcome for a caller-priced delivery method, selected by `type`: available with a price and
 * windows, unavailable with a reason, or cannot calculate.
 */
export type CallerSuppliedDeliveryOutcomeRequest = ({
    /**
     * Price of the delivery. Send it with type `available`. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "amount_money"?: MoneyValue;
    /**
     * Last moment this rate can be offered in the quote. It must be later than the evaluation time
     * plus the method's minimum_option_lifetime_seconds and no later than the quote's expires_at.
     * Send it with type available. Format: date-time. minLength: 1. Example:
     * "2026-08-02T16:00:00Z".
     */
    "expires_at"?: string;
    /**
     * Why Flint could not calculate the method and the action that can make calculation succeed. -
     * `dependency_failure`: Retry after the dependent service recovers. - `timeout`: Retry after
     * the timed-out dependency recovers. - `malformed_response`: Fix the callback response so it
     * matches the documented response schema, then retry. - `pricing_failure`: Fix the method
     * pricing configuration or matching rate, then retry. - `schedule_failure`: Fix the method
     * schedule, timezone, or requested window, then retry. - `geography_failure`: Fix the
     * destination, origin, or geographic configuration, then retry. - `routing_failure`: Fix
     * inventory routing or origin assignment, then retry. - `address_verification_failed`: Correct
     * the address fields rejected by verification, then retry. - `address_could_not_be_verified`:
     * Confirm or correct the address, or retry when address verification is available. Value enum:
     * "dependency_failure", "timeout", "malformed_response", "pricing_failure",
     * "schedule_failure", "geography_failure", "routing_failure", "address_verification_failed",
     * "address_could_not_be_verified".
     */
    "failure_category"?: "dependency_failure"
        | "timeout"
        | "malformed_response"
        | "pricing_failure"
        | "schedule_failure"
        | "geography_failure"
        | "routing_failure"
        | "address_verification_failed"
        | "address_could_not_be_verified"
        | (string & {});
    /**
     * Your private reference for this rate, up to 500 characters, with no leading or trailing
     * spaces. Flint stores it with the buyer's selection and never shows it to buyers. minLength:
     * 1. maxLength: 500.
     */
    "merchant_reference"?: string;
    /**
     * Delivery windows the buyer can choose from. Send either `offered_windows` or both
     * `window_start_at` and `window_end_at` with type `available`. [] (Value): {@link
     * DeliveryWindowRequest}. A delivery window you supply in a caller-supplied delivery outcome,
     * with its time range, price, and the last moment a buyer can choose it.
     */
    "offered_windows"?: Array<DeliveryWindowRequest>;
    /** Whether trying again later can succeed. Send it with type `cannot_calculate`. */
    "retryable"?: boolean;
    /**
     * Last moment a delivery selection can lock this rate for payment. It must be at or after
     * expires_at. Send it with type available. Format: date-time. minLength: 1. Example:
     * "2026-08-02T16:00:00Z".
     */
    "selection_guarantee_expires_at"?: string;
    /** Buyer-visible service level of the rate. Send it with type `available`. minLength: 1. */
    "service_level"?: string;
    /**
     * Whether the method has a rate, is unavailable, or could not be priced. Value enum:
     * "available", "unavailable", "cannot_calculate".
     */
    "type": "available" | "unavailable" | "cannot_calculate" | (string & {});
    /**
     * Why the method is unavailable and the action that can make it eligible. -
     * `destination_not_served`: Use a destination covered by this method or choose another method.
     * - `pickup_unavailable`: Choose an available pickup method or location. -
     * `no_window_available`: Choose another offered window or a method with availability for the
     * requested time. - `eligibility_no_match`: Inspect eligibility_mismatches, then change the
     * relevant buyer facts or method eligibility rule. - `pricing_unavailable`: Add or activate a
     * matching rate, or provide the required caller-supplied price. - `inventory_unavailable`: The
     * origin or pickup location cannot supply the requested inventory. Reduce the quantity,
     * replenish inventory, or choose another origin or method. Value enum:
     * "destination_not_served", "pickup_unavailable", "no_window_available",
     * "eligibility_no_match", "pricing_unavailable", "inventory_unavailable".
     */
    "unavailable_reason"?: "destination_not_served"
        | "pickup_unavailable"
        | "no_window_available"
        | "eligibility_no_match"
        | "pricing_unavailable"
        | "inventory_unavailable"
        | (string & {});
    /**
     * End of the delivery window for this rate. When present, send it with window_start_at,
     * including when offered_windows is supplied. Send it only with type available. Format:
     * date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "window_end_at"?: string;
    /**
     * Start of the delivery window for this rate. When present, send it with window_end_at,
     * including when offered_windows is supplied. Send it only with type available. Format:
     * date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "window_start_at"?: string;
})
    & ((Exclude<CallerSuppliedDeliveryOutcomeRequestAvailable & object, readonly unknown[]>)
    | (Exclude<CallerSuppliedDeliveryOutcomeRequestUnavailable & object, readonly unknown[]>)
    | (Exclude<CallerSuppliedDeliveryOutcomeRequestCannotCalculate & object, readonly unknown[]>)
    | (Record<string, unknown>));
/** The `available` variant of `CallerSuppliedDeliveryOutcomeRequest`. */
export type CallerSuppliedDeliveryOutcomeRequestAvailable = ({
    /**
     * Price of the delivery. Send it with type `available`. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
    /**
     * Last moment this rate can be offered in the quote. It must be later than the evaluation time
     * plus the method's minimum_option_lifetime_seconds and no later than the quote's expires_at.
     * Send it with type available. Format: date-time. minLength: 1. Example:
     * "2026-08-02T16:00:00Z".
     */
    "expires_at": string;
    /**
     * Your private reference for this rate, up to 500 characters, with no leading or trailing
     * spaces. Flint stores it with the buyer's selection and never shows it to buyers. minLength:
     * 1. maxLength: 500.
     */
    "merchant_reference"?: string;
    /**
     * Delivery windows the buyer can choose from. Send either `offered_windows` or both
     * `window_start_at` and `window_end_at` with type `available`. [] (Value): {@link
     * DeliveryWindowRequest}. A delivery window you supply in a caller-supplied delivery outcome,
     * with its time range, price, and the last moment a buyer can choose it.
     */
    "offered_windows"?: Array<DeliveryWindowRequest>;
    /**
     * Last moment a delivery selection can lock this rate for payment. It must be at or after
     * expires_at. Send it with type available. Format: date-time. minLength: 1. Example:
     * "2026-08-02T16:00:00Z".
     */
    "selection_guarantee_expires_at": string;
    /** Buyer-visible service level of the rate. Send it with type `available`. minLength: 1. */
    "service_level"?: string;
    /**
     * Whether the method has a rate, is unavailable, or could not be priced. Value enum:
     * "available".
     */
    "type": "available" | (string & {});
    /**
     * End of the delivery window for this rate. When present, send it with window_start_at,
     * including when offered_windows is supplied. Send it only with type available. Format:
     * date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "window_end_at"?: string;
    /**
     * Start of the delivery window for this rate. When present, send it with window_end_at,
     * including when offered_windows is supplied. Send it only with type available. Format:
     * date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "window_start_at"?: string;
})
    & (({
    /**
     * Whether the method has a rate, is unavailable, or could not be priced. Value enum:
     * "available".
     */
    "type": "available" | (string & {});
    /**
     * Price of the delivery. Send it with type `available`. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
    /**
     * Last moment this rate can be offered in the quote. It must be later than the evaluation time
     * plus the method's minimum_option_lifetime_seconds and no later than the quote's expires_at.
     * Send it with type available. Format: date-time. minLength: 1. Example:
     * "2026-08-02T16:00:00Z".
     */
    "expires_at": string;
    /**
     * Last moment a delivery selection can lock this rate for payment. It must be at or after
     * expires_at. Send it with type available. Format: date-time. minLength: 1. Example:
     * "2026-08-02T16:00:00Z".
     */
    "selection_guarantee_expires_at": string;
})
    & (({
    /**
     * Start of the delivery window for this rate. When present, send it with window_end_at,
     * including when offered_windows is supplied. Send it only with type available. Format:
     * date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "window_start_at": string;
    /**
     * End of the delivery window for this rate. When present, send it with window_start_at,
     * including when offered_windows is supplied. Send it only with type available. Format:
     * date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "window_end_at": string;
})
    | ({
    /**
     * Delivery windows the buyer can choose from. Send either `offered_windows` or both
     * `window_start_at` and `window_end_at` with type `available`. minItems: 1.
     */
    "offered_windows": unknown;
})
    | (Record<string, unknown>)));
/** The `available` variant of `CallerSuppliedDeliveryOutcomeRequest`. */
export type CallerSuppliedDeliveryOutcomeRequestAvailableInput = ({
    /**
     * Price of the delivery. Send it with type `available`. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValueInput;
    /**
     * Last moment this rate can be offered in the quote. It must be later than the evaluation time
     * plus the method's minimum_option_lifetime_seconds and no later than the quote's expires_at.
     * Send it with type available. Format: date-time. minLength: 1. Example:
     * "2026-08-02T16:00:00Z".
     */
    "expires_at": string | globalThis.Date;
    /**
     * Your private reference for this rate, up to 500 characters, with no leading or trailing
     * spaces. Flint stores it with the buyer's selection and never shows it to buyers. minLength:
     * 1. maxLength: 500.
     */
    "merchant_reference"?: string;
    /**
     * Delivery windows the buyer can choose from. Send either `offered_windows` or both
     * `window_start_at` and `window_end_at` with type `available`. [] (Value): {@link
     * DeliveryWindowRequestInput}. A delivery window you supply in a caller-supplied delivery
     * outcome, with its time range, price, and the last moment a buyer can choose it.
     */
    "offered_windows"?: Array<DeliveryWindowRequestInput>;
    /**
     * Last moment a delivery selection can lock this rate for payment. It must be at or after
     * expires_at. Send it with type available. Format: date-time. minLength: 1. Example:
     * "2026-08-02T16:00:00Z".
     */
    "selection_guarantee_expires_at": string | globalThis.Date;
    /** Buyer-visible service level of the rate. Send it with type `available`. minLength: 1. */
    "service_level"?: string;
    /**
     * Whether the method has a rate, is unavailable, or could not be priced. Value enum:
     * "available".
     */
    "type": "available";
    /**
     * End of the delivery window for this rate. When present, send it with window_start_at,
     * including when offered_windows is supplied. Send it only with type available. Format:
     * date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "window_end_at"?: string | globalThis.Date;
    /**
     * Start of the delivery window for this rate. When present, send it with window_end_at,
     * including when offered_windows is supplied. Send it only with type available. Format:
     * date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "window_start_at"?: string | globalThis.Date;
})
    & (({
    /**
     * Whether the method has a rate, is unavailable, or could not be priced. Value enum:
     * "available".
     */
    "type": "available";
    /**
     * Price of the delivery. Send it with type `available`. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValueInput;
    /**
     * Last moment this rate can be offered in the quote. It must be later than the evaluation time
     * plus the method's minimum_option_lifetime_seconds and no later than the quote's expires_at.
     * Send it with type available. Format: date-time. minLength: 1. Example:
     * "2026-08-02T16:00:00Z".
     */
    "expires_at": string | globalThis.Date;
    /**
     * Last moment a delivery selection can lock this rate for payment. It must be at or after
     * expires_at. Send it with type available. Format: date-time. minLength: 1. Example:
     * "2026-08-02T16:00:00Z".
     */
    "selection_guarantee_expires_at": string | globalThis.Date;
})
    & (({
    /**
     * Start of the delivery window for this rate. When present, send it with window_end_at,
     * including when offered_windows is supplied. Send it only with type available. Format:
     * date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "window_start_at": string | globalThis.Date;
    /**
     * End of the delivery window for this rate. When present, send it with window_start_at,
     * including when offered_windows is supplied. Send it only with type available. Format:
     * date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "window_end_at": string | globalThis.Date;
})
    | ({
    /**
     * Delivery windows the buyer can choose from. Send either `offered_windows` or both
     * `window_start_at` and `window_end_at` with type `available`. minItems: 1.
     */
    "offered_windows": unknown;
}))
    & (({
    "unavailable_reason"?: never;
})
    & ({
    "failure_category"?: never;
})
    & ({
    "retryable"?: never;
})));
/** The `cannot_calculate` variant of `CallerSuppliedDeliveryOutcomeRequest`. */
export type CallerSuppliedDeliveryOutcomeRequestCannotCalculate = ({
    /**
     * Why Flint could not calculate the method and the action that can make calculation succeed. -
     * `dependency_failure`: Retry after the dependent service recovers. - `timeout`: Retry after
     * the timed-out dependency recovers. - `malformed_response`: Fix the callback response so it
     * matches the documented response schema, then retry. - `pricing_failure`: Fix the method
     * pricing configuration or matching rate, then retry. - `schedule_failure`: Fix the method
     * schedule, timezone, or requested window, then retry. - `geography_failure`: Fix the
     * destination, origin, or geographic configuration, then retry. - `routing_failure`: Fix
     * inventory routing or origin assignment, then retry. - `address_verification_failed`: Correct
     * the address fields rejected by verification, then retry. - `address_could_not_be_verified`:
     * Confirm or correct the address, or retry when address verification is available. Value enum:
     * "dependency_failure", "timeout", "malformed_response", "pricing_failure",
     * "schedule_failure", "geography_failure", "routing_failure", "address_verification_failed",
     * "address_could_not_be_verified".
     */
    "failure_category": "dependency_failure"
        | "timeout"
        | "malformed_response"
        | "pricing_failure"
        | "schedule_failure"
        | "geography_failure"
        | "routing_failure"
        | "address_verification_failed"
        | "address_could_not_be_verified"
        | (string & {});
    /**
     * Your private reference for this rate, up to 500 characters, with no leading or trailing
     * spaces. Flint stores it with the buyer's selection and never shows it to buyers. minLength:
     * 1. maxLength: 500.
     */
    "merchant_reference"?: string;
    /** Whether trying again later can succeed. Send it with type `cannot_calculate`. */
    "retryable": boolean;
    /**
     * Whether the method has a rate, is unavailable, or could not be priced. Value enum:
     * "cannot_calculate".
     */
    "type": "cannot_calculate" | (string & {});
})
    & (({
    /**
     * Whether the method has a rate, is unavailable, or could not be priced. Value enum:
     * "cannot_calculate".
     */
    "type": "cannot_calculate" | (string & {});
    /**
     * Why Flint could not calculate the method and the action that can make calculation succeed. -
     * `dependency_failure`: Retry after the dependent service recovers. - `timeout`: Retry after
     * the timed-out dependency recovers. - `malformed_response`: Fix the callback response so it
     * matches the documented response schema, then retry. - `pricing_failure`: Fix the method
     * pricing configuration or matching rate, then retry. - `schedule_failure`: Fix the method
     * schedule, timezone, or requested window, then retry. - `geography_failure`: Fix the
     * destination, origin, or geographic configuration, then retry. - `routing_failure`: Fix
     * inventory routing or origin assignment, then retry. - `address_verification_failed`: Correct
     * the address fields rejected by verification, then retry. - `address_could_not_be_verified`:
     * Confirm or correct the address, or retry when address verification is available. Value enum:
     * "dependency_failure", "timeout", "malformed_response", "pricing_failure",
     * "schedule_failure", "geography_failure", "routing_failure", "address_verification_failed",
     * "address_could_not_be_verified".
     */
    "failure_category": "dependency_failure"
        | "timeout"
        | "malformed_response"
        | "pricing_failure"
        | "schedule_failure"
        | "geography_failure"
        | "routing_failure"
        | "address_verification_failed"
        | "address_could_not_be_verified"
        | (string & {});
    /** Whether trying again later can succeed. Send it with type `cannot_calculate`. */
    "retryable": boolean;
}));
/** The `cannot_calculate` variant of `CallerSuppliedDeliveryOutcomeRequest`. */
export type CallerSuppliedDeliveryOutcomeRequestCannotCalculateInput = ({
    /**
     * Why Flint could not calculate the method and the action that can make calculation succeed. -
     * `dependency_failure`: Retry after the dependent service recovers. - `timeout`: Retry after
     * the timed-out dependency recovers. - `malformed_response`: Fix the callback response so it
     * matches the documented response schema, then retry. - `pricing_failure`: Fix the method
     * pricing configuration or matching rate, then retry. - `schedule_failure`: Fix the method
     * schedule, timezone, or requested window, then retry. - `geography_failure`: Fix the
     * destination, origin, or geographic configuration, then retry. - `routing_failure`: Fix
     * inventory routing or origin assignment, then retry. - `address_verification_failed`: Correct
     * the address fields rejected by verification, then retry. - `address_could_not_be_verified`:
     * Confirm or correct the address, or retry when address verification is available. Value enum:
     * "dependency_failure", "timeout", "malformed_response", "pricing_failure",
     * "schedule_failure", "geography_failure", "routing_failure", "address_verification_failed",
     * "address_could_not_be_verified".
     */
    "failure_category": "dependency_failure"
        | "timeout"
        | "malformed_response"
        | "pricing_failure"
        | "schedule_failure"
        | "geography_failure"
        | "routing_failure"
        | "address_verification_failed"
        | "address_could_not_be_verified";
    /**
     * Your private reference for this rate, up to 500 characters, with no leading or trailing
     * spaces. Flint stores it with the buyer's selection and never shows it to buyers. minLength:
     * 1. maxLength: 500.
     */
    "merchant_reference"?: string;
    /** Whether trying again later can succeed. Send it with type `cannot_calculate`. */
    "retryable": boolean;
    /**
     * Whether the method has a rate, is unavailable, or could not be priced. Value enum:
     * "cannot_calculate".
     */
    "type": "cannot_calculate";
})
    & (({
    /**
     * Whether the method has a rate, is unavailable, or could not be priced. Value enum:
     * "cannot_calculate".
     */
    "type": "cannot_calculate";
    /**
     * Why Flint could not calculate the method and the action that can make calculation succeed. -
     * `dependency_failure`: Retry after the dependent service recovers. - `timeout`: Retry after
     * the timed-out dependency recovers. - `malformed_response`: Fix the callback response so it
     * matches the documented response schema, then retry. - `pricing_failure`: Fix the method
     * pricing configuration or matching rate, then retry. - `schedule_failure`: Fix the method
     * schedule, timezone, or requested window, then retry. - `geography_failure`: Fix the
     * destination, origin, or geographic configuration, then retry. - `routing_failure`: Fix
     * inventory routing or origin assignment, then retry. - `address_verification_failed`: Correct
     * the address fields rejected by verification, then retry. - `address_could_not_be_verified`:
     * Confirm or correct the address, or retry when address verification is available. Value enum:
     * "dependency_failure", "timeout", "malformed_response", "pricing_failure",
     * "schedule_failure", "geography_failure", "routing_failure", "address_verification_failed",
     * "address_could_not_be_verified".
     */
    "failure_category": "dependency_failure"
        | "timeout"
        | "malformed_response"
        | "pricing_failure"
        | "schedule_failure"
        | "geography_failure"
        | "routing_failure"
        | "address_verification_failed"
        | "address_could_not_be_verified";
    /** Whether trying again later can succeed. Send it with type `cannot_calculate`. */
    "retryable": boolean;
})
    & (({
    "amount_money"?: never;
})
    & ({
    "expires_at"?: never;
})
    & ({
    "selection_guarantee_expires_at"?: never;
})
    & ({
    "window_start_at"?: never;
})
    & ({
    "window_end_at"?: never;
})
    & ({
    "offered_windows"?: never;
})
    & ({
    "service_level"?: never;
})
    & ({
    "unavailable_reason"?: never;
})));
/**
 * Your outcome for a caller-priced delivery method, selected by `type`: available with a price and
 * windows, unavailable with a reason, or cannot calculate.
 */
export type CallerSuppliedDeliveryOutcomeRequestInput = ({
    /**
     * Price of the delivery. Send it with type `available`. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "amount_money"?: MoneyValueInput;
    /**
     * Last moment this rate can be offered in the quote. It must be later than the evaluation time
     * plus the method's minimum_option_lifetime_seconds and no later than the quote's expires_at.
     * Send it with type available. Format: date-time. minLength: 1. Example:
     * "2026-08-02T16:00:00Z".
     */
    "expires_at"?: string | globalThis.Date;
    /**
     * Why Flint could not calculate the method and the action that can make calculation succeed. -
     * `dependency_failure`: Retry after the dependent service recovers. - `timeout`: Retry after
     * the timed-out dependency recovers. - `malformed_response`: Fix the callback response so it
     * matches the documented response schema, then retry. - `pricing_failure`: Fix the method
     * pricing configuration or matching rate, then retry. - `schedule_failure`: Fix the method
     * schedule, timezone, or requested window, then retry. - `geography_failure`: Fix the
     * destination, origin, or geographic configuration, then retry. - `routing_failure`: Fix
     * inventory routing or origin assignment, then retry. - `address_verification_failed`: Correct
     * the address fields rejected by verification, then retry. - `address_could_not_be_verified`:
     * Confirm or correct the address, or retry when address verification is available. Value enum:
     * "dependency_failure", "timeout", "malformed_response", "pricing_failure",
     * "schedule_failure", "geography_failure", "routing_failure", "address_verification_failed",
     * "address_could_not_be_verified".
     */
    "failure_category"?: "dependency_failure"
        | "timeout"
        | "malformed_response"
        | "pricing_failure"
        | "schedule_failure"
        | "geography_failure"
        | "routing_failure"
        | "address_verification_failed"
        | "address_could_not_be_verified";
    /**
     * Your private reference for this rate, up to 500 characters, with no leading or trailing
     * spaces. Flint stores it with the buyer's selection and never shows it to buyers. minLength:
     * 1. maxLength: 500.
     */
    "merchant_reference"?: string;
    /**
     * Delivery windows the buyer can choose from. Send either `offered_windows` or both
     * `window_start_at` and `window_end_at` with type `available`. [] (Value): {@link
     * DeliveryWindowRequestInput}. A delivery window you supply in a caller-supplied delivery
     * outcome, with its time range, price, and the last moment a buyer can choose it.
     */
    "offered_windows"?: Array<DeliveryWindowRequestInput>;
    /** Whether trying again later can succeed. Send it with type `cannot_calculate`. */
    "retryable"?: boolean;
    /**
     * Last moment a delivery selection can lock this rate for payment. It must be at or after
     * expires_at. Send it with type available. Format: date-time. minLength: 1. Example:
     * "2026-08-02T16:00:00Z".
     */
    "selection_guarantee_expires_at"?: string | globalThis.Date;
    /** Buyer-visible service level of the rate. Send it with type `available`. minLength: 1. */
    "service_level"?: string;
    /**
     * Whether the method has a rate, is unavailable, or could not be priced. Value enum:
     * "available", "unavailable", "cannot_calculate".
     */
    "type": "available" | "unavailable" | "cannot_calculate";
    /**
     * Why the method is unavailable and the action that can make it eligible. -
     * `destination_not_served`: Use a destination covered by this method or choose another method.
     * - `pickup_unavailable`: Choose an available pickup method or location. -
     * `no_window_available`: Choose another offered window or a method with availability for the
     * requested time. - `eligibility_no_match`: Inspect eligibility_mismatches, then change the
     * relevant buyer facts or method eligibility rule. - `pricing_unavailable`: Add or activate a
     * matching rate, or provide the required caller-supplied price. - `inventory_unavailable`: The
     * origin or pickup location cannot supply the requested inventory. Reduce the quantity,
     * replenish inventory, or choose another origin or method. Value enum:
     * "destination_not_served", "pickup_unavailable", "no_window_available",
     * "eligibility_no_match", "pricing_unavailable", "inventory_unavailable".
     */
    "unavailable_reason"?: "destination_not_served"
        | "pickup_unavailable"
        | "no_window_available"
        | "eligibility_no_match"
        | "pricing_unavailable"
        | "inventory_unavailable";
    /**
     * End of the delivery window for this rate. When present, send it with window_start_at,
     * including when offered_windows is supplied. Send it only with type available. Format:
     * date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "window_end_at"?: string | globalThis.Date;
    /**
     * Start of the delivery window for this rate. When present, send it with window_end_at,
     * including when offered_windows is supplied. Send it only with type available. Format:
     * date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "window_start_at"?: string | globalThis.Date;
})
    & ((Exclude<CallerSuppliedDeliveryOutcomeRequestAvailableInput & object, readonly unknown[]>)
    | (Exclude<CallerSuppliedDeliveryOutcomeRequestUnavailableInput & object, readonly unknown[]>)
    | (Exclude<CallerSuppliedDeliveryOutcomeRequestCannotCalculateInput & object, readonly unknown[]>));
/** The `unavailable` variant of `CallerSuppliedDeliveryOutcomeRequest`. */
export type CallerSuppliedDeliveryOutcomeRequestUnavailable = ({
    /**
     * Your private reference for this rate, up to 500 characters, with no leading or trailing
     * spaces. Flint stores it with the buyer's selection and never shows it to buyers. minLength:
     * 1. maxLength: 500.
     */
    "merchant_reference"?: string;
    /**
     * Whether the method has a rate, is unavailable, or could not be priced. Value enum:
     * "unavailable".
     */
    "type": "unavailable" | (string & {});
    /**
     * Why the method is unavailable and the action that can make it eligible. -
     * `destination_not_served`: Use a destination covered by this method or choose another method.
     * - `pickup_unavailable`: Choose an available pickup method or location. -
     * `no_window_available`: Choose another offered window or a method with availability for the
     * requested time. - `eligibility_no_match`: Inspect eligibility_mismatches, then change the
     * relevant buyer facts or method eligibility rule. - `pricing_unavailable`: Add or activate a
     * matching rate, or provide the required caller-supplied price. - `inventory_unavailable`: The
     * origin or pickup location cannot supply the requested inventory. Reduce the quantity,
     * replenish inventory, or choose another origin or method. Value enum:
     * "destination_not_served", "pickup_unavailable", "no_window_available",
     * "eligibility_no_match", "pricing_unavailable", "inventory_unavailable".
     */
    "unavailable_reason": "destination_not_served"
        | "pickup_unavailable"
        | "no_window_available"
        | "eligibility_no_match"
        | "pricing_unavailable"
        | "inventory_unavailable"
        | (string & {});
})
    & (({
    /**
     * Whether the method has a rate, is unavailable, or could not be priced. Value enum:
     * "unavailable".
     */
    "type": "unavailable" | (string & {});
    /**
     * Why the method is unavailable and the action that can make it eligible. -
     * `destination_not_served`: Use a destination covered by this method or choose another method.
     * - `pickup_unavailable`: Choose an available pickup method or location. -
     * `no_window_available`: Choose another offered window or a method with availability for the
     * requested time. - `eligibility_no_match`: Inspect eligibility_mismatches, then change the
     * relevant buyer facts or method eligibility rule. - `pricing_unavailable`: Add or activate a
     * matching rate, or provide the required caller-supplied price. - `inventory_unavailable`: The
     * origin or pickup location cannot supply the requested inventory. Reduce the quantity,
     * replenish inventory, or choose another origin or method. Value enum:
     * "destination_not_served", "pickup_unavailable", "no_window_available",
     * "eligibility_no_match", "pricing_unavailable", "inventory_unavailable".
     */
    "unavailable_reason": "destination_not_served"
        | "pickup_unavailable"
        | "no_window_available"
        | "eligibility_no_match"
        | "pricing_unavailable"
        | "inventory_unavailable"
        | (string & {});
}));
/** The `unavailable` variant of `CallerSuppliedDeliveryOutcomeRequest`. */
export type CallerSuppliedDeliveryOutcomeRequestUnavailableInput = ({
    /**
     * Your private reference for this rate, up to 500 characters, with no leading or trailing
     * spaces. Flint stores it with the buyer's selection and never shows it to buyers. minLength:
     * 1. maxLength: 500.
     */
    "merchant_reference"?: string;
    /**
     * Whether the method has a rate, is unavailable, or could not be priced. Value enum:
     * "unavailable".
     */
    "type": "unavailable";
    /**
     * Why the method is unavailable and the action that can make it eligible. -
     * `destination_not_served`: Use a destination covered by this method or choose another method.
     * - `pickup_unavailable`: Choose an available pickup method or location. -
     * `no_window_available`: Choose another offered window or a method with availability for the
     * requested time. - `eligibility_no_match`: Inspect eligibility_mismatches, then change the
     * relevant buyer facts or method eligibility rule. - `pricing_unavailable`: Add or activate a
     * matching rate, or provide the required caller-supplied price. - `inventory_unavailable`: The
     * origin or pickup location cannot supply the requested inventory. Reduce the quantity,
     * replenish inventory, or choose another origin or method. Value enum:
     * "destination_not_served", "pickup_unavailable", "no_window_available",
     * "eligibility_no_match", "pricing_unavailable", "inventory_unavailable".
     */
    "unavailable_reason": "destination_not_served"
        | "pickup_unavailable"
        | "no_window_available"
        | "eligibility_no_match"
        | "pricing_unavailable"
        | "inventory_unavailable";
})
    & (({
    /**
     * Whether the method has a rate, is unavailable, or could not be priced. Value enum:
     * "unavailable".
     */
    "type": "unavailable";
    /**
     * Why the method is unavailable and the action that can make it eligible. -
     * `destination_not_served`: Use a destination covered by this method or choose another method.
     * - `pickup_unavailable`: Choose an available pickup method or location. -
     * `no_window_available`: Choose another offered window or a method with availability for the
     * requested time. - `eligibility_no_match`: Inspect eligibility_mismatches, then change the
     * relevant buyer facts or method eligibility rule. - `pricing_unavailable`: Add or activate a
     * matching rate, or provide the required caller-supplied price. - `inventory_unavailable`: The
     * origin or pickup location cannot supply the requested inventory. Reduce the quantity,
     * replenish inventory, or choose another origin or method. Value enum:
     * "destination_not_served", "pickup_unavailable", "no_window_available",
     * "eligibility_no_match", "pricing_unavailable", "inventory_unavailable".
     */
    "unavailable_reason": "destination_not_served"
        | "pickup_unavailable"
        | "no_window_available"
        | "eligibility_no_match"
        | "pricing_unavailable"
        | "inventory_unavailable";
})
    & (({
    "amount_money"?: never;
})
    & ({
    "expires_at"?: never;
})
    & ({
    "selection_guarantee_expires_at"?: never;
})
    & ({
    "window_start_at"?: never;
})
    & ({
    "window_end_at"?: never;
})
    & ({
    "offered_windows"?: never;
})
    & ({
    "service_level"?: never;
})
    & ({
    "failure_category"?: never;
})
    & ({
    "retryable"?: never;
})));
/** Cancels fulfillment work that has not completed. */
export type CancelFulfillmentRequestInput = AcceptFulfillmentRequestInput;
/** The request body for: Cancel a gift card notification. */
export type CancelGiftCardNotificationRequestInput = {};
/** Closes an open physical count without changing stock. */
export type CancelInventoryCountRequestInput = ApplyInventoryCountRequestInput;
/** Cancels requested quantity that hasn't departed. */
export type CancelInventoryTransferRequest = {
    /** Transfer version the caller last read. Format: uint64. minimum: 1. */
    "expected_version"?: number;
    /**
     * Transfer lines this action changes, each with a cumulative target. 1 to 100 lines. minItems:
     * 1. maxItems: 100. [] (Value): object. [].inventory_transfer_line_id (Required): string.
     * Transfer line this action changes. minLength: 1. Example:
     * "invtrln_01KEZF7C00CK297J6QVV5J0PFV". [].target_canceled_quantity (Required): integer.
     * Cumulative quantity that should be canceled before departure. Whole-number quantity;
     * fractional quantities are not supported. Format: int64. minimum: 0.
     */
    "lines": Array<{
        /**
         * Transfer line this action changes. minLength: 1. Example:
         * "invtrln_01KEZF7C00CK297J6QVV5J0PFV".
         */
        "inventory_transfer_line_id": string;
        /**
         * Cumulative quantity that should be canceled before departure. Whole-number quantity;
         * fractional quantities are not supported. Format: int64. minimum: 0.
         */
        "target_canceled_quantity": number;
    }>;
    /**
     * When and where the stock moved. Optional; when omitted, the movements record the time Flint
     * received the command as occurred_at and a null source_system. Where and when an inventory
     * event happened: the source system, external actor, and time.
     */
    "provenance"?: InventoryProvenanceRequest;
};
/** Cancels requested quantity that hasn't departed. */
export type CancelInventoryTransferRequestInput = {
    /** Transfer version the caller last read. Format: uint64. minimum: 1. */
    "expected_version"?: number;
    /**
     * Transfer lines this action changes, each with a cumulative target. 1 to 100 lines. minItems:
     * 1. maxItems: 100. [] (Value): object. [].inventory_transfer_line_id (Required): string.
     * Transfer line this action changes. minLength: 1. Example:
     * "invtrln_01KEZF7C00CK297J6QVV5J0PFV". [].target_canceled_quantity (Required): integer.
     * Cumulative quantity that should be canceled before departure. Whole-number quantity;
     * fractional quantities are not supported. Format: int64. minimum: 0.
     */
    "lines": Array<{
        /**
         * Transfer line this action changes. minLength: 1. Example:
         * "invtrln_01KEZF7C00CK297J6QVV5J0PFV".
         */
        "inventory_transfer_line_id": string;
        /**
         * Cumulative quantity that should be canceled before departure. Whole-number quantity;
         * fractional quantities are not supported. Format: int64. minimum: 0.
         */
        "target_canceled_quantity": number;
    }>;
    /**
     * When and where the stock moved. Optional; when omitted, the movements record the time Flint
     * received the command as occurred_at and a null source_system. Where and when an inventory
     * event happened: the source system, external actor, and time.
     */
    "provenance"?: InventoryProvenanceRequestInput;
};
/** Cancellation timing and the optional reason and comment recorded with the request. */
export type CancelMeSubscriptionRequest = {
    /**
     * When true, ends the subscription now. Otherwise, schedules cancellation at trial_end_at
     * while trialing, current_period_end_at while active, or next_retry_at while past_due, instead
     * of that charge. An active subscription with an expired renewal delivery hold ends now. A
     * scheduled, incomplete, or paused subscription, or a past_due subscription without
     * next_retry_at, requires cancel_immediately: true; otherwise returns 409 ACTION_NOT_ALLOWED
     * with reason period_end_unavailable. A buyer may cancel immediately when the store allows
     * buyer_chooses or no scheduled cancellation time is available. Under end_of_period, a trial
     * continues until trial_end_at.
     */
    "cancel_immediately"?: boolean;
    /**
     * Free text about the cancellation, up to 500 characters after surrounding spaces are trimmed.
     * Recorded in cancellation_details.comment, which only merchant credentials read. minLength:
     * 1. maxLength: 500.
     */
    "cancellation_comment"?: string;
    /**
     * Optional. Why the subscription is being canceled. When the store lists
     * customer_account.buyer_capabilities.cancellation_reasons, a reason a buyer sends must be one
     * of them; merchant credentials may send any code. Recorded in
     * cancellation_details.reason_code. Value enum: "too_expensive", "missing_features",
     * "switched_service", "unused", "customer_service", "too_complex", "low_quality", "other".
     */
    "cancellation_reason_code"?: "too_expensive"
        | "missing_features"
        | "switched_service"
        | "unused"
        | "customer_service"
        | "too_complex"
        | "low_quality"
        | "other"
        | (string & {});
    /**
     * Version last read from the resource returned in `data` (the primary resource for a result
     * object). The write fails with `VERSION_CONFLICT` if it has changed. Requiredness depends on
     * the operation and fields being changed. Format: uint64. minimum: 1.
     */
    "expected_version"?: number;
};
/** Cancellation timing and the optional reason and comment recorded with the request. */
export type CancelMeSubscriptionRequestInput = {
    /**
     * When true, ends the subscription now. Otherwise, schedules cancellation at trial_end_at
     * while trialing, current_period_end_at while active, or next_retry_at while past_due, instead
     * of that charge. An active subscription with an expired renewal delivery hold ends now. A
     * scheduled, incomplete, or paused subscription, or a past_due subscription without
     * next_retry_at, requires cancel_immediately: true; otherwise returns 409 ACTION_NOT_ALLOWED
     * with reason period_end_unavailable. A buyer may cancel immediately when the store allows
     * buyer_chooses or no scheduled cancellation time is available. Under end_of_period, a trial
     * continues until trial_end_at.
     */
    "cancel_immediately"?: boolean;
    /**
     * Free text about the cancellation, up to 500 characters after surrounding spaces are trimmed.
     * Recorded in cancellation_details.comment, which only merchant credentials read. minLength:
     * 1. maxLength: 500.
     */
    "cancellation_comment"?: string;
    /**
     * Optional. Why the subscription is being canceled. When the store lists
     * customer_account.buyer_capabilities.cancellation_reasons, a reason a buyer sends must be one
     * of them; merchant credentials may send any code. Recorded in
     * cancellation_details.reason_code. Value enum: "too_expensive", "missing_features",
     * "switched_service", "unused", "customer_service", "too_complex", "low_quality", "other".
     */
    "cancellation_reason_code"?: "too_expensive"
        | "missing_features"
        | "switched_service"
        | "unused"
        | "customer_service"
        | "too_complex"
        | "low_quality"
        | "other";
    /**
     * Version last read from the resource returned in `data` (the primary resource for a result
     * object). The write fails with `VERSION_CONFLICT` if it has changed. Requiredness depends on
     * the operation and fields being changed. Format: uint64. minimum: 1.
     */
    "expected_version"?: number;
};
/** The request body for: Cancel order payment attempt. */
export type CancelOrderPaymentAttemptRequest = {
    /**
     * Optional merchant-supplied cancellation reason. Value enum: "requested_by_customer",
     * "duplicate", "fraudulent", "abandoned".
     */
    "cancellation_reason"?: "requested_by_customer" | "duplicate" | "fraudulent" | "abandoned" | (string & {});
};
/** The request body for: Cancel order payment attempt. */
export type CancelOrderPaymentAttemptRequestInput = {
    /**
     * Optional merchant-supplied cancellation reason. Value enum: "requested_by_customer",
     * "duplicate", "fraudulent", "abandoned".
     */
    "cancellation_reason"?: "requested_by_customer" | "duplicate" | "fraudulent" | "abandoned";
};
export type CancelOrderPaymentAttemptResponse = PayOrderResponse;
/** The request body for: Cancel payment intent. */
export type CancelPaymentIntentRequest = {
    /**
     * Optional merchant-supplied cancellation reason. Value enum: "requested_by_customer",
     * "duplicate", "fraudulent", "abandoned".
     */
    "cancellation_reason"?: "requested_by_customer" | "duplicate" | "fraudulent" | "abandoned" | (string & {});
    /**
     * Optional expected version of this resource. A stale value returns 409 VERSION_CONFLICT with
     * the current version. Retrieve the resource and rebuild the request before retrying. Format:
     * uint64. minimum: 1.
     */
    "expected_version"?: number;
};
/** The request body for: Cancel payment intent. */
export type CancelPaymentIntentRequestInput = {
    /**
     * Optional merchant-supplied cancellation reason. Value enum: "requested_by_customer",
     * "duplicate", "fraudulent", "abandoned".
     */
    "cancellation_reason"?: "requested_by_customer" | "duplicate" | "fraudulent" | "abandoned";
    /**
     * Optional expected version of this resource. A stale value returns 409 VERSION_CONFLICT with
     * the current version. Retrieve the resource and rebuild the request before retrying. Format:
     * uint64. minimum: 1.
     */
    "expected_version"?: number;
};
/** The request body for: Cancel a payout. */
export type CancelPayoutRequest = {};
/** The request body for: Cancel a payout. */
export type CancelPayoutRequestInput = {};
/** The request body for: Cancel return disposition. */
export type CancelReturnDispositionRequest = {
    /**
     * Optional. The disposition's current version; a stale value returns 409 VERSION_CONFLICT.
     * Format: int64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Why it is being canceled. Value enum: "created_in_error", "changed_disposition",
     * "duplicate", "other".
     */
    "reason": "created_in_error" | "changed_disposition" | "duplicate" | "other" | (string & {});
    /** Optional detail about `reason`, kept with the record. minLength: 1. */
    "reason_message"?: string;
};
/** The request body for: Cancel return disposition. */
export type CancelReturnDispositionRequestInput = {
    /**
     * Optional. The disposition's current version; a stale value returns 409 VERSION_CONFLICT.
     * Format: int64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Why it is being canceled. Value enum: "created_in_error", "changed_disposition",
     * "duplicate", "other".
     */
    "reason": "created_in_error" | "changed_disposition" | "duplicate" | "other";
    /** Optional detail about `reason`, kept with the record. minLength: 1. */
    "reason_message"?: string;
};
export type CancelReturnDispositionResponse = GetReturnDispositionResponse;
/** The request body for: Cancel return line item. */
export type CancelReturnLineItemRequest = {
    /**
     * Version last read from the resource returned in `data` (the primary resource for a result
     * object). The write fails with `VERSION_CONFLICT` if it has changed. Requiredness depends on
     * the operation and fields being changed. Format: int64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * How many of the canceled units the buyer no longer has to send back, as a whole number;
     * fractional quantities are not supported. Lowers return_required_quantity. Omit it to lower
     * it only as far as the canceled quantity requires. Format: int64.
     */
    "handback_quantity"?: number;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
    /**
     * Why it is being canceled. Value enum: "buyer_request", "merchant_request", "expired",
     * "created_in_error", "other".
     */
    "reason": "buyer_request" | "merchant_request" | "expired" | "created_in_error" | "other" | (string & {});
    /** Optional detail about `reason`, kept with the record. minLength: 1. */
    "reason_message"?: string;
};
/** The request body for: Cancel return line item. */
export type CancelReturnLineItemRequestInput = {
    /**
     * Version last read from the resource returned in `data` (the primary resource for a result
     * object). The write fails with `VERSION_CONFLICT` if it has changed. Requiredness depends on
     * the operation and fields being changed. Format: int64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * How many of the canceled units the buyer no longer has to send back, as a whole number;
     * fractional quantities are not supported. Lowers return_required_quantity. Omit it to lower
     * it only as far as the canceled quantity requires. Format: int64.
     */
    "handback_quantity"?: number;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
    /**
     * Why it is being canceled. Value enum: "buyer_request", "merchant_request", "expired",
     * "created_in_error", "other".
     */
    "reason": "buyer_request" | "merchant_request" | "expired" | "created_in_error" | "other";
    /** Optional detail about `reason`, kept with the record. minLength: 1. */
    "reason_message"?: string;
};
export type CancelReturnLineItemResponse = GetReturnResponse;
/** The request body for: Cancel return. */
export type CancelReturnRequest = {
    /**
     * Version last read from the resource returned in `data` (the primary resource for a result
     * object). The write fails with `VERSION_CONFLICT` if it has changed. Requiredness depends on
     * the operation and fields being changed. Format: int64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Why it is being canceled. Value enum: "buyer_request", "merchant_request", "duplicate",
     * "expired", "created_in_error", "other".
     */
    "reason": "buyer_request"
        | "merchant_request"
        | "duplicate"
        | "expired"
        | "created_in_error"
        | "other"
        | (string & {});
    /** Optional detail about `reason`, kept with the record. minLength: 1. */
    "reason_message"?: string;
};
/** The request body for: Cancel return. */
export type CancelReturnRequestInput = {
    /**
     * Version last read from the resource returned in `data` (the primary resource for a result
     * object). The write fails with `VERSION_CONFLICT` if it has changed. Requiredness depends on
     * the operation and fields being changed. Format: int64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Why it is being canceled. Value enum: "buyer_request", "merchant_request", "duplicate",
     * "expired", "created_in_error", "other".
     */
    "reason": "buyer_request" | "merchant_request" | "duplicate" | "expired" | "created_in_error" | "other";
    /** Optional detail about `reason`, kept with the record. minLength: 1. */
    "reason_message"?: string;
};
/** The request body for: Cancel return resolution. */
export type CancelReturnResolutionRequestInput = CancelReturnRequestInput;
export type CancelReturnResolutionResponse = GetReturnResolutionResponse;
export type CancelReturnResponse = GetReturnResponse;
/** Cancellation timing and the optional reason and comment recorded with the request. */
export type CancelSubscriptionRequest = {
    /**
     * When true, ends the subscription now. Otherwise, schedules cancellation at trial_end_at
     * while trialing, current_period_end_at while active, or next_retry_at while past_due, instead
     * of that charge. An active subscription with an expired renewal delivery hold ends now. A
     * scheduled, incomplete, or paused subscription, or a past_due subscription without
     * next_retry_at, requires cancel_immediately: true; otherwise returns 409 ACTION_NOT_ALLOWED
     * with reason period_end_unavailable. A buyer may cancel immediately when the store allows
     * buyer_chooses or no scheduled cancellation time is available. Under end_of_period, a trial
     * continues until trial_end_at.
     */
    "cancel_immediately"?: boolean;
    /**
     * Free text about the cancellation, up to 500 characters after surrounding spaces are trimmed.
     * Recorded in cancellation_details.comment, which only merchant credentials read. minLength:
     * 1. maxLength: 500.
     */
    "cancellation_comment"?: string;
    /**
     * Optional. Why the subscription is being canceled. When the store lists
     * customer_account.buyer_capabilities.cancellation_reasons, a reason a buyer sends must be one
     * of them; merchant credentials may send any code. Recorded in
     * cancellation_details.reason_code. Value enum: "too_expensive", "missing_features",
     * "switched_service", "unused", "customer_service", "too_complex", "low_quality", "other".
     */
    "cancellation_reason_code"?: "too_expensive"
        | "missing_features"
        | "switched_service"
        | "unused"
        | "customer_service"
        | "too_complex"
        | "low_quality"
        | "other"
        | (string & {});
    /**
     * Version last read from the resource returned in `data` (the primary resource for a result
     * object). The write fails with `VERSION_CONFLICT` if it has changed. Requiredness depends on
     * the operation and fields being changed. Format: uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Who asked to cancel: buyer, merchant, or integration. Defaults to merchant. Attribution
     * only; this does not apply the store's buyer limits. To enforce them, use a customer session
     * on POST /v1/me/subscriptions/{subscription_id}/cancel. Recorded in
     * cancellation_details.requested_by and cancellation_reason. Default: "merchant". Value enum:
     * "buyer", "merchant", "integration".
     */
    "initiated_by"?: "buyer" | "merchant" | "integration" | (string & {});
};
/** Cancellation timing and the optional reason and comment recorded with the request. */
export type CancelSubscriptionRequestInput = {
    /**
     * When true, ends the subscription now. Otherwise, schedules cancellation at trial_end_at
     * while trialing, current_period_end_at while active, or next_retry_at while past_due, instead
     * of that charge. An active subscription with an expired renewal delivery hold ends now. A
     * scheduled, incomplete, or paused subscription, or a past_due subscription without
     * next_retry_at, requires cancel_immediately: true; otherwise returns 409 ACTION_NOT_ALLOWED
     * with reason period_end_unavailable. A buyer may cancel immediately when the store allows
     * buyer_chooses or no scheduled cancellation time is available. Under end_of_period, a trial
     * continues until trial_end_at.
     */
    "cancel_immediately"?: boolean;
    /**
     * Free text about the cancellation, up to 500 characters after surrounding spaces are trimmed.
     * Recorded in cancellation_details.comment, which only merchant credentials read. minLength:
     * 1. maxLength: 500.
     */
    "cancellation_comment"?: string;
    /**
     * Optional. Why the subscription is being canceled. When the store lists
     * customer_account.buyer_capabilities.cancellation_reasons, a reason a buyer sends must be one
     * of them; merchant credentials may send any code. Recorded in
     * cancellation_details.reason_code. Value enum: "too_expensive", "missing_features",
     * "switched_service", "unused", "customer_service", "too_complex", "low_quality", "other".
     */
    "cancellation_reason_code"?: "too_expensive"
        | "missing_features"
        | "switched_service"
        | "unused"
        | "customer_service"
        | "too_complex"
        | "low_quality"
        | "other";
    /**
     * Version last read from the resource returned in `data` (the primary resource for a result
     * object). The write fails with `VERSION_CONFLICT` if it has changed. Requiredness depends on
     * the operation and fields being changed. Format: uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Who asked to cancel: buyer, merchant, or integration. Defaults to merchant. Attribution
     * only; this does not apply the store's buyer limits. To enforce them, use a customer session
     * on POST /v1/me/subscriptions/{subscription_id}/cancel. Recorded in
     * cancellation_details.requested_by and cancellation_reason. Default: "merchant". Value enum:
     * "buyer", "merchant", "integration".
     */
    "initiated_by"?: "buyer" | "merchant" | "integration";
};
/** Merchant capability readiness for a payment or money movement capability. */
export type CapabilityReadiness = {
    /**
     * Flint-owned capability name. Payment capabilities describe transaction acceptance readiness;
     * money movement capabilities describe payout and balance movement readiness. Value enum:
     * "accept_card_payments", "save_payment_methods", "accept_affirm_payments",
     * "accept_ach_debit_payments", "receive_payouts", "create_standard_payouts",
     * "manage_payout_destinations", "manage_payout_settings".
     */
    "capability": "accept_card_payments"
        | "save_payment_methods"
        | "accept_affirm_payments"
        | "accept_ach_debit_payments"
        | "receive_payouts"
        | "create_standard_payouts"
        | "manage_payout_destinations"
        | "manage_payout_settings"
        | (string & {});
    /**
     * Product domain this capability belongs to: payments for payment acceptance or money_movement
     * for balances and payouts. Value enum: "money_movement", "payments".
     */
    "domain": "money_movement" | "payments" | (string & {});
    /**
     * Actions that can remediate or refresh this capability when Flint can suggest one. []
     * (Value): {@link ReadinessAction}. A step that moves a merchant capability or readiness axis
     * forward, with the party that must do it (`owner`) and any required fields.
     */
    "next_actions": Array<ReadinessAction>;
    /**
     * Merchant requirements that affect this capability. Account information requirements for a
     * merchant, grouped as currently due, eventually due, past due, and pending verification.
     */
    "requirements": ReadinessRequirements;
    /**
     * Current readiness status for this capability. Value enum: "ready", "pending", "blocked",
     * "not_requested", "not_available".
     */
    "status": "ready" | "pending" | "blocked" | "not_requested" | "not_available" | (string & {});
    /**
     * Why readiness has its current status. MERCHANT_NOT_READY uses onboarding_required for
     * onboarding_not_started, requirements_due, requirements_past_due and pending_verification,
     * and platform_review for Flint's own review. `null` when no reason applies. Value enum:
     * "provisioning", "onboarding_not_started", "requirements_due", "requirements_past_due",
     * "pending_verification", "account_rejected", "disabled_by_platform_policy",
     * "billing_suspended", "platform_review", "processing_not_enabled",
     * "platform_funding_unavailable", "tax_category_required", "service_unavailable",
     * "payment_option_access_not_provisioned", "payment_option_activation_pending",
     * "payment_option_not_in_plan", "payment_option_not_available", "capability_not_active",
     * "other".
     */
    "status_reason"?: "provisioning"
        | "onboarding_not_started"
        | "requirements_due"
        | "requirements_past_due"
        | "pending_verification"
        | "account_rejected"
        | "disabled_by_platform_policy"
        | "billing_suspended"
        | "platform_review"
        | "processing_not_enabled"
        | "platform_funding_unavailable"
        | "tax_category_required"
        | "service_unavailable"
        | "payment_option_access_not_provisioned"
        | "payment_option_activation_pending"
        | "payment_option_not_in_plan"
        | "payment_option_not_available"
        | "capability_not_active"
        | "other"
        | (string & {});
};
/** The request body for: Capture payment intent. */
export type CapturePaymentIntentRequest = {
    /**
     * Amount to capture, in the authorization's currency. Omit it to capture all of
     * capturable_money. A smaller amount is a partial capture: Flint releases the rest in the same
     * request, and the payment intent can't be captured again. Must be greater than zero and at
     * most capturable_money. Affirm payments can only be captured in full. Can't be combined with
     * final_amount_money or tip_money. Monetary amount represented as integer minor units plus an
     * ISO 4217 currency code.
     */
    "amount_money"?: MoneyValue;
    /**
     * Optional expected version of this resource. A stale value returns 409 VERSION_CONFLICT with
     * the current version. Retrieve the resource and rebuild the request before retrying. Format:
     * uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * The bill without the tip. The capture collects final_amount_money plus tip_money in one
     * charge. With only tip_money, the bill is the authorization minus the tip it carries; when
     * the authorization is all tip, final_amount_money is required. Must be greater than zero, in
     * the payment's currency. On an order's payment, it is at most the authorization minus the tip
     * it carries, so the order's items, charges and tax can't grow; above it LIMIT_EXCEEDED with
     * maximum_money on final_amount_money. The order releases the difference. Not accepted on
     * Affirm or ACH debit payments. Monetary amount represented as integer minor units plus an ISO
     * 4217 currency code.
     */
    "final_amount_money"?: MoneyValue;
    /**
     * A platform fee your partner app charges on this payment, set when you know the final bill
     * and tip. Only the partner app install token that created the payment can send it; from any
     * other credential it is INVALID_REQUEST with NOT_ALLOWED on platform_fee. It replaces the fee
     * the payment was created with, or adds one if it had none, after the same consent, capability
     * and currency checks as at create: amount_money must be above zero and in the payment's
     * currency, otherwise INVALID_REQUEST with INVALID_VALUE on platform_fee.amount_money. Without
     * an approved cap in this currency it is ACTION_NOT_ALLOWED with reason
     * platform_fee_consent_required; in live mode the partner app's platform_fees capability must
     * be active. A fee that already ended is ACTION_NOT_ALLOWED with reason terminal_status. The
     * cap and Flint's own fees apply to the captured total, so Flint lowers the fee rather than
     * refusing the capture. A payment that belongs to an order can't take it at capture:
     * INVALID_REQUEST with NOT_ALLOWED on platform_fee. Part of the request fingerprint. See
     * [Platform fees](/docs/guides/platform-fees). A platform fee the partner app charges on the
     * payment, beside Flint's fees. The installed merchant pays it, and Flint takes no share of
     * it.
     */
    "platform_fee"?: PlatformFeeRequest;
    /**
     * Final split amounts for this capture. List every split that isn't canceled, once each, with
     * an amount above zero in the payment's currency. Omit splits to keep the stored amounts. The
     * total must fit after Flint's fees and one minor unit for the collecting merchant; otherwise
     * INVALID_REQUEST with INVALID_VALUE on splits and maximum_money. An amount_money too small
     * for the stored splits is LIMIT_EXCEEDED with minimum_money. A payment created without splits
     * can't gain them. Part of the idempotency fingerprint. minItems: 1. maxItems: 25. [] (Value):
     * {@link SplitReversalRequest}. The final amount of an existing split at capture.
     */
    "splits"?: Array<SplitReversalRequest>;
    /**
     * The tip, replacing the tip the authorization carries. Zero captures without a tip. With only
     * final_amount_money, the tip is the one the authorization carries, or zero. At most the
     * larger of 1,000.00 USD and final_amount_money; on an order's payment, the larger of 1,000.00
     * USD and the payment's share of the order's subtotal after discounts. Above it
     * INVALID_REQUEST with INVALID_VALUE on tip_money and maximum_money. On an order's payment,
     * keeping or lowering the tip the authorization carries is never refused, and the tip becomes
     * this payment's part of the order's tip. A payment that doesn't carry part of the order's
     * requested tip can't add a tip above zero beside it: INVALID_REQUEST with NOT_ALLOWED on
     * tip_money. On an order, the bill can't grow, so without overcapture a tip fits only within
     * what the bill leaves of the hold. The total is at most overcapture.maximum_capturable_money
     * when overcapture is available, else capturable_money; above it LIMIT_EXCEEDED with
     * maximum_money. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code.
     */
    "tip_money"?: MoneyValue;
};
/** The request body for: Capture payment intent. */
export type CapturePaymentIntentRequestInput = {
    /**
     * Amount to capture, in the authorization's currency. Omit it to capture all of
     * capturable_money. A smaller amount is a partial capture: Flint releases the rest in the same
     * request, and the payment intent can't be captured again. Must be greater than zero and at
     * most capturable_money. Affirm payments can only be captured in full. Can't be combined with
     * final_amount_money or tip_money. Monetary amount represented as integer minor units plus an
     * ISO 4217 currency code.
     */
    "amount_money"?: MoneyValueInput;
    /**
     * Optional expected version of this resource. A stale value returns 409 VERSION_CONFLICT with
     * the current version. Retrieve the resource and rebuild the request before retrying. Format:
     * uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * The bill without the tip. The capture collects final_amount_money plus tip_money in one
     * charge. With only tip_money, the bill is the authorization minus the tip it carries; when
     * the authorization is all tip, final_amount_money is required. Must be greater than zero, in
     * the payment's currency. On an order's payment, it is at most the authorization minus the tip
     * it carries, so the order's items, charges and tax can't grow; above it LIMIT_EXCEEDED with
     * maximum_money on final_amount_money. The order releases the difference. Not accepted on
     * Affirm or ACH debit payments. Monetary amount represented as integer minor units plus an ISO
     * 4217 currency code.
     */
    "final_amount_money"?: MoneyValueInput;
    /**
     * A platform fee your partner app charges on this payment, set when you know the final bill
     * and tip. Only the partner app install token that created the payment can send it; from any
     * other credential it is INVALID_REQUEST with NOT_ALLOWED on platform_fee. It replaces the fee
     * the payment was created with, or adds one if it had none, after the same consent, capability
     * and currency checks as at create: amount_money must be above zero and in the payment's
     * currency, otherwise INVALID_REQUEST with INVALID_VALUE on platform_fee.amount_money. Without
     * an approved cap in this currency it is ACTION_NOT_ALLOWED with reason
     * platform_fee_consent_required; in live mode the partner app's platform_fees capability must
     * be active. A fee that already ended is ACTION_NOT_ALLOWED with reason terminal_status. The
     * cap and Flint's own fees apply to the captured total, so Flint lowers the fee rather than
     * refusing the capture. A payment that belongs to an order can't take it at capture:
     * INVALID_REQUEST with NOT_ALLOWED on platform_fee. Part of the request fingerprint. See
     * [Platform fees](/docs/guides/platform-fees). A platform fee the partner app charges on the
     * payment, beside Flint's fees. The installed merchant pays it, and Flint takes no share of
     * it.
     */
    "platform_fee"?: PlatformFeeRequestInput;
    /**
     * Final split amounts for this capture. List every split that isn't canceled, once each, with
     * an amount above zero in the payment's currency. Omit splits to keep the stored amounts. The
     * total must fit after Flint's fees and one minor unit for the collecting merchant; otherwise
     * INVALID_REQUEST with INVALID_VALUE on splits and maximum_money. An amount_money too small
     * for the stored splits is LIMIT_EXCEEDED with minimum_money. A payment created without splits
     * can't gain them. Part of the idempotency fingerprint. minItems: 1. maxItems: 25. [] (Value):
     * {@link CapturePaymentSplitRequestInput}. The final amount of an existing split at capture.
     */
    "splits"?: Array<CapturePaymentSplitRequestInput>;
    /**
     * The tip, replacing the tip the authorization carries. Zero captures without a tip. With only
     * final_amount_money, the tip is the one the authorization carries, or zero. At most the
     * larger of 1,000.00 USD and final_amount_money; on an order's payment, the larger of 1,000.00
     * USD and the payment's share of the order's subtotal after discounts. Above it
     * INVALID_REQUEST with INVALID_VALUE on tip_money and maximum_money. On an order's payment,
     * keeping or lowering the tip the authorization carries is never refused, and the tip becomes
     * this payment's part of the order's tip. A payment that doesn't carry part of the order's
     * requested tip can't add a tip above zero beside it: INVALID_REQUEST with NOT_ALLOWED on
     * tip_money. On an order, the bill can't grow, so without overcapture a tip fits only within
     * what the bill leaves of the hold. The total is at most overcapture.maximum_capturable_money
     * when overcapture is available, else capturable_money; above it LIMIT_EXCEEDED with
     * maximum_money. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code.
     */
    "tip_money"?: MoneyValueInput;
};
