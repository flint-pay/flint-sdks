<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<TaxComponentRequestPreviousAttributes>|null $components
 * @property-read string|null $mode
 * @property-read string|null $price_mode
 * Presence-aware response; omitted optional fields return null. */
final class DeliveryChargeTaxCalculationRequestPreviousAttributes extends Model {
    /** @param array{'components'?: mixed, 'mode'?: mixed, 'price_mode'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryChargeTaxCalculationRequestPreviousAttributes')); }
    /** The tax copied onto each delivery charge, one percentage component per jurisdiction and tax type. anyOf[1] (Value): Array of {@see TaxComponentRequestPreviousAttributes}. The tax copied onto each delivery charge, one percentage component per jurisdiction and tax type. minItems: 1. anyOf[1][] (Value): {@see TaxComponentRequestPreviousAttributes}. anyOf[2] (Value): null.
     * @return list<TaxComponentRequestPreviousAttributes>|null
     */
    public function getComponents(): array|null { return $this->get('components'); }
    public function hasComponents(): bool { return $this->has('components'); }
    /** Optional. If you send it, it must be `external`, because delivery charge templates apply only to orders that use external tax. Value enum: "external". anyOf[1] (Value): string. Optional. If you send it, it must be `external`, because delivery charge templates apply only to orders that use external tax. Value enum: "external". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getMode(): string|null { return $this->get('mode'); }
    public function hasMode(): bool { return $this->has('mode'); }
    /** Whether the delivery charge already includes the tax. Value enum: "additive", "inclusive". anyOf[1] (Value): string. Whether the delivery charge already includes the tax. Value enum: "additive", "inclusive". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getPriceMode(): string|null { return $this->get('price_mode'); }
    public function hasPriceMode(): bool { return $this->has('price_mode'); }
}
