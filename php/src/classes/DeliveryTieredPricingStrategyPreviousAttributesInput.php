<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<DeliveryPricingTierBandPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null $bands
 * @property-read string|null $basis
 * @property-read string|null $unit
 * Presence-aware input; omitted fields throw when accessed. */
final class DeliveryTieredPricingStrategyPreviousAttributesInput extends Model {
    /** @param DeliveryTieredPricingStrategyWeightPreviousAttributesInput|array<array-key, mixed>|\stdClass|DeliveryTieredPricingStrategyQuantityOrMoneyPreviousAttributesInput|array<array-key, mixed>|\stdClass $values */
    public function __construct(mixed $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryTieredPricingStrategyPreviousAttributesInput')); }
    /** One to 25 contiguous bands in ascending order. The final band has no upper bound. anyOf[1] (Value): Array of {@see DeliveryPricingTierBandPreviousAttributesInput}. One to 25 contiguous bands in ascending order. The final band has no upper bound. minItems: 1. maxItems: 25. anyOf[1][] (Value): {@see DeliveryPricingTierBandPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return list<DeliveryPricingTierBandPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null
     * @throws SdkError When bands is omitted; use hasBands() or valueOrDefault().
     */
    public function getBands(): mixed { return $this->get('bands'); }
    public function hasBands(): bool { return $this->has('bands'); }
    /** Value matched against the numeric tier bands. Money subtotal bases use minor currency units; caller.tier_key uses the nonnegative tier_key supplied when creating the checkout delivery quote. Value enum: "choice_group.total_weight", "choice_group.fulfillment_quantity", "choice_group.merchandise_subtotal_before_discounts", "choice_group.merchandise_subtotal_after_line_item_discounts", "order.merchandise_subtotal_before_discounts", "order.merchandise_subtotal_after_line_item_discounts", "caller.tier_key". anyOf[1] (Value): string. Value matched against the numeric tier bands. Money subtotal bases use minor currency units; caller.tier_key uses the nonnegative tier_key supplied when creating the checkout delivery quote. Value enum: "choice_group.total_weight", "choice_group.fulfillment_quantity", "choice_group.merchandise_subtotal_before_discounts", "choice_group.merchandise_subtotal_after_line_item_discounts", "order.merchandise_subtotal_before_discounts", "order.merchandise_subtotal_after_line_item_discounts", "caller.tier_key". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When basis is omitted; use hasBasis() or valueOrDefault().
     */
    public function getBasis(): mixed { return $this->get('basis'); }
    public function hasBasis(): bool { return $this->has('basis'); }
    /** Required only for choice_group.total_weight and forbidden for every other basis. Value enum: "gram", "kilogram", "ounce", "pound". anyOf[1] (Value): string. Required only for choice_group.total_weight and forbidden for every other basis. Value enum: "gram", "kilogram", "ounce", "pound". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When unit is omitted; use hasUnit() or valueOrDefault().
     */
    public function getUnit(): mixed { return $this->get('unit'); }
    public function hasUnit(): bool { return $this->has('unit'); }
}
