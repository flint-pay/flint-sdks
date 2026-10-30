<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ReturnCompletedInstalledMerchantsEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class ReturnCompletedInstalledMerchantsEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnCompletedInstalledMerchantsEventData')); }
    /** A request to send purchased items back.
     * @return ReturnCompletedInstalledMerchantsEventDataObject
     */
    public function getObject(): ReturnCompletedInstalledMerchantsEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
