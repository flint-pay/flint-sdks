<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $api_version
 * @property-read string|\DateTimeInterface $created_at
 * @property-read array{'object': array{'canceled_at'?: string|\DateTimeInterface, 'canceled_by'?: ReturnActorInput|array<array-key, mixed>|\stdClass, 'cancellation_reason'?: string, 'cancellation_reason_message'?: string, 'created_at': string|\DateTimeInterface, 'created_by': ReturnActorInput|array<array-key, mixed>|\stdClass, 'disposition_type': string, 'external_reference_id'?: string, 'failure_code'?: string, 'failure_message'?: string, 'inventory_location_id'?: string, 'inventory_movement_ids': list<string>, 'inventory_receipt_id'?: string, 'metadata': array<array-key, string>|\stdClass, 'occurred_at': string|\DateTimeInterface, 'quantity': string, 'reason': string, 'reason_message'?: string, 'replaced_by_return_disposition_id'?: string, 'replaces_return_disposition_id'?: string, 'return_disposition_id': string, 'return_id': string, 'return_inspection_line_item_id'?: string, 'return_line_item_id'?: string, 'return_receipt_line_item_id'?: string, 'status': string, 'supported_actions': list<string>, 'updated_at': string|\DateTimeInterface, 'version': string, ...}|object}|object $data
 * @property-read string $event_type
 * @property-read string $merchant_id
 * @property-read string $mode
 * @property-read int $payload_version
 * @property-read array{'id': string, 'idempotency_key'?: string}|object|null $request
 * @property-read bool $test
 * @property-read string $webhook_event_id
 * Presence-aware input; omitted fields throw when accessed. */
final class Webhook_return_disposition_created_merchantInput extends Model {
    /** @param array{'api_version': string, 'created_at': string|\DateTimeInterface, 'data': array{'object': array{'canceled_at'?: string|\DateTimeInterface, 'canceled_by'?: ReturnActorInput|array<array-key, mixed>|\stdClass, 'cancellation_reason'?: string, 'cancellation_reason_message'?: string, 'created_at': string|\DateTimeInterface, 'created_by': ReturnActorInput|array<array-key, mixed>|\stdClass, 'disposition_type': string, 'external_reference_id'?: string, 'failure_code'?: string, 'failure_message'?: string, 'inventory_location_id'?: string, 'inventory_movement_ids': list<string>, 'inventory_receipt_id'?: string, 'metadata': array<array-key, string>|\stdClass, 'occurred_at': string|\DateTimeInterface, 'quantity': string, 'reason': string, 'reason_message'?: string, 'replaced_by_return_disposition_id'?: string, 'replaces_return_disposition_id'?: string, 'return_disposition_id': string, 'return_id': string, 'return_inspection_line_item_id'?: string, 'return_line_item_id'?: string, 'return_receipt_line_item_id'?: string, 'status': string, 'supported_actions': list<string>, 'updated_at': string|\DateTimeInterface, 'version': string, ...}|object}|object, 'event_type': string, 'merchant_id': string, 'mode': string, 'payload_version': int, 'request': array{'id': string, 'idempotency_key'?: string}|object|null, 'test': bool, 'webhook_event_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('Webhook_return_disposition_created_merchantInput')); }
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
    /** Shape $ (Value): object. Shape $.object (Required): object and {@see ReturnDispositionInput}. A decision about how returned merchandise will be handled. Shape $.object.canceled_at (Optional): string. RFC3339 timestamp. Format: date-time. Shape $.object.canceled_by (Optional): {@see ReturnActorInput}. Who performed a return action: a buyer, merchant, integration, or the system, with an optional ID. Shape $.object.cancellation_reason (Optional): string.  Value enum: "created_in_error", "changed_disposition", "duplicate", "other". Shape $.object.cancellation_reason_message (Optional): string. Shape $.object.created_at (Required): string. RFC3339 timestamp. Format: date-time. Shape $.object.created_by (Required): {@see ReturnActorInput}. Who performed a return action: a buyer, merchant, integration, or the system, with an optional ID. Shape $.object.disposition_type (Required): string.  Value enum: "sellable", "quality_control", "damaged", "quarantined", "repair", "refurbish", "liquidate", "donate", "discard", "return_to_buyer", "lost". Shape $.object.external_reference_id (Optional): string. Caller-owned identifier for this resource in an external system. maxLength: 255. Shape $.object.failure_code (Optional): string. Reason code for a failed merchandise disposition, when available. Value enum: "inventory_effect_failed", "inventory_item_unmapped". Shape $.object.failure_message (Optional): string. Explanation of a failed merchandise disposition, when available. Shape $.object.inventory_location_id (Optional): string. Shape $.object.inventory_movement_ids (Required): Array of string. Shape $.object.inventory_movement_ids[] (Value): string. Shape $.object.inventory_receipt_id (Optional): string. Shape $.object.metadata (Required): Map of string. Shape $.object.metadata.* (Value): string. Shape $.object.occurred_at (Required): string. RFC3339 timestamp. Format: date-time. Shape $.object.quantity (Required): integer string. Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: int64. Shape $.object.reason (Required): string.  Value enum: "inspection_result", "return_policy", "warehouse_override", "safety_requirement", "other". Shape $.object.reason_message (Optional): string. Shape $.object.replaced_by_return_disposition_id (Optional): string. Shape $.object.replaces_return_disposition_id (Optional): string. Shape $.object.return_disposition_id (Required): string. Shape $.object.return_id (Required): string. Shape $.object.return_inspection_line_item_id (Optional): string. Shape $.object.return_line_item_id (Optional): string. Shape $.object.return_receipt_line_item_id (Optional): string. Shape $.object.status (Required): string.  Value enum: "pending", "succeeded", "failed", "canceled". Shape $.object.supported_actions (Required): Array of string. Actions that can succeed now. Empty unless the parent Return is open. cancel is listed only before the inventory effect starts. [] enum: "cancel", "retry". Shape $.object.supported_actions[] (Value): string.  Value enum: "cancel", "retry". Shape $.object.updated_at (Required): string. RFC3339 timestamp. Format: date-time. Shape $.object.version (Required): integer string. Use an integer string (decimal digits), not a floating-point number. Format: int64. minimum: 0.
     * @return array{'object': array{'canceled_at'?: string|\DateTimeInterface, 'canceled_by'?: ReturnActorInput|array<array-key, mixed>|\stdClass, 'cancellation_reason'?: string, 'cancellation_reason_message'?: string, 'created_at': string|\DateTimeInterface, 'created_by': ReturnActorInput|array<array-key, mixed>|\stdClass, 'disposition_type': string, 'external_reference_id'?: string, 'failure_code'?: string, 'failure_message'?: string, 'inventory_location_id'?: string, 'inventory_movement_ids': list<string>, 'inventory_receipt_id'?: string, 'metadata': array<array-key, string>|\stdClass, 'occurred_at': string|\DateTimeInterface, 'quantity': string, 'reason': string, 'reason_message'?: string, 'replaced_by_return_disposition_id'?: string, 'replaces_return_disposition_id'?: string, 'return_disposition_id': string, 'return_id': string, 'return_inspection_line_item_id'?: string, 'return_line_item_id'?: string, 'return_receipt_line_item_id'?: string, 'status': string, 'supported_actions': list<string>, 'updated_at': string|\DateTimeInterface, 'version': string, ...}|object}|object
     * @throws SdkError When data is omitted; use hasData() or valueOrDefault().
     */
    public function getData(): array|object { return $this->get('data'); }
    public function hasData(): bool { return $this->has('data'); }
    /** Shape $ (Value): string.  Value enum: "return_disposition.created".
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
