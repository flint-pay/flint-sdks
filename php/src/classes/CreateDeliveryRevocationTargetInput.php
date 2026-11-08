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
final class CreateDeliveryRevocationTargetInput extends Model {
    /** @param array{'location_geography_version': int, 'location_id': string, 'target_type': string}|object|array{'delivery_rate_callback_id': string, 'delivery_rate_callback_signing_key_id': string, 'target_type': string}|object|array{'delivery_rate_callback_id': string, 'delivery_rate_callback_revision_id': string, 'target_type': string}|object|array{'delivery_method_id': string, 'delivery_method_revision_id': string, 'target_type': string}|object $values */
    public function __construct(mixed $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreateDeliveryRevocationTargetInput')); }
    /** ID of the delivery method that owns the targeted revision. minLength: 1. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
     * @return string
     * @throws SdkError When delivery_method_id is omitted; use hasDeliveryMethodId() or valueOrDefault().
     */
    public function getDeliveryMethodId(): string { return $this->get('delivery_method_id'); }
    public function hasDeliveryMethodId(): bool { return $this->has('delivery_method_id'); }
    /** ID of the immutable revision to fence. It must belong to delivery_method_id. minLength: 1. Example: "dmetr_01KEZF7C001ZF9D92DY1G51GV9".
     * @return string
     * @throws SdkError When delivery_method_revision_id is omitted; use hasDeliveryMethodRevisionId() or valueOrDefault().
     */
    public function getDeliveryMethodRevisionId(): string { return $this->get('delivery_method_revision_id'); }
    public function hasDeliveryMethodRevisionId(): bool { return $this->has('delivery_method_revision_id'); }
    /** ID of the delivery rate callback that owns the targeted revision or signing key. minLength: 1. Example: "dcb_01KEZF7C00Q4GZ7YPQ60GC4HV1".
     * @return string
     * @throws SdkError When delivery_rate_callback_id is omitted; use hasDeliveryRateCallbackId() or valueOrDefault().
     */
    public function getDeliveryRateCallbackId(): string { return $this->get('delivery_rate_callback_id'); }
    public function hasDeliveryRateCallbackId(): bool { return $this->has('delivery_rate_callback_id'); }
    /** ID of the immutable revision to fence. It must belong to delivery_rate_callback_id. minLength: 1. Example: "dcbr_01KEZF7C003QAPFXXMCHC59T5J".
     * @return string
     * @throws SdkError When delivery_rate_callback_revision_id is omitted; use hasDeliveryRateCallbackRevisionId() or valueOrDefault().
     */
    public function getDeliveryRateCallbackRevisionId(): string { return $this->get('delivery_rate_callback_revision_id'); }
    public function hasDeliveryRateCallbackRevisionId(): bool { return $this->has('delivery_rate_callback_revision_id'); }
    /** ID of the HMAC signing key to fence. It must be the named callback's current or previous key; secret material is never returned. minLength: 1. Example: "cbkey_00112233445566778899aabb".
     * @return string
     * @throws SdkError When delivery_rate_callback_signing_key_id is omitted; use hasDeliveryRateCallbackSigningKeyId() or valueOrDefault().
     */
    public function getDeliveryRateCallbackSigningKeyId(): string { return $this->get('delivery_rate_callback_signing_key_id'); }
    public function hasDeliveryRateCallbackSigningKeyId(): bool { return $this->has('delivery_rate_callback_signing_key_id'); }
    /** Exact recorded geography version of location_id to fence. Future and unrecorded versions are not accepted. Format: int64. minimum: 1.
     * @return int
     * @throws SdkError When location_geography_version is omitted; use hasLocationGeographyVersion() or valueOrDefault().
     */
    public function getLocationGeographyVersion(): int { return $this->get('location_geography_version'); }
    public function hasLocationGeographyVersion(): bool { return $this->has('location_geography_version'); }
    /** ID of the Location that recorded the targeted geography version. minLength: 1. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     * @return string
     * @throws SdkError When location_id is omitted; use hasLocationId() or valueOrDefault().
     */
    public function getLocationId(): string { return $this->get('location_id'); }
    public function hasLocationId(): bool { return $this->has('location_id'); }
    /** The kind of exact dependency this revocation fences. Value enum: "location_geography", "delivery_rate_callback_signing_key", "delivery_rate_callback_revision", "delivery_method_revision".
     * @return string
     * @throws SdkError When target_type is omitted; use hasTargetType() or valueOrDefault().
     */
    public function getTargetType(): string { return $this->get('target_type'); }
    public function hasTargetType(): bool { return $this->has('target_type'); }
}
