<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValue $buyer_refund_amount_money
 * @property-read MoneyValue $deduction_money
 * @property-read MoneyValue $returned_total_money
 * @property-read list<ReturnRefundEstimateTenderEstimatesItemPaymentIntent|ReturnRefundEstimateTenderEstimatesItemGiftCardRedemption|\stdClass> $tender_estimates
 * Presence-aware response; omitted optional fields return null. */
final class ReturnRefundEstimate extends Model {
    /** @param array{'buyer_refund_amount_money': mixed, 'deduction_money': mixed, 'returned_total_money': mixed, 'tender_estimates': list<mixed>, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnRefundEstimate')); }
    /** Returned total less policy deductions, floored at zero. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getBuyerRefundAmountMoney(): MoneyValue { return $this->get('buyer_refund_amount_money'); }
    public function hasBuyerRefundAmountMoney(): bool { return $this->has('buyer_refund_amount_money'); }
    /** Sum of the policy deduction proposals for this selection. Zero when none apply. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getDeductionMoney(): MoneyValue { return $this->get('deduction_money'); }
    public function hasDeductionMoney(): bool { return $this->has('deduction_money'); }
    /** What the buyer paid for these quantities after discounts, including tax. Uses the same allocation as a return resolution. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getReturnedTotalMoney(): MoneyValue { return $this->get('returned_total_money'); }
    public function hasReturnedTotalMoney(): bool { return $this->has('returned_total_money'); }
    /** Estimated original-payment destinations in refund order. Amounts sum to buyer_refund_amount_money. Empty when the refund amount is zero. [] (Value): {@see ReturnRefundTenderEstimate}. One estimated original-payment destination for a return refund.
     * @return list<ReturnRefundEstimateTenderEstimatesItemPaymentIntent|ReturnRefundEstimateTenderEstimatesItemGiftCardRedemption|\stdClass>
     */
    public function getTenderEstimates(): array { return $this->get('tender_estimates'); }
    public function hasTenderEstimates(): bool { return $this->has('tender_estimates'); }
}
