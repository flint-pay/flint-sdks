<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $client_secret
 * @property-read string|null $stripe_terminal_sdk_call
 * Presence-aware input; omitted fields throw when accessed. */
final class StripeTerminalPaymentIntentClientActionPreviousAttributesInput extends Model {
    /** @param array{'client_secret'?: string|null, 'stripe_terminal_sdk_call'?: string|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('StripeTerminalPaymentIntentClientActionPreviousAttributesInput')); }
    /** Card-present PaymentIntent client secret to pass to the Terminal SDK's retrievePaymentIntent, then collect and confirm on the connected Tap to Pay reader. anyOf[1] (Value): string. Card-present PaymentIntent client secret to pass to the Terminal SDK's retrievePaymentIntent, then collect and confirm on the connected Tap to Pay reader. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When client_secret is omitted; use hasClientSecret() or valueOrDefault().
     */
    public function getClientSecret(): mixed { return $this->get('client_secret'); }
    public function hasClientSecret(): bool { return $this->has('client_secret'); }
    /** Stripe Terminal SDK operation to perform. collect_and_confirm_payment_intent retrieves, collects, and confirms the payment. Value enum: "collect_and_confirm_payment_intent". anyOf[1] (Value): string. Stripe Terminal SDK operation to perform. collect_and_confirm_payment_intent retrieves, collects, and confirms the payment. Value enum: "collect_and_confirm_payment_intent". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When stripe_terminal_sdk_call is omitted; use hasStripeTerminalSdkCall() or valueOrDefault().
     */
    public function getStripeTerminalSdkCall(): mixed { return $this->get('stripe_terminal_sdk_call'); }
    public function hasStripeTerminalSdkCall(): bool { return $this->has('stripe_terminal_sdk_call'); }
}
