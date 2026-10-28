<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $modifier_group_id
 * @property-read array{'allow_quantities'?: bool, 'expected_version'?: string, 'external_reference_id'?: string|null, 'max_quantity'?: string|null, 'max_selected'?: int|null, 'max_total_quantity'?: string|null, 'metadata'?: array<array-key, string|null>|\stdClass|null, 'min_quantity'?: string|null, 'min_selected'?: int|null, 'modifiers'?: list<mixed>, 'name'?: string, 'show_on_fulfillment'?: bool, 'show_on_receipt'?: bool, 'status'?: string, 'text'?: array{'max_length'?: int|null, 'min_length'?: int|null, 'multiline'?: bool, 'required'?: bool}|object|null}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class ModifierGroupsUpdateInput extends Model {
    /** @param array{'modifier_group_id': string, 'Idempotency-Key'?: string, 'body': array{'allow_quantities'?: bool, 'expected_version'?: string, 'external_reference_id'?: string|null, 'max_quantity'?: string|null, 'max_selected'?: int|null, 'max_total_quantity'?: string|null, 'metadata'?: array<array-key, string|null>|\stdClass|null, 'min_quantity'?: string|null, 'min_selected'?: int|null, 'modifiers'?: list<mixed>, 'name'?: string, 'show_on_fulfillment'?: bool, 'show_on_receipt'?: bool, 'status'?: string, 'text'?: array{'max_length'?: int|null, 'min_length'?: int|null, 'multiline'?: bool, 'required'?: bool}|object|null}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ModifierGroupsUpdateInput')); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When modifier_group_id is omitted; use hasModifierGroupId() or valueOrDefault().
     */
    public function getModifierGroupId(): string { return $this->get('modifier_group_id'); }
    public function hasModifierGroupId(): bool { return $this->has('modifier_group_id'); }
    /** Shape $ (Value): string. maxLength: 255.
     * @return string
     * @throws SdkError When Idempotency-Key is omitted; use hasIdempotencyKey() or valueOrDefault().
     */
    public function getIdempotencyKey(): string { return $this->get('Idempotency-Key'); }
    public function hasIdempotencyKey(): bool { return $this->has('Idempotency-Key'); }
    /** Shape $ (Value): object. The request body for: Update modifier group.
     * @return array{'allow_quantities'?: bool, 'expected_version'?: string, 'external_reference_id'?: string|null, 'max_quantity'?: string|null, 'max_selected'?: int|null, 'max_total_quantity'?: string|null, 'metadata'?: array<array-key, string|null>|\stdClass|null, 'min_quantity'?: string|null, 'min_selected'?: int|null, 'modifiers'?: list<mixed>, 'name'?: string, 'show_on_fulfillment'?: bool, 'show_on_receipt'?: bool, 'status'?: string, 'text'?: array{'max_length'?: int|null, 'min_length'?: int|null, 'multiline'?: bool, 'required'?: bool}|object|null}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
