<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read DeliveryRateCallbackActivatedMerchantEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class DeliveryRateCallbackActivatedMerchantEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryRateCallbackActivatedMerchantEventData')); }
    /** An endpoint that supplies delivery rates.
     * @return DeliveryRateCallbackActivatedMerchantEventDataObject
     */
    public function getObject(): DeliveryRateCallbackActivatedMerchantEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
