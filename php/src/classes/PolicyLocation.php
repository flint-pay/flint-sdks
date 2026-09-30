<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int $group_priority
 * @property-read string $location_id
 * Presence-aware response; omitted fields throw when accessed. */
final class PolicyLocation extends Model {
    /** @param array{'group_priority': int, 'location_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PolicyLocation')); }
    /** @return int
     * @throws SdkError When group_priority is omitted; use hasGroupPriority() or valueOrDefault().
     */
    public function getGroupPriority(): int { return $this->get('group_priority'); }
    public function hasGroupPriority(): bool { return $this->has('group_priority'); }
    /** @return string
     * @throws SdkError When location_id is omitted; use hasLocationId() or valueOrDefault().
     */
    public function getLocationId(): string { return $this->get('location_id'); }
    public function hasLocationId(): bool { return $this->has('location_id'); }
}
