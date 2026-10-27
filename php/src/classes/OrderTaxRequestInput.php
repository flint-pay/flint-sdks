<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read OrderTaxCalculationRequestInput|array<array-key, mixed>|\stdClass $calculation
 * @property-read bool $enabled
 * @property-read OrderTaxLocationRequestInput|array<array-key, mixed>|\stdClass $location
 * Presence-aware input; omitted fields throw when accessed. */
final class OrderTaxRequestInput extends Model {
    /** @param mixed $values */
    public function __construct(mixed $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrderTaxRequestInput')); }
    /** Shape $ (Value): {@see OrderTaxCalculationRequestInput}. How tax is calculated on an order: automatically, or externally with the tax components you supply.
     * @return OrderTaxCalculationRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When calculation is omitted; use hasCalculation() or valueOrDefault().
     */
    public function getCalculation(): mixed { return $this->get('calculation'); }
    public function hasCalculation(): bool { return $this->has('calculation'); }
    /** Shape $ (Value): boolean. Default: true.
     * @return bool
     * @throws SdkError When enabled is omitted; use hasEnabled() or valueOrDefault().
     */
    public function getEnabled(): bool { return $this->get('enabled'); }
    public function hasEnabled(): bool { return $this->has('enabled'); }
    /** Shape $ (Value): {@see OrderTaxLocationRequestInput}. The tax location you supply for an order, as a postal code or a full address, with or without an address type.
     * @return OrderTaxLocationRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When location is omitted; use hasLocation() or valueOrDefault().
     */
    public function getLocation(): mixed { return $this->get('location'); }
    public function hasLocation(): bool { return $this->has('location'); }
}
