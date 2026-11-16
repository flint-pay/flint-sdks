<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read DeliveryProfileConfiguration|null $configuration
 * @property-read string|null $created_at
 * @property-read string|null $current_delivery_profile_revision_id
 * @property-read string|null $delivery_profile_id
 * @property-read string|null $external_reference_id
 * @property-read bool|null $is_default
 * @property-read array<array-key, string>|null $metadata
 * @property-read string|null $name
 * @property-read string|null $status
 * @property-read string|null $updated_at
 * @property-read int|null $version
 * Presence-aware response; omitted optional fields return null. */
final class DeliveryProfileArchivedInstalledMerchantsEventDataPreviousAttributes extends Model {
    /** @param array{'configuration'?: mixed, 'created_at'?: mixed, 'current_delivery_profile_revision_id'?: mixed, 'delivery_profile_id'?: mixed, 'external_reference_id'?: mixed, 'is_default'?: mixed, 'metadata'?: mixed, 'name'?: mixed, 'status'?: mixed, 'updated_at'?: mixed, 'version'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryProfileArchivedInstalledMerchantsEventDataPreviousAttributes')); }
    /** Current delivery requirement and grouping policy. anyOf[1] (Value): {@see DeliveryProfileConfiguration}. Current delivery requirement and grouping policy. anyOf[2] (Value): null.
     * @return DeliveryProfileConfiguration|null
     */
    public function getConfiguration(): DeliveryProfileConfiguration|null { return $this->get('configuration'); }
    public function hasConfiguration(): bool { return $this->has('configuration'); }
    /** Time the profile was created. anyOf[1] (Value): string. Time the profile was created. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCreatedAt(): string|null { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Immutable revision used for new line-item snapshots. anyOf[1] (Value): string. Immutable revision used for new line-item snapshots. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCurrentDeliveryProfileRevisionId(): string|null { return $this->get('current_delivery_profile_revision_id'); }
    public function hasCurrentDeliveryProfileRevisionId(): bool { return $this->has('current_delivery_profile_revision_id'); }
    /** Stable delivery profile ID. anyOf[1] (Value): string. Stable delivery profile ID. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getDeliveryProfileId(): string|null { return $this->get('delivery_profile_id'); }
    public function hasDeliveryProfileId(): bool { return $this->has('delivery_profile_id'); }
    /** Caller-owned identifier for this resource in an external system. anyOf[1] (Value): string. Caller-owned identifier for this resource in an external system. maxLength: 255. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getExternalReferenceId(): string|null { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** True only when this profile is the current physical catalog default. anyOf[1] (Value): boolean. True only when this profile is the current physical catalog default. anyOf[2] (Value): null.
     * @return bool|null
     */
    public function getIsDefault(): bool|null { return $this->get('is_default'); }
    public function hasIsDefault(): bool { return $this->has('is_default'); }
    /** Caller-owned metadata. anyOf[1] (Value): {@see MetadataMap}. Caller-owned metadata. anyOf[2] (Value): null.
     * @return array<array-key, string>|null
     */
    public function getMetadata(): array|null { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** Merchant-facing profile name. anyOf[1] (Value): string. Merchant-facing profile name. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getName(): string|null { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Current profile lifecycle status. Value enum: "active", "archived". anyOf[1] (Value): string. Current profile lifecycle status. Value enum: "active", "archived". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getStatus(): string|null { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Time the profile last changed. anyOf[1] (Value): string. Time the profile last changed. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getUpdatedAt(): string|null { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Optimistic-concurrency version for profile writes. anyOf[1] (Value): integer. Optimistic-concurrency version for profile writes. Format: uint64. minimum: 1. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getVersion(): int|null { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
