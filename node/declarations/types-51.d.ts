import type { ReturnUnverifiedItem, ReturnResource } from './types-50.js';
import type { MerchantWebhookEnvelope } from './types-34.js';
import type { PartnerWebhookEnvelope } from './types-40.js';
import type { InputValue } from '../runtime.js';
import type { CancelReturnLineItemRequestInput } from './types-3.js';
import type { MeCancelReturnParams } from './types-33.js';
import type { CompleteReturnRequestInput } from './types-5.js';
import type {
    CreateReturnDispositionRequestInput,
    CreateReturnInspectionRequestInput,
    CreateReturnRequestInput,
    CreateReturnReceiptRequestInput,
    CreateReturnResolutionRequestInput
} from './types-10.js';
import type { AddReturnLineItemRequestInput, AddRiskListItemsRequestInput } from './types-0.js';
import type { DecideReturnRequestInput } from './types-14.js';
import type { ProcessExistingReturnRequestInput } from './types-44.js';
import type { ReopenReturnRequestInput, ResourceReference } from './types-47.js';
import type { UpdateReturnLineItemRequestInput } from './types-59.js';
import type { UpdateReturnRequestInput, WaiveReturnLineInspectionRequestInput } from './types-60.js';
import type { ResponseMeta } from './types-48.js';
import type { CreateRiskListRequestInput } from './types-11.js';
/**
 * Merchandise received in a return that does not match an expected return line, described by name,
 * SKU, and description.
 */
export type ReturnUnverifiedItemInput = ReturnUnverifiedItem;
export type ReturnUpdatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": ReturnResource;
    };
    "event_type"?: "return.updated";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": ReturnResource;
    };
    "event_type"?: "return.updated";
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
    "event_type": "return.updated";
});
/**
 * The `return.updated` webhook payload for the `installed_merchants` event source. Fields shared
 * by partner webhook payloads.
 */
export type ReturnUpdatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link ReturnResource}. A request to send purchased items back. */
    "data"?: {
        /** A request to send purchased items back. */
        "object": ReturnResource;
    };
    /** Value enum: "return.updated". */
    "event_type"?: "return.updated";
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
 * The `return.updated` webhook payload for the `merchant` event source. Fields shared by merchant
 * webhook payloads.
 */
export type ReturnUpdatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link ReturnResource}. A request to send purchased items back. */
    "data"?: {
        /** A request to send purchased items back. */
        "object": ReturnResource;
    };
    /** Value enum: "return.updated". */
    "event_type"?: "return.updated";
});
/**
 * How long after an event, such as fulfillment or delivery, an order can be returned under a
 * return policy.
 */
export type ReturnWindow = {
    /** Format: int64. */
    "duration_seconds": number;
    /** Value enum: "fulfilled", "delivered", "picked_up", "service_completed". */
    "starts_at_event": "fulfilled" | "delivered" | "picked_up" | "service_completed" | (string & {});
};
/**
 * How long after an event, such as fulfillment or delivery, an order can be returned under a
 * return policy.
 */
export type ReturnWindowInput = {
    /** Format: int64. */
    "duration_seconds": number;
    /** Value enum: "fulfilled", "delivered", "picked_up", "service_completed". */
    "starts_at_event": "fulfilled" | "delivered" | "picked_up" | "service_completed";
};
export type ReturnsCancelLineItemParams = (InputValue<CancelReturnLineItemRequestInput>);
export type ReturnsCancelParams = MeCancelReturnParams;
export type ReturnsCompleteParams = (InputValue<CompleteReturnRequestInput>);
export type ReturnsCreateAccessLinkParams = (InputValue<{}>);
export type ReturnsCreateDispositionParams = (CreateReturnDispositionRequestInput);
export type ReturnsCreateInspectionParams = (InputValue<CreateReturnInspectionRequestInput>);
export type ReturnsCreateLineItemParams = (InputValue<AddReturnLineItemRequestInput>);
export type ReturnsCreateParams = (InputValue<CreateReturnRequestInput>);
export type ReturnsCreateReceiptParams = (InputValue<CreateReturnReceiptRequestInput>);
export type ReturnsCreateResolutionParams = (CreateReturnResolutionRequestInput);
export type ReturnsDecideParams = (InputValue<DecideReturnRequestInput>);
export type ReturnsDeleteLineItemParams = {
    /**
     * Optional version of the parent Return. Supply exactly once. A stale value returns
     * VERSION_CONFLICT with the current Return version. Format: int64. minimum: 1.
     */
    "expected_version"?: InputValue<number>;
};
export type ReturnsGetLineItemParams = {};
export type ReturnsGetParams = {
    /**
     * Supported expansions: customer, line_items.fulfillment, line_items.return_reason, order,
     * return_dispositions, return_inspections, return_receipts, return_resolutions, shipments.
     * Expanded relationships are returned only when explicitly requested and authorized. Limits:
     * at most 10 unique expand paths per request. To-many expansions are capped per path: at 100
     * related objects for return_dispositions, return_inspections, return_receipts,
     * return_resolutions, and shipments; at 20 for line_items.fulfillment and
     * line_items.return_reason. Repeat expand, for example
     * expand=customer&expand=line_items.fulfillment, or pass one comma-separated value. [] enum:
     * "customer", "line_items.fulfillment", "line_items.return_reason", "order",
     * "return_dispositions", "return_inspections", "return_receipts", "return_resolutions",
     * "shipments". Value enum: "customer", "line_items.fulfillment", "line_items.return_reason",
     * "order", "return_dispositions", "return_inspections", "return_receipts",
     * "return_resolutions", "shipments". anyOf[1] (Value): Array of string. [] enum: "customer",
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
};
export type ReturnsListActivitiesParams = {
    /**
     * Maximum number of results to return, from 1 to 100. Defaults to 20. Format: int32. minimum:
     * 1. maximum: 100. Default: 20.
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
};
export type ReturnsListLineItemsParams = {
    /** Filter by fulfillment id. Example: "ful_01ARZ3NDEKTSV4RRFFQ69G5FAV". */
    "fulfillment_id"?: InputValue<string>;
    /**
     * Filter by merchandise status. Accepts repeated keys, comma-separated values, or mixtures.
     * Values are trimmed and deduplicated in first-seen order; empty or unknown entries are
     * rejected. Values within this filter are ORed; separate filters are ANDed. [] enum:
     * "not_required", "awaiting_handoff", "in_transit", "partially_received",
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
    /** Filter by order line item id. Example: "li_01ARZ3NDEKTSV4RRFFQ69G5FAV". */
    "order_line_item_id"?: InputValue<string>;
    /**
     * Maximum number of results to return, from 1 to 100. Defaults to 20. Format: int32. minimum:
     * 1. maximum: 100. Default: 20.
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
     * Filter by resolution status. Accepts repeated keys, comma-separated values, or mixtures.
     * Values are trimmed and deduplicated in first-seen order; empty or unknown entries are
     * rejected. Values within this filter are ORed; separate filters are ANDed. [] enum:
     * "not_selected", "pending", "requires_action", "fulfilled", "failed". Value enum:
     * "not_selected", "pending", "requires_action", "fulfilled", "failed". anyOf[1] (Value): Array
     * of string. minItems: 1. [] enum: "not_selected", "pending", "requires_action", "fulfilled",
     * "failed". anyOf[1][] (Value): string. Value enum: "not_selected", "pending",
     * "requires_action", "fulfilled", "failed". anyOf[2] (Value): string. Value enum:
     * "not_selected", "pending", "requires_action", "fulfilled", "failed".
     */
    "resolution_status"?: InputValue<("not_selected" | "pending" | "requires_action" | "fulfilled" | "failed")
        | readonly ("not_selected" | "pending" | "requires_action" | "fulfilled" | "failed")[]>;
    /** Filter by return reason id. Example: "rrsn_01ARZ3NDEKTSV4RRFFQ69G5FAV". */
    "return_reason_id"?: InputValue<string>;
    /**
     * Filter by status. Accepts repeated keys, comma-separated values, or mixtures. Values are
     * trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values
     * within this filter are ORed; separate filters are ANDed. [] enum: "requested", "open",
     * "completed", "declined", "canceled". Value enum: "requested", "open", "completed",
     * "declined", "canceled". anyOf[1] (Value): Array of string. minItems: 1. [] enum:
     * "requested", "open", "completed", "declined", "canceled". anyOf[1][] (Value): string. Value
     * enum: "requested", "open", "completed", "declined", "canceled". anyOf[2] (Value): string.
     * Value enum: "requested", "open", "completed", "declined", "canceled".
     */
    "status"?: InputValue<("requested" | "open" | "completed" | "declined" | "canceled")
        | readonly ("requested" | "open" | "completed" | "declined" | "canceled")[]>;
};
export type ReturnsListParams = {
    /** Inclusive lower bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
    /** Filter by customer id. Example: "cus_01ARZ3NDEKTSV4RRFFQ69G5FAV". */
    "customer_id"?: InputValue<string>;
    /**
     * Filter by decision status. Accepts repeated keys, comma-separated values, or mixtures.
     * Values are trimmed and deduplicated in first-seen order; empty or unknown entries are
     * rejected. Values within this filter are ORed; separate filters are ANDed. [] enum:
     * "pending", "approved", "partially_approved", "declined". Value enum: "pending", "approved",
     * "partially_approved", "declined". anyOf[1] (Value): Array of string. minItems: 1. [] enum:
     * "pending", "approved", "partially_approved", "declined". anyOf[1][] (Value): string. Value
     * enum: "pending", "approved", "partially_approved", "declined". anyOf[2] (Value): string.
     * Value enum: "pending", "approved", "partially_approved", "declined".
     */
    "decision_status"?: InputValue<("pending" | "approved" | "partially_approved" | "declined")
        | readonly ("pending" | "approved" | "partially_approved" | "declined")[]>;
    /**
     * Exact-match filter on the caller-owned external reference ID. minLength: 1. maxLength: 255.
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
     * Filter by merchandise status. Accepts repeated keys, comma-separated values, or mixtures.
     * Values are trimmed and deduplicated in first-seen order; empty or unknown entries are
     * rejected. Values within this filter are ORed; separate filters are ANDed. [] enum:
     * "not_required", "awaiting_handoff", "in_transit", "partially_received",
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
    /** Filter by order id. Example: "ord_01ARZ3NDEKTSV4RRFFQ69G5FAV". */
    "order_id"?: InputValue<string>;
    /**
     * Maximum number of results to return, from 1 to 100. Defaults to 20. Format: int32. minimum:
     * 1. maximum: 100. Default: 20.
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
     * Search by return ID, return number, external reference ID, the order's number, or the
     * buyer's email.
     */
    "query"?: InputValue<string>;
    /** Filter by receiving location id. Example: "loc_01ARZ3NDEKTSV4RRFFQ69G5FAV". */
    "receiving_location_id"?: InputValue<string>;
    /**
     * Filter by resolution status. Accepts repeated keys, comma-separated values, or mixtures.
     * Values are trimmed and deduplicated in first-seen order; empty or unknown entries are
     * rejected. Values within this filter are ORed; separate filters are ANDed. [] enum:
     * "not_selected", "pending", "partially_fulfilled", "requires_action", "fulfilled", "failed".
     * Value enum: "not_selected", "pending", "partially_fulfilled", "requires_action",
     * "fulfilled", "failed". anyOf[1] (Value): Array of string. minItems: 1. [] enum:
     * "not_selected", "pending", "partially_fulfilled", "requires_action", "fulfilled", "failed".
     * anyOf[1][] (Value): string. Value enum: "not_selected", "pending", "partially_fulfilled",
     * "requires_action", "fulfilled", "failed". anyOf[2] (Value): string. Value enum:
     * "not_selected", "pending", "partially_fulfilled", "requires_action", "fulfilled", "failed".
     */
    "resolution_status"?: InputValue<("not_selected" | "pending" | "partially_fulfilled" | "requires_action" | "fulfilled" | "failed")
        | readonly ("not_selected" | "pending" | "partially_fulfilled" | "requires_action" | "fulfilled" | "failed")[]>;
    /**
     * Filter by resolution type. Accepts repeated keys, comma-separated values, or mixtures.
     * Values are trimmed and deduplicated in first-seen order; empty or unknown entries are
     * rejected. Values within this filter are ORed; separate filters are ANDed. [] enum: "refund",
     * "exchange", "replacement", "store_credit", "no_monetary_action", "correction". Value enum:
     * "refund", "exchange", "replacement", "store_credit", "no_monetary_action", "correction".
     * anyOf[1] (Value): Array of string. minItems: 1. [] enum: "refund", "exchange",
     * "replacement", "store_credit", "no_monetary_action", "correction". anyOf[1][] (Value):
     * string. Value enum: "refund", "exchange", "replacement", "store_credit",
     * "no_monetary_action", "correction". anyOf[2] (Value): string. Value enum: "refund",
     * "exchange", "replacement", "store_credit", "no_monetary_action", "correction".
     */
    "resolution_type"?: InputValue<("refund" | "exchange" | "replacement" | "store_credit" | "no_monetary_action" | "correction")
        | readonly ("refund" | "exchange" | "replacement" | "store_credit" | "no_monetary_action" | "correction")[]>;
    /** Filter by return number. */
    "return_number"?: InputValue<string>;
    /** Filter by return reason id. Example: "rrsn_01ARZ3NDEKTSV4RRFFQ69G5FAV". */
    "return_reason_id"?: InputValue<string>;
    /**
     * Field to sort by. Defaults to created_at; ties are broken by return_id. Default:
     * "created_at". Value enum: "created_at".
     */
    "sort_by"?: InputValue<"created_at">;
    /** Sort direction. Defaults to desc. Default: "desc". Value enum: "asc", "desc". */
    "sort_direction"?: InputValue<"asc" | "desc">;
    /**
     * Filter by status. Accepts repeated keys, comma-separated values, or mixtures. Values are
     * trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values
     * within this filter are ORed; separate filters are ANDed. [] enum: "requested", "open",
     * "completed", "declined", "canceled". Value enum: "requested", "open", "completed",
     * "declined", "canceled". anyOf[1] (Value): Array of string. minItems: 1. [] enum:
     * "requested", "open", "completed", "declined", "canceled". anyOf[1][] (Value): string. Value
     * enum: "requested", "open", "completed", "declined", "canceled". anyOf[2] (Value): string.
     * Value enum: "requested", "open", "completed", "declined", "canceled".
     */
    "status"?: InputValue<("requested" | "open" | "completed" | "declined" | "canceled")
        | readonly ("requested" | "open" | "completed" | "declined" | "canceled")[]>;
    /** Inclusive lower bound on updated_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on updated_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_before"?: InputValue<string | globalThis.Date>;
    /**
     * Filter by work type. Matches only returns that are still requested or open. Accepts repeated
     * keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen
     * order; empty or unknown entries are rejected. Values within this filter are ORed; separate
     * filters are ANDed. [] enum: "decision", "handoff", "receipt", "inspection", "disposition",
     * "resolution", "exception". Value enum: "decision", "handoff", "receipt", "inspection",
     * "disposition", "resolution", "exception". anyOf[1] (Value): Array of string. minItems: 1. []
     * enum: "decision", "handoff", "receipt", "inspection", "disposition", "resolution",
     * "exception". anyOf[1][] (Value): string. Value enum: "decision", "handoff", "receipt",
     * "inspection", "disposition", "resolution", "exception". anyOf[2] (Value): string. Value
     * enum: "decision", "handoff", "receipt", "inspection", "disposition", "resolution",
     * "exception".
     */
    "work_type"?: InputValue<("decision" | "handoff" | "receipt" | "inspection" | "disposition" | "resolution" | "exception")
        | readonly ("decision" | "handoff" | "receipt" | "inspection" | "disposition" | "resolution" | "exception")[]>;
    /**
     * Supported expansions: customer, order. Include the requested related resources using scoped
     * batch reads for this page. Each relationship requires its existing target read scopes.
     * Expansion changes the representation without changing pagination tokens. Limits: at most 10
     * unique expand paths per request. Repeat expand, for example expand=customer&expand=order, or
     * pass one comma-separated value. [] enum: "customer", "order". Value enum: "customer",
     * "order". anyOf[1] (Value): Array of string. [] enum: "customer", "order". anyOf[1][]
     * (Value): string. Value enum: "customer", "order". anyOf[2] (Value): string. Value enum:
     * "customer", "order".
     */
    "expand"?: InputValue<("customer" | "order") | readonly ("customer" | "order")[]>;
};
export type ReturnsProcessParams = (InputValue<ProcessExistingReturnRequestInput>);
export type ReturnsReopenParams = (InputValue<ReopenReturnRequestInput>);
export type ReturnsUpdateLineItemParams = (InputValue<UpdateReturnLineItemRequestInput>);
export type ReturnsUpdateParams = (InputValue<UpdateReturnRequestInput>);
export type ReturnsWaiveLineItemInspectionParams = (InputValue<WaiveReturnLineInspectionRequestInput>);
/** The request body for: Reverse manual invoice payment. */
export type ReverseInvoiceManualPaymentRequest = {
    /** Expected version of the invoice. Format: int64. minimum: 1. */
    "expected_version"?: number;
    /** minLength: 1. maxLength: 4096. */
    "reversal_note"?: string;
    /**
     * When the payment was reversed. Defaults to now and must not precede received_at. Format:
     * date-time. minLength: 1.
     */
    "reversed_at"?: string;
};
/** The request body for: Reverse manual invoice payment. */
export type ReverseInvoiceManualPaymentRequestInput = {
    /** Expected version of the invoice. Format: int64. minimum: 1. */
    "expected_version"?: number;
    /** minLength: 1. maxLength: 4096. */
    "reversal_note"?: string;
    /**
     * When the payment was reversed. Defaults to now and must not precede received_at. Format:
     * date-time. minLength: 1.
     */
    "reversed_at"?: string | globalThis.Date;
};
/** The request body for: Revoke delivery dependency. */
export type RevokeDeliveryDependencyRequest = ({
    /**
     * Required when target.target_type is delivery_method or delivery_rate_callback. The version
     * of the stable resource whose current revision will be revoked. Omit it for exact revision,
     * geography, and signing-key targets. Format: uint64. minimum: 1.
     */
    "expected_version"?: number;
    /** minLength: 1. maxLength: 2048. */
    "merchant_note"?: string;
    /**
     * Value enum: "unsafe_configuration", "location_unavailable", "credential_compromise",
     * "legal_requirement", "other".
     */
    "reason": "unsafe_configuration"
        | "location_unavailable"
        | "credential_compromise"
        | "legal_requirement"
        | "other"
        | (string & {});
    /** A typed revocation target. Each target_type accepts only its resource-specific fields. */
    "target": RevokeDeliveryDependencyTarget;
});
/** The request body for: Revoke delivery dependency. */
export type RevokeDeliveryDependencyRequestInput = ({
    /**
     * Required when target.target_type is delivery_method or delivery_rate_callback. The version
     * of the stable resource whose current revision will be revoked. Omit it for exact revision,
     * geography, and signing-key targets. Format: uint64. minimum: 1.
     */
    "expected_version"?: number;
    /** minLength: 1. maxLength: 2048. */
    "merchant_note"?: string;
    /**
     * Value enum: "unsafe_configuration", "location_unavailable", "credential_compromise",
     * "legal_requirement", "other".
     */
    "reason": "unsafe_configuration"
        | "location_unavailable"
        | "credential_compromise"
        | "legal_requirement"
        | "other";
    /** A typed revocation target. Each target_type accepts only its resource-specific fields. */
    "target": RevokeDeliveryDependencyTargetInput;
});
/** A typed revocation target. Each target_type accepts only its resource-specific fields. */
export type RevokeDeliveryDependencyTarget = ({
    /** minLength: 1. */
    "delivery_method_id"?: string;
    /** minLength: 1. */
    "delivery_method_revision_id"?: string;
    /** minLength: 1. */
    "delivery_rate_callback_id"?: string;
    /** minLength: 1. */
    "delivery_rate_callback_revision_id"?: string;
    /** minLength: 1. */
    "delivery_rate_callback_signing_key_id"?: string;
    /**
     * Exact version of the Location geography to revoke. Required for location_geography targets.
     * Format: int64. minimum: 1.
     */
    "location_geography_version"?: number;
    /** minLength: 1. */
    "location_id"?: string;
    /**
     * Value enum: "location_geography", "delivery_rate_callback_signing_key",
     * "delivery_rate_callback", "delivery_rate_callback_revision", "delivery_method",
     * "delivery_method_revision".
     */
    "target_type": "location_geography"
        | "delivery_rate_callback_signing_key"
        | "delivery_rate_callback"
        | "delivery_rate_callback_revision"
        | "delivery_method"
        | "delivery_method_revision"
        | (string & {});
})
    & ((Exclude<RevokeDeliveryDependencyTargetLocationGeography & object, readonly unknown[]>)
    | (Exclude<RevokeDeliveryDependencyTargetDeliveryRateCallbackSigningKey & object, readonly unknown[]>)
    | (Exclude<RevokeDeliveryDependencyTargetDeliveryRateCallback & object, readonly unknown[]>)
    | (Exclude<RevokeDeliveryDependencyTargetDeliveryRateCallbackRevision & object, readonly unknown[]>)
    | (Exclude<RevokeDeliveryDependencyTargetDeliveryMethod & object, readonly unknown[]>)
    | (Exclude<RevokeDeliveryDependencyTargetDeliveryMethodRevision & object, readonly unknown[]>)
    | (Record<string, unknown>));
/** A typed revocation target. Each target_type accepts only its resource-specific fields. */
export type RevokeDeliveryDependencyTargetDeliveryMethod = ({
    /** minLength: 1. */
    "delivery_method_id": string;
    /** minLength: 1. */
    "delivery_method_revision_id"?: string;
    /** minLength: 1. */
    "delivery_rate_callback_id"?: string;
    /** minLength: 1. */
    "delivery_rate_callback_revision_id"?: string;
    /** minLength: 1. */
    "delivery_rate_callback_signing_key_id"?: string;
    /**
     * Exact version of the Location geography to revoke. Required for location_geography targets.
     * Format: int64. minimum: 1.
     */
    "location_geography_version"?: number;
    /** minLength: 1. */
    "location_id"?: string;
    /** Value enum: "delivery_method". */
    "target_type": "delivery_method" | (string & {});
})
    & (({
    /** Value enum: "delivery_method". */
    "target_type": unknown;
    /** minLength: 1. */
    "delivery_method_id": string;
}));
/** A typed revocation target. Each target_type accepts only its resource-specific fields. */
export type RevokeDeliveryDependencyTargetDeliveryMethodInput = ({
    /** minLength: 1. */
    "delivery_method_id": string;
    /** minLength: 1. */
    "delivery_method_revision_id"?: string;
    /** minLength: 1. */
    "delivery_rate_callback_id"?: string;
    /** minLength: 1. */
    "delivery_rate_callback_revision_id"?: string;
    /** minLength: 1. */
    "delivery_rate_callback_signing_key_id"?: string;
    /**
     * Exact version of the Location geography to revoke. Required for location_geography targets.
     * Format: int64. minimum: 1.
     */
    "location_geography_version"?: number;
    /** minLength: 1. */
    "location_id"?: string;
    /** Value enum: "delivery_method". */
    "target_type": "delivery_method";
})
    & (({
    /** Value enum: "delivery_method". */
    "target_type": "delivery_method";
    /** minLength: 1. */
    "delivery_method_id": string;
})
    & (({
    "location_id"?: never;
})
    & ({
    "location_geography_version"?: never;
})
    & ({
    "delivery_rate_callback_id"?: never;
})
    & ({
    "delivery_rate_callback_revision_id"?: never;
})
    & ({
    "delivery_rate_callback_signing_key_id"?: never;
})
    & ({
    "delivery_method_revision_id"?: never;
})));
/** A typed revocation target. Each target_type accepts only its resource-specific fields. */
export type RevokeDeliveryDependencyTargetDeliveryMethodRevision = ({
    /** minLength: 1. */
    "delivery_method_id": string;
    /** minLength: 1. */
    "delivery_method_revision_id": string;
    /** minLength: 1. */
    "delivery_rate_callback_id"?: string;
    /** minLength: 1. */
    "delivery_rate_callback_revision_id"?: string;
    /** minLength: 1. */
    "delivery_rate_callback_signing_key_id"?: string;
    /**
     * Exact version of the Location geography to revoke. Required for location_geography targets.
     * Format: int64. minimum: 1.
     */
    "location_geography_version"?: number;
    /** minLength: 1. */
    "location_id"?: string;
    /** Value enum: "delivery_method_revision". */
    "target_type": "delivery_method_revision" | (string & {});
})
    & (({
    /** Value enum: "delivery_method_revision". */
    "target_type": unknown;
    /** minLength: 1. */
    "delivery_method_id": string;
    /** minLength: 1. */
    "delivery_method_revision_id": string;
}));
/** A typed revocation target. Each target_type accepts only its resource-specific fields. */
export type RevokeDeliveryDependencyTargetDeliveryMethodRevisionInput = ({
    /** minLength: 1. */
    "delivery_method_id": string;
    /** minLength: 1. */
    "delivery_method_revision_id": string;
    /** minLength: 1. */
    "delivery_rate_callback_id"?: string;
    /** minLength: 1. */
    "delivery_rate_callback_revision_id"?: string;
    /** minLength: 1. */
    "delivery_rate_callback_signing_key_id"?: string;
    /**
     * Exact version of the Location geography to revoke. Required for location_geography targets.
     * Format: int64. minimum: 1.
     */
    "location_geography_version"?: number;
    /** minLength: 1. */
    "location_id"?: string;
    /** Value enum: "delivery_method_revision". */
    "target_type": "delivery_method_revision";
})
    & (({
    /** Value enum: "delivery_method_revision". */
    "target_type": "delivery_method_revision";
    /** minLength: 1. */
    "delivery_method_id": string;
    /** minLength: 1. */
    "delivery_method_revision_id": string;
})
    & (({
    "location_id"?: never;
})
    & ({
    "location_geography_version"?: never;
})
    & ({
    "delivery_rate_callback_id"?: never;
})
    & ({
    "delivery_rate_callback_revision_id"?: never;
})
    & ({
    "delivery_rate_callback_signing_key_id"?: never;
})));
/** A typed revocation target. Each target_type accepts only its resource-specific fields. */
export type RevokeDeliveryDependencyTargetDeliveryRateCallback = ({
    /** minLength: 1. */
    "delivery_method_id"?: string;
    /** minLength: 1. */
    "delivery_method_revision_id"?: string;
    /** minLength: 1. */
    "delivery_rate_callback_id": string;
    /** minLength: 1. */
    "delivery_rate_callback_revision_id"?: string;
    /** minLength: 1. */
    "delivery_rate_callback_signing_key_id"?: string;
    /**
     * Exact version of the Location geography to revoke. Required for location_geography targets.
     * Format: int64. minimum: 1.
     */
    "location_geography_version"?: number;
    /** minLength: 1. */
    "location_id"?: string;
    /** Value enum: "delivery_rate_callback". */
    "target_type": "delivery_rate_callback" | (string & {});
})
    & (({
    /** Value enum: "delivery_rate_callback". */
    "target_type": unknown;
    /** minLength: 1. */
    "delivery_rate_callback_id": string;
}));
/** A typed revocation target. Each target_type accepts only its resource-specific fields. */
export type RevokeDeliveryDependencyTargetDeliveryRateCallbackInput = ({
    /** minLength: 1. */
    "delivery_method_id"?: string;
    /** minLength: 1. */
    "delivery_method_revision_id"?: string;
    /** minLength: 1. */
    "delivery_rate_callback_id": string;
    /** minLength: 1. */
    "delivery_rate_callback_revision_id"?: string;
    /** minLength: 1. */
    "delivery_rate_callback_signing_key_id"?: string;
    /**
     * Exact version of the Location geography to revoke. Required for location_geography targets.
     * Format: int64. minimum: 1.
     */
    "location_geography_version"?: number;
    /** minLength: 1. */
    "location_id"?: string;
    /** Value enum: "delivery_rate_callback". */
    "target_type": "delivery_rate_callback";
})
    & (({
    /** Value enum: "delivery_rate_callback". */
    "target_type": "delivery_rate_callback";
    /** minLength: 1. */
    "delivery_rate_callback_id": string;
})
    & (({
    "location_id"?: never;
})
    & ({
    "location_geography_version"?: never;
})
    & ({
    "delivery_rate_callback_revision_id"?: never;
})
    & ({
    "delivery_rate_callback_signing_key_id"?: never;
})
    & ({
    "delivery_method_id"?: never;
})
    & ({
    "delivery_method_revision_id"?: never;
})));
/** A typed revocation target. Each target_type accepts only its resource-specific fields. */
export type RevokeDeliveryDependencyTargetDeliveryRateCallbackRevision = ({
    /** minLength: 1. */
    "delivery_method_id"?: string;
    /** minLength: 1. */
    "delivery_method_revision_id"?: string;
    /** minLength: 1. */
    "delivery_rate_callback_id": string;
    /** minLength: 1. */
    "delivery_rate_callback_revision_id": string;
    /** minLength: 1. */
    "delivery_rate_callback_signing_key_id"?: string;
    /**
     * Exact version of the Location geography to revoke. Required for location_geography targets.
     * Format: int64. minimum: 1.
     */
    "location_geography_version"?: number;
    /** minLength: 1. */
    "location_id"?: string;
    /** Value enum: "delivery_rate_callback_revision". */
    "target_type": "delivery_rate_callback_revision" | (string & {});
})
    & (({
    /** Value enum: "delivery_rate_callback_revision". */
    "target_type": unknown;
    /** minLength: 1. */
    "delivery_rate_callback_id": string;
    /** minLength: 1. */
    "delivery_rate_callback_revision_id": string;
}));
/** A typed revocation target. Each target_type accepts only its resource-specific fields. */
export type RevokeDeliveryDependencyTargetDeliveryRateCallbackRevisionInput = ({
    /** minLength: 1. */
    "delivery_method_id"?: string;
    /** minLength: 1. */
    "delivery_method_revision_id"?: string;
    /** minLength: 1. */
    "delivery_rate_callback_id": string;
    /** minLength: 1. */
    "delivery_rate_callback_revision_id": string;
    /** minLength: 1. */
    "delivery_rate_callback_signing_key_id"?: string;
    /**
     * Exact version of the Location geography to revoke. Required for location_geography targets.
     * Format: int64. minimum: 1.
     */
    "location_geography_version"?: number;
    /** minLength: 1. */
    "location_id"?: string;
    /** Value enum: "delivery_rate_callback_revision". */
    "target_type": "delivery_rate_callback_revision";
})
    & (({
    /** Value enum: "delivery_rate_callback_revision". */
    "target_type": "delivery_rate_callback_revision";
    /** minLength: 1. */
    "delivery_rate_callback_id": string;
    /** minLength: 1. */
    "delivery_rate_callback_revision_id": string;
})
    & (({
    "location_id"?: never;
})
    & ({
    "location_geography_version"?: never;
})
    & ({
    "delivery_rate_callback_signing_key_id"?: never;
})
    & ({
    "delivery_method_id"?: never;
})
    & ({
    "delivery_method_revision_id"?: never;
})));
/** A typed revocation target. Each target_type accepts only its resource-specific fields. */
export type RevokeDeliveryDependencyTargetDeliveryRateCallbackSigningKey = ({
    /** minLength: 1. */
    "delivery_method_id"?: string;
    /** minLength: 1. */
    "delivery_method_revision_id"?: string;
    /** minLength: 1. */
    "delivery_rate_callback_id"?: string;
    /** minLength: 1. */
    "delivery_rate_callback_revision_id"?: string;
    /** minLength: 1. */
    "delivery_rate_callback_signing_key_id": string;
    /**
     * Exact version of the Location geography to revoke. Required for location_geography targets.
     * Format: int64. minimum: 1.
     */
    "location_geography_version"?: number;
    /** minLength: 1. */
    "location_id"?: string;
    /** Value enum: "delivery_rate_callback_signing_key". */
    "target_type": "delivery_rate_callback_signing_key" | (string & {});
})
    & (({
    /** Value enum: "delivery_rate_callback_signing_key". */
    "target_type": unknown;
    /** minLength: 1. */
    "delivery_rate_callback_signing_key_id": string;
}));
/** A typed revocation target. Each target_type accepts only its resource-specific fields. */
export type RevokeDeliveryDependencyTargetDeliveryRateCallbackSigningKeyInput = ({
    /** minLength: 1. */
    "delivery_method_id"?: string;
    /** minLength: 1. */
    "delivery_method_revision_id"?: string;
    /** minLength: 1. */
    "delivery_rate_callback_id"?: string;
    /** minLength: 1. */
    "delivery_rate_callback_revision_id"?: string;
    /** minLength: 1. */
    "delivery_rate_callback_signing_key_id": string;
    /**
     * Exact version of the Location geography to revoke. Required for location_geography targets.
     * Format: int64. minimum: 1.
     */
    "location_geography_version"?: number;
    /** minLength: 1. */
    "location_id"?: string;
    /** Value enum: "delivery_rate_callback_signing_key". */
    "target_type": "delivery_rate_callback_signing_key";
})
    & (({
    /** Value enum: "delivery_rate_callback_signing_key". */
    "target_type": "delivery_rate_callback_signing_key";
    /** minLength: 1. */
    "delivery_rate_callback_signing_key_id": string;
})
    & (({
    "location_id"?: never;
})
    & ({
    "location_geography_version"?: never;
})
    & ({
    "delivery_rate_callback_id"?: never;
})
    & ({
    "delivery_rate_callback_revision_id"?: never;
})
    & ({
    "delivery_method_id"?: never;
})
    & ({
    "delivery_method_revision_id"?: never;
})));
/** A typed revocation target. Each target_type accepts only its resource-specific fields. */
export type RevokeDeliveryDependencyTargetInput = ({
    /** minLength: 1. */
    "delivery_method_id"?: string;
    /** minLength: 1. */
    "delivery_method_revision_id"?: string;
    /** minLength: 1. */
    "delivery_rate_callback_id"?: string;
    /** minLength: 1. */
    "delivery_rate_callback_revision_id"?: string;
    /** minLength: 1. */
    "delivery_rate_callback_signing_key_id"?: string;
    /**
     * Exact version of the Location geography to revoke. Required for location_geography targets.
     * Format: int64. minimum: 1.
     */
    "location_geography_version"?: number;
    /** minLength: 1. */
    "location_id"?: string;
    /**
     * Value enum: "location_geography", "delivery_rate_callback_signing_key",
     * "delivery_rate_callback", "delivery_rate_callback_revision", "delivery_method",
     * "delivery_method_revision".
     */
    "target_type": "location_geography"
        | "delivery_rate_callback_signing_key"
        | "delivery_rate_callback"
        | "delivery_rate_callback_revision"
        | "delivery_method"
        | "delivery_method_revision";
})
    & ((Exclude<RevokeDeliveryDependencyTargetLocationGeographyInput & object, readonly unknown[]>)
    | (Exclude<RevokeDeliveryDependencyTargetDeliveryRateCallbackSigningKeyInput & object, readonly unknown[]>)
    | (Exclude<RevokeDeliveryDependencyTargetDeliveryRateCallbackInput & object, readonly unknown[]>)
    | (Exclude<RevokeDeliveryDependencyTargetDeliveryRateCallbackRevisionInput & object, readonly unknown[]>)
    | (Exclude<RevokeDeliveryDependencyTargetDeliveryMethodInput & object, readonly unknown[]>)
    | (Exclude<RevokeDeliveryDependencyTargetDeliveryMethodRevisionInput & object, readonly unknown[]>));
/** A typed revocation target. Each target_type accepts only its resource-specific fields. */
export type RevokeDeliveryDependencyTargetLocationGeography = ({
    /** minLength: 1. */
    "delivery_method_id"?: string;
    /** minLength: 1. */
    "delivery_method_revision_id"?: string;
    /** minLength: 1. */
    "delivery_rate_callback_id"?: string;
    /** minLength: 1. */
    "delivery_rate_callback_revision_id"?: string;
    /** minLength: 1. */
    "delivery_rate_callback_signing_key_id"?: string;
    /**
     * Exact version of the Location geography to revoke. Required for location_geography targets.
     * Format: int64. minimum: 1.
     */
    "location_geography_version": number;
    /** minLength: 1. */
    "location_id": string;
    /** Value enum: "location_geography". */
    "target_type": "location_geography" | (string & {});
})
    & (({
    /** Value enum: "location_geography". */
    "target_type": unknown;
    /** minLength: 1. */
    "location_id": string;
    /**
     * Exact version of the Location geography to revoke. Required for location_geography targets.
     * Format: int64. minimum: 1.
     */
    "location_geography_version": number;
}));
/** A typed revocation target. Each target_type accepts only its resource-specific fields. */
export type RevokeDeliveryDependencyTargetLocationGeographyInput = ({
    /** minLength: 1. */
    "delivery_method_id"?: string;
    /** minLength: 1. */
    "delivery_method_revision_id"?: string;
    /** minLength: 1. */
    "delivery_rate_callback_id"?: string;
    /** minLength: 1. */
    "delivery_rate_callback_revision_id"?: string;
    /** minLength: 1. */
    "delivery_rate_callback_signing_key_id"?: string;
    /**
     * Exact version of the Location geography to revoke. Required for location_geography targets.
     * Format: int64. minimum: 1.
     */
    "location_geography_version": number;
    /** minLength: 1. */
    "location_id": string;
    /** Value enum: "location_geography". */
    "target_type": "location_geography";
})
    & (({
    /** Value enum: "location_geography". */
    "target_type": "location_geography";
    /** minLength: 1. */
    "location_id": string;
    /**
     * Exact version of the Location geography to revoke. Required for location_geography targets.
     * Format: int64. minimum: 1.
     */
    "location_geography_version": number;
})
    & (({
    "delivery_rate_callback_id"?: never;
})
    & ({
    "delivery_rate_callback_revision_id"?: never;
})
    & ({
    "delivery_rate_callback_signing_key_id"?: never;
})
    & ({
    "delivery_method_id"?: never;
})
    & ({
    "delivery_method_revision_id"?: never;
})));
/**
 * One attribute a risk rule can test, with its value type, allowed operators, and whether it is
 * currently available.
 */
export type RiskAttribute = {
    /** Value enum: "pre_authorization", "post_authorization". */
    "available_from": "pre_authorization" | "post_authorization" | (string & {});
    /**  [] (Value): string. */
    "enum_values"?: Array<string>;
    /** Whether the attribute can be used in rules in this environment. */
    "is_available": boolean;
    /** Whether the attribute can be missing from a payment. */
    "is_nullable": boolean;
    /** Value enum: "not_applicable_except_is_missing". */
    "missing_value_behavior": "not_applicable_except_is_missing" | (string & {});
    "name": string;
    /**
     * Operators accepted by this attribute. [] enum: "eq", "neq", "gt", "gte", "lt", "lte", "in",
     * "in_list", "is_missing". [] (Value): string. Value enum: "eq", "neq", "gt", "gte", "lt",
     * "lte", "in", "in_list", "is_missing".
     */
    "operators": Array<"eq" | "neq" | "gt" | "gte" | "lt" | "lte" | "in" | "in_list" | "is_missing" | (string & {})>;
    /** Value enum: "risk_scoring_not_enabled", "ip_geolocation_not_enabled". */
    "unavailable_reason"?: "risk_scoring_not_enabled" | "ip_geolocation_not_enabled" | (string & {});
    /**
     * Value enum: "money", "currency", "string", "enum", "country", "email", "ip_address",
     * "boolean", "integer".
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
     *  [] (Value): {@link RiskAttribute}. One attribute a risk rule can test, with its value type,
     * allowed operators, and whether it is currently available.
     */
    "attributes": Array<RiskAttribute>;
};
/** A response containing `RiskAttributeRegistry` data. */
export type RiskAttributeRegistryResponse = {
    /** The attributes available to risk rules, in the current environment. */
    "data": RiskAttributeRegistry;
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
/** A collection of values used in payment risk rules. */
export type RiskList = {
    /**
     * Name rules use to refer to this list, such as flagged_emails: a lowercase letter, then up to
     * 127 lowercase letters, digits, or underscores. Set at creation and never changed.
     */
    "alias": string;
    /** RFC3339 timestamp. Format: date-time. */
    "archived_at": string | null;
    /** RFC3339 timestamp. Format: date-time. */
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
    "name": string;
    /**
     * Whether Flint manages the list or the merchant created it. Value enum: "system_default",
     * "merchant".
     */
    "origin": "system_default" | "merchant" | (string & {});
    "risk_list_id": string;
    /** Value enum: "active", "archived". */
    "status": "active" | "archived" | (string & {});
    /** RFC3339 timestamp. Format: date-time. */
    "updated_at": string;
    /**
     * Version of persisted list configuration and item-count changes. External observations do not
     * advance this counter. Format: uint64. minimum: 1.
     */
    "version": number;
};
/** One value in a payment risk list. */
export type RiskListItem = {
    /** RFC3339 timestamp. Format: date-time. */
    "created_at": string;
    /**
     * The credential that created this list item. Null when Flint created it. The reference may
     * name an API key in the other mode. anyOf[1] (Value): {@link ResourceReference}. A reference
     * to another resource by `resource_type` and `resource_id`. anyOf[2] (Value): null.
     */
    "created_by": ((ResourceReference) | (null));
    "risk_list_id": string;
    "risk_list_item_id": string;
    /**
     * The value as stored after item_type normalization, which is what payments are matched
     * against.
     */
    "value": string;
};
/** The risk list item matched or created for one requested value, and its creation outcome. */
export type RiskListItemAddition = {
    /** Value enum: "created", "existing". */
    "outcome": "created" | "existing" | (string & {});
    /** One value in a payment risk list. */
    "risk_list_item": RiskListItem;
};
/** A page of `RiskListItem` objects. */
export type RiskListItemListResponse = {
    /**  [] (Value): {@link RiskListItem}. One value in a payment risk list. */
    "data": Array<RiskListItem>;
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
/** A response containing `RiskListItem` data. */
export type RiskListItemResponse = {
    /** One value in a payment risk list. */
    "data": RiskListItem;
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
/** A page of `RiskList` objects. */
export type RiskListListResponse = {
    /**  [] (Value): {@link RiskList}. A collection of values used in payment risk rules. */
    "data": Array<RiskList>;
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
/** A response containing `RiskList` data. */
export type RiskListResourceResponse = {
    /** A collection of values used in payment risk rules. */
    "data": RiskList;
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
export type RiskListsCreateItemsParams = (InputValue<AddRiskListItemsRequestInput>);
export type RiskListsCreateParams = (InputValue<CreateRiskListRequestInput>);
export type RiskListsDeleteItemParams = {};
export type RiskListsDeleteParams = {
    /** Optional risk list version last read by the caller. Format: uint64. minimum: 1. */
    "expected_version"?: InputValue<number>;
};
export type RiskListsGetItemParams = {};
export type RiskListsGetParams = {};
export type RiskListsListParams = {
    /**
     * Exact-match filter on the lowercase list alias. No whitespace or case normalization is
     * applied. minLength: 1. maxLength: 128. pattern: ^[a-z][a-z0-9_]{0,127}$.
     */
    "alias"?: InputValue<string>;
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
     * Opaque next_page_token from the previous response. Omit on the first request. You may change
     * `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request
     * context. Do not parse or construct tokens. An invalid, expired, or mismatched token returns
     * a validation error.
     */
    "page_token"?: InputValue<string>;
};
