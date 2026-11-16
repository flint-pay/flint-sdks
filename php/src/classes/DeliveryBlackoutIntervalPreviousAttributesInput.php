<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $end_local
 * @property-read string|null $start_local
 * Presence-aware input; omitted fields throw when accessed. */
final class DeliveryBlackoutIntervalPreviousAttributesInput extends Model {
    /** @param array{'end_local'?: string|null, 'start_local'?: string|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryBlackoutIntervalPreviousAttributesInput')); }
    /** Local date and time the blackout ends, as `YYYY-MM-DDTHH:MM:SS` in the schedule's timezone. anyOf[1] (Value): string. Local date and time the blackout ends, as `YYYY-MM-DDTHH:MM:SS` in the schedule's timezone. minLength: 1. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When end_local is omitted; use hasEndLocal() or valueOrDefault().
     */
    public function getEndLocal(): mixed { return $this->get('end_local'); }
    public function hasEndLocal(): bool { return $this->has('end_local'); }
    /** Local date and time the blackout starts, as `YYYY-MM-DDTHH:MM:SS` in the schedule's timezone. anyOf[1] (Value): string. Local date and time the blackout starts, as `YYYY-MM-DDTHH:MM:SS` in the schedule's timezone. minLength: 1. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When start_local is omitted; use hasStartLocal() or valueOrDefault().
     */
    public function getStartLocal(): mixed { return $this->get('start_local'); }
    public function hasStartLocal(): bool { return $this->has('start_local'); }
}
