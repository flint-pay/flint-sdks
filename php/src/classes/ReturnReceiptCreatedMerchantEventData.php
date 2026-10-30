<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ReturnReceiptCreatedMerchantEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class ReturnReceiptCreatedMerchantEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnReceiptCreatedMerchantEventData')); }
    /** A record of returned items arriving at a location.
     * @return ReturnReceiptCreatedMerchantEventDataObject
     */
    public function getObject(): ReturnReceiptCreatedMerchantEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
