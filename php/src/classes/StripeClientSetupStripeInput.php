<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $account_id
 * @property-read string $publishable_key
 * @property-read StripeClientAuthorityInput|array<array-key, mixed>|\stdClass $setup_intent
 * Presence-aware input; omitted fields throw when accessed. */
final class StripeClientSetupStripeInput extends Model {
    /** @param array{'account_id'?: string, 'publishable_key'?: string, 'setup_intent'?: StripeClientAuthorityInput|array<array-key, mixed>|\stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('StripeClientSetupStripeInput')); }
    /** Shape $ (Value): string. Stripe connected account ID to pass as stripeAccount when initializing Stripe.js.
     * @return string
     * @throws SdkError When account_id is omitted; use hasAccountId() or valueOrDefault().
     */
    public function getAccountId(): string { return $this->get('account_id'); }
    public function hasAccountId(): bool { return $this->has('account_id'); }
    /** Shape $ (Value): string. Stripe publishable key for the active Flint payment mode; use this with account_id when loading Stripe.js.
     * @return string
     * @throws SdkError When publishable_key is omitted; use hasPublishableKey() or valueOrDefault().
     */
    public function getPublishableKey(): string { return $this->get('publishable_key'); }
    public function hasPublishableKey(): bool { return $this->has('publishable_key'); }
    /** Shape $ (Value): {@see StripeClientAuthorityInput}. One-time client authority for the named Stripe object. This payload always names the Stripe.js call and carries its client secret.
     * @return StripeClientAuthorityInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When setup_intent is omitted; use hasSetupIntent() or valueOrDefault().
     */
    public function getSetupIntent(): mixed { return $this->get('setup_intent'); }
    public function hasSetupIntent(): bool { return $this->has('setup_intent'); }
}
