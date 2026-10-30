<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $shipment_id
 * Presence-aware input; omitted fields throw when accessed. */
final class MeGetShipmentInput extends Model {
    /** @param array{'shipment_id': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('MeGetShipmentInput')); }
    /** Flint shipment ID. Example: "shp_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When shipment_id is omitted; use hasShipmentId() or valueOrDefault().
     */
    public function getShipmentId(): string { return $this->get('shipment_id'); }
    public function hasShipmentId(): bool { return $this->has('shipment_id'); }
}
