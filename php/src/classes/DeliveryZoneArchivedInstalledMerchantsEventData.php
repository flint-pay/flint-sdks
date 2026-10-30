<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read DeliveryZoneArchivedInstalledMerchantsEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class DeliveryZoneArchivedInstalledMerchantsEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryZoneArchivedInstalledMerchantsEventData')); }
    /** A geographic area served by a delivery method.
     * @return DeliveryZoneArchivedInstalledMerchantsEventDataObject
     */
    public function getObject(): DeliveryZoneArchivedInstalledMerchantsEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
