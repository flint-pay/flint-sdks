<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read array{'city': string, 'country': string, 'line1': string, 'line2'?: string|null, 'postal_code': string, 'state': string, ...}|object|null $address
 * @property-read string|null $curbside_instructions
 * @property-read string|\DateTimeInterface|null $customer_arrived_at
 * @property-read string|\DateTimeInterface|null $expires_at
 * @property-read string|null $instructions
 * @property-read string|null $location_name
 * @property-read string|\DateTimeInterface|null $picked_up_at
 * @property-read string|null $pickup_window_duration_seconds
 * @property-read string|null $prep_time_duration_seconds
 * @property-read string|\DateTimeInterface|null $ready_at
 * @property-read string $timezone
 * @property-read string|null $vehicle_description
 * @property-read string|\DateTimeInterface|null $window_end_at
 * @property-read string|\DateTimeInterface|null $window_start_at
 * Presence-aware input; omitted fields throw when accessed. */
final class UpdatePickupFulfillmentDetailsInput extends Model {
    /** @param array{'address'?: array{'city': string, 'country': string, 'line1': string, 'line2'?: string|null, 'postal_code': string, 'state': string, ...}|object|null, 'curbside_instructions'?: string|null, 'customer_arrived_at'?: string|\DateTimeInterface|null, 'expires_at'?: string|\DateTimeInterface|null, 'instructions'?: string|null, 'location_name'?: string|null, 'picked_up_at'?: string|\DateTimeInterface|null, 'pickup_window_duration_seconds'?: string|null, 'prep_time_duration_seconds'?: string|null, 'ready_at'?: string|\DateTimeInterface|null, 'timezone'?: string, 'vehicle_description'?: string|null, 'window_end_at'?: string|\DateTimeInterface|null, 'window_start_at'?: string|\DateTimeInterface|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('UpdatePickupFulfillmentDetailsInput')); }
    /** Shape $ (Value): {@see AddressRequestInput} or null. Address where the buyer collects the order. Shape $.anyOf[1] (Value): {@see AddressRequestInput}. A postal address you supply when creating or updating a customer, invoice, fulfillment, or delivery selection. Send null for `line2` to clear it. Shape $.anyOf[2] (Value): null.
     * @return array{'city': string, 'country': string, 'line1': string, 'line2'?: string|null, 'postal_code': string, 'state': string, ...}|object|null
     * @throws SdkError When address is omitted; use hasAddress() or valueOrDefault().
     */
    public function getAddress(): mixed { return $this->get('address'); }
    public function hasAddress(): bool { return $this->has('address'); }
    /** Shape $ (Value): string or null. Instructions specific to curbside handoff. Send null to clear it. minLength: 1. maxLength: 2048.
     * @return string|null
     * @throws SdkError When curbside_instructions is omitted; use hasCurbsideInstructions() or valueOrDefault().
     */
    public function getCurbsideInstructions(): string|null { return $this->get('curbside_instructions'); }
    public function hasCurbsideInstructions(): bool { return $this->has('curbside_instructions'); }
    /** Shape $ (Value): string or null. Buyer-reported arrival time for curbside or counter pickup. Send null to clear it. Format: date-time. minLength: 1.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When customer_arrived_at is omitted; use hasCustomerArrivedAt() or valueOrDefault().
     */
    public function getCustomerArrivedAt(): string|\DateTimeInterface|null { return $this->get('customer_arrived_at'); }
    public function hasCustomerArrivedAt(): bool { return $this->has('customer_arrived_at'); }
    /** Shape $ (Value): string or null. Deadline after which an uncollected pickup should enter merchant review. Send null to clear it. Format: date-time. minLength: 1.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When expires_at is omitted; use hasExpiresAt() or valueOrDefault().
     */
    public function getExpiresAt(): string|\DateTimeInterface|null { return $this->get('expires_at'); }
    public function hasExpiresAt(): bool { return $this->has('expires_at'); }
    /** Shape $ (Value): string or null. Pickup instructions for the buyer, such as where to go on arrival. Send null to clear it. minLength: 1.
     * @return string|null
     * @throws SdkError When instructions is omitted; use hasInstructions() or valueOrDefault().
     */
    public function getInstructions(): string|null { return $this->get('instructions'); }
    public function hasInstructions(): bool { return $this->has('instructions'); }
    /** Shape $ (Value): string or null. Name of the store or place where the buyer collects the order. Send null to clear it. minLength: 1.
     * @return string|null
     * @throws SdkError When location_name is omitted; use hasLocationName() or valueOrDefault().
     */
    public function getLocationName(): string|null { return $this->get('location_name'); }
    public function hasLocationName(): bool { return $this->has('location_name'); }
    /** Shape $ (Value): string or null. RFC3339 timestamp. Send null to clear it. Format: date-time. minLength: 1.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When picked_up_at is omitted; use hasPickedUpAt() or valueOrDefault().
     */
    public function getPickedUpAt(): string|\DateTimeInterface|null { return $this->get('picked_up_at'); }
    public function hasPickedUpAt(): bool { return $this->has('picked_up_at'); }
    /** Shape $ (Value): integer string or null. Width of the promised pickup window, from 0 to 86400 seconds. Use an integer string (decimal digits), not a floating-point number. Format: int64. minimum: 0. maximum: 86400.
     * @return string|null
     * @throws SdkError When pickup_window_duration_seconds is omitted; use hasPickupWindowDurationSeconds() or valueOrDefault().
     */
    public function getPickupWindowDurationSeconds(): string|null { return $this->get('pickup_window_duration_seconds'); }
    public function hasPickupWindowDurationSeconds(): bool { return $this->has('pickup_window_duration_seconds'); }
    /** Shape $ (Value): integer string or null. Expected preparation time for restaurant and made-to-order pickup, from 0 to 86400 seconds. Use an integer string (decimal digits), not a floating-point number. Format: int64. minimum: 0. maximum: 86400.
     * @return string|null
     * @throws SdkError When prep_time_duration_seconds is omitted; use hasPrepTimeDurationSeconds() or valueOrDefault().
     */
    public function getPrepTimeDurationSeconds(): string|null { return $this->get('prep_time_duration_seconds'); }
    public function hasPrepTimeDurationSeconds(): bool { return $this->has('prep_time_duration_seconds'); }
    /** Shape $ (Value): string or null. RFC3339 timestamp. Send null to clear it. Format: date-time. minLength: 1.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When ready_at is omitted; use hasReadyAt() or valueOrDefault().
     */
    public function getReadyAt(): string|\DateTimeInterface|null { return $this->get('ready_at'); }
    public function hasReadyAt(): bool { return $this->has('ready_at'); }
    /** Shape $ (Value): string. minLength: 1.
     * @return string
     * @throws SdkError When timezone is omitted; use hasTimezone() or valueOrDefault().
     */
    public function getTimezone(): string { return $this->get('timezone'); }
    public function hasTimezone(): bool { return $this->has('timezone'); }
    /** Shape $ (Value): string or null. Buyer vehicle description used for curbside handoff. Send null to clear it. minLength: 1. maxLength: 500.
     * @return string|null
     * @throws SdkError When vehicle_description is omitted; use hasVehicleDescription() or valueOrDefault().
     */
    public function getVehicleDescription(): string|null { return $this->get('vehicle_description'); }
    public function hasVehicleDescription(): bool { return $this->has('vehicle_description'); }
    /** Shape $ (Value): string or null. RFC3339 timestamp. Send null to clear it. Format: date-time. minLength: 1.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When window_end_at is omitted; use hasWindowEndAt() or valueOrDefault().
     */
    public function getWindowEndAt(): string|\DateTimeInterface|null { return $this->get('window_end_at'); }
    public function hasWindowEndAt(): bool { return $this->has('window_end_at'); }
    /** Shape $ (Value): string or null. RFC3339 timestamp. Send null to clear it. Format: date-time. minLength: 1.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When window_start_at is omitted; use hasWindowStartAt() or valueOrDefault().
     */
    public function getWindowStartAt(): string|\DateTimeInterface|null { return $this->get('window_start_at'); }
    public function hasWindowStartAt(): bool { return $this->has('window_start_at'); }
}
