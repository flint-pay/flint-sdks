<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read PayoutDestinationUpdatedEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class PayoutDestinationUpdatedEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PayoutDestinationUpdatedEventData')); }
    /** The account that receives merchant payouts.
     * @return PayoutDestinationUpdatedEventDataObject
     */
    public function getObject(): PayoutDestinationUpdatedEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
