<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<string>|null $allowed_values
 * @property-read string|\DateTimeInterface|null $earliest_at
 * @property-read string|null $format
 * @property-read string|\DateTimeInterface|null $latest_at
 * @property-read int|null $maximum_length
 * @property-read int|null $minimum_length
 * @property-read list<DeliveryWindowResourcePreviousAttributesInput|array<array-key, mixed>|\stdClass>|null $offered_windows
 * @property-read list<string>|null $supported_countries
 * @property-read string|null $type
 * Presence-aware input; omitted fields throw when accessed. */
final class DeliveryInputConstraintPreviousAttributesInput extends Model {
    /** @param array{'allowed_values'?: list<string>|null, 'earliest_at'?: string|\DateTimeInterface|null, 'format'?: string|null, 'latest_at'?: string|\DateTimeInterface|null, 'maximum_length'?: int|null, 'minimum_length'?: int|null, 'offered_windows'?: list<DeliveryWindowResourcePreviousAttributesInput|array<array-key, mixed>|\stdClass>|null, 'supported_countries'?: list<string>|null, 'type'?: string|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryInputConstraintPreviousAttributesInput')); }
    /** Values the input must be one of. anyOf[1] (Value): Array of string. Values the input must be one of. anyOf[1][] (Value): string. anyOf[2] (Value): null.
     * @return list<string>|null
     * @throws SdkError When allowed_values is omitted; use hasAllowedValues() or valueOrDefault().
     */
    public function getAllowedValues(): mixed { return $this->get('allowed_values'); }
    public function hasAllowedValues(): bool { return $this->has('allowed_values'); }
    /** Earliest time the input can name. anyOf[1] (Value): string. Earliest time the input can name. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When earliest_at is omitted; use hasEarliestAt() or valueOrDefault().
     */
    public function getEarliestAt(): mixed { return $this->get('earliest_at'); }
    public function hasEarliestAt(): bool { return $this->has('earliest_at'); }
    /** Format the input must follow. anyOf[1] (Value): string. Format the input must follow. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When format is omitted; use hasFormat() or valueOrDefault().
     */
    public function getFormat(): mixed { return $this->get('format'); }
    public function hasFormat(): bool { return $this->has('format'); }
    /** Latest time the input can name. anyOf[1] (Value): string. Latest time the input can name. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When latest_at is omitted; use hasLatestAt() or valueOrDefault().
     */
    public function getLatestAt(): mixed { return $this->get('latest_at'); }
    public function hasLatestAt(): bool { return $this->has('latest_at'); }
    /** Most characters the input can have. anyOf[1] (Value): integer. Most characters the input can have. Format: int32. anyOf[2] (Value): null.
     * @return int|null
     * @throws SdkError When maximum_length is omitted; use hasMaximumLength() or valueOrDefault().
     */
    public function getMaximumLength(): mixed { return $this->get('maximum_length'); }
    public function hasMaximumLength(): bool { return $this->has('maximum_length'); }
    /** Fewest characters the input can have. anyOf[1] (Value): integer. Fewest characters the input can have. Format: int32. anyOf[2] (Value): null.
     * @return int|null
     * @throws SdkError When minimum_length is omitted; use hasMinimumLength() or valueOrDefault().
     */
    public function getMinimumLength(): mixed { return $this->get('minimum_length'); }
    public function hasMinimumLength(): bool { return $this->has('minimum_length'); }
    /** Delivery windows the buyer can choose from. anyOf[1] (Value): Array of {@see DeliveryWindowResourcePreviousAttributesInput}. Delivery windows the buyer can choose from. anyOf[1][] (Value): {@see DeliveryWindowResourcePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return list<DeliveryWindowResourcePreviousAttributesInput|array<array-key, mixed>|\stdClass>|null
     * @throws SdkError When offered_windows is omitted; use hasOfferedWindows() or valueOrDefault().
     */
    public function getOfferedWindows(): mixed { return $this->get('offered_windows'); }
    public function hasOfferedWindows(): bool { return $this->has('offered_windows'); }
    /** Sorted ISO 3166-1 alpha-2 countries the delivery methods can serve, derived from eligibility and rate-table conditions. Only methods that need this address contribute countries. Alternative methods are unioned within each choice group; intersect across groups and, for automatic tax, order.tax.supported_countries. A listed country may still require state, postal code, or other eligibility input. Excludes CU, IR, KP, and SY; sanctioned regions within UA and RU are excluded when address data identifies them. anyOf[1] (Value): Array of string. Sorted ISO 3166-1 alpha-2 countries the delivery methods can serve, derived from eligibility and rate-table conditions. Only methods that need this address contribute countries. Alternative methods are unioned within each choice group; intersect across groups and, for automatic tax, order.tax.supported_countries. A listed country may still require state, postal code, or other eligibility input. Excludes CU, IR, KP, and SY; sanctioned regions within UA and RU are excluded when address data identifies them. anyOf[1][] (Value): string. anyOf[2] (Value): null.
     * @return list<string>|null
     * @throws SdkError When supported_countries is omitted; use hasSupportedCountries() or valueOrDefault().
     */
    public function getSupportedCountries(): mixed { return $this->get('supported_countries'); }
    public function hasSupportedCountries(): bool { return $this->has('supported_countries'); }
    /** Kind of input the requirement asks for. Value enum: "string", "address_field", "email", "phone", "time_window", "coordinate", "caller_supplied_rate". anyOf[1] (Value): string. Kind of input the requirement asks for. Value enum: "string", "address_field", "email", "phone", "time_window", "coordinate", "caller_supplied_rate". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When type is omitted; use hasType() or valueOrDefault().
     */
    public function getType(): mixed { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
}
