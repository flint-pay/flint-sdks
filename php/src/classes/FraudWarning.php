<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $created_at
 * @property-read Dispute|null $dispute
 * @property-read string|null $dispute_id
 * @property-read string $fraud_type
 * @property-read string $fraud_warning_id
 * @property-read bool $is_actionable
 * @property-read ExpandedPaymentIntentSummary|null $payment_intent
 * @property-read string $payment_intent_id
 * @property-read FraudWarningPaymentSummary $payment_summary
 * @property-read string $reported_at
 * @property-read string $updated_at
 * Presence-aware response; omitted optional fields return null. */
final class FraudWarning extends Model {
    /** @param array{'created_at': string, 'dispute'?: mixed, 'dispute_id': string|null, 'fraud_type': string, 'fraud_warning_id': string, 'is_actionable': bool, 'payment_intent'?: mixed, 'payment_intent_id': string, 'payment_summary': mixed, 'reported_at': string, 'updated_at': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('FraudWarning')); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return string
     */
    public function getCreatedAt(): string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Shape $ (Value): {@see Dispute} or null. Shape $.anyOf[1] (Value): {@see Dispute}. A challenge to a collected payment. Shape $.anyOf[2] (Value): null.
     * @return Dispute|null
     */
    public function getDispute(): Dispute|null { return $this->get('dispute'); }
    public function hasDispute(): bool { return $this->has('dispute'); }
    /** Shape $ (Value): string or null.
     * @return string|null
     */
    public function getDisputeId(): string|null { return $this->get('dispute_id'); }
    public function hasDisputeId(): bool { return $this->has('dispute_id'); }
    /** Shape $ (Value): string.  Value enum: "card_never_received", "fraudulent_card_application", "made_with_counterfeit_card", "made_with_lost_card", "made_with_stolen_card", "unauthorized_use_of_card", "other".
     * @return string
     */
    public function getFraudType(): string { return $this->get('fraud_type'); }
    public function hasFraudType(): bool { return $this->has('fraud_type'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getFraudWarningId(): string { return $this->get('fraud_warning_id'); }
    public function hasFraudWarningId(): bool { return $this->has('fraud_warning_id'); }
    /** Shape $ (Value): boolean.
     * @return bool
     */
    public function getIsActionable(): bool { return $this->get('is_actionable'); }
    public function hasIsActionable(): bool { return $this->has('is_actionable'); }
    /** Shape $ (Value): {@see ExpandedPaymentIntentSummary} or null. Shape $.anyOf[1] (Value): {@see ExpandedPaymentIntentSummary}. A payment intent's summary fields, including amount, status, and capture method, returned when the payment intent is expanded. Shape $.anyOf[2] (Value): null.
     * @return ExpandedPaymentIntentSummary|null
     */
    public function getPaymentIntent(): ExpandedPaymentIntentSummary|null { return $this->get('payment_intent'); }
    public function hasPaymentIntent(): bool { return $this->has('payment_intent'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getPaymentIntentId(): string { return $this->get('payment_intent_id'); }
    public function hasPaymentIntentId(): bool { return $this->has('payment_intent_id'); }
    /** Shape $ (Value): {@see FraudWarningPaymentSummary}. Payment details shown on a public fraud warning: amount, buyer email, card brand, and last four digits.
     * @return FraudWarningPaymentSummary
     */
    public function getPaymentSummary(): FraudWarningPaymentSummary { return $this->get('payment_summary'); }
    public function hasPaymentSummary(): bool { return $this->has('payment_summary'); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return string
     */
    public function getReportedAt(): string { return $this->get('reported_at'); }
    public function hasReportedAt(): bool { return $this->has('reported_at'); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return string
     */
    public function getUpdatedAt(): string { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
}
