<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read OrderInventoryExceptionResolvedMerchantEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class OrderInventoryExceptionResolvedMerchantEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrderInventoryExceptionResolvedMerchantEventData')); }
    /** A customer's purchase and its payment and fulfillment progress.
     * @return OrderInventoryExceptionResolvedMerchantEventDataObject
     */
    public function getObject(): OrderInventoryExceptionResolvedMerchantEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
