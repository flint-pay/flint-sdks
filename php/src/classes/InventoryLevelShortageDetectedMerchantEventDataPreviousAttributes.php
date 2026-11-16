<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int|null $available_quantity
 * @property-read int|null $backordered_quantity
 * @property-read int|null $claim_version
 * @property-read int|null $committed_quantity
 * @property-read string|null $created_at
 * @property-read int|null $damaged_quantity
 * @property-read int|null $held_quantity
 * @property-read int|null $incoming_quantity
 * @property-read InventoryItem|null $inventory_item
 * @property-read string|null $inventory_item_id
 * @property-read string|null $inventory_level_id
 * @property-read string|null $location_id
 * @property-read int|null $on_hand_quantity
 * @property-read int|null $physical_version
 * @property-read int|null $quality_control_quantity
 * @property-read int|null $quarantined_quantity
 * @property-read int|null $safety_stock_quantity
 * @property-read int|null $shortage_quantity
 * @property-read int|null $unavailable_on_hand_quantity
 * @property-read string|null $updated_at
 * @property-read int|null $version
 * Presence-aware response; omitted optional fields return null. */
final class InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes extends Model {
    /** @param array{'available_quantity'?: mixed, 'backordered_quantity'?: mixed, 'claim_version'?: mixed, 'committed_quantity'?: mixed, 'created_at'?: mixed, 'damaged_quantity'?: mixed, 'held_quantity'?: mixed, 'incoming_quantity'?: mixed, 'inventory_item'?: mixed, 'inventory_item_id'?: mixed, 'inventory_level_id'?: mixed, 'location_id'?: mixed, 'on_hand_quantity'?: mixed, 'physical_version'?: mixed, 'quality_control_quantity'?: mixed, 'quarantined_quantity'?: mixed, 'safety_stock_quantity'?: mixed, 'shortage_quantity'?: mixed, 'unavailable_on_hand_quantity'?: mixed, 'updated_at'?: mixed, 'version'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes')); }
    /** Derived and never written: on_hand minus unavailable, held, committed, and safety stock, never below 0. See shortage_quantity for the excess. Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer. Derived and never written: on_hand minus unavailable, held, committed, and safety stock, never below 0. See shortage_quantity for the excess. Whole-number quantity; fractional quantities are not supported. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getAvailableQuantity(): int|null { return $this->get('available_quantity'); }
    public function hasAvailableQuantity(): bool { return $this->has('available_quantity'); }
    /** Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer. Whole-number quantity; fractional quantities are not supported. Format: int64. minimum: 0. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getBackorderedQuantity(): int|null { return $this->get('backordered_quantity'); }
    public function hasBackorderedQuantity(): bool { return $this->has('backordered_quantity'); }
    /** Advances only when held or committed quantities change. anyOf[1] (Value): integer. Advances only when held or committed quantities change. Format: int64. minimum: 0. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getClaimVersion(): int|null { return $this->get('claim_version'); }
    public function hasClaimVersion(): bool { return $this->has('claim_version'); }
    /** Units promised to accepted orders. Still physically present until fulfillment consumes them. Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer. Units promised to accepted orders. Still physically present until fulfillment consumes them. Whole-number quantity; fractional quantities are not supported. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getCommittedQuantity(): int|null { return $this->get('committed_quantity'); }
    public function hasCommittedQuantity(): bool { return $this->has('committed_quantity'); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCreatedAt(): string|null { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** On-hand units known to be damaged. Not sellable. Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer. On-hand units known to be damaged. Not sellable. Whole-number quantity; fractional quantities are not supported. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getDamagedQuantity(): int|null { return $this->get('damaged_quantity'); }
    public function hasDamagedQuantity(): bool { return $this->has('damaged_quantity'); }
    /** Units claimed by an open reservation that has not been committed. Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer. Units claimed by an open reservation that has not been committed. Whole-number quantity; fractional quantities are not supported. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getHeldQuantity(): int|null { return $this->get('held_quantity'); }
    public function hasHeldQuantity(): bool { return $this->has('held_quantity'); }
    /** Units recorded as inbound but not yet on hand. Does not count toward availability. Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer. Units recorded as inbound but not yet on hand. Does not count toward availability. Whole-number quantity; fractional quantities are not supported. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getIncomingQuantity(): int|null { return $this->get('incoming_quantity'); }
    public function hasIncomingQuantity(): bool { return $this->has('incoming_quantity'); }
    /** The inventory item this level belongs to. Present only when the list request asked for expand=inventory_item. anyOf[1] (Value): {@see InventoryItem}. The inventory item this level belongs to. Present only when the list request asked for expand=inventory_item. anyOf[2] (Value): null.
     * @return InventoryItem|null
     */
    public function getInventoryItem(): InventoryItem|null { return $this->get('inventory_item'); }
    public function hasInventoryItem(): bool { return $this->has('inventory_item'); }
    /** ID of the inventory item the stock is for. anyOf[1] (Value): string. ID of the inventory item the stock is for. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getInventoryItemId(): string|null { return $this->get('inventory_item_id'); }
    public function hasInventoryItemId(): bool { return $this->has('inventory_item_id'); }
    /** Unique identifier for this inventory level, prefixed `invl_`. anyOf[1] (Value): string. Unique identifier for this inventory level, prefixed `invl_`. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getInventoryLevelId(): string|null { return $this->get('inventory_level_id'); }
    public function hasInventoryLevelId(): bool { return $this->has('inventory_level_id'); }
    /** ID of the Location that holds the stock. anyOf[1] (Value): string. ID of the Location that holds the stock. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getLocationId(): string|null { return $this->get('location_id'); }
    public function hasLocationId(): bool { return $this->has('location_id'); }
    /** Units physically present at the Location, in any condition. Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer. Units physically present at the Location, in any condition. Whole-number quantity; fractional quantities are not supported. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getOnHandQuantity(): int|null { return $this->get('on_hand_quantity'); }
    public function hasOnHandQuantity(): bool { return $this->has('on_hand_quantity'); }
    /** Advances only when on-hand or condition quantities change. anyOf[1] (Value): integer. Advances only when on-hand or condition quantities change. Format: int64. minimum: 0. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getPhysicalVersion(): int|null { return $this->get('physical_version'); }
    public function hasPhysicalVersion(): bool { return $this->has('physical_version'); }
    /** On-hand units awaiting inspection. Not sellable. Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer. On-hand units awaiting inspection. Not sellable. Whole-number quantity; fractional quantities are not supported. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getQualityControlQuantity(): int|null { return $this->get('quality_control_quantity'); }
    public function hasQualityControlQuantity(): bool { return $this->has('quality_control_quantity'); }
    /** On-hand units isolated for review. Not sellable. Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer. On-hand units isolated for review. Not sellable. Whole-number quantity; fractional quantities are not supported. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getQuarantinedQuantity(): int|null { return $this->get('quarantined_quantity'); }
    public function hasQuarantinedQuantity(): bool { return $this->has('quarantined_quantity'); }
    /** Buffer withheld from allocation. Change it with PATCH /v1/inventory-levels/{inventory_level_id}. Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer. Buffer withheld from allocation. Change it with PATCH /v1/inventory-levels/{inventory_level_id}. Whole-number quantity; fractional quantities are not supported. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getSafetyStockQuantity(): int|null { return $this->get('safety_stock_quantity'); }
    public function hasSafetyStockQuantity(): bool { return $this->has('safety_stock_quantity'); }
    /** Derived: claims exceeding sellable physical stock. Positive only after stock is lost, damaged, or corrected down. Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer. Derived: claims exceeding sellable physical stock. Positive only after stock is lost, damaged, or corrected down. Whole-number quantity; fractional quantities are not supported. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getShortageQuantity(): int|null { return $this->get('shortage_quantity'); }
    public function hasShortageQuantity(): bool { return $this->has('shortage_quantity'); }
    /** Derived: quality_control + damaged + quarantined. Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer. Derived: quality_control + damaged + quarantined. Whole-number quantity; fractional quantities are not supported. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getUnavailableOnHandQuantity(): int|null { return $this->get('unavailable_on_hand_quantity'); }
    public function hasUnavailableOnHandQuantity(): bool { return $this->has('unavailable_on_hand_quantity'); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getUpdatedAt(): string|null { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Changes on every quantity or claim change at this level, including holds and commits. Read it immediately before a PATCH. A level that a counted adjustment creates without a quantity change starts at version 0. anyOf[1] (Value): integer. Changes on every quantity or claim change at this level, including holds and commits. Read it immediately before a PATCH. A level that a counted adjustment creates without a quantity change starts at version 0. Format: int64. minimum: 0. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getVersion(): int|null { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
