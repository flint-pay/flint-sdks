<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?string $order_charge_id
 * @property-read string $tax_breakdown_id
 * @property-read CreateRefundResultTaxBreakdownRefundsItemTaxMoney $tax_money
 * Presence-aware response; omitted optional fields return null. */
final class CreateRefundResultTaxBreakdownRefundsItem extends Model {
    /** @param array{'order_charge_id'?: string, 'tax_breakdown_id': string, 'tax_money': mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreateRefundResultTaxBreakdownRefundsItem')); }
    /** order_charge_id
     * @return ?string
     */
    public function getOrderChargeId(): ?string { return $this->get('order_charge_id'); }
    public function hasOrderChargeId(): bool { return $this->has('order_charge_id'); }
    /** tax_breakdown_id
     * @return string
     */
    public function getTaxBreakdownId(): string { return $this->get('tax_breakdown_id'); }
    public function hasTaxBreakdownId(): bool { return $this->has('tax_breakdown_id'); }
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return CreateRefundResultTaxBreakdownRefundsItemTaxMoney
     */
    public function getTaxMoney(): CreateRefundResultTaxBreakdownRefundsItemTaxMoney { return $this->get('tax_money'); }
    public function hasTaxMoney(): bool { return $this->has('tax_money'); }
}
