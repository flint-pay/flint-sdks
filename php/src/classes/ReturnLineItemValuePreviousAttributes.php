<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValuePreviousAttributes|null $discount_money
 * @property-read MoneyValuePreviousAttributes|null $subtotal_money
 * @property-read MoneyValuePreviousAttributes|null $tax_money
 * @property-read MoneyValuePreviousAttributes|null $total_money
 * @property-read MoneyValuePreviousAttributes|null $unit_price_money
 * Presence-aware response; omitted optional fields return null. */
final class ReturnLineItemValuePreviousAttributes extends Model {
    /** @param array{'discount_money'?: mixed, 'subtotal_money'?: mixed, 'tax_money'?: mixed, 'total_money'?: mixed, 'unit_price_money'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnLineItemValuePreviousAttributes')); }
    /** Discount on the returned units. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getDiscountMoney(): MoneyValuePreviousAttributes|null { return $this->get('discount_money'); }
    public function hasDiscountMoney(): bool { return $this->has('discount_money'); }
    /** Subtotal of the returned units, before discount and tax. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getSubtotalMoney(): MoneyValuePreviousAttributes|null { return $this->get('subtotal_money'); }
    public function hasSubtotalMoney(): bool { return $this->has('subtotal_money'); }
    /** Tax on the returned units. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getTaxMoney(): MoneyValuePreviousAttributes|null { return $this->get('tax_money'); }
    public function hasTaxMoney(): bool { return $this->has('tax_money'); }
    /** Subtotal minus discount, plus tax. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getTotalMoney(): MoneyValuePreviousAttributes|null { return $this->get('total_money'); }
    public function hasTotalMoney(): bool { return $this->has('total_money'); }
    /** Price of one returned unit. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getUnitPriceMoney(): MoneyValuePreviousAttributes|null { return $this->get('unit_price_money'); }
    public function hasUnitPriceMoney(): bool { return $this->has('unit_price_money'); }
}
