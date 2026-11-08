<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $component
 * @property-read string $stripe_payment_intent_id
 * Presence-aware input; omitted fields throw when accessed. */
final class DisputeResponseSessionStripeComponentInput extends Model {
    /** @param array{'component': string, 'stripe_payment_intent_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DisputeResponseSessionStripeComponentInput')); }
    /** Which embedded Stripe component to render. Value enum: "payment_disputes".
     * @return string
     * @throws SdkError When component is omitted; use hasComponent() or valueOrDefault().
     */
    public function getComponent(): string { return $this->get('component'); }
    public function hasComponent(): bool { return $this->has('component'); }
    /** Stripe PaymentIntent ID to pass to setPayment or the React payment prop. This is a Stripe ID, not the dispute's Flint payment_intent_id. Example: "pi_3QJ9oD2eZvKYlo2C0gP8kM3L".
     * @return string
     * @throws SdkError When stripe_payment_intent_id is omitted; use hasStripePaymentIntentId() or valueOrDefault().
     */
    public function getStripePaymentIntentId(): string { return $this->get('stripe_payment_intent_id'); }
    public function hasStripePaymentIntentId(): bool { return $this->has('stripe_payment_intent_id'); }
}
