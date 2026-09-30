<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<DeliveryQuoteLineItemResourceInput|array<array-key, mixed>|\stdClass> $applicable_quantities
 * @property-read DeliveryPickupAvailabilityCandidateOutcomeInput|array<array-key, mixed>|\stdClass $candidate_outcome
 * @property-read list<DeliveryPickupAvailabilityMethodResourceInput|array<array-key, mixed>|\stdClass> $compatible_methods
 * @property-read int|float $distance_meters
 * @property-read DeliveryPickupAvailabilityLocationSummaryInput|array<array-key, mixed>|\stdClass $location
 * Presence-aware input; omitted fields throw when accessed. */
final class DeliveryPickupAvailabilityLocationResourceInput extends Model {
    /** @param array{'applicable_quantities': list<DeliveryQuoteLineItemResourceInput|array<array-key, mixed>|\stdClass>, 'candidate_outcome': DeliveryPickupAvailabilityCandidateOutcomeInput|array<array-key, mixed>|\stdClass, 'compatible_methods': list<DeliveryPickupAvailabilityMethodResourceInput|array<array-key, mixed>|\stdClass>, 'distance_meters'?: int|float, 'location': DeliveryPickupAvailabilityLocationSummaryInput|array<array-key, mixed>|\stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryPickupAvailabilityLocationResourceInput')); }
    /** @return list<DeliveryQuoteLineItemResourceInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When applicable_quantities is omitted; use hasApplicableQuantities() or valueOrDefault().
     */
    public function getApplicableQuantities(): array { return $this->get('applicable_quantities'); }
    public function hasApplicableQuantities(): bool { return $this->has('applicable_quantities'); }
    /** @return DeliveryPickupAvailabilityCandidateOutcomeInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When candidate_outcome is omitted; use hasCandidateOutcome() or valueOrDefault().
     */
    public function getCandidateOutcome(): mixed { return $this->get('candidate_outcome'); }
    public function hasCandidateOutcome(): bool { return $this->has('candidate_outcome'); }
    /** @return list<DeliveryPickupAvailabilityMethodResourceInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When compatible_methods is omitted; use hasCompatibleMethods() or valueOrDefault().
     */
    public function getCompatibleMethods(): array { return $this->get('compatible_methods'); }
    public function hasCompatibleMethods(): bool { return $this->has('compatible_methods'); }
    /** @return int|float
     * @throws SdkError When distance_meters is omitted; use hasDistanceMeters() or valueOrDefault().
     */
    public function getDistanceMeters(): int|float { return $this->get('distance_meters'); }
    public function hasDistanceMeters(): bool { return $this->has('distance_meters'); }
    /** @return DeliveryPickupAvailabilityLocationSummaryInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When location is omitted; use hasLocation() or valueOrDefault().
     */
    public function getLocation(): mixed { return $this->get('location'); }
    public function hasLocation(): bool { return $this->has('location'); }
}
