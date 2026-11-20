<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int|null $active
 * @property-read int|null $billing_hold
 * @property-read int|null $canceling
 * @property-read int|null $past_due
 * @property-read int|null $paused
 * Presence-aware input; omitted fields throw when accessed. */
final class SubscriptionCountsPreviousAttributesInput extends Model {
    /** @param array{'active'?: int|null, 'billing_hold'?: int|null, 'canceling'?: int|null, 'past_due'?: int|null, 'paused'?: int|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionCountsPreviousAttributesInput')); }
    /** Number of subscriptions with the stored status `active`, including the canceling and billing_hold subsets. anyOf[1] (Value): integer. Number of subscriptions with the stored status `active`, including the canceling and billing_hold subsets. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     * @throws SdkError When active is omitted; use hasActive() or valueOrDefault().
     */
    public function getActive(): mixed { return $this->get('active'); }
    public function hasActive(): bool { return $this->has('active'); }
    /** Number of active subscriptions with billing on hold or being retried, excluding scheduled cancellations. anyOf[1] (Value): integer. Number of active subscriptions with billing on hold or being retried, excluding scheduled cancellations. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     * @throws SdkError When billing_hold is omitted; use hasBillingHold() or valueOrDefault().
     */
    public function getBillingHold(): mixed { return $this->get('billing_hold'); }
    public function hasBillingHold(): bool { return $this->has('billing_hold'); }
    /** Number of active subscriptions scheduled to cancel at the end of their current period. anyOf[1] (Value): integer. Number of active subscriptions scheduled to cancel at the end of their current period. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     * @throws SdkError When canceling is omitted; use hasCanceling() or valueOrDefault().
     */
    public function getCanceling(): mixed { return $this->get('canceling'); }
    public function hasCanceling(): bool { return $this->has('canceling'); }
    /** Number of counted subscriptions with status `past_due`. anyOf[1] (Value): integer. Number of counted subscriptions with status `past_due`. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     * @throws SdkError When past_due is omitted; use hasPastDue() or valueOrDefault().
     */
    public function getPastDue(): mixed { return $this->get('past_due'); }
    public function hasPastDue(): bool { return $this->has('past_due'); }
    /** Number of counted subscriptions with status `paused`. anyOf[1] (Value): integer. Number of counted subscriptions with status `paused`. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     * @throws SdkError When paused is omitted; use hasPaused() or valueOrDefault().
     */
    public function getPaused(): mixed { return $this->get('paused'); }
    public function hasPaused(): bool { return $this->has('paused'); }
}
