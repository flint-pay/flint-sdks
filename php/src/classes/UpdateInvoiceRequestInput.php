<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<string> $cc_emails
 * @property-read InvoiceCollectionRequestInput|array<array-key, mixed>|\stdClass $collection
 * @property-read string $expected_version
 * @property-read string|null $external_reference_id
 * @property-read string|null $footer
 * @property-read string|null $memo
 * @property-read array<array-key, string|null>|\stdClass|null $metadata
 * @property-read InvoicePaymentDueRequestInput|array<array-key, mixed>|\stdClass $payment_due
 * @property-read string|null $po_number
 * @property-read string|null $recipient_email
 * @property-read string|null $reference
 * @property-read bool $reminders_paused
 * @property-read AddressRequestInput|array<array-key, mixed>|\stdClass $remit_to_address
 * @property-read list<InvoiceScheduleEntryWriteInput|array<array-key, mixed>|\stdClass> $schedule_entries
 * @property-read string|\DateTimeInterface|null $scheduled_issue_at
 * @property-read string|null $service_date
 * Presence-aware input; omitted fields throw when accessed. */
final class UpdateInvoiceRequestInput extends Model {
    /** @param array{'cc_emails'?: list<string>, 'collection'?: InvoiceCollectionRequestInput|array<array-key, mixed>|\stdClass, 'expected_version'?: string, 'external_reference_id'?: string|null, 'footer'?: string|null, 'memo'?: string|null, 'metadata'?: array<array-key, string|null>|\stdClass|null, 'payment_due'?: InvoicePaymentDueRequestInput|array<array-key, mixed>|\stdClass, 'po_number'?: string|null, 'recipient_email'?: string|null, 'reference'?: string|null, 'reminders_paused'?: bool, 'remit_to_address'?: AddressRequestInput|array<array-key, mixed>|\stdClass, 'schedule_entries'?: list<InvoiceScheduleEntryWriteInput|array<array-key, mixed>|\stdClass>, 'scheduled_issue_at'?: string|\DateTimeInterface|null, 'service_date'?: string|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('UpdateInvoiceRequestInput')); }
    /** Shape $ (Value): Array of string. Additional addresses copied on the invoice email and every reminder. Send the complete list; [] removes every address. Shape $[] (Value): string. minLength: 1.
     * @return list<string>
     * @throws SdkError When cc_emails is omitted; use hasCcEmails() or valueOrDefault().
     */
    public function getCcEmails(): array { return $this->get('cc_emails'); }
    public function hasCcEmails(): bool { return $this->has('cc_emails'); }
    /** Shape $ (Value): {@see InvoiceCollectionRequestInput}. How the invoice is collected. Send the invoice's collection object back unchanged, or a new one. merchant_default resolves again from invoice settings when the draft is written. How an invoice is collected, used when creating or updating an invoice: a `mode`, an optional saved payment method, and a payment policy.
     * @return InvoiceCollectionRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When collection is omitted; use hasCollection() or valueOrDefault().
     */
    public function getCollection(): mixed { return $this->get('collection'); }
    public function hasCollection(): bool { return $this->has('collection'); }
    /** Shape $ (Value): integer string. Invoice version last read. Required when schedule_entries is present. Required when any of these fields is present: schedule_entries. Use an integer string (decimal digits), not a floating-point number. Format: int64. minimum: 1.
     * @return string
     * @throws SdkError When expected_version is omitted; use hasExpectedVersion() or valueOrDefault().
     */
    public function getExpectedVersion(): string { return $this->get('expected_version'); }
    public function hasExpectedVersion(): bool { return $this->has('expected_version'); }
    /** Shape $ (Value): string or null. Caller-owned identifier for this resource in an external system. Use it as your sync key: it isn't printed on the invoice, and GET /v1/invoices filters on it by exact match. Send null to clear it. minLength: 1. maxLength: 255.
     * @return string|null
     * @throws SdkError When external_reference_id is omitted; use hasExternalReferenceId() or valueOrDefault().
     */
    public function getExternalReferenceId(): string|null { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** Shape $ (Value): string or null. Fine print at the bottom of the invoice and PDF. Send null to clear it. minLength: 1.
     * @return string|null
     * @throws SdkError When footer is omitted; use hasFooter() or valueOrDefault().
     */
    public function getFooter(): string|null { return $this->get('footer'); }
    public function hasFooter(): bool { return $this->has('footer'); }
    /** Shape $ (Value): string or null. Message to the customer, printed on the invoice and PDF. Send null to clear it. minLength: 1.
     * @return string|null
     * @throws SdkError When memo is omitted; use hasMemo() or valueOrDefault().
     */
    public function getMemo(): string|null { return $this->get('memo'); }
    public function hasMemo(): bool { return $this->has('memo'); }
    /** Shape $ (Value): Map of (string or null) or null. Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Shape $.* (Value): string or null. minLength: 1.
     * @return array<array-key, string|null>|\stdClass|null
     * @throws SdkError When metadata is omitted; use hasMetadata() or valueOrDefault().
     */
    public function getMetadata(): array|object|null { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** Shape $ (Value): {@see InvoicePaymentDueRequestInput}. When the invoice is due. Send the invoice's payment_due object back unchanged, or a new one. Sending payment_terms captures the term's current revision again. When an invoice is due, used when creating or updating an invoice: no due date, a fixed time, payment terms, or a default.
     * @return InvoicePaymentDueRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When payment_due is omitted; use hasPaymentDue() or valueOrDefault().
     */
    public function getPaymentDue(): mixed { return $this->get('payment_due'); }
    public function hasPaymentDue(): bool { return $this->has('payment_due'); }
    /** Shape $ (Value): string or null. The buyer's purchase order number, printed on the invoice and PDF. Send null to clear it. minLength: 1.
     * @return string|null
     * @throws SdkError When po_number is omitted; use hasPoNumber() or valueOrDefault().
     */
    public function getPoNumber(): string|null { return $this->get('po_number'); }
    public function hasPoNumber(): bool { return $this->has('po_number'); }
    /** Shape $ (Value): string or null. Where Flint emails the invoice and its reminders. Required at issue when delivery resolves to email, and when you schedule the issue. Send null to clear it. minLength: 1.
     * @return string|null
     * @throws SdkError When recipient_email is omitted; use hasRecipientEmail() or valueOrDefault().
     */
    public function getRecipientEmail(): string|null { return $this->get('recipient_email'); }
    public function hasRecipientEmail(): bool { return $this->has('recipient_email'); }
    /** Shape $ (Value): string or null. Your reference for the invoice, printed on the invoice and PDF. Put the buyer's purchase order number in po_number instead. Send null to clear it. minLength: 1.
     * @return string|null
     * @throws SdkError When reference is omitted; use hasReference() or valueOrDefault().
     */
    public function getReference(): string|null { return $this->get('reference'); }
    public function hasReference(): bool { return $this->has('reference'); }
    /** Shape $ (Value): boolean. Pauses (true) or resumes (false) the automatic reminder cadence. Accepted only on an open or partially paid invoice with a balance remaining, and only alone or with expected_version: every other field is draft-only. While paused, manual send-reminder calls still work, and invoice.overdue and invoice.late_fee_due still fire. On resume, reminder times that passed while paused do not fire. Sending the current value succeeds without changing the invoice.
     * @return bool
     * @throws SdkError When reminders_paused is omitted; use hasRemindersPaused() or valueOrDefault().
     */
    public function getRemindersPaused(): bool { return $this->get('reminders_paused'); }
    public function hasRemindersPaused(): bool { return $this->has('reminders_paused'); }
    /** Shape $ (Value): {@see AddressRequestInput}. Where the buyer sends offline payments, printed on the invoice. Omit it to use the invoice settings remit-to address. A postal address you supply when creating or updating a customer, invoice, fulfillment, or delivery selection. Send null for `line2` to clear it.
     * @return AddressRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When remit_to_address is omitted; use hasRemitToAddress() or valueOrDefault().
     */
    public function getRemitToAddress(): mixed { return $this->get('remit_to_address'); }
    public function hasRemitToAddress(): bool { return $this->has('remit_to_address'); }
    /** Shape $ (Value): Array of {@see InvoiceScheduleEntryWriteInput}. Complete draft payment schedule with at most 14 entries. Validation errors identify the entry by index, such as schedule_entries[3].kind. Enum values are case-sensitive and must not contain surrounding whitespace. Omission preserves the current or default schedule; [] clears the authored schedule. Null is not accepted. On PATCH, include invoice_schedule_entry_id to retain an entry and expected_version to detect concurrent edits. maxItems: 14. Shape $[] (Value): {@see InvoiceScheduleEntryWriteInput}. One payment schedule entry you supply when creating or updating an invoice. Set its kind, how much it collects, and when it is due.
     * @return list<InvoiceScheduleEntryWriteInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When schedule_entries is omitted; use hasScheduleEntries() or valueOrDefault().
     */
    public function getScheduleEntries(): array { return $this->get('schedule_entries'); }
    public function hasScheduleEntries(): bool { return $this->has('schedule_entries'); }
    /** Shape $ (Value): string or null. When Flint issues and delivers this draft, as an RFC 3339 timestamp in the future. A scheduled issue delivers by email, so the draft needs recipient_email. Clearing it cancels the scheduled issue. Send null to clear it. Format: date-time. minLength: 1.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When scheduled_issue_at is omitted; use hasScheduledIssueAt() or valueOrDefault().
     */
    public function getScheduledIssueAt(): string|\DateTimeInterface|null { return $this->get('scheduled_issue_at'); }
    public function hasScheduledIssueAt(): bool { return $this->has('scheduled_issue_at'); }
    /** Shape $ (Value): string or null. The calendar date of the billed service, in YYYY-MM-DD format. The invoice and PDF print it as written, without timezone conversion. Send null to clear it. Format: date. minLength: 1.
     * @return string|null
     * @throws SdkError When service_date is omitted; use hasServiceDate() or valueOrDefault().
     */
    public function getServiceDate(): string|null { return $this->get('service_date'); }
    public function hasServiceDate(): bool { return $this->has('service_date'); }
}
