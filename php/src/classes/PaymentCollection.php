<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?PaymentCollectionStripe $stripe
 * Presence-aware response; omitted optional fields return null. */
final class PaymentCollection extends Model {
    /** @param array{'stripe'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentCollection')); }
    /** Client configuration for collecting the payment through Stripe. Stripe details for collecting payment in the browser: account ID, publishable key, return URL, and Elements options.
     * @return ?PaymentCollectionStripe
     */
    public function getStripe(): ?PaymentCollectionStripe { return $this->get('stripe'); }
    public function hasStripe(): bool { return $this->has('stripe'); }
}
