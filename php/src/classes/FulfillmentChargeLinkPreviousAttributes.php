<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $order_charge_id
 * @property-read string|null $order_id
 * Presence-aware response; omitted optional fields return null. */
final class FulfillmentChargeLinkPreviousAttributes extends Model {
    /** @param array{'order_charge_id'?: mixed, 'order_id'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('FulfillmentChargeLinkPreviousAttributes')); }
    /** Order charge associated with this fulfillment. anyOf[1] (Value): string. Order charge associated with this fulfillment. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getOrderChargeId(): string|null { return $this->get('order_charge_id'); }
    public function hasOrderChargeId(): bool { return $this->has('order_charge_id'); }
    /** Order that owns the referenced charge. anyOf[1] (Value): string. Order that owns the referenced charge. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getOrderId(): string|null { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
}
