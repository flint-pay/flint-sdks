<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $product_id
 * @property-read string $shop_listing_id
 * @property-read string $type
 * Presence-aware input; omitted fields throw when accessed. */
final class ShopListingPatchInputProductInput extends Model {
    /** @param array{'product_id': string, 'shop_listing_id'?: string, 'type': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ShopListingPatchInputProductInput')); }
    /** Catalog product ID. minLength: 1. pattern: ^prod_[0-9A-HJKMNP-TV-Z]{26}$. Example: "prod_01KEZF7C00BVSHCNWVH528HB66".
     * @return string
     * @throws SdkError When product_id is omitted; use hasProductId() or valueOrDefault().
     */
    public function getProductId(): string { return $this->get('product_id'); }
    public function hasProductId(): bool { return $this->has('product_id'); }
    /** The existing listing ID, if supplied. minLength: 1. pattern: ^shl_[0-9A-HJKMNP-TV-Z]{26}$. Example: "shl_01KEZF7C005YZXRPWEH31ZXGKA".
     * @return string
     * @throws SdkError When shop_listing_id is omitted; use hasShopListingId() or valueOrDefault().
     */
    public function getShopListingId(): string { return $this->get('shop_listing_id'); }
    public function hasShopListingId(): bool { return $this->has('shop_listing_id'); }
    /** Selects the catalog item to list. Value enum: "product".
     * @return string
     * @throws SdkError When type is omitted; use hasType() or valueOrDefault().
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
}
