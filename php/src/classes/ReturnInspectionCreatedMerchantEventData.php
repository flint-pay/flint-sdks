<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ReturnInspectionCreatedMerchantEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class ReturnInspectionCreatedMerchantEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnInspectionCreatedMerchantEventData')); }
    /** An assessment of the condition of returned items.
     * @return ReturnInspectionCreatedMerchantEventDataObject
     */
    public function getObject(): ReturnInspectionCreatedMerchantEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
