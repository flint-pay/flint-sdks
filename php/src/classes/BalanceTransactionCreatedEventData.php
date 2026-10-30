<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read BalanceTransactionCreatedEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class BalanceTransactionCreatedEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BalanceTransactionCreatedEventData')); }
    /** A change to the merchant's balance.
     * @return BalanceTransactionCreatedEventDataObject
     */
    public function getObject(): BalanceTransactionCreatedEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
