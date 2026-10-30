<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $fulfillment_id
 * @property-read string $shipment_id
 * @property-read string $package_id
 * @property-read string $order_id
 * @property-read int $page_size
 * @property-read string $page_token
 * @property-read list<string>|string $event_type
 * @property-read string $external_system
 * @property-read string $external_event_id
 * @property-read string|\DateTimeInterface $occurred_after
 * @property-read string|\DateTimeInterface $occurred_before
 * @property-read string $sort_by
 * @property-read string $sort_direction
 * @property-read list<string>|string $expand
 * Presence-aware input; omitted fields throw when accessed. */
final class FulfillmentEventsListParams extends Model {
    /** @param array{'fulfillment_id'?: string, 'shipment_id'?: string, 'package_id'?: string, 'order_id'?: string, 'page_size'?: int, 'page_token'?: string, 'event_type'?: list<string>|string, 'external_system'?: string, 'external_event_id'?: string, 'occurred_after'?: string|\DateTimeInterface, 'occurred_before'?: string|\DateTimeInterface, 'sort_by'?: string, 'sort_direction'?: string, 'expand'?: list<string>|string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('FulfillmentEventsListParams')); }
    /** Optional fulfillment ID filter. Example: "ful_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When fulfillment_id is omitted; use hasFulfillmentId() or valueOrDefault().
     */
    public function getFulfillmentId(): string { return $this->get('fulfillment_id'); }
    public function hasFulfillmentId(): bool { return $this->has('fulfillment_id'); }
    /** Optional shipment ID filter. Example: "shp_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When shipment_id is omitted; use hasShipmentId() or valueOrDefault().
     */
    public function getShipmentId(): string { return $this->get('shipment_id'); }
    public function hasShipmentId(): bool { return $this->has('shipment_id'); }
    /** Optional package ID filter. Example: "pkg_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When package_id is omitted; use hasPackageId() or valueOrDefault().
     */
    public function getPackageId(): string { return $this->get('package_id'); }
    public function hasPackageId(): bool { return $this->has('package_id'); }
    /** Optional order ID filter. Example: "ord_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When order_id is omitted; use hasOrderId() or valueOrDefault().
     */
    public function getOrderId(): string { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
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
    /** Filter by fulfillment event type. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. [] enum: "carrier_scan", "status_changed", "shipped", "in_transit", "out_for_delivery", "delivered", "delivery_attempted", "tracking_updated", "exception", "returned", "custom". Value enum: "carrier_scan", "status_changed", "shipped", "in_transit", "out_for_delivery", "delivered", "delivery_attempted", "tracking_updated", "exception", "returned", "custom". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "carrier_scan", "status_changed", "shipped", "in_transit", "out_for_delivery", "delivered", "delivery_attempted", "tracking_updated", "exception", "returned", "custom". anyOf[1][] (Value): string.  Value enum: "carrier_scan", "status_changed", "shipped", "in_transit", "out_for_delivery", "delivered", "delivery_attempted", "tracking_updated", "exception", "returned", "custom". anyOf[2] (Value): string.  Value enum: "carrier_scan", "status_changed", "shipped", "in_transit", "out_for_delivery", "delivered", "delivery_attempted", "tracking_updated", "exception", "returned", "custom".
     * @return list<string>|string
     * @throws SdkError When event_type is omitted; use hasEventType() or valueOrDefault().
     */
    public function getEventType(): mixed { return $this->get('event_type'); }
    public function hasEventType(): bool { return $this->has('event_type'); }
    /** Filter by external system identifier.
     * @return string
     * @throws SdkError When external_system is omitted; use hasExternalSystem() or valueOrDefault().
     */
    public function getExternalSystem(): string { return $this->get('external_system'); }
    public function hasExternalSystem(): bool { return $this->has('external_system'); }
    /** Filter by external provider event ID.
     * @return string
     * @throws SdkError When external_event_id is omitted; use hasExternalEventId() or valueOrDefault().
     */
    public function getExternalEventId(): string { return $this->get('external_event_id'); }
    public function hasExternalEventId(): bool { return $this->has('external_event_id'); }
    /** Inclusive lower bound on occurred_at. Format: date-time. Example: "2026-03-17T14:30:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When occurred_after is omitted; use hasOccurredAfter() or valueOrDefault().
     */
    public function getOccurredAfter(): string|\DateTimeInterface { return $this->get('occurred_after'); }
    public function hasOccurredAfter(): bool { return $this->has('occurred_after'); }
    /** Exclusive upper bound on occurred_at. Format: date-time. Example: "2026-03-17T14:30:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When occurred_before is omitted; use hasOccurredBefore() or valueOrDefault().
     */
    public function getOccurredBefore(): string|\DateTimeInterface { return $this->get('occurred_before'); }
    public function hasOccurredBefore(): bool { return $this->has('occurred_before'); }
    /** Field to sort by. Defaults to received_at; ties are broken by fulfillment_event_id. Default: "received_at". Value enum: "received_at", "occurred_at".
     * @return string
     * @throws SdkError When sort_by is omitted; use hasSortBy() or valueOrDefault().
     */
    public function getSortBy(): string { return $this->get('sort_by'); }
    public function hasSortBy(): bool { return $this->has('sort_by'); }
    /** Sort direction. Defaults to desc. Default: "desc". Value enum: "asc", "desc".
     * @return string
     * @throws SdkError When sort_direction is omitted; use hasSortDirection() or valueOrDefault().
     */
    public function getSortDirection(): string { return $this->get('sort_direction'); }
    public function hasSortDirection(): bool { return $this->has('sort_direction'); }
    /** Supported expansions: order. Include the requested related resources using scoped batch reads for this page. Each relationship requires its existing target read scopes. Expansion changes the representation without changing pagination tokens. Limits: at most 10 unique expand paths per request. Pass expand=order. [] enum: "order". Value enum: "order". anyOf[1] (Value): Array of string.  [] enum: "order". anyOf[1][] (Value): string.  Value enum: "order". anyOf[2] (Value): string.  Value enum: "order".
     * @return list<string>|string
     * @throws SdkError When expand is omitted; use hasExpand() or valueOrDefault().
     */
    public function getExpand(): mixed { return $this->get('expand'); }
    public function hasExpand(): bool { return $this->has('expand'); }
}
