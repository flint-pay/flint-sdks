<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read PendingPaymentActionPaymentIntentSubjectPreviousAttributesInput|array<array-key, mixed>|\stdClass|null $payment_intent
 * @property-read PendingPaymentActionSetupPaymentSourceSubjectPreviousAttributesInput|array<array-key, mixed>|\stdClass|null $setup_payment_source
 * Presence-aware input; omitted fields throw when accessed. */
final class PendingPaymentActionSubjectPreviousAttributesInput extends Model {
    /** @param array{'payment_intent'?: PendingPaymentActionPaymentIntentSubjectPreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'setup_payment_source'?: PendingPaymentActionSetupPaymentSourceSubjectPreviousAttributesInput|array<array-key, mixed>|\stdClass|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PendingPaymentActionSubjectPreviousAttributesInput')); }
    /** PaymentIntent that requires buyer authentication or card presentment. It can be a standalone intent or an order-owned payment leg. anyOf[1] (Value): {@see PendingPaymentActionPaymentIntentSubjectPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return PendingPaymentActionPaymentIntentSubjectPreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When payment_intent is omitted; use hasPaymentIntent() or valueOrDefault().
     */
    public function getPaymentIntent(): mixed { return $this->get('payment_intent'); }
    public function hasPaymentIntent(): bool { return $this->has('payment_intent'); }
    /** Future-billing payment method setup that requires buyer authentication. anyOf[1] (Value): {@see PendingPaymentActionSetupPaymentSourceSubjectPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return PendingPaymentActionSetupPaymentSourceSubjectPreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When setup_payment_source is omitted; use hasSetupPaymentSource() or valueOrDefault().
     */
    public function getSetupPaymentSource(): mixed { return $this->get('setup_payment_source'); }
    public function hasSetupPaymentSource(): bool { return $this->has('setup_payment_source'); }
}
