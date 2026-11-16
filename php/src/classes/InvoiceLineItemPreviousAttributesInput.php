<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $base_subtotal_money
 * @property-read list<BundleComponentPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null $bundle_components
 * @property-read string|null $bundle_id
 * @property-read list<CategoryReferencePreviousAttributesInput|array<array-key, mixed>|\stdClass>|null $categories
 * @property-read string|null $description
 * @property-read MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $discount_money
 * @property-read ImagePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $image
 * @property-read string|null $invoice_line_item_id
 * @property-read MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $modifier_total_money
 * @property-read list<OrderLineItemModifierPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null $modifiers
 * @property-read string|null $name
 * @property-read string|null $order_id
 * @property-read string|null $order_line_item_id
 * @property-read string|null $product_id
 * @property-read string|null|null $product_type
 * @property-read int|null $quantity
 * @property-read list<SelectedProductOptionPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null $selected_options
 * @property-read string|null $sku
 * @property-read MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $subtotal_money
 * @property-read MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $tax_money
 * @property-read MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $total_money
 * @property-read string|null $type
 * @property-read MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $unit_price_money
 * @property-read string|null $variant_id
 * Presence-aware input; omitted fields throw when accessed. */
final class InvoiceLineItemPreviousAttributesInput extends Model {
    /** @param array{'base_subtotal_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'bundle_components'?: list<BundleComponentPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null, 'bundle_id'?: string|null, 'categories'?: list<CategoryReferencePreviousAttributesInput|array<array-key, mixed>|\stdClass>|null, 'description'?: string|null, 'discount_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'image'?: ImagePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'invoice_line_item_id'?: string|null, 'modifier_total_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'modifiers'?: list<OrderLineItemModifierPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null, 'name'?: string|null, 'order_id'?: string|null, 'order_line_item_id'?: string|null, 'product_id'?: string|null, 'product_type'?: string|null|null, 'quantity'?: int|null, 'selected_options'?: list<SelectedProductOptionPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null, 'sku'?: string|null, 'subtotal_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'tax_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'total_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'type'?: string|null, 'unit_price_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'variant_id'?: string|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InvoiceLineItemPreviousAttributesInput')); }
    /** unit_price_money × quantity. anyOf[1] (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When base_subtotal_money is omitted; use hasBaseSubtotalMoney() or valueOrDefault().
     */
    public function getBaseSubtotalMoney(): mixed { return $this->get('base_subtotal_money'); }
    public function hasBaseSubtotalMoney(): bool { return $this->has('base_subtotal_money'); }
    /** The items inside a bundle line, as billed. anyOf[1] (Value): Array of {@see BundleComponentPreviousAttributesInput}. The items inside a bundle line, as billed. anyOf[1][] (Value): {@see BundleComponentPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return list<BundleComponentPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null
     * @throws SdkError When bundle_components is omitted; use hasBundleComponents() or valueOrDefault().
     */
    public function getBundleComponents(): mixed { return $this->get('bundle_components'); }
    public function hasBundleComponents(): bool { return $this->has('bundle_components'); }
    /** The catalog bundle the line was sold from. Absent unless type is bundle. anyOf[1] (Value): string. The catalog bundle the line was sold from. Absent unless type is bundle. Example: "bun_01KEZF7C00TQ6S76Z6CVQF5SVN". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When bundle_id is omitted; use hasBundleId() or valueOrDefault().
     */
    public function getBundleId(): mixed { return $this->get('bundle_id'); }
    public function hasBundleId(): bool { return $this->has('bundle_id'); }
    /** The catalog categories of the line's item when it was billed. anyOf[1] (Value): Array of {@see CategoryReferencePreviousAttributesInput}. The catalog categories of the line's item when it was billed. anyOf[1][] (Value): {@see CategoryReferencePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return list<CategoryReferencePreviousAttributesInput|array<array-key, mixed>|\stdClass>|null
     * @throws SdkError When categories is omitted; use hasCategories() or valueOrDefault().
     */
    public function getCategories(): mixed { return $this->get('categories'); }
    public function hasCategories(): bool { return $this->has('categories'); }
    /** Line item description as billed. anyOf[1] (Value): string. Line item description as billed. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When description is omitted; use hasDescription() or valueOrDefault().
     */
    public function getDescription(): mixed { return $this->get('description'); }
    public function hasDescription(): bool { return $this->has('description'); }
    /** This line's share of order and line-item discounts. anyOf[1] (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When discount_money is omitted; use hasDiscountMoney() or valueOrDefault().
     */
    public function getDiscountMoney(): mixed { return $this->get('discount_money'); }
    public function hasDiscountMoney(): bool { return $this->has('discount_money'); }
    /** Line item image. anyOf[1] (Value): {@see ImagePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return ImagePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When image is omitted; use hasImage() or valueOrDefault().
     */
    public function getImage(): mixed { return $this->get('image'); }
    public function hasImage(): bool { return $this->has('image'); }
    /** Flint invoice line item ID, stable across draft edits and issue while the backing order line keeps its ID. Credit notes credit lines by this ID. anyOf[1] (Value): string. Flint invoice line item ID, stable across draft edits and issue while the backing order line keeps its ID. Credit notes credit lines by this ID. Example: "invli_01KEZF7C00H767MAT1DY7ZWSVW". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When invoice_line_item_id is omitted; use hasInvoiceLineItemId() or valueOrDefault().
     */
    public function getInvoiceLineItemId(): mixed { return $this->get('invoice_line_item_id'); }
    public function hasInvoiceLineItemId(): bool { return $this->has('invoice_line_item_id'); }
    /** Total of the line's modifiers. anyOf[1] (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When modifier_total_money is omitted; use hasModifierTotalMoney() or valueOrDefault().
     */
    public function getModifierTotalMoney(): mixed { return $this->get('modifier_total_money'); }
    public function hasModifierTotalMoney(): bool { return $this->has('modifier_total_money'); }
    /** The line's modifiers, as billed. anyOf[1] (Value): Array of {@see OrderLineItemModifierPreviousAttributesInput}. The line's modifiers, as billed. anyOf[1][] (Value): {@see OrderLineItemModifierPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return list<OrderLineItemModifierPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null
     * @throws SdkError When modifiers is omitted; use hasModifiers() or valueOrDefault().
     */
    public function getModifiers(): mixed { return $this->get('modifiers'); }
    public function hasModifiers(): bool { return $this->has('modifiers'); }
    /** Line item name as billed. anyOf[1] (Value): string. Line item name as billed. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): mixed { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Order that owns the backing order_line_item_id. anyOf[1] (Value): string. Order that owns the backing order_line_item_id. Example: "ord_01KEZF7C0054GQKJ142A8X367A". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When order_id is omitted; use hasOrderId() or valueOrDefault().
     */
    public function getOrderId(): mixed { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** The backing order's line item. Tax rows in snapshot.tax_breakdowns reference the line by this ID. anyOf[1] (Value): string. The backing order's line item. Tax rows in snapshot.tax_breakdowns reference the line by this ID. Example: "li_01KEZF7C008YPRCK7VDKTGWR31". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When order_line_item_id is omitted; use hasOrderLineItemId() or valueOrDefault().
     */
    public function getOrderLineItemId(): mixed { return $this->get('order_line_item_id'); }
    public function hasOrderLineItemId(): bool { return $this->has('order_line_item_id'); }
    /** Parent product of the line's variant. Required whenever variant_id is present. Absent on bundle and custom lines, which have no parent product. anyOf[1] (Value): string. Parent product of the line's variant. Required whenever variant_id is present. Absent on bundle and custom lines, which have no parent product. Example: "prod_01KEZF7C00BVSHCNWVH528HB66". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When product_id is omitted; use hasProductId() or valueOrDefault().
     */
    public function getProductId(): mixed { return $this->get('product_id'); }
    public function hasProductId(): bool { return $this->has('product_id'); }
    /** Product classification frozen on this line. Null when the line is unclassified. Custom lines accept physical, digital, service, or fee; catalog lines use the product's type when added. Unclassified non-goods lines keep ACH debit unavailable. Issued invoices retain their frozen classification; void and reissue to change it. Value enum: "physical", "service", "fee", "digital", "gift_card", null. anyOf[1] (Value): string or null. Product classification frozen on this line. Null when the line is unclassified. Custom lines accept physical, digital, service, or fee; catalog lines use the product's type when added. Unclassified non-goods lines keep ACH debit unavailable. Issued invoices retain their frozen classification; void and reissue to change it. Value enum: "physical", "service", "fee", "digital", "gift_card", null. anyOf[2] (Value): null.
     * @return string|null|null
     * @throws SdkError When product_type is omitted; use hasProductType() or valueOrDefault().
     */
    public function getProductType(): mixed { return $this->get('product_type'); }
    public function hasProductType(): bool { return $this->has('product_type'); }
    /** Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer. Whole-number quantity; fractional quantities are not supported. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     * @throws SdkError When quantity is omitted; use hasQuantity() or valueOrDefault().
     */
    public function getQuantity(): mixed { return $this->get('quantity'); }
    public function hasQuantity(): bool { return $this->has('quantity'); }
    /** The product options chosen for the line, as billed. anyOf[1] (Value): Array of {@see SelectedProductOptionPreviousAttributesInput}. The product options chosen for the line, as billed. anyOf[1][] (Value): {@see SelectedProductOptionPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return list<SelectedProductOptionPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null
     * @throws SdkError When selected_options is omitted; use hasSelectedOptions() or valueOrDefault().
     */
    public function getSelectedOptions(): mixed { return $this->get('selected_options'); }
    public function hasSelectedOptions(): bool { return $this->has('selected_options'); }
    /** Stock keeping unit as billed. anyOf[1] (Value): string. Stock keeping unit as billed. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When sku is omitted; use hasSku() or valueOrDefault().
     */
    public function getSku(): mixed { return $this->get('sku'); }
    public function hasSku(): bool { return $this->has('sku'); }
    /** base_subtotal_money + modifier_total_money. For a tax-inclusive price, it includes the tax. anyOf[1] (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When subtotal_money is omitted; use hasSubtotalMoney() or valueOrDefault().
     */
    public function getSubtotalMoney(): mixed { return $this->get('subtotal_money'); }
    public function hasSubtotalMoney(): bool { return $this->has('subtotal_money'); }
    /** Tax on this line. Its rows in snapshot.tax_breakdowns give the rate and price_mode. For a tax-inclusive price, the tax is already inside subtotal_money. anyOf[1] (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When tax_money is omitted; use hasTaxMoney() or valueOrDefault().
     */
    public function getTaxMoney(): mixed { return $this->get('tax_money'); }
    public function hasTaxMoney(): bool { return $this->has('tax_money'); }
    /** What the line bills. For a tax-inclusive price, subtotal_money - discount_money; otherwise subtotal_money - discount_money + tax_money. In both cases the tax-exclusive value is total_money - tax_money. anyOf[1] (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When total_money is omitted; use hasTotalMoney() or valueOrDefault().
     */
    public function getTotalMoney(): mixed { return $this->get('total_money'); }
    public function hasTotalMoney(): bool { return $this->has('total_money'); }
    /** Whether the line was sold from a catalog variant, a bundle, or a custom item. Value enum: "variant", "bundle", "custom". anyOf[1] (Value): string. Whether the line was sold from a catalog variant, a bundle, or a custom item. Value enum: "variant", "bundle", "custom". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When type is omitted; use hasType() or valueOrDefault().
     */
    public function getType(): mixed { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
    /** Price of one unit, before modifiers and discounts. anyOf[1] (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When unit_price_money is omitted; use hasUnitPriceMoney() or valueOrDefault().
     */
    public function getUnitPriceMoney(): mixed { return $this->get('unit_price_money'); }
    public function hasUnitPriceMoney(): bool { return $this->has('unit_price_money'); }
    /** The catalog variant the line was sold from. Absent unless type is variant. anyOf[1] (Value): string. The catalog variant the line was sold from. Absent unless type is variant. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When variant_id is omitted; use hasVariantId() or valueOrDefault().
     */
    public function getVariantId(): mixed { return $this->get('variant_id'); }
    public function hasVariantId(): bool { return $this->has('variant_id'); }
}
