<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $duration_seconds
 * @property-read string $starts_at_event
 * Presence-aware response; omitted fields throw when accessed. */
final class ReturnWindow extends Model {
    /** @param array{'duration_seconds': string, 'starts_at_event': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnWindow')); }
    /** @return string
     * @throws SdkError When duration_seconds is omitted; use hasDurationSeconds() or valueOrDefault().
     */
    public function getDurationSeconds(): string { return $this->get('duration_seconds'); }
    public function hasDurationSeconds(): bool { return $this->has('duration_seconds'); }
    /** @return string
     * @throws SdkError When starts_at_event is omitted; use hasStartsAtEvent() or valueOrDefault().
     */
    public function getStartsAtEvent(): string { return $this->get('starts_at_event'); }
    public function hasStartsAtEvent(): bool { return $this->has('starts_at_event'); }
}
