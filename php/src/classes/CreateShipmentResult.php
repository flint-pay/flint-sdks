<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read bool $replayed
 * @property-read Shipment $shipment
 * Presence-aware response; omitted fields throw when accessed. */
final class CreateShipmentResult extends Model {
    /** @param array{'replayed'?: bool, 'shipment': mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreateShipmentResult')); }
    /** @return bool
     * @throws SdkError When replayed is omitted; use hasReplayed() or valueOrDefault().
     */
    public function getReplayed(): bool { return $this->get('replayed'); }
    public function hasReplayed(): bool { return $this->has('replayed'); }
    /** @return Shipment
     * @throws SdkError When shipment is omitted; use hasShipment() or valueOrDefault().
     */
    public function getShipment(): Shipment { return $this->get('shipment'); }
    public function hasShipment(): bool { return $this->has('shipment'); }
}
