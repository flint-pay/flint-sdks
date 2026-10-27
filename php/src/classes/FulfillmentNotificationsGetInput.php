<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $fulfillment_notification_id
 * @property-read list<string> $expand
 * Presence-aware input; omitted fields throw when accessed. */
final class FulfillmentNotificationsGetInput extends Model {
    /** @param array{'fulfillment_notification_id': string, 'expand'?: list<string>}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('FulfillmentNotificationsGetInput')); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When fulfillment_notification_id is omitted; use hasFulfillmentNotificationId() or valueOrDefault().
     */
    public function getFulfillmentNotificationId(): string { return $this->get('fulfillment_notification_id'); }
    public function hasFulfillmentNotificationId(): bool { return $this->has('fulfillment_notification_id'); }
    /** Shape $ (Value): Array of string.  [] enum: "order". Shape $[] (Value): string.  Value enum: "order".
     * @return list<string>
     * @throws SdkError When expand is omitted; use hasExpand() or valueOrDefault().
     */
    public function getExpand(): array { return $this->get('expand'); }
    public function hasExpand(): bool { return $this->has('expand'); }
}
