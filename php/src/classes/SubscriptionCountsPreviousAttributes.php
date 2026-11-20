<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int|null $active
 * @property-read int|null $billing_hold
 * @property-read int|null $canceling
 * @property-read int|null $past_due
 * @property-read int|null $paused
 * Presence-aware response; omitted optional fields return null. */
final class SubscriptionCountsPreviousAttributes extends Model {
    /** @param array{'active'?: mixed, 'billing_hold'?: mixed, 'canceling'?: mixed, 'past_due'?: mixed, 'paused'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionCountsPreviousAttributes')); }
    /** Number of subscriptions with the stored status `active`, including the canceling and billing_hold subsets. anyOf[1] (Value): integer. Number of subscriptions with the stored status `active`, including the canceling and billing_hold subsets. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getActive(): int|null { return $this->get('active'); }
    public function hasActive(): bool { return $this->has('active'); }
    /** Number of active subscriptions with billing on hold or being retried, excluding scheduled cancellations. anyOf[1] (Value): integer. Number of active subscriptions with billing on hold or being retried, excluding scheduled cancellations. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getBillingHold(): int|null { return $this->get('billing_hold'); }
    public function hasBillingHold(): bool { return $this->has('billing_hold'); }
    /** Number of active subscriptions scheduled to cancel at the end of their current period. anyOf[1] (Value): integer. Number of active subscriptions scheduled to cancel at the end of their current period. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getCanceling(): int|null { return $this->get('canceling'); }
    public function hasCanceling(): bool { return $this->has('canceling'); }
    /** Number of counted subscriptions with status `past_due`. anyOf[1] (Value): integer. Number of counted subscriptions with status `past_due`. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getPastDue(): int|null { return $this->get('past_due'); }
    public function hasPastDue(): bool { return $this->has('past_due'); }
    /** Number of counted subscriptions with status `paused`. anyOf[1] (Value): integer. Number of counted subscriptions with status `paused`. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getPaused(): int|null { return $this->get('paused'); }
    public function hasPaused(): bool { return $this->has('paused'); }
}
