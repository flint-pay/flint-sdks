<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $allocation_status
 * Presence-aware input; omitted fields throw when accessed. */
final class LocationInventoryRequestInput extends Model {
    /** @param array{'allocation_status'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('LocationInventoryRequestInput')); }
    /** @return string
     * @throws SdkError When allocation_status is omitted; use hasAllocationStatus() or valueOrDefault().
     */
    public function getAllocationStatus(): string { return $this->get('allocation_status'); }
    public function hasAllocationStatus(): bool { return $this->has('allocation_status'); }
}
