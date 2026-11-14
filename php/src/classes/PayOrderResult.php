<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read Order $order
 * @property-read ?OrderPaymentAttempt $order_payment_attempt
 * Presence-aware response; omitted optional fields return null. */
final class PayOrderResult extends Model {
    /** @param array{'order': mixed, 'order_payment_attempt'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PayOrderResult')); }
    /** The order after the payment request. Send its `version` as `expected_version` in your next change to the order. A customer's purchase and its payment and fulfillment progress.
     * @return Order
     */
    public function getOrder(): Order { return $this->get('order'); }
    public function hasOrder(): bool { return $this->has('order'); }
    /** The payment attempt for this request. Read its `status` and `pending_actions` to decide what to do next. An attempt to pay an order.
     * @return ?OrderPaymentAttempt
     */
    public function getOrderPaymentAttempt(): ?OrderPaymentAttempt { return $this->get('order_payment_attempt'); }
    public function hasOrderPaymentAttempt(): bool { return $this->has('order_payment_attempt'); }
}
