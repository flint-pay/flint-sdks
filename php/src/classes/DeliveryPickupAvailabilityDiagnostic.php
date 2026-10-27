<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $code
 * @property-read string $diagnostic_id
 * @property-read string $location_id
 * @property-read string $occurred_at
 * @property-read string $outcome
 * @property-read string $recommended_action
 * @property-read bool $retryable
 * @property-read string $scope
 * @property-read string $summary
 * Presence-aware response; omitted optional fields return null. */
final class DeliveryPickupAvailabilityDiagnostic extends Model {
    /** @param array{'code': string, 'diagnostic_id': string, 'location_id': string, 'occurred_at': string, 'outcome': string, 'recommended_action': string, 'retryable': bool, 'scope': string, 'summary': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryPickupAvailabilityDiagnostic')); }
    /** Shape $ (Value): string. Stable reason a configured pickup location was left out of the results or cannot supply the order. - `pickup_location_inactive`: The Location is inactive, so it was left out. - `pickup_location_geography_unavailable`: The Location has no usable published geography, so it was left out. - `pickup_location_inventory_unavailable`: The Location does not allocate inventory, so it cannot supply the order's tracked items. It is listed with an unavailable outcome. Items without tracked inventory need no allocation. - `pickup_location_dependency_failure`: Flint could not resolve the configured Location. Value enum: "pickup_location_inactive", "pickup_location_geography_unavailable", "pickup_location_inventory_unavailable", "pickup_location_dependency_failure".
     * @return string
     */
    public function getCode(): string { return $this->get('code'); }
    public function hasCode(): bool { return $this->has('code'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getDiagnosticId(): string { return $this->get('diagnostic_id'); }
    public function hasDiagnosticId(): bool { return $this->has('diagnostic_id'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getLocationId(): string { return $this->get('location_id'); }
    public function hasLocationId(): bool { return $this->has('location_id'); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return string
     */
    public function getOccurredAt(): string { return $this->get('occurred_at'); }
    public function hasOccurredAt(): bool { return $this->has('occurred_at'); }
    /** Shape $ (Value): string.  Value enum: "unavailable", "cannot_calculate".
     * @return string
     */
    public function getOutcome(): string { return $this->get('outcome'); }
    public function hasOutcome(): bool { return $this->has('outcome'); }
    /** Shape $ (Value): string.  Value enum: "review_configuration", "retry".
     * @return string
     */
    public function getRecommendedAction(): string { return $this->get('recommended_action'); }
    public function hasRecommendedAction(): bool { return $this->has('recommended_action'); }
    /** Shape $ (Value): boolean.
     * @return bool
     */
    public function getRetryable(): bool { return $this->get('retryable'); }
    public function hasRetryable(): bool { return $this->has('retryable'); }
    /** Shape $ (Value): string.  Value enum: "location".
     * @return string
     */
    public function getScope(): string { return $this->get('scope'); }
    public function hasScope(): bool { return $this->has('scope'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getSummary(): string { return $this->get('summary'); }
    public function hasSummary(): bool { return $this->has('summary'); }
}
