<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $earliest_date
 * @property-read string|null $latest_date
 * @property-read string|null $timezone
 * Presence-aware response; omitted optional fields return null. */
final class DeliveryArrivalEstimatePreviousAttributes extends Model {
    /** @param array{'earliest_date'?: mixed, 'latest_date'?: mixed, 'timezone'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryArrivalEstimatePreviousAttributes')); }
    /** Calendar date in the option timezone. Do not parse it as a UTC timestamp. anyOf[1] (Value): string. Calendar date in the option timezone. Do not parse it as a UTC timestamp. Format: date. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getEarliestDate(): string|null { return $this->get('earliest_date'); }
    public function hasEarliestDate(): bool { return $this->has('earliest_date'); }
    /** Calendar date in the option timezone. Do not parse it as a UTC timestamp. anyOf[1] (Value): string. Calendar date in the option timezone. Do not parse it as a UTC timestamp. Format: date. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getLatestDate(): string|null { return $this->get('latest_date'); }
    public function hasLatestDate(): bool { return $this->has('latest_date'); }
    /** Uses an IANA time zone name. anyOf[1] (Value): string. Uses an IANA time zone name. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getTimezone(): string|null { return $this->get('timezone'); }
    public function hasTimezone(): bool { return $this->has('timezone'); }
}
