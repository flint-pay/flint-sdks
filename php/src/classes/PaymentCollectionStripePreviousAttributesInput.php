<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $account_id
 * @property-read PaymentCollectionStripeElementsPreviousAttributesInput|array<array-key, mixed>|\stdClass|null $elements
 * @property-read string|null $on_behalf_of
 * @property-read string|null $publishable_key
 * @property-read string|null $return_url
 * Presence-aware input; omitted fields throw when accessed. */
final class PaymentCollectionStripePreviousAttributesInput extends Model {
    /** @param array{'account_id'?: string|null, 'elements'?: PaymentCollectionStripeElementsPreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'on_behalf_of'?: string|null, 'publishable_key'?: string|null, 'return_url'?: string|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentCollectionStripePreviousAttributesInput')); }
    /** Stripe connected account ID to pass as stripeAccount when initializing Stripe.js. Null when the payment has splits. When null, omit stripeAccount when initializing Stripe.js. anyOf[1] (Value): string. Stripe connected account ID to pass as stripeAccount when initializing Stripe.js. Null when the payment has splits. When null, omit stripeAccount when initializing Stripe.js. Example: "acct_1234567890". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When account_id is omitted; use hasAccountId() or valueOrDefault().
     */
    public function getAccountId(): mixed { return $this->get('account_id'); }
    public function hasAccountId(): bool { return $this->has('account_id'); }
    /** Stripe Elements configuration for the available payment methods and amounts. anyOf[1] (Value): {@see PaymentCollectionStripeElementsPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return PaymentCollectionStripeElementsPreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When elements is omitted; use hasElements() or valueOrDefault().
     */
    public function getElements(): mixed { return $this->get('elements'); }
    public function hasElements(): bool { return $this->has('elements'); }
    /** Stripe account ID of the collecting merchant. Present when this payment uses Stripe on_behalf_of, currently payments with splits. Pass it as onBehalfOf when creating Stripe Elements. anyOf[1] (Value): string. Stripe account ID of the collecting merchant. Present when this payment uses Stripe on_behalf_of, currently payments with splits. Pass it as onBehalfOf when creating Stripe Elements. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When on_behalf_of is omitted; use hasOnBehalfOf() or valueOrDefault().
     */
    public function getOnBehalfOf(): mixed { return $this->get('on_behalf_of'); }
    public function hasOnBehalfOf(): bool { return $this->has('on_behalf_of'); }
    /** Publishable Stripe key for initializing the payment client. anyOf[1] (Value): string. Publishable Stripe key for initializing the payment client. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When publishable_key is omitted; use hasPublishableKey() or valueOrDefault().
     */
    public function getPublishableKey(): mixed { return $this->get('publishable_key'); }
    public function hasPublishableKey(): bool { return $this->has('publishable_key'); }
    /** URL the buyer returns to after a redirect payment step. anyOf[1] (Value): string. URL the buyer returns to after a redirect payment step. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When return_url is omitted; use hasReturnUrl() or valueOrDefault().
     */
    public function getReturnUrl(): mixed { return $this->get('return_url'); }
    public function hasReturnUrl(): bool { return $this->has('return_url'); }
}
