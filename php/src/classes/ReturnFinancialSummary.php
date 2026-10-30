<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValue $collected_money
 * @property-read MoneyValue $credit_money
 * @property-read MoneyValue $deduction_money
 * @property-read MoneyValue $due_from_buyer_money
 * @property-read MoneyValue $due_to_buyer_money
 * @property-read MoneyValue $refunded_money
 * @property-read MoneyValue $replacement_total_money
 * @property-read MoneyValue $returned_discount_money
 * @property-read MoneyValue $returned_subtotal_money
 * @property-read MoneyValue $returned_tax_money
 * @property-read MoneyValue $returned_total_money
 * Presence-aware response; omitted optional fields return null. */
final class ReturnFinancialSummary extends Model {
    /** @param array{'collected_money': mixed, 'credit_money': mixed, 'deduction_money': mixed, 'due_from_buyer_money': mixed, 'due_to_buyer_money': mixed, 'refunded_money': mixed, 'replacement_total_money': mixed, 'returned_discount_money': mixed, 'returned_subtotal_money': mixed, 'returned_tax_money': mixed, 'returned_total_money': mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnFinancialSummary')); }
    /** Balances collected from the buyer. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getCollectedMoney(): MoneyValue { return $this->get('collected_money'); }
    public function hasCollectedMoney(): bool { return $this->has('collected_money'); }
    /** Credits added by confirmed, non-canceled resolutions. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getCreditMoney(): MoneyValue { return $this->get('credit_money'); }
    public function hasCreditMoney(): bool { return $this->has('credit_money'); }
    /** Fees withheld by confirmed, non-canceled resolutions. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getDeductionMoney(): MoneyValue { return $this->get('deduction_money'); }
    public function hasDeductionMoney(): bool { return $this->has('deduction_money'); }
    /** Balances the buyer owes on confirmed, non-canceled resolutions whose payment has not succeeded. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getDueFromBuyerMoney(): MoneyValue { return $this->get('due_from_buyer_money'); }
    public function hasDueFromBuyerMoney(): bool { return $this->has('due_from_buyer_money'); }
    /** Refund amounts on confirmed, non-canceled resolutions whose Refund has not succeeded. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getDueToBuyerMoney(): MoneyValue { return $this->get('due_to_buyer_money'); }
    public function hasDueToBuyerMoney(): bool { return $this->has('due_to_buyer_money'); }
    /** Refund amounts that succeeded. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getRefundedMoney(): MoneyValue { return $this->get('refunded_money'); }
    public function hasRefundedMoney(): bool { return $this->has('refunded_money'); }
    /** Value of replacement merchandise on confirmed, non-canceled resolutions. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getReplacementTotalMoney(): MoneyValue { return $this->get('replacement_total_money'); }
    public function hasReplacementTotalMoney(): bool { return $this->has('replacement_total_money'); }
    /** Sum of return_value.discount_money across the Return's line items. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getReturnedDiscountMoney(): MoneyValue { return $this->get('returned_discount_money'); }
    public function hasReturnedDiscountMoney(): bool { return $this->has('returned_discount_money'); }
    /** Sum of return_value.subtotal_money across the Return's line items. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getReturnedSubtotalMoney(): MoneyValue { return $this->get('returned_subtotal_money'); }
    public function hasReturnedSubtotalMoney(): bool { return $this->has('returned_subtotal_money'); }
    /** Sum of return_value.tax_money across the Return's line items. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getReturnedTaxMoney(): MoneyValue { return $this->get('returned_tax_money'); }
    public function hasReturnedTaxMoney(): bool { return $this->has('returned_tax_money'); }
    /** Sum of return_value.total_money across the Return's line items. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getReturnedTotalMoney(): MoneyValue { return $this->get('returned_total_money'); }
    public function hasReturnedTotalMoney(): bool { return $this->has('returned_total_money'); }
}
