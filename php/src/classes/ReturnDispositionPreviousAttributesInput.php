<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|\DateTimeInterface|null $canceled_at
 * @property-read ReturnActorPreviousAttributesInput|array<array-key, mixed>|\stdClass|null $canceled_by
 * @property-read string|null $cancellation_reason
 * @property-read string|null $cancellation_reason_message
 * @property-read string|\DateTimeInterface|null $created_at
 * @property-read ReturnActorPreviousAttributesInput|array<array-key, mixed>|\stdClass|null $created_by
 * @property-read string|null $disposition_type
 * @property-read string|null $external_reference_id
 * @property-read string|null $failure_code
 * @property-read string|null $failure_message
 * @property-read string|null $inventory_location_id
 * @property-read list<string>|null $inventory_movement_ids
 * @property-read string|null $inventory_receipt_id
 * @property-read MetadataMapPreviousAttributesInput|array<array-key, mixed>|\stdClass|null $metadata
 * @property-read string|\DateTimeInterface|null $occurred_at
 * @property-read int|null $quantity
 * @property-read string|null $reason
 * @property-read string|null $reason_message
 * @property-read string|null $replaced_by_return_disposition_id
 * @property-read string|null $replaces_return_disposition_id
 * @property-read string|null $return_disposition_id
 * @property-read string|null $return_id
 * @property-read string|null $return_inspection_id
 * @property-read string|null $return_inspection_line_item_id
 * @property-read string|null $return_line_item_id
 * @property-read string|null $return_receipt_id
 * @property-read string|null $return_receipt_line_item_id
 * @property-read string|null $status
 * @property-read list<string>|null $supported_actions
 * @property-read string|\DateTimeInterface|null $updated_at
 * @property-read int|null $version
 * Presence-aware input; omitted fields throw when accessed. */
final class ReturnDispositionPreviousAttributesInput extends Model {
    /** @param array{'canceled_at'?: string|\DateTimeInterface|null, 'canceled_by'?: ReturnActorPreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'cancellation_reason'?: string|null, 'cancellation_reason_message'?: string|null, 'created_at'?: string|\DateTimeInterface|null, 'created_by'?: ReturnActorPreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'disposition_type'?: string|null, 'external_reference_id'?: string|null, 'failure_code'?: string|null, 'failure_message'?: string|null, 'inventory_location_id'?: string|null, 'inventory_movement_ids'?: list<string>|null, 'inventory_receipt_id'?: string|null, 'metadata'?: MetadataMapPreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'occurred_at'?: string|\DateTimeInterface|null, 'quantity'?: int|null, 'reason'?: string|null, 'reason_message'?: string|null, 'replaced_by_return_disposition_id'?: string|null, 'replaces_return_disposition_id'?: string|null, 'return_disposition_id'?: string|null, 'return_id'?: string|null, 'return_inspection_id'?: string|null, 'return_inspection_line_item_id'?: string|null, 'return_line_item_id'?: string|null, 'return_receipt_id'?: string|null, 'return_receipt_line_item_id'?: string|null, 'status'?: string|null, 'supported_actions'?: list<string>|null, 'updated_at'?: string|\DateTimeInterface|null, 'version'?: int|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnDispositionPreviousAttributesInput')); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When canceled_at is omitted; use hasCanceledAt() or valueOrDefault().
     */
    public function getCanceledAt(): mixed { return $this->get('canceled_at'); }
    public function hasCanceledAt(): bool { return $this->has('canceled_at'); }
    /** Who canceled the disposition. Merchant reads only. anyOf[1] (Value): {@see ReturnActorPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return ReturnActorPreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When canceled_by is omitted; use hasCanceledBy() or valueOrDefault().
     */
    public function getCanceledBy(): mixed { return $this->get('canceled_by'); }
    public function hasCanceledBy(): bool { return $this->has('canceled_by'); }
    /** Why the disposition was canceled. Value enum: "created_in_error", "changed_disposition", "duplicate", "other". anyOf[1] (Value): string. Why the disposition was canceled. Value enum: "created_in_error", "changed_disposition", "duplicate", "other". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When cancellation_reason is omitted; use hasCancellationReason() or valueOrDefault().
     */
    public function getCancellationReason(): mixed { return $this->get('cancellation_reason'); }
    public function hasCancellationReason(): bool { return $this->has('cancellation_reason'); }
    /** Detail sent with the cancellation. Merchant reads only. anyOf[1] (Value): string. Detail sent with the cancellation. Merchant reads only. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When cancellation_reason_message is omitted; use hasCancellationReasonMessage() or valueOrDefault().
     */
    public function getCancellationReasonMessage(): mixed { return $this->get('cancellation_reason_message'); }
    public function hasCancellationReasonMessage(): bool { return $this->has('cancellation_reason_message'); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): mixed { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Who created the disposition. anyOf[1] (Value): {@see ReturnActorPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return ReturnActorPreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When created_by is omitted; use hasCreatedBy() or valueOrDefault().
     */
    public function getCreatedBy(): mixed { return $this->get('created_by'); }
    public function hasCreatedBy(): bool { return $this->has('created_by'); }
    /** What happens to the received units. Value enum: "sellable", "quality_control", "damaged", "quarantined", "repair", "refurbish", "liquidate", "donate", "discard", "return_to_buyer", "lost". anyOf[1] (Value): string. What happens to the received units. Value enum: "sellable", "quality_control", "damaged", "quarantined", "repair", "refurbish", "liquidate", "donate", "discard", "return_to_buyer", "lost". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When disposition_type is omitted; use hasDispositionType() or valueOrDefault().
     */
    public function getDispositionType(): mixed { return $this->get('disposition_type'); }
    public function hasDispositionType(): bool { return $this->has('disposition_type'); }
    /** Caller-owned identifier for this resource in an external system. anyOf[1] (Value): string. Caller-owned identifier for this resource in an external system. maxLength: 255. Example: "warehouse-1842". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When external_reference_id is omitted; use hasExternalReferenceId() or valueOrDefault().
     */
    public function getExternalReferenceId(): mixed { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** Reason code for a failed merchandise disposition, when available. Value enum: "inventory_effect_failed", "inventory_item_unmapped". anyOf[1] (Value): string. Reason code for a failed merchandise disposition, when available. Value enum: "inventory_effect_failed", "inventory_item_unmapped". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When failure_code is omitted; use hasFailureCode() or valueOrDefault().
     */
    public function getFailureCode(): mixed { return $this->get('failure_code'); }
    public function hasFailureCode(): bool { return $this->has('failure_code'); }
    /** Explanation of a failed merchandise disposition, when available. anyOf[1] (Value): string. Explanation of a failed merchandise disposition, when available. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When failure_message is omitted; use hasFailureMessage() or valueOrDefault().
     */
    public function getFailureMessage(): mixed { return $this->get('failure_message'); }
    public function hasFailureMessage(): bool { return $this->has('failure_message'); }
    /** ID of the Location whose stock the disposition changes. Required for `sellable`, `quality_control`, `damaged`, `quarantined`, and `lost`; rejected for the other types. anyOf[1] (Value): string. ID of the Location whose stock the disposition changes. Required for `sellable`, `quality_control`, `damaged`, `quarantined`, and `lost`; rejected for the other types. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When inventory_location_id is omitted; use hasInventoryLocationId() or valueOrDefault().
     */
    public function getInventoryLocationId(): mixed { return $this->get('inventory_location_id'); }
    public function hasInventoryLocationId(): bool { return $this->has('inventory_location_id'); }
    /** IDs of the inventory movements the disposition wrote. Empty when it moved no stock. anyOf[1] (Value): Array of string. IDs of the inventory movements the disposition wrote. Empty when it moved no stock. anyOf[1][] (Value): string. Example: "invm_01KEZF7C00DYPFT9PS0NZY805Z". anyOf[2] (Value): null.
     * @return list<string>|null
     * @throws SdkError When inventory_movement_ids is omitted; use hasInventoryMovementIds() or valueOrDefault().
     */
    public function getInventoryMovementIds(): mixed { return $this->get('inventory_movement_ids'); }
    public function hasInventoryMovementIds(): bool { return $this->has('inventory_movement_ids'); }
    /** ID of the inventory receipt the disposition recorded. Absent when it recorded none. anyOf[1] (Value): string. ID of the inventory receipt the disposition recorded. Absent when it recorded none. Example: "invrec_01KEZF7C00JXXCYA06SH8RCM2N". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When inventory_receipt_id is omitted; use hasInventoryReceiptId() or valueOrDefault().
     */
    public function getInventoryReceiptId(): mixed { return $this->get('inventory_receipt_id'); }
    public function hasInventoryReceiptId(): bool { return $this->has('inventory_receipt_id'); }
    /** Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules. anyOf[1] (Value): {@see MetadataMapPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MetadataMapPreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When metadata is omitted; use hasMetadata() or valueOrDefault().
     */
    public function getMetadata(): mixed { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When occurred_at is omitted; use hasOccurredAt() or valueOrDefault().
     */
    public function getOccurredAt(): mixed { return $this->get('occurred_at'); }
    public function hasOccurredAt(): bool { return $this->has('occurred_at'); }
    /** Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer. Whole-number quantity; fractional quantities are not supported. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     * @throws SdkError When quantity is omitted; use hasQuantity() or valueOrDefault().
     */
    public function getQuantity(): mixed { return $this->get('quantity'); }
    public function hasQuantity(): bool { return $this->has('quantity'); }
    /** Why the disposition was made. Value enum: "inspection_result", "return_policy", "warehouse_override", "safety_requirement", "other". anyOf[1] (Value): string. Why the disposition was made. Value enum: "inspection_result", "return_policy", "warehouse_override", "safety_requirement", "other". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When reason is omitted; use hasReason() or valueOrDefault().
     */
    public function getReason(): mixed { return $this->get('reason'); }
    public function hasReason(): bool { return $this->has('reason'); }
    /** Optional detail about `reason`, kept with the record. anyOf[1] (Value): string. Optional detail about `reason`, kept with the record. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When reason_message is omitted; use hasReasonMessage() or valueOrDefault().
     */
    public function getReasonMessage(): mixed { return $this->get('reason_message'); }
    public function hasReasonMessage(): bool { return $this->has('reason_message'); }
    /** ID of the disposition that took over this one. Present when a replacement canceled it. anyOf[1] (Value): string. ID of the disposition that took over this one. Present when a replacement canceled it. Example: "retdsp_01KEZF7C007H87J66PH2EEK1VW". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When replaced_by_return_disposition_id is omitted; use hasReplacedByReturnDispositionId() or valueOrDefault().
     */
    public function getReplacedByReturnDispositionId(): mixed { return $this->get('replaced_by_return_disposition_id'); }
    public function hasReplacedByReturnDispositionId(): bool { return $this->has('replaced_by_return_disposition_id'); }
    /** ID of the `failed` or `canceled` disposition this one replaces. It takes over that disposition's unused capacity. anyOf[1] (Value): string. ID of the `failed` or `canceled` disposition this one replaces. It takes over that disposition's unused capacity. Example: "retdsp_01KEZF7C007H87J66PH2EEK1VW". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When replaces_return_disposition_id is omitted; use hasReplacesReturnDispositionId() or valueOrDefault().
     */
    public function getReplacesReturnDispositionId(): mixed { return $this->get('replaces_return_disposition_id'); }
    public function hasReplacesReturnDispositionId(): bool { return $this->has('replaces_return_disposition_id'); }
    /** Unique identifier for this return disposition, prefixed `retdsp_`. anyOf[1] (Value): string. Unique identifier for this return disposition, prefixed `retdsp_`. Example: "retdsp_01KEZF7C007H87J66PH2EEK1VW". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When return_disposition_id is omitted; use hasReturnDispositionId() or valueOrDefault().
     */
    public function getReturnDispositionId(): mixed { return $this->get('return_disposition_id'); }
    public function hasReturnDispositionId(): bool { return $this->has('return_disposition_id'); }
    /** ID of the Return the disposition belongs to. anyOf[1] (Value): string. ID of the Return the disposition belongs to. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When return_id is omitted; use hasReturnId() or valueOrDefault().
     */
    public function getReturnId(): mixed { return $this->get('return_id'); }
    public function hasReturnId(): bool { return $this->has('return_id'); }
    /** Inspection that owns return_inspection_line_item_id. `null` when return_inspection_line_item_id is null. anyOf[1] (Value): string. Inspection that owns return_inspection_line_item_id. `null` when return_inspection_line_item_id is null. Example: "retins_01KEZF7C00WPB0BR4WTT7CMSB8". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When return_inspection_id is omitted; use hasReturnInspectionId() or valueOrDefault().
     */
    public function getReturnInspectionId(): mixed { return $this->get('return_inspection_id'); }
    public function hasReturnInspectionId(): bool { return $this->has('return_inspection_id'); }
    /** ID of the inspection line the disposition covers. Absent when it covers a receipt line. anyOf[1] (Value): string. ID of the inspection line the disposition covers. Absent when it covers a receipt line. Example: "retinli_01KEZF7C0039VC3XNJ3ZTX8PV4". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When return_inspection_line_item_id is omitted; use hasReturnInspectionLineItemId() or valueOrDefault().
     */
    public function getReturnInspectionLineItemId(): mixed { return $this->get('return_inspection_line_item_id'); }
    public function hasReturnInspectionLineItemId(): bool { return $this->has('return_inspection_line_item_id'); }
    /** ID of the Return line the units belong to. anyOf[1] (Value): string. ID of the Return line the units belong to. Example: "retli_01KEZF7C00R813VR7ECXS062QG". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When return_line_item_id is omitted; use hasReturnLineItemId() or valueOrDefault().
     */
    public function getReturnLineItemId(): mixed { return $this->get('return_line_item_id'); }
    public function hasReturnLineItemId(): bool { return $this->has('return_line_item_id'); }
    /** Receipt that owns return_receipt_line_item_id. `null` when return_receipt_line_item_id is null. anyOf[1] (Value): string. Receipt that owns return_receipt_line_item_id. `null` when return_receipt_line_item_id is null. Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When return_receipt_id is omitted; use hasReturnReceiptId() or valueOrDefault().
     */
    public function getReturnReceiptId(): mixed { return $this->get('return_receipt_id'); }
    public function hasReturnReceiptId(): bool { return $this->has('return_receipt_id'); }
    /** ID of the receipt line the disposition covers. Absent when it covers an inspection line. anyOf[1] (Value): string. ID of the receipt line the disposition covers. Absent when it covers an inspection line. Example: "retrcli_01KEZF7C00BCEA2ZKN4H8WYWXE". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When return_receipt_line_item_id is omitted; use hasReturnReceiptLineItemId() or valueOrDefault().
     */
    public function getReturnReceiptLineItemId(): mixed { return $this->get('return_receipt_line_item_id'); }
    public function hasReturnReceiptLineItemId(): bool { return $this->has('return_receipt_line_item_id'); }
    /** Whether inventory has applied the disposition. Value enum: "pending", "succeeded", "failed", "canceled". anyOf[1] (Value): string. Whether inventory has applied the disposition. Value enum: "pending", "succeeded", "failed", "canceled". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): mixed { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Actions that can succeed now. Empty unless the parent Return is open. cancel is listed only before the inventory effect starts. [] enum: "cancel", "retry". anyOf[1] (Value): Array of string. Actions that can succeed now. Empty unless the parent Return is open. cancel is listed only before the inventory effect starts. [] enum: "cancel", "retry". anyOf[1][] (Value): string.  Value enum: "cancel", "retry". anyOf[2] (Value): null.
     * @return list<string>|null
     * @throws SdkError When supported_actions is omitted; use hasSupportedActions() or valueOrDefault().
     */
    public function getSupportedActions(): mixed { return $this->get('supported_actions'); }
    public function hasSupportedActions(): bool { return $this->has('supported_actions'); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When updated_at is omitted; use hasUpdatedAt() or valueOrDefault().
     */
    public function getUpdatedAt(): mixed { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. anyOf[1] (Value): integer. Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. Format: int64. minimum: 0. anyOf[2] (Value): null.
     * @return int|null
     * @throws SdkError When version is omitted; use hasVersion() or valueOrDefault().
     */
    public function getVersion(): mixed { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
