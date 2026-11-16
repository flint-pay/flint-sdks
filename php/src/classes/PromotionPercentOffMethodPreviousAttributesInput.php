<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $allocation
 * @property-read string|null $calculation_basis
 * @property-read PromotionRuleGroupPreviousAttributesInput|array<array-key, mixed>|\stdClass|null $discounted_item_rules
 * @property-read int|null $max_discounted_quantity
 * @property-read int|float|null $percent_off
 * @property-read PromotionRecurrencePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $recurrence
 * @property-read string|null $type
 * Presence-aware input; omitted fields throw when accessed. */
final class PromotionPercentOffMethodPreviousAttributesInput extends Model {
    /** @param array{'allocation'?: string|null, 'calculation_basis'?: string|null, 'discounted_item_rules'?: PromotionRuleGroupPreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'max_discounted_quantity'?: int|null, 'percent_off'?: int|float|null, 'recurrence'?: PromotionRecurrencePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'type'?: string|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PromotionPercentOffMethodPreviousAttributesInput')); }
    /** How the effect is applied across the matched items or charges. each applies the effect to every matched item independently: a fixed amount_off is charged per item (10 USD off 3 items discounts 30 USD, each capped at the item price), and a percent_off is taken from each item. across applies the effect once to the matched set as a whole: a fixed amount_off is the whole amount one time (10 USD off the group total, not prorated per item), and a percent_off is taken from the combined subtotal. For percent_off the two produce the same total and differ only in how the discount is attributed to individual line items; for amount_off they differ by the number of matched items, so set it deliberately. Defaults to each for line_item and service_charge promotions and across for order promotions. max_discounted_quantity requires each. Value enum: "each", "across". anyOf[1] (Value): string. How the effect is applied across the matched items or charges. each applies the effect to every matched item independently: a fixed amount_off is charged per item (10 USD off 3 items discounts 30 USD, each capped at the item price), and a percent_off is taken from each item. across applies the effect once to the matched set as a whole: a fixed amount_off is the whole amount one time (10 USD off the group total, not prorated per item), and a percent_off is taken from the combined subtotal. For percent_off the two produce the same total and differ only in how the discount is attributed to individual line items; for amount_off they differ by the number of matched items, so set it deliberately. Defaults to each for line_item and service_charge promotions and across for order promotions. max_discounted_quantity requires each. Value enum: "each", "across". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When allocation is omitted; use hasAllocation() or valueOrDefault().
     */
    public function getAllocation(): mixed { return $this->get('allocation'); }
    public function hasAllocation(): bool { return $this->has('allocation'); }
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
    /** Maximum number of matched units that receive the discount. Only valid when type is percent_off, and requires allocation each. Sending it with amount_off or buy_x_get_y returns `400 INVALID_REQUEST` naming this field. Whole-number quantity; fractional quantities are not supported. Flint discounts the first matched units in line-item order (the order items were added), not the cheapest. anyOf[1] (Value): integer. Maximum number of matched units that receive the discount. Only valid when type is percent_off, and requires allocation each. Sending it with amount_off or buy_x_get_y returns `400 INVALID_REQUEST` naming this field. Whole-number quantity; fractional quantities are not supported. Flint discounts the first matched units in line-item order (the order items were added), not the cheapest. Format: int32. minimum: 1. anyOf[2] (Value): null.
     * @return int|null
     * @throws SdkError When max_discounted_quantity is omitted; use hasMaxDiscountedQuantity() or valueOrDefault().
     */
    public function getMaxDiscountedQuantity(): mixed { return $this->get('max_discounted_quantity'); }
    public function hasMaxDiscountedQuantity(): bool { return $this->has('max_discounted_quantity'); }
    /** Percentage to discount, from 1 to 100. anyOf[1] (Value): number. Percentage to discount, from 1 to 100. minimum: 1. maximum: 100. multipleOf: 0.0001. anyOf[2] (Value): null.
     * @return int|float|null
     * @throws SdkError When percent_off is omitted; use hasPercentOff() or valueOrDefault().
     */
    public function getPercentOff(): mixed { return $this->get('percent_off'); }
    public function hasPercentOff(): bool { return $this->has('percent_off'); }
    /** Optional recurrence for subscription payments: once applies to the first charged payment, repeating applies for period_count charged payments, and forever applies to every payment. One-time orders apply the promotion once. anyOf[1] (Value): {@see PromotionRecurrencePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return PromotionRecurrencePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When recurrence is omitted; use hasRecurrence() or valueOrDefault().
     */
    public function getRecurrence(): mixed { return $this->get('recurrence'); }
    public function hasRecurrence(): bool { return $this->has('recurrence'); }
    /** Selects the percent_off discount effect and its allowed fields. Value enum: "percent_off". anyOf[1] (Value): string. Selects the percent_off discount effect and its allowed fields. Value enum: "percent_off". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When type is omitted; use hasType() or valueOrDefault().
     */
    public function getType(): mixed { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
}
