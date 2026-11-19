<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $account_id
 * @property-read ?PaymentCollectionStripeElements $elements
 * @property-read ?string $on_behalf_of
 * @property-read ?string $publishable_key
 * @property-read ?string $return_url
 * Presence-aware response; omitted optional fields return null. */
final class PaymentCollectionStripe extends Model {
    /** @param array{'account_id': string|null, 'elements'?: mixed, 'on_behalf_of'?: string, 'publishable_key'?: string, 'return_url'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentCollectionStripe')); }
    /** Stripe connected account ID to pass as stripeAccount when initializing Stripe.js. Null when the payment has splits. When null, omit stripeAccount when initializing Stripe.js.
     * @return string|null
     */
    public function getAccountId(): string|null { return $this->get('account_id'); }
    public function hasAccountId(): bool { return $this->has('account_id'); }
    /** Stripe Elements configuration for the available payment methods and amounts. Stripe Elements collection guidance. Follow next_step in the browser, then submit the result to submit_to through Flint.
     * @return ?PaymentCollectionStripeElements
     */
    public function getElements(): ?PaymentCollectionStripeElements { return $this->get('elements'); }
    public function hasElements(): bool { return $this->has('elements'); }
    /** Stripe account ID of the collecting merchant. Present when this payment uses Stripe on_behalf_of, currently payments with splits. Pass it as onBehalfOf when creating Stripe Elements.
     * @return ?string
     */
    public function getOnBehalfOf(): ?string { return $this->get('on_behalf_of'); }
    public function hasOnBehalfOf(): bool { return $this->has('on_behalf_of'); }
    /** Publishable Stripe key for initializing the payment client.
     * @return ?string
     */
    public function getPublishableKey(): ?string { return $this->get('publishable_key'); }
    public function hasPublishableKey(): bool { return $this->has('publishable_key'); }
    /** URL the buyer returns to after a redirect payment step.
     * @return ?string
     */
    public function getReturnUrl(): ?string { return $this->get('return_url'); }
    public function hasReturnUrl(): bool { return $this->has('return_url'); }
}
