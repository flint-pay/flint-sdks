<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read Order $order
 * @property-read OrderPaymentAttempt $payment_attempt
 * Presence-aware response; omitted fields throw when accessed. */
final class PayOrderResult extends Model {
    /** @param array{'order': mixed, 'payment_attempt'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PayOrderResult')); }
    /** @return Order
     * @throws SdkError When order is omitted; use hasOrder() or valueOrDefault().
     */
    public function getOrder(): Order { return $this->get('order'); }
    public function hasOrder(): bool { return $this->has('order'); }
    /** @return OrderPaymentAttempt
     * @throws SdkError When payment_attempt is omitted; use hasPaymentAttempt() or valueOrDefault().
     */
    public function getPaymentAttempt(): OrderPaymentAttempt { return $this->get('payment_attempt'); }
    public function hasPaymentAttempt(): bool { return $this->has('payment_attempt'); }
}
