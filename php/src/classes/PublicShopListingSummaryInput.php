<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $bundle_id
 * @property-read list<string> $category_handles
 * @property-read array{'amount': string, 'currency': string}|object|null $compare_at_price_money
 * @property-read ImageInput|array<array-key, mixed>|\stdClass $image
 * @property-read bool $is_sold_out
 * @property-read string $name
 * @property-read ProductPriceRangeInput|array<array-key, mixed>|\stdClass $price_range
 * @property-read string $product_id
 * @property-read bool $requires_selection
 * @property-read string $shop_listing_id
 * @property-read string $type
 * Presence-aware input; omitted fields throw when accessed. */
final class PublicShopListingSummaryInput extends Model {
    /** @param array{'bundle_id'?: string, 'category_handles': list<string>, 'compare_at_price_money': array{'amount': string, 'currency': string}|object|null, 'image'?: ImageInput|array<array-key, mixed>|\stdClass, 'is_sold_out': bool, 'name': string, 'price_range': ProductPriceRangeInput|array<array-key, mixed>|\stdClass, 'product_id'?: string, 'requires_selection': bool, 'shop_listing_id': string, 'type': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PublicShopListingSummaryInput')); }
    /** Listed bundle ID. Example: "bun_01KEZF7C00TQ6S76Z6CVQF5SVN".
     * @return string
     * @throws SdkError When bundle_id is omitted; use hasBundleId() or valueOrDefault().
     */
    public function getBundleId(): string { return $this->get('bundle_id'); }
    public function hasBundleId(): bool { return $this->has('bundle_id'); }
    /** Active category handles for this listing. [] (Value): string.
     * @return list<string>
     * @throws SdkError When category_handles is omitted; use hasCategoryHandles() or valueOrDefault().
     */
    public function getCategoryHandles(): array { return $this->get('category_handles'); }
    public function hasCategoryHandles(): bool { return $this->has('category_handles'); }
    /** Compare-at price for a single variant. Null when the listing has no single variant compare-at price. anyOf[1] (Value): {@see MoneyValueInput}. Monetary amount represented as integer minor units plus an ISO 4217 currency code. anyOf[2] (Value): null.
     * @return array{'amount': string, 'currency': string}|object|null
     * @throws SdkError When compare_at_price_money is omitted; use hasCompareAtPriceMoney() or valueOrDefault().
     */
    public function getCompareAtPriceMoney(): mixed { return $this->get('compare_at_price_money'); }
    public function hasCompareAtPriceMoney(): bool { return $this->has('compare_at_price_money'); }
    /** First listed item image. An image with its URL, size, and alt text.
     * @return ImageInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When image is omitted; use hasImage() or valueOrDefault().
     */
    public function getImage(): mixed { return $this->get('image'); }
    public function hasImage(): bool { return $this->has('image'); }
    /** Whether all sellable choices are sold out.
     * @return bool
     * @throws SdkError When is_sold_out is omitted; use hasIsSoldOut() or valueOrDefault().
     */
    public function getIsSoldOut(): bool { return $this->get('is_sold_out'); }
    public function hasIsSoldOut(): bool { return $this->has('is_sold_out'); }
    /** Listed item name.
     * @return string
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Current price range in the shop currency. The lowest and highest unit prices across a product's variants.
     * @return ProductPriceRangeInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When price_range is omitted; use hasPriceRange() or valueOrDefault().
     */
    public function getPriceRange(): mixed { return $this->get('price_range'); }
    public function hasPriceRange(): bool { return $this->has('price_range'); }
    /** Listed product ID. Example: "prod_01KEZF7C00BVSHCNWVH528HB66".
     * @return string
     * @throws SdkError When product_id is omitted; use hasProductId() or valueOrDefault().
     */
    public function getProductId(): string { return $this->get('product_id'); }
    public function hasProductId(): bool { return $this->has('product_id'); }
    /** Whether a variant or required modifier must be selected.
     * @return bool
     * @throws SdkError When requires_selection is omitted; use hasRequiresSelection() or valueOrDefault().
     */
    public function getRequiresSelection(): bool { return $this->get('requires_selection'); }
    public function hasRequiresSelection(): bool { return $this->has('requires_selection'); }
    /** Shop listing ID. Example: "shl_01KEZF7C005YZXRPWEH31ZXGKA".
     * @return string
     * @throws SdkError When shop_listing_id is omitted; use hasShopListingId() or valueOrDefault().
     */
    public function getShopListingId(): string { return $this->get('shop_listing_id'); }
    public function hasShopListingId(): bool { return $this->has('shop_listing_id'); }
    /** Listing type. Value enum: "product", "bundle".
     * @return string
     * @throws SdkError When type is omitted; use hasType() or valueOrDefault().
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
}
