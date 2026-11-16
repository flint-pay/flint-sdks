<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<RefundLineItemAdjustmentRefundPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null $adjustment_refunds
 * @property-read list<RefundLineItemAdjustmentPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null $adjustments
 * @property-read RefundLineItemAutomaticRefundPreviousAttributesInput|array<array-key, mixed>|\stdClass|null $automatic_refund
 * @property-read string|null $bundle_id
 * @property-read list<CategoryReferencePreviousAttributesInput|array<array-key, mixed>|\stdClass>|null $categories
 * @property-read list<RefundLineItemModifierAllocationPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null $modifiers
 * @property-read string|null $order_id
 * @property-read string|null $order_line_item_id
 * @property-read string|null $product_id
 * @property-read int|null $quantity
 * @property-read MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $refunded_money
 * @property-read list<SelectedProductOptionPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null $selected_options
 * @property-read string|null $sku
 * @property-read string|null $source_type
 * @property-read list<RefundTaxBreakdownRefundPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null $tax_breakdown_refunds
 * @property-read string|null $tax_refund_mode
 * @property-read string|null $variant_id
 * Presence-aware input; omitted fields throw when accessed. */
final class RefundLineItemAllocationPreviousAttributesInput extends Model {
    /** @param array{'adjustment_refunds'?: list<RefundLineItemAdjustmentRefundPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null, 'adjustments'?: list<RefundLineItemAdjustmentPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null, 'automatic_refund'?: RefundLineItemAutomaticRefundPreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'bundle_id'?: string|null, 'categories'?: list<CategoryReferencePreviousAttributesInput|array<array-key, mixed>|\stdClass>|null, 'modifiers'?: list<RefundLineItemModifierAllocationPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null, 'order_id'?: string|null, 'order_line_item_id'?: string|null, 'product_id'?: string|null, 'quantity'?: int|null, 'refunded_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'selected_options'?: list<SelectedProductOptionPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null, 'sku'?: string|null, 'source_type'?: string|null, 'tax_breakdown_refunds'?: list<RefundTaxBreakdownRefundPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null, 'tax_refund_mode'?: string|null, 'variant_id'?: string|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('RefundLineItemAllocationPreviousAttributesInput')); }
    /** Amounts refunded back against adjustments withheld by earlier refunds of this line. anyOf[1] (Value): Array of {@see RefundLineItemAdjustmentRefundPreviousAttributesInput}. Amounts refunded back against adjustments withheld by earlier refunds of this line. anyOf[1][] (Value): {@see RefundLineItemAdjustmentRefundPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return list<RefundLineItemAdjustmentRefundPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null
     * @throws SdkError When adjustment_refunds is omitted; use hasAdjustmentRefunds() or valueOrDefault().
     */
    public function getAdjustmentRefunds(): mixed { return $this->get('adjustment_refunds'); }
    public function hasAdjustmentRefunds(): bool { return $this->has('adjustment_refunds'); }
    /** Amounts withheld from this line's refund, such as a restocking fee. anyOf[1] (Value): Array of {@see RefundLineItemAdjustmentPreviousAttributesInput}. Amounts withheld from this line's refund, such as a restocking fee. anyOf[1][] (Value): {@see RefundLineItemAdjustmentPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return list<RefundLineItemAdjustmentPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null
     * @throws SdkError When adjustments is omitted; use hasAdjustments() or valueOrDefault().
     */
    public function getAdjustments(): mixed { return $this->get('adjustments'); }
    public function hasAdjustments(): bool { return $this->has('adjustments'); }
    /** What Flint calculated for the refunded portion of the line before adjustments. anyOf[1] (Value): {@see RefundLineItemAutomaticRefundPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return RefundLineItemAutomaticRefundPreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When automatic_refund is omitted; use hasAutomaticRefund() or valueOrDefault().
     */
    public function getAutomaticRefund(): mixed { return $this->get('automatic_refund'); }
    public function hasAutomaticRefund(): bool { return $this->has('automatic_refund'); }
    /** ID of the bundle the line was sold from. anyOf[1] (Value): string. ID of the bundle the line was sold from. Example: "bun_01KEZF7C00TQ6S76Z6CVQF5SVN". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When bundle_id is omitted; use hasBundleId() or valueOrDefault().
     */
    public function getBundleId(): mixed { return $this->get('bundle_id'); }
    public function hasBundleId(): bool { return $this->has('bundle_id'); }
    /** Catalog categories of the item. anyOf[1] (Value): Array of {@see CategoryReferencePreviousAttributesInput}. Catalog categories of the item. anyOf[1][] (Value): {@see CategoryReferencePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return list<CategoryReferencePreviousAttributesInput|array<array-key, mixed>|\stdClass>|null
     * @throws SdkError When categories is omitted; use hasCategories() or valueOrDefault().
     */
    public function getCategories(): mixed { return $this->get('categories'); }
    public function hasCategories(): bool { return $this->has('categories'); }
    /** The part of the refund that applies to each modifier on the line. anyOf[1] (Value): Array of {@see RefundLineItemModifierAllocationPreviousAttributesInput}. The part of the refund that applies to each modifier on the line. anyOf[1][] (Value): {@see RefundLineItemModifierAllocationPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return list<RefundLineItemModifierAllocationPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null
     * @throws SdkError When modifiers is omitted; use hasModifiers() or valueOrDefault().
     */
    public function getModifiers(): mixed { return $this->get('modifiers'); }
    public function hasModifiers(): bool { return $this->has('modifiers'); }
    /** ID of the order that owns the refunded line item. anyOf[1] (Value): string. ID of the order that owns the refunded line item. Example: "ord_01KEZF7C0054GQKJ142A8X367A". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When order_id is omitted; use hasOrderId() or valueOrDefault().
     */
    public function getOrderId(): mixed { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** ID of the order line item this allocation refunded. anyOf[1] (Value): string. ID of the order line item this allocation refunded. Example: "li_01KEZF7C008YPRCK7VDKTGWR31". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When order_line_item_id is omitted; use hasOrderLineItemId() or valueOrDefault().
     */
    public function getOrderLineItemId(): mixed { return $this->get('order_line_item_id'); }
    public function hasOrderLineItemId(): bool { return $this->has('order_line_item_id'); }
    /** ID of the catalog product the line was sold from. anyOf[1] (Value): string. ID of the catalog product the line was sold from. Example: "prod_01KEZF7C00BVSHCNWVH528HB66". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When product_id is omitted; use hasProductId() or valueOrDefault().
     */
    public function getProductId(): mixed { return $this->get('product_id'); }
    public function hasProductId(): bool { return $this->has('product_id'); }
    /** Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer. Whole-number quantity; fractional quantities are not supported. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     * @throws SdkError When quantity is omitted; use hasQuantity() or valueOrDefault().
     */
    public function getQuantity(): mixed { return $this->get('quantity'); }
    public function hasQuantity(): bool { return $this->has('quantity'); }
    /** Amount refunded for this line: the automatic refund less adjustments, plus any refunds back against earlier adjustments. anyOf[1] (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When refunded_money is omitted; use hasRefundedMoney() or valueOrDefault().
     */
    public function getRefundedMoney(): mixed { return $this->get('refunded_money'); }
    public function hasRefundedMoney(): bool { return $this->has('refunded_money'); }
    /** Variant options selected for the item, such as size and color. anyOf[1] (Value): Array of {@see SelectedProductOptionPreviousAttributesInput}. Variant options selected for the item, such as size and color. anyOf[1][] (Value): {@see SelectedProductOptionPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return list<SelectedProductOptionPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null
     * @throws SdkError When selected_options is omitted; use hasSelectedOptions() or valueOrDefault().
     */
    public function getSelectedOptions(): mixed { return $this->get('selected_options'); }
    public function hasSelectedOptions(): bool { return $this->has('selected_options'); }
    /** SKU of the item as sold. anyOf[1] (Value): string. SKU of the item as sold. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When sku is omitted; use hasSku() or valueOrDefault().
     */
    public function getSku(): mixed { return $this->get('sku'); }
    public function hasSku(): bool { return $this->has('sku'); }
    /** Whether the line was sold as a catalog `variant` or a `bundle`. Value enum: "variant", "bundle". anyOf[1] (Value): string. Whether the line was sold as a catalog `variant` or a `bundle`. Value enum: "variant", "bundle". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When source_type is omitted; use hasSourceType() or valueOrDefault().
     */
    public function getSourceType(): mixed { return $this->get('source_type'); }
    public function hasSourceType(): bool { return $this->has('source_type'); }
    /** Tax reversed for each jurisdiction on this line. anyOf[1] (Value): Array of {@see RefundTaxBreakdownRefundPreviousAttributesInput}. Tax reversed for each jurisdiction on this line. anyOf[1][] (Value): {@see RefundTaxBreakdownRefundPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return list<RefundTaxBreakdownRefundPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null
     * @throws SdkError When tax_breakdown_refunds is omitted; use hasTaxBreakdownRefunds() or valueOrDefault().
     */
    public function getTaxBreakdownRefunds(): mixed { return $this->get('tax_breakdown_refunds'); }
    public function hasTaxBreakdownRefunds(): bool { return $this->has('tax_breakdown_refunds'); }
    /** Whether Flint calculated the tax refunded (`automatic`) or you set it (`explicit`). Value enum: "automatic", "explicit". anyOf[1] (Value): string. Whether Flint calculated the tax refunded (`automatic`) or you set it (`explicit`). Value enum: "automatic", "explicit". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When tax_refund_mode is omitted; use hasTaxRefundMode() or valueOrDefault().
     */
    public function getTaxRefundMode(): mixed { return $this->get('tax_refund_mode'); }
    public function hasTaxRefundMode(): bool { return $this->has('tax_refund_mode'); }
    /** ID of the catalog variant the line was sold from. anyOf[1] (Value): string. ID of the catalog variant the line was sold from. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When variant_id is omitted; use hasVariantId() or valueOrDefault().
     */
    public function getVariantId(): mixed { return $this->get('variant_id'); }
    public function hasVariantId(): bool { return $this->has('variant_id'); }
}
