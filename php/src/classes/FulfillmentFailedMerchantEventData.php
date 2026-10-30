<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read FulfillmentFailedMerchantEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class FulfillmentFailedMerchantEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('FulfillmentFailedMerchantEventData')); }
    /** Work required to deliver an order's items.
     * @return FulfillmentFailedMerchantEventDataObject
     */
    public function getObject(): FulfillmentFailedMerchantEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
