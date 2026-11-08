<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?string $order_charge_id
 * @property-read string $tax_breakdown_id
 * @property-read RefundWithGiftCardCodesTaxBreakdownRefundsItemTaxMoney $tax_money
 * Presence-aware response; omitted optional fields return null. */
final class RefundWithGiftCardCodesTaxBreakdownRefundsItem extends Model {
    /** @param array{'order_charge_id'?: string, 'tax_breakdown_id': string, 'tax_money': mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('RefundWithGiftCardCodesTaxBreakdownRefundsItem')); }
    /** ID of the order charge whose tax this reverses. Present only in the refund's top-level `tax_breakdown_refunds`.
     * @return ?string
     */
    public function getOrderChargeId(): ?string { return $this->get('order_charge_id'); }
    public function hasOrderChargeId(): bool { return $this->has('order_charge_id'); }
    /** ID of the tax breakdown (one jurisdiction's tax) this entry reverses.
     * @return string
     */
    public function getTaxBreakdownId(): string { return $this->get('tax_breakdown_id'); }
    public function hasTaxBreakdownId(): bool { return $this->has('tax_breakdown_id'); }
    /** Tax reversed for this breakdown. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return RefundWithGiftCardCodesTaxBreakdownRefundsItemTaxMoney
     */
    public function getTaxMoney(): RefundWithGiftCardCodesTaxBreakdownRefundsItemTaxMoney { return $this->get('tax_money'); }
    public function hasTaxMoney(): bool { return $this->has('tax_money'); }
}
