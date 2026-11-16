<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $amount_money
 * @property-read string|null $destination
 * @property-read list<RefundGiftCardDestinationPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null $destination_cards
 * @property-read string|null $failure_reason
 * @property-read string|null $gift_card_id
 * @property-read string|null $gift_card_redemption_id
 * @property-read string|null $payment_intent_id
 * @property-read string|null $refund_allocation_id
 * @property-read MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $refunded_tip_money
 * @property-read string|null $status
 * @property-read string|\DateTimeInterface|null $succeeded_at
 * @property-read string|null $tender_type
 * Presence-aware input; omitted fields throw when accessed. */
final class RefundTenderAllocationPreviousAttributesInput extends Model {
    /** @param array{'amount_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'destination'?: string|null, 'destination_cards'?: list<RefundGiftCardDestinationPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null, 'failure_reason'?: string|null, 'gift_card_id'?: string|null, 'gift_card_redemption_id'?: string|null, 'payment_intent_id'?: string|null, 'refund_allocation_id'?: string|null, 'refunded_tip_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'status'?: string|null, 'succeeded_at'?: string|\DateTimeInterface|null, 'tender_type'?: string|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('RefundTenderAllocationPreviousAttributesInput')); }
    /** Amount of the refund that went to this tender, including `refunded_tip_money`. anyOf[1] (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When amount_money is omitted; use hasAmountMoney() or valueOrDefault().
     */
    public function getAmountMoney(): mixed { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** Where this allocation is refunded. original returns value to the tender that paid; new_gift_card issues new Flint gift cards. Payment intent store credit requires a succeeded USD card, Apple Pay, Google Pay, or Link payment that belongs to an order, with no open chargeback. Affirm, ACH debit, other payment options, non-USD payments, and payments without an order return INVALID_REQUEST with a NOT_ALLOWED detail. Payment chargebacks use the existing dispute refusal. Gift card redemption destinations are unaffected by the payment restrictions. Value enum: "original", "new_gift_card". anyOf[1] (Value): string. Where this allocation is refunded. original returns value to the tender that paid; new_gift_card issues new Flint gift cards. Payment intent store credit requires a succeeded USD card, Apple Pay, Google Pay, or Link payment that belongs to an order, with no open chargeback. Affirm, ACH debit, other payment options, non-USD payments, and payments without an order return INVALID_REQUEST with a NOT_ALLOWED detail. Payment chargebacks use the existing dispute refusal. Gift card redemption destinations are unaffected by the payment restrictions. Default: "original". Value enum: "original", "new_gift_card". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When destination is omitted; use hasDestination() or valueOrDefault().
     */
    public function getDestination(): mixed { return $this->get('destination'); }
    public function hasDestination(): bool { return $this->has('destination'); }
    /** The gift cards that received this allocation's value, with the amount each received. Absent when the value went back to a payment. anyOf[1] (Value): Array of {@see RefundGiftCardDestinationPreviousAttributesInput}. The gift cards that received this allocation's value, with the amount each received. Absent when the value went back to a payment. anyOf[1][] (Value): {@see RefundGiftCardDestinationPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return list<RefundGiftCardDestinationPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null
     * @throws SdkError When destination_cards is omitted; use hasDestinationCards() or valueOrDefault().
     */
    public function getDestinationCards(): mixed { return $this->get('destination_cards'); }
    public function hasDestinationCards(): bool { return $this->has('destination_cards'); }
    /** Why a refund failed or a payment refund was canceled. Failed and canceled amounts become refundable again, except a refund with reason payment_returned that failed with payment_disputed: the buyer won a dispute on the charge, so nothing is left to refund. A payment_returned refund that failed with refund_abandoned can't be retried through Flint either: the money is in your balance. Flint hasn't repaid the buyer. Repay them another way if you haven't already. Fix the cause, then create a new refund with a new idempotency key. Unknown provider values are returned as refund_failed. Value enum: "expired_or_canceled_card", "lost_or_stolen_card", "insufficient_funds", "insufficient_available_balance", "declined", "merchant_request", "payment_disputed", "refund_abandoned", "payment_refund_failed", "payment_refund_not_attempted", "refund_failed". anyOf[1] (Value): string. Why a refund failed or a payment refund was canceled. Failed and canceled amounts become refundable again, except a refund with reason payment_returned that failed with payment_disputed: the buyer won a dispute on the charge, so nothing is left to refund. A payment_returned refund that failed with refund_abandoned can't be retried through Flint either: the money is in your balance. Flint hasn't repaid the buyer. Repay them another way if you haven't already. Fix the cause, then create a new refund with a new idempotency key. Unknown provider values are returned as refund_failed. Value enum: "expired_or_canceled_card", "lost_or_stolen_card", "insufficient_funds", "insufficient_available_balance", "declined", "merchant_request", "payment_disputed", "refund_abandoned", "payment_refund_failed", "payment_refund_not_attempted", "refund_failed". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When failure_reason is omitted; use hasFailureReason() or valueOrDefault().
     */
    public function getFailureReason(): mixed { return $this->get('failure_reason'); }
    public function hasFailureReason(): bool { return $this->has('failure_reason'); }
    /** The gift card whose redemption this allocation refunded. Present when `tender_type` is `gift_card_redemption`. anyOf[1] (Value): string. The gift card whose redemption this allocation refunded. Present when `tender_type` is `gift_card_redemption`. Example: "gc_01KEZF7C00RT1618WYBM1Y94CG". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When gift_card_id is omitted; use hasGiftCardId() or valueOrDefault().
     */
    public function getGiftCardId(): mixed { return $this->get('gift_card_id'); }
    public function hasGiftCardId(): bool { return $this->has('gift_card_id'); }
    /** The gift card redemption this allocation refunded. Present when `tender_type` is `gift_card_redemption`. anyOf[1] (Value): string. The gift card redemption this allocation refunded. Present when `tender_type` is `gift_card_redemption`. Example: "gcr_01KEZF7C002YD2G2J734RRZTWT". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When gift_card_redemption_id is omitted; use hasGiftCardRedemptionId() or valueOrDefault().
     */
    public function getGiftCardRedemptionId(): mixed { return $this->get('gift_card_redemption_id'); }
    public function hasGiftCardRedemptionId(): bool { return $this->has('gift_card_redemption_id'); }
    /** The payment this allocation refunded. Present when `tender_type` is `payment_intent`. anyOf[1] (Value): string. The payment this allocation refunded. Present when `tender_type` is `payment_intent`. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When payment_intent_id is omitted; use hasPaymentIntentId() or valueOrDefault().
     */
    public function getPaymentIntentId(): mixed { return $this->get('payment_intent_id'); }
    public function hasPaymentIntentId(): bool { return $this->has('payment_intent_id'); }
    /** Unique identifier for this tender allocation, prefixed `rta_`. anyOf[1] (Value): string. Unique identifier for this tender allocation, prefixed `rta_`. Example: "rta_01KEZF7C00KQJTFKK6C47RSMB8". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When refund_allocation_id is omitted; use hasRefundAllocationId() or valueOrDefault().
     */
    public function getRefundAllocationId(): mixed { return $this->get('refund_allocation_id'); }
    public function hasRefundAllocationId(): bool { return $this->has('refund_allocation_id'); }
    /** Share of this allocation's `amount_money` that refunds tips. anyOf[1] (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When refunded_tip_money is omitted; use hasRefundedTipMoney() or valueOrDefault().
     */
    public function getRefundedTipMoney(): mixed { return $this->get('refunded_tip_money'); }
    public function hasRefundedTipMoney(): bool { return $this->has('refunded_tip_money'); }
    /** Status of this payment refund or tender allocation. A succeeded refund can still fail after a bank rejection. Parent status transitions send refund.succeeded, refund.partially_succeeded, or refund.failed; other public changes send refund.updated. Value enum: "pending", "requires_action", "succeeded", "failed", "canceled". anyOf[1] (Value): string. Status of this payment refund or tender allocation. A succeeded refund can still fail after a bank rejection. Parent status transitions send refund.succeeded, refund.partially_succeeded, or refund.failed; other public changes send refund.updated. Value enum: "pending", "requires_action", "succeeded", "failed", "canceled". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): mixed { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** When this tender's `status` first became `succeeded`. Gift card credit and store credit (`destination` `new_gift_card`) succeed when the refund is created. A `payment_intent` tender with `destination` `original` has the same value as its `payment_refunds` entry; store credit has no `payment_refunds` entry. Tax reports use it as `refund_succeeded_at` on the rows for this tender. Present only while `status` is `succeeded`. anyOf[1] (Value): string. When this tender's `status` first became `succeeded`. Gift card credit and store credit (`destination` `new_gift_card`) succeed when the refund is created. A `payment_intent` tender with `destination` `original` has the same value as its `payment_refunds` entry; store credit has no `payment_refunds` entry. Tax reports use it as `refund_succeeded_at` on the rows for this tender. Present only while `status` is `succeeded`. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When succeeded_at is omitted; use hasSucceededAt() or valueOrDefault().
     */
    public function getSucceededAt(): mixed { return $this->get('succeeded_at'); }
    public function hasSucceededAt(): bool { return $this->has('succeeded_at'); }
    /** Which kind of original tender this allocation refunded. Value enum: "payment_intent", "gift_card_redemption". anyOf[1] (Value): string. Which kind of original tender this allocation refunded. Value enum: "payment_intent", "gift_card_redemption". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When tender_type is omitted; use hasTenderType() or valueOrDefault().
     */
    public function getTenderType(): mixed { return $this->get('tender_type'); }
    public function hasTenderType(): bool { return $this->has('tender_type'); }
}
