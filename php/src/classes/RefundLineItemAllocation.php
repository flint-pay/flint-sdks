<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?list<RefundLineItemAdjustmentRefund> $adjustment_refunds
 * @property-read ?list<RefundLineItemAdjustment> $adjustments
 * @property-read RefundLineItemAutomaticRefund $automatic_refund
 * @property-read ?string $bundle_id
 * @property-read ?list<CategoryReference> $categories
 * @property-read ?list<RefundLineItemModifierAllocation> $modifiers
 * @property-read string $order_line_item_id
 * @property-read ?string $product_id
 * @property-read string $quantity
 * @property-read MoneyValue $refunded_money
 * @property-read ?list<SelectedProductOption> $selected_options
 * @property-read ?string $sku
 * @property-read ?string $source_type
 * @property-read ?list<RefundTaxBreakdownRefund> $tax_breakdown_refunds
 * @property-read string $tax_refund_mode
 * @property-read ?string $variant_id
 * Presence-aware response; omitted optional fields return null. */
final class RefundLineItemAllocation extends Model {
    /** @param array{'adjustment_refunds'?: list<mixed>, 'adjustments'?: list<mixed>, 'automatic_refund': mixed, 'bundle_id'?: string, 'categories'?: list<mixed>, 'modifiers'?: list<mixed>, 'order_line_item_id': string, 'product_id'?: string, 'quantity': string, 'refunded_money': mixed, 'selected_options'?: list<mixed>, 'sku'?: string, 'source_type'?: string, 'tax_breakdown_refunds'?: list<mixed>, 'tax_refund_mode': string, 'variant_id'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('RefundLineItemAllocation')); }
    /** Shape $ (Value): Array of {@see RefundLineItemAdjustmentRefund}. Shape $[] (Value): {@see RefundLineItemAdjustmentRefund}. An amount refunded back against an earlier line item adjustment.
     * @return ?list<RefundLineItemAdjustmentRefund>
     */
    public function getAdjustmentRefunds(): ?array { return $this->get('adjustment_refunds'); }
    public function hasAdjustmentRefunds(): bool { return $this->has('adjustment_refunds'); }
    /** Shape $ (Value): Array of {@see RefundLineItemAdjustment}. Shape $[] (Value): {@see RefundLineItemAdjustment}. An adjustment on a refunded line item, such as a restocking fee or withheld amount, with how much has been refunded and what remains.
     * @return ?list<RefundLineItemAdjustment>
     */
    public function getAdjustments(): ?array { return $this->get('adjustments'); }
    public function hasAdjustments(): bool { return $this->has('adjustments'); }
    /** Shape $ (Value): {@see RefundLineItemAutomaticRefund}. The subtotal, discount, tax, and total Flint calculated automatically for a refunded line item.
     * @return RefundLineItemAutomaticRefund
     */
    public function getAutomaticRefund(): RefundLineItemAutomaticRefund { return $this->get('automatic_refund'); }
    public function hasAutomaticRefund(): bool { return $this->has('automatic_refund'); }
    /** Shape $ (Value): string.
     * @return ?string
     */
    public function getBundleId(): ?string { return $this->get('bundle_id'); }
    public function hasBundleId(): bool { return $this->has('bundle_id'); }
    /** Shape $ (Value): Array of {@see CategoryReference}. Shape $[] (Value): {@see CategoryReference}. A reference to a product category by ID, handle, and name.
     * @return ?list<CategoryReference>
     */
    public function getCategories(): ?array { return $this->get('categories'); }
    public function hasCategories(): bool { return $this->has('categories'); }
    /** Shape $ (Value): Array of {@see RefundLineItemModifierAllocation}. Shape $[] (Value): {@see RefundLineItemModifierAllocation}. The part of a line item refund that applies to one modifier, by quantity or amount.
     * @return ?list<RefundLineItemModifierAllocation>
     */
    public function getModifiers(): ?array { return $this->get('modifiers'); }
    public function hasModifiers(): bool { return $this->has('modifiers'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getOrderLineItemId(): string { return $this->get('order_line_item_id'); }
    public function hasOrderLineItemId(): bool { return $this->has('order_line_item_id'); }
    /** Shape $ (Value): string.
     * @return ?string
     */
    public function getProductId(): ?string { return $this->get('product_id'); }
    public function hasProductId(): bool { return $this->has('product_id'); }
    /** Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return string
     */
    public function getQuantity(): string { return $this->get('quantity'); }
    public function hasQuantity(): bool { return $this->has('quantity'); }
    /** Shape $ (Value): {@see MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getRefundedMoney(): MoneyValue { return $this->get('refunded_money'); }
    public function hasRefundedMoney(): bool { return $this->has('refunded_money'); }
    /** Shape $ (Value): Array of {@see SelectedProductOption}. Shape $[] (Value): {@see SelectedProductOption}. An option and value chosen for a product variant, such as size Large.
     * @return ?list<SelectedProductOption>
     */
    public function getSelectedOptions(): ?array { return $this->get('selected_options'); }
    public function hasSelectedOptions(): bool { return $this->has('selected_options'); }
    /** Shape $ (Value): string.
     * @return ?string
     */
    public function getSku(): ?string { return $this->get('sku'); }
    public function hasSku(): bool { return $this->has('sku'); }
    /** Shape $ (Value): string.  Value enum: "variant", "bundle".
     * @return ?string
     */
    public function getSourceType(): ?string { return $this->get('source_type'); }
    public function hasSourceType(): bool { return $this->has('source_type'); }
    /** Shape $ (Value): Array of {@see RefundTaxBreakdownRefund}. Shape $[] (Value): {@see RefundTaxBreakdownRefund}. The tax refunded for one tax breakdown on an order.
     * @return ?list<RefundTaxBreakdownRefund>
     */
    public function getTaxBreakdownRefunds(): ?array { return $this->get('tax_breakdown_refunds'); }
    public function hasTaxBreakdownRefunds(): bool { return $this->has('tax_breakdown_refunds'); }
    /** Shape $ (Value): string.  Value enum: "automatic", "explicit".
     * @return string
     */
    public function getTaxRefundMode(): string { return $this->get('tax_refund_mode'); }
    public function hasTaxRefundMode(): bool { return $this->has('tax_refund_mode'); }
    /** Shape $ (Value): string.
     * @return ?string
     */
    public function getVariantId(): ?string { return $this->get('variant_id'); }
    public function hasVariantId(): bool { return $this->has('variant_id'); }
}
