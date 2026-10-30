<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string|\DateTimeInterface $created_after
 * @property-read string|\DateTimeInterface $created_before
 * @property-read string $external_reference_id
 * @property-read string $idempotency_key
 * @property-read int $page_size
 * @property-read string $page_token
 * @property-read string $query
 * @property-read string|\DateTimeInterface $received_after
 * @property-read string|\DateTimeInterface $received_before
 * @property-read string $receiving_location_id
 * @property-read string $return_id
 * @property-read string $return_line_item_id
 * @property-read string $shipment_id
 * @property-read list<string>|string $source_system_type
 * @property-read list<string>|string $status
 * @property-read string|\DateTimeInterface $updated_after
 * @property-read string|\DateTimeInterface $updated_before
 * @property-read list<string>|string $verification_status
 * Presence-aware input; omitted fields throw when accessed. */
final class ReturnReceiptsListInput extends Model {
    /** @param array{'created_after'?: string|\DateTimeInterface, 'created_before'?: string|\DateTimeInterface, 'external_reference_id'?: string, 'idempotency_key'?: string, 'page_size'?: int, 'page_token'?: string, 'query'?: string, 'received_after'?: string|\DateTimeInterface, 'received_before'?: string|\DateTimeInterface, 'receiving_location_id'?: string, 'return_id'?: string, 'return_line_item_id'?: string, 'shipment_id'?: string, 'source_system_type'?: list<string>|string, 'status'?: list<string>|string, 'updated_after'?: string|\DateTimeInterface, 'updated_before'?: string|\DateTimeInterface, 'verification_status'?: list<string>|string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnReceiptsListInput')); }
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
    /** Exact-match filter on the caller-owned external reference ID. minLength: 1. maxLength: 255.
     * @return string
     * @throws SdkError When external_reference_id is omitted; use hasExternalReferenceId() or valueOrDefault().
     */
    public function getExternalReferenceId(): string { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** Filter by the original Idempotency-Key, after trimming surrounding whitespace. Matching is exact and case-sensitive. Returns current authorized resources, not the recorded response. A pending resource does not prove that the operation succeeded, and an empty list does not prove that it had no effect. minLength: 1. maxLength: 255.
     * @return string
     * @throws SdkError When idempotency_key is omitted; use hasIdempotencyKey() or valueOrDefault().
     */
    public function getIdempotencyKey(): string { return $this->get('idempotency_key'); }
    public function hasIdempotencyKey(): bool { return $this->has('idempotency_key'); }
    /** Maximum number of results to return, from 1 to 100. Defaults to 20. Format: int32. minimum: 1. maximum: 100. Default: 20.
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
    /** Search by return receipt ID or external reference ID.
     * @return string
     * @throws SdkError When query is omitted; use hasQuery() or valueOrDefault().
     */
    public function getQuery(): string { return $this->get('query'); }
    public function hasQuery(): bool { return $this->has('query'); }
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
    /** Filter by receiving location id. Example: "loc_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When receiving_location_id is omitted; use hasReceivingLocationId() or valueOrDefault().
     */
    public function getReceivingLocationId(): string { return $this->get('receiving_location_id'); }
    public function hasReceivingLocationId(): bool { return $this->has('receiving_location_id'); }
    /** Filter by return id. Example: "ret_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When return_id is omitted; use hasReturnId() or valueOrDefault().
     */
    public function getReturnId(): string { return $this->get('return_id'); }
    public function hasReturnId(): bool { return $this->has('return_id'); }
    /** Filter by return line item id. Example: "retli_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When return_line_item_id is omitted; use hasReturnLineItemId() or valueOrDefault().
     */
    public function getReturnLineItemId(): string { return $this->get('return_line_item_id'); }
    public function hasReturnLineItemId(): bool { return $this->has('return_line_item_id'); }
    /** Filter by shipment id. Example: "shp_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When shipment_id is omitted; use hasShipmentId() or valueOrDefault().
     */
    public function getShipmentId(): string { return $this->get('shipment_id'); }
    public function hasShipmentId(): bool { return $this->has('shipment_id'); }
    /** Filter by source system type. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. [] enum: "manual", "pos", "wms", "erp", "other", "flint". Value enum: "manual", "pos", "wms", "erp", "other", "flint". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "manual", "pos", "wms", "erp", "other", "flint". anyOf[1][] (Value): string.  Value enum: "manual", "pos", "wms", "erp", "other", "flint". anyOf[2] (Value): string.  Value enum: "manual", "pos", "wms", "erp", "other", "flint".
     * @return list<string>|string
     * @throws SdkError When source_system_type is omitted; use hasSourceSystemType() or valueOrDefault().
     */
    public function getSourceSystemType(): mixed { return $this->get('source_system_type'); }
    public function hasSourceSystemType(): bool { return $this->has('source_system_type'); }
    /** Filter by status. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. [] enum: "current", "superseded". Value enum: "current", "superseded". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "current", "superseded". anyOf[1][] (Value): string.  Value enum: "current", "superseded". anyOf[2] (Value): string.  Value enum: "current", "superseded".
     * @return list<string>|string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): mixed { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Inclusive lower bound on updated_at. Format: date-time. Example: "2026-03-17T14:30:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When updated_after is omitted; use hasUpdatedAfter() or valueOrDefault().
     */
    public function getUpdatedAfter(): string|\DateTimeInterface { return $this->get('updated_after'); }
    public function hasUpdatedAfter(): bool { return $this->has('updated_after'); }
    /** Exclusive upper bound on updated_at. Format: date-time. Example: "2026-03-17T14:30:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When updated_before is omitted; use hasUpdatedBefore() or valueOrDefault().
     */
    public function getUpdatedBefore(): string|\DateTimeInterface { return $this->get('updated_before'); }
    public function hasUpdatedBefore(): bool { return $this->has('updated_before'); }
    /** Filter by verification status. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. [] enum: "matched", "unverified", "excess". Value enum: "matched", "unverified", "excess". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "matched", "unverified", "excess". anyOf[1][] (Value): string.  Value enum: "matched", "unverified", "excess". anyOf[2] (Value): string.  Value enum: "matched", "unverified", "excess".
     * @return list<string>|string
     * @throws SdkError When verification_status is omitted; use hasVerificationStatus() or valueOrDefault().
     */
    public function getVerificationStatus(): mixed { return $this->get('verification_status'); }
    public function hasVerificationStatus(): bool { return $this->has('verification_status'); }
}
