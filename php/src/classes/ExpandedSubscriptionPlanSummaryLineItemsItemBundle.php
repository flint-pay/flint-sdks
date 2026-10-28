<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?list<ExpandedSubscriptionPlanSummaryLineItemsItemBundleBundleComponentsItem> $bundle_components
 * @property-read string $bundle_id
 * @property-read ?list<ExpandedSubscriptionPlanSummaryLineItemsItemBundleCategoriesItem> $categories
 * @property-read ?string $description
 * @property-read ?ExpandedSubscriptionPlanSummaryLineItemsItemBundleImage $image
 * @property-read ?list<ExpandedSubscriptionPlanSummaryLineItemsItemBundleModifiersItem> $modifiers
 * @property-read ?string $name
 * @property-read ?string $product_id
 * @property-read int $quantity
 * @property-read ?list<ExpandedSubscriptionPlanSummaryLineItemsItemBundleSelectedOptionsItem> $selected_options
 * @property-read ?string $sku
 * @property-read string $subscription_plan_line_item_id
 * @property-read list<string> $swap_variant_ids
 * @property-read ?list<ExpandedSubscriptionPlanSummaryLineItemsItemBundleSwapVariantsItem> $swap_variants
 * @property-read ?ExpandedSubscriptionPlanSummaryLineItemsItemBundleTax $tax
 * @property-read string $type
 * @property-read ?ExpandedSubscriptionPlanSummaryLineItemsItemBundleUnitPriceMoney $unit_price_money
 * @property-read ?string $variant_id
 * Presence-aware response; omitted optional fields return null. */
final class ExpandedSubscriptionPlanSummaryLineItemsItemBundle extends Model {
    /** @param array{'bundle_components'?: list<mixed>, 'bundle_id': string, 'categories'?: list<mixed>, 'description'?: string, 'image'?: mixed, 'modifiers'?: list<mixed>, 'name'?: string, 'product_id'?: string, 'quantity': int, 'selected_options'?: list<mixed>, 'sku'?: string, 'subscription_plan_line_item_id': string, 'swap_variant_ids': list<string>, 'swap_variants'?: list<mixed>, 'tax'?: mixed, 'type': string, 'unit_price_money'?: mixed, 'variant_id'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ExpandedSubscriptionPlanSummaryLineItemsItemBundle')); }
    /** Shape $ (Value): Array of ({@see ExpandedSubscriptionPlanSummaryLineItemsItemBundleBundleComponentsItem} and {@see BundleComponent}). Shape $[] (Value): {@see ExpandedSubscriptionPlanSummaryLineItemsItemBundleBundleComponentsItem}. An item included in a bundle.
     * @return ?list<ExpandedSubscriptionPlanSummaryLineItemsItemBundleBundleComponentsItem>
     */
    public function getBundleComponents(): ?array { return $this->get('bundle_components'); }
    public function hasBundleComponents(): bool { return $this->has('bundle_components'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getBundleId(): string { return $this->get('bundle_id'); }
    public function hasBundleId(): bool { return $this->has('bundle_id'); }
    /** Shape $ (Value): Array of ({@see ExpandedSubscriptionPlanSummaryLineItemsItemBundleCategoriesItem} and {@see CategoryReference}). Shape $[] (Value): {@see ExpandedSubscriptionPlanSummaryLineItemsItemBundleCategoriesItem}. A reference to a product category by ID, handle, and name.
     * @return ?list<ExpandedSubscriptionPlanSummaryLineItemsItemBundleCategoriesItem>
     */
    public function getCategories(): ?array { return $this->get('categories'); }
    public function hasCategories(): bool { return $this->has('categories'); }
    /** Shape $ (Value): string.
     * @return ?string
     */
    public function getDescription(): ?string { return $this->get('description'); }
    public function hasDescription(): bool { return $this->has('description'); }
    /** Shape $ (Value): {@see ExpandedSubscriptionPlanSummaryLineItemsItemBundleImage}. An image with its `url`, `width`, and `height`, and optional `alt` text.
     * @return ?ExpandedSubscriptionPlanSummaryLineItemsItemBundleImage
     */
    public function getImage(): ?ExpandedSubscriptionPlanSummaryLineItemsItemBundleImage { return $this->get('image'); }
    public function hasImage(): bool { return $this->has('image'); }
    /** Shape $ (Value): Array of ({@see ExpandedSubscriptionPlanSummaryLineItemsItemBundleModifiersItem} and {@see OrderLineItemModifier}). Shape $[] (Value): {@see ExpandedSubscriptionPlanSummaryLineItemsItemBundleModifiersItem}. A modifier selected on an order line item, with its quantity, price change, total, and display flags.
     * @return ?list<ExpandedSubscriptionPlanSummaryLineItemsItemBundleModifiersItem>
     */
    public function getModifiers(): ?array { return $this->get('modifiers'); }
    public function hasModifiers(): bool { return $this->has('modifiers'); }
    /** Shape $ (Value): string.
     * @return ?string
     */
    public function getName(): ?string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Shape $ (Value): string.
     * @return ?string
     */
    public function getProductId(): ?string { return $this->get('product_id'); }
    public function hasProductId(): bool { return $this->has('product_id'); }
    /** Shape $ (Value): integer. Whole-number quantity; fractional quantities are not supported. Format: int32.
     * @return int
     */
    public function getQuantity(): int { return $this->get('quantity'); }
    public function hasQuantity(): bool { return $this->has('quantity'); }
    /** Shape $ (Value): Array of ({@see ExpandedSubscriptionPlanSummaryLineItemsItemBundleSelectedOptionsItem} and {@see SelectedProductOption}). Shape $[] (Value): {@see ExpandedSubscriptionPlanSummaryLineItemsItemBundleSelectedOptionsItem}. An option and value chosen for a product variant, such as size Large.
     * @return ?list<ExpandedSubscriptionPlanSummaryLineItemsItemBundleSelectedOptionsItem>
     */
    public function getSelectedOptions(): ?array { return $this->get('selected_options'); }
    public function hasSelectedOptions(): bool { return $this->has('selected_options'); }
    /** Shape $ (Value): string.
     * @return ?string
     */
    public function getSku(): ?string { return $this->get('sku'); }
    public function hasSku(): bool { return $this->has('sku'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getSubscriptionPlanLineItemId(): string { return $this->get('subscription_plan_line_item_id'); }
    public function hasSubscriptionPlanLineItemId(): bool { return $this->has('subscription_plan_line_item_id'); }
    /** Shape $ (Value): Array of string. maxItems: 25. uniqueItems: true. Shape $[] (Value): string. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     * @return list<string>
     */
    public function getSwapVariantIds(): array { return $this->get('swap_variant_ids'); }
    public function hasSwapVariantIds(): bool { return $this->has('swap_variant_ids'); }
    /** Shape $ (Value): Array of ({@see ExpandedSubscriptionPlanSummaryLineItemsItemBundleSwapVariantsItem} and {@see SubscriptionPlanSwapVariant}). Current sellable alternatives in swap_variant_ids order, excluding the line's own variant and variants priced in a different currency. Present on variant lines, including an empty array. maxItems: 25. Shape $[] (Value): {@see ExpandedSubscriptionPlanSummaryLineItemsItemBundleSwapVariantsItem}. A variant a subscriber can swap to on a plan line, with its name, options, and price.
     * @return ?list<ExpandedSubscriptionPlanSummaryLineItemsItemBundleSwapVariantsItem>
     */
    public function getSwapVariants(): ?array { return $this->get('swap_variants'); }
    public function hasSwapVariants(): bool { return $this->has('swap_variants'); }
    /** Shape $ (Value): {@see ExpandedSubscriptionPlanSummaryLineItemsItemBundleTax}. A line item's tax category and whether it is taxable.
     * @return ?ExpandedSubscriptionPlanSummaryLineItemsItemBundleTax
     */
    public function getTax(): ?ExpandedSubscriptionPlanSummaryLineItemsItemBundleTax { return $this->get('tax'); }
    public function hasTax(): bool { return $this->has('tax'); }
    /** Shape $ (Value): string.  Value enum: "bundle".
     * @return string
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
    /** Shape $ (Value): {@see ExpandedSubscriptionPlanSummaryLineItemsItemBundleUnitPriceMoney}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return ?ExpandedSubscriptionPlanSummaryLineItemsItemBundleUnitPriceMoney
     */
    public function getUnitPriceMoney(): ?ExpandedSubscriptionPlanSummaryLineItemsItemBundleUnitPriceMoney { return $this->get('unit_price_money'); }
    public function hasUnitPriceMoney(): bool { return $this->has('unit_price_money'); }
    /** Shape $ (Value): string.
     * @return ?string
     */
    public function getVariantId(): ?string { return $this->get('variant_id'); }
    public function hasVariantId(): bool { return $this->has('variant_id'); }
}
