<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read StripePaymentClientAction $stripe
 * @property-read string $type
 * Presence-aware response; omitted optional fields return null. */
final class PendingPaymentActionClientActionStripe extends Model {
    /** @param array{'stripe': mixed, 'type': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PendingPaymentActionClientActionStripe')); }
    /** Stripe.js initialization and a Stripe client secret returned by Flint's API for client_action_type stripe. Use the client secret only with handleNextAction; it can also confirm the underlying payment with another card. Stripe initialization context plus one flow-specific authority object. Exactly one of payment_intent, setup_intent, or terminal_payment_intent is present.
     * @return StripePaymentClientAction
     */
    public function getStripe(): StripePaymentClientAction { return $this->get('stripe'); }
    public function hasStripe(): bool { return $this->has('stripe'); }
    /** Selects how to complete the step. The url type opens the authentication page; the stripe type returns a Stripe client secret for Stripe.js handleNextAction. Value enum: "stripe".
     * @return string
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
}
