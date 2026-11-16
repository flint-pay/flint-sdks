<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $end_local
 * @property-read string|null $start_local
 * Presence-aware response; omitted optional fields return null. */
final class DeliveryBlackoutIntervalPreviousAttributes extends Model {
    /** @param array{'end_local'?: mixed, 'start_local'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryBlackoutIntervalPreviousAttributes')); }
    /** Local date and time the blackout ends, as `YYYY-MM-DDTHH:MM:SS` in the schedule's timezone. anyOf[1] (Value): string. Local date and time the blackout ends, as `YYYY-MM-DDTHH:MM:SS` in the schedule's timezone. minLength: 1. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getEndLocal(): string|null { return $this->get('end_local'); }
    public function hasEndLocal(): bool { return $this->has('end_local'); }
    /** Local date and time the blackout starts, as `YYYY-MM-DDTHH:MM:SS` in the schedule's timezone. anyOf[1] (Value): string. Local date and time the blackout starts, as `YYYY-MM-DDTHH:MM:SS` in the schedule's timezone. minLength: 1. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getStartLocal(): string|null { return $this->get('start_local'); }
    public function hasStartLocal(): bool { return $this->has('start_local'); }
}
