import type { ErrorEnvelope, ExpandedCustomerSummary, ExpandedOrderSummary } from './types-16.js';
import type { InventoryTransfer, InventoryProvenanceRequest, InventoryProvenanceRequestInput } from './types-25.js';
import type { ResponseMeta } from './types-40.js';
import type { InventoryLevel } from './types-24.js';
import type { InputValue } from '../runtime.js';
import type { CreateInventoryTransferRequestInput } from './types-7.js';
import type { UpdateInventoryTransferRequestInput } from './types-48.js';
import type { Address, BundleComponent } from './types-0.js';
import type {
    InvoicePaymentDue,
    InvoicePaymentTermsSnapshot,
    InvoiceScheduleEntry,
    InvoicePaymentPolicy,
    InvoicePaymentPolicyInput
} from './types-27.js';
import type { InvoiceSnapshot } from './types-28.js';
import type { MoneyValue, MoneyValueInput } from './types-31.js';
import type { CheckoutRedirects, CheckoutRedirectsRequestInput, CheckoutSession } from './types-4.js';
import type { CategoryReference } from './types-3.js';
import type { Image } from './types-19.js';
import type { OrderLineItemModifier } from './types-32.js';
import type { SelectedProductOption } from './types-43.js';
import type { PaymentErrorSummary } from './types-35.js';
/**
 * Shape $ (Value): {@link InventoryTransferOtherConflictErrorEnvelope}. The response for:
 * Transition inventory transfer. An error response containing `ErrorObject`.
 */
export type InventoryTransferOtherConflictErrorEnvelope = (Exclude<ErrorEnvelope & object, readonly unknown[]>)
    & ({
    /** Shape $ (Value): object. Shape $.code (Optional): string. */
    "error": {
        /** Shape $ (Value): string. */
        "code"?: (string);
    };
});
/**
 * Shape $ (Value): {@link InventoryTransferResponse}. A response containing `InventoryTransfer`
 * data.
 */
export type InventoryTransferResponse = {
    /** Shape $ (Value): {@link InventoryTransfer}. Stock moving between locations. */
    "data": InventoryTransfer;
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
 * Shape $ (Value): {@link InventoryTransferResult}. inventory_transfer is the primary resource and
 * expected_version target. Stock-moving transitions return this result instead of a resource
 * alone.
 */
export type InventoryTransferResult = {
    /**
     * Shape $ (Value): Array of {@link InventoryLevel}. Post-commit state of every level this
     * command touched, one entry per level. A replay returns the levels the original command
     * produced. Empty when no levels changed. Shape $[] (Value): {@link InventoryLevel}. The
     * quantity state of one inventory item at one Location.
     */
    "inventory_levels": Array<InventoryLevel>;
    /** Shape $ (Value): {@link InventoryTransfer}. Stock moving between locations. */
    "inventory_transfer": InventoryTransfer;
};
/**
 * Shape $ (Value): {@link InventoryTransferResultResponse}. A response containing
 * `InventoryTransferResult` data.
 */
export type InventoryTransferResultResponse = {
    /**
     * Shape $ (Value): {@link InventoryTransferResult}. inventory_transfer is the primary resource
     * and expected_version target. Stock-moving transitions return this result instead of a
     * resource alone.
     */
    "data": InventoryTransferResult;
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
 * Shape $ (Value): {@link InventoryTransferTransitionRequest}. The request body for: Transition
 * inventory transfer.
 */
export type InventoryTransferTransitionRequest = ((InventoryTransferTransitionRequestDepart)
    | (InventoryTransferTransitionRequestReceive)
    | (InventoryTransferTransitionRequestReturnToOrigin)
    | (InventoryTransferTransitionRequestReportLoss)
    | (InventoryTransferTransitionRequestCancel)
    | (Record<string, unknown>));
/**
 * Shape $ (Value): {@link InventoryTransferTransitionRequestCancel}. The `cancel` variant of
 * `InventoryTransferTransitionRequest`.
 */
export type InventoryTransferTransitionRequestCancel = {
    /** Shape $ (Value): string.  Value enum: "cancel". */
    "action": "cancel" | (string & {});
    /**
     * Shape $ (Value): integer string. Transfer version the caller last read. Use an integer
     * string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /**
     * Shape $ (Value): Array of object. minItems: 1. maxItems: 100. Shape $[] (Value): object.
     * Shape $[].inventory_transfer_line_id (Required): string. Transfer line being transitioned.
     * minLength: 1. Shape $[].target_canceled_quantity (Required): integer string. Cumulative
     * quantity that should be canceled before departure. Whole-number quantity; fractional
     * quantities are not supported. Use an integer string (decimal digits), not a floating-point
     * number. Format: int64. minimum: 0.
     */
    "lines": Array<{
        /** Shape $ (Value): string. Transfer line being transitioned. minLength: 1. */
        "inventory_transfer_line_id": string;
        /**
         * Shape $ (Value): integer string. Cumulative quantity that should be canceled before
         * departure. Whole-number quantity; fractional quantities are not supported. Use an
         * integer string (decimal digits), not a floating-point number. Format: int64. minimum: 0.
         */
        "target_canceled_quantity": `${bigint}`;
    }>;
    /**
     * Shape $ (Value): {@link InventoryProvenanceRequest}. When and where the stock moved.
     * Optional; when omitted, the movements record the time Flint received the command as
     * occurred_at and a null source_system. Where and when an inventory event happened: the source
     * system, external actor, and time.
     */
    "provenance"?: InventoryProvenanceRequest;
};
/**
 * Shape $ (Value): {@link InventoryTransferTransitionRequestCancelInput}. The `cancel` variant of
 * `InventoryTransferTransitionRequest`.
 */
export type InventoryTransferTransitionRequestCancelInput = {
    /** Shape $ (Value): string.  Value enum: "cancel". */
    "action": "cancel";
    /**
     * Shape $ (Value): integer string. Transfer version the caller last read. Use an integer
     * string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): Array of object. minItems: 1. maxItems: 100. Shape $[] (Value): object.
     * Shape $[].inventory_transfer_line_id (Required): string. Transfer line being transitioned.
     * minLength: 1. Shape $[].target_canceled_quantity (Required): integer string. Cumulative
     * quantity that should be canceled before departure. Whole-number quantity; fractional
     * quantities are not supported. Use an integer string (decimal digits), not a floating-point
     * number. Format: int64. minimum: 0.
     */
    "lines": Array<{
        /** Shape $ (Value): string. Transfer line being transitioned. minLength: 1. */
        "inventory_transfer_line_id": string;
        /**
         * Shape $ (Value): integer string. Cumulative quantity that should be canceled before
         * departure. Whole-number quantity; fractional quantities are not supported. Use an
         * integer string (decimal digits), not a floating-point number. Format: int64. minimum: 0.
         */
        "target_canceled_quantity": `${bigint}` | bigint;
    }>;
    /**
     * Shape $ (Value): {@link InventoryProvenanceRequestInput}. When and where the stock moved.
     * Optional; when omitted, the movements record the time Flint received the command as
     * occurred_at and a null source_system. Where and when an inventory event happened: the source
     * system, external actor, and time.
     */
    "provenance"?: InventoryProvenanceRequestInput;
};
/**
 * Shape $ (Value): {@link InventoryTransferTransitionRequestDepart}. The `depart` variant of
 * `InventoryTransferTransitionRequest`.
 */
export type InventoryTransferTransitionRequestDepart = {
    /** Shape $ (Value): string.  Value enum: "depart". */
    "action": "depart" | (string & {});
    /**
     * Shape $ (Value): integer string. Transfer version the caller last read. Use an integer
     * string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /**
     * Shape $ (Value): Array of object. minItems: 1. maxItems: 100. Shape $[] (Value): object.
     * Shape $[].inventory_transfer_line_id (Required): string. Transfer line being transitioned.
     * minLength: 1. Shape $[].target_departed_quantity (Required): integer string. Cumulative
     * quantity that should have departed the origin. Whole-number quantity; fractional quantities
     * are not supported. Use an integer string (decimal digits), not a floating-point number.
     * Format: int64. minimum: 0.
     */
    "lines": Array<{
        /** Shape $ (Value): string. Transfer line being transitioned. minLength: 1. */
        "inventory_transfer_line_id": string;
        /**
         * Shape $ (Value): integer string. Cumulative quantity that should have departed the
         * origin. Whole-number quantity; fractional quantities are not supported. Use an integer
         * string (decimal digits), not a floating-point number. Format: int64. minimum: 0.
         */
        "target_departed_quantity": `${bigint}`;
    }>;
    /**
     * Shape $ (Value): {@link InventoryProvenanceRequest}. When and where the stock moved.
     * Optional; when omitted, the movements record the time Flint received the command as
     * occurred_at and a null source_system. Where and when an inventory event happened: the source
     * system, external actor, and time.
     */
    "provenance"?: InventoryProvenanceRequest;
};
/**
 * Shape $ (Value): {@link InventoryTransferTransitionRequestDepartInput}. The `depart` variant of
 * `InventoryTransferTransitionRequest`.
 */
export type InventoryTransferTransitionRequestDepartInput = {
    /** Shape $ (Value): string.  Value enum: "depart". */
    "action": "depart";
    /**
     * Shape $ (Value): integer string. Transfer version the caller last read. Use an integer
     * string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): Array of object. minItems: 1. maxItems: 100. Shape $[] (Value): object.
     * Shape $[].inventory_transfer_line_id (Required): string. Transfer line being transitioned.
     * minLength: 1. Shape $[].target_departed_quantity (Required): integer string. Cumulative
     * quantity that should have departed the origin. Whole-number quantity; fractional quantities
     * are not supported. Use an integer string (decimal digits), not a floating-point number.
     * Format: int64. minimum: 0.
     */
    "lines": Array<{
        /** Shape $ (Value): string. Transfer line being transitioned. minLength: 1. */
        "inventory_transfer_line_id": string;
        /**
         * Shape $ (Value): integer string. Cumulative quantity that should have departed the
         * origin. Whole-number quantity; fractional quantities are not supported. Use an integer
         * string (decimal digits), not a floating-point number. Format: int64. minimum: 0.
         */
        "target_departed_quantity": `${bigint}` | bigint;
    }>;
    /**
     * Shape $ (Value): {@link InventoryProvenanceRequestInput}. When and where the stock moved.
     * Optional; when omitted, the movements record the time Flint received the command as
     * occurred_at and a null source_system. Where and when an inventory event happened: the source
     * system, external actor, and time.
     */
    "provenance"?: InventoryProvenanceRequestInput;
};
/**
 * Shape $ (Value): {@link InventoryTransferTransitionRequestInput}. The request body for:
 * Transition inventory transfer.
 */
export type InventoryTransferTransitionRequestInput = ((InventoryTransferTransitionRequestDepartInput)
    | (InventoryTransferTransitionRequestReceiveInput)
    | (InventoryTransferTransitionRequestReturnToOriginInput)
    | (InventoryTransferTransitionRequestReportLossInput)
    | (InventoryTransferTransitionRequestCancelInput));
/**
 * Shape $ (Value): {@link InventoryTransferTransitionRequestReceive}. The `receive` variant of
 * `InventoryTransferTransitionRequest`.
 */
export type InventoryTransferTransitionRequestReceive = {
    /** Shape $ (Value): string.  Value enum: "receive". */
    "action": "receive" | (string & {});
    /**
     * Shape $ (Value): integer string. Transfer version the caller last read. Use an integer
     * string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /**
     * Shape $ (Value): Array of object. minItems: 1. maxItems: 100. Shape $[] (Value): object.
     * Shape $[].inventory_transfer_line_id (Required): string. Transfer line being transitioned.
     * minLength: 1. Shape $[].target_received_damaged_quantity (Optional): integer string.
     * Cumulative received quantity classified as damaged. Whole-number quantity; fractional
     * quantities are not supported. Use an integer string (decimal digits), not a floating-point
     * number. Format: int64. minimum: 0. Shape $[].target_received_quality_control_quantity
     * (Optional): integer string. Cumulative received quantity classified for quality control.
     * Whole-number quantity; fractional quantities are not supported. Use an integer string
     * (decimal digits), not a floating-point number. Format: int64. minimum: 0. Shape
     * $[].target_received_quantity (Required): integer string. Cumulative quantity that should
     * have been received at the destination. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64. minimum: 0. Shape $[].target_received_quarantined_quantity (Optional): integer
     * string. Cumulative received quantity classified as quarantined. Whole-number quantity;
     * fractional quantities are not supported. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 0. Shape
     * $[].target_received_sellable_quantity (Optional): integer string. Cumulative received
     * quantity classified as sellable. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64. minimum: 0.
     */
    "lines": Array<({
        /** Shape $ (Value): string. Transfer line being transitioned. minLength: 1. */
        "inventory_transfer_line_id": string;
        /**
         * Shape $ (Value): integer string. Cumulative received quantity classified as damaged.
         * Whole-number quantity; fractional quantities are not supported. Use an integer string
         * (decimal digits), not a floating-point number. Format: int64. minimum: 0.
         */
        "target_received_damaged_quantity"?: `${bigint}`;
        /**
         * Shape $ (Value): integer string. Cumulative received quantity classified for quality
         * control. Whole-number quantity; fractional quantities are not supported. Use an integer
         * string (decimal digits), not a floating-point number. Format: int64. minimum: 0.
         */
        "target_received_quality_control_quantity"?: `${bigint}`;
        /**
         * Shape $ (Value): integer string. Cumulative quantity that should have been received at
         * the destination. Whole-number quantity; fractional quantities are not supported. Use an
         * integer string (decimal digits), not a floating-point number. Format: int64. minimum: 0.
         */
        "target_received_quantity": `${bigint}`;
        /**
         * Shape $ (Value): integer string. Cumulative received quantity classified as quarantined.
         * Whole-number quantity; fractional quantities are not supported. Use an integer string
         * (decimal digits), not a floating-point number. Format: int64. minimum: 0.
         */
        "target_received_quarantined_quantity"?: `${bigint}`;
        /**
         * Shape $ (Value): integer string. Cumulative received quantity classified as sellable.
         * Whole-number quantity; fractional quantities are not supported. Use an integer string
         * (decimal digits), not a floating-point number. Format: int64. minimum: 0.
         */
        "target_received_sellable_quantity"?: `${bigint}`;
    })>;
    /**
     * Shape $ (Value): {@link InventoryProvenanceRequest}. When and where the stock moved.
     * Optional; when omitted, the movements record the time Flint received the command as
     * occurred_at and a null source_system. Where and when an inventory event happened: the source
     * system, external actor, and time.
     */
    "provenance"?: InventoryProvenanceRequest;
};
/**
 * Shape $ (Value): {@link InventoryTransferTransitionRequestReceiveInput}. The `receive` variant
 * of `InventoryTransferTransitionRequest`.
 */
export type InventoryTransferTransitionRequestReceiveInput = {
    /** Shape $ (Value): string.  Value enum: "receive". */
    "action": "receive";
    /**
     * Shape $ (Value): integer string. Transfer version the caller last read. Use an integer
     * string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): Array of object. minItems: 1. maxItems: 100. Shape $[] (Value): object.
     * Shape $[].inventory_transfer_line_id (Required): string. Transfer line being transitioned.
     * minLength: 1. Shape $[].target_received_damaged_quantity (Optional): integer string.
     * Cumulative received quantity classified as damaged. Whole-number quantity; fractional
     * quantities are not supported. Use an integer string (decimal digits), not a floating-point
     * number. Format: int64. minimum: 0. Shape $[].target_received_quality_control_quantity
     * (Optional): integer string. Cumulative received quantity classified for quality control.
     * Whole-number quantity; fractional quantities are not supported. Use an integer string
     * (decimal digits), not a floating-point number. Format: int64. minimum: 0. Shape
     * $[].target_received_quantity (Required): integer string. Cumulative quantity that should
     * have been received at the destination. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64. minimum: 0. Shape $[].target_received_quarantined_quantity (Optional): integer
     * string. Cumulative received quantity classified as quarantined. Whole-number quantity;
     * fractional quantities are not supported. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 0. Shape
     * $[].target_received_sellable_quantity (Optional): integer string. Cumulative received
     * quantity classified as sellable. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64. minimum: 0.
     */
    "lines": Array<({
        /** Shape $ (Value): string. Transfer line being transitioned. minLength: 1. */
        "inventory_transfer_line_id": string;
        /**
         * Shape $ (Value): integer string. Cumulative received quantity classified as damaged.
         * Whole-number quantity; fractional quantities are not supported. Use an integer string
         * (decimal digits), not a floating-point number. Format: int64. minimum: 0.
         */
        "target_received_damaged_quantity"?: `${bigint}` | bigint;
        /**
         * Shape $ (Value): integer string. Cumulative received quantity classified for quality
         * control. Whole-number quantity; fractional quantities are not supported. Use an integer
         * string (decimal digits), not a floating-point number. Format: int64. minimum: 0.
         */
        "target_received_quality_control_quantity"?: `${bigint}` | bigint;
        /**
         * Shape $ (Value): integer string. Cumulative quantity that should have been received at
         * the destination. Whole-number quantity; fractional quantities are not supported. Use an
         * integer string (decimal digits), not a floating-point number. Format: int64. minimum: 0.
         */
        "target_received_quantity": `${bigint}` | bigint;
        /**
         * Shape $ (Value): integer string. Cumulative received quantity classified as quarantined.
         * Whole-number quantity; fractional quantities are not supported. Use an integer string
         * (decimal digits), not a floating-point number. Format: int64. minimum: 0.
         */
        "target_received_quarantined_quantity"?: `${bigint}` | bigint;
        /**
         * Shape $ (Value): integer string. Cumulative received quantity classified as sellable.
         * Whole-number quantity; fractional quantities are not supported. Use an integer string
         * (decimal digits), not a floating-point number. Format: int64. minimum: 0.
         */
        "target_received_sellable_quantity"?: `${bigint}` | bigint;
    })>;
    /**
     * Shape $ (Value): {@link InventoryProvenanceRequestInput}. When and where the stock moved.
     * Optional; when omitted, the movements record the time Flint received the command as
     * occurred_at and a null source_system. Where and when an inventory event happened: the source
     * system, external actor, and time.
     */
    "provenance"?: InventoryProvenanceRequestInput;
};
/**
 * Shape $ (Value): {@link InventoryTransferTransitionRequestReportLoss}. The `report_loss` variant
 * of `InventoryTransferTransitionRequest`.
 */
export type InventoryTransferTransitionRequestReportLoss = {
    /** Shape $ (Value): string.  Value enum: "report_loss". */
    "action": "report_loss" | (string & {});
    /**
     * Shape $ (Value): integer string. Transfer version the caller last read. Use an integer
     * string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /**
     * Shape $ (Value): Array of object. minItems: 1. maxItems: 100. Shape $[] (Value): object.
     * Shape $[].inventory_transfer_line_id (Required): string. Transfer line being transitioned.
     * minLength: 1. Shape $[].target_lost_quantity (Required): integer string. Cumulative quantity
     * that should be recorded as lost in transit. Whole-number quantity; fractional quantities are
     * not supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64. minimum: 0.
     */
    "lines": Array<{
        /** Shape $ (Value): string. Transfer line being transitioned. minLength: 1. */
        "inventory_transfer_line_id": string;
        /**
         * Shape $ (Value): integer string. Cumulative quantity that should be recorded as lost in
         * transit. Whole-number quantity; fractional quantities are not supported. Use an integer
         * string (decimal digits), not a floating-point number. Format: int64. minimum: 0.
         */
        "target_lost_quantity": `${bigint}`;
    }>;
    /**
     * Shape $ (Value): {@link InventoryProvenanceRequest}. When and where the stock moved.
     * Optional; when omitted, the movements record the time Flint received the command as
     * occurred_at and a null source_system. Where and when an inventory event happened: the source
     * system, external actor, and time.
     */
    "provenance"?: InventoryProvenanceRequest;
};
/**
 * Shape $ (Value): {@link InventoryTransferTransitionRequestReportLossInput}. The `report_loss`
 * variant of `InventoryTransferTransitionRequest`.
 */
export type InventoryTransferTransitionRequestReportLossInput = {
    /** Shape $ (Value): string.  Value enum: "report_loss". */
    "action": "report_loss";
    /**
     * Shape $ (Value): integer string. Transfer version the caller last read. Use an integer
     * string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): Array of object. minItems: 1. maxItems: 100. Shape $[] (Value): object.
     * Shape $[].inventory_transfer_line_id (Required): string. Transfer line being transitioned.
     * minLength: 1. Shape $[].target_lost_quantity (Required): integer string. Cumulative quantity
     * that should be recorded as lost in transit. Whole-number quantity; fractional quantities are
     * not supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64. minimum: 0.
     */
    "lines": Array<{
        /** Shape $ (Value): string. Transfer line being transitioned. minLength: 1. */
        "inventory_transfer_line_id": string;
        /**
         * Shape $ (Value): integer string. Cumulative quantity that should be recorded as lost in
         * transit. Whole-number quantity; fractional quantities are not supported. Use an integer
         * string (decimal digits), not a floating-point number. Format: int64. minimum: 0.
         */
        "target_lost_quantity": `${bigint}` | bigint;
    }>;
    /**
     * Shape $ (Value): {@link InventoryProvenanceRequestInput}. When and where the stock moved.
     * Optional; when omitted, the movements record the time Flint received the command as
     * occurred_at and a null source_system. Where and when an inventory event happened: the source
     * system, external actor, and time.
     */
    "provenance"?: InventoryProvenanceRequestInput;
};
/**
 * Shape $ (Value): {@link InventoryTransferTransitionRequestReturnToOrigin}. The
 * `return_to_origin` variant of `InventoryTransferTransitionRequest`.
 */
export type InventoryTransferTransitionRequestReturnToOrigin = {
    /** Shape $ (Value): string.  Value enum: "return_to_origin". */
    "action": "return_to_origin" | (string & {});
    /**
     * Shape $ (Value): integer string. Transfer version the caller last read. Use an integer
     * string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /**
     * Shape $ (Value): Array of object. minItems: 1. maxItems: 100. Shape $[] (Value): object.
     * Shape $[].inventory_transfer_line_id (Required): string. Transfer line being transitioned.
     * minLength: 1. Shape $[].target_returned_quantity (Required): integer string. Cumulative
     * quantity that should have returned to the origin. Whole-number quantity; fractional
     * quantities are not supported. Use an integer string (decimal digits), not a floating-point
     * number. Format: int64. minimum: 0.
     */
    "lines": Array<{
        /** Shape $ (Value): string. Transfer line being transitioned. minLength: 1. */
        "inventory_transfer_line_id": string;
        /**
         * Shape $ (Value): integer string. Cumulative quantity that should have returned to the
         * origin. Whole-number quantity; fractional quantities are not supported. Use an integer
         * string (decimal digits), not a floating-point number. Format: int64. minimum: 0.
         */
        "target_returned_quantity": `${bigint}`;
    }>;
    /**
     * Shape $ (Value): {@link InventoryProvenanceRequest}. When and where the stock moved.
     * Optional; when omitted, the movements record the time Flint received the command as
     * occurred_at and a null source_system. Where and when an inventory event happened: the source
     * system, external actor, and time.
     */
    "provenance"?: InventoryProvenanceRequest;
};
/**
 * Shape $ (Value): {@link InventoryTransferTransitionRequestReturnToOriginInput}. The
 * `return_to_origin` variant of `InventoryTransferTransitionRequest`.
 */
export type InventoryTransferTransitionRequestReturnToOriginInput = {
    /** Shape $ (Value): string.  Value enum: "return_to_origin". */
    "action": "return_to_origin";
    /**
     * Shape $ (Value): integer string. Transfer version the caller last read. Use an integer
     * string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): Array of object. minItems: 1. maxItems: 100. Shape $[] (Value): object.
     * Shape $[].inventory_transfer_line_id (Required): string. Transfer line being transitioned.
     * minLength: 1. Shape $[].target_returned_quantity (Required): integer string. Cumulative
     * quantity that should have returned to the origin. Whole-number quantity; fractional
     * quantities are not supported. Use an integer string (decimal digits), not a floating-point
     * number. Format: int64. minimum: 0.
     */
    "lines": Array<{
        /** Shape $ (Value): string. Transfer line being transitioned. minLength: 1. */
        "inventory_transfer_line_id": string;
        /**
         * Shape $ (Value): integer string. Cumulative quantity that should have returned to the
         * origin. Whole-number quantity; fractional quantities are not supported. Use an integer
         * string (decimal digits), not a floating-point number. Format: int64. minimum: 0.
         */
        "target_returned_quantity": `${bigint}` | bigint;
    }>;
    /**
     * Shape $ (Value): {@link InventoryProvenanceRequestInput}. When and where the stock moved.
     * Optional; when omitted, the movements record the time Flint received the command as
     * occurred_at and a null source_system. Where and when an inventory event happened: the source
     * system, external actor, and time.
     */
    "provenance"?: InventoryProvenanceRequestInput;
};
export type InventoryTransfersCreateInput = {
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link CreateInventoryTransferRequestInput}. The request body for: Create
     * inventory transfer.
     */
    "body": InputValue<CreateInventoryTransferRequestInput>;
};
export type InventoryTransfersGetInput = {
    /** Shape $ (Value): string. */
    "inventory_transfer_id": InputValue<string>;
};
export type InventoryTransfersListInput = {
    /** Shape $ (Value): integer. minimum: 1. maximum: 100. Default: 20. */
    "page_size"?: InputValue<number>;
    /** Shape $ (Value): string. */
    "page_token"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "inventory_item_id"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "origin_location_id"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "destination_location_id"?: InputValue<string>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "draft", "in_transit",
     * "partially_resolved", "closed". Shape $[] (Value): string. Value enum: "draft",
     * "in_transit", "partially_resolved", "closed".
     */
    "status"?: InputValue<Array<"draft" | "in_transit" | "partially_resolved" | "closed">>;
    /** Shape $ (Value): string. */
    "idempotency_key"?: InputValue<string>;
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "external_reference_id"?: InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "query"?: InputValue<string>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "received", "canceled",
     * "received_with_cancellation", "returned", "lost", "mixed". Shape $[] (Value): string. Value
     * enum: "received", "canceled", "received_with_cancellation", "returned", "lost", "mixed".
     */
    "closed_reason"?: InputValue<Array<"received" | "canceled" | "received_with_cancellation" | "returned" | "lost" | "mixed">>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "departed_after"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "departed_before"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "received_after"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "received_before"?: InputValue<string | globalThis.Date>;
};
export type InventoryTransfersTransitionInput = {
    /** Shape $ (Value): string. */
    "inventory_transfer_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link InventoryTransferTransitionRequestInput}. The request body for:
     * Transition inventory transfer.
     */
    "body": InputValue<InventoryTransferTransitionRequestInput>;
};
export type InventoryTransfersUpdateInput = {
    /** Shape $ (Value): string. */
    "inventory_transfer_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link UpdateInventoryTransferRequestInput}. The request body for: Update
     * inventory transfer.
     */
    "body": InputValue<UpdateInventoryTransferRequestInput>;
};
/** Shape $ (Value): {@link Invoice}. A bill issued to a customer. */
export type Invoice = {
    /**
     * Shape $ (Value): Array of string. Additional recipients copied on the invoice email and
     * every reminder. Shape $[] (Value): string.
     */
    "cc_emails": Array<string>;
    /**
     * Shape $ (Value): string. When the current closed interval began. Cleared when status returns
     * to open or partially_paid. A direct move between closed statuses preserves this timestamp.
     * Format: date-time.
     */
    "closed_at"?: string;
    /**
     * Shape $ (Value): {@link InvoiceCollection}. How this invoice is collected, resolved when the
     * draft is written. Send this object back when updating its collection policy. The invoice
     * collection policy resolved at write time. The object can be sent back when updating a draft.
     */
    "collection": InvoiceCollection;
    /**
     * Shape $ (Value): string. Whether collection is blocked. While it is inventory_blocked,
     * collection attempts return INVOICE_COLLECTION_BLOCKED. Value enum: "none",
     * "inventory_blocked", "resolved".
     */
    "collection_block_status": "none" | "inventory_blocked" | "resolved" | (string & {});
    /** Shape $ (Value): string. When the invoice was created. Format: date-time. */
    "created_at"?: string;
    /**
     * Shape $ (Value): {@link MoneyValue}. Credit note credit allocated to this invoice, minus
     * reversed allocations. Unallocated credit isn't included. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "credit_money": MoneyValue;
    /**
     * Shape $ (Value): {@link MoneyValue}. The part of the balance due now. Without
     * schedule_entries, it equals outstanding_money. With schedule_entries, it is the outstanding
     * amount of the first entry, in schedule order, whose due time has arrived and that still has
     * a balance, or 0 when there is none. Always 0 unless the invoice is open or partially_paid.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "currently_due_money": MoneyValue;
    /**
     * Shape $ (Value): {@link ExpandedCustomerSummary} or null. Summary of the billed customer.
     * Returned only with expand=customer. Shape $.anyOf[1] (Value): {@link
     * ExpandedCustomerSummary}. A customer's summary fields, returned in place of a customer ID
     * when the customer is expanded. Shape $.anyOf[2] (Value): null.
     */
    "customer"?: ((ExpandedCustomerSummary) | (null));
    /**
     * Shape $ (Value): string. Customer billed by this invoice. Absent when the invoice has no
     * customer.
     */
    "customer_id"?: string;
    /**
     * Shape $ (Value): string. How issue delivered the invoice. Value enum: "email",
     * "caller_managed".
     */
    "delivery_mode"?: "email" | "caller_managed" | (string & {});
    /**
     * Shape $ (Value): string. When payment is due. With payment terms, issue sets it from
     * issued_at and the terms, counted in the invoice's timezone. Absent when the invoice has no
     * due date. Format: date-time.
     */
    "due_at"?: string;
    /**
     * Shape $ (Value): string or null. Caller-owned identifier for this resource in an external
     * system. minLength: 1. maxLength: 255.
     */
    "external_reference_id": string | null;
    /**
     * Shape $ (Value): string or null. Fine print at the bottom of the invoice and PDF. It cannot
     * change after issue.
     */
    "footer": string | null;
    /** Shape $ (Value): string. Flint invoice ID. */
    "invoice_id": string;
    /**
     * Shape $ (Value): string. Sequential document number assigned when the invoice is issued.
     * Numbering is per merchant, with test and live mode numbered independently.
     */
    "invoice_number"?: string;
    /**
     * Shape $ (Value): boolean. Whether the invoice is open or partially_paid and past due with a
     * balance remaining. Without schedule_entries, due_at has passed and outstanding_money is
     * above zero; with them, at least one entry is overdue. Computed when the invoice is read.
     */
    "is_overdue": boolean;
    /**
     * Shape $ (Value): string. When the invoice was issued. Absent on a draft. Format: date-time.
     */
    "issued_at"?: string;
    /**
     * Shape $ (Value): {@link MoneyValue}. Late fees assessed after issue, minus waivers,
     * including amounts since paid or written off. Itemized in late_fees. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "late_fee_money": MoneyValue;
    /**
     * Shape $ (Value): Array of {@link InvoiceLateFee}. Late fees assessed on this invoice, each
     * with its paid, waived, written-off, and outstanding amounts. late_fee_money is their
     * assessed total minus waivers. Shape $[] (Value): {@link InvoiceLateFee}. A charge assessed
     * because an invoice payment is overdue.
     */
    "late_fees": Array<InvoiceLateFee>;
    /**
     * Shape $ (Value): string or null. Message to the customer, shown on the invoice. It cannot
     * change after issue.
     */
    "memo": string | null;
    /** Shape $ (Value): string. Merchant that owns this invoice. */
    "merchant_id": string;
    /** Shape $ (Value): Map of string. Caller-owned metadata. Shape $.* (Value): string. */
    "metadata"?: Record<string, string>;
    /**
     * Shape $ (Value): {@link ExpandedOrderSummary} or null. Summary of the backing order.
     * Returned only with expand=order. Shape $.anyOf[1] (Value): {@link ExpandedOrderSummary}. An
     * order's summary fields, including status, payment and refund status, and pricing and
     * settlement amounts, returned when the order is expanded. Shape $.anyOf[2] (Value): null.
     */
    "order"?: ((ExpandedOrderSummary) | (null));
    /**
     * Shape $ (Value): string. The order this invoice bills. Every invoice has one; quick pay
     * creates it.
     */
    "order_id": string;
    /**
     * Shape $ (Value): {@link MoneyValue}. What is still owed: total_money + late_fee_money -
     * paid_money - credit_money - written_off_money, never below zero. 0 on paid, credited,
     * uncollectible, and void invoices; equal to total_money on a draft. Refunds don't change it.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "outstanding_money": MoneyValue;
    /**
     * Shape $ (Value): string. When the invoice most recently became paid. Cleared when status
     * leaves paid and set again on a later paid transition. Format: date-time.
     */
    "paid_at"?: string;
    /**
     * Shape $ (Value): {@link MoneyValue}. Payments collected toward this invoice, online or as
     * recorded manual payments, minus reversed payments, including payments toward late fees.
     * Never below zero. Refunds don't reduce it; they are in refunded_money. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "paid_money": MoneyValue;
    /**
     * Shape $ (Value): {@link InvoicePaymentDue}. The resolved due-date policy. Send this object
     * back when updating the draft; payment_terms captures the term's current revision again. The
     * invoice due-date policy resolved at write time. The object can be sent back when updating a
     * draft.
     */
    "payment_due": InvoicePaymentDue;
    /**
     * Shape $ (Value): {@link InvoicePaymentTermsSnapshot}. The payment term captured on the
     * draft, with its due date rule and late fee policy. Later changes to the payment term don't
     * affect this invoice. The payment terms saved on an invoice: the term's name, version, due
     * date calculation, and late fee policy.
     */
    "payment_terms_snapshot"?: InvoicePaymentTermsSnapshot;
    /** Shape $ (Value): string or null. The buyer's purchase order number. */
    "po_number": string | null;
    /**
     * Shape $ (Value): string. The hosted invoice link where the buyer views and pays the invoice.
     * Present after issue on API reads; webhook payloads leave it out. regenerate-public-link
     * replaces it. Anyone with the link can open the invoice, so treat it as a secret.
     */
    "public_url"?: string;
    /**
     * Shape $ (Value): string or null. Where invoice email goes. Email delivery requires it at
     * issue.
     */
    "recipient_email": string | null;
    /**
     * Shape $ (Value): string or null. Customer-facing reference shown on the invoice and PDF. It
     * cannot change after issue.
     */
    "reference": string | null;
    /**
     * Shape $ (Value): string. How much of the collected money has been refunded. It doesn't
     * change status. Value enum: "none", "partially_refunded", "refunded".
     */
    "refund_status": "none" | "partially_refunded" | "refunded" | (string & {});
    /**
     * Shape $ (Value): {@link MoneyValue}. Money refunded to the buyer after collection. Refunds
     * don't reopen the balance; refund_status summarizes them. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "refunded_money": MoneyValue;
    /**
     * Shape $ (Value): boolean. Whether automatic reminders are paused. Set reminders_paused on
     * PATCH /v1/invoices/{invoice_id} to change it.
     */
    "reminders_paused": boolean;
    /**
     * Shape $ (Value): string. When automatic reminders were paused. Absent while reminders are
     * active. Format: date-time.
     */
    "reminders_paused_at"?: string;
    /**
     * Shape $ (Value): {@link Address}. Where the buyer sends offline payments, shown on the
     * invoice. Defaults to the invoice settings remit-to address. A postal address, as returned on
     * customers, invoices, tax locations, and fulfillment recipients.
     */
    "remit_to_address"?: Address;
    /**
     * Shape $ (Value): Array of {@link InvoiceScheduleEntry}. The payment schedule, in schedule
     * order. Always [] when the invoice has no schedule and is collected in one balance. Shape $[]
     * (Value): {@link InvoiceScheduleEntry}. One payment on an invoice's payment schedule, such as
     * a deposit, installment, or balance, with its due time, amounts, and status.
     */
    "schedule_entries": Array<InvoiceScheduleEntry>;
    /**
     * Shape $ (Value): string or null. When Flint will issue and deliver this draft. Cleared when
     * the draft is issued or voided, or when you send null. Format: date-time.
     */
    "scheduled_issue_at": string | null;
    /**
     * Shape $ (Value): string or null. The calendar service date shown on the invoice, in
     * YYYY-MM-DD format. Format: date.
     */
    "service_date": string | null;
    /**
     * Shape $ (Value): {@link InvoiceSnapshot}. The billing content of the invoice: line items,
     * discounts, charges, tip, tax, and totals. A draft previews the backing order; issue freezes
     * it, and later order changes don't reach an issued invoice. A frozen copy of an issued
     * invoice's content, including line items, charges, discounts, tax identities, and pricing
     * amounts.
     */
    "snapshot"?: InvoiceSnapshot;
    /**
     * Shape $ (Value): string. Current invoice status. paid and credited close the current balance
     * and can reopen to open or partially_paid after a payment or credit allocation reversal;
     * invoice.reopened reports that change. void and uncollectible are final. Refunds change
     * refund_status without reopening the balance. Value enum: "draft", "open", "partially_paid",
     * "paid", "void", "uncollectible", "credited".
     */
    "status": "draft" | "open" | "partially_paid" | "paid" | "void" | "uncollectible" | "credited" | (string & {});
    /**
     * Shape $ (Value): string or null. Subscription of the backing order, copied when the draft is
     * created. Null for orders without a subscription.
     */
    "subscription_id": string | null;
    /**
     * Shape $ (Value): string. IANA time zone for the invoice's calendar dates, such as due dates
     * from payment terms and reminder and late fee day counts. At issue, an invoice without one
     * takes the invoice settings timezone.
     */
    "timezone"?: string;
    /**
     * Shape $ (Value): {@link MoneyValue}. What the issued invoice bills, equal to
     * snapshot.pricing_amounts.total_money. Fixed at issue; a draft previews the backing order
     * total. Late fees are in late_fee_money. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "total_money": MoneyValue;
    /** Shape $ (Value): string. When the invoice was marked uncollectible. Format: date-time. */
    "uncollectible_at"?: string;
    /** Shape $ (Value): string. When the invoice last changed. Format: date-time. */
    "updated_at"?: string;
    /**
     * Shape $ (Value): integer string. Current invoice version. Send this as expected_version when
     * updating the draft. Use an integer string (decimal digits), not a floating-point number.
     * Format: int64. minimum: 1.
     */
    "version": `${bigint}`;
    /**
     * Shape $ (Value): string. When the buyer first opened the invoice through its hosted invoice
     * link. Recorded on a best-effort basis. Format: date-time.
     */
    "viewed_at"?: string;
    /** Shape $ (Value): string. When the invoice was voided. Format: date-time. */
    "voided_at"?: string;
    /**
     * Shape $ (Value): {@link MoneyValue}. The balance written off when the invoice was marked
     * uncollectible, including unpaid late fees. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code.
     */
    "written_off_money": MoneyValue;
};
/**
 * Shape $ (Value): {@link InvoiceActivity}. Read-only invoice history row for timeline rendering
 * and debugging. Detail fields are present only on the activity types their descriptions list. The
 * invoice and the referenced resources remain authoritative for state and money movement.
 */
export type InvoiceActivity = {
    /**
     * Shape $ (Value): string. What happened. other means an activity this API version doesn't
     * describe yet. New values may be added; treat an unrecognized value like `other`. Value enum:
     * "draft_created", "issued", "sent", "delivery_sent", "reminder_sent", "viewed",
     * "payment_attempt_started", "payment_applied", "manual_payment_recorded",
     * "manual_payment_reversed", "refund_succeeded", "voided", "token_regenerated",
     * "collection_blocked", "collection_block_resolved", "updated", "marked_uncollectible",
     * "payment_processing", "issue_failed", "overdue", "reminder_due", "late_fee_due",
     * "late_fee_assessed", "late_fee_waived", "credited", "other".
     */
    "activity_type": "draft_created"
        | "issued"
        | "sent"
        | "delivery_sent"
        | "reminder_sent"
        | "viewed"
        | "payment_attempt_started"
        | "payment_applied"
        | "manual_payment_recorded"
        | "manual_payment_reversed"
        | "refund_succeeded"
        | "voided"
        | "token_regenerated"
        | "collection_blocked"
        | "collection_block_resolved"
        | "updated"
        | "marked_uncollectible"
        | "payment_processing"
        | "issue_failed"
        | "overdue"
        | "reminder_due"
        | "late_fee_due"
        | "late_fee_assessed"
        | "late_fee_waived"
        | "credited"
        | "other"
        | (string & {});
    /**
     * Shape $ (Value): string. Merchant ID of the actor, when actor_type is merchant. Some system
     * activities also carry the merchant ID.
     */
    "actor_id"?: string;
    /**
     * Shape $ (Value): string. Who performed the activity: the merchant (an API key or dashboard
     * user), the buyer, or Flint on a schedule or in response to a payment event. Absent when no
     * actor was recorded. Value enum: "merchant", "buyer", "system".
     */
    "actor_type"?: "merchant" | "buyer" | "system" | (string & {});
    /**
     * Shape $ (Value): {@link MoneyValue}. Amount of the payment, refund, or late fee. Present on
     * payment_applied, manual_payment_recorded, manual_payment_reversed, refund_succeeded,
     * late_fee_assessed, and late_fee_waived, and on updated when a card refund changed or a
     * credit note refund was requested. Monetary amount represented as integer minor units plus an
     * ISO 4217 currency code.
     */
    "amount_money"?: MoneyValue;
    /**
     * Shape $ (Value): string. Delivery channel. Present on delivery_sent and reminder_sent. Value
     * enum: "email".
     */
    "channel"?: "email" | (string & {});
    /**
     * Shape $ (Value): string. Checkout session the buyer paid through. Present on
     * payment_attempt_started for hosted payments.
     */
    "checkout_session_id"?: string;
    /**
     * Shape $ (Value): string. Why collection was blocked or unblocked. Present on
     * collection_blocked and collection_block_resolved. Value enum: "inventory_unavailable",
     * "inventory_restored".
     */
    "collection_block_reason"?: "inventory_unavailable" | "inventory_restored" | (string & {});
    /** Shape $ (Value): string. When the activity happened. Format: date-time. */
    "created_at": string;
    /**
     * Shape $ (Value): {@link MoneyValue}. Total credit applied to the invoice. Present on
     * credited. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "credit_money"?: MoneyValue;
    /**
     * Shape $ (Value): string. Credit note that requested the refund. Present on updated when a
     * credit note refund was requested or changed.
     */
    "credit_note_id"?: string;
    /** Shape $ (Value): string. Human-readable Flint description of the activity. */
    "description": string;
    /**
     * Shape $ (Value): string. Due date that triggered the activity. Present on overdue,
     * reminder_due, and late_fee_due. Format: date-time.
     */
    "due_at"?: string;
    /**
     * Shape $ (Value): string. Public error code of the failed scheduled issue. Present on
     * issue_failed.
     */
    "error_code"?: string;
    /**
     * Shape $ (Value): {@link MoneyValue}. Amount the processing payment is expected to settle.
     * Present on payment_processing. Monetary amount represented as integer minor units plus an
     * ISO 4217 currency code.
     */
    "expected_amount_money"?: MoneyValue;
    /**
     * Shape $ (Value): string. When the processing payment is expected to settle. Present on
     * payment_processing when known. Format: date-time.
     */
    "expected_settlement_at"?: string;
    /** Shape $ (Value): string. Flint invoice activity ID. IDs begin with inevt_. */
    "invoice_activity_id": string;
    /**
     * Shape $ (Value): string. The delivery attempt that sent the email. Present on delivery_sent
     * and reminder_sent.
     */
    "invoice_delivery_attempt_id"?: string;
    /** Shape $ (Value): string. The late fee. Present on late_fee_assessed and late_fee_waived. */
    "invoice_late_fee_id"?: string;
    /**
     * Shape $ (Value): string. The manual payment. Present on manual_payment_recorded and
     * manual_payment_reversed.
     */
    "invoice_manual_payment_id"?: string;
    /**
     * Shape $ (Value): string. The payment attempt. Present on payment_attempt_started and
     * payment_processing.
     */
    "invoice_payment_attempt_id"?: string;
    /**
     * Shape $ (Value): string. Schedule entry the activity applies to. Present on overdue,
     * reminder_due, late_fee_due, late_fee_assessed, and late_fee_waived when the invoice has a
     * payment schedule.
     */
    "invoice_schedule_entry_id"?: string;
    /**
     * Shape $ (Value): string. Payment intent whose funds were applied. Present on
     * payment_applied.
     */
    "payment_intent_id"?: string;
    /**
     * Shape $ (Value): string. Payment rail of the attempt. Present on payment_processing. Value
     * enum: "card", "ach_debit".
     */
    "rail"?: "card" | "ach_debit" | (string & {});
    /**
     * Shape $ (Value): string. Related refund. Present on refund_succeeded, and on updated when a
     * card refund changed or a credit note refund was requested or changed. Read the refund for
     * its current status.
     */
    "refund_id"?: string;
    /**
     * Shape $ (Value): string. Recipient of the email. Present on delivery_sent and reminder_sent.
     */
    "to_email"?: string;
    /**
     * Shape $ (Value): {@link MoneyValue}. Balance written off. Present on marked_uncollectible.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "written_off_money"?: MoneyValue;
};
/** Shape $ (Value): {@link InvoiceActivityListResponse}. A page of `InvoiceActivity` objects. */
export type InvoiceActivityListResponse = {
    /**
     * Shape $ (Value): Array of {@link InvoiceActivity}. Shape $[] (Value): {@link
     * InvoiceActivity}. Read-only invoice history row for timeline rendering and debugging. Detail
     * fields are present only on the activity types their descriptions list. The invoice and the
     * referenced resources remain authoritative for state and money movement.
     */
    "data": Array<InvoiceActivity>;
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
 * Shape $ (Value): {@link InvoiceAutopayRetryPolicy}. When to retry a failed automatic invoice
 * payment, as a list of day offsets.
 */
export type InvoiceAutopayRetryPolicy = {
    /**
     * Shape $ (Value): Array of integer. maxItems: 5. uniqueItems: true. Shape $[] (Value):
     * integer. Format: int32. minimum: 1. maximum: 30.
     */
    "retry_day_offsets": Array<number>;
};
/**
 * Shape $ (Value): {@link InvoiceAutopayRetryPolicyInput}. When to retry a failed automatic
 * invoice payment, as a list of day offsets.
 */
export type InvoiceAutopayRetryPolicyInput = InvoiceAutopayRetryPolicy;
/**
 * Shape $ (Value): {@link InvoiceCheckoutSessionRequest}. The request body for: Create an invoice
 * checkout session for the current buyer; Get or create invoice checkout collection.
 */
export type InvoiceCheckoutSessionRequest = ({
    /** Shape $ (Value): string. minLength: 1. */
    "invoice_schedule_entry_id"?: string;
    /**
     * Shape $ (Value): string. Origin of the page where you render this embedded checkout, such as
     * https://shop.example.com. Only this origin can show the checkout's gift card challenge and
     * receive its result. It does not let the browser call the Flint API. Accepted only when
     * surface is embedded. Use HTTPS and a lowercase DNS hostname. Do not include a path, query,
     * fragment, or default port. In test mode, localhost, names ending in .localhost, and
     * 127.0.0.1 also work over HTTP or HTTPS. minLength: 1. maxLength: 255.
     */
    "page_origin"?: string;
    /**
     * Shape $ (Value): string. Embedded sessions only. Absolute HTTPS URL on your site where Flint
     * sends the buyer after a redirect payment such as Affirm, whatever the outcome; read the
     * session there to show the result. Required when the session offers affirm. It can't contain
     * credentials, a query string, or a fragment. Test mode also accepts http loopback URLs. Up to
     * 2,048 characters. Format: uri. minLength: 1. maxLength: 2048.
     */
    "payment_return_url"?: string;
    /**
     * Shape $ (Value): {@link CheckoutRedirects}. Where hosted checkout sends the buyer. Not
     * allowed when surface is embedded; use payment_return_url.
     */
    "redirects"?: CheckoutRedirects;
    /**
     * Shape $ (Value): string. Where the checkout sends the buyer after paying, such as the
     * invoice's page in the customer account. Limited to 2048 characters (Unicode code points)
     * before trimming surrounding whitespace. It must be an HTTPS address of the merchant's
     * customer account: /{merchant_id} on Flint's account host, the merchant's active custom
     * account domain, or the host of customer_account.merchant_account_url when the merchant hosts
     * the account. HTTP is accepted only for localhost in test mode. Anything else fails with
     * INVALID_RETURN_URL. An alias for redirects.success_url on hosted checkout or
     * payment_return_url on embedded checkout; keep them consistent when sending both. Format:
     * uri. minLength: 1. maxLength: 2048.
     */
    "return_url"?: string;
    /**
     * Shape $ (Value): string. Defaults to hosted. The same surface reuses the open checkout. A
     * different surface replaces it only while no payment is in progress; otherwise the request
     * returns CHECKOUT_SURFACE_CHANGE_NOT_ALLOWED. Default: "hosted". Value enum: "hosted",
     * "embedded".
     */
    "surface"?: "hosted" | "embedded" | (string & {});
});
/**
 * Shape $ (Value): {@link InvoiceCheckoutSessionRequestInput}. The request body for: Create an
 * invoice checkout session for the current buyer; Get or create invoice checkout collection.
 */
export type InvoiceCheckoutSessionRequestInput = ({
    /** Shape $ (Value): string. minLength: 1. */
    "invoice_schedule_entry_id"?: string;
    /**
     * Shape $ (Value): string. Origin of the page where you render this embedded checkout, such as
     * https://shop.example.com. Only this origin can show the checkout's gift card challenge and
     * receive its result. It does not let the browser call the Flint API. Accepted only when
     * surface is embedded. Use HTTPS and a lowercase DNS hostname. Do not include a path, query,
     * fragment, or default port. In test mode, localhost, names ending in .localhost, and
     * 127.0.0.1 also work over HTTP or HTTPS. minLength: 1. maxLength: 255.
     */
    "page_origin"?: string;
    /**
     * Shape $ (Value): string. Embedded sessions only. Absolute HTTPS URL on your site where Flint
     * sends the buyer after a redirect payment such as Affirm, whatever the outcome; read the
     * session there to show the result. Required when the session offers affirm. It can't contain
     * credentials, a query string, or a fragment. Test mode also accepts http loopback URLs. Up to
     * 2,048 characters. Format: uri. minLength: 1. maxLength: 2048.
     */
    "payment_return_url"?: string;
    /**
     * Shape $ (Value): {@link CheckoutRedirectsRequestInput}. Where hosted checkout sends the
     * buyer. Not allowed when surface is embedded; use payment_return_url.
     */
    "redirects"?: CheckoutRedirectsRequestInput;
    /**
     * Shape $ (Value): string. Where the checkout sends the buyer after paying, such as the
     * invoice's page in the customer account. Limited to 2048 characters (Unicode code points)
     * before trimming surrounding whitespace. It must be an HTTPS address of the merchant's
     * customer account: /{merchant_id} on Flint's account host, the merchant's active custom
     * account domain, or the host of customer_account.merchant_account_url when the merchant hosts
     * the account. HTTP is accepted only for localhost in test mode. Anything else fails with
     * INVALID_RETURN_URL. An alias for redirects.success_url on hosted checkout or
     * payment_return_url on embedded checkout; keep them consistent when sending both. Format:
     * uri. minLength: 1. maxLength: 2048.
     */
    "return_url"?: string;
    /**
     * Shape $ (Value): string. Defaults to hosted. The same surface reuses the open checkout. A
     * different surface replaces it only while no payment is in progress; otherwise the request
     * returns CHECKOUT_SURFACE_CHANGE_NOT_ALLOWED. Default: "hosted". Value enum: "hosted",
     * "embedded".
     */
    "surface"?: "hosted" | "embedded";
});
/**
 * Shape $ (Value): {@link InvoiceCheckoutSessionResponse}. A response containing
 * `InvoiceCheckoutSessionResult` data.
 */
export type InvoiceCheckoutSessionResponse = {
    /**
     * Shape $ (Value): {@link InvoiceCheckoutSessionResult}. The invoice is the primary resource,
     * with its checkout session, credential, and any invoice payment attempt.
     */
    "data": InvoiceCheckoutSessionResult;
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
 * Shape $ (Value): {@link InvoiceCheckoutSessionResult}. The invoice is the primary resource, with
 * its checkout session, credential, and any invoice payment attempt.
 */
export type InvoiceCheckoutSessionResult = {
    /** Shape $ (Value): string. */
    "checkout_auth_token": string;
    /**
     * Shape $ (Value): {@link CheckoutSession}. A session in which a buyer completes an order's
     * payment.
     */
    "checkout_session": CheckoutSession;
    /** Shape $ (Value): {@link Invoice}. A bill issued to a customer. */
    "invoice": Invoice;
    /**
     * Shape $ (Value): {@link InvoicePaymentAttempt}. An attempt to collect payment for an
     * invoice.
     */
    "invoice_payment_attempt"?: InvoicePaymentAttempt;
};
/**
 * Shape $ (Value): {@link InvoiceCollection}. The invoice collection policy resolved at write
 * time. The object can be sent back when updating a draft.
 */
export type InvoiceCollection = ({
    /** Shape $ (Value): string.  Value enum: "buyer_initiated", "automatic", "external". */
    "mode": "buyer_initiated" | "automatic" | "external" | (string & {});
    /** Shape $ (Value): string or null. */
    "payment_method_id"?: string | null;
    /**
     * Shape $ (Value): {@link InvoicePaymentPolicy}. Which payment options an invoice accepts, any
     * per-option total limits, and whether to show a cost comparison.
     */
    "payment_policy"?: InvoicePaymentPolicy;
})
    & ((Exclude<InvoiceCollectionBuyerInitiated & object, readonly unknown[]>)
    | (Exclude<InvoiceCollectionAutomatic & object, readonly unknown[]>)
    | (Exclude<InvoiceCollectionExternal & object, readonly unknown[]>)
    | (Record<string, unknown>));
/**
 * Shape $ (Value): {@link InvoiceCollectionAutomatic}. The `automatic` variant of
 * `InvoiceCollection`.
 */
export type InvoiceCollectionAutomatic = ({
    /** Shape $ (Value): string.  Value enum: "automatic". */
    "mode": "automatic" | (string & {});
    /** Shape $ (Value): string or null. */
    "payment_method_id": string | null;
    /**
     * Shape $ (Value): {@link InvoicePaymentPolicy}. Which payment options an invoice accepts, any
     * per-option total limits, and whether to show a cost comparison.
     */
    "payment_policy"?: InvoicePaymentPolicy;
})
    & (({
    /** Shape $ (Value): string.  Value enum: "automatic". */
    "mode"?: "automatic" | (string & {});
    /** Shape $ (Value): string or null. */
    "payment_method_id": string | null;
}));
/**
 * Shape $ (Value): {@link InvoiceCollectionBuyerInitiated}. The `buyer_initiated` variant of
 * `InvoiceCollection`.
 */
export type InvoiceCollectionBuyerInitiated = ({
    /** Shape $ (Value): string.  Value enum: "buyer_initiated". */
    "mode": "buyer_initiated" | (string & {});
    /** Shape $ (Value): string or null. */
    "payment_method_id"?: string | null;
    /**
     * Shape $ (Value): {@link InvoicePaymentPolicy}. Which payment options an invoice accepts, any
     * per-option total limits, and whether to show a cost comparison.
     */
    "payment_policy": InvoicePaymentPolicy;
})
    & (({
    /** Shape $ (Value): string.  Value enum: "buyer_initiated". */
    "mode"?: "buyer_initiated" | (string & {});
    /**
     * Shape $ (Value): {@link InvoicePaymentPolicy}. Which payment options an invoice accepts, any
     * per-option total limits, and whether to show a cost comparison.
     */
    "payment_policy": InvoicePaymentPolicy;
}));
/**
 * Shape $ (Value): {@link InvoiceCollectionExternal}. The `external` variant of
 * `InvoiceCollection`.
 */
export type InvoiceCollectionExternal = ({
    /** Shape $ (Value): string.  Value enum: "external". */
    "mode": "external" | (string & {});
    /** Shape $ (Value): string or null. */
    "payment_method_id"?: string | null;
    /**
     * Shape $ (Value): {@link InvoicePaymentPolicy}. Which payment options an invoice accepts, any
     * per-option total limits, and whether to show a cost comparison.
     */
    "payment_policy"?: InvoicePaymentPolicy;
})
    & (({
    /** Shape $ (Value): string.  Value enum: "external". */
    "mode"?: "external" | (string & {});
}));
/**
 * Shape $ (Value): {@link InvoiceCollectionInputAutomatic}. The `automatic` variant of
 * `InvoiceCollectionInput`.
 */
export type InvoiceCollectionInputAutomatic = ({
    /**
     * Shape $ (Value): string. merchant_default resolves the merchant setting at write time. Reads
     * return the resolved mode. Value enum: "automatic".
     */
    "mode": "automatic" | (string & {});
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1. */
    "payment_method_id"?: string | null;
    /**
     * Shape $ (Value): {@link InvoicePaymentPolicy}. Which payment options an invoice accepts, any
     * per-option total limits, and whether to show a cost comparison.
     */
    "payment_policy"?: InvoicePaymentPolicy;
})
    & (({
    /** Shape $ (Value): string.  Value enum: "automatic". */
    "mode"?: "automatic" | (string & {});
}));
/**
 * Shape $ (Value): {@link InvoiceCollectionInputAutomaticInput}. The `automatic` variant of
 * `InvoiceCollectionInput`.
 */
export type InvoiceCollectionInputAutomaticInput = ({
    /**
     * Shape $ (Value): string. merchant_default resolves the merchant setting at write time. Reads
     * return the resolved mode. Value enum: "automatic".
     */
    "mode": "automatic";
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1. */
    "payment_method_id"?: string | null;
    /**
     * Shape $ (Value): {@link InvoicePaymentPolicyInput}. Which payment options an invoice
     * accepts, any per-option total limits, and whether to show a cost comparison.
     */
    "payment_policy"?: InvoicePaymentPolicyInput;
})
    & (({
    /** Shape $ (Value): string.  Value enum: "automatic". */
    "mode"?: "automatic";
})
    & (({
    "payment_policy"?: never;
})));
/**
 * Shape $ (Value): {@link InvoiceCollectionInputBuyerInitiated}. The `buyer_initiated` variant of
 * `InvoiceCollectionInput`.
 */
export type InvoiceCollectionInputBuyerInitiated = ({
    /**
     * Shape $ (Value): string. merchant_default resolves the merchant setting at write time. Reads
     * return the resolved mode. Value enum: "buyer_initiated".
     */
    "mode": "buyer_initiated" | (string & {});
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1. */
    "payment_method_id"?: string | null;
    /**
     * Shape $ (Value): {@link InvoicePaymentPolicy}. Which payment options an invoice accepts, any
     * per-option total limits, and whether to show a cost comparison.
     */
    "payment_policy"?: InvoicePaymentPolicy;
})
    & (({
    /** Shape $ (Value): string.  Value enum: "buyer_initiated". */
    "mode"?: "buyer_initiated" | (string & {});
}));
/**
 * Shape $ (Value): {@link InvoiceCollectionInputBuyerInitiatedInput}. The `buyer_initiated`
 * variant of `InvoiceCollectionInput`.
 */
export type InvoiceCollectionInputBuyerInitiatedInput = ({
    /**
     * Shape $ (Value): string. merchant_default resolves the merchant setting at write time. Reads
     * return the resolved mode. Value enum: "buyer_initiated".
     */
    "mode": "buyer_initiated";
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1. */
    "payment_method_id"?: string | null;
    /**
     * Shape $ (Value): {@link InvoicePaymentPolicyInput}. Which payment options an invoice
     * accepts, any per-option total limits, and whether to show a cost comparison.
     */
    "payment_policy"?: InvoicePaymentPolicyInput;
})
    & (({
    /** Shape $ (Value): string.  Value enum: "buyer_initiated". */
    "mode"?: "buyer_initiated";
})
    & (({
    "payment_method_id"?: never;
})));
/**
 * Shape $ (Value): {@link InvoiceCollectionInputExternalInput}. The `external` variant of
 * `InvoiceCollectionInput`.
 */
export type InvoiceCollectionInputExternalInput = ({
    /**
     * Shape $ (Value): string. merchant_default resolves the merchant setting at write time. Reads
     * return the resolved mode. Value enum: "external".
     */
    "mode": "external";
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1. */
    "payment_method_id"?: string | null;
    /**
     * Shape $ (Value): {@link InvoicePaymentPolicyInput}. Which payment options an invoice
     * accepts, any per-option total limits, and whether to show a cost comparison.
     */
    "payment_policy"?: InvoicePaymentPolicyInput;
})
    & (({
    /** Shape $ (Value): string.  Value enum: "external". */
    "mode"?: "external";
})
    & (({
    "payment_method_id"?: never;
}) & ({
    "payment_policy"?: never;
})));
/**
 * Shape $ (Value): {@link InvoiceCollectionInputMerchantDefault}. The `merchant_default` variant
 * of `InvoiceCollectionInput`.
 */
export type InvoiceCollectionInputMerchantDefault = ({
    /**
     * Shape $ (Value): string. merchant_default resolves the merchant setting at write time. Reads
     * return the resolved mode. Value enum: "merchant_default".
     */
    "mode": "merchant_default" | (string & {});
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1. */
    "payment_method_id"?: string | null;
    /**
     * Shape $ (Value): {@link InvoicePaymentPolicy}. Which payment options an invoice accepts, any
     * per-option total limits, and whether to show a cost comparison.
     */
    "payment_policy"?: InvoicePaymentPolicy;
})
    & (({
    /** Shape $ (Value): string.  Value enum: "merchant_default". */
    "mode"?: "merchant_default" | (string & {});
}));
/**
 * Shape $ (Value): {@link InvoiceCollectionInputMerchantDefaultInput}. The `merchant_default`
 * variant of `InvoiceCollectionInput`.
 */
export type InvoiceCollectionInputMerchantDefaultInput = ({
    /**
     * Shape $ (Value): string. merchant_default resolves the merchant setting at write time. Reads
     * return the resolved mode. Value enum: "merchant_default".
     */
    "mode": "merchant_default";
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1. */
    "payment_method_id"?: string | null;
    /**
     * Shape $ (Value): {@link InvoicePaymentPolicyInput}. Which payment options an invoice
     * accepts, any per-option total limits, and whether to show a cost comparison.
     */
    "payment_policy"?: InvoicePaymentPolicyInput;
})
    & (({
    /** Shape $ (Value): string.  Value enum: "merchant_default". */
    "mode"?: "merchant_default";
})
    & (({
    "payment_method_id"?: never;
}) & ({
    "payment_policy"?: never;
})));
/**
 * Shape $ (Value): {@link InvoiceCollectionRequest}. How an invoice is collected, used when
 * creating or updating an invoice: a `mode`, an optional saved payment method, and a payment
 * policy.
 */
export type InvoiceCollectionRequest = ({
    /**
     * Shape $ (Value): string. merchant_default resolves the merchant setting at write time. Reads
     * return the resolved mode. Value enum: "merchant_default", "buyer_initiated", "automatic",
     * "external".
     */
    "mode": "merchant_default" | "buyer_initiated" | "automatic" | "external" | (string & {});
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1. */
    "payment_method_id"?: string | null;
    /**
     * Shape $ (Value): {@link InvoicePaymentPolicy}. Which payment options an invoice accepts, any
     * per-option total limits, and whether to show a cost comparison.
     */
    "payment_policy"?: InvoicePaymentPolicy;
})
    & ((Exclude<InvoiceCollectionInputMerchantDefault & object, readonly unknown[]>)
    | (Exclude<InvoiceCollectionInputBuyerInitiated & object, readonly unknown[]>)
    | (Exclude<InvoiceCollectionInputAutomatic & object, readonly unknown[]>)
    | (Exclude<InvoiceCollectionExternal & object, readonly unknown[]>)
    | (Record<string, unknown>));
/**
 * Shape $ (Value): {@link InvoiceCollectionRequestInput}. How an invoice is collected, used when
 * creating or updating an invoice: a `mode`, an optional saved payment method, and a payment
 * policy.
 */
export type InvoiceCollectionRequestInput = ({
    /**
     * Shape $ (Value): string. merchant_default resolves the merchant setting at write time. Reads
     * return the resolved mode. Value enum: "merchant_default", "buyer_initiated", "automatic",
     * "external".
     */
    "mode": "merchant_default" | "buyer_initiated" | "automatic" | "external";
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1. */
    "payment_method_id"?: string | null;
    /**
     * Shape $ (Value): {@link InvoicePaymentPolicyInput}. Which payment options an invoice
     * accepts, any per-option total limits, and whether to show a cost comparison.
     */
    "payment_policy"?: InvoicePaymentPolicyInput;
})
    & ((Exclude<InvoiceCollectionInputMerchantDefaultInput & object, readonly unknown[]>)
    | (Exclude<InvoiceCollectionInputBuyerInitiatedInput & object, readonly unknown[]>)
    | (Exclude<InvoiceCollectionInputAutomaticInput & object, readonly unknown[]>)
    | (Exclude<InvoiceCollectionInputExternalInput & object, readonly unknown[]>));
/**
 * Shape $ (Value): {@link InvoiceDeliveryAttempt}. One attempt to deliver an invoice by email,
 * either the original send or a reminder, with its recipients and status.
 */
export type InvoiceDeliveryAttempt = ({
    /** Shape $ (Value): Array of string. Shape $[] (Value): string. */
    "cc_emails"?: Array<string>;
    /** Shape $ (Value): string.  Value enum: "email". */
    "channel": "email" | (string & {});
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "created_at"?: string;
    /** Shape $ (Value): string.  Value enum: "send", "reminder". */
    "delivery_type": "send" | "reminder" | (string & {});
    /**
     * Shape $ (Value): string. Present only when status is failed. Legacy failed attempts without
     * a stored reason return rejected. Value enum: "rejected", "delivery_unknown", "canceled".
     */
    "failure_reason"?: "rejected" | "delivery_unknown" | "canceled" | (string & {});
    /** Shape $ (Value): string. */
    "invoice_delivery_attempt_id": string;
    /** Shape $ (Value): string. ID of the invoice this delivery attempt belongs to. */
    "invoice_id": string;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "sent_at"?: string;
    /** Shape $ (Value): string.  Value enum: "pending", "sent", "failed", "suppressed". */
    "status": "pending" | "sent" | "failed" | "suppressed" | (string & {});
    /**
     * Shape $ (Value): string. Present only when status is suppressed. Value enum:
     * "merchant_managed_email", "recipient_unsubscribed".
     */
    "suppression_reason"?: "merchant_managed_email" | "recipient_unsubscribed" | (string & {});
    /**
     * Shape $ (Value): string or null. Address the invoice was sent to. `null` after the customer
     * was deleted.
     */
    "to_email": string | null;
});
/**
 * Shape $ (Value): {@link InvoiceDeliveryAttemptListResponse}. A page of `InvoiceDeliveryAttempt`
 * objects.
 */
export type InvoiceDeliveryAttemptListResponse = {
    /**
     * Shape $ (Value): Array of {@link InvoiceDeliveryAttempt}. Shape $[] (Value): {@link
     * InvoiceDeliveryAttempt}. One attempt to deliver an invoice by email, either the original
     * send or a reminder, with its recipients and status.
     */
    "data": Array<InvoiceDeliveryAttempt>;
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
 * Shape $ (Value): {@link InvoiceDiscount}. A discount applied to an invoice, with its source, the
 * discount amount, the amount actually applied, and any promotion.
 */
export type InvoiceDiscount = {
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "applied_money": MoneyValue;
    /** Shape $ (Value): string. */
    "customer_facing_name"?: string;
    /** Shape $ (Value): string.  Value enum: "order", "line_item". */
    "discount_class"?: "order" | "line_item" | (string & {});
    /** Shape $ (Value): string. */
    "promotion_code"?: string;
    /** Shape $ (Value): string. */
    "promotion_id"?: string;
    /** Shape $ (Value): string.  Value enum: "manual", "promotion", "plan_change_credit". */
    "source": "manual" | "promotion" | "plan_change_credit" | (string & {});
};
/**
 * Shape $ (Value): {@link InvoiceDocumentRow}. One row of an invoice document, such as a subtotal,
 * discount, tax, late fee, payment, or amount due, with its amount.
 */
export type InvoiceDocumentRow = {
    /**
     * Shape $ (Value): {@link MoneyValue}. The row's signed amount. Informational rows do not
     * contribute to the sum. Signed monetary amount represented as integer minor units plus an ISO
     * 4217 currency code.
     */
    "amount_money": MoneyValue;
    /** Shape $ (Value): string. Number of the credit note a credit note row names. */
    "credit_note_number"?: string;
    /**
     * Shape $ (Value): boolean. Whether the row is shown for information and left out of the sum,
     * such as tax already included in prices, tax not applied, or money refunded to the buyer. A
     * closing `total` or `amount_due` row is informational and states the sum. An opening or sole
     * `total` row contributes to the sum.
     */
    "is_informational": boolean;
    /**
     * Shape $ (Value): string. Value enum: "subtotal", "discount", "charge", "tax", "tip",
     * "total", "late_fee", "late_fee_waived", "payments", "credit_note", "credits", "written_off",
     * "amount_due", "refunded".
     */
    "kind": "subtotal"
        | "discount"
        | "charge"
        | "tax"
        | "tip"
        | "total"
        | "late_fee"
        | "late_fee_waived"
        | "payments"
        | "credit_note"
        | "credits"
        | "written_off"
        | "amount_due"
        | "refunded"
        | (string & {});
    /** Shape $ (Value): string. Discount, charge, or tax jurisdiction name. */
    "name"?: string;
    /**
     * Shape $ (Value): string. When the late fee was assessed or waived, or the credit note
     * issued. Format: date-time.
     */
    "occurred_at"?: string;
    /**
     * Shape $ (Value): number. Rate of a percent-based charge or a tax row, in percent units.
     * multipleOf: 0.0001.
     */
    "percent"?: number;
    /** Shape $ (Value): string. Promotion code of a discount row. */
    "promotion_code"?: string;
    /** Shape $ (Value): string.  Value enum: "sales_tax", "use_tax", "retail_delivery_fee". */
    "tax_type"?: "sales_tax" | "use_tax" | "retail_delivery_fee" | (string & {});
    /**
     * Shape $ (Value): string. Value enum: "standard_rated", "not_taxable", "customer_exempt",
     * "tax_disabled", "location_required", "calculation_incomplete".
     */
    "taxability_reason"?: "standard_rated"
        | "not_taxable"
        | "customer_exempt"
        | "tax_disabled"
        | "location_required"
        | "calculation_incomplete"
        | (string & {});
    /**
     * Shape $ (Value): {@link MoneyValue}. Taxable amount of a tax row. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "taxable_money"?: MoneyValue;
};
/**
 * Shape $ (Value): {@link InvoiceLateFee}. A charge assessed because an invoice payment is
 * overdue.
 */
export type InvoiceLateFee = {
    /**
     * Shape $ (Value): {@link MoneyValue}. The assessed fee: the policy's fixed amount, or its
     * percent of base_outstanding_money. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
    /** Shape $ (Value): string. When the fee was assessed. Format: date-time. */
    "assessed_at": string;
    /**
     * Shape $ (Value): {@link MoneyValue}. The unpaid balance the fee was calculated from,
     * excluding late fees, captured at assessment. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code.
     */
    "base_outstanding_money": MoneyValue;
    /** Shape $ (Value): string. Flint invoice late fee ID. */
    "invoice_late_fee_id": string;
    /**
     * Shape $ (Value): string. The schedule entry this fee applies to. Absent on an invoice
     * without a schedule, where the fee applies to the whole invoice. Each invoice, or each entry,
     * takes at most one fee, even after a waiver.
     */
    "invoice_schedule_entry_id"?: string;
    /**
     * Shape $ (Value): {@link InvoiceLateFeePolicy} or null. The late fee policy from
     * payment_terms_snapshot, copied when the fee was assessed. Shape $.anyOf[1] (Value): {@link
     * InvoiceLateFeePolicy}. A late fee for overdue invoices: a fixed amount or a percentage, a
     * grace period in days, and whether Flint applies it automatically. Shape $.anyOf[2] (Value):
     * null.
     */
    "late_fee_policy": ((InvoiceLateFeePolicy) | (null) | (unknown));
    /**
     * Shape $ (Value): {@link MoneyValue}. What is still owed on this fee: amount_money -
     * paid_money - waived_money - written_off_money, never below zero. Monetary amount represented
     * as integer minor units plus an ISO 4217 currency code.
     */
    "outstanding_money": MoneyValue;
    /**
     * Shape $ (Value): {@link MoneyValue}. Payments applied to this fee, minus reversed payments.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "paid_money": MoneyValue;
    /**
     * Shape $ (Value): string. When the fee was waived. Absent unless it was waived. Format:
     * date-time.
     */
    "waived_at"?: string;
    /**
     * Shape $ (Value): {@link MoneyValue}. The amount waived. A waiver removes the fee's whole
     * outstanding amount at that time, so it is less than amount_money when part of the fee was
     * already paid. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code.
     */
    "waived_money": MoneyValue;
    /** Shape $ (Value): string. Why the fee was waived, as given when waiving it. */
    "waiver_reason_message"?: string;
    /**
     * Shape $ (Value): {@link MoneyValue}. The part of this fee written off when the invoice was
     * marked uncollectible. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "written_off_money": MoneyValue;
};
/**
 * Shape $ (Value): {@link InvoiceLateFeePolicy}. A late fee for overdue invoices: a fixed amount
 * or a percentage, a grace period in days, and whether Flint applies it automatically.
 */
export type InvoiceLateFeePolicy = ({
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "amount_money"?: MoneyValue;
    /**
     * Shape $ (Value): string. Whether Flint applies the one-time fee automatically after the
     * grace period. Omission defaults to manual. Frozen when the invoice is issued. Default:
     * "manual". Value enum: "manual", "automatic".
     */
    "application_mode"?: "manual" | "automatic" | (string & {});
    /** Shape $ (Value): integer. Format: int32. minimum: 0. maximum: 365. */
    "grace_period_days": number;
    /**
     * Shape $ (Value): number. Percentage applied to the fee base_outstanding_money. maximum: 100.
     * exclusiveMinimum: 0. multipleOf: 0.0001.
     */
    "percent"?: number;
    /** Shape $ (Value): string.  Value enum: "fixed", "percentage". */
    "type": "fixed" | "percentage" | (string & {});
})
    & ((Exclude<InvoiceLateFeePolicyFixed & object, readonly unknown[]>)
    | (Exclude<InvoiceLateFeePolicyPercentage & object, readonly unknown[]>)
    | (Record<string, unknown>));
/**
 * Shape $ (Value): {@link InvoiceLateFeePolicyFixed}. The `fixed` variant of
 * `InvoiceLateFeePolicy`.
 */
export type InvoiceLateFeePolicyFixed = ({
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
    /**
     * Shape $ (Value): string. Whether Flint applies the one-time fee automatically after the
     * grace period. Omission defaults to manual. Frozen when the invoice is issued. Default:
     * "manual". Value enum: "manual", "automatic".
     */
    "application_mode"?: "manual" | "automatic" | (string & {});
    /** Shape $ (Value): integer. Format: int32. minimum: 0. maximum: 365. */
    "grace_period_days": number;
    /**
     * Shape $ (Value): number. Percentage applied to the fee base_outstanding_money. maximum: 100.
     * exclusiveMinimum: 0. multipleOf: 0.0001.
     */
    "percent"?: number;
    /** Shape $ (Value): string.  Value enum: "fixed". */
    "type": "fixed" | (string & {});
})
    & (({
    /** Shape $ (Value): string.  Value enum: "fixed". */
    "type": "fixed" | (string & {});
    /** Shape $ (Value): integer. Format: int32. minimum: 0. maximum: 365. */
    "grace_period_days": number;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
}));
/**
 * Shape $ (Value): {@link InvoiceLateFeePolicyFixedInput}. The `fixed` variant of
 * `InvoiceLateFeePolicy`.
 */
export type InvoiceLateFeePolicyFixedInput = ({
    /**
     * Shape $ (Value): {@link MoneyValueInput}. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValueInput;
    /**
     * Shape $ (Value): string. Whether Flint applies the one-time fee automatically after the
     * grace period. Omission defaults to manual. Frozen when the invoice is issued. Default:
     * "manual". Value enum: "manual", "automatic".
     */
    "application_mode"?: "manual" | "automatic";
    /** Shape $ (Value): integer. Format: int32. minimum: 0. maximum: 365. */
    "grace_period_days": number;
    /**
     * Shape $ (Value): number. Percentage applied to the fee base_outstanding_money. maximum: 100.
     * exclusiveMinimum: 0. multipleOf: 0.0001.
     */
    "percent"?: number;
    /** Shape $ (Value): string.  Value enum: "fixed". */
    "type": "fixed";
})
    & (({
    /** Shape $ (Value): string.  Value enum: "fixed". */
    "type": "fixed";
    /** Shape $ (Value): integer. Format: int32. minimum: 0. maximum: 365. */
    "grace_period_days": number;
    /**
     * Shape $ (Value): {@link MoneyValueInput}. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValueInput;
})
    & ({
    "percent"?: never;
}));
/**
 * Shape $ (Value): {@link InvoiceLateFeePolicyInput}. A late fee for overdue invoices: a fixed
 * amount or a percentage, a grace period in days, and whether Flint applies it automatically.
 */
export type InvoiceLateFeePolicyInput = ({
    /**
     * Shape $ (Value): {@link MoneyValueInput}. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "amount_money"?: MoneyValueInput;
    /**
     * Shape $ (Value): string. Whether Flint applies the one-time fee automatically after the
     * grace period. Omission defaults to manual. Frozen when the invoice is issued. Default:
     * "manual". Value enum: "manual", "automatic".
     */
    "application_mode"?: "manual" | "automatic";
    /** Shape $ (Value): integer. Format: int32. minimum: 0. maximum: 365. */
    "grace_period_days": number;
    /**
     * Shape $ (Value): number. Percentage applied to the fee base_outstanding_money. maximum: 100.
     * exclusiveMinimum: 0. multipleOf: 0.0001.
     */
    "percent"?: number;
    /** Shape $ (Value): string.  Value enum: "fixed", "percentage". */
    "type": "fixed" | "percentage";
})
    & ((Exclude<InvoiceLateFeePolicyFixedInput & object, readonly unknown[]>)
    | (Exclude<InvoiceLateFeePolicyPercentageInput & object, readonly unknown[]>));
/**
 * Shape $ (Value): {@link InvoiceLateFeePolicyPercentage}. The `percentage` variant of
 * `InvoiceLateFeePolicy`.
 */
export type InvoiceLateFeePolicyPercentage = ({
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "amount_money"?: MoneyValue;
    /**
     * Shape $ (Value): string. Whether Flint applies the one-time fee automatically after the
     * grace period. Omission defaults to manual. Frozen when the invoice is issued. Default:
     * "manual". Value enum: "manual", "automatic".
     */
    "application_mode"?: "manual" | "automatic" | (string & {});
    /** Shape $ (Value): integer. Format: int32. minimum: 0. maximum: 365. */
    "grace_period_days": number;
    /**
     * Shape $ (Value): number. Percentage applied to the fee base_outstanding_money. maximum: 100.
     * exclusiveMinimum: 0. multipleOf: 0.0001.
     */
    "percent": number;
    /** Shape $ (Value): string.  Value enum: "percentage". */
    "type": "percentage" | (string & {});
})
    & (({
    /** Shape $ (Value): string.  Value enum: "percentage". */
    "type": "percentage" | (string & {});
    /** Shape $ (Value): integer. Format: int32. minimum: 0. maximum: 365. */
    "grace_period_days": number;
    /**
     * Shape $ (Value): number. Percentage applied to the fee base_outstanding_money. maximum: 100.
     * exclusiveMinimum: 0. multipleOf: 0.0001.
     */
    "percent": number;
}));
/**
 * Shape $ (Value): {@link InvoiceLateFeePolicyPercentageInput}. The `percentage` variant of
 * `InvoiceLateFeePolicy`.
 */
export type InvoiceLateFeePolicyPercentageInput = ({
    /**
     * Shape $ (Value): {@link MoneyValueInput}. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "amount_money"?: MoneyValueInput;
    /**
     * Shape $ (Value): string. Whether Flint applies the one-time fee automatically after the
     * grace period. Omission defaults to manual. Frozen when the invoice is issued. Default:
     * "manual". Value enum: "manual", "automatic".
     */
    "application_mode"?: "manual" | "automatic";
    /** Shape $ (Value): integer. Format: int32. minimum: 0. maximum: 365. */
    "grace_period_days": number;
    /**
     * Shape $ (Value): number. Percentage applied to the fee base_outstanding_money. maximum: 100.
     * exclusiveMinimum: 0. multipleOf: 0.0001.
     */
    "percent": number;
    /** Shape $ (Value): string.  Value enum: "percentage". */
    "type": "percentage";
})
    & (({
    /** Shape $ (Value): string.  Value enum: "percentage". */
    "type": "percentage";
    /** Shape $ (Value): integer. Format: int32. minimum: 0. maximum: 365. */
    "grace_period_days": number;
    /**
     * Shape $ (Value): number. Percentage applied to the fee base_outstanding_money. maximum: 100.
     * exclusiveMinimum: 0. multipleOf: 0.0001.
     */
    "percent": number;
})
    & ({
    "amount_money"?: never;
}));
/**
 * Shape $ (Value): {@link InvoiceLineItem}. A line item on an invoice, with its quantity, unit
 * price, discount, tax, and totals, and the product, variant, or bundle it came from.
 */
export type InvoiceLineItem = {
    /**
     * Shape $ (Value): {@link MoneyValue}. unit_price_money × quantity. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "base_subtotal_money": MoneyValue;
    /**
     * Shape $ (Value): Array of {@link BundleComponent}. The items inside a bundle line, as
     * billed. Shape $[] (Value): {@link BundleComponent}. An item included in a bundle.
     */
    "bundle_components"?: Array<BundleComponent>;
    /**
     * Shape $ (Value): string. The catalog bundle the line was sold from. Absent unless
     * source_type is bundle.
     */
    "bundle_id"?: string;
    /**
     * Shape $ (Value): Array of {@link CategoryReference}. The catalog categories of the line's
     * item when it was billed. Shape $[] (Value): {@link CategoryReference}. A reference to a
     * product category by ID, handle, and name.
     */
    "categories"?: Array<CategoryReference>;
    /** Shape $ (Value): string. Line item description as billed. */
    "description"?: string;
    /**
     * Shape $ (Value): {@link MoneyValue}. This line's share of order and line-item discounts.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "discount_money": MoneyValue;
    /**
     * Shape $ (Value): {@link Image}. Line item image. An image with its `url`, `width`, and
     * `height`, and optional `alt` text.
     */
    "image"?: Image;
    /**
     * Shape $ (Value): string. Flint invoice line item ID, stable across draft edits and issue
     * while the backing order line keeps its ID. Credit notes credit lines by this ID.
     */
    "invoice_line_item_id": string;
    /**
     * Shape $ (Value): {@link MoneyValue}. Total of the line's modifiers. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "modifier_total_money": MoneyValue;
    /**
     * Shape $ (Value): Array of {@link OrderLineItemModifier}. The line's modifiers, as billed.
     * Shape $[] (Value): {@link OrderLineItemModifier}. A modifier selected on an order line item,
     * with its quantity, price change, total, and display flags.
     */
    "modifiers"?: Array<OrderLineItemModifier>;
    /** Shape $ (Value): string. Line item name as billed. */
    "name": string;
    /**
     * Shape $ (Value): string. The backing order's line item. Tax rows in snapshot.tax_breakdowns
     * reference the line by this ID.
     */
    "order_line_item_id"?: string;
    /**
     * Shape $ (Value): string. Parent product of the line's variant. Absent on bundle and custom
     * lines.
     */
    "product_id"?: string;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "quantity": `${bigint}`;
    /**
     * Shape $ (Value): Array of {@link SelectedProductOption}. The product options chosen for the
     * line, as billed. Shape $[] (Value): {@link SelectedProductOption}. An option and value
     * chosen for a product variant, such as size Large.
     */
    "selected_options"?: Array<SelectedProductOption>;
    /** Shape $ (Value): string. Stock keeping unit as billed. */
    "sku"?: string;
    /**
     * Shape $ (Value): string. The catalog item the line was sold from. Absent on custom lines.
     * Value enum: "variant", "bundle".
     */
    "source_type"?: "variant" | "bundle" | (string & {});
    /**
     * Shape $ (Value): {@link MoneyValue}. base_subtotal_money + modifier_total_money. For a
     * tax-inclusive price, it includes the tax. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "subtotal_money": MoneyValue;
    /**
     * Shape $ (Value): {@link MoneyValue}. Tax on this line. Its rows in snapshot.tax_breakdowns
     * give the rate and price_mode. For a tax-inclusive price, the tax is already inside
     * subtotal_money. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code.
     */
    "tax_money": MoneyValue;
    /**
     * Shape $ (Value): {@link MoneyValue}. What the line bills. For a tax-inclusive price,
     * subtotal_money - discount_money; otherwise subtotal_money - discount_money + tax_money. In
     * both cases the tax-exclusive value is total_money - tax_money. Signed monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "total_money": MoneyValue;
    /**
     * Shape $ (Value): {@link MoneyValue}. Price of one unit, before modifiers and discounts.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "unit_price_money": MoneyValue;
    /**
     * Shape $ (Value): string. The catalog variant the line was sold from. Absent unless
     * source_type is variant.
     */
    "variant_id"?: string;
};
/** Shape $ (Value): {@link InvoiceListResponse}. A page of `Invoice` objects. */
export type InvoiceListResponse = {
    /**
     * Shape $ (Value): Array of {@link Invoice}. Shape $[] (Value): {@link Invoice}. A bill issued
     * to a customer.
     */
    "data": Array<Invoice>;
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
 * Shape $ (Value): {@link InvoiceManualPayment}. A recorded offline payment against an invoice.
 * Its amount contributes to invoice paid_money while recorded; reversing it returns its full
 * amount to outstanding_money. A payment can cover principal and late fees. Manual payments are
 * separate from online payment attempts.
 */
export type InvoiceManualPayment = {
    /**
     * Shape $ (Value): {@link MoneyValue}. Full amount received, including any principal and late
     * fees covered. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code.
     */
    "amount_money": MoneyValue;
    /** Shape $ (Value): string. The invoice this payment was recorded against. */
    "invoice_id": string;
    /**
     * Shape $ (Value): string. Stable payment ID. IDs begin with omp_. Gift card loads funded by
     * this payment expose this value as source.order_manual_payment_id.
     */
    "invoice_manual_payment_id": string;
    /** Shape $ (Value): string. minLength: 1. maxLength: 4096. */
    "note"?: string;
    /**
     * Shape $ (Value): string. Caller-owned check, wire, or bank reference, stored unmodified.
     * minLength: 1. maxLength: 255.
     */
    "payment_reference"?: string;
    /** Shape $ (Value): string. When the payment was received. Format: date-time. */
    "received_at": string;
    /**
     * Shape $ (Value): string. Note supplied when reversing the payment. Present only when
     * reversed and a note was supplied. minLength: 1. maxLength: 4096.
     */
    "reversal_note"?: string;
    /**
     * Shape $ (Value): string. When the payment was reversed. Present only when reversed. Format:
     * date-time.
     */
    "reversed_at"?: string;
    /**
     * Shape $ (Value): string. Whether the payment is recorded or has been reversed in full. Value
     * enum: "recorded", "reversed".
     */
    "status": "recorded" | "reversed" | (string & {});
};
/**
 * Shape $ (Value): {@link InvoiceManualPaymentListResponse}. A page of `InvoiceManualPayment`
 * objects.
 */
export type InvoiceManualPaymentListResponse = {
    /**
     * Shape $ (Value): Array of {@link InvoiceManualPayment}. Shape $[] (Value): {@link
     * InvoiceManualPayment}. A recorded offline payment against an invoice. Its amount contributes
     * to invoice paid_money while recorded; reversing it returns its full amount to
     * outstanding_money. A payment can cover principal and late fees. Manual payments are separate
     * from online payment attempts.
     */
    "data": Array<InvoiceManualPayment>;
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
 * Shape $ (Value): {@link InvoiceManualPaymentResponse}. A response containing
 * `InvoiceManualPayment` data.
 */
export type InvoiceManualPaymentResponse = {
    /**
     * Shape $ (Value): {@link InvoiceManualPayment}. A recorded offline payment against an
     * invoice. Its amount contributes to invoice paid_money while recorded; reversing it returns
     * its full amount to outstanding_money. A payment can cover principal and late fees. Manual
     * payments are separate from online payment attempts.
     */
    "data": InvoiceManualPayment;
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
 * Shape $ (Value): {@link InvoiceManualPaymentResult}. The recorded or reversed payment and the
 * updated invoice. expected_version on either write fences the invoice; use the returned invoice
 * version for the next write.
 */
export type InvoiceManualPaymentResult = {
    /** Shape $ (Value): {@link Invoice}. A bill issued to a customer. */
    "invoice": Invoice;
    /**
     * Shape $ (Value): {@link InvoiceManualPayment}. A recorded offline payment against an
     * invoice. Its amount contributes to invoice paid_money while recorded; reversing it returns
     * its full amount to outstanding_money. A payment can cover principal and late fees. Manual
     * payments are separate from online payment attempts.
     */
    "invoice_manual_payment": InvoiceManualPayment;
};
/**
 * Shape $ (Value): {@link InvoiceManualPaymentResultResponse}. A response containing
 * `InvoiceManualPaymentResult` data.
 */
export type InvoiceManualPaymentResultResponse = {
    /**
     * Shape $ (Value): {@link InvoiceManualPaymentResult}. The recorded or reversed payment and
     * the updated invoice. expected_version on either write fences the invoice; use the returned
     * invoice version for the next write.
     */
    "data": InvoiceManualPaymentResult;
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
/** Shape $ (Value): {@link InvoicePaymentAttempt}. An attempt to collect payment for an invoice. */
export type InvoicePaymentAttempt = {
    /**
     * Shape $ (Value): string. When the attempt was canceled. An attempt canceled with its
     * checkout session before payment started may not have it. Format: date-time.
     */
    "canceled_at"?: string;
    /**
     * Shape $ (Value): string. When cancellation of this attempt was last requested. It stays set
     * when the payment processor refuses the cancellation or the payment settles first, so read
     * status and canceled_at for the outcome. Format: date-time.
     */
    "cancellation_requested_at"?: string;
    /**
     * Shape $ (Value): string. The hosted or embedded checkout session the buyer pays through.
     * Absent for automatic charges.
     */
    "checkout_session_id"?: string;
    /**
     * Shape $ (Value): {@link MoneyValue}. The amount this attempt collects: the outstanding
     * balance, or the targeted schedule entry's outstanding amount. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "expected_amount_money": MoneyValue;
    /**
     * Shape $ (Value): string. When an ACH debit is expected to settle, when Flint has an
     * estimate. Format: date-time.
     */
    "expected_settlement_at"?: string;
    /**
     * Shape $ (Value): string. When a checkout attempt expires, matching its checkout session.
     * Absent for automatic charges. Format: date-time.
     */
    "expires_at"?: string;
    /** Shape $ (Value): string. The invoice this attempt collects. */
    "invoice_id": string;
    /** Shape $ (Value): string. Flint invoice payment attempt ID. */
    "invoice_payment_attempt_id": string;
    /**
     * Shape $ (Value): string. The schedule entry this attempt collects. Absent when the attempt
     * collects the invoice balance.
     */
    "invoice_schedule_entry_id"?: string;
    /**
     * Shape $ (Value): {@link PaymentErrorSummary}. Why the payment failed. Present only when
     * status is failed. A summary of why a payment attempt failed, with a normalized error code, a
     * message, the failure time, and remediation.
     */
    "last_payment_error"?: PaymentErrorSummary;
    /**
     * Shape $ (Value): string. The payment intent behind this attempt. Absent until payment
     * starts, such as a hosted attempt the buyer hasn't paid yet.
     */
    "payment_intent_id"?: string;
    /**
     * Shape $ (Value): string. How the attempt collects: card, including Apple Pay, Google Pay,
     * and Affirm, or ACH debit. Value enum: "card", "ach_debit".
     */
    "rail": "card" | "ach_debit" | (string & {});
    /**
     * Shape $ (Value): string. When this attempt first settled successfully. Duplicate payment
     * notifications preserve this timestamp. Format: date-time.
     */
    "settled_at"?: string;
    /** Shape $ (Value): string. When the attempt was created. Format: date-time. */
    "started_at"?: string;
    /**
     * Shape $ (Value): string. Current payment attempt status. settled means this attempt
     * completed successfully, even if the invoice still has an outstanding balance.
     * invoice_payment_attempt.settled reports that completion. Value enum: "open", "settled",
     * "failed", "canceled", "expired", "processing".
     */
    "status": "open" | "settled" | "failed" | "canceled" | "expired" | "processing" | (string & {});
    /**
     * Shape $ (Value): string. When this attempt last changed. Duplicate payment notifications
     * preserve this timestamp. Format: date-time.
     */
    "updated_at"?: string;
};
/**
 * Shape $ (Value): {@link InvoicePaymentAttemptListResponse}. A page of `InvoicePaymentAttempt`
 * objects.
 */
export type InvoicePaymentAttemptListResponse = {
    /**
     * Shape $ (Value): Array of {@link InvoicePaymentAttempt}. Shape $[] (Value): {@link
     * InvoicePaymentAttempt}. An attempt to collect payment for an invoice.
     */
    "data": Array<InvoicePaymentAttempt>;
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
 * Shape $ (Value): {@link InvoicePaymentAttemptResponse}. A response containing
 * `InvoicePaymentAttempt` data.
 */
export type InvoicePaymentAttemptResponse = {
    /**
     * Shape $ (Value): {@link InvoicePaymentAttempt}. An attempt to collect payment for an
     * invoice.
     */
    "data": InvoicePaymentAttempt;
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
