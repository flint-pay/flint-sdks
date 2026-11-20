<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $barcode
 * @property-read MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $compare_at_price_money
 * @property-read string|\DateTimeInterface|null $created_at
 * @property-read string|null $delivery_configuration_reason
 * @property-read string|null $delivery_configuration_status
 * @property-read string|null $delivery_profile_id
 * @property-read list<ImageAttachmentPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null $effective_images
 * @property-read string|null $external_reference_id
 * @property-read GiftCardProductConfigurationPreviousAttributesInput|array<array-key, mixed>|\stdClass|null $gift_card_configuration
 * @property-read list<ImageAttachmentPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null $images
 * @property-read ProductVariantInventoryAvailabilityPreviousAttributesInput|array<array-key, mixed>|\stdClass|null $inventory_availability
 * @property-read string|null $inventory_item_id
 * @property-read string|null $inventory_tracking
 * @property-read bool|null $is_available_for_sale
 * @property-read bool|null $is_inheriting_product_images
 * @property-read LicenseKeyConfigurationPreviousAttributesInput|array<array-key, mixed>|\stdClass|null|null $license_key_configuration
 * @property-read string|null $line_item_tax_category
 * @property-read string|null $merchant_id
 * @property-read MetadataMapPreviousAttributesInput|array<array-key, mixed>|\stdClass|null $metadata
 * @property-read ModifierSetPreviousAttributesInput|array<array-key, mixed>|\stdClass|null $modifier_set
 * @property-read string|null $modifier_set_id
 * @property-read string|null $name
 * @property-read int|null $position
 * @property-read string|null $product_id
 * @property-read list<QuantityPriceBreakPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null $quantity_price_breaks
 * @property-read string|null $release_date
 * @property-read list<SelectedProductOptionPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null $selected_options
 * @property-read string|null $sku
 * @property-read string|null $status
 * @property-read bool|null $taxable
 * @property-read DimensionsPreviousAttributesInput|array<array-key, mixed>|\stdClass|null $unit_dimensions
 * @property-read MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $unit_price_money
 * @property-read WeightPreviousAttributesInput|array<array-key, mixed>|\stdClass|null $unit_weight
 * @property-read string|\DateTimeInterface|null $updated_at
 * @property-read string|null $variant_id
 * @property-read int|null $version
 * Presence-aware input; omitted fields throw when accessed. */
final class ProductVariantPreviousAttributesInput extends Model {
    /** @param array{'barcode'?: string|null, 'compare_at_price_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'created_at'?: string|\DateTimeInterface|null, 'delivery_configuration_reason'?: string|null, 'delivery_configuration_status'?: string|null, 'delivery_profile_id'?: string|null, 'effective_images'?: list<ImageAttachmentPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null, 'external_reference_id'?: string|null, 'gift_card_configuration'?: GiftCardProductConfigurationPreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'images'?: list<ImageAttachmentPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null, 'inventory_availability'?: ProductVariantInventoryAvailabilityPreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'inventory_item_id'?: string|null, 'inventory_tracking'?: string|null, 'is_available_for_sale'?: bool|null, 'is_inheriting_product_images'?: bool|null, 'license_key_configuration'?: LicenseKeyConfigurationPreviousAttributesInput|array<array-key, mixed>|\stdClass|null|null, 'line_item_tax_category'?: string|null, 'merchant_id'?: string|null, 'metadata'?: MetadataMapPreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'modifier_set'?: ModifierSetPreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'modifier_set_id'?: string|null, 'name'?: string|null, 'position'?: int|null, 'product_id'?: string|null, 'quantity_price_breaks'?: list<QuantityPriceBreakPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null, 'release_date'?: string|null, 'selected_options'?: list<SelectedProductOptionPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null, 'sku'?: string|null, 'status'?: string|null, 'taxable'?: bool|null, 'unit_dimensions'?: DimensionsPreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'unit_price_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'unit_weight'?: WeightPreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'updated_at'?: string|\DateTimeInterface|null, 'variant_id'?: string|null, 'version'?: int|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ProductVariantPreviousAttributesInput')); }
    /** Barcode assigned to this sellable item. anyOf[1] (Value): string. Barcode assigned to this sellable item. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When barcode is omitted; use hasBarcode() or valueOrDefault().
     */
    public function getBarcode(): mixed { return $this->get('barcode'); }
    public function hasBarcode(): bool { return $this->has('barcode'); }
    /** Reference unit price for sale display, in the same currency and strictly greater than unit_price_money. Null when no compare-at price is set. Does not affect charges or quantity price breaks. anyOf[1] (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When compare_at_price_money is omitted; use hasCompareAtPriceMoney() or valueOrDefault().
     */
    public function getCompareAtPriceMoney(): mixed { return $this->get('compare_at_price_money'); }
    public function hasCompareAtPriceMoney(): bool { return $this->has('compare_at_price_money'); }
    /** When this resource was created, as an RFC3339 timestamp. anyOf[1] (Value): string. When this resource was created, as an RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): mixed { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Reason the variant's delivery configuration needs attention. Value enum: "delivery_profile_missing", "delivery_profile_inactive". anyOf[1] (Value): string. Reason the variant's delivery configuration needs attention. Value enum: "delivery_profile_missing", "delivery_profile_inactive". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When delivery_configuration_reason is omitted; use hasDeliveryConfigurationReason() or valueOrDefault().
     */
    public function getDeliveryConfigurationReason(): mixed { return $this->get('delivery_configuration_reason'); }
    public function hasDeliveryConfigurationReason(): bool { return $this->has('delivery_configuration_reason'); }
    /** Whether the variant's delivery configuration is ready, needs attention, or does not apply. Value enum: "configured", "action_required", "not_applicable". anyOf[1] (Value): string. Whether the variant's delivery configuration is ready, needs attention, or does not apply. Value enum: "configured", "action_required", "not_applicable". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When delivery_configuration_status is omitted; use hasDeliveryConfigurationStatus() or valueOrDefault().
     */
    public function getDeliveryConfigurationStatus(): mixed { return $this->get('delivery_configuration_status'); }
    public function hasDeliveryConfigurationStatus(): bool { return $this->has('delivery_configuration_status'); }
    /** Identifier of the assigned delivery profile. Digital and service variants opt in to manual delivery with a required manual profile whose allowed_types is exactly [digital] or [service], matching the product type. Without a profile, delivery does not apply. anyOf[1] (Value): string. Identifier of the assigned delivery profile. Digital and service variants opt in to manual delivery with a required manual profile whose allowed_types is exactly [digital] or [service], matching the product type. Without a profile, delivery does not apply. Example: "dprof_01KEZF7C0020J13FQYNY9854R0". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When delivery_profile_id is omitted; use hasDeliveryProfileId() or valueOrDefault().
     */
    public function getDeliveryProfileId(): mixed { return $this->get('delivery_profile_id'); }
    public function hasDeliveryProfileId(): bool { return $this->has('delivery_profile_id'); }
    /** Images shown for the variant: its own gallery when nonempty, otherwise the product's gallery. anyOf[1] (Value): Array of {@see ImageAttachmentPreviousAttributesInput}. Images shown for the variant: its own gallery when nonempty, otherwise the product's gallery. anyOf[1][] (Value): {@see ImageAttachmentPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return list<ImageAttachmentPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null
     * @throws SdkError When effective_images is omitted; use hasEffectiveImages() or valueOrDefault().
     */
    public function getEffectiveImages(): mixed { return $this->get('effective_images'); }
    public function hasEffectiveImages(): bool { return $this->has('effective_images'); }
    /** Caller-owned identifier for this resource in an external system. anyOf[1] (Value): string. Caller-owned identifier for this resource in an external system. maxLength: 255. Example: "warehouse-1842". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When external_reference_id is omitted; use hasExternalReferenceId() or valueOrDefault().
     */
    public function getExternalReferenceId(): mixed { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** Gift card issuance terms. face_value_money is the reference denomination; unit_price_money is its price. Custom amounts use that price-to-value ratio, rounded to the nearest cent with ties up. anyOf[1] (Value): {@see GiftCardProductConfigurationPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return GiftCardProductConfigurationPreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When gift_card_configuration is omitted; use hasGiftCardConfiguration() or valueOrDefault().
     */
    public function getGiftCardConfiguration(): mixed { return $this->get('gift_card_configuration'); }
    public function hasGiftCardConfiguration(): bool { return $this->has('gift_card_configuration'); }
    /** The variant's own images in display order. An empty gallery inherits the product's images. anyOf[1] (Value): Array of {@see ImageAttachmentPreviousAttributesInput}. The variant's own images in display order. An empty gallery inherits the product's images. anyOf[1][] (Value): {@see ImageAttachmentPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return list<ImageAttachmentPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null
     * @throws SdkError When images is omitted; use hasImages() or valueOrDefault().
     */
    public function getImages(): mixed { return $this->get('images'); }
    public function hasImages(): bool { return $this->has('images'); }
    /** Whether one order line can buy this variant now. Flint uses `settings.inventory.default_routing_source` when it is set. With no default, Flint uses the only active Location with inventory allocation enabled if exactly one exists. Returned by `GET /v1/products/{product_id}/variants/{variant_id}`, `GET /v1/products/{product_id}/variants`, and variants included by `expand=variants` on product reads. Write responses and webhooks omit it. The check holds no stock, so pay can still find the stock gone. Variants that share an inventory item are each evaluated alone. Check `is_available_for_sale` for the variant's sale status. Availability has no effect on `version`. Read the variant again after `inventory_level.updated`. anyOf[1] (Value): {@see ProductVariantInventoryAvailabilityPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return ProductVariantInventoryAvailabilityPreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When inventory_availability is omitted; use hasInventoryAvailability() or valueOrDefault().
     */
    public function getInventoryAvailability(): mixed { return $this->get('inventory_availability'); }
    public function hasInventoryAvailability(): bool { return $this->has('inventory_availability'); }
    /** The inventory item this variant consumes. Present exactly when inventory_tracking is tracked. Several variants may share one inventory item. anyOf[1] (Value): string. The inventory item this variant consumes. Present exactly when inventory_tracking is tracked. Several variants may share one inventory item. Example: "invi_01KEZF7C00A6YEM25MTHW2MPZY". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When inventory_item_id is omitted; use hasInventoryItemId() or valueOrDefault().
     */
    public function getInventoryItemId(): mixed { return $this->get('inventory_item_id'); }
    public function hasInventoryItemId(): bool { return $this->has('inventory_item_id'); }
    /** Whether sales of this variant consume an inventory item. Value enum: "not_tracked", "tracked". anyOf[1] (Value): string. Whether sales of this variant consume an inventory item. Value enum: "not_tracked", "tracked". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When inventory_tracking is omitted; use hasInventoryTracking() or valueOrDefault().
     */
    public function getInventoryTracking(): mixed { return $this->get('inventory_tracking'); }
    public function hasInventoryTracking(): bool { return $this->has('inventory_tracking'); }
    /** Whether the variant and its product are both active. Stock isn't considered; `inventory_availability` reports it on reads. anyOf[1] (Value): boolean. Whether the variant and its product are both active. Stock isn't considered; `inventory_availability` reports it on reads. anyOf[2] (Value): null.
     * @return bool|null
     * @throws SdkError When is_available_for_sale is omitted; use hasIsAvailableForSale() or valueOrDefault().
     */
    public function getIsAvailableForSale(): mixed { return $this->get('is_available_for_sale'); }
    public function hasIsAvailableForSale(): bool { return $this->has('is_available_for_sale'); }
    /** Whether effective_images comes from the product's gallery because this variant's gallery is empty. anyOf[1] (Value): boolean. Whether effective_images comes from the product's gallery because this variant's gallery is empty. anyOf[2] (Value): null.
     * @return bool|null
     * @throws SdkError When is_inheriting_product_images is omitted; use hasIsInheritingProductImages() or valueOrDefault().
     */
    public function getIsInheritingProductImages(): mixed { return $this->get('is_inheriting_product_images'); }
    public function hasIsInheritingProductImages(): bool { return $this->has('is_inheriting_product_images'); }
    /** License key terms. Null when the variant has no license key setting. Replaced as a whole: send every field you want to keep. Only product_type digital supports this setting. It adds no delivery requirement and is independent of the delivery profile. Send null to remove every value you set in this section. Omission preserves it on update. anyOf[1] (Value): ({@see LicenseKeyConfigurationPreviousAttributesInput} or null). License key terms. Null when the variant has no license key setting. Replaced as a whole: send every field you want to keep. Only product_type digital supports this setting. It adds no delivery requirement and is independent of the delivery profile. Send null to remove every value you set in this section. Omission preserves it on update. anyOf[1].anyOf[1] (Value): {@see LicenseKeyConfigurationPreviousAttributesInput}. anyOf[1].anyOf[2] (Value): null. anyOf[2] (Value): null.
     * @return LicenseKeyConfigurationPreviousAttributesInput|array<array-key, mixed>|\stdClass|null|null
     * @throws SdkError When license_key_configuration is omitted; use hasLicenseKeyConfiguration() or valueOrDefault().
     */
    public function getLicenseKeyConfiguration(): mixed { return $this->get('license_key_configuration'); }
    public function hasLicenseKeyConfiguration(): bool { return $this->has('license_key_configuration'); }
    /** Stored Flint line-item tax category. New digital-product variants default to digital_goods when omitted. The stored value remains editable. Unset uses the merchant default. Value enum: "general", "physical_goods", "digital_goods", "software", "saas", "services", "professional_services", "food", "prepared_food", "clothing", "medical_goods", "admission". anyOf[1] (Value): string. Stored Flint line-item tax category. New digital-product variants default to digital_goods when omitted. The stored value remains editable. Unset uses the merchant default. Value enum: "general", "physical_goods", "digital_goods", "software", "saas", "services", "professional_services", "food", "prepared_food", "clothing", "medical_goods", "admission". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When line_item_tax_category is omitted; use hasLineItemTaxCategory() or valueOrDefault().
     */
    public function getLineItemTaxCategory(): mixed { return $this->get('line_item_tax_category'); }
    public function hasLineItemTaxCategory(): bool { return $this->has('line_item_tax_category'); }
    /** Identifier of the merchant that owns this resource. anyOf[1] (Value): string. Identifier of the merchant that owns this resource. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When merchant_id is omitted; use hasMerchantId() or valueOrDefault().
     */
    public function getMerchantId(): mixed { return $this->get('merchant_id'); }
    public function hasMerchantId(): bool { return $this->has('merchant_id'); }
    /** Caller-owned metadata stored on this resource. anyOf[1] (Value): {@see MetadataMapPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MetadataMapPreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When metadata is omitted; use hasMetadata() or valueOrDefault().
     */
    public function getMetadata(): mixed { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** Attached modifier set, included when expand=modifier_set is requested. Requires commerce.catalog.read in addition to the resource's read scope. Present only when `expand` includes `modifier_set`; `null` when expanded and there is no related modifier set. Also included when `expand` includes `variants.modifier_set`. anyOf[1] (Value): {@see ModifierSetPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return ModifierSetPreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When modifier_set is omitted; use hasModifierSet() or valueOrDefault().
     */
    public function getModifierSet(): mixed { return $this->get('modifier_set'); }
    public function hasModifierSet(): bool { return $this->has('modifier_set'); }
    /** ID of the modifier set attached to the variant. `null` when no modifier set is attached. anyOf[1] (Value): string. ID of the modifier set attached to the variant. `null` when no modifier set is attached. Example: "ms_01KEZF7C007EWZVVFAWVJJM8NR". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When modifier_set_id is omitted; use hasModifierSetId() or valueOrDefault().
     */
    public function getModifierSetId(): mixed { return $this->get('modifier_set_id'); }
    public function hasModifierSetId(): bool { return $this->has('modifier_set_id'); }
    /** Variant name that distinguishes it from the product's other variants. anyOf[1] (Value): string. Variant name that distinguishes it from the product's other variants. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): mixed { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Display order among the product's variants, starting at zero. anyOf[1] (Value): integer. Display order among the product's variants, starting at zero. Format: int32. anyOf[2] (Value): null.
     * @return int|null
     * @throws SdkError When position is omitted; use hasPosition() or valueOrDefault().
     */
    public function getPosition(): mixed { return $this->get('position'); }
    public function hasPosition(): bool { return $this->has('position'); }
    /** Identifier of the product this variant belongs to. anyOf[1] (Value): string. Identifier of the product this variant belongs to. Example: "prod_01KEZF7C00BVSHCNWVH528HB66". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When product_id is omitted; use hasProductId() or valueOrDefault().
     */
    public function getProductId(): mixed { return $this->get('product_id'); }
    public function hasProductId(): bool { return $this->has('product_id'); }
    /** Net unit prices in ascending minimum_quantity order. The largest minimum not above the line quantity applies; otherwise the base unit price applies. Empty when no breaks are configured. Gift card variants have no breaks. anyOf[1] (Value): Array of {@see QuantityPriceBreakPreviousAttributesInput}. Net unit prices in ascending minimum_quantity order. The largest minimum not above the line quantity applies; otherwise the base unit price applies. Empty when no breaks are configured. Gift card variants have no breaks. maxItems: 10. anyOf[1][] (Value): {@see QuantityPriceBreakPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return list<QuantityPriceBreakPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null
     * @throws SdkError When quantity_price_breaks is omitted; use hasQuantityPriceBreaks() or valueOrDefault().
     */
    public function getQuantityPriceBreaks(): mixed { return $this->get('quantity_price_breaks'); }
    public function hasQuantityPriceBreaks(): bool { return $this->has('quantity_price_breaks'); }
    /** Calendar release date in YYYY-MM-DD format. Null when no release date is set. Lines created while this date is after today in the merchant timezone are pre-orders. Existing order lines keep their release date. anyOf[1] (Value): string. Calendar release date in YYYY-MM-DD format. Null when no release date is set. Lines created while this date is after today in the merchant timezone are pre-orders. Existing order lines keep their release date. Format: date. Example: "2026-08-02". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When release_date is omitted; use hasReleaseDate() or valueOrDefault().
     */
    public function getReleaseDate(): mixed { return $this->get('release_date'); }
    public function hasReleaseDate(): bool { return $this->has('release_date'); }
    /** Always present. Empty collections are returned as []. anyOf[1] (Value): Array of {@see SelectedProductOptionPreviousAttributesInput}. Always present. Empty collections are returned as []. anyOf[1][] (Value): {@see SelectedProductOptionPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return list<SelectedProductOptionPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null
     * @throws SdkError When selected_options is omitted; use hasSelectedOptions() or valueOrDefault().
     */
    public function getSelectedOptions(): mixed { return $this->get('selected_options'); }
    public function hasSelectedOptions(): bool { return $this->has('selected_options'); }
    /** Stock keeping unit assigned to this sellable item. anyOf[1] (Value): string. Stock keeping unit assigned to this sellable item. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When sku is omitted; use hasSku() or valueOrDefault().
     */
    public function getSku(): mixed { return $this->get('sku'); }
    public function hasSku(): bool { return $this->has('sku'); }
    /** Variant lifecycle status. Archived variants remain readable and cannot be edited. Value enum: "active", "inactive", "archived". anyOf[1] (Value): string. Variant lifecycle status. Archived variants remain readable and cannot be edited. Value enum: "active", "inactive", "archived". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): mixed { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Whether this item is subject to tax. anyOf[1] (Value): boolean. Whether this item is subject to tax. anyOf[2] (Value): null.
     * @return bool|null
     * @throws SdkError When taxable is omitted; use hasTaxable() or valueOrDefault().
     */
    public function getTaxable(): mixed { return $this->get('taxable'); }
    public function hasTaxable(): bool { return $this->has('taxable'); }
    /** Per-unit measurement. Omitted when unknown. anyOf[1] (Value): {@see DimensionsPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return DimensionsPreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When unit_dimensions is omitted; use hasUnitDimensions() or valueOrDefault().
     */
    public function getUnitDimensions(): mixed { return $this->get('unit_dimensions'); }
    public function hasUnitDimensions(): bool { return $this->has('unit_dimensions'); }
    /** Base unit price before quantity price breaks, in the currency's smallest unit. anyOf[1] (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When unit_price_money is omitted; use hasUnitPriceMoney() or valueOrDefault().
     */
    public function getUnitPriceMoney(): mixed { return $this->get('unit_price_money'); }
    public function hasUnitPriceMoney(): bool { return $this->has('unit_price_money'); }
    /** Per-unit measurement. Omitted when unknown. anyOf[1] (Value): {@see WeightPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return WeightPreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When unit_weight is omitted; use hasUnitWeight() or valueOrDefault().
     */
    public function getUnitWeight(): mixed { return $this->get('unit_weight'); }
    public function hasUnitWeight(): bool { return $this->has('unit_weight'); }
    /** When this resource last changed, as an RFC3339 timestamp. anyOf[1] (Value): string. When this resource last changed, as an RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When updated_at is omitted; use hasUpdatedAt() or valueOrDefault().
     */
    public function getUpdatedAt(): mixed { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Stable identifier of the product variant. anyOf[1] (Value): string. Stable identifier of the product variant. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When variant_id is omitted; use hasVariantId() or valueOrDefault().
     */
    public function getVariantId(): mixed { return $this->get('variant_id'); }
    public function hasVariantId(): bool { return $this->has('variant_id'); }
    /** Current resource version. Send it as expected_version to reject a write if the resource has changed. anyOf[1] (Value): integer. Current resource version. Send it as expected_version to reject a write if the resource has changed. Format: uint64. minimum: 0. anyOf[2] (Value): null.
     * @return int|null
     * @throws SdkError When version is omitted; use hasVersion() or valueOrDefault().
     */
    public function getVersion(): mixed { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
