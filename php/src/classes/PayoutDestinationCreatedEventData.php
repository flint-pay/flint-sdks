<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read PayoutDestinationCreatedEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class PayoutDestinationCreatedEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PayoutDestinationCreatedEventData')); }
    /** The account that receives merchant payouts.
     * @return PayoutDestinationCreatedEventDataObject
     */
    public function getObject(): PayoutDestinationCreatedEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
