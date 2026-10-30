<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read array{'cc_emails'?: list<string>, 'collection'?: mixed, 'external_reference_id'?: string, 'footer'?: string, 'issue'?: mixed, 'memo'?: string, 'metadata'?: mixed, 'order_id': string, 'payment_due'?: mixed, 'po_number'?: string, 'quick_pay'?: mixed, 'recipient_email'?: string, 'reference'?: string, 'remit_to_address'?: mixed, 'schedule_entries'?: list<mixed>, 'scheduled_issue_at'?: string|\DateTimeInterface|null, 'service_date'?: string, 'type': string}|object|array{'cc_emails'?: list<string>, 'collection'?: mixed, 'external_reference_id'?: string, 'footer'?: string, 'issue'?: mixed, 'memo'?: string, 'metadata'?: mixed, 'order_id'?: string, 'payment_due'?: mixed, 'po_number'?: string, 'quick_pay': mixed, 'recipient_email'?: string, 'reference'?: string, 'remit_to_address'?: mixed, 'schedule_entries'?: list<mixed>, 'scheduled_issue_at'?: string|\DateTimeInterface|null, 'service_date'?: string, 'type': string}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class InvoicesCreateInput extends Model {
    /** @param array{'body': array{'cc_emails'?: list<string>, 'collection'?: mixed, 'external_reference_id'?: string, 'footer'?: string, 'issue'?: mixed, 'memo'?: string, 'metadata'?: mixed, 'order_id': string, 'payment_due'?: mixed, 'po_number'?: string, 'quick_pay'?: mixed, 'recipient_email'?: string, 'reference'?: string, 'remit_to_address'?: mixed, 'schedule_entries'?: list<mixed>, 'scheduled_issue_at'?: string|\DateTimeInterface|null, 'service_date'?: string, 'type': string}|object|array{'cc_emails'?: list<string>, 'collection'?: mixed, 'external_reference_id'?: string, 'footer'?: string, 'issue'?: mixed, 'memo'?: string, 'metadata'?: mixed, 'order_id'?: string, 'payment_due'?: mixed, 'po_number'?: string, 'quick_pay': mixed, 'recipient_email'?: string, 'reference'?: string, 'remit_to_address'?: mixed, 'schedule_entries'?: list<mixed>, 'scheduled_issue_at'?: string|\DateTimeInterface|null, 'service_date'?: string, 'type': string}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InvoicesCreateInput')); }
    /** The request body for: Create invoice.
     * @return array{'cc_emails'?: list<string>, 'collection'?: mixed, 'external_reference_id'?: string, 'footer'?: string, 'issue'?: mixed, 'memo'?: string, 'metadata'?: mixed, 'order_id': string, 'payment_due'?: mixed, 'po_number'?: string, 'quick_pay'?: mixed, 'recipient_email'?: string, 'reference'?: string, 'remit_to_address'?: mixed, 'schedule_entries'?: list<mixed>, 'scheduled_issue_at'?: string|\DateTimeInterface|null, 'service_date'?: string, 'type': string}|object|array{'cc_emails'?: list<string>, 'collection'?: mixed, 'external_reference_id'?: string, 'footer'?: string, 'issue'?: mixed, 'memo'?: string, 'metadata'?: mixed, 'order_id'?: string, 'payment_due'?: mixed, 'po_number'?: string, 'quick_pay': mixed, 'recipient_email'?: string, 'reference'?: string, 'remit_to_address'?: mixed, 'schedule_entries'?: list<mixed>, 'scheduled_issue_at'?: string|\DateTimeInterface|null, 'service_date'?: string, 'type': string}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): mixed { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
