<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?DeliveryMethodConfigurationPricingCallbackCalculated $calculated
 * @property-read DeliveryMethodConfigurationPricingCallbackCallback $callback
 * @property-read ?DeliveryMethodConfigurationPricingCallbackCallerSupplied $caller_supplied
 * @property-read ?DeliveryMethodConfigurationPricingCallbackFixed $fixed
 * @property-read ?DeliveryMethodConfigurationPricingCallbackRateTable $rate_table
 * @property-read DeliveryMethodConfigurationPricingCallbackTieredChoiceGroupTotalWeight|DeliveryMethodConfigurationPricingCallbackTieredChoiceGroupFulfillmentQuantity|DeliveryMethodConfigurationPricingCallbackTieredChoiceGroupMerchandiseSubtotalBeforeDiscounts|DeliveryMethodConfigurationPricingCallbackTieredChoiceGroupMerchandiseSubtotalAfterLineItemDiscounts|DeliveryMethodConfigurationPricingCallbackTieredOrderMerchandiseSubtotalBeforeDiscounts|DeliveryMethodConfigurationPricingCallbackTieredOrderMerchandiseSubtotalAfterLineItemDiscounts|\stdClass|null $tiered
 * @property-read string $type
 * Presence-aware response; omitted optional fields return null. */
final class DeliveryMethodConfigurationPricingCallback extends Model {
    /** @param array{'calculated'?: mixed, 'callback': mixed, 'caller_supplied'?: mixed, 'fixed'?: mixed, 'rate_table'?: mixed, 'tiered'?: mixed, 'type': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryMethodConfigurationPricingCallback')); }
    /** Shape $ (Value): {@see DeliveryMethodConfigurationPricingCallbackCalculated}. Delivery pricing calculated from a base fee, distance, weight, and per-item handling, with minimum and maximum fees, by currency.
     * @return ?DeliveryMethodConfigurationPricingCallbackCalculated
     */
    public function getCalculated(): ?DeliveryMethodConfigurationPricingCallbackCalculated { return $this->get('calculated'); }
    public function hasCalculated(): bool { return $this->has('calculated'); }
    /** Shape $ (Value): {@see DeliveryMethodConfigurationPricingCallbackCallback}. Delivery pricing that comes from outside Flint, from a delivery rate callback or the caller, bounded by minimum and maximum fees by currency.
     * @return DeliveryMethodConfigurationPricingCallbackCallback
     */
    public function getCallback(): DeliveryMethodConfigurationPricingCallbackCallback { return $this->get('callback'); }
    public function hasCallback(): bool { return $this->has('callback'); }
    /** Shape $ (Value): {@see DeliveryMethodConfigurationPricingCallbackCallerSupplied}. Delivery pricing that comes from outside Flint, from a delivery rate callback or the caller, bounded by minimum and maximum fees by currency.
     * @return ?DeliveryMethodConfigurationPricingCallbackCallerSupplied
     */
    public function getCallerSupplied(): ?DeliveryMethodConfigurationPricingCallbackCallerSupplied { return $this->get('caller_supplied'); }
    public function hasCallerSupplied(): bool { return $this->has('caller_supplied'); }
    /** Shape $ (Value): {@see DeliveryMethodConfigurationPricingCallbackFixed}. A fixed delivery price, by currency.
     * @return ?DeliveryMethodConfigurationPricingCallbackFixed
     */
    public function getFixed(): ?DeliveryMethodConfigurationPricingCallbackFixed { return $this->get('fixed'); }
    public function hasFixed(): bool { return $this->has('fixed'); }
    /** Shape $ (Value): {@see DeliveryMethodConfigurationPricingCallbackRateTable}. Pricing strategy that charges the price of the first matching rate in a list of prioritized rates. `unmatched_behavior` says what happens when none match.
     * @return ?DeliveryMethodConfigurationPricingCallbackRateTable
     */
    public function getRateTable(): ?DeliveryMethodConfigurationPricingCallbackRateTable { return $this->get('rate_table'); }
    public function hasRateTable(): bool { return $this->has('rate_table'); }
    /** Shape $ (Value): {@see DeliveryTieredPricingStrategy}. Pricing strategy that charges by band. The `basis` value, such as total weight or subtotal, selects a band, and `unit` applies to weight bases. Shape $.bands (Required): Array of {@see DeliveryPricingTierBand}. Shape $.bands[] (Value): {@see DeliveryPricingTierBand}. One band of a tiered pricing strategy, covering values of the strategy's `basis` from `from` to `to`, with a price per currency. Shape $.basis (Required): string. Quantity measured by the tier bands. Money subtotal bases use minor currency units. Value enum: "choice_group.total_weight", "choice_group.fulfillment_quantity", "choice_group.merchandise_subtotal_before_discounts", "choice_group.merchandise_subtotal_after_line_item_discounts", "order.merchandise_subtotal_before_discounts", "order.merchandise_subtotal_after_line_item_discounts", "caller.tier_key". Shape $.unit (Optional): string. Required only for choice_group.total_weight and forbidden for every other basis. Value enum: "gram", "kilogram", "ounce", "pound". Shape $.oneOf[1] (Value): {@see DeliveryTieredPricingStrategyWeight}. The `choice_group.total_weight` variant of `DeliveryTieredPricingStrategy`. Shape $.oneOf[2] (Value): {@see DeliveryTieredPricingStrategyQuantityOrMoney}. The `choice_group.fulfillment_quantity` variant of `DeliveryTieredPricingStrategy`. The `choice_group.merchandise_subtotal_after_line_item_discounts` variant of `DeliveryTieredPricingStrategy`. The `choice_group.merchandise_subtotal_before_discounts` variant of `DeliveryTieredPricingStrategy`. The `order.merchandise_subtotal_after_line_item_discounts` variant of `DeliveryTieredPricingStrategy`. The `order.merchandise_subtotal_before_discounts` variant of `DeliveryTieredPricingStrategy`.
     * @return DeliveryMethodConfigurationPricingCallbackTieredChoiceGroupTotalWeight|DeliveryMethodConfigurationPricingCallbackTieredChoiceGroupFulfillmentQuantity|DeliveryMethodConfigurationPricingCallbackTieredChoiceGroupMerchandiseSubtotalBeforeDiscounts|DeliveryMethodConfigurationPricingCallbackTieredChoiceGroupMerchandiseSubtotalAfterLineItemDiscounts|DeliveryMethodConfigurationPricingCallbackTieredOrderMerchandiseSubtotalBeforeDiscounts|DeliveryMethodConfigurationPricingCallbackTieredOrderMerchandiseSubtotalAfterLineItemDiscounts|\stdClass|null
     */
    public function getTiered(): DeliveryMethodConfigurationPricingCallbackTieredChoiceGroupTotalWeight|DeliveryMethodConfigurationPricingCallbackTieredChoiceGroupFulfillmentQuantity|DeliveryMethodConfigurationPricingCallbackTieredChoiceGroupMerchandiseSubtotalBeforeDiscounts|DeliveryMethodConfigurationPricingCallbackTieredChoiceGroupMerchandiseSubtotalAfterLineItemDiscounts|DeliveryMethodConfigurationPricingCallbackTieredOrderMerchandiseSubtotalBeforeDiscounts|DeliveryMethodConfigurationPricingCallbackTieredOrderMerchandiseSubtotalAfterLineItemDiscounts|\stdClass|null { return $this->get('tiered'); }
    public function hasTiered(): bool { return $this->has('tiered'); }
    /** Shape $ (Value): string.  Value enum: "callback".
     * @return string
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
}
