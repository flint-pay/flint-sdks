<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read DeliveryLocationSummaryResource $location
 * @property-read string $pickup_mode
 * Presence-aware response; omitted fields throw when accessed. */
final class DeliveryPickupDetails extends Model {
    /** @param array{'location'?: mixed, 'pickup_mode': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryPickupDetails')); }
    /** @return DeliveryLocationSummaryResource
     * @throws SdkError When location is omitted; use hasLocation() or valueOrDefault().
     */
    public function getLocation(): DeliveryLocationSummaryResource { return $this->get('location'); }
    public function hasLocation(): bool { return $this->has('location'); }
    /** @return string
     * @throws SdkError When pickup_mode is omitted; use hasPickupMode() or valueOrDefault().
     */
    public function getPickupMode(): string { return $this->get('pickup_mode'); }
    public function hasPickupMode(): bool { return $this->has('pickup_mode'); }
}
