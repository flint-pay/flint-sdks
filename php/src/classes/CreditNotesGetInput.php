<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $credit_note_id
 * @property-read list<string> $expand
 * Presence-aware input; omitted fields throw when accessed. */
final class CreditNotesGetInput extends Model {
    /** @param array{'credit_note_id': string, 'expand'?: list<string>}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreditNotesGetInput')); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When credit_note_id is omitted; use hasCreditNoteId() or valueOrDefault().
     */
    public function getCreditNoteId(): string { return $this->get('credit_note_id'); }
    public function hasCreditNoteId(): bool { return $this->has('credit_note_id'); }
    /** Shape $ (Value): Array of string.  [] enum: "invoice". Shape $[] (Value): string.  Value enum: "invoice".
     * @return list<string>
     * @throws SdkError When expand is omitted; use hasExpand() or valueOrDefault().
     */
    public function getExpand(): array { return $this->get('expand'); }
    public function hasExpand(): bool { return $this->has('expand'); }
}
