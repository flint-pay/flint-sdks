<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<string> $category_handles
 * @property-read ProductVariantRequestInput|array<array-key, mixed>|\stdClass $default_variant
 * @property-read string $description
 * @property-read string $external_reference_id
 * @property-read list<ImageRequestInput|array<array-key, mixed>|\stdClass> $images
 * @property-read array<array-key, string>|\stdClass $metadata
 * @property-read string|null $modifier_set_id
 * @property-read string $name
 * @property-read list<CreateProductOptionRequestInput|array<array-key, mixed>|\stdClass> $options
 * @property-read string $product_type
 * @property-read string $status
 * @property-read list<ProductVariantRequestInput|array<array-key, mixed>|\stdClass> $variants
 * Presence-aware input; omitted fields throw when accessed. */
final class CreateProductRequestInput extends Model {
    /** @param mixed $values */
    public function __construct(mixed $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreateProductRequestInput')); }
    /** Shape $ (Value): Array of string. Relationship set of category handles that must already exist. Each handle has 1 to 100 characters (Unicode code points). Unknown handles return RESOURCE_NOT_FOUND. Replaces the whole set when present; send [] to clear it. On PATCH, omission leaves it unchanged. Does not require expected_version. maxItems: 100. uniqueItems: true. Shape $[] (Value): string. minLength: 1. maxLength: 100. pattern: ^[a-z0-9]+(-[a-z0-9]+)*$.
     * @return list<string>
     * @throws SdkError When category_handles is omitted; use hasCategoryHandles() or valueOrDefault().
     */
    public function getCategoryHandles(): array { return $this->get('category_handles'); }
    public function hasCategoryHandles(): bool { return $this->has('category_handles'); }
    /** Shape $ (Value): {@see ProductVariantRequestInput}. The single variant to create as the product's default. Send either default_variant or both options and variants. The request body for: Create product variant.
     * @return ProductVariantRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When default_variant is omitted; use hasDefaultVariant() or valueOrDefault().
     */
    public function getDefaultVariant(): mixed { return $this->get('default_variant'); }
    public function hasDefaultVariant(): bool { return $this->has('default_variant'); }
    /** Shape $ (Value): string. Description of the product shown to buyers. minLength: 1. maxLength: 2048.
     * @return string
     * @throws SdkError When description is omitted; use hasDescription() or valueOrDefault().
     */
    public function getDescription(): string { return $this->get('description'); }
    public function hasDescription(): bool { return $this->has('description'); }
    /** Shape $ (Value): string. Caller-owned identifier for this resource in an external system. minLength: 1. maxLength: 255.
     * @return string
     * @throws SdkError When external_reference_id is omitted; use hasExternalReferenceId() or valueOrDefault().
     */
    public function getExternalReferenceId(): string { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** Shape $ (Value): Array of {@see ImageRequestInput}. The complete desired gallery in display order. The first image is primary. Send [] to clear the gallery. minItems: 0. maxItems: 8. Shape $[] (Value): {@see ImageRequestInput}. An image you supply by `source_url`, with optional `alt` text and external reference.
     * @return list<ImageRequestInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When images is omitted; use hasImages() or valueOrDefault().
     */
    public function getImages(): array { return $this->get('images'); }
    public function hasImages(): bool { return $this->has('images'); }
    /** Shape $ (Value): Map of string. Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Shape $.* (Value): string. minLength: 1.
     * @return array<array-key, string>|\stdClass
     * @throws SdkError When metadata is omitted; use hasMetadata() or valueOrDefault().
     */
    public function getMetadata(): array|object { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** Shape $ (Value): string or null. Attached modifier set. Send null on update to remove it. minLength: 1.
     * @return string|null
     * @throws SdkError When modifier_set_id is omitted; use hasModifierSetId() or valueOrDefault().
     */
    public function getModifierSetId(): string|null { return $this->get('modifier_set_id'); }
    public function hasModifierSetId(): bool { return $this->has('modifier_set_id'); }
    /** Shape $ (Value): string. Product name shown to buyers. minLength: 1. maxLength: 255.
     * @return string
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Shape $ (Value): Array of {@see CreateProductOptionRequestInput}. Options and values that distinguish this product's variants. Send with variants instead of default_variant. minItems: 1. Shape $[] (Value): {@see CreateProductOptionRequestInput}. A product option to create with a product, such as size, with its values, position, and status.
     * @return list<CreateProductOptionRequestInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When options is omitted; use hasOptions() or valueOrDefault().
     */
    public function getOptions(): array { return $this->get('options'); }
    public function hasOptions(): bool { return $this->has('options'); }
    /** Shape $ (Value): string. Kind of goods or service this product represents. Value enum: "physical", "service", "fee", "digital", "gift_card".
     * @return string
     * @throws SdkError When product_type is omitted; use hasProductType() or valueOrDefault().
     */
    public function getProductType(): string { return $this->get('product_type'); }
    public function hasProductType(): bool { return $this->has('product_type'); }
    /** Shape $ (Value): string. Whether the product is active or inactive. An inactive product's variants cannot be sold. Default: "active". Value enum: "active", "inactive".
     * @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Shape $ (Value): Array of {@see ProductVariantRequestInput}. Independent variants to create with this product, at most 100. Add more with `POST /v1/products/{product_id}/variants`. minItems: 1. maxItems: 100. Shape $[] (Value): {@see ProductVariantRequestInput}. The request body for: Create product variant.
     * @return list<ProductVariantRequestInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When variants is omitted; use hasVariants() or valueOrDefault().
     */
    public function getVariants(): array { return $this->get('variants'); }
    public function hasVariants(): bool { return $this->has('variants'); }
}
