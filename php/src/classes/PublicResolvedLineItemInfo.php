<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<PublicResolvedModifierGroup> $available_modifiers
 * @property-read list<PublicResolvedBundleComponent> $bundle_components
 * @property-read string $bundle_id
 * @property-read string $catalog_object_type
 * @property-read Image $image
 * @property-read bool $is_inventory_tracked
 * @property-read string $key
 * @property-read string $product_id
 * @property-read string $resolved_description
 * @property-read string $resolved_name
 * @property-read MoneyValue $resolved_unit_price_money
 * @property-read list<SelectedProductOption> $selected_options
 * @property-read string $variant_id
 * Presence-aware response; omitted fields throw when accessed. */
final class PublicResolvedLineItemInfo extends Model {
    /** @param array{'available_modifiers'?: list<mixed>, 'bundle_components'?: list<mixed>, 'bundle_id'?: string, 'catalog_object_type'?: string, 'image'?: mixed, 'is_inventory_tracked'?: bool, 'key': string, 'product_id'?: string, 'resolved_description'?: string, 'resolved_name'?: string, 'resolved_unit_price_money'?: mixed, 'selected_options'?: list<mixed>, 'variant_id'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PublicResolvedLineItemInfo')); }
    /** @return list<PublicResolvedModifierGroup>
     * @throws SdkError When available_modifiers is omitted; use hasAvailableModifiers() or valueOrDefault().
     */
    public function getAvailableModifiers(): array { return $this->get('available_modifiers'); }
    public function hasAvailableModifiers(): bool { return $this->has('available_modifiers'); }
    /** @return list<PublicResolvedBundleComponent>
     * @throws SdkError When bundle_components is omitted; use hasBundleComponents() or valueOrDefault().
     */
    public function getBundleComponents(): array { return $this->get('bundle_components'); }
    public function hasBundleComponents(): bool { return $this->has('bundle_components'); }
    /** @return string
     * @throws SdkError When bundle_id is omitted; use hasBundleId() or valueOrDefault().
     */
    public function getBundleId(): string { return $this->get('bundle_id'); }
    public function hasBundleId(): bool { return $this->has('bundle_id'); }
    /** @return string
     * @throws SdkError When catalog_object_type is omitted; use hasCatalogObjectType() or valueOrDefault().
     */
    public function getCatalogObjectType(): string { return $this->get('catalog_object_type'); }
    public function hasCatalogObjectType(): bool { return $this->has('catalog_object_type'); }
    /** @return Image
     * @throws SdkError When image is omitted; use hasImage() or valueOrDefault().
     */
    public function getImage(): Image { return $this->get('image'); }
    public function hasImage(): bool { return $this->has('image'); }
    /** @return bool
     * @throws SdkError When is_inventory_tracked is omitted; use hasIsInventoryTracked() or valueOrDefault().
     */
    public function getIsInventoryTracked(): bool { return $this->get('is_inventory_tracked'); }
    public function hasIsInventoryTracked(): bool { return $this->has('is_inventory_tracked'); }
    /** @return string
     * @throws SdkError When key is omitted; use hasKey() or valueOrDefault().
     */
    public function getKey(): string { return $this->get('key'); }
    public function hasKey(): bool { return $this->has('key'); }
    /** @return string
     * @throws SdkError When product_id is omitted; use hasProductId() or valueOrDefault().
     */
    public function getProductId(): string { return $this->get('product_id'); }
    public function hasProductId(): bool { return $this->has('product_id'); }
    /** @return string
     * @throws SdkError When resolved_description is omitted; use hasResolvedDescription() or valueOrDefault().
     */
    public function getResolvedDescription(): string { return $this->get('resolved_description'); }
    public function hasResolvedDescription(): bool { return $this->has('resolved_description'); }
    /** @return string
     * @throws SdkError When resolved_name is omitted; use hasResolvedName() or valueOrDefault().
     */
    public function getResolvedName(): string { return $this->get('resolved_name'); }
    public function hasResolvedName(): bool { return $this->has('resolved_name'); }
    /** @return MoneyValue
     * @throws SdkError When resolved_unit_price_money is omitted; use hasResolvedUnitPriceMoney() or valueOrDefault().
     */
    public function getResolvedUnitPriceMoney(): MoneyValue { return $this->get('resolved_unit_price_money'); }
    public function hasResolvedUnitPriceMoney(): bool { return $this->has('resolved_unit_price_money'); }
    /** @return list<SelectedProductOption>
     * @throws SdkError When selected_options is omitted; use hasSelectedOptions() or valueOrDefault().
     */
    public function getSelectedOptions(): array { return $this->get('selected_options'); }
    public function hasSelectedOptions(): bool { return $this->has('selected_options'); }
    /** @return string
     * @throws SdkError When variant_id is omitted; use hasVariantId() or valueOrDefault().
     */
    public function getVariantId(): string { return $this->get('variant_id'); }
    public function hasVariantId(): bool { return $this->has('variant_id'); }
}
