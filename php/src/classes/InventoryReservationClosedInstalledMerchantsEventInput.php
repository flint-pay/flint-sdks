<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $api_version
 * @property-read string|\DateTimeInterface $created_at
 * @property-read array{'object': array{'closed_reason'?: string|null, 'created_at': string|\DateTimeInterface, 'expires_at': string|\DateTimeInterface|null, 'idempotency_key'?: string, 'inventory_action_required'?: InventoryActionRequiredInput|array<array-key, mixed>|\stdClass, 'inventory_reservation_id': string, 'inventory_routing_source': InventoryRoutingSourceInput|array<array-key, mixed>|\stdClass, 'lines': list<InventoryReservationLineInput|array<array-key, mixed>|\stdClass>, 'owner': InventoryReservationOwnerInput|array<array-key, mixed>|\stdClass, 'replacement_inventory_reservation_id'?: string, 'source_inventory_reservation_id'?: string, 'status': string, 'supported_actions': list<string>, 'updated_at': string|\DateTimeInterface, 'version': int, ...}|object, 'previous_attributes'?: array<array-key, mixed>|\stdClass}|object $data
 * @property-read string $event_source
 * @property-read string $event_type
 * @property-read string $partner_app_id
 * @property-read int $payload_version
 * @property-read array{'environment_grant_id': string, 'merchant_id': string, 'mode': string, 'partner_app_install_id': string, 'sandbox_id'?: string}|object $source
 * @property-read bool $test
 * @property-read string $webhook_event_id
 * Presence-aware input; omitted fields throw when accessed. */
final class InventoryReservationClosedInstalledMerchantsEventInput extends Model {
    /** @param array{'api_version': string, 'created_at': string|\DateTimeInterface, 'data': array{'object': array{'closed_reason'?: string|null, 'created_at': string|\DateTimeInterface, 'expires_at': string|\DateTimeInterface|null, 'idempotency_key'?: string, 'inventory_action_required'?: InventoryActionRequiredInput|array<array-key, mixed>|\stdClass, 'inventory_reservation_id': string, 'inventory_routing_source': InventoryRoutingSourceInput|array<array-key, mixed>|\stdClass, 'lines': list<InventoryReservationLineInput|array<array-key, mixed>|\stdClass>, 'owner': InventoryReservationOwnerInput|array<array-key, mixed>|\stdClass, 'replacement_inventory_reservation_id'?: string, 'source_inventory_reservation_id'?: string, 'status': string, 'supported_actions': list<string>, 'updated_at': string|\DateTimeInterface, 'version': int, ...}|object, 'previous_attributes'?: array<array-key, mixed>|\stdClass}|object, 'event_source': string, 'event_type': string, 'partner_app_id': string, 'payload_version': int, 'source': array{'environment_grant_id': string, 'merchant_id': string, 'mode': string, 'partner_app_install_id': string, 'sandbox_id'?: string}|object, 'test': bool, 'webhook_event_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventoryReservationClosedInstalledMerchantsEventInput')); }
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
    /** The origin of the event. Selects the webhook envelope and the fields in source. Value enum: "installed_merchants".
     * @return string
     * @throws SdkError When event_source is omitted; use hasEventSource() or valueOrDefault().
     */
    public function getEventSource(): string { return $this->get('event_source'); }
    public function hasEventSource(): bool { return $this->has('event_source'); }
    /** The resource change or condition this event announces. Value enum: "inventory_reservation.closed".
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
