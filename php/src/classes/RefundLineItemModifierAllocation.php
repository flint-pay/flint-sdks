<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $allocation_basis
 * @property-read MoneyValue $amount_money
 * @property-read string $modifier_group_name
 * @property-read string $name
 * @property-read string $order_line_item_modifier_id
 * @property-read string $quantity
 * @property-read string $refund_line_item_modifier_allocation_id
 * @property-read bool $show_on_fulfillment
 * @property-read bool $show_on_receipt
 * @property-read string $source_type
 * @property-read string $text_value
 * Presence-aware response; omitted fields throw when accessed. */
final class RefundLineItemModifierAllocation extends Model {
    /** @param array{'allocation_basis': string, 'amount_money': mixed, 'modifier_group_name': string, 'name': string, 'order_line_item_modifier_id'?: string, 'quantity': string, 'refund_line_item_modifier_allocation_id': string, 'show_on_fulfillment': bool, 'show_on_receipt': bool, 'source_type': string, 'text_value'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('RefundLineItemModifierAllocation')); }
    /** @return string
     * @throws SdkError When allocation_basis is omitted; use hasAllocationBasis() or valueOrDefault().
     */
    public function getAllocationBasis(): string { return $this->get('allocation_basis'); }
    public function hasAllocationBasis(): bool { return $this->has('allocation_basis'); }
    /** @return MoneyValue
     * @throws SdkError When amount_money is omitted; use hasAmountMoney() or valueOrDefault().
     */
    public function getAmountMoney(): MoneyValue { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** @return string
     * @throws SdkError When modifier_group_name is omitted; use hasModifierGroupName() or valueOrDefault().
     */
    public function getModifierGroupName(): string { return $this->get('modifier_group_name'); }
    public function hasModifierGroupName(): bool { return $this->has('modifier_group_name'); }
    /** @return string
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** @return string
     * @throws SdkError When order_line_item_modifier_id is omitted; use hasOrderLineItemModifierId() or valueOrDefault().
     */
    public function getOrderLineItemModifierId(): string { return $this->get('order_line_item_modifier_id'); }
    public function hasOrderLineItemModifierId(): bool { return $this->has('order_line_item_modifier_id'); }
    /** @return string
     * @throws SdkError When quantity is omitted; use hasQuantity() or valueOrDefault().
     */
    public function getQuantity(): string { return $this->get('quantity'); }
    public function hasQuantity(): bool { return $this->has('quantity'); }
    /** @return string
     * @throws SdkError When refund_line_item_modifier_allocation_id is omitted; use hasRefundLineItemModifierAllocationId() or valueOrDefault().
     */
    public function getRefundLineItemModifierAllocationId(): string { return $this->get('refund_line_item_modifier_allocation_id'); }
    public function hasRefundLineItemModifierAllocationId(): bool { return $this->has('refund_line_item_modifier_allocation_id'); }
    /** @return bool
     * @throws SdkError When show_on_fulfillment is omitted; use hasShowOnFulfillment() or valueOrDefault().
     */
    public function getShowOnFulfillment(): bool { return $this->get('show_on_fulfillment'); }
    public function hasShowOnFulfillment(): bool { return $this->has('show_on_fulfillment'); }
    /** @return bool
     * @throws SdkError When show_on_receipt is omitted; use hasShowOnReceipt() or valueOrDefault().
     */
    public function getShowOnReceipt(): bool { return $this->get('show_on_receipt'); }
    public function hasShowOnReceipt(): bool { return $this->has('show_on_receipt'); }
    /** @return string
     * @throws SdkError When source_type is omitted; use hasSourceType() or valueOrDefault().
     */
    public function getSourceType(): string { return $this->get('source_type'); }
    public function hasSourceType(): bool { return $this->has('source_type'); }
    /** @return string
     * @throws SdkError When text_value is omitted; use hasTextValue() or valueOrDefault().
     */
    public function getTextValue(): string { return $this->get('text_value'); }
    public function hasTextValue(): bool { return $this->has('text_value'); }
}
