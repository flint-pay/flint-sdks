<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read RefundFailedInstalledMerchantsEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class RefundFailedInstalledMerchantsEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('RefundFailedInstalledMerchantsEventData')); }
    /** Money returned against a collected payment.
     * @return RefundFailedInstalledMerchantsEventDataObject
     */
    public function getObject(): RefundFailedInstalledMerchantsEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
