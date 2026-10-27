<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read OrderInput|array<array-key, mixed>|\stdClass $order
 * @property-read OrderPaymentAttemptInput|array<array-key, mixed>|\stdClass $order_payment_attempt
 * Presence-aware input; omitted fields throw when accessed. */
final class CancelOrderPaymentAttemptResultInput extends Model {
    /** @param array{'order': OrderInput|array<array-key, mixed>|\stdClass, 'order_payment_attempt'?: OrderPaymentAttemptInput|array<array-key, mixed>|\stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CancelOrderPaymentAttemptResultInput')); }
    /** Shape $ (Value): {@see OrderInput}. A customer's purchase and its payment and fulfillment progress.
     * @return OrderInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When order is omitted; use hasOrder() or valueOrDefault().
     */
    public function getOrder(): mixed { return $this->get('order'); }
    public function hasOrder(): bool { return $this->has('order'); }
    /** Shape $ (Value): {@see OrderPaymentAttemptInput}. An attempt to pay an order.
     * @return OrderPaymentAttemptInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When order_payment_attempt is omitted; use hasOrderPaymentAttempt() or valueOrDefault().
     */
    public function getOrderPaymentAttempt(): mixed { return $this->get('order_payment_attempt'); }
    public function hasOrderPaymentAttempt(): bool { return $this->has('order_payment_attempt'); }
}
