<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $external_reference_id
 * @property-read string $invoice_id
 * @property-read list<array{'correction': CreditNoteCorrectionRequestInput|array<array-key, mixed>|\stdClass, 'credit_note_line_item_id'?: string, 'invoice_line_item_id': string}|object> $line_items
 * @property-read string $memo
 * @property-read string $reason
 * Presence-aware input; omitted fields throw when accessed. */
final class CreditNotesCreateParams extends Model {
    /** @param array{'external_reference_id'?: string, 'invoice_id': string, 'line_items'?: list<array{'correction': CreditNoteCorrectionRequestInput|array<array-key, mixed>|\stdClass, 'credit_note_line_item_id'?: string, 'invoice_line_item_id': string}|object>, 'memo'?: string, 'reason': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreditNotesCreateParams')); }
    /** Caller-owned identifier for this resource in an external system. minLength: 1. maxLength: 255.
     * @return string
     * @throws SdkError When external_reference_id is omitted; use hasExternalReferenceId() or valueOrDefault().
     */
    public function getExternalReferenceId(): string { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** The invoice to correct. It has to be past draft and not voided. minLength: 1. Example: "inv_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When invoice_id is omitted; use hasInvoiceId() or valueOrDefault().
     */
    public function getInvoiceId(): string { return $this->get('invoice_id'); }
    public function hasInvoiceId(): bool { return $this->has('invoice_id'); }
    /** Initial draft corrections. Omit or send [] to create an empty draft. Null is not accepted. [] (Value): {@see CreditNoteLineItemRequestInput}. A credit note line you supply when creating or updating a credit note: the invoice line item it credits and how much, or an existing line to keep.
     * @return list<array{'correction': CreditNoteCorrectionRequestInput|array<array-key, mixed>|\stdClass, 'credit_note_line_item_id'?: string, 'invoice_line_item_id': string}|object>
     * @throws SdkError When line_items is omitted; use hasLineItems() or valueOrDefault().
     */
    public function getLineItems(): array { return $this->get('line_items'); }
    public function hasLineItems(): bool { return $this->has('line_items'); }
    /** Free text shown on the credit note, up to 4096 characters. minLength: 1. maxLength: 4096.
     * @return string
     * @throws SdkError When memo is omitted; use hasMemo() or valueOrDefault().
     */
    public function getMemo(): string { return $this->get('memo'); }
    public function hasMemo(): bool { return $this->has('memo'); }
    /** Why the invoice is being corrected: returned_goods, order_adjustment, billing_error, goodwill, or other. Shown on the credit note document. Value enum: "returned_goods", "order_adjustment", "billing_error", "goodwill", "other".
     * @return string
     * @throws SdkError When reason is omitted; use hasReason() or valueOrDefault().
     */
    public function getReason(): string { return $this->get('reason'); }
    public function hasReason(): bool { return $this->has('reason'); }
}
