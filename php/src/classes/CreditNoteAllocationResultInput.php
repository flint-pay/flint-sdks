<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read CreditNoteInput|array<array-key, mixed>|\stdClass $credit_note
 * @property-read CreditNoteAllocationInput|array<array-key, mixed>|\stdClass $credit_note_allocation
 * @property-read InvoiceInput|array<array-key, mixed>|\stdClass $invoice
 * Presence-aware input; omitted fields throw when accessed. */
final class CreditNoteAllocationResultInput extends Model {
    /** @param array{'credit_note': CreditNoteInput|array<array-key, mixed>|\stdClass, 'credit_note_allocation': CreditNoteAllocationInput|array<array-key, mixed>|\stdClass, 'invoice': InvoiceInput|array<array-key, mixed>|\stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreditNoteAllocationResultInput')); }
    /** @return CreditNoteInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When credit_note is omitted; use hasCreditNote() or valueOrDefault().
     */
    public function getCreditNote(): mixed { return $this->get('credit_note'); }
    public function hasCreditNote(): bool { return $this->has('credit_note'); }
    /** @return CreditNoteAllocationInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When credit_note_allocation is omitted; use hasCreditNoteAllocation() or valueOrDefault().
     */
    public function getCreditNoteAllocation(): mixed { return $this->get('credit_note_allocation'); }
    public function hasCreditNoteAllocation(): bool { return $this->has('credit_note_allocation'); }
    /** @return InvoiceInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When invoice is omitted; use hasInvoice() or valueOrDefault().
     */
    public function getInvoice(): mixed { return $this->get('invoice'); }
    public function hasInvoice(): bool { return $this->has('invoice'); }
}
