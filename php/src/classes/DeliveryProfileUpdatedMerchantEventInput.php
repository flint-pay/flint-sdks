<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $api_version
 * @property-read string|\DateTimeInterface $created_at
 * @property-read array{'object': array{'configuration': DeliveryProfileConfigurationInput|array<array-key, mixed>|\stdClass, 'created_at': string|\DateTimeInterface, 'current_delivery_profile_revision_id': string, 'delivery_profile_id': string, 'diagnostics'?: DeliveryProfileDiagnosticsInput|array<array-key, mixed>|\stdClass, 'external_reference_id'?: string, 'metadata'?: MetadataMapInput|array<array-key, mixed>|\stdClass, 'name': string, 'status': string, 'updated_at': string|\DateTimeInterface, 'version': int}|object}|object $data
 * @property-read string $event_type
 * @property-read string $merchant_id
 * @property-read string $mode
 * @property-read int $payload_version
 * @property-read array{'id': string, 'idempotency_key'?: string}|object|null $request
 * @property-read bool $test
 * @property-read string $webhook_event_id
 * Presence-aware input; omitted fields throw when accessed. */
final class DeliveryProfileUpdatedMerchantEventInput extends Model {
    /** @param array{'api_version': string, 'created_at': string|\DateTimeInterface, 'data': array{'object': array{'configuration': DeliveryProfileConfigurationInput|array<array-key, mixed>|\stdClass, 'created_at': string|\DateTimeInterface, 'current_delivery_profile_revision_id': string, 'delivery_profile_id': string, 'diagnostics'?: DeliveryProfileDiagnosticsInput|array<array-key, mixed>|\stdClass, 'external_reference_id'?: string, 'metadata'?: MetadataMapInput|array<array-key, mixed>|\stdClass, 'name': string, 'status': string, 'updated_at': string|\DateTimeInterface, 'version': int}|object}|object, 'event_type': string, 'merchant_id': string, 'mode': string, 'payload_version': int, 'request': array{'id': string, 'idempotency_key'?: string}|object|null, 'test': bool, 'webhook_event_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryProfileUpdatedMerchantEventInput')); }
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
    /**  object (Required): object and {@see DeliveryProfileInput}. Reusable delivery rules assigned to catalog items. object.configuration (Required): {@see DeliveryProfileConfigurationInput}. Current delivery requirement and grouping policy. Whether delivery planning applies to items under a delivery profile, and if so the allowed delivery types, resolution mode, origin policy, packing rules, weight, and dimensions. object.created_at (Required): string. Time the profile was created. Format: date-time. object.current_delivery_profile_revision_id (Required): string. Immutable revision used for new line-item snapshots. object.delivery_profile_id (Required): string. Stable delivery profile ID. object.diagnostics (Optional): {@see DeliveryProfileDiagnosticsInput}. Read-only catalog and delivery-method compatibility diagnostics. Read-only coverage checks for a delivery profile, such as how many active Locations have no compatible delivery method and how many countries its zones name. object.external_reference_id (Optional): string. Caller-owned identifier for this resource in an external system. maxLength: 255. object.metadata (Optional): {@see MetadataMapInput}. Caller-owned metadata. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. object.name (Required): string. Merchant-facing profile name. object.status (Required): string. Current profile lifecycle status. Value enum: "active", "archived". object.updated_at (Required): string. Time the profile last changed. Format: date-time. object.version (Required): integer. Optimistic-concurrency version for profile writes. Format: uint64. minimum: 1.
     * @return array{'object': array{'configuration': DeliveryProfileConfigurationInput|array<array-key, mixed>|\stdClass, 'created_at': string|\DateTimeInterface, 'current_delivery_profile_revision_id': string, 'delivery_profile_id': string, 'diagnostics'?: DeliveryProfileDiagnosticsInput|array<array-key, mixed>|\stdClass, 'external_reference_id'?: string, 'metadata'?: MetadataMapInput|array<array-key, mixed>|\stdClass, 'name': string, 'status': string, 'updated_at': string|\DateTimeInterface, 'version': int}|object}|object
     * @throws SdkError When data is omitted; use hasData() or valueOrDefault().
     */
    public function getData(): array|object { return $this->get('data'); }
    public function hasData(): bool { return $this->has('data'); }
    /** Value enum: "delivery_profile.updated".
     * @return string
     * @throws SdkError When event_type is omitted; use hasEventType() or valueOrDefault().
     */
    public function getEventType(): string { return $this->get('event_type'); }
    public function hasEventType(): bool { return $this->has('event_type'); }
    /** merchant_id
     * @return string
     * @throws SdkError When merchant_id is omitted; use hasMerchantId() or valueOrDefault().
     */
    public function getMerchantId(): string { return $this->get('merchant_id'); }
    public function hasMerchantId(): bool { return $this->has('merchant_id'); }
    /** Value enum: "test", "live".
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
    /**  id (Required): string. idempotency_key (Optional): string. The Idempotency-Key the originating request sent. Absent when it sent none.
     * @return array{'id': string, 'idempotency_key'?: string}|object|null
     * @throws SdkError When request is omitted; use hasRequest() or valueOrDefault().
     */
    public function getRequest(): array|object|null { return $this->get('request'); }
    public function hasRequest(): bool { return $this->has('request'); }
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
