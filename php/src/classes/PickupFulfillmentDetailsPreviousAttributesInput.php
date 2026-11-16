<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read AddressPreviousAttributesInput|array<array-key, mixed>|\stdClass|null $address
 * @property-read string|null $curbside_instructions
 * @property-read string|\DateTimeInterface|null $customer_arrived_at
 * @property-read string|null $instructions
 * @property-read string|null $location_name
 * @property-read string|\DateTimeInterface|null $picked_up_at
 * @property-read string|\DateTimeInterface|null $pickup_due_at
 * @property-read string|null $pickup_mode
 * @property-read int|null $pickup_window_duration_seconds
 * @property-read int|null $prep_time_duration_seconds
 * @property-read string|\DateTimeInterface|null $ready_at
 * @property-read string|null $timezone
 * @property-read string|null $vehicle_description
 * @property-read string|\DateTimeInterface|null $window_end_at
 * @property-read string|\DateTimeInterface|null $window_start_at
 * Presence-aware input; omitted fields throw when accessed. */
final class PickupFulfillmentDetailsPreviousAttributesInput extends Model {
    /** @param array{'address'?: AddressPreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'curbside_instructions'?: string|null, 'customer_arrived_at'?: string|\DateTimeInterface|null, 'instructions'?: string|null, 'location_name'?: string|null, 'picked_up_at'?: string|\DateTimeInterface|null, 'pickup_due_at'?: string|\DateTimeInterface|null, 'pickup_mode'?: string|null, 'pickup_window_duration_seconds'?: int|null, 'prep_time_duration_seconds'?: int|null, 'ready_at'?: string|\DateTimeInterface|null, 'timezone'?: string|null, 'vehicle_description'?: string|null, 'window_end_at'?: string|\DateTimeInterface|null, 'window_start_at'?: string|\DateTimeInterface|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PickupFulfillmentDetailsPreviousAttributesInput')); }
    /** Address where the buyer collects the order. anyOf[1] (Value): {@see AddressPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return AddressPreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When address is omitted; use hasAddress() or valueOrDefault().
     */
    public function getAddress(): mixed { return $this->get('address'); }
    public function hasAddress(): bool { return $this->has('address'); }
    /** Instructions specific to curbside handoff. anyOf[1] (Value): string. Instructions specific to curbside handoff. maxLength: 2048. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When curbside_instructions is omitted; use hasCurbsideInstructions() or valueOrDefault().
     */
    public function getCurbsideInstructions(): mixed { return $this->get('curbside_instructions'); }
    public function hasCurbsideInstructions(): bool { return $this->has('curbside_instructions'); }
    /** Buyer-reported arrival time for curbside or counter pickup. anyOf[1] (Value): string. Buyer-reported arrival time for curbside or counter pickup. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When customer_arrived_at is omitted; use hasCustomerArrivedAt() or valueOrDefault().
     */
    public function getCustomerArrivedAt(): mixed { return $this->get('customer_arrived_at'); }
    public function hasCustomerArrivedAt(): bool { return $this->has('customer_arrived_at'); }
    /** Pickup instructions for the buyer, such as where to go on arrival. anyOf[1] (Value): string. Pickup instructions for the buyer, such as where to go on arrival. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When instructions is omitted; use hasInstructions() or valueOrDefault().
     */
    public function getInstructions(): mixed { return $this->get('instructions'); }
    public function hasInstructions(): bool { return $this->has('instructions'); }
    /** Name of the store or place where the buyer collects the order. anyOf[1] (Value): string. Name of the store or place where the buyer collects the order. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When location_name is omitted; use hasLocationName() or valueOrDefault().
     */
    public function getLocationName(): mixed { return $this->get('location_name'); }
    public function hasLocationName(): bool { return $this->has('location_name'); }
    /** When the recipient collected the items, in RFC3339 format. anyOf[1] (Value): string. When the recipient collected the items, in RFC3339 format. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When picked_up_at is omitted; use hasPickedUpAt() or valueOrDefault().
     */
    public function getPickedUpAt(): mixed { return $this->get('picked_up_at'); }
    public function hasPickedUpAt(): bool { return $this->has('picked_up_at'); }
    /** Time by which the buyer should collect the order. Passing it does not change status or emit an event automatically; the merchant decides how to follow up. anyOf[1] (Value): string. Time by which the buyer should collect the order. Passing it does not change status or emit an event automatically; the merchant decides how to follow up. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When pickup_due_at is omitted; use hasPickupDueAt() or valueOrDefault().
     */
    public function getPickupDueAt(): mixed { return $this->get('pickup_due_at'); }
    public function hasPickupDueAt(): bool { return $this->has('pickup_due_at'); }
    /** How the buyer collects the items, such as in store or curbside. Value enum: "in_store", "curbside", "locker", "other". anyOf[1] (Value): string. How the buyer collects the items, such as in store or curbside. Value enum: "in_store", "curbside", "locker", "other". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When pickup_mode is omitted; use hasPickupMode() or valueOrDefault().
     */
    public function getPickupMode(): mixed { return $this->get('pickup_mode'); }
    public function hasPickupMode(): bool { return $this->has('pickup_mode'); }
    /** Width of the promised pickup window, from 0 to 86400 seconds. anyOf[1] (Value): integer. Width of the promised pickup window, from 0 to 86400 seconds. Format: int64. minimum: 0. maximum: 86400. anyOf[2] (Value): null.
     * @return int|null
     * @throws SdkError When pickup_window_duration_seconds is omitted; use hasPickupWindowDurationSeconds() or valueOrDefault().
     */
    public function getPickupWindowDurationSeconds(): mixed { return $this->get('pickup_window_duration_seconds'); }
    public function hasPickupWindowDurationSeconds(): bool { return $this->has('pickup_window_duration_seconds'); }
    /** Expected preparation time for restaurant and made-to-order pickup, from 0 to 86400 seconds. anyOf[1] (Value): integer. Expected preparation time for restaurant and made-to-order pickup, from 0 to 86400 seconds. Format: int64. minimum: 0. maximum: 86400. anyOf[2] (Value): null.
     * @return int|null
     * @throws SdkError When prep_time_duration_seconds is omitted; use hasPrepTimeDurationSeconds() or valueOrDefault().
     */
    public function getPrepTimeDurationSeconds(): mixed { return $this->get('prep_time_duration_seconds'); }
    public function hasPrepTimeDurationSeconds(): bool { return $this->has('prep_time_duration_seconds'); }
    /** When the items became ready for pickup, in RFC3339 format. anyOf[1] (Value): string. When the items became ready for pickup, in RFC3339 format. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When ready_at is omitted; use hasReadyAt() or valueOrDefault().
     */
    public function getReadyAt(): mixed { return $this->get('ready_at'); }
    public function hasReadyAt(): bool { return $this->has('ready_at'); }
    /** Timezone used to display the pickup window. Uses an IANA time zone name. anyOf[1] (Value): string. Timezone used to display the pickup window. Uses an IANA time zone name. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When timezone is omitted; use hasTimezone() or valueOrDefault().
     */
    public function getTimezone(): mixed { return $this->get('timezone'); }
    public function hasTimezone(): bool { return $this->has('timezone'); }
    /** Buyer vehicle description used for curbside handoff. Omitted for a checkout session credential that doesn't act for the customer the buyer verified. anyOf[1] (Value): string. Buyer vehicle description used for curbside handoff. Omitted for a checkout session credential that doesn't act for the customer the buyer verified. maxLength: 500. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When vehicle_description is omitted; use hasVehicleDescription() or valueOrDefault().
     */
    public function getVehicleDescription(): mixed { return $this->get('vehicle_description'); }
    public function hasVehicleDescription(): bool { return $this->has('vehicle_description'); }
    /** End of the promised pickup window, in RFC3339 format. anyOf[1] (Value): string. End of the promised pickup window, in RFC3339 format. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When window_end_at is omitted; use hasWindowEndAt() or valueOrDefault().
     */
    public function getWindowEndAt(): mixed { return $this->get('window_end_at'); }
    public function hasWindowEndAt(): bool { return $this->has('window_end_at'); }
    /** Start of the promised pickup window, in RFC3339 format. anyOf[1] (Value): string. Start of the promised pickup window, in RFC3339 format. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When window_start_at is omitted; use hasWindowStartAt() or valueOrDefault().
     */
    public function getWindowStartAt(): mixed { return $this->get('window_start_at'); }
    public function hasWindowStartAt(): bool { return $this->has('window_start_at'); }
}
