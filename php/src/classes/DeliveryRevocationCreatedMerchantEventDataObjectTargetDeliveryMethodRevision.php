<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $delivery_method_id
 * @property-read string $delivery_method_revision_id
 * @property-read ?string $delivery_rate_callback_id
 * @property-read ?string $delivery_rate_callback_revision_id
 * @property-read ?string $delivery_rate_callback_signing_key_id
 * @property-read ?int $location_geography_version
 * @property-read ?string $location_id
 * @property-read string $target_type
 * Presence-aware response; omitted optional fields return null. */
final class DeliveryRevocationCreatedMerchantEventDataObjectTargetDeliveryMethodRevision extends Model {
    /** @param array{'delivery_method_id': string, 'delivery_method_revision_id': string, 'delivery_rate_callback_id'?: string, 'delivery_rate_callback_revision_id'?: string, 'delivery_rate_callback_signing_key_id'?: string, 'location_geography_version'?: int, 'location_id'?: string, 'target_type': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryRevocationCreatedMerchantEventDataObjectTargetDeliveryMethodRevision')); }
    /** ID of the delivery method that owns the targeted revision.
     * @return string
     */
    public function getDeliveryMethodId(): string { return $this->get('delivery_method_id'); }
    public function hasDeliveryMethodId(): bool { return $this->has('delivery_method_id'); }
    /** ID of the immutable revision to fence. It must belong to delivery_method_id.
     * @return string
     */
    public function getDeliveryMethodRevisionId(): string { return $this->get('delivery_method_revision_id'); }
    public function hasDeliveryMethodRevisionId(): bool { return $this->has('delivery_method_revision_id'); }
    /** ID of the delivery rate callback that owns the targeted revision or signing key.
     * @return ?string
     */
    public function getDeliveryRateCallbackId(): ?string { return $this->get('delivery_rate_callback_id'); }
    public function hasDeliveryRateCallbackId(): bool { return $this->has('delivery_rate_callback_id'); }
    /** ID of the immutable revision to fence. It must belong to delivery_rate_callback_id.
     * @return ?string
     */
    public function getDeliveryRateCallbackRevisionId(): ?string { return $this->get('delivery_rate_callback_revision_id'); }
    public function hasDeliveryRateCallbackRevisionId(): bool { return $this->has('delivery_rate_callback_revision_id'); }
    /** ID of the HMAC signing key to fence. It must be the named callback's current or previous key; secret material is never returned.
     * @return ?string
     */
    public function getDeliveryRateCallbackSigningKeyId(): ?string { return $this->get('delivery_rate_callback_signing_key_id'); }
    public function hasDeliveryRateCallbackSigningKeyId(): bool { return $this->has('delivery_rate_callback_signing_key_id'); }
    /** Exact recorded geography version of location_id to fence. Future and unrecorded versions are not accepted. Format: int64. minimum: 1.
     * @return ?int
     */
    public function getLocationGeographyVersion(): ?int { return $this->get('location_geography_version'); }
    public function hasLocationGeographyVersion(): bool { return $this->has('location_geography_version'); }
    /** ID of the Location that recorded the targeted geography version.
     * @return ?string
     */
    public function getLocationId(): ?string { return $this->get('location_id'); }
    public function hasLocationId(): bool { return $this->has('location_id'); }
    /** The kind of exact dependency this revocation fences. Fences one immutable revision of the named delivery method. Value enum: "delivery_method_revision".
     * @return string
     */
    public function getTargetType(): string { return $this->get('target_type'); }
    public function hasTargetType(): bool { return $this->has('target_type'); }
}
