<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?string $name
 * @property-read ?string $sku
 * @property-read string $variant_id
 * Presence-aware response; omitted optional fields return null. */
final class ProductVariantMatch extends Model {
    /** @param array{'name'?: string, 'sku'?: string, 'variant_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ProductVariantMatch')); }
    /** Name of the matching variant, when set.
     * @return ?string
     */
    public function getName(): ?string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Stock keeping unit of the matching variant, when set.
     * @return ?string
     */
    public function getSku(): ?string { return $this->get('sku'); }
    public function hasSku(): bool { return $this->has('sku'); }
    /** Identifier of the variant that matched the product list's variant filters or query.
     * @return string
     */
    public function getVariantId(): string { return $this->get('variant_id'); }
    public function hasVariantId(): bool { return $this->has('variant_id'); }
}
