<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $api_version
 * @property-read string|\DateTimeInterface $created_at
 * @property-read array{'object': array{'available_quantity': int, 'claim_version': int, 'committed_quantity': int, 'created_at': string|\DateTimeInterface, 'damaged_quantity': int, 'held_quantity': int, 'incoming_quantity': int, 'inventory_item'?: InventoryItemInput|array<array-key, mixed>|\stdClass, 'inventory_item_id': string, 'inventory_level_id': string, 'location_id': string, 'on_hand_quantity': int, 'physical_version': int, 'quality_control_quantity': int, 'quarantined_quantity': int, 'safety_stock_quantity': int, 'shortage_quantity': int, 'unavailable_on_hand_quantity': int, 'updated_at': string|\DateTimeInterface, 'version': int, ...}|object}|object $data
 * @property-read string $event_type
 * @property-read string $partner_app_id
 * @property-read int $payload_version
 * @property-read array{'merchant_id': string, 'partner_app_install_id': string, 'type': string}|object|array{'environment_grant_id': string, 'merchant_id': string, 'mode': string, 'partner_app_install_id': string, 'sandbox_id'?: string, 'type': string}|object $source
 * @property-read bool $test
 * @property-read string $webhook_event_id
 * Presence-aware input; omitted fields throw when accessed. */
final class InventoryLevelUpdatedInstalledMerchantsEventInput extends Model {
    /** @param array{'api_version': string, 'created_at': string|\DateTimeInterface, 'data': array{'object': array{'available_quantity': int, 'claim_version': int, 'committed_quantity': int, 'created_at': string|\DateTimeInterface, 'damaged_quantity': int, 'held_quantity': int, 'incoming_quantity': int, 'inventory_item'?: InventoryItemInput|array<array-key, mixed>|\stdClass, 'inventory_item_id': string, 'inventory_level_id': string, 'location_id': string, 'on_hand_quantity': int, 'physical_version': int, 'quality_control_quantity': int, 'quarantined_quantity': int, 'safety_stock_quantity': int, 'shortage_quantity': int, 'unavailable_on_hand_quantity': int, 'updated_at': string|\DateTimeInterface, 'version': int, ...}|object}|object, 'event_type': string, 'partner_app_id': string, 'payload_version': int, 'source': array{'merchant_id': string, 'partner_app_install_id': string, 'type': string}|object|array{'environment_grant_id': string, 'merchant_id': string, 'mode': string, 'partner_app_install_id': string, 'sandbox_id'?: string, 'type': string}|object, 'test': bool, 'webhook_event_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventoryLevelUpdatedInstalledMerchantsEventInput')); }
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
    /**  object (Required): object and {@see InventoryLevelInput}. The quantity state of one inventory item at one Location. object.available_quantity (Required): integer. Derived and never written: on_hand minus unavailable, held, committed, and safety stock, never below 0. See shortage_quantity for the excess. Whole-number quantity; fractional quantities are not supported. Format: int64. object.claim_version (Required): integer. Advances only when held or committed quantities change. Format: int64. minimum: 0. object.committed_quantity (Required): integer. Units promised to accepted orders. Still physically present until fulfillment consumes them. Whole-number quantity; fractional quantities are not supported. Format: int64. object.created_at (Required): string. RFC3339 timestamp. Format: date-time. object.damaged_quantity (Required): integer. On-hand units known to be damaged. Not sellable. Whole-number quantity; fractional quantities are not supported. Format: int64. object.held_quantity (Required): integer. Units claimed by an open reservation that has not been committed. Whole-number quantity; fractional quantities are not supported. Format: int64. object.incoming_quantity (Required): integer. Units recorded as inbound but not yet on hand. Does not count toward availability. Whole-number quantity; fractional quantities are not supported. Format: int64. object.inventory_item (Optional): {@see InventoryItemInput}. The inventory item this level belongs to. Present only when the list request asked for expand=inventory_item. A stock-keeping unit that inventory quantities are tracked against. Catalog variants reference an inventory item rather than carrying their own counter. object.inventory_item_id (Required): string. object.inventory_level_id (Required): string. object.location_id (Required): string. object.on_hand_quantity (Required): integer. Units physically present at the Location, in any condition. Whole-number quantity; fractional quantities are not supported. Format: int64. object.physical_version (Required): integer. Advances only when on-hand or condition quantities change. Format: int64. minimum: 0. object.quality_control_quantity (Required): integer. On-hand units awaiting inspection. Not sellable. Whole-number quantity; fractional quantities are not supported. Format: int64. object.quarantined_quantity (Required): integer. On-hand units isolated for review. Not sellable. Whole-number quantity; fractional quantities are not supported. Format: int64. object.safety_stock_quantity (Required): integer. Buffer withheld from allocation. Change it with PATCH /v1/inventory-levels/{inventory_level_id}. Whole-number quantity; fractional quantities are not supported. Format: int64. object.shortage_quantity (Required): integer. Derived: claims exceeding sellable physical stock. Positive only after stock is lost, damaged, or corrected down. Whole-number quantity; fractional quantities are not supported. Format: int64. object.unavailable_on_hand_quantity (Required): integer. Derived: quality_control + damaged + quarantined. Whole-number quantity; fractional quantities are not supported. Format: int64. object.updated_at (Required): string. RFC3339 timestamp. Format: date-time. object.version (Required): integer. Changes on every quantity or claim change at this level, including holds and commits. Read it immediately before a PATCH. A level that a counted adjustment creates without a quantity change starts at version 0. Format: int64. minimum: 0.
     * @return array{'object': array{'available_quantity': int, 'claim_version': int, 'committed_quantity': int, 'created_at': string|\DateTimeInterface, 'damaged_quantity': int, 'held_quantity': int, 'incoming_quantity': int, 'inventory_item'?: InventoryItemInput|array<array-key, mixed>|\stdClass, 'inventory_item_id': string, 'inventory_level_id': string, 'location_id': string, 'on_hand_quantity': int, 'physical_version': int, 'quality_control_quantity': int, 'quarantined_quantity': int, 'safety_stock_quantity': int, 'shortage_quantity': int, 'unavailable_on_hand_quantity': int, 'updated_at': string|\DateTimeInterface, 'version': int, ...}|object}|object
     * @throws SdkError When data is omitted; use hasData() or valueOrDefault().
     */
    public function getData(): array|object { return $this->get('data'); }
    public function hasData(): bool { return $this->has('data'); }
    /** Value enum: "inventory_level.updated".
     * @return string
     * @throws SdkError When event_type is omitted; use hasEventType() or valueOrDefault().
     */
    public function getEventType(): string { return $this->get('event_type'); }
    public function hasEventType(): bool { return $this->has('event_type'); }
    /** partner_app_id
     * @return string
     * @throws SdkError When partner_app_id is omitted; use hasPartnerAppId() or valueOrDefault().
     */
    public function getPartnerAppId(): string { return $this->get('partner_app_id'); }
    public function hasPartnerAppId(): bool { return $this->has('partner_app_id'); }
    /** 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Value enum: 1, 2.
     * @return int
     * @throws SdkError When payload_version is omitted; use hasPayloadVersion() or valueOrDefault().
     */
    public function getPayloadVersion(): int { return $this->get('payload_version'); }
    public function hasPayloadVersion(): bool { return $this->has('payload_version'); }
    /** The source of a partner webhook event, selected by type. environment_grant_id (Required): string. merchant_id (Required): string. mode (Required): string.  Value enum: "test", "live". partner_app_install_id (Required): string. sandbox_id (Optional): string. type (Required): string.  Value enum: "installed_merchants". oneOf[1] (Value): {@see PartnerWebhookEnvelopeSourcePartnerAppInput}. The partner_app source of a partner webhook event. oneOf[2] (Value): {@see PartnerWebhookEnvelopeSourceInstalledMerchantsInput}. The installed_merchants source of a partner webhook event.
     * @return array{'merchant_id': string, 'partner_app_install_id': string, 'type': string}|object|array{'environment_grant_id': string, 'merchant_id': string, 'mode': string, 'partner_app_install_id': string, 'sandbox_id'?: string, 'type': string}|object
     * @throws SdkError When source is omitted; use hasSource() or valueOrDefault().
     */
    public function getSource(): array|object { return $this->get('source'); }
    public function hasSource(): bool { return $this->has('source'); }
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
