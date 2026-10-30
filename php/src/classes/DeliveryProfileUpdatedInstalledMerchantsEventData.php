<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read DeliveryProfileUpdatedInstalledMerchantsEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class DeliveryProfileUpdatedInstalledMerchantsEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryProfileUpdatedInstalledMerchantsEventData')); }
    /** Reusable delivery rules assigned to catalog items.
     * @return DeliveryProfileUpdatedInstalledMerchantsEventDataObject
     */
    public function getObject(): DeliveryProfileUpdatedInstalledMerchantsEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
