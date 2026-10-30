<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $expires_at
 * @property-read DisputeResponseSessionStripe $stripe
 * Presence-aware response; omitted optional fields return null. */
final class DisputeResponseSessionClientSession extends Model {
    /** @param array{'expires_at': string, 'stripe': mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DisputeResponseSessionClientSession')); }
    /** Time the browser session expires. Format: date-time.
     * @return string
     */
    public function getExpiresAt(): string { return $this->get('expires_at'); }
    public function hasExpiresAt(): bool { return $this->has('expires_at'); }
    /** Stripe details for the embedded dispute response component: the publishable key, an account session, and the components to render.
     * @return DisputeResponseSessionStripe
     */
    public function getStripe(): DisputeResponseSessionStripe { return $this->get('stripe'); }
    public function hasStripe(): bool { return $this->has('stripe'); }
}
