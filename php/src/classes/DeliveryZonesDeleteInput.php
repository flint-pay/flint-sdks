<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $delivery_zone_id
 * @property-read int $expected_version
 * Presence-aware input; omitted fields throw when accessed. */
final class DeliveryZonesDeleteInput extends Model {
    /** @param array{'delivery_zone_id': string, 'expected_version'?: int}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryZonesDeleteInput')); }
    /** Flint delivery zone ID. Example: "dzone_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When delivery_zone_id is omitted; use hasDeliveryZoneId() or valueOrDefault().
     */
    public function getDeliveryZoneId(): string { return $this->get('delivery_zone_id'); }
    public function hasDeliveryZoneId(): bool { return $this->has('delivery_zone_id'); }
    /** Optional current resource version. The delete is rejected if the resource changed after this version was read. Format: uint64. minimum: 1.
     * @return int
     * @throws SdkError When expected_version is omitted; use hasExpectedVersion() or valueOrDefault().
     */
    public function getExpectedVersion(): int { return $this->get('expected_version'); }
    public function hasExpectedVersion(): bool { return $this->has('expected_version'); }
}
