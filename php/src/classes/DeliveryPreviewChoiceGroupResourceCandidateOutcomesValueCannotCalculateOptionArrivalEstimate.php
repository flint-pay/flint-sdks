<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $earliest_date
 * @property-read string $latest_date
 * @property-read string $timezone
 * Presence-aware response; omitted optional fields return null. */
final class DeliveryPreviewChoiceGroupResourceCandidateOutcomesValueCannotCalculateOptionArrivalEstimate extends Model {
    /** @param array{'earliest_date': string, 'latest_date': string, 'timezone': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryPreviewChoiceGroupResourceCandidateOutcomesValueCannotCalculateOptionArrivalEstimate')); }
    /** Shape $ (Value): string. Calendar date in the option timezone. Do not parse it as a UTC timestamp. Format: date.
     * @return string
     */
    public function getEarliestDate(): string { return $this->get('earliest_date'); }
    public function hasEarliestDate(): bool { return $this->has('earliest_date'); }
    /** Shape $ (Value): string. Calendar date in the option timezone. Do not parse it as a UTC timestamp. Format: date.
     * @return string
     */
    public function getLatestDate(): string { return $this->get('latest_date'); }
    public function hasLatestDate(): bool { return $this->has('latest_date'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getTimezone(): string { return $this->get('timezone'); }
    public function hasTimezone(): bool { return $this->has('timezone'); }
}
