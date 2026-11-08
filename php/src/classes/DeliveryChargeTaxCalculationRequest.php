<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<TaxComponentRequest> $components
 * @property-read ?string $mode
 * @property-read string $price_mode
 * Presence-aware response; omitted optional fields return null. */
final class DeliveryChargeTaxCalculationRequest extends Model {
    /** @param array{'components': list<mixed>, 'mode'?: string, 'price_mode': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryChargeTaxCalculationRequest')); }
    /** The tax copied onto each delivery charge, one percentage component per jurisdiction and tax type. minItems: 1. [] (Value): {@see TaxComponentRequest}. One tax component in a `TaxCalculationInput`: a jurisdiction, tax type, and percent.
     * @return list<TaxComponentRequest>
     */
    public function getComponents(): array { return $this->get('components'); }
    public function hasComponents(): bool { return $this->has('components'); }
    /** Optional. If you send it, it must be `external`, because delivery charge templates apply only to orders that use external tax. Value enum: "external".
     * @return ?string
     */
    public function getMode(): ?string { return $this->get('mode'); }
    public function hasMode(): bool { return $this->has('mode'); }
    /** Whether the delivery charge already includes the tax. Value enum: "additive", "inclusive".
     * @return string
     */
    public function getPriceMode(): string { return $this->get('price_mode'); }
    public function hasPriceMode(): bool { return $this->has('price_mode'); }
}
