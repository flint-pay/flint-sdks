<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int $expected_version
 * @property-read string|null $external_reference_id
 * @property-read array<array-key, string|null>|\stdClass|null $metadata
 * @property-read list<array{'display_name'?: string, 'max_selected'?: int, 'min_selected'?: int, 'modifier_group'?: InlineModifierGroupRequestInput|array<array-key, mixed>|\stdClass, 'modifier_group_id': string, 'modifier_overrides'?: list<array{'available'?: bool, 'default_quantity'?: int, 'line_item_tax_category'?: string, 'modifier_id': string, 'selected_by_default'?: bool, 'taxable'?: bool, 'unit_price_delta_money'?: MoneyValueInput|array<array-key, mixed>|\stdClass}|object>, 'modifier_set_group_id'?: string, 'position'?: int, 'required'?: bool, 'show_on_fulfillment'?: bool, 'show_on_receipt'?: bool, 'source': string}|object|array{'display_name'?: string, 'max_selected'?: int, 'min_selected'?: int, 'modifier_group': InlineModifierGroupRequestInput|array<array-key, mixed>|\stdClass, 'modifier_group_id'?: string, 'modifier_overrides'?: list<array{'available'?: bool, 'default_quantity'?: int, 'line_item_tax_category'?: string, 'modifier_id': string, 'selected_by_default'?: bool, 'taxable'?: bool, 'unit_price_delta_money'?: MoneyValueInput|array<array-key, mixed>|\stdClass}|object>, 'modifier_set_group_id'?: string, 'position'?: int, 'required'?: bool, 'show_on_fulfillment'?: bool, 'show_on_receipt'?: bool, 'source': string}|object> $modifier_groups
 * @property-read string $name
 * @property-read string $status
 * Presence-aware input; omitted fields throw when accessed. */
final class ModifierSetsUpdateParams extends Model {
    /** @param array{'expected_version'?: int, 'external_reference_id'?: string|null, 'metadata'?: array<array-key, string|null>|\stdClass|null, 'modifier_groups'?: list<array{'display_name'?: string, 'max_selected'?: int, 'min_selected'?: int, 'modifier_group'?: InlineModifierGroupRequestInput|array<array-key, mixed>|\stdClass, 'modifier_group_id': string, 'modifier_overrides'?: list<array{'available'?: bool, 'default_quantity'?: int, 'line_item_tax_category'?: string, 'modifier_id': string, 'selected_by_default'?: bool, 'taxable'?: bool, 'unit_price_delta_money'?: MoneyValueInput|array<array-key, mixed>|\stdClass}|object>, 'modifier_set_group_id'?: string, 'position'?: int, 'required'?: bool, 'show_on_fulfillment'?: bool, 'show_on_receipt'?: bool, 'source': string}|object|array{'display_name'?: string, 'max_selected'?: int, 'min_selected'?: int, 'modifier_group': InlineModifierGroupRequestInput|array<array-key, mixed>|\stdClass, 'modifier_group_id'?: string, 'modifier_overrides'?: list<array{'available'?: bool, 'default_quantity'?: int, 'line_item_tax_category'?: string, 'modifier_id': string, 'selected_by_default'?: bool, 'taxable'?: bool, 'unit_price_delta_money'?: MoneyValueInput|array<array-key, mixed>|\stdClass}|object>, 'modifier_set_group_id'?: string, 'position'?: int, 'required'?: bool, 'show_on_fulfillment'?: bool, 'show_on_receipt'?: bool, 'source': string}|object>, 'name'?: string, 'status'?: string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ModifierSetsUpdateParams')); }
    /** Modifier set version last read by the caller. Required when modifier_groups is present. Format: uint64. minimum: 1.
     * @return int
     * @throws SdkError When expected_version is omitted; use hasExpectedVersion() or valueOrDefault().
     */
    public function getExpectedVersion(): int { return $this->get('expected_version'); }
    public function hasExpectedVersion(): bool { return $this->has('expected_version'); }
    /** Caller-owned identifier for this resource in an external system. Send null to clear it. minLength: 1. maxLength: 255.
     * @return string|null
     * @throws SdkError When external_reference_id is omitted; use hasExternalReferenceId() or valueOrDefault().
     */
    public function getExternalReferenceId(): string|null { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** Omitted metadata is unchanged. Objects merge by key, null values delete keys, an empty object is a no-op, and null clears all metadata. The merged map can contain at most 50 keys. This operation also limits the metadata object you send, before merging: at most 50 keys, counting null deletions, each key 1 to 256 Unicode code points, and at most 32768 UTF-8 bytes of keys plus values. anyOf[1] (Value): {@see MetadataPatchRequestInput}. Changes to a caller-owned metadata map. Omit the field to leave metadata unchanged. Each key sets a value, a null value deletes the key, and an empty object makes no change; send null for the whole field to clear all caller-owned metadata. The resulting map is limited the same way as MetadataInput: Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Deleting a key that does not exist is allowed, so the number of operations is not itself the stored-map limit. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: 50. Changes to a caller-owned metadata map. Omit the field to leave metadata unchanged. Each key sets a value, a null value deletes the key, and an empty object makes no change; send null for the whole field to clear all caller-owned metadata. The resulting map is limited the same way as MetadataInput: Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Deleting a key that does not exist is allowed, so the number of operations is not itself the stored-map limit. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. anyOf[1].* (Value): string or null. minLength: 1. maxLength: 4096. anyOf[2] (Value): null.
     * @return array<array-key, string|null>|\stdClass|null
     * @throws SdkError When metadata is omitted; use hasMetadata() or valueOrDefault().
     */
    public function getMetadata(): mixed { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** Replaces the set's group entries atomically. Include modifier_set_group_id to retain an entry or omit it to create one. Entries omitted from the array are removed. Omit the array to leave entries unchanged; send [] to clear them. [] (Value): {@see ModifierSetGroupRequestInput}. A modifier group you add to a modifier set, either an existing group by ID or a new inline group, with selection limits and overrides.
     * @return list<array{'display_name'?: string, 'max_selected'?: int, 'min_selected'?: int, 'modifier_group'?: InlineModifierGroupRequestInput|array<array-key, mixed>|\stdClass, 'modifier_group_id': string, 'modifier_overrides'?: list<array{'available'?: bool, 'default_quantity'?: int, 'line_item_tax_category'?: string, 'modifier_id': string, 'selected_by_default'?: bool, 'taxable'?: bool, 'unit_price_delta_money'?: MoneyValueInput|array<array-key, mixed>|\stdClass}|object>, 'modifier_set_group_id'?: string, 'position'?: int, 'required'?: bool, 'show_on_fulfillment'?: bool, 'show_on_receipt'?: bool, 'source': string}|object|array{'display_name'?: string, 'max_selected'?: int, 'min_selected'?: int, 'modifier_group': InlineModifierGroupRequestInput|array<array-key, mixed>|\stdClass, 'modifier_group_id'?: string, 'modifier_overrides'?: list<array{'available'?: bool, 'default_quantity'?: int, 'line_item_tax_category'?: string, 'modifier_id': string, 'selected_by_default'?: bool, 'taxable'?: bool, 'unit_price_delta_money'?: MoneyValueInput|array<array-key, mixed>|\stdClass}|object>, 'modifier_set_group_id'?: string, 'position'?: int, 'required'?: bool, 'show_on_fulfillment'?: bool, 'show_on_receipt'?: bool, 'source': string}|object>
     * @throws SdkError When modifier_groups is omitted; use hasModifierGroups() or valueOrDefault().
     */
    public function getModifierGroups(): array { return $this->get('modifier_groups'); }
    public function hasModifierGroups(): bool { return $this->has('modifier_groups'); }
    /** Name used to identify this modifier set. minLength: 1. maxLength: 255.
     * @return string
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Lifecycle status of the modifier set. Only active sets can be offered to buyers; archived sets remain readable and cannot be edited. Value enum: "active", "inactive".
     * @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
}
