<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int|null $active
 * @property-read int|null $past_due
 * @property-read int|null $paused
 * Presence-aware response; omitted optional fields return null. */
final class SubscriptionCountsPreviousAttributes extends Model {
    /** @param array{'active'?: mixed, 'past_due'?: mixed, 'paused'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionCountsPreviousAttributes')); }
    /** Number of counted subscriptions with status `active`. anyOf[1] (Value): integer. Number of counted subscriptions with status `active`. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getActive(): int|null { return $this->get('active'); }
    public function hasActive(): bool { return $this->has('active'); }
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
