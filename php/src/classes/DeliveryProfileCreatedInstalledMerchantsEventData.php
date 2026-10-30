<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read DeliveryProfileCreatedInstalledMerchantsEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class DeliveryProfileCreatedInstalledMerchantsEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryProfileCreatedInstalledMerchantsEventData')); }
    /** Reusable delivery rules assigned to catalog items.
     * @return DeliveryProfileCreatedInstalledMerchantsEventDataObject
     */
    public function getObject(): DeliveryProfileCreatedInstalledMerchantsEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
