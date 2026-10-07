<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $allocation
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $amount_off_money
 * @property-read int $buy_min_quantity
 * @property-read string $calculation_basis
 * @property-read array<array-key, MoneyValueInput|array<array-key, mixed>|\stdClass>|\stdClass $currency_options
 * @property-read PromotionRuleGroupInput|array<array-key, mixed>|\stdClass $discounted_item_rules
 * @property-read int|float $get_percent_off
 * @property-read int $get_quantity
 * @property-read int $max_applications_per_order
 * @property-read int $max_discounted_quantity
 * @property-read int|float $percent_off
 * @property-read list<PromotionRuleInput|array<array-key, mixed>|\stdClass>|array{'all': list<array{'attribute': string, 'currency_options'?: array<array-key, MoneyValueInput|array<array-key, mixed>|\stdClass>|\stdClass, 'operator': string, 'values'?: list<PromotionRuleValueInput|array<array-key, mixed>|\stdClass>}|object|PromotionRuleGroupInput|array<array-key, mixed>|\stdClass>}|object|array{'any': list<array{'attribute': string, 'currency_options'?: array<array-key, MoneyValueInput|array<array-key, mixed>|\stdClass>|\stdClass, 'operator': string, 'values'?: list<PromotionRuleValueInput|array<array-key, mixed>|\stdClass>}|object|PromotionRuleGroupInput|array<array-key, mixed>|\stdClass>}|object $qualifying_item_rules
 * @property-read PromotionRecurrenceInput|array<array-key, mixed>|\stdClass $recurrence
 * @property-read string $reward_selection
 * @property-read string $type
 * Presence-aware input; omitted fields throw when accessed. */
final class PromotionApplicationMethodInput extends Model {
    /** @param mixed $values */
    public function __construct(mixed $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PromotionApplicationMethodInput')); }
    /** @return string
     * @throws SdkError When allocation is omitted; use hasAllocation() or valueOrDefault().
     */
    public function getAllocation(): string { return $this->get('allocation'); }
    public function hasAllocation(): bool { return $this->has('allocation'); }
    /** @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When amount_off_money is omitted; use hasAmountOffMoney() or valueOrDefault().
     */
    public function getAmountOffMoney(): mixed { return $this->get('amount_off_money'); }
    public function hasAmountOffMoney(): bool { return $this->has('amount_off_money'); }
    /** @return int
     * @throws SdkError When buy_min_quantity is omitted; use hasBuyMinQuantity() or valueOrDefault().
     */
    public function getBuyMinQuantity(): int { return $this->get('buy_min_quantity'); }
    public function hasBuyMinQuantity(): bool { return $this->has('buy_min_quantity'); }
    /** @return string
     * @throws SdkError When calculation_basis is omitted; use hasCalculationBasis() or valueOrDefault().
     */
    public function getCalculationBasis(): string { return $this->get('calculation_basis'); }
    public function hasCalculationBasis(): bool { return $this->has('calculation_basis'); }
    /** @return array<array-key, MoneyValueInput|array<array-key, mixed>|\stdClass>|\stdClass
     * @throws SdkError When currency_options is omitted; use hasCurrencyOptions() or valueOrDefault().
     */
    public function getCurrencyOptions(): array|object { return $this->get('currency_options'); }
    public function hasCurrencyOptions(): bool { return $this->has('currency_options'); }
    /** @return PromotionRuleGroupInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When discounted_item_rules is omitted; use hasDiscountedItemRules() or valueOrDefault().
     */
    public function getDiscountedItemRules(): mixed { return $this->get('discounted_item_rules'); }
    public function hasDiscountedItemRules(): bool { return $this->has('discounted_item_rules'); }
    /** @return int|float
     * @throws SdkError When get_percent_off is omitted; use hasGetPercentOff() or valueOrDefault().
     */
    public function getGetPercentOff(): int|float { return $this->get('get_percent_off'); }
    public function hasGetPercentOff(): bool { return $this->has('get_percent_off'); }
    /** @return int
     * @throws SdkError When get_quantity is omitted; use hasGetQuantity() or valueOrDefault().
     */
    public function getGetQuantity(): int { return $this->get('get_quantity'); }
    public function hasGetQuantity(): bool { return $this->has('get_quantity'); }
    /** @return int
     * @throws SdkError When max_applications_per_order is omitted; use hasMaxApplicationsPerOrder() or valueOrDefault().
     */
    public function getMaxApplicationsPerOrder(): int { return $this->get('max_applications_per_order'); }
    public function hasMaxApplicationsPerOrder(): bool { return $this->has('max_applications_per_order'); }
    /** @return int
     * @throws SdkError When max_discounted_quantity is omitted; use hasMaxDiscountedQuantity() or valueOrDefault().
     */
    public function getMaxDiscountedQuantity(): int { return $this->get('max_discounted_quantity'); }
    public function hasMaxDiscountedQuantity(): bool { return $this->has('max_discounted_quantity'); }
    /** @return int|float
     * @throws SdkError When percent_off is omitted; use hasPercentOff() or valueOrDefault().
     */
    public function getPercentOff(): int|float { return $this->get('percent_off'); }
    public function hasPercentOff(): bool { return $this->has('percent_off'); }
    /** @return list<PromotionRuleInput|array<array-key, mixed>|\stdClass>|array{'all': list<array{'attribute': string, 'currency_options'?: array<array-key, MoneyValueInput|array<array-key, mixed>|\stdClass>|\stdClass, 'operator': string, 'values'?: list<PromotionRuleValueInput|array<array-key, mixed>|\stdClass>}|object|PromotionRuleGroupInput|array<array-key, mixed>|\stdClass>}|object|array{'any': list<array{'attribute': string, 'currency_options'?: array<array-key, MoneyValueInput|array<array-key, mixed>|\stdClass>|\stdClass, 'operator': string, 'values'?: list<PromotionRuleValueInput|array<array-key, mixed>|\stdClass>}|object|PromotionRuleGroupInput|array<array-key, mixed>|\stdClass>}|object
     * @throws SdkError When qualifying_item_rules is omitted; use hasQualifyingItemRules() or valueOrDefault().
     */
    public function getQualifyingItemRules(): mixed { return $this->get('qualifying_item_rules'); }
    public function hasQualifyingItemRules(): bool { return $this->has('qualifying_item_rules'); }
    /** @return PromotionRecurrenceInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When recurrence is omitted; use hasRecurrence() or valueOrDefault().
     */
    public function getRecurrence(): mixed { return $this->get('recurrence'); }
    public function hasRecurrence(): bool { return $this->has('recurrence'); }
    /** @return string
     * @throws SdkError When reward_selection is omitted; use hasRewardSelection() or valueOrDefault().
     */
    public function getRewardSelection(): string { return $this->get('reward_selection'); }
    public function hasRewardSelection(): bool { return $this->has('reward_selection'); }
    /** @return string
     * @throws SdkError When type is omitted; use hasType() or valueOrDefault().
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
}
