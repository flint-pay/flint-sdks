<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int $active
 * @property-read int $past_due
 * @property-read int $paused
 * Presence-aware response; omitted optional fields return null. */
final class SubscriptionCounts extends Model {
    /** @param array{'active': int, 'past_due': int, 'paused': int, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionCounts')); }
    /** Format: int64.
     * @return int
     */
    public function getActive(): int { return $this->get('active'); }
    public function hasActive(): bool { return $this->has('active'); }
    /** Format: int64.
     * @return int
     */
    public function getPastDue(): int { return $this->get('past_due'); }
    public function hasPastDue(): bool { return $this->has('past_due'); }
    /** Format: int64.
     * @return int
     */
    public function getPaused(): int { return $this->get('paused'); }
    public function hasPaused(): bool { return $this->has('paused'); }
}
