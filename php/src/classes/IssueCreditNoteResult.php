<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read CreditNote $credit_note
 * @property-read ?CreditNoteAllocation $credit_note_allocation
 * @property-read Invoice $invoice
 * @property-read ?Refund $refund
 * Presence-aware response; omitted optional fields return null. */
final class IssueCreditNoteResult extends Model {
    /** @param array{'credit_note': mixed, 'credit_note_allocation'?: mixed, 'invoice': mixed, 'refund'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('IssueCreditNoteResult')); }
    /** The issued credit note. Its version is the target of expected_version. A correction against an issued invoice. Credit notes reduce what is owed; refunds return what was already collected.
     * @return CreditNote
     */
    public function getCreditNote(): CreditNote { return $this->get('credit_note'); }
    public function hasCreditNote(): bool { return $this->has('credit_note'); }
    /** The linked allocation, present when allocation was requested. Its idempotency_key is issue: followed by the issue request's Idempotency-Key. One application of credit to the invoice. Allocations are append-only: a reversal sets reversed_at rather than removing the row.
     * @return ?CreditNoteAllocation
     */
    public function getCreditNoteAllocation(): ?CreditNoteAllocation { return $this->get('credit_note_allocation'); }
    public function hasCreditNoteAllocation(): bool { return $this->has('credit_note_allocation'); }
    /** The invoice state after the credit note was issued. A bill issued to a customer.
     * @return Invoice
     */
    public function getInvoice(): Invoice { return $this->get('invoice'); }
    public function hasInvoice(): bool { return $this->has('invoice'); }
    /** The linked refund, present when refund was requested. A pending refund has been accepted but has not completed. Money returned against a collected payment.
     * @return ?Refund
     */
    public function getRefund(): ?Refund { return $this->get('refund'); }
    public function hasRefund(): bool { return $this->has('refund'); }
}
