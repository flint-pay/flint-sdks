<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read StripeClientSetup|null $client_setup
 * @property-read string $payment_method_id
 * @property-read string $status
 * @property-read string $store_setup_id
 * Presence-aware response; omitted optional fields return null. */
final class BuyerFlintWalletStoreSetup extends Model {
    /** @param array{'client_setup': mixed, 'payment_method_id': string, 'status': string, 'store_setup_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BuyerFlintWalletStoreSetup')); }
    /**  anyOf[1] (Value): {@see StripeClientSetup}. Stripe.js setup authority returned while saving a payment method. Follow its stripe_js_call now. setup_collection is guidance instead and never carries a secret. anyOf[2] (Value): null.
     * @return StripeClientSetup|null
     */
    public function getClientSetup(): StripeClientSetup|null { return $this->get('client_setup'); }
    public function hasClientSetup(): bool { return $this->has('client_setup'); }
    /** payment_method_id
     * @return string
     */
    public function getPaymentMethodId(): string { return $this->get('payment_method_id'); }
    public function hasPaymentMethodId(): bool { return $this->has('payment_method_id'); }
    /** Value enum: "pending", "active", "failed", "expired".
     * @return string
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** store_setup_id
     * @return string
     */
    public function getStoreSetupId(): string { return $this->get('store_setup_id'); }
    public function hasStoreSetupId(): bool { return $this->has('store_setup_id'); }
}
