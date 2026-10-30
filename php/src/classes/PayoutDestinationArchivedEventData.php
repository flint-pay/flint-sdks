<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read PayoutDestinationArchivedEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class PayoutDestinationArchivedEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PayoutDestinationArchivedEventData')); }
    /** The account that receives merchant payouts.
     * @return PayoutDestinationArchivedEventDataObject
     */
    public function getObject(): PayoutDestinationArchivedEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
