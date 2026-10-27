<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $barcode
 * @property-read list<string> $category_handles
 * @property-read list<CreateBundleComponentRequestInput|array<array-key, mixed>|\stdClass> $components
 * @property-read string $description
 * @property-read string $external_reference_id
 * @property-read list<ImageRequestInput|array<array-key, mixed>|\stdClass> $images
 * @property-read string $line_item_tax_category
 * @property-read array<array-key, string>|\stdClass $metadata
 * @property-read string|null $modifier_set_id
 * @property-read string $name
 * @property-read string $sku
 * @property-read string $status
 * @property-read bool $taxable
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $unit_price_money
 * Presence-aware input; omitted fields throw when accessed. */
final class CreateBundleRequestInput extends Model {
    /** @param array{'barcode'?: string, 'category_handles'?: list<string>, 'components'?: list<CreateBundleComponentRequestInput|array<array-key, mixed>|\stdClass>, 'description'?: string, 'external_reference_id'?: string, 'images'?: list<ImageRequestInput|array<array-key, mixed>|\stdClass>, 'line_item_tax_category'?: string, 'metadata'?: array<array-key, string>|\stdClass, 'modifier_set_id'?: string|null, 'name': string, 'sku'?: string, 'status'?: string, 'taxable'?: bool, 'unit_price_money': MoneyValueInput|array<array-key, mixed>|\stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreateBundleRequestInput')); }
    /** Shape $ (Value): string. Barcode assigned to this sellable item. minLength: 1. maxLength: 100.
     * @return string
     * @throws SdkError When barcode is omitted; use hasBarcode() or valueOrDefault().
     */
    public function getBarcode(): string { return $this->get('barcode'); }
    public function hasBarcode(): bool { return $this->has('barcode'); }
    /** Shape $ (Value): Array of string. Relationship set of category handles that must already exist. Each handle has 1 to 100 characters (Unicode code points). Unknown handles return RESOURCE_NOT_FOUND. Replaces the whole set when present; send [] to clear it. On PATCH, omission leaves it unchanged. Does not require expected_version. maxItems: 100. uniqueItems: true. Shape $[] (Value): string. minLength: 1. maxLength: 100. pattern: ^[a-z0-9]+(-[a-z0-9]+)*$.
     * @return list<string>
     * @throws SdkError When category_handles is omitted; use hasCategoryHandles() or valueOrDefault().
     */
    public function getCategoryHandles(): array { return $this->get('category_handles'); }
    public function hasCategoryHandles(): bool { return $this->has('category_handles'); }
    /** Shape $ (Value): Array of {@see CreateBundleComponentRequestInput}. Variants included in the bundle and their quantities. Required when status is active; send status: inactive to create a draft without components. Shape $[] (Value): {@see CreateBundleComponentRequestInput}. A component to include when creating a bundle: a variant, its quantity and position, and an optional delivery profile override.
     * @return list<CreateBundleComponentRequestInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When components is omitted; use hasComponents() or valueOrDefault().
     */
    public function getComponents(): array { return $this->get('components'); }
    public function hasComponents(): bool { return $this->has('components'); }
    /** Shape $ (Value): string. Description of the bundle shown to buyers. minLength: 1. maxLength: 2048.
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
    /** Shape $ (Value): string. Flint line-item tax category. Value enum: "general", "physical_goods", "digital_goods", "software", "saas", "services", "professional_services", "food", "prepared_food", "clothing", "medical_goods", "admission".
     * @return string
     * @throws SdkError When line_item_tax_category is omitted; use hasLineItemTaxCategory() or valueOrDefault().
     */
    public function getLineItemTaxCategory(): string { return $this->get('line_item_tax_category'); }
    public function hasLineItemTaxCategory(): bool { return $this->has('line_item_tax_category'); }
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
    /** Shape $ (Value): string. Bundle name shown to buyers. minLength: 1. maxLength: 255.
     * @return string
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Shape $ (Value): string. Stock keeping unit assigned to this sellable item. minLength: 1. maxLength: 100.
     * @return string
     * @throws SdkError When sku is omitted; use hasSku() or valueOrDefault().
     */
    public function getSku(): string { return $this->get('sku'); }
    public function hasSku(): bool { return $this->has('sku'); }
    /** Shape $ (Value): string. Whether the bundle is active or inactive. Defaults to active; an active bundle requires components. Default: "active". Value enum: "active", "inactive".
     * @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Shape $ (Value): boolean. Whether this item is subject to tax.
     * @return bool
     * @throws SdkError When taxable is omitted; use hasTaxable() or valueOrDefault().
     */
    public function getTaxable(): bool { return $this->get('taxable'); }
    public function hasTaxable(): bool { return $this->has('taxable'); }
    /** Shape $ (Value): {@see MoneyValueInput}. Price charged for one unit, in the currency's smallest unit. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When unit_price_money is omitted; use hasUnitPriceMoney() or valueOrDefault().
     */
    public function getUnitPriceMoney(): mixed { return $this->get('unit_price_money'); }
    public function hasUnitPriceMoney(): bool { return $this->has('unit_price_money'); }
}
