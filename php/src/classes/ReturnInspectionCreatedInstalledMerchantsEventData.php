<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ReturnInspectionCreatedInstalledMerchantsEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class ReturnInspectionCreatedInstalledMerchantsEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnInspectionCreatedInstalledMerchantsEventData')); }
    /** An assessment of the condition of returned items.
     * @return ReturnInspectionCreatedInstalledMerchantsEventDataObject
     */
    public function getObject(): ReturnInspectionCreatedInstalledMerchantsEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
