<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $dispute_lost_money
 * @property-read MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $disputed_money
 * @property-read MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $exchange_refundable_money
 * @property-read SignedMoneyPreviousAttributesInput|array<array-key, mixed>|\stdClass|null $net_collected_money
 * @property-read MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $overpaid_money
 * @property-read MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $pending_refund_money
 * @property-read MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $released_money
 * @property-read MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $removed_money
 * @property-read MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $settled_tip_money
 * @property-read MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $subscription_credit_refundable_money
 * @property-read MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $outstanding_money
 * @property-read MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $paid_money
 * @property-read MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $refunded_money
 * @property-read MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $written_off_money
 * Presence-aware input; omitted fields throw when accessed. */
final class OrderSettlementAmountsPreviousAttributesInput extends Model {
    /** @param array{'dispute_lost_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'disputed_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'exchange_refundable_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'net_collected_money'?: SignedMoneyPreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'overpaid_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'pending_refund_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'released_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'removed_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'settled_tip_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'subscription_credit_refundable_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'outstanding_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'paid_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'refunded_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'written_off_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrderSettlementAmountsPreviousAttributesInput')); }
    /** Principal lost to chargebacks on counted order payments. A later win removes that dispute from this amount. Excludes dispute fees and does not reopen outstanding_money. anyOf[1] (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When dispute_lost_money is omitted; use hasDisputeLostMoney() or valueOrDefault().
     */
    public function getDisputeLostMoney(): mixed { return $this->get('dispute_lost_money'); }
    public function hasDisputeLostMoney(): bool { return $this->has('dispute_lost_money'); }
    /** Principal of open chargebacks on counted order payments. Inquiries and disputes on payment_returned payments contribute zero. Open disputes do not reduce net_collected_money. anyOf[1] (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When disputed_money is omitted; use hasDisputedMoney() or valueOrDefault().
     */
    public function getDisputedMoney(): mixed { return $this->get('disputed_money'); }
    public function hasDisputedMoney(): bool { return $this->has('disputed_money'); }
    /** Remaining money available for an order refund when an exchange affects the order. Excludes return credit and payments reserved for processing refunds or applied to the exchange. Present on affected order reads, including when the amount is zero. anyOf[1] (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When exchange_refundable_money is omitted; use hasExchangeRefundableMoney() or valueOrDefault().
     */
    public function getExchangeRefundableMoney(): mixed { return $this->get('exchange_refundable_money'); }
    public function hasExchangeRefundableMoney(): bool { return $this->has('exchange_refundable_money'); }
    /** Collected principal: paid_money minus refunded_money minus dispute_lost_money. Can be negative when refunds and lost disputes exceed payments. Excludes processing and dispute fees; open disputes do not reduce this amount. anyOf[1] (Value): {@see SignedMoneyPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return SignedMoneyPreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When net_collected_money is omitted; use hasNetCollectedMoney() or valueOrDefault().
     */
    public function getNetCollectedMoney(): mixed { return $this->get('net_collected_money'); }
    public function hasNetCollectedMoney(): bool { return $this->has('net_collected_money'); }
    /** Money collected beyond what the order is owed and not yet refunded. Write-offs do not create overpayments, and neither does value order edits removed: an edit's unrefunded_money reports what it still owes the buyer. anyOf[1] (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When overpaid_money is omitted; use hasOverpaidMoney() or valueOrDefault().
     */
    public function getOverpaidMoney(): mixed { return $this->get('overpaid_money'); }
    public function hasOverpaidMoney(): bool { return $this->has('overpaid_money'); }
    /** Collected order money reserved for refunds that are still processing. It reduces what can be refunded as soon as Flint records the refund. Present when the amount is greater than zero. anyOf[1] (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When pending_refund_money is omitted; use hasPendingRefundMoney() or valueOrDefault().
     */
    public function getPendingRefundMoney(): mixed { return $this->get('pending_refund_money'); }
    public function hasPendingRefundMoney(): bool { return $this->has('pending_refund_money'); }
    /** Authorized money a final capture released instead of collecting, which the order no longer owes. anyOf[1] (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When released_money is omitted; use hasReleasedMoney() or valueOrDefault().
     */
    public function getReleasedMoney(): mixed { return $this->get('released_money'); }
    public function hasReleasedMoney(): bool { return $this->has('released_money'); }
    /** Value order edits removed from the order, which it no longer owes: removed units' value plus each edit's charge_refunds[].amount_money, whether that value was refunded or applied to lines the edit added. This reduces outstanding_money without changing paid_money or refunded_money. anyOf[1] (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When removed_money is omitted; use hasRemovedMoney() or valueOrDefault().
     */
    public function getRemovedMoney(): mixed { return $this->get('removed_money'); }
    public function hasRemovedMoney(): bool { return $this->has('removed_money'); }
    /** Portion of the collected money settled as tips. anyOf[1] (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When settled_tip_money is omitted; use hasSettledTipMoney() or valueOrDefault().
     */
    public function getSettledTipMoney(): mixed { return $this->get('settled_tip_money'); }
    public function hasSettledTipMoney(): bool { return $this->has('settled_tip_money'); }
    /** Remaining money available for an order refund while the order funds a subscription renewal or change. Excludes money reserved for the credit, exchanges, and processing refunds. Present on affected order reads, including when the amount is zero. anyOf[1] (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When subscription_credit_refundable_money is omitted; use hasSubscriptionCreditRefundableMoney() or valueOrDefault().
     */
    public function getSubscriptionCreditRefundableMoney(): mixed { return $this->get('subscription_credit_refundable_money'); }
    public function hasSubscriptionCreditRefundableMoney(): bool { return $this->has('subscription_credit_refundable_money'); }
    /** Money still owed on the bill, never below zero. Refunds return money already collected and do not add to it. anyOf[1] (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When outstanding_money is omitted; use hasOutstandingMoney() or valueOrDefault().
     */
    public function getOutstandingMoney(): mixed { return $this->get('outstanding_money'); }
    public function hasOutstandingMoney(): bool { return $this->has('outstanding_money'); }
    /** Money collected toward the bill, net of reversed payments. Excludes written-off debt. On orders, dispute losses do not reduce this amount. anyOf[1] (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When paid_money is omitted; use hasPaidMoney() or valueOrDefault().
     */
    public function getPaidMoney(): mixed { return $this->get('paid_money'); }
    public function hasPaidMoney(): bool { return $this->has('paid_money'); }
    /** Money returned to the buyer from what was collected toward the bill. On orders, this counts successful refunds. anyOf[1] (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When refunded_money is omitted; use hasRefundedMoney() or valueOrDefault().
     */
    public function getRefundedMoney(): mixed { return $this->get('refunded_money'); }
    public function hasRefundedMoney(): bool { return $this->has('refunded_money'); }
    /** Owed money waived as uncollectible. Reduces outstanding_money without increasing paid_money or net_collected_money. Cannot be refunded or used to fund an exchange. anyOf[1] (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When written_off_money is omitted; use hasWrittenOffMoney() or valueOrDefault().
     */
    public function getWrittenOffMoney(): mixed { return $this->get('written_off_money'); }
    public function hasWrittenOffMoney(): bool { return $this->has('written_off_money'); }
}
