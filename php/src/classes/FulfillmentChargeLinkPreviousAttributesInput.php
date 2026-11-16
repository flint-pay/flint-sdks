<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $order_charge_id
 * @property-read string|null $order_id
 * Presence-aware input; omitted fields throw when accessed. */
final class FulfillmentChargeLinkPreviousAttributesInput extends Model {
    /** @param array{'order_charge_id'?: string|null, 'order_id'?: string|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('FulfillmentChargeLinkPreviousAttributesInput')); }
    /** Order charge associated with this fulfillment. anyOf[1] (Value): string. Order charge associated with this fulfillment. Example: "och_01KEZF7C00XX8AKACP0GHKFWWT". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When order_charge_id is omitted; use hasOrderChargeId() or valueOrDefault().
     */
    public function getOrderChargeId(): mixed { return $this->get('order_charge_id'); }
    public function hasOrderChargeId(): bool { return $this->has('order_charge_id'); }
    /** Order that owns the referenced charge. anyOf[1] (Value): string. Order that owns the referenced charge. Example: "ord_01KEZF7C0054GQKJ142A8X367A". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When order_id is omitted; use hasOrderId() or valueOrDefault().
     */
    public function getOrderId(): mixed { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
}
