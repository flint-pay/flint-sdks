<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<TaxComponentRequestPreviousAttributes>|null $components
 * @property-read string|null $price_mode
 * Presence-aware response; omitted optional fields return null. */
final class TaxCalculationRequestPreviousAttributes extends Model {
    /** @param array{'components'?: mixed, 'price_mode'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('TaxCalculationRequestPreviousAttributes')); }
    /** The tax for this line item or charge, one component per jurisdiction and tax type. Each is a `percentage` tax. anyOf[1] (Value): Array of {@see TaxComponentRequestPreviousAttributes}. The tax for this line item or charge, one component per jurisdiction and tax type. Each is a `percentage` tax. minItems: 1. anyOf[1][] (Value): {@see TaxComponentRequestPreviousAttributes}. anyOf[2] (Value): null.
     * @return list<TaxComponentRequestPreviousAttributes>|null
     */
    public function getComponents(): array|null { return $this->get('components'); }
    public function hasComponents(): bool { return $this->has('components'); }
    /** Whether the price this tax applies to already includes the tax. Value enum: "additive", "inclusive". anyOf[1] (Value): string. Whether the price this tax applies to already includes the tax. Value enum: "additive", "inclusive". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getPriceMode(): string|null { return $this->get('price_mode'); }
    public function hasPriceMode(): bool { return $this->has('price_mode'); }
}
