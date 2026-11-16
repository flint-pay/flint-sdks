<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int|null $cycle_count
 * @property-read string|null $type
 * Presence-aware input; omitted fields throw when accessed. */
final class SubscriptionEndAfterCyclesPreviousAttributesInput extends Model {
    /** @param array{'cycle_count'?: int|null, 'type'?: string|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionEndAfterCyclesPreviousAttributesInput')); }
    /** Total charged billing cycles, including imported completed cycles. anyOf[1] (Value): integer. Total charged billing cycles, including imported completed cycles. Format: int32. minimum: 1. maximum: 1200. anyOf[2] (Value): null.
     * @return int|null
     * @throws SdkError When cycle_count is omitted; use hasCycleCount() or valueOrDefault().
     */
    public function getCycleCount(): mixed { return $this->get('cycle_count'); }
    public function hasCycleCount(): bool { return $this->has('cycle_count'); }
    /** How this automatic end is measured. Value enum: "cycles". anyOf[1] (Value): string. How this automatic end is measured. Value enum: "cycles". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When type is omitted; use hasType() or valueOrDefault().
     */
    public function getType(): mixed { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
}
