<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $carrier
 * @property-read string|\DateTimeInterface|null $courier_pickup_at
 * @property-read int|null $courier_pickup_window_duration_seconds
 * @property-read string|null $courier_provider_name
 * @property-read string|null $courier_support_phone
 * @property-read string|\DateTimeInterface|null $delivered_at
 * @property-read string|\DateTimeInterface|null $dispatched_at
 * @property-read string|null $dropoff_notes
 * @property-read string|\DateTimeInterface|null $expires_at
 * @property-read string|null $external_delivery_id
 * @property-read string|null $instructions
 * @property-read bool|null $no_contact
 * @property-read int|null $prep_time_duration_seconds
 * @property-read string|\DateTimeInterface|null $ready_at
 * @property-read string|null $service_area_id
 * @property-read string $timezone
 * @property-read string|null $tracking_url
 * @property-read string|\DateTimeInterface|null $window_end_at
 * @property-read string|\DateTimeInterface|null $window_start_at
 * Presence-aware input; omitted fields throw when accessed. */
final class UpdateDeliveryFulfillmentDetailsInput extends Model {
    /** @param array{'carrier'?: string|null, 'courier_pickup_at'?: string|\DateTimeInterface|null, 'courier_pickup_window_duration_seconds'?: int|null, 'courier_provider_name'?: string|null, 'courier_support_phone'?: string|null, 'delivered_at'?: string|\DateTimeInterface|null, 'dispatched_at'?: string|\DateTimeInterface|null, 'dropoff_notes'?: string|null, 'expires_at'?: string|\DateTimeInterface|null, 'external_delivery_id'?: string|null, 'instructions'?: string|null, 'no_contact'?: bool|null, 'prep_time_duration_seconds'?: int|null, 'ready_at'?: string|\DateTimeInterface|null, 'service_area_id'?: string|null, 'timezone'?: string, 'tracking_url'?: string|null, 'window_end_at'?: string|\DateTimeInterface|null, 'window_start_at'?: string|\DateTimeInterface|null}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('UpdateDeliveryFulfillmentDetailsInput')); }
    /** Send null to clear it. minLength: 1.
     * @return string|null
     * @throws SdkError When carrier is omitted; use hasCarrier() or valueOrDefault().
     */
    public function getCarrier(): string|null { return $this->get('carrier'); }
    public function hasCarrier(): bool { return $this->has('carrier'); }
    /** Time at which the courier collected the order. Send null to clear it. Format: date-time. minLength: 1.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When courier_pickup_at is omitted; use hasCourierPickupAt() or valueOrDefault().
     */
    public function getCourierPickupAt(): string|\DateTimeInterface|null { return $this->get('courier_pickup_at'); }
    public function hasCourierPickupAt(): bool { return $this->has('courier_pickup_at'); }
    /** Width of the promised courier pickup window, from 0 to 86400 seconds. Format: int64. minimum: 0. maximum: 86400.
     * @return int|null
     * @throws SdkError When courier_pickup_window_duration_seconds is omitted; use hasCourierPickupWindowDurationSeconds() or valueOrDefault().
     */
    public function getCourierPickupWindowDurationSeconds(): int|null { return $this->get('courier_pickup_window_duration_seconds'); }
    public function hasCourierPickupWindowDurationSeconds(): bool { return $this->has('courier_pickup_window_duration_seconds'); }
    /** Delivery network or merchant fleet provider handling the job. Send null to clear it. minLength: 1. maxLength: 255.
     * @return string|null
     * @throws SdkError When courier_provider_name is omitted; use hasCourierProviderName() or valueOrDefault().
     */
    public function getCourierProviderName(): string|null { return $this->get('courier_provider_name'); }
    public function hasCourierProviderName(): bool { return $this->has('courier_provider_name'); }
    /** Buyer-safe support number for the courier or merchant fleet. Send null to clear it. minLength: 1. maxLength: 30.
     * @return string|null
     * @throws SdkError When courier_support_phone is omitted; use hasCourierSupportPhone() or valueOrDefault().
     */
    public function getCourierSupportPhone(): string|null { return $this->get('courier_support_phone'); }
    public function hasCourierSupportPhone(): bool { return $this->has('courier_support_phone'); }
    /** RFC3339 timestamp. Send null to clear it. Format: date-time. minLength: 1.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When delivered_at is omitted; use hasDeliveredAt() or valueOrDefault().
     */
    public function getDeliveredAt(): string|\DateTimeInterface|null { return $this->get('delivered_at'); }
    public function hasDeliveredAt(): bool { return $this->has('delivered_at'); }
    /** RFC3339 timestamp. Send null to clear it. Format: date-time. minLength: 1.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When dispatched_at is omitted; use hasDispatchedAt() or valueOrDefault().
     */
    public function getDispatchedAt(): string|\DateTimeInterface|null { return $this->get('dispatched_at'); }
    public function hasDispatchedAt(): bool { return $this->has('dispatched_at'); }
    /** Driver-facing notes for the final handoff. Send null to clear it. minLength: 1. maxLength: 2048.
     * @return string|null
     * @throws SdkError When dropoff_notes is omitted; use hasDropoffNotes() or valueOrDefault().
     */
    public function getDropoffNotes(): string|null { return $this->get('dropoff_notes'); }
    public function hasDropoffNotes(): bool { return $this->has('dropoff_notes'); }
    /** Deadline after which an undelivered job should enter merchant review. Send null to clear it. Format: date-time. minLength: 1.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When expires_at is omitted; use hasExpiresAt() or valueOrDefault().
     */
    public function getExpiresAt(): string|\DateTimeInterface|null { return $this->get('expires_at'); }
    public function hasExpiresAt(): bool { return $this->has('expires_at'); }
    /** Stable delivery job ID owned by the courier or merchant dispatch system. Send null to clear it. minLength: 1. maxLength: 255.
     * @return string|null
     * @throws SdkError When external_delivery_id is omitted; use hasExternalDeliveryId() or valueOrDefault().
     */
    public function getExternalDeliveryId(): string|null { return $this->get('external_delivery_id'); }
    public function hasExternalDeliveryId(): bool { return $this->has('external_delivery_id'); }
    /** Send null to clear it. minLength: 1.
     * @return string|null
     * @throws SdkError When instructions is omitted; use hasInstructions() or valueOrDefault().
     */
    public function getInstructions(): string|null { return $this->get('instructions'); }
    public function hasInstructions(): bool { return $this->has('instructions'); }
    /** Whether the buyer requested a no-contact handoff.
     * @return bool|null
     * @throws SdkError When no_contact is omitted; use hasNoContact() or valueOrDefault().
     */
    public function getNoContact(): bool|null { return $this->get('no_contact'); }
    public function hasNoContact(): bool { return $this->has('no_contact'); }
    /** Expected preparation time before courier pickup, from 0 to 86400 seconds. Format: int64. minimum: 0. maximum: 86400.
     * @return int|null
     * @throws SdkError When prep_time_duration_seconds is omitted; use hasPrepTimeDurationSeconds() or valueOrDefault().
     */
    public function getPrepTimeDurationSeconds(): int|null { return $this->get('prep_time_duration_seconds'); }
    public function hasPrepTimeDurationSeconds(): bool { return $this->has('prep_time_duration_seconds'); }
    /** Time at which the order became ready for courier pickup. Send null to clear it. Format: date-time. minLength: 1.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When ready_at is omitted; use hasReadyAt() or valueOrDefault().
     */
    public function getReadyAt(): string|\DateTimeInterface|null { return $this->get('ready_at'); }
    public function hasReadyAt(): bool { return $this->has('ready_at'); }
    /** Send null to clear it. minLength: 1.
     * @return string|null
     * @throws SdkError When service_area_id is omitted; use hasServiceAreaId() or valueOrDefault().
     */
    public function getServiceAreaId(): string|null { return $this->get('service_area_id'); }
    public function hasServiceAreaId(): bool { return $this->has('service_area_id'); }
    /** minLength: 1.
     * @return string
     * @throws SdkError When timezone is omitted; use hasTimezone() or valueOrDefault().
     */
    public function getTimezone(): string { return $this->get('timezone'); }
    public function hasTimezone(): bool { return $this->has('timezone'); }
    /** Absolute HTTPS carrier tracking URL. Embedded URL credentials are rejected. Send null to clear it. minLength: 1.
     * @return string|null
     * @throws SdkError When tracking_url is omitted; use hasTrackingUrl() or valueOrDefault().
     */
    public function getTrackingUrl(): string|null { return $this->get('tracking_url'); }
    public function hasTrackingUrl(): bool { return $this->has('tracking_url'); }
    /** RFC3339 timestamp. Send null to clear it. Format: date-time. minLength: 1.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When window_end_at is omitted; use hasWindowEndAt() or valueOrDefault().
     */
    public function getWindowEndAt(): string|\DateTimeInterface|null { return $this->get('window_end_at'); }
    public function hasWindowEndAt(): bool { return $this->has('window_end_at'); }
    /** RFC3339 timestamp. Send null to clear it. Format: date-time. minLength: 1.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When window_start_at is omitted; use hasWindowStartAt() or valueOrDefault().
     */
    public function getWindowStartAt(): string|\DateTimeInterface|null { return $this->get('window_start_at'); }
    public function hasWindowStartAt(): bool { return $this->has('window_start_at'); }
}
