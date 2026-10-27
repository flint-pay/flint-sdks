<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $evaluated_at
 * @property-read string $evaluation_status
 * @property-read list<DeliveryInputRequirement> $input_requirements
 * @property-read list<DeliveryPickupAvailabilityLocationResource> $locations
 * @property-read ?list<DeliveryPickupAvailabilityDiagnostic> $merchant_diagnostics
 * @property-read string $mode
 * Presence-aware response; omitted optional fields return null. */
final class DeliveryPreviewsCreateResponse200DataPickupLocations extends Model {
    /** @param array{'evaluated_at': string, 'evaluation_status': string, 'input_requirements': list<mixed>, 'locations': list<mixed>, 'merchant_diagnostics'?: list<mixed>, 'mode': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryPreviewsCreateResponse200DataPickupLocations')); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return string
     */
    public function getEvaluatedAt(): string { return $this->get('evaluated_at'); }
    public function hasEvaluatedAt(): bool { return $this->has('evaluated_at'); }
    /** Shape $ (Value): string.  Value enum: "complete", "incomplete", "degraded".
     * @return string
     */
    public function getEvaluationStatus(): string { return $this->get('evaluation_status'); }
    public function hasEvaluationStatus(): bool { return $this->has('evaluation_status'); }
    /** Shape $ (Value): Array of {@see DeliveryInputRequirement}. Shape $[] (Value): {@see DeliveryInputRequirement}. An input a delivery method needs, such as an address field or time window, with its `field_path`, purpose, and constraint.
     * @return list<DeliveryInputRequirement>
     */
    public function getInputRequirements(): array { return $this->get('input_requirements'); }
    public function hasInputRequirements(): bool { return $this->has('input_requirements'); }
    /** Shape $ (Value): Array of {@see DeliveryPickupAvailabilityLocationResource}. Up to 25 pickup locations, nearest first when Flint can place the buyer location, otherwise in the order the pickup methods list them. maxItems: 25. Shape $[] (Value): {@see DeliveryPickupAvailabilityLocationResource}. One pickup location in a pickup locations preview, with its outcome, distance, compatible methods, and applicable quantities.
     * @return list<DeliveryPickupAvailabilityLocationResource>
     */
    public function getLocations(): array { return $this->get('locations'); }
    public function hasLocations(): bool { return $this->has('locations'); }
    /** Shape $ (Value): Array of {@see DeliveryPickupAvailabilityDiagnostic}. Configured Locations the search left out, and listed Locations that cannot supply the order's tracked items. Always present with an API key or dashboard credential as an array, including when empty. Shape $[] (Value): {@see DeliveryPickupAvailabilityDiagnostic}. A merchant-only diagnostic about a configured pickup location that was left out of the results or cannot supply the order.
     * @return ?list<DeliveryPickupAvailabilityDiagnostic>
     */
    public function getMerchantDiagnostics(): ?array { return $this->get('merchant_diagnostics'); }
    public function hasMerchantDiagnostics(): bool { return $this->has('merchant_diagnostics'); }
    /** Shape $ (Value): string. The delivery question this preview answers. - `pickup_locations`: Lists the checkout session's pickup locations and whether each can supply its items. Value enum: "pickup_locations".
     * @return string
     */
    public function getMode(): string { return $this->get('mode'); }
    public function hasMode(): bool { return $this->has('mode'); }
}
