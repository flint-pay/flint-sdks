<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $correction_reason
 * @property-read string $correction_reason_message
 * @property-read string|\DateTimeInterface $created_at
 * @property-read string $external_actor_id
 * @property-read string $external_reference_id
 * @property-read list<ReturnDispositionInput|array<array-key, mixed>|\stdClass> $generated_dispositions
 * @property-read string|\DateTimeInterface $inspected_at
 * @property-read list<ReturnInspectionLineItemInput|array<array-key, mixed>|\stdClass> $line_items
 * @property-read string $location_id
 * @property-read string $return_id
 * @property-read string $return_inspection_id
 * @property-read string $return_receipt_id
 * @property-read array{'external_source_id'?: string, 'source_system_type': string}|object|null $source_system
 * @property-read string $status
 * @property-read string|\DateTimeInterface $superseded_at
 * @property-read string $superseded_by_return_inspection_id
 * @property-read string $supersedes_return_inspection_id
 * Presence-aware input; omitted fields throw when accessed. */
final class ReturnInspectionInput extends Model {
    /** @param array{'correction_reason'?: string, 'correction_reason_message'?: string, 'created_at': string|\DateTimeInterface, 'external_actor_id'?: string, 'external_reference_id'?: string, 'generated_dispositions': list<ReturnDispositionInput|array<array-key, mixed>|\stdClass>, 'inspected_at': string|\DateTimeInterface, 'line_items': list<ReturnInspectionLineItemInput|array<array-key, mixed>|\stdClass>, 'location_id': string, 'return_id': string, 'return_inspection_id': string, 'return_receipt_id': string, 'source_system': array{'external_source_id'?: string, 'source_system_type': string}|object|null, 'status': string, 'superseded_at'?: string|\DateTimeInterface, 'superseded_by_return_inspection_id'?: string, 'supersedes_return_inspection_id'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnInspectionInput')); }
    /** @return string
     * @throws SdkError When correction_reason is omitted; use hasCorrectionReason() or valueOrDefault().
     */
    public function getCorrectionReason(): string { return $this->get('correction_reason'); }
    public function hasCorrectionReason(): bool { return $this->has('correction_reason'); }
    /** @return string
     * @throws SdkError When correction_reason_message is omitted; use hasCorrectionReasonMessage() or valueOrDefault().
     */
    public function getCorrectionReasonMessage(): string { return $this->get('correction_reason_message'); }
    public function hasCorrectionReasonMessage(): bool { return $this->has('correction_reason_message'); }
    /** @return string|\DateTimeInterface
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string|\DateTimeInterface { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** @return string
     * @throws SdkError When external_actor_id is omitted; use hasExternalActorId() or valueOrDefault().
     */
    public function getExternalActorId(): string { return $this->get('external_actor_id'); }
    public function hasExternalActorId(): bool { return $this->has('external_actor_id'); }
    /** @return string
     * @throws SdkError When external_reference_id is omitted; use hasExternalReferenceId() or valueOrDefault().
     */
    public function getExternalReferenceId(): string { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** @return list<ReturnDispositionInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When generated_dispositions is omitted; use hasGeneratedDispositions() or valueOrDefault().
     */
    public function getGeneratedDispositions(): array { return $this->get('generated_dispositions'); }
    public function hasGeneratedDispositions(): bool { return $this->has('generated_dispositions'); }
    /** @return string|\DateTimeInterface
     * @throws SdkError When inspected_at is omitted; use hasInspectedAt() or valueOrDefault().
     */
    public function getInspectedAt(): string|\DateTimeInterface { return $this->get('inspected_at'); }
    public function hasInspectedAt(): bool { return $this->has('inspected_at'); }
    /** @return list<ReturnInspectionLineItemInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When line_items is omitted; use hasLineItems() or valueOrDefault().
     */
    public function getLineItems(): array { return $this->get('line_items'); }
    public function hasLineItems(): bool { return $this->has('line_items'); }
    /** @return string
     * @throws SdkError When location_id is omitted; use hasLocationId() or valueOrDefault().
     */
    public function getLocationId(): string { return $this->get('location_id'); }
    public function hasLocationId(): bool { return $this->has('location_id'); }
    /** @return string
     * @throws SdkError When return_id is omitted; use hasReturnId() or valueOrDefault().
     */
    public function getReturnId(): string { return $this->get('return_id'); }
    public function hasReturnId(): bool { return $this->has('return_id'); }
    /** @return string
     * @throws SdkError When return_inspection_id is omitted; use hasReturnInspectionId() or valueOrDefault().
     */
    public function getReturnInspectionId(): string { return $this->get('return_inspection_id'); }
    public function hasReturnInspectionId(): bool { return $this->has('return_inspection_id'); }
    /** @return string
     * @throws SdkError When return_receipt_id is omitted; use hasReturnReceiptId() or valueOrDefault().
     */
    public function getReturnReceiptId(): string { return $this->get('return_receipt_id'); }
    public function hasReturnReceiptId(): bool { return $this->has('return_receipt_id'); }
    /** @return array{'external_source_id'?: string, 'source_system_type': string}|object|null
     * @throws SdkError When source_system is omitted; use hasSourceSystem() or valueOrDefault().
     */
    public function getSourceSystem(): mixed { return $this->get('source_system'); }
    public function hasSourceSystem(): bool { return $this->has('source_system'); }
    /** @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** @return string|\DateTimeInterface
     * @throws SdkError When superseded_at is omitted; use hasSupersededAt() or valueOrDefault().
     */
    public function getSupersededAt(): string|\DateTimeInterface { return $this->get('superseded_at'); }
    public function hasSupersededAt(): bool { return $this->has('superseded_at'); }
    /** @return string
     * @throws SdkError When superseded_by_return_inspection_id is omitted; use hasSupersededByReturnInspectionId() or valueOrDefault().
     */
    public function getSupersededByReturnInspectionId(): string { return $this->get('superseded_by_return_inspection_id'); }
    public function hasSupersededByReturnInspectionId(): bool { return $this->has('superseded_by_return_inspection_id'); }
    /** @return string
     * @throws SdkError When supersedes_return_inspection_id is omitted; use hasSupersedesReturnInspectionId() or valueOrDefault().
     */
    public function getSupersedesReturnInspectionId(): string { return $this->get('supersedes_return_inspection_id'); }
    public function hasSupersedesReturnInspectionId(): bool { return $this->has('supersedes_return_inspection_id'); }
}
