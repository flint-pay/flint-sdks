<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $api_version
 * @property-read string|\DateTimeInterface $created_at
 * @property-read array{'object': array{'closed_reason'?: string|null, 'created_at': string|\DateTimeInterface, 'expires_at': string|\DateTimeInterface|null, 'idempotency_key'?: string, 'inventory_action_required'?: InventoryActionRequiredInput|array<array-key, mixed>|\stdClass, 'inventory_reservation_id': string, 'inventory_routing_source': InventoryRoutingSourceInput|array<array-key, mixed>|\stdClass, 'lines': list<InventoryReservationLineInput|array<array-key, mixed>|\stdClass>, 'owner': InventoryReservationOwnerInput|array<array-key, mixed>|\stdClass, 'replacement_inventory_reservation_id'?: string, 'source_inventory_reservation_id'?: string, 'status': string, 'supported_actions': list<string>, 'updated_at': string|\DateTimeInterface, 'version': string, ...}|object}|object $data
 * @property-read string $event_type
 * @property-read string $partner_app_id
 * @property-read int $payload_version
 * @property-read array{'merchant_id': string, 'partner_app_install_id': string, 'type': string}|object|array{'environment_grant_id': string, 'merchant_id': string, 'mode': string, 'partner_app_install_id': string, 'sandbox_id'?: string, 'type': string}|object $source
 * @property-read bool $test
 * @property-read string $webhook_event_id
 * Presence-aware input; omitted fields throw when accessed. */
final class Webhook_inventory_reservation_created_installed_merchantsInput extends Model {
    /** @param array{'api_version': string, 'created_at': string|\DateTimeInterface, 'data': array{'object': array{'closed_reason'?: string|null, 'created_at': string|\DateTimeInterface, 'expires_at': string|\DateTimeInterface|null, 'idempotency_key'?: string, 'inventory_action_required'?: InventoryActionRequiredInput|array<array-key, mixed>|\stdClass, 'inventory_reservation_id': string, 'inventory_routing_source': InventoryRoutingSourceInput|array<array-key, mixed>|\stdClass, 'lines': list<InventoryReservationLineInput|array<array-key, mixed>|\stdClass>, 'owner': InventoryReservationOwnerInput|array<array-key, mixed>|\stdClass, 'replacement_inventory_reservation_id'?: string, 'source_inventory_reservation_id'?: string, 'status': string, 'supported_actions': list<string>, 'updated_at': string|\DateTimeInterface, 'version': string, ...}|object}|object, 'event_type': string, 'partner_app_id': string, 'payload_version': int, 'source': array{'merchant_id': string, 'partner_app_install_id': string, 'type': string}|object|array{'environment_grant_id': string, 'merchant_id': string, 'mode': string, 'partner_app_install_id': string, 'sandbox_id'?: string, 'type': string}|object, 'test': bool, 'webhook_event_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('Webhook_inventory_reservation_created_installed_merchantsInput')); }
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
    /** Shape $ (Value): object. Shape $.object (Required): object and {@see InventoryReservationInput}. A claim on stock. Quantity moves from held to committed to consumed, and can be released or reallocated. Shape $.object.closed_reason (Optional): string or null. How the reservation ended. mixed when more than one terminal outcome applied. Value enum: "consumed", "released", "expired", "reallocated", "mixed", null. Shape $.object.created_at (Required): string. RFC3339 timestamp. Format: date-time. Shape $.object.expires_at (Required): string or null. When held quantity is released if it isn't committed first. null once no line holds quantity. Committed and consumed quantity never expire. Format: date-time. Shape $.object.idempotency_key (Optional): string. The Idempotency-Key of the request that created this resource; on a movement, of the command that wrote it. Omitted when that request had no key. Shape $.object.inventory_action_required (Optional): {@see InventoryActionRequiredInput}. Present when the claim needs a merchant action before commerce can continue. Says that an inventory reservation needs action, with the `reason` and the reservation lines affected. Shape $.object.inventory_reservation_id (Required): string. Shape $.object.inventory_routing_source (Required): {@see InventoryRoutingSourceInput}. Where an order, payment link, or reservation routes inventory from: a fixed Location, an inventory allocation policy, or one policy revision. Shape $.object.lines (Required): Array of {@see InventoryReservationLineInput}. Shape $.object.lines[] (Value): {@see InventoryReservationLineInput}. One item's location allocation within a reservation. Shape $.object.owner (Required): {@see InventoryReservationOwnerInput}. Who holds an inventory reservation: either a merchant claim identified by your `key`, or an order. Shape $.object.replacement_inventory_reservation_id (Optional): string. Set on a reservation whose claim Flint moved when it rerouted an order: the replacement reservation that now holds the quantity named in this reservation's reallocated_quantity. Shape $.object.source_inventory_reservation_id (Optional): string. Set on a replacement reservation: the reservation whose claim Flint moved here when it rerouted an order. This reservation holds the quantity that reservation reports as reallocated_quantity. Shape $.object.status (Required): string. active while any held or committed quantity remains; closed once none does. Value enum: "active", "closed". Shape $.object.supported_actions (Required): Array of string. Actions that can change this reservation now. Empty for a closed reservation and for one Flint holds for an order. Resending targets already applied succeeds in any status. Computed when Flint produced this response or event, so replays and webhooks keep their original value. [] enum: "commit", "consume", "release". Shape $.object.supported_actions[] (Value): string.  Value enum: "commit", "consume", "release". Shape $.object.updated_at (Required): string. RFC3339 timestamp. Format: date-time. Shape $.object.version (Required): integer string. The reservation version. Send it as expected_version to reject a write if the reservation changed. Use an integer string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     * @return array{'object': array{'closed_reason'?: string|null, 'created_at': string|\DateTimeInterface, 'expires_at': string|\DateTimeInterface|null, 'idempotency_key'?: string, 'inventory_action_required'?: InventoryActionRequiredInput|array<array-key, mixed>|\stdClass, 'inventory_reservation_id': string, 'inventory_routing_source': InventoryRoutingSourceInput|array<array-key, mixed>|\stdClass, 'lines': list<InventoryReservationLineInput|array<array-key, mixed>|\stdClass>, 'owner': InventoryReservationOwnerInput|array<array-key, mixed>|\stdClass, 'replacement_inventory_reservation_id'?: string, 'source_inventory_reservation_id'?: string, 'status': string, 'supported_actions': list<string>, 'updated_at': string|\DateTimeInterface, 'version': string, ...}|object}|object
     * @throws SdkError When data is omitted; use hasData() or valueOrDefault().
     */
    public function getData(): array|object { return $this->get('data'); }
    public function hasData(): bool { return $this->has('data'); }
    /** Shape $ (Value): string.  Value enum: "inventory_reservation.created".
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
    /** Shape $ (Value): {@see PartnerWebhookEnvelopeSourceInput} and object. The source of a partner webhook event, selected by type. Shape $.environment_grant_id (Required): string. Shape $.merchant_id (Required): string. Shape $.mode (Required): string.  Value enum: "test", "live". Shape $.partner_app_install_id (Required): string. Shape $.sandbox_id (Optional): string. Shape $.type (Required): string.  Value enum: "installed_merchants". Shape $.oneOf[1] (Value): {@see PartnerWebhookEnvelopeSourcePartnerAppInput}. The partner_app source of a partner webhook event. Shape $.oneOf[2] (Value): {@see PartnerWebhookEnvelopeSourceInstalledMerchantsInput}. The installed_merchants source of a partner webhook event.
     * @return array{'merchant_id': string, 'partner_app_install_id': string, 'type': string}|object|array{'environment_grant_id': string, 'merchant_id': string, 'mode': string, 'partner_app_install_id': string, 'sandbox_id'?: string, 'type': string}|object
     * @throws SdkError When source is omitted; use hasSource() or valueOrDefault().
     */
    public function getSource(): array|object { return $this->get('source'); }
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
