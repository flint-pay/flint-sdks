<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read array{'external_reference_id'?: string, 'invoice_id': string, 'line_items'?: list<mixed>, 'memo'?: string, 'reason': string, ...}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class CreditNotesCreateInput extends Model {
    /** @param array{'Idempotency-Key'?: string, 'body': array{'external_reference_id'?: string, 'invoice_id': string, 'line_items'?: list<mixed>, 'memo'?: string, 'reason': string, ...}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreditNotesCreateInput')); }
    /** Shape $ (Value): string. maxLength: 255.
     * @return string
     * @throws SdkError When Idempotency-Key is omitted; use hasIdempotencyKey() or valueOrDefault().
     */
    public function getIdempotencyKey(): string { return $this->get('Idempotency-Key'); }
    public function hasIdempotencyKey(): bool { return $this->has('Idempotency-Key'); }
    /** Shape $ (Value): object. The request body for: Create credit note.
     * @return array{'external_reference_id'?: string, 'invoice_id': string, 'line_items'?: list<mixed>, 'memo'?: string, 'reason': string, ...}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
