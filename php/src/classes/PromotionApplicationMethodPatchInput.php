<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $allocation
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $amount_off_money
 * @property-read int $buy_min_quantity
 * @property-read string|null $calculation_basis
 * @property-read array<array-key, MoneyValueInput|array<array-key, mixed>|\stdClass>|\stdClass|null $currency_options
 * @property-read array{'all': list<array{'attribute': string, 'currency_options'?: array<array-key, MoneyValueInput|array<array-key, mixed>|\stdClass>|\stdClass, 'operator': string, 'values'?: list<PromotionRuleValueRequestInput|array<array-key, mixed>|\stdClass>}|object|PromotionRuleGroupRequestInput|array<array-key, mixed>|\stdClass>}|object|array{'any': list<array{'attribute': string, 'currency_options'?: array<array-key, MoneyValueInput|array<array-key, mixed>|\stdClass>|\stdClass, 'operator': string, 'values'?: list<PromotionRuleValueRequestInput|array<array-key, mixed>|\stdClass>}|object|PromotionRuleGroupRequestInput|array<array-key, mixed>|\stdClass>}|object|null $discounted_item_rules
 * @property-read int|float $get_percent_off
 * @property-read int $get_quantity
 * @property-read int|null $max_applications_per_order
 * @property-read int|null $max_discounted_quantity
 * @property-read int|float $percent_off
 * @property-read PromotionRuleGroupRequestInput|array<array-key, mixed>|\stdClass $qualifying_item_rules
 * @property-read array{'period_count'?: int, 'type': string}|object|array{'period_count': int, 'type': string}|object|null $recurrence
 * @property-read string $reward_selection
 * @property-read string $type
 * Presence-aware input; omitted fields throw when accessed. */
final class PromotionApplicationMethodPatchInput extends Model {
    /** @param array{'allocation'?: string, 'amount_off_money'?: MoneyValueInput|array<array-key, mixed>|\stdClass, 'buy_min_quantity'?: int, 'calculation_basis'?: string|null, 'currency_options'?: array<array-key, MoneyValueInput|array<array-key, mixed>|\stdClass>|\stdClass|null, 'discounted_item_rules'?: array{'all': list<array{'attribute': string, 'currency_options'?: array<array-key, MoneyValueInput|array<array-key, mixed>|\stdClass>|\stdClass, 'operator': string, 'values'?: list<PromotionRuleValueRequestInput|array<array-key, mixed>|\stdClass>}|object|PromotionRuleGroupRequestInput|array<array-key, mixed>|\stdClass>}|object|array{'any': list<array{'attribute': string, 'currency_options'?: array<array-key, MoneyValueInput|array<array-key, mixed>|\stdClass>|\stdClass, 'operator': string, 'values'?: list<PromotionRuleValueRequestInput|array<array-key, mixed>|\stdClass>}|object|PromotionRuleGroupRequestInput|array<array-key, mixed>|\stdClass>}|object|null, 'get_percent_off'?: int|float, 'get_quantity'?: int, 'max_applications_per_order'?: int|null, 'max_discounted_quantity'?: int|null, 'percent_off'?: int|float, 'qualifying_item_rules'?: PromotionRuleGroupRequestInput|array<array-key, mixed>|\stdClass, 'recurrence'?: array{'period_count'?: int, 'type': string}|object|array{'period_count': int, 'type': string}|object|null, 'reward_selection'?: string, 'type'?: string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PromotionApplicationMethodPatchInput')); }
    /** How the effect is allocated. Omitted allocation keeps its stored value; it defaults by discount_class only when no allocation is stored. Changing discount_class does not reset allocation. Value enum: "each", "across".
     * @return string
     * @throws SdkError When allocation is omitted; use hasAllocation() or valueOrDefault().
     */
    public function getAllocation(): string { return $this->get('allocation'); }
    public function hasAllocation(): bool { return $this->has('allocation'); }
    /** Positive fixed discount in the primary currency. allocation determines whether it applies to each matched item or once across the matched set. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When amount_off_money is omitted; use hasAmountOffMoney() or valueOrDefault().
     */
    public function getAmountOffMoney(): mixed { return $this->get('amount_off_money'); }
    public function hasAmountOffMoney(): bool { return $this->has('amount_off_money'); }
    /** Number of qualifying units needed for one application of a buy_x_get_y promotion. Whole-number quantity; fractional quantities are not supported. Format: int32. minimum: 1.
     * @return int
     * @throws SdkError When buy_min_quantity is omitted; use hasBuyMinQuantity() or valueOrDefault().
     */
    public function getBuyMinQuantity(): int { return $this->get('buy_min_quantity'); }
    public function hasBuyMinQuantity(): bool { return $this->has('buy_min_quantity'); }
    /** Basis for merchandise promotion calculations. Omit for service_charge promotions because service-charge discounts are calculated from the targeted charges. Send null to clear it. Value enum: "subtotal_pre_tax", "subtotal_post_tax", null.
     * @return string|null
     * @throws SdkError When calculation_basis is omitted; use hasCalculationBasis() or valueOrDefault().
     */
    public function getCalculationBasis(): string|null { return $this->get('calculation_basis'); }
    public function hasCalculationBasis(): bool { return $this->has('calculation_basis'); }
    /** Alternative positive fixed discounts, keyed by currency code. Each Money currency must match its key. * (Value): {@see MoneyValueInput}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return array<array-key, MoneyValueInput|array<array-key, mixed>|\stdClass>|\stdClass|null
     * @throws SdkError When currency_options is omitted; use hasCurrencyOptions() or valueOrDefault().
     */
    public function getCurrencyOptions(): array|object|null { return $this->get('currency_options'); }
    public function hasCurrencyOptions(): bool { return $this->has('currency_options'); }
    /** Which line items receive the discount. Required for service_charge promotions, and for line_item promotions whose eligibility_rules include any non-line-item condition (for example order.subtotal or a customer condition). It is optional only when eligibility_rules consist entirely of line_item.* conditions (plus matched_items.subtotal), in which case the matched items are used as the target. Omitting it otherwise returns DISCOUNTED_ITEM_RULES_REQUIRED. anyOf[1] (Value): {@see PromotionRuleGroupRequestInput}. A rule group is an object with exactly one nonempty all (AND) or any (OR) array of rules or nested groups. Arrays, empty groups, and a rules key are invalid. Omit the field for no rules, or send null where the field is clearable. Responses list rules before nested groups. Under any, a nested group containing only one rule reads back as that rule. Under all, nested groups keep their boundaries to preserve matched_items.subtotal scope. These deterministic normalizations stabilize after one round trip. matched_items.subtotal sums the line items matched by the line_item.* rules in the same all group, including its nested groups. anyOf[2] (Value): null.
     * @return array{'all': list<array{'attribute': string, 'currency_options'?: array<array-key, MoneyValueInput|array<array-key, mixed>|\stdClass>|\stdClass, 'operator': string, 'values'?: list<PromotionRuleValueRequestInput|array<array-key, mixed>|\stdClass>}|object|PromotionRuleGroupRequestInput|array<array-key, mixed>|\stdClass>}|object|array{'any': list<array{'attribute': string, 'currency_options'?: array<array-key, MoneyValueInput|array<array-key, mixed>|\stdClass>|\stdClass, 'operator': string, 'values'?: list<PromotionRuleValueRequestInput|array<array-key, mixed>|\stdClass>}|object|PromotionRuleGroupRequestInput|array<array-key, mixed>|\stdClass>}|object|null
     * @throws SdkError When discounted_item_rules is omitted; use hasDiscountedItemRules() or valueOrDefault().
     */
    public function getDiscountedItemRules(): mixed { return $this->get('discounted_item_rules'); }
    public function hasDiscountedItemRules(): bool { return $this->has('discounted_item_rules'); }
    /** Percentage to discount from reward items, from 1 to 100. Use 100 to make the reward items free. minimum: 1. maximum: 100. multipleOf: 0.0001.
     * @return int|float
     * @throws SdkError When get_percent_off is omitted; use hasGetPercentOff() or valueOrDefault().
     */
    public function getGetPercentOff(): int|float { return $this->get('get_percent_off'); }
    public function hasGetPercentOff(): bool { return $this->has('get_percent_off'); }
    /** Maximum number of reward units discounted per application of a buy_x_get_y promotion. Whole-number quantity; fractional quantities are not supported. Format: int32. minimum: 1.
     * @return int
     * @throws SdkError When get_quantity is omitted; use hasGetQuantity() or valueOrDefault().
     */
    public function getGetQuantity(): int { return $this->get('get_quantity'); }
    public function hasGetQuantity(): bool { return $this->has('get_quantity'); }
    /** Maximum number of times the buy_x_get_y promotion can apply to one order. Omit for no limit beyond the qualifying and reward quantities. Format: int32. minimum: 1.
     * @return int|null
     * @throws SdkError When max_applications_per_order is omitted; use hasMaxApplicationsPerOrder() or valueOrDefault().
     */
    public function getMaxApplicationsPerOrder(): int|null { return $this->get('max_applications_per_order'); }
    public function hasMaxApplicationsPerOrder(): bool { return $this->has('max_applications_per_order'); }
    /** Maximum matched units discounted, valid only for percent_off with allocation each. null clears the limit. Fields belonging to another effect return INVALID_REQUEST; send type to change effects. Format: int32. minimum: 1.
     * @return int|null
     * @throws SdkError When max_discounted_quantity is omitted; use hasMaxDiscountedQuantity() or valueOrDefault().
     */
    public function getMaxDiscountedQuantity(): int|null { return $this->get('max_discounted_quantity'); }
    public function hasMaxDiscountedQuantity(): bool { return $this->has('max_discounted_quantity'); }
    /** Percentage to discount, from 1 to 100. minimum: 1. maximum: 100. multipleOf: 0.0001.
     * @return int|float
     * @throws SdkError When percent_off is omitted; use hasPercentOff() or valueOrDefault().
     */
    public function getPercentOff(): int|float { return $this->get('percent_off'); }
    public function hasPercentOff(): bool { return $this->has('percent_off'); }
    /** Rules that identify the items counted toward buy_min_quantity for a buy_x_get_y promotion. A rule group is an object with exactly one nonempty all (AND) or any (OR) array of rules or nested groups. Arrays, empty groups, and a rules key are invalid. Omit the field for no rules, or send null where the field is clearable. Responses list rules before nested groups. Under any, a nested group containing only one rule reads back as that rule. Under all, nested groups keep their boundaries to preserve matched_items.subtotal scope. These deterministic normalizations stabilize after one round trip. matched_items.subtotal sums the line items matched by the line_item.* rules in the same all group, including its nested groups.
     * @return PromotionRuleGroupRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When qualifying_item_rules is omitted; use hasQualifyingItemRules() or valueOrDefault().
     */
    public function getQualifyingItemRules(): mixed { return $this->get('qualifying_item_rules'); }
    public function hasQualifyingItemRules(): bool { return $this->has('qualifying_item_rules'); }
    /** Optional recurrence for subscription payments: once applies to the first charged payment, repeating applies for period_count charged payments, and forever applies to every payment. One-time orders apply the promotion once. anyOf[1] (Value): {@see PromotionRecurrenceInput}. How often a promotion's discount repeats on a subscription: once, for a number of charged payments, or forever. anyOf[2] (Value): null.
     * @return array{'period_count'?: int, 'type': string}|object|array{'period_count': int, 'type': string}|object|null
     * @throws SdkError When recurrence is omitted; use hasRecurrence() or valueOrDefault().
     */
    public function getRecurrence(): mixed { return $this->get('recurrence'); }
    public function hasRecurrence(): bool { return $this->has('recurrence'); }
    /** Which matching reward items receive the discount: the cheapest, the highest priced, or those added first to the order. Defaults to cheapest. Default: "cheapest". Value enum: "cheapest", "highest_price", "first_added".
     * @return string
     * @throws SdkError When reward_selection is omitted; use hasRewardSelection() or valueOrDefault().
     */
    public function getRewardSelection(): string { return $this->get('reward_selection'); }
    public function hasRewardSelection(): bool { return $this->has('reward_selection'); }
    /** Discount effect: a percentage, a fixed amount, or a discount on reward items after qualifying purchases. Value enum: "percent_off", "amount_off", "buy_x_get_y".
     * @return string
     * @throws SdkError When type is omitted; use hasType() or valueOrDefault().
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
}
