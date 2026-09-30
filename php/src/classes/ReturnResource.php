<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $canceled_at
 * @property-read string $completed_at
 * @property-read ReturnActor $completed_by
 * @property-read list<ReturnCompletionBlocker> $completion_blockers
 * @property-read string $completion_mode
 * @property-read string $created_at
 * @property-read ExpandedCustomerSummary|null $customer
 * @property-read string $customer_id
 * @property-read string $decision_at
 * @property-read string $decision_status
 * @property-read string $disposition_count
 * @property-read string $external_reference_id
 * @property-read ReturnFinancialSummary $financial_summary
 * @property-read list<ReturnHandoffRequirement> $handoff_requirements
 * @property-read string $initiated_by
 * @property-read string $inspection_count
 * @property-read list<ReturnLineItem> $line_items
 * @property-read string $merchandise_status
 * @property-read array<array-key, string> $metadata
 * @property-read ExpandedOrderSummary|null $order
 * @property-read string $order_id
 * @property-read ReturnPolicyEvaluation $policy_evaluation
 * @property-read string $receipt_count
 * @property-read string $resolution_count
 * @property-read string $resolution_status
 * @property-read string $return_id
 * @property-read string $return_number
 * @property-read string $shipment_count
 * @property-read string $status
 * @property-read list<string> $supported_actions
 * @property-read string $updated_at
 * @property-read string $version
 * Presence-aware response; omitted fields throw when accessed. */
final class ReturnResource extends Model {
    /** @param array{'canceled_at'?: string, 'completed_at'?: string, 'completed_by'?: mixed, 'completion_blockers': list<mixed>, 'completion_mode'?: string, 'created_at': string, 'customer'?: mixed, 'customer_id'?: string, 'decision_at'?: string, 'decision_status': string, 'disposition_count': string, 'external_reference_id'?: string, 'financial_summary': mixed, 'handoff_requirements': list<mixed>, 'initiated_by': string, 'inspection_count': string, 'line_items': list<mixed>, 'merchandise_status': string, 'metadata': \stdClass, 'order'?: mixed, 'order_id': string, 'policy_evaluation'?: mixed, 'receipt_count': string, 'resolution_count': string, 'resolution_status': string, 'return_id': string, 'return_number': string, 'shipment_count'?: string, 'status': string, 'supported_actions': list<string>, 'updated_at': string, 'version': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnResource')); }
    /** @return string
     * @throws SdkError When canceled_at is omitted; use hasCanceledAt() or valueOrDefault().
     */
    public function getCanceledAt(): string { return $this->get('canceled_at'); }
    public function hasCanceledAt(): bool { return $this->has('canceled_at'); }
    /** @return string
     * @throws SdkError When completed_at is omitted; use hasCompletedAt() or valueOrDefault().
     */
    public function getCompletedAt(): string { return $this->get('completed_at'); }
    public function hasCompletedAt(): bool { return $this->has('completed_at'); }
    /** @return ReturnActor
     * @throws SdkError When completed_by is omitted; use hasCompletedBy() or valueOrDefault().
     */
    public function getCompletedBy(): ReturnActor { return $this->get('completed_by'); }
    public function hasCompletedBy(): bool { return $this->has('completed_by'); }
    /** @return list<ReturnCompletionBlocker>
     * @throws SdkError When completion_blockers is omitted; use hasCompletionBlockers() or valueOrDefault().
     */
    public function getCompletionBlockers(): array { return $this->get('completion_blockers'); }
    public function hasCompletionBlockers(): bool { return $this->has('completion_blockers'); }
    /** @return string
     * @throws SdkError When completion_mode is omitted; use hasCompletionMode() or valueOrDefault().
     */
    public function getCompletionMode(): string { return $this->get('completion_mode'); }
    public function hasCompletionMode(): bool { return $this->has('completion_mode'); }
    /** @return string
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** @return ExpandedCustomerSummary|null
     * @throws SdkError When customer is omitted; use hasCustomer() or valueOrDefault().
     */
    public function getCustomer(): ExpandedCustomerSummary|null { return $this->get('customer'); }
    public function hasCustomer(): bool { return $this->has('customer'); }
    /** @return string
     * @throws SdkError When customer_id is omitted; use hasCustomerId() or valueOrDefault().
     */
    public function getCustomerId(): string { return $this->get('customer_id'); }
    public function hasCustomerId(): bool { return $this->has('customer_id'); }
    /** @return string
     * @throws SdkError When decision_at is omitted; use hasDecisionAt() or valueOrDefault().
     */
    public function getDecisionAt(): string { return $this->get('decision_at'); }
    public function hasDecisionAt(): bool { return $this->has('decision_at'); }
    /** @return string
     * @throws SdkError When decision_status is omitted; use hasDecisionStatus() or valueOrDefault().
     */
    public function getDecisionStatus(): string { return $this->get('decision_status'); }
    public function hasDecisionStatus(): bool { return $this->has('decision_status'); }
    /** @return string
     * @throws SdkError When disposition_count is omitted; use hasDispositionCount() or valueOrDefault().
     */
    public function getDispositionCount(): string { return $this->get('disposition_count'); }
    public function hasDispositionCount(): bool { return $this->has('disposition_count'); }
    /** @return string
     * @throws SdkError When external_reference_id is omitted; use hasExternalReferenceId() or valueOrDefault().
     */
    public function getExternalReferenceId(): string { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** @return ReturnFinancialSummary
     * @throws SdkError When financial_summary is omitted; use hasFinancialSummary() or valueOrDefault().
     */
    public function getFinancialSummary(): ReturnFinancialSummary { return $this->get('financial_summary'); }
    public function hasFinancialSummary(): bool { return $this->has('financial_summary'); }
    /** @return list<ReturnHandoffRequirement>
     * @throws SdkError When handoff_requirements is omitted; use hasHandoffRequirements() or valueOrDefault().
     */
    public function getHandoffRequirements(): array { return $this->get('handoff_requirements'); }
    public function hasHandoffRequirements(): bool { return $this->has('handoff_requirements'); }
    /** @return string
     * @throws SdkError When initiated_by is omitted; use hasInitiatedBy() or valueOrDefault().
     */
    public function getInitiatedBy(): string { return $this->get('initiated_by'); }
    public function hasInitiatedBy(): bool { return $this->has('initiated_by'); }
    /** @return string
     * @throws SdkError When inspection_count is omitted; use hasInspectionCount() or valueOrDefault().
     */
    public function getInspectionCount(): string { return $this->get('inspection_count'); }
    public function hasInspectionCount(): bool { return $this->has('inspection_count'); }
    /** @return list<ReturnLineItem>
     * @throws SdkError When line_items is omitted; use hasLineItems() or valueOrDefault().
     */
    public function getLineItems(): array { return $this->get('line_items'); }
    public function hasLineItems(): bool { return $this->has('line_items'); }
    /** @return string
     * @throws SdkError When merchandise_status is omitted; use hasMerchandiseStatus() or valueOrDefault().
     */
    public function getMerchandiseStatus(): string { return $this->get('merchandise_status'); }
    public function hasMerchandiseStatus(): bool { return $this->has('merchandise_status'); }
    /** @return array<array-key, string>
     * @throws SdkError When metadata is omitted; use hasMetadata() or valueOrDefault().
     */
    public function getMetadata(): array { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** @return ExpandedOrderSummary|null
     * @throws SdkError When order is omitted; use hasOrder() or valueOrDefault().
     */
    public function getOrder(): ExpandedOrderSummary|null { return $this->get('order'); }
    public function hasOrder(): bool { return $this->has('order'); }
    /** @return string
     * @throws SdkError When order_id is omitted; use hasOrderId() or valueOrDefault().
     */
    public function getOrderId(): string { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** @return ReturnPolicyEvaluation
     * @throws SdkError When policy_evaluation is omitted; use hasPolicyEvaluation() or valueOrDefault().
     */
    public function getPolicyEvaluation(): ReturnPolicyEvaluation { return $this->get('policy_evaluation'); }
    public function hasPolicyEvaluation(): bool { return $this->has('policy_evaluation'); }
    /** @return string
     * @throws SdkError When receipt_count is omitted; use hasReceiptCount() or valueOrDefault().
     */
    public function getReceiptCount(): string { return $this->get('receipt_count'); }
    public function hasReceiptCount(): bool { return $this->has('receipt_count'); }
    /** @return string
     * @throws SdkError When resolution_count is omitted; use hasResolutionCount() or valueOrDefault().
     */
    public function getResolutionCount(): string { return $this->get('resolution_count'); }
    public function hasResolutionCount(): bool { return $this->has('resolution_count'); }
    /** @return string
     * @throws SdkError When resolution_status is omitted; use hasResolutionStatus() or valueOrDefault().
     */
    public function getResolutionStatus(): string { return $this->get('resolution_status'); }
    public function hasResolutionStatus(): bool { return $this->has('resolution_status'); }
    /** @return string
     * @throws SdkError When return_id is omitted; use hasReturnId() or valueOrDefault().
     */
    public function getReturnId(): string { return $this->get('return_id'); }
    public function hasReturnId(): bool { return $this->has('return_id'); }
    /** @return string
     * @throws SdkError When return_number is omitted; use hasReturnNumber() or valueOrDefault().
     */
    public function getReturnNumber(): string { return $this->get('return_number'); }
    public function hasReturnNumber(): bool { return $this->has('return_number'); }
    /** @return string
     * @throws SdkError When shipment_count is omitted; use hasShipmentCount() or valueOrDefault().
     */
    public function getShipmentCount(): string { return $this->get('shipment_count'); }
    public function hasShipmentCount(): bool { return $this->has('shipment_count'); }
    /** @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** @return list<string>
     * @throws SdkError When supported_actions is omitted; use hasSupportedActions() or valueOrDefault().
     */
    public function getSupportedActions(): array { return $this->get('supported_actions'); }
    public function hasSupportedActions(): bool { return $this->has('supported_actions'); }
    /** @return string
     * @throws SdkError When updated_at is omitted; use hasUpdatedAt() or valueOrDefault().
     */
    public function getUpdatedAt(): string { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** @return string
     * @throws SdkError When version is omitted; use hasVersion() or valueOrDefault().
     */
    public function getVersion(): string { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
