<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read DeliveryCalculatedPricingStrategyRequest $calculated
 * @property-read DeliveryExternalPricingStrategy $callback
 * @property-read DeliveryExternalPricingStrategy $caller_supplied
 * @property-read DeliveryFixedPricingStrategyRequest $fixed
 * @property-read DeliveryRateTablePricingStrategy $rate_table
 * @property-read \stdClass $tiered
 * @property-read string $type
 * Presence-aware response; omitted fields throw when accessed. */
final class DeliveryMethodConfigurationPricingFixed extends Model {
    /** @param array{'calculated'?: mixed, 'callback'?: mixed, 'caller_supplied'?: mixed, 'fixed': mixed, 'rate_table'?: mixed, 'tiered'?: mixed, 'type': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryMethodConfigurationPricingFixed')); }
    /** @return DeliveryCalculatedPricingStrategyRequest
     * @throws SdkError When calculated is omitted; use hasCalculated() or valueOrDefault().
     */
    public function getCalculated(): DeliveryCalculatedPricingStrategyRequest { return $this->get('calculated'); }
    public function hasCalculated(): bool { return $this->has('calculated'); }
    /** @return DeliveryExternalPricingStrategy
     * @throws SdkError When callback is omitted; use hasCallback() or valueOrDefault().
     */
    public function getCallback(): DeliveryExternalPricingStrategy { return $this->get('callback'); }
    public function hasCallback(): bool { return $this->has('callback'); }
    /** @return DeliveryExternalPricingStrategy
     * @throws SdkError When caller_supplied is omitted; use hasCallerSupplied() or valueOrDefault().
     */
    public function getCallerSupplied(): DeliveryExternalPricingStrategy { return $this->get('caller_supplied'); }
    public function hasCallerSupplied(): bool { return $this->has('caller_supplied'); }
    /** @return DeliveryFixedPricingStrategyRequest
     * @throws SdkError When fixed is omitted; use hasFixed() or valueOrDefault().
     */
    public function getFixed(): DeliveryFixedPricingStrategyRequest { return $this->get('fixed'); }
    public function hasFixed(): bool { return $this->has('fixed'); }
    /** @return DeliveryRateTablePricingStrategy
     * @throws SdkError When rate_table is omitted; use hasRateTable() or valueOrDefault().
     */
    public function getRateTable(): DeliveryRateTablePricingStrategy { return $this->get('rate_table'); }
    public function hasRateTable(): bool { return $this->has('rate_table'); }
    /** @return \stdClass
     * @throws SdkError When tiered is omitted; use hasTiered() or valueOrDefault().
     */
    public function getTiered(): \stdClass { return $this->get('tiered'); }
    public function hasTiered(): bool { return $this->has('tiered'); }
    /** @return string
     * @throws SdkError When type is omitted; use hasType() or valueOrDefault().
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
}
