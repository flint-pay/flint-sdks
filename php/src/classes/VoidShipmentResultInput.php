<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<FulfillmentEventInput|array<array-key, mixed>|\stdClass> $events
 * @property-read list<FulfillmentNotificationInput|array<array-key, mixed>|\stdClass> $fulfillment_notifications
 * @property-read list<PackageInput|array<array-key, mixed>|\stdClass> $packages
 * @property-read ShipmentInput|array<array-key, mixed>|\stdClass $shipment
 * @property-read bool $unchanged
 * Presence-aware input; omitted fields throw when accessed. */
final class VoidShipmentResultInput extends Model {
    /** @param array{'events'?: list<FulfillmentEventInput|array<array-key, mixed>|\stdClass>, 'fulfillment_notifications'?: list<FulfillmentNotificationInput|array<array-key, mixed>|\stdClass>, 'packages'?: list<PackageInput|array<array-key, mixed>|\stdClass>, 'shipment': ShipmentInput|array<array-key, mixed>|\stdClass, 'unchanged'?: bool, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('VoidShipmentResultInput')); }
    /** @return list<FulfillmentEventInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When events is omitted; use hasEvents() or valueOrDefault().
     */
    public function getEvents(): array { return $this->get('events'); }
    public function hasEvents(): bool { return $this->has('events'); }
    /** @return list<FulfillmentNotificationInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When fulfillment_notifications is omitted; use hasFulfillmentNotifications() or valueOrDefault().
     */
    public function getFulfillmentNotifications(): array { return $this->get('fulfillment_notifications'); }
    public function hasFulfillmentNotifications(): bool { return $this->has('fulfillment_notifications'); }
    /** @return list<PackageInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When packages is omitted; use hasPackages() or valueOrDefault().
     */
    public function getPackages(): array { return $this->get('packages'); }
    public function hasPackages(): bool { return $this->has('packages'); }
    /** @return ShipmentInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When shipment is omitted; use hasShipment() or valueOrDefault().
     */
    public function getShipment(): mixed { return $this->get('shipment'); }
    public function hasShipment(): bool { return $this->has('shipment'); }
    /** @return bool
     * @throws SdkError When unchanged is omitted; use hasUnchanged() or valueOrDefault().
     */
    public function getUnchanged(): bool { return $this->get('unchanged'); }
    public function hasUnchanged(): bool { return $this->has('unchanged'); }
}
