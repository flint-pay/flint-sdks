<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ReturnInspectionAcceptanceDecidedMerchantEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class ReturnInspectionAcceptanceDecidedMerchantEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnInspectionAcceptanceDecidedMerchantEventData')); }
    /** An assessment of the condition of returned items.
     * @return ReturnInspectionAcceptanceDecidedMerchantEventDataObject
     */
    public function getObject(): ReturnInspectionAcceptanceDecidedMerchantEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
