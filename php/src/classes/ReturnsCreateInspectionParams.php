<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $correction_reason
 * @property-read string $correction_reason_message
 * @property-read string $external_actor_id
 * @property-read string $external_reference_id
 * @property-read string|\DateTimeInterface $inspected_at
 * @property-read string $inspection_location_id
 * @property-read list<array{'acceptance_status': string, 'condition': string, 'finding_codes'?: list<string>, 'internal_note'?: string, 'quantity': int, 'return_line_item_id'?: string, 'return_receipt_line_item_id': string, 'verification_reason'?: string, 'verification_reason_message'?: string}|object> $line_items
 * @property-read string $return_receipt_id
 * @property-read ReturnSourceSystemRequestInput|array<array-key, mixed>|\stdClass $source_system
 * @property-read string $supersedes_return_inspection_id
 * Presence-aware input; omitted fields throw when accessed. */
final class ReturnsCreateInspectionParams extends Model {
    /** @param array{'correction_reason'?: string, 'correction_reason_message'?: string, 'external_actor_id'?: string, 'external_reference_id'?: string, 'inspected_at': string|\DateTimeInterface, 'inspection_location_id': string, 'line_items': list<array{'acceptance_status': string, 'condition': string, 'finding_codes'?: list<string>, 'internal_note'?: string, 'quantity': int, 'return_line_item_id'?: string, 'return_receipt_line_item_id': string, 'verification_reason'?: string, 'verification_reason_message'?: string}|object>, 'return_receipt_id': string, 'source_system'?: ReturnSourceSystemRequestInput|array<array-key, mixed>|\stdClass, 'supersedes_return_inspection_id'?: string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnsCreateInspectionParams')); }
    /** Value enum: "entry_error", "duplicate_observation", "source_correction", "reconciliation_correction", "other".
     * @return string
     * @throws SdkError When correction_reason is omitted; use hasCorrectionReason() or valueOrDefault().
     */
    public function getCorrectionReason(): string { return $this->get('correction_reason'); }
    public function hasCorrectionReason(): bool { return $this->has('correction_reason'); }
    /** minLength: 1.
     * @return string
     * @throws SdkError When correction_reason_message is omitted; use hasCorrectionReasonMessage() or valueOrDefault().
     */
    public function getCorrectionReasonMessage(): string { return $this->get('correction_reason_message'); }
    public function hasCorrectionReasonMessage(): bool { return $this->has('correction_reason_message'); }
    /** Your identifier for the actor who recorded the event. Don't put secrets in this field. minLength: 1. maxLength: 255.
     * @return string
     * @throws SdkError When external_actor_id is omitted; use hasExternalActorId() or valueOrDefault().
     */
    public function getExternalActorId(): string { return $this->get('external_actor_id'); }
    public function hasExternalActorId(): bool { return $this->has('external_actor_id'); }
    /** Caller-owned identifier for this resource in an external system. minLength: 1. maxLength: 255.
     * @return string
     * @throws SdkError When external_reference_id is omitted; use hasExternalReferenceId() or valueOrDefault().
     */
    public function getExternalReferenceId(): string { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** When the event occurred, at most 5 minutes in the future. Format: date-time. minLength: 1.
     * @return string|\DateTimeInterface
     * @throws SdkError When inspected_at is omitted; use hasInspectedAt() or valueOrDefault().
     */
    public function getInspectedAt(): string|\DateTimeInterface { return $this->get('inspected_at'); }
    public function hasInspectedAt(): bool { return $this->has('inspected_at'); }
    /** Location where the returned merchandise was inspected. Must match the receipt receiving_location_id. minLength: 1. Example: "loc_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When inspection_location_id is omitted; use hasInspectionLocationId() or valueOrDefault().
     */
    public function getInspectionLocationId(): string { return $this->get('inspection_location_id'); }
    public function hasInspectionLocationId(): bool { return $this->has('inspection_location_id'); }
    /** minItems: 1. [] (Value): {@see ReturnInspectionLineItemRequestInput}. The inspection result for one received return line: acceptance status, condition, and findings.
     * @return list<array{'acceptance_status': string, 'condition': string, 'finding_codes'?: list<string>, 'internal_note'?: string, 'quantity': int, 'return_line_item_id'?: string, 'return_receipt_line_item_id': string, 'verification_reason'?: string, 'verification_reason_message'?: string}|object>
     * @throws SdkError When line_items is omitted; use hasLineItems() or valueOrDefault().
     */
    public function getLineItems(): array { return $this->get('line_items'); }
    public function hasLineItems(): bool { return $this->has('line_items'); }
    /** minLength: 1. Example: "retrc_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When return_receipt_id is omitted; use hasReturnReceiptId() or valueOrDefault().
     */
    public function getReturnReceiptId(): string { return $this->get('return_receipt_id'); }
    public function hasReturnReceiptId(): bool { return $this->has('return_receipt_id'); }
    /** The system a return event came from, such as a point of sale or warehouse system, with its own identifier.
     * @return ReturnSourceSystemRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When source_system is omitted; use hasSourceSystem() or valueOrDefault().
     */
    public function getSourceSystem(): mixed { return $this->get('source_system'); }
    public function hasSourceSystem(): bool { return $this->has('source_system'); }
    /** minLength: 1.
     * @return string
     * @throws SdkError When supersedes_return_inspection_id is omitted; use hasSupersedesReturnInspectionId() or valueOrDefault().
     */
    public function getSupersedesReturnInspectionId(): string { return $this->get('supersedes_return_inspection_id'); }
    public function hasSupersedesReturnInspectionId(): bool { return $this->has('supersedes_return_inspection_id'); }
}
