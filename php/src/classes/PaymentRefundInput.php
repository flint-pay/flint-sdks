<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $amount_money
 * @property-read string $failure_reason
 * @property-read array{'amount_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'capture_method'?: string, 'created_at'?: string|\DateTimeInterface, 'customer_id'?: string, 'order_id'?: string, 'payment_intent_id': string, 'payment_source'?: PaymentSourceSummaryInput|array<array-key, mixed>|\stdClass, 'refund_status'?: string, 'status': string, 'updated_at'?: string|\DateTimeInterface, 'version': int, ...}|object|null $payment_intent
 * @property-read string $payment_intent_id
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $refunded_tip_money
 * @property-read string $status
 * @property-read string|\DateTimeInterface $succeeded_at
 * Presence-aware input; omitted fields throw when accessed. */
final class PaymentRefundInput extends Model {
    /** @param array{'amount_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'failure_reason'?: string, 'payment_intent'?: array{'amount_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'capture_method'?: string, 'created_at'?: string|\DateTimeInterface, 'customer_id'?: string, 'order_id'?: string, 'payment_intent_id': string, 'payment_source'?: PaymentSourceSummaryInput|array<array-key, mixed>|\stdClass, 'refund_status'?: string, 'status': string, 'updated_at'?: string|\DateTimeInterface, 'version': int, ...}|object|null, 'payment_intent_id'?: string, 'refunded_tip_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'status': string, 'succeeded_at'?: string|\DateTimeInterface, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentRefundInput')); }
    /** Amount refunded through this payment, including `refunded_tip_money`. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When amount_money is omitted; use hasAmountMoney() or valueOrDefault().
     */
    public function getAmountMoney(): mixed { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** Why a refund failed or a payment refund was canceled. Failed and canceled amounts become refundable again. Fix the cause, then create a new refund with a new idempotency key. Unknown provider values are returned as refund_failed. Value enum: "expired_or_canceled_card", "lost_or_stolen_card", "insufficient_funds", "insufficient_available_balance", "declined", "merchant_request", "payment_disputed", "payment_refund_failed", "payment_refund_not_attempted", "refund_failed".
     * @return string
     * @throws SdkError When failure_reason is omitted; use hasFailureReason() or valueOrDefault().
     */
    public function getFailureReason(): string { return $this->get('failure_reason'); }
    public function hasFailureReason(): bool { return $this->has('failure_reason'); }
    /** Present only when `expand` includes `payment_refunds.payment_intent`; `null` when expanded and there is no related payment intent. anyOf[1] (Value): {@see ExpandedPaymentIntentSummaryInput}. A payment intent's summary fields, including amount, status, and capture method, returned when the payment intent is expanded. anyOf[2] (Value): null.
     * @return array{'amount_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'capture_method'?: string, 'created_at'?: string|\DateTimeInterface, 'customer_id'?: string, 'order_id'?: string, 'payment_intent_id': string, 'payment_source'?: PaymentSourceSummaryInput|array<array-key, mixed>|\stdClass, 'refund_status'?: string, 'status': string, 'updated_at'?: string|\DateTimeInterface, 'version': int, ...}|object|null
     * @throws SdkError When payment_intent is omitted; use hasPaymentIntent() or valueOrDefault().
     */
    public function getPaymentIntent(): mixed { return $this->get('payment_intent'); }
    public function hasPaymentIntent(): bool { return $this->has('payment_intent'); }
    /** The payment this part of the refund returned money through. Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
     * @return string
     * @throws SdkError When payment_intent_id is omitted; use hasPaymentIntentId() or valueOrDefault().
     */
    public function getPaymentIntentId(): string { return $this->get('payment_intent_id'); }
    public function hasPaymentIntentId(): bool { return $this->has('payment_intent_id'); }
    /** Share of `amount_money` that refunds tips. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When refunded_tip_money is omitted; use hasRefundedTipMoney() or valueOrDefault().
     */
    public function getRefundedTipMoney(): mixed { return $this->get('refunded_tip_money'); }
    public function hasRefundedTipMoney(): bool { return $this->has('refunded_tip_money'); }
    /** Status of this payment refund or tender allocation. A succeeded refund can still fail after a bank rejection. Parent status transitions send refund.succeeded, refund.partially_succeeded, or refund.failed; other public changes send refund.updated. Value enum: "pending", "requires_action", "succeeded", "failed", "canceled".
     * @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** When this payment refund's `status` first became `succeeded`, as Flint recorded the processor's outcome. It keeps that time if the part fails and later succeeds again. The refund's `tender_allocations` entry for the same payment has the same value. Present only while `status` is `succeeded`. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When succeeded_at is omitted; use hasSucceededAt() or valueOrDefault().
     */
    public function getSucceededAt(): string|\DateTimeInterface { return $this->get('succeeded_at'); }
    public function hasSucceededAt(): bool { return $this->has('succeeded_at'); }
}
