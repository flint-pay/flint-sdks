<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ReturnDecisionRecordedInstalledMerchantsEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class ReturnDecisionRecordedInstalledMerchantsEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnDecisionRecordedInstalledMerchantsEventData')); }
    /** A request to send purchased items back.
     * @return ReturnDecisionRecordedInstalledMerchantsEventDataObject
     */
    public function getObject(): ReturnDecisionRecordedInstalledMerchantsEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
