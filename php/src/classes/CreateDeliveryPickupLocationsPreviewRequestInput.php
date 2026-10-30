<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read DeliveryBuyerLocationRequestInput|array<array-key, mixed>|\stdClass $buyer_location
 * @property-read string $checkout_session_id
 * @property-read DeliveryPickupAvailabilityMaximumDistanceRequestInput|array<array-key, mixed>|\stdClass $maximum_distance
 * @property-read string $mode
 * Presence-aware input; omitted fields throw when accessed. */
final class CreateDeliveryPickupLocationsPreviewRequestInput extends Model {
    /** @param array{'buyer_location'?: DeliveryBuyerLocationRequestInput|array<array-key, mixed>|\stdClass, 'checkout_session_id': string, 'maximum_distance'?: DeliveryPickupAvailabilityMaximumDistanceRequestInput|array<array-key, mixed>|\stdClass, 'mode': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreateDeliveryPickupLocationsPreviewRequestInput')); }
    /** The buyer's location for pickup or local delivery, supplied as an address or a coordinate, chosen by `type`.
     * @return DeliveryBuyerLocationRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When buyer_location is omitted; use hasBuyerLocation() or valueOrDefault().
     */
    public function getBuyerLocation(): mixed { return $this->get('buyer_location'); }
    public function hasBuyerLocation(): bool { return $this->has('buyer_location'); }
    /** Checkout session whose pickup locations to evaluate. Checkout credentials must identify their own session. minLength: 1.
     * @return string
     * @throws SdkError When checkout_session_id is omitted; use hasCheckoutSessionId() or valueOrDefault().
     */
    public function getCheckoutSessionId(): string { return $this->get('checkout_session_id'); }
    public function hasCheckoutSessionId(): bool { return $this->has('checkout_session_id'); }
    /** A maximum distance from the buyer location, as a value and unit, that limits which pickup locations a preview returns.
     * @return DeliveryPickupAvailabilityMaximumDistanceRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When maximum_distance is omitted; use hasMaximumDistance() or valueOrDefault().
     */
    public function getMaximumDistance(): mixed { return $this->get('maximum_distance'); }
    public function hasMaximumDistance(): bool { return $this->has('maximum_distance'); }
    /** The delivery question this preview answers. - `pickup_locations`: Lists the checkout session's pickup locations and whether each can supply its items. Value enum: "pickup_locations".
     * @return string
     * @throws SdkError When mode is omitted; use hasMode() or valueOrDefault().
     */
    public function getMode(): string { return $this->get('mode'); }
    public function hasMode(): bool { return $this->has('mode'); }
}
