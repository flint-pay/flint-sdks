<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int|null $cycle_count
 * @property-read string|null $type
 * Presence-aware response; omitted optional fields return null. */
final class SubscriptionEndAfterCyclesPreviousAttributes extends Model {
    /** @param array{'cycle_count'?: mixed, 'type'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionEndAfterCyclesPreviousAttributes')); }
    /** Total charged billing cycles, including imported completed cycles. anyOf[1] (Value): integer. Total charged billing cycles, including imported completed cycles. Format: int32. minimum: 1. maximum: 1200. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getCycleCount(): int|null { return $this->get('cycle_count'); }
    public function hasCycleCount(): bool { return $this->has('cycle_count'); }
    /** How this automatic end is measured. Value enum: "cycles". anyOf[1] (Value): string. How this automatic end is measured. Value enum: "cycles". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getType(): string|null { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
}
