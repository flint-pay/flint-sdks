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
 * Presence-aware input; omitted fields throw when accessed. */
final class DeliveryProfileDiagnosticsInput extends Model {
    /** @param array{'active_method_definitions_count': int, 'covers_all_items': bool, 'locations_without_rates_count': int, 'unassigned_locations': list<string>, 'unassigned_locations_truncated': bool, 'zone_country_count': int}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryProfileDiagnosticsInput')); }
    /** @return int
     * @throws SdkError When active_method_definitions_count is omitted; use hasActiveMethodDefinitionsCount() or valueOrDefault().
     */
    public function getActiveMethodDefinitionsCount(): int { return $this->get('active_method_definitions_count'); }
    public function hasActiveMethodDefinitionsCount(): bool { return $this->has('active_method_definitions_count'); }
    /** @return bool
     * @throws SdkError When covers_all_items is omitted; use hasCoversAllItems() or valueOrDefault().
     */
    public function getCoversAllItems(): bool { return $this->get('covers_all_items'); }
    public function hasCoversAllItems(): bool { return $this->has('covers_all_items'); }
    /** @return int
     * @throws SdkError When locations_without_rates_count is omitted; use hasLocationsWithoutRatesCount() or valueOrDefault().
     */
    public function getLocationsWithoutRatesCount(): int { return $this->get('locations_without_rates_count'); }
    public function hasLocationsWithoutRatesCount(): bool { return $this->has('locations_without_rates_count'); }
    /** @return list<string>
     * @throws SdkError When unassigned_locations is omitted; use hasUnassignedLocations() or valueOrDefault().
     */
    public function getUnassignedLocations(): array { return $this->get('unassigned_locations'); }
    public function hasUnassignedLocations(): bool { return $this->has('unassigned_locations'); }
    /** @return bool
     * @throws SdkError When unassigned_locations_truncated is omitted; use hasUnassignedLocationsTruncated() or valueOrDefault().
     */
    public function getUnassignedLocationsTruncated(): bool { return $this->get('unassigned_locations_truncated'); }
    public function hasUnassignedLocationsTruncated(): bool { return $this->has('unassigned_locations_truncated'); }
    /** @return int
     * @throws SdkError When zone_country_count is omitted; use hasZoneCountryCount() or valueOrDefault().
     */
    public function getZoneCountryCount(): int { return $this->get('zone_country_count'); }
    public function hasZoneCountryCount(): bool { return $this->has('zone_country_count'); }
}
