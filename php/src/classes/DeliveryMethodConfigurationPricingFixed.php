<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?DeliveryMethodConfigurationPricingFixedCalculated $calculated
 * @property-read ?DeliveryMethodConfigurationPricingFixedCallback $callback
 * @property-read ?DeliveryMethodConfigurationPricingFixedCallerSupplied $caller_supplied
 * @property-read DeliveryMethodConfigurationPricingFixedFixed $fixed
 * @property-read ?DeliveryMethodConfigurationPricingFixedRateTable $rate_table
 * @property-read DeliveryMethodConfigurationPricingFixedTieredChoiceGroupTotalWeight|DeliveryMethodConfigurationPricingFixedTieredChoiceGroupFulfillmentQuantity|DeliveryMethodConfigurationPricingFixedTieredChoiceGroupMerchandiseSubtotalBeforeDiscounts|DeliveryMethodConfigurationPricingFixedTieredChoiceGroupMerchandiseSubtotalAfterLineItemDiscounts|DeliveryMethodConfigurationPricingFixedTieredOrderMerchandiseSubtotalBeforeDiscounts|DeliveryMethodConfigurationPricingFixedTieredOrderMerchandiseSubtotalAfterLineItemDiscounts|\stdClass|null $tiered
 * @property-read string $type
 * Presence-aware response; omitted optional fields return null. */
final class DeliveryMethodConfigurationPricingFixed extends Model {
    /** @param array{'calculated'?: mixed, 'callback'?: mixed, 'caller_supplied'?: mixed, 'fixed': mixed, 'rate_table'?: mixed, 'tiered'?: mixed, 'type': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryMethodConfigurationPricingFixed')); }
    /** Delivery pricing calculated from a base fee, distance, weight, and per-item handling, with minimum and maximum fees, by currency.
     * @return ?DeliveryMethodConfigurationPricingFixedCalculated
     */
    public function getCalculated(): ?DeliveryMethodConfigurationPricingFixedCalculated { return $this->get('calculated'); }
    public function hasCalculated(): bool { return $this->has('calculated'); }
    /** Delivery pricing that comes from outside Flint, from a delivery rate callback or the caller, bounded by minimum and maximum fees by currency.
     * @return ?DeliveryMethodConfigurationPricingFixedCallback
     */
    public function getCallback(): ?DeliveryMethodConfigurationPricingFixedCallback { return $this->get('callback'); }
    public function hasCallback(): bool { return $this->has('callback'); }
    /** Delivery pricing that comes from outside Flint, from a delivery rate callback or the caller, bounded by minimum and maximum fees by currency.
     * @return ?DeliveryMethodConfigurationPricingFixedCallerSupplied
     */
    public function getCallerSupplied(): ?DeliveryMethodConfigurationPricingFixedCallerSupplied { return $this->get('caller_supplied'); }
    public function hasCallerSupplied(): bool { return $this->has('caller_supplied'); }
    /** A fixed delivery price, by currency.
     * @return DeliveryMethodConfigurationPricingFixedFixed
     */
    public function getFixed(): DeliveryMethodConfigurationPricingFixedFixed { return $this->get('fixed'); }
    public function hasFixed(): bool { return $this->has('fixed'); }
    /** Pricing strategy that charges the price of the first matching rate in a list of prioritized rates. `unmatched_behavior` says what happens when none match.
     * @return ?DeliveryMethodConfigurationPricingFixedRateTable
     */
    public function getRateTable(): ?DeliveryMethodConfigurationPricingFixedRateTable { return $this->get('rate_table'); }
    public function hasRateTable(): bool { return $this->has('rate_table'); }
    /** Pricing strategy that charges by band. The `basis` value, such as total weight or subtotal, selects a band, and `unit` applies to weight bases. bands (Required): Array of {@see DeliveryPricingTierBand}. bands[] (Value): {@see DeliveryPricingTierBand}. One band of a tiered pricing strategy, covering values of the strategy's `basis` from `from` to `to`, with a price per currency. basis (Required): string. Quantity measured by the tier bands. Money subtotal bases use minor currency units. Value enum: "choice_group.total_weight", "choice_group.fulfillment_quantity", "choice_group.merchandise_subtotal_before_discounts", "choice_group.merchandise_subtotal_after_line_item_discounts", "order.merchandise_subtotal_before_discounts", "order.merchandise_subtotal_after_line_item_discounts", "caller.tier_key". unit (Optional): string. Required only for choice_group.total_weight and forbidden for every other basis. Value enum: "gram", "kilogram", "ounce", "pound". oneOf[1] (Value): {@see DeliveryTieredPricingStrategyWeight}. The `choice_group.total_weight` variant of `DeliveryTieredPricingStrategy`. oneOf[2] (Value): {@see DeliveryTieredPricingStrategyQuantityOrMoney}. The `choice_group.fulfillment_quantity` variant of `DeliveryTieredPricingStrategy`. The `choice_group.merchandise_subtotal_after_line_item_discounts` variant of `DeliveryTieredPricingStrategy`. The `choice_group.merchandise_subtotal_before_discounts` variant of `DeliveryTieredPricingStrategy`. The `order.merchandise_subtotal_after_line_item_discounts` variant of `DeliveryTieredPricingStrategy`. The `order.merchandise_subtotal_before_discounts` variant of `DeliveryTieredPricingStrategy`.
     * @return DeliveryMethodConfigurationPricingFixedTieredChoiceGroupTotalWeight|DeliveryMethodConfigurationPricingFixedTieredChoiceGroupFulfillmentQuantity|DeliveryMethodConfigurationPricingFixedTieredChoiceGroupMerchandiseSubtotalBeforeDiscounts|DeliveryMethodConfigurationPricingFixedTieredChoiceGroupMerchandiseSubtotalAfterLineItemDiscounts|DeliveryMethodConfigurationPricingFixedTieredOrderMerchandiseSubtotalBeforeDiscounts|DeliveryMethodConfigurationPricingFixedTieredOrderMerchandiseSubtotalAfterLineItemDiscounts|\stdClass|null
     */
    public function getTiered(): DeliveryMethodConfigurationPricingFixedTieredChoiceGroupTotalWeight|DeliveryMethodConfigurationPricingFixedTieredChoiceGroupFulfillmentQuantity|DeliveryMethodConfigurationPricingFixedTieredChoiceGroupMerchandiseSubtotalBeforeDiscounts|DeliveryMethodConfigurationPricingFixedTieredChoiceGroupMerchandiseSubtotalAfterLineItemDiscounts|DeliveryMethodConfigurationPricingFixedTieredOrderMerchandiseSubtotalBeforeDiscounts|DeliveryMethodConfigurationPricingFixedTieredOrderMerchandiseSubtotalAfterLineItemDiscounts|\stdClass|null { return $this->get('tiered'); }
    public function hasTiered(): bool { return $this->has('tiered'); }
    /** Value enum: "fixed".
     * @return string
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
}
