<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int $duration_seconds
 * @property-read string $starts_at_event
 * Presence-aware response; omitted optional fields return null. */
final class ReturnWindow extends Model {
    /** @param array{'duration_seconds': int, 'starts_at_event': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnWindow')); }
    /** Format: int64.
     * @return int
     */
    public function getDurationSeconds(): int { return $this->get('duration_seconds'); }
    public function hasDurationSeconds(): bool { return $this->has('duration_seconds'); }
    /** Value enum: "fulfilled", "delivered", "picked_up", "service_completed".
     * @return string
     */
    public function getStartsAtEvent(): string { return $this->get('starts_at_event'); }
    public function hasStartsAtEvent(): bool { return $this->has('starts_at_event'); }
}
