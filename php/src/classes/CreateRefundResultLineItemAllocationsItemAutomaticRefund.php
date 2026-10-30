<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read CreateRefundResultLineItemAllocationsItemAutomaticRefundDiscountMoney $discount_money
 * @property-read CreateRefundResultLineItemAllocationsItemAutomaticRefundSubtotalMoney $subtotal_money
 * @property-read CreateRefundResultLineItemAllocationsItemAutomaticRefundTaxMoney $tax_money
 * @property-read CreateRefundResultLineItemAllocationsItemAutomaticRefundTotalMoney $total_money
 * Presence-aware response; omitted optional fields return null. */
final class CreateRefundResultLineItemAllocationsItemAutomaticRefund extends Model {
    /** @param array{'discount_money': mixed, 'subtotal_money': mixed, 'tax_money': mixed, 'total_money': mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreateRefundResultLineItemAllocationsItemAutomaticRefund')); }
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return CreateRefundResultLineItemAllocationsItemAutomaticRefundDiscountMoney
     */
    public function getDiscountMoney(): CreateRefundResultLineItemAllocationsItemAutomaticRefundDiscountMoney { return $this->get('discount_money'); }
    public function hasDiscountMoney(): bool { return $this->has('discount_money'); }
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return CreateRefundResultLineItemAllocationsItemAutomaticRefundSubtotalMoney
     */
    public function getSubtotalMoney(): CreateRefundResultLineItemAllocationsItemAutomaticRefundSubtotalMoney { return $this->get('subtotal_money'); }
    public function hasSubtotalMoney(): bool { return $this->has('subtotal_money'); }
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return CreateRefundResultLineItemAllocationsItemAutomaticRefundTaxMoney
     */
    public function getTaxMoney(): CreateRefundResultLineItemAllocationsItemAutomaticRefundTaxMoney { return $this->get('tax_money'); }
    public function hasTaxMoney(): bool { return $this->has('tax_money'); }
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return CreateRefundResultLineItemAllocationsItemAutomaticRefundTotalMoney
     */
    public function getTotalMoney(): CreateRefundResultLineItemAllocationsItemAutomaticRefundTotalMoney { return $this->get('total_money'); }
    public function hasTotalMoney(): bool { return $this->has('total_money'); }
}
