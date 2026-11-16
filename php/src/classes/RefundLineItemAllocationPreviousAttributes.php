<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<RefundLineItemAdjustmentRefundPreviousAttributes>|null $adjustment_refunds
 * @property-read list<RefundLineItemAdjustmentPreviousAttributes>|null $adjustments
 * @property-read mixed $automatic_refund
 * @property-read string|null $bundle_id
 * @property-read list<CategoryReferencePreviousAttributes>|null $categories
 * @property-read list<RefundLineItemModifierAllocationPreviousAttributes>|null $modifiers
 * @property-read string|null $order_id
 * @property-read string|null $order_line_item_id
 * @property-read string|null $product_id
 * @property-read int|null $quantity
 * @property-read mixed $refunded_money
 * @property-read list<SelectedProductOptionPreviousAttributes>|null $selected_options
 * @property-read string|null $sku
 * @property-read string|null $source_type
 * @property-read list<RefundTaxBreakdownRefundPreviousAttributes>|null $tax_breakdown_refunds
 * @property-read string|null $tax_refund_mode
 * @property-read string|null $variant_id
 * Presence-aware response; omitted optional fields return null. */
final class RefundLineItemAllocationPreviousAttributes extends Model {
    /** @param array{'adjustment_refunds'?: mixed, 'adjustments'?: mixed, 'automatic_refund'?: mixed, 'bundle_id'?: mixed, 'categories'?: mixed, 'modifiers'?: mixed, 'order_id'?: mixed, 'order_line_item_id'?: mixed, 'product_id'?: mixed, 'quantity'?: mixed, 'refunded_money'?: mixed, 'selected_options'?: mixed, 'sku'?: mixed, 'source_type'?: mixed, 'tax_breakdown_refunds'?: mixed, 'tax_refund_mode'?: mixed, 'variant_id'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('RefundLineItemAllocationPreviousAttributes')); }
    /** Amounts refunded back against adjustments withheld by earlier refunds of this line. anyOf[1] (Value): Array of {@see RefundLineItemAdjustmentRefundPreviousAttributes}. Amounts refunded back against adjustments withheld by earlier refunds of this line. anyOf[1][] (Value): {@see RefundLineItemAdjustmentRefundPreviousAttributes}. anyOf[2] (Value): null.
     * @return list<RefundLineItemAdjustmentRefundPreviousAttributes>|null
     */
    public function getAdjustmentRefunds(): array|null { return $this->get('adjustment_refunds'); }
    public function hasAdjustmentRefunds(): bool { return $this->has('adjustment_refunds'); }
    /** Amounts withheld from this line's refund, such as a restocking fee. anyOf[1] (Value): Array of {@see RefundLineItemAdjustmentPreviousAttributes}. Amounts withheld from this line's refund, such as a restocking fee. anyOf[1][] (Value): {@see RefundLineItemAdjustmentPreviousAttributes}. anyOf[2] (Value): null.
     * @return list<RefundLineItemAdjustmentPreviousAttributes>|null
     */
    public function getAdjustments(): array|null { return $this->get('adjustments'); }
    public function hasAdjustments(): bool { return $this->has('adjustments'); }
    /** What Flint calculated for the refunded portion of the line before adjustments. anyOf[1] (Value): {@see RefundLineItemAutomaticRefundPreviousAttributes}. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getAutomaticRefund(): mixed { return $this->get('automatic_refund'); }
    public function hasAutomaticRefund(): bool { return $this->has('automatic_refund'); }
    /** ID of the bundle the line was sold from. anyOf[1] (Value): string. ID of the bundle the line was sold from. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getBundleId(): string|null { return $this->get('bundle_id'); }
    public function hasBundleId(): bool { return $this->has('bundle_id'); }
    /** Catalog categories of the item. anyOf[1] (Value): Array of {@see CategoryReferencePreviousAttributes}. Catalog categories of the item. anyOf[1][] (Value): {@see CategoryReferencePreviousAttributes}. anyOf[2] (Value): null.
     * @return list<CategoryReferencePreviousAttributes>|null
     */
    public function getCategories(): array|null { return $this->get('categories'); }
    public function hasCategories(): bool { return $this->has('categories'); }
    /** The part of the refund that applies to each modifier on the line. anyOf[1] (Value): Array of {@see RefundLineItemModifierAllocationPreviousAttributes}. The part of the refund that applies to each modifier on the line. anyOf[1][] (Value): {@see RefundLineItemModifierAllocationPreviousAttributes}. anyOf[2] (Value): null.
     * @return list<RefundLineItemModifierAllocationPreviousAttributes>|null
     */
    public function getModifiers(): array|null { return $this->get('modifiers'); }
    public function hasModifiers(): bool { return $this->has('modifiers'); }
    /** ID of the order that owns the refunded line item. anyOf[1] (Value): string. ID of the order that owns the refunded line item. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getOrderId(): string|null { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** ID of the order line item this allocation refunded. anyOf[1] (Value): string. ID of the order line item this allocation refunded. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getOrderLineItemId(): string|null { return $this->get('order_line_item_id'); }
    public function hasOrderLineItemId(): bool { return $this->has('order_line_item_id'); }
    /** ID of the catalog product the line was sold from. anyOf[1] (Value): string. ID of the catalog product the line was sold from. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getProductId(): string|null { return $this->get('product_id'); }
    public function hasProductId(): bool { return $this->has('product_id'); }
    /** Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer. Whole-number quantity; fractional quantities are not supported. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getQuantity(): int|null { return $this->get('quantity'); }
    public function hasQuantity(): bool { return $this->has('quantity'); }
    /** Amount refunded for this line: the automatic refund less adjustments, plus any refunds back against earlier adjustments. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getRefundedMoney(): mixed { return $this->get('refunded_money'); }
    public function hasRefundedMoney(): bool { return $this->has('refunded_money'); }
    /** Variant options selected for the item, such as size and color. anyOf[1] (Value): Array of {@see SelectedProductOptionPreviousAttributes}. Variant options selected for the item, such as size and color. anyOf[1][] (Value): {@see SelectedProductOptionPreviousAttributes}. anyOf[2] (Value): null.
     * @return list<SelectedProductOptionPreviousAttributes>|null
     */
    public function getSelectedOptions(): array|null { return $this->get('selected_options'); }
    public function hasSelectedOptions(): bool { return $this->has('selected_options'); }
    /** SKU of the item as sold. anyOf[1] (Value): string. SKU of the item as sold. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getSku(): string|null { return $this->get('sku'); }
    public function hasSku(): bool { return $this->has('sku'); }
    /** Whether the line was sold as a catalog `variant` or a `bundle`. Value enum: "variant", "bundle". anyOf[1] (Value): string. Whether the line was sold as a catalog `variant` or a `bundle`. Value enum: "variant", "bundle". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getSourceType(): string|null { return $this->get('source_type'); }
    public function hasSourceType(): bool { return $this->has('source_type'); }
    /** Tax reversed for each jurisdiction on this line. anyOf[1] (Value): Array of {@see RefundTaxBreakdownRefundPreviousAttributes}. Tax reversed for each jurisdiction on this line. anyOf[1][] (Value): {@see RefundTaxBreakdownRefundPreviousAttributes}. anyOf[2] (Value): null.
     * @return list<RefundTaxBreakdownRefundPreviousAttributes>|null
     */
    public function getTaxBreakdownRefunds(): array|null { return $this->get('tax_breakdown_refunds'); }
    public function hasTaxBreakdownRefunds(): bool { return $this->has('tax_breakdown_refunds'); }
    /** Whether Flint calculated the tax refunded (`automatic`) or you set it (`explicit`). Value enum: "automatic", "explicit". anyOf[1] (Value): string. Whether Flint calculated the tax refunded (`automatic`) or you set it (`explicit`). Value enum: "automatic", "explicit". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getTaxRefundMode(): string|null { return $this->get('tax_refund_mode'); }
    public function hasTaxRefundMode(): bool { return $this->has('tax_refund_mode'); }
    /** ID of the catalog variant the line was sold from. anyOf[1] (Value): string. ID of the catalog variant the line was sold from. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getVariantId(): string|null { return $this->get('variant_id'); }
    public function hasVariantId(): bool { return $this->has('variant_id'); }
}
