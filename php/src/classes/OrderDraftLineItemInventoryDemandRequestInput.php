<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $inventory_item_id
 * @property-read int $quantity_per_line_item_unit
 * Presence-aware input; omitted fields throw when accessed. */
final class OrderDraftLineItemInventoryDemandRequestInput extends Model {
    /** @param array{'inventory_item_id': string, 'quantity_per_line_item_unit': int}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrderDraftLineItemInventoryDemandRequestInput')); }
    /** minLength: 1.
     * @return string
     * @throws SdkError When inventory_item_id is omitted; use hasInventoryItemId() or valueOrDefault().
     */
    public function getInventoryItemId(): string { return $this->get('inventory_item_id'); }
    public function hasInventoryItemId(): bool { return $this->has('inventory_item_id'); }
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. minimum: 1. maximum: 9999.
     * @return int
     * @throws SdkError When quantity_per_line_item_unit is omitted; use hasQuantityPerLineItemUnit() or valueOrDefault().
     */
    public function getQuantityPerLineItemUnit(): int { return $this->get('quantity_per_line_item_unit'); }
    public function hasQuantityPerLineItemUnit(): bool { return $this->has('quantity_per_line_item_unit'); }
}
