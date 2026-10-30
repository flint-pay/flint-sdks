<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $expires_at
 * @property-read MerchantAccountSessionStripe $stripe
 * Presence-aware response; omitted optional fields return null. */
final class MerchantAccountSessionClientSession extends Model {
    /** @param array{'expires_at': string, 'stripe': mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('MerchantAccountSessionClientSession')); }
    /** Expiry of the embedded account session client secret in UTC. Connect.js calls fetchClientSecret to obtain a new secret when needed. Format: date-time.
     * @return string
     */
    public function getExpiresAt(): string { return $this->get('expires_at'); }
    public function hasExpiresAt(): bool { return $this->has('expires_at'); }
    /** Stripe Connect initialization credentials and authorized component collection options. Connect initializes from the account session client secret and does not take a connected account ID. Stripe Connect initialization data for a merchant account session: the account session, publishable key, and authorized components.
     * @return MerchantAccountSessionStripe
     */
    public function getStripe(): MerchantAccountSessionStripe { return $this->get('stripe'); }
    public function hasStripe(): bool { return $this->has('stripe'); }
}
