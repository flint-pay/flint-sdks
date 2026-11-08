<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read TaxCalculationRequestRequestInput|array<array-key, mixed>|\stdClass $calculation
 * @property-read string $charge_tax_category
 * @property-read bool $taxable
 * Presence-aware input; omitted fields throw when accessed. */
final class OrderCalculatedChargeTaxRequestInput extends Model {
    /** @param array{'calculation'?: TaxCalculationRequestRequestInput|array<array-key, mixed>|\stdClass, 'charge_tax_category'?: string, 'taxable'?: bool, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrderCalculatedChargeTaxRequestInput')); }
    /** The tax you supply for this charge. Used when the order's tax `mode` is `external`. Tax you calculated yourself for a line or charge: whether prices include tax, and the tax components.
     * @return TaxCalculationRequestRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When calculation is omitted; use hasCalculation() or valueOrDefault().
     */
    public function getCalculation(): mixed { return $this->get('calculation'); }
    public function hasCalculation(): bool { return $this->has('calculation'); }
    /** Tax category of the charge, which decides its automatic tax: service_fee, shipping, delivery, handling, and surcharge are taxed at the general rate at the charge location, including the store for pickup. A taxable charge without a category fails with `INVALID_REQUEST` and a `NOT_ALLOWED` detail on the charge. Omitted, the charge takes delivery from delivery_fee, shipping from shipping_fee, service_fee from service_fee, and handling from handling_fee; other types take none. The default follows type and is not returned. Value enum: "service_fee", "shipping", "delivery", "handling", "surcharge".
     * @return string
     * @throws SdkError When charge_tax_category is omitted; use hasChargeTaxCategory() or valueOrDefault().
     */
    public function getChargeTaxCategory(): string { return $this->get('charge_tax_category'); }
    public function hasChargeTaxCategory(): bool { return $this->has('charge_tax_category'); }
    /** Whether the charge is subject to tax.
     * @return bool
     * @throws SdkError When taxable is omitted; use hasTaxable() or valueOrDefault().
     */
    public function getTaxable(): bool { return $this->get('taxable'); }
    public function hasTaxable(): bool { return $this->has('taxable'); }
}
