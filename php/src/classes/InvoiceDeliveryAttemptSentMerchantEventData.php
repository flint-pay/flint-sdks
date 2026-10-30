<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read InvoiceDeliveryAttemptSentMerchantEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class InvoiceDeliveryAttemptSentMerchantEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InvoiceDeliveryAttemptSentMerchantEventData')); }
    /** One attempt to deliver an invoice by email, either the original send or a reminder, with its recipients and status.
     * @return InvoiceDeliveryAttemptSentMerchantEventDataObject
     */
    public function getObject(): InvoiceDeliveryAttemptSentMerchantEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
