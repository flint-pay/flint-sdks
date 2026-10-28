<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $available_quantity
 * @property-read string $claim_version
 * @property-read string $committed_quantity
 * @property-read string|\DateTimeInterface $created_at
 * @property-read string $damaged_quantity
 * @property-read string $held_quantity
 * @property-read string $incoming_quantity
 * @property-read InventoryItemInput|array<array-key, mixed>|\stdClass $inventory_item
 * @property-read string $inventory_item_id
 * @property-read string $inventory_level_id
 * @property-read string $location_id
 * @property-read string $on_hand_quantity
 * @property-read string $physical_version
 * @property-read string $quality_control_quantity
 * @property-read string $quarantined_quantity
 * @property-read string $safety_stock_quantity
 * @property-read string $shortage_quantity
 * @property-read string $unavailable_on_hand_quantity
 * @property-read string|\DateTimeInterface $updated_at
 * @property-read string $version
 * Presence-aware input; omitted fields throw when accessed. */
final class InventoryLevelInput extends Model {
    /** @param array{'available_quantity': string, 'claim_version': string, 'committed_quantity': string, 'created_at': string|\DateTimeInterface, 'damaged_quantity': string, 'held_quantity': string, 'incoming_quantity': string, 'inventory_item'?: InventoryItemInput|array<array-key, mixed>|\stdClass, 'inventory_item_id': string, 'inventory_level_id': string, 'location_id': string, 'on_hand_quantity': string, 'physical_version': string, 'quality_control_quantity': string, 'quarantined_quantity': string, 'safety_stock_quantity': string, 'shortage_quantity': string, 'unavailable_on_hand_quantity': string, 'updated_at': string|\DateTimeInterface, 'version': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventoryLevelInput')); }
    /** Shape $ (Value): integer string. Derived and never written: on_hand minus unavailable, held, committed, and safety stock, never below 0. See shortage_quantity for the excess. Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return string
     * @throws SdkError When available_quantity is omitted; use hasAvailableQuantity() or valueOrDefault().
     */
    public function getAvailableQuantity(): string { return $this->get('available_quantity'); }
    public function hasAvailableQuantity(): bool { return $this->has('available_quantity'); }
    /** Shape $ (Value): integer string. Advances only when held or committed quantities change. Use an integer string (decimal digits), not a floating-point number. Format: int64. minimum: 0.
     * @return string
     * @throws SdkError When claim_version is omitted; use hasClaimVersion() or valueOrDefault().
     */
    public function getClaimVersion(): string { return $this->get('claim_version'); }
    public function hasClaimVersion(): bool { return $this->has('claim_version'); }
    /** Shape $ (Value): integer string. Units promised to accepted orders. Still physically present until fulfillment consumes them. Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return string
     * @throws SdkError When committed_quantity is omitted; use hasCommittedQuantity() or valueOrDefault().
     */
    public function getCommittedQuantity(): string { return $this->get('committed_quantity'); }
    public function hasCommittedQuantity(): bool { return $this->has('committed_quantity'); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string|\DateTimeInterface { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Shape $ (Value): integer string. On-hand units known to be damaged. Not sellable. Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return string
     * @throws SdkError When damaged_quantity is omitted; use hasDamagedQuantity() or valueOrDefault().
     */
    public function getDamagedQuantity(): string { return $this->get('damaged_quantity'); }
    public function hasDamagedQuantity(): bool { return $this->has('damaged_quantity'); }
    /** Shape $ (Value): integer string. Units claimed by an open reservation that has not been committed. Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return string
     * @throws SdkError When held_quantity is omitted; use hasHeldQuantity() or valueOrDefault().
     */
    public function getHeldQuantity(): string { return $this->get('held_quantity'); }
    public function hasHeldQuantity(): bool { return $this->has('held_quantity'); }
    /** Shape $ (Value): integer string. Units recorded as inbound but not yet on hand. Does not count toward availability. Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return string
     * @throws SdkError When incoming_quantity is omitted; use hasIncomingQuantity() or valueOrDefault().
     */
    public function getIncomingQuantity(): string { return $this->get('incoming_quantity'); }
    public function hasIncomingQuantity(): bool { return $this->has('incoming_quantity'); }
    /** Shape $ (Value): {@see InventoryItemInput}. The inventory item this level belongs to. Present only when the list request asked for expand=inventory_item. A stock-keeping unit that inventory quantities are tracked against. Catalog variants reference an inventory item rather than carrying their own counter.
     * @return InventoryItemInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When inventory_item is omitted; use hasInventoryItem() or valueOrDefault().
     */
    public function getInventoryItem(): mixed { return $this->get('inventory_item'); }
    public function hasInventoryItem(): bool { return $this->has('inventory_item'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When inventory_item_id is omitted; use hasInventoryItemId() or valueOrDefault().
     */
    public function getInventoryItemId(): string { return $this->get('inventory_item_id'); }
    public function hasInventoryItemId(): bool { return $this->has('inventory_item_id'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When inventory_level_id is omitted; use hasInventoryLevelId() or valueOrDefault().
     */
    public function getInventoryLevelId(): string { return $this->get('inventory_level_id'); }
    public function hasInventoryLevelId(): bool { return $this->has('inventory_level_id'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When location_id is omitted; use hasLocationId() or valueOrDefault().
     */
    public function getLocationId(): string { return $this->get('location_id'); }
    public function hasLocationId(): bool { return $this->has('location_id'); }
    /** Shape $ (Value): integer string. Units physically present at the Location, in any condition. Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return string
     * @throws SdkError When on_hand_quantity is omitted; use hasOnHandQuantity() or valueOrDefault().
     */
    public function getOnHandQuantity(): string { return $this->get('on_hand_quantity'); }
    public function hasOnHandQuantity(): bool { return $this->has('on_hand_quantity'); }
    /** Shape $ (Value): integer string. Advances only when on-hand or condition quantities change. Use an integer string (decimal digits), not a floating-point number. Format: int64. minimum: 0.
     * @return string
     * @throws SdkError When physical_version is omitted; use hasPhysicalVersion() or valueOrDefault().
     */
    public function getPhysicalVersion(): string { return $this->get('physical_version'); }
    public function hasPhysicalVersion(): bool { return $this->has('physical_version'); }
    /** Shape $ (Value): integer string. On-hand units awaiting inspection. Not sellable. Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return string
     * @throws SdkError When quality_control_quantity is omitted; use hasQualityControlQuantity() or valueOrDefault().
     */
    public function getQualityControlQuantity(): string { return $this->get('quality_control_quantity'); }
    public function hasQualityControlQuantity(): bool { return $this->has('quality_control_quantity'); }
    /** Shape $ (Value): integer string. On-hand units isolated for review. Not sellable. Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return string
     * @throws SdkError When quarantined_quantity is omitted; use hasQuarantinedQuantity() or valueOrDefault().
     */
    public function getQuarantinedQuantity(): string { return $this->get('quarantined_quantity'); }
    public function hasQuarantinedQuantity(): bool { return $this->has('quarantined_quantity'); }
    /** Shape $ (Value): integer string. Buffer withheld from allocation. Change it with PATCH /v1/inventory-levels/{inventory_level_id}. Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return string
     * @throws SdkError When safety_stock_quantity is omitted; use hasSafetyStockQuantity() or valueOrDefault().
     */
    public function getSafetyStockQuantity(): string { return $this->get('safety_stock_quantity'); }
    public function hasSafetyStockQuantity(): bool { return $this->has('safety_stock_quantity'); }
    /** Shape $ (Value): integer string. Derived: claims exceeding sellable physical stock. Positive only after stock is lost, damaged, or corrected down. Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return string
     * @throws SdkError When shortage_quantity is omitted; use hasShortageQuantity() or valueOrDefault().
     */
    public function getShortageQuantity(): string { return $this->get('shortage_quantity'); }
    public function hasShortageQuantity(): bool { return $this->has('shortage_quantity'); }
    /** Shape $ (Value): integer string. Derived: quality_control + damaged + quarantined. Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return string
     * @throws SdkError When unavailable_on_hand_quantity is omitted; use hasUnavailableOnHandQuantity() or valueOrDefault().
     */
    public function getUnavailableOnHandQuantity(): string { return $this->get('unavailable_on_hand_quantity'); }
    public function hasUnavailableOnHandQuantity(): bool { return $this->has('unavailable_on_hand_quantity'); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When updated_at is omitted; use hasUpdatedAt() or valueOrDefault().
     */
    public function getUpdatedAt(): string|\DateTimeInterface { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Shape $ (Value): integer string. Changes on every quantity or claim change at this level, including holds and commits. Read it immediately before a PATCH. A level that a counted adjustment creates without a quantity change starts at version 0. Use an integer string (decimal digits), not a floating-point number. Format: int64. minimum: 0.
     * @return string
     * @throws SdkError When version is omitted; use hasVersion() or valueOrDefault().
     */
    public function getVersion(): string { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
