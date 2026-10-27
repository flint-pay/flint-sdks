<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $allocation
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $amount_off_money
 * @property-read string $calculation_basis
 * @property-read array<array-key, MoneyValueInput|array<array-key, mixed>|\stdClass>|\stdClass $currency_options
 * @property-read PromotionRuleGroupRequestInput|array<array-key, mixed>|\stdClass $discounted_item_rules
 * @property-read PromotionRecurrenceInput|array<array-key, mixed>|\stdClass $recurrence
 * @property-read string $type
 * Presence-aware input; omitted fields throw when accessed. */
final class PromotionAmountOffMethodRequestInput extends Model {
    /** @param array{'allocation'?: string, 'amount_off_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'calculation_basis'?: string, 'currency_options'?: array<array-key, MoneyValueInput|array<array-key, mixed>|\stdClass>|\stdClass, 'discounted_item_rules'?: PromotionRuleGroupRequestInput|array<array-key, mixed>|\stdClass, 'recurrence'?: PromotionRecurrenceInput|array<array-key, mixed>|\stdClass, 'type': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PromotionAmountOffMethodRequestInput')); }
    /** Shape $ (Value): string. How the effect is applied across the matched items or charges. each applies the effect to every matched item independently: a fixed amount_off is charged per item (10 USD off 3 items discounts 30 USD, each capped at the item price), and a percent_off is taken from each item. across applies the effect once to the matched set as a whole: a fixed amount_off is the whole amount one time (10 USD off the group total, not prorated per item), and a percent_off is taken from the combined subtotal. For percent_off the two produce the same total and differ only in how the discount is attributed to individual line items; for amount_off they differ by the number of matched items, so set it deliberately. Defaults to each for line_item and service_charge promotions and across for order promotions. max_discounted_quantity requires each. Value enum: "each", "across".
     * @return string
     * @throws SdkError When allocation is omitted; use hasAllocation() or valueOrDefault().
     */
    public function getAllocation(): string { return $this->get('allocation'); }
    public function hasAllocation(): bool { return $this->has('allocation'); }
    /** Shape $ (Value): {@see MoneyValueInput}. Positive fixed discount in the primary currency. allocation determines whether it applies to each matched item or once across the matched set. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When amount_off_money is omitted; use hasAmountOffMoney() or valueOrDefault().
     */
    public function getAmountOffMoney(): mixed { return $this->get('amount_off_money'); }
    public function hasAmountOffMoney(): bool { return $this->has('amount_off_money'); }
    /** Shape $ (Value): string. Basis for merchandise promotion calculations. Omit for service_charge promotions because service-charge discounts are calculated from the targeted charges. Value enum: "subtotal_pre_tax", "subtotal_post_tax".
     * @return string
     * @throws SdkError When calculation_basis is omitted; use hasCalculationBasis() or valueOrDefault().
     */
    public function getCalculationBasis(): string { return $this->get('calculation_basis'); }
    public function hasCalculationBasis(): bool { return $this->has('calculation_basis'); }
    /** Shape $ (Value): Map of {@see MoneyValueInput}. Alternative positive fixed discounts, keyed by currency code. Each Money currency must match its key. Shape $.* (Value): {@see MoneyValueInput}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return array<array-key, MoneyValueInput|array<array-key, mixed>|\stdClass>|\stdClass
     * @throws SdkError When currency_options is omitted; use hasCurrencyOptions() or valueOrDefault().
     */
    public function getCurrencyOptions(): array|object { return $this->get('currency_options'); }
    public function hasCurrencyOptions(): bool { return $this->has('currency_options'); }
    /** Shape $ (Value): {@see PromotionRuleGroupRequestInput}. Which line items receive the discount. Required for service_charge promotions, and for line_item promotions whose eligibility_rules include any non-line-item condition (for example order.subtotal or a customer condition). It is optional only when eligibility_rules consist entirely of line_item.* conditions (plus matched_items.subtotal), in which case the matched items are used as the target. Omitting it otherwise returns DISCOUNTED_ITEM_RULES_REQUIRED. A rule group is an object with exactly one nonempty all (AND) or any (OR) array of rules or nested groups. Arrays, empty groups, and a rules key are invalid. Omit the field for no rules, or send null where the field is clearable. Responses list rules before nested groups. Under any, a nested group containing only one rule reads back as that rule. Under all, nested groups keep their boundaries to preserve matched_items.subtotal scope. These deterministic normalizations stabilize after one round trip. matched_items.subtotal sums the line items matched by the line_item.* rules in the same all group, including its nested groups.
     * @return PromotionRuleGroupRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When discounted_item_rules is omitted; use hasDiscountedItemRules() or valueOrDefault().
     */
    public function getDiscountedItemRules(): mixed { return $this->get('discounted_item_rules'); }
    public function hasDiscountedItemRules(): bool { return $this->has('discounted_item_rules'); }
    /** Shape $ (Value): {@see PromotionRecurrenceInput}. Optional recurrence for subscription payments: once applies to the first charged payment, repeating applies for period_count charged payments, and forever applies to every payment. One-time orders apply the promotion once. How often a promotion's discount repeats on a subscription: once, for a number of charged payments, or forever.
     * @return PromotionRecurrenceInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When recurrence is omitted; use hasRecurrence() or valueOrDefault().
     */
    public function getRecurrence(): mixed { return $this->get('recurrence'); }
    public function hasRecurrence(): bool { return $this->has('recurrence'); }
    /** Shape $ (Value): string. Selects the amount_off discount effect and its allowed fields. Value enum: "amount_off".
     * @return string
     * @throws SdkError When type is omitted; use hasType() or valueOrDefault().
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
}
