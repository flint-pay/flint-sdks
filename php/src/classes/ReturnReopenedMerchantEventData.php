<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ReturnReopenedMerchantEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class ReturnReopenedMerchantEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnReopenedMerchantEventData')); }
    /** A request to send purchased items back.
     * @return ReturnReopenedMerchantEventDataObject
     */
    public function getObject(): ReturnReopenedMerchantEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
