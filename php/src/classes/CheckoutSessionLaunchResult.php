<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read CheckoutAccess $checkout_access
 * @property-read CheckoutSession $checkout_session
 * @property-read bool $reused_existing
 * Presence-aware response; omitted fields throw when accessed. */
final class CheckoutSessionLaunchResult extends Model {
    /** @param array{'checkout_access': mixed, 'checkout_session': mixed, 'reused_existing': bool, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CheckoutSessionLaunchResult')); }
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
    /** @return bool
     * @throws SdkError When reused_existing is omitted; use hasReusedExisting() or valueOrDefault().
     */
    public function getReusedExisting(): bool { return $this->get('reused_existing'); }
    public function hasReusedExisting(): bool { return $this->has('reused_existing'); }
}
