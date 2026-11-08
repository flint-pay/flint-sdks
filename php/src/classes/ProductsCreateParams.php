<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<string> $category_handles
 * @property-read ProductVariantRequestInput|array<array-key, mixed>|\stdClass $default_variant
 * @property-read string $description
 * @property-read string $external_reference_id
 * @property-read list<ImageRequestInput|array<array-key, mixed>|\stdClass> $images
 * @property-read MetadataRequestInput|array<array-key, mixed>|\stdClass $metadata
 * @property-read string|null $modifier_set_id
 * @property-read string $name
 * @property-read list<CreateProductOptionRequestInput|array<array-key, mixed>|\stdClass> $options
 * @property-read string $product_type
 * @property-read string $status
 * @property-read string $variant_mode
 * @property-read list<ProductVariantRequestInput|array<array-key, mixed>|\stdClass> $variants
 * Presence-aware input; omitted fields throw when accessed. */
final class ProductsCreateParams extends Model {
    /** @param array{'category_handles'?: list<string>, 'default_variant': ProductVariantRequestInput|array<array-key, mixed>|\stdClass, 'description'?: string, 'external_reference_id'?: string, 'images'?: list<ImageRequestInput|array<array-key, mixed>|\stdClass>, 'metadata'?: MetadataRequestInput|array<array-key, mixed>|\stdClass, 'modifier_set_id'?: string|null, 'name': string, 'product_type': string, 'status'?: string, 'variant_mode': string, 'Flint-Merchant-Id'?: string, 'Flint-Mode'?: string, 'Flint-Sandbox-Id'?: string}|object|array{'category_handles'?: list<string>, 'description'?: string, 'external_reference_id'?: string, 'images'?: list<ImageRequestInput|array<array-key, mixed>|\stdClass>, 'metadata'?: MetadataRequestInput|array<array-key, mixed>|\stdClass, 'modifier_set_id'?: string|null, 'name': string, 'options': list<CreateProductOptionRequestInput|array<array-key, mixed>|\stdClass>, 'product_type': string, 'status'?: string, 'variant_mode': string, 'variants': list<ProductVariantRequestInput|array<array-key, mixed>|\stdClass>, 'Flint-Merchant-Id'?: string, 'Flint-Mode'?: string, 'Flint-Sandbox-Id'?: string}|object $values */
    public function __construct(mixed $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ProductsCreateParams')); }
    /** Relationship set of category handles that must already exist. Each handle has 1 to 100 characters (Unicode code points). Unknown handles return RESOURCE_NOT_FOUND. Replaces the whole set when present; send [] to clear it. On PATCH, omission leaves it unchanged. Does not require expected_version. maxItems: 100. uniqueItems: true. [] (Value): string. minLength: 1. maxLength: 100. pattern: ^[a-z0-9]+(-[a-z0-9]+)*$.
     * @return list<string>
     * @throws SdkError When category_handles is omitted; use hasCategoryHandles() or valueOrDefault().
     */
    public function getCategoryHandles(): array { return $this->get('category_handles'); }
    public function hasCategoryHandles(): bool { return $this->has('category_handles'); }
    /** The single variant to create as the product's default. Send either default_variant or both options and variants. The request body for: Create product variant.
     * @return ProductVariantRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When default_variant is omitted; use hasDefaultVariant() or valueOrDefault().
     */
    public function getDefaultVariant(): mixed { return $this->get('default_variant'); }
    public function hasDefaultVariant(): bool { return $this->has('default_variant'); }
    /** Description of the product shown to buyers. minLength: 1. maxLength: 2048.
     * @return string
     * @throws SdkError When description is omitted; use hasDescription() or valueOrDefault().
     */
    public function getDescription(): string { return $this->get('description'); }
    public function hasDescription(): bool { return $this->has('description'); }
    /** Caller-owned identifier for this resource in an external system. minLength: 1. maxLength: 255. Example: "warehouse-1842".
     * @return string
     * @throws SdkError When external_reference_id is omitted; use hasExternalReferenceId() or valueOrDefault().
     */
    public function getExternalReferenceId(): string { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** The complete desired gallery in display order. The first image is primary. Send [] to clear the gallery. minItems: 0. maxItems: 8. [] (Value): {@see ImageRequestInput}. An image you supply by `source_url`, with optional `alt` text and external reference.
     * @return list<ImageRequestInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When images is omitted; use hasImages() or valueOrDefault().
     */
    public function getImages(): array { return $this->get('images'); }
    public function hasImages(): bool { return $this->has('images'); }
    /** Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: 50.
     * @return MetadataRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When metadata is omitted; use hasMetadata() or valueOrDefault().
     */
    public function getMetadata(): mixed { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** Attached modifier set. Send null on update to remove it. minLength: 1. Example: "ms_01KEZF7C007EWZVVFAWVJJM8NR".
     * @return string|null
     * @throws SdkError When modifier_set_id is omitted; use hasModifierSetId() or valueOrDefault().
     */
    public function getModifierSetId(): string|null { return $this->get('modifier_set_id'); }
    public function hasModifierSetId(): bool { return $this->has('modifier_set_id'); }
    /** Product name shown to buyers. minLength: 1. maxLength: 255.
     * @return string
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Options and values that distinguish this product's variants. Send with variants instead of default_variant. minItems: 1. [] (Value): {@see CreateProductOptionRequestInput}. A product option to create with a product, such as size, with its values, position, and status.
     * @return list<CreateProductOptionRequestInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When options is omitted; use hasOptions() or valueOrDefault().
     */
    public function getOptions(): array { return $this->get('options'); }
    public function hasOptions(): bool { return $this->has('options'); }
    /** Kind of goods or service this product represents. New variants of digital products store digital_goods when line_item_tax_category is omitted; explicit categories are preserved. Value enum: "physical", "service", "fee", "digital", "gift_card".
     * @return string
     * @throws SdkError When product_type is omitted; use hasProductType() or valueOrDefault().
     */
    public function getProductType(): string { return $this->get('product_type'); }
    public function hasProductType(): bool { return $this->has('product_type'); }
    /** Whether the product is active or inactive. An inactive product's variants cannot be sold. Default: "active". Value enum: "active", "inactive".
     * @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Selects the variant mode branch. Value enum: "simple", "optioned".
     * @return string
     * @throws SdkError When variant_mode is omitted; use hasVariantMode() or valueOrDefault().
     */
    public function getVariantMode(): string { return $this->get('variant_mode'); }
    public function hasVariantMode(): bool { return $this->has('variant_mode'); }
    /** The variants of an optioned product, sent together with `options` and without `default_variant`. Each variant selects one active value for every option. At most 100; add more later with `POST /v1/products/{product_id}/variants`. minItems: 1. maxItems: 100. [] (Value): {@see ProductVariantRequestInput}. The request body for: Create product variant.
     * @return list<ProductVariantRequestInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When variants is omitted; use hasVariants() or valueOrDefault().
     */
    public function getVariants(): array { return $this->get('variants'); }
    public function hasVariants(): bool { return $this->has('variants'); }
    /** Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: ^mer_[0-9A-HJKMNP-TV-Z]{26}$.
     * @return string
     * @throws SdkError When Flint-Merchant-Id is omitted; use hasFlintMerchantId() or valueOrDefault().
     */
    public function getFlintMerchantId(): string { return $this->get('Flint-Merchant-Id'); }
    public function hasFlintMerchantId(): bool { return $this->has('Flint-Merchant-Id'); }
    /** Mode of the request context, live or test. Optional; it must match the credential's mode. Value enum: "test", "live".
     * @return string
     * @throws SdkError When Flint-Mode is omitted; use hasFlintMode() or valueOrDefault().
     */
    public function getFlintMode(): string { return $this->get('Flint-Mode'); }
    public function hasFlintMode(): bool { return $this->has('Flint-Mode'); }
    /** Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: ^test_[0-9A-HJKMNP-TV-Z]{26}$.
     * @return string
     * @throws SdkError When Flint-Sandbox-Id is omitted; use hasFlintSandboxId() or valueOrDefault().
     */
    public function getFlintSandboxId(): string { return $this->get('Flint-Sandbox-Id'); }
    public function hasFlintSandboxId(): bool { return $this->has('Flint-Sandbox-Id'); }
}
