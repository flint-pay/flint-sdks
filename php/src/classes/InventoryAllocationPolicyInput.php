<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read array{'location_groups': list<InventoryAllocationPolicyLocationInput|array<array-key, mixed>|\stdClass>, 'maximum_locations_per_assignment': int, 'splitting_behavior': string, 'within_group_order': string}|object $configuration
 * @property-read string|\DateTimeInterface $created_at
 * @property-read string $current_inventory_allocation_policy_revision_id
 * @property-read string $external_reference_id
 * @property-read string $inventory_allocation_policy_id
 * @property-read MetadataMapInput|array<array-key, mixed>|\stdClass $metadata
 * @property-read string $name
 * @property-read string $status
 * @property-read string|\DateTimeInterface $updated_at
 * @property-read string $version
 * Presence-aware input; omitted fields throw when accessed. */
final class InventoryAllocationPolicyInput extends Model {
    /** @param array{'configuration': array{'location_groups': list<InventoryAllocationPolicyLocationInput|array<array-key, mixed>|\stdClass>, 'maximum_locations_per_assignment': int, 'splitting_behavior': string, 'within_group_order': string}|object, 'created_at': string|\DateTimeInterface, 'current_inventory_allocation_policy_revision_id': string, 'external_reference_id'?: string, 'inventory_allocation_policy_id': string, 'metadata': MetadataMapInput|array<array-key, mixed>|\stdClass, 'name': string, 'status': string, 'updated_at': string|\DateTimeInterface, 'version': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventoryAllocationPolicyInput')); }
    /** Shape $ (Value): object. Shape $.location_groups (Required): Array of {@see InventoryAllocationPolicyLocationInput}. Locations ranked into priority groups. Routing prefers the lowest group priority, then the lowest location ID. minItems: 1. maxItems: 25. Shape $.location_groups[] (Value): {@see InventoryAllocationPolicyLocationInput}. A Location in an inventory allocation policy and the priority group it belongs to. Shape $.maximum_locations_per_assignment (Required): integer. Upper bound on how many Locations one assignment may use. Defaults to 1 for single_location and 10 for split_when_required. single_location requires 1 when sent. Format: int32. minimum: 1. maximum: 10. Shape $.splitting_behavior (Required): string. single_location fails rather than splitting demand across Locations; split_when_required allows a split when no single Location can serve the whole request. Value enum: "single_location", "split_when_required". Shape $.within_group_order (Required): string. Tie-break inside a priority group. Ascending location ID keeps assignments reproducible. Value enum: "location_id_ascending".
     * @return array{'location_groups': list<InventoryAllocationPolicyLocationInput|array<array-key, mixed>|\stdClass>, 'maximum_locations_per_assignment': int, 'splitting_behavior': string, 'within_group_order': string}|object
     * @throws SdkError When configuration is omitted; use hasConfiguration() or valueOrDefault().
     */
    public function getConfiguration(): array|object { return $this->get('configuration'); }
    public function hasConfiguration(): bool { return $this->has('configuration'); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string|\DateTimeInterface { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Shape $ (Value): string. The immutable revision containing this policy's current routing configuration. Replacing configuration publishes a new revision; other policy edits keep this ID.
     * @return string
     * @throws SdkError When current_inventory_allocation_policy_revision_id is omitted; use hasCurrentInventoryAllocationPolicyRevisionId() or valueOrDefault().
     */
    public function getCurrentInventoryAllocationPolicyRevisionId(): string { return $this->get('current_inventory_allocation_policy_revision_id'); }
    public function hasCurrentInventoryAllocationPolicyRevisionId(): bool { return $this->has('current_inventory_allocation_policy_revision_id'); }
    /** Shape $ (Value): string. Caller-owned identifier for this resource in an external system. maxLength: 255.
     * @return string
     * @throws SdkError When external_reference_id is omitted; use hasExternalReferenceId() or valueOrDefault().
     */
    public function getExternalReferenceId(): string { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When inventory_allocation_policy_id is omitted; use hasInventoryAllocationPolicyId() or valueOrDefault().
     */
    public function getInventoryAllocationPolicyId(): string { return $this->get('inventory_allocation_policy_id'); }
    public function hasInventoryAllocationPolicyId(): bool { return $this->has('inventory_allocation_policy_id'); }
    /** Shape $ (Value): {@see MetadataMapInput}. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them.
     * @return MetadataMapInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When metadata is omitted; use hasMetadata() or valueOrDefault().
     */
    public function getMetadata(): mixed { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Shape $ (Value): string.  Value enum: "active", "inactive", "archived".
     * @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When updated_at is omitted; use hasUpdatedAt() or valueOrDefault().
     */
    public function getUpdatedAt(): string|\DateTimeInterface { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Shape $ (Value): integer string. Use an integer string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     * @return string
     * @throws SdkError When version is omitted; use hasVersion() or valueOrDefault().
     */
    public function getVersion(): string { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
