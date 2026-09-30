<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read FulfillmentEvent $fulfillment_event
 * @property-read list<FulfillmentNotification> $fulfillment_notifications
 * @property-read Package $package
 * Presence-aware response; omitted fields throw when accessed. */
final class UpdatePackageResult extends Model {
    /** @param array{'fulfillment_event'?: mixed, 'fulfillment_notifications'?: list<mixed>, 'package': mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('UpdatePackageResult')); }
    /** @return FulfillmentEvent
     * @throws SdkError When fulfillment_event is omitted; use hasFulfillmentEvent() or valueOrDefault().
     */
    public function getFulfillmentEvent(): FulfillmentEvent { return $this->get('fulfillment_event'); }
    public function hasFulfillmentEvent(): bool { return $this->has('fulfillment_event'); }
    /** @return list<FulfillmentNotification>
     * @throws SdkError When fulfillment_notifications is omitted; use hasFulfillmentNotifications() or valueOrDefault().
     */
    public function getFulfillmentNotifications(): array { return $this->get('fulfillment_notifications'); }
    public function hasFulfillmentNotifications(): bool { return $this->has('fulfillment_notifications'); }
    /** @return Package
     * @throws SdkError When package is omitted; use hasPackage() or valueOrDefault().
     */
    public function getPackage(): Package { return $this->get('package'); }
    public function hasPackage(): bool { return $this->has('package'); }
}
