<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<FulfillmentEvent> $events
 * @property-read list<FulfillmentNotification> $fulfillment_notifications
 * @property-read list<Package> $packages
 * @property-read Shipment $shipment
 * @property-read bool $unchanged
 * Presence-aware response; omitted fields throw when accessed. */
final class VoidShipmentResult extends Model {
    /** @param array{'events'?: list<mixed>, 'fulfillment_notifications'?: list<mixed>, 'packages'?: list<mixed>, 'shipment': mixed, 'unchanged'?: bool, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('VoidShipmentResult')); }
    /** @return list<FulfillmentEvent>
     * @throws SdkError When events is omitted; use hasEvents() or valueOrDefault().
     */
    public function getEvents(): array { return $this->get('events'); }
    public function hasEvents(): bool { return $this->has('events'); }
    /** @return list<FulfillmentNotification>
     * @throws SdkError When fulfillment_notifications is omitted; use hasFulfillmentNotifications() or valueOrDefault().
     */
    public function getFulfillmentNotifications(): array { return $this->get('fulfillment_notifications'); }
    public function hasFulfillmentNotifications(): bool { return $this->has('fulfillment_notifications'); }
    /** @return list<Package>
     * @throws SdkError When packages is omitted; use hasPackages() or valueOrDefault().
     */
    public function getPackages(): array { return $this->get('packages'); }
    public function hasPackages(): bool { return $this->has('packages'); }
    /** @return Shipment
     * @throws SdkError When shipment is omitted; use hasShipment() or valueOrDefault().
     */
    public function getShipment(): Shipment { return $this->get('shipment'); }
    public function hasShipment(): bool { return $this->has('shipment'); }
    /** @return bool
     * @throws SdkError When unchanged is omitted; use hasUnchanged() or valueOrDefault().
     */
    public function getUnchanged(): bool { return $this->get('unchanged'); }
    public function hasUnchanged(): bool { return $this->has('unchanged'); }
}
