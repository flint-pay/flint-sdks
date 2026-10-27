<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read array{'category_handles'?: list<string>, 'description'?: string, 'external_reference_id'?: string, 'handle': string, 'is_note_required'?: bool, 'name': string}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class ReturnReasonsCreateInput extends Model {
    /** @param array{'Idempotency-Key'?: string, 'body': array{'category_handles'?: list<string>, 'description'?: string, 'external_reference_id'?: string, 'handle': string, 'is_note_required'?: bool, 'name': string}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnReasonsCreateInput')); }
    /** Shape $ (Value): string. maxLength: 255.
     * @return string
     * @throws SdkError When Idempotency-Key is omitted; use hasIdempotencyKey() or valueOrDefault().
     */
    public function getIdempotencyKey(): string { return $this->get('Idempotency-Key'); }
    public function hasIdempotencyKey(): bool { return $this->has('Idempotency-Key'); }
    /** Shape $ (Value): object. The request body for: Create return reason.
     * @return array{'category_handles'?: list<string>, 'description'?: string, 'external_reference_id'?: string, 'handle': string, 'is_note_required'?: bool, 'name': string}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
