<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<BuyerAction> $buyer_actions
 * @property-read ?string $canceled_at
 * @property-read ?ReturnActor $canceled_by
 * @property-read ?string $cancellation_reason
 * @property-read ?string $cancellation_reason_message
 * @property-read ?string $completed_at
 * @property-read ?ReturnActor $completed_by
 * @property-read list<ReturnCompletionBlocker> $completion_blockers
 * @property-read ?string $completion_mode
 * @property-read ?string $completion_reason
 * @property-read ?string $completion_reason_message
 * @property-read string $created_at
 * @property-read ExpandedCustomerSummary|null $customer
 * @property-read ?string $customer_id
 * @property-read ?string $decision_at
 * @property-read string $decision_status
 * @property-read ?string $external_reference_id
 * @property-read ReturnFinancialSummary $financial_summary
 * @property-read list<ReturnHandoffRequirement> $handoff_requirements
 * @property-read string $initiated_by
 * @property-read list<ReturnLineItem> $line_items
 * @property-read string $merchandise_status
 * @property-read array<array-key, string> $metadata
 * @property-read ExpandedOrderSummary|null $order
 * @property-read string $order_id
 * @property-read ?ReturnPolicyEvaluation $policy_evaluation
 * @property-read string $resolution_status
 * @property-read list<string> $return_disposition_ids
 * @property-read ?list<ReturnDisposition> $return_dispositions
 * @property-read string $return_id
 * @property-read list<string> $return_inspection_ids
 * @property-read ?list<ReturnInspection> $return_inspections
 * @property-read string $return_number
 * @property-read list<string> $return_receipt_ids
 * @property-read ?list<ReturnReceipt> $return_receipts
 * @property-read list<string> $return_resolution_ids
 * @property-read ?list<ReturnResolution> $return_resolutions
 * @property-read list<string> $shipment_ids
 * @property-read ?list<ExpandedShipmentSummary> $shipments
 * @property-read string $status
 * @property-read list<string> $supported_actions
 * @property-read string $updated_at
 * @property-read int $version
 * Presence-aware response; omitted optional fields return null. */
final class ReturnCreatedMerchantEventDataObject extends Model {
    /** @param array{'buyer_actions': list<mixed>, 'canceled_at'?: string, 'canceled_by'?: mixed, 'cancellation_reason'?: string, 'cancellation_reason_message'?: string, 'completed_at'?: string, 'completed_by'?: mixed, 'completion_blockers': list<mixed>, 'completion_mode'?: string, 'completion_reason'?: string, 'completion_reason_message'?: string, 'created_at': string, 'customer'?: mixed, 'customer_id'?: string, 'decision_at'?: string, 'decision_status': string, 'external_reference_id'?: string, 'financial_summary': mixed, 'handoff_requirements': list<mixed>, 'initiated_by': string, 'line_items': list<mixed>, 'merchandise_status': string, 'metadata': mixed, 'order'?: mixed, 'order_id': string, 'policy_evaluation'?: mixed, 'resolution_status': string, 'return_disposition_ids': list<string>, 'return_dispositions'?: list<mixed>, 'return_id': string, 'return_inspection_ids': list<string>, 'return_inspections'?: list<mixed>, 'return_number': string, 'return_receipt_ids': list<string>, 'return_receipts'?: list<mixed>, 'return_resolution_ids': list<string>, 'return_resolutions'?: list<mixed>, 'shipment_ids': list<string>, 'shipments'?: list<mixed>, 'status': string, 'supported_actions': list<string>, 'updated_at': string, 'version': int, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnCreatedMerchantEventDataObject')); }
    /** What the buyer can do with the return, in this order: withdraw, ship_items, then pay_balance. A buyer's read or change through a customer session on /v1/me, or in Flint's buyer account, lists all three every time; merchant reads and webhooks get an empty list. ship_items is required while handoff_requirements is not empty, due by the earliest expires_at there. pay_balance is required while a resolution waits for the buyer's payment. [] (Value): {@see BuyerAction}. One thing a buyer can do with an order, subscription, invoice or return they read through /v1/me. Show the actions with is_required as what needs the buyer's attention, and the first available action as the primary action on the resource's page in your account.
     * @return list<BuyerAction>
     */
    public function getBuyerActions(): array { return $this->get('buyer_actions'); }
    public function hasBuyerActions(): bool { return $this->has('buyer_actions'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return ?string
     */
    public function getCanceledAt(): ?string { return $this->get('canceled_at'); }
    public function hasCanceledAt(): bool { return $this->has('canceled_at'); }
    /** Who performed a return action: a buyer, merchant, integration, or the system, with an optional ID.
     * @return ?ReturnActor
     */
    public function getCanceledBy(): ?ReturnActor { return $this->get('canceled_by'); }
    public function hasCanceledBy(): bool { return $this->has('canceled_by'); }
    /** Value enum: "buyer_request", "merchant_request", "duplicate", "expired", "created_in_error", "other".
     * @return ?string
     */
    public function getCancellationReason(): ?string { return $this->get('cancellation_reason'); }
    public function hasCancellationReason(): bool { return $this->has('cancellation_reason'); }
    /** cancellation_reason_message
     * @return ?string
     */
    public function getCancellationReasonMessage(): ?string { return $this->get('cancellation_reason_message'); }
    public function hasCancellationReasonMessage(): bool { return $this->has('cancellation_reason_message'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return ?string
     */
    public function getCompletedAt(): ?string { return $this->get('completed_at'); }
    public function hasCompletedAt(): bool { return $this->has('completed_at'); }
    /** Who performed a return action: a buyer, merchant, integration, or the system, with an optional ID.
     * @return ?ReturnActor
     */
    public function getCompletedBy(): ?ReturnActor { return $this->get('completed_by'); }
    public function hasCompletedBy(): bool { return $this->has('completed_by'); }
    /**  [] (Value): {@see ReturnCompletionBlocker}. Something still owed before a return can complete, with the return line or record it concerns.
     * @return list<ReturnCompletionBlocker>
     */
    public function getCompletionBlockers(): array { return $this->get('completion_blockers'); }
    public function hasCompletionBlockers(): bool { return $this->has('completion_blockers'); }
    /** automatic completes the Return when the last completion blocker clears; manual waits for POST /v1/returns/{return_id}/complete. Reopening a Return sets it to manual. Value enum: "manual", "automatic".
     * @return ?string
     */
    public function getCompletionMode(): ?string { return $this->get('completion_mode'); }
    public function hasCompletionMode(): bool { return $this->has('completion_mode'); }
    /** Value enum: "manual_completion", "exception_waived", "other".
     * @return ?string
     */
    public function getCompletionReason(): ?string { return $this->get('completion_reason'); }
    public function hasCompletionReason(): bool { return $this->has('completion_reason'); }
    /** completion_reason_message
     * @return ?string
     */
    public function getCompletionReasonMessage(): ?string { return $this->get('completion_reason_message'); }
    public function hasCompletionReasonMessage(): bool { return $this->has('completion_reason_message'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string
     */
    public function getCreatedAt(): string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Present only when `expand` includes `customer`; `null` when expanded and there is no related customer. anyOf[1] (Value): {@see ExpandedCustomerSummary}. A customer's summary fields, returned in place of a customer ID when the customer is expanded. anyOf[2] (Value): null.
     * @return ExpandedCustomerSummary|null
     */
    public function getCustomer(): ExpandedCustomerSummary|null { return $this->get('customer'); }
    public function hasCustomer(): bool { return $this->has('customer'); }
    /** customer_id
     * @return ?string
     */
    public function getCustomerId(): ?string { return $this->get('customer_id'); }
    public function hasCustomerId(): bool { return $this->has('customer_id'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return ?string
     */
    public function getDecisionAt(): ?string { return $this->get('decision_at'); }
    public function hasDecisionAt(): bool { return $this->has('decision_at'); }
    /** Value enum: "pending", "approved", "partially_approved", "declined".
     * @return string
     */
    public function getDecisionStatus(): string { return $this->get('decision_status'); }
    public function hasDecisionStatus(): bool { return $this->has('decision_status'); }
    /** Caller-owned identifier for this resource in an external system. maxLength: 255.
     * @return ?string
     */
    public function getExternalReferenceId(): ?string { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** The money for a return: returned value, deductions, credits, replacement total, and amounts due to or from the buyer.
     * @return ReturnFinancialSummary
     */
    public function getFinancialSummary(): ReturnFinancialSummary { return $this->get('financial_summary'); }
    public function hasFinancialSummary(): bool { return $this->has('financial_summary'); }
    /**  [] (Value): {@see ReturnHandoffRequirement}. What the buyer must do to hand merchandise back: the destination, instructions, line items, and expiry.
     * @return list<ReturnHandoffRequirement>
     */
    public function getHandoffRequirements(): array { return $this->get('handoff_requirements'); }
    public function hasHandoffRequirements(): bool { return $this->has('handoff_requirements'); }
    /** Who created the Return, from the credential that sent the request: buyer for a customer session on /v1/me or Flint's hosted account, merchant for a Dashboard user, integration for an API key or partner app. It cannot be sent. Value enum: "buyer", "merchant", "integration".
     * @return string
     */
    public function getInitiatedBy(): string { return $this->get('initiated_by'); }
    public function hasInitiatedBy(): bool { return $this->has('initiated_by'); }
    /**  [] (Value): {@see ReturnLineItem}. An item included in a return request.
     * @return list<ReturnLineItem>
     */
    public function getLineItems(): array { return $this->get('line_items'); }
    public function hasLineItems(): bool { return $this->has('line_items'); }
    /** On the Return, the least-finished line's value. Value enum: "not_required", "awaiting_handoff", "in_transit", "partially_received", "inspection_required", "partially_inspected", "inspection_review_required", "disposition_required", "resolved", "exception".
     * @return string
     */
    public function getMerchandiseStatus(): string { return $this->get('merchandise_status'); }
    public function hasMerchandiseStatus(): bool { return $this->has('merchandise_status'); }
    /** Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them.
     * @return array<array-key, string>
     */
    public function getMetadata(): array { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** Present only when `expand` includes `order`; `null` when expanded and there is no related order. anyOf[1] (Value): {@see ExpandedOrderSummary}. An order's summary fields, including status, payment and refund status, and pricing and settlement amounts, returned when the order is expanded. anyOf[2] (Value): null.
     * @return ExpandedOrderSummary|null
     */
    public function getOrder(): ExpandedOrderSummary|null { return $this->get('order'); }
    public function hasOrder(): bool { return $this->has('order'); }
    /** order_id
     * @return string
     */
    public function getOrderId(): string { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** How a return policy evaluated a return request: overall status and reason, the policy revision used, and per-line results.
     * @return ?ReturnPolicyEvaluation
     */
    public function getPolicyEvaluation(): ?ReturnPolicyEvaluation { return $this->get('policy_evaluation'); }
    public function hasPolicyEvaluation(): bool { return $this->has('policy_evaluation'); }
    /** Value enum: "not_selected", "pending", "partially_fulfilled", "requires_action", "fulfilled", "failed".
     * @return string
     */
    public function getResolutionStatus(): string { return $this->get('resolution_status'); }
    public function hasResolutionStatus(): bool { return $this->has('resolution_status'); }
    /** IDs of every disposition recorded for this Return, oldest first, including failed and canceled dispositions. Expand `return_dispositions` on `GET /v1/returns/{return_id}` to read them inline. [] (Value): string.
     * @return list<string>
     */
    public function getReturnDispositionIds(): array { return $this->get('return_disposition_ids'); }
    public function hasReturnDispositionIds(): bool { return $this->has('return_disposition_ids'); }
    /**  [] (Value): {@see ReturnDisposition}. A decision about how returned merchandise will be handled.
     * @return ?list<ReturnDisposition>
     */
    public function getReturnDispositions(): ?array { return $this->get('return_dispositions'); }
    public function hasReturnDispositions(): bool { return $this->has('return_dispositions'); }
    /** return_id
     * @return string
     */
    public function getReturnId(): string { return $this->get('return_id'); }
    public function hasReturnId(): bool { return $this->has('return_id'); }
    /** IDs of every inspection recorded for this Return, oldest first, including superseded inspections. Expand `return_inspections` on `GET /v1/returns/{return_id}` to read them inline. [] (Value): string.
     * @return list<string>
     */
    public function getReturnInspectionIds(): array { return $this->get('return_inspection_ids'); }
    public function hasReturnInspectionIds(): bool { return $this->has('return_inspection_ids'); }
    /**  [] (Value): {@see ReturnInspection}. An assessment of the condition of returned items.
     * @return ?list<ReturnInspection>
     */
    public function getReturnInspections(): ?array { return $this->get('return_inspections'); }
    public function hasReturnInspections(): bool { return $this->has('return_inspections'); }
    /** return_number
     * @return string
     */
    public function getReturnNumber(): string { return $this->get('return_number'); }
    public function hasReturnNumber(): bool { return $this->has('return_number'); }
    /** IDs of every receipt recorded for this Return, oldest first, including superseded receipts. Expand `return_receipts` on `GET /v1/returns/{return_id}` to read them inline. [] (Value): string.
     * @return list<string>
     */
    public function getReturnReceiptIds(): array { return $this->get('return_receipt_ids'); }
    public function hasReturnReceiptIds(): bool { return $this->has('return_receipt_ids'); }
    /**  [] (Value): {@see ReturnReceipt}. A record of returned items arriving at a location.
     * @return ?list<ReturnReceipt>
     */
    public function getReturnReceipts(): ?array { return $this->get('return_receipts'); }
    public function hasReturnReceipts(): bool { return $this->has('return_receipts'); }
    /** IDs of every resolution created for this Return, oldest first, including failed and canceled resolutions. Expand `return_resolutions` on `GET /v1/returns/{return_id}` to read them inline. [] (Value): string.
     * @return list<string>
     */
    public function getReturnResolutionIds(): array { return $this->get('return_resolution_ids'); }
    public function hasReturnResolutionIds(): bool { return $this->has('return_resolution_ids'); }
    /**  [] (Value): {@see ReturnResolution}. The refund, exchange, or other outcome of a return.
     * @return ?list<ReturnResolution>
     */
    public function getReturnResolutions(): ?array { return $this->get('return_resolutions'); }
    public function hasReturnResolutions(): bool { return $this->has('return_resolutions'); }
    /** IDs of every shipment raised to send this Return's items back, oldest first, including voided shipments. Expand `shipments` on `GET /v1/returns/{return_id}` to read them inline. [] (Value): string.
     * @return list<string>
     */
    public function getShipmentIds(): array { return $this->get('shipment_ids'); }
    public function hasShipmentIds(): bool { return $this->has('shipment_ids'); }
    /**  [] (Value): {@see ExpandedShipmentSummary}. A shipment's summary fields, including direction, status, and package count, returned when the shipment is expanded.
     * @return ?list<ExpandedShipmentSummary>
     */
    public function getShipments(): ?array { return $this->get('shipments'); }
    public function hasShipments(): bool { return $this->has('shipments'); }
    /** Value enum: "requested", "open", "completed", "declined", "canceled".
     * @return string
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** [] enum: "cancel", "complete", "decide", "reopen". [] (Value): string.  Value enum: "cancel", "complete", "decide", "reopen".
     * @return list<string>
     */
    public function getSupportedActions(): array { return $this->get('supported_actions'); }
    public function hasSupportedActions(): bool { return $this->has('supported_actions'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string
     */
    public function getUpdatedAt(): string { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Format: int64. minimum: 0.
     * @return int
     */
    public function getVersion(): int { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
