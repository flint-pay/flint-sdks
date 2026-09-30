<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $allocation_status
 * @property-read string $created_at
 * @property-read string $inventory_revision
 * @property-read string $updated_at
 * Presence-aware response; omitted fields throw when accessed. */
final class LocationInventory extends Model {
    /** @param array{'allocation_status': string, 'created_at': string, 'inventory_revision': string, 'updated_at': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('LocationInventory')); }
    /** @return string
     * @throws SdkError When allocation_status is omitted; use hasAllocationStatus() or valueOrDefault().
     */
    public function getAllocationStatus(): string { return $this->get('allocation_status'); }
    public function hasAllocationStatus(): bool { return $this->has('allocation_status'); }
    /** @return string
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** @return string
     * @throws SdkError When inventory_revision is omitted; use hasInventoryRevision() or valueOrDefault().
     */
    public function getInventoryRevision(): string { return $this->get('inventory_revision'); }
    public function hasInventoryRevision(): bool { return $this->has('inventory_revision'); }
    /** @return string
     * @throws SdkError When updated_at is omitted; use hasUpdatedAt() or valueOrDefault().
     */
    public function getUpdatedAt(): string { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
}
