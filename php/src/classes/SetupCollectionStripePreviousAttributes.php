<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $account_id
 * @property-read PaymentCollectionStripeElementsPreviousAttributes|null $elements
 * @property-read string|null $publishable_key
 * @property-read string|null $return_url
 * Presence-aware response; omitted optional fields return null. */
final class SetupCollectionStripePreviousAttributes extends Model {
    /** @param array{'account_id'?: mixed, 'elements'?: mixed, 'publishable_key'?: mixed, 'return_url'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SetupCollectionStripePreviousAttributes')); }
    /** Stripe connected account ID to pass as stripeAccount when initializing Stripe.js. anyOf[1] (Value): string. Stripe connected account ID to pass as stripeAccount when initializing Stripe.js. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getAccountId(): string|null { return $this->get('account_id'); }
    public function hasAccountId(): bool { return $this->has('account_id'); }
    /** Stripe Elements configuration for the available payment methods and amounts. anyOf[1] (Value): {@see PaymentCollectionStripeElementsPreviousAttributes}. anyOf[2] (Value): null.
     * @return PaymentCollectionStripeElementsPreviousAttributes|null
     */
    public function getElements(): PaymentCollectionStripeElementsPreviousAttributes|null { return $this->get('elements'); }
    public function hasElements(): bool { return $this->has('elements'); }
    /** Publishable Stripe key for initializing the payment client. anyOf[1] (Value): string. Publishable Stripe key for initializing the payment client. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getPublishableKey(): string|null { return $this->get('publishable_key'); }
    public function hasPublishableKey(): bool { return $this->has('publishable_key'); }
    /** URL the buyer returns to after a redirect payment step. anyOf[1] (Value): string. URL the buyer returns to after a redirect payment step. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getReturnUrl(): string|null { return $this->get('return_url'); }
    public function hasReturnUrl(): bool { return $this->has('return_url'); }
}
