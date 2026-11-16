<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read PendingPaymentActionPaymentIntentSubjectPreviousAttributes|null $payment_intent
 * @property-read PendingPaymentActionSetupPaymentSourceSubjectPreviousAttributes|null $setup_payment_source
 * Presence-aware response; omitted optional fields return null. */
final class PendingPaymentActionSubjectPreviousAttributes extends Model {
    /** @param array{'payment_intent'?: mixed, 'setup_payment_source'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PendingPaymentActionSubjectPreviousAttributes')); }
    /** PaymentIntent that requires buyer authentication or card presentment. It can be a standalone intent or an order-owned payment leg. anyOf[1] (Value): {@see PendingPaymentActionPaymentIntentSubjectPreviousAttributes}. anyOf[2] (Value): null.
     * @return PendingPaymentActionPaymentIntentSubjectPreviousAttributes|null
     */
    public function getPaymentIntent(): PendingPaymentActionPaymentIntentSubjectPreviousAttributes|null { return $this->get('payment_intent'); }
    public function hasPaymentIntent(): bool { return $this->has('payment_intent'); }
    /** Future-billing payment method setup that requires buyer authentication. anyOf[1] (Value): {@see PendingPaymentActionSetupPaymentSourceSubjectPreviousAttributes}. anyOf[2] (Value): null.
     * @return PendingPaymentActionSetupPaymentSourceSubjectPreviousAttributes|null
     */
    public function getSetupPaymentSource(): PendingPaymentActionSetupPaymentSourceSubjectPreviousAttributes|null { return $this->get('setup_payment_source'); }
    public function hasSetupPaymentSource(): bool { return $this->has('setup_payment_source'); }
}
