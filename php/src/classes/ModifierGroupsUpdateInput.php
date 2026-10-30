<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $modifier_group_id
 * @property-read array{'allow_quantities'?: bool, 'expected_version'?: int, 'external_reference_id'?: string|null, 'max_quantity'?: int|null, 'max_selected'?: int|null, 'max_total_quantity'?: int|null, 'metadata'?: array<array-key, string|null>|\stdClass|null, 'min_quantity'?: int|null, 'min_selected'?: int|null, 'modifiers'?: list<array{'default_quantity'?: int, 'line_item_tax_category'?: string, 'metadata'?: mixed, 'modifier_id'?: string, 'name': string, 'position'?: int, 'selected_by_default'?: bool, 'show_on_fulfillment'?: bool, 'show_on_receipt'?: bool, 'status'?: string, 'taxable'?: bool, 'unit_price_delta_money'?: mixed}|object>, 'name'?: string, 'show_on_fulfillment'?: bool, 'show_on_receipt'?: bool, 'status'?: string, 'text'?: array{'max_length'?: int|null, 'min_length'?: int|null, 'multiline'?: bool, 'required'?: bool}|object|null}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class ModifierGroupsUpdateInput extends Model {
    /** @param array{'modifier_group_id': string, 'body': array{'allow_quantities'?: bool, 'expected_version'?: int, 'external_reference_id'?: string|null, 'max_quantity'?: int|null, 'max_selected'?: int|null, 'max_total_quantity'?: int|null, 'metadata'?: array<array-key, string|null>|\stdClass|null, 'min_quantity'?: int|null, 'min_selected'?: int|null, 'modifiers'?: list<array{'default_quantity'?: int, 'line_item_tax_category'?: string, 'metadata'?: mixed, 'modifier_id'?: string, 'name': string, 'position'?: int, 'selected_by_default'?: bool, 'show_on_fulfillment'?: bool, 'show_on_receipt'?: bool, 'status'?: string, 'taxable'?: bool, 'unit_price_delta_money'?: mixed}|object>, 'name'?: string, 'show_on_fulfillment'?: bool, 'show_on_receipt'?: bool, 'status'?: string, 'text'?: array{'max_length'?: int|null, 'min_length'?: int|null, 'multiline'?: bool, 'required'?: bool}|object|null}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ModifierGroupsUpdateInput')); }
    /** Flint modifier group ID. Example: "mg_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When modifier_group_id is omitted; use hasModifierGroupId() or valueOrDefault().
     */
    public function getModifierGroupId(): string { return $this->get('modifier_group_id'); }
    public function hasModifierGroupId(): bool { return $this->has('modifier_group_id'); }
    /** The request body for: Update modifier group.
     * @return array{'allow_quantities'?: bool, 'expected_version'?: int, 'external_reference_id'?: string|null, 'max_quantity'?: int|null, 'max_selected'?: int|null, 'max_total_quantity'?: int|null, 'metadata'?: array<array-key, string|null>|\stdClass|null, 'min_quantity'?: int|null, 'min_selected'?: int|null, 'modifiers'?: list<array{'default_quantity'?: int, 'line_item_tax_category'?: string, 'metadata'?: mixed, 'modifier_id'?: string, 'name': string, 'position'?: int, 'selected_by_default'?: bool, 'show_on_fulfillment'?: bool, 'show_on_receipt'?: bool, 'status'?: string, 'taxable'?: bool, 'unit_price_delta_money'?: mixed}|object>, 'name'?: string, 'show_on_fulfillment'?: bool, 'show_on_receipt'?: bool, 'status'?: string, 'text'?: array{'max_length'?: int|null, 'min_length'?: int|null, 'multiline'?: bool, 'required'?: bool}|object|null}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
