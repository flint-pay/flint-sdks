<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $allocation_basis
 * @property-read MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $amount_money
 * @property-read string|null $modifier_group_name
 * @property-read string|null $name
 * @property-read string|null $order_line_item_modifier_id
 * @property-read int|null $quantity
 * @property-read string|null $refund_line_item_modifier_allocation_id
 * @property-read bool|null $show_on_fulfillment
 * @property-read bool|null $show_on_receipt
 * @property-read string|null $source_type
 * @property-read string|null $text_value
 * Presence-aware input; omitted fields throw when accessed. */
final class RefundLineItemModifierAllocationPreviousAttributesInput extends Model {
    /** @param array{'allocation_basis'?: string|null, 'amount_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'modifier_group_name'?: string|null, 'name'?: string|null, 'order_line_item_modifier_id'?: string|null, 'quantity'?: int|null, 'refund_line_item_modifier_allocation_id'?: string|null, 'show_on_fulfillment'?: bool|null, 'show_on_receipt'?: bool|null, 'source_type'?: string|null, 'text_value'?: string|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('RefundLineItemModifierAllocationPreviousAttributesInput')); }
    /** Whether the line item was refunded by quantity or by amount. Value enum: "quantity", "amount". anyOf[1] (Value): string. Whether the line item was refunded by quantity or by amount. Value enum: "quantity", "amount". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When allocation_basis is omitted; use hasAllocationBasis() or valueOrDefault().
     */
    public function getAllocationBasis(): mixed { return $this->get('allocation_basis'); }
    public function hasAllocationBasis(): bool { return $this->has('allocation_basis'); }
    /** Part of the line's refund that applies to this modifier. anyOf[1] (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When amount_money is omitted; use hasAmountMoney() or valueOrDefault().
     */
    public function getAmountMoney(): mixed { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** Name of the modifier group the modifier belongs to. anyOf[1] (Value): string. Name of the modifier group the modifier belongs to. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When modifier_group_name is omitted; use hasModifierGroupName() or valueOrDefault().
     */
    public function getModifierGroupName(): mixed { return $this->get('modifier_group_name'); }
    public function hasModifierGroupName(): bool { return $this->has('modifier_group_name'); }
    /** Name of the selected modifier recorded on the order line item. anyOf[1] (Value): string. Name of the selected modifier recorded on the order line item. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): mixed { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** ID of the modifier on the order line item that this part of the refund applies to. anyOf[1] (Value): string. ID of the modifier on the order line item that this part of the refund applies to. Example: "olim_01KEZF7C00YP0WSZGRAD25EB1Z". anyOf[2] (Value): null.
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
    /** Unique identifier for this modifier's share of the refund, prefixed rlima_. anyOf[1] (Value): string. Unique identifier for this modifier's share of the refund, prefixed rlima_. Example: "rlima_01KEZF7C00SRZH0NHAKJB05NEM". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When refund_line_item_modifier_allocation_id is omitted; use hasRefundLineItemModifierAllocationId() or valueOrDefault().
     */
    public function getRefundLineItemModifierAllocationId(): mixed { return $this->get('refund_line_item_modifier_allocation_id'); }
    public function hasRefundLineItemModifierAllocationId(): bool { return $this->has('refund_line_item_modifier_allocation_id'); }
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
    /** Buyer-entered text recorded for a text modifier selection. anyOf[1] (Value): string. Buyer-entered text recorded for a text modifier selection. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When text_value is omitted; use hasTextValue() or valueOrDefault().
     */
    public function getTextValue(): mixed { return $this->get('text_value'); }
    public function hasTextValue(): bool { return $this->has('text_value'); }
}
