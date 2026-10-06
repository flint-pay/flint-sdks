<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read bool $action_required
 * @property-read MoneyValue $amount_money
 * @property-read string $case_type
 * @property-read string $created_at
 * @property-read ExpandedCustomerSummary|null $customer
 * @property-read string $customer_id
 * @property-read string $dispute_id
 * @property-read bool $evidence_deadline_passed
 * @property-read string|null $evidence_due_at
 * @property-read bool $evidence_response_allowed
 * @property-read int $evidence_submission_count
 * @property-read bool $evidence_submission_past_due
 * @property-read string $fraud_warning_id
 * @property-read bool $has_evidence
 * @property-read string $merchant_id
 * @property-read array<array-key, string> $metadata
 * @property-read ExpandedOrderSummary|null $order
 * @property-read string $order_id
 * @property-read ExpandedPaymentIntentSummary|null $payment_intent
 * @property-read string $payment_intent_id
 * @property-read string|null $payment_option
 * @property-read string $reason
 * @property-read string $response_unavailable_reason
 * @property-read string $status
 * @property-read string $status_changed_at
 * @property-read string $updated_at
 * Presence-aware response; omitted fields throw when accessed. */
final class Dispute extends Model {
    /** @param array{'action_required': bool, 'amount_money': mixed, 'case_type': string, 'created_at': string, 'customer'?: mixed, 'customer_id'?: string, 'dispute_id': string, 'evidence_deadline_passed': bool, 'evidence_due_at'?: string|null, 'evidence_response_allowed': bool, 'evidence_submission_count': int, 'evidence_submission_past_due': bool, 'fraud_warning_id'?: string, 'has_evidence': bool, 'merchant_id': string, 'metadata': \stdClass, 'order'?: mixed, 'order_id'?: string, 'payment_intent'?: mixed, 'payment_intent_id'?: string, 'payment_option'?: string|null, 'reason': string, 'response_unavailable_reason'?: string, 'status': string, 'status_changed_at'?: string, 'updated_at': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('Dispute')); }
    /** @return bool
     * @throws SdkError When action_required is omitted; use hasActionRequired() or valueOrDefault().
     */
    public function getActionRequired(): bool { return $this->get('action_required'); }
    public function hasActionRequired(): bool { return $this->has('action_required'); }
    /** @return MoneyValue
     * @throws SdkError When amount_money is omitted; use hasAmountMoney() or valueOrDefault().
     */
    public function getAmountMoney(): MoneyValue { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** @return string
     * @throws SdkError When case_type is omitted; use hasCaseType() or valueOrDefault().
     */
    public function getCaseType(): string { return $this->get('case_type'); }
    public function hasCaseType(): bool { return $this->has('case_type'); }
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
     * @throws SdkError When dispute_id is omitted; use hasDisputeId() or valueOrDefault().
     */
    public function getDisputeId(): string { return $this->get('dispute_id'); }
    public function hasDisputeId(): bool { return $this->has('dispute_id'); }
    /** @return bool
     * @throws SdkError When evidence_deadline_passed is omitted; use hasEvidenceDeadlinePassed() or valueOrDefault().
     */
    public function getEvidenceDeadlinePassed(): bool { return $this->get('evidence_deadline_passed'); }
    public function hasEvidenceDeadlinePassed(): bool { return $this->has('evidence_deadline_passed'); }
    /** @return string|null
     * @throws SdkError When evidence_due_at is omitted; use hasEvidenceDueAt() or valueOrDefault().
     */
    public function getEvidenceDueAt(): string|null { return $this->get('evidence_due_at'); }
    public function hasEvidenceDueAt(): bool { return $this->has('evidence_due_at'); }
    /** @return bool
     * @throws SdkError When evidence_response_allowed is omitted; use hasEvidenceResponseAllowed() or valueOrDefault().
     */
    public function getEvidenceResponseAllowed(): bool { return $this->get('evidence_response_allowed'); }
    public function hasEvidenceResponseAllowed(): bool { return $this->has('evidence_response_allowed'); }
    /** @return int
     * @throws SdkError When evidence_submission_count is omitted; use hasEvidenceSubmissionCount() or valueOrDefault().
     */
    public function getEvidenceSubmissionCount(): int { return $this->get('evidence_submission_count'); }
    public function hasEvidenceSubmissionCount(): bool { return $this->has('evidence_submission_count'); }
    /** @return bool
     * @throws SdkError When evidence_submission_past_due is omitted; use hasEvidenceSubmissionPastDue() or valueOrDefault().
     */
    public function getEvidenceSubmissionPastDue(): bool { return $this->get('evidence_submission_past_due'); }
    public function hasEvidenceSubmissionPastDue(): bool { return $this->has('evidence_submission_past_due'); }
    /** @return string
     * @throws SdkError When fraud_warning_id is omitted; use hasFraudWarningId() or valueOrDefault().
     */
    public function getFraudWarningId(): string { return $this->get('fraud_warning_id'); }
    public function hasFraudWarningId(): bool { return $this->has('fraud_warning_id'); }
    /** @return bool
     * @throws SdkError When has_evidence is omitted; use hasHasEvidence() or valueOrDefault().
     */
    public function getHasEvidence(): bool { return $this->get('has_evidence'); }
    public function hasHasEvidence(): bool { return $this->has('has_evidence'); }
    /** @return string
     * @throws SdkError When merchant_id is omitted; use hasMerchantId() or valueOrDefault().
     */
    public function getMerchantId(): string { return $this->get('merchant_id'); }
    public function hasMerchantId(): bool { return $this->has('merchant_id'); }
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
    /** @return ExpandedPaymentIntentSummary|null
     * @throws SdkError When payment_intent is omitted; use hasPaymentIntent() or valueOrDefault().
     */
    public function getPaymentIntent(): ExpandedPaymentIntentSummary|null { return $this->get('payment_intent'); }
    public function hasPaymentIntent(): bool { return $this->has('payment_intent'); }
    /** @return string
     * @throws SdkError When payment_intent_id is omitted; use hasPaymentIntentId() or valueOrDefault().
     */
    public function getPaymentIntentId(): string { return $this->get('payment_intent_id'); }
    public function hasPaymentIntentId(): bool { return $this->has('payment_intent_id'); }
    /** @return string|null
     * @throws SdkError When payment_option is omitted; use hasPaymentOption() or valueOrDefault().
     */
    public function getPaymentOption(): string|null { return $this->get('payment_option'); }
    public function hasPaymentOption(): bool { return $this->has('payment_option'); }
    /** @return string
     * @throws SdkError When reason is omitted; use hasReason() or valueOrDefault().
     */
    public function getReason(): string { return $this->get('reason'); }
    public function hasReason(): bool { return $this->has('reason'); }
    /** @return string
     * @throws SdkError When response_unavailable_reason is omitted; use hasResponseUnavailableReason() or valueOrDefault().
     */
    public function getResponseUnavailableReason(): string { return $this->get('response_unavailable_reason'); }
    public function hasResponseUnavailableReason(): bool { return $this->has('response_unavailable_reason'); }
    /** @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** @return string
     * @throws SdkError When status_changed_at is omitted; use hasStatusChangedAt() or valueOrDefault().
     */
    public function getStatusChangedAt(): string { return $this->get('status_changed_at'); }
    public function hasStatusChangedAt(): bool { return $this->has('status_changed_at'); }
    /** @return string
     * @throws SdkError When updated_at is omitted; use hasUpdatedAt() or valueOrDefault().
     */
    public function getUpdatedAt(): string { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
}
