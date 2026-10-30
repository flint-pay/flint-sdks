<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ReturnReceiptSupersededMerchantEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class ReturnReceiptSupersededMerchantEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnReceiptSupersededMerchantEventData')); }
    /** A record of returned items arriving at a location.
     * @return ReturnReceiptSupersededMerchantEventDataObject
     */
    public function getObject(): ReturnReceiptSupersededMerchantEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
