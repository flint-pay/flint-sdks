<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $checkout_session_id
 * @property-read string $expected_delivery_selection_id
 * Presence-aware input; omitted fields throw when accessed. */
final class CheckoutSessionsDeleteCurrentDeliverySelectionInput extends Model {
    /** @param array{'checkout_session_id': string, 'X-Checkout-Session-ID'?: string, 'X-Checkout-Session-Secret'?: string, 'expected_delivery_selection_id': string, 'Idempotency-Key'?: string, 'Flint-Version'?: string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CheckoutSessionsDeleteCurrentDeliverySelectionInput')); }
    /** @return string
     * @throws SdkError When checkout_session_id is omitted; use hasCheckoutSessionId() or valueOrDefault().
     */
    public function getCheckoutSessionId(): string { return $this->get('checkout_session_id'); }
    public function hasCheckoutSessionId(): bool { return $this->has('checkout_session_id'); }
    /** @return string
     * @throws SdkError When X-Checkout-Session-ID is omitted; use hasXCheckoutSessionId() or valueOrDefault().
     */
    public function getXCheckoutSessionId(): string { return $this->get('X-Checkout-Session-ID'); }
    public function hasXCheckoutSessionId(): bool { return $this->has('X-Checkout-Session-ID'); }
    /** @return string
     * @throws SdkError When X-Checkout-Session-Secret is omitted; use hasXCheckoutSessionSecret() or valueOrDefault().
     */
    public function getXCheckoutSessionSecret(): string { return $this->get('X-Checkout-Session-Secret'); }
    public function hasXCheckoutSessionSecret(): bool { return $this->has('X-Checkout-Session-Secret'); }
    /** @return string
     * @throws SdkError When expected_delivery_selection_id is omitted; use hasExpectedDeliverySelectionId() or valueOrDefault().
     */
    public function getExpectedDeliverySelectionId(): string { return $this->get('expected_delivery_selection_id'); }
    public function hasExpectedDeliverySelectionId(): bool { return $this->has('expected_delivery_selection_id'); }
    /** @return string
     * @throws SdkError When Idempotency-Key is omitted; use hasIdempotencyKey() or valueOrDefault().
     */
    public function getIdempotencyKey(): string { return $this->get('Idempotency-Key'); }
    public function hasIdempotencyKey(): bool { return $this->has('Idempotency-Key'); }
    /** @return string
     * @throws SdkError When Flint-Version is omitted; use hasFlintVersion() or valueOrDefault().
     */
    public function getFlintVersion(): string { return $this->get('Flint-Version'); }
    public function hasFlintVersion(): bool { return $this->has('Flint-Version'); }
}
