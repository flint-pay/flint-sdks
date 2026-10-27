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
    /** Shape $ (Value): {@see DisputeResponseSessionStripeAccountSession}. Single-use account session secret and the Stripe.js call that uses it to load the embedded dispute response component.
     * @return DisputeResponseSessionStripeAccountSession
     */
    public function getAccountSession(): DisputeResponseSessionStripeAccountSession { return $this->get('account_session'); }
    public function hasAccountSession(): bool { return $this->has('account_session'); }
    /** Shape $ (Value): Array of {@see DisputeResponseSessionStripeComponent}. minItems: 1. maxItems: 1. Shape $[] (Value): {@see DisputeResponseSessionStripeComponent}. An embedded Stripe component to render for the dispute response session, with the payment reference to pass to it.
     * @return list<DisputeResponseSessionStripeComponent>
     */
    public function getComponents(): array { return $this->get('components'); }
    public function hasComponents(): bool { return $this->has('components'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getPublishableKey(): string { return $this->get('publishable_key'); }
    public function hasPublishableKey(): bool { return $this->has('publishable_key'); }
}
