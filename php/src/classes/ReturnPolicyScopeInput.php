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
final class ReturnPolicyScopeInput extends Model {
    /** @param mixed $values */
    public function __construct(mixed $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnPolicyScopeInput')); }
    /** Shape $ (Value): Array of string. Shape $[] (Value): string. minLength: 1.
     * @return list<string>
     * @throws SdkError When category_handles is omitted; use hasCategoryHandles() or valueOrDefault().
     */
    public function getCategoryHandles(): array { return $this->get('category_handles'); }
    public function hasCategoryHandles(): bool { return $this->has('category_handles'); }
    /** Shape $ (Value): Array of string. Shape $[] (Value): string. minLength: 1.
     * @return list<string>
     * @throws SdkError When channel_types is omitted; use hasChannelTypes() or valueOrDefault().
     */
    public function getChannelTypes(): array { return $this->get('channel_types'); }
    public function hasChannelTypes(): bool { return $this->has('channel_types'); }
    /** Shape $ (Value): Array of string. Shape $[] (Value): string. minLength: 1.
     * @return list<string>
     * @throws SdkError When location_ids is omitted; use hasLocationIds() or valueOrDefault().
     */
    public function getLocationIds(): array { return $this->get('location_ids'); }
    public function hasLocationIds(): bool { return $this->has('location_ids'); }
    /** Shape $ (Value): string. all covers every item and requires every selector to be empty. include covers only what the selectors name and requires at least one nonempty selector. Value enum: "all", "include".
     * @return string
     * @throws SdkError When match_type is omitted; use hasMatchType() or valueOrDefault().
     */
    public function getMatchType(): string { return $this->get('match_type'); }
    public function hasMatchType(): bool { return $this->has('match_type'); }
    /** Shape $ (Value): Array of string. Shape $[] (Value): string. minLength: 1.
     * @return list<string>
     * @throws SdkError When product_ids is omitted; use hasProductIds() or valueOrDefault().
     */
    public function getProductIds(): array { return $this->get('product_ids'); }
    public function hasProductIds(): bool { return $this->has('product_ids'); }
    /** Shape $ (Value): Array of string. Shape $[] (Value): string. minLength: 1.
     * @return list<string>
     * @throws SdkError When variant_ids is omitted; use hasVariantIds() or valueOrDefault().
     */
    public function getVariantIds(): array { return $this->get('variant_ids'); }
    public function hasVariantIds(): bool { return $this->has('variant_ids'); }
}
