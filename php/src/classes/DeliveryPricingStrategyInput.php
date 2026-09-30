<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read DeliveryCalculatedPricingStrategyRequestInput|array<array-key, mixed>|\stdClass $calculated
 * @property-read DeliveryExternalPricingStrategyInput|array<array-key, mixed>|\stdClass $callback
 * @property-read DeliveryExternalPricingStrategyInput|array<array-key, mixed>|\stdClass $caller_supplied
 * @property-read DeliveryFixedPricingStrategyRequestInput|array<array-key, mixed>|\stdClass $fixed
 * @property-read DeliveryRateTablePricingStrategyInput|array<array-key, mixed>|\stdClass $rate_table
 * @property-read DeliveryTieredPricingStrategyRequestInput|array<array-key, mixed>|\stdClass $tiered
 * @property-read string $type
 * Presence-aware input; omitted fields throw when accessed. */
final class DeliveryPricingStrategyInput extends Model {
    /** @param mixed $values */
    public function __construct(mixed $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryPricingStrategyInput')); }
    /** @return DeliveryCalculatedPricingStrategyRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When calculated is omitted; use hasCalculated() or valueOrDefault().
     */
    public function getCalculated(): mixed { return $this->get('calculated'); }
    public function hasCalculated(): bool { return $this->has('calculated'); }
    /** @return DeliveryExternalPricingStrategyInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When callback is omitted; use hasCallback() or valueOrDefault().
     */
    public function getCallback(): mixed { return $this->get('callback'); }
    public function hasCallback(): bool { return $this->has('callback'); }
    /** @return DeliveryExternalPricingStrategyInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When caller_supplied is omitted; use hasCallerSupplied() or valueOrDefault().
     */
    public function getCallerSupplied(): mixed { return $this->get('caller_supplied'); }
    public function hasCallerSupplied(): bool { return $this->has('caller_supplied'); }
    /** @return DeliveryFixedPricingStrategyRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When fixed is omitted; use hasFixed() or valueOrDefault().
     */
    public function getFixed(): mixed { return $this->get('fixed'); }
    public function hasFixed(): bool { return $this->has('fixed'); }
    /** @return DeliveryRateTablePricingStrategyInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When rate_table is omitted; use hasRateTable() or valueOrDefault().
     */
    public function getRateTable(): mixed { return $this->get('rate_table'); }
    public function hasRateTable(): bool { return $this->has('rate_table'); }
    /** @return DeliveryTieredPricingStrategyRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When tiered is omitted; use hasTiered() or valueOrDefault().
     */
    public function getTiered(): mixed { return $this->get('tiered'); }
    public function hasTiered(): bool { return $this->has('tiered'); }
    /** @return string
     * @throws SdkError When type is omitted; use hasType() or valueOrDefault().
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
}
