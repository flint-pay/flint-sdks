<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read CreditNoteIssuedInstalledMerchantsEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class CreditNoteIssuedInstalledMerchantsEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreditNoteIssuedInstalledMerchantsEventData')); }
    /** A correction against an issued invoice. Credit notes reduce what is owed; refunds return what was already collected.
     * @return CreditNoteIssuedInstalledMerchantsEventDataObject
     */
    public function getObject(): CreditNoteIssuedInstalledMerchantsEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
