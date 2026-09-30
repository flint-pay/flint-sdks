<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $acceptance_status
 * @property-read string $condition
 * @property-read string $external_reference_id
 * @property-read list<string> $finding_codes
 * @property-read string|\DateTimeInterface $inspected_at
 * @property-read string $internal_note
 * Presence-aware input; omitted fields throw when accessed. */
final class ReturnProcessInspectionRequestInput extends Model {
    /** @param array{'acceptance_status': string, 'condition': string, 'external_reference_id'?: string, 'finding_codes'?: list<string>, 'inspected_at': string|\DateTimeInterface, 'internal_note'?: string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnProcessInspectionRequestInput')); }
    /** @return string
     * @throws SdkError When acceptance_status is omitted; use hasAcceptanceStatus() or valueOrDefault().
     */
    public function getAcceptanceStatus(): string { return $this->get('acceptance_status'); }
    public function hasAcceptanceStatus(): bool { return $this->has('acceptance_status'); }
    /** @return string
     * @throws SdkError When condition is omitted; use hasCondition() or valueOrDefault().
     */
    public function getCondition(): string { return $this->get('condition'); }
    public function hasCondition(): bool { return $this->has('condition'); }
    /** @return string
     * @throws SdkError When external_reference_id is omitted; use hasExternalReferenceId() or valueOrDefault().
     */
    public function getExternalReferenceId(): string { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** @return list<string>
     * @throws SdkError When finding_codes is omitted; use hasFindingCodes() or valueOrDefault().
     */
    public function getFindingCodes(): array { return $this->get('finding_codes'); }
    public function hasFindingCodes(): bool { return $this->has('finding_codes'); }
    /** @return string|\DateTimeInterface
     * @throws SdkError When inspected_at is omitted; use hasInspectedAt() or valueOrDefault().
     */
    public function getInspectedAt(): string|\DateTimeInterface { return $this->get('inspected_at'); }
    public function hasInspectedAt(): bool { return $this->has('inspected_at'); }
    /** @return string
     * @throws SdkError When internal_note is omitted; use hasInternalNote() or valueOrDefault().
     */
    public function getInternalNote(): string { return $this->get('internal_note'); }
    public function hasInternalNote(): bool { return $this->has('internal_note'); }
}
