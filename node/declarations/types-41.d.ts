import type { InputValue } from '../runtime.js';
import type { DisputesAcceptParams, Dimensions, DimensionsRequestInput } from './types-22.js';
import type {
    PayOrderRequestInput,
    PartnerWebhookEnvelope,
    PartnerAppPermissionManifestEntry,
    PartnerAppPlatform,
    PartnerAppPlatformProfile
} from './types-42.js';
import type {
    RemoveDiscountsRequestInput,
    RepriceDiscountsRequestInput,
    ResolveOrderInventoryExceptionRequestInput,
    RetryOrderEditRefundRequestInput,
    ResponseMeta
} from './types-51.js';
import type { SendOrderReceiptRequestInput } from './types-56.js';
import type {
    UpdateOrderChargeRequestInput,
    UpdateOrderRequestInput,
    UpdatePackageItemRequestInput,
    UpdatePackageRequestInput
} from './types-64.js';
import type { UpdateLineItemRequestInput } from './types-63.js';
import type { ExpandedOrderSummary } from './types-23.js';
import type { MetadataMap, MetadataRequestInput, MerchantWebhookEnvelope } from './types-36.js';
import type { ReturnResolutionLineItemRequest, ReturnShipmentLineItemAllocationRequestInput } from './types-54.js';
import type { Weight, WeightRequestInput, WorkloadIdentityClaimCondition } from './types-66.js';
import type { CreatePackageItemRequest, CreatePackageItemRequestInput } from './types-10.js';
import type { FulfillmentEventsGetParams } from './types-24.js';
import type {
    MarkPackageDeliveredRequestInput,
    MarkPackageDeliveryAttemptedRequestInput,
    MarkPackageExceptionRequestInput
} from './types-34.js';
import type {
    MarkPackageInTransitRequestInput,
    MarkPackageOutForDeliveryRequestInput,
    MarkPackagePackedRequestInput,
    MarkPackageReturnedRequestInput,
    MarkPackageShippedRequestInput
} from './types-35.js';
import type { VoidPackageRequestInput } from './types-65.js';
export type OrdersGetEditParams = DisputesAcceptParams;
export type OrdersGetParams = {
    /**
     * Include related objects in the response. Supported expansions: customer,
     * fulfillments.packages, fulfillments.shipments, payment_intents, subscription,
     * subscription_plan. Expansion requires the base order read scope plus the read scope for each
     * expanded resource. Limits: at most 10 unique expand paths per request. To-many expansions
     * are capped at 20 related objects per path. [] enum: "customer", "fulfillments.packages",
     * "fulfillments.shipments", "payment_intents", "subscription", "subscription_plan". Value
     * enum: "customer", "fulfillments.packages", "fulfillments.shipments", "payment_intents",
     * "subscription", "subscription_plan". anyOf[1] (Value): Array of string. [] enum: "customer",
     * "fulfillments.packages", "fulfillments.shipments", "payment_intents", "subscription",
     * "subscription_plan". anyOf[1][] (Value): string. Value enum: "customer",
     * "fulfillments.packages", "fulfillments.shipments", "payment_intents", "subscription",
     * "subscription_plan". anyOf[2] (Value): string. Value enum: "customer",
     * "fulfillments.packages", "fulfillments.shipments", "payment_intents", "subscription",
     * "subscription_plan".
     */
    "expand"?: InputValue<("customer"
        | "fulfillments.packages"
        | "fulfillments.shipments"
        | "payment_intents"
        | "subscription"
        | "subscription_plan")
        | readonly ("customer"
        | "fulfillments.packages"
        | "fulfillments.shipments"
        | "payment_intents"
        | "subscription"
        | "subscription_plan")[]>;
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
export type OrdersGetPaymentAttemptParams = DisputesAcceptParams;
export type OrdersGetReceiptPDFParams = DisputesAcceptParams;
export type OrdersGetReceiptPDFResponse = Uint8Array;
export type OrdersListActivitiesParams = {
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
     * ANDed. [] enum: "created", "line_item_added", "line_item_updated", "line_item_removed",
     * "discount_applied", "discount_removed", "tax_updated", "requested_tip_added",
     * "requested_tip_updated", "requested_tip_removed", "charge_added", "charge_updated",
     * "charge_removed", "charge_fulfillment_updated", "order_edited", "order_updated",
     * "adjustment", "closed", "payment", "payment_failed", "refund", "refund_failed",
     * "checkout_session_created", "checkout_session_expired", "checkout_session_invalidated",
     * "fulfillment_created", "fulfillment_updated", "fulfillment_state_changed". Value enum:
     * "created", "line_item_added", "line_item_updated", "line_item_removed", "discount_applied",
     * "discount_removed", "tax_updated", "requested_tip_added", "requested_tip_updated",
     * "requested_tip_removed", "charge_added", "charge_updated", "charge_removed",
     * "charge_fulfillment_updated", "order_edited", "order_updated", "adjustment", "closed",
     * "payment", "payment_failed", "refund", "refund_failed", "checkout_session_created",
     * "checkout_session_expired", "checkout_session_invalidated", "fulfillment_created",
     * "fulfillment_updated", "fulfillment_state_changed". anyOf[1] (Value): Array of string.
     * minItems: 1. [] enum: "created", "line_item_added", "line_item_updated",
     * "line_item_removed", "discount_applied", "discount_removed", "tax_updated",
     * "requested_tip_added", "requested_tip_updated", "requested_tip_removed", "charge_added",
     * "charge_updated", "charge_removed", "charge_fulfillment_updated", "order_edited",
     * "order_updated", "adjustment", "closed", "payment", "payment_failed", "refund",
     * "refund_failed", "checkout_session_created", "checkout_session_expired",
     * "checkout_session_invalidated", "fulfillment_created", "fulfillment_updated",
     * "fulfillment_state_changed". anyOf[1][] (Value): string. Value enum: "created",
     * "line_item_added", "line_item_updated", "line_item_removed", "discount_applied",
     * "discount_removed", "tax_updated", "requested_tip_added", "requested_tip_updated",
     * "requested_tip_removed", "charge_added", "charge_updated", "charge_removed",
     * "charge_fulfillment_updated", "order_edited", "order_updated", "adjustment", "closed",
     * "payment", "payment_failed", "refund", "refund_failed", "checkout_session_created",
     * "checkout_session_expired", "checkout_session_invalidated", "fulfillment_created",
     * "fulfillment_updated", "fulfillment_state_changed". anyOf[2] (Value): string. Value enum:
     * "created", "line_item_added", "line_item_updated", "line_item_removed", "discount_applied",
     * "discount_removed", "tax_updated", "requested_tip_added", "requested_tip_updated",
     * "requested_tip_removed", "charge_added", "charge_updated", "charge_removed",
     * "charge_fulfillment_updated", "order_edited", "order_updated", "adjustment", "closed",
     * "payment", "payment_failed", "refund", "refund_failed", "checkout_session_created",
     * "checkout_session_expired", "checkout_session_invalidated", "fulfillment_created",
     * "fulfillment_updated", "fulfillment_state_changed".
     */
    "activity_type"?: InputValue<("created"
        | "line_item_added"
        | "line_item_updated"
        | "line_item_removed"
        | "discount_applied"
        | "discount_removed"
        | "tax_updated"
        | "requested_tip_added"
        | "requested_tip_updated"
        | "requested_tip_removed"
        | "charge_added"
        | "charge_updated"
        | "charge_removed"
        | "charge_fulfillment_updated"
        | "order_edited"
        | "order_updated"
        | "adjustment"
        | "closed"
        | "payment"
        | "payment_failed"
        | "refund"
        | "refund_failed"
        | "checkout_session_created"
        | "checkout_session_expired"
        | "checkout_session_invalidated"
        | "fulfillment_created"
        | "fulfillment_updated"
        | "fulfillment_state_changed")
        | readonly ("created"
        | "line_item_added"
        | "line_item_updated"
        | "line_item_removed"
        | "discount_applied"
        | "discount_removed"
        | "tax_updated"
        | "requested_tip_added"
        | "requested_tip_updated"
        | "requested_tip_removed"
        | "charge_added"
        | "charge_updated"
        | "charge_removed"
        | "charge_fulfillment_updated"
        | "order_edited"
        | "order_updated"
        | "adjustment"
        | "closed"
        | "payment"
        | "payment_failed"
        | "refund"
        | "refund_failed"
        | "checkout_session_created"
        | "checkout_session_expired"
        | "checkout_session_invalidated"
        | "fulfillment_created"
        | "fulfillment_updated"
        | "fulfillment_state_changed")[]>;
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
export type OrdersListEditsParams = {
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
    /** Inclusive lower bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
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
export type OrdersListParams = {
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
    /** Filter by customer ID. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". */
    "customer_id"?: InputValue<string>;
    /**
     * Filter to orders with any line item referencing this product ID. Bundle lines don't match
     * their component products. An unknown product ID returns an empty page. pattern:
     * ^prod_[0-9A-HJKMNP-TV-Z]{26}$. Example: "prod_01KEZF7C00BVSHCNWVH528HB66".
     */
    "product_id"?: InputValue<string>;
    /**
     * Filter to orders with any line item referencing this variant ID. Bundle lines don't match
     * their component variants. An unknown variant ID returns an empty page. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id"?: InputValue<string>;
    /**
     * Filter to orders whose buyer_email or linked customer's email equals this address, compared
     * case-insensitively after trimming, with accents preserved. Requires a bare email address.
     * Format: email. Example: "buyer@example.com".
     */
    "email"?: InputValue<string>;
    /**
     * Exact-match filter on order IDs. Matches any of up to 100 distinct IDs. Unknown IDs and
     * orders outside your merchant or environment are absent. Other filters still apply, and
     * results keep the list's ordering and pagination. Keep the same ID set on subsequent pages.
     * anyOf[1] (Value): Array of string. minItems: 1. maxItems: 100. Example:
     * "ord_01ARZ3NDEKTSV4RRFFQ69G5FAV". anyOf[1][] (Value): string. pattern:
     * ^ord_[0-9A-HJKMNP-TV-Z]{26}$. anyOf[2] (Value): string. pattern:
     * ^ord_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "order_id"?: InputValue<(string) | readonly (string)[]>;
    /**
     * Why a closed order closed. Matches orders closed for any reason given. Values are trimmed
     * and deduplicated in first-seen order; empty or unknown entries are rejected. Values within
     * this filter are ORed; separate filters are ANDed. [] enum: "paid", "closed_by_merchant",
     * "checkout_expired", "written_off", "superseded", "return_resolution_canceled", "other".
     * Value enum: "paid", "closed_by_merchant", "checkout_expired", "written_off", "superseded",
     * "return_resolution_canceled", "other". anyOf[1] (Value): Array of string. minItems: 1. []
     * enum: "paid", "closed_by_merchant", "checkout_expired", "written_off", "superseded",
     * "return_resolution_canceled", "other". anyOf[1][] (Value): string. Value enum: "paid",
     * "closed_by_merchant", "checkout_expired", "written_off", "superseded",
     * "return_resolution_canceled", "other". anyOf[2] (Value): string. Value enum: "paid",
     * "closed_by_merchant", "checkout_expired", "written_off", "superseded",
     * "return_resolution_canceled", "other".
     */
    "closed_reason"?: InputValue<("paid"
        | "closed_by_merchant"
        | "checkout_expired"
        | "written_off"
        | "superseded"
        | "return_resolution_canceled"
        | "other")
        | readonly ("paid"
        | "closed_by_merchant"
        | "checkout_expired"
        | "written_off"
        | "superseded"
        | "return_resolution_canceled"
        | "other")[]>;
    /**
     * Order status: open or closed. Selecting open and closed includes both statuses. Values are
     * trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values
     * within this filter are ORed; separate filters are ANDed. [] enum: "open", "closed". Value
     * enum: "open", "closed". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "open",
     * "closed". anyOf[1][] (Value): string. Value enum: "open", "closed". anyOf[2] (Value):
     * string. Value enum: "open", "closed".
     */
    "status"?: InputValue<("open" | "closed") | readonly ("open" | "closed")[]>;
    /**
     * Filter by settled collection status. Values are trimmed and deduplicated in first-seen
     * order; empty or unknown entries are rejected. Values within this filter are ORed; separate
     * filters are ANDed. [] enum: "unpaid", "partially_paid", "paid". Value enum: "unpaid",
     * "partially_paid", "paid". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "unpaid",
     * "partially_paid", "paid". anyOf[1][] (Value): string. Value enum: "unpaid",
     * "partially_paid", "paid". anyOf[2] (Value): string. Value enum: "unpaid", "partially_paid",
     * "paid".
     */
    "payment_status"?: InputValue<("unpaid" | "partially_paid" | "paid") | readonly ("unpaid" | "partially_paid" | "paid")[]>;
    /**
     * Filter by refund progress. Values are trimmed and deduplicated in first-seen order; empty or
     * unknown entries are rejected. Values within this filter are ORed; separate filters are
     * ANDed. [] enum: "none", "partially_refunded", "refunded". Value enum: "none",
     * "partially_refunded", "refunded". anyOf[1] (Value): Array of string. minItems: 1. [] enum:
     * "none", "partially_refunded", "refunded". anyOf[1][] (Value): string. Value enum: "none",
     * "partially_refunded", "refunded". anyOf[2] (Value): string. Value enum: "none",
     * "partially_refunded", "refunded".
     */
    "refund_status"?: InputValue<("none" | "partially_refunded" | "refunded")
        | readonly ("none" | "partially_refunded" | "refunded")[]>;
    /**
     * Filter by aggregate order fulfillment status. Values are trimmed and deduplicated in
     * first-seen order; empty or unknown entries are rejected. Values within this filter are ORed;
     * separate filters are ANDed. [] enum: "not_fulfilled", "partially_fulfilled", "fulfilled",
     * "canceled", "not_applicable", "closed". Value enum: "not_fulfilled", "partially_fulfilled",
     * "fulfilled", "canceled", "not_applicable", "closed". anyOf[1] (Value): Array of string.
     * minItems: 1. [] enum: "not_fulfilled", "partially_fulfilled", "fulfilled", "canceled",
     * "not_applicable", "closed". anyOf[1][] (Value): string. Value enum: "not_fulfilled",
     * "partially_fulfilled", "fulfilled", "canceled", "not_applicable", "closed". anyOf[2]
     * (Value): string. Value enum: "not_fulfilled", "partially_fulfilled", "fulfilled",
     * "canceled", "not_applicable", "closed".
     */
    "fulfillment_status"?: InputValue<("not_fulfilled" | "partially_fulfilled" | "fulfilled" | "canceled" | "not_applicable" | "closed")
        | readonly ("not_fulfilled" | "partially_fulfilled" | "fulfilled" | "canceled" | "not_applicable" | "closed")[]>;
    /** Filter by merchant-visible order number. */
    "order_number"?: InputValue<string>;
    /**
     * Filter by whether any tracked line has units waiting for stock. False includes orders with
     * no backordered units.
     */
    "has_backordered_quantity"?: InputValue<boolean>;
    /**
     * Filter by whether any required fulfillment quantity is unassigned. True includes orders with
     * a positive sum of line fulfillment_quantities.unassigned_quantity; false includes orders
     * with no unassigned quantity, including orders that need no fulfillment.
     */
    "has_unassigned_fulfillment_quantity"?: InputValue<boolean>;
    /**
     * Filter by whether the order has an open fulfillment. A fulfillment remains open until it
     * completes, is canceled, fails, or is marked as a no-show. False includes orders with no
     * fulfillments.
     */
    "has_open_fulfillment"?: InputValue<boolean>;
    /**
     * Exact-match filter on the caller-owned external reference ID. minLength: 1. maxLength: 255.
     * Example: "warehouse-1842".
     */
    "external_reference_id"?: InputValue<string>;
    /**
     * Filter by order origin. Values are trimmed and deduplicated in first-seen order; empty or
     * unknown entries are rejected. Values within this filter are ORed; separate filters are
     * ANDed. [] enum: "virtual_terminal", "payment_link", "checkout", "api", "subscription". Value
     * enum: "virtual_terminal", "payment_link", "checkout", "api", "subscription". anyOf[1]
     * (Value): Array of string. minItems: 1. [] enum: "virtual_terminal", "payment_link",
     * "checkout", "api", "subscription". anyOf[1][] (Value): string. Value enum:
     * "virtual_terminal", "payment_link", "checkout", "api", "subscription". anyOf[2] (Value):
     * string. Value enum: "virtual_terminal", "payment_link", "checkout", "api", "subscription".
     */
    "origin"?: InputValue<("virtual_terminal" | "payment_link" | "checkout" | "api" | "subscription")
        | readonly ("virtual_terminal" | "payment_link" | "checkout" | "api" | "subscription")[]>;
    /**
     * Search across order_id, order number, external_reference_id, fulfillment
     * external_reference_id, buyer_email, notes, and line item names. The linked customer's name
     * and email aren't searched; use email or customer_id to find a customer's orders. Text fields
     * match any part of the value, and %, _ and \ are ordinary characters, not wildcards. IDs
     * match from the start and need the type prefix, such as ord_01.
     */
    "query"?: InputValue<string>;
    /** Filter by subscription ID. Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM". */
    "subscription_id"?: InputValue<string>;
    /** Filter by whether the subscriber changed delivery after this order was paid. */
    "subscription_delivery_changed"?: InputValue<boolean>;
    /**
     * Filter by the Return that created a replacement order. Example:
     * "ret_01KEZF7C00PG93650ZKVQNGF7X".
     */
    "return_id"?: InputValue<string>;
    /**
     * Filter by the ReturnResolution that created a replacement order. Example:
     * "retres_01KEZF7C00C7RZJN31W9SGMEQ3".
     */
    "return_resolution_id"?: InputValue<string>;
    /**
     * Filter by the payment link whose checkout created the order. Example:
     * "pl_01KEZF7C007WDMA5P9BPZ8J2AM".
     */
    "payment_link_id"?: InputValue<string>;
    /**
     * Inclusive lower bound on pricing_amounts.total_money.amount. Requires currency. Format:
     * int64. minimum: 1. Example: 500.
     */
    "min_amount"?: InputValue<number>;
    /**
     * Inclusive upper bound on pricing_amounts.total_money.amount. Requires currency. Format:
     * int64. minimum: 1. Example: 500.
     */
    "max_amount"?: InputValue<number>;
    /** ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD". */
    "currency"?: InputValue<string>;
    /**
     * Field to sort by. Defaults to created_at; ties are broken by order_id. Default:
     * "created_at". Value enum: "created_at", "updated_at",
     * "settlement_amounts.outstanding_money", "pricing_amounts.total_money".
     */
    "sort_by"?: InputValue<"created_at" | "updated_at" | "settlement_amounts.outstanding_money" | "pricing_amounts.total_money">;
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
     * Include related objects in the response. Supported expansions: customer, subscription,
     * subscription_plan. Include the requested related resources using scoped batch reads for this
     * page. Each relationship requires its existing target read scopes. Expansion changes the
     * representation without changing pagination tokens. Limits: at most 10 unique expand paths
     * per request. [] enum: "customer", "subscription", "subscription_plan". Value enum:
     * "customer", "subscription", "subscription_plan". anyOf[1] (Value): Array of string. [] enum:
     * "customer", "subscription", "subscription_plan". anyOf[1][] (Value): string. Value enum:
     * "customer", "subscription", "subscription_plan". anyOf[2] (Value): string. Value enum:
     * "customer", "subscription", "subscription_plan".
     */
    "expand"?: InputValue<("customer" | "subscription" | "subscription_plan")
        | readonly ("customer" | "subscription" | "subscription_plan")[]>;
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
export type OrdersListPaymentAttemptsParams = {
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
     * Opaque, signed next_page_token from the previous response, bound to the list and caller.
     * Omit on the first request. You may change `page_size` between pages. Reuse it with the same
     * endpoint, filters, sort, and request context. Do not parse or construct tokens. An altered,
     * invalid, expired, or mismatched token returns a validation error.
     */
    "page_token"?: InputValue<string>;
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
export type OrdersPayParams = (PayOrderRequestInput)
    & {
    /**
     * A stable random device identifier, independent of the order or checkout session. Required
     * for checkout-session gift card purchases. Keep it for subsequent purchases from the same
     * device; it grants no access. pattern: ^[a-f0-9]{32}$.
     */
    "Flint-Buyer-Device"?: InputValue<string>;
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
export type OrdersRemoveDiscountsParams = (RemoveDiscountsRequestInput)
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
export type OrdersRemoveGiftCardParams = {
    /**
     * Order version from the last order read. The mutation fails if the order changed. Format:
     * int64. minimum: 1.
     */
    "expected_version": InputValue<number>;
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
export type OrdersRepriceDiscountsParams = (InputValue<RepriceDiscountsRequestInput> | {
    "expected_version"?: never;
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
export type OrdersResolveInventoryExceptionParams = (InputValue<ResolveOrderInventoryExceptionRequestInput> | {
    "reason_message"?: never;
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
export type OrdersRetryEditRefundParams = (InputValue<RetryOrderEditRefundRequestInput> | {
    "destinations"?: never;
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
export type OrdersSendReceiptParams = (InputValue<SendOrderReceiptRequestInput> | {
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
export type OrdersUpdateChargeParams = (InputValue<UpdateOrderChargeRequestInput>)
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
export type OrdersUpdateLineItemParams = (InputValue<UpdateLineItemRequestInput>)
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
export type OrdersUpdateParams = (InputValue<UpdateOrderRequestInput>)
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
/** A package within a shipment. */
export type Package = {
    /** Carrier transporting the package. */
    "carrier"?: string;
    /** Creation timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /** Package delivery timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "delivered_at"?: string;
    /**
     * Physical length, width, and height of the package. Package or item dimensions as `length`,
     * `width`, and `height` in the given `unit`.
     */
    "dimensions"?: Dimensions;
    /**
     * When the carrier or merchant expects this package to arrive. Null when no estimate is set.
     * Retained after delivery as history. This estimate is separate from the fulfillment's
     * promised shipment window. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "expected_delivery_at"?: string | null;
    /**
     * Caller-owned identifier for this resource in an external system. Requires external_system.
     * External references are not unique. Use Idempotency-Key for retries. maxLength: 255.
     * Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Name of the external system that external_reference_id belongs to. External references are
     * not unique. Use Idempotency-Key for retries.
     */
    "external_system"?: string;
    /** Fulfillment whose items are in the package. Example: "ful_01KEZF7C00F24WVSTTWR1FQX5T". */
    "fulfillment_id": string;
    /**
     * HTTPS shipping-label URL supplied by your integration. Non-Flint URLs require
     * external_system for provenance. Flint does not host the label file. Omitted for a checkout
     * session credential that doesn't act for the customer the buyer verified.
     */
    "label_url"?: string;
    /**
     * Caller-owned key-value metadata associated with the package. Caller-owned key-value data
     * stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned.
     * Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those
     * limits may not satisfy them.
     */
    "metadata"?: MetadataMap;
    /**
     * Order summary returned when the order relationship is expanded. Present only when `expand`
     * includes `order`; `null` when expanded and there is no related order. anyOf[1] (Value):
     * {@link ExpandedOrderSummary}. An order's summary fields, including status, payment and
     * refund status, and pricing and settlement amounts, returned when the order is expanded.
     * anyOf[2] (Value): null.
     */
    "order"?: ((ExpandedOrderSummary) | (null));
    /** Order whose items are in the package. Example: "ord_01KEZF7C0054GQKJ142A8X367A". */
    "order_id": string;
    /** Stable identifier of the package. Example: "pkg_01KEZF7C00ZZA16BJCEJBWKJ5R". */
    "package_id": string;
    /**
     * Return this package belongs to. Present only on packages of return shipments. Example:
     * "ret_01KEZF7C00PG93650ZKVQNGF7X".
     */
    "return_id"?: string;
    /**
     * Return line quantities allocated to this parcel. Present only on packages of return
     * shipments. [] (Value): {@link ReturnResolutionLineItemRequest}. A return line and the
     * quantity placed in a return shipment or package.
     */
    "return_line_items"?: Array<ReturnResolutionLineItemRequest>;
    /** Carrier service used for the package. */
    "service_code"?: string;
    /** Shipment carrying this package. Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68". */
    "shipment_id": string;
    /** Package handoff timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "shipped_at"?: string;
    /**
     * Current package lifecycle state. Package states are the source used to derive shipment
     * status. - `created`: The package record exists but has not been packed or handed off. -
     * `packed`: The package is packed and awaiting carrier handoff. - `shipped`: The package was
     * handed to the carrier. - `in_transit`: The carrier is moving the package through its
     * network. - `out_for_delivery`: The package is on its final delivery route. - `delivered`:
     * The carrier reported successful delivery. - `delivery_attempted`: The carrier attempted
     * delivery but did not complete it. Follow the carrier instructions before retrying delivery.
     * - `exception`: A carrier exception is blocking normal progress. Resolve the carrier-reported
     * issue. - `returned`: The package was returned toward or to its origin. - `voided`: The
     * package was voided and will not continue through delivery. Value enum: "created", "packed",
     * "shipped", "in_transit", "out_for_delivery", "delivered", "delivery_attempted", "exception",
     * "returned", "voided".
     */
    "status": "created"
        | "packed"
        | "shipped"
        | "in_transit"
        | "out_for_delivery"
        | "delivered"
        | "delivery_attempted"
        | "exception"
        | "returned"
        | "voided"
        | (string & {});
    /** Additional explanation of the package's current status. */
    "status_reason"?: string;
    /**
     * Lifecycle actions Flint accepts now. mark_in_transit can repeat while in transit to refresh
     * expected_delivery_at. [] enum: "mark_delivered", "mark_delivery_attempted",
     * "mark_exception", "mark_in_transit", "mark_out_for_delivery", "mark_packed",
     * "mark_returned", "mark_shipped", "void". [] (Value): string. Value enum: "mark_delivered",
     * "mark_delivery_attempted", "mark_exception", "mark_in_transit", "mark_out_for_delivery",
     * "mark_packed", "mark_returned", "mark_shipped", "void".
     */
    "supported_actions": Array<"mark_delivered"
        | "mark_delivery_attempted"
        | "mark_exception"
        | "mark_in_transit"
        | "mark_out_for_delivery"
        | "mark_packed"
        | "mark_returned"
        | "mark_shipped"
        | "void"
        | (string & {})>;
    /**
     * Omitted for a checkout session credential that doesn't act for the customer the buyer
     * verified.
     */
    "tracking_number"?: string;
    /**
     * Absolute HTTPS carrier tracking URL. Embedded URL credentials are rejected. Omitted for a
     * checkout session credential that doesn't act for the customer the buyer verified.
     */
    "tracking_url"?: string;
    /** Last update timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "updated_at": string;
    /** Monotonic package version for expected_version checks. Format: uint64. minimum: 1. */
    "version": number;
    /**
     * Physical weight of the package. A weight value in grams, kilograms, ounces, or pounds, used
     * in delivery profile configuration.
     */
    "weight"?: Weight;
};
/** The `created` variant of `PackageCreateInput`. */
export type PackageCreateInputCreated = ({
    /**
     * Controls buyer email handling. Omit or use send to send when recipient, template, and
     * deduplication rules allow it. Use suppress when another system owns buyer messaging. Value
     * enum: "send", "suppress".
     */
    "buyer_notification_behavior"?: "send" | "suppress" | (string & {});
    /** Carrier that handles the package. minLength: 1. */
    "carrier"?: string;
    /**
     * Dimensions of the package. Package or item dimensions as `length`, `width`, and `height` in
     * the given `unit`.
     */
    "dimensions"?: Dimensions;
    /**
     * When the carrier or merchant expects this package to arrive. Past dates are allowed. Send
     * null to clear it; omit to leave it unchanged on updates and transitions. Format: date-time.
     * minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "expected_delivery_at"?: string | null;
    /**
     * Caller-owned identifier for this resource in an external system. Requires external_system.
     * External references are not unique. Use Idempotency-Key for retries. minLength: 1.
     * maxLength: 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Name of the external system that external_reference_id belongs to. External references are
     * not unique. Use Idempotency-Key for retries. minLength: 1.
     */
    "external_system"?: string;
    /**
     * Independent package-item collection. Inline creation uses the child-create shape and commits
     * atomically; edit items through the package item routes after creation. Each order line may
     * appear once. minItems: 1. maxItems: 100. [] (Value): {@link CreatePackageItemRequest}. The
     * request body for: Create package item.
     */
    "items"?: Array<CreatePackageItemRequest>;
    /**
     * HTTPS shipping-label URL supplied by your integration. Non-Flint URLs require
     * external_system for provenance. Flint does not host the label file. minLength: 1.
     */
    "label_url"?: string;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataMap;
    /**
     * Required for a package on a return shipment: allocates quantities from the shipment's
     * return_line_items to this parcel. Rejected on outbound shipments. [] (Value): {@link
     * ReturnResolutionLineItemRequest}. A return line and the quantity placed in a return shipment
     * or package.
     */
    "return_line_items"?: Array<ReturnResolutionLineItemRequest>;
    /** Carrier's code for the shipping service used. minLength: 1. */
    "service_code"?: string;
    /**
     * Package handoff time. Defaults to request time. Only allowed with status shipped. Format:
     * date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "shipped_at"?: string;
    /**
     * Outbound packages can start as created or shipped. Return packages must start as created,
     * omit items, and include return_line_items. Use mark_shipped after the buyer hands over the
     * return package. Value enum: "created".
     */
    "status": "created" | (string & {});
    /** minLength: 1. */
    "status_reason"?: string;
    /** Carrier tracking number for the package. minLength: 1. */
    "tracking_number"?: string;
    /** Absolute HTTPS carrier tracking URL. Embedded URL credentials are rejected. minLength: 1. */
    "tracking_url"?: string;
    /**
     * Weight of the package. A weight value in grams, kilograms, ounces, or pounds, used in
     * delivery profile configuration.
     */
    "weight"?: Weight;
});
/** The `created` variant of `PackageCreateInput`. */
export type PackageCreateInputCreatedInput = ({
    /**
     * Controls buyer email handling. Omit or use send to send when recipient, template, and
     * deduplication rules allow it. Use suppress when another system owns buyer messaging. Value
     * enum: "send", "suppress".
     */
    "buyer_notification_behavior"?: "send" | "suppress";
    /** Carrier that handles the package. minLength: 1. */
    "carrier"?: string;
    /**
     * Dimensions of the package. Package or item dimensions as `length`, `width`, and `height` in
     * the given `unit`.
     */
    "dimensions"?: DimensionsRequestInput;
    /**
     * When the carrier or merchant expects this package to arrive. Past dates are allowed. Send
     * null to clear it; omit to leave it unchanged on updates and transitions. Format: date-time.
     * minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "expected_delivery_at"?: string | globalThis.Date | null;
    /**
     * Caller-owned identifier for this resource in an external system. Requires external_system.
     * External references are not unique. Use Idempotency-Key for retries. minLength: 1.
     * maxLength: 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Name of the external system that external_reference_id belongs to. External references are
     * not unique. Use Idempotency-Key for retries. minLength: 1.
     */
    "external_system"?: string;
    /**
     * Independent package-item collection. Inline creation uses the child-create shape and commits
     * atomically; edit items through the package item routes after creation. Each order line may
     * appear once. minItems: 1. maxItems: 100. [] (Value): {@link CreatePackageItemRequestInput}.
     * The request body for: Create package item.
     */
    "items"?: Array<CreatePackageItemRequestInput>;
    /**
     * HTTPS shipping-label URL supplied by your integration. Non-Flint URLs require
     * external_system for provenance. Flint does not host the label file. minLength: 1.
     */
    "label_url"?: string;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /**
     * Required for a package on a return shipment: allocates quantities from the shipment's
     * return_line_items to this parcel. Rejected on outbound shipments. [] (Value): {@link
     * ReturnShipmentLineItemAllocationRequestInput}. A return line and the quantity placed in a
     * return shipment or package.
     */
    "return_line_items"?: Array<ReturnShipmentLineItemAllocationRequestInput>;
    /** Carrier's code for the shipping service used. minLength: 1. */
    "service_code"?: string;
    /**
     * Package handoff time. Defaults to request time. Only allowed with status shipped. Format:
     * date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "shipped_at"?: string | globalThis.Date;
    /**
     * Outbound packages can start as created or shipped. Return packages must start as created,
     * omit items, and include return_line_items. Use mark_shipped after the buyer hands over the
     * return package. Value enum: "created".
     */
    "status": "created";
    /** minLength: 1. */
    "status_reason"?: string;
    /** Carrier tracking number for the package. minLength: 1. */
    "tracking_number"?: string;
    /** Absolute HTTPS carrier tracking URL. Embedded URL credentials are rejected. minLength: 1. */
    "tracking_url"?: string;
    /**
     * Weight of the package. A weight value in grams, kilograms, ounces, or pounds, used in
     * delivery profile configuration.
     */
    "weight"?: WeightRequestInput;
})
    & (({
    "shipped_at"?: never;
}))
    & (({
    "buyer_notification_behavior"?: never;
}));
/** The `shipped` variant of `PackageCreateInput`. */
export type PackageCreateInputShipped = ({
    /**
     * Controls buyer email handling. Omit or use send to send when recipient, template, and
     * deduplication rules allow it. Use suppress when another system owns buyer messaging. Value
     * enum: "send", "suppress".
     */
    "buyer_notification_behavior"?: "send" | "suppress" | (string & {});
    /** Carrier that handles the package. minLength: 1. */
    "carrier"?: string;
    /**
     * Dimensions of the package. Package or item dimensions as `length`, `width`, and `height` in
     * the given `unit`.
     */
    "dimensions"?: Dimensions;
    /**
     * When the carrier or merchant expects this package to arrive. Past dates are allowed. Send
     * null to clear it; omit to leave it unchanged on updates and transitions. Format: date-time.
     * minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "expected_delivery_at"?: string | null;
    /**
     * Caller-owned identifier for this resource in an external system. Requires external_system.
     * External references are not unique. Use Idempotency-Key for retries. minLength: 1.
     * maxLength: 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Name of the external system that external_reference_id belongs to. External references are
     * not unique. Use Idempotency-Key for retries. minLength: 1.
     */
    "external_system"?: string;
    /**
     * Independent package-item collection. Inline creation uses the child-create shape and commits
     * atomically; edit items through the package item routes after creation. Each order line may
     * appear once. minItems: 1. maxItems: 100. [] (Value): {@link CreatePackageItemRequest}. The
     * request body for: Create package item.
     */
    "items"?: Array<CreatePackageItemRequest>;
    /**
     * HTTPS shipping-label URL supplied by your integration. Non-Flint URLs require
     * external_system for provenance. Flint does not host the label file. minLength: 1.
     */
    "label_url"?: string;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataMap;
    /**
     * Required for a package on a return shipment: allocates quantities from the shipment's
     * return_line_items to this parcel. Rejected on outbound shipments. [] (Value): {@link
     * ReturnResolutionLineItemRequest}. A return line and the quantity placed in a return shipment
     * or package.
     */
    "return_line_items"?: Array<ReturnResolutionLineItemRequest>;
    /** Carrier's code for the shipping service used. minLength: 1. */
    "service_code"?: string;
    /**
     * Package handoff time. Defaults to request time. Only allowed with status shipped. Format:
     * date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "shipped_at"?: string;
    /**
     * Outbound packages can start as created or shipped. Return packages must start as created,
     * omit items, and include return_line_items. Use mark_shipped after the buyer hands over the
     * return package. Value enum: "shipped".
     */
    "status": "shipped" | (string & {});
    /** minLength: 1. */
    "status_reason"?: string;
    /** Carrier tracking number for the package. minLength: 1. */
    "tracking_number"?: string;
    /** Absolute HTTPS carrier tracking URL. Embedded URL credentials are rejected. minLength: 1. */
    "tracking_url"?: string;
    /**
     * Weight of the package. A weight value in grams, kilograms, ounces, or pounds, used in
     * delivery profile configuration.
     */
    "weight"?: Weight;
});
/** The `shipped` variant of `PackageCreateInput`. */
export type PackageCreateInputShippedInput = ({
    /**
     * Controls buyer email handling. Omit or use send to send when recipient, template, and
     * deduplication rules allow it. Use suppress when another system owns buyer messaging. Value
     * enum: "send", "suppress".
     */
    "buyer_notification_behavior"?: "send" | "suppress";
    /** Carrier that handles the package. minLength: 1. */
    "carrier"?: string;
    /**
     * Dimensions of the package. Package or item dimensions as `length`, `width`, and `height` in
     * the given `unit`.
     */
    "dimensions"?: DimensionsRequestInput;
    /**
     * When the carrier or merchant expects this package to arrive. Past dates are allowed. Send
     * null to clear it; omit to leave it unchanged on updates and transitions. Format: date-time.
     * minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "expected_delivery_at"?: string | globalThis.Date | null;
    /**
     * Caller-owned identifier for this resource in an external system. Requires external_system.
     * External references are not unique. Use Idempotency-Key for retries. minLength: 1.
     * maxLength: 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Name of the external system that external_reference_id belongs to. External references are
     * not unique. Use Idempotency-Key for retries. minLength: 1.
     */
    "external_system"?: string;
    /**
     * Independent package-item collection. Inline creation uses the child-create shape and commits
     * atomically; edit items through the package item routes after creation. Each order line may
     * appear once. minItems: 1. maxItems: 100. [] (Value): {@link CreatePackageItemRequestInput}.
     * The request body for: Create package item.
     */
    "items"?: Array<CreatePackageItemRequestInput>;
    /**
     * HTTPS shipping-label URL supplied by your integration. Non-Flint URLs require
     * external_system for provenance. Flint does not host the label file. minLength: 1.
     */
    "label_url"?: string;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /**
     * Required for a package on a return shipment: allocates quantities from the shipment's
     * return_line_items to this parcel. Rejected on outbound shipments. [] (Value): {@link
     * ReturnShipmentLineItemAllocationRequestInput}. A return line and the quantity placed in a
     * return shipment or package.
     */
    "return_line_items"?: Array<ReturnShipmentLineItemAllocationRequestInput>;
    /** Carrier's code for the shipping service used. minLength: 1. */
    "service_code"?: string;
    /**
     * Package handoff time. Defaults to request time. Only allowed with status shipped. Format:
     * date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "shipped_at"?: string | globalThis.Date;
    /**
     * Outbound packages can start as created or shipped. Return packages must start as created,
     * omit items, and include return_line_items. Use mark_shipped after the buyer hands over the
     * return package. Value enum: "shipped".
     */
    "status": "shipped";
    /** minLength: 1. */
    "status_reason"?: string;
    /** Carrier tracking number for the package. minLength: 1. */
    "tracking_number"?: string;
    /** Absolute HTTPS carrier tracking URL. Embedded URL credentials are rejected. minLength: 1. */
    "tracking_url"?: string;
    /**
     * Weight of the package. A weight value in grams, kilograms, ounces, or pounds, used in
     * delivery profile configuration.
     */
    "weight"?: WeightRequestInput;
})
    & (({
    "return_line_items"?: never;
}));
/** The request body for: Create package. */
export type PackageCreateRequest = ({
    /**
     * Controls buyer email handling. Omit or use send to send when recipient, template, and
     * deduplication rules allow it. Use suppress when another system owns buyer messaging. Value
     * enum: "send", "suppress".
     */
    "buyer_notification_behavior"?: "send" | "suppress" | (string & {});
    /** Carrier that handles the package. minLength: 1. */
    "carrier"?: string;
    /**
     * Dimensions of the package. Package or item dimensions as `length`, `width`, and `height` in
     * the given `unit`.
     */
    "dimensions"?: Dimensions;
    /**
     * When the carrier or merchant expects this package to arrive. Past dates are allowed. Send
     * null to clear it; omit to leave it unchanged on updates and transitions. Format: date-time.
     * minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "expected_delivery_at"?: string | null;
    /**
     * Caller-owned identifier for this resource in an external system. Requires external_system.
     * External references are not unique. Use Idempotency-Key for retries. minLength: 1.
     * maxLength: 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Name of the external system that external_reference_id belongs to. External references are
     * not unique. Use Idempotency-Key for retries. minLength: 1.
     */
    "external_system"?: string;
    /**
     * Independent package-item collection. Inline creation uses the child-create shape and commits
     * atomically; edit items through the package item routes after creation. Each order line may
     * appear once. minItems: 1. maxItems: 100. [] (Value): {@link CreatePackageItemRequest}. The
     * request body for: Create package item.
     */
    "items"?: Array<CreatePackageItemRequest>;
    /**
     * HTTPS shipping-label URL supplied by your integration. Non-Flint URLs require
     * external_system for provenance. Flint does not host the label file. minLength: 1.
     */
    "label_url"?: string;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataMap;
    /**
     * Required for a package on a return shipment: allocates quantities from the shipment's
     * return_line_items to this parcel. Rejected on outbound shipments. [] (Value): {@link
     * ReturnResolutionLineItemRequest}. A return line and the quantity placed in a return shipment
     * or package.
     */
    "return_line_items"?: Array<ReturnResolutionLineItemRequest>;
    /** Carrier's code for the shipping service used. minLength: 1. */
    "service_code"?: string;
    /**
     * Package handoff time. Defaults to request time. Only allowed with status shipped. Format:
     * date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "shipped_at"?: string;
    /**
     * Outbound packages can start as created or shipped. Return packages must start as created,
     * omit items, and include return_line_items. Use mark_shipped after the buyer hands over the
     * return package. Value enum: "created", "shipped".
     */
    "status": "created" | "shipped" | (string & {});
    /** Additional explanation of the package's starting status. minLength: 1. */
    "status_reason"?: string;
    /** Carrier tracking number for the package. minLength: 1. */
    "tracking_number"?: string;
    /** Absolute HTTPS carrier tracking URL. Embedded URL credentials are rejected. minLength: 1. */
    "tracking_url"?: string;
    /**
     * Weight of the package. A weight value in grams, kilograms, ounces, or pounds, used in
     * delivery profile configuration.
     */
    "weight"?: Weight;
})
    & ((Exclude<PackageCreateInputCreated & object, readonly unknown[]>)
    | (Exclude<PackageCreateInputShipped & object, readonly unknown[]>)
    | (Record<string, unknown>));
/** The request body for: Create package. */
export type PackageCreateRequestInput = ({
    /**
     * Controls buyer email handling. Omit or use send to send when recipient, template, and
     * deduplication rules allow it. Use suppress when another system owns buyer messaging. Value
     * enum: "send", "suppress".
     */
    "buyer_notification_behavior"?: "send" | "suppress";
    /** Carrier that handles the package. minLength: 1. */
    "carrier"?: string;
    /**
     * Dimensions of the package. Package or item dimensions as `length`, `width`, and `height` in
     * the given `unit`.
     */
    "dimensions"?: DimensionsRequestInput;
    /**
     * When the carrier or merchant expects this package to arrive. Past dates are allowed. Send
     * null to clear it; omit to leave it unchanged on updates and transitions. Format: date-time.
     * minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "expected_delivery_at"?: string | globalThis.Date | null;
    /**
     * Caller-owned identifier for this resource in an external system. Requires external_system.
     * External references are not unique. Use Idempotency-Key for retries. minLength: 1.
     * maxLength: 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Name of the external system that external_reference_id belongs to. External references are
     * not unique. Use Idempotency-Key for retries. minLength: 1.
     */
    "external_system"?: string;
    /**
     * Independent package-item collection. Inline creation uses the child-create shape and commits
     * atomically; edit items through the package item routes after creation. Each order line may
     * appear once. minItems: 1. maxItems: 100. [] (Value): {@link CreatePackageItemRequestInput}.
     * The request body for: Create package item.
     */
    "items"?: Array<CreatePackageItemRequestInput>;
    /**
     * HTTPS shipping-label URL supplied by your integration. Non-Flint URLs require
     * external_system for provenance. Flint does not host the label file. minLength: 1.
     */
    "label_url"?: string;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /**
     * Required for a package on a return shipment: allocates quantities from the shipment's
     * return_line_items to this parcel. Rejected on outbound shipments. [] (Value): {@link
     * ReturnShipmentLineItemAllocationRequestInput}. A return line and the quantity placed in a
     * return shipment or package.
     */
    "return_line_items"?: Array<ReturnShipmentLineItemAllocationRequestInput>;
    /** Carrier's code for the shipping service used. minLength: 1. */
    "service_code"?: string;
    /**
     * Package handoff time. Defaults to request time. Only allowed with status shipped. Format:
     * date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "shipped_at"?: string | globalThis.Date;
    /**
     * Outbound packages can start as created or shipped. Return packages must start as created,
     * omit items, and include return_line_items. Use mark_shipped after the buyer hands over the
     * return package. Value enum: "created", "shipped".
     */
    "status": "created" | "shipped";
    /** Additional explanation of the package's starting status. minLength: 1. */
    "status_reason"?: string;
    /** Carrier tracking number for the package. minLength: 1. */
    "tracking_number"?: string;
    /** Absolute HTTPS carrier tracking URL. Embedded URL credentials are rejected. minLength: 1. */
    "tracking_url"?: string;
    /**
     * Weight of the package. A weight value in grams, kilograms, ounces, or pounds, used in
     * delivery profile configuration.
     */
    "weight"?: WeightRequestInput;
})
    & ((Exclude<PackageCreateInputCreatedInput & object, readonly unknown[]>)
    | (Exclude<PackageCreateInputShippedInput & object, readonly unknown[]>));
export type PackageCreatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "carrier"?: string;
            "created_at": string;
            "delivered_at"?: string;
            "dimensions"?: Dimensions;
            "expected_delivery_at"?: string | null;
            "external_reference_id"?: string;
            "external_system"?: string;
            "fulfillment_id": string;
            "label_url"?: string;
            "metadata"?: MetadataMap;
            "order"?: ((ExpandedOrderSummary) | (null));
            "order_id": string;
            "package_id": string;
            "return_id"?: string;
            "return_line_items"?: Array<ReturnResolutionLineItemRequest>;
            "service_code"?: string;
            "shipment_id": string;
            "shipped_at"?: string;
            "status": "created"
                | "packed"
                | "shipped"
                | "in_transit"
                | "out_for_delivery"
                | "delivered"
                | "delivery_attempted"
                | "exception"
                | "returned"
                | "voided"
                | (string & {});
            "status_reason"?: string;
            "supported_actions": Array<"mark_delivered"
                | "mark_delivery_attempted"
                | "mark_exception"
                | "mark_in_transit"
                | "mark_out_for_delivery"
                | "mark_packed"
                | "mark_returned"
                | "mark_shipped"
                | "void"
                | (string & {})>;
            "tracking_number"?: string;
            "tracking_url"?: string;
            "updated_at": string;
            "version": number;
            "weight"?: Weight;
        };
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "package.created";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "carrier"?: string;
            "created_at": string;
            "delivered_at"?: string;
            "dimensions"?: Dimensions;
            "expected_delivery_at"?: string | null;
            "external_reference_id"?: string;
            "external_system"?: string;
            "fulfillment_id": string;
            "label_url"?: string;
            "metadata"?: MetadataMap;
            "order"?: ((ExpandedOrderSummary) | (null));
            "order_id": string;
            "package_id": string;
            "return_id"?: string;
            "return_line_items"?: Array<ReturnResolutionLineItemRequest>;
            "service_code"?: string;
            "shipment_id": string;
            "shipped_at"?: string;
            "status": "created"
                | "packed"
                | "shipped"
                | "in_transit"
                | "out_for_delivery"
                | "delivered"
                | "delivery_attempted"
                | "exception"
                | "returned"
                | "voided"
                | (string & {});
            "status_reason"?: string;
            "supported_actions": Array<"mark_delivered"
                | "mark_delivery_attempted"
                | "mark_exception"
                | "mark_in_transit"
                | "mark_out_for_delivery"
                | "mark_packed"
                | "mark_returned"
                | "mark_shipped"
                | "void"
                | (string & {})>;
            "tracking_number"?: string;
            "tracking_url"?: string;
            "updated_at": string;
            "version": number;
            "weight"?: Weight;
        };
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "package.created";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "package.created";
});
/**
 * The `package.created` webhook payload for the `installed_merchants` event source. Fields shared
 * by partner webhook payloads.
 */
export type PackageCreatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.carrier (Optional): string. Carrier transporting the package.
     * object.created_at (Required): string. Creation timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.delivered_at (Optional): string. Package delivery timestamp.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". object.dimensions (Optional): {@link
     * Dimensions}. Physical length, width, and height of the package. Package or item dimensions
     * as `length`, `width`, and `height` in the given `unit`. object.expected_delivery_at
     * (Optional): string or null. When the carrier or merchant expects this package to arrive.
     * Null when no estimate is set. Retained after delivery as history. This estimate is separate
     * from the fulfillment's promised shipment window. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.external_reference_id (Optional): string. Caller-owned
     * identifier for this resource in an external system. Requires external_system. External
     * references are not unique. Use Idempotency-Key for retries. maxLength: 255. Example:
     * "warehouse-1842". object.external_system (Optional): string. Name of the external system
     * that external_reference_id belongs to. External references are not unique. Use
     * Idempotency-Key for retries. object.fulfillment_id (Required): string. Fulfillment whose
     * items are in the package. Example: "ful_01KEZF7C00F24WVSTTWR1FQX5T". object.label_url
     * (Optional): string. HTTPS shipping-label URL supplied by your integration. Non-Flint URLs
     * require external_system for provenance. Flint does not host the label file. Omitted for a
     * checkout session credential that doesn't act for the customer the buyer verified.
     * object.metadata (Optional): {@link MetadataMap}. Caller-owned key-value metadata associated
     * with the package. Caller-owned key-value data stored on a resource. Keys starting with
     * flint_ are reserved for Flint and are not returned. Writes follow the limits on
     * MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them.
     * object.order (Optional): {@link ExpandedOrderSummary} or null. Order summary returned when
     * the order relationship is expanded. Present only when `expand` includes `order`; `null` when
     * expanded and there is no related order. object.order.anyOf[1] (Value): {@link
     * ExpandedOrderSummary}. An order's summary fields, including status, payment and refund
     * status, and pricing and settlement amounts, returned when the order is expanded.
     * object.order.anyOf[2] (Value): null. object.order_id (Required): string. Order whose items
     * are in the package. Example: "ord_01KEZF7C0054GQKJ142A8X367A". object.package_id (Required):
     * string. Stable identifier of the package. Example: "pkg_01KEZF7C00ZZA16BJCEJBWKJ5R".
     * object.return_id (Optional): string. Return this package belongs to. Present only on
     * packages of return shipments. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X".
     * object.return_line_items (Optional): Array of {@link ReturnResolutionLineItemRequest}.
     * Return line quantities allocated to this parcel. Present only on packages of return
     * shipments. object.return_line_items[] (Value): {@link ReturnResolutionLineItemRequest}. A
     * return line and the quantity placed in a return shipment or package. object.service_code
     * (Optional): string. Carrier service used for the package. object.shipment_id (Required):
     * string. Shipment carrying this package. Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68".
     * object.shipped_at (Optional): string. Package handoff timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.status (Required): string. Current package lifecycle state.
     * Package states are the source used to derive shipment status. - `created`: The package
     * record exists but has not been packed or handed off. - `packed`: The package is packed and
     * awaiting carrier handoff. - `shipped`: The package was handed to the carrier. -
     * `in_transit`: The carrier is moving the package through its network. - `out_for_delivery`:
     * The package is on its final delivery route. - `delivered`: The carrier reported successful
     * delivery. - `delivery_attempted`: The carrier attempted delivery but did not complete it.
     * Follow the carrier instructions before retrying delivery. - `exception`: A carrier exception
     * is blocking normal progress. Resolve the carrier-reported issue. - `returned`: The package
     * was returned toward or to its origin. - `voided`: The package was voided and will not
     * continue through delivery. Value enum: "created", "packed", "shipped", "in_transit",
     * "out_for_delivery", "delivered", "delivery_attempted", "exception", "returned", "voided".
     * object.status_reason (Optional): string. Additional explanation of the package's current
     * status. object.supported_actions (Required): Array of string. Lifecycle actions Flint
     * accepts now. mark_in_transit can repeat while in transit to refresh expected_delivery_at. []
     * enum: "mark_delivered", "mark_delivery_attempted", "mark_exception", "mark_in_transit",
     * "mark_out_for_delivery", "mark_packed", "mark_returned", "mark_shipped", "void".
     * object.supported_actions[] (Value): string. Value enum: "mark_delivered",
     * "mark_delivery_attempted", "mark_exception", "mark_in_transit", "mark_out_for_delivery",
     * "mark_packed", "mark_returned", "mark_shipped", "void". object.tracking_number (Optional):
     * string. Omitted for a checkout session credential that doesn't act for the customer the
     * buyer verified. object.tracking_url (Optional): string. Absolute HTTPS carrier tracking URL.
     * Embedded URL credentials are rejected. Omitted for a checkout session credential that
     * doesn't act for the customer the buyer verified. object.updated_at (Required): string. Last
     * update timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.version
     * (Required): integer. Monotonic package version for expected_version checks. Format: uint64.
     * minimum: 1. object.weight (Optional): {@link Weight}. Physical weight of the package. A
     * weight value in grams, kilograms, ounces, or pounds, used in delivery profile configuration.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields. carrier
         * (Optional): string. Carrier transporting the package. created_at (Required): string.
         * Creation timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". delivered_at
         * (Optional): string. Package delivery timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". dimensions (Optional): {@link Dimensions}. Physical length,
         * width, and height of the package. Package or item dimensions as `length`, `width`, and
         * `height` in the given `unit`. expected_delivery_at (Optional): string or null. When the
         * carrier or merchant expects this package to arrive. Null when no estimate is set.
         * Retained after delivery as history. This estimate is separate from the fulfillment's
         * promised shipment window. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * external_reference_id (Optional): string. Caller-owned identifier for this resource in
         * an external system. Requires external_system. External references are not unique. Use
         * Idempotency-Key for retries. maxLength: 255. Example: "warehouse-1842". external_system
         * (Optional): string. Name of the external system that external_reference_id belongs to.
         * External references are not unique. Use Idempotency-Key for retries. fulfillment_id
         * (Required): string. Fulfillment whose items are in the package. Example:
         * "ful_01KEZF7C00F24WVSTTWR1FQX5T". label_url (Optional): string. HTTPS shipping-label URL
         * supplied by your integration. Non-Flint URLs require external_system for provenance.
         * Flint does not host the label file. Omitted for a checkout session credential that
         * doesn't act for the customer the buyer verified. metadata (Optional): {@link
         * MetadataMap}. Caller-owned key-value metadata associated with the package. Caller-owned
         * key-value data stored on a resource. Keys starting with flint_ are reserved for Flint
         * and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput;
         * maps written before those limits may not satisfy them. order (Optional): {@link
         * ExpandedOrderSummary} or null. Order summary returned when the order relationship is
         * expanded. Present only when `expand` includes `order`; `null` when expanded and there is
         * no related order. order.anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's
         * summary fields, including status, payment and refund status, and pricing and settlement
         * amounts, returned when the order is expanded. order.anyOf[2] (Value): null. order_id
         * (Required): string. Order whose items are in the package. Example:
         * "ord_01KEZF7C0054GQKJ142A8X367A". package_id (Required): string. Stable identifier of
         * the package. Example: "pkg_01KEZF7C00ZZA16BJCEJBWKJ5R". return_id (Optional): string.
         * Return this package belongs to. Present only on packages of return shipments. Example:
         * "ret_01KEZF7C00PG93650ZKVQNGF7X". return_line_items (Optional): Array of {@link
         * ReturnResolutionLineItemRequest}. Return line quantities allocated to this parcel.
         * Present only on packages of return shipments. return_line_items[] (Value): {@link
         * ReturnResolutionLineItemRequest}. A return line and the quantity placed in a return
         * shipment or package. service_code (Optional): string. Carrier service used for the
         * package. shipment_id (Required): string. Shipment carrying this package. Example:
         * "shp_01KEZF7C00Q2AFXWXHMCDR3F68". shipped_at (Optional): string. Package handoff
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". status (Required):
         * string. Current package lifecycle state. Package states are the source used to derive
         * shipment status. - `created`: The package record exists but has not been packed or
         * handed off. - `packed`: The package is packed and awaiting carrier handoff. - `shipped`:
         * The package was handed to the carrier. - `in_transit`: The carrier is moving the package
         * through its network. - `out_for_delivery`: The package is on its final delivery route. -
         * `delivered`: The carrier reported successful delivery. - `delivery_attempted`: The
         * carrier attempted delivery but did not complete it. Follow the carrier instructions
         * before retrying delivery. - `exception`: A carrier exception is blocking normal
         * progress. Resolve the carrier-reported issue. - `returned`: The package was returned
         * toward or to its origin. - `voided`: The package was voided and will not continue
         * through delivery. Value enum: "created", "packed", "shipped", "in_transit",
         * "out_for_delivery", "delivered", "delivery_attempted", "exception", "returned",
         * "voided". status_reason (Optional): string. Additional explanation of the package's
         * current status. supported_actions (Required): Array of string. Lifecycle actions Flint
         * accepts now. mark_in_transit can repeat while in transit to refresh
         * expected_delivery_at. [] enum: "mark_delivered", "mark_delivery_attempted",
         * "mark_exception", "mark_in_transit", "mark_out_for_delivery", "mark_packed",
         * "mark_returned", "mark_shipped", "void". supported_actions[] (Value): string. Value
         * enum: "mark_delivered", "mark_delivery_attempted", "mark_exception", "mark_in_transit",
         * "mark_out_for_delivery", "mark_packed", "mark_returned", "mark_shipped", "void".
         * tracking_number (Optional): string. Omitted for a checkout session credential that
         * doesn't act for the customer the buyer verified. tracking_url (Optional): string.
         * Absolute HTTPS carrier tracking URL. Embedded URL credentials are rejected. Omitted for
         * a checkout session credential that doesn't act for the customer the buyer verified.
         * updated_at (Required): string. Last update timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". version (Required): integer. Monotonic package version for
         * expected_version checks. Format: uint64. minimum: 1. weight (Optional): {@link Weight}.
         * Physical weight of the package. A weight value in grams, kilograms, ounces, or pounds,
         * used in delivery profile configuration.
         */
        "object": {
            /** Carrier transporting the package. */
            "carrier"?: string;
            /** Creation timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /** Package delivery timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "delivered_at"?: string;
            /**
             * Physical length, width, and height of the package. Package or item dimensions as
             * `length`, `width`, and `height` in the given `unit`.
             */
            "dimensions"?: Dimensions;
            /**
             * When the carrier or merchant expects this package to arrive. Null when no estimate
             * is set. Retained after delivery as history. This estimate is separate from the
             * fulfillment's promised shipment window. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "expected_delivery_at"?: string | null;
            /**
             * Caller-owned identifier for this resource in an external system. Requires
             * external_system. External references are not unique. Use Idempotency-Key for
             * retries. maxLength: 255. Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Name of the external system that external_reference_id belongs to. External
             * references are not unique. Use Idempotency-Key for retries.
             */
            "external_system"?: string;
            /**
             * Fulfillment whose items are in the package. Example:
             * "ful_01KEZF7C00F24WVSTTWR1FQX5T".
             */
            "fulfillment_id": string;
            /**
             * HTTPS shipping-label URL supplied by your integration. Non-Flint URLs require
             * external_system for provenance. Flint does not host the label file. Omitted for a
             * checkout session credential that doesn't act for the customer the buyer verified.
             */
            "label_url"?: string;
            /**
             * Caller-owned key-value metadata associated with the package. Caller-owned key-value
             * data stored on a resource. Keys starting with flint_ are reserved for Flint and are
             * not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps
             * written before those limits may not satisfy them.
             */
            "metadata"?: MetadataMap;
            /**
             * Order summary returned when the order relationship is expanded. Present only when
             * `expand` includes `order`; `null` when expanded and there is no related order.
             * anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary fields, including
             * status, payment and refund status, and pricing and settlement amounts, returned when
             * the order is expanded. anyOf[2] (Value): null.
             */
            "order"?: ((ExpandedOrderSummary) | (null));
            /** Order whose items are in the package. Example: "ord_01KEZF7C0054GQKJ142A8X367A". */
            "order_id": string;
            /** Stable identifier of the package. Example: "pkg_01KEZF7C00ZZA16BJCEJBWKJ5R". */
            "package_id": string;
            /**
             * Return this package belongs to. Present only on packages of return shipments.
             * Example: "ret_01KEZF7C00PG93650ZKVQNGF7X".
             */
            "return_id"?: string;
            /**
             * Return line quantities allocated to this parcel. Present only on packages of return
             * shipments. [] (Value): {@link ReturnResolutionLineItemRequest}. A return line and
             * the quantity placed in a return shipment or package.
             */
            "return_line_items"?: Array<ReturnResolutionLineItemRequest>;
            /** Carrier service used for the package. */
            "service_code"?: string;
            /** Shipment carrying this package. Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68". */
            "shipment_id": string;
            /** Package handoff timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "shipped_at"?: string;
            /**
             * Current package lifecycle state. Package states are the source used to derive
             * shipment status. - `created`: The package record exists but has not been packed or
             * handed off. - `packed`: The package is packed and awaiting carrier handoff. -
             * `shipped`: The package was handed to the carrier. - `in_transit`: The carrier is
             * moving the package through its network. - `out_for_delivery`: The package is on its
             * final delivery route. - `delivered`: The carrier reported successful delivery. -
             * `delivery_attempted`: The carrier attempted delivery but did not complete it. Follow
             * the carrier instructions before retrying delivery. - `exception`: A carrier
             * exception is blocking normal progress. Resolve the carrier-reported issue. -
             * `returned`: The package was returned toward or to its origin. - `voided`: The
             * package was voided and will not continue through delivery. Value enum: "created",
             * "packed", "shipped", "in_transit", "out_for_delivery", "delivered",
             * "delivery_attempted", "exception", "returned", "voided".
             */
            "status": "created"
                | "packed"
                | "shipped"
                | "in_transit"
                | "out_for_delivery"
                | "delivered"
                | "delivery_attempted"
                | "exception"
                | "returned"
                | "voided"
                | (string & {});
            /** Additional explanation of the package's current status. */
            "status_reason"?: string;
            /**
             * Lifecycle actions Flint accepts now. mark_in_transit can repeat while in transit to
             * refresh expected_delivery_at. [] enum: "mark_delivered", "mark_delivery_attempted",
             * "mark_exception", "mark_in_transit", "mark_out_for_delivery", "mark_packed",
             * "mark_returned", "mark_shipped", "void". [] (Value): string. Value enum:
             * "mark_delivered", "mark_delivery_attempted", "mark_exception", "mark_in_transit",
             * "mark_out_for_delivery", "mark_packed", "mark_returned", "mark_shipped", "void".
             */
            "supported_actions": Array<"mark_delivered"
                | "mark_delivery_attempted"
                | "mark_exception"
                | "mark_in_transit"
                | "mark_out_for_delivery"
                | "mark_packed"
                | "mark_returned"
                | "mark_shipped"
                | "void"
                | (string & {})>;
            /**
             * Omitted for a checkout session credential that doesn't act for the customer the
             * buyer verified.
             */
            "tracking_number"?: string;
            /**
             * Absolute HTTPS carrier tracking URL. Embedded URL credentials are rejected. Omitted
             * for a checkout session credential that doesn't act for the customer the buyer
             * verified.
             */
            "tracking_url"?: string;
            /** Last update timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Monotonic package version for expected_version checks. Format: uint64. minimum: 1.
             */
            "version": number;
            /**
             * Physical weight of the package. A weight value in grams, kilograms, ounces, or
             * pounds, used in delivery profile configuration.
             */
            "weight"?: Weight;
        };
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "package.created". */
    "event_type"?: "package.created";
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
 * The `package.created` webhook payload for the `merchant` event source. Fields shared by merchant
 * webhook payloads.
 */
export type PackageCreatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.carrier (Optional): string. Carrier transporting the package.
     * object.created_at (Required): string. Creation timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.delivered_at (Optional): string. Package delivery timestamp.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". object.dimensions (Optional): {@link
     * Dimensions}. Physical length, width, and height of the package. Package or item dimensions
     * as `length`, `width`, and `height` in the given `unit`. object.expected_delivery_at
     * (Optional): string or null. When the carrier or merchant expects this package to arrive.
     * Null when no estimate is set. Retained after delivery as history. This estimate is separate
     * from the fulfillment's promised shipment window. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.external_reference_id (Optional): string. Caller-owned
     * identifier for this resource in an external system. Requires external_system. External
     * references are not unique. Use Idempotency-Key for retries. maxLength: 255. Example:
     * "warehouse-1842". object.external_system (Optional): string. Name of the external system
     * that external_reference_id belongs to. External references are not unique. Use
     * Idempotency-Key for retries. object.fulfillment_id (Required): string. Fulfillment whose
     * items are in the package. Example: "ful_01KEZF7C00F24WVSTTWR1FQX5T". object.label_url
     * (Optional): string. HTTPS shipping-label URL supplied by your integration. Non-Flint URLs
     * require external_system for provenance. Flint does not host the label file. Omitted for a
     * checkout session credential that doesn't act for the customer the buyer verified.
     * object.metadata (Optional): {@link MetadataMap}. Caller-owned key-value metadata associated
     * with the package. Caller-owned key-value data stored on a resource. Keys starting with
     * flint_ are reserved for Flint and are not returned. Writes follow the limits on
     * MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them.
     * object.order (Optional): {@link ExpandedOrderSummary} or null. Order summary returned when
     * the order relationship is expanded. Present only when `expand` includes `order`; `null` when
     * expanded and there is no related order. object.order.anyOf[1] (Value): {@link
     * ExpandedOrderSummary}. An order's summary fields, including status, payment and refund
     * status, and pricing and settlement amounts, returned when the order is expanded.
     * object.order.anyOf[2] (Value): null. object.order_id (Required): string. Order whose items
     * are in the package. Example: "ord_01KEZF7C0054GQKJ142A8X367A". object.package_id (Required):
     * string. Stable identifier of the package. Example: "pkg_01KEZF7C00ZZA16BJCEJBWKJ5R".
     * object.return_id (Optional): string. Return this package belongs to. Present only on
     * packages of return shipments. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X".
     * object.return_line_items (Optional): Array of {@link ReturnResolutionLineItemRequest}.
     * Return line quantities allocated to this parcel. Present only on packages of return
     * shipments. object.return_line_items[] (Value): {@link ReturnResolutionLineItemRequest}. A
     * return line and the quantity placed in a return shipment or package. object.service_code
     * (Optional): string. Carrier service used for the package. object.shipment_id (Required):
     * string. Shipment carrying this package. Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68".
     * object.shipped_at (Optional): string. Package handoff timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.status (Required): string. Current package lifecycle state.
     * Package states are the source used to derive shipment status. - `created`: The package
     * record exists but has not been packed or handed off. - `packed`: The package is packed and
     * awaiting carrier handoff. - `shipped`: The package was handed to the carrier. -
     * `in_transit`: The carrier is moving the package through its network. - `out_for_delivery`:
     * The package is on its final delivery route. - `delivered`: The carrier reported successful
     * delivery. - `delivery_attempted`: The carrier attempted delivery but did not complete it.
     * Follow the carrier instructions before retrying delivery. - `exception`: A carrier exception
     * is blocking normal progress. Resolve the carrier-reported issue. - `returned`: The package
     * was returned toward or to its origin. - `voided`: The package was voided and will not
     * continue through delivery. Value enum: "created", "packed", "shipped", "in_transit",
     * "out_for_delivery", "delivered", "delivery_attempted", "exception", "returned", "voided".
     * object.status_reason (Optional): string. Additional explanation of the package's current
     * status. object.supported_actions (Required): Array of string. Lifecycle actions Flint
     * accepts now. mark_in_transit can repeat while in transit to refresh expected_delivery_at. []
     * enum: "mark_delivered", "mark_delivery_attempted", "mark_exception", "mark_in_transit",
     * "mark_out_for_delivery", "mark_packed", "mark_returned", "mark_shipped", "void".
     * object.supported_actions[] (Value): string. Value enum: "mark_delivered",
     * "mark_delivery_attempted", "mark_exception", "mark_in_transit", "mark_out_for_delivery",
     * "mark_packed", "mark_returned", "mark_shipped", "void". object.tracking_number (Optional):
     * string. Omitted for a checkout session credential that doesn't act for the customer the
     * buyer verified. object.tracking_url (Optional): string. Absolute HTTPS carrier tracking URL.
     * Embedded URL credentials are rejected. Omitted for a checkout session credential that
     * doesn't act for the customer the buyer verified. object.updated_at (Required): string. Last
     * update timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.version
     * (Required): integer. Monotonic package version for expected_version checks. Format: uint64.
     * minimum: 1. object.weight (Optional): {@link Weight}. Physical weight of the package. A
     * weight value in grams, kilograms, ounces, or pounds, used in delivery profile configuration.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields. carrier
         * (Optional): string. Carrier transporting the package. created_at (Required): string.
         * Creation timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". delivered_at
         * (Optional): string. Package delivery timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". dimensions (Optional): {@link Dimensions}. Physical length,
         * width, and height of the package. Package or item dimensions as `length`, `width`, and
         * `height` in the given `unit`. expected_delivery_at (Optional): string or null. When the
         * carrier or merchant expects this package to arrive. Null when no estimate is set.
         * Retained after delivery as history. This estimate is separate from the fulfillment's
         * promised shipment window. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * external_reference_id (Optional): string. Caller-owned identifier for this resource in
         * an external system. Requires external_system. External references are not unique. Use
         * Idempotency-Key for retries. maxLength: 255. Example: "warehouse-1842". external_system
         * (Optional): string. Name of the external system that external_reference_id belongs to.
         * External references are not unique. Use Idempotency-Key for retries. fulfillment_id
         * (Required): string. Fulfillment whose items are in the package. Example:
         * "ful_01KEZF7C00F24WVSTTWR1FQX5T". label_url (Optional): string. HTTPS shipping-label URL
         * supplied by your integration. Non-Flint URLs require external_system for provenance.
         * Flint does not host the label file. Omitted for a checkout session credential that
         * doesn't act for the customer the buyer verified. metadata (Optional): {@link
         * MetadataMap}. Caller-owned key-value metadata associated with the package. Caller-owned
         * key-value data stored on a resource. Keys starting with flint_ are reserved for Flint
         * and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput;
         * maps written before those limits may not satisfy them. order (Optional): {@link
         * ExpandedOrderSummary} or null. Order summary returned when the order relationship is
         * expanded. Present only when `expand` includes `order`; `null` when expanded and there is
         * no related order. order.anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's
         * summary fields, including status, payment and refund status, and pricing and settlement
         * amounts, returned when the order is expanded. order.anyOf[2] (Value): null. order_id
         * (Required): string. Order whose items are in the package. Example:
         * "ord_01KEZF7C0054GQKJ142A8X367A". package_id (Required): string. Stable identifier of
         * the package. Example: "pkg_01KEZF7C00ZZA16BJCEJBWKJ5R". return_id (Optional): string.
         * Return this package belongs to. Present only on packages of return shipments. Example:
         * "ret_01KEZF7C00PG93650ZKVQNGF7X". return_line_items (Optional): Array of {@link
         * ReturnResolutionLineItemRequest}. Return line quantities allocated to this parcel.
         * Present only on packages of return shipments. return_line_items[] (Value): {@link
         * ReturnResolutionLineItemRequest}. A return line and the quantity placed in a return
         * shipment or package. service_code (Optional): string. Carrier service used for the
         * package. shipment_id (Required): string. Shipment carrying this package. Example:
         * "shp_01KEZF7C00Q2AFXWXHMCDR3F68". shipped_at (Optional): string. Package handoff
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". status (Required):
         * string. Current package lifecycle state. Package states are the source used to derive
         * shipment status. - `created`: The package record exists but has not been packed or
         * handed off. - `packed`: The package is packed and awaiting carrier handoff. - `shipped`:
         * The package was handed to the carrier. - `in_transit`: The carrier is moving the package
         * through its network. - `out_for_delivery`: The package is on its final delivery route. -
         * `delivered`: The carrier reported successful delivery. - `delivery_attempted`: The
         * carrier attempted delivery but did not complete it. Follow the carrier instructions
         * before retrying delivery. - `exception`: A carrier exception is blocking normal
         * progress. Resolve the carrier-reported issue. - `returned`: The package was returned
         * toward or to its origin. - `voided`: The package was voided and will not continue
         * through delivery. Value enum: "created", "packed", "shipped", "in_transit",
         * "out_for_delivery", "delivered", "delivery_attempted", "exception", "returned",
         * "voided". status_reason (Optional): string. Additional explanation of the package's
         * current status. supported_actions (Required): Array of string. Lifecycle actions Flint
         * accepts now. mark_in_transit can repeat while in transit to refresh
         * expected_delivery_at. [] enum: "mark_delivered", "mark_delivery_attempted",
         * "mark_exception", "mark_in_transit", "mark_out_for_delivery", "mark_packed",
         * "mark_returned", "mark_shipped", "void". supported_actions[] (Value): string. Value
         * enum: "mark_delivered", "mark_delivery_attempted", "mark_exception", "mark_in_transit",
         * "mark_out_for_delivery", "mark_packed", "mark_returned", "mark_shipped", "void".
         * tracking_number (Optional): string. Omitted for a checkout session credential that
         * doesn't act for the customer the buyer verified. tracking_url (Optional): string.
         * Absolute HTTPS carrier tracking URL. Embedded URL credentials are rejected. Omitted for
         * a checkout session credential that doesn't act for the customer the buyer verified.
         * updated_at (Required): string. Last update timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". version (Required): integer. Monotonic package version for
         * expected_version checks. Format: uint64. minimum: 1. weight (Optional): {@link Weight}.
         * Physical weight of the package. A weight value in grams, kilograms, ounces, or pounds,
         * used in delivery profile configuration.
         */
        "object": {
            /** Carrier transporting the package. */
            "carrier"?: string;
            /** Creation timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /** Package delivery timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "delivered_at"?: string;
            /**
             * Physical length, width, and height of the package. Package or item dimensions as
             * `length`, `width`, and `height` in the given `unit`.
             */
            "dimensions"?: Dimensions;
            /**
             * When the carrier or merchant expects this package to arrive. Null when no estimate
             * is set. Retained after delivery as history. This estimate is separate from the
             * fulfillment's promised shipment window. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "expected_delivery_at"?: string | null;
            /**
             * Caller-owned identifier for this resource in an external system. Requires
             * external_system. External references are not unique. Use Idempotency-Key for
             * retries. maxLength: 255. Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Name of the external system that external_reference_id belongs to. External
             * references are not unique. Use Idempotency-Key for retries.
             */
            "external_system"?: string;
            /**
             * Fulfillment whose items are in the package. Example:
             * "ful_01KEZF7C00F24WVSTTWR1FQX5T".
             */
            "fulfillment_id": string;
            /**
             * HTTPS shipping-label URL supplied by your integration. Non-Flint URLs require
             * external_system for provenance. Flint does not host the label file. Omitted for a
             * checkout session credential that doesn't act for the customer the buyer verified.
             */
            "label_url"?: string;
            /**
             * Caller-owned key-value metadata associated with the package. Caller-owned key-value
             * data stored on a resource. Keys starting with flint_ are reserved for Flint and are
             * not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps
             * written before those limits may not satisfy them.
             */
            "metadata"?: MetadataMap;
            /**
             * Order summary returned when the order relationship is expanded. Present only when
             * `expand` includes `order`; `null` when expanded and there is no related order.
             * anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary fields, including
             * status, payment and refund status, and pricing and settlement amounts, returned when
             * the order is expanded. anyOf[2] (Value): null.
             */
            "order"?: ((ExpandedOrderSummary) | (null));
            /** Order whose items are in the package. Example: "ord_01KEZF7C0054GQKJ142A8X367A". */
            "order_id": string;
            /** Stable identifier of the package. Example: "pkg_01KEZF7C00ZZA16BJCEJBWKJ5R". */
            "package_id": string;
            /**
             * Return this package belongs to. Present only on packages of return shipments.
             * Example: "ret_01KEZF7C00PG93650ZKVQNGF7X".
             */
            "return_id"?: string;
            /**
             * Return line quantities allocated to this parcel. Present only on packages of return
             * shipments. [] (Value): {@link ReturnResolutionLineItemRequest}. A return line and
             * the quantity placed in a return shipment or package.
             */
            "return_line_items"?: Array<ReturnResolutionLineItemRequest>;
            /** Carrier service used for the package. */
            "service_code"?: string;
            /** Shipment carrying this package. Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68". */
            "shipment_id": string;
            /** Package handoff timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "shipped_at"?: string;
            /**
             * Current package lifecycle state. Package states are the source used to derive
             * shipment status. - `created`: The package record exists but has not been packed or
             * handed off. - `packed`: The package is packed and awaiting carrier handoff. -
             * `shipped`: The package was handed to the carrier. - `in_transit`: The carrier is
             * moving the package through its network. - `out_for_delivery`: The package is on its
             * final delivery route. - `delivered`: The carrier reported successful delivery. -
             * `delivery_attempted`: The carrier attempted delivery but did not complete it. Follow
             * the carrier instructions before retrying delivery. - `exception`: A carrier
             * exception is blocking normal progress. Resolve the carrier-reported issue. -
             * `returned`: The package was returned toward or to its origin. - `voided`: The
             * package was voided and will not continue through delivery. Value enum: "created",
             * "packed", "shipped", "in_transit", "out_for_delivery", "delivered",
             * "delivery_attempted", "exception", "returned", "voided".
             */
            "status": "created"
                | "packed"
                | "shipped"
                | "in_transit"
                | "out_for_delivery"
                | "delivered"
                | "delivery_attempted"
                | "exception"
                | "returned"
                | "voided"
                | (string & {});
            /** Additional explanation of the package's current status. */
            "status_reason"?: string;
            /**
             * Lifecycle actions Flint accepts now. mark_in_transit can repeat while in transit to
             * refresh expected_delivery_at. [] enum: "mark_delivered", "mark_delivery_attempted",
             * "mark_exception", "mark_in_transit", "mark_out_for_delivery", "mark_packed",
             * "mark_returned", "mark_shipped", "void". [] (Value): string. Value enum:
             * "mark_delivered", "mark_delivery_attempted", "mark_exception", "mark_in_transit",
             * "mark_out_for_delivery", "mark_packed", "mark_returned", "mark_shipped", "void".
             */
            "supported_actions": Array<"mark_delivered"
                | "mark_delivery_attempted"
                | "mark_exception"
                | "mark_in_transit"
                | "mark_out_for_delivery"
                | "mark_packed"
                | "mark_returned"
                | "mark_shipped"
                | "void"
                | (string & {})>;
            /**
             * Omitted for a checkout session credential that doesn't act for the customer the
             * buyer verified.
             */
            "tracking_number"?: string;
            /**
             * Absolute HTTPS carrier tracking URL. Embedded URL credentials are rejected. Omitted
             * for a checkout session credential that doesn't act for the customer the buyer
             * verified.
             */
            "tracking_url"?: string;
            /** Last update timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Monotonic package version for expected_version checks. Format: uint64. minimum: 1.
             */
            "version": number;
            /**
             * Physical weight of the package. A weight value in grams, kilograms, ounces, or
             * pounds, used in delivery profile configuration.
             */
            "weight"?: Weight;
        };
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "package.created". */
    "event_type"?: "package.created";
});
/** An order item assigned to a package. */
export type PackageItem = {
    /** Creation timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /** Fulfillment containing this package item. Example: "ful_01KEZF7C00F24WVSTTWR1FQX5T". */
    "fulfillment_id": string;
    /**
     * Caller-owned metadata for this package item. Caller-owned key-value data stored on a
     * resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
     * follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits
     * may not satisfy them.
     */
    "metadata"?: MetadataMap;
    /**
     * Present only when `expand` includes `order`; `null` when expanded and there is no related
     * order. anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary fields, including
     * status, payment and refund status, and pricing and settlement amounts, returned when the
     * order is expanded. anyOf[2] (Value): null.
     */
    "order"?: ((ExpandedOrderSummary) | (null));
    /** Order containing the allocated line item. Example: "ord_01KEZF7C0054GQKJ142A8X367A". */
    "order_id": string;
    /**
     * Order line whose quantity this package item allocates. Example:
     * "li_01KEZF7C008YPRCK7VDKTGWR31".
     */
    "order_line_item_id": string;
    /** Package containing this item. Example: "pkg_01KEZF7C00ZZA16BJCEJBWKJ5R". */
    "package_id": string;
    /** Unique identifier for this package allocation. Example: "pki_01KEZF7C00CEFTYV5RD7XVYQ7B". */
    "package_item_id": string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
    /** Shipment containing the package. Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68". */
    "shipment_id": string;
    /** Last update timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "updated_at": string;
    /**
     * Persisted item version, independent of package shipment and capacity guards. Format: uint64.
     * minimum: 1.
     */
    "version": number;
};
/** A page of `PackageItem` objects. */
export type PackageItemListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * PackageItem}. An order item assigned to a package.
     */
    "data": Array<PackageItem>;
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
/** A response containing `PackageItem` data. */
export type PackageItemResponse = {
    /**
     * Resource, collection, or operation result returned by this request. An order item assigned
     * to a package.
     */
    "data": PackageItem;
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
/** A page of `Package` objects. */
export type PackageListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * Package}. A package within a shipment.
     */
    "data": Array<Package>;
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
/** A response containing `Package` data. */
export type PackageResponse = {
    /**
     * Resource, collection, or operation result returned by this request. A package within a
     * shipment.
     */
    "data": Package;
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
export type PackageUpdatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "carrier"?: string;
            "created_at": string;
            "delivered_at"?: string;
            "dimensions"?: Dimensions;
            "expected_delivery_at"?: string | null;
            "external_reference_id"?: string;
            "external_system"?: string;
            "fulfillment_id": string;
            "label_url"?: string;
            "metadata"?: MetadataMap;
            "order"?: ((ExpandedOrderSummary) | (null));
            "order_id": string;
            "package_id": string;
            "return_id"?: string;
            "return_line_items"?: Array<ReturnResolutionLineItemRequest>;
            "service_code"?: string;
            "shipment_id": string;
            "shipped_at"?: string;
            "status": "created"
                | "packed"
                | "shipped"
                | "in_transit"
                | "out_for_delivery"
                | "delivered"
                | "delivery_attempted"
                | "exception"
                | "returned"
                | "voided"
                | (string & {});
            "status_reason"?: string;
            "supported_actions": Array<"mark_delivered"
                | "mark_delivery_attempted"
                | "mark_exception"
                | "mark_in_transit"
                | "mark_out_for_delivery"
                | "mark_packed"
                | "mark_returned"
                | "mark_shipped"
                | "void"
                | (string & {})>;
            "tracking_number"?: string;
            "tracking_url"?: string;
            "updated_at": string;
            "version": number;
            "weight"?: Weight;
        };
        "previous_attributes"?: Partial<Package>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "package.updated";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "carrier"?: string;
            "created_at": string;
            "delivered_at"?: string;
            "dimensions"?: Dimensions;
            "expected_delivery_at"?: string | null;
            "external_reference_id"?: string;
            "external_system"?: string;
            "fulfillment_id": string;
            "label_url"?: string;
            "metadata"?: MetadataMap;
            "order"?: ((ExpandedOrderSummary) | (null));
            "order_id": string;
            "package_id": string;
            "return_id"?: string;
            "return_line_items"?: Array<ReturnResolutionLineItemRequest>;
            "service_code"?: string;
            "shipment_id": string;
            "shipped_at"?: string;
            "status": "created"
                | "packed"
                | "shipped"
                | "in_transit"
                | "out_for_delivery"
                | "delivered"
                | "delivery_attempted"
                | "exception"
                | "returned"
                | "voided"
                | (string & {});
            "status_reason"?: string;
            "supported_actions": Array<"mark_delivered"
                | "mark_delivery_attempted"
                | "mark_exception"
                | "mark_in_transit"
                | "mark_out_for_delivery"
                | "mark_packed"
                | "mark_returned"
                | "mark_shipped"
                | "void"
                | (string & {})>;
            "tracking_number"?: string;
            "tracking_url"?: string;
            "updated_at": string;
            "version": number;
            "weight"?: Weight;
        };
        "previous_attributes"?: Partial<Package>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "package.updated";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "package.updated";
});
/**
 * The `package.updated` webhook payload for the `installed_merchants` event source. Fields shared
 * by partner webhook payloads.
 */
export type PackageUpdatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.carrier (Optional): string. Carrier transporting the package.
     * object.created_at (Required): string. Creation timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.delivered_at (Optional): string. Package delivery timestamp.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". object.dimensions (Optional): {@link
     * Dimensions}. Physical length, width, and height of the package. Package or item dimensions
     * as `length`, `width`, and `height` in the given `unit`. object.expected_delivery_at
     * (Optional): string or null. When the carrier or merchant expects this package to arrive.
     * Null when no estimate is set. Retained after delivery as history. This estimate is separate
     * from the fulfillment's promised shipment window. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.external_reference_id (Optional): string. Caller-owned
     * identifier for this resource in an external system. Requires external_system. External
     * references are not unique. Use Idempotency-Key for retries. maxLength: 255. Example:
     * "warehouse-1842". object.external_system (Optional): string. Name of the external system
     * that external_reference_id belongs to. External references are not unique. Use
     * Idempotency-Key for retries. object.fulfillment_id (Required): string. Fulfillment whose
     * items are in the package. Example: "ful_01KEZF7C00F24WVSTTWR1FQX5T". object.label_url
     * (Optional): string. HTTPS shipping-label URL supplied by your integration. Non-Flint URLs
     * require external_system for provenance. Flint does not host the label file. Omitted for a
     * checkout session credential that doesn't act for the customer the buyer verified.
     * object.metadata (Optional): {@link MetadataMap}. Caller-owned key-value metadata associated
     * with the package. Caller-owned key-value data stored on a resource. Keys starting with
     * flint_ are reserved for Flint and are not returned. Writes follow the limits on
     * MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them.
     * object.order (Optional): {@link ExpandedOrderSummary} or null. Order summary returned when
     * the order relationship is expanded. Present only when `expand` includes `order`; `null` when
     * expanded and there is no related order. object.order.anyOf[1] (Value): {@link
     * ExpandedOrderSummary}. An order's summary fields, including status, payment and refund
     * status, and pricing and settlement amounts, returned when the order is expanded.
     * object.order.anyOf[2] (Value): null. object.order_id (Required): string. Order whose items
     * are in the package. Example: "ord_01KEZF7C0054GQKJ142A8X367A". object.package_id (Required):
     * string. Stable identifier of the package. Example: "pkg_01KEZF7C00ZZA16BJCEJBWKJ5R".
     * object.return_id (Optional): string. Return this package belongs to. Present only on
     * packages of return shipments. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X".
     * object.return_line_items (Optional): Array of {@link ReturnResolutionLineItemRequest}.
     * Return line quantities allocated to this parcel. Present only on packages of return
     * shipments. object.return_line_items[] (Value): {@link ReturnResolutionLineItemRequest}. A
     * return line and the quantity placed in a return shipment or package. object.service_code
     * (Optional): string. Carrier service used for the package. object.shipment_id (Required):
     * string. Shipment carrying this package. Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68".
     * object.shipped_at (Optional): string. Package handoff timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.status (Required): string. Current package lifecycle state.
     * Package states are the source used to derive shipment status. - `created`: The package
     * record exists but has not been packed or handed off. - `packed`: The package is packed and
     * awaiting carrier handoff. - `shipped`: The package was handed to the carrier. -
     * `in_transit`: The carrier is moving the package through its network. - `out_for_delivery`:
     * The package is on its final delivery route. - `delivered`: The carrier reported successful
     * delivery. - `delivery_attempted`: The carrier attempted delivery but did not complete it.
     * Follow the carrier instructions before retrying delivery. - `exception`: A carrier exception
     * is blocking normal progress. Resolve the carrier-reported issue. - `returned`: The package
     * was returned toward or to its origin. - `voided`: The package was voided and will not
     * continue through delivery. Value enum: "created", "packed", "shipped", "in_transit",
     * "out_for_delivery", "delivered", "delivery_attempted", "exception", "returned", "voided".
     * object.status_reason (Optional): string. Additional explanation of the package's current
     * status. object.supported_actions (Required): Array of string. Lifecycle actions Flint
     * accepts now. mark_in_transit can repeat while in transit to refresh expected_delivery_at. []
     * enum: "mark_delivered", "mark_delivery_attempted", "mark_exception", "mark_in_transit",
     * "mark_out_for_delivery", "mark_packed", "mark_returned", "mark_shipped", "void".
     * object.supported_actions[] (Value): string. Value enum: "mark_delivered",
     * "mark_delivery_attempted", "mark_exception", "mark_in_transit", "mark_out_for_delivery",
     * "mark_packed", "mark_returned", "mark_shipped", "void". object.tracking_number (Optional):
     * string. Omitted for a checkout session credential that doesn't act for the customer the
     * buyer verified. object.tracking_url (Optional): string. Absolute HTTPS carrier tracking URL.
     * Embedded URL credentials are rejected. Omitted for a checkout session credential that
     * doesn't act for the customer the buyer verified. object.updated_at (Required): string. Last
     * update timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.version
     * (Required): integer. Monotonic package version for expected_version checks. Format: uint64.
     * minimum: 1. object.weight (Optional): {@link Weight}. Physical weight of the package. A
     * weight value in grams, kilograms, ounces, or pounds, used in delivery profile configuration.
     * previous_attributes (Optional): object. Previous values of changed top-level fields in
     * data.object, at this delivery's API version. Nested changes include the whole previous
     * top-level value. A value is null when the field was absent before the change. Omitted when
     * Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields. carrier
         * (Optional): string. Carrier transporting the package. created_at (Required): string.
         * Creation timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". delivered_at
         * (Optional): string. Package delivery timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". dimensions (Optional): {@link Dimensions}. Physical length,
         * width, and height of the package. Package or item dimensions as `length`, `width`, and
         * `height` in the given `unit`. expected_delivery_at (Optional): string or null. When the
         * carrier or merchant expects this package to arrive. Null when no estimate is set.
         * Retained after delivery as history. This estimate is separate from the fulfillment's
         * promised shipment window. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * external_reference_id (Optional): string. Caller-owned identifier for this resource in
         * an external system. Requires external_system. External references are not unique. Use
         * Idempotency-Key for retries. maxLength: 255. Example: "warehouse-1842". external_system
         * (Optional): string. Name of the external system that external_reference_id belongs to.
         * External references are not unique. Use Idempotency-Key for retries. fulfillment_id
         * (Required): string. Fulfillment whose items are in the package. Example:
         * "ful_01KEZF7C00F24WVSTTWR1FQX5T". label_url (Optional): string. HTTPS shipping-label URL
         * supplied by your integration. Non-Flint URLs require external_system for provenance.
         * Flint does not host the label file. Omitted for a checkout session credential that
         * doesn't act for the customer the buyer verified. metadata (Optional): {@link
         * MetadataMap}. Caller-owned key-value metadata associated with the package. Caller-owned
         * key-value data stored on a resource. Keys starting with flint_ are reserved for Flint
         * and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput;
         * maps written before those limits may not satisfy them. order (Optional): {@link
         * ExpandedOrderSummary} or null. Order summary returned when the order relationship is
         * expanded. Present only when `expand` includes `order`; `null` when expanded and there is
         * no related order. order.anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's
         * summary fields, including status, payment and refund status, and pricing and settlement
         * amounts, returned when the order is expanded. order.anyOf[2] (Value): null. order_id
         * (Required): string. Order whose items are in the package. Example:
         * "ord_01KEZF7C0054GQKJ142A8X367A". package_id (Required): string. Stable identifier of
         * the package. Example: "pkg_01KEZF7C00ZZA16BJCEJBWKJ5R". return_id (Optional): string.
         * Return this package belongs to. Present only on packages of return shipments. Example:
         * "ret_01KEZF7C00PG93650ZKVQNGF7X". return_line_items (Optional): Array of {@link
         * ReturnResolutionLineItemRequest}. Return line quantities allocated to this parcel.
         * Present only on packages of return shipments. return_line_items[] (Value): {@link
         * ReturnResolutionLineItemRequest}. A return line and the quantity placed in a return
         * shipment or package. service_code (Optional): string. Carrier service used for the
         * package. shipment_id (Required): string. Shipment carrying this package. Example:
         * "shp_01KEZF7C00Q2AFXWXHMCDR3F68". shipped_at (Optional): string. Package handoff
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". status (Required):
         * string. Current package lifecycle state. Package states are the source used to derive
         * shipment status. - `created`: The package record exists but has not been packed or
         * handed off. - `packed`: The package is packed and awaiting carrier handoff. - `shipped`:
         * The package was handed to the carrier. - `in_transit`: The carrier is moving the package
         * through its network. - `out_for_delivery`: The package is on its final delivery route. -
         * `delivered`: The carrier reported successful delivery. - `delivery_attempted`: The
         * carrier attempted delivery but did not complete it. Follow the carrier instructions
         * before retrying delivery. - `exception`: A carrier exception is blocking normal
         * progress. Resolve the carrier-reported issue. - `returned`: The package was returned
         * toward or to its origin. - `voided`: The package was voided and will not continue
         * through delivery. Value enum: "created", "packed", "shipped", "in_transit",
         * "out_for_delivery", "delivered", "delivery_attempted", "exception", "returned",
         * "voided". status_reason (Optional): string. Additional explanation of the package's
         * current status. supported_actions (Required): Array of string. Lifecycle actions Flint
         * accepts now. mark_in_transit can repeat while in transit to refresh
         * expected_delivery_at. [] enum: "mark_delivered", "mark_delivery_attempted",
         * "mark_exception", "mark_in_transit", "mark_out_for_delivery", "mark_packed",
         * "mark_returned", "mark_shipped", "void". supported_actions[] (Value): string. Value
         * enum: "mark_delivered", "mark_delivery_attempted", "mark_exception", "mark_in_transit",
         * "mark_out_for_delivery", "mark_packed", "mark_returned", "mark_shipped", "void".
         * tracking_number (Optional): string. Omitted for a checkout session credential that
         * doesn't act for the customer the buyer verified. tracking_url (Optional): string.
         * Absolute HTTPS carrier tracking URL. Embedded URL credentials are rejected. Omitted for
         * a checkout session credential that doesn't act for the customer the buyer verified.
         * updated_at (Required): string. Last update timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". version (Required): integer. Monotonic package version for
         * expected_version checks. Format: uint64. minimum: 1. weight (Optional): {@link Weight}.
         * Physical weight of the package. A weight value in grams, kilograms, ounces, or pounds,
         * used in delivery profile configuration.
         */
        "object": {
            /** Carrier transporting the package. */
            "carrier"?: string;
            /** Creation timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /** Package delivery timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "delivered_at"?: string;
            /**
             * Physical length, width, and height of the package. Package or item dimensions as
             * `length`, `width`, and `height` in the given `unit`.
             */
            "dimensions"?: Dimensions;
            /**
             * When the carrier or merchant expects this package to arrive. Null when no estimate
             * is set. Retained after delivery as history. This estimate is separate from the
             * fulfillment's promised shipment window. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "expected_delivery_at"?: string | null;
            /**
             * Caller-owned identifier for this resource in an external system. Requires
             * external_system. External references are not unique. Use Idempotency-Key for
             * retries. maxLength: 255. Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Name of the external system that external_reference_id belongs to. External
             * references are not unique. Use Idempotency-Key for retries.
             */
            "external_system"?: string;
            /**
             * Fulfillment whose items are in the package. Example:
             * "ful_01KEZF7C00F24WVSTTWR1FQX5T".
             */
            "fulfillment_id": string;
            /**
             * HTTPS shipping-label URL supplied by your integration. Non-Flint URLs require
             * external_system for provenance. Flint does not host the label file. Omitted for a
             * checkout session credential that doesn't act for the customer the buyer verified.
             */
            "label_url"?: string;
            /**
             * Caller-owned key-value metadata associated with the package. Caller-owned key-value
             * data stored on a resource. Keys starting with flint_ are reserved for Flint and are
             * not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps
             * written before those limits may not satisfy them.
             */
            "metadata"?: MetadataMap;
            /**
             * Order summary returned when the order relationship is expanded. Present only when
             * `expand` includes `order`; `null` when expanded and there is no related order.
             * anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary fields, including
             * status, payment and refund status, and pricing and settlement amounts, returned when
             * the order is expanded. anyOf[2] (Value): null.
             */
            "order"?: ((ExpandedOrderSummary) | (null));
            /** Order whose items are in the package. Example: "ord_01KEZF7C0054GQKJ142A8X367A". */
            "order_id": string;
            /** Stable identifier of the package. Example: "pkg_01KEZF7C00ZZA16BJCEJBWKJ5R". */
            "package_id": string;
            /**
             * Return this package belongs to. Present only on packages of return shipments.
             * Example: "ret_01KEZF7C00PG93650ZKVQNGF7X".
             */
            "return_id"?: string;
            /**
             * Return line quantities allocated to this parcel. Present only on packages of return
             * shipments. [] (Value): {@link ReturnResolutionLineItemRequest}. A return line and
             * the quantity placed in a return shipment or package.
             */
            "return_line_items"?: Array<ReturnResolutionLineItemRequest>;
            /** Carrier service used for the package. */
            "service_code"?: string;
            /** Shipment carrying this package. Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68". */
            "shipment_id": string;
            /** Package handoff timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "shipped_at"?: string;
            /**
             * Current package lifecycle state. Package states are the source used to derive
             * shipment status. - `created`: The package record exists but has not been packed or
             * handed off. - `packed`: The package is packed and awaiting carrier handoff. -
             * `shipped`: The package was handed to the carrier. - `in_transit`: The carrier is
             * moving the package through its network. - `out_for_delivery`: The package is on its
             * final delivery route. - `delivered`: The carrier reported successful delivery. -
             * `delivery_attempted`: The carrier attempted delivery but did not complete it. Follow
             * the carrier instructions before retrying delivery. - `exception`: A carrier
             * exception is blocking normal progress. Resolve the carrier-reported issue. -
             * `returned`: The package was returned toward or to its origin. - `voided`: The
             * package was voided and will not continue through delivery. Value enum: "created",
             * "packed", "shipped", "in_transit", "out_for_delivery", "delivered",
             * "delivery_attempted", "exception", "returned", "voided".
             */
            "status": "created"
                | "packed"
                | "shipped"
                | "in_transit"
                | "out_for_delivery"
                | "delivered"
                | "delivery_attempted"
                | "exception"
                | "returned"
                | "voided"
                | (string & {});
            /** Additional explanation of the package's current status. */
            "status_reason"?: string;
            /**
             * Lifecycle actions Flint accepts now. mark_in_transit can repeat while in transit to
             * refresh expected_delivery_at. [] enum: "mark_delivered", "mark_delivery_attempted",
             * "mark_exception", "mark_in_transit", "mark_out_for_delivery", "mark_packed",
             * "mark_returned", "mark_shipped", "void". [] (Value): string. Value enum:
             * "mark_delivered", "mark_delivery_attempted", "mark_exception", "mark_in_transit",
             * "mark_out_for_delivery", "mark_packed", "mark_returned", "mark_shipped", "void".
             */
            "supported_actions": Array<"mark_delivered"
                | "mark_delivery_attempted"
                | "mark_exception"
                | "mark_in_transit"
                | "mark_out_for_delivery"
                | "mark_packed"
                | "mark_returned"
                | "mark_shipped"
                | "void"
                | (string & {})>;
            /**
             * Omitted for a checkout session credential that doesn't act for the customer the
             * buyer verified.
             */
            "tracking_number"?: string;
            /**
             * Absolute HTTPS carrier tracking URL. Embedded URL credentials are rejected. Omitted
             * for a checkout session credential that doesn't act for the customer the buyer
             * verified.
             */
            "tracking_url"?: string;
            /** Last update timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Monotonic package version for expected_version checks. Format: uint64. minimum: 1.
             */
            "version": number;
            /**
             * Physical weight of the package. A weight value in grams, kilograms, ounces, or
             * pounds, used in delivery profile configuration.
             */
            "weight"?: Weight;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<Package>;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "package.updated". */
    "event_type"?: "package.updated";
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
 * The `package.updated` webhook payload for the `merchant` event source. Fields shared by merchant
 * webhook payloads.
 */
export type PackageUpdatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.carrier (Optional): string. Carrier transporting the package.
     * object.created_at (Required): string. Creation timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.delivered_at (Optional): string. Package delivery timestamp.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". object.dimensions (Optional): {@link
     * Dimensions}. Physical length, width, and height of the package. Package or item dimensions
     * as `length`, `width`, and `height` in the given `unit`. object.expected_delivery_at
     * (Optional): string or null. When the carrier or merchant expects this package to arrive.
     * Null when no estimate is set. Retained after delivery as history. This estimate is separate
     * from the fulfillment's promised shipment window. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.external_reference_id (Optional): string. Caller-owned
     * identifier for this resource in an external system. Requires external_system. External
     * references are not unique. Use Idempotency-Key for retries. maxLength: 255. Example:
     * "warehouse-1842". object.external_system (Optional): string. Name of the external system
     * that external_reference_id belongs to. External references are not unique. Use
     * Idempotency-Key for retries. object.fulfillment_id (Required): string. Fulfillment whose
     * items are in the package. Example: "ful_01KEZF7C00F24WVSTTWR1FQX5T". object.label_url
     * (Optional): string. HTTPS shipping-label URL supplied by your integration. Non-Flint URLs
     * require external_system for provenance. Flint does not host the label file. Omitted for a
     * checkout session credential that doesn't act for the customer the buyer verified.
     * object.metadata (Optional): {@link MetadataMap}. Caller-owned key-value metadata associated
     * with the package. Caller-owned key-value data stored on a resource. Keys starting with
     * flint_ are reserved for Flint and are not returned. Writes follow the limits on
     * MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them.
     * object.order (Optional): {@link ExpandedOrderSummary} or null. Order summary returned when
     * the order relationship is expanded. Present only when `expand` includes `order`; `null` when
     * expanded and there is no related order. object.order.anyOf[1] (Value): {@link
     * ExpandedOrderSummary}. An order's summary fields, including status, payment and refund
     * status, and pricing and settlement amounts, returned when the order is expanded.
     * object.order.anyOf[2] (Value): null. object.order_id (Required): string. Order whose items
     * are in the package. Example: "ord_01KEZF7C0054GQKJ142A8X367A". object.package_id (Required):
     * string. Stable identifier of the package. Example: "pkg_01KEZF7C00ZZA16BJCEJBWKJ5R".
     * object.return_id (Optional): string. Return this package belongs to. Present only on
     * packages of return shipments. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X".
     * object.return_line_items (Optional): Array of {@link ReturnResolutionLineItemRequest}.
     * Return line quantities allocated to this parcel. Present only on packages of return
     * shipments. object.return_line_items[] (Value): {@link ReturnResolutionLineItemRequest}. A
     * return line and the quantity placed in a return shipment or package. object.service_code
     * (Optional): string. Carrier service used for the package. object.shipment_id (Required):
     * string. Shipment carrying this package. Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68".
     * object.shipped_at (Optional): string. Package handoff timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.status (Required): string. Current package lifecycle state.
     * Package states are the source used to derive shipment status. - `created`: The package
     * record exists but has not been packed or handed off. - `packed`: The package is packed and
     * awaiting carrier handoff. - `shipped`: The package was handed to the carrier. -
     * `in_transit`: The carrier is moving the package through its network. - `out_for_delivery`:
     * The package is on its final delivery route. - `delivered`: The carrier reported successful
     * delivery. - `delivery_attempted`: The carrier attempted delivery but did not complete it.
     * Follow the carrier instructions before retrying delivery. - `exception`: A carrier exception
     * is blocking normal progress. Resolve the carrier-reported issue. - `returned`: The package
     * was returned toward or to its origin. - `voided`: The package was voided and will not
     * continue through delivery. Value enum: "created", "packed", "shipped", "in_transit",
     * "out_for_delivery", "delivered", "delivery_attempted", "exception", "returned", "voided".
     * object.status_reason (Optional): string. Additional explanation of the package's current
     * status. object.supported_actions (Required): Array of string. Lifecycle actions Flint
     * accepts now. mark_in_transit can repeat while in transit to refresh expected_delivery_at. []
     * enum: "mark_delivered", "mark_delivery_attempted", "mark_exception", "mark_in_transit",
     * "mark_out_for_delivery", "mark_packed", "mark_returned", "mark_shipped", "void".
     * object.supported_actions[] (Value): string. Value enum: "mark_delivered",
     * "mark_delivery_attempted", "mark_exception", "mark_in_transit", "mark_out_for_delivery",
     * "mark_packed", "mark_returned", "mark_shipped", "void". object.tracking_number (Optional):
     * string. Omitted for a checkout session credential that doesn't act for the customer the
     * buyer verified. object.tracking_url (Optional): string. Absolute HTTPS carrier tracking URL.
     * Embedded URL credentials are rejected. Omitted for a checkout session credential that
     * doesn't act for the customer the buyer verified. object.updated_at (Required): string. Last
     * update timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.version
     * (Required): integer. Monotonic package version for expected_version checks. Format: uint64.
     * minimum: 1. object.weight (Optional): {@link Weight}. Physical weight of the package. A
     * weight value in grams, kilograms, ounces, or pounds, used in delivery profile configuration.
     * previous_attributes (Optional): object. Previous values of changed top-level fields in
     * data.object, at this delivery's API version. Nested changes include the whole previous
     * top-level value. A value is null when the field was absent before the change. Omitted when
     * Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields. carrier
         * (Optional): string. Carrier transporting the package. created_at (Required): string.
         * Creation timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". delivered_at
         * (Optional): string. Package delivery timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". dimensions (Optional): {@link Dimensions}. Physical length,
         * width, and height of the package. Package or item dimensions as `length`, `width`, and
         * `height` in the given `unit`. expected_delivery_at (Optional): string or null. When the
         * carrier or merchant expects this package to arrive. Null when no estimate is set.
         * Retained after delivery as history. This estimate is separate from the fulfillment's
         * promised shipment window. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * external_reference_id (Optional): string. Caller-owned identifier for this resource in
         * an external system. Requires external_system. External references are not unique. Use
         * Idempotency-Key for retries. maxLength: 255. Example: "warehouse-1842". external_system
         * (Optional): string. Name of the external system that external_reference_id belongs to.
         * External references are not unique. Use Idempotency-Key for retries. fulfillment_id
         * (Required): string. Fulfillment whose items are in the package. Example:
         * "ful_01KEZF7C00F24WVSTTWR1FQX5T". label_url (Optional): string. HTTPS shipping-label URL
         * supplied by your integration. Non-Flint URLs require external_system for provenance.
         * Flint does not host the label file. Omitted for a checkout session credential that
         * doesn't act for the customer the buyer verified. metadata (Optional): {@link
         * MetadataMap}. Caller-owned key-value metadata associated with the package. Caller-owned
         * key-value data stored on a resource. Keys starting with flint_ are reserved for Flint
         * and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput;
         * maps written before those limits may not satisfy them. order (Optional): {@link
         * ExpandedOrderSummary} or null. Order summary returned when the order relationship is
         * expanded. Present only when `expand` includes `order`; `null` when expanded and there is
         * no related order. order.anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's
         * summary fields, including status, payment and refund status, and pricing and settlement
         * amounts, returned when the order is expanded. order.anyOf[2] (Value): null. order_id
         * (Required): string. Order whose items are in the package. Example:
         * "ord_01KEZF7C0054GQKJ142A8X367A". package_id (Required): string. Stable identifier of
         * the package. Example: "pkg_01KEZF7C00ZZA16BJCEJBWKJ5R". return_id (Optional): string.
         * Return this package belongs to. Present only on packages of return shipments. Example:
         * "ret_01KEZF7C00PG93650ZKVQNGF7X". return_line_items (Optional): Array of {@link
         * ReturnResolutionLineItemRequest}. Return line quantities allocated to this parcel.
         * Present only on packages of return shipments. return_line_items[] (Value): {@link
         * ReturnResolutionLineItemRequest}. A return line and the quantity placed in a return
         * shipment or package. service_code (Optional): string. Carrier service used for the
         * package. shipment_id (Required): string. Shipment carrying this package. Example:
         * "shp_01KEZF7C00Q2AFXWXHMCDR3F68". shipped_at (Optional): string. Package handoff
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". status (Required):
         * string. Current package lifecycle state. Package states are the source used to derive
         * shipment status. - `created`: The package record exists but has not been packed or
         * handed off. - `packed`: The package is packed and awaiting carrier handoff. - `shipped`:
         * The package was handed to the carrier. - `in_transit`: The carrier is moving the package
         * through its network. - `out_for_delivery`: The package is on its final delivery route. -
         * `delivered`: The carrier reported successful delivery. - `delivery_attempted`: The
         * carrier attempted delivery but did not complete it. Follow the carrier instructions
         * before retrying delivery. - `exception`: A carrier exception is blocking normal
         * progress. Resolve the carrier-reported issue. - `returned`: The package was returned
         * toward or to its origin. - `voided`: The package was voided and will not continue
         * through delivery. Value enum: "created", "packed", "shipped", "in_transit",
         * "out_for_delivery", "delivered", "delivery_attempted", "exception", "returned",
         * "voided". status_reason (Optional): string. Additional explanation of the package's
         * current status. supported_actions (Required): Array of string. Lifecycle actions Flint
         * accepts now. mark_in_transit can repeat while in transit to refresh
         * expected_delivery_at. [] enum: "mark_delivered", "mark_delivery_attempted",
         * "mark_exception", "mark_in_transit", "mark_out_for_delivery", "mark_packed",
         * "mark_returned", "mark_shipped", "void". supported_actions[] (Value): string. Value
         * enum: "mark_delivered", "mark_delivery_attempted", "mark_exception", "mark_in_transit",
         * "mark_out_for_delivery", "mark_packed", "mark_returned", "mark_shipped", "void".
         * tracking_number (Optional): string. Omitted for a checkout session credential that
         * doesn't act for the customer the buyer verified. tracking_url (Optional): string.
         * Absolute HTTPS carrier tracking URL. Embedded URL credentials are rejected. Omitted for
         * a checkout session credential that doesn't act for the customer the buyer verified.
         * updated_at (Required): string. Last update timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". version (Required): integer. Monotonic package version for
         * expected_version checks. Format: uint64. minimum: 1. weight (Optional): {@link Weight}.
         * Physical weight of the package. A weight value in grams, kilograms, ounces, or pounds,
         * used in delivery profile configuration.
         */
        "object": {
            /** Carrier transporting the package. */
            "carrier"?: string;
            /** Creation timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /** Package delivery timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "delivered_at"?: string;
            /**
             * Physical length, width, and height of the package. Package or item dimensions as
             * `length`, `width`, and `height` in the given `unit`.
             */
            "dimensions"?: Dimensions;
            /**
             * When the carrier or merchant expects this package to arrive. Null when no estimate
             * is set. Retained after delivery as history. This estimate is separate from the
             * fulfillment's promised shipment window. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "expected_delivery_at"?: string | null;
            /**
             * Caller-owned identifier for this resource in an external system. Requires
             * external_system. External references are not unique. Use Idempotency-Key for
             * retries. maxLength: 255. Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Name of the external system that external_reference_id belongs to. External
             * references are not unique. Use Idempotency-Key for retries.
             */
            "external_system"?: string;
            /**
             * Fulfillment whose items are in the package. Example:
             * "ful_01KEZF7C00F24WVSTTWR1FQX5T".
             */
            "fulfillment_id": string;
            /**
             * HTTPS shipping-label URL supplied by your integration. Non-Flint URLs require
             * external_system for provenance. Flint does not host the label file. Omitted for a
             * checkout session credential that doesn't act for the customer the buyer verified.
             */
            "label_url"?: string;
            /**
             * Caller-owned key-value metadata associated with the package. Caller-owned key-value
             * data stored on a resource. Keys starting with flint_ are reserved for Flint and are
             * not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps
             * written before those limits may not satisfy them.
             */
            "metadata"?: MetadataMap;
            /**
             * Order summary returned when the order relationship is expanded. Present only when
             * `expand` includes `order`; `null` when expanded and there is no related order.
             * anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary fields, including
             * status, payment and refund status, and pricing and settlement amounts, returned when
             * the order is expanded. anyOf[2] (Value): null.
             */
            "order"?: ((ExpandedOrderSummary) | (null));
            /** Order whose items are in the package. Example: "ord_01KEZF7C0054GQKJ142A8X367A". */
            "order_id": string;
            /** Stable identifier of the package. Example: "pkg_01KEZF7C00ZZA16BJCEJBWKJ5R". */
            "package_id": string;
            /**
             * Return this package belongs to. Present only on packages of return shipments.
             * Example: "ret_01KEZF7C00PG93650ZKVQNGF7X".
             */
            "return_id"?: string;
            /**
             * Return line quantities allocated to this parcel. Present only on packages of return
             * shipments. [] (Value): {@link ReturnResolutionLineItemRequest}. A return line and
             * the quantity placed in a return shipment or package.
             */
            "return_line_items"?: Array<ReturnResolutionLineItemRequest>;
            /** Carrier service used for the package. */
            "service_code"?: string;
            /** Shipment carrying this package. Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68". */
            "shipment_id": string;
            /** Package handoff timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "shipped_at"?: string;
            /**
             * Current package lifecycle state. Package states are the source used to derive
             * shipment status. - `created`: The package record exists but has not been packed or
             * handed off. - `packed`: The package is packed and awaiting carrier handoff. -
             * `shipped`: The package was handed to the carrier. - `in_transit`: The carrier is
             * moving the package through its network. - `out_for_delivery`: The package is on its
             * final delivery route. - `delivered`: The carrier reported successful delivery. -
             * `delivery_attempted`: The carrier attempted delivery but did not complete it. Follow
             * the carrier instructions before retrying delivery. - `exception`: A carrier
             * exception is blocking normal progress. Resolve the carrier-reported issue. -
             * `returned`: The package was returned toward or to its origin. - `voided`: The
             * package was voided and will not continue through delivery. Value enum: "created",
             * "packed", "shipped", "in_transit", "out_for_delivery", "delivered",
             * "delivery_attempted", "exception", "returned", "voided".
             */
            "status": "created"
                | "packed"
                | "shipped"
                | "in_transit"
                | "out_for_delivery"
                | "delivered"
                | "delivery_attempted"
                | "exception"
                | "returned"
                | "voided"
                | (string & {});
            /** Additional explanation of the package's current status. */
            "status_reason"?: string;
            /**
             * Lifecycle actions Flint accepts now. mark_in_transit can repeat while in transit to
             * refresh expected_delivery_at. [] enum: "mark_delivered", "mark_delivery_attempted",
             * "mark_exception", "mark_in_transit", "mark_out_for_delivery", "mark_packed",
             * "mark_returned", "mark_shipped", "void". [] (Value): string. Value enum:
             * "mark_delivered", "mark_delivery_attempted", "mark_exception", "mark_in_transit",
             * "mark_out_for_delivery", "mark_packed", "mark_returned", "mark_shipped", "void".
             */
            "supported_actions": Array<"mark_delivered"
                | "mark_delivery_attempted"
                | "mark_exception"
                | "mark_in_transit"
                | "mark_out_for_delivery"
                | "mark_packed"
                | "mark_returned"
                | "mark_shipped"
                | "void"
                | (string & {})>;
            /**
             * Omitted for a checkout session credential that doesn't act for the customer the
             * buyer verified.
             */
            "tracking_number"?: string;
            /**
             * Absolute HTTPS carrier tracking URL. Embedded URL credentials are rejected. Omitted
             * for a checkout session credential that doesn't act for the customer the buyer
             * verified.
             */
            "tracking_url"?: string;
            /** Last update timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Monotonic package version for expected_version checks. Format: uint64. minimum: 1.
             */
            "version": number;
            /**
             * Physical weight of the package. A weight value in grams, kilograms, ounces, or
             * pounds, used in delivery profile configuration.
             */
            "weight"?: Weight;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<Package>;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "package.updated". */
    "event_type"?: "package.updated";
});
export type PackagesCreateItemParams = (InputValue<CreatePackageItemRequestInput>)
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
export type PackagesDeleteItemParams = {
    /** Optional item version last read by the caller. Format: uint64. minimum: 1. */
    "expected_version"?: InputValue<number>;
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
export type PackagesGetItemParams = FulfillmentEventsGetParams;
export type PackagesGetParams = FulfillmentEventsGetParams;
export type PackagesListPackageItemsParams = {
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
     * Include related objects in the response. Supported expansions: order. Include the requested
     * related resources using scoped batch reads for this page. Each relationship requires its
     * existing target read scopes. Expansion changes the representation without changing
     * pagination tokens. Limits: at most 10 unique expand paths per request. [] enum: "order".
     * Value enum: "order". anyOf[1] (Value): Array of string. [] enum: "order". anyOf[1][]
     * (Value): string. Value enum: "order". anyOf[2] (Value): string. Value enum: "order".
     */
    "expand"?: InputValue<("order") | readonly ("order")[]>;
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
export type PackagesListParams = {
    /** Optional shipment ID filter. Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68". */
    "shipment_id"?: InputValue<string>;
    /** Optional fulfillment ID filter. Example: "ful_01KEZF7C00F24WVSTTWR1FQX5T". */
    "fulfillment_id"?: InputValue<string>;
    /** Optional order ID filter. Example: "ord_01KEZF7C0054GQKJ142A8X367A". */
    "order_id"?: InputValue<string>;
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
    /** Filter by external system identifier. */
    "external_system"?: InputValue<string>;
    /**
     * Exact match on the package's `external_reference_id`. minLength: 1. maxLength: 255. Example:
     * "warehouse-1842".
     */
    "external_reference_id"?: InputValue<string>;
    /**
     * Search across package ID, external reference ID, and tracking number. Text fields match any
     * part of the value, and %, _ and \ are ordinary characters, not wildcards. IDs match from the
     * start and need the type prefix, such as pkg_01.
     */
    "query"?: InputValue<string>;
    /** Inclusive lower bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
    /**
     * Filter by package status. Values within this filter are combined with OR. Values are trimmed
     * and deduplicated in first-seen order; empty or unknown entries are rejected. Values within
     * this filter are ORed; separate filters are ANDed. [] enum: "created", "packed", "shipped",
     * "in_transit", "out_for_delivery", "delivered", "delivery_attempted", "exception",
     * "returned", "voided". Value enum: "created", "packed", "shipped", "in_transit",
     * "out_for_delivery", "delivered", "delivery_attempted", "exception", "returned", "voided".
     * anyOf[1] (Value): Array of string. minItems: 1. [] enum: "created", "packed", "shipped",
     * "in_transit", "out_for_delivery", "delivered", "delivery_attempted", "exception",
     * "returned", "voided". anyOf[1][] (Value): string. Value enum: "created", "packed",
     * "shipped", "in_transit", "out_for_delivery", "delivered", "delivery_attempted", "exception",
     * "returned", "voided". anyOf[2] (Value): string. Value enum: "created", "packed", "shipped",
     * "in_transit", "out_for_delivery", "delivered", "delivery_attempted", "exception",
     * "returned", "voided".
     */
    "status"?: InputValue<("created"
        | "packed"
        | "shipped"
        | "in_transit"
        | "out_for_delivery"
        | "delivered"
        | "delivery_attempted"
        | "exception"
        | "returned"
        | "voided")
        | readonly ("created"
        | "packed"
        | "shipped"
        | "in_transit"
        | "out_for_delivery"
        | "delivered"
        | "delivery_attempted"
        | "exception"
        | "returned"
        | "voided")[]>;
    /**
     * Byte-sensitive full tracking-number match. Whitespace and commas are literal; combine with
     * carrier to identify a carrier-specific tracking number. minLength: 1. maxLength: 255.
     */
    "tracking_number"?: InputValue<string>;
    /**
     * Byte-sensitive full carrier match. Whitespace and commas are literal. minLength: 1.
     * maxLength: 255.
     */
    "carrier"?: InputValue<string>;
    /** Inclusive lower bound on updated_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on updated_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_before"?: InputValue<string | globalThis.Date>;
    /**
     * Include related objects in the response. Supported expansions: order. Include the requested
     * related resources using scoped batch reads for this page. Each relationship requires its
     * existing target read scopes. Expansion changes the representation without changing
     * pagination tokens. Limits: at most 10 unique expand paths per request. [] enum: "order".
     * Value enum: "order". anyOf[1] (Value): Array of string. [] enum: "order". anyOf[1][]
     * (Value): string. Value enum: "order". anyOf[2] (Value): string. Value enum: "order".
     */
    "expand"?: InputValue<("order") | readonly ("order")[]>;
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
export type PackagesMarkDeliveredParams = (InputValue<MarkPackageDeliveredRequestInput>
    | {
    "buyer_notification_behavior"?: never;
    "expected_version"?: never;
    "occurred_at"?: never;
    "reason_message"?: never;
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
export type PackagesMarkDeliveryAttemptedParams = (InputValue<MarkPackageDeliveryAttemptedRequestInput>
    | {
    "buyer_notification_behavior"?: never;
    "expected_version"?: never;
    "occurred_at"?: never;
    "reason_message"?: never;
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
export type PackagesMarkExceptionParams = (InputValue<MarkPackageExceptionRequestInput>
    | {
    "buyer_notification_behavior"?: never;
    "expected_version"?: never;
    "occurred_at"?: never;
    "reason_message"?: never;
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
export type PackagesMarkInTransitParams = (InputValue<MarkPackageInTransitRequestInput>
    | {
    "buyer_notification_behavior"?: never;
    "expected_delivery_at"?: never;
    "expected_version"?: never;
    "occurred_at"?: never;
    "reason_message"?: never;
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
export type PackagesMarkOutForDeliveryParams = (InputValue<MarkPackageOutForDeliveryRequestInput>
    | {
    "buyer_notification_behavior"?: never;
    "expected_delivery_at"?: never;
    "expected_version"?: never;
    "occurred_at"?: never;
    "reason_message"?: never;
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
export type PackagesMarkPackedParams = (InputValue<MarkPackagePackedRequestInput>
    | {
    "buyer_notification_behavior"?: never;
    "expected_version"?: never;
    "occurred_at"?: never;
    "reason_message"?: never;
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
export type PackagesMarkReturnedParams = (InputValue<MarkPackageReturnedRequestInput>
    | {
    "buyer_notification_behavior"?: never;
    "expected_version"?: never;
    "occurred_at"?: never;
    "reason_message"?: never;
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
export type PackagesMarkShippedParams = (InputValue<MarkPackageShippedRequestInput>
    | {
    "buyer_notification_behavior"?: never;
    "carrier"?: never;
    "expected_delivery_at"?: never;
    "expected_version"?: never;
    "occurred_at"?: never;
    "reason_message"?: never;
    "service_code"?: never;
    "tracking_number"?: never;
    "tracking_url"?: never;
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
export type PackagesUpdateItemParams = (InputValue<UpdatePackageItemRequestInput>)
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
export type PackagesUpdateParams = (InputValue<UpdatePackageRequestInput>)
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
export type PackagesVoidParams = (InputValue<VoidPackageRequestInput>
    | {
    "buyer_notification_behavior"?: never;
    "expected_version"?: never;
    "occurred_at"?: never;
    "reason_message"?: never;
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
/** An application that merchants can authorize to access their accounts. */
export type PartnerApp = {
    /**
     * Every Flint scope the app can hold: the union of required_scopes across the manifest. An
     * install grants only the scopes of the permissions the merchant approves. [] (Value): string.
     */
    "allowed_scopes": Array<string>;
    /**
     * Default API version for requests without a Flint-Version header. Shared across live and test
     * environments.
     */
    "api_version": string;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "api_version_changed_at"?: string;
    /** Previous API version, present while a supported rollback is available. */
    "api_version_previous"?: string;
    /**
     * When the 72-hour rollback offer expires. Explicit changes to any supported version remain
     * available afterward. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "api_version_rollback_expires_at"?: string;
    /**
     * Public identifier the app sends as client_id in OAuth authorization and token requests.
     * Doesn't change. Example: "fpc_00112233445566778899aabbccddeeff".
     */
    "client_id": string;
    /**
     * Whether the app can authenticate with a client secret. When false, it authenticates with a
     * registered credential.
     */
    "client_secret_enabled": boolean;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "client_secret_last_used_at": string | null;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /**
     * IDs of the permissions requested when an authorization request sends no scope. Defaults to
     * every permission in the manifest that isn't optional. [] (Value): string.
     */
    "default_requested_permissions": Array<string>;
    /** The app's name, shown to merchants on the consent screen. */
    "name": string;
    /**
     * Unique identifier for this partner app, prefixed `papp_`. Example:
     * "papp_01KEZF7C00Y8VMXYZ1GNPP3WHV".
     */
    "partner_app_id": string;
    /**
     * Permissions the app can request from merchants. Each lists the Flint scopes it grants. []
     * (Value): {@link PartnerAppPermissionManifestEntry}. One permission a partner app can
     * request, with a title, a description, and the Flint scopes it grants.
     */
    "permission_manifest": Array<PartnerAppPermissionManifestEntry>;
    /**
     * The app's platform onboarding: status, outstanding requirements, platform capabilities,
     * terms acceptance, and once Flint approves or limits it, the platform's limits and reserve.
     * The app's platform onboarding. Platform capabilities apply in live mode only; test mode
     * never checks them. requirements and capability readiness that depend on the owning
     * merchant's live onboarding are read when Flint serves the app, so a change there alone
     * doesn't advance the app's version or send a partner_app event.
     */
    "platform": PartnerAppPlatform;
    /**
     * What the app told Flint for its platform review. Absent until set. What the platform tells
     * Flint for its review. It is one value: a write replaces it whole.
     */
    "platform_profile"?: PartnerAppPlatformProfile;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "previous_secret_expires_at"?: string;
    /**
     * Redirect URIs the app can use after authorization. Each is an absolute HTTPS URL, or HTTP on
     * localhost or a loopback address, with no fragment. [] (Value): string.
     */
    "redirect_uris": Array<string>;
    /** Value enum: "active", "archived". */
    "status": "active" | "archived" | (string & {});
    /**
     * Lifecycle actions Flint accepts now: accept_platform_terms while the current platform terms
     * version isn't accepted, `[]` otherwise and for a deleted app. rotate-secret is an operation,
     * not a lifecycle action, so it is never listed. [] enum: "accept_platform_terms". [] (Value):
     * string. Value enum: "accept_platform_terms".
     */
    "supported_actions": Array<"accept_platform_terms" | (string & {})>;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "updated_at": string;
    /**
     * Starts at 1 and increases by 1 each time the app is updated, its client secret is rotated,
     * its platform terms are accepted, Flint decides on its platform review or changes its
     * platform terms, or it is deleted. Usage in platform.limits.usage and the owning merchant's
     * own onboarding don't change it. Send it as expected_version to apply an update only to the
     * version you read. Format: uint64. minimum: 1.
     */
    "version": number;
};
/**
 * An immutable partner app credential, including its authentication status and usage timestamps.
 */
export type PartnerAppCredential = ({
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /** A registered JWKS URL and its most recent successful fetch. */
    "jwks_url"?: PartnerAppCredentialJWKSURL;
    /**
     * When the credential last authenticated the app. Updated at most once an hour, so it can lag
     * the latest use by up to an hour. `null` when the credential has never been used. Format:
     * date-time. Example: "2026-08-02T16:00:00Z".
     */
    "last_used_at": string | null;
    /** Name given to the credential when it was created. `null` when it has no name. */
    "name": string | null;
    /**
     * Unique identifier for this partner app credential, prefixed `pacr_`. Example:
     * "pacr_01KEZF7C005RDK44XFG5WF94BB".
     */
    "partner_app_credential_id": string;
    /** Example: "papp_01KEZF7C00Y8VMXYZ1GNPP3WHV". */
    "partner_app_id": string;
    /** A registered public JSON Web Key and its RFC 7638 SHA-256 thumbprint. */
    "public_key"?: PartnerAppCredentialPublicKey;
    /** Value enum: "active", "removed". */
    "status": "active" | "removed" | (string & {});
    /**
     * Credential type. Currently public_key, jwks_url, or workload_identity. Value enum:
     * "public_key", "jwks_url", "workload_identity".
     */
    "type": "public_key" | "jwks_url" | "workload_identity" | (string & {});
    /** The registered external OIDC issuer, exact subject, audience, and claim conditions. */
    "workload_identity"?: PartnerAppCredentialWorkloadIdentity;
});
/** A registered JWKS URL and its most recent successful fetch. */
export type PartnerAppCredentialJWKSURL = {
    /**
     * Most recent successful fetch of this URL by Flint. Updated at most once per minute. Format:
     * date-time. Example: "2026-08-02T16:00:00Z".
     */
    "last_fetched_at": string;
    "url": string;
};
/**
 * A public HTTPS JSON Web Key Set URL. Flint validates and fetches it before registering the
 * credential.
 */
export type PartnerAppCredentialJWKSURLRequestInput = {
    /**
     * HTTPS URL with a DNS host, optional port 443, no userinfo or fragment, and an optional
     * query. Flint API hosts and nonpublic destinations are rejected. The URL must serve a JSON
     * Web Key Set with 1 to 10 supported public signing keys; unusable keys are ignored and don't
     * count. minLength: 1. maxLength: 2048.
     */
    "url": string;
};
/** A page of `PartnerAppCredential` objects. */
export type PartnerAppCredentialListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * PartnerAppCredential}. An immutable partner app credential, including its authentication
     * status and usage timestamps.
     */
    "data": Array<PartnerAppCredential>;
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
/** A registered public JSON Web Key and its RFC 7638 SHA-256 thumbprint. */
export type PartnerAppCredentialPublicKey = {
    "jwk": {
        [key: string]: unknown;
    };
    /** RFC 7638 SHA-256 JWK thumbprint. */
    "jwk_thumbprint": string;
};
/** The public JSON Web Key to register for client authentication. */
export type PartnerAppCredentialPublicKeyRequest = {
    /** A public JSON Web Key. Private key and symmetric key members are rejected. */
    "jwk": {
        [key: string]: unknown;
    };
};
/** The public JSON Web Key to register for client authentication. */
export type PartnerAppCredentialPublicKeyRequestInput = PartnerAppCredentialPublicKeyRequest;
/** A response containing `PartnerAppCredential` data. */
export type PartnerAppCredentialResponse = {
    /**
     * Resource, collection, or operation result returned by this request. An immutable partner app
     * credential, including its authentication status and usage timestamps.
     */
    "data": PartnerAppCredential;
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
/** The registered external OIDC issuer, exact subject, audience, and claim conditions. */
export type PartnerAppCredentialWorkloadIdentity = {
    "audience": string;
    /**
     * Bounded value array of top-level scalar conditions checked for every assertion. [] (Value):
     * {@link WorkloadIdentityClaimCondition}. A condition matching one top-level scalar claim in
     * the workload's identity token.
     */
    "claim_conditions": Array<WorkloadIdentityClaimCondition>;
    "issuer": string;
    /**
     * The platform Flint recognizes from the issuer. New platform values may be added. Value enum:
     * "generic", "github_actions", "gitlab_ci", "google_cloud", "aws", "azure", "kubernetes",
     * "circleci", "buildkite", "vercel", "fly_io".
     */
    "platform": "generic"
        | "github_actions"
        | "gitlab_ci"
        | "google_cloud"
        | "aws"
        | "azure"
        | "kubernetes"
        | "circleci"
        | "buildkite"
        | "vercel"
        | "fly_io"
        | (string & {});
    "subject": string;
};
