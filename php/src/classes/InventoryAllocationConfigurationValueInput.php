<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<InventoryAllocationPolicyLocationInput|array<array-key, mixed>|\stdClass> $location_groups
 * @property-read int $maximum_locations_per_assignment
 * @property-read string $splitting_behavior
 * @property-read string $within_group_order
 * Presence-aware input; omitted fields throw when accessed. */
final class InventoryAllocationConfigurationValueInput extends Model {
    /** @param array{'location_groups': list<InventoryAllocationPolicyLocationInput|array<array-key, mixed>|\stdClass>, 'maximum_locations_per_assignment'?: int, 'splitting_behavior': string, 'within_group_order'?: string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventoryAllocationConfigurationValueInput')); }
    /** Shape $ (Value): Array of {@see InventoryAllocationPolicyLocationInput}. Locations ranked into priority groups. Routing prefers the lowest group priority, then the lowest location ID. minItems: 1. maxItems: 25. Shape $[] (Value): {@see InventoryAllocationPolicyLocationInput}. A Location in an inventory allocation policy and the priority group it belongs to.
     * @return list<InventoryAllocationPolicyLocationInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When location_groups is omitted; use hasLocationGroups() or valueOrDefault().
     */
    public function getLocationGroups(): array { return $this->get('location_groups'); }
    public function hasLocationGroups(): bool { return $this->has('location_groups'); }
    /** Shape $ (Value): integer. Upper bound on how many Locations one assignment may use. Defaults to 1 for single_location and 10 for split_when_required. single_location requires 1 when sent. Format: int32. minimum: 1. maximum: 10.
     * @return int
     * @throws SdkError When maximum_locations_per_assignment is omitted; use hasMaximumLocationsPerAssignment() or valueOrDefault().
     */
    public function getMaximumLocationsPerAssignment(): int { return $this->get('maximum_locations_per_assignment'); }
    public function hasMaximumLocationsPerAssignment(): bool { return $this->has('maximum_locations_per_assignment'); }
    /** Shape $ (Value): string. single_location fails rather than splitting demand across Locations; split_when_required allows a split when no single Location can serve the whole request. Value enum: "single_location", "split_when_required".
     * @return string
     * @throws SdkError When splitting_behavior is omitted; use hasSplittingBehavior() or valueOrDefault().
     */
    public function getSplittingBehavior(): string { return $this->get('splitting_behavior'); }
    public function hasSplittingBehavior(): bool { return $this->has('splitting_behavior'); }
    /** Shape $ (Value): string. Tie-break inside a priority group. Ascending location ID keeps assignments reproducible. Default: "location_id_ascending". Value enum: "location_id_ascending".
     * @return string
     * @throws SdkError When within_group_order is omitted; use hasWithinGroupOrder() or valueOrDefault().
     */
    public function getWithinGroupOrder(): string { return $this->get('within_group_order'); }
    public function hasWithinGroupOrder(): bool { return $this->has('within_group_order'); }
}
