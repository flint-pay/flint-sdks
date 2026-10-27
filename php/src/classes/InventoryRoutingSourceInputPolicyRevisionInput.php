<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $inventory_allocation_policy_revision_id
 * @property-read string $type
 * Presence-aware input; omitted fields throw when accessed. */
final class InventoryRoutingSourceInputPolicyRevisionInput extends Model {
    /** @param array{'inventory_allocation_policy_revision_id': string, 'type': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventoryRoutingSourceInputPolicyRevisionInput')); }
    /** Shape $ (Value): string. minLength: 1.
     * @return string
     * @throws SdkError When inventory_allocation_policy_revision_id is omitted; use hasInventoryAllocationPolicyRevisionId() or valueOrDefault().
     */
    public function getInventoryAllocationPolicyRevisionId(): string { return $this->get('inventory_allocation_policy_revision_id'); }
    public function hasInventoryAllocationPolicyRevisionId(): bool { return $this->has('inventory_allocation_policy_revision_id'); }
    /** Shape $ (Value): string.  Value enum: "policy_revision".
     * @return string
     * @throws SdkError When type is omitted; use hasType() or valueOrDefault().
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
}
