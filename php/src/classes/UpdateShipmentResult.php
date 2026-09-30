<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read Shipment $shipment
 * Presence-aware response; omitted fields throw when accessed. */
final class UpdateShipmentResult extends Model {
    /** @param array{'shipment': mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('UpdateShipmentResult')); }
    /** @return Shipment
     * @throws SdkError When shipment is omitted; use hasShipment() or valueOrDefault().
     */
    public function getShipment(): Shipment { return $this->get('shipment'); }
    public function hasShipment(): bool { return $this->has('shipment'); }
}
