<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $api_version
 * @property-read string|\DateTimeInterface $created_at
 * @property-read array{'object': array{'closed_reason'?: string|null, 'created_at': string|\DateTimeInterface, 'expires_at': string|\DateTimeInterface|null, 'idempotency_key'?: string, 'inventory_action_required'?: InventoryActionRequiredInput|array<array-key, mixed>|\stdClass, 'inventory_reservation_id': string, 'inventory_routing_source': InventoryRoutingSourceInput|array<array-key, mixed>|\stdClass, 'lines': list<InventoryReservationLineInput|array<array-key, mixed>|\stdClass>, 'owner': InventoryReservationOwnerInput|array<array-key, mixed>|\stdClass, 'replacement_inventory_reservation_id'?: string, 'source_inventory_reservation_id'?: string, 'status': string, 'supported_actions': list<string>, 'updated_at': string|\DateTimeInterface, 'version': int, ...}|object, 'previous_attributes'?: array<array-key, mixed>|\stdClass}|object $data
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
final class InventoryReservationConsumedMerchantEventInput extends Model {
    /** @param array{'api_version': string, 'created_at': string|\DateTimeInterface, 'data': array{'object': array{'closed_reason'?: string|null, 'created_at': string|\DateTimeInterface, 'expires_at': string|\DateTimeInterface|null, 'idempotency_key'?: string, 'inventory_action_required'?: InventoryActionRequiredInput|array<array-key, mixed>|\stdClass, 'inventory_reservation_id': string, 'inventory_routing_source': InventoryRoutingSourceInput|array<array-key, mixed>|\stdClass, 'lines': list<InventoryReservationLineInput|array<array-key, mixed>|\stdClass>, 'owner': InventoryReservationOwnerInput|array<array-key, mixed>|\stdClass, 'replacement_inventory_reservation_id'?: string, 'source_inventory_reservation_id'?: string, 'status': string, 'supported_actions': list<string>, 'updated_at': string|\DateTimeInterface, 'version': int, ...}|object, 'previous_attributes'?: array<array-key, mixed>|\stdClass}|object, 'event_source': string, 'event_type': string, 'merchant_id': string, 'mode': string, 'payload_version': int, 'request': array{'id': string, 'idempotency_key'?: string}|object|null, 'sandbox_id'?: string, 'test': bool, 'webhook_event_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventoryReservationConsumedMerchantEventInput')); }
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
    /** The resource snapshot recorded for this event and rendered at the delivery API version. object (Required): object. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. object.closed_reason (Optional): string or null. How the reservation ended. adopted when its remaining held stock moved to a delivery selection. mixed when more than one terminal outcome applied. `null` when the reservation isn't closed. Value enum: "consumed", "released", "expired", "reallocated", "adopted", "mixed", null. object.created_at (Required): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.expires_at (Required): string or null. When held quantity is released if it isn't committed first. Backordered quantity that payment hasn't confirmed yet carries the same deadline. Committed and consumed quantity never expire. `null` when no line holds quantity or has unconfirmed backordered quantity. Format: date-time. Example: "2026-08-02T16:00:00Z". object.idempotency_key (Optional): string. The Idempotency-Key of the request that created this resource; on a movement, of the command that wrote it. Omitted when that request had no key. object.inventory_action_required (Optional): {@see InventoryActionRequiredInput}. Present when the claim needs a merchant action before commerce can continue. Says that an inventory reservation needs action, with the `reason` and the reservation lines affected. object.inventory_reservation_id (Required): string. Unique identifier for this inventory reservation, prefixed `invr_`. Example: "invr_01KEZF7C0041ENRR0C2NF3AP12". object.inventory_routing_source (Required): {@see InventoryRoutingSourceInput}. How Flint chooses the Locations that serve the reservation: one fixed Location, an allocation policy, or a specific policy revision. Where an order, payment link, or reservation routes inventory from: a fixed Location, an inventory allocation policy, or one policy revision. object.lines (Required): Array of {@see InventoryReservationLineInput}. Allocations of the reserved stock, one for each item and Location. object.lines[] (Value): {@see InventoryReservationLineInput}. One item's location allocation within a reservation. object.owner (Required): {@see InventoryReservationOwnerInput}. Who holds the reservation: a `key` you choose, or an order Flint holds the stock for. Who holds an inventory reservation: either a merchant claim identified by your `key`, or an order. object.replacement_inventory_reservation_id (Optional): string. Set on a reservation whose claim Flint moved when it rerouted an order: the replacement reservation that now holds the quantity named in this reservation's reallocated_quantity. Example: "invr_01KEZF7C0041ENRR0C2NF3AP12". object.source_inventory_reservation_id (Optional): string. Set on a replacement reservation: the reservation whose claim Flint moved here when it rerouted an order. This reservation holds the quantity that reservation reports as reallocated_quantity. Example: "invr_01KEZF7C0041ENRR0C2NF3AP12". object.status (Required): string. active while any held, committed, or backordered quantity remains; closed once none does. Value enum: "active", "closed". object.supported_actions (Required): Array of string. Actions that can change this reservation now. Empty for a closed reservation and for one Flint holds for an order. Resending targets already applied succeeds in any status. Computed when Flint produced this response or event, so replays and webhooks keep their original value. [] enum: "commit", "consume", "release". object.supported_actions[] (Value): string.  Value enum: "commit", "consume", "release". object.updated_at (Required): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.version (Required): integer. The reservation version. Send it as expected_version to reject a write if the reservation changed. Format: uint64. minimum: 1. previous_attributes (Optional): object. Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.
     * @return array{'object': array{'closed_reason'?: string|null, 'created_at': string|\DateTimeInterface, 'expires_at': string|\DateTimeInterface|null, 'idempotency_key'?: string, 'inventory_action_required'?: InventoryActionRequiredInput|array<array-key, mixed>|\stdClass, 'inventory_reservation_id': string, 'inventory_routing_source': InventoryRoutingSourceInput|array<array-key, mixed>|\stdClass, 'lines': list<InventoryReservationLineInput|array<array-key, mixed>|\stdClass>, 'owner': InventoryReservationOwnerInput|array<array-key, mixed>|\stdClass, 'replacement_inventory_reservation_id'?: string, 'source_inventory_reservation_id'?: string, 'status': string, 'supported_actions': list<string>, 'updated_at': string|\DateTimeInterface, 'version': int, ...}|object, 'previous_attributes'?: array<array-key, mixed>|\stdClass}|object
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
    /** The resource change or condition this event announces. Value enum: "inventory_reservation.consumed".
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
