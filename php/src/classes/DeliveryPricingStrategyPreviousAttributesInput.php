<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read DeliveryCalculatedPricingStrategyPreviousAttributesInput|array<array-key, mixed>|\stdClass|null $calculated
 * @property-read DeliveryExternalPricingStrategyPreviousAttributesInput|array<array-key, mixed>|\stdClass|null $callback
 * @property-read DeliveryExternalPricingStrategyPreviousAttributesInput|array<array-key, mixed>|\stdClass|null $caller_supplied
 * @property-read DeliveryFixedPricingStrategyPreviousAttributesInput|array<array-key, mixed>|\stdClass|null $fixed
 * @property-read DeliveryRateTablePricingStrategyPreviousAttributesInput|array<array-key, mixed>|\stdClass|null $rate_table
 * @property-read DeliveryTieredPricingStrategyPreviousAttributesInput|array<array-key, mixed>|\stdClass|null $tiered
 * @property-read string|null $type
 * Presence-aware input; omitted fields throw when accessed. */
final class DeliveryPricingStrategyPreviousAttributesInput extends Model {
    /** @param DeliveryPricingStrategyCalculatedPreviousAttributesInput|array<array-key, mixed>|\stdClass|DeliveryPricingStrategyCallbackPreviousAttributesInput|array<array-key, mixed>|\stdClass|DeliveryPricingStrategyCallerSuppliedPreviousAttributesInput|array<array-key, mixed>|\stdClass|DeliveryPricingStrategyFixedPreviousAttributesInput|array<array-key, mixed>|\stdClass|DeliveryPricingStrategyRateTablePreviousAttributesInput|array<array-key, mixed>|\stdClass|DeliveryPricingStrategyTieredPreviousAttributesInput|array<array-key, mixed>|\stdClass $values */
    public function __construct(mixed $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryPricingStrategyPreviousAttributesInput')); }
    /** Calculated pricing settings. Set only when `type` is `calculated`. anyOf[1] (Value): {@see DeliveryCalculatedPricingStrategyPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return DeliveryCalculatedPricingStrategyPreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When calculated is omitted; use hasCalculated() or valueOrDefault().
     */
    public function getCalculated(): mixed { return $this->get('calculated'); }
    public function hasCalculated(): bool { return $this->has('calculated'); }
    /** Rate callback pricing settings. Set only when `type` is `callback`. anyOf[1] (Value): {@see DeliveryExternalPricingStrategyPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return DeliveryExternalPricingStrategyPreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When callback is omitted; use hasCallback() or valueOrDefault().
     */
    public function getCallback(): mixed { return $this->get('callback'); }
    public function hasCallback(): bool { return $this->has('callback'); }
    /** Caller-supplied pricing settings. Set only when `type` is `caller_supplied`. anyOf[1] (Value): {@see DeliveryExternalPricingStrategyPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return DeliveryExternalPricingStrategyPreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When caller_supplied is omitted; use hasCallerSupplied() or valueOrDefault().
     */
    public function getCallerSupplied(): mixed { return $this->get('caller_supplied'); }
    public function hasCallerSupplied(): bool { return $this->has('caller_supplied'); }
    /** Fixed pricing settings. Set only when `type` is `fixed`. anyOf[1] (Value): {@see DeliveryFixedPricingStrategyPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return DeliveryFixedPricingStrategyPreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When fixed is omitted; use hasFixed() or valueOrDefault().
     */
    public function getFixed(): mixed { return $this->get('fixed'); }
    public function hasFixed(): bool { return $this->has('fixed'); }
    /** Rate table pricing settings. Set only when `type` is `rate_table`. anyOf[1] (Value): {@see DeliveryRateTablePricingStrategyPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return DeliveryRateTablePricingStrategyPreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When rate_table is omitted; use hasRateTable() or valueOrDefault().
     */
    public function getRateTable(): mixed { return $this->get('rate_table'); }
    public function hasRateTable(): bool { return $this->has('rate_table'); }
    /** Tiered pricing settings. Set only when `type` is `tiered`. anyOf[1] (Value): {@see DeliveryTieredPricingStrategyPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return DeliveryTieredPricingStrategyPreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When tiered is omitted; use hasTiered() or valueOrDefault().
     */
    public function getTiered(): mixed { return $this->get('tiered'); }
    public function hasTiered(): bool { return $this->has('tiered'); }
    /** How the method sets its price. Set the property named by this value. Value enum: "fixed", "rate_table", "tiered", "calculated", "callback", "caller_supplied". anyOf[1] (Value): string. How the method sets its price. Set the property named by this value. Value enum: "fixed", "rate_table", "tiered", "calculated", "callback", "caller_supplied". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When type is omitted; use hasType() or valueOrDefault().
     */
    public function getType(): mixed { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
}
