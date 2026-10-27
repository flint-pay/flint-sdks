<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?string $account_id
 * @property-read ?string $publishable_key
 * @property-read ?StripeClientAuthority $setup_intent
 * Presence-aware response; omitted optional fields return null. */
final class StripeClientSetupStripe extends Model {
    /** @param array{'account_id'?: string, 'publishable_key'?: string, 'setup_intent'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('StripeClientSetupStripe')); }
    /** Shape $ (Value): string. Stripe connected account ID to pass as stripeAccount when initializing Stripe.js.
     * @return ?string
     */
    public function getAccountId(): ?string { return $this->get('account_id'); }
    public function hasAccountId(): bool { return $this->has('account_id'); }
    /** Shape $ (Value): string. Stripe publishable key for the active Flint payment mode; use this with account_id when loading Stripe.js.
     * @return ?string
     */
    public function getPublishableKey(): ?string { return $this->get('publishable_key'); }
    public function hasPublishableKey(): bool { return $this->has('publishable_key'); }
    /** Shape $ (Value): {@see StripeClientAuthority}. One-time client authority for the named Stripe object. This payload always names the Stripe.js call and carries its client secret.
     * @return ?StripeClientAuthority
     */
    public function getSetupIntent(): ?StripeClientAuthority { return $this->get('setup_intent'); }
    public function hasSetupIntent(): bool { return $this->has('setup_intent'); }
}
