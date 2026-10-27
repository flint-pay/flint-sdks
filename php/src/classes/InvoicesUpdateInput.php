<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $invoice_id
 * @property-read array{'cc_emails'?: list<string>, 'collection'?: mixed, 'expected_version'?: string, 'external_reference_id'?: string|null, 'footer'?: string|null, 'memo'?: string|null, 'metadata'?: array<array-key, string|null>|\stdClass|null, 'payment_due'?: mixed, 'po_number'?: string|null, 'recipient_email'?: string|null, 'reference'?: string|null, 'reminders_paused'?: bool, 'remit_to_address'?: mixed, 'schedule_entries'?: list<mixed>, 'scheduled_issue_at'?: string|\DateTimeInterface|null, 'service_date'?: string|null, ...}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class InvoicesUpdateInput extends Model {
    /** @param array{'invoice_id': string, 'Idempotency-Key'?: string, 'body': array{'cc_emails'?: list<string>, 'collection'?: mixed, 'expected_version'?: string, 'external_reference_id'?: string|null, 'footer'?: string|null, 'memo'?: string|null, 'metadata'?: array<array-key, string|null>|\stdClass|null, 'payment_due'?: mixed, 'po_number'?: string|null, 'recipient_email'?: string|null, 'reference'?: string|null, 'reminders_paused'?: bool, 'remit_to_address'?: mixed, 'schedule_entries'?: list<mixed>, 'scheduled_issue_at'?: string|\DateTimeInterface|null, 'service_date'?: string|null, ...}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InvoicesUpdateInput')); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When invoice_id is omitted; use hasInvoiceId() or valueOrDefault().
     */
    public function getInvoiceId(): string { return $this->get('invoice_id'); }
    public function hasInvoiceId(): bool { return $this->has('invoice_id'); }
    /** Shape $ (Value): string. maxLength: 255.
     * @return string
     * @throws SdkError When Idempotency-Key is omitted; use hasIdempotencyKey() or valueOrDefault().
     */
    public function getIdempotencyKey(): string { return $this->get('Idempotency-Key'); }
    public function hasIdempotencyKey(): bool { return $this->has('Idempotency-Key'); }
    /** Shape $ (Value): object. The request body for: Update invoice.
     * @return array{'cc_emails'?: list<string>, 'collection'?: mixed, 'expected_version'?: string, 'external_reference_id'?: string|null, 'footer'?: string|null, 'memo'?: string|null, 'metadata'?: array<array-key, string|null>|\stdClass|null, 'payment_due'?: mixed, 'po_number'?: string|null, 'recipient_email'?: string|null, 'reference'?: string|null, 'reminders_paused'?: bool, 'remit_to_address'?: mixed, 'schedule_entries'?: list<mixed>, 'scheduled_issue_at'?: string|\DateTimeInterface|null, 'service_date'?: string|null, ...}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
