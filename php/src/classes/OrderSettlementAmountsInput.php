<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $overpaid_money
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $released_money
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $settled_tip_money
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $net_collected_money
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $outstanding_money
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $paid_money
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $refunded_money
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $written_off_money
 * Presence-aware input; omitted fields throw when accessed. */
final class OrderSettlementAmountsInput extends Model {
    /** @param array{'overpaid_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'released_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'settled_tip_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'net_collected_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'outstanding_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'paid_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'refunded_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'written_off_money': MoneyValueInput|array<array-key, mixed>|\stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrderSettlementAmountsInput')); }
    /** Money collected beyond what the order is owed and not yet refunded. Write-offs do not create overpayments. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When overpaid_money is omitted; use hasOverpaidMoney() or valueOrDefault().
     */
    public function getOverpaidMoney(): mixed { return $this->get('overpaid_money'); }
    public function hasOverpaidMoney(): bool { return $this->has('overpaid_money'); }
    /** Authorized money a final capture released instead of collecting, which the order no longer owes. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When released_money is omitted; use hasReleasedMoney() or valueOrDefault().
     */
    public function getReleasedMoney(): mixed { return $this->get('released_money'); }
    public function hasReleasedMoney(): bool { return $this->has('released_money'); }
    /** Portion of the collected money settled as tips. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When settled_tip_money is omitted; use hasSettledTipMoney() or valueOrDefault().
     */
    public function getSettledTipMoney(): mixed { return $this->get('settled_tip_money'); }
    public function hasSettledTipMoney(): bool { return $this->has('settled_tip_money'); }
    /** paid_money minus refunded_money. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When net_collected_money is omitted; use hasNetCollectedMoney() or valueOrDefault().
     */
    public function getNetCollectedMoney(): mixed { return $this->get('net_collected_money'); }
    public function hasNetCollectedMoney(): bool { return $this->has('net_collected_money'); }
    /** Money still owed on the bill, never below zero. Refunds return money already collected and do not add to it. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When outstanding_money is omitted; use hasOutstandingMoney() or valueOrDefault().
     */
    public function getOutstandingMoney(): mixed { return $this->get('outstanding_money'); }
    public function hasOutstandingMoney(): bool { return $this->has('outstanding_money'); }
    /** Money collected toward the bill, net of reversed payments. Excludes written-off debt. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When paid_money is omitted; use hasPaidMoney() or valueOrDefault().
     */
    public function getPaidMoney(): mixed { return $this->get('paid_money'); }
    public function hasPaidMoney(): bool { return $this->has('paid_money'); }
    /** Money returned to the buyer from what was collected toward the bill. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When refunded_money is omitted; use hasRefundedMoney() or valueOrDefault().
     */
    public function getRefundedMoney(): mixed { return $this->get('refunded_money'); }
    public function hasRefundedMoney(): bool { return $this->has('refunded_money'); }
    /** Owed money waived as uncollectible. Reduces outstanding_money without increasing paid_money or net_collected_money. Cannot be refunded or used to fund an exchange. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When written_off_money is omitted; use hasWrittenOffMoney() or valueOrDefault().
     */
    public function getWrittenOffMoney(): mixed { return $this->get('written_off_money'); }
    public function hasWrittenOffMoney(): bool { return $this->has('written_off_money'); }
}
