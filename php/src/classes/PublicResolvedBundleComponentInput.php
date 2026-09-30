<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int $position
 * @property-read string $product_id
 * @property-read int $quantity
 * @property-read PublicResolvedBundleVariantSummaryInput|array<array-key, mixed>|\stdClass $variant
 * @property-read string $variant_id
 * Presence-aware input; omitted fields throw when accessed. */
final class PublicResolvedBundleComponentInput extends Model {
    /** @param array{'position': int, 'product_id'?: string, 'quantity': int, 'variant'?: PublicResolvedBundleVariantSummaryInput|array<array-key, mixed>|\stdClass, 'variant_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PublicResolvedBundleComponentInput')); }
    /** @return int
     * @throws SdkError When position is omitted; use hasPosition() or valueOrDefault().
     */
    public function getPosition(): int { return $this->get('position'); }
    public function hasPosition(): bool { return $this->has('position'); }
    /** @return string
     * @throws SdkError When product_id is omitted; use hasProductId() or valueOrDefault().
     */
    public function getProductId(): string { return $this->get('product_id'); }
    public function hasProductId(): bool { return $this->has('product_id'); }
    /** @return int
     * @throws SdkError When quantity is omitted; use hasQuantity() or valueOrDefault().
     */
    public function getQuantity(): int { return $this->get('quantity'); }
    public function hasQuantity(): bool { return $this->has('quantity'); }
    /** @return PublicResolvedBundleVariantSummaryInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When variant is omitted; use hasVariant() or valueOrDefault().
     */
    public function getVariant(): mixed { return $this->get('variant'); }
    public function hasVariant(): bool { return $this->has('variant'); }
    /** @return string
     * @throws SdkError When variant_id is omitted; use hasVariantId() or valueOrDefault().
     */
    public function getVariantId(): string { return $this->get('variant_id'); }
    public function hasVariantId(): bool { return $this->has('variant_id'); }
}
