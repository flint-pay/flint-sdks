<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $canceled_at
 * @property-read ReturnActorPreviousAttributes|null $canceled_by
 * @property-read string|null $cancellation_reason
 * @property-read string|null $cancellation_reason_message
 * @property-read string|null $completed_at
 * @property-read ReturnActorPreviousAttributes|null $completed_by
 * @property-read list<ReturnCompletionBlockerPreviousAttributes>|null $completion_blockers
 * @property-read string|null $completion_mode
 * @property-read string|null $completion_reason
 * @property-read string|null $completion_reason_message
 * @property-read string|null $created_at
 * @property-read ExpandedCustomerSummaryPreviousAttributes|null $customer
 * @property-read string|null $customer_id
 * @property-read string|null $decision_at
 * @property-read string|null $decision_status
 * @property-read string|null $external_reference_id
 * @property-read ReturnFinancialSummaryPreviousAttributes|null $financial_summary
 * @property-read list<ReturnHandoffRequirementPreviousAttributes>|null $handoff_requirements
 * @property-read string|null $idempotency_key
 * @property-read string|null $initiated_by
 * @property-read list<ReturnLineItemPreviousAttributes>|null $line_items
 * @property-read string|null $merchandise_status
 * @property-read array<array-key, string>|null $metadata
 * @property-read ExpandedOrderSummaryPreviousAttributes|null $order
 * @property-read string|null $order_id
 * @property-read ReturnPolicyEvaluationPreviousAttributes|null $policy_evaluation
 * @property-read string|null $resolution_status
 * @property-read list<string>|null $return_disposition_ids
 * @property-read list<ReturnDispositionPreviousAttributes>|null $return_dispositions
 * @property-read string|null $return_id
 * @property-read list<string>|null $return_inspection_ids
 * @property-read list<ReturnInspectionPreviousAttributes>|null $return_inspections
 * @property-read string|null $return_number
 * @property-read list<string>|null $return_receipt_ids
 * @property-read list<ReturnReceiptPreviousAttributes>|null $return_receipts
 * @property-read list<string>|null $return_resolution_ids
 * @property-read list<ReturnResolutionPreviousAttributes>|null $return_resolutions
 * @property-read list<string>|null $shipment_ids
 * @property-read list<ExpandedShipmentSummaryPreviousAttributes>|null $shipments
 * @property-read string|null $status
 * @property-read list<string>|null $supported_actions
 * @property-read string|null $updated_at
 * @property-read int|null $version
 * Presence-aware response; omitted optional fields return null. */
final class ReturnCanceledMerchantEventDataPreviousAttributes extends Model {
    /** @param array{'canceled_at'?: mixed, 'canceled_by'?: mixed, 'cancellation_reason'?: mixed, 'cancellation_reason_message'?: mixed, 'completed_at'?: mixed, 'completed_by'?: mixed, 'completion_blockers'?: mixed, 'completion_mode'?: mixed, 'completion_reason'?: mixed, 'completion_reason_message'?: mixed, 'created_at'?: mixed, 'customer'?: mixed, 'customer_id'?: mixed, 'decision_at'?: mixed, 'decision_status'?: mixed, 'external_reference_id'?: mixed, 'financial_summary'?: mixed, 'handoff_requirements'?: mixed, 'idempotency_key'?: mixed, 'initiated_by'?: mixed, 'line_items'?: mixed, 'merchandise_status'?: mixed, 'metadata'?: mixed, 'order'?: mixed, 'order_id'?: mixed, 'policy_evaluation'?: mixed, 'resolution_status'?: mixed, 'return_disposition_ids'?: mixed, 'return_dispositions'?: mixed, 'return_id'?: mixed, 'return_inspection_ids'?: mixed, 'return_inspections'?: mixed, 'return_number'?: mixed, 'return_receipt_ids'?: mixed, 'return_receipts'?: mixed, 'return_resolution_ids'?: mixed, 'return_resolutions'?: mixed, 'shipment_ids'?: mixed, 'shipments'?: mixed, 'status'?: mixed, 'supported_actions'?: mixed, 'updated_at'?: mixed, 'version'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnCanceledMerchantEventDataPreviousAttributes')); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCanceledAt(): string|null { return $this->get('canceled_at'); }
    public function hasCanceledAt(): bool { return $this->has('canceled_at'); }
    /** Who canceled the Return. anyOf[1] (Value): {@see ReturnActorPreviousAttributes}. anyOf[2] (Value): null.
     * @return ReturnActorPreviousAttributes|null
     */
    public function getCanceledBy(): ReturnActorPreviousAttributes|null { return $this->get('canceled_by'); }
    public function hasCanceledBy(): bool { return $this->has('canceled_by'); }
    /** Why the Return was canceled. Value enum: "buyer_request", "merchant_request", "duplicate", "expired", "created_in_error", "other". anyOf[1] (Value): string. Why the Return was canceled. Value enum: "buyer_request", "merchant_request", "duplicate", "expired", "created_in_error", "other". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCancellationReason(): string|null { return $this->get('cancellation_reason'); }
    public function hasCancellationReason(): bool { return $this->has('cancellation_reason'); }
    /** Detail sent with the cancellation. Merchant reads only. anyOf[1] (Value): string. Detail sent with the cancellation. Merchant reads only. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCancellationReasonMessage(): string|null { return $this->get('cancellation_reason_message'); }
    public function hasCancellationReasonMessage(): bool { return $this->has('cancellation_reason_message'); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCompletedAt(): string|null { return $this->get('completed_at'); }
    public function hasCompletedAt(): bool { return $this->has('completed_at'); }
    /** Who completed the Return. `system` when Flint completed it automatically. anyOf[1] (Value): {@see ReturnActorPreviousAttributes}. anyOf[2] (Value): null.
     * @return ReturnActorPreviousAttributes|null
     */
    public function getCompletedBy(): ReturnActorPreviousAttributes|null { return $this->get('completed_by'); }
    public function hasCompletedBy(): bool { return $this->has('completed_by'); }
    /** What is still owed before the Return can complete. Empty when nothing is. anyOf[1] (Value): Array of {@see ReturnCompletionBlockerPreviousAttributes}. What is still owed before the Return can complete. Empty when nothing is. anyOf[1][] (Value): {@see ReturnCompletionBlockerPreviousAttributes}. anyOf[2] (Value): null.
     * @return list<ReturnCompletionBlockerPreviousAttributes>|null
     */
    public function getCompletionBlockers(): array|null { return $this->get('completion_blockers'); }
    public function hasCompletionBlockers(): bool { return $this->has('completion_blockers'); }
    /** automatic completes the Return when the last completion blocker clears; manual waits for POST /v1/returns/{return_id}/complete. Reopening a Return sets it to manual. Value enum: "manual", "automatic". anyOf[1] (Value): string. automatic completes the Return when the last completion blocker clears; manual waits for POST /v1/returns/{return_id}/complete. Reopening a Return sets it to manual. Value enum: "manual", "automatic". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCompletionMode(): string|null { return $this->get('completion_mode'); }
    public function hasCompletionMode(): bool { return $this->has('completion_mode'); }
    /** Why the Return was completed by hand. Absent when Flint completed it automatically. Value enum: "manual_completion", "exception_waived", "other". anyOf[1] (Value): string. Why the Return was completed by hand. Absent when Flint completed it automatically. Value enum: "manual_completion", "exception_waived", "other". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCompletionReason(): string|null { return $this->get('completion_reason'); }
    public function hasCompletionReason(): bool { return $this->has('completion_reason'); }
    /** Detail sent when the Return was completed by hand. anyOf[1] (Value): string. Detail sent when the Return was completed by hand. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCompletionReasonMessage(): string|null { return $this->get('completion_reason_message'); }
    public function hasCompletionReasonMessage(): bool { return $this->has('completion_reason_message'); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCreatedAt(): string|null { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Present only when `expand` includes `customer`; `null` when expanded and there is no related customer. anyOf[1] (Value): {@see ExpandedCustomerSummaryPreviousAttributes}. anyOf[2] (Value): null.
     * @return ExpandedCustomerSummaryPreviousAttributes|null
     */
    public function getCustomer(): ExpandedCustomerSummaryPreviousAttributes|null { return $this->get('customer'); }
    public function hasCustomer(): bool { return $this->has('customer'); }
    /** The customer the Return belongs to. anyOf[1] (Value): string. The customer the Return belongs to. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCustomerId(): string|null { return $this->get('customer_id'); }
    public function hasCustomerId(): bool { return $this->has('customer_id'); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getDecisionAt(): string|null { return $this->get('decision_at'); }
    public function hasDecisionAt(): bool { return $this->has('decision_at'); }
    /** Whether the requested units were approved. `pending` until one decision covers every line. Value enum: "pending", "approved", "partially_approved", "declined". anyOf[1] (Value): string. Whether the requested units were approved. `pending` until one decision covers every line. Value enum: "pending", "approved", "partially_approved", "declined". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getDecisionStatus(): string|null { return $this->get('decision_status'); }
    public function hasDecisionStatus(): bool { return $this->has('decision_status'); }
    /** Caller-owned identifier for this resource in an external system. anyOf[1] (Value): string. Caller-owned identifier for this resource in an external system. maxLength: 255. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getExternalReferenceId(): string|null { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** The Return's money in one place: the value of the returned lines, deductions and credits, and what has been refunded or collected. anyOf[1] (Value): {@see ReturnFinancialSummaryPreviousAttributes}. anyOf[2] (Value): null.
     * @return ReturnFinancialSummaryPreviousAttributes|null
     */
    public function getFinancialSummary(): ReturnFinancialSummaryPreviousAttributes|null { return $this->get('financial_summary'); }
    public function hasFinancialSummary(): bool { return $this->has('financial_summary'); }
    /** What the buyer still has to send back and where. Each entry leaves the list once it is satisfied, so an empty list means nothing is waiting on the buyer. anyOf[1] (Value): Array of {@see ReturnHandoffRequirementPreviousAttributes}. What the buyer still has to send back and where. Each entry leaves the list once it is satisfied, so an empty list means nothing is waiting on the buyer. anyOf[1][] (Value): {@see ReturnHandoffRequirementPreviousAttributes}. anyOf[2] (Value): null.
     * @return list<ReturnHandoffRequirementPreviousAttributes>|null
     */
    public function getHandoffRequirements(): array|null { return $this->get('handoff_requirements'); }
    public function hasHandoffRequirements(): bool { return $this->has('handoff_requirements'); }
    /** The Idempotency-Key of the request that created this resource. `null` when that request sent no key, Flint created the resource, the reader isn't the caller that created it (another app install, a buyer, or the merchant reading an app's or buyer's record), or the caller that created an older record is unknown. Filter its list with `idempotency_key` to find it. Recorded payloads, including replayed responses and webhook events, can return `null`. To find a key that a replay returns as `null`, read the resource. Buyer routes return only keys from the buyer's namespace. anyOf[1] (Value): string. The Idempotency-Key of the request that created this resource. `null` when that request sent no key, Flint created the resource, the reader isn't the caller that created it (another app install, a buyer, or the merchant reading an app's or buyer's record), or the caller that created an older record is unknown. Filter its list with `idempotency_key` to find it. Recorded payloads, including replayed responses and webhook events, can return `null`. To find a key that a replay returns as `null`, read the resource. Buyer routes return only keys from the buyer's namespace. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getIdempotencyKey(): string|null { return $this->get('idempotency_key'); }
    public function hasIdempotencyKey(): bool { return $this->has('idempotency_key'); }
    /** Who created the Return: buyer for a customer session on /v1/me or Flint's hosted account, merchant for a Dashboard user, integration for an API key or partner app, or system for Flint automation. It cannot be sent. Value enum: "buyer", "merchant", "integration", "system". anyOf[1] (Value): string. Who created the Return: buyer for a customer session on /v1/me or Flint's hosted account, merchant for a Dashboard user, integration for an API key or partner app, or system for Flint automation. It cannot be sent. Value enum: "buyer", "merchant", "integration", "system". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getInitiatedBy(): string|null { return $this->get('initiated_by'); }
    public function hasInitiatedBy(): bool { return $this->has('initiated_by'); }
    /** The lines being returned. anyOf[1] (Value): Array of {@see ReturnLineItemPreviousAttributes}. The lines being returned. anyOf[1][] (Value): {@see ReturnLineItemPreviousAttributes}. anyOf[2] (Value): null.
     * @return list<ReturnLineItemPreviousAttributes>|null
     */
    public function getLineItems(): array|null { return $this->get('line_items'); }
    public function hasLineItems(): bool { return $this->has('line_items'); }
    /** On the Return, the least-finished line's value. Value enum: "not_required", "awaiting_handoff", "in_transit", "partially_received", "inspection_required", "partially_inspected", "inspection_review_required", "disposition_required", "resolved", "exception". anyOf[1] (Value): string. On the Return, the least-finished line's value. Value enum: "not_required", "awaiting_handoff", "in_transit", "partially_received", "inspection_required", "partially_inspected", "inspection_review_required", "disposition_required", "resolved", "exception". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getMerchandiseStatus(): string|null { return $this->get('merchandise_status'); }
    public function hasMerchandiseStatus(): bool { return $this->has('merchandise_status'); }
    /** Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules. anyOf[1] (Value): {@see MetadataMapPreviousAttributes}. anyOf[2] (Value): null.
     * @return array<array-key, string>|null
     */
    public function getMetadata(): array|null { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** Present only when `expand` includes `order`; `null` when expanded and there is no related order. anyOf[1] (Value): {@see ExpandedOrderSummaryPreviousAttributes}. anyOf[2] (Value): null.
     * @return ExpandedOrderSummaryPreviousAttributes|null
     */
    public function getOrder(): ExpandedOrderSummaryPreviousAttributes|null { return $this->get('order'); }
    public function hasOrder(): bool { return $this->has('order'); }
    /** ID of the Order the Return is against. anyOf[1] (Value): string. ID of the Order the Return is against. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getOrderId(): string|null { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** How your return policies judged the request when the Return was created. anyOf[1] (Value): {@see ReturnPolicyEvaluationPreviousAttributes}. anyOf[2] (Value): null.
     * @return ReturnPolicyEvaluationPreviousAttributes|null
     */
    public function getPolicyEvaluation(): ReturnPolicyEvaluationPreviousAttributes|null { return $this->get('policy_evaluation'); }
    public function hasPolicyEvaluation(): bool { return $this->has('policy_evaluation'); }
    /** Whether the buyer has received the value they are owed. Combines the Return's resolutions and its unsettled corrections. Value enum: "not_selected", "pending", "partially_completed", "requires_action", "completed", "failed". anyOf[1] (Value): string. Whether the buyer has received the value they are owed. Combines the Return's resolutions and its unsettled corrections. Value enum: "not_selected", "pending", "partially_completed", "requires_action", "completed", "failed". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getResolutionStatus(): string|null { return $this->get('resolution_status'); }
    public function hasResolutionStatus(): bool { return $this->has('resolution_status'); }
    /** IDs of every disposition recorded for this Return, oldest first, including failed and canceled dispositions. Expand `return_dispositions` on `GET /v1/returns/{return_id}` to read them inline. anyOf[1] (Value): Array of string. IDs of every disposition recorded for this Return, oldest first, including failed and canceled dispositions. Expand `return_dispositions` on `GET /v1/returns/{return_id}` to read them inline. anyOf[1][] (Value): string. anyOf[2] (Value): null.
     * @return list<string>|null
     */
    public function getReturnDispositionIds(): array|null { return $this->get('return_disposition_ids'); }
    public function hasReturnDispositionIds(): bool { return $this->has('return_disposition_ids'); }
    /** Present only when `expand` includes `return_dispositions`. The dispositions in `return_disposition_ids`, in the same order. anyOf[1] (Value): Array of {@see ReturnDispositionPreviousAttributes}. Present only when `expand` includes `return_dispositions`. The dispositions in `return_disposition_ids`, in the same order. anyOf[1][] (Value): {@see ReturnDispositionPreviousAttributes}. anyOf[2] (Value): null.
     * @return list<ReturnDispositionPreviousAttributes>|null
     */
    public function getReturnDispositions(): array|null { return $this->get('return_dispositions'); }
    public function hasReturnDispositions(): bool { return $this->has('return_dispositions'); }
    /** Unique identifier for this return, prefixed `ret_`. anyOf[1] (Value): string. Unique identifier for this return, prefixed `ret_`. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getReturnId(): string|null { return $this->get('return_id'); }
    public function hasReturnId(): bool { return $this->has('return_id'); }
    /** IDs of every inspection recorded for this Return, oldest first, including superseded inspections. Expand `return_inspections` on `GET /v1/returns/{return_id}` to read them inline. anyOf[1] (Value): Array of string. IDs of every inspection recorded for this Return, oldest first, including superseded inspections. Expand `return_inspections` on `GET /v1/returns/{return_id}` to read them inline. anyOf[1][] (Value): string. anyOf[2] (Value): null.
     * @return list<string>|null
     */
    public function getReturnInspectionIds(): array|null { return $this->get('return_inspection_ids'); }
    public function hasReturnInspectionIds(): bool { return $this->has('return_inspection_ids'); }
    /** Present only when `expand` includes `return_inspections`. The inspections in `return_inspection_ids`, in the same order. anyOf[1] (Value): Array of {@see ReturnInspectionPreviousAttributes}. Present only when `expand` includes `return_inspections`. The inspections in `return_inspection_ids`, in the same order. anyOf[1][] (Value): {@see ReturnInspectionPreviousAttributes}. anyOf[2] (Value): null.
     * @return list<ReturnInspectionPreviousAttributes>|null
     */
    public function getReturnInspections(): array|null { return $this->get('return_inspections'); }
    public function hasReturnInspections(): bool { return $this->has('return_inspections'); }
    /** Human-readable number for the Return. anyOf[1] (Value): string. Human-readable number for the Return. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getReturnNumber(): string|null { return $this->get('return_number'); }
    public function hasReturnNumber(): bool { return $this->has('return_number'); }
    /** IDs of every receipt recorded for this Return, oldest first, including superseded receipts. Expand `return_receipts` on `GET /v1/returns/{return_id}` to read them inline. anyOf[1] (Value): Array of string. IDs of every receipt recorded for this Return, oldest first, including superseded receipts. Expand `return_receipts` on `GET /v1/returns/{return_id}` to read them inline. anyOf[1][] (Value): string. anyOf[2] (Value): null.
     * @return list<string>|null
     */
    public function getReturnReceiptIds(): array|null { return $this->get('return_receipt_ids'); }
    public function hasReturnReceiptIds(): bool { return $this->has('return_receipt_ids'); }
    /** Present only when `expand` includes `return_receipts`. The receipts in `return_receipt_ids`, in the same order. anyOf[1] (Value): Array of {@see ReturnReceiptPreviousAttributes}. Present only when `expand` includes `return_receipts`. The receipts in `return_receipt_ids`, in the same order. anyOf[1][] (Value): {@see ReturnReceiptPreviousAttributes}. anyOf[2] (Value): null.
     * @return list<ReturnReceiptPreviousAttributes>|null
     */
    public function getReturnReceipts(): array|null { return $this->get('return_receipts'); }
    public function hasReturnReceipts(): bool { return $this->has('return_receipts'); }
    /** IDs of every resolution created for this Return, oldest first, including failed and canceled resolutions. Expand `return_resolutions` on `GET /v1/returns/{return_id}` to read them inline. anyOf[1] (Value): Array of string. IDs of every resolution created for this Return, oldest first, including failed and canceled resolutions. Expand `return_resolutions` on `GET /v1/returns/{return_id}` to read them inline. anyOf[1][] (Value): string. anyOf[2] (Value): null.
     * @return list<string>|null
     */
    public function getReturnResolutionIds(): array|null { return $this->get('return_resolution_ids'); }
    public function hasReturnResolutionIds(): bool { return $this->has('return_resolution_ids'); }
    /** Present only when `expand` includes `return_resolutions`. The resolutions in `return_resolution_ids`, in the same order. anyOf[1] (Value): Array of {@see ReturnResolutionPreviousAttributes}. Present only when `expand` includes `return_resolutions`. The resolutions in `return_resolution_ids`, in the same order. anyOf[1][] (Value): {@see ReturnResolutionPreviousAttributes}. anyOf[2] (Value): null.
     * @return list<ReturnResolutionPreviousAttributes>|null
     */
    public function getReturnResolutions(): array|null { return $this->get('return_resolutions'); }
    public function hasReturnResolutions(): bool { return $this->has('return_resolutions'); }
    /** IDs of every shipment raised to send this Return's items back, oldest first, including voided shipments. Expand `shipments` on `GET /v1/returns/{return_id}` to read them inline. anyOf[1] (Value): Array of string. IDs of every shipment raised to send this Return's items back, oldest first, including voided shipments. Expand `shipments` on `GET /v1/returns/{return_id}` to read them inline. anyOf[1][] (Value): string. anyOf[2] (Value): null.
     * @return list<string>|null
     */
    public function getShipmentIds(): array|null { return $this->get('shipment_ids'); }
    public function hasShipmentIds(): bool { return $this->has('shipment_ids'); }
    /** Present only when `expand` includes `shipments`. Summaries of the shipments in `shipment_ids`, in the same order. anyOf[1] (Value): Array of {@see ExpandedShipmentSummaryPreviousAttributes}. Present only when `expand` includes `shipments`. Summaries of the shipments in `shipment_ids`, in the same order. anyOf[1][] (Value): {@see ExpandedShipmentSummaryPreviousAttributes}. anyOf[2] (Value): null.
     * @return list<ExpandedShipmentSummaryPreviousAttributes>|null
     */
    public function getShipments(): array|null { return $this->get('shipments'); }
    public function hasShipments(): bool { return $this->has('shipments'); }
    /** Where the whole Return stands. Read `decision_status`, `merchandise_status`, and `resolution_status` for the part you need. Value enum: "requested", "open", "completed", "declined", "canceled". anyOf[1] (Value): string. Where the whole Return stands. Read `decision_status`, `merchandise_status`, and `resolution_status` for the part you need. Value enum: "requested", "open", "completed", "declined", "canceled". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getStatus(): string|null { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Actions that can succeed now. Actions the API key or token doesn't have the scope for are left out. A Return waiting for a decision lists `decide` and `cancel`. An open Return lists `cancel` only while no units have been received, inspected, dispositioned, or resolved, and it has no current receipts or inspections, non-canceled dispositions or resolutions, or non-voided return shipments. It lists `complete` when `completion_mode` is `manual` and `completion_blockers` is empty. A completed Return lists `reopen`. A declined or canceled Return lists none. [] enum: "cancel", "complete", "decide", "process", "reopen". anyOf[1] (Value): Array of string. Actions that can succeed now. Actions the API key or token doesn't have the scope for are left out. A Return waiting for a decision lists `decide` and `cancel`. An open Return lists `cancel` only while no units have been received, inspected, dispositioned, or resolved, and it has no current receipts or inspections, non-canceled dispositions or resolutions, or non-voided return shipments. It lists `complete` when `completion_mode` is `manual` and `completion_blockers` is empty. A completed Return lists `reopen`. A declined or canceled Return lists none. [] enum: "cancel", "complete", "decide", "process", "reopen". anyOf[1][] (Value): string.  Value enum: "cancel", "complete", "decide", "process", "reopen". anyOf[2] (Value): null.
     * @return list<string>|null
     */
    public function getSupportedActions(): array|null { return $this->get('supported_actions'); }
    public function hasSupportedActions(): bool { return $this->has('supported_actions'); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getUpdatedAt(): string|null { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Goes up with every change to the Return. Each activity's `return_version` is the version that activity produced. A write that takes `expected_version` or `expected_return_version` for this Return compares it with this value. anyOf[1] (Value): integer. Goes up with every change to the Return. Each activity's `return_version` is the version that activity produced. A write that takes `expected_version` or `expected_return_version` for this Return compares it with this value. Format: int64. minimum: 0. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getVersion(): int|null { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
