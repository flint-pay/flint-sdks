<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read OrderInput|array<array-key, mixed>|\stdClass $order
 * @property-read array{'completed_at'?: string|\DateTimeInterface, 'expected_outstanding_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'gift_card_redemptions': list<PaymentAttemptGiftCardRedemptionInput|array<array-key, mixed>|\stdClass>, 'is_resumable': bool, 'last_payment_error'?: PaymentErrorSummaryInput|array<array-key, mixed>|\stdClass, 'mode': string, 'order_payment_attempt_id': string, 'payment_intents': list<PaymentAttemptPaymentIntentInput|array<array-key, mixed>|\stdClass>, 'payment_method_save'?: OrderPaymentAttemptPaymentMethodSaveInput|array<array-key, mixed>|\stdClass, 'pending_actions': list<PendingPaymentActionInput|array<array-key, mixed>|\stdClass>, 'started_at'?: string|\DateTimeInterface, 'status': string, 'status_reason'?: string, ...}|object|null $order_payment_attempt
 * @property-read SubscriptionInput|array<array-key, mixed>|\stdClass $subscription
 * Presence-aware input; omitted fields throw when accessed. */
final class SubscriptionRenewalResultInput extends Model {
    /** @param array{'order': OrderInput|array<array-key, mixed>|\stdClass, 'order_payment_attempt': array{'completed_at'?: string|\DateTimeInterface, 'expected_outstanding_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'gift_card_redemptions': list<PaymentAttemptGiftCardRedemptionInput|array<array-key, mixed>|\stdClass>, 'is_resumable': bool, 'last_payment_error'?: PaymentErrorSummaryInput|array<array-key, mixed>|\stdClass, 'mode': string, 'order_payment_attempt_id': string, 'payment_intents': list<PaymentAttemptPaymentIntentInput|array<array-key, mixed>|\stdClass>, 'payment_method_save'?: OrderPaymentAttemptPaymentMethodSaveInput|array<array-key, mixed>|\stdClass, 'pending_actions': list<PendingPaymentActionInput|array<array-key, mixed>|\stdClass>, 'started_at'?: string|\DateTimeInterface, 'status': string, 'status_reason'?: string, ...}|object|null, 'subscription': SubscriptionInput|array<array-key, mixed>|\stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionRenewalResultInput')); }
    /** Shape $ (Value): {@see OrderInput}. A customer's purchase and its payment and fulfillment progress.
     * @return OrderInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When order is omitted; use hasOrder() or valueOrDefault().
     */
    public function getOrder(): mixed { return $this->get('order'); }
    public function hasOrder(): bool { return $this->has('order'); }
    /** Shape $ (Value): {@see OrderPaymentAttemptInput} or null. Shape $.anyOf[1] (Value): {@see OrderPaymentAttemptInput}. An attempt to pay an order. Shape $.anyOf[2] (Value): null.
     * @return array{'completed_at'?: string|\DateTimeInterface, 'expected_outstanding_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'gift_card_redemptions': list<PaymentAttemptGiftCardRedemptionInput|array<array-key, mixed>|\stdClass>, 'is_resumable': bool, 'last_payment_error'?: PaymentErrorSummaryInput|array<array-key, mixed>|\stdClass, 'mode': string, 'order_payment_attempt_id': string, 'payment_intents': list<PaymentAttemptPaymentIntentInput|array<array-key, mixed>|\stdClass>, 'payment_method_save'?: OrderPaymentAttemptPaymentMethodSaveInput|array<array-key, mixed>|\stdClass, 'pending_actions': list<PendingPaymentActionInput|array<array-key, mixed>|\stdClass>, 'started_at'?: string|\DateTimeInterface, 'status': string, 'status_reason'?: string, ...}|object|null
     * @throws SdkError When order_payment_attempt is omitted; use hasOrderPaymentAttempt() or valueOrDefault().
     */
    public function getOrderPaymentAttempt(): mixed { return $this->get('order_payment_attempt'); }
    public function hasOrderPaymentAttempt(): bool { return $this->has('order_payment_attempt'); }
    /** Shape $ (Value): {@see SubscriptionInput}. A customer's recurring purchase.
     * @return SubscriptionInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When subscription is omitted; use hasSubscription() or valueOrDefault().
     */
    public function getSubscription(): mixed { return $this->get('subscription'); }
    public function hasSubscription(): bool { return $this->has('subscription'); }
}
