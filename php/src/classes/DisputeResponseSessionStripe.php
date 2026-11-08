<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read DisputeResponseSessionStripeAccountSession $account_session
 * @property-read list<DisputeResponseSessionStripeComponent> $components
 * @property-read string $publishable_key
 * Presence-aware response; omitted optional fields return null. */
final class DisputeResponseSessionStripe extends Model {
    /** @param array{'account_session': mixed, 'components': list<mixed>, 'publishable_key': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DisputeResponseSessionStripe')); }
    /** The Stripe account session that lets the component load. Its `client_secret` is single use. Single-use account session secret and the Stripe.js call that uses it to load the embedded dispute response component.
     * @return DisputeResponseSessionStripeAccountSession
     */
    public function getAccountSession(): DisputeResponseSessionStripeAccountSession { return $this->get('account_session'); }
    public function hasAccountSession(): bool { return $this->has('account_session'); }
    /** The components to render. Always one entry. minItems: 1. maxItems: 1. [] (Value): {@see DisputeResponseSessionStripeComponent}. An embedded Stripe component to render for the dispute response session, with the payment reference to pass to it.
     * @return list<DisputeResponseSessionStripeComponent>
     */
    public function getComponents(): array { return $this->get('components'); }
    public function hasComponents(): bool { return $this->has('components'); }
    /** Stripe publishable key to pass to `loadConnectAndInitialize`.
     * @return string
     */
    public function getPublishableKey(): string { return $this->get('publishable_key'); }
    public function hasPublishableKey(): bool { return $this->has('publishable_key'); }
}
