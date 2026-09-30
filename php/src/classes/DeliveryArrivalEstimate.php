<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $earliest_date
 * @property-read string $latest_date
 * @property-read string $timezone
 * Presence-aware response; omitted fields throw when accessed. */
final class DeliveryArrivalEstimate extends Model {
    /** @param array{'earliest_date': string, 'latest_date': string, 'timezone': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryArrivalEstimate')); }
    /** @return string
     * @throws SdkError When earliest_date is omitted; use hasEarliestDate() or valueOrDefault().
     */
    public function getEarliestDate(): string { return $this->get('earliest_date'); }
    public function hasEarliestDate(): bool { return $this->has('earliest_date'); }
    /** @return string
     * @throws SdkError When latest_date is omitted; use hasLatestDate() or valueOrDefault().
     */
    public function getLatestDate(): string { return $this->get('latest_date'); }
    public function hasLatestDate(): bool { return $this->has('latest_date'); }
    /** @return string
     * @throws SdkError When timezone is omitted; use hasTimezone() or valueOrDefault().
     */
    public function getTimezone(): string { return $this->get('timezone'); }
    public function hasTimezone(): bool { return $this->has('timezone'); }
}
