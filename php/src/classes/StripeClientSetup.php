<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?StripeClientSetupStripe $stripe
 * Presence-aware response; omitted optional fields return null. */
final class StripeClientSetup extends Model {
    /** @param array{'stripe'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('StripeClientSetup')); }
    /** Shape $ (Value): {@see StripeClientSetupStripe}. Stripe.js initialization context and SetupIntent setup authority.
     * @return ?StripeClientSetupStripe
     */
    public function getStripe(): ?StripeClientSetupStripe { return $this->get('stripe'); }
    public function hasStripe(): bool { return $this->has('stripe'); }
}
