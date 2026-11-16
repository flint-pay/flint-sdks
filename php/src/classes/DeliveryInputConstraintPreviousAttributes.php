<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<string>|null $allowed_values
 * @property-read string|null $earliest_at
 * @property-read string|null $format
 * @property-read string|null $latest_at
 * @property-read int|null $maximum_length
 * @property-read int|null $minimum_length
 * @property-read list<DeliveryWindowResourcePreviousAttributes>|null $offered_windows
 * @property-read list<string>|null $supported_countries
 * @property-read string|null $type
 * Presence-aware response; omitted optional fields return null. */
final class DeliveryInputConstraintPreviousAttributes extends Model {
    /** @param array{'allowed_values'?: mixed, 'earliest_at'?: mixed, 'format'?: mixed, 'latest_at'?: mixed, 'maximum_length'?: mixed, 'minimum_length'?: mixed, 'offered_windows'?: mixed, 'supported_countries'?: mixed, 'type'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryInputConstraintPreviousAttributes')); }
    /** Values the input must be one of. anyOf[1] (Value): Array of string. Values the input must be one of. anyOf[1][] (Value): string. anyOf[2] (Value): null.
     * @return list<string>|null
     */
    public function getAllowedValues(): array|null { return $this->get('allowed_values'); }
    public function hasAllowedValues(): bool { return $this->has('allowed_values'); }
    /** Earliest time the input can name. anyOf[1] (Value): string. Earliest time the input can name. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getEarliestAt(): string|null { return $this->get('earliest_at'); }
    public function hasEarliestAt(): bool { return $this->has('earliest_at'); }
    /** Format the input must follow. anyOf[1] (Value): string. Format the input must follow. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getFormat(): string|null { return $this->get('format'); }
    public function hasFormat(): bool { return $this->has('format'); }
    /** Latest time the input can name. anyOf[1] (Value): string. Latest time the input can name. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getLatestAt(): string|null { return $this->get('latest_at'); }
    public function hasLatestAt(): bool { return $this->has('latest_at'); }
    /** Most characters the input can have. anyOf[1] (Value): integer. Most characters the input can have. Format: int32. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getMaximumLength(): int|null { return $this->get('maximum_length'); }
    public function hasMaximumLength(): bool { return $this->has('maximum_length'); }
    /** Fewest characters the input can have. anyOf[1] (Value): integer. Fewest characters the input can have. Format: int32. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getMinimumLength(): int|null { return $this->get('minimum_length'); }
    public function hasMinimumLength(): bool { return $this->has('minimum_length'); }
    /** Delivery windows the buyer can choose from. anyOf[1] (Value): Array of {@see DeliveryWindowResourcePreviousAttributes}. Delivery windows the buyer can choose from. anyOf[1][] (Value): {@see DeliveryWindowResourcePreviousAttributes}. anyOf[2] (Value): null.
     * @return list<DeliveryWindowResourcePreviousAttributes>|null
     */
    public function getOfferedWindows(): array|null { return $this->get('offered_windows'); }
    public function hasOfferedWindows(): bool { return $this->has('offered_windows'); }
    /** Sorted ISO 3166-1 alpha-2 countries the delivery methods can serve, derived from eligibility and rate-table conditions. Only methods that need this address contribute countries. Alternative methods are unioned within each choice group; intersect across groups and, for automatic tax, order.tax.supported_countries. A listed country may still require state, postal code, or other eligibility input. Excludes CU, IR, KP, and SY; sanctioned regions within UA and RU are excluded when address data identifies them. anyOf[1] (Value): Array of string. Sorted ISO 3166-1 alpha-2 countries the delivery methods can serve, derived from eligibility and rate-table conditions. Only methods that need this address contribute countries. Alternative methods are unioned within each choice group; intersect across groups and, for automatic tax, order.tax.supported_countries. A listed country may still require state, postal code, or other eligibility input. Excludes CU, IR, KP, and SY; sanctioned regions within UA and RU are excluded when address data identifies them. anyOf[1][] (Value): string. anyOf[2] (Value): null.
     * @return list<string>|null
     */
    public function getSupportedCountries(): array|null { return $this->get('supported_countries'); }
    public function hasSupportedCountries(): bool { return $this->has('supported_countries'); }
    /** Kind of input the requirement asks for. Value enum: "string", "address_field", "email", "phone", "time_window", "coordinate", "caller_supplied_rate". anyOf[1] (Value): string. Kind of input the requirement asks for. Value enum: "string", "address_field", "email", "phone", "time_window", "coordinate", "caller_supplied_rate". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getType(): string|null { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
}
