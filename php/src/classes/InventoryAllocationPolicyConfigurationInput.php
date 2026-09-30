<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<PolicyLocationInput|array<array-key, mixed>|\stdClass> $location_groups
 * @property-read int $maximum_locations_per_assignment
 * @property-read string $splitting_behavior
 * @property-read string $within_group_order
 * Presence-aware input; omitted fields throw when accessed. */
final class InventoryAllocationPolicyConfigurationInput extends Model {
    /** @param array{'location_groups': list<PolicyLocationInput|array<array-key, mixed>|\stdClass>, 'maximum_locations_per_assignment': int, 'splitting_behavior': string, 'within_group_order'?: string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventoryAllocationPolicyConfigurationInput')); }
    /** @return list<PolicyLocationInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When location_groups is omitted; use hasLocationGroups() or valueOrDefault().
     */
    public function getLocationGroups(): array { return $this->get('location_groups'); }
    public function hasLocationGroups(): bool { return $this->has('location_groups'); }
    /** @return int
     * @throws SdkError When maximum_locations_per_assignment is omitted; use hasMaximumLocationsPerAssignment() or valueOrDefault().
     */
    public function getMaximumLocationsPerAssignment(): int { return $this->get('maximum_locations_per_assignment'); }
    public function hasMaximumLocationsPerAssignment(): bool { return $this->has('maximum_locations_per_assignment'); }
    /** @return string
     * @throws SdkError When splitting_behavior is omitted; use hasSplittingBehavior() or valueOrDefault().
     */
    public function getSplittingBehavior(): string { return $this->get('splitting_behavior'); }
    public function hasSplittingBehavior(): bool { return $this->has('splitting_behavior'); }
    /** @return string
     * @throws SdkError When within_group_order is omitted; use hasWithinGroupOrder() or valueOrDefault().
     */
    public function getWithinGroupOrder(): string { return $this->get('within_group_order'); }
    public function hasWithinGroupOrder(): bool { return $this->has('within_group_order'); }
}
