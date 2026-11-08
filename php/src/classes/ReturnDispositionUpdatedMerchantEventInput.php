<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $api_version
 * @property-read string|\DateTimeInterface $created_at
 * @property-read array{'object': array{'canceled_at'?: string|\DateTimeInterface, 'canceled_by'?: ReturnActorInput|array<array-key, mixed>|\stdClass, 'cancellation_reason'?: string, 'cancellation_reason_message'?: string, 'created_at': string|\DateTimeInterface, 'created_by': ReturnActorInput|array<array-key, mixed>|\stdClass, 'disposition_type': string, 'external_reference_id'?: string, 'failure_code'?: string, 'failure_message'?: string, 'inventory_location_id'?: string, 'inventory_movement_ids': list<string>, 'inventory_receipt_id'?: string, 'metadata': MetadataMapInput|array<array-key, mixed>|\stdClass, 'occurred_at': string|\DateTimeInterface, 'quantity': int, 'reason': string, 'reason_message'?: string, 'replaced_by_return_disposition_id'?: string, 'replaces_return_disposition_id'?: string, 'return_disposition_id': string, 'return_id': string, 'return_inspection_line_item_id'?: string, 'return_line_item_id'?: string, 'return_receipt_line_item_id'?: string, 'status': string, 'supported_actions': list<string>, 'updated_at': string|\DateTimeInterface, 'version': int, ...}|object, 'previous_attributes'?: array<array-key, mixed>|\stdClass}|object $data
 * @property-read string $event_source
 * @property-read string $event_type
 * @property-read string $merchant_id
 * @property-read string $mode
 * @property-read int $payload_version
 * @property-read array{'id': string, 'idempotency_key'?: string}|object|null $request
 * @property-read string $sandbox_id
 * @property-read bool $test
 * @property-read string $webhook_event_id
 * Presence-aware input; omitted fields throw when accessed. */
final class ReturnDispositionUpdatedMerchantEventInput extends Model {
    /** @param array{'api_version': string, 'created_at': string|\DateTimeInterface, 'data': array{'object': array{'canceled_at'?: string|\DateTimeInterface, 'canceled_by'?: ReturnActorInput|array<array-key, mixed>|\stdClass, 'cancellation_reason'?: string, 'cancellation_reason_message'?: string, 'created_at': string|\DateTimeInterface, 'created_by': ReturnActorInput|array<array-key, mixed>|\stdClass, 'disposition_type': string, 'external_reference_id'?: string, 'failure_code'?: string, 'failure_message'?: string, 'inventory_location_id'?: string, 'inventory_movement_ids': list<string>, 'inventory_receipt_id'?: string, 'metadata': MetadataMapInput|array<array-key, mixed>|\stdClass, 'occurred_at': string|\DateTimeInterface, 'quantity': int, 'reason': string, 'reason_message'?: string, 'replaced_by_return_disposition_id'?: string, 'replaces_return_disposition_id'?: string, 'return_disposition_id': string, 'return_id': string, 'return_inspection_line_item_id'?: string, 'return_line_item_id'?: string, 'return_receipt_line_item_id'?: string, 'status': string, 'supported_actions': list<string>, 'updated_at': string|\DateTimeInterface, 'version': int, ...}|object, 'previous_attributes'?: array<array-key, mixed>|\stdClass}|object, 'event_source': string, 'event_type': string, 'merchant_id': string, 'mode': string, 'payload_version': int, 'request': array{'id': string, 'idempotency_key'?: string}|object|null, 'sandbox_id'?: string, 'test': bool, 'webhook_event_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnDispositionUpdatedMerchantEventInput')); }
    /** API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: date. Example: "2026-08-02".
     * @return string
     * @throws SdkError When api_version is omitted; use hasApiVersion() or valueOrDefault().
     */
    public function getApiVersion(): string { return $this->get('api_version'); }
    public function hasApiVersion(): bool { return $this->has('api_version'); }
    /** When Flint recorded the event. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string|\DateTimeInterface { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** The resource snapshot recorded for this event and rendered at the delivery API version. object (Required): object. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. object.canceled_at (Optional): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.canceled_by (Optional): {@see ReturnActorInput}. Who canceled the disposition. Merchant reads only. Who performed a return action: a buyer, merchant, integration, or the system, with an optional ID. object.cancellation_reason (Optional): string. Why the disposition was canceled. Value enum: "created_in_error", "changed_disposition", "duplicate", "other". object.cancellation_reason_message (Optional): string. Detail sent with the cancellation. Merchant reads only. object.created_at (Required): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.created_by (Required): {@see ReturnActorInput}. Who created the disposition. Who performed a return action: a buyer, merchant, integration, or the system, with an optional ID. object.disposition_type (Required): string. What happens to the received units. Value enum: "sellable", "quality_control", "damaged", "quarantined", "repair", "refurbish", "liquidate", "donate", "discard", "return_to_buyer", "lost". object.external_reference_id (Optional): string. Caller-owned identifier for this resource in an external system. maxLength: 255. Example: "warehouse-1842". object.failure_code (Optional): string. Reason code for a failed merchandise disposition, when available. Value enum: "inventory_effect_failed", "inventory_item_unmapped". object.failure_message (Optional): string. Explanation of a failed merchandise disposition, when available. object.inventory_location_id (Optional): string. ID of the Location whose stock the disposition changes. Required for `sellable`, `quality_control`, `damaged`, `quarantined`, and `lost`; rejected for the other types. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". object.inventory_movement_ids (Required): Array of string. IDs of the inventory movements the disposition wrote. Empty when it moved no stock. object.inventory_movement_ids[] (Value): string. Example: "invm_01KEZF7C00DYPFT9PS0NZY805Z". object.inventory_receipt_id (Optional): string. ID of the inventory receipt the disposition recorded. Absent when it recorded none. Example: "invrec_01KEZF7C00JXXCYA06SH8RCM2N". object.metadata (Required): {@see MetadataMapInput}. Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. object.occurred_at (Required): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.quantity (Required): integer. Whole-number quantity; fractional quantities are not supported. Format: int64. object.reason (Required): string. Why the disposition was made. Value enum: "inspection_result", "return_policy", "warehouse_override", "safety_requirement", "other". object.reason_message (Optional): string. Optional detail about `reason`, kept with the record. object.replaced_by_return_disposition_id (Optional): string. ID of the disposition that took over this one. Present when a replacement canceled it. Example: "retdsp_01KEZF7C007H87J66PH2EEK1VW". object.replaces_return_disposition_id (Optional): string. ID of the `failed` or `canceled` disposition this one replaces. It takes over that disposition's unused capacity. Example: "retdsp_01KEZF7C007H87J66PH2EEK1VW". object.return_disposition_id (Required): string. Unique identifier for this return disposition, prefixed `retdsp_`. Example: "retdsp_01KEZF7C007H87J66PH2EEK1VW". object.return_id (Required): string. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X". object.return_inspection_line_item_id (Optional): string. ID of the inspection line the disposition covers. Absent when it covers a receipt line. Example: "retinli_01KEZF7C0039VC3XNJ3ZTX8PV4". object.return_line_item_id (Optional): string. ID of the Return line the units belong to. Example: "retli_01KEZF7C00R813VR7ECXS062QG". object.return_receipt_line_item_id (Optional): string. ID of the receipt line the disposition covers. Absent when it covers an inspection line. Example: "retrcli_01KEZF7C00BCEA2ZKN4H8WYWXE". object.status (Required): string. Whether inventory has applied the disposition. Value enum: "pending", "succeeded", "failed", "canceled". object.supported_actions (Required): Array of string. Actions that can succeed now. Empty unless the parent Return is open. cancel is listed only before the inventory effect starts. [] enum: "cancel", "retry". object.supported_actions[] (Value): string.  Value enum: "cancel", "retry". object.updated_at (Required): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.version (Required): integer. Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. Format: int64. minimum: 0. previous_attributes (Optional): object. Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.
     * @return array{'object': array{'canceled_at'?: string|\DateTimeInterface, 'canceled_by'?: ReturnActorInput|array<array-key, mixed>|\stdClass, 'cancellation_reason'?: string, 'cancellation_reason_message'?: string, 'created_at': string|\DateTimeInterface, 'created_by': ReturnActorInput|array<array-key, mixed>|\stdClass, 'disposition_type': string, 'external_reference_id'?: string, 'failure_code'?: string, 'failure_message'?: string, 'inventory_location_id'?: string, 'inventory_movement_ids': list<string>, 'inventory_receipt_id'?: string, 'metadata': MetadataMapInput|array<array-key, mixed>|\stdClass, 'occurred_at': string|\DateTimeInterface, 'quantity': int, 'reason': string, 'reason_message'?: string, 'replaced_by_return_disposition_id'?: string, 'replaces_return_disposition_id'?: string, 'return_disposition_id': string, 'return_id': string, 'return_inspection_line_item_id'?: string, 'return_line_item_id'?: string, 'return_receipt_line_item_id'?: string, 'status': string, 'supported_actions': list<string>, 'updated_at': string|\DateTimeInterface, 'version': int, ...}|object, 'previous_attributes'?: array<array-key, mixed>|\stdClass}|object
     * @throws SdkError When data is omitted; use hasData() or valueOrDefault().
     */
    public function getData(): array|object { return $this->get('data'); }
    public function hasData(): bool { return $this->has('data'); }
    /** The origin of the event. Selects the webhook envelope and the fields in source. Value enum: "merchant".
     * @return string
     * @throws SdkError When event_source is omitted; use hasEventSource() or valueOrDefault().
     */
    public function getEventSource(): string { return $this->get('event_source'); }
    public function hasEventSource(): bool { return $this->has('event_source'); }
    /** The resource change or condition this event announces. Value enum: "return_disposition.updated".
     * @return string
     * @throws SdkError When event_type is omitted; use hasEventType() or valueOrDefault().
     */
    public function getEventType(): string { return $this->get('event_type'); }
    public function hasEventType(): bool { return $this->has('event_type'); }
    /** ID of the merchant this resource belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     * @return string
     * @throws SdkError When merchant_id is omitted; use hasMerchantId() or valueOrDefault().
     */
    public function getMerchantId(): string { return $this->get('merchant_id'); }
    public function hasMerchantId(): bool { return $this->has('merchant_id'); }
    /** Environment used for this resource or request. Value enum: "test", "live".
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
    /** The originating request. `null` when the event has no originating request ID. id (Required): string. Request ID of the request that caused the event. idempotency_key (Optional): string. The Idempotency-Key the originating request sent. Absent when it sent none.
     * @return array{'id': string, 'idempotency_key'?: string}|object|null
     * @throws SdkError When request is omitted; use hasRequest() or valueOrDefault().
     */
    public function getRequest(): array|object|null { return $this->get('request'); }
    public function hasRequest(): bool { return $this->has('request'); }
    /** Public sandbox ID for this event. Present exactly when mode is test; omitted in live mode. Example: "test_01KEZF7C00JC77HTMTB2XHNPE0".
     * @return string
     * @throws SdkError When sandbox_id is omitted; use hasSandboxId() or valueOrDefault().
     */
    public function getSandboxId(): string { return $this->get('sandbox_id'); }
    public function hasSandboxId(): bool { return $this->has('sandbox_id'); }
    /** true for a synthetic event sent from the test-events endpoint, false otherwise.
     * @return bool
     * @throws SdkError When test is omitted; use hasTest() or valueOrDefault().
     */
    public function getTest(): bool { return $this->get('test'); }
    public function hasTest(): bool { return $this->has('test'); }
    /** Stable ID of the recorded webhook event, shared by its delivery attempts. Example: "whev_01KEZF7C00362MS3HV970TRZGS".
     * @return string
     * @throws SdkError When webhook_event_id is omitted; use hasWebhookEventId() or valueOrDefault().
     */
    public function getWebhookEventId(): string { return $this->get('webhook_event_id'); }
    public function hasWebhookEventId(): bool { return $this->has('webhook_event_id'); }
}
