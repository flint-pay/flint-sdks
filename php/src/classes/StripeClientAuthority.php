<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $client_secret
 * @property-read string $stripe_js_call
 * Presence-aware response; omitted optional fields return null. */
final class StripeClientAuthority extends Model {
    /** @param array{'client_secret': string, 'stripe_js_call': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('StripeClientAuthority')); }
    /** Stripe client secret for the named PaymentIntent or SetupIntent.
     * @return string
     */
    public function getClientSecret(): string { return $this->get('client_secret'); }
    public function hasClientSecret(): bool { return $this->has('client_secret'); }
    /** Stripe.js operation to perform now. confirm_setup applies to client_setup. Standalone PaymentIntents use payment_collection plus server confirmation instead of initial confirm_payment authority. Value enum: "confirm_payment", "confirm_setup".
     * @return string
     */
    public function getStripeJsCall(): string { return $this->get('stripe_js_call'); }
    public function hasStripeJsCall(): bool { return $this->has('stripe_js_call'); }
}
