<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $billing_starts
 * @property-read Order|null $order
 * @property-read OrderPaymentAttempt|null $order_payment_attempt
 * @property-read Subscription $subscription
 * Presence-aware response; omitted optional fields return null. */
final class SubscriptionQuantityChangeResult extends Model {
    /** @param array{'billing_starts': string, 'order': mixed, 'order_payment_attempt': mixed, 'subscription': mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionQuantityChangeResult')); }
    /** The resolved billing timing for this quantity change. Value enum: "prorated_now", "next_renewal", "period_end".
     * @return string
     */
    public function getBillingStarts(): string { return $this->get('billing_starts'); }
    public function hasBillingStarts(): bool { return $this->has('billing_starts'); }
    /** The proration order, including a closed unpaid order on decline. Null when billing_starts is next_renewal or period_end, or the net charge is zero. anyOf[1] (Value): {@see Order}. A customer's purchase and its payment and fulfillment progress. anyOf[2] (Value): null.
     * @return Order|null
     */
    public function getOrder(): Order|null { return $this->get('order'); }
    public function hasOrder(): bool { return $this->has('order'); }
    /** The payment attempt, including declines. Null when billing_starts is next_renewal or period_end, or the net charge is zero. anyOf[1] (Value): {@see OrderPaymentAttempt}. An attempt to pay an order. anyOf[2] (Value): null.
     * @return OrderPaymentAttempt|null
     */
    public function getOrderPaymentAttempt(): OrderPaymentAttempt|null { return $this->get('order_payment_attempt'); }
    public function hasOrderPaymentAttempt(): bool { return $this->has('order_payment_attempt'); }
    /** The updated subscription, or the unchanged subscription when payment fails. A customer's recurring purchase.
     * @return Subscription
     */
    public function getSubscription(): Subscription { return $this->get('subscription'); }
    public function hasSubscription(): bool { return $this->has('subscription'); }
}
