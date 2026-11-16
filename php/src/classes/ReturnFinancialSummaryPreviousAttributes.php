<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValuePreviousAttributes|null $collected_money
 * @property-read MoneyValuePreviousAttributes|null $credit_adjustment_money
 * @property-read MoneyValuePreviousAttributes|null $deduction_money
 * @property-read MoneyValuePreviousAttributes|null $due_from_buyer_money
 * @property-read MoneyValuePreviousAttributes|null $due_to_buyer_money
 * @property-read MoneyValuePreviousAttributes|null $refunded_money
 * @property-read MoneyValuePreviousAttributes|null $replacement_total_money
 * @property-read MoneyValuePreviousAttributes|null $returned_discount_money
 * @property-read MoneyValuePreviousAttributes|null $returned_subtotal_money
 * @property-read MoneyValuePreviousAttributes|null $returned_tax_money
 * @property-read MoneyValuePreviousAttributes|null $returned_total_money
 * Presence-aware response; omitted optional fields return null. */
final class ReturnFinancialSummaryPreviousAttributes extends Model {
    /** @param array{'collected_money'?: mixed, 'credit_adjustment_money'?: mixed, 'deduction_money'?: mixed, 'due_from_buyer_money'?: mixed, 'due_to_buyer_money'?: mixed, 'refunded_money'?: mixed, 'replacement_total_money'?: mixed, 'returned_discount_money'?: mixed, 'returned_subtotal_money'?: mixed, 'returned_tax_money'?: mixed, 'returned_total_money'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnFinancialSummaryPreviousAttributes')); }
    /** Balances collected from the buyer. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getCollectedMoney(): MoneyValuePreviousAttributes|null { return $this->get('collected_money'); }
    public function hasCollectedMoney(): bool { return $this->has('collected_money'); }
    /** Credits added by confirmed, non-canceled resolutions. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getCreditAdjustmentMoney(): MoneyValuePreviousAttributes|null { return $this->get('credit_adjustment_money'); }
    public function hasCreditAdjustmentMoney(): bool { return $this->has('credit_adjustment_money'); }
    /** Fees withheld by confirmed, non-canceled resolutions. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getDeductionMoney(): MoneyValuePreviousAttributes|null { return $this->get('deduction_money'); }
    public function hasDeductionMoney(): bool { return $this->has('deduction_money'); }
    /** Balances the buyer owes on confirmed, non-canceled resolutions whose payment has not succeeded. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getDueFromBuyerMoney(): MoneyValuePreviousAttributes|null { return $this->get('due_from_buyer_money'); }
    public function hasDueFromBuyerMoney(): bool { return $this->has('due_from_buyer_money'); }
    /** Refund amounts on confirmed, non-canceled resolutions whose Refund has not succeeded. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getDueToBuyerMoney(): MoneyValuePreviousAttributes|null { return $this->get('due_to_buyer_money'); }
    public function hasDueToBuyerMoney(): bool { return $this->has('due_to_buyer_money'); }
    /** Refund amounts that succeeded. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getRefundedMoney(): MoneyValuePreviousAttributes|null { return $this->get('refunded_money'); }
    public function hasRefundedMoney(): bool { return $this->has('refunded_money'); }
    /** Value of replacement merchandise on confirmed, non-canceled resolutions. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getReplacementTotalMoney(): MoneyValuePreviousAttributes|null { return $this->get('replacement_total_money'); }
    public function hasReplacementTotalMoney(): bool { return $this->has('replacement_total_money'); }
    /** Sum of return_value.discount_money across the Return's line items. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getReturnedDiscountMoney(): MoneyValuePreviousAttributes|null { return $this->get('returned_discount_money'); }
    public function hasReturnedDiscountMoney(): bool { return $this->has('returned_discount_money'); }
    /** Sum of return_value.subtotal_money across the Return's line items. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getReturnedSubtotalMoney(): MoneyValuePreviousAttributes|null { return $this->get('returned_subtotal_money'); }
    public function hasReturnedSubtotalMoney(): bool { return $this->has('returned_subtotal_money'); }
    /** Sum of return_value.tax_money across the Return's line items. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getReturnedTaxMoney(): MoneyValuePreviousAttributes|null { return $this->get('returned_tax_money'); }
    public function hasReturnedTaxMoney(): bool { return $this->has('returned_tax_money'); }
    /** Sum of return_value.total_money across the Return's line items. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getReturnedTotalMoney(): MoneyValuePreviousAttributes|null { return $this->get('returned_total_money'); }
    public function hasReturnedTotalMoney(): bool { return $this->has('returned_total_money'); }
}
