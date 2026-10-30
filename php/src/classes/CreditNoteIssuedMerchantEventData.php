<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read CreditNoteIssuedMerchantEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class CreditNoteIssuedMerchantEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreditNoteIssuedMerchantEventData')); }
    /** A correction against an issued invoice. Credit notes reduce what is owed; refunds return what was already collected.
     * @return CreditNoteIssuedMerchantEventDataObject
     */
    public function getObject(): CreditNoteIssuedMerchantEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
