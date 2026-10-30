<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read AddressInput|array<array-key, mixed>|\stdClass $address
 * @property-read string $curbside_instructions
 * @property-read string|\DateTimeInterface $customer_arrived_at
 * @property-read string|\DateTimeInterface $expires_at
 * @property-read string $instructions
 * @property-read string $location_name
 * @property-read string|\DateTimeInterface $picked_up_at
 * @property-read string $pickup_mode
 * @property-read int $pickup_window_duration_seconds
 * @property-read int $prep_time_duration_seconds
 * @property-read string|\DateTimeInterface $ready_at
 * @property-read string $timezone
 * @property-read string $vehicle_description
 * @property-read string|\DateTimeInterface $window_end_at
 * @property-read string|\DateTimeInterface $window_start_at
 * Presence-aware input; omitted fields throw when accessed. */
final class PickupFulfillmentDetailsInput extends Model {
    /** @param array{'address'?: AddressInput|array<array-key, mixed>|\stdClass, 'curbside_instructions'?: string, 'customer_arrived_at'?: string|\DateTimeInterface, 'expires_at'?: string|\DateTimeInterface, 'instructions'?: string, 'location_name'?: string, 'picked_up_at'?: string|\DateTimeInterface, 'pickup_mode'?: string, 'pickup_window_duration_seconds'?: int, 'prep_time_duration_seconds'?: int, 'ready_at'?: string|\DateTimeInterface, 'timezone'?: string, 'vehicle_description'?: string, 'window_end_at'?: string|\DateTimeInterface, 'window_start_at'?: string|\DateTimeInterface, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PickupFulfillmentDetailsInput')); }
    /** Address where the buyer collects the order. A postal address. Every address has country. Addresses Flint checked as complete (customer and saved addresses, merchant, location, invoice, order delivery destination, tax identity, fulfillment recipient and pickup addresses) always have line1 and city, and US ones always have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax locations hold only what was provided, such as postal_code and country.
     * @return AddressInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When address is omitted; use hasAddress() or valueOrDefault().
     */
    public function getAddress(): mixed { return $this->get('address'); }
    public function hasAddress(): bool { return $this->has('address'); }
    /** Instructions specific to curbside handoff. maxLength: 2048.
     * @return string
     * @throws SdkError When curbside_instructions is omitted; use hasCurbsideInstructions() or valueOrDefault().
     */
    public function getCurbsideInstructions(): string { return $this->get('curbside_instructions'); }
    public function hasCurbsideInstructions(): bool { return $this->has('curbside_instructions'); }
    /** Buyer-reported arrival time for curbside or counter pickup. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When customer_arrived_at is omitted; use hasCustomerArrivedAt() or valueOrDefault().
     */
    public function getCustomerArrivedAt(): string|\DateTimeInterface { return $this->get('customer_arrived_at'); }
    public function hasCustomerArrivedAt(): bool { return $this->has('customer_arrived_at'); }
    /** Deadline after which an uncollected pickup should enter merchant review. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When expires_at is omitted; use hasExpiresAt() or valueOrDefault().
     */
    public function getExpiresAt(): string|\DateTimeInterface { return $this->get('expires_at'); }
    public function hasExpiresAt(): bool { return $this->has('expires_at'); }
    /** Pickup instructions for the buyer, such as where to go on arrival.
     * @return string
     * @throws SdkError When instructions is omitted; use hasInstructions() or valueOrDefault().
     */
    public function getInstructions(): string { return $this->get('instructions'); }
    public function hasInstructions(): bool { return $this->has('instructions'); }
    /** Name of the store or place where the buyer collects the order.
     * @return string
     * @throws SdkError When location_name is omitted; use hasLocationName() or valueOrDefault().
     */
    public function getLocationName(): string { return $this->get('location_name'); }
    public function hasLocationName(): bool { return $this->has('location_name'); }
    /** When the recipient collected the items, in RFC3339 format. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When picked_up_at is omitted; use hasPickedUpAt() or valueOrDefault().
     */
    public function getPickedUpAt(): string|\DateTimeInterface { return $this->get('picked_up_at'); }
    public function hasPickedUpAt(): bool { return $this->has('picked_up_at'); }
    /** How the buyer collects the items, such as in store or curbside. Value enum: "in_store", "curbside", "locker", "other".
     * @return string
     * @throws SdkError When pickup_mode is omitted; use hasPickupMode() or valueOrDefault().
     */
    public function getPickupMode(): string { return $this->get('pickup_mode'); }
    public function hasPickupMode(): bool { return $this->has('pickup_mode'); }
    /** Width of the promised pickup window, from 0 to 86400 seconds. Format: int64. minimum: 0. maximum: 86400.
     * @return int
     * @throws SdkError When pickup_window_duration_seconds is omitted; use hasPickupWindowDurationSeconds() or valueOrDefault().
     */
    public function getPickupWindowDurationSeconds(): int { return $this->get('pickup_window_duration_seconds'); }
    public function hasPickupWindowDurationSeconds(): bool { return $this->has('pickup_window_duration_seconds'); }
    /** Expected preparation time for restaurant and made-to-order pickup, from 0 to 86400 seconds. Format: int64. minimum: 0. maximum: 86400.
     * @return int
     * @throws SdkError When prep_time_duration_seconds is omitted; use hasPrepTimeDurationSeconds() or valueOrDefault().
     */
    public function getPrepTimeDurationSeconds(): int { return $this->get('prep_time_duration_seconds'); }
    public function hasPrepTimeDurationSeconds(): bool { return $this->has('prep_time_duration_seconds'); }
    /** When the items became ready for pickup, in RFC3339 format. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When ready_at is omitted; use hasReadyAt() or valueOrDefault().
     */
    public function getReadyAt(): string|\DateTimeInterface { return $this->get('ready_at'); }
    public function hasReadyAt(): bool { return $this->has('ready_at'); }
    /** Timezone used to display the pickup window.
     * @return string
     * @throws SdkError When timezone is omitted; use hasTimezone() or valueOrDefault().
     */
    public function getTimezone(): string { return $this->get('timezone'); }
    public function hasTimezone(): bool { return $this->has('timezone'); }
    /** Buyer vehicle description used for curbside handoff. Omitted for a checkout session credential that doesn't act for the customer the buyer verified. maxLength: 500.
     * @return string
     * @throws SdkError When vehicle_description is omitted; use hasVehicleDescription() or valueOrDefault().
     */
    public function getVehicleDescription(): string { return $this->get('vehicle_description'); }
    public function hasVehicleDescription(): bool { return $this->has('vehicle_description'); }
    /** End of the promised pickup window, in RFC3339 format. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When window_end_at is omitted; use hasWindowEndAt() or valueOrDefault().
     */
    public function getWindowEndAt(): string|\DateTimeInterface { return $this->get('window_end_at'); }
    public function hasWindowEndAt(): bool { return $this->has('window_end_at'); }
    /** Start of the promised pickup window, in RFC3339 format. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When window_start_at is omitted; use hasWindowStartAt() or valueOrDefault().
     */
    public function getWindowStartAt(): string|\DateTimeInterface { return $this->get('window_start_at'); }
    public function hasWindowStartAt(): bool { return $this->has('window_start_at'); }
}
