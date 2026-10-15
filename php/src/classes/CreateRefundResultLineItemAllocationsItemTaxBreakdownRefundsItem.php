<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $order_charge_id
 * @property-read string $tax_breakdown_id
 * @property-read CreateRefundResultLineItemAllocationsItemTaxBreakdownRefundsItemTaxMoney $tax_money
 * Presence-aware response; omitted fields throw when accessed. */
final class CreateRefundResultLineItemAllocationsItemTaxBreakdownRefundsItem extends Model {
    /** @param array{'order_charge_id'?: string, 'tax_breakdown_id': string, 'tax_money': mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreateRefundResultLineItemAllocationsItemTaxBreakdownRefundsItem')); }
    /** @return string
     * @throws SdkError When order_charge_id is omitted; use hasOrderChargeId() or valueOrDefault().
     */
    public function getOrderChargeId(): string { return $this->get('order_charge_id'); }
    public function hasOrderChargeId(): bool { return $this->has('order_charge_id'); }
    /** @return string
     * @throws SdkError When tax_breakdown_id is omitted; use hasTaxBreakdownId() or valueOrDefault().
     */
    public function getTaxBreakdownId(): string { return $this->get('tax_breakdown_id'); }
    public function hasTaxBreakdownId(): bool { return $this->has('tax_breakdown_id'); }
    /** @return CreateRefundResultLineItemAllocationsItemTaxBreakdownRefundsItemTaxMoney
     * @throws SdkError When tax_money is omitted; use hasTaxMoney() or valueOrDefault().
     */
    public function getTaxMoney(): CreateRefundResultLineItemAllocationsItemTaxBreakdownRefundsItemTaxMoney { return $this->get('tax_money'); }
    public function hasTaxMoney(): bool { return $this->has('tax_money'); }
}
