<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $api_version
 * @property-read string|\DateTimeInterface $created_at
 * @property-read array{'object': array{'allow_quantities': bool, 'created_at'?: string|\DateTimeInterface, 'external_reference_id'?: string, 'max_quantity'?: int, 'max_selected'?: int, 'max_total_quantity'?: int, 'merchant_id'?: string, 'metadata'?: MetadataMapInput|array<array-key, mixed>|\stdClass, 'min_quantity'?: int, 'min_selected'?: int, 'modifier_group_id': string, 'modifier_group_type': string, 'modifiers': list<ModifierInput|array<array-key, mixed>|\stdClass>, 'name': string, 'show_on_fulfillment': bool, 'show_on_receipt': bool, 'status': string, 'text'?: TextModifierConfigInput|array<array-key, mixed>|\stdClass, 'updated_at'?: string|\DateTimeInterface, 'version': int, ...}|object, 'previous_attributes'?: array<array-key, mixed>|\stdClass}|object $data
 * @property-read string $event_source
 * @property-read string $event_type
 * @property-read string $partner_app_id
 * @property-read int $payload_version
 * @property-read array{'environment_grant_id': string, 'merchant_id': string, 'mode': string, 'partner_app_install_id': string, 'sandbox_id'?: string}|object $source
 * @property-read bool $test
 * @property-read string $webhook_event_id
 * Presence-aware input; omitted fields throw when accessed. */
final class ModifierGroupCreatedInstalledMerchantsEventInput extends Model {
    /** @param array{'api_version': string, 'created_at': string|\DateTimeInterface, 'data': array{'object': array{'allow_quantities': bool, 'created_at'?: string|\DateTimeInterface, 'external_reference_id'?: string, 'max_quantity'?: int, 'max_selected'?: int, 'max_total_quantity'?: int, 'merchant_id'?: string, 'metadata'?: MetadataMapInput|array<array-key, mixed>|\stdClass, 'min_quantity'?: int, 'min_selected'?: int, 'modifier_group_id': string, 'modifier_group_type': string, 'modifiers': list<ModifierInput|array<array-key, mixed>|\stdClass>, 'name': string, 'show_on_fulfillment': bool, 'show_on_receipt': bool, 'status': string, 'text'?: TextModifierConfigInput|array<array-key, mixed>|\stdClass, 'updated_at'?: string|\DateTimeInterface, 'version': int, ...}|object, 'previous_attributes'?: array<array-key, mixed>|\stdClass}|object, 'event_source': string, 'event_type': string, 'partner_app_id': string, 'payload_version': int, 'source': array{'environment_grant_id': string, 'merchant_id': string, 'mode': string, 'partner_app_install_id': string, 'sandbox_id'?: string}|object, 'test': bool, 'webhook_event_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ModifierGroupCreatedInstalledMerchantsEventInput')); }
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
    /** The resource snapshot recorded for this event and rendered at the delivery API version. object (Required): object. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. object.allow_quantities (Required): boolean. Whether buyers can select more than one unit of a list modifier. object.created_at (Optional): string. When the modifier group was created, as an RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.external_reference_id (Optional): string. Caller-owned identifier for this resource in an external system. maxLength: 255. Example: "warehouse-1842". object.max_quantity (Optional): integer. Maximum whole-number quantity for each selected list modifier when allow_quantities is true; fractional quantities are not supported. Format: int64. object.max_selected (Optional): integer. Maximum number of distinct modifiers buyers can select from a list group. Omit it for no limit. A modifier set can override this value. Format: int32. object.max_total_quantity (Optional): integer. Maximum combined whole-number quantity across selected list modifiers; fractional quantities are not supported. Format: int64. object.merchant_id (Optional): string. Identifier of the merchant that owns this modifier group. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.metadata (Optional): {@see MetadataMapInput}. Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. object.min_quantity (Optional): integer. Minimum whole-number quantity for each selected list modifier when allow_quantities is true; fractional quantities are not supported. Format: int64. object.min_selected (Optional): integer. Minimum number of distinct modifiers buyers must select from a list group. Omit it to require no selections. A modifier set can override this value. Format: int32. object.modifier_group_id (Required): string. Stable identifier of the modifier group. For a group a modifier set owns (`source: inline`), read it through `GET /v1/modifier-sets/{modifier_set_id}`; `/v1/modifier-groups` doesn't return it. Example: "mg_01KEZF7C00XKJJATARG7KDBYM9". object.modifier_group_type (Required): string. Whether buyers choose from a list of modifiers or enter text. On create, inferred as text when text configuration is supplied, otherwise list. Value enum: "list", "text". object.modifiers (Required): Array of {@see ModifierInput}. Choices in a list group. Only active modifiers whose set override's available is not false are offered to buyers. Text groups do not have choices. object.modifiers[] (Value): {@see ModifierInput}. A purchasable customization choice. object.name (Required): string. Name of the modifier group shown to buyers. object.show_on_fulfillment (Required): boolean. Whether selections from this group appear in fulfillment details unless overridden for a modifier set. object.show_on_receipt (Required): boolean. Whether selections from this group appear on buyer receipts unless overridden for a modifier set. object.status (Required): string. Lifecycle status of the modifier group. Only active groups can be offered to buyers; archived groups remain readable and cannot be edited. Value enum: "active", "inactive", "archived". object.text (Optional): {@see TextModifierConfigInput}. Text entry rules for a text group. Use text.required to require a value; list groups use min_selected instead. Settings for a text modifier group: whether input is required or multiline, and its length limits. object.updated_at (Optional): string. When the modifier group or its modifiers last changed, as an RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.version (Required): integer. Version of the modifier group and its modifiers. Format: uint64. minimum: 1. previous_attributes (Optional): object. Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.
     * @return array{'object': array{'allow_quantities': bool, 'created_at'?: string|\DateTimeInterface, 'external_reference_id'?: string, 'max_quantity'?: int, 'max_selected'?: int, 'max_total_quantity'?: int, 'merchant_id'?: string, 'metadata'?: MetadataMapInput|array<array-key, mixed>|\stdClass, 'min_quantity'?: int, 'min_selected'?: int, 'modifier_group_id': string, 'modifier_group_type': string, 'modifiers': list<ModifierInput|array<array-key, mixed>|\stdClass>, 'name': string, 'show_on_fulfillment': bool, 'show_on_receipt': bool, 'status': string, 'text'?: TextModifierConfigInput|array<array-key, mixed>|\stdClass, 'updated_at'?: string|\DateTimeInterface, 'version': int, ...}|object, 'previous_attributes'?: array<array-key, mixed>|\stdClass}|object
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
    /** The resource change or condition this event announces. Value enum: "modifier_group.created".
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
