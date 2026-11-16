<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValuePreviousAttributes|null $base_subtotal_money
 * @property-read list<BundleComponentPreviousAttributes>|null $bundle_components
 * @property-read string|null $bundle_id
 * @property-read list<CategoryReferencePreviousAttributes>|null $categories
 * @property-read string|null $description
 * @property-read MoneyValuePreviousAttributes|null $discount_money
 * @property-read ImagePreviousAttributes|null $image
 * @property-read string|null $invoice_line_item_id
 * @property-read MoneyValuePreviousAttributes|null $modifier_total_money
 * @property-read list<OrderLineItemModifierPreviousAttributes>|null $modifiers
 * @property-read string|null $name
 * @property-read string|null $order_id
 * @property-read string|null $order_line_item_id
 * @property-read string|null $product_id
 * @property-read string|null $product_type
 * @property-read int|null $quantity
 * @property-read list<SelectedProductOptionPreviousAttributes>|null $selected_options
 * @property-read string|null $sku
 * @property-read MoneyValuePreviousAttributes|null $subtotal_money
 * @property-read MoneyValuePreviousAttributes|null $tax_money
 * @property-read MoneyValuePreviousAttributes|null $total_money
 * @property-read string|null $type
 * @property-read MoneyValuePreviousAttributes|null $unit_price_money
 * @property-read string|null $variant_id
 * Presence-aware response; omitted optional fields return null. */
final class InvoiceLineItemPreviousAttributes extends Model {
    /** @param array{'base_subtotal_money'?: mixed, 'bundle_components'?: mixed, 'bundle_id'?: mixed, 'categories'?: mixed, 'description'?: mixed, 'discount_money'?: mixed, 'image'?: mixed, 'invoice_line_item_id'?: mixed, 'modifier_total_money'?: mixed, 'modifiers'?: mixed, 'name'?: mixed, 'order_id'?: mixed, 'order_line_item_id'?: mixed, 'product_id'?: mixed, 'product_type'?: mixed, 'quantity'?: mixed, 'selected_options'?: mixed, 'sku'?: mixed, 'subtotal_money'?: mixed, 'tax_money'?: mixed, 'total_money'?: mixed, 'type'?: mixed, 'unit_price_money'?: mixed, 'variant_id'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InvoiceLineItemPreviousAttributes')); }
    /** unit_price_money × quantity. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getBaseSubtotalMoney(): MoneyValuePreviousAttributes|null { return $this->get('base_subtotal_money'); }
    public function hasBaseSubtotalMoney(): bool { return $this->has('base_subtotal_money'); }
    /** The items inside a bundle line, as billed. anyOf[1] (Value): Array of {@see BundleComponentPreviousAttributes}. The items inside a bundle line, as billed. anyOf[1][] (Value): {@see BundleComponentPreviousAttributes}. anyOf[2] (Value): null.
     * @return list<BundleComponentPreviousAttributes>|null
     */
    public function getBundleComponents(): array|null { return $this->get('bundle_components'); }
    public function hasBundleComponents(): bool { return $this->has('bundle_components'); }
    /** The catalog bundle the line was sold from. Absent unless type is bundle. anyOf[1] (Value): string. The catalog bundle the line was sold from. Absent unless type is bundle. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getBundleId(): string|null { return $this->get('bundle_id'); }
    public function hasBundleId(): bool { return $this->has('bundle_id'); }
    /** The catalog categories of the line's item when it was billed. anyOf[1] (Value): Array of {@see CategoryReferencePreviousAttributes}. The catalog categories of the line's item when it was billed. anyOf[1][] (Value): {@see CategoryReferencePreviousAttributes}. anyOf[2] (Value): null.
     * @return list<CategoryReferencePreviousAttributes>|null
     */
    public function getCategories(): array|null { return $this->get('categories'); }
    public function hasCategories(): bool { return $this->has('categories'); }
    /** Line item description as billed. anyOf[1] (Value): string. Line item description as billed. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getDescription(): string|null { return $this->get('description'); }
    public function hasDescription(): bool { return $this->has('description'); }
    /** This line's share of order and line-item discounts. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getDiscountMoney(): MoneyValuePreviousAttributes|null { return $this->get('discount_money'); }
    public function hasDiscountMoney(): bool { return $this->has('discount_money'); }
    /** Line item image. anyOf[1] (Value): {@see ImagePreviousAttributes}. anyOf[2] (Value): null.
     * @return ImagePreviousAttributes|null
     */
    public function getImage(): ImagePreviousAttributes|null { return $this->get('image'); }
    public function hasImage(): bool { return $this->has('image'); }
    /** Flint invoice line item ID, stable across draft edits and issue while the backing order line keeps its ID. Credit notes credit lines by this ID. anyOf[1] (Value): string. Flint invoice line item ID, stable across draft edits and issue while the backing order line keeps its ID. Credit notes credit lines by this ID. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getInvoiceLineItemId(): string|null { return $this->get('invoice_line_item_id'); }
    public function hasInvoiceLineItemId(): bool { return $this->has('invoice_line_item_id'); }
    /** Total of the line's modifiers. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getModifierTotalMoney(): MoneyValuePreviousAttributes|null { return $this->get('modifier_total_money'); }
    public function hasModifierTotalMoney(): bool { return $this->has('modifier_total_money'); }
    /** The line's modifiers, as billed. anyOf[1] (Value): Array of {@see OrderLineItemModifierPreviousAttributes}. The line's modifiers, as billed. anyOf[1][] (Value): {@see OrderLineItemModifierPreviousAttributes}. anyOf[2] (Value): null.
     * @return list<OrderLineItemModifierPreviousAttributes>|null
     */
    public function getModifiers(): array|null { return $this->get('modifiers'); }
    public function hasModifiers(): bool { return $this->has('modifiers'); }
    /** Line item name as billed. anyOf[1] (Value): string. Line item name as billed. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getName(): string|null { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Order that owns the backing order_line_item_id. anyOf[1] (Value): string. Order that owns the backing order_line_item_id. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getOrderId(): string|null { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** The backing order's line item. Tax rows in snapshot.tax_breakdowns reference the line by this ID. anyOf[1] (Value): string. The backing order's line item. Tax rows in snapshot.tax_breakdowns reference the line by this ID. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getOrderLineItemId(): string|null { return $this->get('order_line_item_id'); }
    public function hasOrderLineItemId(): bool { return $this->has('order_line_item_id'); }
    /** Parent product of the line's variant. Required whenever variant_id is present. Absent on bundle and custom lines, which have no parent product. anyOf[1] (Value): string. Parent product of the line's variant. Required whenever variant_id is present. Absent on bundle and custom lines, which have no parent product. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getProductId(): string|null { return $this->get('product_id'); }
    public function hasProductId(): bool { return $this->has('product_id'); }
    /** Product classification frozen on this line. Null when the line is unclassified. Custom lines accept physical, digital, service, or fee; catalog lines use the product's type when added. Unclassified non-goods lines keep ACH debit unavailable. Issued invoices retain their frozen classification; void and reissue to change it. Value enum: "physical", "service", "fee", "digital", "gift_card", null. anyOf[1] (Value): string. Product classification frozen on this line. Null when the line is unclassified. Custom lines accept physical, digital, service, or fee; catalog lines use the product's type when added. Unclassified non-goods lines keep ACH debit unavailable. Issued invoices retain their frozen classification; void and reissue to change it. Value enum: "physical", "service", "fee", "digital", "gift_card", null. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getProductType(): string|null { return $this->get('product_type'); }
    public function hasProductType(): bool { return $this->has('product_type'); }
    /** Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer. Whole-number quantity; fractional quantities are not supported. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getQuantity(): int|null { return $this->get('quantity'); }
    public function hasQuantity(): bool { return $this->has('quantity'); }
    /** The product options chosen for the line, as billed. anyOf[1] (Value): Array of {@see SelectedProductOptionPreviousAttributes}. The product options chosen for the line, as billed. anyOf[1][] (Value): {@see SelectedProductOptionPreviousAttributes}. anyOf[2] (Value): null.
     * @return list<SelectedProductOptionPreviousAttributes>|null
     */
    public function getSelectedOptions(): array|null { return $this->get('selected_options'); }
    public function hasSelectedOptions(): bool { return $this->has('selected_options'); }
    /** Stock keeping unit as billed. anyOf[1] (Value): string. Stock keeping unit as billed. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getSku(): string|null { return $this->get('sku'); }
    public function hasSku(): bool { return $this->has('sku'); }
    /** base_subtotal_money + modifier_total_money. For a tax-inclusive price, it includes the tax. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getSubtotalMoney(): MoneyValuePreviousAttributes|null { return $this->get('subtotal_money'); }
    public function hasSubtotalMoney(): bool { return $this->has('subtotal_money'); }
    /** Tax on this line. Its rows in snapshot.tax_breakdowns give the rate and price_mode. For a tax-inclusive price, the tax is already inside subtotal_money. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getTaxMoney(): MoneyValuePreviousAttributes|null { return $this->get('tax_money'); }
    public function hasTaxMoney(): bool { return $this->has('tax_money'); }
    /** What the line bills. For a tax-inclusive price, subtotal_money - discount_money; otherwise subtotal_money - discount_money + tax_money. In both cases the tax-exclusive value is total_money - tax_money. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getTotalMoney(): MoneyValuePreviousAttributes|null { return $this->get('total_money'); }
    public function hasTotalMoney(): bool { return $this->has('total_money'); }
    /** Whether the line was sold from a catalog variant, a bundle, or a custom item. Value enum: "variant", "bundle", "custom". anyOf[1] (Value): string. Whether the line was sold from a catalog variant, a bundle, or a custom item. Value enum: "variant", "bundle", "custom". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getType(): string|null { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
    /** Price of one unit, before modifiers and discounts. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getUnitPriceMoney(): MoneyValuePreviousAttributes|null { return $this->get('unit_price_money'); }
    public function hasUnitPriceMoney(): bool { return $this->has('unit_price_money'); }
    /** The catalog variant the line was sold from. Absent unless type is variant. anyOf[1] (Value): string. The catalog variant the line was sold from. Absent unless type is variant. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getVariantId(): string|null { return $this->get('variant_id'); }
    public function hasVariantId(): bool { return $this->has('variant_id'); }
}
