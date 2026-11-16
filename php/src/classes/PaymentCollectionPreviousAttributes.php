<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read PaymentCollectionStripePreviousAttributes|null $stripe
 * Presence-aware response; omitted optional fields return null. */
final class PaymentCollectionPreviousAttributes extends Model {
    /** @param array{'stripe'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentCollectionPreviousAttributes')); }
    /** Client configuration for collecting the payment through Stripe. anyOf[1] (Value): {@see PaymentCollectionStripePreviousAttributes}. anyOf[2] (Value): null.
     * @return PaymentCollectionStripePreviousAttributes|null
     */
    public function getStripe(): PaymentCollectionStripePreviousAttributes|null { return $this->get('stripe'); }
    public function hasStripe(): bool { return $this->has('stripe'); }
}
