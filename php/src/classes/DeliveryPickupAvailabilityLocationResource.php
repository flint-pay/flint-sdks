<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<DeliveryQuoteLineItemResource> $applicable_quantities
 * @property-read DeliveryPickupAvailabilityCandidateOutcome $candidate_outcome
 * @property-read list<DeliveryPickupAvailabilityMethodResource> $compatible_methods
 * @property-read float $distance_meters
 * @property-read DeliveryPickupAvailabilityLocationSummary $location
 * Presence-aware response; omitted fields throw when accessed. */
final class DeliveryPickupAvailabilityLocationResource extends Model {
    /** @param array{'applicable_quantities': list<mixed>, 'candidate_outcome': mixed, 'compatible_methods': list<mixed>, 'distance_meters'?: float, 'location': mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryPickupAvailabilityLocationResource')); }
    /** @return list<DeliveryQuoteLineItemResource>
     * @throws SdkError When applicable_quantities is omitted; use hasApplicableQuantities() or valueOrDefault().
     */
    public function getApplicableQuantities(): array { return $this->get('applicable_quantities'); }
    public function hasApplicableQuantities(): bool { return $this->has('applicable_quantities'); }
    /** @return DeliveryPickupAvailabilityCandidateOutcome
     * @throws SdkError When candidate_outcome is omitted; use hasCandidateOutcome() or valueOrDefault().
     */
    public function getCandidateOutcome(): DeliveryPickupAvailabilityCandidateOutcome { return $this->get('candidate_outcome'); }
    public function hasCandidateOutcome(): bool { return $this->has('candidate_outcome'); }
    /** @return list<DeliveryPickupAvailabilityMethodResource>
     * @throws SdkError When compatible_methods is omitted; use hasCompatibleMethods() or valueOrDefault().
     */
    public function getCompatibleMethods(): array { return $this->get('compatible_methods'); }
    public function hasCompatibleMethods(): bool { return $this->has('compatible_methods'); }
    /** @return float
     * @throws SdkError When distance_meters is omitted; use hasDistanceMeters() or valueOrDefault().
     */
    public function getDistanceMeters(): float { return $this->get('distance_meters'); }
    public function hasDistanceMeters(): bool { return $this->has('distance_meters'); }
    /** @return DeliveryPickupAvailabilityLocationSummary
     * @throws SdkError When location is omitted; use hasLocation() or valueOrDefault().
     */
    public function getLocation(): DeliveryPickupAvailabilityLocationSummary { return $this->get('location'); }
    public function hasLocation(): bool { return $this->has('location'); }
}
