<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read TaxCalculationRequestPreviousAttributes|null $calculation
 * @property-read string|null $charge_tax_category
 * @property-read bool|null $taxable
 * Presence-aware response; omitted optional fields return null. */
final class OrderCalculatedChargeTaxPreviousAttributes extends Model {
    /** @param array{'calculation'?: mixed, 'charge_tax_category'?: mixed, 'taxable'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrderCalculatedChargeTaxPreviousAttributes')); }
    /** The tax you supply for this charge. Used when the order's tax `mode` is `external`. anyOf[1] (Value): {@see TaxCalculationRequestPreviousAttributes}. anyOf[2] (Value): null.
     * @return TaxCalculationRequestPreviousAttributes|null
     */
    public function getCalculation(): TaxCalculationRequestPreviousAttributes|null { return $this->get('calculation'); }
    public function hasCalculation(): bool { return $this->has('calculation'); }
    /** Tax category of the charge, which decides its automatic tax: service_fee, shipping, delivery, handling, and surcharge are taxed at the general rate at the charge location, including the store for pickup. A taxable charge without a category fails with `INVALID_REQUEST` and a `NOT_ALLOWED` detail on the charge. Omitted, the charge takes delivery from delivery_fee, shipping from shipping_fee, service_fee from service_fee, and handling from handling_fee; other types take none. The default follows type and is not returned. Value enum: "service_fee", "shipping", "delivery", "handling", "surcharge". anyOf[1] (Value): string. Tax category of the charge, which decides its automatic tax: service_fee, shipping, delivery, handling, and surcharge are taxed at the general rate at the charge location, including the store for pickup. A taxable charge without a category fails with `INVALID_REQUEST` and a `NOT_ALLOWED` detail on the charge. Omitted, the charge takes delivery from delivery_fee, shipping from shipping_fee, service_fee from service_fee, and handling from handling_fee; other types take none. The default follows type and is not returned. Value enum: "service_fee", "shipping", "delivery", "handling", "surcharge". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getChargeTaxCategory(): string|null { return $this->get('charge_tax_category'); }
    public function hasChargeTaxCategory(): bool { return $this->has('charge_tax_category'); }
    /** Whether the charge is subject to tax. anyOf[1] (Value): boolean. Whether the charge is subject to tax. anyOf[2] (Value): null.
     * @return bool|null
     */
    public function getTaxable(): bool|null { return $this->get('taxable'); }
    public function hasTaxable(): bool { return $this->has('taxable'); }
}
