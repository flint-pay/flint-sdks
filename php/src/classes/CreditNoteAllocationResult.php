<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read CreditNote $credit_note
 * @property-read CreditNoteAllocation $credit_note_allocation
 * @property-read Invoice $invoice
 * Presence-aware response; omitted optional fields return null. */
final class CreditNoteAllocationResult extends Model {
    /** @param array{'credit_note': mixed, 'credit_note_allocation': mixed, 'invoice': mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreditNoteAllocationResult')); }
    /** Shape $ (Value): {@see CreditNote}. The credit note with its recomputed available_money and allocated_money. A correction against an issued invoice. Credit notes reduce what is owed; refunds return what was already collected.
     * @return CreditNote
     */
    public function getCreditNote(): CreditNote { return $this->get('credit_note'); }
    public function hasCreditNote(): bool { return $this->has('credit_note'); }
    /** Shape $ (Value): {@see CreditNoteAllocation}. The allocation that was created or reversed. One application of credit to the invoice. Allocations are append-only: a reversal sets reversed_at rather than removing the row.
     * @return CreditNoteAllocation
     */
    public function getCreditNoteAllocation(): CreditNoteAllocation { return $this->get('credit_note_allocation'); }
    public function hasCreditNoteAllocation(): bool { return $this->has('credit_note_allocation'); }
    /** Shape $ (Value): {@see Invoice}. The invoice with its recomputed outstanding balance and status. A bill issued to a customer.
     * @return Invoice
     */
    public function getInvoice(): Invoice { return $this->get('invoice'); }
    public function hasInvoice(): bool { return $this->has('invoice'); }
}
