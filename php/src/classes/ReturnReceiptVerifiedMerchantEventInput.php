<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $api_version
 * @property-read string|\DateTimeInterface $created_at
 * @property-read array{'object': array{'correction_reason'?: string, 'correction_reason_message'?: string, 'created_at': string|\DateTimeInterface, 'external_actor_id'?: string, 'external_reference_id'?: string, 'generated_dispositions': list<ReturnDispositionInput|array<array-key, mixed>|\stdClass>, 'line_items': list<ReturnReceiptLineItemInput|array<array-key, mixed>|\stdClass>, 'received_at': string|\DateTimeInterface, 'receiving_location_id': string, 'return_id': string, 'return_receipt_id': string, 'shipment_id'?: string, 'source_system': array{'external_source_id'?: string, 'source_system_type': string}|object|null, 'status': string, 'superseded_at'?: string|\DateTimeInterface, 'superseded_by_return_receipt_id'?: string, 'supersedes_return_receipt_id'?: string, 'updated_at': string|\DateTimeInterface, 'version': int, ...}|object}|object $data
 * @property-read string $event_type
 * @property-read string $merchant_id
 * @property-read string $mode
 * @property-read int $payload_version
 * @property-read array{'id': string, 'idempotency_key'?: string}|object|null $request
 * @property-read bool $test
 * @property-read string $webhook_event_id
 * Presence-aware input; omitted fields throw when accessed. */
final class ReturnReceiptVerifiedMerchantEventInput extends Model {
    /** @param array{'api_version': string, 'created_at': string|\DateTimeInterface, 'data': array{'object': array{'correction_reason'?: string, 'correction_reason_message'?: string, 'created_at': string|\DateTimeInterface, 'external_actor_id'?: string, 'external_reference_id'?: string, 'generated_dispositions': list<ReturnDispositionInput|array<array-key, mixed>|\stdClass>, 'line_items': list<ReturnReceiptLineItemInput|array<array-key, mixed>|\stdClass>, 'received_at': string|\DateTimeInterface, 'receiving_location_id': string, 'return_id': string, 'return_receipt_id': string, 'shipment_id'?: string, 'source_system': array{'external_source_id'?: string, 'source_system_type': string}|object|null, 'status': string, 'superseded_at'?: string|\DateTimeInterface, 'superseded_by_return_receipt_id'?: string, 'supersedes_return_receipt_id'?: string, 'updated_at': string|\DateTimeInterface, 'version': int, ...}|object}|object, 'event_type': string, 'merchant_id': string, 'mode': string, 'payload_version': int, 'request': array{'id': string, 'idempotency_key'?: string}|object|null, 'test': bool, 'webhook_event_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnReceiptVerifiedMerchantEventInput')); }
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
    /**  object (Required): object and {@see ReturnReceiptInput}. A record of returned items arriving at a location. object.correction_reason (Optional): string.  Value enum: "entry_error", "duplicate_observation", "source_correction", "reconciliation_correction", "other". object.correction_reason_message (Optional): string. object.created_at (Required): string. RFC3339 timestamp. Format: date-time. object.external_actor_id (Optional): string. Your identifier for the actor who recorded the event. Don't put secrets in this field. maxLength: 255. object.external_reference_id (Optional): string. Caller-owned identifier for this resource in an external system. maxLength: 255. object.generated_dispositions (Required): Array of {@see ReturnDispositionInput}. object.generated_dispositions[] (Value): {@see ReturnDispositionInput}. A decision about how returned merchandise will be handled. object.line_items (Required): Array of {@see ReturnReceiptLineItemInput}. object.line_items[] (Value): {@see ReturnReceiptLineItemInput}. A returned item recorded as received. object.received_at (Required): string. RFC3339 timestamp. Format: date-time. object.receiving_location_id (Required): string. object.return_id (Required): string. object.return_receipt_id (Required): string. object.shipment_id (Optional): string. object.source_system (Required): {@see ReturnSourceSystemInput} or null. object.source_system.anyOf[1] (Value): {@see ReturnSourceSystemInput}. The system a return event came from, such as a point of sale or warehouse system, with its own identifier. object.source_system.anyOf[2] (Value): null. object.status (Required): string.  Value enum: "current", "superseded". object.superseded_at (Optional): string. RFC3339 timestamp. Format: date-time. object.superseded_by_return_receipt_id (Optional): string. object.supersedes_return_receipt_id (Optional): string. object.updated_at (Required): string. RFC3339 timestamp. Format: date-time. object.version (Required): integer. Format: int64. minimum: 1.
     * @return array{'object': array{'correction_reason'?: string, 'correction_reason_message'?: string, 'created_at': string|\DateTimeInterface, 'external_actor_id'?: string, 'external_reference_id'?: string, 'generated_dispositions': list<ReturnDispositionInput|array<array-key, mixed>|\stdClass>, 'line_items': list<ReturnReceiptLineItemInput|array<array-key, mixed>|\stdClass>, 'received_at': string|\DateTimeInterface, 'receiving_location_id': string, 'return_id': string, 'return_receipt_id': string, 'shipment_id'?: string, 'source_system': array{'external_source_id'?: string, 'source_system_type': string}|object|null, 'status': string, 'superseded_at'?: string|\DateTimeInterface, 'superseded_by_return_receipt_id'?: string, 'supersedes_return_receipt_id'?: string, 'updated_at': string|\DateTimeInterface, 'version': int, ...}|object}|object
     * @throws SdkError When data is omitted; use hasData() or valueOrDefault().
     */
    public function getData(): array|object { return $this->get('data'); }
    public function hasData(): bool { return $this->has('data'); }
    /** Value enum: "return_receipt.verified".
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
