<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read bool $replayed
 * @property-read ShipmentInput|array<array-key, mixed>|\stdClass $shipment
 * Presence-aware input; omitted fields throw when accessed. */
final class CreateShipmentResultInput extends Model {
    /** @param array{'replayed'?: bool, 'shipment': ShipmentInput|array<array-key, mixed>|\stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreateShipmentResultInput')); }
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
