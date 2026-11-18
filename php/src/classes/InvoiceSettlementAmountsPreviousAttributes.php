<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValuePreviousAttributes|null $credited_money
 * @property-read MoneyValuePreviousAttributes|null $currently_due_money
 * @property-read MoneyValuePreviousAttributes|null $late_fee_money
 * @property-read MoneyValuePreviousAttributes|null $net_collected_money
 * @property-read MoneyValuePreviousAttributes|null $outstanding_money
 * @property-read MoneyValuePreviousAttributes|null $paid_money
 * @property-read MoneyValuePreviousAttributes|null $refunded_money
 * @property-read MoneyValuePreviousAttributes|null $written_off_money
 * Presence-aware response; omitted optional fields return null. */
final class InvoiceSettlementAmountsPreviousAttributes extends Model {
    /** @param array{'credited_money'?: mixed, 'currently_due_money'?: mixed, 'late_fee_money'?: mixed, 'net_collected_money'?: mixed, 'outstanding_money'?: mixed, 'paid_money'?: mixed, 'refunded_money'?: mixed, 'written_off_money'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InvoiceSettlementAmountsPreviousAttributes')); }
    /** Credit note credit allocated to this invoice, minus reversed allocations. Unallocated credit is not included. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getCreditedMoney(): MoneyValuePreviousAttributes|null { return $this->get('credited_money'); }
    public function hasCreditedMoney(): bool { return $this->has('credited_money'); }
    /** The part of outstanding_money due now. Without schedule_entries, it equals outstanding_money. With schedule_entries, it is the outstanding amount of the first entry, in schedule order, whose due date has started and that still has a balance, or 0 when there is none. This is the amount the next collect call or checkout session charges. Always 0 unless the invoice is open or partially_paid. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getCurrentlyDueMoney(): MoneyValuePreviousAttributes|null { return $this->get('currently_due_money'); }
    public function hasCurrentlyDueMoney(): bool { return $this->has('currently_due_money'); }
    /** Late fees assessed after issue, minus waivers, including amounts since paid or written off. Itemized in late_fees. Excluded from pricing_amounts.total_money. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getLateFeeMoney(): MoneyValuePreviousAttributes|null { return $this->get('late_fee_money'); }
    public function hasLateFeeMoney(): bool { return $this->has('late_fee_money'); }
    /** paid_money minus refunded_money, never below zero. Dispute losses do not reduce this invoice amount. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getNetCollectedMoney(): MoneyValuePreviousAttributes|null { return $this->get('net_collected_money'); }
    public function hasNetCollectedMoney(): bool { return $this->has('net_collected_money'); }
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
