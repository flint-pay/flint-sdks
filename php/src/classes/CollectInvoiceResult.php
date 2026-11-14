<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read Invoice $invoice
 * @property-read InvoicePaymentAttempt $invoice_payment_attempt
 * Presence-aware response; omitted optional fields return null. */
final class CollectInvoiceResult extends Model {
    /** @param array{'invoice': mixed, 'invoice_payment_attempt': mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CollectInvoiceResult')); }
    /** The invoice as it stands after this collection request. Send its `version` as `expected_version` on later invoice writes. A bill issued to a customer.
     * @return Invoice
     */
    public function getInvoice(): Invoice { return $this->get('invoice'); }
    public function hasInvoice(): bool { return $this->has('invoice'); }
    /** The invoice payment attempt this collect request started or reused. A repeat of the same request returns the existing attempt. Read its `status` to follow the charge. An attempt to collect payment for an invoice.
     * @return InvoicePaymentAttempt
     */
    public function getInvoicePaymentAttempt(): InvoicePaymentAttempt { return $this->get('invoice_payment_attempt'); }
    public function hasInvoicePaymentAttempt(): bool { return $this->has('invoice_payment_attempt'); }
}
