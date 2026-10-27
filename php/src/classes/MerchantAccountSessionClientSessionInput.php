<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|\DateTimeInterface $expires_at
 * @property-read MerchantAccountSessionStripeInput|array<array-key, mixed>|\stdClass $stripe
 * Presence-aware input; omitted fields throw when accessed. */
final class MerchantAccountSessionClientSessionInput extends Model {
    /** @param array{'expires_at': string|\DateTimeInterface, 'stripe': MerchantAccountSessionStripeInput|array<array-key, mixed>|\stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('MerchantAccountSessionClientSessionInput')); }
    /** Shape $ (Value): string. Expiry of the embedded account session client secret in UTC. Connect.js calls fetchClientSecret to obtain a new secret when needed. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When expires_at is omitted; use hasExpiresAt() or valueOrDefault().
     */
    public function getExpiresAt(): string|\DateTimeInterface { return $this->get('expires_at'); }
    public function hasExpiresAt(): bool { return $this->has('expires_at'); }
    /** Shape $ (Value): {@see MerchantAccountSessionStripeInput}. Stripe Connect initialization credentials and authorized component collection options. Connect initializes from the account session client secret and does not take a connected account ID. Stripe Connect initialization data for a merchant account session: the account session, publishable key, and authorized components.
     * @return MerchantAccountSessionStripeInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When stripe is omitted; use hasStripe() or valueOrDefault().
     */
    public function getStripe(): mixed { return $this->get('stripe'); }
    public function hasStripe(): bool { return $this->has('stripe'); }
}
