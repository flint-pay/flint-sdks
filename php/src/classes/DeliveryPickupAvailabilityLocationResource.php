<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<DeliveryPickupAvailabilityQuantityResource> $applicable_quantities
 * @property-read DeliveryPickupAvailabilityCandidateOutcome $candidate_outcome
 * @property-read list<DeliveryPickupAvailabilityMethodResource> $compatible_methods
 * @property-read ?float $distance_meters
 * @property-read DeliveryPickupAvailabilityLocationSummary $location
 * Presence-aware response; omitted optional fields return null. */
final class DeliveryPickupAvailabilityLocationResource extends Model {
    /** @param array{'applicable_quantities': list<mixed>, 'candidate_outcome': mixed, 'compatible_methods': list<mixed>, 'distance_meters'?: float, 'location': mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryPickupAvailabilityLocationResource')); }
    /**  [] (Value): {@see DeliveryPickupAvailabilityQuantityResource}. The quantity of an order line item, or of one of its bundle components, that a pickup location applies to.
     * @return list<DeliveryPickupAvailabilityQuantityResource>
     */
    public function getApplicableQuantities(): array { return $this->get('applicable_quantities'); }
    public function hasApplicableQuantities(): bool { return $this->has('applicable_quantities'); }
    /** Whether pickup is available at one location, chosen by `type`, with the reason when it is unavailable or cannot be calculated.
     * @return DeliveryPickupAvailabilityCandidateOutcome
     */
    public function getCandidateOutcome(): DeliveryPickupAvailabilityCandidateOutcome { return $this->get('candidate_outcome'); }
    public function hasCandidateOutcome(): bool { return $this->has('candidate_outcome'); }
    /**  [] (Value): {@see DeliveryPickupAvailabilityMethodResource}. A pickup delivery method, with its revision, that can serve a pickup location.
     * @return list<DeliveryPickupAvailabilityMethodResource>
     */
    public function getCompatibleMethods(): array { return $this->get('compatible_methods'); }
    public function hasCompatibleMethods(): bool { return $this->has('compatible_methods'); }
    /** Straight-line distance in meters from the buyer location. A buyer location with only a postal code is measured from the postal code's center. Omitted when Flint cannot place the buyer location or the store.
     * @return ?float
     */
    public function getDistanceMeters(): ?float { return $this->get('distance_meters'); }
    public function hasDistanceMeters(): bool { return $this->has('distance_meters'); }
    /** The ID, name, and address of a pickup location in a pickup locations preview.
     * @return DeliveryPickupAvailabilityLocationSummary
     */
    public function getLocation(): DeliveryPickupAvailabilityLocationSummary { return $this->get('location'); }
    public function hasLocation(): bool { return $this->has('location'); }
}
