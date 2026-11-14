<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read array<array-key, int>|\stdClass $bases
 * @property-read string $currency
 * @property-read list<int> $leg_distance_meters
 * @property-read int $total_item_quantity
 * @property-read int $total_weight_grams
 * Presence-aware input; omitted fields throw when accessed. */
final class DeliveryRateEvaluationPricingInput extends Model {
    /** @param array{'bases': array<array-key, int>|\stdClass, 'currency': string, 'leg_distance_meters': list<int>, 'total_item_quantity': int, 'total_weight_grams'?: int}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryRateEvaluationPricingInput')); }
    /** Quantity and merchandise subtotals in minor units, keyed by the same base names as tiered pricing bases. * (Value): integer. Format: int64.
     * @return array<array-key, int>|\stdClass
     * @throws SdkError When bases is omitted; use hasBases() or valueOrDefault().
     */
    public function getBases(): array|object { return $this->get('bases'); }
    public function hasBases(): bool { return $this->has('bases'); }
    /** The checkout currency, equal to the request's currency. Uses ISO 4217 currency codes. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
     * @return string
     * @throws SdkError When currency is omitted; use hasCurrency() or valueOrDefault().
     */
    public function getCurrency(): string { return $this->get('currency'); }
    public function hasCurrency(): bool { return $this->has('currency'); }
    /** Straight-line distance in meters from each origin to the destination, in execution leg order. Empty when the address or an origin has no coordinates. [] (Value): integer. Format: int64.
     * @return list<int>
     * @throws SdkError When leg_distance_meters is omitted; use hasLegDistanceMeters() or valueOrDefault().
     */
    public function getLegDistanceMeters(): array { return $this->get('leg_distance_meters'); }
    public function hasLegDistanceMeters(): bool { return $this->has('leg_distance_meters'); }
    /** Total whole-number units in the choice group; fractional quantities are not supported. Format: int64. minimum: 0.
     * @return int
     * @throws SdkError When total_item_quantity is omitted; use hasTotalItemQuantity() or valueOrDefault().
     */
    public function getTotalItemQuantity(): int { return $this->get('total_item_quantity'); }
    public function hasTotalItemQuantity(): bool { return $this->has('total_item_quantity'); }
    /** Total weight in grams: each item's variant unit_weight times its quantity, or the unit_weight on a custom line. Omitted when any item in the group has no weight; 0 is a real weight. Format: int64. minimum: 0.
     * @return int
     * @throws SdkError When total_weight_grams is omitted; use hasTotalWeightGrams() or valueOrDefault().
     */
    public function getTotalWeightGrams(): int { return $this->get('total_weight_grams'); }
    public function hasTotalWeightGrams(): bool { return $this->has('total_weight_grams'); }
}
