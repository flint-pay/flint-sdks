<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $inventory_item_id
 * @property-read int $quantity_per_line_item_unit
 * Presence-aware response; omitted optional fields return null. */
final class DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemVariantInventoryDemandsItem extends Model {
    /** @param array{'inventory_item_id': string, 'quantity_per_line_item_unit': int, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemVariantInventoryDemandsItem')); }
    /** minLength: 1.
     * @return string
     */
    public function getInventoryItemId(): string { return $this->get('inventory_item_id'); }
    public function hasInventoryItemId(): bool { return $this->has('inventory_item_id'); }
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. minimum: 1. maximum: 9999.
     * @return int
     */
    public function getQuantityPerLineItemUnit(): int { return $this->get('quantity_per_line_item_unit'); }
    public function hasQuantityPerLineItemUnit(): bool { return $this->has('quantity_per_line_item_unit'); }
}
