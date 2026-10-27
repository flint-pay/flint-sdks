<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<PackageInput|array<array-key, mixed>|\stdClass> $packages
 * @property-read ShipmentInput|array<array-key, mixed>|\stdClass $shipment
 * Presence-aware input; omitted fields throw when accessed. */
final class VoidShipmentResultInput extends Model {
    /** @param array{'packages': list<PackageInput|array<array-key, mixed>|\stdClass>, 'shipment': ShipmentInput|array<array-key, mixed>|\stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('VoidShipmentResultInput')); }
    /** Shape $ (Value): Array of {@see PackageInput}. Shape $[] (Value): {@see PackageInput}. A package within a shipment.
     * @return list<PackageInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When packages is omitted; use hasPackages() or valueOrDefault().
     */
    public function getPackages(): array { return $this->get('packages'); }
    public function hasPackages(): bool { return $this->has('packages'); }
    /** Shape $ (Value): {@see ShipmentInput}. A shipment carrying fulfilled order items.
     * @return ShipmentInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When shipment is omitted; use hasShipment() or valueOrDefault().
     */
    public function getShipment(): mixed { return $this->get('shipment'); }
    public function hasShipment(): bool { return $this->has('shipment'); }
}
