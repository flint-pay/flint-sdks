<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $from_condition
 * @property-read string $inventory_item_id
 * @property-read string $location_id
 * @property-read string $quantity
 * @property-read string $to_condition
 * Presence-aware input; omitted fields throw when accessed. */
final class InventoryAdjustmentConditionChangeLineRequestInput extends Model {
    /** @param array{'from_condition'?: string, 'inventory_item_id': string, 'location_id': string, 'quantity': string, 'to_condition': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventoryAdjustmentConditionChangeLineRequestInput')); }
    /** Shape $ (Value): string. Condition the units leave. Defaults to `sellable`. Default: "sellable". Value enum: "sellable", "quality_control", "damaged", "quarantined".
     * @return string
     * @throws SdkError When from_condition is omitted; use hasFromCondition() or valueOrDefault().
     */
    public function getFromCondition(): string { return $this->get('from_condition'); }
    public function hasFromCondition(): bool { return $this->has('from_condition'); }
    /** Shape $ (Value): string. minLength: 1.
     * @return string
     * @throws SdkError When inventory_item_id is omitted; use hasInventoryItemId() or valueOrDefault().
     */
    public function getInventoryItemId(): string { return $this->get('inventory_item_id'); }
    public function hasInventoryItemId(): bool { return $this->has('inventory_item_id'); }
    /** Shape $ (Value): string. minLength: 1.
     * @return string
     * @throws SdkError When location_id is omitted; use hasLocationId() or valueOrDefault().
     */
    public function getLocationId(): string { return $this->get('location_id'); }
    public function hasLocationId(): bool { return $this->has('location_id'); }
    /** Shape $ (Value): integer string. Units this line records. Must be at least 1. Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: int64. minimum: 1.
     * @return string
     * @throws SdkError When quantity is omitted; use hasQuantity() or valueOrDefault().
     */
    public function getQuantity(): string { return $this->get('quantity'); }
    public function hasQuantity(): bool { return $this->has('quantity'); }
    /** Shape $ (Value): string. Condition the units move to. Must differ from `from_condition`. Value enum: "sellable", "quality_control", "damaged", "quarantined".
     * @return string
     * @throws SdkError When to_condition is omitted; use hasToCondition() or valueOrDefault().
     */
    public function getToCondition(): string { return $this->get('to_condition'); }
    public function hasToCondition(): bool { return $this->has('to_condition'); }
}
