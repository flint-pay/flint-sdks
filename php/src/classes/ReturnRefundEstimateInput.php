<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $buyer_refund_amount_money
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $buyer_store_credit_amount_money
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $deduction_money
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $returned_total_money
 * @property-read string $store_credit_destination
 * @property-read list<ReturnRefundTenderEstimateInput|array<array-key, mixed>|\stdClass> $tender_estimates
 * Presence-aware input; omitted fields throw when accessed. */
final class ReturnRefundEstimateInput extends Model {
    /** @param array{'buyer_refund_amount_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'buyer_store_credit_amount_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'deduction_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'returned_total_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'store_credit_destination': string, 'tender_estimates': list<ReturnRefundTenderEstimateInput|array<array-key, mixed>|\stdClass>, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnRefundEstimateInput')); }
    /** Returned total less policy deductions, floored at zero. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When buyer_refund_amount_money is omitted; use hasBuyerRefundAmountMoney() or valueOrDefault().
     */
    public function getBuyerRefundAmountMoney(): mixed { return $this->get('buyer_refund_amount_money'); }
    public function hasBuyerRefundAmountMoney(): bool { return $this->has('buyer_refund_amount_money'); }
    /** Net store credit for explicitly selected eligible store-credit quantities after policy deductions, floored per line at zero. Separate from returned_total_money, deduction_money, and buyer_refund_amount_money, which cover refund quantities only. Zero when no store credit qualifies. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When buyer_store_credit_amount_money is omitted; use hasBuyerStoreCreditAmountMoney() or valueOrDefault().
     */
    public function getBuyerStoreCreditAmountMoney(): mixed { return $this->get('buyer_store_credit_amount_money'); }
    public function hasBuyerStoreCreditAmountMoney(): bool { return $this->has('buyer_store_credit_amount_money'); }
    /** Sum of the policy deduction proposals for this selection. Zero when none apply. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When deduction_money is omitted; use hasDeductionMoney() or valueOrDefault().
     */
    public function getDeductionMoney(): mixed { return $this->get('deduction_money'); }
    public function hasDeductionMoney(): bool { return $this->has('deduction_money'); }
    /** What the buyer paid for these quantities after discounts, including tax. Uses the same allocation as a return resolution. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When returned_total_money is omitted; use hasReturnedTotalMoney() or valueOrDefault().
     */
    public function getReturnedTotalMoney(): mixed { return $this->get('returned_total_money'); }
    public function hasReturnedTotalMoney(): bool { return $this->has('returned_total_money'); }
    /** Store credit is issued as a new gift card by email. Applies to buyer_store_credit_amount_money. Value enum: "new_gift_card".
     * @return string
     * @throws SdkError When store_credit_destination is omitted; use hasStoreCreditDestination() or valueOrDefault().
     */
    public function getStoreCreditDestination(): string { return $this->get('store_credit_destination'); }
    public function hasStoreCreditDestination(): bool { return $this->has('store_credit_destination'); }
    /** Estimated original-payment destinations in refund order. Amounts sum to buyer_refund_amount_money. Empty when the refund amount is zero. [] (Value): {@see ReturnRefundTenderEstimateInput}. One estimated original-payment destination for a return refund.
     * @return list<ReturnRefundTenderEstimateInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When tender_estimates is omitted; use hasTenderEstimates() or valueOrDefault().
     */
    public function getTenderEstimates(): array { return $this->get('tender_estimates'); }
    public function hasTenderEstimates(): bool { return $this->has('tender_estimates'); }
}
