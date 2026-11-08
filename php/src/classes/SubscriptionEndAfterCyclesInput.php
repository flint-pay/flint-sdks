<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int $cycle_count
 * @property-read string $type
 * Presence-aware input; omitted fields throw when accessed. */
final class SubscriptionEndAfterCyclesInput extends Model {
    /** @param array{'cycle_count': int, 'type': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionEndAfterCyclesInput')); }
    /** Total charged billing cycles, including imported completed cycles. Format: int32. minimum: 1. maximum: 1200.
     * @return int
     * @throws SdkError When cycle_count is omitted; use hasCycleCount() or valueOrDefault().
     */
    public function getCycleCount(): int { return $this->get('cycle_count'); }
    public function hasCycleCount(): bool { return $this->has('cycle_count'); }
    /** How this automatic end is measured. Value enum: "cycles".
     * @return string
     * @throws SdkError When type is omitted; use hasType() or valueOrDefault().
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
}
