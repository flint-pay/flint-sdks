<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read PayoutCreatedEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class PayoutCreatedEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PayoutCreatedEventData')); }
    /** Funds sent from a merchant balance to a payout destination.
     * @return PayoutCreatedEventDataObject
     */
    public function getObject(): PayoutCreatedEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
