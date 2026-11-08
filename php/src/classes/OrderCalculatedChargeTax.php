<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?string $charge_tax_category
 * @property-read ?bool $taxable
 * Presence-aware response; omitted optional fields return null. */
final class OrderCalculatedChargeTax extends Model {
    /** @param array{'charge_tax_category'?: string, 'taxable'?: bool, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrderCalculatedChargeTax')); }
    /** Tax category of the charge, which decides its automatic tax: service_fee, shipping, delivery, handling, and surcharge are taxed at the general rate at the charge location, including the store for pickup. A taxable charge without a category fails with `INVALID_REQUEST` and a `NOT_ALLOWED` detail on the charge. Omitted, the charge takes delivery from delivery_fee, shipping from shipping_fee, service_fee from service_fee, and handling from handling_fee; other types take none. The default follows type and is not returned. Value enum: "service_fee", "shipping", "delivery", "handling", "surcharge".
     * @return ?string
     */
    public function getChargeTaxCategory(): ?string { return $this->get('charge_tax_category'); }
    public function hasChargeTaxCategory(): bool { return $this->has('charge_tax_category'); }
    /** Whether the charge is subject to tax.
     * @return ?bool
     */
    public function getTaxable(): ?bool { return $this->get('taxable'); }
    public function hasTaxable(): bool { return $this->has('taxable'); }
}
