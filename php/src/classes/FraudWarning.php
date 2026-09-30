<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read bool $actionable
 * @property-read string $created_at
 * @property-read Dispute|null $dispute
 * @property-read string|null $dispute_id
 * @property-read string $fraud_type
 * @property-read string $fraud_warning_id
 * @property-read ExpandedPaymentIntentSummary|null $payment_intent
 * @property-read string $payment_intent_id
 * @property-read PublicFraudWarningPaymentSummary $payment_summary
 * @property-read string $reported_at
 * Presence-aware response; omitted fields throw when accessed. */
final class FraudWarning extends Model {
    /** @param array{'actionable': bool, 'created_at': string, 'dispute'?: mixed, 'dispute_id': string|null, 'fraud_type': string, 'fraud_warning_id': string, 'payment_intent'?: mixed, 'payment_intent_id': string, 'payment_summary': mixed, 'reported_at': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('FraudWarning')); }
    /** @return bool
     * @throws SdkError When actionable is omitted; use hasActionable() or valueOrDefault().
     */
    public function getActionable(): bool { return $this->get('actionable'); }
    public function hasActionable(): bool { return $this->has('actionable'); }
    /** @return string
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** @return Dispute|null
     * @throws SdkError When dispute is omitted; use hasDispute() or valueOrDefault().
     */
    public function getDispute(): Dispute|null { return $this->get('dispute'); }
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
    /** @return PublicFraudWarningPaymentSummary
     * @throws SdkError When payment_summary is omitted; use hasPaymentSummary() or valueOrDefault().
     */
    public function getPaymentSummary(): PublicFraudWarningPaymentSummary { return $this->get('payment_summary'); }
    public function hasPaymentSummary(): bool { return $this->has('payment_summary'); }
    /** @return string
     * @throws SdkError When reported_at is omitted; use hasReportedAt() or valueOrDefault().
     */
    public function getReportedAt(): string { return $this->get('reported_at'); }
    public function hasReportedAt(): bool { return $this->has('reported_at'); }
}
