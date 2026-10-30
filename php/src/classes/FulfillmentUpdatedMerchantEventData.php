<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read FulfillmentUpdatedMerchantEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class FulfillmentUpdatedMerchantEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('FulfillmentUpdatedMerchantEventData')); }
    /** Work required to deliver an order's items.
     * @return FulfillmentUpdatedMerchantEventDataObject
     */
    public function getObject(): FulfillmentUpdatedMerchantEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
