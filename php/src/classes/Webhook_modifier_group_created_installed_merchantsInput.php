<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $api_version
 * @property-read string|\DateTimeInterface $created_at
 * @property-read array{'object': array{'allow_quantities': bool, 'created_at'?: string|\DateTimeInterface, 'external_reference_id'?: string, 'max_quantity'?: string, 'max_selected'?: int, 'max_total_quantity'?: string, 'merchant_id'?: string, 'metadata'?: array<array-key, string>|\stdClass, 'min_quantity'?: string, 'min_selected'?: int, 'modifier_group_id': string, 'modifier_group_type': string, 'modifiers': list<ModifierInput|array<array-key, mixed>|\stdClass>, 'name': string, 'show_on_fulfillment': bool, 'show_on_receipt': bool, 'status': string, 'text'?: TextModifierConfigInput|array<array-key, mixed>|\stdClass, 'updated_at'?: string|\DateTimeInterface, 'version': string, ...}|object}|object $data
 * @property-read string $event_type
 * @property-read string $partner_app_id
 * @property-read int $payload_version
 * @property-read array{'merchant_id': string, 'partner_app_install_id': string, 'type': string}|object|array{'environment_grant_id': string, 'merchant_id': string, 'mode': string, 'partner_app_install_id': string, 'sandbox_id'?: string, 'type': string}|object $source
 * @property-read bool $test
 * @property-read string $webhook_event_id
 * Presence-aware input; omitted fields throw when accessed. */
final class Webhook_modifier_group_created_installed_merchantsInput extends Model {
    /** @param array{'api_version': string, 'created_at': string|\DateTimeInterface, 'data': array{'object': array{'allow_quantities': bool, 'created_at'?: string|\DateTimeInterface, 'external_reference_id'?: string, 'max_quantity'?: string, 'max_selected'?: int, 'max_total_quantity'?: string, 'merchant_id'?: string, 'metadata'?: array<array-key, string>|\stdClass, 'min_quantity'?: string, 'min_selected'?: int, 'modifier_group_id': string, 'modifier_group_type': string, 'modifiers': list<ModifierInput|array<array-key, mixed>|\stdClass>, 'name': string, 'show_on_fulfillment': bool, 'show_on_receipt': bool, 'status': string, 'text'?: TextModifierConfigInput|array<array-key, mixed>|\stdClass, 'updated_at'?: string|\DateTimeInterface, 'version': string, ...}|object}|object, 'event_type': string, 'partner_app_id': string, 'payload_version': int, 'source': array{'merchant_id': string, 'partner_app_install_id': string, 'type': string}|object|array{'environment_grant_id': string, 'merchant_id': string, 'mode': string, 'partner_app_install_id': string, 'sandbox_id'?: string, 'type': string}|object, 'test': bool, 'webhook_event_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('Webhook_modifier_group_created_installed_merchantsInput')); }
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
    /** Shape $ (Value): object. Shape $.object (Required): object and {@see ModifierGroupInput}. A group of choices that customize an item. Shape $.object.allow_quantities (Required): boolean. Whether buyers can select more than one unit of a list modifier. Shape $.object.created_at (Optional): string. When the modifier group was created, as an RFC3339 timestamp. Format: date-time. Shape $.object.external_reference_id (Optional): string. Caller-owned identifier for this resource in an external system. maxLength: 255. Shape $.object.max_quantity (Optional): integer string. Maximum whole-number quantity for each selected list modifier when allow_quantities is true; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: int64. Shape $.object.max_selected (Optional): integer. Maximum number of distinct modifiers buyers can select from a list group. Omit it for no limit. A modifier set can override this value. Format: int32. Shape $.object.max_total_quantity (Optional): integer string. Maximum combined whole-number quantity across selected list modifiers; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: int64. Shape $.object.merchant_id (Optional): string. Identifier of the merchant that owns this modifier group. Shape $.object.metadata (Optional): Map of string. Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Shape $.object.metadata.* (Value): string. Shape $.object.min_quantity (Optional): integer string. Minimum whole-number quantity for each selected list modifier when allow_quantities is true; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: int64. Shape $.object.min_selected (Optional): integer. Minimum number of distinct modifiers buyers must select from a list group. Omit it to require no selections. A modifier set can override this value. Format: int32. Shape $.object.modifier_group_id (Required): string. Stable identifier of the modifier group. For a group a modifier set owns (`source: inline`), read it through `GET /v1/modifier-sets/{modifier_set_id}`; `/v1/modifier-groups` doesn't return it. Shape $.object.modifier_group_type (Required): string. Whether buyers choose from a list of modifiers or enter text. On create, inferred as text when text configuration is supplied, otherwise list. Value enum: "list", "text". Shape $.object.modifiers (Required): Array of {@see ModifierInput}. Choices in a list group. Only active modifiers whose set override's available is not false are offered to buyers. Text groups do not have choices. Shape $.object.modifiers[] (Value): {@see ModifierInput}. A purchasable customization choice. Shape $.object.name (Required): string. Name of the modifier group shown to buyers. Shape $.object.show_on_fulfillment (Required): boolean. Whether selections from this group appear in fulfillment details unless overridden for a modifier set. Shape $.object.show_on_receipt (Required): boolean. Whether selections from this group appear on buyer receipts unless overridden for a modifier set. Shape $.object.status (Required): string. Lifecycle status of the modifier group. Only active groups can be offered to buyers; archived groups remain readable and cannot be edited. Value enum: "active", "inactive", "archived". Shape $.object.text (Optional): {@see TextModifierConfigInput}. Text entry rules for a text group. Use text.required to require a value; list groups use min_selected instead. Settings for a text modifier group: whether input is required or multiline, and its length limits. Shape $.object.updated_at (Optional): string. When the modifier group or its modifiers last changed, as an RFC3339 timestamp. Format: date-time. Shape $.object.version (Required): integer string. Version of the modifier group and its modifiers. Use an integer string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     * @return array{'object': array{'allow_quantities': bool, 'created_at'?: string|\DateTimeInterface, 'external_reference_id'?: string, 'max_quantity'?: string, 'max_selected'?: int, 'max_total_quantity'?: string, 'merchant_id'?: string, 'metadata'?: array<array-key, string>|\stdClass, 'min_quantity'?: string, 'min_selected'?: int, 'modifier_group_id': string, 'modifier_group_type': string, 'modifiers': list<ModifierInput|array<array-key, mixed>|\stdClass>, 'name': string, 'show_on_fulfillment': bool, 'show_on_receipt': bool, 'status': string, 'text'?: TextModifierConfigInput|array<array-key, mixed>|\stdClass, 'updated_at'?: string|\DateTimeInterface, 'version': string, ...}|object}|object
     * @throws SdkError When data is omitted; use hasData() or valueOrDefault().
     */
    public function getData(): array|object { return $this->get('data'); }
    public function hasData(): bool { return $this->has('data'); }
    /** Shape $ (Value): string.  Value enum: "modifier_group.created".
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
    /** Shape $ (Value): Alternative shapes (see declared variants) and object. Shape $.environment_grant_id (Required): string. Shape $.merchant_id (Required): string. Shape $.mode (Required): string.  Value enum: "test", "live". Shape $.partner_app_install_id (Required): string. Shape $.sandbox_id (Optional): string. Shape $.type (Required): string.  Value enum: "installed_merchants". Shape $.oneOf[1] (Value): object. Shape $.oneOf[1].merchant_id (Required): string. Shape $.oneOf[1].partner_app_install_id (Required): string. Shape $.oneOf[1].type (Required): string.  Value enum: "partner_app". Shape $.oneOf[2] (Value): object. Shape $.oneOf[2].environment_grant_id (Required): string. Shape $.oneOf[2].merchant_id (Required): string. Shape $.oneOf[2].mode (Required): string.  Value enum: "test", "live". Shape $.oneOf[2].partner_app_install_id (Required): string. Shape $.oneOf[2].sandbox_id (Optional): string. Shape $.oneOf[2].type (Required): string.  Value enum: "installed_merchants".
     * @return array{'merchant_id': string, 'partner_app_install_id': string, 'type': string}|object|array{'environment_grant_id': string, 'merchant_id': string, 'mode': string, 'partner_app_install_id': string, 'sandbox_id'?: string, 'type': string}|object
     * @throws SdkError When source is omitted; use hasSource() or valueOrDefault().
     */
    public function getSource(): mixed { return $this->get('source'); }
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
