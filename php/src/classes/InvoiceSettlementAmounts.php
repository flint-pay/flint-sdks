<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValue $credited_money
 * @property-read MoneyValue $currently_due_money
 * @property-read MoneyValue $late_fee_money
 * @property-read MoneyValue $net_collected_money
 * @property-read MoneyValue $outstanding_money
 * @property-read MoneyValue $paid_money
 * @property-read MoneyValue $refunded_money
 * @property-read MoneyValue $written_off_money
 * Presence-aware response; omitted optional fields return null. */
final class InvoiceSettlementAmounts extends Model {
    /** @param array{'credited_money': mixed, 'currently_due_money': mixed, 'late_fee_money': mixed, 'net_collected_money': mixed, 'outstanding_money': mixed, 'paid_money': mixed, 'refunded_money': mixed, 'written_off_money': mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InvoiceSettlementAmounts')); }
    /** Credit note credit allocated to this invoice, minus reversed allocations. Unallocated credit is not included. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getCreditedMoney(): MoneyValue { return $this->get('credited_money'); }
    public function hasCreditedMoney(): bool { return $this->has('credited_money'); }
    /** The part of outstanding_money due now. Without schedule_entries, it equals outstanding_money. With schedule_entries, it is the outstanding amount of the first entry, in schedule order, whose due date has started and that still has a balance, or 0 when there is none. This is the amount the next collect call or checkout session charges. Always 0 unless the invoice is open or partially_paid. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getCurrentlyDueMoney(): MoneyValue { return $this->get('currently_due_money'); }
    public function hasCurrentlyDueMoney(): bool { return $this->has('currently_due_money'); }
    /** Late fees assessed after issue, minus waivers, including amounts since paid or written off. Itemized in late_fees. Excluded from pricing_amounts.total_money. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getLateFeeMoney(): MoneyValue { return $this->get('late_fee_money'); }
    public function hasLateFeeMoney(): bool { return $this->has('late_fee_money'); }
    /** paid_money minus refunded_money and, on orders, dispute_lost_money, never below zero. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getNetCollectedMoney(): MoneyValue { return $this->get('net_collected_money'); }
    public function hasNetCollectedMoney(): bool { return $this->has('net_collected_money'); }
    /** Money still owed on the bill, never below zero. Refunds return money already collected and do not add to it. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getOutstandingMoney(): MoneyValue { return $this->get('outstanding_money'); }
    public function hasOutstandingMoney(): bool { return $this->has('outstanding_money'); }
    /** Money collected toward the bill, net of reversed payments. Excludes written-off debt. On orders, dispute losses do not reduce this amount. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getPaidMoney(): MoneyValue { return $this->get('paid_money'); }
    public function hasPaidMoney(): bool { return $this->has('paid_money'); }
    /** Money returned to the buyer from what was collected toward the bill. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getRefundedMoney(): MoneyValue { return $this->get('refunded_money'); }
    public function hasRefundedMoney(): bool { return $this->has('refunded_money'); }
    /** Owed money waived as uncollectible. Reduces outstanding_money without increasing paid_money or net_collected_money. Cannot be refunded or used to fund an exchange. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getWrittenOffMoney(): MoneyValue { return $this->get('written_off_money'); }
    public function hasWrittenOffMoney(): bool { return $this->has('written_off_money'); }
}
