<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?list<string> $category_handles
 * @property-read ?list<string> $channel_types
 * @property-read ?list<string> $location_ids
 * @property-read string $match_type
 * @property-read ?list<string> $product_ids
 * @property-read ?list<string> $variant_ids
 * Presence-aware response; omitted optional fields return null. */
final class ReturnPolicyRevisionScopeAll extends Model {
    /** @param array{'category_handles'?: list<string>, 'channel_types'?: list<string>, 'location_ids'?: list<string>, 'match_type': string, 'product_ids'?: list<string>, 'variant_ids'?: list<string>, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnPolicyRevisionScopeAll')); }
    /** maxItems: 0. [] (Value): string. minLength: 1.
     * @return ?list<string>
     */
    public function getCategoryHandles(): ?array { return $this->get('category_handles'); }
    public function hasCategoryHandles(): bool { return $this->has('category_handles'); }
    /** maxItems: 0. [] (Value): string. minLength: 1.
     * @return ?list<string>
     */
    public function getChannelTypes(): ?array { return $this->get('channel_types'); }
    public function hasChannelTypes(): bool { return $this->has('channel_types'); }
    /** maxItems: 0. [] (Value): string. minLength: 1.
     * @return ?list<string>
     */
    public function getLocationIds(): ?array { return $this->get('location_ids'); }
    public function hasLocationIds(): bool { return $this->has('location_ids'); }
    /** all covers every item and requires every selector to be empty. include covers only what the selectors name and requires at least one nonempty selector. Value enum: "all".
     * @return string
     */
    public function getMatchType(): string { return $this->get('match_type'); }
    public function hasMatchType(): bool { return $this->has('match_type'); }
    /** maxItems: 0. [] (Value): string. minLength: 1.
     * @return ?list<string>
     */
    public function getProductIds(): ?array { return $this->get('product_ids'); }
    public function hasProductIds(): bool { return $this->has('product_ids'); }
    /** maxItems: 0. [] (Value): string. minLength: 1.
     * @return ?list<string>
     */
    public function getVariantIds(): ?array { return $this->get('variant_ids'); }
    public function hasVariantIds(): bool { return $this->has('variant_ids'); }
}
