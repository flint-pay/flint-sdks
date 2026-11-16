<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $allocation
 * @property-read int|null $buy_min_quantity
 * @property-read string|null $calculation_basis
 * @property-read PromotionRuleGroupPreviousAttributesInput|array<array-key, mixed>|\stdClass|null $discounted_item_rules
 * @property-read int|float|null $get_percent_off
 * @property-read int|null $get_quantity
 * @property-read int|null $max_applications_per_order
 * @property-read PromotionRuleGroupPreviousAttributesInput|array<array-key, mixed>|\stdClass|null $qualifying_item_rules
 * @property-read PromotionRecurrencePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $recurrence
 * @property-read string|null $reward_selection
 * @property-read string|null $type
 * Presence-aware input; omitted fields throw when accessed. */
final class PromotionBuyXGetYMethodPreviousAttributesInput extends Model {
    /** @param array{'allocation'?: string|null, 'buy_min_quantity'?: int|null, 'calculation_basis'?: string|null, 'discounted_item_rules'?: PromotionRuleGroupPreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'get_percent_off'?: int|float|null, 'get_quantity'?: int|null, 'max_applications_per_order'?: int|null, 'qualifying_item_rules'?: PromotionRuleGroupPreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'recurrence'?: PromotionRecurrencePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'reward_selection'?: string|null, 'type'?: string|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PromotionBuyXGetYMethodPreviousAttributesInput')); }
    /** How the effect is applied across the matched items or charges. each applies the effect to every matched item independently: a fixed amount_off is charged per item (10 USD off 3 items discounts 30 USD, each capped at the item price), and a percent_off is taken from each item. across applies the effect once to the matched set as a whole: a fixed amount_off is the whole amount one time (10 USD off the group total, not prorated per item), and a percent_off is taken from the combined subtotal. For percent_off the two produce the same total and differ only in how the discount is attributed to individual line items; for amount_off they differ by the number of matched items, so set it deliberately. Defaults to each for line_item and service_charge promotions and across for order promotions. max_discounted_quantity requires each. Value enum: "each", "across". anyOf[1] (Value): string. How the effect is applied across the matched items or charges. each applies the effect to every matched item independently: a fixed amount_off is charged per item (10 USD off 3 items discounts 30 USD, each capped at the item price), and a percent_off is taken from each item. across applies the effect once to the matched set as a whole: a fixed amount_off is the whole amount one time (10 USD off the group total, not prorated per item), and a percent_off is taken from the combined subtotal. For percent_off the two produce the same total and differ only in how the discount is attributed to individual line items; for amount_off they differ by the number of matched items, so set it deliberately. Defaults to each for line_item and service_charge promotions and across for order promotions. max_discounted_quantity requires each. Value enum: "each", "across". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When allocation is omitted; use hasAllocation() or valueOrDefault().
     */
    public function getAllocation(): mixed { return $this->get('allocation'); }
    public function hasAllocation(): bool { return $this->has('allocation'); }
    /** Number of qualifying units needed for one application of a buy_x_get_y promotion. Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer. Number of qualifying units needed for one application of a buy_x_get_y promotion. Whole-number quantity; fractional quantities are not supported. Format: int32. minimum: 1. anyOf[2] (Value): null.
     * @return int|null
     * @throws SdkError When buy_min_quantity is omitted; use hasBuyMinQuantity() or valueOrDefault().
     */
    public function getBuyMinQuantity(): mixed { return $this->get('buy_min_quantity'); }
    public function hasBuyMinQuantity(): bool { return $this->has('buy_min_quantity'); }
    /** What a merchandise discount is calculated from. Omitted means `subtotal_pre_tax`. Not used by service_charge promotions; sending it there returns `400 INVALID_REQUEST`. Value enum: "subtotal_pre_tax", "subtotal_post_tax". anyOf[1] (Value): string. What a merchandise discount is calculated from. Omitted means `subtotal_pre_tax`. Not used by service_charge promotions; sending it there returns `400 INVALID_REQUEST`. Value enum: "subtotal_pre_tax", "subtotal_post_tax". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When calculation_basis is omitted; use hasCalculationBasis() or valueOrDefault().
     */
    public function getCalculationBasis(): mixed { return $this->get('calculation_basis'); }
    public function hasCalculationBasis(): bool { return $this->has('calculation_basis'); }
    /** Which line items receive the discount. Required for service_charge promotions, and for line_item promotions whose eligibility_rules include any non-line-item condition (for example order.subtotal or a customer condition). It is optional only when eligibility_rules consist entirely of line_item.* conditions (plus matched_items.subtotal), in which case the matched items are used as the target. Omitting it otherwise returns `400 INVALID_REQUEST` with `param` naming this field. anyOf[1] (Value): {@see PromotionRuleGroupPreviousAttributesInput}. A rule group is an object with exactly one nonempty all (AND) or any (OR) array of rules or nested groups. Arrays, empty groups, and a rules key are invalid. Omit the field for no rules, or send null where the field is clearable. Responses list rules before nested groups. Under any, a nested group containing only one rule reads back as that rule. Under all, nested groups keep their boundaries to preserve matched_items.subtotal scope. These deterministic normalizations stabilize after one round trip. matched_items.subtotal sums the line items matched by the line_item.* rules in the same all group, including its nested groups. anyOf[2] (Value): null.
     * @return PromotionRuleGroupPreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When discounted_item_rules is omitted; use hasDiscountedItemRules() or valueOrDefault().
     */
    public function getDiscountedItemRules(): mixed { return $this->get('discounted_item_rules'); }
    public function hasDiscountedItemRules(): bool { return $this->has('discounted_item_rules'); }
    /** Percentage to discount from reward items, from 1 to 100. Use 100 to make the reward items free. anyOf[1] (Value): number. Percentage to discount from reward items, from 1 to 100. Use 100 to make the reward items free. minimum: 1. maximum: 100. multipleOf: 0.0001. anyOf[2] (Value): null.
     * @return int|float|null
     * @throws SdkError When get_percent_off is omitted; use hasGetPercentOff() or valueOrDefault().
     */
    public function getGetPercentOff(): mixed { return $this->get('get_percent_off'); }
    public function hasGetPercentOff(): bool { return $this->has('get_percent_off'); }
    /** Maximum number of reward units discounted per application of a buy_x_get_y promotion. Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer. Maximum number of reward units discounted per application of a buy_x_get_y promotion. Whole-number quantity; fractional quantities are not supported. Format: int32. minimum: 1. anyOf[2] (Value): null.
     * @return int|null
     * @throws SdkError When get_quantity is omitted; use hasGetQuantity() or valueOrDefault().
     */
    public function getGetQuantity(): mixed { return $this->get('get_quantity'); }
    public function hasGetQuantity(): bool { return $this->has('get_quantity'); }
    /** Maximum number of times the buy_x_get_y promotion can apply to one order. Omit for no limit beyond the qualifying and reward quantities. anyOf[1] (Value): integer. Maximum number of times the buy_x_get_y promotion can apply to one order. Omit for no limit beyond the qualifying and reward quantities. Format: int32. minimum: 1. anyOf[2] (Value): null.
     * @return int|null
     * @throws SdkError When max_applications_per_order is omitted; use hasMaxApplicationsPerOrder() or valueOrDefault().
     */
    public function getMaxApplicationsPerOrder(): mixed { return $this->get('max_applications_per_order'); }
    public function hasMaxApplicationsPerOrder(): bool { return $this->has('max_applications_per_order'); }
    /** Rules that identify the items counted toward buy_min_quantity for a buy_x_get_y promotion. anyOf[1] (Value): {@see PromotionRuleGroupPreviousAttributesInput}. A rule group is an object with exactly one nonempty all (AND) or any (OR) array of rules or nested groups. Arrays, empty groups, and a rules key are invalid. Omit the field for no rules, or send null where the field is clearable. Responses list rules before nested groups. Under any, a nested group containing only one rule reads back as that rule. Under all, nested groups keep their boundaries to preserve matched_items.subtotal scope. These deterministic normalizations stabilize after one round trip. matched_items.subtotal sums the line items matched by the line_item.* rules in the same all group, including its nested groups. anyOf[2] (Value): null.
     * @return PromotionRuleGroupPreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When qualifying_item_rules is omitted; use hasQualifyingItemRules() or valueOrDefault().
     */
    public function getQualifyingItemRules(): mixed { return $this->get('qualifying_item_rules'); }
    public function hasQualifyingItemRules(): bool { return $this->has('qualifying_item_rules'); }
    /** Optional recurrence for subscription payments: once applies to the first charged payment, repeating applies for period_count charged payments, and forever applies to every payment. One-time orders apply the promotion once. anyOf[1] (Value): {@see PromotionRecurrencePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return PromotionRecurrencePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When recurrence is omitted; use hasRecurrence() or valueOrDefault().
     */
    public function getRecurrence(): mixed { return $this->get('recurrence'); }
    public function hasRecurrence(): bool { return $this->has('recurrence'); }
    /** Which matching reward items receive the discount: the cheapest, the highest priced, or those added first to the order. Defaults to cheapest. Value enum: "cheapest", "highest_price", "first_added". anyOf[1] (Value): string. Which matching reward items receive the discount: the cheapest, the highest priced, or those added first to the order. Defaults to cheapest. Default: "cheapest". Value enum: "cheapest", "highest_price", "first_added". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When reward_selection is omitted; use hasRewardSelection() or valueOrDefault().
     */
    public function getRewardSelection(): mixed { return $this->get('reward_selection'); }
    public function hasRewardSelection(): bool { return $this->has('reward_selection'); }
    /** Selects the buy_x_get_y discount effect and its allowed fields. Value enum: "buy_x_get_y". anyOf[1] (Value): string. Selects the buy_x_get_y discount effect and its allowed fields. Value enum: "buy_x_get_y". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When type is omitted; use hasType() or valueOrDefault().
     */
    public function getType(): mixed { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
}
