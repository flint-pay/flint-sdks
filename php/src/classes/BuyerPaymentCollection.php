<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?BuyerPaymentCollectionStripe $stripe
 * Presence-aware response; omitted optional fields return null. */
final class BuyerPaymentCollection extends Model {
    /** @param array{'stripe'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BuyerPaymentCollection')); }
    /** Client configuration for collecting the payment through Stripe. Stripe values for collecting payment on a buyer's order: the account ID, publishable key, return URL, and Elements settings.
     * @return ?BuyerPaymentCollectionStripe
     */
    public function getStripe(): ?BuyerPaymentCollectionStripe { return $this->get('stripe'); }
    public function hasStripe(): bool { return $this->has('stripe'); }
}
