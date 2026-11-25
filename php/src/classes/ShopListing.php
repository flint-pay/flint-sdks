<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?string $bundle_id
 * @property-read bool $is_catalog_item_unavailable
 * @property-read ?string $product_id
 * @property-read ?string $resolved_name
 * @property-read ?ProductPriceRange $resolved_price_range
 * @property-read string $shop_id
 * @property-read string $shop_listing_id
 * @property-read string $type
 * Presence-aware response; omitted optional fields return null. */
final class ShopListing extends Model {
    /** @param array{'bundle_id'?: string, 'is_catalog_item_unavailable': bool, 'product_id'?: string, 'resolved_name'?: string, 'resolved_price_range'?: mixed, 'shop_id': string, 'shop_listing_id': string, 'type': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ShopListing')); }
    /** The listed bundle. Omitted when the listing uses a product.
     * @return ?string
     */
    public function getBundleId(): ?string { return $this->get('bundle_id'); }
    public function hasBundleId(): bool { return $this->has('bundle_id'); }
    /** Whether the catalog item is unavailable in the shop currency.
     * @return bool
     */
    public function getIsCatalogItemUnavailable(): bool { return $this->get('is_catalog_item_unavailable'); }
    public function hasIsCatalogItemUnavailable(): bool { return $this->has('is_catalog_item_unavailable'); }
    /** The listed product. Omitted when the listing uses a bundle.
     * @return ?string
     */
    public function getProductId(): ?string { return $this->get('product_id'); }
    public function hasProductId(): bool { return $this->has('product_id'); }
    /** Current name from the catalog.
     * @return ?string
     */
    public function getResolvedName(): ?string { return $this->get('resolved_name'); }
    public function hasResolvedName(): bool { return $this->has('resolved_name'); }
    /** Current prices in the shop currency. Omitted when unavailable. The lowest and highest unit prices across a product's variants.
     * @return ?ProductPriceRange
     */
    public function getResolvedPriceRange(): ?ProductPriceRange { return $this->get('resolved_price_range'); }
    public function hasResolvedPriceRange(): bool { return $this->has('resolved_price_range'); }
    /** Owning shop ID. pattern: ^shop_[0-9A-HJKMNP-TV-Z]{26}$.
     * @return string
     */
    public function getShopId(): string { return $this->get('shop_id'); }
    public function hasShopId(): bool { return $this->has('shop_id'); }
    /** Permanent ID for this catalog item on the shop. pattern: ^shl_[0-9A-HJKMNP-TV-Z]{26}$.
     * @return string
     */
    public function getShopListingId(): string { return $this->get('shop_listing_id'); }
    public function hasShopListingId(): bool { return $this->has('shop_listing_id'); }
    /** The catalog item this listing sells. Value enum: "product", "bundle".
     * @return string
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
}
