<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?PendingPaymentActionPaymentIntentSubject $payment_intent
 * @property-read ?PendingPaymentActionSetupPaymentSourceSubject $setup_payment_source
 * Presence-aware response; omitted optional fields return null. */
final class PendingPaymentActionSubject extends Model {
    /** @param array{'payment_intent'?: mixed, 'setup_payment_source'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PendingPaymentActionSubject')); }
    /** PaymentIntent that requires buyer authentication. It can be a standalone intent or an order-owned payment leg. The payment intent that needs buyer authentication in a pending payment action.
     * @return ?PendingPaymentActionPaymentIntentSubject
     */
    public function getPaymentIntent(): ?PendingPaymentActionPaymentIntentSubject { return $this->get('payment_intent'); }
    public function hasPaymentIntent(): bool { return $this->has('payment_intent'); }
    /** Future-billing payment method setup that requires buyer authentication. The payment method setup that needs buyer authentication in a pending payment action.
     * @return ?PendingPaymentActionSetupPaymentSourceSubject
     */
    public function getSetupPaymentSource(): ?PendingPaymentActionSetupPaymentSourceSubject { return $this->get('setup_payment_source'); }
    public function hasSetupPaymentSource(): bool { return $this->has('setup_payment_source'); }
}
