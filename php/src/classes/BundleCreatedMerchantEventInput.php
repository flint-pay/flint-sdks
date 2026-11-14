<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $api_version
 * @property-read string|\DateTimeInterface $created_at
 * @property-read array{'object': array{'barcode'?: string, 'bundle_id': string, 'categories': list<CategoryReferenceInput|array<array-key, mixed>|\stdClass>, 'component_count': int, 'components': list<BundleComponentInput|array<array-key, mixed>|\stdClass>, 'created_at'?: string|\DateTimeInterface, 'delivery_configuration_status': string, 'description'?: string, 'external_reference_id'?: string, 'images': list<ImageAttachmentInput|array<array-key, mixed>|\stdClass>, 'is_available_for_sale': bool, 'merchant_id'?: string, 'metadata'?: MetadataMapInput|array<array-key, mixed>|\stdClass, 'modifier_set_id': string|null, 'name': string, 'sku'?: string, 'status': string, 'unit_price_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'updated_at'?: string|\DateTimeInterface, 'version': int, ...}|object, 'previous_attributes'?: array<array-key, mixed>|\stdClass}|object $data
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
final class BundleCreatedMerchantEventInput extends Model {
    /** @param array{'api_version': string, 'created_at': string|\DateTimeInterface, 'data': array{'object': array{'barcode'?: string, 'bundle_id': string, 'categories': list<CategoryReferenceInput|array<array-key, mixed>|\stdClass>, 'component_count': int, 'components': list<BundleComponentInput|array<array-key, mixed>|\stdClass>, 'created_at'?: string|\DateTimeInterface, 'delivery_configuration_status': string, 'description'?: string, 'external_reference_id'?: string, 'images': list<ImageAttachmentInput|array<array-key, mixed>|\stdClass>, 'is_available_for_sale': bool, 'merchant_id'?: string, 'metadata'?: MetadataMapInput|array<array-key, mixed>|\stdClass, 'modifier_set_id': string|null, 'name': string, 'sku'?: string, 'status': string, 'unit_price_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'updated_at'?: string|\DateTimeInterface, 'version': int, ...}|object, 'previous_attributes'?: array<array-key, mixed>|\stdClass}|object, 'event_source': string, 'event_type': string, 'merchant_id': string, 'mode': string, 'payload_version': int, 'request': array{'id': string, 'idempotency_key'?: string}|object|null, 'sandbox_id'?: string, 'test': bool, 'webhook_event_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BundleCreatedMerchantEventInput')); }
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
    /** The resource snapshot recorded for this event and rendered at the delivery API version. object (Required): object and {@see WebhookBundleInput}. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit these fields: `modifier_set`. object.barcode (Optional): string. Barcode assigned to this sellable item. object.bundle_id (Required): string. Stable identifier of the bundle. Example: "bun_01KEZF7C00TQ6S76Z6CVQF5SVN". object.categories (Required): Array of {@see CategoryReferenceInput}. Always present. Empty collections are returned as []. object.categories[] (Value): {@see CategoryReferenceInput}. A reference to a product category by ID, handle, and name. object.component_count (Required): integer. Number of components in the bundle. Format: int32. object.components (Required): Array of {@see BundleComponentInput}. The bundle's components in position order, on every bundle response including list rows. [] only when the bundle has no components. object.components[] (Value): {@see BundleComponentInput}. An item included in a bundle. object.created_at (Optional): string. When this resource was created, as an RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.delivery_configuration_status (Required): string. Delivery readiness aggregated across the bundle's components. A bundle with no components reports `not_applicable`. Value enum: "configured", "action_required", "not_applicable". object.description (Optional): string. Description of the bundle shown to buyers. object.external_reference_id (Optional): string. Caller-owned identifier for this resource in an external system. maxLength: 255. Example: "warehouse-1842". object.images (Required): Array of {@see ImageAttachmentInput}. Images attached to this resource, in display order. The first image is primary. object.images[] (Value): {@see ImageAttachmentInput}. An image attached to a resource, with its display properties and attachment metadata. object.is_available_for_sale (Required): boolean. Whether the bundle can be sold now: it is `active`, has at least one component, every component's variant and product are `active`, and `delivery_configuration_status` isn't `action_required`. Stock isn't considered. object.merchant_id (Optional): string. Identifier of the merchant that owns this resource. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.metadata (Optional): {@see MetadataMapInput}. Caller-owned metadata stored on this resource. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. object.modifier_set_id (Required): string or null. Attached modifier set. Null when no modifier set is assigned. Send null on update to remove it. Example: "ms_01KEZF7C007EWZVVFAWVJJM8NR". object.name (Required): string. Bundle name shown to buyers. object.sku (Optional): string. Stock keeping unit assigned to this sellable item. object.status (Required): string. Bundle lifecycle status. Archived bundles remain readable and cannot be edited. Value enum: "active", "inactive", "archived". object.unit_price_money (Required): {@see MoneyValueInput}. Price charged for one unit, in the currency's smallest unit. Monetary amount represented as integer minor units plus an ISO 4217 currency code. object.updated_at (Optional): string. When this resource last changed, as an RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.version (Required): integer. Current resource version. Send it as expected_version to reject a write if the resource has changed. Format: uint64. minimum: 0. previous_attributes (Optional): object. Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.
     * @return array{'object': array{'barcode'?: string, 'bundle_id': string, 'categories': list<CategoryReferenceInput|array<array-key, mixed>|\stdClass>, 'component_count': int, 'components': list<BundleComponentInput|array<array-key, mixed>|\stdClass>, 'created_at'?: string|\DateTimeInterface, 'delivery_configuration_status': string, 'description'?: string, 'external_reference_id'?: string, 'images': list<ImageAttachmentInput|array<array-key, mixed>|\stdClass>, 'is_available_for_sale': bool, 'merchant_id'?: string, 'metadata'?: MetadataMapInput|array<array-key, mixed>|\stdClass, 'modifier_set_id': string|null, 'name': string, 'sku'?: string, 'status': string, 'unit_price_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'updated_at'?: string|\DateTimeInterface, 'version': int, ...}|object, 'previous_attributes'?: array<array-key, mixed>|\stdClass}|object
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
    /** The resource change or condition this event announces. Value enum: "bundle.created".
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
