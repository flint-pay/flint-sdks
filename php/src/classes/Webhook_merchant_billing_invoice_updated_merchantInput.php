<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $api_version
 * @property-read string|\DateTimeInterface $created_at
 * @property-read array{'object': array{'created_at': string|\DateTimeInterface, 'credit_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'due_at': string|\DateTimeInterface, 'invoice_number': string, 'issued_at'?: string|\DateTimeInterface, 'line_items': list<MerchantBillingInvoiceLineItemInput|array<array-key, mixed>|\stdClass>, 'merchant_billing_invoice_id': string, 'outstanding_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'paid_at'?: string|\DateTimeInterface, 'period_end_at': string|\DateTimeInterface, 'period_start_at': string|\DateTimeInterface, 'status': string, 'subtotal_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'total_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'updated_at': string|\DateTimeInterface, 'voided_at'?: string|\DateTimeInterface, ...}|object}|object $data
 * @property-read string $event_type
 * @property-read string $merchant_id
 * @property-read string $mode
 * @property-read int $payload_version
 * @property-read array{'id': string, 'idempotency_key'?: string}|object|null $request
 * @property-read bool $test
 * @property-read string $webhook_event_id
 * Presence-aware input; omitted fields throw when accessed. */
final class Webhook_merchant_billing_invoice_updated_merchantInput extends Model {
    /** @param array{'api_version': string, 'created_at': string|\DateTimeInterface, 'data': array{'object': array{'created_at': string|\DateTimeInterface, 'credit_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'due_at': string|\DateTimeInterface, 'invoice_number': string, 'issued_at'?: string|\DateTimeInterface, 'line_items': list<MerchantBillingInvoiceLineItemInput|array<array-key, mixed>|\stdClass>, 'merchant_billing_invoice_id': string, 'outstanding_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'paid_at'?: string|\DateTimeInterface, 'period_end_at': string|\DateTimeInterface, 'period_start_at': string|\DateTimeInterface, 'status': string, 'subtotal_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'total_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'updated_at': string|\DateTimeInterface, 'voided_at'?: string|\DateTimeInterface, ...}|object}|object, 'event_type': string, 'merchant_id': string, 'mode': string, 'payload_version': int, 'request': array{'id': string, 'idempotency_key'?: string}|object|null, 'test': bool, 'webhook_event_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('Webhook_merchant_billing_invoice_updated_merchantInput')); }
    /** Shape $ (Value): string. Format: date.
     * @return string
     * @throws SdkError When api_version is omitted; use hasApiVersion() or valueOrDefault().
     */
    public function getApiVersion(): string { return $this->get('api_version'); }
    public function hasApiVersion(): bool { return $this->has('api_version'); }
    /** Shape $ (Value): string. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string|\DateTimeInterface { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Shape $ (Value): object. Shape $.object (Required): object and {@see MerchantBillingInvoiceInput}. A Flint invoice for the merchant's Flint subscription. Shape $.object.created_at (Required): string. RFC3339 timestamp. Format: date-time. Shape $.object.credit_money (Required): {@see MoneyValueInput}. Monetary amount represented as integer minor units plus an ISO 4217 currency code. Shape $.object.due_at (Required): string. RFC3339 timestamp. Format: date-time. Shape $.object.invoice_number (Required): string. Shape $.object.issued_at (Optional): string. RFC3339 timestamp. Format: date-time. Shape $.object.line_items (Required): Array of {@see MerchantBillingInvoiceLineItemInput}. Invoice-owned line items. Subscription totals sum to subtotal_money; credit totals sum to credit_money. Shape $.object.line_items[] (Value): {@see MerchantBillingInvoiceLineItemInput}. One line on a merchant billing invoice, either a subscription charge or a credit, with quantity, unit price, and total. Shape $.object.merchant_billing_invoice_id (Required): string. Shape $.object.outstanding_money (Required): {@see MoneyValueInput}. Monetary amount represented as integer minor units plus an ISO 4217 currency code. Shape $.object.paid_at (Optional): string. RFC3339 timestamp. Format: date-time. Shape $.object.period_end_at (Required): string. Exclusive invoice billing period end as an RFC 3339 UTC instant. Format: date-time. Shape $.object.period_start_at (Required): string. Inclusive invoice billing period start as an RFC 3339 UTC instant. Format: date-time. Shape $.object.status (Required): string.  Value enum: "draft", "open", "collecting", "paid", "delinquent", "void", "written_off". Shape $.object.subtotal_money (Required): {@see MoneyValueInput}. Monetary amount represented as integer minor units plus an ISO 4217 currency code. Shape $.object.total_money (Required): {@see MoneyValueInput}. Monetary amount represented as integer minor units plus an ISO 4217 currency code. Shape $.object.updated_at (Required): string. RFC3339 timestamp. Format: date-time. Shape $.object.voided_at (Optional): string. RFC3339 timestamp. Format: date-time.
     * @return array{'object': array{'created_at': string|\DateTimeInterface, 'credit_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'due_at': string|\DateTimeInterface, 'invoice_number': string, 'issued_at'?: string|\DateTimeInterface, 'line_items': list<MerchantBillingInvoiceLineItemInput|array<array-key, mixed>|\stdClass>, 'merchant_billing_invoice_id': string, 'outstanding_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'paid_at'?: string|\DateTimeInterface, 'period_end_at': string|\DateTimeInterface, 'period_start_at': string|\DateTimeInterface, 'status': string, 'subtotal_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'total_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'updated_at': string|\DateTimeInterface, 'voided_at'?: string|\DateTimeInterface, ...}|object}|object
     * @throws SdkError When data is omitted; use hasData() or valueOrDefault().
     */
    public function getData(): array|object { return $this->get('data'); }
    public function hasData(): bool { return $this->has('data'); }
    /** Shape $ (Value): string.  Value enum: "merchant_billing_invoice.updated".
     * @return string
     * @throws SdkError When event_type is omitted; use hasEventType() or valueOrDefault().
     */
    public function getEventType(): string { return $this->get('event_type'); }
    public function hasEventType(): bool { return $this->has('event_type'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When merchant_id is omitted; use hasMerchantId() or valueOrDefault().
     */
    public function getMerchantId(): string { return $this->get('merchant_id'); }
    public function hasMerchantId(): bool { return $this->has('merchant_id'); }
    /** Shape $ (Value): string.  Value enum: "test", "live".
     * @return string
     * @throws SdkError When mode is omitted; use hasMode() or valueOrDefault().
     */
    public function getMode(): string { return $this->get('mode'); }
    public function hasMode(): bool { return $this->has('mode'); }
    /** Shape $ (Value): integer. 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Value enum: 1, 2.
     * @return int
     * @throws SdkError When payload_version is omitted; use hasPayloadVersion() or valueOrDefault().
     */
    public function getPayloadVersion(): int { return $this->get('payload_version'); }
    public function hasPayloadVersion(): bool { return $this->has('payload_version'); }
    /** Shape $ (Value): object or null. Shape $.id (Required): string. Shape $.idempotency_key (Optional): string. The Idempotency-Key the originating request sent. Absent when it sent none.
     * @return array{'id': string, 'idempotency_key'?: string}|object|null
     * @throws SdkError When request is omitted; use hasRequest() or valueOrDefault().
     */
    public function getRequest(): array|object|null { return $this->get('request'); }
    public function hasRequest(): bool { return $this->has('request'); }
    /** Shape $ (Value): boolean. true for a synthetic event sent from the test-events endpoint, false otherwise.
     * @return bool
     * @throws SdkError When test is omitted; use hasTest() or valueOrDefault().
     */
    public function getTest(): bool { return $this->get('test'); }
    public function hasTest(): bool { return $this->has('test'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When webhook_event_id is omitted; use hasWebhookEventId() or valueOrDefault().
     */
    public function getWebhookEventId(): string { return $this->get('webhook_event_id'); }
    public function hasWebhookEventId(): bool { return $this->has('webhook_event_id'); }
}
