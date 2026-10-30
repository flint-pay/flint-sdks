<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read DisputeWonEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class DisputeWonEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DisputeWonEventData')); }
    /** A challenge to a collected payment.
     * @return DisputeWonEventDataObject
     */
    public function getObject(): DisputeWonEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
