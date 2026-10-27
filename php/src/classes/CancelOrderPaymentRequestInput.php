<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $cancellation_reason
 * @property-read string $order_payment_attempt_id
 * Presence-aware input; omitted fields throw when accessed. */
final class CancelOrderPaymentRequestInput extends Model {
    /** @param array{'cancellation_reason'?: string, 'order_payment_attempt_id'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CancelOrderPaymentRequestInput')); }
    /** Shape $ (Value): string. Optional merchant-supplied cancellation reason. Value enum: "requested_by_customer", "duplicate", "fraudulent", "abandoned".
     * @return string
     * @throws SdkError When cancellation_reason is omitted; use hasCancellationReason() or valueOrDefault().
     */
    public function getCancellationReason(): string { return $this->get('cancellation_reason'); }
    public function hasCancellationReason(): bool { return $this->has('cancellation_reason'); }
    /** Shape $ (Value): string. Owning Flint payment attempt ID. Required while the payment leg belongs to an active attempt. minLength: 1.
     * @return string
     * @throws SdkError When order_payment_attempt_id is omitted; use hasOrderPaymentAttemptId() or valueOrDefault().
     */
    public function getOrderPaymentAttemptId(): string { return $this->get('order_payment_attempt_id'); }
    public function hasOrderPaymentAttemptId(): bool { return $this->has('order_payment_attempt_id'); }
}
