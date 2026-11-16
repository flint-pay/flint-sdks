<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValuePreviousAttributes|null $amount_money
 * @property-read string|null $destination
 * @property-read list<RefundGiftCardDestinationPreviousAttributes>|null $destination_cards
 * @property-read string|null $failure_reason
 * @property-read string|null $gift_card_id
 * @property-read string|null $gift_card_redemption_id
 * @property-read string|null $payment_intent_id
 * @property-read string|null $refund_allocation_id
 * @property-read MoneyValuePreviousAttributes|null $refunded_tip_money
 * @property-read string|null $status
 * @property-read string|null $succeeded_at
 * @property-read string|null $tender_type
 * Presence-aware response; omitted optional fields return null. */
final class RefundTenderAllocationPreviousAttributes extends Model {
    /** @param array{'amount_money'?: mixed, 'destination'?: mixed, 'destination_cards'?: mixed, 'failure_reason'?: mixed, 'gift_card_id'?: mixed, 'gift_card_redemption_id'?: mixed, 'payment_intent_id'?: mixed, 'refund_allocation_id'?: mixed, 'refunded_tip_money'?: mixed, 'status'?: mixed, 'succeeded_at'?: mixed, 'tender_type'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('RefundTenderAllocationPreviousAttributes')); }
    /** Amount of the refund that went to this tender, including `refunded_tip_money`. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getAmountMoney(): MoneyValuePreviousAttributes|null { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** Where this allocation is refunded. original returns value to the tender that paid; new_gift_card issues new Flint gift cards. Payment intent store credit requires a succeeded USD card, Apple Pay, Google Pay, or Link payment that belongs to an order, with no open chargeback. Affirm, ACH debit, other payment options, non-USD payments, and payments without an order return INVALID_REQUEST with a NOT_ALLOWED detail. Payment chargebacks use the existing dispute refusal. Gift card redemption destinations are unaffected by the payment restrictions. Value enum: "original", "new_gift_card". anyOf[1] (Value): string. Where this allocation is refunded. original returns value to the tender that paid; new_gift_card issues new Flint gift cards. Payment intent store credit requires a succeeded USD card, Apple Pay, Google Pay, or Link payment that belongs to an order, with no open chargeback. Affirm, ACH debit, other payment options, non-USD payments, and payments without an order return INVALID_REQUEST with a NOT_ALLOWED detail. Payment chargebacks use the existing dispute refusal. Gift card redemption destinations are unaffected by the payment restrictions. Default: "original". Value enum: "original", "new_gift_card". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getDestination(): string|null { return $this->get('destination'); }
    public function hasDestination(): bool { return $this->has('destination'); }
    /** The gift cards that received this allocation's value, with the amount each received. Absent when the value went back to a payment. anyOf[1] (Value): Array of {@see RefundGiftCardDestinationPreviousAttributes}. The gift cards that received this allocation's value, with the amount each received. Absent when the value went back to a payment. anyOf[1][] (Value): {@see RefundGiftCardDestinationPreviousAttributes}. anyOf[2] (Value): null.
     * @return list<RefundGiftCardDestinationPreviousAttributes>|null
     */
    public function getDestinationCards(): array|null { return $this->get('destination_cards'); }
    public function hasDestinationCards(): bool { return $this->has('destination_cards'); }
    /** Why a refund failed or a payment refund was canceled. Failed and canceled amounts become refundable again, except a refund with reason payment_returned that failed with payment_disputed: the buyer won a dispute on the charge, so nothing is left to refund. A payment_returned refund that failed with refund_abandoned can't be retried through Flint either: the money is in your balance. Flint hasn't repaid the buyer. Repay them another way if you haven't already. Fix the cause, then create a new refund with a new idempotency key. Unknown provider values are returned as refund_failed. Value enum: "expired_or_canceled_card", "lost_or_stolen_card", "insufficient_funds", "insufficient_available_balance", "declined", "merchant_request", "payment_disputed", "refund_abandoned", "payment_refund_failed", "payment_refund_not_attempted", "refund_failed". anyOf[1] (Value): string. Why a refund failed or a payment refund was canceled. Failed and canceled amounts become refundable again, except a refund with reason payment_returned that failed with payment_disputed: the buyer won a dispute on the charge, so nothing is left to refund. A payment_returned refund that failed with refund_abandoned can't be retried through Flint either: the money is in your balance. Flint hasn't repaid the buyer. Repay them another way if you haven't already. Fix the cause, then create a new refund with a new idempotency key. Unknown provider values are returned as refund_failed. Value enum: "expired_or_canceled_card", "lost_or_stolen_card", "insufficient_funds", "insufficient_available_balance", "declined", "merchant_request", "payment_disputed", "refund_abandoned", "payment_refund_failed", "payment_refund_not_attempted", "refund_failed". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getFailureReason(): string|null { return $this->get('failure_reason'); }
    public function hasFailureReason(): bool { return $this->has('failure_reason'); }
    /** The gift card whose redemption this allocation refunded. Present when `tender_type` is `gift_card_redemption`. anyOf[1] (Value): string. The gift card whose redemption this allocation refunded. Present when `tender_type` is `gift_card_redemption`. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getGiftCardId(): string|null { return $this->get('gift_card_id'); }
    public function hasGiftCardId(): bool { return $this->has('gift_card_id'); }
    /** The gift card redemption this allocation refunded. Present when `tender_type` is `gift_card_redemption`. anyOf[1] (Value): string. The gift card redemption this allocation refunded. Present when `tender_type` is `gift_card_redemption`. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getGiftCardRedemptionId(): string|null { return $this->get('gift_card_redemption_id'); }
    public function hasGiftCardRedemptionId(): bool { return $this->has('gift_card_redemption_id'); }
    /** The payment this allocation refunded. Present when `tender_type` is `payment_intent`. anyOf[1] (Value): string. The payment this allocation refunded. Present when `tender_type` is `payment_intent`. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getPaymentIntentId(): string|null { return $this->get('payment_intent_id'); }
    public function hasPaymentIntentId(): bool { return $this->has('payment_intent_id'); }
    /** Unique identifier for this tender allocation, prefixed `rta_`. anyOf[1] (Value): string. Unique identifier for this tender allocation, prefixed `rta_`. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getRefundAllocationId(): string|null { return $this->get('refund_allocation_id'); }
    public function hasRefundAllocationId(): bool { return $this->has('refund_allocation_id'); }
    /** Share of this allocation's `amount_money` that refunds tips. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getRefundedTipMoney(): MoneyValuePreviousAttributes|null { return $this->get('refunded_tip_money'); }
    public function hasRefundedTipMoney(): bool { return $this->has('refunded_tip_money'); }
    /** Status of this payment refund or tender allocation. A succeeded refund can still fail after a bank rejection. Parent status transitions send refund.succeeded, refund.partially_succeeded, or refund.failed; other public changes send refund.updated. Value enum: "pending", "requires_action", "succeeded", "failed", "canceled". anyOf[1] (Value): string. Status of this payment refund or tender allocation. A succeeded refund can still fail after a bank rejection. Parent status transitions send refund.succeeded, refund.partially_succeeded, or refund.failed; other public changes send refund.updated. Value enum: "pending", "requires_action", "succeeded", "failed", "canceled". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getStatus(): string|null { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** When this tender's `status` first became `succeeded`. Gift card credit and store credit (`destination` `new_gift_card`) succeed when the refund is created. A `payment_intent` tender with `destination` `original` has the same value as its `payment_refunds` entry; store credit has no `payment_refunds` entry. Tax reports use it as `refund_succeeded_at` on the rows for this tender. Present only while `status` is `succeeded`. anyOf[1] (Value): string. When this tender's `status` first became `succeeded`. Gift card credit and store credit (`destination` `new_gift_card`) succeed when the refund is created. A `payment_intent` tender with `destination` `original` has the same value as its `payment_refunds` entry; store credit has no `payment_refunds` entry. Tax reports use it as `refund_succeeded_at` on the rows for this tender. Present only while `status` is `succeeded`. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getSucceededAt(): string|null { return $this->get('succeeded_at'); }
    public function hasSucceededAt(): bool { return $this->has('succeeded_at'); }
    /** Which kind of original tender this allocation refunded. Value enum: "payment_intent", "gift_card_redemption". anyOf[1] (Value): string. Which kind of original tender this allocation refunded. Value enum: "payment_intent", "gift_card_redemption". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getTenderType(): string|null { return $this->get('tender_type'); }
    public function hasTenderType(): bool { return $this->has('tender_type'); }
}
