<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $credit_note_id
 * Presence-aware input; omitted fields throw when accessed. */
final class MeGetCreditNotePDFInput extends Model {
    /** @param array{'credit_note_id': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('MeGetCreditNotePDFInput')); }
    /** Flint credit note ID. Example: "cn_01KEZF7C00N1TRRCVDNY8S471H".
     * @return string
     * @throws SdkError When credit_note_id is omitted; use hasCreditNoteId() or valueOrDefault().
     */
    public function getCreditNoteId(): string { return $this->get('credit_note_id'); }
    public function hasCreditNoteId(): bool { return $this->has('credit_note_id'); }
}
