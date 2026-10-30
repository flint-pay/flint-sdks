<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read BuyerOrderInput|array<array-key, mixed>|\stdClass $order
 * @property-read array{'completed_at'?: string|\DateTimeInterface, 'expected_outstanding_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'gift_card_redemptions': list<PaymentAttemptGiftCardRedemptionInput|array<array-key, mixed>|\stdClass>, 'is_resumable': bool, 'last_payment_error'?: BuyerPaymentErrorSummaryInput|array<array-key, mixed>|\stdClass, 'mode': string, 'order_payment_attempt_id': string, 'payment_intents': list<BuyerPaymentAttemptPaymentIntentInput|array<array-key, mixed>|\stdClass>, 'payment_method_save'?: OrderPaymentAttemptPaymentMethodSaveInput|array<array-key, mixed>|\stdClass, 'pending_actions': list<PendingPaymentActionInput|array<array-key, mixed>|\stdClass>, 'started_at'?: string|\DateTimeInterface, 'status': string, 'status_reason'?: string, ...}|object|null $order_payment_attempt
 * @property-read BuyerSubscriptionInput|array<array-key, mixed>|\stdClass $subscription
 * Presence-aware input; omitted fields throw when accessed. */
final class BuyerSubscriptionRenewalResultInput extends Model {
    /** @param array{'order': BuyerOrderInput|array<array-key, mixed>|\stdClass, 'order_payment_attempt': array{'completed_at'?: string|\DateTimeInterface, 'expected_outstanding_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'gift_card_redemptions': list<PaymentAttemptGiftCardRedemptionInput|array<array-key, mixed>|\stdClass>, 'is_resumable': bool, 'last_payment_error'?: BuyerPaymentErrorSummaryInput|array<array-key, mixed>|\stdClass, 'mode': string, 'order_payment_attempt_id': string, 'payment_intents': list<BuyerPaymentAttemptPaymentIntentInput|array<array-key, mixed>|\stdClass>, 'payment_method_save'?: OrderPaymentAttemptPaymentMethodSaveInput|array<array-key, mixed>|\stdClass, 'pending_actions': list<PendingPaymentActionInput|array<array-key, mixed>|\stdClass>, 'started_at'?: string|\DateTimeInterface, 'status': string, 'status_reason'?: string, ...}|object|null, 'subscription': BuyerSubscriptionInput|array<array-key, mixed>|\stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BuyerSubscriptionRenewalResultInput')); }
    /** A customer's purchase and its payment and fulfillment progress.
     * @return BuyerOrderInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When order is omitted; use hasOrder() or valueOrDefault().
     */
    public function getOrder(): mixed { return $this->get('order'); }
    public function hasOrder(): bool { return $this->has('order'); }
    /**  anyOf[1] (Value): {@see BuyerOrderPaymentAttemptInput}. An attempt to pay an order. anyOf[2] (Value): null.
     * @return array{'completed_at'?: string|\DateTimeInterface, 'expected_outstanding_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'gift_card_redemptions': list<PaymentAttemptGiftCardRedemptionInput|array<array-key, mixed>|\stdClass>, 'is_resumable': bool, 'last_payment_error'?: BuyerPaymentErrorSummaryInput|array<array-key, mixed>|\stdClass, 'mode': string, 'order_payment_attempt_id': string, 'payment_intents': list<BuyerPaymentAttemptPaymentIntentInput|array<array-key, mixed>|\stdClass>, 'payment_method_save'?: OrderPaymentAttemptPaymentMethodSaveInput|array<array-key, mixed>|\stdClass, 'pending_actions': list<PendingPaymentActionInput|array<array-key, mixed>|\stdClass>, 'started_at'?: string|\DateTimeInterface, 'status': string, 'status_reason'?: string, ...}|object|null
     * @throws SdkError When order_payment_attempt is omitted; use hasOrderPaymentAttempt() or valueOrDefault().
     */
    public function getOrderPaymentAttempt(): mixed { return $this->get('order_payment_attempt'); }
    public function hasOrderPaymentAttempt(): bool { return $this->has('order_payment_attempt'); }
    /** A customer's recurring purchase.
     * @return BuyerSubscriptionInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When subscription is omitted; use hasSubscription() or valueOrDefault().
     */
    public function getSubscription(): mixed { return $this->get('subscription'); }
    public function hasSubscription(): bool { return $this->has('subscription'); }
}
