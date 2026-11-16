<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $earliest_date
 * @property-read string|null $latest_date
 * @property-read string|null $timezone
 * Presence-aware input; omitted fields throw when accessed. */
final class DeliveryArrivalEstimatePreviousAttributesInput extends Model {
    /** @param array{'earliest_date'?: string|null, 'latest_date'?: string|null, 'timezone'?: string|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryArrivalEstimatePreviousAttributesInput')); }
    /** Calendar date in the option timezone. Do not parse it as a UTC timestamp. anyOf[1] (Value): string. Calendar date in the option timezone. Do not parse it as a UTC timestamp. Format: date. Example: "2026-08-02". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When earliest_date is omitted; use hasEarliestDate() or valueOrDefault().
     */
    public function getEarliestDate(): mixed { return $this->get('earliest_date'); }
    public function hasEarliestDate(): bool { return $this->has('earliest_date'); }
    /** Calendar date in the option timezone. Do not parse it as a UTC timestamp. anyOf[1] (Value): string. Calendar date in the option timezone. Do not parse it as a UTC timestamp. Format: date. Example: "2026-08-02". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When latest_date is omitted; use hasLatestDate() or valueOrDefault().
     */
    public function getLatestDate(): mixed { return $this->get('latest_date'); }
    public function hasLatestDate(): bool { return $this->has('latest_date'); }
    /** Uses an IANA time zone name. anyOf[1] (Value): string. Uses an IANA time zone name. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When timezone is omitted; use hasTimezone() or valueOrDefault().
     */
    public function getTimezone(): mixed { return $this->get('timezone'); }
    public function hasTimezone(): bool { return $this->has('timezone'); }
}
