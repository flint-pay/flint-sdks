<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?DeliveryMethodConfigurationPricingTieredCalculated $calculated
 * @property-read ?DeliveryMethodConfigurationPricingTieredCallback $callback
 * @property-read ?DeliveryMethodConfigurationPricingTieredCallerSupplied $caller_supplied
 * @property-read ?DeliveryMethodConfigurationPricingTieredFixed $fixed
 * @property-read ?DeliveryMethodConfigurationPricingTieredRateTable $rate_table
 * @property-read DeliveryMethodConfigurationPricingTieredTieredChoiceGroupTotalWeight|DeliveryMethodConfigurationPricingTieredTieredChoiceGroupFulfillmentQuantity|DeliveryMethodConfigurationPricingTieredTieredChoiceGroupMerchandiseSubtotalBeforeDiscounts|DeliveryMethodConfigurationPricingTieredTieredChoiceGroupMerchandiseSubtotalAfterLineItemDiscounts|DeliveryMethodConfigurationPricingTieredTieredOrderMerchandiseSubtotalBeforeDiscounts|DeliveryMethodConfigurationPricingTieredTieredOrderMerchandiseSubtotalAfterLineItemDiscounts|DeliveryMethodConfigurationPricingTieredTieredCallerTierKey|\stdClass $tiered
 * @property-read string $type
 * Presence-aware response; omitted optional fields return null. */
final class DeliveryMethodConfigurationPricingTiered extends Model {
    /** @param array{'calculated'?: mixed, 'callback'?: mixed, 'caller_supplied'?: mixed, 'fixed'?: mixed, 'rate_table'?: mixed, 'tiered': mixed, 'type': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryMethodConfigurationPricingTiered')); }
    /** Calculated pricing settings. Set only when `type` is `calculated`. Delivery pricing calculated from a base fee, distance, weight, and per-item handling, with minimum and maximum fees, by currency.
     * @return ?DeliveryMethodConfigurationPricingTieredCalculated
     */
    public function getCalculated(): ?DeliveryMethodConfigurationPricingTieredCalculated { return $this->get('calculated'); }
    public function hasCalculated(): bool { return $this->has('calculated'); }
    /** Rate callback pricing settings. Set only when `type` is `callback`. Delivery pricing that comes from outside Flint, from a delivery rate callback or the caller, bounded by minimum and maximum fees by currency.
     * @return ?DeliveryMethodConfigurationPricingTieredCallback
     */
    public function getCallback(): ?DeliveryMethodConfigurationPricingTieredCallback { return $this->get('callback'); }
    public function hasCallback(): bool { return $this->has('callback'); }
    /** Caller-supplied pricing settings. Set only when `type` is `caller_supplied`. Delivery pricing that comes from outside Flint, from a delivery rate callback or the caller, bounded by minimum and maximum fees by currency.
     * @return ?DeliveryMethodConfigurationPricingTieredCallerSupplied
     */
    public function getCallerSupplied(): ?DeliveryMethodConfigurationPricingTieredCallerSupplied { return $this->get('caller_supplied'); }
    public function hasCallerSupplied(): bool { return $this->has('caller_supplied'); }
    /** Fixed pricing settings. Set only when `type` is `fixed`. A fixed delivery price, by currency.
     * @return ?DeliveryMethodConfigurationPricingTieredFixed
     */
    public function getFixed(): ?DeliveryMethodConfigurationPricingTieredFixed { return $this->get('fixed'); }
    public function hasFixed(): bool { return $this->has('fixed'); }
    /** Rate table pricing settings. Set only when `type` is `rate_table`. Pricing strategy that charges the price of the first matching rate in a list of prioritized rates. `unmatched_behavior` says what happens when none match.
     * @return ?DeliveryMethodConfigurationPricingTieredRateTable
     */
    public function getRateTable(): ?DeliveryMethodConfigurationPricingTieredRateTable { return $this->get('rate_table'); }
    public function hasRateTable(): bool { return $this->has('rate_table'); }
    /** Tiered pricing settings. Set only when `type` is `tiered`. Pricing strategy that charges by band. The `basis` value, such as total weight or subtotal, selects a band, and `unit` applies to weight bases. bands (Required): Array of {@see DeliveryPricingTierBand}. One to 25 contiguous bands in ascending order. The final band has no upper bound. minItems: 1. maxItems: 25. bands[] (Value): {@see DeliveryPricingTierBand}. One band of a tiered pricing strategy, covering values of the strategy's `basis` from `from` to `to`, with a price per currency. basis (Required): string. Value matched against the numeric tier bands. Money subtotal bases use minor currency units; caller.tier_key uses the nonnegative tier_key supplied when creating the checkout delivery quote. Value enum: "choice_group.total_weight", "choice_group.fulfillment_quantity", "choice_group.merchandise_subtotal_before_discounts", "choice_group.merchandise_subtotal_after_line_item_discounts", "order.merchandise_subtotal_before_discounts", "order.merchandise_subtotal_after_line_item_discounts", "caller.tier_key". unit (Optional): string. Required only for choice_group.total_weight and forbidden for every other basis. Value enum: "gram", "kilogram", "ounce", "pound". oneOf[1] (Value): {@see DeliveryTieredPricingStrategyWeight}. The `choice_group.total_weight` variant of `DeliveryTieredPricingStrategy`. oneOf[2] (Value): {@see DeliveryTieredPricingStrategyQuantityOrMoney}. The `caller.tier_key` variant of `DeliveryTieredPricingStrategy`. The `choice_group.fulfillment_quantity` variant of `DeliveryTieredPricingStrategy`. The `choice_group.merchandise_subtotal_after_line_item_discounts` variant of `DeliveryTieredPricingStrategy`. The `choice_group.merchandise_subtotal_before_discounts` variant of `DeliveryTieredPricingStrategy`. The `order.merchandise_subtotal_after_line_item_discounts` variant of `DeliveryTieredPricingStrategy`. The `order.merchandise_subtotal_before_discounts` variant of `DeliveryTieredPricingStrategy`.
     * @return DeliveryMethodConfigurationPricingTieredTieredChoiceGroupTotalWeight|DeliveryMethodConfigurationPricingTieredTieredChoiceGroupFulfillmentQuantity|DeliveryMethodConfigurationPricingTieredTieredChoiceGroupMerchandiseSubtotalBeforeDiscounts|DeliveryMethodConfigurationPricingTieredTieredChoiceGroupMerchandiseSubtotalAfterLineItemDiscounts|DeliveryMethodConfigurationPricingTieredTieredOrderMerchandiseSubtotalBeforeDiscounts|DeliveryMethodConfigurationPricingTieredTieredOrderMerchandiseSubtotalAfterLineItemDiscounts|DeliveryMethodConfigurationPricingTieredTieredCallerTierKey|\stdClass
     */
    public function getTiered(): DeliveryMethodConfigurationPricingTieredTieredChoiceGroupTotalWeight|DeliveryMethodConfigurationPricingTieredTieredChoiceGroupFulfillmentQuantity|DeliveryMethodConfigurationPricingTieredTieredChoiceGroupMerchandiseSubtotalBeforeDiscounts|DeliveryMethodConfigurationPricingTieredTieredChoiceGroupMerchandiseSubtotalAfterLineItemDiscounts|DeliveryMethodConfigurationPricingTieredTieredOrderMerchandiseSubtotalBeforeDiscounts|DeliveryMethodConfigurationPricingTieredTieredOrderMerchandiseSubtotalAfterLineItemDiscounts|DeliveryMethodConfigurationPricingTieredTieredCallerTierKey|\stdClass { return $this->get('tiered'); }
    public function hasTiered(): bool { return $this->has('tiered'); }
    /** How the method sets its price. Set the property named by this value. Value enum: "tiered".
     * @return string
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
}
