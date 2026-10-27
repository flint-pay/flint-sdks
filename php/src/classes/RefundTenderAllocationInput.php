<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $amount_money
 * @property-read string $destination
 * @property-read list<RefundGiftCardDestinationInput|array<array-key, mixed>|\stdClass> $destination_cards
 * @property-read string $failure_reason
 * @property-read string $gift_card_id
 * @property-read string $gift_card_redemption_id
 * @property-read string $payment_intent_id
 * @property-read string $refund_allocation_id
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $refunded_tip_money
 * @property-read string $status
 * @property-read string $tender_type
 * Presence-aware input; omitted fields throw when accessed. */
final class RefundTenderAllocationInput extends Model {
    /** @param array{'amount_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'destination'?: string, 'destination_cards'?: list<RefundGiftCardDestinationInput|array<array-key, mixed>|\stdClass>, 'failure_reason'?: string, 'gift_card_id'?: string, 'gift_card_redemption_id'?: string, 'payment_intent_id'?: string, 'refund_allocation_id': string, 'refunded_tip_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'status': string, 'tender_type': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('RefundTenderAllocationInput')); }
    /** Shape $ (Value): {@see MoneyValueInput}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When amount_money is omitted; use hasAmountMoney() or valueOrDefault().
     */
    public function getAmountMoney(): mixed { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** Shape $ (Value): string. Where this allocation is refunded. original returns value to the tender that paid; new_gift_card issues new Flint gift cards. Payment intent store credit requires a succeeded USD card, Apple Pay, Google Pay, or Link payment that belongs to an order, with no open chargeback. Affirm, ACH debit, other payment options, non-USD payments, and payments without an order return INVALID_REQUEST with a NOT_ALLOWED detail. Payment chargebacks use the existing dispute refusal. Gift card redemption destinations are unaffected by the payment restrictions. Default: "original". Value enum: "original", "new_gift_card".
     * @return string
     * @throws SdkError When destination is omitted; use hasDestination() or valueOrDefault().
     */
    public function getDestination(): string { return $this->get('destination'); }
    public function hasDestination(): bool { return $this->has('destination'); }
    /** Shape $ (Value): Array of {@see RefundGiftCardDestinationInput}. Shape $[] (Value): {@see RefundGiftCardDestinationInput}. A gift card that received part of a refund, with the amount credited.
     * @return list<RefundGiftCardDestinationInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When destination_cards is omitted; use hasDestinationCards() or valueOrDefault().
     */
    public function getDestinationCards(): array { return $this->get('destination_cards'); }
    public function hasDestinationCards(): bool { return $this->has('destination_cards'); }
    /** Shape $ (Value): string. Why a refund failed or a payment refund was canceled. Failed and canceled amounts become refundable again. Fix the cause, then create a new refund with a new idempotency key. Unknown provider values are returned as refund_failed. Value enum: "expired_or_canceled_card", "lost_or_stolen_card", "insufficient_funds", "insufficient_available_balance", "declined", "merchant_request", "payment_disputed", "payment_refund_failed", "payment_refund_not_attempted", "refund_failed".
     * @return string
     * @throws SdkError When failure_reason is omitted; use hasFailureReason() or valueOrDefault().
     */
    public function getFailureReason(): string { return $this->get('failure_reason'); }
    public function hasFailureReason(): bool { return $this->has('failure_reason'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When gift_card_id is omitted; use hasGiftCardId() or valueOrDefault().
     */
    public function getGiftCardId(): string { return $this->get('gift_card_id'); }
    public function hasGiftCardId(): bool { return $this->has('gift_card_id'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When gift_card_redemption_id is omitted; use hasGiftCardRedemptionId() or valueOrDefault().
     */
    public function getGiftCardRedemptionId(): string { return $this->get('gift_card_redemption_id'); }
    public function hasGiftCardRedemptionId(): bool { return $this->has('gift_card_redemption_id'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When payment_intent_id is omitted; use hasPaymentIntentId() or valueOrDefault().
     */
    public function getPaymentIntentId(): string { return $this->get('payment_intent_id'); }
    public function hasPaymentIntentId(): bool { return $this->has('payment_intent_id'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When refund_allocation_id is omitted; use hasRefundAllocationId() or valueOrDefault().
     */
    public function getRefundAllocationId(): string { return $this->get('refund_allocation_id'); }
    public function hasRefundAllocationId(): bool { return $this->has('refund_allocation_id'); }
    /** Shape $ (Value): {@see MoneyValueInput}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When refunded_tip_money is omitted; use hasRefundedTipMoney() or valueOrDefault().
     */
    public function getRefundedTipMoney(): mixed { return $this->get('refunded_tip_money'); }
    public function hasRefundedTipMoney(): bool { return $this->has('refunded_tip_money'); }
    /** Shape $ (Value): string. Status of this payment refund or tender allocation. A succeeded refund can still fail after a bank rejection. Parent status transitions send refund.succeeded, refund.partially_succeeded, or refund.failed; other public changes send refund.updated. Value enum: "pending", "requires_action", "succeeded", "failed", "canceled".
     * @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Shape $ (Value): string.  Value enum: "payment_intent", "gift_card_redemption".
     * @return string
     * @throws SdkError When tender_type is omitted; use hasTenderType() or valueOrDefault().
     */
    public function getTenderType(): string { return $this->get('tender_type'); }
    public function hasTenderType(): bool { return $this->has('tender_type'); }
}
