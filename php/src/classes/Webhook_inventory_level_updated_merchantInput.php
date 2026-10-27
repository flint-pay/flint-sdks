<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $api_version
 * @property-read string|\DateTimeInterface $created_at
 * @property-read array{'object': array{'available_quantity': string, 'claim_version': string, 'committed_quantity': string, 'created_at': string|\DateTimeInterface, 'damaged_quantity': string, 'held_quantity': string, 'incoming_quantity': string, 'inventory_item'?: InventoryItemInput|array<array-key, mixed>|\stdClass, 'inventory_item_id': string, 'inventory_level_id': string, 'location_id': string, 'on_hand_quantity': string, 'physical_version': string, 'quality_control_quantity': string, 'quarantined_quantity': string, 'safety_stock_quantity': string, 'shortage_quantity': string, 'unavailable_on_hand_quantity': string, 'updated_at': string|\DateTimeInterface, 'version': string, ...}|object}|object $data
 * @property-read string $event_type
 * @property-read string $merchant_id
 * @property-read string $mode
 * @property-read int $payload_version
 * @property-read array{'id': string, 'idempotency_key'?: string}|object|null $request
 * @property-read bool $test
 * @property-read string $webhook_event_id
 * Presence-aware input; omitted fields throw when accessed. */
final class Webhook_inventory_level_updated_merchantInput extends Model {
    /** @param array{'api_version': string, 'created_at': string|\DateTimeInterface, 'data': array{'object': array{'available_quantity': string, 'claim_version': string, 'committed_quantity': string, 'created_at': string|\DateTimeInterface, 'damaged_quantity': string, 'held_quantity': string, 'incoming_quantity': string, 'inventory_item'?: InventoryItemInput|array<array-key, mixed>|\stdClass, 'inventory_item_id': string, 'inventory_level_id': string, 'location_id': string, 'on_hand_quantity': string, 'physical_version': string, 'quality_control_quantity': string, 'quarantined_quantity': string, 'safety_stock_quantity': string, 'shortage_quantity': string, 'unavailable_on_hand_quantity': string, 'updated_at': string|\DateTimeInterface, 'version': string, ...}|object}|object, 'event_type': string, 'merchant_id': string, 'mode': string, 'payload_version': int, 'request': array{'id': string, 'idempotency_key'?: string}|object|null, 'test': bool, 'webhook_event_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('Webhook_inventory_level_updated_merchantInput')); }
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
    /** Shape $ (Value): object. Shape $.object (Required): object and {@see InventoryLevelInput}. The quantity state of one inventory item at one Location. Shape $.object.available_quantity (Required): integer string. Derived and never written: on_hand minus unavailable, held, committed, and safety stock, never below 0. See shortage_quantity for the excess. Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: int64. Shape $.object.claim_version (Required): integer string. Advances only when held or committed quantities change. Use an integer string (decimal digits), not a floating-point number. Format: int64. Shape $.object.committed_quantity (Required): integer string. Units promised to accepted orders. Still physically present until fulfillment consumes them. Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: int64. Shape $.object.created_at (Required): string. RFC3339 timestamp. Format: date-time. Shape $.object.damaged_quantity (Required): integer string. On-hand units known to be damaged. Not sellable. Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: int64. Shape $.object.held_quantity (Required): integer string. Units claimed by an open reservation that has not been committed. Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: int64. Shape $.object.incoming_quantity (Required): integer string. Units recorded as inbound but not yet on hand. Does not count toward availability. Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: int64. Shape $.object.inventory_item (Optional): {@see InventoryItemInput}. The inventory item this level belongs to. Present only when the list request asked for expand=inventory_item. A stock-keeping unit that inventory quantities are tracked against. Catalog variants reference an inventory item rather than carrying their own counter. Shape $.object.inventory_item_id (Required): string. Shape $.object.inventory_level_id (Required): string. Shape $.object.location_id (Required): string. Shape $.object.on_hand_quantity (Required): integer string. Units physically present at the Location, in any condition. Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: int64. Shape $.object.physical_version (Required): integer string. Advances only when on-hand or condition quantities change. Use an integer string (decimal digits), not a floating-point number. Format: int64. Shape $.object.quality_control_quantity (Required): integer string. On-hand units awaiting inspection. Not sellable. Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: int64. Shape $.object.quarantined_quantity (Required): integer string. On-hand units isolated for review. Not sellable. Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: int64. Shape $.object.safety_stock_quantity (Required): integer string. Buffer withheld from allocation. Change it with PATCH /v1/inventory-levels/{inventory_level_id}. Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: int64. Shape $.object.shortage_quantity (Required): integer string. Derived: claims exceeding sellable physical stock. Positive only after stock is lost, damaged, or corrected down. Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: int64. Shape $.object.unavailable_on_hand_quantity (Required): integer string. Derived: quality_control + damaged + quarantined. Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: int64. Shape $.object.updated_at (Required): string. RFC3339 timestamp. Format: date-time. Shape $.object.version (Required): integer string. Changes on every quantity or claim change at this level, including holds and commits. Read it immediately before a PATCH. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return array{'object': array{'available_quantity': string, 'claim_version': string, 'committed_quantity': string, 'created_at': string|\DateTimeInterface, 'damaged_quantity': string, 'held_quantity': string, 'incoming_quantity': string, 'inventory_item'?: InventoryItemInput|array<array-key, mixed>|\stdClass, 'inventory_item_id': string, 'inventory_level_id': string, 'location_id': string, 'on_hand_quantity': string, 'physical_version': string, 'quality_control_quantity': string, 'quarantined_quantity': string, 'safety_stock_quantity': string, 'shortage_quantity': string, 'unavailable_on_hand_quantity': string, 'updated_at': string|\DateTimeInterface, 'version': string, ...}|object}|object
     * @throws SdkError When data is omitted; use hasData() or valueOrDefault().
     */
    public function getData(): array|object { return $this->get('data'); }
    public function hasData(): bool { return $this->has('data'); }
    /** Shape $ (Value): string.  Value enum: "inventory_level.updated".
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
