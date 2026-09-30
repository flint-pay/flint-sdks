<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read CreditNote $credit_note
 * @property-read CreditNoteAllocation $credit_note_allocation
 * @property-read Invoice $invoice
 * Presence-aware response; omitted fields throw when accessed. */
final class CreditNoteAllocationResult extends Model {
    /** @param array{'credit_note': mixed, 'credit_note_allocation': mixed, 'invoice': mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreditNoteAllocationResult')); }
    /** @return CreditNote
     * @throws SdkError When credit_note is omitted; use hasCreditNote() or valueOrDefault().
     */
    public function getCreditNote(): CreditNote { return $this->get('credit_note'); }
    public function hasCreditNote(): bool { return $this->has('credit_note'); }
    /** @return CreditNoteAllocation
     * @throws SdkError When credit_note_allocation is omitted; use hasCreditNoteAllocation() or valueOrDefault().
     */
    public function getCreditNoteAllocation(): CreditNoteAllocation { return $this->get('credit_note_allocation'); }
    public function hasCreditNoteAllocation(): bool { return $this->has('credit_note_allocation'); }
    /** @return Invoice
     * @throws SdkError When invoice is omitted; use hasInvoice() or valueOrDefault().
     */
    public function getInvoice(): Invoice { return $this->get('invoice'); }
    public function hasInvoice(): bool { return $this->has('invoice'); }
}
