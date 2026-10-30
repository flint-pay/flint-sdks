<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int $expected_version
 * @property-read string|null $external_reference_id
 * @property-read list<CreditNoteLineItemRequestInput|array<array-key, mixed>|\stdClass> $line_items
 * @property-read string|null $memo
 * @property-read string $reason
 * Presence-aware input; omitted fields throw when accessed. */
final class UpdateCreditNoteRequestInput extends Model {
    /** @param array{'expected_version'?: int, 'external_reference_id'?: string|null, 'line_items'?: list<CreditNoteLineItemRequestInput|array<array-key, mixed>|\stdClass>, 'memo'?: string|null, 'reason'?: string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('UpdateCreditNoteRequestInput')); }
    /** Credit note version last read. Required when line_items is present. Required when any of these fields is present: line_items. Format: int64. minimum: 1.
     * @return int
     * @throws SdkError When expected_version is omitted; use hasExpectedVersion() or valueOrDefault().
     */
    public function getExpectedVersion(): int { return $this->get('expected_version'); }
    public function hasExpectedVersion(): bool { return $this->has('expected_version'); }
    /** Caller-owned identifier for this resource in an external system. Send null to clear it. minLength: 1. maxLength: 255.
     * @return string|null
     * @throws SdkError When external_reference_id is omitted; use hasExternalReferenceId() or valueOrDefault().
     */
    public function getExternalReferenceId(): string|null { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** Full replacement of the draft's owned line collection; requires expected_version. Recalculates corrections from current remaining creditable pools. After CONCURRENT_MODIFICATION with reason credit_note_creditable_value_changed, replace the existing corrections using the credit note's current version, review the new amounts, and issue again. Scalar memo or reason changes do not reprice lines. [] (Value): {@see CreditNoteLineItemRequestInput}. A credit note line you supply when creating or updating a credit note: the invoice line item it credits and how much, or an existing line to keep.
     * @return list<CreditNoteLineItemRequestInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When line_items is omitted; use hasLineItems() or valueOrDefault().
     */
    public function getLineItems(): array { return $this->get('line_items'); }
    public function hasLineItems(): bool { return $this->has('line_items'); }
    /** Send null to clear it. minLength: 1. maxLength: 4096.
     * @return string|null
     * @throws SdkError When memo is omitted; use hasMemo() or valueOrDefault().
     */
    public function getMemo(): string|null { return $this->get('memo'); }
    public function hasMemo(): bool { return $this->has('memo'); }
    /** Why the invoice is being corrected: returned_goods, order_adjustment, billing_error, goodwill, or other. Cannot be null; omit it to keep the current reason. Value enum: "returned_goods", "order_adjustment", "billing_error", "goodwill", "other".
     * @return string
     * @throws SdkError When reason is omitted; use hasReason() or valueOrDefault().
     */
    public function getReason(): string { return $this->get('reason'); }
    public function hasReason(): bool { return $this->has('reason'); }
}
