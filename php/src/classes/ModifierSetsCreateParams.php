<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $external_reference_id
 * @property-read MetadataRequestInput|array<array-key, mixed>|\stdClass $metadata
 * @property-read list<array{'display_name'?: string, 'max_selected'?: int, 'min_selected'?: int, 'modifier_group'?: CreateInlineModifierGroupRequestInput|array<array-key, mixed>|\stdClass, 'modifier_group_id': string, 'modifier_overrides'?: list<array{'available'?: bool, 'default_quantity'?: int, 'line_item_tax_category'?: string, 'modifier_id': string, 'selected_by_default'?: bool, 'taxable'?: bool, 'unit_price_delta_money'?: MoneyValueInput|array<array-key, mixed>|\stdClass}|object>, 'position'?: int, 'required'?: bool, 'show_on_fulfillment'?: bool, 'show_on_receipt'?: bool, 'source': string}|object|array{'display_name'?: string, 'max_selected'?: int, 'min_selected'?: int, 'modifier_group': CreateInlineModifierGroupRequestInput|array<array-key, mixed>|\stdClass, 'modifier_group_id'?: string, 'modifier_overrides'?: list<array{'available'?: bool, 'default_quantity'?: int, 'line_item_tax_category'?: string, 'modifier_id': string, 'selected_by_default'?: bool, 'taxable'?: bool, 'unit_price_delta_money'?: MoneyValueInput|array<array-key, mixed>|\stdClass}|object>, 'position'?: int, 'required'?: bool, 'show_on_fulfillment'?: bool, 'show_on_receipt'?: bool, 'source': string}|object> $modifier_groups
 * @property-read string $name
 * @property-read string $status
 * Presence-aware input; omitted fields throw when accessed. */
final class ModifierSetsCreateParams extends Model {
    /** @param array{'external_reference_id'?: string, 'metadata'?: MetadataRequestInput|array<array-key, mixed>|\stdClass, 'modifier_groups'?: list<array{'display_name'?: string, 'max_selected'?: int, 'min_selected'?: int, 'modifier_group'?: CreateInlineModifierGroupRequestInput|array<array-key, mixed>|\stdClass, 'modifier_group_id': string, 'modifier_overrides'?: list<array{'available'?: bool, 'default_quantity'?: int, 'line_item_tax_category'?: string, 'modifier_id': string, 'selected_by_default'?: bool, 'taxable'?: bool, 'unit_price_delta_money'?: MoneyValueInput|array<array-key, mixed>|\stdClass}|object>, 'position'?: int, 'required'?: bool, 'show_on_fulfillment'?: bool, 'show_on_receipt'?: bool, 'source': string}|object|array{'display_name'?: string, 'max_selected'?: int, 'min_selected'?: int, 'modifier_group': CreateInlineModifierGroupRequestInput|array<array-key, mixed>|\stdClass, 'modifier_group_id'?: string, 'modifier_overrides'?: list<array{'available'?: bool, 'default_quantity'?: int, 'line_item_tax_category'?: string, 'modifier_id': string, 'selected_by_default'?: bool, 'taxable'?: bool, 'unit_price_delta_money'?: MoneyValueInput|array<array-key, mixed>|\stdClass}|object>, 'position'?: int, 'required'?: bool, 'show_on_fulfillment'?: bool, 'show_on_receipt'?: bool, 'source': string}|object>, 'name': string, 'status'?: string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ModifierSetsCreateParams')); }
    /** Caller-owned identifier for this resource in an external system. minLength: 1. maxLength: 255.
     * @return string
     * @throws SdkError When external_reference_id is omitted; use hasExternalReferenceId() or valueOrDefault().
     */
    public function getExternalReferenceId(): string { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: 50.
     * @return MetadataRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When metadata is omitted; use hasMetadata() or valueOrDefault().
     */
    public function getMetadata(): mixed { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** Ordered group entries in this set, including references to reusable groups and groups owned by the set. [] (Value): {@see CreateModifierSetGroupRequestInput}. A modifier group to add to a modifier set, either an existing group by ID or one defined inline, chosen by `source`.
     * @return list<array{'display_name'?: string, 'max_selected'?: int, 'min_selected'?: int, 'modifier_group'?: CreateInlineModifierGroupRequestInput|array<array-key, mixed>|\stdClass, 'modifier_group_id': string, 'modifier_overrides'?: list<array{'available'?: bool, 'default_quantity'?: int, 'line_item_tax_category'?: string, 'modifier_id': string, 'selected_by_default'?: bool, 'taxable'?: bool, 'unit_price_delta_money'?: MoneyValueInput|array<array-key, mixed>|\stdClass}|object>, 'position'?: int, 'required'?: bool, 'show_on_fulfillment'?: bool, 'show_on_receipt'?: bool, 'source': string}|object|array{'display_name'?: string, 'max_selected'?: int, 'min_selected'?: int, 'modifier_group': CreateInlineModifierGroupRequestInput|array<array-key, mixed>|\stdClass, 'modifier_group_id'?: string, 'modifier_overrides'?: list<array{'available'?: bool, 'default_quantity'?: int, 'line_item_tax_category'?: string, 'modifier_id': string, 'selected_by_default'?: bool, 'taxable'?: bool, 'unit_price_delta_money'?: MoneyValueInput|array<array-key, mixed>|\stdClass}|object>, 'position'?: int, 'required'?: bool, 'show_on_fulfillment'?: bool, 'show_on_receipt'?: bool, 'source': string}|object>
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
    /** Lifecycle status of the modifier set. Only active sets can be offered to buyers; archived sets remain readable and cannot be edited. Default: "active". Value enum: "active", "inactive".
     * @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
}
