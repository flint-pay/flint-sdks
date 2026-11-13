<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?SetupCollectionStripe $stripe
 * Presence-aware response; omitted optional fields return null. */
final class SetupCollection extends Model {
    /** @param array{'stripe'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SetupCollection')); }
    /** Client configuration for saving a payment method through Stripe on the merchant's connected account. Stripe connected account details and Elements configuration for saving a payment method.
     * @return ?SetupCollectionStripe
     */
    public function getStripe(): ?SetupCollectionStripe { return $this->get('stripe'); }
    public function hasStripe(): bool { return $this->has('stripe'); }
}
