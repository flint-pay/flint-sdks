<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read DisputePreventedEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class DisputePreventedEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DisputePreventedEventData')); }
    /** A challenge to a collected payment.
     * @return DisputePreventedEventDataObject
     */
    public function getObject(): DisputePreventedEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
