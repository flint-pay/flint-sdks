<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $active
 * @property-read string $past_due
 * @property-read string $paused
 * Presence-aware response; omitted optional fields return null. */
final class SubscriptionCounts extends Model {
    /** @param array{'active': string, 'past_due': string, 'paused': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionCounts')); }
    /** Shape $ (Value): integer string. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return string
     */
    public function getActive(): string { return $this->get('active'); }
    public function hasActive(): bool { return $this->has('active'); }
    /** Shape $ (Value): integer string. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return string
     */
    public function getPastDue(): string { return $this->get('past_due'); }
    public function hasPastDue(): bool { return $this->has('past_due'); }
    /** Shape $ (Value): integer string. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return string
     */
    public function getPaused(): string { return $this->get('paused'); }
    public function hasPaused(): bool { return $this->has('paused'); }
}
