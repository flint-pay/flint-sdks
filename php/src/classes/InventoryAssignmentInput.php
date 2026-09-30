<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $demand_key
 * @property-read string $geography_revision
 * @property-read string $inventory_item_id
 * @property-read string $location_id
 * @property-read string $quantity
 * Presence-aware input; omitted fields throw when accessed. */
final class InventoryAssignmentInput extends Model {
    /** @param array{'demand_key': string, 'geography_revision': string, 'inventory_item_id': string, 'location_id': string, 'quantity': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventoryAssignmentInput')); }
    /** @return string
     * @throws SdkError When demand_key is omitted; use hasDemandKey() or valueOrDefault().
     */
    public function getDemandKey(): string { return $this->get('demand_key'); }
    public function hasDemandKey(): bool { return $this->has('demand_key'); }
    /** @return string
     * @throws SdkError When geography_revision is omitted; use hasGeographyRevision() or valueOrDefault().
     */
    public function getGeographyRevision(): string { return $this->get('geography_revision'); }
    public function hasGeographyRevision(): bool { return $this->has('geography_revision'); }
    /** @return string
     * @throws SdkError When inventory_item_id is omitted; use hasInventoryItemId() or valueOrDefault().
     */
    public function getInventoryItemId(): string { return $this->get('inventory_item_id'); }
    public function hasInventoryItemId(): bool { return $this->has('inventory_item_id'); }
    /** @return string
     * @throws SdkError When location_id is omitted; use hasLocationId() or valueOrDefault().
     */
    public function getLocationId(): string { return $this->get('location_id'); }
    public function hasLocationId(): bool { return $this->has('location_id'); }
    /** @return string
     * @throws SdkError When quantity is omitted; use hasQuantity() or valueOrDefault().
     */
    public function getQuantity(): string { return $this->get('quantity'); }
    public function hasQuantity(): bool { return $this->has('quantity'); }
}
