<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read CreditNoteCorrectionRequestInput|array<array-key, mixed>|\stdClass $correction
 * @property-read string $credit_note_line_item_id
 * @property-read string $invoice_line_item_id
 * Presence-aware input; omitted fields throw when accessed. */
final class CreditNoteLineItemRequestInput extends Model {
    /** @param array{'correction': CreditNoteCorrectionRequestInput|array<array-key, mixed>|\stdClass, 'credit_note_line_item_id'?: string, 'invoice_line_item_id': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreditNoteLineItemRequestInput')); }
    /** How much of the invoice line to credit, by quantity or by amount. How much of an invoice line item a credit note line credits, by whole `quantity` or by `amount`, chosen by `type`.
     * @return CreditNoteCorrectionRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When correction is omitted; use hasCorrection() or valueOrDefault().
     */
    public function getCorrection(): mixed { return $this->get('correction'); }
    public function hasCorrection(): bool { return $this->has('correction'); }
    /** Existing credit note line item to retain. Omit to create a new line item. minLength: 1.
     * @return string
     * @throws SdkError When credit_note_line_item_id is omitted; use hasCreditNoteLineItemId() or valueOrDefault().
     */
    public function getCreditNoteLineItemId(): string { return $this->get('credit_note_line_item_id'); }
    public function hasCreditNoteLineItemId(): bool { return $this->has('credit_note_line_item_id'); }
    /** The invoice snapshot line to credit. minLength: 1.
     * @return string
     * @throws SdkError When invoice_line_item_id is omitted; use hasInvoiceLineItemId() or valueOrDefault().
     */
    public function getInvoiceLineItemId(): string { return $this->get('invoice_line_item_id'); }
    public function hasInvoiceLineItemId(): bool { return $this->has('invoice_line_item_id'); }
}
