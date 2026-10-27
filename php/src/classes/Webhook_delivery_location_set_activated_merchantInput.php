<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $api_version
 * @property-read string|\DateTimeInterface $created_at
 * @property-read array{'object': array{'configuration': DeliveryLocationSetConfigurationInput|array<array-key, mixed>|\stdClass, 'created_at': string|\DateTimeInterface, 'current_delivery_location_set_revision_id': string, 'delivery_location_set_id': string, 'external_reference_id'?: string, 'metadata'?: array<array-key, string>|\stdClass, 'name': string, 'status': string, 'updated_at': string|\DateTimeInterface, 'version': string}|object}|object $data
 * @property-read string $event_type
 * @property-read string $merchant_id
 * @property-read string $mode
 * @property-read int $payload_version
 * @property-read array{'id': string, 'idempotency_key'?: string}|object|null $request
 * @property-read bool $test
 * @property-read string $webhook_event_id
 * Presence-aware input; omitted fields throw when accessed. */
final class Webhook_delivery_location_set_activated_merchantInput extends Model {
    /** @param array{'api_version': string, 'created_at': string|\DateTimeInterface, 'data': array{'object': array{'configuration': DeliveryLocationSetConfigurationInput|array<array-key, mixed>|\stdClass, 'created_at': string|\DateTimeInterface, 'current_delivery_location_set_revision_id': string, 'delivery_location_set_id': string, 'external_reference_id'?: string, 'metadata'?: array<array-key, string>|\stdClass, 'name': string, 'status': string, 'updated_at': string|\DateTimeInterface, 'version': string}|object}|object, 'event_type': string, 'merchant_id': string, 'mode': string, 'payload_version': int, 'request': array{'id': string, 'idempotency_key'?: string}|object|null, 'test': bool, 'webhook_event_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('Webhook_delivery_location_set_activated_merchantInput')); }
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
    /** Shape $ (Value): object. Shape $.object (Required): object and {@see DeliveryLocationSetInput}. The locations available to a delivery method. Shape $.object.configuration (Required): {@see DeliveryLocationSetConfigurationInput}. Current member Locations and selection rules. The location IDs in a delivery location set. Shape $.object.created_at (Required): string. Time the location set was created. Format: date-time. Shape $.object.current_delivery_location_set_revision_id (Required): string. Immutable revision used for new quotes. Shape $.object.delivery_location_set_id (Required): string. Stable delivery location set ID. Shape $.object.external_reference_id (Optional): string. Caller-owned identifier for this resource in an external system. maxLength: 255. Shape $.object.metadata (Optional): Map of string. Caller-owned metadata. Shape $.object.metadata.* (Value): string. Shape $.object.name (Required): string. Merchant-facing location set name. Shape $.object.status (Required): string. Current location set lifecycle status. Value enum: "active", "archived". Shape $.object.updated_at (Required): string. Time the location set last changed. Format: date-time. Shape $.object.version (Required): integer string. Optimistic-concurrency version for location set writes. Use an integer string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     * @return array{'object': array{'configuration': DeliveryLocationSetConfigurationInput|array<array-key, mixed>|\stdClass, 'created_at': string|\DateTimeInterface, 'current_delivery_location_set_revision_id': string, 'delivery_location_set_id': string, 'external_reference_id'?: string, 'metadata'?: array<array-key, string>|\stdClass, 'name': string, 'status': string, 'updated_at': string|\DateTimeInterface, 'version': string}|object}|object
     * @throws SdkError When data is omitted; use hasData() or valueOrDefault().
     */
    public function getData(): array|object { return $this->get('data'); }
    public function hasData(): bool { return $this->has('data'); }
    /** Shape $ (Value): string.  Value enum: "delivery_location_set.activated".
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
