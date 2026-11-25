<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $created_at
 * @property-read ?string $dispute_id
 * @property-read ?string $dispute_status
 * @property-read ?string $reason
 * @property-read ?string $refund_id
 * @property-read ?string $subscription_id
 * @property-read string $type
 * Presence-aware response; omitted optional fields return null. */
final class LicenseKeyRestriction extends Model {
    /** @param array{'created_at': string, 'dispute_id'?: string, 'dispute_status'?: string, 'reason'?: string, 'refund_id'?: string, 'subscription_id'?: string, 'type': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('LicenseKeyRestriction')); }
    /** When the restriction took effect. Format: date-time.
     * @return string
     */
    public function getCreatedAt(): string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** The dispute that restricted the key.
     * @return ?string
     */
    public function getDisputeId(): ?string { return $this->get('dispute_id'); }
    public function hasDisputeId(): bool { return $this->has('dispute_id'); }
    /** Whether the dispute is open or lost. Value enum: "open", "lost".
     * @return ?string
     */
    public function getDisputeStatus(): ?string { return $this->get('dispute_status'); }
    public function hasDisputeStatus(): bool { return $this->has('dispute_status'); }
    /** Reason for a merchant or subscription restriction.
     * @return ?string
     */
    public function getReason(): ?string { return $this->get('reason'); }
    public function hasReason(): bool { return $this->has('reason'); }
    /** The refund that restricted the key.
     * @return ?string
     */
    public function getRefundId(): ?string { return $this->get('refund_id'); }
    public function hasRefundId(): bool { return $this->has('refund_id'); }
    /** The subscription that restricted the key.
     * @return ?string
     */
    public function getSubscriptionId(): ?string { return $this->get('subscription_id'); }
    public function hasSubscriptionId(): bool { return $this->has('subscription_id'); }
    /** What caused the restriction. Value enum: "merchant", "refund", "dispute", "subscription", "payment_reversal".
     * @return string
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
}
