<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read CreateRefundResultTenderAllocationsItemAmountMoney $amount_money
 * @property-read ?string $destination
 * @property-read ?list<CreateRefundResultTenderAllocationsItemDestinationCardsItem> $destination_cards
 * @property-read ?string $failure_reason
 * @property-read ?string $gift_card_id
 * @property-read ?string $gift_card_redemption_id
 * @property-read ?string $payment_intent_id
 * @property-read string $refund_allocation_id
 * @property-read CreateRefundResultTenderAllocationsItemRefundedTipMoney $refunded_tip_money
 * @property-read string $status
 * @property-read string $tender_type
 * Presence-aware response; omitted optional fields return null. */
final class CreateRefundResultTenderAllocationsItem extends Model {
    /** @param array{'amount_money': mixed, 'destination'?: string, 'destination_cards'?: list<mixed>, 'failure_reason'?: string, 'gift_card_id'?: string, 'gift_card_redemption_id'?: string, 'payment_intent_id'?: string, 'refund_allocation_id': string, 'refunded_tip_money': mixed, 'status': string, 'tender_type': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreateRefundResultTenderAllocationsItem')); }
    /** Shape $ (Value): {@see CreateRefundResultTenderAllocationsItemAmountMoney}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return CreateRefundResultTenderAllocationsItemAmountMoney
     */
    public function getAmountMoney(): CreateRefundResultTenderAllocationsItemAmountMoney { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** Shape $ (Value): string. Where this allocation is refunded. original returns value to the tender that paid; new_gift_card issues new Flint gift cards. Payment intent store credit requires a succeeded USD card, Apple Pay, Google Pay, or Link payment that belongs to an order, with no open chargeback. Affirm, ACH debit, other payment options, non-USD payments, and payments without an order return INVALID_REQUEST with a NOT_ALLOWED detail. Payment chargebacks use the existing dispute refusal. Gift card redemption destinations are unaffected by the payment restrictions. Default: "original". Value enum: "original", "new_gift_card".
     * @return ?string
     */
    public function getDestination(): ?string { return $this->get('destination'); }
    public function hasDestination(): bool { return $this->has('destination'); }
    /** Shape $ (Value): Array of ({@see CreateRefundResultTenderAllocationsItemDestinationCardsItem} and {@see RefundGiftCardDestination}). Shape $[] (Value): {@see CreateRefundResultTenderAllocationsItemDestinationCardsItem}. A gift card that received part of a refund, with the amount credited.
     * @return ?list<CreateRefundResultTenderAllocationsItemDestinationCardsItem>
     */
    public function getDestinationCards(): ?array { return $this->get('destination_cards'); }
    public function hasDestinationCards(): bool { return $this->has('destination_cards'); }
    /** Shape $ (Value): string. Why a refund failed or a payment refund was canceled. Failed and canceled amounts become refundable again. Fix the cause, then create a new refund with a new idempotency key. Unknown provider values are returned as refund_failed. Value enum: "expired_or_canceled_card", "lost_or_stolen_card", "insufficient_funds", "insufficient_available_balance", "declined", "merchant_request", "payment_disputed", "payment_refund_failed", "payment_refund_not_attempted", "refund_failed".
     * @return ?string
     */
    public function getFailureReason(): ?string { return $this->get('failure_reason'); }
    public function hasFailureReason(): bool { return $this->has('failure_reason'); }
    /** Shape $ (Value): string.
     * @return ?string
     */
    public function getGiftCardId(): ?string { return $this->get('gift_card_id'); }
    public function hasGiftCardId(): bool { return $this->has('gift_card_id'); }
    /** Shape $ (Value): string.
     * @return ?string
     */
    public function getGiftCardRedemptionId(): ?string { return $this->get('gift_card_redemption_id'); }
    public function hasGiftCardRedemptionId(): bool { return $this->has('gift_card_redemption_id'); }
    /** Shape $ (Value): string.
     * @return ?string
     */
    public function getPaymentIntentId(): ?string { return $this->get('payment_intent_id'); }
    public function hasPaymentIntentId(): bool { return $this->has('payment_intent_id'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getRefundAllocationId(): string { return $this->get('refund_allocation_id'); }
    public function hasRefundAllocationId(): bool { return $this->has('refund_allocation_id'); }
    /** Shape $ (Value): {@see CreateRefundResultTenderAllocationsItemRefundedTipMoney}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return CreateRefundResultTenderAllocationsItemRefundedTipMoney
     */
    public function getRefundedTipMoney(): CreateRefundResultTenderAllocationsItemRefundedTipMoney { return $this->get('refunded_tip_money'); }
    public function hasRefundedTipMoney(): bool { return $this->has('refunded_tip_money'); }
    /** Shape $ (Value): string. Status of this payment refund or tender allocation. A succeeded refund can still fail after a bank rejection. Parent status transitions send refund.succeeded, refund.partially_succeeded, or refund.failed; other public changes send refund.updated. Value enum: "pending", "requires_action", "succeeded", "failed", "canceled".
     * @return string
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Shape $ (Value): string.  Value enum: "payment_intent", "gift_card_redemption".
     * @return string
     */
    public function getTenderType(): string { return $this->get('tender_type'); }
    public function hasTenderType(): bool { return $this->has('tender_type'); }
}
