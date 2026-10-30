<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read bool $available_for_sale
 * @property-read string $barcode
 * @property-read string|\DateTimeInterface $created_at
 * @property-read string $delivery_configuration_reason
 * @property-read string $delivery_configuration_status
 * @property-read string $delivery_profile_id
 * @property-read list<ImageAttachmentInput|array<array-key, mixed>|\stdClass> $effective_images
 * @property-read string $external_reference_id
 * @property-read GiftCardProductConfigurationInput|array<array-key, mixed>|\stdClass $gift_card_configuration
 * @property-read list<ImageAttachmentInput|array<array-key, mixed>|\stdClass> $images
 * @property-read bool $images_inherited
 * @property-read string $inventory_item_id
 * @property-read string $inventory_tracking
 * @property-read string $line_item_tax_category
 * @property-read string $merchant_id
 * @property-read MetadataMapInput|array<array-key, mixed>|\stdClass $metadata
 * @property-read array{'created_at'?: string|\DateTimeInterface, 'external_reference_id'?: string, 'merchant_id'?: string, 'metadata'?: MetadataMapInput|array<array-key, mixed>|\stdClass, 'modifier_groups': list<ModifierSetGroupInput|array<array-key, mixed>|\stdClass>, 'modifier_set_id': string, 'name': string, 'status': string, 'updated_at'?: string|\DateTimeInterface, 'version': int, ...}|object|null $modifier_set
 * @property-read string|null $modifier_set_id
 * @property-read string $name
 * @property-read int $position
 * @property-read string $product_id
 * @property-read list<SelectedProductOptionInput|array<array-key, mixed>|\stdClass> $selected_options
 * @property-read string $sku
 * @property-read string $status
 * @property-read bool $taxable
 * @property-read DimensionsInput|array<array-key, mixed>|\stdClass $unit_dimensions
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $unit_price_money
 * @property-read WeightInput|array<array-key, mixed>|\stdClass $unit_weight
 * @property-read string|\DateTimeInterface $updated_at
 * @property-read string $variant_id
 * @property-read int $version
 * Presence-aware input; omitted fields throw when accessed. */
final class ProductVariantInput extends Model {
    /** @param array{'available_for_sale': bool, 'barcode'?: string, 'created_at'?: string|\DateTimeInterface, 'delivery_configuration_reason'?: string, 'delivery_configuration_status': string, 'delivery_profile_id'?: string, 'effective_images': list<ImageAttachmentInput|array<array-key, mixed>|\stdClass>, 'external_reference_id'?: string, 'gift_card_configuration'?: GiftCardProductConfigurationInput|array<array-key, mixed>|\stdClass, 'images': list<ImageAttachmentInput|array<array-key, mixed>|\stdClass>, 'images_inherited': bool, 'inventory_item_id'?: string, 'inventory_tracking': string, 'line_item_tax_category'?: string, 'merchant_id'?: string, 'metadata'?: MetadataMapInput|array<array-key, mixed>|\stdClass, 'modifier_set'?: array{'created_at'?: string|\DateTimeInterface, 'external_reference_id'?: string, 'merchant_id'?: string, 'metadata'?: MetadataMapInput|array<array-key, mixed>|\stdClass, 'modifier_groups': list<ModifierSetGroupInput|array<array-key, mixed>|\stdClass>, 'modifier_set_id': string, 'name': string, 'status': string, 'updated_at'?: string|\DateTimeInterface, 'version': int, ...}|object|null, 'modifier_set_id': string|null, 'name'?: string, 'position': int, 'product_id': string, 'selected_options': list<SelectedProductOptionInput|array<array-key, mixed>|\stdClass>, 'sku'?: string, 'status': string, 'taxable'?: bool, 'unit_dimensions'?: DimensionsInput|array<array-key, mixed>|\stdClass, 'unit_price_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'unit_weight'?: WeightInput|array<array-key, mixed>|\stdClass, 'updated_at'?: string|\DateTimeInterface, 'variant_id': string, 'version': int, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ProductVariantInput')); }
    /** Whether the variant and its product are both active.
     * @return bool
     * @throws SdkError When available_for_sale is omitted; use hasAvailableForSale() or valueOrDefault().
     */
    public function getAvailableForSale(): bool { return $this->get('available_for_sale'); }
    public function hasAvailableForSale(): bool { return $this->has('available_for_sale'); }
    /** Barcode assigned to this sellable item.
     * @return string
     * @throws SdkError When barcode is omitted; use hasBarcode() or valueOrDefault().
     */
    public function getBarcode(): string { return $this->get('barcode'); }
    public function hasBarcode(): bool { return $this->has('barcode'); }
    /** When this resource was created, as an RFC3339 timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string|\DateTimeInterface { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Reason the variant's delivery configuration needs attention. Value enum: "delivery_profile_missing", "delivery_profile_inactive".
     * @return string
     * @throws SdkError When delivery_configuration_reason is omitted; use hasDeliveryConfigurationReason() or valueOrDefault().
     */
    public function getDeliveryConfigurationReason(): string { return $this->get('delivery_configuration_reason'); }
    public function hasDeliveryConfigurationReason(): bool { return $this->has('delivery_configuration_reason'); }
    /** Whether the variant's delivery configuration is ready, needs attention, or does not apply. Value enum: "configured", "action_required", "not_applicable".
     * @return string
     * @throws SdkError When delivery_configuration_status is omitted; use hasDeliveryConfigurationStatus() or valueOrDefault().
     */
    public function getDeliveryConfigurationStatus(): string { return $this->get('delivery_configuration_status'); }
    public function hasDeliveryConfigurationStatus(): bool { return $this->has('delivery_configuration_status'); }
    /** Identifier of the delivery profile assigned to this variant.
     * @return string
     * @throws SdkError When delivery_profile_id is omitted; use hasDeliveryProfileId() or valueOrDefault().
     */
    public function getDeliveryProfileId(): string { return $this->get('delivery_profile_id'); }
    public function hasDeliveryProfileId(): bool { return $this->has('delivery_profile_id'); }
    /** Images shown for the variant: its own gallery when nonempty, otherwise the product's gallery. [] (Value): {@see ImageAttachmentInput}. An image attached to a resource, with its display properties and attachment metadata.
     * @return list<ImageAttachmentInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When effective_images is omitted; use hasEffectiveImages() or valueOrDefault().
     */
    public function getEffectiveImages(): array { return $this->get('effective_images'); }
    public function hasEffectiveImages(): bool { return $this->has('effective_images'); }
    /** Caller-owned identifier for this resource in an external system. maxLength: 255.
     * @return string
     * @throws SdkError When external_reference_id is omitted; use hasExternalReferenceId() or valueOrDefault().
     */
    public function getExternalReferenceId(): string { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** Gift card issuance terms. face_value_money is the reference denomination; unit_price_money is its price. Custom amounts use that price-to-value ratio, rounded to the nearest cent with ties up. Gift card settings on a product variant: its `face_value_money`, price mode (face value or discounted), and bounds for custom amounts.
     * @return GiftCardProductConfigurationInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When gift_card_configuration is omitted; use hasGiftCardConfiguration() or valueOrDefault().
     */
    public function getGiftCardConfiguration(): mixed { return $this->get('gift_card_configuration'); }
    public function hasGiftCardConfiguration(): bool { return $this->has('gift_card_configuration'); }
    /** The variant's own images in display order. An empty gallery inherits the product's images. [] (Value): {@see ImageAttachmentInput}. An image attached to a resource, with its display properties and attachment metadata.
     * @return list<ImageAttachmentInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When images is omitted; use hasImages() or valueOrDefault().
     */
    public function getImages(): array { return $this->get('images'); }
    public function hasImages(): bool { return $this->has('images'); }
    /** Whether effective_images comes from the product's gallery because this variant's gallery is empty.
     * @return bool
     * @throws SdkError When images_inherited is omitted; use hasImagesInherited() or valueOrDefault().
     */
    public function getImagesInherited(): bool { return $this->get('images_inherited'); }
    public function hasImagesInherited(): bool { return $this->has('images_inherited'); }
    /** The inventory item this variant consumes. Present exactly when inventory_tracking is tracked. Several variants may share one inventory item.
     * @return string
     * @throws SdkError When inventory_item_id is omitted; use hasInventoryItemId() or valueOrDefault().
     */
    public function getInventoryItemId(): string { return $this->get('inventory_item_id'); }
    public function hasInventoryItemId(): bool { return $this->has('inventory_item_id'); }
    /** Whether sales of this variant consume an inventory item. Value enum: "not_tracked", "tracked".
     * @return string
     * @throws SdkError When inventory_tracking is omitted; use hasInventoryTracking() or valueOrDefault().
     */
    public function getInventoryTracking(): string { return $this->get('inventory_tracking'); }
    public function hasInventoryTracking(): bool { return $this->has('inventory_tracking'); }
    /** Stored Flint line-item tax category. New digital-product variants default to digital_goods when omitted. The stored value remains editable. Unset uses the merchant default. Value enum: "general", "physical_goods", "digital_goods", "software", "saas", "services", "professional_services", "food", "prepared_food", "clothing", "medical_goods", "admission".
     * @return string
     * @throws SdkError When line_item_tax_category is omitted; use hasLineItemTaxCategory() or valueOrDefault().
     */
    public function getLineItemTaxCategory(): string { return $this->get('line_item_tax_category'); }
    public function hasLineItemTaxCategory(): bool { return $this->has('line_item_tax_category'); }
    /** Identifier of the merchant that owns this resource.
     * @return string
     * @throws SdkError When merchant_id is omitted; use hasMerchantId() or valueOrDefault().
     */
    public function getMerchantId(): string { return $this->get('merchant_id'); }
    public function hasMerchantId(): bool { return $this->has('merchant_id'); }
    /** Caller-owned metadata stored on this resource. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them.
     * @return MetadataMapInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When metadata is omitted; use hasMetadata() or valueOrDefault().
     */
    public function getMetadata(): mixed { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** Attached modifier set, included when expand=modifier_set is requested. Requires commerce.catalog.read in addition to the resource's read scope. Present only when `expand` includes `modifier_set`; `null` when expanded and there is no related modifier set. anyOf[1] (Value): {@see ModifierSetInput}. A reusable collection of customization groups. anyOf[2] (Value): null.
     * @return array{'created_at'?: string|\DateTimeInterface, 'external_reference_id'?: string, 'merchant_id'?: string, 'metadata'?: MetadataMapInput|array<array-key, mixed>|\stdClass, 'modifier_groups': list<ModifierSetGroupInput|array<array-key, mixed>|\stdClass>, 'modifier_set_id': string, 'name': string, 'status': string, 'updated_at'?: string|\DateTimeInterface, 'version': int, ...}|object|null
     * @throws SdkError When modifier_set is omitted; use hasModifierSet() or valueOrDefault().
     */
    public function getModifierSet(): mixed { return $this->get('modifier_set'); }
    public function hasModifierSet(): bool { return $this->has('modifier_set'); }
    /** Attached modifier set. Send null on update to remove it.
     * @return string|null
     * @throws SdkError When modifier_set_id is omitted; use hasModifierSetId() or valueOrDefault().
     */
    public function getModifierSetId(): string|null { return $this->get('modifier_set_id'); }
    public function hasModifierSetId(): bool { return $this->has('modifier_set_id'); }
    /** Variant name that distinguishes it from the product's other variants.
     * @return string
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Display order among the product's variants, starting at zero. Format: int32.
     * @return int
     * @throws SdkError When position is omitted; use hasPosition() or valueOrDefault().
     */
    public function getPosition(): int { return $this->get('position'); }
    public function hasPosition(): bool { return $this->has('position'); }
    /** Identifier of the product this variant belongs to.
     * @return string
     * @throws SdkError When product_id is omitted; use hasProductId() or valueOrDefault().
     */
    public function getProductId(): string { return $this->get('product_id'); }
    public function hasProductId(): bool { return $this->has('product_id'); }
    /** Always present. Empty collections are returned as []. [] (Value): {@see SelectedProductOptionInput}. An option and value chosen for a product variant, such as size Large.
     * @return list<SelectedProductOptionInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When selected_options is omitted; use hasSelectedOptions() or valueOrDefault().
     */
    public function getSelectedOptions(): array { return $this->get('selected_options'); }
    public function hasSelectedOptions(): bool { return $this->has('selected_options'); }
    /** Stock keeping unit assigned to this sellable item.
     * @return string
     * @throws SdkError When sku is omitted; use hasSku() or valueOrDefault().
     */
    public function getSku(): string { return $this->get('sku'); }
    public function hasSku(): bool { return $this->has('sku'); }
    /** Variant lifecycle status. Archived variants remain readable and cannot be edited. Value enum: "active", "inactive", "archived".
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
    /** When this resource last changed, as an RFC3339 timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When updated_at is omitted; use hasUpdatedAt() or valueOrDefault().
     */
    public function getUpdatedAt(): string|\DateTimeInterface { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Stable identifier of the product variant.
     * @return string
     * @throws SdkError When variant_id is omitted; use hasVariantId() or valueOrDefault().
     */
    public function getVariantId(): string { return $this->get('variant_id'); }
    public function hasVariantId(): bool { return $this->has('variant_id'); }
    /** Current resource version. Send it as expected_version to reject a write if the resource has changed. Format: uint64. minimum: 0.
     * @return int
     * @throws SdkError When version is omitted; use hasVersion() or valueOrDefault().
     */
    public function getVersion(): int { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
