<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?string $canceled_at
 * @property-read ?ReturnActor $canceled_by
 * @property-read ?string $cancellation_reason
 * @property-read ?string $cancellation_reason_message
 * @property-read string $created_at
 * @property-read ReturnActor $created_by
 * @property-read string $disposition_type
 * @property-read ?string $external_reference_id
 * @property-read ?string $failure_code
 * @property-read ?string $failure_message
 * @property-read ?string $inventory_location_id
 * @property-read list<string> $inventory_movement_ids
 * @property-read ?string $inventory_receipt_id
 * @property-read array<array-key, string> $metadata
 * @property-read string $occurred_at
 * @property-read int $quantity
 * @property-read string $reason
 * @property-read ?string $reason_message
 * @property-read ?string $replaced_by_return_disposition_id
 * @property-read ?string $replaces_return_disposition_id
 * @property-read string $return_disposition_id
 * @property-read string $return_id
 * @property-read string|null $return_inspection_id
 * @property-read ?string $return_inspection_line_item_id
 * @property-read ?string $return_line_item_id
 * @property-read string|null $return_receipt_id
 * @property-read ?string $return_receipt_line_item_id
 * @property-read string $status
 * @property-read list<string> $supported_actions
 * @property-read string $updated_at
 * @property-read int $version
 * Presence-aware response; omitted optional fields return null. */
final class ReturnDispositionCreatedMerchantEventDataObject extends Model {
    /** @param array{'canceled_at'?: string, 'canceled_by'?: mixed, 'cancellation_reason'?: string, 'cancellation_reason_message'?: string, 'created_at': string, 'created_by': mixed, 'disposition_type': string, 'external_reference_id'?: string, 'failure_code'?: string, 'failure_message'?: string, 'inventory_location_id'?: string, 'inventory_movement_ids': list<string>, 'inventory_receipt_id'?: string, 'metadata': mixed, 'occurred_at': string, 'quantity': int, 'reason': string, 'reason_message'?: string, 'replaced_by_return_disposition_id'?: string, 'replaces_return_disposition_id'?: string, 'return_disposition_id': string, 'return_id': string, 'return_inspection_id': string|null, 'return_inspection_line_item_id'?: string, 'return_line_item_id'?: string, 'return_receipt_id': string|null, 'return_receipt_line_item_id'?: string, 'status': string, 'supported_actions': list<string>, 'updated_at': string, 'version': int, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnDispositionCreatedMerchantEventDataObject')); }
    /** RFC3339 timestamp. Format: date-time.
     * @return ?string
     */
    public function getCanceledAt(): ?string { return $this->get('canceled_at'); }
    public function hasCanceledAt(): bool { return $this->has('canceled_at'); }
    /** Who canceled the disposition. Merchant reads only. Who performed a return action: a buyer, merchant, integration, or the system, with an optional ID.
     * @return ?ReturnActor
     */
    public function getCanceledBy(): ?ReturnActor { return $this->get('canceled_by'); }
    public function hasCanceledBy(): bool { return $this->has('canceled_by'); }
    /** Why the disposition was canceled. Value enum: "created_in_error", "changed_disposition", "duplicate", "other".
     * @return ?string
     */
    public function getCancellationReason(): ?string { return $this->get('cancellation_reason'); }
    public function hasCancellationReason(): bool { return $this->has('cancellation_reason'); }
    /** Detail sent with the cancellation. Merchant reads only.
     * @return ?string
     */
    public function getCancellationReasonMessage(): ?string { return $this->get('cancellation_reason_message'); }
    public function hasCancellationReasonMessage(): bool { return $this->has('cancellation_reason_message'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string
     */
    public function getCreatedAt(): string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Who created the disposition. Who performed a return action: a buyer, merchant, integration, or the system, with an optional ID.
     * @return ReturnActor
     */
    public function getCreatedBy(): ReturnActor { return $this->get('created_by'); }
    public function hasCreatedBy(): bool { return $this->has('created_by'); }
    /** What happens to the received units. Value enum: "sellable", "quality_control", "damaged", "quarantined", "repair", "refurbish", "liquidate", "donate", "discard", "return_to_buyer", "lost".
     * @return string
     */
    public function getDispositionType(): string { return $this->get('disposition_type'); }
    public function hasDispositionType(): bool { return $this->has('disposition_type'); }
    /** Caller-owned identifier for this resource in an external system. maxLength: 255.
     * @return ?string
     */
    public function getExternalReferenceId(): ?string { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** Reason code for a failed merchandise disposition, when available. Value enum: "inventory_effect_failed", "inventory_item_unmapped".
     * @return ?string
     */
    public function getFailureCode(): ?string { return $this->get('failure_code'); }
    public function hasFailureCode(): bool { return $this->has('failure_code'); }
    /** Explanation of a failed merchandise disposition, when available.
     * @return ?string
     */
    public function getFailureMessage(): ?string { return $this->get('failure_message'); }
    public function hasFailureMessage(): bool { return $this->has('failure_message'); }
    /** ID of the Location whose stock the disposition changes. Required for `sellable`, `quality_control`, `damaged`, `quarantined`, and `lost`; rejected for the other types.
     * @return ?string
     */
    public function getInventoryLocationId(): ?string { return $this->get('inventory_location_id'); }
    public function hasInventoryLocationId(): bool { return $this->has('inventory_location_id'); }
    /** IDs of the inventory movements the disposition wrote. Empty when it moved no stock. [] (Value): string.
     * @return list<string>
     */
    public function getInventoryMovementIds(): array { return $this->get('inventory_movement_ids'); }
    public function hasInventoryMovementIds(): bool { return $this->has('inventory_movement_ids'); }
    /** ID of the inventory receipt the disposition recorded. Absent when it recorded none.
     * @return ?string
     */
    public function getInventoryReceiptId(): ?string { return $this->get('inventory_receipt_id'); }
    public function hasInventoryReceiptId(): bool { return $this->has('inventory_receipt_id'); }
    /** Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them.
     * @return array<array-key, string>
     */
    public function getMetadata(): array { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string
     */
    public function getOccurredAt(): string { return $this->get('occurred_at'); }
    public function hasOccurredAt(): bool { return $this->has('occurred_at'); }
    /** Whole-number quantity; fractional quantities are not supported. Format: int64.
     * @return int
     */
    public function getQuantity(): int { return $this->get('quantity'); }
    public function hasQuantity(): bool { return $this->has('quantity'); }
    /** Why the disposition was made. Value enum: "inspection_result", "return_policy", "warehouse_override", "safety_requirement", "other".
     * @return string
     */
    public function getReason(): string { return $this->get('reason'); }
    public function hasReason(): bool { return $this->has('reason'); }
    /** Optional detail about `reason`, kept with the record.
     * @return ?string
     */
    public function getReasonMessage(): ?string { return $this->get('reason_message'); }
    public function hasReasonMessage(): bool { return $this->has('reason_message'); }
    /** ID of the disposition that took over this one. Present when a replacement canceled it.
     * @return ?string
     */
    public function getReplacedByReturnDispositionId(): ?string { return $this->get('replaced_by_return_disposition_id'); }
    public function hasReplacedByReturnDispositionId(): bool { return $this->has('replaced_by_return_disposition_id'); }
    /** ID of the `failed` or `canceled` disposition this one replaces. It takes over that disposition's unused capacity.
     * @return ?string
     */
    public function getReplacesReturnDispositionId(): ?string { return $this->get('replaces_return_disposition_id'); }
    public function hasReplacesReturnDispositionId(): bool { return $this->has('replaces_return_disposition_id'); }
    /** Unique identifier for this return disposition, prefixed `retdsp_`.
     * @return string
     */
    public function getReturnDispositionId(): string { return $this->get('return_disposition_id'); }
    public function hasReturnDispositionId(): bool { return $this->has('return_disposition_id'); }
    /** return_id
     * @return string
     */
    public function getReturnId(): string { return $this->get('return_id'); }
    public function hasReturnId(): bool { return $this->has('return_id'); }
    /** Inspection that owns return_inspection_line_item_id. `null` when return_inspection_line_item_id is null.
     * @return string|null
     */
    public function getReturnInspectionId(): string|null { return $this->get('return_inspection_id'); }
    public function hasReturnInspectionId(): bool { return $this->has('return_inspection_id'); }
    /** ID of the inspection line the disposition covers. Absent when it covers a receipt line.
     * @return ?string
     */
    public function getReturnInspectionLineItemId(): ?string { return $this->get('return_inspection_line_item_id'); }
    public function hasReturnInspectionLineItemId(): bool { return $this->has('return_inspection_line_item_id'); }
    /** ID of the Return line the units belong to.
     * @return ?string
     */
    public function getReturnLineItemId(): ?string { return $this->get('return_line_item_id'); }
    public function hasReturnLineItemId(): bool { return $this->has('return_line_item_id'); }
    /** Receipt that owns return_receipt_line_item_id. `null` when return_receipt_line_item_id is null.
     * @return string|null
     */
    public function getReturnReceiptId(): string|null { return $this->get('return_receipt_id'); }
    public function hasReturnReceiptId(): bool { return $this->has('return_receipt_id'); }
    /** ID of the receipt line the disposition covers. Absent when it covers an inspection line.
     * @return ?string
     */
    public function getReturnReceiptLineItemId(): ?string { return $this->get('return_receipt_line_item_id'); }
    public function hasReturnReceiptLineItemId(): bool { return $this->has('return_receipt_line_item_id'); }
    /** Whether inventory has applied the disposition. Value enum: "pending", "succeeded", "failed", "canceled".
     * @return string
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Actions that can succeed now. Empty unless the parent Return is open. cancel is listed only before the inventory effect starts. [] enum: "cancel", "retry". [] (Value): string.  Value enum: "cancel", "retry".
     * @return list<string>
     */
    public function getSupportedActions(): array { return $this->get('supported_actions'); }
    public function hasSupportedActions(): bool { return $this->has('supported_actions'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string
     */
    public function getUpdatedAt(): string { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. Format: int64. minimum: 0.
     * @return int
     */
    public function getVersion(): int { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
