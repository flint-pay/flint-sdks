<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $carrier
 * @property-read string|\DateTimeInterface $courier_pickup_at
 * @property-read int $courier_pickup_window_duration_seconds
 * @property-read string $courier_provider_name
 * @property-read string $courier_support_phone
 * @property-read string|\DateTimeInterface $delivered_at
 * @property-read string|\DateTimeInterface $dispatched_at
 * @property-read string $dropoff_notes
 * @property-read string|\DateTimeInterface $expires_at
 * @property-read string $instructions
 * @property-read bool $no_contact
 * @property-read int $prep_time_duration_seconds
 * @property-read string|\DateTimeInterface $ready_at
 * @property-read string $timezone
 * @property-read string $tracking_url
 * @property-read string|\DateTimeInterface $window_end_at
 * @property-read string|\DateTimeInterface $window_start_at
 * Presence-aware input; omitted fields throw when accessed. */
final class BuyerDeliveryFulfillmentDetailsInput extends Model {
    /** @param array{'carrier'?: string, 'courier_pickup_at'?: string|\DateTimeInterface, 'courier_pickup_window_duration_seconds'?: int, 'courier_provider_name'?: string, 'courier_support_phone'?: string, 'delivered_at'?: string|\DateTimeInterface, 'dispatched_at'?: string|\DateTimeInterface, 'dropoff_notes'?: string, 'expires_at'?: string|\DateTimeInterface, 'instructions'?: string, 'no_contact'?: bool, 'prep_time_duration_seconds'?: int, 'ready_at'?: string|\DateTimeInterface, 'timezone'?: string, 'tracking_url'?: string, 'window_end_at'?: string|\DateTimeInterface, 'window_start_at'?: string|\DateTimeInterface, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BuyerDeliveryFulfillmentDetailsInput')); }
    /** Carrier responsible for the local delivery.
     * @return string
     * @throws SdkError When carrier is omitted; use hasCarrier() or valueOrDefault().
     */
    public function getCarrier(): string { return $this->get('carrier'); }
    public function hasCarrier(): bool { return $this->has('carrier'); }
    /** Time at which the courier collected the order. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When courier_pickup_at is omitted; use hasCourierPickupAt() or valueOrDefault().
     */
    public function getCourierPickupAt(): string|\DateTimeInterface { return $this->get('courier_pickup_at'); }
    public function hasCourierPickupAt(): bool { return $this->has('courier_pickup_at'); }
    /** Width of the promised courier pickup window, from 0 to 86400 seconds. Format: int64. minimum: 0. maximum: 86400.
     * @return int
     * @throws SdkError When courier_pickup_window_duration_seconds is omitted; use hasCourierPickupWindowDurationSeconds() or valueOrDefault().
     */
    public function getCourierPickupWindowDurationSeconds(): int { return $this->get('courier_pickup_window_duration_seconds'); }
    public function hasCourierPickupWindowDurationSeconds(): bool { return $this->has('courier_pickup_window_duration_seconds'); }
    /** Delivery network or merchant fleet provider handling the job. maxLength: 255.
     * @return string
     * @throws SdkError When courier_provider_name is omitted; use hasCourierProviderName() or valueOrDefault().
     */
    public function getCourierProviderName(): string { return $this->get('courier_provider_name'); }
    public function hasCourierProviderName(): bool { return $this->has('courier_provider_name'); }
    /** Buyer-safe support number for the courier or merchant fleet. maxLength: 30.
     * @return string
     * @throws SdkError When courier_support_phone is omitted; use hasCourierSupportPhone() or valueOrDefault().
     */
    public function getCourierSupportPhone(): string { return $this->get('courier_support_phone'); }
    public function hasCourierSupportPhone(): bool { return $this->has('courier_support_phone'); }
    /** When the items were delivered, in RFC3339 format. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When delivered_at is omitted; use hasDeliveredAt() or valueOrDefault().
     */
    public function getDeliveredAt(): string|\DateTimeInterface { return $this->get('delivered_at'); }
    public function hasDeliveredAt(): bool { return $this->has('delivered_at'); }
    /** When the delivery was dispatched, in RFC3339 format. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When dispatched_at is omitted; use hasDispatchedAt() or valueOrDefault().
     */
    public function getDispatchedAt(): string|\DateTimeInterface { return $this->get('dispatched_at'); }
    public function hasDispatchedAt(): bool { return $this->has('dispatched_at'); }
    /** Driver-facing notes for the final handoff. Omitted for a checkout session credential that doesn't act for the customer the buyer verified. maxLength: 2048.
     * @return string
     * @throws SdkError When dropoff_notes is omitted; use hasDropoffNotes() or valueOrDefault().
     */
    public function getDropoffNotes(): string { return $this->get('dropoff_notes'); }
    public function hasDropoffNotes(): bool { return $this->has('dropoff_notes'); }
    /** Deadline after which an undelivered job should enter merchant review. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When expires_at is omitted; use hasExpiresAt() or valueOrDefault().
     */
    public function getExpiresAt(): string|\DateTimeInterface { return $this->get('expires_at'); }
    public function hasExpiresAt(): bool { return $this->has('expires_at'); }
    /** Omitted for a checkout session credential that doesn't act for the customer the buyer verified.
     * @return string
     * @throws SdkError When instructions is omitted; use hasInstructions() or valueOrDefault().
     */
    public function getInstructions(): string { return $this->get('instructions'); }
    public function hasInstructions(): bool { return $this->has('instructions'); }
    /** Whether the buyer requested a no-contact handoff. Omitted for a checkout session credential that doesn't act for the customer the buyer verified.
     * @return bool
     * @throws SdkError When no_contact is omitted; use hasNoContact() or valueOrDefault().
     */
    public function getNoContact(): bool { return $this->get('no_contact'); }
    public function hasNoContact(): bool { return $this->has('no_contact'); }
    /** Expected preparation time before courier pickup, from 0 to 86400 seconds. Format: int64. minimum: 0. maximum: 86400.
     * @return int
     * @throws SdkError When prep_time_duration_seconds is omitted; use hasPrepTimeDurationSeconds() or valueOrDefault().
     */
    public function getPrepTimeDurationSeconds(): int { return $this->get('prep_time_duration_seconds'); }
    public function hasPrepTimeDurationSeconds(): bool { return $this->has('prep_time_duration_seconds'); }
    /** Time at which the order became ready for courier pickup. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When ready_at is omitted; use hasReadyAt() or valueOrDefault().
     */
    public function getReadyAt(): string|\DateTimeInterface { return $this->get('ready_at'); }
    public function hasReadyAt(): bool { return $this->has('ready_at'); }
    /** Timezone used to display the local delivery window.
     * @return string
     * @throws SdkError When timezone is omitted; use hasTimezone() or valueOrDefault().
     */
    public function getTimezone(): string { return $this->get('timezone'); }
    public function hasTimezone(): bool { return $this->has('timezone'); }
    /** Absolute HTTPS carrier tracking URL. Embedded URL credentials are rejected. Omitted for a checkout session credential that doesn't act for the customer the buyer verified.
     * @return string
     * @throws SdkError When tracking_url is omitted; use hasTrackingUrl() or valueOrDefault().
     */
    public function getTrackingUrl(): string { return $this->get('tracking_url'); }
    public function hasTrackingUrl(): bool { return $this->has('tracking_url'); }
    /** End of the promised delivery window, in RFC3339 format. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When window_end_at is omitted; use hasWindowEndAt() or valueOrDefault().
     */
    public function getWindowEndAt(): string|\DateTimeInterface { return $this->get('window_end_at'); }
    public function hasWindowEndAt(): bool { return $this->has('window_end_at'); }
    /** Start of the promised delivery window, in RFC3339 format. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When window_start_at is omitted; use hasWindowStartAt() or valueOrDefault().
     */
    public function getWindowStartAt(): string|\DateTimeInterface { return $this->get('window_start_at'); }
    public function hasWindowStartAt(): bool { return $this->has('window_start_at'); }
}
