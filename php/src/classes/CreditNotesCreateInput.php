<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read array{'external_reference_id'?: string, 'invoice_id': string, 'line_items'?: list<array{'correction': mixed, 'credit_note_line_item_id'?: string, 'invoice_line_item_id': string}|object>, 'memo'?: string, 'reason': string}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class CreditNotesCreateInput extends Model {
    /** @param array{'body': array{'external_reference_id'?: string, 'invoice_id': string, 'line_items'?: list<array{'correction': mixed, 'credit_note_line_item_id'?: string, 'invoice_line_item_id': string}|object>, 'memo'?: string, 'reason': string}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreditNotesCreateInput')); }
    /** The request body for: Create credit note.
     * @return array{'external_reference_id'?: string, 'invoice_id': string, 'line_items'?: list<array{'correction': mixed, 'credit_note_line_item_id'?: string, 'invoice_line_item_id': string}|object>, 'memo'?: string, 'reason': string}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
