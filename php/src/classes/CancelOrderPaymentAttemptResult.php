<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read Order $order
 * @property-read ?OrderPaymentAttempt $order_payment_attempt
 * Presence-aware response; omitted optional fields return null. */
final class CancelOrderPaymentAttemptResult extends Model {
    /** @param array{'order': mixed, 'order_payment_attempt'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CancelOrderPaymentAttemptResult')); }
    /** The order after the cancellation. Send its `version` as `expected_version` in your next change to the order. A customer's purchase and its payment and fulfillment progress.
     * @return Order
     */
    public function getOrder(): Order { return $this->get('order'); }
    public function hasOrder(): bool { return $this->has('order'); }
    /** The payment attempt after the cancellation request. Read its `status` for the outcome. An attempt to pay an order.
     * @return ?OrderPaymentAttempt
     */
    public function getOrderPaymentAttempt(): ?OrderPaymentAttempt { return $this->get('order_payment_attempt'); }
    public function hasOrderPaymentAttempt(): bool { return $this->has('order_payment_attempt'); }
}
