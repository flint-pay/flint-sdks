<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read RefundCreatedInstalledMerchantsEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class RefundCreatedInstalledMerchantsEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('RefundCreatedInstalledMerchantsEventData')); }
    /** Money returned against a collected payment.
     * @return RefundCreatedInstalledMerchantsEventDataObject
     */
    public function getObject(): RefundCreatedInstalledMerchantsEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
