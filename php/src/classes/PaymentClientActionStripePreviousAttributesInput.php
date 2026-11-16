<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read StripePaymentClientActionPreviousAttributesInput|array<array-key, mixed>|\stdClass|null $stripe
 * @property-read string|null $type
 * Presence-aware input; omitted fields throw when accessed. */
final class PaymentClientActionStripePreviousAttributesInput extends Model {
    /** @param array{'stripe'?: StripePaymentClientActionPreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'type'?: string|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentClientActionStripePreviousAttributesInput')); }
    /** Stripe.js initialization and a Stripe client secret returned by Flint's API for client_action_type stripe. Use the client secret only with handleNextAction; it can also confirm the underlying payment with another card. anyOf[1] (Value): {@see StripePaymentClientActionPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return StripePaymentClientActionPreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When stripe is omitted; use hasStripe() or valueOrDefault().
     */
    public function getStripe(): mixed { return $this->get('stripe'); }
    public function hasStripe(): bool { return $this->has('stripe'); }
    /** Selects how to complete the step. The url type opens the authentication page; the stripe type returns a Stripe client secret for Stripe.js handleNextAction. Value enum: "stripe". anyOf[1] (Value): string. Selects how to complete the step. The url type opens the authentication page; the stripe type returns a Stripe client secret for Stripe.js handleNextAction. Value enum: "stripe". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When type is omitted; use hasType() or valueOrDefault().
     */
    public function getType(): mixed { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
}
