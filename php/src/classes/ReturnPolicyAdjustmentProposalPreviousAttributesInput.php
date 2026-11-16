<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $adjustment_type
 * @property-read int|null $based_on_quantity
 * @property-read MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $calculated_amount_money
 * @property-read string|null $calculation_type
 * @property-read MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $flat_money
 * @property-read int|float|null $percent
 * @property-read string|null $value_effect
 * Presence-aware input; omitted fields throw when accessed. */
final class ReturnPolicyAdjustmentProposalPreviousAttributesInput extends Model {
    /** @param array{'adjustment_type'?: string|null, 'based_on_quantity'?: int|null, 'calculated_amount_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'calculation_type'?: string|null, 'flat_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'percent'?: int|float|null, 'value_effect'?: string|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnPolicyAdjustmentProposalPreviousAttributesInput')); }
    /** What the fee or credit is for. Value enum: "return_shipping_fee", "restocking_fee", "other_fee", "goodwill_credit", "price_correction", "other". anyOf[1] (Value): string. What the fee or credit is for. Value enum: "return_shipping_fee", "restocking_fee", "other_fee", "goodwill_credit", "price_correction", "other". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When adjustment_type is omitted; use hasAdjustmentType() or valueOrDefault().
     */
    public function getAdjustmentType(): mixed { return $this->get('adjustment_type'); }
    public function hasAdjustmentType(): bool { return $this->has('adjustment_type'); }
    /** Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer. Whole-number quantity; fractional quantities are not supported. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     * @throws SdkError When based_on_quantity is omitted; use hasBasedOnQuantity() or valueOrDefault().
     */
    public function getBasedOnQuantity(): mixed { return $this->get('based_on_quantity'); }
    public function hasBasedOnQuantity(): bool { return $this->has('based_on_quantity'); }
    /** The amount worked out for the line's returned quantity. anyOf[1] (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When calculated_amount_money is omitted; use hasCalculatedAmountMoney() or valueOrDefault().
     */
    public function getCalculatedAmountMoney(): mixed { return $this->get('calculated_amount_money'); }
    public function hasCalculatedAmountMoney(): bool { return $this->has('calculated_amount_money'); }
    /** How the amount is worked out. Value enum: "flat", "percent". anyOf[1] (Value): string. How the amount is worked out. Value enum: "flat", "percent". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When calculation_type is omitted; use hasCalculationType() or valueOrDefault().
     */
    public function getCalculationType(): mixed { return $this->get('calculation_type'); }
    public function hasCalculationType(): bool { return $this->has('calculation_type'); }
    /** Fixed amount proposed for the line, whatever the quantity. anyOf[1] (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When flat_money is omitted; use hasFlatMoney() or valueOrDefault().
     */
    public function getFlatMoney(): mixed { return $this->get('flat_money'); }
    public function hasFlatMoney(): bool { return $this->has('flat_money'); }
    /** Percentage points of the returned units' subtotal, such as `10` for 10%. anyOf[1] (Value): number. Percentage points of the returned units' subtotal, such as `10` for 10%. Format: double. multipleOf: 0.0001. anyOf[2] (Value): null.
     * @return int|float|null
     * @throws SdkError When percent is omitted; use hasPercent() or valueOrDefault().
     */
    public function getPercent(): mixed { return $this->get('percent'); }
    public function hasPercent(): bool { return $this->has('percent'); }
    /** Whether the amount reduces or increases what the buyer receives. Value enum: "deduction", "credit". anyOf[1] (Value): string. Whether the amount reduces or increases what the buyer receives. Value enum: "deduction", "credit". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When value_effect is omitted; use hasValueEffect() or valueOrDefault().
     */
    public function getValueEffect(): mixed { return $this->get('value_effect'); }
    public function hasValueEffect(): bool { return $this->has('value_effect'); }
}
