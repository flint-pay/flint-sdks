<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read PaymentCollectionStripePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $stripe
 * Presence-aware input; omitted fields throw when accessed. */
final class PaymentCollectionPreviousAttributesInput extends Model {
    /** @param array{'stripe'?: PaymentCollectionStripePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentCollectionPreviousAttributesInput')); }
    /** Client configuration for collecting the payment through Stripe. anyOf[1] (Value): {@see PaymentCollectionStripePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return PaymentCollectionStripePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When stripe is omitted; use hasStripe() or valueOrDefault().
     */
    public function getStripe(): mixed { return $this->get('stripe'); }
    public function hasStripe(): bool { return $this->has('stripe'); }
}
