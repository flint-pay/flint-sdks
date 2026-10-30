<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValue $base_subtotal_money
 * @property-read ?list<BundleComponent> $bundle_components
 * @property-read ?string $bundle_id
 * @property-read ?list<CategoryReference> $categories
 * @property-read ?string $description
 * @property-read MoneyValue $discount_money
 * @property-read ?Image $image
 * @property-read string $invoice_line_item_id
 * @property-read MoneyValue $modifier_total_money
 * @property-read ?list<OrderLineItemModifier> $modifiers
 * @property-read string $name
 * @property-read ?string $order_line_item_id
 * @property-read ?string $product_id
 * @property-read int $quantity
 * @property-read ?list<SelectedProductOption> $selected_options
 * @property-read ?string $sku
 * @property-read ?string $source_type
 * @property-read MoneyValue $subtotal_money
 * @property-read MoneyValue $tax_money
 * @property-read SignedMoney $total_money
 * @property-read MoneyValue $unit_price_money
 * @property-read ?string $variant_id
 * Presence-aware response; omitted optional fields return null. */
final class InvoiceLineItem extends Model {
    /** @param array{'base_subtotal_money': mixed, 'bundle_components'?: list<mixed>, 'bundle_id'?: string, 'categories'?: list<mixed>, 'description'?: string, 'discount_money': mixed, 'image'?: mixed, 'invoice_line_item_id': string, 'modifier_total_money': mixed, 'modifiers'?: list<mixed>, 'name': string, 'order_line_item_id'?: string, 'product_id'?: string, 'quantity': int, 'selected_options'?: list<mixed>, 'sku'?: string, 'source_type'?: string, 'subtotal_money': mixed, 'tax_money': mixed, 'total_money': mixed, 'unit_price_money': mixed, 'variant_id'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InvoiceLineItem')); }
    /** unit_price_money × quantity. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getBaseSubtotalMoney(): MoneyValue { return $this->get('base_subtotal_money'); }
    public function hasBaseSubtotalMoney(): bool { return $this->has('base_subtotal_money'); }
    /** The items inside a bundle line, as billed. [] (Value): {@see BundleComponent}. An item included in a bundle.
     * @return ?list<BundleComponent>
     */
    public function getBundleComponents(): ?array { return $this->get('bundle_components'); }
    public function hasBundleComponents(): bool { return $this->has('bundle_components'); }
    /** The catalog bundle the line was sold from. Absent unless source_type is bundle.
     * @return ?string
     */
    public function getBundleId(): ?string { return $this->get('bundle_id'); }
    public function hasBundleId(): bool { return $this->has('bundle_id'); }
    /** The catalog categories of the line's item when it was billed. [] (Value): {@see CategoryReference}. A reference to a product category by ID, handle, and name.
     * @return ?list<CategoryReference>
     */
    public function getCategories(): ?array { return $this->get('categories'); }
    public function hasCategories(): bool { return $this->has('categories'); }
    /** Line item description as billed.
     * @return ?string
     */
    public function getDescription(): ?string { return $this->get('description'); }
    public function hasDescription(): bool { return $this->has('description'); }
    /** This line's share of order and line-item discounts. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getDiscountMoney(): MoneyValue { return $this->get('discount_money'); }
    public function hasDiscountMoney(): bool { return $this->has('discount_money'); }
    /** Line item image. An image with its `url`, `width`, and `height`, and optional `alt` text.
     * @return ?Image
     */
    public function getImage(): ?Image { return $this->get('image'); }
    public function hasImage(): bool { return $this->has('image'); }
    /** Flint invoice line item ID, stable across draft edits and issue while the backing order line keeps its ID. Credit notes credit lines by this ID.
     * @return string
     */
    public function getInvoiceLineItemId(): string { return $this->get('invoice_line_item_id'); }
    public function hasInvoiceLineItemId(): bool { return $this->has('invoice_line_item_id'); }
    /** Total of the line's modifiers. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getModifierTotalMoney(): MoneyValue { return $this->get('modifier_total_money'); }
    public function hasModifierTotalMoney(): bool { return $this->has('modifier_total_money'); }
    /** The line's modifiers, as billed. [] (Value): {@see OrderLineItemModifier}. A modifier selected on an order line item, with its quantity, price change, total, and display flags.
     * @return ?list<OrderLineItemModifier>
     */
    public function getModifiers(): ?array { return $this->get('modifiers'); }
    public function hasModifiers(): bool { return $this->has('modifiers'); }
    /** Line item name as billed.
     * @return string
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** The backing order's line item. Tax rows in snapshot.tax_breakdowns reference the line by this ID.
     * @return ?string
     */
    public function getOrderLineItemId(): ?string { return $this->get('order_line_item_id'); }
    public function hasOrderLineItemId(): bool { return $this->has('order_line_item_id'); }
    /** Parent product of the line's variant. Absent on bundle and custom lines.
     * @return ?string
     */
    public function getProductId(): ?string { return $this->get('product_id'); }
    public function hasProductId(): bool { return $this->has('product_id'); }
    /** Whole-number quantity; fractional quantities are not supported. Format: int64.
     * @return int
     */
    public function getQuantity(): int { return $this->get('quantity'); }
    public function hasQuantity(): bool { return $this->has('quantity'); }
    /** The product options chosen for the line, as billed. [] (Value): {@see SelectedProductOption}. An option and value chosen for a product variant, such as size Large.
     * @return ?list<SelectedProductOption>
     */
    public function getSelectedOptions(): ?array { return $this->get('selected_options'); }
    public function hasSelectedOptions(): bool { return $this->has('selected_options'); }
    /** Stock keeping unit as billed.
     * @return ?string
     */
    public function getSku(): ?string { return $this->get('sku'); }
    public function hasSku(): bool { return $this->has('sku'); }
    /** The catalog item the line was sold from. Absent on custom lines. Value enum: "variant", "bundle".
     * @return ?string
     */
    public function getSourceType(): ?string { return $this->get('source_type'); }
    public function hasSourceType(): bool { return $this->has('source_type'); }
    /** base_subtotal_money + modifier_total_money. For a tax-inclusive price, it includes the tax. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getSubtotalMoney(): MoneyValue { return $this->get('subtotal_money'); }
    public function hasSubtotalMoney(): bool { return $this->has('subtotal_money'); }
    /** Tax on this line. Its rows in snapshot.tax_breakdowns give the rate and price_mode. For a tax-inclusive price, the tax is already inside subtotal_money. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getTaxMoney(): MoneyValue { return $this->get('tax_money'); }
    public function hasTaxMoney(): bool { return $this->has('tax_money'); }
    /** What the line bills. For a tax-inclusive price, subtotal_money - discount_money; otherwise subtotal_money - discount_money + tax_money. In both cases the tax-exclusive value is total_money - tax_money. Signed monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return SignedMoney
     */
    public function getTotalMoney(): SignedMoney { return $this->get('total_money'); }
    public function hasTotalMoney(): bool { return $this->has('total_money'); }
    /** Price of one unit, before modifiers and discounts. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getUnitPriceMoney(): MoneyValue { return $this->get('unit_price_money'); }
    public function hasUnitPriceMoney(): bool { return $this->has('unit_price_money'); }
    /** The catalog variant the line was sold from. Absent unless source_type is variant.
     * @return ?string
     */
    public function getVariantId(): ?string { return $this->get('variant_id'); }
    public function hasVariantId(): bool { return $this->has('variant_id'); }
}
