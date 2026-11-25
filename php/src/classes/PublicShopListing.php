<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?list<PublicResolvedModifierGroup> $available_modifiers
 * @property-read ?list<PublicCatalogVariant> $available_variants
 * @property-read ?list<PublicResolvedBundleComponent> $bundle_components
 * @property-read ?string $bundle_id
 * @property-read list<string> $category_handles
 * @property-read MoneyValue|null $compare_at_price_money
 * @property-read ?string $description
 * @property-read ?Image $image
 * @property-read list<Image> $images
 * @property-read bool $is_sold_out
 * @property-read string $name
 * @property-read ProductPriceRange $price_range
 * @property-read ?string $product_id
 * @property-read ?list<PublicCatalogOption> $product_options
 * @property-read bool $requires_selection
 * @property-read string $shop_listing_id
 * @property-read string $type
 * Presence-aware response; omitted optional fields return null. */
final class PublicShopListing extends Model {
    /** @param array{'available_modifiers'?: list<mixed>, 'available_variants'?: list<mixed>, 'bundle_components'?: list<mixed>, 'bundle_id'?: string, 'category_handles': list<string>, 'compare_at_price_money': mixed, 'description'?: string, 'image'?: mixed, 'images': list<mixed>, 'is_sold_out': bool, 'name': string, 'price_range': mixed, 'product_id'?: string, 'product_options'?: list<mixed>, 'requires_selection': bool, 'shop_listing_id': string, 'type': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PublicShopListing')); }
    /** Modifier choices for a bundle. [] (Value): {@see PublicResolvedModifierGroup}. A modifier group as resolved for a payment link line item, with its selection limits, display flags, and options or text settings.
     * @return ?list<PublicResolvedModifierGroup>
     */
    public function getAvailableModifiers(): ?array { return $this->get('available_modifiers'); }
    public function hasAvailableModifiers(): bool { return $this->has('available_modifiers'); }
    /** Available variants priced in the shop currency. [] (Value): {@see PublicCatalogVariant}. A variant that can be sold now, with its current price, options, image, modifiers, and advisory stock state.
     * @return ?list<PublicCatalogVariant>
     */
    public function getAvailableVariants(): ?array { return $this->get('available_variants'); }
    public function hasAvailableVariants(): bool { return $this->has('available_variants'); }
    /** Components of a listed bundle. [] (Value): {@see PublicResolvedBundleComponent}. One component of a bundle on a resolved payment link line item, with its variant and quantity.
     * @return ?list<PublicResolvedBundleComponent>
     */
    public function getBundleComponents(): ?array { return $this->get('bundle_components'); }
    public function hasBundleComponents(): bool { return $this->has('bundle_components'); }
    /** Listed bundle ID.
     * @return ?string
     */
    public function getBundleId(): ?string { return $this->get('bundle_id'); }
    public function hasBundleId(): bool { return $this->has('bundle_id'); }
    /** Active category handles for this listing. [] (Value): string.
     * @return list<string>
     */
    public function getCategoryHandles(): array { return $this->get('category_handles'); }
    public function hasCategoryHandles(): bool { return $this->has('category_handles'); }
    /** Compare-at price for a single variant. Null when the listing has no single variant compare-at price. anyOf[1] (Value): {@see MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217 currency code. anyOf[2] (Value): null.
     * @return MoneyValue|null
     */
    public function getCompareAtPriceMoney(): MoneyValue|null { return $this->get('compare_at_price_money'); }
    public function hasCompareAtPriceMoney(): bool { return $this->has('compare_at_price_money'); }
    /** Listed item description.
     * @return ?string
     */
    public function getDescription(): ?string { return $this->get('description'); }
    public function hasDescription(): bool { return $this->has('description'); }
    /** First listed item image. An image with its URL, size, and alt text.
     * @return ?Image
     */
    public function getImage(): ?Image { return $this->get('image'); }
    public function hasImage(): bool { return $this->has('image'); }
    /** Listing images in display order. [] (Value): {@see Image}. An image with its URL, size, and alt text.
     * @return list<Image>
     */
    public function getImages(): array { return $this->get('images'); }
    public function hasImages(): bool { return $this->has('images'); }
    /** Whether all sellable choices are sold out.
     * @return bool
     */
    public function getIsSoldOut(): bool { return $this->get('is_sold_out'); }
    public function hasIsSoldOut(): bool { return $this->has('is_sold_out'); }
    /** Listed item name.
     * @return string
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Current price range in the shop currency. The lowest and highest unit prices across a product's variants.
     * @return ProductPriceRange
     */
    public function getPriceRange(): ProductPriceRange { return $this->get('price_range'); }
    public function hasPriceRange(): bool { return $this->has('price_range'); }
    /** Listed product ID.
     * @return ?string
     */
    public function getProductId(): ?string { return $this->get('product_id'); }
    public function hasProductId(): bool { return $this->has('product_id'); }
    /** Product options used by available variants. [] (Value): {@see PublicCatalogOption}. An active product option, with the values its available variants use.
     * @return ?list<PublicCatalogOption>
     */
    public function getProductOptions(): ?array { return $this->get('product_options'); }
    public function hasProductOptions(): bool { return $this->has('product_options'); }
    /** Whether a variant or required modifier must be selected.
     * @return bool
     */
    public function getRequiresSelection(): bool { return $this->get('requires_selection'); }
    public function hasRequiresSelection(): bool { return $this->has('requires_selection'); }
    /** Shop listing ID.
     * @return string
     */
    public function getShopListingId(): string { return $this->get('shop_listing_id'); }
    public function hasShopListingId(): bool { return $this->has('shop_listing_id'); }
    /** Listing type. Value enum: "product", "bundle".
     * @return string
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
}
