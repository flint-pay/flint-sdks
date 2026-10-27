<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read Invoice $invoice
 * @property-read InvoicePaymentAttempt|null $invoice_payment_attempt
 * Presence-aware response; omitted optional fields return null. */
final class CollectInvoiceResult extends Model {
    /** @param array{'invoice': mixed, 'invoice_payment_attempt': mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CollectInvoiceResult')); }
    /** Shape $ (Value): {@see Invoice}. A bill issued to a customer.
     * @return Invoice
     */
    public function getInvoice(): Invoice { return $this->get('invoice'); }
    public function hasInvoice(): bool { return $this->has('invoice'); }
    /** Shape $ (Value): {@see InvoicePaymentAttempt} or null. Shape $.anyOf[1] (Value): {@see InvoicePaymentAttempt}. An attempt to collect payment for an invoice. Shape $.anyOf[2] (Value): null.
     * @return InvoicePaymentAttempt|null
     */
    public function getInvoicePaymentAttempt(): InvoicePaymentAttempt|null { return $this->get('invoice_payment_attempt'); }
    public function hasInvoicePaymentAttempt(): bool { return $this->has('invoice_payment_attempt'); }
}
