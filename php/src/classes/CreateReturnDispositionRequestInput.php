<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $disposition_type
 * @property-read string $external_reference_id
 * @property-read string $inventory_location_id
 * @property-read array<array-key, string>|\stdClass $metadata
 * @property-read string|\DateTimeInterface $occurred_at
 * @property-read string $quantity
 * @property-read string $reason
 * @property-read string $reason_message
 * @property-read string $replaces_return_disposition_id
 * @property-read string $return_inspection_line_item_id
 * @property-read string $return_receipt_line_item_id
 * Presence-aware input; omitted fields throw when accessed. */
final class CreateReturnDispositionRequestInput extends Model {
    /** @param mixed $values */
    public function __construct(mixed $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreateReturnDispositionRequestInput')); }
    /** Shape $ (Value): string.  Value enum: "sellable", "quality_control", "damaged", "quarantined", "repair", "refurbish", "liquidate", "donate", "discard", "return_to_buyer", "lost".
     * @return string
     * @throws SdkError When disposition_type is omitted; use hasDispositionType() or valueOrDefault().
     */
    public function getDispositionType(): string { return $this->get('disposition_type'); }
    public function hasDispositionType(): bool { return $this->has('disposition_type'); }
    /** Shape $ (Value): string. Caller-owned identifier for this resource in an external system. minLength: 1. maxLength: 255.
     * @return string
     * @throws SdkError When external_reference_id is omitted; use hasExternalReferenceId() or valueOrDefault().
     */
    public function getExternalReferenceId(): string { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** Shape $ (Value): string. minLength: 1.
     * @return string
     * @throws SdkError When inventory_location_id is omitted; use hasInventoryLocationId() or valueOrDefault().
     */
    public function getInventoryLocationId(): string { return $this->get('inventory_location_id'); }
    public function hasInventoryLocationId(): bool { return $this->has('inventory_location_id'); }
    /** Shape $ (Value): Map of string. Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Shape $.* (Value): string. minLength: 1.
     * @return array<array-key, string>|\stdClass
     * @throws SdkError When metadata is omitted; use hasMetadata() or valueOrDefault().
     */
    public function getMetadata(): array|object { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1.
     * @return string|\DateTimeInterface
     * @throws SdkError When occurred_at is omitted; use hasOccurredAt() or valueOrDefault().
     */
    public function getOccurredAt(): string|\DateTimeInterface { return $this->get('occurred_at'); }
    public function hasOccurredAt(): bool { return $this->has('occurred_at'); }
    /** Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return string
     * @throws SdkError When quantity is omitted; use hasQuantity() or valueOrDefault().
     */
    public function getQuantity(): string { return $this->get('quantity'); }
    public function hasQuantity(): bool { return $this->has('quantity'); }
    /** Shape $ (Value): string.  Value enum: "inspection_result", "return_policy", "warehouse_override", "safety_requirement", "other".
     * @return string
     * @throws SdkError When reason is omitted; use hasReason() or valueOrDefault().
     */
    public function getReason(): string { return $this->get('reason'); }
    public function hasReason(): bool { return $this->has('reason'); }
    /** Shape $ (Value): string. minLength: 1.
     * @return string
     * @throws SdkError When reason_message is omitted; use hasReasonMessage() or valueOrDefault().
     */
    public function getReasonMessage(): string { return $this->get('reason_message'); }
    public function hasReasonMessage(): bool { return $this->has('reason_message'); }
    /** Shape $ (Value): string. minLength: 1.
     * @return string
     * @throws SdkError When replaces_return_disposition_id is omitted; use hasReplacesReturnDispositionId() or valueOrDefault().
     */
    public function getReplacesReturnDispositionId(): string { return $this->get('replaces_return_disposition_id'); }
    public function hasReplacesReturnDispositionId(): bool { return $this->has('replaces_return_disposition_id'); }
    /** Shape $ (Value): string. minLength: 1.
     * @return string
     * @throws SdkError When return_inspection_line_item_id is omitted; use hasReturnInspectionLineItemId() or valueOrDefault().
     */
    public function getReturnInspectionLineItemId(): string { return $this->get('return_inspection_line_item_id'); }
    public function hasReturnInspectionLineItemId(): bool { return $this->has('return_inspection_line_item_id'); }
    /** Shape $ (Value): string. minLength: 1.
     * @return string
     * @throws SdkError When return_receipt_line_item_id is omitted; use hasReturnReceiptLineItemId() or valueOrDefault().
     */
    public function getReturnReceiptLineItemId(): string { return $this->get('return_receipt_line_item_id'); }
    public function hasReturnReceiptLineItemId(): bool { return $this->has('return_receipt_line_item_id'); }
}
