<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<string> $category_handles
 * @property-read string|null $default_variant_id
 * @property-read string|null $description
 * @property-read string $expected_version
 * @property-read string|null $external_reference_id
 * @property-read list<ImageRequestInput|array<array-key, mixed>|\stdClass> $images
 * @property-read array<array-key, string|null>|\stdClass|null $metadata
 * @property-read string|null $modifier_set_id
 * @property-read string $name
 * @property-read list<UpdateProductOptionRequestInput|array<array-key, mixed>|\stdClass> $options
 * @property-read string $product_type
 * @property-read string $status
 * Presence-aware input; omitted fields throw when accessed. */
final class UpdateProductRequestInput extends Model {
    /** @param array{'category_handles'?: list<string>, 'default_variant_id'?: string|null, 'description'?: string|null, 'expected_version'?: string, 'external_reference_id'?: string|null, 'images'?: list<ImageRequestInput|array<array-key, mixed>|\stdClass>, 'metadata'?: array<array-key, string|null>|\stdClass|null, 'modifier_set_id'?: string|null, 'name'?: string, 'options'?: list<UpdateProductOptionRequestInput|array<array-key, mixed>|\stdClass>, 'product_type'?: string, 'status'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('UpdateProductRequestInput')); }
    /** Shape $ (Value): Array of string. Relationship set of category handles that must already exist. Each handle has 1 to 100 characters (Unicode code points). Unknown handles return RESOURCE_NOT_FOUND. Replaces the whole set when present; send [] to clear it. On PATCH, omission leaves it unchanged. Does not require expected_version. maxItems: 100. uniqueItems: true. Shape $[] (Value): string. minLength: 1. maxLength: 100. pattern: ^[a-z0-9]+(-[a-z0-9]+)*$.
     * @return list<string>
     * @throws SdkError When category_handles is omitted; use hasCategoryHandles() or valueOrDefault().
     */
    public function getCategoryHandles(): array { return $this->get('category_handles'); }
    public function hasCategoryHandles(): bool { return $this->has('category_handles'); }
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1.
     * @return string|null
     * @throws SdkError When default_variant_id is omitted; use hasDefaultVariantId() or valueOrDefault().
     */
    public function getDefaultVariantId(): string|null { return $this->get('default_variant_id'); }
    public function hasDefaultVariantId(): bool { return $this->has('default_variant_id'); }
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1. maxLength: 2048.
     * @return string|null
     * @throws SdkError When description is omitted; use hasDescription() or valueOrDefault().
     */
    public function getDescription(): string|null { return $this->get('description'); }
    public function hasDescription(): bool { return $this->has('description'); }
    /** Shape $ (Value): integer string. Resource version last read by the caller. Required when options or images is present. Use an integer string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     * @return string
     * @throws SdkError When expected_version is omitted; use hasExpectedVersion() or valueOrDefault().
     */
    public function getExpectedVersion(): string { return $this->get('expected_version'); }
    public function hasExpectedVersion(): bool { return $this->has('expected_version'); }
    /** Shape $ (Value): string or null. Caller-owned identifier for this resource in an external system. Send null to clear it. minLength: 1. maxLength: 255.
     * @return string|null
     * @throws SdkError When external_reference_id is omitted; use hasExternalReferenceId() or valueOrDefault().
     */
    public function getExternalReferenceId(): string|null { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** Shape $ (Value): Array of {@see ImageRequestInput}. The complete desired gallery in display order. The first image is primary. Send [] to clear the gallery. minItems: 0. maxItems: 8. Shape $[] (Value): {@see ImageRequestInput}. An image you supply by `source_url`, with optional `alt` text and external reference.
     * @return list<ImageRequestInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When images is omitted; use hasImages() or valueOrDefault().
     */
    public function getImages(): array { return $this->get('images'); }
    public function hasImages(): bool { return $this->has('images'); }
    /** Shape $ (Value): Map of (string or null) or null. Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Shape $.* (Value): string or null. minLength: 1.
     * @return array<array-key, string|null>|\stdClass|null
     * @throws SdkError When metadata is omitted; use hasMetadata() or valueOrDefault().
     */
    public function getMetadata(): array|object|null { return $this->get('metadata'); }
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
    /** Shape $ (Value): Array of {@see UpdateProductOptionRequestInput}. Replaces all product options and values atomically. Include existing option_id and option_value_id values to retain members. Omitted members are archived. Null is not accepted. Shape $[] (Value): {@see UpdateProductOptionRequestInput}. A product option to keep or add when updating a product, with its name, position, status, and values.
     * @return list<UpdateProductOptionRequestInput|array<array-key, mixed>|\stdClass>
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
    /** Shape $ (Value): string. Whether the product is active or inactive. An inactive product's variants cannot be sold. Value enum: "active", "inactive".
     * @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
}
