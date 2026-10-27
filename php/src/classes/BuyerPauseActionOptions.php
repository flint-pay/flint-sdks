<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?int $max_pause_duration_cycles
 * Presence-aware response; omitted optional fields return null. */
final class BuyerPauseActionOptions extends Model {
    /** @param array{'max_pause_duration_cycles'?: int, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BuyerPauseActionOptions')); }
    /** Shape $ (Value): integer. When present, pause_duration_cycles is required and must be between 1 and this value. When absent, omit pause_duration_cycles to pause until the buyer resumes. Format: int32. minimum: 1. maximum: 12.
     * @return ?int
     */
    public function getMaxPauseDurationCycles(): ?int { return $this->get('max_pause_duration_cycles'); }
    public function hasMaxPauseDurationCycles(): bool { return $this->has('max_pause_duration_cycles'); }
}
