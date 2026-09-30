<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read Order $order
 * @property-read OrderPaymentAttempt $payment_attempt
 * @property-read PaymentIntent $payment_intent
 * Presence-aware response; omitted fields throw when accessed. */
final class OrderPaymentLifecycleResult extends Model {
    /** @param array{'order': mixed, 'payment_attempt'?: mixed, 'payment_intent': mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrderPaymentLifecycleResult')); }
    /** @return Order
     * @throws SdkError When order is omitted; use hasOrder() or valueOrDefault().
     */
    public function getOrder(): Order { return $this->get('order'); }
    public function hasOrder(): bool { return $this->has('order'); }
    /** @return OrderPaymentAttempt
     * @throws SdkError When payment_attempt is omitted; use hasPaymentAttempt() or valueOrDefault().
     */
    public function getPaymentAttempt(): OrderPaymentAttempt { return $this->get('payment_attempt'); }
    public function hasPaymentAttempt(): bool { return $this->has('payment_attempt'); }
    /** @return PaymentIntent
     * @throws SdkError When payment_intent is omitted; use hasPaymentIntent() or valueOrDefault().
     */
    public function getPaymentIntent(): PaymentIntent { return $this->get('payment_intent'); }
    public function hasPaymentIntent(): bool { return $this->has('payment_intent'); }
}
