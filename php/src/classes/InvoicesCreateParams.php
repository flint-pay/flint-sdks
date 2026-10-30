<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<string> $cc_emails
 * @property-read InvoiceCollectionRequestInput|array<array-key, mixed>|\stdClass $collection
 * @property-read string $external_reference_id
 * @property-read string $footer
 * @property-read CreateInvoiceIssueRequestInput|array<array-key, mixed>|\stdClass $issue
 * @property-read string $memo
 * @property-read MetadataRequestInput|array<array-key, mixed>|\stdClass $metadata
 * @property-read string $order_id
 * @property-read InvoicePaymentDueRequestInput|array<array-key, mixed>|\stdClass $payment_due
 * @property-read string $po_number
 * @property-read CreateInvoiceQuickPayRequestInput|array<array-key, mixed>|\stdClass $quick_pay
 * @property-read string $recipient_email
 * @property-read string $reference
 * @property-read AddressRequestInput|array<array-key, mixed>|\stdClass $remit_to_address
 * @property-read list<InvoiceScheduleEntryWriteInput|array<array-key, mixed>|\stdClass> $schedule_entries
 * @property-read string|\DateTimeInterface|null $scheduled_issue_at
 * @property-read string $service_date
 * @property-read string $type
 * Presence-aware input; omitted fields throw when accessed. */
final class InvoicesCreateParams extends Model {
    /** @param array{'cc_emails'?: list<string>, 'collection'?: InvoiceCollectionRequestInput|array<array-key, mixed>|\stdClass, 'external_reference_id'?: string, 'footer'?: string, 'issue'?: CreateInvoiceIssueRequestInput|array<array-key, mixed>|\stdClass, 'memo'?: string, 'metadata'?: MetadataRequestInput|array<array-key, mixed>|\stdClass, 'order_id': string, 'payment_due'?: InvoicePaymentDueRequestInput|array<array-key, mixed>|\stdClass, 'po_number'?: string, 'quick_pay'?: CreateInvoiceQuickPayRequestInput|array<array-key, mixed>|\stdClass, 'recipient_email'?: string, 'reference'?: string, 'remit_to_address'?: AddressRequestInput|array<array-key, mixed>|\stdClass, 'schedule_entries'?: list<InvoiceScheduleEntryWriteInput|array<array-key, mixed>|\stdClass>, 'scheduled_issue_at'?: string|\DateTimeInterface|null, 'service_date'?: string, 'type': string}|object|array{'cc_emails'?: list<string>, 'collection'?: InvoiceCollectionRequestInput|array<array-key, mixed>|\stdClass, 'external_reference_id'?: string, 'footer'?: string, 'issue'?: CreateInvoiceIssueRequestInput|array<array-key, mixed>|\stdClass, 'memo'?: string, 'metadata'?: MetadataRequestInput|array<array-key, mixed>|\stdClass, 'order_id'?: string, 'payment_due'?: InvoicePaymentDueRequestInput|array<array-key, mixed>|\stdClass, 'po_number'?: string, 'quick_pay': CreateInvoiceQuickPayRequestInput|array<array-key, mixed>|\stdClass, 'recipient_email'?: string, 'reference'?: string, 'remit_to_address'?: AddressRequestInput|array<array-key, mixed>|\stdClass, 'schedule_entries'?: list<InvoiceScheduleEntryWriteInput|array<array-key, mixed>|\stdClass>, 'scheduled_issue_at'?: string|\DateTimeInterface|null, 'service_date'?: string, 'type': string}|object $values */
    public function __construct(mixed $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InvoicesCreateParams')); }
    /** Additional addresses copied on the invoice email and every reminder. [] (Value): string. minLength: 1.
     * @return list<string>
     * @throws SdkError When cc_emails is omitted; use hasCcEmails() or valueOrDefault().
     */
    public function getCcEmails(): array { return $this->get('cc_emails'); }
    public function hasCcEmails(): bool { return $this->has('cc_emails'); }
    /** How the invoice is collected. Omit it to use merchant_default. The invoice's collection object returns the resolved mode, and you can send it back unchanged on update. How an invoice is collected, used when creating or updating an invoice: a `mode`, an optional saved payment method, and a payment policy.
     * @return InvoiceCollectionRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When collection is omitted; use hasCollection() or valueOrDefault().
     */
    public function getCollection(): mixed { return $this->get('collection'); }
    public function hasCollection(): bool { return $this->has('collection'); }
    /** Caller-owned identifier for this resource in an external system. Use it as your sync key: it isn't printed on the invoice, and GET /v1/invoices filters on it by exact match. minLength: 1. maxLength: 255.
     * @return string
     * @throws SdkError When external_reference_id is omitted; use hasExternalReferenceId() or valueOrDefault().
     */
    public function getExternalReferenceId(): string { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** Fine print at the bottom of the invoice and PDF. Omit it to use the invoice settings default_footer. minLength: 1.
     * @return string
     * @throws SdkError When footer is omitted; use hasFooter() or valueOrDefault().
     */
    public function getFooter(): string { return $this->get('footer'); }
    public function hasFooter(): bool { return $this->has('footer'); }
    /** Issue the invoice immediately after creating it. An empty object uses merchant_default delivery. Cannot be combined with a scheduled_issue_at timestamp. Options for issuing an invoice as you create it. `delivery_mode` chooses how the invoice reaches its recipient.
     * @return CreateInvoiceIssueRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When issue is omitted; use hasIssue() or valueOrDefault().
     */
    public function getIssue(): mixed { return $this->get('issue'); }
    public function hasIssue(): bool { return $this->has('issue'); }
    /** Message to the customer, printed on the invoice and PDF. Omit it to use the invoice settings default_memo. minLength: 1.
     * @return string
     * @throws SdkError When memo is omitted; use hasMemo() or valueOrDefault().
     */
    public function getMemo(): string { return $this->get('memo'); }
    public function hasMemo(): bool { return $this->has('memo'); }
    /** Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: 50.
     * @return MetadataRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When metadata is omitted; use hasMetadata() or valueOrDefault().
     */
    public function getMetadata(): mixed { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** The open order to bill. It must have no payments, refunds, or other active invoice. Send exactly one of order_id or quick_pay. minLength: 1. Example: "ord_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When order_id is omitted; use hasOrderId() or valueOrDefault().
     */
    public function getOrderId(): string { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** When the invoice is due. Omit it to use merchant_default. The invoice's payment_due object returns the resolved type, and you can send it back unchanged on update. Default: {"type":"merchant_default"}. When an invoice is due, used when creating or updating an invoice: no due date, a fixed time, payment terms, or a default.
     * @return InvoicePaymentDueRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When payment_due is omitted; use hasPaymentDue() or valueOrDefault().
     */
    public function getPaymentDue(): mixed { return $this->get('payment_due'); }
    public function hasPaymentDue(): bool { return $this->has('payment_due'); }
    /** The buyer's purchase order number, printed on the invoice and PDF. minLength: 1.
     * @return string
     * @throws SdkError When po_number is omitted; use hasPoNumber() or valueOrDefault().
     */
    public function getPoNumber(): string { return $this->get('po_number'); }
    public function hasPoNumber(): bool { return $this->has('po_number'); }
    /** Order details for an invoice with no existing order. Flint creates the backing order from them. Send exactly one of order_id or quick_pay. Inline order details for creating an invoice as `quick_pay`: line items, discounts, notes, customer, tip, and inventory routing.
     * @return CreateInvoiceQuickPayRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When quick_pay is omitted; use hasQuickPay() or valueOrDefault().
     */
    public function getQuickPay(): mixed { return $this->get('quick_pay'); }
    public function hasQuickPay(): bool { return $this->has('quick_pay'); }
    /** Where Flint emails the invoice and its reminders. Required at issue when delivery resolves to email, and when you schedule the issue. minLength: 1.
     * @return string
     * @throws SdkError When recipient_email is omitted; use hasRecipientEmail() or valueOrDefault().
     */
    public function getRecipientEmail(): string { return $this->get('recipient_email'); }
    public function hasRecipientEmail(): bool { return $this->has('recipient_email'); }
    /** Your reference for the invoice, printed on the invoice and PDF. Put the buyer's purchase order number in po_number instead. minLength: 1.
     * @return string
     * @throws SdkError When reference is omitted; use hasReference() or valueOrDefault().
     */
    public function getReference(): string { return $this->get('reference'); }
    public function hasReference(): bool { return $this->has('reference'); }
    /** Where the buyer sends offline payments, printed on the invoice. Omit it to use the invoice settings remit-to address. A complete postal address. State and postal_code are required for US addresses and optional for other countries. Send null or omit line2, state, and postal_code when the address has none.
     * @return AddressRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When remit_to_address is omitted; use hasRemitToAddress() or valueOrDefault().
     */
    public function getRemitToAddress(): mixed { return $this->get('remit_to_address'); }
    public function hasRemitToAddress(): bool { return $this->has('remit_to_address'); }
    /** Complete draft payment schedule with at most 14 entries. Validation errors identify the entry by index, such as schedule_entries[3].kind. Enum values are case-sensitive and must not contain surrounding whitespace. Omission preserves the current or default schedule; [] clears the authored schedule. Null is not accepted. On PATCH, include invoice_schedule_entry_id to retain an entry and expected_version to detect concurrent edits. maxItems: 14. [] (Value): {@see InvoiceScheduleEntryWriteInput}. One payment schedule entry you supply when creating or updating an invoice. Set its kind, how much it collects, and when it is due.
     * @return list<InvoiceScheduleEntryWriteInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When schedule_entries is omitted; use hasScheduleEntries() or valueOrDefault().
     */
    public function getScheduleEntries(): array { return $this->get('schedule_entries'); }
    public function hasScheduleEntries(): bool { return $this->has('schedule_entries'); }
    /** When Flint issues and delivers this draft, as an RFC 3339 timestamp in the future. A scheduled issue delivers by email, so the draft needs recipient_email. Cannot be combined with issue. null is the same as omitting it. Format: date-time. minLength: 1.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When scheduled_issue_at is omitted; use hasScheduledIssueAt() or valueOrDefault().
     */
    public function getScheduledIssueAt(): string|\DateTimeInterface|null { return $this->get('scheduled_issue_at'); }
    public function hasScheduledIssueAt(): bool { return $this->has('scheduled_issue_at'); }
    /** The calendar date of the billed service, in YYYY-MM-DD format. The invoice and PDF print it as written, without timezone conversion. Format: date. minLength: 1.
     * @return string
     * @throws SdkError When service_date is omitted; use hasServiceDate() or valueOrDefault().
     */
    public function getServiceDate(): string { return $this->get('service_date'); }
    public function hasServiceDate(): bool { return $this->has('service_date'); }
    /** Selects the type branch. Value enum: "order", "quick_pay".
     * @return string
     * @throws SdkError When type is omitted; use hasType() or valueOrDefault().
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
}
