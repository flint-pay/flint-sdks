<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?list<SubscriptionPlanLineItemsItemVariantBundleComponentsItem> $bundle_components
 * @property-read ?string $bundle_id
 * @property-read ?list<SubscriptionPlanLineItemsItemVariantCategoriesItem> $categories
 * @property-read ?string $description
 * @property-read ?SubscriptionPlanLineItemsItemVariantImage $image
 * @property-read ?list<SubscriptionPlanLineItemsItemVariantModifiersItem> $modifiers
 * @property-read ?string $name
 * @property-read ?string $product_id
 * @property-read int $quantity
 * @property-read ?list<SubscriptionPlanLineItemsItemVariantSelectedOptionsItem> $selected_options
 * @property-read ?string $sku
 * @property-read string $subscription_plan_line_item_id
 * @property-read list<string> $swap_variant_ids
 * @property-read ?list<SubscriptionPlanLineItemsItemVariantSwapVariantsItem> $swap_variants
 * @property-read ?SubscriptionPlanLineItemsItemVariantTax $tax
 * @property-read string $type
 * @property-read ?SubscriptionPlanLineItemsItemVariantUnitPriceMoney $unit_price_money
 * @property-read string $variant_id
 * Presence-aware response; omitted optional fields return null. */
final class SubscriptionPlanLineItemsItemVariant extends Model {
    /** @param array{'bundle_components'?: list<mixed>, 'bundle_id'?: string, 'categories'?: list<mixed>, 'description'?: string, 'image'?: mixed, 'modifiers'?: list<mixed>, 'name'?: string, 'product_id'?: string, 'quantity': int, 'selected_options'?: list<mixed>, 'sku'?: string, 'subscription_plan_line_item_id': string, 'swap_variant_ids': list<string>, 'swap_variants'?: list<mixed>, 'tax'?: mixed, 'type': string, 'unit_price_money'?: mixed, 'variant_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionPlanLineItemsItemVariant')); }
    /**  [] (Value): {@see SubscriptionPlanLineItemsItemVariantBundleComponentsItem}. An item included in a bundle.
     * @return ?list<SubscriptionPlanLineItemsItemVariantBundleComponentsItem>
     */
    public function getBundleComponents(): ?array { return $this->get('bundle_components'); }
    public function hasBundleComponents(): bool { return $this->has('bundle_components'); }
    /** bundle_id
     * @return ?string
     */
    public function getBundleId(): ?string { return $this->get('bundle_id'); }
    public function hasBundleId(): bool { return $this->has('bundle_id'); }
    /**  [] (Value): {@see SubscriptionPlanLineItemsItemVariantCategoriesItem}. A reference to a product category by ID, handle, and name.
     * @return ?list<SubscriptionPlanLineItemsItemVariantCategoriesItem>
     */
    public function getCategories(): ?array { return $this->get('categories'); }
    public function hasCategories(): bool { return $this->has('categories'); }
    /** description
     * @return ?string
     */
    public function getDescription(): ?string { return $this->get('description'); }
    public function hasDescription(): bool { return $this->has('description'); }
    /** An image with its `url`, `width`, and `height`, and optional `alt` text.
     * @return ?SubscriptionPlanLineItemsItemVariantImage
     */
    public function getImage(): ?SubscriptionPlanLineItemsItemVariantImage { return $this->get('image'); }
    public function hasImage(): bool { return $this->has('image'); }
    /**  [] (Value): {@see SubscriptionPlanLineItemsItemVariantModifiersItem}. A modifier selected on an order line item, with its quantity, price change, total, and display flags.
     * @return ?list<SubscriptionPlanLineItemsItemVariantModifiersItem>
     */
    public function getModifiers(): ?array { return $this->get('modifiers'); }
    public function hasModifiers(): bool { return $this->has('modifiers'); }
    /** name
     * @return ?string
     */
    public function getName(): ?string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** product_id
     * @return ?string
     */
    public function getProductId(): ?string { return $this->get('product_id'); }
    public function hasProductId(): bool { return $this->has('product_id'); }
    /** Whole-number quantity; fractional quantities are not supported. Format: int32.
     * @return int
     */
    public function getQuantity(): int { return $this->get('quantity'); }
    public function hasQuantity(): bool { return $this->has('quantity'); }
    /**  [] (Value): {@see SubscriptionPlanLineItemsItemVariantSelectedOptionsItem}. An option and value chosen for a product variant, such as size Large.
     * @return ?list<SubscriptionPlanLineItemsItemVariantSelectedOptionsItem>
     */
    public function getSelectedOptions(): ?array { return $this->get('selected_options'); }
    public function hasSelectedOptions(): bool { return $this->has('selected_options'); }
    /** sku
     * @return ?string
     */
    public function getSku(): ?string { return $this->get('sku'); }
    public function hasSku(): bool { return $this->has('sku'); }
    /** subscription_plan_line_item_id
     * @return string
     */
    public function getSubscriptionPlanLineItemId(): string { return $this->get('subscription_plan_line_item_id'); }
    public function hasSubscriptionPlanLineItemId(): bool { return $this->has('subscription_plan_line_item_id'); }
    /** maxItems: 25. uniqueItems: true. [] (Value): string. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     * @return list<string>
     */
    public function getSwapVariantIds(): array { return $this->get('swap_variant_ids'); }
    public function hasSwapVariantIds(): bool { return $this->has('swap_variant_ids'); }
    /** Current sellable alternatives in swap_variant_ids order, excluding the line's own variant and variants priced in a different currency. Present on variant lines, including an empty array. maxItems: 25. [] (Value): {@see SubscriptionPlanLineItemsItemVariantSwapVariantsItem}. A variant a subscriber can swap to on a plan line, with its name, options, and price.
     * @return ?list<SubscriptionPlanLineItemsItemVariantSwapVariantsItem>
     */
    public function getSwapVariants(): ?array { return $this->get('swap_variants'); }
    public function hasSwapVariants(): bool { return $this->has('swap_variants'); }
    /** A line item's tax category and whether it is taxable.
     * @return ?SubscriptionPlanLineItemsItemVariantTax
     */
    public function getTax(): ?SubscriptionPlanLineItemsItemVariantTax { return $this->get('tax'); }
    public function hasTax(): bool { return $this->has('tax'); }
    /** Value enum: "variant".
     * @return string
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return ?SubscriptionPlanLineItemsItemVariantUnitPriceMoney
     */
    public function getUnitPriceMoney(): ?SubscriptionPlanLineItemsItemVariantUnitPriceMoney { return $this->get('unit_price_money'); }
    public function hasUnitPriceMoney(): bool { return $this->has('unit_price_money'); }
    /** variant_id
     * @return string
     */
    public function getVariantId(): string { return $this->get('variant_id'); }
    public function hasVariantId(): bool { return $this->has('variant_id'); }
}
