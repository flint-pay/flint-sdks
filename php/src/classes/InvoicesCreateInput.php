<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read array{'order_id': mixed, ...}|object|array{'quick_pay': mixed, ...}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class InvoicesCreateInput extends Model {
    /** @param array{'Idempotency-Key'?: string, 'body': array{'order_id': mixed, ...}|object|array{'quick_pay': mixed, ...}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InvoicesCreateInput')); }
    /** Shape $ (Value): string. maxLength: 255.
     * @return string
     * @throws SdkError When Idempotency-Key is omitted; use hasIdempotencyKey() or valueOrDefault().
     */
    public function getIdempotencyKey(): string { return $this->get('Idempotency-Key'); }
    public function hasIdempotencyKey(): bool { return $this->has('Idempotency-Key'); }
    /** Shape $ (Value): Alternative shapes (see declared variants) and object and Alternative shapes (see declared variants). The request body for: Create invoice. Shape $.cc_emails (Optional): Array of string. Shape $.cc_emails[] (Value): string. minLength: 1. Shape $.collection (Optional): any. How an invoice is collected, used when creating or updating an invoice: a `mode`, an optional saved payment method, and a payment policy. Shape $.external_reference_id (Optional): string. Caller-owned identifier for this resource in an external system. minLength: 1. maxLength: 255. Shape $.footer (Optional): string. minLength: 1. Shape $.issue (Optional): any. Issue the invoice immediately after creating it. An empty object uses merchant_default delivery. Cannot be combined with a scheduled_issue_at timestamp. Shape $.memo (Optional): string. minLength: 1. Shape $.metadata (Optional): Map of string. Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Shape $.metadata.* (Value): string. minLength: 1. Shape $.order_id (Optional): string. minLength: 1. Shape $.payment_due (Optional): any. When an invoice is due, used when creating or updating an invoice: no due date, a fixed time, payment terms, or a default. Default: {"type":"merchant_default"}. Shape $.po_number (Optional): string. minLength: 1. Shape $.quick_pay (Optional): any. Shape $.recipient_email (Optional): string. minLength: 1. Shape $.reference (Optional): string. minLength: 1. Shape $.remit_to_address (Optional): any. Shape $.schedule_entries (Optional): Array of any. Complete draft payment schedule with at most 14 entries. Validation errors identify the entry by index, such as schedule_entries[3].kind. Enum values are case-sensitive and must not contain surrounding whitespace. Omission preserves the current or default schedule; [] clears the authored schedule. Null is not accepted. On PATCH, include invoice_schedule_entry_id to retain an entry and expected_version to detect concurrent edits. maxItems: 14. Shape $.schedule_entries[] (Value): any. Shape $.scheduled_issue_at (Optional): string or null. RFC3339 timestamp. Send null to clear it. Format: date-time. minLength: 1. Shape $.service_date (Optional): string. Calendar date in YYYY-MM-DD format. Format: date. minLength: 1. Shape $.oneOf[1] (Value): object. Shape $.oneOf[2] (Value): object. Shape $.oneOf[1] (Value): any. Shape $.oneOf[2] (Value): any.
     * @return array{'order_id': mixed, ...}|object|array{'quick_pay': mixed, ...}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): mixed { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
