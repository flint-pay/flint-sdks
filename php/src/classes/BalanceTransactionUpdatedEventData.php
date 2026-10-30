<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read BalanceTransactionUpdatedEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class BalanceTransactionUpdatedEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BalanceTransactionUpdatedEventData')); }
    /** A change to the merchant's balance.
     * @return BalanceTransactionUpdatedEventDataObject
     */
    public function getObject(): BalanceTransactionUpdatedEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
