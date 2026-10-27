<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?string $carrier
 * @property-read ?string $courier_pickup_at
 * @property-read ?string $courier_pickup_window_duration_seconds
 * @property-read ?string $courier_provider_name
 * @property-read ?string $courier_support_phone
 * @property-read ?string $delivered_at
 * @property-read ?string $dispatched_at
 * @property-read ?string $dropoff_notes
 * @property-read ?string $expires_at
 * @property-read ?string $external_delivery_id
 * @property-read ?string $instructions
 * @property-read ?bool $no_contact
 * @property-read ?string $prep_time_duration_seconds
 * @property-read ?string $ready_at
 * @property-read ?string $service_area_id
 * @property-read ?string $timezone
 * @property-read ?string $tracking_url
 * @property-read ?string $window_end_at
 * @property-read ?string $window_start_at
 * Presence-aware response; omitted optional fields return null. */
final class DeliveryFulfillmentDetails extends Model {
    /** @param array{'carrier'?: string, 'courier_pickup_at'?: string, 'courier_pickup_window_duration_seconds'?: string, 'courier_provider_name'?: string, 'courier_support_phone'?: string, 'delivered_at'?: string, 'dispatched_at'?: string, 'dropoff_notes'?: string, 'expires_at'?: string, 'external_delivery_id'?: string, 'instructions'?: string, 'no_contact'?: bool, 'prep_time_duration_seconds'?: string, 'ready_at'?: string, 'service_area_id'?: string, 'timezone'?: string, 'tracking_url'?: string, 'window_end_at'?: string, 'window_start_at'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryFulfillmentDetails')); }
    /** Shape $ (Value): string. Carrier responsible for the local delivery.
     * @return ?string
     */
    public function getCarrier(): ?string { return $this->get('carrier'); }
    public function hasCarrier(): bool { return $this->has('carrier'); }
    /** Shape $ (Value): string. Time at which the courier collected the order. Format: date-time.
     * @return ?string
     */
    public function getCourierPickupAt(): ?string { return $this->get('courier_pickup_at'); }
    public function hasCourierPickupAt(): bool { return $this->has('courier_pickup_at'); }
    /** Shape $ (Value): integer string. Width of the promised courier pickup window, from 0 to 86400 seconds. Use an integer string (decimal digits), not a floating-point number. Format: int64. minimum: 0. maximum: 86400.
     * @return ?string
     */
    public function getCourierPickupWindowDurationSeconds(): ?string { return $this->get('courier_pickup_window_duration_seconds'); }
    public function hasCourierPickupWindowDurationSeconds(): bool { return $this->has('courier_pickup_window_duration_seconds'); }
    /** Shape $ (Value): string. Delivery network or merchant fleet provider handling the job. maxLength: 255.
     * @return ?string
     */
    public function getCourierProviderName(): ?string { return $this->get('courier_provider_name'); }
    public function hasCourierProviderName(): bool { return $this->has('courier_provider_name'); }
    /** Shape $ (Value): string. Buyer-safe support number for the courier or merchant fleet. maxLength: 30.
     * @return ?string
     */
    public function getCourierSupportPhone(): ?string { return $this->get('courier_support_phone'); }
    public function hasCourierSupportPhone(): bool { return $this->has('courier_support_phone'); }
    /** Shape $ (Value): string. When the items were delivered, in RFC3339 format. Format: date-time.
     * @return ?string
     */
    public function getDeliveredAt(): ?string { return $this->get('delivered_at'); }
    public function hasDeliveredAt(): bool { return $this->has('delivered_at'); }
    /** Shape $ (Value): string. When the delivery was dispatched, in RFC3339 format. Format: date-time.
     * @return ?string
     */
    public function getDispatchedAt(): ?string { return $this->get('dispatched_at'); }
    public function hasDispatchedAt(): bool { return $this->has('dispatched_at'); }
    /** Shape $ (Value): string. Driver-facing notes for the final handoff. Omitted for a checkout session credential that doesn't act for the customer the buyer verified. maxLength: 2048.
     * @return ?string
     */
    public function getDropoffNotes(): ?string { return $this->get('dropoff_notes'); }
    public function hasDropoffNotes(): bool { return $this->has('dropoff_notes'); }
    /** Shape $ (Value): string. Deadline after which an undelivered job should enter merchant review. Format: date-time.
     * @return ?string
     */
    public function getExpiresAt(): ?string { return $this->get('expires_at'); }
    public function hasExpiresAt(): bool { return $this->has('expires_at'); }
    /** Shape $ (Value): string. Stable delivery job ID owned by the courier or merchant dispatch system. maxLength: 255.
     * @return ?string
     */
    public function getExternalDeliveryId(): ?string { return $this->get('external_delivery_id'); }
    public function hasExternalDeliveryId(): bool { return $this->has('external_delivery_id'); }
    /** Shape $ (Value): string. Omitted for a checkout session credential that doesn't act for the customer the buyer verified.
     * @return ?string
     */
    public function getInstructions(): ?string { return $this->get('instructions'); }
    public function hasInstructions(): bool { return $this->has('instructions'); }
    /** Shape $ (Value): boolean. Whether the buyer requested a no-contact handoff. Omitted for a checkout session credential that doesn't act for the customer the buyer verified.
     * @return ?bool
     */
    public function getNoContact(): ?bool { return $this->get('no_contact'); }
    public function hasNoContact(): bool { return $this->has('no_contact'); }
    /** Shape $ (Value): integer string. Expected preparation time before courier pickup, from 0 to 86400 seconds. Use an integer string (decimal digits), not a floating-point number. Format: int64. minimum: 0. maximum: 86400.
     * @return ?string
     */
    public function getPrepTimeDurationSeconds(): ?string { return $this->get('prep_time_duration_seconds'); }
    public function hasPrepTimeDurationSeconds(): bool { return $this->has('prep_time_duration_seconds'); }
    /** Shape $ (Value): string. Time at which the order became ready for courier pickup. Format: date-time.
     * @return ?string
     */
    public function getReadyAt(): ?string { return $this->get('ready_at'); }
    public function hasReadyAt(): bool { return $this->has('ready_at'); }
    /** Shape $ (Value): string. Delivery service area assigned to this fulfillment.
     * @return ?string
     */
    public function getServiceAreaId(): ?string { return $this->get('service_area_id'); }
    public function hasServiceAreaId(): bool { return $this->has('service_area_id'); }
    /** Shape $ (Value): string. Timezone used to display the local delivery window.
     * @return ?string
     */
    public function getTimezone(): ?string { return $this->get('timezone'); }
    public function hasTimezone(): bool { return $this->has('timezone'); }
    /** Shape $ (Value): string. Absolute HTTPS carrier tracking URL. Embedded URL credentials are rejected. Omitted for a checkout session credential that doesn't act for the customer the buyer verified.
     * @return ?string
     */
    public function getTrackingUrl(): ?string { return $this->get('tracking_url'); }
    public function hasTrackingUrl(): bool { return $this->has('tracking_url'); }
    /** Shape $ (Value): string. End of the promised delivery window, in RFC3339 format. Format: date-time.
     * @return ?string
     */
    public function getWindowEndAt(): ?string { return $this->get('window_end_at'); }
    public function hasWindowEndAt(): bool { return $this->has('window_end_at'); }
    /** Shape $ (Value): string. Start of the promised delivery window, in RFC3339 format. Format: date-time.
     * @return ?string
     */
    public function getWindowStartAt(): ?string { return $this->get('window_start_at'); }
    public function hasWindowStartAt(): bool { return $this->has('window_start_at'); }
}
