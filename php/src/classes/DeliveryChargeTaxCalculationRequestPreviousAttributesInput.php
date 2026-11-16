<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<TaxComponentRequestPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null $components
 * @property-read string|null $mode
 * @property-read string|null $price_mode
 * Presence-aware input; omitted fields throw when accessed. */
final class DeliveryChargeTaxCalculationRequestPreviousAttributesInput extends Model {
    /** @param array{'components'?: list<TaxComponentRequestPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null, 'mode'?: string|null, 'price_mode'?: string|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryChargeTaxCalculationRequestPreviousAttributesInput')); }
    /** The tax copied onto each delivery charge, one percentage component per jurisdiction and tax type. anyOf[1] (Value): Array of {@see TaxComponentRequestPreviousAttributesInput}. The tax copied onto each delivery charge, one percentage component per jurisdiction and tax type. minItems: 1. anyOf[1][] (Value): {@see TaxComponentRequestPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return list<TaxComponentRequestPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null
     * @throws SdkError When components is omitted; use hasComponents() or valueOrDefault().
     */
    public function getComponents(): mixed { return $this->get('components'); }
    public function hasComponents(): bool { return $this->has('components'); }
    /** Optional. If you send it, it must be `external`, because delivery charge templates apply only to orders that use external tax. Value enum: "external". anyOf[1] (Value): string. Optional. If you send it, it must be `external`, because delivery charge templates apply only to orders that use external tax. Value enum: "external". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When mode is omitted; use hasMode() or valueOrDefault().
     */
    public function getMode(): mixed { return $this->get('mode'); }
    public function hasMode(): bool { return $this->has('mode'); }
    /** Whether the delivery charge already includes the tax. Value enum: "additive", "inclusive". anyOf[1] (Value): string. Whether the delivery charge already includes the tax. Value enum: "additive", "inclusive". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When price_mode is omitted; use hasPriceMode() or valueOrDefault().
     */
    public function getPriceMode(): mixed { return $this->get('price_mode'); }
    public function hasPriceMode(): bool { return $this->has('price_mode'); }
}
