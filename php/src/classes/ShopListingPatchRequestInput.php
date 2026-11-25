<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $bundle_id
 * @property-read string $product_id
 * @property-read string $shop_listing_id
 * @property-read string $type
 * Presence-aware input; omitted fields throw when accessed. */
final class ShopListingPatchRequestInput extends Model {
    /** @param array{'product_id': string, 'shop_listing_id'?: string, 'type': string}|object|array{'bundle_id': string, 'shop_listing_id'?: string, 'type': string}|object $values */
    public function __construct(mixed $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ShopListingPatchRequestInput')); }
    /** Catalog bundle ID. minLength: 1. pattern: ^bun_[0-9A-HJKMNP-TV-Z]{26}$. Example: "bun_01KEZF7C00TQ6S76Z6CVQF5SVN".
     * @return string
     * @throws SdkError When bundle_id is omitted; use hasBundleId() or valueOrDefault().
     */
    public function getBundleId(): string { return $this->get('bundle_id'); }
    public function hasBundleId(): bool { return $this->has('bundle_id'); }
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
    /** Selects the catalog item to list. Value enum: "product", "bundle".
     * @return string
     * @throws SdkError When type is omitted; use hasType() or valueOrDefault().
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
}
