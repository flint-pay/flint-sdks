import type {
    ExpandedCustomerSummary,
    ExpandedCustomerSummaryPreviousAttributes,
    ExpandedOrderSummary,
    ExpandedOrderSummaryPreviousAttributes,
    ExpandedShipmentSummary,
    ExpandedShipmentSummaryPreviousAttributes,
    DisputesAcceptParams
} from './types-26.js';
import type { MerchantWebhookEnvelope, MetadataMap } from './types-43.js';
import type { PartnerWebhookEnvelope } from './types-50.js';
import type {
    ReturnActor,
    ReturnActorPreviousAttributes,
    ReturnCompletionBlocker,
    ReturnCompletionBlockerPreviousAttributes,
    ResponseMeta,
    ResourceReference
} from './types-62.js';
import type {
    ReturnDisposition,
    ReturnDispositionPreviousAttributes,
    ReturnFinancialSummary,
    ReturnFinancialSummaryPreviousAttributes,
    ReturnHandoffRequirement,
    ReturnHandoffRequirementPreviousAttributes,
    ReturnInspection,
    ReturnInspectionPreviousAttributes,
    ReturnLineItem,
    ReturnLineItemPreviousAttributes
} from './types-63.js';
import type { ReturnPolicyEvaluation, ReturnPolicyEvaluationPreviousAttributes, ReturnReceipt } from './types-64.js';
import type { ReturnReceiptPreviousAttributes, ReturnResolution, ReturnResolutionPreviousAttributes } from './types-65.js';
import type { InputValue } from '../runtime.js';
import type { CancelReturnLineItemRequestInput, CancelReturnRequestInput } from './types-5.js';
import type { CompleteReturnRequestInput } from './types-7.js';
import type { FilesCompleteParams } from './types-27.js';
import type { AddReturnLineItemRequestInput, AddRiskListItemsRequestInput } from './types-0.js';
import type { CreateReturnRequestInput, CreateRiskListRequestInput } from './types-13.js';
import type { DecideReturnRequestInput } from './types-17.js';
import type { ProcessExistingReturnRequestInput } from './types-56.js';
import type { ReopenReturnRequestInput } from './types-61.js';
import type { UpdateReturnLineItemRequestInput, UpdateReturnRequestInput, UpdateRiskListRequestInput } from './types-77.js';
import type { WaiveReturnLineInspectionRequestInput } from './types-78.js';
import type {
    RiskPredicateNodeIsMissing,
    RiskPredicateNodeMoneyComparison,
    RiskPredicateNodeNot,
    RiskPredicateNodeRequest,
    RiskPredicateNodeRequestInput
} from './types-67.js';
export type ReturnSourceSystemPreviousAttributes = ({
    /**
     * Your source system's identifier. Required when source_system_type is pos, wms, erp, or
     * other; not allowed when source_system_type is manual. Don't put secrets in this field.
     * anyOf[1] (Value): string. Your source system's identifier. Required when source_system_type
     * is pos, wms, erp, or other; not allowed when source_system_type is manual. Don't put secrets
     * in this field. minLength: 1. maxLength: 255. Example: "warehouse-1842". anyOf[2] (Value):
     * null.
     */
    "external_source_id"?: ((string) | (null));
    /**
     * Source of the event: manual for a manual entry, pos for a point of sale, wms for a warehouse
     * management system, erp for an enterprise resource planning system, or other for another
     * external system. Flint-authored events use flint in responses. Value enum: "manual", "pos",
     * "wms", "erp", "other", "flint". anyOf[1] (Value): string. Source of the event: manual for a
     * manual entry, pos for a point of sale, wms for a warehouse management system, erp for an
     * enterprise resource planning system, or other for another external system. Flint-authored
     * events use flint in responses. Value enum: "manual", "pos", "wms", "erp", "other", "flint".
     * anyOf[2] (Value): null.
     */
    "source_system_type"?: (("manual" | "pos" | "wms" | "erp" | "other" | "flint" | (string & {})) | (null));
});
/**
 * The system a return event came from, such as a point of sale or warehouse system, with its own
 * identifier.
 */
export type ReturnSourceSystemRequest = ({
    /**
     * Your source system's identifier. Required when source_system_type is pos, wms, erp, or
     * other; not allowed when source_system_type is manual. Don't put secrets in this field.
     * minLength: 1. maxLength: 255. Example: "warehouse-1842".
     */
    "external_source_id"?: string;
    /**
     * Source of the event: manual for a manual entry, pos for a point of sale, wms for a warehouse
     * management system, erp for an enterprise resource planning system, or other for another
     * external system. Flint-authored events use flint in responses. Value enum: "manual", "pos",
     * "wms", "erp", "other".
     */
    "source_system_type": "manual" | "pos" | "wms" | "erp" | "other" | (string & {});
});
/**
 * The system a return event came from, such as a point of sale or warehouse system, with its own
 * identifier.
 */
export type ReturnSourceSystemRequestInput = ({
    /**
     * Your source system's identifier. Required when source_system_type is pos, wms, erp, or
     * other; not allowed when source_system_type is manual. Don't put secrets in this field.
     * minLength: 1. maxLength: 255. Example: "warehouse-1842".
     */
    "external_source_id"?: string;
    /**
     * Source of the event: manual for a manual entry, pos for a point of sale, wms for a warehouse
     * management system, erp for an enterprise resource planning system, or other for another
     * external system. Flint-authored events use flint in responses. Value enum: "manual", "pos",
     * "wms", "erp", "other".
     */
    "source_system_type": "manual" | "pos" | "wms" | "erp" | "other";
});
/**
 * Merchandise received in a return that does not match an expected return line, described by name,
 * SKU, and description.
 */
export type ReturnUnverifiedItem = {
    /** Description of the unidentified item. minLength: 1. */
    "description"?: string;
    /**
     * Name of the unidentified item. Surrounding whitespace is trimmed before length validation. A
     * supplied value cannot be blank; use null where clearing is supported. minLength: 1.
     */
    "name": string;
    /** SKU of the unidentified item. minLength: 1. */
    "sku"?: string;
};
/**
 * Merchandise received in a return that does not match an expected return line, described by name,
 * SKU, and description.
 */
export type ReturnUnverifiedItemInput = ReturnUnverifiedItem;
export type ReturnUnverifiedItemPreviousAttributes = {
    /**
     * Description of the unidentified item. anyOf[1] (Value): string. Description of the
     * unidentified item. minLength: 1. anyOf[2] (Value): null.
     */
    "description"?: ((string) | (null));
    /**
     * Name of the unidentified item. Surrounding whitespace is trimmed before length validation. A
     * supplied value cannot be blank; use null where clearing is supported. anyOf[1] (Value):
     * string. Name of the unidentified item. Surrounding whitespace is trimmed before length
     * validation. A supplied value cannot be blank; use null where clearing is supported.
     * minLength: 1. anyOf[2] (Value): null.
     */
    "name"?: ((string) | (null));
    /**
     * SKU of the unidentified item. anyOf[1] (Value): string. SKU of the unidentified item.
     * minLength: 1. anyOf[2] (Value): null.
     */
    "sku"?: ((string) | (null));
};
export type ReturnUpdatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "actor"?: ReturnActor;
        "object": {
            "canceled_at"?: string;
            "canceled_by"?: ReturnActor;
            "cancellation_reason"?: "buyer_request"
                | "merchant_request"
                | "duplicate"
                | "expired"
                | "created_in_error"
                | "other"
                | (string & {});
            "cancellation_reason_message"?: string;
            "completed_at"?: string;
            "completed_by"?: ReturnActor;
            "completion_blockers": Array<ReturnCompletionBlocker>;
            "completion_mode"?: "manual" | "automatic" | (string & {});
            "completion_reason"?: "manual_completion" | "exception_waived" | "other" | (string & {});
            "completion_reason_message"?: string;
            "created_at": string;
            "customer"?: ((ExpandedCustomerSummary) | (null));
            "customer_id"?: string;
            "decision_at"?: string;
            "decision_status": "pending" | "approved" | "partially_approved" | "declined" | (string & {});
            "external_reference_id"?: string;
            "financial_summary": ReturnFinancialSummary;
            "handoff_requirements": Array<ReturnHandoffRequirement>;
            "idempotency_key": string | null;
            "initiated_by": "buyer" | "merchant" | "integration" | "system" | (string & {});
            "line_items": Array<ReturnLineItem>;
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
            "metadata": MetadataMap;
            "order"?: ((ExpandedOrderSummary) | (null));
            "order_id": string;
            "policy_evaluation"?: ReturnPolicyEvaluation;
            "resolution_status": "not_selected"
                | "pending"
                | "partially_completed"
                | "requires_action"
                | "completed"
                | "failed"
                | (string & {});
            "return_disposition_ids": Array<string>;
            "return_dispositions"?: Array<ReturnDisposition>;
            "return_id": string;
            "return_inspection_ids": Array<string>;
            "return_inspections"?: Array<ReturnInspection>;
            "return_number": string;
            "return_receipt_ids": Array<string>;
            "return_receipts"?: Array<ReturnReceipt>;
            "return_resolution_ids": Array<string>;
            "return_resolutions"?: Array<ReturnResolution>;
            "shipment_ids": Array<string>;
            "shipments"?: Array<ExpandedShipmentSummary>;
            "status": "requested" | "open" | "completed" | "declined" | "canceled" | (string & {});
            "supported_actions": Array<"cancel" | "complete" | "decide" | "process" | "reopen" | (string & {})>;
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "canceled_at"?: ((string) | (null));
            "canceled_by"?: ((ReturnActorPreviousAttributes) | (null));
            "cancellation_reason"?: (("buyer_request"
                | "merchant_request"
                | "duplicate"
                | "expired"
                | "created_in_error"
                | "other"
                | (string & {}))
                | (null));
            "cancellation_reason_message"?: ((string) | (null));
            "completed_at"?: ((string) | (null));
            "completed_by"?: ((ReturnActorPreviousAttributes) | (null));
            "completion_blockers"?: ((Array<ReturnCompletionBlockerPreviousAttributes>) | (null));
            "completion_mode"?: (("manual" | "automatic" | (string & {})) | (null));
            "completion_reason"?: (("manual_completion" | "exception_waived" | "other" | (string & {})) | (null));
            "completion_reason_message"?: ((string) | (null));
            "created_at"?: ((string) | (null));
            "customer"?: ((ExpandedCustomerSummaryPreviousAttributes) | (null));
            "customer_id"?: ((string) | (null));
            "decision_at"?: ((string) | (null));
            "decision_status"?: (("pending" | "approved" | "partially_approved" | "declined" | (string & {})) | (null));
            "external_reference_id"?: ((string) | (null));
            "financial_summary"?: ((ReturnFinancialSummaryPreviousAttributes) | (null));
            "handoff_requirements"?: ((Array<ReturnHandoffRequirementPreviousAttributes>) | (null));
            "idempotency_key"?: ((string) | (null));
            "initiated_by"?: (("buyer" | "merchant" | "integration" | "system" | (string & {})) | (null));
            "line_items"?: ((Array<ReturnLineItemPreviousAttributes>) | (null));
            "merchandise_status"?: (("not_required"
                | "awaiting_handoff"
                | "in_transit"
                | "partially_received"
                | "inspection_required"
                | "partially_inspected"
                | "inspection_review_required"
                | "disposition_required"
                | "resolved"
                | "exception"
                | (string & {}))
                | (null));
            "metadata"?: ((MetadataMap) | (null));
            "order"?: ((ExpandedOrderSummaryPreviousAttributes) | (null));
            "order_id"?: ((string) | (null));
            "policy_evaluation"?: ((ReturnPolicyEvaluationPreviousAttributes) | (null));
            "resolution_status"?: (("not_selected"
                | "pending"
                | "partially_completed"
                | "requires_action"
                | "completed"
                | "failed"
                | (string & {}))
                | (null));
            "return_disposition_ids"?: ((Array<string>) | (null));
            "return_dispositions"?: ((Array<ReturnDispositionPreviousAttributes>) | (null));
            "return_id"?: ((string) | (null));
            "return_inspection_ids"?: ((Array<string>) | (null));
            "return_inspections"?: ((Array<ReturnInspectionPreviousAttributes>) | (null));
            "return_number"?: ((string) | (null));
            "return_receipt_ids"?: ((Array<string>) | (null));
            "return_receipts"?: ((Array<ReturnReceiptPreviousAttributes>) | (null));
            "return_resolution_ids"?: ((Array<string>) | (null));
            "return_resolutions"?: ((Array<ReturnResolutionPreviousAttributes>) | (null));
            "shipment_ids"?: ((Array<string>) | (null));
            "shipments"?: ((Array<ExpandedShipmentSummaryPreviousAttributes>) | (null));
            "status"?: (("requested" | "open" | "completed" | "declined" | "canceled" | (string & {})) | (null));
            "supported_actions"?: ((Array<"cancel" | "complete" | "decide" | "process" | "reopen" | (string & {})>) | (null));
            "updated_at"?: ((string) | (null));
            "version"?: ((number) | (null));
        });
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "return.updated";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "actor"?: ReturnActor;
        "object": {
            "canceled_at"?: string;
            "canceled_by"?: ReturnActor;
            "cancellation_reason"?: "buyer_request"
                | "merchant_request"
                | "duplicate"
                | "expired"
                | "created_in_error"
                | "other"
                | (string & {});
            "cancellation_reason_message"?: string;
            "completed_at"?: string;
            "completed_by"?: ReturnActor;
            "completion_blockers": Array<ReturnCompletionBlocker>;
            "completion_mode"?: "manual" | "automatic" | (string & {});
            "completion_reason"?: "manual_completion" | "exception_waived" | "other" | (string & {});
            "completion_reason_message"?: string;
            "created_at": string;
            "customer"?: ((ExpandedCustomerSummary) | (null));
            "customer_id"?: string;
            "decision_at"?: string;
            "decision_status": "pending" | "approved" | "partially_approved" | "declined" | (string & {});
            "external_reference_id"?: string;
            "financial_summary": ReturnFinancialSummary;
            "handoff_requirements": Array<ReturnHandoffRequirement>;
            "idempotency_key": string | null;
            "initiated_by": "buyer" | "merchant" | "integration" | "system" | (string & {});
            "line_items": Array<ReturnLineItem>;
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
            "metadata": MetadataMap;
            "order"?: ((ExpandedOrderSummary) | (null));
            "order_id": string;
            "policy_evaluation"?: ReturnPolicyEvaluation;
            "resolution_status": "not_selected"
                | "pending"
                | "partially_completed"
                | "requires_action"
                | "completed"
                | "failed"
                | (string & {});
            "return_disposition_ids": Array<string>;
            "return_dispositions"?: Array<ReturnDisposition>;
            "return_id": string;
            "return_inspection_ids": Array<string>;
            "return_inspections"?: Array<ReturnInspection>;
            "return_number": string;
            "return_receipt_ids": Array<string>;
            "return_receipts"?: Array<ReturnReceipt>;
            "return_resolution_ids": Array<string>;
            "return_resolutions"?: Array<ReturnResolution>;
            "shipment_ids": Array<string>;
            "shipments"?: Array<ExpandedShipmentSummary>;
            "status": "requested" | "open" | "completed" | "declined" | "canceled" | (string & {});
            "supported_actions": Array<"cancel" | "complete" | "decide" | "process" | "reopen" | (string & {})>;
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "canceled_at"?: ((string) | (null));
            "canceled_by"?: ((ReturnActorPreviousAttributes) | (null));
            "cancellation_reason"?: (("buyer_request"
                | "merchant_request"
                | "duplicate"
                | "expired"
                | "created_in_error"
                | "other"
                | (string & {}))
                | (null));
            "cancellation_reason_message"?: ((string) | (null));
            "completed_at"?: ((string) | (null));
            "completed_by"?: ((ReturnActorPreviousAttributes) | (null));
            "completion_blockers"?: ((Array<ReturnCompletionBlockerPreviousAttributes>) | (null));
            "completion_mode"?: (("manual" | "automatic" | (string & {})) | (null));
            "completion_reason"?: (("manual_completion" | "exception_waived" | "other" | (string & {})) | (null));
            "completion_reason_message"?: ((string) | (null));
            "created_at"?: ((string) | (null));
            "customer"?: ((ExpandedCustomerSummaryPreviousAttributes) | (null));
            "customer_id"?: ((string) | (null));
            "decision_at"?: ((string) | (null));
            "decision_status"?: (("pending" | "approved" | "partially_approved" | "declined" | (string & {})) | (null));
            "external_reference_id"?: ((string) | (null));
            "financial_summary"?: ((ReturnFinancialSummaryPreviousAttributes) | (null));
            "handoff_requirements"?: ((Array<ReturnHandoffRequirementPreviousAttributes>) | (null));
            "idempotency_key"?: ((string) | (null));
            "initiated_by"?: (("buyer" | "merchant" | "integration" | "system" | (string & {})) | (null));
            "line_items"?: ((Array<ReturnLineItemPreviousAttributes>) | (null));
            "merchandise_status"?: (("not_required"
                | "awaiting_handoff"
                | "in_transit"
                | "partially_received"
                | "inspection_required"
                | "partially_inspected"
                | "inspection_review_required"
                | "disposition_required"
                | "resolved"
                | "exception"
                | (string & {}))
                | (null));
            "metadata"?: ((MetadataMap) | (null));
            "order"?: ((ExpandedOrderSummaryPreviousAttributes) | (null));
            "order_id"?: ((string) | (null));
            "policy_evaluation"?: ((ReturnPolicyEvaluationPreviousAttributes) | (null));
            "resolution_status"?: (("not_selected"
                | "pending"
                | "partially_completed"
                | "requires_action"
                | "completed"
                | "failed"
                | (string & {}))
                | (null));
            "return_disposition_ids"?: ((Array<string>) | (null));
            "return_dispositions"?: ((Array<ReturnDispositionPreviousAttributes>) | (null));
            "return_id"?: ((string) | (null));
            "return_inspection_ids"?: ((Array<string>) | (null));
            "return_inspections"?: ((Array<ReturnInspectionPreviousAttributes>) | (null));
            "return_number"?: ((string) | (null));
            "return_receipt_ids"?: ((Array<string>) | (null));
            "return_receipts"?: ((Array<ReturnReceiptPreviousAttributes>) | (null));
            "return_resolution_ids"?: ((Array<string>) | (null));
            "return_resolutions"?: ((Array<ReturnResolutionPreviousAttributes>) | (null));
            "shipment_ids"?: ((Array<string>) | (null));
            "shipments"?: ((Array<ExpandedShipmentSummaryPreviousAttributes>) | (null));
            "status"?: (("requested" | "open" | "completed" | "declined" | "canceled" | (string & {})) | (null));
            "supported_actions"?: ((Array<"cancel" | "complete" | "decide" | "process" | "reopen" | (string & {})>) | (null));
            "updated_at"?: ((string) | (null));
            "version"?: ((number) | (null));
        });
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "return.updated";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
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
    /**
     *  actor (Optional): {@link ReturnActor}. Who caused this event, captured when the change
     * commits. Omitted when the event predates actor attribution or attribution is unavailable.
     * Who performed a return action: a buyer, merchant, integration, or the system, with an
     * optional ID. object (Required): object. The resource snapshot, without expansions. Webhooks
     * omit no additional fields. object.canceled_at (Optional): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.canceled_by (Optional): {@link
     * ReturnActor}. Who canceled the Return. Who performed a return action: a buyer, merchant,
     * integration, or the system, with an optional ID. object.cancellation_reason (Optional):
     * string. Why the Return was canceled. Value enum: "buyer_request", "merchant_request",
     * "duplicate", "expired", "created_in_error", "other". object.cancellation_reason_message
     * (Optional): string. Detail sent with the cancellation. Merchant reads only.
     * object.completed_at (Optional): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.completed_by (Optional): {@link ReturnActor}. Who completed
     * the Return. `system` when Flint completed it automatically. Who performed a return action: a
     * buyer, merchant, integration, or the system, with an optional ID. object.completion_blockers
     * (Required): Array of {@link ReturnCompletionBlocker}. What is still owed before the Return
     * can complete. Empty when nothing is. object.completion_blockers[] (Value): {@link
     * ReturnCompletionBlocker}. Something still owed before a return can complete, with the return
     * line or record it concerns. object.completion_mode (Optional): string. automatic completes
     * the Return when the last completion blocker clears; manual waits for POST
     * /v1/returns/{return_id}/complete. Reopening a Return sets it to manual. Value enum:
     * "manual", "automatic". object.completion_reason (Optional): string. Why the Return was
     * completed by hand. Absent when Flint completed it automatically. Value enum:
     * "manual_completion", "exception_waived", "other". object.completion_reason_message
     * (Optional): string. Detail sent when the Return was completed by hand. object.created_at
     * (Required): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.customer (Optional): {@link ExpandedCustomerSummary} or null. Present only when
     * `expand` includes `customer`; `null` when expanded and there is no related customer.
     * object.customer.anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's summary
     * fields, returned in place of a customer ID when the customer is expanded.
     * object.customer.anyOf[2] (Value): null. object.customer_id (Optional): string. The customer
     * the Return belongs to. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". object.decision_at
     * (Optional): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.decision_status (Required): string. Whether the requested units were approved.
     * `pending` until one decision covers every line. Value enum: "pending", "approved",
     * "partially_approved", "declined". object.external_reference_id (Optional): string.
     * Caller-owned identifier for this resource in an external system. maxLength: 255. Example:
     * "warehouse-1842". object.financial_summary (Required): {@link ReturnFinancialSummary}. The
     * Return's money in one place: the value of the returned lines, deductions and credits, and
     * what has been refunded or collected. The money for a return: returned value, deductions,
     * credits, replacement total, and amounts due to or from the buyer.
     * object.handoff_requirements (Required): Array of {@link ReturnHandoffRequirement}. What the
     * buyer still has to send back and where. Each entry leaves the list once it is satisfied, so
     * an empty list means nothing is waiting on the buyer. object.handoff_requirements[] (Value):
     * {@link ReturnHandoffRequirement}. What the buyer must do to hand merchandise back: the
     * destination, instructions, line items, and expiry. object.idempotency_key (Required): string
     * or null. The Idempotency-Key of the request that created this resource. `null` when that
     * request sent no key, Flint created the resource, the reader isn't the caller that created it
     * (another app install, a buyer, or the merchant reading an app's or buyer's record), or the
     * caller that created an older record is unknown. Filter its list with `idempotency_key` to
     * find it. Recorded payloads, including replayed responses and webhook events, can return
     * `null`. To find a key that a replay returns as `null`, read the resource. Buyer routes
     * return only keys from the buyer's namespace. object.initiated_by (Required): string. Who
     * created the Return: buyer for a customer session on /v1/me or Flint's hosted account,
     * merchant for a Dashboard user, integration for an API key or partner app, or system for
     * Flint automation. It cannot be sent. Value enum: "buyer", "merchant", "integration",
     * "system". object.line_items (Required): Array of {@link ReturnLineItem}. The lines being
     * returned. object.line_items[] (Value): {@link ReturnLineItem}. An item included in a return
     * request. object.merchandise_status (Required): string. On the Return, the least-finished
     * line's value. Value enum: "not_required", "awaiting_handoff", "in_transit",
     * "partially_received", "inspection_required", "partially_inspected",
     * "inspection_review_required", "disposition_required", "resolved", "exception".
     * object.metadata (Required): {@link MetadataMap}. Stored caller-owned key-value data. See
     * `MetadataInput` for key, value, and size rules. Caller-owned key-value data stored on a
     * resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
     * follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits
     * may not satisfy them. object.order (Optional): {@link ExpandedOrderSummary} or null. Present
     * only when `expand` includes `order`; `null` when expanded and there is no related order.
     * object.order.anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary fields,
     * including status, payment and refund status, and pricing and settlement amounts, returned
     * when the order is expanded. object.order.anyOf[2] (Value): null. object.order_id (Required):
     * string. ID of the Order the Return is against. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     * object.policy_evaluation (Optional): {@link ReturnPolicyEvaluation}. How your return
     * policies judged the request when the Return was created. How a return policy evaluated a
     * return request: overall status and reason, the policy revision used, and per-line results.
     * object.resolution_status (Required): string. Whether the buyer has received the value they
     * are owed. Combines the Return's resolutions and its unsettled corrections. Value enum:
     * "not_selected", "pending", "partially_completed", "requires_action", "completed", "failed".
     * object.return_disposition_ids (Required): Array of string. IDs of every disposition recorded
     * for this Return, oldest first, including failed and canceled dispositions. Expand
     * `return_dispositions` on `GET /v1/returns/{return_id}` to read them inline.
     * object.return_disposition_ids[] (Value): string. Example:
     * "retdsp_01KEZF7C007H87J66PH2EEK1VW". object.return_dispositions (Optional): Array of {@link
     * ReturnDisposition}. Present only when `expand` includes `return_dispositions`. The
     * dispositions in `return_disposition_ids`, in the same order. object.return_dispositions[]
     * (Value): {@link ReturnDisposition}. A decision about how returned merchandise will be
     * handled. object.return_id (Required): string. Unique identifier for this return, prefixed
     * `ret_`. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X". object.return_inspection_ids (Required):
     * Array of string. IDs of every inspection recorded for this Return, oldest first, including
     * superseded inspections. Expand `return_inspections` on `GET /v1/returns/{return_id}` to read
     * them inline. object.return_inspection_ids[] (Value): string. Example:
     * "retins_01KEZF7C00WPB0BR4WTT7CMSB8". object.return_inspections (Optional): Array of {@link
     * ReturnInspection}. Present only when `expand` includes `return_inspections`. The inspections
     * in `return_inspection_ids`, in the same order. object.return_inspections[] (Value): {@link
     * ReturnInspection}. An assessment of the condition of returned items. object.return_number
     * (Required): string. Human-readable number for the Return. object.return_receipt_ids
     * (Required): Array of string. IDs of every receipt recorded for this Return, oldest first,
     * including superseded receipts. Expand `return_receipts` on `GET /v1/returns/{return_id}` to
     * read them inline. object.return_receipt_ids[] (Value): string. Example:
     * "retrc_01KEZF7C0052GWDW41D9AJAVJZ". object.return_receipts (Optional): Array of {@link
     * ReturnReceipt}. Present only when `expand` includes `return_receipts`. The receipts in
     * `return_receipt_ids`, in the same order. object.return_receipts[] (Value): {@link
     * ReturnReceipt}. A record of returned items arriving at a location.
     * object.return_resolution_ids (Required): Array of string. IDs of every resolution created
     * for this Return, oldest first, including failed and canceled resolutions. Expand
     * `return_resolutions` on `GET /v1/returns/{return_id}` to read them inline.
     * object.return_resolution_ids[] (Value): string. Example:
     * "retres_01KEZF7C00C7RZJN31W9SGMEQ3". object.return_resolutions (Optional): Array of {@link
     * ReturnResolution}. Present only when `expand` includes `return_resolutions`. The resolutions
     * in `return_resolution_ids`, in the same order. object.return_resolutions[] (Value): {@link
     * ReturnResolution}. The refund, exchange, or other outcome of a return. object.shipment_ids
     * (Required): Array of string. IDs of every shipment raised to send this Return's items back,
     * oldest first, including voided shipments. Expand `shipments` on `GET
     * /v1/returns/{return_id}` to read them inline. object.shipment_ids[] (Value): string.
     * Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68". object.shipments (Optional): Array of {@link
     * ExpandedShipmentSummary}. Present only when `expand` includes `shipments`. Summaries of the
     * shipments in `shipment_ids`, in the same order. object.shipments[] (Value): {@link
     * ExpandedShipmentSummary}. A shipment's summary fields, including direction, status, and
     * package count, returned when the shipment is expanded. object.status (Required): string.
     * Where the whole Return stands. Read `decision_status`, `merchandise_status`, and
     * `resolution_status` for the part you need. Value enum: "requested", "open", "completed",
     * "declined", "canceled". object.supported_actions (Required): Array of string. Actions that
     * can succeed now. Actions the API key or token doesn't have the scope for are left out. A
     * Return waiting for a decision lists `decide` and `cancel`. An open Return lists `cancel`
     * only while no units have been received, inspected, dispositioned, or resolved, and it has no
     * current receipts or inspections, non-canceled dispositions or resolutions, or non-voided
     * return shipments. It lists `complete` when `completion_mode` is `manual` and
     * `completion_blockers` is empty. A completed Return lists `reopen`. A declined or canceled
     * Return lists none. [] enum: "cancel", "complete", "decide", "process", "reopen".
     * object.supported_actions[] (Value): string. Value enum: "cancel", "complete", "decide",
     * "process", "reopen". object.updated_at (Required): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.version (Required): integer. Goes up with
     * every change to the Return. Each activity's `return_version` is the version that activity
     * produced. A write that takes `expected_version` or `expected_return_version` for this Return
     * compares it with this value. Format: int64. minimum: 0. previous_attributes (Optional):
     * object. Previous values of changed top-level fields in data.object, at this delivery's API
     * version. Nested changes include the whole previous top-level value. A value is null when the
     * field was absent before the change. Omitted when Flint did not record the previous state,
     * including synthetic test events. previous_attributes.canceled_at (Optional): string or null.
     * RFC3339 timestamp. previous_attributes.canceled_at.anyOf[1] (Value): string. RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.canceled_at.anyOf[2] (Value): null. previous_attributes.canceled_by
     * (Optional): {@link ReturnActorPreviousAttributes} or null. Who canceled the Return.
     * previous_attributes.canceled_by.anyOf[1] (Value): {@link ReturnActorPreviousAttributes}.
     * previous_attributes.canceled_by.anyOf[2] (Value): null.
     * previous_attributes.cancellation_reason (Optional): string or null. Why the Return was
     * canceled. Value enum: "buyer_request", "merchant_request", "duplicate", "expired",
     * "created_in_error", "other". previous_attributes.cancellation_reason.anyOf[1] (Value):
     * string. Why the Return was canceled. Value enum: "buyer_request", "merchant_request",
     * "duplicate", "expired", "created_in_error", "other".
     * previous_attributes.cancellation_reason.anyOf[2] (Value): null.
     * previous_attributes.cancellation_reason_message (Optional): string or null. Detail sent with
     * the cancellation. Merchant reads only.
     * previous_attributes.cancellation_reason_message.anyOf[1] (Value): string. Detail sent with
     * the cancellation. Merchant reads only.
     * previous_attributes.cancellation_reason_message.anyOf[2] (Value): null.
     * previous_attributes.completed_at (Optional): string or null. RFC3339 timestamp.
     * previous_attributes.completed_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.completed_at.anyOf[2]
     * (Value): null. previous_attributes.completed_by (Optional): {@link
     * ReturnActorPreviousAttributes} or null. Who completed the Return. `system` when Flint
     * completed it automatically. previous_attributes.completed_by.anyOf[1] (Value): {@link
     * ReturnActorPreviousAttributes}. previous_attributes.completed_by.anyOf[2] (Value): null.
     * previous_attributes.completion_blockers (Optional): Array of {@link
     * ReturnCompletionBlockerPreviousAttributes} or null. What is still owed before the Return can
     * complete. Empty when nothing is. previous_attributes.completion_blockers.anyOf[1] (Value):
     * Array of {@link ReturnCompletionBlockerPreviousAttributes}. What is still owed before the
     * Return can complete. Empty when nothing is.
     * previous_attributes.completion_blockers.anyOf[1][] (Value): {@link
     * ReturnCompletionBlockerPreviousAttributes}. previous_attributes.completion_blockers.anyOf[2]
     * (Value): null. previous_attributes.completion_mode (Optional): string or null. automatic
     * completes the Return when the last completion blocker clears; manual waits for POST
     * /v1/returns/{return_id}/complete. Reopening a Return sets it to manual. Value enum:
     * "manual", "automatic". previous_attributes.completion_mode.anyOf[1] (Value): string.
     * automatic completes the Return when the last completion blocker clears; manual waits for
     * POST /v1/returns/{return_id}/complete. Reopening a Return sets it to manual. Value enum:
     * "manual", "automatic". previous_attributes.completion_mode.anyOf[2] (Value): null.
     * previous_attributes.completion_reason (Optional): string or null. Why the Return was
     * completed by hand. Absent when Flint completed it automatically. Value enum:
     * "manual_completion", "exception_waived", "other".
     * previous_attributes.completion_reason.anyOf[1] (Value): string. Why the Return was completed
     * by hand. Absent when Flint completed it automatically. Value enum: "manual_completion",
     * "exception_waived", "other". previous_attributes.completion_reason.anyOf[2] (Value): null.
     * previous_attributes.completion_reason_message (Optional): string or null. Detail sent when
     * the Return was completed by hand. previous_attributes.completion_reason_message.anyOf[1]
     * (Value): string. Detail sent when the Return was completed by hand.
     * previous_attributes.completion_reason_message.anyOf[2] (Value): null.
     * previous_attributes.created_at (Optional): string or null. RFC3339 timestamp.
     * previous_attributes.created_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.created_at.anyOf[2] (Value):
     * null. previous_attributes.customer (Optional): {@link
     * ExpandedCustomerSummaryPreviousAttributes} or null. Present only when `expand` includes
     * `customer`; `null` when expanded and there is no related customer.
     * previous_attributes.customer.anyOf[1] (Value): {@link
     * ExpandedCustomerSummaryPreviousAttributes}. previous_attributes.customer.anyOf[2] (Value):
     * null. previous_attributes.customer_id (Optional): string or null. The customer the Return
     * belongs to. previous_attributes.customer_id.anyOf[1] (Value): string. The customer the
     * Return belongs to. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     * previous_attributes.customer_id.anyOf[2] (Value): null. previous_attributes.decision_at
     * (Optional): string or null. RFC3339 timestamp. previous_attributes.decision_at.anyOf[1]
     * (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.decision_at.anyOf[2] (Value): null. previous_attributes.decision_status
     * (Optional): string or null. Whether the requested units were approved. `pending` until one
     * decision covers every line. Value enum: "pending", "approved", "partially_approved",
     * "declined". previous_attributes.decision_status.anyOf[1] (Value): string. Whether the
     * requested units were approved. `pending` until one decision covers every line. Value enum:
     * "pending", "approved", "partially_approved", "declined".
     * previous_attributes.decision_status.anyOf[2] (Value): null.
     * previous_attributes.external_reference_id (Optional): string or null. Caller-owned
     * identifier for this resource in an external system.
     * previous_attributes.external_reference_id.anyOf[1] (Value): string. Caller-owned identifier
     * for this resource in an external system. maxLength: 255. Example: "warehouse-1842".
     * previous_attributes.external_reference_id.anyOf[2] (Value): null.
     * previous_attributes.financial_summary (Optional): {@link
     * ReturnFinancialSummaryPreviousAttributes} or null. The Return's money in one place: the
     * value of the returned lines, deductions and credits, and what has been refunded or
     * collected. previous_attributes.financial_summary.anyOf[1] (Value): {@link
     * ReturnFinancialSummaryPreviousAttributes}. previous_attributes.financial_summary.anyOf[2]
     * (Value): null. previous_attributes.handoff_requirements (Optional): Array of {@link
     * ReturnHandoffRequirementPreviousAttributes} or null. What the buyer still has to send back
     * and where. Each entry leaves the list once it is satisfied, so an empty list means nothing
     * is waiting on the buyer. previous_attributes.handoff_requirements.anyOf[1] (Value): Array of
     * {@link ReturnHandoffRequirementPreviousAttributes}. What the buyer still has to send back
     * and where. Each entry leaves the list once it is satisfied, so an empty list means nothing
     * is waiting on the buyer. previous_attributes.handoff_requirements.anyOf[1][] (Value): {@link
     * ReturnHandoffRequirementPreviousAttributes}.
     * previous_attributes.handoff_requirements.anyOf[2] (Value): null.
     * previous_attributes.idempotency_key (Optional): string or null. The Idempotency-Key of the
     * request that created this resource. `null` when that request sent no key, Flint created the
     * resource, the reader isn't the caller that created it (another app install, a buyer, or the
     * merchant reading an app's or buyer's record), or the caller that created an older record is
     * unknown. Filter its list with `idempotency_key` to find it. Recorded payloads, including
     * replayed responses and webhook events, can return `null`. To find a key that a replay
     * returns as `null`, read the resource. Buyer routes return only keys from the buyer's
     * namespace. previous_attributes.idempotency_key.anyOf[1] (Value): string. The Idempotency-Key
     * of the request that created this resource. `null` when that request sent no key, Flint
     * created the resource, the reader isn't the caller that created it (another app install, a
     * buyer, or the merchant reading an app's or buyer's record), or the caller that created an
     * older record is unknown. Filter its list with `idempotency_key` to find it. Recorded
     * payloads, including replayed responses and webhook events, can return `null`. To find a key
     * that a replay returns as `null`, read the resource. Buyer routes return only keys from the
     * buyer's namespace. previous_attributes.idempotency_key.anyOf[2] (Value): null.
     * previous_attributes.initiated_by (Optional): string or null. Who created the Return: buyer
     * for a customer session on /v1/me or Flint's hosted account, merchant for a Dashboard user,
     * integration for an API key or partner app, or system for Flint automation. It cannot be
     * sent. Value enum: "buyer", "merchant", "integration", "system".
     * previous_attributes.initiated_by.anyOf[1] (Value): string. Who created the Return: buyer for
     * a customer session on /v1/me or Flint's hosted account, merchant for a Dashboard user,
     * integration for an API key or partner app, or system for Flint automation. It cannot be
     * sent. Value enum: "buyer", "merchant", "integration", "system".
     * previous_attributes.initiated_by.anyOf[2] (Value): null. previous_attributes.line_items
     * (Optional): Array of {@link ReturnLineItemPreviousAttributes} or null. The lines being
     * returned. previous_attributes.line_items.anyOf[1] (Value): Array of {@link
     * ReturnLineItemPreviousAttributes}. The lines being returned.
     * previous_attributes.line_items.anyOf[1][] (Value): {@link ReturnLineItemPreviousAttributes}.
     * previous_attributes.line_items.anyOf[2] (Value): null.
     * previous_attributes.merchandise_status (Optional): string or null. On the Return, the
     * least-finished line's value. Value enum: "not_required", "awaiting_handoff", "in_transit",
     * "partially_received", "inspection_required", "partially_inspected",
     * "inspection_review_required", "disposition_required", "resolved", "exception".
     * previous_attributes.merchandise_status.anyOf[1] (Value): string. On the Return, the
     * least-finished line's value. Value enum: "not_required", "awaiting_handoff", "in_transit",
     * "partially_received", "inspection_required", "partially_inspected",
     * "inspection_review_required", "disposition_required", "resolved", "exception".
     * previous_attributes.merchandise_status.anyOf[2] (Value): null. previous_attributes.metadata
     * (Optional): {@link MetadataMap} or null. Stored caller-owned key-value data. See
     * `MetadataInput` for key, value, and size rules. previous_attributes.metadata.anyOf[1]
     * (Value): {@link MetadataMap}. previous_attributes.metadata.anyOf[2] (Value): null.
     * previous_attributes.order (Optional): {@link ExpandedOrderSummaryPreviousAttributes} or
     * null. Present only when `expand` includes `order`; `null` when expanded and there is no
     * related order. previous_attributes.order.anyOf[1] (Value): {@link
     * ExpandedOrderSummaryPreviousAttributes}. previous_attributes.order.anyOf[2] (Value): null.
     * previous_attributes.order_id (Optional): string or null. ID of the Order the Return is
     * against. previous_attributes.order_id.anyOf[1] (Value): string. ID of the Order the Return
     * is against. Example: "ord_01KEZF7C0054GQKJ142A8X367A". previous_attributes.order_id.anyOf[2]
     * (Value): null. previous_attributes.policy_evaluation (Optional): {@link
     * ReturnPolicyEvaluationPreviousAttributes} or null. How your return policies judged the
     * request when the Return was created. previous_attributes.policy_evaluation.anyOf[1] (Value):
     * {@link ReturnPolicyEvaluationPreviousAttributes}.
     * previous_attributes.policy_evaluation.anyOf[2] (Value): null.
     * previous_attributes.resolution_status (Optional): string or null. Whether the buyer has
     * received the value they are owed. Combines the Return's resolutions and its unsettled
     * corrections. Value enum: "not_selected", "pending", "partially_completed",
     * "requires_action", "completed", "failed". previous_attributes.resolution_status.anyOf[1]
     * (Value): string. Whether the buyer has received the value they are owed. Combines the
     * Return's resolutions and its unsettled corrections. Value enum: "not_selected", "pending",
     * "partially_completed", "requires_action", "completed", "failed".
     * previous_attributes.resolution_status.anyOf[2] (Value): null.
     * previous_attributes.return_disposition_ids (Optional): Array of string or null. IDs of every
     * disposition recorded for this Return, oldest first, including failed and canceled
     * dispositions. Expand `return_dispositions` on `GET /v1/returns/{return_id}` to read them
     * inline. previous_attributes.return_disposition_ids.anyOf[1] (Value): Array of string. IDs of
     * every disposition recorded for this Return, oldest first, including failed and canceled
     * dispositions. Expand `return_dispositions` on `GET /v1/returns/{return_id}` to read them
     * inline. previous_attributes.return_disposition_ids.anyOf[1][] (Value): string. Example:
     * "retdsp_01KEZF7C007H87J66PH2EEK1VW". previous_attributes.return_disposition_ids.anyOf[2]
     * (Value): null. previous_attributes.return_dispositions (Optional): Array of {@link
     * ReturnDispositionPreviousAttributes} or null. Present only when `expand` includes
     * `return_dispositions`. The dispositions in `return_disposition_ids`, in the same order.
     * previous_attributes.return_dispositions.anyOf[1] (Value): Array of {@link
     * ReturnDispositionPreviousAttributes}. Present only when `expand` includes
     * `return_dispositions`. The dispositions in `return_disposition_ids`, in the same order.
     * previous_attributes.return_dispositions.anyOf[1][] (Value): {@link
     * ReturnDispositionPreviousAttributes}. previous_attributes.return_dispositions.anyOf[2]
     * (Value): null. previous_attributes.return_id (Optional): string or null. Unique identifier
     * for this return, prefixed `ret_`. previous_attributes.return_id.anyOf[1] (Value): string.
     * Unique identifier for this return, prefixed `ret_`. Example:
     * "ret_01KEZF7C00PG93650ZKVQNGF7X". previous_attributes.return_id.anyOf[2] (Value): null.
     * previous_attributes.return_inspection_ids (Optional): Array of string or null. IDs of every
     * inspection recorded for this Return, oldest first, including superseded inspections. Expand
     * `return_inspections` on `GET /v1/returns/{return_id}` to read them inline.
     * previous_attributes.return_inspection_ids.anyOf[1] (Value): Array of string. IDs of every
     * inspection recorded for this Return, oldest first, including superseded inspections. Expand
     * `return_inspections` on `GET /v1/returns/{return_id}` to read them inline.
     * previous_attributes.return_inspection_ids.anyOf[1][] (Value): string. Example:
     * "retins_01KEZF7C00WPB0BR4WTT7CMSB8". previous_attributes.return_inspection_ids.anyOf[2]
     * (Value): null. previous_attributes.return_inspections (Optional): Array of {@link
     * ReturnInspectionPreviousAttributes} or null. Present only when `expand` includes
     * `return_inspections`. The inspections in `return_inspection_ids`, in the same order.
     * previous_attributes.return_inspections.anyOf[1] (Value): Array of {@link
     * ReturnInspectionPreviousAttributes}. Present only when `expand` includes
     * `return_inspections`. The inspections in `return_inspection_ids`, in the same order.
     * previous_attributes.return_inspections.anyOf[1][] (Value): {@link
     * ReturnInspectionPreviousAttributes}. previous_attributes.return_inspections.anyOf[2]
     * (Value): null. previous_attributes.return_number (Optional): string or null. Human-readable
     * number for the Return. previous_attributes.return_number.anyOf[1] (Value): string.
     * Human-readable number for the Return. previous_attributes.return_number.anyOf[2] (Value):
     * null. previous_attributes.return_receipt_ids (Optional): Array of string or null. IDs of
     * every receipt recorded for this Return, oldest first, including superseded receipts. Expand
     * `return_receipts` on `GET /v1/returns/{return_id}` to read them inline.
     * previous_attributes.return_receipt_ids.anyOf[1] (Value): Array of string. IDs of every
     * receipt recorded for this Return, oldest first, including superseded receipts. Expand
     * `return_receipts` on `GET /v1/returns/{return_id}` to read them inline.
     * previous_attributes.return_receipt_ids.anyOf[1][] (Value): string. Example:
     * "retrc_01KEZF7C0052GWDW41D9AJAVJZ". previous_attributes.return_receipt_ids.anyOf[2] (Value):
     * null. previous_attributes.return_receipts (Optional): Array of {@link
     * ReturnReceiptPreviousAttributes} or null. Present only when `expand` includes
     * `return_receipts`. The receipts in `return_receipt_ids`, in the same order.
     * previous_attributes.return_receipts.anyOf[1] (Value): Array of {@link
     * ReturnReceiptPreviousAttributes}. Present only when `expand` includes `return_receipts`. The
     * receipts in `return_receipt_ids`, in the same order.
     * previous_attributes.return_receipts.anyOf[1][] (Value): {@link
     * ReturnReceiptPreviousAttributes}. previous_attributes.return_receipts.anyOf[2] (Value):
     * null. previous_attributes.return_resolution_ids (Optional): Array of string or null. IDs of
     * every resolution created for this Return, oldest first, including failed and canceled
     * resolutions. Expand `return_resolutions` on `GET /v1/returns/{return_id}` to read them
     * inline. previous_attributes.return_resolution_ids.anyOf[1] (Value): Array of string. IDs of
     * every resolution created for this Return, oldest first, including failed and canceled
     * resolutions. Expand `return_resolutions` on `GET /v1/returns/{return_id}` to read them
     * inline. previous_attributes.return_resolution_ids.anyOf[1][] (Value): string. Example:
     * "retres_01KEZF7C00C7RZJN31W9SGMEQ3". previous_attributes.return_resolution_ids.anyOf[2]
     * (Value): null. previous_attributes.return_resolutions (Optional): Array of {@link
     * ReturnResolutionPreviousAttributes} or null. Present only when `expand` includes
     * `return_resolutions`. The resolutions in `return_resolution_ids`, in the same order.
     * previous_attributes.return_resolutions.anyOf[1] (Value): Array of {@link
     * ReturnResolutionPreviousAttributes}. Present only when `expand` includes
     * `return_resolutions`. The resolutions in `return_resolution_ids`, in the same order.
     * previous_attributes.return_resolutions.anyOf[1][] (Value): {@link
     * ReturnResolutionPreviousAttributes}. previous_attributes.return_resolutions.anyOf[2]
     * (Value): null. previous_attributes.shipment_ids (Optional): Array of string or null. IDs of
     * every shipment raised to send this Return's items back, oldest first, including voided
     * shipments. Expand `shipments` on `GET /v1/returns/{return_id}` to read them inline.
     * previous_attributes.shipment_ids.anyOf[1] (Value): Array of string. IDs of every shipment
     * raised to send this Return's items back, oldest first, including voided shipments. Expand
     * `shipments` on `GET /v1/returns/{return_id}` to read them inline.
     * previous_attributes.shipment_ids.anyOf[1][] (Value): string. Example:
     * "shp_01KEZF7C00Q2AFXWXHMCDR3F68". previous_attributes.shipment_ids.anyOf[2] (Value): null.
     * previous_attributes.shipments (Optional): Array of {@link
     * ExpandedShipmentSummaryPreviousAttributes} or null. Present only when `expand` includes
     * `shipments`. Summaries of the shipments in `shipment_ids`, in the same order.
     * previous_attributes.shipments.anyOf[1] (Value): Array of {@link
     * ExpandedShipmentSummaryPreviousAttributes}. Present only when `expand` includes `shipments`.
     * Summaries of the shipments in `shipment_ids`, in the same order.
     * previous_attributes.shipments.anyOf[1][] (Value): {@link
     * ExpandedShipmentSummaryPreviousAttributes}. previous_attributes.shipments.anyOf[2] (Value):
     * null. previous_attributes.status (Optional): string or null. Where the whole Return stands.
     * Read `decision_status`, `merchandise_status`, and `resolution_status` for the part you need.
     * Value enum: "requested", "open", "completed", "declined", "canceled".
     * previous_attributes.status.anyOf[1] (Value): string. Where the whole Return stands. Read
     * `decision_status`, `merchandise_status`, and `resolution_status` for the part you need.
     * Value enum: "requested", "open", "completed", "declined", "canceled".
     * previous_attributes.status.anyOf[2] (Value): null. previous_attributes.supported_actions
     * (Optional): Array of string or null. Actions that can succeed now. Actions the API key or
     * token doesn't have the scope for are left out. A Return waiting for a decision lists
     * `decide` and `cancel`. An open Return lists `cancel` only while no units have been received,
     * inspected, dispositioned, or resolved, and it has no current receipts or inspections,
     * non-canceled dispositions or resolutions, or non-voided return shipments. It lists
     * `complete` when `completion_mode` is `manual` and `completion_blockers` is empty. A
     * completed Return lists `reopen`. A declined or canceled Return lists none. [] enum:
     * "cancel", "complete", "decide", "process", "reopen".
     * previous_attributes.supported_actions.anyOf[1] (Value): Array of string. Actions that can
     * succeed now. Actions the API key or token doesn't have the scope for are left out. A Return
     * waiting for a decision lists `decide` and `cancel`. An open Return lists `cancel` only while
     * no units have been received, inspected, dispositioned, or resolved, and it has no current
     * receipts or inspections, non-canceled dispositions or resolutions, or non-voided return
     * shipments. It lists `complete` when `completion_mode` is `manual` and `completion_blockers`
     * is empty. A completed Return lists `reopen`. A declined or canceled Return lists none. []
     * enum: "cancel", "complete", "decide", "process", "reopen".
     * previous_attributes.supported_actions.anyOf[1][] (Value): string. Value enum: "cancel",
     * "complete", "decide", "process", "reopen". previous_attributes.supported_actions.anyOf[2]
     * (Value): null. previous_attributes.updated_at (Optional): string or null. RFC3339 timestamp.
     * previous_attributes.updated_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.updated_at.anyOf[2] (Value):
     * null. previous_attributes.version (Optional): integer or null. Goes up with every change to
     * the Return. Each activity's `return_version` is the version that activity produced. A write
     * that takes `expected_version` or `expected_return_version` for this Return compares it with
     * this value. previous_attributes.version.anyOf[1] (Value): integer. Goes up with every change
     * to the Return. Each activity's `return_version` is the version that activity produced. A
     * write that takes `expected_version` or `expected_return_version` for this Return compares it
     * with this value. Format: int64. minimum: 0. previous_attributes.version.anyOf[2] (Value):
     * null.
     */
    "data"?: {
        /**
         * Who caused this event, captured when the change commits. Omitted when the event predates
         * actor attribution or attribution is unavailable. Who performed a return action: a buyer,
         * merchant, integration, or the system, with an optional ID.
         */
        "actor"?: ReturnActor;
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * canceled_at (Optional): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". canceled_by (Optional): {@link ReturnActor}. Who canceled the
         * Return. Who performed a return action: a buyer, merchant, integration, or the system,
         * with an optional ID. cancellation_reason (Optional): string. Why the Return was
         * canceled. Value enum: "buyer_request", "merchant_request", "duplicate", "expired",
         * "created_in_error", "other". cancellation_reason_message (Optional): string. Detail sent
         * with the cancellation. Merchant reads only. completed_at (Optional): string. RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". completed_by (Optional):
         * {@link ReturnActor}. Who completed the Return. `system` when Flint completed it
         * automatically. Who performed a return action: a buyer, merchant, integration, or the
         * system, with an optional ID. completion_blockers (Required): Array of {@link
         * ReturnCompletionBlocker}. What is still owed before the Return can complete. Empty when
         * nothing is. completion_blockers[] (Value): {@link ReturnCompletionBlocker}. Something
         * still owed before a return can complete, with the return line or record it concerns.
         * completion_mode (Optional): string. automatic completes the Return when the last
         * completion blocker clears; manual waits for POST /v1/returns/{return_id}/complete.
         * Reopening a Return sets it to manual. Value enum: "manual", "automatic".
         * completion_reason (Optional): string. Why the Return was completed by hand. Absent when
         * Flint completed it automatically. Value enum: "manual_completion", "exception_waived",
         * "other". completion_reason_message (Optional): string. Detail sent when the Return was
         * completed by hand. created_at (Required): string. RFC3339 timestamp. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". customer (Optional): {@link ExpandedCustomerSummary} or
         * null. Present only when `expand` includes `customer`; `null` when expanded and there is
         * no related customer. customer.anyOf[1] (Value): {@link ExpandedCustomerSummary}. A
         * customer's summary fields, returned in place of a customer ID when the customer is
         * expanded. customer.anyOf[2] (Value): null. customer_id (Optional): string. The customer
         * the Return belongs to. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". decision_at
         * (Optional): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". decision_status (Required): string. Whether the requested units
         * were approved. `pending` until one decision covers every line. Value enum: "pending",
         * "approved", "partially_approved", "declined". external_reference_id (Optional): string.
         * Caller-owned identifier for this resource in an external system. maxLength: 255.
         * Example: "warehouse-1842". financial_summary (Required): {@link ReturnFinancialSummary}.
         * The Return's money in one place: the value of the returned lines, deductions and
         * credits, and what has been refunded or collected. The money for a return: returned
         * value, deductions, credits, replacement total, and amounts due to or from the buyer.
         * handoff_requirements (Required): Array of {@link ReturnHandoffRequirement}. What the
         * buyer still has to send back and where. Each entry leaves the list once it is satisfied,
         * so an empty list means nothing is waiting on the buyer. handoff_requirements[] (Value):
         * {@link ReturnHandoffRequirement}. What the buyer must do to hand merchandise back: the
         * destination, instructions, line items, and expiry. idempotency_key (Required): string or
         * null. The Idempotency-Key of the request that created this resource. `null` when that
         * request sent no key, Flint created the resource, the reader isn't the caller that
         * created it (another app install, a buyer, or the merchant reading an app's or buyer's
         * record), or the caller that created an older record is unknown. Filter its list with
         * `idempotency_key` to find it. Recorded payloads, including replayed responses and
         * webhook events, can return `null`. To find a key that a replay returns as `null`, read
         * the resource. Buyer routes return only keys from the buyer's namespace. initiated_by
         * (Required): string. Who created the Return: buyer for a customer session on /v1/me or
         * Flint's hosted account, merchant for a Dashboard user, integration for an API key or
         * partner app, or system for Flint automation. It cannot be sent. Value enum: "buyer",
         * "merchant", "integration", "system". line_items (Required): Array of {@link
         * ReturnLineItem}. The lines being returned. line_items[] (Value): {@link ReturnLineItem}.
         * An item included in a return request. merchandise_status (Required): string. On the
         * Return, the least-finished line's value. Value enum: "not_required", "awaiting_handoff",
         * "in_transit", "partially_received", "inspection_required", "partially_inspected",
         * "inspection_review_required", "disposition_required", "resolved", "exception". metadata
         * (Required): {@link MetadataMap}. Stored caller-owned key-value data. See `MetadataInput`
         * for key, value, and size rules. Caller-owned key-value data stored on a resource. Keys
         * starting with flint_ are reserved for Flint and are not returned. Writes follow the
         * limits on MetadataInput and MetadataPatchInput; maps written before those limits may not
         * satisfy them. order (Optional): {@link ExpandedOrderSummary} or null. Present only when
         * `expand` includes `order`; `null` when expanded and there is no related order.
         * order.anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary fields,
         * including status, payment and refund status, and pricing and settlement amounts,
         * returned when the order is expanded. order.anyOf[2] (Value): null. order_id (Required):
         * string. ID of the Order the Return is against. Example:
         * "ord_01KEZF7C0054GQKJ142A8X367A". policy_evaluation (Optional): {@link
         * ReturnPolicyEvaluation}. How your return policies judged the request when the Return was
         * created. How a return policy evaluated a return request: overall status and reason, the
         * policy revision used, and per-line results. resolution_status (Required): string.
         * Whether the buyer has received the value they are owed. Combines the Return's
         * resolutions and its unsettled corrections. Value enum: "not_selected", "pending",
         * "partially_completed", "requires_action", "completed", "failed". return_disposition_ids
         * (Required): Array of string. IDs of every disposition recorded for this Return, oldest
         * first, including failed and canceled dispositions. Expand `return_dispositions` on `GET
         * /v1/returns/{return_id}` to read them inline. return_disposition_ids[] (Value): string.
         * Example: "retdsp_01KEZF7C007H87J66PH2EEK1VW". return_dispositions (Optional): Array of
         * {@link ReturnDisposition}. Present only when `expand` includes `return_dispositions`.
         * The dispositions in `return_disposition_ids`, in the same order. return_dispositions[]
         * (Value): {@link ReturnDisposition}. A decision about how returned merchandise will be
         * handled. return_id (Required): string. Unique identifier for this return, prefixed
         * `ret_`. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X". return_inspection_ids (Required):
         * Array of string. IDs of every inspection recorded for this Return, oldest first,
         * including superseded inspections. Expand `return_inspections` on `GET
         * /v1/returns/{return_id}` to read them inline. return_inspection_ids[] (Value): string.
         * Example: "retins_01KEZF7C00WPB0BR4WTT7CMSB8". return_inspections (Optional): Array of
         * {@link ReturnInspection}. Present only when `expand` includes `return_inspections`. The
         * inspections in `return_inspection_ids`, in the same order. return_inspections[] (Value):
         * {@link ReturnInspection}. An assessment of the condition of returned items.
         * return_number (Required): string. Human-readable number for the Return.
         * return_receipt_ids (Required): Array of string. IDs of every receipt recorded for this
         * Return, oldest first, including superseded receipts. Expand `return_receipts` on `GET
         * /v1/returns/{return_id}` to read them inline. return_receipt_ids[] (Value): string.
         * Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ". return_receipts (Optional): Array of {@link
         * ReturnReceipt}. Present only when `expand` includes `return_receipts`. The receipts in
         * `return_receipt_ids`, in the same order. return_receipts[] (Value): {@link
         * ReturnReceipt}. A record of returned items arriving at a location. return_resolution_ids
         * (Required): Array of string. IDs of every resolution created for this Return, oldest
         * first, including failed and canceled resolutions. Expand `return_resolutions` on `GET
         * /v1/returns/{return_id}` to read them inline. return_resolution_ids[] (Value): string.
         * Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3". return_resolutions (Optional): Array of
         * {@link ReturnResolution}. Present only when `expand` includes `return_resolutions`. The
         * resolutions in `return_resolution_ids`, in the same order. return_resolutions[] (Value):
         * {@link ReturnResolution}. The refund, exchange, or other outcome of a return.
         * shipment_ids (Required): Array of string. IDs of every shipment raised to send this
         * Return's items back, oldest first, including voided shipments. Expand `shipments` on
         * `GET /v1/returns/{return_id}` to read them inline. shipment_ids[] (Value): string.
         * Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68". shipments (Optional): Array of {@link
         * ExpandedShipmentSummary}. Present only when `expand` includes `shipments`. Summaries of
         * the shipments in `shipment_ids`, in the same order. shipments[] (Value): {@link
         * ExpandedShipmentSummary}. A shipment's summary fields, including direction, status, and
         * package count, returned when the shipment is expanded. status (Required): string. Where
         * the whole Return stands. Read `decision_status`, `merchandise_status`, and
         * `resolution_status` for the part you need. Value enum: "requested", "open", "completed",
         * "declined", "canceled". supported_actions (Required): Array of string. Actions that can
         * succeed now. Actions the API key or token doesn't have the scope for are left out. A
         * Return waiting for a decision lists `decide` and `cancel`. An open Return lists `cancel`
         * only while no units have been received, inspected, dispositioned, or resolved, and it
         * has no current receipts or inspections, non-canceled dispositions or resolutions, or
         * non-voided return shipments. It lists `complete` when `completion_mode` is `manual` and
         * `completion_blockers` is empty. A completed Return lists `reopen`. A declined or
         * canceled Return lists none. [] enum: "cancel", "complete", "decide", "process",
         * "reopen". supported_actions[] (Value): string. Value enum: "cancel", "complete",
         * "decide", "process", "reopen". updated_at (Required): string. RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". version (Required): integer. Goes up with
         * every change to the Return. Each activity's `return_version` is the version that
         * activity produced. A write that takes `expected_version` or `expected_return_version`
         * for this Return compares it with this value. Format: int64. minimum: 0.
         */
        "object": {
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "canceled_at"?: string;
            /**
             * Who canceled the Return. Who performed a return action: a buyer, merchant,
             * integration, or the system, with an optional ID.
             */
            "canceled_by"?: ReturnActor;
            /**
             * Why the Return was canceled. Value enum: "buyer_request", "merchant_request",
             * "duplicate", "expired", "created_in_error", "other".
             */
            "cancellation_reason"?: "buyer_request"
                | "merchant_request"
                | "duplicate"
                | "expired"
                | "created_in_error"
                | "other"
                | (string & {});
            /** Detail sent with the cancellation. Merchant reads only. */
            "cancellation_reason_message"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "completed_at"?: string;
            /**
             * Who completed the Return. `system` when Flint completed it automatically. Who
             * performed a return action: a buyer, merchant, integration, or the system, with an
             * optional ID.
             */
            "completed_by"?: ReturnActor;
            /**
             * What is still owed before the Return can complete. Empty when nothing is. []
             * (Value): {@link ReturnCompletionBlocker}. Something still owed before a return can
             * complete, with the return line or record it concerns.
             */
            "completion_blockers": Array<ReturnCompletionBlocker>;
            /**
             * automatic completes the Return when the last completion blocker clears; manual waits
             * for POST /v1/returns/{return_id}/complete. Reopening a Return sets it to manual.
             * Value enum: "manual", "automatic".
             */
            "completion_mode"?: "manual" | "automatic" | (string & {});
            /**
             * Why the Return was completed by hand. Absent when Flint completed it automatically.
             * Value enum: "manual_completion", "exception_waived", "other".
             */
            "completion_reason"?: "manual_completion" | "exception_waived" | "other" | (string & {});
            /** Detail sent when the Return was completed by hand. */
            "completion_reason_message"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Present only when `expand` includes `customer`; `null` when expanded and there is no
             * related customer. anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's
             * summary fields, returned in place of a customer ID when the customer is expanded.
             * anyOf[2] (Value): null.
             */
            "customer"?: ((ExpandedCustomerSummary) | (null));
            /** The customer the Return belongs to. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". */
            "customer_id"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "decision_at"?: string;
            /**
             * Whether the requested units were approved. `pending` until one decision covers every
             * line. Value enum: "pending", "approved", "partially_approved", "declined".
             */
            "decision_status": "pending" | "approved" | "partially_approved" | "declined" | (string & {});
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * The Return's money in one place: the value of the returned lines, deductions and
             * credits, and what has been refunded or collected. The money for a return: returned
             * value, deductions, credits, replacement total, and amounts due to or from the buyer.
             */
            "financial_summary": ReturnFinancialSummary;
            /**
             * What the buyer still has to send back and where. Each entry leaves the list once it
             * is satisfied, so an empty list means nothing is waiting on the buyer. [] (Value):
             * {@link ReturnHandoffRequirement}. What the buyer must do to hand merchandise back:
             * the destination, instructions, line items, and expiry.
             */
            "handoff_requirements": Array<ReturnHandoffRequirement>;
            /**
             * The Idempotency-Key of the request that created this resource. `null` when that
             * request sent no key, Flint created the resource, the reader isn't the caller that
             * created it (another app install, a buyer, or the merchant reading an app's or
             * buyer's record), or the caller that created an older record is unknown. Filter its
             * list with `idempotency_key` to find it. Recorded payloads, including replayed
             * responses and webhook events, can return `null`. To find a key that a replay returns
             * as `null`, read the resource. Buyer routes return only keys from the buyer's
             * namespace.
             */
            "idempotency_key": string | null;
            /**
             * Who created the Return: buyer for a customer session on /v1/me or Flint's hosted
             * account, merchant for a Dashboard user, integration for an API key or partner app,
             * or system for Flint automation. It cannot be sent. Value enum: "buyer", "merchant",
             * "integration", "system".
             */
            "initiated_by": "buyer" | "merchant" | "integration" | "system" | (string & {});
            /**
             * The lines being returned. [] (Value): {@link ReturnLineItem}. An item included in a
             * return request.
             */
            "line_items": Array<ReturnLineItem>;
            /**
             * On the Return, the least-finished line's value. Value enum: "not_required",
             * "awaiting_handoff", "in_transit", "partially_received", "inspection_required",
             * "partially_inspected", "inspection_review_required", "disposition_required",
             * "resolved", "exception".
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
            /**
             * Stored caller-owned key-value data. See `MetadataInput` for key, value, and size
             * rules. Caller-owned key-value data stored on a resource. Keys starting with flint_
             * are reserved for Flint and are not returned. Writes follow the limits on
             * MetadataInput and MetadataPatchInput; maps written before those limits may not
             * satisfy them.
             */
            "metadata": MetadataMap;
            /**
             * Present only when `expand` includes `order`; `null` when expanded and there is no
             * related order. anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary
             * fields, including status, payment and refund status, and pricing and settlement
             * amounts, returned when the order is expanded. anyOf[2] (Value): null.
             */
            "order"?: ((ExpandedOrderSummary) | (null));
            /** ID of the Order the Return is against. Example: "ord_01KEZF7C0054GQKJ142A8X367A". */
            "order_id": string;
            /**
             * How your return policies judged the request when the Return was created. How a
             * return policy evaluated a return request: overall status and reason, the policy
             * revision used, and per-line results.
             */
            "policy_evaluation"?: ReturnPolicyEvaluation;
            /**
             * Whether the buyer has received the value they are owed. Combines the Return's
             * resolutions and its unsettled corrections. Value enum: "not_selected", "pending",
             * "partially_completed", "requires_action", "completed", "failed".
             */
            "resolution_status": "not_selected"
                | "pending"
                | "partially_completed"
                | "requires_action"
                | "completed"
                | "failed"
                | (string & {});
            /**
             * IDs of every disposition recorded for this Return, oldest first, including failed
             * and canceled dispositions. Expand `return_dispositions` on `GET
             * /v1/returns/{return_id}` to read them inline. [] (Value): string. Example:
             * "retdsp_01KEZF7C007H87J66PH2EEK1VW".
             */
            "return_disposition_ids": Array<string>;
            /**
             * Present only when `expand` includes `return_dispositions`. The dispositions in
             * `return_disposition_ids`, in the same order. [] (Value): {@link ReturnDisposition}.
             * A decision about how returned merchandise will be handled.
             */
            "return_dispositions"?: Array<ReturnDisposition>;
            /**
             * Unique identifier for this return, prefixed `ret_`. Example:
             * "ret_01KEZF7C00PG93650ZKVQNGF7X".
             */
            "return_id": string;
            /**
             * IDs of every inspection recorded for this Return, oldest first, including superseded
             * inspections. Expand `return_inspections` on `GET /v1/returns/{return_id}` to read
             * them inline. [] (Value): string. Example: "retins_01KEZF7C00WPB0BR4WTT7CMSB8".
             */
            "return_inspection_ids": Array<string>;
            /**
             * Present only when `expand` includes `return_inspections`. The inspections in
             * `return_inspection_ids`, in the same order. [] (Value): {@link ReturnInspection}. An
             * assessment of the condition of returned items.
             */
            "return_inspections"?: Array<ReturnInspection>;
            /** Human-readable number for the Return. */
            "return_number": string;
            /**
             * IDs of every receipt recorded for this Return, oldest first, including superseded
             * receipts. Expand `return_receipts` on `GET /v1/returns/{return_id}` to read them
             * inline. [] (Value): string. Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ".
             */
            "return_receipt_ids": Array<string>;
            /**
             * Present only when `expand` includes `return_receipts`. The receipts in
             * `return_receipt_ids`, in the same order. [] (Value): {@link ReturnReceipt}. A record
             * of returned items arriving at a location.
             */
            "return_receipts"?: Array<ReturnReceipt>;
            /**
             * IDs of every resolution created for this Return, oldest first, including failed and
             * canceled resolutions. Expand `return_resolutions` on `GET /v1/returns/{return_id}`
             * to read them inline. [] (Value): string. Example:
             * "retres_01KEZF7C00C7RZJN31W9SGMEQ3".
             */
            "return_resolution_ids": Array<string>;
            /**
             * Present only when `expand` includes `return_resolutions`. The resolutions in
             * `return_resolution_ids`, in the same order. [] (Value): {@link ReturnResolution}.
             * The refund, exchange, or other outcome of a return.
             */
            "return_resolutions"?: Array<ReturnResolution>;
            /**
             * IDs of every shipment raised to send this Return's items back, oldest first,
             * including voided shipments. Expand `shipments` on `GET /v1/returns/{return_id}` to
             * read them inline. [] (Value): string. Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68".
             */
            "shipment_ids": Array<string>;
            /**
             * Present only when `expand` includes `shipments`. Summaries of the shipments in
             * `shipment_ids`, in the same order. [] (Value): {@link ExpandedShipmentSummary}. A
             * shipment's summary fields, including direction, status, and package count, returned
             * when the shipment is expanded.
             */
            "shipments"?: Array<ExpandedShipmentSummary>;
            /**
             * Where the whole Return stands. Read `decision_status`, `merchandise_status`, and
             * `resolution_status` for the part you need. Value enum: "requested", "open",
             * "completed", "declined", "canceled".
             */
            "status": "requested" | "open" | "completed" | "declined" | "canceled" | (string & {});
            /**
             * Actions that can succeed now. Actions the API key or token doesn't have the scope
             * for are left out. A Return waiting for a decision lists `decide` and `cancel`. An
             * open Return lists `cancel` only while no units have been received, inspected,
             * dispositioned, or resolved, and it has no current receipts or inspections,
             * non-canceled dispositions or resolutions, or non-voided return shipments. It lists
             * `complete` when `completion_mode` is `manual` and `completion_blockers` is empty. A
             * completed Return lists `reopen`. A declined or canceled Return lists none. [] enum:
             * "cancel", "complete", "decide", "process", "reopen". [] (Value): string. Value enum:
             * "cancel", "complete", "decide", "process", "reopen".
             */
            "supported_actions": Array<"cancel" | "complete" | "decide" | "process" | "reopen" | (string & {})>;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Goes up with every change to the Return. Each activity's `return_version` is the
             * version that activity produced. A write that takes `expected_version` or
             * `expected_return_version` for this Return compares it with this value. Format:
             * int64. minimum: 0.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events. canceled_at (Optional): string or null. RFC3339
         * timestamp. canceled_at.anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". canceled_at.anyOf[2] (Value): null. canceled_by
         * (Optional): {@link ReturnActorPreviousAttributes} or null. Who canceled the Return.
         * canceled_by.anyOf[1] (Value): {@link ReturnActorPreviousAttributes}.
         * canceled_by.anyOf[2] (Value): null. cancellation_reason (Optional): string or null. Why
         * the Return was canceled. Value enum: "buyer_request", "merchant_request", "duplicate",
         * "expired", "created_in_error", "other". cancellation_reason.anyOf[1] (Value): string.
         * Why the Return was canceled. Value enum: "buyer_request", "merchant_request",
         * "duplicate", "expired", "created_in_error", "other". cancellation_reason.anyOf[2]
         * (Value): null. cancellation_reason_message (Optional): string or null. Detail sent with
         * the cancellation. Merchant reads only. cancellation_reason_message.anyOf[1] (Value):
         * string. Detail sent with the cancellation. Merchant reads only.
         * cancellation_reason_message.anyOf[2] (Value): null. completed_at (Optional): string or
         * null. RFC3339 timestamp. completed_at.anyOf[1] (Value): string. RFC3339 timestamp.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". completed_at.anyOf[2] (Value): null.
         * completed_by (Optional): {@link ReturnActorPreviousAttributes} or null. Who completed
         * the Return. `system` when Flint completed it automatically. completed_by.anyOf[1]
         * (Value): {@link ReturnActorPreviousAttributes}. completed_by.anyOf[2] (Value): null.
         * completion_blockers (Optional): Array of {@link
         * ReturnCompletionBlockerPreviousAttributes} or null. What is still owed before the Return
         * can complete. Empty when nothing is. completion_blockers.anyOf[1] (Value): Array of
         * {@link ReturnCompletionBlockerPreviousAttributes}. What is still owed before the Return
         * can complete. Empty when nothing is. completion_blockers.anyOf[1][] (Value): {@link
         * ReturnCompletionBlockerPreviousAttributes}. completion_blockers.anyOf[2] (Value): null.
         * completion_mode (Optional): string or null. automatic completes the Return when the last
         * completion blocker clears; manual waits for POST /v1/returns/{return_id}/complete.
         * Reopening a Return sets it to manual. Value enum: "manual", "automatic".
         * completion_mode.anyOf[1] (Value): string. automatic completes the Return when the last
         * completion blocker clears; manual waits for POST /v1/returns/{return_id}/complete.
         * Reopening a Return sets it to manual. Value enum: "manual", "automatic".
         * completion_mode.anyOf[2] (Value): null. completion_reason (Optional): string or null.
         * Why the Return was completed by hand. Absent when Flint completed it automatically.
         * Value enum: "manual_completion", "exception_waived", "other". completion_reason.anyOf[1]
         * (Value): string. Why the Return was completed by hand. Absent when Flint completed it
         * automatically. Value enum: "manual_completion", "exception_waived", "other".
         * completion_reason.anyOf[2] (Value): null. completion_reason_message (Optional): string
         * or null. Detail sent when the Return was completed by hand.
         * completion_reason_message.anyOf[1] (Value): string. Detail sent when the Return was
         * completed by hand. completion_reason_message.anyOf[2] (Value): null. created_at
         * (Optional): string or null. RFC3339 timestamp. created_at.anyOf[1] (Value): string.
         * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * created_at.anyOf[2] (Value): null. customer (Optional): {@link
         * ExpandedCustomerSummaryPreviousAttributes} or null. Present only when `expand` includes
         * `customer`; `null` when expanded and there is no related customer. customer.anyOf[1]
         * (Value): {@link ExpandedCustomerSummaryPreviousAttributes}. customer.anyOf[2] (Value):
         * null. customer_id (Optional): string or null. The customer the Return belongs to.
         * customer_id.anyOf[1] (Value): string. The customer the Return belongs to. Example:
         * "cus_01KEZF7C006X9JK6NZNA2SM9XD". customer_id.anyOf[2] (Value): null. decision_at
         * (Optional): string or null. RFC3339 timestamp. decision_at.anyOf[1] (Value): string.
         * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * decision_at.anyOf[2] (Value): null. decision_status (Optional): string or null. Whether
         * the requested units were approved. `pending` until one decision covers every line. Value
         * enum: "pending", "approved", "partially_approved", "declined". decision_status.anyOf[1]
         * (Value): string. Whether the requested units were approved. `pending` until one decision
         * covers every line. Value enum: "pending", "approved", "partially_approved", "declined".
         * decision_status.anyOf[2] (Value): null. external_reference_id (Optional): string or
         * null. Caller-owned identifier for this resource in an external system.
         * external_reference_id.anyOf[1] (Value): string. Caller-owned identifier for this
         * resource in an external system. maxLength: 255. Example: "warehouse-1842".
         * external_reference_id.anyOf[2] (Value): null. financial_summary (Optional): {@link
         * ReturnFinancialSummaryPreviousAttributes} or null. The Return's money in one place: the
         * value of the returned lines, deductions and credits, and what has been refunded or
         * collected. financial_summary.anyOf[1] (Value): {@link
         * ReturnFinancialSummaryPreviousAttributes}. financial_summary.anyOf[2] (Value): null.
         * handoff_requirements (Optional): Array of {@link
         * ReturnHandoffRequirementPreviousAttributes} or null. What the buyer still has to send
         * back and where. Each entry leaves the list once it is satisfied, so an empty list means
         * nothing is waiting on the buyer. handoff_requirements.anyOf[1] (Value): Array of {@link
         * ReturnHandoffRequirementPreviousAttributes}. What the buyer still has to send back and
         * where. Each entry leaves the list once it is satisfied, so an empty list means nothing
         * is waiting on the buyer. handoff_requirements.anyOf[1][] (Value): {@link
         * ReturnHandoffRequirementPreviousAttributes}. handoff_requirements.anyOf[2] (Value):
         * null. idempotency_key (Optional): string or null. The Idempotency-Key of the request
         * that created this resource. `null` when that request sent no key, Flint created the
         * resource, the reader isn't the caller that created it (another app install, a buyer, or
         * the merchant reading an app's or buyer's record), or the caller that created an older
         * record is unknown. Filter its list with `idempotency_key` to find it. Recorded payloads,
         * including replayed responses and webhook events, can return `null`. To find a key that a
         * replay returns as `null`, read the resource. Buyer routes return only keys from the
         * buyer's namespace. idempotency_key.anyOf[1] (Value): string. The Idempotency-Key of the
         * request that created this resource. `null` when that request sent no key, Flint created
         * the resource, the reader isn't the caller that created it (another app install, a buyer,
         * or the merchant reading an app's or buyer's record), or the caller that created an older
         * record is unknown. Filter its list with `idempotency_key` to find it. Recorded payloads,
         * including replayed responses and webhook events, can return `null`. To find a key that a
         * replay returns as `null`, read the resource. Buyer routes return only keys from the
         * buyer's namespace. idempotency_key.anyOf[2] (Value): null. initiated_by (Optional):
         * string or null. Who created the Return: buyer for a customer session on /v1/me or
         * Flint's hosted account, merchant for a Dashboard user, integration for an API key or
         * partner app, or system for Flint automation. It cannot be sent. Value enum: "buyer",
         * "merchant", "integration", "system". initiated_by.anyOf[1] (Value): string. Who created
         * the Return: buyer for a customer session on /v1/me or Flint's hosted account, merchant
         * for a Dashboard user, integration for an API key or partner app, or system for Flint
         * automation. It cannot be sent. Value enum: "buyer", "merchant", "integration", "system".
         * initiated_by.anyOf[2] (Value): null. line_items (Optional): Array of {@link
         * ReturnLineItemPreviousAttributes} or null. The lines being returned. line_items.anyOf[1]
         * (Value): Array of {@link ReturnLineItemPreviousAttributes}. The lines being returned.
         * line_items.anyOf[1][] (Value): {@link ReturnLineItemPreviousAttributes}.
         * line_items.anyOf[2] (Value): null. merchandise_status (Optional): string or null. On the
         * Return, the least-finished line's value. Value enum: "not_required", "awaiting_handoff",
         * "in_transit", "partially_received", "inspection_required", "partially_inspected",
         * "inspection_review_required", "disposition_required", "resolved", "exception".
         * merchandise_status.anyOf[1] (Value): string. On the Return, the least-finished line's
         * value. Value enum: "not_required", "awaiting_handoff", "in_transit",
         * "partially_received", "inspection_required", "partially_inspected",
         * "inspection_review_required", "disposition_required", "resolved", "exception".
         * merchandise_status.anyOf[2] (Value): null. metadata (Optional): {@link MetadataMap} or
         * null. Stored caller-owned key-value data. See `MetadataInput` for key, value, and size
         * rules. metadata.anyOf[1] (Value): {@link MetadataMap}. metadata.anyOf[2] (Value): null.
         * order (Optional): {@link ExpandedOrderSummaryPreviousAttributes} or null. Present only
         * when `expand` includes `order`; `null` when expanded and there is no related order.
         * order.anyOf[1] (Value): {@link ExpandedOrderSummaryPreviousAttributes}. order.anyOf[2]
         * (Value): null. order_id (Optional): string or null. ID of the Order the Return is
         * against. order_id.anyOf[1] (Value): string. ID of the Order the Return is against.
         * Example: "ord_01KEZF7C0054GQKJ142A8X367A". order_id.anyOf[2] (Value): null.
         * policy_evaluation (Optional): {@link ReturnPolicyEvaluationPreviousAttributes} or null.
         * How your return policies judged the request when the Return was created.
         * policy_evaluation.anyOf[1] (Value): {@link ReturnPolicyEvaluationPreviousAttributes}.
         * policy_evaluation.anyOf[2] (Value): null. resolution_status (Optional): string or null.
         * Whether the buyer has received the value they are owed. Combines the Return's
         * resolutions and its unsettled corrections. Value enum: "not_selected", "pending",
         * "partially_completed", "requires_action", "completed", "failed".
         * resolution_status.anyOf[1] (Value): string. Whether the buyer has received the value
         * they are owed. Combines the Return's resolutions and its unsettled corrections. Value
         * enum: "not_selected", "pending", "partially_completed", "requires_action", "completed",
         * "failed". resolution_status.anyOf[2] (Value): null. return_disposition_ids (Optional):
         * Array of string or null. IDs of every disposition recorded for this Return, oldest
         * first, including failed and canceled dispositions. Expand `return_dispositions` on `GET
         * /v1/returns/{return_id}` to read them inline. return_disposition_ids.anyOf[1] (Value):
         * Array of string. IDs of every disposition recorded for this Return, oldest first,
         * including failed and canceled dispositions. Expand `return_dispositions` on `GET
         * /v1/returns/{return_id}` to read them inline. return_disposition_ids.anyOf[1][] (Value):
         * string. Example: "retdsp_01KEZF7C007H87J66PH2EEK1VW". return_disposition_ids.anyOf[2]
         * (Value): null. return_dispositions (Optional): Array of {@link
         * ReturnDispositionPreviousAttributes} or null. Present only when `expand` includes
         * `return_dispositions`. The dispositions in `return_disposition_ids`, in the same order.
         * return_dispositions.anyOf[1] (Value): Array of {@link
         * ReturnDispositionPreviousAttributes}. Present only when `expand` includes
         * `return_dispositions`. The dispositions in `return_disposition_ids`, in the same order.
         * return_dispositions.anyOf[1][] (Value): {@link ReturnDispositionPreviousAttributes}.
         * return_dispositions.anyOf[2] (Value): null. return_id (Optional): string or null. Unique
         * identifier for this return, prefixed `ret_`. return_id.anyOf[1] (Value): string. Unique
         * identifier for this return, prefixed `ret_`. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X".
         * return_id.anyOf[2] (Value): null. return_inspection_ids (Optional): Array of string or
         * null. IDs of every inspection recorded for this Return, oldest first, including
         * superseded inspections. Expand `return_inspections` on `GET /v1/returns/{return_id}` to
         * read them inline. return_inspection_ids.anyOf[1] (Value): Array of string. IDs of every
         * inspection recorded for this Return, oldest first, including superseded inspections.
         * Expand `return_inspections` on `GET /v1/returns/{return_id}` to read them inline.
         * return_inspection_ids.anyOf[1][] (Value): string. Example:
         * "retins_01KEZF7C00WPB0BR4WTT7CMSB8". return_inspection_ids.anyOf[2] (Value): null.
         * return_inspections (Optional): Array of {@link ReturnInspectionPreviousAttributes} or
         * null. Present only when `expand` includes `return_inspections`. The inspections in
         * `return_inspection_ids`, in the same order. return_inspections.anyOf[1] (Value): Array
         * of {@link ReturnInspectionPreviousAttributes}. Present only when `expand` includes
         * `return_inspections`. The inspections in `return_inspection_ids`, in the same order.
         * return_inspections.anyOf[1][] (Value): {@link ReturnInspectionPreviousAttributes}.
         * return_inspections.anyOf[2] (Value): null. return_number (Optional): string or null.
         * Human-readable number for the Return. return_number.anyOf[1] (Value): string.
         * Human-readable number for the Return. return_number.anyOf[2] (Value): null.
         * return_receipt_ids (Optional): Array of string or null. IDs of every receipt recorded
         * for this Return, oldest first, including superseded receipts. Expand `return_receipts`
         * on `GET /v1/returns/{return_id}` to read them inline. return_receipt_ids.anyOf[1]
         * (Value): Array of string. IDs of every receipt recorded for this Return, oldest first,
         * including superseded receipts. Expand `return_receipts` on `GET /v1/returns/{return_id}`
         * to read them inline. return_receipt_ids.anyOf[1][] (Value): string. Example:
         * "retrc_01KEZF7C0052GWDW41D9AJAVJZ". return_receipt_ids.anyOf[2] (Value): null.
         * return_receipts (Optional): Array of {@link ReturnReceiptPreviousAttributes} or null.
         * Present only when `expand` includes `return_receipts`. The receipts in
         * `return_receipt_ids`, in the same order. return_receipts.anyOf[1] (Value): Array of
         * {@link ReturnReceiptPreviousAttributes}. Present only when `expand` includes
         * `return_receipts`. The receipts in `return_receipt_ids`, in the same order.
         * return_receipts.anyOf[1][] (Value): {@link ReturnReceiptPreviousAttributes}.
         * return_receipts.anyOf[2] (Value): null. return_resolution_ids (Optional): Array of
         * string or null. IDs of every resolution created for this Return, oldest first, including
         * failed and canceled resolutions. Expand `return_resolutions` on `GET
         * /v1/returns/{return_id}` to read them inline. return_resolution_ids.anyOf[1] (Value):
         * Array of string. IDs of every resolution created for this Return, oldest first,
         * including failed and canceled resolutions. Expand `return_resolutions` on `GET
         * /v1/returns/{return_id}` to read them inline. return_resolution_ids.anyOf[1][] (Value):
         * string. Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3". return_resolution_ids.anyOf[2]
         * (Value): null. return_resolutions (Optional): Array of {@link
         * ReturnResolutionPreviousAttributes} or null. Present only when `expand` includes
         * `return_resolutions`. The resolutions in `return_resolution_ids`, in the same order.
         * return_resolutions.anyOf[1] (Value): Array of {@link
         * ReturnResolutionPreviousAttributes}. Present only when `expand` includes
         * `return_resolutions`. The resolutions in `return_resolution_ids`, in the same order.
         * return_resolutions.anyOf[1][] (Value): {@link ReturnResolutionPreviousAttributes}.
         * return_resolutions.anyOf[2] (Value): null. shipment_ids (Optional): Array of string or
         * null. IDs of every shipment raised to send this Return's items back, oldest first,
         * including voided shipments. Expand `shipments` on `GET /v1/returns/{return_id}` to read
         * them inline. shipment_ids.anyOf[1] (Value): Array of string. IDs of every shipment
         * raised to send this Return's items back, oldest first, including voided shipments.
         * Expand `shipments` on `GET /v1/returns/{return_id}` to read them inline.
         * shipment_ids.anyOf[1][] (Value): string. Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68".
         * shipment_ids.anyOf[2] (Value): null. shipments (Optional): Array of {@link
         * ExpandedShipmentSummaryPreviousAttributes} or null. Present only when `expand` includes
         * `shipments`. Summaries of the shipments in `shipment_ids`, in the same order.
         * shipments.anyOf[1] (Value): Array of {@link ExpandedShipmentSummaryPreviousAttributes}.
         * Present only when `expand` includes `shipments`. Summaries of the shipments in
         * `shipment_ids`, in the same order. shipments.anyOf[1][] (Value): {@link
         * ExpandedShipmentSummaryPreviousAttributes}. shipments.anyOf[2] (Value): null. status
         * (Optional): string or null. Where the whole Return stands. Read `decision_status`,
         * `merchandise_status`, and `resolution_status` for the part you need. Value enum:
         * "requested", "open", "completed", "declined", "canceled". status.anyOf[1] (Value):
         * string. Where the whole Return stands. Read `decision_status`, `merchandise_status`, and
         * `resolution_status` for the part you need. Value enum: "requested", "open", "completed",
         * "declined", "canceled". status.anyOf[2] (Value): null. supported_actions (Optional):
         * Array of string or null. Actions that can succeed now. Actions the API key or token
         * doesn't have the scope for are left out. A Return waiting for a decision lists `decide`
         * and `cancel`. An open Return lists `cancel` only while no units have been received,
         * inspected, dispositioned, or resolved, and it has no current receipts or inspections,
         * non-canceled dispositions or resolutions, or non-voided return shipments. It lists
         * `complete` when `completion_mode` is `manual` and `completion_blockers` is empty. A
         * completed Return lists `reopen`. A declined or canceled Return lists none. [] enum:
         * "cancel", "complete", "decide", "process", "reopen". supported_actions.anyOf[1] (Value):
         * Array of string. Actions that can succeed now. Actions the API key or token doesn't have
         * the scope for are left out. A Return waiting for a decision lists `decide` and `cancel`.
         * An open Return lists `cancel` only while no units have been received, inspected,
         * dispositioned, or resolved, and it has no current receipts or inspections, non-canceled
         * dispositions or resolutions, or non-voided return shipments. It lists `complete` when
         * `completion_mode` is `manual` and `completion_blockers` is empty. A completed Return
         * lists `reopen`. A declined or canceled Return lists none. [] enum: "cancel", "complete",
         * "decide", "process", "reopen". supported_actions.anyOf[1][] (Value): string. Value enum:
         * "cancel", "complete", "decide", "process", "reopen". supported_actions.anyOf[2] (Value):
         * null. updated_at (Optional): string or null. RFC3339 timestamp. updated_at.anyOf[1]
         * (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * updated_at.anyOf[2] (Value): null. version (Optional): integer or null. Goes up with
         * every change to the Return. Each activity's `return_version` is the version that
         * activity produced. A write that takes `expected_version` or `expected_return_version`
         * for this Return compares it with this value. version.anyOf[1] (Value): integer. Goes up
         * with every change to the Return. Each activity's `return_version` is the version that
         * activity produced. A write that takes `expected_version` or `expected_return_version`
         * for this Return compares it with this value. Format: int64. minimum: 0. version.anyOf[2]
         * (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "canceled_at"?: ((string) | (null));
            /**
             * Who canceled the Return. anyOf[1] (Value): {@link ReturnActorPreviousAttributes}.
             * anyOf[2] (Value): null.
             */
            "canceled_by"?: ((ReturnActorPreviousAttributes) | (null));
            /**
             * Why the Return was canceled. Value enum: "buyer_request", "merchant_request",
             * "duplicate", "expired", "created_in_error", "other". anyOf[1] (Value): string. Why
             * the Return was canceled. Value enum: "buyer_request", "merchant_request",
             * "duplicate", "expired", "created_in_error", "other". anyOf[2] (Value): null.
             */
            "cancellation_reason"?: (("buyer_request"
                | "merchant_request"
                | "duplicate"
                | "expired"
                | "created_in_error"
                | "other"
                | (string & {}))
                | (null));
            /**
             * Detail sent with the cancellation. Merchant reads only. anyOf[1] (Value): string.
             * Detail sent with the cancellation. Merchant reads only. anyOf[2] (Value): null.
             */
            "cancellation_reason_message"?: ((string) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "completed_at"?: ((string) | (null));
            /**
             * Who completed the Return. `system` when Flint completed it automatically. anyOf[1]
             * (Value): {@link ReturnActorPreviousAttributes}. anyOf[2] (Value): null.
             */
            "completed_by"?: ((ReturnActorPreviousAttributes) | (null));
            /**
             * What is still owed before the Return can complete. Empty when nothing is. anyOf[1]
             * (Value): Array of {@link ReturnCompletionBlockerPreviousAttributes}. What is still
             * owed before the Return can complete. Empty when nothing is. anyOf[1][] (Value):
             * {@link ReturnCompletionBlockerPreviousAttributes}. anyOf[2] (Value): null.
             */
            "completion_blockers"?: ((Array<ReturnCompletionBlockerPreviousAttributes>) | (null));
            /**
             * automatic completes the Return when the last completion blocker clears; manual waits
             * for POST /v1/returns/{return_id}/complete. Reopening a Return sets it to manual.
             * Value enum: "manual", "automatic". anyOf[1] (Value): string. automatic completes the
             * Return when the last completion blocker clears; manual waits for POST
             * /v1/returns/{return_id}/complete. Reopening a Return sets it to manual. Value enum:
             * "manual", "automatic". anyOf[2] (Value): null.
             */
            "completion_mode"?: (("manual" | "automatic" | (string & {})) | (null));
            /**
             * Why the Return was completed by hand. Absent when Flint completed it automatically.
             * Value enum: "manual_completion", "exception_waived", "other". anyOf[1] (Value):
             * string. Why the Return was completed by hand. Absent when Flint completed it
             * automatically. Value enum: "manual_completion", "exception_waived", "other".
             * anyOf[2] (Value): null.
             */
            "completion_reason"?: (("manual_completion" | "exception_waived" | "other" | (string & {})) | (null));
            /**
             * Detail sent when the Return was completed by hand. anyOf[1] (Value): string. Detail
             * sent when the Return was completed by hand. anyOf[2] (Value): null.
             */
            "completion_reason_message"?: ((string) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * Present only when `expand` includes `customer`; `null` when expanded and there is no
             * related customer. anyOf[1] (Value): {@link
             * ExpandedCustomerSummaryPreviousAttributes}. anyOf[2] (Value): null.
             */
            "customer"?: ((ExpandedCustomerSummaryPreviousAttributes) | (null));
            /**
             * The customer the Return belongs to. anyOf[1] (Value): string. The customer the
             * Return belongs to. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". anyOf[2] (Value):
             * null.
             */
            "customer_id"?: ((string) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "decision_at"?: ((string) | (null));
            /**
             * Whether the requested units were approved. `pending` until one decision covers every
             * line. Value enum: "pending", "approved", "partially_approved", "declined". anyOf[1]
             * (Value): string. Whether the requested units were approved. `pending` until one
             * decision covers every line. Value enum: "pending", "approved", "partially_approved",
             * "declined". anyOf[2] (Value): null.
             */
            "decision_status"?: (("pending" | "approved" | "partially_approved" | "declined" | (string & {})) | (null));
            /**
             * Caller-owned identifier for this resource in an external system. anyOf[1] (Value):
             * string. Caller-owned identifier for this resource in an external system. maxLength:
             * 255. Example: "warehouse-1842". anyOf[2] (Value): null.
             */
            "external_reference_id"?: ((string) | (null));
            /**
             * The Return's money in one place: the value of the returned lines, deductions and
             * credits, and what has been refunded or collected. anyOf[1] (Value): {@link
             * ReturnFinancialSummaryPreviousAttributes}. anyOf[2] (Value): null.
             */
            "financial_summary"?: ((ReturnFinancialSummaryPreviousAttributes) | (null));
            /**
             * What the buyer still has to send back and where. Each entry leaves the list once it
             * is satisfied, so an empty list means nothing is waiting on the buyer. anyOf[1]
             * (Value): Array of {@link ReturnHandoffRequirementPreviousAttributes}. What the buyer
             * still has to send back and where. Each entry leaves the list once it is satisfied,
             * so an empty list means nothing is waiting on the buyer. anyOf[1][] (Value): {@link
             * ReturnHandoffRequirementPreviousAttributes}. anyOf[2] (Value): null.
             */
            "handoff_requirements"?: ((Array<ReturnHandoffRequirementPreviousAttributes>) | (null));
            /**
             * The Idempotency-Key of the request that created this resource. `null` when that
             * request sent no key, Flint created the resource, the reader isn't the caller that
             * created it (another app install, a buyer, or the merchant reading an app's or
             * buyer's record), or the caller that created an older record is unknown. Filter its
             * list with `idempotency_key` to find it. Recorded payloads, including replayed
             * responses and webhook events, can return `null`. To find a key that a replay returns
             * as `null`, read the resource. Buyer routes return only keys from the buyer's
             * namespace. anyOf[1] (Value): string. The Idempotency-Key of the request that created
             * this resource. `null` when that request sent no key, Flint created the resource, the
             * reader isn't the caller that created it (another app install, a buyer, or the
             * merchant reading an app's or buyer's record), or the caller that created an older
             * record is unknown. Filter its list with `idempotency_key` to find it. Recorded
             * payloads, including replayed responses and webhook events, can return `null`. To
             * find a key that a replay returns as `null`, read the resource. Buyer routes return
             * only keys from the buyer's namespace. anyOf[2] (Value): null.
             */
            "idempotency_key"?: ((string) | (null));
            /**
             * Who created the Return: buyer for a customer session on /v1/me or Flint's hosted
             * account, merchant for a Dashboard user, integration for an API key or partner app,
             * or system for Flint automation. It cannot be sent. Value enum: "buyer", "merchant",
             * "integration", "system". anyOf[1] (Value): string. Who created the Return: buyer for
             * a customer session on /v1/me or Flint's hosted account, merchant for a Dashboard
             * user, integration for an API key or partner app, or system for Flint automation. It
             * cannot be sent. Value enum: "buyer", "merchant", "integration", "system". anyOf[2]
             * (Value): null.
             */
            "initiated_by"?: (("buyer" | "merchant" | "integration" | "system" | (string & {})) | (null));
            /**
             * The lines being returned. anyOf[1] (Value): Array of {@link
             * ReturnLineItemPreviousAttributes}. The lines being returned. anyOf[1][] (Value):
             * {@link ReturnLineItemPreviousAttributes}. anyOf[2] (Value): null.
             */
            "line_items"?: ((Array<ReturnLineItemPreviousAttributes>) | (null));
            /**
             * On the Return, the least-finished line's value. Value enum: "not_required",
             * "awaiting_handoff", "in_transit", "partially_received", "inspection_required",
             * "partially_inspected", "inspection_review_required", "disposition_required",
             * "resolved", "exception". anyOf[1] (Value): string. On the Return, the least-finished
             * line's value. Value enum: "not_required", "awaiting_handoff", "in_transit",
             * "partially_received", "inspection_required", "partially_inspected",
             * "inspection_review_required", "disposition_required", "resolved", "exception".
             * anyOf[2] (Value): null.
             */
            "merchandise_status"?: (("not_required"
                | "awaiting_handoff"
                | "in_transit"
                | "partially_received"
                | "inspection_required"
                | "partially_inspected"
                | "inspection_review_required"
                | "disposition_required"
                | "resolved"
                | "exception"
                | (string & {}))
                | (null));
            /**
             * Stored caller-owned key-value data. See `MetadataInput` for key, value, and size
             * rules. anyOf[1] (Value): {@link MetadataMap}. anyOf[2] (Value): null.
             */
            "metadata"?: ((MetadataMap) | (null));
            /**
             * Present only when `expand` includes `order`; `null` when expanded and there is no
             * related order. anyOf[1] (Value): {@link ExpandedOrderSummaryPreviousAttributes}.
             * anyOf[2] (Value): null.
             */
            "order"?: ((ExpandedOrderSummaryPreviousAttributes) | (null));
            /**
             * ID of the Order the Return is against. anyOf[1] (Value): string. ID of the Order the
             * Return is against. Example: "ord_01KEZF7C0054GQKJ142A8X367A". anyOf[2] (Value):
             * null.
             */
            "order_id"?: ((string) | (null));
            /**
             * How your return policies judged the request when the Return was created. anyOf[1]
             * (Value): {@link ReturnPolicyEvaluationPreviousAttributes}. anyOf[2] (Value): null.
             */
            "policy_evaluation"?: ((ReturnPolicyEvaluationPreviousAttributes) | (null));
            /**
             * Whether the buyer has received the value they are owed. Combines the Return's
             * resolutions and its unsettled corrections. Value enum: "not_selected", "pending",
             * "partially_completed", "requires_action", "completed", "failed". anyOf[1] (Value):
             * string. Whether the buyer has received the value they are owed. Combines the
             * Return's resolutions and its unsettled corrections. Value enum: "not_selected",
             * "pending", "partially_completed", "requires_action", "completed", "failed". anyOf[2]
             * (Value): null.
             */
            "resolution_status"?: (("not_selected"
                | "pending"
                | "partially_completed"
                | "requires_action"
                | "completed"
                | "failed"
                | (string & {}))
                | (null));
            /**
             * IDs of every disposition recorded for this Return, oldest first, including failed
             * and canceled dispositions. Expand `return_dispositions` on `GET
             * /v1/returns/{return_id}` to read them inline. anyOf[1] (Value): Array of string. IDs
             * of every disposition recorded for this Return, oldest first, including failed and
             * canceled dispositions. Expand `return_dispositions` on `GET /v1/returns/{return_id}`
             * to read them inline. anyOf[1][] (Value): string. Example:
             * "retdsp_01KEZF7C007H87J66PH2EEK1VW". anyOf[2] (Value): null.
             */
            "return_disposition_ids"?: ((Array<string>) | (null));
            /**
             * Present only when `expand` includes `return_dispositions`. The dispositions in
             * `return_disposition_ids`, in the same order. anyOf[1] (Value): Array of {@link
             * ReturnDispositionPreviousAttributes}. Present only when `expand` includes
             * `return_dispositions`. The dispositions in `return_disposition_ids`, in the same
             * order. anyOf[1][] (Value): {@link ReturnDispositionPreviousAttributes}. anyOf[2]
             * (Value): null.
             */
            "return_dispositions"?: ((Array<ReturnDispositionPreviousAttributes>) | (null));
            /**
             * Unique identifier for this return, prefixed `ret_`. anyOf[1] (Value): string. Unique
             * identifier for this return, prefixed `ret_`. Example:
             * "ret_01KEZF7C00PG93650ZKVQNGF7X". anyOf[2] (Value): null.
             */
            "return_id"?: ((string) | (null));
            /**
             * IDs of every inspection recorded for this Return, oldest first, including superseded
             * inspections. Expand `return_inspections` on `GET /v1/returns/{return_id}` to read
             * them inline. anyOf[1] (Value): Array of string. IDs of every inspection recorded for
             * this Return, oldest first, including superseded inspections. Expand
             * `return_inspections` on `GET /v1/returns/{return_id}` to read them inline.
             * anyOf[1][] (Value): string. Example: "retins_01KEZF7C00WPB0BR4WTT7CMSB8". anyOf[2]
             * (Value): null.
             */
            "return_inspection_ids"?: ((Array<string>) | (null));
            /**
             * Present only when `expand` includes `return_inspections`. The inspections in
             * `return_inspection_ids`, in the same order. anyOf[1] (Value): Array of {@link
             * ReturnInspectionPreviousAttributes}. Present only when `expand` includes
             * `return_inspections`. The inspections in `return_inspection_ids`, in the same order.
             * anyOf[1][] (Value): {@link ReturnInspectionPreviousAttributes}. anyOf[2] (Value):
             * null.
             */
            "return_inspections"?: ((Array<ReturnInspectionPreviousAttributes>) | (null));
            /**
             * Human-readable number for the Return. anyOf[1] (Value): string. Human-readable
             * number for the Return. anyOf[2] (Value): null.
             */
            "return_number"?: ((string) | (null));
            /**
             * IDs of every receipt recorded for this Return, oldest first, including superseded
             * receipts. Expand `return_receipts` on `GET /v1/returns/{return_id}` to read them
             * inline. anyOf[1] (Value): Array of string. IDs of every receipt recorded for this
             * Return, oldest first, including superseded receipts. Expand `return_receipts` on
             * `GET /v1/returns/{return_id}` to read them inline. anyOf[1][] (Value): string.
             * Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ". anyOf[2] (Value): null.
             */
            "return_receipt_ids"?: ((Array<string>) | (null));
            /**
             * Present only when `expand` includes `return_receipts`. The receipts in
             * `return_receipt_ids`, in the same order. anyOf[1] (Value): Array of {@link
             * ReturnReceiptPreviousAttributes}. Present only when `expand` includes
             * `return_receipts`. The receipts in `return_receipt_ids`, in the same order.
             * anyOf[1][] (Value): {@link ReturnReceiptPreviousAttributes}. anyOf[2] (Value): null.
             */
            "return_receipts"?: ((Array<ReturnReceiptPreviousAttributes>) | (null));
            /**
             * IDs of every resolution created for this Return, oldest first, including failed and
             * canceled resolutions. Expand `return_resolutions` on `GET /v1/returns/{return_id}`
             * to read them inline. anyOf[1] (Value): Array of string. IDs of every resolution
             * created for this Return, oldest first, including failed and canceled resolutions.
             * Expand `return_resolutions` on `GET /v1/returns/{return_id}` to read them inline.
             * anyOf[1][] (Value): string. Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3". anyOf[2]
             * (Value): null.
             */
            "return_resolution_ids"?: ((Array<string>) | (null));
            /**
             * Present only when `expand` includes `return_resolutions`. The resolutions in
             * `return_resolution_ids`, in the same order. anyOf[1] (Value): Array of {@link
             * ReturnResolutionPreviousAttributes}. Present only when `expand` includes
             * `return_resolutions`. The resolutions in `return_resolution_ids`, in the same order.
             * anyOf[1][] (Value): {@link ReturnResolutionPreviousAttributes}. anyOf[2] (Value):
             * null.
             */
            "return_resolutions"?: ((Array<ReturnResolutionPreviousAttributes>) | (null));
            /**
             * IDs of every shipment raised to send this Return's items back, oldest first,
             * including voided shipments. Expand `shipments` on `GET /v1/returns/{return_id}` to
             * read them inline. anyOf[1] (Value): Array of string. IDs of every shipment raised to
             * send this Return's items back, oldest first, including voided shipments. Expand
             * `shipments` on `GET /v1/returns/{return_id}` to read them inline. anyOf[1][]
             * (Value): string. Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68". anyOf[2] (Value): null.
             */
            "shipment_ids"?: ((Array<string>) | (null));
            /**
             * Present only when `expand` includes `shipments`. Summaries of the shipments in
             * `shipment_ids`, in the same order. anyOf[1] (Value): Array of {@link
             * ExpandedShipmentSummaryPreviousAttributes}. Present only when `expand` includes
             * `shipments`. Summaries of the shipments in `shipment_ids`, in the same order.
             * anyOf[1][] (Value): {@link ExpandedShipmentSummaryPreviousAttributes}. anyOf[2]
             * (Value): null.
             */
            "shipments"?: ((Array<ExpandedShipmentSummaryPreviousAttributes>) | (null));
            /**
             * Where the whole Return stands. Read `decision_status`, `merchandise_status`, and
             * `resolution_status` for the part you need. Value enum: "requested", "open",
             * "completed", "declined", "canceled". anyOf[1] (Value): string. Where the whole
             * Return stands. Read `decision_status`, `merchandise_status`, and `resolution_status`
             * for the part you need. Value enum: "requested", "open", "completed", "declined",
             * "canceled". anyOf[2] (Value): null.
             */
            "status"?: (("requested" | "open" | "completed" | "declined" | "canceled" | (string & {})) | (null));
            /**
             * Actions that can succeed now. Actions the API key or token doesn't have the scope
             * for are left out. A Return waiting for a decision lists `decide` and `cancel`. An
             * open Return lists `cancel` only while no units have been received, inspected,
             * dispositioned, or resolved, and it has no current receipts or inspections,
             * non-canceled dispositions or resolutions, or non-voided return shipments. It lists
             * `complete` when `completion_mode` is `manual` and `completion_blockers` is empty. A
             * completed Return lists `reopen`. A declined or canceled Return lists none. [] enum:
             * "cancel", "complete", "decide", "process", "reopen". anyOf[1] (Value): Array of
             * string. Actions that can succeed now. Actions the API key or token doesn't have the
             * scope for are left out. A Return waiting for a decision lists `decide` and `cancel`.
             * An open Return lists `cancel` only while no units have been received, inspected,
             * dispositioned, or resolved, and it has no current receipts or inspections,
             * non-canceled dispositions or resolutions, or non-voided return shipments. It lists
             * `complete` when `completion_mode` is `manual` and `completion_blockers` is empty. A
             * completed Return lists `reopen`. A declined or canceled Return lists none. [] enum:
             * "cancel", "complete", "decide", "process", "reopen". anyOf[1][] (Value): string.
             * Value enum: "cancel", "complete", "decide", "process", "reopen". anyOf[2] (Value):
             * null.
             */
            "supported_actions"?: ((Array<"cancel" | "complete" | "decide" | "process" | "reopen" | (string & {})>) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "updated_at"?: ((string) | (null));
            /**
             * Goes up with every change to the Return. Each activity's `return_version` is the
             * version that activity produced. A write that takes `expected_version` or
             * `expected_return_version` for this Return compares it with this value. anyOf[1]
             * (Value): integer. Goes up with every change to the Return. Each activity's
             * `return_version` is the version that activity produced. A write that takes
             * `expected_version` or `expected_return_version` for this Return compares it with
             * this value. Format: int64. minimum: 0. anyOf[2] (Value): null.
             */
            "version"?: ((number) | (null));
        });
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "return.updated". */
    "event_type"?: "return.updated";
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
 * The `return.updated` webhook payload for the `merchant` event source. Fields shared by merchant
 * webhook payloads.
 */
export type ReturnUpdatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  actor (Optional): {@link ReturnActor}. Who caused this event, captured when the change
     * commits. Omitted when the event predates actor attribution or attribution is unavailable.
     * Who performed a return action: a buyer, merchant, integration, or the system, with an
     * optional ID. object (Required): object. The resource snapshot, without expansions. Webhooks
     * omit no additional fields. object.canceled_at (Optional): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.canceled_by (Optional): {@link
     * ReturnActor}. Who canceled the Return. Who performed a return action: a buyer, merchant,
     * integration, or the system, with an optional ID. object.cancellation_reason (Optional):
     * string. Why the Return was canceled. Value enum: "buyer_request", "merchant_request",
     * "duplicate", "expired", "created_in_error", "other". object.cancellation_reason_message
     * (Optional): string. Detail sent with the cancellation. Merchant reads only.
     * object.completed_at (Optional): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.completed_by (Optional): {@link ReturnActor}. Who completed
     * the Return. `system` when Flint completed it automatically. Who performed a return action: a
     * buyer, merchant, integration, or the system, with an optional ID. object.completion_blockers
     * (Required): Array of {@link ReturnCompletionBlocker}. What is still owed before the Return
     * can complete. Empty when nothing is. object.completion_blockers[] (Value): {@link
     * ReturnCompletionBlocker}. Something still owed before a return can complete, with the return
     * line or record it concerns. object.completion_mode (Optional): string. automatic completes
     * the Return when the last completion blocker clears; manual waits for POST
     * /v1/returns/{return_id}/complete. Reopening a Return sets it to manual. Value enum:
     * "manual", "automatic". object.completion_reason (Optional): string. Why the Return was
     * completed by hand. Absent when Flint completed it automatically. Value enum:
     * "manual_completion", "exception_waived", "other". object.completion_reason_message
     * (Optional): string. Detail sent when the Return was completed by hand. object.created_at
     * (Required): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.customer (Optional): {@link ExpandedCustomerSummary} or null. Present only when
     * `expand` includes `customer`; `null` when expanded and there is no related customer.
     * object.customer.anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's summary
     * fields, returned in place of a customer ID when the customer is expanded.
     * object.customer.anyOf[2] (Value): null. object.customer_id (Optional): string. The customer
     * the Return belongs to. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". object.decision_at
     * (Optional): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.decision_status (Required): string. Whether the requested units were approved.
     * `pending` until one decision covers every line. Value enum: "pending", "approved",
     * "partially_approved", "declined". object.external_reference_id (Optional): string.
     * Caller-owned identifier for this resource in an external system. maxLength: 255. Example:
     * "warehouse-1842". object.financial_summary (Required): {@link ReturnFinancialSummary}. The
     * Return's money in one place: the value of the returned lines, deductions and credits, and
     * what has been refunded or collected. The money for a return: returned value, deductions,
     * credits, replacement total, and amounts due to or from the buyer.
     * object.handoff_requirements (Required): Array of {@link ReturnHandoffRequirement}. What the
     * buyer still has to send back and where. Each entry leaves the list once it is satisfied, so
     * an empty list means nothing is waiting on the buyer. object.handoff_requirements[] (Value):
     * {@link ReturnHandoffRequirement}. What the buyer must do to hand merchandise back: the
     * destination, instructions, line items, and expiry. object.idempotency_key (Required): string
     * or null. The Idempotency-Key of the request that created this resource. `null` when that
     * request sent no key, Flint created the resource, the reader isn't the caller that created it
     * (another app install, a buyer, or the merchant reading an app's or buyer's record), or the
     * caller that created an older record is unknown. Filter its list with `idempotency_key` to
     * find it. Recorded payloads, including replayed responses and webhook events, can return
     * `null`. To find a key that a replay returns as `null`, read the resource. Buyer routes
     * return only keys from the buyer's namespace. object.initiated_by (Required): string. Who
     * created the Return: buyer for a customer session on /v1/me or Flint's hosted account,
     * merchant for a Dashboard user, integration for an API key or partner app, or system for
     * Flint automation. It cannot be sent. Value enum: "buyer", "merchant", "integration",
     * "system". object.line_items (Required): Array of {@link ReturnLineItem}. The lines being
     * returned. object.line_items[] (Value): {@link ReturnLineItem}. An item included in a return
     * request. object.merchandise_status (Required): string. On the Return, the least-finished
     * line's value. Value enum: "not_required", "awaiting_handoff", "in_transit",
     * "partially_received", "inspection_required", "partially_inspected",
     * "inspection_review_required", "disposition_required", "resolved", "exception".
     * object.metadata (Required): {@link MetadataMap}. Stored caller-owned key-value data. See
     * `MetadataInput` for key, value, and size rules. Caller-owned key-value data stored on a
     * resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
     * follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits
     * may not satisfy them. object.order (Optional): {@link ExpandedOrderSummary} or null. Present
     * only when `expand` includes `order`; `null` when expanded and there is no related order.
     * object.order.anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary fields,
     * including status, payment and refund status, and pricing and settlement amounts, returned
     * when the order is expanded. object.order.anyOf[2] (Value): null. object.order_id (Required):
     * string. ID of the Order the Return is against. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     * object.policy_evaluation (Optional): {@link ReturnPolicyEvaluation}. How your return
     * policies judged the request when the Return was created. How a return policy evaluated a
     * return request: overall status and reason, the policy revision used, and per-line results.
     * object.resolution_status (Required): string. Whether the buyer has received the value they
     * are owed. Combines the Return's resolutions and its unsettled corrections. Value enum:
     * "not_selected", "pending", "partially_completed", "requires_action", "completed", "failed".
     * object.return_disposition_ids (Required): Array of string. IDs of every disposition recorded
     * for this Return, oldest first, including failed and canceled dispositions. Expand
     * `return_dispositions` on `GET /v1/returns/{return_id}` to read them inline.
     * object.return_disposition_ids[] (Value): string. Example:
     * "retdsp_01KEZF7C007H87J66PH2EEK1VW". object.return_dispositions (Optional): Array of {@link
     * ReturnDisposition}. Present only when `expand` includes `return_dispositions`. The
     * dispositions in `return_disposition_ids`, in the same order. object.return_dispositions[]
     * (Value): {@link ReturnDisposition}. A decision about how returned merchandise will be
     * handled. object.return_id (Required): string. Unique identifier for this return, prefixed
     * `ret_`. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X". object.return_inspection_ids (Required):
     * Array of string. IDs of every inspection recorded for this Return, oldest first, including
     * superseded inspections. Expand `return_inspections` on `GET /v1/returns/{return_id}` to read
     * them inline. object.return_inspection_ids[] (Value): string. Example:
     * "retins_01KEZF7C00WPB0BR4WTT7CMSB8". object.return_inspections (Optional): Array of {@link
     * ReturnInspection}. Present only when `expand` includes `return_inspections`. The inspections
     * in `return_inspection_ids`, in the same order. object.return_inspections[] (Value): {@link
     * ReturnInspection}. An assessment of the condition of returned items. object.return_number
     * (Required): string. Human-readable number for the Return. object.return_receipt_ids
     * (Required): Array of string. IDs of every receipt recorded for this Return, oldest first,
     * including superseded receipts. Expand `return_receipts` on `GET /v1/returns/{return_id}` to
     * read them inline. object.return_receipt_ids[] (Value): string. Example:
     * "retrc_01KEZF7C0052GWDW41D9AJAVJZ". object.return_receipts (Optional): Array of {@link
     * ReturnReceipt}. Present only when `expand` includes `return_receipts`. The receipts in
     * `return_receipt_ids`, in the same order. object.return_receipts[] (Value): {@link
     * ReturnReceipt}. A record of returned items arriving at a location.
     * object.return_resolution_ids (Required): Array of string. IDs of every resolution created
     * for this Return, oldest first, including failed and canceled resolutions. Expand
     * `return_resolutions` on `GET /v1/returns/{return_id}` to read them inline.
     * object.return_resolution_ids[] (Value): string. Example:
     * "retres_01KEZF7C00C7RZJN31W9SGMEQ3". object.return_resolutions (Optional): Array of {@link
     * ReturnResolution}. Present only when `expand` includes `return_resolutions`. The resolutions
     * in `return_resolution_ids`, in the same order. object.return_resolutions[] (Value): {@link
     * ReturnResolution}. The refund, exchange, or other outcome of a return. object.shipment_ids
     * (Required): Array of string. IDs of every shipment raised to send this Return's items back,
     * oldest first, including voided shipments. Expand `shipments` on `GET
     * /v1/returns/{return_id}` to read them inline. object.shipment_ids[] (Value): string.
     * Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68". object.shipments (Optional): Array of {@link
     * ExpandedShipmentSummary}. Present only when `expand` includes `shipments`. Summaries of the
     * shipments in `shipment_ids`, in the same order. object.shipments[] (Value): {@link
     * ExpandedShipmentSummary}. A shipment's summary fields, including direction, status, and
     * package count, returned when the shipment is expanded. object.status (Required): string.
     * Where the whole Return stands. Read `decision_status`, `merchandise_status`, and
     * `resolution_status` for the part you need. Value enum: "requested", "open", "completed",
     * "declined", "canceled". object.supported_actions (Required): Array of string. Actions that
     * can succeed now. Actions the API key or token doesn't have the scope for are left out. A
     * Return waiting for a decision lists `decide` and `cancel`. An open Return lists `cancel`
     * only while no units have been received, inspected, dispositioned, or resolved, and it has no
     * current receipts or inspections, non-canceled dispositions or resolutions, or non-voided
     * return shipments. It lists `complete` when `completion_mode` is `manual` and
     * `completion_blockers` is empty. A completed Return lists `reopen`. A declined or canceled
     * Return lists none. [] enum: "cancel", "complete", "decide", "process", "reopen".
     * object.supported_actions[] (Value): string. Value enum: "cancel", "complete", "decide",
     * "process", "reopen". object.updated_at (Required): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.version (Required): integer. Goes up with
     * every change to the Return. Each activity's `return_version` is the version that activity
     * produced. A write that takes `expected_version` or `expected_return_version` for this Return
     * compares it with this value. Format: int64. minimum: 0. previous_attributes (Optional):
     * object. Previous values of changed top-level fields in data.object, at this delivery's API
     * version. Nested changes include the whole previous top-level value. A value is null when the
     * field was absent before the change. Omitted when Flint did not record the previous state,
     * including synthetic test events. previous_attributes.canceled_at (Optional): string or null.
     * RFC3339 timestamp. previous_attributes.canceled_at.anyOf[1] (Value): string. RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.canceled_at.anyOf[2] (Value): null. previous_attributes.canceled_by
     * (Optional): {@link ReturnActorPreviousAttributes} or null. Who canceled the Return.
     * previous_attributes.canceled_by.anyOf[1] (Value): {@link ReturnActorPreviousAttributes}.
     * previous_attributes.canceled_by.anyOf[2] (Value): null.
     * previous_attributes.cancellation_reason (Optional): string or null. Why the Return was
     * canceled. Value enum: "buyer_request", "merchant_request", "duplicate", "expired",
     * "created_in_error", "other". previous_attributes.cancellation_reason.anyOf[1] (Value):
     * string. Why the Return was canceled. Value enum: "buyer_request", "merchant_request",
     * "duplicate", "expired", "created_in_error", "other".
     * previous_attributes.cancellation_reason.anyOf[2] (Value): null.
     * previous_attributes.cancellation_reason_message (Optional): string or null. Detail sent with
     * the cancellation. Merchant reads only.
     * previous_attributes.cancellation_reason_message.anyOf[1] (Value): string. Detail sent with
     * the cancellation. Merchant reads only.
     * previous_attributes.cancellation_reason_message.anyOf[2] (Value): null.
     * previous_attributes.completed_at (Optional): string or null. RFC3339 timestamp.
     * previous_attributes.completed_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.completed_at.anyOf[2]
     * (Value): null. previous_attributes.completed_by (Optional): {@link
     * ReturnActorPreviousAttributes} or null. Who completed the Return. `system` when Flint
     * completed it automatically. previous_attributes.completed_by.anyOf[1] (Value): {@link
     * ReturnActorPreviousAttributes}. previous_attributes.completed_by.anyOf[2] (Value): null.
     * previous_attributes.completion_blockers (Optional): Array of {@link
     * ReturnCompletionBlockerPreviousAttributes} or null. What is still owed before the Return can
     * complete. Empty when nothing is. previous_attributes.completion_blockers.anyOf[1] (Value):
     * Array of {@link ReturnCompletionBlockerPreviousAttributes}. What is still owed before the
     * Return can complete. Empty when nothing is.
     * previous_attributes.completion_blockers.anyOf[1][] (Value): {@link
     * ReturnCompletionBlockerPreviousAttributes}. previous_attributes.completion_blockers.anyOf[2]
     * (Value): null. previous_attributes.completion_mode (Optional): string or null. automatic
     * completes the Return when the last completion blocker clears; manual waits for POST
     * /v1/returns/{return_id}/complete. Reopening a Return sets it to manual. Value enum:
     * "manual", "automatic". previous_attributes.completion_mode.anyOf[1] (Value): string.
     * automatic completes the Return when the last completion blocker clears; manual waits for
     * POST /v1/returns/{return_id}/complete. Reopening a Return sets it to manual. Value enum:
     * "manual", "automatic". previous_attributes.completion_mode.anyOf[2] (Value): null.
     * previous_attributes.completion_reason (Optional): string or null. Why the Return was
     * completed by hand. Absent when Flint completed it automatically. Value enum:
     * "manual_completion", "exception_waived", "other".
     * previous_attributes.completion_reason.anyOf[1] (Value): string. Why the Return was completed
     * by hand. Absent when Flint completed it automatically. Value enum: "manual_completion",
     * "exception_waived", "other". previous_attributes.completion_reason.anyOf[2] (Value): null.
     * previous_attributes.completion_reason_message (Optional): string or null. Detail sent when
     * the Return was completed by hand. previous_attributes.completion_reason_message.anyOf[1]
     * (Value): string. Detail sent when the Return was completed by hand.
     * previous_attributes.completion_reason_message.anyOf[2] (Value): null.
     * previous_attributes.created_at (Optional): string or null. RFC3339 timestamp.
     * previous_attributes.created_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.created_at.anyOf[2] (Value):
     * null. previous_attributes.customer (Optional): {@link
     * ExpandedCustomerSummaryPreviousAttributes} or null. Present only when `expand` includes
     * `customer`; `null` when expanded and there is no related customer.
     * previous_attributes.customer.anyOf[1] (Value): {@link
     * ExpandedCustomerSummaryPreviousAttributes}. previous_attributes.customer.anyOf[2] (Value):
     * null. previous_attributes.customer_id (Optional): string or null. The customer the Return
     * belongs to. previous_attributes.customer_id.anyOf[1] (Value): string. The customer the
     * Return belongs to. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     * previous_attributes.customer_id.anyOf[2] (Value): null. previous_attributes.decision_at
     * (Optional): string or null. RFC3339 timestamp. previous_attributes.decision_at.anyOf[1]
     * (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.decision_at.anyOf[2] (Value): null. previous_attributes.decision_status
     * (Optional): string or null. Whether the requested units were approved. `pending` until one
     * decision covers every line. Value enum: "pending", "approved", "partially_approved",
     * "declined". previous_attributes.decision_status.anyOf[1] (Value): string. Whether the
     * requested units were approved. `pending` until one decision covers every line. Value enum:
     * "pending", "approved", "partially_approved", "declined".
     * previous_attributes.decision_status.anyOf[2] (Value): null.
     * previous_attributes.external_reference_id (Optional): string or null. Caller-owned
     * identifier for this resource in an external system.
     * previous_attributes.external_reference_id.anyOf[1] (Value): string. Caller-owned identifier
     * for this resource in an external system. maxLength: 255. Example: "warehouse-1842".
     * previous_attributes.external_reference_id.anyOf[2] (Value): null.
     * previous_attributes.financial_summary (Optional): {@link
     * ReturnFinancialSummaryPreviousAttributes} or null. The Return's money in one place: the
     * value of the returned lines, deductions and credits, and what has been refunded or
     * collected. previous_attributes.financial_summary.anyOf[1] (Value): {@link
     * ReturnFinancialSummaryPreviousAttributes}. previous_attributes.financial_summary.anyOf[2]
     * (Value): null. previous_attributes.handoff_requirements (Optional): Array of {@link
     * ReturnHandoffRequirementPreviousAttributes} or null. What the buyer still has to send back
     * and where. Each entry leaves the list once it is satisfied, so an empty list means nothing
     * is waiting on the buyer. previous_attributes.handoff_requirements.anyOf[1] (Value): Array of
     * {@link ReturnHandoffRequirementPreviousAttributes}. What the buyer still has to send back
     * and where. Each entry leaves the list once it is satisfied, so an empty list means nothing
     * is waiting on the buyer. previous_attributes.handoff_requirements.anyOf[1][] (Value): {@link
     * ReturnHandoffRequirementPreviousAttributes}.
     * previous_attributes.handoff_requirements.anyOf[2] (Value): null.
     * previous_attributes.idempotency_key (Optional): string or null. The Idempotency-Key of the
     * request that created this resource. `null` when that request sent no key, Flint created the
     * resource, the reader isn't the caller that created it (another app install, a buyer, or the
     * merchant reading an app's or buyer's record), or the caller that created an older record is
     * unknown. Filter its list with `idempotency_key` to find it. Recorded payloads, including
     * replayed responses and webhook events, can return `null`. To find a key that a replay
     * returns as `null`, read the resource. Buyer routes return only keys from the buyer's
     * namespace. previous_attributes.idempotency_key.anyOf[1] (Value): string. The Idempotency-Key
     * of the request that created this resource. `null` when that request sent no key, Flint
     * created the resource, the reader isn't the caller that created it (another app install, a
     * buyer, or the merchant reading an app's or buyer's record), or the caller that created an
     * older record is unknown. Filter its list with `idempotency_key` to find it. Recorded
     * payloads, including replayed responses and webhook events, can return `null`. To find a key
     * that a replay returns as `null`, read the resource. Buyer routes return only keys from the
     * buyer's namespace. previous_attributes.idempotency_key.anyOf[2] (Value): null.
     * previous_attributes.initiated_by (Optional): string or null. Who created the Return: buyer
     * for a customer session on /v1/me or Flint's hosted account, merchant for a Dashboard user,
     * integration for an API key or partner app, or system for Flint automation. It cannot be
     * sent. Value enum: "buyer", "merchant", "integration", "system".
     * previous_attributes.initiated_by.anyOf[1] (Value): string. Who created the Return: buyer for
     * a customer session on /v1/me or Flint's hosted account, merchant for a Dashboard user,
     * integration for an API key or partner app, or system for Flint automation. It cannot be
     * sent. Value enum: "buyer", "merchant", "integration", "system".
     * previous_attributes.initiated_by.anyOf[2] (Value): null. previous_attributes.line_items
     * (Optional): Array of {@link ReturnLineItemPreviousAttributes} or null. The lines being
     * returned. previous_attributes.line_items.anyOf[1] (Value): Array of {@link
     * ReturnLineItemPreviousAttributes}. The lines being returned.
     * previous_attributes.line_items.anyOf[1][] (Value): {@link ReturnLineItemPreviousAttributes}.
     * previous_attributes.line_items.anyOf[2] (Value): null.
     * previous_attributes.merchandise_status (Optional): string or null. On the Return, the
     * least-finished line's value. Value enum: "not_required", "awaiting_handoff", "in_transit",
     * "partially_received", "inspection_required", "partially_inspected",
     * "inspection_review_required", "disposition_required", "resolved", "exception".
     * previous_attributes.merchandise_status.anyOf[1] (Value): string. On the Return, the
     * least-finished line's value. Value enum: "not_required", "awaiting_handoff", "in_transit",
     * "partially_received", "inspection_required", "partially_inspected",
     * "inspection_review_required", "disposition_required", "resolved", "exception".
     * previous_attributes.merchandise_status.anyOf[2] (Value): null. previous_attributes.metadata
     * (Optional): {@link MetadataMap} or null. Stored caller-owned key-value data. See
     * `MetadataInput` for key, value, and size rules. previous_attributes.metadata.anyOf[1]
     * (Value): {@link MetadataMap}. previous_attributes.metadata.anyOf[2] (Value): null.
     * previous_attributes.order (Optional): {@link ExpandedOrderSummaryPreviousAttributes} or
     * null. Present only when `expand` includes `order`; `null` when expanded and there is no
     * related order. previous_attributes.order.anyOf[1] (Value): {@link
     * ExpandedOrderSummaryPreviousAttributes}. previous_attributes.order.anyOf[2] (Value): null.
     * previous_attributes.order_id (Optional): string or null. ID of the Order the Return is
     * against. previous_attributes.order_id.anyOf[1] (Value): string. ID of the Order the Return
     * is against. Example: "ord_01KEZF7C0054GQKJ142A8X367A". previous_attributes.order_id.anyOf[2]
     * (Value): null. previous_attributes.policy_evaluation (Optional): {@link
     * ReturnPolicyEvaluationPreviousAttributes} or null. How your return policies judged the
     * request when the Return was created. previous_attributes.policy_evaluation.anyOf[1] (Value):
     * {@link ReturnPolicyEvaluationPreviousAttributes}.
     * previous_attributes.policy_evaluation.anyOf[2] (Value): null.
     * previous_attributes.resolution_status (Optional): string or null. Whether the buyer has
     * received the value they are owed. Combines the Return's resolutions and its unsettled
     * corrections. Value enum: "not_selected", "pending", "partially_completed",
     * "requires_action", "completed", "failed". previous_attributes.resolution_status.anyOf[1]
     * (Value): string. Whether the buyer has received the value they are owed. Combines the
     * Return's resolutions and its unsettled corrections. Value enum: "not_selected", "pending",
     * "partially_completed", "requires_action", "completed", "failed".
     * previous_attributes.resolution_status.anyOf[2] (Value): null.
     * previous_attributes.return_disposition_ids (Optional): Array of string or null. IDs of every
     * disposition recorded for this Return, oldest first, including failed and canceled
     * dispositions. Expand `return_dispositions` on `GET /v1/returns/{return_id}` to read them
     * inline. previous_attributes.return_disposition_ids.anyOf[1] (Value): Array of string. IDs of
     * every disposition recorded for this Return, oldest first, including failed and canceled
     * dispositions. Expand `return_dispositions` on `GET /v1/returns/{return_id}` to read them
     * inline. previous_attributes.return_disposition_ids.anyOf[1][] (Value): string. Example:
     * "retdsp_01KEZF7C007H87J66PH2EEK1VW". previous_attributes.return_disposition_ids.anyOf[2]
     * (Value): null. previous_attributes.return_dispositions (Optional): Array of {@link
     * ReturnDispositionPreviousAttributes} or null. Present only when `expand` includes
     * `return_dispositions`. The dispositions in `return_disposition_ids`, in the same order.
     * previous_attributes.return_dispositions.anyOf[1] (Value): Array of {@link
     * ReturnDispositionPreviousAttributes}. Present only when `expand` includes
     * `return_dispositions`. The dispositions in `return_disposition_ids`, in the same order.
     * previous_attributes.return_dispositions.anyOf[1][] (Value): {@link
     * ReturnDispositionPreviousAttributes}. previous_attributes.return_dispositions.anyOf[2]
     * (Value): null. previous_attributes.return_id (Optional): string or null. Unique identifier
     * for this return, prefixed `ret_`. previous_attributes.return_id.anyOf[1] (Value): string.
     * Unique identifier for this return, prefixed `ret_`. Example:
     * "ret_01KEZF7C00PG93650ZKVQNGF7X". previous_attributes.return_id.anyOf[2] (Value): null.
     * previous_attributes.return_inspection_ids (Optional): Array of string or null. IDs of every
     * inspection recorded for this Return, oldest first, including superseded inspections. Expand
     * `return_inspections` on `GET /v1/returns/{return_id}` to read them inline.
     * previous_attributes.return_inspection_ids.anyOf[1] (Value): Array of string. IDs of every
     * inspection recorded for this Return, oldest first, including superseded inspections. Expand
     * `return_inspections` on `GET /v1/returns/{return_id}` to read them inline.
     * previous_attributes.return_inspection_ids.anyOf[1][] (Value): string. Example:
     * "retins_01KEZF7C00WPB0BR4WTT7CMSB8". previous_attributes.return_inspection_ids.anyOf[2]
     * (Value): null. previous_attributes.return_inspections (Optional): Array of {@link
     * ReturnInspectionPreviousAttributes} or null. Present only when `expand` includes
     * `return_inspections`. The inspections in `return_inspection_ids`, in the same order.
     * previous_attributes.return_inspections.anyOf[1] (Value): Array of {@link
     * ReturnInspectionPreviousAttributes}. Present only when `expand` includes
     * `return_inspections`. The inspections in `return_inspection_ids`, in the same order.
     * previous_attributes.return_inspections.anyOf[1][] (Value): {@link
     * ReturnInspectionPreviousAttributes}. previous_attributes.return_inspections.anyOf[2]
     * (Value): null. previous_attributes.return_number (Optional): string or null. Human-readable
     * number for the Return. previous_attributes.return_number.anyOf[1] (Value): string.
     * Human-readable number for the Return. previous_attributes.return_number.anyOf[2] (Value):
     * null. previous_attributes.return_receipt_ids (Optional): Array of string or null. IDs of
     * every receipt recorded for this Return, oldest first, including superseded receipts. Expand
     * `return_receipts` on `GET /v1/returns/{return_id}` to read them inline.
     * previous_attributes.return_receipt_ids.anyOf[1] (Value): Array of string. IDs of every
     * receipt recorded for this Return, oldest first, including superseded receipts. Expand
     * `return_receipts` on `GET /v1/returns/{return_id}` to read them inline.
     * previous_attributes.return_receipt_ids.anyOf[1][] (Value): string. Example:
     * "retrc_01KEZF7C0052GWDW41D9AJAVJZ". previous_attributes.return_receipt_ids.anyOf[2] (Value):
     * null. previous_attributes.return_receipts (Optional): Array of {@link
     * ReturnReceiptPreviousAttributes} or null. Present only when `expand` includes
     * `return_receipts`. The receipts in `return_receipt_ids`, in the same order.
     * previous_attributes.return_receipts.anyOf[1] (Value): Array of {@link
     * ReturnReceiptPreviousAttributes}. Present only when `expand` includes `return_receipts`. The
     * receipts in `return_receipt_ids`, in the same order.
     * previous_attributes.return_receipts.anyOf[1][] (Value): {@link
     * ReturnReceiptPreviousAttributes}. previous_attributes.return_receipts.anyOf[2] (Value):
     * null. previous_attributes.return_resolution_ids (Optional): Array of string or null. IDs of
     * every resolution created for this Return, oldest first, including failed and canceled
     * resolutions. Expand `return_resolutions` on `GET /v1/returns/{return_id}` to read them
     * inline. previous_attributes.return_resolution_ids.anyOf[1] (Value): Array of string. IDs of
     * every resolution created for this Return, oldest first, including failed and canceled
     * resolutions. Expand `return_resolutions` on `GET /v1/returns/{return_id}` to read them
     * inline. previous_attributes.return_resolution_ids.anyOf[1][] (Value): string. Example:
     * "retres_01KEZF7C00C7RZJN31W9SGMEQ3". previous_attributes.return_resolution_ids.anyOf[2]
     * (Value): null. previous_attributes.return_resolutions (Optional): Array of {@link
     * ReturnResolutionPreviousAttributes} or null. Present only when `expand` includes
     * `return_resolutions`. The resolutions in `return_resolution_ids`, in the same order.
     * previous_attributes.return_resolutions.anyOf[1] (Value): Array of {@link
     * ReturnResolutionPreviousAttributes}. Present only when `expand` includes
     * `return_resolutions`. The resolutions in `return_resolution_ids`, in the same order.
     * previous_attributes.return_resolutions.anyOf[1][] (Value): {@link
     * ReturnResolutionPreviousAttributes}. previous_attributes.return_resolutions.anyOf[2]
     * (Value): null. previous_attributes.shipment_ids (Optional): Array of string or null. IDs of
     * every shipment raised to send this Return's items back, oldest first, including voided
     * shipments. Expand `shipments` on `GET /v1/returns/{return_id}` to read them inline.
     * previous_attributes.shipment_ids.anyOf[1] (Value): Array of string. IDs of every shipment
     * raised to send this Return's items back, oldest first, including voided shipments. Expand
     * `shipments` on `GET /v1/returns/{return_id}` to read them inline.
     * previous_attributes.shipment_ids.anyOf[1][] (Value): string. Example:
     * "shp_01KEZF7C00Q2AFXWXHMCDR3F68". previous_attributes.shipment_ids.anyOf[2] (Value): null.
     * previous_attributes.shipments (Optional): Array of {@link
     * ExpandedShipmentSummaryPreviousAttributes} or null. Present only when `expand` includes
     * `shipments`. Summaries of the shipments in `shipment_ids`, in the same order.
     * previous_attributes.shipments.anyOf[1] (Value): Array of {@link
     * ExpandedShipmentSummaryPreviousAttributes}. Present only when `expand` includes `shipments`.
     * Summaries of the shipments in `shipment_ids`, in the same order.
     * previous_attributes.shipments.anyOf[1][] (Value): {@link
     * ExpandedShipmentSummaryPreviousAttributes}. previous_attributes.shipments.anyOf[2] (Value):
     * null. previous_attributes.status (Optional): string or null. Where the whole Return stands.
     * Read `decision_status`, `merchandise_status`, and `resolution_status` for the part you need.
     * Value enum: "requested", "open", "completed", "declined", "canceled".
     * previous_attributes.status.anyOf[1] (Value): string. Where the whole Return stands. Read
     * `decision_status`, `merchandise_status`, and `resolution_status` for the part you need.
     * Value enum: "requested", "open", "completed", "declined", "canceled".
     * previous_attributes.status.anyOf[2] (Value): null. previous_attributes.supported_actions
     * (Optional): Array of string or null. Actions that can succeed now. Actions the API key or
     * token doesn't have the scope for are left out. A Return waiting for a decision lists
     * `decide` and `cancel`. An open Return lists `cancel` only while no units have been received,
     * inspected, dispositioned, or resolved, and it has no current receipts or inspections,
     * non-canceled dispositions or resolutions, or non-voided return shipments. It lists
     * `complete` when `completion_mode` is `manual` and `completion_blockers` is empty. A
     * completed Return lists `reopen`. A declined or canceled Return lists none. [] enum:
     * "cancel", "complete", "decide", "process", "reopen".
     * previous_attributes.supported_actions.anyOf[1] (Value): Array of string. Actions that can
     * succeed now. Actions the API key or token doesn't have the scope for are left out. A Return
     * waiting for a decision lists `decide` and `cancel`. An open Return lists `cancel` only while
     * no units have been received, inspected, dispositioned, or resolved, and it has no current
     * receipts or inspections, non-canceled dispositions or resolutions, or non-voided return
     * shipments. It lists `complete` when `completion_mode` is `manual` and `completion_blockers`
     * is empty. A completed Return lists `reopen`. A declined or canceled Return lists none. []
     * enum: "cancel", "complete", "decide", "process", "reopen".
     * previous_attributes.supported_actions.anyOf[1][] (Value): string. Value enum: "cancel",
     * "complete", "decide", "process", "reopen". previous_attributes.supported_actions.anyOf[2]
     * (Value): null. previous_attributes.updated_at (Optional): string or null. RFC3339 timestamp.
     * previous_attributes.updated_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.updated_at.anyOf[2] (Value):
     * null. previous_attributes.version (Optional): integer or null. Goes up with every change to
     * the Return. Each activity's `return_version` is the version that activity produced. A write
     * that takes `expected_version` or `expected_return_version` for this Return compares it with
     * this value. previous_attributes.version.anyOf[1] (Value): integer. Goes up with every change
     * to the Return. Each activity's `return_version` is the version that activity produced. A
     * write that takes `expected_version` or `expected_return_version` for this Return compares it
     * with this value. Format: int64. minimum: 0. previous_attributes.version.anyOf[2] (Value):
     * null.
     */
    "data"?: {
        /**
         * Who caused this event, captured when the change commits. Omitted when the event predates
         * actor attribution or attribution is unavailable. Who performed a return action: a buyer,
         * merchant, integration, or the system, with an optional ID.
         */
        "actor"?: ReturnActor;
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * canceled_at (Optional): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". canceled_by (Optional): {@link ReturnActor}. Who canceled the
         * Return. Who performed a return action: a buyer, merchant, integration, or the system,
         * with an optional ID. cancellation_reason (Optional): string. Why the Return was
         * canceled. Value enum: "buyer_request", "merchant_request", "duplicate", "expired",
         * "created_in_error", "other". cancellation_reason_message (Optional): string. Detail sent
         * with the cancellation. Merchant reads only. completed_at (Optional): string. RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". completed_by (Optional):
         * {@link ReturnActor}. Who completed the Return. `system` when Flint completed it
         * automatically. Who performed a return action: a buyer, merchant, integration, or the
         * system, with an optional ID. completion_blockers (Required): Array of {@link
         * ReturnCompletionBlocker}. What is still owed before the Return can complete. Empty when
         * nothing is. completion_blockers[] (Value): {@link ReturnCompletionBlocker}. Something
         * still owed before a return can complete, with the return line or record it concerns.
         * completion_mode (Optional): string. automatic completes the Return when the last
         * completion blocker clears; manual waits for POST /v1/returns/{return_id}/complete.
         * Reopening a Return sets it to manual. Value enum: "manual", "automatic".
         * completion_reason (Optional): string. Why the Return was completed by hand. Absent when
         * Flint completed it automatically. Value enum: "manual_completion", "exception_waived",
         * "other". completion_reason_message (Optional): string. Detail sent when the Return was
         * completed by hand. created_at (Required): string. RFC3339 timestamp. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". customer (Optional): {@link ExpandedCustomerSummary} or
         * null. Present only when `expand` includes `customer`; `null` when expanded and there is
         * no related customer. customer.anyOf[1] (Value): {@link ExpandedCustomerSummary}. A
         * customer's summary fields, returned in place of a customer ID when the customer is
         * expanded. customer.anyOf[2] (Value): null. customer_id (Optional): string. The customer
         * the Return belongs to. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". decision_at
         * (Optional): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". decision_status (Required): string. Whether the requested units
         * were approved. `pending` until one decision covers every line. Value enum: "pending",
         * "approved", "partially_approved", "declined". external_reference_id (Optional): string.
         * Caller-owned identifier for this resource in an external system. maxLength: 255.
         * Example: "warehouse-1842". financial_summary (Required): {@link ReturnFinancialSummary}.
         * The Return's money in one place: the value of the returned lines, deductions and
         * credits, and what has been refunded or collected. The money for a return: returned
         * value, deductions, credits, replacement total, and amounts due to or from the buyer.
         * handoff_requirements (Required): Array of {@link ReturnHandoffRequirement}. What the
         * buyer still has to send back and where. Each entry leaves the list once it is satisfied,
         * so an empty list means nothing is waiting on the buyer. handoff_requirements[] (Value):
         * {@link ReturnHandoffRequirement}. What the buyer must do to hand merchandise back: the
         * destination, instructions, line items, and expiry. idempotency_key (Required): string or
         * null. The Idempotency-Key of the request that created this resource. `null` when that
         * request sent no key, Flint created the resource, the reader isn't the caller that
         * created it (another app install, a buyer, or the merchant reading an app's or buyer's
         * record), or the caller that created an older record is unknown. Filter its list with
         * `idempotency_key` to find it. Recorded payloads, including replayed responses and
         * webhook events, can return `null`. To find a key that a replay returns as `null`, read
         * the resource. Buyer routes return only keys from the buyer's namespace. initiated_by
         * (Required): string. Who created the Return: buyer for a customer session on /v1/me or
         * Flint's hosted account, merchant for a Dashboard user, integration for an API key or
         * partner app, or system for Flint automation. It cannot be sent. Value enum: "buyer",
         * "merchant", "integration", "system". line_items (Required): Array of {@link
         * ReturnLineItem}. The lines being returned. line_items[] (Value): {@link ReturnLineItem}.
         * An item included in a return request. merchandise_status (Required): string. On the
         * Return, the least-finished line's value. Value enum: "not_required", "awaiting_handoff",
         * "in_transit", "partially_received", "inspection_required", "partially_inspected",
         * "inspection_review_required", "disposition_required", "resolved", "exception". metadata
         * (Required): {@link MetadataMap}. Stored caller-owned key-value data. See `MetadataInput`
         * for key, value, and size rules. Caller-owned key-value data stored on a resource. Keys
         * starting with flint_ are reserved for Flint and are not returned. Writes follow the
         * limits on MetadataInput and MetadataPatchInput; maps written before those limits may not
         * satisfy them. order (Optional): {@link ExpandedOrderSummary} or null. Present only when
         * `expand` includes `order`; `null` when expanded and there is no related order.
         * order.anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary fields,
         * including status, payment and refund status, and pricing and settlement amounts,
         * returned when the order is expanded. order.anyOf[2] (Value): null. order_id (Required):
         * string. ID of the Order the Return is against. Example:
         * "ord_01KEZF7C0054GQKJ142A8X367A". policy_evaluation (Optional): {@link
         * ReturnPolicyEvaluation}. How your return policies judged the request when the Return was
         * created. How a return policy evaluated a return request: overall status and reason, the
         * policy revision used, and per-line results. resolution_status (Required): string.
         * Whether the buyer has received the value they are owed. Combines the Return's
         * resolutions and its unsettled corrections. Value enum: "not_selected", "pending",
         * "partially_completed", "requires_action", "completed", "failed". return_disposition_ids
         * (Required): Array of string. IDs of every disposition recorded for this Return, oldest
         * first, including failed and canceled dispositions. Expand `return_dispositions` on `GET
         * /v1/returns/{return_id}` to read them inline. return_disposition_ids[] (Value): string.
         * Example: "retdsp_01KEZF7C007H87J66PH2EEK1VW". return_dispositions (Optional): Array of
         * {@link ReturnDisposition}. Present only when `expand` includes `return_dispositions`.
         * The dispositions in `return_disposition_ids`, in the same order. return_dispositions[]
         * (Value): {@link ReturnDisposition}. A decision about how returned merchandise will be
         * handled. return_id (Required): string. Unique identifier for this return, prefixed
         * `ret_`. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X". return_inspection_ids (Required):
         * Array of string. IDs of every inspection recorded for this Return, oldest first,
         * including superseded inspections. Expand `return_inspections` on `GET
         * /v1/returns/{return_id}` to read them inline. return_inspection_ids[] (Value): string.
         * Example: "retins_01KEZF7C00WPB0BR4WTT7CMSB8". return_inspections (Optional): Array of
         * {@link ReturnInspection}. Present only when `expand` includes `return_inspections`. The
         * inspections in `return_inspection_ids`, in the same order. return_inspections[] (Value):
         * {@link ReturnInspection}. An assessment of the condition of returned items.
         * return_number (Required): string. Human-readable number for the Return.
         * return_receipt_ids (Required): Array of string. IDs of every receipt recorded for this
         * Return, oldest first, including superseded receipts. Expand `return_receipts` on `GET
         * /v1/returns/{return_id}` to read them inline. return_receipt_ids[] (Value): string.
         * Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ". return_receipts (Optional): Array of {@link
         * ReturnReceipt}. Present only when `expand` includes `return_receipts`. The receipts in
         * `return_receipt_ids`, in the same order. return_receipts[] (Value): {@link
         * ReturnReceipt}. A record of returned items arriving at a location. return_resolution_ids
         * (Required): Array of string. IDs of every resolution created for this Return, oldest
         * first, including failed and canceled resolutions. Expand `return_resolutions` on `GET
         * /v1/returns/{return_id}` to read them inline. return_resolution_ids[] (Value): string.
         * Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3". return_resolutions (Optional): Array of
         * {@link ReturnResolution}. Present only when `expand` includes `return_resolutions`. The
         * resolutions in `return_resolution_ids`, in the same order. return_resolutions[] (Value):
         * {@link ReturnResolution}. The refund, exchange, or other outcome of a return.
         * shipment_ids (Required): Array of string. IDs of every shipment raised to send this
         * Return's items back, oldest first, including voided shipments. Expand `shipments` on
         * `GET /v1/returns/{return_id}` to read them inline. shipment_ids[] (Value): string.
         * Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68". shipments (Optional): Array of {@link
         * ExpandedShipmentSummary}. Present only when `expand` includes `shipments`. Summaries of
         * the shipments in `shipment_ids`, in the same order. shipments[] (Value): {@link
         * ExpandedShipmentSummary}. A shipment's summary fields, including direction, status, and
         * package count, returned when the shipment is expanded. status (Required): string. Where
         * the whole Return stands. Read `decision_status`, `merchandise_status`, and
         * `resolution_status` for the part you need. Value enum: "requested", "open", "completed",
         * "declined", "canceled". supported_actions (Required): Array of string. Actions that can
         * succeed now. Actions the API key or token doesn't have the scope for are left out. A
         * Return waiting for a decision lists `decide` and `cancel`. An open Return lists `cancel`
         * only while no units have been received, inspected, dispositioned, or resolved, and it
         * has no current receipts or inspections, non-canceled dispositions or resolutions, or
         * non-voided return shipments. It lists `complete` when `completion_mode` is `manual` and
         * `completion_blockers` is empty. A completed Return lists `reopen`. A declined or
         * canceled Return lists none. [] enum: "cancel", "complete", "decide", "process",
         * "reopen". supported_actions[] (Value): string. Value enum: "cancel", "complete",
         * "decide", "process", "reopen". updated_at (Required): string. RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". version (Required): integer. Goes up with
         * every change to the Return. Each activity's `return_version` is the version that
         * activity produced. A write that takes `expected_version` or `expected_return_version`
         * for this Return compares it with this value. Format: int64. minimum: 0.
         */
        "object": {
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "canceled_at"?: string;
            /**
             * Who canceled the Return. Who performed a return action: a buyer, merchant,
             * integration, or the system, with an optional ID.
             */
            "canceled_by"?: ReturnActor;
            /**
             * Why the Return was canceled. Value enum: "buyer_request", "merchant_request",
             * "duplicate", "expired", "created_in_error", "other".
             */
            "cancellation_reason"?: "buyer_request"
                | "merchant_request"
                | "duplicate"
                | "expired"
                | "created_in_error"
                | "other"
                | (string & {});
            /** Detail sent with the cancellation. Merchant reads only. */
            "cancellation_reason_message"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "completed_at"?: string;
            /**
             * Who completed the Return. `system` when Flint completed it automatically. Who
             * performed a return action: a buyer, merchant, integration, or the system, with an
             * optional ID.
             */
            "completed_by"?: ReturnActor;
            /**
             * What is still owed before the Return can complete. Empty when nothing is. []
             * (Value): {@link ReturnCompletionBlocker}. Something still owed before a return can
             * complete, with the return line or record it concerns.
             */
            "completion_blockers": Array<ReturnCompletionBlocker>;
            /**
             * automatic completes the Return when the last completion blocker clears; manual waits
             * for POST /v1/returns/{return_id}/complete. Reopening a Return sets it to manual.
             * Value enum: "manual", "automatic".
             */
            "completion_mode"?: "manual" | "automatic" | (string & {});
            /**
             * Why the Return was completed by hand. Absent when Flint completed it automatically.
             * Value enum: "manual_completion", "exception_waived", "other".
             */
            "completion_reason"?: "manual_completion" | "exception_waived" | "other" | (string & {});
            /** Detail sent when the Return was completed by hand. */
            "completion_reason_message"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Present only when `expand` includes `customer`; `null` when expanded and there is no
             * related customer. anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's
             * summary fields, returned in place of a customer ID when the customer is expanded.
             * anyOf[2] (Value): null.
             */
            "customer"?: ((ExpandedCustomerSummary) | (null));
            /** The customer the Return belongs to. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". */
            "customer_id"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "decision_at"?: string;
            /**
             * Whether the requested units were approved. `pending` until one decision covers every
             * line. Value enum: "pending", "approved", "partially_approved", "declined".
             */
            "decision_status": "pending" | "approved" | "partially_approved" | "declined" | (string & {});
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * The Return's money in one place: the value of the returned lines, deductions and
             * credits, and what has been refunded or collected. The money for a return: returned
             * value, deductions, credits, replacement total, and amounts due to or from the buyer.
             */
            "financial_summary": ReturnFinancialSummary;
            /**
             * What the buyer still has to send back and where. Each entry leaves the list once it
             * is satisfied, so an empty list means nothing is waiting on the buyer. [] (Value):
             * {@link ReturnHandoffRequirement}. What the buyer must do to hand merchandise back:
             * the destination, instructions, line items, and expiry.
             */
            "handoff_requirements": Array<ReturnHandoffRequirement>;
            /**
             * The Idempotency-Key of the request that created this resource. `null` when that
             * request sent no key, Flint created the resource, the reader isn't the caller that
             * created it (another app install, a buyer, or the merchant reading an app's or
             * buyer's record), or the caller that created an older record is unknown. Filter its
             * list with `idempotency_key` to find it. Recorded payloads, including replayed
             * responses and webhook events, can return `null`. To find a key that a replay returns
             * as `null`, read the resource. Buyer routes return only keys from the buyer's
             * namespace.
             */
            "idempotency_key": string | null;
            /**
             * Who created the Return: buyer for a customer session on /v1/me or Flint's hosted
             * account, merchant for a Dashboard user, integration for an API key or partner app,
             * or system for Flint automation. It cannot be sent. Value enum: "buyer", "merchant",
             * "integration", "system".
             */
            "initiated_by": "buyer" | "merchant" | "integration" | "system" | (string & {});
            /**
             * The lines being returned. [] (Value): {@link ReturnLineItem}. An item included in a
             * return request.
             */
            "line_items": Array<ReturnLineItem>;
            /**
             * On the Return, the least-finished line's value. Value enum: "not_required",
             * "awaiting_handoff", "in_transit", "partially_received", "inspection_required",
             * "partially_inspected", "inspection_review_required", "disposition_required",
             * "resolved", "exception".
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
            /**
             * Stored caller-owned key-value data. See `MetadataInput` for key, value, and size
             * rules. Caller-owned key-value data stored on a resource. Keys starting with flint_
             * are reserved for Flint and are not returned. Writes follow the limits on
             * MetadataInput and MetadataPatchInput; maps written before those limits may not
             * satisfy them.
             */
            "metadata": MetadataMap;
            /**
             * Present only when `expand` includes `order`; `null` when expanded and there is no
             * related order. anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary
             * fields, including status, payment and refund status, and pricing and settlement
             * amounts, returned when the order is expanded. anyOf[2] (Value): null.
             */
            "order"?: ((ExpandedOrderSummary) | (null));
            /** ID of the Order the Return is against. Example: "ord_01KEZF7C0054GQKJ142A8X367A". */
            "order_id": string;
            /**
             * How your return policies judged the request when the Return was created. How a
             * return policy evaluated a return request: overall status and reason, the policy
             * revision used, and per-line results.
             */
            "policy_evaluation"?: ReturnPolicyEvaluation;
            /**
             * Whether the buyer has received the value they are owed. Combines the Return's
             * resolutions and its unsettled corrections. Value enum: "not_selected", "pending",
             * "partially_completed", "requires_action", "completed", "failed".
             */
            "resolution_status": "not_selected"
                | "pending"
                | "partially_completed"
                | "requires_action"
                | "completed"
                | "failed"
                | (string & {});
            /**
             * IDs of every disposition recorded for this Return, oldest first, including failed
             * and canceled dispositions. Expand `return_dispositions` on `GET
             * /v1/returns/{return_id}` to read them inline. [] (Value): string. Example:
             * "retdsp_01KEZF7C007H87J66PH2EEK1VW".
             */
            "return_disposition_ids": Array<string>;
            /**
             * Present only when `expand` includes `return_dispositions`. The dispositions in
             * `return_disposition_ids`, in the same order. [] (Value): {@link ReturnDisposition}.
             * A decision about how returned merchandise will be handled.
             */
            "return_dispositions"?: Array<ReturnDisposition>;
            /**
             * Unique identifier for this return, prefixed `ret_`. Example:
             * "ret_01KEZF7C00PG93650ZKVQNGF7X".
             */
            "return_id": string;
            /**
             * IDs of every inspection recorded for this Return, oldest first, including superseded
             * inspections. Expand `return_inspections` on `GET /v1/returns/{return_id}` to read
             * them inline. [] (Value): string. Example: "retins_01KEZF7C00WPB0BR4WTT7CMSB8".
             */
            "return_inspection_ids": Array<string>;
            /**
             * Present only when `expand` includes `return_inspections`. The inspections in
             * `return_inspection_ids`, in the same order. [] (Value): {@link ReturnInspection}. An
             * assessment of the condition of returned items.
             */
            "return_inspections"?: Array<ReturnInspection>;
            /** Human-readable number for the Return. */
            "return_number": string;
            /**
             * IDs of every receipt recorded for this Return, oldest first, including superseded
             * receipts. Expand `return_receipts` on `GET /v1/returns/{return_id}` to read them
             * inline. [] (Value): string. Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ".
             */
            "return_receipt_ids": Array<string>;
            /**
             * Present only when `expand` includes `return_receipts`. The receipts in
             * `return_receipt_ids`, in the same order. [] (Value): {@link ReturnReceipt}. A record
             * of returned items arriving at a location.
             */
            "return_receipts"?: Array<ReturnReceipt>;
            /**
             * IDs of every resolution created for this Return, oldest first, including failed and
             * canceled resolutions. Expand `return_resolutions` on `GET /v1/returns/{return_id}`
             * to read them inline. [] (Value): string. Example:
             * "retres_01KEZF7C00C7RZJN31W9SGMEQ3".
             */
            "return_resolution_ids": Array<string>;
            /**
             * Present only when `expand` includes `return_resolutions`. The resolutions in
             * `return_resolution_ids`, in the same order. [] (Value): {@link ReturnResolution}.
             * The refund, exchange, or other outcome of a return.
             */
            "return_resolutions"?: Array<ReturnResolution>;
            /**
             * IDs of every shipment raised to send this Return's items back, oldest first,
             * including voided shipments. Expand `shipments` on `GET /v1/returns/{return_id}` to
             * read them inline. [] (Value): string. Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68".
             */
            "shipment_ids": Array<string>;
            /**
             * Present only when `expand` includes `shipments`. Summaries of the shipments in
             * `shipment_ids`, in the same order. [] (Value): {@link ExpandedShipmentSummary}. A
             * shipment's summary fields, including direction, status, and package count, returned
             * when the shipment is expanded.
             */
            "shipments"?: Array<ExpandedShipmentSummary>;
            /**
             * Where the whole Return stands. Read `decision_status`, `merchandise_status`, and
             * `resolution_status` for the part you need. Value enum: "requested", "open",
             * "completed", "declined", "canceled".
             */
            "status": "requested" | "open" | "completed" | "declined" | "canceled" | (string & {});
            /**
             * Actions that can succeed now. Actions the API key or token doesn't have the scope
             * for are left out. A Return waiting for a decision lists `decide` and `cancel`. An
             * open Return lists `cancel` only while no units have been received, inspected,
             * dispositioned, or resolved, and it has no current receipts or inspections,
             * non-canceled dispositions or resolutions, or non-voided return shipments. It lists
             * `complete` when `completion_mode` is `manual` and `completion_blockers` is empty. A
             * completed Return lists `reopen`. A declined or canceled Return lists none. [] enum:
             * "cancel", "complete", "decide", "process", "reopen". [] (Value): string. Value enum:
             * "cancel", "complete", "decide", "process", "reopen".
             */
            "supported_actions": Array<"cancel" | "complete" | "decide" | "process" | "reopen" | (string & {})>;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Goes up with every change to the Return. Each activity's `return_version` is the
             * version that activity produced. A write that takes `expected_version` or
             * `expected_return_version` for this Return compares it with this value. Format:
             * int64. minimum: 0.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events. canceled_at (Optional): string or null. RFC3339
         * timestamp. canceled_at.anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". canceled_at.anyOf[2] (Value): null. canceled_by
         * (Optional): {@link ReturnActorPreviousAttributes} or null. Who canceled the Return.
         * canceled_by.anyOf[1] (Value): {@link ReturnActorPreviousAttributes}.
         * canceled_by.anyOf[2] (Value): null. cancellation_reason (Optional): string or null. Why
         * the Return was canceled. Value enum: "buyer_request", "merchant_request", "duplicate",
         * "expired", "created_in_error", "other". cancellation_reason.anyOf[1] (Value): string.
         * Why the Return was canceled. Value enum: "buyer_request", "merchant_request",
         * "duplicate", "expired", "created_in_error", "other". cancellation_reason.anyOf[2]
         * (Value): null. cancellation_reason_message (Optional): string or null. Detail sent with
         * the cancellation. Merchant reads only. cancellation_reason_message.anyOf[1] (Value):
         * string. Detail sent with the cancellation. Merchant reads only.
         * cancellation_reason_message.anyOf[2] (Value): null. completed_at (Optional): string or
         * null. RFC3339 timestamp. completed_at.anyOf[1] (Value): string. RFC3339 timestamp.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". completed_at.anyOf[2] (Value): null.
         * completed_by (Optional): {@link ReturnActorPreviousAttributes} or null. Who completed
         * the Return. `system` when Flint completed it automatically. completed_by.anyOf[1]
         * (Value): {@link ReturnActorPreviousAttributes}. completed_by.anyOf[2] (Value): null.
         * completion_blockers (Optional): Array of {@link
         * ReturnCompletionBlockerPreviousAttributes} or null. What is still owed before the Return
         * can complete. Empty when nothing is. completion_blockers.anyOf[1] (Value): Array of
         * {@link ReturnCompletionBlockerPreviousAttributes}. What is still owed before the Return
         * can complete. Empty when nothing is. completion_blockers.anyOf[1][] (Value): {@link
         * ReturnCompletionBlockerPreviousAttributes}. completion_blockers.anyOf[2] (Value): null.
         * completion_mode (Optional): string or null. automatic completes the Return when the last
         * completion blocker clears; manual waits for POST /v1/returns/{return_id}/complete.
         * Reopening a Return sets it to manual. Value enum: "manual", "automatic".
         * completion_mode.anyOf[1] (Value): string. automatic completes the Return when the last
         * completion blocker clears; manual waits for POST /v1/returns/{return_id}/complete.
         * Reopening a Return sets it to manual. Value enum: "manual", "automatic".
         * completion_mode.anyOf[2] (Value): null. completion_reason (Optional): string or null.
         * Why the Return was completed by hand. Absent when Flint completed it automatically.
         * Value enum: "manual_completion", "exception_waived", "other". completion_reason.anyOf[1]
         * (Value): string. Why the Return was completed by hand. Absent when Flint completed it
         * automatically. Value enum: "manual_completion", "exception_waived", "other".
         * completion_reason.anyOf[2] (Value): null. completion_reason_message (Optional): string
         * or null. Detail sent when the Return was completed by hand.
         * completion_reason_message.anyOf[1] (Value): string. Detail sent when the Return was
         * completed by hand. completion_reason_message.anyOf[2] (Value): null. created_at
         * (Optional): string or null. RFC3339 timestamp. created_at.anyOf[1] (Value): string.
         * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * created_at.anyOf[2] (Value): null. customer (Optional): {@link
         * ExpandedCustomerSummaryPreviousAttributes} or null. Present only when `expand` includes
         * `customer`; `null` when expanded and there is no related customer. customer.anyOf[1]
         * (Value): {@link ExpandedCustomerSummaryPreviousAttributes}. customer.anyOf[2] (Value):
         * null. customer_id (Optional): string or null. The customer the Return belongs to.
         * customer_id.anyOf[1] (Value): string. The customer the Return belongs to. Example:
         * "cus_01KEZF7C006X9JK6NZNA2SM9XD". customer_id.anyOf[2] (Value): null. decision_at
         * (Optional): string or null. RFC3339 timestamp. decision_at.anyOf[1] (Value): string.
         * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * decision_at.anyOf[2] (Value): null. decision_status (Optional): string or null. Whether
         * the requested units were approved. `pending` until one decision covers every line. Value
         * enum: "pending", "approved", "partially_approved", "declined". decision_status.anyOf[1]
         * (Value): string. Whether the requested units were approved. `pending` until one decision
         * covers every line. Value enum: "pending", "approved", "partially_approved", "declined".
         * decision_status.anyOf[2] (Value): null. external_reference_id (Optional): string or
         * null. Caller-owned identifier for this resource in an external system.
         * external_reference_id.anyOf[1] (Value): string. Caller-owned identifier for this
         * resource in an external system. maxLength: 255. Example: "warehouse-1842".
         * external_reference_id.anyOf[2] (Value): null. financial_summary (Optional): {@link
         * ReturnFinancialSummaryPreviousAttributes} or null. The Return's money in one place: the
         * value of the returned lines, deductions and credits, and what has been refunded or
         * collected. financial_summary.anyOf[1] (Value): {@link
         * ReturnFinancialSummaryPreviousAttributes}. financial_summary.anyOf[2] (Value): null.
         * handoff_requirements (Optional): Array of {@link
         * ReturnHandoffRequirementPreviousAttributes} or null. What the buyer still has to send
         * back and where. Each entry leaves the list once it is satisfied, so an empty list means
         * nothing is waiting on the buyer. handoff_requirements.anyOf[1] (Value): Array of {@link
         * ReturnHandoffRequirementPreviousAttributes}. What the buyer still has to send back and
         * where. Each entry leaves the list once it is satisfied, so an empty list means nothing
         * is waiting on the buyer. handoff_requirements.anyOf[1][] (Value): {@link
         * ReturnHandoffRequirementPreviousAttributes}. handoff_requirements.anyOf[2] (Value):
         * null. idempotency_key (Optional): string or null. The Idempotency-Key of the request
         * that created this resource. `null` when that request sent no key, Flint created the
         * resource, the reader isn't the caller that created it (another app install, a buyer, or
         * the merchant reading an app's or buyer's record), or the caller that created an older
         * record is unknown. Filter its list with `idempotency_key` to find it. Recorded payloads,
         * including replayed responses and webhook events, can return `null`. To find a key that a
         * replay returns as `null`, read the resource. Buyer routes return only keys from the
         * buyer's namespace. idempotency_key.anyOf[1] (Value): string. The Idempotency-Key of the
         * request that created this resource. `null` when that request sent no key, Flint created
         * the resource, the reader isn't the caller that created it (another app install, a buyer,
         * or the merchant reading an app's or buyer's record), or the caller that created an older
         * record is unknown. Filter its list with `idempotency_key` to find it. Recorded payloads,
         * including replayed responses and webhook events, can return `null`. To find a key that a
         * replay returns as `null`, read the resource. Buyer routes return only keys from the
         * buyer's namespace. idempotency_key.anyOf[2] (Value): null. initiated_by (Optional):
         * string or null. Who created the Return: buyer for a customer session on /v1/me or
         * Flint's hosted account, merchant for a Dashboard user, integration for an API key or
         * partner app, or system for Flint automation. It cannot be sent. Value enum: "buyer",
         * "merchant", "integration", "system". initiated_by.anyOf[1] (Value): string. Who created
         * the Return: buyer for a customer session on /v1/me or Flint's hosted account, merchant
         * for a Dashboard user, integration for an API key or partner app, or system for Flint
         * automation. It cannot be sent. Value enum: "buyer", "merchant", "integration", "system".
         * initiated_by.anyOf[2] (Value): null. line_items (Optional): Array of {@link
         * ReturnLineItemPreviousAttributes} or null. The lines being returned. line_items.anyOf[1]
         * (Value): Array of {@link ReturnLineItemPreviousAttributes}. The lines being returned.
         * line_items.anyOf[1][] (Value): {@link ReturnLineItemPreviousAttributes}.
         * line_items.anyOf[2] (Value): null. merchandise_status (Optional): string or null. On the
         * Return, the least-finished line's value. Value enum: "not_required", "awaiting_handoff",
         * "in_transit", "partially_received", "inspection_required", "partially_inspected",
         * "inspection_review_required", "disposition_required", "resolved", "exception".
         * merchandise_status.anyOf[1] (Value): string. On the Return, the least-finished line's
         * value. Value enum: "not_required", "awaiting_handoff", "in_transit",
         * "partially_received", "inspection_required", "partially_inspected",
         * "inspection_review_required", "disposition_required", "resolved", "exception".
         * merchandise_status.anyOf[2] (Value): null. metadata (Optional): {@link MetadataMap} or
         * null. Stored caller-owned key-value data. See `MetadataInput` for key, value, and size
         * rules. metadata.anyOf[1] (Value): {@link MetadataMap}. metadata.anyOf[2] (Value): null.
         * order (Optional): {@link ExpandedOrderSummaryPreviousAttributes} or null. Present only
         * when `expand` includes `order`; `null` when expanded and there is no related order.
         * order.anyOf[1] (Value): {@link ExpandedOrderSummaryPreviousAttributes}. order.anyOf[2]
         * (Value): null. order_id (Optional): string or null. ID of the Order the Return is
         * against. order_id.anyOf[1] (Value): string. ID of the Order the Return is against.
         * Example: "ord_01KEZF7C0054GQKJ142A8X367A". order_id.anyOf[2] (Value): null.
         * policy_evaluation (Optional): {@link ReturnPolicyEvaluationPreviousAttributes} or null.
         * How your return policies judged the request when the Return was created.
         * policy_evaluation.anyOf[1] (Value): {@link ReturnPolicyEvaluationPreviousAttributes}.
         * policy_evaluation.anyOf[2] (Value): null. resolution_status (Optional): string or null.
         * Whether the buyer has received the value they are owed. Combines the Return's
         * resolutions and its unsettled corrections. Value enum: "not_selected", "pending",
         * "partially_completed", "requires_action", "completed", "failed".
         * resolution_status.anyOf[1] (Value): string. Whether the buyer has received the value
         * they are owed. Combines the Return's resolutions and its unsettled corrections. Value
         * enum: "not_selected", "pending", "partially_completed", "requires_action", "completed",
         * "failed". resolution_status.anyOf[2] (Value): null. return_disposition_ids (Optional):
         * Array of string or null. IDs of every disposition recorded for this Return, oldest
         * first, including failed and canceled dispositions. Expand `return_dispositions` on `GET
         * /v1/returns/{return_id}` to read them inline. return_disposition_ids.anyOf[1] (Value):
         * Array of string. IDs of every disposition recorded for this Return, oldest first,
         * including failed and canceled dispositions. Expand `return_dispositions` on `GET
         * /v1/returns/{return_id}` to read them inline. return_disposition_ids.anyOf[1][] (Value):
         * string. Example: "retdsp_01KEZF7C007H87J66PH2EEK1VW". return_disposition_ids.anyOf[2]
         * (Value): null. return_dispositions (Optional): Array of {@link
         * ReturnDispositionPreviousAttributes} or null. Present only when `expand` includes
         * `return_dispositions`. The dispositions in `return_disposition_ids`, in the same order.
         * return_dispositions.anyOf[1] (Value): Array of {@link
         * ReturnDispositionPreviousAttributes}. Present only when `expand` includes
         * `return_dispositions`. The dispositions in `return_disposition_ids`, in the same order.
         * return_dispositions.anyOf[1][] (Value): {@link ReturnDispositionPreviousAttributes}.
         * return_dispositions.anyOf[2] (Value): null. return_id (Optional): string or null. Unique
         * identifier for this return, prefixed `ret_`. return_id.anyOf[1] (Value): string. Unique
         * identifier for this return, prefixed `ret_`. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X".
         * return_id.anyOf[2] (Value): null. return_inspection_ids (Optional): Array of string or
         * null. IDs of every inspection recorded for this Return, oldest first, including
         * superseded inspections. Expand `return_inspections` on `GET /v1/returns/{return_id}` to
         * read them inline. return_inspection_ids.anyOf[1] (Value): Array of string. IDs of every
         * inspection recorded for this Return, oldest first, including superseded inspections.
         * Expand `return_inspections` on `GET /v1/returns/{return_id}` to read them inline.
         * return_inspection_ids.anyOf[1][] (Value): string. Example:
         * "retins_01KEZF7C00WPB0BR4WTT7CMSB8". return_inspection_ids.anyOf[2] (Value): null.
         * return_inspections (Optional): Array of {@link ReturnInspectionPreviousAttributes} or
         * null. Present only when `expand` includes `return_inspections`. The inspections in
         * `return_inspection_ids`, in the same order. return_inspections.anyOf[1] (Value): Array
         * of {@link ReturnInspectionPreviousAttributes}. Present only when `expand` includes
         * `return_inspections`. The inspections in `return_inspection_ids`, in the same order.
         * return_inspections.anyOf[1][] (Value): {@link ReturnInspectionPreviousAttributes}.
         * return_inspections.anyOf[2] (Value): null. return_number (Optional): string or null.
         * Human-readable number for the Return. return_number.anyOf[1] (Value): string.
         * Human-readable number for the Return. return_number.anyOf[2] (Value): null.
         * return_receipt_ids (Optional): Array of string or null. IDs of every receipt recorded
         * for this Return, oldest first, including superseded receipts. Expand `return_receipts`
         * on `GET /v1/returns/{return_id}` to read them inline. return_receipt_ids.anyOf[1]
         * (Value): Array of string. IDs of every receipt recorded for this Return, oldest first,
         * including superseded receipts. Expand `return_receipts` on `GET /v1/returns/{return_id}`
         * to read them inline. return_receipt_ids.anyOf[1][] (Value): string. Example:
         * "retrc_01KEZF7C0052GWDW41D9AJAVJZ". return_receipt_ids.anyOf[2] (Value): null.
         * return_receipts (Optional): Array of {@link ReturnReceiptPreviousAttributes} or null.
         * Present only when `expand` includes `return_receipts`. The receipts in
         * `return_receipt_ids`, in the same order. return_receipts.anyOf[1] (Value): Array of
         * {@link ReturnReceiptPreviousAttributes}. Present only when `expand` includes
         * `return_receipts`. The receipts in `return_receipt_ids`, in the same order.
         * return_receipts.anyOf[1][] (Value): {@link ReturnReceiptPreviousAttributes}.
         * return_receipts.anyOf[2] (Value): null. return_resolution_ids (Optional): Array of
         * string or null. IDs of every resolution created for this Return, oldest first, including
         * failed and canceled resolutions. Expand `return_resolutions` on `GET
         * /v1/returns/{return_id}` to read them inline. return_resolution_ids.anyOf[1] (Value):
         * Array of string. IDs of every resolution created for this Return, oldest first,
         * including failed and canceled resolutions. Expand `return_resolutions` on `GET
         * /v1/returns/{return_id}` to read them inline. return_resolution_ids.anyOf[1][] (Value):
         * string. Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3". return_resolution_ids.anyOf[2]
         * (Value): null. return_resolutions (Optional): Array of {@link
         * ReturnResolutionPreviousAttributes} or null. Present only when `expand` includes
         * `return_resolutions`. The resolutions in `return_resolution_ids`, in the same order.
         * return_resolutions.anyOf[1] (Value): Array of {@link
         * ReturnResolutionPreviousAttributes}. Present only when `expand` includes
         * `return_resolutions`. The resolutions in `return_resolution_ids`, in the same order.
         * return_resolutions.anyOf[1][] (Value): {@link ReturnResolutionPreviousAttributes}.
         * return_resolutions.anyOf[2] (Value): null. shipment_ids (Optional): Array of string or
         * null. IDs of every shipment raised to send this Return's items back, oldest first,
         * including voided shipments. Expand `shipments` on `GET /v1/returns/{return_id}` to read
         * them inline. shipment_ids.anyOf[1] (Value): Array of string. IDs of every shipment
         * raised to send this Return's items back, oldest first, including voided shipments.
         * Expand `shipments` on `GET /v1/returns/{return_id}` to read them inline.
         * shipment_ids.anyOf[1][] (Value): string. Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68".
         * shipment_ids.anyOf[2] (Value): null. shipments (Optional): Array of {@link
         * ExpandedShipmentSummaryPreviousAttributes} or null. Present only when `expand` includes
         * `shipments`. Summaries of the shipments in `shipment_ids`, in the same order.
         * shipments.anyOf[1] (Value): Array of {@link ExpandedShipmentSummaryPreviousAttributes}.
         * Present only when `expand` includes `shipments`. Summaries of the shipments in
         * `shipment_ids`, in the same order. shipments.anyOf[1][] (Value): {@link
         * ExpandedShipmentSummaryPreviousAttributes}. shipments.anyOf[2] (Value): null. status
         * (Optional): string or null. Where the whole Return stands. Read `decision_status`,
         * `merchandise_status`, and `resolution_status` for the part you need. Value enum:
         * "requested", "open", "completed", "declined", "canceled". status.anyOf[1] (Value):
         * string. Where the whole Return stands. Read `decision_status`, `merchandise_status`, and
         * `resolution_status` for the part you need. Value enum: "requested", "open", "completed",
         * "declined", "canceled". status.anyOf[2] (Value): null. supported_actions (Optional):
         * Array of string or null. Actions that can succeed now. Actions the API key or token
         * doesn't have the scope for are left out. A Return waiting for a decision lists `decide`
         * and `cancel`. An open Return lists `cancel` only while no units have been received,
         * inspected, dispositioned, or resolved, and it has no current receipts or inspections,
         * non-canceled dispositions or resolutions, or non-voided return shipments. It lists
         * `complete` when `completion_mode` is `manual` and `completion_blockers` is empty. A
         * completed Return lists `reopen`. A declined or canceled Return lists none. [] enum:
         * "cancel", "complete", "decide", "process", "reopen". supported_actions.anyOf[1] (Value):
         * Array of string. Actions that can succeed now. Actions the API key or token doesn't have
         * the scope for are left out. A Return waiting for a decision lists `decide` and `cancel`.
         * An open Return lists `cancel` only while no units have been received, inspected,
         * dispositioned, or resolved, and it has no current receipts or inspections, non-canceled
         * dispositions or resolutions, or non-voided return shipments. It lists `complete` when
         * `completion_mode` is `manual` and `completion_blockers` is empty. A completed Return
         * lists `reopen`. A declined or canceled Return lists none. [] enum: "cancel", "complete",
         * "decide", "process", "reopen". supported_actions.anyOf[1][] (Value): string. Value enum:
         * "cancel", "complete", "decide", "process", "reopen". supported_actions.anyOf[2] (Value):
         * null. updated_at (Optional): string or null. RFC3339 timestamp. updated_at.anyOf[1]
         * (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * updated_at.anyOf[2] (Value): null. version (Optional): integer or null. Goes up with
         * every change to the Return. Each activity's `return_version` is the version that
         * activity produced. A write that takes `expected_version` or `expected_return_version`
         * for this Return compares it with this value. version.anyOf[1] (Value): integer. Goes up
         * with every change to the Return. Each activity's `return_version` is the version that
         * activity produced. A write that takes `expected_version` or `expected_return_version`
         * for this Return compares it with this value. Format: int64. minimum: 0. version.anyOf[2]
         * (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "canceled_at"?: ((string) | (null));
            /**
             * Who canceled the Return. anyOf[1] (Value): {@link ReturnActorPreviousAttributes}.
             * anyOf[2] (Value): null.
             */
            "canceled_by"?: ((ReturnActorPreviousAttributes) | (null));
            /**
             * Why the Return was canceled. Value enum: "buyer_request", "merchant_request",
             * "duplicate", "expired", "created_in_error", "other". anyOf[1] (Value): string. Why
             * the Return was canceled. Value enum: "buyer_request", "merchant_request",
             * "duplicate", "expired", "created_in_error", "other". anyOf[2] (Value): null.
             */
            "cancellation_reason"?: (("buyer_request"
                | "merchant_request"
                | "duplicate"
                | "expired"
                | "created_in_error"
                | "other"
                | (string & {}))
                | (null));
            /**
             * Detail sent with the cancellation. Merchant reads only. anyOf[1] (Value): string.
             * Detail sent with the cancellation. Merchant reads only. anyOf[2] (Value): null.
             */
            "cancellation_reason_message"?: ((string) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "completed_at"?: ((string) | (null));
            /**
             * Who completed the Return. `system` when Flint completed it automatically. anyOf[1]
             * (Value): {@link ReturnActorPreviousAttributes}. anyOf[2] (Value): null.
             */
            "completed_by"?: ((ReturnActorPreviousAttributes) | (null));
            /**
             * What is still owed before the Return can complete. Empty when nothing is. anyOf[1]
             * (Value): Array of {@link ReturnCompletionBlockerPreviousAttributes}. What is still
             * owed before the Return can complete. Empty when nothing is. anyOf[1][] (Value):
             * {@link ReturnCompletionBlockerPreviousAttributes}. anyOf[2] (Value): null.
             */
            "completion_blockers"?: ((Array<ReturnCompletionBlockerPreviousAttributes>) | (null));
            /**
             * automatic completes the Return when the last completion blocker clears; manual waits
             * for POST /v1/returns/{return_id}/complete. Reopening a Return sets it to manual.
             * Value enum: "manual", "automatic". anyOf[1] (Value): string. automatic completes the
             * Return when the last completion blocker clears; manual waits for POST
             * /v1/returns/{return_id}/complete. Reopening a Return sets it to manual. Value enum:
             * "manual", "automatic". anyOf[2] (Value): null.
             */
            "completion_mode"?: (("manual" | "automatic" | (string & {})) | (null));
            /**
             * Why the Return was completed by hand. Absent when Flint completed it automatically.
             * Value enum: "manual_completion", "exception_waived", "other". anyOf[1] (Value):
             * string. Why the Return was completed by hand. Absent when Flint completed it
             * automatically. Value enum: "manual_completion", "exception_waived", "other".
             * anyOf[2] (Value): null.
             */
            "completion_reason"?: (("manual_completion" | "exception_waived" | "other" | (string & {})) | (null));
            /**
             * Detail sent when the Return was completed by hand. anyOf[1] (Value): string. Detail
             * sent when the Return was completed by hand. anyOf[2] (Value): null.
             */
            "completion_reason_message"?: ((string) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * Present only when `expand` includes `customer`; `null` when expanded and there is no
             * related customer. anyOf[1] (Value): {@link
             * ExpandedCustomerSummaryPreviousAttributes}. anyOf[2] (Value): null.
             */
            "customer"?: ((ExpandedCustomerSummaryPreviousAttributes) | (null));
            /**
             * The customer the Return belongs to. anyOf[1] (Value): string. The customer the
             * Return belongs to. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". anyOf[2] (Value):
             * null.
             */
            "customer_id"?: ((string) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "decision_at"?: ((string) | (null));
            /**
             * Whether the requested units were approved. `pending` until one decision covers every
             * line. Value enum: "pending", "approved", "partially_approved", "declined". anyOf[1]
             * (Value): string. Whether the requested units were approved. `pending` until one
             * decision covers every line. Value enum: "pending", "approved", "partially_approved",
             * "declined". anyOf[2] (Value): null.
             */
            "decision_status"?: (("pending" | "approved" | "partially_approved" | "declined" | (string & {})) | (null));
            /**
             * Caller-owned identifier for this resource in an external system. anyOf[1] (Value):
             * string. Caller-owned identifier for this resource in an external system. maxLength:
             * 255. Example: "warehouse-1842". anyOf[2] (Value): null.
             */
            "external_reference_id"?: ((string) | (null));
            /**
             * The Return's money in one place: the value of the returned lines, deductions and
             * credits, and what has been refunded or collected. anyOf[1] (Value): {@link
             * ReturnFinancialSummaryPreviousAttributes}. anyOf[2] (Value): null.
             */
            "financial_summary"?: ((ReturnFinancialSummaryPreviousAttributes) | (null));
            /**
             * What the buyer still has to send back and where. Each entry leaves the list once it
             * is satisfied, so an empty list means nothing is waiting on the buyer. anyOf[1]
             * (Value): Array of {@link ReturnHandoffRequirementPreviousAttributes}. What the buyer
             * still has to send back and where. Each entry leaves the list once it is satisfied,
             * so an empty list means nothing is waiting on the buyer. anyOf[1][] (Value): {@link
             * ReturnHandoffRequirementPreviousAttributes}. anyOf[2] (Value): null.
             */
            "handoff_requirements"?: ((Array<ReturnHandoffRequirementPreviousAttributes>) | (null));
            /**
             * The Idempotency-Key of the request that created this resource. `null` when that
             * request sent no key, Flint created the resource, the reader isn't the caller that
             * created it (another app install, a buyer, or the merchant reading an app's or
             * buyer's record), or the caller that created an older record is unknown. Filter its
             * list with `idempotency_key` to find it. Recorded payloads, including replayed
             * responses and webhook events, can return `null`. To find a key that a replay returns
             * as `null`, read the resource. Buyer routes return only keys from the buyer's
             * namespace. anyOf[1] (Value): string. The Idempotency-Key of the request that created
             * this resource. `null` when that request sent no key, Flint created the resource, the
             * reader isn't the caller that created it (another app install, a buyer, or the
             * merchant reading an app's or buyer's record), or the caller that created an older
             * record is unknown. Filter its list with `idempotency_key` to find it. Recorded
             * payloads, including replayed responses and webhook events, can return `null`. To
             * find a key that a replay returns as `null`, read the resource. Buyer routes return
             * only keys from the buyer's namespace. anyOf[2] (Value): null.
             */
            "idempotency_key"?: ((string) | (null));
            /**
             * Who created the Return: buyer for a customer session on /v1/me or Flint's hosted
             * account, merchant for a Dashboard user, integration for an API key or partner app,
             * or system for Flint automation. It cannot be sent. Value enum: "buyer", "merchant",
             * "integration", "system". anyOf[1] (Value): string. Who created the Return: buyer for
             * a customer session on /v1/me or Flint's hosted account, merchant for a Dashboard
             * user, integration for an API key or partner app, or system for Flint automation. It
             * cannot be sent. Value enum: "buyer", "merchant", "integration", "system". anyOf[2]
             * (Value): null.
             */
            "initiated_by"?: (("buyer" | "merchant" | "integration" | "system" | (string & {})) | (null));
            /**
             * The lines being returned. anyOf[1] (Value): Array of {@link
             * ReturnLineItemPreviousAttributes}. The lines being returned. anyOf[1][] (Value):
             * {@link ReturnLineItemPreviousAttributes}. anyOf[2] (Value): null.
             */
            "line_items"?: ((Array<ReturnLineItemPreviousAttributes>) | (null));
            /**
             * On the Return, the least-finished line's value. Value enum: "not_required",
             * "awaiting_handoff", "in_transit", "partially_received", "inspection_required",
             * "partially_inspected", "inspection_review_required", "disposition_required",
             * "resolved", "exception". anyOf[1] (Value): string. On the Return, the least-finished
             * line's value. Value enum: "not_required", "awaiting_handoff", "in_transit",
             * "partially_received", "inspection_required", "partially_inspected",
             * "inspection_review_required", "disposition_required", "resolved", "exception".
             * anyOf[2] (Value): null.
             */
            "merchandise_status"?: (("not_required"
                | "awaiting_handoff"
                | "in_transit"
                | "partially_received"
                | "inspection_required"
                | "partially_inspected"
                | "inspection_review_required"
                | "disposition_required"
                | "resolved"
                | "exception"
                | (string & {}))
                | (null));
            /**
             * Stored caller-owned key-value data. See `MetadataInput` for key, value, and size
             * rules. anyOf[1] (Value): {@link MetadataMap}. anyOf[2] (Value): null.
             */
            "metadata"?: ((MetadataMap) | (null));
            /**
             * Present only when `expand` includes `order`; `null` when expanded and there is no
             * related order. anyOf[1] (Value): {@link ExpandedOrderSummaryPreviousAttributes}.
             * anyOf[2] (Value): null.
             */
            "order"?: ((ExpandedOrderSummaryPreviousAttributes) | (null));
            /**
             * ID of the Order the Return is against. anyOf[1] (Value): string. ID of the Order the
             * Return is against. Example: "ord_01KEZF7C0054GQKJ142A8X367A". anyOf[2] (Value):
             * null.
             */
            "order_id"?: ((string) | (null));
            /**
             * How your return policies judged the request when the Return was created. anyOf[1]
             * (Value): {@link ReturnPolicyEvaluationPreviousAttributes}. anyOf[2] (Value): null.
             */
            "policy_evaluation"?: ((ReturnPolicyEvaluationPreviousAttributes) | (null));
            /**
             * Whether the buyer has received the value they are owed. Combines the Return's
             * resolutions and its unsettled corrections. Value enum: "not_selected", "pending",
             * "partially_completed", "requires_action", "completed", "failed". anyOf[1] (Value):
             * string. Whether the buyer has received the value they are owed. Combines the
             * Return's resolutions and its unsettled corrections. Value enum: "not_selected",
             * "pending", "partially_completed", "requires_action", "completed", "failed". anyOf[2]
             * (Value): null.
             */
            "resolution_status"?: (("not_selected"
                | "pending"
                | "partially_completed"
                | "requires_action"
                | "completed"
                | "failed"
                | (string & {}))
                | (null));
            /**
             * IDs of every disposition recorded for this Return, oldest first, including failed
             * and canceled dispositions. Expand `return_dispositions` on `GET
             * /v1/returns/{return_id}` to read them inline. anyOf[1] (Value): Array of string. IDs
             * of every disposition recorded for this Return, oldest first, including failed and
             * canceled dispositions. Expand `return_dispositions` on `GET /v1/returns/{return_id}`
             * to read them inline. anyOf[1][] (Value): string. Example:
             * "retdsp_01KEZF7C007H87J66PH2EEK1VW". anyOf[2] (Value): null.
             */
            "return_disposition_ids"?: ((Array<string>) | (null));
            /**
             * Present only when `expand` includes `return_dispositions`. The dispositions in
             * `return_disposition_ids`, in the same order. anyOf[1] (Value): Array of {@link
             * ReturnDispositionPreviousAttributes}. Present only when `expand` includes
             * `return_dispositions`. The dispositions in `return_disposition_ids`, in the same
             * order. anyOf[1][] (Value): {@link ReturnDispositionPreviousAttributes}. anyOf[2]
             * (Value): null.
             */
            "return_dispositions"?: ((Array<ReturnDispositionPreviousAttributes>) | (null));
            /**
             * Unique identifier for this return, prefixed `ret_`. anyOf[1] (Value): string. Unique
             * identifier for this return, prefixed `ret_`. Example:
             * "ret_01KEZF7C00PG93650ZKVQNGF7X". anyOf[2] (Value): null.
             */
            "return_id"?: ((string) | (null));
            /**
             * IDs of every inspection recorded for this Return, oldest first, including superseded
             * inspections. Expand `return_inspections` on `GET /v1/returns/{return_id}` to read
             * them inline. anyOf[1] (Value): Array of string. IDs of every inspection recorded for
             * this Return, oldest first, including superseded inspections. Expand
             * `return_inspections` on `GET /v1/returns/{return_id}` to read them inline.
             * anyOf[1][] (Value): string. Example: "retins_01KEZF7C00WPB0BR4WTT7CMSB8". anyOf[2]
             * (Value): null.
             */
            "return_inspection_ids"?: ((Array<string>) | (null));
            /**
             * Present only when `expand` includes `return_inspections`. The inspections in
             * `return_inspection_ids`, in the same order. anyOf[1] (Value): Array of {@link
             * ReturnInspectionPreviousAttributes}. Present only when `expand` includes
             * `return_inspections`. The inspections in `return_inspection_ids`, in the same order.
             * anyOf[1][] (Value): {@link ReturnInspectionPreviousAttributes}. anyOf[2] (Value):
             * null.
             */
            "return_inspections"?: ((Array<ReturnInspectionPreviousAttributes>) | (null));
            /**
             * Human-readable number for the Return. anyOf[1] (Value): string. Human-readable
             * number for the Return. anyOf[2] (Value): null.
             */
            "return_number"?: ((string) | (null));
            /**
             * IDs of every receipt recorded for this Return, oldest first, including superseded
             * receipts. Expand `return_receipts` on `GET /v1/returns/{return_id}` to read them
             * inline. anyOf[1] (Value): Array of string. IDs of every receipt recorded for this
             * Return, oldest first, including superseded receipts. Expand `return_receipts` on
             * `GET /v1/returns/{return_id}` to read them inline. anyOf[1][] (Value): string.
             * Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ". anyOf[2] (Value): null.
             */
            "return_receipt_ids"?: ((Array<string>) | (null));
            /**
             * Present only when `expand` includes `return_receipts`. The receipts in
             * `return_receipt_ids`, in the same order. anyOf[1] (Value): Array of {@link
             * ReturnReceiptPreviousAttributes}. Present only when `expand` includes
             * `return_receipts`. The receipts in `return_receipt_ids`, in the same order.
             * anyOf[1][] (Value): {@link ReturnReceiptPreviousAttributes}. anyOf[2] (Value): null.
             */
            "return_receipts"?: ((Array<ReturnReceiptPreviousAttributes>) | (null));
            /**
             * IDs of every resolution created for this Return, oldest first, including failed and
             * canceled resolutions. Expand `return_resolutions` on `GET /v1/returns/{return_id}`
             * to read them inline. anyOf[1] (Value): Array of string. IDs of every resolution
             * created for this Return, oldest first, including failed and canceled resolutions.
             * Expand `return_resolutions` on `GET /v1/returns/{return_id}` to read them inline.
             * anyOf[1][] (Value): string. Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3". anyOf[2]
             * (Value): null.
             */
            "return_resolution_ids"?: ((Array<string>) | (null));
            /**
             * Present only when `expand` includes `return_resolutions`. The resolutions in
             * `return_resolution_ids`, in the same order. anyOf[1] (Value): Array of {@link
             * ReturnResolutionPreviousAttributes}. Present only when `expand` includes
             * `return_resolutions`. The resolutions in `return_resolution_ids`, in the same order.
             * anyOf[1][] (Value): {@link ReturnResolutionPreviousAttributes}. anyOf[2] (Value):
             * null.
             */
            "return_resolutions"?: ((Array<ReturnResolutionPreviousAttributes>) | (null));
            /**
             * IDs of every shipment raised to send this Return's items back, oldest first,
             * including voided shipments. Expand `shipments` on `GET /v1/returns/{return_id}` to
             * read them inline. anyOf[1] (Value): Array of string. IDs of every shipment raised to
             * send this Return's items back, oldest first, including voided shipments. Expand
             * `shipments` on `GET /v1/returns/{return_id}` to read them inline. anyOf[1][]
             * (Value): string. Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68". anyOf[2] (Value): null.
             */
            "shipment_ids"?: ((Array<string>) | (null));
            /**
             * Present only when `expand` includes `shipments`. Summaries of the shipments in
             * `shipment_ids`, in the same order. anyOf[1] (Value): Array of {@link
             * ExpandedShipmentSummaryPreviousAttributes}. Present only when `expand` includes
             * `shipments`. Summaries of the shipments in `shipment_ids`, in the same order.
             * anyOf[1][] (Value): {@link ExpandedShipmentSummaryPreviousAttributes}. anyOf[2]
             * (Value): null.
             */
            "shipments"?: ((Array<ExpandedShipmentSummaryPreviousAttributes>) | (null));
            /**
             * Where the whole Return stands. Read `decision_status`, `merchandise_status`, and
             * `resolution_status` for the part you need. Value enum: "requested", "open",
             * "completed", "declined", "canceled". anyOf[1] (Value): string. Where the whole
             * Return stands. Read `decision_status`, `merchandise_status`, and `resolution_status`
             * for the part you need. Value enum: "requested", "open", "completed", "declined",
             * "canceled". anyOf[2] (Value): null.
             */
            "status"?: (("requested" | "open" | "completed" | "declined" | "canceled" | (string & {})) | (null));
            /**
             * Actions that can succeed now. Actions the API key or token doesn't have the scope
             * for are left out. A Return waiting for a decision lists `decide` and `cancel`. An
             * open Return lists `cancel` only while no units have been received, inspected,
             * dispositioned, or resolved, and it has no current receipts or inspections,
             * non-canceled dispositions or resolutions, or non-voided return shipments. It lists
             * `complete` when `completion_mode` is `manual` and `completion_blockers` is empty. A
             * completed Return lists `reopen`. A declined or canceled Return lists none. [] enum:
             * "cancel", "complete", "decide", "process", "reopen". anyOf[1] (Value): Array of
             * string. Actions that can succeed now. Actions the API key or token doesn't have the
             * scope for are left out. A Return waiting for a decision lists `decide` and `cancel`.
             * An open Return lists `cancel` only while no units have been received, inspected,
             * dispositioned, or resolved, and it has no current receipts or inspections,
             * non-canceled dispositions or resolutions, or non-voided return shipments. It lists
             * `complete` when `completion_mode` is `manual` and `completion_blockers` is empty. A
             * completed Return lists `reopen`. A declined or canceled Return lists none. [] enum:
             * "cancel", "complete", "decide", "process", "reopen". anyOf[1][] (Value): string.
             * Value enum: "cancel", "complete", "decide", "process", "reopen". anyOf[2] (Value):
             * null.
             */
            "supported_actions"?: ((Array<"cancel" | "complete" | "decide" | "process" | "reopen" | (string & {})>) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "updated_at"?: ((string) | (null));
            /**
             * Goes up with every change to the Return. Each activity's `return_version` is the
             * version that activity produced. A write that takes `expected_version` or
             * `expected_return_version` for this Return compares it with this value. anyOf[1]
             * (Value): integer. Goes up with every change to the Return. Each activity's
             * `return_version` is the version that activity produced. A write that takes
             * `expected_version` or `expected_return_version` for this Return compares it with
             * this value. Format: int64. minimum: 0. anyOf[2] (Value): null.
             */
            "version"?: ((number) | (null));
        });
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "return.updated". */
    "event_type"?: "return.updated";
});
/**
 * How long after an event, such as fulfillment or delivery, an order can be returned under a
 * return policy.
 */
export type ReturnWindow = {
    /**
     * Length of the window in seconds, above 0 and at most 158,112,000 (1,830 days). Format:
     * int64. minimum: 1. maximum: 158112000.
     */
    "duration_seconds": number;
    /**
     * The fulfillment event the window counts from. Value enum: "fulfilled", "delivered",
     * "picked_up", "service_completed".
     */
    "starts_at_event": "fulfilled" | "delivered" | "picked_up" | "service_completed" | (string & {});
};
/**
 * How long after an event, such as fulfillment or delivery, an order can be returned under a
 * return policy.
 */
export type ReturnWindowRequestInput = {
    /**
     * Length of the window in seconds, above 0 and at most 158,112,000 (1,830 days). Format:
     * int64. minimum: 1. maximum: 158112000.
     */
    "duration_seconds": number;
    /**
     * The fulfillment event the window counts from. Value enum: "fulfilled", "delivered",
     * "picked_up", "service_completed".
     */
    "starts_at_event": "fulfilled" | "delivered" | "picked_up" | "service_completed";
};
export type ReturnsCancelLineItemParams = (InputValue<CancelReturnLineItemRequestInput>)
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
export type ReturnsCancelParams = (InputValue<CancelReturnRequestInput>)
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
export type ReturnsCompleteParams = (InputValue<CompleteReturnRequestInput>
    | {
    "expected_version"?: never;
    "reason"?: never;
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
export type ReturnsCreateAccessLinkParams = FilesCompleteParams;
export type ReturnsCreateLineItemParams = (InputValue<AddReturnLineItemRequestInput>)
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
export type ReturnsCreateParams = (InputValue<CreateReturnRequestInput>)
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
export type ReturnsDecideParams = (InputValue<DecideReturnRequestInput>)
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
export type ReturnsDeleteLineItemParams = {
    /**
     * Optional version of the parent Return. Supply exactly once. A stale value returns
     * VERSION_CONFLICT with the current Return version. Format: int64. minimum: 1. maximum:
     * 9007199254740991.
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
    /**
     * Filter by fulfillment id. pattern: ^ful_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "ful_01KEZF7C00F24WVSTTWR1FQX5T".
     */
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
    /**
     * Filter by order line item id. pattern: ^li_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "li_01KEZF7C008YPRCK7VDKTGWR31".
     */
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
     * ANDed. [] enum: "not_selected", "pending", "requires_action", "completed", "failed". Value
     * enum: "not_selected", "pending", "requires_action", "completed", "failed". anyOf[1] (Value):
     * Array of string. minItems: 1. [] enum: "not_selected", "pending", "requires_action",
     * "completed", "failed". anyOf[1][] (Value): string. Value enum: "not_selected", "pending",
     * "requires_action", "completed", "failed". anyOf[2] (Value): string. Value enum:
     * "not_selected", "pending", "requires_action", "completed", "failed".
     */
    "resolution_status"?: InputValue<("not_selected" | "pending" | "requires_action" | "completed" | "failed")
        | readonly ("not_selected" | "pending" | "requires_action" | "completed" | "failed")[]>;
    /**
     * Filter by return reason id. pattern: ^rrsn_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "rrsn_01KEZF7C00SEE2T4EYP1NXAH3E".
     */
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
    /**
     * Filter by customer id. pattern: ^cus_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     */
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
     * exact and case-sensitive. Returns only resources created in your caller namespace, plus
     * resources created before caller scoping under the original key. Returns current authorized
     * resources, not the recorded response. A pending resource does not prove that the operation
     * succeeded, and an empty list does not prove that it had no effect. A match can show
     * `idempotency_key: null` when that request sent no key, Flint created the resource, the
     * reader isn't the caller that created it (another app install, a buyer, or the merchant
     * reading an app's or buyer's record), or the caller that created an older record is unknown.
     * minLength: 1. maxLength: 255. pattern: ^[^\x00\r\n]*[^\x00\t\n\v\f\r ][^\x00\r\n]*$.
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
    /**
     * Filter by order id. pattern: ^ord_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A".
     */
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
    /**
     * Filter by receiving location id. pattern: ^loc_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "receiving_location_id"?: InputValue<string>;
    /**
     * Filter by resolution status. Values are trimmed and deduplicated in first-seen order; empty
     * or unknown entries are rejected. Values within this filter are ORed; separate filters are
     * ANDed. [] enum: "not_selected", "pending", "partially_completed", "requires_action",
     * "completed", "failed". Value enum: "not_selected", "pending", "partially_completed",
     * "requires_action", "completed", "failed". anyOf[1] (Value): Array of string. minItems: 1. []
     * enum: "not_selected", "pending", "partially_completed", "requires_action", "completed",
     * "failed". anyOf[1][] (Value): string. Value enum: "not_selected", "pending",
     * "partially_completed", "requires_action", "completed", "failed". anyOf[2] (Value): string.
     * Value enum: "not_selected", "pending", "partially_completed", "requires_action",
     * "completed", "failed".
     */
    "resolution_status"?: InputValue<("not_selected" | "pending" | "partially_completed" | "requires_action" | "completed" | "failed")
        | readonly ("not_selected" | "pending" | "partially_completed" | "requires_action" | "completed" | "failed")[]>;
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
    /**
     * Filter by return reason id. pattern: ^rrsn_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "rrsn_01KEZF7C00SEE2T4EYP1NXAH3E".
     */
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
/** The request body for: Reveal a license key. */
export type RevealLicenseKeyRequestInput = {};
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
    /**
     * Optional risk list version last read by the caller. Format: uint64. minimum: 1. maximum:
     * 9007199254740991.
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
