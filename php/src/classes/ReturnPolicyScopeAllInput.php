<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<string> $category_handles
 * @property-read list<string> $channel_types
 * @property-read list<string> $location_ids
 * @property-read string $match_type
 * @property-read list<string> $product_ids
 * @property-read list<string> $variant_ids
 * Presence-aware input; omitted fields throw when accessed. */
final class ReturnPolicyScopeAllInput extends Model {
    /** @param array{'category_handles'?: list<string>, 'channel_types'?: list<string>, 'location_ids'?: list<string>, 'match_type': string, 'product_ids'?: list<string>, 'variant_ids'?: list<string>}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnPolicyScopeAllInput')); }
    /** Handles of catalog categories. An item matches when any of its categories is listed. Up to 100 values. maxItems: 100. uniqueItems: true. Handles of catalog categories. An item matches when any of its categories is listed. Up to 100 values. maxItems: 0. [] (Value): string. After trimming surrounding whitespace, 1 through 100 ASCII characters: lowercase letters and digits separated by single hyphens. Values must be unique after trimming. minLength: 1.
     * @return list<string>
     * @throws SdkError When category_handles is omitted; use hasCategoryHandles() or valueOrDefault().
     */
    public function getCategoryHandles(): array { return $this->get('category_handles'); }
    public function hasCategoryHandles(): bool { return $this->has('category_handles'); }
    /** Order origins the policy covers: `checkout`, `payment_link`, `virtual_terminal`, `api`, or `subscription`. Up to 100 values. maxItems: 100. uniqueItems: true. Order origins the policy covers: `checkout`, `payment_link`, `virtual_terminal`, `api`, or `subscription`. Up to 100 values. maxItems: 0. [] enum: "checkout", "payment_link", "virtual_terminal", "api", "subscription". [] (Value): string. minLength: 1. maxLength: 255. Value enum: "checkout", "payment_link", "virtual_terminal", "api", "subscription".
     * @return list<string>
     * @throws SdkError When channel_types is omitted; use hasChannelTypes() or valueOrDefault().
     */
    public function getChannelTypes(): array { return $this->get('channel_types'); }
    public function hasChannelTypes(): bool { return $this->has('channel_types'); }
    /** IDs of the Locations the item was fulfilled from. Up to 100 values. maxItems: 100. uniqueItems: true. IDs of the Locations the item was fulfilled from. Up to 100 values. maxItems: 0. [] (Value): string. A nonblank value of at most 255 bytes, counted before trimming. minLength: 1. maxLength: 255. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     * @return list<string>
     * @throws SdkError When location_ids is omitted; use hasLocationIds() or valueOrDefault().
     */
    public function getLocationIds(): array { return $this->get('location_ids'); }
    public function hasLocationIds(): bool { return $this->has('location_ids'); }
    /** all covers every item and requires every selector to be empty. include covers only what the selectors name and requires at least one nonempty selector. Value enum: "all".
     * @return string
     * @throws SdkError When match_type is omitted; use hasMatchType() or valueOrDefault().
     */
    public function getMatchType(): string { return $this->get('match_type'); }
    public function hasMatchType(): bool { return $this->has('match_type'); }
    /** IDs of the products the policy covers. Up to 100 values. maxItems: 100. uniqueItems: true. IDs of the products the policy covers. Up to 100 values. maxItems: 0. [] (Value): string. A nonblank value of at most 255 bytes, counted before trimming. minLength: 1. maxLength: 255. Example: "prod_01KEZF7C00BVSHCNWVH528HB66".
     * @return list<string>
     * @throws SdkError When product_ids is omitted; use hasProductIds() or valueOrDefault().
     */
    public function getProductIds(): array { return $this->get('product_ids'); }
    public function hasProductIds(): bool { return $this->has('product_ids'); }
    /** IDs of the variants the policy covers. Up to 100 values. maxItems: 100. uniqueItems: true. IDs of the variants the policy covers. Up to 100 values. maxItems: 0. [] (Value): string. A nonblank value of at most 255 bytes, counted before trimming. minLength: 1. maxLength: 255. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     * @return list<string>
     * @throws SdkError When variant_ids is omitted; use hasVariantIds() or valueOrDefault().
     */
    public function getVariantIds(): array { return $this->get('variant_ids'); }
    public function hasVariantIds(): bool { return $this->has('variant_ids'); }
}
