<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?list<PublicResolvedModifierGroup> $available_modifiers
 * @property-read ?list<PublicCatalogVariant> $available_variants
 * @property-read ?list<PublicResolvedBundleComponent> $bundle_components
 * @property-read ?string $bundle_id
 * @property-read ?string $catalog_object_type
 * @property-read MoneyValue|null $compare_at_price_money
 * @property-read ?Image $image
 * @property-read ?bool $is_inventory_tracked
 * @property-read bool $is_sold_out
 * @property-read string $key
 * @property-read ?string $product_id
 * @property-read ?list<PublicCatalogOption> $product_options
 * @property-read list<QuantityPriceBreak> $quantity_price_breaks
 * @property-read ?string $resolved_description
 * @property-read ?string $resolved_name
 * @property-read ?MoneyValue $resolved_unit_price_money
 * @property-read ?list<SelectedProductOption> $selected_options
 * @property-read ?string $variant_id
 * Presence-aware response; omitted optional fields return null. */
final class PublicResolvedLineItemInfo extends Model {
    /** @param array{'available_modifiers'?: list<mixed>, 'available_variants'?: list<mixed>, 'bundle_components'?: list<mixed>, 'bundle_id'?: string, 'catalog_object_type'?: string, 'compare_at_price_money': mixed, 'image'?: mixed, 'is_inventory_tracked'?: bool, 'is_sold_out': bool, 'key': string, 'product_id'?: string, 'product_options'?: list<mixed>, 'quantity_price_breaks': list<mixed>, 'resolved_description'?: string, 'resolved_name'?: string, 'resolved_unit_price_money'?: mixed, 'selected_options'?: list<mixed>, 'variant_id'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PublicResolvedLineItemInfo')); }
    /** Modifier groups the buyer can choose from for this item. [] (Value): {@see PublicResolvedModifierGroup}. A modifier group as resolved for a payment link line item, with its selection limits, display flags, and options or text settings.
     * @return ?list<PublicResolvedModifierGroup>
     */
    public function getAvailableModifiers(): ?array { return $this->get('available_modifiers'); }
    public function hasAvailableModifiers(): bool { return $this->has('available_modifiers'); }
    /** Listed variants that can currently be sold in the line currency, in variant_ids order. Inactive, archived, unsellable, and other-currency variants are omitted. Each variant includes its advisory sold-out state and its own modifiers. Present only on variant_ids lines. [] (Value): {@see PublicCatalogVariant}. A variant that can be sold now, with its current price, options, image, modifiers, and advisory stock state.
     * @return ?list<PublicCatalogVariant>
     */
    public function getAvailableVariants(): ?array { return $this->get('available_variants'); }
    public function hasAvailableVariants(): bool { return $this->has('available_variants'); }
    /** The components of the bundle. Present for a bundle line item. [] (Value): {@see PublicResolvedBundleComponent}. One component of a bundle on a resolved payment link line item, with its variant and quantity.
     * @return ?list<PublicResolvedBundleComponent>
     */
    public function getBundleComponents(): ?array { return $this->get('bundle_components'); }
    public function hasBundleComponents(): bool { return $this->has('bundle_components'); }
    /** ID of the bundle this line item sells.
     * @return ?string
     */
    public function getBundleId(): ?string { return $this->get('bundle_id'); }
    public function hasBundleId(): bool { return $this->has('bundle_id'); }
    /** What the line item sells. Value enum: "variant", "bundle".
     * @return ?string
     */
    public function getCatalogObjectType(): ?string { return $this->get('catalog_object_type'); }
    public function hasCatalogObjectType(): bool { return $this->has('catalog_object_type'); }
    /** Current catalog reference unit price for sale display. Null when no variant compare-at price is set. Does not affect the amount charged. anyOf[1] (Value): {@see MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217 currency code. anyOf[2] (Value): null.
     * @return MoneyValue|null
     */
    public function getCompareAtPriceMoney(): MoneyValue|null { return $this->get('compare_at_price_money'); }
    public function hasCompareAtPriceMoney(): bool { return $this->has('compare_at_price_money'); }
    /** Image of the variant or bundle. An image with its URL, size, and alt text.
     * @return ?Image
     */
    public function getImage(): ?Image { return $this->get('image'); }
    public function hasImage(): bool { return $this->has('image'); }
    /** Whether Flint tracks stock for the item.
     * @return ?bool
     */
    public function getIsInventoryTracked(): ?bool { return $this->get('is_inventory_tracked'); }
    public function hasIsInventoryTracked(): bool { return $this->has('is_inventory_tracked'); }
    /** True when the link inventory_routing_source cannot supply the fixed variant or bundle components at the line minimum quantity. Offered delivery methods affect availability for items that need a delivery quote. If no quote is needed, stock alone decides. Separate bundle components can use different fulfillment methods. Shipping can use remaining backorder capacity for a fixed variant. Pickup requires physical stock. The minimum is min_quantity when quantity adjustment is enabled, otherwise quantity. For variant choice lines, true only when every available_variants entry is sold out. Always false for untracked and ad hoc lines. Exposes no stock counts and reserves no stock.
     * @return bool
     */
    public function getIsSoldOut(): bool { return $this->get('is_sold_out'); }
    public function hasIsSoldOut(): bool { return $this->has('is_sold_out'); }
    /** Key of the payment link line item this entry describes.
     * @return string
     */
    public function getKey(): string { return $this->get('key'); }
    public function hasKey(): bool { return $this->has('key'); }
    /** ID of the product the variant belongs to.
     * @return ?string
     */
    public function getProductId(): ?string { return $this->get('product_id'); }
    public function hasProductId(): bool { return $this->has('product_id'); }
    /** Active product options for a variant_ids line, in option position order. Values include only those used by available_variants and retain value position order. Empty when the product has no options; omitted on fixed variant and bundle lines. [] (Value): {@see PublicCatalogOption}. An active product option, with the values its available variants use.
     * @return ?list<PublicCatalogOption>
     */
    public function getProductOptions(): ?array { return $this->get('product_options'); }
    public function hasProductOptions(): bool { return $this->has('product_options'); }
    /** Default quantity breaks for a fixed variant. Empty for bundles, variant choice lines, and ad hoc lines. Each offered variant on a variant choice line has its own schedule in available_variants. [] (Value): {@see QuantityPriceBreak}. A net unit price that applies when one catalog line reaches minimum_quantity.
     * @return list<QuantityPriceBreak>
     */
    public function getQuantityPriceBreaks(): array { return $this->get('quantity_price_breaks'); }
    public function hasQuantityPriceBreaks(): bool { return $this->has('quantity_price_breaks'); }
    /** Current catalog description of the variant or bundle, as of this read.
     * @return ?string
     */
    public function getResolvedDescription(): ?string { return $this->get('resolved_description'); }
    public function hasResolvedDescription(): bool { return $this->has('resolved_description'); }
    /** Current catalog name of the variant or bundle, as of this read.
     * @return ?string
     */
    public function getResolvedName(): ?string { return $this->get('resolved_name'); }
    public function hasResolvedName(): bool { return $this->has('resolved_name'); }
    /** Current catalog unit price of the variant or bundle, as of this read. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return ?MoneyValue
     */
    public function getResolvedUnitPriceMoney(): ?MoneyValue { return $this->get('resolved_unit_price_money'); }
    public function hasResolvedUnitPriceMoney(): bool { return $this->has('resolved_unit_price_money'); }
    /** The product options the variant selects, such as size or color. [] (Value): {@see SelectedProductOption}. An option and value chosen for a product variant, such as size Large.
     * @return ?list<SelectedProductOption>
     */
    public function getSelectedOptions(): ?array { return $this->get('selected_options'); }
    public function hasSelectedOptions(): bool { return $this->has('selected_options'); }
    /** ID of the variant this line item sells.
     * @return ?string
     */
    public function getVariantId(): ?string { return $this->get('variant_id'); }
    public function hasVariantId(): bool { return $this->has('variant_id'); }
}
