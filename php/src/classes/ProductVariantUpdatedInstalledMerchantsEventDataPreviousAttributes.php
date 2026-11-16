<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $barcode
 * @property-read string|null $created_at
 * @property-read string|null $delivery_configuration_reason
 * @property-read string|null $delivery_configuration_status
 * @property-read string|null $delivery_profile_id
 * @property-read list<ImageAttachment>|null $effective_images
 * @property-read string|null $external_reference_id
 * @property-read GiftCardProductConfiguration|null $gift_card_configuration
 * @property-read list<ImageAttachment>|null $images
 * @property-read string|null $inventory_item_id
 * @property-read string|null $inventory_tracking
 * @property-read bool|null $is_available_for_sale
 * @property-read bool|null $is_inheriting_product_images
 * @property-read string|null $line_item_tax_category
 * @property-read string|null $merchant_id
 * @property-read array<array-key, string>|null $metadata
 * @property-read mixed $modifier_set_id
 * @property-read string|null $name
 * @property-read int|null $position
 * @property-read string|null $product_id
 * @property-read list<QuantityPriceBreak>|null $quantity_price_breaks
 * @property-read mixed $release_date
 * @property-read list<SelectedProductOption>|null $selected_options
 * @property-read string|null $sku
 * @property-read string|null $status
 * @property-read bool|null $taxable
 * @property-read Dimensions|null $unit_dimensions
 * @property-read MoneyValue|null $unit_price_money
 * @property-read Weight|null $unit_weight
 * @property-read string|null $updated_at
 * @property-read string|null $variant_id
 * @property-read int|null $version
 * Presence-aware response; omitted optional fields return null. */
final class ProductVariantUpdatedInstalledMerchantsEventDataPreviousAttributes extends Model {
    /** @param array{'barcode'?: mixed, 'created_at'?: mixed, 'delivery_configuration_reason'?: mixed, 'delivery_configuration_status'?: mixed, 'delivery_profile_id'?: mixed, 'effective_images'?: mixed, 'external_reference_id'?: mixed, 'gift_card_configuration'?: mixed, 'images'?: mixed, 'inventory_item_id'?: mixed, 'inventory_tracking'?: mixed, 'is_available_for_sale'?: mixed, 'is_inheriting_product_images'?: mixed, 'line_item_tax_category'?: mixed, 'merchant_id'?: mixed, 'metadata'?: mixed, 'modifier_set_id'?: mixed, 'name'?: mixed, 'position'?: mixed, 'product_id'?: mixed, 'quantity_price_breaks'?: mixed, 'release_date'?: mixed, 'selected_options'?: mixed, 'sku'?: mixed, 'status'?: mixed, 'taxable'?: mixed, 'unit_dimensions'?: mixed, 'unit_price_money'?: mixed, 'unit_weight'?: mixed, 'updated_at'?: mixed, 'variant_id'?: mixed, 'version'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ProductVariantUpdatedInstalledMerchantsEventDataPreviousAttributes')); }
    /** Barcode assigned to this sellable item. anyOf[1] (Value): string. Barcode assigned to this sellable item. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getBarcode(): string|null { return $this->get('barcode'); }
    public function hasBarcode(): bool { return $this->has('barcode'); }
    /** When this resource was created, as an RFC3339 timestamp. anyOf[1] (Value): string. When this resource was created, as an RFC3339 timestamp. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCreatedAt(): string|null { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Reason the variant's delivery configuration needs attention. Value enum: "delivery_profile_missing", "delivery_profile_inactive". anyOf[1] (Value): string. Reason the variant's delivery configuration needs attention. Value enum: "delivery_profile_missing", "delivery_profile_inactive". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getDeliveryConfigurationReason(): string|null { return $this->get('delivery_configuration_reason'); }
    public function hasDeliveryConfigurationReason(): bool { return $this->has('delivery_configuration_reason'); }
    /** Whether the variant's delivery configuration is ready, needs attention, or does not apply. Value enum: "configured", "action_required", "not_applicable". anyOf[1] (Value): string. Whether the variant's delivery configuration is ready, needs attention, or does not apply. Value enum: "configured", "action_required", "not_applicable". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getDeliveryConfigurationStatus(): string|null { return $this->get('delivery_configuration_status'); }
    public function hasDeliveryConfigurationStatus(): bool { return $this->has('delivery_configuration_status'); }
    /** Identifier of the assigned delivery profile. Digital and service variants opt in to manual delivery with a required manual profile whose allowed_types is exactly [digital] or [service], matching the product type. Without a profile, delivery does not apply. anyOf[1] (Value): string. Identifier of the assigned delivery profile. Digital and service variants opt in to manual delivery with a required manual profile whose allowed_types is exactly [digital] or [service], matching the product type. Without a profile, delivery does not apply. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getDeliveryProfileId(): string|null { return $this->get('delivery_profile_id'); }
    public function hasDeliveryProfileId(): bool { return $this->has('delivery_profile_id'); }
    /** Images shown for the variant: its own gallery when nonempty, otherwise the product's gallery. anyOf[1] (Value): Array of {@see ImageAttachment}. Images shown for the variant: its own gallery when nonempty, otherwise the product's gallery. anyOf[1][] (Value): {@see ImageAttachment}. An image attached to a resource, with its display properties and attachment metadata. anyOf[2] (Value): null.
     * @return list<ImageAttachment>|null
     */
    public function getEffectiveImages(): array|null { return $this->get('effective_images'); }
    public function hasEffectiveImages(): bool { return $this->has('effective_images'); }
    /** Caller-owned identifier for this resource in an external system. anyOf[1] (Value): string. Caller-owned identifier for this resource in an external system. maxLength: 255. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getExternalReferenceId(): string|null { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** Gift card issuance terms. face_value_money is the reference denomination; unit_price_money is its price. Custom amounts use that price-to-value ratio, rounded to the nearest cent with ties up. anyOf[1] (Value): {@see GiftCardProductConfiguration}. Gift card issuance terms. face_value_money is the reference denomination; unit_price_money is its price. Custom amounts use that price-to-value ratio, rounded to the nearest cent with ties up. anyOf[2] (Value): null.
     * @return GiftCardProductConfiguration|null
     */
    public function getGiftCardConfiguration(): GiftCardProductConfiguration|null { return $this->get('gift_card_configuration'); }
    public function hasGiftCardConfiguration(): bool { return $this->has('gift_card_configuration'); }
    /** The variant's own images in display order. An empty gallery inherits the product's images. anyOf[1] (Value): Array of {@see ImageAttachment}. The variant's own images in display order. An empty gallery inherits the product's images. anyOf[1][] (Value): {@see ImageAttachment}. An image attached to a resource, with its display properties and attachment metadata. anyOf[2] (Value): null.
     * @return list<ImageAttachment>|null
     */
    public function getImages(): array|null { return $this->get('images'); }
    public function hasImages(): bool { return $this->has('images'); }
    /** The inventory item this variant consumes. Present exactly when inventory_tracking is tracked. Several variants may share one inventory item. anyOf[1] (Value): string. The inventory item this variant consumes. Present exactly when inventory_tracking is tracked. Several variants may share one inventory item. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getInventoryItemId(): string|null { return $this->get('inventory_item_id'); }
    public function hasInventoryItemId(): bool { return $this->has('inventory_item_id'); }
    /** Whether sales of this variant consume an inventory item. Value enum: "not_tracked", "tracked". anyOf[1] (Value): string. Whether sales of this variant consume an inventory item. Value enum: "not_tracked", "tracked". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getInventoryTracking(): string|null { return $this->get('inventory_tracking'); }
    public function hasInventoryTracking(): bool { return $this->has('inventory_tracking'); }
    /** Whether the variant and its product are both active. Stock isn't considered; `inventory_availability` reports it on reads. anyOf[1] (Value): boolean. Whether the variant and its product are both active. Stock isn't considered; `inventory_availability` reports it on reads. anyOf[2] (Value): null.
     * @return bool|null
     */
    public function getIsAvailableForSale(): bool|null { return $this->get('is_available_for_sale'); }
    public function hasIsAvailableForSale(): bool { return $this->has('is_available_for_sale'); }
    /** Whether effective_images comes from the product's gallery because this variant's gallery is empty. anyOf[1] (Value): boolean. Whether effective_images comes from the product's gallery because this variant's gallery is empty. anyOf[2] (Value): null.
     * @return bool|null
     */
    public function getIsInheritingProductImages(): bool|null { return $this->get('is_inheriting_product_images'); }
    public function hasIsInheritingProductImages(): bool { return $this->has('is_inheriting_product_images'); }
    /** Stored Flint line-item tax category. New digital-product variants default to digital_goods when omitted. The stored value remains editable. Unset uses the merchant default. Value enum: "general", "physical_goods", "digital_goods", "software", "saas", "services", "professional_services", "food", "prepared_food", "clothing", "medical_goods", "admission". anyOf[1] (Value): string. Stored Flint line-item tax category. New digital-product variants default to digital_goods when omitted. The stored value remains editable. Unset uses the merchant default. Value enum: "general", "physical_goods", "digital_goods", "software", "saas", "services", "professional_services", "food", "prepared_food", "clothing", "medical_goods", "admission". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getLineItemTaxCategory(): string|null { return $this->get('line_item_tax_category'); }
    public function hasLineItemTaxCategory(): bool { return $this->has('line_item_tax_category'); }
    /** Identifier of the merchant that owns this resource. anyOf[1] (Value): string. Identifier of the merchant that owns this resource. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getMerchantId(): string|null { return $this->get('merchant_id'); }
    public function hasMerchantId(): bool { return $this->has('merchant_id'); }
    /** Caller-owned metadata stored on this resource. anyOf[1] (Value): {@see MetadataMap}. Caller-owned metadata stored on this resource. anyOf[2] (Value): null.
     * @return array<array-key, string>|null
     */
    public function getMetadata(): array|null { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** ID of the modifier set attached to the variant. `null` when no modifier set is attached. anyOf[1] (Value): string or null. ID of the modifier set attached to the variant. `null` when no modifier set is attached. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getModifierSetId(): mixed { return $this->get('modifier_set_id'); }
    public function hasModifierSetId(): bool { return $this->has('modifier_set_id'); }
    /** Variant name that distinguishes it from the product's other variants. anyOf[1] (Value): string. Variant name that distinguishes it from the product's other variants. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getName(): string|null { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Display order among the product's variants, starting at zero. anyOf[1] (Value): integer. Display order among the product's variants, starting at zero. Format: int32. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getPosition(): int|null { return $this->get('position'); }
    public function hasPosition(): bool { return $this->has('position'); }
    /** Identifier of the product this variant belongs to. anyOf[1] (Value): string. Identifier of the product this variant belongs to. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getProductId(): string|null { return $this->get('product_id'); }
    public function hasProductId(): bool { return $this->has('product_id'); }
    /** Net unit prices in ascending minimum_quantity order. The largest minimum not above the line quantity applies; otherwise the base unit price applies. Empty when no breaks are configured. Gift card variants have no breaks. anyOf[1] (Value): Array of {@see QuantityPriceBreak}. Net unit prices in ascending minimum_quantity order. The largest minimum not above the line quantity applies; otherwise the base unit price applies. Empty when no breaks are configured. Gift card variants have no breaks. maxItems: 10. anyOf[1][] (Value): {@see QuantityPriceBreak}. A net unit price that applies when one catalog line reaches minimum_quantity. anyOf[2] (Value): null.
     * @return list<QuantityPriceBreak>|null
     */
    public function getQuantityPriceBreaks(): array|null { return $this->get('quantity_price_breaks'); }
    public function hasQuantityPriceBreaks(): bool { return $this->has('quantity_price_breaks'); }
    /** Calendar release date in YYYY-MM-DD format. Null when no release date is set. Lines created while this date is after today in the merchant timezone are pre-orders. Existing order lines keep their release date. anyOf[1] (Value): string or null. Calendar release date in YYYY-MM-DD format. Null when no release date is set. Lines created while this date is after today in the merchant timezone are pre-orders. Existing order lines keep their release date. Format: date. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getReleaseDate(): mixed { return $this->get('release_date'); }
    public function hasReleaseDate(): bool { return $this->has('release_date'); }
    /** Always present. Empty collections are returned as []. anyOf[1] (Value): Array of {@see SelectedProductOption}. Always present. Empty collections are returned as []. anyOf[1][] (Value): {@see SelectedProductOption}. An option and value chosen for a product variant, such as size Large. anyOf[2] (Value): null.
     * @return list<SelectedProductOption>|null
     */
    public function getSelectedOptions(): array|null { return $this->get('selected_options'); }
    public function hasSelectedOptions(): bool { return $this->has('selected_options'); }
    /** Stock keeping unit assigned to this sellable item. anyOf[1] (Value): string. Stock keeping unit assigned to this sellable item. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getSku(): string|null { return $this->get('sku'); }
    public function hasSku(): bool { return $this->has('sku'); }
    /** Variant lifecycle status. Archived variants remain readable and cannot be edited. Value enum: "active", "inactive", "archived". anyOf[1] (Value): string. Variant lifecycle status. Archived variants remain readable and cannot be edited. Value enum: "active", "inactive", "archived". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getStatus(): string|null { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Whether this item is subject to tax. anyOf[1] (Value): boolean. Whether this item is subject to tax. anyOf[2] (Value): null.
     * @return bool|null
     */
    public function getTaxable(): bool|null { return $this->get('taxable'); }
    public function hasTaxable(): bool { return $this->has('taxable'); }
    /** Per-unit measurement. Omitted when unknown. anyOf[1] (Value): {@see Dimensions}. Per-unit measurement. Omitted when unknown. anyOf[2] (Value): null.
     * @return Dimensions|null
     */
    public function getUnitDimensions(): Dimensions|null { return $this->get('unit_dimensions'); }
    public function hasUnitDimensions(): bool { return $this->has('unit_dimensions'); }
    /** Base unit price before quantity price breaks, in the currency's smallest unit. anyOf[1] (Value): {@see MoneyValue}. Base unit price before quantity price breaks, in the currency's smallest unit. anyOf[2] (Value): null.
     * @return MoneyValue|null
     */
    public function getUnitPriceMoney(): MoneyValue|null { return $this->get('unit_price_money'); }
    public function hasUnitPriceMoney(): bool { return $this->has('unit_price_money'); }
    /** Per-unit measurement. Omitted when unknown. anyOf[1] (Value): {@see Weight}. Per-unit measurement. Omitted when unknown. anyOf[2] (Value): null.
     * @return Weight|null
     */
    public function getUnitWeight(): Weight|null { return $this->get('unit_weight'); }
    public function hasUnitWeight(): bool { return $this->has('unit_weight'); }
    /** When this resource last changed, as an RFC3339 timestamp. anyOf[1] (Value): string. When this resource last changed, as an RFC3339 timestamp. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getUpdatedAt(): string|null { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Stable identifier of the product variant. anyOf[1] (Value): string. Stable identifier of the product variant. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getVariantId(): string|null { return $this->get('variant_id'); }
    public function hasVariantId(): bool { return $this->has('variant_id'); }
    /** Current resource version. Send it as expected_version to reject a write if the resource has changed. anyOf[1] (Value): integer. Current resource version. Send it as expected_version to reject a write if the resource has changed. Format: uint64. minimum: 0. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getVersion(): int|null { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
