<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read Order $order
 * @property-read ?OrderPaymentAttempt $payment_attempt
 * @property-read PaymentIntent $payment_intent
 * Presence-aware response; omitted optional fields return null. */
final class OrderPaymentLifecycleResult extends Model {
    /** @param array{'order': mixed, 'payment_attempt'?: mixed, 'payment_intent': mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrderPaymentLifecycleResult')); }
    /** Shape $ (Value): {@see Order}. A customer's purchase and its payment and fulfillment progress.
     * @return Order
     */
    public function getOrder(): Order { return $this->get('order'); }
    public function hasOrder(): bool { return $this->has('order'); }
    /** Shape $ (Value): {@see OrderPaymentAttempt}. An attempt to pay an order.
     * @return ?OrderPaymentAttempt
     */
    public function getPaymentAttempt(): ?OrderPaymentAttempt { return $this->get('payment_attempt'); }
    public function hasPaymentAttempt(): bool { return $this->has('payment_attempt'); }
    /** Shape $ (Value): {@see PaymentIntent}. One payment from a buyer, standalone or as a leg of an order. amount_money is the amount requested. Once the payment is authorized, authorized_money equals amount_money and splits into captured_money (collected), capturable_money (still on hold), and released_money (returned without being charged), so authorized_money always equals the sum of those three. Reconcile revenue from captured_money.
     * @return PaymentIntent
     */
    public function getPaymentIntent(): PaymentIntent { return $this->get('payment_intent'); }
    public function hasPaymentIntent(): bool { return $this->has('payment_intent'); }
}
