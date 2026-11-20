<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $api_version
 * @property-read string|\DateTimeInterface $created_at
 * @property-read array{'actor'?: ReturnActorInput|array<array-key, mixed>|\stdClass, 'object': array{'configuration': DeliveryZoneConfigurationInput|array<array-key, mixed>|\stdClass, 'created_at': string|\DateTimeInterface, 'current_delivery_zone_revision_id': string, 'delivery_zone_id': string, 'external_reference_id'?: string, 'metadata'?: MetadataMapInput|array<array-key, mixed>|\stdClass, 'name': string, 'status': string, 'updated_at': string|\DateTimeInterface, 'version': int}|object, 'previous_attributes'?: array{'configuration'?: DeliveryZoneConfigurationPreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'created_at'?: string|\DateTimeInterface|null, 'current_delivery_zone_revision_id'?: string|null, 'delivery_zone_id'?: string|null, 'external_reference_id'?: string|null, 'metadata'?: MetadataMapPreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'name'?: string|null, 'status'?: string|null, 'updated_at'?: string|\DateTimeInterface|null, 'version'?: int|null, ...}|object}|object $data
 * @property-read string $event_source
 * @property-read string $event_type
 * @property-read string $partner_app_id
 * @property-read int $payload_version
 * @property-read array{'environment_grant_id': string, 'merchant_id': string, 'mode': string, 'partner_app_install_id': string, 'sandbox_id'?: string}|object $source
 * @property-read bool $test
 * @property-read string $webhook_event_id
 * Presence-aware input; omitted fields throw when accessed. */
final class DeliveryZoneArchivedInstalledMerchantsEventInput extends Model {
    /** @param array{'api_version': string, 'created_at': string|\DateTimeInterface, 'data': array{'actor'?: ReturnActorInput|array<array-key, mixed>|\stdClass, 'object': array{'configuration': DeliveryZoneConfigurationInput|array<array-key, mixed>|\stdClass, 'created_at': string|\DateTimeInterface, 'current_delivery_zone_revision_id': string, 'delivery_zone_id': string, 'external_reference_id'?: string, 'metadata'?: MetadataMapInput|array<array-key, mixed>|\stdClass, 'name': string, 'status': string, 'updated_at': string|\DateTimeInterface, 'version': int}|object, 'previous_attributes'?: array{'configuration'?: DeliveryZoneConfigurationPreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'created_at'?: string|\DateTimeInterface|null, 'current_delivery_zone_revision_id'?: string|null, 'delivery_zone_id'?: string|null, 'external_reference_id'?: string|null, 'metadata'?: MetadataMapPreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'name'?: string|null, 'status'?: string|null, 'updated_at'?: string|\DateTimeInterface|null, 'version'?: int|null, ...}|object}|object, 'event_source': string, 'event_type': string, 'partner_app_id': string, 'payload_version': int, 'source': array{'environment_grant_id': string, 'merchant_id': string, 'mode': string, 'partner_app_install_id': string, 'sandbox_id'?: string}|object, 'test': bool, 'webhook_event_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryZoneArchivedInstalledMerchantsEventInput')); }
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
    /** The resource snapshot recorded for this event and rendered at the delivery API version. actor (Optional): {@see ReturnActorInput}. Who caused this event, captured when the change commits. Omitted when the event predates actor attribution or attribution is unavailable. Who performed a return action: a buyer, merchant, integration, or the system, with an optional ID. object (Required): object. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. object.configuration (Required): {@see DeliveryZoneConfigurationInput}. Current geographic eligibility conditions. A reusable geographic predicate containing only country, state, postal_code, and radius conditions. object.created_at (Required): string. Time the zone was created. Format: date-time. Example: "2026-08-02T16:00:00Z". object.current_delivery_zone_revision_id (Required): string. Immutable revision used for new quotes. Example: "dzoner_01KEZF7C00DF2H9VW29JN861K6". object.delivery_zone_id (Required): string. Stable delivery zone ID. Example: "dzone_01KEZF7C005RY7KGCN4M2CH5WP". object.external_reference_id (Optional): string. Caller-owned identifier for this resource in an external system. maxLength: 255. Example: "warehouse-1842". object.metadata (Optional): {@see MetadataMapInput}. Caller-owned metadata. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. object.name (Required): string. Merchant-facing zone name. object.status (Required): string. Current zone lifecycle status. Value enum: "active", "archived". object.updated_at (Required): string. Time the zone last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". object.version (Required): integer. Optimistic-concurrency version for zone writes. Format: uint64. minimum: 1. previous_attributes (Optional): object. Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. previous_attributes.configuration (Optional): {@see DeliveryZoneConfigurationPreviousAttributesInput} or null. Current geographic eligibility conditions. previous_attributes.configuration.anyOf[1] (Value): {@see DeliveryZoneConfigurationPreviousAttributesInput}. previous_attributes.configuration.anyOf[2] (Value): null. previous_attributes.created_at (Optional): string or null. Time the zone was created. previous_attributes.created_at.anyOf[1] (Value): string. Time the zone was created. Format: date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.created_at.anyOf[2] (Value): null. previous_attributes.current_delivery_zone_revision_id (Optional): string or null. Immutable revision used for new quotes. previous_attributes.current_delivery_zone_revision_id.anyOf[1] (Value): string. Immutable revision used for new quotes. Example: "dzoner_01KEZF7C00DF2H9VW29JN861K6". previous_attributes.current_delivery_zone_revision_id.anyOf[2] (Value): null. previous_attributes.delivery_zone_id (Optional): string or null. Stable delivery zone ID. previous_attributes.delivery_zone_id.anyOf[1] (Value): string. Stable delivery zone ID. Example: "dzone_01KEZF7C005RY7KGCN4M2CH5WP". previous_attributes.delivery_zone_id.anyOf[2] (Value): null. previous_attributes.external_reference_id (Optional): string or null. Caller-owned identifier for this resource in an external system. previous_attributes.external_reference_id.anyOf[1] (Value): string. Caller-owned identifier for this resource in an external system. maxLength: 255. Example: "warehouse-1842". previous_attributes.external_reference_id.anyOf[2] (Value): null. previous_attributes.metadata (Optional): {@see MetadataMapPreviousAttributesInput} or null. Caller-owned metadata. previous_attributes.metadata.anyOf[1] (Value): {@see MetadataMapPreviousAttributesInput}. previous_attributes.metadata.anyOf[2] (Value): null. previous_attributes.name (Optional): string or null. Merchant-facing zone name. previous_attributes.name.anyOf[1] (Value): string. Merchant-facing zone name. previous_attributes.name.anyOf[2] (Value): null. previous_attributes.status (Optional): string or null. Current zone lifecycle status. Value enum: "active", "archived". previous_attributes.status.anyOf[1] (Value): string. Current zone lifecycle status. Value enum: "active", "archived". previous_attributes.status.anyOf[2] (Value): null. previous_attributes.updated_at (Optional): string or null. Time the zone last changed. previous_attributes.updated_at.anyOf[1] (Value): string. Time the zone last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.updated_at.anyOf[2] (Value): null. previous_attributes.version (Optional): integer or null. Optimistic-concurrency version for zone writes. previous_attributes.version.anyOf[1] (Value): integer. Optimistic-concurrency version for zone writes. Format: uint64. minimum: 1. previous_attributes.version.anyOf[2] (Value): null.
     * @return array{'actor'?: ReturnActorInput|array<array-key, mixed>|\stdClass, 'object': array{'configuration': DeliveryZoneConfigurationInput|array<array-key, mixed>|\stdClass, 'created_at': string|\DateTimeInterface, 'current_delivery_zone_revision_id': string, 'delivery_zone_id': string, 'external_reference_id'?: string, 'metadata'?: MetadataMapInput|array<array-key, mixed>|\stdClass, 'name': string, 'status': string, 'updated_at': string|\DateTimeInterface, 'version': int}|object, 'previous_attributes'?: array{'configuration'?: DeliveryZoneConfigurationPreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'created_at'?: string|\DateTimeInterface|null, 'current_delivery_zone_revision_id'?: string|null, 'delivery_zone_id'?: string|null, 'external_reference_id'?: string|null, 'metadata'?: MetadataMapPreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'name'?: string|null, 'status'?: string|null, 'updated_at'?: string|\DateTimeInterface|null, 'version'?: int|null, ...}|object}|object
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
    /** The resource change or condition this event announces. Value enum: "delivery_zone.archived".
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
