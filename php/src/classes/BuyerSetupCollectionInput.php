<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read BuyerSetupCollectionStripeInput|array<array-key, mixed>|\stdClass $stripe
 * Presence-aware input; omitted fields throw when accessed. */
final class BuyerSetupCollectionInput extends Model {
    /** @param array{'stripe'?: BuyerSetupCollectionStripeInput|array<array-key, mixed>|\stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BuyerSetupCollectionInput')); }
    /** Client configuration for saving a payment method through Stripe on the merchant's connected account. Stripe connected account details and Elements configuration for saving a payment method.
     * @return BuyerSetupCollectionStripeInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When stripe is omitted; use hasStripe() or valueOrDefault().
     */
    public function getStripe(): mixed { return $this->get('stripe'); }
    public function hasStripe(): bool { return $this->has('stripe'); }
}
