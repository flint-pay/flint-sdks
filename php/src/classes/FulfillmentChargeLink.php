<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $order_charge_id
 * @property-read string $order_id
 * Presence-aware response; omitted optional fields return null. */
final class FulfillmentChargeLink extends Model {
    /** @param array{'order_charge_id': string, 'order_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('FulfillmentChargeLink')); }
    /** Order charge associated with this fulfillment.
     * @return string
     */
    public function getOrderChargeId(): string { return $this->get('order_charge_id'); }
    public function hasOrderChargeId(): bool { return $this->has('order_charge_id'); }
    /** Order that owns the referenced charge.
     * @return string
     */
    public function getOrderId(): string { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
}
