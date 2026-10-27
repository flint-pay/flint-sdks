import type { InputValue } from '../runtime.js';
import type { FeedbackReportsListInput } from './types-17.js';
import type { InvoicesListDeliveryAttemptsInput } from './types-28.js';
import type { PauseSubscriptionRequestInput } from './types-35.js';
import type { ResourceVersionRequestInput, ResponseMeta } from './types-40.js';
import type { RenewSubscriptionRequestInput, ReadinessAxis, ReadinessRequirements } from './types-39.js';
import type { MeCreateDeletionRequestInput } from './types-29.js';
import type { SaveMeGiftCardRequestInput, SaveMePaymentMethodRequestInput } from './types-43.js';
import type { SetDefaultCustomerAddressRequestInput, SkipMeSubscriptionCycleRequestInput } from './types-44.js';
import type { UpdateCustomerAddressRequestInput, UpdateCustomerEmailPreferencesRequestInput } from './types-47.js';
import type { UpdateMeRequestInput, UpdateMeSubscriptionRequestInput, UpdateMeSubscriptionLineItemRequestInput } from './types-48.js';
import type { Address } from './types-0.js';
import type { ExpandedOrganizationSummary, DisputeResponseSessionStripeAccountSession } from './types-16.js';
import type { ImageAttachment } from './types-19.js';
import type { MoneyValue } from './types-31.js';
import type { CapabilityReadiness } from './types-3.js';
export type MeListAddressesInput = FeedbackReportsListInput;
export type MeListCreditNotesInput = InvoicesListDeliveryAttemptsInput;
export type MeListDeletionRequestsInput = {
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "pending_review", "processing",
     * "completed", "rejected", "failed". Shape $[] (Value): string. Value enum: "pending_review",
     * "processing", "completed", "rejected", "failed".
     */
    "status"?: InputValue<Array<"pending_review" | "processing" | "completed" | "rejected" | "failed">>;
    /** Shape $ (Value): integer. minimum: 1. maximum: 100. Default: 20. */
    "page_size"?: InputValue<number>;
    /** Shape $ (Value): string. */
    "page_token"?: InputValue<string>;
};
export type MeListFlintWalletPaymentMethodsInput = {};
export type MeListFulfillmentEventsInput = {
    /** Shape $ (Value): string. */
    "order_id": InputValue<string>;
    /** Shape $ (Value): string. */
    "fulfillment_id"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "shipment_id"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "package_id"?: InputValue<string>;
    /** Shape $ (Value): integer. minimum: 1. maximum: 100. Default: 20. */
    "page_size"?: InputValue<number>;
    /** Shape $ (Value): string. */
    "page_token"?: InputValue<string>;
};
export type MeListFulfillmentsInput = {
    /** Shape $ (Value): integer. minimum: 1. maximum: 100. Default: 20. */
    "page_size"?: InputValue<number>;
    /** Shape $ (Value): string. */
    "page_token"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "order_id"?: InputValue<string>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "pending", "in_progress", "ready",
     * "completed", "canceled", "failed", "scheduled", "accepted", "preparing", "picked", "packed",
     * "dispatched", "no_show". Shape $[] (Value): string. Value enum: "pending", "in_progress",
     * "ready", "completed", "canceled", "failed", "scheduled", "accepted", "preparing", "picked",
     * "packed", "dispatched", "no_show".
     */
    "status"?: InputValue<Array<"pending"
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
        | "no_show">>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "shipment", "pickup",
     * "local_delivery", "digital", "service". Shape $[] (Value): string. Value enum: "shipment",
     * "pickup", "local_delivery", "digital", "service".
     */
    "type"?: InputValue<Array<"shipment" | "pickup" | "local_delivery" | "digital" | "service">>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_after"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_before"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Default: "desc". Value enum: "asc", "desc". */
    "sort_direction"?: InputValue<"asc" | "desc">;
};
export type MeListGiftCardTransactionsInput = {
    /** Shape $ (Value): string. */
    "gift_card_id": InputValue<string>;
    /** Shape $ (Value): integer. minimum: 1. maximum: 100. Default: 20. */
    "page_size"?: InputValue<number>;
    /** Shape $ (Value): string. */
    "page_token"?: InputValue<string>;
};
export type MeListGiftCardsInput = FeedbackReportsListInput;
export type MeListInvoicesInput = {
    /** Shape $ (Value): integer. minimum: 1. maximum: 100. Default: 20. */
    "page_size"?: InputValue<number>;
    /** Shape $ (Value): string. */
    "page_token"?: InputValue<string>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "open", "partially_paid", "paid",
     * "void", "uncollectible", "credited". Shape $[] (Value): string. Value enum: "open",
     * "partially_paid", "paid", "void", "uncollectible", "credited".
     */
    "status"?: InputValue<Array<"open" | "partially_paid" | "paid" | "void" | "uncollectible" | "credited">>;
    /** Shape $ (Value): string. */
    "order_id"?: InputValue<string>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "due_after"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "due_before"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): boolean. */
    "is_overdue"?: InputValue<boolean>;
    /** Shape $ (Value): boolean. */
    "has_outstanding_balance"?: InputValue<boolean>;
    /**
     * Shape $ (Value): string. Default: "created_at". Value enum: "created_at", "updated_at",
     * "due_at", "invoice_number", "outstanding_money".
     */
    "sort_by"?: InputValue<"created_at" | "updated_at" | "due_at" | "invoice_number" | "outstanding_money">;
    /** Shape $ (Value): string. Default: "desc". Value enum: "asc", "desc". */
    "sort_direction"?: InputValue<"asc" | "desc">;
};
export type MeListOrderActivitiesInput = {
    /** Shape $ (Value): string. */
    "order_id": InputValue<string>;
    /** Shape $ (Value): integer. minimum: 1. maximum: 100. Default: 20. */
    "page_size"?: InputValue<number>;
    /** Shape $ (Value): string. */
    "page_token"?: InputValue<string>;
    /** Shape $ (Value): string. Default: "desc". Value enum: "asc", "desc". */
    "sort_direction"?: InputValue<"asc" | "desc">;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "created", "line_item_added",
     * "line_item_updated", "line_item_removed", "discount_applied", "discount_removed",
     * "tax_updated", "requested_tip_added", "requested_tip_updated", "requested_tip_removed",
     * "charge_added", "charge_updated", "charge_removed", "charge_fulfillment_updated",
     * "order_updated", "adjustment", "closed", "payment", "payment_failed", "refund",
     * "refund_failed", "checkout_session_created", "checkout_session_expired",
     * "checkout_session_invalidated", "fulfillment_created", "fulfillment_updated",
     * "fulfillment_state_changed". Shape $[] (Value): string. Value enum: "created",
     * "line_item_added", "line_item_updated", "line_item_removed", "discount_applied",
     * "discount_removed", "tax_updated", "requested_tip_added", "requested_tip_updated",
     * "requested_tip_removed", "charge_added", "charge_updated", "charge_removed",
     * "charge_fulfillment_updated", "order_updated", "adjustment", "closed", "payment",
     * "payment_failed", "refund", "refund_failed", "checkout_session_created",
     * "checkout_session_expired", "checkout_session_invalidated", "fulfillment_created",
     * "fulfillment_updated", "fulfillment_state_changed".
     */
    "activity_type"?: InputValue<Array<"created"
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
        | "fulfillment_state_changed">>;
};
export type MeListOrdersInput = {
    /** Shape $ (Value): integer. minimum: 1. maximum: 100. Default: 20. */
    "page_size"?: InputValue<number>;
    /** Shape $ (Value): string. */
    "page_token"?: InputValue<string>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "paid", "closed_by_merchant",
     * "checkout_expired", "written_off", "superseded", "return_resolution_canceled", "other".
     * Shape $[] (Value): string. Value enum: "paid", "closed_by_merchant", "checkout_expired",
     * "written_off", "superseded", "return_resolution_canceled", "other".
     */
    "closed_reason"?: InputValue<Array<"paid"
        | "closed_by_merchant"
        | "checkout_expired"
        | "written_off"
        | "superseded"
        | "return_resolution_canceled"
        | "other">>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "open", "closed". Shape $[] (Value):
     * string. Value enum: "open", "closed".
     */
    "status"?: InputValue<Array<"open" | "closed">>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "unpaid", "partially_paid", "paid".
     * Shape $[] (Value): string. Value enum: "unpaid", "partially_paid", "paid".
     */
    "payment_status"?: InputValue<Array<"unpaid" | "partially_paid" | "paid">>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "none", "partially_refunded",
     * "refunded". Shape $[] (Value): string. Value enum: "none", "partially_refunded", "refunded".
     */
    "refund_status"?: InputValue<Array<"none" | "partially_refunded" | "refunded">>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "not_fulfilled",
     * "partially_fulfilled", "fulfilled", "canceled", "not_applicable", "closed". Shape $[]
     * (Value): string. Value enum: "not_fulfilled", "partially_fulfilled", "fulfilled",
     * "canceled", "not_applicable", "closed".
     */
    "fulfillment_status"?: InputValue<Array<"not_fulfilled" | "partially_fulfilled" | "fulfilled" | "canceled" | "not_applicable" | "closed">>;
    /** Shape $ (Value): string. */
    "order_number"?: InputValue<string>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "virtual_terminal", "payment_link",
     * "checkout", "api", "subscription". Shape $[] (Value): string. Value enum:
     * "virtual_terminal", "payment_link", "checkout", "api", "subscription".
     */
    "origin"?: InputValue<Array<"virtual_terminal" | "payment_link" | "checkout" | "api" | "subscription">>;
    /** Shape $ (Value): string. */
    "query"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "subscription_id"?: InputValue<string>;
    /** Shape $ (Value): boolean. */
    "subscription_delivery_changed"?: InputValue<boolean>;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 1. Example: "500".
     */
    "min_amount"?: InputValue<`${bigint}` | bigint>;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 1. Example: "500".
     */
    "max_amount"?: InputValue<`${bigint}` | bigint>;
    /**
     * Shape $ (Value): string. ISO 4217 currency code. minLength: 3. maxLength: 3. pattern:
     * ^[A-Z]{3}$. Example: "USD".
     */
    "currency"?: InputValue<string>;
    /**
     * Shape $ (Value): string. Default: "created_at". Value enum: "created_at", "updated_at",
     * "settlement_amounts.outstanding_money", "pricing_amounts.total_money".
     */
    "sort_by"?: InputValue<"created_at" | "updated_at" | "settlement_amounts.outstanding_money" | "pricing_amounts.total_money">;
    /** Shape $ (Value): string. Default: "desc". Value enum: "asc", "desc". */
    "sort_direction"?: InputValue<"asc" | "desc">;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_after"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_before"?: InputValue<string | globalThis.Date>;
};
export type MeListPackagesInput = {
    /** Shape $ (Value): string. */
    "shipment_id"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "fulfillment_id"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "order_id"?: InputValue<string>;
    /** Shape $ (Value): integer. minimum: 1. maximum: 100. Default: 20. */
    "page_size"?: InputValue<number>;
    /** Shape $ (Value): string. */
    "page_token"?: InputValue<string>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
};
export type MeListPaymentMethodsInput = {
    /** Shape $ (Value): integer. minimum: 1. maximum: 100. Default: 20. */
    "page_size"?: InputValue<number>;
    /** Shape $ (Value): string. */
    "page_token"?: InputValue<string>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "card". Shape $[] (Value): string.
     * Value enum: "card".
     */
    "type"?: InputValue<Array<"card">>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "active", "pending", "expired",
     * "archived", "failed". Shape $[] (Value): string. Value enum: "active", "pending", "expired",
     * "archived", "failed".
     */
    "status"?: InputValue<Array<"active" | "pending" | "expired" | "archived" | "failed">>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "on_session", "off_session". Shape
     * $[] (Value): string. Value enum: "on_session", "off_session".
     */
    "usage"?: InputValue<Array<"on_session" | "off_session">>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
};
export type MeListPaymentsInput = {
    /** Shape $ (Value): integer. minimum: 1. maximum: 100. Default: 20. */
    "page_size"?: InputValue<number>;
    /** Shape $ (Value): string. */
    "page_token"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "order_id"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "invoice_id"?: InputValue<string>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "requires_payment_method",
     * "requires_confirmation", "requires_action", "processing", "requires_capture", "canceled",
     * "succeeded", "expired". Shape $[] (Value): string. Value enum: "requires_payment_method",
     * "requires_confirmation", "requires_action", "processing", "requires_capture", "canceled",
     * "succeeded", "expired".
     */
    "status"?: InputValue<Array<"requires_payment_method"
        | "requires_confirmation"
        | "requires_action"
        | "processing"
        | "requires_capture"
        | "canceled"
        | "succeeded"
        | "expired">>;
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
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 1. Example: "500".
     */
    "min_amount"?: InputValue<`${bigint}` | bigint>;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 1. Example: "500".
     */
    "max_amount"?: InputValue<`${bigint}` | bigint>;
    /**
     * Shape $ (Value): string. ISO 4217 currency code. minLength: 3. maxLength: 3. pattern:
     * ^[A-Z]{3}$. Example: "USD".
     */
    "currency"?: InputValue<string>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "none", "partially_refunded",
     * "refunded". Shape $[] (Value): string. Value enum: "none", "partially_refunded", "refunded".
     */
    "refund_status"?: InputValue<Array<"none" | "partially_refunded" | "refunded">>;
    /**
     * Shape $ (Value): string. Default: "created_at". Value enum: "created_at", "updated_at",
     * "amount_money".
     */
    "sort_by"?: InputValue<"created_at" | "updated_at" | "amount_money">;
    /** Shape $ (Value): string. Default: "desc". Value enum: "asc", "desc". */
    "sort_direction"?: InputValue<"asc" | "desc">;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_after"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_before"?: InputValue<string | globalThis.Date>;
};
export type MeListRefundsInput = {
    /** Shape $ (Value): integer. minimum: 1. maximum: 100. Default: 20. */
    "page_size"?: InputValue<number>;
    /** Shape $ (Value): string. */
    "page_token"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "order_id"?: InputValue<string>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "pending", "succeeded",
     * "partially_succeeded", "failed". Shape $[] (Value): string. Value enum: "pending",
     * "succeeded", "partially_succeeded", "failed".
     */
    "status"?: InputValue<Array<"pending" | "succeeded" | "partially_succeeded" | "failed">>;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 1. Example: "500".
     */
    "min_amount"?: InputValue<`${bigint}` | bigint>;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 1. Example: "500".
     */
    "max_amount"?: InputValue<`${bigint}` | bigint>;
    /**
     * Shape $ (Value): string. ISO 4217 currency code. minLength: 3. maxLength: 3. pattern:
     * ^[A-Z]{3}$. Example: "USD".
     */
    "currency"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "return_id"?: InputValue<string>;
    /**
     * Shape $ (Value): string. Default: "created_at". Value enum: "created_at", "updated_at",
     * "amount_money".
     */
    "sort_by"?: InputValue<"created_at" | "updated_at" | "amount_money">;
    /** Shape $ (Value): string. Default: "desc". Value enum: "asc", "desc". */
    "sort_direction"?: InputValue<"asc" | "desc">;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_after"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_before"?: InputValue<string | globalThis.Date>;
};
export type MeListReturnsInput = {
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "pending", "approved",
     * "partially_approved", "declined". Shape $[] (Value): string. Value enum: "pending",
     * "approved", "partially_approved", "declined".
     */
    "decision_status"?: InputValue<Array<"pending" | "approved" | "partially_approved" | "declined">>;
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
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "not_selected", "pending",
     * "partially_fulfilled", "requires_action", "fulfilled", "failed". Shape $[] (Value): string.
     * Value enum: "not_selected", "pending", "partially_fulfilled", "requires_action",
     * "fulfilled", "failed".
     */
    "resolution_status"?: InputValue<Array<"not_selected" | "pending" | "partially_fulfilled" | "requires_action" | "fulfilled" | "failed">>;
    /** Shape $ (Value): string. */
    "return_number"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "return_reason_id"?: InputValue<string>;
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
};
export type MeListShipmentsInput = {
    /** Shape $ (Value): string. */
    "order_id"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "fulfillment_id"?: InputValue<string>;
    /** Shape $ (Value): integer. minimum: 1. maximum: 100. Default: 20. */
    "page_size"?: InputValue<number>;
    /** Shape $ (Value): string. */
    "page_token"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "return_id"?: InputValue<string>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "handed_off_after"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "handed_off_before"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
};
export type MeListSubscriptionsInput = {
    /** Shape $ (Value): integer. minimum: 1. maximum: 100. Default: 20. */
    "page_size"?: InputValue<number>;
    /** Shape $ (Value): string. */
    "page_token"?: InputValue<string>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "trialing", "active", "paused",
     * "past_due", "canceled", "incomplete", "scheduled". Shape $[] (Value): string. Value enum:
     * "trialing", "active", "paused", "past_due", "canceled", "incomplete", "scheduled".
     */
    "status"?: InputValue<Array<"trialing" | "active" | "paused" | "past_due" | "canceled" | "incomplete" | "scheduled">>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "flint", "external". Shape $[]
     * (Value): string. Value enum: "flint", "external".
     */
    "billing_schedule_owner"?: InputValue<Array<"flint" | "external">>;
    /** Shape $ (Value): boolean. */
    "cancel_at_period_end"?: InputValue<boolean>;
    /** Shape $ (Value): string. */
    "delivery_method_id"?: InputValue<string>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "method_unavailable",
     * "destination_not_served", "rate_unavailable". Shape $[] (Value): string. Value enum:
     * "method_unavailable", "destination_not_served", "rate_unavailable".
     */
    "hold_reason"?: InputValue<Array<"method_unavailable" | "destination_not_served" | "rate_unavailable">>;
    /** Shape $ (Value): string. */
    "subscription_plan_id"?: InputValue<string>;
    /**
     * Shape $ (Value): string. Default: "created_at". Value enum: "created_at", "updated_at",
     * "next_billing_at".
     */
    "sort_by"?: InputValue<"created_at" | "updated_at" | "next_billing_at">;
    /** Shape $ (Value): string. Default: "desc". Value enum: "asc", "desc". */
    "sort_direction"?: InputValue<"asc" | "desc">;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_after"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_before"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "next_billing_after"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "next_billing_before"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): boolean. */
    "needs_attention"?: InputValue<boolean>;
};
export type MePauseSubscriptionInput = {
    /** Shape $ (Value): string. */
    "subscription_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link PauseSubscriptionRequestInput}. The request body for: Pause one of
     * the current buyer's subscriptions; Pause subscription.
     */
    "body": InputValue<PauseSubscriptionRequestInput>;
};
export type MeReactivateSubscriptionInput = {
    /** Shape $ (Value): string. */
    "subscription_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link ResourceVersionRequestInput}. The request body for: Mark invoice
     * uncollectible; Reactivate a subscription; Reactivate one of the current buyer's
     * subscriptions; Regenerate invoice public link; Resume one of the current buyer's
     * subscriptions; Resume subscription; Reverse credit note allocation; Void credit note; Void
     * invoice.
     */
    "body"?: InputValue<ResourceVersionRequestInput>;
};
export type MeRemoveGiftCardInput = {
    /** Shape $ (Value): string. */
    "gift_card_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
};
export type MeRemovePaymentMethodInput = {
    /** Shape $ (Value): string. */
    "payment_method_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
};
export type MeRenewSubscriptionInput = {
    /** Shape $ (Value): string. */
    "subscription_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link RenewSubscriptionRequestInput}. The request body for: Renew
     * subscription now.
     */
    "body": InputValue<RenewSubscriptionRequestInput>;
};
export type MeResumeSubscriptionInput = MeReactivateSubscriptionInput;
export type MeRevokeSessionInput = MeCreateDeletionRequestInput;
export type MeSaveGiftCardInput = {
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link SaveMeGiftCardRequestInput}. The request body for: Save a gift card
     * to your account.
     */
    "body": InputValue<SaveMeGiftCardRequestInput>;
};
export type MeSavePaymentMethodInput = {
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link SaveMePaymentMethodRequestInput}. The request body for: Create a
     * payment method for the current buyer.
     */
    "body": InputValue<SaveMePaymentMethodRequestInput>;
};
export type MeSendOrderReceiptInput = {
    /** Shape $ (Value): string. */
    "order_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
};
export type MeSetDefaultAddressInput = {
    /** Shape $ (Value): string. */
    "customer_address_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link SetDefaultCustomerAddressRequestInput}. The request body for: Set a
     * default address for the current buyer; Set a default customer address.
     */
    "body": InputValue<SetDefaultCustomerAddressRequestInput>;
};
export type MeSkipSubscriptionCycleInput = {
    /** Shape $ (Value): string. */
    "subscription_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link SkipMeSubscriptionCycleRequestInput}. The request body for: Skip
     * subscription cycle.
     */
    "body": InputValue<SkipMeSubscriptionCycleRequestInput>;
};
export type MeUpdateAddressInput = {
    /** Shape $ (Value): string. */
    "customer_address_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link UpdateCustomerAddressRequestInput}. The request body for: Update a
     * customer address; Update one of the current buyer's addresses. minProperties: 1.
     */
    "body": InputValue<UpdateCustomerAddressRequestInput>;
};
export type MeUpdateEmailPreferencesInput = {
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link UpdateCustomerEmailPreferencesRequestInput}. The request body for:
     * Update the current buyer's email preferences. minProperties: 1.
     */
    "body": InputValue<UpdateCustomerEmailPreferencesRequestInput>;
};
export type MeUpdateInput = {
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link UpdateMeRequestInput}. The request body for: Update the current
     * buyer profile. minProperties: 1.
     */
    "body": InputValue<UpdateMeRequestInput>;
};
export type MeUpdateSubscriptionInput = {
    /** Shape $ (Value): string. */
    "subscription_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link UpdateMeSubscriptionRequestInput}. The request body for: Update
     * subscription.
     */
    "body": InputValue<UpdateMeSubscriptionRequestInput>;
};
export type MeUpdateSubscriptionLineItemInput = {
    /** Shape $ (Value): string. */
    "subscription_id": InputValue<string>;
    /** Shape $ (Value): string. */
    "subscription_line_item_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link UpdateMeSubscriptionLineItemRequestInput}. The request body for:
     * Swap subscription variant.
     */
    "body": InputValue<UpdateMeSubscriptionLineItemRequestInput>;
};
/** Shape $ (Value): {@link Merchant}. The business accepting payments. */
export type Merchant = {
    /**
     * Shape $ (Value): {@link Address}. A postal address, as returned on customers, invoices, tax
     * locations, and fulfillment recipients.
     */
    "address"?: Address;
    /**
     * Shape $ (Value): string. Default API version for requests without a Flint-Version header.
     * Shared across live and test environments.
     */
    "api_version"?: string;
    /**
     * Shape $ (Value): string. When the merchant's default API version last changed. Format:
     * date-time.
     */
    "api_version_changed_at"?: string;
    /**
     * Shape $ (Value): string. When the merchant's default API version was first set. Format:
     * date-time.
     */
    "api_version_pinned_at"?: string;
    /**
     * Shape $ (Value): string. Previous API version, present while a supported rollback is
     * available.
     */
    "api_version_previous"?: string;
    /**
     * Shape $ (Value): string. When the 72-hour rollback offer expires. Explicit changes to any
     * supported version remain available afterward. Format: date-time.
     */
    "api_version_rollback_expires_at"?: string;
    /**
     * Shape $ (Value): string. Business name buyers see on checkout, payment links, and receipts.
     * Once the merchant starts verification, it stays in sync with the business name on the live
     * Stripe account: a change on either side applies, and the latest change wins.
     */
    "business_name"?: string;
    /**
     * Shape $ (Value): string. Merchant's business type. - `other`: A business type Flint does not
     * map yet. Value enum: "individual", "company", "non_profit", "government_entity", "other".
     */
    "business_type"?: "individual" | "company" | "non_profit" | "government_entity" | "other" | (string & {});
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "created_at"?: string;
    /** Shape $ (Value): string or null. */
    "email": string | null;
    /**
     * Shape $ (Value): {@link ImageAttachment}. A square image, at least 128 by 128 pixels, shown
     * where the store needs a small mark: browser tabs and compact headers. An image attached to a
     * resource, with its display properties and attachment metadata.
     */
    "icon"?: ImageAttachment;
    /**
     * Shape $ (Value): {@link ImageAttachment}. An image attached to a resource, with its display
     * properties and attachment metadata.
     */
    "logo"?: ImageAttachment;
    /** Shape $ (Value): string. */
    "merchant_id": string;
    /** Shape $ (Value): Map of string. Shape $.* (Value): string. */
    "metadata"?: Record<string, string>;
    /**
     * Shape $ (Value): {@link ExpandedOrganizationSummary} or null. Shape $.anyOf[1] (Value):
     * {@link ExpandedOrganizationSummary}. An organization's summary fields, such as its name,
     * status, and parent, returned when the organization is expanded. Shape $.anyOf[2] (Value):
     * null.
     */
    "organization"?: ((ExpandedOrganizationSummary) | (null));
    /** Shape $ (Value): string. */
    "organization_id"?: string;
    /** Shape $ (Value): string. */
    "phone"?: string;
    /**
     * Shape $ (Value): {@link MerchantReadiness}. A merchant's readiness to accept payments and
     * receive payouts, with per-capability status and outstanding requirements.
     */
    "readiness": MerchantReadiness;
    /** Shape $ (Value): string. */
    "reporting_timezone"?: string;
    /** Shape $ (Value): string.  Value enum: "active", "suspended", "restricted", "closed". */
    "status": "active" | "suspended" | "restricted" | "closed" | (string & {});
    /** Shape $ (Value): string. */
    "support_email"?: string;
    /** Shape $ (Value): string. */
    "support_phone"?: string;
    /** Shape $ (Value): string. */
    "support_url"?: string;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "updated_at"?: string;
    /**
     * Shape $ (Value): integer string. Merchant version. Profile, status, and API version changes
     * advance this version, including business name and business type changes synced from the
     * payment provider. Readiness updates alone do not. Use an integer string (decimal digits),
     * not a floating-point number. Format: int64. minimum: 1.
     */
    "version": `${bigint}`;
    /** Shape $ (Value): string. */
    "website_url"?: string;
};
/**
 * Shape $ (Value): {@link MerchantAccountSession}. A merchant account session: the browser
 * initialization data, allowed components, effective policy, and launch token for embedded account
 * management.
 */
export type MerchantAccountSession = {
    /**
     * Shape $ (Value): {@link MerchantAccountSessionClientSession}. Browser initialization data
     * required to mount embedded account-management components. These instructions are not
     * merchant account resource state. Short-lived browser initialization data for an embedded
     * merchant account session.
     */
    "client_session": MerchantAccountSessionClientSession;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "account_onboarding",
     * "account_management", "payouts", "balances", "tax_documents", "notification_banner". Shape
     * $[] (Value): string. Value enum: "account_onboarding", "account_management", "payouts",
     * "balances", "tax_documents", "notification_banner".
     */
    "components": Array<"account_onboarding"
        | "account_management"
        | "payouts"
        | "balances"
        | "tax_documents"
        | "notification_banner"
        | (string & {})>;
    /**
     * Shape $ (Value): {@link MerchantAccountSessionEffectivePolicy}. The collection policy
     * applied to a merchant account session: which requirements it targets, how they are
     * collected, and whether future requirements are included.
     */
    "effective_policy": MerchantAccountSessionEffectivePolicy;
    /**
     * Shape $ (Value): string. Signed Flint token to exchange at POST
     * /v1/merchant-account-sessions/refresh. Each successful refresh rotates this token. The
     * caller must still authenticate and authorize the human using the session.
     */
    "launch_token": string;
    /**
     * Shape $ (Value): string. Expiry of launch_token in UTC. After expiry, create a new merchant
     * account session. Format: date-time.
     */
    "launch_token_expires_at": string;
};
/**
 * Shape $ (Value): {@link MerchantAccountSessionClientSession}. Short-lived browser initialization
 * data for an embedded merchant account session.
 */
export type MerchantAccountSessionClientSession = {
    /**
     * Shape $ (Value): string. Expiry of the embedded account session client secret in UTC.
     * Connect.js calls fetchClientSecret to obtain a new secret when needed. Format: date-time.
     */
    "expires_at": string;
    /**
     * Shape $ (Value): {@link MerchantAccountSessionStripe}. Stripe Connect initialization
     * credentials and authorized component collection options. Connect initializes from the
     * account session client secret and does not take a connected account ID. Stripe Connect
     * initialization data for a merchant account session: the account session, publishable key,
     * and authorized components.
     */
    "stripe": MerchantAccountSessionStripe;
};
/**
 * Shape $ (Value): {@link MerchantAccountSessionCreateRequest}. Creates an embedded account
 * session for a non-empty unique set of Flint components. At most one component may use onboarding
 * policy fields.
 */
export type MerchantAccountSessionCreateRequest = {
    /** Shape $ (Value): string.  Value enum: "upfront", "incremental". */
    "collection_strategy"?: "upfront" | "incremental" | (string & {});
    /**
     * Shape $ (Value): Array of string. minItems: 1. maxItems: 6. uniqueItems: true. [] enum:
     * "account_onboarding", "account_management", "payouts", "balances", "tax_documents",
     * "notification_banner". Shape $[] (Value): string. Value enum: "account_onboarding",
     * "account_management", "payouts", "balances", "tax_documents", "notification_banner".
     */
    "components": Array<"account_onboarding"
        | "account_management"
        | "payouts"
        | "balances"
        | "tax_documents"
        | "notification_banner"
        | (string & {})>;
    /** Shape $ (Value): string.  Value enum: "omit", "include". */
    "future_requirements"?: "omit" | "include" | (string & {});
    /** Shape $ (Value): string. minLength: 1. */
    "sandbox_id"?: string;
    /**
     * Shape $ (Value): Array of string. Flint requirement codes. New codes can appear; treat an
     * unknown code as additional_account_information. [] enum: "additional_account_information",
     * "business_address", "business_description", "business_directors", "business_executives",
     * "business_name", "business_owners", "business_phone", "business_support_phone",
     * "business_support_url", "business_tax_id", "business_verification_document",
     * "business_website", "merchant_category_code", "owner_address",
     * "owner_additional_identity_document", "owner_date_of_birth", "owner_first_name",
     * "owner_identity_document", "owner_last_name", "owner_tax_id_last_four",
     * "payout_destination", "representative_address",
     * "representative_additional_identity_document", "representative_date_of_birth",
     * "representative_email", "representative_first_name", "representative_identity_document",
     * "representative_last_name", "representative_phone", "representative_tax_id",
     * "representative_tax_id_last_four". Shape $[] (Value): string. Value enum:
     * "additional_account_information", "business_address", "business_description",
     * "business_directors", "business_executives", "business_name", "business_owners",
     * "business_phone", "business_support_phone", "business_support_url", "business_tax_id",
     * "business_verification_document", "business_website", "merchant_category_code",
     * "owner_address", "owner_additional_identity_document", "owner_date_of_birth",
     * "owner_first_name", "owner_identity_document", "owner_last_name", "owner_tax_id_last_four",
     * "payout_destination", "representative_address",
     * "representative_additional_identity_document", "representative_date_of_birth",
     * "representative_email", "representative_first_name", "representative_identity_document",
     * "representative_last_name", "representative_phone", "representative_tax_id",
     * "representative_tax_id_last_four".
     */
    "targeted_requirements"?: Array<"additional_account_information"
        | "business_address"
        | "business_description"
        | "business_directors"
        | "business_executives"
        | "business_name"
        | "business_owners"
        | "business_phone"
        | "business_support_phone"
        | "business_support_url"
        | "business_tax_id"
        | "business_verification_document"
        | "business_website"
        | "merchant_category_code"
        | "owner_address"
        | "owner_additional_identity_document"
        | "owner_date_of_birth"
        | "owner_first_name"
        | "owner_identity_document"
        | "owner_last_name"
        | "owner_tax_id_last_four"
        | "payout_destination"
        | "representative_address"
        | "representative_additional_identity_document"
        | "representative_date_of_birth"
        | "representative_email"
        | "representative_first_name"
        | "representative_identity_document"
        | "representative_last_name"
        | "representative_phone"
        | "representative_tax_id"
        | "representative_tax_id_last_four"
        | (string & {})>;
};
/**
 * Shape $ (Value): {@link MerchantAccountSessionCreateRequestInput}. Creates an embedded account
 * session for a non-empty unique set of Flint components. At most one component may use onboarding
 * policy fields.
 */
export type MerchantAccountSessionCreateRequestInput = {
    /** Shape $ (Value): string.  Value enum: "upfront", "incremental". */
    "collection_strategy"?: "upfront" | "incremental";
    /**
     * Shape $ (Value): Array of string. minItems: 1. maxItems: 6. uniqueItems: true. [] enum:
     * "account_onboarding", "account_management", "payouts", "balances", "tax_documents",
     * "notification_banner". Shape $[] (Value): string. Value enum: "account_onboarding",
     * "account_management", "payouts", "balances", "tax_documents", "notification_banner".
     */
    "components": Array<"account_onboarding"
        | "account_management"
        | "payouts"
        | "balances"
        | "tax_documents"
        | "notification_banner">;
    /** Shape $ (Value): string.  Value enum: "omit", "include". */
    "future_requirements"?: "omit" | "include";
    /** Shape $ (Value): string. minLength: 1. */
    "sandbox_id"?: string;
    /**
     * Shape $ (Value): Array of string. Flint requirement codes. New codes can appear; treat an
     * unknown code as additional_account_information. [] enum: "additional_account_information",
     * "business_address", "business_description", "business_directors", "business_executives",
     * "business_name", "business_owners", "business_phone", "business_support_phone",
     * "business_support_url", "business_tax_id", "business_verification_document",
     * "business_website", "merchant_category_code", "owner_address",
     * "owner_additional_identity_document", "owner_date_of_birth", "owner_first_name",
     * "owner_identity_document", "owner_last_name", "owner_tax_id_last_four",
     * "payout_destination", "representative_address",
     * "representative_additional_identity_document", "representative_date_of_birth",
     * "representative_email", "representative_first_name", "representative_identity_document",
     * "representative_last_name", "representative_phone", "representative_tax_id",
     * "representative_tax_id_last_four". Shape $[] (Value): string. Value enum:
     * "additional_account_information", "business_address", "business_description",
     * "business_directors", "business_executives", "business_name", "business_owners",
     * "business_phone", "business_support_phone", "business_support_url", "business_tax_id",
     * "business_verification_document", "business_website", "merchant_category_code",
     * "owner_address", "owner_additional_identity_document", "owner_date_of_birth",
     * "owner_first_name", "owner_identity_document", "owner_last_name", "owner_tax_id_last_four",
     * "payout_destination", "representative_address",
     * "representative_additional_identity_document", "representative_date_of_birth",
     * "representative_email", "representative_first_name", "representative_identity_document",
     * "representative_last_name", "representative_phone", "representative_tax_id",
     * "representative_tax_id_last_four".
     */
    "targeted_requirements"?: Array<"additional_account_information"
        | "business_address"
        | "business_description"
        | "business_directors"
        | "business_executives"
        | "business_name"
        | "business_owners"
        | "business_phone"
        | "business_support_phone"
        | "business_support_url"
        | "business_tax_id"
        | "business_verification_document"
        | "business_website"
        | "merchant_category_code"
        | "owner_address"
        | "owner_additional_identity_document"
        | "owner_date_of_birth"
        | "owner_first_name"
        | "owner_identity_document"
        | "owner_last_name"
        | "owner_tax_id_last_four"
        | "payout_destination"
        | "representative_address"
        | "representative_additional_identity_document"
        | "representative_date_of_birth"
        | "representative_email"
        | "representative_first_name"
        | "representative_identity_document"
        | "representative_last_name"
        | "representative_phone"
        | "representative_tax_id"
        | "representative_tax_id_last_four">;
};
/**
 * Shape $ (Value): {@link MerchantAccountSessionEffectivePolicy}. The collection policy applied to
 * a merchant account session: which requirements it targets, how they are collected, and whether
 * future requirements are included.
 */
export type MerchantAccountSessionEffectivePolicy = {
    /** Shape $ (Value): string.  Value enum: "upfront", "incremental". */
    "collection_strategy"?: "upfront" | "incremental" | (string & {});
    /** Shape $ (Value): string.  Value enum: "omit", "include". */
    "future_requirements"?: "omit" | "include" | (string & {});
    /** Shape $ (Value): string.  Value enum: "none", "all", "all_due", "targeted". */
    "targeting": "none" | "all" | "all_due" | "targeted" | (string & {});
};
/**
 * Shape $ (Value): {@link MerchantAccountSessionRefreshRequest}. Refreshes a merchant account
 * session from its signed launch token. No create fields are accepted.
 */
export type MerchantAccountSessionRefreshRequest = {
    /** Shape $ (Value): string. minLength: 1. */
    "launch_token": string;
};
/**
 * Shape $ (Value): {@link MerchantAccountSessionRefreshRequestInput}. Refreshes a merchant account
 * session from its signed launch token. No create fields are accepted.
 */
export type MerchantAccountSessionRefreshRequestInput = MerchantAccountSessionRefreshRequest;
/**
 * Shape $ (Value): {@link MerchantAccountSessionResponse}. A response containing
 * `MerchantAccountSession` data.
 */
export type MerchantAccountSessionResponse = {
    /**
     * Shape $ (Value): {@link MerchantAccountSession}. A merchant account session: the browser
     * initialization data, allowed components, effective policy, and launch token for embedded
     * account management.
     */
    "data": MerchantAccountSession;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Metadata returned with a response: the `api_version`,
     * `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Shape $ (Value): string. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id"?: string;
};
/**
 * Shape $ (Value): {@link MerchantAccountSessionStripe}. Stripe Connect initialization data for a
 * merchant account session: the account session, publishable key, and authorized components.
 */
export type MerchantAccountSessionStripe = {
    /**
     * Shape $ (Value): {@link DisputeResponseSessionStripeAccountSession}. Account session
     * authority for initializing Stripe Connect in the browser. The account session authority for
     * initializing Stripe Connect in the browser, including the client secret.
     */
    "account_session": DisputeResponseSessionStripeAccountSession;
    /**
     * Shape $ (Value): Array of {@link MerchantAccountSessionStripeComponent}. Authorized Stripe
     * component names and collection options to apply when mounting each component. Shape $[]
     * (Value): {@link MerchantAccountSessionStripeComponent}. One embedded component a merchant
     * account session authorizes, with the collection options to apply to it.
     */
    "components": Array<MerchantAccountSessionStripeComponent>;
    /**
     * Shape $ (Value): string. Stripe publishable key to pass as publishableKey to
     * loadConnectAndInitialize.
     */
    "publishable_key": string;
};
/**
 * Shape $ (Value): {@link MerchantAccountSessionStripeCollectionOptions}. Requirement collection
 * options to apply when mounting one embedded component: field breadth, future requirements, and
 * any targeted requirements.
 */
export type MerchantAccountSessionStripeCollectionOptions = {
    /**
     * Shape $ (Value): string. Requirement collection breadth to pass as fields to
     * setCollectionOptions. Value enum: "currently_due", "eventually_due".
     */
    "fields": "currently_due" | "eventually_due" | (string & {});
    /**
     * Shape $ (Value): string. Whether to collect future requirements. Pass this value as
     * futureRequirements to setCollectionOptions. Value enum: "omit", "include".
     */
    "future_requirements": "omit" | "include" | (string & {});
    /**
     * Shape $ (Value): {@link MerchantAccountSessionStripeRequirements}. Targeted requirement
     * collection restriction to pass as requirements to setCollectionOptions. Omitted when
     * collection is not targeted. The Stripe requirement paths to collect exclusively when a
     * session's targeting is `targeted`.
     */
    "requirements"?: MerchantAccountSessionStripeRequirements;
};
/**
 * Shape $ (Value): {@link MerchantAccountSessionStripeComponent}. One embedded component a
 * merchant account session authorizes, with the collection options to apply to it.
 */
export type MerchantAccountSessionStripeComponent = {
    /**
     * Shape $ (Value): {@link MerchantAccountSessionStripeCollectionOptions}. Collection
     * instructions for a policy-aware component. Omitted for other components. Map
     * future_requirements to futureRequirements when calling setCollectionOptions. Requirement
     * collection options to apply when mounting one embedded component: field breadth, future
     * requirements, and any targeted requirements.
     */
    "collection_options"?: MerchantAccountSessionStripeCollectionOptions;
    /**
     * Shape $ (Value): string. Stripe component name authorized by this session. tax_documents
     * uses the Stripe name documents. Convert underscores to hyphens when calling Connect.create.
     * Value enum: "account_onboarding", "account_management", "payouts", "balances", "documents",
     * "notification_banner".
     */
    "component": "account_onboarding"
        | "account_management"
        | "payouts"
        | "balances"
        | "documents"
        | "notification_banner"
        | (string & {});
};
/**
 * Shape $ (Value): {@link MerchantAccountSessionStripeRequirements}. The Stripe requirement paths
 * to collect exclusively when a session's targeting is `targeted`.
 */
export type MerchantAccountSessionStripeRequirements = {
    /**
     * Shape $ (Value): Array of string. Stripe requirement paths to collect exclusively when
     * effective_policy.targeting is targeted. They come from the targeted_requirements you sent or
     * from Flint's remediation recommendation. Shape $[] (Value): string.
     */
    "only": Array<string>;
};
export type MerchantAccountSessionsCreateInput = {
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link MerchantAccountSessionCreateRequestInput}. Creates an embedded
     * account session for a non-empty unique set of Flint components. At most one component may
     * use onboarding policy fields.
     */
    "body": InputValue<MerchantAccountSessionCreateRequestInput>;
};
export type MerchantAccountSessionsRefreshInput = {
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link MerchantAccountSessionRefreshRequestInput}. Refreshes a merchant
     * account session from its signed launch token. No create fields are accepted.
     */
    "body": InputValue<MerchantAccountSessionRefreshRequestInput>;
};
/**
 * Shape $ (Value): {@link MerchantBillingBalance}. Current Flint merchant billing balance for one
 * billing account and currency.
 */
export type MerchantBillingBalance = {
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "available_credit_money": MoneyValue;
    /**
     * Shape $ (Value): string. ISO 4217 currency code. minLength: 3. maxLength: 3. pattern:
     * ^[A-Z]{3}$. Example: "USD".
     */
    "currency": string;
    /**
     * Shape $ (Value): string. Stable identifier for this billing account and currency balance
     * projection.
     */
    "merchant_billing_balance_id": string;
    /** Shape $ (Value): string. RFC3339 timestamp for the balance snapshot. Format: date-time. */
    "observed_at": string;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "outstanding_money": MoneyValue;
};
/**
 * Shape $ (Value): {@link MerchantBillingBalanceListResponse}. A page of `MerchantBillingBalance`
 * objects.
 */
export type MerchantBillingBalanceListResponse = {
    /**
     * Shape $ (Value): Array of {@link MerchantBillingBalance}. Shape $[] (Value): {@link
     * MerchantBillingBalance}. Current Flint merchant billing balance for one billing account and
     * currency.
     */
    "data": Array<MerchantBillingBalance>;
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
    "request_id"?: string;
};
/**
 * Shape $ (Value): {@link MerchantBillingBalanceResponse}. A response containing
 * `MerchantBillingBalance` data.
 */
export type MerchantBillingBalanceResponse = {
    /**
     * Shape $ (Value): {@link MerchantBillingBalance}. Current Flint merchant billing balance for
     * one billing account and currency.
     */
    "data": MerchantBillingBalance;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Metadata returned with a response: the `api_version`,
     * `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Shape $ (Value): string. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id"?: string;
};
export type MerchantBillingBalancesGetInput = {
    /** Shape $ (Value): string. */
    "merchant_billing_balance_id": InputValue<string>;
};
export type MerchantBillingBalancesListInput = {};
export type MerchantBillingEntriesListInput = {
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "event_fee", "invoice",
     * "custom_domain", "custom_domain_collection", "correction", "credit_issued",
     * "credit_applied", "credit_refunded", "collection", "collection_reversal", "write_off". Shape
     * $[] (Value): string. Value enum: "event_fee", "invoice", "custom_domain",
     * "custom_domain_collection", "correction", "credit_issued", "credit_applied",
     * "credit_refunded", "collection", "collection_reversal", "write_off".
     */
    "type"?: InputValue<Array<"event_fee"
        | "invoice"
        | "custom_domain"
        | "custom_domain_collection"
        | "correction"
        | "credit_issued"
        | "credit_applied"
        | "credit_refunded"
        | "collection"
        | "collection_reversal"
        | "write_off">>;
    /**
     * Shape $ (Value): string. ISO 4217 currency code. minLength: 3. maxLength: 3. pattern:
     * ^[A-Z]{3}$. Example: "USD".
     */
    "currency"?: InputValue<string>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "occurred_after"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "occurred_before"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. */
    "payment_intent_id"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "dispute_id"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "merchant_billing_invoice_id"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "balance_transaction_id"?: InputValue<string>;
    /** Shape $ (Value): integer. minimum: 1. maximum: 100. Default: 20. */
    "page_size"?: InputValue<number>;
    /** Shape $ (Value): string. */
    "page_token"?: InputValue<string>;
};
/**
 * Shape $ (Value): {@link MerchantBillingEntry}. An immutable merchant billing charge, credit,
 * collection, correction, or write-off.
 */
export type MerchantBillingEntry = {
    /**
     * Shape $ (Value): {@link MoneyValue}. Signed change in available billing credit.
     * credit_issued increases it; credit_applied and credit_refunded decrease it. Other entry
     * types do not change it. Signed monetary amount represented as integer minor units plus an
     * ISO 4217 currency code.
     */
    "available_credit_effect_money": MoneyValue;
    /**
     * Shape $ (Value): string. Balance transaction for this collection or collection reversal,
     * when present.
     */
    "balance_transaction_id"?: string;
    /**
     * Shape $ (Value): string. When Flint recorded the entry. Use created_after to pick up new
     * entries, including late arrivals. Format: date-time.
     */
    "created_at": string;
    /** Shape $ (Value): string. Human-readable description of the billing event. */
    "description": string;
    /** Shape $ (Value): string. Related dispute, when the entry is associated with a dispute. */
    "dispute_id"?: string;
    /**
     * Shape $ (Value): string. Event fee category. Present only for event_fee entries. Value enum:
     * "bank_verification", "failed_ach_payment", "ach_dispute", "card_dispute".
     */
    "event_fee_type"?: "bank_verification" | "failed_ach_payment" | "ach_dispute" | "card_dispute" | (string & {});
    /** Shape $ (Value): string. Stable entry ID. Re-reading an entry returns the same values. */
    "merchant_billing_entry_id": string;
    /** Shape $ (Value): string. Related invoice issued by Flint, when applicable. */
    "merchant_billing_invoice_id"?: string;
    /**
     * Shape $ (Value): {@link MoneyValue}. Signed outstanding effect minus the available credit
     * effect. Charges and collection_reversal are positive; credit_issued, collection,
     * custom_domain_collection, and write_off are negative; credit_refunded is positive;
     * credit_applied is zero; correction may be positive or negative. Signed monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "net_billing_effect_money": MoneyValue;
    /**
     * Shape $ (Value): string. When the billing event happened. An entry can be recorded after
     * entries that occurred later. Format: date-time.
     */
    "occurred_at": string;
    /**
     * Shape $ (Value): {@link MoneyValue}. Signed change in the amount owed Flint. Charges
     * (event_fee, invoice, custom_domain) and collection_reversal increase it; credit_applied,
     * collection, custom_domain_collection, and write_off decrease it; correction may increase or
     * decrease it. Credit issuance and refund do not change it. Signed monetary amount represented
     * as integer minor units plus an ISO 4217 currency code.
     */
    "outstanding_effect_money": MoneyValue;
    /**
     * Shape $ (Value): string. Related payment intent, when the entry is associated with a
     * payment.
     */
    "payment_intent_id"?: string;
    /**
     * Shape $ (Value): string. Entry corrected, credited, collected, reversed, or written off by
     * this entry, when applicable.
     */
    "related_merchant_billing_entry_id"?: string;
    /**
     * Shape $ (Value): string. The billing event represented by this entry. Value enum:
     * "event_fee", "invoice", "custom_domain", "custom_domain_collection", "correction",
     * "credit_issued", "credit_applied", "credit_refunded", "collection", "collection_reversal",
     * "write_off".
     */
    "type": "event_fee"
        | "invoice"
        | "custom_domain"
        | "custom_domain_collection"
        | "correction"
        | "credit_issued"
        | "credit_applied"
        | "credit_refunded"
        | "collection"
        | "collection_reversal"
        | "write_off"
        | (string & {});
};
/**
 * Shape $ (Value): {@link MerchantBillingEntryListResponse}. A page of `MerchantBillingEntry`
 * objects.
 */
export type MerchantBillingEntryListResponse = {
    /**
     * Shape $ (Value): Array of {@link MerchantBillingEntry}. Shape $[] (Value): {@link
     * MerchantBillingEntry}. An immutable merchant billing charge, credit, collection, correction,
     * or write-off.
     */
    "data": Array<MerchantBillingEntry>;
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
    "request_id"?: string;
};
/**
 * Shape $ (Value): {@link MerchantBillingInvoice}. A Flint invoice for the merchant's Flint
 * subscription.
 */
export type MerchantBillingInvoice = {
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "created_at": string;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "credit_money": MoneyValue;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "due_at": string;
    /** Shape $ (Value): string. */
    "invoice_number": string;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "issued_at"?: string;
    /**
     * Shape $ (Value): Array of {@link MerchantBillingInvoiceLineItem}. Invoice-owned line items.
     * Subscription totals sum to subtotal_money; credit totals sum to credit_money. Shape $[]
     * (Value): {@link MerchantBillingInvoiceLineItem}. One line on a merchant billing invoice,
     * either a subscription charge or a credit, with quantity, unit price, and total.
     */
    "line_items": Array<MerchantBillingInvoiceLineItem>;
    /** Shape $ (Value): string. */
    "merchant_billing_invoice_id": string;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "outstanding_money": MoneyValue;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "paid_at"?: string;
    /**
     * Shape $ (Value): string. Exclusive invoice billing period end as an RFC 3339 UTC instant.
     * Format: date-time.
     */
    "period_end_at": string;
    /**
     * Shape $ (Value): string. Inclusive invoice billing period start as an RFC 3339 UTC instant.
     * Format: date-time.
     */
    "period_start_at": string;
    /**
     * Shape $ (Value): string. Value enum: "draft", "open", "collecting", "paid", "delinquent",
     * "void", "written_off".
     */
    "status": "draft" | "open" | "collecting" | "paid" | "delinquent" | "void" | "written_off" | (string & {});
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "subtotal_money": MoneyValue;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "total_money": MoneyValue;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "updated_at": string;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "voided_at"?: string;
};
/**
 * Shape $ (Value): {@link MerchantBillingInvoiceLineItem}. One line on a merchant billing invoice,
 * either a subscription charge or a credit, with quantity, unit price, and total.
 */
export type MerchantBillingInvoiceLineItem = {
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "created_at": string;
    /** Shape $ (Value): string. */
    "merchant_billing_invoice_line_item_id": string;
    /** Shape $ (Value): string. Name of the subscription charge or credit. */
    "name": string;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "quantity": `${bigint}`;
    /**
     * Shape $ (Value): {@link MoneyValue}. Unsigned line total, calculated as quantity multiplied
     * by unit_price_money. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "total_money": MoneyValue;
    /**
     * Shape $ (Value): string. Whether the line adds a subscription charge or applies credit.
     * Value enum: "subscription", "credit".
     */
    "type": "subscription" | "credit" | (string & {});
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "unit_price_money": MoneyValue;
};
/**
 * Shape $ (Value): {@link MerchantBillingInvoiceListResponse}. A page of `MerchantBillingInvoice`
 * objects.
 */
export type MerchantBillingInvoiceListResponse = {
    /**
     * Shape $ (Value): Array of {@link MerchantBillingInvoice}. Shape $[] (Value): {@link
     * MerchantBillingInvoice}. A Flint invoice for the merchant's Flint subscription.
     */
    "data": Array<MerchantBillingInvoice>;
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
    "request_id"?: string;
};
/**
 * Shape $ (Value): {@link MerchantBillingInvoiceResponse}. A response containing
 * `MerchantBillingInvoice` data.
 */
export type MerchantBillingInvoiceResponse = {
    /**
     * Shape $ (Value): {@link MerchantBillingInvoice}. A Flint invoice for the merchant's Flint
     * subscription.
     */
    "data": MerchantBillingInvoice;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Metadata returned with a response: the `api_version`,
     * `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Shape $ (Value): string. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id"?: string;
};
/**
 * Shape $ (Value): {@link MerchantReadiness}. A merchant's readiness to accept payments and
 * receive payouts, with per-capability status and outstanding requirements.
 */
export type MerchantReadiness = {
    /**
     * Shape $ (Value): Array of {@link CapabilityReadiness}. Shape $[] (Value): {@link
     * CapabilityReadiness}. Merchant capability readiness for a payment or money movement
     * capability.
     */
    "capabilities": Array<CapabilityReadiness>;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "observed_at": string;
    /**
     * Shape $ (Value): {@link ReadinessAxis}. Readiness for one area of a merchant account, with
     * its `status`, the reason for it, and the actions that would advance it.
     */
    "payments": ReadinessAxis;
    /**
     * Shape $ (Value): {@link ReadinessAxis}. Readiness for one area of a merchant account, with
     * its `status`, the reason for it, and the actions that would advance it.
     */
    "payouts": ReadinessAxis;
    /**
     * Shape $ (Value): {@link ReadinessRequirements}. Account information requirements for a
     * merchant, grouped as currently due, eventually due, past due, and pending verification.
     */
    "requirements": ReadinessRequirements;
};
/** Shape $ (Value): {@link MerchantResponse}. A response containing `Merchant` data. */
export type MerchantResponse = {
    /** Shape $ (Value): {@link Merchant}. The business accepting payments. */
    "data": Merchant;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Metadata returned with a response: the `api_version`,
     * `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Shape $ (Value): string. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id"?: string;
};
