<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read CheckoutAccessInput|array<array-key, mixed>|\stdClass $checkout_access
 * @property-read CheckoutSessionInput|array<array-key, mixed>|\stdClass $checkout_session
 * Presence-aware input; omitted fields throw when accessed. */
final class CheckoutCustomerVerificationConfirmationInput extends Model {
    /** @param array{'checkout_access'?: CheckoutAccessInput|array<array-key, mixed>|\stdClass, 'checkout_session': CheckoutSessionInput|array<array-key, mixed>|\stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CheckoutCustomerVerificationConfirmationInput')); }
    /** @return CheckoutAccessInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When checkout_access is omitted; use hasCheckoutAccess() or valueOrDefault().
     */
    public function getCheckoutAccess(): mixed { return $this->get('checkout_access'); }
    public function hasCheckoutAccess(): bool { return $this->has('checkout_access'); }
    /** @return CheckoutSessionInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When checkout_session is omitted; use hasCheckoutSession() or valueOrDefault().
     */
    public function getCheckoutSession(): mixed { return $this->get('checkout_session'); }
    public function hasCheckoutSession(): bool { return $this->has('checkout_session'); }
}
