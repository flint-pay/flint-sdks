<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValue $overpaid_money
 * @property-read MoneyValue $released_money
 * @property-read MoneyValue $settled_tip_money
 * @property-read MoneyValue $net_collected_money
 * @property-read MoneyValue $outstanding_money
 * @property-read MoneyValue $paid_money
 * @property-read MoneyValue $refunded_money
 * @property-read MoneyValue $written_off_money
 * Presence-aware response; omitted optional fields return null. */
final class OrderSettlementAmounts extends Model {
    /** @param array{'overpaid_money': mixed, 'released_money': mixed, 'settled_tip_money': mixed, 'net_collected_money': mixed, 'outstanding_money': mixed, 'paid_money': mixed, 'refunded_money': mixed, 'written_off_money': mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrderSettlementAmounts')); }
    /** Money collected beyond what the order is owed and not yet refunded. Write-offs do not create overpayments. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getOverpaidMoney(): MoneyValue { return $this->get('overpaid_money'); }
    public function hasOverpaidMoney(): bool { return $this->has('overpaid_money'); }
    /** Authorized money a final capture released instead of collecting, which the order no longer owes. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getReleasedMoney(): MoneyValue { return $this->get('released_money'); }
    public function hasReleasedMoney(): bool { return $this->has('released_money'); }
    /** Portion of the collected money settled as tips. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getSettledTipMoney(): MoneyValue { return $this->get('settled_tip_money'); }
    public function hasSettledTipMoney(): bool { return $this->has('settled_tip_money'); }
    /** paid_money minus refunded_money. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getNetCollectedMoney(): MoneyValue { return $this->get('net_collected_money'); }
    public function hasNetCollectedMoney(): bool { return $this->has('net_collected_money'); }
    /** Money still owed on the bill, never below zero. Refunds return money already collected and do not add to it. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getOutstandingMoney(): MoneyValue { return $this->get('outstanding_money'); }
    public function hasOutstandingMoney(): bool { return $this->has('outstanding_money'); }
    /** Money collected toward the bill, net of reversed payments. Excludes written-off debt. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
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
