<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $order_id
 * @property-read string $fulfillment_id
 * @property-read int $page_size
 * @property-read string $page_token
 * @property-read string $external_system
 * @property-read string $external_reference_id
 * @property-read string $query
 * @property-read string $return_id
 * @property-read string|\DateTimeInterface $handed_off_after
 * @property-read string|\DateTimeInterface $handed_off_before
 * @property-read string|\DateTimeInterface $created_after
 * @property-read string|\DateTimeInterface $created_before
 * @property-read list<string>|string $status
 * @property-read list<string>|string $direction
 * @property-read string|\DateTimeInterface $updated_after
 * @property-read string|\DateTimeInterface $updated_before
 * @property-read list<string>|string $expand
 * Presence-aware input; omitted fields throw when accessed. */
final class ShipmentsListInput extends Model {
    /** @param array{'order_id'?: string, 'fulfillment_id'?: string, 'page_size'?: int, 'page_token'?: string, 'external_system'?: string, 'external_reference_id'?: string, 'query'?: string, 'return_id'?: string, 'handed_off_after'?: string|\DateTimeInterface, 'handed_off_before'?: string|\DateTimeInterface, 'created_after'?: string|\DateTimeInterface, 'created_before'?: string|\DateTimeInterface, 'status'?: list<string>|string, 'direction'?: list<string>|string, 'updated_after'?: string|\DateTimeInterface, 'updated_before'?: string|\DateTimeInterface, 'expand'?: list<string>|string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ShipmentsListInput')); }
    /** Optional order ID filter. Example: "ord_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When order_id is omitted; use hasOrderId() or valueOrDefault().
     */
    public function getOrderId(): string { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** Optional fulfillment ID filter. Example: "ful_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When fulfillment_id is omitted; use hasFulfillmentId() or valueOrDefault().
     */
    public function getFulfillmentId(): string { return $this->get('fulfillment_id'); }
    public function hasFulfillmentId(): bool { return $this->has('fulfillment_id'); }
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
    /** Filter by external system identifier.
     * @return string
     * @throws SdkError When external_system is omitted; use hasExternalSystem() or valueOrDefault().
     */
    public function getExternalSystem(): string { return $this->get('external_system'); }
    public function hasExternalSystem(): bool { return $this->has('external_system'); }
    /** Exact-match filter on the caller-owned external reference ID. minLength: 1. maxLength: 255.
     * @return string
     * @throws SdkError When external_reference_id is omitted; use hasExternalReferenceId() or valueOrDefault().
     */
    public function getExternalReferenceId(): string { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** Search across shipment ID and external reference ID. Text fields match any part of the value, and %, _ and \ are ordinary characters, not wildcards. IDs match from the start and need the type prefix, such as shp_01.
     * @return string
     * @throws SdkError When query is omitted; use hasQuery() or valueOrDefault().
     */
    public function getQuery(): string { return $this->get('query'); }
    public function hasQuery(): bool { return $this->has('query'); }
    /** Filter by linked Return ID. Example: "ret_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When return_id is omitted; use hasReturnId() or valueOrDefault().
     */
    public function getReturnId(): string { return $this->get('return_id'); }
    public function hasReturnId(): bool { return $this->has('return_id'); }
    /** Inclusive lower bound on handed_off_at. Format: date-time. Example: "2026-03-17T14:30:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When handed_off_after is omitted; use hasHandedOffAfter() or valueOrDefault().
     */
    public function getHandedOffAfter(): string|\DateTimeInterface { return $this->get('handed_off_after'); }
    public function hasHandedOffAfter(): bool { return $this->has('handed_off_after'); }
    /** Exclusive upper bound on handed_off_at. Format: date-time. Example: "2026-03-17T14:30:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When handed_off_before is omitted; use hasHandedOffBefore() or valueOrDefault().
     */
    public function getHandedOffBefore(): string|\DateTimeInterface { return $this->get('handed_off_before'); }
    public function hasHandedOffBefore(): bool { return $this->has('handed_off_before'); }
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
    /** Filter by package-derived shipment status. Values within this filter are combined with OR. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. [] enum: "created", "packed", "shipped", "in_transit", "out_for_delivery", "delivered", "delivery_attempted", "exception", "returned", "voided". Value enum: "created", "packed", "shipped", "in_transit", "out_for_delivery", "delivered", "delivery_attempted", "exception", "returned", "voided". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "created", "packed", "shipped", "in_transit", "out_for_delivery", "delivered", "delivery_attempted", "exception", "returned", "voided". anyOf[1][] (Value): string.  Value enum: "created", "packed", "shipped", "in_transit", "out_for_delivery", "delivered", "delivery_attempted", "exception", "returned", "voided". anyOf[2] (Value): string.  Value enum: "created", "packed", "shipped", "in_transit", "out_for_delivery", "delivered", "delivery_attempted", "exception", "returned", "voided".
     * @return list<string>|string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): mixed { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Filter by shipment direction. Values within this filter are combined with OR. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. [] enum: "outbound", "return". Value enum: "outbound", "return". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "outbound", "return". anyOf[1][] (Value): string.  Value enum: "outbound", "return". anyOf[2] (Value): string.  Value enum: "outbound", "return".
     * @return list<string>|string
     * @throws SdkError When direction is omitted; use hasDirection() or valueOrDefault().
     */
    public function getDirection(): mixed { return $this->get('direction'); }
    public function hasDirection(): bool { return $this->has('direction'); }
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
    /** Supported expansions: order. Include the requested related resources using scoped batch reads for this page. Each relationship requires its existing target read scopes. Expansion changes the representation without changing pagination tokens. Limits: at most 10 unique expand paths per request. Pass expand=order. [] enum: "order". Value enum: "order". anyOf[1] (Value): Array of string.  [] enum: "order". anyOf[1][] (Value): string.  Value enum: "order". anyOf[2] (Value): string.  Value enum: "order".
     * @return list<string>|string
     * @throws SdkError When expand is omitted; use hasExpand() or valueOrDefault().
     */
    public function getExpand(): mixed { return $this->get('expand'); }
    public function hasExpand(): bool { return $this->has('expand'); }
}
