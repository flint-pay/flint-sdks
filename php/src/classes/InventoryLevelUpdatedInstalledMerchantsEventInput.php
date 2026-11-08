<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $api_version
 * @property-read string|\DateTimeInterface $created_at
 * @property-read array{'object': array{'available_quantity': int, 'backordered_quantity': int, 'claim_version': int, 'committed_quantity': int, 'created_at': string|\DateTimeInterface, 'damaged_quantity': int, 'held_quantity': int, 'incoming_quantity': int, 'inventory_item'?: InventoryItemInput|array<array-key, mixed>|\stdClass, 'inventory_item_id': string, 'inventory_level_id': string, 'location_id': string, 'on_hand_quantity': int, 'physical_version': int, 'quality_control_quantity': int, 'quarantined_quantity': int, 'safety_stock_quantity': int, 'shortage_quantity': int, 'unavailable_on_hand_quantity': int, 'updated_at': string|\DateTimeInterface, 'version': int, ...}|object, 'previous_attributes'?: array<array-key, mixed>|\stdClass}|object $data
 * @property-read string $event_source
 * @property-read string $event_type
 * @property-read string $partner_app_id
 * @property-read int $payload_version
 * @property-read array{'environment_grant_id': string, 'merchant_id': string, 'mode': string, 'partner_app_install_id': string, 'sandbox_id'?: string}|object $source
 * @property-read bool $test
 * @property-read string $webhook_event_id
 * Presence-aware input; omitted fields throw when accessed. */
final class InventoryLevelUpdatedInstalledMerchantsEventInput extends Model {
    /** @param array{'api_version': string, 'created_at': string|\DateTimeInterface, 'data': array{'object': array{'available_quantity': int, 'backordered_quantity': int, 'claim_version': int, 'committed_quantity': int, 'created_at': string|\DateTimeInterface, 'damaged_quantity': int, 'held_quantity': int, 'incoming_quantity': int, 'inventory_item'?: InventoryItemInput|array<array-key, mixed>|\stdClass, 'inventory_item_id': string, 'inventory_level_id': string, 'location_id': string, 'on_hand_quantity': int, 'physical_version': int, 'quality_control_quantity': int, 'quarantined_quantity': int, 'safety_stock_quantity': int, 'shortage_quantity': int, 'unavailable_on_hand_quantity': int, 'updated_at': string|\DateTimeInterface, 'version': int, ...}|object, 'previous_attributes'?: array<array-key, mixed>|\stdClass}|object, 'event_source': string, 'event_type': string, 'partner_app_id': string, 'payload_version': int, 'source': array{'environment_grant_id': string, 'merchant_id': string, 'mode': string, 'partner_app_install_id': string, 'sandbox_id'?: string}|object, 'test': bool, 'webhook_event_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventoryLevelUpdatedInstalledMerchantsEventInput')); }
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
    /** The resource snapshot recorded for this event and rendered at the delivery API version. object (Required): object. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. object.available_quantity (Required): integer. Derived and never written: on_hand minus unavailable, held, committed, and safety stock, never below 0. See shortage_quantity for the excess. Whole-number quantity; fractional quantities are not supported. Format: int64. object.backordered_quantity (Required): integer. Whole-number quantity; fractional quantities are not supported. Format: int64. minimum: 0. object.claim_version (Required): integer. Advances only when held or committed quantities change. Format: int64. minimum: 0. object.committed_quantity (Required): integer. Units promised to accepted orders. Still physically present until fulfillment consumes them. Whole-number quantity; fractional quantities are not supported. Format: int64. object.created_at (Required): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.damaged_quantity (Required): integer. On-hand units known to be damaged. Not sellable. Whole-number quantity; fractional quantities are not supported. Format: int64. object.held_quantity (Required): integer. Units claimed by an open reservation that has not been committed. Whole-number quantity; fractional quantities are not supported. Format: int64. object.incoming_quantity (Required): integer. Units recorded as inbound but not yet on hand. Does not count toward availability. Whole-number quantity; fractional quantities are not supported. Format: int64. object.inventory_item (Optional): {@see InventoryItemInput}. The inventory item this level belongs to. Present only when the list request asked for expand=inventory_item. A stock-keeping unit that inventory quantities are tracked against. Catalog variants reference an inventory item rather than carrying their own counter. object.inventory_item_id (Required): string. ID of the inventory item the stock is for. Example: "invi_01KEZF7C00A6YEM25MTHW2MPZY". object.inventory_level_id (Required): string. Unique identifier for this inventory level, prefixed `invl_`. Example: "invl_01KEZF7C00H201XZXKRX5KMDDE". object.location_id (Required): string. ID of the Location that holds the stock. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". object.on_hand_quantity (Required): integer. Units physically present at the Location, in any condition. Whole-number quantity; fractional quantities are not supported. Format: int64. object.physical_version (Required): integer. Advances only when on-hand or condition quantities change. Format: int64. minimum: 0. object.quality_control_quantity (Required): integer. On-hand units awaiting inspection. Not sellable. Whole-number quantity; fractional quantities are not supported. Format: int64. object.quarantined_quantity (Required): integer. On-hand units isolated for review. Not sellable. Whole-number quantity; fractional quantities are not supported. Format: int64. object.safety_stock_quantity (Required): integer. Buffer withheld from allocation. Change it with PATCH /v1/inventory-levels/{inventory_level_id}. Whole-number quantity; fractional quantities are not supported. Format: int64. object.shortage_quantity (Required): integer. Derived: claims exceeding sellable physical stock. Positive only after stock is lost, damaged, or corrected down. Whole-number quantity; fractional quantities are not supported. Format: int64. object.unavailable_on_hand_quantity (Required): integer. Derived: quality_control + damaged + quarantined. Whole-number quantity; fractional quantities are not supported. Format: int64. object.updated_at (Required): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.version (Required): integer. Changes on every quantity or claim change at this level, including holds and commits. Read it immediately before a PATCH. A level that a counted adjustment creates without a quantity change starts at version 0. Format: int64. minimum: 0. previous_attributes (Optional): object. Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.
     * @return array{'object': array{'available_quantity': int, 'backordered_quantity': int, 'claim_version': int, 'committed_quantity': int, 'created_at': string|\DateTimeInterface, 'damaged_quantity': int, 'held_quantity': int, 'incoming_quantity': int, 'inventory_item'?: InventoryItemInput|array<array-key, mixed>|\stdClass, 'inventory_item_id': string, 'inventory_level_id': string, 'location_id': string, 'on_hand_quantity': int, 'physical_version': int, 'quality_control_quantity': int, 'quarantined_quantity': int, 'safety_stock_quantity': int, 'shortage_quantity': int, 'unavailable_on_hand_quantity': int, 'updated_at': string|\DateTimeInterface, 'version': int, ...}|object, 'previous_attributes'?: array<array-key, mixed>|\stdClass}|object
     * @throws SdkError When data is omitted; use hasData() or valueOrDefault().
     */
    public function getData(): array|object { return $this->get('data'); }
    public function hasData(): bool { return $this->has('data'); }
    /** The origin of the event. Selects the webhook envelope and the fields in source. Value enum: "installed_merchants".
     * @return string
     * @throws SdkError When event_source is omitted; use hasEventSource() or valueOrDefault().
     */
    public function getEventSource(): string { return $this->get('event_source'); }
    public function hasEventSource(): bool { return $this->has('event_source'); }
    /** The resource change or condition this event announces. Value enum: "inventory_level.updated".
     * @return string
     * @throws SdkError When event_type is omitted; use hasEventType() or valueOrDefault().
     */
    public function getEventType(): string { return $this->get('event_type'); }
    public function hasEventType(): bool { return $this->has('event_type'); }
    /** ID of the partner app that owns the receiving endpoint. Example: "papp_01KEZF7C00Y8VMXYZ1GNPP3WHV".
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
    /** The merchant and partner app install this event concerns, with environment details for installed-merchant events. The merchant and partner app install the event concerns. Environment fields are present for installed-merchant events. environment_grant_id (Required): string. The grant authorizing delivery from this merchant environment. Example: "egrt_01KEZF7C00MQQDDB7YWGXV3MXY". merchant_id (Required): string. The merchant the event concerns. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". mode (Required): string. Whether the installed merchant event came from live mode or a sandbox. Value enum: "test", "live". partner_app_install_id (Required): string. The install connecting the merchant to the partner app. Example: "pinst_01KEZF7C003HVKZR3GZAW6AFAZ". sandbox_id (Optional): string. The sandbox the event came from, present only in test mode. Example: "test_01KEZF7C00JC77HTMTB2XHNPE0".
     * @return array{'environment_grant_id': string, 'merchant_id': string, 'mode': string, 'partner_app_install_id': string, 'sandbox_id'?: string}|object
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
    /** Stable ID of the recorded webhook event, shared by its delivery attempts. Example: "whev_01KEZF7C00362MS3HV970TRZGS".
     * @return string
     * @throws SdkError When webhook_event_id is omitted; use hasWebhookEventId() or valueOrDefault().
     */
    public function getWebhookEventId(): string { return $this->get('webhook_event_id'); }
    public function hasWebhookEventId(): bool { return $this->has('webhook_event_id'); }
}
