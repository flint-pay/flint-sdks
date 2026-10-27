<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $fulfillment_id
 * @property-read string $order_id
 * @property-read string $fulfillment_event_id
 * @property-read int $page_size
 * @property-read string $page_token
 * @property-read list<string> $channel
 * @property-read list<string> $status
 * @property-read list<string> $notification_type
 * @property-read list<string> $expand
 * Presence-aware input; omitted fields throw when accessed. */
final class FulfillmentNotificationsListInput extends Model {
    /** @param array{'fulfillment_id'?: string, 'order_id'?: string, 'fulfillment_event_id'?: string, 'page_size'?: int, 'page_token'?: string, 'channel'?: list<string>, 'status'?: list<string>, 'notification_type'?: list<string>, 'expand'?: list<string>}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('FulfillmentNotificationsListInput')); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When fulfillment_id is omitted; use hasFulfillmentId() or valueOrDefault().
     */
    public function getFulfillmentId(): string { return $this->get('fulfillment_id'); }
    public function hasFulfillmentId(): bool { return $this->has('fulfillment_id'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When order_id is omitted; use hasOrderId() or valueOrDefault().
     */
    public function getOrderId(): string { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When fulfillment_event_id is omitted; use hasFulfillmentEventId() or valueOrDefault().
     */
    public function getFulfillmentEventId(): string { return $this->get('fulfillment_event_id'); }
    public function hasFulfillmentEventId(): bool { return $this->has('fulfillment_event_id'); }
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
    /** Shape $ (Value): Array of string. minItems: 1. [] enum: "email". Shape $[] (Value): string.  Value enum: "email".
     * @return list<string>
     * @throws SdkError When channel is omitted; use hasChannel() or valueOrDefault().
     */
    public function getChannel(): array { return $this->get('channel'); }
    public function hasChannel(): bool { return $this->has('channel'); }
    /** Shape $ (Value): Array of string. minItems: 1. [] enum: "pending", "sent", "failed", "suppressed". Shape $[] (Value): string.  Value enum: "pending", "sent", "failed", "suppressed".
     * @return list<string>
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): array { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Shape $ (Value): Array of string. minItems: 1. [] enum: "fulfillment_canceled", "fulfillment_completed", "fulfillment_delivered", "fulfillment_dispatched", "fulfillment_failed", "fulfillment_no_show", "fulfillment_ready", "fulfillment_shipped", "shipment_delivered", "shipment_delivery_attempted", "shipment_exception", "shipment_out_for_delivery", "shipment_returned", "shipment_shipped". Shape $[] (Value): string.  Value enum: "fulfillment_canceled", "fulfillment_completed", "fulfillment_delivered", "fulfillment_dispatched", "fulfillment_failed", "fulfillment_no_show", "fulfillment_ready", "fulfillment_shipped", "shipment_delivered", "shipment_delivery_attempted", "shipment_exception", "shipment_out_for_delivery", "shipment_returned", "shipment_shipped".
     * @return list<string>
     * @throws SdkError When notification_type is omitted; use hasNotificationType() or valueOrDefault().
     */
    public function getNotificationType(): array { return $this->get('notification_type'); }
    public function hasNotificationType(): bool { return $this->has('notification_type'); }
    /** Shape $ (Value): Array of string.  [] enum: "order". Shape $[] (Value): string.  Value enum: "order".
     * @return list<string>
     * @throws SdkError When expand is omitted; use hasExpand() or valueOrDefault().
     */
    public function getExpand(): array { return $this->get('expand'); }
    public function hasExpand(): bool { return $this->has('expand'); }
}
