<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int|null $active_variant_count
 * @property-read list<CategoryReferencePreviousAttributes>|null $categories
 * @property-read string|null $created_at
 * @property-read ProductVariantPreviousAttributes|null $default_variant
 * @property-read string|null $default_variant_id
 * @property-read string|null $delivery_configuration_status
 * @property-read string|null $description
 * @property-read string|null $external_reference_id
 * @property-read list<ImageAttachmentPreviousAttributes>|null $images
 * @property-read bool|null $is_available_for_sale
 * @property-read string|null $merchant_id
 * @property-read array<array-key, string>|null $metadata
 * @property-read string|null $modifier_set_id
 * @property-read string|null $name
 * @property-read int|null $option_count
 * @property-read list<ProductOptionPreviousAttributes>|null $options
 * @property-read ProductPriceRangePreviousAttributes|null $price_range
 * @property-read string|null $product_id
 * @property-read string|null $product_type
 * @property-read string|null $status
 * @property-read string|null $updated_at
 * @property-read int|null $variant_count
 * @property-read int|null $version
 * Presence-aware response; omitted optional fields return null. */
final class ProductUpdatedMerchantEventDataPreviousAttributes extends Model {
    /** @param array{'active_variant_count'?: mixed, 'categories'?: mixed, 'created_at'?: mixed, 'default_variant'?: mixed, 'default_variant_id'?: mixed, 'delivery_configuration_status'?: mixed, 'description'?: mixed, 'external_reference_id'?: mixed, 'images'?: mixed, 'is_available_for_sale'?: mixed, 'merchant_id'?: mixed, 'metadata'?: mixed, 'modifier_set_id'?: mixed, 'name'?: mixed, 'option_count'?: mixed, 'options'?: mixed, 'price_range'?: mixed, 'product_id'?: mixed, 'product_type'?: mixed, 'status'?: mixed, 'updated_at'?: mixed, 'variant_count'?: mixed, 'version'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ProductUpdatedMerchantEventDataPreviousAttributes')); }
    /** Number of active variants belonging to the product. anyOf[1] (Value): integer. Number of active variants belonging to the product. Format: int32. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getActiveVariantCount(): int|null { return $this->get('active_variant_count'); }
    public function hasActiveVariantCount(): bool { return $this->has('active_variant_count'); }
    /** Always present. Empty collections are returned as []. anyOf[1] (Value): Array of {@see CategoryReferencePreviousAttributes}. Always present. Empty collections are returned as []. anyOf[1][] (Value): {@see CategoryReferencePreviousAttributes}. anyOf[2] (Value): null.
     * @return list<CategoryReferencePreviousAttributes>|null
     */
    public function getCategories(): array|null { return $this->get('categories'); }
    public function hasCategories(): bool { return $this->has('categories'); }
    /** When this resource was created, as an RFC3339 timestamp. anyOf[1] (Value): string. When this resource was created, as an RFC3339 timestamp. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCreatedAt(): string|null { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** The product's default variant, when one is set. anyOf[1] (Value): {@see ProductVariantPreviousAttributes}. anyOf[2] (Value): null.
     * @return ProductVariantPreviousAttributes|null
     */
    public function getDefaultVariant(): ProductVariantPreviousAttributes|null { return $this->get('default_variant'); }
    public function hasDefaultVariant(): bool { return $this->has('default_variant'); }
    /** Identifier of the variant chosen as this product's default, when one is set. anyOf[1] (Value): string. Identifier of the variant chosen as this product's default, when one is set. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getDefaultVariantId(): string|null { return $this->get('default_variant_id'); }
    public function hasDefaultVariantId(): bool { return $this->has('default_variant_id'); }
    /** Delivery readiness aggregated across the product's non-archived variants. Value enum: "configured", "action_required", "not_applicable". anyOf[1] (Value): string. Delivery readiness aggregated across the product's non-archived variants. Value enum: "configured", "action_required", "not_applicable". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getDeliveryConfigurationStatus(): string|null { return $this->get('delivery_configuration_status'); }
    public function hasDeliveryConfigurationStatus(): bool { return $this->has('delivery_configuration_status'); }
    /** Description of the product shown to buyers. anyOf[1] (Value): string. Description of the product shown to buyers. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getDescription(): string|null { return $this->get('description'); }
    public function hasDescription(): bool { return $this->has('description'); }
    /** Caller-owned identifier for this resource in an external system. anyOf[1] (Value): string. Caller-owned identifier for this resource in an external system. maxLength: 255. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getExternalReferenceId(): string|null { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** Images attached to this resource, in display order. The first image is primary. anyOf[1] (Value): Array of {@see ImageAttachmentPreviousAttributes}. Images attached to this resource, in display order. The first image is primary. anyOf[1][] (Value): {@see ImageAttachmentPreviousAttributes}. anyOf[2] (Value): null.
     * @return list<ImageAttachmentPreviousAttributes>|null
     */
    public function getImages(): array|null { return $this->get('images'); }
    public function hasImages(): bool { return $this->has('images'); }
    /** Whether the product is active and has at least one active variant. anyOf[1] (Value): boolean. Whether the product is active and has at least one active variant. anyOf[2] (Value): null.
     * @return bool|null
     */
    public function getIsAvailableForSale(): bool|null { return $this->get('is_available_for_sale'); }
    public function hasIsAvailableForSale(): bool { return $this->has('is_available_for_sale'); }
    /** Identifier of the merchant that owns this resource. anyOf[1] (Value): string. Identifier of the merchant that owns this resource. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getMerchantId(): string|null { return $this->get('merchant_id'); }
    public function hasMerchantId(): bool { return $this->has('merchant_id'); }
    /** Caller-owned metadata stored on this resource. anyOf[1] (Value): {@see MetadataMapPreviousAttributes}. anyOf[2] (Value): null.
     * @return array<array-key, string>|null
     */
    public function getMetadata(): array|null { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** ID of the modifier set attached to the product. `null` when no modifier set is attached. anyOf[1] (Value): string. ID of the modifier set attached to the product. `null` when no modifier set is attached. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getModifierSetId(): string|null { return $this->get('modifier_set_id'); }
    public function hasModifierSetId(): bool { return $this->has('modifier_set_id'); }
    /** Product name shown to buyers. anyOf[1] (Value): string. Product name shown to buyers. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getName(): string|null { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Number of active options belonging to the product. anyOf[1] (Value): integer. Number of active options belonging to the product. Format: int32. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getOptionCount(): int|null { return $this->get('option_count'); }
    public function hasOptionCount(): bool { return $this->has('option_count'); }
    /** Product options and their non-archived values. Empty when the product has no options. anyOf[1] (Value): Array of {@see ProductOptionPreviousAttributes}. Product options and their non-archived values. Empty when the product has no options. anyOf[1][] (Value): {@see ProductOptionPreviousAttributes}. anyOf[2] (Value): null.
     * @return list<ProductOptionPreviousAttributes>|null
     */
    public function getOptions(): array|null { return $this->get('options'); }
    public function hasOptions(): bool { return $this->has('options'); }
    /** Lowest and highest base unit prices among active variants, before any quantity price breaks. Omitted when there are no active variants or their currencies differ. anyOf[1] (Value): {@see ProductPriceRangePreviousAttributes}. anyOf[2] (Value): null.
     * @return ProductPriceRangePreviousAttributes|null
     */
    public function getPriceRange(): ProductPriceRangePreviousAttributes|null { return $this->get('price_range'); }
    public function hasPriceRange(): bool { return $this->has('price_range'); }
    /** Stable identifier of the product. anyOf[1] (Value): string. Stable identifier of the product. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getProductId(): string|null { return $this->get('product_id'); }
    public function hasProductId(): bool { return $this->has('product_id'); }
    /** Kind of goods or service this product represents. New variants of digital products store digital_goods when line_item_tax_category is omitted; explicit categories are preserved. Value enum: "physical", "service", "fee", "digital", "gift_card". anyOf[1] (Value): string. Kind of goods or service this product represents. New variants of digital products store digital_goods when line_item_tax_category is omitted; explicit categories are preserved. Value enum: "physical", "service", "fee", "digital", "gift_card". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getProductType(): string|null { return $this->get('product_type'); }
    public function hasProductType(): bool { return $this->has('product_type'); }
    /** Product lifecycle status. Archived products remain readable and cannot be edited. Value enum: "active", "inactive", "archived". anyOf[1] (Value): string. Product lifecycle status. Archived products remain readable and cannot be edited. Value enum: "active", "inactive", "archived". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getStatus(): string|null { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** When this resource last changed, as an RFC3339 timestamp. anyOf[1] (Value): string. When this resource last changed, as an RFC3339 timestamp. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getUpdatedAt(): string|null { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Number of non-archived variants belonging to the product. anyOf[1] (Value): integer. Number of non-archived variants belonging to the product. Format: int32. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getVariantCount(): int|null { return $this->get('variant_count'); }
    public function hasVariantCount(): bool { return $this->has('variant_count'); }
    /** Current resource version. Send it as expected_version to reject a write if the resource has changed. anyOf[1] (Value): integer. Current resource version. Send it as expected_version to reject a write if the resource has changed. Format: uint64. minimum: 0. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getVersion(): int|null { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
