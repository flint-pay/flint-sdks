<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read DeliveryBuyerLocationRequestInput|array<array-key, mixed>|\stdClass $buyer_location
 * @property-read string $expected_delivery_selection_id
 * @property-read DeliveryPickupAvailabilityMaximumDistanceRequestInput|array<array-key, mixed>|\stdClass $maximum_distance
 * Presence-aware input; omitted fields throw when accessed. */
final class QueryDeliveryPickupAvailabilityRequestInput extends Model {
    /** @param array{'buyer_location'?: DeliveryBuyerLocationRequestInput|array<array-key, mixed>|\stdClass, 'expected_delivery_selection_id'?: string, 'maximum_distance'?: DeliveryPickupAvailabilityMaximumDistanceRequestInput|array<array-key, mixed>|\stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('QueryDeliveryPickupAvailabilityRequestInput')); }
    /** @return DeliveryBuyerLocationRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When buyer_location is omitted; use hasBuyerLocation() or valueOrDefault().
     */
    public function getBuyerLocation(): mixed { return $this->get('buyer_location'); }
    public function hasBuyerLocation(): bool { return $this->has('buyer_location'); }
    /** @return string
     * @throws SdkError When expected_delivery_selection_id is omitted; use hasExpectedDeliverySelectionId() or valueOrDefault().
     */
    public function getExpectedDeliverySelectionId(): string { return $this->get('expected_delivery_selection_id'); }
    public function hasExpectedDeliverySelectionId(): bool { return $this->has('expected_delivery_selection_id'); }
    /** @return DeliveryPickupAvailabilityMaximumDistanceRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When maximum_distance is omitted; use hasMaximumDistance() or valueOrDefault().
     */
    public function getMaximumDistance(): mixed { return $this->get('maximum_distance'); }
    public function hasMaximumDistance(): bool { return $this->has('maximum_distance'); }
}
