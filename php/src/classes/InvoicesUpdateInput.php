<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $invoice_id
 * @property-read array{'cc_emails'?: list<string>, 'collection'?: mixed, 'expected_version'?: int, 'external_reference_id'?: string|null, 'footer'?: string|null, 'memo'?: string|null, 'metadata'?: array<array-key, string|null>|\stdClass|null, 'payment_due'?: mixed, 'po_number'?: string|null, 'recipient_email'?: string|null, 'reference'?: string|null, 'reminders_paused'?: bool, 'remit_to_address'?: mixed, 'schedule_entries'?: list<mixed>, 'scheduled_issue_at'?: string|\DateTimeInterface|null, 'service_date'?: string|null}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class InvoicesUpdateInput extends Model {
    /** @param array{'invoice_id': string, 'body': array{'cc_emails'?: list<string>, 'collection'?: mixed, 'expected_version'?: int, 'external_reference_id'?: string|null, 'footer'?: string|null, 'memo'?: string|null, 'metadata'?: array<array-key, string|null>|\stdClass|null, 'payment_due'?: mixed, 'po_number'?: string|null, 'recipient_email'?: string|null, 'reference'?: string|null, 'reminders_paused'?: bool, 'remit_to_address'?: mixed, 'schedule_entries'?: list<mixed>, 'scheduled_issue_at'?: string|\DateTimeInterface|null, 'service_date'?: string|null}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InvoicesUpdateInput')); }
    /** Flint invoice ID. Example: "inv_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When invoice_id is omitted; use hasInvoiceId() or valueOrDefault().
     */
    public function getInvoiceId(): string { return $this->get('invoice_id'); }
    public function hasInvoiceId(): bool { return $this->has('invoice_id'); }
    /** The request body for: Update invoice.
     * @return array{'cc_emails'?: list<string>, 'collection'?: mixed, 'expected_version'?: int, 'external_reference_id'?: string|null, 'footer'?: string|null, 'memo'?: string|null, 'metadata'?: array<array-key, string|null>|\stdClass|null, 'payment_due'?: mixed, 'po_number'?: string|null, 'recipient_email'?: string|null, 'reference'?: string|null, 'reminders_paused'?: bool, 'remit_to_address'?: mixed, 'schedule_entries'?: list<mixed>, 'scheduled_issue_at'?: string|\DateTimeInterface|null, 'service_date'?: string|null}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
