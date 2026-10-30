<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ReturnCreatedMerchantEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class ReturnCreatedMerchantEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnCreatedMerchantEventData')); }
    /** A request to send purchased items back.
     * @return ReturnCreatedMerchantEventDataObject
     */
    public function getObject(): ReturnCreatedMerchantEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
