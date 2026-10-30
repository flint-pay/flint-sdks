<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?string $account_id
 * @property-read ?BuyerPaymentCollectionStripeElements $elements
 * @property-read ?string $publishable_key
 * @property-read ?string $return_url
 * Presence-aware response; omitted optional fields return null. */
final class BuyerPaymentCollectionStripe extends Model {
    /** @param array{'account_id'?: string, 'elements'?: mixed, 'publishable_key'?: string, 'return_url'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BuyerPaymentCollectionStripe')); }
    /** Stripe account to use when initializing the payment client.
     * @return ?string
     */
    public function getAccountId(): ?string { return $this->get('account_id'); }
    public function hasAccountId(): bool { return $this->has('account_id'); }
    /** Stripe Elements configuration for the available payment methods and amounts. Stripe Elements collection guidance. Follow next_step in the browser, then submit the result to submit_to through Flint.
     * @return ?BuyerPaymentCollectionStripeElements
     */
    public function getElements(): ?BuyerPaymentCollectionStripeElements { return $this->get('elements'); }
    public function hasElements(): bool { return $this->has('elements'); }
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
