<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<TaxComponentRequestRequestInput|array<array-key, mixed>|\stdClass> $components
 * @property-read string $price_mode
 * Presence-aware input; omitted fields throw when accessed. */
final class TaxCalculationRequestRequestInput extends Model {
    /** @param array{'components': list<TaxComponentRequestRequestInput|array<array-key, mixed>|\stdClass>, 'price_mode': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('TaxCalculationRequestRequestInput')); }
    /** Shape $ (Value): Array of {@see TaxComponentRequestRequestInput}. minItems: 1. Shape $[] (Value): {@see TaxComponentRequestRequestInput}. One tax component in a `TaxCalculationInput`: a jurisdiction, tax type, and percent.
     * @return list<TaxComponentRequestRequestInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When components is omitted; use hasComponents() or valueOrDefault().
     */
    public function getComponents(): array { return $this->get('components'); }
    public function hasComponents(): bool { return $this->has('components'); }
    /** Shape $ (Value): string.  Value enum: "additive", "inclusive".
     * @return string
     * @throws SdkError When price_mode is omitted; use hasPriceMode() or valueOrDefault().
     */
    public function getPriceMode(): string { return $this->get('price_mode'); }
    public function hasPriceMode(): bool { return $this->has('price_mode'); }
}
