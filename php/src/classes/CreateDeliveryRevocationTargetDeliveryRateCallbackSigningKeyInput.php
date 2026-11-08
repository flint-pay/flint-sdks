<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $delivery_rate_callback_id
 * @property-read string $delivery_rate_callback_signing_key_id
 * @property-read string $target_type
 * Presence-aware input; omitted fields throw when accessed. */
final class CreateDeliveryRevocationTargetDeliveryRateCallbackSigningKeyInput extends Model {
    /** @param array{'delivery_rate_callback_id': string, 'delivery_rate_callback_signing_key_id': string, 'target_type': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreateDeliveryRevocationTargetDeliveryRateCallbackSigningKeyInput')); }
    /** ID of the delivery rate callback that owns the targeted revision or signing key. minLength: 1. Example: "dcb_01KEZF7C00Q4GZ7YPQ60GC4HV1".
     * @return string
     * @throws SdkError When delivery_rate_callback_id is omitted; use hasDeliveryRateCallbackId() or valueOrDefault().
     */
    public function getDeliveryRateCallbackId(): string { return $this->get('delivery_rate_callback_id'); }
    public function hasDeliveryRateCallbackId(): bool { return $this->has('delivery_rate_callback_id'); }
    /** ID of the HMAC signing key to fence. It must be the named callback's current or previous key; secret material is never returned. minLength: 1. Example: "cbkey_00112233445566778899aabb".
     * @return string
     * @throws SdkError When delivery_rate_callback_signing_key_id is omitted; use hasDeliveryRateCallbackSigningKeyId() or valueOrDefault().
     */
    public function getDeliveryRateCallbackSigningKeyId(): string { return $this->get('delivery_rate_callback_signing_key_id'); }
    public function hasDeliveryRateCallbackSigningKeyId(): bool { return $this->has('delivery_rate_callback_signing_key_id'); }
    /** Fences one current or previous HMAC signing key of the named delivery rate callback. Value enum: "delivery_rate_callback_signing_key".
     * @return string
     * @throws SdkError When target_type is omitted; use hasTargetType() or valueOrDefault().
     */
    public function getTargetType(): string { return $this->get('target_type'); }
    public function hasTargetType(): bool { return $this->has('target_type'); }
}
