<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $credit_note_id
 * @property-read string $credit_note_allocation_id
 * Presence-aware input; omitted fields throw when accessed. */
final class CreditNotesGetAllocationInput extends Model {
    /** @param array{'credit_note_id': string, 'credit_note_allocation_id': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreditNotesGetAllocationInput')); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When credit_note_id is omitted; use hasCreditNoteId() or valueOrDefault().
     */
    public function getCreditNoteId(): string { return $this->get('credit_note_id'); }
    public function hasCreditNoteId(): bool { return $this->has('credit_note_id'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When credit_note_allocation_id is omitted; use hasCreditNoteAllocationId() or valueOrDefault().
     */
    public function getCreditNoteAllocationId(): string { return $this->get('credit_note_allocation_id'); }
    public function hasCreditNoteAllocationId(): bool { return $this->has('credit_note_allocation_id'); }
}
