<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $client_secret
 * @property-read string|null $stripe_js_call
 * Presence-aware input; omitted fields throw when accessed. */
final class StripePaymentIntentClientActionPreviousAttributesInput extends Model {
    /** @param array{'client_secret'?: string|null, 'stripe_js_call'?: string|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('StripePaymentIntentClientActionPreviousAttributesInput')); }
    /** PaymentIntent client secret to pass to Stripe.js handleNextAction. anyOf[1] (Value): string. PaymentIntent client secret to pass to Stripe.js handleNextAction. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When client_secret is omitted; use hasClientSecret() or valueOrDefault().
     */
    public function getClientSecret(): mixed { return $this->get('client_secret'); }
    public function hasClientSecret(): bool { return $this->has('client_secret'); }
    /** Stripe.js operation to perform. Today this is handle_next_action. Value enum: "handle_next_action". anyOf[1] (Value): string. Stripe.js operation to perform. Today this is handle_next_action. Value enum: "handle_next_action". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When stripe_js_call is omitted; use hasStripeJsCall() or valueOrDefault().
     */
    public function getStripeJsCall(): mixed { return $this->get('stripe_js_call'); }
    public function hasStripeJsCall(): bool { return $this->has('stripe_js_call'); }
}
