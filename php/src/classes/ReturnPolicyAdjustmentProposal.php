<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $adjustment_type
 * @property-read string $based_on_quantity
 * @property-read MoneyValue $calculated_amount_money
 * @property-read string $calculation_type
 * @property-read MoneyValue $flat_money
 * @property-read float $percent
 * @property-read string $value_effect
 * Presence-aware response; omitted fields throw when accessed. */
final class ReturnPolicyAdjustmentProposal extends Model {
    /** @param array{'adjustment_type': string, 'based_on_quantity'?: string, 'calculated_amount_money'?: mixed, 'calculation_type': string, 'flat_money'?: mixed, 'percent'?: float, 'value_effect': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnPolicyAdjustmentProposal')); }
    /** @return string
     * @throws SdkError When adjustment_type is omitted; use hasAdjustmentType() or valueOrDefault().
     */
    public function getAdjustmentType(): string { return $this->get('adjustment_type'); }
    public function hasAdjustmentType(): bool { return $this->has('adjustment_type'); }
    /** @return string
     * @throws SdkError When based_on_quantity is omitted; use hasBasedOnQuantity() or valueOrDefault().
     */
    public function getBasedOnQuantity(): string { return $this->get('based_on_quantity'); }
    public function hasBasedOnQuantity(): bool { return $this->has('based_on_quantity'); }
    /** @return MoneyValue
     * @throws SdkError When calculated_amount_money is omitted; use hasCalculatedAmountMoney() or valueOrDefault().
     */
    public function getCalculatedAmountMoney(): MoneyValue { return $this->get('calculated_amount_money'); }
    public function hasCalculatedAmountMoney(): bool { return $this->has('calculated_amount_money'); }
    /** @return string
     * @throws SdkError When calculation_type is omitted; use hasCalculationType() or valueOrDefault().
     */
    public function getCalculationType(): string { return $this->get('calculation_type'); }
    public function hasCalculationType(): bool { return $this->has('calculation_type'); }
    /** @return MoneyValue
     * @throws SdkError When flat_money is omitted; use hasFlatMoney() or valueOrDefault().
     */
    public function getFlatMoney(): MoneyValue { return $this->get('flat_money'); }
    public function hasFlatMoney(): bool { return $this->has('flat_money'); }
    /** @return float
     * @throws SdkError When percent is omitted; use hasPercent() or valueOrDefault().
     */
    public function getPercent(): float { return $this->get('percent'); }
    public function hasPercent(): bool { return $this->has('percent'); }
    /** @return string
     * @throws SdkError When value_effect is omitted; use hasValueEffect() or valueOrDefault().
     */
    public function getValueEffect(): string { return $this->get('value_effect'); }
    public function hasValueEffect(): bool { return $this->has('value_effect'); }
}
