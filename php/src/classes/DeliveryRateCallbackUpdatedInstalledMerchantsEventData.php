<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read DeliveryRateCallbackUpdatedInstalledMerchantsEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class DeliveryRateCallbackUpdatedInstalledMerchantsEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryRateCallbackUpdatedInstalledMerchantsEventData')); }
    /** An endpoint that supplies delivery rates.
     * @return DeliveryRateCallbackUpdatedInstalledMerchantsEventDataObject
     */
    public function getObject(): DeliveryRateCallbackUpdatedInstalledMerchantsEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
