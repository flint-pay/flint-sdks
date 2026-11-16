<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read AddressPreviousAttributes|null $address
 * @property-read string|null $curbside_instructions
 * @property-read string|null $customer_arrived_at
 * @property-read string|null $instructions
 * @property-read string|null $location_name
 * @property-read string|null $picked_up_at
 * @property-read string|null $pickup_due_at
 * @property-read string|null $pickup_mode
 * @property-read int|null $pickup_window_duration_seconds
 * @property-read int|null $prep_time_duration_seconds
 * @property-read string|null $ready_at
 * @property-read string|null $timezone
 * @property-read string|null $vehicle_description
 * @property-read string|null $window_end_at
 * @property-read string|null $window_start_at
 * Presence-aware response; omitted optional fields return null. */
final class PickupFulfillmentDetailsPreviousAttributes extends Model {
    /** @param array{'address'?: mixed, 'curbside_instructions'?: mixed, 'customer_arrived_at'?: mixed, 'instructions'?: mixed, 'location_name'?: mixed, 'picked_up_at'?: mixed, 'pickup_due_at'?: mixed, 'pickup_mode'?: mixed, 'pickup_window_duration_seconds'?: mixed, 'prep_time_duration_seconds'?: mixed, 'ready_at'?: mixed, 'timezone'?: mixed, 'vehicle_description'?: mixed, 'window_end_at'?: mixed, 'window_start_at'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PickupFulfillmentDetailsPreviousAttributes')); }
    /** Address where the buyer collects the order. anyOf[1] (Value): {@see AddressPreviousAttributes}. anyOf[2] (Value): null.
     * @return AddressPreviousAttributes|null
     */
    public function getAddress(): AddressPreviousAttributes|null { return $this->get('address'); }
    public function hasAddress(): bool { return $this->has('address'); }
    /** Instructions specific to curbside handoff. anyOf[1] (Value): string. Instructions specific to curbside handoff. maxLength: 2048. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCurbsideInstructions(): string|null { return $this->get('curbside_instructions'); }
    public function hasCurbsideInstructions(): bool { return $this->has('curbside_instructions'); }
    /** Buyer-reported arrival time for curbside or counter pickup. anyOf[1] (Value): string. Buyer-reported arrival time for curbside or counter pickup. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCustomerArrivedAt(): string|null { return $this->get('customer_arrived_at'); }
    public function hasCustomerArrivedAt(): bool { return $this->has('customer_arrived_at'); }
    /** Pickup instructions for the buyer, such as where to go on arrival. anyOf[1] (Value): string. Pickup instructions for the buyer, such as where to go on arrival. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getInstructions(): string|null { return $this->get('instructions'); }
    public function hasInstructions(): bool { return $this->has('instructions'); }
    /** Name of the store or place where the buyer collects the order. anyOf[1] (Value): string. Name of the store or place where the buyer collects the order. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getLocationName(): string|null { return $this->get('location_name'); }
    public function hasLocationName(): bool { return $this->has('location_name'); }
    /** When the recipient collected the items, in RFC3339 format. anyOf[1] (Value): string. When the recipient collected the items, in RFC3339 format. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getPickedUpAt(): string|null { return $this->get('picked_up_at'); }
    public function hasPickedUpAt(): bool { return $this->has('picked_up_at'); }
    /** Time by which the buyer should collect the order. Passing it does not change status or emit an event automatically; the merchant decides how to follow up. anyOf[1] (Value): string. Time by which the buyer should collect the order. Passing it does not change status or emit an event automatically; the merchant decides how to follow up. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getPickupDueAt(): string|null { return $this->get('pickup_due_at'); }
    public function hasPickupDueAt(): bool { return $this->has('pickup_due_at'); }
    /** How the buyer collects the items, such as in store or curbside. Value enum: "in_store", "curbside", "locker", "other". anyOf[1] (Value): string. How the buyer collects the items, such as in store or curbside. Value enum: "in_store", "curbside", "locker", "other". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getPickupMode(): string|null { return $this->get('pickup_mode'); }
    public function hasPickupMode(): bool { return $this->has('pickup_mode'); }
    /** Width of the promised pickup window, from 0 to 86400 seconds. anyOf[1] (Value): integer. Width of the promised pickup window, from 0 to 86400 seconds. Format: int64. minimum: 0. maximum: 86400. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getPickupWindowDurationSeconds(): int|null { return $this->get('pickup_window_duration_seconds'); }
    public function hasPickupWindowDurationSeconds(): bool { return $this->has('pickup_window_duration_seconds'); }
    /** Expected preparation time for restaurant and made-to-order pickup, from 0 to 86400 seconds. anyOf[1] (Value): integer. Expected preparation time for restaurant and made-to-order pickup, from 0 to 86400 seconds. Format: int64. minimum: 0. maximum: 86400. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getPrepTimeDurationSeconds(): int|null { return $this->get('prep_time_duration_seconds'); }
    public function hasPrepTimeDurationSeconds(): bool { return $this->has('prep_time_duration_seconds'); }
    /** When the items became ready for pickup, in RFC3339 format. anyOf[1] (Value): string. When the items became ready for pickup, in RFC3339 format. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getReadyAt(): string|null { return $this->get('ready_at'); }
    public function hasReadyAt(): bool { return $this->has('ready_at'); }
    /** Timezone used to display the pickup window. Uses an IANA time zone name. anyOf[1] (Value): string. Timezone used to display the pickup window. Uses an IANA time zone name. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getTimezone(): string|null { return $this->get('timezone'); }
    public function hasTimezone(): bool { return $this->has('timezone'); }
    /** Buyer vehicle description used for curbside handoff. Omitted for a checkout session credential that doesn't act for the customer the buyer verified. anyOf[1] (Value): string. Buyer vehicle description used for curbside handoff. Omitted for a checkout session credential that doesn't act for the customer the buyer verified. maxLength: 500. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getVehicleDescription(): string|null { return $this->get('vehicle_description'); }
    public function hasVehicleDescription(): bool { return $this->has('vehicle_description'); }
    /** End of the promised pickup window, in RFC3339 format. anyOf[1] (Value): string. End of the promised pickup window, in RFC3339 format. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getWindowEndAt(): string|null { return $this->get('window_end_at'); }
    public function hasWindowEndAt(): bool { return $this->has('window_end_at'); }
    /** Start of the promised pickup window, in RFC3339 format. anyOf[1] (Value): string. Start of the promised pickup window, in RFC3339 format. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getWindowStartAt(): string|null { return $this->get('window_start_at'); }
    public function hasWindowStartAt(): bool { return $this->has('window_start_at'); }
}
