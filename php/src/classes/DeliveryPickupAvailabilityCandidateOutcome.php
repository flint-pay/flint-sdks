<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?list<DeliveryAddressAdvisoryResource> $address_advisories
 * @property-read ?string $failure_category
 * @property-read ?list<DeliveryInputRequirement> $input_requirements
 * @property-read ?bool $retryable
 * @property-read string $type
 * @property-read ?string $unavailable_reason
 * Presence-aware response; omitted optional fields return null. */
final class DeliveryPickupAvailabilityCandidateOutcome extends Model {
    /** @param array{'address_advisories'?: list<mixed>, 'failure_category'?: string, 'input_requirements'?: list<mixed>, 'retryable'?: bool, 'type': string, 'unavailable_reason'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryPickupAvailabilityCandidateOutcome')); }
    /** Shape $ (Value): Array of {@see DeliveryAddressAdvisoryResource}. Shape $[] (Value): {@see DeliveryAddressAdvisoryResource}. An address verification result for a delivery address or buyer location. `suggested_address` may offer a correction.
     * @return ?list<DeliveryAddressAdvisoryResource>
     */
    public function getAddressAdvisories(): ?array { return $this->get('address_advisories'); }
    public function hasAddressAdvisories(): bool { return $this->has('address_advisories'); }
    /** Shape $ (Value): string. Why Flint could not calculate pickup availability and the action that can make calculation succeed. - `eligibility_context_invalid`: Create a new checkout session, then create a new quote. - `eligibility_dependency_failure`: Retry after the eligibility dependency recovers. - `pickup_method_unavailable`: Activate or choose an available pickup method. - `inventory_dependency_failure`: Retry after inventory availability and routing recover. Value enum: "eligibility_context_invalid", "eligibility_dependency_failure", "pickup_method_unavailable", "inventory_dependency_failure".
     * @return ?string
     */
    public function getFailureCategory(): ?string { return $this->get('failure_category'); }
    public function hasFailureCategory(): bool { return $this->has('failure_category'); }
    /** Shape $ (Value): Array of {@see DeliveryInputRequirement}. Shape $[] (Value): {@see DeliveryInputRequirement}. An input a delivery method needs, such as an address field or time window, with its `field_path`, purpose, and constraint.
     * @return ?list<DeliveryInputRequirement>
     */
    public function getInputRequirements(): ?array { return $this->get('input_requirements'); }
    public function hasInputRequirements(): bool { return $this->has('input_requirements'); }
    /** Shape $ (Value): boolean.
     * @return ?bool
     */
    public function getRetryable(): ?bool { return $this->get('retryable'); }
    public function hasRetryable(): bool { return $this->has('retryable'); }
    /** Shape $ (Value): string.  Value enum: "available", "unavailable", "input_required", "cannot_calculate".
     * @return string
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
    /** Shape $ (Value): string. Why pickup is unavailable and the action that can make it eligible. - `eligibility_no_match`: Inspect eligibility_mismatches, then change the relevant buyer facts or method eligibility rule. - `inventory_insufficient`: Reduce the requested quantity, replenish inventory, or choose another pickup location. Value enum: "eligibility_no_match", "inventory_insufficient".
     * @return ?string
     */
    public function getUnavailableReason(): ?string { return $this->get('unavailable_reason'); }
    public function hasUnavailableReason(): bool { return $this->has('unavailable_reason'); }
}
