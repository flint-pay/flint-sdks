<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?string $allocation
 * @property-read ?string $calculation_basis
 * @property-read mixed $discounted_item_rules
 * @property-read ?int $max_discounted_quantity
 * @property-read float $percent_off
 * @property-read PromotionCreatedInstalledMerchantsEventDataObjectApplicationMethodPercentOffRecurrenceOnce|PromotionCreatedInstalledMerchantsEventDataObjectApplicationMethodPercentOffRecurrenceRepeating|PromotionCreatedInstalledMerchantsEventDataObjectApplicationMethodPercentOffRecurrenceForever|\stdClass|null $recurrence
 * @property-read string $type
 * Presence-aware response; omitted optional fields return null. */
final class PromotionCreatedInstalledMerchantsEventDataObjectApplicationMethodPercentOff extends Model {
    /** @param array{'allocation'?: string, 'calculation_basis'?: string, 'discounted_item_rules'?: mixed, 'max_discounted_quantity'?: int, 'percent_off': float, 'recurrence'?: mixed, 'type': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PromotionCreatedInstalledMerchantsEventDataObjectApplicationMethodPercentOff')); }
    /** How the effect is applied across the matched items or charges. each applies the effect to every matched item independently: a fixed amount_off is charged per item (10 USD off 3 items discounts 30 USD, each capped at the item price), and a percent_off is taken from each item. across applies the effect once to the matched set as a whole: a fixed amount_off is the whole amount one time (10 USD off the group total, not prorated per item), and a percent_off is taken from the combined subtotal. For percent_off the two produce the same total and differ only in how the discount is attributed to individual line items; for amount_off they differ by the number of matched items, so set it deliberately. Defaults to each for line_item and service_charge promotions and across for order promotions. max_discounted_quantity requires each. Value enum: "each", "across".
     * @return ?string
     */
    public function getAllocation(): ?string { return $this->get('allocation'); }
    public function hasAllocation(): bool { return $this->has('allocation'); }
    /** Basis for merchandise promotion calculations. Omit for service_charge promotions because service-charge discounts are calculated from the targeted charges. Value enum: "subtotal_pre_tax", "subtotal_post_tax".
     * @return ?string
     */
    public function getCalculationBasis(): ?string { return $this->get('calculation_basis'); }
    public function hasCalculationBasis(): bool { return $this->has('calculation_basis'); }
    /** Which line items receive the discount. Required for service_charge promotions, and for line_item promotions whose eligibility_rules include any non-line-item condition (for example order.subtotal or a customer condition). It is optional only when eligibility_rules consist entirely of line_item.* conditions (plus matched_items.subtotal), in which case the matched items are used as the target. Omitting it otherwise returns DISCOUNTED_ITEM_RULES_REQUIRED. A rule group is an object with exactly one nonempty all (AND) or any (OR) array of rules or nested groups. Arrays, empty groups, and a rules key are invalid. Omit the field for no rules, or send null where the field is clearable. Responses list rules before nested groups. Under any, a nested group containing only one rule reads back as that rule. Under all, nested groups keep their boundaries to preserve matched_items.subtotal scope. These deterministic normalizations stabilize after one round trip. matched_items.subtotal sums the line items matched by the line_item.* rules in the same all group, including its nested groups.
     * @return mixed
     */
    public function getDiscountedItemRules(): mixed { return $this->get('discounted_item_rules'); }
    public function hasDiscountedItemRules(): bool { return $this->has('discounted_item_rules'); }
    /** Maximum number of matched units that receive the discount. Only valid when type is percent_off, and requires allocation each. Sending it with amount_off or buy_x_get_y returns INVALID_MAX_DISCOUNTED_QUANTITY. Whole-number quantity; fractional quantities are not supported. Flint discounts the first matched units in line-item order (the order items were added), not the cheapest. Format: int32. minimum: 1.
     * @return ?int
     */
    public function getMaxDiscountedQuantity(): ?int { return $this->get('max_discounted_quantity'); }
    public function hasMaxDiscountedQuantity(): bool { return $this->has('max_discounted_quantity'); }
    /** Percentage to discount, from 1 to 100. minimum: 1. maximum: 100. multipleOf: 0.0001.
     * @return float
     */
    public function getPercentOff(): float { return $this->get('percent_off'); }
    public function hasPercentOff(): bool { return $this->has('percent_off'); }
    /** Optional recurrence for subscription payments: once applies to the first charged payment, repeating applies for period_count charged payments, and forever applies to every payment. One-time orders apply the promotion once. How often a promotion's discount repeats on a subscription: once, for a number of charged payments, or forever.
     * @return PromotionCreatedInstalledMerchantsEventDataObjectApplicationMethodPercentOffRecurrenceOnce|PromotionCreatedInstalledMerchantsEventDataObjectApplicationMethodPercentOffRecurrenceRepeating|PromotionCreatedInstalledMerchantsEventDataObjectApplicationMethodPercentOffRecurrenceForever|\stdClass|null
     */
    public function getRecurrence(): PromotionCreatedInstalledMerchantsEventDataObjectApplicationMethodPercentOffRecurrenceOnce|PromotionCreatedInstalledMerchantsEventDataObjectApplicationMethodPercentOffRecurrenceRepeating|PromotionCreatedInstalledMerchantsEventDataObjectApplicationMethodPercentOffRecurrenceForever|\stdClass|null { return $this->get('recurrence'); }
    public function hasRecurrence(): bool { return $this->has('recurrence'); }
    /** Selects the percent_off discount effect and its allowed fields. Value enum: "percent_off".
     * @return string
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
}
