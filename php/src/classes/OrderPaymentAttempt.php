<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $completed_at
 * @property-read MoneyValue $expected_outstanding_money
 * @property-read string $failure_code
 * @property-read string $failure_message
 * @property-read list<PaymentAttemptGiftCardRedemption> $gift_card_redemptions
 * @property-read bool $is_resumable
 * @property-read string $mode
 * @property-read string $order_payment_attempt_id
 * @property-read list<PaymentAttemptPaymentIntent> $payment_intents
 * @property-read list<PendingPaymentAction> $pending_actions
 * @property-read string $started_at
 * @property-read string $status
 * Presence-aware response; omitted fields throw when accessed. */
final class OrderPaymentAttempt extends Model {
    /** @param array{'completed_at'?: string, 'expected_outstanding_money': mixed, 'failure_code'?: string, 'failure_message'?: string, 'gift_card_redemptions'?: list<mixed>, 'is_resumable': bool, 'mode': string, 'order_payment_attempt_id': string, 'payment_intents'?: list<mixed>, 'pending_actions'?: list<mixed>, 'started_at'?: string, 'status': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrderPaymentAttempt')); }
    /** @return string
     * @throws SdkError When completed_at is omitted; use hasCompletedAt() or valueOrDefault().
     */
    public function getCompletedAt(): string { return $this->get('completed_at'); }
    public function hasCompletedAt(): bool { return $this->has('completed_at'); }
    /** @return MoneyValue
     * @throws SdkError When expected_outstanding_money is omitted; use hasExpectedOutstandingMoney() or valueOrDefault().
     */
    public function getExpectedOutstandingMoney(): MoneyValue { return $this->get('expected_outstanding_money'); }
    public function hasExpectedOutstandingMoney(): bool { return $this->has('expected_outstanding_money'); }
    /** @return string
     * @throws SdkError When failure_code is omitted; use hasFailureCode() or valueOrDefault().
     */
    public function getFailureCode(): string { return $this->get('failure_code'); }
    public function hasFailureCode(): bool { return $this->has('failure_code'); }
    /** @return string
     * @throws SdkError When failure_message is omitted; use hasFailureMessage() or valueOrDefault().
     */
    public function getFailureMessage(): string { return $this->get('failure_message'); }
    public function hasFailureMessage(): bool { return $this->has('failure_message'); }
    /** @return list<PaymentAttemptGiftCardRedemption>
     * @throws SdkError When gift_card_redemptions is omitted; use hasGiftCardRedemptions() or valueOrDefault().
     */
    public function getGiftCardRedemptions(): array { return $this->get('gift_card_redemptions'); }
    public function hasGiftCardRedemptions(): bool { return $this->has('gift_card_redemptions'); }
    /** @return bool
     * @throws SdkError When is_resumable is omitted; use hasIsResumable() or valueOrDefault().
     */
    public function getIsResumable(): bool { return $this->get('is_resumable'); }
    public function hasIsResumable(): bool { return $this->has('is_resumable'); }
    /** @return string
     * @throws SdkError When mode is omitted; use hasMode() or valueOrDefault().
     */
    public function getMode(): string { return $this->get('mode'); }
    public function hasMode(): bool { return $this->has('mode'); }
    /** @return string
     * @throws SdkError When order_payment_attempt_id is omitted; use hasOrderPaymentAttemptId() or valueOrDefault().
     */
    public function getOrderPaymentAttemptId(): string { return $this->get('order_payment_attempt_id'); }
    public function hasOrderPaymentAttemptId(): bool { return $this->has('order_payment_attempt_id'); }
    /** @return list<PaymentAttemptPaymentIntent>
     * @throws SdkError When payment_intents is omitted; use hasPaymentIntents() or valueOrDefault().
     */
    public function getPaymentIntents(): array { return $this->get('payment_intents'); }
    public function hasPaymentIntents(): bool { return $this->has('payment_intents'); }
    /** @return list<PendingPaymentAction>
     * @throws SdkError When pending_actions is omitted; use hasPendingActions() or valueOrDefault().
     */
    public function getPendingActions(): array { return $this->get('pending_actions'); }
    public function hasPendingActions(): bool { return $this->has('pending_actions'); }
    /** @return string
     * @throws SdkError When started_at is omitted; use hasStartedAt() or valueOrDefault().
     */
    public function getStartedAt(): string { return $this->get('started_at'); }
    public function hasStartedAt(): bool { return $this->has('started_at'); }
    /** @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
}
