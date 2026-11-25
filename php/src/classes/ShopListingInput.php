<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $bundle_id
 * @property-read bool $is_catalog_item_unavailable
 * @property-read string $product_id
 * @property-read string $resolved_name
 * @property-read ProductPriceRangeInput|array<array-key, mixed>|\stdClass $resolved_price_range
 * @property-read string $shop_id
 * @property-read string $shop_listing_id
 * @property-read string $type
 * Presence-aware input; omitted fields throw when accessed. */
final class ShopListingInput extends Model {
    /** @param array{'bundle_id'?: string, 'is_catalog_item_unavailable': bool, 'product_id'?: string, 'resolved_name'?: string, 'resolved_price_range'?: ProductPriceRangeInput|array<array-key, mixed>|\stdClass, 'shop_id': string, 'shop_listing_id': string, 'type': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ShopListingInput')); }
    /** The listed bundle. Omitted when the listing uses a product. Example: "bun_01KEZF7C00TQ6S76Z6CVQF5SVN".
     * @return string
     * @throws SdkError When bundle_id is omitted; use hasBundleId() or valueOrDefault().
     */
    public function getBundleId(): string { return $this->get('bundle_id'); }
    public function hasBundleId(): bool { return $this->has('bundle_id'); }
    /** Whether the catalog item is unavailable in the shop currency.
     * @return bool
     * @throws SdkError When is_catalog_item_unavailable is omitted; use hasIsCatalogItemUnavailable() or valueOrDefault().
     */
    public function getIsCatalogItemUnavailable(): bool { return $this->get('is_catalog_item_unavailable'); }
    public function hasIsCatalogItemUnavailable(): bool { return $this->has('is_catalog_item_unavailable'); }
    /** The listed product. Omitted when the listing uses a bundle. Example: "prod_01KEZF7C00BVSHCNWVH528HB66".
     * @return string
     * @throws SdkError When product_id is omitted; use hasProductId() or valueOrDefault().
     */
    public function getProductId(): string { return $this->get('product_id'); }
    public function hasProductId(): bool { return $this->has('product_id'); }
    /** Current name from the catalog.
     * @return string
     * @throws SdkError When resolved_name is omitted; use hasResolvedName() or valueOrDefault().
     */
    public function getResolvedName(): string { return $this->get('resolved_name'); }
    public function hasResolvedName(): bool { return $this->has('resolved_name'); }
    /** Current prices in the shop currency. Omitted when unavailable. The lowest and highest unit prices across a product's variants.
     * @return ProductPriceRangeInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When resolved_price_range is omitted; use hasResolvedPriceRange() or valueOrDefault().
     */
    public function getResolvedPriceRange(): mixed { return $this->get('resolved_price_range'); }
    public function hasResolvedPriceRange(): bool { return $this->has('resolved_price_range'); }
    /** Owning shop ID. pattern: ^shop_[0-9A-HJKMNP-TV-Z]{26}$. Example: "shop_01KEZF7C005VQBPV4FZHDZPAHE".
     * @return string
     * @throws SdkError When shop_id is omitted; use hasShopId() or valueOrDefault().
     */
    public function getShopId(): string { return $this->get('shop_id'); }
    public function hasShopId(): bool { return $this->has('shop_id'); }
    /** Permanent ID for this catalog item on the shop. pattern: ^shl_[0-9A-HJKMNP-TV-Z]{26}$. Example: "shl_01KEZF7C005YZXRPWEH31ZXGKA".
     * @return string
     * @throws SdkError When shop_listing_id is omitted; use hasShopListingId() or valueOrDefault().
     */
    public function getShopListingId(): string { return $this->get('shop_listing_id'); }
    public function hasShopListingId(): bool { return $this->has('shop_listing_id'); }
    /** The catalog item this listing sells. Value enum: "product", "bundle".
     * @return string
     * @throws SdkError When type is omitted; use hasType() or valueOrDefault().
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
}
