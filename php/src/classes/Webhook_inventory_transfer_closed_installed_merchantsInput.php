<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $api_version
 * @property-read string|\DateTimeInterface $created_at
 * @property-read array{'object': array{'closed_at'?: string|\DateTimeInterface, 'closed_reason'?: string|null, 'created_at': string|\DateTimeInterface, 'departed_at'?: string|\DateTimeInterface, 'destination_location_id': string, 'external_reference_id'?: string, 'idempotency_key'?: string, 'inventory_transfer_id': string, 'lines': list<InventoryTransferLineInput|array<array-key, mixed>|\stdClass>, 'note'?: string, 'origin_location_id': string, 'received_at'?: string|\DateTimeInterface, 'status': string, 'supported_actions': list<string>, 'updated_at': string|\DateTimeInterface, 'version': string, ...}|object}|object $data
 * @property-read string $event_type
 * @property-read string $partner_app_id
 * @property-read int $payload_version
 * @property-read array{'merchant_id': string, 'partner_app_install_id': string, 'type': string}|object|array{'environment_grant_id': string, 'merchant_id': string, 'mode': string, 'partner_app_install_id': string, 'sandbox_id'?: string, 'type': string}|object $source
 * @property-read bool $test
 * @property-read string $webhook_event_id
 * Presence-aware input; omitted fields throw when accessed. */
final class Webhook_inventory_transfer_closed_installed_merchantsInput extends Model {
    /** @param array{'api_version': string, 'created_at': string|\DateTimeInterface, 'data': array{'object': array{'closed_at'?: string|\DateTimeInterface, 'closed_reason'?: string|null, 'created_at': string|\DateTimeInterface, 'departed_at'?: string|\DateTimeInterface, 'destination_location_id': string, 'external_reference_id'?: string, 'idempotency_key'?: string, 'inventory_transfer_id': string, 'lines': list<InventoryTransferLineInput|array<array-key, mixed>|\stdClass>, 'note'?: string, 'origin_location_id': string, 'received_at'?: string|\DateTimeInterface, 'status': string, 'supported_actions': list<string>, 'updated_at': string|\DateTimeInterface, 'version': string, ...}|object}|object, 'event_type': string, 'partner_app_id': string, 'payload_version': int, 'source': array{'merchant_id': string, 'partner_app_install_id': string, 'type': string}|object|array{'environment_grant_id': string, 'merchant_id': string, 'mode': string, 'partner_app_install_id': string, 'sandbox_id'?: string, 'type': string}|object, 'test': bool, 'webhook_event_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('Webhook_inventory_transfer_closed_installed_merchantsInput')); }
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
    /** Shape $ (Value): object. Shape $.object (Required): object and {@see InventoryTransferInput}. Stock moving between locations. Shape $.object.closed_at (Optional): string. RFC3339 timestamp. Format: date-time. Shape $.object.closed_reason (Optional): string or null.  Value enum: "received", "canceled", "received_with_cancellation", "returned", "lost", "mixed", null. Shape $.object.created_at (Required): string. RFC3339 timestamp. Format: date-time. Shape $.object.departed_at (Optional): string. RFC3339 timestamp. Format: date-time. Shape $.object.destination_location_id (Required): string. Shape $.object.external_reference_id (Optional): string. Caller-owned identifier for this resource in an external system. maxLength: 255. Shape $.object.idempotency_key (Optional): string. The Idempotency-Key of the request that created this resource; on a movement, of the command that wrote it. Omitted when that request had no key. Shape $.object.inventory_transfer_id (Required): string. Shape $.object.lines (Required): Array of {@see InventoryTransferLineInput}. Owned collection of transfer lines. Lines have no lifecycle outside this transfer; PATCH replaces the full collection. Shape $.object.lines[] (Value): {@see InventoryTransferLineInput}. One line of an inventory transfer, with the requested quantity and how much has departed, been received by condition, canceled, lost, or returned. Shape $.object.note (Optional): string. Shape $.object.origin_location_id (Required): string. Shape $.object.received_at (Optional): string. RFC3339 timestamp. Format: date-time. Shape $.object.status (Required): string.  Value enum: "draft", "in_transit", "partially_resolved", "closed". Shape $.object.supported_actions (Required): Array of string.  [] enum: "depart", "receive", "return_to_origin", "report_loss", "cancel". Shape $.object.supported_actions[] (Value): string.  Value enum: "depart", "receive", "return_to_origin", "report_loss", "cancel". Shape $.object.updated_at (Required): string. RFC3339 timestamp. Format: date-time. Shape $.object.version (Required): integer string. Use an integer string (decimal digits), not a floating-point number. Format: uint64. minimum: 0.
     * @return array{'object': array{'closed_at'?: string|\DateTimeInterface, 'closed_reason'?: string|null, 'created_at': string|\DateTimeInterface, 'departed_at'?: string|\DateTimeInterface, 'destination_location_id': string, 'external_reference_id'?: string, 'idempotency_key'?: string, 'inventory_transfer_id': string, 'lines': list<InventoryTransferLineInput|array<array-key, mixed>|\stdClass>, 'note'?: string, 'origin_location_id': string, 'received_at'?: string|\DateTimeInterface, 'status': string, 'supported_actions': list<string>, 'updated_at': string|\DateTimeInterface, 'version': string, ...}|object}|object
     * @throws SdkError When data is omitted; use hasData() or valueOrDefault().
     */
    public function getData(): array|object { return $this->get('data'); }
    public function hasData(): bool { return $this->has('data'); }
    /** Shape $ (Value): string.  Value enum: "inventory_transfer.closed".
     * @return string
     * @throws SdkError When event_type is omitted; use hasEventType() or valueOrDefault().
     */
    public function getEventType(): string { return $this->get('event_type'); }
    public function hasEventType(): bool { return $this->has('event_type'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When partner_app_id is omitted; use hasPartnerAppId() or valueOrDefault().
     */
    public function getPartnerAppId(): string { return $this->get('partner_app_id'); }
    public function hasPartnerAppId(): bool { return $this->has('partner_app_id'); }
    /** Shape $ (Value): integer. 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Value enum: 1, 2.
     * @return int
     * @throws SdkError When payload_version is omitted; use hasPayloadVersion() or valueOrDefault().
     */
    public function getPayloadVersion(): int { return $this->get('payload_version'); }
    public function hasPayloadVersion(): bool { return $this->has('payload_version'); }
    /** Shape $ (Value): Alternative shapes (see declared variants) and object. Shape $.environment_grant_id (Required): string. Shape $.merchant_id (Required): string. Shape $.mode (Required): string.  Value enum: "test", "live". Shape $.partner_app_install_id (Required): string. Shape $.sandbox_id (Optional): string. Shape $.type (Required): string.  Value enum: "installed_merchants". Shape $.oneOf[1] (Value): object. Shape $.oneOf[1].merchant_id (Required): string. Shape $.oneOf[1].partner_app_install_id (Required): string. Shape $.oneOf[1].type (Required): string.  Value enum: "partner_app". Shape $.oneOf[2] (Value): object. Shape $.oneOf[2].environment_grant_id (Required): string. Shape $.oneOf[2].merchant_id (Required): string. Shape $.oneOf[2].mode (Required): string.  Value enum: "test", "live". Shape $.oneOf[2].partner_app_install_id (Required): string. Shape $.oneOf[2].sandbox_id (Optional): string. Shape $.oneOf[2].type (Required): string.  Value enum: "installed_merchants".
     * @return array{'merchant_id': string, 'partner_app_install_id': string, 'type': string}|object|array{'environment_grant_id': string, 'merchant_id': string, 'mode': string, 'partner_app_install_id': string, 'sandbox_id'?: string, 'type': string}|object
     * @throws SdkError When source is omitted; use hasSource() or valueOrDefault().
     */
    public function getSource(): mixed { return $this->get('source'); }
    public function hasSource(): bool { return $this->has('source'); }
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
