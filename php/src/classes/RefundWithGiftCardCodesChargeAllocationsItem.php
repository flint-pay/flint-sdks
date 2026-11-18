<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read RefundWithGiftCardCodesChargeAllocationsItemAmountMoney $amount_money
 * @property-read RefundWithGiftCardCodesChargeAllocationsItemDiscountMoney $discount_money
 * @property-read string $order_charge_id
 * @property-read string $order_id
 * @property-read RefundWithGiftCardCodesChargeAllocationsItemSubtotalMoney $subtotal_money
 * @property-read RefundWithGiftCardCodesChargeAllocationsItemTaxMoney $tax_money
 * Presence-aware response; omitted optional fields return null. */
final class RefundWithGiftCardCodesChargeAllocationsItem extends Model {
    /** @param array{'amount_money': mixed, 'discount_money': mixed, 'order_charge_id': string, 'order_id': string, 'subtotal_money': mixed, 'tax_money': mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('RefundWithGiftCardCodesChargeAllocationsItem')); }
    /** Total returned for this charge, including tax. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return RefundWithGiftCardCodesChargeAllocationsItemAmountMoney
     */
    public function getAmountMoney(): RefundWithGiftCardCodesChargeAllocationsItemAmountMoney { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** Discount allocated to the refunded part of the charge. It does not increase the money returned. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return RefundWithGiftCardCodesChargeAllocationsItemDiscountMoney
     */
    public function getDiscountMoney(): RefundWithGiftCardCodesChargeAllocationsItemDiscountMoney { return $this->get('discount_money'); }
    public function hasDiscountMoney(): bool { return $this->has('discount_money'); }
    /** ID of the refunded order charge.
     * @return string
     */
    public function getOrderChargeId(): string { return $this->get('order_charge_id'); }
    public function hasOrderChargeId(): bool { return $this->has('order_charge_id'); }
    /** ID of the order containing the refunded charge.
     * @return string
     */
    public function getOrderId(): string { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** Charge amount returned excluding tax, after discounts. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return RefundWithGiftCardCodesChargeAllocationsItemSubtotalMoney
     */
    public function getSubtotalMoney(): RefundWithGiftCardCodesChargeAllocationsItemSubtotalMoney { return $this->get('subtotal_money'); }
    public function hasSubtotalMoney(): bool { return $this->has('subtotal_money'); }
    /** Tax returned for this charge under automatic or external tax. Included in amount_money. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return RefundWithGiftCardCodesChargeAllocationsItemTaxMoney
     */
    public function getTaxMoney(): RefundWithGiftCardCodesChargeAllocationsItemTaxMoney { return $this->get('tax_money'); }
    public function hasTaxMoney(): bool { return $this->has('tax_money'); }
}
