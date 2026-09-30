<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read DeliveryLocationSummaryResourceInput|array<array-key, mixed>|\stdClass $location
 * @property-read string $pickup_mode
 * Presence-aware input; omitted fields throw when accessed. */
final class DeliveryPickupDetailsInput extends Model {
    /** @param array{'location'?: DeliveryLocationSummaryResourceInput|array<array-key, mixed>|\stdClass, 'pickup_mode': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryPickupDetailsInput')); }
    /** @return DeliveryLocationSummaryResourceInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When location is omitted; use hasLocation() or valueOrDefault().
     */
    public function getLocation(): mixed { return $this->get('location'); }
    public function hasLocation(): bool { return $this->has('location'); }
    /** @return string
     * @throws SdkError When pickup_mode is omitted; use hasPickupMode() or valueOrDefault().
     */
    public function getPickupMode(): string { return $this->get('pickup_mode'); }
    public function hasPickupMode(): bool { return $this->has('pickup_mode'); }
}
