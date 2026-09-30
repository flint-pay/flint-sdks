<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<string> $allowed_values
 * @property-read string $earliest_at
 * @property-read string $format
 * @property-read string $latest_at
 * @property-read int $maximum_length
 * @property-read int $minimum_length
 * @property-read list<DeliveryWindowResource> $offered_windows
 * @property-read list<string> $supported_countries
 * @property-read string $type
 * Presence-aware response; omitted fields throw when accessed. */
final class DeliveryInputConstraint extends Model {
    /** @param array{'allowed_values'?: list<string>, 'earliest_at'?: string, 'format'?: string, 'latest_at'?: string, 'maximum_length'?: int, 'minimum_length'?: int, 'offered_windows'?: list<mixed>, 'supported_countries'?: list<string>, 'type': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryInputConstraint')); }
    /** @return list<string>
     * @throws SdkError When allowed_values is omitted; use hasAllowedValues() or valueOrDefault().
     */
    public function getAllowedValues(): array { return $this->get('allowed_values'); }
    public function hasAllowedValues(): bool { return $this->has('allowed_values'); }
    /** @return string
     * @throws SdkError When earliest_at is omitted; use hasEarliestAt() or valueOrDefault().
     */
    public function getEarliestAt(): string { return $this->get('earliest_at'); }
    public function hasEarliestAt(): bool { return $this->has('earliest_at'); }
    /** @return string
     * @throws SdkError When format is omitted; use hasFormat() or valueOrDefault().
     */
    public function getFormat(): string { return $this->get('format'); }
    public function hasFormat(): bool { return $this->has('format'); }
    /** @return string
     * @throws SdkError When latest_at is omitted; use hasLatestAt() or valueOrDefault().
     */
    public function getLatestAt(): string { return $this->get('latest_at'); }
    public function hasLatestAt(): bool { return $this->has('latest_at'); }
    /** @return int
     * @throws SdkError When maximum_length is omitted; use hasMaximumLength() or valueOrDefault().
     */
    public function getMaximumLength(): int { return $this->get('maximum_length'); }
    public function hasMaximumLength(): bool { return $this->has('maximum_length'); }
    /** @return int
     * @throws SdkError When minimum_length is omitted; use hasMinimumLength() or valueOrDefault().
     */
    public function getMinimumLength(): int { return $this->get('minimum_length'); }
    public function hasMinimumLength(): bool { return $this->has('minimum_length'); }
    /** @return list<DeliveryWindowResource>
     * @throws SdkError When offered_windows is omitted; use hasOfferedWindows() or valueOrDefault().
     */
    public function getOfferedWindows(): array { return $this->get('offered_windows'); }
    public function hasOfferedWindows(): bool { return $this->has('offered_windows'); }
    /** @return list<string>
     * @throws SdkError When supported_countries is omitted; use hasSupportedCountries() or valueOrDefault().
     */
    public function getSupportedCountries(): array { return $this->get('supported_countries'); }
    public function hasSupportedCountries(): bool { return $this->has('supported_countries'); }
    /** @return string
     * @throws SdkError When type is omitted; use hasType() or valueOrDefault().
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
}
