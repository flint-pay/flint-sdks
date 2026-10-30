<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read BalanceUpdatedEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class BalanceUpdatedEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BalanceUpdatedEventData')); }
    /** Current balances for one currency at observed_at. Available and pending amounts are separate buckets and can be negative. Reserve and held amounts are excluded from available_money.
     * @return BalanceUpdatedEventDataObject
     */
    public function getObject(): BalanceUpdatedEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
