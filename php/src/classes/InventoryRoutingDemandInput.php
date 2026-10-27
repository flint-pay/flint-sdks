<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<string> $allowed_location_ids
 * @property-read string $demand_key
 * @property-read string $forced_location_id
 * @property-read string $inventory_item_id
 * @property-read string $quantity
 * @property-read string $splitting_behavior
 * Presence-aware input; omitted fields throw when accessed. */
final class InventoryRoutingDemandInput extends Model {
    /** @param array{'allowed_location_ids'?: list<string>, 'demand_key'?: string, 'forced_location_id'?: string, 'inventory_item_id': string, 'quantity': string, 'splitting_behavior'?: string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventoryRoutingDemandInput')); }
    /** Shape $ (Value): Array of string. Shape $[] (Value): string. minLength: 1.
     * @return list<string>
     * @throws SdkError When allowed_location_ids is omitted; use hasAllowedLocationIds() or valueOrDefault().
     */
    public function getAllowedLocationIds(): array { return $this->get('allowed_location_ids'); }
    public function hasAllowedLocationIds(): bool { return $this->has('allowed_location_ids'); }
    /** Shape $ (Value): string. Your identifier for this demand. Defaults to inventory_item_id. Required on every demand when an inventory_item_id occurs more than once. minLength: 1.
     * @return string
     * @throws SdkError When demand_key is omitted; use hasDemandKey() or valueOrDefault().
     */
    public function getDemandKey(): string { return $this->get('demand_key'); }
    public function hasDemandKey(): bool { return $this->has('demand_key'); }
    /** Shape $ (Value): string. minLength: 1.
     * @return string
     * @throws SdkError When forced_location_id is omitted; use hasForcedLocationId() or valueOrDefault().
     */
    public function getForcedLocationId(): string { return $this->get('forced_location_id'); }
    public function hasForcedLocationId(): bool { return $this->has('forced_location_id'); }
    /** Shape $ (Value): string. minLength: 1.
     * @return string
     * @throws SdkError When inventory_item_id is omitted; use hasInventoryItemId() or valueOrDefault().
     */
    public function getInventoryItemId(): string { return $this->get('inventory_item_id'); }
    public function hasInventoryItemId(): bool { return $this->has('inventory_item_id'); }
    /** Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return string
     * @throws SdkError When quantity is omitted; use hasQuantity() or valueOrDefault().
     */
    public function getQuantity(): string { return $this->get('quantity'); }
    public function hasQuantity(): bool { return $this->has('quantity'); }
    /** Shape $ (Value): string. Optional demand constraint intersected with the routing source rule. Omission uses split_when_required and leaves the routing source rule in control. Value enum: "single_location", "split_when_required".
     * @return string
     * @throws SdkError When splitting_behavior is omitted; use hasSplittingBehavior() or valueOrDefault().
     */
    public function getSplittingBehavior(): string { return $this->get('splitting_behavior'); }
    public function hasSplittingBehavior(): bool { return $this->has('splitting_behavior'); }
}
