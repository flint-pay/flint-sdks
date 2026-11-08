<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?string $checkout_auth_token
 * @property-read CheckoutSession $checkout_session
 * @property-read Invoice $invoice
 * @property-read ?InvoicePaymentAttempt $invoice_payment_attempt
 * Presence-aware response; omitted optional fields return null. */
final class InvoiceCheckoutSessionResult extends Model {
    /** @param array{'checkout_auth_token'?: string, 'checkout_session': mixed, 'invoice': mixed, 'invoice_payment_attempt'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InvoiceCheckoutSessionResult')); }
    /** Checkout credential for embedded launches. Send it as Authorization: Bearer <checkout_auth_token>. Omitted for hosted launches, which return checkout_session.url instead.
     * @return ?string
     */
    public function getCheckoutAuthToken(): ?string { return $this->get('checkout_auth_token'); }
    public function hasCheckoutAuthToken(): bool { return $this->has('checkout_auth_token'); }
    /** The checkout session created to collect the invoice or selected schedule entry. A session in which a buyer completes an order's payment.
     * @return CheckoutSession
     */
    public function getCheckoutSession(): CheckoutSession { return $this->get('checkout_session'); }
    public function hasCheckoutSession(): bool { return $this->has('checkout_session'); }
    /** The invoice the checkout session collects, with its current balance. A bill issued to a customer.
     * @return Invoice
     */
    public function getInvoice(): Invoice { return $this->get('invoice'); }
    public function hasInvoice(): bool { return $this->has('invoice'); }
    /** The invoice payment attempt started for this checkout session. An attempt to collect payment for an invoice.
     * @return ?InvoicePaymentAttempt
     */
    public function getInvoicePaymentAttempt(): ?InvoicePaymentAttempt { return $this->get('invoice_payment_attempt'); }
    public function hasInvoicePaymentAttempt(): bool { return $this->has('invoice_payment_attempt'); }
}
