<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read InvoiceInput|array<array-key, mixed>|\stdClass $invoice
 * @property-read InvoicePaymentAttemptInput|array<array-key, mixed>|\stdClass $invoice_payment_attempt
 * Presence-aware input; omitted fields throw when accessed. */
final class CollectInvoiceResultInput extends Model {
    /** @param array{'invoice': InvoiceInput|array<array-key, mixed>|\stdClass, 'invoice_payment_attempt': InvoicePaymentAttemptInput|array<array-key, mixed>|\stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CollectInvoiceResultInput')); }
    /** The invoice as it stands after this collection request. Send its `version` as `expected_version` on later invoice writes. A bill issued to a customer.
     * @return InvoiceInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When invoice is omitted; use hasInvoice() or valueOrDefault().
     */
    public function getInvoice(): mixed { return $this->get('invoice'); }
    public function hasInvoice(): bool { return $this->has('invoice'); }
    /** The invoice payment attempt this collect request started or reused. A repeat of the same request returns the existing attempt. Read its `status` to follow the charge. An attempt to collect payment for an invoice.
     * @return InvoicePaymentAttemptInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When invoice_payment_attempt is omitted; use hasInvoicePaymentAttempt() or valueOrDefault().
     */
    public function getInvoicePaymentAttempt(): mixed { return $this->get('invoice_payment_attempt'); }
    public function hasInvoicePaymentAttempt(): bool { return $this->has('invoice_payment_attempt'); }
}
