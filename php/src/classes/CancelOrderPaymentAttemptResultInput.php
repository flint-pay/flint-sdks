<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read OrderInput|array<array-key, mixed>|\stdClass $order
 * @property-read OrderPaymentAttemptInput|array<array-key, mixed>|\stdClass $payment_attempt
 * Presence-aware input; omitted fields throw when accessed. */
final class CancelOrderPaymentAttemptResultInput extends Model {
    /** @param array{'order': OrderInput|array<array-key, mixed>|\stdClass, 'payment_attempt'?: OrderPaymentAttemptInput|array<array-key, mixed>|\stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CancelOrderPaymentAttemptResultInput')); }
    /** @return OrderInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When order is omitted; use hasOrder() or valueOrDefault().
     */
    public function getOrder(): mixed { return $this->get('order'); }
    public function hasOrder(): bool { return $this->has('order'); }
    /** @return OrderPaymentAttemptInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When payment_attempt is omitted; use hasPaymentAttempt() or valueOrDefault().
     */
    public function getPaymentAttempt(): mixed { return $this->get('payment_attempt'); }
    public function hasPaymentAttempt(): bool { return $this->has('payment_attempt'); }
}
