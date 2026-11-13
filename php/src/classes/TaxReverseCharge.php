<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read CustomerTaxID|null $customer_tax_id
 * Presence-aware response; omitted optional fields return null. */
final class TaxReverseCharge extends Model {
    /** @param array{'customer_tax_id': mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('TaxReverseCharge')); }
    /** The customer's tax ID the reverse charge relied on. Frozen once the order is paid; recalculating tax before payment reads the customer's current tax IDs again. `null` when external tax sent a reverse charge and the customer has no tax ID for that country. anyOf[1] (Value): {@see CustomerTaxID}. A copy of one of the customer's `tax_identity.tax_ids`. Frozen once the order is paid; recalculating tax before payment reads the customer again. anyOf[2] (Value): null.
     * @return CustomerTaxID|null
     */
    public function getCustomerTaxId(): CustomerTaxID|null { return $this->get('customer_tax_id'); }
    public function hasCustomerTaxId(): bool { return $this->has('customer_tax_id'); }
}
