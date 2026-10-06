<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $carrier
 * @property-read string|\DateTimeInterface|null $courier_pickup_at
 * @property-read string|null $courier_pickup_window_duration_seconds
 * @property-read string|null $courier_provider_name
 * @property-read string|null $courier_support_phone
 * @property-read string|\DateTimeInterface|null $delivered_at
 * @property-read string|\DateTimeInterface|null $dispatched_at
 * @property-read string|null $dropoff_notes
 * @property-read string|\DateTimeInterface|null $expires_at
 * @property-read string|null $external_delivery_id
 * @property-read string|null $instructions
 * @property-read bool|null $no_contact
 * @property-read string|null $prep_time_duration_seconds
 * @property-read string|\DateTimeInterface|null $ready_at
 * @property-read string|null $service_area_id
 * @property-read string $timezone
 * @property-read string|null $tracking_url
 * @property-read string|\DateTimeInterface|null $window_end_at
 * @property-read string|\DateTimeInterface|null $window_start_at
 * Presence-aware input; omitted fields throw when accessed. */
final class UpdateDeliveryFulfillmentDetailsInput extends Model {
    /** @param array{'carrier'?: string|null, 'courier_pickup_at'?: string|\DateTimeInterface|null, 'courier_pickup_window_duration_seconds'?: string|null, 'courier_provider_name'?: string|null, 'courier_support_phone'?: string|null, 'delivered_at'?: string|\DateTimeInterface|null, 'dispatched_at'?: string|\DateTimeInterface|null, 'dropoff_notes'?: string|null, 'expires_at'?: string|\DateTimeInterface|null, 'external_delivery_id'?: string|null, 'instructions'?: string|null, 'no_contact'?: bool|null, 'prep_time_duration_seconds'?: string|null, 'ready_at'?: string|\DateTimeInterface|null, 'service_area_id'?: string|null, 'timezone'?: string, 'tracking_url'?: string|null, 'window_end_at'?: string|\DateTimeInterface|null, 'window_start_at'?: string|\DateTimeInterface|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('UpdateDeliveryFulfillmentDetailsInput')); }
    /** @return string|null
     * @throws SdkError When carrier is omitted; use hasCarrier() or valueOrDefault().
     */
    public function getCarrier(): string|null { return $this->get('carrier'); }
    public function hasCarrier(): bool { return $this->has('carrier'); }
    /** @return string|\DateTimeInterface|null
     * @throws SdkError When courier_pickup_at is omitted; use hasCourierPickupAt() or valueOrDefault().
     */
    public function getCourierPickupAt(): string|\DateTimeInterface|null { return $this->get('courier_pickup_at'); }
    public function hasCourierPickupAt(): bool { return $this->has('courier_pickup_at'); }
    /** @return string|null
     * @throws SdkError When courier_pickup_window_duration_seconds is omitted; use hasCourierPickupWindowDurationSeconds() or valueOrDefault().
     */
    public function getCourierPickupWindowDurationSeconds(): string|null { return $this->get('courier_pickup_window_duration_seconds'); }
    public function hasCourierPickupWindowDurationSeconds(): bool { return $this->has('courier_pickup_window_duration_seconds'); }
    /** @return string|null
     * @throws SdkError When courier_provider_name is omitted; use hasCourierProviderName() or valueOrDefault().
     */
    public function getCourierProviderName(): string|null { return $this->get('courier_provider_name'); }
    public function hasCourierProviderName(): bool { return $this->has('courier_provider_name'); }
    /** @return string|null
     * @throws SdkError When courier_support_phone is omitted; use hasCourierSupportPhone() or valueOrDefault().
     */
    public function getCourierSupportPhone(): string|null { return $this->get('courier_support_phone'); }
    public function hasCourierSupportPhone(): bool { return $this->has('courier_support_phone'); }
    /** @return string|\DateTimeInterface|null
     * @throws SdkError When delivered_at is omitted; use hasDeliveredAt() or valueOrDefault().
     */
    public function getDeliveredAt(): string|\DateTimeInterface|null { return $this->get('delivered_at'); }
    public function hasDeliveredAt(): bool { return $this->has('delivered_at'); }
    /** @return string|\DateTimeInterface|null
     * @throws SdkError When dispatched_at is omitted; use hasDispatchedAt() or valueOrDefault().
     */
    public function getDispatchedAt(): string|\DateTimeInterface|null { return $this->get('dispatched_at'); }
    public function hasDispatchedAt(): bool { return $this->has('dispatched_at'); }
    /** @return string|null
     * @throws SdkError When dropoff_notes is omitted; use hasDropoffNotes() or valueOrDefault().
     */
    public function getDropoffNotes(): string|null { return $this->get('dropoff_notes'); }
    public function hasDropoffNotes(): bool { return $this->has('dropoff_notes'); }
    /** @return string|\DateTimeInterface|null
     * @throws SdkError When expires_at is omitted; use hasExpiresAt() or valueOrDefault().
     */
    public function getExpiresAt(): string|\DateTimeInterface|null { return $this->get('expires_at'); }
    public function hasExpiresAt(): bool { return $this->has('expires_at'); }
    /** @return string|null
     * @throws SdkError When external_delivery_id is omitted; use hasExternalDeliveryId() or valueOrDefault().
     */
    public function getExternalDeliveryId(): string|null { return $this->get('external_delivery_id'); }
    public function hasExternalDeliveryId(): bool { return $this->has('external_delivery_id'); }
    /** @return string|null
     * @throws SdkError When instructions is omitted; use hasInstructions() or valueOrDefault().
     */
    public function getInstructions(): string|null { return $this->get('instructions'); }
    public function hasInstructions(): bool { return $this->has('instructions'); }
    /** @return bool|null
     * @throws SdkError When no_contact is omitted; use hasNoContact() or valueOrDefault().
     */
    public function getNoContact(): bool|null { return $this->get('no_contact'); }
    public function hasNoContact(): bool { return $this->has('no_contact'); }
    /** @return string|null
     * @throws SdkError When prep_time_duration_seconds is omitted; use hasPrepTimeDurationSeconds() or valueOrDefault().
     */
    public function getPrepTimeDurationSeconds(): string|null { return $this->get('prep_time_duration_seconds'); }
    public function hasPrepTimeDurationSeconds(): bool { return $this->has('prep_time_duration_seconds'); }
    /** @return string|\DateTimeInterface|null
     * @throws SdkError When ready_at is omitted; use hasReadyAt() or valueOrDefault().
     */
    public function getReadyAt(): string|\DateTimeInterface|null { return $this->get('ready_at'); }
    public function hasReadyAt(): bool { return $this->has('ready_at'); }
    /** @return string|null
     * @throws SdkError When service_area_id is omitted; use hasServiceAreaId() or valueOrDefault().
     */
    public function getServiceAreaId(): string|null { return $this->get('service_area_id'); }
    public function hasServiceAreaId(): bool { return $this->has('service_area_id'); }
    /** @return string
     * @throws SdkError When timezone is omitted; use hasTimezone() or valueOrDefault().
     */
    public function getTimezone(): string { return $this->get('timezone'); }
    public function hasTimezone(): bool { return $this->has('timezone'); }
    /** @return string|null
     * @throws SdkError When tracking_url is omitted; use hasTrackingUrl() or valueOrDefault().
     */
    public function getTrackingUrl(): string|null { return $this->get('tracking_url'); }
    public function hasTrackingUrl(): bool { return $this->has('tracking_url'); }
    /** @return string|\DateTimeInterface|null
     * @throws SdkError When window_end_at is omitted; use hasWindowEndAt() or valueOrDefault().
     */
    public function getWindowEndAt(): string|\DateTimeInterface|null { return $this->get('window_end_at'); }
    public function hasWindowEndAt(): bool { return $this->has('window_end_at'); }
    /** @return string|\DateTimeInterface|null
     * @throws SdkError When window_start_at is omitted; use hasWindowStartAt() or valueOrDefault().
     */
    public function getWindowStartAt(): string|\DateTimeInterface|null { return $this->get('window_start_at'); }
    public function hasWindowStartAt(): bool { return $this->has('window_start_at'); }
}
