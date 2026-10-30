<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read DeliveryProfileDeactivatedInstalledMerchantsEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class DeliveryProfileDeactivatedInstalledMerchantsEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryProfileDeactivatedInstalledMerchantsEventData')); }
    /** Reusable delivery rules assigned to catalog items.
     * @return DeliveryProfileDeactivatedInstalledMerchantsEventDataObject
     */
    public function getObject(): DeliveryProfileDeactivatedInstalledMerchantsEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
