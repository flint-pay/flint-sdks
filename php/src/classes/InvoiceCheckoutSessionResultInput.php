<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $checkout_auth_token
 * @property-read CheckoutSessionInput|array<array-key, mixed>|\stdClass $checkout_session
 * @property-read InvoiceInput|array<array-key, mixed>|\stdClass $invoice
 * @property-read InvoicePaymentAttemptInput|array<array-key, mixed>|\stdClass $invoice_payment_attempt
 * Presence-aware input; omitted fields throw when accessed. */
final class InvoiceCheckoutSessionResultInput extends Model {
    /** @param array{'checkout_auth_token': string, 'checkout_session': CheckoutSessionInput|array<array-key, mixed>|\stdClass, 'invoice': InvoiceInput|array<array-key, mixed>|\stdClass, 'invoice_payment_attempt'?: InvoicePaymentAttemptInput|array<array-key, mixed>|\stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InvoiceCheckoutSessionResultInput')); }
    /** checkout_auth_token
     * @return string
     * @throws SdkError When checkout_auth_token is omitted; use hasCheckoutAuthToken() or valueOrDefault().
     */
    public function getCheckoutAuthToken(): string { return $this->get('checkout_auth_token'); }
    public function hasCheckoutAuthToken(): bool { return $this->has('checkout_auth_token'); }
    /** A session in which a buyer completes an order's payment.
     * @return CheckoutSessionInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When checkout_session is omitted; use hasCheckoutSession() or valueOrDefault().
     */
    public function getCheckoutSession(): mixed { return $this->get('checkout_session'); }
    public function hasCheckoutSession(): bool { return $this->has('checkout_session'); }
    /** A bill issued to a customer.
     * @return InvoiceInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When invoice is omitted; use hasInvoice() or valueOrDefault().
     */
    public function getInvoice(): mixed { return $this->get('invoice'); }
    public function hasInvoice(): bool { return $this->has('invoice'); }
    /** An attempt to collect payment for an invoice.
     * @return InvoicePaymentAttemptInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When invoice_payment_attempt is omitted; use hasInvoicePaymentAttempt() or valueOrDefault().
     */
    public function getInvoicePaymentAttempt(): mixed { return $this->get('invoice_payment_attempt'); }
    public function hasInvoicePaymentAttempt(): bool { return $this->has('invoice_payment_attempt'); }
}
