<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $api_version
 * @property-read string|\DateTimeInterface $created_at
 * @property-read array{'object': array{'created_at': string|\DateTimeInterface, 'external_actor_id'?: string, 'idempotency_key': string, 'inventory_receipt_id': string, 'lines': list<InventoryReceiptLineInput|array<array-key, mixed>|\stdClass>, 'occurred_at': string|\DateTimeInterface, 'return_disposition_id'?: string, 'return_id'?: string, 'source_system': array{'external_source_id'?: string, 'type': string, ...}|object|null, ...}|object}|object $data
 * @property-read string $event_type
 * @property-read string $merchant_id
 * @property-read string $mode
 * @property-read int $payload_version
 * @property-read array{'id': string, 'idempotency_key'?: string}|object|null $request
 * @property-read bool $test
 * @property-read string $webhook_event_id
 * Presence-aware input; omitted fields throw when accessed. */
final class Webhook_inventory_receipt_created_merchantInput extends Model {
    /** @param array{'api_version': string, 'created_at': string|\DateTimeInterface, 'data': array{'object': array{'created_at': string|\DateTimeInterface, 'external_actor_id'?: string, 'idempotency_key': string, 'inventory_receipt_id': string, 'lines': list<InventoryReceiptLineInput|array<array-key, mixed>|\stdClass>, 'occurred_at': string|\DateTimeInterface, 'return_disposition_id'?: string, 'return_id'?: string, 'source_system': array{'external_source_id'?: string, 'type': string, ...}|object|null, ...}|object}|object, 'event_type': string, 'merchant_id': string, 'mode': string, 'payload_version': int, 'request': array{'id': string, 'idempotency_key'?: string}|object|null, 'test': bool, 'webhook_event_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('Webhook_inventory_receipt_created_merchantInput')); }
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
    /** Shape $ (Value): object. Shape $.object (Required): object and {@see InventoryReceiptInput}. Returned units received into Inventory, from a Return disposition or against the reservation line that consumed them. Shape $.object.created_at (Required): string. RFC3339 timestamp. Format: date-time. Shape $.object.external_actor_id (Optional): string. Your identifier for the actor who recorded the event. Don't put secrets in this field. maxLength: 255. Shape $.object.idempotency_key (Required): string. Shape $.object.inventory_receipt_id (Required): string. Shape $.object.lines (Required): Array of {@see InventoryReceiptLineInput}. Shape $.object.lines[] (Value): {@see InventoryReceiptLineInput}. One line of an inventory receipt: a quantity of an item received at a Location with its disposition. Shape $.object.occurred_at (Required): string. RFC3339 timestamp. Format: date-time. Shape $.object.return_disposition_id (Optional): string. Shape $.object.return_id (Optional): string. Shape $.object.source_system (Required): {@see InventorySourceSystemInput} or null. Shape $.object.source_system.anyOf[1] (Value): {@see InventorySourceSystemInput}. The system an inventory event came from, such as manual entry, a point of sale, a warehouse system, or Flint, with your source identifier when it applies. Shape $.object.source_system.anyOf[2] (Value): null.
     * @return array{'object': array{'created_at': string|\DateTimeInterface, 'external_actor_id'?: string, 'idempotency_key': string, 'inventory_receipt_id': string, 'lines': list<InventoryReceiptLineInput|array<array-key, mixed>|\stdClass>, 'occurred_at': string|\DateTimeInterface, 'return_disposition_id'?: string, 'return_id'?: string, 'source_system': array{'external_source_id'?: string, 'type': string, ...}|object|null, ...}|object}|object
     * @throws SdkError When data is omitted; use hasData() or valueOrDefault().
     */
    public function getData(): array|object { return $this->get('data'); }
    public function hasData(): bool { return $this->has('data'); }
    /** Shape $ (Value): string.  Value enum: "inventory_receipt.created".
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
