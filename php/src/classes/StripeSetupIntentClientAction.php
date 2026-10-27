<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $client_secret
 * @property-read string $stripe_js_call
 * Presence-aware response; omitted optional fields return null. */
final class StripeSetupIntentClientAction extends Model {
    /** @param array{'client_secret': string, 'stripe_js_call': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('StripeSetupIntentClientAction')); }
    /** Shape $ (Value): string. SetupIntent client secret to pass to Stripe.js handleNextAction.
     * @return string
     */
    public function getClientSecret(): string { return $this->get('client_secret'); }
    public function hasClientSecret(): bool { return $this->has('client_secret'); }
    /** Shape $ (Value): string. Stripe.js operation to perform. Today this is handle_next_action. Value enum: "handle_next_action".
     * @return string
     */
    public function getStripeJsCall(): string { return $this->get('stripe_js_call'); }
    public function hasStripeJsCall(): bool { return $this->has('stripe_js_call'); }
}
