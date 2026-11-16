<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read bool|null $allow_quantities
 * @property-read string|\DateTimeInterface|null $created_at
 * @property-read string|null $external_reference_id
 * @property-read int|null $max_quantity
 * @property-read int|null $max_selected
 * @property-read int|null $max_total_quantity
 * @property-read string|null $merchant_id
 * @property-read MetadataMapPreviousAttributesInput|array<array-key, mixed>|\stdClass|null $metadata
 * @property-read int|null $min_quantity
 * @property-read int|null $min_selected
 * @property-read string|null $modifier_group_id
 * @property-read string|null $modifier_group_type
 * @property-read list<ModifierPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null $modifiers
 * @property-read string|null $name
 * @property-read bool|null $show_on_fulfillment
 * @property-read bool|null $show_on_receipt
 * @property-read string|null $status
 * @property-read TextModifierConfigPreviousAttributesInput|array<array-key, mixed>|\stdClass|null $text
 * @property-read string|\DateTimeInterface|null $updated_at
 * @property-read int|null $version
 * Presence-aware input; omitted fields throw when accessed. */
final class ModifierGroupPreviousAttributesInput extends Model {
    /** @param array{'allow_quantities'?: bool|null, 'created_at'?: string|\DateTimeInterface|null, 'external_reference_id'?: string|null, 'max_quantity'?: int|null, 'max_selected'?: int|null, 'max_total_quantity'?: int|null, 'merchant_id'?: string|null, 'metadata'?: MetadataMapPreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'min_quantity'?: int|null, 'min_selected'?: int|null, 'modifier_group_id'?: string|null, 'modifier_group_type'?: string|null, 'modifiers'?: list<ModifierPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null, 'name'?: string|null, 'show_on_fulfillment'?: bool|null, 'show_on_receipt'?: bool|null, 'status'?: string|null, 'text'?: TextModifierConfigPreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'updated_at'?: string|\DateTimeInterface|null, 'version'?: int|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ModifierGroupPreviousAttributesInput')); }
    /** Whether buyers can select more than one unit of a list modifier. anyOf[1] (Value): boolean. Whether buyers can select more than one unit of a list modifier. anyOf[2] (Value): null.
     * @return bool|null
     * @throws SdkError When allow_quantities is omitted; use hasAllowQuantities() or valueOrDefault().
     */
    public function getAllowQuantities(): mixed { return $this->get('allow_quantities'); }
    public function hasAllowQuantities(): bool { return $this->has('allow_quantities'); }
    /** When the modifier group was created, as an RFC3339 timestamp. anyOf[1] (Value): string. When the modifier group was created, as an RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): mixed { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Caller-owned identifier for this resource in an external system. anyOf[1] (Value): string. Caller-owned identifier for this resource in an external system. maxLength: 255. Example: "warehouse-1842". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When external_reference_id is omitted; use hasExternalReferenceId() or valueOrDefault().
     */
    public function getExternalReferenceId(): mixed { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** Maximum whole-number quantity for each selected list modifier when allow_quantities is true; fractional quantities are not supported. anyOf[1] (Value): integer. Maximum whole-number quantity for each selected list modifier when allow_quantities is true; fractional quantities are not supported. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     * @throws SdkError When max_quantity is omitted; use hasMaxQuantity() or valueOrDefault().
     */
    public function getMaxQuantity(): mixed { return $this->get('max_quantity'); }
    public function hasMaxQuantity(): bool { return $this->has('max_quantity'); }
    /** Maximum number of distinct modifiers buyers can select from a list group. Omit it for no limit. A modifier set can override this value. anyOf[1] (Value): integer. Maximum number of distinct modifiers buyers can select from a list group. Omit it for no limit. A modifier set can override this value. Format: int32. anyOf[2] (Value): null.
     * @return int|null
     * @throws SdkError When max_selected is omitted; use hasMaxSelected() or valueOrDefault().
     */
    public function getMaxSelected(): mixed { return $this->get('max_selected'); }
    public function hasMaxSelected(): bool { return $this->has('max_selected'); }
    /** Maximum combined whole-number quantity across selected list modifiers; fractional quantities are not supported. anyOf[1] (Value): integer. Maximum combined whole-number quantity across selected list modifiers; fractional quantities are not supported. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     * @throws SdkError When max_total_quantity is omitted; use hasMaxTotalQuantity() or valueOrDefault().
     */
    public function getMaxTotalQuantity(): mixed { return $this->get('max_total_quantity'); }
    public function hasMaxTotalQuantity(): bool { return $this->has('max_total_quantity'); }
    /** Identifier of the merchant that owns this modifier group. anyOf[1] (Value): string. Identifier of the merchant that owns this modifier group. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When merchant_id is omitted; use hasMerchantId() or valueOrDefault().
     */
    public function getMerchantId(): mixed { return $this->get('merchant_id'); }
    public function hasMerchantId(): bool { return $this->has('merchant_id'); }
    /** Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. anyOf[1] (Value): {@see MetadataMapPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MetadataMapPreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When metadata is omitted; use hasMetadata() or valueOrDefault().
     */
    public function getMetadata(): mixed { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** Minimum whole-number quantity for each selected list modifier when allow_quantities is true; fractional quantities are not supported. anyOf[1] (Value): integer. Minimum whole-number quantity for each selected list modifier when allow_quantities is true; fractional quantities are not supported. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     * @throws SdkError When min_quantity is omitted; use hasMinQuantity() or valueOrDefault().
     */
    public function getMinQuantity(): mixed { return $this->get('min_quantity'); }
    public function hasMinQuantity(): bool { return $this->has('min_quantity'); }
    /** Minimum number of distinct modifiers buyers must select from a list group. Omit it to require no selections. A modifier set can override this value. anyOf[1] (Value): integer. Minimum number of distinct modifiers buyers must select from a list group. Omit it to require no selections. A modifier set can override this value. Format: int32. anyOf[2] (Value): null.
     * @return int|null
     * @throws SdkError When min_selected is omitted; use hasMinSelected() or valueOrDefault().
     */
    public function getMinSelected(): mixed { return $this->get('min_selected'); }
    public function hasMinSelected(): bool { return $this->has('min_selected'); }
    /** Stable identifier of the modifier group. For a group a modifier set owns (`source: inline`), read it through `GET /v1/modifier-sets/{modifier_set_id}`; `/v1/modifier-groups` doesn't return it. anyOf[1] (Value): string. Stable identifier of the modifier group. For a group a modifier set owns (`source: inline`), read it through `GET /v1/modifier-sets/{modifier_set_id}`; `/v1/modifier-groups` doesn't return it. Example: "mg_01KEZF7C00XKJJATARG7KDBYM9". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When modifier_group_id is omitted; use hasModifierGroupId() or valueOrDefault().
     */
    public function getModifierGroupId(): mixed { return $this->get('modifier_group_id'); }
    public function hasModifierGroupId(): bool { return $this->has('modifier_group_id'); }
    /** Whether buyers choose from a list of modifiers or enter text. On create, inferred as text when text configuration is supplied, otherwise list. Value enum: "list", "text". anyOf[1] (Value): string. Whether buyers choose from a list of modifiers or enter text. On create, inferred as text when text configuration is supplied, otherwise list. Value enum: "list", "text". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When modifier_group_type is omitted; use hasModifierGroupType() or valueOrDefault().
     */
    public function getModifierGroupType(): mixed { return $this->get('modifier_group_type'); }
    public function hasModifierGroupType(): bool { return $this->has('modifier_group_type'); }
    /** Choices in a list group. Only active modifiers whose set override's available is not false are offered to buyers. Text groups do not have choices. anyOf[1] (Value): Array of {@see ModifierPreviousAttributesInput}. Choices in a list group. Only active modifiers whose set override's available is not false are offered to buyers. Text groups do not have choices. anyOf[1][] (Value): {@see ModifierPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return list<ModifierPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null
     * @throws SdkError When modifiers is omitted; use hasModifiers() or valueOrDefault().
     */
    public function getModifiers(): mixed { return $this->get('modifiers'); }
    public function hasModifiers(): bool { return $this->has('modifiers'); }
    /** Name of the modifier group shown to buyers. anyOf[1] (Value): string. Name of the modifier group shown to buyers. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): mixed { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Whether selections from this group appear in fulfillment details unless overridden for a modifier set. anyOf[1] (Value): boolean. Whether selections from this group appear in fulfillment details unless overridden for a modifier set. anyOf[2] (Value): null.
     * @return bool|null
     * @throws SdkError When show_on_fulfillment is omitted; use hasShowOnFulfillment() or valueOrDefault().
     */
    public function getShowOnFulfillment(): mixed { return $this->get('show_on_fulfillment'); }
    public function hasShowOnFulfillment(): bool { return $this->has('show_on_fulfillment'); }
    /** Whether selections from this group appear on buyer receipts unless overridden for a modifier set. anyOf[1] (Value): boolean. Whether selections from this group appear on buyer receipts unless overridden for a modifier set. anyOf[2] (Value): null.
     * @return bool|null
     * @throws SdkError When show_on_receipt is omitted; use hasShowOnReceipt() or valueOrDefault().
     */
    public function getShowOnReceipt(): mixed { return $this->get('show_on_receipt'); }
    public function hasShowOnReceipt(): bool { return $this->has('show_on_receipt'); }
    /** Lifecycle status of the modifier group. Only active groups can be offered to buyers; archived groups remain readable and cannot be edited. Value enum: "active", "inactive", "archived". anyOf[1] (Value): string. Lifecycle status of the modifier group. Only active groups can be offered to buyers; archived groups remain readable and cannot be edited. Value enum: "active", "inactive", "archived". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): mixed { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Text entry rules for a text group. Use text.required to require a value; list groups use min_selected instead. anyOf[1] (Value): {@see TextModifierConfigPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return TextModifierConfigPreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When text is omitted; use hasText() or valueOrDefault().
     */
    public function getText(): mixed { return $this->get('text'); }
    public function hasText(): bool { return $this->has('text'); }
    /** When the modifier group or its modifiers last changed, as an RFC3339 timestamp. anyOf[1] (Value): string. When the modifier group or its modifiers last changed, as an RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When updated_at is omitted; use hasUpdatedAt() or valueOrDefault().
     */
    public function getUpdatedAt(): mixed { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Version of the modifier group and its modifiers. anyOf[1] (Value): integer. Version of the modifier group and its modifiers. Format: uint64. minimum: 1. anyOf[2] (Value): null.
     * @return int|null
     * @throws SdkError When version is omitted; use hasVersion() or valueOrDefault().
     */
    public function getVersion(): mixed { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
