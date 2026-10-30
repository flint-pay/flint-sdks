import type {
    OrderTaxLocationInputFullAddress,
    OrderTaxLocationInputPostalCode,
    OrderTaxLocationInputFullAddressInput,
    OrderTaxCalculationRequest,
    OrderTaxCalculationRequestInput,
    OrderLineItemTaxAssignment,
    OrderLineItemTaxAssignmentInput
} from './types-37.js';
import type { OrderChargeTaxAssignment, OrderChargeTaxAssignmentInput, Order } from './types-36.js';
import type { MerchantWebhookEnvelope, MetadataMap, MetadataRequestInput } from './types-34.js';
import type { PartnerWebhookEnvelope, PayOrderRequestInput } from './types-40.js';
import type {
    ApplyDiscountRequestInput,
    ApplyOrderGiftCardRequestInput,
    AddOrderChargeRequestInput,
    AddLineItemsRequestInput
} from './types-0.js';
import type { InputValue } from '../runtime.js';
import type { CancelOrderPaymentAttemptRequestInput } from './types-3.js';
import type { CloseOrderRequestInput, CheckoutSessionsListDeliverySelectionsParams } from './types-5.js';
import type { CreateFulfillmentRequestInput } from './types-7.js';
import type {
    CreateOrderRequestInput,
    CreateOrderPaymentIntentRequestInput,
    CreateOrganizationRequestInput,
    CreatePackageItemRequest,
    CreatePackageItemRequestInput
} from './types-9.js';
import type { PaymentIntentWithCollectionResponse } from './types-41.js';
import type { MeListOrderActivitiesParams } from './types-33.js';
import type {
    RemoveDiscountsRequestInput,
    RepriceDiscountsRequestInput,
    ResolveOrderInventoryExceptionRequestInput
} from './types-47.js';
import type { SendOrderReceiptRequestInput } from './types-53.js';
import type { UpdateOrderChargeRequestInput, UpdateOrderRequestInput, UpdateOrganizationRequestInput } from './types-59.js';
import type { UpdateLineItemRequestInput } from './types-58.js';
import type { ExpandedOrganizationSummary, ExpandedOrderSummary } from './types-21.js';
import type { ResponseMeta } from './types-48.js';
import type { GrantOrganizationMembershipRequestInput } from './types-25.js';
import type { Dimensions, DimensionsInput } from './types-20.js';
import type { ReturnResolutionLineItemRequest, ReturnShipmentLineItemAllocationRequestInput } from './types-50.js';
import type { Weight, WeightInput } from './types-61.js';
/** The `postal_code` variant of `OrderTaxLocationInput`. */
export type OrderTaxLocationInputPostalCodeInput = {
    /** A postal code, with an optional country, you supply as an order's tax location. */
    "address": OrderTaxLocationPostalAddressRequestInput;
    /**
     * Where the tax address comes from. The only accepted value is provided, which is the default.
     * Default: "provided". Value enum: "provided".
     */
    "address_source"?: "provided";
    /** Value enum: "postal_code". */
    "address_type": "postal_code";
};
/** A postal code, with an optional country, you supply as an order's tax location. */
export type OrderTaxLocationPostalAddressRequest = {
    /**
     * ISO 3166-1 alpha-2 country code. minLength: 2. maxLength: 2. pattern: ^[A-Z]{2}$. Default:
     * "US". Example: "US". Value enum: "US".
     */
    "country"?: "US" | (string & {});
    /** minLength: 1. pattern: \S. */
    "postal_code": string;
};
/** A postal code, with an optional country, you supply as an order's tax location. */
export type OrderTaxLocationPostalAddressRequestInput = {
    /**
     * ISO 3166-1 alpha-2 country code. minLength: 2. maxLength: 2. pattern: ^[A-Z]{2}$. Default:
     * "US". Example: "US". Value enum: "US".
     */
    "country"?: "US";
    /** minLength: 1. pattern: \S. */
    "postal_code": string;
};
/**
 * The tax location you supply for an order, as a postal code or a full address, with or without an
 * address type.
 */
export type OrderTaxLocationRequest = ((OrderTaxLocationInputPostalCode) | (OrderTaxLocationInputFullAddress) | (Record<string, unknown>));
/**
 * The tax location you supply for an order, as a postal code or a full address, with or without an
 * address type.
 */
export type OrderTaxLocationRequestInput = ((OrderTaxLocationInputPostalCodeInput) | (OrderTaxLocationInputFullAddressInput));
/**
 * Tax settings you supply when creating an order: whether tax is enabled, how it is calculated,
 * and the tax location.
 */
export type OrderTaxRequest = ({
    /**
     * How tax is calculated on an order: automatically, or externally with the tax components you
     * supply.
     */
    "calculation"?: OrderTaxCalculationRequest;
    /** Default: true. */
    "enabled"?: boolean;
    /**
     * The tax location you supply for an order, as a postal code or a full address, with or
     * without an address type.
     */
    "location"?: OrderTaxLocationRequest;
});
/**
 * Tax settings you supply when creating an order: whether tax is enabled, how it is calculated,
 * and the tax location.
 */
export type OrderTaxRequestInput = ({
    /**
     * How tax is calculated on an order: automatically, or externally with the tax components you
     * supply.
     */
    "calculation"?: OrderTaxCalculationRequestInput;
    /** Default: true. */
    "enabled"?: boolean;
    /**
     * The tax location you supply for an order, as a postal code or a full address, with or
     * without an address type.
     */
    "location"?: OrderTaxLocationRequestInput;
});
/**
 * Changes to an order's tax settings: whether tax is enabled, the calculation, the location, and
 * per-line-item or per-charge calculations.
 */
export type OrderTaxUpdateRequest = ({
    /**
     * How tax is calculated on an order: automatically, or externally with the tax components you
     * supply.
     */
    "calculation"?: OrderTaxCalculationRequest;
    /**
     * Replace calculations for the listed components and keep unlisted calculations. Allowed only
     * when the order uses external tax, including a switch in this request. Settled components
     * cannot be changed. [] (Value): {@link OrderChargeTaxAssignment}. An externally calculated
     * tax you assign to one order charge.
     */
    "charge_calculations"?: Array<OrderChargeTaxAssignment>;
    "enabled"?: boolean;
    /**
     * Replace calculations for the listed components and keep unlisted calculations. Allowed only
     * when the order uses external tax, including a switch in this request. Settled components
     * cannot be changed. [] (Value): {@link OrderLineItemTaxAssignment}. An externally calculated
     * tax you assign to one order line item.
     */
    "line_item_calculations"?: Array<OrderLineItemTaxAssignment>;
    /**
     * The tax location you supply for an order, as a postal code or a full address, with or
     * without an address type.
     */
    "location"?: OrderTaxLocationRequest;
});
/**
 * Changes to an order's tax settings: whether tax is enabled, the calculation, the location, and
 * per-line-item or per-charge calculations.
 */
export type OrderTaxUpdateRequestInput = ({
    /**
     * How tax is calculated on an order: automatically, or externally with the tax components you
     * supply.
     */
    "calculation"?: OrderTaxCalculationRequestInput;
    /**
     * Replace calculations for the listed components and keep unlisted calculations. Allowed only
     * when the order uses external tax, including a switch in this request. Settled components
     * cannot be changed. [] (Value): {@link OrderChargeTaxAssignmentInput}. An externally
     * calculated tax you assign to one order charge.
     */
    "charge_calculations"?: Array<OrderChargeTaxAssignmentInput>;
    "enabled"?: boolean;
    /**
     * Replace calculations for the listed components and keep unlisted calculations. Allowed only
     * when the order uses external tax, including a switch in this request. Settled components
     * cannot be changed. [] (Value): {@link OrderLineItemTaxAssignmentInput}. An externally
     * calculated tax you assign to one order line item.
     */
    "line_item_calculations"?: Array<OrderLineItemTaxAssignmentInput>;
    /**
     * The tax location you supply for an order, as a postal code or a full address, with or
     * without an address type.
     */
    "location"?: OrderTaxLocationRequestInput;
});
export type OrderUpdatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Order;
    };
    "event_type"?: "order.updated";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Order;
    };
    "event_type"?: "order.updated";
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
    "event_type": "order.updated";
});
/**
 * The `order.updated` webhook payload for the `installed_merchants` event source. Fields shared by
 * partner webhook payloads.
 */
export type OrderUpdatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link Order}. A customer's purchase and its payment and fulfillment
     * progress.
     */
    "data"?: {
        /** A customer's purchase and its payment and fulfillment progress. */
        "object": Order;
    };
    /** Value enum: "order.updated". */
    "event_type"?: "order.updated";
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
 * The `order.updated` webhook payload for the `merchant` event source. Fields shared by merchant
 * webhook payloads.
 */
export type OrderUpdatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link Order}. A customer's purchase and its payment and fulfillment
     * progress.
     */
    "data"?: {
        /** A customer's purchase and its payment and fulfillment progress. */
        "object": Order;
    };
    /** Value enum: "order.updated". */
    "event_type"?: "order.updated";
});
export type OrdersApplyDiscountParams = (ApplyDiscountRequestInput);
export type OrdersApplyGiftCardParams = (InputValue<ApplyOrderGiftCardRequestInput>)
    & {
    /**
     * Single-use proof from the checkout's gift card challenge. Needed only after
     * GIFT_CARD_CHALLENGE_REQUIRED. While a challenge is required, every code needs a new proof,
     * for up to an hour after the failures that triggered it. Ignored for API keys.
     */
    "Flint-Gift-Card-Challenge"?: InputValue<string>;
};
export type OrdersCancelPaymentAttemptParams = (InputValue<CancelOrderPaymentAttemptRequestInput>);
export type OrdersCloseParams = (InputValue<CloseOrderRequestInput>);
export type OrdersCreateAccessLinkParams = (InputValue<{}>);
export type OrdersCreateChargeParams = (InputValue<AddOrderChargeRequestInput>);
export type OrdersCreateFulfillmentParams = (CreateFulfillmentRequestInput);
export type OrdersCreateLineItemsParams = (InputValue<AddLineItemsRequestInput>);
export type OrdersCreateParams = (InputValue<CreateOrderRequestInput>);
export type OrdersCreatePaymentIntentParams = (InputValue<CreateOrderPaymentIntentRequestInput>);
export type OrdersCreatePaymentIntentResponse = ({
    "data"?: {
        "payment_collection": unknown;
    };
})
    & (Exclude<PaymentIntentWithCollectionResponse & object, readonly unknown[]>);
export type OrdersDeleteChargeParams = {
    /**
     * Order version from the last order read. The mutation fails if the order changed. Format:
     * int64. minimum: 1.
     */
    "expected_version"?: InputValue<number>;
};
export type OrdersDeleteLineItemParams = OrdersDeleteChargeParams;
export type OrdersGetCurrentDeliverySelectionParams = {};
export type OrdersGetParams = {
    /**
     * Supported expansions: customer, fulfillments.packages, fulfillments.shipments,
     * payment_intents, subscription, subscription_plan. Expansion requires the base order read
     * scope plus the read scope for each expanded resource. Limits: at most 10 unique expand paths
     * per request. To-many expansions are capped at 20 related objects per path. Repeat expand,
     * for example expand=customer&expand=fulfillments.packages, or pass one comma-separated value.
     * [] enum: "customer", "fulfillments.packages", "fulfillments.shipments", "payment_intents",
     * "subscription", "subscription_plan". Value enum: "customer", "fulfillments.packages",
     * "fulfillments.shipments", "payment_intents", "subscription", "subscription_plan". anyOf[1]
     * (Value): Array of string. [] enum: "customer", "fulfillments.packages",
     * "fulfillments.shipments", "payment_intents", "subscription", "subscription_plan". anyOf[1][]
     * (Value): string. Value enum: "customer", "fulfillments.packages", "fulfillments.shipments",
     * "payment_intents", "subscription", "subscription_plan". anyOf[2] (Value): string. Value
     * enum: "customer", "fulfillments.packages", "fulfillments.shipments", "payment_intents",
     * "subscription", "subscription_plan".
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
};
export type OrdersGetPaymentAttemptParams = {};
export type OrdersListActivitiesParams = MeListOrderActivitiesParams;
export type OrdersListParams = {
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
    /** Filter by customer ID. Example: "cus_01ARZ3NDEKTSV4RRFFQ69G5FAV". */
    "customer_id"?: InputValue<string>;
    /**
     * Exact-match filter on order IDs. Repeat the parameter or use comma-separated IDs to match
     * any of up to 100 distinct IDs. Unknown IDs and orders outside your merchant or environment
     * are absent. Other filters still apply, and results keep the list's ordering and pagination.
     * Keep the same ID set on subsequent pages. anyOf[1] (Value): Array of string. minItems: 1.
     * maxItems: 100. Example: "ord_01ARZ3NDEKTSV4RRFFQ69G5FAV". anyOf[1][] (Value): string.
     * pattern: ^ord_[0-9A-HJKMNP-TV-Z]{26}$. anyOf[2] (Value): string. pattern:
     * ^ord_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "order_id"?: InputValue<(string) | readonly (string)[]>;
    /**
     * Why a closed order closed. Repeated keys and comma-separated values match any reason.
     * Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and
     * deduplicated in first-seen order; empty or unknown entries are rejected. Values within this
     * filter are ORed; separate filters are ANDed. [] enum: "paid", "closed_by_merchant",
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
     * Order status: open or closed. Repeated keys and comma-separated values are both accepted.
     * Selecting open and closed includes both statuses. Accepts repeated keys, comma-separated
     * values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or
     * unknown entries are rejected. Values within this filter are ORed; separate filters are
     * ANDed. [] enum: "open", "closed". Value enum: "open", "closed". anyOf[1] (Value): Array of
     * string. minItems: 1. [] enum: "open", "closed". anyOf[1][] (Value): string. Value enum:
     * "open", "closed". anyOf[2] (Value): string. Value enum: "open", "closed".
     */
    "status"?: InputValue<("open" | "closed") | readonly ("open" | "closed")[]>;
    /**
     * Filter by settled collection status. Repeat the parameter or pass comma-separated values to
     * match any of several statuses. Accepts repeated keys, comma-separated values, or mixtures.
     * Values are trimmed and deduplicated in first-seen order; empty or unknown entries are
     * rejected. Values within this filter are ORed; separate filters are ANDed. [] enum: "unpaid",
     * "partially_paid", "paid". Value enum: "unpaid", "partially_paid", "paid". anyOf[1] (Value):
     * Array of string. minItems: 1. [] enum: "unpaid", "partially_paid", "paid". anyOf[1][]
     * (Value): string. Value enum: "unpaid", "partially_paid", "paid". anyOf[2] (Value): string.
     * Value enum: "unpaid", "partially_paid", "paid".
     */
    "payment_status"?: InputValue<("unpaid" | "partially_paid" | "paid") | readonly ("unpaid" | "partially_paid" | "paid")[]>;
    /**
     * Filter by refund progress. Repeated keys and comma-separated values are both accepted to
     * match any status. Accepts repeated keys, comma-separated values, or mixtures. Values are
     * trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values
     * within this filter are ORed; separate filters are ANDed. [] enum: "none",
     * "partially_refunded", "refunded". Value enum: "none", "partially_refunded", "refunded".
     * anyOf[1] (Value): Array of string. minItems: 1. [] enum: "none", "partially_refunded",
     * "refunded". anyOf[1][] (Value): string. Value enum: "none", "partially_refunded",
     * "refunded". anyOf[2] (Value): string. Value enum: "none", "partially_refunded", "refunded".
     */
    "refund_status"?: InputValue<("none" | "partially_refunded" | "refunded")
        | readonly ("none" | "partially_refunded" | "refunded")[]>;
    /**
     * Filter by aggregate order fulfillment status. Repeated keys and comma-separated values are
     * both accepted to match any status. Accepts repeated keys, comma-separated values, or
     * mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries
     * are rejected. Values within this filter are ORed; separate filters are ANDed. [] enum:
     * "not_fulfilled", "partially_fulfilled", "fulfilled", "canceled", "not_applicable", "closed".
     * Value enum: "not_fulfilled", "partially_fulfilled", "fulfilled", "canceled",
     * "not_applicable", "closed". anyOf[1] (Value): Array of string. minItems: 1. [] enum:
     * "not_fulfilled", "partially_fulfilled", "fulfilled", "canceled", "not_applicable", "closed".
     * anyOf[1][] (Value): string. Value enum: "not_fulfilled", "partially_fulfilled", "fulfilled",
     * "canceled", "not_applicable", "closed". anyOf[2] (Value): string. Value enum:
     * "not_fulfilled", "partially_fulfilled", "fulfilled", "canceled", "not_applicable", "closed".
     */
    "fulfillment_status"?: InputValue<("not_fulfilled" | "partially_fulfilled" | "fulfilled" | "canceled" | "not_applicable" | "closed")
        | readonly ("not_fulfilled" | "partially_fulfilled" | "fulfilled" | "canceled" | "not_applicable" | "closed")[]>;
    /** Filter by merchant-visible order number. */
    "order_number"?: InputValue<string>;
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
     */
    "external_reference_id"?: InputValue<string>;
    /**
     * Filter by order origin. Accepts repeated keys, comma-separated values, or mixtures. Values
     * are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected.
     * Values within this filter are ORed; separate filters are ANDed. [] enum: "virtual_terminal",
     * "payment_link", "checkout", "api", "subscription". Value enum: "virtual_terminal",
     * "payment_link", "checkout", "api", "subscription". anyOf[1] (Value): Array of string.
     * minItems: 1. [] enum: "virtual_terminal", "payment_link", "checkout", "api", "subscription".
     * anyOf[1][] (Value): string. Value enum: "virtual_terminal", "payment_link", "checkout",
     * "api", "subscription". anyOf[2] (Value): string. Value enum: "virtual_terminal",
     * "payment_link", "checkout", "api", "subscription".
     */
    "origin"?: InputValue<("virtual_terminal" | "payment_link" | "checkout" | "api" | "subscription")
        | readonly ("virtual_terminal" | "payment_link" | "checkout" | "api" | "subscription")[]>;
    /**
     * Search across order_id, order number, external_reference_id, fulfillment
     * external_reference_id, buyer email, notes, and line item names. Text fields match any part
     * of the value, and %, _ and \ are ordinary characters, not wildcards. IDs match from the
     * start and need the type prefix, such as ord_01.
     */
    "query"?: InputValue<string>;
    /** Filter by subscription ID. Example: "sub_01ARZ3NDEKTSV4RRFFQ69G5FAV". */
    "subscription_id"?: InputValue<string>;
    /** Filter by whether the subscriber changed delivery after this order was paid. */
    "subscription_delivery_changed"?: InputValue<boolean>;
    /**
     * Filter by the Return that created a replacement order. Example:
     * "ret_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     */
    "return_id"?: InputValue<string>;
    /**
     * Filter by the ReturnResolution that created a replacement order. Example:
     * "retres_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     */
    "return_resolution_id"?: InputValue<string>;
    /**
     * Filter by the payment link whose checkout created the order. Example:
     * "pl_01ARZ3NDEKTSV4RRFFQ69G5FAV".
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
     * Supported expansions: customer, subscription, subscription_plan. Include the requested
     * related resources using scoped batch reads for this page. Each relationship requires its
     * existing target read scopes. Expansion changes the representation without changing
     * pagination tokens. Limits: at most 10 unique expand paths per request. Repeat expand, for
     * example expand=customer&expand=subscription, or pass one comma-separated value. [] enum:
     * "customer", "subscription", "subscription_plan". Value enum: "customer", "subscription",
     * "subscription_plan". anyOf[1] (Value): Array of string. [] enum: "customer", "subscription",
     * "subscription_plan". anyOf[1][] (Value): string. Value enum: "customer", "subscription",
     * "subscription_plan". anyOf[2] (Value): string. Value enum: "customer", "subscription",
     * "subscription_plan".
     */
    "expand"?: InputValue<("customer" | "subscription" | "subscription_plan")
        | readonly ("customer" | "subscription" | "subscription_plan")[]>;
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
     * Opaque next_page_token from the previous response. Omit on the first request. You may change
     * `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request
     * context. Do not parse or construct tokens. An invalid, expired, or mismatched token returns
     * a validation error.
     */
    "page_token"?: InputValue<string>;
};
export type OrdersPayParams = (PayOrderRequestInput)
    & {
    /**
     * A stable random device identifier, independent of the order or checkout session. Required
     * for checkout-session gift card purchases. Keep it for subsequent purchases from the same
     * device; it grants no access. pattern: ^[a-f0-9]{32}$.
     */
    "Flint-Buyer-Device"?: InputValue<string>;
};
export type OrdersRemoveDiscountsParams = (InputValue<RemoveDiscountsRequestInput>);
export type OrdersRemoveGiftCardParams = {
    /**
     * Order version from the last order read. The mutation fails if the order changed. Format:
     * int64. minimum: 1.
     */
    "expected_version": InputValue<number>;
};
export type OrdersRepriceDiscountsParams = (InputValue<RepriceDiscountsRequestInput>);
export type OrdersResolveInventoryExceptionParams = (InputValue<ResolveOrderInventoryExceptionRequestInput>);
export type OrdersSendReceiptParams = (InputValue<SendOrderReceiptRequestInput>);
export type OrdersUpdateChargeParams = (InputValue<UpdateOrderChargeRequestInput>);
export type OrdersUpdateLineItemParams = (InputValue<UpdateLineItemRequestInput>);
export type OrdersUpdateParams = (InputValue<UpdateOrderRequestInput>);
/** An organization that manages merchant accounts. */
export type Organization = {
    /** RFC3339 timestamp. Format: date-time. */
    "created_at"?: string;
    /**
     * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for
     * Flint and are not returned. Writes follow the limits on MetadataInput and
     * MetadataPatchInput; maps written before those limits may not satisfy them.
     */
    "metadata"?: MetadataMap;
    "name": string;
    "organization_id": string;
    /**
     * Present only when `expand` includes `parent_organization`; `null` when expanded and there is
     * no related organization. anyOf[1] (Value): {@link ExpandedOrganizationSummary}. An
     * organization's summary fields, such as its name, status, and parent, returned when the
     * organization is expanded. anyOf[2] (Value): null.
     */
    "parent_organization"?: ((ExpandedOrganizationSummary) | (null));
    "parent_organization_id"?: string;
    /**
     * Current status. Archived: deleted. API keys can no longer read or list the organization.
     * Value enum: "active", "archived".
     */
    "status": "active" | "archived" | (string & {});
    /** RFC3339 timestamp. Format: date-time. */
    "updated_at"?: string;
    /** Persisted organization configuration and membership version. Format: uint64. minimum: 1. */
    "version": number;
};
/** A page of `Organization` objects. */
export type OrganizationListResponse = {
    /**  [] (Value): {@link Organization}. An organization that manages merchant accounts. */
    "data": Array<Organization>;
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
/** A user's membership in an organization, with the role and whether it is active or removed. */
export type OrganizationMembership = {
    /** RFC3339 timestamp. Format: date-time. */
    "created_at"?: string;
    "organization_id": string;
    /** Value enum: "owner", "admin", "operator", "viewer". */
    "role": "owner" | "admin" | "operator" | "viewer" | (string & {});
    /** Value enum: "active", "removed". */
    "status": "active" | "removed" | (string & {});
    /** RFC3339 timestamp. Format: date-time. */
    "updated_at"?: string;
    "user_id": string;
};
/** A page of `OrganizationMembership` objects. */
export type OrganizationMembershipListResponse = {
    /**
     *  [] (Value): {@link OrganizationMembership}. A user's membership in an organization, with
     * the role and whether it is active or removed.
     */
    "data": Array<OrganizationMembership>;
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
/** A response containing `OrganizationMembership` data. */
export type OrganizationMembershipResponse = {
    /**
     * A user's membership in an organization, with the role and whether it is active or removed.
     */
    "data": OrganizationMembership;
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
/** A response containing `Organization` data. */
export type OrganizationResponse = {
    /** An organization that manages merchant accounts. */
    "data": Organization;
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
export type OrganizationsCreateParams = (InputValue<CreateOrganizationRequestInput>);
export type OrganizationsDeleteParams = {
    /** Optional organization version last read by the caller. Format: uint64. minimum: 1. */
    "expected_version"?: InputValue<number>;
};
export type OrganizationsGetParams = {
    /**
     * Supported expansions: parent_organization. Expansion requires accounts.organizations.read.
     * Limits: at most 10 unique expand paths per request. Pass expand=parent_organization. []
     * enum: "parent_organization". Value enum: "parent_organization". anyOf[1] (Value): Array of
     * string. [] enum: "parent_organization". anyOf[1][] (Value): string. Value enum:
     * "parent_organization". anyOf[2] (Value): string. Value enum: "parent_organization".
     */
    "expand"?: InputValue<("parent_organization") | readonly ("parent_organization")[]>;
};
export type OrganizationsGrantMembershipParams = (InputValue<GrantOrganizationMembershipRequestInput>);
export type OrganizationsListMembershipsParams = CheckoutSessionsListDeliverySelectionsParams;
export type OrganizationsListParams = {
    /** Optional parent organization filter. Example: "org_01ARZ3NDEKTSV4RRFFQ69G5FAV". */
    "parent_organization_id"?: InputValue<string>;
    /**
     * Filter by status. Repeat the parameter or send comma-separated values to match any of
     * several. Omitted, the list leaves out archived rows; name archived to include them. Accepts
     * repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in
     * first-seen order; empty or unknown entries are rejected. Values within this filter are ORed;
     * separate filters are ANDed. [] enum: "active", "archived". Value enum: "active", "archived".
     * anyOf[1] (Value): Array of string. minItems: 1. [] enum: "active", "archived". anyOf[1][]
     * (Value): string. Value enum: "active", "archived". anyOf[2] (Value): string. Value enum:
     * "active", "archived".
     */
    "status"?: InputValue<("active" | "archived") | readonly ("active" | "archived")[]>;
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
     * Field to sort by. Defaults to created_at; ties are broken by organization_id. Default:
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
    /**
     * Supported expansions: parent_organization. Include the requested related resources using
     * scoped batch reads for this page. Each relationship requires its existing target read
     * scopes. Expansion changes the representation without changing pagination tokens. Limits: at
     * most 10 unique expand paths per request. Pass expand=parent_organization. [] enum:
     * "parent_organization". Value enum: "parent_organization". anyOf[1] (Value): Array of string.
     * [] enum: "parent_organization". anyOf[1][] (Value): string. Value enum:
     * "parent_organization". anyOf[2] (Value): string. Value enum: "parent_organization".
     */
    "expand"?: InputValue<("parent_organization") | readonly ("parent_organization")[]>;
};
export type OrganizationsRemoveMembershipParams = {};
export type OrganizationsUpdateParams = (InputValue<UpdateOrganizationRequestInput>);
/** A package within a shipment. */
export type Package = {
    /** Carrier transporting the package. */
    "carrier"?: string;
    /** Creation timestamp. Format: date-time. */
    "created_at"?: string;
    /** Package delivery timestamp. Format: date-time. */
    "delivered_at"?: string;
    /**
     * Physical length, width, and height of the package. Package or item dimensions as `length`,
     * `width`, and `height` in the given `unit`.
     */
    "dimensions"?: Dimensions;
    /**
     * When the carrier or merchant expects this package to arrive. Null when no estimate is set.
     * Retained after delivery as history. This estimate is separate from the fulfillment's
     * promised shipment window. Format: date-time.
     */
    "expected_delivery_at"?: string | null;
    /**
     * Caller-owned identifier for this resource in an external system. Requires external_system.
     * External references are not unique. Use Idempotency-Key for retries. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Name of the external system that external_reference_id belongs to. External references are
     * not unique. Use Idempotency-Key for retries.
     */
    "external_system"?: string;
    /** Fulfillment whose items are in the package. */
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
    /** Order whose items are in the package. */
    "order_id": string;
    /** Stable identifier of the package. */
    "package_id": string;
    /** Return this package belongs to. Present only on packages of return shipments. */
    "return_id"?: string;
    /**
     * Return line quantities allocated to this parcel. Present only on packages of return
     * shipments. [] (Value): {@link ReturnResolutionLineItemRequest}. A return line and the
     * quantity placed in a return shipment or package.
     */
    "return_line_items"?: Array<ReturnResolutionLineItemRequest>;
    /** Carrier service used for the package. */
    "service_code"?: string;
    /** Shipment carrying this package. */
    "shipment_id": string;
    /** Package handoff timestamp. Format: date-time. */
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
     * Read-only actions currently supported for this package. [] enum: "mark_delivered",
     * "mark_delivery_attempted", "mark_exception", "mark_in_transit", "mark_out_for_delivery",
     * "mark_packed", "mark_returned", "mark_shipped". [] (Value): string. Value enum:
     * "mark_delivered", "mark_delivery_attempted", "mark_exception", "mark_in_transit",
     * "mark_out_for_delivery", "mark_packed", "mark_returned", "mark_shipped".
     */
    "supported_actions": Array<"mark_delivered"
        | "mark_delivery_attempted"
        | "mark_exception"
        | "mark_in_transit"
        | "mark_out_for_delivery"
        | "mark_packed"
        | "mark_returned"
        | "mark_shipped"
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
    /** Last update timestamp. Format: date-time. */
    "updated_at"?: string;
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
    /** minLength: 1. */
    "carrier"?: string;
    /** Package or item dimensions as `length`, `width`, and `height` in the given `unit`. */
    "dimensions"?: Dimensions;
    /**
     * When the carrier or merchant expects this package to arrive. Past dates are allowed. Send
     * null to clear it; omit to leave it unchanged on updates and transitions. Format: date-time.
     * minLength: 1.
     */
    "expected_delivery_at"?: string | null;
    /**
     * Caller-owned identifier for this resource in an external system. Requires external_system.
     * External references are not unique. Use Idempotency-Key for retries. minLength: 1.
     * maxLength: 255.
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
    /** minLength: 1. */
    "service_code"?: string;
    /**
     * Package handoff time. Defaults to request time. Only allowed with status shipped. Format:
     * date-time. minLength: 1.
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
    /** minLength: 1. */
    "tracking_number"?: string;
    /** Absolute HTTPS carrier tracking URL. Embedded URL credentials are rejected. minLength: 1. */
    "tracking_url"?: string;
    /**
     * A weight value in grams, kilograms, ounces, or pounds, used in delivery profile
     * configuration.
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
    /** minLength: 1. */
    "carrier"?: string;
    /** Package or item dimensions as `length`, `width`, and `height` in the given `unit`. */
    "dimensions"?: DimensionsInput;
    /**
     * When the carrier or merchant expects this package to arrive. Past dates are allowed. Send
     * null to clear it; omit to leave it unchanged on updates and transitions. Format: date-time.
     * minLength: 1.
     */
    "expected_delivery_at"?: string | globalThis.Date | null;
    /**
     * Caller-owned identifier for this resource in an external system. Requires external_system.
     * External references are not unique. Use Idempotency-Key for retries. minLength: 1.
     * maxLength: 255.
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
    /** minLength: 1. */
    "service_code"?: string;
    /**
     * Package handoff time. Defaults to request time. Only allowed with status shipped. Format:
     * date-time. minLength: 1.
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
    /** minLength: 1. */
    "tracking_number"?: string;
    /** Absolute HTTPS carrier tracking URL. Embedded URL credentials are rejected. minLength: 1. */
    "tracking_url"?: string;
    /**
     * A weight value in grams, kilograms, ounces, or pounds, used in delivery profile
     * configuration.
     */
    "weight"?: WeightInput;
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
    /** minLength: 1. */
    "carrier"?: string;
    /** Package or item dimensions as `length`, `width`, and `height` in the given `unit`. */
    "dimensions"?: Dimensions;
    /**
     * When the carrier or merchant expects this package to arrive. Past dates are allowed. Send
     * null to clear it; omit to leave it unchanged on updates and transitions. Format: date-time.
     * minLength: 1.
     */
    "expected_delivery_at"?: string | null;
    /**
     * Caller-owned identifier for this resource in an external system. Requires external_system.
     * External references are not unique. Use Idempotency-Key for retries. minLength: 1.
     * maxLength: 255.
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
    /** minLength: 1. */
    "service_code"?: string;
    /**
     * Package handoff time. Defaults to request time. Only allowed with status shipped. Format:
     * date-time. minLength: 1.
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
    /** minLength: 1. */
    "tracking_number"?: string;
    /** Absolute HTTPS carrier tracking URL. Embedded URL credentials are rejected. minLength: 1. */
    "tracking_url"?: string;
    /**
     * A weight value in grams, kilograms, ounces, or pounds, used in delivery profile
     * configuration.
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
    /** minLength: 1. */
    "carrier"?: string;
    /** Package or item dimensions as `length`, `width`, and `height` in the given `unit`. */
    "dimensions"?: DimensionsInput;
    /**
     * When the carrier or merchant expects this package to arrive. Past dates are allowed. Send
     * null to clear it; omit to leave it unchanged on updates and transitions. Format: date-time.
     * minLength: 1.
     */
    "expected_delivery_at"?: string | globalThis.Date | null;
    /**
     * Caller-owned identifier for this resource in an external system. Requires external_system.
     * External references are not unique. Use Idempotency-Key for retries. minLength: 1.
     * maxLength: 255.
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
    /** minLength: 1. */
    "service_code"?: string;
    /**
     * Package handoff time. Defaults to request time. Only allowed with status shipped. Format:
     * date-time. minLength: 1.
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
    /** minLength: 1. */
    "tracking_number"?: string;
    /** Absolute HTTPS carrier tracking URL. Embedded URL credentials are rejected. minLength: 1. */
    "tracking_url"?: string;
    /**
     * A weight value in grams, kilograms, ounces, or pounds, used in delivery profile
     * configuration.
     */
    "weight"?: WeightInput;
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
    /** minLength: 1. */
    "carrier"?: string;
    /** Package or item dimensions as `length`, `width`, and `height` in the given `unit`. */
    "dimensions"?: Dimensions;
    /**
     * When the carrier or merchant expects this package to arrive. Past dates are allowed. Send
     * null to clear it; omit to leave it unchanged on updates and transitions. Format: date-time.
     * minLength: 1.
     */
    "expected_delivery_at"?: string | null;
    /**
     * Caller-owned identifier for this resource in an external system. Requires external_system.
     * External references are not unique. Use Idempotency-Key for retries. minLength: 1.
     * maxLength: 255.
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
    /** minLength: 1. */
    "service_code"?: string;
    /**
     * Package handoff time. Defaults to request time. Only allowed with status shipped. Format:
     * date-time. minLength: 1.
     */
    "shipped_at"?: string;
    /**
     * Outbound packages can start as created or shipped. Return packages must start as created,
     * omit items, and include return_line_items. Use mark_shipped after the buyer hands over the
     * return package. Value enum: "created", "shipped".
     */
    "status": "created" | "shipped" | (string & {});
    /** minLength: 1. */
    "status_reason"?: string;
    /** minLength: 1. */
    "tracking_number"?: string;
    /** Absolute HTTPS carrier tracking URL. Embedded URL credentials are rejected. minLength: 1. */
    "tracking_url"?: string;
    /**
     * A weight value in grams, kilograms, ounces, or pounds, used in delivery profile
     * configuration.
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
    /** minLength: 1. */
    "carrier"?: string;
    /** Package or item dimensions as `length`, `width`, and `height` in the given `unit`. */
    "dimensions"?: DimensionsInput;
    /**
     * When the carrier or merchant expects this package to arrive. Past dates are allowed. Send
     * null to clear it; omit to leave it unchanged on updates and transitions. Format: date-time.
     * minLength: 1.
     */
    "expected_delivery_at"?: string | globalThis.Date | null;
    /**
     * Caller-owned identifier for this resource in an external system. Requires external_system.
     * External references are not unique. Use Idempotency-Key for retries. minLength: 1.
     * maxLength: 255.
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
    /** minLength: 1. */
    "service_code"?: string;
    /**
     * Package handoff time. Defaults to request time. Only allowed with status shipped. Format:
     * date-time. minLength: 1.
     */
    "shipped_at"?: string | globalThis.Date;
    /**
     * Outbound packages can start as created or shipped. Return packages must start as created,
     * omit items, and include return_line_items. Use mark_shipped after the buyer hands over the
     * return package. Value enum: "created", "shipped".
     */
    "status": "created" | "shipped";
    /** minLength: 1. */
    "status_reason"?: string;
    /** minLength: 1. */
    "tracking_number"?: string;
    /** Absolute HTTPS carrier tracking URL. Embedded URL credentials are rejected. minLength: 1. */
    "tracking_url"?: string;
    /**
     * A weight value in grams, kilograms, ounces, or pounds, used in delivery profile
     * configuration.
     */
    "weight"?: WeightInput;
})
    & ((Exclude<PackageCreateInputCreatedInput & object, readonly unknown[]>)
    | (Exclude<PackageCreateInputShippedInput & object, readonly unknown[]>));
export type PackageCreatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Package;
    };
    "event_type"?: "package.created";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Package;
    };
    "event_type"?: "package.created";
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
    "event_type": "package.created";
});
/**
 * The `package.created` webhook payload for the `installed_merchants` event source. Fields shared
 * by partner webhook payloads.
 */
export type PackageCreatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link Package}. A package within a shipment. */
    "data"?: {
        /** A package within a shipment. */
        "object": Package;
    };
    /** Value enum: "package.created". */
    "event_type"?: "package.created";
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
 * The `package.created` webhook payload for the `merchant` event source. Fields shared by merchant
 * webhook payloads.
 */
export type PackageCreatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link Package}. A package within a shipment. */
    "data"?: {
        /** A package within a shipment. */
        "object": Package;
    };
    /** Value enum: "package.created". */
    "event_type"?: "package.created";
});
