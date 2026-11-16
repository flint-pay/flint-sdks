<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $created_at
 * @property-read string|null $external_reference_id
 * @property-read string|null $merchant_id
 * @property-read mixed $metadata
 * @property-read list<ModifierSetGroupPreviousAttributes>|null $modifier_groups
 * @property-read string|null $modifier_set_id
 * @property-read string|null $name
 * @property-read string|null $status
 * @property-read string|null $updated_at
 * @property-read int|null $version
 * Presence-aware response; omitted optional fields return null. */
final class ModifierSetArchivedMerchantEventDataPreviousAttributes extends Model {
    /** @param array{'created_at'?: mixed, 'external_reference_id'?: mixed, 'merchant_id'?: mixed, 'metadata'?: mixed, 'modifier_groups'?: mixed, 'modifier_set_id'?: mixed, 'name'?: mixed, 'status'?: mixed, 'updated_at'?: mixed, 'version'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ModifierSetArchivedMerchantEventDataPreviousAttributes')); }
    /** When the modifier set was created, as an RFC3339 timestamp. anyOf[1] (Value): string. When the modifier set was created, as an RFC3339 timestamp. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCreatedAt(): string|null { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Caller-owned identifier for this resource in an external system. anyOf[1] (Value): string. Caller-owned identifier for this resource in an external system. maxLength: 255. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getExternalReferenceId(): string|null { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** Identifier of the merchant that owns this modifier set. anyOf[1] (Value): string. Identifier of the merchant that owns this modifier set. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getMerchantId(): string|null { return $this->get('merchant_id'); }
    public function hasMerchantId(): bool { return $this->has('merchant_id'); }
    /** Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. anyOf[1] (Value): {@see MetadataMapPreviousAttributes}. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getMetadata(): mixed { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** Ordered group entries in this set, including the full content of reusable groups and groups owned by the set. anyOf[1] (Value): Array of {@see ModifierSetGroupPreviousAttributes}. Ordered group entries in this set, including the full content of reusable groups and groups owned by the set. anyOf[1][] (Value): {@see ModifierSetGroupPreviousAttributes}. anyOf[2] (Value): null.
     * @return list<ModifierSetGroupPreviousAttributes>|null
     */
    public function getModifierGroups(): array|null { return $this->get('modifier_groups'); }
    public function hasModifierGroups(): bool { return $this->has('modifier_groups'); }
    /** Stable identifier of the modifier set assigned to catalog items. anyOf[1] (Value): string. Stable identifier of the modifier set assigned to catalog items. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getModifierSetId(): string|null { return $this->get('modifier_set_id'); }
    public function hasModifierSetId(): bool { return $this->has('modifier_set_id'); }
    /** Name used to identify this modifier set. anyOf[1] (Value): string. Name used to identify this modifier set. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getName(): string|null { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Lifecycle status of the modifier set. Only active sets can be offered to buyers; archived sets remain readable and cannot be edited. Value enum: "active", "inactive", "archived". anyOf[1] (Value): string. Lifecycle status of the modifier set. Only active sets can be offered to buyers; archived sets remain readable and cannot be edited. Value enum: "active", "inactive", "archived". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getStatus(): string|null { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** When the modifier set or any group it contains last changed, as an RFC3339 timestamp. anyOf[1] (Value): string. When the modifier set or any group it contains last changed, as an RFC3339 timestamp. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getUpdatedAt(): string|null { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Version of the modifier set, including the groups it contains. anyOf[1] (Value): integer. Version of the modifier set, including the groups it contains. Format: uint64. minimum: 1. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getVersion(): int|null { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
