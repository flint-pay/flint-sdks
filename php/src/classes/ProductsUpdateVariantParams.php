<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $barcode
 * @property-read string|null $delivery_profile_id
 * @property-read int $expected_version
 * @property-read string|null $external_reference_id
 * @property-read GiftCardProductConfigurationRequestInput|array<array-key, mixed>|\stdClass $gift_card_configuration
 * @property-read list<array{'alt'?: string, 'file_id'?: string, 'source_reference'?: string, 'source_url': string}|object|array{'alt'?: string, 'file_id': string, 'source_reference'?: string, 'source_url'?: string}|object> $images
 * @property-read InventoryItemCreateRequestInput|array<array-key, mixed>|\stdClass $inventory_item
 * @property-read string|null $inventory_item_id
 * @property-read string|null $line_item_tax_category
 * @property-read array<array-key, string|null>|\stdClass|null $metadata
 * @property-read string|null $modifier_set_id
 * @property-read string|null $name
 * @property-read int $position
 * @property-read list<ProductVariantSelectedOptionRequestInput|array<array-key, mixed>|\stdClass> $selected_options
 * @property-read string|null $sku
 * @property-read string $status
 * @property-read bool $taxable
 * @property-read array{'height': int|float, 'length': int|float, 'unit': string, 'width': int|float}|object|null $unit_dimensions
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $unit_price_money
 * @property-read array{'unit': string, 'value': int|float}|object|null $unit_weight
 * Presence-aware input; omitted fields throw when accessed. */
final class ProductsUpdateVariantParams extends Model {
    /** @param array{'barcode'?: string|null, 'delivery_profile_id'?: string|null, 'expected_version'?: int, 'external_reference_id'?: string|null, 'gift_card_configuration'?: GiftCardProductConfigurationRequestInput|array<array-key, mixed>|\stdClass, 'images'?: list<array{'alt'?: string, 'file_id'?: string, 'source_reference'?: string, 'source_url': string}|object|array{'alt'?: string, 'file_id': string, 'source_reference'?: string, 'source_url'?: string}|object>, 'inventory_item'?: InventoryItemCreateRequestInput|array<array-key, mixed>|\stdClass, 'inventory_item_id'?: string|null, 'line_item_tax_category'?: string|null, 'metadata'?: array<array-key, string|null>|\stdClass|null, 'modifier_set_id'?: string|null, 'name'?: string|null, 'position'?: int, 'selected_options'?: list<ProductVariantSelectedOptionRequestInput|array<array-key, mixed>|\stdClass>, 'sku'?: string|null, 'status'?: string, 'taxable'?: bool, 'unit_dimensions'?: array{'height': int|float, 'length': int|float, 'unit': string, 'width': int|float}|object|null, 'unit_price_money'?: MoneyValueInput|array<array-key, mixed>|\stdClass, 'unit_weight'?: array{'unit': string, 'value': int|float}|object|null}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ProductsUpdateVariantParams')); }
    /** Send null to clear it. minLength: 1. maxLength: 100.
     * @return string|null
     * @throws SdkError When barcode is omitted; use hasBarcode() or valueOrDefault().
     */
    public function getBarcode(): string|null { return $this->get('barcode'); }
    public function hasBarcode(): bool { return $this->has('barcode'); }
    /** Send null to clear it. minLength: 1. Example: "dprof_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string|null
     * @throws SdkError When delivery_profile_id is omitted; use hasDeliveryProfileId() or valueOrDefault().
     */
    public function getDeliveryProfileId(): string|null { return $this->get('delivery_profile_id'); }
    public function hasDeliveryProfileId(): bool { return $this->has('delivery_profile_id'); }
    /** Resource version last read by the caller. Required when images is present. Format: uint64. minimum: 1.
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
    /** Replaces the complete gift card configuration. Omission preserves it. Null is not accepted. Include expected_version to reject a concurrent variant change. Gift card settings on a product variant: its `face_value_money`, price mode (face value or discounted), and bounds for custom amounts.
     * @return GiftCardProductConfigurationRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When gift_card_configuration is omitted; use hasGiftCardConfiguration() or valueOrDefault().
     */
    public function getGiftCardConfiguration(): mixed { return $this->get('gift_card_configuration'); }
    public function hasGiftCardConfiguration(): bool { return $this->has('gift_card_configuration'); }
    /** Replaces the authored variant gallery atomically. Send [] to clear it and resume product-image inheritance. minItems: 0. maxItems: 8. [] (Value): {@see ImageRequestInput}. An image you supply by `source_url`, with optional `alt` text and external reference.
     * @return list<array{'alt'?: string, 'file_id'?: string, 'source_reference'?: string, 'source_url': string}|object|array{'alt'?: string, 'file_id': string, 'source_reference'?: string, 'source_url'?: string}|object>
     * @throws SdkError When images is omitted; use hasImages() or valueOrDefault().
     */
    public function getImages(): array { return $this->get('images'); }
    public function hasImages(): bool { return $this->has('images'); }
    /** New inventory item to create and track for this variant. Send either inventory_item or inventory_item_id. Inventory item details you supply when creating an inventory item for a product variant: `name`, `sku`, `barcode`, and metadata.
     * @return InventoryItemCreateRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When inventory_item is omitted; use hasInventoryItem() or valueOrDefault().
     */
    public function getInventoryItem(): mixed { return $this->get('inventory_item'); }
    public function hasInventoryItem(): bool { return $this->has('inventory_item'); }
    /** Inventory item tracked by this variant. Send null to stop tracking inventory. minLength: 1. Example: "invi_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string|null
     * @throws SdkError When inventory_item_id is omitted; use hasInventoryItemId() or valueOrDefault().
     */
    public function getInventoryItemId(): string|null { return $this->get('inventory_item_id'); }
    public function hasInventoryItemId(): bool { return $this->has('inventory_item_id'); }
    /** Flint line-item tax category to store. Send null to clear it and use the merchant default. Returns 409 ACTION_NOT_ALLOWED with reason mixed_tax_treatment and blocking_resources if a containing bundle would become mixed. Value enum: "general", "physical_goods", "digital_goods", "software", "saas", "services", "professional_services", "food", "prepared_food", "clothing", "medical_goods", "admission", null.
     * @return string|null
     * @throws SdkError When line_item_tax_category is omitted; use hasLineItemTaxCategory() or valueOrDefault().
     */
    public function getLineItemTaxCategory(): string|null { return $this->get('line_item_tax_category'); }
    public function hasLineItemTaxCategory(): bool { return $this->has('line_item_tax_category'); }
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
    /** Send null to clear it. minLength: 1. maxLength: 255.
     * @return string|null
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): string|null { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Display order among the product's variants, starting at zero. Format: int32.
     * @return int
     * @throws SdkError When position is omitted; use hasPosition() or valueOrDefault().
     */
    public function getPosition(): int { return $this->get('position'); }
    public function hasPosition(): bool { return $this->has('position'); }
    /** Option name and value selections for this variant. When present on an update, replaces the entire selection. Omit to leave unchanged. Select one active value for every active option. null is invalid. [] (Value): {@see ProductVariantSelectedOptionRequestInput}. An option name and value you choose to identify a product variant, such as Size and Large.
     * @return list<ProductVariantSelectedOptionRequestInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When selected_options is omitted; use hasSelectedOptions() or valueOrDefault().
     */
    public function getSelectedOptions(): array { return $this->get('selected_options'); }
    public function hasSelectedOptions(): bool { return $this->has('selected_options'); }
    /** Send null to clear it. minLength: 1. maxLength: 100.
     * @return string|null
     * @throws SdkError When sku is omitted; use hasSku() or valueOrDefault().
     */
    public function getSku(): string|null { return $this->get('sku'); }
    public function hasSku(): bool { return $this->has('sku'); }
    /** Whether the variant is active or inactive. An inactive variant cannot be sold. Value enum: "active", "inactive".
     * @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Whether this item is subject to tax.
     * @return bool
     * @throws SdkError When taxable is omitted; use hasTaxable() or valueOrDefault().
     */
    public function getTaxable(): bool { return $this->get('taxable'); }
    public function hasTaxable(): bool { return $this->has('taxable'); }
    /** Replaces the complete object. Send null to clear it. anyOf[1] (Value): {@see DimensionsInput}. Package or item dimensions as `length`, `width`, and `height` in the given `unit`. anyOf[2] (Value): null.
     * @return array{'height': int|float, 'length': int|float, 'unit': string, 'width': int|float}|object|null
     * @throws SdkError When unit_dimensions is omitted; use hasUnitDimensions() or valueOrDefault().
     */
    public function getUnitDimensions(): mixed { return $this->get('unit_dimensions'); }
    public function hasUnitDimensions(): bool { return $this->has('unit_dimensions'); }
    /** Price charged for one unit, in the currency's smallest unit. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When unit_price_money is omitted; use hasUnitPriceMoney() or valueOrDefault().
     */
    public function getUnitPriceMoney(): mixed { return $this->get('unit_price_money'); }
    public function hasUnitPriceMoney(): bool { return $this->has('unit_price_money'); }
    /** Replaces the complete object. Send null to clear it. anyOf[1] (Value): {@see WeightInput}. A weight value in grams, kilograms, ounces, or pounds, used in delivery profile configuration. anyOf[2] (Value): null.
     * @return array{'unit': string, 'value': int|float}|object|null
     * @throws SdkError When unit_weight is omitted; use hasUnitWeight() or valueOrDefault().
     */
    public function getUnitWeight(): mixed { return $this->get('unit_weight'); }
    public function hasUnitWeight(): bool { return $this->has('unit_weight'); }
}
