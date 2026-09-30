<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $order_charge_id
 * Presence-aware input; omitted fields throw when accessed. */
final class FulfillmentChargeLinkInput extends Model {
    /** @param array{'order_charge_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('FulfillmentChargeLinkInput')); }
    /** @return string
     * @throws SdkError When order_charge_id is omitted; use hasOrderChargeId() or valueOrDefault().
     */
    public function getOrderChargeId(): string { return $this->get('order_charge_id'); }
    public function hasOrderChargeId(): bool { return $this->has('order_charge_id'); }
}
