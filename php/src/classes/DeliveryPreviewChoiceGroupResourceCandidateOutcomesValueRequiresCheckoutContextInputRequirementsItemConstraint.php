<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?list<string> $allowed_values
 * @property-read ?string $earliest_at
 * @property-read ?string $format
 * @property-read ?string $latest_at
 * @property-read ?int $maximum_length
 * @property-read ?int $minimum_length
 * @property-read ?list<DeliveryPreviewChoiceGroupResourceCandidateOutcomesValueRequiresCheckoutContextInputRequirementsItemConstraintOfferedWindowsItem> $offered_windows
 * @property-read ?list<string> $supported_countries
 * @property-read string $type
 * Presence-aware response; omitted optional fields return null. */
final class DeliveryPreviewChoiceGroupResourceCandidateOutcomesValueRequiresCheckoutContextInputRequirementsItemConstraint extends Model {
    /** @param array{'allowed_values'?: list<string>, 'earliest_at'?: string, 'format'?: string, 'latest_at'?: string, 'maximum_length'?: int, 'minimum_length'?: int, 'offered_windows'?: list<mixed>, 'supported_countries'?: list<string>, 'type': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryPreviewChoiceGroupResourceCandidateOutcomesValueRequiresCheckoutContextInputRequirementsItemConstraint')); }
    /** Values the input must be one of. [] (Value): string.
     * @return ?list<string>
     */
    public function getAllowedValues(): ?array { return $this->get('allowed_values'); }
    public function hasAllowedValues(): bool { return $this->has('allowed_values'); }
    /** Earliest time the input can name. Format: date-time.
     * @return ?string
     */
    public function getEarliestAt(): ?string { return $this->get('earliest_at'); }
    public function hasEarliestAt(): bool { return $this->has('earliest_at'); }
    /** Format the input must follow.
     * @return ?string
     */
    public function getFormat(): ?string { return $this->get('format'); }
    public function hasFormat(): bool { return $this->has('format'); }
    /** Latest time the input can name. Format: date-time.
     * @return ?string
     */
    public function getLatestAt(): ?string { return $this->get('latest_at'); }
    public function hasLatestAt(): bool { return $this->has('latest_at'); }
    /** Most characters the input can have. Format: int32.
     * @return ?int
     */
    public function getMaximumLength(): ?int { return $this->get('maximum_length'); }
    public function hasMaximumLength(): bool { return $this->has('maximum_length'); }
    /** Fewest characters the input can have. Format: int32.
     * @return ?int
     */
    public function getMinimumLength(): ?int { return $this->get('minimum_length'); }
    public function hasMinimumLength(): bool { return $this->has('minimum_length'); }
    /** Delivery windows the buyer can choose from. [] (Value): {@see DeliveryPreviewChoiceGroupResourceCandidateOutcomesValueRequiresCheckoutContextInputRequirementsItemConstraintOfferedWindowsItem}. A time window a buyer can choose for a delivery, with its start, end, price, and the last moment it can be chosen.
     * @return ?list<DeliveryPreviewChoiceGroupResourceCandidateOutcomesValueRequiresCheckoutContextInputRequirementsItemConstraintOfferedWindowsItem>
     */
    public function getOfferedWindows(): ?array { return $this->get('offered_windows'); }
    public function hasOfferedWindows(): bool { return $this->has('offered_windows'); }
    /** Sorted ISO 3166-1 alpha-2 countries the delivery methods can serve, derived from eligibility and rate-table conditions. Alternative methods are unioned within each choice group; intersect across groups and, for automatic tax, order.tax.supported_countries. A listed country may still require state, postal code, or other eligibility input. Excludes CU, IR, KP, and SY; sanctioned regions within UA and RU are excluded when address data identifies them. [] (Value): string.
     * @return ?list<string>
     */
    public function getSupportedCountries(): ?array { return $this->get('supported_countries'); }
    public function hasSupportedCountries(): bool { return $this->has('supported_countries'); }
    /** Kind of input the requirement asks for. Value enum: "string", "address_field", "email", "phone", "time_window", "coordinate", "caller_supplied_rate".
     * @return string
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
}
