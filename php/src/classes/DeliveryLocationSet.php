<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read DeliveryLocationSetConfiguration $configuration
 * @property-read string $created_at
 * @property-read string $current_delivery_location_set_revision_id
 * @property-read string $delivery_location_set_id
 * @property-read ?string $external_reference_id
 * @property-read ?array<array-key, string> $metadata
 * @property-read string $name
 * @property-read string $status
 * @property-read string $updated_at
 * @property-read string $version
 * Presence-aware response; omitted optional fields return null. */
final class DeliveryLocationSet extends Model {
    /** @param array{'configuration': mixed, 'created_at': string, 'current_delivery_location_set_revision_id': string, 'delivery_location_set_id': string, 'external_reference_id'?: string, 'metadata'?: mixed, 'name': string, 'status': string, 'updated_at': string, 'version': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryLocationSet')); }
    /** Shape $ (Value): {@see DeliveryLocationSetConfiguration}. Current member Locations and selection rules. The location IDs in a delivery location set.
     * @return DeliveryLocationSetConfiguration
     */
    public function getConfiguration(): DeliveryLocationSetConfiguration { return $this->get('configuration'); }
    public function hasConfiguration(): bool { return $this->has('configuration'); }
    /** Shape $ (Value): string. Time the location set was created. Format: date-time.
     * @return string
     */
    public function getCreatedAt(): string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Shape $ (Value): string. Immutable revision used for new quotes.
     * @return string
     */
    public function getCurrentDeliveryLocationSetRevisionId(): string { return $this->get('current_delivery_location_set_revision_id'); }
    public function hasCurrentDeliveryLocationSetRevisionId(): bool { return $this->has('current_delivery_location_set_revision_id'); }
    /** Shape $ (Value): string. Stable delivery location set ID.
     * @return string
     */
    public function getDeliveryLocationSetId(): string { return $this->get('delivery_location_set_id'); }
    public function hasDeliveryLocationSetId(): bool { return $this->has('delivery_location_set_id'); }
    /** Shape $ (Value): string. Caller-owned identifier for this resource in an external system. maxLength: 255.
     * @return ?string
     */
    public function getExternalReferenceId(): ?string { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** Shape $ (Value): {@see MetadataMap}. Caller-owned metadata. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them.
     * @return ?array<array-key, string>
     */
    public function getMetadata(): ?array { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** Shape $ (Value): string. Merchant-facing location set name.
     * @return string
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Shape $ (Value): string. Current location set lifecycle status. Value enum: "active", "archived".
     * @return string
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Shape $ (Value): string. Time the location set last changed. Format: date-time.
     * @return string
     */
    public function getUpdatedAt(): string { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Shape $ (Value): integer string. Optimistic-concurrency version for location set writes. Use an integer string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     * @return string
     */
    public function getVersion(): string { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
