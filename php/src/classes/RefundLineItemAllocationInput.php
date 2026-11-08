<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<RefundLineItemAdjustmentRefundInput|array<array-key, mixed>|\stdClass> $adjustment_refunds
 * @property-read list<RefundLineItemAdjustmentInput|array<array-key, mixed>|\stdClass> $adjustments
 * @property-read RefundLineItemAutomaticRefundInput|array<array-key, mixed>|\stdClass $automatic_refund
 * @property-read string $bundle_id
 * @property-read list<CategoryReferenceInput|array<array-key, mixed>|\stdClass> $categories
 * @property-read list<RefundLineItemModifierAllocationInput|array<array-key, mixed>|\stdClass> $modifiers
 * @property-read string $order_line_item_id
 * @property-read string $product_id
 * @property-read int $quantity
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $refunded_money
 * @property-read list<SelectedProductOptionInput|array<array-key, mixed>|\stdClass> $selected_options
 * @property-read string $sku
 * @property-read string $source_type
 * @property-read list<RefundTaxBreakdownRefundInput|array<array-key, mixed>|\stdClass> $tax_breakdown_refunds
 * @property-read string $tax_refund_mode
 * @property-read string $variant_id
 * Presence-aware input; omitted fields throw when accessed. */
final class RefundLineItemAllocationInput extends Model {
    /** @param array{'adjustment_refunds'?: list<RefundLineItemAdjustmentRefundInput|array<array-key, mixed>|\stdClass>, 'adjustments'?: list<RefundLineItemAdjustmentInput|array<array-key, mixed>|\stdClass>, 'automatic_refund': RefundLineItemAutomaticRefundInput|array<array-key, mixed>|\stdClass, 'bundle_id'?: string, 'categories'?: list<CategoryReferenceInput|array<array-key, mixed>|\stdClass>, 'modifiers'?: list<RefundLineItemModifierAllocationInput|array<array-key, mixed>|\stdClass>, 'order_line_item_id': string, 'product_id'?: string, 'quantity': int, 'refunded_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'selected_options'?: list<SelectedProductOptionInput|array<array-key, mixed>|\stdClass>, 'sku'?: string, 'source_type'?: string, 'tax_breakdown_refunds'?: list<RefundTaxBreakdownRefundInput|array<array-key, mixed>|\stdClass>, 'tax_refund_mode': string, 'variant_id'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('RefundLineItemAllocationInput')); }
    /** Amounts refunded back against adjustments withheld by earlier refunds of this line. [] (Value): {@see RefundLineItemAdjustmentRefundInput}. An amount refunded back against an earlier line item adjustment.
     * @return list<RefundLineItemAdjustmentRefundInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When adjustment_refunds is omitted; use hasAdjustmentRefunds() or valueOrDefault().
     */
    public function getAdjustmentRefunds(): array { return $this->get('adjustment_refunds'); }
    public function hasAdjustmentRefunds(): bool { return $this->has('adjustment_refunds'); }
    /** Amounts withheld from this line's refund, such as a restocking fee. [] (Value): {@see RefundLineItemAdjustmentInput}. An adjustment on a refunded line item, such as a restocking fee.
     * @return list<RefundLineItemAdjustmentInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When adjustments is omitted; use hasAdjustments() or valueOrDefault().
     */
    public function getAdjustments(): array { return $this->get('adjustments'); }
    public function hasAdjustments(): bool { return $this->has('adjustments'); }
    /** What Flint calculated for the refunded portion of the line before adjustments. The subtotal, discount, tax, and total Flint calculated automatically for a refunded line item.
     * @return RefundLineItemAutomaticRefundInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When automatic_refund is omitted; use hasAutomaticRefund() or valueOrDefault().
     */
    public function getAutomaticRefund(): mixed { return $this->get('automatic_refund'); }
    public function hasAutomaticRefund(): bool { return $this->has('automatic_refund'); }
    /** ID of the bundle the line was sold from. Example: "bun_01KEZF7C00TQ6S76Z6CVQF5SVN".
     * @return string
     * @throws SdkError When bundle_id is omitted; use hasBundleId() or valueOrDefault().
     */
    public function getBundleId(): string { return $this->get('bundle_id'); }
    public function hasBundleId(): bool { return $this->has('bundle_id'); }
    /** Catalog categories of the item. [] (Value): {@see CategoryReferenceInput}. A reference to a product category by ID, handle, and name.
     * @return list<CategoryReferenceInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When categories is omitted; use hasCategories() or valueOrDefault().
     */
    public function getCategories(): array { return $this->get('categories'); }
    public function hasCategories(): bool { return $this->has('categories'); }
    /** The part of the refund that applies to each modifier on the line. [] (Value): {@see RefundLineItemModifierAllocationInput}. The part of a line item refund that applies to one modifier, by quantity or amount.
     * @return list<RefundLineItemModifierAllocationInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When modifiers is omitted; use hasModifiers() or valueOrDefault().
     */
    public function getModifiers(): array { return $this->get('modifiers'); }
    public function hasModifiers(): bool { return $this->has('modifiers'); }
    /** ID of the order line item this allocation refunded. Example: "li_01KEZF7C008YPRCK7VDKTGWR31".
     * @return string
     * @throws SdkError When order_line_item_id is omitted; use hasOrderLineItemId() or valueOrDefault().
     */
    public function getOrderLineItemId(): string { return $this->get('order_line_item_id'); }
    public function hasOrderLineItemId(): bool { return $this->has('order_line_item_id'); }
    /** ID of the catalog product the line was sold from. Example: "prod_01KEZF7C00BVSHCNWVH528HB66".
     * @return string
     * @throws SdkError When product_id is omitted; use hasProductId() or valueOrDefault().
     */
    public function getProductId(): string { return $this->get('product_id'); }
    public function hasProductId(): bool { return $this->has('product_id'); }
    /** Whole-number quantity; fractional quantities are not supported. Format: int64.
     * @return int
     * @throws SdkError When quantity is omitted; use hasQuantity() or valueOrDefault().
     */
    public function getQuantity(): int { return $this->get('quantity'); }
    public function hasQuantity(): bool { return $this->has('quantity'); }
    /** Amount refunded for this line: the automatic refund less adjustments, plus any refunds back against earlier adjustments. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When refunded_money is omitted; use hasRefundedMoney() or valueOrDefault().
     */
    public function getRefundedMoney(): mixed { return $this->get('refunded_money'); }
    public function hasRefundedMoney(): bool { return $this->has('refunded_money'); }
    /** Variant options selected for the item, such as size and color. [] (Value): {@see SelectedProductOptionInput}. An option and value chosen for a product variant, such as size Large.
     * @return list<SelectedProductOptionInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When selected_options is omitted; use hasSelectedOptions() or valueOrDefault().
     */
    public function getSelectedOptions(): array { return $this->get('selected_options'); }
    public function hasSelectedOptions(): bool { return $this->has('selected_options'); }
    /** SKU of the item as sold.
     * @return string
     * @throws SdkError When sku is omitted; use hasSku() or valueOrDefault().
     */
    public function getSku(): string { return $this->get('sku'); }
    public function hasSku(): bool { return $this->has('sku'); }
    /** Whether the line was sold as a catalog `variant` or a `bundle`. Value enum: "variant", "bundle".
     * @return string
     * @throws SdkError When source_type is omitted; use hasSourceType() or valueOrDefault().
     */
    public function getSourceType(): string { return $this->get('source_type'); }
    public function hasSourceType(): bool { return $this->has('source_type'); }
    /** Tax reversed for each jurisdiction on this line. [] (Value): {@see RefundTaxBreakdownRefundInput}. The tax refunded for one tax breakdown on an order.
     * @return list<RefundTaxBreakdownRefundInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When tax_breakdown_refunds is omitted; use hasTaxBreakdownRefunds() or valueOrDefault().
     */
    public function getTaxBreakdownRefunds(): array { return $this->get('tax_breakdown_refunds'); }
    public function hasTaxBreakdownRefunds(): bool { return $this->has('tax_breakdown_refunds'); }
    /** Whether Flint calculated the tax refunded (`automatic`) or you set it (`explicit`). Value enum: "automatic", "explicit".
     * @return string
     * @throws SdkError When tax_refund_mode is omitted; use hasTaxRefundMode() or valueOrDefault().
     */
    public function getTaxRefundMode(): string { return $this->get('tax_refund_mode'); }
    public function hasTaxRefundMode(): bool { return $this->has('tax_refund_mode'); }
    /** ID of the catalog variant the line was sold from. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     * @return string
     * @throws SdkError When variant_id is omitted; use hasVariantId() or valueOrDefault().
     */
    public function getVariantId(): string { return $this->get('variant_id'); }
    public function hasVariantId(): bool { return $this->has('variant_id'); }
}
