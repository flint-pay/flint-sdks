<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read DeliveryLocationSetArchivedInstalledMerchantsEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class DeliveryLocationSetArchivedInstalledMerchantsEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryLocationSetArchivedInstalledMerchantsEventData')); }
    /** The locations available to a delivery method.
     * @return DeliveryLocationSetArchivedInstalledMerchantsEventDataObject
     */
    public function getObject(): DeliveryLocationSetArchivedInstalledMerchantsEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
