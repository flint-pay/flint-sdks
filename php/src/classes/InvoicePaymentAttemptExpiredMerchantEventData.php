<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read InvoicePaymentAttemptExpiredMerchantEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class InvoicePaymentAttemptExpiredMerchantEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InvoicePaymentAttemptExpiredMerchantEventData')); }
    /** An attempt to collect payment for an invoice.
     * @return InvoicePaymentAttemptExpiredMerchantEventDataObject
     */
    public function getObject(): InvoicePaymentAttemptExpiredMerchantEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
