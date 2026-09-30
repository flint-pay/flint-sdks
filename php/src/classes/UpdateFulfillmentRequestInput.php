<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|\DateTimeInterface|null $completed_at
 * @property-read string|null $customer_id
 * @property-read string|null $device_id
 * @property-read array{'delivered_at'?: string|\DateTimeInterface|null, 'delivery_url'?: string|null, ...}|object|null $digital_details
 * @property-read string $expected_version
 * @property-read string $external_reference_id
 * @property-read array{'carrier'?: string|null, 'courier_pickup_at'?: string|\DateTimeInterface|null, 'courier_pickup_window_duration_seconds'?: string|null, 'courier_provider_name'?: string|null, 'courier_support_phone_number'?: string|null, 'delivered_at'?: string|\DateTimeInterface|null, 'dispatched_at'?: string|\DateTimeInterface|null, 'dropoff_notes'?: string|null, 'expires_at'?: string|\DateTimeInterface|null, 'external_delivery_id'?: string|null, 'instructions'?: string|null, 'no_contact'?: bool|null, 'prep_time_duration_seconds'?: string|null, 'ready_at'?: string|\DateTimeInterface|null, 'service_area_id'?: string|null, 'timezone'?: string, 'tracking_url'?: string|null, 'window_end_at'?: string|\DateTimeInterface|null, 'window_start_at'?: string|\DateTimeInterface|null, ...}|object|null $local_delivery_details
 * @property-read string|null $location_id
 * @property-read array<array-key, string|null>|\stdClass|null $metadata
 * @property-read array{'address'?: array{'city': string, 'country': string, 'line1': string, 'line2'?: string, 'postal_code': string, 'state': string, ...}|object|null, 'curbside_instructions'?: string|null, 'customer_arrived_at'?: string|\DateTimeInterface|null, 'expires_at'?: string|\DateTimeInterface|null, 'instructions'?: string|null, 'location_name'?: string|null, 'picked_up_at'?: string|\DateTimeInterface|null, 'pickup_window_duration_seconds'?: string|null, 'prep_time_duration_seconds'?: string|null, 'ready_at'?: string|\DateTimeInterface|null, 'timezone'?: string, 'vehicle_description'?: string|null, 'window_end_at'?: string|\DateTimeInterface|null, 'window_start_at'?: string|\DateTimeInterface|null, ...}|object|null $pickup_details
 * @property-read array{'address'?: PostalAddressInput|array<array-key, mixed>|\stdClass, 'email'?: string, 'instructions'?: string, 'name'?: string, 'phone'?: string, ...}|object|null $recipient
 * @property-read array{'completed_at'?: string|\DateTimeInterface|null, 'notes'?: string|null, 'scheduled_end_at'?: string|\DateTimeInterface|null, 'scheduled_start_at'?: string|\DateTimeInterface|null, 'timezone'?: string, ...}|object|null $service_details
 * Presence-aware input; omitted fields throw when accessed. */
final class UpdateFulfillmentRequestInput extends Model {
    /** @param mixed $values */
    public function __construct(mixed $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('UpdateFulfillmentRequestInput')); }
    /** @return string|\DateTimeInterface|null
     * @throws SdkError When completed_at is omitted; use hasCompletedAt() or valueOrDefault().
     */
    public function getCompletedAt(): string|\DateTimeInterface|null { return $this->get('completed_at'); }
    public function hasCompletedAt(): bool { return $this->has('completed_at'); }
    /** @return string|null
     * @throws SdkError When customer_id is omitted; use hasCustomerId() or valueOrDefault().
     */
    public function getCustomerId(): string|null { return $this->get('customer_id'); }
    public function hasCustomerId(): bool { return $this->has('customer_id'); }
    /** @return string|null
     * @throws SdkError When device_id is omitted; use hasDeviceId() or valueOrDefault().
     */
    public function getDeviceId(): string|null { return $this->get('device_id'); }
    public function hasDeviceId(): bool { return $this->has('device_id'); }
    /** @return array{'delivered_at'?: string|\DateTimeInterface|null, 'delivery_url'?: string|null, ...}|object|null
     * @throws SdkError When digital_details is omitted; use hasDigitalDetails() or valueOrDefault().
     */
    public function getDigitalDetails(): mixed { return $this->get('digital_details'); }
    public function hasDigitalDetails(): bool { return $this->has('digital_details'); }
    /** @return string
     * @throws SdkError When expected_version is omitted; use hasExpectedVersion() or valueOrDefault().
     */
    public function getExpectedVersion(): string { return $this->get('expected_version'); }
    public function hasExpectedVersion(): bool { return $this->has('expected_version'); }
    /** @return string
     * @throws SdkError When external_reference_id is omitted; use hasExternalReferenceId() or valueOrDefault().
     */
    public function getExternalReferenceId(): string { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** @return array{'carrier'?: string|null, 'courier_pickup_at'?: string|\DateTimeInterface|null, 'courier_pickup_window_duration_seconds'?: string|null, 'courier_provider_name'?: string|null, 'courier_support_phone_number'?: string|null, 'delivered_at'?: string|\DateTimeInterface|null, 'dispatched_at'?: string|\DateTimeInterface|null, 'dropoff_notes'?: string|null, 'expires_at'?: string|\DateTimeInterface|null, 'external_delivery_id'?: string|null, 'instructions'?: string|null, 'no_contact'?: bool|null, 'prep_time_duration_seconds'?: string|null, 'ready_at'?: string|\DateTimeInterface|null, 'service_area_id'?: string|null, 'timezone'?: string, 'tracking_url'?: string|null, 'window_end_at'?: string|\DateTimeInterface|null, 'window_start_at'?: string|\DateTimeInterface|null, ...}|object|null
     * @throws SdkError When local_delivery_details is omitted; use hasLocalDeliveryDetails() or valueOrDefault().
     */
    public function getLocalDeliveryDetails(): mixed { return $this->get('local_delivery_details'); }
    public function hasLocalDeliveryDetails(): bool { return $this->has('local_delivery_details'); }
    /** @return string|null
     * @throws SdkError When location_id is omitted; use hasLocationId() or valueOrDefault().
     */
    public function getLocationId(): string|null { return $this->get('location_id'); }
    public function hasLocationId(): bool { return $this->has('location_id'); }
    /** @return array<array-key, string|null>|\stdClass|null
     * @throws SdkError When metadata is omitted; use hasMetadata() or valueOrDefault().
     */
    public function getMetadata(): array|object|null { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** @return array{'address'?: array{'city': string, 'country': string, 'line1': string, 'line2'?: string, 'postal_code': string, 'state': string, ...}|object|null, 'curbside_instructions'?: string|null, 'customer_arrived_at'?: string|\DateTimeInterface|null, 'expires_at'?: string|\DateTimeInterface|null, 'instructions'?: string|null, 'location_name'?: string|null, 'picked_up_at'?: string|\DateTimeInterface|null, 'pickup_window_duration_seconds'?: string|null, 'prep_time_duration_seconds'?: string|null, 'ready_at'?: string|\DateTimeInterface|null, 'timezone'?: string, 'vehicle_description'?: string|null, 'window_end_at'?: string|\DateTimeInterface|null, 'window_start_at'?: string|\DateTimeInterface|null, ...}|object|null
     * @throws SdkError When pickup_details is omitted; use hasPickupDetails() or valueOrDefault().
     */
    public function getPickupDetails(): mixed { return $this->get('pickup_details'); }
    public function hasPickupDetails(): bool { return $this->has('pickup_details'); }
    /** @return array{'address'?: PostalAddressInput|array<array-key, mixed>|\stdClass, 'email'?: string, 'instructions'?: string, 'name'?: string, 'phone'?: string, ...}|object|null
     * @throws SdkError When recipient is omitted; use hasRecipient() or valueOrDefault().
     */
    public function getRecipient(): mixed { return $this->get('recipient'); }
    public function hasRecipient(): bool { return $this->has('recipient'); }
    /** @return array{'completed_at'?: string|\DateTimeInterface|null, 'notes'?: string|null, 'scheduled_end_at'?: string|\DateTimeInterface|null, 'scheduled_start_at'?: string|\DateTimeInterface|null, 'timezone'?: string, ...}|object|null
     * @throws SdkError When service_details is omitted; use hasServiceDetails() or valueOrDefault().
     */
    public function getServiceDetails(): mixed { return $this->get('service_details'); }
    public function hasServiceDetails(): bool { return $this->has('service_details'); }
}
