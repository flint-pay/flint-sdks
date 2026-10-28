<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read array{'default_invoice_payment_term_id'?: string, 'email'?: string, 'external_reference_id'?: string, 'internal_note'?: string, 'is_merchant_verified'?: bool, 'metadata'?: mixed, 'name'?: string, 'on_email_conflict'?: string, 'phone'?: string, 'segment'?: string, 'tax_exempt'?: bool, 'tax_identity'?: mixed}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class CustomersCreateInput extends Model {
    /** @param array{'Idempotency-Key'?: string, 'body': array{'default_invoice_payment_term_id'?: string, 'email'?: string, 'external_reference_id'?: string, 'internal_note'?: string, 'is_merchant_verified'?: bool, 'metadata'?: mixed, 'name'?: string, 'on_email_conflict'?: string, 'phone'?: string, 'segment'?: string, 'tax_exempt'?: bool, 'tax_identity'?: mixed}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CustomersCreateInput')); }
    /** Shape $ (Value): string. maxLength: 255.
     * @return string
     * @throws SdkError When Idempotency-Key is omitted; use hasIdempotencyKey() or valueOrDefault().
     */
    public function getIdempotencyKey(): string { return $this->get('Idempotency-Key'); }
    public function hasIdempotencyKey(): bool { return $this->has('Idempotency-Key'); }
    /** Shape $ (Value): object. The request body for: Create customer.
     * @return array{'default_invoice_payment_term_id'?: string, 'email'?: string, 'external_reference_id'?: string, 'internal_note'?: string, 'is_merchant_verified'?: bool, 'metadata'?: mixed, 'name'?: string, 'on_email_conflict'?: string, 'phone'?: string, 'segment'?: string, 'tax_exempt'?: bool, 'tax_identity'?: mixed}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
