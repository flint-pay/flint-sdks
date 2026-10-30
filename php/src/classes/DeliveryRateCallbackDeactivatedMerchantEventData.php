<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read DeliveryRateCallbackDeactivatedMerchantEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class DeliveryRateCallbackDeactivatedMerchantEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryRateCallbackDeactivatedMerchantEventData')); }
    /** An endpoint that supplies delivery rates.
     * @return DeliveryRateCallbackDeactivatedMerchantEventDataObject
     */
    public function getObject(): DeliveryRateCallbackDeactivatedMerchantEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
