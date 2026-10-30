<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read DeliveryLocationSetDeactivatedInstalledMerchantsEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class DeliveryLocationSetDeactivatedInstalledMerchantsEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryLocationSetDeactivatedInstalledMerchantsEventData')); }
    /** The locations available to a delivery method.
     * @return DeliveryLocationSetDeactivatedInstalledMerchantsEventDataObject
     */
    public function getObject(): DeliveryLocationSetDeactivatedInstalledMerchantsEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
