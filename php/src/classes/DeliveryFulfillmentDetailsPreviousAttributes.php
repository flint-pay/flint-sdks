<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $carrier
 * @property-read string|null $courier_pickup_at
 * @property-read int|null $courier_pickup_window_duration_seconds
 * @property-read string|null $courier_provider_name
 * @property-read string|null $courier_support_phone
 * @property-read string|null $delivered_at
 * @property-read string|null $delivery_due_at
 * @property-read string|null $dispatched_at
 * @property-read string|null $dropoff_notes
 * @property-read string|null $external_delivery_id
 * @property-read string|null $instructions
 * @property-read bool|null $no_contact
 * @property-read int|null $prep_time_duration_seconds
 * @property-read string|null $ready_at
 * @property-read string|null $service_area_id
 * @property-read string|null $timezone
 * @property-read string|null $tracking_url
 * @property-read string|null $window_end_at
 * @property-read string|null $window_start_at
 * Presence-aware response; omitted optional fields return null. */
final class DeliveryFulfillmentDetailsPreviousAttributes extends Model {
    /** @param array{'carrier'?: mixed, 'courier_pickup_at'?: mixed, 'courier_pickup_window_duration_seconds'?: mixed, 'courier_provider_name'?: mixed, 'courier_support_phone'?: mixed, 'delivered_at'?: mixed, 'delivery_due_at'?: mixed, 'dispatched_at'?: mixed, 'dropoff_notes'?: mixed, 'external_delivery_id'?: mixed, 'instructions'?: mixed, 'no_contact'?: mixed, 'prep_time_duration_seconds'?: mixed, 'ready_at'?: mixed, 'service_area_id'?: mixed, 'timezone'?: mixed, 'tracking_url'?: mixed, 'window_end_at'?: mixed, 'window_start_at'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryFulfillmentDetailsPreviousAttributes')); }
    /** Carrier responsible for the local delivery. anyOf[1] (Value): string. Carrier responsible for the local delivery. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCarrier(): string|null { return $this->get('carrier'); }
    public function hasCarrier(): bool { return $this->has('carrier'); }
    /** Time at which the courier collected the order. anyOf[1] (Value): string. Time at which the courier collected the order. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCourierPickupAt(): string|null { return $this->get('courier_pickup_at'); }
    public function hasCourierPickupAt(): bool { return $this->has('courier_pickup_at'); }
    /** Width of the promised courier pickup window, from 0 to 86400 seconds. anyOf[1] (Value): integer. Width of the promised courier pickup window, from 0 to 86400 seconds. Format: int64. minimum: 0. maximum: 86400. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getCourierPickupWindowDurationSeconds(): int|null { return $this->get('courier_pickup_window_duration_seconds'); }
    public function hasCourierPickupWindowDurationSeconds(): bool { return $this->has('courier_pickup_window_duration_seconds'); }
    /** Delivery network or merchant fleet provider handling the job. anyOf[1] (Value): string. Delivery network or merchant fleet provider handling the job. maxLength: 255. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCourierProviderName(): string|null { return $this->get('courier_provider_name'); }
    public function hasCourierProviderName(): bool { return $this->has('courier_provider_name'); }
    /** Buyer-safe support number for the courier or merchant fleet. anyOf[1] (Value): string. Buyer-safe support number for the courier or merchant fleet. maxLength: 30. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCourierSupportPhone(): string|null { return $this->get('courier_support_phone'); }
    public function hasCourierSupportPhone(): bool { return $this->has('courier_support_phone'); }
    /** When the items were delivered, in RFC3339 format. anyOf[1] (Value): string. When the items were delivered, in RFC3339 format. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getDeliveredAt(): string|null { return $this->get('delivered_at'); }
    public function hasDeliveredAt(): bool { return $this->has('delivered_at'); }
    /** Time by which the order should be delivered. Passing it does not change status or emit an event automatically; the merchant decides how to follow up. anyOf[1] (Value): string. Time by which the order should be delivered. Passing it does not change status or emit an event automatically; the merchant decides how to follow up. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getDeliveryDueAt(): string|null { return $this->get('delivery_due_at'); }
    public function hasDeliveryDueAt(): bool { return $this->has('delivery_due_at'); }
    /** When the delivery was dispatched, in RFC3339 format. anyOf[1] (Value): string. When the delivery was dispatched, in RFC3339 format. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getDispatchedAt(): string|null { return $this->get('dispatched_at'); }
    public function hasDispatchedAt(): bool { return $this->has('dispatched_at'); }
    /** Driver-facing notes for the final handoff. Omitted for a checkout session credential that doesn't act for the customer the buyer verified. anyOf[1] (Value): string. Driver-facing notes for the final handoff. Omitted for a checkout session credential that doesn't act for the customer the buyer verified. maxLength: 2048. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getDropoffNotes(): string|null { return $this->get('dropoff_notes'); }
    public function hasDropoffNotes(): bool { return $this->has('dropoff_notes'); }
    /** Stable delivery job ID owned by the courier or merchant dispatch system. anyOf[1] (Value): string. Stable delivery job ID owned by the courier or merchant dispatch system. maxLength: 255. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getExternalDeliveryId(): string|null { return $this->get('external_delivery_id'); }
    public function hasExternalDeliveryId(): bool { return $this->has('external_delivery_id'); }
    /** Omitted for a checkout session credential that doesn't act for the customer the buyer verified. anyOf[1] (Value): string. Omitted for a checkout session credential that doesn't act for the customer the buyer verified. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getInstructions(): string|null { return $this->get('instructions'); }
    public function hasInstructions(): bool { return $this->has('instructions'); }
    /** Whether the buyer requested a no-contact handoff. Omitted for a checkout session credential that doesn't act for the customer the buyer verified. anyOf[1] (Value): boolean. Whether the buyer requested a no-contact handoff. Omitted for a checkout session credential that doesn't act for the customer the buyer verified. anyOf[2] (Value): null.
     * @return bool|null
     */
    public function getNoContact(): bool|null { return $this->get('no_contact'); }
    public function hasNoContact(): bool { return $this->has('no_contact'); }
    /** Expected preparation time before courier pickup, from 0 to 86400 seconds. anyOf[1] (Value): integer. Expected preparation time before courier pickup, from 0 to 86400 seconds. Format: int64. minimum: 0. maximum: 86400. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getPrepTimeDurationSeconds(): int|null { return $this->get('prep_time_duration_seconds'); }
    public function hasPrepTimeDurationSeconds(): bool { return $this->has('prep_time_duration_seconds'); }
    /** Time at which the order became ready for courier pickup. anyOf[1] (Value): string. Time at which the order became ready for courier pickup. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getReadyAt(): string|null { return $this->get('ready_at'); }
    public function hasReadyAt(): bool { return $this->has('ready_at'); }
    /** Delivery service area assigned to this fulfillment. anyOf[1] (Value): string. Delivery service area assigned to this fulfillment. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getServiceAreaId(): string|null { return $this->get('service_area_id'); }
    public function hasServiceAreaId(): bool { return $this->has('service_area_id'); }
    /** Timezone used to display the local delivery window. Uses an IANA time zone name. anyOf[1] (Value): string. Timezone used to display the local delivery window. Uses an IANA time zone name. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getTimezone(): string|null { return $this->get('timezone'); }
    public function hasTimezone(): bool { return $this->has('timezone'); }
    /** Absolute HTTPS carrier tracking URL. Embedded URL credentials are rejected. Omitted for a checkout session credential that doesn't act for the customer the buyer verified. anyOf[1] (Value): string. Absolute HTTPS carrier tracking URL. Embedded URL credentials are rejected. Omitted for a checkout session credential that doesn't act for the customer the buyer verified. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getTrackingUrl(): string|null { return $this->get('tracking_url'); }
    public function hasTrackingUrl(): bool { return $this->has('tracking_url'); }
    /** End of the promised delivery window, in RFC3339 format. anyOf[1] (Value): string. End of the promised delivery window, in RFC3339 format. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getWindowEndAt(): string|null { return $this->get('window_end_at'); }
    public function hasWindowEndAt(): bool { return $this->has('window_end_at'); }
    /** Start of the promised delivery window, in RFC3339 format. anyOf[1] (Value): string. Start of the promised delivery window, in RFC3339 format. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getWindowStartAt(): string|null { return $this->get('window_start_at'); }
    public function hasWindowStartAt(): bool { return $this->has('window_start_at'); }
}
