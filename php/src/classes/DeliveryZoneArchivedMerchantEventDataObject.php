<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read \stdClass $configuration
 * @property-read string $created_at
 * @property-read string $current_delivery_zone_revision_id
 * @property-read string $delivery_zone_id
 * @property-read ?string $external_reference_id
 * @property-read ?array<array-key, string> $metadata
 * @property-read string $name
 * @property-read string $status
 * @property-read string $updated_at
 * @property-read int $version
 * Presence-aware response; omitted optional fields return null. */
final class DeliveryZoneArchivedMerchantEventDataObject extends Model {
    /** @param array{'configuration': mixed, 'created_at': string, 'current_delivery_zone_revision_id': string, 'delivery_zone_id': string, 'external_reference_id'?: string, 'metadata'?: mixed, 'name': string, 'status': string, 'updated_at': string, 'version': int, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryZoneArchivedMerchantEventDataObject')); }
    /** Current geographic eligibility conditions. A reusable geographic predicate containing only country, state, postal_code, and radius conditions.
     * @return \stdClass
     */
    public function getConfiguration(): \stdClass { return $this->get('configuration'); }
    public function hasConfiguration(): bool { return $this->has('configuration'); }
    /** Time the zone was created. Format: date-time.
     * @return string
     */
    public function getCreatedAt(): string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Immutable revision used for new quotes.
     * @return string
     */
    public function getCurrentDeliveryZoneRevisionId(): string { return $this->get('current_delivery_zone_revision_id'); }
    public function hasCurrentDeliveryZoneRevisionId(): bool { return $this->has('current_delivery_zone_revision_id'); }
    /** Stable delivery zone ID.
     * @return string
     */
    public function getDeliveryZoneId(): string { return $this->get('delivery_zone_id'); }
    public function hasDeliveryZoneId(): bool { return $this->has('delivery_zone_id'); }
    /** Caller-owned identifier for this resource in an external system. maxLength: 255.
     * @return ?string
     */
    public function getExternalReferenceId(): ?string { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** Caller-owned metadata. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them.
     * @return ?array<array-key, string>
     */
    public function getMetadata(): ?array { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** Merchant-facing zone name.
     * @return string
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Current zone lifecycle status. Value enum: "active", "archived".
     * @return string
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Time the zone last changed. Format: date-time.
     * @return string
     */
    public function getUpdatedAt(): string { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Optimistic-concurrency version for zone writes. Format: uint64. minimum: 1.
     * @return int
     */
    public function getVersion(): int { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
