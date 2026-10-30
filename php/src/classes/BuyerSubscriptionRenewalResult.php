<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read BuyerOrder $order
 * @property-read BuyerOrderPaymentAttempt|null $order_payment_attempt
 * @property-read BuyerSubscription $subscription
 * Presence-aware response; omitted optional fields return null. */
final class BuyerSubscriptionRenewalResult extends Model {
    /** @param array{'order': mixed, 'order_payment_attempt': mixed, 'subscription': mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BuyerSubscriptionRenewalResult')); }
    /** A customer's purchase and its payment and fulfillment progress.
     * @return BuyerOrder
     */
    public function getOrder(): BuyerOrder { return $this->get('order'); }
    public function hasOrder(): bool { return $this->has('order'); }
    /**  anyOf[1] (Value): {@see BuyerOrderPaymentAttempt}. An attempt to pay an order. anyOf[2] (Value): null.
     * @return BuyerOrderPaymentAttempt|null
     */
    public function getOrderPaymentAttempt(): BuyerOrderPaymentAttempt|null { return $this->get('order_payment_attempt'); }
    public function hasOrderPaymentAttempt(): bool { return $this->has('order_payment_attempt'); }
    /** A customer's recurring purchase.
     * @return BuyerSubscription
     */
    public function getSubscription(): BuyerSubscription { return $this->get('subscription'); }
    public function hasSubscription(): bool { return $this->has('subscription'); }
}
