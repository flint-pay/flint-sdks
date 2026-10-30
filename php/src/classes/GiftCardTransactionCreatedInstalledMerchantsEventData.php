<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read GiftCardTransactionCreatedInstalledMerchantsEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class GiftCardTransactionCreatedInstalledMerchantsEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('GiftCardTransactionCreatedInstalledMerchantsEventData')); }
    /** Immutable posted financial movement with signed amount, per-card sequence, merchant sequence and balance snapshots. Corrections create new transactions.
     * @return GiftCardTransactionCreatedInstalledMerchantsEventDataObject
     */
    public function getObject(): GiftCardTransactionCreatedInstalledMerchantsEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
