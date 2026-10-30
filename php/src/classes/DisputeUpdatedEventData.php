<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read DisputeUpdatedEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class DisputeUpdatedEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DisputeUpdatedEventData')); }
    /** A challenge to a collected payment.
     * @return DisputeUpdatedEventDataObject
     */
    public function getObject(): DisputeUpdatedEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
