<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?string $correction_reason
 * @property-read ?string $correction_reason_message
 * @property-read string $created_at
 * @property-read ?string $external_actor_id
 * @property-read ?string $external_reference_id
 * @property-read list<ReturnDisposition> $generated_dispositions
 * @property-read list<ReturnReceiptLineItem> $line_items
 * @property-read string $received_at
 * @property-read string $receiving_location_id
 * @property-read string $return_id
 * @property-read string $return_receipt_id
 * @property-read ?string $shipment_id
 * @property-read ReturnSourceSystem|null $source_system
 * @property-read string $status
 * @property-read ?string $superseded_at
 * @property-read ?string $superseded_by_return_receipt_id
 * @property-read ?string $supersedes_return_receipt_id
 * @property-read string $updated_at
 * @property-read int $version
 * Presence-aware response; omitted optional fields return null. */
final class ReturnReceipt extends Model {
    /** @param array{'correction_reason'?: string, 'correction_reason_message'?: string, 'created_at': string, 'external_actor_id'?: string, 'external_reference_id'?: string, 'generated_dispositions': list<mixed>, 'line_items': list<mixed>, 'received_at': string, 'receiving_location_id': string, 'return_id': string, 'return_receipt_id': string, 'shipment_id'?: string, 'source_system': mixed, 'status': string, 'superseded_at'?: string, 'superseded_by_return_receipt_id'?: string, 'supersedes_return_receipt_id'?: string, 'updated_at': string, 'version': int, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnReceipt')); }
    /** Value enum: "entry_error", "duplicate_observation", "source_correction", "reconciliation_correction", "other".
     * @return ?string
     */
    public function getCorrectionReason(): ?string { return $this->get('correction_reason'); }
    public function hasCorrectionReason(): bool { return $this->has('correction_reason'); }
    /** correction_reason_message
     * @return ?string
     */
    public function getCorrectionReasonMessage(): ?string { return $this->get('correction_reason_message'); }
    public function hasCorrectionReasonMessage(): bool { return $this->has('correction_reason_message'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string
     */
    public function getCreatedAt(): string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Your identifier for the actor who recorded the event. Don't put secrets in this field. maxLength: 255.
     * @return ?string
     */
    public function getExternalActorId(): ?string { return $this->get('external_actor_id'); }
    public function hasExternalActorId(): bool { return $this->has('external_actor_id'); }
    /** Caller-owned identifier for this resource in an external system. maxLength: 255.
     * @return ?string
     */
    public function getExternalReferenceId(): ?string { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /**  [] (Value): {@see ReturnDisposition}. A decision about how returned merchandise will be handled.
     * @return list<ReturnDisposition>
     */
    public function getGeneratedDispositions(): array { return $this->get('generated_dispositions'); }
    public function hasGeneratedDispositions(): bool { return $this->has('generated_dispositions'); }
    /**  [] (Value): {@see ReturnReceiptLineItem}. A returned item recorded as received.
     * @return list<ReturnReceiptLineItem>
     */
    public function getLineItems(): array { return $this->get('line_items'); }
    public function hasLineItems(): bool { return $this->has('line_items'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string
     */
    public function getReceivedAt(): string { return $this->get('received_at'); }
    public function hasReceivedAt(): bool { return $this->has('received_at'); }
    /** receiving_location_id
     * @return string
     */
    public function getReceivingLocationId(): string { return $this->get('receiving_location_id'); }
    public function hasReceivingLocationId(): bool { return $this->has('receiving_location_id'); }
    /** return_id
     * @return string
     */
    public function getReturnId(): string { return $this->get('return_id'); }
    public function hasReturnId(): bool { return $this->has('return_id'); }
    /** return_receipt_id
     * @return string
     */
    public function getReturnReceiptId(): string { return $this->get('return_receipt_id'); }
    public function hasReturnReceiptId(): bool { return $this->has('return_receipt_id'); }
    /** shipment_id
     * @return ?string
     */
    public function getShipmentId(): ?string { return $this->get('shipment_id'); }
    public function hasShipmentId(): bool { return $this->has('shipment_id'); }
    /**  anyOf[1] (Value): {@see ReturnSourceSystem}. The system a return event came from, such as a point of sale or warehouse system, with its own identifier. anyOf[2] (Value): null.
     * @return ReturnSourceSystem|null
     */
    public function getSourceSystem(): ReturnSourceSystem|null { return $this->get('source_system'); }
    public function hasSourceSystem(): bool { return $this->has('source_system'); }
    /** Value enum: "current", "superseded".
     * @return string
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return ?string
     */
    public function getSupersededAt(): ?string { return $this->get('superseded_at'); }
    public function hasSupersededAt(): bool { return $this->has('superseded_at'); }
    /** superseded_by_return_receipt_id
     * @return ?string
     */
    public function getSupersededByReturnReceiptId(): ?string { return $this->get('superseded_by_return_receipt_id'); }
    public function hasSupersededByReturnReceiptId(): bool { return $this->has('superseded_by_return_receipt_id'); }
    /** supersedes_return_receipt_id
     * @return ?string
     */
    public function getSupersedesReturnReceiptId(): ?string { return $this->get('supersedes_return_receipt_id'); }
    public function hasSupersedesReturnReceiptId(): bool { return $this->has('supersedes_return_receipt_id'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string
     */
    public function getUpdatedAt(): string { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Format: int64. minimum: 1.
     * @return int
     */
    public function getVersion(): int { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
