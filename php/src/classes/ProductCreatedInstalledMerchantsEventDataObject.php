<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?int $active_variant_count
 * @property-read ?bool $available_for_sale
 * @property-read list<CategoryReference> $categories
 * @property-read ?string $created_at
 * @property-read ?ProductVariant $default_variant
 * @property-read ?string $default_variant_id
 * @property-read string $delivery_configuration_status
 * @property-read ?string $description
 * @property-read ?string $external_reference_id
 * @property-read list<ImageAttachment> $images
 * @property-read ?ProductVariantMatch $matched_variant
 * @property-read ?string $merchant_id
 * @property-read ?array<array-key, string> $metadata
 * @property-read ModifierSet|null $modifier_set
 * @property-read string|null $modifier_set_id
 * @property-read string $name
 * @property-read ?int $option_count
 * @property-read list<ProductOption> $options
 * @property-read ?ProductPriceRange $price_range
 * @property-read string $product_id
 * @property-read string $product_type
 * @property-read string $status
 * @property-read ?string $updated_at
 * @property-read ?int $variant_count
 * @property-read ?list<ProductVariant> $variants
 * @property-read int $version
 * Presence-aware response; omitted optional fields return null. */
final class ProductCreatedInstalledMerchantsEventDataObject extends Model {
    /** @param array{'active_variant_count'?: int, 'available_for_sale'?: bool, 'categories': list<mixed>, 'created_at'?: string, 'default_variant'?: mixed, 'default_variant_id'?: string, 'delivery_configuration_status': string, 'description'?: string, 'external_reference_id'?: string, 'images': list<mixed>, 'matched_variant'?: mixed, 'merchant_id'?: string, 'metadata'?: mixed, 'modifier_set'?: mixed, 'modifier_set_id': string|null, 'name': string, 'option_count'?: int, 'options': list<mixed>, 'price_range'?: mixed, 'product_id': string, 'product_type': string, 'status': string, 'updated_at'?: string, 'variant_count'?: int, 'variants'?: list<mixed>, 'version': int, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ProductCreatedInstalledMerchantsEventDataObject')); }
    /** Number of active variants belonging to the product. Format: int32.
     * @return ?int
     */
    public function getActiveVariantCount(): ?int { return $this->get('active_variant_count'); }
    public function hasActiveVariantCount(): bool { return $this->has('active_variant_count'); }
    /** Whether the product is active and has at least one active variant.
     * @return ?bool
     */
    public function getAvailableForSale(): ?bool { return $this->get('available_for_sale'); }
    public function hasAvailableForSale(): bool { return $this->has('available_for_sale'); }
    /** Always present. Empty collections are returned as []. [] (Value): {@see CategoryReference}. A reference to a product category by ID, handle, and name.
     * @return list<CategoryReference>
     */
    public function getCategories(): array { return $this->get('categories'); }
    public function hasCategories(): bool { return $this->has('categories'); }
    /** When this resource was created, as an RFC3339 timestamp. Format: date-time.
     * @return ?string
     */
    public function getCreatedAt(): ?string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** The product's default variant, when one is set. A specific purchasable version of a product.
     * @return ?ProductVariant
     */
    public function getDefaultVariant(): ?ProductVariant { return $this->get('default_variant'); }
    public function hasDefaultVariant(): bool { return $this->has('default_variant'); }
    /** Identifier of the variant chosen as this product's default, when one is set.
     * @return ?string
     */
    public function getDefaultVariantId(): ?string { return $this->get('default_variant_id'); }
    public function hasDefaultVariantId(): bool { return $this->has('default_variant_id'); }
    /** Delivery readiness aggregated across the product's non-archived variants. Value enum: "configured", "action_required", "not_applicable".
     * @return string
     */
    public function getDeliveryConfigurationStatus(): string { return $this->get('delivery_configuration_status'); }
    public function hasDeliveryConfigurationStatus(): bool { return $this->has('delivery_configuration_status'); }
    /** Description of the product shown to buyers.
     * @return ?string
     */
    public function getDescription(): ?string { return $this->get('description'); }
    public function hasDescription(): bool { return $this->has('description'); }
    /** Caller-owned identifier for this resource in an external system. maxLength: 255.
     * @return ?string
     */
    public function getExternalReferenceId(): ?string { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** Images attached to this resource, in display order. The first image is primary. [] (Value): {@see ImageAttachment}. An image attached to a resource, with its display properties and attachment metadata.
     * @return list<ImageAttachment>
     */
    public function getImages(): array { return $this->get('images'); }
    public function hasImages(): bool { return $this->has('images'); }
    /** On product list rows, the first non-archived variant by position, then variant_id, that matches all exact variant filters. Without exact variant filters, identifies the first variant whose SKU matches query. Omitted when no variant matches; a product name or description match alone does not set it. Page the product's variants to find all matches. A single variant witness on product list rows only. With exact variant filters, the first variant by position, then variant_id, satisfying every exact predicate. Otherwise, the first variant in that order whose SKU matches query. Use the paginated nested variant list to enumerate every match.
     * @return ?ProductVariantMatch
     */
    public function getMatchedVariant(): ?ProductVariantMatch { return $this->get('matched_variant'); }
    public function hasMatchedVariant(): bool { return $this->has('matched_variant'); }
    /** Identifier of the merchant that owns this resource.
     * @return ?string
     */
    public function getMerchantId(): ?string { return $this->get('merchant_id'); }
    public function hasMerchantId(): bool { return $this->has('merchant_id'); }
    /** Caller-owned metadata stored on this resource. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them.
     * @return ?array<array-key, string>
     */
    public function getMetadata(): ?array { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** Attached modifier set, included when expand=modifier_set is requested. Requires commerce.catalog.read in addition to the resource's read scope. Present only when `expand` includes `modifier_set`; `null` when expanded and there is no related modifier set. anyOf[1] (Value): {@see ModifierSet}. A reusable collection of customization groups. anyOf[2] (Value): null.
     * @return ModifierSet|null
     */
    public function getModifierSet(): ModifierSet|null { return $this->get('modifier_set'); }
    public function hasModifierSet(): bool { return $this->has('modifier_set'); }
    /** Attached modifier set. Send null on update to remove it.
     * @return string|null
     */
    public function getModifierSetId(): string|null { return $this->get('modifier_set_id'); }
    public function hasModifierSetId(): bool { return $this->has('modifier_set_id'); }
    /** Product name shown to buyers.
     * @return string
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Number of active options belonging to the product. Format: int32.
     * @return ?int
     */
    public function getOptionCount(): ?int { return $this->get('option_count'); }
    public function hasOptionCount(): bool { return $this->has('option_count'); }
    /** Product options and their non-archived values. Empty when the product has no options. [] (Value): {@see ProductOption}. A choice that defines a product's variants.
     * @return list<ProductOption>
     */
    public function getOptions(): array { return $this->get('options'); }
    public function hasOptions(): bool { return $this->has('options'); }
    /** Lowest and highest unit prices among active variants. Omitted when there are no active variants or their currencies differ. The lowest and highest unit prices across a product's variants.
     * @return ?ProductPriceRange
     */
    public function getPriceRange(): ?ProductPriceRange { return $this->get('price_range'); }
    public function hasPriceRange(): bool { return $this->has('price_range'); }
    /** Stable identifier of the product.
     * @return string
     */
    public function getProductId(): string { return $this->get('product_id'); }
    public function hasProductId(): bool { return $this->has('product_id'); }
    /** Kind of goods or service this product represents. New variants of digital products store digital_goods when line_item_tax_category is omitted; explicit categories are preserved. Value enum: "physical", "service", "fee", "digital", "gift_card".
     * @return string
     */
    public function getProductType(): string { return $this->get('product_type'); }
    public function hasProductType(): bool { return $this->has('product_type'); }
    /** Product lifecycle status. Archived products remain readable and cannot be edited. Value enum: "active", "inactive", "archived".
     * @return string
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** When this resource last changed, as an RFC3339 timestamp. Format: date-time.
     * @return ?string
     */
    public function getUpdatedAt(): ?string { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Number of non-archived variants belonging to the product. Format: int32.
     * @return ?int
     */
    public function getVariantCount(): ?int { return $this->get('variant_count'); }
    public function hasVariantCount(): bool { return $this->has('variant_count'); }
    /** The variants this request created, ordered by `position` and then `variant_id`. Present only on the `POST /v1/products` response. Read variants later with `GET /v1/products/{product_id}/variants`. [] (Value): {@see ProductVariant}. A specific purchasable version of a product.
     * @return ?list<ProductVariant>
     */
    public function getVariants(): ?array { return $this->get('variants'); }
    public function hasVariants(): bool { return $this->has('variants'); }
    /** Current resource version. Send it as expected_version to reject a write if the resource has changed. Format: uint64. minimum: 0.
     * @return int
     */
    public function getVersion(): int { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
