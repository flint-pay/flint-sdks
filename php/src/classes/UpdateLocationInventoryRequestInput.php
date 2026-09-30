<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $allocation_status
 * @property-read string $expected_inventory_revision
 * Presence-aware input; omitted fields throw when accessed. */
final class UpdateLocationInventoryRequestInput extends Model {
    /** @param array{'allocation_status': string, 'expected_inventory_revision'?: string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('UpdateLocationInventoryRequestInput')); }
    /** @return string
     * @throws SdkError When allocation_status is omitted; use hasAllocationStatus() or valueOrDefault().
     */
    public function getAllocationStatus(): string { return $this->get('allocation_status'); }
    public function hasAllocationStatus(): bool { return $this->has('allocation_status'); }
    /** @return string
     * @throws SdkError When expected_inventory_revision is omitted; use hasExpectedInventoryRevision() or valueOrDefault().
     */
    public function getExpectedInventoryRevision(): string { return $this->get('expected_inventory_revision'); }
    public function hasExpectedInventoryRevision(): bool { return $this->has('expected_inventory_revision'); }
}
