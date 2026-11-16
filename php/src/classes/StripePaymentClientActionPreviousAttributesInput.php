<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null|null $account_id
 * @property-read StripePaymentIntentClientActionPreviousAttributesInput|array<array-key, mixed>|\stdClass|null $payment_intent
 * @property-read string|null $publishable_key
 * @property-read StripeSetupIntentClientActionPreviousAttributesInput|array<array-key, mixed>|\stdClass|null $setup_intent
 * @property-read StripeTerminalPaymentIntentClientActionPreviousAttributesInput|array<array-key, mixed>|\stdClass|null $terminal_payment_intent
 * Presence-aware input; omitted fields throw when accessed. */
final class StripePaymentClientActionPreviousAttributesInput extends Model {
    /** @param array{'account_id'?: string|null|null, 'payment_intent'?: StripePaymentIntentClientActionPreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'publishable_key'?: string|null, 'setup_intent'?: StripeSetupIntentClientActionPreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'terminal_payment_intent'?: StripeTerminalPaymentIntentClientActionPreviousAttributesInput|array<array-key, mixed>|\stdClass|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('StripePaymentClientActionPreviousAttributesInput')); }
    /** Stripe connected account ID to pass as stripeAccount when initializing Stripe.js. Null when the payment has splits: initialize Stripe.js with publishable_key alone and omit stripeAccount. The Terminal SDK ignores this field. anyOf[1] (Value): string or null. Stripe connected account ID to pass as stripeAccount when initializing Stripe.js. Null when the payment has splits: initialize Stripe.js with publishable_key alone and omit stripeAccount. The Terminal SDK ignores this field. Example: "acct_1234567890". anyOf[2] (Value): null.
     * @return string|null|null
     * @throws SdkError When account_id is omitted; use hasAccountId() or valueOrDefault().
     */
    public function getAccountId(): mixed { return $this->get('account_id'); }
    public function hasAccountId(): bool { return $this->has('account_id'); }
    /** PaymentIntent authority for an order payment authentication action. anyOf[1] (Value): {@see StripePaymentIntentClientActionPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return StripePaymentIntentClientActionPreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When payment_intent is omitted; use hasPaymentIntent() or valueOrDefault().
     */
    public function getPaymentIntent(): mixed { return $this->get('payment_intent'); }
    public function hasPaymentIntent(): bool { return $this->has('payment_intent'); }
    /** Stripe publishable key for the active Flint payment mode; use this with account_id when loading Stripe.js. The Terminal SDK ignores this field. anyOf[1] (Value): string. Stripe publishable key for the active Flint payment mode; use this with account_id when loading Stripe.js. The Terminal SDK ignores this field. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When publishable_key is omitted; use hasPublishableKey() or valueOrDefault().
     */
    public function getPublishableKey(): mixed { return $this->get('publishable_key'); }
    public function hasPublishableKey(): bool { return $this->has('publishable_key'); }
    /** SetupIntent authority for a saved-payment-method authentication action. anyOf[1] (Value): {@see StripeSetupIntentClientActionPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return StripeSetupIntentClientActionPreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When setup_intent is omitted; use hasSetupIntent() or valueOrDefault().
     */
    public function getSetupIntent(): mixed { return $this->get('setup_intent'); }
    public function hasSetupIntent(): bool { return $this->has('setup_intent'); }
    /** Card-present PaymentIntent authority for the Stripe Terminal SDK on a connected Tap to Pay reader. anyOf[1] (Value): {@see StripeTerminalPaymentIntentClientActionPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return StripeTerminalPaymentIntentClientActionPreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When terminal_payment_intent is omitted; use hasTerminalPaymentIntent() or valueOrDefault().
     */
    public function getTerminalPaymentIntent(): mixed { return $this->get('terminal_payment_intent'); }
    public function hasTerminalPaymentIntent(): bool { return $this->has('terminal_payment_intent'); }
}
