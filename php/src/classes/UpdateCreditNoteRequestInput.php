<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<CreditNoteLineRequestInput|array<array-key, mixed>|\stdClass> $credit_note_lines
 * @property-read string $expected_version
 * @property-read string $external_reference_id
 * @property-read string|null $memo
 * @property-read string $reason
 * Presence-aware input; omitted fields throw when accessed. */
final class UpdateCreditNoteRequestInput extends Model {
    /** @param mixed $values */
    public function __construct(mixed $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('UpdateCreditNoteRequestInput')); }
    /** @return list<CreditNoteLineRequestInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When credit_note_lines is omitted; use hasCreditNoteLines() or valueOrDefault().
     */
    public function getCreditNoteLines(): array { return $this->get('credit_note_lines'); }
    public function hasCreditNoteLines(): bool { return $this->has('credit_note_lines'); }
    /** @return string
     * @throws SdkError When expected_version is omitted; use hasExpectedVersion() or valueOrDefault().
     */
    public function getExpectedVersion(): string { return $this->get('expected_version'); }
    public function hasExpectedVersion(): bool { return $this->has('expected_version'); }
    /** @return string
     * @throws SdkError When external_reference_id is omitted; use hasExternalReferenceId() or valueOrDefault().
     */
    public function getExternalReferenceId(): string { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** @return string|null
     * @throws SdkError When memo is omitted; use hasMemo() or valueOrDefault().
     */
    public function getMemo(): string|null { return $this->get('memo'); }
    public function hasMemo(): bool { return $this->has('memo'); }
    /** @return string
     * @throws SdkError When reason is omitted; use hasReason() or valueOrDefault().
     */
    public function getReason(): string { return $this->get('reason'); }
    public function hasReason(): bool { return $this->has('reason'); }
}
