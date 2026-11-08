<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $ends_at
 * @property-read string $fixable_by
 * @property-read string $reason
 * @property-read string $started_at
 * Presence-aware response; omitted optional fields return null. */
final class SubscriptionDeliveryHold extends Model {
    /** @param array{'ends_at': string, 'fixable_by': string, 'reason': string, 'started_at': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionDeliveryHold')); }
    /** When the hold runs out: 14 days or one billing interval after the billing date, whichever is sooner. A hold that runs out pauses the subscription with `pause_reason: delivery_action_required`. Format: date-time.
     * @return string
     */
    public function getEndsAt(): string { return $this->get('ends_at'); }
    public function hasEndsAt(): bool { return $this->has('ends_at'); }
    /** Who can clear the hold. `method_unavailable` holds are `buyer` unless your `customer_account.buyer_capabilities.can_update_delivery` is false. Value enum: "buyer", "merchant".
     * @return string
     */
    public function getFixableBy(): string { return $this->get('fixable_by'); }
    public function hasFixableBy(): bool { return $this->has('fixable_by'); }
    /** Value enum: "method_unavailable", "destination_not_served", "rate_unavailable".
     * @return string
     */
    public function getReason(): string { return $this->get('reason'); }
    public function hasReason(): bool { return $this->has('reason'); }
    /** When Flint held the renewal. Format: date-time.
     * @return string
     */
    public function getStartedAt(): string { return $this->get('started_at'); }
    public function hasStartedAt(): bool { return $this->has('started_at'); }
}
