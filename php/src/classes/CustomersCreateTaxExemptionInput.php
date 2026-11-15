<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $customer_id
 * @property-read array{'certificate_number'?: string|null, 'coverage': mixed, 'description'?: string|null, 'end_date'?: string|null, 'evidence_reference'?: string|null, 'metadata'?: mixed, 'reason': string, 'start_date': string}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class CustomersCreateTaxExemptionInput extends Model {
    /** @param array{'customer_id': string, 'body': array{'certificate_number'?: string|null, 'coverage': mixed, 'description'?: string|null, 'end_date'?: string|null, 'evidence_reference'?: string|null, 'metadata'?: mixed, 'reason': string, 'start_date': string}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CustomersCreateTaxExemptionInput')); }
    /** Flint ID of the customer that owns this nested child. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     * @return string
     * @throws SdkError When customer_id is omitted; use hasCustomerId() or valueOrDefault().
     */
    public function getCustomerId(): string { return $this->get('customer_id'); }
    public function hasCustomerId(): bool { return $this->has('customer_id'); }
    /** The request body for: Create a customer tax exemption.
     * @return array{'certificate_number'?: string|null, 'coverage': mixed, 'description'?: string|null, 'end_date'?: string|null, 'evidence_reference'?: string|null, 'metadata'?: mixed, 'reason': string, 'start_date': string}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
