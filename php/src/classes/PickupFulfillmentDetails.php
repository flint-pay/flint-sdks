<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?Address $address
 * @property-read ?string $curbside_instructions
 * @property-read ?string $customer_arrived_at
 * @property-read ?string $expires_at
 * @property-read ?string $instructions
 * @property-read ?string $location_name
 * @property-read ?string $picked_up_at
 * @property-read ?string $pickup_mode
 * @property-read ?string $pickup_window_duration_seconds
 * @property-read ?string $prep_time_duration_seconds
 * @property-read ?string $ready_at
 * @property-read ?string $timezone
 * @property-read ?string $vehicle_description
 * @property-read ?string $window_end_at
 * @property-read ?string $window_start_at
 * Presence-aware response; omitted optional fields return null. */
final class PickupFulfillmentDetails extends Model {
    /** @param array{'address'?: mixed, 'curbside_instructions'?: string, 'customer_arrived_at'?: string, 'expires_at'?: string, 'instructions'?: string, 'location_name'?: string, 'picked_up_at'?: string, 'pickup_mode'?: string, 'pickup_window_duration_seconds'?: string, 'prep_time_duration_seconds'?: string, 'ready_at'?: string, 'timezone'?: string, 'vehicle_description'?: string, 'window_end_at'?: string, 'window_start_at'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PickupFulfillmentDetails')); }
    /** Shape $ (Value): {@see Address}. Address where the buyer collects the order. A postal address. Every address has country. Addresses Flint checked as complete (customer and saved addresses, merchant, location, invoice, order delivery destination, tax identity, fulfillment recipient and pickup addresses) always have line1 and city, and US ones always have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax locations hold only what was provided, such as postal_code and country.
     * @return ?Address
     */
    public function getAddress(): ?Address { return $this->get('address'); }
    public function hasAddress(): bool { return $this->has('address'); }
    /** Shape $ (Value): string. Instructions specific to curbside handoff. maxLength: 2048.
     * @return ?string
     */
    public function getCurbsideInstructions(): ?string { return $this->get('curbside_instructions'); }
    public function hasCurbsideInstructions(): bool { return $this->has('curbside_instructions'); }
    /** Shape $ (Value): string. Buyer-reported arrival time for curbside or counter pickup. Format: date-time.
     * @return ?string
     */
    public function getCustomerArrivedAt(): ?string { return $this->get('customer_arrived_at'); }
    public function hasCustomerArrivedAt(): bool { return $this->has('customer_arrived_at'); }
    /** Shape $ (Value): string. Deadline after which an uncollected pickup should enter merchant review. Format: date-time.
     * @return ?string
     */
    public function getExpiresAt(): ?string { return $this->get('expires_at'); }
    public function hasExpiresAt(): bool { return $this->has('expires_at'); }
    /** Shape $ (Value): string. Pickup instructions for the buyer, such as where to go on arrival.
     * @return ?string
     */
    public function getInstructions(): ?string { return $this->get('instructions'); }
    public function hasInstructions(): bool { return $this->has('instructions'); }
    /** Shape $ (Value): string. Name of the store or place where the buyer collects the order.
     * @return ?string
     */
    public function getLocationName(): ?string { return $this->get('location_name'); }
    public function hasLocationName(): bool { return $this->has('location_name'); }
    /** Shape $ (Value): string. When the recipient collected the items, in RFC3339 format. Format: date-time.
     * @return ?string
     */
    public function getPickedUpAt(): ?string { return $this->get('picked_up_at'); }
    public function hasPickedUpAt(): bool { return $this->has('picked_up_at'); }
    /** Shape $ (Value): string. How the buyer collects the items, such as in store or curbside. Value enum: "in_store", "curbside", "locker", "other".
     * @return ?string
     */
    public function getPickupMode(): ?string { return $this->get('pickup_mode'); }
    public function hasPickupMode(): bool { return $this->has('pickup_mode'); }
    /** Shape $ (Value): integer string. Width of the promised pickup window, from 0 to 86400 seconds. Use an integer string (decimal digits), not a floating-point number. Format: int64. minimum: 0. maximum: 86400.
     * @return ?string
     */
    public function getPickupWindowDurationSeconds(): ?string { return $this->get('pickup_window_duration_seconds'); }
    public function hasPickupWindowDurationSeconds(): bool { return $this->has('pickup_window_duration_seconds'); }
    /** Shape $ (Value): integer string. Expected preparation time for restaurant and made-to-order pickup, from 0 to 86400 seconds. Use an integer string (decimal digits), not a floating-point number. Format: int64. minimum: 0. maximum: 86400.
     * @return ?string
     */
    public function getPrepTimeDurationSeconds(): ?string { return $this->get('prep_time_duration_seconds'); }
    public function hasPrepTimeDurationSeconds(): bool { return $this->has('prep_time_duration_seconds'); }
    /** Shape $ (Value): string. When the items became ready for pickup, in RFC3339 format. Format: date-time.
     * @return ?string
     */
    public function getReadyAt(): ?string { return $this->get('ready_at'); }
    public function hasReadyAt(): bool { return $this->has('ready_at'); }
    /** Shape $ (Value): string. Timezone used to display the pickup window.
     * @return ?string
     */
    public function getTimezone(): ?string { return $this->get('timezone'); }
    public function hasTimezone(): bool { return $this->has('timezone'); }
    /** Shape $ (Value): string. Buyer vehicle description used for curbside handoff. Omitted for a checkout session credential that doesn't act for the customer the buyer verified. maxLength: 500.
     * @return ?string
     */
    public function getVehicleDescription(): ?string { return $this->get('vehicle_description'); }
    public function hasVehicleDescription(): bool { return $this->has('vehicle_description'); }
    /** Shape $ (Value): string. End of the promised pickup window, in RFC3339 format. Format: date-time.
     * @return ?string
     */
    public function getWindowEndAt(): ?string { return $this->get('window_end_at'); }
    public function hasWindowEndAt(): bool { return $this->has('window_end_at'); }
    /** Shape $ (Value): string. Start of the promised pickup window, in RFC3339 format. Format: date-time.
     * @return ?string
     */
    public function getWindowStartAt(): ?string { return $this->get('window_start_at'); }
    public function hasWindowStartAt(): bool { return $this->has('window_start_at'); }
}
