<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $customer_id
 * @property-read string $customer_tax_exemption_id
 * @property-read mixed $body
 * Presence-aware input; omitted fields throw when accessed. */
final class CustomersUpdateTaxExemptionInput extends Model {
    /** @param array{'customer_id': string, 'customer_tax_exemption_id': string, 'body': mixed}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CustomersUpdateTaxExemptionInput')); }
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
    /** Sparse patch. Omitted fields stay unchanged. Expired and archived records cannot be edited. A version fence alone is not a change. minProperties: 1.
     * @return mixed
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): mixed { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
