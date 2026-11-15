<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $account_id
 * @property-read ?StripePaymentIntentClientAction $payment_intent
 * @property-read string $publishable_key
 * @property-read ?StripeSetupIntentClientAction $setup_intent
 * @property-read ?StripeTerminalPaymentIntentClientAction $terminal_payment_intent
 * Presence-aware response; omitted optional fields return null. */
final class StripePaymentClientAction extends Model {
    /** @param array{'account_id': string|null, 'payment_intent'?: mixed, 'publishable_key': string, 'setup_intent'?: mixed, 'terminal_payment_intent'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('StripePaymentClientAction')); }
    /** Stripe connected account ID to pass as stripeAccount when initializing Stripe.js. Null when the payment has splits: initialize Stripe.js with publishable_key alone and omit stripeAccount. The Terminal SDK ignores this field.
     * @return string|null
     */
    public function getAccountId(): string|null { return $this->get('account_id'); }
    public function hasAccountId(): bool { return $this->has('account_id'); }
    /** PaymentIntent authority for an order payment authentication action. The client action for a Stripe payment intent: the client secret to pass to Stripe.js `handleNextAction`.
     * @return ?StripePaymentIntentClientAction
     */
    public function getPaymentIntent(): ?StripePaymentIntentClientAction { return $this->get('payment_intent'); }
    public function hasPaymentIntent(): bool { return $this->has('payment_intent'); }
    /** Stripe publishable key for the active Flint payment mode; use this with account_id when loading Stripe.js. The Terminal SDK ignores this field.
     * @return string
     */
    public function getPublishableKey(): string { return $this->get('publishable_key'); }
    public function hasPublishableKey(): bool { return $this->has('publishable_key'); }
    /** SetupIntent authority for a saved-payment-method authentication action. The client action for a Stripe setup intent: the client secret to pass to Stripe.js `handleNextAction`.
     * @return ?StripeSetupIntentClientAction
     */
    public function getSetupIntent(): ?StripeSetupIntentClientAction { return $this->get('setup_intent'); }
    public function hasSetupIntent(): bool { return $this->has('setup_intent'); }
    /** Card-present PaymentIntent authority for the Stripe Terminal SDK on a connected Tap to Pay reader. Authority to collect and confirm a card-present payment with the Stripe Terminal SDK on the connected Tap to Pay reader.
     * @return ?StripeTerminalPaymentIntentClientAction
     */
    public function getTerminalPaymentIntent(): ?StripeTerminalPaymentIntentClientAction { return $this->get('terminal_payment_intent'); }
    public function hasTerminalPaymentIntent(): bool { return $this->has('terminal_payment_intent'); }
}
