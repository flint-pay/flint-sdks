<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read DeliveryRateCallbackArchivedInstalledMerchantsEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class DeliveryRateCallbackArchivedInstalledMerchantsEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryRateCallbackArchivedInstalledMerchantsEventData')); }
    /** An endpoint that supplies delivery rates.
     * @return DeliveryRateCallbackArchivedInstalledMerchantsEventDataObject
     */
    public function getObject(): DeliveryRateCallbackArchivedInstalledMerchantsEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
