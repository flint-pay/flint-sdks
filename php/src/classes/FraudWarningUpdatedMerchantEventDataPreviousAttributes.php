<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $created_at
 * @property-read mixed $dispute
 * @property-read mixed $dispute_id
 * @property-read string|null $fraud_type
 * @property-read string|null $fraud_warning_id
 * @property-read bool|null $is_actionable
 * @property-read mixed $payment_intent
 * @property-read string|null $payment_intent_id
 * @property-read FraudWarningPaymentSummary|null $payment_summary
 * @property-read string|null $reported_at
 * @property-read string|null $updated_at
 * Presence-aware response; omitted optional fields return null. */
final class FraudWarningUpdatedMerchantEventDataPreviousAttributes extends Model {
    /** @param array{'created_at'?: mixed, 'dispute'?: mixed, 'dispute_id'?: mixed, 'fraud_type'?: mixed, 'fraud_warning_id'?: mixed, 'is_actionable'?: mixed, 'payment_intent'?: mixed, 'payment_intent_id'?: mixed, 'payment_summary'?: mixed, 'reported_at'?: mixed, 'updated_at'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('FraudWarningUpdatedMerchantEventDataPreviousAttributes')); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCreatedAt(): string|null { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Present only when `expand` includes `dispute`; `null` when expanded and there is no related dispute. anyOf[1] (Value): {@see Dispute} or null. Present only when `expand` includes `dispute`; `null` when expanded and there is no related dispute. anyOf[1].anyOf[1] (Value): {@see Dispute}. A challenge to a collected payment. anyOf[1].anyOf[2] (Value): null. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getDispute(): mixed { return $this->get('dispute'); }
    public function hasDispute(): bool { return $this->has('dispute'); }
    /** The dispute that opened on this payment after the warning. `null` when no dispute has opened. anyOf[1] (Value): string or null. The dispute that opened on this payment after the warning. `null` when no dispute has opened. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getDisputeId(): mixed { return $this->get('dispute_id'); }
    public function hasDisputeId(): bool { return $this->has('dispute_id'); }
    /** The kind of fraud the card network reported. Value enum: "card_never_received", "fraudulent_card_application", "made_with_counterfeit_card", "made_with_lost_card", "made_with_stolen_card", "unauthorized_use_of_card", "other". anyOf[1] (Value): string. The kind of fraud the card network reported. Value enum: "card_never_received", "fraudulent_card_application", "made_with_counterfeit_card", "made_with_lost_card", "made_with_stolen_card", "unauthorized_use_of_card", "other". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getFraudType(): string|null { return $this->get('fraud_type'); }
    public function hasFraudType(): bool { return $this->has('fraud_type'); }
    /** Unique identifier for this fraud warning, prefixed `frw_`. anyOf[1] (Value): string. Unique identifier for this fraud warning, prefixed `frw_`. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getFraudWarningId(): string|null { return $this->get('fraud_warning_id'); }
    public function hasFraudWarningId(): bool { return $this->has('fraud_warning_id'); }
    /** true until the payment is refunded in full, a dispute opens on it, or the card network marks the warning resolved; after that it stays false. A partial refund doesn't change it. anyOf[1] (Value): boolean. true until the payment is refunded in full, a dispute opens on it, or the card network marks the warning resolved; after that it stays false. A partial refund doesn't change it. anyOf[2] (Value): null.
     * @return bool|null
     */
    public function getIsActionable(): bool|null { return $this->get('is_actionable'); }
    public function hasIsActionable(): bool { return $this->has('is_actionable'); }
    /** Present only when `expand` includes `payment_intent`; `null` when expanded and there is no related payment intent. anyOf[1] (Value): {@see ExpandedPaymentIntentSummary} or null. Present only when `expand` includes `payment_intent`; `null` when expanded and there is no related payment intent. anyOf[1].anyOf[1] (Value): {@see ExpandedPaymentIntentSummary}. A payment intent's summary fields, including amount, status, and capture method, returned when the payment intent is expanded. anyOf[1].anyOf[2] (Value): null. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getPaymentIntent(): mixed { return $this->get('payment_intent'); }
    public function hasPaymentIntent(): bool { return $this->has('payment_intent'); }
    /** ID of the payment the warning is about. anyOf[1] (Value): string. ID of the payment the warning is about. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getPaymentIntentId(): string|null { return $this->get('payment_intent_id'); }
    public function hasPaymentIntentId(): bool { return $this->has('payment_intent_id'); }
    /** The payment's amount, buyer email, and card, for recognizing it. anyOf[1] (Value): {@see FraudWarningPaymentSummary}. The payment's amount, buyer email, and card, for recognizing it. anyOf[2] (Value): null.
     * @return FraudWarningPaymentSummary|null
     */
    public function getPaymentSummary(): FraudWarningPaymentSummary|null { return $this->get('payment_summary'); }
    public function hasPaymentSummary(): bool { return $this->has('payment_summary'); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getReportedAt(): string|null { return $this->get('reported_at'); }
    public function hasReportedAt(): bool { return $this->has('reported_at'); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getUpdatedAt(): string|null { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
}
