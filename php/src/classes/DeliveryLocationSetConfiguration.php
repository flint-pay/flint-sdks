<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<string> $location_ids
 * Presence-aware response; omitted optional fields return null. */
final class DeliveryLocationSetConfiguration extends Model {
    /** @param array{'location_ids': list<string>, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryLocationSetConfiguration')); }
    /** IDs of the Locations in the set, from 1 to 1,000. An allocated origin group accepts at most 25. [] (Value): string. minLength: 1.
     * @return list<string>
     */
    public function getLocationIds(): array { return $this->get('location_ids'); }
    public function hasLocationIds(): bool { return $this->has('location_ids'); }
}
