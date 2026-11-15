<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read OrderInput|array<array-key, mixed>|\stdClass $order
 * @property-read OrderPaymentAttemptInput|array<array-key, mixed>|\stdClass $order_payment_attempt
 * @property-read SubscriptionInput|array<array-key, mixed>|\stdClass $subscription
 * Presence-aware input; omitted fields throw when accessed. */
final class SubscriptionRenewalResultInput extends Model {
    /** @param array{'order': OrderInput|array<array-key, mixed>|\stdClass, 'order_payment_attempt': OrderPaymentAttemptInput|array<array-key, mixed>|\stdClass, 'subscription': SubscriptionInput|array<array-key, mixed>|\stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionRenewalResultInput')); }
    /** The renewal order the attempt charged. A customer's purchase and its payment and fulfillment progress.
     * @return OrderInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When order is omitted; use hasOrder() or valueOrDefault().
     */
    public function getOrder(): mixed { return $this->get('order'); }
    public function hasOrder(): bool { return $this->has('order'); }
    /** The payment attempt that charged the renewal order, including when the payment was declined. Read `last_payment_error` on it for a failed payment. An attempt to pay an order.
     * @return OrderPaymentAttemptInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When order_payment_attempt is omitted; use hasOrderPaymentAttempt() or valueOrDefault().
     */
    public function getOrderPaymentAttempt(): mixed { return $this->get('order_payment_attempt'); }
    public function hasOrderPaymentAttempt(): bool { return $this->has('order_payment_attempt'); }
    /** The subscription after the renewal attempt. A customer's recurring purchase.
     * @return SubscriptionInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When subscription is omitted; use hasSubscription() or valueOrDefault().
     */
    public function getSubscription(): mixed { return $this->get('subscription'); }
    public function hasSubscription(): bool { return $this->has('subscription'); }
}
