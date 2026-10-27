<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int $page_size
 * @property-read string $page_token
 * @property-read string $inventory_item_id
 * @property-read string $origin_location_id
 * @property-read string $destination_location_id
 * @property-read list<string> $status
 * @property-read string $idempotency_key
 * @property-read string $external_reference_id
 * @property-read string $query
 * @property-read list<string> $closed_reason
 * @property-read string|\DateTimeInterface $created_after
 * @property-read string|\DateTimeInterface $created_before
 * @property-read string|\DateTimeInterface $departed_after
 * @property-read string|\DateTimeInterface $departed_before
 * @property-read string|\DateTimeInterface $received_after
 * @property-read string|\DateTimeInterface $received_before
 * Presence-aware input; omitted fields throw when accessed. */
final class InventoryTransfersListInput extends Model {
    /** @param array{'page_size'?: int, 'page_token'?: string, 'inventory_item_id'?: string, 'origin_location_id'?: string, 'destination_location_id'?: string, 'status'?: list<string>, 'idempotency_key'?: string, 'external_reference_id'?: string, 'query'?: string, 'closed_reason'?: list<string>, 'created_after'?: string|\DateTimeInterface, 'created_before'?: string|\DateTimeInterface, 'departed_after'?: string|\DateTimeInterface, 'departed_before'?: string|\DateTimeInterface, 'received_after'?: string|\DateTimeInterface, 'received_before'?: string|\DateTimeInterface}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventoryTransfersListInput')); }
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
     * @throws SdkError When origin_location_id is omitted; use hasOriginLocationId() or valueOrDefault().
     */
    public function getOriginLocationId(): string { return $this->get('origin_location_id'); }
    public function hasOriginLocationId(): bool { return $this->has('origin_location_id'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When destination_location_id is omitted; use hasDestinationLocationId() or valueOrDefault().
     */
    public function getDestinationLocationId(): string { return $this->get('destination_location_id'); }
    public function hasDestinationLocationId(): bool { return $this->has('destination_location_id'); }
    /** Shape $ (Value): Array of string. minItems: 1. [] enum: "draft", "in_transit", "partially_resolved", "closed". Shape $[] (Value): string.  Value enum: "draft", "in_transit", "partially_resolved", "closed".
     * @return list<string>
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): array { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When idempotency_key is omitted; use hasIdempotencyKey() or valueOrDefault().
     */
    public function getIdempotencyKey(): string { return $this->get('idempotency_key'); }
    public function hasIdempotencyKey(): bool { return $this->has('idempotency_key'); }
    /** Shape $ (Value): string. minLength: 1. maxLength: 255.
     * @return string
     * @throws SdkError When external_reference_id is omitted; use hasExternalReferenceId() or valueOrDefault().
     */
    public function getExternalReferenceId(): string { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** Shape $ (Value): string. maxLength: 255.
     * @return string
     * @throws SdkError When query is omitted; use hasQuery() or valueOrDefault().
     */
    public function getQuery(): string { return $this->get('query'); }
    public function hasQuery(): bool { return $this->has('query'); }
    /** Shape $ (Value): Array of string. minItems: 1. [] enum: "received", "canceled", "received_with_cancellation", "returned", "lost", "mixed". Shape $[] (Value): string.  Value enum: "received", "canceled", "received_with_cancellation", "returned", "lost", "mixed".
     * @return list<string>
     * @throws SdkError When closed_reason is omitted; use hasClosedReason() or valueOrDefault().
     */
    public function getClosedReason(): array { return $this->get('closed_reason'); }
    public function hasClosedReason(): bool { return $this->has('closed_reason'); }
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
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When departed_after is omitted; use hasDepartedAfter() or valueOrDefault().
     */
    public function getDepartedAfter(): string|\DateTimeInterface { return $this->get('departed_after'); }
    public function hasDepartedAfter(): bool { return $this->has('departed_after'); }
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When departed_before is omitted; use hasDepartedBefore() or valueOrDefault().
     */
    public function getDepartedBefore(): string|\DateTimeInterface { return $this->get('departed_before'); }
    public function hasDepartedBefore(): bool { return $this->has('departed_before'); }
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When received_after is omitted; use hasReceivedAfter() or valueOrDefault().
     */
    public function getReceivedAfter(): string|\DateTimeInterface { return $this->get('received_after'); }
    public function hasReceivedAfter(): bool { return $this->has('received_after'); }
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When received_before is omitted; use hasReceivedBefore() or valueOrDefault().
     */
    public function getReceivedBefore(): string|\DateTimeInterface { return $this->get('received_before'); }
    public function hasReceivedBefore(): bool { return $this->has('received_before'); }
}
