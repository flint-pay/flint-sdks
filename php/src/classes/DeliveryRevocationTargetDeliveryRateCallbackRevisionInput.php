<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $delivery_rate_callback_id
 * @property-read string $delivery_rate_callback_revision_id
 * @property-read string $target_type
 * Presence-aware input; omitted fields throw when accessed. */
final class DeliveryRevocationTargetDeliveryRateCallbackRevisionInput extends Model {
    /** @param array{'delivery_rate_callback_id': string, 'delivery_rate_callback_revision_id': string, 'target_type': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryRevocationTargetDeliveryRateCallbackRevisionInput')); }
    /** ID of the delivery rate callback that owns the targeted revision or signing key. Example: "dcb_01KEZF7C00Q4GZ7YPQ60GC4HV1".
     * @return string
     * @throws SdkError When delivery_rate_callback_id is omitted; use hasDeliveryRateCallbackId() or valueOrDefault().
     */
    public function getDeliveryRateCallbackId(): string { return $this->get('delivery_rate_callback_id'); }
    public function hasDeliveryRateCallbackId(): bool { return $this->has('delivery_rate_callback_id'); }
    /** ID of the immutable revision to fence. It must belong to delivery_rate_callback_id. Example: "dcbr_01KEZF7C003QAPFXXMCHC59T5J".
     * @return string
     * @throws SdkError When delivery_rate_callback_revision_id is omitted; use hasDeliveryRateCallbackRevisionId() or valueOrDefault().
     */
    public function getDeliveryRateCallbackRevisionId(): string { return $this->get('delivery_rate_callback_revision_id'); }
    public function hasDeliveryRateCallbackRevisionId(): bool { return $this->has('delivery_rate_callback_revision_id'); }
    /** Fences one immutable revision of the named delivery rate callback. Value enum: "delivery_rate_callback_revision".
     * @return string
     * @throws SdkError When target_type is omitted; use hasTargetType() or valueOrDefault().
     */
    public function getTargetType(): string { return $this->get('target_type'); }
    public function hasTargetType(): bool { return $this->has('target_type'); }
}
