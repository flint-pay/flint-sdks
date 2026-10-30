<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<DeliveryMethodConfigurationPricingTieredTieredChoiceGroupMerchandiseSubtotalBeforeDiscountsBandsItem> $bands
 * @property-read string $basis
 * @property-read ?string $unit
 * Presence-aware response; omitted optional fields return null. */
final class DeliveryMethodConfigurationPricingTieredTieredChoiceGroupMerchandiseSubtotalBeforeDiscounts extends Model {
    /** @param array{'bands': list<mixed>, 'basis': string, 'unit'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryMethodConfigurationPricingTieredTieredChoiceGroupMerchandiseSubtotalBeforeDiscounts')); }
    /**  [] (Value): {@see DeliveryMethodConfigurationPricingTieredTieredChoiceGroupMerchandiseSubtotalBeforeDiscountsBandsItem}. One band of a tiered pricing strategy, covering values of the strategy's `basis` from `from` to `to`, with a price per currency.
     * @return list<DeliveryMethodConfigurationPricingTieredTieredChoiceGroupMerchandiseSubtotalBeforeDiscountsBandsItem>
     */
    public function getBands(): array { return $this->get('bands'); }
    public function hasBands(): bool { return $this->has('bands'); }
    /** Quantity measured by the tier bands. Money subtotal bases use minor currency units. Value enum: "choice_group.fulfillment_quantity", "choice_group.merchandise_subtotal_before_discounts", "choice_group.merchandise_subtotal_after_line_item_discounts", "order.merchandise_subtotal_before_discounts", "order.merchandise_subtotal_after_line_item_discounts".
     * @return string
     */
    public function getBasis(): string { return $this->get('basis'); }
    public function hasBasis(): bool { return $this->has('basis'); }
    /** Required only for choice_group.total_weight and forbidden for every other basis. Value enum: "gram", "kilogram", "ounce", "pound".
     * @return ?string
     */
    public function getUnit(): ?string { return $this->get('unit'); }
    public function hasUnit(): bool { return $this->has('unit'); }
}
