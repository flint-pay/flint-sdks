<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read DeliveryLocationSetConfiguration|null $configuration
 * @property-read string|null $created_at
 * @property-read string|null $current_delivery_location_set_revision_id
 * @property-read string|null $delivery_location_set_id
 * @property-read string|null $external_reference_id
 * @property-read array<array-key, string>|null $metadata
 * @property-read string|null $name
 * @property-read string|null $status
 * @property-read string|null $updated_at
 * @property-read int|null $version
 * Presence-aware response; omitted optional fields return null. */
final class DeliveryLocationSetUpdatedInstalledMerchantsEventDataPreviousAttributes extends Model {
    /** @param array{'configuration'?: mixed, 'created_at'?: mixed, 'current_delivery_location_set_revision_id'?: mixed, 'delivery_location_set_id'?: mixed, 'external_reference_id'?: mixed, 'metadata'?: mixed, 'name'?: mixed, 'status'?: mixed, 'updated_at'?: mixed, 'version'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryLocationSetUpdatedInstalledMerchantsEventDataPreviousAttributes')); }
    /** Current member Locations. anyOf[1] (Value): {@see DeliveryLocationSetConfiguration}. Current member Locations. anyOf[2] (Value): null.
     * @return DeliveryLocationSetConfiguration|null
     */
    public function getConfiguration(): DeliveryLocationSetConfiguration|null { return $this->get('configuration'); }
    public function hasConfiguration(): bool { return $this->has('configuration'); }
    /** Time the location set was created. anyOf[1] (Value): string. Time the location set was created. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCreatedAt(): string|null { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Immutable revision used for new quotes. anyOf[1] (Value): string. Immutable revision used for new quotes. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCurrentDeliveryLocationSetRevisionId(): string|null { return $this->get('current_delivery_location_set_revision_id'); }
    public function hasCurrentDeliveryLocationSetRevisionId(): bool { return $this->has('current_delivery_location_set_revision_id'); }
    /** Stable delivery location set ID. anyOf[1] (Value): string. Stable delivery location set ID. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getDeliveryLocationSetId(): string|null { return $this->get('delivery_location_set_id'); }
    public function hasDeliveryLocationSetId(): bool { return $this->has('delivery_location_set_id'); }
    /** Caller-owned identifier for this resource in an external system. anyOf[1] (Value): string. Caller-owned identifier for this resource in an external system. maxLength: 255. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getExternalReferenceId(): string|null { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** Caller-owned metadata. anyOf[1] (Value): {@see MetadataMap}. Caller-owned metadata. anyOf[2] (Value): null.
     * @return array<array-key, string>|null
     */
    public function getMetadata(): array|null { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** Merchant-facing location set name. anyOf[1] (Value): string. Merchant-facing location set name. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getName(): string|null { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Current location set lifecycle status. Value enum: "active", "archived". anyOf[1] (Value): string. Current location set lifecycle status. Value enum: "active", "archived". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getStatus(): string|null { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Time the location set last changed. anyOf[1] (Value): string. Time the location set last changed. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getUpdatedAt(): string|null { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Optimistic-concurrency version for location set writes. anyOf[1] (Value): integer. Optimistic-concurrency version for location set writes. Format: uint64. minimum: 1. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getVersion(): int|null { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
