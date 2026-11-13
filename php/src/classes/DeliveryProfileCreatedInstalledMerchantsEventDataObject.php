<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read DeliveryProfileConfiguration $configuration
 * @property-read string $created_at
 * @property-read string $current_delivery_profile_revision_id
 * @property-read string $delivery_profile_id
 * @property-read ?DeliveryProfileDiagnostics $diagnostics
 * @property-read ?string $external_reference_id
 * @property-read bool $is_default
 * @property-read ?array<array-key, string> $metadata
 * @property-read string $name
 * @property-read string $status
 * @property-read DeliveryProfileUnconfiguredAssignment|null $unconfigured_assignment
 * @property-read string $updated_at
 * @property-read int $version
 * Presence-aware response; omitted optional fields return null. */
final class DeliveryProfileCreatedInstalledMerchantsEventDataObject extends Model {
    /** @param array{'configuration': mixed, 'created_at': string, 'current_delivery_profile_revision_id': string, 'delivery_profile_id': string, 'diagnostics'?: mixed, 'external_reference_id'?: string, 'is_default': bool, 'metadata'?: mixed, 'name': string, 'status': string, 'unconfigured_assignment'?: mixed, 'updated_at': string, 'version': int, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryProfileCreatedInstalledMerchantsEventDataObject')); }
    /** Current delivery requirement and grouping policy. Whether delivery planning applies to items under a delivery profile, and if so the allowed delivery types, resolution mode, origin policy, and grouping and splitting rules.
     * @return DeliveryProfileConfiguration
     */
    public function getConfiguration(): DeliveryProfileConfiguration { return $this->get('configuration'); }
    public function hasConfiguration(): bool { return $this->has('configuration'); }
    /** Time the profile was created. Format: date-time.
     * @return string
     */
    public function getCreatedAt(): string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Immutable revision used for new line-item snapshots.
     * @return string
     */
    public function getCurrentDeliveryProfileRevisionId(): string { return $this->get('current_delivery_profile_revision_id'); }
    public function hasCurrentDeliveryProfileRevisionId(): bool { return $this->has('current_delivery_profile_revision_id'); }
    /** Stable delivery profile ID.
     * @return string
     */
    public function getDeliveryProfileId(): string { return $this->get('delivery_profile_id'); }
    public function hasDeliveryProfileId(): bool { return $this->has('delivery_profile_id'); }
    /** Read-only catalog and delivery-method compatibility diagnostics. Read-only coverage checks for a delivery profile, such as how many active Locations have no compatible delivery method and how many countries its zones name.
     * @return ?DeliveryProfileDiagnostics
     */
    public function getDiagnostics(): ?DeliveryProfileDiagnostics { return $this->get('diagnostics'); }
    public function hasDiagnostics(): bool { return $this->has('diagnostics'); }
    /** Caller-owned identifier for this resource in an external system. maxLength: 255.
     * @return ?string
     */
    public function getExternalReferenceId(): ?string { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** True only when this profile is the current physical catalog default.
     * @return bool
     */
    public function getIsDefault(): bool { return $this->get('is_default'); }
    public function hasIsDefault(): bool { return $this->has('is_default'); }
    /** Caller-owned metadata. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them.
     * @return ?array<array-key, string>
     */
    public function getMetadata(): ?array { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** Merchant-facing profile name.
     * @return string
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Current profile lifecycle status. Value enum: "active", "archived".
     * @return string
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Progress of the profile's latest bulk assignment through `POST /v1/delivery-profiles/{delivery_profile_id}/assign-to-unconfigured`. `null` when the profile has never had one. Omitted when the response is a write response or a webhook object; retrieve and list responses include it. Flint updates it as the assignment's runs commit, without changing the profile's `version` or sending `delivery_profile.updated`; each batch's `product_variant.updated`, `product.updated`, and `bundle.updated` events report the items it assigned. anyOf[1] (Value): {@see DeliveryProfileUnconfiguredAssignment}. Progress of a delivery profile's latest bulk assignment to catalog items that have no delivery profile. It moves from `processing` to `completed`, to `canceled` when it stops early, or to `failed` when Flint can't finish it. anyOf[2] (Value): null.
     * @return DeliveryProfileUnconfiguredAssignment|null
     */
    public function getUnconfiguredAssignment(): DeliveryProfileUnconfiguredAssignment|null { return $this->get('unconfigured_assignment'); }
    public function hasUnconfiguredAssignment(): bool { return $this->has('unconfigured_assignment'); }
    /** Time the profile last changed. Format: date-time.
     * @return string
     */
    public function getUpdatedAt(): string { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Optimistic-concurrency version for profile writes. Format: uint64. minimum: 1.
     * @return int
     */
    public function getVersion(): int { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
