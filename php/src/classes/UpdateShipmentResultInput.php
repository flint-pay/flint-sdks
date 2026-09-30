<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ShipmentInput|array<array-key, mixed>|\stdClass $shipment
 * Presence-aware input; omitted fields throw when accessed. */
final class UpdateShipmentResultInput extends Model {
    /** @param array{'shipment': ShipmentInput|array<array-key, mixed>|\stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('UpdateShipmentResultInput')); }
    /** @return ShipmentInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When shipment is omitted; use hasShipment() or valueOrDefault().
     */
    public function getShipment(): mixed { return $this->get('shipment'); }
    public function hasShipment(): bool { return $this->has('shipment'); }
}
