<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $allocation_basis
 * @property-read MoneyValue $amount_money
 * @property-read string $modifier_group_name
 * @property-read string $name
 * @property-read ?string $order_line_item_modifier_id
 * @property-read int $quantity
 * @property-read string $refund_line_item_modifier_allocation_id
 * @property-read bool $show_on_fulfillment
 * @property-read bool $show_on_receipt
 * @property-read string $source_type
 * @property-read ?string $text_value
 * Presence-aware response; omitted optional fields return null. */
final class RefundLineItemModifierAllocation extends Model {
    /** @param array{'allocation_basis': string, 'amount_money': mixed, 'modifier_group_name': string, 'name': string, 'order_line_item_modifier_id'?: string, 'quantity': int, 'refund_line_item_modifier_allocation_id': string, 'show_on_fulfillment': bool, 'show_on_receipt': bool, 'source_type': string, 'text_value'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('RefundLineItemModifierAllocation')); }
    /** Value enum: "quantity", "amount".
     * @return string
     */
    public function getAllocationBasis(): string { return $this->get('allocation_basis'); }
    public function hasAllocationBasis(): bool { return $this->has('allocation_basis'); }
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getAmountMoney(): MoneyValue { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** modifier_group_name
     * @return string
     */
    public function getModifierGroupName(): string { return $this->get('modifier_group_name'); }
    public function hasModifierGroupName(): bool { return $this->has('modifier_group_name'); }
    /** name
     * @return string
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** order_line_item_modifier_id
     * @return ?string
     */
    public function getOrderLineItemModifierId(): ?string { return $this->get('order_line_item_modifier_id'); }
    public function hasOrderLineItemModifierId(): bool { return $this->has('order_line_item_modifier_id'); }
    /** Whole-number quantity; fractional quantities are not supported. Format: int64.
     * @return int
     */
    public function getQuantity(): int { return $this->get('quantity'); }
    public function hasQuantity(): bool { return $this->has('quantity'); }
    /** refund_line_item_modifier_allocation_id
     * @return string
     */
    public function getRefundLineItemModifierAllocationId(): string { return $this->get('refund_line_item_modifier_allocation_id'); }
    public function hasRefundLineItemModifierAllocationId(): bool { return $this->has('refund_line_item_modifier_allocation_id'); }
    /** show_on_fulfillment
     * @return bool
     */
    public function getShowOnFulfillment(): bool { return $this->get('show_on_fulfillment'); }
    public function hasShowOnFulfillment(): bool { return $this->has('show_on_fulfillment'); }
    /** show_on_receipt
     * @return bool
     */
    public function getShowOnReceipt(): bool { return $this->get('show_on_receipt'); }
    public function hasShowOnReceipt(): bool { return $this->has('show_on_receipt'); }
    /** Value enum: "catalog_modifier", "text".
     * @return string
     */
    public function getSourceType(): string { return $this->get('source_type'); }
    public function hasSourceType(): bool { return $this->has('source_type'); }
    /** text_value
     * @return ?string
     */
    public function getTextValue(): ?string { return $this->get('text_value'); }
    public function hasTextValue(): bool { return $this->has('text_value'); }
}
