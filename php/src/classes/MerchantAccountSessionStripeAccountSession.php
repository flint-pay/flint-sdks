<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $client_secret
 * @property-read string $stripe_js_call
 * Presence-aware response; omitted optional fields return null. */
final class MerchantAccountSessionStripeAccountSession extends Model {
    /** @param array{'client_secret': string, 'stripe_js_call': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('MerchantAccountSessionStripeAccountSession')); }
    /** Shape $ (Value): string. Short-lived account session client secret to return from fetchClientSecret. Return it only to an authenticated human authorized to manage this merchant.
     * @return string
     */
    public function getClientSecret(): string { return $this->get('client_secret'); }
    public function hasClientSecret(): bool { return $this->has('client_secret'); }
    /** Shape $ (Value): string. Browser initialization operation to perform. load_connect_and_initialize means call loadConnectAndInitialize with publishableKey and fetchClientSecret. Value enum: "load_connect_and_initialize".
     * @return string
     */
    public function getStripeJsCall(): string { return $this->get('stripe_js_call'); }
    public function hasStripeJsCall(): bool { return $this->has('stripe_js_call'); }
}
