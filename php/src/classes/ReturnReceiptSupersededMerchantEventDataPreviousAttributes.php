<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $correction_reason
 * @property-read string|null $correction_reason_message
 * @property-read string|null $created_at
 * @property-read string|null $external_actor_id
 * @property-read string|null $external_reference_id
 * @property-read list<ReturnDispositionPreviousAttributes>|null $generated_dispositions
 * @property-read string|null $idempotency_key
 * @property-read list<ReturnReceiptLineItemPreviousAttributes>|null $line_items
 * @property-read string|null $received_at
 * @property-read string|null $receiving_location_id
 * @property-read string|null $return_id
 * @property-read string|null $return_receipt_id
 * @property-read string|null $shipment_id
 * @property-read ReturnSourceSystemPreviousAttributes|null $source_system
 * @property-read string|null $status
 * @property-read string|null $superseded_at
 * @property-read string|null $superseded_by_return_receipt_id
 * @property-read string|null $supersedes_return_receipt_id
 * @property-read string|null $updated_at
 * @property-read int|null $version
 * Presence-aware response; omitted optional fields return null. */
final class ReturnReceiptSupersededMerchantEventDataPreviousAttributes extends Model {
    /** @param array{'correction_reason'?: mixed, 'correction_reason_message'?: mixed, 'created_at'?: mixed, 'external_actor_id'?: mixed, 'external_reference_id'?: mixed, 'generated_dispositions'?: mixed, 'idempotency_key'?: mixed, 'line_items'?: mixed, 'received_at'?: mixed, 'receiving_location_id'?: mixed, 'return_id'?: mixed, 'return_receipt_id'?: mixed, 'shipment_id'?: mixed, 'source_system'?: mixed, 'status'?: mixed, 'superseded_at'?: mixed, 'superseded_by_return_receipt_id'?: mixed, 'supersedes_return_receipt_id'?: mixed, 'updated_at'?: mixed, 'version'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnReceiptSupersededMerchantEventDataPreviousAttributes')); }
    /** Why this observation replaces an earlier one. Send with `supersedes_return_receipt_id` or `supersedes_return_inspection_id`. Value enum: "entry_error", "duplicate_observation", "source_correction", "reconciliation_correction", "other". anyOf[1] (Value): string. Why this observation replaces an earlier one. Send with `supersedes_return_receipt_id` or `supersedes_return_inspection_id`. Value enum: "entry_error", "duplicate_observation", "source_correction", "reconciliation_correction", "other". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCorrectionReason(): string|null { return $this->get('correction_reason'); }
    public function hasCorrectionReason(): bool { return $this->has('correction_reason'); }
    /** Detail about `correction_reason`. anyOf[1] (Value): string. Detail about `correction_reason`. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCorrectionReasonMessage(): string|null { return $this->get('correction_reason_message'); }
    public function hasCorrectionReasonMessage(): bool { return $this->has('correction_reason_message'); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCreatedAt(): string|null { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Your identifier for the actor who recorded the event. Don't put secrets in this field. anyOf[1] (Value): string. Your identifier for the actor who recorded the event. Don't put secrets in this field. maxLength: 255. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getExternalActorId(): string|null { return $this->get('external_actor_id'); }
    public function hasExternalActorId(): bool { return $this->has('external_actor_id'); }
    /** Caller-owned identifier for this resource in an external system. anyOf[1] (Value): string. Caller-owned identifier for this resource in an external system. maxLength: 255. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getExternalReferenceId(): string|null { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** Dispositions Flint created when it recorded this observation. Empty unless the policy's `receipt_disposition_mode` is `automatic`. anyOf[1] (Value): Array of {@see ReturnDispositionPreviousAttributes}. Dispositions Flint created when it recorded this observation. Empty unless the policy's `receipt_disposition_mode` is `automatic`. anyOf[1][] (Value): {@see ReturnDispositionPreviousAttributes}. anyOf[2] (Value): null.
     * @return list<ReturnDispositionPreviousAttributes>|null
     */
    public function getGeneratedDispositions(): array|null { return $this->get('generated_dispositions'); }
    public function hasGeneratedDispositions(): bool { return $this->has('generated_dispositions'); }
    /** The Idempotency-Key of the request that created this resource. `null` when that request sent no key, Flint created the resource, the reader isn't the caller that created it (another app install, a buyer, or the merchant reading an app's or buyer's record), or the caller that created an older record is unknown. Filter its list with `idempotency_key` to find it. Recorded payloads, including replayed responses and webhook events, can return `null`. To find a key that a replay returns as `null`, read the resource. anyOf[1] (Value): string. The Idempotency-Key of the request that created this resource. `null` when that request sent no key, Flint created the resource, the reader isn't the caller that created it (another app install, a buyer, or the merchant reading an app's or buyer's record), or the caller that created an older record is unknown. Filter its list with `idempotency_key` to find it. Recorded payloads, including replayed responses and webhook events, can return `null`. To find a key that a replay returns as `null`, read the resource. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getIdempotencyKey(): string|null { return $this->get('idempotency_key'); }
    public function hasIdempotencyKey(): bool { return $this->has('idempotency_key'); }
    /** The lines recorded. anyOf[1] (Value): Array of {@see ReturnReceiptLineItemPreviousAttributes}. The lines recorded. anyOf[1][] (Value): {@see ReturnReceiptLineItemPreviousAttributes}. anyOf[2] (Value): null.
     * @return list<ReturnReceiptLineItemPreviousAttributes>|null
     */
    public function getLineItems(): array|null { return $this->get('line_items'); }
    public function hasLineItems(): bool { return $this->has('line_items'); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getReceivedAt(): string|null { return $this->get('received_at'); }
    public function hasReceivedAt(): bool { return $this->has('received_at'); }
    /** ID of the Location that received the goods. anyOf[1] (Value): string. ID of the Location that received the goods. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getReceivingLocationId(): string|null { return $this->get('receiving_location_id'); }
    public function hasReceivingLocationId(): bool { return $this->has('receiving_location_id'); }
    /** ID of the Return the goods belong to. anyOf[1] (Value): string. ID of the Return the goods belong to. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getReturnId(): string|null { return $this->get('return_id'); }
    public function hasReturnId(): bool { return $this->has('return_id'); }
    /** Unique identifier for this return receipt, prefixed `retrc_`. anyOf[1] (Value): string. Unique identifier for this return receipt, prefixed `retrc_`. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getReturnReceiptId(): string|null { return $this->get('return_receipt_id'); }
    public function hasReturnReceiptId(): bool { return $this->has('return_receipt_id'); }
    /** ID of the return shipment the goods arrived in. Absent when the receipt isn't tied to a shipment. anyOf[1] (Value): string. ID of the return shipment the goods arrived in. Absent when the receipt isn't tied to a shipment. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getShipmentId(): string|null { return $this->get('shipment_id'); }
    public function hasShipmentId(): bool { return $this->has('shipment_id'); }
    /** System that recorded the observation. `null` when no source system was recorded. anyOf[1] (Value): {@see ReturnSourceSystemPreviousAttributes}. anyOf[2] (Value): null.
     * @return ReturnSourceSystemPreviousAttributes|null
     */
    public function getSourceSystem(): ReturnSourceSystemPreviousAttributes|null { return $this->get('source_system'); }
    public function hasSourceSystem(): bool { return $this->has('source_system'); }
    /** Whether this is the current observation of these units or a correction replaced it. Value enum: "current", "superseded". anyOf[1] (Value): string. Whether this is the current observation of these units or a correction replaced it. Value enum: "current", "superseded". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getStatus(): string|null { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getSupersededAt(): string|null { return $this->get('superseded_at'); }
    public function hasSupersededAt(): bool { return $this->has('superseded_at'); }
    /** ID of the receipt that corrected this one. Absent while it is current. anyOf[1] (Value): string. ID of the receipt that corrected this one. Absent while it is current. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getSupersededByReturnReceiptId(): string|null { return $this->get('superseded_by_return_receipt_id'); }
    public function hasSupersededByReturnReceiptId(): bool { return $this->has('superseded_by_return_receipt_id'); }
    /** ID of the receipt this one corrects. anyOf[1] (Value): string. ID of the receipt this one corrects. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getSupersedesReturnReceiptId(): string|null { return $this->get('supersedes_return_receipt_id'); }
    public function hasSupersedesReturnReceiptId(): bool { return $this->has('supersedes_return_receipt_id'); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getUpdatedAt(): string|null { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. anyOf[1] (Value): integer. Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. Format: int64. minimum: 1. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getVersion(): int|null { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
