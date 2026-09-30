<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $collected_money
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $credit_money
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $deduction_money
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $due_from_buyer_money
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $due_to_buyer_money
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $refunded_money
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $replacement_total_money
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $returned_discount_money
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $returned_subtotal_money
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $returned_tax_money
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $returned_total_money
 * Presence-aware input; omitted fields throw when accessed. */
final class ReturnFinancialSummaryInput extends Model {
    /** @param array{'collected_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'credit_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'deduction_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'due_from_buyer_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'due_to_buyer_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'refunded_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'replacement_total_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'returned_discount_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'returned_subtotal_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'returned_tax_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'returned_total_money': MoneyValueInput|array<array-key, mixed>|\stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnFinancialSummaryInput')); }
    /** @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When collected_money is omitted; use hasCollectedMoney() or valueOrDefault().
     */
    public function getCollectedMoney(): mixed { return $this->get('collected_money'); }
    public function hasCollectedMoney(): bool { return $this->has('collected_money'); }
    /** @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When credit_money is omitted; use hasCreditMoney() or valueOrDefault().
     */
    public function getCreditMoney(): mixed { return $this->get('credit_money'); }
    public function hasCreditMoney(): bool { return $this->has('credit_money'); }
    /** @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When deduction_money is omitted; use hasDeductionMoney() or valueOrDefault().
     */
    public function getDeductionMoney(): mixed { return $this->get('deduction_money'); }
    public function hasDeductionMoney(): bool { return $this->has('deduction_money'); }
    /** @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When due_from_buyer_money is omitted; use hasDueFromBuyerMoney() or valueOrDefault().
     */
    public function getDueFromBuyerMoney(): mixed { return $this->get('due_from_buyer_money'); }
    public function hasDueFromBuyerMoney(): bool { return $this->has('due_from_buyer_money'); }
    /** @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When due_to_buyer_money is omitted; use hasDueToBuyerMoney() or valueOrDefault().
     */
    public function getDueToBuyerMoney(): mixed { return $this->get('due_to_buyer_money'); }
    public function hasDueToBuyerMoney(): bool { return $this->has('due_to_buyer_money'); }
    /** @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When refunded_money is omitted; use hasRefundedMoney() or valueOrDefault().
     */
    public function getRefundedMoney(): mixed { return $this->get('refunded_money'); }
    public function hasRefundedMoney(): bool { return $this->has('refunded_money'); }
    /** @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When replacement_total_money is omitted; use hasReplacementTotalMoney() or valueOrDefault().
     */
    public function getReplacementTotalMoney(): mixed { return $this->get('replacement_total_money'); }
    public function hasReplacementTotalMoney(): bool { return $this->has('replacement_total_money'); }
    /** @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When returned_discount_money is omitted; use hasReturnedDiscountMoney() or valueOrDefault().
     */
    public function getReturnedDiscountMoney(): mixed { return $this->get('returned_discount_money'); }
    public function hasReturnedDiscountMoney(): bool { return $this->has('returned_discount_money'); }
    /** @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When returned_subtotal_money is omitted; use hasReturnedSubtotalMoney() or valueOrDefault().
     */
    public function getReturnedSubtotalMoney(): mixed { return $this->get('returned_subtotal_money'); }
    public function hasReturnedSubtotalMoney(): bool { return $this->has('returned_subtotal_money'); }
    /** @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When returned_tax_money is omitted; use hasReturnedTaxMoney() or valueOrDefault().
     */
    public function getReturnedTaxMoney(): mixed { return $this->get('returned_tax_money'); }
    public function hasReturnedTaxMoney(): bool { return $this->has('returned_tax_money'); }
    /** @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When returned_total_money is omitted; use hasReturnedTotalMoney() or valueOrDefault().
     */
    public function getReturnedTotalMoney(): mixed { return $this->get('returned_total_money'); }
    public function hasReturnedTotalMoney(): bool { return $this->has('returned_total_money'); }
}
