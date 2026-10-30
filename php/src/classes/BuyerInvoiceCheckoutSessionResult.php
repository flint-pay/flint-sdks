<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $checkout_auth_token
 * @property-read BuyerCheckoutSession $checkout_session
 * @property-read BuyerInvoice $invoice
 * @property-read ?InvoicePaymentAttempt $invoice_payment_attempt
 * Presence-aware response; omitted optional fields return null. */
final class BuyerInvoiceCheckoutSessionResult extends Model {
    /** @param array{'checkout_auth_token': string, 'checkout_session': mixed, 'invoice': mixed, 'invoice_payment_attempt'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BuyerInvoiceCheckoutSessionResult')); }
    /** checkout_auth_token
     * @return string
     */
    public function getCheckoutAuthToken(): string { return $this->get('checkout_auth_token'); }
    public function hasCheckoutAuthToken(): bool { return $this->has('checkout_auth_token'); }
    /** A session in which a buyer completes an order's payment.
     * @return BuyerCheckoutSession
     */
    public function getCheckoutSession(): BuyerCheckoutSession { return $this->get('checkout_session'); }
    public function hasCheckoutSession(): bool { return $this->has('checkout_session'); }
    /** A bill issued to a customer.
     * @return BuyerInvoice
     */
    public function getInvoice(): BuyerInvoice { return $this->get('invoice'); }
    public function hasInvoice(): bool { return $this->has('invoice'); }
    /** An attempt to collect payment for an invoice.
     * @return ?InvoicePaymentAttempt
     */
    public function getInvoicePaymentAttempt(): ?InvoicePaymentAttempt { return $this->get('invoice_payment_attempt'); }
    public function hasInvoicePaymentAttempt(): bool { return $this->has('invoice_payment_attempt'); }
}
