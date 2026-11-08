<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read Invoice $invoice
 * @property-read InvoiceManualPayment $invoice_manual_payment
 * Presence-aware response; omitted optional fields return null. */
final class InvoiceManualPaymentResult extends Model {
    /** @param array{'invoice': mixed, 'invoice_manual_payment': mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InvoiceManualPaymentResult')); }
    /** The invoice with balances and supported_actions after this request. A bill issued to a customer.
     * @return Invoice
     */
    public function getInvoice(): Invoice { return $this->get('invoice'); }
    public function hasInvoice(): bool { return $this->has('invoice'); }
    /** The offline payment recorded or reversed by this request. A recorded offline payment against an invoice. Its amount contributes to invoice paid_money while recorded. Reversing it restores outstanding_money, or written_off_money if the invoice was written off. A payment can cover principal and late fees. Manual payments are separate from online payment attempts.
     * @return InvoiceManualPayment
     */
    public function getInvoiceManualPayment(): InvoiceManualPayment { return $this->get('invoice_manual_payment'); }
    public function hasInvoiceManualPayment(): bool { return $this->has('invoice_manual_payment'); }
}
