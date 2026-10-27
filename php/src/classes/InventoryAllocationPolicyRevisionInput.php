<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read InventoryAllocationConfigurationValueInput|array<array-key, mixed>|\stdClass $configuration
 * @property-read string|\DateTimeInterface $created_at
 * @property-read string $inventory_allocation_policy_id
 * @property-read string $inventory_allocation_policy_revision_id
 * Presence-aware input; omitted fields throw when accessed. */
final class InventoryAllocationPolicyRevisionInput extends Model {
    /** @param array{'configuration': InventoryAllocationConfigurationValueInput|array<array-key, mixed>|\stdClass, 'created_at': string|\DateTimeInterface, 'inventory_allocation_policy_id': string, 'inventory_allocation_policy_revision_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventoryAllocationPolicyRevisionInput')); }
    /** Shape $ (Value): {@see InventoryAllocationConfigurationValueInput}. Routing rules for an inventory allocation policy: ranked groups of Locations, whether demand can be split, and how many Locations one assignment may use.
     * @return InventoryAllocationConfigurationValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When configuration is omitted; use hasConfiguration() or valueOrDefault().
     */
    public function getConfiguration(): mixed { return $this->get('configuration'); }
    public function hasConfiguration(): bool { return $this->has('configuration'); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string|\DateTimeInterface { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When inventory_allocation_policy_id is omitted; use hasInventoryAllocationPolicyId() or valueOrDefault().
     */
    public function getInventoryAllocationPolicyId(): string { return $this->get('inventory_allocation_policy_id'); }
    public function hasInventoryAllocationPolicyId(): bool { return $this->has('inventory_allocation_policy_id'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When inventory_allocation_policy_revision_id is omitted; use hasInventoryAllocationPolicyRevisionId() or valueOrDefault().
     */
    public function getInventoryAllocationPolicyRevisionId(): string { return $this->get('inventory_allocation_policy_revision_id'); }
    public function hasInventoryAllocationPolicyRevisionId(): bool { return $this->has('inventory_allocation_policy_revision_id'); }
}
