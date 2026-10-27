<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read OrderInput|array<array-key, mixed>|\stdClass $order
 * @property-read OrderPaymentAttemptInput|array<array-key, mixed>|\stdClass $payment_attempt
 * @property-read PaymentIntentInput|array<array-key, mixed>|\stdClass $payment_intent
 * Presence-aware input; omitted fields throw when accessed. */
final class OrderPaymentLifecycleResultInput extends Model {
    /** @param array{'order': OrderInput|array<array-key, mixed>|\stdClass, 'payment_attempt'?: OrderPaymentAttemptInput|array<array-key, mixed>|\stdClass, 'payment_intent': PaymentIntentInput|array<array-key, mixed>|\stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrderPaymentLifecycleResultInput')); }
    /** Shape $ (Value): {@see OrderInput}. A customer's purchase and its payment and fulfillment progress.
     * @return OrderInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When order is omitted; use hasOrder() or valueOrDefault().
     */
    public function getOrder(): mixed { return $this->get('order'); }
    public function hasOrder(): bool { return $this->has('order'); }
    /** Shape $ (Value): {@see OrderPaymentAttemptInput}. An attempt to pay an order.
     * @return OrderPaymentAttemptInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When payment_attempt is omitted; use hasPaymentAttempt() or valueOrDefault().
     */
    public function getPaymentAttempt(): mixed { return $this->get('payment_attempt'); }
    public function hasPaymentAttempt(): bool { return $this->has('payment_attempt'); }
    /** Shape $ (Value): {@see PaymentIntentInput}. One payment from a buyer, standalone or as a leg of an order. amount_money is the amount requested. Once the payment is authorized, authorized_money equals amount_money and splits into captured_money (collected), capturable_money (still on hold), and released_money (returned without being charged), so authorized_money always equals the sum of those three. Reconcile revenue from captured_money.
     * @return PaymentIntentInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When payment_intent is omitted; use hasPaymentIntent() or valueOrDefault().
     */
    public function getPaymentIntent(): mixed { return $this->get('payment_intent'); }
    public function hasPaymentIntent(): bool { return $this->has('payment_intent'); }
}
