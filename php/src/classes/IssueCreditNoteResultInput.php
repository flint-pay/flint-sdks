<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read CreditNoteInput|array<array-key, mixed>|\stdClass $credit_note
 * @property-read CreditNoteAllocationInput|array<array-key, mixed>|\stdClass $credit_note_allocation
 * @property-read InvoiceInput|array<array-key, mixed>|\stdClass $invoice
 * @property-read RefundInput|array<array-key, mixed>|\stdClass $refund
 * Presence-aware input; omitted fields throw when accessed. */
final class IssueCreditNoteResultInput extends Model {
    /** @param array{'credit_note': CreditNoteInput|array<array-key, mixed>|\stdClass, 'credit_note_allocation'?: CreditNoteAllocationInput|array<array-key, mixed>|\stdClass, 'invoice': InvoiceInput|array<array-key, mixed>|\stdClass, 'refund'?: RefundInput|array<array-key, mixed>|\stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('IssueCreditNoteResultInput')); }
    /** The issued credit note. Its version is the target of expected_version. A correction against an issued invoice. Credit notes reduce what is owed; refunds return what was already collected.
     * @return CreditNoteInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When credit_note is omitted; use hasCreditNote() or valueOrDefault().
     */
    public function getCreditNote(): mixed { return $this->get('credit_note'); }
    public function hasCreditNote(): bool { return $this->has('credit_note'); }
    /** The linked allocation, present when allocation was requested. Its idempotency_key is issue: followed by the issue request's Idempotency-Key. One application of credit to the invoice. Allocations are append-only: a reversal sets reversed_at rather than removing the row.
     * @return CreditNoteAllocationInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When credit_note_allocation is omitted; use hasCreditNoteAllocation() or valueOrDefault().
     */
    public function getCreditNoteAllocation(): mixed { return $this->get('credit_note_allocation'); }
    public function hasCreditNoteAllocation(): bool { return $this->has('credit_note_allocation'); }
    /** The invoice state after the credit note was issued. A bill issued to a customer.
     * @return InvoiceInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When invoice is omitted; use hasInvoice() or valueOrDefault().
     */
    public function getInvoice(): mixed { return $this->get('invoice'); }
    public function hasInvoice(): bool { return $this->has('invoice'); }
    /** The linked refund, present when refund was requested. A pending refund has been accepted but has not completed. Money returned against a collected payment.
     * @return RefundInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When refund is omitted; use hasRefund() or valueOrDefault().
     */
    public function getRefund(): mixed { return $this->get('refund'); }
    public function hasRefund(): bool { return $this->has('refund'); }
}
