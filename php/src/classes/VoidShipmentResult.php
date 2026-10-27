<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<Package> $packages
 * @property-read Shipment $shipment
 * Presence-aware response; omitted optional fields return null. */
final class VoidShipmentResult extends Model {
    /** @param array{'packages': list<mixed>, 'shipment': mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('VoidShipmentResult')); }
    /** Shape $ (Value): Array of {@see Package}. Shape $[] (Value): {@see Package}. A package within a shipment.
     * @return list<Package>
     */
    public function getPackages(): array { return $this->get('packages'); }
    public function hasPackages(): bool { return $this->has('packages'); }
    /** Shape $ (Value): {@see Shipment}. A shipment carrying fulfilled order items.
     * @return Shipment
     */
    public function getShipment(): Shipment { return $this->get('shipment'); }
    public function hasShipment(): bool { return $this->has('shipment'); }
}
