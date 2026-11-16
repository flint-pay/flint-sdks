<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $barcode
 * @property-read string|null $bundle_id
 * @property-read list<CategoryReferencePreviousAttributes>|null $categories
 * @property-read int|null $component_count
 * @property-read list<BundleComponentPreviousAttributes>|null $components
 * @property-read string|null $created_at
 * @property-read string|null $delivery_configuration_status
 * @property-read string|null $description
 * @property-read string|null $external_reference_id
 * @property-read list<ImageAttachmentPreviousAttributes>|null $images
 * @property-read bool|null $is_available_for_sale
 * @property-read string|null $merchant_id
 * @property-read array<array-key, string>|null $metadata
 * @property-read string|null $modifier_set_id
 * @property-read string|null $name
 * @property-read string|null $sku
 * @property-read string|null $status
 * @property-read MoneyValuePreviousAttributes|null $unit_price_money
 * @property-read string|null $updated_at
 * @property-read int|null $version
 * Presence-aware response; omitted optional fields return null. */
final class BundleArchivedMerchantEventDataPreviousAttributes extends Model {
    /** @param array{'barcode'?: mixed, 'bundle_id'?: mixed, 'categories'?: mixed, 'component_count'?: mixed, 'components'?: mixed, 'created_at'?: mixed, 'delivery_configuration_status'?: mixed, 'description'?: mixed, 'external_reference_id'?: mixed, 'images'?: mixed, 'is_available_for_sale'?: mixed, 'merchant_id'?: mixed, 'metadata'?: mixed, 'modifier_set_id'?: mixed, 'name'?: mixed, 'sku'?: mixed, 'status'?: mixed, 'unit_price_money'?: mixed, 'updated_at'?: mixed, 'version'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BundleArchivedMerchantEventDataPreviousAttributes')); }
    /** Barcode assigned to this sellable item. anyOf[1] (Value): string. Barcode assigned to this sellable item. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getBarcode(): string|null { return $this->get('barcode'); }
    public function hasBarcode(): bool { return $this->has('barcode'); }
    /** Stable identifier of the bundle. anyOf[1] (Value): string. Stable identifier of the bundle. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getBundleId(): string|null { return $this->get('bundle_id'); }
    public function hasBundleId(): bool { return $this->has('bundle_id'); }
    /** Always present. Empty collections are returned as []. anyOf[1] (Value): Array of {@see CategoryReferencePreviousAttributes}. Always present. Empty collections are returned as []. anyOf[1][] (Value): {@see CategoryReferencePreviousAttributes}. anyOf[2] (Value): null.
     * @return list<CategoryReferencePreviousAttributes>|null
     */
    public function getCategories(): array|null { return $this->get('categories'); }
    public function hasCategories(): bool { return $this->has('categories'); }
    /** Number of components in the bundle. anyOf[1] (Value): integer. Number of components in the bundle. Format: int32. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getComponentCount(): int|null { return $this->get('component_count'); }
    public function hasComponentCount(): bool { return $this->has('component_count'); }
    /** The bundle's components in position order, on every bundle response including list rows. [] only when the bundle has no components. anyOf[1] (Value): Array of {@see BundleComponentPreviousAttributes}. The bundle's components in position order, on every bundle response including list rows. [] only when the bundle has no components. anyOf[1][] (Value): {@see BundleComponentPreviousAttributes}. anyOf[2] (Value): null.
     * @return list<BundleComponentPreviousAttributes>|null
     */
    public function getComponents(): array|null { return $this->get('components'); }
    public function hasComponents(): bool { return $this->has('components'); }
    /** When this resource was created, as an RFC3339 timestamp. anyOf[1] (Value): string. When this resource was created, as an RFC3339 timestamp. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCreatedAt(): string|null { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Delivery readiness aggregated across the bundle's components. A bundle with no components reports `not_applicable`. Value enum: "configured", "action_required", "not_applicable". anyOf[1] (Value): string. Delivery readiness aggregated across the bundle's components. A bundle with no components reports `not_applicable`. Value enum: "configured", "action_required", "not_applicable". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getDeliveryConfigurationStatus(): string|null { return $this->get('delivery_configuration_status'); }
    public function hasDeliveryConfigurationStatus(): bool { return $this->has('delivery_configuration_status'); }
    /** Description of the bundle shown to buyers. anyOf[1] (Value): string. Description of the bundle shown to buyers. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getDescription(): string|null { return $this->get('description'); }
    public function hasDescription(): bool { return $this->has('description'); }
    /** Caller-owned identifier for this resource in an external system. anyOf[1] (Value): string. Caller-owned identifier for this resource in an external system. maxLength: 255. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getExternalReferenceId(): string|null { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** Images attached to this resource, in display order. The first image is primary. anyOf[1] (Value): Array of {@see ImageAttachmentPreviousAttributes}. Images attached to this resource, in display order. The first image is primary. anyOf[1][] (Value): {@see ImageAttachmentPreviousAttributes}. anyOf[2] (Value): null.
     * @return list<ImageAttachmentPreviousAttributes>|null
     */
    public function getImages(): array|null { return $this->get('images'); }
    public function hasImages(): bool { return $this->has('images'); }
    /** Whether the bundle can be sold now: it is `active`, has at least one component, every component's variant and product are `active`, and `delivery_configuration_status` isn't `action_required`. Stock isn't considered. anyOf[1] (Value): boolean. Whether the bundle can be sold now: it is `active`, has at least one component, every component's variant and product are `active`, and `delivery_configuration_status` isn't `action_required`. Stock isn't considered. anyOf[2] (Value): null.
     * @return bool|null
     */
    public function getIsAvailableForSale(): bool|null { return $this->get('is_available_for_sale'); }
    public function hasIsAvailableForSale(): bool { return $this->has('is_available_for_sale'); }
    /** Identifier of the merchant that owns this resource. anyOf[1] (Value): string. Identifier of the merchant that owns this resource. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getMerchantId(): string|null { return $this->get('merchant_id'); }
    public function hasMerchantId(): bool { return $this->has('merchant_id'); }
    /** Caller-owned metadata stored on this resource. anyOf[1] (Value): {@see MetadataMapPreviousAttributes}. anyOf[2] (Value): null.
     * @return array<array-key, string>|null
     */
    public function getMetadata(): array|null { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** ID of the modifier set attached to the bundle. `null` when no modifier set is attached. anyOf[1] (Value): string. ID of the modifier set attached to the bundle. `null` when no modifier set is attached. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getModifierSetId(): string|null { return $this->get('modifier_set_id'); }
    public function hasModifierSetId(): bool { return $this->has('modifier_set_id'); }
    /** Bundle name shown to buyers. anyOf[1] (Value): string. Bundle name shown to buyers. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getName(): string|null { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Stock keeping unit assigned to this sellable item. anyOf[1] (Value): string. Stock keeping unit assigned to this sellable item. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getSku(): string|null { return $this->get('sku'); }
    public function hasSku(): bool { return $this->has('sku'); }
    /** Bundle lifecycle status. Archived bundles remain readable and cannot be edited. Value enum: "active", "inactive", "archived". anyOf[1] (Value): string. Bundle lifecycle status. Archived bundles remain readable and cannot be edited. Value enum: "active", "inactive", "archived". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getStatus(): string|null { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Price charged for one unit, in the currency's smallest unit. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getUnitPriceMoney(): MoneyValuePreviousAttributes|null { return $this->get('unit_price_money'); }
    public function hasUnitPriceMoney(): bool { return $this->has('unit_price_money'); }
    /** When this resource last changed, as an RFC3339 timestamp. anyOf[1] (Value): string. When this resource last changed, as an RFC3339 timestamp. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getUpdatedAt(): string|null { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Current resource version. Send it as expected_version to reject a write if the resource has changed. anyOf[1] (Value): integer. Current resource version. Send it as expected_version to reject a write if the resource has changed. Format: uint64. minimum: 0. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getVersion(): int|null { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
