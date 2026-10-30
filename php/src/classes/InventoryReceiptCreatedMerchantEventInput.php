<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $api_version
 * @property-read string|\DateTimeInterface $created_at
 * @property-read array{'object': array{'created_at': string|\DateTimeInterface, 'external_actor_id'?: string, 'idempotency_key'?: string, 'inventory_receipt_id': string, 'lines': list<InventoryReceiptLineInput|array<array-key, mixed>|\stdClass>, 'occurred_at': string|\DateTimeInterface, 'return_disposition_id'?: string, 'return_id'?: string, 'source_system': array{'external_source_id'?: string, 'type': string, ...}|object|null, ...}|object}|object $data
 * @property-read string $event_type
 * @property-read string $merchant_id
 * @property-read string $mode
 * @property-read int $payload_version
 * @property-read array{'id': string, 'idempotency_key'?: string}|object|null $request
 * @property-read bool $test
 * @property-read string $webhook_event_id
 * Presence-aware input; omitted fields throw when accessed. */
final class InventoryReceiptCreatedMerchantEventInput extends Model {
    /** @param array{'api_version': string, 'created_at': string|\DateTimeInterface, 'data': array{'object': array{'created_at': string|\DateTimeInterface, 'external_actor_id'?: string, 'idempotency_key'?: string, 'inventory_receipt_id': string, 'lines': list<InventoryReceiptLineInput|array<array-key, mixed>|\stdClass>, 'occurred_at': string|\DateTimeInterface, 'return_disposition_id'?: string, 'return_id'?: string, 'source_system': array{'external_source_id'?: string, 'type': string, ...}|object|null, ...}|object}|object, 'event_type': string, 'merchant_id': string, 'mode': string, 'payload_version': int, 'request': array{'id': string, 'idempotency_key'?: string}|object|null, 'test': bool, 'webhook_event_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventoryReceiptCreatedMerchantEventInput')); }
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
    /**  object (Required): object and {@see InventoryReceiptInput}. Returned units received into Inventory, from a Return disposition or against the reservation line that consumed them. object.created_at (Required): string. RFC3339 timestamp. Format: date-time. object.external_actor_id (Optional): string. Your identifier for the actor who recorded the event. Don't put secrets in this field. maxLength: 255. object.idempotency_key (Optional): string. The Idempotency-Key of the request that created this resource; on a movement, of the command that wrote it. Omitted when that request had no key. object.inventory_receipt_id (Required): string. object.lines (Required): Array of {@see InventoryReceiptLineInput}. object.lines[] (Value): {@see InventoryReceiptLineInput}. One line of an inventory receipt: a quantity of an item received at a Location with its disposition. object.occurred_at (Required): string. RFC3339 timestamp. Format: date-time. object.return_disposition_id (Optional): string. object.return_id (Optional): string. object.source_system (Required): {@see InventorySourceSystemInput} or null. object.source_system.anyOf[1] (Value): {@see InventorySourceSystemInput}. The system an inventory event came from, such as manual entry, a point of sale, a warehouse system, or Flint, with your source identifier when it applies. object.source_system.anyOf[2] (Value): null.
     * @return array{'object': array{'created_at': string|\DateTimeInterface, 'external_actor_id'?: string, 'idempotency_key'?: string, 'inventory_receipt_id': string, 'lines': list<InventoryReceiptLineInput|array<array-key, mixed>|\stdClass>, 'occurred_at': string|\DateTimeInterface, 'return_disposition_id'?: string, 'return_id'?: string, 'source_system': array{'external_source_id'?: string, 'type': string, ...}|object|null, ...}|object}|object
     * @throws SdkError When data is omitted; use hasData() or valueOrDefault().
     */
    public function getData(): array|object { return $this->get('data'); }
    public function hasData(): bool { return $this->has('data'); }
    /** Value enum: "inventory_receipt.created".
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
