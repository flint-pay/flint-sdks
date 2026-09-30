<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $order_charge_id
 * Presence-aware response; omitted fields throw when accessed. */
final class FulfillmentChargeLink extends Model {
    /** @param array{'order_charge_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('FulfillmentChargeLink')); }
    /** @return string
     * @throws SdkError When order_charge_id is omitted; use hasOrderChargeId() or valueOrDefault().
     */
    public function getOrderChargeId(): string { return $this->get('order_charge_id'); }
    public function hasOrderChargeId(): bool { return $this->has('order_charge_id'); }
}
