<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $action
 * @property-read ?string $dispute_id
 * @property-read string $entry_type
 * @property-read string $occurred_at
 * @property-read ?string $refund_id
 * @property-read string $resource_timeline_entry_id
 * @property-read ?string $subscription_id
 * @property-read string $type
 * Presence-aware response; omitted optional fields return null. */
final class ResourceTimelineLicenseKeyRestrictionChangeEntry extends Model {
    /** @param array{'action': string, 'dispute_id'?: string, 'entry_type': string, 'occurred_at': string, 'refund_id'?: string, 'resource_timeline_entry_id': string, 'subscription_id'?: string, 'type': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ResourceTimelineLicenseKeyRestrictionChangeEntry')); }
    /** How this restriction changed. Value enum: "added", "lifted".
     * @return string
     */
    public function getAction(): string { return $this->get('action'); }
    public function hasAction(): bool { return $this->has('action'); }
    /** The dispute that caused this restriction, when applicable.
     * @return ?string
     */
    public function getDisputeId(): ?string { return $this->get('dispute_id'); }
    public function hasDisputeId(): bool { return $this->has('dispute_id'); }
    /** Always license_key_restriction_change for this kind of entry. Value enum: "license_key_restriction_change".
     * @return string
     */
    public function getEntryType(): string { return $this->get('entry_type'); }
    public function hasEntryType(): bool { return $this->has('entry_type'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string
     */
    public function getOccurredAt(): string { return $this->get('occurred_at'); }
    public function hasOccurredAt(): bool { return $this->has('occurred_at'); }
    /** The refund that caused this restriction, when applicable.
     * @return ?string
     */
    public function getRefundId(): ?string { return $this->get('refund_id'); }
    public function hasRefundId(): bool { return $this->has('refund_id'); }
    /** Stable ID of this restriction change.
     * @return string
     */
    public function getResourceTimelineEntryId(): string { return $this->get('resource_timeline_entry_id'); }
    public function hasResourceTimelineEntryId(): bool { return $this->has('resource_timeline_entry_id'); }
    /** The subscription that caused this restriction, when applicable.
     * @return ?string
     */
    public function getSubscriptionId(): ?string { return $this->get('subscription_id'); }
    public function hasSubscriptionId(): bool { return $this->has('subscription_id'); }
    /** What caused the restriction. Value enum: "merchant", "refund", "dispute", "subscription".
     * @return string
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
}
