<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read bool $available_for_sale
 * @property-read string $name
 * @property-read string $product_name
 * @property-read list<SelectedProductOption> $selected_options
 * @property-read string $sku
 * @property-read string $variant_id
 * Presence-aware response; omitted fields throw when accessed. */
final class BundleComponentVariantSummary extends Model {
    /** @param array{'available_for_sale': bool, 'name'?: string, 'product_name'?: string, 'selected_options'?: list<mixed>, 'sku'?: string, 'variant_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BundleComponentVariantSummary')); }
    /** @return bool
     * @throws SdkError When available_for_sale is omitted; use hasAvailableForSale() or valueOrDefault().
     */
    public function getAvailableForSale(): bool { return $this->get('available_for_sale'); }
    public function hasAvailableForSale(): bool { return $this->has('available_for_sale'); }
    /** @return string
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** @return string
     * @throws SdkError When product_name is omitted; use hasProductName() or valueOrDefault().
     */
    public function getProductName(): string { return $this->get('product_name'); }
    public function hasProductName(): bool { return $this->has('product_name'); }
    /** @return list<SelectedProductOption>
     * @throws SdkError When selected_options is omitted; use hasSelectedOptions() or valueOrDefault().
     */
    public function getSelectedOptions(): array { return $this->get('selected_options'); }
    public function hasSelectedOptions(): bool { return $this->has('selected_options'); }
    /** @return string
     * @throws SdkError When sku is omitted; use hasSku() or valueOrDefault().
     */
    public function getSku(): string { return $this->get('sku'); }
    public function hasSku(): bool { return $this->has('sku'); }
    /** @return string
     * @throws SdkError When variant_id is omitted; use hasVariantId() or valueOrDefault().
     */
    public function getVariantId(): string { return $this->get('variant_id'); }
    public function hasVariantId(): bool { return $this->has('variant_id'); }
}
