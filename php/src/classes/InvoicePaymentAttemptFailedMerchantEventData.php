<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read InvoicePaymentAttemptFailedMerchantEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class InvoicePaymentAttemptFailedMerchantEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InvoicePaymentAttemptFailedMerchantEventData')); }
    /** An attempt to collect payment for an invoice.
     * @return InvoicePaymentAttemptFailedMerchantEventDataObject
     */
    public function getObject(): InvoicePaymentAttemptFailedMerchantEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
