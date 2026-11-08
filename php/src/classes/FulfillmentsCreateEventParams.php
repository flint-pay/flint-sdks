<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read array<array-key, string>|\stdClass $custom_details
 * @property-read string $event_type
 * @property-read string $external_event_id
 * @property-read string $external_status
 * @property-read string $external_system
 * @property-read string $location_description
 * @property-read string $message
 * @property-read string|\DateTimeInterface $occurred_at
 * @property-read string $package_id
 * @property-read string $shipment_id
 * Presence-aware input; omitted fields throw when accessed. */
final class FulfillmentsCreateEventParams extends Model {
    /** @param array{'custom_details'?: array<array-key, string>|\stdClass, 'event_type': string, 'external_event_id'?: string, 'external_status'?: string, 'external_system'?: string, 'location_description'?: string, 'message'?: string, 'occurred_at'?: string|\DateTimeInterface, 'package_id'?: string, 'shipment_id'?: string, 'Flint-Merchant-Id'?: string, 'Flint-Mode'?: string, 'Flint-Sandbox-Id'?: string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('FulfillmentsCreateEventParams')); }
    /** Free-form details attached to the event. * (Value): string. minLength: 1.
     * @return array<array-key, string>|\stdClass
     * @throws SdkError When custom_details is omitted; use hasCustomDetails() or valueOrDefault().
     */
    public function getCustomDetails(): array|object { return $this->get('custom_details'); }
    public function hasCustomDetails(): bool { return $this->has('custom_details'); }
    /** What kind of event this records. Value enum: "carrier_scan", "custom".
     * @return string
     * @throws SdkError When event_type is omitted; use hasEventType() or valueOrDefault().
     */
    public function getEventType(): string { return $this->get('event_type'); }
    public function hasEventType(): bool { return $this->has('event_type'); }
    /** Event identifier assigned by that integration. Flint records a repeated pair of `external_system` and `external_event_id` once. minLength: 1. Example: "warehouse-1842".
     * @return string
     * @throws SdkError When external_event_id is omitted; use hasExternalEventId() or valueOrDefault().
     */
    public function getExternalEventId(): string { return $this->get('external_event_id'); }
    public function hasExternalEventId(): bool { return $this->has('external_event_id'); }
    /** Status supplied by that integration. minLength: 1.
     * @return string
     * @throws SdkError When external_status is omitted; use hasExternalStatus() or valueOrDefault().
     */
    public function getExternalStatus(): string { return $this->get('external_status'); }
    public function hasExternalStatus(): bool { return $this->has('external_status'); }
    /** Integration that supplied the event. minLength: 1.
     * @return string
     * @throws SdkError When external_system is omitted; use hasExternalSystem() or valueOrDefault().
     */
    public function getExternalSystem(): string { return $this->get('external_system'); }
    public function hasExternalSystem(): bool { return $this->has('external_system'); }
    /** Where the event happened, such as `Louisville, KY`. minLength: 1.
     * @return string
     * @throws SdkError When location_description is omitted; use hasLocationDescription() or valueOrDefault().
     */
    public function getLocationDescription(): string { return $this->get('location_description'); }
    public function hasLocationDescription(): bool { return $this->has('location_description'); }
    /** Human-readable text describing the event. minLength: 1.
     * @return string
     * @throws SdkError When message is omitted; use hasMessage() or valueOrDefault().
     */
    public function getMessage(): string { return $this->get('message'); }
    public function hasMessage(): bool { return $this->has('message'); }
    /** Provider event timestamp. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When occurred_at is omitted; use hasOccurredAt() or valueOrDefault().
     */
    public function getOccurredAt(): string|\DateTimeInterface { return $this->get('occurred_at'); }
    public function hasOccurredAt(): bool { return $this->has('occurred_at'); }
    /** Nested package associated with this observational event. Flint resolves and validates its shipment and fulfillment ownership. minLength: 1. Example: "pkg_01KEZF7C00ZZA16BJCEJBWKJ5R".
     * @return string
     * @throws SdkError When package_id is omitted; use hasPackageId() or valueOrDefault().
     */
    public function getPackageId(): string { return $this->get('package_id'); }
    public function hasPackageId(): bool { return $this->has('package_id'); }
    /** Nested shipment associated with this observational event. Flint validates that it belongs to the fulfillment in the path. minLength: 1. Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68".
     * @return string
     * @throws SdkError When shipment_id is omitted; use hasShipmentId() or valueOrDefault().
     */
    public function getShipmentId(): string { return $this->get('shipment_id'); }
    public function hasShipmentId(): bool { return $this->has('shipment_id'); }
    /** Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: ^mer_[0-9A-HJKMNP-TV-Z]{26}$.
     * @return string
     * @throws SdkError When Flint-Merchant-Id is omitted; use hasFlintMerchantId() or valueOrDefault().
     */
    public function getFlintMerchantId(): string { return $this->get('Flint-Merchant-Id'); }
    public function hasFlintMerchantId(): bool { return $this->has('Flint-Merchant-Id'); }
    /** Mode of the request context, live or test. Optional; it must match the credential's mode. Value enum: "test", "live".
     * @return string
     * @throws SdkError When Flint-Mode is omitted; use hasFlintMode() or valueOrDefault().
     */
    public function getFlintMode(): string { return $this->get('Flint-Mode'); }
    public function hasFlintMode(): bool { return $this->has('Flint-Mode'); }
    /** Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: ^test_[0-9A-HJKMNP-TV-Z]{26}$.
     * @return string
     * @throws SdkError When Flint-Sandbox-Id is omitted; use hasFlintSandboxId() or valueOrDefault().
     */
    public function getFlintSandboxId(): string { return $this->get('Flint-Sandbox-Id'); }
    public function hasFlintSandboxId(): bool { return $this->has('Flint-Sandbox-Id'); }
}
