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
 * @property-read list<ReturnReceiptLineItemInput|array<array-key, mixed>|\stdClass> $line_items
 * @property-read string|\DateTimeInterface $received_at
 * @property-read string $receiving_location_id
 * @property-read string $return_id
 * @property-read string $return_receipt_id
 * @property-read string $shipment_id
 * @property-read array{'external_source_id'?: string, 'source_system_type': string}|object|null $source_system
 * @property-read string $status
 * @property-read string|\DateTimeInterface $superseded_at
 * @property-read string $superseded_by_return_receipt_id
 * @property-read string $supersedes_return_receipt_id
 * @property-read string|\DateTimeInterface $updated_at
 * @property-read int $version
 * Presence-aware input; omitted fields throw when accessed. */
final class ReturnReceiptInput extends Model {
    /** @param array{'correction_reason'?: string, 'correction_reason_message'?: string, 'created_at': string|\DateTimeInterface, 'external_actor_id'?: string, 'external_reference_id'?: string, 'generated_dispositions': list<ReturnDispositionInput|array<array-key, mixed>|\stdClass>, 'line_items': list<ReturnReceiptLineItemInput|array<array-key, mixed>|\stdClass>, 'received_at': string|\DateTimeInterface, 'receiving_location_id': string, 'return_id': string, 'return_receipt_id': string, 'shipment_id'?: string, 'source_system': array{'external_source_id'?: string, 'source_system_type': string}|object|null, 'status': string, 'superseded_at'?: string|\DateTimeInterface, 'superseded_by_return_receipt_id'?: string, 'supersedes_return_receipt_id'?: string, 'updated_at': string|\DateTimeInterface, 'version': int, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnReceiptInput')); }
    /** Value enum: "entry_error", "duplicate_observation", "source_correction", "reconciliation_correction", "other".
     * @return string
     * @throws SdkError When correction_reason is omitted; use hasCorrectionReason() or valueOrDefault().
     */
    public function getCorrectionReason(): string { return $this->get('correction_reason'); }
    public function hasCorrectionReason(): bool { return $this->has('correction_reason'); }
    /** correction_reason_message
     * @return string
     * @throws SdkError When correction_reason_message is omitted; use hasCorrectionReasonMessage() or valueOrDefault().
     */
    public function getCorrectionReasonMessage(): string { return $this->get('correction_reason_message'); }
    public function hasCorrectionReasonMessage(): bool { return $this->has('correction_reason_message'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string|\DateTimeInterface { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Your identifier for the actor who recorded the event. Don't put secrets in this field. maxLength: 255.
     * @return string
     * @throws SdkError When external_actor_id is omitted; use hasExternalActorId() or valueOrDefault().
     */
    public function getExternalActorId(): string { return $this->get('external_actor_id'); }
    public function hasExternalActorId(): bool { return $this->has('external_actor_id'); }
    /** Caller-owned identifier for this resource in an external system. maxLength: 255.
     * @return string
     * @throws SdkError When external_reference_id is omitted; use hasExternalReferenceId() or valueOrDefault().
     */
    public function getExternalReferenceId(): string { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /**  [] (Value): {@see ReturnDispositionInput}. A decision about how returned merchandise will be handled.
     * @return list<ReturnDispositionInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When generated_dispositions is omitted; use hasGeneratedDispositions() or valueOrDefault().
     */
    public function getGeneratedDispositions(): array { return $this->get('generated_dispositions'); }
    public function hasGeneratedDispositions(): bool { return $this->has('generated_dispositions'); }
    /**  [] (Value): {@see ReturnReceiptLineItemInput}. A returned item recorded as received.
     * @return list<ReturnReceiptLineItemInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When line_items is omitted; use hasLineItems() or valueOrDefault().
     */
    public function getLineItems(): array { return $this->get('line_items'); }
    public function hasLineItems(): bool { return $this->has('line_items'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When received_at is omitted; use hasReceivedAt() or valueOrDefault().
     */
    public function getReceivedAt(): string|\DateTimeInterface { return $this->get('received_at'); }
    public function hasReceivedAt(): bool { return $this->has('received_at'); }
    /** receiving_location_id
     * @return string
     * @throws SdkError When receiving_location_id is omitted; use hasReceivingLocationId() or valueOrDefault().
     */
    public function getReceivingLocationId(): string { return $this->get('receiving_location_id'); }
    public function hasReceivingLocationId(): bool { return $this->has('receiving_location_id'); }
    /** return_id
     * @return string
     * @throws SdkError When return_id is omitted; use hasReturnId() or valueOrDefault().
     */
    public function getReturnId(): string { return $this->get('return_id'); }
    public function hasReturnId(): bool { return $this->has('return_id'); }
    /** return_receipt_id
     * @return string
     * @throws SdkError When return_receipt_id is omitted; use hasReturnReceiptId() or valueOrDefault().
     */
    public function getReturnReceiptId(): string { return $this->get('return_receipt_id'); }
    public function hasReturnReceiptId(): bool { return $this->has('return_receipt_id'); }
    /** shipment_id
     * @return string
     * @throws SdkError When shipment_id is omitted; use hasShipmentId() or valueOrDefault().
     */
    public function getShipmentId(): string { return $this->get('shipment_id'); }
    public function hasShipmentId(): bool { return $this->has('shipment_id'); }
    /**  anyOf[1] (Value): {@see ReturnSourceSystemInput}. The system a return event came from, such as a point of sale or warehouse system, with its own identifier. anyOf[2] (Value): null.
     * @return array{'external_source_id'?: string, 'source_system_type': string}|object|null
     * @throws SdkError When source_system is omitted; use hasSourceSystem() or valueOrDefault().
     */
    public function getSourceSystem(): mixed { return $this->get('source_system'); }
    public function hasSourceSystem(): bool { return $this->has('source_system'); }
    /** Value enum: "current", "superseded".
     * @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When superseded_at is omitted; use hasSupersededAt() or valueOrDefault().
     */
    public function getSupersededAt(): string|\DateTimeInterface { return $this->get('superseded_at'); }
    public function hasSupersededAt(): bool { return $this->has('superseded_at'); }
    /** superseded_by_return_receipt_id
     * @return string
     * @throws SdkError When superseded_by_return_receipt_id is omitted; use hasSupersededByReturnReceiptId() or valueOrDefault().
     */
    public function getSupersededByReturnReceiptId(): string { return $this->get('superseded_by_return_receipt_id'); }
    public function hasSupersededByReturnReceiptId(): bool { return $this->has('superseded_by_return_receipt_id'); }
    /** supersedes_return_receipt_id
     * @return string
     * @throws SdkError When supersedes_return_receipt_id is omitted; use hasSupersedesReturnReceiptId() or valueOrDefault().
     */
    public function getSupersedesReturnReceiptId(): string { return $this->get('supersedes_return_receipt_id'); }
    public function hasSupersedesReturnReceiptId(): bool { return $this->has('supersedes_return_receipt_id'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When updated_at is omitted; use hasUpdatedAt() or valueOrDefault().
     */
    public function getUpdatedAt(): string|\DateTimeInterface { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Format: int64. minimum: 1.
     * @return int
     * @throws SdkError When version is omitted; use hasVersion() or valueOrDefault().
     */
    public function getVersion(): int { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
