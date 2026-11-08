<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int $cycle_count
 * @property-read string $type
 * Presence-aware response; omitted optional fields return null. */
final class SubscriptionEndAfterCycles extends Model {
    /** @param array{'cycle_count': int, 'type': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionEndAfterCycles')); }
    /** Total charged billing cycles, including imported completed cycles. Format: int32. minimum: 1. maximum: 1200.
     * @return int
     */
    public function getCycleCount(): int { return $this->get('cycle_count'); }
    public function hasCycleCount(): bool { return $this->has('cycle_count'); }
    /** How this automatic end is measured. Value enum: "cycles".
     * @return string
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
}
