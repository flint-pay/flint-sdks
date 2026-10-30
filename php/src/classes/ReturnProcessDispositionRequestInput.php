<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $disposition_type
 * @property-read string $external_reference_id
 * @property-read string $inventory_location_id
 * @property-read MetadataRequestInput|array<array-key, mixed>|\stdClass $metadata
 * @property-read string|\DateTimeInterface $occurred_at
 * @property-read string $reason
 * @property-read string $reason_message
 * Presence-aware input; omitted fields throw when accessed. */
final class ReturnProcessDispositionRequestInput extends Model {
    /** @param array{'disposition_type': string, 'external_reference_id'?: string, 'inventory_location_id'?: string, 'metadata'?: MetadataRequestInput|array<array-key, mixed>|\stdClass, 'occurred_at': string|\DateTimeInterface, 'reason': string, 'reason_message'?: string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnProcessDispositionRequestInput')); }
    /** Value enum: "sellable", "quality_control", "damaged", "quarantined", "repair", "refurbish", "liquidate", "donate", "discard", "return_to_buyer", "lost".
     * @return string
     * @throws SdkError When disposition_type is omitted; use hasDispositionType() or valueOrDefault().
     */
    public function getDispositionType(): string { return $this->get('disposition_type'); }
    public function hasDispositionType(): bool { return $this->has('disposition_type'); }
    /** Caller-owned identifier for this resource in an external system. minLength: 1. maxLength: 255.
     * @return string
     * @throws SdkError When external_reference_id is omitted; use hasExternalReferenceId() or valueOrDefault().
     */
    public function getExternalReferenceId(): string { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** minLength: 1.
     * @return string
     * @throws SdkError When inventory_location_id is omitted; use hasInventoryLocationId() or valueOrDefault().
     */
    public function getInventoryLocationId(): string { return $this->get('inventory_location_id'); }
    public function hasInventoryLocationId(): bool { return $this->has('inventory_location_id'); }
    /** Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: 50.
     * @return MetadataRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When metadata is omitted; use hasMetadata() or valueOrDefault().
     */
    public function getMetadata(): mixed { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** RFC3339 timestamp. Format: date-time. minLength: 1.
     * @return string|\DateTimeInterface
     * @throws SdkError When occurred_at is omitted; use hasOccurredAt() or valueOrDefault().
     */
    public function getOccurredAt(): string|\DateTimeInterface { return $this->get('occurred_at'); }
    public function hasOccurredAt(): bool { return $this->has('occurred_at'); }
    /** Value enum: "inspection_result", "return_policy", "warehouse_override", "safety_requirement", "other".
     * @return string
     * @throws SdkError When reason is omitted; use hasReason() or valueOrDefault().
     */
    public function getReason(): string { return $this->get('reason'); }
    public function hasReason(): bool { return $this->has('reason'); }
    /** minLength: 1.
     * @return string
     * @throws SdkError When reason_message is omitted; use hasReasonMessage() or valueOrDefault().
     */
    public function getReasonMessage(): string { return $this->get('reason_message'); }
    public function hasReasonMessage(): bool { return $this->has('reason_message'); }
}
