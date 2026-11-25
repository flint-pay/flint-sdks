<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?string $bundle_id
 * @property-read list<string> $category_handles
 * @property-read MoneyValue|null $compare_at_price_money
 * @property-read ?Image $image
 * @property-read bool $is_sold_out
 * @property-read string $name
 * @property-read ProductPriceRange $price_range
 * @property-read ?string $product_id
 * @property-read bool $requires_selection
 * @property-read string $shop_listing_id
 * @property-read string $type
 * Presence-aware response; omitted optional fields return null. */
final class PublicShopListingSummary extends Model {
    /** @param array{'bundle_id'?: string, 'category_handles': list<string>, 'compare_at_price_money': mixed, 'image'?: mixed, 'is_sold_out': bool, 'name': string, 'price_range': mixed, 'product_id'?: string, 'requires_selection': bool, 'shop_listing_id': string, 'type': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PublicShopListingSummary')); }
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
    /** First listed item image. An image with its URL, size, and alt text.
     * @return ?Image
     */
    public function getImage(): ?Image { return $this->get('image'); }
    public function hasImage(): bool { return $this->has('image'); }
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
