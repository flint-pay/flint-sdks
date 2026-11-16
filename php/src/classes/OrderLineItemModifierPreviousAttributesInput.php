<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MetadataMapPreviousAttributesInput|array<array-key, mixed>|\stdClass|null $metadata
 * @property-read string|null $modifier_group_name
 * @property-read string|null $modifier_id
 * @property-read string|null $name
 * @property-read string|null $order_line_item_modifier_id
 * @property-read int|null $quantity
 * @property-read bool|null $show_on_fulfillment
 * @property-read bool|null $show_on_receipt
 * @property-read string|null $source_type
 * @property-read TextModifierRequestPreviousAttributesInput|array<array-key, mixed>|\stdClass|null $text
 * @property-read string|null $text_value
 * @property-read MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $total_money
 * @property-read MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $unit_price_delta_money
 * Presence-aware input; omitted fields throw when accessed. */
final class OrderLineItemModifierPreviousAttributesInput extends Model {
    /** @param array{'metadata'?: MetadataMapPreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'modifier_group_name'?: string|null, 'modifier_id'?: string|null, 'name'?: string|null, 'order_line_item_modifier_id'?: string|null, 'quantity'?: int|null, 'show_on_fulfillment'?: bool|null, 'show_on_receipt'?: bool|null, 'source_type'?: string|null, 'text'?: TextModifierRequestPreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'text_value'?: string|null, 'total_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'unit_price_delta_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrderLineItemModifierPreviousAttributesInput')); }
    /** Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. anyOf[1] (Value): {@see MetadataMapPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MetadataMapPreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When metadata is omitted; use hasMetadata() or valueOrDefault().
     */
    public function getMetadata(): mixed { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** Name of the modifier group recorded when this selection was added to the order line item. anyOf[1] (Value): string. Name of the modifier group recorded when this selection was added to the order line item. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When modifier_group_name is omitted; use hasModifierGroupName() or valueOrDefault().
     */
    public function getModifierGroupName(): mixed { return $this->get('modifier_group_name'); }
    public function hasModifierGroupName(): bool { return $this->has('modifier_group_name'); }
    /** Identifier of the selected catalog modifier. If its group is owned by a modifier set (source: inline), read the group through GET /v1/modifier-sets/{modifier_set_id}; /v1/modifier-groups doesn't return it. anyOf[1] (Value): string. Identifier of the selected catalog modifier. If its group is owned by a modifier set (source: inline), read the group through GET /v1/modifier-sets/{modifier_set_id}; /v1/modifier-groups doesn't return it. Example: "mod_01KEZF7C00SAWDZBQJX5H0XW1S". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When modifier_id is omitted; use hasModifierId() or valueOrDefault().
     */
    public function getModifierId(): mixed { return $this->get('modifier_id'); }
    public function hasModifierId(): bool { return $this->has('modifier_id'); }
    /** Name of the selected modifier recorded on the order line item. anyOf[1] (Value): string. Name of the selected modifier recorded on the order line item. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): mixed { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Stable identifier of the selected modifier on this order line item. anyOf[1] (Value): string. Stable identifier of the selected modifier on this order line item. Example: "olim_01KEZF7C00YP0WSZGRAD25EB1Z". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When order_line_item_modifier_id is omitted; use hasOrderLineItemModifierId() or valueOrDefault().
     */
    public function getOrderLineItemModifierId(): mixed { return $this->get('order_line_item_modifier_id'); }
    public function hasOrderLineItemModifierId(): bool { return $this->has('order_line_item_modifier_id'); }
    /** Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer. Whole-number quantity; fractional quantities are not supported. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     * @throws SdkError When quantity is omitted; use hasQuantity() or valueOrDefault().
     */
    public function getQuantity(): mixed { return $this->get('quantity'); }
    public function hasQuantity(): bool { return $this->has('quantity'); }
    /** Whether this selection appears in fulfillment details, recorded when selected. anyOf[1] (Value): boolean. Whether this selection appears in fulfillment details, recorded when selected. anyOf[2] (Value): null.
     * @return bool|null
     * @throws SdkError When show_on_fulfillment is omitted; use hasShowOnFulfillment() or valueOrDefault().
     */
    public function getShowOnFulfillment(): mixed { return $this->get('show_on_fulfillment'); }
    public function hasShowOnFulfillment(): bool { return $this->has('show_on_fulfillment'); }
    /** Whether this selection appears on buyer receipts, recorded when selected. anyOf[1] (Value): boolean. Whether this selection appears on buyer receipts, recorded when selected. anyOf[2] (Value): null.
     * @return bool|null
     * @throws SdkError When show_on_receipt is omitted; use hasShowOnReceipt() or valueOrDefault().
     */
    public function getShowOnReceipt(): mixed { return $this->get('show_on_receipt'); }
    public function hasShowOnReceipt(): bool { return $this->has('show_on_receipt'); }
    /** Whether the selection is a catalog list modifier or buyer-entered text. Value enum: "catalog_modifier", "text". anyOf[1] (Value): string. Whether the selection is a catalog list modifier or buyer-entered text. Value enum: "catalog_modifier", "text". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When source_type is omitted; use hasSourceType() or valueOrDefault().
     */
    public function getSourceType(): mixed { return $this->get('source_type'); }
    public function hasSourceType(): bool { return $this->has('source_type'); }
    /** Selected text group and buyer-entered value. Read an inline text group through its owning modifier set. anyOf[1] (Value): {@see TextModifierRequestPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return TextModifierRequestPreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When text is omitted; use hasText() or valueOrDefault().
     */
    public function getText(): mixed { return $this->get('text'); }
    public function hasText(): bool { return $this->has('text'); }
    /** Buyer-entered text recorded for a text modifier selection. anyOf[1] (Value): string. Buyer-entered text recorded for a text modifier selection. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When text_value is omitted; use hasTextValue() or valueOrDefault().
     */
    public function getTextValue(): mixed { return $this->get('text_value'); }
    public function hasTextValue(): bool { return $this->has('text_value'); }
    /** Total price this selection adds to the line: `unit_price_delta_money` times the selection's `quantity` times the line item's `quantity`. Always 0 for text selections. anyOf[1] (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When total_money is omitted; use hasTotalMoney() or valueOrDefault().
     */
    public function getTotalMoney(): mixed { return $this->get('total_money'); }
    public function hasTotalMoney(): bool { return $this->has('total_money'); }
    /** Amount added to the item's unit price for each unit of this selection, recorded when selected. anyOf[1] (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When unit_price_delta_money is omitted; use hasUnitPriceDeltaMoney() or valueOrDefault().
     */
    public function getUnitPriceDeltaMoney(): mixed { return $this->get('unit_price_delta_money'); }
    public function hasUnitPriceDeltaMoney(): bool { return $this->has('unit_price_delta_money'); }
}
