<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $api_version
 * @property-read string|\DateTimeInterface $created_at
 * @property-read array{'object': array{'configuration': DeliveryMethodConfigurationInput|array<array-key, mixed>|\stdClass, 'created_at': string|\DateTimeInterface, 'current_delivery_method_revision_id': string, 'delivery_method_id': string, 'delivery_revocation_id': string|null, 'description'?: string, 'display_position': int, 'external_reference_id'?: string, 'metadata'?: MetadataMapInput|array<array-key, mixed>|\stdClass, 'name': string, 'recommendation_priority'?: int, 'status': string, 'subscription_counts': SubscriptionCountsInput|array<array-key, mixed>|\stdClass, 'type': string, 'updated_at': string|\DateTimeInterface, 'version': int}|object, 'previous_attributes'?: array<array-key, mixed>|\stdClass}|object $data
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
final class DeliveryMethodUpdatedMerchantEventInput extends Model {
    /** @param array{'api_version': string, 'created_at': string|\DateTimeInterface, 'data': array{'object': array{'configuration': DeliveryMethodConfigurationInput|array<array-key, mixed>|\stdClass, 'created_at': string|\DateTimeInterface, 'current_delivery_method_revision_id': string, 'delivery_method_id': string, 'delivery_revocation_id': string|null, 'description'?: string, 'display_position': int, 'external_reference_id'?: string, 'metadata'?: MetadataMapInput|array<array-key, mixed>|\stdClass, 'name': string, 'recommendation_priority'?: int, 'status': string, 'subscription_counts': SubscriptionCountsInput|array<array-key, mixed>|\stdClass, 'type': string, 'updated_at': string|\DateTimeInterface, 'version': int}|object, 'previous_attributes'?: array<array-key, mixed>|\stdClass}|object, 'event_source': string, 'event_type': string, 'merchant_id': string, 'mode': string, 'payload_version': int, 'request': array{'id': string, 'idempotency_key'?: string}|object|null, 'sandbox_id'?: string, 'test': bool, 'webhook_event_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryMethodUpdatedMerchantEventInput')); }
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
    /** The resource snapshot recorded for this event and rendered at the delivery API version. object (Required): object. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. object.configuration (Required): {@see DeliveryMethodConfigurationInput}. Current eligibility, pricing, origin, estimate, and tax configuration. How a delivery method works: its origin, pricing, eligibility, timing estimate, tax settings, recipient requirements, and option lifetimes. object.created_at (Required): string. Time the method was created. Format: date-time. Example: "2026-08-02T16:00:00Z". object.current_delivery_method_revision_id (Required): string. Immutable revision currently used for new quotes. Example: "dmetr_01KEZF7C001ZF9D92DY1G51GV9". object.delivery_method_id (Required): string. Stable delivery method ID. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0". object.delivery_revocation_id (Required): string or null. The revocation fencing this resource's own current revision. `null` when the current revision isn't revoked. It doesn't cover dependencies: a method can be unusable while this is `null` because its rate callback revision, signing key, or a Location's address is revoked. A revocation doesn't change `status`; publish a new revision to clear it. Example: "drev_01KEZF7C007Q141XJ28YAAC87B". object.description (Optional): string. Optional buyer-facing description. object.display_position (Required): integer. Ascending display order among methods. Format: int32. object.external_reference_id (Optional): string. Caller-owned identifier for this resource in an external system. maxLength: 255. Example: "warehouse-1842". object.metadata (Optional): {@see MetadataMapInput}. Caller-owned metadata. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. object.name (Required): string. Merchant-facing method name. object.recommendation_priority (Optional): integer. Marks this method as recommended. Within each choice group, the available method with the lowest value is recommended and listed first. Ties go to the lower display_position, then the method ID. Null never recommends the method. Format: int32. object.status (Required): string. Current method lifecycle status. Value enum: "active", "inactive", "archived". object.subscription_counts (Required): {@see SubscriptionCountsInput}. Counts of subscriptions by status: active, past due, and paused. object.type (Required): string. Delivery mode this method offers. Value enum: "shipment", "local_delivery", "pickup". object.updated_at (Required): string. Time the method last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". object.version (Required): integer. Optimistic-concurrency version for method writes. Format: uint64. minimum: 1. previous_attributes (Optional): object. Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.
     * @return array{'object': array{'configuration': DeliveryMethodConfigurationInput|array<array-key, mixed>|\stdClass, 'created_at': string|\DateTimeInterface, 'current_delivery_method_revision_id': string, 'delivery_method_id': string, 'delivery_revocation_id': string|null, 'description'?: string, 'display_position': int, 'external_reference_id'?: string, 'metadata'?: MetadataMapInput|array<array-key, mixed>|\stdClass, 'name': string, 'recommendation_priority'?: int, 'status': string, 'subscription_counts': SubscriptionCountsInput|array<array-key, mixed>|\stdClass, 'type': string, 'updated_at': string|\DateTimeInterface, 'version': int}|object, 'previous_attributes'?: array<array-key, mixed>|\stdClass}|object
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
    /** The resource change or condition this event announces. Value enum: "delivery_method.updated".
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
