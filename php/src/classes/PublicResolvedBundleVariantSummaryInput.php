<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read bool $is_available_for_sale
 * @property-read string $name
 * @property-read string $product_id
 * @property-read list<SelectedProductOptionInput|array<array-key, mixed>|\stdClass> $selected_options
 * @property-read string $sku
 * @property-read string $variant_id
 * Presence-aware input; omitted fields throw when accessed. */
final class PublicResolvedBundleVariantSummaryInput extends Model {
    /** @param array{'is_available_for_sale': bool, 'name'?: string, 'product_id': string, 'selected_options'?: list<SelectedProductOptionInput|array<array-key, mixed>|\stdClass>, 'sku'?: string, 'variant_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PublicResolvedBundleVariantSummaryInput')); }
    /** Whether the variant can be sold now.
     * @return bool
     * @throws SdkError When is_available_for_sale is omitted; use hasIsAvailableForSale() or valueOrDefault().
     */
    public function getIsAvailableForSale(): bool { return $this->get('is_available_for_sale'); }
    public function hasIsAvailableForSale(): bool { return $this->has('is_available_for_sale'); }
    /** Name of the variant.
     * @return string
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Identifier of the product this resolved bundle component variant belongs to. Example: "prod_01KEZF7C00BVSHCNWVH528HB66".
     * @return string
     * @throws SdkError When product_id is omitted; use hasProductId() or valueOrDefault().
     */
    public function getProductId(): string { return $this->get('product_id'); }
    public function hasProductId(): bool { return $this->has('product_id'); }
    /** The product options the variant selects, such as size or color. [] (Value): {@see SelectedProductOptionInput}. An option and value chosen for a product variant, such as size Large.
     * @return list<SelectedProductOptionInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When selected_options is omitted; use hasSelectedOptions() or valueOrDefault().
     */
    public function getSelectedOptions(): array { return $this->get('selected_options'); }
    public function hasSelectedOptions(): bool { return $this->has('selected_options'); }
    /** SKU of the variant.
     * @return string
     * @throws SdkError When sku is omitted; use hasSku() or valueOrDefault().
     */
    public function getSku(): string { return $this->get('sku'); }
    public function hasSku(): bool { return $this->has('sku'); }
    /** ID of the variant. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     * @return string
     * @throws SdkError When variant_id is omitted; use hasVariantId() or valueOrDefault().
     */
    public function getVariantId(): string { return $this->get('variant_id'); }
    public function hasVariantId(): bool { return $this->has('variant_id'); }
}
