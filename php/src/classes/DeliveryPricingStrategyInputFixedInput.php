<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read DeliveryCalculatedPricingStrategyRequestInput|array<array-key, mixed>|\stdClass $calculated
 * @property-read DeliveryCallbackPricingStrategyRequestInput|array<array-key, mixed>|\stdClass $callback
 * @property-read DeliveryCallerSuppliedPricingStrategyRequestInput|array<array-key, mixed>|\stdClass $caller_supplied
 * @property-read DeliveryFixedPricingStrategyRequestInput|array<array-key, mixed>|\stdClass $fixed
 * @property-read DeliveryRateTablePricingStrategyRequestInput|array<array-key, mixed>|\stdClass $rate_table
 * @property-read DeliveryTieredPricingStrategyRequestInput|array<array-key, mixed>|\stdClass $tiered
 * @property-read string $type
 * Presence-aware input; omitted fields throw when accessed. */
final class DeliveryPricingStrategyInputFixedInput extends Model {
    /** @param array{'calculated'?: DeliveryCalculatedPricingStrategyRequestInput|array<array-key, mixed>|\stdClass, 'callback'?: DeliveryCallbackPricingStrategyRequestInput|array<array-key, mixed>|\stdClass, 'caller_supplied'?: DeliveryCallerSuppliedPricingStrategyRequestInput|array<array-key, mixed>|\stdClass, 'fixed': DeliveryFixedPricingStrategyRequestInput|array<array-key, mixed>|\stdClass, 'rate_table'?: DeliveryRateTablePricingStrategyRequestInput|array<array-key, mixed>|\stdClass, 'tiered'?: DeliveryTieredPricingStrategyRequestInput|array<array-key, mixed>|\stdClass, 'type': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryPricingStrategyInputFixedInput')); }
    /** Shape $ (Value): {@see DeliveryCalculatedPricingStrategyRequestInput}. Calculated delivery pricing you supply for a delivery method: base fee, distance and weight rates, per-item handling, and fee limits, by currency.
     * @return DeliveryCalculatedPricingStrategyRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When calculated is omitted; use hasCalculated() or valueOrDefault().
     */
    public function getCalculated(): mixed { return $this->get('calculated'); }
    public function hasCalculated(): bool { return $this->has('calculated'); }
    /** Shape $ (Value): {@see DeliveryCallbackPricingStrategyRequestInput}. Delivery pricing you supply that comes from a delivery rate callback (`delivery_rate_callback_id`), with minimum and maximum fees by currency.
     * @return DeliveryCallbackPricingStrategyRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When callback is omitted; use hasCallback() or valueOrDefault().
     */
    public function getCallback(): mixed { return $this->get('callback'); }
    public function hasCallback(): bool { return $this->has('callback'); }
    /** Shape $ (Value): {@see DeliveryCallerSuppliedPricingStrategyRequestInput}. Delivery pricing where you supply the rate when creating a delivery quote, bounded by minimum and maximum fees by currency.
     * @return DeliveryCallerSuppliedPricingStrategyRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When caller_supplied is omitted; use hasCallerSupplied() or valueOrDefault().
     */
    public function getCallerSupplied(): mixed { return $this->get('caller_supplied'); }
    public function hasCallerSupplied(): bool { return $this->has('caller_supplied'); }
    /** Shape $ (Value): {@see DeliveryFixedPricingStrategyRequestInput}. A fixed delivery price by currency, supplied for a delivery method.
     * @return DeliveryFixedPricingStrategyRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When fixed is omitted; use hasFixed() or valueOrDefault().
     */
    public function getFixed(): mixed { return $this->get('fixed'); }
    public function hasFixed(): bool { return $this->has('fixed'); }
    /** Shape $ (Value): {@see DeliveryRateTablePricingStrategyRequestInput}. Rate table pricing strategy you supply when updating a delivery method: a list of prioritized rates, each with a condition and prices.
     * @return DeliveryRateTablePricingStrategyRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When rate_table is omitted; use hasRateTable() or valueOrDefault().
     */
    public function getRateTable(): mixed { return $this->get('rate_table'); }
    public function hasRateTable(): bool { return $this->has('rate_table'); }
    /** Shape $ (Value): {@see DeliveryTieredPricingStrategyRequestInput}. Tiered pricing strategy you supply for a delivery method: a `basis`, a list of bands with prices, and a weight `unit` when the basis is total weight.
     * @return DeliveryTieredPricingStrategyRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When tiered is omitted; use hasTiered() or valueOrDefault().
     */
    public function getTiered(): mixed { return $this->get('tiered'); }
    public function hasTiered(): bool { return $this->has('tiered'); }
    /** Shape $ (Value): string.  Value enum: "fixed".
     * @return string
     * @throws SdkError When type is omitted; use hasType() or valueOrDefault().
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
}
