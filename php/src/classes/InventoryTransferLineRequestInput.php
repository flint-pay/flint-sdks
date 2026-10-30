<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $condition
 * @property-read string $inventory_item_id
 * @property-read int $requested_quantity
 * Presence-aware input; omitted fields throw when accessed. */
final class InventoryTransferLineRequestInput extends Model {
    /** @param array{'condition'?: string, 'inventory_item_id': string, 'requested_quantity': int}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventoryTransferLineRequestInput')); }
    /** Default: "sellable". Value enum: "sellable", "quality_control", "damaged", "quarantined".
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
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. minimum: 1.
     * @return int
     * @throws SdkError When requested_quantity is omitted; use hasRequestedQuantity() or valueOrDefault().
     */
    public function getRequestedQuantity(): int { return $this->get('requested_quantity'); }
    public function hasRequestedQuantity(): bool { return $this->has('requested_quantity'); }
}
