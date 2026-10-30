<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?array<array-key, string> $metadata
 * @property-read string $modifier_group_name
 * @property-read ?string $modifier_id
 * @property-read string $name
 * @property-read string $order_line_item_modifier_id
 * @property-read int $quantity
 * @property-read bool $show_on_fulfillment
 * @property-read bool $show_on_receipt
 * @property-read string $source_type
 * @property-read ?SubscriptionPlanLineItemsItemVariantModifiersItemText $text
 * @property-read ?string $text_value
 * @property-read SubscriptionPlanLineItemsItemVariantModifiersItemTotalMoney $total_money
 * @property-read SubscriptionPlanLineItemsItemVariantModifiersItemUnitPriceDeltaMoney $unit_price_delta_money
 * Presence-aware response; omitted optional fields return null. */
final class SubscriptionPlanLineItemsItemVariantModifiersItem extends Model {
    /** @param array{'metadata'?: mixed, 'modifier_group_name': string, 'modifier_id'?: string, 'name': string, 'order_line_item_modifier_id': string, 'quantity': int, 'show_on_fulfillment': bool, 'show_on_receipt': bool, 'source_type': string, 'text'?: mixed, 'text_value'?: string, 'total_money': mixed, 'unit_price_delta_money': mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionPlanLineItemsItemVariantModifiersItem')); }
    /** Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. * (Value): string. maxLength: 4096.
     * @return ?array<array-key, string>
     */
    public function getMetadata(): ?array { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** Name of the modifier group recorded when this selection was added to the order line item.
     * @return string
     */
    public function getModifierGroupName(): string { return $this->get('modifier_group_name'); }
    public function hasModifierGroupName(): bool { return $this->has('modifier_group_name'); }
    /** Identifier of the selected catalog modifier. If its group is owned by a modifier set (source: inline), read the group through GET /v1/modifier-sets/{modifier_set_id}; /v1/modifier-groups doesn't return it.
     * @return ?string
     */
    public function getModifierId(): ?string { return $this->get('modifier_id'); }
    public function hasModifierId(): bool { return $this->has('modifier_id'); }
    /** Name of the selected modifier recorded on the order line item.
     * @return string
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Stable identifier of the selected modifier on this order line item.
     * @return string
     */
    public function getOrderLineItemModifierId(): string { return $this->get('order_line_item_modifier_id'); }
    public function hasOrderLineItemModifierId(): bool { return $this->has('order_line_item_modifier_id'); }
    /** Whole-number quantity; fractional quantities are not supported. Format: int64.
     * @return int
     */
    public function getQuantity(): int { return $this->get('quantity'); }
    public function hasQuantity(): bool { return $this->has('quantity'); }
    /** Whether this selection appears in fulfillment details, recorded when selected.
     * @return bool
     */
    public function getShowOnFulfillment(): bool { return $this->get('show_on_fulfillment'); }
    public function hasShowOnFulfillment(): bool { return $this->has('show_on_fulfillment'); }
    /** Whether this selection appears on buyer receipts, recorded when selected.
     * @return bool
     */
    public function getShowOnReceipt(): bool { return $this->get('show_on_receipt'); }
    public function hasShowOnReceipt(): bool { return $this->has('show_on_receipt'); }
    /** Whether the selection is a catalog list modifier or buyer-entered text. Value enum: "catalog_modifier", "text".
     * @return string
     */
    public function getSourceType(): string { return $this->get('source_type'); }
    public function hasSourceType(): bool { return $this->has('source_type'); }
    /** Selected text group and buyer-entered value. Read an inline text group through its owning modifier set. Text a buyer entered for a text modifier group on an order line item.
     * @return ?SubscriptionPlanLineItemsItemVariantModifiersItemText
     */
    public function getText(): ?SubscriptionPlanLineItemsItemVariantModifiersItemText { return $this->get('text'); }
    public function hasText(): bool { return $this->has('text'); }
    /** Buyer-entered text recorded for a text modifier selection.
     * @return ?string
     */
    public function getTextValue(): ?string { return $this->get('text_value'); }
    public function hasTextValue(): bool { return $this->has('text_value'); }
    /** Total price added by this selection. Multiplies unit_price_delta_money by the modifier quantity and, for per_item pricing, by the line item quantity. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return SubscriptionPlanLineItemsItemVariantModifiersItemTotalMoney
     */
    public function getTotalMoney(): SubscriptionPlanLineItemsItemVariantModifiersItemTotalMoney { return $this->get('total_money'); }
    public function hasTotalMoney(): bool { return $this->has('total_money'); }
    /** Amount added to the item's unit price for each unit of this selection, recorded when selected. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return SubscriptionPlanLineItemsItemVariantModifiersItemUnitPriceDeltaMoney
     */
    public function getUnitPriceDeltaMoney(): SubscriptionPlanLineItemsItemVariantModifiersItemUnitPriceDeltaMoney { return $this->get('unit_price_delta_money'); }
    public function hasUnitPriceDeltaMoney(): bool { return $this->has('unit_price_delta_money'); }
}
