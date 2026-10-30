<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $delivery_rate_callback_id
 * @property-read string $key_id
 * @property-read string $secret
 * Presence-aware response; omitted optional fields return null. */
final class DeliveryRateCallbackSigningKeyRotation extends Model {
    /** @param array{'delivery_rate_callback_id': string, 'key_id': string, 'secret': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryRateCallbackSigningKeyRotation')); }
    /** delivery_rate_callback_id
     * @return string
     */
    public function getDeliveryRateCallbackId(): string { return $this->get('delivery_rate_callback_id'); }
    public function hasDeliveryRateCallbackId(): bool { return $this->has('delivery_rate_callback_id'); }
    /** key_id
     * @return string
     */
    public function getKeyId(): string { return $this->get('key_id'); }
    public function hasKeyId(): bool { return $this->has('key_id'); }
    /** New signing secret. Returned only by this rotation response.
     * @return string
     */
    public function getSecret(): string { return $this->get('secret'); }
    public function hasSecret(): bool { return $this->has('secret'); }
}
