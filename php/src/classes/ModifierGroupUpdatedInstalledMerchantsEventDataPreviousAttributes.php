<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read bool|null $allow_quantities
 * @property-read string|null $created_at
 * @property-read string|null $external_reference_id
 * @property-read int|null $max_quantity
 * @property-read int|null $max_selected
 * @property-read int|null $max_total_quantity
 * @property-read string|null $merchant_id
 * @property-read array<array-key, string>|null $metadata
 * @property-read int|null $min_quantity
 * @property-read int|null $min_selected
 * @property-read string|null $modifier_group_id
 * @property-read string|null $modifier_group_type
 * @property-read list<Modifier>|null $modifiers
 * @property-read string|null $name
 * @property-read bool|null $show_on_fulfillment
 * @property-read bool|null $show_on_receipt
 * @property-read string|null $status
 * @property-read TextModifierConfig|null $text
 * @property-read string|null $updated_at
 * @property-read int|null $version
 * Presence-aware response; omitted optional fields return null. */
final class ModifierGroupUpdatedInstalledMerchantsEventDataPreviousAttributes extends Model {
    /** @param array{'allow_quantities'?: mixed, 'created_at'?: mixed, 'external_reference_id'?: mixed, 'max_quantity'?: mixed, 'max_selected'?: mixed, 'max_total_quantity'?: mixed, 'merchant_id'?: mixed, 'metadata'?: mixed, 'min_quantity'?: mixed, 'min_selected'?: mixed, 'modifier_group_id'?: mixed, 'modifier_group_type'?: mixed, 'modifiers'?: mixed, 'name'?: mixed, 'show_on_fulfillment'?: mixed, 'show_on_receipt'?: mixed, 'status'?: mixed, 'text'?: mixed, 'updated_at'?: mixed, 'version'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ModifierGroupUpdatedInstalledMerchantsEventDataPreviousAttributes')); }
    /** Whether buyers can select more than one unit of a list modifier. anyOf[1] (Value): boolean. Whether buyers can select more than one unit of a list modifier. anyOf[2] (Value): null.
     * @return bool|null
     */
    public function getAllowQuantities(): bool|null { return $this->get('allow_quantities'); }
    public function hasAllowQuantities(): bool { return $this->has('allow_quantities'); }
    /** When the modifier group was created, as an RFC3339 timestamp. anyOf[1] (Value): string. When the modifier group was created, as an RFC3339 timestamp. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCreatedAt(): string|null { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Caller-owned identifier for this resource in an external system. anyOf[1] (Value): string. Caller-owned identifier for this resource in an external system. maxLength: 255. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getExternalReferenceId(): string|null { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** Maximum whole-number quantity for each selected list modifier when allow_quantities is true; fractional quantities are not supported. anyOf[1] (Value): integer. Maximum whole-number quantity for each selected list modifier when allow_quantities is true; fractional quantities are not supported. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getMaxQuantity(): int|null { return $this->get('max_quantity'); }
    public function hasMaxQuantity(): bool { return $this->has('max_quantity'); }
    /** Maximum number of distinct modifiers buyers can select from a list group. Omit it for no limit. A modifier set can override this value. anyOf[1] (Value): integer. Maximum number of distinct modifiers buyers can select from a list group. Omit it for no limit. A modifier set can override this value. Format: int32. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getMaxSelected(): int|null { return $this->get('max_selected'); }
    public function hasMaxSelected(): bool { return $this->has('max_selected'); }
    /** Maximum combined whole-number quantity across selected list modifiers; fractional quantities are not supported. anyOf[1] (Value): integer. Maximum combined whole-number quantity across selected list modifiers; fractional quantities are not supported. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getMaxTotalQuantity(): int|null { return $this->get('max_total_quantity'); }
    public function hasMaxTotalQuantity(): bool { return $this->has('max_total_quantity'); }
    /** Identifier of the merchant that owns this modifier group. anyOf[1] (Value): string. Identifier of the merchant that owns this modifier group. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getMerchantId(): string|null { return $this->get('merchant_id'); }
    public function hasMerchantId(): bool { return $this->has('merchant_id'); }
    /** Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. anyOf[1] (Value): {@see MetadataMap}. Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. anyOf[2] (Value): null.
     * @return array<array-key, string>|null
     */
    public function getMetadata(): array|null { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** Minimum whole-number quantity for each selected list modifier when allow_quantities is true; fractional quantities are not supported. anyOf[1] (Value): integer. Minimum whole-number quantity for each selected list modifier when allow_quantities is true; fractional quantities are not supported. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getMinQuantity(): int|null { return $this->get('min_quantity'); }
    public function hasMinQuantity(): bool { return $this->has('min_quantity'); }
    /** Minimum number of distinct modifiers buyers must select from a list group. Omit it to require no selections. A modifier set can override this value. anyOf[1] (Value): integer. Minimum number of distinct modifiers buyers must select from a list group. Omit it to require no selections. A modifier set can override this value. Format: int32. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getMinSelected(): int|null { return $this->get('min_selected'); }
    public function hasMinSelected(): bool { return $this->has('min_selected'); }
    /** Stable identifier of the modifier group. For a group a modifier set owns (`source: inline`), read it through `GET /v1/modifier-sets/{modifier_set_id}`; `/v1/modifier-groups` doesn't return it. anyOf[1] (Value): string. Stable identifier of the modifier group. For a group a modifier set owns (`source: inline`), read it through `GET /v1/modifier-sets/{modifier_set_id}`; `/v1/modifier-groups` doesn't return it. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getModifierGroupId(): string|null { return $this->get('modifier_group_id'); }
    public function hasModifierGroupId(): bool { return $this->has('modifier_group_id'); }
    /** Whether buyers choose from a list of modifiers or enter text. On create, inferred as text when text configuration is supplied, otherwise list. Value enum: "list", "text". anyOf[1] (Value): string. Whether buyers choose from a list of modifiers or enter text. On create, inferred as text when text configuration is supplied, otherwise list. Value enum: "list", "text". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getModifierGroupType(): string|null { return $this->get('modifier_group_type'); }
    public function hasModifierGroupType(): bool { return $this->has('modifier_group_type'); }
    /** Choices in a list group. Only active modifiers whose set override's available is not false are offered to buyers. Text groups do not have choices. anyOf[1] (Value): Array of {@see Modifier}. Choices in a list group. Only active modifiers whose set override's available is not false are offered to buyers. Text groups do not have choices. anyOf[1][] (Value): {@see Modifier}. A purchasable customization choice. anyOf[2] (Value): null.
     * @return list<Modifier>|null
     */
    public function getModifiers(): array|null { return $this->get('modifiers'); }
    public function hasModifiers(): bool { return $this->has('modifiers'); }
    /** Name of the modifier group shown to buyers. anyOf[1] (Value): string. Name of the modifier group shown to buyers. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getName(): string|null { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Whether selections from this group appear in fulfillment details unless overridden for a modifier set. anyOf[1] (Value): boolean. Whether selections from this group appear in fulfillment details unless overridden for a modifier set. anyOf[2] (Value): null.
     * @return bool|null
     */
    public function getShowOnFulfillment(): bool|null { return $this->get('show_on_fulfillment'); }
    public function hasShowOnFulfillment(): bool { return $this->has('show_on_fulfillment'); }
    /** Whether selections from this group appear on buyer receipts unless overridden for a modifier set. anyOf[1] (Value): boolean. Whether selections from this group appear on buyer receipts unless overridden for a modifier set. anyOf[2] (Value): null.
     * @return bool|null
     */
    public function getShowOnReceipt(): bool|null { return $this->get('show_on_receipt'); }
    public function hasShowOnReceipt(): bool { return $this->has('show_on_receipt'); }
    /** Lifecycle status of the modifier group. Only active groups can be offered to buyers; archived groups remain readable and cannot be edited. Value enum: "active", "inactive", "archived". anyOf[1] (Value): string. Lifecycle status of the modifier group. Only active groups can be offered to buyers; archived groups remain readable and cannot be edited. Value enum: "active", "inactive", "archived". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getStatus(): string|null { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Text entry rules for a text group. Use text.required to require a value; list groups use min_selected instead. anyOf[1] (Value): {@see TextModifierConfig}. Text entry rules for a text group. Use text.required to require a value; list groups use min_selected instead. anyOf[2] (Value): null.
     * @return TextModifierConfig|null
     */
    public function getText(): TextModifierConfig|null { return $this->get('text'); }
    public function hasText(): bool { return $this->has('text'); }
    /** When the modifier group or its modifiers last changed, as an RFC3339 timestamp. anyOf[1] (Value): string. When the modifier group or its modifiers last changed, as an RFC3339 timestamp. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getUpdatedAt(): string|null { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Version of the modifier group and its modifiers. anyOf[1] (Value): integer. Version of the modifier group and its modifiers. Format: uint64. minimum: 1. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getVersion(): int|null { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
