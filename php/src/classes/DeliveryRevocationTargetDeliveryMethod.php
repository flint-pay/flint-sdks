<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $delivery_method_id
 * @property-read ?string $delivery_method_revision_id
 * @property-read ?string $delivery_rate_callback_id
 * @property-read ?string $delivery_rate_callback_revision_id
 * @property-read ?string $delivery_rate_callback_signing_key_id
 * @property-read string $expected_version
 * @property-read ?string $location_geography_version
 * @property-read ?string $location_id
 * @property-read string $target_type
 * Presence-aware response; omitted optional fields return null. */
final class DeliveryRevocationTargetDeliveryMethod extends Model {
    /** @param array{'delivery_method_id': string, 'delivery_method_revision_id'?: string, 'delivery_rate_callback_id'?: string, 'delivery_rate_callback_revision_id'?: string, 'delivery_rate_callback_signing_key_id'?: string, 'expected_version': string, 'location_geography_version'?: string, 'location_id'?: string, 'target_type': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryRevocationTargetDeliveryMethod')); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getDeliveryMethodId(): string { return $this->get('delivery_method_id'); }
    public function hasDeliveryMethodId(): bool { return $this->has('delivery_method_id'); }
    /** Shape $ (Value): string.
     * @return ?string
     */
    public function getDeliveryMethodRevisionId(): ?string { return $this->get('delivery_method_revision_id'); }
    public function hasDeliveryMethodRevisionId(): bool { return $this->has('delivery_method_revision_id'); }
    /** Shape $ (Value): string.
     * @return ?string
     */
    public function getDeliveryRateCallbackId(): ?string { return $this->get('delivery_rate_callback_id'); }
    public function hasDeliveryRateCallbackId(): bool { return $this->has('delivery_rate_callback_id'); }
    /** Shape $ (Value): string.
     * @return ?string
     */
    public function getDeliveryRateCallbackRevisionId(): ?string { return $this->get('delivery_rate_callback_revision_id'); }
    public function hasDeliveryRateCallbackRevisionId(): bool { return $this->has('delivery_rate_callback_revision_id'); }
    /** Shape $ (Value): string.
     * @return ?string
     */
    public function getDeliveryRateCallbackSigningKeyId(): ?string { return $this->get('delivery_rate_callback_signing_key_id'); }
    public function hasDeliveryRateCallbackSigningKeyId(): bool { return $this->has('delivery_rate_callback_signing_key_id'); }
    /** Shape $ (Value): integer string. Required for delivery_method and delivery_rate_callback targets. The revocation resolves and permanently fences only the exact current revision at this stable-resource version. Omit it for exact revision, geography, and signing-key targets. Use an integer string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     * @return string
     */
    public function getExpectedVersion(): string { return $this->get('expected_version'); }
    public function hasExpectedVersion(): bool { return $this->has('expected_version'); }
    /** Shape $ (Value): integer string. Exact version of the Location geography to revoke. Required for location_geography targets. Use an integer string (decimal digits), not a floating-point number. Format: int64. minimum: 1.
     * @return ?string
     */
    public function getLocationGeographyVersion(): ?string { return $this->get('location_geography_version'); }
    public function hasLocationGeographyVersion(): bool { return $this->has('location_geography_version'); }
    /** Shape $ (Value): string.
     * @return ?string
     */
    public function getLocationId(): ?string { return $this->get('location_id'); }
    public function hasLocationId(): bool { return $this->has('location_id'); }
    /** Shape $ (Value): string.  Value enum: "delivery_method".
     * @return string
     */
    public function getTargetType(): string { return $this->get('target_type'); }
    public function hasTargetType(): bool { return $this->has('target_type'); }
}
