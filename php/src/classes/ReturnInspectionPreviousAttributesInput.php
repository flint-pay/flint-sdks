<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $correction_reason
 * @property-read string|null $correction_reason_message
 * @property-read string|\DateTimeInterface|null $created_at
 * @property-read string|null $external_actor_id
 * @property-read string|null $external_reference_id
 * @property-read list<ReturnDispositionPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null $generated_dispositions
 * @property-read string|\DateTimeInterface|null $inspected_at
 * @property-read string|null $inspection_location_id
 * @property-read list<ReturnInspectionLineItemPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null $line_items
 * @property-read string|null $return_id
 * @property-read string|null $return_inspection_id
 * @property-read string|null $return_receipt_id
 * @property-read ReturnSourceSystemPreviousAttributesInput|array<array-key, mixed>|\stdClass|null $source_system
 * @property-read string|null $status
 * @property-read string|\DateTimeInterface|null $superseded_at
 * @property-read string|null $superseded_by_return_inspection_id
 * @property-read string|null $supersedes_return_inspection_id
 * @property-read string|\DateTimeInterface|null $updated_at
 * @property-read int|null $version
 * Presence-aware input; omitted fields throw when accessed. */
final class ReturnInspectionPreviousAttributesInput extends Model {
    /** @param array{'correction_reason'?: string|null, 'correction_reason_message'?: string|null, 'created_at'?: string|\DateTimeInterface|null, 'external_actor_id'?: string|null, 'external_reference_id'?: string|null, 'generated_dispositions'?: list<ReturnDispositionPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null, 'inspected_at'?: string|\DateTimeInterface|null, 'inspection_location_id'?: string|null, 'line_items'?: list<ReturnInspectionLineItemPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null, 'return_id'?: string|null, 'return_inspection_id'?: string|null, 'return_receipt_id'?: string|null, 'source_system'?: ReturnSourceSystemPreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'status'?: string|null, 'superseded_at'?: string|\DateTimeInterface|null, 'superseded_by_return_inspection_id'?: string|null, 'supersedes_return_inspection_id'?: string|null, 'updated_at'?: string|\DateTimeInterface|null, 'version'?: int|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnInspectionPreviousAttributesInput')); }
    /** Why this observation replaces an earlier one. Send with `supersedes_return_receipt_id` or `supersedes_return_inspection_id`. Value enum: "entry_error", "duplicate_observation", "source_correction", "reconciliation_correction", "other". anyOf[1] (Value): string. Why this observation replaces an earlier one. Send with `supersedes_return_receipt_id` or `supersedes_return_inspection_id`. Value enum: "entry_error", "duplicate_observation", "source_correction", "reconciliation_correction", "other". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When correction_reason is omitted; use hasCorrectionReason() or valueOrDefault().
     */
    public function getCorrectionReason(): mixed { return $this->get('correction_reason'); }
    public function hasCorrectionReason(): bool { return $this->has('correction_reason'); }
    /** Detail about `correction_reason`. anyOf[1] (Value): string. Detail about `correction_reason`. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When correction_reason_message is omitted; use hasCorrectionReasonMessage() or valueOrDefault().
     */
    public function getCorrectionReasonMessage(): mixed { return $this->get('correction_reason_message'); }
    public function hasCorrectionReasonMessage(): bool { return $this->has('correction_reason_message'); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): mixed { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Your identifier for the actor who recorded the event. Don't put secrets in this field. anyOf[1] (Value): string. Your identifier for the actor who recorded the event. Don't put secrets in this field. maxLength: 255. Example: "warehouse-1842". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When external_actor_id is omitted; use hasExternalActorId() or valueOrDefault().
     */
    public function getExternalActorId(): mixed { return $this->get('external_actor_id'); }
    public function hasExternalActorId(): bool { return $this->has('external_actor_id'); }
    /** Caller-owned identifier for this resource in an external system. anyOf[1] (Value): string. Caller-owned identifier for this resource in an external system. maxLength: 255. Example: "warehouse-1842". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When external_reference_id is omitted; use hasExternalReferenceId() or valueOrDefault().
     */
    public function getExternalReferenceId(): mixed { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** Dispositions Flint created when it recorded this observation. Empty unless the policy's `receipt_disposition_mode` is `automatic`. anyOf[1] (Value): Array of {@see ReturnDispositionPreviousAttributesInput}. Dispositions Flint created when it recorded this observation. Empty unless the policy's `receipt_disposition_mode` is `automatic`. anyOf[1][] (Value): {@see ReturnDispositionPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return list<ReturnDispositionPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null
     * @throws SdkError When generated_dispositions is omitted; use hasGeneratedDispositions() or valueOrDefault().
     */
    public function getGeneratedDispositions(): mixed { return $this->get('generated_dispositions'); }
    public function hasGeneratedDispositions(): bool { return $this->has('generated_dispositions'); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When inspected_at is omitted; use hasInspectedAt() or valueOrDefault().
     */
    public function getInspectedAt(): mixed { return $this->get('inspected_at'); }
    public function hasInspectedAt(): bool { return $this->has('inspected_at'); }
    /** Location where the returned merchandise was inspected. Must match the receipt receiving_location_id. anyOf[1] (Value): string. Location where the returned merchandise was inspected. Must match the receipt receiving_location_id. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When inspection_location_id is omitted; use hasInspectionLocationId() or valueOrDefault().
     */
    public function getInspectionLocationId(): mixed { return $this->get('inspection_location_id'); }
    public function hasInspectionLocationId(): bool { return $this->has('inspection_location_id'); }
    /** The lines recorded. anyOf[1] (Value): Array of {@see ReturnInspectionLineItemPreviousAttributesInput}. The lines recorded. anyOf[1][] (Value): {@see ReturnInspectionLineItemPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return list<ReturnInspectionLineItemPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null
     * @throws SdkError When line_items is omitted; use hasLineItems() or valueOrDefault().
     */
    public function getLineItems(): mixed { return $this->get('line_items'); }
    public function hasLineItems(): bool { return $this->has('line_items'); }
    /** ID of the Return the goods belong to. anyOf[1] (Value): string. ID of the Return the goods belong to. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When return_id is omitted; use hasReturnId() or valueOrDefault().
     */
    public function getReturnId(): mixed { return $this->get('return_id'); }
    public function hasReturnId(): bool { return $this->has('return_id'); }
    /** Unique identifier for this return inspection, prefixed `retins_`. anyOf[1] (Value): string. Unique identifier for this return inspection, prefixed `retins_`. Example: "retins_01KEZF7C00WPB0BR4WTT7CMSB8". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When return_inspection_id is omitted; use hasReturnInspectionId() or valueOrDefault().
     */
    public function getReturnInspectionId(): mixed { return $this->get('return_inspection_id'); }
    public function hasReturnInspectionId(): bool { return $this->has('return_inspection_id'); }
    /** ID of the receipt being inspected. anyOf[1] (Value): string. ID of the receipt being inspected. Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When return_receipt_id is omitted; use hasReturnReceiptId() or valueOrDefault().
     */
    public function getReturnReceiptId(): mixed { return $this->get('return_receipt_id'); }
    public function hasReturnReceiptId(): bool { return $this->has('return_receipt_id'); }
    /** System that recorded the observation. `null` when no source system was recorded. anyOf[1] (Value): {@see ReturnSourceSystemPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return ReturnSourceSystemPreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When source_system is omitted; use hasSourceSystem() or valueOrDefault().
     */
    public function getSourceSystem(): mixed { return $this->get('source_system'); }
    public function hasSourceSystem(): bool { return $this->has('source_system'); }
    /** Whether this is the current observation of these units or a correction replaced it. Value enum: "current", "superseded". anyOf[1] (Value): string. Whether this is the current observation of these units or a correction replaced it. Value enum: "current", "superseded". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): mixed { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When superseded_at is omitted; use hasSupersededAt() or valueOrDefault().
     */
    public function getSupersededAt(): mixed { return $this->get('superseded_at'); }
    public function hasSupersededAt(): bool { return $this->has('superseded_at'); }
    /** ID of the inspection that corrected this one. Absent while it is current. anyOf[1] (Value): string. ID of the inspection that corrected this one. Absent while it is current. Example: "retins_01KEZF7C00WPB0BR4WTT7CMSB8". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When superseded_by_return_inspection_id is omitted; use hasSupersededByReturnInspectionId() or valueOrDefault().
     */
    public function getSupersededByReturnInspectionId(): mixed { return $this->get('superseded_by_return_inspection_id'); }
    public function hasSupersededByReturnInspectionId(): bool { return $this->has('superseded_by_return_inspection_id'); }
    /** ID of the inspection this one corrects. anyOf[1] (Value): string. ID of the inspection this one corrects. Example: "retins_01KEZF7C00WPB0BR4WTT7CMSB8". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When supersedes_return_inspection_id is omitted; use hasSupersedesReturnInspectionId() or valueOrDefault().
     */
    public function getSupersedesReturnInspectionId(): mixed { return $this->get('supersedes_return_inspection_id'); }
    public function hasSupersedesReturnInspectionId(): bool { return $this->has('supersedes_return_inspection_id'); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When updated_at is omitted; use hasUpdatedAt() or valueOrDefault().
     */
    public function getUpdatedAt(): mixed { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. anyOf[1] (Value): integer. Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. Format: int64. minimum: 1. anyOf[2] (Value): null.
     * @return int|null
     * @throws SdkError When version is omitted; use hasVersion() or valueOrDefault().
     */
    public function getVersion(): mixed { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
