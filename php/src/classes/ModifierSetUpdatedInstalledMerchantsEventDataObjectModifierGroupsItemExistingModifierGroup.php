<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read bool $allow_quantities
 * @property-read ?string $created_at
 * @property-read ?string $external_reference_id
 * @property-read ?int $max_quantity
 * @property-read ?int $max_selected
 * @property-read ?int $max_total_quantity
 * @property-read ?string $merchant_id
 * @property-read ?array<array-key, string> $metadata
 * @property-read ?int $min_quantity
 * @property-read ?int $min_selected
 * @property-read string $modifier_group_id
 * @property-read string $modifier_group_type
 * @property-read list<ModifierSetUpdatedInstalledMerchantsEventDataObjectModifierGroupsItemExistingModifierGroupModifiersItem> $modifiers
 * @property-read string $name
 * @property-read bool $show_on_fulfillment
 * @property-read bool $show_on_receipt
 * @property-read string $status
 * @property-read ?ModifierSetUpdatedInstalledMerchantsEventDataObjectModifierGroupsItemExistingModifierGroupText $text
 * @property-read ?string $updated_at
 * @property-read int $version
 * Presence-aware response; omitted optional fields return null. */
final class ModifierSetUpdatedInstalledMerchantsEventDataObjectModifierGroupsItemExistingModifierGroup extends Model {
    /** @param array{'allow_quantities': bool, 'created_at'?: string, 'external_reference_id'?: string, 'max_quantity'?: int, 'max_selected'?: int, 'max_total_quantity'?: int, 'merchant_id'?: string, 'metadata'?: mixed, 'min_quantity'?: int, 'min_selected'?: int, 'modifier_group_id': string, 'modifier_group_type': string, 'modifiers': list<mixed>, 'name': string, 'show_on_fulfillment': bool, 'show_on_receipt': bool, 'status': string, 'text'?: mixed, 'updated_at'?: string, 'version': int, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ModifierSetUpdatedInstalledMerchantsEventDataObjectModifierGroupsItemExistingModifierGroup')); }
    /** Whether buyers can select more than one unit of a list modifier.
     * @return bool
     */
    public function getAllowQuantities(): bool { return $this->get('allow_quantities'); }
    public function hasAllowQuantities(): bool { return $this->has('allow_quantities'); }
    /** When the modifier group was created, as an RFC3339 timestamp. Format: date-time.
     * @return ?string
     */
    public function getCreatedAt(): ?string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Caller-owned identifier for this resource in an external system. maxLength: 255.
     * @return ?string
     */
    public function getExternalReferenceId(): ?string { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** Maximum whole-number quantity for each selected list modifier when allow_quantities is true; fractional quantities are not supported. Format: int64.
     * @return ?int
     */
    public function getMaxQuantity(): ?int { return $this->get('max_quantity'); }
    public function hasMaxQuantity(): bool { return $this->has('max_quantity'); }
    /** Maximum number of distinct modifiers buyers can select from a list group. Omit it for no limit. A modifier set can override this value. Format: int32.
     * @return ?int
     */
    public function getMaxSelected(): ?int { return $this->get('max_selected'); }
    public function hasMaxSelected(): bool { return $this->has('max_selected'); }
    /** Maximum combined whole-number quantity across selected list modifiers; fractional quantities are not supported. Format: int64.
     * @return ?int
     */
    public function getMaxTotalQuantity(): ?int { return $this->get('max_total_quantity'); }
    public function hasMaxTotalQuantity(): bool { return $this->has('max_total_quantity'); }
    /** Identifier of the merchant that owns this modifier group.
     * @return ?string
     */
    public function getMerchantId(): ?string { return $this->get('merchant_id'); }
    public function hasMerchantId(): bool { return $this->has('merchant_id'); }
    /** Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. * (Value): string. maxLength: 4096.
     * @return ?array<array-key, string>
     */
    public function getMetadata(): ?array { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** Minimum whole-number quantity for each selected list modifier when allow_quantities is true; fractional quantities are not supported. Format: int64.
     * @return ?int
     */
    public function getMinQuantity(): ?int { return $this->get('min_quantity'); }
    public function hasMinQuantity(): bool { return $this->has('min_quantity'); }
    /** Minimum number of distinct modifiers buyers must select from a list group. Omit it to require no selections. A modifier set can override this value. Format: int32.
     * @return ?int
     */
    public function getMinSelected(): ?int { return $this->get('min_selected'); }
    public function hasMinSelected(): bool { return $this->has('min_selected'); }
    /** Stable identifier of the modifier group. For a group a modifier set owns (`source: inline`), read it through `GET /v1/modifier-sets/{modifier_set_id}`; `/v1/modifier-groups` doesn't return it.
     * @return string
     */
    public function getModifierGroupId(): string { return $this->get('modifier_group_id'); }
    public function hasModifierGroupId(): bool { return $this->has('modifier_group_id'); }
    /** Whether buyers choose from a list of modifiers or enter text. On create, inferred as text when text configuration is supplied, otherwise list. Value enum: "list", "text".
     * @return string
     */
    public function getModifierGroupType(): string { return $this->get('modifier_group_type'); }
    public function hasModifierGroupType(): bool { return $this->has('modifier_group_type'); }
    /** Choices in a list group. Only active modifiers whose set override's available is not false are offered to buyers. Text groups do not have choices. [] (Value): {@see ModifierSetUpdatedInstalledMerchantsEventDataObjectModifierGroupsItemExistingModifierGroupModifiersItem}. A purchasable customization choice.
     * @return list<ModifierSetUpdatedInstalledMerchantsEventDataObjectModifierGroupsItemExistingModifierGroupModifiersItem>
     */
    public function getModifiers(): array { return $this->get('modifiers'); }
    public function hasModifiers(): bool { return $this->has('modifiers'); }
    /** Name of the modifier group shown to buyers.
     * @return string
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Whether selections from this group appear in fulfillment details unless overridden for a modifier set.
     * @return bool
     */
    public function getShowOnFulfillment(): bool { return $this->get('show_on_fulfillment'); }
    public function hasShowOnFulfillment(): bool { return $this->has('show_on_fulfillment'); }
    /** Whether selections from this group appear on buyer receipts unless overridden for a modifier set.
     * @return bool
     */
    public function getShowOnReceipt(): bool { return $this->get('show_on_receipt'); }
    public function hasShowOnReceipt(): bool { return $this->has('show_on_receipt'); }
    /** Lifecycle status of the modifier group. Only active groups can be offered to buyers; archived groups remain readable and cannot be edited. Value enum: "active", "inactive", "archived".
     * @return string
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Text entry rules for a text group. Use text.required to require a value; list groups use min_selected instead. Settings for a text modifier group: whether input is required or multiline, and its length limits.
     * @return ?ModifierSetUpdatedInstalledMerchantsEventDataObjectModifierGroupsItemExistingModifierGroupText
     */
    public function getText(): ?ModifierSetUpdatedInstalledMerchantsEventDataObjectModifierGroupsItemExistingModifierGroupText { return $this->get('text'); }
    public function hasText(): bool { return $this->has('text'); }
    /** When the modifier group or its modifiers last changed, as an RFC3339 timestamp. Format: date-time.
     * @return ?string
     */
    public function getUpdatedAt(): ?string { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Version of the modifier group and its modifiers. Format: uint64. minimum: 1.
     * @return int
     */
    public function getVersion(): int { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
