import type { MoneyValue, MoneyValueInput } from './types-31.js';
import type {
    ReturnReplacementLineItem,
    ReturnResolutionAdjustment,
    ReturnResolutionLineItem,
    ReturnLineItem,
    ReturnPolicyEvaluation,
    ReturnReceipt,
    ReturnResolution
} from './types-41.js';
import type { InputValue } from '../runtime.js';
import type { CancelReturnResolutionRequestInput, CancelReturnLineItemRequestInput } from './types-3.js';
import type { ConfirmReturnResolutionRequestInput } from './types-5.js';
import type { MeCreateReturnResolutionCheckoutSessionInput, MeCancelReturnInput } from './types-29.js';
import type { ReleaseReturnResolutionRequestInput, ReopenReturnRequestInput } from './types-39.js';
import type {
    RetryReturnResolutionRequestInput,
    ReturnActor,
    ReturnCompletionBlocker,
    ReturnDisposition,
    ReturnFinancialSummary,
    ReturnHandoffRequirement,
    ReturnInspection
} from './types-40.js';
import type {
    UpdateReturnResolutionRequestInput,
    UpdateReturnRequestInput,
    UpdateReturnLineItemRequestInput,
    WaiveReturnLineInspectionRequestInput
} from './types-49.js';
import type { BuyerAction } from './types-1.js';
import type { ExpandedCustomerSummary, ExpandedOrderSummary, ExpandedShipmentSummary } from './types-16.js';
import type { AddReturnLineItemRequestInput } from './types-0.js';
import type { CompleteReturnRequestInput } from './types-4.js';
import type {
    CreateReturnDispositionRequestInput,
    CreateReturnRequestInput,
    CreateReturnInspectionRequestInput,
    CreateReturnReceiptRequestInput,
    CreateReturnResolutionRequestInput
} from './types-8.js';
import type { DecideReturnRequestInput, DeclinePaymentReviewRequestInput } from './types-11.js';
import type { ProcessExistingReturnRequestInput } from './types-37.js';
import type {
    RevokeDeliveryDependencyTargetLocationGeography,
    RevokeDeliveryDependencyTargetLocationGeographyInput
} from './types-43.js';
/**
 * Shape $ (Value): {@link ReturnResolutionLineItemRequestInput}. A return line and quantity to
 * include in a return resolution.
 */
export type ReturnResolutionLineItemRequestInput = {
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "quantity": `${bigint}` | bigint;
    /** Shape $ (Value): string. minLength: 1. */
    "return_line_item_id": string;
};
/**
 * Shape $ (Value): {@link ReturnResolutionPreview}. A preview of a return resolution before it is
 * created: returned and replacement totals, adjustments, and amounts due to or from the buyer.
 */
export type ReturnResolutionPreview = {
    /**
     * Shape $ (Value): Array of {@link ReturnResolutionAdjustment}. Shape $[] (Value): {@link
     * ReturnResolutionAdjustment}. A fee or credit applied to a return resolution, such as a
     * restocking fee, with the assessed and applied amounts and any waiver.
     */
    "adjustments": Array<ReturnResolutionAdjustment>;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 0.
     */
    "based_on_return_version": `${bigint}`;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "buyer_payment_amount_money": MoneyValue;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "buyer_refund_amount_money": MoneyValue;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "calculated_at": string;
    /** Shape $ (Value): string. */
    "corrects_return_resolution_id"?: string;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "credit_money": MoneyValue;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "deduction_money": MoneyValue;
    /**
     * Shape $ (Value): Array of {@link ReturnResolutionLineItem}. Shape $[] (Value): {@link
     * ReturnResolutionLineItem}. A return line included in a resolution, with its quantity and
     * returned total.
     */
    "line_items": Array<ReturnResolutionLineItem>;
    /**
     * Shape $ (Value): Array of {@link ReturnReplacementLineItem}. Shape $[] (Value): {@link
     * ReturnReplacementLineItem}. A replacement item added to a return resolution, with its
     * quantity and price totals.
     */
    "replacement_line_items": Array<ReturnReplacementLineItem>;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "replacement_total_money": MoneyValue;
    /**
     * Shape $ (Value): string. Value enum: "refund", "exchange", "replacement", "store_credit",
     * "no_monetary_action", "correction".
     */
    "resolution_type": "refund"
        | "exchange"
        | "replacement"
        | "store_credit"
        | "no_monetary_action"
        | "correction"
        | (string & {});
    /** Shape $ (Value): string. */
    "return_id": string;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "returned_total_money": MoneyValue;
};
export type ReturnResolutionsCancelInput = {
    /** Shape $ (Value): string. */
    "return_resolution_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link CancelReturnResolutionRequestInput}. The request body for: Cancel
     * return resolution.
     */
    "body": InputValue<CancelReturnResolutionRequestInput>;
};
export type ReturnResolutionsConfirmInput = {
    /** Shape $ (Value): string. */
    "return_resolution_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link ConfirmReturnResolutionRequestInput}. The request body for: Confirm
     * return resolution.
     */
    "body": InputValue<ConfirmReturnResolutionRequestInput>;
};
export type ReturnResolutionsGetInput = {
    /** Shape $ (Value): string. */
    "return_resolution_id": InputValue<string>;
    /**
     * Shape $ (Value): Array of string. [] enum: "payment_intents", "refunds",
     * "replacement_order". Shape $[] (Value): string. Value enum: "payment_intents", "refunds",
     * "replacement_order".
     */
    "expand"?: InputValue<Array<"payment_intents" | "refunds" | "replacement_order">>;
};
export type ReturnResolutionsGetOrCreateCheckoutSessionInput = MeCreateReturnResolutionCheckoutSessionInput;
export type ReturnResolutionsListInput = {
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "buyer", "merchant", "integration".
     * Shape $[] (Value): string. Value enum: "buyer", "merchant", "integration".
     */
    "action_required_by"?: InputValue<Array<"buyer" | "merchant" | "integration">>;
    /** Shape $ (Value): string. */
    "corrects_return_resolution_id"?: InputValue<string>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "external_reference_id"?: InputValue<string>;
    /** Shape $ (Value): integer. Format: int32. minimum: 1. maximum: 100. Default: 20. */
    "page_size"?: InputValue<number>;
    /** Shape $ (Value): string. */
    "page_token"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "query"?: InputValue<string>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "refund", "exchange", "replacement",
     * "store_credit", "no_monetary_action", "correction". Shape $[] (Value): string. Value enum:
     * "refund", "exchange", "replacement", "store_credit", "no_monetary_action", "correction".
     */
    "resolution_type"?: InputValue<Array<"refund" | "exchange" | "replacement" | "store_credit" | "no_monetary_action" | "correction">>;
    /** Shape $ (Value): string. */
    "return_id"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "return_line_item_id"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "return_policy_revision_id"?: InputValue<string>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "proposed", "pending",
     * "requires_action", "fulfilled", "failed", "canceled". Shape $[] (Value): string. Value enum:
     * "proposed", "pending", "requires_action", "fulfilled", "failed", "canceled".
     */
    "status"?: InputValue<Array<"proposed" | "pending" | "requires_action" | "fulfilled" | "failed" | "canceled">>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_after"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_before"?: InputValue<string | globalThis.Date>;
    /**
     * Shape $ (Value): Array of string. [] enum: "replacement_order". Shape $[] (Value): string.
     * Value enum: "replacement_order".
     */
    "expand"?: InputValue<Array<"replacement_order">>;
};
export type ReturnResolutionsReleaseInput = {
    /** Shape $ (Value): string. */
    "return_resolution_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link ReleaseReturnResolutionRequestInput}. The request body for: Release
     * return resolution.
     */
    "body": InputValue<ReleaseReturnResolutionRequestInput>;
};
export type ReturnResolutionsRetryInput = {
    /** Shape $ (Value): string. */
    "return_resolution_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link RetryReturnResolutionRequestInput}. The request body for: Retry
     * return resolution.
     */
    "body": InputValue<RetryReturnResolutionRequestInput>;
};
export type ReturnResolutionsUpdateInput = {
    /** Shape $ (Value): string. */
    "return_resolution_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link UpdateReturnResolutionRequestInput}. The request body for: Update
     * return resolution.
     */
    "body": InputValue<UpdateReturnResolutionRequestInput>;
};
/** Shape $ (Value): {@link ReturnResource}. A request to send purchased items back. */
export type ReturnResource = {
    /**
     * Shape $ (Value): Array of {@link BuyerAction}. What the buyer can do with the return, in
     * this order: withdraw, ship_items, then pay_balance. A buyer's read or change through a
     * customer session on /v1/me, or in Flint's buyer account, lists all three every time;
     * merchant reads and webhooks get an empty list. ship_items is required while
     * handoff_requirements is not empty, due by the earliest expires_at there. pay_balance is
     * required while a resolution waits for the buyer's payment. Example: []. Shape $[] (Value):
     * {@link BuyerAction}. One thing a buyer can do with an order, subscription, invoice or return
     * they read through /v1/me. Show the actions with is_required as what needs the buyer's
     * attention, and the first available action as the primary action on the resource's page in
     * your account.
     */
    "buyer_actions": Array<BuyerAction>;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "canceled_at"?: string;
    /**
     * Shape $ (Value): {@link ReturnActor}. Who performed a return action: a buyer, merchant,
     * integration, or the system, with an optional ID.
     */
    "canceled_by"?: ReturnActor;
    /**
     * Shape $ (Value): string. Value enum: "buyer_request", "merchant_request", "duplicate",
     * "expired", "created_in_error", "other".
     */
    "cancellation_reason"?: "buyer_request"
        | "merchant_request"
        | "duplicate"
        | "expired"
        | "created_in_error"
        | "other"
        | (string & {});
    /** Shape $ (Value): string. */
    "cancellation_reason_message"?: string;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "completed_at"?: string;
    /**
     * Shape $ (Value): {@link ReturnActor}. Who performed a return action: a buyer, merchant,
     * integration, or the system, with an optional ID.
     */
    "completed_by"?: ReturnActor;
    /**
     * Shape $ (Value): Array of {@link ReturnCompletionBlocker}. Shape $[] (Value): {@link
     * ReturnCompletionBlocker}. Something still owed before a return can complete, with the return
     * line or record it concerns.
     */
    "completion_blockers": Array<ReturnCompletionBlocker>;
    /**
     * Shape $ (Value): string. automatic completes the Return when the last completion blocker
     * clears; manual waits for POST /v1/returns/{return_id}/complete. Reopening a Return sets it
     * to manual. Value enum: "manual", "automatic".
     */
    "completion_mode"?: "manual" | "automatic" | (string & {});
    /** Shape $ (Value): string.  Value enum: "manual_completion", "exception_waived", "other". */
    "completion_reason"?: "manual_completion" | "exception_waived" | "other" | (string & {});
    /** Shape $ (Value): string. */
    "completion_reason_message"?: string;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "created_at": string;
    /**
     * Shape $ (Value): {@link ExpandedCustomerSummary} or null. Shape $.anyOf[1] (Value): {@link
     * ExpandedCustomerSummary}. A customer's summary fields, returned in place of a customer ID
     * when the customer is expanded. Shape $.anyOf[2] (Value): null.
     */
    "customer"?: ((ExpandedCustomerSummary) | (null));
    /** Shape $ (Value): string. */
    "customer_id"?: string;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "decision_at"?: string;
    /**
     * Shape $ (Value): string. Value enum: "pending", "approved", "partially_approved",
     * "declined".
     */
    "decision_status": "pending" | "approved" | "partially_approved" | "declined" | (string & {});
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): {@link ReturnFinancialSummary}. The money for a return: returned value,
     * deductions, credits, replacement total, and amounts due to or from the buyer.
     */
    "financial_summary": ReturnFinancialSummary;
    /**
     * Shape $ (Value): Array of {@link ReturnHandoffRequirement}. Shape $[] (Value): {@link
     * ReturnHandoffRequirement}. What the buyer must do to hand merchandise back: the destination,
     * instructions, line items, and expiry.
     */
    "handoff_requirements": Array<ReturnHandoffRequirement>;
    /**
     * Shape $ (Value): string. Who created the Return, from the credential that sent the request:
     * buyer for a customer session on /v1/me or Flint's hosted account, merchant for a Dashboard
     * user, integration for an API key or partner app. It cannot be sent. Value enum: "buyer",
     * "merchant", "integration".
     */
    "initiated_by": "buyer" | "merchant" | "integration" | (string & {});
    /**
     * Shape $ (Value): Array of {@link ReturnLineItem}. Shape $[] (Value): {@link ReturnLineItem}.
     * An item included in a return request.
     */
    "line_items": Array<ReturnLineItem>;
    /**
     * Shape $ (Value): string. On the Return, the least-finished line's value. Value enum:
     * "not_required", "awaiting_handoff", "in_transit", "partially_received",
     * "inspection_required", "partially_inspected", "inspection_review_required",
     * "disposition_required", "resolved", "exception".
     */
    "merchandise_status": "not_required"
        | "awaiting_handoff"
        | "in_transit"
        | "partially_received"
        | "inspection_required"
        | "partially_inspected"
        | "inspection_review_required"
        | "disposition_required"
        | "resolved"
        | "exception"
        | (string & {});
    /** Shape $ (Value): Map of string. Shape $.* (Value): string. */
    "metadata": Record<string, string>;
    /**
     * Shape $ (Value): {@link ExpandedOrderSummary} or null. Shape $.anyOf[1] (Value): {@link
     * ExpandedOrderSummary}. An order's summary fields, including status, payment and refund
     * status, and pricing and settlement amounts, returned when the order is expanded. Shape
     * $.anyOf[2] (Value): null.
     */
    "order"?: ((ExpandedOrderSummary) | (null));
    /** Shape $ (Value): string. */
    "order_id": string;
    /**
     * Shape $ (Value): {@link ReturnPolicyEvaluation}. How a return policy evaluated a return
     * request: overall status and reason, the policy revision used, and per-line results.
     */
    "policy_evaluation"?: ReturnPolicyEvaluation;
    /**
     * Shape $ (Value): string. Value enum: "not_selected", "pending", "partially_fulfilled",
     * "requires_action", "fulfilled", "failed".
     */
    "resolution_status": "not_selected"
        | "pending"
        | "partially_fulfilled"
        | "requires_action"
        | "fulfilled"
        | "failed"
        | (string & {});
    /**
     * Shape $ (Value): Array of string. IDs of every disposition recorded for this Return, oldest
     * first, including failed and canceled dispositions. Expand `return_dispositions` on `GET
     * /v1/returns/{return_id}` to read them inline. Shape $[] (Value): string.
     */
    "return_disposition_ids": Array<string>;
    /**
     * Shape $ (Value): Array of {@link ReturnDisposition}. Shape $[] (Value): {@link
     * ReturnDisposition}. A decision about how returned merchandise will be handled.
     */
    "return_dispositions"?: Array<ReturnDisposition>;
    /** Shape $ (Value): string. */
    "return_id": string;
    /**
     * Shape $ (Value): Array of string. IDs of every inspection recorded for this Return, oldest
     * first, including superseded inspections. Expand `return_inspections` on `GET
     * /v1/returns/{return_id}` to read them inline. Shape $[] (Value): string.
     */
    "return_inspection_ids": Array<string>;
    /**
     * Shape $ (Value): Array of {@link ReturnInspection}. Shape $[] (Value): {@link
     * ReturnInspection}. An assessment of the condition of returned items.
     */
    "return_inspections"?: Array<ReturnInspection>;
    /** Shape $ (Value): string. */
    "return_number": string;
    /**
     * Shape $ (Value): Array of string. IDs of every receipt recorded for this Return, oldest
     * first, including superseded receipts. Expand `return_receipts` on `GET
     * /v1/returns/{return_id}` to read them inline. Shape $[] (Value): string.
     */
    "return_receipt_ids": Array<string>;
    /**
     * Shape $ (Value): Array of {@link ReturnReceipt}. Shape $[] (Value): {@link ReturnReceipt}. A
     * record of returned items arriving at a location.
     */
    "return_receipts"?: Array<ReturnReceipt>;
    /**
     * Shape $ (Value): Array of string. IDs of every resolution created for this Return, oldest
     * first, including failed and canceled resolutions. Expand `return_resolutions` on `GET
     * /v1/returns/{return_id}` to read them inline. Shape $[] (Value): string.
     */
    "return_resolution_ids": Array<string>;
    /**
     * Shape $ (Value): Array of {@link ReturnResolution}. Shape $[] (Value): {@link
     * ReturnResolution}. The refund, exchange, or other outcome of a return.
     */
    "return_resolutions"?: Array<ReturnResolution>;
    /**
     * Shape $ (Value): Array of string. IDs of every shipment raised to send this Return's items
     * back, oldest first, including voided shipments. Expand `shipments` on `GET
     * /v1/returns/{return_id}` to read them inline. Shape $[] (Value): string.
     */
    "shipment_ids": Array<string>;
    /**
     * Shape $ (Value): Array of {@link ExpandedShipmentSummary}. Shape $[] (Value): {@link
     * ExpandedShipmentSummary}. A shipment's summary fields, including direction, status, and
     * package count, returned when the shipment is expanded.
     */
    "shipments"?: Array<ExpandedShipmentSummary>;
    /**
     * Shape $ (Value): string. Value enum: "requested", "open", "completed", "declined",
     * "canceled".
     */
    "status": "requested" | "open" | "completed" | "declined" | "canceled" | (string & {});
    /**
     * Shape $ (Value): Array of string. [] enum: "cancel", "complete", "decide", "reopen". Shape
     * $[] (Value): string. Value enum: "cancel", "complete", "decide", "reopen".
     */
    "supported_actions": Array<"cancel" | "complete" | "decide" | "reopen" | (string & {})>;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "updated_at": string;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 0.
     */
    "version": `${bigint}`;
};
/**
 * Shape $ (Value): {@link ReturnRestockingFeePolicy}. A restocking fee in a return policy, charged
 * as a flat amount or a percent.
 */
export type ReturnRestockingFeePolicy = {
    /** Shape $ (Value): string.  Value enum: "flat", "percent". */
    "calculation_type": "flat" | "percent" | (string & {});
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "flat_money"?: MoneyValue;
    /** Shape $ (Value): number. Format: double. multipleOf: 0.0001. */
    "percent"?: number;
};
/**
 * Shape $ (Value): {@link ReturnRestockingFeePolicyInput}. A restocking fee in a return policy,
 * charged as a flat amount or a percent.
 */
export type ReturnRestockingFeePolicyInput = {
    /** Shape $ (Value): string.  Value enum: "flat", "percent". */
    "calculation_type": "flat" | "percent";
    /**
     * Shape $ (Value): {@link MoneyValueInput}. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "flat_money"?: MoneyValueInput;
    /** Shape $ (Value): number. Format: double. multipleOf: 0.0001. */
    "percent"?: number;
};
/**
 * Shape $ (Value): {@link ReturnShipmentLineItemAllocationInput}. A return line and the quantity
 * placed in a return shipment or package.
 */
export type ReturnShipmentLineItemAllocationInput = {
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "quantity": `${bigint}` | bigint;
    /**
     * Shape $ (Value): string. Return line whose quantity is allocated to the shipment or package.
     * minLength: 1.
     */
    "return_line_item_id": string;
};
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
