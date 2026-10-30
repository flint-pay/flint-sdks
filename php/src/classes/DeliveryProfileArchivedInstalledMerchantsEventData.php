<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read DeliveryProfileArchivedInstalledMerchantsEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class DeliveryProfileArchivedInstalledMerchantsEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryProfileArchivedInstalledMerchantsEventData')); }
    /** Reusable delivery rules assigned to catalog items.
     * @return DeliveryProfileArchivedInstalledMerchantsEventDataObject
     */
    public function getObject(): DeliveryProfileArchivedInstalledMerchantsEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
