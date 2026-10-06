<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read array{'checkout_auth_token': string, 'hosted_url'?: string, ...}|object $checkout_access
 * @property-read CheckoutSessionInput|array<array-key, mixed>|\stdClass $checkout_session
 * @property-read array{'checkout_auth_token': string, 'url': string, ...}|object $hosted_checkout
 * @property-read bool $reused_existing
 * Presence-aware input; omitted fields throw when accessed. */
final class CheckoutSessionLaunchResultInput extends Model {
    /** @param array{'checkout_access': array{'checkout_auth_token': string, 'hosted_url'?: string, ...}|object, 'checkout_session': CheckoutSessionInput|array<array-key, mixed>|\stdClass, 'hosted_checkout'?: array{'checkout_auth_token': string, 'url': string, ...}|object, 'reused_existing': bool, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CheckoutSessionLaunchResultInput')); }
    /** @return array{'checkout_auth_token': string, 'hosted_url'?: string, ...}|object
     * @throws SdkError When checkout_access is omitted; use hasCheckoutAccess() or valueOrDefault().
     */
    public function getCheckoutAccess(): array|object { return $this->get('checkout_access'); }
    public function hasCheckoutAccess(): bool { return $this->has('checkout_access'); }
    /** @return CheckoutSessionInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When checkout_session is omitted; use hasCheckoutSession() or valueOrDefault().
     */
    public function getCheckoutSession(): mixed { return $this->get('checkout_session'); }
    public function hasCheckoutSession(): bool { return $this->has('checkout_session'); }
    /** @return array{'checkout_auth_token': string, 'url': string, ...}|object
     * @throws SdkError When hosted_checkout is omitted; use hasHostedCheckout() or valueOrDefault().
     */
    public function getHostedCheckout(): array|object { return $this->get('hosted_checkout'); }
    public function hasHostedCheckout(): bool { return $this->has('hosted_checkout'); }
    /** @return bool
     * @throws SdkError When reused_existing is omitted; use hasReusedExisting() or valueOrDefault().
     */
    public function getReusedExisting(): bool { return $this->get('reused_existing'); }
    public function hasReusedExisting(): bool { return $this->has('reused_existing'); }
}
