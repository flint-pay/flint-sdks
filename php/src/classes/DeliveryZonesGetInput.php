<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $delivery_zone_id
 * Presence-aware input; omitted fields throw when accessed. */
final class DeliveryZonesGetInput extends Model {
    /** @param array{'delivery_zone_id': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryZonesGetInput')); }
    /** @return string
     * @throws SdkError When delivery_zone_id is omitted; use hasDeliveryZoneId() or valueOrDefault().
     */
    public function getDeliveryZoneId(): string { return $this->get('delivery_zone_id'); }
    public function hasDeliveryZoneId(): bool { return $this->has('delivery_zone_id'); }
}
