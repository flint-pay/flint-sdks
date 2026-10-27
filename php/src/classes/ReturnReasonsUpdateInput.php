<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $return_reason_id
 * @property-read array{'category_handles'?: list<string>, 'description'?: string|null, 'expected_version'?: string, 'external_reference_id'?: string|null, 'is_note_required'?: bool, 'name'?: string, 'status'?: string}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class ReturnReasonsUpdateInput extends Model {
    /** @param array{'return_reason_id': string, 'Idempotency-Key'?: string, 'body': array{'category_handles'?: list<string>, 'description'?: string|null, 'expected_version'?: string, 'external_reference_id'?: string|null, 'is_note_required'?: bool, 'name'?: string, 'status'?: string}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnReasonsUpdateInput')); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When return_reason_id is omitted; use hasReturnReasonId() or valueOrDefault().
     */
    public function getReturnReasonId(): string { return $this->get('return_reason_id'); }
    public function hasReturnReasonId(): bool { return $this->has('return_reason_id'); }
    /** Shape $ (Value): string. maxLength: 255.
     * @return string
     * @throws SdkError When Idempotency-Key is omitted; use hasIdempotencyKey() or valueOrDefault().
     */
    public function getIdempotencyKey(): string { return $this->get('Idempotency-Key'); }
    public function hasIdempotencyKey(): bool { return $this->has('Idempotency-Key'); }
    /** Shape $ (Value): object. The request body for: Update return reason.
     * @return array{'category_handles'?: list<string>, 'description'?: string|null, 'expected_version'?: string, 'external_reference_id'?: string|null, 'is_note_required'?: bool, 'name'?: string, 'status'?: string}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
