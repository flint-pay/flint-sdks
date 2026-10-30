<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $credit_note_id
 * @property-read array{'amount_money': mixed, 'expected_version'?: int}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class CreditNotesCreateAllocationInput extends Model {
    /** @param array{'credit_note_id': string, 'body': array{'amount_money': mixed, 'expected_version'?: int}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreditNotesCreateAllocationInput')); }
    /** Flint credit note ID. Example: "cn_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When credit_note_id is omitted; use hasCreditNoteId() or valueOrDefault().
     */
    public function getCreditNoteId(): string { return $this->get('credit_note_id'); }
    public function hasCreditNoteId(): bool { return $this->has('credit_note_id'); }
    /** The request body for: Allocate credit note.
     * @return array{'amount_money': mixed, 'expected_version'?: int}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
