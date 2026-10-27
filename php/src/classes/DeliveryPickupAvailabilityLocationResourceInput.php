<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<DeliveryPickupAvailabilityQuantityResourceInput|array<array-key, mixed>|\stdClass> $applicable_quantities
 * @property-read DeliveryPickupAvailabilityCandidateOutcomeInput|array<array-key, mixed>|\stdClass $candidate_outcome
 * @property-read list<DeliveryPickupAvailabilityMethodResourceInput|array<array-key, mixed>|\stdClass> $compatible_methods
 * @property-read int|float $distance_meters
 * @property-read DeliveryPickupAvailabilityLocationSummaryInput|array<array-key, mixed>|\stdClass $location
 * Presence-aware input; omitted fields throw when accessed. */
final class DeliveryPickupAvailabilityLocationResourceInput extends Model {
    /** @param array{'applicable_quantities': list<DeliveryPickupAvailabilityQuantityResourceInput|array<array-key, mixed>|\stdClass>, 'candidate_outcome': DeliveryPickupAvailabilityCandidateOutcomeInput|array<array-key, mixed>|\stdClass, 'compatible_methods': list<DeliveryPickupAvailabilityMethodResourceInput|array<array-key, mixed>|\stdClass>, 'distance_meters'?: int|float, 'location': DeliveryPickupAvailabilityLocationSummaryInput|array<array-key, mixed>|\stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryPickupAvailabilityLocationResourceInput')); }
    /** Shape $ (Value): Array of {@see DeliveryPickupAvailabilityQuantityResourceInput}. Shape $[] (Value): {@see DeliveryPickupAvailabilityQuantityResourceInput}. The quantity of an order line item, or of one of its bundle components, that a pickup location applies to.
     * @return list<DeliveryPickupAvailabilityQuantityResourceInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When applicable_quantities is omitted; use hasApplicableQuantities() or valueOrDefault().
     */
    public function getApplicableQuantities(): array { return $this->get('applicable_quantities'); }
    public function hasApplicableQuantities(): bool { return $this->has('applicable_quantities'); }
    /** Shape $ (Value): {@see DeliveryPickupAvailabilityCandidateOutcomeInput}. Whether pickup is available at one location, chosen by `type`, with the reason when it is unavailable or cannot be calculated.
     * @return DeliveryPickupAvailabilityCandidateOutcomeInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When candidate_outcome is omitted; use hasCandidateOutcome() or valueOrDefault().
     */
    public function getCandidateOutcome(): mixed { return $this->get('candidate_outcome'); }
    public function hasCandidateOutcome(): bool { return $this->has('candidate_outcome'); }
    /** Shape $ (Value): Array of {@see DeliveryPickupAvailabilityMethodResourceInput}. Shape $[] (Value): {@see DeliveryPickupAvailabilityMethodResourceInput}. A pickup delivery method, with its revision, that can serve a pickup location.
     * @return list<DeliveryPickupAvailabilityMethodResourceInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When compatible_methods is omitted; use hasCompatibleMethods() or valueOrDefault().
     */
    public function getCompatibleMethods(): array { return $this->get('compatible_methods'); }
    public function hasCompatibleMethods(): bool { return $this->has('compatible_methods'); }
    /** Shape $ (Value): number. Straight-line distance in meters from the buyer location. A buyer location with only a postal code is measured from the postal code's center. Omitted when Flint cannot place the buyer location or the store.
     * @return int|float
     * @throws SdkError When distance_meters is omitted; use hasDistanceMeters() or valueOrDefault().
     */
    public function getDistanceMeters(): int|float { return $this->get('distance_meters'); }
    public function hasDistanceMeters(): bool { return $this->has('distance_meters'); }
    /** Shape $ (Value): {@see DeliveryPickupAvailabilityLocationSummaryInput}. The ID, name, and address of a pickup location in a pickup locations preview.
     * @return DeliveryPickupAvailabilityLocationSummaryInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When location is omitted; use hasLocation() or valueOrDefault().
     */
    public function getLocation(): mixed { return $this->get('location'); }
    public function hasLocation(): bool { return $this->has('location'); }
}
