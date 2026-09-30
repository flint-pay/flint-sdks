<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read bool $actionable
 * @property-read string|\DateTimeInterface $created_at
 * @property-read array{'action_required': bool, 'amount_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'case_type': string, 'created_at': string|\DateTimeInterface, 'customer'?: array{'created_at'?: string|\DateTimeInterface, 'customer_id': string, 'email': string, 'name'?: string, 'phone'?: string, 'updated_at'?: string|\DateTimeInterface, ...}|object|null, 'customer_id'?: string, 'dispute_id': string, 'evidence_deadline_passed': bool, 'evidence_due_at'?: string|\DateTimeInterface, 'evidence_response_allowed': bool, 'evidence_submission_count': int, 'evidence_submission_past_due': bool, 'fraud_warning_id'?: string, 'has_evidence': bool, 'merchant_id': string, 'metadata': array<array-key, string>|\stdClass, 'order'?: array{'created_at'?: string|\DateTimeInterface, 'customer_id'?: string, 'fulfillment_status'?: string, 'order_id': string, 'order_number'?: string, 'payment_intent_ids'?: list<string>, 'payment_status': string, 'pricing_amounts': PricingAmountsInput|array<array-key, mixed>|\stdClass, 'refund_status': string, 'settlement_amounts': SettlementAmountsInput|array<array-key, mixed>|\stdClass, 'status': string, 'updated_at'?: string|\DateTimeInterface, ...}|object|null, 'order_id'?: string, 'payment_intent'?: array{'amount_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'capture_method'?: string, 'created_at'?: string|\DateTimeInterface, 'customer_id'?: string, 'order_id'?: string, 'payment_intent_id': string, 'payment_source'?: PaymentSourceSummaryInput|array<array-key, mixed>|\stdClass, 'refund_status'?: string, 'status': string, 'updated_at'?: string|\DateTimeInterface, ...}|object|null, 'payment_intent_id'?: string, 'payment_option'?: string, 'reason': string, 'response_unavailable_reason'?: string, 'status': string, 'status_changed_at'?: string|\DateTimeInterface, 'updated_at': string|\DateTimeInterface, ...}|object|null $dispute
 * @property-read string|null $dispute_id
 * @property-read string $fraud_type
 * @property-read string $fraud_warning_id
 * @property-read array{'amount_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'capture_method'?: string, 'created_at'?: string|\DateTimeInterface, 'customer_id'?: string, 'order_id'?: string, 'payment_intent_id': string, 'payment_source'?: PaymentSourceSummaryInput|array<array-key, mixed>|\stdClass, 'refund_status'?: string, 'status': string, 'updated_at'?: string|\DateTimeInterface, ...}|object|null $payment_intent
 * @property-read string $payment_intent_id
 * @property-read PublicFraudWarningPaymentSummaryInput|array<array-key, mixed>|\stdClass $payment_summary
 * @property-read string|\DateTimeInterface $reported_at
 * Presence-aware input; omitted fields throw when accessed. */
final class FraudWarningInput extends Model {
    /** @param array{'actionable': bool, 'created_at': string|\DateTimeInterface, 'dispute'?: array{'action_required': bool, 'amount_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'case_type': string, 'created_at': string|\DateTimeInterface, 'customer'?: array{'created_at'?: string|\DateTimeInterface, 'customer_id': string, 'email': string, 'name'?: string, 'phone'?: string, 'updated_at'?: string|\DateTimeInterface, ...}|object|null, 'customer_id'?: string, 'dispute_id': string, 'evidence_deadline_passed': bool, 'evidence_due_at'?: string|\DateTimeInterface, 'evidence_response_allowed': bool, 'evidence_submission_count': int, 'evidence_submission_past_due': bool, 'fraud_warning_id'?: string, 'has_evidence': bool, 'merchant_id': string, 'metadata': array<array-key, string>|\stdClass, 'order'?: array{'created_at'?: string|\DateTimeInterface, 'customer_id'?: string, 'fulfillment_status'?: string, 'order_id': string, 'order_number'?: string, 'payment_intent_ids'?: list<string>, 'payment_status': string, 'pricing_amounts': PricingAmountsInput|array<array-key, mixed>|\stdClass, 'refund_status': string, 'settlement_amounts': SettlementAmountsInput|array<array-key, mixed>|\stdClass, 'status': string, 'updated_at'?: string|\DateTimeInterface, ...}|object|null, 'order_id'?: string, 'payment_intent'?: array{'amount_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'capture_method'?: string, 'created_at'?: string|\DateTimeInterface, 'customer_id'?: string, 'order_id'?: string, 'payment_intent_id': string, 'payment_source'?: PaymentSourceSummaryInput|array<array-key, mixed>|\stdClass, 'refund_status'?: string, 'status': string, 'updated_at'?: string|\DateTimeInterface, ...}|object|null, 'payment_intent_id'?: string, 'payment_option'?: string, 'reason': string, 'response_unavailable_reason'?: string, 'status': string, 'status_changed_at'?: string|\DateTimeInterface, 'updated_at': string|\DateTimeInterface, ...}|object|null, 'dispute_id': string|null, 'fraud_type': string, 'fraud_warning_id': string, 'payment_intent'?: array{'amount_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'capture_method'?: string, 'created_at'?: string|\DateTimeInterface, 'customer_id'?: string, 'order_id'?: string, 'payment_intent_id': string, 'payment_source'?: PaymentSourceSummaryInput|array<array-key, mixed>|\stdClass, 'refund_status'?: string, 'status': string, 'updated_at'?: string|\DateTimeInterface, ...}|object|null, 'payment_intent_id': string, 'payment_summary': PublicFraudWarningPaymentSummaryInput|array<array-key, mixed>|\stdClass, 'reported_at': string|\DateTimeInterface, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('FraudWarningInput')); }
    /** @return bool
     * @throws SdkError When actionable is omitted; use hasActionable() or valueOrDefault().
     */
    public function getActionable(): bool { return $this->get('actionable'); }
    public function hasActionable(): bool { return $this->has('actionable'); }
    /** @return string|\DateTimeInterface
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string|\DateTimeInterface { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** @return array{'action_required': bool, 'amount_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'case_type': string, 'created_at': string|\DateTimeInterface, 'customer'?: array{'created_at'?: string|\DateTimeInterface, 'customer_id': string, 'email': string, 'name'?: string, 'phone'?: string, 'updated_at'?: string|\DateTimeInterface, ...}|object|null, 'customer_id'?: string, 'dispute_id': string, 'evidence_deadline_passed': bool, 'evidence_due_at'?: string|\DateTimeInterface, 'evidence_response_allowed': bool, 'evidence_submission_count': int, 'evidence_submission_past_due': bool, 'fraud_warning_id'?: string, 'has_evidence': bool, 'merchant_id': string, 'metadata': array<array-key, string>|\stdClass, 'order'?: array{'created_at'?: string|\DateTimeInterface, 'customer_id'?: string, 'fulfillment_status'?: string, 'order_id': string, 'order_number'?: string, 'payment_intent_ids'?: list<string>, 'payment_status': string, 'pricing_amounts': PricingAmountsInput|array<array-key, mixed>|\stdClass, 'refund_status': string, 'settlement_amounts': SettlementAmountsInput|array<array-key, mixed>|\stdClass, 'status': string, 'updated_at'?: string|\DateTimeInterface, ...}|object|null, 'order_id'?: string, 'payment_intent'?: array{'amount_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'capture_method'?: string, 'created_at'?: string|\DateTimeInterface, 'customer_id'?: string, 'order_id'?: string, 'payment_intent_id': string, 'payment_source'?: PaymentSourceSummaryInput|array<array-key, mixed>|\stdClass, 'refund_status'?: string, 'status': string, 'updated_at'?: string|\DateTimeInterface, ...}|object|null, 'payment_intent_id'?: string, 'payment_option'?: string, 'reason': string, 'response_unavailable_reason'?: string, 'status': string, 'status_changed_at'?: string|\DateTimeInterface, 'updated_at': string|\DateTimeInterface, ...}|object|null
     * @throws SdkError When dispute is omitted; use hasDispute() or valueOrDefault().
     */
    public function getDispute(): mixed { return $this->get('dispute'); }
    public function hasDispute(): bool { return $this->has('dispute'); }
    /** @return string|null
     * @throws SdkError When dispute_id is omitted; use hasDisputeId() or valueOrDefault().
     */
    public function getDisputeId(): string|null { return $this->get('dispute_id'); }
    public function hasDisputeId(): bool { return $this->has('dispute_id'); }
    /** @return string
     * @throws SdkError When fraud_type is omitted; use hasFraudType() or valueOrDefault().
     */
    public function getFraudType(): string { return $this->get('fraud_type'); }
    public function hasFraudType(): bool { return $this->has('fraud_type'); }
    /** @return string
     * @throws SdkError When fraud_warning_id is omitted; use hasFraudWarningId() or valueOrDefault().
     */
    public function getFraudWarningId(): string { return $this->get('fraud_warning_id'); }
    public function hasFraudWarningId(): bool { return $this->has('fraud_warning_id'); }
    /** @return array{'amount_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'capture_method'?: string, 'created_at'?: string|\DateTimeInterface, 'customer_id'?: string, 'order_id'?: string, 'payment_intent_id': string, 'payment_source'?: PaymentSourceSummaryInput|array<array-key, mixed>|\stdClass, 'refund_status'?: string, 'status': string, 'updated_at'?: string|\DateTimeInterface, ...}|object|null
     * @throws SdkError When payment_intent is omitted; use hasPaymentIntent() or valueOrDefault().
     */
    public function getPaymentIntent(): mixed { return $this->get('payment_intent'); }
    public function hasPaymentIntent(): bool { return $this->has('payment_intent'); }
    /** @return string
     * @throws SdkError When payment_intent_id is omitted; use hasPaymentIntentId() or valueOrDefault().
     */
    public function getPaymentIntentId(): string { return $this->get('payment_intent_id'); }
    public function hasPaymentIntentId(): bool { return $this->has('payment_intent_id'); }
    /** @return PublicFraudWarningPaymentSummaryInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When payment_summary is omitted; use hasPaymentSummary() or valueOrDefault().
     */
    public function getPaymentSummary(): mixed { return $this->get('payment_summary'); }
    public function hasPaymentSummary(): bool { return $this->has('payment_summary'); }
    /** @return string|\DateTimeInterface
     * @throws SdkError When reported_at is omitted; use hasReportedAt() or valueOrDefault().
     */
    public function getReportedAt(): string|\DateTimeInterface { return $this->get('reported_at'); }
    public function hasReportedAt(): bool { return $this->has('reported_at'); }
}
