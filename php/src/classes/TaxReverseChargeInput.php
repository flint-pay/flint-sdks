<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read array{'country': string, 'identifier_type': string, 'region': string|null, 'value': string, ...}|object|null $customer_tax_id
 * Presence-aware input; omitted fields throw when accessed. */
final class TaxReverseChargeInput extends Model {
    /** @param array{'customer_tax_id': array{'country': string, 'identifier_type': string, 'region': string|null, 'value': string, ...}|object|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('TaxReverseChargeInput')); }
    /** The customer's tax ID the reverse charge relied on. Frozen once the order is paid; recalculating tax before payment reads the customer's current tax IDs again. `null` when external tax sent a reverse charge and the customer has no tax ID for that country. anyOf[1] (Value): {@see CustomerTaxIDInput}. A copy of one of the customer's `tax_identity.tax_ids`. Frozen once the order is paid; recalculating tax before payment reads the customer again. anyOf[2] (Value): null.
     * @return array{'country': string, 'identifier_type': string, 'region': string|null, 'value': string, ...}|object|null
     * @throws SdkError When customer_tax_id is omitted; use hasCustomerTaxId() or valueOrDefault().
     */
    public function getCustomerTaxId(): mixed { return $this->get('customer_tax_id'); }
    public function hasCustomerTaxId(): bool { return $this->has('customer_tax_id'); }
}
