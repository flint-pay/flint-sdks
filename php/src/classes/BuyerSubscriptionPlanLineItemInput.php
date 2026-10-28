<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $bundle_id
 * @property-read list<CategoryReferenceInput|array<array-key, mixed>|\stdClass> $categories
 * @property-read string $description
 * @property-read ImageInput|array<array-key, mixed>|\stdClass $image
 * @property-read string $name
 * @property-read string $product_id
 * @property-read int $quantity
 * @property-read list<SelectedProductOptionInput|array<array-key, mixed>|\stdClass> $selected_options
 * @property-read string $sku
 * @property-read string $subscription_plan_line_item_id
 * @property-read list<string> $swap_variant_ids
 * @property-read list<SubscriptionPlanSwapVariantInput|array<array-key, mixed>|\stdClass> $swap_variants
 * @property-read OrderLineItemTaxInput|array<array-key, mixed>|\stdClass $tax
 * @property-read string $type
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $unit_price_money
 * @property-read string $variant_id
 * Presence-aware input; omitted fields throw when accessed. */
final class BuyerSubscriptionPlanLineItemInput extends Model {
    /** @param array{'bundle_id'?: string, 'categories'?: list<CategoryReferenceInput|array<array-key, mixed>|\stdClass>, 'description'?: string, 'image'?: ImageInput|array<array-key, mixed>|\stdClass, 'name'?: string, 'product_id'?: string, 'quantity': int, 'selected_options'?: list<SelectedProductOptionInput|array<array-key, mixed>|\stdClass>, 'sku'?: string, 'subscription_plan_line_item_id': string, 'swap_variant_ids': list<string>, 'swap_variants'?: list<SubscriptionPlanSwapVariantInput|array<array-key, mixed>|\stdClass>, 'tax'?: OrderLineItemTaxInput|array<array-key, mixed>|\stdClass, 'type': string, 'unit_price_money'?: MoneyValueInput|array<array-key, mixed>|\stdClass, 'variant_id': string, ...}|object|array{'bundle_id': string, 'categories'?: list<CategoryReferenceInput|array<array-key, mixed>|\stdClass>, 'description'?: string, 'image'?: ImageInput|array<array-key, mixed>|\stdClass, 'name'?: string, 'product_id'?: string, 'quantity': int, 'selected_options'?: list<SelectedProductOptionInput|array<array-key, mixed>|\stdClass>, 'sku'?: string, 'subscription_plan_line_item_id': string, 'swap_variant_ids': list<string>, 'swap_variants'?: list<SubscriptionPlanSwapVariantInput|array<array-key, mixed>|\stdClass>, 'tax'?: OrderLineItemTaxInput|array<array-key, mixed>|\stdClass, 'type': string, 'unit_price_money'?: MoneyValueInput|array<array-key, mixed>|\stdClass, 'variant_id'?: string, ...}|object|array{'bundle_id'?: string, 'categories'?: list<CategoryReferenceInput|array<array-key, mixed>|\stdClass>, 'description'?: string, 'image'?: ImageInput|array<array-key, mixed>|\stdClass, 'name': string, 'product_id'?: string, 'quantity': int, 'selected_options'?: list<SelectedProductOptionInput|array<array-key, mixed>|\stdClass>, 'sku'?: string, 'subscription_plan_line_item_id': string, 'swap_variant_ids': list<string>, 'swap_variants'?: list<SubscriptionPlanSwapVariantInput|array<array-key, mixed>|\stdClass>, 'tax'?: OrderLineItemTaxInput|array<array-key, mixed>|\stdClass, 'type': string, 'unit_price_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'variant_id'?: string, ...}|object $values */
    public function __construct(mixed $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BuyerSubscriptionPlanLineItemInput')); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When bundle_id is omitted; use hasBundleId() or valueOrDefault().
     */
    public function getBundleId(): string { return $this->get('bundle_id'); }
    public function hasBundleId(): bool { return $this->has('bundle_id'); }
    /** Shape $ (Value): Array of {@see CategoryReferenceInput}. Shape $[] (Value): {@see CategoryReferenceInput}. A reference to a product category by ID, handle, and name.
     * @return list<CategoryReferenceInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When categories is omitted; use hasCategories() or valueOrDefault().
     */
    public function getCategories(): array { return $this->get('categories'); }
    public function hasCategories(): bool { return $this->has('categories'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When description is omitted; use hasDescription() or valueOrDefault().
     */
    public function getDescription(): string { return $this->get('description'); }
    public function hasDescription(): bool { return $this->has('description'); }
    /** Shape $ (Value): {@see ImageInput}. An image with its `url`, `width`, and `height`, and optional `alt` text.
     * @return ImageInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When image is omitted; use hasImage() or valueOrDefault().
     */
    public function getImage(): mixed { return $this->get('image'); }
    public function hasImage(): bool { return $this->has('image'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When product_id is omitted; use hasProductId() or valueOrDefault().
     */
    public function getProductId(): string { return $this->get('product_id'); }
    public function hasProductId(): bool { return $this->has('product_id'); }
    /** Shape $ (Value): integer. Whole-number quantity; fractional quantities are not supported. Format: int32.
     * @return int
     * @throws SdkError When quantity is omitted; use hasQuantity() or valueOrDefault().
     */
    public function getQuantity(): int { return $this->get('quantity'); }
    public function hasQuantity(): bool { return $this->has('quantity'); }
    /** Shape $ (Value): Array of {@see SelectedProductOptionInput}. Shape $[] (Value): {@see SelectedProductOptionInput}. An option and value chosen for a product variant, such as size Large.
     * @return list<SelectedProductOptionInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When selected_options is omitted; use hasSelectedOptions() or valueOrDefault().
     */
    public function getSelectedOptions(): array { return $this->get('selected_options'); }
    public function hasSelectedOptions(): bool { return $this->has('selected_options'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When sku is omitted; use hasSku() or valueOrDefault().
     */
    public function getSku(): string { return $this->get('sku'); }
    public function hasSku(): bool { return $this->has('sku'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When subscription_plan_line_item_id is omitted; use hasSubscriptionPlanLineItemId() or valueOrDefault().
     */
    public function getSubscriptionPlanLineItemId(): string { return $this->get('subscription_plan_line_item_id'); }
    public function hasSubscriptionPlanLineItemId(): bool { return $this->has('subscription_plan_line_item_id'); }
    /** Shape $ (Value): Array of string. maxItems: 25. uniqueItems: true. Shape $[] (Value): string. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     * @return list<string>
     * @throws SdkError When swap_variant_ids is omitted; use hasSwapVariantIds() or valueOrDefault().
     */
    public function getSwapVariantIds(): array { return $this->get('swap_variant_ids'); }
    public function hasSwapVariantIds(): bool { return $this->has('swap_variant_ids'); }
    /** Shape $ (Value): Array of {@see SubscriptionPlanSwapVariantInput}. Current sellable alternatives in swap_variant_ids order, excluding the line's own variant and variants priced in a different currency. Present on variant lines, including an empty array. maxItems: 25. Shape $[] (Value): {@see SubscriptionPlanSwapVariantInput}. A variant a subscriber can swap to on a plan line, with its name, options, and price.
     * @return list<SubscriptionPlanSwapVariantInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When swap_variants is omitted; use hasSwapVariants() or valueOrDefault().
     */
    public function getSwapVariants(): array { return $this->get('swap_variants'); }
    public function hasSwapVariants(): bool { return $this->has('swap_variants'); }
    /** Shape $ (Value): {@see OrderLineItemTaxInput}. A line item's tax category and whether it is taxable.
     * @return OrderLineItemTaxInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When tax is omitted; use hasTax() or valueOrDefault().
     */
    public function getTax(): mixed { return $this->get('tax'); }
    public function hasTax(): bool { return $this->has('tax'); }
    /** Shape $ (Value): string.  Value enum: "variant", "bundle", "custom".
     * @return string
     * @throws SdkError When type is omitted; use hasType() or valueOrDefault().
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
    /** Shape $ (Value): {@see MoneyValueInput}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When unit_price_money is omitted; use hasUnitPriceMoney() or valueOrDefault().
     */
    public function getUnitPriceMoney(): mixed { return $this->get('unit_price_money'); }
    public function hasUnitPriceMoney(): bool { return $this->has('unit_price_money'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When variant_id is omitted; use hasVariantId() or valueOrDefault().
     */
    public function getVariantId(): string { return $this->get('variant_id'); }
    public function hasVariantId(): bool { return $this->has('variant_id'); }
}
