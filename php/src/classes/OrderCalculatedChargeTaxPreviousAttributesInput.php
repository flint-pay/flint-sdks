<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read TaxCalculationRequestPreviousAttributesInput|array<array-key, mixed>|\stdClass|null $calculation
 * @property-read string|null $charge_tax_category
 * @property-read bool|null $taxable
 * Presence-aware input; omitted fields throw when accessed. */
final class OrderCalculatedChargeTaxPreviousAttributesInput extends Model {
    /** @param array{'calculation'?: TaxCalculationRequestPreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'charge_tax_category'?: string|null, 'taxable'?: bool|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrderCalculatedChargeTaxPreviousAttributesInput')); }
    /** The tax you supply for this charge. Used when the order's tax `mode` is `external`. anyOf[1] (Value): {@see TaxCalculationRequestPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return TaxCalculationRequestPreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When calculation is omitted; use hasCalculation() or valueOrDefault().
     */
    public function getCalculation(): mixed { return $this->get('calculation'); }
    public function hasCalculation(): bool { return $this->has('calculation'); }
    /** Tax category of the charge, which decides its automatic tax: service_fee, shipping, delivery, handling, and surcharge are taxed at the general rate at the charge location, including the store for pickup. A taxable charge without a category fails with `INVALID_REQUEST` and a `NOT_ALLOWED` detail on the charge. Omitted, the charge takes delivery from delivery_fee, shipping from shipping_fee, service_fee from service_fee, and handling from handling_fee; other types take none. The default follows type and is not returned. Value enum: "service_fee", "shipping", "delivery", "handling", "surcharge". anyOf[1] (Value): string. Tax category of the charge, which decides its automatic tax: service_fee, shipping, delivery, handling, and surcharge are taxed at the general rate at the charge location, including the store for pickup. A taxable charge without a category fails with `INVALID_REQUEST` and a `NOT_ALLOWED` detail on the charge. Omitted, the charge takes delivery from delivery_fee, shipping from shipping_fee, service_fee from service_fee, and handling from handling_fee; other types take none. The default follows type and is not returned. Value enum: "service_fee", "shipping", "delivery", "handling", "surcharge". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When charge_tax_category is omitted; use hasChargeTaxCategory() or valueOrDefault().
     */
    public function getChargeTaxCategory(): mixed { return $this->get('charge_tax_category'); }
    public function hasChargeTaxCategory(): bool { return $this->has('charge_tax_category'); }
    /** Whether the charge is subject to tax. anyOf[1] (Value): boolean. Whether the charge is subject to tax. anyOf[2] (Value): null.
     * @return bool|null
     * @throws SdkError When taxable is omitted; use hasTaxable() or valueOrDefault().
     */
    public function getTaxable(): mixed { return $this->get('taxable'); }
    public function hasTaxable(): bool { return $this->has('taxable'); }
}
