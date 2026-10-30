<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $delivery_method_id
 * @property-read string $delivery_method_revision_id
 * @property-read string $delivery_rate_callback_id
 * @property-read string $delivery_rate_callback_revision_id
 * @property-read string $delivery_rate_callback_signing_key_id
 * @property-read int $location_geography_version
 * @property-read string $location_id
 * @property-read string $target_type
 * Presence-aware input; omitted fields throw when accessed. */
final class RevokeDeliveryDependencyTargetDeliveryMethodRevisionInput extends Model {
    /** @param array{'delivery_method_id': string, 'delivery_method_revision_id': string, 'delivery_rate_callback_id'?: string, 'delivery_rate_callback_revision_id'?: string, 'delivery_rate_callback_signing_key_id'?: string, 'location_geography_version'?: int, 'location_id'?: string, 'target_type': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('RevokeDeliveryDependencyTargetDeliveryMethodRevisionInput')); }
    /** minLength: 1.
     * @return string
     * @throws SdkError When delivery_method_id is omitted; use hasDeliveryMethodId() or valueOrDefault().
     */
    public function getDeliveryMethodId(): string { return $this->get('delivery_method_id'); }
    public function hasDeliveryMethodId(): bool { return $this->has('delivery_method_id'); }
    /** minLength: 1.
     * @return string
     * @throws SdkError When delivery_method_revision_id is omitted; use hasDeliveryMethodRevisionId() or valueOrDefault().
     */
    public function getDeliveryMethodRevisionId(): string { return $this->get('delivery_method_revision_id'); }
    public function hasDeliveryMethodRevisionId(): bool { return $this->has('delivery_method_revision_id'); }
    /** minLength: 1.
     * @return string
     * @throws SdkError When delivery_rate_callback_id is omitted; use hasDeliveryRateCallbackId() or valueOrDefault().
     */
    public function getDeliveryRateCallbackId(): string { return $this->get('delivery_rate_callback_id'); }
    public function hasDeliveryRateCallbackId(): bool { return $this->has('delivery_rate_callback_id'); }
    /** minLength: 1.
     * @return string
     * @throws SdkError When delivery_rate_callback_revision_id is omitted; use hasDeliveryRateCallbackRevisionId() or valueOrDefault().
     */
    public function getDeliveryRateCallbackRevisionId(): string { return $this->get('delivery_rate_callback_revision_id'); }
    public function hasDeliveryRateCallbackRevisionId(): bool { return $this->has('delivery_rate_callback_revision_id'); }
    /** minLength: 1.
     * @return string
     * @throws SdkError When delivery_rate_callback_signing_key_id is omitted; use hasDeliveryRateCallbackSigningKeyId() or valueOrDefault().
     */
    public function getDeliveryRateCallbackSigningKeyId(): string { return $this->get('delivery_rate_callback_signing_key_id'); }
    public function hasDeliveryRateCallbackSigningKeyId(): bool { return $this->has('delivery_rate_callback_signing_key_id'); }
    /** Exact version of the Location geography to revoke. Required for location_geography targets. Format: int64. minimum: 1.
     * @return int
     * @throws SdkError When location_geography_version is omitted; use hasLocationGeographyVersion() or valueOrDefault().
     */
    public function getLocationGeographyVersion(): int { return $this->get('location_geography_version'); }
    public function hasLocationGeographyVersion(): bool { return $this->has('location_geography_version'); }
    /** minLength: 1.
     * @return string
     * @throws SdkError When location_id is omitted; use hasLocationId() or valueOrDefault().
     */
    public function getLocationId(): string { return $this->get('location_id'); }
    public function hasLocationId(): bool { return $this->has('location_id'); }
    /** Value enum: "delivery_method_revision".
     * @return string
     * @throws SdkError When target_type is omitted; use hasTargetType() or valueOrDefault().
     */
    public function getTargetType(): string { return $this->get('target_type'); }
    public function hasTargetType(): bool { return $this->has('target_type'); }
}
