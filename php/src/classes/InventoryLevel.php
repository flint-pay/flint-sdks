<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $available_quantity
 * @property-read string $committed_quantity
 * @property-read string $created_at
 * @property-read string $damaged_quantity
 * @property-read string $held_quantity
 * @property-read string $incoming_quantity
 * @property-read InventoryItem $inventory_item
 * @property-read string $inventory_item_id
 * @property-read string $inventory_level_claim_revision
 * @property-read string $inventory_level_id
 * @property-read string $inventory_level_physical_revision
 * @property-read string $location_id
 * @property-read string $on_hand_quantity
 * @property-read string $quality_control_quantity
 * @property-read string $quarantined_quantity
 * @property-read string $safety_stock_quantity
 * @property-read string $shortage_quantity
 * @property-read string $unavailable_on_hand_quantity
 * @property-read string $updated_at
 * @property-read string $version
 * Presence-aware response; omitted fields throw when accessed. */
final class InventoryLevel extends Model {
    /** @param array{'available_quantity': string, 'committed_quantity': string, 'created_at': string, 'damaged_quantity': string, 'held_quantity': string, 'incoming_quantity': string, 'inventory_item'?: object{'barcode'?: string, 'created_at': string, 'external_reference_id'?: string, 'inventory_item_id': string, 'metadata': \stdClass, 'name': string, 'sku'?: string, 'status': string, 'updated_at': string, 'version': string}, 'inventory_item_id': string, 'inventory_level_claim_revision': string, 'inventory_level_id': string, 'inventory_level_physical_revision': string, 'location_id': string, 'on_hand_quantity': string, 'quality_control_quantity': string, 'quarantined_quantity': string, 'safety_stock_quantity': string, 'shortage_quantity': string, 'unavailable_on_hand_quantity': string, 'updated_at': string, 'version': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventoryLevel')); }
    /** @return string
     * @throws SdkError When available_quantity is omitted; use hasAvailableQuantity() or valueOrDefault().
     */
    public function getAvailableQuantity(): string { return $this->get('available_quantity'); }
    public function hasAvailableQuantity(): bool { return $this->has('available_quantity'); }
    /** @return string
     * @throws SdkError When committed_quantity is omitted; use hasCommittedQuantity() or valueOrDefault().
     */
    public function getCommittedQuantity(): string { return $this->get('committed_quantity'); }
    public function hasCommittedQuantity(): bool { return $this->has('committed_quantity'); }
    /** @return string
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** @return string
     * @throws SdkError When damaged_quantity is omitted; use hasDamagedQuantity() or valueOrDefault().
     */
    public function getDamagedQuantity(): string { return $this->get('damaged_quantity'); }
    public function hasDamagedQuantity(): bool { return $this->has('damaged_quantity'); }
    /** @return string
     * @throws SdkError When held_quantity is omitted; use hasHeldQuantity() or valueOrDefault().
     */
    public function getHeldQuantity(): string { return $this->get('held_quantity'); }
    public function hasHeldQuantity(): bool { return $this->has('held_quantity'); }
    /** @return string
     * @throws SdkError When incoming_quantity is omitted; use hasIncomingQuantity() or valueOrDefault().
     */
    public function getIncomingQuantity(): string { return $this->get('incoming_quantity'); }
    public function hasIncomingQuantity(): bool { return $this->has('incoming_quantity'); }
    /** @return InventoryItem
     * @throws SdkError When inventory_item is omitted; use hasInventoryItem() or valueOrDefault().
     */
    public function getInventoryItem(): InventoryItem { return $this->get('inventory_item'); }
    public function hasInventoryItem(): bool { return $this->has('inventory_item'); }
    /** @return string
     * @throws SdkError When inventory_item_id is omitted; use hasInventoryItemId() or valueOrDefault().
     */
    public function getInventoryItemId(): string { return $this->get('inventory_item_id'); }
    public function hasInventoryItemId(): bool { return $this->has('inventory_item_id'); }
    /** @return string
     * @throws SdkError When inventory_level_claim_revision is omitted; use hasInventoryLevelClaimRevision() or valueOrDefault().
     */
    public function getInventoryLevelClaimRevision(): string { return $this->get('inventory_level_claim_revision'); }
    public function hasInventoryLevelClaimRevision(): bool { return $this->has('inventory_level_claim_revision'); }
    /** @return string
     * @throws SdkError When inventory_level_id is omitted; use hasInventoryLevelId() or valueOrDefault().
     */
    public function getInventoryLevelId(): string { return $this->get('inventory_level_id'); }
    public function hasInventoryLevelId(): bool { return $this->has('inventory_level_id'); }
    /** @return string
     * @throws SdkError When inventory_level_physical_revision is omitted; use hasInventoryLevelPhysicalRevision() or valueOrDefault().
     */
    public function getInventoryLevelPhysicalRevision(): string { return $this->get('inventory_level_physical_revision'); }
    public function hasInventoryLevelPhysicalRevision(): bool { return $this->has('inventory_level_physical_revision'); }
    /** @return string
     * @throws SdkError When location_id is omitted; use hasLocationId() or valueOrDefault().
     */
    public function getLocationId(): string { return $this->get('location_id'); }
    public function hasLocationId(): bool { return $this->has('location_id'); }
    /** @return string
     * @throws SdkError When on_hand_quantity is omitted; use hasOnHandQuantity() or valueOrDefault().
     */
    public function getOnHandQuantity(): string { return $this->get('on_hand_quantity'); }
    public function hasOnHandQuantity(): bool { return $this->has('on_hand_quantity'); }
    /** @return string
     * @throws SdkError When quality_control_quantity is omitted; use hasQualityControlQuantity() or valueOrDefault().
     */
    public function getQualityControlQuantity(): string { return $this->get('quality_control_quantity'); }
    public function hasQualityControlQuantity(): bool { return $this->has('quality_control_quantity'); }
    /** @return string
     * @throws SdkError When quarantined_quantity is omitted; use hasQuarantinedQuantity() or valueOrDefault().
     */
    public function getQuarantinedQuantity(): string { return $this->get('quarantined_quantity'); }
    public function hasQuarantinedQuantity(): bool { return $this->has('quarantined_quantity'); }
    /** @return string
     * @throws SdkError When safety_stock_quantity is omitted; use hasSafetyStockQuantity() or valueOrDefault().
     */
    public function getSafetyStockQuantity(): string { return $this->get('safety_stock_quantity'); }
    public function hasSafetyStockQuantity(): bool { return $this->has('safety_stock_quantity'); }
    /** @return string
     * @throws SdkError When shortage_quantity is omitted; use hasShortageQuantity() or valueOrDefault().
     */
    public function getShortageQuantity(): string { return $this->get('shortage_quantity'); }
    public function hasShortageQuantity(): bool { return $this->has('shortage_quantity'); }
    /** @return string
     * @throws SdkError When unavailable_on_hand_quantity is omitted; use hasUnavailableOnHandQuantity() or valueOrDefault().
     */
    public function getUnavailableOnHandQuantity(): string { return $this->get('unavailable_on_hand_quantity'); }
    public function hasUnavailableOnHandQuantity(): bool { return $this->has('unavailable_on_hand_quantity'); }
    /** @return string
     * @throws SdkError When updated_at is omitted; use hasUpdatedAt() or valueOrDefault().
     */
    public function getUpdatedAt(): string { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** @return string
     * @throws SdkError When version is omitted; use hasVersion() or valueOrDefault().
     */
    public function getVersion(): string { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
