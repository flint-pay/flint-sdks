<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $allocation_basis
 * @property-read MoneyValuePreviousAttributes|null $amount_money
 * @property-read string|null $modifier_group_name
 * @property-read string|null $name
 * @property-read string|null $order_line_item_modifier_id
 * @property-read int|null $quantity
 * @property-read string|null $refund_line_item_modifier_allocation_id
 * @property-read bool|null $show_on_fulfillment
 * @property-read bool|null $show_on_receipt
 * @property-read string|null $source_type
 * @property-read string|null $text_value
 * Presence-aware response; omitted optional fields return null. */
final class RefundLineItemModifierAllocationPreviousAttributes extends Model {
    /** @param array{'allocation_basis'?: mixed, 'amount_money'?: mixed, 'modifier_group_name'?: mixed, 'name'?: mixed, 'order_line_item_modifier_id'?: mixed, 'quantity'?: mixed, 'refund_line_item_modifier_allocation_id'?: mixed, 'show_on_fulfillment'?: mixed, 'show_on_receipt'?: mixed, 'source_type'?: mixed, 'text_value'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('RefundLineItemModifierAllocationPreviousAttributes')); }
    /** Whether the line item was refunded by quantity or by amount. Value enum: "quantity", "amount". anyOf[1] (Value): string. Whether the line item was refunded by quantity or by amount. Value enum: "quantity", "amount". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getAllocationBasis(): string|null { return $this->get('allocation_basis'); }
    public function hasAllocationBasis(): bool { return $this->has('allocation_basis'); }
    /** Part of the line's refund that applies to this modifier. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getAmountMoney(): MoneyValuePreviousAttributes|null { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** Name of the modifier group the modifier belongs to. anyOf[1] (Value): string. Name of the modifier group the modifier belongs to. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getModifierGroupName(): string|null { return $this->get('modifier_group_name'); }
    public function hasModifierGroupName(): bool { return $this->has('modifier_group_name'); }
    /** Name of the selected modifier recorded on the order line item. anyOf[1] (Value): string. Name of the selected modifier recorded on the order line item. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getName(): string|null { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** ID of the modifier on the order line item that this part of the refund applies to. anyOf[1] (Value): string. ID of the modifier on the order line item that this part of the refund applies to. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getOrderLineItemModifierId(): string|null { return $this->get('order_line_item_modifier_id'); }
    public function hasOrderLineItemModifierId(): bool { return $this->has('order_line_item_modifier_id'); }
    /** Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer. Whole-number quantity; fractional quantities are not supported. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getQuantity(): int|null { return $this->get('quantity'); }
    public function hasQuantity(): bool { return $this->has('quantity'); }
    /** Unique identifier for this modifier's share of the refund, prefixed rlima_. anyOf[1] (Value): string. Unique identifier for this modifier's share of the refund, prefixed rlima_. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getRefundLineItemModifierAllocationId(): string|null { return $this->get('refund_line_item_modifier_allocation_id'); }
    public function hasRefundLineItemModifierAllocationId(): bool { return $this->has('refund_line_item_modifier_allocation_id'); }
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
    /** Buyer-entered text recorded for a text modifier selection. anyOf[1] (Value): string. Buyer-entered text recorded for a text modifier selection. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getTextValue(): string|null { return $this->get('text_value'); }
    public function hasTextValue(): bool { return $this->has('text_value'); }
}
