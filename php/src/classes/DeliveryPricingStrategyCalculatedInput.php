<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read DeliveryCalculatedPricingStrategyInput|array<array-key, mixed>|\stdClass $calculated
 * @property-read DeliveryExternalPricingStrategyInput|array<array-key, mixed>|\stdClass $callback
 * @property-read DeliveryExternalPricingStrategyInput|array<array-key, mixed>|\stdClass $caller_supplied
 * @property-read DeliveryFixedPricingStrategyInput|array<array-key, mixed>|\stdClass $fixed
 * @property-read DeliveryRateTablePricingStrategyInput|array<array-key, mixed>|\stdClass $rate_table
 * @property-read DeliveryTieredPricingStrategyInput|array<array-key, mixed>|\stdClass $tiered
 * @property-read string $type
 * Presence-aware input; omitted fields throw when accessed. */
final class DeliveryPricingStrategyCalculatedInput extends Model {
    /** @param array{'calculated': DeliveryCalculatedPricingStrategyInput|array<array-key, mixed>|\stdClass, 'callback'?: DeliveryExternalPricingStrategyInput|array<array-key, mixed>|\stdClass, 'caller_supplied'?: DeliveryExternalPricingStrategyInput|array<array-key, mixed>|\stdClass, 'fixed'?: DeliveryFixedPricingStrategyInput|array<array-key, mixed>|\stdClass, 'rate_table'?: DeliveryRateTablePricingStrategyInput|array<array-key, mixed>|\stdClass, 'tiered'?: DeliveryTieredPricingStrategyInput|array<array-key, mixed>|\stdClass, 'type': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryPricingStrategyCalculatedInput')); }
    /** Delivery pricing calculated from a base fee, distance, weight, and per-item handling, with minimum and maximum fees, by currency.
     * @return DeliveryCalculatedPricingStrategyInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When calculated is omitted; use hasCalculated() or valueOrDefault().
     */
    public function getCalculated(): mixed { return $this->get('calculated'); }
    public function hasCalculated(): bool { return $this->has('calculated'); }
    /** Delivery pricing that comes from outside Flint, from a delivery rate callback or the caller, bounded by minimum and maximum fees by currency.
     * @return DeliveryExternalPricingStrategyInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When callback is omitted; use hasCallback() or valueOrDefault().
     */
    public function getCallback(): mixed { return $this->get('callback'); }
    public function hasCallback(): bool { return $this->has('callback'); }
    /** Delivery pricing that comes from outside Flint, from a delivery rate callback or the caller, bounded by minimum and maximum fees by currency.
     * @return DeliveryExternalPricingStrategyInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When caller_supplied is omitted; use hasCallerSupplied() or valueOrDefault().
     */
    public function getCallerSupplied(): mixed { return $this->get('caller_supplied'); }
    public function hasCallerSupplied(): bool { return $this->has('caller_supplied'); }
    /** A fixed delivery price, by currency.
     * @return DeliveryFixedPricingStrategyInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When fixed is omitted; use hasFixed() or valueOrDefault().
     */
    public function getFixed(): mixed { return $this->get('fixed'); }
    public function hasFixed(): bool { return $this->has('fixed'); }
    /** Pricing strategy that charges the price of the first matching rate in a list of prioritized rates. `unmatched_behavior` says what happens when none match.
     * @return DeliveryRateTablePricingStrategyInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When rate_table is omitted; use hasRateTable() or valueOrDefault().
     */
    public function getRateTable(): mixed { return $this->get('rate_table'); }
    public function hasRateTable(): bool { return $this->has('rate_table'); }
    /** Pricing strategy that charges by band. The `basis` value, such as total weight or subtotal, selects a band, and `unit` applies to weight bases.
     * @return DeliveryTieredPricingStrategyInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When tiered is omitted; use hasTiered() or valueOrDefault().
     */
    public function getTiered(): mixed { return $this->get('tiered'); }
    public function hasTiered(): bool { return $this->has('tiered'); }
    /** Value enum: "calculated".
     * @return string
     * @throws SdkError When type is omitted; use hasType() or valueOrDefault().
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
}
