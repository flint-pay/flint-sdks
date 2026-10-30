<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $modifier_set_id
 * @property-read array{'expected_version'?: int, 'external_reference_id'?: string|null, 'metadata'?: array<array-key, string|null>|\stdClass|null, 'modifier_groups'?: list<array{'display_name'?: string, 'max_selected'?: int, 'min_selected'?: int, 'modifier_group'?: mixed, 'modifier_group_id': string, 'modifier_overrides'?: list<array{'available'?: bool, 'default_quantity'?: int, 'line_item_tax_category'?: string, 'modifier_id': string, 'selected_by_default'?: bool, 'taxable'?: bool, 'unit_price_delta_money'?: mixed}|object>, 'modifier_set_group_id'?: string, 'position'?: int, 'required'?: bool, 'show_on_fulfillment'?: bool, 'show_on_receipt'?: bool, 'source': string}|object|array{'display_name'?: string, 'max_selected'?: int, 'min_selected'?: int, 'modifier_group': mixed, 'modifier_group_id'?: string, 'modifier_overrides'?: list<array{'available'?: bool, 'default_quantity'?: int, 'line_item_tax_category'?: string, 'modifier_id': string, 'selected_by_default'?: bool, 'taxable'?: bool, 'unit_price_delta_money'?: mixed}|object>, 'modifier_set_group_id'?: string, 'position'?: int, 'required'?: bool, 'show_on_fulfillment'?: bool, 'show_on_receipt'?: bool, 'source': string}|object>, 'name'?: string, 'status'?: string}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class ModifierSetsUpdateInput extends Model {
    /** @param array{'modifier_set_id': string, 'body': array{'expected_version'?: int, 'external_reference_id'?: string|null, 'metadata'?: array<array-key, string|null>|\stdClass|null, 'modifier_groups'?: list<array{'display_name'?: string, 'max_selected'?: int, 'min_selected'?: int, 'modifier_group'?: mixed, 'modifier_group_id': string, 'modifier_overrides'?: list<array{'available'?: bool, 'default_quantity'?: int, 'line_item_tax_category'?: string, 'modifier_id': string, 'selected_by_default'?: bool, 'taxable'?: bool, 'unit_price_delta_money'?: mixed}|object>, 'modifier_set_group_id'?: string, 'position'?: int, 'required'?: bool, 'show_on_fulfillment'?: bool, 'show_on_receipt'?: bool, 'source': string}|object|array{'display_name'?: string, 'max_selected'?: int, 'min_selected'?: int, 'modifier_group': mixed, 'modifier_group_id'?: string, 'modifier_overrides'?: list<array{'available'?: bool, 'default_quantity'?: int, 'line_item_tax_category'?: string, 'modifier_id': string, 'selected_by_default'?: bool, 'taxable'?: bool, 'unit_price_delta_money'?: mixed}|object>, 'modifier_set_group_id'?: string, 'position'?: int, 'required'?: bool, 'show_on_fulfillment'?: bool, 'show_on_receipt'?: bool, 'source': string}|object>, 'name'?: string, 'status'?: string}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ModifierSetsUpdateInput')); }
    /** Flint modifier set ID. Example: "ms_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When modifier_set_id is omitted; use hasModifierSetId() or valueOrDefault().
     */
    public function getModifierSetId(): string { return $this->get('modifier_set_id'); }
    public function hasModifierSetId(): bool { return $this->has('modifier_set_id'); }
    /** The request body for: Update modifier set.
     * @return array{'expected_version'?: int, 'external_reference_id'?: string|null, 'metadata'?: array<array-key, string|null>|\stdClass|null, 'modifier_groups'?: list<array{'display_name'?: string, 'max_selected'?: int, 'min_selected'?: int, 'modifier_group'?: mixed, 'modifier_group_id': string, 'modifier_overrides'?: list<array{'available'?: bool, 'default_quantity'?: int, 'line_item_tax_category'?: string, 'modifier_id': string, 'selected_by_default'?: bool, 'taxable'?: bool, 'unit_price_delta_money'?: mixed}|object>, 'modifier_set_group_id'?: string, 'position'?: int, 'required'?: bool, 'show_on_fulfillment'?: bool, 'show_on_receipt'?: bool, 'source': string}|object|array{'display_name'?: string, 'max_selected'?: int, 'min_selected'?: int, 'modifier_group': mixed, 'modifier_group_id'?: string, 'modifier_overrides'?: list<array{'available'?: bool, 'default_quantity'?: int, 'line_item_tax_category'?: string, 'modifier_id': string, 'selected_by_default'?: bool, 'taxable'?: bool, 'unit_price_delta_money'?: mixed}|object>, 'modifier_set_group_id'?: string, 'position'?: int, 'required'?: bool, 'show_on_fulfillment'?: bool, 'show_on_receipt'?: bool, 'source': string}|object>, 'name'?: string, 'status'?: string}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
