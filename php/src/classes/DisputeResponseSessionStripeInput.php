<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read DisputeResponseSessionStripeAccountSessionInput|array<array-key, mixed>|\stdClass $account_session
 * @property-read list<DisputeResponseSessionStripeComponentInput|array<array-key, mixed>|\stdClass> $components
 * @property-read string $publishable_key
 * Presence-aware input; omitted fields throw when accessed. */
final class DisputeResponseSessionStripeInput extends Model {
    /** @param array{'account_session': DisputeResponseSessionStripeAccountSessionInput|array<array-key, mixed>|\stdClass, 'components': list<DisputeResponseSessionStripeComponentInput|array<array-key, mixed>|\stdClass>, 'publishable_key': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DisputeResponseSessionStripeInput')); }
    /** Shape $ (Value): {@see DisputeResponseSessionStripeAccountSessionInput}. Single-use account session secret and the Stripe.js call that uses it to load the embedded dispute response component.
     * @return DisputeResponseSessionStripeAccountSessionInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When account_session is omitted; use hasAccountSession() or valueOrDefault().
     */
    public function getAccountSession(): mixed { return $this->get('account_session'); }
    public function hasAccountSession(): bool { return $this->has('account_session'); }
    /** Shape $ (Value): Array of {@see DisputeResponseSessionStripeComponentInput}. minItems: 1. maxItems: 1. Shape $[] (Value): {@see DisputeResponseSessionStripeComponentInput}. An embedded Stripe component to render for the dispute response session, with the payment reference to pass to it.
     * @return list<DisputeResponseSessionStripeComponentInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When components is omitted; use hasComponents() or valueOrDefault().
     */
    public function getComponents(): array { return $this->get('components'); }
    public function hasComponents(): bool { return $this->has('components'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When publishable_key is omitted; use hasPublishableKey() or valueOrDefault().
     */
    public function getPublishableKey(): string { return $this->get('publishable_key'); }
    public function hasPublishableKey(): bool { return $this->has('publishable_key'); }
}
