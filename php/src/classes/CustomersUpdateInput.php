<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $customer_id
 * @property-read array{'billing_address'?: array{'city': string, 'country': string, 'line1': string, 'line2'?: string|null, 'postal_code': string, 'state': string, ...}|object|null, 'default_invoice_payment_term_id'?: string|null, 'default_payment_method_id'?: string|null, 'email'?: string|null, 'expected_version'?: string, 'external_reference_id'?: string|null, 'internal_note'?: string|null, 'is_merchant_verified'?: bool, 'metadata'?: array<array-key, string|null>|\stdClass|null, 'name'?: string|null, 'phone'?: string|null, 'segment'?: string|null, 'shipping_address'?: array{'city': string, 'country': string, 'line1': string, 'line2'?: string|null, 'postal_code': string, 'state': string, ...}|object|null, 'tax_exempt'?: bool, 'tax_identity'?: array{'legal_name'?: string|null, 'registered_address'?: array{'city': string, 'country': string, 'line1': string, 'line2'?: string|null, 'postal_code': string, 'state': string, ...}|object|null, 'tax_ids'?: list<mixed>, ...}|object|null, ...}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class CustomersUpdateInput extends Model {
    /** @param array{'customer_id': string, 'Idempotency-Key'?: string, 'body': array{'billing_address'?: array{'city': string, 'country': string, 'line1': string, 'line2'?: string|null, 'postal_code': string, 'state': string, ...}|object|null, 'default_invoice_payment_term_id'?: string|null, 'default_payment_method_id'?: string|null, 'email'?: string|null, 'expected_version'?: string, 'external_reference_id'?: string|null, 'internal_note'?: string|null, 'is_merchant_verified'?: bool, 'metadata'?: array<array-key, string|null>|\stdClass|null, 'name'?: string|null, 'phone'?: string|null, 'segment'?: string|null, 'shipping_address'?: array{'city': string, 'country': string, 'line1': string, 'line2'?: string|null, 'postal_code': string, 'state': string, ...}|object|null, 'tax_exempt'?: bool, 'tax_identity'?: array{'legal_name'?: string|null, 'registered_address'?: array{'city': string, 'country': string, 'line1': string, 'line2'?: string|null, 'postal_code': string, 'state': string, ...}|object|null, 'tax_ids'?: list<mixed>, ...}|object|null, ...}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CustomersUpdateInput')); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When customer_id is omitted; use hasCustomerId() or valueOrDefault().
     */
    public function getCustomerId(): string { return $this->get('customer_id'); }
    public function hasCustomerId(): bool { return $this->has('customer_id'); }
    /** Shape $ (Value): string. maxLength: 255.
     * @return string
     * @throws SdkError When Idempotency-Key is omitted; use hasIdempotencyKey() or valueOrDefault().
     */
    public function getIdempotencyKey(): string { return $this->get('Idempotency-Key'); }
    public function hasIdempotencyKey(): bool { return $this->has('Idempotency-Key'); }
    /** Shape $ (Value): object. The request body for: Update customer.
     * @return array{'billing_address'?: array{'city': string, 'country': string, 'line1': string, 'line2'?: string|null, 'postal_code': string, 'state': string, ...}|object|null, 'default_invoice_payment_term_id'?: string|null, 'default_payment_method_id'?: string|null, 'email'?: string|null, 'expected_version'?: string, 'external_reference_id'?: string|null, 'internal_note'?: string|null, 'is_merchant_verified'?: bool, 'metadata'?: array<array-key, string|null>|\stdClass|null, 'name'?: string|null, 'phone'?: string|null, 'segment'?: string|null, 'shipping_address'?: array{'city': string, 'country': string, 'line1': string, 'line2'?: string|null, 'postal_code': string, 'state': string, ...}|object|null, 'tax_exempt'?: bool, 'tax_identity'?: array{'legal_name'?: string|null, 'registered_address'?: array{'city': string, 'country': string, 'line1': string, 'line2'?: string|null, 'postal_code': string, 'state': string, ...}|object|null, 'tax_ids'?: list<mixed>, ...}|object|null, ...}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
