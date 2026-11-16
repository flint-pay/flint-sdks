<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read SetupCollectionStripePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $stripe
 * Presence-aware input; omitted fields throw when accessed. */
final class SetupCollectionPreviousAttributesInput extends Model {
    /** @param array{'stripe'?: SetupCollectionStripePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SetupCollectionPreviousAttributesInput')); }
    /** Client configuration for saving a payment method through Stripe on the merchant's connected account. anyOf[1] (Value): {@see SetupCollectionStripePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return SetupCollectionStripePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When stripe is omitted; use hasStripe() or valueOrDefault().
     */
    public function getStripe(): mixed { return $this->get('stripe'); }
    public function hasStripe(): bool { return $this->has('stripe'); }
}
