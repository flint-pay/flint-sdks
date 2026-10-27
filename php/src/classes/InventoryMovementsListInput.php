<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int $page_size
 * @property-read string $page_token
 * @property-read string $inventory_item_id
 * @property-read string $location_id
 * @property-read list<string> $type
 * @property-read list<string> $reason
 * @property-read string $idempotency_key
 * @property-read string $return_id
 * @property-read string $return_disposition_id
 * @property-read string $sort_direction
 * @property-read list<string> $expand
 * @property-read list<string> $source_system_type
 * @property-read string $external_source_id
 * @property-read string $external_actor_id
 * @property-read string|\DateTimeInterface $occurred_after
 * @property-read string|\DateTimeInterface $occurred_before
 * @property-read string|\DateTimeInterface $created_after
 * @property-read string|\DateTimeInterface $created_before
 * @property-read list<string> $source_reference_type
 * @property-read string $source_reference_id
 * Presence-aware input; omitted fields throw when accessed. */
final class InventoryMovementsListInput extends Model {
    /** @param array{'page_size'?: int, 'page_token'?: string, 'inventory_item_id'?: string, 'location_id'?: string, 'type'?: list<string>, 'reason'?: list<string>, 'idempotency_key'?: string, 'return_id'?: string, 'return_disposition_id'?: string, 'sort_direction'?: string, 'expand'?: list<string>, 'source_system_type'?: list<string>, 'external_source_id'?: string, 'external_actor_id'?: string, 'occurred_after'?: string|\DateTimeInterface, 'occurred_before'?: string|\DateTimeInterface, 'created_after'?: string|\DateTimeInterface, 'created_before'?: string|\DateTimeInterface, 'source_reference_type'?: list<string>, 'source_reference_id'?: string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventoryMovementsListInput')); }
    /** Shape $ (Value): integer. minimum: 1. maximum: 100. Default: 20.
     * @return int
     * @throws SdkError When page_size is omitted; use hasPageSize() or valueOrDefault().
     */
    public function getPageSize(): int { return $this->get('page_size'); }
    public function hasPageSize(): bool { return $this->has('page_size'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When page_token is omitted; use hasPageToken() or valueOrDefault().
     */
    public function getPageToken(): string { return $this->get('page_token'); }
    public function hasPageToken(): bool { return $this->has('page_token'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When inventory_item_id is omitted; use hasInventoryItemId() or valueOrDefault().
     */
    public function getInventoryItemId(): string { return $this->get('inventory_item_id'); }
    public function hasInventoryItemId(): bool { return $this->has('inventory_item_id'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When location_id is omitted; use hasLocationId() or valueOrDefault().
     */
    public function getLocationId(): string { return $this->get('location_id'); }
    public function hasLocationId(): bool { return $this->has('location_id'); }
    /** Shape $ (Value): Array of string. minItems: 1. [] enum: "adjustment", "count_applied", "reservation_consumed", "reservation_committed", "reservation_commitment_released", "reservation_expired", "reservation_held", "reservation_hold_released", "reservation_reallocated_in", "reservation_reallocated_out", "return_received", "safety_stock_change", "transfer_departed", "transfer_received", "transfer_returned", "transfer_lost". Shape $[] (Value): string.  Value enum: "adjustment", "count_applied", "reservation_consumed", "reservation_committed", "reservation_commitment_released", "reservation_expired", "reservation_held", "reservation_hold_released", "reservation_reallocated_in", "reservation_reallocated_out", "return_received", "safety_stock_change", "transfer_departed", "transfer_received", "transfer_returned", "transfer_lost".
     * @return list<string>
     * @throws SdkError When type is omitted; use hasType() or valueOrDefault().
     */
    public function getType(): array { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
    /** Shape $ (Value): Array of string. minItems: 1. [] enum: "received", "returned", "sold", "theft", "loss", "condition_changed", "counted", "correction". Shape $[] (Value): string.  Value enum: "received", "returned", "sold", "theft", "loss", "condition_changed", "counted", "correction".
     * @return list<string>
     * @throws SdkError When reason is omitted; use hasReason() or valueOrDefault().
     */
    public function getReason(): array { return $this->get('reason'); }
    public function hasReason(): bool { return $this->has('reason'); }
    /** Shape $ (Value): string. minLength: 1. maxLength: 255.
     * @return string
     * @throws SdkError When idempotency_key is omitted; use hasIdempotencyKey() or valueOrDefault().
     */
    public function getIdempotencyKey(): string { return $this->get('idempotency_key'); }
    public function hasIdempotencyKey(): bool { return $this->has('idempotency_key'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When return_id is omitted; use hasReturnId() or valueOrDefault().
     */
    public function getReturnId(): string { return $this->get('return_id'); }
    public function hasReturnId(): bool { return $this->has('return_id'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When return_disposition_id is omitted; use hasReturnDispositionId() or valueOrDefault().
     */
    public function getReturnDispositionId(): string { return $this->get('return_disposition_id'); }
    public function hasReturnDispositionId(): bool { return $this->has('return_disposition_id'); }
    /** Shape $ (Value): string. Default: "asc". Value enum: "asc", "desc".
     * @return string
     * @throws SdkError When sort_direction is omitted; use hasSortDirection() or valueOrDefault().
     */
    public function getSortDirection(): string { return $this->get('sort_direction'); }
    public function hasSortDirection(): bool { return $this->has('sort_direction'); }
    /** Shape $ (Value): Array of string.  [] enum: "inventory_item". Shape $[] (Value): string.  Value enum: "inventory_item".
     * @return list<string>
     * @throws SdkError When expand is omitted; use hasExpand() or valueOrDefault().
     */
    public function getExpand(): array { return $this->get('expand'); }
    public function hasExpand(): bool { return $this->has('expand'); }
    /** Shape $ (Value): Array of string. minItems: 1. [] enum: "manual", "pos", "wms", "erp", "flint", "other". Shape $[] (Value): string.  Value enum: "manual", "pos", "wms", "erp", "flint", "other".
     * @return list<string>
     * @throws SdkError When source_system_type is omitted; use hasSourceSystemType() or valueOrDefault().
     */
    public function getSourceSystemType(): array { return $this->get('source_system_type'); }
    public function hasSourceSystemType(): bool { return $this->has('source_system_type'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When external_source_id is omitted; use hasExternalSourceId() or valueOrDefault().
     */
    public function getExternalSourceId(): string { return $this->get('external_source_id'); }
    public function hasExternalSourceId(): bool { return $this->has('external_source_id'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When external_actor_id is omitted; use hasExternalActorId() or valueOrDefault().
     */
    public function getExternalActorId(): string { return $this->get('external_actor_id'); }
    public function hasExternalActorId(): bool { return $this->has('external_actor_id'); }
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When occurred_after is omitted; use hasOccurredAfter() or valueOrDefault().
     */
    public function getOccurredAfter(): string|\DateTimeInterface { return $this->get('occurred_after'); }
    public function hasOccurredAfter(): bool { return $this->has('occurred_after'); }
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When occurred_before is omitted; use hasOccurredBefore() or valueOrDefault().
     */
    public function getOccurredBefore(): string|\DateTimeInterface { return $this->get('occurred_before'); }
    public function hasOccurredBefore(): bool { return $this->has('occurred_before'); }
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When created_after is omitted; use hasCreatedAfter() or valueOrDefault().
     */
    public function getCreatedAfter(): string|\DateTimeInterface { return $this->get('created_after'); }
    public function hasCreatedAfter(): bool { return $this->has('created_after'); }
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When created_before is omitted; use hasCreatedBefore() or valueOrDefault().
     */
    public function getCreatedBefore(): string|\DateTimeInterface { return $this->get('created_before'); }
    public function hasCreatedBefore(): bool { return $this->has('created_before'); }
    /** Shape $ (Value): Array of string. minItems: 1. [] enum: "fulfillment", "inventory_adjustment", "inventory_count", "inventory_level", "inventory_receipt", "inventory_reservation", "inventory_transfer". Shape $[] (Value): string.  Value enum: "fulfillment", "inventory_adjustment", "inventory_count", "inventory_level", "inventory_receipt", "inventory_reservation", "inventory_transfer".
     * @return list<string>
     * @throws SdkError When source_reference_type is omitted; use hasSourceReferenceType() or valueOrDefault().
     */
    public function getSourceReferenceType(): array { return $this->get('source_reference_type'); }
    public function hasSourceReferenceType(): bool { return $this->has('source_reference_type'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When source_reference_id is omitted; use hasSourceReferenceId() or valueOrDefault().
     */
    public function getSourceReferenceId(): string { return $this->get('source_reference_id'); }
    public function hasSourceReferenceId(): bool { return $this->has('source_reference_id'); }
}
