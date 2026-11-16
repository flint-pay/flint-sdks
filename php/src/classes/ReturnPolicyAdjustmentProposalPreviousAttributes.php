<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $adjustment_type
 * @property-read int|null $based_on_quantity
 * @property-read MoneyValuePreviousAttributes|null $calculated_amount_money
 * @property-read string|null $calculation_type
 * @property-read MoneyValuePreviousAttributes|null $flat_money
 * @property-read float|null $percent
 * @property-read string|null $value_effect
 * Presence-aware response; omitted optional fields return null. */
final class ReturnPolicyAdjustmentProposalPreviousAttributes extends Model {
    /** @param array{'adjustment_type'?: mixed, 'based_on_quantity'?: mixed, 'calculated_amount_money'?: mixed, 'calculation_type'?: mixed, 'flat_money'?: mixed, 'percent'?: mixed, 'value_effect'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnPolicyAdjustmentProposalPreviousAttributes')); }
    /** What the fee or credit is for. Value enum: "return_shipping_fee", "restocking_fee", "other_fee", "goodwill_credit", "price_correction", "other". anyOf[1] (Value): string. What the fee or credit is for. Value enum: "return_shipping_fee", "restocking_fee", "other_fee", "goodwill_credit", "price_correction", "other". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getAdjustmentType(): string|null { return $this->get('adjustment_type'); }
    public function hasAdjustmentType(): bool { return $this->has('adjustment_type'); }
    /** Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer. Whole-number quantity; fractional quantities are not supported. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getBasedOnQuantity(): int|null { return $this->get('based_on_quantity'); }
    public function hasBasedOnQuantity(): bool { return $this->has('based_on_quantity'); }
    /** The amount worked out for the line's returned quantity. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getCalculatedAmountMoney(): MoneyValuePreviousAttributes|null { return $this->get('calculated_amount_money'); }
    public function hasCalculatedAmountMoney(): bool { return $this->has('calculated_amount_money'); }
    /** How the amount is worked out. Value enum: "flat", "percent". anyOf[1] (Value): string. How the amount is worked out. Value enum: "flat", "percent". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCalculationType(): string|null { return $this->get('calculation_type'); }
    public function hasCalculationType(): bool { return $this->has('calculation_type'); }
    /** Fixed amount proposed for the line, whatever the quantity. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getFlatMoney(): MoneyValuePreviousAttributes|null { return $this->get('flat_money'); }
    public function hasFlatMoney(): bool { return $this->has('flat_money'); }
    /** Percentage points of the returned units' subtotal, such as `10` for 10%. anyOf[1] (Value): number. Percentage points of the returned units' subtotal, such as `10` for 10%. Format: double. multipleOf: 0.0001. anyOf[2] (Value): null.
     * @return float|null
     */
    public function getPercent(): float|null { return $this->get('percent'); }
    public function hasPercent(): bool { return $this->has('percent'); }
    /** Whether the amount reduces or increases what the buyer receives. Value enum: "deduction", "credit". anyOf[1] (Value): string. Whether the amount reduces or increases what the buyer receives. Value enum: "deduction", "credit". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getValueEffect(): string|null { return $this->get('value_effect'); }
    public function hasValueEffect(): bool { return $this->has('value_effect'); }
}
