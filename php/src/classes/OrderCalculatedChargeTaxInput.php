<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read TaxCalculationRequestInput|array<array-key, mixed>|\stdClass $calculation
 * @property-read string $charge_tax_category
 * @property-read bool $taxable
 * Presence-aware input; omitted fields throw when accessed. */
final class OrderCalculatedChargeTaxInput extends Model {
    /** @param array{'calculation'?: TaxCalculationRequestInput|array<array-key, mixed>|\stdClass, 'charge_tax_category'?: string, 'taxable'?: bool, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrderCalculatedChargeTaxInput')); }
    /** Tax you calculated yourself for a line or charge: whether prices include tax, and the tax components.
     * @return TaxCalculationRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When calculation is omitted; use hasCalculation() or valueOrDefault().
     */
    public function getCalculation(): mixed { return $this->get('calculation'); }
    public function hasCalculation(): bool { return $this->has('calculation'); }
    /** Tax category of the charge, which decides its automatic tax: shipping and delivery are taxed at the general rate, and a taxable charge in another category fails with AUTOMATIC_TAX_CHARGE_UNSUPPORTED. Omitted, the charge takes delivery from delivery_fee, shipping from shipping_fee, service_fee from service_fee, and handling from handling_fee; other types take none. The default follows type and is not returned. Value enum: "service_fee", "shipping", "delivery", "handling", "surcharge".
     * @return string
     * @throws SdkError When charge_tax_category is omitted; use hasChargeTaxCategory() or valueOrDefault().
     */
    public function getChargeTaxCategory(): string { return $this->get('charge_tax_category'); }
    public function hasChargeTaxCategory(): bool { return $this->has('charge_tax_category'); }
    /** taxable
     * @return bool
     * @throws SdkError When taxable is omitted; use hasTaxable() or valueOrDefault().
     */
    public function getTaxable(): bool { return $this->get('taxable'); }
    public function hasTaxable(): bool { return $this->has('taxable'); }
}
