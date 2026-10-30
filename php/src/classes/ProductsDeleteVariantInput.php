<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $product_id
 * @property-read string $variant_id
 * @property-read int $expected_version
 * Presence-aware input; omitted fields throw when accessed. */
final class ProductsDeleteVariantInput extends Model {
    /** @param array{'product_id': string, 'variant_id': string, 'expected_version'?: int}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ProductsDeleteVariantInput')); }
    /** Flint product ID. Example: "prod_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When product_id is omitted; use hasProductId() or valueOrDefault().
     */
    public function getProductId(): string { return $this->get('product_id'); }
    public function hasProductId(): bool { return $this->has('product_id'); }
    /** Flint product variant ID. Example: "var_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When variant_id is omitted; use hasVariantId() or valueOrDefault().
     */
    public function getVariantId(): string { return $this->get('variant_id'); }
    public function hasVariantId(): bool { return $this->has('variant_id'); }
    /** Optional product variant version last read by the caller. Format: uint64. minimum: 1.
     * @return int
     * @throws SdkError When expected_version is omitted; use hasExpectedVersion() or valueOrDefault().
     */
    public function getExpectedVersion(): int { return $this->get('expected_version'); }
    public function hasExpectedVersion(): bool { return $this->has('expected_version'); }
}
