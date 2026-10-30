<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $customer_id
 * @property-read array{'default_invoice_payment_term_id'?: string|null, 'default_payment_method_id'?: string|null, 'email'?: string|null, 'expected_version'?: int, 'external_reference_id'?: string|null, 'internal_note'?: string|null, 'is_merchant_verified'?: bool, 'metadata'?: array<array-key, string|null>|\stdClass|null, 'name'?: string|null, 'phone'?: string|null, 'segment'?: string|null, 'tax_exempt'?: bool, 'tax_identity'?: array{'legal_name'?: string|null, 'registered_address'?: array{'city': string, 'country': string, 'line1': string, 'line2'?: string|null, 'postal_code'?: string|null, 'state'?: string|null}|object|null, 'tax_ids'?: list<mixed>}|object|null}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class CustomersUpdateInput extends Model {
    /** @param array{'customer_id': string, 'body': array{'default_invoice_payment_term_id'?: string|null, 'default_payment_method_id'?: string|null, 'email'?: string|null, 'expected_version'?: int, 'external_reference_id'?: string|null, 'internal_note'?: string|null, 'is_merchant_verified'?: bool, 'metadata'?: array<array-key, string|null>|\stdClass|null, 'name'?: string|null, 'phone'?: string|null, 'segment'?: string|null, 'tax_exempt'?: bool, 'tax_identity'?: array{'legal_name'?: string|null, 'registered_address'?: array{'city': string, 'country': string, 'line1': string, 'line2'?: string|null, 'postal_code'?: string|null, 'state'?: string|null}|object|null, 'tax_ids'?: list<mixed>}|object|null}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CustomersUpdateInput')); }
    /** Flint customer ID. Example: "cus_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When customer_id is omitted; use hasCustomerId() or valueOrDefault().
     */
    public function getCustomerId(): string { return $this->get('customer_id'); }
    public function hasCustomerId(): bool { return $this->has('customer_id'); }
    /** The request body for: Update customer. Example: {"internal_note":"VIP buyer","metadata":{"segment":"vip"},"phone":"+14155552671"}.
     * @return array{'default_invoice_payment_term_id'?: string|null, 'default_payment_method_id'?: string|null, 'email'?: string|null, 'expected_version'?: int, 'external_reference_id'?: string|null, 'internal_note'?: string|null, 'is_merchant_verified'?: bool, 'metadata'?: array<array-key, string|null>|\stdClass|null, 'name'?: string|null, 'phone'?: string|null, 'segment'?: string|null, 'tax_exempt'?: bool, 'tax_identity'?: array{'legal_name'?: string|null, 'registered_address'?: array{'city': string, 'country': string, 'line1': string, 'line2'?: string|null, 'postal_code'?: string|null, 'state'?: string|null}|object|null, 'tax_ids'?: list<mixed>}|object|null}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
