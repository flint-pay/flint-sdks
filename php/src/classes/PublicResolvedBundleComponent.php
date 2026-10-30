<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int $position
 * @property-read ?string $product_id
 * @property-read int $quantity
 * @property-read ?PublicResolvedBundleVariantSummary $variant
 * @property-read string $variant_id
 * Presence-aware response; omitted optional fields return null. */
final class PublicResolvedBundleComponent extends Model {
    /** @param array{'position': int, 'product_id'?: string, 'quantity': int, 'variant'?: mixed, 'variant_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PublicResolvedBundleComponent')); }
    /** Format: int32.
     * @return int
     */
    public function getPosition(): int { return $this->get('position'); }
    public function hasPosition(): bool { return $this->has('position'); }
    /** product_id
     * @return ?string
     */
    public function getProductId(): ?string { return $this->get('product_id'); }
    public function hasProductId(): bool { return $this->has('product_id'); }
    /** Whole-number quantity; fractional quantities are not supported. Format: int32.
     * @return int
     */
    public function getQuantity(): int { return $this->get('quantity'); }
    public function hasQuantity(): bool { return $this->has('quantity'); }
    /** A summary of a bundle component's variant, with its name, SKU, selected options, and whether it is available for sale.
     * @return ?PublicResolvedBundleVariantSummary
     */
    public function getVariant(): ?PublicResolvedBundleVariantSummary { return $this->get('variant'); }
    public function hasVariant(): bool { return $this->has('variant'); }
    /** variant_id
     * @return string
     */
    public function getVariantId(): string { return $this->get('variant_id'); }
    public function hasVariantId(): bool { return $this->has('variant_id'); }
}
