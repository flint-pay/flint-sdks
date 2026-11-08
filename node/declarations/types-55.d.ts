import type { InputValue } from '../runtime.js';
import type { DisputesAcceptParams } from './types-22.js';
import type { ProcessExistingReturnRequestInput } from './types-47.js';
import type { ReopenReturnRequestInput, ResponseMeta, ResourceReference, ResponseWarning } from './types-51.js';
import type { UpdateReturnLineItemRequestInput, UpdateReturnRequestInput } from './types-64.js';
import type { WaiveReturnLineInspectionRequestInput, UpdateRiskListRequestInput } from './types-65.js';
import type { AddRiskListItemsRequestInput } from './types-0.js';
import type { CreateRiskListRequestInput, CreateRiskPreviewRequestInput, CreateRiskRuleRequestInput } from './types-12.js';
import type { MoneyValue, MoneyValueInput } from './types-37.js';
export type ReturnsDeleteLineItemParams = {
    /**
     * Optional version of the parent Return. Supply exactly once. A stale value returns
     * VERSION_CONFLICT with the current Return version. Format: int64. minimum: 1.
     */
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
export type ReturnsGetLineItemParams = DisputesAcceptParams;
export type ReturnsGetParams = {
    /**
     * Include related objects in the response. Supported expansions: customer,
     * line_items.fulfillment, line_items.return_reason, order, return_dispositions,
     * return_inspections, return_receipts, return_resolutions, shipments. Expanded relationships
     * are returned only when explicitly requested and authorized. Limits: at most 10 unique expand
     * paths per request. To-many expansions are capped per path: at 100 related objects for
     * return_dispositions, return_inspections, return_receipts, return_resolutions, and shipments;
     * at 20 for line_items.fulfillment and line_items.return_reason. [] enum: "customer",
     * "line_items.fulfillment", "line_items.return_reason", "order", "return_dispositions",
     * "return_inspections", "return_receipts", "return_resolutions", "shipments". Value enum:
     * "customer", "line_items.fulfillment", "line_items.return_reason", "order",
     * "return_dispositions", "return_inspections", "return_receipts", "return_resolutions",
     * "shipments". anyOf[1] (Value): Array of string. [] enum: "customer",
     * "line_items.fulfillment", "line_items.return_reason", "order", "return_dispositions",
     * "return_inspections", "return_receipts", "return_resolutions", "shipments". anyOf[1][]
     * (Value): string. Value enum: "customer", "line_items.fulfillment",
     * "line_items.return_reason", "order", "return_dispositions", "return_inspections",
     * "return_receipts", "return_resolutions", "shipments". anyOf[2] (Value): string. Value enum:
     * "customer", "line_items.fulfillment", "line_items.return_reason", "order",
     * "return_dispositions", "return_inspections", "return_receipts", "return_resolutions",
     * "shipments".
     */
    "expand"?: InputValue<("customer"
        | "line_items.fulfillment"
        | "line_items.return_reason"
        | "order"
        | "return_dispositions"
        | "return_inspections"
        | "return_receipts"
        | "return_resolutions"
        | "shipments")
        | readonly ("customer"
        | "line_items.fulfillment"
        | "line_items.return_reason"
        | "order"
        | "return_dispositions"
        | "return_inspections"
        | "return_receipts"
        | "return_resolutions"
        | "shipments")[]>;
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
export type ReturnsListActivitiesParams = {
    /**
     * Maximum number of results to return, from 1 to 100. Defaults to 20. Format: int32. minimum:
     * 1. maximum: 100. Default: 20.
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
export type ReturnsListLineItemsParams = {
    /** Filter by fulfillment id. Example: "ful_01KEZF7C00F24WVSTTWR1FQX5T". */
    "fulfillment_id"?: InputValue<string>;
    /**
     * Filter by merchandise status. Values are trimmed and deduplicated in first-seen order; empty
     * or unknown entries are rejected. Values within this filter are ORed; separate filters are
     * ANDed. [] enum: "not_required", "awaiting_handoff", "in_transit", "partially_received",
     * "inspection_required", "partially_inspected", "inspection_review_required",
     * "disposition_required", "resolved", "exception". Value enum: "not_required",
     * "awaiting_handoff", "in_transit", "partially_received", "inspection_required",
     * "partially_inspected", "inspection_review_required", "disposition_required", "resolved",
     * "exception". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "not_required",
     * "awaiting_handoff", "in_transit", "partially_received", "inspection_required",
     * "partially_inspected", "inspection_review_required", "disposition_required", "resolved",
     * "exception". anyOf[1][] (Value): string. Value enum: "not_required", "awaiting_handoff",
     * "in_transit", "partially_received", "inspection_required", "partially_inspected",
     * "inspection_review_required", "disposition_required", "resolved", "exception". anyOf[2]
     * (Value): string. Value enum: "not_required", "awaiting_handoff", "in_transit",
     * "partially_received", "inspection_required", "partially_inspected",
     * "inspection_review_required", "disposition_required", "resolved", "exception".
     */
    "merchandise_status"?: InputValue<("not_required"
        | "awaiting_handoff"
        | "in_transit"
        | "partially_received"
        | "inspection_required"
        | "partially_inspected"
        | "inspection_review_required"
        | "disposition_required"
        | "resolved"
        | "exception")
        | readonly ("not_required"
        | "awaiting_handoff"
        | "in_transit"
        | "partially_received"
        | "inspection_required"
        | "partially_inspected"
        | "inspection_review_required"
        | "disposition_required"
        | "resolved"
        | "exception")[]>;
    /** Filter by order line item id. Example: "li_01KEZF7C008YPRCK7VDKTGWR31". */
    "order_line_item_id"?: InputValue<string>;
    /**
     * Maximum number of results to return, from 1 to 100. Defaults to 20. Format: int32. minimum:
     * 1. maximum: 100. Default: 20.
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
     * Filter by resolution status. Values are trimmed and deduplicated in first-seen order; empty
     * or unknown entries are rejected. Values within this filter are ORed; separate filters are
     * ANDed. [] enum: "not_selected", "pending", "requires_action", "fulfilled", "failed". Value
     * enum: "not_selected", "pending", "requires_action", "fulfilled", "failed". anyOf[1] (Value):
     * Array of string. minItems: 1. [] enum: "not_selected", "pending", "requires_action",
     * "fulfilled", "failed". anyOf[1][] (Value): string. Value enum: "not_selected", "pending",
     * "requires_action", "fulfilled", "failed". anyOf[2] (Value): string. Value enum:
     * "not_selected", "pending", "requires_action", "fulfilled", "failed".
     */
    "resolution_status"?: InputValue<("not_selected" | "pending" | "requires_action" | "fulfilled" | "failed")
        | readonly ("not_selected" | "pending" | "requires_action" | "fulfilled" | "failed")[]>;
    /** Filter by return reason id. Example: "rrsn_01KEZF7C00SEE2T4EYP1NXAH3E". */
    "return_reason_id"?: InputValue<string>;
    /**
     * Filter by status. Values are trimmed and deduplicated in first-seen order; empty or unknown
     * entries are rejected. Values within this filter are ORed; separate filters are ANDed. []
     * enum: "requested", "open", "completed", "declined", "canceled". Value enum: "requested",
     * "open", "completed", "declined", "canceled". anyOf[1] (Value): Array of string. minItems: 1.
     * [] enum: "requested", "open", "completed", "declined", "canceled". anyOf[1][] (Value):
     * string. Value enum: "requested", "open", "completed", "declined", "canceled". anyOf[2]
     * (Value): string. Value enum: "requested", "open", "completed", "declined", "canceled".
     */
    "status"?: InputValue<("requested" | "open" | "completed" | "declined" | "canceled")
        | readonly ("requested" | "open" | "completed" | "declined" | "canceled")[]>;
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
export type ReturnsListParams = {
    /** Inclusive lower bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
    /** Filter by customer id. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". */
    "customer_id"?: InputValue<string>;
    /**
     * Filter by decision status. Values are trimmed and deduplicated in first-seen order; empty or
     * unknown entries are rejected. Values within this filter are ORed; separate filters are
     * ANDed. [] enum: "pending", "approved", "partially_approved", "declined". Value enum:
     * "pending", "approved", "partially_approved", "declined". anyOf[1] (Value): Array of string.
     * minItems: 1. [] enum: "pending", "approved", "partially_approved", "declined". anyOf[1][]
     * (Value): string. Value enum: "pending", "approved", "partially_approved", "declined".
     * anyOf[2] (Value): string. Value enum: "pending", "approved", "partially_approved",
     * "declined".
     */
    "decision_status"?: InputValue<("pending" | "approved" | "partially_approved" | "declined")
        | readonly ("pending" | "approved" | "partially_approved" | "declined")[]>;
    /**
     * Exact-match filter on the caller-owned external reference ID. minLength: 1. maxLength: 255.
     * Example: "warehouse-1842".
     */
    "external_reference_id"?: InputValue<string>;
    /**
     * Filter by the original Idempotency-Key, after trimming surrounding whitespace. Matching is
     * exact and case-sensitive. Returns current authorized resources, not the recorded response. A
     * pending resource does not prove that the operation succeeded, and an empty list does not
     * prove that it had no effect. minLength: 1. maxLength: 255.
     */
    "idempotency_key"?: InputValue<string>;
    /**
     * Filter by merchandise status. Values are trimmed and deduplicated in first-seen order; empty
     * or unknown entries are rejected. Values within this filter are ORed; separate filters are
     * ANDed. [] enum: "not_required", "awaiting_handoff", "in_transit", "partially_received",
     * "inspection_required", "partially_inspected", "inspection_review_required",
     * "disposition_required", "resolved", "exception". Value enum: "not_required",
     * "awaiting_handoff", "in_transit", "partially_received", "inspection_required",
     * "partially_inspected", "inspection_review_required", "disposition_required", "resolved",
     * "exception". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "not_required",
     * "awaiting_handoff", "in_transit", "partially_received", "inspection_required",
     * "partially_inspected", "inspection_review_required", "disposition_required", "resolved",
     * "exception". anyOf[1][] (Value): string. Value enum: "not_required", "awaiting_handoff",
     * "in_transit", "partially_received", "inspection_required", "partially_inspected",
     * "inspection_review_required", "disposition_required", "resolved", "exception". anyOf[2]
     * (Value): string. Value enum: "not_required", "awaiting_handoff", "in_transit",
     * "partially_received", "inspection_required", "partially_inspected",
     * "inspection_review_required", "disposition_required", "resolved", "exception".
     */
    "merchandise_status"?: InputValue<("not_required"
        | "awaiting_handoff"
        | "in_transit"
        | "partially_received"
        | "inspection_required"
        | "partially_inspected"
        | "inspection_review_required"
        | "disposition_required"
        | "resolved"
        | "exception")
        | readonly ("not_required"
        | "awaiting_handoff"
        | "in_transit"
        | "partially_received"
        | "inspection_required"
        | "partially_inspected"
        | "inspection_review_required"
        | "disposition_required"
        | "resolved"
        | "exception")[]>;
    /** Filter by order id. Example: "ord_01KEZF7C0054GQKJ142A8X367A". */
    "order_id"?: InputValue<string>;
    /**
     * Maximum number of results to return, from 1 to 100. Defaults to 20. Format: int32. minimum:
     * 1. maximum: 100. Default: 20.
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
     * Search by return ID, return number, external reference ID, the order's number, or the
     * buyer's email.
     */
    "query"?: InputValue<string>;
    /** Filter by receiving location id. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". */
    "receiving_location_id"?: InputValue<string>;
    /**
     * Filter by resolution status. Values are trimmed and deduplicated in first-seen order; empty
     * or unknown entries are rejected. Values within this filter are ORed; separate filters are
     * ANDed. [] enum: "not_selected", "pending", "partially_fulfilled", "requires_action",
     * "fulfilled", "failed". Value enum: "not_selected", "pending", "partially_fulfilled",
     * "requires_action", "fulfilled", "failed". anyOf[1] (Value): Array of string. minItems: 1. []
     * enum: "not_selected", "pending", "partially_fulfilled", "requires_action", "fulfilled",
     * "failed". anyOf[1][] (Value): string. Value enum: "not_selected", "pending",
     * "partially_fulfilled", "requires_action", "fulfilled", "failed". anyOf[2] (Value): string.
     * Value enum: "not_selected", "pending", "partially_fulfilled", "requires_action",
     * "fulfilled", "failed".
     */
    "resolution_status"?: InputValue<("not_selected" | "pending" | "partially_fulfilled" | "requires_action" | "fulfilled" | "failed")
        | readonly ("not_selected" | "pending" | "partially_fulfilled" | "requires_action" | "fulfilled" | "failed")[]>;
    /**
     * Filter by resolution type. Values are trimmed and deduplicated in first-seen order; empty or
     * unknown entries are rejected. Values within this filter are ORed; separate filters are
     * ANDed. [] enum: "refund", "exchange", "replacement", "store_credit", "no_monetary_action",
     * "correction". Value enum: "refund", "exchange", "replacement", "store_credit",
     * "no_monetary_action", "correction". anyOf[1] (Value): Array of string. minItems: 1. [] enum:
     * "refund", "exchange", "replacement", "store_credit", "no_monetary_action", "correction".
     * anyOf[1][] (Value): string. Value enum: "refund", "exchange", "replacement", "store_credit",
     * "no_monetary_action", "correction". anyOf[2] (Value): string. Value enum: "refund",
     * "exchange", "replacement", "store_credit", "no_monetary_action", "correction".
     */
    "resolution_type"?: InputValue<("refund" | "exchange" | "replacement" | "store_credit" | "no_monetary_action" | "correction")
        | readonly ("refund" | "exchange" | "replacement" | "store_credit" | "no_monetary_action" | "correction")[]>;
    /** Filter by return number. */
    "return_number"?: InputValue<string>;
    /** Filter by return reason id. Example: "rrsn_01KEZF7C00SEE2T4EYP1NXAH3E". */
    "return_reason_id"?: InputValue<string>;
    /**
     * Field to sort by. Defaults to created_at; ties are broken by return_id. Default:
     * "created_at". Value enum: "created_at".
     */
    "sort_by"?: InputValue<"created_at">;
    /** Sort direction. Defaults to desc. Default: "desc". Value enum: "asc", "desc". */
    "sort_direction"?: InputValue<"asc" | "desc">;
    /**
     * Filter by status. Values are trimmed and deduplicated in first-seen order; empty or unknown
     * entries are rejected. Values within this filter are ORed; separate filters are ANDed. []
     * enum: "requested", "open", "completed", "declined", "canceled". Value enum: "requested",
     * "open", "completed", "declined", "canceled". anyOf[1] (Value): Array of string. minItems: 1.
     * [] enum: "requested", "open", "completed", "declined", "canceled". anyOf[1][] (Value):
     * string. Value enum: "requested", "open", "completed", "declined", "canceled". anyOf[2]
     * (Value): string. Value enum: "requested", "open", "completed", "declined", "canceled".
     */
    "status"?: InputValue<("requested" | "open" | "completed" | "declined" | "canceled")
        | readonly ("requested" | "open" | "completed" | "declined" | "canceled")[]>;
    /** Inclusive lower bound on updated_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on updated_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_before"?: InputValue<string | globalThis.Date>;
    /**
     * Filter by work type. Matches only returns that are still requested or open. Values are
     * trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values
     * within this filter are ORed; separate filters are ANDed. [] enum: "decision", "handoff",
     * "receipt", "inspection", "disposition", "resolution", "exception". Value enum: "decision",
     * "handoff", "receipt", "inspection", "disposition", "resolution", "exception". anyOf[1]
     * (Value): Array of string. minItems: 1. [] enum: "decision", "handoff", "receipt",
     * "inspection", "disposition", "resolution", "exception". anyOf[1][] (Value): string. Value
     * enum: "decision", "handoff", "receipt", "inspection", "disposition", "resolution",
     * "exception". anyOf[2] (Value): string. Value enum: "decision", "handoff", "receipt",
     * "inspection", "disposition", "resolution", "exception".
     */
    "work_type"?: InputValue<("decision" | "handoff" | "receipt" | "inspection" | "disposition" | "resolution" | "exception")
        | readonly ("decision" | "handoff" | "receipt" | "inspection" | "disposition" | "resolution" | "exception")[]>;
    /**
     * Include related objects in the response. Supported expansions: customer, order. Include the
     * requested related resources using scoped batch reads for this page. Each relationship
     * requires its existing target read scopes. Expansion changes the representation without
     * changing pagination tokens. Limits: at most 10 unique expand paths per request. [] enum:
     * "customer", "order". Value enum: "customer", "order". anyOf[1] (Value): Array of string. []
     * enum: "customer", "order". anyOf[1][] (Value): string. Value enum: "customer", "order".
     * anyOf[2] (Value): string. Value enum: "customer", "order".
     */
    "expand"?: InputValue<("customer" | "order") | readonly ("customer" | "order")[]>;
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
export type ReturnsProcessParams = (InputValue<ProcessExistingReturnRequestInput>)
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
export type ReturnsReopenParams = (InputValue<ReopenReturnRequestInput>)
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
export type ReturnsUpdateLineItemParams = (InputValue<UpdateReturnLineItemRequestInput>)
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
export type ReturnsUpdateParams = (InputValue<UpdateReturnRequestInput>)
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
export type ReturnsWaiveLineItemInspectionParams = (InputValue<WaiveReturnLineInspectionRequestInput>)
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
/** The request body for: Reverse manual invoice payment. */
export type ReverseInvoiceManualPaymentRequest = {
    /** Expected version of the invoice. Format: int64. minimum: 1. */
    "expected_version"?: number;
    /**
     * Why the offline payment is being reversed, up to 4096 characters. minLength: 1. maxLength:
     * 4096.
     */
    "reversal_note"?: string;
    /**
     * When the payment was reversed. Defaults to now and must not precede received_at. Format:
     * date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "reversed_at"?: string;
};
/** The request body for: Reverse manual invoice payment. */
export type ReverseInvoiceManualPaymentRequestInput = {
    /** Expected version of the invoice. Format: int64. minimum: 1. */
    "expected_version"?: number;
    /**
     * Why the offline payment is being reversed, up to 4096 characters. minLength: 1. maxLength:
     * 4096.
     */
    "reversal_note"?: string;
    /**
     * When the payment was reversed. Defaults to now and must not precede received_at. Format:
     * date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "reversed_at"?: string | globalThis.Date;
};
/**
 * One attribute a risk rule can test, with its value type, allowed operators, and whether it is
 * currently available.
 */
export type RiskAttribute = {
    /**
     * The stage from which the attribute's value is known. Value enum: "pre_authorization",
     * "post_authorization".
     */
    "available_from": "pre_authorization" | "post_authorization" | (string & {});
    /** The values the attribute can take. Present for `enum` attributes. [] (Value): string. */
    "enum_values"?: Array<string>;
    /** Whether the attribute can be used in rules in this environment. */
    "is_available": boolean;
    /** Whether the attribute can be missing from a payment. */
    "is_nullable": boolean;
    /**
     * How a comparison treats a payment that has no value for the attribute. Value enum:
     * "not_applicable_except_is_missing".
     */
    "missing_value_behavior": "not_applicable_except_is_missing" | (string & {});
    /** Name of the attribute, as a rule's `attribute` field uses it. */
    "name": string;
    /**
     * Operators accepted by this attribute. [] enum: "eq", "neq", "gt", "gte", "lt", "lte", "in",
     * "in_list", "is_missing". [] (Value): string. Value enum: "eq", "neq", "gt", "gte", "lt",
     * "lte", "in", "in_list", "is_missing".
     */
    "operators": Array<"eq" | "neq" | "gt" | "gte" | "lt" | "lte" | "in" | "in_list" | "is_missing" | (string & {})>;
    /**
     * Why the attribute can't be used in rules. Present when `is_available` is `false`. Value
     * enum: "risk_scoring_not_enabled", "ip_geolocation_not_enabled".
     */
    "unavailable_reason"?: "risk_scoring_not_enabled" | "ip_geolocation_not_enabled" | (string & {});
    /**
     * The kind of value the attribute holds. Value enum: "money", "currency", "string", "enum",
     * "country", "email", "ip_address", "boolean", "integer".
     */
    "value_type": "money"
        | "currency"
        | "string"
        | "enum"
        | "country"
        | "email"
        | "ip_address"
        | "boolean"
        | "integer"
        | (string & {});
};
/** The attributes available to risk rules, in the current environment. */
export type RiskAttributeRegistry = {
    /**
     * The attributes a risk rule can test. [] (Value): {@link RiskAttribute}. One attribute a risk
     * rule can test, with its value type, allowed operators, and whether it is currently
     * available.
     */
    "attributes": Array<RiskAttribute>;
};
/** A response containing `RiskAttributeRegistry` data. */
export type RiskAttributeRegistryResponse = {
    /**
     * Resource, collection, or operation result returned by this request. The attributes available
     * to risk rules, in the current environment.
     */
    "data": RiskAttributeRegistry;
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
/** A collection of values used in payment risk rules. */
export type RiskList = {
    /**
     * Name rules use to refer to this list, such as flagged_emails: a lowercase letter, then up to
     * 127 lowercase letters, digits, or underscores. Set at creation and never changed.
     */
    "alias": string;
    /**
     * RFC3339 timestamp. `null` when the resource isn't archived. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "archived_at": string | null;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /**
     * The credential that created this list. Null when Flint created it, as for Flint's default
     * lists. The reference may name an API key in the other mode. anyOf[1] (Value): {@link
     * ResourceReference}. A reference to another resource by `resource_type` and `resource_id`.
     * anyOf[2] (Value): null.
     */
    "created_by": ((ResourceReference) | (null));
    /** Number of values on the list now. Format: int64. */
    "item_count": number;
    /**
     * Values are trimmed and compared exactly after item-type normalization for deduplication and
     * membership. card_fingerprint is the 32-character hexadecimal value from
     * PaymentMethod.fingerprint and is lowercased; case_sensitive_string preserves case and
     * Unicode composition. string and email are lowercased, with accents preserved. email requires
     * a bare address. email_domain is lowercased, has one final dot removed, and converts
     * internationalized domains to ASCII. ip_address uses canonical IP form, including IPv4-mapped
     * IPv6 conversion to IPv4. country uses uppercase ISO codes. card_bin preserves 6 through 8
     * digits, including leading zeros, and matches the full value. customer_id preserves the
     * validated ID. Value enum: "card_fingerprint", "card_bin", "email", "email_domain",
     * "ip_address", "country", "customer_id", "string", "case_sensitive_string".
     */
    "item_type": "card_fingerprint"
        | "card_bin"
        | "email"
        | "email_domain"
        | "ip_address"
        | "country"
        | "customer_id"
        | "string"
        | "case_sensitive_string"
        | (string & {});
    /** Display name of the list. */
    "name": string;
    /**
     * Whether Flint manages the list or the merchant created it. Value enum: "system_default",
     * "merchant".
     */
    "origin": "system_default" | "merchant" | (string & {});
    /**
     * Unique identifier for this risk list, prefixed `rl_`. Example:
     * "rl_01KEZF7C00VYSERA4QCTJP147A".
     */
    "risk_list_id": string;
    /** Whether the list can still be used. Value enum: "active", "archived". */
    "status": "active" | "archived" | (string & {});
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "updated_at": string;
    /**
     * Version of persisted list configuration and item-count changes. External observations do not
     * advance this counter. Format: uint64. minimum: 1.
     */
    "version": number;
};
/** One value in a payment risk list. */
export type RiskListItem = {
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /**
     * The credential that created this list item. Null when Flint created it. The reference may
     * name an API key in the other mode. anyOf[1] (Value): {@link ResourceReference}. A reference
     * to another resource by `resource_type` and `resource_id`. anyOf[2] (Value): null.
     */
    "created_by": ((ResourceReference) | (null));
    /** ID of the risk list this value is on. Example: "rl_01KEZF7C00VYSERA4QCTJP147A". */
    "risk_list_id": string;
    /**
     * Unique identifier for this risk list item, prefixed `rli_`. Example:
     * "rli_01KEZF7C006BND1CJYPAJW9JWE".
     */
    "risk_list_item_id": string;
    /**
     * The value as stored after item_type normalization, which is what payments are matched
     * against.
     */
    "value": string;
};
/** The risk list item matched or created for one requested value, and its creation outcome. */
export type RiskListItemAddition = {
    /**
     * Whether the value was added or was already on the list. Value enum: "created", "existing".
     */
    "outcome": "created" | "existing" | (string & {});
    /** The list item holding the value. One value in a payment risk list. */
    "risk_list_item": RiskListItem;
};
/** A page of `RiskListItem` objects. */
export type RiskListItemListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * RiskListItem}. One value in a payment risk list.
     */
    "data": Array<RiskListItem>;
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
/** A response containing `RiskListItem` data. */
export type RiskListItemResponse = {
    /**
     * Resource, collection, or operation result returned by this request. One value in a payment
     * risk list.
     */
    "data": RiskListItem;
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
/** A page of `RiskList` objects. */
export type RiskListListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * RiskList}. A collection of values used in payment risk rules.
     */
    "data": Array<RiskList>;
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
/** A response containing `RiskList` data. */
export type RiskListResourceResponse = {
    /**
     * Resource, collection, or operation result returned by this request. A collection of values
     * used in payment risk rules.
     */
    "data": RiskList;
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
export type RiskListsCreateItemsParams = (InputValue<AddRiskListItemsRequestInput>)
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
export type RiskListsCreateParams = (InputValue<CreateRiskListRequestInput>)
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
export type RiskListsDeleteItemParams = DisputesAcceptParams;
export type RiskListsDeleteParams = {
    /** Optional risk list version last read by the caller. Format: uint64. minimum: 1. */
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
export type RiskListsGetItemParams = DisputesAcceptParams;
export type RiskListsGetParams = DisputesAcceptParams;
export type RiskListsListParams = {
    /**
     * Exact-match filter on the lowercase list alias. No whitespace or case normalization is
     * applied. minLength: 1. maxLength: 128. pattern: ^[a-z][a-z0-9_]{0,127}$.
     */
    "alias"?: InputValue<string>;
    /**
     * Filter by status. Omitted, the list leaves out archived rows; name archived to include them.
     * Values are trimmed and deduplicated in first-seen order; empty or unknown entries are
     * rejected. Values within this filter are ORed; separate filters are ANDed. [] enum: "active",
     * "archived". Value enum: "active", "archived". anyOf[1] (Value): Array of string. minItems:
     * 1. [] enum: "active", "archived". anyOf[1][] (Value): string. Value enum: "active",
     * "archived". anyOf[2] (Value): string. Value enum: "active", "archived".
     */
    "status"?: InputValue<("active" | "archived") | readonly ("active" | "archived")[]>;
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
export type RiskListsListRiskListItemsParams = {
    /**
     * Exact-match filter after normalization for the parent list's item_type. Accepts 1 through
     * 512 Unicode characters, following the same normalization as item creation. Commas are
     * literal. Values are trimmed and compared exactly after item-type normalization for
     * deduplication and membership. card_fingerprint is the 32-character hexadecimal value from
     * PaymentMethod.fingerprint and is lowercased; case_sensitive_string preserves case and
     * Unicode composition. string and email are lowercased, with accents preserved. email requires
     * a bare address. email_domain is lowercased, has one final dot removed, and converts
     * internationalized domains to ASCII. ip_address uses canonical IP form, including IPv4-mapped
     * IPv6 conversion to IPv4. country uses uppercase ISO codes. card_bin preserves 6 through 8
     * digits, including leading zeros, and matches the full value. customer_id preserves the
     * validated ID. minLength: 1. maxLength: 512.
     */
    "value"?: InputValue<string>;
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
export type RiskListsUpdateParams = (InputValue<UpdateRiskListRequestInput>)
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
/**
 * A node in a risk rule condition: a comparison of an attribute, or an `all`, `any`, or `not`
 * group of other nodes.
 */
export type RiskPredicateNode = ((RiskPredicateNodeAll)
    | (RiskPredicateNodeAny)
    | (RiskPredicateNodeNot)
    | (RiskPredicateNodeComparison)
    | (RiskPredicateNodeMoneyComparison)
    | (RiskPredicateNodeIn)
    | (RiskPredicateNodeInList)
    | (RiskPredicateNodeIsMissing)
    | (Record<string, unknown>));
/** The `All` variant of `RiskPredicateNode`. */
export type RiskPredicateNodeAll = {
    /**
     * Predicates that must all match. minItems: 1. maxItems: 50. [] (Value): {@link
     * RiskPredicateNode}. A node in a risk rule condition: a comparison of an attribute, or an
     * `all`, `any`, or `not` group of other nodes.
     */
    "all": Array<RiskPredicateNode>;
};
/** The `All` variant of `RiskPredicateNode`. */
export type RiskPredicateNodeAllRequest = {
    /**
     * Predicates that must all match. minItems: 1. maxItems: 50. [] (Value): {@link
     * RiskPredicateNodeRequest}. A node in a risk rule condition: a comparison of an attribute, or
     * an `all`, `any`, or `not` group of other nodes.
     */
    "all": Array<RiskPredicateNodeRequest>;
};
/** The `All` variant of `RiskPredicateNode`. */
export type RiskPredicateNodeAllRequestInput = {
    /**
     * Predicates that must all match. minItems: 1. maxItems: 50. [] (Value): {@link
     * RiskPredicateNodeRequestInput}. A node in a risk rule condition: a comparison of an
     * attribute, or an `all`, `any`, or `not` group of other nodes.
     */
    "all": Array<RiskPredicateNodeRequestInput>;
};
/** The `Any` variant of `RiskPredicateNode`. */
export type RiskPredicateNodeAny = {
    /**
     * Predicates of which at least one must match. minItems: 1. maxItems: 50. [] (Value): {@link
     * RiskPredicateNode}. A node in a risk rule condition: a comparison of an attribute, or an
     * `all`, `any`, or `not` group of other nodes.
     */
    "any": Array<RiskPredicateNode>;
};
/** The `Any` variant of `RiskPredicateNode`. */
export type RiskPredicateNodeAnyRequest = {
    /**
     * Predicates of which at least one must match. minItems: 1. maxItems: 50. [] (Value): {@link
     * RiskPredicateNodeRequest}. A node in a risk rule condition: a comparison of an attribute, or
     * an `all`, `any`, or `not` group of other nodes.
     */
    "any": Array<RiskPredicateNodeRequest>;
};
/** The `Any` variant of `RiskPredicateNode`. */
export type RiskPredicateNodeAnyRequestInput = {
    /**
     * Predicates of which at least one must match. minItems: 1. maxItems: 50. [] (Value): {@link
     * RiskPredicateNodeRequestInput}. A node in a risk rule condition: a comparison of an
     * attribute, or an `all`, `any`, or `not` group of other nodes.
     */
    "any": Array<RiskPredicateNodeRequestInput>;
};
/** The `Comparison` variant of `RiskPredicateNode`. */
export type RiskPredicateNodeComparison = {
    /**
     * The payment attribute to test. Read the attribute registry for the names a rule can use.
     * minLength: 1. maxLength: 280.
     */
    "attribute": string;
    /** How the attribute is compared. Value enum: "eq", "neq", "gt", "gte", "lt", "lte". */
    "operator": "eq" | "neq" | "gt" | "gte" | "lt" | "lte" | (string & {});
    /**
     * The value to compare with. oneOf[1] (Value): string. minLength: 1. oneOf[2] (Value):
     * integer. oneOf[3] (Value): boolean.
     */
    "value": ((string) | (number) | (boolean) | (unknown));
};
/** The `Comparison` variant of `RiskPredicateNode`. */
export type RiskPredicateNodeComparisonRequestInput = {
    /**
     * The payment attribute to test. Read the attribute registry for the names a rule can use.
     * minLength: 1. maxLength: 280.
     */
    "attribute": string;
    /** How the attribute is compared. Value enum: "eq", "neq", "gt", "gte", "lt", "lte". */
    "operator": "eq" | "neq" | "gt" | "gte" | "lt" | "lte";
    /**
     * The value to compare with. oneOf[1] (Value): string. minLength: 1. oneOf[2] (Value):
     * integer. oneOf[3] (Value): boolean.
     */
    "value": ((string) | (number) | (boolean));
};
/** The `In` variant of `RiskPredicateNode`. */
export type RiskPredicateNodeIn = {
    /**
     * The payment attribute to test. Read the attribute registry for the names a rule can use.
     * minLength: 1. maxLength: 280.
     */
    "attribute": string;
    /** How the attribute is compared. Value enum: "in". */
    "operator": "in" | (string & {});
    /**
     * The values to compare with. The predicate matches when the attribute equals any of them.
     * minItems: 1. maxItems: 100. [] (Value): string or integer or boolean. [].oneOf[1] (Value):
     * string. minLength: 1. [].oneOf[2] (Value): integer. [].oneOf[3] (Value): boolean.
     */
    "values": Array<((string) | (number) | (boolean) | (unknown))>;
};
/** The `In list` variant of `RiskPredicateNode`. */
export type RiskPredicateNodeInList = {
    /**
     * The payment attribute to test. Read the attribute registry for the names a rule can use.
     * minLength: 1. maxLength: 280.
     */
    "attribute": string;
    /**
     * Alias of the risk list to look the attribute's value up in. minLength: 1. pattern:
     * ^[a-z][a-z0-9_]{0,127}$.
     */
    "list_alias": string;
    /** How the attribute is compared. Value enum: "in_list". */
    "operator": "in_list" | (string & {});
};
/** The `In list` variant of `RiskPredicateNode`. */
export type RiskPredicateNodeInListRequestInput = {
    /**
     * The payment attribute to test. Read the attribute registry for the names a rule can use.
     * minLength: 1. maxLength: 280.
     */
    "attribute": string;
    /**
     * Alias of the risk list to look the attribute's value up in. minLength: 1. pattern:
     * ^[a-z][a-z0-9_]{0,127}$.
     */
    "list_alias": string;
    /** How the attribute is compared. Value enum: "in_list". */
    "operator": "in_list";
};
/** The `In` variant of `RiskPredicateNode`. */
export type RiskPredicateNodeInRequestInput = {
    /**
     * The payment attribute to test. Read the attribute registry for the names a rule can use.
     * minLength: 1. maxLength: 280.
     */
    "attribute": string;
    /** How the attribute is compared. Value enum: "in". */
    "operator": "in";
    /**
     * The values to compare with. The predicate matches when the attribute equals any of them.
     * minItems: 1. maxItems: 100. [] (Value): string or integer or boolean. [].oneOf[1] (Value):
     * string. minLength: 1. [].oneOf[2] (Value): integer. [].oneOf[3] (Value): boolean.
     */
    "values": Array<((string) | (number) | (boolean))>;
};
/** The `Is missing` variant of `RiskPredicateNode`. */
export type RiskPredicateNodeIsMissing = {
    /**
     * The payment attribute to test. Read the attribute registry for the names a rule can use.
     * minLength: 1. maxLength: 280.
     */
    "attribute": string;
    /** How the attribute is compared. Value enum: "is_missing". */
    "operator": "is_missing" | (string & {});
};
/** The `Is missing` variant of `RiskPredicateNode`. */
export type RiskPredicateNodeIsMissingRequestInput = {
    /**
     * The payment attribute to test. Read the attribute registry for the names a rule can use.
     * minLength: 1. maxLength: 280.
     */
    "attribute": string;
    /** How the attribute is compared. Value enum: "is_missing". */
    "operator": "is_missing";
};
/** The `Money comparison` variant of `RiskPredicateNode`. */
export type RiskPredicateNodeMoneyComparison = {
    /**
     * The amount to compare with. Monetary amount represented as integer minor units plus an ISO
     * 4217 currency code.
     */
    "amount_money": MoneyValue;
    /**
     * The payment attribute to test. Read the attribute registry for the names a rule can use.
     * Value enum: "amount_money".
     */
    "attribute": "amount_money" | (string & {});
    /** How the attribute is compared. Value enum: "eq", "neq", "gt", "gte", "lt", "lte". */
    "operator": "eq" | "neq" | "gt" | "gte" | "lt" | "lte" | (string & {});
};
/** The `Money comparison` variant of `RiskPredicateNode`. */
export type RiskPredicateNodeMoneyComparisonRequestInput = {
    /**
     * The amount to compare with. Monetary amount represented as integer minor units plus an ISO
     * 4217 currency code.
     */
    "amount_money": MoneyValueInput;
    /**
     * The payment attribute to test. Read the attribute registry for the names a rule can use.
     * Value enum: "amount_money".
     */
    "attribute": "amount_money";
    /** How the attribute is compared. Value enum: "eq", "neq", "gt", "gte", "lt", "lte". */
    "operator": "eq" | "neq" | "gt" | "gte" | "lt" | "lte";
};
/** The `Not` variant of `RiskPredicateNode`. */
export type RiskPredicateNodeNot = {
    /**
     * The predicate that must not match. A node in a risk rule condition: a comparison of an
     * attribute, or an `all`, `any`, or `not` group of other nodes.
     */
    "not": RiskPredicateNode;
};
/** The `Not` variant of `RiskPredicateNode`. */
export type RiskPredicateNodeNotRequest = {
    /**
     * The predicate that must not match. A node in a risk rule condition: a comparison of an
     * attribute, or an `all`, `any`, or `not` group of other nodes.
     */
    "not": RiskPredicateNodeRequest;
};
/** The `Not` variant of `RiskPredicateNode`. */
export type RiskPredicateNodeNotRequestInput = {
    /**
     * The predicate that must not match. A node in a risk rule condition: a comparison of an
     * attribute, or an `all`, `any`, or `not` group of other nodes.
     */
    "not": RiskPredicateNodeRequestInput;
};
/**
 * A node in a risk rule condition: a comparison of an attribute, or an `all`, `any`, or `not`
 * group of other nodes.
 */
export type RiskPredicateNodeRequest = ((RiskPredicateNodeAllRequest)
    | (RiskPredicateNodeAnyRequest)
    | (RiskPredicateNodeNotRequest)
    | (RiskPredicateNodeComparison)
    | (RiskPredicateNodeMoneyComparison)
    | (RiskPredicateNodeIn)
    | (RiskPredicateNodeInList)
    | (RiskPredicateNodeIsMissing)
    | (Record<string, unknown>));
/**
 * A node in a risk rule condition: a comparison of an attribute, or an `all`, `any`, or `not`
 * group of other nodes.
 */
export type RiskPredicateNodeRequestInput = ((RiskPredicateNodeAllRequestInput)
    | (RiskPredicateNodeAnyRequestInput)
    | (RiskPredicateNodeNotRequestInput)
    | (RiskPredicateNodeComparisonRequestInput)
    | (RiskPredicateNodeMoneyComparisonRequestInput)
    | (RiskPredicateNodeInRequestInput)
    | (RiskPredicateNodeInListRequestInput)
    | (RiskPredicateNodeIsMissingRequestInput));
/**
 * The result of validating a proposed risk rule: whether it is valid, any issues found, warnings,
 * and an analysis of the rule.
 */
export type RiskPreview = {
    /**
     * Rule analysis. Null when the proposed rule is invalid. anyOf[1] (Value): {@link
     * RiskRuleAnalysis}. What a valid risk rule uses: its evaluation stage, the attributes and
     * list aliases it references, and which payments it applies to. anyOf[2] (Value): null.
     */
    "analysis": ((RiskRuleAnalysis) | (null));
    /** Whether the proposed rule is valid. */
    "is_valid": boolean;
    /**
     * Every rule validation issue in validation order. Empty when the rule is valid. [] (Value):
     * {@link RiskRuleIssue}. A problem that stops a saved or proposed risk rule from running, with
     * a `code`, a message, and the `path` to the part of the rule at fault.
     */
    "issues": Array<RiskRuleIssue>;
    /**
     * Advisory warnings. Empty when the proposed rule is invalid. [] (Value): {@link
     * ResponseWarning}. A non-blocking condition reported with a response. The `code` identifies
     * the condition and `severity` says how urgent it is.
     */
    "warnings": Array<ResponseWarning>;
};
/** A response containing `RiskPreview` data. */
export type RiskPreviewResponse = {
    /**
     * Resource, collection, or operation result returned by this request. The result of validating
     * a proposed risk rule: whether it is valid, any issues found, warnings, and an analysis of
     * the rule.
     */
    "data": RiskPreview;
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
export type RiskPreviewsCreateParams = (CreateRiskPreviewRequestInput)
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
/** A rule for assessing and handling payment risk. */
export type RiskRule = {
    /**
     * What Flint does with a payment the rule matches. Value enum: "allow", "block", "review",
     * "require_3ds".
     */
    "action": "allow" | "block" | "review" | "require_3ds" | (string & {});
    /** Which payments the rule applies to. Value enum: "all_payments", "on_session_only". */
    "applicability": "all_payments" | "on_session_only" | (string & {});
    /**
     * RFC3339 timestamp. `null` when the resource isn't archived. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "archived_at": string | null;
    /** Names of the payment attributes the rule reads. [] (Value): string. */
    "attributes_used": Array<string>;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /**
     * The credential that created this rule. Null when Flint created it, as for Flint's default
     * rules. The reference may name an API key in the other mode. anyOf[1] (Value): {@link
     * ResourceReference}. A reference to another resource by `resource_type` and `resource_id`.
     * anyOf[2] (Value): null.
     */
    "created_by": ((ResourceReference) | (null));
    /** Your note on what the rule is for. Leading and trailing whitespace is trimmed. */
    "description": string;
    /**
     * Problems that stop Flint from evaluating this rule. Empty when the rule can run. An active
     * rule with issues is skipped on every payment and protects nothing until you fix it. An
     * inactive rule with issues can't be activated until you fix it. [] (Value): {@link
     * RiskRuleIssue}. A problem that stops a saved or proposed risk rule from running, with a
     * `code`, a message, and the `path` to the part of the rule at fault.
     */
    "issues": Array<RiskRuleIssue>;
    /**
     * Whether Flint manages the rule or you created it. Value enum: "system_default", "merchant".
     */
    "origin": "system_default" | "merchant" | (string & {});
    /**
     * The condition a payment must meet for the rule to match. A node in a risk rule condition: a
     * comparison of an attribute, or an `all`, `any`, or `not` group of other nodes.
     */
    "predicate": RiskPredicateNode;
    /** ID of the saved rule to check. Example: "rule_01KEZF7C00FWGAQJXXA8CRA319". */
    "risk_rule_id": string;
    /**
     * When Flint evaluates the rule for a payment. Value enum: "pre_authorization",
     * "post_authorization".
     */
    "stage": "pre_authorization" | "post_authorization" | (string & {});
    /** Whether the rule runs. Value enum: "active", "inactive", "archived". */
    "status": "active" | "inactive" | "archived" | (string & {});
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "updated_at": string;
    /**
     * Increases on every change to the rule. Send it as expected_version to avoid overwriting
     * someone else's change. Format: int64.
     */
    "version": number;
};
/**
 * What a valid risk rule uses: its evaluation stage, the attributes and list aliases it
 * references, and which payments it applies to.
 */
export type RiskRuleAnalysis = {
    /** Which payments the rule applies to. Value enum: "all_payments", "on_session_only". */
    "applicability": "all_payments" | "on_session_only" | (string & {});
    /** Names of the payment attributes the rule reads. [] (Value): string. */
    "attributes_used": Array<string>;
    /** Aliases of the risk lists the rule references. [] (Value): string. */
    "list_aliases_used": Array<string>;
    /**
     * When Flint evaluates the rule for a payment. Value enum: "pre_authorization",
     * "post_authorization".
     */
    "stage": "pre_authorization" | "post_authorization" | (string & {});
};
/**
 * A problem that stops a saved or proposed risk rule from running, with a `code`, a message, and
 * the `path` to the part of the rule at fault.
 */
export type RiskRuleIssue = {
    /**
     * Extensible rule issue code. Accept new codes as they are added. Risk rules and previews
     * share these issue codes; invalid rule writes use the standard error codes. Value enum:
     * "invalid_predicate", "invalid_predicate_node", "invalid_predicate_group",
     * "unknown_predicate_field", "unknown_attribute", "attribute_unavailable", "invalid_operator",
     * "invalid_operand", "invalid_list_alias", "invalid_money", "invalid_rule_action",
     * "rule_action_unavailable_at_stage", "list_not_found", "list_archived", "list_type_mismatch".
     */
    "code": "invalid_predicate"
        | "invalid_predicate_node"
        | "invalid_predicate_group"
        | "unknown_predicate_field"
        | "unknown_attribute"
        | "attribute_unavailable"
        | "invalid_operator"
        | "invalid_operand"
        | "invalid_list_alias"
        | "invalid_money"
        | "invalid_rule_action"
        | "rule_action_unavailable_at_stage"
        | "list_not_found"
        | "list_archived"
        | "list_type_mismatch"
        | (string & {});
    /** Description of the rule issue and how to correct it. */
    "message": string;
    /**
     * Public request field path, as used by error param: predicate for the root,
     * predicate.all[0].attribute for a nested field, or action.
     */
    "path": string;
    /**
     * Why an attribute is unavailable. Present only for attribute_unavailable issues. Value enum:
     * "risk_scoring_not_enabled", "ip_geolocation_not_enabled".
     */
    "unavailable_reason"?: "risk_scoring_not_enabled" | "ip_geolocation_not_enabled" | (string & {});
};
/** A page of `RiskRule` objects. */
export type RiskRuleListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * RiskRule}. A rule for assessing and handling payment risk.
     */
    "data": Array<RiskRule>;
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
/** A response containing `RiskRule` data. */
export type RiskRuleResponse = {
    /**
     * Resource, collection, or operation result returned by this request. A rule for assessing and
     * handling payment risk.
     */
    "data": RiskRule;
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
export type RiskRulesCreateParams = (InputValue<CreateRiskRuleRequestInput>)
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
export type RiskRulesDeleteParams = {
    /** Optional risk rule version last read by the caller. Format: int64. minimum: 1. */
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
