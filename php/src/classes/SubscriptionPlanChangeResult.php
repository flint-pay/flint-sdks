<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read Order|null $order
 * @property-read OrderPaymentAttempt|null $order_payment_attempt
 * @property-read Subscription $subscription
 * Presence-aware response; omitted optional fields return null. */
final class SubscriptionPlanChangeResult extends Model {
    /** @param array{'order': mixed, 'order_payment_attempt': mixed, 'subscription': mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionPlanChangeResult')); }
    /** The new period's order when billing_starts is now, including a canceled order when payment fails. Null for next_renewal. anyOf[1] (Value): {@see Order}. A customer's purchase and its payment and fulfillment progress. anyOf[2] (Value): null.
     * @return Order|null
     */
    public function getOrder(): Order|null { return $this->get('order'); }
    public function hasOrder(): bool { return $this->has('order'); }
    /** The recorded payment attempt when billing_starts is now, including declines. Null for next_renewal. anyOf[1] (Value): {@see OrderPaymentAttempt}. An attempt to pay an order. anyOf[2] (Value): null.
     * @return OrderPaymentAttempt|null
     */
    public function getOrderPaymentAttempt(): OrderPaymentAttempt|null { return $this->get('order_payment_attempt'); }
    public function hasOrderPaymentAttempt(): bool { return $this->has('order_payment_attempt'); }
    /** A customer's recurring purchase.
     * @return Subscription
     */
    public function getSubscription(): Subscription { return $this->get('subscription'); }
    public function hasSubscription(): bool { return $this->has('subscription'); }
}
