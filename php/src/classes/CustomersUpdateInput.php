<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $customer_id
 * @property-read array{'billing_address'?: mixed, 'default_invoice_payment_term_id'?: string, 'expected_version'?: string, 'external_reference_id'?: string, 'group_id'?: string, 'internal_note'?: string, 'is_verified'?: bool, 'metadata'?: array<array-key, string|null>|\stdClass|null, 'name'?: string, 'phone'?: string, 'shipping_address'?: mixed, 'tax_exempt'?: bool, 'tax_identity'?: array{'legal_name'?: string|null, 'registered_address'?: array{'city': string, 'country': string, 'line1': string, 'line2'?: string, 'postal_code': string, 'state': string, ...}|object|null, 'tax_ids'?: list<mixed>, ...}|object|null, ...}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class CustomersUpdateInput extends Model {
    /** @param array{'customer_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{'billing_address'?: mixed, 'default_invoice_payment_term_id'?: string, 'expected_version'?: string, 'external_reference_id'?: string, 'group_id'?: string, 'internal_note'?: string, 'is_verified'?: bool, 'metadata'?: array<array-key, string|null>|\stdClass|null, 'name'?: string, 'phone'?: string, 'shipping_address'?: mixed, 'tax_exempt'?: bool, 'tax_identity'?: array{'legal_name'?: string|null, 'registered_address'?: array{'city': string, 'country': string, 'line1': string, 'line2'?: string, 'postal_code': string, 'state': string, ...}|object|null, 'tax_ids'?: list<mixed>, ...}|object|null, ...}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CustomersUpdateInput')); }
    /** @return string
     * @throws SdkError When customer_id is omitted; use hasCustomerId() or valueOrDefault().
     */
    public function getCustomerId(): string { return $this->get('customer_id'); }
    public function hasCustomerId(): bool { return $this->has('customer_id'); }
    /** @return string
     * @throws SdkError When Idempotency-Key is omitted; use hasIdempotencyKey() or valueOrDefault().
     */
    public function getIdempotencyKey(): string { return $this->get('Idempotency-Key'); }
    public function hasIdempotencyKey(): bool { return $this->has('Idempotency-Key'); }
    /** @return string
     * @throws SdkError When X-Request-Id is omitted; use hasXRequestId() or valueOrDefault().
     */
    public function getXRequestId(): string { return $this->get('X-Request-Id'); }
    public function hasXRequestId(): bool { return $this->has('X-Request-Id'); }
    /** @return string
     * @throws SdkError When Flint-Version is omitted; use hasFlintVersion() or valueOrDefault().
     */
    public function getFlintVersion(): string { return $this->get('Flint-Version'); }
    public function hasFlintVersion(): bool { return $this->has('Flint-Version'); }
    /** @return array{'billing_address'?: mixed, 'default_invoice_payment_term_id'?: string, 'expected_version'?: string, 'external_reference_id'?: string, 'group_id'?: string, 'internal_note'?: string, 'is_verified'?: bool, 'metadata'?: array<array-key, string|null>|\stdClass|null, 'name'?: string, 'phone'?: string, 'shipping_address'?: mixed, 'tax_exempt'?: bool, 'tax_identity'?: array{'legal_name'?: string|null, 'registered_address'?: array{'city': string, 'country': string, 'line1': string, 'line2'?: string, 'postal_code': string, 'state': string, ...}|object|null, 'tax_ids'?: list<mixed>, ...}|object|null, ...}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
