<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read RefundFailedMerchantEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class RefundFailedMerchantEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('RefundFailedMerchantEventData')); }
    /** Money returned against a collected payment.
     * @return RefundFailedMerchantEventDataObject
     */
    public function getObject(): RefundFailedMerchantEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
