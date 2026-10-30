<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read DeliveryRateCallbackCreatedInstalledMerchantsEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class DeliveryRateCallbackCreatedInstalledMerchantsEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryRateCallbackCreatedInstalledMerchantsEventData')); }
    /** An endpoint that supplies delivery rates.
     * @return DeliveryRateCallbackCreatedInstalledMerchantsEventDataObject
     */
    public function getObject(): DeliveryRateCallbackCreatedInstalledMerchantsEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
