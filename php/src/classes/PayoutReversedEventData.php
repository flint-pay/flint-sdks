<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read PayoutReversedEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class PayoutReversedEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PayoutReversedEventData')); }
    /** Funds sent from a merchant balance to a payout destination.
     * @return PayoutReversedEventDataObject
     */
    public function getObject(): PayoutReversedEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
