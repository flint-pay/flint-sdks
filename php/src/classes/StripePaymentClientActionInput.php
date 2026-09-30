<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $account_id
 * @property-read array{'client_secret': string, 'stripe_js_call': string, ...}|object $payment_intent
 * @property-read string $publishable_key
 * @property-read array{'client_secret': string, 'stripe_js_call': string, ...}|object $setup_intent
 * Presence-aware input; omitted fields throw when accessed. */
final class StripePaymentClientActionInput extends Model {
    /** @param array{'account_id': string, 'payment_intent'?: array{'client_secret': string, 'stripe_js_call': string, ...}|object, 'publishable_key': string, 'setup_intent'?: array{'client_secret': string, 'stripe_js_call': string, ...}|object, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('StripePaymentClientActionInput')); }
    /** @return string
     * @throws SdkError When account_id is omitted; use hasAccountId() or valueOrDefault().
     */
    public function getAccountId(): string { return $this->get('account_id'); }
    public function hasAccountId(): bool { return $this->has('account_id'); }
    /** @return array{'client_secret': string, 'stripe_js_call': string, ...}|object
     * @throws SdkError When payment_intent is omitted; use hasPaymentIntent() or valueOrDefault().
     */
    public function getPaymentIntent(): array|object { return $this->get('payment_intent'); }
    public function hasPaymentIntent(): bool { return $this->has('payment_intent'); }
    /** @return string
     * @throws SdkError When publishable_key is omitted; use hasPublishableKey() or valueOrDefault().
     */
    public function getPublishableKey(): string { return $this->get('publishable_key'); }
    public function hasPublishableKey(): bool { return $this->has('publishable_key'); }
    /** @return array{'client_secret': string, 'stripe_js_call': string, ...}|object
     * @throws SdkError When setup_intent is omitted; use hasSetupIntent() or valueOrDefault().
     */
    public function getSetupIntent(): array|object { return $this->get('setup_intent'); }
    public function hasSetupIntent(): bool { return $this->has('setup_intent'); }
}
