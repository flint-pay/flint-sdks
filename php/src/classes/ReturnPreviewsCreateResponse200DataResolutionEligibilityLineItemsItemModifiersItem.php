<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?array<array-key, string> $metadata
 * @property-read string $modifier_group_name
 * @property-read ?string $modifier_id
 * @property-read string $name
 * @property-read string $order_line_item_modifier_id
 * @property-read string $quantity
 * @property-read bool $show_on_fulfillment
 * @property-read bool $show_on_receipt
 * @property-read string $source_type
 * @property-read ?ReturnPreviewsCreateResponse200DataResolutionEligibilityLineItemsItemModifiersItemText $text
 * @property-read ?string $text_value
 * @property-read ReturnPreviewsCreateResponse200DataResolutionEligibilityLineItemsItemModifiersItemTotalMoney $total_money
 * @property-read ReturnPreviewsCreateResponse200DataResolutionEligibilityLineItemsItemModifiersItemUnitPriceDeltaMoney $unit_price_delta_money
 * Presence-aware response; omitted optional fields return null. */
final class ReturnPreviewsCreateResponse200DataResolutionEligibilityLineItemsItemModifiersItem extends Model {
    /** @param array{'metadata'?: mixed, 'modifier_group_name': string, 'modifier_id'?: string, 'name': string, 'order_line_item_modifier_id': string, 'quantity': string, 'show_on_fulfillment': bool, 'show_on_receipt': bool, 'source_type': string, 'text'?: mixed, 'text_value'?: string, 'total_money': mixed, 'unit_price_delta_money': mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnPreviewsCreateResponse200DataResolutionEligibilityLineItemsItemModifiersItem')); }
    /** Shape $ (Value): {@see MetadataMap}. Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. Shape $.* (Value): string. maxLength: 4096.
     * @return ?array<array-key, string>
     */
    public function getMetadata(): ?array { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** Shape $ (Value): string. Name of the modifier group recorded when this selection was added to the order line item.
     * @return string
     */
    public function getModifierGroupName(): string { return $this->get('modifier_group_name'); }
    public function hasModifierGroupName(): bool { return $this->has('modifier_group_name'); }
    /** Shape $ (Value): string. Identifier of the selected catalog modifier. If its group is owned by a modifier set (source: inline), read the group through GET /v1/modifier-sets/{modifier_set_id}; /v1/modifier-groups doesn't return it.
     * @return ?string
     */
    public function getModifierId(): ?string { return $this->get('modifier_id'); }
    public function hasModifierId(): bool { return $this->has('modifier_id'); }
    /** Shape $ (Value): string. Name of the selected modifier recorded on the order line item.
     * @return string
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Shape $ (Value): string. Stable identifier of the selected modifier on this order line item.
     * @return string
     */
    public function getOrderLineItemModifierId(): string { return $this->get('order_line_item_modifier_id'); }
    public function hasOrderLineItemModifierId(): bool { return $this->has('order_line_item_modifier_id'); }
    /** Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return string
     */
    public function getQuantity(): string { return $this->get('quantity'); }
    public function hasQuantity(): bool { return $this->has('quantity'); }
    /** Shape $ (Value): boolean. Whether this selection appears in fulfillment details, recorded when selected.
     * @return bool
     */
    public function getShowOnFulfillment(): bool { return $this->get('show_on_fulfillment'); }
    public function hasShowOnFulfillment(): bool { return $this->has('show_on_fulfillment'); }
    /** Shape $ (Value): boolean. Whether this selection appears on buyer receipts, recorded when selected.
     * @return bool
     */
    public function getShowOnReceipt(): bool { return $this->get('show_on_receipt'); }
    public function hasShowOnReceipt(): bool { return $this->has('show_on_receipt'); }
    /** Shape $ (Value): string. Whether the selection is a catalog list modifier or buyer-entered text. Value enum: "catalog_modifier", "text".
     * @return string
     */
    public function getSourceType(): string { return $this->get('source_type'); }
    public function hasSourceType(): bool { return $this->has('source_type'); }
    /** Shape $ (Value): {@see ReturnPreviewsCreateResponse200DataResolutionEligibilityLineItemsItemModifiersItemText}. Selected text group and buyer-entered value. Read an inline text group through its owning modifier set. Text a buyer entered for a text modifier group on an order line item.
     * @return ?ReturnPreviewsCreateResponse200DataResolutionEligibilityLineItemsItemModifiersItemText
     */
    public function getText(): ?ReturnPreviewsCreateResponse200DataResolutionEligibilityLineItemsItemModifiersItemText { return $this->get('text'); }
    public function hasText(): bool { return $this->has('text'); }
    /** Shape $ (Value): string. Buyer-entered text recorded for a text modifier selection.
     * @return ?string
     */
    public function getTextValue(): ?string { return $this->get('text_value'); }
    public function hasTextValue(): bool { return $this->has('text_value'); }
    /** Shape $ (Value): {@see ReturnPreviewsCreateResponse200DataResolutionEligibilityLineItemsItemModifiersItemTotalMoney}. Total price added by this selection. Multiplies unit_price_delta_money by the modifier quantity and, for per_item pricing, by the line item quantity. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return ReturnPreviewsCreateResponse200DataResolutionEligibilityLineItemsItemModifiersItemTotalMoney
     */
    public function getTotalMoney(): ReturnPreviewsCreateResponse200DataResolutionEligibilityLineItemsItemModifiersItemTotalMoney { return $this->get('total_money'); }
    public function hasTotalMoney(): bool { return $this->has('total_money'); }
    /** Shape $ (Value): {@see ReturnPreviewsCreateResponse200DataResolutionEligibilityLineItemsItemModifiersItemUnitPriceDeltaMoney}. Amount added to the item's unit price for each unit of this selection, recorded when selected. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return ReturnPreviewsCreateResponse200DataResolutionEligibilityLineItemsItemModifiersItemUnitPriceDeltaMoney
     */
    public function getUnitPriceDeltaMoney(): ReturnPreviewsCreateResponse200DataResolutionEligibilityLineItemsItemModifiersItemUnitPriceDeltaMoney { return $this->get('unit_price_delta_money'); }
    public function hasUnitPriceDeltaMoney(): bool { return $this->has('unit_price_delta_money'); }
}
