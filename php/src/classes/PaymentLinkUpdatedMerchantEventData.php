<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read PaymentLinkUpdatedMerchantEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class PaymentLinkUpdatedMerchantEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentLinkUpdatedMerchantEventData')); }
    /** A reusable link that opens checkout.
     * @return PaymentLinkUpdatedMerchantEventDataObject
     */
    public function getObject(): PaymentLinkUpdatedMerchantEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
