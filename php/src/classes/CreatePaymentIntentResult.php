<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read PaymentCollection $payment_collection
 * @property-read PaymentIntent $payment_intent
 * Presence-aware response; omitted fields throw when accessed. */
final class CreatePaymentIntentResult extends Model {
    /** @param array{'payment_collection': mixed, 'payment_intent': mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreatePaymentIntentResult')); }
    /** @return PaymentCollection
     * @throws SdkError When payment_collection is omitted; use hasPaymentCollection() or valueOrDefault().
     */
    public function getPaymentCollection(): PaymentCollection { return $this->get('payment_collection'); }
    public function hasPaymentCollection(): bool { return $this->has('payment_collection'); }
    /** @return PaymentIntent
     * @throws SdkError When payment_intent is omitted; use hasPaymentIntent() or valueOrDefault().
     */
    public function getPaymentIntent(): PaymentIntent { return $this->get('payment_intent'); }
    public function hasPaymentIntent(): bool { return $this->has('payment_intent'); }
}
