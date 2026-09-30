<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<CreditNoteLineRequestInput|array<array-key, mixed>|\stdClass> $credit_note_lines
 * @property-read string $external_reference_id
 * @property-read string $invoice_id
 * @property-read string $memo
 * @property-read string $reason
 * Presence-aware input; omitted fields throw when accessed. */
final class CreateCreditNoteRequestInput extends Model {
    /** @param array{'credit_note_lines'?: list<CreditNoteLineRequestInput|array<array-key, mixed>|\stdClass>, 'external_reference_id'?: string, 'invoice_id': string, 'memo'?: string, 'reason': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreateCreditNoteRequestInput')); }
    /** @return list<CreditNoteLineRequestInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When credit_note_lines is omitted; use hasCreditNoteLines() or valueOrDefault().
     */
    public function getCreditNoteLines(): array { return $this->get('credit_note_lines'); }
    public function hasCreditNoteLines(): bool { return $this->has('credit_note_lines'); }
    /** @return string
     * @throws SdkError When external_reference_id is omitted; use hasExternalReferenceId() or valueOrDefault().
     */
    public function getExternalReferenceId(): string { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** @return string
     * @throws SdkError When invoice_id is omitted; use hasInvoiceId() or valueOrDefault().
     */
    public function getInvoiceId(): string { return $this->get('invoice_id'); }
    public function hasInvoiceId(): bool { return $this->has('invoice_id'); }
    /** @return string
     * @throws SdkError When memo is omitted; use hasMemo() or valueOrDefault().
     */
    public function getMemo(): string { return $this->get('memo'); }
    public function hasMemo(): bool { return $this->has('memo'); }
    /** @return string
     * @throws SdkError When reason is omitted; use hasReason() or valueOrDefault().
     */
    public function getReason(): string { return $this->get('reason'); }
    public function hasReason(): bool { return $this->has('reason'); }
}
