<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $customer_id
 * @property-read string $customer_tax_exemption_id
 * Presence-aware input; omitted fields throw when accessed. */
final class CustomersGetTaxExemptionInput extends Model {
    /** @param array{'customer_id': string, 'customer_tax_exemption_id': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CustomersGetTaxExemptionInput')); }
    /** Flint ID of the customer that owns this nested child. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     * @return string
     * @throws SdkError When customer_id is omitted; use hasCustomerId() or valueOrDefault().
     */
    public function getCustomerId(): string { return $this->get('customer_id'); }
    public function hasCustomerId(): bool { return $this->has('customer_id'); }
    /** Flint customer tax exemption ID, prefixed ctex_. Example: "ctex_01KEZF7C009N0YTK0NMWP1XZPW".
     * @return string
     * @throws SdkError When customer_tax_exemption_id is omitted; use hasCustomerTaxExemptionId() or valueOrDefault().
     */
    public function getCustomerTaxExemptionId(): string { return $this->get('customer_tax_exemption_id'); }
    public function hasCustomerTaxExemptionId(): bool { return $this->has('customer_tax_exemption_id'); }
}
