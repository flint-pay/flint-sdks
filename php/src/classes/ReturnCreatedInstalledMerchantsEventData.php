<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ReturnCreatedInstalledMerchantsEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class ReturnCreatedInstalledMerchantsEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnCreatedInstalledMerchantsEventData')); }
    /** A request to send purchased items back.
     * @return ReturnCreatedInstalledMerchantsEventDataObject
     */
    public function getObject(): ReturnCreatedInstalledMerchantsEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
