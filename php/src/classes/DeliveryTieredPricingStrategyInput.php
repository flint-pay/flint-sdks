<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<DeliveryPricingTierBandInput|array<array-key, mixed>|\stdClass> $bands
 * @property-read string $basis
 * @property-read string $unit
 * Presence-aware input; omitted fields throw when accessed. */
final class DeliveryTieredPricingStrategyInput extends Model {
    /** @param array{'bands': list<DeliveryPricingTierBandInput|array<array-key, mixed>|\stdClass>, 'basis': string, 'unit': string}|object|array{'bands': list<DeliveryPricingTierBandInput|array<array-key, mixed>|\stdClass>, 'basis': string, 'unit'?: string}|object $values */
    public function __construct(mixed $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryTieredPricingStrategyInput')); }
    /**  [] (Value): {@see DeliveryPricingTierBandInput}. One band of a tiered pricing strategy, covering values of the strategy's `basis` from `from` to `to`, with a price per currency.
     * @return list<DeliveryPricingTierBandInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When bands is omitted; use hasBands() or valueOrDefault().
     */
    public function getBands(): array { return $this->get('bands'); }
    public function hasBands(): bool { return $this->has('bands'); }
    /** Quantity measured by the tier bands. Money subtotal bases use minor currency units. Value enum: "choice_group.total_weight", "choice_group.fulfillment_quantity", "choice_group.merchandise_subtotal_before_discounts", "choice_group.merchandise_subtotal_after_line_item_discounts", "order.merchandise_subtotal_before_discounts", "order.merchandise_subtotal_after_line_item_discounts", "caller.tier_key".
     * @return string
     * @throws SdkError When basis is omitted; use hasBasis() or valueOrDefault().
     */
    public function getBasis(): string { return $this->get('basis'); }
    public function hasBasis(): bool { return $this->has('basis'); }
    /** Required only for choice_group.total_weight and forbidden for every other basis. Value enum: "gram", "kilogram", "ounce", "pound".
     * @return string
     * @throws SdkError When unit is omitted; use hasUnit() or valueOrDefault().
     */
    public function getUnit(): string { return $this->get('unit'); }
    public function hasUnit(): bool { return $this->has('unit'); }
}
