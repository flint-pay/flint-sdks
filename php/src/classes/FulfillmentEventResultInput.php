<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read FulfillmentInput|array<array-key, mixed>|\stdClass $fulfillment
 * @property-read FulfillmentEventInput|array<array-key, mixed>|\stdClass $fulfillment_event
 * @property-read list<FulfillmentNotificationInput|array<array-key, mixed>|\stdClass> $fulfillment_notifications
 * @property-read PackageInput|array<array-key, mixed>|\stdClass $package
 * @property-read bool $replayed
 * @property-read ShipmentInput|array<array-key, mixed>|\stdClass $shipment
 * Presence-aware input; omitted fields throw when accessed. */
final class FulfillmentEventResultInput extends Model {
    /** @param array{'fulfillment'?: FulfillmentInput|array<array-key, mixed>|\stdClass, 'fulfillment_event': FulfillmentEventInput|array<array-key, mixed>|\stdClass, 'fulfillment_notifications'?: list<FulfillmentNotificationInput|array<array-key, mixed>|\stdClass>, 'package'?: PackageInput|array<array-key, mixed>|\stdClass, 'replayed'?: bool, 'shipment'?: ShipmentInput|array<array-key, mixed>|\stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('FulfillmentEventResultInput')); }
    /** @return FulfillmentInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When fulfillment is omitted; use hasFulfillment() or valueOrDefault().
     */
    public function getFulfillment(): mixed { return $this->get('fulfillment'); }
    public function hasFulfillment(): bool { return $this->has('fulfillment'); }
    /** @return FulfillmentEventInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When fulfillment_event is omitted; use hasFulfillmentEvent() or valueOrDefault().
     */
    public function getFulfillmentEvent(): mixed { return $this->get('fulfillment_event'); }
    public function hasFulfillmentEvent(): bool { return $this->has('fulfillment_event'); }
    /** @return list<FulfillmentNotificationInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When fulfillment_notifications is omitted; use hasFulfillmentNotifications() or valueOrDefault().
     */
    public function getFulfillmentNotifications(): array { return $this->get('fulfillment_notifications'); }
    public function hasFulfillmentNotifications(): bool { return $this->has('fulfillment_notifications'); }
    /** @return PackageInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When package is omitted; use hasPackage() or valueOrDefault().
     */
    public function getPackage(): mixed { return $this->get('package'); }
    public function hasPackage(): bool { return $this->has('package'); }
    /** @return bool
     * @throws SdkError When replayed is omitted; use hasReplayed() or valueOrDefault().
     */
    public function getReplayed(): bool { return $this->get('replayed'); }
    public function hasReplayed(): bool { return $this->has('replayed'); }
    /** @return ShipmentInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When shipment is omitted; use hasShipment() or valueOrDefault().
     */
    public function getShipment(): mixed { return $this->get('shipment'); }
    public function hasShipment(): bool { return $this->has('shipment'); }
}
