<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $fulfillment_id
 * @property-read string $order_id
 * @property-read string $fulfillment_event_id
 * @property-read int $page_size
 * @property-read string $page_token
 * @property-read list<string>|string $channel
 * @property-read list<string>|string $status
 * @property-read list<string>|string $notification_type
 * @property-read list<string>|string $expand
 * Presence-aware input; omitted fields throw when accessed. */
final class FulfillmentNotificationsListParams extends Model {
    /** @param array{'fulfillment_id'?: string, 'order_id'?: string, 'fulfillment_event_id'?: string, 'page_size'?: int, 'page_token'?: string, 'channel'?: list<string>|string, 'status'?: list<string>|string, 'notification_type'?: list<string>|string, 'expand'?: list<string>|string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('FulfillmentNotificationsListParams')); }
    /** Optional fulfillment ID filter. Example: "ful_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When fulfillment_id is omitted; use hasFulfillmentId() or valueOrDefault().
     */
    public function getFulfillmentId(): string { return $this->get('fulfillment_id'); }
    public function hasFulfillmentId(): bool { return $this->has('fulfillment_id'); }
    /** Optional order ID filter. Example: "ord_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When order_id is omitted; use hasOrderId() or valueOrDefault().
     */
    public function getOrderId(): string { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** Optional fulfillment event ID filter. Example: "fev_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When fulfillment_event_id is omitted; use hasFulfillmentEventId() or valueOrDefault().
     */
    public function getFulfillmentEventId(): string { return $this->get('fulfillment_event_id'); }
    public function hasFulfillmentEventId(): bool { return $this->has('fulfillment_event_id'); }
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
    /** Filter by notification channel. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. [] enum: "email". Value enum: "email". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "email". anyOf[1][] (Value): string.  Value enum: "email". anyOf[2] (Value): string.  Value enum: "email".
     * @return list<string>|string
     * @throws SdkError When channel is omitted; use hasChannel() or valueOrDefault().
     */
    public function getChannel(): mixed { return $this->get('channel'); }
    public function hasChannel(): bool { return $this->has('channel'); }
    /** Filter by notification status. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. [] enum: "pending", "sent", "failed", "suppressed". Value enum: "pending", "sent", "failed", "suppressed". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "pending", "sent", "failed", "suppressed". anyOf[1][] (Value): string.  Value enum: "pending", "sent", "failed", "suppressed". anyOf[2] (Value): string.  Value enum: "pending", "sent", "failed", "suppressed".
     * @return list<string>|string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): mixed { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Filter by notification type. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. [] enum: "fulfillment_canceled", "fulfillment_completed", "fulfillment_delivered", "fulfillment_dispatched", "fulfillment_failed", "fulfillment_no_show", "fulfillment_ready", "fulfillment_shipped", "shipment_delivered", "shipment_delivery_attempted", "shipment_exception", "shipment_out_for_delivery", "shipment_returned", "shipment_shipped". Value enum: "fulfillment_canceled", "fulfillment_completed", "fulfillment_delivered", "fulfillment_dispatched", "fulfillment_failed", "fulfillment_no_show", "fulfillment_ready", "fulfillment_shipped", "shipment_delivered", "shipment_delivery_attempted", "shipment_exception", "shipment_out_for_delivery", "shipment_returned", "shipment_shipped". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "fulfillment_canceled", "fulfillment_completed", "fulfillment_delivered", "fulfillment_dispatched", "fulfillment_failed", "fulfillment_no_show", "fulfillment_ready", "fulfillment_shipped", "shipment_delivered", "shipment_delivery_attempted", "shipment_exception", "shipment_out_for_delivery", "shipment_returned", "shipment_shipped". anyOf[1][] (Value): string.  Value enum: "fulfillment_canceled", "fulfillment_completed", "fulfillment_delivered", "fulfillment_dispatched", "fulfillment_failed", "fulfillment_no_show", "fulfillment_ready", "fulfillment_shipped", "shipment_delivered", "shipment_delivery_attempted", "shipment_exception", "shipment_out_for_delivery", "shipment_returned", "shipment_shipped". anyOf[2] (Value): string.  Value enum: "fulfillment_canceled", "fulfillment_completed", "fulfillment_delivered", "fulfillment_dispatched", "fulfillment_failed", "fulfillment_no_show", "fulfillment_ready", "fulfillment_shipped", "shipment_delivered", "shipment_delivery_attempted", "shipment_exception", "shipment_out_for_delivery", "shipment_returned", "shipment_shipped".
     * @return list<string>|string
     * @throws SdkError When notification_type is omitted; use hasNotificationType() or valueOrDefault().
     */
    public function getNotificationType(): mixed { return $this->get('notification_type'); }
    public function hasNotificationType(): bool { return $this->has('notification_type'); }
    /** Supported expansions: order. Include the requested related resources using scoped batch reads for this page. Each relationship requires its existing target read scopes. Expansion changes the representation without changing pagination tokens. Limits: at most 10 unique expand paths per request. Pass expand=order. [] enum: "order". Value enum: "order". anyOf[1] (Value): Array of string.  [] enum: "order". anyOf[1][] (Value): string.  Value enum: "order". anyOf[2] (Value): string.  Value enum: "order".
     * @return list<string>|string
     * @throws SdkError When expand is omitted; use hasExpand() or valueOrDefault().
     */
    public function getExpand(): mixed { return $this->get('expand'); }
    public function hasExpand(): bool { return $this->has('expand'); }
}
