<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read StripePaymentClientAction $stripe
 * Presence-aware response; omitted optional fields return null. */
final class PaymentClientAction extends Model {
    /** @param array{'stripe': mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentClientAction')); }
    /** Shape $ (Value): {@see StripePaymentClientAction}. Stripe.js initialization context plus one flow-specific authority object. Exactly one of payment_intent or setup_intent is present.
     * @return StripePaymentClientAction
     */
    public function getStripe(): StripePaymentClientAction { return $this->get('stripe'); }
    public function hasStripe(): bool { return $this->has('stripe'); }
}
