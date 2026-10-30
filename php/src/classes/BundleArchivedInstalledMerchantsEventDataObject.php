<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read bool $available_for_sale
 * @property-read ?string $barcode
 * @property-read string $bundle_id
 * @property-read list<CategoryReference> $categories
 * @property-read int $component_count
 * @property-read list<BundleComponent> $components
 * @property-read ?string $created_at
 * @property-read string $delivery_configuration_status
 * @property-read ?string $description
 * @property-read ?string $external_reference_id
 * @property-read list<ImageAttachment> $images
 * @property-read ?string $merchant_id
 * @property-read ?array<array-key, string> $metadata
 * @property-read ModifierSet|null $modifier_set
 * @property-read string|null $modifier_set_id
 * @property-read string $name
 * @property-read ?string $sku
 * @property-read string $status
 * @property-read MoneyValue $unit_price_money
 * @property-read ?string $updated_at
 * @property-read int $version
 * Presence-aware response; omitted optional fields return null. */
final class BundleArchivedInstalledMerchantsEventDataObject extends Model {
    /** @param array{'available_for_sale': bool, 'barcode'?: string, 'bundle_id': string, 'categories': list<mixed>, 'component_count': int, 'components': list<mixed>, 'created_at'?: string, 'delivery_configuration_status': string, 'description'?: string, 'external_reference_id'?: string, 'images': list<mixed>, 'merchant_id'?: string, 'metadata'?: mixed, 'modifier_set'?: mixed, 'modifier_set_id': string|null, 'name': string, 'sku'?: string, 'status': string, 'unit_price_money': mixed, 'updated_at'?: string, 'version': int, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BundleArchivedInstalledMerchantsEventDataObject')); }
    /** Whether the bundle can be sold now: it is `active`, has at least one component, every component's variant and product are `active`, and `delivery_configuration_status` isn't `action_required`. Stock isn't considered.
     * @return bool
     */
    public function getAvailableForSale(): bool { return $this->get('available_for_sale'); }
    public function hasAvailableForSale(): bool { return $this->has('available_for_sale'); }
    /** Barcode assigned to this sellable item.
     * @return ?string
     */
    public function getBarcode(): ?string { return $this->get('barcode'); }
    public function hasBarcode(): bool { return $this->has('barcode'); }
    /** Stable identifier of the bundle.
     * @return string
     */
    public function getBundleId(): string { return $this->get('bundle_id'); }
    public function hasBundleId(): bool { return $this->has('bundle_id'); }
    /** Always present. Empty collections are returned as []. [] (Value): {@see CategoryReference}. A reference to a product category by ID, handle, and name.
     * @return list<CategoryReference>
     */
    public function getCategories(): array { return $this->get('categories'); }
    public function hasCategories(): bool { return $this->has('categories'); }
    /** Number of components in the bundle. Format: int32.
     * @return int
     */
    public function getComponentCount(): int { return $this->get('component_count'); }
    public function hasComponentCount(): bool { return $this->has('component_count'); }
    /** The bundle's components in position order, on every bundle response including list rows. [] only when the bundle has no components. [] (Value): {@see BundleComponent}. An item included in a bundle.
     * @return list<BundleComponent>
     */
    public function getComponents(): array { return $this->get('components'); }
    public function hasComponents(): bool { return $this->has('components'); }
    /** When this resource was created, as an RFC3339 timestamp. Format: date-time.
     * @return ?string
     */
    public function getCreatedAt(): ?string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Delivery readiness aggregated across the bundle's components. A bundle with no components reports `not_applicable`. Value enum: "configured", "action_required", "not_applicable".
     * @return string
     */
    public function getDeliveryConfigurationStatus(): string { return $this->get('delivery_configuration_status'); }
    public function hasDeliveryConfigurationStatus(): bool { return $this->has('delivery_configuration_status'); }
    /** Description of the bundle shown to buyers.
     * @return ?string
     */
    public function getDescription(): ?string { return $this->get('description'); }
    public function hasDescription(): bool { return $this->has('description'); }
    /** Caller-owned identifier for this resource in an external system. maxLength: 255.
     * @return ?string
     */
    public function getExternalReferenceId(): ?string { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** Images attached to this resource, in display order. The first image is primary. [] (Value): {@see ImageAttachment}. An image attached to a resource, with its display properties and attachment metadata.
     * @return list<ImageAttachment>
     */
    public function getImages(): array { return $this->get('images'); }
    public function hasImages(): bool { return $this->has('images'); }
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
    /** Bundle name shown to buyers.
     * @return string
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Stock keeping unit assigned to this sellable item.
     * @return ?string
     */
    public function getSku(): ?string { return $this->get('sku'); }
    public function hasSku(): bool { return $this->has('sku'); }
    /** Bundle lifecycle status. Archived bundles remain readable and cannot be edited. Value enum: "active", "inactive", "archived".
     * @return string
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Price charged for one unit, in the currency's smallest unit. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getUnitPriceMoney(): MoneyValue { return $this->get('unit_price_money'); }
    public function hasUnitPriceMoney(): bool { return $this->has('unit_price_money'); }
    /** When this resource last changed, as an RFC3339 timestamp. Format: date-time.
     * @return ?string
     */
    public function getUpdatedAt(): ?string { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Current resource version. Send it as expected_version to reject a write if the resource has changed. Format: uint64. minimum: 0.
     * @return int
     */
    public function getVersion(): int { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
