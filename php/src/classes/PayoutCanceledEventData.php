<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read PayoutCanceledEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class PayoutCanceledEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PayoutCanceledEventData')); }
    /** Funds sent from a merchant balance to a payout destination.
     * @return PayoutCanceledEventDataObject
     */
    public function getObject(): PayoutCanceledEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
