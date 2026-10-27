<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<BuyerActionInput|array<array-key, mixed>|\stdClass> $buyer_actions
 * @property-read string|\DateTimeInterface $canceled_at
 * @property-read ReturnActorInput|array<array-key, mixed>|\stdClass $canceled_by
 * @property-read string $cancellation_reason
 * @property-read string $cancellation_reason_message
 * @property-read string|\DateTimeInterface $completed_at
 * @property-read ReturnActorInput|array<array-key, mixed>|\stdClass $completed_by
 * @property-read list<ReturnCompletionBlockerInput|array<array-key, mixed>|\stdClass> $completion_blockers
 * @property-read string $completion_mode
 * @property-read string $completion_reason
 * @property-read string $completion_reason_message
 * @property-read string|\DateTimeInterface $created_at
 * @property-read array{'created_at'?: string|\DateTimeInterface, 'customer_id': string, 'email': string|null, 'name': string|null, 'phone': string|null, 'status': string, 'updated_at'?: string|\DateTimeInterface, ...}|object|null $customer
 * @property-read string $customer_id
 * @property-read string|\DateTimeInterface $decision_at
 * @property-read string $decision_status
 * @property-read string $external_reference_id
 * @property-read ReturnFinancialSummaryInput|array<array-key, mixed>|\stdClass $financial_summary
 * @property-read list<ReturnHandoffRequirementInput|array<array-key, mixed>|\stdClass> $handoff_requirements
 * @property-read string $initiated_by
 * @property-read list<ReturnLineItemInput|array<array-key, mixed>|\stdClass> $line_items
 * @property-read string $merchandise_status
 * @property-read array<array-key, string>|\stdClass $metadata
 * @property-read array{'buyer_contact'?: CheckoutBuyerContactInput|array<array-key, mixed>|\stdClass, 'closed_at'?: string|\DateTimeInterface, 'closed_reason'?: string, 'created_at'?: string|\DateTimeInterface, 'customer_id'?: string, 'fulfillment_status'?: string, 'order_id': string, 'order_number'?: string, 'payment_intent_ids'?: list<string>, 'payment_status': string, 'pricing_amounts': PricingAmountsInput|array<array-key, mixed>|\stdClass, 'refund_status': string, 'settlement_amounts': SettlementAmountsInput|array<array-key, mixed>|\stdClass, 'status': string, 'updated_at'?: string|\DateTimeInterface, ...}|object|null $order
 * @property-read string $order_id
 * @property-read ReturnPolicyEvaluationInput|array<array-key, mixed>|\stdClass $policy_evaluation
 * @property-read string $resolution_status
 * @property-read list<string> $return_disposition_ids
 * @property-read list<ReturnDispositionInput|array<array-key, mixed>|\stdClass> $return_dispositions
 * @property-read string $return_id
 * @property-read list<string> $return_inspection_ids
 * @property-read list<ReturnInspectionInput|array<array-key, mixed>|\stdClass> $return_inspections
 * @property-read string $return_number
 * @property-read list<string> $return_receipt_ids
 * @property-read list<ReturnReceiptInput|array<array-key, mixed>|\stdClass> $return_receipts
 * @property-read list<string> $return_resolution_ids
 * @property-read list<ReturnResolutionInput|array<array-key, mixed>|\stdClass> $return_resolutions
 * @property-read list<string> $shipment_ids
 * @property-read list<ExpandedShipmentSummaryInput|array<array-key, mixed>|\stdClass> $shipments
 * @property-read string $status
 * @property-read list<string> $supported_actions
 * @property-read string|\DateTimeInterface $updated_at
 * @property-read string $version
 * Presence-aware input; omitted fields throw when accessed. */
final class ReturnResourceInput extends Model {
    /** @param array{'buyer_actions': list<BuyerActionInput|array<array-key, mixed>|\stdClass>, 'canceled_at'?: string|\DateTimeInterface, 'canceled_by'?: ReturnActorInput|array<array-key, mixed>|\stdClass, 'cancellation_reason'?: string, 'cancellation_reason_message'?: string, 'completed_at'?: string|\DateTimeInterface, 'completed_by'?: ReturnActorInput|array<array-key, mixed>|\stdClass, 'completion_blockers': list<ReturnCompletionBlockerInput|array<array-key, mixed>|\stdClass>, 'completion_mode'?: string, 'completion_reason'?: string, 'completion_reason_message'?: string, 'created_at': string|\DateTimeInterface, 'customer'?: array{'created_at'?: string|\DateTimeInterface, 'customer_id': string, 'email': string|null, 'name': string|null, 'phone': string|null, 'status': string, 'updated_at'?: string|\DateTimeInterface, ...}|object|null, 'customer_id'?: string, 'decision_at'?: string|\DateTimeInterface, 'decision_status': string, 'external_reference_id'?: string, 'financial_summary': ReturnFinancialSummaryInput|array<array-key, mixed>|\stdClass, 'handoff_requirements': list<ReturnHandoffRequirementInput|array<array-key, mixed>|\stdClass>, 'initiated_by': string, 'line_items': list<ReturnLineItemInput|array<array-key, mixed>|\stdClass>, 'merchandise_status': string, 'metadata': array<array-key, string>|\stdClass, 'order'?: array{'buyer_contact'?: CheckoutBuyerContactInput|array<array-key, mixed>|\stdClass, 'closed_at'?: string|\DateTimeInterface, 'closed_reason'?: string, 'created_at'?: string|\DateTimeInterface, 'customer_id'?: string, 'fulfillment_status'?: string, 'order_id': string, 'order_number'?: string, 'payment_intent_ids'?: list<string>, 'payment_status': string, 'pricing_amounts': PricingAmountsInput|array<array-key, mixed>|\stdClass, 'refund_status': string, 'settlement_amounts': SettlementAmountsInput|array<array-key, mixed>|\stdClass, 'status': string, 'updated_at'?: string|\DateTimeInterface, ...}|object|null, 'order_id': string, 'policy_evaluation'?: ReturnPolicyEvaluationInput|array<array-key, mixed>|\stdClass, 'resolution_status': string, 'return_disposition_ids': list<string>, 'return_dispositions'?: list<ReturnDispositionInput|array<array-key, mixed>|\stdClass>, 'return_id': string, 'return_inspection_ids': list<string>, 'return_inspections'?: list<ReturnInspectionInput|array<array-key, mixed>|\stdClass>, 'return_number': string, 'return_receipt_ids': list<string>, 'return_receipts'?: list<ReturnReceiptInput|array<array-key, mixed>|\stdClass>, 'return_resolution_ids': list<string>, 'return_resolutions'?: list<ReturnResolutionInput|array<array-key, mixed>|\stdClass>, 'shipment_ids': list<string>, 'shipments'?: list<ExpandedShipmentSummaryInput|array<array-key, mixed>|\stdClass>, 'status': string, 'supported_actions': list<string>, 'updated_at': string|\DateTimeInterface, 'version': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnResourceInput')); }
    /** Shape $ (Value): Array of {@see BuyerActionInput}. What the buyer can do with the return, in this order: withdraw, ship_items, then pay_balance. A buyer's read or change through a customer session on /v1/me, or in Flint's buyer account, lists all three every time; merchant reads and webhooks get an empty list. ship_items is required while handoff_requirements is not empty, due by the earliest expires_at there. pay_balance is required while a resolution waits for the buyer's payment. Example: []. Shape $[] (Value): {@see BuyerActionInput}. One thing a buyer can do with an order, subscription, invoice or return they read through /v1/me. Show the actions with is_required as what needs the buyer's attention, and the first available action as the primary action on the resource's page in your account.
     * @return list<BuyerActionInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When buyer_actions is omitted; use hasBuyerActions() or valueOrDefault().
     */
    public function getBuyerActions(): array { return $this->get('buyer_actions'); }
    public function hasBuyerActions(): bool { return $this->has('buyer_actions'); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When canceled_at is omitted; use hasCanceledAt() or valueOrDefault().
     */
    public function getCanceledAt(): string|\DateTimeInterface { return $this->get('canceled_at'); }
    public function hasCanceledAt(): bool { return $this->has('canceled_at'); }
    /** Shape $ (Value): {@see ReturnActorInput}. Who performed a return action: a buyer, merchant, integration, or the system, with an optional ID.
     * @return ReturnActorInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When canceled_by is omitted; use hasCanceledBy() or valueOrDefault().
     */
    public function getCanceledBy(): mixed { return $this->get('canceled_by'); }
    public function hasCanceledBy(): bool { return $this->has('canceled_by'); }
    /** Shape $ (Value): string.  Value enum: "buyer_request", "merchant_request", "duplicate", "expired", "created_in_error", "other".
     * @return string
     * @throws SdkError When cancellation_reason is omitted; use hasCancellationReason() or valueOrDefault().
     */
    public function getCancellationReason(): string { return $this->get('cancellation_reason'); }
    public function hasCancellationReason(): bool { return $this->has('cancellation_reason'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When cancellation_reason_message is omitted; use hasCancellationReasonMessage() or valueOrDefault().
     */
    public function getCancellationReasonMessage(): string { return $this->get('cancellation_reason_message'); }
    public function hasCancellationReasonMessage(): bool { return $this->has('cancellation_reason_message'); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When completed_at is omitted; use hasCompletedAt() or valueOrDefault().
     */
    public function getCompletedAt(): string|\DateTimeInterface { return $this->get('completed_at'); }
    public function hasCompletedAt(): bool { return $this->has('completed_at'); }
    /** Shape $ (Value): {@see ReturnActorInput}. Who performed a return action: a buyer, merchant, integration, or the system, with an optional ID.
     * @return ReturnActorInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When completed_by is omitted; use hasCompletedBy() or valueOrDefault().
     */
    public function getCompletedBy(): mixed { return $this->get('completed_by'); }
    public function hasCompletedBy(): bool { return $this->has('completed_by'); }
    /** Shape $ (Value): Array of {@see ReturnCompletionBlockerInput}. Shape $[] (Value): {@see ReturnCompletionBlockerInput}. Something still owed before a return can complete, with the return line or record it concerns.
     * @return list<ReturnCompletionBlockerInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When completion_blockers is omitted; use hasCompletionBlockers() or valueOrDefault().
     */
    public function getCompletionBlockers(): array { return $this->get('completion_blockers'); }
    public function hasCompletionBlockers(): bool { return $this->has('completion_blockers'); }
    /** Shape $ (Value): string. automatic completes the Return when the last completion blocker clears; manual waits for POST /v1/returns/{return_id}/complete. Reopening a Return sets it to manual. Value enum: "manual", "automatic".
     * @return string
     * @throws SdkError When completion_mode is omitted; use hasCompletionMode() or valueOrDefault().
     */
    public function getCompletionMode(): string { return $this->get('completion_mode'); }
    public function hasCompletionMode(): bool { return $this->has('completion_mode'); }
    /** Shape $ (Value): string.  Value enum: "manual_completion", "exception_waived", "other".
     * @return string
     * @throws SdkError When completion_reason is omitted; use hasCompletionReason() or valueOrDefault().
     */
    public function getCompletionReason(): string { return $this->get('completion_reason'); }
    public function hasCompletionReason(): bool { return $this->has('completion_reason'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When completion_reason_message is omitted; use hasCompletionReasonMessage() or valueOrDefault().
     */
    public function getCompletionReasonMessage(): string { return $this->get('completion_reason_message'); }
    public function hasCompletionReasonMessage(): bool { return $this->has('completion_reason_message'); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string|\DateTimeInterface { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Shape $ (Value): {@see ExpandedCustomerSummaryInput} or null. Shape $.anyOf[1] (Value): {@see ExpandedCustomerSummaryInput}. A customer's summary fields, returned in place of a customer ID when the customer is expanded. Shape $.anyOf[2] (Value): null.
     * @return array{'created_at'?: string|\DateTimeInterface, 'customer_id': string, 'email': string|null, 'name': string|null, 'phone': string|null, 'status': string, 'updated_at'?: string|\DateTimeInterface, ...}|object|null
     * @throws SdkError When customer is omitted; use hasCustomer() or valueOrDefault().
     */
    public function getCustomer(): mixed { return $this->get('customer'); }
    public function hasCustomer(): bool { return $this->has('customer'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When customer_id is omitted; use hasCustomerId() or valueOrDefault().
     */
    public function getCustomerId(): string { return $this->get('customer_id'); }
    public function hasCustomerId(): bool { return $this->has('customer_id'); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When decision_at is omitted; use hasDecisionAt() or valueOrDefault().
     */
    public function getDecisionAt(): string|\DateTimeInterface { return $this->get('decision_at'); }
    public function hasDecisionAt(): bool { return $this->has('decision_at'); }
    /** Shape $ (Value): string.  Value enum: "pending", "approved", "partially_approved", "declined".
     * @return string
     * @throws SdkError When decision_status is omitted; use hasDecisionStatus() or valueOrDefault().
     */
    public function getDecisionStatus(): string { return $this->get('decision_status'); }
    public function hasDecisionStatus(): bool { return $this->has('decision_status'); }
    /** Shape $ (Value): string. Caller-owned identifier for this resource in an external system. maxLength: 255.
     * @return string
     * @throws SdkError When external_reference_id is omitted; use hasExternalReferenceId() or valueOrDefault().
     */
    public function getExternalReferenceId(): string { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** Shape $ (Value): {@see ReturnFinancialSummaryInput}. The money for a return: returned value, deductions, credits, replacement total, and amounts due to or from the buyer.
     * @return ReturnFinancialSummaryInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When financial_summary is omitted; use hasFinancialSummary() or valueOrDefault().
     */
    public function getFinancialSummary(): mixed { return $this->get('financial_summary'); }
    public function hasFinancialSummary(): bool { return $this->has('financial_summary'); }
    /** Shape $ (Value): Array of {@see ReturnHandoffRequirementInput}. Shape $[] (Value): {@see ReturnHandoffRequirementInput}. What the buyer must do to hand merchandise back: the destination, instructions, line items, and expiry.
     * @return list<ReturnHandoffRequirementInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When handoff_requirements is omitted; use hasHandoffRequirements() or valueOrDefault().
     */
    public function getHandoffRequirements(): array { return $this->get('handoff_requirements'); }
    public function hasHandoffRequirements(): bool { return $this->has('handoff_requirements'); }
    /** Shape $ (Value): string. Who created the Return, from the credential that sent the request: buyer for a customer session on /v1/me or Flint's hosted account, merchant for a Dashboard user, integration for an API key or partner app. It cannot be sent. Value enum: "buyer", "merchant", "integration".
     * @return string
     * @throws SdkError When initiated_by is omitted; use hasInitiatedBy() or valueOrDefault().
     */
    public function getInitiatedBy(): string { return $this->get('initiated_by'); }
    public function hasInitiatedBy(): bool { return $this->has('initiated_by'); }
    /** Shape $ (Value): Array of {@see ReturnLineItemInput}. Shape $[] (Value): {@see ReturnLineItemInput}. An item included in a return request.
     * @return list<ReturnLineItemInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When line_items is omitted; use hasLineItems() or valueOrDefault().
     */
    public function getLineItems(): array { return $this->get('line_items'); }
    public function hasLineItems(): bool { return $this->has('line_items'); }
    /** Shape $ (Value): string. On the Return, the least-finished line's value. Value enum: "not_required", "awaiting_handoff", "in_transit", "partially_received", "inspection_required", "partially_inspected", "inspection_review_required", "disposition_required", "resolved", "exception".
     * @return string
     * @throws SdkError When merchandise_status is omitted; use hasMerchandiseStatus() or valueOrDefault().
     */
    public function getMerchandiseStatus(): string { return $this->get('merchandise_status'); }
    public function hasMerchandiseStatus(): bool { return $this->has('merchandise_status'); }
    /** Shape $ (Value): Map of string. Shape $.* (Value): string.
     * @return array<array-key, string>|\stdClass
     * @throws SdkError When metadata is omitted; use hasMetadata() or valueOrDefault().
     */
    public function getMetadata(): array|object { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** Shape $ (Value): {@see ExpandedOrderSummaryInput} or null. Shape $.anyOf[1] (Value): {@see ExpandedOrderSummaryInput}. An order's summary fields, including status, payment and refund status, and pricing and settlement amounts, returned when the order is expanded. Shape $.anyOf[2] (Value): null.
     * @return array{'buyer_contact'?: CheckoutBuyerContactInput|array<array-key, mixed>|\stdClass, 'closed_at'?: string|\DateTimeInterface, 'closed_reason'?: string, 'created_at'?: string|\DateTimeInterface, 'customer_id'?: string, 'fulfillment_status'?: string, 'order_id': string, 'order_number'?: string, 'payment_intent_ids'?: list<string>, 'payment_status': string, 'pricing_amounts': PricingAmountsInput|array<array-key, mixed>|\stdClass, 'refund_status': string, 'settlement_amounts': SettlementAmountsInput|array<array-key, mixed>|\stdClass, 'status': string, 'updated_at'?: string|\DateTimeInterface, ...}|object|null
     * @throws SdkError When order is omitted; use hasOrder() or valueOrDefault().
     */
    public function getOrder(): mixed { return $this->get('order'); }
    public function hasOrder(): bool { return $this->has('order'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When order_id is omitted; use hasOrderId() or valueOrDefault().
     */
    public function getOrderId(): string { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** Shape $ (Value): {@see ReturnPolicyEvaluationInput}. How a return policy evaluated a return request: overall status and reason, the policy revision used, and per-line results.
     * @return ReturnPolicyEvaluationInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When policy_evaluation is omitted; use hasPolicyEvaluation() or valueOrDefault().
     */
    public function getPolicyEvaluation(): mixed { return $this->get('policy_evaluation'); }
    public function hasPolicyEvaluation(): bool { return $this->has('policy_evaluation'); }
    /** Shape $ (Value): string.  Value enum: "not_selected", "pending", "partially_fulfilled", "requires_action", "fulfilled", "failed".
     * @return string
     * @throws SdkError When resolution_status is omitted; use hasResolutionStatus() or valueOrDefault().
     */
    public function getResolutionStatus(): string { return $this->get('resolution_status'); }
    public function hasResolutionStatus(): bool { return $this->has('resolution_status'); }
    /** Shape $ (Value): Array of string. IDs of every disposition recorded for this Return, oldest first, including failed and canceled dispositions. Expand `return_dispositions` on `GET /v1/returns/{return_id}` to read them inline. Shape $[] (Value): string.
     * @return list<string>
     * @throws SdkError When return_disposition_ids is omitted; use hasReturnDispositionIds() or valueOrDefault().
     */
    public function getReturnDispositionIds(): array { return $this->get('return_disposition_ids'); }
    public function hasReturnDispositionIds(): bool { return $this->has('return_disposition_ids'); }
    /** Shape $ (Value): Array of {@see ReturnDispositionInput}. Shape $[] (Value): {@see ReturnDispositionInput}. A decision about how returned merchandise will be handled.
     * @return list<ReturnDispositionInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When return_dispositions is omitted; use hasReturnDispositions() or valueOrDefault().
     */
    public function getReturnDispositions(): array { return $this->get('return_dispositions'); }
    public function hasReturnDispositions(): bool { return $this->has('return_dispositions'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When return_id is omitted; use hasReturnId() or valueOrDefault().
     */
    public function getReturnId(): string { return $this->get('return_id'); }
    public function hasReturnId(): bool { return $this->has('return_id'); }
    /** Shape $ (Value): Array of string. IDs of every inspection recorded for this Return, oldest first, including superseded inspections. Expand `return_inspections` on `GET /v1/returns/{return_id}` to read them inline. Shape $[] (Value): string.
     * @return list<string>
     * @throws SdkError When return_inspection_ids is omitted; use hasReturnInspectionIds() or valueOrDefault().
     */
    public function getReturnInspectionIds(): array { return $this->get('return_inspection_ids'); }
    public function hasReturnInspectionIds(): bool { return $this->has('return_inspection_ids'); }
    /** Shape $ (Value): Array of {@see ReturnInspectionInput}. Shape $[] (Value): {@see ReturnInspectionInput}. An assessment of the condition of returned items.
     * @return list<ReturnInspectionInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When return_inspections is omitted; use hasReturnInspections() or valueOrDefault().
     */
    public function getReturnInspections(): array { return $this->get('return_inspections'); }
    public function hasReturnInspections(): bool { return $this->has('return_inspections'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When return_number is omitted; use hasReturnNumber() or valueOrDefault().
     */
    public function getReturnNumber(): string { return $this->get('return_number'); }
    public function hasReturnNumber(): bool { return $this->has('return_number'); }
    /** Shape $ (Value): Array of string. IDs of every receipt recorded for this Return, oldest first, including superseded receipts. Expand `return_receipts` on `GET /v1/returns/{return_id}` to read them inline. Shape $[] (Value): string.
     * @return list<string>
     * @throws SdkError When return_receipt_ids is omitted; use hasReturnReceiptIds() or valueOrDefault().
     */
    public function getReturnReceiptIds(): array { return $this->get('return_receipt_ids'); }
    public function hasReturnReceiptIds(): bool { return $this->has('return_receipt_ids'); }
    /** Shape $ (Value): Array of {@see ReturnReceiptInput}. Shape $[] (Value): {@see ReturnReceiptInput}. A record of returned items arriving at a location.
     * @return list<ReturnReceiptInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When return_receipts is omitted; use hasReturnReceipts() or valueOrDefault().
     */
    public function getReturnReceipts(): array { return $this->get('return_receipts'); }
    public function hasReturnReceipts(): bool { return $this->has('return_receipts'); }
    /** Shape $ (Value): Array of string. IDs of every resolution created for this Return, oldest first, including failed and canceled resolutions. Expand `return_resolutions` on `GET /v1/returns/{return_id}` to read them inline. Shape $[] (Value): string.
     * @return list<string>
     * @throws SdkError When return_resolution_ids is omitted; use hasReturnResolutionIds() or valueOrDefault().
     */
    public function getReturnResolutionIds(): array { return $this->get('return_resolution_ids'); }
    public function hasReturnResolutionIds(): bool { return $this->has('return_resolution_ids'); }
    /** Shape $ (Value): Array of {@see ReturnResolutionInput}. Shape $[] (Value): {@see ReturnResolutionInput}. The refund, exchange, or other outcome of a return.
     * @return list<ReturnResolutionInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When return_resolutions is omitted; use hasReturnResolutions() or valueOrDefault().
     */
    public function getReturnResolutions(): array { return $this->get('return_resolutions'); }
    public function hasReturnResolutions(): bool { return $this->has('return_resolutions'); }
    /** Shape $ (Value): Array of string. IDs of every shipment raised to send this Return's items back, oldest first, including voided shipments. Expand `shipments` on `GET /v1/returns/{return_id}` to read them inline. Shape $[] (Value): string.
     * @return list<string>
     * @throws SdkError When shipment_ids is omitted; use hasShipmentIds() or valueOrDefault().
     */
    public function getShipmentIds(): array { return $this->get('shipment_ids'); }
    public function hasShipmentIds(): bool { return $this->has('shipment_ids'); }
    /** Shape $ (Value): Array of {@see ExpandedShipmentSummaryInput}. Shape $[] (Value): {@see ExpandedShipmentSummaryInput}. A shipment's summary fields, including direction, status, and package count, returned when the shipment is expanded.
     * @return list<ExpandedShipmentSummaryInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When shipments is omitted; use hasShipments() or valueOrDefault().
     */
    public function getShipments(): array { return $this->get('shipments'); }
    public function hasShipments(): bool { return $this->has('shipments'); }
    /** Shape $ (Value): string.  Value enum: "requested", "open", "completed", "declined", "canceled".
     * @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Shape $ (Value): Array of string.  [] enum: "cancel", "complete", "decide", "reopen". Shape $[] (Value): string.  Value enum: "cancel", "complete", "decide", "reopen".
     * @return list<string>
     * @throws SdkError When supported_actions is omitted; use hasSupportedActions() or valueOrDefault().
     */
    public function getSupportedActions(): array { return $this->get('supported_actions'); }
    public function hasSupportedActions(): bool { return $this->has('supported_actions'); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When updated_at is omitted; use hasUpdatedAt() or valueOrDefault().
     */
    public function getUpdatedAt(): string|\DateTimeInterface { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Shape $ (Value): integer string. Use an integer string (decimal digits), not a floating-point number. Format: int64. minimum: 0.
     * @return string
     * @throws SdkError When version is omitted; use hasVersion() or valueOrDefault().
     */
    public function getVersion(): string { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
