<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?BuyerSetupCollectionStripe $stripe
 * Presence-aware response; omitted optional fields return null. */
final class BuyerSetupCollection extends Model {
    /** @param array{'stripe'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BuyerSetupCollection')); }
    /** Client configuration for saving a payment method through Stripe on the merchant's connected account. Stripe connected account details and Elements configuration for saving a payment method.
     * @return ?BuyerSetupCollectionStripe
     */
    public function getStripe(): ?BuyerSetupCollectionStripe { return $this->get('stripe'); }
    public function hasStripe(): bool { return $this->has('stripe'); }
}
