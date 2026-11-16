<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<TaxComponentRequestPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null $components
 * @property-read string|null $price_mode
 * Presence-aware input; omitted fields throw when accessed. */
final class TaxCalculationRequestPreviousAttributesInput extends Model {
    /** @param array{'components'?: list<TaxComponentRequestPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null, 'price_mode'?: string|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('TaxCalculationRequestPreviousAttributesInput')); }
    /** The tax for this line item or charge, one component per jurisdiction and tax type. Each is a `percentage` tax. anyOf[1] (Value): Array of {@see TaxComponentRequestPreviousAttributesInput}. The tax for this line item or charge, one component per jurisdiction and tax type. Each is a `percentage` tax. minItems: 1. anyOf[1][] (Value): {@see TaxComponentRequestPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return list<TaxComponentRequestPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null
     * @throws SdkError When components is omitted; use hasComponents() or valueOrDefault().
     */
    public function getComponents(): mixed { return $this->get('components'); }
    public function hasComponents(): bool { return $this->has('components'); }
    /** Whether the price this tax applies to already includes the tax. Value enum: "additive", "inclusive". anyOf[1] (Value): string. Whether the price this tax applies to already includes the tax. Value enum: "additive", "inclusive". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When price_mode is omitted; use hasPriceMode() or valueOrDefault().
     */
    public function getPriceMode(): mixed { return $this->get('price_mode'); }
    public function hasPriceMode(): bool { return $this->has('price_mode'); }
}
