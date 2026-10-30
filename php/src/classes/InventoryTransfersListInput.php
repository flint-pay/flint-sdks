<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read int $page_size
 * @property-read string $page_token
 * @property-read string $inventory_item_id
 * @property-read string $origin_location_id
 * @property-read string $destination_location_id
 * @property-read list<string>|string $status
 * @property-read string $idempotency_key
 * @property-read string $external_reference_id
 * @property-read string $query
 * @property-read list<string>|string $closed_reason
 * @property-read string|\DateTimeInterface $created_after
 * @property-read string|\DateTimeInterface $created_before
 * @property-read string|\DateTimeInterface $departed_after
 * @property-read string|\DateTimeInterface $departed_before
 * @property-read string|\DateTimeInterface $received_after
 * @property-read string|\DateTimeInterface $received_before
 * Presence-aware input; omitted fields throw when accessed. */
final class InventoryTransfersListInput extends Model {
    /** @param array{'page_size'?: int, 'page_token'?: string, 'inventory_item_id'?: string, 'origin_location_id'?: string, 'destination_location_id'?: string, 'status'?: list<string>|string, 'idempotency_key'?: string, 'external_reference_id'?: string, 'query'?: string, 'closed_reason'?: list<string>|string, 'created_after'?: string|\DateTimeInterface, 'created_before'?: string|\DateTimeInterface, 'departed_after'?: string|\DateTimeInterface, 'departed_before'?: string|\DateTimeInterface, 'received_after'?: string|\DateTimeInterface, 'received_before'?: string|\DateTimeInterface}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventoryTransfersListInput')); }
    /** Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: 1. maximum: 100. Default: 20.
     * @return int
     * @throws SdkError When page_size is omitted; use hasPageSize() or valueOrDefault().
     */
    public function getPageSize(): int { return $this->get('page_size'); }
    public function hasPageSize(): bool { return $this->has('page_size'); }
    /** Opaque next_page_token from the previous response. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An invalid, expired, or mismatched token returns a validation error.
     * @return string
     * @throws SdkError When page_token is omitted; use hasPageToken() or valueOrDefault().
     */
    public function getPageToken(): string { return $this->get('page_token'); }
    public function hasPageToken(): bool { return $this->has('page_token'); }
    /** Filter by inventory item. Example: "invi_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When inventory_item_id is omitted; use hasInventoryItemId() or valueOrDefault().
     */
    public function getInventoryItemId(): string { return $this->get('inventory_item_id'); }
    public function hasInventoryItemId(): bool { return $this->has('inventory_item_id'); }
    /** Filter by origin Location. Example: "loc_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When origin_location_id is omitted; use hasOriginLocationId() or valueOrDefault().
     */
    public function getOriginLocationId(): string { return $this->get('origin_location_id'); }
    public function hasOriginLocationId(): bool { return $this->has('origin_location_id'); }
    /** Filter by destination Location. Example: "loc_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When destination_location_id is omitted; use hasDestinationLocationId() or valueOrDefault().
     */
    public function getDestinationLocationId(): string { return $this->get('destination_location_id'); }
    public function hasDestinationLocationId(): bool { return $this->has('destination_location_id'); }
    /** Filter by transfer status. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. [] enum: "draft", "in_transit", "partially_resolved", "closed". Value enum: "draft", "in_transit", "partially_resolved", "closed". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "draft", "in_transit", "partially_resolved", "closed". anyOf[1][] (Value): string.  Value enum: "draft", "in_transit", "partially_resolved", "closed". anyOf[2] (Value): string.  Value enum: "draft", "in_transit", "partially_resolved", "closed".
     * @return list<string>|string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): mixed { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Filter by the original Idempotency-Key, after trimming surrounding whitespace. Matching is exact and case-sensitive. Returns current authorized resources, not the recorded response. A pending resource does not prove that the operation succeeded, and an empty list does not prove that it had no effect. minLength: 1. maxLength: 255.
     * @return string
     * @throws SdkError When idempotency_key is omitted; use hasIdempotencyKey() or valueOrDefault().
     */
    public function getIdempotencyKey(): string { return $this->get('idempotency_key'); }
    public function hasIdempotencyKey(): bool { return $this->has('idempotency_key'); }
    /** Exact-match filter on the caller-owned external reference ID. minLength: 1. maxLength: 255.
     * @return string
     * @throws SdkError When external_reference_id is omitted; use hasExternalReferenceId() or valueOrDefault().
     */
    public function getExternalReferenceId(): string { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** Search by inventory_transfer_id, external_reference_id, or note. maxLength: 255.
     * @return string
     * @throws SdkError When query is omitted; use hasQuery() or valueOrDefault().
     */
    public function getQuery(): string { return $this->get('query'); }
    public function hasQuery(): bool { return $this->has('query'); }
    /** Filter by how the transfer ended. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. [] enum: "received", "canceled", "received_with_cancellation", "returned", "lost", "mixed". Value enum: "received", "canceled", "received_with_cancellation", "returned", "lost", "mixed". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "received", "canceled", "received_with_cancellation", "returned", "lost", "mixed". anyOf[1][] (Value): string.  Value enum: "received", "canceled", "received_with_cancellation", "returned", "lost", "mixed". anyOf[2] (Value): string.  Value enum: "received", "canceled", "received_with_cancellation", "returned", "lost", "mixed".
     * @return list<string>|string
     * @throws SdkError When closed_reason is omitted; use hasClosedReason() or valueOrDefault().
     */
    public function getClosedReason(): mixed { return $this->get('closed_reason'); }
    public function hasClosedReason(): bool { return $this->has('closed_reason'); }
    /** Inclusive lower bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When created_after is omitted; use hasCreatedAfter() or valueOrDefault().
     */
    public function getCreatedAfter(): string|\DateTimeInterface { return $this->get('created_after'); }
    public function hasCreatedAfter(): bool { return $this->has('created_after'); }
    /** Exclusive upper bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When created_before is omitted; use hasCreatedBefore() or valueOrDefault().
     */
    public function getCreatedBefore(): string|\DateTimeInterface { return $this->get('created_before'); }
    public function hasCreatedBefore(): bool { return $this->has('created_before'); }
    /** Inclusive lower bound on departed_at. Format: date-time. Example: "2026-03-17T14:30:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When departed_after is omitted; use hasDepartedAfter() or valueOrDefault().
     */
    public function getDepartedAfter(): string|\DateTimeInterface { return $this->get('departed_after'); }
    public function hasDepartedAfter(): bool { return $this->has('departed_after'); }
    /** Exclusive upper bound on departed_at. Format: date-time. Example: "2026-03-17T14:30:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When departed_before is omitted; use hasDepartedBefore() or valueOrDefault().
     */
    public function getDepartedBefore(): string|\DateTimeInterface { return $this->get('departed_before'); }
    public function hasDepartedBefore(): bool { return $this->has('departed_before'); }
    /** Inclusive lower bound on received_at. Format: date-time. Example: "2026-03-17T14:30:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When received_after is omitted; use hasReceivedAfter() or valueOrDefault().
     */
    public function getReceivedAfter(): string|\DateTimeInterface { return $this->get('received_after'); }
    public function hasReceivedAfter(): bool { return $this->has('received_after'); }
    /** Exclusive upper bound on received_at. Format: date-time. Example: "2026-03-17T14:30:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When received_before is omitted; use hasReceivedBefore() or valueOrDefault().
     */
    public function getReceivedBefore(): string|\DateTimeInterface { return $this->get('received_before'); }
    public function hasReceivedBefore(): bool { return $this->has('received_before'); }
}
