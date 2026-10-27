<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $name
 * @property-read string $sku
 * @property-read string $variant_id
 * Presence-aware input; omitted fields throw when accessed. */
final class ProductVariantMatchInput extends Model {
    /** @param array{'name'?: string, 'sku'?: string, 'variant_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ProductVariantMatchInput')); }
    /** Shape $ (Value): string. Name of the matching variant, when set.
     * @return string
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Shape $ (Value): string. Stock keeping unit of the matching variant, when set.
     * @return string
     * @throws SdkError When sku is omitted; use hasSku() or valueOrDefault().
     */
    public function getSku(): string { return $this->get('sku'); }
    public function hasSku(): bool { return $this->has('sku'); }
    /** Shape $ (Value): string. Identifier of the variant that matched the product list's variant filters or query.
     * @return string
     * @throws SdkError When variant_id is omitted; use hasVariantId() or valueOrDefault().
     */
    public function getVariantId(): string { return $this->get('variant_id'); }
    public function hasVariantId(): bool { return $this->has('variant_id'); }
}
