<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read TestClockAdvancingEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class TestClockAdvancingEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('TestClockAdvancingEventData')); }
    /** A sandbox clock that customers created on it, and their subscriptions, read as the current time.
     * @return TestClockAdvancingEventDataObject
     */
    public function getObject(): TestClockAdvancingEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
