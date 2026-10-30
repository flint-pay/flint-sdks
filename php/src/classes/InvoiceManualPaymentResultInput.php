<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read InvoiceInput|array<array-key, mixed>|\stdClass $invoice
 * @property-read InvoiceManualPaymentInput|array<array-key, mixed>|\stdClass $invoice_manual_payment
 * Presence-aware input; omitted fields throw when accessed. */
final class InvoiceManualPaymentResultInput extends Model {
    /** @param array{'invoice': InvoiceInput|array<array-key, mixed>|\stdClass, 'invoice_manual_payment': InvoiceManualPaymentInput|array<array-key, mixed>|\stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InvoiceManualPaymentResultInput')); }
    /** A bill issued to a customer.
     * @return InvoiceInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When invoice is omitted; use hasInvoice() or valueOrDefault().
     */
    public function getInvoice(): mixed { return $this->get('invoice'); }
    public function hasInvoice(): bool { return $this->has('invoice'); }
    /** A recorded offline payment against an invoice. Its amount contributes to invoice paid_money while recorded; reversing it returns its full amount to outstanding_money. A payment can cover principal and late fees. Manual payments are separate from online payment attempts.
     * @return InvoiceManualPaymentInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When invoice_manual_payment is omitted; use hasInvoiceManualPayment() or valueOrDefault().
     */
    public function getInvoiceManualPayment(): mixed { return $this->get('invoice_manual_payment'); }
    public function hasInvoiceManualPayment(): bool { return $this->has('invoice_manual_payment'); }
}
