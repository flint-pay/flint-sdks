<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read InventoryAllocationPolicyConfiguration $configuration
 * @property-read string $created_at
 * @property-read string $current_inventory_allocation_policy_revision_id
 * @property-read ?string $external_reference_id
 * @property-read string $inventory_allocation_policy_id
 * @property-read array<array-key, string> $metadata
 * @property-read string $name
 * @property-read string $status
 * @property-read string $updated_at
 * @property-read string $version
 * Presence-aware response; omitted optional fields return null. */
final class InventoryAllocationPolicy extends Model {
    /** @param array{'configuration': object{'location_groups': list<mixed>, 'maximum_locations_per_assignment': int, 'splitting_behavior': string, 'within_group_order': string}, 'created_at': string, 'current_inventory_allocation_policy_revision_id': string, 'external_reference_id'?: string, 'inventory_allocation_policy_id': string, 'metadata': mixed, 'name': string, 'status': string, 'updated_at': string, 'version': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventoryAllocationPolicy')); }
    /** Shape $ (Value): {@see InventoryAllocationPolicyConfiguration}.
     * @return InventoryAllocationPolicyConfiguration
     */
    public function getConfiguration(): InventoryAllocationPolicyConfiguration { return $this->get('configuration'); }
    public function hasConfiguration(): bool { return $this->has('configuration'); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return string
     */
    public function getCreatedAt(): string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Shape $ (Value): string. The immutable revision containing this policy's current routing configuration. Replacing configuration publishes a new revision; other policy edits keep this ID.
     * @return string
     */
    public function getCurrentInventoryAllocationPolicyRevisionId(): string { return $this->get('current_inventory_allocation_policy_revision_id'); }
    public function hasCurrentInventoryAllocationPolicyRevisionId(): bool { return $this->has('current_inventory_allocation_policy_revision_id'); }
    /** Shape $ (Value): string. Caller-owned identifier for this resource in an external system. maxLength: 255.
     * @return ?string
     */
    public function getExternalReferenceId(): ?string { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getInventoryAllocationPolicyId(): string { return $this->get('inventory_allocation_policy_id'); }
    public function hasInventoryAllocationPolicyId(): bool { return $this->has('inventory_allocation_policy_id'); }
    /** Shape $ (Value): {@see MetadataMap}. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them.
     * @return array<array-key, string>
     */
    public function getMetadata(): array { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Shape $ (Value): string.  Value enum: "active", "inactive", "archived".
     * @return string
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return string
     */
    public function getUpdatedAt(): string { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Shape $ (Value): integer string. Use an integer string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     * @return string
     */
    public function getVersion(): string { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
