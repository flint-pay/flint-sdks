<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|\DateTimeInterface $canceled_at
 * @property-read ReturnActorInput|array<array-key, mixed>|\stdClass $canceled_by
 * @property-read string $cancellation_reason
 * @property-read string $cancellation_reason_message
 * @property-read string|\DateTimeInterface $created_at
 * @property-read ReturnActorInput|array<array-key, mixed>|\stdClass $created_by
 * @property-read string $disposition_type
 * @property-read string $external_reference_id
 * @property-read string $failure_code
 * @property-read string $failure_message
 * @property-read string $inventory_location_id
 * @property-read list<string> $inventory_movement_ids
 * @property-read string $inventory_receipt_id
 * @property-read MetadataMapInput|array<array-key, mixed>|\stdClass $metadata
 * @property-read string|\DateTimeInterface $occurred_at
 * @property-read int $quantity
 * @property-read string $reason
 * @property-read string $reason_message
 * @property-read string $replaced_by_return_disposition_id
 * @property-read string $replaces_return_disposition_id
 * @property-read string $return_disposition_id
 * @property-read string $return_id
 * @property-read string|null $return_inspection_id
 * @property-read string $return_inspection_line_item_id
 * @property-read string $return_line_item_id
 * @property-read string|null $return_receipt_id
 * @property-read string $return_receipt_line_item_id
 * @property-read string $status
 * @property-read list<string> $supported_actions
 * @property-read string|\DateTimeInterface $updated_at
 * @property-read int $version
 * Presence-aware input; omitted fields throw when accessed. */
final class ReturnDispositionInput extends Model {
    /** @param array{'canceled_at'?: string|\DateTimeInterface, 'canceled_by'?: ReturnActorInput|array<array-key, mixed>|\stdClass, 'cancellation_reason'?: string, 'cancellation_reason_message'?: string, 'created_at': string|\DateTimeInterface, 'created_by': ReturnActorInput|array<array-key, mixed>|\stdClass, 'disposition_type': string, 'external_reference_id'?: string, 'failure_code'?: string, 'failure_message'?: string, 'inventory_location_id'?: string, 'inventory_movement_ids': list<string>, 'inventory_receipt_id'?: string, 'metadata': MetadataMapInput|array<array-key, mixed>|\stdClass, 'occurred_at': string|\DateTimeInterface, 'quantity': int, 'reason': string, 'reason_message'?: string, 'replaced_by_return_disposition_id'?: string, 'replaces_return_disposition_id'?: string, 'return_disposition_id': string, 'return_id': string, 'return_inspection_id': string|null, 'return_inspection_line_item_id'?: string, 'return_line_item_id'?: string, 'return_receipt_id': string|null, 'return_receipt_line_item_id'?: string, 'status': string, 'supported_actions': list<string>, 'updated_at': string|\DateTimeInterface, 'version': int, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnDispositionInput')); }
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When canceled_at is omitted; use hasCanceledAt() or valueOrDefault().
     */
    public function getCanceledAt(): string|\DateTimeInterface { return $this->get('canceled_at'); }
    public function hasCanceledAt(): bool { return $this->has('canceled_at'); }
    /** Who canceled the disposition. Merchant reads only. Who performed a return action: a buyer, merchant, integration, or the system, with an optional ID.
     * @return ReturnActorInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When canceled_by is omitted; use hasCanceledBy() or valueOrDefault().
     */
    public function getCanceledBy(): mixed { return $this->get('canceled_by'); }
    public function hasCanceledBy(): bool { return $this->has('canceled_by'); }
    /** Why the disposition was canceled. Value enum: "created_in_error", "changed_disposition", "duplicate", "other".
     * @return string
     * @throws SdkError When cancellation_reason is omitted; use hasCancellationReason() or valueOrDefault().
     */
    public function getCancellationReason(): string { return $this->get('cancellation_reason'); }
    public function hasCancellationReason(): bool { return $this->has('cancellation_reason'); }
    /** Detail sent with the cancellation. Merchant reads only.
     * @return string
     * @throws SdkError When cancellation_reason_message is omitted; use hasCancellationReasonMessage() or valueOrDefault().
     */
    public function getCancellationReasonMessage(): string { return $this->get('cancellation_reason_message'); }
    public function hasCancellationReasonMessage(): bool { return $this->has('cancellation_reason_message'); }
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string|\DateTimeInterface { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Who created the disposition. Who performed a return action: a buyer, merchant, integration, or the system, with an optional ID.
     * @return ReturnActorInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When created_by is omitted; use hasCreatedBy() or valueOrDefault().
     */
    public function getCreatedBy(): mixed { return $this->get('created_by'); }
    public function hasCreatedBy(): bool { return $this->has('created_by'); }
    /** What happens to the received units. Value enum: "sellable", "quality_control", "damaged", "quarantined", "repair", "refurbish", "liquidate", "donate", "discard", "return_to_buyer", "lost".
     * @return string
     * @throws SdkError When disposition_type is omitted; use hasDispositionType() or valueOrDefault().
     */
    public function getDispositionType(): string { return $this->get('disposition_type'); }
    public function hasDispositionType(): bool { return $this->has('disposition_type'); }
    /** Caller-owned identifier for this resource in an external system. maxLength: 255. Example: "warehouse-1842".
     * @return string
     * @throws SdkError When external_reference_id is omitted; use hasExternalReferenceId() or valueOrDefault().
     */
    public function getExternalReferenceId(): string { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** Reason code for a failed merchandise disposition, when available. Value enum: "inventory_effect_failed", "inventory_item_unmapped".
     * @return string
     * @throws SdkError When failure_code is omitted; use hasFailureCode() or valueOrDefault().
     */
    public function getFailureCode(): string { return $this->get('failure_code'); }
    public function hasFailureCode(): bool { return $this->has('failure_code'); }
    /** Explanation of a failed merchandise disposition, when available.
     * @return string
     * @throws SdkError When failure_message is omitted; use hasFailureMessage() or valueOrDefault().
     */
    public function getFailureMessage(): string { return $this->get('failure_message'); }
    public function hasFailureMessage(): bool { return $this->has('failure_message'); }
    /** ID of the Location whose stock the disposition changes. Required for `sellable`, `quality_control`, `damaged`, `quarantined`, and `lost`; rejected for the other types. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     * @return string
     * @throws SdkError When inventory_location_id is omitted; use hasInventoryLocationId() or valueOrDefault().
     */
    public function getInventoryLocationId(): string { return $this->get('inventory_location_id'); }
    public function hasInventoryLocationId(): bool { return $this->has('inventory_location_id'); }
    /** IDs of the inventory movements the disposition wrote. Empty when it moved no stock. [] (Value): string. Example: "invm_01KEZF7C00DYPFT9PS0NZY805Z".
     * @return list<string>
     * @throws SdkError When inventory_movement_ids is omitted; use hasInventoryMovementIds() or valueOrDefault().
     */
    public function getInventoryMovementIds(): array { return $this->get('inventory_movement_ids'); }
    public function hasInventoryMovementIds(): bool { return $this->has('inventory_movement_ids'); }
    /** ID of the inventory receipt the disposition recorded. Absent when it recorded none. Example: "invrec_01KEZF7C00JXXCYA06SH8RCM2N".
     * @return string
     * @throws SdkError When inventory_receipt_id is omitted; use hasInventoryReceiptId() or valueOrDefault().
     */
    public function getInventoryReceiptId(): string { return $this->get('inventory_receipt_id'); }
    public function hasInventoryReceiptId(): bool { return $this->has('inventory_receipt_id'); }
    /** Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them.
     * @return MetadataMapInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When metadata is omitted; use hasMetadata() or valueOrDefault().
     */
    public function getMetadata(): mixed { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When occurred_at is omitted; use hasOccurredAt() or valueOrDefault().
     */
    public function getOccurredAt(): string|\DateTimeInterface { return $this->get('occurred_at'); }
    public function hasOccurredAt(): bool { return $this->has('occurred_at'); }
    /** Whole-number quantity; fractional quantities are not supported. Format: int64.
     * @return int
     * @throws SdkError When quantity is omitted; use hasQuantity() or valueOrDefault().
     */
    public function getQuantity(): int { return $this->get('quantity'); }
    public function hasQuantity(): bool { return $this->has('quantity'); }
    /** Why the disposition was made. Value enum: "inspection_result", "return_policy", "warehouse_override", "safety_requirement", "other".
     * @return string
     * @throws SdkError When reason is omitted; use hasReason() or valueOrDefault().
     */
    public function getReason(): string { return $this->get('reason'); }
    public function hasReason(): bool { return $this->has('reason'); }
    /** Optional detail about `reason`, kept with the record.
     * @return string
     * @throws SdkError When reason_message is omitted; use hasReasonMessage() or valueOrDefault().
     */
    public function getReasonMessage(): string { return $this->get('reason_message'); }
    public function hasReasonMessage(): bool { return $this->has('reason_message'); }
    /** ID of the disposition that took over this one. Present when a replacement canceled it. Example: "retdsp_01KEZF7C007H87J66PH2EEK1VW".
     * @return string
     * @throws SdkError When replaced_by_return_disposition_id is omitted; use hasReplacedByReturnDispositionId() or valueOrDefault().
     */
    public function getReplacedByReturnDispositionId(): string { return $this->get('replaced_by_return_disposition_id'); }
    public function hasReplacedByReturnDispositionId(): bool { return $this->has('replaced_by_return_disposition_id'); }
    /** ID of the `failed` or `canceled` disposition this one replaces. It takes over that disposition's unused capacity. Example: "retdsp_01KEZF7C007H87J66PH2EEK1VW".
     * @return string
     * @throws SdkError When replaces_return_disposition_id is omitted; use hasReplacesReturnDispositionId() or valueOrDefault().
     */
    public function getReplacesReturnDispositionId(): string { return $this->get('replaces_return_disposition_id'); }
    public function hasReplacesReturnDispositionId(): bool { return $this->has('replaces_return_disposition_id'); }
    /** Unique identifier for this return disposition, prefixed `retdsp_`. Example: "retdsp_01KEZF7C007H87J66PH2EEK1VW".
     * @return string
     * @throws SdkError When return_disposition_id is omitted; use hasReturnDispositionId() or valueOrDefault().
     */
    public function getReturnDispositionId(): string { return $this->get('return_disposition_id'); }
    public function hasReturnDispositionId(): bool { return $this->has('return_disposition_id'); }
    /** Example: "ret_01KEZF7C00PG93650ZKVQNGF7X".
     * @return string
     * @throws SdkError When return_id is omitted; use hasReturnId() or valueOrDefault().
     */
    public function getReturnId(): string { return $this->get('return_id'); }
    public function hasReturnId(): bool { return $this->has('return_id'); }
    /** Inspection that owns return_inspection_line_item_id. `null` when return_inspection_line_item_id is null. Example: "retins_01KEZF7C00WPB0BR4WTT7CMSB8".
     * @return string|null
     * @throws SdkError When return_inspection_id is omitted; use hasReturnInspectionId() or valueOrDefault().
     */
    public function getReturnInspectionId(): string|null { return $this->get('return_inspection_id'); }
    public function hasReturnInspectionId(): bool { return $this->has('return_inspection_id'); }
    /** ID of the inspection line the disposition covers. Absent when it covers a receipt line. Example: "retinli_01KEZF7C0039VC3XNJ3ZTX8PV4".
     * @return string
     * @throws SdkError When return_inspection_line_item_id is omitted; use hasReturnInspectionLineItemId() or valueOrDefault().
     */
    public function getReturnInspectionLineItemId(): string { return $this->get('return_inspection_line_item_id'); }
    public function hasReturnInspectionLineItemId(): bool { return $this->has('return_inspection_line_item_id'); }
    /** ID of the Return line the units belong to. Example: "retli_01KEZF7C00R813VR7ECXS062QG".
     * @return string
     * @throws SdkError When return_line_item_id is omitted; use hasReturnLineItemId() or valueOrDefault().
     */
    public function getReturnLineItemId(): string { return $this->get('return_line_item_id'); }
    public function hasReturnLineItemId(): bool { return $this->has('return_line_item_id'); }
    /** Receipt that owns return_receipt_line_item_id. `null` when return_receipt_line_item_id is null. Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ".
     * @return string|null
     * @throws SdkError When return_receipt_id is omitted; use hasReturnReceiptId() or valueOrDefault().
     */
    public function getReturnReceiptId(): string|null { return $this->get('return_receipt_id'); }
    public function hasReturnReceiptId(): bool { return $this->has('return_receipt_id'); }
    /** ID of the receipt line the disposition covers. Absent when it covers an inspection line. Example: "retrcli_01KEZF7C00BCEA2ZKN4H8WYWXE".
     * @return string
     * @throws SdkError When return_receipt_line_item_id is omitted; use hasReturnReceiptLineItemId() or valueOrDefault().
     */
    public function getReturnReceiptLineItemId(): string { return $this->get('return_receipt_line_item_id'); }
    public function hasReturnReceiptLineItemId(): bool { return $this->has('return_receipt_line_item_id'); }
    /** Whether inventory has applied the disposition. Value enum: "pending", "succeeded", "failed", "canceled".
     * @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Actions that can succeed now. Empty unless the parent Return is open. cancel is listed only before the inventory effect starts. [] enum: "cancel", "retry". [] (Value): string.  Value enum: "cancel", "retry".
     * @return list<string>
     * @throws SdkError When supported_actions is omitted; use hasSupportedActions() or valueOrDefault().
     */
    public function getSupportedActions(): array { return $this->get('supported_actions'); }
    public function hasSupportedActions(): bool { return $this->has('supported_actions'); }
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When updated_at is omitted; use hasUpdatedAt() or valueOrDefault().
     */
    public function getUpdatedAt(): string|\DateTimeInterface { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. Format: int64. minimum: 0.
     * @return int
     * @throws SdkError When version is omitted; use hasVersion() or valueOrDefault().
     */
    public function getVersion(): int { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
