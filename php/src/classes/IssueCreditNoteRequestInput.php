<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read CreditNoteIssueAllocationRequestInput|array<array-key, mixed>|\stdClass $allocation
 * @property-read string $expected_version
 * @property-read CreditNoteRefundRequestInput|array<array-key, mixed>|\stdClass $refund
 * Presence-aware input; omitted fields throw when accessed. */
final class IssueCreditNoteRequestInput extends Model {
    /** @param array{'allocation'?: CreditNoteIssueAllocationRequestInput|array<array-key, mixed>|\stdClass, 'expected_version'?: string, 'refund'?: CreditNoteRefundRequestInput|array<array-key, mixed>|\stdClass}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('IssueCreditNoteRequestInput')); }
    /** Shape $ (Value): {@see CreditNoteIssueAllocationRequestInput}. Issue the credit note and apply credit to its invoice atomically. If the allocation fails, the note stays a draft. Omit amount_money to apply the smaller of the credit available after issue and the invoice's outstanding balance. Cannot be combined with refund. Credit to apply to the invoice when issuing a credit note.
     * @return CreditNoteIssueAllocationRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When allocation is omitted; use hasAllocation() or valueOrDefault().
     */
    public function getAllocation(): mixed { return $this->get('allocation'); }
    public function hasAllocation(): bool { return $this->has('allocation'); }
    /** Shape $ (Value): integer string. Credit note version last read. Optional; a stale version returns VERSION_CONFLICT. Use an integer string (decimal digits), not a floating-point number. Format: int64. minimum: 1.
     * @return string
     * @throws SdkError When expected_version is omitted; use hasExpectedVersion() or valueOrDefault().
     */
    public function getExpectedVersion(): string { return $this->get('expected_version'); }
    public function hasExpectedVersion(): bool { return $this->has('expected_version'); }
    /** Shape $ (Value): {@see CreditNoteRefundRequestInput}. Create a linked refund when the credit note is issued. Requires both credit-note and refund write permissions and a paid invoice. Cannot be combined with allocation. Refund details you supply when issuing a credit note: the reason, an optional message, and an optional amount.
     * @return CreditNoteRefundRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When refund is omitted; use hasRefund() or valueOrDefault().
     */
    public function getRefund(): mixed { return $this->get('refund'); }
    public function hasRefund(): bool { return $this->has('refund'); }
}
