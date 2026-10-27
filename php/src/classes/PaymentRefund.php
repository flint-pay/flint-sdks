<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValue $amount_money
 * @property-read ?string $failure_reason
 * @property-read ExpandedPaymentIntentSummary|null $payment_intent
 * @property-read ?string $payment_intent_id
 * @property-read MoneyValue $refunded_tip_money
 * @property-read string $status
 * Presence-aware response; omitted optional fields return null. */
final class PaymentRefund extends Model {
    /** @param array{'amount_money': mixed, 'failure_reason'?: string, 'payment_intent'?: mixed, 'payment_intent_id'?: string, 'refunded_tip_money': mixed, 'status': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentRefund')); }
    /** Shape $ (Value): {@see MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getAmountMoney(): MoneyValue { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** Shape $ (Value): string. Why a refund failed or a payment refund was canceled. Failed and canceled amounts become refundable again. Fix the cause, then create a new refund with a new idempotency key. Unknown provider values are returned as refund_failed. Value enum: "expired_or_canceled_card", "lost_or_stolen_card", "insufficient_funds", "insufficient_available_balance", "declined", "merchant_request", "payment_disputed", "payment_refund_failed", "payment_refund_not_attempted", "refund_failed".
     * @return ?string
     */
    public function getFailureReason(): ?string { return $this->get('failure_reason'); }
    public function hasFailureReason(): bool { return $this->has('failure_reason'); }
    /** Shape $ (Value): {@see ExpandedPaymentIntentSummary} or null. Shape $.anyOf[1] (Value): {@see ExpandedPaymentIntentSummary}. A payment intent's summary fields, including amount, status, and capture method, returned when the payment intent is expanded. Shape $.anyOf[2] (Value): null.
     * @return ExpandedPaymentIntentSummary|null
     */
    public function getPaymentIntent(): ExpandedPaymentIntentSummary|null { return $this->get('payment_intent'); }
    public function hasPaymentIntent(): bool { return $this->has('payment_intent'); }
    /** Shape $ (Value): string.
     * @return ?string
     */
    public function getPaymentIntentId(): ?string { return $this->get('payment_intent_id'); }
    public function hasPaymentIntentId(): bool { return $this->has('payment_intent_id'); }
    /** Shape $ (Value): {@see MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getRefundedTipMoney(): MoneyValue { return $this->get('refunded_tip_money'); }
    public function hasRefundedTipMoney(): bool { return $this->has('refunded_tip_money'); }
    /** Shape $ (Value): string. Status of this payment refund or tender allocation. A succeeded refund can still fail after a bank rejection. Parent status transitions send refund.succeeded, refund.partially_succeeded, or refund.failed; other public changes send refund.updated. Value enum: "pending", "requires_action", "succeeded", "failed", "canceled".
     * @return string
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
}
