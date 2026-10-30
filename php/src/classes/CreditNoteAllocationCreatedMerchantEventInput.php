<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $api_version
 * @property-read string|\DateTimeInterface $created_at
 * @property-read array{'object': array{'allocated_at': string|\DateTimeInterface, 'amount_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'credit_note_allocation_id': string, 'credit_note_id': string, 'idempotency_key': string, 'invoice_id': string, 'reversed_at'?: string|\DateTimeInterface, ...}|object}|object $data
 * @property-read string $event_type
 * @property-read string $merchant_id
 * @property-read string $mode
 * @property-read int $payload_version
 * @property-read array{'id': string, 'idempotency_key'?: string}|object|null $request
 * @property-read bool $test
 * @property-read string $webhook_event_id
 * Presence-aware input; omitted fields throw when accessed. */
final class CreditNoteAllocationCreatedMerchantEventInput extends Model {
    /** @param array{'api_version': string, 'created_at': string|\DateTimeInterface, 'data': array{'object': array{'allocated_at': string|\DateTimeInterface, 'amount_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'credit_note_allocation_id': string, 'credit_note_id': string, 'idempotency_key': string, 'invoice_id': string, 'reversed_at'?: string|\DateTimeInterface, ...}|object}|object, 'event_type': string, 'merchant_id': string, 'mode': string, 'payload_version': int, 'request': array{'id': string, 'idempotency_key'?: string}|object|null, 'test': bool, 'webhook_event_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreditNoteAllocationCreatedMerchantEventInput')); }
    /** Format: date.
     * @return string
     * @throws SdkError When api_version is omitted; use hasApiVersion() or valueOrDefault().
     */
    public function getApiVersion(): string { return $this->get('api_version'); }
    public function hasApiVersion(): bool { return $this->has('api_version'); }
    /** Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string|\DateTimeInterface { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /**  object (Required): object and {@see CreditNoteAllocationInput}. One application of credit to the invoice. Allocations are append-only: a reversal sets reversed_at rather than removing the row. object.allocated_at (Required): string. RFC3339 timestamp. Format: date-time. object.amount_money (Required): {@see MoneyValueInput}. Credit applied to the invoice balance. Monetary amount represented as integer minor units plus an ISO 4217 currency code. object.credit_note_allocation_id (Required): string. Unique identifier of the allocation. object.credit_note_id (Required): string. The credit note whose credit was applied. object.idempotency_key (Required): string. The key the caller sent when allocating, or issue: followed by the issue request's Idempotency-Key for an allocation made on issue. It is this allocation's identity and is filterable on the allocations list. object.invoice_id (Required): string. The invoice whose balance the credit reduced. object.reversed_at (Optional): string. When the allocation was reversed and its credit returned. Absent while the allocation stands. Format: date-time.
     * @return array{'object': array{'allocated_at': string|\DateTimeInterface, 'amount_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'credit_note_allocation_id': string, 'credit_note_id': string, 'idempotency_key': string, 'invoice_id': string, 'reversed_at'?: string|\DateTimeInterface, ...}|object}|object
     * @throws SdkError When data is omitted; use hasData() or valueOrDefault().
     */
    public function getData(): array|object { return $this->get('data'); }
    public function hasData(): bool { return $this->has('data'); }
    /** Value enum: "credit_note_allocation.created".
     * @return string
     * @throws SdkError When event_type is omitted; use hasEventType() or valueOrDefault().
     */
    public function getEventType(): string { return $this->get('event_type'); }
    public function hasEventType(): bool { return $this->has('event_type'); }
    /** merchant_id
     * @return string
     * @throws SdkError When merchant_id is omitted; use hasMerchantId() or valueOrDefault().
     */
    public function getMerchantId(): string { return $this->get('merchant_id'); }
    public function hasMerchantId(): bool { return $this->has('merchant_id'); }
    /** Value enum: "test", "live".
     * @return string
     * @throws SdkError When mode is omitted; use hasMode() or valueOrDefault().
     */
    public function getMode(): string { return $this->get('mode'); }
    public function hasMode(): bool { return $this->has('mode'); }
    /** 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Value enum: 1, 2.
     * @return int
     * @throws SdkError When payload_version is omitted; use hasPayloadVersion() or valueOrDefault().
     */
    public function getPayloadVersion(): int { return $this->get('payload_version'); }
    public function hasPayloadVersion(): bool { return $this->has('payload_version'); }
    /**  id (Required): string. idempotency_key (Optional): string. The Idempotency-Key the originating request sent. Absent when it sent none.
     * @return array{'id': string, 'idempotency_key'?: string}|object|null
     * @throws SdkError When request is omitted; use hasRequest() or valueOrDefault().
     */
    public function getRequest(): array|object|null { return $this->get('request'); }
    public function hasRequest(): bool { return $this->has('request'); }
    /** true for a synthetic event sent from the test-events endpoint, false otherwise.
     * @return bool
     * @throws SdkError When test is omitted; use hasTest() or valueOrDefault().
     */
    public function getTest(): bool { return $this->get('test'); }
    public function hasTest(): bool { return $this->has('test'); }
    /** webhook_event_id
     * @return string
     * @throws SdkError When webhook_event_id is omitted; use hasWebhookEventId() or valueOrDefault().
     */
    public function getWebhookEventId(): string { return $this->get('webhook_event_id'); }
    public function hasWebhookEventId(): bool { return $this->has('webhook_event_id'); }
}
