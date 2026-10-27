<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $carrier
 * @property-read array{'height': int|float, 'length': int|float, 'unit': string, 'width': int|float}|object|null $dimensions
 * @property-read string|\DateTimeInterface|null $expected_delivery_at
 * @property-read string $expected_version
 * @property-read string|null $external_reference_id
 * @property-read string|null $external_system
 * @property-read string|null $label_url
 * @property-read array<array-key, string|null>|\stdClass|null $metadata
 * @property-read string|null $service_code
 * @property-read string|null $status_reason
 * @property-read string|null $tracking_number
 * @property-read string|null $tracking_url
 * @property-read array{'unit': string, 'value': int|float}|object|null $weight
 * Presence-aware input; omitted fields throw when accessed. */
final class UpdatePackageRequestInput extends Model {
    /** @param array{'carrier'?: string|null, 'dimensions'?: array{'height': int|float, 'length': int|float, 'unit': string, 'width': int|float}|object|null, 'expected_delivery_at'?: string|\DateTimeInterface|null, 'expected_version'?: string, 'external_reference_id'?: string|null, 'external_system'?: string|null, 'label_url'?: string|null, 'metadata'?: array<array-key, string|null>|\stdClass|null, 'service_code'?: string|null, 'status_reason'?: string|null, 'tracking_number'?: string|null, 'tracking_url'?: string|null, 'weight'?: array{'unit': string, 'value': int|float}|object|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('UpdatePackageRequestInput')); }
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1.
     * @return string|null
     * @throws SdkError When carrier is omitted; use hasCarrier() or valueOrDefault().
     */
    public function getCarrier(): string|null { return $this->get('carrier'); }
    public function hasCarrier(): bool { return $this->has('carrier'); }
    /** Shape $ (Value): {@see DimensionsInput} or null. Shape $.anyOf[1] (Value): {@see DimensionsInput}. Package or item dimensions as `length`, `width`, and `height` in the given `unit`. Shape $.anyOf[2] (Value): null.
     * @return array{'height': int|float, 'length': int|float, 'unit': string, 'width': int|float}|object|null
     * @throws SdkError When dimensions is omitted; use hasDimensions() or valueOrDefault().
     */
    public function getDimensions(): mixed { return $this->get('dimensions'); }
    public function hasDimensions(): bool { return $this->has('dimensions'); }
    /** Shape $ (Value): string or null. When the carrier or merchant expects this package to arrive. Past dates are allowed. Send null to clear it; omit to leave it unchanged on updates and transitions. Format: date-time. minLength: 1.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When expected_delivery_at is omitted; use hasExpectedDeliveryAt() or valueOrDefault().
     */
    public function getExpectedDeliveryAt(): string|\DateTimeInterface|null { return $this->get('expected_delivery_at'); }
    public function hasExpectedDeliveryAt(): bool { return $this->has('expected_delivery_at'); }
    /** Shape $ (Value): integer string. Optional resource version last read by the caller. Use an integer string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     * @return string
     * @throws SdkError When expected_version is omitted; use hasExpectedVersion() or valueOrDefault().
     */
    public function getExpectedVersion(): string { return $this->get('expected_version'); }
    public function hasExpectedVersion(): bool { return $this->has('expected_version'); }
    /** Shape $ (Value): string or null. Caller-owned identifier for this resource in an external system. Requires external_system. External references are not unique. Use Idempotency-Key for retries. Send null to clear it. minLength: 1. maxLength: 255.
     * @return string|null
     * @throws SdkError When external_reference_id is omitted; use hasExternalReferenceId() or valueOrDefault().
     */
    public function getExternalReferenceId(): string|null { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** Shape $ (Value): string or null. Name of the external system that external_reference_id belongs to. External references are not unique. Use Idempotency-Key for retries. Send null to clear it. minLength: 1.
     * @return string|null
     * @throws SdkError When external_system is omitted; use hasExternalSystem() or valueOrDefault().
     */
    public function getExternalSystem(): string|null { return $this->get('external_system'); }
    public function hasExternalSystem(): bool { return $this->has('external_system'); }
    /** Shape $ (Value): string or null. Merchant or integration supplied HTTPS shipping-label URL for authenticated merchant workflows. Non-Flint URLs must include external_system for provenance. Flint does not currently manage label file hosting or buyer-facing label downloads. Send null to clear it. minLength: 1.
     * @return string|null
     * @throws SdkError When label_url is omitted; use hasLabelUrl() or valueOrDefault().
     */
    public function getLabelUrl(): string|null { return $this->get('label_url'); }
    public function hasLabelUrl(): bool { return $this->has('label_url'); }
    /** Shape $ (Value): Map of (string or null) or null. Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Shape $.* (Value): string or null. minLength: 1.
     * @return array<array-key, string|null>|\stdClass|null
     * @throws SdkError When metadata is omitted; use hasMetadata() or valueOrDefault().
     */
    public function getMetadata(): array|object|null { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1.
     * @return string|null
     * @throws SdkError When service_code is omitted; use hasServiceCode() or valueOrDefault().
     */
    public function getServiceCode(): string|null { return $this->get('service_code'); }
    public function hasServiceCode(): bool { return $this->has('service_code'); }
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1.
     * @return string|null
     * @throws SdkError When status_reason is omitted; use hasStatusReason() or valueOrDefault().
     */
    public function getStatusReason(): string|null { return $this->get('status_reason'); }
    public function hasStatusReason(): bool { return $this->has('status_reason'); }
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1.
     * @return string|null
     * @throws SdkError When tracking_number is omitted; use hasTrackingNumber() or valueOrDefault().
     */
    public function getTrackingNumber(): string|null { return $this->get('tracking_number'); }
    public function hasTrackingNumber(): bool { return $this->has('tracking_number'); }
    /** Shape $ (Value): string or null. Absolute HTTPS carrier tracking URL. Embedded URL credentials are rejected. Send null to clear it. minLength: 1.
     * @return string|null
     * @throws SdkError When tracking_url is omitted; use hasTrackingUrl() or valueOrDefault().
     */
    public function getTrackingUrl(): string|null { return $this->get('tracking_url'); }
    public function hasTrackingUrl(): bool { return $this->has('tracking_url'); }
    /** Shape $ (Value): {@see WeightInput} or null. Shape $.anyOf[1] (Value): {@see WeightInput}. A weight value in grams, kilograms, ounces, or pounds, used in delivery profile configuration. Shape $.anyOf[2] (Value): null.
     * @return array{'unit': string, 'value': int|float}|object|null
     * @throws SdkError When weight is omitted; use hasWeight() or valueOrDefault().
     */
    public function getWeight(): mixed { return $this->get('weight'); }
    public function hasWeight(): bool { return $this->has('weight'); }
}
