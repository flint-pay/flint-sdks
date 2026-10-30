<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $delivery_rate_callback_id
 * Presence-aware input; omitted fields throw when accessed. */
final class DeliveryRateCallbacksGetInput extends Model {
    /** @param array{'delivery_rate_callback_id': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryRateCallbacksGetInput')); }
    /** Flint delivery rate callback ID. Example: "dcb_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When delivery_rate_callback_id is omitted; use hasDeliveryRateCallbackId() or valueOrDefault().
     */
    public function getDeliveryRateCallbackId(): string { return $this->get('delivery_rate_callback_id'); }
    public function hasDeliveryRateCallbackId(): bool { return $this->has('delivery_rate_callback_id'); }
}
