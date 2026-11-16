<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int|null $active
 * @property-read int|null $past_due
 * @property-read int|null $paused
 * Presence-aware input; omitted fields throw when accessed. */
final class SubscriptionCountsPreviousAttributesInput extends Model {
    /** @param array{'active'?: int|null, 'past_due'?: int|null, 'paused'?: int|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionCountsPreviousAttributesInput')); }
    /** Number of counted subscriptions with status `active`. anyOf[1] (Value): integer. Number of counted subscriptions with status `active`. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     * @throws SdkError When active is omitted; use hasActive() or valueOrDefault().
     */
    public function getActive(): mixed { return $this->get('active'); }
    public function hasActive(): bool { return $this->has('active'); }
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
