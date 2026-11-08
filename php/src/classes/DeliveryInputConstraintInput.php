<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<string> $allowed_values
 * @property-read string|\DateTimeInterface $earliest_at
 * @property-read string $format
 * @property-read string|\DateTimeInterface $latest_at
 * @property-read int $maximum_length
 * @property-read int $minimum_length
 * @property-read list<DeliveryWindowResourceInput|array<array-key, mixed>|\stdClass> $offered_windows
 * @property-read list<string> $supported_countries
 * @property-read string $type
 * Presence-aware input; omitted fields throw when accessed. */
final class DeliveryInputConstraintInput extends Model {
    /** @param array{'allowed_values'?: list<string>, 'earliest_at'?: string|\DateTimeInterface, 'format'?: string, 'latest_at'?: string|\DateTimeInterface, 'maximum_length'?: int, 'minimum_length'?: int, 'offered_windows'?: list<DeliveryWindowResourceInput|array<array-key, mixed>|\stdClass>, 'supported_countries'?: list<string>, 'type': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryInputConstraintInput')); }
    /**  [] (Value): string.
     * @return list<string>
     * @throws SdkError When allowed_values is omitted; use hasAllowedValues() or valueOrDefault().
     */
    public function getAllowedValues(): array { return $this->get('allowed_values'); }
    public function hasAllowedValues(): bool { return $this->has('allowed_values'); }
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When earliest_at is omitted; use hasEarliestAt() or valueOrDefault().
     */
    public function getEarliestAt(): string|\DateTimeInterface { return $this->get('earliest_at'); }
    public function hasEarliestAt(): bool { return $this->has('earliest_at'); }
    /** format
     * @return string
     * @throws SdkError When format is omitted; use hasFormat() or valueOrDefault().
     */
    public function getFormat(): string { return $this->get('format'); }
    public function hasFormat(): bool { return $this->has('format'); }
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When latest_at is omitted; use hasLatestAt() or valueOrDefault().
     */
    public function getLatestAt(): string|\DateTimeInterface { return $this->get('latest_at'); }
    public function hasLatestAt(): bool { return $this->has('latest_at'); }
    /** Format: int32.
     * @return int
     * @throws SdkError When maximum_length is omitted; use hasMaximumLength() or valueOrDefault().
     */
    public function getMaximumLength(): int { return $this->get('maximum_length'); }
    public function hasMaximumLength(): bool { return $this->has('maximum_length'); }
    /** Format: int32.
     * @return int
     * @throws SdkError When minimum_length is omitted; use hasMinimumLength() or valueOrDefault().
     */
    public function getMinimumLength(): int { return $this->get('minimum_length'); }
    public function hasMinimumLength(): bool { return $this->has('minimum_length'); }
    /**  [] (Value): {@see DeliveryWindowResourceInput}. A time window a buyer can choose for a delivery, with its start, end, price, and the last moment it can be chosen.
     * @return list<DeliveryWindowResourceInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When offered_windows is omitted; use hasOfferedWindows() or valueOrDefault().
     */
    public function getOfferedWindows(): array { return $this->get('offered_windows'); }
    public function hasOfferedWindows(): bool { return $this->has('offered_windows'); }
    /** Sorted ISO 3166-1 alpha-2 countries the delivery methods can serve, derived from eligibility and rate-table conditions. Alternative methods are unioned within each choice group; intersect across groups and, for automatic tax, order.tax.supported_countries. A listed country may still require state, postal code, or other eligibility input. Excludes CU, IR, KP, and SY; sanctioned regions within UA and RU are excluded when address data identifies them. [] (Value): string.
     * @return list<string>
     * @throws SdkError When supported_countries is omitted; use hasSupportedCountries() or valueOrDefault().
     */
    public function getSupportedCountries(): array { return $this->get('supported_countries'); }
    public function hasSupportedCountries(): bool { return $this->has('supported_countries'); }
    /** Value enum: "string", "address_field", "email", "phone", "time_window", "coordinate", "caller_supplied_rate".
     * @return string
     * @throws SdkError When type is omitted; use hasType() or valueOrDefault().
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
}
