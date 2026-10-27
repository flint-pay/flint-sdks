<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $modifier_set_id
 * @property-read array{'expected_version'?: string, 'external_reference_id'?: string|null, 'metadata'?: array<array-key, string|null>|\stdClass|null, 'modifier_groups'?: list<mixed>, 'name'?: string, 'status'?: string, ...}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class ModifierSetsUpdateInput extends Model {
    /** @param array{'modifier_set_id': string, 'Idempotency-Key'?: string, 'body': array{'expected_version'?: string, 'external_reference_id'?: string|null, 'metadata'?: array<array-key, string|null>|\stdClass|null, 'modifier_groups'?: list<mixed>, 'name'?: string, 'status'?: string, ...}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ModifierSetsUpdateInput')); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When modifier_set_id is omitted; use hasModifierSetId() or valueOrDefault().
     */
    public function getModifierSetId(): string { return $this->get('modifier_set_id'); }
    public function hasModifierSetId(): bool { return $this->has('modifier_set_id'); }
    /** Shape $ (Value): string. maxLength: 255.
     * @return string
     * @throws SdkError When Idempotency-Key is omitted; use hasIdempotencyKey() or valueOrDefault().
     */
    public function getIdempotencyKey(): string { return $this->get('Idempotency-Key'); }
    public function hasIdempotencyKey(): bool { return $this->has('Idempotency-Key'); }
    /** Shape $ (Value): object. The request body for: Update modifier set.
     * @return array{'expected_version'?: string, 'external_reference_id'?: string|null, 'metadata'?: array<array-key, string|null>|\stdClass|null, 'modifier_groups'?: list<mixed>, 'name'?: string, 'status'?: string, ...}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
