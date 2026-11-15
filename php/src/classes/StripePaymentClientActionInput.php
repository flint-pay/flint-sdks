<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $account_id
 * @property-read StripePaymentIntentClientActionInput|array<array-key, mixed>|\stdClass $payment_intent
 * @property-read string $publishable_key
 * @property-read StripeSetupIntentClientActionInput|array<array-key, mixed>|\stdClass $setup_intent
 * @property-read StripeTerminalPaymentIntentClientActionInput|array<array-key, mixed>|\stdClass $terminal_payment_intent
 * Presence-aware input; omitted fields throw when accessed. */
final class StripePaymentClientActionInput extends Model {
    /** @param array{'account_id': string|null, 'payment_intent'?: StripePaymentIntentClientActionInput|array<array-key, mixed>|\stdClass, 'publishable_key': string, 'setup_intent'?: StripeSetupIntentClientActionInput|array<array-key, mixed>|\stdClass, 'terminal_payment_intent'?: StripeTerminalPaymentIntentClientActionInput|array<array-key, mixed>|\stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('StripePaymentClientActionInput')); }
    /** Stripe connected account ID to pass as stripeAccount when initializing Stripe.js. Null when the payment has splits: initialize Stripe.js with publishable_key alone and omit stripeAccount. The Terminal SDK ignores this field. Example: "acct_1234567890".
     * @return string|null
     * @throws SdkError When account_id is omitted; use hasAccountId() or valueOrDefault().
     */
    public function getAccountId(): string|null { return $this->get('account_id'); }
    public function hasAccountId(): bool { return $this->has('account_id'); }
    /** PaymentIntent authority for an order payment authentication action. The client action for a Stripe payment intent: the client secret to pass to Stripe.js `handleNextAction`.
     * @return StripePaymentIntentClientActionInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When payment_intent is omitted; use hasPaymentIntent() or valueOrDefault().
     */
    public function getPaymentIntent(): mixed { return $this->get('payment_intent'); }
    public function hasPaymentIntent(): bool { return $this->has('payment_intent'); }
    /** Stripe publishable key for the active Flint payment mode; use this with account_id when loading Stripe.js. The Terminal SDK ignores this field.
     * @return string
     * @throws SdkError When publishable_key is omitted; use hasPublishableKey() or valueOrDefault().
     */
    public function getPublishableKey(): string { return $this->get('publishable_key'); }
    public function hasPublishableKey(): bool { return $this->has('publishable_key'); }
    /** SetupIntent authority for a saved-payment-method authentication action. The client action for a Stripe setup intent: the client secret to pass to Stripe.js `handleNextAction`.
     * @return StripeSetupIntentClientActionInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When setup_intent is omitted; use hasSetupIntent() or valueOrDefault().
     */
    public function getSetupIntent(): mixed { return $this->get('setup_intent'); }
    public function hasSetupIntent(): bool { return $this->has('setup_intent'); }
    /** Card-present PaymentIntent authority for the Stripe Terminal SDK on a connected Tap to Pay reader. Authority to collect and confirm a card-present payment with the Stripe Terminal SDK on the connected Tap to Pay reader.
     * @return StripeTerminalPaymentIntentClientActionInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When terminal_payment_intent is omitted; use hasTerminalPaymentIntent() or valueOrDefault().
     */
    public function getTerminalPaymentIntent(): mixed { return $this->get('terminal_payment_intent'); }
    public function hasTerminalPaymentIntent(): bool { return $this->has('terminal_payment_intent'); }
}
