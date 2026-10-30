<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read RefundUpdatedInstalledMerchantsEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class RefundUpdatedInstalledMerchantsEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('RefundUpdatedInstalledMerchantsEventData')); }
    /** Money returned against a collected payment.
     * @return RefundUpdatedInstalledMerchantsEventDataObject
     */
    public function getObject(): RefundUpdatedInstalledMerchantsEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
