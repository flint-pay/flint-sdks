<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int $active_variant_count
 * @property-read bool $available_for_sale
 * @property-read list<CategoryReferenceInput|array<array-key, mixed>|\stdClass> $categories
 * @property-read string|\DateTimeInterface $created_at
 * @property-read ProductVariantInput|array<array-key, mixed>|\stdClass $default_variant
 * @property-read string $default_variant_id
 * @property-read string $delivery_configuration_status
 * @property-read string $description
 * @property-read string $external_reference_id
 * @property-read list<ImageAttachmentInput|array<array-key, mixed>|\stdClass> $images
 * @property-read ProductVariantMatchInput|array<array-key, mixed>|\stdClass $matched_variant
 * @property-read string $merchant_id
 * @property-read MetadataMapInput|array<array-key, mixed>|\stdClass $metadata
 * @property-read array{'created_at'?: string|\DateTimeInterface, 'external_reference_id'?: string, 'merchant_id'?: string, 'metadata'?: MetadataMapInput|array<array-key, mixed>|\stdClass, 'modifier_groups': list<ModifierSetGroupInput|array<array-key, mixed>|\stdClass>, 'modifier_set_id': string, 'name': string, 'status': string, 'updated_at'?: string|\DateTimeInterface, 'version': string, ...}|object|null $modifier_set
 * @property-read string|null $modifier_set_id
 * @property-read string $name
 * @property-read int $option_count
 * @property-read list<ProductOptionInput|array<array-key, mixed>|\stdClass> $options
 * @property-read ProductPriceRangeInput|array<array-key, mixed>|\stdClass $price_range
 * @property-read string $product_id
 * @property-read string $product_type
 * @property-read string $status
 * @property-read string|\DateTimeInterface $updated_at
 * @property-read int $variant_count
 * @property-read list<ProductVariantInput|array<array-key, mixed>|\stdClass> $variants
 * @property-read string $version
 * Presence-aware input; omitted fields throw when accessed. */
final class ProductInput extends Model {
    /** @param array{'active_variant_count'?: int, 'available_for_sale'?: bool, 'categories': list<CategoryReferenceInput|array<array-key, mixed>|\stdClass>, 'created_at'?: string|\DateTimeInterface, 'default_variant'?: ProductVariantInput|array<array-key, mixed>|\stdClass, 'default_variant_id'?: string, 'delivery_configuration_status': string, 'description'?: string, 'external_reference_id'?: string, 'images': list<ImageAttachmentInput|array<array-key, mixed>|\stdClass>, 'matched_variant'?: ProductVariantMatchInput|array<array-key, mixed>|\stdClass, 'merchant_id'?: string, 'metadata'?: MetadataMapInput|array<array-key, mixed>|\stdClass, 'modifier_set'?: array{'created_at'?: string|\DateTimeInterface, 'external_reference_id'?: string, 'merchant_id'?: string, 'metadata'?: MetadataMapInput|array<array-key, mixed>|\stdClass, 'modifier_groups': list<ModifierSetGroupInput|array<array-key, mixed>|\stdClass>, 'modifier_set_id': string, 'name': string, 'status': string, 'updated_at'?: string|\DateTimeInterface, 'version': string, ...}|object|null, 'modifier_set_id': string|null, 'name': string, 'option_count'?: int, 'options': list<ProductOptionInput|array<array-key, mixed>|\stdClass>, 'price_range'?: ProductPriceRangeInput|array<array-key, mixed>|\stdClass, 'product_id': string, 'product_type': string, 'status': string, 'updated_at'?: string|\DateTimeInterface, 'variant_count'?: int, 'variants'?: list<ProductVariantInput|array<array-key, mixed>|\stdClass>, 'version': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ProductInput')); }
    /** Shape $ (Value): integer. Number of active variants belonging to the product. Format: int32.
     * @return int
     * @throws SdkError When active_variant_count is omitted; use hasActiveVariantCount() or valueOrDefault().
     */
    public function getActiveVariantCount(): int { return $this->get('active_variant_count'); }
    public function hasActiveVariantCount(): bool { return $this->has('active_variant_count'); }
    /** Shape $ (Value): boolean. Whether the product is active and has at least one active variant.
     * @return bool
     * @throws SdkError When available_for_sale is omitted; use hasAvailableForSale() or valueOrDefault().
     */
    public function getAvailableForSale(): bool { return $this->get('available_for_sale'); }
    public function hasAvailableForSale(): bool { return $this->has('available_for_sale'); }
    /** Shape $ (Value): Array of {@see CategoryReferenceInput}. Always present. Empty collections are returned as []. Shape $[] (Value): {@see CategoryReferenceInput}. A reference to a product category by ID, handle, and name.
     * @return list<CategoryReferenceInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When categories is omitted; use hasCategories() or valueOrDefault().
     */
    public function getCategories(): array { return $this->get('categories'); }
    public function hasCategories(): bool { return $this->has('categories'); }
    /** Shape $ (Value): string. When this resource was created, as an RFC3339 timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string|\DateTimeInterface { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Shape $ (Value): {@see ProductVariantInput}. The product's default variant, when one is set. A specific purchasable version of a product.
     * @return ProductVariantInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When default_variant is omitted; use hasDefaultVariant() or valueOrDefault().
     */
    public function getDefaultVariant(): mixed { return $this->get('default_variant'); }
    public function hasDefaultVariant(): bool { return $this->has('default_variant'); }
    /** Shape $ (Value): string. Identifier of the variant chosen as this product's default, when one is set.
     * @return string
     * @throws SdkError When default_variant_id is omitted; use hasDefaultVariantId() or valueOrDefault().
     */
    public function getDefaultVariantId(): string { return $this->get('default_variant_id'); }
    public function hasDefaultVariantId(): bool { return $this->has('default_variant_id'); }
    /** Shape $ (Value): string. Delivery readiness aggregated across the product's non-archived variants. Value enum: "configured", "action_required", "not_applicable".
     * @return string
     * @throws SdkError When delivery_configuration_status is omitted; use hasDeliveryConfigurationStatus() or valueOrDefault().
     */
    public function getDeliveryConfigurationStatus(): string { return $this->get('delivery_configuration_status'); }
    public function hasDeliveryConfigurationStatus(): bool { return $this->has('delivery_configuration_status'); }
    /** Shape $ (Value): string. Description of the product shown to buyers.
     * @return string
     * @throws SdkError When description is omitted; use hasDescription() or valueOrDefault().
     */
    public function getDescription(): string { return $this->get('description'); }
    public function hasDescription(): bool { return $this->has('description'); }
    /** Shape $ (Value): string. Caller-owned identifier for this resource in an external system. maxLength: 255.
     * @return string
     * @throws SdkError When external_reference_id is omitted; use hasExternalReferenceId() or valueOrDefault().
     */
    public function getExternalReferenceId(): string { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** Shape $ (Value): Array of {@see ImageAttachmentInput}. Images attached to this resource, in display order. The first image is primary. Shape $[] (Value): {@see ImageAttachmentInput}. An image attached to a resource, with its display properties and attachment metadata.
     * @return list<ImageAttachmentInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When images is omitted; use hasImages() or valueOrDefault().
     */
    public function getImages(): array { return $this->get('images'); }
    public function hasImages(): bool { return $this->has('images'); }
    /** Shape $ (Value): {@see ProductVariantMatchInput}. On product list rows, the first non-archived variant by position, then variant_id, that matches all exact variant filters. Without exact variant filters, identifies the first variant whose SKU matches query. Omitted when no variant matches; a product name or description match alone does not set it. Page the product's variants to find all matches. A single variant witness on product list rows only. With exact variant filters, the first variant by position, then variant_id, satisfying every exact predicate. Otherwise, the first variant in that order whose SKU matches query. Use the paginated nested variant list to enumerate every match.
     * @return ProductVariantMatchInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When matched_variant is omitted; use hasMatchedVariant() or valueOrDefault().
     */
    public function getMatchedVariant(): mixed { return $this->get('matched_variant'); }
    public function hasMatchedVariant(): bool { return $this->has('matched_variant'); }
    /** Shape $ (Value): string. Identifier of the merchant that owns this resource.
     * @return string
     * @throws SdkError When merchant_id is omitted; use hasMerchantId() or valueOrDefault().
     */
    public function getMerchantId(): string { return $this->get('merchant_id'); }
    public function hasMerchantId(): bool { return $this->has('merchant_id'); }
    /** Shape $ (Value): {@see MetadataMapInput}. Caller-owned metadata stored on this resource. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them.
     * @return MetadataMapInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When metadata is omitted; use hasMetadata() or valueOrDefault().
     */
    public function getMetadata(): mixed { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** Shape $ (Value): {@see ModifierSetInput} or null. Attached modifier set, included when expand=modifier_set is requested. Requires commerce.catalog.read in addition to the resource's read scope. Shape $.anyOf[1] (Value): {@see ModifierSetInput}. A reusable collection of customization groups. Shape $.anyOf[2] (Value): null.
     * @return array{'created_at'?: string|\DateTimeInterface, 'external_reference_id'?: string, 'merchant_id'?: string, 'metadata'?: MetadataMapInput|array<array-key, mixed>|\stdClass, 'modifier_groups': list<ModifierSetGroupInput|array<array-key, mixed>|\stdClass>, 'modifier_set_id': string, 'name': string, 'status': string, 'updated_at'?: string|\DateTimeInterface, 'version': string, ...}|object|null
     * @throws SdkError When modifier_set is omitted; use hasModifierSet() or valueOrDefault().
     */
    public function getModifierSet(): mixed { return $this->get('modifier_set'); }
    public function hasModifierSet(): bool { return $this->has('modifier_set'); }
    /** Shape $ (Value): string or null. Attached modifier set. Send null on update to remove it.
     * @return string|null
     * @throws SdkError When modifier_set_id is omitted; use hasModifierSetId() or valueOrDefault().
     */
    public function getModifierSetId(): string|null { return $this->get('modifier_set_id'); }
    public function hasModifierSetId(): bool { return $this->has('modifier_set_id'); }
    /** Shape $ (Value): string. Product name shown to buyers.
     * @return string
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Shape $ (Value): integer. Number of active options belonging to the product. Format: int32.
     * @return int
     * @throws SdkError When option_count is omitted; use hasOptionCount() or valueOrDefault().
     */
    public function getOptionCount(): int { return $this->get('option_count'); }
    public function hasOptionCount(): bool { return $this->has('option_count'); }
    /** Shape $ (Value): Array of {@see ProductOptionInput}. Product options and their non-archived values. Empty when the product has no options. Shape $[] (Value): {@see ProductOptionInput}. A choice that defines a product's variants.
     * @return list<ProductOptionInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When options is omitted; use hasOptions() or valueOrDefault().
     */
    public function getOptions(): array { return $this->get('options'); }
    public function hasOptions(): bool { return $this->has('options'); }
    /** Shape $ (Value): {@see ProductPriceRangeInput}. Lowest and highest unit prices among active variants. Omitted when there are no active variants or their currencies differ. The lowest and highest unit prices across a product's variants.
     * @return ProductPriceRangeInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When price_range is omitted; use hasPriceRange() or valueOrDefault().
     */
    public function getPriceRange(): mixed { return $this->get('price_range'); }
    public function hasPriceRange(): bool { return $this->has('price_range'); }
    /** Shape $ (Value): string. Stable identifier of the product.
     * @return string
     * @throws SdkError When product_id is omitted; use hasProductId() or valueOrDefault().
     */
    public function getProductId(): string { return $this->get('product_id'); }
    public function hasProductId(): bool { return $this->has('product_id'); }
    /** Shape $ (Value): string. Kind of goods or service this product represents. Value enum: "physical", "service", "fee", "digital", "gift_card".
     * @return string
     * @throws SdkError When product_type is omitted; use hasProductType() or valueOrDefault().
     */
    public function getProductType(): string { return $this->get('product_type'); }
    public function hasProductType(): bool { return $this->has('product_type'); }
    /** Shape $ (Value): string. Product lifecycle status. Archived products remain readable and cannot be edited. Value enum: "active", "inactive", "archived".
     * @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Shape $ (Value): string. When this resource last changed, as an RFC3339 timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When updated_at is omitted; use hasUpdatedAt() or valueOrDefault().
     */
    public function getUpdatedAt(): string|\DateTimeInterface { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Shape $ (Value): integer. Number of non-archived variants belonging to the product. Format: int32.
     * @return int
     * @throws SdkError When variant_count is omitted; use hasVariantCount() or valueOrDefault().
     */
    public function getVariantCount(): int { return $this->get('variant_count'); }
    public function hasVariantCount(): bool { return $this->has('variant_count'); }
    /** Shape $ (Value): Array of {@see ProductVariantInput}. The variants this request created, ordered by `position` and then `variant_id`. Present only on the `POST /v1/products` response. Read variants later with `GET /v1/products/{product_id}/variants`. Shape $[] (Value): {@see ProductVariantInput}. A specific purchasable version of a product.
     * @return list<ProductVariantInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When variants is omitted; use hasVariants() or valueOrDefault().
     */
    public function getVariants(): array { return $this->get('variants'); }
    public function hasVariants(): bool { return $this->has('variants'); }
    /** Shape $ (Value): integer string. Current resource version. Send it as expected_version to reject a write if the resource has changed. Use an integer string (decimal digits), not a floating-point number. Format: uint64. minimum: 0.
     * @return string
     * @throws SdkError When version is omitted; use hasVersion() or valueOrDefault().
     */
    public function getVersion(): string { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
