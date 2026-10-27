<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $client_secret
 * @property-read string $stripe_js_call
 * Presence-aware input; omitted fields throw when accessed. */
final class DisputeResponseSessionStripeAccountSessionInput extends Model {
    /** @param array{'client_secret': string, 'stripe_js_call': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DisputeResponseSessionStripeAccountSessionInput')); }
    /** Shape $ (Value): string. Single-use account session secret for fetchClientSecret. Create another response session when a fresh secret is needed.
     * @return string
     * @throws SdkError When client_secret is omitted; use hasClientSecret() or valueOrDefault().
     */
    public function getClientSecret(): string { return $this->get('client_secret'); }
    public function hasClientSecret(): bool { return $this->has('client_secret'); }
    /** Shape $ (Value): string. Call loadConnectAndInitialize with publishableKey and fetchClientSecret. Value enum: "load_connect_and_initialize".
     * @return string
     * @throws SdkError When stripe_js_call is omitted; use hasStripeJsCall() or valueOrDefault().
     */
    public function getStripeJsCall(): string { return $this->get('stripe_js_call'); }
    public function hasStripeJsCall(): bool { return $this->has('stripe_js_call'); }
}
