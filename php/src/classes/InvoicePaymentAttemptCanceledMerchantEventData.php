<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read InvoicePaymentAttemptCanceledMerchantEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class InvoicePaymentAttemptCanceledMerchantEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InvoicePaymentAttemptCanceledMerchantEventData')); }
    /** An attempt to collect payment for an invoice.
     * @return InvoicePaymentAttemptCanceledMerchantEventDataObject
     */
    public function getObject(): InvoicePaymentAttemptCanceledMerchantEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
