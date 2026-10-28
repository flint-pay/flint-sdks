import type { InputValue } from '../runtime.js';
import type { AddReturnLineItemRequestInput, AddRiskListItemsRequestInput } from './types-0.js';
import type { MeCancelReturnInput } from './types-31.js';
import type { CancelReturnLineItemRequestInput } from './types-3.js';
import type { CompleteReturnRequestInput } from './types-5.js';
import type {
    CreateReturnDispositionRequestInput,
    CreateReturnRequestInput,
    CreateReturnInspectionRequestInput,
    CreateReturnReceiptRequestInput
} from './types-9.js';
import type { CreateReturnResolutionRequestInput, CreateRiskListRequestInput } from './types-10.js';
import type { DecideReturnRequestInput, DeclinePaymentReviewRequestInput } from './types-12.js';
import type { ProcessExistingReturnRequestInput } from './types-39.js';
import type { ReopenReturnRequestInput, ResponseMeta, ResourceReference } from './types-42.js';
import type { UpdateReturnRequestInput, UpdateReturnLineItemRequestInput } from './types-52.js';
import type { WaiveReturnLineInspectionRequestInput } from './types-53.js';
/**
 * Shape $ (Value): {@link ReturnShippingPolicy}. Who pays for return shipping in a return policy:
 * the merchant or the buyer.
 */
export type ReturnShippingPolicy = {
    /** Shape $ (Value): string.  Value enum: "merchant", "buyer". */
    "payer": "merchant" | "buyer" | (string & {});
};
/**
 * Shape $ (Value): {@link ReturnShippingPolicyInput}. Who pays for return shipping in a return
 * policy: the merchant or the buyer.
 */
export type ReturnShippingPolicyInput = {
    /** Shape $ (Value): string.  Value enum: "merchant", "buyer". */
    "payer": "merchant" | "buyer";
};
/**
 * Shape $ (Value): {@link ReturnSourceSystem}. The system a return event came from, such as a
 * point of sale or warehouse system, with its own identifier.
 */
export type ReturnSourceSystem = ({
    /**
     * Shape $ (Value): string. Your source system's identifier. Required when source_system_type
     * is pos, wms, erp, or other; not allowed when source_system_type is manual. Don't put secrets
     * in this field. minLength: 1. maxLength: 255.
     */
    "external_source_id"?: string;
    /**
     * Shape $ (Value): string. Source of the event: manual for a manual entry, pos for a point of
     * sale, wms for a warehouse management system, erp for an enterprise resource planning system,
     * or other for another external system. Flint-authored events use flint in responses. Value
     * enum: "manual", "pos", "wms", "erp", "other", "flint".
     */
    "source_system_type": "manual" | "pos" | "wms" | "erp" | "other" | "flint" | (string & {});
});
/**
 * Shape $ (Value): {@link ReturnSourceSystemInput}. The system a return event came from, such as a
 * point of sale or warehouse system, with its own identifier.
 */
export type ReturnSourceSystemInput = ({
    /**
     * Shape $ (Value): string. Your source system's identifier. Required when source_system_type
     * is pos, wms, erp, or other; not allowed when source_system_type is manual. Don't put secrets
     * in this field. minLength: 1. maxLength: 255.
     */
    "external_source_id"?: string;
    /**
     * Shape $ (Value): string. Source of the event: manual for a manual entry, pos for a point of
     * sale, wms for a warehouse management system, erp for an enterprise resource planning system,
     * or other for another external system. Flint-authored events use flint in responses. Value
     * enum: "manual", "pos", "wms", "erp", "other", "flint".
     */
    "source_system_type": "manual" | "pos" | "wms" | "erp" | "other" | "flint";
});
/**
 * Shape $ (Value): {@link ReturnUnverifiedItem}. Merchandise received in a return that does not
 * match an expected return line, described by name, SKU, and description.
 */
export type ReturnUnverifiedItem = {
    /** Shape $ (Value): string. minLength: 1. */
    "description"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "name": string;
    /** Shape $ (Value): string. minLength: 1. */
    "sku"?: string;
};
/**
 * Shape $ (Value): {@link ReturnUnverifiedItemInput}. Merchandise received in a return that does
 * not match an expected return line, described by name, SKU, and description.
 */
export type ReturnUnverifiedItemInput = ReturnUnverifiedItem;
/**
 * Shape $ (Value): {@link ReturnWindow}. How long after an event, such as fulfillment or delivery,
 * an order can be returned under a return policy.
 */
export type ReturnWindow = {
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64.
     */
    "duration_seconds": `${bigint}`;
    /**
     * Shape $ (Value): string. Value enum: "fulfilled", "delivered", "picked_up",
     * "service_completed".
     */
    "starts_at_event": "fulfilled" | "delivered" | "picked_up" | "service_completed" | (string & {});
};
/**
 * Shape $ (Value): {@link ReturnWindowInput}. How long after an event, such as fulfillment or
 * delivery, an order can be returned under a return policy.
 */
export type ReturnWindowInput = {
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64.
     */
    "duration_seconds": `${bigint}` | bigint;
    /**
     * Shape $ (Value): string. Value enum: "fulfilled", "delivered", "picked_up",
     * "service_completed".
     */
    "starts_at_event": "fulfilled" | "delivered" | "picked_up" | "service_completed";
};
export type ReturnsAddLineItemInput = {
    /** Shape $ (Value): string. */
    "return_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link AddReturnLineItemRequestInput}. The request body for: Add return
     * line item.
     */
    "body": InputValue<AddReturnLineItemRequestInput>;
};
export type ReturnsCancelInput = MeCancelReturnInput;
export type ReturnsCancelLineItemInput = {
    /** Shape $ (Value): string. */
    "return_id": InputValue<string>;
    /** Shape $ (Value): string. */
    "return_line_item_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link CancelReturnLineItemRequestInput}. The request body for: Cancel
     * return line item.
     */
    "body": InputValue<CancelReturnLineItemRequestInput>;
};
export type ReturnsCompleteInput = {
    /** Shape $ (Value): string. */
    "return_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link CompleteReturnRequestInput}. The request body for: Complete return.
     */
    "body": InputValue<CompleteReturnRequestInput>;
};
export type ReturnsCreateAccessLinkInput = {
    /** Shape $ (Value): string. */
    "return_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /** Shape $ (Value): object. maxProperties: 0. */
    "body"?: InputValue<{}>;
};
export type ReturnsCreateDispositionInput = {
    /** Shape $ (Value): string. */
    "return_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link CreateReturnDispositionRequestInput}. The request body for: Create
     * return disposition.
     */
    "body": InputValue<CreateReturnDispositionRequestInput>;
};
export type ReturnsCreateInput = {
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /** Shape $ (Value): {@link CreateReturnRequestInput}. The request body for: Create return. */
    "body": InputValue<CreateReturnRequestInput>;
};
export type ReturnsCreateInspectionInput = {
    /** Shape $ (Value): string. */
    "return_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link CreateReturnInspectionRequestInput}. The request body for: Create
     * return inspection.
     */
    "body": InputValue<CreateReturnInspectionRequestInput>;
};
export type ReturnsCreateReceiptInput = {
    /** Shape $ (Value): string. */
    "return_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link CreateReturnReceiptRequestInput}. The request body for: Create
     * return receipt.
     */
    "body": InputValue<CreateReturnReceiptRequestInput>;
};
export type ReturnsCreateResolutionInput = {
    /** Shape $ (Value): string. */
    "return_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link CreateReturnResolutionRequestInput}. The request body for: Create
     * return resolution.
     */
    "body": InputValue<CreateReturnResolutionRequestInput>;
};
export type ReturnsDecideInput = {
    /** Shape $ (Value): string. */
    "return_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /** Shape $ (Value): {@link DecideReturnRequestInput}. The request body for: Decide return. */
    "body": InputValue<DecideReturnRequestInput>;
};
export type ReturnsDeleteLineItemInput = {
    /** Shape $ (Value): string. */
    "return_id": InputValue<string>;
    /** Shape $ (Value): string. */
    "return_line_item_id": InputValue<string>;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 1.
     */
    "expected_version"?: InputValue<`${bigint}` | bigint>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
};
export type ReturnsGetInput = {
    /** Shape $ (Value): string. */
    "return_id": InputValue<string>;
    /**
     * Shape $ (Value): Array of string. [] enum: "customer", "line_items.fulfillment",
     * "line_items.return_reason", "order", "return_dispositions", "return_inspections",
     * "return_receipts", "return_resolutions", "shipments". Shape $[] (Value): string. Value enum:
     * "customer", "line_items.fulfillment", "line_items.return_reason", "order",
     * "return_dispositions", "return_inspections", "return_receipts", "return_resolutions",
     * "shipments".
     */
    "expand"?: InputValue<Array<"customer"
        | "line_items.fulfillment"
        | "line_items.return_reason"
        | "order"
        | "return_dispositions"
        | "return_inspections"
        | "return_receipts"
        | "return_resolutions"
        | "shipments">>;
};
export type ReturnsGetLineItemInput = {
    /** Shape $ (Value): string. */
    "return_id": InputValue<string>;
    /** Shape $ (Value): string. */
    "return_line_item_id": InputValue<string>;
};
export type ReturnsListActivitiesInput = {
    /** Shape $ (Value): string. */
    "return_id": InputValue<string>;
    /** Shape $ (Value): integer. Format: int32. minimum: 1. maximum: 100. Default: 20. */
    "page_size"?: InputValue<number>;
    /** Shape $ (Value): string. */
    "page_token"?: InputValue<string>;
    /** Shape $ (Value): string. Default: "desc". Value enum: "asc", "desc". */
    "sort_direction"?: InputValue<"asc" | "desc">;
};
export type ReturnsListInput = {
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. */
    "customer_id"?: InputValue<string>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "pending", "approved",
     * "partially_approved", "declined". Shape $[] (Value): string. Value enum: "pending",
     * "approved", "partially_approved", "declined".
     */
    "decision_status"?: InputValue<Array<"pending" | "approved" | "partially_approved" | "declined">>;
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "external_reference_id"?: InputValue<string>;
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "idempotency_key"?: InputValue<string>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "not_required", "awaiting_handoff",
     * "in_transit", "partially_received", "inspection_required", "partially_inspected",
     * "inspection_review_required", "disposition_required", "resolved", "exception". Shape $[]
     * (Value): string. Value enum: "not_required", "awaiting_handoff", "in_transit",
     * "partially_received", "inspection_required", "partially_inspected",
     * "inspection_review_required", "disposition_required", "resolved", "exception".
     */
    "merchandise_status"?: InputValue<Array<"not_required"
        | "awaiting_handoff"
        | "in_transit"
        | "partially_received"
        | "inspection_required"
        | "partially_inspected"
        | "inspection_review_required"
        | "disposition_required"
        | "resolved"
        | "exception">>;
    /** Shape $ (Value): string. */
    "order_id"?: InputValue<string>;
    /** Shape $ (Value): integer. Format: int32. minimum: 1. maximum: 100. Default: 20. */
    "page_size"?: InputValue<number>;
    /** Shape $ (Value): string. */
    "page_token"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "query"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "receiving_location_id"?: InputValue<string>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "not_selected", "pending",
     * "partially_fulfilled", "requires_action", "fulfilled", "failed". Shape $[] (Value): string.
     * Value enum: "not_selected", "pending", "partially_fulfilled", "requires_action",
     * "fulfilled", "failed".
     */
    "resolution_status"?: InputValue<Array<"not_selected" | "pending" | "partially_fulfilled" | "requires_action" | "fulfilled" | "failed">>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "refund", "exchange", "replacement",
     * "store_credit", "no_monetary_action", "correction". Shape $[] (Value): string. Value enum:
     * "refund", "exchange", "replacement", "store_credit", "no_monetary_action", "correction".
     */
    "resolution_type"?: InputValue<Array<"refund" | "exchange" | "replacement" | "store_credit" | "no_monetary_action" | "correction">>;
    /** Shape $ (Value): string. */
    "return_number"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "return_reason_id"?: InputValue<string>;
    /** Shape $ (Value): string. Default: "created_at". Value enum: "created_at". */
    "sort_by"?: InputValue<"created_at">;
    /** Shape $ (Value): string. Default: "desc". Value enum: "asc", "desc". */
    "sort_direction"?: InputValue<"asc" | "desc">;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "requested", "open", "completed",
     * "declined", "canceled". Shape $[] (Value): string. Value enum: "requested", "open",
     * "completed", "declined", "canceled".
     */
    "status"?: InputValue<Array<"requested" | "open" | "completed" | "declined" | "canceled">>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_after"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_before"?: InputValue<string | globalThis.Date>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "decision", "handoff", "receipt",
     * "inspection", "disposition", "resolution", "exception". Shape $[] (Value): string. Value
     * enum: "decision", "handoff", "receipt", "inspection", "disposition", "resolution",
     * "exception".
     */
    "work_type"?: InputValue<Array<"decision" | "handoff" | "receipt" | "inspection" | "disposition" | "resolution" | "exception">>;
    /**
     * Shape $ (Value): Array of string. [] enum: "customer", "order". Shape $[] (Value): string.
     * Value enum: "customer", "order".
     */
    "expand"?: InputValue<Array<"customer" | "order">>;
};
export type ReturnsListLineItemsInput = {
    /** Shape $ (Value): string. */
    "return_id": InputValue<string>;
    /** Shape $ (Value): string. */
    "fulfillment_id"?: InputValue<string>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "not_required", "awaiting_handoff",
     * "in_transit", "partially_received", "inspection_required", "partially_inspected",
     * "inspection_review_required", "disposition_required", "resolved", "exception". Shape $[]
     * (Value): string. Value enum: "not_required", "awaiting_handoff", "in_transit",
     * "partially_received", "inspection_required", "partially_inspected",
     * "inspection_review_required", "disposition_required", "resolved", "exception".
     */
    "merchandise_status"?: InputValue<Array<"not_required"
        | "awaiting_handoff"
        | "in_transit"
        | "partially_received"
        | "inspection_required"
        | "partially_inspected"
        | "inspection_review_required"
        | "disposition_required"
        | "resolved"
        | "exception">>;
    /** Shape $ (Value): string. */
    "order_line_item_id"?: InputValue<string>;
    /** Shape $ (Value): integer. Format: int32. minimum: 1. maximum: 100. Default: 20. */
    "page_size"?: InputValue<number>;
    /** Shape $ (Value): string. */
    "page_token"?: InputValue<string>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "not_selected", "pending",
     * "requires_action", "fulfilled", "failed". Shape $[] (Value): string. Value enum:
     * "not_selected", "pending", "requires_action", "fulfilled", "failed".
     */
    "resolution_status"?: InputValue<Array<"not_selected" | "pending" | "requires_action" | "fulfilled" | "failed">>;
    /** Shape $ (Value): string. */
    "return_reason_id"?: InputValue<string>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "requested", "open", "completed",
     * "declined", "canceled". Shape $[] (Value): string. Value enum: "requested", "open",
     * "completed", "declined", "canceled".
     */
    "status"?: InputValue<Array<"requested" | "open" | "completed" | "declined" | "canceled">>;
};
export type ReturnsProcessExistingInput = {
    /** Shape $ (Value): string. */
    "return_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link ProcessExistingReturnRequestInput}. The request body for: Process
     * existing return.
     */
    "body": InputValue<ProcessExistingReturnRequestInput>;
};
export type ReturnsReopenInput = {
    /** Shape $ (Value): string. */
    "return_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /** Shape $ (Value): {@link ReopenReturnRequestInput}. The request body for: Reopen return. */
    "body": InputValue<ReopenReturnRequestInput>;
};
export type ReturnsUpdateInput = {
    /** Shape $ (Value): string. */
    "return_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /** Shape $ (Value): {@link UpdateReturnRequestInput}. The request body for: Update return. */
    "body": InputValue<UpdateReturnRequestInput>;
};
export type ReturnsUpdateLineItemInput = {
    /** Shape $ (Value): string. */
    "return_id": InputValue<string>;
    /** Shape $ (Value): string. */
    "return_line_item_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link UpdateReturnLineItemRequestInput}. The request body for: Update
     * return line item.
     */
    "body": InputValue<UpdateReturnLineItemRequestInput>;
};
export type ReturnsWaiveLineInspectionInput = {
    /** Shape $ (Value): string. */
    "return_id": InputValue<string>;
    /** Shape $ (Value): string. */
    "return_line_item_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link WaiveReturnLineInspectionRequestInput}. The request body for: Waive
     * return line inspection.
     */
    "body": InputValue<WaiveReturnLineInspectionRequestInput>;
};
/**
 * Shape $ (Value): {@link ReverseInvoiceManualPaymentRequest}. The request body for: Reverse
 * manual invoice payment.
 */
export type ReverseInvoiceManualPaymentRequest = {
    /**
     * Shape $ (Value): integer string. Expected version of the invoice. Use an integer string
     * (decimal digits), not a floating-point number. Format: int64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /** Shape $ (Value): string. minLength: 1. maxLength: 4096. */
    "reversal_note"?: string;
    /**
     * Shape $ (Value): string. When the payment was reversed. Defaults to now and must not precede
     * received_at. Format: date-time. minLength: 1.
     */
    "reversed_at"?: string;
};
/**
 * Shape $ (Value): {@link ReverseInvoiceManualPaymentRequestInput}. The request body for: Reverse
 * manual invoice payment.
 */
export type ReverseInvoiceManualPaymentRequestInput = {
    /**
     * Shape $ (Value): integer string. Expected version of the invoice. Use an integer string
     * (decimal digits), not a floating-point number. Format: int64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /** Shape $ (Value): string. minLength: 1. maxLength: 4096. */
    "reversal_note"?: string;
    /**
     * Shape $ (Value): string. When the payment was reversed. Defaults to now and must not precede
     * received_at. Format: date-time. minLength: 1.
     */
    "reversed_at"?: string | globalThis.Date;
};
export type ReviewsApproveInput = {
    /** Shape $ (Value): string. */
    "payment_review_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
};
export type ReviewsDeclineInput = {
    /** Shape $ (Value): string. */
    "payment_review_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link DeclinePaymentReviewRequestInput}. The request body for: Decline a
     * payment review.
     */
    "body"?: InputValue<DeclinePaymentReviewRequestInput>;
};
export type ReviewsGetInput = {
    /** Shape $ (Value): string. */
    "payment_review_id": InputValue<string>;
    /**
     * Shape $ (Value): Array of string. [] enum: "customer", "order", "payment_intent". Shape $[]
     * (Value): string. Value enum: "customer", "order", "payment_intent".
     */
    "expand"?: InputValue<Array<"customer" | "order" | "payment_intent">>;
};
export type ReviewsListInput = {
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "open", "resolving", "closed". Shape
     * $[] (Value): string. Value enum: "open", "resolving", "closed".
     */
    "status"?: InputValue<Array<"open" | "resolving" | "closed">>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "normal", "elevated", "highest",
     * "not_assessed". Shape $[] (Value): string. Value enum: "normal", "elevated", "highest",
     * "not_assessed".
     */
    "risk_level"?: InputValue<Array<"normal" | "elevated" | "highest" | "not_assessed">>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "checkout", "payment_link",
     * "invoice", "subscription_initial", "subscription_renewal", "virtual_terminal", "api". Shape
     * $[] (Value): string. Value enum: "checkout", "payment_link", "invoice",
     * "subscription_initial", "subscription_renewal", "virtual_terminal", "api".
     */
    "payment_flow"?: InputValue<Array<"checkout"
        | "payment_link"
        | "invoice"
        | "subscription_initial"
        | "subscription_renewal"
        | "virtual_terminal"
        | "api">>;
    /** Shape $ (Value): string. */
    "payment_intent_id"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "order_id"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "customer_id"?: InputValue<string>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "opened_after"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "opened_before"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): integer. minimum: 1. maximum: 100. Default: 20. */
    "page_size"?: InputValue<number>;
    /** Shape $ (Value): string. */
    "page_token"?: InputValue<string>;
    /**
     * Shape $ (Value): Array of string. [] enum: "customer", "order", "payment_intent". Shape $[]
     * (Value): string. Value enum: "customer", "order", "payment_intent".
     */
    "expand"?: InputValue<Array<"customer" | "order" | "payment_intent">>;
};
/**
 * Shape $ (Value): {@link RevokeDeliveryDependencyRequest}. The request body for: Revoke delivery
 * dependency.
 */
export type RevokeDeliveryDependencyRequest = ({
    /**
     * Shape $ (Value): integer string. Required when target.target_type is delivery_method or
     * delivery_rate_callback. The version of the stable resource whose current revision will be
     * revoked. Omit it for exact revision, geography, and signing-key targets. Use an integer
     * string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /** Shape $ (Value): string. minLength: 1. maxLength: 2048. */
    "merchant_note"?: string;
    /**
     * Shape $ (Value): string. Value enum: "unsafe_configuration", "location_unavailable",
     * "credential_compromise", "legal_requirement", "other".
     */
    "reason": "unsafe_configuration"
        | "location_unavailable"
        | "credential_compromise"
        | "legal_requirement"
        | "other"
        | (string & {});
    /**
     * Shape $ (Value): {@link RevokeDeliveryDependencyTarget}. A typed revocation target. Each
     * target_type accepts only its resource-specific fields.
     */
    "target": RevokeDeliveryDependencyTarget;
});
/**
 * Shape $ (Value): {@link RevokeDeliveryDependencyRequestInput}. The request body for: Revoke
 * delivery dependency.
 */
export type RevokeDeliveryDependencyRequestInput = ({
    /**
     * Shape $ (Value): integer string. Required when target.target_type is delivery_method or
     * delivery_rate_callback. The version of the stable resource whose current revision will be
     * revoked. Omit it for exact revision, geography, and signing-key targets. Use an integer
     * string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /** Shape $ (Value): string. minLength: 1. maxLength: 2048. */
    "merchant_note"?: string;
    /**
     * Shape $ (Value): string. Value enum: "unsafe_configuration", "location_unavailable",
     * "credential_compromise", "legal_requirement", "other".
     */
    "reason": "unsafe_configuration"
        | "location_unavailable"
        | "credential_compromise"
        | "legal_requirement"
        | "other";
    /**
     * Shape $ (Value): {@link RevokeDeliveryDependencyTargetInput}. A typed revocation target.
     * Each target_type accepts only its resource-specific fields.
     */
    "target": RevokeDeliveryDependencyTargetInput;
});
/**
 * Shape $ (Value): {@link RevokeDeliveryDependencyTarget}. A typed revocation target. Each
 * target_type accepts only its resource-specific fields.
 */
export type RevokeDeliveryDependencyTarget = ({
    /** Shape $ (Value): string. minLength: 1. */
    "delivery_method_id"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "delivery_method_revision_id"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "delivery_rate_callback_id"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "delivery_rate_callback_revision_id"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "delivery_rate_callback_signing_key_id"?: string;
    /**
     * Shape $ (Value): integer string. Exact version of the Location geography to revoke. Required
     * for location_geography targets. Use an integer string (decimal digits), not a floating-point
     * number. Format: int64. minimum: 1.
     */
    "location_geography_version"?: `${bigint}`;
    /** Shape $ (Value): string. minLength: 1. */
    "location_id"?: string;
    /**
     * Shape $ (Value): string. Value enum: "location_geography",
     * "delivery_rate_callback_signing_key", "delivery_rate_callback",
     * "delivery_rate_callback_revision", "delivery_method", "delivery_method_revision".
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
/**
 * Shape $ (Value): {@link RevokeDeliveryDependencyTargetDeliveryMethod}. A typed revocation
 * target. Each target_type accepts only its resource-specific fields.
 */
export type RevokeDeliveryDependencyTargetDeliveryMethod = ({
    /** Shape $ (Value): string. minLength: 1. */
    "delivery_method_id": string;
    /** Shape $ (Value): string. minLength: 1. */
    "delivery_method_revision_id"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "delivery_rate_callback_id"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "delivery_rate_callback_revision_id"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "delivery_rate_callback_signing_key_id"?: string;
    /**
     * Shape $ (Value): integer string. Exact version of the Location geography to revoke. Required
     * for location_geography targets. Use an integer string (decimal digits), not a floating-point
     * number. Format: int64. minimum: 1.
     */
    "location_geography_version"?: `${bigint}`;
    /** Shape $ (Value): string. minLength: 1. */
    "location_id"?: string;
    /** Shape $ (Value): string.  Value enum: "delivery_method". */
    "target_type": "delivery_method" | (string & {});
})
    & (({
    /** Shape $ (Value): any.  Value enum: "delivery_method". */
    "target_type": unknown;
    /** Shape $ (Value): string. minLength: 1. */
    "delivery_method_id": string;
}));
/**
 * Shape $ (Value): {@link RevokeDeliveryDependencyTargetDeliveryMethodInput}. A typed revocation
 * target. Each target_type accepts only its resource-specific fields.
 */
export type RevokeDeliveryDependencyTargetDeliveryMethodInput = ({
    /** Shape $ (Value): string. minLength: 1. */
    "delivery_method_id": string;
    /** Shape $ (Value): string. minLength: 1. */
    "delivery_method_revision_id"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "delivery_rate_callback_id"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "delivery_rate_callback_revision_id"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "delivery_rate_callback_signing_key_id"?: string;
    /**
     * Shape $ (Value): integer string. Exact version of the Location geography to revoke. Required
     * for location_geography targets. Use an integer string (decimal digits), not a floating-point
     * number. Format: int64. minimum: 1.
     */
    "location_geography_version"?: `${bigint}` | bigint;
    /** Shape $ (Value): string. minLength: 1. */
    "location_id"?: string;
    /** Shape $ (Value): string.  Value enum: "delivery_method". */
    "target_type": "delivery_method";
})
    & (({
    /** Shape $ (Value): any.  Value enum: "delivery_method". */
    "target_type": "delivery_method";
    /** Shape $ (Value): string. minLength: 1. */
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
/**
 * Shape $ (Value): {@link RevokeDeliveryDependencyTargetDeliveryMethodRevision}. A typed
 * revocation target. Each target_type accepts only its resource-specific fields.
 */
export type RevokeDeliveryDependencyTargetDeliveryMethodRevision = ({
    /** Shape $ (Value): string. minLength: 1. */
    "delivery_method_id": string;
    /** Shape $ (Value): string. minLength: 1. */
    "delivery_method_revision_id": string;
    /** Shape $ (Value): string. minLength: 1. */
    "delivery_rate_callback_id"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "delivery_rate_callback_revision_id"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "delivery_rate_callback_signing_key_id"?: string;
    /**
     * Shape $ (Value): integer string. Exact version of the Location geography to revoke. Required
     * for location_geography targets. Use an integer string (decimal digits), not a floating-point
     * number. Format: int64. minimum: 1.
     */
    "location_geography_version"?: `${bigint}`;
    /** Shape $ (Value): string. minLength: 1. */
    "location_id"?: string;
    /** Shape $ (Value): string.  Value enum: "delivery_method_revision". */
    "target_type": "delivery_method_revision" | (string & {});
})
    & (({
    /** Shape $ (Value): any.  Value enum: "delivery_method_revision". */
    "target_type": unknown;
    /** Shape $ (Value): string. minLength: 1. */
    "delivery_method_id": string;
    /** Shape $ (Value): string. minLength: 1. */
    "delivery_method_revision_id": string;
}));
/**
 * Shape $ (Value): {@link RevokeDeliveryDependencyTargetDeliveryMethodRevisionInput}. A typed
 * revocation target. Each target_type accepts only its resource-specific fields.
 */
export type RevokeDeliveryDependencyTargetDeliveryMethodRevisionInput = ({
    /** Shape $ (Value): string. minLength: 1. */
    "delivery_method_id": string;
    /** Shape $ (Value): string. minLength: 1. */
    "delivery_method_revision_id": string;
    /** Shape $ (Value): string. minLength: 1. */
    "delivery_rate_callback_id"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "delivery_rate_callback_revision_id"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "delivery_rate_callback_signing_key_id"?: string;
    /**
     * Shape $ (Value): integer string. Exact version of the Location geography to revoke. Required
     * for location_geography targets. Use an integer string (decimal digits), not a floating-point
     * number. Format: int64. minimum: 1.
     */
    "location_geography_version"?: `${bigint}` | bigint;
    /** Shape $ (Value): string. minLength: 1. */
    "location_id"?: string;
    /** Shape $ (Value): string.  Value enum: "delivery_method_revision". */
    "target_type": "delivery_method_revision";
})
    & (({
    /** Shape $ (Value): any.  Value enum: "delivery_method_revision". */
    "target_type": "delivery_method_revision";
    /** Shape $ (Value): string. minLength: 1. */
    "delivery_method_id": string;
    /** Shape $ (Value): string. minLength: 1. */
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
/**
 * Shape $ (Value): {@link RevokeDeliveryDependencyTargetDeliveryRateCallback}. A typed revocation
 * target. Each target_type accepts only its resource-specific fields.
 */
export type RevokeDeliveryDependencyTargetDeliveryRateCallback = ({
    /** Shape $ (Value): string. minLength: 1. */
    "delivery_method_id"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "delivery_method_revision_id"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "delivery_rate_callback_id": string;
    /** Shape $ (Value): string. minLength: 1. */
    "delivery_rate_callback_revision_id"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "delivery_rate_callback_signing_key_id"?: string;
    /**
     * Shape $ (Value): integer string. Exact version of the Location geography to revoke. Required
     * for location_geography targets. Use an integer string (decimal digits), not a floating-point
     * number. Format: int64. minimum: 1.
     */
    "location_geography_version"?: `${bigint}`;
    /** Shape $ (Value): string. minLength: 1. */
    "location_id"?: string;
    /** Shape $ (Value): string.  Value enum: "delivery_rate_callback". */
    "target_type": "delivery_rate_callback" | (string & {});
})
    & (({
    /** Shape $ (Value): any.  Value enum: "delivery_rate_callback". */
    "target_type": unknown;
    /** Shape $ (Value): string. minLength: 1. */
    "delivery_rate_callback_id": string;
}));
/**
 * Shape $ (Value): {@link RevokeDeliveryDependencyTargetDeliveryRateCallbackInput}. A typed
 * revocation target. Each target_type accepts only its resource-specific fields.
 */
export type RevokeDeliveryDependencyTargetDeliveryRateCallbackInput = ({
    /** Shape $ (Value): string. minLength: 1. */
    "delivery_method_id"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "delivery_method_revision_id"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "delivery_rate_callback_id": string;
    /** Shape $ (Value): string. minLength: 1. */
    "delivery_rate_callback_revision_id"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "delivery_rate_callback_signing_key_id"?: string;
    /**
     * Shape $ (Value): integer string. Exact version of the Location geography to revoke. Required
     * for location_geography targets. Use an integer string (decimal digits), not a floating-point
     * number. Format: int64. minimum: 1.
     */
    "location_geography_version"?: `${bigint}` | bigint;
    /** Shape $ (Value): string. minLength: 1. */
    "location_id"?: string;
    /** Shape $ (Value): string.  Value enum: "delivery_rate_callback". */
    "target_type": "delivery_rate_callback";
})
    & (({
    /** Shape $ (Value): any.  Value enum: "delivery_rate_callback". */
    "target_type": "delivery_rate_callback";
    /** Shape $ (Value): string. minLength: 1. */
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
/**
 * Shape $ (Value): {@link RevokeDeliveryDependencyTargetDeliveryRateCallbackRevision}. A typed
 * revocation target. Each target_type accepts only its resource-specific fields.
 */
export type RevokeDeliveryDependencyTargetDeliveryRateCallbackRevision = ({
    /** Shape $ (Value): string. minLength: 1. */
    "delivery_method_id"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "delivery_method_revision_id"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "delivery_rate_callback_id": string;
    /** Shape $ (Value): string. minLength: 1. */
    "delivery_rate_callback_revision_id": string;
    /** Shape $ (Value): string. minLength: 1. */
    "delivery_rate_callback_signing_key_id"?: string;
    /**
     * Shape $ (Value): integer string. Exact version of the Location geography to revoke. Required
     * for location_geography targets. Use an integer string (decimal digits), not a floating-point
     * number. Format: int64. minimum: 1.
     */
    "location_geography_version"?: `${bigint}`;
    /** Shape $ (Value): string. minLength: 1. */
    "location_id"?: string;
    /** Shape $ (Value): string.  Value enum: "delivery_rate_callback_revision". */
    "target_type": "delivery_rate_callback_revision" | (string & {});
})
    & (({
    /** Shape $ (Value): any.  Value enum: "delivery_rate_callback_revision". */
    "target_type": unknown;
    /** Shape $ (Value): string. minLength: 1. */
    "delivery_rate_callback_id": string;
    /** Shape $ (Value): string. minLength: 1. */
    "delivery_rate_callback_revision_id": string;
}));
/**
 * Shape $ (Value): {@link RevokeDeliveryDependencyTargetDeliveryRateCallbackRevisionInput}. A
 * typed revocation target. Each target_type accepts only its resource-specific fields.
 */
export type RevokeDeliveryDependencyTargetDeliveryRateCallbackRevisionInput = ({
    /** Shape $ (Value): string. minLength: 1. */
    "delivery_method_id"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "delivery_method_revision_id"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "delivery_rate_callback_id": string;
    /** Shape $ (Value): string. minLength: 1. */
    "delivery_rate_callback_revision_id": string;
    /** Shape $ (Value): string. minLength: 1. */
    "delivery_rate_callback_signing_key_id"?: string;
    /**
     * Shape $ (Value): integer string. Exact version of the Location geography to revoke. Required
     * for location_geography targets. Use an integer string (decimal digits), not a floating-point
     * number. Format: int64. minimum: 1.
     */
    "location_geography_version"?: `${bigint}` | bigint;
    /** Shape $ (Value): string. minLength: 1. */
    "location_id"?: string;
    /** Shape $ (Value): string.  Value enum: "delivery_rate_callback_revision". */
    "target_type": "delivery_rate_callback_revision";
})
    & (({
    /** Shape $ (Value): any.  Value enum: "delivery_rate_callback_revision". */
    "target_type": "delivery_rate_callback_revision";
    /** Shape $ (Value): string. minLength: 1. */
    "delivery_rate_callback_id": string;
    /** Shape $ (Value): string. minLength: 1. */
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
/**
 * Shape $ (Value): {@link RevokeDeliveryDependencyTargetDeliveryRateCallbackSigningKey}. A typed
 * revocation target. Each target_type accepts only its resource-specific fields.
 */
export type RevokeDeliveryDependencyTargetDeliveryRateCallbackSigningKey = ({
    /** Shape $ (Value): string. minLength: 1. */
    "delivery_method_id"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "delivery_method_revision_id"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "delivery_rate_callback_id"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "delivery_rate_callback_revision_id"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "delivery_rate_callback_signing_key_id": string;
    /**
     * Shape $ (Value): integer string. Exact version of the Location geography to revoke. Required
     * for location_geography targets. Use an integer string (decimal digits), not a floating-point
     * number. Format: int64. minimum: 1.
     */
    "location_geography_version"?: `${bigint}`;
    /** Shape $ (Value): string. minLength: 1. */
    "location_id"?: string;
    /** Shape $ (Value): string.  Value enum: "delivery_rate_callback_signing_key". */
    "target_type": "delivery_rate_callback_signing_key" | (string & {});
})
    & (({
    /** Shape $ (Value): any.  Value enum: "delivery_rate_callback_signing_key". */
    "target_type": unknown;
    /** Shape $ (Value): string. minLength: 1. */
    "delivery_rate_callback_signing_key_id": string;
}));
/**
 * Shape $ (Value): {@link RevokeDeliveryDependencyTargetDeliveryRateCallbackSigningKeyInput}. A
 * typed revocation target. Each target_type accepts only its resource-specific fields.
 */
export type RevokeDeliveryDependencyTargetDeliveryRateCallbackSigningKeyInput = ({
    /** Shape $ (Value): string. minLength: 1. */
    "delivery_method_id"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "delivery_method_revision_id"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "delivery_rate_callback_id"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "delivery_rate_callback_revision_id"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "delivery_rate_callback_signing_key_id": string;
    /**
     * Shape $ (Value): integer string. Exact version of the Location geography to revoke. Required
     * for location_geography targets. Use an integer string (decimal digits), not a floating-point
     * number. Format: int64. minimum: 1.
     */
    "location_geography_version"?: `${bigint}` | bigint;
    /** Shape $ (Value): string. minLength: 1. */
    "location_id"?: string;
    /** Shape $ (Value): string.  Value enum: "delivery_rate_callback_signing_key". */
    "target_type": "delivery_rate_callback_signing_key";
})
    & (({
    /** Shape $ (Value): any.  Value enum: "delivery_rate_callback_signing_key". */
    "target_type": "delivery_rate_callback_signing_key";
    /** Shape $ (Value): string. minLength: 1. */
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
/**
 * Shape $ (Value): {@link RevokeDeliveryDependencyTargetInput}. A typed revocation target. Each
 * target_type accepts only its resource-specific fields.
 */
export type RevokeDeliveryDependencyTargetInput = ({
    /** Shape $ (Value): string. minLength: 1. */
    "delivery_method_id"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "delivery_method_revision_id"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "delivery_rate_callback_id"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "delivery_rate_callback_revision_id"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "delivery_rate_callback_signing_key_id"?: string;
    /**
     * Shape $ (Value): integer string. Exact version of the Location geography to revoke. Required
     * for location_geography targets. Use an integer string (decimal digits), not a floating-point
     * number. Format: int64. minimum: 1.
     */
    "location_geography_version"?: `${bigint}` | bigint;
    /** Shape $ (Value): string. minLength: 1. */
    "location_id"?: string;
    /**
     * Shape $ (Value): string. Value enum: "location_geography",
     * "delivery_rate_callback_signing_key", "delivery_rate_callback",
     * "delivery_rate_callback_revision", "delivery_method", "delivery_method_revision".
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
/**
 * Shape $ (Value): {@link RevokeDeliveryDependencyTargetLocationGeography}. A typed revocation
 * target. Each target_type accepts only its resource-specific fields.
 */
export type RevokeDeliveryDependencyTargetLocationGeography = ({
    /** Shape $ (Value): string. minLength: 1. */
    "delivery_method_id"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "delivery_method_revision_id"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "delivery_rate_callback_id"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "delivery_rate_callback_revision_id"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "delivery_rate_callback_signing_key_id"?: string;
    /**
     * Shape $ (Value): integer string. Exact version of the Location geography to revoke. Required
     * for location_geography targets. Use an integer string (decimal digits), not a floating-point
     * number. Format: int64. minimum: 1.
     */
    "location_geography_version": `${bigint}`;
    /** Shape $ (Value): string. minLength: 1. */
    "location_id": string;
    /** Shape $ (Value): string.  Value enum: "location_geography". */
    "target_type": "location_geography" | (string & {});
})
    & (({
    /** Shape $ (Value): any.  Value enum: "location_geography". */
    "target_type": unknown;
    /** Shape $ (Value): string. minLength: 1. */
    "location_id": string;
    /**
     * Shape $ (Value): integer string. Exact version of the Location geography to revoke. Required
     * for location_geography targets. Use an integer string (decimal digits), not a floating-point
     * number. Format: int64. minimum: 1.
     */
    "location_geography_version": `${bigint}`;
}));
/**
 * Shape $ (Value): {@link RevokeDeliveryDependencyTargetLocationGeographyInput}. A typed
 * revocation target. Each target_type accepts only its resource-specific fields.
 */
export type RevokeDeliveryDependencyTargetLocationGeographyInput = ({
    /** Shape $ (Value): string. minLength: 1. */
    "delivery_method_id"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "delivery_method_revision_id"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "delivery_rate_callback_id"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "delivery_rate_callback_revision_id"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "delivery_rate_callback_signing_key_id"?: string;
    /**
     * Shape $ (Value): integer string. Exact version of the Location geography to revoke. Required
     * for location_geography targets. Use an integer string (decimal digits), not a floating-point
     * number. Format: int64. minimum: 1.
     */
    "location_geography_version": `${bigint}` | bigint;
    /** Shape $ (Value): string. minLength: 1. */
    "location_id": string;
    /** Shape $ (Value): string.  Value enum: "location_geography". */
    "target_type": "location_geography";
})
    & (({
    /** Shape $ (Value): any.  Value enum: "location_geography". */
    "target_type": "location_geography";
    /** Shape $ (Value): string. minLength: 1. */
    "location_id": string;
    /**
     * Shape $ (Value): integer string. Exact version of the Location geography to revoke. Required
     * for location_geography targets. Use an integer string (decimal digits), not a floating-point
     * number. Format: int64. minimum: 1.
     */
    "location_geography_version": `${bigint}` | bigint;
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
 * Shape $ (Value): {@link RiskAttribute}. One attribute a risk rule can test, with its value type,
 * allowed operators, and whether it is currently available.
 */
export type RiskAttribute = {
    /** Shape $ (Value): string.  Value enum: "pre_authorization", "post_authorization". */
    "available_from": "pre_authorization" | "post_authorization" | (string & {});
    /** Shape $ (Value): Array of string. Shape $[] (Value): string. */
    "enum_values"?: Array<string>;
    /** Shape $ (Value): boolean. Whether the attribute can be used in rules in this environment. */
    "is_available": boolean;
    /** Shape $ (Value): boolean. Whether the attribute can be missing from a payment. */
    "is_nullable": boolean;
    /** Shape $ (Value): string.  Value enum: "not_applicable_except_is_missing". */
    "missing_value_behavior": "not_applicable_except_is_missing" | (string & {});
    /** Shape $ (Value): string. */
    "name": string;
    /**
     * Shape $ (Value): Array of string. Operators accepted by this attribute. [] enum: "eq",
     * "neq", "gt", "gte", "lt", "lte", "in", "in_list", "is_missing". Shape $[] (Value): string.
     * Value enum: "eq", "neq", "gt", "gte", "lt", "lte", "in", "in_list", "is_missing".
     */
    "operators": Array<"eq" | "neq" | "gt" | "gte" | "lt" | "lte" | "in" | "in_list" | "is_missing" | (string & {})>;
    /**
     * Shape $ (Value): string. Value enum: "risk_scoring_not_enabled",
     * "ip_geolocation_not_enabled".
     */
    "unavailable_reason"?: "risk_scoring_not_enabled" | "ip_geolocation_not_enabled" | (string & {});
    /**
     * Shape $ (Value): string. Value enum: "money", "currency", "string", "enum", "country",
     * "email", "ip_address", "boolean", "integer".
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
/**
 * Shape $ (Value): {@link RiskAttributeRegistry}. The attributes available to risk rules, in the
 * current environment.
 */
export type RiskAttributeRegistry = {
    /**
     * Shape $ (Value): Array of {@link RiskAttribute}. Shape $[] (Value): {@link RiskAttribute}.
     * One attribute a risk rule can test, with its value type, allowed operators, and whether it
     * is currently available.
     */
    "attributes": Array<RiskAttribute>;
};
/**
 * Shape $ (Value): {@link RiskAttributeRegistryResponse}. A response containing
 * `RiskAttributeRegistry` data.
 */
export type RiskAttributeRegistryResponse = {
    /**
     * Shape $ (Value): {@link RiskAttributeRegistry}. The attributes available to risk rules, in
     * the current environment.
     */
    "data": RiskAttributeRegistry;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Metadata returned with a response: the `api_version`,
     * `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Shape $ (Value): string. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/** Shape $ (Value): {@link RiskList}. A collection of values used in payment risk rules. */
export type RiskList = {
    /** Shape $ (Value): string. */
    "alias": string;
    /** Shape $ (Value): string or null. RFC3339 timestamp. Format: date-time. */
    "archived_at": string | null;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "created_at": string;
    /**
     * Shape $ (Value): {@link ResourceReference} or null. The credential that created this list.
     * Null when Flint created it, as for Flint's default lists. The reference may name an API key
     * in the other mode. Shape $.anyOf[1] (Value): {@link ResourceReference}. A reference to
     * another resource by `resource_type` and `resource_id`. Shape $.anyOf[2] (Value): null.
     */
    "created_by": ((ResourceReference) | (null));
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64.
     */
    "item_count": `${bigint}`;
    /**
     * Shape $ (Value): string. Values are trimmed and compared exactly after item-type
     * normalization for deduplication and membership. card_fingerprint is the 32-character
     * hexadecimal value from PaymentMethod.fingerprint and is lowercased; case_sensitive_string
     * preserves case and Unicode composition. string and email are lowercased, with accents
     * preserved. email requires a bare address. email_domain is lowercased, has one final dot
     * removed, and converts internationalized domains to ASCII. ip_address uses canonical IP form,
     * including IPv4-mapped IPv6 conversion to IPv4. country uses uppercase ISO codes. card_bin
     * preserves 6 through 8 digits, including leading zeros, and matches the full value.
     * customer_id preserves the validated ID. Value enum: "card_fingerprint", "card_bin", "email",
     * "email_domain", "ip_address", "country", "customer_id", "string", "case_sensitive_string".
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
    /** Shape $ (Value): string. */
    "name": string;
    /**
     * Shape $ (Value): string. Whether Flint manages the list or the merchant created it. Value
     * enum: "system_default", "merchant".
     */
    "origin": "system_default" | "merchant" | (string & {});
    /** Shape $ (Value): string. */
    "risk_list_id": string;
    /** Shape $ (Value): string.  Value enum: "active", "archived". */
    "status": "active" | "archived" | (string & {});
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "updated_at": string;
    /**
     * Shape $ (Value): integer string. Version of persisted list configuration and item-count
     * changes. External observations do not advance this counter. Use an integer string (decimal
     * digits), not a floating-point number. Format: uint64. minimum: 1.
     */
    "version": `${bigint}`;
};
/** Shape $ (Value): {@link RiskListItem}. One value in a payment risk list. */
export type RiskListItem = {
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "created_at": string;
    /**
     * Shape $ (Value): {@link ResourceReference} or null. The credential that created this list
     * item. Null when Flint created it. The reference may name an API key in the other mode. Shape
     * $.anyOf[1] (Value): {@link ResourceReference}. A reference to another resource by
     * `resource_type` and `resource_id`. Shape $.anyOf[2] (Value): null.
     */
    "created_by": ((ResourceReference) | (null));
    /** Shape $ (Value): string. */
    "risk_list_id": string;
    /** Shape $ (Value): string. */
    "risk_list_item_id": string;
    /** Shape $ (Value): string. */
    "value": string;
};
/**
 * Shape $ (Value): {@link RiskListItemAddition}. The risk list item matched or created for one
 * requested value, and its creation outcome.
 */
export type RiskListItemAddition = {
    /** Shape $ (Value): string.  Value enum: "created", "existing". */
    "outcome": "created" | "existing" | (string & {});
    /** Shape $ (Value): {@link RiskListItem}. One value in a payment risk list. */
    "risk_list_item": RiskListItem;
};
/** Shape $ (Value): {@link RiskListItemListResponse}. A page of `RiskListItem` objects. */
export type RiskListItemListResponse = {
    /**
     * Shape $ (Value): Array of {@link RiskListItem}. Shape $[] (Value): {@link RiskListItem}. One
     * value in a payment risk list.
     */
    "data": Array<RiskListItem>;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Metadata returned with a response: the `api_version`,
     * `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /** Shape $ (Value): string. */
    "next_page_token"?: string;
    /**
     * Shape $ (Value): string. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/** Shape $ (Value): {@link RiskListItemResponse}. A response containing `RiskListItem` data. */
export type RiskListItemResponse = {
    /** Shape $ (Value): {@link RiskListItem}. One value in a payment risk list. */
    "data": RiskListItem;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Metadata returned with a response: the `api_version`,
     * `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Shape $ (Value): string. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/** Shape $ (Value): {@link RiskListListResponse}. A page of `RiskList` objects. */
export type RiskListListResponse = {
    /**
     * Shape $ (Value): Array of {@link RiskList}. Shape $[] (Value): {@link RiskList}. A
     * collection of values used in payment risk rules.
     */
    "data": Array<RiskList>;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Metadata returned with a response: the `api_version`,
     * `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /** Shape $ (Value): string. */
    "next_page_token"?: string;
    /**
     * Shape $ (Value): string. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/** Shape $ (Value): {@link RiskListResourceResponse}. A response containing `RiskList` data. */
export type RiskListResourceResponse = {
    /** Shape $ (Value): {@link RiskList}. A collection of values used in payment risk rules. */
    "data": RiskList;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Metadata returned with a response: the `api_version`,
     * `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Shape $ (Value): string. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
export type RiskListsAddItemsInput = {
    /** Shape $ (Value): string. */
    "risk_list_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link AddRiskListItemsRequestInput}. Values to add to the risk list.
     * Values are trimmed and compared exactly after item-type normalization for deduplication and
     * membership. card_fingerprint is the 32-character hexadecimal value from
     * PaymentMethod.fingerprint and is lowercased; case_sensitive_string preserves case and
     * Unicode composition. string and email are lowercased, with accents preserved. email requires
     * a bare address. email_domain is lowercased, has one final dot removed, and converts
     * internationalized domains to ASCII. ip_address uses canonical IP form, including IPv4-mapped
     * IPv6 conversion to IPv4. country uses uppercase ISO codes. card_bin preserves 6 through 8
     * digits, including leading zeros, and matches the full value. customer_id preserves the
     * validated ID.
     */
    "body": InputValue<AddRiskListItemsRequestInput>;
};
export type RiskListsCreateInput = {
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link CreateRiskListRequestInput}. The request body for: Create a risk
     * list.
     */
    "body": InputValue<CreateRiskListRequestInput>;
};
