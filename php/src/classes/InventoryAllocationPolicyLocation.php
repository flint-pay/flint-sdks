<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int $group_priority
 * @property-read string $location_id
 * Presence-aware response; omitted optional fields return null. */
final class InventoryAllocationPolicyLocation extends Model {
    /** @param array{'group_priority': int, 'location_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventoryAllocationPolicyLocation')); }
    /** Format: int32. minimum: 1.
     * @return int
     */
    public function getGroupPriority(): int { return $this->get('group_priority'); }
    public function hasGroupPriority(): bool { return $this->has('group_priority'); }
    /** minLength: 1.
     * @return string
     */
    public function getLocationId(): string { return $this->get('location_id'); }
    public function hasLocationId(): bool { return $this->has('location_id'); }
}
