<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read array{'allow_quantities'?: bool, 'external_reference_id'?: string, 'max_quantity'?: int, 'max_selected'?: int, 'max_total_quantity'?: int, 'metadata'?: mixed, 'min_quantity'?: int, 'min_selected'?: int, 'modifier_group_type'?: string, 'modifiers'?: list<mixed>, 'name': string, 'show_on_fulfillment'?: bool, 'show_on_receipt'?: bool, 'status'?: string, 'text'?: mixed}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class ModifierGroupsCreateInput extends Model {
    /** @param array{'body': array{'allow_quantities'?: bool, 'external_reference_id'?: string, 'max_quantity'?: int, 'max_selected'?: int, 'max_total_quantity'?: int, 'metadata'?: mixed, 'min_quantity'?: int, 'min_selected'?: int, 'modifier_group_type'?: string, 'modifiers'?: list<mixed>, 'name': string, 'show_on_fulfillment'?: bool, 'show_on_receipt'?: bool, 'status'?: string, 'text'?: mixed}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ModifierGroupsCreateInput')); }
    /** The request body for: Create modifier group.
     * @return array{'allow_quantities'?: bool, 'external_reference_id'?: string, 'max_quantity'?: int, 'max_selected'?: int, 'max_total_quantity'?: int, 'metadata'?: mixed, 'min_quantity'?: int, 'min_selected'?: int, 'modifier_group_type'?: string, 'modifiers'?: list<mixed>, 'name': string, 'show_on_fulfillment'?: bool, 'show_on_receipt'?: bool, 'status'?: string, 'text'?: mixed}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
