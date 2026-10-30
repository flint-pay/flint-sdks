<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?string $created_at
 * @property-read ?string $external_reference_id
 * @property-read ?string $merchant_id
 * @property-read ?array<array-key, string> $metadata
 * @property-read list<ModifierSetUpdatedInstalledMerchantsEventDataObjectModifierGroupsItemExisting|ModifierSetUpdatedInstalledMerchantsEventDataObjectModifierGroupsItemInline|\stdClass> $modifier_groups
 * @property-read string $modifier_set_id
 * @property-read string $name
 * @property-read string $status
 * @property-read ?string $updated_at
 * @property-read int $version
 * Presence-aware response; omitted optional fields return null. */
final class ModifierSetUpdatedInstalledMerchantsEventDataObject extends Model {
    /** @param array{'created_at'?: string, 'external_reference_id'?: string, 'merchant_id'?: string, 'metadata'?: mixed, 'modifier_groups': list<mixed>, 'modifier_set_id': string, 'name': string, 'status': string, 'updated_at'?: string, 'version': int, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ModifierSetUpdatedInstalledMerchantsEventDataObject')); }
    /** When the modifier set was created, as an RFC3339 timestamp. Format: date-time.
     * @return ?string
     */
    public function getCreatedAt(): ?string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Caller-owned identifier for this resource in an external system. maxLength: 255.
     * @return ?string
     */
    public function getExternalReferenceId(): ?string { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** Identifier of the merchant that owns this modifier set.
     * @return ?string
     */
    public function getMerchantId(): ?string { return $this->get('merchant_id'); }
    public function hasMerchantId(): bool { return $this->has('merchant_id'); }
    /** Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them.
     * @return ?array<array-key, string>
     */
    public function getMetadata(): ?array { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** Ordered group entries in this set, including references to reusable groups and groups owned by the set. [] (Value): {@see ModifierSetGroup}. A modifier group as it appears in a modifier set, with its selection limits, display options, and per-modifier overrides.
     * @return list<ModifierSetUpdatedInstalledMerchantsEventDataObjectModifierGroupsItemExisting|ModifierSetUpdatedInstalledMerchantsEventDataObjectModifierGroupsItemInline|\stdClass>
     */
    public function getModifierGroups(): array { return $this->get('modifier_groups'); }
    public function hasModifierGroups(): bool { return $this->has('modifier_groups'); }
    /** Stable identifier of the modifier set assigned to catalog items.
     * @return string
     */
    public function getModifierSetId(): string { return $this->get('modifier_set_id'); }
    public function hasModifierSetId(): bool { return $this->has('modifier_set_id'); }
    /** Name used to identify this modifier set.
     * @return string
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Lifecycle status of the modifier set. Only active sets can be offered to buyers; archived sets remain readable and cannot be edited. Value enum: "active", "inactive", "archived".
     * @return string
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** When the modifier set, its group entries, or its inline groups last changed, as an RFC3339 timestamp. Format: date-time.
     * @return ?string
     */
    public function getUpdatedAt(): ?string { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Version of the modifier set, its group entries, and its inline groups. Send it as expected_version when replacing modifier_groups. Format: uint64. minimum: 1.
     * @return int
     */
    public function getVersion(): int { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
