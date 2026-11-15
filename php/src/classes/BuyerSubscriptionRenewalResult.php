<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read BuyerOrder $order
 * @property-read BuyerOrderPaymentAttempt $order_payment_attempt
 * @property-read BuyerSubscription $subscription
 * Presence-aware response; omitted optional fields return null. */
final class BuyerSubscriptionRenewalResult extends Model {
    /** @param array{'order': mixed, 'order_payment_attempt': mixed, 'subscription': mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BuyerSubscriptionRenewalResult')); }
    /** The renewal order the attempt charged. A customer's purchase and its payment and fulfillment progress.
     * @return BuyerOrder
     */
    public function getOrder(): BuyerOrder { return $this->get('order'); }
    public function hasOrder(): bool { return $this->has('order'); }
    /** The payment attempt that charged the renewal order, including when the payment was declined. Read `last_payment_error` on it for a failed payment. An attempt to pay an order.
     * @return BuyerOrderPaymentAttempt
     */
    public function getOrderPaymentAttempt(): BuyerOrderPaymentAttempt { return $this->get('order_payment_attempt'); }
    public function hasOrderPaymentAttempt(): bool { return $this->has('order_payment_attempt'); }
    /** The subscription after the renewal attempt. A customer's recurring purchase.
     * @return BuyerSubscription
     */
    public function getSubscription(): BuyerSubscription { return $this->get('subscription'); }
    public function hasSubscription(): bool { return $this->has('subscription'); }
}
