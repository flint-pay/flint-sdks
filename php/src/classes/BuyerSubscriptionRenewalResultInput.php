<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read BuyerOrderInput|array<array-key, mixed>|\stdClass $order
 * @property-read BuyerOrderPaymentAttemptInput|array<array-key, mixed>|\stdClass $order_payment_attempt
 * @property-read BuyerSubscriptionInput|array<array-key, mixed>|\stdClass $subscription
 * Presence-aware input; omitted fields throw when accessed. */
final class BuyerSubscriptionRenewalResultInput extends Model {
    /** @param array{'order': BuyerOrderInput|array<array-key, mixed>|\stdClass, 'order_payment_attempt': BuyerOrderPaymentAttemptInput|array<array-key, mixed>|\stdClass, 'subscription': BuyerSubscriptionInput|array<array-key, mixed>|\stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BuyerSubscriptionRenewalResultInput')); }
    /** The renewal order the attempt charged. A customer's purchase and its payment and fulfillment progress.
     * @return BuyerOrderInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When order is omitted; use hasOrder() or valueOrDefault().
     */
    public function getOrder(): mixed { return $this->get('order'); }
    public function hasOrder(): bool { return $this->has('order'); }
    /** The payment attempt that charged the renewal order, including when the payment was declined. Read `last_payment_error` on it for a failed payment. An attempt to pay an order.
     * @return BuyerOrderPaymentAttemptInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When order_payment_attempt is omitted; use hasOrderPaymentAttempt() or valueOrDefault().
     */
    public function getOrderPaymentAttempt(): mixed { return $this->get('order_payment_attempt'); }
    public function hasOrderPaymentAttempt(): bool { return $this->has('order_payment_attempt'); }
    /** The subscription after the renewal attempt. A customer's recurring purchase.
     * @return BuyerSubscriptionInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When subscription is omitted; use hasSubscription() or valueOrDefault().
     */
    public function getSubscription(): mixed { return $this->get('subscription'); }
    public function hasSubscription(): bool { return $this->has('subscription'); }
}
