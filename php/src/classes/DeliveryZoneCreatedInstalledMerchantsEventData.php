<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read DeliveryZoneCreatedInstalledMerchantsEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class DeliveryZoneCreatedInstalledMerchantsEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryZoneCreatedInstalledMerchantsEventData')); }
    /** A geographic area served by a delivery method.
     * @return DeliveryZoneCreatedInstalledMerchantsEventDataObject
     */
    public function getObject(): DeliveryZoneCreatedInstalledMerchantsEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
