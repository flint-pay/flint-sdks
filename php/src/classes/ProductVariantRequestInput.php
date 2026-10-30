<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $barcode
 * @property-read string $delivery_profile_id
 * @property-read string $external_reference_id
 * @property-read GiftCardProductConfigurationRequestInput|array<array-key, mixed>|\stdClass $gift_card_configuration
 * @property-read list<ImageRequestInput|array<array-key, mixed>|\stdClass> $images
 * @property-read InventoryItemCreateRequestInput|array<array-key, mixed>|\stdClass $inventory_item
 * @property-read string $inventory_item_id
 * @property-read string $line_item_tax_category
 * @property-read MetadataRequestInput|array<array-key, mixed>|\stdClass $metadata
 * @property-read string|null $modifier_set_id
 * @property-read string $name
 * @property-read int $position
 * @property-read list<ProductVariantSelectedOptionRequestInput|array<array-key, mixed>|\stdClass> $selected_options
 * @property-read string $sku
 * @property-read string $status
 * @property-read bool $taxable
 * @property-read DimensionsInput|array<array-key, mixed>|\stdClass $unit_dimensions
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $unit_price_money
 * @property-read WeightInput|array<array-key, mixed>|\stdClass $unit_weight
 * Presence-aware input; omitted fields throw when accessed. */
final class ProductVariantRequestInput extends Model {
    /** @param array{'barcode'?: string, 'delivery_profile_id'?: string, 'external_reference_id'?: string, 'gift_card_configuration'?: GiftCardProductConfigurationRequestInput|array<array-key, mixed>|\stdClass, 'images'?: list<ImageRequestInput|array<array-key, mixed>|\stdClass>, 'inventory_item'?: InventoryItemCreateRequestInput|array<array-key, mixed>|\stdClass, 'inventory_item_id'?: string, 'line_item_tax_category'?: string, 'metadata'?: MetadataRequestInput|array<array-key, mixed>|\stdClass, 'modifier_set_id'?: string|null, 'name'?: string, 'position'?: int, 'selected_options'?: list<ProductVariantSelectedOptionRequestInput|array<array-key, mixed>|\stdClass>, 'sku'?: string, 'status'?: string, 'taxable'?: bool, 'unit_dimensions'?: DimensionsInput|array<array-key, mixed>|\stdClass, 'unit_price_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'unit_weight'?: WeightInput|array<array-key, mixed>|\stdClass}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ProductVariantRequestInput')); }
    /** Barcode assigned to this sellable item. minLength: 1. maxLength: 100.
     * @return string
     * @throws SdkError When barcode is omitted; use hasBarcode() or valueOrDefault().
     */
    public function getBarcode(): string { return $this->get('barcode'); }
    public function hasBarcode(): bool { return $this->has('barcode'); }
    /** Identifier of the delivery profile to assign to this variant. minLength: 1.
     * @return string
     * @throws SdkError When delivery_profile_id is omitted; use hasDeliveryProfileId() or valueOrDefault().
     */
    public function getDeliveryProfileId(): string { return $this->get('delivery_profile_id'); }
    public function hasDeliveryProfileId(): bool { return $this->has('delivery_profile_id'); }
    /** Caller-owned identifier for this resource in an external system. minLength: 1. maxLength: 255.
     * @return string
     * @throws SdkError When external_reference_id is omitted; use hasExternalReferenceId() or valueOrDefault().
     */
    public function getExternalReferenceId(): string { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** Only valid for product_type gift_card. Omission creates a fixed denomination at unit_price_money. Discounted pricing requires an explicit face_value_money and price_mode discounted. Gift card settings on a product variant: its `face_value_money`, price mode (face value or discounted), and bounds for custom amounts.
     * @return GiftCardProductConfigurationRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When gift_card_configuration is omitted; use hasGiftCardConfiguration() or valueOrDefault().
     */
    public function getGiftCardConfiguration(): mixed { return $this->get('gift_card_configuration'); }
    public function hasGiftCardConfiguration(): bool { return $this->has('gift_card_configuration'); }
    /** The complete desired gallery in display order. The first image is primary. Send [] to clear the gallery. minItems: 0. maxItems: 8. [] (Value): {@see ImageRequestInput}. An image you supply by `source_url`, with optional `alt` text and external reference.
     * @return list<ImageRequestInput|array<array-key, mixed>|\stdClass>
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
    /** Identifier of an existing inventory item to track for this variant. Send either inventory_item_id or inventory_item. minLength: 1.
     * @return string
     * @throws SdkError When inventory_item_id is omitted; use hasInventoryItemId() or valueOrDefault().
     */
    public function getInventoryItemId(): string { return $this->get('inventory_item_id'); }
    public function hasInventoryItemId(): bool { return $this->has('inventory_item_id'); }
    /** Flint line-item tax category to store. Omit for a digital product to store digital_goods; explicit categories are preserved. For other product types, omission uses the merchant default. Value enum: "general", "physical_goods", "digital_goods", "software", "saas", "services", "professional_services", "food", "prepared_food", "clothing", "medical_goods", "admission".
     * @return string
     * @throws SdkError When line_item_tax_category is omitted; use hasLineItemTaxCategory() or valueOrDefault().
     */
    public function getLineItemTaxCategory(): string { return $this->get('line_item_tax_category'); }
    public function hasLineItemTaxCategory(): bool { return $this->has('line_item_tax_category'); }
    /** Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: 50.
     * @return MetadataRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When metadata is omitted; use hasMetadata() or valueOrDefault().
     */
    public function getMetadata(): mixed { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** Attached modifier set. Send null on update to remove it. minLength: 1.
     * @return string|null
     * @throws SdkError When modifier_set_id is omitted; use hasModifierSetId() or valueOrDefault().
     */
    public function getModifierSetId(): string|null { return $this->get('modifier_set_id'); }
    public function hasModifierSetId(): bool { return $this->has('modifier_set_id'); }
    /** Variant name that distinguishes it from the product's other variants. minLength: 1. maxLength: 255.
     * @return string
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Display order among the product's variants, starting at zero. When omitted in the variants array on product create, defaults to the variant's array index. For default_variant, defaults to zero. When creating a variant separately, defaults to the highest position among the product's variants plus one, or zero for the first variant. Format: int32.
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
    /** Stock keeping unit assigned to this sellable item. minLength: 1. maxLength: 100.
     * @return string
     * @throws SdkError When sku is omitted; use hasSku() or valueOrDefault().
     */
    public function getSku(): string { return $this->get('sku'); }
    public function hasSku(): bool { return $this->has('sku'); }
    /** Whether the variant is active or inactive. An inactive variant cannot be sold. Default: "active". Value enum: "active", "inactive".
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
    /** Per-unit measurement. Omitted when unknown. Package or item dimensions as `length`, `width`, and `height` in the given `unit`.
     * @return DimensionsInput|array<array-key, mixed>|\stdClass
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
    /** Per-unit measurement. Omitted when unknown. A weight value in grams, kilograms, ounces, or pounds, used in delivery profile configuration.
     * @return WeightInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When unit_weight is omitted; use hasUnitWeight() or valueOrDefault().
     */
    public function getUnitWeight(): mixed { return $this->get('unit_weight'); }
    public function hasUnitWeight(): bool { return $this->has('unit_weight'); }
}
