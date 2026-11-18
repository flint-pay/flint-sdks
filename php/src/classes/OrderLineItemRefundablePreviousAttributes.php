<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValuePreviousAttributes|null $discount_money
 * @property-read MoneyValuePreviousAttributes|null $gross_money
 * @property-read int|null $quantity
 * @property-read MoneyValuePreviousAttributes|null $tax_money
 * @property-read MoneyValuePreviousAttributes|null $total_money
 * Presence-aware response; omitted optional fields return null. */
final class OrderLineItemRefundablePreviousAttributes extends Model {
    /** @param array{'discount_money'?: mixed, 'gross_money'?: mixed, 'quantity'?: mixed, 'tax_money'?: mixed, 'total_money'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrderLineItemRefundablePreviousAttributes')); }
    /** Remaining discount component. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getDiscountMoney(): MoneyValuePreviousAttributes|null { return $this->get('discount_money'); }
    public function hasDiscountMoney(): bool { return $this->has('discount_money'); }
    /** Remaining subtotal before discounts and tax. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getGrossMoney(): MoneyValuePreviousAttributes|null { return $this->get('gross_money'); }
    public function hasGrossMoney(): bool { return $this->has('gross_money'); }
    /** Whole-number units remaining for a quantity refund target; fractional quantities are not supported. anyOf[1] (Value): integer. Whole-number units remaining for a quantity refund target; fractional quantities are not supported. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getQuantity(): int|null { return $this->get('quantity'); }
    public function hasQuantity(): bool { return $this->has('quantity'); }
    /** Remaining tax component. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getTaxMoney(): MoneyValuePreviousAttributes|null { return $this->get('tax_money'); }
    public function hasTaxMoney(): bool { return $this->has('tax_money'); }
    /** Remaining target total after discounts and tax. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getTotalMoney(): MoneyValuePreviousAttributes|null { return $this->get('total_money'); }
    public function hasTotalMoney(): bool { return $this->has('total_money'); }
}
