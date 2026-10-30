<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $fulfillment_notification_id
 * @property-read list<string>|string $expand
 * Presence-aware input; omitted fields throw when accessed. */
final class FulfillmentNotificationsGetInput extends Model {
    /** @param array{'fulfillment_notification_id': string, 'expand'?: list<string>|string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('FulfillmentNotificationsGetInput')); }
    /** Flint fulfillment notification ID. Example: "fnt_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When fulfillment_notification_id is omitted; use hasFulfillmentNotificationId() or valueOrDefault().
     */
    public function getFulfillmentNotificationId(): string { return $this->get('fulfillment_notification_id'); }
    public function hasFulfillmentNotificationId(): bool { return $this->has('fulfillment_notification_id'); }
    /** Supported expansions: order. Expansion requires commerce.orders.read. Limits: at most 10 unique expand paths per request. Pass expand=order. [] enum: "order". Value enum: "order". anyOf[1] (Value): Array of string.  [] enum: "order". anyOf[1][] (Value): string.  Value enum: "order". anyOf[2] (Value): string.  Value enum: "order".
     * @return list<string>|string
     * @throws SdkError When expand is omitted; use hasExpand() or valueOrDefault().
     */
    public function getExpand(): mixed { return $this->get('expand'); }
    public function hasExpand(): bool { return $this->has('expand'); }
}
