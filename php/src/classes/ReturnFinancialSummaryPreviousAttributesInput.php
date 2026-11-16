<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $collected_money
 * @property-read MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $credit_adjustment_money
 * @property-read MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $deduction_money
 * @property-read MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $due_from_buyer_money
 * @property-read MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $due_to_buyer_money
 * @property-read MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $refunded_money
 * @property-read MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $replacement_total_money
 * @property-read MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $returned_discount_money
 * @property-read MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $returned_subtotal_money
 * @property-read MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $returned_tax_money
 * @property-read MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $returned_total_money
 * Presence-aware input; omitted fields throw when accessed. */
final class ReturnFinancialSummaryPreviousAttributesInput extends Model {
    /** @param array{'collected_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'credit_adjustment_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'deduction_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'due_from_buyer_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'due_to_buyer_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'refunded_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'replacement_total_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'returned_discount_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'returned_subtotal_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'returned_tax_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'returned_total_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnFinancialSummaryPreviousAttributesInput')); }
    /** Balances collected from the buyer. anyOf[1] (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When collected_money is omitted; use hasCollectedMoney() or valueOrDefault().
     */
    public function getCollectedMoney(): mixed { return $this->get('collected_money'); }
    public function hasCollectedMoney(): bool { return $this->has('collected_money'); }
    /** Credits added by confirmed, non-canceled resolutions. anyOf[1] (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When credit_adjustment_money is omitted; use hasCreditAdjustmentMoney() or valueOrDefault().
     */
    public function getCreditAdjustmentMoney(): mixed { return $this->get('credit_adjustment_money'); }
    public function hasCreditAdjustmentMoney(): bool { return $this->has('credit_adjustment_money'); }
    /** Fees withheld by confirmed, non-canceled resolutions. anyOf[1] (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When deduction_money is omitted; use hasDeductionMoney() or valueOrDefault().
     */
    public function getDeductionMoney(): mixed { return $this->get('deduction_money'); }
    public function hasDeductionMoney(): bool { return $this->has('deduction_money'); }
    /** Balances the buyer owes on confirmed, non-canceled resolutions whose payment has not succeeded. anyOf[1] (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When due_from_buyer_money is omitted; use hasDueFromBuyerMoney() or valueOrDefault().
     */
    public function getDueFromBuyerMoney(): mixed { return $this->get('due_from_buyer_money'); }
    public function hasDueFromBuyerMoney(): bool { return $this->has('due_from_buyer_money'); }
    /** Refund amounts on confirmed, non-canceled resolutions whose Refund has not succeeded. anyOf[1] (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When due_to_buyer_money is omitted; use hasDueToBuyerMoney() or valueOrDefault().
     */
    public function getDueToBuyerMoney(): mixed { return $this->get('due_to_buyer_money'); }
    public function hasDueToBuyerMoney(): bool { return $this->has('due_to_buyer_money'); }
    /** Refund amounts that succeeded. anyOf[1] (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When refunded_money is omitted; use hasRefundedMoney() or valueOrDefault().
     */
    public function getRefundedMoney(): mixed { return $this->get('refunded_money'); }
    public function hasRefundedMoney(): bool { return $this->has('refunded_money'); }
    /** Value of replacement merchandise on confirmed, non-canceled resolutions. anyOf[1] (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When replacement_total_money is omitted; use hasReplacementTotalMoney() or valueOrDefault().
     */
    public function getReplacementTotalMoney(): mixed { return $this->get('replacement_total_money'); }
    public function hasReplacementTotalMoney(): bool { return $this->has('replacement_total_money'); }
    /** Sum of return_value.discount_money across the Return's line items. anyOf[1] (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When returned_discount_money is omitted; use hasReturnedDiscountMoney() or valueOrDefault().
     */
    public function getReturnedDiscountMoney(): mixed { return $this->get('returned_discount_money'); }
    public function hasReturnedDiscountMoney(): bool { return $this->has('returned_discount_money'); }
    /** Sum of return_value.subtotal_money across the Return's line items. anyOf[1] (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When returned_subtotal_money is omitted; use hasReturnedSubtotalMoney() or valueOrDefault().
     */
    public function getReturnedSubtotalMoney(): mixed { return $this->get('returned_subtotal_money'); }
    public function hasReturnedSubtotalMoney(): bool { return $this->has('returned_subtotal_money'); }
    /** Sum of return_value.tax_money across the Return's line items. anyOf[1] (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When returned_tax_money is omitted; use hasReturnedTaxMoney() or valueOrDefault().
     */
    public function getReturnedTaxMoney(): mixed { return $this->get('returned_tax_money'); }
    public function hasReturnedTaxMoney(): bool { return $this->has('returned_tax_money'); }
    /** Sum of return_value.total_money across the Return's line items. anyOf[1] (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When returned_total_money is omitted; use hasReturnedTotalMoney() or valueOrDefault().
     */
    public function getReturnedTotalMoney(): mixed { return $this->get('returned_total_money'); }
    public function hasReturnedTotalMoney(): bool { return $this->has('returned_total_money'); }
}
