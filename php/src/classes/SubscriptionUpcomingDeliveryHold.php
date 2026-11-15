<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $detected_at
 * @property-read string $fixable_by
 * @property-read string $reason
 * @property-read string $renewal_at
 * Presence-aware response; omitted optional fields return null. */
final class SubscriptionUpcomingDeliveryHold extends Model {
    /** @param array{'detected_at': string, 'fixable_by': string, 'reason': string, 'renewal_at': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionUpcomingDeliveryHold')); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string
     */
    public function getDetectedAt(): string { return $this->get('detected_at'); }
    public function hasDetectedAt(): bool { return $this->has('detected_at'); }
    /** Who can clear the problem. `method_unavailable` problems are `buyer` when buyers can update delivery and another offered method can serve the subscription. They are `merchant` when your `customer_account.buyer_capabilities.can_update_delivery` is false, or when the method was revoked and no other offered method can serve the subscription. Value enum: "buyer", "merchant".
     * @return string
     */
    public function getFixableBy(): string { return $this->get('fixable_by'); }
    public function hasFixableBy(): bool { return $this->has('fixable_by'); }
    /** Why the subscription's delivery needs attention. Value enum: "method_unavailable", "destination_not_served", "rate_unavailable".
     * @return string
     */
    public function getReason(): string { return $this->get('reason'); }
    public function hasReason(): bool { return $this->has('reason'); }
    /** Time of the next renewal affected by this delivery issue. Format: date-time.
     * @return string
     */
    public function getRenewalAt(): string { return $this->get('renewal_at'); }
    public function hasRenewalAt(): bool { return $this->has('renewal_at'); }
}
