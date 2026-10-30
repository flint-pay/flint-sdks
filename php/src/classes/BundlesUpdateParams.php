<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $barcode
 * @property-read list<string> $category_handles
 * @property-read list<array{'bundle_component_id'?: string, 'delivery_profile_id'?: string|null, 'position'?: int, 'quantity'?: int, 'variant_id': string}|object> $components
 * @property-read string|null $description
 * @property-read int $expected_version
 * @property-read string|null $external_reference_id
 * @property-read list<array{'alt'?: string, 'file_id'?: string, 'source_reference'?: string, 'source_url': string}|object|array{'alt'?: string, 'file_id': string, 'source_reference'?: string, 'source_url'?: string}|object> $images
 * @property-read array<array-key, string|null>|\stdClass|null $metadata
 * @property-read string|null $modifier_set_id
 * @property-read string $name
 * @property-read string|null $sku
 * @property-read string $status
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $unit_price_money
 * Presence-aware input; omitted fields throw when accessed. */
final class BundlesUpdateParams extends Model {
    /** @param array{'barcode'?: string|null, 'category_handles'?: list<string>, 'components'?: list<array{'bundle_component_id'?: string, 'delivery_profile_id'?: string|null, 'position'?: int, 'quantity'?: int, 'variant_id': string}|object>, 'description'?: string|null, 'expected_version'?: int, 'external_reference_id'?: string|null, 'images'?: list<array{'alt'?: string, 'file_id'?: string, 'source_reference'?: string, 'source_url': string}|object|array{'alt'?: string, 'file_id': string, 'source_reference'?: string, 'source_url'?: string}|object>, 'metadata'?: array<array-key, string|null>|\stdClass|null, 'modifier_set_id'?: string|null, 'name'?: string, 'sku'?: string|null, 'status'?: string, 'unit_price_money'?: MoneyValueInput|array<array-key, mixed>|\stdClass}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BundlesUpdateParams')); }
    /** Send null to clear it. minLength: 1. maxLength: 100.
     * @return string|null
     * @throws SdkError When barcode is omitted; use hasBarcode() or valueOrDefault().
     */
    public function getBarcode(): string|null { return $this->get('barcode'); }
    public function hasBarcode(): bool { return $this->has('barcode'); }
    /** Relationship set of category handles that must already exist. Each handle has 1 to 100 characters (Unicode code points). Unknown handles return RESOURCE_NOT_FOUND. Replaces the whole set when present; send [] to clear it. On PATCH, omission leaves it unchanged. Does not require expected_version. maxItems: 100. uniqueItems: true. [] (Value): string. minLength: 1. maxLength: 100. pattern: ^[a-z0-9]+(-[a-z0-9]+)*$.
     * @return list<string>
     * @throws SdkError When category_handles is omitted; use hasCategoryHandles() or valueOrDefault().
     */
    public function getCategoryHandles(): array { return $this->get('category_handles'); }
    public function hasCategoryHandles(): bool { return $this->has('category_handles'); }
    /** Replaces all bundle components atomically. Include an existing bundle_component_id to retain a member. Omitted members are removed. All must share taxable and line_item_tax_category; an unset category equals only another unset category. Components are compared with the first input component, with a NOT_ALLOWED detail at each differing components[index].variant_id. Null is not accepted. [] (Value): {@see UpdateBundleComponentRequestInput}. A component to keep or add when updating a bundle, with its variant, quantity, position, and delivery profile.
     * @return list<array{'bundle_component_id'?: string, 'delivery_profile_id'?: string|null, 'position'?: int, 'quantity'?: int, 'variant_id': string}|object>
     * @throws SdkError When components is omitted; use hasComponents() or valueOrDefault().
     */
    public function getComponents(): array { return $this->get('components'); }
    public function hasComponents(): bool { return $this->has('components'); }
    /** Send null to clear it. minLength: 1. maxLength: 2048.
     * @return string|null
     * @throws SdkError When description is omitted; use hasDescription() or valueOrDefault().
     */
    public function getDescription(): string|null { return $this->get('description'); }
    public function hasDescription(): bool { return $this->has('description'); }
    /** Resource version last read by the caller. Required when components or images is present. Format: uint64. minimum: 1.
     * @return int
     * @throws SdkError When expected_version is omitted; use hasExpectedVersion() or valueOrDefault().
     */
    public function getExpectedVersion(): int { return $this->get('expected_version'); }
    public function hasExpectedVersion(): bool { return $this->has('expected_version'); }
    /** Caller-owned identifier for this resource in an external system. Send null to clear it. minLength: 1. maxLength: 255.
     * @return string|null
     * @throws SdkError When external_reference_id is omitted; use hasExternalReferenceId() or valueOrDefault().
     */
    public function getExternalReferenceId(): string|null { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** The complete desired gallery in display order. The first image is primary. Send [] to clear the gallery. minItems: 0. maxItems: 8. [] (Value): {@see ImageRequestInput}. An image you supply by `source_url`, with optional `alt` text and external reference.
     * @return list<array{'alt'?: string, 'file_id'?: string, 'source_reference'?: string, 'source_url': string}|object|array{'alt'?: string, 'file_id': string, 'source_reference'?: string, 'source_url'?: string}|object>
     * @throws SdkError When images is omitted; use hasImages() or valueOrDefault().
     */
    public function getImages(): array { return $this->get('images'); }
    public function hasImages(): bool { return $this->has('images'); }
    /** Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. This operation also limits the metadata object you send, before merging: at most 50 keys, counting null deletions, each key 1 to 256 Unicode code points, and at most 32768 UTF-8 bytes of keys plus values. anyOf[1] (Value): {@see MetadataPatchRequestInput}. Changes to a caller-owned metadata map. Omit the field to leave metadata unchanged. Each key sets a value, a null value deletes the key, and an empty object makes no change; send null for the whole field to clear all caller-owned metadata. The resulting map is limited the same way as MetadataInput: Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Deleting a key that does not exist is allowed, so the number of operations is not itself the stored-map limit. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: 50. Changes to a caller-owned metadata map. Omit the field to leave metadata unchanged. Each key sets a value, a null value deletes the key, and an empty object makes no change; send null for the whole field to clear all caller-owned metadata. The resulting map is limited the same way as MetadataInput: Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Deleting a key that does not exist is allowed, so the number of operations is not itself the stored-map limit. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. anyOf[1].* (Value): string or null. minLength: 1. maxLength: 4096. anyOf[2] (Value): null.
     * @return array<array-key, string|null>|\stdClass|null
     * @throws SdkError When metadata is omitted; use hasMetadata() or valueOrDefault().
     */
    public function getMetadata(): mixed { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** Attached modifier set. Send null on update to remove it. minLength: 1. Example: "ms_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string|null
     * @throws SdkError When modifier_set_id is omitted; use hasModifierSetId() or valueOrDefault().
     */
    public function getModifierSetId(): string|null { return $this->get('modifier_set_id'); }
    public function hasModifierSetId(): bool { return $this->has('modifier_set_id'); }
    /** Bundle name shown to buyers. minLength: 1. maxLength: 255.
     * @return string
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Send null to clear it. minLength: 1. maxLength: 100.
     * @return string|null
     * @throws SdkError When sku is omitted; use hasSku() or valueOrDefault().
     */
    public function getSku(): string|null { return $this->get('sku'); }
    public function hasSku(): bool { return $this->has('sku'); }
    /** Whether the bundle is active or inactive. An inactive bundle cannot be sold. Value enum: "active", "inactive".
     * @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Price charged for one unit, in the currency's smallest unit. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When unit_price_money is omitted; use hasUnitPriceMoney() or valueOrDefault().
     */
    public function getUnitPriceMoney(): mixed { return $this->get('unit_price_money'); }
    public function hasUnitPriceMoney(): bool { return $this->has('unit_price_money'); }
}
