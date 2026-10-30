<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ReturnResolutionCreatedMerchantEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class ReturnResolutionCreatedMerchantEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnResolutionCreatedMerchantEventData')); }
    /** The refund, exchange, or other outcome of a return.
     * @return ReturnResolutionCreatedMerchantEventDataObject
     */
    public function getObject(): ReturnResolutionCreatedMerchantEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
