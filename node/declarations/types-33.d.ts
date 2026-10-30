import type { LocationCoordinate, Location, InvoicesCreateCheckoutSessionParams } from './types-32.js';
import type { ResponseMeta } from './types-48.js';
import type { InputValue } from '../runtime.js';
import type { CreateLocationRequestInput, CreateMeSubscriptionPreviewRequestInput } from './types-8.js';
import type { InventoryAllocationPoliciesDeleteParams } from './types-25.js';
import type { UpdateLocationRequestInput } from './types-58.js';
import type { MoneyValue, MoneyValueInput } from './types-35.js';
import type { CancelReturnRequestInput, CancelSubscriptionRequestInput } from './types-4.js';
import type { ConfirmEmailChangeRequestInput } from './types-6.js';
import type { CustomersCreateAddressParams, CustomersDeleteAddressParams } from './types-14.js';
import type { CreateEmailChangeRequestInput } from './types-7.js';
import type { SaveMePaymentMethodRequestInput } from './types-52.js';
import type { BuyerCreateReturnRequestInput, BuyerCreateReturnPreviewRequestInput } from './types-1.js';
import type { GetOrCreateReturnResolutionCheckoutSessionRequestInput } from './types-23.js';
import type { CheckoutSessionsListDeliverySelectionsParams } from './types-5.js';
/** A latitude and longitude for a merchant location. */
export type LocationCoordinateRequestInput = LocationCoordinate;
/** A page of `Location` objects. */
export type LocationListResponse = {
    /**
     *  [] (Value): {@link Location}. A physical or logical place a merchant operates from. Every
     * Location can hold stock. inventory_allocation_enabled controls whether it accepts inventory
     * allocation.
     */
    "data": Array<Location>;
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
/** A response containing `Location` data. */
export type LocationResponse = {
    /**
     * A physical or logical place a merchant operates from. Every Location can hold stock.
     * inventory_allocation_enabled controls whether it accepts inventory allocation.
     */
    "data": Location;
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
export type LocationsCreateParams = (InputValue<CreateLocationRequestInput>);
export type LocationsDeleteParams = InventoryAllocationPoliciesDeleteParams;
export type LocationsGetParams = {};
export type LocationsListParams = {
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
     * Filter by whether the Location accepts inventory allocation. false includes Locations
     * without an inventory allocation configuration.
     */
    "inventory_allocation_enabled"?: InputValue<boolean>;
    /**
     * Exact-match filter on the caller-owned external reference ID. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: InputValue<string>;
    /** Search Location ID, external reference ID, or name. maxLength: 255. */
    "query"?: InputValue<string>;
};
export type LocationsUpdateParams = (InputValue<UpdateLocationRequestInput>);
/** The request body for: Look up a gift card code. */
export type LookupGiftCardRequest = {
    /** minLength: 1. */
    "code": string;
};
/** The request body for: Look up a gift card code. */
export type LookupGiftCardRequestInput = LookupGiftCardRequest;
/**
 * A discount you apply by hand to an order, with a name, an amount, and the order, line items, or
 * charges it applies to.
 */
export type ManualDiscountRequest = {
    /**
     * Fixed discount to apply to the order. The amount and every computed order amount must not
     * exceed 99999999 minor units ($999,999.99 USD). Flint rejects an input or calculation above
     * this ceiling with INVALID_REQUEST and detail INVALID_VALUE at the responsible input field.
     * Lower payment option limits can apply. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
    /** Value enum: "order", "line_item", "service_charge". */
    "discount_class"?: "order" | "line_item" | "service_charge" | (string & {});
    /** minLength: 1. */
    "name": string;
    /**  [] (Value): string. minLength: 1. */
    "order_charge_ids"?: Array<string>;
    /**  [] (Value): string. minLength: 1. */
    "order_line_item_ids"?: Array<string>;
    /** Value enum: "order", "line_item". */
    "scope"?: "order" | "line_item" | (string & {});
};
/**
 * A discount you apply by hand to an order, with a name, an amount, and the order, line items, or
 * charges it applies to.
 */
export type ManualDiscountRequestInput = {
    /**
     * Fixed discount to apply to the order. The amount and every computed order amount must not
     * exceed 99999999 minor units ($999,999.99 USD). Flint rejects an input or calculation above
     * this ceiling with INVALID_REQUEST and detail INVALID_VALUE at the responsible input field.
     * Lower payment option limits can apply. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValueInput;
    /** Value enum: "order", "line_item", "service_charge". */
    "discount_class"?: "order" | "line_item" | "service_charge";
    /** minLength: 1. */
    "name": string;
    /**  [] (Value): string. minLength: 1. */
    "order_charge_ids"?: Array<string>;
    /**  [] (Value): string. minLength: 1. */
    "order_line_item_ids"?: Array<string>;
    /** Value enum: "order", "line_item". */
    "scope"?: "order" | "line_item";
};
export type MeCancelReturnParams = (InputValue<CancelReturnRequestInput>);
export type MeCancelSubscriptionParams = (InputValue<CancelSubscriptionRequestInput>);
export type MeConfirmEmailChangeRequestParams = (InputValue<ConfirmEmailChangeRequestInput>);
export type MeCreateAddressParams = CustomersCreateAddressParams;
export type MeCreateDeletionRequestParams = {};
export type MeCreateEmailChangeRequestParams = (InputValue<CreateEmailChangeRequestInput>);
export type MeCreateFlintWalletStoreSetupParams = {};
export type MeCreateInvoiceCheckoutSessionParams = InvoicesCreateCheckoutSessionParams;
export type MeCreatePaymentMethodParams = (InputValue<SaveMePaymentMethodRequestInput>);
export type MeCreateReturnParams = (InputValue<BuyerCreateReturnRequestInput>);
export type MeCreateReturnPreviewParams = (BuyerCreateReturnPreviewRequestInput);
export type MeCreateReturnResolutionCheckoutSessionParams = (InputValue<GetOrCreateReturnResolutionCheckoutSessionRequestInput>);
export type MeCreateSubscriptionPaymentRetryParams = (InputValue<{}>);
export type MeCreateSubscriptionPreviewParams = (CreateMeSubscriptionPreviewRequestInput);
export type MeDeleteAddressParams = CustomersDeleteAddressParams;
export type MeDeletePaymentMethodParams = {};
export type MeGetAddressParams = {};
export type MeGetCreditNotePDFParams = {};
export type MeGetCreditNotePDFResponse = Uint8Array;
export type MeGetCreditNoteParams = {};
export type MeGetDeletionRequestParams = {};
export type MeGetEmailPreferencesParams = {};
export type MeGetFulfillmentParams = {};
export type MeGetGiftCardParams = {};
export type MeGetInvoicePDFParams = {};
export type MeGetInvoicePDFResponse = Uint8Array;
export type MeGetInvoiceParams = {};
export type MeGetOrderParams = {};
export type MeGetPackageParams = {};
export type MeGetParams = {};
export type MeGetPaymentIntentParams = {};
export type MeGetPaymentMethodParams = {};
export type MeGetRefundParams = {};
export type MeGetReturnParams = {};
export type MeGetReturnResolutionParams = {};
export type MeGetShipmentParams = {};
export type MeGetSubscriptionParams = {};
export type MeGetSubscriptionPaymentRetryParams = {};
export type MeListAddressesParams = CheckoutSessionsListDeliverySelectionsParams;
export type MeListCreditNotesParams = {
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
     * Filter by status. Accepts repeated keys, comma-separated values, or mixtures. Values are
     * trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values
     * within this filter are ORed; separate filters are ANDed. [] enum: "issued", "void". Value
     * enum: "issued", "void". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "issued",
     * "void". anyOf[1][] (Value): string. Value enum: "issued", "void". anyOf[2] (Value): string.
     * Value enum: "issued", "void".
     */
    "status"?: InputValue<("issued" | "void") | readonly ("issued" | "void")[]>;
};
export type MeListDeletionRequestsParams = {
    /**
     * Only return requests in this lifecycle state. Accepts repeated keys, comma-separated values,
     * or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown
     * entries are rejected. Values within this filter are ORed; separate filters are ANDed. []
     * enum: "pending_review", "processing", "completed", "rejected", "failed". Value enum:
     * "pending_review", "processing", "completed", "rejected", "failed". anyOf[1] (Value): Array
     * of string. minItems: 1. [] enum: "pending_review", "processing", "completed", "rejected",
     * "failed". anyOf[1][] (Value): string. Value enum: "pending_review", "processing",
     * "completed", "rejected", "failed". anyOf[2] (Value): string. Value enum: "pending_review",
     * "processing", "completed", "rejected", "failed".
     */
    "status"?: InputValue<("pending_review" | "processing" | "completed" | "rejected" | "failed")
        | readonly ("pending_review" | "processing" | "completed" | "rejected" | "failed")[]>;
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
export type MeListFlintWalletCardsParams = {};
export type MeListFulfillmentEventsParams = {
    /** Required buyer-owned order ID. Example: "ord_01ARZ3NDEKTSV4RRFFQ69G5FAV". */
    "order_id": InputValue<string>;
    /** Filter by fulfillment ID. Example: "ful_01ARZ3NDEKTSV4RRFFQ69G5FAV". */
    "fulfillment_id"?: InputValue<string>;
    /** Filter by shipment ID. Example: "shp_01ARZ3NDEKTSV4RRFFQ69G5FAV". */
    "shipment_id"?: InputValue<string>;
    /** Filter by package ID. Example: "pkg_01ARZ3NDEKTSV4RRFFQ69G5FAV". */
    "package_id"?: InputValue<string>;
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
export type MeListFulfillmentsParams = {
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
    /** Filter by order ID. Example: "ord_01ARZ3NDEKTSV4RRFFQ69G5FAV". */
    "order_id"?: InputValue<string>;
    /**
     * Filter by buyer-visible status. Held fulfillments match their pre-hold status. Accepts
     * repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in
     * first-seen order; empty or unknown entries are rejected. Values within this filter are ORed;
     * separate filters are ANDed. [] enum: "pending", "in_progress", "ready", "completed",
     * "canceled", "failed", "scheduled", "accepted", "preparing", "picked", "packed",
     * "dispatched", "no_show". Value enum: "pending", "in_progress", "ready", "completed",
     * "canceled", "failed", "scheduled", "accepted", "preparing", "picked", "packed",
     * "dispatched", "no_show". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "pending",
     * "in_progress", "ready", "completed", "canceled", "failed", "scheduled", "accepted",
     * "preparing", "picked", "packed", "dispatched", "no_show". anyOf[1][] (Value): string. Value
     * enum: "pending", "in_progress", "ready", "completed", "canceled", "failed", "scheduled",
     * "accepted", "preparing", "picked", "packed", "dispatched", "no_show". anyOf[2] (Value):
     * string. Value enum: "pending", "in_progress", "ready", "completed", "canceled", "failed",
     * "scheduled", "accepted", "preparing", "picked", "packed", "dispatched", "no_show".
     */
    "status"?: InputValue<("pending"
        | "in_progress"
        | "ready"
        | "completed"
        | "canceled"
        | "failed"
        | "scheduled"
        | "accepted"
        | "preparing"
        | "picked"
        | "packed"
        | "dispatched"
        | "no_show")
        | readonly ("pending"
        | "in_progress"
        | "ready"
        | "completed"
        | "canceled"
        | "failed"
        | "scheduled"
        | "accepted"
        | "preparing"
        | "picked"
        | "packed"
        | "dispatched"
        | "no_show")[]>;
    /**
     * Filter by fulfillment type. Accepts repeated keys, comma-separated values, or mixtures.
     * Values are trimmed and deduplicated in first-seen order; empty or unknown entries are
     * rejected. Values within this filter are ORed; separate filters are ANDed. [] enum:
     * "shipment", "pickup", "local_delivery", "digital", "service". Value enum: "shipment",
     * "pickup", "local_delivery", "digital", "service". anyOf[1] (Value): Array of string.
     * minItems: 1. [] enum: "shipment", "pickup", "local_delivery", "digital", "service".
     * anyOf[1][] (Value): string. Value enum: "shipment", "pickup", "local_delivery", "digital",
     * "service". anyOf[2] (Value): string. Value enum: "shipment", "pickup", "local_delivery",
     * "digital", "service".
     */
    "type"?: InputValue<("shipment" | "pickup" | "local_delivery" | "digital" | "service")
        | readonly ("shipment" | "pickup" | "local_delivery" | "digital" | "service")[]>;
    /** Inclusive lower bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
    /** Inclusive lower bound on updated_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on updated_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_before"?: InputValue<string | globalThis.Date>;
    /** Sort direction. Defaults to desc. Default: "desc". Value enum: "asc", "desc". */
    "sort_direction"?: InputValue<"asc" | "desc">;
};
export type MeListGiftCardTransactionsParams = CheckoutSessionsListDeliverySelectionsParams;
export type MeListGiftCardsParams = {
    /**
     * Filter by status. Accepts repeated keys, comma-separated values, or mixtures. Values are
     * trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values
     * within this filter are ORed; separate filters are ANDed. [] enum: "pending", "active",
     * "frozen", "closed". Value enum: "pending", "active", "frozen", "closed". anyOf[1] (Value):
     * Array of string. minItems: 1. [] enum: "pending", "active", "frozen", "closed". anyOf[1][]
     * (Value): string. Value enum: "pending", "active", "frozen", "closed". anyOf[2] (Value):
     * string. Value enum: "pending", "active", "frozen", "closed".
     */
    "status"?: InputValue<("pending" | "active" | "frozen" | "closed")
        | readonly ("pending" | "active" | "frozen" | "closed")[]>;
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
export type MeListInvoicesParams = {
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
     * Filter by invoice status. Repeat the parameter or pass comma-separated values to match
     * multiple statuses. Accepts repeated keys, comma-separated values, or mixtures. Values are
     * trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values
     * within this filter are ORed; separate filters are ANDed. [] enum: "open", "partially_paid",
     * "paid", "void", "uncollectible", "credited". Value enum: "open", "partially_paid", "paid",
     * "void", "uncollectible", "credited". anyOf[1] (Value): Array of string. minItems: 1. []
     * enum: "open", "partially_paid", "paid", "void", "uncollectible", "credited". anyOf[1][]
     * (Value): string. Value enum: "open", "partially_paid", "paid", "void", "uncollectible",
     * "credited". anyOf[2] (Value): string. Value enum: "open", "partially_paid", "paid", "void",
     * "uncollectible", "credited".
     */
    "status"?: InputValue<("open" | "partially_paid" | "paid" | "void" | "uncollectible" | "credited")
        | readonly ("open" | "partially_paid" | "paid" | "void" | "uncollectible" | "credited")[]>;
    /** Filter by Flint order ID. Example: "ord_01ARZ3NDEKTSV4RRFFQ69G5FAV". */
    "order_id"?: InputValue<string>;
    /** Inclusive lower bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
    /** Inclusive lower bound on due_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "due_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on due_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "due_before"?: InputValue<string | globalThis.Date>;
    /** Filter by whether the invoice is overdue. */
    "is_overdue"?: InputValue<boolean>;
    /** Filter by whether outstanding_money is greater than zero. */
    "has_outstanding_balance"?: InputValue<boolean>;
    /**
     * Field to sort by. Defaults to created_at; ties are broken by invoice_id. Default:
     * "created_at". Value enum: "created_at", "updated_at", "due_at", "invoice_number",
     * "outstanding_money".
     */
    "sort_by"?: InputValue<"created_at" | "updated_at" | "due_at" | "invoice_number" | "outstanding_money">;
    /** Sort direction. Defaults to desc. Default: "desc". Value enum: "asc", "desc". */
    "sort_direction"?: InputValue<"asc" | "desc">;
};
export type MeListOrderActivitiesParams = {
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
    /** Sort direction. Defaults to desc. Default: "desc". Value enum: "asc", "desc". */
    "sort_direction"?: InputValue<"asc" | "desc">;
    /**
     * Filter by activity type. Repeat the parameter or pass comma-separated values to OR multiple
     * types. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and
     * deduplicated in first-seen order; empty or unknown entries are rejected. Values within this
     * filter are ORed; separate filters are ANDed. [] enum: "created", "line_item_added",
     * "line_item_updated", "line_item_removed", "discount_applied", "discount_removed",
     * "tax_updated", "requested_tip_added", "requested_tip_updated", "requested_tip_removed",
     * "charge_added", "charge_updated", "charge_removed", "charge_fulfillment_updated",
     * "order_updated", "adjustment", "closed", "payment", "payment_failed", "refund",
     * "refund_failed", "checkout_session_created", "checkout_session_expired",
     * "checkout_session_invalidated", "fulfillment_created", "fulfillment_updated",
     * "fulfillment_state_changed". Value enum: "created", "line_item_added", "line_item_updated",
     * "line_item_removed", "discount_applied", "discount_removed", "tax_updated",
     * "requested_tip_added", "requested_tip_updated", "requested_tip_removed", "charge_added",
     * "charge_updated", "charge_removed", "charge_fulfillment_updated", "order_updated",
     * "adjustment", "closed", "payment", "payment_failed", "refund", "refund_failed",
     * "checkout_session_created", "checkout_session_expired", "checkout_session_invalidated",
     * "fulfillment_created", "fulfillment_updated", "fulfillment_state_changed". anyOf[1] (Value):
     * Array of string. minItems: 1. [] enum: "created", "line_item_added", "line_item_updated",
     * "line_item_removed", "discount_applied", "discount_removed", "tax_updated",
     * "requested_tip_added", "requested_tip_updated", "requested_tip_removed", "charge_added",
     * "charge_updated", "charge_removed", "charge_fulfillment_updated", "order_updated",
     * "adjustment", "closed", "payment", "payment_failed", "refund", "refund_failed",
     * "checkout_session_created", "checkout_session_expired", "checkout_session_invalidated",
     * "fulfillment_created", "fulfillment_updated", "fulfillment_state_changed". anyOf[1][]
     * (Value): string. Value enum: "created", "line_item_added", "line_item_updated",
     * "line_item_removed", "discount_applied", "discount_removed", "tax_updated",
     * "requested_tip_added", "requested_tip_updated", "requested_tip_removed", "charge_added",
     * "charge_updated", "charge_removed", "charge_fulfillment_updated", "order_updated",
     * "adjustment", "closed", "payment", "payment_failed", "refund", "refund_failed",
     * "checkout_session_created", "checkout_session_expired", "checkout_session_invalidated",
     * "fulfillment_created", "fulfillment_updated", "fulfillment_state_changed". anyOf[2] (Value):
     * string. Value enum: "created", "line_item_added", "line_item_updated", "line_item_removed",
     * "discount_applied", "discount_removed", "tax_updated", "requested_tip_added",
     * "requested_tip_updated", "requested_tip_removed", "charge_added", "charge_updated",
     * "charge_removed", "charge_fulfillment_updated", "order_updated", "adjustment", "closed",
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
};
export type MeListOrdersParams = {
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
     * Separate subscription renewal purchases (subscription) from orders placed through other
     * channels. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and
     * deduplicated in first-seen order; empty or unknown entries are rejected. Values within this
     * filter are ORed; separate filters are ANDed. [] enum: "virtual_terminal", "payment_link",
     * "checkout", "api", "subscription". Value enum: "virtual_terminal", "payment_link",
     * "checkout", "api", "subscription". anyOf[1] (Value): Array of string. minItems: 1. [] enum:
     * "virtual_terminal", "payment_link", "checkout", "api", "subscription". anyOf[1][] (Value):
     * string. Value enum: "virtual_terminal", "payment_link", "checkout", "api", "subscription".
     * anyOf[2] (Value): string. Value enum: "virtual_terminal", "payment_link", "checkout", "api",
     * "subscription".
     */
    "origin"?: InputValue<("virtual_terminal" | "payment_link" | "checkout" | "api" | "subscription")
        | readonly ("virtual_terminal" | "payment_link" | "checkout" | "api" | "subscription")[]>;
    /**
     * Search across order_id, order number, buyer note, and line item names. Text fields match any
     * part of the value, and %, _ and \ are ordinary characters, not wildcards. IDs match from the
     * start and need the type prefix, such as ord_01.
     */
    "query"?: InputValue<string>;
    /** Filter by subscription ID. Example: "sub_01ARZ3NDEKTSV4RRFFQ69G5FAV". */
    "subscription_id"?: InputValue<string>;
    /** Filter by whether the subscriber changed delivery after this order was paid. */
    "subscription_delivery_changed"?: InputValue<boolean>;
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
};
export type MeListPackagesParams = {
    /** Optional shipment ID filter. Example: "shp_01ARZ3NDEKTSV4RRFFQ69G5FAV". */
    "shipment_id"?: InputValue<string>;
    /** Optional fulfillment ID filter. Example: "ful_01ARZ3NDEKTSV4RRFFQ69G5FAV". */
    "fulfillment_id"?: InputValue<string>;
    /** Optional order ID filter. Example: "ord_01ARZ3NDEKTSV4RRFFQ69G5FAV". */
    "order_id"?: InputValue<string>;
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
    /** Inclusive lower bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
    /**
     * Filter by package status. Values within this filter are combined with OR. Accepts repeated
     * keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen
     * order; empty or unknown entries are rejected. Values within this filter are ORed; separate
     * filters are ANDed. [] enum: "created", "packed", "shipped", "in_transit",
     * "out_for_delivery", "delivered", "delivery_attempted", "exception", "returned", "voided".
     * Value enum: "created", "packed", "shipped", "in_transit", "out_for_delivery", "delivered",
     * "delivery_attempted", "exception", "returned", "voided". anyOf[1] (Value): Array of string.
     * minItems: 1. [] enum: "created", "packed", "shipped", "in_transit", "out_for_delivery",
     * "delivered", "delivery_attempted", "exception", "returned", "voided". anyOf[1][] (Value):
     * string. Value enum: "created", "packed", "shipped", "in_transit", "out_for_delivery",
     * "delivered", "delivery_attempted", "exception", "returned", "voided". anyOf[2] (Value):
     * string. Value enum: "created", "packed", "shipped", "in_transit", "out_for_delivery",
     * "delivered", "delivery_attempted", "exception", "returned", "voided".
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
};
export type MeListPaymentIntentsParams = {
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
    /** Filter by order ID. Example: "ord_01ARZ3NDEKTSV4RRFFQ69G5FAV". */
    "order_id"?: InputValue<string>;
    /** Filter by invoice ID. Example: "inv_01ARZ3NDEKTSV4RRFFQ69G5FAV". */
    "invoice_id"?: InputValue<string>;
    /**
     * Filter by payment intent status. Accepts repeated keys, comma-separated values, or mixtures.
     * Values are trimmed and deduplicated in first-seen order; empty or unknown entries are
     * rejected. Values within this filter are ORed; separate filters are ANDed. [] enum:
     * "requires_payment_method", "requires_confirmation", "requires_action", "processing",
     * "requires_capture", "canceled", "succeeded", "expired". Value enum:
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
     * status. Combined with dispute_status, both filters must match. Accepts repeated keys,
     * comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen
     * order; empty or unknown entries are rejected. Values within this filter are ORed; separate
     * filters are ANDed. [] enum: "none", "partially_refunded", "refunded". Value enum: "none",
     * "partially_refunded", "refunded". anyOf[1] (Value): Array of string. minItems: 1. [] enum:
     * "none", "partially_refunded", "refunded". anyOf[1][] (Value): string. Value enum: "none",
     * "partially_refunded", "refunded". anyOf[2] (Value): string. Value enum: "none",
     * "partially_refunded", "refunded".
     */
    "refund_status"?: InputValue<("none" | "partially_refunded" | "refunded")
        | readonly ("none" | "partially_refunded" | "refunded")[]>;
    /**
     * Field to sort by. Defaults to created_at; ties are broken by payment_intent_id. Default:
     * "created_at". Value enum: "created_at", "updated_at", "amount_money".
     */
    "sort_by"?: InputValue<"created_at" | "updated_at" | "amount_money">;
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
export type MeListPaymentMethodsParams = {
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
};
