<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $invoice_payment_term_id
 * @property-read array{'calculation'?: mixed, 'expected_version'?: int, 'external_reference_id'?: string, 'late_fee_policy'?: array{'amount_money': mixed, 'application_mode'?: string, 'grace_period_days': int, 'percent'?: int|float, 'type': string}|object|array{'amount_money'?: mixed, 'application_mode'?: string, 'grace_period_days': int, 'percent': int|float, 'type': string}|object|null, 'name'?: string}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class InvoicePaymentTermsUpdateInput extends Model {
    /** @param array{'invoice_payment_term_id': string, 'Idempotency-Key'?: string, 'body': array{'calculation'?: mixed, 'expected_version'?: int, 'external_reference_id'?: string, 'late_fee_policy'?: array{'amount_money': mixed, 'application_mode'?: string, 'grace_period_days': int, 'percent'?: int|float, 'type': string}|object|array{'amount_money'?: mixed, 'application_mode'?: string, 'grace_period_days': int, 'percent': int|float, 'type': string}|object|null, 'name'?: string}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InvoicePaymentTermsUpdateInput')); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When invoice_payment_term_id is omitted; use hasInvoicePaymentTermId() or valueOrDefault().
     */
    public function getInvoicePaymentTermId(): string { return $this->get('invoice_payment_term_id'); }
    public function hasInvoicePaymentTermId(): bool { return $this->has('invoice_payment_term_id'); }
    /** Shape $ (Value): string. maxLength: 255.
     * @return string
     * @throws SdkError When Idempotency-Key is omitted; use hasIdempotencyKey() or valueOrDefault().
     */
    public function getIdempotencyKey(): string { return $this->get('Idempotency-Key'); }
    public function hasIdempotencyKey(): bool { return $this->has('Idempotency-Key'); }
    /** Shape $ (Value): object. The request body for: Update invoice payment term. minProperties: 1.
     * @return array{'calculation'?: mixed, 'expected_version'?: int, 'external_reference_id'?: string, 'late_fee_policy'?: array{'amount_money': mixed, 'application_mode'?: string, 'grace_period_days': int, 'percent'?: int|float, 'type': string}|object|array{'amount_money'?: mixed, 'application_mode'?: string, 'grace_period_days': int, 'percent': int|float, 'type': string}|object|null, 'name'?: string}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
