<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read BuyerPaymentCollectionStripeInput|array<array-key, mixed>|\stdClass $stripe
 * Presence-aware input; omitted fields throw when accessed. */
final class BuyerPaymentCollectionInput extends Model {
    /** @param array{'stripe'?: BuyerPaymentCollectionStripeInput|array<array-key, mixed>|\stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BuyerPaymentCollectionInput')); }
    /** Client configuration for collecting the payment through Stripe. Stripe values for collecting payment on a buyer's order: the account ID, publishable key, return URL, and Elements settings.
     * @return BuyerPaymentCollectionStripeInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When stripe is omitted; use hasStripe() or valueOrDefault().
     */
    public function getStripe(): mixed { return $this->get('stripe'); }
    public function hasStripe(): bool { return $this->has('stripe'); }
}
