<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read array{'stripe'?: StripeClientSetupStripeInput|array<array-key, mixed>|\stdClass, ...}|object|null $client_setup
 * @property-read string $payment_method_id
 * @property-read string $status
 * @property-read string $store_setup_id
 * Presence-aware input; omitted fields throw when accessed. */
final class BuyerFlintWalletStoreSetupInput extends Model {
    /** @param array{'client_setup': array{'stripe'?: StripeClientSetupStripeInput|array<array-key, mixed>|\stdClass, ...}|object|null, 'payment_method_id': string, 'status': string, 'store_setup_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BuyerFlintWalletStoreSetupInput')); }
    /** Shape $ (Value): {@see StripeClientSetupInput} or null. Shape $.anyOf[1] (Value): {@see StripeClientSetupInput}. Stripe.js setup authority returned while saving a payment method. Follow its stripe_js_call now. setup_collection is guidance instead and never carries a secret. Shape $.anyOf[2] (Value): null.
     * @return array{'stripe'?: StripeClientSetupStripeInput|array<array-key, mixed>|\stdClass, ...}|object|null
     * @throws SdkError When client_setup is omitted; use hasClientSetup() or valueOrDefault().
     */
    public function getClientSetup(): mixed { return $this->get('client_setup'); }
    public function hasClientSetup(): bool { return $this->has('client_setup'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When payment_method_id is omitted; use hasPaymentMethodId() or valueOrDefault().
     */
    public function getPaymentMethodId(): string { return $this->get('payment_method_id'); }
    public function hasPaymentMethodId(): bool { return $this->has('payment_method_id'); }
    /** Shape $ (Value): string.  Value enum: "pending", "active", "failed", "expired".
     * @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When store_setup_id is omitted; use hasStoreSetupId() or valueOrDefault().
     */
    public function getStoreSetupId(): string { return $this->get('store_setup_id'); }
    public function hasStoreSetupId(): bool { return $this->has('store_setup_id'); }
}
