<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $allocation
 * @property-read int $buy_min_quantity
 * @property-read string $calculation_basis
 * @property-read PromotionRuleGroupInput|array<array-key, mixed>|\stdClass $discounted_item_rules
 * @property-read int|float $get_percent_off
 * @property-read int $get_quantity
 * @property-read int $max_applications_per_order
 * @property-read PromotionRuleGroupInput|array<array-key, mixed>|\stdClass $qualifying_item_rules
 * @property-read PromotionRecurrenceInput|array<array-key, mixed>|\stdClass $recurrence
 * @property-read string $reward_selection
 * @property-read string $type
 * Presence-aware input; omitted fields throw when accessed. */
final class PromotionBuyXGetYMethodInput extends Model {
    /** @param array{'allocation'?: string, 'buy_min_quantity': int, 'calculation_basis'?: string, 'discounted_item_rules': PromotionRuleGroupInput|array<array-key, mixed>|\stdClass, 'get_percent_off': int|float, 'get_quantity': int, 'max_applications_per_order'?: int, 'qualifying_item_rules': PromotionRuleGroupInput|array<array-key, mixed>|\stdClass, 'recurrence'?: PromotionRecurrenceInput|array<array-key, mixed>|\stdClass, 'reward_selection'?: string, 'type': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PromotionBuyXGetYMethodInput')); }
    /** How the effect is applied across the matched items or charges. each applies the effect to every matched item independently: a fixed amount_off is charged per item (10 USD off 3 items discounts 30 USD, each capped at the item price), and a percent_off is taken from each item. across applies the effect once to the matched set as a whole: a fixed amount_off is the whole amount one time (10 USD off the group total, not prorated per item), and a percent_off is taken from the combined subtotal. For percent_off the two produce the same total and differ only in how the discount is attributed to individual line items; for amount_off they differ by the number of matched items, so set it deliberately. Defaults to each for line_item and service_charge promotions and across for order promotions. max_discounted_quantity requires each. Value enum: "each", "across".
     * @return string
     * @throws SdkError When allocation is omitted; use hasAllocation() or valueOrDefault().
     */
    public function getAllocation(): string { return $this->get('allocation'); }
    public function hasAllocation(): bool { return $this->has('allocation'); }
    /** Number of qualifying units needed for one application of a buy_x_get_y promotion. Whole-number quantity; fractional quantities are not supported. Format: int32. minimum: 1.
     * @return int
     * @throws SdkError When buy_min_quantity is omitted; use hasBuyMinQuantity() or valueOrDefault().
     */
    public function getBuyMinQuantity(): int { return $this->get('buy_min_quantity'); }
    public function hasBuyMinQuantity(): bool { return $this->has('buy_min_quantity'); }
    /** Basis for merchandise promotion calculations. Omit for service_charge promotions because service-charge discounts are calculated from the targeted charges. Value enum: "subtotal_pre_tax", "subtotal_post_tax".
     * @return string
     * @throws SdkError When calculation_basis is omitted; use hasCalculationBasis() or valueOrDefault().
     */
    public function getCalculationBasis(): string { return $this->get('calculation_basis'); }
    public function hasCalculationBasis(): bool { return $this->has('calculation_basis'); }
    /** Which line items receive the discount. Required for service_charge promotions, and for line_item promotions whose eligibility_rules include any non-line-item condition (for example order.subtotal or a customer condition). It is optional only when eligibility_rules consist entirely of line_item.* conditions (plus matched_items.subtotal), in which case the matched items are used as the target. Omitting it otherwise returns DISCOUNTED_ITEM_RULES_REQUIRED. A rule group is an object with exactly one nonempty all (AND) or any (OR) array of rules or nested groups. Arrays, empty groups, and a rules key are invalid. Omit the field for no rules, or send null where the field is clearable. Responses list rules before nested groups. Under any, a nested group containing only one rule reads back as that rule. Under all, nested groups keep their boundaries to preserve matched_items.subtotal scope. These deterministic normalizations stabilize after one round trip. matched_items.subtotal sums the line items matched by the line_item.* rules in the same all group, including its nested groups.
     * @return PromotionRuleGroupInput|array<array-key, mixed>|\stdClass
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
     * @return int
     * @throws SdkError When max_applications_per_order is omitted; use hasMaxApplicationsPerOrder() or valueOrDefault().
     */
    public function getMaxApplicationsPerOrder(): int { return $this->get('max_applications_per_order'); }
    public function hasMaxApplicationsPerOrder(): bool { return $this->has('max_applications_per_order'); }
    /** Rules that identify the items counted toward buy_min_quantity for a buy_x_get_y promotion. A rule group is an object with exactly one nonempty all (AND) or any (OR) array of rules or nested groups. Arrays, empty groups, and a rules key are invalid. Omit the field for no rules, or send null where the field is clearable. Responses list rules before nested groups. Under any, a nested group containing only one rule reads back as that rule. Under all, nested groups keep their boundaries to preserve matched_items.subtotal scope. These deterministic normalizations stabilize after one round trip. matched_items.subtotal sums the line items matched by the line_item.* rules in the same all group, including its nested groups.
     * @return PromotionRuleGroupInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When qualifying_item_rules is omitted; use hasQualifyingItemRules() or valueOrDefault().
     */
    public function getQualifyingItemRules(): mixed { return $this->get('qualifying_item_rules'); }
    public function hasQualifyingItemRules(): bool { return $this->has('qualifying_item_rules'); }
    /** Optional recurrence for subscription payments: once applies to the first charged payment, repeating applies for period_count charged payments, and forever applies to every payment. One-time orders apply the promotion once. How often a promotion's discount repeats on a subscription: once, for a number of charged payments, or forever.
     * @return PromotionRecurrenceInput|array<array-key, mixed>|\stdClass
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
    /** Selects the buy_x_get_y discount effect and its allowed fields. Value enum: "buy_x_get_y".
     * @return string
     * @throws SdkError When type is omitted; use hasType() or valueOrDefault().
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
}
