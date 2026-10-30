<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $condition
 * @property-read string $inventory_item_id
 * @property-read string $location_id
 * @property-read int $quantity
 * Presence-aware input; omitted fields throw when accessed. */
final class InventoryAdjustmentQuantityLineRequestInput extends Model {
    /** @param array{'condition'?: string, 'inventory_item_id': string, 'location_id': string, 'quantity': int}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventoryAdjustmentQuantityLineRequestInput')); }
    /** Condition of the units. Defaults to `sellable`. Default: "sellable". Value enum: "sellable", "quality_control", "damaged", "quarantined".
     * @return string
     * @throws SdkError When condition is omitted; use hasCondition() or valueOrDefault().
     */
    public function getCondition(): string { return $this->get('condition'); }
    public function hasCondition(): bool { return $this->has('condition'); }
    /** minLength: 1.
     * @return string
     * @throws SdkError When inventory_item_id is omitted; use hasInventoryItemId() or valueOrDefault().
     */
    public function getInventoryItemId(): string { return $this->get('inventory_item_id'); }
    public function hasInventoryItemId(): bool { return $this->has('inventory_item_id'); }
    /** minLength: 1.
     * @return string
     * @throws SdkError When location_id is omitted; use hasLocationId() or valueOrDefault().
     */
    public function getLocationId(): string { return $this->get('location_id'); }
    public function hasLocationId(): bool { return $this->has('location_id'); }
    /** Units this line records. Must be at least 1. Whole-number quantity; fractional quantities are not supported. Format: int64. minimum: 1.
     * @return int
     * @throws SdkError When quantity is omitted; use hasQuantity() or valueOrDefault().
     */
    public function getQuantity(): int { return $this->get('quantity'); }
    public function hasQuantity(): bool { return $this->has('quantity'); }
}
