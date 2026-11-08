<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read RefundWithGiftCardCodesLineItemAllocationsItemAutomaticRefundDiscountMoney $discount_money
 * @property-read RefundWithGiftCardCodesLineItemAllocationsItemAutomaticRefundSubtotalMoney $subtotal_money
 * @property-read RefundWithGiftCardCodesLineItemAllocationsItemAutomaticRefundTaxMoney $tax_money
 * @property-read RefundWithGiftCardCodesLineItemAllocationsItemAutomaticRefundTotalMoney $total_money
 * Presence-aware response; omitted optional fields return null. */
final class RefundWithGiftCardCodesLineItemAllocationsItemAutomaticRefund extends Model {
    /** @param array{'discount_money': mixed, 'subtotal_money': mixed, 'tax_money': mixed, 'total_money': mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('RefundWithGiftCardCodesLineItemAllocationsItemAutomaticRefund')); }
    /** Discount allocated to the refunded portion. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return RefundWithGiftCardCodesLineItemAllocationsItemAutomaticRefundDiscountMoney
     */
    public function getDiscountMoney(): RefundWithGiftCardCodesLineItemAllocationsItemAutomaticRefundDiscountMoney { return $this->get('discount_money'); }
    public function hasDiscountMoney(): bool { return $this->has('discount_money'); }
    /** Price of the refunded portion before discounts. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return RefundWithGiftCardCodesLineItemAllocationsItemAutomaticRefundSubtotalMoney
     */
    public function getSubtotalMoney(): RefundWithGiftCardCodesLineItemAllocationsItemAutomaticRefundSubtotalMoney { return $this->get('subtotal_money'); }
    public function hasSubtotalMoney(): bool { return $this->has('subtotal_money'); }
    /** Tax on the refunded portion. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return RefundWithGiftCardCodesLineItemAllocationsItemAutomaticRefundTaxMoney
     */
    public function getTaxMoney(): RefundWithGiftCardCodesLineItemAllocationsItemAutomaticRefundTaxMoney { return $this->get('tax_money'); }
    public function hasTaxMoney(): bool { return $this->has('tax_money'); }
    /** What the refunded portion comes to before adjustments. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return RefundWithGiftCardCodesLineItemAllocationsItemAutomaticRefundTotalMoney
     */
    public function getTotalMoney(): RefundWithGiftCardCodesLineItemAllocationsItemAutomaticRefundTotalMoney { return $this->get('total_money'); }
    public function hasTotalMoney(): bool { return $this->has('total_money'); }
}
