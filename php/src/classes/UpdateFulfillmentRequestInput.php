<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|\DateTimeInterface|null $completed_at
 * @property-read string|null $customer_id
 * @property-read string|null $device_id
 * @property-read array{'delivered_at'?: string|\DateTimeInterface|null, 'delivery_url'?: string|null}|object|null $digital_details
 * @property-read int $expected_version
 * @property-read string|null $external_reference_id
 * @property-read array{'carrier'?: string|null, 'courier_pickup_at'?: string|\DateTimeInterface|null, 'courier_pickup_window_duration_seconds'?: int|null, 'courier_provider_name'?: string|null, 'courier_support_phone'?: string|null, 'delivered_at'?: string|\DateTimeInterface|null, 'dispatched_at'?: string|\DateTimeInterface|null, 'dropoff_notes'?: string|null, 'expires_at'?: string|\DateTimeInterface|null, 'external_delivery_id'?: string|null, 'instructions'?: string|null, 'no_contact'?: bool|null, 'prep_time_duration_seconds'?: int|null, 'ready_at'?: string|\DateTimeInterface|null, 'service_area_id'?: string|null, 'timezone'?: string, 'tracking_url'?: string|null, 'window_end_at'?: string|\DateTimeInterface|null, 'window_start_at'?: string|\DateTimeInterface|null}|object|null $local_delivery_details
 * @property-read string|null $location_id
 * @property-read array<array-key, string|null>|\stdClass|null $metadata
 * @property-read array{'address'?: array{'city': string, 'country': string, 'line1': string, 'line2'?: string|null, 'postal_code'?: string|null, 'state'?: string|null}|object|null, 'curbside_instructions'?: string|null, 'customer_arrived_at'?: string|\DateTimeInterface|null, 'expires_at'?: string|\DateTimeInterface|null, 'instructions'?: string|null, 'location_name'?: string|null, 'picked_up_at'?: string|\DateTimeInterface|null, 'pickup_window_duration_seconds'?: int|null, 'prep_time_duration_seconds'?: int|null, 'ready_at'?: string|\DateTimeInterface|null, 'timezone'?: string, 'vehicle_description'?: string|null, 'window_end_at'?: string|\DateTimeInterface|null, 'window_start_at'?: string|\DateTimeInterface|null}|object|null $pickup_details
 * @property-read array{'address'?: AddressRequestInput|array<array-key, mixed>|\stdClass, 'email'?: string, 'instructions'?: string, 'name'?: string, 'phone'?: string}|object|null $recipient
 * @property-read array{'completed_at'?: string|\DateTimeInterface|null, 'notes'?: string|null, 'scheduled_end_at'?: string|\DateTimeInterface|null, 'scheduled_start_at'?: string|\DateTimeInterface|null, 'timezone'?: string}|object|null $service_details
 * Presence-aware input; omitted fields throw when accessed. */
final class UpdateFulfillmentRequestInput extends Model {
    /** @param array{'completed_at'?: string|\DateTimeInterface|null, 'customer_id'?: string|null, 'device_id'?: string|null, 'digital_details'?: array{'delivered_at'?: string|\DateTimeInterface|null, 'delivery_url'?: string|null}|object|null, 'expected_version'?: int, 'external_reference_id'?: string|null, 'local_delivery_details'?: array{'carrier'?: string|null, 'courier_pickup_at'?: string|\DateTimeInterface|null, 'courier_pickup_window_duration_seconds'?: int|null, 'courier_provider_name'?: string|null, 'courier_support_phone'?: string|null, 'delivered_at'?: string|\DateTimeInterface|null, 'dispatched_at'?: string|\DateTimeInterface|null, 'dropoff_notes'?: string|null, 'expires_at'?: string|\DateTimeInterface|null, 'external_delivery_id'?: string|null, 'instructions'?: string|null, 'no_contact'?: bool|null, 'prep_time_duration_seconds'?: int|null, 'ready_at'?: string|\DateTimeInterface|null, 'service_area_id'?: string|null, 'timezone'?: string, 'tracking_url'?: string|null, 'window_end_at'?: string|\DateTimeInterface|null, 'window_start_at'?: string|\DateTimeInterface|null}|object|null, 'location_id'?: string|null, 'metadata'?: array<array-key, string|null>|\stdClass|null, 'pickup_details'?: array{'address'?: array{'city': string, 'country': string, 'line1': string, 'line2'?: string|null, 'postal_code'?: string|null, 'state'?: string|null}|object|null, 'curbside_instructions'?: string|null, 'customer_arrived_at'?: string|\DateTimeInterface|null, 'expires_at'?: string|\DateTimeInterface|null, 'instructions'?: string|null, 'location_name'?: string|null, 'picked_up_at'?: string|\DateTimeInterface|null, 'pickup_window_duration_seconds'?: int|null, 'prep_time_duration_seconds'?: int|null, 'ready_at'?: string|\DateTimeInterface|null, 'timezone'?: string, 'vehicle_description'?: string|null, 'window_end_at'?: string|\DateTimeInterface|null, 'window_start_at'?: string|\DateTimeInterface|null}|object|null, 'recipient'?: array{'address'?: AddressRequestInput|array<array-key, mixed>|\stdClass, 'email'?: string, 'instructions'?: string, 'name'?: string, 'phone'?: string}|object|null, 'service_details'?: array{'completed_at'?: string|\DateTimeInterface|null, 'notes'?: string|null, 'scheduled_end_at'?: string|\DateTimeInterface|null, 'scheduled_start_at'?: string|\DateTimeInterface|null, 'timezone'?: string}|object|null}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('UpdateFulfillmentRequestInput')); }
    /** Completion evidence timestamp. Use only to correct completion evidence on an already completed fulfillment; complete pending fulfillments with POST /transitions. Send null to clear it. Format: date-time. minLength: 1.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When completed_at is omitted; use hasCompletedAt() or valueOrDefault().
     */
    public function getCompletedAt(): string|\DateTimeInterface|null { return $this->get('completed_at'); }
    public function hasCompletedAt(): bool { return $this->has('completed_at'); }
    /** Send null to clear it. minLength: 1.
     * @return string|null
     * @throws SdkError When customer_id is omitted; use hasCustomerId() or valueOrDefault().
     */
    public function getCustomerId(): string|null { return $this->get('customer_id'); }
    public function hasCustomerId(): bool { return $this->has('customer_id'); }
    /** Device used for this fulfillment. It must be active. When location_id is also set, the device must belong to that Location. Send null to clear it. minLength: 1.
     * @return string|null
     * @throws SdkError When device_id is omitted; use hasDeviceId() or valueOrDefault().
     */
    public function getDeviceId(): string|null { return $this->get('device_id'); }
    public function hasDeviceId(): bool { return $this->has('device_id'); }
    /**  anyOf[1] (Value): {@see UpdateDigitalFulfillmentDetailsInput}. Digital fulfillment fields to change when updating a fulfillment: delivery time and URL. Send null to clear a field. anyOf[2] (Value): null.
     * @return array{'delivered_at'?: string|\DateTimeInterface|null, 'delivery_url'?: string|null}|object|null
     * @throws SdkError When digital_details is omitted; use hasDigitalDetails() or valueOrDefault().
     */
    public function getDigitalDetails(): mixed { return $this->get('digital_details'); }
    public function hasDigitalDetails(): bool { return $this->has('digital_details'); }
    /** Optional resource version last read by the caller. Format: uint64. minimum: 1.
     * @return int
     * @throws SdkError When expected_version is omitted; use hasExpectedVersion() or valueOrDefault().
     */
    public function getExpectedVersion(): int { return $this->get('expected_version'); }
    public function hasExpectedVersion(): bool { return $this->has('expected_version'); }
    /** Caller-owned identifier for this resource in an external system. Send null to clear it. minLength: 1. maxLength: 255.
     * @return string|null
     * @throws SdkError When external_reference_id is omitted; use hasExternalReferenceId() or valueOrDefault().
     */
    public function getExternalReferenceId(): string|null { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /**  anyOf[1] (Value): {@see UpdateDeliveryFulfillmentDetailsInput}. Delivery fulfillment fields to change when updating a fulfillment, such as courier, tracking, and delivery times. Send null to clear a field. anyOf[2] (Value): null.
     * @return array{'carrier'?: string|null, 'courier_pickup_at'?: string|\DateTimeInterface|null, 'courier_pickup_window_duration_seconds'?: int|null, 'courier_provider_name'?: string|null, 'courier_support_phone'?: string|null, 'delivered_at'?: string|\DateTimeInterface|null, 'dispatched_at'?: string|\DateTimeInterface|null, 'dropoff_notes'?: string|null, 'expires_at'?: string|\DateTimeInterface|null, 'external_delivery_id'?: string|null, 'instructions'?: string|null, 'no_contact'?: bool|null, 'prep_time_duration_seconds'?: int|null, 'ready_at'?: string|\DateTimeInterface|null, 'service_area_id'?: string|null, 'timezone'?: string, 'tracking_url'?: string|null, 'window_end_at'?: string|\DateTimeInterface|null, 'window_start_at'?: string|\DateTimeInterface|null}|object|null
     * @throws SdkError When local_delivery_details is omitted; use hasLocalDeliveryDetails() or valueOrDefault().
     */
    public function getLocalDeliveryDetails(): mixed { return $this->get('local_delivery_details'); }
    public function hasLocalDeliveryDetails(): bool { return $this->has('local_delivery_details'); }
    /** Send null to clear it. minLength: 1.
     * @return string|null
     * @throws SdkError When location_id is omitted; use hasLocationId() or valueOrDefault().
     */
    public function getLocationId(): string|null { return $this->get('location_id'); }
    public function hasLocationId(): bool { return $this->has('location_id'); }
    /** Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. anyOf[1] (Value): {@see MetadataPatchRequestInput}. Changes to a caller-owned metadata map. Omit the field to leave metadata unchanged. Each key sets a value, a null value deletes the key, and an empty object makes no change; send null for the whole field to clear all caller-owned metadata. The resulting map is limited the same way as MetadataInput: Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Deleting a key that does not exist is allowed, so the number of operations is not itself the stored-map limit. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. anyOf[2] (Value): null.
     * @return array<array-key, string|null>|\stdClass|null
     * @throws SdkError When metadata is omitted; use hasMetadata() or valueOrDefault().
     */
    public function getMetadata(): mixed { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /**  anyOf[1] (Value): {@see UpdatePickupFulfillmentDetailsInput}. Pickup fulfillment fields to change when updating a fulfillment, such as location, pickup window, and curbside details. Send null to clear a field. anyOf[2] (Value): null.
     * @return array{'address'?: array{'city': string, 'country': string, 'line1': string, 'line2'?: string|null, 'postal_code'?: string|null, 'state'?: string|null}|object|null, 'curbside_instructions'?: string|null, 'customer_arrived_at'?: string|\DateTimeInterface|null, 'expires_at'?: string|\DateTimeInterface|null, 'instructions'?: string|null, 'location_name'?: string|null, 'picked_up_at'?: string|\DateTimeInterface|null, 'pickup_window_duration_seconds'?: int|null, 'prep_time_duration_seconds'?: int|null, 'ready_at'?: string|\DateTimeInterface|null, 'timezone'?: string, 'vehicle_description'?: string|null, 'window_end_at'?: string|\DateTimeInterface|null, 'window_start_at'?: string|\DateTimeInterface|null}|object|null
     * @throws SdkError When pickup_details is omitted; use hasPickupDetails() or valueOrDefault().
     */
    public function getPickupDetails(): mixed { return $this->get('pickup_details'); }
    public function hasPickupDetails(): bool { return $this->has('pickup_details'); }
    /**  anyOf[1] (Value): {@see FulfillmentRecipientRequestInput}. Recipient details you supply when creating or updating a fulfillment: name, email, phone, address, and handling instructions. anyOf[2] (Value): null.
     * @return array{'address'?: AddressRequestInput|array<array-key, mixed>|\stdClass, 'email'?: string, 'instructions'?: string, 'name'?: string, 'phone'?: string}|object|null
     * @throws SdkError When recipient is omitted; use hasRecipient() or valueOrDefault().
     */
    public function getRecipient(): mixed { return $this->get('recipient'); }
    public function hasRecipient(): bool { return $this->has('recipient'); }
    /**  anyOf[1] (Value): {@see UpdateServiceFulfillmentDetailsInput}. Service fulfillment fields to change when updating a fulfillment: scheduled times, completion time, and notes. Send null to clear a field. anyOf[2] (Value): null.
     * @return array{'completed_at'?: string|\DateTimeInterface|null, 'notes'?: string|null, 'scheduled_end_at'?: string|\DateTimeInterface|null, 'scheduled_start_at'?: string|\DateTimeInterface|null, 'timezone'?: string}|object|null
     * @throws SdkError When service_details is omitted; use hasServiceDetails() or valueOrDefault().
     */
    public function getServiceDetails(): mixed { return $this->get('service_details'); }
    public function hasServiceDetails(): bool { return $this->has('service_details'); }
}
