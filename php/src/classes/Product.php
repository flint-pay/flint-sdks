<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int $active_variant_count
 * @property-read bool $available_for_sale
 * @property-read list<CategoryReference> $categories
 * @property-read string $created_at
 * @property-read ProductVariant $default_variant
 * @property-read string $default_variant_id
 * @property-read string $delivery_configuration_status
 * @property-read string $description
 * @property-read string $external_reference_id
 * @property-read list<Image> $images
 * @property-read ProductVariantMatch $matched_variant
 * @property-read string $merchant_id
 * @property-read array<array-key, string> $metadata
 * @property-read ModifierSet|null $modifier_set
 * @property-read string|null $modifier_set_id
 * @property-read string $name
 * @property-read int $option_count
 * @property-read list<ProductOption> $options
 * @property-read ProductPriceRange $price_range
 * @property-read string $product_id
 * @property-read string $product_type
 * @property-read string $status
 * @property-read string $updated_at
 * @property-read int $variant_count
 * @property-read string $version
 * Presence-aware response; omitted fields throw when accessed. */
final class Product extends Model {
    /** @param array{'active_variant_count'?: int, 'available_for_sale'?: bool, 'categories'?: list<mixed>, 'created_at'?: string, 'default_variant'?: object{'available_for_sale': bool, 'barcode'?: string, 'created_at'?: string, 'current_delivery_profile_revision_id'?: string, 'delivery_configuration_reason'?: string, 'delivery_configuration_status': string, 'delivery_profile_id'?: string, 'effective_images': list<mixed>, 'external_reference_id'?: string, 'images': list<mixed>, 'images_inherited': bool, 'inventory_item_id'?: string, 'inventory_tracking': string, 'line_item_tax_category'?: string, 'merchant_id'?: string, 'metadata'?: \stdClass, 'modifier_set'?: mixed, 'modifier_set_id': string|null, 'name'?: string, 'position': int, 'product_id': string, 'selected_options'?: list<mixed>, 'sku'?: string, 'status': string, 'taxable'?: bool, 'unit_price_money': mixed, 'updated_at'?: string, 'variant_id': string, 'version': string}, 'default_variant_id'?: string, 'delivery_configuration_status': string, 'description'?: string, 'external_reference_id'?: string, 'images': list<mixed>, 'matched_variant'?: object{'name'?: string, 'sku'?: string, 'variant_id': string}, 'merchant_id'?: string, 'metadata'?: \stdClass, 'modifier_set'?: mixed, 'modifier_set_id': string|null, 'name': string, 'option_count'?: int, 'options': list<mixed>, 'price_range'?: object{'max_unit_price_money': mixed, 'min_unit_price_money': mixed}, 'product_id': string, 'product_type': string, 'status': string, 'updated_at'?: string, 'variant_count'?: int, 'version': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('Product')); }
    /** @return int
     * @throws SdkError When active_variant_count is omitted; use hasActiveVariantCount() or valueOrDefault().
     */
    public function getActiveVariantCount(): int { return $this->get('active_variant_count'); }
    public function hasActiveVariantCount(): bool { return $this->has('active_variant_count'); }
    /** @return bool
     * @throws SdkError When available_for_sale is omitted; use hasAvailableForSale() or valueOrDefault().
     */
    public function getAvailableForSale(): bool { return $this->get('available_for_sale'); }
    public function hasAvailableForSale(): bool { return $this->has('available_for_sale'); }
    /** @return list<CategoryReference>
     * @throws SdkError When categories is omitted; use hasCategories() or valueOrDefault().
     */
    public function getCategories(): array { return $this->get('categories'); }
    public function hasCategories(): bool { return $this->has('categories'); }
    /** @return string
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** @return ProductVariant
     * @throws SdkError When default_variant is omitted; use hasDefaultVariant() or valueOrDefault().
     */
    public function getDefaultVariant(): ProductVariant { return $this->get('default_variant'); }
    public function hasDefaultVariant(): bool { return $this->has('default_variant'); }
    /** @return string
     * @throws SdkError When default_variant_id is omitted; use hasDefaultVariantId() or valueOrDefault().
     */
    public function getDefaultVariantId(): string { return $this->get('default_variant_id'); }
    public function hasDefaultVariantId(): bool { return $this->has('default_variant_id'); }
    /** @return string
     * @throws SdkError When delivery_configuration_status is omitted; use hasDeliveryConfigurationStatus() or valueOrDefault().
     */
    public function getDeliveryConfigurationStatus(): string { return $this->get('delivery_configuration_status'); }
    public function hasDeliveryConfigurationStatus(): bool { return $this->has('delivery_configuration_status'); }
    /** @return string
     * @throws SdkError When description is omitted; use hasDescription() or valueOrDefault().
     */
    public function getDescription(): string { return $this->get('description'); }
    public function hasDescription(): bool { return $this->has('description'); }
    /** @return string
     * @throws SdkError When external_reference_id is omitted; use hasExternalReferenceId() or valueOrDefault().
     */
    public function getExternalReferenceId(): string { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** @return list<Image>
     * @throws SdkError When images is omitted; use hasImages() or valueOrDefault().
     */
    public function getImages(): array { return $this->get('images'); }
    public function hasImages(): bool { return $this->has('images'); }
    /** @return ProductVariantMatch
     * @throws SdkError When matched_variant is omitted; use hasMatchedVariant() or valueOrDefault().
     */
    public function getMatchedVariant(): ProductVariantMatch { return $this->get('matched_variant'); }
    public function hasMatchedVariant(): bool { return $this->has('matched_variant'); }
    /** @return string
     * @throws SdkError When merchant_id is omitted; use hasMerchantId() or valueOrDefault().
     */
    public function getMerchantId(): string { return $this->get('merchant_id'); }
    public function hasMerchantId(): bool { return $this->has('merchant_id'); }
    /** @return array<array-key, string>
     * @throws SdkError When metadata is omitted; use hasMetadata() or valueOrDefault().
     */
    public function getMetadata(): array { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** @return ModifierSet|null
     * @throws SdkError When modifier_set is omitted; use hasModifierSet() or valueOrDefault().
     */
    public function getModifierSet(): ModifierSet|null { return $this->get('modifier_set'); }
    public function hasModifierSet(): bool { return $this->has('modifier_set'); }
    /** @return string|null
     * @throws SdkError When modifier_set_id is omitted; use hasModifierSetId() or valueOrDefault().
     */
    public function getModifierSetId(): string|null { return $this->get('modifier_set_id'); }
    public function hasModifierSetId(): bool { return $this->has('modifier_set_id'); }
    /** @return string
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** @return int
     * @throws SdkError When option_count is omitted; use hasOptionCount() or valueOrDefault().
     */
    public function getOptionCount(): int { return $this->get('option_count'); }
    public function hasOptionCount(): bool { return $this->has('option_count'); }
    /** @return list<ProductOption>
     * @throws SdkError When options is omitted; use hasOptions() or valueOrDefault().
     */
    public function getOptions(): array { return $this->get('options'); }
    public function hasOptions(): bool { return $this->has('options'); }
    /** @return ProductPriceRange
     * @throws SdkError When price_range is omitted; use hasPriceRange() or valueOrDefault().
     */
    public function getPriceRange(): ProductPriceRange { return $this->get('price_range'); }
    public function hasPriceRange(): bool { return $this->has('price_range'); }
    /** @return string
     * @throws SdkError When product_id is omitted; use hasProductId() or valueOrDefault().
     */
    public function getProductId(): string { return $this->get('product_id'); }
    public function hasProductId(): bool { return $this->has('product_id'); }
    /** @return string
     * @throws SdkError When product_type is omitted; use hasProductType() or valueOrDefault().
     */
    public function getProductType(): string { return $this->get('product_type'); }
    public function hasProductType(): bool { return $this->has('product_type'); }
    /** @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** @return string
     * @throws SdkError When updated_at is omitted; use hasUpdatedAt() or valueOrDefault().
     */
    public function getUpdatedAt(): string { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** @return int
     * @throws SdkError When variant_count is omitted; use hasVariantCount() or valueOrDefault().
     */
    public function getVariantCount(): int { return $this->get('variant_count'); }
    public function hasVariantCount(): bool { return $this->has('variant_count'); }
    /** @return string
     * @throws SdkError When version is omitted; use hasVersion() or valueOrDefault().
     */
    public function getVersion(): string { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
