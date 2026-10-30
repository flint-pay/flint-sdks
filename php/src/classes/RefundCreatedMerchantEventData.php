<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read RefundCreatedMerchantEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class RefundCreatedMerchantEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('RefundCreatedMerchantEventData')); }
    /** Money returned against a collected payment.
     * @return RefundCreatedMerchantEventDataObject
     */
    public function getObject(): RefundCreatedMerchantEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
