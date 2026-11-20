<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int $active
 * @property-read int $billing_hold
 * @property-read int $canceling
 * @property-read int $past_due
 * @property-read int $paused
 * Presence-aware response; omitted optional fields return null. */
final class SubscriptionCounts extends Model {
    /** @param array{'active': int, 'billing_hold': int, 'canceling': int, 'past_due': int, 'paused': int, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionCounts')); }
    /** Number of subscriptions with the stored status `active`, including the canceling and billing_hold subsets. Format: int64.
     * @return int
     */
    public function getActive(): int { return $this->get('active'); }
    public function hasActive(): bool { return $this->has('active'); }
    /** Number of active subscriptions with billing on hold or being retried, excluding scheduled cancellations. Format: int64.
     * @return int
     */
    public function getBillingHold(): int { return $this->get('billing_hold'); }
    public function hasBillingHold(): bool { return $this->has('billing_hold'); }
    /** Number of active subscriptions scheduled to cancel at the end of their current period. Format: int64.
     * @return int
     */
    public function getCanceling(): int { return $this->get('canceling'); }
    public function hasCanceling(): bool { return $this->has('canceling'); }
    /** Number of counted subscriptions with status `past_due`. Format: int64.
     * @return int
     */
    public function getPastDue(): int { return $this->get('past_due'); }
    public function hasPastDue(): bool { return $this->has('past_due'); }
    /** Number of counted subscriptions with status `paused`. Format: int64.
     * @return int
     */
    public function getPaused(): int { return $this->get('paused'); }
    public function hasPaused(): bool { return $this->has('paused'); }
}
