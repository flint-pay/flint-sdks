<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $duration_seconds
 * @property-read string $starts_at_event
 * Presence-aware input; omitted fields throw when accessed. */
final class ReturnWindowInput extends Model {
    /** @param array{'duration_seconds': string, 'starts_at_event': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnWindowInput')); }
    /** Shape $ (Value): integer string. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return string
     * @throws SdkError When duration_seconds is omitted; use hasDurationSeconds() or valueOrDefault().
     */
    public function getDurationSeconds(): string { return $this->get('duration_seconds'); }
    public function hasDurationSeconds(): bool { return $this->has('duration_seconds'); }
    /** Shape $ (Value): string.  Value enum: "fulfilled", "delivered", "picked_up", "service_completed".
     * @return string
     * @throws SdkError When starts_at_event is omitted; use hasStartsAtEvent() or valueOrDefault().
     */
    public function getStartsAtEvent(): string { return $this->get('starts_at_event'); }
    public function hasStartsAtEvent(): bool { return $this->has('starts_at_event'); }
}
