<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read array{'default_invoice_payment_term_id'?: string, 'email'?: string, 'external_reference_id'?: string, 'internal_note'?: string, 'is_merchant_verified'?: bool, 'metadata'?: mixed, 'name'?: string, 'on_email_conflict'?: string, 'phone'?: string, 'segment'?: string, 'tax_exempt'?: bool, 'tax_identity'?: mixed, 'test_clock_id'?: string}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class CustomersCreateInput extends Model {
    /** @param array{'body': array{'default_invoice_payment_term_id'?: string, 'email'?: string, 'external_reference_id'?: string, 'internal_note'?: string, 'is_merchant_verified'?: bool, 'metadata'?: mixed, 'name'?: string, 'on_email_conflict'?: string, 'phone'?: string, 'segment'?: string, 'tax_exempt'?: bool, 'tax_identity'?: mixed, 'test_clock_id'?: string}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CustomersCreateInput')); }
    /** The request body for: Create customer. Example: {"email":"jane@example.com","metadata":{"crm_id":"crm_123"},"name":"Jane Doe"}.
     * @return array{'default_invoice_payment_term_id'?: string, 'email'?: string, 'external_reference_id'?: string, 'internal_note'?: string, 'is_merchant_verified'?: bool, 'metadata'?: mixed, 'name'?: string, 'on_email_conflict'?: string, 'phone'?: string, 'segment'?: string, 'tax_exempt'?: bool, 'tax_identity'?: mixed, 'test_clock_id'?: string}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
