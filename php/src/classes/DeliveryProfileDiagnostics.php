<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int $active_method_definitions_count
 * @property-read bool $covers_all_items
 * @property-read int $locations_without_rates_count
 * @property-read list<string> $unassigned_locations
 * @property-read bool $unassigned_locations_truncated
 * @property-read int $zone_country_count
 * Presence-aware response; omitted optional fields return null. */
final class DeliveryProfileDiagnostics extends Model {
    /** @param array{'active_method_definitions_count': int, 'covers_all_items': bool, 'locations_without_rates_count': int, 'unassigned_locations': list<string>, 'unassigned_locations_truncated': bool, 'zone_country_count': int, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryProfileDiagnostics')); }
    /** Shape $ (Value): integer. Number of active delivery methods whose type is allowed by this profile. minimum: 0.
     * @return int
     */
    public function getActiveMethodDefinitionsCount(): int { return $this->get('active_method_definitions_count'); }
    public function hasActiveMethodDefinitionsCount(): bool { return $this->has('active_method_definitions_count'); }
    /** Shape $ (Value): boolean. True when this is the physical catalog default and every active physical catalog obligation uses it.
     * @return bool
     */
    public function getCoversAllItems(): bool { return $this->get('covers_all_items'); }
    public function hasCoversAllItems(): bool { return $this->has('covers_all_items'); }
    /** Shape $ (Value): integer. Number of active Locations that no active delivery method compatible with this profile can use as an origin. minimum: 0.
     * @return int
     */
    public function getLocationsWithoutRatesCount(): int { return $this->get('locations_without_rates_count'); }
    public function hasLocationsWithoutRatesCount(): bool { return $this->has('locations_without_rates_count'); }
    /** Shape $ (Value): Array of string. Up to 20 active Location IDs that no compatible active delivery method can use as an origin. Use locations_without_rates_count for the complete count. Shape $[] (Value): string.
     * @return list<string>
     */
    public function getUnassignedLocations(): array { return $this->get('unassigned_locations'); }
    public function hasUnassignedLocations(): bool { return $this->has('unassigned_locations'); }
    /** Shape $ (Value): boolean. True when more matching Locations exist than are returned in unassigned_locations.
     * @return bool
     */
    public function getUnassignedLocationsTruncated(): bool { return $this->get('unassigned_locations_truncated'); }
    public function hasUnassignedLocationsTruncated(): bool { return $this->has('unassigned_locations_truncated'); }
    /** Shape $ (Value): integer. Number of distinct countries explicitly named by zones referenced from compatible active delivery methods. minimum: 0.
     * @return int
     */
    public function getZoneCountryCount(): int { return $this->get('zone_country_count'); }
    public function hasZoneCountryCount(): bool { return $this->has('zone_country_count'); }
}
