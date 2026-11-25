<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $created_at
 * @property-read string|null $dispute_id
 * @property-read string|null $dispute_status
 * @property-read string|null $reason
 * @property-read string|null $refund_id
 * @property-read string|null $subscription_id
 * @property-read string|null $type
 * Presence-aware response; omitted optional fields return null. */
final class LicenseKeyRestrictionPreviousAttributes extends Model {
    /** @param array{'created_at'?: mixed, 'dispute_id'?: mixed, 'dispute_status'?: mixed, 'reason'?: mixed, 'refund_id'?: mixed, 'subscription_id'?: mixed, 'type'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('LicenseKeyRestrictionPreviousAttributes')); }
    /** When the restriction took effect. anyOf[1] (Value): string. When the restriction took effect. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCreatedAt(): string|null { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** The dispute that restricted the key. anyOf[1] (Value): string. The dispute that restricted the key. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getDisputeId(): string|null { return $this->get('dispute_id'); }
    public function hasDisputeId(): bool { return $this->has('dispute_id'); }
    /** Whether the dispute is open or lost. Value enum: "open", "lost". anyOf[1] (Value): string. Whether the dispute is open or lost. Value enum: "open", "lost". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getDisputeStatus(): string|null { return $this->get('dispute_status'); }
    public function hasDisputeStatus(): bool { return $this->has('dispute_status'); }
    /** Reason for a merchant or subscription restriction. anyOf[1] (Value): string. Reason for a merchant or subscription restriction. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getReason(): string|null { return $this->get('reason'); }
    public function hasReason(): bool { return $this->has('reason'); }
    /** The refund that restricted the key. anyOf[1] (Value): string. The refund that restricted the key. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getRefundId(): string|null { return $this->get('refund_id'); }
    public function hasRefundId(): bool { return $this->has('refund_id'); }
    /** The subscription that restricted the key. anyOf[1] (Value): string. The subscription that restricted the key. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getSubscriptionId(): string|null { return $this->get('subscription_id'); }
    public function hasSubscriptionId(): bool { return $this->has('subscription_id'); }
    /** What caused the restriction. Value enum: "merchant", "refund", "dispute", "subscription", "payment_reversal". anyOf[1] (Value): string. What caused the restriction. Value enum: "merchant", "refund", "dispute", "subscription", "payment_reversal". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getType(): string|null { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
}
