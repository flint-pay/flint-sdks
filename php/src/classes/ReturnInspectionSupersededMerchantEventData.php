<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ReturnInspectionSupersededMerchantEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class ReturnInspectionSupersededMerchantEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnInspectionSupersededMerchantEventData')); }
    /** An assessment of the condition of returned items.
     * @return ReturnInspectionSupersededMerchantEventDataObject
     */
    public function getObject(): ReturnInspectionSupersededMerchantEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
