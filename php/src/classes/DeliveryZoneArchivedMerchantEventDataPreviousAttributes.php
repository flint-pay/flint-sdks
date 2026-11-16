<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read mixed $configuration
 * @property-read string|null $created_at
 * @property-read string|null $current_delivery_zone_revision_id
 * @property-read string|null $delivery_zone_id
 * @property-read string|null $external_reference_id
 * @property-read array<array-key, string>|null $metadata
 * @property-read string|null $name
 * @property-read string|null $status
 * @property-read string|null $updated_at
 * @property-read int|null $version
 * Presence-aware response; omitted optional fields return null. */
final class DeliveryZoneArchivedMerchantEventDataPreviousAttributes extends Model {
    /** @param array{'configuration'?: mixed, 'created_at'?: mixed, 'current_delivery_zone_revision_id'?: mixed, 'delivery_zone_id'?: mixed, 'external_reference_id'?: mixed, 'metadata'?: mixed, 'name'?: mixed, 'status'?: mixed, 'updated_at'?: mixed, 'version'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryZoneArchivedMerchantEventDataPreviousAttributes')); }
    /** Current geographic eligibility conditions. anyOf[1] (Value): {@see DeliveryZoneConfiguration}. Current geographic eligibility conditions. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getConfiguration(): mixed { return $this->get('configuration'); }
    public function hasConfiguration(): bool { return $this->has('configuration'); }
    /** Time the zone was created. anyOf[1] (Value): string. Time the zone was created. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCreatedAt(): string|null { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Immutable revision used for new quotes. anyOf[1] (Value): string. Immutable revision used for new quotes. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCurrentDeliveryZoneRevisionId(): string|null { return $this->get('current_delivery_zone_revision_id'); }
    public function hasCurrentDeliveryZoneRevisionId(): bool { return $this->has('current_delivery_zone_revision_id'); }
    /** Stable delivery zone ID. anyOf[1] (Value): string. Stable delivery zone ID. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getDeliveryZoneId(): string|null { return $this->get('delivery_zone_id'); }
    public function hasDeliveryZoneId(): bool { return $this->has('delivery_zone_id'); }
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
    /** Merchant-facing zone name. anyOf[1] (Value): string. Merchant-facing zone name. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getName(): string|null { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Current zone lifecycle status. Value enum: "active", "archived". anyOf[1] (Value): string. Current zone lifecycle status. Value enum: "active", "archived". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getStatus(): string|null { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Time the zone last changed. anyOf[1] (Value): string. Time the zone last changed. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getUpdatedAt(): string|null { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Optimistic-concurrency version for zone writes. anyOf[1] (Value): integer. Optimistic-concurrency version for zone writes. Format: uint64. minimum: 1. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getVersion(): int|null { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
