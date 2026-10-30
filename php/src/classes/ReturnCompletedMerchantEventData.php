<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ReturnCompletedMerchantEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class ReturnCompletedMerchantEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnCompletedMerchantEventData')); }
    /** A request to send purchased items back.
     * @return ReturnCompletedMerchantEventDataObject
     */
    public function getObject(): ReturnCompletedMerchantEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
