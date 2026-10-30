<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read bool $available_for_sale
 * @property-read ?string $barcode
 * @property-read ?string $created_at
 * @property-read ?string $delivery_configuration_reason
 * @property-read string $delivery_configuration_status
 * @property-read ?string $delivery_profile_id
 * @property-read list<ImageAttachment> $effective_images
 * @property-read ?string $external_reference_id
 * @property-read ?GiftCardProductConfiguration $gift_card_configuration
 * @property-read list<ImageAttachment> $images
 * @property-read bool $images_inherited
 * @property-read ?string $inventory_item_id
 * @property-read string $inventory_tracking
 * @property-read ?string $line_item_tax_category
 * @property-read ?string $merchant_id
 * @property-read ?array<array-key, string> $metadata
 * @property-read ModifierSet|null $modifier_set
 * @property-read string|null $modifier_set_id
 * @property-read ?string $name
 * @property-read int $position
 * @property-read string $product_id
 * @property-read list<SelectedProductOption> $selected_options
 * @property-read ?string $sku
 * @property-read string $status
 * @property-read ?bool $taxable
 * @property-read ?Dimensions $unit_dimensions
 * @property-read MoneyValue $unit_price_money
 * @property-read ?Weight $unit_weight
 * @property-read ?string $updated_at
 * @property-read string $variant_id
 * @property-read int $version
 * Presence-aware response; omitted optional fields return null. */
final class ProductVariant extends Model {
    /** @param array{'available_for_sale': bool, 'barcode'?: string, 'created_at'?: string, 'delivery_configuration_reason'?: string, 'delivery_configuration_status': string, 'delivery_profile_id'?: string, 'effective_images': list<mixed>, 'external_reference_id'?: string, 'gift_card_configuration'?: mixed, 'images': list<mixed>, 'images_inherited': bool, 'inventory_item_id'?: string, 'inventory_tracking': string, 'line_item_tax_category'?: string, 'merchant_id'?: string, 'metadata'?: mixed, 'modifier_set'?: mixed, 'modifier_set_id': string|null, 'name'?: string, 'position': int, 'product_id': string, 'selected_options': list<mixed>, 'sku'?: string, 'status': string, 'taxable'?: bool, 'unit_dimensions'?: mixed, 'unit_price_money': mixed, 'unit_weight'?: mixed, 'updated_at'?: string, 'variant_id': string, 'version': int, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ProductVariant')); }
    /** Whether the variant and its product are both active.
     * @return bool
     */
    public function getAvailableForSale(): bool { return $this->get('available_for_sale'); }
    public function hasAvailableForSale(): bool { return $this->has('available_for_sale'); }
    /** Barcode assigned to this sellable item.
     * @return ?string
     */
    public function getBarcode(): ?string { return $this->get('barcode'); }
    public function hasBarcode(): bool { return $this->has('barcode'); }
    /** When this resource was created, as an RFC3339 timestamp. Format: date-time.
     * @return ?string
     */
    public function getCreatedAt(): ?string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Reason the variant's delivery configuration needs attention. Value enum: "delivery_profile_missing", "delivery_profile_inactive".
     * @return ?string
     */
    public function getDeliveryConfigurationReason(): ?string { return $this->get('delivery_configuration_reason'); }
    public function hasDeliveryConfigurationReason(): bool { return $this->has('delivery_configuration_reason'); }
    /** Whether the variant's delivery configuration is ready, needs attention, or does not apply. Value enum: "configured", "action_required", "not_applicable".
     * @return string
     */
    public function getDeliveryConfigurationStatus(): string { return $this->get('delivery_configuration_status'); }
    public function hasDeliveryConfigurationStatus(): bool { return $this->has('delivery_configuration_status'); }
    /** Identifier of the delivery profile assigned to this variant.
     * @return ?string
     */
    public function getDeliveryProfileId(): ?string { return $this->get('delivery_profile_id'); }
    public function hasDeliveryProfileId(): bool { return $this->has('delivery_profile_id'); }
    /** Images shown for the variant: its own gallery when nonempty, otherwise the product's gallery. [] (Value): {@see ImageAttachment}. An image attached to a resource, with its display properties and attachment metadata.
     * @return list<ImageAttachment>
     */
    public function getEffectiveImages(): array { return $this->get('effective_images'); }
    public function hasEffectiveImages(): bool { return $this->has('effective_images'); }
    /** Caller-owned identifier for this resource in an external system. maxLength: 255.
     * @return ?string
     */
    public function getExternalReferenceId(): ?string { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** Gift card issuance terms. face_value_money is the reference denomination; unit_price_money is its price. Custom amounts use that price-to-value ratio, rounded to the nearest cent with ties up. Gift card settings on a product variant: its `face_value_money`, price mode (face value or discounted), and bounds for custom amounts.
     * @return ?GiftCardProductConfiguration
     */
    public function getGiftCardConfiguration(): ?GiftCardProductConfiguration { return $this->get('gift_card_configuration'); }
    public function hasGiftCardConfiguration(): bool { return $this->has('gift_card_configuration'); }
    /** The variant's own images in display order. An empty gallery inherits the product's images. [] (Value): {@see ImageAttachment}. An image attached to a resource, with its display properties and attachment metadata.
     * @return list<ImageAttachment>
     */
    public function getImages(): array { return $this->get('images'); }
    public function hasImages(): bool { return $this->has('images'); }
    /** Whether effective_images comes from the product's gallery because this variant's gallery is empty.
     * @return bool
     */
    public function getImagesInherited(): bool { return $this->get('images_inherited'); }
    public function hasImagesInherited(): bool { return $this->has('images_inherited'); }
    /** The inventory item this variant consumes. Present exactly when inventory_tracking is tracked. Several variants may share one inventory item.
     * @return ?string
     */
    public function getInventoryItemId(): ?string { return $this->get('inventory_item_id'); }
    public function hasInventoryItemId(): bool { return $this->has('inventory_item_id'); }
    /** Whether sales of this variant consume an inventory item. Value enum: "not_tracked", "tracked".
     * @return string
     */
    public function getInventoryTracking(): string { return $this->get('inventory_tracking'); }
    public function hasInventoryTracking(): bool { return $this->has('inventory_tracking'); }
    /** Stored Flint line-item tax category. New digital-product variants default to digital_goods when omitted. The stored value remains editable. Unset uses the merchant default. Value enum: "general", "physical_goods", "digital_goods", "software", "saas", "services", "professional_services", "food", "prepared_food", "clothing", "medical_goods", "admission".
     * @return ?string
     */
    public function getLineItemTaxCategory(): ?string { return $this->get('line_item_tax_category'); }
    public function hasLineItemTaxCategory(): bool { return $this->has('line_item_tax_category'); }
    /** Identifier of the merchant that owns this resource.
     * @return ?string
     */
    public function getMerchantId(): ?string { return $this->get('merchant_id'); }
    public function hasMerchantId(): bool { return $this->has('merchant_id'); }
    /** Caller-owned metadata stored on this resource. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them.
     * @return ?array<array-key, string>
     */
    public function getMetadata(): ?array { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** Attached modifier set, included when expand=modifier_set is requested. Requires commerce.catalog.read in addition to the resource's read scope. Present only when `expand` includes `modifier_set`; `null` when expanded and there is no related modifier set. anyOf[1] (Value): {@see ModifierSet}. A reusable collection of customization groups. anyOf[2] (Value): null.
     * @return ModifierSet|null
     */
    public function getModifierSet(): ModifierSet|null { return $this->get('modifier_set'); }
    public function hasModifierSet(): bool { return $this->has('modifier_set'); }
    /** Attached modifier set. Send null on update to remove it.
     * @return string|null
     */
    public function getModifierSetId(): string|null { return $this->get('modifier_set_id'); }
    public function hasModifierSetId(): bool { return $this->has('modifier_set_id'); }
    /** Variant name that distinguishes it from the product's other variants.
     * @return ?string
     */
    public function getName(): ?string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Display order among the product's variants, starting at zero. Format: int32.
     * @return int
     */
    public function getPosition(): int { return $this->get('position'); }
    public function hasPosition(): bool { return $this->has('position'); }
    /** Identifier of the product this variant belongs to.
     * @return string
     */
    public function getProductId(): string { return $this->get('product_id'); }
    public function hasProductId(): bool { return $this->has('product_id'); }
    /** Always present. Empty collections are returned as []. [] (Value): {@see SelectedProductOption}. An option and value chosen for a product variant, such as size Large.
     * @return list<SelectedProductOption>
     */
    public function getSelectedOptions(): array { return $this->get('selected_options'); }
    public function hasSelectedOptions(): bool { return $this->has('selected_options'); }
    /** Stock keeping unit assigned to this sellable item.
     * @return ?string
     */
    public function getSku(): ?string { return $this->get('sku'); }
    public function hasSku(): bool { return $this->has('sku'); }
    /** Variant lifecycle status. Archived variants remain readable and cannot be edited. Value enum: "active", "inactive", "archived".
     * @return string
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Whether this item is subject to tax.
     * @return ?bool
     */
    public function getTaxable(): ?bool { return $this->get('taxable'); }
    public function hasTaxable(): bool { return $this->has('taxable'); }
    /** Per-unit measurement. Omitted when unknown. Package or item dimensions as `length`, `width`, and `height` in the given `unit`.
     * @return ?Dimensions
     */
    public function getUnitDimensions(): ?Dimensions { return $this->get('unit_dimensions'); }
    public function hasUnitDimensions(): bool { return $this->has('unit_dimensions'); }
    /** Price charged for one unit, in the currency's smallest unit. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getUnitPriceMoney(): MoneyValue { return $this->get('unit_price_money'); }
    public function hasUnitPriceMoney(): bool { return $this->has('unit_price_money'); }
    /** Per-unit measurement. Omitted when unknown. A weight value in grams, kilograms, ounces, or pounds, used in delivery profile configuration.
     * @return ?Weight
     */
    public function getUnitWeight(): ?Weight { return $this->get('unit_weight'); }
    public function hasUnitWeight(): bool { return $this->has('unit_weight'); }
    /** When this resource last changed, as an RFC3339 timestamp. Format: date-time.
     * @return ?string
     */
    public function getUpdatedAt(): ?string { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Stable identifier of the product variant.
     * @return string
     */
    public function getVariantId(): string { return $this->get('variant_id'); }
    public function hasVariantId(): bool { return $this->has('variant_id'); }
    /** Current resource version. Send it as expected_version to reject a write if the resource has changed. Format: uint64. minimum: 0.
     * @return int
     */
    public function getVersion(): int { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
