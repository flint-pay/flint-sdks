<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read CreditNoteAllocationCreatedMerchantEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class CreditNoteAllocationCreatedMerchantEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreditNoteAllocationCreatedMerchantEventData')); }
    /** One application of credit to the invoice. Allocations are append-only: a reversal sets reversed_at rather than removing the row.
     * @return CreditNoteAllocationCreatedMerchantEventDataObject
     */
    public function getObject(): CreditNoteAllocationCreatedMerchantEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
