<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read mixed $metadata
 * @property-read string|null $modifier_group_name
 * @property-read string|null $modifier_id
 * @property-read string|null $name
 * @property-read string|null $order_line_item_modifier_id
 * @property-read int|null $quantity
 * @property-read bool|null $show_on_fulfillment
 * @property-read bool|null $show_on_receipt
 * @property-read string|null $source_type
 * @property-read mixed $text
 * @property-read string|null $text_value
 * @property-read mixed $total_money
 * @property-read mixed $unit_price_delta_money
 * Presence-aware response; omitted optional fields return null. */
final class OrderLineItemModifierPreviousAttributes extends Model {
    /** @param array{'metadata'?: mixed, 'modifier_group_name'?: mixed, 'modifier_id'?: mixed, 'name'?: mixed, 'order_line_item_modifier_id'?: mixed, 'quantity'?: mixed, 'show_on_fulfillment'?: mixed, 'show_on_receipt'?: mixed, 'source_type'?: mixed, 'text'?: mixed, 'text_value'?: mixed, 'total_money'?: mixed, 'unit_price_delta_money'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrderLineItemModifierPreviousAttributes')); }
    /** Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. anyOf[1] (Value): {@see MetadataMapPreviousAttributes}. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getMetadata(): mixed { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** Name of the modifier group recorded when this selection was added to the order line item. anyOf[1] (Value): string. Name of the modifier group recorded when this selection was added to the order line item. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getModifierGroupName(): string|null { return $this->get('modifier_group_name'); }
    public function hasModifierGroupName(): bool { return $this->has('modifier_group_name'); }
    /** Identifier of the selected catalog modifier. If its group is owned by a modifier set (source: inline), read the group through GET /v1/modifier-sets/{modifier_set_id}; /v1/modifier-groups doesn't return it. anyOf[1] (Value): string. Identifier of the selected catalog modifier. If its group is owned by a modifier set (source: inline), read the group through GET /v1/modifier-sets/{modifier_set_id}; /v1/modifier-groups doesn't return it. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getModifierId(): string|null { return $this->get('modifier_id'); }
    public function hasModifierId(): bool { return $this->has('modifier_id'); }
    /** Name of the selected modifier recorded on the order line item. anyOf[1] (Value): string. Name of the selected modifier recorded on the order line item. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getName(): string|null { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Stable identifier of the selected modifier on this order line item. anyOf[1] (Value): string. Stable identifier of the selected modifier on this order line item. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getOrderLineItemModifierId(): string|null { return $this->get('order_line_item_modifier_id'); }
    public function hasOrderLineItemModifierId(): bool { return $this->has('order_line_item_modifier_id'); }
    /** Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer. Whole-number quantity; fractional quantities are not supported. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getQuantity(): int|null { return $this->get('quantity'); }
    public function hasQuantity(): bool { return $this->has('quantity'); }
    /** Whether this selection appears in fulfillment details, recorded when selected. anyOf[1] (Value): boolean. Whether this selection appears in fulfillment details, recorded when selected. anyOf[2] (Value): null.
     * @return bool|null
     */
    public function getShowOnFulfillment(): bool|null { return $this->get('show_on_fulfillment'); }
    public function hasShowOnFulfillment(): bool { return $this->has('show_on_fulfillment'); }
    /** Whether this selection appears on buyer receipts, recorded when selected. anyOf[1] (Value): boolean. Whether this selection appears on buyer receipts, recorded when selected. anyOf[2] (Value): null.
     * @return bool|null
     */
    public function getShowOnReceipt(): bool|null { return $this->get('show_on_receipt'); }
    public function hasShowOnReceipt(): bool { return $this->has('show_on_receipt'); }
    /** Whether the selection is a catalog list modifier or buyer-entered text. Value enum: "catalog_modifier", "text". anyOf[1] (Value): string. Whether the selection is a catalog list modifier or buyer-entered text. Value enum: "catalog_modifier", "text". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getSourceType(): string|null { return $this->get('source_type'); }
    public function hasSourceType(): bool { return $this->has('source_type'); }
    /** Selected text group and buyer-entered value. Read an inline text group through its owning modifier set. anyOf[1] (Value): {@see TextModifierRequestPreviousAttributes}. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getText(): mixed { return $this->get('text'); }
    public function hasText(): bool { return $this->has('text'); }
    /** Buyer-entered text recorded for a text modifier selection. anyOf[1] (Value): string. Buyer-entered text recorded for a text modifier selection. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getTextValue(): string|null { return $this->get('text_value'); }
    public function hasTextValue(): bool { return $this->has('text_value'); }
    /** Total price this selection adds to the line: `unit_price_delta_money` times the selection's `quantity` times the line item's `quantity`. Always 0 for text selections. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getTotalMoney(): mixed { return $this->get('total_money'); }
    public function hasTotalMoney(): bool { return $this->has('total_money'); }
    /** Amount added to the item's unit price for each unit of this selection, recorded when selected. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getUnitPriceDeltaMoney(): mixed { return $this->get('unit_price_delta_money'); }
    public function hasUnitPriceDeltaMoney(): bool { return $this->has('unit_price_delta_money'); }
}
