<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValuePreviousAttributes|null $dispute_lost_money
 * @property-read MoneyValuePreviousAttributes|null $disputed_money
 * @property-read SignedMoneyPreviousAttributes|null $net_collected_money
 * @property-read MoneyValuePreviousAttributes|null $overpaid_money
 * @property-read MoneyValuePreviousAttributes|null $released_money
 * @property-read MoneyValuePreviousAttributes|null $removed_money
 * @property-read MoneyValuePreviousAttributes|null $settled_tip_money
 * @property-read MoneyValuePreviousAttributes|null $outstanding_money
 * @property-read MoneyValuePreviousAttributes|null $paid_money
 * @property-read MoneyValuePreviousAttributes|null $refunded_money
 * @property-read MoneyValuePreviousAttributes|null $written_off_money
 * Presence-aware response; omitted optional fields return null. */
final class OrderSettlementAmountsPreviousAttributes extends Model {
    /** @param array{'dispute_lost_money'?: mixed, 'disputed_money'?: mixed, 'net_collected_money'?: mixed, 'overpaid_money'?: mixed, 'released_money'?: mixed, 'removed_money'?: mixed, 'settled_tip_money'?: mixed, 'outstanding_money'?: mixed, 'paid_money'?: mixed, 'refunded_money'?: mixed, 'written_off_money'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrderSettlementAmountsPreviousAttributes')); }
    /** Principal lost to chargebacks on counted order payments. A later win removes that dispute from this amount. Excludes dispute fees and does not reopen outstanding_money. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getDisputeLostMoney(): MoneyValuePreviousAttributes|null { return $this->get('dispute_lost_money'); }
    public function hasDisputeLostMoney(): bool { return $this->has('dispute_lost_money'); }
    /** Principal of open chargebacks on counted order payments. Inquiries and disputes on payment_returned payments contribute zero. Open disputes do not reduce net_collected_money. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getDisputedMoney(): MoneyValuePreviousAttributes|null { return $this->get('disputed_money'); }
    public function hasDisputedMoney(): bool { return $this->has('disputed_money'); }
    /** Collected principal: paid_money minus refunded_money minus dispute_lost_money. Can be negative when refunds and lost disputes exceed payments. Excludes processing and dispute fees; open disputes do not reduce this amount. anyOf[1] (Value): {@see SignedMoneyPreviousAttributes}. anyOf[2] (Value): null.
     * @return SignedMoneyPreviousAttributes|null
     */
    public function getNetCollectedMoney(): SignedMoneyPreviousAttributes|null { return $this->get('net_collected_money'); }
    public function hasNetCollectedMoney(): bool { return $this->has('net_collected_money'); }
    /** Money collected beyond what the order is owed and not yet refunded. Write-offs do not create overpayments, and neither does value order edits removed: an edit's unrefunded_money reports what it still owes the buyer. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getOverpaidMoney(): MoneyValuePreviousAttributes|null { return $this->get('overpaid_money'); }
    public function hasOverpaidMoney(): bool { return $this->has('overpaid_money'); }
    /** Authorized money a final capture released instead of collecting, which the order no longer owes. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getReleasedMoney(): MoneyValuePreviousAttributes|null { return $this->get('released_money'); }
    public function hasReleasedMoney(): bool { return $this->has('released_money'); }
    /** Value order edits removed from the order, which it no longer owes: removed units' value plus each edit's charge_refunds[].amount_money, whether that value was refunded or applied to lines the edit added. Not collected money, so it never changes paid_money or refunded_money. outstanding_money is the total minus paid, written-off, released, and removed money, never below zero. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getRemovedMoney(): MoneyValuePreviousAttributes|null { return $this->get('removed_money'); }
    public function hasRemovedMoney(): bool { return $this->has('removed_money'); }
    /** Portion of the collected money settled as tips. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getSettledTipMoney(): MoneyValuePreviousAttributes|null { return $this->get('settled_tip_money'); }
    public function hasSettledTipMoney(): bool { return $this->has('settled_tip_money'); }
    /** Money still owed on the bill, never below zero. Refunds return money already collected and do not add to it. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getOutstandingMoney(): MoneyValuePreviousAttributes|null { return $this->get('outstanding_money'); }
    public function hasOutstandingMoney(): bool { return $this->has('outstanding_money'); }
    /** Money collected toward the bill, net of reversed payments. Excludes written-off debt. On orders, dispute losses do not reduce this amount. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getPaidMoney(): MoneyValuePreviousAttributes|null { return $this->get('paid_money'); }
    public function hasPaidMoney(): bool { return $this->has('paid_money'); }
    /** Money returned to the buyer from what was collected toward the bill. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getRefundedMoney(): MoneyValuePreviousAttributes|null { return $this->get('refunded_money'); }
    public function hasRefundedMoney(): bool { return $this->has('refunded_money'); }
    /** Owed money waived as uncollectible. Reduces outstanding_money without increasing paid_money or net_collected_money. Cannot be refunded or used to fund an exchange. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getWrittenOffMoney(): MoneyValuePreviousAttributes|null { return $this->get('written_off_money'); }
    public function hasWrittenOffMoney(): bool { return $this->has('written_off_money'); }
}
