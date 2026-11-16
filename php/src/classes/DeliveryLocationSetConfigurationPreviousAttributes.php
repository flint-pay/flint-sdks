<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<string>|null $location_ids
 * Presence-aware response; omitted optional fields return null. */
final class DeliveryLocationSetConfigurationPreviousAttributes extends Model {
    /** @param array{'location_ids'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryLocationSetConfigurationPreviousAttributes')); }
    /** IDs of the Locations in the set, from 1 to 1,000. An allocated origin group accepts at most 25. anyOf[1] (Value): Array of string. IDs of the Locations in the set, from 1 to 1,000. An allocated origin group accepts at most 25. anyOf[1][] (Value): string. minLength: 1. anyOf[2] (Value): null.
     * @return list<string>|null
     */
    public function getLocationIds(): array|null { return $this->get('location_ids'); }
    public function hasLocationIds(): bool { return $this->has('location_ids'); }
}
