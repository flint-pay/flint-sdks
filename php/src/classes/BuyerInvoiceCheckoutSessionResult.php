<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read CheckoutAccess $checkout_access
 * @property-read CheckoutSession $checkout_session
 * @property-read HostedCheckout $hosted_checkout
 * @property-read BuyerInvoice $invoice
 * @property-read InvoicePaymentAttempt $invoice_payment_attempt
 * @property-read bool $reused_existing
 * Presence-aware response; omitted fields throw when accessed. */
final class BuyerInvoiceCheckoutSessionResult extends Model {
    /** @param array{'checkout_access': mixed, 'checkout_session': mixed, 'hosted_checkout'?: object{'checkout_auth_token': string, 'url': string}, 'invoice': mixed, 'invoice_payment_attempt'?: mixed, 'reused_existing': bool, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BuyerInvoiceCheckoutSessionResult')); }
    /** @return CheckoutAccess
     * @throws SdkError When checkout_access is omitted; use hasCheckoutAccess() or valueOrDefault().
     */
    public function getCheckoutAccess(): CheckoutAccess { return $this->get('checkout_access'); }
    public function hasCheckoutAccess(): bool { return $this->has('checkout_access'); }
    /** @return CheckoutSession
     * @throws SdkError When checkout_session is omitted; use hasCheckoutSession() or valueOrDefault().
     */
    public function getCheckoutSession(): CheckoutSession { return $this->get('checkout_session'); }
    public function hasCheckoutSession(): bool { return $this->has('checkout_session'); }
    /** @return HostedCheckout
     * @throws SdkError When hosted_checkout is omitted; use hasHostedCheckout() or valueOrDefault().
     */
    public function getHostedCheckout(): HostedCheckout { return $this->get('hosted_checkout'); }
    public function hasHostedCheckout(): bool { return $this->has('hosted_checkout'); }
    /** @return BuyerInvoice
     * @throws SdkError When invoice is omitted; use hasInvoice() or valueOrDefault().
     */
    public function getInvoice(): BuyerInvoice { return $this->get('invoice'); }
    public function hasInvoice(): bool { return $this->has('invoice'); }
    /** @return InvoicePaymentAttempt
     * @throws SdkError When invoice_payment_attempt is omitted; use hasInvoicePaymentAttempt() or valueOrDefault().
     */
    public function getInvoicePaymentAttempt(): InvoicePaymentAttempt { return $this->get('invoice_payment_attempt'); }
    public function hasInvoicePaymentAttempt(): bool { return $this->has('invoice_payment_attempt'); }
    /** @return bool
     * @throws SdkError When reused_existing is omitted; use hasReusedExisting() or valueOrDefault().
     */
    public function getReusedExisting(): bool { return $this->get('reused_existing'); }
    public function hasReusedExisting(): bool { return $this->has('reused_existing'); }
}
