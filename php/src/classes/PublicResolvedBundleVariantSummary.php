<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read bool $available_for_sale
 * @property-read ?string $name
 * @property-read ?list<SelectedProductOption> $selected_options
 * @property-read ?string $sku
 * @property-read string $variant_id
 * Presence-aware response; omitted optional fields return null. */
final class PublicResolvedBundleVariantSummary extends Model {
    /** @param array{'available_for_sale': bool, 'name'?: string, 'selected_options'?: list<mixed>, 'sku'?: string, 'variant_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PublicResolvedBundleVariantSummary')); }
    /** available_for_sale
     * @return bool
     */
    public function getAvailableForSale(): bool { return $this->get('available_for_sale'); }
    public function hasAvailableForSale(): bool { return $this->has('available_for_sale'); }
    /** name
     * @return ?string
     */
    public function getName(): ?string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /**  [] (Value): {@see SelectedProductOption}. An option and value chosen for a product variant, such as size Large.
     * @return ?list<SelectedProductOption>
     */
    public function getSelectedOptions(): ?array { return $this->get('selected_options'); }
    public function hasSelectedOptions(): bool { return $this->has('selected_options'); }
    /** sku
     * @return ?string
     */
    public function getSku(): ?string { return $this->get('sku'); }
    public function hasSku(): bool { return $this->has('sku'); }
    /** variant_id
     * @return string
     */
    public function getVariantId(): string { return $this->get('variant_id'); }
    public function hasVariantId(): bool { return $this->has('variant_id'); }
}
