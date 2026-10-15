<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<CreateRefundResultLineItemAllocationsItemAdjustmentRefundsItem> $adjustment_refunds
 * @property-read list<CreateRefundResultLineItemAllocationsItemAdjustmentsItem> $adjustments
 * @property-read CreateRefundResultLineItemAllocationsItemAutomaticRefund $automatic_refund
 * @property-read string $bundle_id
 * @property-read list<CreateRefundResultLineItemAllocationsItemCategoriesItem> $categories
 * @property-read list<CreateRefundResultLineItemAllocationsItemModifiersItem> $modifiers
 * @property-read string $order_line_item_id
 * @property-read string $product_id
 * @property-read string $quantity
 * @property-read CreateRefundResultLineItemAllocationsItemRefundedMoney $refunded_money
 * @property-read list<CreateRefundResultLineItemAllocationsItemSelectedOptionsItem> $selected_options
 * @property-read string $sku
 * @property-read string $source_type
 * @property-read list<CreateRefundResultLineItemAllocationsItemTaxBreakdownRefundsItem> $tax_breakdown_refunds
 * @property-read string $tax_refund_mode
 * @property-read string $variant_id
 * Presence-aware response; omitted fields throw when accessed. */
final class CreateRefundResultLineItemAllocationsItem extends Model {
    /** @param array{'adjustment_refunds'?: list<mixed>, 'adjustments'?: list<mixed>, 'automatic_refund': mixed, 'bundle_id'?: string, 'categories'?: list<mixed>, 'modifiers'?: list<mixed>, 'order_line_item_id': string, 'product_id'?: string, 'quantity': string, 'refunded_money': mixed, 'selected_options'?: list<mixed>, 'sku'?: string, 'source_type'?: string, 'tax_breakdown_refunds'?: list<mixed>, 'tax_refund_mode': string, 'variant_id'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreateRefundResultLineItemAllocationsItem')); }
    /** @return list<CreateRefundResultLineItemAllocationsItemAdjustmentRefundsItem>
     * @throws SdkError When adjustment_refunds is omitted; use hasAdjustmentRefunds() or valueOrDefault().
     */
    public function getAdjustmentRefunds(): array { return $this->get('adjustment_refunds'); }
    public function hasAdjustmentRefunds(): bool { return $this->has('adjustment_refunds'); }
    /** @return list<CreateRefundResultLineItemAllocationsItemAdjustmentsItem>
     * @throws SdkError When adjustments is omitted; use hasAdjustments() or valueOrDefault().
     */
    public function getAdjustments(): array { return $this->get('adjustments'); }
    public function hasAdjustments(): bool { return $this->has('adjustments'); }
    /** @return CreateRefundResultLineItemAllocationsItemAutomaticRefund
     * @throws SdkError When automatic_refund is omitted; use hasAutomaticRefund() or valueOrDefault().
     */
    public function getAutomaticRefund(): CreateRefundResultLineItemAllocationsItemAutomaticRefund { return $this->get('automatic_refund'); }
    public function hasAutomaticRefund(): bool { return $this->has('automatic_refund'); }
    /** @return string
     * @throws SdkError When bundle_id is omitted; use hasBundleId() or valueOrDefault().
     */
    public function getBundleId(): string { return $this->get('bundle_id'); }
    public function hasBundleId(): bool { return $this->has('bundle_id'); }
    /** @return list<CreateRefundResultLineItemAllocationsItemCategoriesItem>
     * @throws SdkError When categories is omitted; use hasCategories() or valueOrDefault().
     */
    public function getCategories(): array { return $this->get('categories'); }
    public function hasCategories(): bool { return $this->has('categories'); }
    /** @return list<CreateRefundResultLineItemAllocationsItemModifiersItem>
     * @throws SdkError When modifiers is omitted; use hasModifiers() or valueOrDefault().
     */
    public function getModifiers(): array { return $this->get('modifiers'); }
    public function hasModifiers(): bool { return $this->has('modifiers'); }
    /** @return string
     * @throws SdkError When order_line_item_id is omitted; use hasOrderLineItemId() or valueOrDefault().
     */
    public function getOrderLineItemId(): string { return $this->get('order_line_item_id'); }
    public function hasOrderLineItemId(): bool { return $this->has('order_line_item_id'); }
    /** @return string
     * @throws SdkError When product_id is omitted; use hasProductId() or valueOrDefault().
     */
    public function getProductId(): string { return $this->get('product_id'); }
    public function hasProductId(): bool { return $this->has('product_id'); }
    /** @return string
     * @throws SdkError When quantity is omitted; use hasQuantity() or valueOrDefault().
     */
    public function getQuantity(): string { return $this->get('quantity'); }
    public function hasQuantity(): bool { return $this->has('quantity'); }
    /** @return CreateRefundResultLineItemAllocationsItemRefundedMoney
     * @throws SdkError When refunded_money is omitted; use hasRefundedMoney() or valueOrDefault().
     */
    public function getRefundedMoney(): CreateRefundResultLineItemAllocationsItemRefundedMoney { return $this->get('refunded_money'); }
    public function hasRefundedMoney(): bool { return $this->has('refunded_money'); }
    /** @return list<CreateRefundResultLineItemAllocationsItemSelectedOptionsItem>
     * @throws SdkError When selected_options is omitted; use hasSelectedOptions() or valueOrDefault().
     */
    public function getSelectedOptions(): array { return $this->get('selected_options'); }
    public function hasSelectedOptions(): bool { return $this->has('selected_options'); }
    /** @return string
     * @throws SdkError When sku is omitted; use hasSku() or valueOrDefault().
     */
    public function getSku(): string { return $this->get('sku'); }
    public function hasSku(): bool { return $this->has('sku'); }
    /** @return string
     * @throws SdkError When source_type is omitted; use hasSourceType() or valueOrDefault().
     */
    public function getSourceType(): string { return $this->get('source_type'); }
    public function hasSourceType(): bool { return $this->has('source_type'); }
    /** @return list<CreateRefundResultLineItemAllocationsItemTaxBreakdownRefundsItem>
     * @throws SdkError When tax_breakdown_refunds is omitted; use hasTaxBreakdownRefunds() or valueOrDefault().
     */
    public function getTaxBreakdownRefunds(): array { return $this->get('tax_breakdown_refunds'); }
    public function hasTaxBreakdownRefunds(): bool { return $this->has('tax_breakdown_refunds'); }
    /** @return string
     * @throws SdkError When tax_refund_mode is omitted; use hasTaxRefundMode() or valueOrDefault().
     */
    public function getTaxRefundMode(): string { return $this->get('tax_refund_mode'); }
    public function hasTaxRefundMode(): bool { return $this->has('tax_refund_mode'); }
    /** @return string
     * @throws SdkError When variant_id is omitted; use hasVariantId() or valueOrDefault().
     */
    public function getVariantId(): string { return $this->get('variant_id'); }
    public function hasVariantId(): bool { return $this->has('variant_id'); }
}
