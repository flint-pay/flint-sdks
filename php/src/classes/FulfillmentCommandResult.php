<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read FulfillmentEvent $event
 * @property-read Fulfillment $fulfillment
 * @property-read list<FulfillmentNotification> $fulfillment_notifications
 * @property-read bool $unchanged
 * Presence-aware response; omitted fields throw when accessed. */
final class FulfillmentCommandResult extends Model {
    /** @param array{'event'?: mixed, 'fulfillment': mixed, 'fulfillment_notifications'?: list<mixed>, 'unchanged'?: bool, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('FulfillmentCommandResult')); }
    /** @return FulfillmentEvent
     * @throws SdkError When event is omitted; use hasEvent() or valueOrDefault().
     */
    public function getEvent(): FulfillmentEvent { return $this->get('event'); }
    public function hasEvent(): bool { return $this->has('event'); }
    /** @return Fulfillment
     * @throws SdkError When fulfillment is omitted; use hasFulfillment() or valueOrDefault().
     */
    public function getFulfillment(): Fulfillment { return $this->get('fulfillment'); }
    public function hasFulfillment(): bool { return $this->has('fulfillment'); }
    /** @return list<FulfillmentNotification>
     * @throws SdkError When fulfillment_notifications is omitted; use hasFulfillmentNotifications() or valueOrDefault().
     */
    public function getFulfillmentNotifications(): array { return $this->get('fulfillment_notifications'); }
    public function hasFulfillmentNotifications(): bool { return $this->has('fulfillment_notifications'); }
    /** @return bool
     * @throws SdkError When unchanged is omitted; use hasUnchanged() or valueOrDefault().
     */
    public function getUnchanged(): bool { return $this->get('unchanged'); }
    public function hasUnchanged(): bool { return $this->has('unchanged'); }
}
